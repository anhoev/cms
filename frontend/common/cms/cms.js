"use strict";
import angular from 'angular';
import 'ng-file-upload';
import TypeClass from './Type';
import menuTemplate from "./menu.html";
import QueryBuilder from "./QueryBuilder";
import 'angular-websocket';
import Uuid from 'uuid';

window.Enum = {
    Load: {NOT: 'NOT', LOADING: 'LOADING', LOADED: 'LOADED', PART_LOADED: 'PART_LOADED'},
    EditMode: {ALL: 'ALL', VIEWELEMENT: 'VIEWELEMENT', DATAELEMENT: 'DATAELEMENT', CONTAINER: 'CONTAINER'}
}

const modelModule = angular
    .module('common.data', ['ngFileUpload', 'ngWebSocket'])
    .factory('cms', cms)
    .run(run);

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
        dragType: null
    }

    function changeEditMode(mode) {
        if (mode === Enum.EditMode.DATAELEMENT) {
            $('body').addClass('cms-data-element');
        } else {
            $('body').removeClass('cms-data-element')
        }
    }

    changeEditMode(Enum.EditMode.DATAELEMENT);

    function getType(type, ref, cb, content) {
        let Type = data.types[type];
        if (!Type || !Type.template || !ref || !_.find(Type.list, {_id: ref})) {
            let query = ref ? (Type && _.find(Type.list, {_id: ref}) ? 'element=false' : `element=${ref}`) : '';
            if (!Type) Type = data.types[type] = {list: []};
            if (!Type.template) query += '&template=true';
            if (content) query = '';
            $http.post(`/cms-types/${type}?${query}`, JsonFn.stringify(content)).then(res => {
                const result = JsonFn.clone(res.data, true);
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

    function createElement(type, content, cb) {
        return getType(type, null, cb, content);
    }

    function updateContainerPage() {
        const url = location.pathname;
        $http.post(`/cms-container-page${url}`, {containers: data.containers}).then(()=> {
            console.log('Update container page successful');
        });
    }

    const loadElementsPending = [];


    function countElements(type, cb, paramsBuilder) {
        sendWs({path: `get/api/v1/${type}/count`, params: paramsBuilder.buildJson()}, (count) => {
            if (cb) cb(count);
        });
        /*$http.get(`/api/v1/${type}/count?${params}`, _transform).then(res => {
            if (cb) cb(res.data.count);
        });*/
    }

    function sendWs(msg, cb) {
        const _uuid = Uuid.v1();
        socket.onMessage((event) => {
            const _data = JsonFn.parse(event.data);
            if (_data.uuid === _uuid) {
                cb(_data.result)
            }
        });

        socket.send(_.assign(msg, {uuid: _uuid}));
    }

    function loadElements(type, cb, paramsBuilder) {
        if (!paramsBuilder && data.types[type] && data.types[type]._load === Enum.Load.LOADED) {
            if (cb) cb(data.types[type].list);
            return;
        }

        if (cb) loadElementsPending.push(cb);
        if (data.types[type]._load !== Enum.Load.LOADING) {
            data.types[type]._load = Enum.Load.LOADING;

            sendWs({path: `get/api/v1/${type}`, params: paramsBuilder.buildJson()}, (_list) => {
                var list = JsonFn.clone(_list, true);
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
            });
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

    function updateElement(type, model) {
        $http.post(`api/v1/${type}/${model._id}`, JsonFn.stringify(_.pick(model, (v, k) => k !== '$data')))
            .then(function (res) {
                console.log(res.data);
            });
    }

    function listColumns(form) {
        if (form[0].isTab) {
            const _fields = [];
            form.forEach(({fields}) => {
                _fields.push(...fields.map(field => field.key));
            })
            return _fields;
        }
        return form.map(field => field.key);
    }

    function findField(form, property) {
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

    function exportAll() {
        $http.post(`/cms-export`, {}).then(function (res) {
            console.log('Export successful');
        });
    }

    function importAll() {
        $http.post(`/cms-import`, {}).then(function (res) {
            console.log('Import successful');
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
            console.log('delete successful');
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
                const field = findField(Type.form, property);
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
                config.dynamicQuery.forEach(dynamicQuery => {
                    if (dynamicQuery.field.length === 0) return;
                    _children.push(...createChildren(dynamicQuery.field, null, _path));
                });
                columns = _.filter(columns, col => {
                    if (_.isEmpty(config.showFields)) return true;
                    return config.showFields.indexOf(col) !== -1;
                })
            }
            return {
                children: _children,
                columns,
                text: k,
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

    return window.cms = {
        sendWs,
        findByID,
        findFnByID,
        findByRef,
        findFnByRef,
        getType,
        createElement,
        updateElement,
        findField,
        data,
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
        execServerFnForWrapper
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

        //menu
        const menu = cms.data.online.menu;
        $('.main-nav').css('top', menu.top);
        $('body').css('padding-top', menu.bodyPaddingTop);
        $('body').append(menuTemplate);
        if (menu.inverse) $('.cms-menu').addClass('navbar-inverse');
        if (menu.bottom) $('.cms-menu').removeClass('navbar-fixed-top').addClass('navbar-fixed-bottom');
    } catch (e) {
    }

    window.socket = cms.socket = $websocket('ws://localhost:8888');
}

export default modelModule.name;
