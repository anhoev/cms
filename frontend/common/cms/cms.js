"use strict";
import angular from 'angular';
import 'ng-file-upload';
import TypeClass from './Type';

window.Enum = {
    Load: {NOT: 'NOT', LOADING: 'LOADING', LOADED: 'LOADED'},
    EditMode: {ALL: 'ALL', VIEWELEMENT: 'VIEWELEMENT', DATAELEMENT: 'DATAELEMENT', CONTAINER: 'CONTAINER'}
}

const modelModule = angular
    .module('common.data', ['ngFileUpload'])
    .factory('cms', cms)
    .run(run);

cms.$inject = ['$http', '$timeout', 'Upload'];
function cms($http, $timeout, Upload) {
    const data = {};
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
                const result = JsonFn.clone(res.data);
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
                cb(Type, ref, _.find(Type.list, {_id: ref}));
            })
        } else {
            cb(Type, ref, _.find(Type.list, {_id: ref}));
        }
    }

    function createModel(type, cb, content) {
        return getType(type, null, cb, content);
    }

    function updateContainerPage() {
        const url = location.pathname;
        $http.post(`/cms-container-page${url}`, {containers: data.containers}).then(()=> {
            console.log('Update container page successful');
        });
    }

    const loadElementsPending = [];

    function loadElements(type, cb) {
        if (data.types[type] && data.types[type]._load === Enum.Load.LOADED) {
            if (cb) cb();
            return;
        }

        if (cb) loadElementsPending.push(cb);
        if (data.types[type]._load !== Enum.Load.LOADING) {
            data.types[type]._load = Enum.Load.LOADING;

            $http.get(`/api/v1/${type}`, _transform).then(res => {
                data.types[type]._load = Enum.Load.LOADED;
                data.types[type].list = JsonFn.clone(res.data);

                loadElementsPending.forEach(cb => cb());
                loadElementsPending.length = 0;
            });
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

    function findField(form, property) {
        if (form[0].isTab) {
            let result;
            form.forEach(({fields}) => {
                const f = fields.find(f => f.key === property.split('\.')[1]);
                if (f) result = [f];
            })
            return result;
        }
        return [form.find(f => f.key === property.split('\.')[1])];
    }

    function checkAndFixContainer() {
        for (let [k,container] of data.containers) {
            if (!container) {
                data.containers.splice(k, 1);
                checkAndFixContainer();
                updateContainerPage();
                break;
            }
        }
    }

    function getContainer(name) {
        if (!data.containers) data.containers = [];
        const container = _.find(data.containers, {name});

        // create if not exists
        if (!container) {
            data.containers.push({
                name,
                elements: []
            });
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

    return window.cms = {
        checkAndFixContainer,
        findByID,
        findFnByID,
        findByRef,
        findFnByRef,
        getType,
        createModel,
        updateElement,
        findField,
        data,
        editState,
        loadElements,
        loadElementsPending,
        updateContainerPage,
        walkInContainers,
        getContainer,
        parseAndSaveData,
        exportAll,
        importAll,
        changeEditMode,
        uploadFile
    }
}
run.$inject = ['cms', '$http'];
function run(cms, $http) {
    const data = cms.data;
    try {
        cms.parseAndSaveData(JsonFn.parse($('#cms-data').text()));
        data.serverFn = data.setupServerFn(data.serverFn, $http.post);
        delete data.setupServerFn;
        window.Types = data.types;
        window.Local = data.Local = {};

        cms.checkAndFixContainer();
    } catch (e) {
    }

}
export default modelModule.name;
