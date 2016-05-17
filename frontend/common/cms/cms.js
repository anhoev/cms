"use strict";
import angular from 'angular';

const modelModule = angular
    .module('common.data', [])
    .factory('cms', cms)
    .run(run);

cms.$inject = ['$http', '$timeout'];
function cms($http, $timeout) {
    const data = {};
    const editState = {
        /**
         * 0: edit by drag and drop element
         * 1: edit by container
         */
        editMode: 0,
        dragType: null
    }

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

    function loadElements(type, cb) {
        return cb();
        if (data.types[type] && data.types[type]._loaded) return cb();
        $http.post(`/cms-types/${type}?template=true&element=false`, _transform).then(_res => {
            if (!data.types[type]) data.types[type] = {};
            _.assign(data.types[type], _res.data);
            $http.get(`/api/v1/${type}`, _transform).then(res => {
                data.types[type]._loaded = true;
                data.types[type].list = res.data;
                cb();
            });
        })

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
                    const Type = Types[element.type];
                    const e = _.find(Type.list, e => e._id === element.ref);
                    cb(element, e, container);
                    if (element.containers && element.containers.length > 0) {
                        walk(element.containers);
                    }
                });
            });
        }

        walk(containers);
    }

    return window.cms = {
        findByID,
        findFnByID,
        findByRef,
        findFnByRef,
        getType,
        createModel,
        data,
        editState,
        loadElements,
        updateContainerPage,
        walkInContainers
    }
}
run.$inject = ['cms', '$http'];
function run(cms, $http) {
    const data = cms.data;
    try {
        Object.assign(data, JsonFn.parse($('#cms-data').text()));
        data.serverFn = data.setupServerFn(data.serverFn, $http.post);
        delete data.setupServerFn;
        window.Types = data.types;
        window.Local = data.Local = {};
    } catch (e) {
    }

}
export default modelModule.name;
