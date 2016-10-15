import 'angular-filter';
import config from './config';

import _apiCheck from 'api-check';
window.apiCheck = _apiCheck;
apiCheck.globalConfig.disabled = true;
import 'angular-ui-switch';
import 'angular-ui-switch/angular-ui-switch.css';

import 'angular-formly';
import 'angular-formly-templates-bootstrap';

import 'jstree';
import 'jstree-bootstrap-theme/dist/themes/proton/style.min.css'
import 'ng-js-tree';
import 'ui-select';
import 'ui-select/dist/select.min.css';

import 'selectize/dist/css/selectize.css';
import _Selectize from 'selectize/dist/js/standalone/selectize.js';
window.Selectize = _Selectize;
import './selectize';

import _tinycolor from 'tinycolor2';
window.tinycolor = _tinycolor;
import 'angularjs-color-picker';
import 'angularjs-color-picker/angularjs-color-picker.css';
import 'angular-sanitize';
import _CodeMirror from 'codemirror/lib/codemirror';
window.CodeMirror = _CodeMirror;
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/hint/show-hint.css';
import 'codemirror/addon/hint/show-hint';
import 'codemirror/mode/javascript/javascript';

import 'codemirror/addon/display/fullscreen.css';
import 'codemirror/addon/display/fullscreen.js';
import 'codemirror/addon/lint/lint.css';
import 'codemirror/addon/lint/lint.js';
import 'codemirror/addon/lint/javascript-lint';
import 'codemirror/addon/dialog/dialog.css';
import 'codemirror/addon/dialog/dialog.js';
import 'acorn/dist/acorn';
import 'acorn/dist/acorn_loose';
import 'acorn/dist/walk';
import _tern from 'tern/lib/tern'
window.tern = _tern;
import 'tern/doc/demo/polyfill';
import 'tern/lib/signal'
import 'tern/lib/def'
import 'tern/lib/comment'
import 'tern/lib/infer'
import 'tern/plugin/doc_comment'
import 'codemirror/addon/tern/tern.css';
import 'codemirror/addon/tern/tern.js';
import 'angular-ui-codemirror';

const module = angular
    .module('components.formly', ['formly', 'formlyBootstrap',
        'ngJsTree', 'ui.select', 'ngSanitize', 'angular.filter',
        'ui.codemirror', 'color.picker', 'dndLists', 'uiSwitch', 'selectize'])
    .config(config)
    .constant('size', {label: 'col-sm-2', input: 'col-sm-10'});

export default module.name;
