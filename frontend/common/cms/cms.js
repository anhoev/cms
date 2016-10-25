"use strict";
import 'ng-file-upload';
import TypeClass from './Type';
import QueryBuilder from "./QueryBuilder";
import 'angular-websocket';
import Uuid from 'uuid';
import 'jquery-ui/ui/widgets/draggable';
import 'jquery-ui/ui/widgets/resizable';
import traverse from 'traverse';
import 'angular-translate';

import _io from 'socket.io-client';
window.io = _io;

window.Enum = {
    Load: {NOT: 'NOT', LOADING: 'LOADING', LOADED: 'LOADED', PART_LOADED: 'PART_LOADED'},
    EditMode: {ALL: 'ALL', VIEWELEMENT: 'VIEWELEMENT', DATAELEMENT: 'DATAELEMENT', CONTAINER: 'CONTAINER'}
}

const modelModule = angular
    .module('common.data', ['ngFileUpload', 'ngWebSocket', 'pascalprecht.translate'])
    .config(config)
    .factory('cms', cms)
    .run(run);


config.$inject = ['$translateProvider'];
function config($translateProvider) {
    $translateProvider.translations('en', {
        Add: 'Add',
        Setting: 'Setting',
        DeleteAll: 'Delete all',
        Show: 'Show'
    });

    $translateProvider.translations('de', {
        Add: 'Hinzufügen',
        Setting: 'Einstellung',
        DeleteAll: 'alles Löschen',
        Show: 'Anzeigen'
    });

    $translateProvider.preferredLanguage('de');
}

