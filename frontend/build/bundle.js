/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	var _angular = __webpack_require__(3);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	__webpack_require__(4);
	
	__webpack_require__(1);
	
	var _printthis = __webpack_require__(5);
	
	var _printthis2 = _interopRequireDefault(_printthis);
	
	__webpack_require__(6);
	
	var _unionWith = __webpack_require__(7);
	
	var _unionWith2 = _interopRequireDefault(_unionWith);
	
	var _pickBy = __webpack_require__(8);
	
	var _pickBy2 = _interopRequireDefault(_pickBy);
	
	var _moment2 = __webpack_require__(9);
	
	var _moment3 = _interopRequireDefault(_moment2);
	
	var _jsonFn = __webpack_require__(10);
	
	var _jsonFn2 = _interopRequireDefault(_jsonFn);
	
	__webpack_require__(11);
	
	var _components = __webpack_require__(12);
	
	var _components2 = _interopRequireDefault(_components);
	
	var _common = __webpack_require__(93);
	
	var _common2 = _interopRequireDefault(_common);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	window.angular = _angular2.default;
	
	window.printthis = _printthis2.default;
	$.fn.printthis = _printthis2.default;
	
	_.unionWith = _unionWith2.default;
	
	_.pickBy = _pickBy2.default;
	
	window.moment = _moment3.default;
	
	window.JsonFn = _jsonFn2.default;
	_jsonFn2.default.stringify = function (obj) {
	    return JSON.stringify(obj, function (key, value) {
	        var fnBody;
	        if (value instanceof Function || typeof value == 'function') {
	
	            fnBody = value.toString();
	
	            if (fnBody.length < 8 || fnBody.substring(0, 8) !== 'function') {
	                //this is ES6 Arrow Function
	                return '_NuFrRa_' + fnBody;
	            }
	            return fnBody;
	        }
	        if (value instanceof RegExp) {
	            return '_PxEgEr_' + value;
	        }
	
	        if (typeof key === 'string' && key.charAt(0) === '$' && key.charAt(1) === '$') {
	            value = undefined;
	        }
	        if (value && value.hasOwnProperty('isObjectId')) {
	            value = value._id;
	        }
	
	        return value;
	    });
	};
	
	_jsonFn2.default.parse = function (str, date2obj) {
	
	    var iso8061 = date2obj ? /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/ : false;
	
	    return JSON.parse(str, function (key, value) {
	        var prefix;
	
	        if (typeof value != 'string') {
	            return value;
	        }
	        if (value.length < 8) {
	            return value;
	        }
	
	        prefix = value.substring(0, 8);
	
	        if (iso8061 && value.match(iso8061)) {
	            return new Date(value);
	        }
	        if (prefix === 'function') {
	            try {
	                return eval('(' + value + ')');
	            } catch (e) {}
	        }
	        if (prefix === '_PxEgEr_') {
	            return eval(value.slice(8));
	        }
	        if (prefix === '_NuFrRa_') {
	            try {
	                return eval(value.slice(8));
	            } catch (e) {}
	        }
	
	        return value;
	    });
	};
	
	window._transform = { transformResponse: function transformResponse(d) {
	        return JsonFn.parse(d);
	    } };
	
	/*
	import 'bootstrap-sass';
	import 'bootstrap/dist/css/bootstrap.css';
	import 'bootstrap/dist/css/bootstrap-theme.css';
	*/
	
	_angular2.default.module('app', [_common2.default, _components2.default]).controller('appCtrl', function () {});
	
	_angular2.default.element(document).ready(function () {
	    _angular2.default.bootstrap(document, ['app']);
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(1);

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = lib_lib;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(2);

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(48);

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(345);

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(82);

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(98);

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(173);

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(344);

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(342);

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(248);

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _module = __webpack_require__(13);
	
	var _module2 = _interopRequireDefault(_module);
	
	var _module3 = __webpack_require__(104);
	
	var _module4 = _interopRequireDefault(_module3);
	
	var _module5 = __webpack_require__(107);
	
	var _module6 = _interopRequireDefault(_module5);
	
	var _module7 = __webpack_require__(120);
	
	var _module8 = _interopRequireDefault(_module7);
	
	var _module9 = __webpack_require__(122);
	
	var _module10 = _interopRequireDefault(_module9);
	
	var _module11 = __webpack_require__(124);
	
	var _module12 = _interopRequireDefault(_module11);
	
	var _module13 = __webpack_require__(132);
	
	var _module14 = _interopRequireDefault(_module13);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var components = angular.module('components', [_module4.default, _module6.default, _module8.default, _module10.default, _module12.default, _module14.default]);
	
	exports.default = components.name;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	__webpack_require__(14);
	
	var _editableFormly = __webpack_require__(15);
	
	var _editableFormly2 = _interopRequireDefault(_editableFormly);
	
	var _module2 = __webpack_require__(16);
	
	var _module3 = _interopRequireDefault(_module2);
	
	var _tpl = __webpack_require__(92);
	
	var _tpl2 = _interopRequireDefault(_tpl);
	
	var _common = __webpack_require__(93);
	
	var _common2 = _interopRequireDefault(_common);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _module = angular.module('components.cmsEditable', [_module3.default, 'ui.bootstrap', _common2.default]).directive('cmsEditable', directive).directive('cmsEditableTransclude', cmsEditableTransclude).directive('cmsDirectEditable', cmsDirectEditableDirective).run(run);
	
	run.$inject = ['$templateCache'];
	function run($templateCache) {
	    $templateCache.put('editable-formly.html', _editableFormly2.default);
	}
	
	directive.$inject = ['cms'];
	
	function directive(cms) {
	
	    function link(scope, element, attrs, elementController) {
	        // resolve type and ref
	        var _elementController$ge = elementController.getElement();
	
	        var type = _elementController$ge.type;
	        var ref = _elementController$ge.ref;
	        var vm = scope.vm;
	
	
	        vm.showJson = function () {
	            return false;
	        };
	
	        prepareForm(cms, type, ref, scope);
	
	        scope.$watch('model', function (v) {
	            vm.value = _.get(scope, vm.property);
	            vm.isValueUndefined = _.isEmpty(vm.value) && isNaN(vm.value);
	        }, true);
	    }
	
	    return {
	        require: '^^?cmsElement',
	        restrict: 'A',
	        scope: {},
	        bindToController: {
	            property: '@cmsEditable'
	        },
	        template: _tpl2.default,
	        controllerAs: 'vm',
	        controller: function controller() {},
	        link: link
	    };
	}
	
	// inheritance
	
	cmsDirectEditableDirective.$inject = ['cms', '$filter'];
	
	function cmsDirectEditableDirective(cms, $filter) {
	
	    function link(scope, element, attrs, elementController) {
	        var vm = scope.vm;
	
	        // resolve type and ref
	
	        var type = vm.type;
	        var ref = vm.ref;
	
	
	        var property = vm.property.replace('model.', '');
	
	        var refKey = Types[type].checkAndGetRef(property);
	
	        vm.showJson = function () {
	            return vm._value instanceof Object && !refKey && !(vm._value instanceof Date);
	        };
	
	        scope.$watch('vm._value', function (v) {
	            if (v instanceof Date) {
	                vm.value = $filter('date')(v, 'dd-MM-yyyy HH:mm');
	            } else {
	                vm.value = v && refKey ? v[refKey] : v;
	            }
	
	            vm.isValueUndefined = typeof vm.value === 'undefined';
	        });
	
	        if (!ref) return;
	
	        prepareForm(cms, type, ref, scope);
	    }
	
	    return {
	        restrict: 'A',
	        scope: {},
	        bindToController: {
	            _value: '=cmsValue',
	            property: '@cmsDirectEditable',
	            type: '@cmsType',
	            ref: '@cmsRef'
	        },
	        template: _tpl2.default,
	        controllerAs: 'vm',
	        controller: function controller() {},
	        link: link
	    };
	}
	
	cmsEditableTransclude.$inject = ['cms', '$timeout'];
	
	function cmsEditableTransclude(cms, $timeout) {
	
	    function link(scope, element, attrs, elementController) {
	        var vm = scope.vm;
	
	        // resolve type and ref
	
	        var _ref = vm.element ? vm.element : elementController.getElement();
	
	        var type = _ref.type;
	        var ref = _ref.ref;
	
	
	        vm.showJson = function () {
	            return false;
	        };
	
	        prepareForm(cms, type, ref, scope);
	
	        scope.$watch('model', function (v) {
	            vm.value = _.get(scope, vm.property);
	            vm.isValueUndefined = _.isEmpty(vm.value) && isNaN(vm.value);
	        }, true);
	
	        vm.hide = function () {
	            $timeout(function () {
	                return vm.show = false;
	            }, 1000);
	        };
	    }
	
	    return {
	        require: '^^?cmsElement',
	        restrict: 'A',
	        scope: {},
	        bindToController: {
	            property: '@cmsEditableTransclude',
	            withEditBtn: '@withEditBtn',
	            element: '=element'
	        },
	        transclude: true,
	        template: '\n<span class="cms">\n    <span   ng-if="vm.withEditBtn !== \'true\'"\n            popover-placement="bottom"\n            popover-is-open="vm.isOpen"\n            uib-popover-template="\'editable-formly.html\'"\n            popover-append-to-body="true"\n            style="cursor: pointer">\n        <ng-transclude></ng-transclude>\n        <span ng-show="vm.isValueUndefined && !vm.element" class="cms-empty-value">\n            empty\n        </span> \n    </span>\n    <span ng-if="vm.withEditBtn === \'true\'" style="position: relative">\n        <button ng-style="{opacity:vm.show? 1: 0.1}"\n                class="btn btn-white btn-xs"\n                popover-placement="bottom"\n                popover-is-open="vm.isOpen"\n                uib-popover-template="\'editable-formly.html\'"\n                popover-append-to-body="true"\n                style="position: absolute;z-index: 1000;top:-24px"\n                ng-mouseover="vm.show = true" \n                ng-mouseout="vm.hide();">\n                   Edit\n        </button>\n        <ng-transclude \n            ng-mouseover="vm.show = true" \n            ng-mouseout="vm.hide();"\n            ></ng-transclude>\n        <span ng-show="vm.isValueUndefined && !vm.element" class="cms-empty-value">\n            empty\n        </span> \n    </span>   \n</span>\n',
	        controllerAs: 'vm',
	        controller: function controller() {},
	        link: link
	    };
	}
	
	function prepareForm(cms, type, ref, scope) {
	    var vm = scope.vm;
	
	
	    cms.getType(type, ref, function (model) {
	        var form = Types[type].form;
	
	        scope.model = model;
	
	        vm.fields = [cms.findField(form, vm.property.split("\.")[1])];
	
	        vm.fields[0].templateOptions.focus = 'true';
	
	        vm.onSubmit = function () {
	            cms.updateElement(type, scope.model);
	            vm.isOpen = false;
	        };
	
	        vm.options = { formState: { path: '' } };
	    });
	}
	
	exports.default = _module.name;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(45);

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = "<div class=\"cms\">\n    <form ng-submit=\"vm.onSubmit()\" novalidate class=\"form-horizontal cms-field-form\">\n        <div style=\"overflow: auto;max-height: 500px;padding-right: 20px;\">\n            <formly-form model=\"model\" fields=\"vm.fields\" form=\"vm.form\" options=\"vm.options\">\n            </formly-form>\n        </div>\n        <button type=\"submit\" class=\"btn btn-primary submit-button\" ng-disabled=\"vm.form.$invalid\">Submit</button>\n        <button type=\"button\" class=\"btn btn-primary\" ng-click=\"vm.isOpen = false\">Cancel</button>\n    </form>\n    <br ng-if=\"adminList === 'true'\">\n</div>"

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	__webpack_require__(17);
	
	var _config = __webpack_require__(18);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _apiCheck2 = __webpack_require__(51);
	
	var _apiCheck3 = _interopRequireDefault(_apiCheck2);
	
	__webpack_require__(52);
	
	__webpack_require__(53);
	
	__webpack_require__(54);
	
	__webpack_require__(55);
	
	__webpack_require__(56);
	
	__webpack_require__(57);
	
	__webpack_require__(58);
	
	var _tinycolor2 = __webpack_require__(62);
	
	var _tinycolor3 = _interopRequireDefault(_tinycolor2);
	
	__webpack_require__(63);
	
	__webpack_require__(64);
	
	__webpack_require__(65);
	
	var _codemirror = __webpack_require__(66);
	
	var _codemirror2 = _interopRequireDefault(_codemirror);
	
	__webpack_require__(67);
	
	__webpack_require__(68);
	
	__webpack_require__(69);
	
	__webpack_require__(70);
	
	__webpack_require__(71);
	
	__webpack_require__(72);
	
	__webpack_require__(73);
	
	__webpack_require__(74);
	
	__webpack_require__(75);
	
	__webpack_require__(76);
	
	__webpack_require__(77);
	
	__webpack_require__(78);
	
	__webpack_require__(79);
	
	__webpack_require__(80);
	
	__webpack_require__(81);
	
	var _tern2 = __webpack_require__(82);
	
	var _tern3 = _interopRequireDefault(_tern2);
	
	__webpack_require__(83);
	
	__webpack_require__(84);
	
	__webpack_require__(85);
	
	__webpack_require__(86);
	
	__webpack_require__(87);
	
	__webpack_require__(88);
	
	__webpack_require__(89);
	
	__webpack_require__(90);
	
	__webpack_require__(91);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	window.apiCheck = _apiCheck3.default;
	apiCheck.globalConfig.disabled = true;
	
	window.tinycolor = _tinycolor3.default;
	
	window.CodeMirror = _codemirror2.default;
	
	window.tern = _tern3.default;
	
	
	var _module = angular.module('components.formly', ['formly', 'formlyBootstrap', 'ngJsTree', 'ui.select', 'ngSanitize', 'angular.filter', 'ui.codemirror', 'color.picker', 'dndLists']).config(_config2.default).constant('size', { label: 'col-sm-2', input: 'col-sm-10' });
	
	exports.default = _module.name;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(72);

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _panel = __webpack_require__(19);
	
	var _panel2 = _interopRequireDefault(_panel);
	
	var _repeatSection = __webpack_require__(20);
	
	var _repeatSection2 = _interopRequireDefault(_repeatSection);
	
	var _repeatSection3 = __webpack_require__(21);
	
	var _repeatSection4 = _interopRequireDefault(_repeatSection3);
	
	var _treeTemplate = __webpack_require__(22);
	
	var _treeTemplate2 = _interopRequireDefault(_treeTemplate);
	
	var _tree = __webpack_require__(23);
	
	var _tree2 = _interopRequireDefault(_tree);
	
	var _refSelect = __webpack_require__(24);
	
	var _refSelect2 = _interopRequireDefault(_refSelect);
	
	var _ref = __webpack_require__(25);
	
	var _ref2 = _interopRequireDefault(_ref);
	
	var _code = __webpack_require__(26);
	
	var _code2 = _interopRequireDefault(_code);
	
	var _code3 = __webpack_require__(27);
	
	var _code4 = _interopRequireDefault(_code3);
	
	var _array = __webpack_require__(33);
	
	var _array2 = _interopRequireDefault(_array);
	
	var _arrayTemplate = __webpack_require__(34);
	
	var _arrayTemplate2 = _interopRequireDefault(_arrayTemplate);
	
	var _table = __webpack_require__(35);
	
	var _table2 = _interopRequireDefault(_table);
	
	var _tableTemplate = __webpack_require__(36);
	
	var _tableTemplate2 = _interopRequireDefault(_tableTemplate);
	
	var _selectType = __webpack_require__(37);
	
	var _selectType2 = _interopRequireDefault(_selectType);
	
	var _selectElement = __webpack_require__(38);
	
	var _selectElement2 = _interopRequireDefault(_selectElement);
	
	var _selectProperty = __webpack_require__(39);
	
	var _selectProperty2 = _interopRequireDefault(_selectProperty);
	
	var _selectChildProperty = __webpack_require__(40);
	
	var _selectChildProperty2 = _interopRequireDefault(_selectChildProperty);
	
	var _selectFn = __webpack_require__(41);
	
	var _selectFn2 = _interopRequireDefault(_selectFn);
	
	var _select = __webpack_require__(42);
	
	var _select2 = _interopRequireDefault(_select);
	
	var _selectWhole = __webpack_require__(43);
	
	var _selectWhole2 = _interopRequireDefault(_selectWhole);
	
	var _multiSelect = __webpack_require__(44);
	
	var _multiSelect2 = _interopRequireDefault(_multiSelect);
	
	var _bsGridSelect = __webpack_require__(45);
	
	var _bsGridSelect2 = _interopRequireDefault(_bsGridSelect);
	
	var _bsGridSelect3 = __webpack_require__(46);
	
	var _bsGridSelect4 = _interopRequireDefault(_bsGridSelect3);
	
	var _checkbox = __webpack_require__(47);
	
	var _checkbox2 = _interopRequireDefault(_checkbox);
	
	var _saveContainersController = __webpack_require__(48);
	
	var _saveContainersController2 = _interopRequireDefault(_saveContainersController);
	
	var _recursive = __webpack_require__(49);
	
	var _recursive2 = _interopRequireDefault(_recursive);
	
	var _recursive3 = __webpack_require__(50);
	
	var _recursive4 = _interopRequireDefault(_recursive3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	config.$inject = ['formlyConfigProvider', 'size', '$rootScopeProvider'];
	
	function config(formlyConfigProvider, size, $rootScopeProvider) {
	    $rootScopeProvider.digestTtl(20);
	
	    var config = formlyConfigProvider;
	
	    config.disableWarnings = true;
	
	    config.removeWrapperByName('bootstrapLabel');
	
	    config.setWrapper({
	        name: 'bootstrapLabel',
	        template: '\n        <div>\n          <label for="{{id}}" class="control-label {{!to.class ? \'' + size.label + '\' : \'\'}}"\n                 uib-tooltip-html=\'to.tooltip\'>\n            {{to.label}} {{to.required ? \'*\' : \'\'}}\n          </label>\n          <div class="{{!to.class ? \'' + size.input + '\' : \'\'}}"><formly-transclude></formly-transclude></div>\n        </div>\n        '
	    });
	
	    config.removeWrapperByName('bootstrapHasError');
	    config.setWrapper({
	        name: 'bootstrapHasError',
	        template: '\n        <div ng-if="!to.class" class="clearfix"></div>\n        <div ng-if="!to.class" ng-class="[\'form-group\',\'\']" ng-class="{\'has-error\': showError}" >\n          <formly-transclude></formly-transclude>\n        </div>\n        \n        <div ng-if="to.class" ng-class="[to.class]" ng-class="{\'has-error\': showError}" style="margin-bottom: 15px;">\n          <formly-transclude></formly-transclude>\n        </div>\n        '
	    });
	
	    // Replace formlyBootstrap input field type to implement read-only forms
	    config.setType({
	        name: 'input',
	        template: '\n        <div>\n          <input ng-if="!formState.readOnly" class="form-control" ng-model="model[options.key]">\n          <p ng-if="formState.readOnly" class="form-control-static">{{model[options.key]}}</p>\n        </div>\n        ',
	        wrapper: ['bootstrapLabel', 'bootstrapHasError'],
	        overwriteOk: true
	    });
	
	    config.setWrapper({
	        name: 'checkboxWrapper',
	        template: '<div class="form-group"><div class="col-sm-offset-2 col-sm-10"><formly-transclude></formly-transclude></div></div>'
	    });
	
	    config.setType({
	        name: 'checkbox',
	        template: _checkbox2.default,
	        wrapper: ['checkboxWrapper'],
	        overwriteOk: true
	    });
	
	    config.setWrapper({
	        name: 'panel',
	        template: _panel2.default
	    });
	
	    config.setType({
	        name: 'repeatSection',
	        template: _repeatSection2.default,
	        controller: _repeatSection4.default
	    });
	
	    config.setType({
	        name: 'tree',
	        template: _treeTemplate2.default,
	        controller: _tree2.default
	    });
	
	    config.setType({
	        name: 'refSelect',
	        template: _refSelect2.default,
	        controller: _ref2.default,
	        wrapper: ['bootstrapLabel', 'bootstrapHasError']
	    });
	
	    config.setType({
	        name: 'code',
	        template: _code2.default,
	        controller: _code4.default
	    });
	
	    config.setType({
	        name: 'image',
	        template: '\n            <div class="row" style="padding-top:7px;">\n                <div class="col-sm-7" style="padding-left: 0px;padding-right: 0px;">\n                    <div class="col-sm-6">\n                        <input type="text" class="form-control input-xs" ng-model="model[options.key]" placeholder="URL">\n                    </div>\n                    <div class="col-sm-6">\n                        <div class = "input-group">\n                            <input ng-model="filename" class="form-control input-xs"\n                                   placeholder="filename">\n                            <span class = "input-group-btn">\n                            <button class="btn btn-white btn-sm" type="button" ng-click="download(filename)"  style="margin: 0px;">\n                                Save\n                            </button>\n                        </span>\n                        </div>\n                    </div>\n                </div>\n                <div class="col-sm-5">\n                    <div class = "input-group">\n                        <input type="file" ngf-select ng-model="file"\n                               name="file" class="form-control input-xs"\n                               placeholder="file upload">\n                        <span class = "input-group-btn">\n                            <button class="btn btn-white btn-sm" type="button" ng-click="onFileUpload(file)"  style="margin: 0px;">\n                                Up\n                            </button>\n                        </span>\n                    </div>\n                    \n                    \n                </div>\n            </div>\n            \n            <img ng-if="model[options.key]" ng-src="{{model[options.key]}}" width="40px" height="40px">\n        ',
	        controller: function controller($scope, cms, $http) {
	            $scope.genName = true;
	            $scope.onFileUpload = function (file) {
	                //files: an array of files selected, each file has name, size, and type.
	                cms.uploadFile(file, '.image', function () {
	                    $scope.model[$scope.options.key] = '.image/' + file.name;
	                    if ($scope.w) $scope.model[$scope.options.key] = $scope.model[$scope.options.key] + '?w=' + $scope.w;
	                    $scope.file = null;
	                    console.log('upload successful');
	                });
	            };
	
	            $scope.download = function (filename) {
	                $http.post('api/saveimage', { url: $scope.model[$scope.options.key], filename: filename }).then(function () {
	                    $scope.model[$scope.options.key] = '.image/' + filename;
	                    if ($scope.w) $scope.model[$scope.options.key] = $scope.model[$scope.options.key] + '?w=' + $scope.w;
	                });
	            };
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
	        template: '\n        <color-picker\n            ng-init=""\n            ng-model="model[options.key]"\n            color-picker-format="\'hex\'"\n            color-picker-alpha="true"\n            color-picker-case="\'lower\'"\n        ></color-picker>\n        ',
	        wrapper: ['bootstrapLabel', 'bootstrapHasError']
	    });
	
	    config.setType({
	        name: 'array',
	        template: _arrayTemplate2.default,
	        controller: _array2.default
	    });
	
	    config.setType({
	        name: 'tableSection',
	        template: _tableTemplate2.default,
	        controller: _table2.default,
	        wrapper: ['bootstrapLabel', 'bootstrapHasError']
	    });
	
	    config.setType({
	        name: 'select',
	        template: _select2.default,
	        controller: function controller() {},
	        overwriteOk: true,
	        wrapper: ['bootstrapLabel', 'bootstrapHasError']
	    });
	
	    config.setType({
	        name: 'select-ref-static',
	        template: _select2.default,
	        controller: function controller($scope, cms) {
	            var type = $scope.options.templateOptions.Type;
	
	            cms.loadElements(type, function () {
	                $scope.to.options = [{ name: 'None', value: null }].concat(_.map(Types[type].list, function (e) {
	                    var value = cms.getTitle(type, e._id);
	                    return {
	                        value: value,
	                        name: $scope.to.labelProp ? e[$scope.to.labelProp] : value
	                    };
	                }));
	            });
	        },
	        overwriteOk: true,
	        wrapper: ['bootstrapLabel', 'bootstrapHasError']
	    });
	
	    config.setType({
	        name: 'select-whole',
	        template: _selectWhole2.default,
	        controller: function controller() {},
	        overwriteOk: true,
	        wrapper: ['bootstrapLabel', 'bootstrapHasError']
	    });
	
	    config.setType({
	        name: 'recursive',
	        template: _recursive2.default,
	        controller: _recursive4.default,
	        overwriteOk: true,
	        wrapper: ['bootstrapLabel', 'bootstrapHasError']
	    });
	
	    config.setType({
	        name: 'select-type',
	        template: _select2.default,
	        controller: _selectType2.default,
	        overwriteOk: true,
	        wrapper: ['bootstrapLabel', 'bootstrapHasError']
	    });
	
	    config.setType({
	        name: 'select-element',
	        template: _selectWhole2.default,
	        controller: _selectElement2.default,
	        overwriteOk: true,
	        wrapper: ['bootstrapLabel', 'bootstrapHasError']
	    });
	
	    config.setType({
	        name: 'select-property',
	        template: _select2.default,
	        controller: _selectProperty2.default,
	        overwriteOk: true,
	        wrapper: ['bootstrapLabel', 'bootstrapHasError']
	    });
	
	    config.setType({
	        name: 'select-child-property',
	        template: _select2.default,
	        controller: _selectChildProperty2.default,
	        overwriteOk: true,
	        wrapper: ['bootstrapLabel', 'bootstrapHasError']
	    });
	
	    config.setType({
	        name: 'select-fn',
	        template: _select2.default,
	        controller: _selectFn2.default,
	        overwriteOk: true,
	        wrapper: ['bootstrapLabel', 'bootstrapHasError']
	    });
	
	    config.setType({
	        name: 'multi-select',
	        template: _multiSelect2.default,
	        controller: function controller() {},
	        overwriteOk: true,
	        wrapper: ['bootstrapLabel', 'bootstrapHasError']
	    });
	
	    config.setType({
	        name: 'bs-grid-select',
	        template: _bsGridSelect4.default,
	        controller: _bsGridSelect2.default,
	        overwriteOk: true,
	        wrapper: ['bootstrapLabel', 'bootstrapHasError']
	    });
	
	    config.setType({
	        name: 'save-containers',
	        template: '\n            <button class="btn btn-sm"\n                    type="button"\n                    ng-click="save()"\n                    ng-class="{\'btn-success\' : model[options.key],\'btn-white\' : !model[options.key]}"\n                    >save</button>\n            <button class="btn btn-sm btn-danger"\n                    type="button"\n                    ng-click="restore()"\n                    ng-show="model[options.key]"\n                    >restore</button>\n        ',
	        controller: _saveContainersController2.default,
	        overwriteOk: true,
	        wrapper: ['bootstrapLabel', 'bootstrapHasError']
	    });
	}
	
	exports.default = config;

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = "<div class=\"clearfix\"></div>\n<div ng-if=\"!to.noPanel\"\n     ng-show=\"!(model[options.key].null && to.null)\"\n     class=\"cms-panel\" ng-init=\"state = {_show :true}\"\n     style=\"position: relative;\">\n\n    <button type=\"button\" class=\"btn btn-xs btn-white\" ng-if=\"to.null\"\n            style=\"position: relative;right: 0px;margin-top: 15px;z-index: 1;\"\n            ng-click=\"model[options.key].null = true;\">\n        <i class=\"fa fa-trash-o\"></i>\n    </button>\n\n    <fieldset style=\"padding: 0 10px 10px 10px;position: relative;top:0px;\n    border: 1px solid #eee;border-radius:4px;background-color: rgba(128, 128, 128, 0.03)\">\n        <legend style=\"color: #337ab7;font-weight: 200;border: 0;margin-left: 10px;width: initial;padding: 0 5px;\"\n                ng-if=\"to.label\"\n                ng-style=\"{color:to.choice?'#8338b7':'#337ab7'}\">\n            <span ng-show=\"to.choice\"\n                  uib-dropdown on-toggle=\"toggled(open)\">\n                  <span uib-dropdown-toggle\n                        uib-tooltip='{{to.tooltip}}'\n                        style=\"cursor: pointer\">\n                      {{options.templateOptions.label}}</span>\n                  <ul uib-dropdown-menu aria-labelledby=\"simple-dropdown\">\n                      <li ng-repeat=\"v in options.fieldGroup track by $index\"\n                          ng-show=\"v.key !== 'choice'\">\n                          <a ng-click=\"options.key && options.key !== ''? (model[options.key].choice = v.key): (model.choice = v.key);\">\n                              {{v.key}}</a>\n                      </li>\n                  </ul>\n\n            </span>\n            <span ng-if=\"!to.choice\"\n                  uib-tooltip='{{to.tooltip}}'>\n                {{options.templateOptions.label}}\n            </span>\n            <button type=\"button\" ng-click=\"state._show = !state._show\"\n                    class=\"btn btn-white btn-xs\"\n                    style=\"border: none;background-color: transparent;\"\n                    ng-bind=\"state._show? '-': '+'\">\n            </button>\n        </legend>\n        <div ng-show=\"state._show\">\n            <formly-transclude></formly-transclude>\n        </div>\n    </fieldset>\n    <br>\n</div>\n<div ng-if=\"to.noPanel\">\n    <formly-transclude></formly-transclude>\n</div>\n<div ng-show=\"(model[options.key].null && to.null)\">\n    <div class=\"form-group\">\n        <div class=\"col-sm-offset-2 col-sm-10\">\n            <button type=\"button\" class=\"btn btn-white btn-xs\"\n                    ng-click=\"model[options.key].null = false;\" style=\"z-index: 1;\"> add {{to.label}}\n            </button>\n        </div>\n    </div>\n</div>\n"

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = "<div class=\"clearfix\"></div>\n<div>\n    <div dnd-list=\"model[options.key]\"\n         class=\"cms-containers\" style=\"min-height: 0px\">\n        <div class=\"repeatsection\"\n             style=\"position: relative\"\n             ng-repeat=\"element in model[options.key]\"\n             dnd-draggable=\"element\"\n             dnd-moved=\"model[options.key].splice($index, 1);\"\n             dnd-effect-allowed=\"move\"\n             ng-init=\"_fields = copyFields(to.fields)[0];_options = createFormOptions($index)\">\n\n\n\n            <dnd-nodrag style=\"display: block\">\n                <div style=\"position: absolute;right: 0px;z-index: 10;\" ng-style=\"{'margin-top': marginTop}\">\n                    <button type=\"button\" class=\"btn btn-xs btn-white\"\n                            ng-click=\"model[options.key].splice($index, 1)\">\n                        <i class=\"fa fa-trash-o\"></i>\n                    </button>\n                    <button type=\"button\" dnd-handle class=\"btn btn-xs btn-white\" style=\"cursor: move;\">:::</button>\n                </div>\n\n                <formly-field options=\"_fields\"\n                              form-options=\"{}\"\n                              form-state=\"_options.formState\"\n                              model=\"element\"\n                              form=\"form\">\n                </formly-field>\n            </dnd-nodrag>\n        </div>\n    </div>\n\n    <div class=\"form-group\">\n        <div class=\"col-sm-offset-2 col-sm-10\">\n            <div ng-if=\"!choice\">\n                <button type=\"button\" class=\"btn btn-white btn-xs\"\n                        ng-click=\"addNew()\">{{to.btnText}}\n                </button>\n            </div>\n            <div ng-if=\"choice\">\n                <div class=\"btn-group-xs\" uib-dropdown>\n                    <button type=\"button\" class=\"btn btn-white\" uib-dropdown-toggle>\n                        {{to.btnText}} <span class=\"caret\"></span>\n                    </button>\n                    <ul class=\"scrollable-menu\" uib-dropdown-menu role=\"menu\" aria-labelledby=\"btn-append-to-body\"\n                        style=\"z-index: 10000;\">\n                        <li style=\"padding: 0px 20px;\" ng-show=\"choice.length > 7\">\n                            <input type=\"text\" ng-model=\"_choice\" ng-click=\"$event.stopPropagation();\">\n                        </li>\n                        <li role=\"menuitem\" ng-repeat=\"c in choice | filter: _choice track by $index\">\n                            <a ng-click=\"addNewWithChoice(c); _choice = ''\">{{c}}</a>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n\n\n</div>\n"

/***/ },
/* 21 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	controller.$inject = ['$scope'];
	function controller($scope) {
	    $scope.choice = $scope.to.fields[0].templateOptions.choice;
	    $scope.marginTop = $scope.choice ? '0px' : '15px';
	    if ($scope.choice) $scope.to.fields[0].templateOptions.noPanel = true;
	
	    $scope.formOptions = { formState: $scope.formState };
	
	    $scope.addNew = function () {
	        $scope.model[$scope.options.key] = $scope.model[$scope.options.key] || [];
	        $scope.model[$scope.options.key].push({});
	    };
	
	    $scope.addNewWithChoice = function (choice) {
	        $scope.model[$scope.options.key] = $scope.model[$scope.options.key] || [];
	        $scope.model[$scope.options.key].push({ choice: choice });
	    };
	
	    $scope.copyFields = function (fields) {
	        return angular.copy(fields);
	    };
	
	    $scope.createFormOptions = function ($index) {
	        var path = $scope.formState.path + '.' + $scope.options.key + '[' + $index + ']';
	        if (_.startsWith(path, '.')) path = path.substring(1);
	        return {
	            formState: {
	                path: path,
	                model: $scope.formState.model || $scope.model
	            }
	        };
	    };
	}
	
	exports.default = controller;

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = "<div class=\"form-group\" ng-init=\"_showTree = false\">\n    <label class=\"control-label {{size.label}}\"\n           ng-show=\"options.templateOptions.label\"\n           uib-tooltip='{{to.tooltip}}'>\n        {{options.templateOptions.label}}\n    </label>\n    <div class=\"{{size.input}}\">\n        <div style=\"position: absolute;right: 12px;\">\n            <button type=\"button\" class=\"btn btn-xs btn-success\"\n                    ng-click=\"_showTree = !_showTree\"\n                    ng-bind=\"_showTree?'hide tree':'show tree'\"\n            >show tree\n            </button>\n            <button type=\"button\" class=\"btn btn-xs btn-danger\"\n                    ng-click=\"clear()\">clear\n            </button>\n        </div>\n\n        <div style=\"overflow-wrap: break-word;padding-top: 7px;\"\n             ng-show=\"!_showTree\" >\n            <button class=\"btn btn-xs btn-outline btn-default\"\n                    type=\"button\"\n                    style=\"margin-left: 4px;\"\n                    ng-repeat=\"v in model[options.key]\">\n                {{v}}\n            </button>\n        </div>\n        <div ng-show=\"_showTree\"\n             js-tree=\"treeConfig\"\n             style=\"margin-top: 7px;\"\n             ng-model=\"tree\"\n             tree=\"treeInstance\"\n             tree-events=\"check_node:check;uncheck_node:check\">\n        </div>\n\n    </div>\n</div>\n<br>"

/***/ },
/* 23 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	controller.$inject = ['$scope', '$timeout', 'size'];
	/**
	 *
	 * @param {{treeInstance}} $scope
	 * @param $timeout
	 */
	function controller($scope, $timeout, size) {
	    $scope.size = size;
	    $scope.tree = $scope.options.templateOptions.options;
	    function injectStatus(tree) {
	        if (Array.isArray(tree)) {
	            tree.forEach(function (child) {
	                return injectStatus(child);
	            });
	        } else {
	            if (_.find($scope.model[$scope.options.key], function (p) {
	                return p === tree.path;
	            })) {
	                tree.state = { checked: true };
	            } else {
	                tree.state = { checked: false };
	            }
	            _.each(tree.children, function (child) {
	                return injectStatus(child);
	            });
	        }
	    }
	
	    injectStatus($scope.tree);
	
	    $scope.treeConfig = {
	        core: {
	            themes: { name: 'proton', responsive: true },
	            animation: true,
	            check_callback: true
	        },
	        plugins: ['checkbox'],
	        checkbox: {
	            tie_selection: false
	        },
	        version: 1
	    };
	    $scope.check = function () {
	        $timeout(function () {
	            var _arr = $scope.treeInstance.jstree(true).get_checked();
	            _arr = _arr.map(function (id) {
	                return $scope.treeInstance.jstree(true).get_node(id);
	            });
	            $scope.model[$scope.options.key] = _arr.map(function (node) {
	                return node.original.path;
	            });
	        });
	    };
	    $scope.clear = function () {
	        $scope.model[$scope.options.key] = [];
	        injectStatus($scope.tree);
	        $scope.treeConfig.version++;
	    };
	}
	
	exports.default = controller;

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = "<ui-select ng-if=\"!to.multiple\" data-ng-model=\"model[options.key]\" theme=\"bootstrap\" append-to-body=\"true\">\n    <ui-select-match placeholder=\"{{to.placeholder}}\">\n        {{$select.selected[to.labelProp]}}&nbsp;&nbsp;&nbsp;&nbsp;\n    </ui-select-match>\n    <ui-select-choices data-repeat=\"model in models | filterBy: [to.labelProp]: $select.search\">\n        <div ng-bind-html=\"model[to.labelProp] | highlight: $select.search\"></div>\n    </ui-select-choices>\n</ui-select>\n\n<ui-select ng-if=\"to.multiple\" multiple data-ng-model=\"model[options.key]\" theme=\"bootstrap\" append-to-body=\"true\">\n    <ui-select-match placeholder=\"{{to.placeholder}}\">\n        {{$item[to.labelProp]}}\n    </ui-select-match>\n    <ui-select-choices data-repeat=\"model in models | filterBy: [to.labelProp]: $select.search\">\n        <div ng-bind-html=\"model[to.labelProp] | highlight: $select.search\"></div>\n    </ui-select-choices>\n</ui-select>"

/***/ },
/* 25 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	controller.$inject = ['$scope', 'cms'];
	
	function controller($scope, cms) {
	    var _ref;
	
	    $scope.models = [(_ref = {}, _defineProperty(_ref, $scope.to.labelProp, 'None'), _defineProperty(_ref, '_id', null), _ref)];
	
	    // resolve
	    var type = $scope.options.templateOptions.Type;
	    cms.loadElements(type, function () {
	        var _$scope$models;
	
	        (_$scope$models = $scope.models).push.apply(_$scope$models, _toConsumableArray(Types[type].list));
	
	        if (typeof $scope.model[$scope.options.key] === 'string') {
	            $scope.model[$scope.options.key] = _.find($scope.models, { _id: $scope.model[$scope.options.key] });
	        } else if (Array.isArray($scope.model[$scope.options.key]) && typeof $scope.model[$scope.options.key][0] === 'string') {
	            (function () {
	                var _ids = JsonFn.clone($scope.model[$scope.options.key]);
	                $scope.model[$scope.options.key] = _.filter($scope.models, function (_ref2) {
	                    var _id = _ref2._id;
	                    return _ids.indexOf(_id) !== -1;
	                });
	            })();
	        }
	    });
	}
	
	exports.default = controller;

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = "<div class=\"form-group\">\n    <label class=\"control-label {{size.label}}\" uib-tooltip='{{to.tooltip}}'>\n        {{to.label}}\n    </label>\n    <div class=\"{{size.input}}\">\n\n        <button type=\"button\"\n                class=\"btn btn-white btn-xs\"\n                style=\"margin-top: 7px;\"\n                ng-click=\"showCode(); selectTab();\">\n            {{!show? 'show code': 'hide code'}}\n        </button>\n        <span class=\"label label-danger\" ng-show=\"hasError\">The code has error</span>\n    </div>\n\n</div>\n<ui-codemirror ng-show=\"show\"\n                     ng-model=\"_model\"\n                     ui-codemirror-opts=\"editorOptions\"\n                     ui-codemirror=\"{ onLoad : codemirrorLoaded }\"\n                     ui-refresh='refresh'>\n</ui-codemirror>\n<br>"

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _jshint = __webpack_require__(28);
	
	var _ecma = __webpack_require__(29);
	
	var _ecma2 = _interopRequireDefault(_ecma);
	
	var _ecma3 = __webpack_require__(30);
	
	var _ecma4 = _interopRequireDefault(_ecma3);
	
	var _cmsDef = __webpack_require__(31);
	
	var _cmsDef2 = _interopRequireDefault(_cmsDef);
	
	__webpack_require__(32);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	window.JSHINT = _jshint.JSHINT;
	
	
	controller.$inject = ['$scope', '$http', 'size'];
	function controller($scope, $http, size) {
	
	    $scope.size = size;
	    $scope.hasError = false;
	    $scope._model = $scope.model[$scope.options.key] ? $scope.model[$scope.options.key].toString().replace('"use strict";\n\n', '') : 'function () {\n}';
	
	    $scope.$watch('_model', function (value) {
	        if ($scope._model || $scope._model !== '') {
	            try {
	                var _escape = function _escape(s) {
	                    return s.replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t").replace(/\f/g, "\\f");
	                };
	                $scope.model[$scope.options.key] = JsonFn.parse('{"fn":"' + _escape(value) + '"}').fn;
	                $scope.hasError = false;
	            } catch (e) {
	                $scope.hasError = true;
	            }
	        }
	    });
	    $scope.editorOptions = {
	        lineWrapping: true,
	        lineNumbers: true,
	        autoCloseBrackets: true,
	        showHint: true,
	        mode: 'javascript',
	        tabSize: 2,
	        gutters: ["CodeMirror-lint-markers"],
	        lint: function lint(text, options, cm) {
	            var linter = cm.getHelper(CodeMirror.Pos(0, 0), 'lint');
	            _.merge(options, {
	                esversion: 6,
	                debug: true,
	                '-W025': true,
	                asi: true
	            });
	            return linter(text, options);
	        }
	    };
	
	    $scope.codemirrorLoaded = function (editor) {
	        $scope.editor = editor;
	        var server = new CodeMirror.TernServer({ defs: [_ecma4.default, _ecma2.default, _cmsDef2.default] });
	        editor.setOption("extraKeys", {
	            "Ctrl-Space": function CtrlSpace(cm) {
	                server.complete(cm);
	            },
	            "Ctrl-I": function CtrlI(cm) {
	                server.showType(cm);
	            },
	            "Ctrl-O": function CtrlO(cm) {
	                server.showDocs(cm);
	            },
	            "Alt-.": function Alt(cm) {
	                server.jumpToDef(cm);
	            },
	            "Alt-,": function Alt(cm) {
	                server.jumpBack(cm);
	            },
	            "Ctrl-Q": function CtrlQ(cm) {
	                server.rename(cm);
	            },
	            "Ctrl-.": function Ctrl(cm) {
	                server.selectName(cm);
	            },
	            'Ctrl-L': function CtrlL(cm) {
	                if ($('.cms-window-placeholder').hasClass('cms-window')) {
	                    $('.cms-window-placeholder').removeClass('cms-window');
	                } else {
	                    $('.cms-window-placeholder').addClass('cms-window');
	                }
	                cm.setOption("fullScreen", !cm.getOption("fullScreen"));
	            },
	            'Esc': function Esc(cm) {
	                $('.cms-window-placeholder').removeClass('cms-window');
	                if (cm.getOption("fullScreen")) cm.setOption("fullScreen", false);
	            }
	        });
	        editor.on("cursorActivity", function (cm) {
	            server.updateArgHints(cm);
	        });
	    };
	
	    $scope.selectTab = function () {
	        $scope.refresh = !$scope.refresh;
	    };
	
	    $scope.show = false;
	    $scope.showCode = function () {
	        /*if ($scope.show === false) {
	            $('.cms-window-placeholder').switchClass(null, 'cms-window', 500, "easeInOutQuad");
	        } else {
	            $('.cms-window-placeholder').switchClass('cms-window', null, 500, "easeInOutQuad");
	        }*/
	        $scope.show = !$scope.show;
	    };
	}
	
	exports.default = controller;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(6);

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(29);

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(30);

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(31);

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(32);

