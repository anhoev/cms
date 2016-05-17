/**
 * Created by tran on 24.12.15.
 */

'use strict';
const _ = require('lodash');
const mongoose = require('mongoose');
const autopopulate = require('mongoose-autopopulate');
const cms = require('../src/cms');
cms.mongoose = mongoose;
cms.data.categories = [{Type: {Human: null, Animal: null}}, {Type2: {Human: null, Animal: null}}];
const resolvePath = cms.resolvePath = (p) => `backend/bootstrap/${p}`;
cms.data.security = false;
cms.listen(8888);
mongoose.connect('mongodb://localhost/test');

function makeSelect() {
    return {
        type: 'select',
        templateOptions: {
            options: _.map(arguments, o => ({name: o, value: o}))
        }
    }
}

const Button = cms.registerSchema({
    text: {type: String, default: 'button'},
    type: {
        type: String,
        default: 'btn-primary',
        form: makeSelect('primary', 'info', 'warning', 'danger', 'success', 'default', 'white')
    },
    size: {
        type: String,
        default: '',
        form: makeSelect('md', 'xs', 'sm', 'lg')
    },
    friend: {type: mongoose.Schema.Types.ObjectId, ref: 'Button'},
    tab: {type: mongoose.Schema.Types.ObjectId, ref: 'Tab', autopopulate: true},
    onclick: {type: String, form: {type: 'code'}},
    // mobile
    styles: {
        backgroundColor: {
            type: String,
            form: {
                type: 'color',
                templateOptions: {label: 'bg color', tooltip: 'background color <br>model: backgroundColor'}
            }
        },
        color: {type: String, form: {type: 'color'}}
    }
}, {
    name: 'Button',
    formatter: resolvePath('button.jade'), title: 'text',
    fn: {
        send: function (text) {
            // result is promise!
            this.$send(`cms/element/${this.friend._id || this.friend}/buttonClick`, text)
                .then(r => this.text = r);
        },
        $onButtonClick: function (color) {
            this.color = color;
            console.log(color);
            return `happy with ${this.text}`;
        },
        getStyles: function () {
            let styles = '';
            if (this.styles) {
                if (this.styles.backgroundColor) styles += `background-color:${this.styles.backgroundColor};`
                if (this.styles.color) styles += `color:${this.styles.color};`
            }
            return styles;
        }
    },
    serverFn: {
        customText: function* () {
            return this.text + ' Hina';
        }
    },
    tabs: [
        {title: 'basic'},
        {title: 'advance', fields: ['friend', 'tab', 'onclick']},
        {title: 'mobile', fields: ['styles']}
    ],
    mTemplate: `<Button [text]="model.text" [style]="fn.getStyles()" (tap)="model.onclick()"></Button>`
});

const Alert = cms.registerSchema({
    text: String,
    type: {
        type: String,
        default: 'success',
        form: makeSelect('primary', 'info', 'warning', 'danger', 'success')
    },
    icon: {
        type: String,
        default: '',
        form: makeSelect('info-sign', 'ok-sign', 'exclamation-sign', 'remove-sign')
    },
    dismissible: Boolean
}, {name: 'Alert', formatter: resolvePath('alert.jade'), title: 'text'});

const Dropdown = cms.registerSchema({
    text: String,
    option: [String]
}, {name: 'Dropdown', formatter: resolvePath('dropdown.jade'), title: 'text'});

const Tab = cms.registerSchema({
    title: String,
    tab: [{
        text: String,
        active: Boolean
    }]
}, {name: 'Tab', formatter: resolvePath('tab.jade'), title: 'title'});

const Carousel = cms.registerSchema({
    title: String,
    tab: [{
        text: String,
        active: Boolean,
        img: {
            src: String,
            alt: String
        }
    }],
    test2: [{
        choice: String,
        paragraph: {
            title: String,
            page : Number
        },
        text: String
    }]

}, {
    name: 'Carousel', formatter: resolvePath('carousel.jade'), title: 'title',

});

cms.registerWrapper('Dynamic', {
    formatter: resolvePath('dynamic.jade'),
    serverFn: {
        buttons: function*() {
            return yield Button.find({});
        }
    }
});

cms.registerWrapper('Alerts', {
    formatter: resolvePath('alerts.jade'),
    serverFn: {
        alerts: function*() {
            return yield Alert.find({});
        }
    }
});

cms.server('backend/test', '/en');