const _ = require('lodash');
const Path = require('path');
const jsonfn = require('../src/jsonfn')

module.exports = (cms) => {
   const {mongoose, utils: {makeSelect, makeMultiSelect, makeTypeSelect, makeStyles, makeCustomSelect}} = cms;


   let schema = {
      name: {type: String, flex: 'md6'},
      nr: {type: Number, flex: 'md6'},
      switch: {type: Boolean, flex: 'md6'},
      sex: {type: Number, form: {inputType: 'select', options: [{text: 'male', value: 0}, {text: 'female', value: 1}]}},
      select: {type: String, form: {inputType: 'select', options: ['A', 'B']}},
      address: {
         street: String,
         city: String
      },
      addressArray2: [String],
      //addressArray2a: [{type: String}],
      addressArray1: [{
         street: String,
         city: String
      }],
      addressArray3: {
         type: [{street: String, city: String}],
         form: {type: 'tableArray'}
      },
      layout: {
         choice: String,
         linear: {
            linearName: String
         },
         grid: {
            gridName: String
         }
      },
      layout2: [{
         choice: String,
         linear: {
            linearName: String
         },
         grid: {
            gridName: String
         }
      }],
      //company: {type: mongoose.Schema.Types.ObjectId, ref: 'Company', autopopulate: true}
   };

   const str = jsonfn.stringify(schema);
   const cloneSchema = jsonfn.parse(str);
   const TestForm = cms.registerSchema(cloneSchema, {
      name: 'TestForm',
      label: 'MyForm',
      formatter: `
        <div></div>         
      `,
      title: 'text',
      tabs: {
         Simple: ['addressArray2'],
         Object: ['addressArray1'],
         Table: ['addressArray3'],
         Choice: ['layout', 'layout2'],
      },
      autopopulate: true
   });

   const Child = cms.registerSchema({
      name: String
   }, {
      name: 'Child',
      label: 'Child',
      title: 'name',
      autopopulate: true,
      alwaysLoad: true
   });

   const Parent = cms.registerSchema({
      name: String,
      child: {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'Child',
         autopopulate: true,
         label: 'Child'
      }
   }, {
      name: 'Parent',
      title: 'name',
      autopopulate: true
   });

   const fieldSchema = {
      key: String,
      label: String,
      //type: {type: String},
      //options: String,
      items: {type: {}, form: false}
   }

   let buildFormSchema = {
      //name: String,
      /*field: {
         choice: String,
         String: _.merge({} ,fieldSchema, {type: { default: 'input'}}),
         Number: _.merge({} ,fieldSchema, {type: {default: 'input:number'}}),
      },*/
      items: {
         type: [{
            choice: String,
            String: fieldSchema,
            Number: fieldSchema,
            StringSelect: {
               key: String,
               label: String,
               options: {
                  type: [{
                     text: String,
                     value: String
                  }], form: {type: 'tableArray'}
               },
               items: {type: {}, form: false}
            }
         }],
         form: {type: 'tree', children: 'items'}
      }
   };

   const BuildForm = cms.registerSchema(buildFormSchema, {
      name: 'BuildForm',
      title: 'name',
      autopopulate: true
   });

   cms.Types.BuildForm.webType.form;
}