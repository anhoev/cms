/**
 * Created by tran on 24.12.15.
 */

'use strict';
const mongoose = require('mongoose');
const autopopulate = require('mongoose-autopopulate');
const cms = require('../src/cms');
cms.mongoose = mongoose;
cms.data.categories = [{Type: {Human: null, Animal: null}}, {Type2: {Human: null, Animal: null}}];
const resolvePath = cms.resolvePath = (p) => `backend/app/${p}`;
cms.data.security = false;
cms.listen(8888, 'localhost');
const Q = require('q');
mongoose.connect('mongodb://localhost/test');

const Cat = cms.registerSchema({
    name: {
        type: String,
        default: 'new cat',
        form: {
            type: 'select',
            templateOptions: {
                label: 'NAME',
                options: [
                    {name: 'Iron Man', value: 'Iron Man'},
                    {name: 'Captain America', value: 'Captain America'},
                    {name: 'Black Widow', value: 'Black Widow'},
                    {name: 'Hulk', value: 'Hulk'},
                    {name: 'Captain Marvel', value: 'Captain Marvel'},
                    {name: 'Sara T__T', value: 'Sara'}
                ]
            }
        }
    },
    friend: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Dog', autopopulate: true,
        form: {templateOptions: {labelProp: 'name', placeholder: 'Add friend'}}
    },
    showList: Boolean
}, {
    name: 'Cat', formatter: resolvePath('cat.jade'), title: 'name',
    initSchema: s => s.plugin(autopopulate),
    fn: {
        customName: function () {
            return this.name + ' Fn';
        }
    },
    serverFn: {
        friendName: function* () {
            if (this.friend && this.friend._id) {
                const friend = yield Dog.findOne({_id: this.friend._id});
                return friend ? friend.name + ' ServerFn' : '';
            }
        },
        listDog: function* () {
            return yield Dog.find({});
        }
    }
});

const Dog = cms.registerSchema({
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
    children: {name: String, old: String},
    hasNested: Boolean
}, {name: 'Dog', formatter: resolvePath('dog.jade'), title: 'name'});

const Button = cms.registerSchema({
    text: String,
    class: [String],
    children: [{
        name: String,
        old: Number
    }]
}, {name: 'Button', formatter: resolvePath('button.jade'), title: 'text'});

cms.registerWrapper('Dynamic', {
    formatter: resolvePath('dynamic.jade'),
    serverFn: {
        listDog: function*() {
            return yield Dog.find({});
        }
    },
    fn: {
        demo: function () {
            return 'demo Fn';
        }
    }
});

cms.server('backend/test', '/en');

cms.app.use('/test.js', cms.express.static('backend/app/form/test.js'));
cms.filters.page.push(function ($, content) {
    $('body').append(`<script src="test.js"></script>`);
})