/***/ },
/* 33 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	controller.$inject = ['$scope'];
	function controller($scope) {
	    var unique = 1;
	
	    $scope.formOptions = { formState: $scope.formState };
	    $scope.addNew = addNew;
	
	    $scope.copyItemOptions = copyItemOptions;
	
	    function copyItemOptions(field) {
	        return angular.copy(field);
	    }
	
	    function addNew() {
	        $scope.model[$scope.options.key] = $scope.model[$scope.options.key] || [];
	        var array = $scope.model[$scope.options.key];
	        array.push('');
	    }
	
	    $scope.createFormState = function ($index) {
	        var path = $scope.formState.path + '.' + $scope.options.key + '[' + $index + ']';
	        if (_.startsWith(path, '.')) path = path.substring(1);
	        return {
	            path: path,
	            model: $scope.formState.model || $scope.model
	        };
	    };
	}
	
	exports.default = controller;

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = "<div style=\"min-height: 20px;position: relative;\"\n     ng-repeat=\"element in model[options.key] track by $index\"\n     ng-init=\"itemOptions = copyItemOptions(to.field);_formState = createFormState($index)\">\n    <button type=\"button\" class=\"btn btn-xs btn-white\"\n            style=\"position: absolute;right: 0px;z-index: 1;\"\n            ng-click=\"model[options.key].splice($index, 1)\">\n        <i class=\"fa fa-trash-o\"></i>\n    </button>\n    <formly-field options=\"itemOptions\"\n                  model=\"model[options.key]\"\n                  form=\"form\"\n                  form-state=\"_formState\"\n                  index=\"$index\">\n    </formly-field>\n</div>\n<div class=\"form-group\">\n    <div class=\"col-sm-offset-2 col-sm-10\">\n        <button type=\"button\" class=\"btn btn-white btn-xs\"\n                ng-click=\"addNew()\" style=\"z-index: 1;\">{{to.btnText}}\n        </button>\n    </div>\n</div>"

/***/ },
/* 35 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	controller.$inject = ['$scope'];
	function controller($scope) {
	    var unique = 1;
	
	    $scope.formOptions = { formState: $scope.formState };
	    $scope.addNew = addNew;
	
	    $scope.copyItemOptions = copyItemOptions;
	
	    $scope.getCols = function () {};
	
	    function copyItemOptions(field) {
	        return angular.copy(field);
	    }
	
	    function addNew() {
	        $scope.model[$scope.options.key] = $scope.model[$scope.options.key] || [];
	        var array = $scope.model[$scope.options.key];
	        array.push({});
	    }
	
	    $scope.createFormState = function ($index) {
	        var path = $scope.formState.path + '.' + $scope.options.key + '[' + $index + ']';
	        if (_.startsWith(path, '.')) path = path.substring(1);
	        return {
	            path: path,
	            model: $scope.formState.model || $scope.model
	        };
	    };
	}
	
	exports.default = controller;

/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = "<table class=\"table cms-admin-table cms-table-section\">\n    <thead>\n    <tr>\n        <th ng-repeat=\"col in to.fields track by $index\"\n            ng-style=\"{width:to.widths ? to.widths.split(' ')[$index] + '%':'initial'}\">{{col.templateOptions.label}}\n        </th>\n        <th>X</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr ng-repeat=\"element in model[options.key] track by $index\"\n        ng-init=\"_index = $index;_formState = createFormState($index)\">\n        <td ng-repeat=\"field in to.fields\"\n            ng-init=\"_field = copyItemOptions(field)\">\n            <formly-field options=\"_field\"\n                          model=\"model[options.key][_index]\"\n                          form=\"form\"\n                          form-state=\"_formState\">\n            </formly-field>\n        </td>\n        <td>\n            <button type=\"button\" class=\"btn btn-xs btn-white\"\n                    ng-click=\"model[options.key].splice(_index, 1)\">\n                <i class=\"fa fa-trash-o\"></i>\n            </button>\n        </td>\n    </tr>\n    </tbody>\n</table>\n\n<button type=\"button\" class=\"btn btn-white btn-xs\"\n        ng-click=\"addNew()\" style=\"z-index: 1;\">{{to.btnText}}\n</button>"

/***/ },
/* 37 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	controller.$inject = ['$scope', 'cms'];
	
	function controller($scope, cms) {
	    $scope.to.options = _.map(cms.data.types, function (v, k) {
	        return { name: k, value: k };
	    });
	}
	
	exports.default = controller;

/***/ },
/* 38 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	controller.$inject = ['$scope'];
	
	function controller($scope) {
	    var options = $scope.to.options = [];
	    var _$scope$formState = $scope.formState;
	    var path = _$scope$formState.path;
	    var model = _$scope$formState.model;
	
	    path = _.dropRight(path.split('\.')).join('.');
	
	    var _$get = _.get(model, path);
	
	    var containers = _$get.containers;
	
	    $scope.to.labelProp = 'Type';
	    var map = {};
	    $scope.getLabel = function (selected) {
	        return selected && selected.ref ? map[selected.ref] : '';
	    };
	
	    cms.walkInContainers(containers, function (element, e) {
	        options.push({ Type: element.type, ref: e._id });
	        map[e._id] = element.type + ' : ' + e[Types[element.type].info.title];
	    });
	}
	
	exports.default = controller;

/***/ },
/* 39 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	controller.$inject = ['$scope', 'cms'];
	
	function controller($scope, cms) {
	    debugger;
	    var _$scope$formState = $scope.formState;
	    var path = _$scope$formState.path;
	    var model = _$scope$formState.model;
	
	    path = _.dropRight(path.split('\.')).join('.');
	
	    var Type = cms.data.types[_.get(model, path).BindType];
	    $scope.to.options = _.map(Type.columns, function (v) {
	        return { name: v, value: v };
	    });
	}
	
	exports.default = controller;

/***/ },
/* 40 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	controller.$inject = ['$scope', 'cms', '$timeout'];
	
	function controller($scope, cms, $timeout) {
	    function getProperties() {
	        try {
	            var Type = cms.data.types[$scope.model.child.Type];
	            $scope.to.options = _.map(Type.columns, function (v) {
	                return { name: v, value: v };
	            });
	        } catch (e) {}
	    }
	
	    getProperties();
	    $timeout(function () {
	        $scope.$watch('model.child.Type', function () {
	            getProperties();
	        });
	    }, 200);
	}
	
	exports.default = controller;

/***/ },
/* 41 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	controller.$inject = ['$scope', 'cms'];
	
	function controller($scope, cms) {
	    var _$scope$formState = $scope.formState;
	    var path = _$scope$formState.path;
	    var model = _$scope$formState.model;
	
	    path = _.dropRight(path.split('\.')).join('.');
	
	    var _$get = _.get(model, path);
	
	    var BindType = _$get.BindType;
	
	    var Type = cms.data.types[BindType];
	    $scope.to.options = _.map(Type.fn, function (v, k) {
	        return { name: k, value: k };
	    });
	}
	
	exports.default = controller;

/***/ },
/* 42 */
/***/ function(module, exports) {

	module.exports = "<ui-select ng-if=\"!to.multiple\" data-ng-model=\"model[options.key]\" theme=\"bootstrap\" append-to-body=\"true\">\n    <ui-select-match allow-clear=\"true\" placeholder=\"{{to.placeholder}}\">\n        {{$select.selected.name}}\n    </ui-select-match>\n    <ui-select-choices data-repeat=\"item.value as item in to.options | filterBy: ['name']: $select.search\">\n        <div ng-bind-html=\"item.name | highlight: $select.search\"></div>\n    </ui-select-choices>\n</ui-select>\n\n<ui-select ng-if=\"to.multiple\" multiple data-ng-model=\"model[options.key]\" theme=\"bootstrap\" append-to-body=\"true\">\n    <ui-select-match placeholder=\"{{to.placeholder}}\">\n        {{$item.name}}\n    </ui-select-match>\n    <ui-select-choices data-repeat=\"item.value as item in to.options | filterBy: ['name']: $select.search\">\n        <div ng-bind-html=\"item.name | highlight: $select.search\"></div>\n    </ui-select-choices>\n</ui-select>\n\n"

/***/ },
/* 43 */
/***/ function(module, exports) {

	module.exports = "<ui-select data-ng-model=\"model[options.key]\" theme=\"bootstrap\" on-select=\"onSelect()\" append-to-body=\"true\">\n    <ui-select-match allow-clear=\"true\" placeholder=\"{{to.placeholder}}\">\n        {{getLabel? getLabel($select.selected): $select.selected[to.labelProp]}}\n    </ui-select-match>\n    <ui-select-choices data-repeat=\"item in to.options | filterBy: [to.labelProp]: $select.search\">\n        <div ng-bind-html=\"getLabel? getLabel(item): item[to.labelProp] | highlight: $select.search\"></div>\n    </ui-select-choices>\n</ui-select>\n\n"

/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports = "<ui-select multiple data-ng-model=\"model[options.key]\" theme=\"bootstrap\" append-to-body=\"true\">\n    <ui-select-match placeholder=\"{{to.placeholder}}\">\n        {{$item.name}}\n    </ui-select-match>\n    <ui-select-choices data-repeat=\"item.value as item in to.options | filterBy: ['name']: $select.search\">\n        <div ng-bind-html=\"item.name | highlight: $select.search\"></div>\n    </ui-select-choices>\n</ui-select>"

/***/ },
/* 45 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	controller.$inject = ['$scope', '$http'];
	
	function controller($scope, $http) {
	    $scope.add = function (item) {
	        $scope.model[$scope.options.key] = $scope.model[$scope.options.key] || [];
	        $scope.model[$scope.options.key].push(item);
	    };
	}
	
	exports.default = controller;

/***/ },
/* 46 */
/***/ function(module, exports) {

	module.exports = "<div class=\"ui-select-container ui-select-multiple ui-select-bootstrap dropdown form-control\">\n    <span>\n        <button type=\"button\" class=\"ui-select-match-item btn btn-default btn-xs\"\n                style=\"min-width: 30px;\"\n                ng-click=\"model[options.key].splice($index,1)\"\n                ng-repeat=\"item in model[options.key] track by $index\">\n            {{item}}\n        </button>\n    </span>\n    <div class=\"btn-group\" uib-dropdown>\n        <input class=\"ui-select-search input-xs\" uib-dropdown-toggle>\n        <ul uib-dropdown-menu role=\"menu\" aria-labelledby=\"single-button\">\n            <li role=\"menuitem\" ng-repeat=\"option in to.options track by $index\">\n                <a ng-click=\"add(option.value)\">{{option.name}}</a>\n            </li>\n        </ul>\n    </div>\n</div>"

/***/ },
/* 47 */
/***/ function(module, exports) {

	module.exports = "<div class=\"checkbox\">\n\t<label>\n\t\t<input type=\"checkbox\"\n           class=\"formly-field-checkbox\"\n\t\t       ng-model=\"model[options.key]\">\n\t\t{{to.label}}\n\t\t{{to.required ? '*' : ''}}\n\t</label>\n</div>\n"

/***/ },
/* 48 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	controller.$inject = ['$scope'];
	
	function controller($scope) {
	    $scope.save = function () {
	        return $scope.$emit('saveContainers', {
	            type: 'Layout',
	            cb: function cb(containers) {
	                $scope.model[$scope.options.key] = containers;
	            }
	        });
	    };
	    $scope.restore = function () {
	        return $scope.$emit('restoreContainers', {
	            type: 'Layout',
	            containers: $scope.model[$scope.options.key]
	        });
	    };
	}
	
	exports.default = controller;

/***/ },
/* 49 */
/***/ function(module, exports) {

	module.exports = "<formly-form fields=\"_fields\"\n             model=\"_model\"\n             options=\"{formState:_formState}\"\n             form=\"form\">\n</formly-form>"

/***/ },
/* 50 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	controller.$inject = ['$scope'];
	
	function controller($scope) {
	    var path = $scope.to.path;
	    var fields = $scope.formState.fields || $scope.fields;
	    var field = angular.copy(_.find(fields, { key: path }));
	    field.key = $scope.options.key;
	    // resolve fields
	    $scope._fields = [field];
	
	    // resolve model
	    if (!$scope.model[$scope.options.key]) $scope.model[$scope.options.key] = {};
	    $scope._model = $scope.model[$scope.options.key];
	
	    // resolve formState;
	    $scope._formState = {
	        model: $scope.model,
	        fields: fields
	    };
	}
	
	exports.default = controller;

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(74);

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(75);

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(76);

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(47);

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(50);

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(69);

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(70);

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(59);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(61)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../css-loader/index.js!./select.min.css", function() {
				var newContent = require("!!./../../css-loader/index.js!./select.min.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(60)();
	// imports
	
	
	// module
	exports.push([module.id, "/*!\n * ui-select\n * http://github.com/angular-ui/ui-select\n * Version: 0.18.1 - 2016-07-10T00:30:49.466Z\n * License: MIT\n */.ui-select-highlight{font-weight:700}.ui-select-offscreen{clip:rect(0 0 0 0)!important;width:1px!important;height:1px!important;border:0!important;margin:0!important;padding:0!important;overflow:hidden!important;position:absolute!important;outline:0!important;left:0!important;top:0!important}.ui-select-choices-row:hover{background-color:#f5f5f5}.ng-dirty.ng-invalid>a.select2-choice{border-color:#D44950}.select2-result-single{padding-left:0}.select-locked>.ui-select-match-close,.select2-locked>.select2-search-choice-close{display:none}body>.select2-container.open{z-index:9999}.ui-select-container.select2.direction-up .ui-select-match,.ui-select-container[theme=select2].direction-up .ui-select-match{border-radius:0 0 4px 4px}.ui-select-container.select2.direction-up .ui-select-dropdown,.ui-select-container[theme=select2].direction-up .ui-select-dropdown{border-radius:4px 4px 0 0;border-top-width:1px;border-top-style:solid;box-shadow:0 -4px 8px rgba(0,0,0,.25);margin-top:-4px}.ui-select-container.select2.direction-up .ui-select-dropdown .select2-search,.ui-select-container[theme=select2].direction-up .ui-select-dropdown .select2-search{margin-top:4px}.ui-select-container.select2.direction-up.select2-dropdown-open .ui-select-match,.ui-select-container[theme=select2].direction-up.select2-dropdown-open .ui-select-match{border-bottom-color:#5897fb}.selectize-input.selectize-focus{border-color:#007FBB!important}.selectize-control>.selectize-dropdown,.selectize-control>.selectize-input>input{width:100%}.ng-dirty.ng-invalid>div.selectize-input{border-color:#D44950}.ui-select-container[theme=selectize].direction-up .ui-select-dropdown{box-shadow:0 -4px 8px rgba(0,0,0,.25);margin-top:-2px}.btn-default-focus{color:#333;background-color:#EBEBEB;border-color:#ADADAD;text-decoration:none;outline:-webkit-focus-ring-color auto 5px;outline-offset:-2px;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)}.ui-select-bootstrap .ui-select-toggle{position:relative}.ui-select-bootstrap .ui-select-toggle>.caret{position:absolute;height:10px;top:50%;right:10px;margin-top:-2px}.input-group>.ui-select-bootstrap.dropdown{position:static}.input-group>.ui-select-bootstrap>input.ui-select-search.form-control{border-radius:4px 0 0 4px}.input-group>.ui-select-bootstrap>input.ui-select-search.form-control.direction-up{border-radius:4px 0 0 4px!important}.ui-select-bootstrap>.ui-select-match>.btn{text-align:left!important}.ui-select-bootstrap>.ui-select-match>.caret{position:absolute;top:45%;right:15px}.ui-select-bootstrap>.ui-select-choices,.ui-select-bootstrap>.ui-select-no-choice{width:100%;height:auto;max-height:200px;overflow-x:hidden;margin-top:-1px}body>.ui-select-bootstrap.open{z-index:1000}.ui-select-multiple.ui-select-bootstrap{height:auto;padding:3px 3px 0}.ui-select-multiple.ui-select-bootstrap input.ui-select-search{background-color:transparent!important;border:none;outline:0;height:1.666666em;margin-bottom:3px}.ui-select-multiple.ui-select-bootstrap .ui-select-match .close{font-size:1.6em;line-height:.75}.ui-select-multiple.ui-select-bootstrap .ui-select-match-item{outline:0;margin:0 3px 3px 0}.ui-select-multiple .ui-select-match-item{position:relative}.ui-select-multiple .ui-select-match-item.dropping .ui-select-match-close{pointer-events:none}.ui-select-multiple:hover .ui-select-match-item.dropping-before:before{content:\"\";position:absolute;top:0;right:100%;height:100%;margin-right:2px;border-left:1px solid #428bca}.ui-select-multiple:hover .ui-select-match-item.dropping-after:after{content:\"\";position:absolute;top:0;left:100%;height:100%;margin-left:2px;border-right:1px solid #428bca}.ui-select-bootstrap .ui-select-choices-row>a{display:block;padding:3px 20px;clear:both;font-weight:400;line-height:1.42857143;color:#333;white-space:nowrap}.ui-select-bootstrap .ui-select-choices-row>a:focus,.ui-select-bootstrap .ui-select-choices-row>a:hover{text-decoration:none;color:#262626;background-color:#f5f5f5}.ui-select-bootstrap .ui-select-choices-row.active>a{color:#fff;text-decoration:none;outline:0;background-color:#428bca}.ui-select-bootstrap .ui-select-choices-row.active.disabled>a,.ui-select-bootstrap .ui-select-choices-row.disabled>a{color:#777;cursor:not-allowed;background-color:#fff}.ui-select-match.ng-hide-add,.ui-select-search.ng-hide-add{display:none!important}.ui-select-bootstrap.ng-dirty.ng-invalid>button.btn.ui-select-match{border-color:#D44950}.ui-select-container[theme=bootstrap].direction-up .ui-select-dropdown{box-shadow:0 -4px 8px rgba(0,0,0,.25)}\n/*# sourceMappingURL=select.min.css.map */\n", ""]);
	
	// exports


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(52);

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(68);

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;// TinyColor v1.4.1
	// https://github.com/bgrins/TinyColor
	// Brian Grinstead, MIT License
	
	(function(Math) {
	
	var trimLeft = /^\s+/,
	    trimRight = /\s+$/,
	    tinyCounter = 0,
	    mathRound = Math.round,
	    mathMin = Math.min,
	    mathMax = Math.max,
	    mathRandom = Math.random;
	
	function tinycolor (color, opts) {
	
	    color = (color) ? color : '';
	    opts = opts || { };
	
	    // If input is already a tinycolor, return itself
	    if (color instanceof tinycolor) {
	       return color;
	    }
	    // If we are called as a function, call using new instead
	    if (!(this instanceof tinycolor)) {
	        return new tinycolor(color, opts);
	    }
	
	    var rgb = inputToRGB(color);
	    this._originalInput = color,
	    this._r = rgb.r,
	    this._g = rgb.g,
	    this._b = rgb.b,
	    this._a = rgb.a,
	    this._roundA = mathRound(100*this._a) / 100,
	    this._format = opts.format || rgb.format;
	    this._gradientType = opts.gradientType;
	
	    // Don't let the range of [0,255] come back in [0,1].
	    // Potentially lose a little bit of precision here, but will fix issues where
	    // .5 gets interpreted as half of the total, instead of half of 1
	    // If it was supposed to be 128, this was already taken care of by `inputToRgb`
	    if (this._r < 1) { this._r = mathRound(this._r); }
	    if (this._g < 1) { this._g = mathRound(this._g); }
	    if (this._b < 1) { this._b = mathRound(this._b); }
	
	    this._ok = rgb.ok;
	    this._tc_id = tinyCounter++;
	}
	
	tinycolor.prototype = {
	    isDark: function() {
	        return this.getBrightness() < 128;
	    },
	    isLight: function() {
	        return !this.isDark();
	    },
	    isValid: function() {
	        return this._ok;
	    },
	    getOriginalInput: function() {
	      return this._originalInput;
	    },
	    getFormat: function() {
	        return this._format;
	    },
	    getAlpha: function() {
	        return this._a;
	    },
	    getBrightness: function() {
	        //http://www.w3.org/TR/AERT#color-contrast
	        var rgb = this.toRgb();
	        return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
	    },
	    getLuminance: function() {
	        //http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
	        var rgb = this.toRgb();
	        var RsRGB, GsRGB, BsRGB, R, G, B;
	        RsRGB = rgb.r/255;
	        GsRGB = rgb.g/255;
	        BsRGB = rgb.b/255;
	
	        if (RsRGB <= 0.03928) {R = RsRGB / 12.92;} else {R = Math.pow(((RsRGB + 0.055) / 1.055), 2.4);}
	        if (GsRGB <= 0.03928) {G = GsRGB / 12.92;} else {G = Math.pow(((GsRGB + 0.055) / 1.055), 2.4);}
	        if (BsRGB <= 0.03928) {B = BsRGB / 12.92;} else {B = Math.pow(((BsRGB + 0.055) / 1.055), 2.4);}
	        return (0.2126 * R) + (0.7152 * G) + (0.0722 * B);
	    },
	    setAlpha: function(value) {
	        this._a = boundAlpha(value);
	        this._roundA = mathRound(100*this._a) / 100;
	        return this;
	    },
	    toHsv: function() {
	        var hsv = rgbToHsv(this._r, this._g, this._b);
	        return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this._a };
	    },
	    toHsvString: function() {
	        var hsv = rgbToHsv(this._r, this._g, this._b);
	        var h = mathRound(hsv.h * 360), s = mathRound(hsv.s * 100), v = mathRound(hsv.v * 100);
	        return (this._a == 1) ?
	          "hsv("  + h + ", " + s + "%, " + v + "%)" :
	          "hsva(" + h + ", " + s + "%, " + v + "%, "+ this._roundA + ")";
	    },
	    toHsl: function() {
	        var hsl = rgbToHsl(this._r, this._g, this._b);
	        return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this._a };
	    },
	    toHslString: function() {
	        var hsl = rgbToHsl(this._r, this._g, this._b);
	        var h = mathRound(hsl.h * 360), s = mathRound(hsl.s * 100), l = mathRound(hsl.l * 100);
	        return (this._a == 1) ?
	          "hsl("  + h + ", " + s + "%, " + l + "%)" :
	          "hsla(" + h + ", " + s + "%, " + l + "%, "+ this._roundA + ")";
	    },
	    toHex: function(allow3Char) {
	        return rgbToHex(this._r, this._g, this._b, allow3Char);
	    },
	    toHexString: function(allow3Char) {
	        return '#' + this.toHex(allow3Char);
	    },
	    toHex8: function(allow4Char) {
	        return rgbaToHex(this._r, this._g, this._b, this._a, allow4Char);
	    },
	    toHex8String: function(allow4Char) {
	        return '#' + this.toHex8(allow4Char);
	    },
	    toRgb: function() {
	        return { r: mathRound(this._r), g: mathRound(this._g), b: mathRound(this._b), a: this._a };
	    },
	    toRgbString: function() {
	        return (this._a == 1) ?
	          "rgb("  + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ")" :
	          "rgba(" + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ", " + this._roundA + ")";
	    },
	    toPercentageRgb: function() {
	        return { r: mathRound(bound01(this._r, 255) * 100) + "%", g: mathRound(bound01(this._g, 255) * 100) + "%", b: mathRound(bound01(this._b, 255) * 100) + "%", a: this._a };
	    },
	    toPercentageRgbString: function() {
	        return (this._a == 1) ?
	          "rgb("  + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%)" :
	          "rgba(" + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%, " + this._roundA + ")";
	    },
	    toName: function() {
	        if (this._a === 0) {
	            return "transparent";
	        }
	
	        if (this._a < 1) {
	            return false;
	        }
	
	        return hexNames[rgbToHex(this._r, this._g, this._b, true)] || false;
	    },
	    toFilter: function(secondColor) {
	        var hex8String = '#' + rgbaToArgbHex(this._r, this._g, this._b, this._a);
	        var secondHex8String = hex8String;
	        var gradientType = this._gradientType ? "GradientType = 1, " : "";
	
	        if (secondColor) {
	            var s = tinycolor(secondColor);
	            secondHex8String = '#' + rgbaToArgbHex(s._r, s._g, s._b, s._a);
	        }
	
	        return "progid:DXImageTransform.Microsoft.gradient("+gradientType+"startColorstr="+hex8String+",endColorstr="+secondHex8String+")";
	    },
	    toString: function(format) {
	        var formatSet = !!format;
	        format = format || this._format;
	
	        var formattedString = false;
	        var hasAlpha = this._a < 1 && this._a >= 0;
	        var needsAlphaFormat = !formatSet && hasAlpha && (format === "hex" || format === "hex6" || format === "hex3" || format === "hex4" || format === "hex8" || format === "name");
	
	        if (needsAlphaFormat) {
	            // Special case for "transparent", all other non-alpha formats
	            // will return rgba when there is transparency.
	            if (format === "name" && this._a === 0) {
	                return this.toName();
	            }
	            return this.toRgbString();
	        }
	        if (format === "rgb") {
	            formattedString = this.toRgbString();
	        }
	        if (format === "prgb") {
	            formattedString = this.toPercentageRgbString();
	        }
	        if (format === "hex" || format === "hex6") {
	            formattedString = this.toHexString();
	        }
	        if (format === "hex3") {
	            formattedString = this.toHexString(true);
	        }
	        if (format === "hex4") {
	            formattedString = this.toHex8String(true);
	        }
	        if (format === "hex8") {
	            formattedString = this.toHex8String();
	        }
	        if (format === "name") {
	            formattedString = this.toName();
	        }
	        if (format === "hsl") {
	            formattedString = this.toHslString();
	        }
	        if (format === "hsv") {
	            formattedString = this.toHsvString();
	        }
	
	        return formattedString || this.toHexString();
	    },
	    clone: function() {
	        return tinycolor(this.toString());
	    },
	
	    _applyModification: function(fn, args) {
	        var color = fn.apply(null, [this].concat([].slice.call(args)));
	        this._r = color._r;
	        this._g = color._g;
	        this._b = color._b;
	        this.setAlpha(color._a);
	        return this;
	    },
	    lighten: function() {
	        return this._applyModification(lighten, arguments);
	    },
	    brighten: function() {
	        return this._applyModification(brighten, arguments);
	    },
	    darken: function() {
	        return this._applyModification(darken, arguments);
	    },
	    desaturate: function() {
	        return this._applyModification(desaturate, arguments);
	    },
	    saturate: function() {
	        return this._applyModification(saturate, arguments);
	    },
	    greyscale: function() {
	        return this._applyModification(greyscale, arguments);
	    },
	    spin: function() {
	        return this._applyModification(spin, arguments);
	    },
	
	    _applyCombination: function(fn, args) {
	        return fn.apply(null, [this].concat([].slice.call(args)));
	    },
	    analogous: function() {
	        return this._applyCombination(analogous, arguments);
	    },
	    complement: function() {
	        return this._applyCombination(complement, arguments);
	    },
	    monochromatic: function() {
	        return this._applyCombination(monochromatic, arguments);
	    },
	    splitcomplement: function() {
	        return this._applyCombination(splitcomplement, arguments);
	    },
	    triad: function() {
	        return this._applyCombination(triad, arguments);
	    },
	    tetrad: function() {
	        return this._applyCombination(tetrad, arguments);
	    }
	};
	
	// If input is an object, force 1 into "1.0" to handle ratios properly
	// String input requires "1.0" as input, so 1 will be treated as 1
	tinycolor.fromRatio = function(color, opts) {
	    if (typeof color == "object") {
	        var newColor = {};
	        for (var i in color) {
	            if (color.hasOwnProperty(i)) {
	                if (i === "a") {
	                    newColor[i] = color[i];
	                }
	                else {
	                    newColor[i] = convertToPercentage(color[i]);
	                }
	            }
	        }
	        color = newColor;
	    }
	
	    return tinycolor(color, opts);
	};
	
	// Given a string or object, convert that input to RGB
	// Possible string inputs:
	//
	//     "red"
	//     "#f00" or "f00"
	//     "#ff0000" or "ff0000"
	//     "#ff000000" or "ff000000"
	//     "rgb 255 0 0" or "rgb (255, 0, 0)"
	//     "rgb 1.0 0 0" or "rgb (1, 0, 0)"
	//     "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
	//     "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
	//     "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
	//     "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
	//     "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
	//
	function inputToRGB(color) {
	
	    var rgb = { r: 0, g: 0, b: 0 };
	    var a = 1;
	    var s = null;
	    var v = null;
	    var l = null;
	    var ok = false;
	    var format = false;
	
	    if (typeof color == "string") {
	        color = stringInputToObject(color);
	    }
	
	    if (typeof color == "object") {
	        if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
	            rgb = rgbToRgb(color.r, color.g, color.b);
	            ok = true;
	            format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
	        }
	        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
	            s = convertToPercentage(color.s);
	            v = convertToPercentage(color.v);
	            rgb = hsvToRgb(color.h, s, v);
	            ok = true;
	            format = "hsv";
	        }
	        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
	            s = convertToPercentage(color.s);
	            l = convertToPercentage(color.l);
	            rgb = hslToRgb(color.h, s, l);
	            ok = true;
	            format = "hsl";
	        }
	
	        if (color.hasOwnProperty("a")) {
	            a = color.a;
	        }
	    }
	
	    a = boundAlpha(a);
	
	    return {
	        ok: ok,
	        format: color.format || format,
	        r: mathMin(255, mathMax(rgb.r, 0)),
	        g: mathMin(255, mathMax(rgb.g, 0)),
	        b: mathMin(255, mathMax(rgb.b, 0)),
	        a: a
	    };
	}
	
	
	// Conversion Functions
	// --------------------
	
	// `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
	// <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>
	
	// `rgbToRgb`
	// Handle bounds / percentage checking to conform to CSS color spec
	// <http://www.w3.org/TR/css3-color/>
	// *Assumes:* r, g, b in [0, 255] or [0, 1]
	// *Returns:* { r, g, b } in [0, 255]
	function rgbToRgb(r, g, b){
	    return {
	        r: bound01(r, 255) * 255,
	        g: bound01(g, 255) * 255,
	        b: bound01(b, 255) * 255
	    };
	}
	
	// `rgbToHsl`
	// Converts an RGB color value to HSL.
	// *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]
	// *Returns:* { h, s, l } in [0,1]
	function rgbToHsl(r, g, b) {
	
	    r = bound01(r, 255);
	    g = bound01(g, 255);
	    b = bound01(b, 255);
	
	    var max = mathMax(r, g, b), min = mathMin(r, g, b);
	    var h, s, l = (max + min) / 2;
	
	    if(max == min) {
	        h = s = 0; // achromatic
	    }
	    else {
	        var d = max - min;
	        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
	        switch(max) {
	            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
	            case g: h = (b - r) / d + 2; break;
	            case b: h = (r - g) / d + 4; break;
	        }
	
	        h /= 6;
	    }
	
	    return { h: h, s: s, l: l };
	}
	
	// `hslToRgb`
	// Converts an HSL color value to RGB.
	// *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
	// *Returns:* { r, g, b } in the set [0, 255]
	function hslToRgb(h, s, l) {
	    var r, g, b;
	
	    h = bound01(h, 360);
	    s = bound01(s, 100);
	    l = bound01(l, 100);
	
	    function hue2rgb(p, q, t) {
	        if(t < 0) t += 1;
	        if(t > 1) t -= 1;
	        if(t < 1/6) return p + (q - p) * 6 * t;
	        if(t < 1/2) return q;
	        if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
	        return p;
	    }
	
	    if(s === 0) {
	        r = g = b = l; // achromatic
	    }
	    else {
	        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
	        var p = 2 * l - q;
	        r = hue2rgb(p, q, h + 1/3);
	        g = hue2rgb(p, q, h);
	        b = hue2rgb(p, q, h - 1/3);
	    }
	
	    return { r: r * 255, g: g * 255, b: b * 255 };
	}
	
	// `rgbToHsv`
	// Converts an RGB color value to HSV
	// *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
	// *Returns:* { h, s, v } in [0,1]
	function rgbToHsv(r, g, b) {
	
	    r = bound01(r, 255);
	    g = bound01(g, 255);
	    b = bound01(b, 255);
	
	    var max = mathMax(r, g, b), min = mathMin(r, g, b);
	    var h, s, v = max;
	
	    var d = max - min;
	    s = max === 0 ? 0 : d / max;
	
	    if(max == min) {
	        h = 0; // achromatic
	    }
	    else {
	        switch(max) {
	            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
	            case g: h = (b - r) / d + 2; break;
	            case b: h = (r - g) / d + 4; break;
	        }
	        h /= 6;
	    }
	    return { h: h, s: s, v: v };
	}
	
	// `hsvToRgb`
	// Converts an HSV color value to RGB.
	// *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
	// *Returns:* { r, g, b } in the set [0, 255]
	 function hsvToRgb(h, s, v) {
	
	    h = bound01(h, 360) * 6;
	    s = bound01(s, 100);
	    v = bound01(v, 100);
	
	    var i = Math.floor(h),
	        f = h - i,
	        p = v * (1 - s),
	        q = v * (1 - f * s),
	        t = v * (1 - (1 - f) * s),
	        mod = i % 6,
	        r = [v, q, p, p, t, v][mod],
	        g = [t, v, v, q, p, p][mod],
	        b = [p, p, t, v, v, q][mod];
	
	    return { r: r * 255, g: g * 255, b: b * 255 };
	}
	
	// `rgbToHex`
	// Converts an RGB color to hex
	// Assumes r, g, and b are contained in the set [0, 255]
	// Returns a 3 or 6 character hex
	function rgbToHex(r, g, b, allow3Char) {
	
	    var hex = [
	        pad2(mathRound(r).toString(16)),
	        pad2(mathRound(g).toString(16)),
	        pad2(mathRound(b).toString(16))
	    ];
	
	    // Return a 3 character hex if possible
	    if (allow3Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1)) {
	        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
	    }
	
	    return hex.join("");
	}
	
	// `rgbaToHex`
	// Converts an RGBA color plus alpha transparency to hex
	// Assumes r, g, b are contained in the set [0, 255] and
	// a in [0, 1]. Returns a 4 or 8 character rgba hex
	function rgbaToHex(r, g, b, a, allow4Char) {
	
	    var hex = [
	        pad2(mathRound(r).toString(16)),
	        pad2(mathRound(g).toString(16)),
	        pad2(mathRound(b).toString(16)),
	        pad2(convertDecimalToHex(a))
	    ];
	
	    // Return a 4 character hex if possible
	    if (allow4Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1) && hex[3].charAt(0) == hex[3].charAt(1)) {
	        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
	    }
	
	    return hex.join("");
	}
	
	// `rgbaToArgbHex`
	// Converts an RGBA color to an ARGB Hex8 string
	// Rarely used, but required for "toFilter()"
	function rgbaToArgbHex(r, g, b, a) {
	
	    var hex = [
	        pad2(convertDecimalToHex(a)),
	        pad2(mathRound(r).toString(16)),
	        pad2(mathRound(g).toString(16)),
	        pad2(mathRound(b).toString(16))
	    ];
	
	    return hex.join("");
	}
	
	// `equals`
	// Can be called with any tinycolor input
	tinycolor.equals = function (color1, color2) {
	    if (!color1 || !color2) { return false; }
	    return tinycolor(color1).toRgbString() == tinycolor(color2).toRgbString();
	};
	
	tinycolor.random = function() {
	    return tinycolor.fromRatio({
	        r: mathRandom(),
	        g: mathRandom(),
	        b: mathRandom()
	    });
	};
	
	
	// Modification Functions
	// ----------------------
	// Thanks to less.js for some of the basics here
	// <https://github.com/cloudhead/less.js/blob/master/lib/less/functions.js>
	
	function desaturate(color, amount) {
	    amount = (amount === 0) ? 0 : (amount || 10);
	    var hsl = tinycolor(color).toHsl();
	    hsl.s -= amount / 100;
	    hsl.s = clamp01(hsl.s);
	    return tinycolor(hsl);
	}
	
	function saturate(color, amount) {
	    amount = (amount === 0) ? 0 : (amount || 10);
	    var hsl = tinycolor(color).toHsl();
	    hsl.s += amount / 100;
	    hsl.s = clamp01(hsl.s);
	    return tinycolor(hsl);
	}
	
	function greyscale(color) {
	    return tinycolor(color).desaturate(100);
	}
	
	function lighten (color, amount) {
	    amount = (amount === 0) ? 0 : (amount || 10);
	    var hsl = tinycolor(color).toHsl();
	    hsl.l += amount / 100;
	    hsl.l = clamp01(hsl.l);
	    return tinycolor(hsl);
	}
	
	function brighten(color, amount) {
	    amount = (amount === 0) ? 0 : (amount || 10);
	    var rgb = tinycolor(color).toRgb();
	    rgb.r = mathMax(0, mathMin(255, rgb.r - mathRound(255 * - (amount / 100))));
	    rgb.g = mathMax(0, mathMin(255, rgb.g - mathRound(255 * - (amount / 100))));
	    rgb.b = mathMax(0, mathMin(255, rgb.b - mathRound(255 * - (amount / 100))));
	    return tinycolor(rgb);
	}
	
	function darken (color, amount) {
	    amount = (amount === 0) ? 0 : (amount || 10);
	    var hsl = tinycolor(color).toHsl();
	    hsl.l -= amount / 100;
	    hsl.l = clamp01(hsl.l);
	    return tinycolor(hsl);
	}
	
	// Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
	// Values outside of this range will be wrapped into this range.
	function spin(color, amount) {
	    var hsl = tinycolor(color).toHsl();
	    var hue = (hsl.h + amount) % 360;
	    hsl.h = hue < 0 ? 360 + hue : hue;
	    return tinycolor(hsl);
	}
	
	// Combination Functions
	// ---------------------
	// Thanks to jQuery xColor for some of the ideas behind these
	// <https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js>
	
	function complement(color) {
	    var hsl = tinycolor(color).toHsl();
	    hsl.h = (hsl.h + 180) % 360;
	    return tinycolor(hsl);
	}
	
	function triad(color) {
	    var hsl = tinycolor(color).toHsl();
	    var h = hsl.h;
	    return [
	        tinycolor(color),
	        tinycolor({ h: (h + 120) % 360, s: hsl.s, l: hsl.l }),
	        tinycolor({ h: (h + 240) % 360, s: hsl.s, l: hsl.l })
	    ];
	}
	
	function tetrad(color) {
	    var hsl = tinycolor(color).toHsl();
	    var h = hsl.h;
	    return [
	        tinycolor(color),
	        tinycolor({ h: (h + 90) % 360, s: hsl.s, l: hsl.l }),
	        tinycolor({ h: (h + 180) % 360, s: hsl.s, l: hsl.l }),
	        tinycolor({ h: (h + 270) % 360, s: hsl.s, l: hsl.l })
	    ];
	}
	
	function splitcomplement(color) {
	    var hsl = tinycolor(color).toHsl();
	    var h = hsl.h;
	    return [
	        tinycolor(color),
	        tinycolor({ h: (h + 72) % 360, s: hsl.s, l: hsl.l}),
	        tinycolor({ h: (h + 216) % 360, s: hsl.s, l: hsl.l})
	    ];
	}
	
	function analogous(color, results, slices) {
	    results = results || 6;
	    slices = slices || 30;
	
	    var hsl = tinycolor(color).toHsl();
	    var part = 360 / slices;
	    var ret = [tinycolor(color)];
	
	    for (hsl.h = ((hsl.h - (part * results >> 1)) + 720) % 360; --results; ) {
	        hsl.h = (hsl.h + part) % 360;
	        ret.push(tinycolor(hsl));
	    }
	    return ret;
	}
	
	function monochromatic(color, results) {
	    results = results || 6;
	    var hsv = tinycolor(color).toHsv();
	    var h = hsv.h, s = hsv.s, v = hsv.v;
	    var ret = [];
	    var modification = 1 / results;
	
	    while (results--) {
	        ret.push(tinycolor({ h: h, s: s, v: v}));
	        v = (v + modification) % 1;
	    }
	
	    return ret;
	}
	
	// Utility Functions
	// ---------------------
	
	tinycolor.mix = function(color1, color2, amount) {
	    amount = (amount === 0) ? 0 : (amount || 50);
	
	    var rgb1 = tinycolor(color1).toRgb();
	    var rgb2 = tinycolor(color2).toRgb();
	
	    var p = amount / 100;
	
	    var rgba = {
	        r: ((rgb2.r - rgb1.r) * p) + rgb1.r,
	        g: ((rgb2.g - rgb1.g) * p) + rgb1.g,
	        b: ((rgb2.b - rgb1.b) * p) + rgb1.b,
	        a: ((rgb2.a - rgb1.a) * p) + rgb1.a
	    };
	
	    return tinycolor(rgba);
	};
	
	
	// Readability Functions
	// ---------------------
	// <http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef (WCAG Version 2)
	
	// `contrast`
	// Analyze the 2 colors and returns the color contrast defined by (WCAG Version 2)
	tinycolor.readability = function(color1, color2) {
	    var c1 = tinycolor(color1);
	    var c2 = tinycolor(color2);
	    return (Math.max(c1.getLuminance(),c2.getLuminance())+0.05) / (Math.min(c1.getLuminance(),c2.getLuminance())+0.05);
	};
	
	// `isReadable`
	// Ensure that foreground and background color combinations meet WCAG2 guidelines.
	// The third argument is an optional Object.
	//      the 'level' property states 'AA' or 'AAA' - if missing or invalid, it defaults to 'AA';
	//      the 'size' property states 'large' or 'small' - if missing or invalid, it defaults to 'small'.
	// If the entire object is absent, isReadable defaults to {level:"AA",size:"small"}.
	
	// *Example*
	//    tinycolor.isReadable("#000", "#111") => false
	//    tinycolor.isReadable("#000", "#111",{level:"AA",size:"large"}) => false
	tinycolor.isReadable = function(color1, color2, wcag2) {
	    var readability = tinycolor.readability(color1, color2);
	    var wcag2Parms, out;
	
	    out = false;
	
	    wcag2Parms = validateWCAG2Parms(wcag2);
	    switch (wcag2Parms.level + wcag2Parms.size) {
	        case "AAsmall":
	        case "AAAlarge":
	            out = readability >= 4.5;
	            break;
	        case "AAlarge":
	            out = readability >= 3;
	            break;
	        case "AAAsmall":
	            out = readability >= 7;
	            break;
	    }
	    return out;
	
	};
	
	// `mostReadable`
	// Given a base color and a list of possible foreground or background
	// colors for that base, returns the most readable color.
	// Optionally returns Black or White if the most readable color is unreadable.
	// *Example*
	//    tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:false}).toHexString(); // "#112255"
	//    tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:true}).toHexString();  // "#ffffff"
	//    tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"large"}).toHexString(); // "#faf3f3"
	//    tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"small"}).toHexString(); // "#ffffff"
	tinycolor.mostReadable = function(baseColor, colorList, args) {
	    var bestColor = null;
	    var bestScore = 0;
	    var readability;
	    var includeFallbackColors, level, size ;
	    args = args || {};
	    includeFallbackColors = args.includeFallbackColors ;
	    level = args.level;
	    size = args.size;
	
	    for (var i= 0; i < colorList.length ; i++) {
	        readability = tinycolor.readability(baseColor, colorList[i]);
	        if (readability > bestScore) {
	            bestScore = readability;
	            bestColor = tinycolor(colorList[i]);
	        }
	    }
	
	    if (tinycolor.isReadable(baseColor, bestColor, {"level":level,"size":size}) || !includeFallbackColors) {
	        return bestColor;
	    }
	    else {
	        args.includeFallbackColors=false;
	        return tinycolor.mostReadable(baseColor,["#fff", "#000"],args);
	    }
	};
	
	
	// Big List of Colors
	// ------------------
	// <http://www.w3.org/TR/css3-color/#svg-color>
	var names = tinycolor.names = {
	    aliceblue: "f0f8ff",
	    antiquewhite: "faebd7",
	    aqua: "0ff",
	    aquamarine: "7fffd4",
	    azure: "f0ffff",
	    beige: "f5f5dc",
	    bisque: "ffe4c4",
	    black: "000",
	    blanchedalmond: "ffebcd",
	    blue: "00f",
	    blueviolet: "8a2be2",
	    brown: "a52a2a",
	    burlywood: "deb887",
	    burntsienna: "ea7e5d",
	    cadetblue: "5f9ea0",
	    chartreuse: "7fff00",
	    chocolate: "d2691e",
	    coral: "ff7f50",
	    cornflowerblue: "6495ed",
	    cornsilk: "fff8dc",
	    crimson: "dc143c",
	    cyan: "0ff",
	    darkblue: "00008b",
	    darkcyan: "008b8b",
	    darkgoldenrod: "b8860b",
	    darkgray: "a9a9a9",
	    darkgreen: "006400",
	    darkgrey: "a9a9a9",
	    darkkhaki: "bdb76b",
	    darkmagenta: "8b008b",
	    darkolivegreen: "556b2f",
	    darkorange: "ff8c00",
	    darkorchid: "9932cc",
	    darkred: "8b0000",
	    darksalmon: "e9967a",
	    darkseagreen: "8fbc8f",
	    darkslateblue: "483d8b",
	    darkslategray: "2f4f4f",
	    darkslategrey: "2f4f4f",
	    darkturquoise: "00ced1",
	    darkviolet: "9400d3",
	    deeppink: "ff1493",
	    deepskyblue: "00bfff",
	    dimgray: "696969",
	    dimgrey: "696969",
	    dodgerblue: "1e90ff",
	    firebrick: "b22222",
	    floralwhite: "fffaf0",
	    forestgreen: "228b22",
	    fuchsia: "f0f",
	    gainsboro: "dcdcdc",
	    ghostwhite: "f8f8ff",
	    gold: "ffd700",
	    goldenrod: "daa520",
	    gray: "808080",
	    green: "008000",
	    greenyellow: "adff2f",
	    grey: "808080",
	    honeydew: "f0fff0",
	    hotpink: "ff69b4",
	    indianred: "cd5c5c",
	    indigo: "4b0082",
	    ivory: "fffff0",
	    khaki: "f0e68c",
	    lavender: "e6e6fa",
	    lavenderblush: "fff0f5",
	    lawngreen: "7cfc00",
	    lemonchiffon: "fffacd",
	    lightblue: "add8e6",
	    lightcoral: "f08080",
	    lightcyan: "e0ffff",
	    lightgoldenrodyellow: "fafad2",
	    lightgray: "d3d3d3",
	    lightgreen: "90ee90",
	    lightgrey: "d3d3d3",
	    lightpink: "ffb6c1",
	    lightsalmon: "ffa07a",
	    lightseagreen: "20b2aa",
	    lightskyblue: "87cefa",
	    lightslategray: "789",
	    lightslategrey: "789",
	    lightsteelblue: "b0c4de",
	    lightyellow: "ffffe0",
	    lime: "0f0",
	    limegreen: "32cd32",
	    linen: "faf0e6",
	    magenta: "f0f",
	    maroon: "800000",
	    mediumaquamarine: "66cdaa",
	    mediumblue: "0000cd",
	    mediumorchid: "ba55d3",
	    mediumpurple: "9370db",
	    mediumseagreen: "3cb371",
	    mediumslateblue: "7b68ee",
	    mediumspringgreen: "00fa9a",
	    mediumturquoise: "48d1cc",
	    mediumvioletred: "c71585",
	    midnightblue: "191970",
	    mintcream: "f5fffa",
	    mistyrose: "ffe4e1",
	    moccasin: "ffe4b5",
	    navajowhite: "ffdead",
	    navy: "000080",
	    oldlace: "fdf5e6",
	    olive: "808000",
	    olivedrab: "6b8e23",
	    orange: "ffa500",
	    orangered: "ff4500",
	    orchid: "da70d6",
	    palegoldenrod: "eee8aa",
	    palegreen: "98fb98",
	    paleturquoise: "afeeee",
	    palevioletred: "db7093",
	    papayawhip: "ffefd5",
	    peachpuff: "ffdab9",
	    peru: "cd853f",
	    pink: "ffc0cb",
	    plum: "dda0dd",
	    powderblue: "b0e0e6",
	    purple: "800080",
	    rebeccapurple: "663399",
	    red: "f00",
	    rosybrown: "bc8f8f",
	    royalblue: "4169e1",
	    saddlebrown: "8b4513",
	    salmon: "fa8072",
	    sandybrown: "f4a460",
	    seagreen: "2e8b57",
	    seashell: "fff5ee",
	    sienna: "a0522d",
	    silver: "c0c0c0",
	    skyblue: "87ceeb",
	    slateblue: "6a5acd",
	    slategray: "708090",
	    slategrey: "708090",
	    snow: "fffafa",
	    springgreen: "00ff7f",
	    steelblue: "4682b4",
	    tan: "d2b48c",
	    teal: "008080",
	    thistle: "d8bfd8",
	    tomato: "ff6347",
	    turquoise: "40e0d0",
	    violet: "ee82ee",
	    wheat: "f5deb3",
	    white: "fff",
	    whitesmoke: "f5f5f5",
	    yellow: "ff0",
	    yellowgreen: "9acd32"
	};
	
	// Make it easy to access colors via `hexNames[hex]`
	var hexNames = tinycolor.hexNames = flip(names);
	
	
	// Utilities
	// ---------
	
	// `{ 'name1': 'val1' }` becomes `{ 'val1': 'name1' }`
	function flip(o) {
	    var flipped = { };
	    for (var i in o) {
	        if (o.hasOwnProperty(i)) {
	            flipped[o[i]] = i;
	        }
	    }
	    return flipped;
	}
	
	// Return a valid alpha value [0,1] with all invalid values being set to 1
	function boundAlpha(a) {
	    a = parseFloat(a);
	
	    if (isNaN(a) || a < 0 || a > 1) {
	        a = 1;
	    }
	
	    return a;
	}
	
	// Take input from [0, n] and return it as [0, 1]
	function bound01(n, max) {
	    if (isOnePointZero(n)) { n = "100%"; }
	
	    var processPercent = isPercentage(n);
	    n = mathMin(max, mathMax(0, parseFloat(n)));
	
	    // Automatically convert percentage into number
	    if (processPercent) {
	        n = parseInt(n * max, 10) / 100;
	    }
	
	    // Handle floating point rounding errors
	    if ((Math.abs(n - max) < 0.000001)) {
	        return 1;
	    }
	
	    // Convert into [0, 1] range if it isn't already
	    return (n % max) / parseFloat(max);
	}
	
	// Force a number between 0 and 1
	function clamp01(val) {
	    return mathMin(1, mathMax(0, val));
	}
	
	// Parse a base-16 hex value into a base-10 integer
	function parseIntFromHex(val) {
	    return parseInt(val, 16);
	}
	
	// Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
	// <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
	function isOnePointZero(n) {
	    return typeof n == "string" && n.indexOf('.') != -1 && parseFloat(n) === 1;
	}
	
	// Check to see if string passed in is a percentage
	function isPercentage(n) {
	    return typeof n === "string" && n.indexOf('%') != -1;
	}
	
	// Force a hex value to have 2 characters
	function pad2(c) {
	    return c.length == 1 ? '0' + c : '' + c;
	}
	
	// Replace a decimal with it's percentage value
	function convertToPercentage(n) {
	    if (n <= 1) {
	        n = (n * 100) + "%";
	    }
	
	    return n;
	}
	
	// Converts a decimal to a hex value
	function convertDecimalToHex(d) {
	    return Math.round(parseFloat(d) * 255).toString(16);
	}
	// Converts a hex value to a decimal
	function convertHexToDecimal(h) {
	    return (parseIntFromHex(h) / 255);
	}
	
	var matchers = (function() {
	
	    // <http://www.w3.org/TR/css3-values/#integers>
	    var CSS_INTEGER = "[-\\+]?\\d+%?";
	
	    // <http://www.w3.org/TR/css3-values/#number-value>
	    var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";
	
	    // Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.
	    var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";
	
	    // Actual matching.
	    // Parentheses and commas are optional, but not required.
	    // Whitespace can take the place of commas or opening paren
	    var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
	    var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
	
	    return {
	        CSS_UNIT: new RegExp(CSS_UNIT),
	        rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
	        rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
	        hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
	        hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
	        hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
	        hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
	        hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
	        hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
	        hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
	        hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
	    };
	})();
	
	// `isValidCSSUnit`
	// Take in a single string / number and check to see if it looks like a CSS unit
	// (see `matchers` above for definition).
	function isValidCSSUnit(color) {
	    return !!matchers.CSS_UNIT.exec(color);
	}
	
	// `stringInputToObject`
	// Permissive string parsing.  Take in a number of formats, and output an object
	// based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
	function stringInputToObject(color) {
	
	    color = color.replace(trimLeft,'').replace(trimRight, '').toLowerCase();
	    var named = false;
	    if (names[color]) {
	        color = names[color];
	        named = true;
	    }
	    else if (color == 'transparent') {
	        return { r: 0, g: 0, b: 0, a: 0, format: "name" };
	    }
	
	    // Try to match string input using regular expressions.
	    // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
	    // Just return an object and let the conversion functions handle that.
	    // This way the result will be the same whether the tinycolor is initialized with string or object.
	    var match;
	    if ((match = matchers.rgb.exec(color))) {
	        return { r: match[1], g: match[2], b: match[3] };
	    }
	    if ((match = matchers.rgba.exec(color))) {
	        return { r: match[1], g: match[2], b: match[3], a: match[4] };
	    }
	    if ((match = matchers.hsl.exec(color))) {
	        return { h: match[1], s: match[2], l: match[3] };
	    }
	    if ((match = matchers.hsla.exec(color))) {
	        return { h: match[1], s: match[2], l: match[3], a: match[4] };
	    }
	    if ((match = matchers.hsv.exec(color))) {
	        return { h: match[1], s: match[2], v: match[3] };
	    }
	    if ((match = matchers.hsva.exec(color))) {
	        return { h: match[1], s: match[2], v: match[3], a: match[4] };
	    }
	    if ((match = matchers.hex8.exec(color))) {
	        return {
	            r: parseIntFromHex(match[1]),
	            g: parseIntFromHex(match[2]),
	            b: parseIntFromHex(match[3]),
	            a: convertHexToDecimal(match[4]),
	            format: named ? "name" : "hex8"
	        };
	    }
	    if ((match = matchers.hex6.exec(color))) {
	        return {
	            r: parseIntFromHex(match[1]),
	            g: parseIntFromHex(match[2]),
	            b: parseIntFromHex(match[3]),
	            format: named ? "name" : "hex"
	        };
	    }
	    if ((match = matchers.hex4.exec(color))) {
	        return {
	            r: parseIntFromHex(match[1] + '' + match[1]),
	            g: parseIntFromHex(match[2] + '' + match[2]),
	            b: parseIntFromHex(match[3] + '' + match[3]),
	            a: convertHexToDecimal(match[4] + '' + match[4]),
	            format: named ? "name" : "hex8"
	        };
	    }
	    if ((match = matchers.hex3.exec(color))) {
	        return {
	            r: parseIntFromHex(match[1] + '' + match[1]),
	            g: parseIntFromHex(match[2] + '' + match[2]),
	            b: parseIntFromHex(match[3] + '' + match[3]),
	            format: named ? "name" : "hex"
	        };
	    }
	
	    return false;
	}
	
	function validateWCAG2Parms(parms) {
	    // return valid WCAG2 parms for isReadable.
	    // If input parms are invalid, return {"level":"AA", "size":"small"}
	    var level, size;
	    parms = parms || {"level":"AA", "size":"small"};
	    level = (parms.level || "AA").toUpperCase();
	    size = (parms.size || "small").toLowerCase();
	    if (level !== "AA" && level !== "AAA") {
	        level = "AA";
	    }
	    if (size !== "small" && size !== "large") {
	        size = "small";
	    }
	    return {"level":level, "size":size};
	}
	
	// Node: Export function
	if (typeof module !== "undefined" && module.exports) {
	    module.exports = tinycolor;
	}
	// AMD/requirejs: Define the module
	else if (true) {
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {return tinycolor;}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}
	// Browser: Expose to window
	else {
	    window.tinycolor = tinycolor;
	}
	
	})(Math);


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(77);

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(78);

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(80);

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(84);

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(83);

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(85);

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(86);

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(88);

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(89);

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(92);

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(94);

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(95);

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(97);

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(161);

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(162);

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(164);

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(165);

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(166);

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(167);

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(241);

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(168);

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(170);

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(171);

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(172);

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(239);

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(240);

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(242);

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(244);

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(245);

