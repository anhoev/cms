'use strict';
const _ = require('lodash');
require('generator-bind').polyfill();

module.exports = (cms) => {

    cms.TypesBuilder = class {
        constructor(session) {
            this.Types = {};
            this.session = session;
            for (const type in cms.Types) {
                this.Types[type] = cms.Types[type].webType;
            }
        }

        *init() {
            for (const type in cms.Types) {
                if (this.Types[type].info.alwaysLoad) {
                    yield* this.getFullList(type);
                }
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
            let q = cms.Types[type].Model.find({});
            if (q.session) q = q.session(this.session);
            this.Types[type].list = yield q;
        }

        setServerFnData(type, serverFnData) {
            this.Types[type].serverFnData = serverFnData;
        }

        setServerFnDataForWrapper(name, serverFnData) {
            this.Types.Wrapper.store[name].serverFnData = serverFnData;
        }
    }


}