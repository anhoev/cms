'use strict';
const Path = require('path');
module.exports = (cms) => {

    const {mongoose, utils:{makeSelect, makeMultiSelect, makeTypeSelect, makeStyles, makeCustomSelect}} = cms;

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


    cms.registerWrapper('Dynamic', {
        formatterUrl: Path.resolve(__dirname, 'dynamic.jade'),
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


    const Product = cms.registerSchema({
        text: {type: String, default: 'Demo Product'},
        ID: String,
        price: Number
    }, {
        name: 'Product',
        formatter: `
    <span cms-editable="model.text"></span>
    <span cms-editable="model.price"></span>
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
        formatterUrl: Path.resolve(__dirname, 'products.jade'),
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
}