cms.$inject = ['$http', 'Upload'];
function cms($http, Upload) {


    const data = {
        socketQueue: {}
    };
    const editState = {
        /**
         * 0: edit by drag and drop element
         * 1: edit by container
         */
        editMode: Enum.EditMode.DATAELEMENT,
        dragType: null,
        showContainerEdit: false
    }

    function changeEditMode(mode) {
        if (mode === Enum.EditMode.DATAELEMENT) {
            $('body').addClass('cms-data-element');
        } else {
            $('body').removeClass('cms-data-element')
        }
    }

    changeEditMode(Enum.EditMode.DATAELEMENT);

    function getType(type, ref, cb, content, onfly = true) {
        let Type = data.types[type];
        if (!Type || !Type.template || !ref || !_.find(Type.list, {_id: ref})) {
            let query = ref ? (Type && _.find(Type.list, {_id: ref}) ? 'element=false' : `element=${ref}`) : 'element=false';
            if (!Type) Type = data.types[type] = {list: []};
            if (!Type.template) query += '&template=true';
            if ((content && content._id) || !onfly) query = '';
            $http.post(`/cms-types/${type}?${query}`, JsonFn.stringify(content)).then(res => {
                const result = JsonFn.clone(res.data, true);

                if (_.find(Type.list, {_id: ref})) {
                    _.remove(Type.list, {_id: ref});
                }

                if (!ref || !_.find(Type.list, {_id: ref})) {
                    ref = result.data ? result.data._id : null;
                    Type.list.push(result.data);
                }
                if (!Type.template) {
                    Type.template = result.template;
                    Type.form = result.form;
                    Type.fn = result.fn;
                    Type.serverFn = result.serverFn;
                    Type.info = result.info;
                }
                cb(_.find(Type.list, {_id: ref}));
            })
        } else {
            cb(_.find(Type.list, {_id: ref}));
        }
    }

    function createElement(type, content, cb, onfly = true) {
        if (!onfly) {
            updateElement(type, content, cb);
        } else {
            getType(type, null, cb, content, onfly);
        }

    }

    function removeElement(type, _id, cb, onerror) {
        $http.delete(`api/v1/${type}/${_id}`).then(() => {
            _.remove(Types[type].list, {_id: _id});
            if (cb) cb();
        }, () => {
            if (onerror) onerror();
        });
    }

    function updateContainerPage() {
        const url = location.pathname;
        $http.post(`/cms-container-page${url}`, {containers: data.containers}).then(()=> {
            console.log('Update container page successful');
        });
    }

    const loadElementsPending = [];


    function countElements(type, cb, paramsBuilder) {
        sendWs({path: `get/api/v1/${type}/count`, params: paramsBuilder.buildJson()}, ({result:count}) => {
            if (cb) cb(count);
        });
        /*$http.get(`/api/v1/${type}/count?${params}`, _transform).then(res => {
         if (cb) cb(res.data.count);
         });*/
    }

    function sendWs(msg, cb) {
        const _uuid = Uuid.v1();
        data.socketQueue[_uuid] = cb;
        socket.send(JsonFn.stringify(_.assign(msg, {uuid: _uuid})));
    }

    function loadElements(type, cb, paramsBuilder) {
        if (!paramsBuilder && data.types[type] && data.types[type]._load === Enum.Load.LOADED) {
            if (cb) cb(data.types[type].list);
            return;
        }
        console.time("loadElements");
        sendWs({
                path: `get/api/v1/${type}`,
                params: paramsBuilder ? paramsBuilder.buildJson() : {}
            }, ({result:_list}) => {
                console.timeEnd("loadElements");
                if (!paramsBuilder) {
                    data.types[type].list = _list;
                    data.types[type]._load = Enum.Load.LOADED;
                } else {
                    data.types[type].list = _.unionWith(_list, _.filter(data.types[type].list, e => e !== null), (e1, e2) => e1._id === e2._id);
                    data.types[type].queryList = _list.map(e => _.find(data.types[type].list, e2 => e2._id === e._id));
                    data.types[type]._load = Enum.Load.PART_LOADED;
                }

                if (cb) cb(data.types[type].queryList);
            }
        );
        /*$http.get(`/api/v1/${type}?${JsonFn.stringify(paramsBuilder)}`, _transform).then(res => {
         var list = JsonFn.clone(res.data, true);
         if (!paramsBuilder) {
         data.types[type].list = list;
         data.types[type]._load = Enum.Load.LOADED;
         } else {
         data.types[type].list = _.unionWith(data.types[type].list, list, (e1, e2) => e1._id === e2._id);
         data.types[type].queryList = list.map(e => _.find(data.types[type].list, e2 => e2._id === e._id));
         data.types[type]._load = Enum.Load.PART_LOADED;
         }

         loadElementsPending.forEach(cb => cb(data.types[type].queryList));
         loadElementsPending.length = 0;
         });*/

    }

    function findByRef(type, ref) {
        return _.find(data.types[type].list, {_id: ref});
    }

    function findByID(type, ID) {
        return _.find(data.types[type].list, {ID});
    }

    function findFnByID(type, ID) {
        const e = _.find(data.types[type].list, {ID});
        const fn = JsonFn.clone(data.types[type].fn);
        _.each(fn, (f, k) => fn[k] = f.bind(e));
        return fn;
    }

    function findFnByRef(type, ref) {
        const e = findByRef(type, ref);
        const fn = JsonFn.clone(data.types[type].fn);
        _.each(fn, (f, k) => fn[k] = f.bind(e));
        return fn;
    }

    function walkInContainers(containers, cb) {
        function walk(containers) {
            _.each(containers, container => {
                _.each(container.elements, element => {
                    // save when no data in client exists
                    loadElements(element.type, () => {
                        const Type = Types[element.type];
                        const e = _.find(Type.list, e => e._id === element.ref);
                        cb(element, e, container);
                        if (element.containers && element.containers.length > 0) {
                            walk(element.containers);
                        }
                    })
                });
            });
        }

        walk(containers);
    }

    function updateElement(type, model, resolve, fail) {
        sendWs({
            path: `post/api/v1/${type}`,
            model
        }, ({result:model}) => {

            var oldModel = _.find(Types[type].list, {_id: model._id});
            if (oldModel && angular.equals(oldModel, model)) {
                for (var member in oldModel) delete oldModel[member];
                _.assign(oldModel, model);
            } else {
                Types[type].list.push(model);
            }

            if (resolve) resolve(model);
        });
    }

    function listColumns(form) {
        if (form[0].isTab) {
            const _fields = [];
            form.forEach(({fields}) => {
                _fields.push(...fields.map(field => ({
                    value: field.key,
                    label: field.templateOptions.label || field.key
                })));
            })
            return _fields;
        }
        return form.map(field => ({value: field.key, label: field.templateOptions.label || field.key}));
    }

    function findField(form, property, deep = false) {
        if (!deep) {
            if (form[0].isTab) {
                let result;
                form.forEach(({fields}) => {
                    const f = fields.find(f => f.key === property);
                    if (f) result = f;
                })
                return result;
            }
            return form.find(f => f.key === property);
        }

        let result;
        const last = property.split('.').pop();
        traverse(form).forEach(function (node) {
            if (node && node.key === last) {
                let path = _.reduce(this.parents.filter(({node:{key}}) => !_.isEmpty(key)), (path, parent) => {
                    path += `.${parent.node.key}`;
                    return path;
                }, '');
                if (_.isEmpty(path)) {
                    path = last
                } else {
                    path = path.substring(1) + '.' + last;
                }
                if (path === property) {
                    result = node;
                    this.stop();
                }

            }
        });
        return result;
    }

    function getContainer(path) {
        if (!data.containers) {
            data.containers = {};
            updateContainerPage();
        }
        let container = _.get(data.containers, path);

        // create if not exists
        if (!container) {
            const _path = _.dropRight(path.split('\.')).join('.');
            (_.isEmpty(_path) ? data.containers : _.get(data.containers, _path))[path.split('\.').pop()] = {elements: []};
            container = _.get(data.containers, path);
            updateContainerPage();
        }

        return container;
    }

    function parseAndSaveData(_data) {
        Object.assign(data, _data);
        for (let k in data.types) {
            data.types[k] = new TypeClass(data.types[k]);
        }
    }

    function exportAll(filename, types) {
        $http.post(`/cms-export`, {filename, types}).then(function (res) {
            confirm('Export successful');
        });
    }

    function importAll(types, url) {
        $http.post(`/cms-import`, {types, url}).then(function (res) {
            confirm('Import successful');
        });
    }

    const uploadFile = function (file, path, cb) {
        Upload.upload({
            url: `/cms-files/${path}`,
            data: {file}
        }).then(function () {
            if (cb) cb();
        });
    }

    function deleteElements(type, cb) {
        $http.delete(`/cms-types/${type}`).then(function (res) {
            if (cb) cb();
            confirm('delete successful');
        });
    }

    function getAdminList() {
        const _types = _.pick(data.types, function (Type) {
            if (editState.editMode === Enum.EditMode.ALL) return true;
            if (editState.editMode === Enum.EditMode.VIEWELEMENT) return Type.info.isViewElement;
            if (editState.editMode === Enum.EditMode.DATAELEMENT) return !Type.info.isViewElement;
            return true;
        })

        let i = -1;

        return _.map(_types, (Type, k) => {
            i++;
            let _children = [];

            const createChildren = (_properties, query, path) => {
                const properties = JsonFn.clone(_properties);
                const children = [];
                if (!properties || properties.length === 0) return;
                const property = properties.shift();
                const field = findField(Type.form, property, true);
                if (field.type === 'refSelect') {
                    var _type = field.templateOptions.Type;
                    data.types[_type].list.forEach((_element) => {
                        const _path = `${path}.children[${children.length}]`;
                        let _query = [{[property]: _element._id}];
                        _query = query ? query.concat(_query) : _query;
                        children.push({
                            children: createChildren(properties, _query, _path),
                            text: _element[data.types[_type].info.title],
                            type: k,
                            path: _path,
                            columns: _.remove(listColumns(Type.form), _property => _property !== property),
                            query: {$and: _query}
                        });
                    })
                } else if (field.type === 'select-ref-static') {
                    var _type = field.templateOptions.Type;
                    data.types[_type].list.forEach((_element) => {
                        const _path = `${path}.children[${children.length}]`;
                        let _query = [{[property]: _element[data.types[_type].info.title]}];
                        _query = query ? query.concat(_query) : _query;
                        children.push({
                            children: createChildren(properties, _query, _path),
                            text: _element[data.types[_type].info.title],
                            type: k,
                            path: _path,
                            columns: _.remove(listColumns(Type.form), _property => _property !== property),
                            query: {$and: _query}
                        });
                    })
                } else if (field.type === 'array' && field.templateOptions.field.type === 'refSelect') {
                    var _type = field.templateOptions.field.templateOptions.Type;
                    data.types[_type].list.forEach((_element) => {
                        const _path = `${path}.children[${children.length}]`;
                        let _query = [{[property]: _element._id}];
                        _query = query ? query.concat(_query) : _query;
                        children.push({
                            children: createChildren(properties, _query, _path),
                            text: _element[data.types[_type].info.title],
                            type: k,
                            path: _path,
                            columns: _.remove(listColumns(Type.form), _property => _property !== property),
                            query: {$and: _query}
                        });
                    })
                } else if (field.type === 'select') {
                    const {options} = field.templateOptions;
                    _.each(options, ({name, value}) => {
                        const _path = `${path}.children[${children.length}]`;
                        let _query = [{[property]: value}];
                        _query = query ? query.concat(_query) : _query;
                        children.push({
                            children: createChildren(properties, _query, _path),
                            text: name,
                            type: k,
                            path: _path,
                            columns: _.remove(listColumns(Type.form), _property => _property !== property),
                            query: {$and: _query}
                        });
                    })
                }

                return children;
            }

            var config = data.types.Config.list.find(config => config.type === k);
            const _path = `[${i}]`;

            let columns = listColumns(Type.form);
            if (config) {
                try {
                    config.dynamicQuery.forEach(dynamicQuery => {
                        if (dynamicQuery.field.length === 0) return;
                        _children.push(...createChildren(dynamicQuery.field, null, _path));
                    });
                    columns = _.filter(columns, col => {
                        if (_.isEmpty(config.showFields)) return true;
                        return config.showFields.indexOf(col.value) !== -1;
                    })
                } catch (e) {
                }
            }
            return {
                children: _children,
                columns,
                text: Type.label || k,
                type: k,
                path: _path
            }
        });
    }


    function execServerFn(type, model, fnName, ...args) {
        return $http.post(`/cms-types/${type}/${model._id}/${fnName}`, args);
    }

    function execServerFnForWrapper(name, fnName, ...args) {
        return $http.post(`/cms-wrappers/${name}/${fnName}`, args);
    }

    function getTitle(type, ref) {
        const Type = data.types[type];
        const e = _.find(Type.list, {_id: ref})
        return e[Type.info.title];
    }

    return window.cms = {
        sendWs,
        findByID,
        findFnByID,
        findByRef,
        findFnByRef,
        getType,
        createElement,
        updateElement,
        removeElement,
        findField,
        data,
        get types() {
            return data.types;
        },
        editState,
        loadElements,
        countElements,
        loadElementsPending,
        updateContainerPage,
        walkInContainers,
        getContainer,
        parseAndSaveData,
        exportAll,
        importAll,
        changeEditMode,
        uploadFile,
        getAdminList,
        listColumns,
        QueryBuilder,
        deleteElements,
        execServerFn,
        execServerFnForWrapper,
        getTitle
    }
}
run.$inject = ['cms', '$http', '$websocket'];
function run(cms, $http, $websocket) {
    const data = cms.data;
    try {

        cms.parseAndSaveData(JsonFn.parse($('#cms-data').text(), true));
        data.serverFn = data.setupServerFn(data.serverFn, $http.post);
        delete data.setupServerFn;
        window.Types = data.types;
        window.Local = data.Local = {};

    } catch (e) {
    }

    //menu
    $('body').append(`<div cms-nav></div>`);

    //panel
    $('body').prepend(`<div cms-container-edit></div>`);

    $('body').addClass('cms-admin-mode');

    let new_uri = '';
    const {wsAddress} = cms.data.online;
    if (wsAddress) {
        new_uri = wsAddress;
    } else {
        let loc = window.location;
        /*if (loc.protocol === "https:") {
         new_uri = "wss:";
         } else {
         new_uri = "ws:";
         }*/
        new_uri += "http://" + loc.host;
        //new_uri += loc.pathname;
    }

    var socket = io.connect(new_uri);

    window.socket = cms.socket = socket;

    socket.on('message', (event) => {
        const _data = JsonFn.parse(event, true);
        if (!_data.uuid) return;
        cms.data.socketQueue[_data.uuid](_data)
    });
}

export default modelModule.name;