/***/ },
/* 92 */
/***/ function(module, exports) {

	module.exports = "<div ng-if=\"vm.showJson()\">\n    <button style=\"width: 60px\"\n            popover-placement=\"bottom\"\n            popover-is-open=\"vm.isOpen\"\n            popover-append-to-body=\"true\"\n            uib-popover-template=\"'editable-formly.html'\"\n            class=\"btn btn-white btn-xs\">\n        edit\n    </button>\n</div>\n<span popover-placement=\"bottom\"\n      popover-is-open=\"vm.isOpen\"\n      uib-popover-template=\"'editable-formly.html'\"\n      popover-append-to-body=\"true\"\n      style=\"cursor: pointer\"\n      ng-class=\"{'cms-empty-value': vm.isValueUndefined}\"\n      ng-if=\"!vm.showJson()\">\n    {{!vm.isValueUndefined? vm.value: 'empty'}}\n</span>"

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _cms = __webpack_require__(94);
	
	var _cms2 = _interopRequireDefault(_cms);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var commonModule = angular.module('common', [_cms2.default]);
	
	exports.default = commonModule.name;

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	__webpack_require__(95);
	
	var _Type = __webpack_require__(96);
	
	var _Type2 = _interopRequireDefault(_Type);
	
	var _QueryBuilder = __webpack_require__(97);
	
	var _QueryBuilder2 = _interopRequireDefault(_QueryBuilder);
	
	__webpack_require__(98);
	
	var _uuid2 = __webpack_require__(99);
	
	var _uuid3 = _interopRequireDefault(_uuid2);
	
	__webpack_require__(101);
	
	__webpack_require__(102);
	
	var _traverse = __webpack_require__(103);
	
	var _traverse2 = _interopRequireDefault(_traverse);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	window.Enum = {
	    Load: { NOT: 'NOT', LOADING: 'LOADING', LOADED: 'LOADED', PART_LOADED: 'PART_LOADED' },
	    EditMode: { ALL: 'ALL', VIEWELEMENT: 'VIEWELEMENT', DATAELEMENT: 'DATAELEMENT', CONTAINER: 'CONTAINER' }
	};
	
	var modelModule = angular.module('common.data', ['ngFileUpload', 'ngWebSocket']).factory('cms', cms).run(run);
	
	cms.$inject = ['$http', 'Upload'];
	function cms($http, Upload) {
	    var data = {
	        socketQueue: {}
	    };
	    var editState = {
	        /**
	         * 0: edit by drag and drop element
	         * 1: edit by container
	         */
	        editMode: Enum.EditMode.DATAELEMENT,
	        dragType: null,
	        showContainerEdit: false
	    };
	
	    function changeEditMode(mode) {
	        if (mode === Enum.EditMode.DATAELEMENT) {
	            $('body').addClass('cms-data-element');
	        } else {
	            $('body').removeClass('cms-data-element');
	        }
	    }
	
	    changeEditMode(Enum.EditMode.DATAELEMENT);
	
	    function getType(type, ref, cb, content) {
	        var Type = data.types[type];
	        if (!Type || !Type.template || !ref || !_.find(Type.list, { _id: ref })) {
	            var query = ref ? Type && _.find(Type.list, { _id: ref }) ? 'element=false' : 'element=' + ref : 'element=false';
	            if (!Type) Type = data.types[type] = { list: [] };
	            if (!Type.template) query += '&template=true';
	            if (content && content._id) query = '';
	            $http.post('/cms-types/' + type + '?' + query, JsonFn.stringify(content)).then(function (res) {
	                var result = JsonFn.clone(res.data, true);
	                if (!ref || !_.find(Type.list, { _id: ref })) {
	                    ref = result.data ? result.data._id : null;
	                    Type.list.push(result.data);
	                }
	                if (!Type.template) {
	                    Type.template = result.template;
	                    Type.form = result.form;
	                    Type.fn = result.fn;
	                    Type.serverFn = result.serverFn;
	                    Type.info = result.info;
	                }
	                cb(_.find(Type.list, { _id: ref }));
	            });
	        } else {
	            cb(_.find(Type.list, { _id: ref }));
	        }
	    }
	
	    function createElement(type, content, cb) {
	        return getType(type, null, cb, content);
	    }
	
	    function removeElement(type, _id, cb, onerror) {
	        $http.delete('api/v1/' + type + '/' + _id).then(function () {
	            _.remove(Types[type].list, { _id: _id });
	            if (cb) cb();
	        }, function () {
	            if (onerror) onerror();
	        });
	    }
	
	    function updateContainerPage() {
	        var url = location.pathname;
	        $http.post('/cms-container-page' + url, { containers: data.containers }).then(function () {
	            console.log('Update container page successful');
	        });
	    }
	
	    var loadElementsPending = [];
	
	    function countElements(type, cb, paramsBuilder) {
	        sendWs({ path: 'get/api/v1/' + type + '/count', params: paramsBuilder.buildJson() }, function (_ref) {
	            var count = _ref.result;
	
	            if (cb) cb(count);
	        });
	        /*$http.get(`/api/v1/${type}/count?${params}`, _transform).then(res => {
	         if (cb) cb(res.data.count);
	         });*/
	    }
	
	    function sendWs(msg, cb) {
	        var _uuid = _uuid3.default.v1();
	        data.socketQueue[_uuid] = cb;
	        socket.send(JsonFn.stringify(_.assign(msg, { uuid: _uuid })));
	    }
	
	    function loadElements(type, cb, paramsBuilder) {
	        if (!paramsBuilder && data.types[type] && data.types[type]._load === Enum.Load.LOADED) {
	            if (cb) cb(data.types[type].list);
	            return;
	        }
	
	        sendWs({
	            path: 'get/api/v1/' + type,
	            params: paramsBuilder ? paramsBuilder.buildJson() : {}
	        }, function (_ref2) {
	            var _list = _ref2.result;
	
	            if (!paramsBuilder) {
	                data.types[type].list = _list;
	                data.types[type]._load = Enum.Load.LOADED;
	            } else {
	                data.types[type].list = _.unionWith(_list, _.filter(data.types[type].list, function (e) {
	                    return e !== null;
	                }), function (e1, e2) {
	                    return e1._id === e2._id;
	                });
	                data.types[type].queryList = _list.map(function (e) {
	                    return _.find(data.types[type].list, function (e2) {
	                        return e2._id === e._id;
	                    });
	                });
	                data.types[type]._load = Enum.Load.PART_LOADED;
	            }
	
	            if (cb) cb(data.types[type].queryList);
	        });
	        /*$http.get(`/api/v1/${type}?${JsonFn.stringify(paramsBuilder)}`, _transform).then(res => {
	         var list = JsonFn.clone(res.data, true);
	         if (!paramsBuilder) {
	         data.types[type].list = list;
	         data.types[type]._load = Enum.Load.LOADED;
	         } else {
	         data.types[type].list = _.unionWith(data.types[type].list, list, (e1, e2) => e1._id === e2._id);
	         data.types[type].queryList = list.map(e => _.find(data.types[type].list, e2 => e2._id === e._id));
	         data.types[type]._load = Enum.Load.PART_LOADED;
	         }
	          loadElementsPending.forEach(cb => cb(data.types[type].queryList));
	         loadElementsPending.length = 0;
	         });*/
	    }
	
	    function findByRef(type, ref) {
	        return _.find(data.types[type].list, { _id: ref });
	    }
	
	    function findByID(type, ID) {
	        return _.find(data.types[type].list, { ID: ID });
	    }
	
	    function findFnByID(type, ID) {
	        var e = _.find(data.types[type].list, { ID: ID });
	        var fn = JsonFn.clone(data.types[type].fn);
	        _.each(fn, function (f, k) {
	            return fn[k] = f.bind(e);
	        });
	        return fn;
	    }
	
	    function findFnByRef(type, ref) {
	        var e = findByRef(type, ref);
	        var fn = JsonFn.clone(data.types[type].fn);
	        _.each(fn, function (f, k) {
	            return fn[k] = f.bind(e);
	        });
	        return fn;
	    }
	
	    function walkInContainers(containers, cb) {
	        function walk(containers) {
	            _.each(containers, function (container) {
	                _.each(container.elements, function (element) {
	                    // save when no data in client exists
	                    loadElements(element.type, function () {
	                        var Type = Types[element.type];
	                        var e = _.find(Type.list, function (e) {
	                            return e._id === element.ref;
	                        });
	                        cb(element, e, container);
	                        if (element.containers && element.containers.length > 0) {
	                            walk(element.containers);
	                        }
	                    });
	                });
	            });
	        }
	
	        walk(containers);
	    }
	
	    function updateElement(type, model, resolve, fail) {
	        sendWs({
	            path: 'post/api/v1/' + type,
	            model: model
	        }, function (_ref3) {
	            var model = _ref3.result;
	
	            if (resolve) resolve(model);
	        });
	    }
	
	    function listColumns(form) {
	        if (form[0].isTab) {
	            var _ret = function () {
	                var _fields = [];
	                form.forEach(function (_ref4) {
	                    var fields = _ref4.fields;
	
	                    _fields.push.apply(_fields, _toConsumableArray(fields.map(function (field) {
	                        return {
	                            value: field.key,
	                            label: field.templateOptions.label || field.key
	                        };
	                    })));
	                });
	                return {
	                    v: _fields
	                };
	            }();
	
	            if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	        }
	        return form.map(function (field) {
	            return { value: field.key, label: field.templateOptions.label || field.key };
	        });
	    }
	
	    function findField(form, property) {
	        var deep = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];
	
	        if (!deep) {
	            if (form[0].isTab) {
	                var _result = void 0;
	                form.forEach(function (_ref5) {
	                    var fields = _ref5.fields;
	
	                    var f = fields.find(function (f) {
	                        return f.key === property;
	                    });
	                    if (f) _result = f;
	                });
	                return _result;
	            }
	            return form.find(function (f) {
	                return f.key === property;
	            });
	        }
	
	        var result = void 0;
	        var last = property.split('.').pop();
	        (0, _traverse2.default)(form).forEach(function (node) {
	            if (node && node.key === last) {
	                var path = _.reduce(this.parents.filter(function (_ref6) {
	                    var key = _ref6.node.key;
	                    return !_.isEmpty(key);
	                }), function (path, parent) {
	                    path += '.' + parent.node.key;
	                    return path;
	                }, '');
	                if (_.isEmpty(path)) {
	                    path = last;
	                } else {
	                    path = path.substring(1) + '.' + last;
	                }
	                if (path === property) {
	                    result = node;
	                    this.stop();
	                }
	            }
	        });
	        return result;
	    }
	
	    function getContainer(path) {
	        if (!data.containers) {
	            data.containers = {};
	            updateContainerPage();
	        }
	        var container = _.get(data.containers, path);
	
	        // create if not exists
	        if (!container) {
	            var _path = _.dropRight(path.split('\.')).join('.');
	            (_.isEmpty(_path) ? data.containers : _.get(data.containers, _path))[path.split('\.').pop()] = { elements: [] };
	            container = _.get(data.containers, path);
	            updateContainerPage();
	        }
	
	        return container;
	    }
	
	    function parseAndSaveData(_data) {
	        Object.assign(data, _data);
	        for (var k in data.types) {
	            data.types[k] = new _Type2.default(data.types[k]);
	        }
	    }
	
	    function exportAll(filename, types) {
	        $http.post('/cms-export', { filename: filename, types: types }).then(function (res) {
	            confirm('Export successful');
	        });
	    }
	
	    function importAll(types, url) {
	        $http.post('/cms-import', { types: types, url: url }).then(function (res) {
	            confirm('Import successful');
	        });
	    }
	
	    var uploadFile = function uploadFile(file, path, cb) {
	        Upload.upload({
	            url: '/cms-files/' + path,
	            data: { file: file }
	        }).then(function () {
	            if (cb) cb();
	        });
	    };
	
	    function deleteElements(type, cb) {
	        $http.delete('/cms-types/' + type).then(function (res) {
	            if (cb) cb();
	            confirm('delete successful');
	        });
	    }
	
	    function getAdminList() {
	        var _types = _.pick(data.types, function (Type) {
	            if (editState.editMode === Enum.EditMode.ALL) return true;
	            if (editState.editMode === Enum.EditMode.VIEWELEMENT) return Type.info.isViewElement;
	            if (editState.editMode === Enum.EditMode.DATAELEMENT) return !Type.info.isViewElement;
	            return true;
	        });
	
	        var i = -1;
	
	        return _.map(_types, function (Type, k) {
	            i++;
	            var _children = [];
	
	            var createChildren = function createChildren(_properties, query, path) {
	                var properties = JsonFn.clone(_properties);
	                var children = [];
	                if (!properties || properties.length === 0) return;
	                var property = properties.shift();
	                var field = findField(Type.form, property, true);
	                if (field.type === 'refSelect') {
	                    var _type = field.templateOptions.Type;
	                    data.types[_type].list.forEach(function (_element) {
	                        var _path = path + '.children[' + children.length + ']';
	                        var _query = [_defineProperty({}, property, _element._id)];
	                        _query = query ? query.concat(_query) : _query;
	                        children.push({
	                            children: createChildren(properties, _query, _path),
	                            text: _element[data.types[_type].info.title],
	                            type: k,
	                            path: _path,
	                            columns: _.remove(listColumns(Type.form), function (_property) {
	                                return _property !== property;
	                            }),
	                            query: { $and: _query }
	                        });
	                    });
	                } else if (field.type === 'select-ref-static') {
	                    var _type = field.templateOptions.Type;
	                    data.types[_type].list.forEach(function (_element) {
	                        var _path = path + '.children[' + children.length + ']';
	                        var _query = [_defineProperty({}, property, _element[data.types[_type].info.title])];
	                        _query = query ? query.concat(_query) : _query;
	                        children.push({
	                            children: createChildren(properties, _query, _path),
	                            text: _element[data.types[_type].info.title],
	                            type: k,
	                            path: _path,
	                            columns: _.remove(listColumns(Type.form), function (_property) {
	                                return _property !== property;
	                            }),
	                            query: { $and: _query }
	                        });
	                    });
	                } else if (field.type === 'array' && field.templateOptions.field.type === 'refSelect') {
	                    var _type = field.templateOptions.field.templateOptions.Type;
	                    data.types[_type].list.forEach(function (_element) {
	                        var _path = path + '.children[' + children.length + ']';
	                        var _query = [_defineProperty({}, property, _element._id)];
	                        _query = query ? query.concat(_query) : _query;
	                        children.push({
	                            children: createChildren(properties, _query, _path),
	                            text: _element[data.types[_type].info.title],
	                            type: k,
	                            path: _path,
	                            columns: _.remove(listColumns(Type.form), function (_property) {
	                                return _property !== property;
	                            }),
	                            query: { $and: _query }
	                        });
	                    });
	                } else if (field.type === 'select') {
	                    var options = field.templateOptions.options;
	
	                    _.each(options, function (_ref10) {
	                        var name = _ref10.name;
	                        var value = _ref10.value;
	
	                        var _path = path + '.children[' + children.length + ']';
	                        var _query = [_defineProperty({}, property, value)];
	                        _query = query ? query.concat(_query) : _query;
	                        children.push({
	                            children: createChildren(properties, _query, _path),
	                            text: name,
	                            type: k,
	                            path: _path,
	                            columns: _.remove(listColumns(Type.form), function (_property) {
	                                return _property !== property;
	                            }),
	                            query: { $and: _query }
	                        });
	                    });
	                }
	
	                return children;
	            };
	
	            var config = data.types.Config.list.find(function (config) {
	                return config.type === k;
	            });
	            var _path = '[' + i + ']';
	
	            var columns = listColumns(Type.form);
	            if (config) {
	                try {
	                    config.dynamicQuery.forEach(function (dynamicQuery) {
	                        if (dynamicQuery.field.length === 0) return;
	                        _children.push.apply(_children, _toConsumableArray(createChildren(dynamicQuery.field, null, _path)));
	                    });
	                    columns = _.filter(columns, function (col) {
	                        if (_.isEmpty(config.showFields)) return true;
	                        return config.showFields.indexOf(col.value) !== -1;
	                    });
	                } catch (e) {}
	            }
	            return {
	                children: _children,
	                columns: columns,
	                text: Type.label || k,
	                type: k,
	                path: _path
	            };
	        });
	    }
	
	    function execServerFn(type, model, fnName) {
	        for (var _len = arguments.length, args = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
	            args[_key - 3] = arguments[_key];
	        }
	
	        return $http.post('/cms-types/' + type + '/' + model._id + '/' + fnName, args);
	    }
	
	    function execServerFnForWrapper(name, fnName) {
	        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	            args[_key2 - 2] = arguments[_key2];
	        }
	
	        return $http.post('/cms-wrappers/' + name + '/' + fnName, args);
	    }
	
	    function getTitle(type, ref) {
	        var Type = data.types[type];
	        var e = _.find(Type.list, { _id: ref });
	        return e[Type.info.title];
	    }
	
	    return window.cms = {
	        sendWs: sendWs,
	        findByID: findByID,
	        findFnByID: findFnByID,
	        findByRef: findByRef,
	        findFnByRef: findFnByRef,
	        getType: getType,
	        createElement: createElement,
	        updateElement: updateElement,
	        removeElement: removeElement,
	        findField: findField,
	        data: data,
	        get types() {
	            return data.types;
	        },
	        editState: editState,
	        loadElements: loadElements,
	        countElements: countElements,
	        loadElementsPending: loadElementsPending,
	        updateContainerPage: updateContainerPage,
	        walkInContainers: walkInContainers,
	        getContainer: getContainer,
	        parseAndSaveData: parseAndSaveData,
	        exportAll: exportAll,
	        importAll: importAll,
	        changeEditMode: changeEditMode,
	        uploadFile: uploadFile,
	        getAdminList: getAdminList,
	        listColumns: listColumns,
	        QueryBuilder: _QueryBuilder2.default,
	        deleteElements: deleteElements,
	        execServerFn: execServerFn,
	        execServerFnForWrapper: execServerFnForWrapper,
	        getTitle: getTitle
	    };
	}
	run.$inject = ['cms', '$http', '$websocket'];
	function run(cms, $http, $websocket) {
	    var data = cms.data;
	    try {
	
	        cms.parseAndSaveData(JsonFn.parse($('#cms-data').text(), true));
	        data.serverFn = data.setupServerFn(data.serverFn, $http.post);
	        delete data.setupServerFn;
	        window.Types = data.types;
	        window.Local = data.Local = {};
	    } catch (e) {}
	
	    //menu
	    $('body').append('<div cms-nav></div>');
	
	    //panel
	    $('body').prepend('<div cms-container-edit></div>');
	
	    $('body').addClass('cms-admin-mode');
	
	    var new_uri = void 0;
	    var wsAddress = cms.data.online.wsAddress;
	
	    if (wsAddress) {
	        new_uri = wsAddress;
	    } else {
	        var loc = window.location;
	        if (loc.protocol === "https:") {
	            new_uri = "wss:";
	        } else {
	            new_uri = "ws:";
	        }
	        new_uri += "//" + loc.host;
	        new_uri += loc.pathname;
	    }
	
	    window.socket = cms.socket = $websocket(new_uri, { reconnectIfNotNormalClose: true });
	
	    socket.onMessage(function (event) {
	        var _data = JsonFn.parse(event.data, true);
	        if (!_data.uuid) return;
	        cms.data.socketQueue[_data.uuid](_data);
	    });
	}
	
	exports.default = modelModule.name;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(4);

