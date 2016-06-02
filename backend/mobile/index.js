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
const resolvePath = cms.resolvePath = (p) => `backend/mobile/${p}`;
cms.data.security = false;
cms.listen(8888);
mongoose.connect('mongodb://localhost/mobile');

const {utils:{makeSelect, makeMultiSelect, makeTypeSelect, makeStyles, makeCustomSelect}} = cms;

cms.use(require('./organize'));


const Food = cms.registerSchema({
    text: {type: String, default: 'Demo Food'},
    image: {type: String, form: {type: 'image'}},
    price: Number
}, {
    name: 'Food',
    formatter: `
    <div cms-fragment="food_fragment" model="model"></div>
    `,
    title: 'text',
    mTemplate: `
    <StackLayout [cmsFragment]="'food_fragment'" [model]="model"></StackLayout>
    `,
    fn: {
        order: function () {
            console.log('order OK');
        }
    }
});

cms.registerWrapper('Foods', {
    formatter: `<div></div>`,
    serverFn: {
        foods: function*() {
            return yield Food.find({});
        }
    },
    mTemplate: `
    <StackLayout>
        <StackLayout *ngFor="#model of serverFn.foods()">
            <StackLayout orientation="horizontal">
                <Image width="50" height="50" [src]="model.image"></Image>
                <Label [text]="model.text"></Label>
                <Label [text]="model.price"></Label>
                <Button text="Order"></Button>
            </StackLayout>
        </StackLayout>
    </StackLayout>
    `
});

const Bill = cms.registerSchema({
    text: {type: String, default: 'Demo Bill'},
    ID: String,
    items: [{
        food: {type: mongoose.Schema.Types.ObjectId, ref: 'Food', autopopulate: true},
        quantity: Number
    }]
}, {
    name: 'Bill',
    formatter: `
    <h2>Bill</h2>
    <div ng-repeat="item in model.items track by $index">
        Product: {{item.food.text}}, quantity: {{item.quantity}}, price: {{item.quantity * item.food.price}}
    </div>
    `,
    title: 'text',
    mTemplate: `
    <StackLayout>
        <Label text="Bill"></Label>
        <StackLayout *ngFor="#item of model.items">
            <Label [text]="item.food.text+', quantity: '+item.quantity"></Label>
        </StackLayout>
    </StackLayout>
    `,
    fn: {
        addFood: function (food) {
            for (let item of this.items) {
                if (item.food._id === food._id) {
                    item.quantity++;
                    return;
                }
            }
            this.items.push({food, quantity: 1});
        }
    },
    autopopulate: true
});

const Button = cms.registerSchema({
    text: {type: String, default: 'button'},
    ID: String,
    class: String,
    friend: {type: mongoose.Schema.Types.ObjectId, ref: 'Food', autopopulate: true},
    onclick: {type: String, form: {type: 'code'}},
    styles: makeStyles()
}, {
    name: 'Button',
    formatter: `
    <button
        ng-bind="model.text"
        ng-style="fn.getWebStyles()"
        ng-click="model.onclick()"></button>
    `,
    title: 'text',
    serverFn: {
        customText: function*() {
            return this.model.text + ' Hina';
        }
    },
    tabs: [
        {title: 'basic'},
        {title: 'advance', fields: ['friend', 'tab', 'onclick']},
        {title: 'styles', fields: ['class', 'styles']}
    ],
    mTemplate: `<Button [text]="model.text" [class]="model.class" [style]="fn.getStyles()" (tap)="model.onclick()"></Button>`,
    autopopulate: true
});

const Image = cms.registerSchema({
    text: {type: String, default: 'image'},
    url: {type: String, default: 'image', form: {type: 'image'}},
    alt: String,
    ID: String,
    class: String,
    styles: makeStyles()
}, {
    name: 'Image',
    formatter: `
    <img ng-src="{{model.url}}"
         ng-style="fn.getWebStyles()" class="nonDraggableImage">
    `,
    title: 'text',
    tabs: [
        {title: 'basic'},
        {title: 'styles', fields: ['class', 'styles']}
    ],
    mTemplate: `
    <Image [src]="model.url" [style]="fn.getStyles()"></Image>
    `
});

const Label = cms.registerSchema({
    text: {type: String, default: 'Label'},
    ID: String,
    class: String,
    styles: makeStyles()
}, {
    name: 'Label',
    formatter: `
    <span
        cms-editable="model.text"
        ng-style="fn.getWebStyles()">
    `,
    title: 'text',
    tabs: [
        {title: 'basic'},
        {title: 'styles', fields: ['class', 'styles']}
    ],
    mTemplate: `
    <Label [text]="model.text" [class]="model.class" [style]="fn.getStyles()"></Label>
    `
});

