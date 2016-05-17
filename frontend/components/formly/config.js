import panel from './panel.html';
import repeatSection from './repeatSection.html';
import repeatSectionController from './repeat-section.controller';
import treeTemplate from './tree.template.html';
import treeController from './tree.controller';
import refSelect from './ref.select.html';
import refController from './ref.controller';
import codeTemplate from './code.html';
import code from './code.controller';
import arrayController from './array.controller';
import arrayTemplate from './array.template.html';
import selectTypeController from './select-type.controller';
import selectElementController from './select-element.controller';
import selectPropertyController from './select-property.controller';
import selectChildPropertyController from './select-child-property.controller';
import selectFnController from './select-fn.controller';
import selectTemplate from './select.html';
import selectWholeTemplate from './select-whole.html';
import multiSelectTemplate from './multi-select.html';
import bsGridSelectController from './bs-grid-select.controller';
import bsGridSelectTemplate from './bs-grid-select.html';
import checkboxTemplate from 'angular-formly-templates-bootstrap/src/types/checkbox.html';
import saveContainersController from './saveContainersController';
import recursiveTemplate from './recursive.html';
import recursiveController from './recursive.controller';

config.$inject = ['formlyConfigProvider', 'size', '$rootScopeProvider'];

function config(formlyConfigProvider, size, $rootScopeProvider) {
    $rootScopeProvider.digestTtl(20);

    const config = formlyConfigProvider;
    config.removeWrapperByName('bootstrapLabel');

    config.setWrapper({
        name: 'bootstrapLabel',
        template: `
        <div>
          <label for="{{id}}" class="control-label ${size.label}"
                 uib-tooltip-html='to.tooltip'>
            {{to.label}} {{to.required ? '*' : ''}}
          </label>
          <div class="${size.input}"><formly-transclude></formly-transclude></div>
        </div>
        `
    });

    // Replace formlyBootstrap input field type to implement read-only forms
    config.setType({
        name: 'input',
        template: `
        <div>
          <input ng-if="!formState.readOnly" class="form-control" ng-model="model[options.key]">
          <p ng-if="formState.readOnly" class="form-control-static">{{model[options.key]}}</p>
        </div>
        `,
        wrapper: ['bootstrapLabel', 'bootstrapHasError'],
        overwriteOk: true
    });

    config.setWrapper({
        name: 'checkboxWrapper',
        template: '<div class="form-group"><div class="col-sm-offset-2 col-sm-10"><formly-transclude></formly-transclude></div></div>'
    });

    config.setType({
        name: 'checkbox',
        template: checkboxTemplate,
        wrapper: ['checkboxWrapper'],
        overwriteOk: true
    });

    config.setWrapper({
        name: 'panel',
        template: panel
    });

    config.setType({
        name: 'repeatSection',
        template: repeatSection,
        controller: repeatSectionController
    });

    config.setType({
        name: 'tree',
        template: treeTemplate,
        controller: treeController
    });

    config.setType({
        name: 'refSelect',
        template: refSelect,
        controller: refController,
        wrapper: ['bootstrapLabel', 'bootstrapHasError']
    });

    config.setType({
        name: 'code',
        template: codeTemplate,
        controller: code
    });

    /*
     <button class="btn btn-white"
     type="button"
     style="z-index: 10;position: fixed;margin-right: 33px;right: 0px;"
     >
     hex8</button>
     */
    config.setType({
        name: 'color',
        template: `
        <color-picker
            ng-init=""
            ng-model="model[options.key]"
            color-picker-format="'hex'"
            color-picker-alpha="true"
            color-picker-case="'lower'"
        ></color-picker>
        `,
        wrapper: ['bootstrapLabel', 'bootstrapHasError']
    });

    config.setType({
        name: 'array',
        template: arrayTemplate,
        controller: arrayController
    });

    config.setType({
        name: 'select',
        template: selectTemplate,
        controller: function () {
        },
        overwriteOk: true,
        wrapper: ['bootstrapLabel', 'bootstrapHasError']
    });

    config.setType({
        name: 'select-whole',
        template: selectWholeTemplate,
        controller: () => {
        },
        overwriteOk: true,
        wrapper: ['bootstrapLabel', 'bootstrapHasError']
    });

    config.setType({
        name: 'recursive',
        template: recursiveTemplate,
        controller: recursiveController,
        overwriteOk: true,
        wrapper: ['bootstrapLabel', 'bootstrapHasError']
    });

    config.setType({
        name: 'select-type',
        template: selectTemplate,
        controller: selectTypeController,
        overwriteOk: true,
        wrapper: ['bootstrapLabel', 'bootstrapHasError']
    });

    config.setType({
        name: 'select-element',
        template: selectWholeTemplate,
        controller: selectElementController,
        overwriteOk: true,
        wrapper: ['bootstrapLabel', 'bootstrapHasError']
    });

    config.setType({
        name: 'select-property',
        template: selectTemplate,
        controller: selectPropertyController,
        overwriteOk: true,
        wrapper: ['bootstrapLabel', 'bootstrapHasError']
    });

    config.setType({
        name: 'select-child-property',
        template: selectTemplate,
        controller: selectChildPropertyController,
        overwriteOk: true,
        wrapper: ['bootstrapLabel', 'bootstrapHasError']
    });

    config.setType({
        name: 'select-fn',
        template: selectTemplate,
        controller: selectFnController,
        overwriteOk: true,
        wrapper: ['bootstrapLabel', 'bootstrapHasError']
    });

    config.setType({
        name: 'multi-select',
        template: multiSelectTemplate,
        controller: function () {
        },
        overwriteOk: true,
        wrapper: ['bootstrapLabel', 'bootstrapHasError']
    });
    config.setType({
        name: 'bs-grid-select',
        template: bsGridSelectTemplate,
        controller: bsGridSelectController,
        overwriteOk: true,
        wrapper: ['bootstrapLabel', 'bootstrapHasError']
    });

    config.setType({
        name: 'save-containers',
        template: `
            <button class="btn btn-sm"
                    type="button"
                    ng-click="save()"
                    ng-class="{'btn-success' : model[options.key],'btn-white' : !model[options.key]}"
                    >save</button>
            <button class="btn btn-sm btn-danger"
                    type="button"
                    ng-click="restore()"
                    ng-show="model[options.key]"
                    >restore</button>
        `,
        controller: saveContainersController,
        overwriteOk: true,
        wrapper: ['bootstrapLabel', 'bootstrapHasError']
    });
}

export default config;
