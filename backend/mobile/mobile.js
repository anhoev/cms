const _ = require('lodash');
const Path = require('path');

module.exports = (cms) => {

    const {mongoose, utils:{makeSelect, makeMultiSelect, makeTypeSelect, makeStyles, makeCustomSelect}} = cms;

    const Button = cms.registerSchema({
        text: {type: String, default: 'button'},
        ID: String,
        class: String,
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
        tabs: [
            {title: 'basic'},
            {title: 'advance', fields: ['friend', 'tab', 'onclick']},
            {title: 'styles', fields: ['class', 'styles']}
        ],
        mTemplate: `<Button [text]="model.text" [class]="model.class? model.class: ''" [style]="fn.getStyles()" (tap)="model.onclick()"></Button>`,
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
    <Label [text]="model.text" [class]="model.class? model.class: ''" [style]="fn.getStyles()"></Label>
    `
    });

    const _types = {type: [String], form: {type: 'select-type', templateOptions: {multiple: true}}};
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
                orientation: _orientation,
                types: _types,
                layout: {
                    type: mongoose.Schema.Types.Mixed,
                    form: {type: 'recursive', templateOptions: {path: 'layout'}}
                },
                styles: makeStyles(),
            },
            gridBS: {
                orientation: _orientation,
                types: _types,
                styles: makeStyles(),
                cols: [{
                    choice: String,
                    col: {type: [Number], form: makeMultiSelect(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12)}
                }],
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
                    child: {type: new mongoose.Schema({ref: String, Type: String}), form: {type: 'select-element'}}
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
            BindType: {type: String, form: {type: 'select-type'}},
            name: String,
            containers: {type: [mongoose.Schema.Types.Mixed], form: {type: 'save-containers'}}
        }]
    }, {
        name: 'Layout',
        formatterUrl: Path.resolve(__dirname, 'layout.html'),
        title: 'title',
        mTemplate: `
    <StackLayout *ngFor="let layout of model.layout">
        <StackLayout *ngIf="layout.choice === 'gridBS'">
            <GridLayout  *ngFor="let cols of layout.gridBS.cols" [columns]="fn.getColOpt(cols.col)" rows="auto">
                <template ngFor let-col [ngForOf]="cols.col" let-j="index">
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
        formatterUrl: Path.resolve(__dirname, 'page-layout.html'),
        title: 'title',
        mTemplate: `
    <StackLayout *ngIf="!model.tab || model.tab.length === 0">
         <template [cmsContainer]="'rootpage'" ></template>
    </StackLayout>
    <TabView *ngIf="model.tab && model.tab.length > 0">
         <template ngFor let-tab [ngForOf]="model.tab" let-index="index">
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

    cms.registerWrapper('cmsSync', {
        formatter: `
            <h4>Sync</h4>
        `,
        mTemplate: `
        <StackLayout cmsSync *ngIf="cms.alreadyLoaded"></StackLayout>
        `
    });
}