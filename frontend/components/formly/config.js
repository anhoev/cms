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
import tableController from './table.controller';
import tableTemplate from './table.template.html';
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

    config.setType({
        name: 'image',
        template: `
            <div class="row" style="padding-top:7px;">
                <div class="col-sm-4">
                    <input type="text" class="form-control input-xs" ng-model="model[options.key]" placeholder="URL">
                </div>
                <div class="col-sm-6">
                    <button class="btn btn-white cms-btn-bottom btn-xs" type="button" ng-click="onFileUpload(file)"  style="position: absolute;right: 15px;">
                        Up
                    </button>
                    <input type="file" ngf-select ng-model="file"
                           name="file" class="form-control input-xs"
                           placeholder="file upload">
                </div>
                <div class="col-sm-2">
                    <div class="checkbox" style="padding-top: 0px;">
                        <label>
                            <input type="checkbox"
                               class="formly-field-checkbox"
                               ng-model="genName">
                            Gen name
                        </label>
                    </div>
                </div>
            </div>
            
            <img ng-if="model[options.key]" ng-src="{{model[options.key]}}" width="30px" height="30px">
        `,
        controller: function ($scope, cms) {
            $scope.genName = true;
            $scope.onFileUpload = function (file) {
                //files: an array of files selected, each file has name, size, and type.
                cms.uploadFile(file, '.image', () => {
                    $scope.model[$scope.options.key] = `.image/${file.name}`;
                    $scope.file = null;
                    console.log('upload successful');
                })
            }

        },
        wrapper: ['bootstrapLabel', 'bootstrapHasError']
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
        name: 'tableSection',
        template: tableTemplate,
        controller: tableController,
        wrapper: ['bootstrapLabel', 'bootstrapHasError']
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
        name: 'select-ref-static',
        template: selectTemplate,
        controller: function ($scope, cms) {
            const type = $scope.options.templateOptions.Type;

            cms.loadElements(type, () => {
                $scope.to.options = _.map(Types[type].list, e => {
                    const value = cms.getTitle(type, e._id);
                    return ({
                        value: value,
                        name: value
                    });
                });
            })
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