/***/ },
/* 96 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var TypeClass = function () {
	    function TypeClass(raw) {
	        _classCallCheck(this, TypeClass);
	
	        _.assign(this, raw);
	    }
	
	    /**
	     * check if a field is ref
	     * return main-title's key if it is ref ,else return null
	     * @param fieldName
	     * @returns {obj}
	     */
	
	
	    _createClass(TypeClass, [{
	        key: 'checkAndGetRef',
	        value: function checkAndGetRef(fieldName) {
	            var field = cms.findField(this.form, fieldName);
	            if (field && field.type === 'refSelect') {
	                var type = field.templateOptions.Type;
	                return Types[type].info.title;
	            }
	        }
	    }]);
	
	    return TypeClass;
	}();
	
	exports.default = TypeClass;

/***/ },
/* 97 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var QueryBuilder = function () {
	    function QueryBuilder() {
	        _classCallCheck(this, QueryBuilder);
	
	        this._part = false;
	        this._query = [];
	    }
	
	    _createClass(QueryBuilder, [{
	        key: 'part',
	        value: function part(_part) {
	            this._part = _part;
	            return this;
	        }
	    }, {
	        key: 'limit',
	        value: function limit(_limit) {
	            this._limit = _limit;
	            return this;
	        }
	    }, {
	        key: 'page',
	        value: function page(_page) {
	            this._page = _page;
	            return this;
	        }
	    }, {
	        key: 'sort',
	        value: function sort(_sort) {
	            if (_sort) this._sort = JSON.stringify(_sort);
	            return this;
	        }
	    }, {
	        key: 'query',
	        value: function query(_query) {
	            if (_query) this._query.push(_query);
	            return this;
	        }
	    }, {
	        key: 'search',
	        value: function search(_search) {
	            if (_search) this._search = _search;
	            return this;
	        }
	    }, {
	        key: 'populate',
	        value: function populate(_populate) {
	            if (_populate) this._populate = _populate;
	            return this;
	        }
	    }, {
	        key: 'build',
	        value: function build() {
	            this._skip = (this._page - 1) * this._limit;
	
	            var params = '';
	            if (this._limit) params += 'limit=' + this._limit;
	            if (this._skip) params += '&skip=' + this._skip;
	            if (this._query) params += '&query=' + JSON.stringify(this._query);
	            if (this._sort) params += '&sort=' + this._sort;
	            return params;
	        }
	    }, {
	        key: 'buildJson',
	        value: function buildJson() {
	            this._skip = (this._page - 1) * this._limit;
	
	            var query = void 0;
	            if (this._search && this._query) {
	                query = { $and: [{ $text: { $search: this._search } }].concat(_toConsumableArray(this._query)) };
	            } else if (this._search) {
	                query = { $text: { $search: this._search } };
	            } else if (this._query.length > 0) {
	                query = { $and: [].concat(_toConsumableArray(this._query)) };
	            }
	
	            var result = {};
	
	            if (this._limit) result.limit = this._limit;
	            if (this._skip) result.skip = this._skip;
	            if (query) result.query = query;
	            if (this._sort) result.limit = this._sort;
	            if (this._part) result.limit = this._part;
	            if (this._populate) result.populate = this._populate;
	
	            return result;
	        }
	    }]);
	
	    return QueryBuilder;
	}();
	
	exports.default = QueryBuilder;

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(249);

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	//     uuid.js
	//
	//     Copyright (c) 2010-2012 Robert Kieffer
	//     MIT License - http://opensource.org/licenses/mit-license.php
	
	// Unique ID creation requires a high quality random # generator.  We feature
	// detect to determine the best RNG source, normalizing to a function that
	// returns 128-bits of randomness, since that's what's usually required
	var _rng = __webpack_require__(100);
	
	// Maps for number <-> hex string conversion
	var _byteToHex = [];
	var _hexToByte = {};
	for (var i = 0; i < 256; i++) {
	  _byteToHex[i] = (i + 0x100).toString(16).substr(1);
	  _hexToByte[_byteToHex[i]] = i;
	}
	
	// **`parse()` - Parse a UUID into it's component bytes**
	function parse(s, buf, offset) {
	  var i = (buf && offset) || 0, ii = 0;
	
	  buf = buf || [];
	  s.toLowerCase().replace(/[0-9a-f]{2}/g, function(oct) {
	    if (ii < 16) { // Don't overflow!
	      buf[i + ii++] = _hexToByte[oct];
	    }
	  });
	
	  // Zero out remaining bytes if string was short
	  while (ii < 16) {
	    buf[i + ii++] = 0;
	  }
	
	  return buf;
	}
	
	// **`unparse()` - Convert UUID byte array (ala parse()) into a string**
	function unparse(buf, offset) {
	  var i = offset || 0, bth = _byteToHex;
	  return  bth[buf[i++]] + bth[buf[i++]] +
	          bth[buf[i++]] + bth[buf[i++]] + '-' +
	          bth[buf[i++]] + bth[buf[i++]] + '-' +
	          bth[buf[i++]] + bth[buf[i++]] + '-' +
	          bth[buf[i++]] + bth[buf[i++]] + '-' +
	          bth[buf[i++]] + bth[buf[i++]] +
	          bth[buf[i++]] + bth[buf[i++]] +
	          bth[buf[i++]] + bth[buf[i++]];
	}
	
	// **`v1()` - Generate time-based UUID**
	//
	// Inspired by https://github.com/LiosK/UUID.js
	// and http://docs.python.org/library/uuid.html
	
	// random #'s we need to init node and clockseq
	var _seedBytes = _rng();
	
	// Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
	var _nodeId = [
	  _seedBytes[0] | 0x01,
	  _seedBytes[1], _seedBytes[2], _seedBytes[3], _seedBytes[4], _seedBytes[5]
	];
	
	// Per 4.2.2, randomize (14 bit) clockseq
	var _clockseq = (_seedBytes[6] << 8 | _seedBytes[7]) & 0x3fff;
	
	// Previous uuid creation time
	var _lastMSecs = 0, _lastNSecs = 0;
	
	// See https://github.com/broofa/node-uuid for API details
	function v1(options, buf, offset) {
	  var i = buf && offset || 0;
	  var b = buf || [];
	
	  options = options || {};
	
	  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;
	
	  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
	  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
	  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
	  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
	  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();
	
	  // Per 4.2.1.2, use count of uuid's generated during the current clock
	  // cycle to simulate higher resolution clock
	  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;
	
	  // Time since last uuid creation (in msecs)
	  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;
	
	  // Per 4.2.1.2, Bump clockseq on clock regression
	  if (dt < 0 && options.clockseq === undefined) {
	    clockseq = clockseq + 1 & 0x3fff;
	  }
	
	  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
	  // time interval
	  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
	    nsecs = 0;
	  }
	
	  // Per 4.2.1.2 Throw error if too many uuids are requested
	  if (nsecs >= 10000) {
	    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
	  }
	
	  _lastMSecs = msecs;
	  _lastNSecs = nsecs;
	  _clockseq = clockseq;
	
	  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
	  msecs += 12219292800000;
	
	  // `time_low`
	  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
	  b[i++] = tl >>> 24 & 0xff;
	  b[i++] = tl >>> 16 & 0xff;
	  b[i++] = tl >>> 8 & 0xff;
	  b[i++] = tl & 0xff;
	
	  // `time_mid`
	  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
	  b[i++] = tmh >>> 8 & 0xff;
	  b[i++] = tmh & 0xff;
	
	  // `time_high_and_version`
	  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
	  b[i++] = tmh >>> 16 & 0xff;
	
	  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
	  b[i++] = clockseq >>> 8 | 0x80;
	
	  // `clock_seq_low`
	  b[i++] = clockseq & 0xff;
	
	  // `node`
	  var node = options.node || _nodeId;
	  for (var n = 0; n < 6; n++) {
	    b[i + n] = node[n];
	  }
	
	  return buf ? buf : unparse(b);
	}
	
	// **`v4()` - Generate random UUID**
	
	// See https://github.com/broofa/node-uuid for API details
	function v4(options, buf, offset) {
	  // Deprecated - 'format' argument, as supported in v1.2
	  var i = buf && offset || 0;
	
	  if (typeof(options) == 'string') {
	    buf = options == 'binary' ? new Array(16) : null;
	    options = null;
	  }
	  options = options || {};
	
	  var rnds = options.random || (options.rng || _rng)();
	
	  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
	  rnds[6] = (rnds[6] & 0x0f) | 0x40;
	  rnds[8] = (rnds[8] & 0x3f) | 0x80;
	
	  // Copy bytes to buffer, if provided
	  if (buf) {
	    for (var ii = 0; ii < 16; ii++) {
	      buf[i + ii] = rnds[ii];
	    }
	  }
	
	  return buf || unparse(rnds);
	}
	
	// Export public API
	var uuid = v4;
	uuid.v1 = v1;
	uuid.v4 = v4;
	uuid.parse = parse;
	uuid.unparse = unparse;
	
	module.exports = uuid;


/***/ },
/* 100 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {
	var rng;
	
	if (global.crypto && crypto.getRandomValues) {
	  // WHATWG crypto-based RNG - http://wiki.whatwg.org/wiki/Crypto
	  // Moderately fast, high quality
	  var _rnds8 = new Uint8Array(16);
	  rng = function whatwgRNG() {
	    crypto.getRandomValues(_rnds8);
	    return _rnds8;
	  };
	}
	
	if (!rng) {
	  // Math.random()-based (RNG)
	  //
	  // If all else fails, use Math.random().  It's fast, but is of unspecified
	  // quality.
	  var  _rnds = new Array(16);
	  rng = function() {
	    for (var i = 0, r; i < 16; i++) {
	      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
	      _rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
	    }
	
	    return _rnds;
	  };
	}
	
	module.exports = rng;
	
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(34);

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(43);

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(343);

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	__webpack_require__(105);
	
	var _tpl = __webpack_require__(106);
	
	var _tpl2 = _interopRequireDefault(_tpl);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _module = angular.module('components.cmsTypes', ['dndLists']).directive('cmsTypes', directive);
	
	directive.$inject = ['cms', '$http'];
	
	function directive(cms, $http) {
	    controller.$inject = [];
	    function controller() {
	        var vm = this;
	        vm.types = _.map(cms.types, function (v, k) {
	            return { type: k };
	        });
	
	        /*
	        dedicated;
	        $http.get('/cms-types').then(function (res) {
	            vm.types = res.data;
	        });
	        */
	        vm.selectType = function (type) {
	            cms.loadElements(type, function () {
	                vm.list = cms.types[type].list;
	                vm._type = type;
	            });
	        };
	        vm.convert = function (element) {
	            return {
	                type: vm._type,
	                ref: element._id,
	                containers: {}
	            };
	        };
	        vm.getTitle = function (element) {
	            return _.get(element, cms.data.types[vm._type].info.title);
	        };
	        vm.end = function () {
	            cms.updateContainerPage();
	            cms.editState.dragType = null;
	            $('body').removeClass('cms-drag');
	        };
	        vm.start = function (type) {
	            cms.editState.dragType = type;
	            $('body').addClass('cms-drag');
	        };
	    }
	
	    return {
	        replace: true,
	        restrict: 'A',
	        scope: {},
	        bindToController: {},
	        template: _tpl2.default,
	        controllerAs: 'vm',
	        controller: controller
	    };
	}
	
	exports.default = _module.name;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(246);

