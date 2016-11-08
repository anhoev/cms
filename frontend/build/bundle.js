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
	
	var _common = __webpack_require__(100);
	
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
	
	        if (key === '$order') {
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

	module.exports = (__webpack_require__(2))(44);

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(329);

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(61);

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(77);

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(152);

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(328);

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(327);

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(226);

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _module = __webpack_require__(13);
	
	var _module2 = _interopRequireDefault(_module);
	
	var _module3 = __webpack_require__(158);
	
	var _module4 = _interopRequireDefault(_module3);
	
	var _module5 = __webpack_require__(161);
	
	var _module6 = _interopRequireDefault(_module5);
	
	var _module7 = __webpack_require__(176);
	
	var _module8 = _interopRequireDefault(_module7);
	
	var _module9 = __webpack_require__(178);
	
	var _module10 = _interopRequireDefault(_module9);
	
	var _module11 = __webpack_require__(180);
	
	var _module12 = _interopRequireDefault(_module11);
	
	var _module13 = __webpack_require__(188);
	
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
	
	var _tpl = __webpack_require__(99);
	
	var _tpl2 = _interopRequireDefault(_tpl);
	
	var _common = __webpack_require__(100);
	
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
	        var _elementController$ge = elementController.getElement(),
	            type = _elementController$ge.type,
	            ref = _elementController$ge.ref;
	
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
	
	function cmsDirectEditableDirective(cms, $filter, $timeout) {
	
	    function link(scope, element, attrs, elementController) {
	        var vm = scope.vm;
	
	        // resolve type and ref
	
	        var type = vm.type,
	            ref = vm.ref;
	
	
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
	        }, true);
	
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
	
	        var _ref = vm.element ? vm.element : elementController.getElement(),
	            type = _ref.type,
	            ref = _ref.ref;
	
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

	module.exports = (__webpack_require__(2))(19);

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
	
	var _apiCheck2 = __webpack_require__(52);
	
	var _apiCheck3 = _interopRequireDefault(_apiCheck2);
	
	__webpack_require__(53);
	
	__webpack_require__(54);
	
	__webpack_require__(58);
	
	__webpack_require__(59);
	
	__webpack_require__(60);
	
	__webpack_require__(61);
	
	__webpack_require__(62);
	
	__webpack_require__(63);
	
	__webpack_require__(64);
	
	__webpack_require__(66);
	
	var _selectize = __webpack_require__(67);
	
	var _selectize2 = _interopRequireDefault(_selectize);
	
	__webpack_require__(68);
	
	var _tinycolor2 = __webpack_require__(69);
	
	var _tinycolor3 = _interopRequireDefault(_tinycolor2);
	
	__webpack_require__(70);
	
	__webpack_require__(71);
	
	__webpack_require__(72);
	
	var _codemirror = __webpack_require__(73);
	
	var _codemirror2 = _interopRequireDefault(_codemirror);
	
	__webpack_require__(74);
	
	__webpack_require__(75);
	
	__webpack_require__(76);
	
	__webpack_require__(77);
	
	__webpack_require__(78);
	
	__webpack_require__(79);
	
	__webpack_require__(80);
	
	__webpack_require__(81);
	
	__webpack_require__(82);
	
	__webpack_require__(83);
	
	__webpack_require__(84);
	
	__webpack_require__(85);
	
	__webpack_require__(86);
	
	__webpack_require__(87);
	
	__webpack_require__(88);
	
	var _tern2 = __webpack_require__(89);
	
	var _tern3 = _interopRequireDefault(_tern2);
	
	__webpack_require__(90);
	
	__webpack_require__(91);
	
	__webpack_require__(92);
	
	__webpack_require__(93);
	
	__webpack_require__(94);
	
	__webpack_require__(95);
	
	__webpack_require__(96);
	
	__webpack_require__(97);
	
	__webpack_require__(98);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	window.apiCheck = _apiCheck3.default;
	apiCheck.globalConfig.disabled = true;
	
	window.Selectize = _selectize2.default;
	
	window.tinycolor = _tinycolor3.default;
	
	window.CodeMirror = _codemirror2.default;
	
	window.tern = _tern3.default;
	
	
	var _module = angular.module('components.formly', ['formly', 'formlyBootstrap', 'ngJsTree', 'ui.select', 'ngSanitize', 'angular.filter', 'ui.codemirror', 'color.picker', 'dndLists', 'uiSwitch', 'selectize']).config(_config2.default).constant('size', { label: 'col-sm-2', input: 'col-sm-10' });
	
	exports.default = _module.name;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(49);

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
	
	var _code = __webpack_require__(27);
	
	var _code2 = _interopRequireDefault(_code);
	
	var _code3 = __webpack_require__(28);
	
	var _code4 = _interopRequireDefault(_code3);
	
	var _array = __webpack_require__(34);
	
	var _array2 = _interopRequireDefault(_array);
	
	var _arrayTemplate = __webpack_require__(35);
	
	var _arrayTemplate2 = _interopRequireDefault(_arrayTemplate);
	
	var _table = __webpack_require__(36);
	
	var _table2 = _interopRequireDefault(_table);
	
	var _tableTemplate = __webpack_require__(37);
	
	var _tableTemplate2 = _interopRequireDefault(_tableTemplate);
	
	var _selectType = __webpack_require__(38);
	
	var _selectType2 = _interopRequireDefault(_selectType);
	
	var _selectElement = __webpack_require__(39);
	
	var _selectElement2 = _interopRequireDefault(_selectElement);
	
	var _selectProperty = __webpack_require__(40);
	
	var _selectProperty2 = _interopRequireDefault(_selectProperty);
	
	var _selectChildProperty = __webpack_require__(41);
	
	var _selectChildProperty2 = _interopRequireDefault(_selectChildProperty);
	
	var _selectFn = __webpack_require__(42);
	
	var _selectFn2 = _interopRequireDefault(_selectFn);
	
	var _select = __webpack_require__(43);
	
	var _select2 = _interopRequireDefault(_select);
	
	var _selectWhole = __webpack_require__(44);
	
	var _selectWhole2 = _interopRequireDefault(_selectWhole);
	
	var _multiSelect = __webpack_require__(45);
	
	var _multiSelect2 = _interopRequireDefault(_multiSelect);
	
	var _bsGridSelect = __webpack_require__(46);
	
	var _bsGridSelect2 = _interopRequireDefault(_bsGridSelect);
	
	var _bsGridSelect3 = __webpack_require__(47);
	
	var _bsGridSelect4 = _interopRequireDefault(_bsGridSelect3);
	
	var _checkbox = __webpack_require__(48);
	
	var _checkbox2 = _interopRequireDefault(_checkbox);
	
	var _saveContainersController = __webpack_require__(49);
	
	var _saveContainersController2 = _interopRequireDefault(_saveContainersController);
	
	var _recursive = __webpack_require__(50);
	
	var _recursive2 = _interopRequireDefault(_recursive);
	
	var _recursive3 = __webpack_require__(51);
	
	var _recursive4 = _interopRequireDefault(_recursive3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
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
	        template: '\n        <div>\n          <input ng-if="!formState.readOnly" class="form-control" ng-model="model[options.key]" >\n          <p ng-if="formState.readOnly" class="form-control-static">{{model[options.key]}}</p>\n        </div>\n        ',
	        wrapper: ['bootstrapLabel', 'bootstrapHasError'],
	        overwriteOk: true
	    });
	
	    config.setWrapper({
	        name: 'checkboxWrapper',
	        template: '\n        <div ng-if="!to.class" class="form-group"><div class="col-sm-offset-2 col-sm-10"><formly-transclude></formly-transclude></div></div>\n        <div ng-if="to.class" class="form-group"><div ng-class="[to.class]"><formly-transclude></formly-transclude></div></div>\n        '
	    });
	
	    config.setType({
	        name: 'checkbox',
	        template: '\n        <div class="checkbox">\n            <label style="padding-left: 0px;">\n                <switch ng-model="model[options.key]" class="green "></switch>\n            </label>\n            <span style="position: absolute">\n                {{to.label}}\n                {{to.required ? \'*\' : \'\'}}\n            </span>\n        </div>\n',
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
	        controller: _tree2.default,
	        wrapper: ['bootstrapLabel', 'bootstrapHasError']
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
	        controller: function controller($scope) {},
	        overwriteOk: true,
	        wrapper: ['bootstrapLabel', 'bootstrapHasError']
	    });
	
	    config.setType({
	        name: 'select-ref-static',
	        template: _select2.default,
	        controller: function controller($scope, cms) {
	            var type = $scope.options.templateOptions.Type;
	            $scope.to.options = [];
	            cms.loadElements(type, function () {
	                var _$scope$to$options;
	
	                (_$scope$to$options = $scope.to.options).push.apply(_$scope$to$options, _toConsumableArray(_.map(Types[type].list, function (e) {
	                    var value = cms.getTitle(type, e._id);
	                    return {
	                        value: value,
	                        name: $scope.to.labelProp ? e[$scope.to.labelProp] : value
	                    };
	                })));
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

	module.exports = "<div js-tree=\"treeConfig\"\n     ng-model=\"tree\"\n     tree=\"data.treeInstance\"\n     tree-events=\"check_node:check;uncheck_node:check;\"></div>\n"

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
	function controller($scope, $timeout) {
	    $scope.tree = $scope.options.templateOptions.options;
	
	    $scope.treeConfig = {
	        core: {
	            themes: { name: 'proton', responsive: true },
	            animation: true,
	            check_callback: true
	        },
	        plugins: ["checkbox"],
	        checkbox: {
	            tie_selection: false
	        },
	        version: 1
	    };
	
	    $timeout(function () {
	        return $scope.treeConfig.version++;
	    });
	
	    $scope.data = {};
	
	    $scope.check = function () {
	        $timeout(function () {
	            var _arr = $scope.data.treeInstance.jstree(true).get_checked();
	            _arr = _arr.map(function (id) {
	                return $scope.data.treeInstance.jstree(true).get_node(id).text;
	            });
	            $scope.model[$scope.options.key] = _arr;
	        });
	    };
	}
	
	exports.default = controller;

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = "<selectize config='config' options='models' ng-model=\"_model\"></selectize>"

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _QueryBuilder = __webpack_require__(26);
	
	var _QueryBuilder2 = _interopRequireDefault(_QueryBuilder);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	controller.$inject = ['$scope', 'cms', '$timeout'];
	
	function controller($scope, cms, $timeout) {
	
	    // resolve
	    var type = $scope.options.templateOptions.Type;
	    $scope.models = [];
	
	    var labelProp = $scope.to.labelProp;
	
	    $scope.config = {
	        plugins: ['remove_button'],
	        dropdownParent: 'body',
	        valueField: '_id',
	        labelField: labelProp,
	        searchField: [labelProp],
	        onChange: function onChange(val) {
	            $timeout(function () {
	                if (!$scope.to.multiple) {
	                    $scope.model[$scope.options.key] = _.find($scope.models, { _id: val });
	                } else {
	                    $scope.model[$scope.options.key] = val.map(function (_id) {
	                        return _.find($scope.models, { _id: _id });
	                    });
	                }
	            });
	        },
	        onInitialize: function onInitialize(selectize) {
	            $scope.selectize = selectize;
	        }
	    };
	
	    if ($scope.to.async) {
	        $scope.config.load = function (query, callback) {
	            var queryBuilder = new _QueryBuilder2.default().limit(100).query({ _textIndex: $scope.to.makeRegex ? $scope.to.makeRegex(query) : new RegExp(query, 'i') });
	            cms.loadElements(type, function (list) {
	                // $scope.models = list;
	                callback(list);
	            }, queryBuilder);
	        };
	    } else {
	        cms.loadElements(type, function () {
	            var _$scope$models;
	
	            (_$scope$models = $scope.models).push.apply(_$scope$models, _toConsumableArray(Types[type].list));
	        });
	    }
	
	    if (!$scope.to.multiple) $scope.config.maxItems = 1;
	
	    if ($scope.to.sortField) {
	        $scope.config.sortField = $scope.to.sortField;
	        $scope.config.score = function (search) {
	            return function (item) {
	                if (item[$scope.to.labelProp].toLowerCase().indexOf(search.toLowerCase()) === -1) return 0;
	                return 1000000 - item[$scope.to.sortField];
	            };
	        };
	    }
	
	    $scope.$watch('model[\'' + $scope.options.key + '\']', function () {
	        if ($scope.model[$scope.options.key] && $scope.model[$scope.options.key]._id) {
	            $scope._model = $scope.model[$scope.options.key]._id;
	            if (!_.includes($scope.models.map(function (obj) {
	                return obj._id;
	            }), $scope.model[$scope.options.key]._id)) {
	                $scope.models.push($scope.model[$scope.options.key]);
	            }
	        } else if (Array.isArray($scope.model[$scope.options.key]) && $scope.model[$scope.options.key][0]._id) {
	            $scope._model = $scope.model[$scope.options.key].map(function (m) {
	                return m._id;
	            });
	        } else if (!$scope.model[$scope.options.key]) {
	            $scope._model = '';
	            if ($scope.selectize) $scope.selectize.clear();
	        }
	    });
	}
	
	exports.default = controller;

/***/ },
/* 26 */
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
	        key: 'lean',
	        value: function lean() {
	            this._lean = true;
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
	            if (this._lean) result.lean = true;
	
	            return result;
	        }
	    }]);
	
	    return QueryBuilder;
	}();
	
	exports.default = QueryBuilder;

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = "<div class=\"form-group\">\n    <label class=\"control-label {{size.label}}\" uib-tooltip='{{to.tooltip}}'>\n        {{to.label}}\n    </label>\n    <div class=\"{{size.input}}\">\n\n        <button type=\"button\"\n                class=\"btn btn-white btn-xs\"\n                style=\"margin-top: 7px;\"\n                ng-click=\"showCode(); selectTab();\">\n            {{!show? 'show code': 'hide code'}}\n        </button>\n        <span class=\"label label-danger\" ng-show=\"hasError\">The code has error</span>\n    </div>\n\n</div>\n<ui-codemirror ng-show=\"show\"\n                     ng-model=\"_model\"\n                     ui-codemirror-opts=\"editorOptions\"\n                     ui-codemirror=\"{ onLoad : codemirrorLoaded }\"\n                     ui-refresh='refresh'>\n</ui-codemirror>\n<br>"

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _jshint = __webpack_require__(29);
	
	var _ecma = __webpack_require__(30);
	
	var _ecma2 = _interopRequireDefault(_ecma);
	
	var _ecma3 = __webpack_require__(31);
	
	var _ecma4 = _interopRequireDefault(_ecma3);
	
	var _cmsDef = __webpack_require__(32);
	
	var _cmsDef2 = _interopRequireDefault(_cmsDef);
	
	__webpack_require__(33);
	
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
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(339);

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(355);

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(4);

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(5);

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(6);

/***/ },
/* 34 */
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
/* 35 */
/***/ function(module, exports) {

	module.exports = "<div style=\"min-height: 20px;position: relative;\"\n     ng-repeat=\"element in model[options.key] track by $index\"\n     ng-init=\"itemOptions = copyItemOptions(to.field);_formState = createFormState($index)\">\n    <button type=\"button\" class=\"btn btn-xs btn-white\"\n            style=\"position: absolute;right: 0px;z-index: 10;\"\n            ng-click=\"model[options.key].splice($index, 1)\">\n        <i class=\"fa fa-trash-o\"></i>\n    </button>\n    <formly-field options=\"itemOptions\"\n                  model=\"model[options.key]\"\n                  form=\"form\"\n                  form-state=\"_formState\"\n                  index=\"$index\">\n    </formly-field>\n</div>\n<div class=\"form-group\">\n    <div class=\"col-sm-offset-2 col-sm-10\">\n        <button type=\"button\" class=\"btn btn-white btn-xs\"\n                ng-click=\"addNew()\" style=\"z-index: 1;\">{{to.btnText}}\n        </button>\n    </div>\n</div>"

/***/ },
/* 36 */
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
/* 37 */
/***/ function(module, exports) {

	module.exports = "<table class=\"table cms-admin-table cms-table-section\">\n    <thead>\n    <tr>\n        <th ng-repeat=\"col in to.fields track by $index\"\n            ng-style=\"{width:to.widths ? to.widths.split(' ')[$index] + '%':'initial'}\">{{col.templateOptions.label}}\n        </th>\n        <th>X</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr ng-repeat=\"element in model[options.key] track by $index\"\n        ng-init=\"_index = $index;_formState = createFormState($index)\">\n        <td ng-repeat=\"field in to.fields\"\n            ng-init=\"_field = copyItemOptions(field)\">\n            <formly-field options=\"_field\"\n                          model=\"model[options.key][_index]\"\n                          form=\"form\"\n                          form-state=\"_formState\">\n            </formly-field>\n        </td>\n        <td>\n            <button type=\"button\" class=\"btn btn-xs btn-white\"\n                    tabIndex=\"-1\"\n                    ng-click=\"model[options.key].splice(_index, 1)\">\n                <i class=\"fa fa-trash-o\"></i>\n            </button>\n        </td>\n    </tr>\n    </tbody>\n</table>\n\n<button type=\"button\" class=\"btn btn-white btn-xs\"\n        ng-click=\"addNew()\" style=\"z-index: 1;\">{{to.btnText}}\n</button>"

/***/ },
/* 38 */
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
/* 39 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	controller.$inject = ['$scope'];
	
	function controller($scope) {
	    var options = $scope.to.options = [];
	    var _$scope$formState = $scope.formState,
	        path = _$scope$formState.path,
	        model = _$scope$formState.model;
	
	    path = _.dropRight(path.split('\.')).join('.');
	
	    var _$get = _.get(model, path),
	        containers = _$get.containers;
	
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
/* 40 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	controller.$inject = ['$scope', 'cms'];
	
	function controller($scope, cms) {
	    debugger;
	    var _$scope$formState = $scope.formState,
	        path = _$scope$formState.path,
	        model = _$scope$formState.model;
	
	    path = _.dropRight(path.split('\.')).join('.');
	
	    var Type = cms.data.types[_.get(model, path).BindType];
	    $scope.to.options = _.map(Type.columns, function (v) {
	        return { name: v, value: v };
	    });
	}
	
	exports.default = controller;

/***/ },
/* 41 */
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
/* 42 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	controller.$inject = ['$scope', 'cms'];
	
	function controller($scope, cms) {
	    var _$scope$formState = $scope.formState,
	        path = _$scope$formState.path,
	        model = _$scope$formState.model;
	
	    path = _.dropRight(path.split('\.')).join('.');
	
	    var _$get = _.get(model, path),
	        BindType = _$get.BindType;
	
	    var Type = cms.data.types[BindType];
	    $scope.to.options = _.map(Type.fn, function (v, k) {
	        return { name: k, value: k };
	    });
	}
	
	exports.default = controller;

/***/ },
/* 43 */
/***/ function(module, exports) {

	module.exports = "<selectize\n        config=\"{\n            plugins: ['remove_button'],\n            dropdownParent: 'body',\n            valueField: 'value',\n            labelField: 'name',\n            searchField: ['name'],\n            maxItems:to.multiple ? 50:1\n        }\" options='to.options' ng-model=\"model[options.key]\"></selectize>"

/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports = "<ui-select data-ng-model=\"model[options.key]\" theme=\"bootstrap\" on-select=\"onSelect()\" append-to-body=\"true\">\n    <ui-select-match allow-clear=\"true\" placeholder=\"{{to.placeholder}}\">\n        {{getLabel? getLabel($select.selected): $select.selected[to.labelProp]}}\n    </ui-select-match>\n    <ui-select-choices data-repeat=\"item in to.options | filterBy: [to.labelProp]: $select.search\">\n        <div ng-bind-html=\"getLabel? getLabel(item): item[to.labelProp] | highlight: $select.search\"></div>\n    </ui-select-choices>\n</ui-select>\n\n"

/***/ },
/* 45 */
/***/ function(module, exports) {

	module.exports = "<ui-select multiple data-ng-model=\"model[options.key]\" theme=\"bootstrap\" append-to-body=\"true\">\n    <ui-select-match placeholder=\"{{to.placeholder}}\">\n        {{$item.name}}\n    </ui-select-match>\n    <ui-select-choices data-repeat=\"item.value as item in to.options | filterBy: ['name']: $select.search\">\n        <div ng-bind-html=\"item.name | highlight: $select.search\"></div>\n    </ui-select-choices>\n</ui-select>"

/***/ },
/* 46 */
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
/* 47 */
/***/ function(module, exports) {

	module.exports = "<div class=\"ui-select-container ui-select-multiple ui-select-bootstrap dropdown form-control\">\n    <span>\n        <button type=\"button\" class=\"ui-select-match-item btn btn-default btn-xs\"\n                style=\"min-width: 30px;\"\n                ng-click=\"model[options.key].splice($index,1)\"\n                ng-repeat=\"item in model[options.key] track by $index\">\n            {{item}}\n        </button>\n    </span>\n    <div class=\"btn-group\" uib-dropdown>\n        <input class=\"ui-select-search input-xs\" uib-dropdown-toggle>\n        <ul uib-dropdown-menu role=\"menu\" aria-labelledby=\"single-button\">\n            <li role=\"menuitem\" ng-repeat=\"option in to.options track by $index\">\n                <a ng-click=\"add(option.value)\">{{option.name}}</a>\n            </li>\n        </ul>\n    </div>\n</div>"

/***/ },
/* 48 */
/***/ function(module, exports) {

	module.exports = "<div class=\"checkbox\">\n\t<label>\n\t\t<input type=\"checkbox\"\n           class=\"formly-field-checkbox\"\n\t\t       ng-model=\"model[options.key]\">\n\t\t{{to.label}}\n\t\t{{to.required ? '*' : ''}}\n\t</label>\n</div>\n"

/***/ },
/* 49 */
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
/* 50 */
/***/ function(module, exports) {

	module.exports = "<formly-form fields=\"_fields\"\n             model=\"_model\"\n             options=\"{formState:_formState}\"\n             form=\"form\">\n</formly-form>"

/***/ },
/* 51 */
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
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(51);

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(21);

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(55);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(57)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../css-loader/index.js!./angular-ui-switch.css", function() {
				var newContent = require("!!./../css-loader/index.js!./angular-ui-switch.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(56)();
	// imports
	
	
	// module
	exports.push([module.id, ".switch {\n  background: #fff;\n  border: 1px solid #dfdfdf;\n  position: relative;\n  display: inline-block;\n  box-sizing: content-box;\n  overflow: visible;\n  width: 52px;\n  height: 30px;\n  padding: 0px;\n  margin: 0px;\n  border-radius: 20px;\n  cursor: pointer;\n  box-shadow: rgb(223, 223, 223) 0px 0px 0px 0px inset;\n  transition: 0.3s ease-out all;\n  -webkit-transition: 0.3s ease-out all;\n  top: -1px;\n}\n/*adding a wide width for larger switch text*/\n.switch.wide {\n  width:80px;\n}\n.switch small {\n  background: #fff;\n  border-radius: 100%;\n  box-shadow: 0 1px 3px rgba(0,0,0,0.4);\n  width: 30px;\n  height: 30px;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  transition: 0.3s ease-out all;\n  -webkit-transition: 0.3s ease-out all;\n}\n.switch.checked {\n  background: rgb(100, 189, 99);\n  border-color: rgb(100, 189, 99);\n}\n.switch.checked small {\n  left: 22px;\n}\n/*wider switch text moves small further to the right*/\n.switch.wide.checked small {\n  left:52px;\n}\n/*styles for switch-text*/\n.switch .switch-text {\n  font-family:Arial, Helvetica, sans-serif;\n  font-size:13px;\n}\n\n.switch .off {\n  display:block;\n  position: absolute;\n  right: 10%;\n  top: 25%;\n  z-index: 0;\n  color:#A9A9A9;\n}\n\n.switch .on {\n  display:none;\n   z-index: 0;\n  color:#fff;\n  position: absolute;\n  top: 25%;\n  left: 9%;\n}\n\n.switch.checked .off {\n  display:none;\n}\n\n.switch.checked .on {\n  display:block;\n\n}\n\n.switch.disabled {\n  opacity: .50;\n  cursor: not-allowed;\n}\n", ""]);
	
	// exports


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(24);

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(25);

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(52);

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(53);

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(26);

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(27);

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(46);

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(47);

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(65);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(57)(content, {});
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
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(56)();
	// imports
	
	
	// module
	exports.push([module.id, "/*!\n * ui-select\n * http://github.com/angular-ui/ui-select\n * Version: 0.18.1 - 2016-07-10T00:30:49.466Z\n * License: MIT\n */.ui-select-highlight{font-weight:700}.ui-select-offscreen{clip:rect(0 0 0 0)!important;width:1px!important;height:1px!important;border:0!important;margin:0!important;padding:0!important;overflow:hidden!important;position:absolute!important;outline:0!important;left:0!important;top:0!important}.ui-select-choices-row:hover{background-color:#f5f5f5}.ng-dirty.ng-invalid>a.select2-choice{border-color:#D44950}.select2-result-single{padding-left:0}.select-locked>.ui-select-match-close,.select2-locked>.select2-search-choice-close{display:none}body>.select2-container.open{z-index:9999}.ui-select-container.select2.direction-up .ui-select-match,.ui-select-container[theme=select2].direction-up .ui-select-match{border-radius:0 0 4px 4px}.ui-select-container.select2.direction-up .ui-select-dropdown,.ui-select-container[theme=select2].direction-up .ui-select-dropdown{border-radius:4px 4px 0 0;border-top-width:1px;border-top-style:solid;box-shadow:0 -4px 8px rgba(0,0,0,.25);margin-top:-4px}.ui-select-container.select2.direction-up .ui-select-dropdown .select2-search,.ui-select-container[theme=select2].direction-up .ui-select-dropdown .select2-search{margin-top:4px}.ui-select-container.select2.direction-up.select2-dropdown-open .ui-select-match,.ui-select-container[theme=select2].direction-up.select2-dropdown-open .ui-select-match{border-bottom-color:#5897fb}.selectize-input.selectize-focus{border-color:#007FBB!important}.selectize-control>.selectize-dropdown,.selectize-control>.selectize-input>input{width:100%}.ng-dirty.ng-invalid>div.selectize-input{border-color:#D44950}.ui-select-container[theme=selectize].direction-up .ui-select-dropdown{box-shadow:0 -4px 8px rgba(0,0,0,.25);margin-top:-2px}.btn-default-focus{color:#333;background-color:#EBEBEB;border-color:#ADADAD;text-decoration:none;outline:-webkit-focus-ring-color auto 5px;outline-offset:-2px;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)}.ui-select-bootstrap .ui-select-toggle{position:relative}.ui-select-bootstrap .ui-select-toggle>.caret{position:absolute;height:10px;top:50%;right:10px;margin-top:-2px}.input-group>.ui-select-bootstrap.dropdown{position:static}.input-group>.ui-select-bootstrap>input.ui-select-search.form-control{border-radius:4px 0 0 4px}.input-group>.ui-select-bootstrap>input.ui-select-search.form-control.direction-up{border-radius:4px 0 0 4px!important}.ui-select-bootstrap>.ui-select-match>.btn{text-align:left!important}.ui-select-bootstrap>.ui-select-match>.caret{position:absolute;top:45%;right:15px}.ui-select-bootstrap>.ui-select-choices,.ui-select-bootstrap>.ui-select-no-choice{width:100%;height:auto;max-height:200px;overflow-x:hidden;margin-top:-1px}body>.ui-select-bootstrap.open{z-index:1000}.ui-select-multiple.ui-select-bootstrap{height:auto;padding:3px 3px 0}.ui-select-multiple.ui-select-bootstrap input.ui-select-search{background-color:transparent!important;border:none;outline:0;height:1.666666em;margin-bottom:3px}.ui-select-multiple.ui-select-bootstrap .ui-select-match .close{font-size:1.6em;line-height:.75}.ui-select-multiple.ui-select-bootstrap .ui-select-match-item{outline:0;margin:0 3px 3px 0}.ui-select-multiple .ui-select-match-item{position:relative}.ui-select-multiple .ui-select-match-item.dropping .ui-select-match-close{pointer-events:none}.ui-select-multiple:hover .ui-select-match-item.dropping-before:before{content:\"\";position:absolute;top:0;right:100%;height:100%;margin-right:2px;border-left:1px solid #428bca}.ui-select-multiple:hover .ui-select-match-item.dropping-after:after{content:\"\";position:absolute;top:0;left:100%;height:100%;margin-left:2px;border-right:1px solid #428bca}.ui-select-bootstrap .ui-select-choices-row>a{display:block;padding:3px 20px;clear:both;font-weight:400;line-height:1.42857143;color:#333;white-space:nowrap}.ui-select-bootstrap .ui-select-choices-row>a:focus,.ui-select-bootstrap .ui-select-choices-row>a:hover{text-decoration:none;color:#262626;background-color:#f5f5f5}.ui-select-bootstrap .ui-select-choices-row.active>a{color:#fff;text-decoration:none;outline:0;background-color:#428bca}.ui-select-bootstrap .ui-select-choices-row.active.disabled>a,.ui-select-bootstrap .ui-select-choices-row.disabled>a{color:#777;cursor:not-allowed;background-color:#fff}.ui-select-match.ng-hide-add,.ui-select-search.ng-hide-add{display:none!important}.ui-select-bootstrap.ng-dirty.ng-invalid>button.btn.ui-select-match{border-color:#D44950}.ui-select-container[theme=bootstrap].direction-up .ui-select-dropdown{box-shadow:0 -4px 8px rgba(0,0,0,.25)}\n/*# sourceMappingURL=select.min.css.map */\n", ""]);
	
	// exports


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(330);

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_LOCAL_MODULE_0__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_LOCAL_MODULE_1__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function($) {/**
	 * sifter.js
	 * Copyright (c) 2013 Brian Reavis & contributors
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
	 * file except in compliance with the License. You may obtain a copy of the License at:
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
	 * ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 *
	 * @author Brian Reavis <brian@thirdroute.com>
	 */
	
	(function(root, factory) {
		if (true) {
			!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_LOCAL_MODULE_0__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__));
		} else if (typeof exports === 'object') {
			module.exports = factory();
		} else {
			root.Sifter = factory();
		}
	}(this, function() {
	
		/**
		 * Textually searches arrays and hashes of objects
		 * by property (or multiple properties). Designed
		 * specifically for autocomplete.
		 *
		 * @constructor
		 * @param {array|object} items
		 * @param {object} items
		 */
		var Sifter = function(items, settings) {
			this.items = items;
			this.settings = settings || {diacritics: true};
		};
	
		/**
		 * Splits a search string into an array of individual
		 * regexps to be used to match results.
		 *
		 * @param {string} query
		 * @returns {array}
		 */
		Sifter.prototype.tokenize = function(query) {
			query = trim(String(query || '').toLowerCase());
			if (!query || !query.length) return [];
	
			var i, n, regex, letter;
			var tokens = [];
			var words = query.split(/ +/);
	
			for (i = 0, n = words.length; i < n; i++) {
				regex = escape_regex(words[i]);
				if (this.settings.diacritics) {
					for (letter in DIACRITICS) {
						if (DIACRITICS.hasOwnProperty(letter)) {
							regex = regex.replace(new RegExp(letter, 'g'), DIACRITICS[letter]);
						}
					}
				}
				tokens.push({
					string : words[i],
					regex  : new RegExp(regex, 'i')
				});
			}
	
			return tokens;
		};
	
		/**
		 * Iterates over arrays and hashes.
		 *
		 * ```
		 * this.iterator(this.items, function(item, id) {
		 *    // invoked for each item
		 * });
		 * ```
		 *
		 * @param {array|object} object
		 */
		Sifter.prototype.iterator = function(object, callback) {
			var iterator;
			if (is_array(object)) {
				iterator = Array.prototype.forEach || function(callback) {
					for (var i = 0, n = this.length; i < n; i++) {
						callback(this[i], i, this);
					}
				};
			} else {
				iterator = function(callback) {
					for (var key in this) {
						if (this.hasOwnProperty(key)) {
							callback(this[key], key, this);
						}
					}
				};
			}
	
			iterator.apply(object, [callback]);
		};
	
		/**
		 * Returns a function to be used to score individual results.
		 *
		 * Good matches will have a higher score than poor matches.
		 * If an item is not a match, 0 will be returned by the function.
		 *
		 * @param {object|string} search
		 * @param {object} options (optional)
		 * @returns {function}
		 */
		Sifter.prototype.getScoreFunction = function(search, options) {
			var self, fields, tokens, token_count, nesting;
	
			self        = this;
			search      = self.prepareSearch(search, options);
			tokens      = search.tokens;
			fields      = search.options.fields;
			token_count = tokens.length;
			nesting     = search.options.nesting;
	
			/**
			 * Calculates how close of a match the
			 * given value is against a search token.
			 *
			 * @param {mixed} value
			 * @param {object} token
			 * @return {number}
			 */
			var scoreValue = function(value, token) {
				var score, pos;
	
				if (!value) return 0;
				value = String(value || '');
				pos = value.search(token.regex);
				if (pos === -1) return 0;
				score = token.string.length / value.length;
				if (pos === 0) score += 0.5;
				return score;
			};
	
			/**
			 * Calculates the score of an object
			 * against the search query.
			 *
			 * @param {object} token
			 * @param {object} data
			 * @return {number}
			 */
			var scoreObject = (function() {
				var field_count = fields.length;
				if (!field_count) {
					return function() { return 0; };
				}
				if (field_count === 1) {
					return function(token, data) {
						return scoreValue(getattr(data, fields[0], nesting), token);
					};
				}
				return function(token, data) {
					for (var i = 0, sum = 0; i < field_count; i++) {
						sum += scoreValue(getattr(data, fields[i], nesting), token);
					}
					return sum / field_count;
				};
			})();
	
			if (!token_count) {
				return function() { return 0; };
			}
			if (token_count === 1) {
				return function(data) {
					return scoreObject(tokens[0], data);
				};
			}
	
			if (search.options.conjunction === 'and') {
				return function(data) {
					var score;
					for (var i = 0, sum = 0; i < token_count; i++) {
						score = scoreObject(tokens[i], data);
						if (score <= 0) return 0;
						sum += score;
					}
					return sum / token_count;
				};
			} else {
				return function(data) {
					for (var i = 0, sum = 0; i < token_count; i++) {
						sum += scoreObject(tokens[i], data);
					}
					return sum / token_count;
				};
			}
		};
	
		/**
		 * Returns a function that can be used to compare two
		 * results, for sorting purposes. If no sorting should
		 * be performed, `null` will be returned.
		 *
		 * @param {string|object} search
		 * @param {object} options
		 * @return function(a,b)
		 */
		Sifter.prototype.getSortFunction = function(search, options) {
			var i, n, self, field, fields, fields_count, multiplier, multipliers, get_field, implicit_score, sort;
	
			self   = this;
			search = self.prepareSearch(search, options);
			sort   = (!search.query && options.sort_empty) || options.sort;
	
			/**
			 * Fetches the specified sort field value
			 * from a search result item.
			 *
			 * @param  {string} name
			 * @param  {object} result
			 * @return {mixed}
			 */
			get_field = function(name, result) {
				if (name === '$score') return result.score;
				return getattr(self.items[result.id], name, options.nesting);
			};
	
			// parse options
			fields = [];
			if (sort) {
				for (i = 0, n = sort.length; i < n; i++) {
					if (search.query || sort[i].field !== '$score') {
						fields.push(sort[i]);
					}
				}
			}
	
			// the "$score" field is implied to be the primary
			// sort field, unless it's manually specified
			if (search.query) {
				implicit_score = true;
				for (i = 0, n = fields.length; i < n; i++) {
					if (fields[i].field === '$score') {
						implicit_score = false;
						break;
					}
				}
				if (implicit_score) {
					fields.unshift({field: '$score', direction: 'desc'});
				}
			} else {
				for (i = 0, n = fields.length; i < n; i++) {
					if (fields[i].field === '$score') {
						fields.splice(i, 1);
						break;
					}
				}
			}
	
			multipliers = [];
			for (i = 0, n = fields.length; i < n; i++) {
				multipliers.push(fields[i].direction === 'desc' ? -1 : 1);
			}
	
			// build function
			fields_count = fields.length;
			if (!fields_count) {
				return null;
			} else if (fields_count === 1) {
				field = fields[0].field;
				multiplier = multipliers[0];
				return function(a, b) {
					return multiplier * cmp(
						get_field(field, a),
						get_field(field, b)
					);
				};
			} else {
				return function(a, b) {
					var i, result, a_value, b_value, field;
					for (i = 0; i < fields_count; i++) {
						field = fields[i].field;
						result = multipliers[i] * cmp(
							get_field(field, a),
							get_field(field, b)
						);
						if (result) return result;
					}
					return 0;
				};
			}
		};
	
		/**
		 * Parses a search query and returns an object
		 * with tokens and fields ready to be populated
		 * with results.
		 *
		 * @param {string} query
		 * @param {object} options
		 * @returns {object}
		 */
		Sifter.prototype.prepareSearch = function(query, options) {
			if (typeof query === 'object') return query;
	
			options = extend({}, options);
	
			var option_fields     = options.fields;
			var option_sort       = options.sort;
			var option_sort_empty = options.sort_empty;
	
			if (option_fields && !is_array(option_fields)) options.fields = [option_fields];
			if (option_sort && !is_array(option_sort)) options.sort = [option_sort];
			if (option_sort_empty && !is_array(option_sort_empty)) options.sort_empty = [option_sort_empty];
	
			return {
				options : options,
				query   : String(query || '').toLowerCase(),
				tokens  : this.tokenize(query),
				total   : 0,
				items   : []
			};
		};
	
		/**
		 * Searches through all items and returns a sorted array of matches.
		 *
		 * The `options` parameter can contain:
		 *
		 *   - fields {string|array}
		 *   - sort {array}
		 *   - score {function}
		 *   - filter {bool}
		 *   - limit {integer}
		 *
		 * Returns an object containing:
		 *
		 *   - options {object}
		 *   - query {string}
		 *   - tokens {array}
		 *   - total {int}
		 *   - items {array}
		 *
		 * @param {string} query
		 * @param {object} options
		 * @returns {object}
		 */
		Sifter.prototype.search = function(query, options) {
			var self = this, value, score, search, calculateScore;
			var fn_sort;
			var fn_score;
	
			search  = this.prepareSearch(query, options);
			options = search.options;
			query   = search.query;
	
			// generate result scoring function
			fn_score = options.score || self.getScoreFunction(search);
	
			// perform search and sort
			if (query.length) {
				self.iterator(self.items, function(item, id) {
					score = fn_score(item);
					if (options.filter === false || score > 0) {
						search.items.push({'score': score, 'id': id});
					}
				});
			} else {
				self.iterator(self.items, function(item, id) {
					search.items.push({'score': 1, 'id': id});
				});
			}
	
			fn_sort = self.getSortFunction(search, options);
			if (fn_sort) search.items.sort(fn_sort);
	
			// apply limits
			search.total = search.items.length;
			if (typeof options.limit === 'number') {
				search.items = search.items.slice(0, options.limit);
			}
	
			return search;
		};
	
		// utilities
		// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	
		var cmp = function(a, b) {
			if (typeof a === 'number' && typeof b === 'number') {
				return a > b ? 1 : (a < b ? -1 : 0);
			}
			a = asciifold(String(a || ''));
			b = asciifold(String(b || ''));
			if (a > b) return 1;
			if (b > a) return -1;
			return 0;
		};
	
		var extend = function(a, b) {
			var i, n, k, object;
			for (i = 1, n = arguments.length; i < n; i++) {
				object = arguments[i];
				if (!object) continue;
				for (k in object) {
					if (object.hasOwnProperty(k)) {
						a[k] = object[k];
					}
				}
			}
			return a;
		};
	
		/**
		 * A property getter resolving dot-notation
		 * @param  {Object}  obj     The root object to fetch property on
		 * @param  {String}  name    The optionally dotted property name to fetch
		 * @param  {Boolean} nesting Handle nesting or not
		 * @return {Object}          The resolved property value
		 */
		var getattr = function(obj, name, nesting) {
		    if (!obj || !name) return;
		    if (!nesting) return obj[name];
		    var names = name.split(".");
		    while(names.length && (obj = obj[names.shift()]));
		    return obj;
		};
	
		var trim = function(str) {
			return (str + '').replace(/^\s+|\s+$|/g, '');
		};
	
		var escape_regex = function(str) {
			return (str + '').replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
		};
	
		var is_array = Array.isArray || (typeof $ !== 'undefined' && $.isArray) || function(object) {
			return Object.prototype.toString.call(object) === '[object Array]';
		};
	
		var DIACRITICS = {
			'a': '[aḀḁĂăÂâǍǎȺⱥȦȧẠạÄäÀàÁáĀāÃãÅåąĄÃąĄ]',
			'b': '[b␢βΒB฿𐌁ᛒ]',
			'c': '[cĆćĈĉČčĊċC̄c̄ÇçḈḉȻȼƇƈɕᴄＣｃ]',
			'd': '[dĎďḊḋḐḑḌḍḒḓḎḏĐđD̦d̦ƉɖƊɗƋƌᵭᶁᶑȡᴅＤｄð]',
			'e': '[eÉéÈèÊêḘḙĚěĔĕẼẽḚḛẺẻĖėËëĒēȨȩĘęᶒɆɇȄȅẾếỀềỄễỂểḜḝḖḗḔḕȆȇẸẹỆệⱸᴇＥｅɘǝƏƐε]',
			'f': '[fƑƒḞḟ]',
			'g': '[gɢ₲ǤǥĜĝĞğĢģƓɠĠġ]',
			'h': '[hĤĥĦħḨḩẖẖḤḥḢḣɦʰǶƕ]',
			'i': '[iÍíÌìĬĭÎîǏǐÏïḮḯĨĩĮįĪīỈỉȈȉȊȋỊịḬḭƗɨɨ̆ᵻᶖİiIıɪＩｉ]',
			'j': '[jȷĴĵɈɉʝɟʲ]',
			'k': '[kƘƙꝀꝁḰḱǨǩḲḳḴḵκϰ₭]',
			'l': '[lŁłĽľĻļĹĺḶḷḸḹḼḽḺḻĿŀȽƚⱠⱡⱢɫɬᶅɭȴʟＬｌ]',
			'n': '[nŃńǸǹŇňÑñṄṅŅņṆṇṊṋṈṉN̈n̈ƝɲȠƞᵰᶇɳȵɴＮｎŊŋ]',
			'o': '[oØøÖöÓóÒòÔôǑǒŐőŎŏȮȯỌọƟɵƠơỎỏŌōÕõǪǫȌȍՕօ]',
			'p': '[pṔṕṖṗⱣᵽƤƥᵱ]',
			'q': '[qꝖꝗʠɊɋꝘꝙq̃]',
			'r': '[rŔŕɌɍŘřŖŗṘṙȐȑȒȓṚṛⱤɽ]',
			's': '[sŚśṠṡṢṣꞨꞩŜŝŠšŞşȘșS̈s̈]',
			't': '[tŤťṪṫŢţṬṭƮʈȚțṰṱṮṯƬƭ]',
			'u': '[uŬŭɄʉỤụÜüÚúÙùÛûǓǔŰűŬŭƯưỦủŪūŨũŲųȔȕ∪]',
			'v': '[vṼṽṾṿƲʋꝞꝟⱱʋ]',
			'w': '[wẂẃẀẁŴŵẄẅẆẇẈẉ]',
			'x': '[xẌẍẊẋχ]',
			'y': '[yÝýỲỳŶŷŸÿỸỹẎẏỴỵɎɏƳƴ]',
			'z': '[zŹźẐẑŽžŻżẒẓẔẕƵƶ]'
		};
	
		var asciifold = (function() {
			var i, n, k, chunk;
			var foreignletters = '';
			var lookup = {};
			for (k in DIACRITICS) {
				if (DIACRITICS.hasOwnProperty(k)) {
					chunk = DIACRITICS[k].substring(2, DIACRITICS[k].length - 1);
					foreignletters += chunk;
					for (i = 0, n = chunk.length; i < n; i++) {
						lookup[chunk.charAt(i)] = k;
					}
				}
			}
			var regexp = new RegExp('[' +  foreignletters + ']', 'g');
			return function(str) {
				return str.replace(regexp, function(foreignletter) {
					return lookup[foreignletter];
				}).toLowerCase();
			};
		})();
	
	
		// export
		// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	
		return Sifter;
	}));
	
	
	
	/**
	 * microplugin.js
	 * Copyright (c) 2013 Brian Reavis & contributors
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
	 * file except in compliance with the License. You may obtain a copy of the License at:
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
	 * ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 *
	 * @author Brian Reavis <brian@thirdroute.com>
	 */
	
	(function(root, factory) {
		if (true) {
			!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_LOCAL_MODULE_1__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__));
		} else if (typeof exports === 'object') {
			module.exports = factory();
		} else {
			root.MicroPlugin = factory();
		}
	}(this, function() {
		var MicroPlugin = {};
	
		MicroPlugin.mixin = function(Interface) {
			Interface.plugins = {};
	
			/**
			 * Initializes the listed plugins (with options).
			 * Acceptable formats:
			 *
			 * List (without options):
			 *   ['a', 'b', 'c']
			 *
			 * List (with options):
			 *   [{'name': 'a', options: {}}, {'name': 'b', options: {}}]
			 *
			 * Hash (with options):
			 *   {'a': { ... }, 'b': { ... }, 'c': { ... }}
			 *
			 * @param {mixed} plugins
			 */
			Interface.prototype.initializePlugins = function(plugins) {
				var i, n, key;
				var self  = this;
				var queue = [];
	
				self.plugins = {
					names     : [],
					settings  : {},
					requested : {},
					loaded    : {}
				};
	
				if (utils.isArray(plugins)) {
					for (i = 0, n = plugins.length; i < n; i++) {
						if (typeof plugins[i] === 'string') {
							queue.push(plugins[i]);
						} else {
							self.plugins.settings[plugins[i].name] = plugins[i].options;
							queue.push(plugins[i].name);
						}
					}
				} else if (plugins) {
					for (key in plugins) {
						if (plugins.hasOwnProperty(key)) {
							self.plugins.settings[key] = plugins[key];
							queue.push(key);
						}
					}
				}
	
				while (queue.length) {
					self.require(queue.shift());
				}
			};
	
			Interface.prototype.loadPlugin = function(name) {
				var self    = this;
				var plugins = self.plugins;
				var plugin  = Interface.plugins[name];
	
				if (!Interface.plugins.hasOwnProperty(name)) {
					throw new Error('Unable to find "' +  name + '" plugin');
				}
	
				plugins.requested[name] = true;
				plugins.loaded[name] = plugin.fn.apply(self, [self.plugins.settings[name] || {}]);
				plugins.names.push(name);
			};
	
			/**
			 * Initializes a plugin.
			 *
			 * @param {string} name
			 */
			Interface.prototype.require = function(name) {
				var self = this;
				var plugins = self.plugins;
	
				if (!self.plugins.loaded.hasOwnProperty(name)) {
					if (plugins.requested[name]) {
						throw new Error('Plugin has circular dependency ("' + name + '")');
					}
					self.loadPlugin(name);
				}
	
				return plugins.loaded[name];
			};
	
			/**
			 * Registers a plugin.
			 *
			 * @param {string} name
			 * @param {function} fn
			 */
			Interface.define = function(name, fn) {
				Interface.plugins[name] = {
					'name' : name,
					'fn'   : fn
				};
			};
		};
	
		var utils = {
			isArray: Array.isArray || function(vArg) {
				return Object.prototype.toString.call(vArg) === '[object Array]';
			}
		};
	
		return MicroPlugin;
	}));
	
	/**
	 * selectize.js (v0.12.4)
	 * Copyright (c) 2013–2015 Brian Reavis & contributors
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
	 * file except in compliance with the License. You may obtain a copy of the License at:
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
	 * ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 *
	 * @author Brian Reavis <brian@thirdroute.com>
	 */
	
	/*jshint curly:false */
	/*jshint browser:true */
	
	(function(root, factory) {
		if (true) {
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1),__WEBPACK_LOCAL_MODULE_0__,__WEBPACK_LOCAL_MODULE_1__], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof exports === 'object') {
			module.exports = factory(require('jquery'), require('sifter'), require('microplugin'));
		} else {
			root.Selectize = factory(root.jQuery, root.Sifter, root.MicroPlugin);
		}
	}(this, function($, Sifter, MicroPlugin) {
		'use strict';
	
		var highlight = function($element, pattern) {
			if (typeof pattern === 'string' && !pattern.length) return;
			var regex = (typeof pattern === 'string') ? new RegExp(pattern, 'i') : pattern;
		
			var highlight = function(node) {
				var skip = 0;
				if (node.nodeType === 3) {
					var pos = node.data.search(regex);
					if (pos >= 0 && node.data.length > 0) {
						var match = node.data.match(regex);
						var spannode = document.createElement('span');
						spannode.className = 'highlight';
						var middlebit = node.splitText(pos);
						var endbit = middlebit.splitText(match[0].length);
						var middleclone = middlebit.cloneNode(true);
						spannode.appendChild(middleclone);
						middlebit.parentNode.replaceChild(spannode, middlebit);
						skip = 1;
					}
				} else if (node.nodeType === 1 && node.childNodes && !/(script|style)/i.test(node.tagName)) {
					for (var i = 0; i < node.childNodes.length; ++i) {
						i += highlight(node.childNodes[i]);
					}
				}
				return skip;
			};
		
			return $element.each(function() {
				highlight(this);
			});
		};
		
		/**
		 * removeHighlight fn copied from highlight v5 and
		 * edited to remove with() and pass js strict mode
		 */
		$.fn.removeHighlight = function() {
			return this.find("span.highlight").each(function() {
				this.parentNode.firstChild.nodeName;
				var parent = this.parentNode;
				parent.replaceChild(this.firstChild, this);
				parent.normalize();
			}).end();
		};
		
		
		var MicroEvent = function() {};
		MicroEvent.prototype = {
			on: function(event, fct){
				this._events = this._events || {};
				this._events[event] = this._events[event] || [];
				this._events[event].push(fct);
			},
			off: function(event, fct){
				var n = arguments.length;
				if (n === 0) return delete this._events;
				if (n === 1) return delete this._events[event];
		
				this._events = this._events || {};
				if (event in this._events === false) return;
				this._events[event].splice(this._events[event].indexOf(fct), 1);
			},
			trigger: function(event /* , args... */){
				this._events = this._events || {};
				if (event in this._events === false) return;
				for (var i = 0; i < this._events[event].length; i++){
					this._events[event][i].apply(this, Array.prototype.slice.call(arguments, 1));
				}
			}
		};
		
		/**
		 * Mixin will delegate all MicroEvent.js function in the destination object.
		 *
		 * - MicroEvent.mixin(Foobar) will make Foobar able to use MicroEvent
		 *
		 * @param {object} the object which will support MicroEvent
		 */
		MicroEvent.mixin = function(destObject){
			var props = ['on', 'off', 'trigger'];
			for (var i = 0; i < props.length; i++){
				destObject.prototype[props[i]] = MicroEvent.prototype[props[i]];
			}
		};
		
		var IS_MAC        = /Mac/.test(navigator.userAgent);
		
		var KEY_A         = 65;
		var KEY_COMMA     = 188;
		var KEY_RETURN    = 13;
		var KEY_ESC       = 27;
		var KEY_LEFT      = 37;
		var KEY_UP        = 38;
		var KEY_P         = 80;
		var KEY_RIGHT     = 39;
		var KEY_DOWN      = 40;
		var KEY_N         = 78;
		var KEY_BACKSPACE = 8;
		var KEY_DELETE    = 46;
		var KEY_SHIFT     = 16;
		var KEY_CMD       = IS_MAC ? 91 : 17;
		var KEY_CTRL      = IS_MAC ? 18 : 17;
		var KEY_TAB       = 9;
		
		var TAG_SELECT    = 1;
		var TAG_INPUT     = 2;
		
		// for now, android support in general is too spotty to support validity
		var SUPPORTS_VALIDITY_API = !/android/i.test(window.navigator.userAgent) && !!document.createElement('input').validity;
		
		
		var isset = function(object) {
			return typeof object !== 'undefined';
		};
		
		/**
		 * Converts a scalar to its best string representation
		 * for hash keys and HTML attribute values.
		 *
		 * Transformations:
		 *   'str'     -> 'str'
		 *   null      -> ''
		 *   undefined -> ''
		 *   true      -> '1'
		 *   false     -> '0'
		 *   0         -> '0'
		 *   1         -> '1'
		 *
		 * @param {string} value
		 * @returns {string|null}
		 */
		var hash_key = function(value) {
			if (typeof value === 'undefined' || value === null) return null;
			if (typeof value === 'boolean') return value ? '1' : '0';
			return value + '';
		};
		
		/**
		 * Escapes a string for use within HTML.
		 *
		 * @param {string} str
		 * @returns {string}
		 */
		var escape_html = function(str) {
			return (str + '')
				.replace(/&/g, '&amp;')
				.replace(/</g, '&lt;')
				.replace(/>/g, '&gt;')
				.replace(/"/g, '&quot;');
		};
		
		/**
		 * Escapes "$" characters in replacement strings.
		 *
		 * @param {string} str
		 * @returns {string}
		 */
		var escape_replace = function(str) {
			return (str + '').replace(/\$/g, '$$$$');
		};
		
		var hook = {};
		
		/**
		 * Wraps `method` on `self` so that `fn`
		 * is invoked before the original method.
		 *
		 * @param {object} self
		 * @param {string} method
		 * @param {function} fn
		 */
		hook.before = function(self, method, fn) {
			var original = self[method];
			self[method] = function() {
				fn.apply(self, arguments);
				return original.apply(self, arguments);
			};
		};
		
		/**
		 * Wraps `method` on `self` so that `fn`
		 * is invoked after the original method.
		 *
		 * @param {object} self
		 * @param {string} method
		 * @param {function} fn
		 */
		hook.after = function(self, method, fn) {
			var original = self[method];
			self[method] = function() {
				var result = original.apply(self, arguments);
				fn.apply(self, arguments);
				return result;
			};
		};
		
		/**
		 * Wraps `fn` so that it can only be invoked once.
		 *
		 * @param {function} fn
		 * @returns {function}
		 */
		var once = function(fn) {
			var called = false;
			return function() {
				if (called) return;
				called = true;
				fn.apply(this, arguments);
			};
		};
		
		/**
		 * Wraps `fn` so that it can only be called once
		 * every `delay` milliseconds (invoked on the falling edge).
		 *
		 * @param {function} fn
		 * @param {int} delay
		 * @returns {function}
		 */
		var debounce = function(fn, delay) {
			var timeout;
			return function() {
				var self = this;
				var args = arguments;
				window.clearTimeout(timeout);
				timeout = window.setTimeout(function() {
					fn.apply(self, args);
				}, delay);
			};
		};
		
		/**
		 * Debounce all fired events types listed in `types`
		 * while executing the provided `fn`.
		 *
		 * @param {object} self
		 * @param {array} types
		 * @param {function} fn
		 */
		var debounce_events = function(self, types, fn) {
			var type;
			var trigger = self.trigger;
			var event_args = {};
		
			// override trigger method
			self.trigger = function() {
				var type = arguments[0];
				if (types.indexOf(type) !== -1) {
					event_args[type] = arguments;
				} else {
					return trigger.apply(self, arguments);
				}
			};
		
			// invoke provided function
			fn.apply(self, []);
			self.trigger = trigger;
		
			// trigger queued events
			for (type in event_args) {
				if (event_args.hasOwnProperty(type)) {
					trigger.apply(self, event_args[type]);
				}
			}
		};
		
		/**
		 * A workaround for http://bugs.jquery.com/ticket/6696
		 *
		 * @param {object} $parent - Parent element to listen on.
		 * @param {string} event - Event name.
		 * @param {string} selector - Descendant selector to filter by.
		 * @param {function} fn - Event handler.
		 */
		var watchChildEvent = function($parent, event, selector, fn) {
			$parent.on(event, selector, function(e) {
				var child = e.target;
				while (child && child.parentNode !== $parent[0]) {
					child = child.parentNode;
				}
				e.currentTarget = child;
				return fn.apply(this, [e]);
			});
		};
		
		/**
		 * Determines the current selection within a text input control.
		 * Returns an object containing:
		 *   - start
		 *   - length
		 *
		 * @param {object} input
		 * @returns {object}
		 */
		var getSelection = function(input) {
			var result = {};
			if ('selectionStart' in input) {
				result.start = input.selectionStart;
				result.length = input.selectionEnd - result.start;
			} else if (document.selection) {
				input.focus();
				var sel = document.selection.createRange();
				var selLen = document.selection.createRange().text.length;
				sel.moveStart('character', -input.value.length);
				result.start = sel.text.length - selLen;
				result.length = selLen;
			}
			return result;
		};
		
		/**
		 * Copies CSS properties from one element to another.
		 *
		 * @param {object} $from
		 * @param {object} $to
		 * @param {array} properties
		 */
		var transferStyles = function($from, $to, properties) {
			var i, n, styles = {};
			if (properties) {
				for (i = 0, n = properties.length; i < n; i++) {
					styles[properties[i]] = $from.css(properties[i]);
				}
			} else {
				styles = $from.css();
			}
			$to.css(styles);
		};
		
		/**
		 * Measures the width of a string within a
		 * parent element (in pixels).
		 *
		 * @param {string} str
		 * @param {object} $parent
		 * @returns {int}
		 */
		var measureString = function(str, $parent) {
			if (!str) {
				return 0;
			}
		
			var $test = $('<test>').css({
				position: 'absolute',
				top: -99999,
				left: -99999,
				width: 'auto',
				padding: 0,
				whiteSpace: 'pre'
			}).text(str).appendTo('body');
		
			transferStyles($parent, $test, [
				'letterSpacing',
				'fontSize',
				'fontFamily',
				'fontWeight',
				'textTransform'
			]);
		
			var width = $test.width();
			$test.remove();
		
			return width;
		};
		
		/**
		 * Sets up an input to grow horizontally as the user
		 * types. If the value is changed manually, you can
		 * trigger the "update" handler to resize:
		 *
		 * $input.trigger('update');
		 *
		 * @param {object} $input
		 */
		var autoGrow = function($input) {
			var currentWidth = null;
		
			var update = function(e, options) {
				var value, keyCode, printable, placeholder, width;
				var shift, character, selection;
				e = e || window.event || {};
				options = options || {};
		
				if (e.metaKey || e.altKey) return;
				if (!options.force && $input.data('grow') === false) return;
		
				value = $input.val();
				if (e.type && e.type.toLowerCase() === 'keydown') {
					keyCode = e.keyCode;
					printable = (
						(keyCode >= 97 && keyCode <= 122) || // a-z
						(keyCode >= 65 && keyCode <= 90)  || // A-Z
						(keyCode >= 48 && keyCode <= 57)  || // 0-9
						keyCode === 32 // space
					);
		
					if (keyCode === KEY_DELETE || keyCode === KEY_BACKSPACE) {
						selection = getSelection($input[0]);
						if (selection.length) {
							value = value.substring(0, selection.start) + value.substring(selection.start + selection.length);
						} else if (keyCode === KEY_BACKSPACE && selection.start) {
							value = value.substring(0, selection.start - 1) + value.substring(selection.start + 1);
						} else if (keyCode === KEY_DELETE && typeof selection.start !== 'undefined') {
							value = value.substring(0, selection.start) + value.substring(selection.start + 1);
						}
					} else if (printable) {
						shift = e.shiftKey;
						character = String.fromCharCode(e.keyCode);
						if (shift) character = character.toUpperCase();
						else character = character.toLowerCase();
						value += character;
					}
				}
		
				placeholder = $input.attr('placeholder');
				if (!value && placeholder) {
					value = placeholder;
				}
		
				width = measureString(value, $input) + 4;
				if (width !== currentWidth) {
					currentWidth = width;
					$input.width(width);
					$input.triggerHandler('resize');
				}
			};
		
			$input.on('keydown keyup update blur', update);
			update();
		};
		
		var domToString = function(d) {
			var tmp = document.createElement('div');
		
			tmp.appendChild(d.cloneNode(true));
		
			return tmp.innerHTML;
		};
		
		var logError = function(message, options){
			if(!options) options = {};
			var component = "Selectize";
		
			console.error(component + ": " + message)
		
			if(options.explanation){
				// console.group is undefined in <IE11
				if(console.group) console.group();
				console.error(options.explanation);
				if(console.group) console.groupEnd();
			}
		}
		
		
		var Selectize = function($input, settings) {
			var key, i, n, dir, input, self = this;
			input = $input[0];
			input.selectize = self;
		
			// detect rtl environment
			var computedStyle = window.getComputedStyle && window.getComputedStyle(input, null);
			dir = computedStyle ? computedStyle.getPropertyValue('direction') : input.currentStyle && input.currentStyle.direction;
			dir = dir || $input.parents('[dir]:first').attr('dir') || '';
		
			// setup default state
			$.extend(self, {
				order            : 0,
				settings         : settings,
				$input           : $input,
				tabIndex         : $input.attr('tabindex') || '',
				tagType          : input.tagName.toLowerCase() === 'select' ? TAG_SELECT : TAG_INPUT,
				rtl              : /rtl/i.test(dir),
		
				eventNS          : '.selectize' + (++Selectize.count),
				highlightedValue : null,
				isOpen           : false,
				isDisabled       : false,
				isRequired       : $input.is('[required]'),
				isInvalid        : false,
				isLocked         : false,
				isFocused        : false,
				isInputHidden    : false,
				isSetup          : false,
				isShiftDown      : false,
				isCmdDown        : false,
				isCtrlDown       : false,
				ignoreFocus      : false,
				ignoreBlur       : false,
				ignoreHover      : false,
				hasOptions       : false,
				currentResults   : null,
				lastValue        : '',
				caretPos         : 0,
				loading          : 0,
				loadedSearches   : {},
		
				$activeOption    : null,
				$activeItems     : [],
		
				optgroups        : {},
				options          : {},
				userOptions      : {},
				items            : [],
				renderCache      : {},
				onSearchChange   : settings.loadThrottle === null ? self.onSearchChange : debounce(self.onSearchChange, settings.loadThrottle)
			});
		
			// search system
			self.sifter = new Sifter(this.options, {diacritics: settings.diacritics});
		
			// build options table
			if (self.settings.options) {
				for (i = 0, n = self.settings.options.length; i < n; i++) {
					self.registerOption(self.settings.options[i]);
				}
				delete self.settings.options;
			}
		
			// build optgroup table
			if (self.settings.optgroups) {
				for (i = 0, n = self.settings.optgroups.length; i < n; i++) {
					self.registerOptionGroup(self.settings.optgroups[i]);
				}
				delete self.settings.optgroups;
			}
		
			// option-dependent defaults
			self.settings.mode = self.settings.mode || (self.settings.maxItems === 1 ? 'single' : 'multi');
			if (typeof self.settings.hideSelected !== 'boolean') {
				self.settings.hideSelected = self.settings.mode === 'multi';
			}
		
			self.initializePlugins(self.settings.plugins);
			self.setupCallbacks();
			self.setupTemplates();
			self.setup();
		};
		
		// mixins
		// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
		
		MicroEvent.mixin(Selectize);
		
		if(typeof MicroPlugin !== "undefined"){
			MicroPlugin.mixin(Selectize);
		}else{
			logError("Dependency MicroPlugin is missing",
				{explanation:
					"Make sure you either: (1) are using the \"standalone\" "+
					"version of Selectize, or (2) require MicroPlugin before you "+
					"load Selectize."}
			);
		}
		
		
		// methods
		// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
		
		$.extend(Selectize.prototype, {
		
			/**
			 * Creates all elements and sets up event bindings.
			 */
			setup: function() {
				var self      = this;
				var settings  = self.settings;
				var eventNS   = self.eventNS;
				var $window   = $(window);
				var $document = $(document);
				var $input    = self.$input;
		
				var $wrapper;
				var $control;
				var $control_input;
				var $dropdown;
				var $dropdown_content;
				var $dropdown_parent;
				var inputMode;
				var timeout_blur;
				var timeout_focus;
				var classes;
				var classes_plugins;
				var inputId;
		
				inputMode         = self.settings.mode;
				classes           = $input.attr('class') || '';
		
				$wrapper          = $('<div>').addClass(settings.wrapperClass).addClass(classes).addClass(inputMode);
				$control          = $('<div>').addClass(settings.inputClass).addClass('items').appendTo($wrapper);
				$control_input    = $('<input type="text" autocomplete="off" />').appendTo($control).attr('tabindex', $input.is(':disabled') ? '-1' : self.tabIndex);
				$dropdown_parent  = $(settings.dropdownParent || $wrapper);
				$dropdown         = $('<div>').addClass(settings.dropdownClass).addClass(inputMode).hide().appendTo($dropdown_parent);
				$dropdown_content = $('<div>').addClass(settings.dropdownContentClass).appendTo($dropdown);
		
				if(inputId = $input.attr('id')) {
					$control_input.attr('id', inputId + '-selectized');
					$("label[for='"+inputId+"']").attr('for', inputId + '-selectized');
				}
		
				if(self.settings.copyClassesToDropdown) {
					$dropdown.addClass(classes);
				}
		
				$wrapper.css({
					width: $input[0].style.width
				});
		
				if (self.plugins.names.length) {
					classes_plugins = 'plugin-' + self.plugins.names.join(' plugin-');
					$wrapper.addClass(classes_plugins);
					$dropdown.addClass(classes_plugins);
				}
		
				if ((settings.maxItems === null || settings.maxItems > 1) && self.tagType === TAG_SELECT) {
					$input.attr('multiple', 'multiple');
				}
		
				if (self.settings.placeholder) {
					$control_input.attr('placeholder', settings.placeholder);
				}
		
				// if splitOn was not passed in, construct it from the delimiter to allow pasting universally
				if (!self.settings.splitOn && self.settings.delimiter) {
					var delimiterEscaped = self.settings.delimiter.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
					self.settings.splitOn = new RegExp('\\s*' + delimiterEscaped + '+\\s*');
				}
		
				if ($input.attr('autocorrect')) {
					$control_input.attr('autocorrect', $input.attr('autocorrect'));
				}
		
				if ($input.attr('autocapitalize')) {
					$control_input.attr('autocapitalize', $input.attr('autocapitalize'));
				}
		
				self.$wrapper          = $wrapper;
				self.$control          = $control;
				self.$control_input    = $control_input;
				self.$dropdown         = $dropdown;
				self.$dropdown_content = $dropdown_content;
		
				$dropdown.on('mouseenter', '[data-selectable]', function() { return self.onOptionHover.apply(self, arguments); });
				$dropdown.on('mousedown click', '[data-selectable]', function() { return self.onOptionSelect.apply(self, arguments); });
				watchChildEvent($control, 'mousedown', '*:not(input)', function() { return self.onItemSelect.apply(self, arguments); });
				autoGrow($control_input);
		
				$control.on({
					mousedown : function() { return self.onMouseDown.apply(self, arguments); },
					click     : function() { return self.onClick.apply(self, arguments); }
				});
		
				$control_input.on({
					mousedown : function(e) { e.stopPropagation(); },
					keydown   : function() { return self.onKeyDown.apply(self, arguments); },
					keyup     : function() { return self.onKeyUp.apply(self, arguments); },
					keypress  : function() { return self.onKeyPress.apply(self, arguments); },
					resize    : function() { self.positionDropdown.apply(self, []); },
					blur      : function() { return self.onBlur.apply(self, arguments); },
					focus     : function() { self.ignoreBlur = false; return self.onFocus.apply(self, arguments); },
					paste     : function() { return self.onPaste.apply(self, arguments); }
				});
		
				$document.on('keydown' + eventNS, function(e) {
					self.isCmdDown = e[IS_MAC ? 'metaKey' : 'ctrlKey'];
					self.isCtrlDown = e[IS_MAC ? 'altKey' : 'ctrlKey'];
					self.isShiftDown = e.shiftKey;
				});
		
				$document.on('keyup' + eventNS, function(e) {
					if (e.keyCode === KEY_CTRL) self.isCtrlDown = false;
					if (e.keyCode === KEY_SHIFT) self.isShiftDown = false;
					if (e.keyCode === KEY_CMD) self.isCmdDown = false;
				});
		
				$document.on('mousedown' + eventNS, function(e) {
					if (self.isFocused) {
						// prevent events on the dropdown scrollbar from causing the control to blur
						if (e.target === self.$dropdown[0] || e.target.parentNode === self.$dropdown[0]) {
							return false;
						}
						// blur on click outside
						if (!self.$control.has(e.target).length && e.target !== self.$control[0]) {
							self.blur(e.target);
						}
					}
				});
		
				$window.on(['scroll' + eventNS, 'resize' + eventNS].join(' '), function() {
					if (self.isOpen) {
						self.positionDropdown.apply(self, arguments);
					}
				});
				$window.on('mousemove' + eventNS, function() {
					self.ignoreHover = false;
				});
		
				// store original children and tab index so that they can be
				// restored when the destroy() method is called.
				this.revertSettings = {
					$children : $input.children().detach(),
					tabindex  : $input.attr('tabindex')
				};
		
				$input.attr('tabindex', -1).hide().after(self.$wrapper);
		
				if ($.isArray(settings.items)) {
					self.setValue(settings.items);
					delete settings.items;
				}
		
				// feature detect for the validation API
				if (SUPPORTS_VALIDITY_API) {
					$input.on('invalid' + eventNS, function(e) {
						e.preventDefault();
						self.isInvalid = true;
						self.refreshState();
					});
				}
		
				self.updateOriginalInput();
				self.refreshItems();
				self.refreshState();
				self.updatePlaceholder();
				self.isSetup = true;
		
				if ($input.is(':disabled')) {
					self.disable();
				}
		
				self.on('change', this.onChange);
		
				$input.data('selectize', self);
				$input.addClass('selectized');
				self.trigger('initialize');
		
				// preload options
				if (settings.preload === true) {
					self.onSearchChange('');
				}
		
			},
		
			/**
			 * Sets up default rendering functions.
			 */
			setupTemplates: function() {
				var self = this;
				var field_label = self.settings.labelField;
				var field_optgroup = self.settings.optgroupLabelField;
		
				var templates = {
					'optgroup': function(data) {
						return '<div class="optgroup">' + data.html + '</div>';
					},
					'optgroup_header': function(data, escape) {
						return '<div class="optgroup-header">' + escape(data[field_optgroup]) + '</div>';
					},
					'option': function(data, escape) {
						return '<div class="option">' + escape(data[field_label]) + '</div>';
					},
					'item': function(data, escape) {
						return '<div class="item">' + escape(data[field_label]) + '</div>';
					},
					'option_create': function(data, escape) {
						return '<div class="create">Add <strong>' + escape(data.input) + '</strong>&hellip;</div>';
					}
				};
		
				self.settings.render = $.extend({}, templates, self.settings.render);
			},
		
			/**
			 * Maps fired events to callbacks provided
			 * in the settings used when creating the control.
			 */
			setupCallbacks: function() {
				var key, fn, callbacks = {
					'initialize'      : 'onInitialize',
					'change'          : 'onChange',
					'item_add'        : 'onItemAdd',
					'item_remove'     : 'onItemRemove',
					'clear'           : 'onClear',
					'option_add'      : 'onOptionAdd',
					'option_remove'   : 'onOptionRemove',
					'option_clear'    : 'onOptionClear',
					'optgroup_add'    : 'onOptionGroupAdd',
					'optgroup_remove' : 'onOptionGroupRemove',
					'optgroup_clear'  : 'onOptionGroupClear',
					'dropdown_open'   : 'onDropdownOpen',
					'dropdown_close'  : 'onDropdownClose',
					'type'            : 'onType',
					'load'            : 'onLoad',
					'focus'           : 'onFocus',
					'blur'            : 'onBlur'
				};
		
				for (key in callbacks) {
					if (callbacks.hasOwnProperty(key)) {
						fn = this.settings[callbacks[key]];
						if (fn) this.on(key, fn);
					}
				}
			},
		
			/**
			 * Triggered when the main control element
			 * has a click event.
			 *
			 * @param {object} e
			 * @return {boolean}
			 */
			onClick: function(e) {
				var self = this;
		
				// necessary for mobile webkit devices (manual focus triggering
				// is ignored unless invoked within a click event)
				if (!self.isFocused) {
					self.focus();
					e.preventDefault();
				}
			},
		
			/**
			 * Triggered when the main control element
			 * has a mouse down event.
			 *
			 * @param {object} e
			 * @return {boolean}
			 */
			onMouseDown: function(e) {
				var self = this;
				var defaultPrevented = e.isDefaultPrevented();
				var $target = $(e.target);
		
				if (self.isFocused) {
					// retain focus by preventing native handling. if the
					// event target is the input it should not be modified.
					// otherwise, text selection within the input won't work.
					if (e.target !== self.$control_input[0]) {
						if (self.settings.mode === 'single') {
							// toggle dropdown
							self.isOpen ? self.close() : self.open();
						} else if (!defaultPrevented) {
							self.setActiveItem(null);
						}
						return false;
					}
				} else {
					// give control focus
					if (!defaultPrevented) {
						window.setTimeout(function() {
							self.focus();
						}, 0);
					}
				}
			},
		
			/**
			 * Triggered when the value of the control has been changed.
			 * This should propagate the event to the original DOM
			 * input / select element.
			 */
			onChange: function() {
				this.$input.trigger('change');
			},
		
			/**
			 * Triggered on <input> paste.
			 *
			 * @param {object} e
			 * @returns {boolean}
			 */
			onPaste: function(e) {
				var self = this;
		
				if (self.isFull() || self.isInputHidden || self.isLocked) {
					e.preventDefault();
					return;
				}
		
				// If a regex or string is included, this will split the pasted
				// input and create Items for each separate value
				if (self.settings.splitOn) {
		
					// Wait for pasted text to be recognized in value
					setTimeout(function() {
						var pastedText = self.$control_input.val();
						if(!pastedText.match(self.settings.splitOn)){ return }
		
						var splitInput = $.trim(pastedText).split(self.settings.splitOn);
						for (var i = 0, n = splitInput.length; i < n; i++) {
							self.createItem(splitInput[i]);
						}
					}, 0);
				}
			},
		
			/**
			 * Triggered on <input> keypress.
			 *
			 * @param {object} e
			 * @returns {boolean}
			 */
			onKeyPress: function(e) {
				if (this.isLocked) return e && e.preventDefault();
				var character = String.fromCharCode(e.keyCode || e.which);
				if (this.settings.create && this.settings.mode === 'multi' && character === this.settings.delimiter) {
					this.createItem();
					e.preventDefault();
					return false;
				}
			},
		
			/**
			 * Triggered on <input> keydown.
			 *
			 * @param {object} e
			 * @returns {boolean}
			 */
			onKeyDown: function(e) {
				var isInput = e.target === this.$control_input[0];
				var self = this;
		
				if (self.isLocked) {
					if (e.keyCode !== KEY_TAB) {
						e.preventDefault();
					}
					return;
				}
		
				switch (e.keyCode) {
					case KEY_A:
						if (self.isCmdDown) {
							self.selectAll();
							return;
						}
						break;
					case KEY_ESC:
						if (self.isOpen) {
							e.preventDefault();
							e.stopPropagation();
							self.close();
						}
						return;
					case KEY_N:
						if (!e.ctrlKey || e.altKey) break;
					case KEY_DOWN:
						if (!self.isOpen && self.hasOptions) {
							self.open();
						} else if (self.$activeOption) {
							self.ignoreHover = true;
							var $next = self.getAdjacentOption(self.$activeOption, 1);
							if ($next.length) self.setActiveOption($next, true, true);
						}
						e.preventDefault();
						return;
					case KEY_P:
						if (!e.ctrlKey || e.altKey) break;
					case KEY_UP:
						if (self.$activeOption) {
							self.ignoreHover = true;
							var $prev = self.getAdjacentOption(self.$activeOption, -1);
							if ($prev.length) self.setActiveOption($prev, true, true);
						}
						e.preventDefault();
						return;
					case KEY_RETURN:
						if (self.isOpen && self.$activeOption) {
							self.onOptionSelect({currentTarget: self.$activeOption});
							e.preventDefault();
						}
						return;
					case KEY_LEFT:
						self.advanceSelection(-1, e);
						return;
					case KEY_RIGHT:
						self.advanceSelection(1, e);
						return;
					case KEY_TAB:
						if (self.settings.selectOnTab && self.isOpen && self.$activeOption) {
							self.onOptionSelect({currentTarget: self.$activeOption});
		
							// Default behaviour is to jump to the next field, we only want this
							// if the current field doesn't accept any more entries
							if (!self.isFull()) {
								e.preventDefault();
							}
						}
						if (self.settings.create && self.createItem()) {
							e.preventDefault();
						}
						return;
					case KEY_BACKSPACE:
					case KEY_DELETE:
						self.deleteSelection(e);
						return;
				}
		
				if ((self.isFull() || self.isInputHidden) && !(IS_MAC ? e.metaKey : e.ctrlKey)) {
					e.preventDefault();
					return;
				}
			},
		
			/**
			 * Triggered on <input> keyup.
			 *
			 * @param {object} e
			 * @returns {boolean}
			 */
			onKeyUp: function(e) {
				var self = this;
		
				if (self.isLocked) return e && e.preventDefault();
				var value = self.$control_input.val() || '';
				if (self.lastValue !== value) {
					self.lastValue = value;
					self.onSearchChange(value);
					self.refreshOptions();
					self.trigger('type', value);
				}
			},
		
			/**
			 * Invokes the user-provide option provider / loader.
			 *
			 * Note: this function is debounced in the Selectize
			 * constructor (by `settings.loadThrottle` milliseconds)
			 *
			 * @param {string} value
			 */
			onSearchChange: function(value) {
				var self = this;
				var fn = self.settings.load;
				if (!fn) return;
				if (self.loadedSearches.hasOwnProperty(value)) return;
				self.loadedSearches[value] = true;
				self.load(function(callback) {
					fn.apply(self, [value, callback]);
				});
			},
		
			/**
			 * Triggered on <input> focus.
			 *
			 * @param {object} e (optional)
			 * @returns {boolean}
			 */
			onFocus: function(e) {
				var self = this;
				var wasFocused = self.isFocused;
		
				if (self.isDisabled) {
					self.blur();
					e && e.preventDefault();
					return false;
				}
		
				if (self.ignoreFocus) return;
				self.isFocused = true;
				if (self.settings.preload === 'focus') self.onSearchChange('');
		
				if (!wasFocused) self.trigger('focus');
		
				if (!self.$activeItems.length) {
					self.showInput();
					self.setActiveItem(null);
					self.refreshOptions(!!self.settings.openOnFocus);
				}
		
				self.refreshState();
			},
		
			/**
			 * Triggered on <input> blur.
			 *
			 * @param {object} e
			 * @param {Element} dest
			 */
			onBlur: function(e, dest) {
				var self = this;
				if (!self.isFocused) return;
				self.isFocused = false;
		
				if (self.ignoreFocus) {
					return;
				} else if (!self.ignoreBlur && document.activeElement === self.$dropdown_content[0]) {
					// necessary to prevent IE closing the dropdown when the scrollbar is clicked
					self.ignoreBlur = true;
					self.onFocus(e);
					return;
				}
		
				var deactivate = function() {
					self.close();
					self.setTextboxValue('');
					self.setActiveItem(null);
					self.setActiveOption(null);
					self.setCaret(self.items.length);
					self.refreshState();
		
					// IE11 bug: element still marked as active
					dest && dest.focus && dest.focus();
		
					self.ignoreFocus = false;
					self.trigger('blur');
				};
		
				self.ignoreFocus = true;
				if (self.settings.create && self.settings.createOnBlur) {
					self.createItem(null, false, deactivate);
				} else {
					deactivate();
				}
			},
		
			/**
			 * Triggered when the user rolls over
			 * an option in the autocomplete dropdown menu.
			 *
			 * @param {object} e
			 * @returns {boolean}
			 */
			onOptionHover: function(e) {
				if (this.ignoreHover) return;
				this.setActiveOption(e.currentTarget, false);
			},
		
			/**
			 * Triggered when the user clicks on an option
			 * in the autocomplete dropdown menu.
			 *
			 * @param {object} e
			 * @returns {boolean}
			 */
			onOptionSelect: function(e) {
				var value, $target, $option, self = this;
		
				if (e.preventDefault) {
					e.preventDefault();
					e.stopPropagation();
				}
		
				$target = $(e.currentTarget);
				if ($target.hasClass('create')) {
					self.createItem(null, function() {
						if (self.settings.closeAfterSelect) {
							self.close();
						}
					});
				} else {
					value = $target.attr('data-value');
					if (typeof value !== 'undefined') {
						self.lastQuery = null;
						self.setTextboxValue('');
						self.addItem(value);
						if (self.settings.closeAfterSelect) {
							self.close();
						} else if (!self.settings.hideSelected && e.type && /mouse/.test(e.type)) {
							self.setActiveOption(self.getOption(value));
						}
					}
				}
			},
		
			/**
			 * Triggered when the user clicks on an item
			 * that has been selected.
			 *
			 * @param {object} e
			 * @returns {boolean}
			 */
			onItemSelect: function(e) {
				var self = this;
		
				if (self.isLocked) return;
				if (self.settings.mode === 'multi') {
					e.preventDefault();
					self.setActiveItem(e.currentTarget, e);
				}
			},
		
			/**
			 * Invokes the provided method that provides
			 * results to a callback---which are then added
			 * as options to the control.
			 *
			 * @param {function} fn
			 */
			load: function(fn) {
				var self = this;
				var $wrapper = self.$wrapper.addClass(self.settings.loadingClass);
		
				self.loading++;
				fn.apply(self, [function(results) {
					self.loading = Math.max(self.loading - 1, 0);
					if (results && results.length) {
						self.addOption(results);
						self.refreshOptions(self.isFocused && !self.isInputHidden);
					}
					if (!self.loading) {
						$wrapper.removeClass(self.settings.loadingClass);
					}
					self.trigger('load', results);
				}]);
			},
		
			/**
			 * Sets the input field of the control to the specified value.
			 *
			 * @param {string} value
			 */
			setTextboxValue: function(value) {
				var $input = this.$control_input;
				var changed = $input.val() !== value;
				if (changed) {
					$input.val(value).triggerHandler('update');
					this.lastValue = value;
				}
			},
		
			/**
			 * Returns the value of the control. If multiple items
			 * can be selected (e.g. <select multiple>), this returns
			 * an array. If only one item can be selected, this
			 * returns a string.
			 *
			 * @returns {mixed}
			 */
			getValue: function() {
				if (this.tagType === TAG_SELECT && this.$input.attr('multiple')) {
					return this.items;
				} else {
					return this.items.join(this.settings.delimiter);
				}
			},
		
			/**
			 * Resets the selected items to the given value.
			 *
			 * @param {mixed} value
			 */
			setValue: function(value, silent) {
				var events = silent ? [] : ['change'];
		
				debounce_events(this, events, function() {
					this.clear(silent);
					this.addItems(value, silent);
				});
			},
		
			/**
			 * Sets the selected item.
			 *
			 * @param {object} $item
			 * @param {object} e (optional)
			 */
			setActiveItem: function($item, e) {
				var self = this;
				var eventName;
				var i, idx, begin, end, item, swap;
				var $last;
		
				if (self.settings.mode === 'single') return;
				$item = $($item);
		
				// clear the active selection
				if (!$item.length) {
					$(self.$activeItems).removeClass('active');
					self.$activeItems = [];
					if (self.isFocused) {
						self.showInput();
					}
					return;
				}
		
				// modify selection
				eventName = e && e.type.toLowerCase();
		
				if (eventName === 'mousedown' && self.isShiftDown && self.$activeItems.length) {
					$last = self.$control.children('.active:last');
					begin = Array.prototype.indexOf.apply(self.$control[0].childNodes, [$last[0]]);
					end   = Array.prototype.indexOf.apply(self.$control[0].childNodes, [$item[0]]);
					if (begin > end) {
						swap  = begin;
						begin = end;
						end   = swap;
					}
					for (i = begin; i <= end; i++) {
						item = self.$control[0].childNodes[i];
						if (self.$activeItems.indexOf(item) === -1) {
							$(item).addClass('active');
							self.$activeItems.push(item);
						}
					}
					e.preventDefault();
				} else if ((eventName === 'mousedown' && self.isCtrlDown) || (eventName === 'keydown' && this.isShiftDown)) {
					if ($item.hasClass('active')) {
						idx = self.$activeItems.indexOf($item[0]);
						self.$activeItems.splice(idx, 1);
						$item.removeClass('active');
					} else {
						self.$activeItems.push($item.addClass('active')[0]);
					}
				} else {
					$(self.$activeItems).removeClass('active');
					self.$activeItems = [$item.addClass('active')[0]];
				}
		
				// ensure control has focus
				self.hideInput();
				if (!this.isFocused) {
					self.focus();
				}
			},
		
			/**
			 * Sets the selected item in the dropdown menu
			 * of available options.
			 *
			 * @param {object} $object
			 * @param {boolean} scroll
			 * @param {boolean} animate
			 */
			setActiveOption: function($option, scroll, animate) {
				var height_menu, height_item, y;
				var scroll_top, scroll_bottom;
				var self = this;
		
				if (self.$activeOption) self.$activeOption.removeClass('active');
				self.$activeOption = null;
		
				$option = $($option);
				if (!$option.length) return;
		
				self.$activeOption = $option.addClass('active');
		
				if (scroll || !isset(scroll)) {
		
					height_menu   = self.$dropdown_content.height();
					height_item   = self.$activeOption.outerHeight(true);
					scroll        = self.$dropdown_content.scrollTop() || 0;
					y             = self.$activeOption.offset().top - self.$dropdown_content.offset().top + scroll;
					scroll_top    = y;
					scroll_bottom = y - height_menu + height_item;
		
					if (y + height_item > height_menu + scroll) {
						self.$dropdown_content.stop().animate({scrollTop: scroll_bottom}, animate ? self.settings.scrollDuration : 0);
					} else if (y < scroll) {
						self.$dropdown_content.stop().animate({scrollTop: scroll_top}, animate ? self.settings.scrollDuration : 0);
					}
		
				}
			},
		
			/**
			 * Selects all items (CTRL + A).
			 */
			selectAll: function() {
				var self = this;
				if (self.settings.mode === 'single') return;
		
				self.$activeItems = Array.prototype.slice.apply(self.$control.children(':not(input)').addClass('active'));
				if (self.$activeItems.length) {
					self.hideInput();
					self.close();
				}
				self.focus();
			},
		
			/**
			 * Hides the input element out of view, while
			 * retaining its focus.
			 */
			hideInput: function() {
				var self = this;
		
				self.setTextboxValue('');
				self.$control_input.css({opacity: 0, position: 'absolute', left: self.rtl ? 10000 : -10000});
				self.isInputHidden = true;
			},
		
			/**
			 * Restores input visibility.
			 */
			showInput: function() {
				this.$control_input.css({opacity: 1, position: 'relative', left: 0});
				this.isInputHidden = false;
			},
		
			/**
			 * Gives the control focus.
			 */
			focus: function() {
				var self = this;
				if (self.isDisabled) return;
		
				self.ignoreFocus = true;
				self.$control_input[0].focus();
				window.setTimeout(function() {
					self.ignoreFocus = false;
					self.onFocus();
				}, 0);
			},
		
			/**
			 * Forces the control out of focus.
			 *
			 * @param {Element} dest
			 */
			blur: function(dest) {
				this.$control_input[0].blur();
				this.onBlur(null, dest);
			},
		
			/**
			 * Returns a function that scores an object
			 * to show how good of a match it is to the
			 * provided query.
			 *
			 * @param {string} query
			 * @param {object} options
			 * @return {function}
			 */
			getScoreFunction: function(query) {
				return this.sifter.getScoreFunction(query, this.getSearchOptions());
			},
		
			/**
			 * Returns search options for sifter (the system
			 * for scoring and sorting results).
			 *
			 * @see https://github.com/brianreavis/sifter.js
			 * @return {object}
			 */
			getSearchOptions: function() {
				var settings = this.settings;
				var sort = settings.sortField;
				if (typeof sort === 'string') {
					sort = [{field: sort}];
				}
		
				return {
					fields      : settings.searchField,
					conjunction : settings.searchConjunction,
					sort        : sort
				};
			},
		
			/**
			 * Searches through available options and returns
			 * a sorted array of matches.
			 *
			 * Returns an object containing:
			 *
			 *   - query {string}
			 *   - tokens {array}
			 *   - total {int}
			 *   - items {array}
			 *
			 * @param {string} query
			 * @returns {object}
			 */
			search: function(query) {
				var i, value, score, result, calculateScore;
				var self     = this;
				var settings = self.settings;
				var options  = this.getSearchOptions();
		
				// validate user-provided result scoring function
				if (settings.score) {
					calculateScore = self.settings.score.apply(this, [query]);
					if (typeof calculateScore !== 'function') {
						throw new Error('Selectize "score" setting must be a function that returns a function');
					}
				}
		
				// perform search
				if (query !== self.lastQuery) {
					self.lastQuery = query;
					result = self.sifter.search(query, $.extend(options, {score: calculateScore}));
					self.currentResults = result;
				} else {
					result = $.extend(true, {}, self.currentResults);
				}
		
				// filter out selected items
				if (settings.hideSelected) {
					for (i = result.items.length - 1; i >= 0; i--) {
						if (self.items.indexOf(hash_key(result.items[i].id)) !== -1) {
							result.items.splice(i, 1);
						}
					}
				}
		
				return result;
			},
		
			/**
			 * Refreshes the list of available options shown
			 * in the autocomplete dropdown menu.
			 *
			 * @param {boolean} triggerDropdown
			 */
			refreshOptions: function(triggerDropdown) {
				var i, j, k, n, groups, groups_order, option, option_html, optgroup, optgroups, html, html_children, has_create_option;
				var $active, $active_before, $create;
		
				if (typeof triggerDropdown === 'undefined') {
					triggerDropdown = true;
				}
		
				var self              = this;
				var query             = $.trim(self.$control_input.val());
				var results           = self.search(query);
				var $dropdown_content = self.$dropdown_content;
				var active_before     = self.$activeOption && hash_key(self.$activeOption.attr('data-value'));
		
				// build markup
				n = results.items.length;
				if (typeof self.settings.maxOptions === 'number') {
					n = Math.min(n, self.settings.maxOptions);
				}
		
				// render and group available options individually
				groups = {};
				groups_order = [];
		
				for (i = 0; i < n; i++) {
					option      = self.options[results.items[i].id];
					option_html = self.render('option', option);
					optgroup    = option[self.settings.optgroupField] || '';
					optgroups   = $.isArray(optgroup) ? optgroup : [optgroup];
		
					for (j = 0, k = optgroups && optgroups.length; j < k; j++) {
						optgroup = optgroups[j];
						if (!self.optgroups.hasOwnProperty(optgroup)) {
							optgroup = '';
						}
						if (!groups.hasOwnProperty(optgroup)) {
							groups[optgroup] = document.createDocumentFragment();
							groups_order.push(optgroup);
						}
						groups[optgroup].appendChild(option_html);
					}
				}
		
				// sort optgroups
				if (this.settings.lockOptgroupOrder) {
					groups_order.sort(function(a, b) {
						var a_order = self.optgroups[a].$order || 0;
						var b_order = self.optgroups[b].$order || 0;
						return a_order - b_order;
					});
				}
		
				// render optgroup headers & join groups
				html = document.createDocumentFragment();
				for (i = 0, n = groups_order.length; i < n; i++) {
					optgroup = groups_order[i];
					if (self.optgroups.hasOwnProperty(optgroup) && groups[optgroup].childNodes.length) {
						// render the optgroup header and options within it,
						// then pass it to the wrapper template
						html_children = document.createDocumentFragment();
						html_children.appendChild(self.render('optgroup_header', self.optgroups[optgroup]));
						html_children.appendChild(groups[optgroup]);
		
						html.appendChild(self.render('optgroup', $.extend({}, self.optgroups[optgroup], {
							html: domToString(html_children),
							dom:  html_children
						})));
					} else {
						html.appendChild(groups[optgroup]);
					}
				}
		
				$dropdown_content.html(html);
		
				// highlight matching terms inline
				if (self.settings.highlight && results.query.length && results.tokens.length) {
					$dropdown_content.removeHighlight();
					for (i = 0, n = results.tokens.length; i < n; i++) {
						highlight($dropdown_content, results.tokens[i].regex);
					}
				}
		
				// add "selected" class to selected options
				if (!self.settings.hideSelected) {
					for (i = 0, n = self.items.length; i < n; i++) {
						self.getOption(self.items[i]).addClass('selected');
					}
				}
		
				// add create option
				has_create_option = self.canCreate(query);
				if (has_create_option) {
					$dropdown_content.prepend(self.render('option_create', {input: query}));
					$create = $($dropdown_content[0].childNodes[0]);
				}
		
				// activate
				self.hasOptions = results.items.length > 0 || has_create_option;
				if (self.hasOptions) {
					if (results.items.length > 0) {
						$active_before = active_before && self.getOption(active_before);
						if ($active_before && $active_before.length) {
							$active = $active_before;
						} else if (self.settings.mode === 'single' && self.items.length) {
							$active = self.getOption(self.items[0]);
						}
						if (!$active || !$active.length) {
							if ($create && !self.settings.addPrecedence) {
								$active = self.getAdjacentOption($create, 1);
							} else {
								$active = $dropdown_content.find('[data-selectable]:first');
							}
						}
					} else {
						$active = $create;
					}
					self.setActiveOption($active);
					if (triggerDropdown && !self.isOpen) { self.open(); }
				} else {
					self.setActiveOption(null);
					if (triggerDropdown && self.isOpen) { self.close(); }
				}
			},
		
			/**
			 * Adds an available option. If it already exists,
			 * nothing will happen. Note: this does not refresh
			 * the options list dropdown (use `refreshOptions`
			 * for that).
			 *
			 * Usage:
			 *
			 *   this.addOption(data)
			 *
			 * @param {object|array} data
			 */
			addOption: function(data) {
				var i, n, value, self = this;
		
				if ($.isArray(data)) {
					for (i = 0, n = data.length; i < n; i++) {
						self.addOption(data[i]);
					}
					return;
				}
		
				if (value = self.registerOption(data)) {
					self.userOptions[value] = true;
					self.lastQuery = null;
					self.trigger('option_add', value, data);
				}
			},
		
			/**
			 * Registers an option to the pool of options.
			 *
			 * @param {object} data
			 * @return {boolean|string}
			 */
			registerOption: function(data) {
				var key = hash_key(data[this.settings.valueField]);
				if (typeof key === 'undefined' || key === null || this.options.hasOwnProperty(key)) return false;
				data.$order = data.$order || ++this.order;
				this.options[key] = data;
				return key;
			},
		
			/**
			 * Registers an option group to the pool of option groups.
			 *
			 * @param {object} data
			 * @return {boolean|string}
			 */
			registerOptionGroup: function(data) {
				var key = hash_key(data[this.settings.optgroupValueField]);
				if (!key) return false;
		
				data.$order = data.$order || ++this.order;
				this.optgroups[key] = data;
				return key;
			},
		
			/**
			 * Registers a new optgroup for options
			 * to be bucketed into.
			 *
			 * @param {string} id
			 * @param {object} data
			 */
			addOptionGroup: function(id, data) {
				data[this.settings.optgroupValueField] = id;
				if (id = this.registerOptionGroup(data)) {
					this.trigger('optgroup_add', id, data);
				}
			},
		
			/**
			 * Removes an existing option group.
			 *
			 * @param {string} id
			 */
			removeOptionGroup: function(id) {
				if (this.optgroups.hasOwnProperty(id)) {
					delete this.optgroups[id];
					this.renderCache = {};
					this.trigger('optgroup_remove', id);
				}
			},
		
			/**
			 * Clears all existing option groups.
			 */
			clearOptionGroups: function() {
				this.optgroups = {};
				this.renderCache = {};
				this.trigger('optgroup_clear');
			},
		
			/**
			 * Updates an option available for selection. If
			 * it is visible in the selected items or options
			 * dropdown, it will be re-rendered automatically.
			 *
			 * @param {string} value
			 * @param {object} data
			 */
			updateOption: function(value, data) {
				var self = this;
				var $item, $item_new;
				var value_new, index_item, cache_items, cache_options, order_old;
		
				value     = hash_key(value);
				value_new = hash_key(data[self.settings.valueField]);
		
				// sanity checks
				if (value === null) return;
				if (!self.options.hasOwnProperty(value)) return;
				if (typeof value_new !== 'string') throw new Error('Value must be set in option data');
		
				order_old = self.options[value].$order;
		
				// update references
				if (value_new !== value) {
					delete self.options[value];
					index_item = self.items.indexOf(value);
					if (index_item !== -1) {
						self.items.splice(index_item, 1, value_new);
					}
				}
				data.$order = data.$order || order_old;
				self.options[value_new] = data;
		
				// invalidate render cache
				cache_items = self.renderCache['item'];
				cache_options = self.renderCache['option'];
		
				if (cache_items) {
					delete cache_items[value];
					delete cache_items[value_new];
				}
				if (cache_options) {
					delete cache_options[value];
					delete cache_options[value_new];
				}
		
				// update the item if it's selected
				if (self.items.indexOf(value_new) !== -1) {
					$item = self.getItem(value);
					$item_new = $(self.render('item', data));
					if ($item.hasClass('active')) $item_new.addClass('active');
					$item.replaceWith($item_new);
				}
		
				// invalidate last query because we might have updated the sortField
				self.lastQuery = null;
		
				// update dropdown contents
				if (self.isOpen) {
					self.refreshOptions(false);
				}
			},
		
			/**
			 * Removes a single option.
			 *
			 * @param {string} value
			 * @param {boolean} silent
			 */
			removeOption: function(value, silent) {
				var self = this;
				value = hash_key(value);
		
				var cache_items = self.renderCache['item'];
				var cache_options = self.renderCache['option'];
				if (cache_items) delete cache_items[value];
				if (cache_options) delete cache_options[value];
		
				delete self.userOptions[value];
				delete self.options[value];
				self.lastQuery = null;
				self.trigger('option_remove', value);
				self.removeItem(value, silent);
			},
		
			/**
			 * Clears all options.
			 */
			clearOptions: function() {
				var self = this;
		
				self.loadedSearches = {};
				self.userOptions = {};
				self.renderCache = {};
				self.options = self.sifter.items = {};
				self.lastQuery = null;
				self.trigger('option_clear');
				self.clear();
			},
		
			/**
			 * Returns the jQuery element of the option
			 * matching the given value.
			 *
			 * @param {string} value
			 * @returns {object}
			 */
			getOption: function(value) {
				return this.getElementWithValue(value, this.$dropdown_content.find('[data-selectable]'));
			},
		
			/**
			 * Returns the jQuery element of the next or
			 * previous selectable option.
			 *
			 * @param {object} $option
			 * @param {int} direction  can be 1 for next or -1 for previous
			 * @return {object}
			 */
			getAdjacentOption: function($option, direction) {
				var $options = this.$dropdown.find('[data-selectable]');
				var index    = $options.index($option) + direction;
		
				return index >= 0 && index < $options.length ? $options.eq(index) : $();
			},
		
			/**
			 * Finds the first element with a "data-value" attribute
			 * that matches the given value.
			 *
			 * @param {mixed} value
			 * @param {object} $els
			 * @return {object}
			 */
			getElementWithValue: function(value, $els) {
				value = hash_key(value);
		
				if (typeof value !== 'undefined' && value !== null) {
					for (var i = 0, n = $els.length; i < n; i++) {
						if ($els[i].getAttribute('data-value') === value) {
							return $($els[i]);
						}
					}
				}
		
				return $();
			},
		
			/**
			 * Returns the jQuery element of the item
			 * matching the given value.
			 *
			 * @param {string} value
			 * @returns {object}
			 */
			getItem: function(value) {
				return this.getElementWithValue(value, this.$control.children());
			},
		
			/**
			 * "Selects" multiple items at once. Adds them to the list
			 * at the current caret position.
			 *
			 * @param {string} value
			 * @param {boolean} silent
			 */
			addItems: function(values, silent) {
				var items = $.isArray(values) ? values : [values];
				for (var i = 0, n = items.length; i < n; i++) {
					this.isPending = (i < n - 1);
					this.addItem(items[i], silent);
				}
			},
		
			/**
			 * "Selects" an item. Adds it to the list
			 * at the current caret position.
			 *
			 * @param {string} value
			 * @param {boolean} silent
			 */
			addItem: function(value, silent) {
				var events = silent ? [] : ['change'];
		
				debounce_events(this, events, function() {
					var $item, $option, $options;
					var self = this;
					var inputMode = self.settings.mode;
					var i, active, value_next, wasFull;
					value = hash_key(value);
		
					if (self.items.indexOf(value) !== -1) {
						if (inputMode === 'single') self.close();
						return;
					}
		
					if (!self.options.hasOwnProperty(value)) return;
					if (inputMode === 'single') self.clear(silent);
					if (inputMode === 'multi' && self.isFull()) return;
		
					$item = $(self.render('item', self.options[value]));
					wasFull = self.isFull();
					self.items.splice(self.caretPos, 0, value);
					self.insertAtCaret($item);
					if (!self.isPending || (!wasFull && self.isFull())) {
						self.refreshState();
					}
		
					if (self.isSetup) {
						$options = self.$dropdown_content.find('[data-selectable]');
		
						// update menu / remove the option (if this is not one item being added as part of series)
						if (!self.isPending) {
							$option = self.getOption(value);
							value_next = self.getAdjacentOption($option, 1).attr('data-value');
							self.refreshOptions(self.isFocused && inputMode !== 'single');
							if (value_next) {
								self.setActiveOption(self.getOption(value_next));
							}
						}
		
						// hide the menu if the maximum number of items have been selected or no options are left
						if (!$options.length || self.isFull()) {
							self.close();
						} else {
							self.positionDropdown();
						}
		
						self.updatePlaceholder();
						self.trigger('item_add', value, $item);
						self.updateOriginalInput({silent: silent});
					}
				});
			},
		
			/**
			 * Removes the selected item matching
			 * the provided value.
			 *
			 * @param {string} value
			 */
			removeItem: function(value, silent) {
				var self = this;
				var $item, i, idx;
		
				$item = (value instanceof $) ? value : self.getItem(value);
				value = hash_key($item.attr('data-value'));
				i = self.items.indexOf(value);
		
				if (i !== -1) {
					$item.remove();
					if ($item.hasClass('active')) {
						idx = self.$activeItems.indexOf($item[0]);
						self.$activeItems.splice(idx, 1);
					}
		
					self.items.splice(i, 1);
					self.lastQuery = null;
					if (!self.settings.persist && self.userOptions.hasOwnProperty(value)) {
						self.removeOption(value, silent);
					}
		
					if (i < self.caretPos) {
						self.setCaret(self.caretPos - 1);
					}
		
					self.refreshState();
					self.updatePlaceholder();
					self.updateOriginalInput({silent: silent});
					self.positionDropdown();
					self.trigger('item_remove', value, $item);
				}
			},
		
			/**
			 * Invokes the `create` method provided in the
			 * selectize options that should provide the data
			 * for the new item, given the user input.
			 *
			 * Once this completes, it will be added
			 * to the item list.
			 *
			 * @param {string} value
			 * @param {boolean} [triggerDropdown]
			 * @param {function} [callback]
			 * @return {boolean}
			 */
			createItem: function(input, triggerDropdown) {
				var self  = this;
				var caret = self.caretPos;
				input = input || $.trim(self.$control_input.val() || '');
		
				var callback = arguments[arguments.length - 1];
				if (typeof callback !== 'function') callback = function() {};
		
				if (typeof triggerDropdown !== 'boolean') {
					triggerDropdown = true;
				}
		
				if (!self.canCreate(input)) {
					callback();
					return false;
				}
		
				self.lock();
		
				var setup = (typeof self.settings.create === 'function') ? this.settings.create : function(input) {
					var data = {};
					data[self.settings.labelField] = input;
					data[self.settings.valueField] = input;
					return data;
				};
		
				var create = once(function(data) {
					self.unlock();
		
					if (!data || typeof data !== 'object') return callback();
					var value = hash_key(data[self.settings.valueField]);
					if (typeof value !== 'string') return callback();
		
					self.setTextboxValue('');
					self.addOption(data);
					self.setCaret(caret);
					self.addItem(value);
					self.refreshOptions(triggerDropdown && self.settings.mode !== 'single');
					callback(data);
				});
		
				var output = setup.apply(this, [input, create]);
				if (typeof output !== 'undefined') {
					create(output);
				}
		
				return true;
			},
		
			/**
			 * Re-renders the selected item lists.
			 */
			refreshItems: function() {
				this.lastQuery = null;
		
				if (this.isSetup) {
					this.addItem(this.items);
				}
		
				this.refreshState();
				this.updateOriginalInput();
			},
		
			/**
			 * Updates all state-dependent attributes
			 * and CSS classes.
			 */
			refreshState: function() {
				this.refreshValidityState();
				this.refreshClasses();
			},
		
			/**
			 * Update the `required` attribute of both input and control input.
			 *
			 * The `required` property needs to be activated on the control input
			 * for the error to be displayed at the right place. `required` also
			 * needs to be temporarily deactivated on the input since the input is
			 * hidden and can't show errors.
			 */
			refreshValidityState: function() {
				if (!this.isRequired) return false;
		
				var invalid = !this.items.length;
		
				this.isInvalid = invalid;
				this.$control_input.prop('required', invalid);
				this.$input.prop('required', !invalid);
			},
		
			/**
			 * Updates all state-dependent CSS classes.
			 */
			refreshClasses: function() {
				var self     = this;
				var isFull   = self.isFull();
				var isLocked = self.isLocked;
		
				self.$wrapper
					.toggleClass('rtl', self.rtl);
		
				self.$control
					.toggleClass('focus', self.isFocused)
					.toggleClass('disabled', self.isDisabled)
					.toggleClass('required', self.isRequired)
					.toggleClass('invalid', self.isInvalid)
					.toggleClass('locked', isLocked)
					.toggleClass('full', isFull).toggleClass('not-full', !isFull)
					.toggleClass('input-active', self.isFocused && !self.isInputHidden)
					.toggleClass('dropdown-active', self.isOpen)
					.toggleClass('has-options', !$.isEmptyObject(self.options))
					.toggleClass('has-items', self.items.length > 0);
		
				self.$control_input.data('grow', !isFull && !isLocked);
			},
		
			/**
			 * Determines whether or not more items can be added
			 * to the control without exceeding the user-defined maximum.
			 *
			 * @returns {boolean}
			 */
			isFull: function() {
				return this.settings.maxItems !== null && this.items.length >= this.settings.maxItems;
			},
		
			/**
			 * Refreshes the original <select> or <input>
			 * element to reflect the current state.
			 */
			updateOriginalInput: function(opts) {
				var i, n, options, label, self = this;
				opts = opts || {};
		
				if (self.tagType === TAG_SELECT) {
					options = [];
					for (i = 0, n = self.items.length; i < n; i++) {
						label = self.options[self.items[i]][self.settings.labelField] || '';
						options.push('<option value="' + escape_html(self.items[i]) + '" selected="selected">' + escape_html(label) + '</option>');
					}
					if (!options.length && !this.$input.attr('multiple')) {
						options.push('<option value="" selected="selected"></option>');
					}
					self.$input.html(options.join(''));
				} else {
					self.$input.val(self.getValue());
					self.$input.attr('value',self.$input.val());
				}
		
				if (self.isSetup) {
					if (!opts.silent) {
						self.trigger('change', self.$input.val());
					}
				}
			},
		
			/**
			 * Shows/hide the input placeholder depending
			 * on if there items in the list already.
			 */
			updatePlaceholder: function() {
				if (!this.settings.placeholder) return;
				var $input = this.$control_input;
		
				if (this.items.length) {
					$input.removeAttr('placeholder');
				} else {
					$input.attr('placeholder', this.settings.placeholder);
				}
				$input.triggerHandler('update', {force: true});
			},
		
			/**
			 * Shows the autocomplete dropdown containing
			 * the available options.
			 */
			open: function() {
				var self = this;
		
				if (self.isLocked || self.isOpen || (self.settings.mode === 'multi' && self.isFull())) return;
				self.focus();
				self.isOpen = true;
				self.refreshState();
				self.$dropdown.css({visibility: 'hidden', display: 'block'});
				self.positionDropdown();
				self.$dropdown.css({visibility: 'visible'});
				self.trigger('dropdown_open', self.$dropdown);
			},
		
			/**
			 * Closes the autocomplete dropdown menu.
			 */
			close: function() {
				var self = this;
				var trigger = self.isOpen;
		
				if (self.settings.mode === 'single' && self.items.length) {
					self.hideInput();
					self.$control_input.blur(); // close keyboard on iOS
				}
		
				self.isOpen = false;
				self.$dropdown.hide();
				self.setActiveOption(null);
				self.refreshState();
		
				if (trigger) self.trigger('dropdown_close', self.$dropdown);
			},
		
			/**
			 * Calculates and applies the appropriate
			 * position of the dropdown.
			 */
			positionDropdown: function() {
				var $control = this.$control;
				var offset = this.settings.dropdownParent === 'body' ? $control.offset() : $control.position();
				offset.top += $control.outerHeight(true);
		
				this.$dropdown.css({
					width : $control.outerWidth(),
					top   : offset.top,
					left  : offset.left
				});
			},
		
			/**
			 * Resets / clears all selected items
			 * from the control.
			 *
			 * @param {boolean} silent
			 */
			clear: function(silent) {
				var self = this;
		
				if (!self.items.length) return;
				self.$control.children(':not(input)').remove();
				self.items = [];
				self.lastQuery = null;
				self.setCaret(0);
				self.setActiveItem(null);
				self.updatePlaceholder();
				self.updateOriginalInput({silent: silent});
				self.refreshState();
				self.showInput();
				self.trigger('clear');
			},
		
			/**
			 * A helper method for inserting an element
			 * at the current caret position.
			 *
			 * @param {object} $el
			 */
			insertAtCaret: function($el) {
				var caret = Math.min(this.caretPos, this.items.length);
				if (caret === 0) {
					this.$control.prepend($el);
				} else {
					$(this.$control[0].childNodes[caret]).before($el);
				}
				this.setCaret(caret + 1);
			},
		
			/**
			 * Removes the current selected item(s).
			 *
			 * @param {object} e (optional)
			 * @returns {boolean}
			 */
			deleteSelection: function(e) {
				var i, n, direction, selection, values, caret, option_select, $option_select, $tail;
				var self = this;
		
				direction = (e && e.keyCode === KEY_BACKSPACE) ? -1 : 1;
				selection = getSelection(self.$control_input[0]);
		
				if (self.$activeOption && !self.settings.hideSelected) {
					option_select = self.getAdjacentOption(self.$activeOption, -1).attr('data-value');
				}
		
				// determine items that will be removed
				values = [];
		
				if (self.$activeItems.length) {
					$tail = self.$control.children('.active:' + (direction > 0 ? 'last' : 'first'));
					caret = self.$control.children(':not(input)').index($tail);
					if (direction > 0) { caret++; }
		
					for (i = 0, n = self.$activeItems.length; i < n; i++) {
						values.push($(self.$activeItems[i]).attr('data-value'));
					}
					if (e) {
						e.preventDefault();
						e.stopPropagation();
					}
				} else if ((self.isFocused || self.settings.mode === 'single') && self.items.length) {
					if (direction < 0 && selection.start === 0 && selection.length === 0) {
						values.push(self.items[self.caretPos - 1]);
					} else if (direction > 0 && selection.start === self.$control_input.val().length) {
						values.push(self.items[self.caretPos]);
					}
				}
		
				// allow the callback to abort
				if (!values.length || (typeof self.settings.onDelete === 'function' && self.settings.onDelete.apply(self, [values]) === false)) {
					return false;
				}
		
				// perform removal
				if (typeof caret !== 'undefined') {
					self.setCaret(caret);
				}
				while (values.length) {
					self.removeItem(values.pop());
				}
		
				self.showInput();
				self.positionDropdown();
				self.refreshOptions(true);
		
				// select previous option
				if (option_select) {
					$option_select = self.getOption(option_select);
					if ($option_select.length) {
						self.setActiveOption($option_select);
					}
				}
		
				return true;
			},
		
			/**
			 * Selects the previous / next item (depending
			 * on the `direction` argument).
			 *
			 * > 0 - right
			 * < 0 - left
			 *
			 * @param {int} direction
			 * @param {object} e (optional)
			 */
			advanceSelection: function(direction, e) {
				var tail, selection, idx, valueLength, cursorAtEdge, $tail;
				var self = this;
		
				if (direction === 0) return;
				if (self.rtl) direction *= -1;
		
				tail = direction > 0 ? 'last' : 'first';
				selection = getSelection(self.$control_input[0]);
		
				if (self.isFocused && !self.isInputHidden) {
					valueLength = self.$control_input.val().length;
					cursorAtEdge = direction < 0
						? selection.start === 0 && selection.length === 0
						: selection.start === valueLength;
		
					if (cursorAtEdge && !valueLength) {
						self.advanceCaret(direction, e);
					}
				} else {
					$tail = self.$control.children('.active:' + tail);
					if ($tail.length) {
						idx = self.$control.children(':not(input)').index($tail);
						self.setActiveItem(null);
						self.setCaret(direction > 0 ? idx + 1 : idx);
					}
				}
			},
		
			/**
			 * Moves the caret left / right.
			 *
			 * @param {int} direction
			 * @param {object} e (optional)
			 */
			advanceCaret: function(direction, e) {
				var self = this, fn, $adj;
		
				if (direction === 0) return;
		
				fn = direction > 0 ? 'next' : 'prev';
				if (self.isShiftDown) {
					$adj = self.$control_input[fn]();
					if ($adj.length) {
						self.hideInput();
						self.setActiveItem($adj);
						e && e.preventDefault();
					}
				} else {
					self.setCaret(self.caretPos + direction);
				}
			},
		
			/**
			 * Moves the caret to the specified index.
			 *
			 * @param {int} i
			 */
			setCaret: function(i) {
				var self = this;
		
				if (self.settings.mode === 'single') {
					i = self.items.length;
				} else {
					i = Math.max(0, Math.min(self.items.length, i));
				}
		
				if(!self.isPending) {
					// the input must be moved by leaving it in place and moving the
					// siblings, due to the fact that focus cannot be restored once lost
					// on mobile webkit devices
					var j, n, fn, $children, $child;
					$children = self.$control.children(':not(input)');
					for (j = 0, n = $children.length; j < n; j++) {
						$child = $($children[j]).detach();
						if (j <  i) {
							self.$control_input.before($child);
						} else {
							self.$control.append($child);
						}
					}
				}
		
				self.caretPos = i;
			},
		
			/**
			 * Disables user input on the control. Used while
			 * items are being asynchronously created.
			 */
			lock: function() {
				this.close();
				this.isLocked = true;
				this.refreshState();
			},
		
			/**
			 * Re-enables user input on the control.
			 */
			unlock: function() {
				this.isLocked = false;
				this.refreshState();
			},
		
			/**
			 * Disables user input on the control completely.
			 * While disabled, it cannot receive focus.
			 */
			disable: function() {
				var self = this;
				self.$input.prop('disabled', true);
				self.$control_input.prop('disabled', true).prop('tabindex', -1);
				self.isDisabled = true;
				self.lock();
			},
		
			/**
			 * Enables the control so that it can respond
			 * to focus and user input.
			 */
			enable: function() {
				var self = this;
				self.$input.prop('disabled', false);
				self.$control_input.prop('disabled', false).prop('tabindex', self.tabIndex);
				self.isDisabled = false;
				self.unlock();
			},
		
			/**
			 * Completely destroys the control and
			 * unbinds all event listeners so that it can
			 * be garbage collected.
			 */
			destroy: function() {
				var self = this;
				var eventNS = self.eventNS;
				var revertSettings = self.revertSettings;
		
				self.trigger('destroy');
				self.off();
				self.$wrapper.remove();
				self.$dropdown.remove();
		
				self.$input
					.html('')
					.append(revertSettings.$children)
					.removeAttr('tabindex')
					.removeClass('selectized')
					.attr({tabindex: revertSettings.tabindex})
					.show();
		
				self.$control_input.removeData('grow');
				self.$input.removeData('selectize');
		
				$(window).off(eventNS);
				$(document).off(eventNS);
				$(document.body).off(eventNS);
		
				delete self.$input[0].selectize;
			},
		
			/**
			 * A helper method for rendering "item" and
			 * "option" templates, given the data.
			 *
			 * @param {string} templateName
			 * @param {object} data
			 * @returns {string}
			 */
			render: function(templateName, data) {
				var value, id, label;
				var html = '';
				var cache = false;
				var self = this;
				var regex_tag = /^[\t \r\n]*<([a-z][a-z0-9\-_]*(?:\:[a-z][a-z0-9\-_]*)?)/i;
		
				if (templateName === 'option' || templateName === 'item') {
					value = hash_key(data[self.settings.valueField]);
					cache = !!value;
				}
		
				// pull markup from cache if it exists
				if (cache) {
					if (!isset(self.renderCache[templateName])) {
						self.renderCache[templateName] = {};
					}
					if (self.renderCache[templateName].hasOwnProperty(value)) {
						return self.renderCache[templateName][value];
					}
				}
		
				// render markup
				html = $(self.settings.render[templateName].apply(this, [data, escape_html]));
		
				// add mandatory attributes
				if (templateName === 'option' || templateName === 'option_create') {
					html.attr('data-selectable', '');
				}
				else if (templateName === 'optgroup') {
					id = data[self.settings.optgroupValueField] || '';
					html.attr('data-group', id);
				}
				if (templateName === 'option' || templateName === 'item') {
					html.attr('data-value', value || '');
				}
		
				// update cache
				if (cache) {
					self.renderCache[templateName][value] = html[0];
				}
		
				return html[0];
			},
		
			/**
			 * Clears the render cache for a template. If
			 * no template is given, clears all render
			 * caches.
			 *
			 * @param {string} templateName
			 */
			clearCache: function(templateName) {
				var self = this;
				if (typeof templateName === 'undefined') {
					self.renderCache = {};
				} else {
					delete self.renderCache[templateName];
				}
			},
		
			/**
			 * Determines whether or not to display the
			 * create item prompt, given a user input.
			 *
			 * @param {string} input
			 * @return {boolean}
			 */
			canCreate: function(input) {
				var self = this;
				if (!self.settings.create) return false;
				var filter = self.settings.createFilter;
				return input.length
					&& (typeof filter !== 'function' || filter.apply(self, [input]))
					&& (typeof filter !== 'string' || new RegExp(filter).test(input))
					&& (!(filter instanceof RegExp) || filter.test(input));
			}
		
		});
		
		
		Selectize.count = 0;
		Selectize.defaults = {
			options: [],
			optgroups: [],
		
			plugins: [],
			delimiter: ',',
			splitOn: null, // regexp or string for splitting up values from a paste command
			persist: true,
			diacritics: true,
			create: false,
			createOnBlur: false,
			createFilter: null,
			highlight: true,
			openOnFocus: true,
			maxOptions: 1000,
			maxItems: null,
			hideSelected: null,
			addPrecedence: false,
			selectOnTab: false,
			preload: false,
			allowEmptyOption: false,
			closeAfterSelect: false,
		
			scrollDuration: 60,
			loadThrottle: 300,
			loadingClass: 'loading',
		
			dataAttr: 'data-data',
			optgroupField: 'optgroup',
			valueField: 'value',
			labelField: 'text',
			optgroupLabelField: 'label',
			optgroupValueField: 'value',
			lockOptgroupOrder: false,
		
			sortField: '$order',
			searchField: ['text'],
			searchConjunction: 'and',
		
			mode: null,
			wrapperClass: 'selectize-control',
			inputClass: 'selectize-input',
			dropdownClass: 'selectize-dropdown',
			dropdownContentClass: 'selectize-dropdown-content',
		
			dropdownParent: null,
		
			copyClassesToDropdown: true,
		
			/*
			load                 : null, // function(query, callback) { ... }
			score                : null, // function(search) { ... }
			onInitialize         : null, // function() { ... }
			onChange             : null, // function(value) { ... }
			onItemAdd            : null, // function(value, $item) { ... }
			onItemRemove         : null, // function(value) { ... }
			onClear              : null, // function() { ... }
			onOptionAdd          : null, // function(value, data) { ... }
			onOptionRemove       : null, // function(value) { ... }
			onOptionClear        : null, // function() { ... }
			onOptionGroupAdd     : null, // function(id, data) { ... }
			onOptionGroupRemove  : null, // function(id) { ... }
			onOptionGroupClear   : null, // function() { ... }
			onDropdownOpen       : null, // function($dropdown) { ... }
			onDropdownClose      : null, // function($dropdown) { ... }
			onType               : null, // function(str) { ... }
			onDelete             : null, // function(values) { ... }
			*/
		
			render: {
				/*
				item: null,
				optgroup: null,
				optgroup_header: null,
				option: null,
				option_create: null
				*/
			}
		};
		
		
		$.fn.selectize = function(settings_user) {
			var defaults             = $.fn.selectize.defaults;
			var settings             = $.extend({}, defaults, settings_user);
			var attr_data            = settings.dataAttr;
			var field_label          = settings.labelField;
			var field_value          = settings.valueField;
			var field_optgroup       = settings.optgroupField;
			var field_optgroup_label = settings.optgroupLabelField;
			var field_optgroup_value = settings.optgroupValueField;
		
			/**
			 * Initializes selectize from a <input type="text"> element.
			 *
			 * @param {object} $input
			 * @param {object} settings_element
			 */
			var init_textbox = function($input, settings_element) {
				var i, n, values, option;
		
				var data_raw = $input.attr(attr_data);
		
				if (!data_raw) {
					var value = $.trim($input.val() || '');
					if (!settings.allowEmptyOption && !value.length) return;
					values = value.split(settings.delimiter);
					for (i = 0, n = values.length; i < n; i++) {
						option = {};
						option[field_label] = values[i];
						option[field_value] = values[i];
						settings_element.options.push(option);
					}
					settings_element.items = values;
				} else {
					settings_element.options = JSON.parse(data_raw);
					for (i = 0, n = settings_element.options.length; i < n; i++) {
						settings_element.items.push(settings_element.options[i][field_value]);
					}
				}
			};
		
			/**
			 * Initializes selectize from a <select> element.
			 *
			 * @param {object} $input
			 * @param {object} settings_element
			 */
			var init_select = function($input, settings_element) {
				var i, n, tagName, $children, order = 0;
				var options = settings_element.options;
				var optionsMap = {};
		
				var readData = function($el) {
					var data = attr_data && $el.attr(attr_data);
					if (typeof data === 'string' && data.length) {
						return JSON.parse(data);
					}
					return null;
				};
		
				var addOption = function($option, group) {
					$option = $($option);
		
					var value = hash_key($option.val());
					if (!value && !settings.allowEmptyOption) return;
		
					// if the option already exists, it's probably been
					// duplicated in another optgroup. in this case, push
					// the current group to the "optgroup" property on the
					// existing option so that it's rendered in both places.
					if (optionsMap.hasOwnProperty(value)) {
						if (group) {
							var arr = optionsMap[value][field_optgroup];
							if (!arr) {
								optionsMap[value][field_optgroup] = group;
							} else if (!$.isArray(arr)) {
								optionsMap[value][field_optgroup] = [arr, group];
							} else {
								arr.push(group);
							}
						}
						return;
					}
		
					var option             = readData($option) || {};
					option[field_label]    = option[field_label] || $option.text();
					option[field_value]    = option[field_value] || value;
					option[field_optgroup] = option[field_optgroup] || group;
		
					optionsMap[value] = option;
					options.push(option);
		
					if ($option.is(':selected')) {
						settings_element.items.push(value);
					}
				};
		
				var addGroup = function($optgroup) {
					var i, n, id, optgroup, $options;
		
					$optgroup = $($optgroup);
					id = $optgroup.attr('label');
		
					if (id) {
						optgroup = readData($optgroup) || {};
						optgroup[field_optgroup_label] = id;
						optgroup[field_optgroup_value] = id;
						settings_element.optgroups.push(optgroup);
					}
		
					$options = $('option', $optgroup);
					for (i = 0, n = $options.length; i < n; i++) {
						addOption($options[i], id);
					}
				};
		
				settings_element.maxItems = $input.attr('multiple') ? null : 1;
		
				$children = $input.children();
				for (i = 0, n = $children.length; i < n; i++) {
					tagName = $children[i].tagName.toLowerCase();
					if (tagName === 'optgroup') {
						addGroup($children[i]);
					} else if (tagName === 'option') {
						addOption($children[i]);
					}
				}
			};
		
			return this.each(function() {
				if (this.selectize) return;
		
				var instance;
				var $input = $(this);
				var tag_name = this.tagName.toLowerCase();
				var placeholder = $input.attr('placeholder') || $input.attr('data-placeholder');
				if (!placeholder && !settings.allowEmptyOption) {
					placeholder = $input.children('option[value=""]').text();
				}
		
				var settings_element = {
					'placeholder' : placeholder,
					'options'     : [],
					'optgroups'   : [],
					'items'       : []
				};
		
				if (tag_name === 'select') {
					init_select($input, settings_element);
				} else {
					init_textbox($input, settings_element);
				}
		
				instance = new Selectize($input, $.extend(true, {}, defaults, settings_element, settings_user));
			});
		};
		
		$.fn.selectize.defaults = Selectize.defaults;
		$.fn.selectize.support = {
			validity: SUPPORTS_VALIDITY_API
		};
		
		
		Selectize.define('drag_drop', function(options) {
			if (!$.fn.sortable) throw new Error('The "drag_drop" plugin requires jQuery UI "sortable".');
			if (this.settings.mode !== 'multi') return;
			var self = this;
		
			self.lock = (function() {
				var original = self.lock;
				return function() {
					var sortable = self.$control.data('sortable');
					if (sortable) sortable.disable();
					return original.apply(self, arguments);
				};
			})();
		
			self.unlock = (function() {
				var original = self.unlock;
				return function() {
					var sortable = self.$control.data('sortable');
					if (sortable) sortable.enable();
					return original.apply(self, arguments);
				};
			})();
		
			self.setup = (function() {
				var original = self.setup;
				return function() {
					original.apply(this, arguments);
		
					var $control = self.$control.sortable({
						items: '[data-value]',
						forcePlaceholderSize: true,
						disabled: self.isLocked,
						start: function(e, ui) {
							ui.placeholder.css('width', ui.helper.css('width'));
							$control.css({overflow: 'visible'});
						},
						stop: function() {
							$control.css({overflow: 'hidden'});
							var active = self.$activeItems ? self.$activeItems.slice() : null;
							var values = [];
							$control.children('[data-value]').each(function() {
								values.push($(this).attr('data-value'));
							});
							self.setValue(values);
							self.setActiveItem(active);
						}
					});
				};
			})();
		
		});
		
		Selectize.define('dropdown_header', function(options) {
			var self = this;
		
			options = $.extend({
				title         : 'Untitled',
				headerClass   : 'selectize-dropdown-header',
				titleRowClass : 'selectize-dropdown-header-title',
				labelClass    : 'selectize-dropdown-header-label',
				closeClass    : 'selectize-dropdown-header-close',
		
				html: function(data) {
					return (
						'<div class="' + data.headerClass + '">' +
							'<div class="' + data.titleRowClass + '">' +
								'<span class="' + data.labelClass + '">' + data.title + '</span>' +
								'<a href="javascript:void(0)" class="' + data.closeClass + '">&times;</a>' +
							'</div>' +
						'</div>'
					);
				}
			}, options);
		
			self.setup = (function() {
				var original = self.setup;
				return function() {
					original.apply(self, arguments);
					self.$dropdown_header = $(options.html(options));
					self.$dropdown.prepend(self.$dropdown_header);
				};
			})();
		
		});
		
		Selectize.define('optgroup_columns', function(options) {
			var self = this;
		
			options = $.extend({
				equalizeWidth  : true,
				equalizeHeight : true
			}, options);
		
			this.getAdjacentOption = function($option, direction) {
				var $options = $option.closest('[data-group]').find('[data-selectable]');
				var index    = $options.index($option) + direction;
		
				return index >= 0 && index < $options.length ? $options.eq(index) : $();
			};
		
			this.onKeyDown = (function() {
				var original = self.onKeyDown;
				return function(e) {
					var index, $option, $options, $optgroup;
		
					if (this.isOpen && (e.keyCode === KEY_LEFT || e.keyCode === KEY_RIGHT)) {
						self.ignoreHover = true;
						$optgroup = this.$activeOption.closest('[data-group]');
						index = $optgroup.find('[data-selectable]').index(this.$activeOption);
		
						if(e.keyCode === KEY_LEFT) {
							$optgroup = $optgroup.prev('[data-group]');
						} else {
							$optgroup = $optgroup.next('[data-group]');
						}
		
						$options = $optgroup.find('[data-selectable]');
						$option  = $options.eq(Math.min($options.length - 1, index));
						if ($option.length) {
							this.setActiveOption($option);
						}
						return;
					}
		
					return original.apply(this, arguments);
				};
			})();
		
			var getScrollbarWidth = function() {
				var div;
				var width = getScrollbarWidth.width;
				var doc = document;
		
				if (typeof width === 'undefined') {
					div = doc.createElement('div');
					div.innerHTML = '<div style="width:50px;height:50px;position:absolute;left:-50px;top:-50px;overflow:auto;"><div style="width:1px;height:100px;"></div></div>';
					div = div.firstChild;
					doc.body.appendChild(div);
					width = getScrollbarWidth.width = div.offsetWidth - div.clientWidth;
					doc.body.removeChild(div);
				}
				return width;
			};
		
			var equalizeSizes = function() {
				var i, n, height_max, width, width_last, width_parent, $optgroups;
		
				$optgroups = $('[data-group]', self.$dropdown_content);
				n = $optgroups.length;
				if (!n || !self.$dropdown_content.width()) return;
		
				if (options.equalizeHeight) {
					height_max = 0;
					for (i = 0; i < n; i++) {
						height_max = Math.max(height_max, $optgroups.eq(i).height());
					}
					$optgroups.css({height: height_max});
				}
		
				if (options.equalizeWidth) {
					width_parent = self.$dropdown_content.innerWidth() - getScrollbarWidth();
					width = Math.round(width_parent / n);
					$optgroups.css({width: width});
					if (n > 1) {
						width_last = width_parent - width * (n - 1);
						$optgroups.eq(n - 1).css({width: width_last});
					}
				}
			};
		
			if (options.equalizeHeight || options.equalizeWidth) {
				hook.after(this, 'positionDropdown', equalizeSizes);
				hook.after(this, 'refreshOptions', equalizeSizes);
			}
		
		
		});
		
		Selectize.define('remove_button', function(options) {
			options = $.extend({
					label     : '&times;',
					title     : 'Remove',
					className : 'remove',
					append    : true
				}, options);
		
				var singleClose = function(thisRef, options) {
		
					options.className = 'remove-single';
		
					var self = thisRef;
					var html = '<a href="javascript:void(0)" class="' + options.className + '" tabindex="-1" title="' + escape_html(options.title) + '">' + options.label + '</a>';
		
					/**
					 * Appends an element as a child (with raw HTML).
					 *
					 * @param {string} html_container
					 * @param {string} html_element
					 * @return {string}
					 */
					var append = function(html_container, html_element) {
						return html_container + html_element;
					};
		
					thisRef.setup = (function() {
						var original = self.setup;
						return function() {
							// override the item rendering method to add the button to each
							if (options.append) {
								var id = $(self.$input.context).attr('id');
								var selectizer = $('#'+id);
		
								var render_item = self.settings.render.item;
								self.settings.render.item = function(data) {
									return append(render_item.apply(thisRef, arguments), html);
								};
							}
		
							original.apply(thisRef, arguments);
		
							// add event listener
							thisRef.$control.on('click', '.' + options.className, function(e) {
								e.preventDefault();
								if (self.isLocked) return;
		
								self.clear();
							});
		
						};
					})();
				};
		
				var multiClose = function(thisRef, options) {
		
					var self = thisRef;
					var html = '<a href="javascript:void(0)" class="' + options.className + '" tabindex="-1" title="' + escape_html(options.title) + '">' + options.label + '</a>';
		
					/**
					 * Appends an element as a child (with raw HTML).
					 *
					 * @param {string} html_container
					 * @param {string} html_element
					 * @return {string}
					 */
					var append = function(html_container, html_element) {
						var pos = html_container.search(/(<\/[^>]+>\s*)$/);
						return html_container.substring(0, pos) + html_element + html_container.substring(pos);
					};
		
					thisRef.setup = (function() {
						var original = self.setup;
						return function() {
							// override the item rendering method to add the button to each
							if (options.append) {
								var render_item = self.settings.render.item;
								self.settings.render.item = function(data) {
									return append(render_item.apply(thisRef, arguments), html);
								};
							}
		
							original.apply(thisRef, arguments);
		
							// add event listener
							thisRef.$control.on('click', '.' + options.className, function(e) {
								e.preventDefault();
								if (self.isLocked) return;
		
								var $item = $(e.currentTarget).parent();
								self.setActiveItem($item);
								if (self.deleteSelection()) {
									self.setCaret(self.items.length);
								}
							});
		
						};
					})();
				};
		
				if (this.settings.mode === 'single') {
					singleClose(this, options);
					return;
				} else {
					multiClose(this, options);
				}
		});
		
		
		Selectize.define('restore_on_backspace', function(options) {
			var self = this;
		
			options.text = options.text || function(option) {
				return option[this.settings.labelField];
			};
		
			this.onKeyDown = (function() {
				var original = self.onKeyDown;
				return function(e) {
					var index, option;
					if (e.keyCode === KEY_BACKSPACE && this.$control_input.val() === '' && !this.$activeItems.length) {
						index = this.caretPos - 1;
						if (index >= 0 && index < this.items.length) {
							option = this.options[this.items[index]];
							if (this.deleteSelection(e)) {
								this.setTextboxValue(options.text.apply(this, [option]));
								this.refreshOptions(true);
							}
							e.preventDefault();
							return;
						}
					}
					return original.apply(this, arguments);
				};
			})();
		});
		
	
		return Selectize;
	}));
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 68 */
/***/ function(module, exports) {

	'use strict';
	
	angular.module('selectize', []).value('selectizeConfig', {}).directive("selectize", ['selectizeConfig', function (selectizeConfig) {
	    return {
	        restrict: 'EA',
	        require: '^ngModel',
	        scope: { ngModel: '=', config: '=?', options: '=?', ngDisabled: '=', ngRequired: '&' },
	        link: function link(scope, element, attrs, modelCtrl) {
	
	            var selectize,
	                settings = angular.extend({}, Selectize.defaults, selectizeConfig, scope.config);
	
	            scope.options = scope.options || [];
	            scope.config = scope.config || {};
	
	            var isEmpty = function isEmpty(val) {
	                return val === undefined || val === null || !val.length; //support checking empty arrays
	            };
	
	            var toggle = function toggle(disabled) {
	                disabled ? selectize.disable() : selectize.enable();
	            };
	
	            var validate = function validate() {
	                var isInvalid = (scope.ngRequired() || attrs.required || settings.required) && isEmpty(scope.ngModel);
	                modelCtrl.$setValidity('required', !isInvalid);
	            };
	
	            var setSelectizeOptions = function setSelectizeOptions(curr, prev) {
	                angular.forEach(prev, function (opt) {
	                    if (curr.indexOf(opt) === -1) {
	                        var value = opt[settings.valueField];
	                        selectize.removeOption(value, true);
	                    }
	                });
	
	                selectize.addOption(curr);
	
	                selectize.refreshOptions(false); // updates results if user has entered a query
	                setSelectizeValue();
	            };
	
	            var setSelectizeValue = function setSelectizeValue() {
	                validate();
	
	                selectize.$control.toggleClass('ng-valid', modelCtrl.$valid);
	                selectize.$control.toggleClass('ng-invalid', modelCtrl.$invalid);
	                selectize.$control.toggleClass('ng-dirty', modelCtrl.$dirty);
	                selectize.$control.toggleClass('ng-pristine', modelCtrl.$pristine);
	
	                if (!angular.equals(selectize.items, scope.ngModel)) {
	                    selectize.setValue(scope.ngModel, true);
	                }
	            };
	
	            settings.onChange = function (value) {
	                var value = angular.copy(selectize.items);
	                if (settings.maxItems == 1) {
	                    value = value[0];
	                }
	                modelCtrl.$setViewValue(value);
	
	                if (scope.config.onChange) {
	                    scope.config.onChange.apply(this, arguments);
	                }
	            };
	
	            settings.onOptionAdd = function (value, data) {
	                if (scope.options.indexOf(data) === -1) {
	                    scope.options.push(data);
	
	                    if (scope.config.onOptionAdd) {
	                        scope.config.onOptionAdd.apply(this, arguments);
	                    }
	                }
	            };
	
	            settings.onInitialize = function () {
	                selectize = element[0].selectize;
	
	                setSelectizeOptions(scope.options);
	
	                //provides a way to access the selectize element from an
	                //angular controller
	                if (scope.config.onInitialize) {
	                    scope.config.onInitialize(selectize);
	                }
	
	                scope.$watchCollection('options', setSelectizeOptions);
	                scope.$watch('ngModel', setSelectizeValue, true);
	                scope.$watch('ngDisabled', toggle);
	            };
	
	            element.selectize(settings);
	
	            element.on('$destroy', function () {
	                if (selectize) {
	                    selectize.destroy();
	                    element = null;
	                }
	            });
	        }
	    };
	}]);

/***/ },
/* 69 */
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
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(54);

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(55);

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(57);

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(60);

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(59);

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(63);

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(64);

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(66);

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(67);

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(70);

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(72);

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(73);

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(75);

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(76);

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(140);

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(142);

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(143);

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(144);

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(145);

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(219);

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(146);

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(148);

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(149);

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(150);

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(151);

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(218);

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(220);

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(222);

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(223);

/***/ },
/* 99 */
/***/ function(module, exports) {

	module.exports = "<div ng-if=\"vm.showJson()\">\n    <button style=\"width: 60px\"\n            popover-placement=\"bottom\"\n            popover-is-open=\"vm.isOpen\"\n            popover-append-to-body=\"true\"\n            uib-popover-template=\"'editable-formly.html'\"\n            class=\"btn btn-white btn-xs\">\n        edit\n    </button>\n</div>\n<span popover-placement=\"bottom\"\n      popover-is-open=\"vm.isOpen\"\n      uib-popover-template=\"'editable-formly.html'\"\n      popover-append-to-body=\"true\"\n      style=\"cursor: pointer\"\n      ng-class=\"{'cms-empty-value': vm.isValueUndefined}\"\n      ng-if=\"!vm.showJson()\">\n    {{!vm.isValueUndefined? vm.value: 'empty'}}\n</span>"

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _cms = __webpack_require__(101);
	
	var _cms2 = _interopRequireDefault(_cms);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var commonModule = angular.module('common', [_cms2.default]);
	
	exports.default = commonModule.name;

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	__webpack_require__(102);
	
	var _Type = __webpack_require__(103);
	
	var _Type2 = _interopRequireDefault(_Type);
	
	var _QueryBuilder = __webpack_require__(26);
	
	var _QueryBuilder2 = _interopRequireDefault(_QueryBuilder);
	
	__webpack_require__(104);
	
	var _uuid2 = __webpack_require__(105);
	
	var _uuid3 = _interopRequireDefault(_uuid2);
	
	__webpack_require__(107);
	
	__webpack_require__(108);
	
	var _traverse = __webpack_require__(109);
	
	var _traverse2 = _interopRequireDefault(_traverse);
	
	__webpack_require__(110);
	
	var _socket = __webpack_require__(111);
	
	var _socket2 = _interopRequireDefault(_socket);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	window.io = _socket2.default;
	
	window.Enum = {
	    Load: { NOT: 'NOT', LOADING: 'LOADING', LOADED: 'LOADED', PART_LOADED: 'PART_LOADED' },
	    EditMode: { ALL: 'ALL', VIEWELEMENT: 'VIEWELEMENT', DATAELEMENT: 'DATAELEMENT', CONTAINER: 'CONTAINER' }
	};
	
	var modelModule = angular.module('common.data', ['ngFileUpload', 'ngWebSocket', 'pascalprecht.translate']).config(config).factory('cms', cms).run(run);
	
	config.$inject = ['$translateProvider'];
	function config($translateProvider) {
	    $translateProvider.translations('en', {
	        Add: 'Add',
	        Setting: 'Setting',
	        DeleteAll: 'Delete all',
	        Show: 'Show'
	    });
	
	    $translateProvider.translations('de', {
	        Add: 'Hinzufügen',
	        Setting: 'Einstellung',
	        DeleteAll: 'alles Löschen',
	        Show: 'Anzeigen'
	    });
	
	    $translateProvider.preferredLanguage('de');
	}
	
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
	        var onfly = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
	
	        var Type = data.types[type];
	        if (!Type || !Type.template || !ref || !_.find(Type.list, { _id: ref })) {
	            var query = ref ? Type && _.find(Type.list, { _id: ref }) ? 'element=false' : 'element=' + ref : 'element=false';
	            if (!Type) Type = data.types[type] = { list: [] };
	            if (!Type.template) query += '&template=true';
	            if (content && content._id || !onfly) query = '';
	            $http.post('/cms-types/' + type + '?' + query, JsonFn.stringify(content)).then(function (res) {
	                var result = JsonFn.clone(res.data, true);
	
	                if (_.find(Type.list, { _id: ref })) {
	                    _.remove(Type.list, { _id: ref });
	                }
	
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
	        var onfly = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
	
	        if (!onfly) {
	            updateElement(type, content, cb);
	        } else {
	            getType(type, null, cb, content, onfly);
	        }
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
	        console.time("loadElements");
	        sendWs({
	            path: 'get/api/v1/' + type,
	            params: paramsBuilder ? paramsBuilder.buildJson() : {}
	        }, function (_ref2) {
	            var _list = _ref2.result;
	
	            console.timeEnd("loadElements");
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
	
	
	            var oldModel = _.find(Types[type].list, { _id: model._id });
	            if (oldModel && !angular.equals(oldModel, model)) {
	                for (var member in oldModel) {
	                    delete oldModel[member];
	                }_.assign(oldModel, model);
	            } else {
	                Types[type].list.push(model);
	            }
	
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
	        var deep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	
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
	                        var name = _ref10.name,
	                            value = _ref10.value;
	
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
	
	    var new_uri = '';
	    var wsAddress = cms.data.online.wsAddress;
	
	    if (wsAddress) {
	        new_uri = wsAddress;
	    } else {
	        var loc = window.location;
	        /*if (loc.protocol === "https:") {
	         new_uri = "wss:";
	         } else {
	         new_uri = "ws:";
	         }*/
	        new_uri += "ws://" + loc.host;
	        //new_uri += loc.pathname;
	    }
	
	    var socket = io.connect(new_uri);
	
	    window.socket = cms.socket = socket;
	
	    socket.on('message', function (event) {
	        var _data = JsonFn.parse(event, true);
	        if (!_data.uuid) return;
	        cms.data.socketQueue[_data.uuid](_data);
	    });
	}
	
	exports.default = modelModule.name;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(337);

/***/ },
/* 103 */
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
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(227);

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	//     uuid.js
	//
	//     Copyright (c) 2010-2012 Robert Kieffer
	//     MIT License - http://opensource.org/licenses/mit-license.php
	
	// Unique ID creation requires a high quality random # generator.  We feature
	// detect to determine the best RNG source, normalizing to a function that
	// returns 128-bits of randomness, since that's what's usually required
	var _rng = __webpack_require__(106);
	
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
/* 106 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {
	var rng;
	
	var crypto = global.crypto || global.msCrypto; // for IE 11
	if (crypto && crypto.getRandomValues) {
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
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(8);

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(17);

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(326);

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(335);

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Module dependencies.
	 */
	
	var url = __webpack_require__(112);
	var parser = __webpack_require__(117);
	var Manager = __webpack_require__(125);
	var debug = __webpack_require__(114)('socket.io-client');
	
	/**
	 * Module exports.
	 */
	
	module.exports = exports = lookup;
	
	/**
	 * Managers cache.
	 */
	
	var cache = exports.managers = {};
	
	/**
	 * Looks up an existing `Manager` for multiplexing.
	 * If the user summons:
	 *
	 *   `io('http://localhost/a');`
	 *   `io('http://localhost/b');`
	 *
	 * We reuse the existing instance based on same scheme/port/host,
	 * and we initialize sockets for each namespace.
	 *
	 * @api public
	 */
	
	function lookup (uri, opts) {
	  if (typeof uri === 'object') {
	    opts = uri;
	    uri = undefined;
	  }
	
	  opts = opts || {};
	
	  var parsed = url(uri);
	  var source = parsed.source;
	  var id = parsed.id;
	  var path = parsed.path;
	  var sameNamespace = cache[id] && path in cache[id].nsps;
	  var newConnection = opts.forceNew || opts['force new connection'] ||
	                      false === opts.multiplex || sameNamespace;
	
	  var io;
	
	  if (newConnection) {
	    debug('ignoring socket cache for %s', source);
	    io = Manager(source, opts);
	  } else {
	    if (!cache[id]) {
	      debug('new io instance for %s', source);
	      cache[id] = Manager(source, opts);
	    }
	    io = cache[id];
	  }
	  if (parsed.query && !opts.query) {
	    opts.query = parsed.query;
	  } else if (opts && 'object' === typeof opts.query) {
	    opts.query = encodeQueryString(opts.query);
	  }
	  return io.socket(parsed.path, opts);
	}
	/**
	 *  Helper method to parse query objects to string.
	 * @param {object} query
	 * @returns {string}
	 */
	function encodeQueryString (obj) {
	  var str = [];
	  for (var p in obj) {
	    if (obj.hasOwnProperty(p)) {
	      str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
	    }
	  }
	  return str.join('&');
	}
	/**
	 * Protocol version.
	 *
	 * @api public
	 */
	
	exports.protocol = parser.protocol;
	
	/**
	 * `connect`.
	 *
	 * @param {String} uri
	 * @api public
	 */
	
	exports.connect = lookup;
	
	/**
	 * Expose constructors for standalone build.
	 *
	 * @api public
	 */
	
	exports.Manager = __webpack_require__(125);
	exports.Socket = __webpack_require__(151);


/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {
	/**
	 * Module dependencies.
	 */
	
	var parseuri = __webpack_require__(113);
	var debug = __webpack_require__(114)('socket.io-client:url');
	
	/**
	 * Module exports.
	 */
	
	module.exports = url;
	
	/**
	 * URL parser.
	 *
	 * @param {String} url
	 * @param {Object} An object meant to mimic window.location.
	 *                 Defaults to window.location.
	 * @api public
	 */
	
	function url (uri, loc) {
	  var obj = uri;
	
	  // default to window.location
	  loc = loc || global.location;
	  if (null == uri) uri = loc.protocol + '//' + loc.host;
	
	  // relative path support
	  if ('string' === typeof uri) {
	    if ('/' === uri.charAt(0)) {
	      if ('/' === uri.charAt(1)) {
	        uri = loc.protocol + uri;
	      } else {
	        uri = loc.host + uri;
	      }
	    }
	
	    if (!/^(https?|wss?):\/\//.test(uri)) {
	      debug('protocol-less url %s', uri);
	      if ('undefined' !== typeof loc) {
	        uri = loc.protocol + '//' + uri;
	      } else {
	        uri = 'https://' + uri;
	      }
	    }
	
	    // parse
	    debug('parse %s', uri);
	    obj = parseuri(uri);
	  }
	
	  // make sure we treat `localhost:80` and `localhost` equally
	  if (!obj.port) {
	    if (/^(http|ws)$/.test(obj.protocol)) {
	      obj.port = '80';
	    } else if (/^(http|ws)s$/.test(obj.protocol)) {
	      obj.port = '443';
	    }
	  }
	
	  obj.path = obj.path || '/';
	
	  var ipv6 = obj.host.indexOf(':') !== -1;
	  var host = ipv6 ? '[' + obj.host + ']' : obj.host;
	
	  // define unique id
	  obj.id = obj.protocol + '://' + host + ':' + obj.port;
	  // define href
	  obj.href = obj.protocol + '://' + host + (loc && loc.port === obj.port ? '' : (':' + obj.port));
	
	  return obj;
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 113 */
/***/ function(module, exports) {

	/**
	 * Parses an URI
	 *
	 * @author Steven Levithan <stevenlevithan.com> (MIT license)
	 * @api private
	 */
	
	var re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
	
	var parts = [
	    'source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'
	];
	
	module.exports = function parseuri(str) {
	    var src = str,
	        b = str.indexOf('['),
	        e = str.indexOf(']');
	
	    if (b != -1 && e != -1) {
	        str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
	    }
	
	    var m = re.exec(str || ''),
	        uri = {},
	        i = 14;
	
	    while (i--) {
	        uri[parts[i]] = m[i] || '';
	    }
	
	    if (b != -1 && e != -1) {
	        uri.source = src;
	        uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
	        uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
	        uri.ipv6uri = true;
	    }
	
	    return uri;
	};


/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * This is the web browser implementation of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */
	
	exports = module.exports = __webpack_require__(115);
	exports.log = log;
	exports.formatArgs = formatArgs;
	exports.save = save;
	exports.load = load;
	exports.useColors = useColors;
	exports.storage = 'undefined' != typeof chrome
	               && 'undefined' != typeof chrome.storage
	                  ? chrome.storage.local
	                  : localstorage();
	
	/**
	 * Colors.
	 */
	
	exports.colors = [
	  'lightseagreen',
	  'forestgreen',
	  'goldenrod',
	  'dodgerblue',
	  'darkorchid',
	  'crimson'
	];
	
	/**
	 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
	 * and the Firebug extension (any Firefox version) are known
	 * to support "%c" CSS customizations.
	 *
	 * TODO: add a `localStorage` variable to explicitly enable/disable colors
	 */
	
	function useColors() {
	  // is webkit? http://stackoverflow.com/a/16459606/376773
	  return ('WebkitAppearance' in document.documentElement.style) ||
	    // is firebug? http://stackoverflow.com/a/398120/376773
	    (window.console && (console.firebug || (console.exception && console.table))) ||
	    // is firefox >= v31?
	    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
	    (navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31);
	}
	
	/**
	 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
	 */
	
	exports.formatters.j = function(v) {
	  return JSON.stringify(v);
	};
	
	
	/**
	 * Colorize log arguments if enabled.
	 *
	 * @api public
	 */
	
	function formatArgs() {
	  var args = arguments;
	  var useColors = this.useColors;
	
	  args[0] = (useColors ? '%c' : '')
	    + this.namespace
	    + (useColors ? ' %c' : ' ')
	    + args[0]
	    + (useColors ? '%c ' : ' ')
	    + '+' + exports.humanize(this.diff);
	
	  if (!useColors) return args;
	
	  var c = 'color: ' + this.color;
	  args = [args[0], c, 'color: inherit'].concat(Array.prototype.slice.call(args, 1));
	
	  // the final "%c" is somewhat tricky, because there could be other
	  // arguments passed either before or after the %c, so we need to
	  // figure out the correct index to insert the CSS into
	  var index = 0;
	  var lastC = 0;
	  args[0].replace(/%[a-z%]/g, function(match) {
	    if ('%%' === match) return;
	    index++;
	    if ('%c' === match) {
	      // we only are interested in the *last* %c
	      // (the user may have provided their own)
	      lastC = index;
	    }
	  });
	
	  args.splice(lastC, 0, c);
	  return args;
	}
	
	/**
	 * Invokes `console.log()` when available.
	 * No-op when `console.log` is not a "function".
	 *
	 * @api public
	 */
	
	function log() {
	  // this hackery is required for IE8/9, where
	  // the `console.log` function doesn't have 'apply'
	  return 'object' === typeof console
	    && console.log
	    && Function.prototype.apply.call(console.log, console, arguments);
	}
	
	/**
	 * Save `namespaces`.
	 *
	 * @param {String} namespaces
	 * @api private
	 */
	
	function save(namespaces) {
	  try {
	    if (null == namespaces) {
	      exports.storage.removeItem('debug');
	    } else {
	      exports.storage.debug = namespaces;
	    }
	  } catch(e) {}
	}
	
	/**
	 * Load `namespaces`.
	 *
	 * @return {String} returns the previously persisted debug modes
	 * @api private
	 */
	
	function load() {
	  var r;
	  try {
	    r = exports.storage.debug;
	  } catch(e) {}
	  return r;
	}
	
	/**
	 * Enable namespaces listed in `localStorage.debug` initially.
	 */
	
	exports.enable(load());
	
	/**
	 * Localstorage attempts to return the localstorage.
	 *
	 * This is necessary because safari throws
	 * when a user disables cookies/localstorage
	 * and you attempt to access it.
	 *
	 * @return {LocalStorage}
	 * @api private
	 */
	
	function localstorage(){
	  try {
	    return window.localStorage;
	  } catch (e) {}
	}


/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * This is the common logic for both the Node.js and web browser
	 * implementations of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */
	
	exports = module.exports = debug;
	exports.coerce = coerce;
	exports.disable = disable;
	exports.enable = enable;
	exports.enabled = enabled;
	exports.humanize = __webpack_require__(116);
	
	/**
	 * The currently active debug mode names, and names to skip.
	 */
	
	exports.names = [];
	exports.skips = [];
	
	/**
	 * Map of special "%n" handling functions, for the debug "format" argument.
	 *
	 * Valid key names are a single, lowercased letter, i.e. "n".
	 */
	
	exports.formatters = {};
	
	/**
	 * Previously assigned color.
	 */
	
	var prevColor = 0;
	
	/**
	 * Previous log timestamp.
	 */
	
	var prevTime;
	
	/**
	 * Select a color.
	 *
	 * @return {Number}
	 * @api private
	 */
	
	function selectColor() {
	  return exports.colors[prevColor++ % exports.colors.length];
	}
	
	/**
	 * Create a debugger with the given `namespace`.
	 *
	 * @param {String} namespace
	 * @return {Function}
	 * @api public
	 */
	
	function debug(namespace) {
	
	  // define the `disabled` version
	  function disabled() {
	  }
	  disabled.enabled = false;
	
	  // define the `enabled` version
	  function enabled() {
	
	    var self = enabled;
	
	    // set `diff` timestamp
	    var curr = +new Date();
	    var ms = curr - (prevTime || curr);
	    self.diff = ms;
	    self.prev = prevTime;
	    self.curr = curr;
	    prevTime = curr;
	
	    // add the `color` if not set
	    if (null == self.useColors) self.useColors = exports.useColors();
	    if (null == self.color && self.useColors) self.color = selectColor();
	
	    var args = Array.prototype.slice.call(arguments);
	
	    args[0] = exports.coerce(args[0]);
	
	    if ('string' !== typeof args[0]) {
	      // anything else let's inspect with %o
	      args = ['%o'].concat(args);
	    }
	
	    // apply any `formatters` transformations
	    var index = 0;
	    args[0] = args[0].replace(/%([a-z%])/g, function(match, format) {
	      // if we encounter an escaped % then don't increase the array index
	      if (match === '%%') return match;
	      index++;
	      var formatter = exports.formatters[format];
	      if ('function' === typeof formatter) {
	        var val = args[index];
	        match = formatter.call(self, val);
	
	        // now we need to remove `args[index]` since it's inlined in the `format`
	        args.splice(index, 1);
	        index--;
	      }
	      return match;
	    });
	
	    if ('function' === typeof exports.formatArgs) {
	      args = exports.formatArgs.apply(self, args);
	    }
	    var logFn = enabled.log || exports.log || console.log.bind(console);
	    logFn.apply(self, args);
	  }
	  enabled.enabled = true;
	
	  var fn = exports.enabled(namespace) ? enabled : disabled;
	
	  fn.namespace = namespace;
	
	  return fn;
	}
	
	/**
	 * Enables a debug mode by namespaces. This can include modes
	 * separated by a colon and wildcards.
	 *
	 * @param {String} namespaces
	 * @api public
	 */
	
	function enable(namespaces) {
	  exports.save(namespaces);
	
	  var split = (namespaces || '').split(/[\s,]+/);
	  var len = split.length;
	
	  for (var i = 0; i < len; i++) {
	    if (!split[i]) continue; // ignore empty strings
	    namespaces = split[i].replace(/\*/g, '.*?');
	    if (namespaces[0] === '-') {
	      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
	    } else {
	      exports.names.push(new RegExp('^' + namespaces + '$'));
	    }
	  }
	}
	
	/**
	 * Disable debug output.
	 *
	 * @api public
	 */
	
	function disable() {
	  exports.enable('');
	}
	
	/**
	 * Returns true if the given mode name is enabled, false otherwise.
	 *
	 * @param {String} name
	 * @return {Boolean}
	 * @api public
	 */
	
	function enabled(name) {
	  var i, len;
	  for (i = 0, len = exports.skips.length; i < len; i++) {
	    if (exports.skips[i].test(name)) {
	      return false;
	    }
	  }
	  for (i = 0, len = exports.names.length; i < len; i++) {
	    if (exports.names[i].test(name)) {
	      return true;
	    }
	  }
	  return false;
	}
	
	/**
	 * Coerce `val`.
	 *
	 * @param {Mixed} val
	 * @return {Mixed}
	 * @api private
	 */
	
	function coerce(val) {
	  if (val instanceof Error) return val.stack || val.message;
	  return val;
	}


/***/ },
/* 116 */
/***/ function(module, exports) {

	/**
	 * Helpers.
	 */
	
	var s = 1000;
	var m = s * 60;
	var h = m * 60;
	var d = h * 24;
	var y = d * 365.25;
	
	/**
	 * Parse or format the given `val`.
	 *
	 * Options:
	 *
	 *  - `long` verbose formatting [false]
	 *
	 * @param {String|Number} val
	 * @param {Object} options
	 * @return {String|Number}
	 * @api public
	 */
	
	module.exports = function(val, options){
	  options = options || {};
	  if ('string' == typeof val) return parse(val);
	  return options.long
	    ? long(val)
	    : short(val);
	};
	
	/**
	 * Parse the given `str` and return milliseconds.
	 *
	 * @param {String} str
	 * @return {Number}
	 * @api private
	 */
	
	function parse(str) {
	  str = '' + str;
	  if (str.length > 10000) return;
	  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
	  if (!match) return;
	  var n = parseFloat(match[1]);
	  var type = (match[2] || 'ms').toLowerCase();
	  switch (type) {
	    case 'years':
	    case 'year':
	    case 'yrs':
	    case 'yr':
	    case 'y':
	      return n * y;
	    case 'days':
	    case 'day':
	    case 'd':
	      return n * d;
	    case 'hours':
	    case 'hour':
	    case 'hrs':
	    case 'hr':
	    case 'h':
	      return n * h;
	    case 'minutes':
	    case 'minute':
	    case 'mins':
	    case 'min':
	    case 'm':
	      return n * m;
	    case 'seconds':
	    case 'second':
	    case 'secs':
	    case 'sec':
	    case 's':
	      return n * s;
	    case 'milliseconds':
	    case 'millisecond':
	    case 'msecs':
	    case 'msec':
	    case 'ms':
	      return n;
	  }
	}
	
	/**
	 * Short format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */
	
	function short(ms) {
	  if (ms >= d) return Math.round(ms / d) + 'd';
	  if (ms >= h) return Math.round(ms / h) + 'h';
	  if (ms >= m) return Math.round(ms / m) + 'm';
	  if (ms >= s) return Math.round(ms / s) + 's';
	  return ms + 'ms';
	}
	
	/**
	 * Long format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */
	
	function long(ms) {
	  return plural(ms, d, 'day')
	    || plural(ms, h, 'hour')
	    || plural(ms, m, 'minute')
	    || plural(ms, s, 'second')
	    || ms + ' ms';
	}
	
	/**
	 * Pluralization helper.
	 */
	
	function plural(ms, n, name) {
	  if (ms < n) return;
	  if (ms < n * 1.5) return Math.floor(ms / n) + ' ' + name;
	  return Math.ceil(ms / n) + ' ' + name + 's';
	}


/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Module dependencies.
	 */
	
	var debug = __webpack_require__(114)('socket.io-parser');
	var json = __webpack_require__(118);
	var Emitter = __webpack_require__(121);
	var binary = __webpack_require__(122);
	var isBuf = __webpack_require__(124);
	
	/**
	 * Protocol version.
	 *
	 * @api public
	 */
	
	exports.protocol = 4;
	
	/**
	 * Packet types.
	 *
	 * @api public
	 */
	
	exports.types = [
	  'CONNECT',
	  'DISCONNECT',
	  'EVENT',
	  'ACK',
	  'ERROR',
	  'BINARY_EVENT',
	  'BINARY_ACK'
	];
	
	/**
	 * Packet type `connect`.
	 *
	 * @api public
	 */
	
	exports.CONNECT = 0;
	
	/**
	 * Packet type `disconnect`.
	 *
	 * @api public
	 */
	
	exports.DISCONNECT = 1;
	
	/**
	 * Packet type `event`.
	 *
	 * @api public
	 */
	
	exports.EVENT = 2;
	
	/**
	 * Packet type `ack`.
	 *
	 * @api public
	 */
	
	exports.ACK = 3;
	
	/**
	 * Packet type `error`.
	 *
	 * @api public
	 */
	
	exports.ERROR = 4;
	
	/**
	 * Packet type 'binary event'
	 *
	 * @api public
	 */
	
	exports.BINARY_EVENT = 5;
	
	/**
	 * Packet type `binary ack`. For acks with binary arguments.
	 *
	 * @api public
	 */
	
	exports.BINARY_ACK = 6;
	
	/**
	 * Encoder constructor.
	 *
	 * @api public
	 */
	
	exports.Encoder = Encoder;
	
	/**
	 * Decoder constructor.
	 *
	 * @api public
	 */
	
	exports.Decoder = Decoder;
	
	/**
	 * A socket.io Encoder instance
	 *
	 * @api public
	 */
	
	function Encoder() {}
	
	/**
	 * Encode a packet as a single string if non-binary, or as a
	 * buffer sequence, depending on packet type.
	 *
	 * @param {Object} obj - packet object
	 * @param {Function} callback - function to handle encodings (likely engine.write)
	 * @return Calls callback with Array of encodings
	 * @api public
	 */
	
	Encoder.prototype.encode = function(obj, callback){
	  debug('encoding packet %j', obj);
	
	  if (exports.BINARY_EVENT == obj.type || exports.BINARY_ACK == obj.type) {
	    encodeAsBinary(obj, callback);
	  }
	  else {
	    var encoding = encodeAsString(obj);
	    callback([encoding]);
	  }
	};
	
	/**
	 * Encode packet as string.
	 *
	 * @param {Object} packet
	 * @return {String} encoded
	 * @api private
	 */
	
	function encodeAsString(obj) {
	  var str = '';
	  var nsp = false;
	
	  // first is type
	  str += obj.type;
	
	  // attachments if we have them
	  if (exports.BINARY_EVENT == obj.type || exports.BINARY_ACK == obj.type) {
	    str += obj.attachments;
	    str += '-';
	  }
	
	  // if we have a namespace other than `/`
	  // we append it followed by a comma `,`
	  if (obj.nsp && '/' != obj.nsp) {
	    nsp = true;
	    str += obj.nsp;
	  }
	
	  // immediately followed by the id
	  if (null != obj.id) {
	    if (nsp) {
	      str += ',';
	      nsp = false;
	    }
	    str += obj.id;
	  }
	
	  // json data
	  if (null != obj.data) {
	    if (nsp) str += ',';
	    str += json.stringify(obj.data);
	  }
	
	  debug('encoded %j as %s', obj, str);
	  return str;
	}
	
	/**
	 * Encode packet as 'buffer sequence' by removing blobs, and
	 * deconstructing packet into object with placeholders and
	 * a list of buffers.
	 *
	 * @param {Object} packet
	 * @return {Buffer} encoded
	 * @api private
	 */
	
	function encodeAsBinary(obj, callback) {
	
	  function writeEncoding(bloblessData) {
	    var deconstruction = binary.deconstructPacket(bloblessData);
	    var pack = encodeAsString(deconstruction.packet);
	    var buffers = deconstruction.buffers;
	
	    buffers.unshift(pack); // add packet info to beginning of data list
	    callback(buffers); // write all the buffers
	  }
	
	  binary.removeBlobs(obj, writeEncoding);
	}
	
	/**
	 * A socket.io Decoder instance
	 *
	 * @return {Object} decoder
	 * @api public
	 */
	
	function Decoder() {
	  this.reconstructor = null;
	}
	
	/**
	 * Mix in `Emitter` with Decoder.
	 */
	
	Emitter(Decoder.prototype);
	
	/**
	 * Decodes an ecoded packet string into packet JSON.
	 *
	 * @param {String} obj - encoded packet
	 * @return {Object} packet
	 * @api public
	 */
	
	Decoder.prototype.add = function(obj) {
	  var packet;
	  if ('string' == typeof obj) {
	    packet = decodeString(obj);
	    if (exports.BINARY_EVENT == packet.type || exports.BINARY_ACK == packet.type) { // binary packet's json
	      this.reconstructor = new BinaryReconstructor(packet);
	
	      // no attachments, labeled binary but no binary data to follow
	      if (this.reconstructor.reconPack.attachments === 0) {
	        this.emit('decoded', packet);
	      }
	    } else { // non-binary full packet
	      this.emit('decoded', packet);
	    }
	  }
	  else if (isBuf(obj) || obj.base64) { // raw binary data
	    if (!this.reconstructor) {
	      throw new Error('got binary data when not reconstructing a packet');
	    } else {
	      packet = this.reconstructor.takeBinaryData(obj);
	      if (packet) { // received final buffer
	        this.reconstructor = null;
	        this.emit('decoded', packet);
	      }
	    }
	  }
	  else {
	    throw new Error('Unknown type: ' + obj);
	  }
	};
	
	/**
	 * Decode a packet String (JSON data)
	 *
	 * @param {String} str
	 * @return {Object} packet
	 * @api private
	 */
	
	function decodeString(str) {
	  var p = {};
	  var i = 0;
	
	  // look up type
	  p.type = Number(str.charAt(0));
	  if (null == exports.types[p.type]) return error();
	
	  // look up attachments if type binary
	  if (exports.BINARY_EVENT == p.type || exports.BINARY_ACK == p.type) {
	    var buf = '';
	    while (str.charAt(++i) != '-') {
	      buf += str.charAt(i);
	      if (i == str.length) break;
	    }
	    if (buf != Number(buf) || str.charAt(i) != '-') {
	      throw new Error('Illegal attachments');
	    }
	    p.attachments = Number(buf);
	  }
	
	  // look up namespace (if any)
	  if ('/' == str.charAt(i + 1)) {
	    p.nsp = '';
	    while (++i) {
	      var c = str.charAt(i);
	      if (',' == c) break;
	      p.nsp += c;
	      if (i == str.length) break;
	    }
	  } else {
	    p.nsp = '/';
	  }
	
	  // look up id
	  var next = str.charAt(i + 1);
	  if ('' !== next && Number(next) == next) {
	    p.id = '';
	    while (++i) {
	      var c = str.charAt(i);
	      if (null == c || Number(c) != c) {
	        --i;
	        break;
	      }
	      p.id += str.charAt(i);
	      if (i == str.length) break;
	    }
	    p.id = Number(p.id);
	  }
	
	  // look up json data
	  if (str.charAt(++i)) {
	    p = tryParse(p, str.substr(i));
	  }
	
	  debug('decoded %s as %j', str, p);
	  return p;
	}
	
	function tryParse(p, str) {
	  try {
	    p.data = json.parse(str);
	  } catch(e){
	    return error();
	  }
	  return p; 
	};
	
	/**
	 * Deallocates a parser's resources
	 *
	 * @api public
	 */
	
	Decoder.prototype.destroy = function() {
	  if (this.reconstructor) {
	    this.reconstructor.finishedReconstruction();
	  }
	};
	
	/**
	 * A manager of a binary event's 'buffer sequence'. Should
	 * be constructed whenever a packet of type BINARY_EVENT is
	 * decoded.
	 *
	 * @param {Object} packet
	 * @return {BinaryReconstructor} initialized reconstructor
	 * @api private
	 */
	
	function BinaryReconstructor(packet) {
	  this.reconPack = packet;
	  this.buffers = [];
	}
	
	/**
	 * Method to be called when binary data received from connection
	 * after a BINARY_EVENT packet.
	 *
	 * @param {Buffer | ArrayBuffer} binData - the raw binary data received
	 * @return {null | Object} returns null if more binary data is expected or
	 *   a reconstructed packet object if all buffers have been received.
	 * @api private
	 */
	
	BinaryReconstructor.prototype.takeBinaryData = function(binData) {
	  this.buffers.push(binData);
	  if (this.buffers.length == this.reconPack.attachments) { // done with buffer list
	    var packet = binary.reconstructPacket(this.reconPack, this.buffers);
	    this.finishedReconstruction();
	    return packet;
	  }
	  return null;
	};
	
	/**
	 * Cleans up binary packet reconstruction variables.
	 *
	 * @api private
	 */
	
	BinaryReconstructor.prototype.finishedReconstruction = function() {
	  this.reconPack = null;
	  this.buffers = [];
	};
	
	function error(data){
	  return {
	    type: exports.ERROR,
	    data: 'parser error'
	  };
	}


/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module, global) {/*! JSON v3.3.2 | http://bestiejs.github.io/json3 | Copyright 2012-2014, Kit Cambridge | http://kit.mit-license.org */
	;(function () {
	  // Detect the `define` function exposed by asynchronous module loaders. The
	  // strict `define` check is necessary for compatibility with `r.js`.
	  var isLoader = "function" === "function" && __webpack_require__(120);
	
	  // A set of types used to distinguish objects from primitives.
	  var objectTypes = {
	    "function": true,
	    "object": true
	  };
	
	  // Detect the `exports` object exposed by CommonJS implementations.
	  var freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports;
	
	  // Use the `global` object exposed by Node (including Browserify via
	  // `insert-module-globals`), Narwhal, and Ringo as the default context,
	  // and the `window` object in browsers. Rhino exports a `global` function
	  // instead.
	  var root = objectTypes[typeof window] && window || this,
	      freeGlobal = freeExports && objectTypes[typeof module] && module && !module.nodeType && typeof global == "object" && global;
	
	  if (freeGlobal && (freeGlobal["global"] === freeGlobal || freeGlobal["window"] === freeGlobal || freeGlobal["self"] === freeGlobal)) {
	    root = freeGlobal;
	  }
	
	  // Public: Initializes JSON 3 using the given `context` object, attaching the
	  // `stringify` and `parse` functions to the specified `exports` object.
	  function runInContext(context, exports) {
	    context || (context = root["Object"]());
	    exports || (exports = root["Object"]());
	
	    // Native constructor aliases.
	    var Number = context["Number"] || root["Number"],
	        String = context["String"] || root["String"],
	        Object = context["Object"] || root["Object"],
	        Date = context["Date"] || root["Date"],
	        SyntaxError = context["SyntaxError"] || root["SyntaxError"],
	        TypeError = context["TypeError"] || root["TypeError"],
	        Math = context["Math"] || root["Math"],
	        nativeJSON = context["JSON"] || root["JSON"];
	
	    // Delegate to the native `stringify` and `parse` implementations.
	    if (typeof nativeJSON == "object" && nativeJSON) {
	      exports.stringify = nativeJSON.stringify;
	      exports.parse = nativeJSON.parse;
	    }
	
	    // Convenience aliases.
	    var objectProto = Object.prototype,
	        getClass = objectProto.toString,
	        isProperty, forEach, undef;
	
	    // Test the `Date#getUTC*` methods. Based on work by @Yaffle.
	    var isExtended = new Date(-3509827334573292);
	    try {
	      // The `getUTCFullYear`, `Month`, and `Date` methods return nonsensical
	      // results for certain dates in Opera >= 10.53.
	      isExtended = isExtended.getUTCFullYear() == -109252 && isExtended.getUTCMonth() === 0 && isExtended.getUTCDate() === 1 &&
	        // Safari < 2.0.2 stores the internal millisecond time value correctly,
	        // but clips the values returned by the date methods to the range of
	        // signed 32-bit integers ([-2 ** 31, 2 ** 31 - 1]).
	        isExtended.getUTCHours() == 10 && isExtended.getUTCMinutes() == 37 && isExtended.getUTCSeconds() == 6 && isExtended.getUTCMilliseconds() == 708;
	    } catch (exception) {}
	
	    // Internal: Determines whether the native `JSON.stringify` and `parse`
	    // implementations are spec-compliant. Based on work by Ken Snyder.
	    function has(name) {
	      if (has[name] !== undef) {
	        // Return cached feature test result.
	        return has[name];
	      }
	      var isSupported;
	      if (name == "bug-string-char-index") {
	        // IE <= 7 doesn't support accessing string characters using square
	        // bracket notation. IE 8 only supports this for primitives.
	        isSupported = "a"[0] != "a";
	      } else if (name == "json") {
	        // Indicates whether both `JSON.stringify` and `JSON.parse` are
	        // supported.
	        isSupported = has("json-stringify") && has("json-parse");
	      } else {
	        var value, serialized = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
	        // Test `JSON.stringify`.
	        if (name == "json-stringify") {
	          var stringify = exports.stringify, stringifySupported = typeof stringify == "function" && isExtended;
	          if (stringifySupported) {
	            // A test function object with a custom `toJSON` method.
	            (value = function () {
	              return 1;
	            }).toJSON = value;
	            try {
	              stringifySupported =
	                // Firefox 3.1b1 and b2 serialize string, number, and boolean
	                // primitives as object literals.
	                stringify(0) === "0" &&
	                // FF 3.1b1, b2, and JSON 2 serialize wrapped primitives as object
	                // literals.
	                stringify(new Number()) === "0" &&
	                stringify(new String()) == '""' &&
	                // FF 3.1b1, 2 throw an error if the value is `null`, `undefined`, or
	                // does not define a canonical JSON representation (this applies to
	                // objects with `toJSON` properties as well, *unless* they are nested
	                // within an object or array).
	                stringify(getClass) === undef &&
	                // IE 8 serializes `undefined` as `"undefined"`. Safari <= 5.1.7 and
	                // FF 3.1b3 pass this test.
	                stringify(undef) === undef &&
	                // Safari <= 5.1.7 and FF 3.1b3 throw `Error`s and `TypeError`s,
	                // respectively, if the value is omitted entirely.
	                stringify() === undef &&
	                // FF 3.1b1, 2 throw an error if the given value is not a number,
	                // string, array, object, Boolean, or `null` literal. This applies to
	                // objects with custom `toJSON` methods as well, unless they are nested
	                // inside object or array literals. YUI 3.0.0b1 ignores custom `toJSON`
	                // methods entirely.
	                stringify(value) === "1" &&
	                stringify([value]) == "[1]" &&
	                // Prototype <= 1.6.1 serializes `[undefined]` as `"[]"` instead of
	                // `"[null]"`.
	                stringify([undef]) == "[null]" &&
	                // YUI 3.0.0b1 fails to serialize `null` literals.
	                stringify(null) == "null" &&
	                // FF 3.1b1, 2 halts serialization if an array contains a function:
	                // `[1, true, getClass, 1]` serializes as "[1,true,],". FF 3.1b3
	                // elides non-JSON values from objects and arrays, unless they
	                // define custom `toJSON` methods.
	                stringify([undef, getClass, null]) == "[null,null,null]" &&
	                // Simple serialization test. FF 3.1b1 uses Unicode escape sequences
	                // where character escape codes are expected (e.g., `\b` => `\u0008`).
	                stringify({ "a": [value, true, false, null, "\x00\b\n\f\r\t"] }) == serialized &&
	                // FF 3.1b1 and b2 ignore the `filter` and `width` arguments.
	                stringify(null, value) === "1" &&
	                stringify([1, 2], null, 1) == "[\n 1,\n 2\n]" &&
	                // JSON 2, Prototype <= 1.7, and older WebKit builds incorrectly
	                // serialize extended years.
	                stringify(new Date(-8.64e15)) == '"-271821-04-20T00:00:00.000Z"' &&
	                // The milliseconds are optional in ES 5, but required in 5.1.
	                stringify(new Date(8.64e15)) == '"+275760-09-13T00:00:00.000Z"' &&
	                // Firefox <= 11.0 incorrectly serializes years prior to 0 as negative
	                // four-digit years instead of six-digit years. Credits: @Yaffle.
	                stringify(new Date(-621987552e5)) == '"-000001-01-01T00:00:00.000Z"' &&
	                // Safari <= 5.1.5 and Opera >= 10.53 incorrectly serialize millisecond
	                // values less than 1000. Credits: @Yaffle.
	                stringify(new Date(-1)) == '"1969-12-31T23:59:59.999Z"';
	            } catch (exception) {
	              stringifySupported = false;
	            }
	          }
	          isSupported = stringifySupported;
	        }
	        // Test `JSON.parse`.
	        if (name == "json-parse") {
	          var parse = exports.parse;
	          if (typeof parse == "function") {
	            try {
	              // FF 3.1b1, b2 will throw an exception if a bare literal is provided.
	              // Conforming implementations should also coerce the initial argument to
	              // a string prior to parsing.
	              if (parse("0") === 0 && !parse(false)) {
	                // Simple parsing test.
	                value = parse(serialized);
	                var parseSupported = value["a"].length == 5 && value["a"][0] === 1;
	                if (parseSupported) {
	                  try {
	                    // Safari <= 5.1.2 and FF 3.1b1 allow unescaped tabs in strings.
	                    parseSupported = !parse('"\t"');
	                  } catch (exception) {}
	                  if (parseSupported) {
	                    try {
	                      // FF 4.0 and 4.0.1 allow leading `+` signs and leading
	                      // decimal points. FF 4.0, 4.0.1, and IE 9-10 also allow
	                      // certain octal literals.
	                      parseSupported = parse("01") !== 1;
	                    } catch (exception) {}
	                  }
	                  if (parseSupported) {
	                    try {
	                      // FF 4.0, 4.0.1, and Rhino 1.7R3-R4 allow trailing decimal
	                      // points. These environments, along with FF 3.1b1 and 2,
	                      // also allow trailing commas in JSON objects and arrays.
	                      parseSupported = parse("1.") !== 1;
	                    } catch (exception) {}
	                  }
	                }
	              }
	            } catch (exception) {
	              parseSupported = false;
	            }
	          }
	          isSupported = parseSupported;
	        }
	      }
	      return has[name] = !!isSupported;
	    }
	
	    if (!has("json")) {
	      // Common `[[Class]]` name aliases.
	      var functionClass = "[object Function]",
	          dateClass = "[object Date]",
	          numberClass = "[object Number]",
	          stringClass = "[object String]",
	          arrayClass = "[object Array]",
	          booleanClass = "[object Boolean]";
	
	      // Detect incomplete support for accessing string characters by index.
	      var charIndexBuggy = has("bug-string-char-index");
	
	      // Define additional utility methods if the `Date` methods are buggy.
	      if (!isExtended) {
	        var floor = Math.floor;
	        // A mapping between the months of the year and the number of days between
	        // January 1st and the first of the respective month.
	        var Months = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
	        // Internal: Calculates the number of days between the Unix epoch and the
	        // first day of the given month.
	        var getDay = function (year, month) {
	          return Months[month] + 365 * (year - 1970) + floor((year - 1969 + (month = +(month > 1))) / 4) - floor((year - 1901 + month) / 100) + floor((year - 1601 + month) / 400);
	        };
	      }
	
	      // Internal: Determines if a property is a direct property of the given
	      // object. Delegates to the native `Object#hasOwnProperty` method.
	      if (!(isProperty = objectProto.hasOwnProperty)) {
	        isProperty = function (property) {
	          var members = {}, constructor;
	          if ((members.__proto__ = null, members.__proto__ = {
	            // The *proto* property cannot be set multiple times in recent
	            // versions of Firefox and SeaMonkey.
	            "toString": 1
	          }, members).toString != getClass) {
	            // Safari <= 2.0.3 doesn't implement `Object#hasOwnProperty`, but
	            // supports the mutable *proto* property.
	            isProperty = function (property) {
	              // Capture and break the object's prototype chain (see section 8.6.2
	              // of the ES 5.1 spec). The parenthesized expression prevents an
	              // unsafe transformation by the Closure Compiler.
	              var original = this.__proto__, result = property in (this.__proto__ = null, this);
	              // Restore the original prototype chain.
	              this.__proto__ = original;
	              return result;
	            };
	          } else {
	            // Capture a reference to the top-level `Object` constructor.
	            constructor = members.constructor;
	            // Use the `constructor` property to simulate `Object#hasOwnProperty` in
	            // other environments.
	            isProperty = function (property) {
	              var parent = (this.constructor || constructor).prototype;
	              return property in this && !(property in parent && this[property] === parent[property]);
	            };
	          }
	          members = null;
	          return isProperty.call(this, property);
	        };
	      }
	
	      // Internal: Normalizes the `for...in` iteration algorithm across
	      // environments. Each enumerated key is yielded to a `callback` function.
	      forEach = function (object, callback) {
	        var size = 0, Properties, members, property;
	
	        // Tests for bugs in the current environment's `for...in` algorithm. The
	        // `valueOf` property inherits the non-enumerable flag from
	        // `Object.prototype` in older versions of IE, Netscape, and Mozilla.
	        (Properties = function () {
	          this.valueOf = 0;
	        }).prototype.valueOf = 0;
	
	        // Iterate over a new instance of the `Properties` class.
	        members = new Properties();
	        for (property in members) {
	          // Ignore all properties inherited from `Object.prototype`.
	          if (isProperty.call(members, property)) {
	            size++;
	          }
	        }
	        Properties = members = null;
	
	        // Normalize the iteration algorithm.
	        if (!size) {
	          // A list of non-enumerable properties inherited from `Object.prototype`.
	          members = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
	          // IE <= 8, Mozilla 1.0, and Netscape 6.2 ignore shadowed non-enumerable
	          // properties.
	          forEach = function (object, callback) {
	            var isFunction = getClass.call(object) == functionClass, property, length;
	            var hasProperty = !isFunction && typeof object.constructor != "function" && objectTypes[typeof object.hasOwnProperty] && object.hasOwnProperty || isProperty;
	            for (property in object) {
	              // Gecko <= 1.0 enumerates the `prototype` property of functions under
	              // certain conditions; IE does not.
	              if (!(isFunction && property == "prototype") && hasProperty.call(object, property)) {
	                callback(property);
	              }
	            }
	            // Manually invoke the callback for each non-enumerable property.
	            for (length = members.length; property = members[--length]; hasProperty.call(object, property) && callback(property));
	          };
	        } else if (size == 2) {
	          // Safari <= 2.0.4 enumerates shadowed properties twice.
	          forEach = function (object, callback) {
	            // Create a set of iterated properties.
	            var members = {}, isFunction = getClass.call(object) == functionClass, property;
	            for (property in object) {
	              // Store each property name to prevent double enumeration. The
	              // `prototype` property of functions is not enumerated due to cross-
	              // environment inconsistencies.
	              if (!(isFunction && property == "prototype") && !isProperty.call(members, property) && (members[property] = 1) && isProperty.call(object, property)) {
	                callback(property);
	              }
	            }
	          };
	        } else {
	          // No bugs detected; use the standard `for...in` algorithm.
	          forEach = function (object, callback) {
	            var isFunction = getClass.call(object) == functionClass, property, isConstructor;
	            for (property in object) {
	              if (!(isFunction && property == "prototype") && isProperty.call(object, property) && !(isConstructor = property === "constructor")) {
	                callback(property);
	              }
	            }
	            // Manually invoke the callback for the `constructor` property due to
	            // cross-environment inconsistencies.
	            if (isConstructor || isProperty.call(object, (property = "constructor"))) {
	              callback(property);
	            }
	          };
	        }
	        return forEach(object, callback);
	      };
	
	      // Public: Serializes a JavaScript `value` as a JSON string. The optional
	      // `filter` argument may specify either a function that alters how object and
	      // array members are serialized, or an array of strings and numbers that
	      // indicates which properties should be serialized. The optional `width`
	      // argument may be either a string or number that specifies the indentation
	      // level of the output.
	      if (!has("json-stringify")) {
	        // Internal: A map of control characters and their escaped equivalents.
	        var Escapes = {
	          92: "\\\\",
	          34: '\\"',
	          8: "\\b",
	          12: "\\f",
	          10: "\\n",
	          13: "\\r",
	          9: "\\t"
	        };
	
	        // Internal: Converts `value` into a zero-padded string such that its
	        // length is at least equal to `width`. The `width` must be <= 6.
	        var leadingZeroes = "000000";
	        var toPaddedString = function (width, value) {
	          // The `|| 0` expression is necessary to work around a bug in
	          // Opera <= 7.54u2 where `0 == -0`, but `String(-0) !== "0"`.
	          return (leadingZeroes + (value || 0)).slice(-width);
	        };
	
	        // Internal: Double-quotes a string `value`, replacing all ASCII control
	        // characters (characters with code unit values between 0 and 31) with
	        // their escaped equivalents. This is an implementation of the
	        // `Quote(value)` operation defined in ES 5.1 section 15.12.3.
	        var unicodePrefix = "\\u00";
	        var quote = function (value) {
	          var result = '"', index = 0, length = value.length, useCharIndex = !charIndexBuggy || length > 10;
	          var symbols = useCharIndex && (charIndexBuggy ? value.split("") : value);
	          for (; index < length; index++) {
	            var charCode = value.charCodeAt(index);
	            // If the character is a control character, append its Unicode or
	            // shorthand escape sequence; otherwise, append the character as-is.
	            switch (charCode) {
	              case 8: case 9: case 10: case 12: case 13: case 34: case 92:
	                result += Escapes[charCode];
	                break;
	              default:
	                if (charCode < 32) {
	                  result += unicodePrefix + toPaddedString(2, charCode.toString(16));
	                  break;
	                }
	                result += useCharIndex ? symbols[index] : value.charAt(index);
	            }
	          }
	          return result + '"';
	        };
	
	        // Internal: Recursively serializes an object. Implements the
	        // `Str(key, holder)`, `JO(value)`, and `JA(value)` operations.
	        var serialize = function (property, object, callback, properties, whitespace, indentation, stack) {
	          var value, className, year, month, date, time, hours, minutes, seconds, milliseconds, results, element, index, length, prefix, result;
	          try {
	            // Necessary for host object support.
	            value = object[property];
	          } catch (exception) {}
	          if (typeof value == "object" && value) {
	            className = getClass.call(value);
	            if (className == dateClass && !isProperty.call(value, "toJSON")) {
	              if (value > -1 / 0 && value < 1 / 0) {
	                // Dates are serialized according to the `Date#toJSON` method
	                // specified in ES 5.1 section 15.9.5.44. See section 15.9.1.15
	                // for the ISO 8601 date time string format.
	                if (getDay) {
	                  // Manually compute the year, month, date, hours, minutes,
	                  // seconds, and milliseconds if the `getUTC*` methods are
	                  // buggy. Adapted from @Yaffle's `date-shim` project.
	                  date = floor(value / 864e5);
	                  for (year = floor(date / 365.2425) + 1970 - 1; getDay(year + 1, 0) <= date; year++);
	                  for (month = floor((date - getDay(year, 0)) / 30.42); getDay(year, month + 1) <= date; month++);
	                  date = 1 + date - getDay(year, month);
	                  // The `time` value specifies the time within the day (see ES
	                  // 5.1 section 15.9.1.2). The formula `(A % B + B) % B` is used
	                  // to compute `A modulo B`, as the `%` operator does not
	                  // correspond to the `modulo` operation for negative numbers.
	                  time = (value % 864e5 + 864e5) % 864e5;
	                  // The hours, minutes, seconds, and milliseconds are obtained by
	                  // decomposing the time within the day. See section 15.9.1.10.
	                  hours = floor(time / 36e5) % 24;
	                  minutes = floor(time / 6e4) % 60;
	                  seconds = floor(time / 1e3) % 60;
	                  milliseconds = time % 1e3;
	                } else {
	                  year = value.getUTCFullYear();
	                  month = value.getUTCMonth();
	                  date = value.getUTCDate();
	                  hours = value.getUTCHours();
	                  minutes = value.getUTCMinutes();
	                  seconds = value.getUTCSeconds();
	                  milliseconds = value.getUTCMilliseconds();
	                }
	                // Serialize extended years correctly.
	                value = (year <= 0 || year >= 1e4 ? (year < 0 ? "-" : "+") + toPaddedString(6, year < 0 ? -year : year) : toPaddedString(4, year)) +
	                  "-" + toPaddedString(2, month + 1) + "-" + toPaddedString(2, date) +
	                  // Months, dates, hours, minutes, and seconds should have two
	                  // digits; milliseconds should have three.
	                  "T" + toPaddedString(2, hours) + ":" + toPaddedString(2, minutes) + ":" + toPaddedString(2, seconds) +
	                  // Milliseconds are optional in ES 5.0, but required in 5.1.
	                  "." + toPaddedString(3, milliseconds) + "Z";
	              } else {
	                value = null;
	              }
	            } else if (typeof value.toJSON == "function" && ((className != numberClass && className != stringClass && className != arrayClass) || isProperty.call(value, "toJSON"))) {
	              // Prototype <= 1.6.1 adds non-standard `toJSON` methods to the
	              // `Number`, `String`, `Date`, and `Array` prototypes. JSON 3
	              // ignores all `toJSON` methods on these objects unless they are
	              // defined directly on an instance.
	              value = value.toJSON(property);
	            }
	          }
	          if (callback) {
	            // If a replacement function was provided, call it to obtain the value
	            // for serialization.
	            value = callback.call(object, property, value);
	          }
	          if (value === null) {
	            return "null";
	          }
	          className = getClass.call(value);
	          if (className == booleanClass) {
	            // Booleans are represented literally.
	            return "" + value;
	          } else if (className == numberClass) {
	            // JSON numbers must be finite. `Infinity` and `NaN` are serialized as
	            // `"null"`.
	            return value > -1 / 0 && value < 1 / 0 ? "" + value : "null";
	          } else if (className == stringClass) {
	            // Strings are double-quoted and escaped.
	            return quote("" + value);
	          }
	          // Recursively serialize objects and arrays.
	          if (typeof value == "object") {
	            // Check for cyclic structures. This is a linear search; performance
	            // is inversely proportional to the number of unique nested objects.
	            for (length = stack.length; length--;) {
	              if (stack[length] === value) {
	                // Cyclic structures cannot be serialized by `JSON.stringify`.
	                throw TypeError();
	              }
	            }
	            // Add the object to the stack of traversed objects.
	            stack.push(value);
	            results = [];
	            // Save the current indentation level and indent one additional level.
	            prefix = indentation;
	            indentation += whitespace;
	            if (className == arrayClass) {
	              // Recursively serialize array elements.
	              for (index = 0, length = value.length; index < length; index++) {
	                element = serialize(index, value, callback, properties, whitespace, indentation, stack);
	                results.push(element === undef ? "null" : element);
	              }
	              result = results.length ? (whitespace ? "[\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "]" : ("[" + results.join(",") + "]")) : "[]";
	            } else {
	              // Recursively serialize object members. Members are selected from
	              // either a user-specified list of property names, or the object
	              // itself.
	              forEach(properties || value, function (property) {
	                var element = serialize(property, value, callback, properties, whitespace, indentation, stack);
	                if (element !== undef) {
	                  // According to ES 5.1 section 15.12.3: "If `gap` {whitespace}
	                  // is not the empty string, let `member` {quote(property) + ":"}
	                  // be the concatenation of `member` and the `space` character."
	                  // The "`space` character" refers to the literal space
	                  // character, not the `space` {width} argument provided to
	                  // `JSON.stringify`.
	                  results.push(quote(property) + ":" + (whitespace ? " " : "") + element);
	                }
	              });
	              result = results.length ? (whitespace ? "{\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "}" : ("{" + results.join(",") + "}")) : "{}";
	            }
	            // Remove the object from the traversed object stack.
	            stack.pop();
	            return result;
	          }
	        };
	
	        // Public: `JSON.stringify`. See ES 5.1 section 15.12.3.
	        exports.stringify = function (source, filter, width) {
	          var whitespace, callback, properties, className;
	          if (objectTypes[typeof filter] && filter) {
	            if ((className = getClass.call(filter)) == functionClass) {
	              callback = filter;
	            } else if (className == arrayClass) {
	              // Convert the property names array into a makeshift set.
	              properties = {};
	              for (var index = 0, length = filter.length, value; index < length; value = filter[index++], ((className = getClass.call(value)), className == stringClass || className == numberClass) && (properties[value] = 1));
	            }
	          }
	          if (width) {
	            if ((className = getClass.call(width)) == numberClass) {
	              // Convert the `width` to an integer and create a string containing
	              // `width` number of space characters.
	              if ((width -= width % 1) > 0) {
	                for (whitespace = "", width > 10 && (width = 10); whitespace.length < width; whitespace += " ");
	              }
	            } else if (className == stringClass) {
	              whitespace = width.length <= 10 ? width : width.slice(0, 10);
	            }
	          }
	          // Opera <= 7.54u2 discards the values associated with empty string keys
	          // (`""`) only if they are used directly within an object member list
	          // (e.g., `!("" in { "": 1})`).
	          return serialize("", (value = {}, value[""] = source, value), callback, properties, whitespace, "", []);
	        };
	      }
	
	      // Public: Parses a JSON source string.
	      if (!has("json-parse")) {
	        var fromCharCode = String.fromCharCode;
	
	        // Internal: A map of escaped control characters and their unescaped
	        // equivalents.
	        var Unescapes = {
	          92: "\\",
	          34: '"',
	          47: "/",
	          98: "\b",
	          116: "\t",
	          110: "\n",
	          102: "\f",
	          114: "\r"
	        };
	
	        // Internal: Stores the parser state.
	        var Index, Source;
	
	        // Internal: Resets the parser state and throws a `SyntaxError`.
	        var abort = function () {
	          Index = Source = null;
	          throw SyntaxError();
	        };
	
	        // Internal: Returns the next token, or `"$"` if the parser has reached
	        // the end of the source string. A token may be a string, number, `null`
	        // literal, or Boolean literal.
	        var lex = function () {
	          var source = Source, length = source.length, value, begin, position, isSigned, charCode;
	          while (Index < length) {
	            charCode = source.charCodeAt(Index);
	            switch (charCode) {
	              case 9: case 10: case 13: case 32:
	                // Skip whitespace tokens, including tabs, carriage returns, line
	                // feeds, and space characters.
	                Index++;
	                break;
	              case 123: case 125: case 91: case 93: case 58: case 44:
	                // Parse a punctuator token (`{`, `}`, `[`, `]`, `:`, or `,`) at
	                // the current position.
	                value = charIndexBuggy ? source.charAt(Index) : source[Index];
	                Index++;
	                return value;
	              case 34:
	                // `"` delimits a JSON string; advance to the next character and
	                // begin parsing the string. String tokens are prefixed with the
	                // sentinel `@` character to distinguish them from punctuators and
	                // end-of-string tokens.
	                for (value = "@", Index++; Index < length;) {
	                  charCode = source.charCodeAt(Index);
	                  if (charCode < 32) {
	                    // Unescaped ASCII control characters (those with a code unit
	                    // less than the space character) are not permitted.
	                    abort();
	                  } else if (charCode == 92) {
	                    // A reverse solidus (`\`) marks the beginning of an escaped
	                    // control character (including `"`, `\`, and `/`) or Unicode
	                    // escape sequence.
	                    charCode = source.charCodeAt(++Index);
	                    switch (charCode) {
	                      case 92: case 34: case 47: case 98: case 116: case 110: case 102: case 114:
	                        // Revive escaped control characters.
	                        value += Unescapes[charCode];
	                        Index++;
	                        break;
	                      case 117:
	                        // `\u` marks the beginning of a Unicode escape sequence.
	                        // Advance to the first character and validate the
	                        // four-digit code point.
	                        begin = ++Index;
	                        for (position = Index + 4; Index < position; Index++) {
	                          charCode = source.charCodeAt(Index);
	                          // A valid sequence comprises four hexdigits (case-
	                          // insensitive) that form a single hexadecimal value.
	                          if (!(charCode >= 48 && charCode <= 57 || charCode >= 97 && charCode <= 102 || charCode >= 65 && charCode <= 70)) {
	                            // Invalid Unicode escape sequence.
	                            abort();
	                          }
	                        }
	                        // Revive the escaped character.
	                        value += fromCharCode("0x" + source.slice(begin, Index));
	                        break;
	                      default:
	                        // Invalid escape sequence.
	                        abort();
	                    }
	                  } else {
	                    if (charCode == 34) {
	                      // An unescaped double-quote character marks the end of the
	                      // string.
	                      break;
	                    }
	                    charCode = source.charCodeAt(Index);
	                    begin = Index;
	                    // Optimize for the common case where a string is valid.
	                    while (charCode >= 32 && charCode != 92 && charCode != 34) {
	                      charCode = source.charCodeAt(++Index);
	                    }
	                    // Append the string as-is.
	                    value += source.slice(begin, Index);
	                  }
	                }
	                if (source.charCodeAt(Index) == 34) {
	                  // Advance to the next character and return the revived string.
	                  Index++;
	                  return value;
	                }
	                // Unterminated string.
	                abort();
	              default:
	                // Parse numbers and literals.
	                begin = Index;
	                // Advance past the negative sign, if one is specified.
	                if (charCode == 45) {
	                  isSigned = true;
	                  charCode = source.charCodeAt(++Index);
	                }
	                // Parse an integer or floating-point value.
	                if (charCode >= 48 && charCode <= 57) {
	                  // Leading zeroes are interpreted as octal literals.
	                  if (charCode == 48 && ((charCode = source.charCodeAt(Index + 1)), charCode >= 48 && charCode <= 57)) {
	                    // Illegal octal literal.
	                    abort();
	                  }
	                  isSigned = false;
	                  // Parse the integer component.
	                  for (; Index < length && ((charCode = source.charCodeAt(Index)), charCode >= 48 && charCode <= 57); Index++);
	                  // Floats cannot contain a leading decimal point; however, this
	                  // case is already accounted for by the parser.
	                  if (source.charCodeAt(Index) == 46) {
	                    position = ++Index;
	                    // Parse the decimal component.
	                    for (; position < length && ((charCode = source.charCodeAt(position)), charCode >= 48 && charCode <= 57); position++);
	                    if (position == Index) {
	                      // Illegal trailing decimal.
	                      abort();
	                    }
	                    Index = position;
	                  }
	                  // Parse exponents. The `e` denoting the exponent is
	                  // case-insensitive.
	                  charCode = source.charCodeAt(Index);
	                  if (charCode == 101 || charCode == 69) {
	                    charCode = source.charCodeAt(++Index);
	                    // Skip past the sign following the exponent, if one is
	                    // specified.
	                    if (charCode == 43 || charCode == 45) {
	                      Index++;
	                    }
	                    // Parse the exponential component.
	                    for (position = Index; position < length && ((charCode = source.charCodeAt(position)), charCode >= 48 && charCode <= 57); position++);
	                    if (position == Index) {
	                      // Illegal empty exponent.
	                      abort();
	                    }
	                    Index = position;
	                  }
	                  // Coerce the parsed value to a JavaScript number.
	                  return +source.slice(begin, Index);
	                }
	                // A negative sign may only precede numbers.
	                if (isSigned) {
	                  abort();
	                }
	                // `true`, `false`, and `null` literals.
	                if (source.slice(Index, Index + 4) == "true") {
	                  Index += 4;
	                  return true;
	                } else if (source.slice(Index, Index + 5) == "false") {
	                  Index += 5;
	                  return false;
	                } else if (source.slice(Index, Index + 4) == "null") {
	                  Index += 4;
	                  return null;
	                }
	                // Unrecognized token.
	                abort();
	            }
	          }
	          // Return the sentinel `$` character if the parser has reached the end
	          // of the source string.
	          return "$";
	        };
	
	        // Internal: Parses a JSON `value` token.
	        var get = function (value) {
	          var results, hasMembers;
	          if (value == "$") {
	            // Unexpected end of input.
	            abort();
	          }
	          if (typeof value == "string") {
	            if ((charIndexBuggy ? value.charAt(0) : value[0]) == "@") {
	              // Remove the sentinel `@` character.
	              return value.slice(1);
	            }
	            // Parse object and array literals.
	            if (value == "[") {
	              // Parses a JSON array, returning a new JavaScript array.
	              results = [];
	              for (;; hasMembers || (hasMembers = true)) {
	                value = lex();
	                // A closing square bracket marks the end of the array literal.
	                if (value == "]") {
	                  break;
	                }
	                // If the array literal contains elements, the current token
	                // should be a comma separating the previous element from the
	                // next.
	                if (hasMembers) {
	                  if (value == ",") {
	                    value = lex();
	                    if (value == "]") {
	                      // Unexpected trailing `,` in array literal.
	                      abort();
	                    }
	                  } else {
	                    // A `,` must separate each array element.
	                    abort();
	                  }
	                }
	                // Elisions and leading commas are not permitted.
	                if (value == ",") {
	                  abort();
	                }
	                results.push(get(value));
	              }
	              return results;
	            } else if (value == "{") {
	              // Parses a JSON object, returning a new JavaScript object.
	              results = {};
	              for (;; hasMembers || (hasMembers = true)) {
	                value = lex();
	                // A closing curly brace marks the end of the object literal.
	                if (value == "}") {
	                  break;
	                }
	                // If the object literal contains members, the current token
	                // should be a comma separator.
	                if (hasMembers) {
	                  if (value == ",") {
	                    value = lex();
	                    if (value == "}") {
	                      // Unexpected trailing `,` in object literal.
	                      abort();
	                    }
	                  } else {
	                    // A `,` must separate each object member.
	                    abort();
	                  }
	                }
	                // Leading commas are not permitted, object property names must be
	                // double-quoted strings, and a `:` must separate each property
	                // name and value.
	                if (value == "," || typeof value != "string" || (charIndexBuggy ? value.charAt(0) : value[0]) != "@" || lex() != ":") {
	                  abort();
	                }
	                results[value.slice(1)] = get(lex());
	              }
	              return results;
	            }
	            // Unexpected token encountered.
	            abort();
	          }
	          return value;
	        };
	
	        // Internal: Updates a traversed object member.
	        var update = function (source, property, callback) {
	          var element = walk(source, property, callback);
	          if (element === undef) {
	            delete source[property];
	          } else {
	            source[property] = element;
	          }
	        };
	
	        // Internal: Recursively traverses a parsed JSON object, invoking the
	        // `callback` function for each value. This is an implementation of the
	        // `Walk(holder, name)` operation defined in ES 5.1 section 15.12.2.
	        var walk = function (source, property, callback) {
	          var value = source[property], length;
	          if (typeof value == "object" && value) {
	            // `forEach` can't be used to traverse an array in Opera <= 8.54
	            // because its `Object#hasOwnProperty` implementation returns `false`
	            // for array indices (e.g., `![1, 2, 3].hasOwnProperty("0")`).
	            if (getClass.call(value) == arrayClass) {
	              for (length = value.length; length--;) {
	                update(value, length, callback);
	              }
	            } else {
	              forEach(value, function (property) {
	                update(value, property, callback);
	              });
	            }
	          }
	          return callback.call(source, property, value);
	        };
	
	        // Public: `JSON.parse`. See ES 5.1 section 15.12.2.
	        exports.parse = function (source, callback) {
	          var result, value;
	          Index = 0;
	          Source = "" + source;
	          result = get(lex());
	          // If a JSON string contains multiple tokens, it is invalid.
	          if (lex() != "$") {
	            abort();
	          }
	          // Reset the parser state.
	          Index = Source = null;
	          return callback && getClass.call(callback) == functionClass ? walk((value = {}, value[""] = result, value), "", callback) : result;
	        };
	      }
	    }
	
	    exports["runInContext"] = runInContext;
	    return exports;
	  }
	
	  if (freeExports && !isLoader) {
	    // Export for CommonJS environments.
	    runInContext(root, freeExports);
	  } else {
	    // Export for web browsers and JavaScript engines.
	    var nativeJSON = root.JSON,
	        previousJSON = root["JSON3"],
	        isRestored = false;
	
	    var JSON3 = runInContext(root, (root["JSON3"] = {
	      // Public: Restores the original value of the global `JSON` object and
	      // returns a reference to the `JSON3` object.
	      "noConflict": function () {
	        if (!isRestored) {
	          isRestored = true;
	          root.JSON = nativeJSON;
	          root["JSON3"] = previousJSON;
	          nativeJSON = previousJSON = null;
	        }
	        return JSON3;
	      }
	    }));
	
	    root.JSON = {
	      "parse": JSON3.parse,
	      "stringify": JSON3.stringify
	    };
	  }
	
	  // Export for asynchronous module loaders.
	  if (isLoader) {
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	      return JSON3;
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  }
	}).call(this);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(119)(module), (function() { return this; }())))

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(62);

/***/ },
/* 120 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;
	
	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ },
/* 121 */
/***/ function(module, exports) {

	
	/**
	 * Expose `Emitter`.
	 */
	
	module.exports = Emitter;
	
	/**
	 * Initialize a new `Emitter`.
	 *
	 * @api public
	 */
	
	function Emitter(obj) {
	  if (obj) return mixin(obj);
	};
	
	/**
	 * Mixin the emitter properties.
	 *
	 * @param {Object} obj
	 * @return {Object}
	 * @api private
	 */
	
	function mixin(obj) {
	  for (var key in Emitter.prototype) {
	    obj[key] = Emitter.prototype[key];
	  }
	  return obj;
	}
	
	/**
	 * Listen on the given `event` with `fn`.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
	
	Emitter.prototype.on =
	Emitter.prototype.addEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};
	  (this._callbacks[event] = this._callbacks[event] || [])
	    .push(fn);
	  return this;
	};
	
	/**
	 * Adds an `event` listener that will be invoked a single
	 * time then automatically removed.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
	
	Emitter.prototype.once = function(event, fn){
	  var self = this;
	  this._callbacks = this._callbacks || {};
	
	  function on() {
	    self.off(event, on);
	    fn.apply(this, arguments);
	  }
	
	  on.fn = fn;
	  this.on(event, on);
	  return this;
	};
	
	/**
	 * Remove the given callback for `event` or all
	 * registered callbacks.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
	
	Emitter.prototype.off =
	Emitter.prototype.removeListener =
	Emitter.prototype.removeAllListeners =
	Emitter.prototype.removeEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};
	
	  // all
	  if (0 == arguments.length) {
	    this._callbacks = {};
	    return this;
	  }
	
	  // specific event
	  var callbacks = this._callbacks[event];
	  if (!callbacks) return this;
	
	  // remove all handlers
	  if (1 == arguments.length) {
	    delete this._callbacks[event];
	    return this;
	  }
	
	  // remove specific handler
	  var cb;
	  for (var i = 0; i < callbacks.length; i++) {
	    cb = callbacks[i];
	    if (cb === fn || cb.fn === fn) {
	      callbacks.splice(i, 1);
	      break;
	    }
	  }
	  return this;
	};
	
	/**
	 * Emit `event` with the given args.
	 *
	 * @param {String} event
	 * @param {Mixed} ...
	 * @return {Emitter}
	 */
	
	Emitter.prototype.emit = function(event){
	  this._callbacks = this._callbacks || {};
	  var args = [].slice.call(arguments, 1)
	    , callbacks = this._callbacks[event];
	
	  if (callbacks) {
	    callbacks = callbacks.slice(0);
	    for (var i = 0, len = callbacks.length; i < len; ++i) {
	      callbacks[i].apply(this, args);
	    }
	  }
	
	  return this;
	};
	
	/**
	 * Return array of callbacks for `event`.
	 *
	 * @param {String} event
	 * @return {Array}
	 * @api public
	 */
	
	Emitter.prototype.listeners = function(event){
	  this._callbacks = this._callbacks || {};
	  return this._callbacks[event] || [];
	};
	
	/**
	 * Check if this emitter has `event` handlers.
	 *
	 * @param {String} event
	 * @return {Boolean}
	 * @api public
	 */
	
	Emitter.prototype.hasListeners = function(event){
	  return !! this.listeners(event).length;
	};


/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/*global Blob,File*/
	
	/**
	 * Module requirements
	 */
	
	var isArray = __webpack_require__(123);
	var isBuf = __webpack_require__(124);
	
	/**
	 * Replaces every Buffer | ArrayBuffer in packet with a numbered placeholder.
	 * Anything with blobs or files should be fed through removeBlobs before coming
	 * here.
	 *
	 * @param {Object} packet - socket.io event packet
	 * @return {Object} with deconstructed packet and list of buffers
	 * @api public
	 */
	
	exports.deconstructPacket = function(packet){
	  var buffers = [];
	  var packetData = packet.data;
	
	  function _deconstructPacket(data) {
	    if (!data) return data;
	
	    if (isBuf(data)) {
	      var placeholder = { _placeholder: true, num: buffers.length };
	      buffers.push(data);
	      return placeholder;
	    } else if (isArray(data)) {
	      var newData = new Array(data.length);
	      for (var i = 0; i < data.length; i++) {
	        newData[i] = _deconstructPacket(data[i]);
	      }
	      return newData;
	    } else if ('object' == typeof data && !(data instanceof Date)) {
	      var newData = {};
	      for (var key in data) {
	        newData[key] = _deconstructPacket(data[key]);
	      }
	      return newData;
	    }
	    return data;
	  }
	
	  var pack = packet;
	  pack.data = _deconstructPacket(packetData);
	  pack.attachments = buffers.length; // number of binary 'attachments'
	  return {packet: pack, buffers: buffers};
	};
	
	/**
	 * Reconstructs a binary packet from its placeholder packet and buffers
	 *
	 * @param {Object} packet - event packet with placeholders
	 * @param {Array} buffers - binary buffers to put in placeholder positions
	 * @return {Object} reconstructed packet
	 * @api public
	 */
	
	exports.reconstructPacket = function(packet, buffers) {
	  var curPlaceHolder = 0;
	
	  function _reconstructPacket(data) {
	    if (data && data._placeholder) {
	      var buf = buffers[data.num]; // appropriate buffer (should be natural order anyway)
	      return buf;
	    } else if (isArray(data)) {
	      for (var i = 0; i < data.length; i++) {
	        data[i] = _reconstructPacket(data[i]);
	      }
	      return data;
	    } else if (data && 'object' == typeof data) {
	      for (var key in data) {
	        data[key] = _reconstructPacket(data[key]);
	      }
	      return data;
	    }
	    return data;
	  }
	
	  packet.data = _reconstructPacket(packet.data);
	  packet.attachments = undefined; // no longer useful
	  return packet;
	};
	
	/**
	 * Asynchronously removes Blobs or Files from data via
	 * FileReader's readAsArrayBuffer method. Used before encoding
	 * data as msgpack. Calls callback with the blobless data.
	 *
	 * @param {Object} data
	 * @param {Function} callback
	 * @api private
	 */
	
	exports.removeBlobs = function(data, callback) {
	  function _removeBlobs(obj, curKey, containingObject) {
	    if (!obj) return obj;
	
	    // convert any blob
	    if ((global.Blob && obj instanceof Blob) ||
	        (global.File && obj instanceof File)) {
	      pendingBlobs++;
	
	      // async filereader
	      var fileReader = new FileReader();
	      fileReader.onload = function() { // this.result == arraybuffer
	        if (containingObject) {
	          containingObject[curKey] = this.result;
	        }
	        else {
	          bloblessData = this.result;
	        }
	
	        // if nothing pending its callback time
	        if(! --pendingBlobs) {
	          callback(bloblessData);
	        }
	      };
	
	      fileReader.readAsArrayBuffer(obj); // blob -> arraybuffer
	    } else if (isArray(obj)) { // handle array
	      for (var i = 0; i < obj.length; i++) {
	        _removeBlobs(obj[i], i, obj);
	      }
	    } else if (obj && 'object' == typeof obj && !isBuf(obj)) { // and object
	      for (var key in obj) {
	        _removeBlobs(obj[key], key, obj);
	      }
	    }
	  }
	
	  var pendingBlobs = 0;
	  var bloblessData = data;
	  _removeBlobs(bloblessData);
	  if (!pendingBlobs) {
	    callback(bloblessData);
	  }
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(250);

/***/ },
/* 124 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {
	module.exports = isBuf;
	
	/**
	 * Returns true if obj is a buffer or an arraybuffer.
	 *
	 * @api private
	 */
	
	function isBuf(obj) {
	  return (global.Buffer && global.Buffer.isBuffer(obj)) ||
	         (global.ArrayBuffer && obj instanceof ArrayBuffer);
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Module dependencies.
	 */
	
	var eio = __webpack_require__(126);
	var Socket = __webpack_require__(151);
	var Emitter = __webpack_require__(152);
	var parser = __webpack_require__(117);
	var on = __webpack_require__(154);
	var bind = __webpack_require__(155);
	var debug = __webpack_require__(114)('socket.io-client:manager');
	var indexOf = __webpack_require__(149);
	var Backoff = __webpack_require__(157);
	
	/**
	 * IE6+ hasOwnProperty
	 */
	
	var has = Object.prototype.hasOwnProperty;
	
	/**
	 * Module exports
	 */
	
	module.exports = Manager;
	
	/**
	 * `Manager` constructor.
	 *
	 * @param {String} engine instance or engine uri/opts
	 * @param {Object} options
	 * @api public
	 */
	
	function Manager (uri, opts) {
	  if (!(this instanceof Manager)) return new Manager(uri, opts);
	  if (uri && ('object' === typeof uri)) {
	    opts = uri;
	    uri = undefined;
	  }
	  opts = opts || {};
	
	  opts.path = opts.path || '/socket.io';
	  this.nsps = {};
	  this.subs = [];
	  this.opts = opts;
	  this.reconnection(opts.reconnection !== false);
	  this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
	  this.reconnectionDelay(opts.reconnectionDelay || 1000);
	  this.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);
	  this.randomizationFactor(opts.randomizationFactor || 0.5);
	  this.backoff = new Backoff({
	    min: this.reconnectionDelay(),
	    max: this.reconnectionDelayMax(),
	    jitter: this.randomizationFactor()
	  });
	  this.timeout(null == opts.timeout ? 20000 : opts.timeout);
	  this.readyState = 'closed';
	  this.uri = uri;
	  this.connecting = [];
	  this.lastPing = null;
	  this.encoding = false;
	  this.packetBuffer = [];
	  this.encoder = new parser.Encoder();
	  this.decoder = new parser.Decoder();
	  this.autoConnect = opts.autoConnect !== false;
	  if (this.autoConnect) this.open();
	}
	
	/**
	 * Propagate given event to sockets and emit on `this`
	 *
	 * @api private
	 */
	
	Manager.prototype.emitAll = function () {
	  this.emit.apply(this, arguments);
	  for (var nsp in this.nsps) {
	    if (has.call(this.nsps, nsp)) {
	      this.nsps[nsp].emit.apply(this.nsps[nsp], arguments);
	    }
	  }
	};
	
	/**
	 * Update `socket.id` of all sockets
	 *
	 * @api private
	 */
	
	Manager.prototype.updateSocketIds = function () {
	  for (var nsp in this.nsps) {
	    if (has.call(this.nsps, nsp)) {
	      this.nsps[nsp].id = this.engine.id;
	    }
	  }
	};
	
	/**
	 * Mix in `Emitter`.
	 */
	
	Emitter(Manager.prototype);
	
	/**
	 * Sets the `reconnection` config.
	 *
	 * @param {Boolean} true/false if it should automatically reconnect
	 * @return {Manager} self or value
	 * @api public
	 */
	
	Manager.prototype.reconnection = function (v) {
	  if (!arguments.length) return this._reconnection;
	  this._reconnection = !!v;
	  return this;
	};
	
	/**
	 * Sets the reconnection attempts config.
	 *
	 * @param {Number} max reconnection attempts before giving up
	 * @return {Manager} self or value
	 * @api public
	 */
	
	Manager.prototype.reconnectionAttempts = function (v) {
	  if (!arguments.length) return this._reconnectionAttempts;
	  this._reconnectionAttempts = v;
	  return this;
	};
	
	/**
	 * Sets the delay between reconnections.
	 *
	 * @param {Number} delay
	 * @return {Manager} self or value
	 * @api public
	 */
	
	Manager.prototype.reconnectionDelay = function (v) {
	  if (!arguments.length) return this._reconnectionDelay;
	  this._reconnectionDelay = v;
	  this.backoff && this.backoff.setMin(v);
	  return this;
	};
	
	Manager.prototype.randomizationFactor = function (v) {
	  if (!arguments.length) return this._randomizationFactor;
	  this._randomizationFactor = v;
	  this.backoff && this.backoff.setJitter(v);
	  return this;
	};
	
	/**
	 * Sets the maximum delay between reconnections.
	 *
	 * @param {Number} delay
	 * @return {Manager} self or value
	 * @api public
	 */
	
	Manager.prototype.reconnectionDelayMax = function (v) {
	  if (!arguments.length) return this._reconnectionDelayMax;
	  this._reconnectionDelayMax = v;
	  this.backoff && this.backoff.setMax(v);
	  return this;
	};
	
	/**
	 * Sets the connection timeout. `false` to disable
	 *
	 * @return {Manager} self or value
	 * @api public
	 */
	
	Manager.prototype.timeout = function (v) {
	  if (!arguments.length) return this._timeout;
	  this._timeout = v;
	  return this;
	};
	
	/**
	 * Starts trying to reconnect if reconnection is enabled and we have not
	 * started reconnecting yet
	 *
	 * @api private
	 */
	
	Manager.prototype.maybeReconnectOnOpen = function () {
	  // Only try to reconnect if it's the first time we're connecting
	  if (!this.reconnecting && this._reconnection && this.backoff.attempts === 0) {
	    // keeps reconnection from firing twice for the same reconnection loop
	    this.reconnect();
	  }
	};
	
	/**
	 * Sets the current transport `socket`.
	 *
	 * @param {Function} optional, callback
	 * @return {Manager} self
	 * @api public
	 */
	
	Manager.prototype.open =
	Manager.prototype.connect = function (fn, opts) {
	  debug('readyState %s', this.readyState);
	  if (~this.readyState.indexOf('open')) return this;
	
	  debug('opening %s', this.uri);
	  this.engine = eio(this.uri, this.opts);
	  var socket = this.engine;
	  var self = this;
	  this.readyState = 'opening';
	  this.skipReconnect = false;
	
	  // emit `open`
	  var openSub = on(socket, 'open', function () {
	    self.onopen();
	    fn && fn();
	  });
	
	  // emit `connect_error`
	  var errorSub = on(socket, 'error', function (data) {
	    debug('connect_error');
	    self.cleanup();
	    self.readyState = 'closed';
	    self.emitAll('connect_error', data);
	    if (fn) {
	      var err = new Error('Connection error');
	      err.data = data;
	      fn(err);
	    } else {
	      // Only do this if there is no fn to handle the error
	      self.maybeReconnectOnOpen();
	    }
	  });
	
	  // emit `connect_timeout`
	  if (false !== this._timeout) {
	    var timeout = this._timeout;
	    debug('connect attempt will timeout after %d', timeout);
	
	    // set timer
	    var timer = setTimeout(function () {
	      debug('connect attempt timed out after %d', timeout);
	      openSub.destroy();
	      socket.close();
	      socket.emit('error', 'timeout');
	      self.emitAll('connect_timeout', timeout);
	    }, timeout);
	
	    this.subs.push({
	      destroy: function () {
	        clearTimeout(timer);
	      }
	    });
	  }
	
	  this.subs.push(openSub);
	  this.subs.push(errorSub);
	
	  return this;
	};
	
	/**
	 * Called upon transport open.
	 *
	 * @api private
	 */
	
	Manager.prototype.onopen = function () {
	  debug('open');
	
	  // clear old subs
	  this.cleanup();
	
	  // mark as open
	  this.readyState = 'open';
	  this.emit('open');
	
	  // add new subs
	  var socket = this.engine;
	  this.subs.push(on(socket, 'data', bind(this, 'ondata')));
	  this.subs.push(on(socket, 'ping', bind(this, 'onping')));
	  this.subs.push(on(socket, 'pong', bind(this, 'onpong')));
	  this.subs.push(on(socket, 'error', bind(this, 'onerror')));
	  this.subs.push(on(socket, 'close', bind(this, 'onclose')));
	  this.subs.push(on(this.decoder, 'decoded', bind(this, 'ondecoded')));
	};
	
	/**
	 * Called upon a ping.
	 *
	 * @api private
	 */
	
	Manager.prototype.onping = function () {
	  this.lastPing = new Date();
	  this.emitAll('ping');
	};
	
	/**
	 * Called upon a packet.
	 *
	 * @api private
	 */
	
	Manager.prototype.onpong = function () {
	  this.emitAll('pong', new Date() - this.lastPing);
	};
	
	/**
	 * Called with data.
	 *
	 * @api private
	 */
	
	Manager.prototype.ondata = function (data) {
	  this.decoder.add(data);
	};
	
	/**
	 * Called when parser fully decodes a packet.
	 *
	 * @api private
	 */
	
	Manager.prototype.ondecoded = function (packet) {
	  this.emit('packet', packet);
	};
	
	/**
	 * Called upon socket error.
	 *
	 * @api private
	 */
	
	Manager.prototype.onerror = function (err) {
	  debug('error', err);
	  this.emitAll('error', err);
	};
	
	/**
	 * Creates a new socket for the given `nsp`.
	 *
	 * @return {Socket}
	 * @api public
	 */
	
	Manager.prototype.socket = function (nsp, opts) {
	  var socket = this.nsps[nsp];
	  if (!socket) {
	    socket = new Socket(this, nsp, opts);
	    this.nsps[nsp] = socket;
	    var self = this;
	    socket.on('connecting', onConnecting);
	    socket.on('connect', function () {
	      socket.id = self.engine.id;
	    });
	
	    if (this.autoConnect) {
	      // manually call here since connecting evnet is fired before listening
	      onConnecting();
	    }
	  }
	
	  function onConnecting () {
	    if (!~indexOf(self.connecting, socket)) {
	      self.connecting.push(socket);
	    }
	  }
	
	  return socket;
	};
	
	/**
	 * Called upon a socket close.
	 *
	 * @param {Socket} socket
	 */
	
	Manager.prototype.destroy = function (socket) {
	  var index = indexOf(this.connecting, socket);
	  if (~index) this.connecting.splice(index, 1);
	  if (this.connecting.length) return;
	
	  this.close();
	};
	
	/**
	 * Writes a packet.
	 *
	 * @param {Object} packet
	 * @api private
	 */
	
	Manager.prototype.packet = function (packet) {
	  debug('writing packet %j', packet);
	  var self = this;
	  if (packet.query && packet.type === 0) packet.nsp += '?' + packet.query;
	
	  if (!self.encoding) {
	    // encode, then write to engine with result
	    self.encoding = true;
	    this.encoder.encode(packet, function (encodedPackets) {
	      for (var i = 0; i < encodedPackets.length; i++) {
	        self.engine.write(encodedPackets[i], packet.options);
	      }
	      self.encoding = false;
	      self.processPacketQueue();
	    });
	  } else { // add packet to the queue
	    self.packetBuffer.push(packet);
	  }
	};
	
	/**
	 * If packet buffer is non-empty, begins encoding the
	 * next packet in line.
	 *
	 * @api private
	 */
	
	Manager.prototype.processPacketQueue = function () {
	  if (this.packetBuffer.length > 0 && !this.encoding) {
	    var pack = this.packetBuffer.shift();
	    this.packet(pack);
	  }
	};
	
	/**
	 * Clean up transport subscriptions and packet buffer.
	 *
	 * @api private
	 */
	
	Manager.prototype.cleanup = function () {
	  debug('cleanup');
	
	  var subsLength = this.subs.length;
	  for (var i = 0; i < subsLength; i++) {
	    var sub = this.subs.shift();
	    sub.destroy();
	  }
	
	  this.packetBuffer = [];
	  this.encoding = false;
	  this.lastPing = null;
	
	  this.decoder.destroy();
	};
	
	/**
	 * Close the current socket.
	 *
	 * @api private
	 */
	
	Manager.prototype.close =
	Manager.prototype.disconnect = function () {
	  debug('disconnect');
	  this.skipReconnect = true;
	  this.reconnecting = false;
	  if ('opening' === this.readyState) {
	    // `onclose` will not fire because
	    // an open event never happened
	    this.cleanup();
	  }
	  this.backoff.reset();
	  this.readyState = 'closed';
	  if (this.engine) this.engine.close();
	};
	
	/**
	 * Called upon engine close.
	 *
	 * @api private
	 */
	
	Manager.prototype.onclose = function (reason) {
	  debug('onclose');
	
	  this.cleanup();
	  this.backoff.reset();
	  this.readyState = 'closed';
	  this.emit('close', reason);
	
	  if (this._reconnection && !this.skipReconnect) {
	    this.reconnect();
	  }
	};
	
	/**
	 * Attempt a reconnection.
	 *
	 * @api private
	 */
	
	Manager.prototype.reconnect = function () {
	  if (this.reconnecting || this.skipReconnect) return this;
	
	  var self = this;
	
	  if (this.backoff.attempts >= this._reconnectionAttempts) {
	    debug('reconnect failed');
	    this.backoff.reset();
	    this.emitAll('reconnect_failed');
	    this.reconnecting = false;
	  } else {
	    var delay = this.backoff.duration();
	    debug('will wait %dms before reconnect attempt', delay);
	
	    this.reconnecting = true;
	    var timer = setTimeout(function () {
	      if (self.skipReconnect) return;
	
	      debug('attempting reconnect');
	      self.emitAll('reconnect_attempt', self.backoff.attempts);
	      self.emitAll('reconnecting', self.backoff.attempts);
	
	      // check again for the case socket closed in above events
	      if (self.skipReconnect) return;
	
	      self.open(function (err) {
	        if (err) {
	          debug('reconnect attempt error');
	          self.reconnecting = false;
	          self.reconnect();
	          self.emitAll('reconnect_error', err.data);
	        } else {
	          debug('reconnect success');
	          self.onreconnect();
	        }
	      });
	    }, delay);
	
	    this.subs.push({
	      destroy: function () {
	        clearTimeout(timer);
	      }
	    });
	  }
	};
	
	/**
	 * Called upon successful reconnect.
	 *
	 * @api private
	 */
	
	Manager.prototype.onreconnect = function () {
	  var attempt = this.backoff.attempts;
	  this.reconnecting = false;
	  this.backoff.reset();
	  this.updateSocketIds();
	  this.emitAll('reconnect', attempt);
	};


/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = __webpack_require__(127);


/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = __webpack_require__(128);
	
	/**
	 * Exports parser
	 *
	 * @api public
	 *
	 */
	module.exports.parser = __webpack_require__(135);


/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Module dependencies.
	 */
	
	var transports = __webpack_require__(129);
	var Emitter = __webpack_require__(121);
	var debug = __webpack_require__(114)('engine.io-client:socket');
	var index = __webpack_require__(149);
	var parser = __webpack_require__(135);
	var parseuri = __webpack_require__(113);
	var parsejson = __webpack_require__(150);
	var parseqs = __webpack_require__(143);
	
	/**
	 * Module exports.
	 */
	
	module.exports = Socket;
	
	/**
	 * Socket constructor.
	 *
	 * @param {String|Object} uri or options
	 * @param {Object} options
	 * @api public
	 */
	
	function Socket (uri, opts) {
	  if (!(this instanceof Socket)) return new Socket(uri, opts);
	
	  opts = opts || {};
	
	  if (uri && 'object' === typeof uri) {
	    opts = uri;
	    uri = null;
	  }
	
	  if (uri) {
	    uri = parseuri(uri);
	    opts.hostname = uri.host;
	    opts.secure = uri.protocol === 'https' || uri.protocol === 'wss';
	    opts.port = uri.port;
	    if (uri.query) opts.query = uri.query;
	  } else if (opts.host) {
	    opts.hostname = parseuri(opts.host).host;
	  }
	
	  this.secure = null != opts.secure ? opts.secure
	    : (global.location && 'https:' === location.protocol);
	
	  if (opts.hostname && !opts.port) {
	    // if no port is specified manually, use the protocol default
	    opts.port = this.secure ? '443' : '80';
	  }
	
	  this.agent = opts.agent || false;
	  this.hostname = opts.hostname ||
	    (global.location ? location.hostname : 'localhost');
	  this.port = opts.port || (global.location && location.port
	      ? location.port
	      : (this.secure ? 443 : 80));
	  this.query = opts.query || {};
	  if ('string' === typeof this.query) this.query = parseqs.decode(this.query);
	  this.upgrade = false !== opts.upgrade;
	  this.path = (opts.path || '/engine.io').replace(/\/$/, '') + '/';
	  this.forceJSONP = !!opts.forceJSONP;
	  this.jsonp = false !== opts.jsonp;
	  this.forceBase64 = !!opts.forceBase64;
	  this.enablesXDR = !!opts.enablesXDR;
	  this.timestampParam = opts.timestampParam || 't';
	  this.timestampRequests = opts.timestampRequests;
	  this.transports = opts.transports || ['polling', 'websocket'];
	  this.readyState = '';
	  this.writeBuffer = [];
	  this.prevBufferLen = 0;
	  this.policyPort = opts.policyPort || 843;
	  this.rememberUpgrade = opts.rememberUpgrade || false;
	  this.binaryType = null;
	  this.onlyBinaryUpgrades = opts.onlyBinaryUpgrades;
	  this.perMessageDeflate = false !== opts.perMessageDeflate ? (opts.perMessageDeflate || {}) : false;
	
	  if (true === this.perMessageDeflate) this.perMessageDeflate = {};
	  if (this.perMessageDeflate && null == this.perMessageDeflate.threshold) {
	    this.perMessageDeflate.threshold = 1024;
	  }
	
	  // SSL options for Node.js client
	  this.pfx = opts.pfx || null;
	  this.key = opts.key || null;
	  this.passphrase = opts.passphrase || null;
	  this.cert = opts.cert || null;
	  this.ca = opts.ca || null;
	  this.ciphers = opts.ciphers || null;
	  this.rejectUnauthorized = opts.rejectUnauthorized === undefined ? null : opts.rejectUnauthorized;
	
	  // other options for Node.js client
	  var freeGlobal = typeof global === 'object' && global;
	  if (freeGlobal.global === freeGlobal) {
	    if (opts.extraHeaders && Object.keys(opts.extraHeaders).length > 0) {
	      this.extraHeaders = opts.extraHeaders;
	    }
	  }
	
	  // set on handshake
	  this.id = null;
	  this.upgrades = null;
	  this.pingInterval = null;
	  this.pingTimeout = null;
	
	  // set on heartbeat
	  this.pingIntervalTimer = null;
	  this.pingTimeoutTimer = null;
	
	  this.open();
	}
	
	Socket.priorWebsocketSuccess = false;
	
	/**
	 * Mix in `Emitter`.
	 */
	
	Emitter(Socket.prototype);
	
	/**
	 * Protocol version.
	 *
	 * @api public
	 */
	
	Socket.protocol = parser.protocol; // this is an int
	
	/**
	 * Expose deps for legacy compatibility
	 * and standalone browser access.
	 */
	
	Socket.Socket = Socket;
	Socket.Transport = __webpack_require__(134);
	Socket.transports = __webpack_require__(129);
	Socket.parser = __webpack_require__(135);
	
	/**
	 * Creates transport of the given type.
	 *
	 * @param {String} transport name
	 * @return {Transport}
	 * @api private
	 */
	
	Socket.prototype.createTransport = function (name) {
	  debug('creating transport "%s"', name);
	  var query = clone(this.query);
	
	  // append engine.io protocol identifier
	  query.EIO = parser.protocol;
	
	  // transport name
	  query.transport = name;
	
	  // session id if we already have one
	  if (this.id) query.sid = this.id;
	
	  var transport = new transports[name]({
	    agent: this.agent,
	    hostname: this.hostname,
	    port: this.port,
	    secure: this.secure,
	    path: this.path,
	    query: query,
	    forceJSONP: this.forceJSONP,
	    jsonp: this.jsonp,
	    forceBase64: this.forceBase64,
	    enablesXDR: this.enablesXDR,
	    timestampRequests: this.timestampRequests,
	    timestampParam: this.timestampParam,
	    policyPort: this.policyPort,
	    socket: this,
	    pfx: this.pfx,
	    key: this.key,
	    passphrase: this.passphrase,
	    cert: this.cert,
	    ca: this.ca,
	    ciphers: this.ciphers,
	    rejectUnauthorized: this.rejectUnauthorized,
	    perMessageDeflate: this.perMessageDeflate,
	    extraHeaders: this.extraHeaders
	  });
	
	  return transport;
	};
	
	function clone (obj) {
	  var o = {};
	  for (var i in obj) {
	    if (obj.hasOwnProperty(i)) {
	      o[i] = obj[i];
	    }
	  }
	  return o;
	}
	
	/**
	 * Initializes transport to use and starts probe.
	 *
	 * @api private
	 */
	Socket.prototype.open = function () {
	  var transport;
	  if (this.rememberUpgrade && Socket.priorWebsocketSuccess && this.transports.indexOf('websocket') !== -1) {
	    transport = 'websocket';
	  } else if (0 === this.transports.length) {
	    // Emit error on next tick so it can be listened to
	    var self = this;
	    setTimeout(function () {
	      self.emit('error', 'No transports available');
	    }, 0);
	    return;
	  } else {
	    transport = this.transports[0];
	  }
	  this.readyState = 'opening';
	
	  // Retry with the next transport if the transport is disabled (jsonp: false)
	  try {
	    transport = this.createTransport(transport);
	  } catch (e) {
	    this.transports.shift();
	    this.open();
	    return;
	  }
	
	  transport.open();
	  this.setTransport(transport);
	};
	
	/**
	 * Sets the current transport. Disables the existing one (if any).
	 *
	 * @api private
	 */
	
	Socket.prototype.setTransport = function (transport) {
	  debug('setting transport %s', transport.name);
	  var self = this;
	
	  if (this.transport) {
	    debug('clearing existing transport %s', this.transport.name);
	    this.transport.removeAllListeners();
	  }
	
	  // set up transport
	  this.transport = transport;
	
	  // set up transport listeners
	  transport
	  .on('drain', function () {
	    self.onDrain();
	  })
	  .on('packet', function (packet) {
	    self.onPacket(packet);
	  })
	  .on('error', function (e) {
	    self.onError(e);
	  })
	  .on('close', function () {
	    self.onClose('transport close');
	  });
	};
	
	/**
	 * Probes a transport.
	 *
	 * @param {String} transport name
	 * @api private
	 */
	
	Socket.prototype.probe = function (name) {
	  debug('probing transport "%s"', name);
	  var transport = this.createTransport(name, { probe: 1 });
	  var failed = false;
	  var self = this;
	
	  Socket.priorWebsocketSuccess = false;
	
	  function onTransportOpen () {
	    if (self.onlyBinaryUpgrades) {
	      var upgradeLosesBinary = !this.supportsBinary && self.transport.supportsBinary;
	      failed = failed || upgradeLosesBinary;
	    }
	    if (failed) return;
	
	    debug('probe transport "%s" opened', name);
	    transport.send([{ type: 'ping', data: 'probe' }]);
	    transport.once('packet', function (msg) {
	      if (failed) return;
	      if ('pong' === msg.type && 'probe' === msg.data) {
	        debug('probe transport "%s" pong', name);
	        self.upgrading = true;
	        self.emit('upgrading', transport);
	        if (!transport) return;
	        Socket.priorWebsocketSuccess = 'websocket' === transport.name;
	
	        debug('pausing current transport "%s"', self.transport.name);
	        self.transport.pause(function () {
	          if (failed) return;
	          if ('closed' === self.readyState) return;
	          debug('changing transport and sending upgrade packet');
	
	          cleanup();
	
	          self.setTransport(transport);
	          transport.send([{ type: 'upgrade' }]);
	          self.emit('upgrade', transport);
	          transport = null;
	          self.upgrading = false;
	          self.flush();
	        });
	      } else {
	        debug('probe transport "%s" failed', name);
	        var err = new Error('probe error');
	        err.transport = transport.name;
	        self.emit('upgradeError', err);
	      }
	    });
	  }
	
	  function freezeTransport () {
	    if (failed) return;
	
	    // Any callback called by transport should be ignored since now
	    failed = true;
	
	    cleanup();
	
	    transport.close();
	    transport = null;
	  }
	
	  // Handle any error that happens while probing
	  function onerror (err) {
	    var error = new Error('probe error: ' + err);
	    error.transport = transport.name;
	
	    freezeTransport();
	
	    debug('probe transport "%s" failed because of error: %s', name, err);
	
	    self.emit('upgradeError', error);
	  }
	
	  function onTransportClose () {
	    onerror('transport closed');
	  }
	
	  // When the socket is closed while we're probing
	  function onclose () {
	    onerror('socket closed');
	  }
	
	  // When the socket is upgraded while we're probing
	  function onupgrade (to) {
	    if (transport && to.name !== transport.name) {
	      debug('"%s" works - aborting "%s"', to.name, transport.name);
	      freezeTransport();
	    }
	  }
	
	  // Remove all listeners on the transport and on self
	  function cleanup () {
	    transport.removeListener('open', onTransportOpen);
	    transport.removeListener('error', onerror);
	    transport.removeListener('close', onTransportClose);
	    self.removeListener('close', onclose);
	    self.removeListener('upgrading', onupgrade);
	  }
	
	  transport.once('open', onTransportOpen);
	  transport.once('error', onerror);
	  transport.once('close', onTransportClose);
	
	  this.once('close', onclose);
	  this.once('upgrading', onupgrade);
	
	  transport.open();
	};
	
	/**
	 * Called when connection is deemed open.
	 *
	 * @api public
	 */
	
	Socket.prototype.onOpen = function () {
	  debug('socket open');
	  this.readyState = 'open';
	  Socket.priorWebsocketSuccess = 'websocket' === this.transport.name;
	  this.emit('open');
	  this.flush();
	
	  // we check for `readyState` in case an `open`
	  // listener already closed the socket
	  if ('open' === this.readyState && this.upgrade && this.transport.pause) {
	    debug('starting upgrade probes');
	    for (var i = 0, l = this.upgrades.length; i < l; i++) {
	      this.probe(this.upgrades[i]);
	    }
	  }
	};
	
	/**
	 * Handles a packet.
	 *
	 * @api private
	 */
	
	Socket.prototype.onPacket = function (packet) {
	  if ('opening' === this.readyState || 'open' === this.readyState ||
	      'closing' === this.readyState) {
	    debug('socket receive: type "%s", data "%s"', packet.type, packet.data);
	
	    this.emit('packet', packet);
	
	    // Socket is live - any packet counts
	    this.emit('heartbeat');
	
	    switch (packet.type) {
	      case 'open':
	        this.onHandshake(parsejson(packet.data));
	        break;
	
	      case 'pong':
	        this.setPing();
	        this.emit('pong');
	        break;
	
	      case 'error':
	        var err = new Error('server error');
	        err.code = packet.data;
	        this.onError(err);
	        break;
	
	      case 'message':
	        this.emit('data', packet.data);
	        this.emit('message', packet.data);
	        break;
	    }
	  } else {
	    debug('packet received with socket readyState "%s"', this.readyState);
	  }
	};
	
	/**
	 * Called upon handshake completion.
	 *
	 * @param {Object} handshake obj
	 * @api private
	 */
	
	Socket.prototype.onHandshake = function (data) {
	  this.emit('handshake', data);
	  this.id = data.sid;
	  this.transport.query.sid = data.sid;
	  this.upgrades = this.filterUpgrades(data.upgrades);
	  this.pingInterval = data.pingInterval;
	  this.pingTimeout = data.pingTimeout;
	  this.onOpen();
	  // In case open handler closes socket
	  if ('closed' === this.readyState) return;
	  this.setPing();
	
	  // Prolong liveness of socket on heartbeat
	  this.removeListener('heartbeat', this.onHeartbeat);
	  this.on('heartbeat', this.onHeartbeat);
	};
	
	/**
	 * Resets ping timeout.
	 *
	 * @api private
	 */
	
	Socket.prototype.onHeartbeat = function (timeout) {
	  clearTimeout(this.pingTimeoutTimer);
	  var self = this;
	  self.pingTimeoutTimer = setTimeout(function () {
	    if ('closed' === self.readyState) return;
	    self.onClose('ping timeout');
	  }, timeout || (self.pingInterval + self.pingTimeout));
	};
	
	/**
	 * Pings server every `this.pingInterval` and expects response
	 * within `this.pingTimeout` or closes connection.
	 *
	 * @api private
	 */
	
	Socket.prototype.setPing = function () {
	  var self = this;
	  clearTimeout(self.pingIntervalTimer);
	  self.pingIntervalTimer = setTimeout(function () {
	    debug('writing ping packet - expecting pong within %sms', self.pingTimeout);
	    self.ping();
	    self.onHeartbeat(self.pingTimeout);
	  }, self.pingInterval);
	};
	
	/**
	* Sends a ping packet.
	*
	* @api private
	*/
	
	Socket.prototype.ping = function () {
	  var self = this;
	  this.sendPacket('ping', function () {
	    self.emit('ping');
	  });
	};
	
	/**
	 * Called on `drain` event
	 *
	 * @api private
	 */
	
	Socket.prototype.onDrain = function () {
	  this.writeBuffer.splice(0, this.prevBufferLen);
	
	  // setting prevBufferLen = 0 is very important
	  // for example, when upgrading, upgrade packet is sent over,
	  // and a nonzero prevBufferLen could cause problems on `drain`
	  this.prevBufferLen = 0;
	
	  if (0 === this.writeBuffer.length) {
	    this.emit('drain');
	  } else {
	    this.flush();
	  }
	};
	
	/**
	 * Flush write buffers.
	 *
	 * @api private
	 */
	
	Socket.prototype.flush = function () {
	  if ('closed' !== this.readyState && this.transport.writable &&
	    !this.upgrading && this.writeBuffer.length) {
	    debug('flushing %d packets in socket', this.writeBuffer.length);
	    this.transport.send(this.writeBuffer);
	    // keep track of current length of writeBuffer
	    // splice writeBuffer and callbackBuffer on `drain`
	    this.prevBufferLen = this.writeBuffer.length;
	    this.emit('flush');
	  }
	};
	
	/**
	 * Sends a message.
	 *
	 * @param {String} message.
	 * @param {Function} callback function.
	 * @param {Object} options.
	 * @return {Socket} for chaining.
	 * @api public
	 */
	
	Socket.prototype.write =
	Socket.prototype.send = function (msg, options, fn) {
	  this.sendPacket('message', msg, options, fn);
	  return this;
	};
	
	/**
	 * Sends a packet.
	 *
	 * @param {String} packet type.
	 * @param {String} data.
	 * @param {Object} options.
	 * @param {Function} callback function.
	 * @api private
	 */
	
	Socket.prototype.sendPacket = function (type, data, options, fn) {
	  if ('function' === typeof data) {
	    fn = data;
	    data = undefined;
	  }
	
	  if ('function' === typeof options) {
	    fn = options;
	    options = null;
	  }
	
	  if ('closing' === this.readyState || 'closed' === this.readyState) {
	    return;
	  }
	
	  options = options || {};
	  options.compress = false !== options.compress;
	
	  var packet = {
	    type: type,
	    data: data,
	    options: options
	  };
	  this.emit('packetCreate', packet);
	  this.writeBuffer.push(packet);
	  if (fn) this.once('flush', fn);
	  this.flush();
	};
	
	/**
	 * Closes the connection.
	 *
	 * @api private
	 */
	
	Socket.prototype.close = function () {
	  if ('opening' === this.readyState || 'open' === this.readyState) {
	    this.readyState = 'closing';
	
	    var self = this;
	
	    if (this.writeBuffer.length) {
	      this.once('drain', function () {
	        if (this.upgrading) {
	          waitForUpgrade();
	        } else {
	          close();
	        }
	      });
	    } else if (this.upgrading) {
	      waitForUpgrade();
	    } else {
	      close();
	    }
	  }
	
	  function close () {
	    self.onClose('forced close');
	    debug('socket closing - telling transport to close');
	    self.transport.close();
	  }
	
	  function cleanupAndClose () {
	    self.removeListener('upgrade', cleanupAndClose);
	    self.removeListener('upgradeError', cleanupAndClose);
	    close();
	  }
	
	  function waitForUpgrade () {
	    // wait for upgrade to finish since we can't send packets while pausing a transport
	    self.once('upgrade', cleanupAndClose);
	    self.once('upgradeError', cleanupAndClose);
	  }
	
	  return this;
	};
	
	/**
	 * Called upon transport error
	 *
	 * @api private
	 */
	
	Socket.prototype.onError = function (err) {
	  debug('socket error %j', err);
	  Socket.priorWebsocketSuccess = false;
	  this.emit('error', err);
	  this.onClose('transport error', err);
	};
	
	/**
	 * Called upon transport close.
	 *
	 * @api private
	 */
	
	Socket.prototype.onClose = function (reason, desc) {
	  if ('opening' === this.readyState || 'open' === this.readyState || 'closing' === this.readyState) {
	    debug('socket close with reason: "%s"', reason);
	    var self = this;
	
	    // clear timers
	    clearTimeout(this.pingIntervalTimer);
	    clearTimeout(this.pingTimeoutTimer);
	
	    // stop event from firing again for transport
	    this.transport.removeAllListeners('close');
	
	    // ensure transport won't stay open
	    this.transport.close();
	
	    // ignore further transport communication
	    this.transport.removeAllListeners();
	
	    // set ready state
	    this.readyState = 'closed';
	
	    // clear session id
	    this.id = null;
	
	    // emit close event
	    this.emit('close', reason, desc);
	
	    // clean buffers after, so users can still
	    // grab the buffers on `close` event
	    self.writeBuffer = [];
	    self.prevBufferLen = 0;
	  }
	};
	
	/**
	 * Filters upgrades, returning only those matching client transports.
	 *
	 * @param {Array} server upgrades
	 * @api private
	 *
	 */
	
	Socket.prototype.filterUpgrades = function (upgrades) {
	  var filteredUpgrades = [];
	  for (var i = 0, j = upgrades.length; i < j; i++) {
	    if (~index(this.transports, upgrades[i])) filteredUpgrades.push(upgrades[i]);
	  }
	  return filteredUpgrades;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Module dependencies
	 */
	
	var XMLHttpRequest = __webpack_require__(130);
	var XHR = __webpack_require__(132);
	var JSONP = __webpack_require__(146);
	var websocket = __webpack_require__(147);
	
	/**
	 * Export transports.
	 */
	
	exports.polling = polling;
	exports.websocket = websocket;
	
	/**
	 * Polling transport polymorphic constructor.
	 * Decides on xhr vs jsonp based on feature detection.
	 *
	 * @api private
	 */
	
	function polling (opts) {
	  var xhr;
	  var xd = false;
	  var xs = false;
	  var jsonp = false !== opts.jsonp;
	
	  if (global.location) {
	    var isSSL = 'https:' === location.protocol;
	    var port = location.port;
	
	    // some user agents have empty `location.port`
	    if (!port) {
	      port = isSSL ? 443 : 80;
	    }
	
	    xd = opts.hostname !== location.hostname || port !== opts.port;
	    xs = opts.secure !== isSSL;
	  }
	
	  opts.xdomain = xd;
	  opts.xscheme = xs;
	  xhr = new XMLHttpRequest(opts);
	
	  if ('open' in xhr && !opts.forceJSONP) {
	    return new XHR(opts);
	  } else {
	    if (!jsonp) throw new Error('JSONP disabled');
	    return new JSONP(opts);
	  }
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {// browser shim for xmlhttprequest module
	
	var hasCORS = __webpack_require__(131);
	
	module.exports = function (opts) {
	  var xdomain = opts.xdomain;
	
	  // scheme must be same when usign XDomainRequest
	  // http://blogs.msdn.com/b/ieinternals/archive/2010/05/13/xdomainrequest-restrictions-limitations-and-workarounds.aspx
	  var xscheme = opts.xscheme;
	
	  // XDomainRequest has a flow of not sending cookie, therefore it should be disabled as a default.
	  // https://github.com/Automattic/engine.io-client/pull/217
	  var enablesXDR = opts.enablesXDR;
	
	  // XMLHttpRequest can be disabled on IE
	  try {
	    if ('undefined' !== typeof XMLHttpRequest && (!xdomain || hasCORS)) {
	      return new XMLHttpRequest();
	    }
	  } catch (e) { }
	
	  // Use XDomainRequest for IE8 if enablesXDR is true
	  // because loading bar keeps flashing when using jsonp-polling
	  // https://github.com/yujiosaka/socke.io-ie8-loading-example
	  try {
	    if ('undefined' !== typeof XDomainRequest && !xscheme && enablesXDR) {
	      return new XDomainRequest();
	    }
	  } catch (e) { }
	
	  if (!xdomain) {
	    try {
	      return new global[['Active'].concat('Object').join('X')]('Microsoft.XMLHTTP');
	    } catch (e) { }
	  }
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 131 */
/***/ function(module, exports) {

	
	/**
	 * Module exports.
	 *
	 * Logic borrowed from Modernizr:
	 *
	 *   - https://github.com/Modernizr/Modernizr/blob/master/feature-detects/cors.js
	 */
	
	try {
	  module.exports = typeof XMLHttpRequest !== 'undefined' &&
	    'withCredentials' in new XMLHttpRequest();
	} catch (err) {
	  // if XMLHttp support is disabled in IE then it will throw
	  // when trying to create
	  module.exports = false;
	}


/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Module requirements.
	 */
	
	var XMLHttpRequest = __webpack_require__(130);
	var Polling = __webpack_require__(133);
	var Emitter = __webpack_require__(121);
	var inherit = __webpack_require__(144);
	var debug = __webpack_require__(114)('engine.io-client:polling-xhr');
	
	/**
	 * Module exports.
	 */
	
	module.exports = XHR;
	module.exports.Request = Request;
	
	/**
	 * Empty function
	 */
	
	function empty () {}
	
	/**
	 * XHR Polling constructor.
	 *
	 * @param {Object} opts
	 * @api public
	 */
	
	function XHR (opts) {
	  Polling.call(this, opts);
	
	  if (global.location) {
	    var isSSL = 'https:' === location.protocol;
	    var port = location.port;
	
	    // some user agents have empty `location.port`
	    if (!port) {
	      port = isSSL ? 443 : 80;
	    }
	
	    this.xd = opts.hostname !== global.location.hostname ||
	      port !== opts.port;
	    this.xs = opts.secure !== isSSL;
	  } else {
	    this.extraHeaders = opts.extraHeaders;
	  }
	}
	
	/**
	 * Inherits from Polling.
	 */
	
	inherit(XHR, Polling);
	
	/**
	 * XHR supports binary
	 */
	
	XHR.prototype.supportsBinary = true;
	
	/**
	 * Creates a request.
	 *
	 * @param {String} method
	 * @api private
	 */
	
	XHR.prototype.request = function (opts) {
	  opts = opts || {};
	  opts.uri = this.uri();
	  opts.xd = this.xd;
	  opts.xs = this.xs;
	  opts.agent = this.agent || false;
	  opts.supportsBinary = this.supportsBinary;
	  opts.enablesXDR = this.enablesXDR;
	
	  // SSL options for Node.js client
	  opts.pfx = this.pfx;
	  opts.key = this.key;
	  opts.passphrase = this.passphrase;
	  opts.cert = this.cert;
	  opts.ca = this.ca;
	  opts.ciphers = this.ciphers;
	  opts.rejectUnauthorized = this.rejectUnauthorized;
	
	  // other options for Node.js client
	  opts.extraHeaders = this.extraHeaders;
	
	  return new Request(opts);
	};
	
	/**
	 * Sends data.
	 *
	 * @param {String} data to send.
	 * @param {Function} called upon flush.
	 * @api private
	 */
	
	XHR.prototype.doWrite = function (data, fn) {
	  var isBinary = typeof data !== 'string' && data !== undefined;
	  var req = this.request({ method: 'POST', data: data, isBinary: isBinary });
	  var self = this;
	  req.on('success', fn);
	  req.on('error', function (err) {
	    self.onError('xhr post error', err);
	  });
	  this.sendXhr = req;
	};
	
	/**
	 * Starts a poll cycle.
	 *
	 * @api private
	 */
	
	XHR.prototype.doPoll = function () {
	  debug('xhr poll');
	  var req = this.request();
	  var self = this;
	  req.on('data', function (data) {
	    self.onData(data);
	  });
	  req.on('error', function (err) {
	    self.onError('xhr poll error', err);
	  });
	  this.pollXhr = req;
	};
	
	/**
	 * Request constructor
	 *
	 * @param {Object} options
	 * @api public
	 */
	
	function Request (opts) {
	  this.method = opts.method || 'GET';
	  this.uri = opts.uri;
	  this.xd = !!opts.xd;
	  this.xs = !!opts.xs;
	  this.async = false !== opts.async;
	  this.data = undefined !== opts.data ? opts.data : null;
	  this.agent = opts.agent;
	  this.isBinary = opts.isBinary;
	  this.supportsBinary = opts.supportsBinary;
	  this.enablesXDR = opts.enablesXDR;
	
	  // SSL options for Node.js client
	  this.pfx = opts.pfx;
	  this.key = opts.key;
	  this.passphrase = opts.passphrase;
	  this.cert = opts.cert;
	  this.ca = opts.ca;
	  this.ciphers = opts.ciphers;
	  this.rejectUnauthorized = opts.rejectUnauthorized;
	
	  // other options for Node.js client
	  this.extraHeaders = opts.extraHeaders;
	
	  this.create();
	}
	
	/**
	 * Mix in `Emitter`.
	 */
	
	Emitter(Request.prototype);
	
	/**
	 * Creates the XHR object and sends the request.
	 *
	 * @api private
	 */
	
	Request.prototype.create = function () {
	  var opts = { agent: this.agent, xdomain: this.xd, xscheme: this.xs, enablesXDR: this.enablesXDR };
	
	  // SSL options for Node.js client
	  opts.pfx = this.pfx;
	  opts.key = this.key;
	  opts.passphrase = this.passphrase;
	  opts.cert = this.cert;
	  opts.ca = this.ca;
	  opts.ciphers = this.ciphers;
	  opts.rejectUnauthorized = this.rejectUnauthorized;
	
	  var xhr = this.xhr = new XMLHttpRequest(opts);
	  var self = this;
	
	  try {
	    debug('xhr open %s: %s', this.method, this.uri);
	    xhr.open(this.method, this.uri, this.async);
	    try {
	      if (this.extraHeaders) {
	        xhr.setDisableHeaderCheck(true);
	        for (var i in this.extraHeaders) {
	          if (this.extraHeaders.hasOwnProperty(i)) {
	            xhr.setRequestHeader(i, this.extraHeaders[i]);
	          }
	        }
	      }
	    } catch (e) {}
	    if (this.supportsBinary) {
	      // This has to be done after open because Firefox is stupid
	      // http://stackoverflow.com/questions/13216903/get-binary-data-with-xmlhttprequest-in-a-firefox-extension
	      xhr.responseType = 'arraybuffer';
	    }
	
	    if ('POST' === this.method) {
	      try {
	        if (this.isBinary) {
	          xhr.setRequestHeader('Content-type', 'application/octet-stream');
	        } else {
	          xhr.setRequestHeader('Content-type', 'text/plain;charset=UTF-8');
	        }
	      } catch (e) {}
	    }
	
	    try {
	      xhr.setRequestHeader('Accept', '*/*');
	    } catch (e) {}
	
	    // ie6 check
	    if ('withCredentials' in xhr) {
	      xhr.withCredentials = true;
	    }
	
	    if (this.hasXDR()) {
	      xhr.onload = function () {
	        self.onLoad();
	      };
	      xhr.onerror = function () {
	        self.onError(xhr.responseText);
	      };
	    } else {
	      xhr.onreadystatechange = function () {
	        if (4 !== xhr.readyState) return;
	        if (200 === xhr.status || 1223 === xhr.status) {
	          self.onLoad();
	        } else {
	          // make sure the `error` event handler that's user-set
	          // does not throw in the same tick and gets caught here
	          setTimeout(function () {
	            self.onError(xhr.status);
	          }, 0);
	        }
	      };
	    }
	
	    debug('xhr data %s', this.data);
	    xhr.send(this.data);
	  } catch (e) {
	    // Need to defer since .create() is called directly fhrom the constructor
	    // and thus the 'error' event can only be only bound *after* this exception
	    // occurs.  Therefore, also, we cannot throw here at all.
	    setTimeout(function () {
	      self.onError(e);
	    }, 0);
	    return;
	  }
	
	  if (global.document) {
	    this.index = Request.requestsCount++;
	    Request.requests[this.index] = this;
	  }
	};
	
	/**
	 * Called upon successful response.
	 *
	 * @api private
	 */
	
	Request.prototype.onSuccess = function () {
	  this.emit('success');
	  this.cleanup();
	};
	
	/**
	 * Called if we have data.
	 *
	 * @api private
	 */
	
	Request.prototype.onData = function (data) {
	  this.emit('data', data);
	  this.onSuccess();
	};
	
	/**
	 * Called upon error.
	 *
	 * @api private
	 */
	
	Request.prototype.onError = function (err) {
	  this.emit('error', err);
	  this.cleanup(true);
	};
	
	/**
	 * Cleans up house.
	 *
	 * @api private
	 */
	
	Request.prototype.cleanup = function (fromError) {
	  if ('undefined' === typeof this.xhr || null === this.xhr) {
	    return;
	  }
	  // xmlhttprequest
	  if (this.hasXDR()) {
	    this.xhr.onload = this.xhr.onerror = empty;
	  } else {
	    this.xhr.onreadystatechange = empty;
	  }
	
	  if (fromError) {
	    try {
	      this.xhr.abort();
	    } catch (e) {}
	  }
	
	  if (global.document) {
	    delete Request.requests[this.index];
	  }
	
	  this.xhr = null;
	};
	
	/**
	 * Called upon load.
	 *
	 * @api private
	 */
	
	Request.prototype.onLoad = function () {
	  var data;
	  try {
	    var contentType;
	    try {
	      contentType = this.xhr.getResponseHeader('Content-Type').split(';')[0];
	    } catch (e) {}
	    if (contentType === 'application/octet-stream') {
	      data = this.xhr.response || this.xhr.responseText;
	    } else {
	      if (!this.supportsBinary) {
	        data = this.xhr.responseText;
	      } else {
	        try {
	          data = String.fromCharCode.apply(null, new Uint8Array(this.xhr.response));
	        } catch (e) {
	          var ui8Arr = new Uint8Array(this.xhr.response);
	          var dataArray = [];
	          for (var idx = 0, length = ui8Arr.length; idx < length; idx++) {
	            dataArray.push(ui8Arr[idx]);
	          }
	
	          data = String.fromCharCode.apply(null, dataArray);
	        }
	      }
	    }
	  } catch (e) {
	    this.onError(e);
	  }
	  if (null != data) {
	    this.onData(data);
	  }
	};
	
	/**
	 * Check if it has XDomainRequest.
	 *
	 * @api private
	 */
	
	Request.prototype.hasXDR = function () {
	  return 'undefined' !== typeof global.XDomainRequest && !this.xs && this.enablesXDR;
	};
	
	/**
	 * Aborts the request.
	 *
	 * @api public
	 */
	
	Request.prototype.abort = function () {
	  this.cleanup();
	};
	
	/**
	 * Aborts pending requests when unloading the window. This is needed to prevent
	 * memory leaks (e.g. when using IE) and to ensure that no spurious error is
	 * emitted.
	 */
	
	Request.requestsCount = 0;
	Request.requests = {};
	
	if (global.document) {
	  if (global.attachEvent) {
	    global.attachEvent('onunload', unloadHandler);
	  } else if (global.addEventListener) {
	    global.addEventListener('beforeunload', unloadHandler, false);
	  }
	}
	
	function unloadHandler () {
	  for (var i in Request.requests) {
	    if (Request.requests.hasOwnProperty(i)) {
	      Request.requests[i].abort();
	    }
	  }
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */
	
	var Transport = __webpack_require__(134);
	var parseqs = __webpack_require__(143);
	var parser = __webpack_require__(135);
	var inherit = __webpack_require__(144);
	var yeast = __webpack_require__(145);
	var debug = __webpack_require__(114)('engine.io-client:polling');
	
	/**
	 * Module exports.
	 */
	
	module.exports = Polling;
	
	/**
	 * Is XHR2 supported?
	 */
	
	var hasXHR2 = (function () {
	  var XMLHttpRequest = __webpack_require__(130);
	  var xhr = new XMLHttpRequest({ xdomain: false });
	  return null != xhr.responseType;
	})();
	
	/**
	 * Polling interface.
	 *
	 * @param {Object} opts
	 * @api private
	 */
	
	function Polling (opts) {
	  var forceBase64 = (opts && opts.forceBase64);
	  if (!hasXHR2 || forceBase64) {
	    this.supportsBinary = false;
	  }
	  Transport.call(this, opts);
	}
	
	/**
	 * Inherits from Transport.
	 */
	
	inherit(Polling, Transport);
	
	/**
	 * Transport name.
	 */
	
	Polling.prototype.name = 'polling';
	
	/**
	 * Opens the socket (triggers polling). We write a PING message to determine
	 * when the transport is open.
	 *
	 * @api private
	 */
	
	Polling.prototype.doOpen = function () {
	  this.poll();
	};
	
	/**
	 * Pauses polling.
	 *
	 * @param {Function} callback upon buffers are flushed and transport is paused
	 * @api private
	 */
	
	Polling.prototype.pause = function (onPause) {
	  var self = this;
	
	  this.readyState = 'pausing';
	
	  function pause () {
	    debug('paused');
	    self.readyState = 'paused';
	    onPause();
	  }
	
	  if (this.polling || !this.writable) {
	    var total = 0;
	
	    if (this.polling) {
	      debug('we are currently polling - waiting to pause');
	      total++;
	      this.once('pollComplete', function () {
	        debug('pre-pause polling complete');
	        --total || pause();
	      });
	    }
	
	    if (!this.writable) {
	      debug('we are currently writing - waiting to pause');
	      total++;
	      this.once('drain', function () {
	        debug('pre-pause writing complete');
	        --total || pause();
	      });
	    }
	  } else {
	    pause();
	  }
	};
	
	/**
	 * Starts polling cycle.
	 *
	 * @api public
	 */
	
	Polling.prototype.poll = function () {
	  debug('polling');
	  this.polling = true;
	  this.doPoll();
	  this.emit('poll');
	};
	
	/**
	 * Overloads onData to detect payloads.
	 *
	 * @api private
	 */
	
	Polling.prototype.onData = function (data) {
	  var self = this;
	  debug('polling got data %s', data);
	  var callback = function (packet, index, total) {
	    // if its the first message we consider the transport open
	    if ('opening' === self.readyState) {
	      self.onOpen();
	    }
	
	    // if its a close packet, we close the ongoing requests
	    if ('close' === packet.type) {
	      self.onClose();
	      return false;
	    }
	
	    // otherwise bypass onData and handle the message
	    self.onPacket(packet);
	  };
	
	  // decode payload
	  parser.decodePayload(data, this.socket.binaryType, callback);
	
	  // if an event did not trigger closing
	  if ('closed' !== this.readyState) {
	    // if we got data we're not polling
	    this.polling = false;
	    this.emit('pollComplete');
	
	    if ('open' === this.readyState) {
	      this.poll();
	    } else {
	      debug('ignoring poll - transport state "%s"', this.readyState);
	    }
	  }
	};
	
	/**
	 * For polling, send a close packet.
	 *
	 * @api private
	 */
	
	Polling.prototype.doClose = function () {
	  var self = this;
	
	  function close () {
	    debug('writing close packet');
	    self.write([{ type: 'close' }]);
	  }
	
	  if ('open' === this.readyState) {
	    debug('transport open - closing');
	    close();
	  } else {
	    // in case we're trying to close while
	    // handshaking is in progress (GH-164)
	    debug('transport not open - deferring close');
	    this.once('open', close);
	  }
	};
	
	/**
	 * Writes a packets payload.
	 *
	 * @param {Array} data packets
	 * @param {Function} drain callback
	 * @api private
	 */
	
	Polling.prototype.write = function (packets) {
	  var self = this;
	  this.writable = false;
	  var callbackfn = function () {
	    self.writable = true;
	    self.emit('drain');
	  };
	
	  parser.encodePayload(packets, this.supportsBinary, function (data) {
	    self.doWrite(data, callbackfn);
	  });
	};
	
	/**
	 * Generates uri for connection.
	 *
	 * @api private
	 */
	
	Polling.prototype.uri = function () {
	  var query = this.query || {};
	  var schema = this.secure ? 'https' : 'http';
	  var port = '';
	
	  // cache busting is forced
	  if (false !== this.timestampRequests) {
	    query[this.timestampParam] = yeast();
	  }
	
	  if (!this.supportsBinary && !query.sid) {
	    query.b64 = 1;
	  }
	
	  query = parseqs.encode(query);
	
	  // avoid port if default for schema
	  if (this.port && (('https' === schema && this.port !== 443) ||
	     ('http' === schema && this.port !== 80))) {
	    port = ':' + this.port;
	  }
	
	  // prepend ? to query
	  if (query.length) {
	    query = '?' + query;
	  }
	
	  var ipv6 = this.hostname.indexOf(':') !== -1;
	  return schema + '://' + (ipv6 ? '[' + this.hostname + ']' : this.hostname) + port + this.path + query;
	};


/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */
	
	var parser = __webpack_require__(135);
	var Emitter = __webpack_require__(121);
	
	/**
	 * Module exports.
	 */
	
	module.exports = Transport;
	
	/**
	 * Transport abstract constructor.
	 *
	 * @param {Object} options.
	 * @api private
	 */
	
	function Transport (opts) {
	  this.path = opts.path;
	  this.hostname = opts.hostname;
	  this.port = opts.port;
	  this.secure = opts.secure;
	  this.query = opts.query;
	  this.timestampParam = opts.timestampParam;
	  this.timestampRequests = opts.timestampRequests;
	  this.readyState = '';
	  this.agent = opts.agent || false;
	  this.socket = opts.socket;
	  this.enablesXDR = opts.enablesXDR;
	
	  // SSL options for Node.js client
	  this.pfx = opts.pfx;
	  this.key = opts.key;
	  this.passphrase = opts.passphrase;
	  this.cert = opts.cert;
	  this.ca = opts.ca;
	  this.ciphers = opts.ciphers;
	  this.rejectUnauthorized = opts.rejectUnauthorized;
	
	  // other options for Node.js client
	  this.extraHeaders = opts.extraHeaders;
	}
	
	/**
	 * Mix in `Emitter`.
	 */
	
	Emitter(Transport.prototype);
	
	/**
	 * Emits an error.
	 *
	 * @param {String} str
	 * @return {Transport} for chaining
	 * @api public
	 */
	
	Transport.prototype.onError = function (msg, desc) {
	  var err = new Error(msg);
	  err.type = 'TransportError';
	  err.description = desc;
	  this.emit('error', err);
	  return this;
	};
	
	/**
	 * Opens the transport.
	 *
	 * @api public
	 */
	
	Transport.prototype.open = function () {
	  if ('closed' === this.readyState || '' === this.readyState) {
	    this.readyState = 'opening';
	    this.doOpen();
	  }
	
	  return this;
	};
	
	/**
	 * Closes the transport.
	 *
	 * @api private
	 */
	
	Transport.prototype.close = function () {
	  if ('opening' === this.readyState || 'open' === this.readyState) {
	    this.doClose();
	    this.onClose();
	  }
	
	  return this;
	};
	
	/**
	 * Sends multiple packets.
	 *
	 * @param {Array} packets
	 * @api private
	 */
	
	Transport.prototype.send = function (packets) {
	  if ('open' === this.readyState) {
	    this.write(packets);
	  } else {
	    throw new Error('Transport not open');
	  }
	};
	
	/**
	 * Called upon open
	 *
	 * @api private
	 */
	
	Transport.prototype.onOpen = function () {
	  this.readyState = 'open';
	  this.writable = true;
	  this.emit('open');
	};
	
	/**
	 * Called with data.
	 *
	 * @param {String} data
	 * @api private
	 */
	
	Transport.prototype.onData = function (data) {
	  var packet = parser.decodePacket(data, this.socket.binaryType);
	  this.onPacket(packet);
	};
	
	/**
	 * Called with a decoded packet.
	 */
	
	Transport.prototype.onPacket = function (packet) {
	  this.emit('packet', packet);
	};
	
	/**
	 * Called upon close.
	 *
	 * @api private
	 */
	
	Transport.prototype.onClose = function () {
	  this.readyState = 'closed';
	  this.emit('close');
	};


/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Module dependencies.
	 */
	
	var keys = __webpack_require__(136);
	var hasBinary = __webpack_require__(137);
	var sliceBuffer = __webpack_require__(138);
	var after = __webpack_require__(139);
	var utf8 = __webpack_require__(140);
	
	var base64encoder;
	if (global && global.ArrayBuffer) {
	  base64encoder = __webpack_require__(141);
	}
	
	/**
	 * Check if we are running an android browser. That requires us to use
	 * ArrayBuffer with polling transports...
	 *
	 * http://ghinda.net/jpeg-blob-ajax-android/
	 */
	
	var isAndroid = typeof navigator !== 'undefined' && /Android/i.test(navigator.userAgent);
	
	/**
	 * Check if we are running in PhantomJS.
	 * Uploading a Blob with PhantomJS does not work correctly, as reported here:
	 * https://github.com/ariya/phantomjs/issues/11395
	 * @type boolean
	 */
	var isPhantomJS = typeof navigator !== 'undefined' && /PhantomJS/i.test(navigator.userAgent);
	
	/**
	 * When true, avoids using Blobs to encode payloads.
	 * @type boolean
	 */
	var dontSendBlobs = isAndroid || isPhantomJS;
	
	/**
	 * Current protocol version.
	 */
	
	exports.protocol = 3;
	
	/**
	 * Packet types.
	 */
	
	var packets = exports.packets = {
	    open:     0    // non-ws
	  , close:    1    // non-ws
	  , ping:     2
	  , pong:     3
	  , message:  4
	  , upgrade:  5
	  , noop:     6
	};
	
	var packetslist = keys(packets);
	
	/**
	 * Premade error packet.
	 */
	
	var err = { type: 'error', data: 'parser error' };
	
	/**
	 * Create a blob api even for blob builder when vendor prefixes exist
	 */
	
	var Blob = __webpack_require__(142);
	
	/**
	 * Encodes a packet.
	 *
	 *     <packet type id> [ <data> ]
	 *
	 * Example:
	 *
	 *     5hello world
	 *     3
	 *     4
	 *
	 * Binary is encoded in an identical principle
	 *
	 * @api private
	 */
	
	exports.encodePacket = function (packet, supportsBinary, utf8encode, callback) {
	  if ('function' == typeof supportsBinary) {
	    callback = supportsBinary;
	    supportsBinary = false;
	  }
	
	  if ('function' == typeof utf8encode) {
	    callback = utf8encode;
	    utf8encode = null;
	  }
	
	  var data = (packet.data === undefined)
	    ? undefined
	    : packet.data.buffer || packet.data;
	
	  if (global.ArrayBuffer && data instanceof ArrayBuffer) {
	    return encodeArrayBuffer(packet, supportsBinary, callback);
	  } else if (Blob && data instanceof global.Blob) {
	    return encodeBlob(packet, supportsBinary, callback);
	  }
	
	  // might be an object with { base64: true, data: dataAsBase64String }
	  if (data && data.base64) {
	    return encodeBase64Object(packet, callback);
	  }
	
	  // Sending data as a utf-8 string
	  var encoded = packets[packet.type];
	
	  // data fragment is optional
	  if (undefined !== packet.data) {
	    encoded += utf8encode ? utf8.encode(String(packet.data)) : String(packet.data);
	  }
	
	  return callback('' + encoded);
	
	};
	
	function encodeBase64Object(packet, callback) {
	  // packet data is an object { base64: true, data: dataAsBase64String }
	  var message = 'b' + exports.packets[packet.type] + packet.data.data;
	  return callback(message);
	}
	
	/**
	 * Encode packet helpers for binary types
	 */
	
	function encodeArrayBuffer(packet, supportsBinary, callback) {
	  if (!supportsBinary) {
	    return exports.encodeBase64Packet(packet, callback);
	  }
	
	  var data = packet.data;
	  var contentArray = new Uint8Array(data);
	  var resultBuffer = new Uint8Array(1 + data.byteLength);
	
	  resultBuffer[0] = packets[packet.type];
	  for (var i = 0; i < contentArray.length; i++) {
	    resultBuffer[i+1] = contentArray[i];
	  }
	
	  return callback(resultBuffer.buffer);
	}
	
	function encodeBlobAsArrayBuffer(packet, supportsBinary, callback) {
	  if (!supportsBinary) {
	    return exports.encodeBase64Packet(packet, callback);
	  }
	
	  var fr = new FileReader();
	  fr.onload = function() {
	    packet.data = fr.result;
	    exports.encodePacket(packet, supportsBinary, true, callback);
	  };
	  return fr.readAsArrayBuffer(packet.data);
	}
	
	function encodeBlob(packet, supportsBinary, callback) {
	  if (!supportsBinary) {
	    return exports.encodeBase64Packet(packet, callback);
	  }
	
	  if (dontSendBlobs) {
	    return encodeBlobAsArrayBuffer(packet, supportsBinary, callback);
	  }
	
	  var length = new Uint8Array(1);
	  length[0] = packets[packet.type];
	  var blob = new Blob([length.buffer, packet.data]);
	
	  return callback(blob);
	}
	
	/**
	 * Encodes a packet with binary data in a base64 string
	 *
	 * @param {Object} packet, has `type` and `data`
	 * @return {String} base64 encoded message
	 */
	
	exports.encodeBase64Packet = function(packet, callback) {
	  var message = 'b' + exports.packets[packet.type];
	  if (Blob && packet.data instanceof global.Blob) {
	    var fr = new FileReader();
	    fr.onload = function() {
	      var b64 = fr.result.split(',')[1];
	      callback(message + b64);
	    };
	    return fr.readAsDataURL(packet.data);
	  }
	
	  var b64data;
	  try {
	    b64data = String.fromCharCode.apply(null, new Uint8Array(packet.data));
	  } catch (e) {
	    // iPhone Safari doesn't let you apply with typed arrays
	    var typed = new Uint8Array(packet.data);
	    var basic = new Array(typed.length);
	    for (var i = 0; i < typed.length; i++) {
	      basic[i] = typed[i];
	    }
	    b64data = String.fromCharCode.apply(null, basic);
	  }
	  message += global.btoa(b64data);
	  return callback(message);
	};
	
	/**
	 * Decodes a packet. Changes format to Blob if requested.
	 *
	 * @return {Object} with `type` and `data` (if any)
	 * @api private
	 */
	
	exports.decodePacket = function (data, binaryType, utf8decode) {
	  if (data === undefined) {
	    return err;
	  }
	  // String data
	  if (typeof data == 'string') {
	    if (data.charAt(0) == 'b') {
	      return exports.decodeBase64Packet(data.substr(1), binaryType);
	    }
	
	    if (utf8decode) {
	      data = tryDecode(data);
	      if (data === false) {
	        return err;
	      }
	    }
	    var type = data.charAt(0);
	
	    if (Number(type) != type || !packetslist[type]) {
	      return err;
	    }
	
	    if (data.length > 1) {
	      return { type: packetslist[type], data: data.substring(1) };
	    } else {
	      return { type: packetslist[type] };
	    }
	  }
	
	  var asArray = new Uint8Array(data);
	  var type = asArray[0];
	  var rest = sliceBuffer(data, 1);
	  if (Blob && binaryType === 'blob') {
	    rest = new Blob([rest]);
	  }
	  return { type: packetslist[type], data: rest };
	};
	
	function tryDecode(data) {
	  try {
	    data = utf8.decode(data);
	  } catch (e) {
	    return false;
	  }
	  return data;
	}
	
	/**
	 * Decodes a packet encoded in a base64 string
	 *
	 * @param {String} base64 encoded message
	 * @return {Object} with `type` and `data` (if any)
	 */
	
	exports.decodeBase64Packet = function(msg, binaryType) {
	  var type = packetslist[msg.charAt(0)];
	  if (!base64encoder) {
	    return { type: type, data: { base64: true, data: msg.substr(1) } };
	  }
	
	  var data = base64encoder.decode(msg.substr(1));
	
	  if (binaryType === 'blob' && Blob) {
	    data = new Blob([data]);
	  }
	
	  return { type: type, data: data };
	};
	
	/**
	 * Encodes multiple messages (payload).
	 *
	 *     <length>:data
	 *
	 * Example:
	 *
	 *     11:hello world2:hi
	 *
	 * If any contents are binary, they will be encoded as base64 strings. Base64
	 * encoded strings are marked with a b before the length specifier
	 *
	 * @param {Array} packets
	 * @api private
	 */
	
	exports.encodePayload = function (packets, supportsBinary, callback) {
	  if (typeof supportsBinary == 'function') {
	    callback = supportsBinary;
	    supportsBinary = null;
	  }
	
	  var isBinary = hasBinary(packets);
	
	  if (supportsBinary && isBinary) {
	    if (Blob && !dontSendBlobs) {
	      return exports.encodePayloadAsBlob(packets, callback);
	    }
	
	    return exports.encodePayloadAsArrayBuffer(packets, callback);
	  }
	
	  if (!packets.length) {
	    return callback('0:');
	  }
	
	  function setLengthHeader(message) {
	    return message.length + ':' + message;
	  }
	
	  function encodeOne(packet, doneCallback) {
	    exports.encodePacket(packet, !isBinary ? false : supportsBinary, true, function(message) {
	      doneCallback(null, setLengthHeader(message));
	    });
	  }
	
	  map(packets, encodeOne, function(err, results) {
	    return callback(results.join(''));
	  });
	};
	
	/**
	 * Async array map using after
	 */
	
	function map(ary, each, done) {
	  var result = new Array(ary.length);
	  var next = after(ary.length, done);
	
	  var eachWithIndex = function(i, el, cb) {
	    each(el, function(error, msg) {
	      result[i] = msg;
	      cb(error, result);
	    });
	  };
	
	  for (var i = 0; i < ary.length; i++) {
	    eachWithIndex(i, ary[i], next);
	  }
	}
	
	/*
	 * Decodes data when a payload is maybe expected. Possible binary contents are
	 * decoded from their base64 representation
	 *
	 * @param {String} data, callback method
	 * @api public
	 */
	
	exports.decodePayload = function (data, binaryType, callback) {
	  if (typeof data != 'string') {
	    return exports.decodePayloadAsBinary(data, binaryType, callback);
	  }
	
	  if (typeof binaryType === 'function') {
	    callback = binaryType;
	    binaryType = null;
	  }
	
	  var packet;
	  if (data == '') {
	    // parser error - ignoring payload
	    return callback(err, 0, 1);
	  }
	
	  var length = ''
	    , n, msg;
	
	  for (var i = 0, l = data.length; i < l; i++) {
	    var chr = data.charAt(i);
	
	    if (':' != chr) {
	      length += chr;
	    } else {
	      if ('' == length || (length != (n = Number(length)))) {
	        // parser error - ignoring payload
	        return callback(err, 0, 1);
	      }
	
	      msg = data.substr(i + 1, n);
	
	      if (length != msg.length) {
	        // parser error - ignoring payload
	        return callback(err, 0, 1);
	      }
	
	      if (msg.length) {
	        packet = exports.decodePacket(msg, binaryType, true);
	
	        if (err.type == packet.type && err.data == packet.data) {
	          // parser error in individual packet - ignoring payload
	          return callback(err, 0, 1);
	        }
	
	        var ret = callback(packet, i + n, l);
	        if (false === ret) return;
	      }
	
	      // advance cursor
	      i += n;
	      length = '';
	    }
	  }
	
	  if (length != '') {
	    // parser error - ignoring payload
	    return callback(err, 0, 1);
	  }
	
	};
	
	/**
	 * Encodes multiple messages (payload) as binary.
	 *
	 * <1 = binary, 0 = string><number from 0-9><number from 0-9>[...]<number
	 * 255><data>
	 *
	 * Example:
	 * 1 3 255 1 2 3, if the binary contents are interpreted as 8 bit integers
	 *
	 * @param {Array} packets
	 * @return {ArrayBuffer} encoded payload
	 * @api private
	 */
	
	exports.encodePayloadAsArrayBuffer = function(packets, callback) {
	  if (!packets.length) {
	    return callback(new ArrayBuffer(0));
	  }
	
	  function encodeOne(packet, doneCallback) {
	    exports.encodePacket(packet, true, true, function(data) {
	      return doneCallback(null, data);
	    });
	  }
	
	  map(packets, encodeOne, function(err, encodedPackets) {
	    var totalLength = encodedPackets.reduce(function(acc, p) {
	      var len;
	      if (typeof p === 'string'){
	        len = p.length;
	      } else {
	        len = p.byteLength;
	      }
	      return acc + len.toString().length + len + 2; // string/binary identifier + separator = 2
	    }, 0);
	
	    var resultArray = new Uint8Array(totalLength);
	
	    var bufferIndex = 0;
	    encodedPackets.forEach(function(p) {
	      var isString = typeof p === 'string';
	      var ab = p;
	      if (isString) {
	        var view = new Uint8Array(p.length);
	        for (var i = 0; i < p.length; i++) {
	          view[i] = p.charCodeAt(i);
	        }
	        ab = view.buffer;
	      }
	
	      if (isString) { // not true binary
	        resultArray[bufferIndex++] = 0;
	      } else { // true binary
	        resultArray[bufferIndex++] = 1;
	      }
	
	      var lenStr = ab.byteLength.toString();
	      for (var i = 0; i < lenStr.length; i++) {
	        resultArray[bufferIndex++] = parseInt(lenStr[i]);
	      }
	      resultArray[bufferIndex++] = 255;
	
	      var view = new Uint8Array(ab);
	      for (var i = 0; i < view.length; i++) {
	        resultArray[bufferIndex++] = view[i];
	      }
	    });
	
	    return callback(resultArray.buffer);
	  });
	};
	
	/**
	 * Encode as Blob
	 */
	
	exports.encodePayloadAsBlob = function(packets, callback) {
	  function encodeOne(packet, doneCallback) {
	    exports.encodePacket(packet, true, true, function(encoded) {
	      var binaryIdentifier = new Uint8Array(1);
	      binaryIdentifier[0] = 1;
	      if (typeof encoded === 'string') {
	        var view = new Uint8Array(encoded.length);
	        for (var i = 0; i < encoded.length; i++) {
	          view[i] = encoded.charCodeAt(i);
	        }
	        encoded = view.buffer;
	        binaryIdentifier[0] = 0;
	      }
	
	      var len = (encoded instanceof ArrayBuffer)
	        ? encoded.byteLength
	        : encoded.size;
	
	      var lenStr = len.toString();
	      var lengthAry = new Uint8Array(lenStr.length + 1);
	      for (var i = 0; i < lenStr.length; i++) {
	        lengthAry[i] = parseInt(lenStr[i]);
	      }
	      lengthAry[lenStr.length] = 255;
	
	      if (Blob) {
	        var blob = new Blob([binaryIdentifier.buffer, lengthAry.buffer, encoded]);
	        doneCallback(null, blob);
	      }
	    });
	  }
	
	  map(packets, encodeOne, function(err, results) {
	    return callback(new Blob(results));
	  });
	};
	
	/*
	 * Decodes data when a payload is maybe expected. Strings are decoded by
	 * interpreting each byte as a key code for entries marked to start with 0. See
	 * description of encodePayloadAsBinary
	 *
	 * @param {ArrayBuffer} data, callback method
	 * @api public
	 */
	
	exports.decodePayloadAsBinary = function (data, binaryType, callback) {
	  if (typeof binaryType === 'function') {
	    callback = binaryType;
	    binaryType = null;
	  }
	
	  var bufferTail = data;
	  var buffers = [];
	
	  var numberTooLong = false;
	  while (bufferTail.byteLength > 0) {
	    var tailArray = new Uint8Array(bufferTail);
	    var isString = tailArray[0] === 0;
	    var msgLength = '';
	
	    for (var i = 1; ; i++) {
	      if (tailArray[i] == 255) break;
	
	      if (msgLength.length > 310) {
	        numberTooLong = true;
	        break;
	      }
	
	      msgLength += tailArray[i];
	    }
	
	    if(numberTooLong) return callback(err, 0, 1);
	
	    bufferTail = sliceBuffer(bufferTail, 2 + msgLength.length);
	    msgLength = parseInt(msgLength);
	
	    var msg = sliceBuffer(bufferTail, 0, msgLength);
	    if (isString) {
	      try {
	        msg = String.fromCharCode.apply(null, new Uint8Array(msg));
	      } catch (e) {
	        // iPhone Safari doesn't let you apply to typed arrays
	        var typed = new Uint8Array(msg);
	        msg = '';
	        for (var i = 0; i < typed.length; i++) {
	          msg += String.fromCharCode(typed[i]);
	        }
	      }
	    }
	
	    buffers.push(msg);
	    bufferTail = sliceBuffer(bufferTail, msgLength);
	  }
	
	  var total = buffers.length;
	  buffers.forEach(function(buffer, i) {
	    callback(exports.decodePacket(buffer, binaryType, true), i, total);
	  });
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 136 */
/***/ function(module, exports) {

	
	/**
	 * Gets the keys for an object.
	 *
	 * @return {Array} keys
	 * @api private
	 */
	
	module.exports = Object.keys || function keys (obj){
	  var arr = [];
	  var has = Object.prototype.hasOwnProperty;
	
	  for (var i in obj) {
	    if (has.call(obj, i)) {
	      arr.push(i);
	    }
	  }
	  return arr;
	};


/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {
	/*
	 * Module requirements.
	 */
	
	var isArray = __webpack_require__(123);
	
	/**
	 * Module exports.
	 */
	
	module.exports = hasBinary;
	
	/**
	 * Checks for binary data.
	 *
	 * Right now only Buffer and ArrayBuffer are supported..
	 *
	 * @param {Object} anything
	 * @api public
	 */
	
	function hasBinary(data) {
	
	  function _hasBinary(obj) {
	    if (!obj) return false;
	
	    if ( (global.Buffer && global.Buffer.isBuffer(obj)) ||
	         (global.ArrayBuffer && obj instanceof ArrayBuffer) ||
	         (global.Blob && obj instanceof Blob) ||
	         (global.File && obj instanceof File)
	        ) {
	      return true;
	    }
	
	    if (isArray(obj)) {
	      for (var i = 0; i < obj.length; i++) {
	          if (_hasBinary(obj[i])) {
	              return true;
	          }
	      }
	    } else if (obj && 'object' == typeof obj) {
	      if (obj.toJSON) {
	        obj = obj.toJSON();
	      }
	
	      for (var key in obj) {
	        if (Object.prototype.hasOwnProperty.call(obj, key) && _hasBinary(obj[key])) {
	          return true;
	        }
	      }
	    }
	
	    return false;
	  }
	
	  return _hasBinary(data);
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 138 */
/***/ function(module, exports) {

	/**
	 * An abstraction for slicing an arraybuffer even when
	 * ArrayBuffer.prototype.slice is not supported
	 *
	 * @api public
	 */
	
	module.exports = function(arraybuffer, start, end) {
	  var bytes = arraybuffer.byteLength;
	  start = start || 0;
	  end = end || bytes;
	
	  if (arraybuffer.slice) { return arraybuffer.slice(start, end); }
	
	  if (start < 0) { start += bytes; }
	  if (end < 0) { end += bytes; }
	  if (end > bytes) { end = bytes; }
	
	  if (start >= bytes || start >= end || bytes === 0) {
	    return new ArrayBuffer(0);
	  }
	
	  var abv = new Uint8Array(arraybuffer);
	  var result = new Uint8Array(end - start);
	  for (var i = start, ii = 0; i < end; i++, ii++) {
	    result[ii] = abv[i];
	  }
	  return result.buffer;
	};


/***/ },
/* 139 */
/***/ function(module, exports) {

	module.exports = after
	
	function after(count, callback, err_cb) {
	    var bail = false
	    err_cb = err_cb || noop
	    proxy.count = count
	
	    return (count === 0) ? callback() : proxy
	
	    function proxy(err, result) {
	        if (proxy.count <= 0) {
	            throw new Error('after called too many times')
	        }
	        --proxy.count
	
	        // after first error, rest are passed to err_cb
	        if (err) {
	            bail = true
	            callback(err)
	            // future error callbacks will go to error handler
	            callback = err_cb
	        } else if (proxy.count === 0 && !bail) {
	            callback(null, result)
	        }
	    }
	}
	
	function noop() {}


/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module, global) {/*! https://mths.be/wtf8 v1.0.0 by @mathias */
	;(function(root) {
	
		// Detect free variables `exports`
		var freeExports = typeof exports == 'object' && exports;
	
		// Detect free variable `module`
		var freeModule = typeof module == 'object' && module &&
			module.exports == freeExports && module;
	
		// Detect free variable `global`, from Node.js or Browserified code,
		// and use it as `root`
		var freeGlobal = typeof global == 'object' && global;
		if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
			root = freeGlobal;
		}
	
		/*--------------------------------------------------------------------------*/
	
		var stringFromCharCode = String.fromCharCode;
	
		// Taken from https://mths.be/punycode
		function ucs2decode(string) {
			var output = [];
			var counter = 0;
			var length = string.length;
			var value;
			var extra;
			while (counter < length) {
				value = string.charCodeAt(counter++);
				if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
					// high surrogate, and there is a next character
					extra = string.charCodeAt(counter++);
					if ((extra & 0xFC00) == 0xDC00) { // low surrogate
						output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
					} else {
						// unmatched surrogate; only append this code unit, in case the next
						// code unit is the high surrogate of a surrogate pair
						output.push(value);
						counter--;
					}
				} else {
					output.push(value);
				}
			}
			return output;
		}
	
		// Taken from https://mths.be/punycode
		function ucs2encode(array) {
			var length = array.length;
			var index = -1;
			var value;
			var output = '';
			while (++index < length) {
				value = array[index];
				if (value > 0xFFFF) {
					value -= 0x10000;
					output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
					value = 0xDC00 | value & 0x3FF;
				}
				output += stringFromCharCode(value);
			}
			return output;
		}
	
		/*--------------------------------------------------------------------------*/
	
		function createByte(codePoint, shift) {
			return stringFromCharCode(((codePoint >> shift) & 0x3F) | 0x80);
		}
	
		function encodeCodePoint(codePoint) {
			if ((codePoint & 0xFFFFFF80) == 0) { // 1-byte sequence
				return stringFromCharCode(codePoint);
			}
			var symbol = '';
			if ((codePoint & 0xFFFFF800) == 0) { // 2-byte sequence
				symbol = stringFromCharCode(((codePoint >> 6) & 0x1F) | 0xC0);
			}
			else if ((codePoint & 0xFFFF0000) == 0) { // 3-byte sequence
				symbol = stringFromCharCode(((codePoint >> 12) & 0x0F) | 0xE0);
				symbol += createByte(codePoint, 6);
			}
			else if ((codePoint & 0xFFE00000) == 0) { // 4-byte sequence
				symbol = stringFromCharCode(((codePoint >> 18) & 0x07) | 0xF0);
				symbol += createByte(codePoint, 12);
				symbol += createByte(codePoint, 6);
			}
			symbol += stringFromCharCode((codePoint & 0x3F) | 0x80);
			return symbol;
		}
	
		function wtf8encode(string) {
			var codePoints = ucs2decode(string);
			var length = codePoints.length;
			var index = -1;
			var codePoint;
			var byteString = '';
			while (++index < length) {
				codePoint = codePoints[index];
				byteString += encodeCodePoint(codePoint);
			}
			return byteString;
		}
	
		/*--------------------------------------------------------------------------*/
	
		function readContinuationByte() {
			if (byteIndex >= byteCount) {
				throw Error('Invalid byte index');
			}
	
			var continuationByte = byteArray[byteIndex] & 0xFF;
			byteIndex++;
	
			if ((continuationByte & 0xC0) == 0x80) {
				return continuationByte & 0x3F;
			}
	
			// If we end up here, it’s not a continuation byte.
			throw Error('Invalid continuation byte');
		}
	
		function decodeSymbol() {
			var byte1;
			var byte2;
			var byte3;
			var byte4;
			var codePoint;
	
			if (byteIndex > byteCount) {
				throw Error('Invalid byte index');
			}
	
			if (byteIndex == byteCount) {
				return false;
			}
	
			// Read the first byte.
			byte1 = byteArray[byteIndex] & 0xFF;
			byteIndex++;
	
			// 1-byte sequence (no continuation bytes)
			if ((byte1 & 0x80) == 0) {
				return byte1;
			}
	
			// 2-byte sequence
			if ((byte1 & 0xE0) == 0xC0) {
				var byte2 = readContinuationByte();
				codePoint = ((byte1 & 0x1F) << 6) | byte2;
				if (codePoint >= 0x80) {
					return codePoint;
				} else {
					throw Error('Invalid continuation byte');
				}
			}
	
			// 3-byte sequence (may include unpaired surrogates)
			if ((byte1 & 0xF0) == 0xE0) {
				byte2 = readContinuationByte();
				byte3 = readContinuationByte();
				codePoint = ((byte1 & 0x0F) << 12) | (byte2 << 6) | byte3;
				if (codePoint >= 0x0800) {
					return codePoint;
				} else {
					throw Error('Invalid continuation byte');
				}
			}
	
			// 4-byte sequence
			if ((byte1 & 0xF8) == 0xF0) {
				byte2 = readContinuationByte();
				byte3 = readContinuationByte();
				byte4 = readContinuationByte();
				codePoint = ((byte1 & 0x0F) << 0x12) | (byte2 << 0x0C) |
					(byte3 << 0x06) | byte4;
				if (codePoint >= 0x010000 && codePoint <= 0x10FFFF) {
					return codePoint;
				}
			}
	
			throw Error('Invalid WTF-8 detected');
		}
	
		var byteArray;
		var byteCount;
		var byteIndex;
		function wtf8decode(byteString) {
			byteArray = ucs2decode(byteString);
			byteCount = byteArray.length;
			byteIndex = 0;
			var codePoints = [];
			var tmp;
			while ((tmp = decodeSymbol()) !== false) {
				codePoints.push(tmp);
			}
			return ucs2encode(codePoints);
		}
	
		/*--------------------------------------------------------------------------*/
	
		var wtf8 = {
			'version': '1.0.0',
			'encode': wtf8encode,
			'decode': wtf8decode
		};
	
		// Some AMD build optimizers, like r.js, check for specific condition patterns
		// like the following:
		if (
			true
		) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
				return wtf8;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		}	else if (freeExports && !freeExports.nodeType) {
			if (freeModule) { // in Node.js or RingoJS v0.8.0+
				freeModule.exports = wtf8;
			} else { // in Narwhal or RingoJS v0.7.0-
				var object = {};
				var hasOwnProperty = object.hasOwnProperty;
				for (var key in wtf8) {
					hasOwnProperty.call(wtf8, key) && (freeExports[key] = wtf8[key]);
				}
			}
		} else { // in Rhino or a web browser
			root.wtf8 = wtf8;
		}
	
	}(this));
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(119)(module), (function() { return this; }())))

/***/ },
/* 141 */
/***/ function(module, exports) {

	/*
	 * base64-arraybuffer
	 * https://github.com/niklasvh/base64-arraybuffer
	 *
	 * Copyright (c) 2012 Niklas von Hertzen
	 * Licensed under the MIT license.
	 */
	(function(){
	  "use strict";
	
	  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
	
	  // Use a lookup table to find the index.
	  var lookup = new Uint8Array(256);
	  for (var i = 0; i < chars.length; i++) {
	    lookup[chars.charCodeAt(i)] = i;
	  }
	
	  exports.encode = function(arraybuffer) {
	    var bytes = new Uint8Array(arraybuffer),
	    i, len = bytes.length, base64 = "";
	
	    for (i = 0; i < len; i+=3) {
	      base64 += chars[bytes[i] >> 2];
	      base64 += chars[((bytes[i] & 3) << 4) | (bytes[i + 1] >> 4)];
	      base64 += chars[((bytes[i + 1] & 15) << 2) | (bytes[i + 2] >> 6)];
	      base64 += chars[bytes[i + 2] & 63];
	    }
	
	    if ((len % 3) === 2) {
	      base64 = base64.substring(0, base64.length - 1) + "=";
	    } else if (len % 3 === 1) {
	      base64 = base64.substring(0, base64.length - 2) + "==";
	    }
	
	    return base64;
	  };
	
	  exports.decode =  function(base64) {
	    var bufferLength = base64.length * 0.75,
	    len = base64.length, i, p = 0,
	    encoded1, encoded2, encoded3, encoded4;
	
	    if (base64[base64.length - 1] === "=") {
	      bufferLength--;
	      if (base64[base64.length - 2] === "=") {
	        bufferLength--;
	      }
	    }
	
	    var arraybuffer = new ArrayBuffer(bufferLength),
	    bytes = new Uint8Array(arraybuffer);
	
	    for (i = 0; i < len; i+=4) {
	      encoded1 = lookup[base64.charCodeAt(i)];
	      encoded2 = lookup[base64.charCodeAt(i+1)];
	      encoded3 = lookup[base64.charCodeAt(i+2)];
	      encoded4 = lookup[base64.charCodeAt(i+3)];
	
	      bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
	      bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
	      bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
	    }
	
	    return arraybuffer;
	  };
	})();


/***/ },
/* 142 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Create a blob builder even when vendor prefixes exist
	 */
	
	var BlobBuilder = global.BlobBuilder
	  || global.WebKitBlobBuilder
	  || global.MSBlobBuilder
	  || global.MozBlobBuilder;
	
	/**
	 * Check if Blob constructor is supported
	 */
	
	var blobSupported = (function() {
	  try {
	    var a = new Blob(['hi']);
	    return a.size === 2;
	  } catch(e) {
	    return false;
	  }
	})();
	
	/**
	 * Check if Blob constructor supports ArrayBufferViews
	 * Fails in Safari 6, so we need to map to ArrayBuffers there.
	 */
	
	var blobSupportsArrayBufferView = blobSupported && (function() {
	  try {
	    var b = new Blob([new Uint8Array([1,2])]);
	    return b.size === 2;
	  } catch(e) {
	    return false;
	  }
	})();
	
	/**
	 * Check if BlobBuilder is supported
	 */
	
	var blobBuilderSupported = BlobBuilder
	  && BlobBuilder.prototype.append
	  && BlobBuilder.prototype.getBlob;
	
	/**
	 * Helper function that maps ArrayBufferViews to ArrayBuffers
	 * Used by BlobBuilder constructor and old browsers that didn't
	 * support it in the Blob constructor.
	 */
	
	function mapArrayBufferViews(ary) {
	  for (var i = 0; i < ary.length; i++) {
	    var chunk = ary[i];
	    if (chunk.buffer instanceof ArrayBuffer) {
	      var buf = chunk.buffer;
	
	      // if this is a subarray, make a copy so we only
	      // include the subarray region from the underlying buffer
	      if (chunk.byteLength !== buf.byteLength) {
	        var copy = new Uint8Array(chunk.byteLength);
	        copy.set(new Uint8Array(buf, chunk.byteOffset, chunk.byteLength));
	        buf = copy.buffer;
	      }
	
	      ary[i] = buf;
	    }
	  }
	}
	
	function BlobBuilderConstructor(ary, options) {
	  options = options || {};
	
	  var bb = new BlobBuilder();
	  mapArrayBufferViews(ary);
	
	  for (var i = 0; i < ary.length; i++) {
	    bb.append(ary[i]);
	  }
	
	  return (options.type) ? bb.getBlob(options.type) : bb.getBlob();
	};
	
	function BlobConstructor(ary, options) {
	  mapArrayBufferViews(ary);
	  return new Blob(ary, options || {});
	};
	
	module.exports = (function() {
	  if (blobSupported) {
	    return blobSupportsArrayBufferView ? global.Blob : BlobConstructor;
	  } else if (blobBuilderSupported) {
	    return BlobBuilderConstructor;
	  } else {
	    return undefined;
	  }
	})();
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 143 */
/***/ function(module, exports) {

	/**
	 * Compiles a querystring
	 * Returns string representation of the object
	 *
	 * @param {Object}
	 * @api private
	 */
	
	exports.encode = function (obj) {
	  var str = '';
	
	  for (var i in obj) {
	    if (obj.hasOwnProperty(i)) {
	      if (str.length) str += '&';
	      str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
	    }
	  }
	
	  return str;
	};
	
	/**
	 * Parses a simple querystring into an object
	 *
	 * @param {String} qs
	 * @api private
	 */
	
	exports.decode = function(qs){
	  var qry = {};
	  var pairs = qs.split('&');
	  for (var i = 0, l = pairs.length; i < l; i++) {
	    var pair = pairs[i].split('=');
	    qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
	  }
	  return qry;
	};


/***/ },
/* 144 */
/***/ function(module, exports) {

	
	module.exports = function(a, b){
	  var fn = function(){};
	  fn.prototype = b.prototype;
	  a.prototype = new fn;
	  a.prototype.constructor = a;
	};

/***/ },
/* 145 */
/***/ function(module, exports) {

	'use strict';
	
	var alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split('')
	  , length = 64
	  , map = {}
	  , seed = 0
	  , i = 0
	  , prev;
	
	/**
	 * Return a string representing the specified number.
	 *
	 * @param {Number} num The number to convert.
	 * @returns {String} The string representation of the number.
	 * @api public
	 */
	function encode(num) {
	  var encoded = '';
	
	  do {
	    encoded = alphabet[num % length] + encoded;
	    num = Math.floor(num / length);
	  } while (num > 0);
	
	  return encoded;
	}
	
	/**
	 * Return the integer value specified by the given string.
	 *
	 * @param {String} str The string to convert.
	 * @returns {Number} The integer value represented by the string.
	 * @api public
	 */
	function decode(str) {
	  var decoded = 0;
	
	  for (i = 0; i < str.length; i++) {
	    decoded = decoded * length + map[str.charAt(i)];
	  }
	
	  return decoded;
	}
	
	/**
	 * Yeast: A tiny growing id generator.
	 *
	 * @returns {String} A unique id.
	 * @api public
	 */
	function yeast() {
	  var now = encode(+new Date());
	
	  if (now !== prev) return seed = 0, prev = now;
	  return now +'.'+ encode(seed++);
	}
	
	//
	// Map each character to its index.
	//
	for (; i < length; i++) map[alphabet[i]] = i;
	
	//
	// Expose the `yeast`, `encode` and `decode` functions.
	//
	yeast.encode = encode;
	yeast.decode = decode;
	module.exports = yeast;


/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {
	/**
	 * Module requirements.
	 */
	
	var Polling = __webpack_require__(133);
	var inherit = __webpack_require__(144);
	
	/**
	 * Module exports.
	 */
	
	module.exports = JSONPPolling;
	
	/**
	 * Cached regular expressions.
	 */
	
	var rNewline = /\n/g;
	var rEscapedNewline = /\\n/g;
	
	/**
	 * Global JSONP callbacks.
	 */
	
	var callbacks;
	
	/**
	 * Noop.
	 */
	
	function empty () { }
	
	/**
	 * JSONP Polling constructor.
	 *
	 * @param {Object} opts.
	 * @api public
	 */
	
	function JSONPPolling (opts) {
	  Polling.call(this, opts);
	
	  this.query = this.query || {};
	
	  // define global callbacks array if not present
	  // we do this here (lazily) to avoid unneeded global pollution
	  if (!callbacks) {
	    // we need to consider multiple engines in the same page
	    if (!global.___eio) global.___eio = [];
	    callbacks = global.___eio;
	  }
	
	  // callback identifier
	  this.index = callbacks.length;
	
	  // add callback to jsonp global
	  var self = this;
	  callbacks.push(function (msg) {
	    self.onData(msg);
	  });
	
	  // append to query string
	  this.query.j = this.index;
	
	  // prevent spurious errors from being emitted when the window is unloaded
	  if (global.document && global.addEventListener) {
	    global.addEventListener('beforeunload', function () {
	      if (self.script) self.script.onerror = empty;
	    }, false);
	  }
	}
	
	/**
	 * Inherits from Polling.
	 */
	
	inherit(JSONPPolling, Polling);
	
	/*
	 * JSONP only supports binary as base64 encoded strings
	 */
	
	JSONPPolling.prototype.supportsBinary = false;
	
	/**
	 * Closes the socket.
	 *
	 * @api private
	 */
	
	JSONPPolling.prototype.doClose = function () {
	  if (this.script) {
	    this.script.parentNode.removeChild(this.script);
	    this.script = null;
	  }
	
	  if (this.form) {
	    this.form.parentNode.removeChild(this.form);
	    this.form = null;
	    this.iframe = null;
	  }
	
	  Polling.prototype.doClose.call(this);
	};
	
	/**
	 * Starts a poll cycle.
	 *
	 * @api private
	 */
	
	JSONPPolling.prototype.doPoll = function () {
	  var self = this;
	  var script = document.createElement('script');
	
	  if (this.script) {
	    this.script.parentNode.removeChild(this.script);
	    this.script = null;
	  }
	
	  script.async = true;
	  script.src = this.uri();
	  script.onerror = function (e) {
	    self.onError('jsonp poll error', e);
	  };
	
	  var insertAt = document.getElementsByTagName('script')[0];
	  if (insertAt) {
	    insertAt.parentNode.insertBefore(script, insertAt);
	  } else {
	    (document.head || document.body).appendChild(script);
	  }
	  this.script = script;
	
	  var isUAgecko = 'undefined' !== typeof navigator && /gecko/i.test(navigator.userAgent);
	
	  if (isUAgecko) {
	    setTimeout(function () {
	      var iframe = document.createElement('iframe');
	      document.body.appendChild(iframe);
	      document.body.removeChild(iframe);
	    }, 100);
	  }
	};
	
	/**
	 * Writes with a hidden iframe.
	 *
	 * @param {String} data to send
	 * @param {Function} called upon flush.
	 * @api private
	 */
	
	JSONPPolling.prototype.doWrite = function (data, fn) {
	  var self = this;
	
	  if (!this.form) {
	    var form = document.createElement('form');
	    var area = document.createElement('textarea');
	    var id = this.iframeId = 'eio_iframe_' + this.index;
	    var iframe;
	
	    form.className = 'socketio';
	    form.style.position = 'absolute';
	    form.style.top = '-1000px';
	    form.style.left = '-1000px';
	    form.target = id;
	    form.method = 'POST';
	    form.setAttribute('accept-charset', 'utf-8');
	    area.name = 'd';
	    form.appendChild(area);
	    document.body.appendChild(form);
	
	    this.form = form;
	    this.area = area;
	  }
	
	  this.form.action = this.uri();
	
	  function complete () {
	    initIframe();
	    fn();
	  }
	
	  function initIframe () {
	    if (self.iframe) {
	      try {
	        self.form.removeChild(self.iframe);
	      } catch (e) {
	        self.onError('jsonp polling iframe removal error', e);
	      }
	    }
	
	    try {
	      // ie6 dynamic iframes with target="" support (thanks Chris Lambacher)
	      var html = '<iframe src="javascript:0" name="' + self.iframeId + '">';
	      iframe = document.createElement(html);
	    } catch (e) {
	      iframe = document.createElement('iframe');
	      iframe.name = self.iframeId;
	      iframe.src = 'javascript:0';
	    }
	
	    iframe.id = self.iframeId;
	
	    self.form.appendChild(iframe);
	    self.iframe = iframe;
	  }
	
	  initIframe();
	
	  // escape \n to prevent it from being converted into \r\n by some UAs
	  // double escaping is required for escaped new lines because unescaping of new lines can be done safely on server-side
	  data = data.replace(rEscapedNewline, '\\\n');
	  this.area.value = data.replace(rNewline, '\\n');
	
	  try {
	    this.form.submit();
	  } catch (e) {}
	
	  if (this.iframe.attachEvent) {
	    this.iframe.onreadystatechange = function () {
	      if (self.iframe.readyState === 'complete') {
	        complete();
	      }
	    };
	  } else {
	    this.iframe.onload = complete;
	  }
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Module dependencies.
	 */
	
	var Transport = __webpack_require__(134);
	var parser = __webpack_require__(135);
	var parseqs = __webpack_require__(143);
	var inherit = __webpack_require__(144);
	var yeast = __webpack_require__(145);
	var debug = __webpack_require__(114)('engine.io-client:websocket');
	var BrowserWebSocket = global.WebSocket || global.MozWebSocket;
	
	/**
	 * Get either the `WebSocket` or `MozWebSocket` globals
	 * in the browser or try to resolve WebSocket-compatible
	 * interface exposed by `ws` for Node-like environment.
	 */
	
	var WebSocket = BrowserWebSocket;
	if (!WebSocket && typeof window === 'undefined') {
	  try {
	    WebSocket = __webpack_require__(148);
	  } catch (e) { }
	}
	
	/**
	 * Module exports.
	 */
	
	module.exports = WS;
	
	/**
	 * WebSocket transport constructor.
	 *
	 * @api {Object} connection options
	 * @api public
	 */
	
	function WS (opts) {
	  var forceBase64 = (opts && opts.forceBase64);
	  if (forceBase64) {
	    this.supportsBinary = false;
	  }
	  this.perMessageDeflate = opts.perMessageDeflate;
	  Transport.call(this, opts);
	}
	
	/**
	 * Inherits from Transport.
	 */
	
	inherit(WS, Transport);
	
	/**
	 * Transport name.
	 *
	 * @api public
	 */
	
	WS.prototype.name = 'websocket';
	
	/*
	 * WebSockets support binary
	 */
	
	WS.prototype.supportsBinary = true;
	
	/**
	 * Opens socket.
	 *
	 * @api private
	 */
	
	WS.prototype.doOpen = function () {
	  if (!this.check()) {
	    // let probe timeout
	    return;
	  }
	
	  var uri = this.uri();
	  var protocols = void (0);
	  var opts = {
	    agent: this.agent,
	    perMessageDeflate: this.perMessageDeflate
	  };
	
	  // SSL options for Node.js client
	  opts.pfx = this.pfx;
	  opts.key = this.key;
	  opts.passphrase = this.passphrase;
	  opts.cert = this.cert;
	  opts.ca = this.ca;
	  opts.ciphers = this.ciphers;
	  opts.rejectUnauthorized = this.rejectUnauthorized;
	  if (this.extraHeaders) {
	    opts.headers = this.extraHeaders;
	  }
	
	  try {
	    this.ws = BrowserWebSocket ? new WebSocket(uri) : new WebSocket(uri, protocols, opts);
	  } catch (err) {
	    return this.emit('error', err);
	  }
	
	  if (this.ws.binaryType === undefined) {
	    this.supportsBinary = false;
	  }
	
	  if (this.ws.supports && this.ws.supports.binary) {
	    this.supportsBinary = true;
	    this.ws.binaryType = 'nodebuffer';
	  } else {
	    this.ws.binaryType = 'arraybuffer';
	  }
	
	  this.addEventListeners();
	};
	
	/**
	 * Adds event listeners to the socket
	 *
	 * @api private
	 */
	
	WS.prototype.addEventListeners = function () {
	  var self = this;
	
	  this.ws.onopen = function () {
	    self.onOpen();
	  };
	  this.ws.onclose = function () {
	    self.onClose();
	  };
	  this.ws.onmessage = function (ev) {
	    self.onData(ev.data);
	  };
	  this.ws.onerror = function (e) {
	    self.onError('websocket error', e);
	  };
	};
	
	/**
	 * Writes data to socket.
	 *
	 * @param {Array} array of packets.
	 * @api private
	 */
	
	WS.prototype.write = function (packets) {
	  var self = this;
	  this.writable = false;
	
	  // encodePacket efficient as it uses WS framing
	  // no need for encodePayload
	  var total = packets.length;
	  for (var i = 0, l = total; i < l; i++) {
	    (function (packet) {
	      parser.encodePacket(packet, self.supportsBinary, function (data) {
	        if (!BrowserWebSocket) {
	          // always create a new object (GH-437)
	          var opts = {};
	          if (packet.options) {
	            opts.compress = packet.options.compress;
	          }
	
	          if (self.perMessageDeflate) {
	            var len = 'string' === typeof data ? global.Buffer.byteLength(data) : data.length;
	            if (len < self.perMessageDeflate.threshold) {
	              opts.compress = false;
	            }
	          }
	        }
	
	        // Sometimes the websocket has already been closed but the browser didn't
	        // have a chance of informing us about it yet, in that case send will
	        // throw an error
	        try {
	          if (BrowserWebSocket) {
	            // TypeError is thrown when passing the second argument on Safari
	            self.ws.send(data);
	          } else {
	            self.ws.send(data, opts);
	          }
	        } catch (e) {
	          debug('websocket closed before onclose event');
	        }
	
	        --total || done();
	      });
	    })(packets[i]);
	  }
	
	  function done () {
	    self.emit('flush');
	
	    // fake drain
	    // defer to next tick to allow Socket to clear writeBuffer
	    setTimeout(function () {
	      self.writable = true;
	      self.emit('drain');
	    }, 0);
	  }
	};
	
	/**
	 * Called upon close
	 *
	 * @api private
	 */
	
	WS.prototype.onClose = function () {
	  Transport.prototype.onClose.call(this);
	};
	
	/**
	 * Closes socket.
	 *
	 * @api private
	 */
	
	WS.prototype.doClose = function () {
	  if (typeof this.ws !== 'undefined') {
	    this.ws.close();
	  }
	};
	
	/**
	 * Generates uri for connection.
	 *
	 * @api private
	 */
	
	WS.prototype.uri = function () {
	  var query = this.query || {};
	  var schema = this.secure ? 'wss' : 'ws';
	  var port = '';
	
	  // avoid port if default for schema
	  if (this.port && (('wss' === schema && this.port !== 443) ||
	    ('ws' === schema && this.port !== 80))) {
	    port = ':' + this.port;
	  }
	
	  // append timestamp to URI
	  if (this.timestampRequests) {
	    query[this.timestampParam] = yeast();
	  }
	
	  // communicate binary support capabilities
	  if (!this.supportsBinary) {
	    query.b64 = 1;
	  }
	
	  query = parseqs.encode(query);
	
	  // prepend ? to query
	  if (query.length) {
	    query = '?' + query;
	  }
	
	  var ipv6 = this.hostname.indexOf(':') !== -1;
	  return schema + '://' + (ipv6 ? '[' + this.hostname + ']' : this.hostname) + port + this.path + query;
	};
	
	/**
	 * Feature detection for WebSocket.
	 *
	 * @return {Boolean} whether this transport is available.
	 * @api public
	 */
	
	WS.prototype.check = function () {
	  return !!WebSocket && !('__initialize' in WebSocket && this.name === WS.prototype.name);
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 148 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 149 */
/***/ function(module, exports) {

	
	var indexOf = [].indexOf;
	
	module.exports = function(arr, obj){
	  if (indexOf) return arr.indexOf(obj);
	  for (var i = 0; i < arr.length; ++i) {
	    if (arr[i] === obj) return i;
	  }
	  return -1;
	};

/***/ },
/* 150 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * JSON parse.
	 *
	 * @see Based on jQuery#parseJSON (MIT) and JSON2
	 * @api private
	 */
	
	var rvalidchars = /^[\],:{}\s]*$/;
	var rvalidescape = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;
	var rvalidtokens = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
	var rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g;
	var rtrimLeft = /^\s+/;
	var rtrimRight = /\s+$/;
	
	module.exports = function parsejson(data) {
	  if ('string' != typeof data || !data) {
	    return null;
	  }
	
	  data = data.replace(rtrimLeft, '').replace(rtrimRight, '');
	
	  // Attempt to parse using the native JSON parser first
	  if (global.JSON && JSON.parse) {
	    return JSON.parse(data);
	  }
	
	  if (rvalidchars.test(data.replace(rvalidescape, '@')
	      .replace(rvalidtokens, ']')
	      .replace(rvalidbraces, ''))) {
	    return (new Function('return ' + data))();
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Module dependencies.
	 */
	
	var parser = __webpack_require__(117);
	var Emitter = __webpack_require__(152);
	var toArray = __webpack_require__(153);
	var on = __webpack_require__(154);
	var bind = __webpack_require__(155);
	var debug = __webpack_require__(114)('socket.io-client:socket');
	var hasBin = __webpack_require__(156);
	
	/**
	 * Module exports.
	 */
	
	module.exports = exports = Socket;
	
	/**
	 * Internal events (blacklisted).
	 * These events can't be emitted by the user.
	 *
	 * @api private
	 */
	
	var events = {
	  connect: 1,
	  connect_error: 1,
	  connect_timeout: 1,
	  connecting: 1,
	  disconnect: 1,
	  error: 1,
	  reconnect: 1,
	  reconnect_attempt: 1,
	  reconnect_failed: 1,
	  reconnect_error: 1,
	  reconnecting: 1,
	  ping: 1,
	  pong: 1
	};
	
	/**
	 * Shortcut to `Emitter#emit`.
	 */
	
	var emit = Emitter.prototype.emit;
	
	/**
	 * `Socket` constructor.
	 *
	 * @api public
	 */
	
	function Socket (io, nsp, opts) {
	  this.io = io;
	  this.nsp = nsp;
	  this.json = this; // compat
	  this.ids = 0;
	  this.acks = {};
	  this.receiveBuffer = [];
	  this.sendBuffer = [];
	  this.connected = false;
	  this.disconnected = true;
	  if (opts && opts.query) {
	    this.query = opts.query;
	  }
	  if (this.io.autoConnect) this.open();
	}
	
	/**
	 * Mix in `Emitter`.
	 */
	
	Emitter(Socket.prototype);
	
	/**
	 * Subscribe to open, close and packet events
	 *
	 * @api private
	 */
	
	Socket.prototype.subEvents = function () {
	  if (this.subs) return;
	
	  var io = this.io;
	  this.subs = [
	    on(io, 'open', bind(this, 'onopen')),
	    on(io, 'packet', bind(this, 'onpacket')),
	    on(io, 'close', bind(this, 'onclose'))
	  ];
	};
	
	/**
	 * "Opens" the socket.
	 *
	 * @api public
	 */
	
	Socket.prototype.open =
	Socket.prototype.connect = function () {
	  if (this.connected) return this;
	
	  this.subEvents();
	  this.io.open(); // ensure open
	  if ('open' === this.io.readyState) this.onopen();
	  this.emit('connecting');
	  return this;
	};
	
	/**
	 * Sends a `message` event.
	 *
	 * @return {Socket} self
	 * @api public
	 */
	
	Socket.prototype.send = function () {
	  var args = toArray(arguments);
	  args.unshift('message');
	  this.emit.apply(this, args);
	  return this;
	};
	
	/**
	 * Override `emit`.
	 * If the event is in `events`, it's emitted normally.
	 *
	 * @param {String} event name
	 * @return {Socket} self
	 * @api public
	 */
	
	Socket.prototype.emit = function (ev) {
	  if (events.hasOwnProperty(ev)) {
	    emit.apply(this, arguments);
	    return this;
	  }
	
	  var args = toArray(arguments);
	  var parserType = parser.EVENT; // default
	  if (hasBin(args)) { parserType = parser.BINARY_EVENT; } // binary
	  var packet = { type: parserType, data: args };
	
	  packet.options = {};
	  packet.options.compress = !this.flags || false !== this.flags.compress;
	
	  // event ack callback
	  if ('function' === typeof args[args.length - 1]) {
	    debug('emitting packet with ack id %d', this.ids);
	    this.acks[this.ids] = args.pop();
	    packet.id = this.ids++;
	  }
	
	  if (this.connected) {
	    this.packet(packet);
	  } else {
	    this.sendBuffer.push(packet);
	  }
	
	  delete this.flags;
	
	  return this;
	};
	
	/**
	 * Sends a packet.
	 *
	 * @param {Object} packet
	 * @api private
	 */
	
	Socket.prototype.packet = function (packet) {
	  packet.nsp = this.nsp;
	  this.io.packet(packet);
	};
	
	/**
	 * Called upon engine `open`.
	 *
	 * @api private
	 */
	
	Socket.prototype.onopen = function () {
	  debug('transport is open - connecting');
	
	  // write connect packet if necessary
	  if ('/' !== this.nsp) {
	    if (this.query) {
	      this.packet({type: parser.CONNECT, query: this.query});
	    } else {
	      this.packet({type: parser.CONNECT});
	    }
	  }
	};
	
	/**
	 * Called upon engine `close`.
	 *
	 * @param {String} reason
	 * @api private
	 */
	
	Socket.prototype.onclose = function (reason) {
	  debug('close (%s)', reason);
	  this.connected = false;
	  this.disconnected = true;
	  delete this.id;
	  this.emit('disconnect', reason);
	};
	
	/**
	 * Called with socket packet.
	 *
	 * @param {Object} packet
	 * @api private
	 */
	
	Socket.prototype.onpacket = function (packet) {
	  if (packet.nsp !== this.nsp) return;
	
	  switch (packet.type) {
	    case parser.CONNECT:
	      this.onconnect();
	      break;
	
	    case parser.EVENT:
	      this.onevent(packet);
	      break;
	
	    case parser.BINARY_EVENT:
	      this.onevent(packet);
	      break;
	
	    case parser.ACK:
	      this.onack(packet);
	      break;
	
	    case parser.BINARY_ACK:
	      this.onack(packet);
	      break;
	
	    case parser.DISCONNECT:
	      this.ondisconnect();
	      break;
	
	    case parser.ERROR:
	      this.emit('error', packet.data);
	      break;
	  }
	};
	
	/**
	 * Called upon a server event.
	 *
	 * @param {Object} packet
	 * @api private
	 */
	
	Socket.prototype.onevent = function (packet) {
	  var args = packet.data || [];
	  debug('emitting event %j', args);
	
	  if (null != packet.id) {
	    debug('attaching ack callback to event');
	    args.push(this.ack(packet.id));
	  }
	
	  if (this.connected) {
	    emit.apply(this, args);
	  } else {
	    this.receiveBuffer.push(args);
	  }
	};
	
	/**
	 * Produces an ack callback to emit with an event.
	 *
	 * @api private
	 */
	
	Socket.prototype.ack = function (id) {
	  var self = this;
	  var sent = false;
	  return function () {
	    // prevent double callbacks
	    if (sent) return;
	    sent = true;
	    var args = toArray(arguments);
	    debug('sending ack %j', args);
	
	    var type = hasBin(args) ? parser.BINARY_ACK : parser.ACK;
	    self.packet({
	      type: type,
	      id: id,
	      data: args
	    });
	  };
	};
	
	/**
	 * Called upon a server acknowlegement.
	 *
	 * @param {Object} packet
	 * @api private
	 */
	
	Socket.prototype.onack = function (packet) {
	  var ack = this.acks[packet.id];
	  if ('function' === typeof ack) {
	    debug('calling ack %s with %j', packet.id, packet.data);
	    ack.apply(this, packet.data);
	    delete this.acks[packet.id];
	  } else {
	    debug('bad ack %s', packet.id);
	  }
	};
	
	/**
	 * Called upon server connect.
	 *
	 * @api private
	 */
	
	Socket.prototype.onconnect = function () {
	  this.connected = true;
	  this.disconnected = false;
	  this.emit('connect');
	  this.emitBuffered();
	};
	
	/**
	 * Emit buffered events (received and emitted).
	 *
	 * @api private
	 */
	
	Socket.prototype.emitBuffered = function () {
	  var i;
	  for (i = 0; i < this.receiveBuffer.length; i++) {
	    emit.apply(this, this.receiveBuffer[i]);
	  }
	  this.receiveBuffer = [];
	
	  for (i = 0; i < this.sendBuffer.length; i++) {
	    this.packet(this.sendBuffer[i]);
	  }
	  this.sendBuffer = [];
	};
	
	/**
	 * Called upon server disconnect.
	 *
	 * @api private
	 */
	
	Socket.prototype.ondisconnect = function () {
	  debug('server disconnect (%s)', this.nsp);
	  this.destroy();
	  this.onclose('io server disconnect');
	};
	
	/**
	 * Called upon forced client/server side disconnections,
	 * this method ensures the manager stops tracking us and
	 * that reconnections don't get triggered for this.
	 *
	 * @api private.
	 */
	
	Socket.prototype.destroy = function () {
	  if (this.subs) {
	    // clean subscriptions to avoid reconnections
	    for (var i = 0; i < this.subs.length; i++) {
	      this.subs[i].destroy();
	    }
	    this.subs = null;
	  }
	
	  this.io.destroy(this);
	};
	
	/**
	 * Disconnects the socket manually.
	 *
	 * @return {Socket} self
	 * @api public
	 */
	
	Socket.prototype.close =
	Socket.prototype.disconnect = function () {
	  if (this.connected) {
	    debug('performing disconnect (%s)', this.nsp);
	    this.packet({ type: parser.DISCONNECT });
	  }
	
	  // remove socket from pool
	  this.destroy();
	
	  if (this.connected) {
	    // fire events
	    this.onclose('io client disconnect');
	  }
	  return this;
	};
	
	/**
	 * Sets the compress flag.
	 *
	 * @param {Boolean} if `true`, compresses the sending data
	 * @return {Socket} self
	 * @api public
	 */
	
	Socket.prototype.compress = function (compress) {
	  this.flags = this.flags || {};
	  this.flags.compress = compress;
	  return this;
	};


/***/ },
/* 152 */
/***/ function(module, exports) {

	
	/**
	 * Expose `Emitter`.
	 */
	
	module.exports = Emitter;
	
	/**
	 * Initialize a new `Emitter`.
	 *
	 * @api public
	 */
	
	function Emitter(obj) {
	  if (obj) return mixin(obj);
	};
	
	/**
	 * Mixin the emitter properties.
	 *
	 * @param {Object} obj
	 * @return {Object}
	 * @api private
	 */
	
	function mixin(obj) {
	  for (var key in Emitter.prototype) {
	    obj[key] = Emitter.prototype[key];
	  }
	  return obj;
	}
	
	/**
	 * Listen on the given `event` with `fn`.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
	
	Emitter.prototype.on =
	Emitter.prototype.addEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};
	  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
	    .push(fn);
	  return this;
	};
	
	/**
	 * Adds an `event` listener that will be invoked a single
	 * time then automatically removed.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
	
	Emitter.prototype.once = function(event, fn){
	  function on() {
	    this.off(event, on);
	    fn.apply(this, arguments);
	  }
	
	  on.fn = fn;
	  this.on(event, on);
	  return this;
	};
	
	/**
	 * Remove the given callback for `event` or all
	 * registered callbacks.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
	
	Emitter.prototype.off =
	Emitter.prototype.removeListener =
	Emitter.prototype.removeAllListeners =
	Emitter.prototype.removeEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};
	
	  // all
	  if (0 == arguments.length) {
	    this._callbacks = {};
	    return this;
	  }
	
	  // specific event
	  var callbacks = this._callbacks['$' + event];
	  if (!callbacks) return this;
	
	  // remove all handlers
	  if (1 == arguments.length) {
	    delete this._callbacks['$' + event];
	    return this;
	  }
	
	  // remove specific handler
	  var cb;
	  for (var i = 0; i < callbacks.length; i++) {
	    cb = callbacks[i];
	    if (cb === fn || cb.fn === fn) {
	      callbacks.splice(i, 1);
	      break;
	    }
	  }
	  return this;
	};
	
	/**
	 * Emit `event` with the given args.
	 *
	 * @param {String} event
	 * @param {Mixed} ...
	 * @return {Emitter}
	 */
	
	Emitter.prototype.emit = function(event){
	  this._callbacks = this._callbacks || {};
	  var args = [].slice.call(arguments, 1)
	    , callbacks = this._callbacks['$' + event];
	
	  if (callbacks) {
	    callbacks = callbacks.slice(0);
	    for (var i = 0, len = callbacks.length; i < len; ++i) {
	      callbacks[i].apply(this, args);
	    }
	  }
	
	  return this;
	};
	
	/**
	 * Return array of callbacks for `event`.
	 *
	 * @param {String} event
	 * @return {Array}
	 * @api public
	 */
	
	Emitter.prototype.listeners = function(event){
	  this._callbacks = this._callbacks || {};
	  return this._callbacks['$' + event] || [];
	};
	
	/**
	 * Check if this emitter has `event` handlers.
	 *
	 * @param {String} event
	 * @return {Boolean}
	 * @api public
	 */
	
	Emitter.prototype.hasListeners = function(event){
	  return !! this.listeners(event).length;
	};


/***/ },
/* 153 */
/***/ function(module, exports) {

	module.exports = toArray
	
	function toArray(list, index) {
	    var array = []
	
	    index = index || 0
	
	    for (var i = index || 0; i < list.length; i++) {
	        array[i - index] = list[i]
	    }
	
	    return array
	}


/***/ },
/* 154 */
/***/ function(module, exports) {

	
	/**
	 * Module exports.
	 */
	
	module.exports = on;
	
	/**
	 * Helper for subscriptions.
	 *
	 * @param {Object|EventEmitter} obj with `Emitter` mixin or `EventEmitter`
	 * @param {String} event name
	 * @param {Function} callback
	 * @api public
	 */
	
	function on (obj, ev, fn) {
	  obj.on(ev, fn);
	  return {
	    destroy: function () {
	      obj.removeListener(ev, fn);
	    }
	  };
	}


/***/ },
/* 155 */
/***/ function(module, exports) {

	/**
	 * Slice reference.
	 */
	
	var slice = [].slice;
	
	/**
	 * Bind `obj` to `fn`.
	 *
	 * @param {Object} obj
	 * @param {Function|String} fn or string
	 * @return {Function}
	 * @api public
	 */
	
	module.exports = function(obj, fn){
	  if ('string' == typeof fn) fn = obj[fn];
	  if ('function' != typeof fn) throw new Error('bind() requires a function');
	  var args = slice.call(arguments, 2);
	  return function(){
	    return fn.apply(obj, args.concat(slice.call(arguments)));
	  }
	};


/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {
	/*
	 * Module requirements.
	 */
	
	var isArray = __webpack_require__(123);
	
	/**
	 * Module exports.
	 */
	
	module.exports = hasBinary;
	
	/**
	 * Checks for binary data.
	 *
	 * Right now only Buffer and ArrayBuffer are supported..
	 *
	 * @param {Object} anything
	 * @api public
	 */
	
	function hasBinary(data) {
	
	  function _hasBinary(obj) {
	    if (!obj) return false;
	
	    if ( (global.Buffer && global.Buffer.isBuffer && global.Buffer.isBuffer(obj)) ||
	         (global.ArrayBuffer && obj instanceof ArrayBuffer) ||
	         (global.Blob && obj instanceof Blob) ||
	         (global.File && obj instanceof File)
	        ) {
	      return true;
	    }
	
	    if (isArray(obj)) {
	      for (var i = 0; i < obj.length; i++) {
	          if (_hasBinary(obj[i])) {
	              return true;
	          }
	      }
	    } else if (obj && 'object' == typeof obj) {
	      // see: https://github.com/Automattic/has-binary/pull/4
	      if (obj.toJSON && 'function' == typeof obj.toJSON) {
	        obj = obj.toJSON();
	      }
	
	      for (var key in obj) {
	        if (Object.prototype.hasOwnProperty.call(obj, key) && _hasBinary(obj[key])) {
	          return true;
	        }
	      }
	    }
	
	    return false;
	  }
	
	  return _hasBinary(data);
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 157 */
/***/ function(module, exports) {

	
	/**
	 * Expose `Backoff`.
	 */
	
	module.exports = Backoff;
	
	/**
	 * Initialize backoff timer with `opts`.
	 *
	 * - `min` initial timeout in milliseconds [100]
	 * - `max` max timeout [10000]
	 * - `jitter` [0]
	 * - `factor` [2]
	 *
	 * @param {Object} opts
	 * @api public
	 */
	
	function Backoff(opts) {
	  opts = opts || {};
	  this.ms = opts.min || 100;
	  this.max = opts.max || 10000;
	  this.factor = opts.factor || 2;
	  this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
	  this.attempts = 0;
	}
	
	/**
	 * Return the backoff duration.
	 *
	 * @return {Number}
	 * @api public
	 */
	
	Backoff.prototype.duration = function(){
	  var ms = this.ms * Math.pow(this.factor, this.attempts++);
	  if (this.jitter) {
	    var rand =  Math.random();
	    var deviation = Math.floor(rand * this.jitter * ms);
	    ms = (Math.floor(rand * 10) & 1) == 0  ? ms - deviation : ms + deviation;
	  }
	  return Math.min(ms, this.max) | 0;
	};
	
	/**
	 * Reset the number of attempts.
	 *
	 * @api public
	 */
	
	Backoff.prototype.reset = function(){
	  this.attempts = 0;
	};
	
	/**
	 * Set the minimum duration
	 *
	 * @api public
	 */
	
	Backoff.prototype.setMin = function(min){
	  this.ms = min;
	};
	
	/**
	 * Set the maximum duration
	 *
	 * @api public
	 */
	
	Backoff.prototype.setMax = function(max){
	  this.max = max;
	};
	
	/**
	 * Set the jitter
	 *
	 * @api public
	 */
	
	Backoff.prototype.setJitter = function(jitter){
	  this.jitter = jitter;
	};
	


/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	__webpack_require__(159);
	
	var _tpl = __webpack_require__(160);
	
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
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(224);

/***/ },
/* 160 */
/***/ function(module, exports) {

	module.exports = "<ul role=\"menu\" class=\"dropdown-menu\" ng-init=\"vm._showType= true\">\n    <li ng-repeat=\"type in vm.types\"\n        dnd-draggable=\"type\"\n        dnd-type=\"type.type\"\n        dnd-dragstart=\"vm.start(type.type)\"\n        dnd-effect-allowed=\"move\"\n        dnd-dragend=\"vm.end()\"\n        ng-show=\"vm._showType\">\n        <a ng-click=\"vm._showType = !vm._showType;\n                    vm.selectType(type.type);\n                    $event.stopPropagation();\">\n            {{type.type}}\n        </a>\n    </li>\n    <li ng-show=\"!vm._showType\"\n        style=\"padding-left: 5px;padding-right: 20px;\">\n        <div class=\"col-xs-10\">\n            <input type=\"text\" class=\"input-xs\" ng-model=\"vm._filter\">\n        </div>\n        <div class=\"col-xs-2\">\n            <button type=\"button\" class=\"btn btn-xs btn-white\"\n                    ng-click=\"vm._showType = !vm._showType;$event.stopPropagation();\">\n                <i class=\"fa fa-times\"></i>\n            </button>\n        </div>\n    </li>\n    <li ng-repeat=\"element in vm.list\"\n        ng-init=\"_element = vm.convert(element)\"\n        dnd-draggable=\"_element\"\n        dnd-type=\"vm._type\"\n        dnd-effect-allowed=\"move\"\n        dnd-dragstart=\"vm.start(vm._type)\"\n        dnd-dragend=\"vm.end()\"\n        ng-show=\"!vm._showType\">\n        <a ng-click=\"\">{{vm.getTitle(element)}}</a>\n    </li>\n</ul>\n"

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _common = __webpack_require__(100);
	
	var _common2 = _interopRequireDefault(_common);
	
	__webpack_require__(159);
	
	var _module2 = __webpack_require__(13);
	
	var _module3 = _interopRequireDefault(_module2);
	
	var _module4 = __webpack_require__(162);
	
	var _module5 = _interopRequireDefault(_module4);
	
	__webpack_require__(14);
	
	var _element = __webpack_require__(164);
	
	var _element2 = _interopRequireDefault(_element);
	
	var _editor = __webpack_require__(165);
	
	var _editor2 = _interopRequireDefault(_editor);
	
	var _cmsWrapper = __webpack_require__(167);
	
	var _cmsWrapper2 = _interopRequireDefault(_cmsWrapper);
	
	__webpack_require__(168);
	
	var _fragment = __webpack_require__(169);
	
	var _fragment2 = _interopRequireDefault(_fragment);
	
	var _container = __webpack_require__(170);
	
	var _container2 = _interopRequireDefault(_container);
	
	var _containerEdit = __webpack_require__(172);
	
	var _containerEdit2 = _interopRequireDefault(_containerEdit);
	
	var _cmsFormPath = __webpack_require__(174);
	
	var _cmsFormPath2 = _interopRequireDefault(_cmsFormPath);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _module = angular.module('components.cmsMain', ['dndLists', 'ui.bootstrap', _common2.default, _module3.default, _module5.default, 'ui.bootstrap.contextMenu']).directive('cmsContainer', _container2.default).directive('cmsElement', _element2.default).directive('cmsEditor', _editor2.default).directive('cmsWrapper', _cmsWrapper2.default).directive('cmsFragment', _fragment2.default).directive('cmsFormPath', _cmsFormPath2.default).directive('cmsContainerEdit', _containerEdit2.default);
	
	exports.default = _module.name;

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _module2 = __webpack_require__(16);
	
	var _module3 = _interopRequireDefault(_module2);
	
	var _tpl = __webpack_require__(163);
	
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
	            onApply: '&',
	            onDelete: '&'
	        },
	        template: _tpl2.default,
	        controllerAs: 'vm',
	        controller: controller
	    };
	}
	
	service.$inject = ['$http', '$timeout', 'cms', '$uibModal'];
	function service($http, $timeout, cms, $uibModal) {
	    function manipulate(ref, type, _model, cb) {
	
	        var Type = Types[type];
	
	        function modalCtrl($scope, $uibModalInstance) {
	            $scope.$on('saveContainers', function (e, obj) {
	                return scope.$emit('saveContainersFw', obj);
	            });
	            $scope.$on('restoreContainers', function (e, obj) {
	                return scope.$emit('restoreContainersFw', obj);
	            });
	
	            $scope.model = {};
	
	            if (ref) {
	                cms.getType(type, ref, function (model) {
	                    _.assign($scope.model, model);
	                });
	            } else if (_model) {
	                cms.createElement(type, _model, function (model) {
	                    _.assign($scope.model, model);
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
	                cms.updateElement($scope.type, $scope.model, function (_model) {
	                    $uibModalInstance.close(_model);
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
	
	            $scope.delete = function () {
	                cms.removeElement($scope.type, $scope.model._id, function () {
	                    $uibModalInstance.close();
	                });
	            };
	
	            $scope.add = function () {
	                $scope.apply();
	                cms.createElement(type, {}, function (model) {
	                    $uibModalInstance.close();
	                    edit(model._id, type, cb);
	                });
	            };
	        }
	
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
	            template: '\n                <div cms-element-edit\n                     cms-type="type"\n                     cms-model="model"\n                     cms-fields="fields"\n                     on-cancel="cancel()"\n                     on-submit="submit()"\n                     on-add="add()"\n                     on-apply="apply()"\n                     on-delete="delete()">\n                </div>\n                ',
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
	
	        modalInstance.result.then(function (model) {
	            if (cb) $timeout(cb(model));
	        })['finally'](function () {
	            $timeout(function () {
	                $('body').off('scroll mousewheel touchmove');
	                $('.cms-window-placeholder').find('.modal-content').off();
	            });
	        });
	    }
	
	    function edit(ref, type, cb) {
	        manipulate(ref, type, null, cb);
	    }
	
	    function add(model, type, cb) {
	        manipulate(null, type, model, cb);
	    }
	
	    return {
	        edit: edit,
	        add: add
	    };
	}
	
	exports.default = _module.name;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 163 */
/***/ function(module, exports) {

	module.exports = "<div class=\"cms-wrapper cms\"\n     ng-init=\"_showId = false;\">\n\n    <div style=\"position: absolute;right: 10px;\">\n        <button class=\"btn btn-xs btn-white\"\n                ng-click=\"_showId=!_showId;\"\n                ng-bind=\"_showId?'hide id':'show id'\">\n        </button>\n        <button type=\"button\" class=\"btn btn-xs btn-white\" ng-bind=\"vm.fullScreenText\"\n                ng-click=\"vm.changeScreenSize();\"></button>\n    </div>\n\n    <h3 style=\"font-weight: 300;\">Edit {{vm.cmsType}} {{_showId?'('+vm.cmsModel._id+')':''}}:</h3>\n\n    <form ng-submit=\"vm.onSubmit()\"\n          novalidate\n          class=\"cms-form form-horizontal\">\n\n        <uib-tabset ng-if=\"vm.isTab\">\n            <uib-tab ng-repeat=\"tab in vm.cmsFields\"\n                     heading=\"{{tab.title}}\"\n                     active=\"tab.active\">\n                <br>\n                <formly-form model=\"vm.cmsModel\" fields=\"tab.fields\"\n                             form=\"vm.form\" options=\"vm.options\">\n                </formly-form>\n            </uib-tab>\n        </uib-tabset>\n\n        <div>\n            <br>\n            <formly-form model=\"vm.cmsModel\" fields=\"vm.cmsFields\"\n                         form=\"vm.form\" options=\"vm.options\" ng-if=\"!vm.isTab\">\n            </formly-form>\n        </div>\n\n        <div class=\"form-group\">\n            <div class=\"col-sm-offset-2 col-sm-10\">\n                <button type=\"submit\" class=\"btn btn-primary submit-button\" ng-disabled=\"vm.form.$invalid\">Submit\n                </button>\n                <button type=\"button\" class=\"btn btn-primary\" ng-click=\"vm.onApply()\">Apply</button>\n                <button type=\"button\" class=\"btn btn-primary\" ng-click=\"vm.onAdd()\">Save and Add</button>\n                <button type=\"button\" class=\"btn btn-primary\" ng-click=\"vm.onCancel()\">Cancel</button>\n\n                <button type=\"button\" class=\"cms-btn btn-outline btn btn-danger pull-right\" ng-click=\"vm.onDelete()\">Delete</button>\n\n            </div>\n        </div>\n    </form>\n</div>"

/***/ },
/* 164 */
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
	        var _vm$element = vm.element,
	            ref = _vm$element.ref,
	            type = _vm$element.type,
	            containers = _vm$element.containers,
	            binding = _vm$element.binding;
	
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
	                                var _bind$model = bind.model,
	                                    parentKey = _bind$model.parentKey,
	                                    key = _bind$model.key;
	
	                                scope.$watch('parentModel.' + parentKey, function () {
	                                    return scope.model[key] = scope.parentModel[parentKey];
	                                }, true);
	                            })();
	                        } else if (bind.choice === 'fn') {
	                            var _bind$fn = bind.fn,
	                                _parentKey = _bind$fn.parentKey,
	                                _key = _bind$fn.key;
	
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
	                var _Type = Type,
	                    serverFn = _Type.serverFn,
	                    ctrl = _Type.controller,
	                    link = _Type.link;
	
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
	                if (link) link(scope, element, attr);
	
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
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _editor = __webpack_require__(166);
	
	var _editor2 = _interopRequireDefault(_editor);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	directive.$inject = ['cms', '$http', '$timeout', 'formService'];
	function directive(cms, $http, $timeout, formService) {
	    controller.$inject = ['$scope'];
	
	    function controller(scope) {
	        var vm = this;
	        var _vm$cmsEditor = vm.cmsEditor,
	            ref = _vm$cmsEditor.ref,
	            type = _vm$cmsEditor.type;
	
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
	            var _vm$cmsEditor2 = vm.cmsEditor,
	                ref = _vm$cmsEditor2.ref,
	                type = _vm$cmsEditor2.type;
	
	            formService.edit(ref, type, cb);
	        };
	
	        vm.copy = function (cb) {
	            var _vm$cmsEditor3 = vm.cmsEditor,
	                ref = _vm$cmsEditor3.ref,
	                type = _vm$cmsEditor3.type;
	
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
	        var _vm$cmsEditor4 = vm.cmsEditor,
	            ref = _vm$cmsEditor4.ref,
	            type = _vm$cmsEditor4.type;
	
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
/* 166 */
/***/ function(module, exports) {

	module.exports = "<div context-menu=\"menu\"\n     ng-style=\"{display:vm.cmsMenu === 'true'?'inline-block':'block'}\">\n    <div ng-if=\"vm.cmsMenu !== 'true'\" class=\"cms cms-element-wrapper\" ng-style=\"vm.editorIcon\">\n        <div class=\"cms-element-controll-icon label label-primary\" style=\"font-size: 13px\"\n             ng-mouseover=\"vm.showControl()\" ng-show=\"vm.getControlVisible()\">\n            <i class=\"fa fa-circle-o-notch\"></i>\n        </div>\n\n        <div class=\"cms-element-controll\"\n             ng-mouseover=\"vm.__showControl = true\"\n             ng-mouseleave=\"vm.__showControl = false\"\n             ng-show=\"vm._showControl || vm.__showControl\">\n            <button type=\"button\" class=\"btn btn-sm btn-white pull-right\" ng-click=\"vm.edit()\">\n                <i class=\"fa fa-pencil-square-o\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-sm btn-white pull-right\" ng-click=\"vm.removeByDatabase()\">\n                <i class=\"fa fa-trash\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-sm btn-white pull-right\" ng-click=\"vm.remove()\">\n                <i class=\"fa fa-trash-o\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-sm btn-white pull-right\" ng-click=\"vm.copy()\">\n                <i class=\"fa fa-files-o\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-sm btn-white pull-right\" ng-click=\"vm.cmsRefresh()\">\n                <i class=\"fa fa-refresh\"></i>\n            </button>\n        </div>\n\n    </div>\n    <ng-transclude></ng-transclude>\n</div>"

/***/ },
/* 167 */
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
	                var _Type$store$vm$cmsWra = Type.store[vm.cmsWrapper],
	                    template = _Type$store$vm$cmsWra.template,
	                    serverFn = _Type$store$vm$cmsWra.serverFn,
	                    fn = _Type$store$vm$cmsWra.fn,
	                    serverFnData = _Type$store$vm$cmsWra.serverFnData,
	                    controller = _Type$store$vm$cmsWra.controller;
	
	
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
	                var _vm$element = vm.element,
	                    list = _vm$element.list,
	                    _element = _vm$element.element,
	                    _fn = _vm$element.Fn;
	
	                var _template = void 0;
	                if (!list.null) {
	                    var BindType = list.BindType,
	                        layout = list.layout,
	                        query = list.query;
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
	                    var _BindType = _element.BindType,
	                        _layout = _element.layout,
	                        model = _element.model,
	                        _query = _element.query;
	
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
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(225);

/***/ },
/* 169 */
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
	        }) : layout.SAVE[0],
	            containers = _ref.containers,
	            bind = _ref.bind,
	            BindType = _ref.BindType;
	
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
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _container = __webpack_require__(171);
	
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
/* 171 */
/***/ function(module, exports) {

	module.exports = "<i class=\"fa fa-circle-o-notch cms-element-controll-icon\"\n   ng-mouseover=\"vm.showControl()\"\n   ng-show=\"!vm._showControl && (vm.editState.editMode === 1)\"></i>\n<div class=\"cms-element-controll\"\n     ng-mouseover=\"vm.__showControl = true\"\n     ng-mouseleave=\"vm.__showControl = false\"\n     ng-show=\"vm._showControl || vm.__showControl\">\n    <button type=\"button\" class=\"btn btn-sm btn-white pull-right\" ng-click=\"\">\n        <i class=\"fa fa-plus\"></i>\n    </button>\n</div>\n<div class=\"{{vm.cmsInline === 'true'?'cms-containers-inline':'cms-containers'}}\"\n     dnd-list=\"vm.elements\"\n     dnd-disable-if=\"vm.elements.length > 0 && vm.elements[0].binding\"\n     dnd-allowed-types=\"vm.allowedTypes\"\n     dnd-horizontal-list=\"{{vm.cmsInline}}\"\n     ng-class=\"{'cms-panel-highlight':vm.highlight()}\">\n    <div ng-repeat=\"element in vm.elements\"\n         dnd-disable-if=\"element.binding || !vm.matchEditMode(element.type)\"\n         dnd-draggable=\"element\"\n         dnd-type=\"element.type\"\n         dnd-moved=\"vm.elements.splice($index, 1);\"\n         dnd-effect-allowed=\"move\"\n         dnd-dragstart=\"vm.start(element.type)\"\n         dnd-dragend=\"vm.end();\"\n         cms-element=\"element\"\n         cms-path=\"{{vm.path}}.elements[{{$index}}]\"\n         class=\"{{vm.cmsInline === 'true'?'cms-element':''}}\"\n    ></div>\n</div>\n"

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _containerEdit = __webpack_require__(173);
	
	var _containerEdit2 = _interopRequireDefault(_containerEdit);
	
	var _traverse = __webpack_require__(109);
	
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
/* 173 */
/***/ function(module, exports) {

	module.exports = "<div class=\"cms-container-panel panel panel-default ui-widget-content\"\n     ng-show=\"vm.editState.showContainerEdit\"\n     style=\"position: fixed; top: 70px; right: 50px;width: 300px;height: 600px;z-index:1000\">\n    <div class=\"panel-heading\" style=\"padding: 0px 0px 0px 10px;height: 26px;cursor: move\">\n        <div class=\"panel-title\">\n            <h5>Edit panel</h5>\n        </div>\n    </div>\n    <div class=\"panel-body\">\n        <div js-tree=\"vm.treeConfig\" ng-model=\"vm.tree\"\n             tree-events=\"changed:vm.selectNode\" tree=\"vm.treeInstance\"></div>\n    </div>\n</div>"

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var _merge = __webpack_require__(175);
	function merge() {
	    return _merge.apply(undefined, [true].concat(Array.prototype.slice.call(arguments)));
	}
	
	directive.$inject = ['cms'];
	function directive(cms) {
	
	    return {
	        // replace: true,
	        restrict: 'A',
	        scope: {},
	        bindToController: {
	            model: '=',
	            type: '@',
	            path: '@cmsFormPath',
	            extend: '=',
	            class: '@?cmsClass'
	        },
	        template: '\n        <formly-form model="vm.model" fields="vm.fields" form="vm.form" options="vm.options"></formly-form>\n        ',
	        controller: function controller() {
	            var vm = this;
	
	            var Path = _.find(cms.types[vm.type].paths, { path: vm.path });
	
	            if (Path) {
	                var field = angular.copy(_.get(cms.types[vm.type].form, Path.pathInForm));
	                if (vm.extend) merge(field, vm.extend);
	                vm.fields = [field];
	
	                if (vm.class && vm.class !== '') _.merge(vm.fields[0], { templateOptions: { class: vm.class } });
	            }
	        },
	        controllerAs: 'vm'
	    };
	}
	
	exports.default = directive;

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(336);

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	__webpack_require__(14);
	
	__webpack_require__(60);
	
	__webpack_require__(61);
	
	__webpack_require__(62);
	
	__webpack_require__(63);
	
	__webpack_require__(64);
	
	var _tpl = __webpack_require__(177);
	
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
	                    var _files = _slicedToArray(files, 1),
	                        file = _files[0];
	
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
/* 177 */
/***/ function(module, exports) {

	module.exports = "<div class=\"cms-wrapper animated fadeInRight cms-sidebar cms\">\n    <button type=\"button\" class=\"btn btn-sm btn-white cms-close-position\"\n            ng-click=\"cancel()\">\n        <i class=\"fa fa-times\"></i>\n    </button>\n\n    <div class=\"col-xs-6 col-sm-4 pull-right cms-controll-panel-right\">\n        <div ng-show=\"node\">\n            <h4>Information: </h4>\n            <h5 style=\"word-break: break-all;\">Name: {{node.text}}</h5>\n            <h5 style=\"word-break: break-all;\">Type: {{node.type}}</h5>\n            <h5 style=\"word-break: break-all;\">Path: {{node.path}}</h5>\n            <br>\n\n            <div class=\"btn-group\">\n                <button class=\"btn btn-xs btn-white cms-btn-bottom\"\n                        ng-click=\"open()\">\n                    Open page\n                </button>\n                <button class=\"btn btn-xs btn-white cms-btn-bottom\"\n                        ng-click=\"deletePage()\">\n                    Delete\n                </button>\n            </div>\n            <form role=\"form\" ng-submit=\"makeTemplate(templateName);templateName = '';\">\n                <button class=\"btn btn-xs btn-white cms-btn-bottom\"\n                        type=\"submit\" style=\"position: absolute;right: 15px;\"\n                        ng-disabled=\"!templateName\">\n                    Make template page\n                </button>\n                <input ng-model=\"templateName\" type=\"text\" class=\"form-control input-xs\" placeholder=\"template name\">\n            </form>\n            <form role=\"form\" ng-submit=\"createPage(template.selected, pageName);pageName = '';\">\n                <ui-select class=\"cms-select\" ng-model=\"template.selected\" theme=\"bootstrap\" ng-disabled=\"disabled\"\n                           style=\"min-width: 60px;\">\n                    <ui-select-match placeholder=\"Select a template page\">{{$select.selected}}</ui-select-match>\n                    <ui-select-choices repeat=\"_template in templates\">\n                        {{_template}}\n                    </ui-select-choices>\n                </ui-select>\n                <button class=\"btn btn-xs btn-white cms-btn-bottom\"\n                        type=\"submit\" style=\"position: absolute;right: 15px;\"\n                        ng-disabled=\"!pageName || !template.selected\">\n                    Create new page\n                </button>\n                <input ng-model=\"pageName\" type=\"text\" class=\"form-control input-xs\" placeholder=\"page name\">\n            </form>\n\n            <form role=\"form\" ng-submit=\"renamePage(newPageName);newPageName = '';\">\n                <button class=\"btn btn-xs btn-white cms-btn-bottom\"\n                        type=\"submit\" style=\"position: absolute;right: 15px;\"\n                        ng-disabled=\"!newPageName\">\n                    Rename\n                </button>\n                <input ng-model=\"newPageName\" type=\"text\" class=\"form-control input-xs\" placeholder=\"page name\">\n            </form>\n\n            <form role=\"form\" ng-submit=\"onFileSelect(files);\">\n                <button class=\"btn btn-xs btn-white cms-btn-bottom\"\n                        type=\"submit\" style=\"position: absolute;right: 15px;\">\n                    Up\n                </button>\n                <input type=\"file\" ngf-select ng-model=\"files\"\n                       ngf-multiple=\"true\" name=\"file\" class=\"form-control input-xs\"\n                       placeholder=\"file upload\">\n            </form>\n\n        </div>\n    </div>\n\n    <h2>Sitemaps:</h2>\n\n    <div js-tree=\"treeConfig\" ng-model=\"tree\"\n         tree-events=\"changed:selectNode\"></div>\n</div>\n"

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _tpl = __webpack_require__(179);
	
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
/* 179 */
/***/ function(module, exports) {

	module.exports = "<div style=\"margin-top: 7px;cursor: pointer;\">\n    <ui-select data-ng-model=\"vm.editState.editMode\" theme=\"bootstrap\" on-select=\"vm.onSelect($item)\">\n        <ui-select-match placeholder=\"\">\n            {{$select.selected.label}}&nbsp;&nbsp;&nbsp;\n        </ui-select-match>\n        <ui-select-choices data-repeat=\"item.value as item in vm.modes | filterBy: ['label']: $select.search\">\n            <div ng-bind-html=\"item.label | highlight: $select.search\"></div>\n        </ui-select-choices>\n    </ui-select>\n</div>\n"

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	__webpack_require__(14);
	
	__webpack_require__(60);
	
	__webpack_require__(61);
	
	__webpack_require__(62);
	
	__webpack_require__(63);
	
	__webpack_require__(64);
	
	var _module2 = __webpack_require__(161);
	
	var _module3 = _interopRequireDefault(_module2);
	
	var _module4 = __webpack_require__(162);
	
	var _module5 = _interopRequireDefault(_module4);
	
	var _cmsList = __webpack_require__(181);
	
	var _cmsList2 = _interopRequireDefault(_cmsList);
	
	var _importService2 = __webpack_require__(183);
	
	var _importService3 = _interopRequireDefault(_importService2);
	
	var _exportService2 = __webpack_require__(185);
	
	var _exportService3 = _interopRequireDefault(_exportService2);
	
	var _tpl = __webpack_require__(187);
	
	var _tpl2 = _interopRequireDefault(_tpl);
	
	var _QueryBuilder = __webpack_require__(26);
	
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
	
	        vm.openAdminPage = function () {
	            function modalCtrl($scope, $uibModalInstance) {
	                $scope.data = {
	                    list: []
	                };
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
	                    var onlyChangePage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	                    var changeAdminList = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	
	
	                    //$timeout(function () {
	                    if (!$scope.node) return;
	
	                    $timeout(function () {
	                        $scope.data.list = [];
	                    });
	
	                    $scope.data.loading = true;
	
	                    $scope.element = {};
	
	                    if (changeAdminList) {
	                        $timeout(function () {
	                            $scope.tree = cms.getAdminList();
	                            $scope.treeConfig.version++;
	                        });
	                    }
	
	                    var paramsBuilder = new _QueryBuilder2.default().part(false).limit($scope.page.limit).page($scope.page.currentPage).query($scope.node.query);
	                    if (cms.types[$scope.node.type].lean) paramsBuilder.lean();
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
	
	                    console.time('test');
	                    cms.loadElements($scope.node.type, function (list) {
	                        console.timeEnd('test');
	                        $scope.data.loading = false;
	                        $timeout(function () {
	                            var _$scope$data$list;
	
	                            (_$scope$data$list = $scope.data.list).push.apply(_$scope$data$list, _toConsumableArray(list));
	                            if ($scope.showAs.type === 'element') {
	                                $scope.selectElement($scope.data.list[0]._id);
	                            }
	                        });
	                    }, paramsBuilder);
	
	                    // number of pages;
	                    if (!onlyChangePage) cms.countElements($scope.node.type, function (count) {
	                        $timeout(function () {
	                            $scope.page.size = count;
	                        });
	                    }, paramsBuilder);
	                    //});
	
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
	                            if (q.form[0].default) q.model = _defineProperty({}, q.form[0].key, q.form[0].default);
	                            if (q.form[0].defaultValue) q.model = _defineProperty({}, q.form[0].key, q.form[0].defaultValue);
	
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
	                    _.remove($scope.data.list, e);
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
	
	        if (cms.data.online.autoOpenAdmin) vm.openAdminPage();
	
	        window._openAdminPage = function () {
	            vm.openAdminPage();
	        };
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
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _cmsList = __webpack_require__(182);
	
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
/* 182 */
/***/ function(module, exports) {

	module.exports = ""

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _importService = __webpack_require__(184);
	
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
/* 184 */
/***/ function(module, exports) {

	module.exports = "<div style=\"padding: 20px\">\n    <div class=\"panel panel-default\">\n        <div class=\"panel-body\">\n            <div js-tree=\"treeConfig\" ng-model=\"tree\"\n                 tree=\"treeInstance\"\n                 tree-events=\"changed:selectNode\"></div>\n        </div>\n    </div>\n    <br><br>\n    <button type=\"button\" class=\"btn btn-primary submit-button\" ng-click=\"choose()\">Choose</button>\n    <button type=\"button\" class=\"btn btn-primary\" ng-click=\"cancel()\">Cancel</button>\n</div>\n"

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _exportService = __webpack_require__(186);
	
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
	
	            var types = Object.keys(cms.types).map(function (k) {
	                return { text: k, value: k };
	            });
	
	            $scope.choose = function () {
	                $uibModalInstance.close({ filename: $scope.filename, types: $scope.data.types });
	            };
	
	            $scope.cancel = function () {
	                $uibModalInstance.dismiss('cancel');
	            };
	
	            $scope.options = {};
	
	            $scope.fields = [{
	                key: 'types',
	                type: 'tree',
	                templateOptions: {
	                    label: '',
	                    class: 'col-xs-12',
	                    options: types
	                }
	            }];
	        }
	
	        var modalInstance = $uibModal.open({
	            size: 'lg',
	            animation: true,
	            template: _exportService2.default,
	            controller: modalCtrl
	        });
	
	        modalInstance.result.then(function (_ref) {
	            var filename = _ref.filename,
	                types = _ref.types;
	
	            cms.exportAll(filename, types);
	        });
	    }
	
	    return {
	        start: start
	    };
	}
	
	exports.default = service;

/***/ },
/* 186 */
/***/ function(module, exports) {

	module.exports = "<div style=\"padding: 20px\">\n\n    <div class=\"panel panel-default\">\n        <div class=\"panel-body\">\n            <form role=\"form\" class=\"form-horizontal\">\n                <div class=\"form-group\">\n                    <label class=\"col-sm-12\">Filename:</label>\n                    <div class=\"col-sm-12\"><input type=\"text\" ng-model=\"filename\" class=\"form-control\"></div>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"col-sm-12\">Select Types:</label>\n                    <div class=\"cms-neutral\">\n                        <formly-form model=\"data\" fields=\"fields\" form=\"form\" options=\"options\"></formly-form>\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n\n\n    <br><br>\n    <button type=\"button\" class=\"btn btn-primary submit-button\" ng-click=\"choose()\">Choose</button>\n    <button type=\"button\" class=\"btn btn-primary\" ng-click=\"cancel()\">Cancel</button>\n</div>\n"

/***/ },
/* 187 */
/***/ function(module, exports) {

	module.exports = "<div class=\"cms-wrapper animated fadeInRight cms-sidebar cms\">\n    <button type=\"button\" class=\"btn btn-sm btn-white cms-close-position\"\n            ng-click=\"cancel()\">\n        <i class=\"fa fa-times\"></i>\n    </button>\n\n    <br>\n    <div class=\"row\">\n        <div class=\"col-xs-3 cms-panel\">\n            <div class=\"panel panel-primary\">\n                <div class=\"panel-heading\">Types</div>\n                <div class=\"panel-body\">\n                    <div js-tree=\"treeConfig\" ng-model=\"tree\"\n                         tree-events=\"changed:selectNode\" tree=\"treeInstance\"></div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-xs-9 cms-panel\">\n            <div class=\"panel panel-primary\">\n                <div class=\"panel-heading\">\n                    <div class=\"cms-admin-right-panel\">\n                        <label style=\"color: white\"> {{'Show' | translate}} : </label>\n\n                        <ui-select style=\"min-width: 50px;margin-left: 10px;margin-right: 10px;\"\n                                   class=\"cms-select\" data-ng-model=\"page.limit\" theme=\"bootstrap\"\n                                   on-select=\"refresh()\">\n                            <ui-select-match placeholder=\"\">{{$select.selected}}&nbsp;&nbsp;</ui-select-match>\n                            <ui-select-choices data-repeat=\"item in [10,25,50,100,200]\">{{item}}</ui-select-choices>\n                        </ui-select>\n\n                        <ui-select style=\"min-width: 60px;margin-left: 10px;margin-right: 10px;\"\n                                   class=\"cms-select\" data-ng-model=\"showAs.type\" theme=\"bootstrap\"\n                                   on-select=\"refresh()\">\n                            <ui-select-match placeholder=\"\">\n                                {{$select.selected.label}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</ui-select-match>\n                            <ui-select-choices\n                                    data-repeat=\"item.value as item in [{value:'list',label:'List'},{value:'table',label:'Table'},{value:'element',label:'Element'}]\">\n                                {{item.label}}\n                            </ui-select-choices>\n                        </ui-select>\n\n                        <div class=\"btn-group btn-group-xs\" style=\"margin-top: -12px;margin-right: 10px;\">\n                            <button type=\"button\" class=\"btn btn-white\" ng-click=\"setting()\">{{'Setting' | translate}}\n                            </button>\n                            <button type=\"button\" class=\"btn btn-white dropdown-toggle\" data-toggle=\"dropdown\">\n                                <span class=\"caret\"></span>\n                            </button>\n                            <ul class=\"dropdown-menu\" role=\"menu\" style=\"z-index: 10000 !important;\">\n                                <li><a href ng-click=\"deleteAll()\">{{'DeleteAll' | translate}}</a></li>\n                                <li><a href ng-click=\"import()\">Import</a></li>\n                                <li><a href ng-click=\"export()\">Export</a></li>\n\n                            </ul>\n                        </div>\n\n                        <button class=\"btn btn-white btn-xs\" ng-click=\"add()\">\n                            {{'Add' | translate}}\n                        </button>\n\n                    </div>\n\n                    <input type=\"text\" class=\"form-control input-xs\"\n                           style=\"margin-left: 10px;width: 100px;display: inline-block;\"\n                           ng-model=\"search.text\" ng-model-options=\"{debounce: 300}\" placeholder=\"search ...\">\n\n                    <div ng-if=\"queries && queries.length > 0\">\n                        <hr style=\"margin-top: 10px;margin-bottom: 5px;\">\n\n                        <div class=\"cms-admin-heading-form\" style=\"height: 60px;\">\n                            <formly-form ng-repeat=\"query in queries\" model=\"query.model\" fields=\"query.form\"\n                                         form=\"form\"\n                                         options=\"options\">\n                            </formly-form>\n                        </div>\n                    </div>\n\n                </div>\n                <div class=\"panel-body\" ng-if=\"node\">\n\n                    <div style=\"width: 100%;overflow-x: auto\" ng-if=\"showAs.type === 'table'\">\n                        <table class=\"table cms-admin-table\">\n                            <thead>\n                            <tr>\n                                <th ng-repeat=\"col in node.columns track by $index\" ng-bind=\"col.label\"></th>\n                                <th>Edit</th>\n                            </tr>\n                            </thead>\n                            <tbody>\n                            <tr ng-repeat=\"element in data.list track by $index\">\n                                <td ng-repeat=\"col in node.columns track by $index\">\n                                <span cms-direct-editable=\"model.{{col.value}}\"\n                                      cms-value=\"element[col.value]\"\n                                      cms-ref=\"{{element._id}}\"\n                                      cms-type=\"{{node.type}}\"></span>\n                                </td>\n                                <td>\n                                    <div cms-editor=\"{ref: element._id, type: node.type}\"\n                                         cms-remove=\"remove(element)\"></div>\n                                </td>\n                            </tr>\n                            </tbody>\n                        </table>\n                    </div>\n\n                    <div ng-show=\"data.loading\">\n                        <img src=\"/build/images/ajax-loader.gif\">\n                    </div>\n\n                    <div class=\"cms-panel-list-content\" ng-if=\"showAs.type === 'list'\">\n                        <div ng-repeat=\"element in data.list track by $index\"\n                             ng-class=\"elementClass\"\n                             cms-element=\"{ref: element._id, type: node.type, containers: {}}\"\n                             dnd-moved=\"remove(element)\"\n                             inline=\"false\"></div>\n                    </div>\n\n                    <div class=\"\" ng-if=\"showAs.type === 'element'\">\n                        <button class=\"btn cms-btn btn-primary btn-outline btn-xs\" style=\"margin-right: 10px;\"\n                                ng-repeat=\"e in data.list track by $index\"\n                                ng-click=\"selectElement(e._id);\" ng-show=\"data.list.length > 1\">\n                            {{getTitle(node.type, e._id)}}\n                        </button>\n                        <div ng-show=\"data.list.length > 1\">\n                            <br><br>\n                        </div>\n\n                        <div ng-if=\"element._id\"\n                             cms-element=\"{ref: element._id, type: node.type, containers: {}}\"\n                             inline=\"false\"></div>\n                    </div>\n\n                    <div class=\"clearfix\"></div>\n\n                    <ul uib-pagination\n                        ng-show=\"page.size > 1\"\n                        total-items=\"page.size\"\n                        ng-model=\"page.currentPage\"\n                        class=\"pagination-sm\"\n                        items-per-page=\"page.limit\"\n                        ng-change=\"refresh(true)\"\n                        max-size=\"10\"\n                        boundary-link-numbers=\"true\"></ul>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>\n"

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _common = __webpack_require__(100);
	
	var _common2 = _interopRequireDefault(_common);
	
	var _cmsNav = __webpack_require__(189);
	
	var _cmsNav2 = _interopRequireDefault(_cmsNav);
	
	var _module2 = __webpack_require__(180);
	
	var _module3 = _interopRequireDefault(_module2);
	
	var _module4 = __webpack_require__(158);
	
	var _module5 = _interopRequireDefault(_module4);
	
	var _module6 = __webpack_require__(176);
	
	var _module7 = _interopRequireDefault(_module6);
	
	var _module8 = __webpack_require__(178);
	
	var _module9 = _interopRequireDefault(_module8);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _module = angular.module('components.cmsNav', [_common2.default, _module3.default, _module5.default, _module7.default, _module9.default]).directive('cmsNav', _cmsNav2.default);
	
	exports.default = _module.name;

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _cmsNav = __webpack_require__(190);
	
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
/* 190 */
/***/ function(module, exports) {

	module.exports = "<div class=\"cms\">\n    <nav role=\"navigation\" class=\"navbar navbar-fixed-top navbar-default cms-menu\">\n        <div class=\"container\">\n            <div class=\"navbar-header\">\n                <button type=\"button\" data-toggle=\"collapse\" data-target=\"#dropdown_menu\" aria-expanded=\"false\"\n                        aria-controls=\"navbar\" class=\"navbar-toggle collapsed\"><span\n                        class=\"sr-only\">Toggle navigation</span><span class=\"icon-bar\"></span><span\n                        class=\"icon-bar\"></span><span\n                        class=\"icon-bar\"></span></button>\n                <a href=\"#\" class=\"navbar-brand\">Cms Mon</a></div>\n            <div id=\"dropdown_menu\" class=\"collapse navbar-collapse\">\n                <ul class=\"nav navbar-nav\">\n                    <li class=\"dropdown cms-types-dropdown\">\n                        <a href=\"#\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\"\n                                            class=\"dropdown-toggle\">Types<span class=\"caret\"></span></a>\n                        <ul role=\"menu\" cms-types=\"\" class=\"dropdown-menu\"></ul>\n                    </li>\n                    <li><a cms-admin>Admin</a></li>\n                    <li><a href=\"#\" cms-sitemap>Sitemap</a></li>\n                </ul>\n                <ul class=\"nav navbar-nav navbar-right\">\n                    <li>\n                        <div cms-edit-state></div>\n                    </li>\n                    <li><button class=\"btn btn-default navbar-btn\"\n                                style=\"margin-left: 10px\"\n                                ng-click=\"vm.toggleContainer()\">Container</button></li>\n                </ul>\n            </div>\n        </div>\n    </nav>\n</div>"

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map