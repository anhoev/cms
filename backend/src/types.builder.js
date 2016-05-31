'use strict';
const _ = require('lodash');
require('generator-bind').polyfill();

module.exports = (cms) => {

    cms.TypesBuilder = class {
        constructor() {
            this.Types = {};
            for (const type in cms.Types) {
                this.Types[type] = cms.Types[type].webType;
            }
        }

        addElement(type, model) {
            this.Types[type].list.push(model);
        }

        setLoaded(type) {
            this.Types[type]._load = cms.Enum.Load.LOADED;
        }

        *getFullList(type) {
            this.setLoaded(type);
            this.Types[type].list = yield cms.Types[type].Model.find({});
        }

        setServerFnData(type, serverFnData) {
            this.Types[type].serverFnData = serverFnData;
        }

        setServerFnDataForWrapper(name, serverFnData) {
            this.Types.Wrapper.store[name].serverFnData = serverFnData;
        }
    }


}