/***/ },
/* 106 */
/***/ function(module, exports) {

	module.exports = "<ul role=\"menu\" class=\"dropdown-menu\" ng-init=\"vm._showType= true\">\n    <li ng-repeat=\"type in vm.types\"\n        dnd-draggable=\"type\"\n        dnd-type=\"type.type\"\n        dnd-dragstart=\"vm.start(type.type)\"\n        dnd-effect-allowed=\"move\"\n        dnd-dragend=\"vm.end()\"\n        ng-show=\"vm._showType\">\n        <a ng-click=\"vm._showType = !vm._showType;\n                    vm.selectType(type.type);\n                    $event.stopPropagation();\">\n            {{type.type}}\n        </a>\n    </li>\n    <li ng-show=\"!vm._showType\"\n        style=\"padding-left: 5px;padding-right: 20px;\">\n        <div class=\"col-xs-10\">\n            <input type=\"text\" class=\"input-xs\" ng-model=\"vm._filter\">\n        </div>\n        <div class=\"col-xs-2\">\n            <button type=\"button\" class=\"btn btn-xs btn-white\"\n                    ng-click=\"vm._showType = !vm._showType;$event.stopPropagation();\">\n                <i class=\"fa fa-times\"></i>\n            </button>\n        </div>\n    </li>\n    <li ng-repeat=\"element in vm.list\"\n        ng-init=\"_element = vm.convert(element)\"\n        dnd-draggable=\"_element\"\n        dnd-type=\"vm._type\"\n        dnd-effect-allowed=\"move\"\n        dnd-dragstart=\"vm.start(vm._type)\"\n        dnd-dragend=\"vm.end()\"\n        ng-show=\"!vm._showType\">\n        <a ng-click=\"\">{{vm.getTitle(element)}}</a>\n    </li>\n</ul>\n"

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _common = __webpack_require__(93);
	
	var _common2 = _interopRequireDefault(_common);
	
	__webpack_require__(105);
	
	var _module2 = __webpack_require__(13);
	
	var _module3 = _interopRequireDefault(_module2);
	
	var _module4 = __webpack_require__(108);
	
	var _module5 = _interopRequireDefault(_module4);
	
	__webpack_require__(14);
	
	var _element = __webpack_require__(110);
	
	var _element2 = _interopRequireDefault(_element);
	
	var _editor = __webpack_require__(111);
	
	var _editor2 = _interopRequireDefault(_editor);
	
	var _cmsWrapper = __webpack_require__(113);
	
	var _cmsWrapper2 = _interopRequireDefault(_cmsWrapper);
	
	__webpack_require__(114);
	
	var _fragment = __webpack_require__(115);
	
	var _fragment2 = _interopRequireDefault(_fragment);
	
	var _container = __webpack_require__(116);
	
	var _container2 = _interopRequireDefault(_container);
	
	var _containerEdit = __webpack_require__(118);
	
	var _containerEdit2 = _interopRequireDefault(_containerEdit);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _module = angular.module('components.cmsMain', ['dndLists', 'ui.bootstrap', _common2.default, _module3.default, _module5.default, 'ui.bootstrap.contextMenu']).directive('cmsContainer', _container2.default).directive('cmsElement', _element2.default).directive('cmsEditor', _editor2.default).directive('cmsWrapper', _cmsWrapper2.default).directive('cmsFragment', _fragment2.default).directive('cmsContainerEdit', _containerEdit2.default);
	
	exports.default = _module.name;

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _module2 = __webpack_require__(16);
	
	var _module3 = _interopRequireDefault(_module2);
	
	var _tpl = __webpack_require__(109);
	
	var _tpl2 = _interopRequireDefault(_tpl);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _module = angular.module('components.cmsElementEdit', [_module3.default]).directive('cmsElementEdit', directive).factory('formService', service);
	
	directive.$inject = [];
	
	function directive() {
	    controller.$inject = [];
	    function controller() {
	        var vm = this;
	        vm.isTab = vm.cmsFields[0].isTab ? true : false;
	        vm.fullScreenText = 'Fullscreen';
	        vm.changeScreenSize = function () {
	            if ($('.cms-window-placeholder').hasClass('cms-window')) {
	                $('.cms-window-placeholder').removeClass('cms-window');
	                vm.fullScreenText = 'Fullscreen';
	            } else {
	                $('.cms-window-placeholder').addClass('cms-window');
	                vm.fullScreenText = 'Minimize';
	            }
	        };
	        vm.options = { formState: { path: '' } };
	    }
	
	    return {
	        replace: true,
	        restrict: 'A',
	        scope: {},
	        bindToController: {
	            cmsType: '=',
	            cmsModel: '=',
	            cmsFields: '=',
	            onCancel: '&',
	            onSubmit: '&',
	            onAdd: '&',
	            onApply: '&'
	        },
	        template: _tpl2.default,
	        controllerAs: 'vm',
	        controller: controller
	    };
	}
	
	service.$inject = ['$http', '$timeout', 'cms', '$uibModal'];
	function service($http, $timeout, cms, $uibModal) {
	    function edit(ref, type, cb) {
	
	        var Type = Types[type];
	
	        function modalCtrl($scope, $uibModalInstance) {
	            $scope.$on('saveContainers', function (e, obj) {
	                return scope.$emit('saveContainersFw', obj);
	            });
	            $scope.$on('restoreContainers', function (e, obj) {
	                return scope.$emit('restoreContainersFw', obj);
	            });
	
	            $scope.model = _.find(Type.list, { _id: ref });
	            if (!$scope.model) {
	                $http.get('api/v1/' + type + '/' + ref).then(function (res) {
	                    Type.list.push(res.data);
	                    $scope.model = _.find(Type.list, { _id: ref });
	                });
	            }
	            $scope.fields = Type.form;
	
	            if (Type.tabs) {
	                $scope.fields = _.map(Type.tabs, function (tab, i) {
	                    var _tab = { title: tab.title, fields: [] };
	                    if (i === 0) {
	                        _tab.active = true;
	                        _tab.isTab = true;
	                    }
	                    _.merge(tab, { fields: [] });
	                    var _iteratorNormalCompletion = true;
	                    var _didIteratorError = false;
	                    var _iteratorError = undefined;
	
	                    try {
	                        var _loop = function _loop() {
	                            var field = _step.value;
	
	                            var inFirstTab = function inFirstTab() {
	                                var result = true;
	                                Type.tabs.forEach(function (tab, i) {
	                                    if (i !== 0) {
	                                        if (tab.fields.indexOf(field.key) !== -1 || field.tab === tab.title) result = false;
	                                    }
	                                });
	                                return result;
	                            };
	                            if (field.tab === tab.title || tab.fields.indexOf(field.key) !== -1 || i === 0 && inFirstTab()) {
	                                _tab.fields.push(field);
	                            }
	                        };
	
	                        for (var _iterator = Type.form[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                            _loop();
	                        }
	                    } catch (err) {
	                        _didIteratorError = true;
	                        _iteratorError = err;
	                    } finally {
	                        try {
	                            if (!_iteratorNormalCompletion && _iterator.return) {
	                                _iterator.return();
	                            }
	                        } finally {
	                            if (_didIteratorError) {
	                                throw _iteratorError;
	                            }
	                        }
	                    }
	
	                    return _tab;
	                });
	            }
	
	            $scope.type = type;
	
	            $scope.submit = function () {
	                cms.updateElement($scope.type, $scope.model, function () {
	                    $uibModalInstance.close();
	                    console.log('update element successful');
	                }, function () {
	                    return $uibModalInstance.dismiss('cancel');
	                });
	            };
	
	            $scope.apply = function () {
	                cms.updateElement($scope.type, $scope.model);
	            };
	
	            $scope.cancel = function () {
	                $uibModalInstance.dismiss('cancel');
	            };
	
	            $scope.add = function () {
	                $scope.apply();
	                cms.createElement(type, {}, function (model) {
	                    $uibModalInstance.close();
	                    edit(model._id, type, cb);
	                });
	            };
	        }
	
	        cms.getType(type, ref, function () {
	            var mouseEnter = false;
	
	            $('body').on('scroll mousewheel touchmove', function (e) {
	                if (!mouseEnter) {
	                    e.preventDefault();
	                    e.stopPropagation();
	                    return false;
	                }
	            });
	
	            var modalInstance = $uibModal.open({
	                animation: false,
	                size: 'lg',
	                template: '\n                <div cms-element-edit\n                     cms-type="type"\n                     cms-model="model"\n                     cms-fields="fields"\n                     on-cancel="cancel()"\n                     on-submit="submit()"\n                     on-add="add()"\n                     on-apply="apply()">\n                </div>\n                ',
	                controller: modalCtrl,
	                windowClass: 'cms-window-placeholder'
	            });
	
	            $timeout(function () {
	                $('.cms-window-placeholder').find('.modal-content').mouseover(function () {
	                    mouseEnter = true;
	                }).mouseout(function () {
	                    mouseEnter = false;
	                });
	            }, 100);
	
	            modalInstance.result.then(function () {
	                if (cb) $timeout(cb, 100);
	            })['finally'](function () {
	                $timeout(function () {
	                    $('body').off('scroll mousewheel touchmove');
	                    $('.cms-window-placeholder').find('.modal-content').off();
	                }, 100);
	            });
	        });
	    }
	
	    return {
	        edit: edit
	    };
	}
	
	exports.default = _module.name;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 109 */
/***/ function(module, exports) {

	module.exports = "<div class=\"cms-wrapper cms\"\n     ng-init=\"_showId = false;\">\n\n    <div style=\"position: absolute;right: 10px;\">\n        <button class=\"btn btn-xs btn-white\"\n                ng-click=\"_showId=!_showId;\"\n                ng-bind=\"_showId?'hide id':'show id'\">\n        </button>\n        <button type=\"button\" class=\"btn btn-xs btn-white\" ng-bind=\"vm.fullScreenText\"\n                ng-click=\"vm.changeScreenSize();\"></button>\n    </div>\n\n    <h3 style=\"font-weight: 300;\">Edit {{vm.cmsType}} {{_showId?'('+vm.cmsModel._id+')':''}}:</h3>\n\n    <form ng-submit=\"vm.onSubmit()\"\n          novalidate\n          class=\"cms-form form-horizontal\">\n\n        <uib-tabset ng-if=\"vm.isTab\">\n            <uib-tab ng-repeat=\"tab in vm.cmsFields\"\n                     heading=\"{{tab.title}}\"\n                     active=\"tab.active\">\n                <br>\n                <formly-form model=\"vm.cmsModel\" fields=\"tab.fields\"\n                             form=\"vm.form\" options=\"vm.options\">\n                </formly-form>\n            </uib-tab>\n        </uib-tabset>\n\n        <div>\n            <br>\n            <formly-form model=\"vm.cmsModel\" fields=\"vm.cmsFields\"\n                         form=\"vm.form\" options=\"vm.options\" ng-if=\"!vm.isTab\">\n            </formly-form>\n        </div>\n\n        <div class=\"form-group\">\n            <div class=\"col-sm-offset-2 col-sm-10\">\n                <button type=\"submit\" class=\"btn btn-primary submit-button\" ng-disabled=\"vm.form.$invalid\">Submit\n                </button>\n                <button type=\"button\" class=\"btn btn-primary\" ng-click=\"vm.onApply()\">Apply</button>\n                <button type=\"button\" class=\"btn btn-primary\" ng-click=\"vm.onAdd()\">Save and Add</button>\n                <button type=\"button\" class=\"btn btn-primary\" ng-click=\"vm.onCancel()\">Cancel</button>\n\n            </div>\n        </div>\n    </form>\n</div>"

/***/ },
/* 110 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	elementDirective.$inject = ['cms', '$compile', '$http', '$timeout', '$controller'];
	function elementDirective(cms, $compile, $http, $timeout, $controller) {
	
	    function link(scope, element, attr, controller) {
	        var vm = scope.vm;
	        var _vm$element = vm.element;
	        var ref = _vm$element.ref;
	        var type = _vm$element.type;
	        var containers = _vm$element.containers;
	        var binding = _vm$element.binding;
	
	        scope.$on('saveContainersFw', function (e, obj) {
	            if (obj.type === type) obj.cb(vm.element.containers);
	        });
	        scope.$on('restoreContainersFw', function (e, obj) {
	            if (obj.type === type) {
	                var _vm$element$container;
	
	                vm.element.containers.length = 0;
	                (_vm$element$container = vm.element.containers).push.apply(_vm$element$container, _toConsumableArray(obj.containers));
	                render();
	                cms.updateContainerPage();
	            }
	        });
	
	        var Type = void 0;
	
	        cms.getType(type, ref, function (model) {
	            if (!model) {
	                vm.dndMoved();
	                cms.updateContainerPage();
	                return;
	            }
	            vm.element.ref = model._id;
	            vm.element.containers = vm.element.containers || {};
	            if (!ref) cms.updateContainerPage();
	            Type = Types[type];
	            render();
	        });
	
	        function processBinding(binding, e, template) {
	            if (binding.binds) {
	                scope.parentModel = binding.parentModel;
	                var _iteratorNormalCompletion = true;
	                var _didIteratorError = false;
	                var _iteratorError = undefined;
	
	                try {
	                    var _loop = function _loop() {
	                        var bind = _step.value;
	
	                        if (bind.choice === 'model') {
	                            (function () {
	                                var _bind$model = bind.model;
	                                var parentKey = _bind$model.parentKey;
	                                var key = _bind$model.key;
	
	                                scope.$watch('parentModel.' + parentKey, function () {
	                                    return scope.model[key] = scope.parentModel[parentKey];
	                                }, true);
	                            })();
	                        } else if (bind.choice === 'fn') {
	                            var _bind$fn = bind.fn;
	                            var _parentKey = _bind$fn.parentKey;
	                            var _key = _bind$fn.key;
	
	                            scope.model[_key] = Types[binding.BindType].fn[parentFn].bind(model);
	                        } else if (bind.choice === 'scope') {
	                            var _key2 = bind.scope.key;
	
	                            scope.model[_key2] = e[_key2].bind(scope.parentModel);
	                        } else if (bind.choice === 'array') {
	                            var _parentKey2 = bind.array.parentKey;
	
	                            scope.prepareElement = function (item) {
	                                var containers = JsonFn.clone(vm.element.containers);
	                                Types.Layout.fn.getTreeWithBinding(containers, bind.array.bind, item, binding.BindType);
	                                return { type: vm.element.type, ref: vm.element.ref, containers: containers, binding: {} };
	                            };
	                            template = '\n                                <div ng-repeat="item in parentModel.' + _parentKey2 + ' track by $index"\n                                     ng-init="e = prepareElement(item)">\n                                     <div cms-element="e"></div>\n                                </div>';
	                        }
	                    };
	
	                    for (var _iterator = binding.binds[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                        _loop();
	                    }
	                } catch (err) {
	                    _didIteratorError = true;
	                    _iteratorError = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion && _iterator.return) {
	                            _iterator.return();
	                        }
	                    } finally {
	                        if (_didIteratorError) {
	                            throw _iteratorError;
	                        }
	                    }
	                }
	            }
	            return template;
	        }
	
	        function render() {
	
	            if (vm.inline) {
	                scope.cmsInline = vm.inline === 'true';
	                reRender();
	            } else {
	                try {
	                    scope.cmsInline = scope.$parent.vm.cmsInline === 'true';
	
	                    scope.$parent.$watch('vm.cmsInline', function () {
	                        scope.cmsInline = scope.$parent.vm.cmsInline === 'true';
	                        reRender();
	                    });
	                } catch (e) {}
	            }
	
	            $timeout(function () {
	                return scope.$watch('vm.element.ref', function (newValue, oldValue) {
	                    if (newValue !== oldValue) reRender();
	                });
	            }, 2000);
	
	            function reRender() {
	                ref = vm.element.ref;
	                var e = _.find(Type.list, { _id: ref });
	                if (binding) {
	                    var template = Type.template;
	                    scope.model = angular.copy(e);
	                    template = processBinding(binding, e, template);
	                    element.html(template);
	                } else {
	                    scope.model = e;
	                    element.html('\n                    <div cms-refresh="vm.refresh()"\n                         cms-editor="vm.element"\n                         cms-remove="vm.dndMoved()"\n                         cms-menu="{{cmsInline?\'true\':\'false\'}}"\n                         ng-class="{\'cms-edit-shadow\':cmsInline}">\n                         ' + Type.template + '\n                    </div>\n                    ');
	                }
	
	                _render();
	            }
	
	            function _render() {
	                var _Type = Type;
	                var serverFn = _Type.serverFn;
	                var ctrl = _Type.controller;
	
	                var fn = JsonFn.clone(Type.fn);
	                if (fn) {
	                    (function () {
	                        var _fn = {};
	                        _.each(fn, function (v, k) {
	                            _fn[k] = v.bind(scope.model);
	                        });
	                        scope.fn = _fn;
	                    })();
	                }
	
	                scope.serverFn = {};
	                _.each(serverFn, function (fn, k) {
	                    fn.bind(scope.model)($http.post, scope, type, k);
	                });
	                if (ctrl) $controller(ctrl, { $scope: scope });
	
	                controller.refresh = function () {
	                    if (scope.serverFnData) scope.serverFnData = null;
	                    render();
	                };
	
	                controller.getPath = function () {
	                    return vm.path + '.containers';
	                };
	                controller.getElement = function () {
	                    return vm.element;
	                };
	
	                $compile(element.contents())(scope);
	            }
	        }
	    }
	
	    return {
	        restrict: 'A',
	        replace: true,
	        scope: {},
	        bindToController: {
	            path: '@cmsPath',
	            element: '=cmsElement',
	            inline: '@inline',
	            dndMoved: '&'
	        },
	        controllerAs: 'vm',
	        controller: function controller() {},
	        link: link
	    };
	}
	
	exports.default = elementDirective;

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _editor = __webpack_require__(112);
	
	var _editor2 = _interopRequireDefault(_editor);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	directive.$inject = ['cms', '$http', '$timeout', 'formService'];
	function directive(cms, $http, $timeout, formService) {
	    controller.$inject = ['$scope'];
	
	    function controller(scope) {
	        var vm = this;
	        var _vm$cmsEditor = vm.cmsEditor;
	        var ref = _vm$cmsEditor.ref;
	        var type = _vm$cmsEditor.type;
	
	        var Type = cms.data.types[type];
	
	        vm.editState = cms.editState;
	        vm.showControl = function () {
	            vm._showControl = true;
	            $timeout(function () {
	                vm._showControl = false;
	            }, 1000);
	        };
	
	        vm.getControlVisible = function () {
	            return !vm._showControl && (vm.editState.editMode === Enum.EditMode.ALL || vm.editState.editMode === Enum.EditMode.VIEWELEMENT && Type.info.isViewElement || vm.editState.editMode === Enum.EditMode.DATAELEMENT && !Type.info.isViewElement);
	        };
	
	        vm.edit = function (cb) {
	            var _vm$cmsEditor2 = vm.cmsEditor;
	            var ref = _vm$cmsEditor2.ref;
	            var type = _vm$cmsEditor2.type;
	
	            formService.edit(ref, type, cb);
	        };
	
	        vm.copy = function (cb) {
	            var _vm$cmsEditor3 = vm.cmsEditor;
	            var ref = _vm$cmsEditor3.ref;
	            var type = _vm$cmsEditor3.type;
	
	            var e = cms.findByRef(type, ref);
	
	            cms.createElement(type, _.pickBy(e, function (v, k) {
	                return k !== '_id';
	            }, true), function (model) {
	                formService.edit(model._id, type, cb);
	            });
	        };
	
	        vm.remove = function () {
	            vm.cmsRemove();
	            cms.updateContainerPage();
	        };
	        vm.removeByDatabase = function () {
	            vm.remove();
	            $http.delete('api/v1/' + vm.cmsEditor.type + '/' + vm.cmsEditor.ref).then(function () {
	                _.remove(Types[vm.cmsEditor.type].list, { _id: vm.cmsEditor.ref });
	                vm.refresh();
	            });
	        };
	
	        vm.refresh = function () {
	            scope.$emit('refresh', { type: 'Wrapper', finish: false });
	        };
	    }
	
	    function link(scope, element, attr, elementController) {
	        scope.menu = [];
	        var vm = scope.vm;
	        var _vm$cmsEditor4 = vm.cmsEditor;
	        var ref = _vm$cmsEditor4.ref;
	        var type = _vm$cmsEditor4.type;
	
	        if (vm.cmsMenu === 'true') {
	            scope.menu = [['Edit', function () {
	                return vm.edit(refresh);
	            }], ['Remove', function () {
	                vm.remove();
	            }], ['Remove (in database)', function () {
	                vm.remove();
	                $http.delete('api/v1/' + vm.cmsEditor.type + '/' + vm.cmsEditor.ref).then(function () {
	                    elementController.refresh();
	                });
	            }], ['Add new', function () {
	                $http.get('/cms-types/' + vm.cmsEditor.type).then(function (res) {
	                    var Type = cms.data.types[vm.cmsEditor.type];
	                    Type.list.unshift(res.data.data);
	                    elementController.refresh();
	                });
	            }]];
	        }
	        var Type = cms.data.types[type];
	        vm.editorIcon = Type.info.editorIcon;
	    }
	
	    return {
	        restrict: 'A',
	        require: '^^?cmsElement',
	        scope: {},
	        bindToController: {
	            cmsEditor: '=',
	            cmsRemove: '&',
	            cmsRefresh: '&',
	            cmsMenu: '@',
	            cmsTemplate: '='
	        },
	        controller: controller,
	        link: link,
	        controllerAs: 'vm',
	        transclude: true,
	        template: _editor2.default
	    };
	}
	
	exports.default = directive;

/***/ },
/* 112 */
/***/ function(module, exports) {

	module.exports = "<div context-menu=\"menu\"\n     ng-style=\"{display:vm.cmsMenu === 'true'?'inline-block':'block'}\">\n    <div ng-if=\"vm.cmsMenu !== 'true'\" class=\"cms cms-element-wrapper\" ng-style=\"vm.editorIcon\">\n        <div class=\"cms-element-controll-icon label label-primary\" style=\"font-size: 13px\"\n             ng-mouseover=\"vm.showControl()\" ng-show=\"vm.getControlVisible()\">\n            <i class=\"fa fa-circle-o-notch\"></i>\n        </div>\n\n        <div class=\"cms-element-controll\"\n             ng-mouseover=\"vm.__showControl = true\"\n             ng-mouseleave=\"vm.__showControl = false\"\n             ng-show=\"vm._showControl || vm.__showControl\">\n            <button type=\"button\" class=\"btn btn-sm btn-white pull-right\" ng-click=\"vm.edit()\">\n                <i class=\"fa fa-pencil-square-o\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-sm btn-white pull-right\" ng-click=\"vm.removeByDatabase()\">\n                <i class=\"fa fa-trash\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-sm btn-white pull-right\" ng-click=\"vm.remove()\">\n                <i class=\"fa fa-trash-o\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-sm btn-white pull-right\" ng-click=\"vm.copy()\">\n                <i class=\"fa fa-files-o\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-sm btn-white pull-right\" ng-click=\"vm.cmsRefresh()\">\n                <i class=\"fa fa-refresh\"></i>\n            </button>\n        </div>\n\n    </div>\n    <ng-transclude></ng-transclude>\n</div>"

/***/ },
/* 113 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	directive.$inject = ['cms', '$compile', '$http', '$timeout', '$controller'];
	function directive(cms, $compile, $http, $timeout, $controller) {
	
	    function link(scope, element) {
	        var vm = scope.vm;
	
	        var Type = cms.data.types['Wrapper'];
	        if (!Type.store) Type.store = {};
	        render();
	
	        /*if (!Type.store[vm.cmsWrapper]) {
	         $http.get(`/cms-wrappers/${vm.cmsWrapper}`, _transform).then(res => {
	         Type.store[vm.cmsWrapper] = res.data;
	         render();
	         }, () => {
	         render();
	         })
	         } else {
	         render();
	         }*/
	
	        function render() {
	            if (Type.store[vm.cmsWrapper]) {
	                var _Type$store$vm$cmsWra = Type.store[vm.cmsWrapper];
	                var template = _Type$store$vm$cmsWra.template;
	                var serverFn = _Type$store$vm$cmsWra.serverFn;
	                var fn = _Type$store$vm$cmsWra.fn;
	                var serverFnData = _Type$store$vm$cmsWra.serverFnData;
	                var controller = _Type$store$vm$cmsWra.controller;
	
	
	                _.assign(scope, { fn: {}, model: vm.element, serverFn: {}, serverFnData: serverFnData });
	
	                _.each(fn, function (v, k) {
	                    return scope.fn[k] = v.bind(scope.model);
	                });
	                _.each(serverFn, function (fn, k) {
	                    return fn($http.post, scope, vm.cmsWrapper, k);
	                });
	
	                if (controller) $controller(controller, { $scope: scope });
	
	                element.html(template);
	            } else {
	                var _vm$element = vm.element;
	                var list = _vm$element.list;
	                var _element = _vm$element.element;
	                var _fn = _vm$element.Fn;
	
	                var _template = void 0;
	                if (!list.null) {
	                    var BindType = list.BindType;
	                    var layout = list.layout;
	                    var query = list.query;
	                    // resolve data before render
	
	                    if (!Types[BindType]._load) {
	                        cms.loadElements(BindType, function () {
	                            return render();
	                        });
	                        return;
	                    }
	                    try {
	                        scope.result = query.bind(vm.element)();
	                    } catch (e) {}
	                    if (!scope.result) scope.result = cms.data.types[BindType].list;
	                    scope.type = BindType;
	                    if (layout) {
	                        scope.layout = layout;
	                        _template = '\n                        <div ng-repeat="element in result track by $index">\n                            <div cms-fragment="{{layout.ID}}" model="element"></div>\n                        </div>\n                        ';
	                    } else {
	                        scope.e = { type: BindType };
	                        _template = '\n                        <br>\n                        <div ng-repeat="element in result track by $index">\n                            <div cms-element="{type:type,ref:element._id}"></div>\n                        </div>\n                        ';
	                    }
	                } else if (!_element.null) {
	                    var _BindType = _element.BindType;
	                    var _layout = _element.layout;
	                    var model = _element.model;
	                    var _query = _element.query;
	
	                    _.assign(scope, { model: model, layout: _layout, type: _BindType });
	                    _template = '<br><div cms-element="{type:type,ref:vm.element.element.model._id}"></div>';
	                }
	                if (_fn) {
	                    vm.element.fn = _.mapValues(_fn(), function (f) {
	                        return f.bind(vm.element);
	                    });
	                }
	                element.html(_template);
	            }
	
	            $compile(element.contents())(scope);
	        }
	    }
	
	    return {
	        replace: true,
	        restrict: 'A',
	        scope: {},
	        bindToController: {
	            cmsWrapper: '@',
	            element: '='
	        },
	        controller: function controller() {},
	        link: link,
	        controllerAs: 'vm'
	    };
	}
	
	exports.default = directive;

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(247);

