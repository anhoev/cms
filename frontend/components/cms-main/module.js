import common from "../../common/common.module";
import "angular-drag-and-drop-lists";
import cmsEditable from "../cms-editable/module";
import cmsElementEdit from "../cms-element-edit/module";
import "angular-ui-bootstrap";
import elementDirective from "./element.directive";
import editorDirective from "./editor.directive";
import cmsWrapper from "./cms-wrapper.directive";
import "angular-bootstrap-contextmenu";
import fragmentDirective from "./fragment.directive";
import containerDirective from "./container.directive";
import containerEditDirective from "./container-edit.directive";
import cmsFormPathDirective from "./cms-form-path.directive";
import 'angular-file-saver';
import 'angular-bind-notifier';
import 'oclazyload';

const module = angular
    .module('components.cmsMain', ['dndLists', 'ui.bootstrap', common, cmsEditable, cmsElementEdit, 'ui.bootstrap.contextMenu', 'ngFileSaver', 'oc.lazyLoad', 'angular.bind.notifier'])
    .directive('cmsContainer', containerDirective)
    .directive('cmsElement', elementDirective)
    .directive('cmsEditor', editorDirective)
    .directive('cmsWrapper', cmsWrapper)
    .directive('cmsFragment', fragmentDirective)
    .directive('cmsFormPath', cmsFormPathDirective)
    //.directive('cmsContainerEdit', containerEditDirective);
    .directive('noApplyClick', function ($parse) {
        return {
            compile : function ($element, attr) {
                const fn = $parse(attr['noApplyClick']);
                return function (scope, element, attr) {
                    element.on('click', function (event) {
                        fn(scope, {
                            $event : event,
                            $element : element
                        });
                    });
                };
            }
        };
    })

export default module.name;