const _types = {type: [String], form: makeTypeSelect([{name: 'Layout', value: 'Layout'}])};
const _orientation = {type: String, default: 'vertical', form: makeSelect('horizontal', 'vertical')};

const Layout = cms.registerSchema({
    title: String,
    ID: String,
    layout: [{
        choice: String,
        stack: {
            styles: makeStyles(),
            layout: {
                type: mongoose.Schema.Types.Mixed,
                form: {type: 'recursive', templateOptions: {path: 'layout'}}
            },
            types: _types,
            orientation: _orientation
        },
        wrap: {
            styles: makeStyles(),
            layout: {
                type: mongoose.Schema.Types.Mixed,
                form: {type: 'recursive', templateOptions: {path: 'layout'}}
            },
            types: _types,
            orientation: _orientation
        },
        gridBS: {
            styles: makeStyles(),
            cols: [{
                choice: String,
                col: {type: [Number], form: makeMultiSelect(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12)},
                row: {
                    col: [{
                        class: String,
                        width: {type: Number, form: makeSelect(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12)}
                    }]
                }
            }],
            types: _types,
            orientation: _orientation
        },
        absolute: {
            layer: [{
                styles: makeStyles(),
                layout: {
                    type: mongoose.Schema.Types.Mixed,
                    form: {type: 'recursive', templateOptions: {path: 'layout'}}
                }
            }],
            styles: makeStyles()
        }
    }],
    SAVE: [{
        bind: [{
            scope: {
                key: {type: String, form: {type: 'select-child-property'}},
                child: {type: {ref: String, Type: String}, form: {type: 'select-element'}}
            },
            model: {
                key: {type: String, form: {type: 'select-child-property'}},
                child: {type: {ref: String, Type: String}, form: {type: 'select-element'}},
                parentKey: {type: String, form: {type: 'select-property'}}
            },
            dynamic: {
                key: {type: String, form: {type: 'select-child-property'}},
                child: {type: {ref: String, Type: String}, form: {type: 'select-element'}},
                fn: {type: String, form: {type: 'code'}}
            },
            fn: {
                key: {type: String, form: {type: 'select-child-property'}},
                child: {type: {ref: String, Type: String}, form: {type: 'select-element'}},
                parentFn: {type: String, form: {type: 'select-fn'}}
            },
            serverFn: {
                key: {type: String, form: {type: 'select-child-property'}},
                child: {type: {ref: String, Type: String}, form: {type: 'select-element'}},
                parentFn: {type: String, form: {type: 'select-property'}}
            },
            array: {
                bind: [{
                    model: {
                        key: {type: String, form: {type: 'select-child-property'}},
                        child: makeCustomSelect({ref: String, Type: String}, function (template, options, scope) {
                            const containers = scope.formState.model2.containers;
                            const nestedLayoutTitle = scope.formState.model.nestedLayout;
                            const map = {};
                            scope.to.options = [];
                            scope.to.labelProp = 'Type';
                            scope.getLabel = selected => selected && selected.ref ? map[selected.ref] : '';
                            cms.walkInContainers(containers, (element, e) => {
                                if (element.type === 'Layout' && e._id === nestedLayoutTitle) {
                                    cms.walkInContainers(element.containers, (element, e) => {
                                        scope.to.options.push({Type: element.type, ref: e._id});
                                        map[e._id] = `${element.type} : ${e[Types[element.type].info.title]}`;
                                    })
                                }
                            })
                            return template;
                        }, true),
                        parentKey: makeCustomSelect(String, function (template, options, scope) {
                            const type = scope.formState.model2.BindType;
                            const {form} = Types[type];
                            const pField = _.find(form, {key: scope.formState.model.parentKey});
                            scope.to.options = [];
                            if (pField) {
                                const fields = pField.templateOptions.fields[0].fieldGroup;
                                fields.forEach(f => scope.to.options.push({name: f.key, value: f.key}));
                            }
                            return template;
                        })
                    },
                    choice: String
                }],
                nestedLayout: makeCustomSelect(String, function (template, options, scope) {
                    const {containers} = scope.formState.model;
                    scope.to.options = [];
                    cms.walkInContainers(containers, (element, e) => {
                        if (element.type === 'Layout') {
                            scope.to.options.push({name: e.title, value: e._id});
                        }
                    })
                    return template;
                }),
                parentKey: {type: String, form: {type: 'select-property'}}
            },
            choice: String
        }],
        BindType: {type: String, form: makeTypeSelect([], false)},
        name: String,
        containers: {type: [mongoose.Schema.Types.Mixed], form: {type: 'save-containers'}}
    }]
}, {
    name: 'Layout',
    formatterUrl: resolvePath('layout.html'),
    title: 'title',
    mTemplate: `
    <StackLayout *ngFor="#layout of model.layout">
        <StackLayout *ngIf="layout.choice === 'gridBS'">
            <GridLayout  *ngFor="#cols of layout.gridBS.cols" [columns]="fn.getColOpt(cols.col)" rows="auto">
                <template ngFor #col [ngForOf]="cols.col" #j="index">
                    <StackLayout [col]="j" [orientation]="layout.gridBS.orientation">
                        <template [cmsContainer]="cols._id+'-'+j" ></template>
                    </StackLayout>
                </template>
            </GridLayout>
        </StackLayout>
    </StackLayout>
    `,
    fn: {
        getColOpt: function (cols) {
            return cols.map(c => c + '*').join(',')
        },
        getTreeWithBinding: function (containers, binds, model, BindType) {
            cms.walkInContainers(containers, (element, e) => {
                element.binding = {binds: [], parentModel: model, BindType: BindType};
                _.each(binds, bind => {
                    if (bind.choice === 'model' || bind.choice === 'fn' || bind.choice === 'scope' || bind.choice === 'dynamic') {
                        if (bind[bind.choice].child.ref === e._id) {
                            element.binding.binds.push(bind);
                        }
                    } else if (bind.choice === 'array') {
                        if (e._id === bind.array.nestedLayout) {
                            element.binding.binds.push(bind);
                        }
                    }
                });
            });
        }
    },
    tabs: [
        {title: 'basic'},
        {title: 'save', fields: ['SAVE']}
    ]
});