/***/ },
/* 115 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.directive = directive;
	directive.$inject = ['cms', '$compile', '$timeout'];
	function directive(cms, $compile, $timeout) {
	
	    function link(scope, element) {
	        var vm = scope.vm;
	
	        var Layout = cms.data.types['Layout'];
	        var layout = _.find(Layout.list, function (layout) {
	            return layout.ID === vm.fragment;
	        });
	
	        var _ref = vm.save ? _.find(layout.SAVE, function (save) {
	            return save.name === vm.save;
	        }) : layout.SAVE[0];
	
	        var containers = _ref.containers;
	        var bind = _ref.bind;
	        var BindType = _ref.BindType;
	
	        containers = angular.copy(containers);
	        Layout.fn.getTreeWithBinding(containers, bind, vm.model, BindType);
	        vm.element = { ref: layout._id, type: 'Layout', containers: containers, binding: {} };
	        element.html('<div cms-element="vm.element"></div>');
	        $compile(element.contents())(scope);
	    }
	
	    return {
	        restrict: 'A',
	        replace: false,
	        scope: {},
	        bindToController: {
	            fragment: '@cmsFragment',
	            save: '@',
	            model: '='
	        },
	        controller: function controller() {},
	        controllerAs: 'vm',
	        link: link
	    };
	}
	exports.default = directive;

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _container = __webpack_require__(117);
	
	var _container2 = _interopRequireDefault(_container);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	directive.$inject = ['cms', '$timeout'];
	function directive(cms, $timeout) {
	    function link(scope, element, attr, elementController) {
	        var vm = scope.vm;
	        var elementPath = elementController ? elementController.getPath() : null;
	        vm.path = '' + (elementPath ? elementPath + '.' : '') + vm.name;
	        var container = cms.getContainer(vm.path);
	
	        vm.showControl = function () {
	            vm._showControl = true;
	            $timeout(function () {
	                vm._showControl = false;
	            }, 1000);
	        };
	        vm.editState = cms.editState;
	        vm.elements = container.elements;
	        vm.start = function (type) {
	            cms.editState.dragType = type;
	        };
	        vm.end = function () {
	            cms.editState.dragType = null;
	            cms.updateContainerPage();
	        };
	        vm.allowedTypes = vm.cmsContainerTypes ? vm.cmsContainerTypes.split(',') : [];
	        vm.highlight = function () {
	            return vm.allowedTypes.indexOf(vm.editState.dragType) !== -1 && !(vm.elements.length > 0 && vm.elements[0].binding);
	        };
	
	        vm.editState = cms.editState;
	        vm.matchEditMode = function (type) {
	            return vm.editState.editMode === Enum.EditMode.ALL || vm.editState.editMode === Enum.EditMode.VIEWELEMENT && cms.data.types[type].info.isViewElement || vm.editState.editMode === Enum.EditMode.DATAELEMENT && !cms.data.types[type].info.isViewElement;
	        };
	    }
	
	    return {
	        require: '^^?cmsElement',
	        replace: false,
	        restrict: 'A',
	        scope: {},
	        bindToController: {
	            name: '@cmsContainer',
	            cmsContainerTypes: '@',
	            cmsInline: '@'
	        },
	        template: _container2.default,
	        controller: function controller() {},
	        controllerAs: 'vm',
	        link: link
	    };
	}
	
	exports.default = directive;

/***/ },
/* 117 */
/***/ function(module, exports) {

	module.exports = "<i class=\"fa fa-circle-o-notch cms-element-controll-icon\"\n   ng-mouseover=\"vm.showControl()\"\n   ng-show=\"!vm._showControl && (vm.editState.editMode === 1)\"></i>\n<div class=\"cms-element-controll\"\n     ng-mouseover=\"vm.__showControl = true\"\n     ng-mouseleave=\"vm.__showControl = false\"\n     ng-show=\"vm._showControl || vm.__showControl\">\n    <button type=\"button\" class=\"btn btn-sm btn-white pull-right\" ng-click=\"\">\n        <i class=\"fa fa-plus\"></i>\n    </button>\n</div>\n<div class=\"{{vm.cmsInline === 'true'?'cms-containers-inline':'cms-containers'}}\"\n     dnd-list=\"vm.elements\"\n     dnd-disable-if=\"vm.elements.length > 0 && vm.elements[0].binding\"\n     dnd-allowed-types=\"vm.allowedTypes\"\n     dnd-horizontal-list=\"{{vm.cmsInline}}\"\n     ng-class=\"{'cms-panel-highlight':vm.highlight()}\">\n    <div ng-repeat=\"element in vm.elements\"\n         dnd-disable-if=\"element.binding || !vm.matchEditMode(element.type)\"\n         dnd-draggable=\"element\"\n         dnd-type=\"element.type\"\n         dnd-moved=\"vm.elements.splice($index, 1);\"\n         dnd-effect-allowed=\"move\"\n         dnd-dragstart=\"vm.start(element.type)\"\n         dnd-dragend=\"vm.end();\"\n         cms-element=\"element\"\n         cms-path=\"{{vm.path}}.elements[{{$index}}]\"\n         class=\"{{vm.cmsInline === 'true'?'cms-element':''}}\"\n    ></div>\n</div>\n"

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _containerEdit = __webpack_require__(119);
	
	var _containerEdit2 = _interopRequireDefault(_containerEdit);
	
	var _traverse = __webpack_require__(103);
	
	var _traverse2 = _interopRequireDefault(_traverse);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	directive.$inject = ['cms', '$timeout'];
	function directive(cms, $timeout) {
	    function link(scope, element, attr) {
	        $(element).find('.cms-container-panel').draggable({
	            cancel: ".panel-body",
	            handle: ".panel-heading"
	        });
	        scope.vm.editState = cms.editState;
	        var vm = scope.vm;
	
	
	        var test = {
	            main: {
	                elements: [{
	                    "type": "Article",
	                    "ref": "579109d67babc20c5a7f8673",
	                    "containers": {
	                        tab: {
	                            elements: [{
	                                "type": "Article",
	                                "ref": "579109d67babc20c5a7f8673"
	                            }]
	                        }
	                    }
	                }]
	            }
	        };
	
	        vm.treeConfig = {
	            core: {
	                themes: { name: 'proton', responsive: true },
	                animation: true,
	                check_callback: true
	            },
	            plugins: ["dnd", "types"],
	            version: 1
	        };
	
	        vm.tree = (0, _traverse2.default)(cms.data.containers).map(function (node) {
	            if (!node) return;
	            if (!this.key || this.key === 'children' && this.parent.parent.node[0].type === 'element') {
	                var _node = _.map(node, function (v, k) {
	                    return { text: k, type: 'container', children: v.elements };
	                });
	                this.update(_node);
	            } else if (this.parent && this.parent.key === 'children' && node.ref) {
	                var _node2 = {
	                    content: _.pick(node, ['type', 'ref']),
	                    text: node.type + ' - ' + cms.getTitle(node.type, node.ref),
	                    type: 'element',
	                    children: node.containers
	                };
	                this.update(_node2);
	            }
	        });
	
	        $timeout(function () {
	            return vm.treeConfig.version++;
	        });
	    }
	
	    return {
	        replace: false,
	        restrict: 'A',
	        scope: {},
	        bindToController: {},
	        template: _containerEdit2.default,
	        controller: function controller() {},
	        controllerAs: 'vm',
	        link: link
	    };
	}
	
	exports.default = directive;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 119 */
/***/ function(module, exports) {

	module.exports = "<div class=\"cms-container-panel panel panel-default ui-widget-content\"\n     ng-show=\"vm.editState.showContainerEdit\"\n     style=\"position: fixed; top: 70px; right: 50px;width: 300px;height: 600px;z-index:1000\">\n    <div class=\"panel-heading\" style=\"padding: 0px 0px 0px 10px;height: 26px;cursor: move\">\n        <div class=\"panel-title\">\n            <h5>Edit panel</h5>\n        </div>\n    </div>\n    <div class=\"panel-body\">\n        <div js-tree=\"vm.treeConfig\" ng-model=\"vm.tree\"\n             tree-events=\"changed:vm.selectNode\" tree=\"vm.treeInstance\"></div>\n    </div>\n</div>"

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	__webpack_require__(14);
	
	__webpack_require__(54);
	
	__webpack_require__(55);
	
	__webpack_require__(56);
	
	__webpack_require__(57);
	
	__webpack_require__(58);
	
	var _tpl = __webpack_require__(121);
	
	var _tpl2 = _interopRequireDefault(_tpl);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _module = angular.module('components.cmsSitemap', ['ui.bootstrap', 'ngJsTree', 'ui.select']).directive('cmsSitemap', directive);
	
	directive.$inject = ['$http', '$uibModal', '$timeout', 'cms'];
	
	function directive($http, $uibModal, $timeout, cms) {
	    controller.$inject = [];
	    function controller() {
	        var vm = this;
	
	        vm.openSitemap = function () {
	            function modalCtrl($scope, $uibModalInstance) {
	                $scope.cancel = function () {
	                    $uibModalInstance.dismiss('cancel');
	                };
	                $scope.refresh = function () {
	                    $http.get('/cms-site-map').then(function (_ref) {
	                        var data = _ref.data;
	
	                        $scope.tree = [data.tree];
	                        $scope.templates = data.templates;
	                        $timeout(function () {
	                            return $scope.treeConfig.version++;
	                        });
	                    });
	                };
	                $http.get('/cms-site-map').then(function (_ref2) {
	                    var data = _ref2.data;
	
	                    $scope.tree = [data.tree];
	                    $timeout(function () {
	                        return $scope.treeConfig.version++;
	                    });
	                });
	
	                $scope.templates = cms.data.templates;
	                $scope.baseUrlPath = cms.data.baseUrlPath;
	                $scope.open = function () {
	                    location.href = $scope.baseUrlPath + '/' + $scope.node.path;
	                };
	                $scope.template = {};
	                $scope.ignoreModelChanges = function () {
	                    return false;
	                };
	                $scope.treeConfig = {
	                    core: {
	                        themes: { name: 'proton', responsive: true },
	                        animation: true,
	                        check_callback: true
	                    },
	                    plugins: [],
	                    version: 1
	                };
	                $scope.onFileSelect = function (files) {
	                    //files: an array of files selected, each file has name, size, and type.
	                    var _files = _slicedToArray(files, 1);
	
	                    var file = _files[0];
	
	                    cms.uploadFile(file, $scope.node.path, function () {
	                        console.log('upload successful');
	                        $scope.refresh();
	                    });
	                };
	                $scope.selectNode = function (e, select) {
	                    $timeout(function () {
	                        return $scope.node = select && select.node ? select.node.original : null;
	                    });
	                };
	                $scope.makeTemplate = function (templateName) {
	                    $http.post('/cms-make-template', { path: $scope.node.path, name: templateName }).then(function () {
	                        console.log('make template successful');
	                        $scope.refresh();
	                    });
	                };
	                $scope.createPage = function (templatePage, pageName) {
	                    $http.post('/cms-create-page', {
	                        templatePage: templatePage,
	                        path: '' + $scope.node.path + ($scope.node.path !== '' ? '/' : '') + pageName
	                    }).then(function () {
	                        console.log('make template successful');
	                        $scope.refresh();
	                    });
	                };
	                $scope.deletePage = function () {
	                    $http.post('/cms-delete-page', { path: $scope.node.path }).then(function () {
	                        return $scope.refresh();
	                    });
	                };
	                $scope.renamePage = function (newPageName) {
	                    $http.post('/cms-rename-page', { path: $scope.node.path, name: newPageName }).then(function () {
	                        return $scope.refresh();
	                    });
	                };
	            }
	
	            $uibModal.open({
	                animation: true,
	                template: _tpl2.default,
	                controller: modalCtrl,
	                windowClass: 'cms-window'
	            });
	        };
	    }
	
	    return {
	        replace: true,
	        restrict: 'A',
	        scope: {},
	        bindToController: {},
	        template: '<button ng-click="vm.openSitemap()" class="btn btn-default navbar-btn">Sitemap</button>',
	        controllerAs: 'vm',
	        controller: controller
	    };
	}
	
	exports.default = _module.name;

/***/ },
/* 121 */
/***/ function(module, exports) {

	module.exports = "<div class=\"cms-wrapper animated fadeInRight cms-sidebar cms\">\n    <button type=\"button\" class=\"btn btn-sm btn-white cms-close-position\"\n            ng-click=\"cancel()\">\n        <i class=\"fa fa-times\"></i>\n    </button>\n\n    <div class=\"col-xs-6 col-sm-4 pull-right cms-controll-panel-right\">\n        <div ng-show=\"node\">\n            <h4>Information: </h4>\n            <h5 style=\"word-break: break-all;\">Name: {{node.text}}</h5>\n            <h5 style=\"word-break: break-all;\">Type: {{node.type}}</h5>\n            <h5 style=\"word-break: break-all;\">Path: {{node.path}}</h5>\n            <br>\n\n            <div class=\"btn-group\">\n                <button class=\"btn btn-xs btn-white cms-btn-bottom\"\n                        ng-click=\"open()\">\n                    Open page\n                </button>\n                <button class=\"btn btn-xs btn-white cms-btn-bottom\"\n                        ng-click=\"deletePage()\">\n                    Delete\n                </button>\n            </div>\n            <form role=\"form\" ng-submit=\"makeTemplate(templateName);templateName = '';\">\n                <button class=\"btn btn-xs btn-white cms-btn-bottom\"\n                        type=\"submit\" style=\"position: absolute;right: 15px;\"\n                        ng-disabled=\"!templateName\">\n                    Make template page\n                </button>\n                <input ng-model=\"templateName\" type=\"text\" class=\"form-control input-xs\" placeholder=\"template name\">\n            </form>\n            <form role=\"form\" ng-submit=\"createPage(template.selected, pageName);pageName = '';\">\n                <ui-select class=\"cms-select\" ng-model=\"template.selected\" theme=\"bootstrap\" ng-disabled=\"disabled\"\n                           style=\"min-width: 60px;\">\n                    <ui-select-match placeholder=\"Select a template page\">{{$select.selected}}</ui-select-match>\n                    <ui-select-choices repeat=\"_template in templates\">\n                        {{_template}}\n                    </ui-select-choices>\n                </ui-select>\n                <button class=\"btn btn-xs btn-white cms-btn-bottom\"\n                        type=\"submit\" style=\"position: absolute;right: 15px;\"\n                        ng-disabled=\"!pageName || !template.selected\">\n                    Create new page\n                </button>\n                <input ng-model=\"pageName\" type=\"text\" class=\"form-control input-xs\" placeholder=\"page name\">\n            </form>\n\n            <form role=\"form\" ng-submit=\"renamePage(newPageName);newPageName = '';\">\n                <button class=\"btn btn-xs btn-white cms-btn-bottom\"\n                        type=\"submit\" style=\"position: absolute;right: 15px;\"\n                        ng-disabled=\"!newPageName\">\n                    Rename\n                </button>\n                <input ng-model=\"newPageName\" type=\"text\" class=\"form-control input-xs\" placeholder=\"page name\">\n            </form>\n\n            <form role=\"form\" ng-submit=\"onFileSelect(files);\">\n                <button class=\"btn btn-xs btn-white cms-btn-bottom\"\n                        type=\"submit\" style=\"position: absolute;right: 15px;\">\n                    Up\n                </button>\n                <input type=\"file\" ngf-select ng-model=\"files\"\n                       ngf-multiple=\"true\" name=\"file\" class=\"form-control input-xs\"\n                       placeholder=\"file upload\">\n            </form>\n\n        </div>\n    </div>\n\n    <h2>Sitemaps:</h2>\n\n    <div js-tree=\"treeConfig\" ng-model=\"tree\"\n         tree-events=\"changed:selectNode\"></div>\n</div>\n"

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _tpl = __webpack_require__(123);
	
	var _tpl2 = _interopRequireDefault(_tpl);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _module = angular.module('components.cmsEditState', ['ui.select']).directive('cmsEditState', directive);
	
	directive.$inject = ['cms'];
	
	function directive(cms) {
	    controller.$inject = [];
	    function controller() {
	        var vm = this;
	        vm.editState = cms.editState;
	        vm.modes = _.map(Enum.EditMode, function (v, k) {
	            return { label: k, value: v };
	        });
	        vm.onSelect = function (_ref) {
	            var value = _ref.value;
	
	            cms.changeEditMode(value);
	        };
	    }
	
	    return {
	        replace: true,
	        restrict: 'A',
	        scope: {},
	        bindToController: {},
	        template: _tpl2.default,
	        controllerAs: 'vm',
	        controller: controller
	    };
	}
	
	exports.default = _module.name;

/***/ },
/* 123 */
/***/ function(module, exports) {

	module.exports = "<div style=\"margin-top: 7px;cursor: pointer;\">\n    <ui-select data-ng-model=\"vm.editState.editMode\" theme=\"bootstrap\" on-select=\"vm.onSelect($item)\">\n        <ui-select-match placeholder=\"\">\n            {{$select.selected.label}}&nbsp;&nbsp;&nbsp;\n        </ui-select-match>\n        <ui-select-choices data-repeat=\"item.value as item in vm.modes | filterBy: ['label']: $select.search\">\n            <div ng-bind-html=\"item.label | highlight: $select.search\"></div>\n        </ui-select-choices>\n    </ui-select>\n</div>\n"

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	__webpack_require__(14);
	
	__webpack_require__(54);
	
	__webpack_require__(55);
	
	__webpack_require__(56);
	
	__webpack_require__(57);
	
	__webpack_require__(58);
	
	var _module2 = __webpack_require__(107);
	
	var _module3 = _interopRequireDefault(_module2);
	
	var _module4 = __webpack_require__(108);
	
	var _module5 = _interopRequireDefault(_module4);
	
	var _cmsList = __webpack_require__(125);
	
	var _cmsList2 = _interopRequireDefault(_cmsList);
	
	var _importService2 = __webpack_require__(127);
	
	var _importService3 = _interopRequireDefault(_importService2);
	
	var _exportService2 = __webpack_require__(129);
	
	var _exportService3 = _interopRequireDefault(_exportService2);
	
	var _tpl = __webpack_require__(131);
	
	var _tpl2 = _interopRequireDefault(_tpl);
	
	var _QueryBuilder = __webpack_require__(97);
	
	var _QueryBuilder2 = _interopRequireDefault(_QueryBuilder);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var _module = angular.module('components.cmsAdmin', ['ui.bootstrap', 'ngJsTree', 'ui.select', _module3.default, _module5.default]).factory('importService', _importService3.default).factory('exportService', _exportService3.default).directive('cmsAdmin', directive).directive('cmsList', _cmsList2.default);
	
	directive.$inject = ['cms', '$uibModal', '$timeout', 'formService', 'importService', 'exportService'];
	
	function directive(cms, $uibModal, $timeout, formService, importService, exportService) {
	    controller.$inject = [];
	    function controller() {
	        var vm = this;
	
	        vm.openSitemap = function () {
	            function modalCtrl($scope, $uibModalInstance) {
	                $scope.list = [];
	                $scope.cancel = function () {
	                    $uibModalInstance.dismiss('cancel');
	                };
	
	                $scope.tree = cms.getAdminList();
	
	                // $timeout(() => $scope.treeConfig.version++);
	
	                $scope.ignoreModelChanges = function () {
	                    return false;
	                };
	                $scope.treeConfig = {
	                    core: {
	                        themes: { name: 'proton', responsive: true },
	                        animation: true,
	                        check_callback: true
	                    },
	                    plugins: [],
	                    version: 1
	                };
	                $scope.get = _.get;
	
	                $scope.refresh = function () {
	                    var onlyChangePage = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];
	                    var changeAdminList = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
	
	                    $timeout(function () {
	                        if (!$scope.node) return;
	
	                        $scope.list.length = 0;
	                        $scope.loading = true;
	
	                        $scope.element = {};
	                        $timeout(function () {
	                            if (changeAdminList) {
	                                $scope.tree = cms.getAdminList();
	                                $scope.treeConfig.version++;
	                            }
	                        });
	
	                        var paramsBuilder = new _QueryBuilder2.default().part(false).limit($scope.page.limit).page($scope.page.currentPage).query($scope.node.query);
	                        _.each($scope.queries, function (q) {
	                            if (q.model) {
	                                var val = _.get(q.model, q.form[0].key);
	                                if (val && val.hasOwnProperty('_id') && !val._id) return;
	                                if (!val) return;
	
	                                if (q.form[0].key === 0 && _.endsWith(q.path, '.field')) q.path = q.path.replace('.field', '');
	
	                                if (q.fn) {
	                                    var result = q.fn(val, _.dropRight(q.path.split('\.'), 1).join('\.'), q.path.split('\.').pop());
	                                    if (result.populate) {
	                                        paramsBuilder.populate(result.populate);
	                                    } else if (result.$where) {
	                                        paramsBuilder.query(result);
	                                    } else {
	                                        paramsBuilder.query(_defineProperty({}, q.path, result));
	                                    }
	                                } else if (val.name !== 'None') {
	                                    paramsBuilder.query(_defineProperty({}, q.path, val._id || val));
	                                }
	                            }
	                        });
	                        if (!_.isEmpty($scope.search.text)) {
	                            paramsBuilder.search($scope.search.text);
	                        }
	
	                        console.time("loadElements");
	                        cms.loadElements($scope.node.type, function (list) {
	                            var _$scope$list;
	
	                            $scope.loading = false;
	                            console.timeEnd("loadElements");
	                            (_$scope$list = $scope.list).push.apply(_$scope$list, _toConsumableArray(list));
	                        }, paramsBuilder);
	
	                        // number of pages;
	                        if (!onlyChangePage) cms.countElements($scope.node.type, function (count) {
	                            $scope.page.size = count;
	                        }, paramsBuilder);
	                    });
	                };
	
	                $scope.watchs = [];
	
	                // onclick
	                $scope.selectNode = function (e, select) {
	                    var _node = JsonFn.clone(select && select.node ? select.node.original : null);
	                    $scope.node = _.get($scope.tree, _node.path);
	                    var config = getConfig();
	
	                    $scope.elementClass = cms.types[$scope.node.type].info.elementClass;
	
	                    $scope.showAs.type = 'table';
	                    if (config && config.showAs) $scope.showAs.type = config.showAs;
	
	                    $scope.watchs.forEach(function (listen) {
	                        return listen();
	                    });
	                    $scope.watchs.length = 0;
	
	                    $scope.queries = null;
	
	                    if (config && config.query) {
	
	                        $scope.queries = JsonFn.clone(config.query.filter(function (q) {
	                            return q.choice === 'builtIn';
	                        }).map(function (q) {
	                            return q.builtIn;
	                        }).map(function (k) {
	                            return _.find(cms.types[$scope.node.type].queries, { path: k }) || _.find(cms.types[$scope.node.type].paths, { path: k });
	                        }), true);
	
	                        $scope.queries.forEach(function (q, index) {
	                            q.form = !q.form ? [angular.copy(_.get(cms.types[$scope.node.type].form, q.pathInForm))] : [q.form];
	                            _.merge(q.form[0], { templateOptions: { class: 'col-xs-3' } });
	                            var listen = $scope.$watch('queries[' + index + '].model', function (m1, m2) {
	                                if (typeof m2 === 'undefined') return;
	                                $scope.refresh();
	                            }, true);
	                            $scope.watchs.push(listen);
	                        });
	                    }
	
	                    $scope.refresh();
	                };
	
	                $scope.remove = function (e) {
	                    _.remove($scope.list, e);
	                };
	                $scope.add = function () {
	                    cms.createElement($scope.node.type, {}, function (model) {
	                        formService.edit(model._id, $scope.node.type, function () {
	                            return $scope.refresh();
	                        });
	                    });
	                };
	                function getConfig() {
	                    return _.find(Types.Config.list, { type: $scope.node.type });
	                }
	
	                $scope.setting = function () {
	                    var config = getConfig();
	                    if (config) {
	                        formService.edit(config._id, 'Config', function () {
	                            return $scope.refresh(false, true);
	                        });
	                    } else {
	                        cms.getType('Config', null, function (_ref) {
	                            var _id = _ref._id;
	
	                            formService.edit(_id, 'Config', function () {
	                                return $scope.refresh(false, true);
	                            });
	                        }, { type: $scope.node.type });
	                    }
	                };
	
	                $scope.export = function () {
	                    exportService.start();
	                    //cms.exportAll();
	                };
	
	                $scope.import = function () {
	                    //cms.importAll();
	                    importService.start();
	                };
	
	                $scope.deleteAll = function () {
	                    cms.deleteElements($scope.node.type, function () {
	                        return $scope.refresh();
	                    });
	                };
	
	                $scope.search = { text: '' };
	                // search
	                $scope.$watch('search.text', function (tmpStr) {
	                    $scope.refresh();
	                }, true);
	
	                // pagination
	                $scope.page = {
	                    limit: 25,
	                    currentPage: 1
	                };
	
	                $scope.setItemsPerPage = function (num) {
	                    $scope.itemsPerPage = num;
	                    $scope.currentPage = 1; //reset to first page
	                };
	
	                // show as
	                $scope.showAs = {
	                    type: 'table'
	                };
	
	                $scope.getTitle = cms.getTitle;
	
	                $scope.selectElement = function (_id) {
	                    $timeout(function () {
	                        $scope.element._id = null;
	                        $timeout(function () {
	                            $scope.element._id = _id;
	                        });
	                    });
	                };
	            }
	
	            $uibModal.open({
	                animation: true,
	                template: _tpl2.default,
	                controller: modalCtrl,
	                windowClass: 'cms-window'
	            });
	        };
	
	        if (cms.data.online.autoOpenAdmin) vm.openSitemap();
	    }
	
	    return {
	        replace: true,
	        restrict: 'A',
	        scope: {},
	        bindToController: {},
	        template: '<a ng-click="vm.openSitemap()">Admin</a>',
	        controllerAs: 'vm',
	        controller: controller
	    };
	}
	
	exports.default = _module.name;

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _cmsList = __webpack_require__(126);
	
	var _cmsList2 = _interopRequireDefault(_cmsList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	directive.$inject = ['cms', 'formService'];
	
	function directive(cms, formService) {
	    controller.$inject = [];
	    function controller() {
	        var vm = this;
	    }
	
	    return {
	        replace: true,
	        restrict: 'A',
	        scope: {},
	        bindToController: {},
	        template: _cmsList2.default,
	        controllerAs: 'vm',
	        controller: controller
	    };
	}
	
	exports.default = directive;

/***/ },
/* 126 */
/***/ function(module, exports) {

	module.exports = ""

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _importService = __webpack_require__(128);
	
	var _importService2 = _interopRequireDefault(_importService);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function service($http, $timeout, cms, $uibModal) {
	    function start() {
	        function modalCtrl($scope, $uibModalInstance) {
	            $scope.refresh = function () {
	                $http.get('/cms-site-map').then(function (_ref) {
	                    var data = _ref.data;
	
	                    $scope.tree = [data.tree];
	                    $timeout(function () {
	                        return $scope.treeConfig.version++;
	                    });
	                });
	            };
	            $scope.refresh();
	
	            $scope.treeConfig = {
	                core: {
	                    themes: { name: 'proton', responsive: true },
	                    animation: true,
	                    check_callback: true
	                },
	                plugins: [],
	                version: 1
	            };
	
	            $scope.selectNode = function (e, select) {
	                var _node = JsonFn.clone(select && select.node ? select.node.original : null);
	                $scope.url = _node.path;
	            };
	
	            $scope.choose = function () {
	                $uibModalInstance.close($scope.url);
	            };
	
	            $scope.cancel = function () {
	                $uibModalInstance.dismiss('cancel');
	            };
	        }
	
	        function typesChooseCtrl($scope, $uibModalInstance, url) {
	            $scope.treeConfig = {
	                core: {
	                    themes: { name: 'proton', responsive: true },
	                    animation: true,
	                    check_callback: true
	                },
	                plugins: ["checkbox"],
	                version: 1
	            };
	
	            $scope.refresh = function () {
	                $http.post('/cms-import/types', { url: url }).then(function (_ref2) {
	                    var data = _ref2.data;
	
	                    $scope.tree = data.map(function (type) {
	                        return { text: type };
	                    });
	                    $timeout(function () {
	                        return $scope.treeConfig.version++;
	                    });
	                });
	            };
	
	            $scope.refresh();
	
	            $scope.selectNode = function (e, select) {
	                var _node = JsonFn.clone(select && select.node ? select.node.original : null);
	            };
	
	            $scope.choose = function () {
	                var _arr = $scope.treeInstance.jstree(true).get_checked();
	                _arr = _arr.map(function (id) {
	                    return $scope.treeInstance.jstree(true).get_node(id).text;
	                });
	                $uibModalInstance.close(_arr);
	            };
	
	            $scope.cancel = function () {
	                $uibModalInstance.dismiss('cancel');
	            };
	        }
	
	        var modalInstance = $uibModal.open({
	            size: 'lg',
	            animation: true,
	            template: _importService2.default,
	            controller: modalCtrl
	        });
	
	        modalInstance.result.then(function (_url) {
	            var modal2 = $uibModal.open({
	                size: 'lg',
	                animation: true,
	                template: _importService2.default,
	                controller: typesChooseCtrl,
	                resolve: { url: function url() {
	                        return _url;
	                    } }
	            });
	            modal2.result.then(function (types) {
	                cms.importAll(types, _url);
	            });
	        });
	    }
	
	    return {
	        start: start
	    };
	}
	
	exports.default = service;

/***/ },
/* 128 */
/***/ function(module, exports) {

	module.exports = "<div style=\"padding: 20px\">\n    <div class=\"panel panel-default\">\n        <div class=\"panel-body\">\n            <div js-tree=\"treeConfig\" ng-model=\"tree\"\n                 tree=\"treeInstance\"\n                 tree-events=\"changed:selectNode\"></div>\n        </div>\n    </div>\n    <br><br>\n    <button type=\"button\" class=\"btn btn-primary submit-button\" ng-click=\"choose()\">Choose</button>\n    <button type=\"button\" class=\"btn btn-primary\" ng-click=\"cancel()\">Cancel</button>\n</div>\n"

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _exportService = __webpack_require__(130);
	
	var _exportService2 = _interopRequireDefault(_exportService);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function service($http, $timeout, cms, $uibModal) {
	    function start() {
	        function modalCtrl($scope, $uibModalInstance, cms) {
	            $scope.data = {
	                types: []
	            };
	            $scope.types = Object.keys(cms.types).map(function (k) {
	                return { name: k, value: k };
	            });
	
	            $scope.choose = function () {
	                $uibModalInstance.close({ filename: $scope.filename, types: $scope.data.types });
	            };
	
	            $scope.cancel = function () {
	                $uibModalInstance.dismiss('cancel');
	            };
	        }
	
	        var modalInstance = $uibModal.open({
	            size: 'lg',
	            animation: true,
	            template: _exportService2.default,
	            controller: modalCtrl
	        });
	
	        modalInstance.result.then(function (_ref) {
	            var filename = _ref.filename;
	            var types = _ref.types;
	
	            cms.exportAll(filename, types);
	        });
	    }
	
	    return {
	        start: start
	    };
	}
	
	exports.default = service;

/***/ },
/* 130 */
/***/ function(module, exports) {

	module.exports = "<div style=\"padding: 20px\">\n    <form role=\"form\" class=\"form-horizontal\">\n        <div class=\"form-group\">\n            <label class=\"col-sm-12\">Filename:</label>\n            <div class=\"col-sm-12\"><input type=\"text\" ng-model=\"filename\"></div>\n        </div>\n        <div class=\"form-group\">\n            <label class=\"col-sm-12\">Select Types:</label>\n            <div class=\"col-sm-12\">\n                <ui-select data-ng-model=\"data.types\" multiple theme=\"bootstrap\">\n                    <ui-select-match placeholder=\"Choose company\">{{$item.name}}</ui-select-match>\n                    <ui-select-choices\n                            data-repeat=\"item.value as item in types | filterBy: ['name']: $select.search\">\n                        <div ng-bind-html=\"item.name | highlight: $select.search\"></div>\n                    </ui-select-choices>\n                </ui-select>\n            </div>\n        </div>\n    </form>\n    <br><br>\n    <button type=\"button\" class=\"btn btn-primary submit-button\" ng-click=\"choose()\">Choose</button>\n    <button type=\"button\" class=\"btn btn-primary\" ng-click=\"cancel()\">Cancel</button>\n</div>\n"

/***/ },
/* 131 */
/***/ function(module, exports) {

	module.exports = "<div class=\"cms-wrapper animated fadeInRight cms-sidebar cms\">\n    <button type=\"button\" class=\"btn btn-sm btn-white cms-close-position\"\n            ng-click=\"cancel()\">\n        <i class=\"fa fa-times\"></i>\n    </button>\n\n    <br>\n    <div class=\"row\">\n        <div class=\"col-xs-3 cms-panel\">\n            <div class=\"panel panel-primary\">\n                <div class=\"panel-heading\">Types</div>\n                <div class=\"panel-body\">\n                    <div js-tree=\"treeConfig\" ng-model=\"tree\"\n                         tree-events=\"changed:selectNode\" tree=\"treeInstance\"></div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-xs-9 cms-panel\">\n            <div class=\"panel panel-primary\">\n                <div class=\"panel-heading\">\n                    <div class=\"cms-admin-right-panel\">\n                        <label style=\"color: white\"> Show : </label>\n\n                        <ui-select style=\"min-width: 50px;margin-left: 10px;margin-right: 10px;\"\n                                   class=\"cms-select\" data-ng-model=\"page.limit\" theme=\"bootstrap\"\n                                   on-select=\"refresh()\">\n                            <ui-select-match placeholder=\"\">{{$select.selected}}&nbsp;&nbsp;</ui-select-match>\n                            <ui-select-choices data-repeat=\"item in [10,25,50,100,200]\">{{item}}</ui-select-choices>\n                        </ui-select>\n\n                        <ui-select style=\"min-width: 60px;margin-left: 10px;margin-right: 10px;\"\n                                   class=\"cms-select\" data-ng-model=\"showAs.type\" theme=\"bootstrap\"\n                                   on-select=\"refresh()\">\n                            <ui-select-match placeholder=\"\">\n                                {{$select.selected.label}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</ui-select-match>\n                            <ui-select-choices\n                                    data-repeat=\"item.value as item in [{value:'list',label:'List'},{value:'table',label:'Table'},{value:'element',label:'Element'}]\">\n                                {{item.label}}\n                            </ui-select-choices>\n                        </ui-select>\n\n                        <button class=\"btn btn-white btn-xs\" style=\"margin-right: 10px;\"\n                                ng-click=\"deleteAll()\">\n                            Delete all\n                        </button>\n\n                        <button class=\"btn btn-white btn-xs\" style=\"margin-right: 10px;\" ng-click=\"import()\">\n                            Import\n                        </button>\n\n                        <button class=\"btn btn-white btn-xs\" style=\"margin-right: 10px;\" ng-click=\"export()\">\n                            Export\n                        </button>\n\n                        <button class=\"btn btn-white btn-xs\" style=\"margin-right: 10px;\"\n                                ng-click=\"setting()\">\n                            Setting\n                        </button>\n\n                        <button class=\"btn btn-white btn-xs\" ng-click=\"add()\">\n                            Add\n                        </button>\n\n                    </div>\n\n                    <input type=\"text\" class=\"form-control input-xs\"\n                           style=\"margin-left: 10px;width: 100px;display: inline-block;\"\n                           ng-model=\"search.text\" ng-model-options=\"{debounce: 300}\" placeholder=\"search ...\">\n\n                    <div ng-if=\"queries && queries.length > 0\">\n                        <hr style=\"margin-top: 10px;margin-bottom: 5px;\">\n\n                        <div class=\"cms-admin-heading-form\" style=\"height: 60px;\">\n                            <formly-form ng-repeat=\"query in queries\" model=\"query.model\" fields=\"query.form\"\n                                         form=\"form\"\n                                         options=\"options\">\n                            </formly-form>\n                        </div>\n                    </div>\n\n                </div>\n                <div class=\"panel-body\" ng-if=\"node\">\n\n                    <div style=\"width: 100%;overflow-x: auto\" ng-if=\"showAs.type === 'table'\">\n                        <table class=\"table cms-admin-table\">\n                            <thead>\n                            <tr>\n                                <th ng-repeat=\"col in node.columns track by $index\" ng-bind=\"col.label\"></th>\n                                <th>Edit</th>\n                            </tr>\n                            </thead>\n                            <tbody>\n                            <tr ng-repeat=\"element in list track by $index\">\n                                <td ng-repeat=\"col in node.columns track by $index\">\n                                <span cms-direct-editable=\"model.{{col.value}}\"\n                                      cms-value=\"element[col.value]\"\n                                      cms-ref=\"{{element._id}}\"\n                                      cms-type=\"{{node.type}}\"></span>\n                                </td>\n                                <td>\n                                    <div cms-editor=\"{ref: element._id, type: node.type}\"\n                                         cms-remove=\"remove(element)\"></div>\n                                </td>\n                            </tr>\n                            </tbody>\n                        </table>\n                    </div>\n\n                    <div ng-if=\"loading\">\n                        <img src=\"/build/images/ajax-loader.gif\">\n                    </div>\n\n                    <div class=\"cms-panel-list-content\" ng-if=\"showAs.type === 'list'\">\n                        <div ng-repeat=\"element in list track by $index\"\n                             ng-class=\"elementClass\"\n                             cms-element=\"{ref: element._id, type: node.type, containers: {}}\"\n                             dnd-moved=\"remove(element)\"\n                             inline=\"false\"></div>\n                    </div>\n\n                    <div class=\"\" ng-if=\"showAs.type === 'element'\">\n                        <button class=\"btn cms-btn btn-primary btn-outline btn-xs\" style=\"margin-right: 10px;\"\n                                ng-repeat=\"e in list track by $index\"\n                                ng-click=\"selectElement(e._id);\">\n                            {{getTitle(node.type, e._id)}}\n                        </button>\n                        <br><br>\n\n                        <div ng-if=\"element._id\"\n                             cms-element=\"{ref: element._id, type: node.type, containers: {}}\"\n                             inline=\"false\"></div>\n                    </div>\n\n                    <div class=\"clearfix\"></div>\n                    <uib-pagination ng-show=\"page.size > 1\" total-items=\"page.size\" ng-model=\"page.currentPage\"\n                                    class=\"pagination-sm\"\n                                    items-per-page=\"page.limit\"\n                                    ng-change=\"refresh(true)\"></uib-pagination>\n\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>\n"

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _common = __webpack_require__(93);
	
	var _common2 = _interopRequireDefault(_common);
	
	var _cmsNav = __webpack_require__(133);
	
	var _cmsNav2 = _interopRequireDefault(_cmsNav);
	
	var _module2 = __webpack_require__(124);
	
	var _module3 = _interopRequireDefault(_module2);
	
	var _module4 = __webpack_require__(104);
	
	var _module5 = _interopRequireDefault(_module4);
	
	var _module6 = __webpack_require__(120);
	
	var _module7 = _interopRequireDefault(_module6);
	
	var _module8 = __webpack_require__(122);
	
	var _module9 = _interopRequireDefault(_module8);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _module = angular.module('components.cmsNav', [_common2.default, _module3.default, _module5.default, _module7.default, _module9.default]).directive('cmsNav', _cmsNav2.default);
	
	exports.default = _module.name;

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _cmsNav = __webpack_require__(134);
	
	var _cmsNav2 = _interopRequireDefault(_cmsNav);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	directive.$inject = ['cms', '$timeout'];
	function directive(cms, $timeout) {
	    function link(scope, element, attr) {
	        var menu = cms.data.online.menu;
	
	        $timeout(function () {
	            $('.main-nav').css('top', menu.top);
	            $('.main-nav').css('right', menu.right);
	        }, 400);
	
	        $('body').css('padding-top', menu.bodyPaddingTop);
	        if (menu.inverse) $(element).find('.cms-menu').addClass('navbar-inverse');
	        if (menu.bottom) $(element).find('.cms-menu').removeClass('navbar-fixed-top').addClass('navbar-fixed-bottom');
	
	        var vm = scope.vm;
	        vm.toggleContainer = function () {
	            cms.editState.showContainerEdit = !cms.editState.showContainerEdit;
	        };
	
	        $(element).find('.cms-types-dropdown').on('show.bs.dropdown', function () {
	            $('body').addClass('dnd-mode');
	        });
	
	        $(element).find('.cms-types-dropdown').on('hide.bs.dropdown', function () {
	            $('body').removeClass('dnd-mode');
	        });
	    }
	
	    return {
	        replace: false,
	        restrict: 'A',
	        scope: {},
	        bindToController: {},
	        template: _cmsNav2.default,
	        controller: function controller() {},
	        controllerAs: 'vm',
	        link: link
	    };
	}
	
	exports.default = directive;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 134 */
/***/ function(module, exports) {

	module.exports = "<div class=\"cms\">\n    <nav role=\"navigation\" class=\"navbar navbar-fixed-top navbar-default cms-menu\">\n        <div class=\"container\">\n            <div class=\"navbar-header\">\n                <button type=\"button\" data-toggle=\"collapse\" data-target=\"#dropdown_menu\" aria-expanded=\"false\"\n                        aria-controls=\"navbar\" class=\"navbar-toggle collapsed\"><span\n                        class=\"sr-only\">Toggle navigation</span><span class=\"icon-bar\"></span><span\n                        class=\"icon-bar\"></span><span\n                        class=\"icon-bar\"></span></button>\n                <a href=\"#\" class=\"navbar-brand\">Cms Mon</a></div>\n            <div id=\"dropdown_menu\" class=\"collapse navbar-collapse\">\n                <ul class=\"nav navbar-nav\">\n                    <li class=\"dropdown cms-types-dropdown\">\n                        <a href=\"#\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\"\n                                            class=\"dropdown-toggle\">Types<span class=\"caret\"></span></a>\n                        <ul role=\"menu\" cms-types=\"\" class=\"dropdown-menu\"></ul>\n                    </li>\n                    <li><a cms-admin>Admin</a></li>\n                    <li><a href=\"#\" cms-sitemap>Sitemap</a></li>\n                </ul>\n                <ul class=\"nav navbar-nav navbar-right\">\n                    <li>\n                        <div cms-edit-state></div>\n                    </li>\n                    <li><button class=\"btn btn-default navbar-btn\"\n                                style=\"margin-left: 10px\"\n                                ng-click=\"vm.toggleContainer()\">Container</button></li>\n                </ul>\n            </div>\n        </div>\n    </nav>\n</div>"

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map