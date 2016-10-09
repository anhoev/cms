import {Model} from "mongoose";
import {Schema} from "mongoose";
import {Application} from "express";
import {Mongoose} from "mongoose";

export interface Type {
    fn: any;
    serverFn: any;
    list: any[];
    template: string;
    templateUrl: string;
    info: any;
}

export interface Option {
    name: String;
    label: String;
    formatter: String;
    formatterUrl: String;
    initSchema(schema: Schema): void ;
    title;
    fn: {[type: string]: any};
    serverFn: {[type: string]: void};
    tabs: {
        title: String,
        fields: String[]
    }[];
    isViewElement: Boolean;
    mTemplate: String;
    admin;
    restifyOptions;
    info: {

    };
    autopopulate: Boolean,
    alwaysLoad: Boolean,
    controller: void;
}

export enum WebType {
    APPLICATION,
    WEB
}

export interface CmsData {
    // ng environment filter
    basePath: String,
    baseUrlPath: String,
    ngEn: any,
    errors: any,
    handlers: any,
    baseTemplatePath: String,
    security: Boolean,
    /**
     * array from page formatter
     * format: [{name,path}]
     * e.g. [{path:'page/main.jade', name:'main page'}]
     */
    pageFormatter: {path: String,name: String}[],
    online: {
        menu: any,
        autoOpenAdmin: Boolean,
        wsAddress: String
    },
    webtype: WebType
}

export declare class Cms {
    app: Application;

    getModel(type: String): Type;

    /**
     <pre>
     Use to register a new schema
     Cms system will automatic create form, rest backend,
     run filter, mongoose model for the schema and return a model back
     </pre>
     * @example
     <pre><code>
     const Person = cms.registerSchema({
    name: {
        type: String,
        default: 'new name',
        form: {
            type: 'input',
            templateOptions: {
                label: 'NAME'
            }
        }
    },
    girlFriend: {
            type: mongoose.Schema.Types.ObjectId, ref: 'Girl',
            form: {templateOptions: {labelProp: 'name', placeholder: 'Add girl friend'}}
        },
        children: {name: String, old: String},
        hasNested: Boolean
    }, {name: 'Person', formatter: 'person.jade', title: 'name, initSchema: s => s.plugin(autopopulate)});
     </code></pre>
     * @param {mongoose.Schema} schema
     * @param options
     * @param {String} options.name name of model
     * @param {String} options.formatter path to formatter file like model.jade
     * @param {String} options.title title of model
     * @param {Function} [options.initSchema] use to install plugins
     * @returns {Model} Model
     */
    registerSchema(schema: Object, options: Option): Model;

    utils: any

    instance: Cms

    mongoose: Mongoose

    data: CmsData

    listen(port: Number): void

    Enum: {
        WebType: {
            APPLICATION,
            WEB
        }
    }
}