const PageLayout = cms.registerSchema({
    title: String,
    ID: String,
    tab: [{
        scrollable: {type: Boolean, default: false},
        text: String,
        active: Boolean
    }],
    menuItem: [String]
}, {
    name: 'PageLayout',
    formatterUrl: resolvePath('page-layout.html'),
    title: 'title',
    mTemplate: `
    <StackLayout *ngIf="!model.tab || model.tab.length === 0">
         <template [cmsContainer]="'rootpage'" ></template>
    </StackLayout>
    <TabView *ngIf="model.tab && model.tab.length > 0">
         <template ngFor #tab [ngForOf]="model.tab" #index="index">
            <StackLayout *tabItem="{title: tab.text}">
                <template [ngIf]="!tab.scrollable">
                    <template [cmsContainer]="'tab_' + index" ></template>
                </template>
                <ScrollView *ngIf="tab.scrollable">
                    <GridLayout>
                        <template [cmsContainer]="'tab_' + index" ></template>
                    </GridLayout>
                </ScrollView>
            </StackLayout>
         </template>
    </TabView>
    `,
    fn: {},
    tabs: [
        {title: 'Tabs'},
        {title: 'Side Drawer', fields: ['menuItem']}
    ]
});

const Product = cms.registerSchema({
    text: {type: String, default: 'Demo Product'},
    ID: String,
    price: Number
}, {
    name: 'Product',
    formatter: `
    <span cms-editable="model.text")></span>
    <span cms-editable="model.price")></span>
    `,
    title: 'text',
    mTemplate: `
    <Label [text]="model.text"></Label>
    <Label [text]="model.price"></Label>
    `,
    bindings: {}
});

// don't use cms-editable in wrapper
cms.registerWrapper('Products', {
    formatterUrl: resolvePath('products.jade'),
    ID: String,
    serverFn: {
        products: function*() {
            return yield Product.find({});
        }
    },
    mTemplate: `
    <StackLayout>
        <StackLayout *ngFor="#product of serverFn.products()">
            <Label [text]="product.text"></Label>
            <Label [text]="product.price"></Label>
        </StackLayout>
    </StackLayout>
    `
});

cms.registerWrapper('Dynamic', {
    formatterUrl: resolvePath('dynamic.jade'),
    serverFn: {
        buttons: function*() {
            return yield Button.find({});
        }
    },
    mTemplate: `
    <WrapLayout *ngFor="#button of serverFn.buttons()">
        <Button [text]="button.text" [class]="button.class" [style]="fn.getStyles(button)">
        </Button>
    </WrapLayout>
    `
});

cms.registerWrapper('Halo', {
    formatter: `
        <h3>Link</h3>
    `,
    fn: {
        link: function () {
            try {
                this.router.navigate(['Cat']);
            } catch (e) {
                console.warn(e);
            }
        }
    },
    serverFn: {},
    mTemplate: `
    <Button text="Link" class="link" (tap)="fn.link()"></Button>
    `
});


cms.server('backend/mobile/en', '/en');