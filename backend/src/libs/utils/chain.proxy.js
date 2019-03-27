const _ = require('lodash');
const io = require('socket.io-client');
let socket = io.connect('http://localhost:8888');

function builder(resolver) {
  return new Proxy({}, {
    get(target, key) {
      return new Proxy({modelName: key}, {
        get(target, key) {
          if (['modelName'].includes(key)) return target[key];
          return function () {
            return new Proxy({modelName: this.modelName, chain: [{fn: key, args: [...arguments]}]}, {
              get(target, key) {
                if (['chain', 'modelName'].includes(key)) return target[key];
                if (key === 'then') return resolver;
                return function () {
                  target.chain = target.chain || [];
                  target.chain.push({fn: key, args: [...arguments]});
                  return this;
                }
              }
            });
          }
        }
      });
    }
  })
}

let models = builder(function (resolve, reject) {
  socket.emit('interface', {name: this.modelName, chain: this.chain}, resolve);
});
const realModels = builder();


const Microservice = new Proxy(_.assign(function () {
}, {modelName: 'test'}), {
  get(target, key) {
    if (['chain', 'modelName'].includes(key)) return target[key];
  }
});

const b = new Microservice();

const jsonfn = require('../src/jsonfn');

function registerSchema(schema, options) {
  return new Promise((resolve, reject) => {
    socket.emit('registerSchema', jsonfn.stringify(schema), options, resolve);
  })
}

function getForm(name) {
  return new Promise((resolve, reject) => {
    socket.emit('getForm', name, resolve);
  })
}

async function test() {
  await registerSchema({
    name: {type: String, flex: 'md6'},
    age: Number,
    nr: {type: Number, flex: 'md6'},
    switch: {type: Boolean, flex: 'md6'},
    sex: {type: Number, form: {inputType: 'select', options: [{text: 'male', value: 0}, {text: 'female', value: 1}]}},
    address: {
      street: String,
      city: String
    },
    addressArray2: [String],
    addressArray2a: [{type: String}],
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
  }, {
    name: 'Person',
    formatter: '<div></div>',
    title: 'name',
    alwaysLoad: true
  });

  const personForm = await getForm('Person');

  const Person = models.Person;
  //await Person.create({name: 'test', age: 10});
  //const persons = await Person.find({name: 'test'}).sort({id: 1}).lean();
  const raw = await Person.new({name: 'test'});
  debugger

  /*const TestForm = models.TestForm;
  await TestForm.create({name: 'test', nr: 1});
  const testforms = await TestForm.find({name: 'test'}).sort({id: 1}).lean();*/

  /*const model = realModels[fnBuilder.name];
  let step = model;
  for (const {fn, args} of fnBuilder.chain) step = step[fn](...args);
  const result = await step;*/
}

socket.on('connect', () => {
  test();
});

