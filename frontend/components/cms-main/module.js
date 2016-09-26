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

const module = angular
    .module('components.cmsMain', ['dndLists', 'ui.bootstrap', common, cmsEditable, cmsElementEdit, 'ui.bootstrap.contextMenu'])
    .directive('cmsContainer', containerDirective)
    .directive('cmsElement', elementDirective)
    .directive('cmsEditor', editorDirective)
    .directive('cmsWrapper', cmsWrapper)
    .directive('cmsFragment', fragmentDirective)
    .directive('cmsContainerEdit', containerEditDirective);

export default module.name;