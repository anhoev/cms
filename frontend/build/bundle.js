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
	
	var _module3 = __webpack_require__(111);
	
	var _module4 = _interopRequireDefault(_module3);
	
	var _module5 = __webpack_require__(114);
	
	var _module6 = _interopRequireDefault(_module5);
	
	var _module7 = __webpack_require__(128);
	
	var _module8 = _interopRequireDefault(_module7);
	
	var _module9 = __webpack_require__(130);
	
	var _module10 = _interopRequireDefault(_module9);
	
	var _module11 = __webpack_require__(132);
	
	var _module12 = _interopRequireDefault(_module11);
	
	var _module13 = __webpack_require__(140);
	
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
	        }
	    };
	
	    if ($scope.to.async) {
	        $scope.config.load = function (query, callback) {
	            var queryBuilder = new _QueryBuilder2.default().limit(100).query({ _textIndex: new RegExp(query, 'i') });
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
	        } else if (Array.isArray($scope.model[$scope.options.key]) && $scope.model[$scope.options.key][0]._id) {
	            $scope._model = $scope.model[$scope.options.key].map(function (m) {
	                return m._id;
	            });
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

	module.exports = (__webpack_require__(2))(337);

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(353);

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
/* 40 */
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

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_LOCAL_MODULE_0__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_LOCAL_MODULE_1__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function($, jQuery) {/**
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
	 * selectize.js (v0.12.3)
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
		jQuery.fn.removeHighlight = function() {
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
					dest && dest.focus();
		
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(1)))

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
	                scope.$watch('ngModel', setSelectizeValue);
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
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
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
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
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
	        var onfly = arguments.length <= 4 || arguments[4] === undefined ? true : arguments[4];
	
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
	        var onfly = arguments.length <= 3 || arguments[3] === undefined ? true : arguments[3];
	
	        return getType(type, null, cb, content, onfly);
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
	
	
	            if (_.find(Types[type].list, { _id: model._id })) {
	                _.remove(Types[type].list, { _id: model._id });
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
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(335);

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

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * angular-translate - v2.12.1 - 2016-09-15
	 * 
	 * Copyright (c) 2016 The angular-translate team, Pascal Precht; Licensed MIT
	 */
	(function (root, factory) {
	  if (true) {
	    // AMD. Register as an anonymous module unless amdModuleId is set
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	      return (factory());
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports === 'object') {
	    // Node. Does not work with strict CommonJS, but
	    // only CommonJS-like environments that support module.exports,
	    // like Node.
	    module.exports = factory();
	  } else {
	    factory();
	  }
	}(this, function () {
	
	/**
	 * @ngdoc overview
	 * @name pascalprecht.translate
	 *
	 * @description
	 * The main module which holds everything together.
	 */
	runTranslate.$inject = ['$translate'];
	$translate.$inject = ['$STORAGE_KEY', '$windowProvider', '$translateSanitizationProvider', 'pascalprechtTranslateOverrider'];
	$translateDefaultInterpolation.$inject = ['$interpolate', '$translateSanitization'];
	translateDirective.$inject = ['$translate', '$interpolate', '$compile', '$parse', '$rootScope'];
	translateAttrDirective.$inject = ['$translate', '$rootScope'];
	translateCloakDirective.$inject = ['$translate', '$rootScope'];
	translateFilterFactory.$inject = ['$parse', '$translate'];
	$translationCache.$inject = ['$cacheFactory'];
	angular.module('pascalprecht.translate', ['ng'])
	  .run(runTranslate);
	
	function runTranslate($translate) {
	
	  'use strict';
	
	  var key = $translate.storageKey(),
	    storage = $translate.storage();
	
	  var fallbackFromIncorrectStorageValue = function () {
	    var preferred = $translate.preferredLanguage();
	    if (angular.isString(preferred)) {
	      $translate.use(preferred);
	      // $translate.use() will also remember the language.
	      // So, we don't need to call storage.put() here.
	    } else {
	      storage.put(key, $translate.use());
	    }
	  };
	
	  fallbackFromIncorrectStorageValue.displayName = 'fallbackFromIncorrectStorageValue';
	
	  if (storage) {
	    if (!storage.get(key)) {
	      fallbackFromIncorrectStorageValue();
	    } else {
	      $translate.use(storage.get(key))['catch'](fallbackFromIncorrectStorageValue);
	    }
	  } else if (angular.isString($translate.preferredLanguage())) {
	    $translate.use($translate.preferredLanguage());
	  }
	}
	
	runTranslate.displayName = 'runTranslate';
	
	/**
	 * @ngdoc object
	 * @name pascalprecht.translate.$translateSanitizationProvider
	 *
	 * @description
	 *
	 * Configurations for $translateSanitization
	 */
	angular.module('pascalprecht.translate').provider('$translateSanitization', $translateSanitizationProvider);
	
	function $translateSanitizationProvider () {
	
	  'use strict';
	
	  var $sanitize,
	      $sce,
	      currentStrategy = null, // TODO change to either 'sanitize', 'escape' or ['sanitize', 'escapeParameters'] in 3.0.
	      hasConfiguredStrategy = false,
	      hasShownNoStrategyConfiguredWarning = false,
	      strategies;
	
	  /**
	   * Definition of a sanitization strategy function
	   * @callback StrategyFunction
	   * @param {string|object} value - value to be sanitized (either a string or an interpolated value map)
	   * @param {string} mode - either 'text' for a string (translation) or 'params' for the interpolated params
	   * @return {string|object}
	   */
	
	  /**
	   * @ngdoc property
	   * @name strategies
	   * @propertyOf pascalprecht.translate.$translateSanitizationProvider
	   *
	   * @description
	   * Following strategies are built-in:
	   * <dl>
	   *   <dt>sanitize</dt>
	   *   <dd>Sanitizes HTML in the translation text using $sanitize</dd>
	   *   <dt>escape</dt>
	   *   <dd>Escapes HTML in the translation</dd>
	   *   <dt>sanitizeParameters</dt>
	   *   <dd>Sanitizes HTML in the values of the interpolation parameters using $sanitize</dd>
	   *   <dt>escapeParameters</dt>
	   *   <dd>Escapes HTML in the values of the interpolation parameters</dd>
	   *   <dt>escaped</dt>
	   *   <dd>Support legacy strategy name 'escaped' for backwards compatibility (will be removed in 3.0)</dd>
	   * </dl>
	   *
	   */
	
	  strategies = {
	    sanitize: function (value, mode/*, context*/) {
	      if (mode === 'text') {
	        value = htmlSanitizeValue(value);
	      }
	      return value;
	    },
	    escape: function (value, mode/*, context*/) {
	      if (mode === 'text') {
	        value = htmlEscapeValue(value);
	      }
	      return value;
	    },
	    sanitizeParameters: function (value, mode/*, context*/) {
	      if (mode === 'params') {
	        value = mapInterpolationParameters(value, htmlSanitizeValue);
	      }
	      return value;
	    },
	    escapeParameters: function (value, mode/*, context*/) {
	      if (mode === 'params') {
	        value = mapInterpolationParameters(value, htmlEscapeValue);
	      }
	      return value;
	    },
	    sce: function (value, mode, context) {
	      if (mode === 'text') {
	        value = htmlTrustValue(value);
	      } else if (mode === 'params') {
	        if (context !== 'filter') {
	          // do html escape in filter context #1101
	          value = mapInterpolationParameters(value, htmlEscapeValue);
	        }
	      }
	      return value;
	    },
	    sceParameters: function (value, mode/*, context*/) {
	      if (mode === 'params') {
	        value = mapInterpolationParameters(value, htmlTrustValue);
	      }
	      return value;
	    }
	  };
	  // Support legacy strategy name 'escaped' for backwards compatibility.
	  // TODO should be removed in 3.0
	  strategies.escaped = strategies.escapeParameters;
	
	  /**
	   * @ngdoc function
	   * @name pascalprecht.translate.$translateSanitizationProvider#addStrategy
	   * @methodOf pascalprecht.translate.$translateSanitizationProvider
	   *
	   * @description
	   * Adds a sanitization strategy to the list of known strategies.
	   *
	   * @param {string} strategyName - unique key for a strategy
	   * @param {StrategyFunction} strategyFunction - strategy function
	   * @returns {object} this
	   */
	  this.addStrategy = function (strategyName, strategyFunction) {
	    strategies[strategyName] = strategyFunction;
	    return this;
	  };
	
	  /**
	   * @ngdoc function
	   * @name pascalprecht.translate.$translateSanitizationProvider#removeStrategy
	   * @methodOf pascalprecht.translate.$translateSanitizationProvider
	   *
	   * @description
	   * Removes a sanitization strategy from the list of known strategies.
	   *
	   * @param {string} strategyName - unique key for a strategy
	   * @returns {object} this
	   */
	  this.removeStrategy = function (strategyName) {
	    delete strategies[strategyName];
	    return this;
	  };
	
	  /**
	   * @ngdoc function
	   * @name pascalprecht.translate.$translateSanitizationProvider#useStrategy
	   * @methodOf pascalprecht.translate.$translateSanitizationProvider
	   *
	   * @description
	   * Selects a sanitization strategy. When an array is provided the strategies will be executed in order.
	   *
	   * @param {string|StrategyFunction|array} strategy The sanitization strategy / strategies which should be used. Either a name of an existing strategy, a custom strategy function, or an array consisting of multiple names and / or custom functions.
	   * @returns {object} this
	   */
	  this.useStrategy = function (strategy) {
	    hasConfiguredStrategy = true;
	    currentStrategy = strategy;
	    return this;
	  };
	
	  /**
	   * @ngdoc object
	   * @name pascalprecht.translate.$translateSanitization
	   * @requires $injector
	   * @requires $log
	   *
	   * @description
	   * Sanitizes interpolation parameters and translated texts.
	   *
	   */
	  this.$get = ['$injector', '$log', function ($injector, $log) {
	
	    var cachedStrategyMap = {};
	
	    var applyStrategies = function (value, mode, context, selectedStrategies) {
	      angular.forEach(selectedStrategies, function (selectedStrategy) {
	        if (angular.isFunction(selectedStrategy)) {
	          value = selectedStrategy(value, mode, context);
	        } else if (angular.isFunction(strategies[selectedStrategy])) {
	          value = strategies[selectedStrategy](value, mode, context);
	        } else if (angular.isString(strategies[selectedStrategy])) {
	          if (!cachedStrategyMap[strategies[selectedStrategy]]) {
	            try {
	              cachedStrategyMap[strategies[selectedStrategy]] = $injector.get(strategies[selectedStrategy]);
	            } catch (e) {
	              cachedStrategyMap[strategies[selectedStrategy]] = function() {};
	              throw new Error('pascalprecht.translate.$translateSanitization: Unknown sanitization strategy: \'' + selectedStrategy + '\'');
	            }
	          }
	          value = cachedStrategyMap[strategies[selectedStrategy]](value, mode, context);
	        } else {
	          throw new Error('pascalprecht.translate.$translateSanitization: Unknown sanitization strategy: \'' + selectedStrategy + '\'');
	        }
	      });
	      return value;
	    };
	
	    // TODO: should be removed in 3.0
	    var showNoStrategyConfiguredWarning = function () {
	      if (!hasConfiguredStrategy && !hasShownNoStrategyConfiguredWarning) {
	        $log.warn('pascalprecht.translate.$translateSanitization: No sanitization strategy has been configured. This can have serious security implications. See http://angular-translate.github.io/docs/#/guide/19_security for details.');
	        hasShownNoStrategyConfiguredWarning = true;
	      }
	    };
	
	    if ($injector.has('$sanitize')) {
	      $sanitize = $injector.get('$sanitize');
	    }
	    if ($injector.has('$sce')) {
	      $sce = $injector.get('$sce');
	    }
	
	    return {
	      /**
	       * @ngdoc function
	       * @name pascalprecht.translate.$translateSanitization#useStrategy
	       * @methodOf pascalprecht.translate.$translateSanitization
	       *
	       * @description
	       * Selects a sanitization strategy. When an array is provided the strategies will be executed in order.
	       *
	       * @param {string|StrategyFunction|array} strategy The sanitization strategy / strategies which should be used. Either a name of an existing strategy, a custom strategy function, or an array consisting of multiple names and / or custom functions.
	       */
	      useStrategy: (function (self) {
	        return function (strategy) {
	          self.useStrategy(strategy);
	        };
	      })(this),
	
	      /**
	       * @ngdoc function
	       * @name pascalprecht.translate.$translateSanitization#sanitize
	       * @methodOf pascalprecht.translate.$translateSanitization
	       *
	       * @description
	       * Sanitizes a value.
	       *
	       * @param {string|object} value The value which should be sanitized.
	       * @param {string} mode The current sanitization mode, either 'params' or 'text'.
	       * @param {string|StrategyFunction|array} [strategy] Optional custom strategy which should be used instead of the currently selected strategy.
	       * @param {string} [context] The context of this call: filter, service. Default is service
	       * @returns {string|object} sanitized value
	       */
	      sanitize: function (value, mode, strategy, context) {
	        if (!currentStrategy) {
	          showNoStrategyConfiguredWarning();
	        }
	
	        if (!strategy && strategy !== null) {
	          strategy = currentStrategy;
	        }
	
	        if (!strategy) {
	          return value;
	        }
	
	        if (!context) {
	          context = 'service';
	        }
	
	        var selectedStrategies = angular.isArray(strategy) ? strategy : [strategy];
	        return applyStrategies(value, mode, context, selectedStrategies);
	      }
	    };
	  }];
	
	  var htmlEscapeValue = function (value) {
	    var element = angular.element('<div></div>');
	    element.text(value); // not chainable, see #1044
	    return element.html();
	  };
	
	  var htmlSanitizeValue = function (value) {
	    if (!$sanitize) {
	      throw new Error('pascalprecht.translate.$translateSanitization: Error cannot find $sanitize service. Either include the ngSanitize module (https://docs.angularjs.org/api/ngSanitize) or use a sanitization strategy which does not depend on $sanitize, such as \'escape\'.');
	    }
	    return $sanitize(value);
	  };
	
	  var htmlTrustValue = function (value) {
	    if (!$sce) {
	      throw new Error('pascalprecht.translate.$translateSanitization: Error cannot find $sce service.');
	    }
	    return $sce.trustAsHtml(value);
	  };
	
	  var mapInterpolationParameters = function (value, iteratee, stack) {
	    if (angular.isDate(value)) {
	      return value;
	    } else if (angular.isObject(value)) {
	      var result = angular.isArray(value) ? [] : {};
	
	      if (!stack) {
	        stack = [];
	      } else {
	        if (stack.indexOf(value) > -1) {
	          throw new Error('pascalprecht.translate.$translateSanitization: Error cannot interpolate parameter due recursive object');
	        }
	      }
	
	      stack.push(value);
	      angular.forEach(value, function (propertyValue, propertyKey) {
	
	        /* Skipping function properties. */
	        if (angular.isFunction(propertyValue)) {
	          return;
	        }
	
	        result[propertyKey] = mapInterpolationParameters(propertyValue, iteratee, stack);
	      });
	      stack.splice(-1, 1); // remove last
	
	      return result;
	    } else if (angular.isNumber(value)) {
	      return value;
	    } else {
	      return iteratee(value);
	    }
	  };
	}
	
	/**
	 * @ngdoc object
	 * @name pascalprecht.translate.$translateProvider
	 * @description
	 *
	 * $translateProvider allows developers to register translation-tables, asynchronous loaders
	 * and similar to configure translation behavior directly inside of a module.
	 *
	 */
	angular.module('pascalprecht.translate')
	.constant('pascalprechtTranslateOverrider', {})
	.provider('$translate', $translate);
	
	function $translate($STORAGE_KEY, $windowProvider, $translateSanitizationProvider, pascalprechtTranslateOverrider) {
	
	  'use strict';
	
	  var $translationTable = {},
	      $preferredLanguage,
	      $availableLanguageKeys = [],
	      $languageKeyAliases,
	      $fallbackLanguage,
	      $fallbackWasString,
	      $uses,
	      $nextLang,
	      $storageFactory,
	      $storageKey = $STORAGE_KEY,
	      $storagePrefix,
	      $missingTranslationHandlerFactory,
	      $interpolationFactory,
	      $interpolatorFactories = [],
	      $loaderFactory,
	      $cloakClassName = 'translate-cloak',
	      $loaderOptions,
	      $notFoundIndicatorLeft,
	      $notFoundIndicatorRight,
	      $postCompilingEnabled = false,
	      $forceAsyncReloadEnabled = false,
	      $nestedObjectDelimeter = '.',
	      $isReady = false,
	      $keepContent = false,
	      loaderCache,
	      directivePriority = 0,
	      statefulFilter = true,
	      postProcessFn,
	      uniformLanguageTagResolver = 'default',
	      languageTagResolver = {
	        'default': function (tag) {
	          return (tag || '').split('-').join('_');
	        },
	        java: function (tag) {
	          var temp = (tag || '').split('-').join('_');
	          var parts = temp.split('_');
	          return parts.length > 1 ? (parts[0].toLowerCase() + '_' + parts[1].toUpperCase()) : temp;
	        },
	        bcp47: function (tag) {
	          var temp = (tag || '').split('_').join('-');
	          var parts = temp.split('-');
	          return parts.length > 1 ? (parts[0].toLowerCase() + '-' + parts[1].toUpperCase()) : temp;
	        },
	        'iso639-1': function (tag) {
	          var temp = (tag || '').split('_').join('-');
	          var parts = temp.split('-');
	          return parts[0].toLowerCase();
	        }
	      };
	
	  var version = '2.12.1';
	
	  // tries to determine the browsers language
	  var getFirstBrowserLanguage = function () {
	
	    // internal purpose only
	    if (angular.isFunction(pascalprechtTranslateOverrider.getLocale)) {
	      return pascalprechtTranslateOverrider.getLocale();
	    }
	
	    var nav = $windowProvider.$get().navigator,
	        browserLanguagePropertyKeys = ['language', 'browserLanguage', 'systemLanguage', 'userLanguage'],
	        i,
	        language;
	
	    // support for HTML 5.1 "navigator.languages"
	    if (angular.isArray(nav.languages)) {
	      for (i = 0; i < nav.languages.length; i++) {
	        language = nav.languages[i];
	        if (language && language.length) {
	          return language;
	        }
	      }
	    }
	
	    // support for other well known properties in browsers
	    for (i = 0; i < browserLanguagePropertyKeys.length; i++) {
	      language = nav[browserLanguagePropertyKeys[i]];
	      if (language && language.length) {
	        return language;
	      }
	    }
	
	    return null;
	  };
	  getFirstBrowserLanguage.displayName = 'angular-translate/service: getFirstBrowserLanguage';
	
	  // tries to determine the browsers locale
	  var getLocale = function () {
	    var locale = getFirstBrowserLanguage() || '';
	    if (languageTagResolver[uniformLanguageTagResolver]) {
	      locale = languageTagResolver[uniformLanguageTagResolver](locale);
	    }
	    return locale;
	  };
	  getLocale.displayName = 'angular-translate/service: getLocale';
	
	  /**
	   * @name indexOf
	   * @private
	   *
	   * @description
	   * indexOf polyfill. Kinda sorta.
	   *
	   * @param {array} array Array to search in.
	   * @param {string} searchElement Element to search for.
	   *
	   * @returns {int} Index of search element.
	   */
	  var indexOf = function(array, searchElement) {
	    for (var i = 0, len = array.length; i < len; i++) {
	      if (array[i] === searchElement) {
	        return i;
	      }
	    }
	    return -1;
	  };
	
	  /**
	   * @name trim
	   * @private
	   *
	   * @description
	   * trim polyfill
	   *
	   * @returns {string} The string stripped of whitespace from both ends
	   */
	  var trim = function() {
	    return this.toString().replace(/^\s+|\s+$/g, '');
	  };
	
	  var negotiateLocale = function (preferred) {
	    if(!preferred) {
	      return;
	    }
	
	    var avail = [],
	        locale = angular.lowercase(preferred),
	        i = 0,
	        n = $availableLanguageKeys.length;
	
	    for (; i < n; i++) {
	      avail.push(angular.lowercase($availableLanguageKeys[i]));
	    }
	
	    // Check for an exact match in our list of available keys
	    if (indexOf(avail, locale) > -1) {
	      return preferred;
	    }
	
	    if ($languageKeyAliases) {
	      var alias;
	      for (var langKeyAlias in $languageKeyAliases) {
	        if ($languageKeyAliases.hasOwnProperty(langKeyAlias)) {
	          var hasWildcardKey = false;
	          var hasExactKey = Object.prototype.hasOwnProperty.call($languageKeyAliases, langKeyAlias) &&
	            angular.lowercase(langKeyAlias) === angular.lowercase(preferred);
	
	          if (langKeyAlias.slice(-1) === '*') {
	            hasWildcardKey = langKeyAlias.slice(0, -1) === preferred.slice(0, langKeyAlias.length - 1);
	          }
	          if (hasExactKey || hasWildcardKey) {
	            alias = $languageKeyAliases[langKeyAlias];
	            if (indexOf(avail, angular.lowercase(alias)) > -1) {
	              return alias;
	            }
	          }
	        }
	      }
	    }
	
	    // Check for a language code without region
	    var parts = preferred.split('_');
	
	    if (parts.length > 1 && indexOf(avail, angular.lowercase(parts[0])) > -1) {
	      return parts[0];
	    }
	
	    // If everything fails, return undefined.
	    return;
	  };
	
	  /**
	   * @ngdoc function
	   * @name pascalprecht.translate.$translateProvider#translations
	   * @methodOf pascalprecht.translate.$translateProvider
	   *
	   * @description
	   * Registers a new translation table for specific language key.
	   *
	   * To register a translation table for specific language, pass a defined language
	   * key as first parameter.
	   *
	   * <pre>
	   *  // register translation table for language: 'de_DE'
	   *  $translateProvider.translations('de_DE', {
	   *    'GREETING': 'Hallo Welt!'
	   *  });
	   *
	   *  // register another one
	   *  $translateProvider.translations('en_US', {
	   *    'GREETING': 'Hello world!'
	   *  });
	   * </pre>
	   *
	   * When registering multiple translation tables for for the same language key,
	   * the actual translation table gets extended. This allows you to define module
	   * specific translation which only get added, once a specific module is loaded in
	   * your app.
	   *
	   * Invoking this method with no arguments returns the translation table which was
	   * registered with no language key. Invoking it with a language key returns the
	   * related translation table.
	   *
	   * @param {string} langKey A language key.
	   * @param {object} translationTable A plain old JavaScript object that represents a translation table.
	   *
	   */
	  var translations = function (langKey, translationTable) {
	
	    if (!langKey && !translationTable) {
	      return $translationTable;
	    }
	
	    if (langKey && !translationTable) {
	      if (angular.isString(langKey)) {
	        return $translationTable[langKey];
	      }
	    } else {
	      if (!angular.isObject($translationTable[langKey])) {
	        $translationTable[langKey] = {};
	      }
	      angular.extend($translationTable[langKey], flatObject(translationTable));
	    }
	    return this;
	  };
	
	  this.translations = translations;
	
	  /**
	   * @ngdoc function
	   * @name pascalprecht.translate.$translateProvider#cloakClassName
	   * @methodOf pascalprecht.translate.$translateProvider
	   *
	   * @description
	   *
	   * Let's you change the class name for `translate-cloak` directive.
	   * Default class name is `translate-cloak`.
	   *
	   * @param {string} name translate-cloak class name
	   */
	  this.cloakClassName = function (name) {
	    if (!name) {
	      return $cloakClassName;
	    }
	    $cloakClassName = name;
	    return this;
	  };
	
	  /**
	   * @ngdoc function
	   * @name pascalprecht.translate.$translateProvider#nestedObjectDelimeter
	   * @methodOf pascalprecht.translate.$translateProvider
	   *
	   * @description
	   *
	   * Let's you change the delimiter for namespaced translations.
	   * Default delimiter is `.`.
	   *
	   * @param {string} delimiter namespace separator
	   */
	  this.nestedObjectDelimeter = function (delimiter) {
	    if (!delimiter) {
	      return $nestedObjectDelimeter;
	    }
	    $nestedObjectDelimeter = delimiter;
	    return this;
	  };
	
	  /**
	   * @name flatObject
	   * @private
	   *
	   * @description
	   * Flats an object. This function is used to flatten given translation data with
	   * namespaces, so they are later accessible via dot notation.
	   */
	  var flatObject = function (data, path, result, prevKey) {
	    var key, keyWithPath, keyWithShortPath, val;
	
	    if (!path) {
	      path = [];
	    }
	    if (!result) {
	      result = {};
	    }
	    for (key in data) {
	      if (!Object.prototype.hasOwnProperty.call(data, key)) {
	        continue;
	      }
	      val = data[key];
	      if (angular.isObject(val)) {
	        flatObject(val, path.concat(key), result, key);
	      } else {
	        keyWithPath = path.length ? ('' + path.join($nestedObjectDelimeter) + $nestedObjectDelimeter + key) : key;
	        if(path.length && key === prevKey){
	          // Create shortcut path (foo.bar == foo.bar.bar)
	          keyWithShortPath = '' + path.join($nestedObjectDelimeter);
	          // Link it to original path
	          result[keyWithShortPath] = '@:' + keyWithPath;
	        }
	        result[keyWithPath] = val;
	      }
	    }
	    return result;
	  };
	  flatObject.displayName = 'flatObject';
	
	  /**
	   * @ngdoc function
	   * @name pascalprecht.translate.$translateProvider#addInterpolation
	   * @methodOf pascalprecht.translate.$translateProvider
	   *
	   * @description
	   * Adds interpolation services to angular-translate, so it can manage them.
	   *
	   * @param {object} factory Interpolation service factory
	   */
	  this.addInterpolation = function (factory) {
	    $interpolatorFactories.push(factory);
	    return this;
	  };
	
	  /**
	   * @ngdoc function
	   * @name pascalprecht.translate.$translateProvider#useMessageFormatInterpolation
	   * @methodOf pascalprecht.translate.$translateProvider
	   *
	   * @description
	   * Tells angular-translate to use interpolation functionality of messageformat.js.
	   * This is useful when having high level pluralization and gender selection.
	   */
	  this.useMessageFormatInterpolation = function () {
	    return this.useInterpolation('$translateMessageFormatInterpolation');
	  };
	
	  /**
	   * @ngdoc function
	   * @name pascalprecht.translate.$translateProvider#useInterpolation
	   * @methodOf pascalprecht.translate.$translateProvider
	   *
	   * @description
	   * Tells angular-translate which interpolation style to use as default, application-wide.
	   * Simply pass a factory/service name. The interpolation service has to implement
	   * the correct interface.
	   *
	   * @param {string} factory Interpolation service name.
	   */
	  this.useInterpolation = function (factory) {
	    $interpolationFactory = factory;
	    return this;
	  };
	
	  /**
	   * @ngdoc function
	   * @name pascalprecht.translate.$translateProvider#useSanitizeStrategy
	   * @methodOf pascalprecht.translate.$translateProvider
	   *
	   * @description
	   * Simply sets a sanitation strategy type.
	   *
	   * @param {string} value Strategy type.
	   */
	  this.useSanitizeValueStrategy = function (value) {
	    $translateSanitizationProvider.useStrategy(value);
	    return this;
	  };
	
	 /**
	   * @ngdoc function
	   * @name pascalprecht.translate.$translateProvider#preferredLanguage
	   * @methodOf pascalprecht.translate.$translateProvider
	   *
	   * @description
	   * Tells the module which of the registered translation tables to use for translation
	   * at initial startup by passing a language key. Similar to `$translateProvider#use`
	   * only that it says which language to **prefer**.
	   *
	   * @param {string} langKey A language key.
	   */
	  this.preferredLanguage = function(langKey) {
	    if (langKey) {
	      setupPreferredLanguage(langKey);
	      return this;
	    }
	    return $preferredLanguage;
	  };
	  var setupPreferredLanguage = function (langKey) {
	    if (langKey) {
	      $preferredLanguage = langKey;
	    }
	    return $preferredLanguage;
	  };
	  /**
	   * @ngdoc function
	   * @name pascalprecht.translate.$translateProvider#translationNotFoundIndicator
	   * @methodOf pascalprecht.translate.$translateProvider
	   *
	   * @description
	   * Sets an indicator which is used when a translation isn't found. E.g. when
	   * setting the indicator as 'X' and one tries to translate a translation id
	   * called `NOT_FOUND`, this will result in `X NOT_FOUND X`.
	   *
	   * Internally this methods sets a left indicator and a right indicator using
	   * `$translateProvider.translationNotFoundIndicatorLeft()` and
	   * `$translateProvider.translationNotFoundIndicatorRight()`.
	   *
	   * **Note**: These methods automatically add a whitespace between the indicators
	   * and the translation id.
	   *
	   * @param {string} indicator An indicator, could be any string.
	   */
	  this.translationNotFoundIndicator = function (indicator) {
	    this.translationNotFoundIndicatorLeft(indicator);
	    this.translationNotFoundIndicatorRight(indicator);
	    return this;
	  };
	
	  /**
	   * ngdoc function
	   * @name pascalprecht.translate.$translateProvider#translationNotFoundIndicatorLeft
	   * @methodOf pascalprecht.translate.$translateProvider
	   *
	   * @description
	   * Sets an indicator which is used when a translation isn't found left to the
	   * translation id.
	   *
	   * @param {string} indicator An indicator.
	   */
	  this.translationNotFoundIndicatorLeft = function (indicator) {
	    if (!indicator) {
	      return $notFoundIndicatorLeft;
	    }
	    $notFoundIndicatorLeft = indicator;
	    return this;
	  };
	
	  /**
	   * ngdoc function
	   * @name pascalprecht.translate.$translateProvider#translationNotFoundIndicatorLeft
	   * @methodOf pascalprecht.translate.$translateProvider
	   *
	   * @description
	   * Sets an indicator which is used when a translation isn't found right to the
	   * translation id.
	   *
	   * @param {string} indicator An indicator.
	   */
	  this.translationNotFoundIndicatorRight = function (indicator) {
	    if (!indicator) {
	      return $notFoundIndicatorRight;
	    }
	    $notFoundIndicatorRight = indicator;
	    return this;
	  };
	
	  /**
	   * @ngdoc function
	   * @name pascalprecht.translate.$translateProvider#fallbackLanguage
	   * @methodOf pascalprecht.translate.$translateProvider
	   *
	   * @description
	   * Tells the module which of the registered translation tables to use when missing translations
	   * at initial startup by passing a language key. Similar to `$translateProvider#use`
	   * only that it says which language to **fallback**.
	   *
	   * @param {string||array} langKey A language key.
	   *
	   */
	  this.fallbackLanguage = function (langKey) {
	    fallbackStack(langKey);
	    return this;
	  };
	
	  var fallbackStack = function (langKey) {
	    if (langKey) {
	      if (angular.isString(langKey)) {
	        $fallbackWasString = true;
	        $fallbackLanguage = [ langKey ];
	      } else if (angular.isArray(langKey)) {
	        $fallbackWasString = false;
	        $fallbackLanguage = langKey;
	      }
	      if (angular.isString($preferredLanguage)  && indexOf($fallbackLanguage, $preferredLanguage) < 0) {
	        $fallbackLanguage.push($preferredLanguage);
	      }
	
	      return this;
	    } else {
	      if ($fallbackWasString) {
	        return $fallbackLanguage[0];
	      } else {
	        return $fallbackLanguage;
	      }
	    }
	  };
	
	  /**
	   * @ngdoc function
	   * @name pascalprecht.translate.$translateProvider#use
	   * @methodOf pascalprecht.translate.$translateProvider
	   *
	   * @description
	   * Set which translation table to use for translation by given language key. When
	   * trying to 'use' a language which isn't provided, it'll throw an error.
	   *
	   * You actually don't have to use this method since `$translateProvider#preferredLanguage`
	   * does the job too.
	   *
	   * @param {string} langKey A language key.
	   */
	  this.use = function (langKey) {
	    if (langKey) {
	      if (!$translationTable[langKey] && (!$loaderFactory)) {
	        // only throw an error, when not loading translation data asynchronously
	        throw new Error('$translateProvider couldn\'t find translationTable for langKey: \'' + langKey + '\'');
	      }
	      $uses = langKey;
	      return this;
	    }
	    return $uses;
	  };
	
	  /**
	   * @ngdoc function
	   * @name pascalprecht.translate.$translateProvider#resolveClientLocale
	   * @methodOf pascalprecht.translate.$translateProvider
	   *
	   * @description
	   * This returns the current browser/client's language key. The result is processed with the configured uniform tag resolver.
	   *
	   * @returns {string} the current client/browser language key
	   */
	  this.resolveClientLocale = function () {
	    return getLocale();
	  };
	
	 /**
	   * @ngdoc function
	   * @name pascalprecht.translate.$translateProvider#storageKey
	   * @methodOf pascalprecht.translate.$translateProvider
	   *
	   * @description
	   * Tells the module which key must represent the choosed language by a user in the storage.
	   *
	   * @param {string} key A key for the storage.
	   */
	  var storageKey = function(key) {
	    if (!key) {
	      if ($storagePrefix) {
	        return $storagePrefix + $storageKey;
	      }
	      return $storageKey;
	    }
	    $storageKey = key;
	    return this;
	  };
	
	  this.storageKey = storageKey;
	
	  /**
	   * @ngdoc function
	   * @name pascalprecht.translate.$translateProvider#useUrlLoader
	   * @methodOf pascalprecht.translate.$translateProvider
	   *
	   * @description
	   * Tells angular-translate to use `$translateUrlLoader` extension service as loader.
	   *
	   * @param {string} url Url
	   * @param {Object=} options Optional configuration object
	   */
	  this.useUrlLoader = function (url, options) {
	    return this.useLoader('$translateUrlLoader', angular.extend({ url: url }, options));
	  };
	
	  /**
	   * @ngdoc function
	   * @name pascalprecht.translate.$translateProvider#useStaticFilesLoader
	   * @methodOf pascalprecht.translate.$translateProvider
	   *
	   * @description
	   * Tells angular-translate to use `$translateStaticFilesLoader` extension service as loader.
	   *
	   * @param {Object=} options Optional configuration object
	   */
	  this.useStaticFilesLoader = function (options) {
	    return this.useLoader('$translateStaticFilesLoader', options);
	  };
	
	  /**
	   * @ngdoc function
	   * @name pascalprecht.translate.$translateProvider#useLoader
	   * @methodOf pascalprecht.translate.$translateProvider
	   *
	   * @description
	   * Tells angular-translate to use any other service as loader.
	   *
	   * @param {string} loaderFactory Factory name to use
	   * @param {Object=} options Optional configuration object
	   */
	  this.useLoader = function (loaderFactory, options) {
	    $loaderFactory = loaderFactory;
	    $loaderOptions = options || {};
	    return this;
	  };
	
	  /**
	   * @ngdoc function
	   * @name pascalprecht.translate.$translateProvider#useLocalStorage
	   * @methodOf pascalprecht.translate.$translateProvider
	   *
	   * @description
	   * Tells angular-translate to use `$translateLocalStorage` service as storage layer.
	   *
	   */
	  this.useLocalStorage = function () {
	    return this.useStorage('$translateLocalStorage');
	  };
	
	  /**
	   * @ngdoc function
	   * @name pascalprecht.translate.$translateProvider#useCookieStorage
	   * @methodOf pascalprecht.translate.$translateProvider
	   *
	   * @description
	   * Tells angular-translate to use `$translateCookieStorage` service as storage layer.
	   */
	  this.useCookieStorage = function () {
	    return this.useStorage('$translateCookieStorage');
	  };
	
	  /**
	   * @ngdoc function
	   * @name pascalprecht.translate.$translateProvider#useStorage
	   * @methodOf pascalprecht.translate.$translateProvider
	   *
	   * @description
	   * Tells angular-translate to use custom service as storage layer.
	   */
	  this.useStorage = function (storageFactory) {
	    $storageFactory = storageFactory;
	    return this;
	  };
	
	  /**
	   * @ngdoc function
	   * @name pascalprecht.translate.$translateProvider#storagePrefix
	   * @methodOf pascalprecht.translate.$translateProvider
	   *
	   * @description
	   * Sets prefix for storage key.
	   *
	   * @param {string} prefix Storage key prefix
	   */
	  this.storagePrefix = function (prefix) {
	    if (!prefix) {
	      return prefix;
	    }
	    $storagePrefix = prefix;
	    return this;
	  };
	
	  /**
	   * @ngdoc function
	   * @name pascalprecht.translate.$translateProvider#useMissingTranslationHandlerLog
	   * @methodOf pascalprecht.translate.$translateProvider
	   *
	   * @description
	   * Tells angular-translate to use built-in log handler when trying to translate
	   * a translation Id which doesn't exist.
	   *
	   * This is actually a shortcut method for `useMissingTranslationHandler()`.
	   *
	   */
	  this.useMissingTranslationHandlerLog = function () {
	    return this.useMissingTranslationHandler('$translateMissingTranslationHandlerLog');
	  };
	
	  /**
	   * @ngdoc function
	   * @name pascalprecht.translate.$translateProvider#useMissingTranslationHandler
	   * @methodOf pascalprecht.translate.$translateProvider
	   *
	   * @description
	   * Expects a factory name which later gets instantiated with `$injector`.
	   * This method can be used to tell angular-translate to use a custom
	   * missingTranslationHandler. Just build a factory which returns a function
	   * and expects a translation id as argument.
	   *
	   * Example:
	   * <pre>
	   *  app.config(function ($translateProvider) {
	   *    $translateProvider.useMissingTranslationHandler('customHandler');
	   *  });
	   *
	   *  app.factory('customHandler', function (dep1, dep2) {
	   *    return function (translationId) {
	   *      // something with translationId and dep1 and dep2
	   *    };
	   *  });
	   * </pre>
	   *
	   * @param {string} factory Factory name
	   */
	  this.useMissingTranslationHandler = function (factory) {
	    $missingTranslationHandlerFactory = factory;
	    return this;
	  };
	
	  /**
	   * @ngdoc function
	   * @name pascalprecht.translate.$translateProvider#usePostCompiling
	   * @methodOf pascalprecht.translate.$translateProvider
	   *
	   * @description
	   * If post compiling is enabled, all translated values will be processed
	   * again with AngularJS' $compile.
	   *
	   * Example:
	   * <pre>
	   *  app.config(function ($translateProvider) {
	   *    $translateProvider.usePostCompiling(true);
	   *  });
	   * </pre>
	   *
	   * @param {string} factory Factory name
	   */
	  this.usePostCompiling = function (value) {
	    $postCompilingEnabled = !(!value);
	    return this;
	  };
	
	  /**
	   * @ngdoc function
	   * @name pascalprecht.translate.$translateProvider#forceAsyncReload
	   * @methodOf pascalprecht.translate.$translateProvider
	   *
	   * @description
	   * If force async reload is enabled, async loader will always be called
	   * even if $translationTable already contains the language key, adding
	   * possible new entries to the $translationTable.
	   *
	   * Example:
	   * <pre>
	   *  app.config(function ($translateProvider) {
	   *    $translateProvider.forceAsyncReload(true);
	   *  });
	   * </pre>
	   *
	   * @param {boolean} value - valid values are true or false
	   */
	  this.forceAsyncReload = function (value) {
	    $forceAsyncReloadEnabled = !(!value);
	    return this;
	  };
	
	  /**
	   * @ngdoc function
	   * @name pascalprecht.translate.$translateProvider#uniformLanguageTag
	   * @methodOf pascalprecht.translate.$translateProvider
	   *
	   * @description
	   * Tells angular-translate which language tag should be used as a result when determining
	   * the current browser language.
	   *
	   * This setting must be set before invoking {@link pascalprecht.translate.$translateProvider#methods_determinePreferredLanguage determinePreferredLanguage()}.
	   *
	   * <pre>
	   * $translateProvider
	   *   .uniformLanguageTag('bcp47')
	   *   .determinePreferredLanguage()
	   * </pre>
	   *
	   * The resolver currently supports:
	   * * default
	   *     (traditionally: hyphens will be converted into underscores, i.e. en-US => en_US)
	   *     en-US => en_US
	   *     en_US => en_US
	   *     en-us => en_us
	   * * java
	   *     like default, but the second part will be always in uppercase
	   *     en-US => en_US
	   *     en_US => en_US
	   *     en-us => en_US
	   * * BCP 47 (RFC 4646 & 4647)
	   *     en-US => en-US
	   *     en_US => en-US
	   *     en-us => en-US
	   *
	   * See also:
	   * * http://en.wikipedia.org/wiki/IETF_language_tag
	   * * http://www.w3.org/International/core/langtags/
	   * * http://tools.ietf.org/html/bcp47
	   *
	   * @param {string|object} options - options (or standard)
	   * @param {string} options.standard - valid values are 'default', 'bcp47', 'java'
	   */
	  this.uniformLanguageTag = function (options) {
	
	    if (!options) {
	      options = {};
	    } else if (angular.isString(options)) {
	      options = {
	        standard: options
	      };
	    }
	
	    uniformLanguageTagResolver = options.standard;
	
	    return this;
	  };
	
	  /**
	   * @ngdoc function
	   * @name pascalprecht.translate.$translateProvider#determinePreferredLanguage
	   * @methodOf pascalprecht.translate.$translateProvider
	   *
	   * @description
	   * Tells angular-translate to try to determine on its own which language key
	   * to set as preferred language. When `fn` is given, angular-translate uses it
	   * to determine a language key, otherwise it uses the built-in `getLocale()`
	   * method.
	   *
	   * The `getLocale()` returns a language key in the format `[lang]_[country]` or
	   * `[lang]` depending on what the browser provides.
	   *
	   * Use this method at your own risk, since not all browsers return a valid
	   * locale (see {@link pascalprecht.translate.$translateProvider#methods_uniformLanguageTag uniformLanguageTag()}).
	   *
	   * @param {Function=} fn Function to determine a browser's locale
	   */
	  this.determinePreferredLanguage = function (fn) {
	
	    var locale = (fn && angular.isFunction(fn)) ? fn() : getLocale();
	
	    if (!$availableLanguageKeys.length) {
	      $preferredLanguage = locale;
	    } else {
	      $preferredLanguage = negotiateLocale(locale) || locale;
	    }
	
	    return this;
	  };
	
	  /**
	   * @ngdoc function
	   * @name pascalprecht.translate.$translateProvider#registerAvailableLanguageKeys
	   * @methodOf pascalprecht.translate.$translateProvider
	   *
	   * @description
	   * Registers a set of language keys the app will work with. Use this method in
	   * combination with
	   * {@link pascalprecht.translate.$translateProvider#determinePreferredLanguage determinePreferredLanguage}.
	   * When available languages keys are registered, angular-translate
	   * tries to find the best fitting language key depending on the browsers locale,
	   * considering your language key convention.
	   *
	   * @param {object} languageKeys Array of language keys the your app will use
	   * @param {object=} aliases Alias map.
	   */
	  this.registerAvailableLanguageKeys = function (languageKeys, aliases) {
	    if (languageKeys) {
	      $availableLanguageKeys = languageKeys;
	      if (aliases) {
	        $languageKeyAliases = aliases;
	      }
	      return this;
	    }
	    return $availableLanguageKeys;
	  };
	
	  /**
	   * @ngdoc function
	   * @name pascalprecht.translate.$translateProvider#useLoaderCache
	   * @methodOf pascalprecht.translate.$translateProvider
	   *
	   * @description
	   * Registers a cache for internal $http based loaders.
	   * {@link pascalprecht.translate.$translationCache $translationCache}.
	   * When false the cache will be disabled (default). When true or undefined
	   * the cache will be a default (see $cacheFactory). When an object it will
	   * be treat as a cache object itself: the usage is $http({cache: cache})
	   *
	   * @param {object} cache boolean, string or cache-object
	   */
	  this.useLoaderCache = function (cache) {
	    if (cache === false) {
	      // disable cache
	      loaderCache = undefined;
	    } else if (cache === true) {
	      // enable cache using AJS defaults
	      loaderCache = true;
	    } else if (typeof(cache) === 'undefined') {
	      // enable cache using default
	      loaderCache = '$translationCache';
	    } else if (cache) {
	      // enable cache using given one (see $cacheFactory)
	      loaderCache = cache;
	    }
	    return this;
	  };
	
	  /**
	   * @ngdoc function
	   * @name pascalprecht.translate.$translateProvider#directivePriority
	   * @methodOf pascalprecht.translate.$translateProvider
	   *
	   * @description
	   * Sets the default priority of the translate directive. The standard value is `0`.
	   * Calling this function without an argument will return the current value.
	   *
	   * @param {number} priority for the translate-directive
	   */
	  this.directivePriority = function (priority) {
	    if (priority === undefined) {
	      // getter
	      return directivePriority;
	    } else {
	      // setter with chaining
	      directivePriority = priority;
	      return this;
	    }
	  };
	
	  /**
	   * @ngdoc function
	   * @name pascalprecht.translate.$translateProvider#statefulFilter
	   * @methodOf pascalprecht.translate.$translateProvider
	   *
	   * @description
	   * Since AngularJS 1.3, filters which are not stateless (depending at the scope)
	   * have to explicit define this behavior.
	   * Sets whether the translate filter should be stateful or stateless. The standard value is `true`
	   * meaning being stateful.
	   * Calling this function without an argument will return the current value.
	   *
	   * @param {boolean} state - defines the state of the filter
	   */
	  this.statefulFilter = function (state) {
	    if (state === undefined) {
	      // getter
	      return statefulFilter;
	    } else {
	      // setter with chaining
	      statefulFilter = state;
	      return this;
	    }
	  };
	
	  /**
	   * @ngdoc function
	   * @name pascalprecht.translate.$translateProvider#postProcess
	   * @methodOf pascalprecht.translate.$translateProvider
	   *
	   * @description
	   * The post processor will be intercept right after the translation result. It can modify the result.
	   *
	   * @param {object} fn Function or service name (string) to be called after the translation value has been set / resolved. The function itself will enrich every value being processed and then continue the normal resolver process
	   */
	  this.postProcess = function (fn) {
	    if (fn) {
	      postProcessFn = fn;
	    } else {
	      postProcessFn = undefined;
	    }
	    return this;
	  };
	
	  /**
	   * @ngdoc function
	   * @name pascalprecht.translate.$translateProvider#keepContent
	   * @methodOf pascalprecht.translate.$translateProvider
	   *
	   * @description
	   * If keepContent is set to true than translate directive will always use innerHTML
	   * as a default translation
	   *
	   * Example:
	   * <pre>
	   *  app.config(function ($translateProvider) {
	   *    $translateProvider.keepContent(true);
	   *  });
	   * </pre>
	   *
	   * @param {boolean} value - valid values are true or false
	   */
	  this.keepContent = function (value) {
	    $keepContent = !(!value);
	    return this;
	  };
	
	  /**
	   * @ngdoc object
	   * @name pascalprecht.translate.$translate
	   * @requires $interpolate
	   * @requires $log
	   * @requires $rootScope
	   * @requires $q
	   *
	   * @description
	   * The `$translate` service is the actual core of angular-translate. It expects a translation id
	   * and optional interpolate parameters to translate contents.
	   *
	   * <pre>
	   *  $translate('HEADLINE_TEXT').then(function (translation) {
	   *    $scope.translatedText = translation;
	   *  });
	   * </pre>
	   *
	   * @param {string|array} translationId A token which represents a translation id
	   *                                     This can be optionally an array of translation ids which
	   *                                     results that the function returns an object where each key
	   *                                     is the translation id and the value the translation.
	   * @param {object=} interpolateParams An object hash for dynamic values
	   * @param {string} interpolationId The id of the interpolation to use
	   * @param {string} defaultTranslationText the optional default translation text that is written as
	   *                                        as default text in case it is not found in any configured language
	   * @param {string} forceLanguage A language to be used instead of the current language
	   * @returns {object} promise
	   */
	  this.$get = [
	    '$log',
	    '$injector',
	    '$rootScope',
	    '$q',
	    function ($log, $injector, $rootScope, $q) {
	
	      var Storage,
	          defaultInterpolator = $injector.get($interpolationFactory || '$translateDefaultInterpolation'),
	          pendingLoader = false,
	          interpolatorHashMap = {},
	          langPromises = {},
	          fallbackIndex,
	          startFallbackIteration;
	
	      var $translate = function (translationId, interpolateParams, interpolationId, defaultTranslationText, forceLanguage) {
	        if (!$uses && $preferredLanguage) {
	          $uses = $preferredLanguage;
	        }
	        var uses = (forceLanguage && forceLanguage !== $uses) ? // we don't want to re-negotiate $uses
	              (negotiateLocale(forceLanguage) || forceLanguage) : $uses;
	
	        // Check forceLanguage is present
	        if (forceLanguage) {
	          loadTranslationsIfMissing(forceLanguage);
	        }
	
	        // Duck detection: If the first argument is an array, a bunch of translations was requested.
	        // The result is an object.
	        if (angular.isArray(translationId)) {
	          // Inspired by Q.allSettled by Kris Kowal
	          // https://github.com/kriskowal/q/blob/b0fa72980717dc202ffc3cbf03b936e10ebbb9d7/q.js#L1553-1563
	          // This transforms all promises regardless resolved or rejected
	          var translateAll = function (translationIds) {
	            var results = {}; // storing the actual results
	            var promises = []; // promises to wait for
	            // Wraps the promise a) being always resolved and b) storing the link id->value
	            var translate = function (translationId) {
	              var deferred = $q.defer();
	              var regardless = function (value) {
	                results[translationId] = value;
	                deferred.resolve([translationId, value]);
	              };
	              // we don't care whether the promise was resolved or rejected; just store the values
	              $translate(translationId, interpolateParams, interpolationId, defaultTranslationText, forceLanguage).then(regardless, regardless);
	              return deferred.promise;
	            };
	            for (var i = 0, c = translationIds.length; i < c; i++) {
	              promises.push(translate(translationIds[i]));
	            }
	            // wait for all (including storing to results)
	            return $q.all(promises).then(function () {
	              // return the results
	              return results;
	            });
	          };
	          return translateAll(translationId);
	        }
	
	        var deferred = $q.defer();
	
	        // trim off any whitespace
	        if (translationId) {
	          translationId = trim.apply(translationId);
	        }
	
	        var promiseToWaitFor = (function () {
	          var promise = $preferredLanguage ?
	            langPromises[$preferredLanguage] :
	            langPromises[uses];
	
	          fallbackIndex = 0;
	
	          if ($storageFactory && !promise) {
	            // looks like there's no pending promise for $preferredLanguage or
	            // $uses. Maybe there's one pending for a language that comes from
	            // storage.
	            var langKey = Storage.get($storageKey);
	            promise = langPromises[langKey];
	
	            if ($fallbackLanguage && $fallbackLanguage.length) {
	                var index = indexOf($fallbackLanguage, langKey);
	                // maybe the language from storage is also defined as fallback language
	                // we increase the fallback language index to not search in that language
	                // as fallback, since it's probably the first used language
	                // in that case the index starts after the first element
	                fallbackIndex = (index === 0) ? 1 : 0;
	
	                // but we can make sure to ALWAYS fallback to preferred language at least
	                if (indexOf($fallbackLanguage, $preferredLanguage) < 0) {
	                  $fallbackLanguage.push($preferredLanguage);
	                }
	            }
	          }
	          return promise;
	        }());
	
	        if (!promiseToWaitFor) {
	          // no promise to wait for? okay. Then there's no loader registered
	          // nor is a one pending for language that comes from storage.
	          // We can just translate.
	          determineTranslation(translationId, interpolateParams, interpolationId, defaultTranslationText, uses).then(deferred.resolve, deferred.reject);
	        } else {
	          var promiseResolved = function () {
	            // $uses may have changed while waiting
	            if (!forceLanguage) {
	              uses = $uses;
	            }
	            determineTranslation(translationId, interpolateParams, interpolationId, defaultTranslationText, uses).then(deferred.resolve, deferred.reject);
	          };
	          promiseResolved.displayName = 'promiseResolved';
	
	          promiseToWaitFor['finally'](promiseResolved);
	        }
	        return deferred.promise;
	      };
	
	      /**
	       * @name applyNotFoundIndicators
	       * @private
	       *
	       * @description
	       * Applies not fount indicators to given translation id, if needed.
	       * This function gets only executed, if a translation id doesn't exist,
	       * which is why a translation id is expected as argument.
	       *
	       * @param {string} translationId Translation id.
	       * @returns {string} Same as given translation id but applied with not found
	       * indicators.
	       */
	      var applyNotFoundIndicators = function (translationId) {
	        // applying notFoundIndicators
	        if ($notFoundIndicatorLeft) {
	          translationId = [$notFoundIndicatorLeft, translationId].join(' ');
	        }
	        if ($notFoundIndicatorRight) {
	          translationId = [translationId, $notFoundIndicatorRight].join(' ');
	        }
	        return translationId;
	      };
	
	      /**
	       * @name useLanguage
	       * @private
	       *
	       * @description
	       * Makes actual use of a language by setting a given language key as used
	       * language and informs registered interpolators to also use the given
	       * key as locale.
	       *
	       * @param {string} key Locale key.
	       */
	      var useLanguage = function (key) {
	        $uses = key;
	
	        // make sure to store new language key before triggering success event
	        if ($storageFactory) {
	          Storage.put($translate.storageKey(), $uses);
	        }
	
	        $rootScope.$emit('$translateChangeSuccess', {language: key});
	
	        // inform default interpolator
	        defaultInterpolator.setLocale($uses);
	
	        var eachInterpolator = function (interpolator, id) {
	          interpolatorHashMap[id].setLocale($uses);
	        };
	        eachInterpolator.displayName = 'eachInterpolatorLocaleSetter';
	
	        // inform all others too!
	        angular.forEach(interpolatorHashMap, eachInterpolator);
	        $rootScope.$emit('$translateChangeEnd', {language: key});
	      };
	
	      /**
	       * @name loadAsync
	       * @private
	       *
	       * @description
	       * Kicks of registered async loader using `$injector` and applies existing
	       * loader options. When resolved, it updates translation tables accordingly
	       * or rejects with given language key.
	       *
	       * @param {string} key Language key.
	       * @return {Promise} A promise.
	       */
	      var loadAsync = function (key) {
	        if (!key) {
	          throw 'No language key specified for loading.';
	        }
	
	        var deferred = $q.defer();
	
	        $rootScope.$emit('$translateLoadingStart', {language: key});
	        pendingLoader = true;
	
	        var cache = loaderCache;
	        if (typeof(cache) === 'string') {
	          // getting on-demand instance of loader
	          cache = $injector.get(cache);
	        }
	
	        var loaderOptions = angular.extend({}, $loaderOptions, {
	          key: key,
	          $http: angular.extend({}, {
	            cache: cache
	          }, $loaderOptions.$http)
	        });
	
	        var onLoaderSuccess = function (data) {
	          var translationTable = {};
	          $rootScope.$emit('$translateLoadingSuccess', {language: key});
	
	          if (angular.isArray(data)) {
	            angular.forEach(data, function (table) {
	              angular.extend(translationTable, flatObject(table));
	            });
	          } else {
	            angular.extend(translationTable, flatObject(data));
	          }
	          pendingLoader = false;
	          deferred.resolve({
	            key: key,
	            table: translationTable
	          });
	          $rootScope.$emit('$translateLoadingEnd', {language: key});
	        };
	        onLoaderSuccess.displayName = 'onLoaderSuccess';
	
	        var onLoaderError = function (key) {
	          $rootScope.$emit('$translateLoadingError', {language: key});
	          deferred.reject(key);
	          $rootScope.$emit('$translateLoadingEnd', {language: key});
	        };
	        onLoaderError.displayName = 'onLoaderError';
	
	        $injector.get($loaderFactory)(loaderOptions)
	          .then(onLoaderSuccess, onLoaderError);
	
	        return deferred.promise;
	      };
	
	      if ($storageFactory) {
	        Storage = $injector.get($storageFactory);
	
	        if (!Storage.get || !Storage.put) {
	          throw new Error('Couldn\'t use storage \'' + $storageFactory + '\', missing get() or put() method!');
	        }
	      }
	
	      // if we have additional interpolations that were added via
	      // $translateProvider.addInterpolation(), we have to map'em
	      if ($interpolatorFactories.length) {
	        var eachInterpolationFactory = function (interpolatorFactory) {
	          var interpolator = $injector.get(interpolatorFactory);
	          // setting initial locale for each interpolation service
	          interpolator.setLocale($preferredLanguage || $uses);
	          // make'em recognizable through id
	          interpolatorHashMap[interpolator.getInterpolationIdentifier()] = interpolator;
	        };
	        eachInterpolationFactory.displayName = 'interpolationFactoryAdder';
	
	        angular.forEach($interpolatorFactories, eachInterpolationFactory);
	      }
	
	      /**
	       * @name getTranslationTable
	       * @private
	       *
	       * @description
	       * Returns a promise that resolves to the translation table
	       * or is rejected if an error occurred.
	       *
	       * @param langKey
	       * @returns {Q.promise}
	       */
	      var getTranslationTable = function (langKey) {
	        var deferred = $q.defer();
	        if (Object.prototype.hasOwnProperty.call($translationTable, langKey)) {
	          deferred.resolve($translationTable[langKey]);
	        } else if (langPromises[langKey]) {
	          var onResolve = function (data) {
	            translations(data.key, data.table);
	            deferred.resolve(data.table);
	          };
	          onResolve.displayName = 'translationTableResolver';
	          langPromises[langKey].then(onResolve, deferred.reject);
	        } else {
	          deferred.reject();
	        }
	        return deferred.promise;
	      };
	
	      /**
	       * @name getFallbackTranslation
	       * @private
	       *
	       * @description
	       * Returns a promise that will resolve to the translation
	       * or be rejected if no translation was found for the language.
	       * This function is currently only used for fallback language translation.
	       *
	       * @param langKey The language to translate to.
	       * @param translationId
	       * @param interpolateParams
	       * @param Interpolator
	       * @returns {Q.promise}
	       */
	      var getFallbackTranslation = function (langKey, translationId, interpolateParams, Interpolator) {
	        var deferred = $q.defer();
	
	        var onResolve = function (translationTable) {
	          if (Object.prototype.hasOwnProperty.call(translationTable, translationId)) {
	            Interpolator.setLocale(langKey);
	            var translation = translationTable[translationId];
	            if (translation.substr(0, 2) === '@:') {
	              getFallbackTranslation(langKey, translation.substr(2), interpolateParams, Interpolator)
	                .then(deferred.resolve, deferred.reject);
	            } else {
	              var interpolatedValue = Interpolator.interpolate(translationTable[translationId], interpolateParams, 'service');
	              interpolatedValue = applyPostProcessing(translationId, translationTable[translationId], interpolatedValue, interpolateParams, langKey);
	
	              deferred.resolve(interpolatedValue);
	
	            }
	            Interpolator.setLocale($uses);
	          } else {
	            deferred.reject();
	          }
	        };
	        onResolve.displayName = 'fallbackTranslationResolver';
	
	        getTranslationTable(langKey).then(onResolve, deferred.reject);
	
	        return deferred.promise;
	      };
	
	      /**
	       * @name getFallbackTranslationInstant
	       * @private
	       *
	       * @description
	       * Returns a translation
	       * This function is currently only used for fallback language translation.
	       *
	       * @param langKey The language to translate to.
	       * @param translationId
	       * @param interpolateParams
	       * @param Interpolator
	       * @returns {string} translation
	       */
	      var getFallbackTranslationInstant = function (langKey, translationId, interpolateParams, Interpolator) {
	        var result, translationTable = $translationTable[langKey];
	
	        if (translationTable && Object.prototype.hasOwnProperty.call(translationTable, translationId)) {
	          Interpolator.setLocale(langKey);
	          result = Interpolator.interpolate(translationTable[translationId], interpolateParams, 'filter');
	          result = applyPostProcessing(translationId, translationTable[translationId], result, interpolateParams, langKey);
	          if (result.substr(0, 2) === '@:') {
	            return getFallbackTranslationInstant(langKey, result.substr(2), interpolateParams, Interpolator);
	          }
	          Interpolator.setLocale($uses);
	        }
	
	        return result;
	      };
	
	
	      /**
	       * @name translateByHandler
	       * @private
	       *
	       * Translate by missing translation handler.
	       *
	       * @param translationId
	       * @param interpolateParams
	       * @param defaultTranslationText
	       * @returns translation created by $missingTranslationHandler or translationId is $missingTranslationHandler is
	       * absent
	       */
	      var translateByHandler = function (translationId, interpolateParams, defaultTranslationText) {
	        // If we have a handler factory - we might also call it here to determine if it provides
	        // a default text for a translationid that can't be found anywhere in our tables
	        if ($missingTranslationHandlerFactory) {
	          var resultString = $injector.get($missingTranslationHandlerFactory)(translationId, $uses, interpolateParams, defaultTranslationText);
	          if (resultString !== undefined) {
	            return resultString;
	          } else {
	            return translationId;
	          }
	        } else {
	          return translationId;
	        }
	      };
	
	      /**
	       * @name resolveForFallbackLanguage
	       * @private
	       *
	       * Recursive helper function for fallbackTranslation that will sequentially look
	       * for a translation in the fallbackLanguages starting with fallbackLanguageIndex.
	       *
	       * @param fallbackLanguageIndex
	       * @param translationId
	       * @param interpolateParams
	       * @param Interpolator
	       * @returns {Q.promise} Promise that will resolve to the translation.
	       */
	      var resolveForFallbackLanguage = function (fallbackLanguageIndex, translationId, interpolateParams, Interpolator, defaultTranslationText) {
	        var deferred = $q.defer();
	
	        if (fallbackLanguageIndex < $fallbackLanguage.length) {
	          var langKey = $fallbackLanguage[fallbackLanguageIndex];
	          getFallbackTranslation(langKey, translationId, interpolateParams, Interpolator).then(
	            function (data) {
	                deferred.resolve(data);
	            },
	            function () {
	              // Look in the next fallback language for a translation.
	              // It delays the resolving by passing another promise to resolve.
	              return resolveForFallbackLanguage(fallbackLanguageIndex + 1, translationId, interpolateParams, Interpolator, defaultTranslationText).then(deferred.resolve, deferred.reject);
	            }
	          );
	        } else {
	          // No translation found in any fallback language
	          // if a default translation text is set in the directive, then return this as a result
	          if (defaultTranslationText) {
	            deferred.resolve(defaultTranslationText);
	          } else {
	            // if no default translation is set and an error handler is defined, send it to the handler
	            // and then return the result
	            if ($missingTranslationHandlerFactory) {
	              deferred.resolve(translateByHandler(translationId, interpolateParams));
	            } else {
	              deferred.reject(translateByHandler(translationId, interpolateParams));
	            }
	
	          }
	        }
	        return deferred.promise;
	      };
	
	      /**
	       * @name resolveForFallbackLanguageInstant
	       * @private
	       *
	       * Recursive helper function for fallbackTranslation that will sequentially look
	       * for a translation in the fallbackLanguages starting with fallbackLanguageIndex.
	       *
	       * @param fallbackLanguageIndex
	       * @param translationId
	       * @param interpolateParams
	       * @param Interpolator
	       * @returns {string} translation
	       */
	      var resolveForFallbackLanguageInstant = function (fallbackLanguageIndex, translationId, interpolateParams, Interpolator) {
	        var result;
	
	        if (fallbackLanguageIndex < $fallbackLanguage.length) {
	          var langKey = $fallbackLanguage[fallbackLanguageIndex];
	          result = getFallbackTranslationInstant(langKey, translationId, interpolateParams, Interpolator);
	          if (!result) {
	            result = resolveForFallbackLanguageInstant(fallbackLanguageIndex + 1, translationId, interpolateParams, Interpolator);
	          }
	        }
	        return result;
	      };
	
	      /**
	       * Translates with the usage of the fallback languages.
	       *
	       * @param translationId
	       * @param interpolateParams
	       * @param Interpolator
	       * @returns {Q.promise} Promise, that resolves to the translation.
	       */
	      var fallbackTranslation = function (translationId, interpolateParams, Interpolator, defaultTranslationText) {
	        // Start with the fallbackLanguage with index 0
	        return resolveForFallbackLanguage((startFallbackIteration>0 ? startFallbackIteration : fallbackIndex), translationId, interpolateParams, Interpolator, defaultTranslationText);
	      };
	
	      /**
	       * Translates with the usage of the fallback languages.
	       *
	       * @param translationId
	       * @param interpolateParams
	       * @param Interpolator
	       * @returns {String} translation
	       */
	      var fallbackTranslationInstant = function (translationId, interpolateParams, Interpolator) {
	        // Start with the fallbackLanguage with index 0
	        return resolveForFallbackLanguageInstant((startFallbackIteration>0 ? startFallbackIteration : fallbackIndex), translationId, interpolateParams, Interpolator);
	      };
	
	      var determineTranslation = function (translationId, interpolateParams, interpolationId, defaultTranslationText, uses) {
	
	        var deferred = $q.defer();
	
	        var table = uses ? $translationTable[uses] : $translationTable,
	            Interpolator = (interpolationId) ? interpolatorHashMap[interpolationId] : defaultInterpolator;
	
	        // if the translation id exists, we can just interpolate it
	        if (table && Object.prototype.hasOwnProperty.call(table, translationId)) {
	          var translation = table[translationId];
	
	          // If using link, rerun $translate with linked translationId and return it
	          if (translation.substr(0, 2) === '@:') {
	
	            $translate(translation.substr(2), interpolateParams, interpolationId, defaultTranslationText, uses)
	              .then(deferred.resolve, deferred.reject);
	          } else {
	            //
	            var resolvedTranslation = Interpolator.interpolate(translation, interpolateParams, 'service');
	            resolvedTranslation = applyPostProcessing(translationId, translation, resolvedTranslation, interpolateParams, uses);
	            deferred.resolve(resolvedTranslation);
	          }
	        } else {
	          var missingTranslationHandlerTranslation;
	          // for logging purposes only (as in $translateMissingTranslationHandlerLog), value is not returned to promise
	          if ($missingTranslationHandlerFactory && !pendingLoader) {
	            missingTranslationHandlerTranslation = translateByHandler(translationId, interpolateParams, defaultTranslationText);
	          }
	
	          // since we couldn't translate the inital requested translation id,
	          // we try it now with one or more fallback languages, if fallback language(s) is
	          // configured.
	          if (uses && $fallbackLanguage && $fallbackLanguage.length) {
	            fallbackTranslation(translationId, interpolateParams, Interpolator, defaultTranslationText)
	                .then(function (translation) {
	                  deferred.resolve(translation);
	                }, function (_translationId) {
	                  deferred.reject(applyNotFoundIndicators(_translationId));
	                });
	          } else if ($missingTranslationHandlerFactory && !pendingLoader && missingTranslationHandlerTranslation) {
	            // looks like the requested translation id doesn't exists.
	            // Now, if there is a registered handler for missing translations and no
	            // asyncLoader is pending, we execute the handler
	            if (defaultTranslationText) {
	              deferred.resolve(defaultTranslationText);
	              } else {
	                deferred.resolve(missingTranslationHandlerTranslation);
	              }
	          } else {
	            if (defaultTranslationText) {
	              deferred.resolve(defaultTranslationText);
	            } else {
	              deferred.reject(applyNotFoundIndicators(translationId));
	            }
	          }
	        }
	        return deferred.promise;
	      };
	
	      var determineTranslationInstant = function (translationId, interpolateParams, interpolationId, uses) {
	
	        var result, table = uses ? $translationTable[uses] : $translationTable,
	            Interpolator = defaultInterpolator;
	
	        // if the interpolation id exists use custom interpolator
	        if (interpolatorHashMap && Object.prototype.hasOwnProperty.call(interpolatorHashMap, interpolationId)) {
	          Interpolator = interpolatorHashMap[interpolationId];
	        }
	
	        // if the translation id exists, we can just interpolate it
	        if (table && Object.prototype.hasOwnProperty.call(table, translationId)) {
	          var translation = table[translationId];
	
	          // If using link, rerun $translate with linked translationId and return it
	          if (translation.substr(0, 2) === '@:') {
	            result = determineTranslationInstant(translation.substr(2), interpolateParams, interpolationId, uses);
	          } else {
	            result = Interpolator.interpolate(translation, interpolateParams, 'filter');
	            result = applyPostProcessing(translationId, translation, result, interpolateParams, uses);
	          }
	        } else {
	          var missingTranslationHandlerTranslation;
	          // for logging purposes only (as in $translateMissingTranslationHandlerLog), value is not returned to promise
	          if ($missingTranslationHandlerFactory && !pendingLoader) {
	            missingTranslationHandlerTranslation = translateByHandler(translationId, interpolateParams);
	          }
	
	          // since we couldn't translate the inital requested translation id,
	          // we try it now with one or more fallback languages, if fallback language(s) is
	          // configured.
	          if (uses && $fallbackLanguage && $fallbackLanguage.length) {
	            fallbackIndex = 0;
	            result = fallbackTranslationInstant(translationId, interpolateParams, Interpolator);
	          } else if ($missingTranslationHandlerFactory && !pendingLoader && missingTranslationHandlerTranslation) {
	            // looks like the requested translation id doesn't exists.
	            // Now, if there is a registered handler for missing translations and no
	            // asyncLoader is pending, we execute the handler
	            result = missingTranslationHandlerTranslation;
	          } else {
	            result = applyNotFoundIndicators(translationId);
	          }
	        }
	
	        return result;
	      };
	
	      var clearNextLangAndPromise = function(key) {
	        if ($nextLang === key) {
	          $nextLang = undefined;
	        }
	        langPromises[key] = undefined;
	      };
	
	      var applyPostProcessing = function (translationId, translation, resolvedTranslation, interpolateParams, uses) {
	        var fn = postProcessFn;
	
	        if (fn) {
	
	          if (typeof(fn) === 'string') {
	            // getting on-demand instance
	            fn = $injector.get(fn);
	          }
	          if (fn) {
	            return fn(translationId, translation, resolvedTranslation, interpolateParams, uses);
	          }
	        }
	
	        return resolvedTranslation;
	      };
	
	      var loadTranslationsIfMissing = function (key) {
	        if (!$translationTable[key] && $loaderFactory && !langPromises[key]) {
	          langPromises[key] = loadAsync(key).then(function (translation) {
	            translations(translation.key, translation.table);
	            return translation;
	          });
	        }
	      };
	
	      /**
	       * @ngdoc function
	       * @name pascalprecht.translate.$translate#preferredLanguage
	       * @methodOf pascalprecht.translate.$translate
	       *
	       * @description
	       * Returns the language key for the preferred language.
	       *
	       * @param {string} langKey language String or Array to be used as preferredLanguage (changing at runtime)
	       *
	       * @return {string} preferred language key
	       */
	      $translate.preferredLanguage = function (langKey) {
	        if(langKey) {
	          setupPreferredLanguage(langKey);
	        }
	        return $preferredLanguage;
	      };
	
	      /**
	       * @ngdoc function
	       * @name pascalprecht.translate.$translate#cloakClassName
	       * @methodOf pascalprecht.translate.$translate
	       *
	       * @description
	       * Returns the configured class name for `translate-cloak` directive.
	       *
	       * @return {string} cloakClassName
	       */
	      $translate.cloakClassName = function () {
	        return $cloakClassName;
	      };
	
	      /**
	       * @ngdoc function
	       * @name pascalprecht.translate.$translate#nestedObjectDelimeter
	       * @methodOf pascalprecht.translate.$translate
	       *
	       * @description
	       * Returns the configured delimiter for nested namespaces.
	       *
	       * @return {string} nestedObjectDelimeter
	       */
	      $translate.nestedObjectDelimeter = function () {
	        return $nestedObjectDelimeter;
	      };
	
	      /**
	       * @ngdoc function
	       * @name pascalprecht.translate.$translate#fallbackLanguage
	       * @methodOf pascalprecht.translate.$translate
	       *
	       * @description
	       * Returns the language key for the fallback languages or sets a new fallback stack.
	       *
	       * @param {string=} langKey language String or Array of fallback languages to be used (to change stack at runtime)
	       *
	       * @return {string||array} fallback language key
	       */
	      $translate.fallbackLanguage = function (langKey) {
	        if (langKey !== undefined && langKey !== null) {
	          fallbackStack(langKey);
	
	          // as we might have an async loader initiated and a new translation language might have been defined
	          // we need to add the promise to the stack also. So - iterate.
	          if ($loaderFactory) {
	            if ($fallbackLanguage && $fallbackLanguage.length) {
	              for (var i = 0, len = $fallbackLanguage.length; i < len; i++) {
	                if (!langPromises[$fallbackLanguage[i]]) {
	                  langPromises[$fallbackLanguage[i]] = loadAsync($fallbackLanguage[i]);
	                }
	              }
	            }
	          }
	          $translate.use($translate.use());
	        }
	        if ($fallbackWasString) {
	          return $fallbackLanguage[0];
	        } else {
	          return $fallbackLanguage;
	        }
	
	      };
	
	      /**
	       * @ngdoc function
	       * @name pascalprecht.translate.$translate#useFallbackLanguage
	       * @methodOf pascalprecht.translate.$translate
	       *
	       * @description
	       * Sets the first key of the fallback language stack to be used for translation.
	       * Therefore all languages in the fallback array BEFORE this key will be skipped!
	       *
	       * @param {string=} langKey Contains the langKey the iteration shall start with. Set to false if you want to
	       * get back to the whole stack
	       */
	      $translate.useFallbackLanguage = function (langKey) {
	        if (langKey !== undefined && langKey !== null) {
	          if (!langKey) {
	            startFallbackIteration = 0;
	          } else {
	            var langKeyPosition = indexOf($fallbackLanguage, langKey);
	            if (langKeyPosition > -1) {
	              startFallbackIteration = langKeyPosition;
	            }
	          }
	
	        }
	
	      };
	
	      /**
	       * @ngdoc function
	       * @name pascalprecht.translate.$translate#proposedLanguage
	       * @methodOf pascalprecht.translate.$translate
	       *
	       * @description
	       * Returns the language key of language that is currently loaded asynchronously.
	       *
	       * @return {string} language key
	       */
	      $translate.proposedLanguage = function () {
	        return $nextLang;
	      };
	
	      /**
	       * @ngdoc function
	       * @name pascalprecht.translate.$translate#storage
	       * @methodOf pascalprecht.translate.$translate
	       *
	       * @description
	       * Returns registered storage.
	       *
	       * @return {object} Storage
	       */
	      $translate.storage = function () {
	        return Storage;
	      };
	
	      /**
	       * @ngdoc function
	       * @name pascalprecht.translate.$translate#negotiateLocale
	       * @methodOf pascalprecht.translate.$translate
	       *
	       * @description
	       * Returns a language key based on available languages and language aliases. If a
	       * language key cannot be resolved, returns undefined.
	       *
	       * If no or a falsy key is given, returns undefined.
	       *
	       * @param {string} [key] Language key
	       * @return {string|undefined} Language key or undefined if no language key is found.
	       */
	      $translate.negotiateLocale = negotiateLocale;
	
	      /**
	       * @ngdoc function
	       * @name pascalprecht.translate.$translate#use
	       * @methodOf pascalprecht.translate.$translate
	       *
	       * @description
	       * Tells angular-translate which language to use by given language key. This method is
	       * used to change language at runtime. It also takes care of storing the language
	       * key in a configured store to let your app remember the choosed language.
	       *
	       * When trying to 'use' a language which isn't available it tries to load it
	       * asynchronously with registered loaders.
	       *
	       * Returns promise object with loaded language file data or string of the currently used language.
	       *
	       * If no or a falsy key is given it returns the currently used language key.
	       * The returned string will be ```undefined``` if setting up $translate hasn't finished.
	       * @example
	       * $translate.use("en_US").then(function(data){
	       *   $scope.text = $translate("HELLO");
	       * });
	       *
	       * @param {string} [key] Language key
	       * @return {object|string} Promise with loaded language data or the language key if a falsy param was given.
	       */
	      $translate.use = function (key) {
	        if (!key) {
	          return $uses;
	        }
	
	        var deferred = $q.defer();
	
	        $rootScope.$emit('$translateChangeStart', {language: key});
	
	        // Try to get the aliased language key
	        var aliasedKey = negotiateLocale(key);
	        // Ensure only registered language keys will be loaded
	        if ($availableLanguageKeys.length > 0 && !aliasedKey) {
	          return $q.reject(key);
	        }
	
	        if (aliasedKey) {
	          key = aliasedKey;
	        }
	
	        // if there isn't a translation table for the language we've requested,
	        // we load it asynchronously
	        $nextLang = key;
	        if (($forceAsyncReloadEnabled || !$translationTable[key]) && $loaderFactory && !langPromises[key]) {
	          langPromises[key] = loadAsync(key).then(function (translation) {
	            translations(translation.key, translation.table);
	            deferred.resolve(translation.key);
	            if ($nextLang === key) {
	              useLanguage(translation.key);
	            }
	            return translation;
	          }, function (key) {
	            $rootScope.$emit('$translateChangeError', {language: key});
	            deferred.reject(key);
	            $rootScope.$emit('$translateChangeEnd', {language: key});
	            return $q.reject(key);
	          });
	          langPromises[key]['finally'](function () {
	            clearNextLangAndPromise(key);
	          });
	        } else if (langPromises[key]) {
	          // we are already loading this asynchronously
	          // resolve our new deferred when the old langPromise is resolved
	          langPromises[key].then(function (translation) {
	            if ($nextLang === translation.key) {
	              useLanguage(translation.key);
	            }
	            deferred.resolve(translation.key);
	            return translation;
	          }, function (key) {
	            // find first available fallback language if that request has failed
	            if (!$uses && $fallbackLanguage && $fallbackLanguage.length > 0 && $fallbackLanguage[0] !== key) {
	              return $translate.use($fallbackLanguage[0]).then(deferred.resolve, deferred.reject);
	            } else {
	              return deferred.reject(key);
	            }
	          });
	        } else {
	          deferred.resolve(key);
	          useLanguage(key);
	        }
	
	        return deferred.promise;
	      };
	
	      /**
	       * @ngdoc function
	       * @name pascalprecht.translate.$translate#resolveClientLocale
	       * @methodOf pascalprecht.translate.$translate
	       *
	       * @description
	       * This returns the current browser/client's language key. The result is processed with the configured uniform tag resolver.
	       *
	       * @returns {string} the current client/browser language key
	       */
	      $translate.resolveClientLocale = function () {
	        return getLocale();
	      };
	
	      /**
	       * @ngdoc function
	       * @name pascalprecht.translate.$translate#storageKey
	       * @methodOf pascalprecht.translate.$translate
	       *
	       * @description
	       * Returns the key for the storage.
	       *
	       * @return {string} storage key
	       */
	      $translate.storageKey = function () {
	        return storageKey();
	      };
	
	      /**
	       * @ngdoc function
	       * @name pascalprecht.translate.$translate#isPostCompilingEnabled
	       * @methodOf pascalprecht.translate.$translate
	       *
	       * @description
	       * Returns whether post compiling is enabled or not
	       *
	       * @return {bool} storage key
	       */
	      $translate.isPostCompilingEnabled = function () {
	        return $postCompilingEnabled;
	      };
	
	      /**
	       * @ngdoc function
	       * @name pascalprecht.translate.$translate#isForceAsyncReloadEnabled
	       * @methodOf pascalprecht.translate.$translate
	       *
	       * @description
	       * Returns whether force async reload is enabled or not
	       *
	       * @return {boolean} forceAsyncReload value
	       */
	      $translate.isForceAsyncReloadEnabled = function () {
	        return $forceAsyncReloadEnabled;
	      };
	
	      /**
	       * @ngdoc function
	       * @name pascalprecht.translate.$translate#isKeepContent
	       * @methodOf pascalprecht.translate.$translate
	       *
	       * @description
	       * Returns whether keepContent or not
	       *
	       * @return {boolean} keepContent value
	       */
	      $translate.isKeepContent = function () {
	        return $keepContent;
	      };
	
	      /**
	       * @ngdoc function
	       * @name pascalprecht.translate.$translate#refresh
	       * @methodOf pascalprecht.translate.$translate
	       *
	       * @description
	       * Refreshes a translation table pointed by the given langKey. If langKey is not specified,
	       * the module will drop all existent translation tables and load new version of those which
	       * are currently in use.
	       *
	       * Refresh means that the module will drop target translation table and try to load it again.
	       *
	       * In case there are no loaders registered the refresh() method will throw an Error.
	       *
	       * If the module is able to refresh translation tables refresh() method will broadcast
	       * $translateRefreshStart and $translateRefreshEnd events.
	       *
	       * @example
	       * // this will drop all currently existent translation tables and reload those which are
	       * // currently in use
	       * $translate.refresh();
	       * // this will refresh a translation table for the en_US language
	       * $translate.refresh('en_US');
	       *
	       * @param {string} langKey A language key of the table, which has to be refreshed
	       *
	       * @return {promise} Promise, which will be resolved in case a translation tables refreshing
	       * process is finished successfully, and reject if not.
	       */
	      $translate.refresh = function (langKey) {
	        if (!$loaderFactory) {
	          throw new Error('Couldn\'t refresh translation table, no loader registered!');
	        }
	
	        var deferred = $q.defer();
	
	        function resolve() {
	          deferred.resolve();
	          $rootScope.$emit('$translateRefreshEnd', {language: langKey});
	        }
	
	        function reject() {
	          deferred.reject();
	          $rootScope.$emit('$translateRefreshEnd', {language: langKey});
	        }
	
	        $rootScope.$emit('$translateRefreshStart', {language: langKey});
	
	        if (!langKey) {
	          // if there's no language key specified we refresh ALL THE THINGS!
	          var tables = [], loadingKeys = {};
	
	          // reload registered fallback languages
	          if ($fallbackLanguage && $fallbackLanguage.length) {
	            for (var i = 0, len = $fallbackLanguage.length; i < len; i++) {
	              tables.push(loadAsync($fallbackLanguage[i]));
	              loadingKeys[$fallbackLanguage[i]] = true;
	            }
	          }
	
	          // reload currently used language
	          if ($uses && !loadingKeys[$uses]) {
	            tables.push(loadAsync($uses));
	          }
	
	          var allTranslationsLoaded = function (tableData) {
	            $translationTable = {};
	            angular.forEach(tableData, function (data) {
	              translations(data.key, data.table);
	            });
	            if ($uses) {
	              useLanguage($uses);
	            }
	            resolve();
	          };
	          allTranslationsLoaded.displayName = 'refreshPostProcessor';
	
	          $q.all(tables).then(allTranslationsLoaded, reject);
	
	        } else if ($translationTable[langKey]) {
	
	          var oneTranslationsLoaded = function (data) {
	            translations(data.key, data.table);
	            if (langKey === $uses) {
	              useLanguage($uses);
	            }
	            resolve();
	            return data;
	          };
	          oneTranslationsLoaded.displayName = 'refreshPostProcessor';
	
	          loadAsync(langKey).then(oneTranslationsLoaded, reject);
	
	        } else {
	          reject();
	        }
	        return deferred.promise;
	      };
	
	      /**
	       * @ngdoc function
	       * @name pascalprecht.translate.$translate#instant
	       * @methodOf pascalprecht.translate.$translate
	       *
	       * @description
	       * Returns a translation instantly from the internal state of loaded translation. All rules
	       * regarding the current language, the preferred language of even fallback languages will be
	       * used except any promise handling. If a language was not found, an asynchronous loading
	       * will be invoked in the background.
	       *
	       * @param {string|array} translationId A token which represents a translation id
	       *                                     This can be optionally an array of translation ids which
	       *                                     results that the function's promise returns an object where
	       *                                     each key is the translation id and the value the translation.
	       * @param {object} interpolateParams Params
	       * @param {string} interpolationId The id of the interpolation to use
	       * @param {string} forceLanguage A language to be used instead of the current language
	       *
	       * @return {string|object} translation
	       */
	      $translate.instant = function (translationId, interpolateParams, interpolationId, forceLanguage) {
	
	        // we don't want to re-negotiate $uses
	        var uses = (forceLanguage && forceLanguage !== $uses) ? // we don't want to re-negotiate $uses
	              (negotiateLocale(forceLanguage) || forceLanguage) : $uses;
	
	        // Detect undefined and null values to shorten the execution and prevent exceptions
	        if (translationId === null || angular.isUndefined(translationId)) {
	          return translationId;
	        }
	
	        // Check forceLanguage is present
	        if (forceLanguage) {
	          loadTranslationsIfMissing(forceLanguage);
	        }
	
	        // Duck detection: If the first argument is an array, a bunch of translations was requested.
	        // The result is an object.
	        if (angular.isArray(translationId)) {
	          var results = {};
	          for (var i = 0, c = translationId.length; i < c; i++) {
	            results[translationId[i]] = $translate.instant(translationId[i], interpolateParams, interpolationId, forceLanguage);
	          }
	          return results;
	        }
	
	        // We discarded unacceptable values. So we just need to verify if translationId is empty String
	        if (angular.isString(translationId) && translationId.length < 1) {
	          return translationId;
	        }
	
	        // trim off any whitespace
	        if (translationId) {
	          translationId = trim.apply(translationId);
	        }
	
	        var result, possibleLangKeys = [];
	        if ($preferredLanguage) {
	          possibleLangKeys.push($preferredLanguage);
	        }
	        if (uses) {
	          possibleLangKeys.push(uses);
	        }
	        if ($fallbackLanguage && $fallbackLanguage.length) {
	          possibleLangKeys = possibleLangKeys.concat($fallbackLanguage);
	        }
	        for (var j = 0, d = possibleLangKeys.length; j < d; j++) {
	          var possibleLangKey = possibleLangKeys[j];
	          if ($translationTable[possibleLangKey]) {
	            if (typeof $translationTable[possibleLangKey][translationId] !== 'undefined') {
	              result = determineTranslationInstant(translationId, interpolateParams, interpolationId, uses);
	            }
	          }
	          if (typeof result !== 'undefined') {
	            break;
	          }
	        }
	
	        if (!result && result !== '') {
	          if ($notFoundIndicatorLeft || $notFoundIndicatorRight) {
	            result = applyNotFoundIndicators(translationId);
	          } else {
	            // Return translation of default interpolator if not found anything.
	            result = defaultInterpolator.interpolate(translationId, interpolateParams, 'filter');
	            if ($missingTranslationHandlerFactory && !pendingLoader) {
	              result = translateByHandler(translationId, interpolateParams);
	            }
	          }
	        }
	
	        return result;
	      };
	
	      /**
	       * @ngdoc function
	       * @name pascalprecht.translate.$translate#versionInfo
	       * @methodOf pascalprecht.translate.$translate
	       *
	       * @description
	       * Returns the current version information for the angular-translate library
	       *
	       * @return {string} angular-translate version
	       */
	      $translate.versionInfo = function () {
	        return version;
	      };
	
	      /**
	       * @ngdoc function
	       * @name pascalprecht.translate.$translate#loaderCache
	       * @methodOf pascalprecht.translate.$translate
	       *
	       * @description
	       * Returns the defined loaderCache.
	       *
	       * @return {boolean|string|object} current value of loaderCache
	       */
	      $translate.loaderCache = function () {
	        return loaderCache;
	      };
	
	      // internal purpose only
	      $translate.directivePriority = function () {
	        return directivePriority;
	      };
	
	      // internal purpose only
	      $translate.statefulFilter = function () {
	        return statefulFilter;
	      };
	
	      /**
	       * @ngdoc function
	       * @name pascalprecht.translate.$translate#isReady
	       * @methodOf pascalprecht.translate.$translate
	       *
	       * @description
	       * Returns whether the service is "ready" to translate (i.e. loading 1st language).
	       *
	       * See also {@link pascalprecht.translate.$translate#methods_onReady onReady()}.
	       *
	       * @return {boolean} current value of ready
	       */
	      $translate.isReady = function () {
	        return $isReady;
	      };
	
	      var $onReadyDeferred = $q.defer();
	      $onReadyDeferred.promise.then(function () {
	        $isReady = true;
	      });
	
	      /**
	       * @ngdoc function
	       * @name pascalprecht.translate.$translate#onReady
	       * @methodOf pascalprecht.translate.$translate
	       *
	       * @description
	       * Returns whether the service is "ready" to translate (i.e. loading 1st language).
	       *
	       * See also {@link pascalprecht.translate.$translate#methods_isReady isReady()}.
	       *
	       * @param {Function=} fn Function to invoke when service is ready
	       * @return {object} Promise resolved when service is ready
	       */
	      $translate.onReady = function (fn) {
	        var deferred = $q.defer();
	        if (angular.isFunction(fn)) {
	          deferred.promise.then(fn);
	        }
	        if ($isReady) {
	          deferred.resolve();
	        } else {
	          $onReadyDeferred.promise.then(deferred.resolve);
	        }
	        return deferred.promise;
	      };
	
	      /**
	       * @ngdoc function
	       * @name pascalprecht.translate.$translate#getAvailableLanguageKeys
	       * @methodOf pascalprecht.translate.$translate
	       *
	       * @description
	       * This function simply returns the registered language keys being defined before in the config phase
	       * With this, an application can use the array to provide a language selection dropdown or similar
	       * without any additional effort
	       *
	       * @returns {object} returns the list of possibly registered language keys and mapping or null if not defined
	       */
	      $translate.getAvailableLanguageKeys = function () {
	        if ($availableLanguageKeys.length > 0) {
	          return $availableLanguageKeys;
	        }
	        return null;
	      };
	
	      // Whenever $translateReady is being fired, this will ensure the state of $isReady
	      var globalOnReadyListener = $rootScope.$on('$translateReady', function () {
	        $onReadyDeferred.resolve();
	        globalOnReadyListener(); // one time only
	        globalOnReadyListener = null;
	      });
	      var globalOnChangeListener = $rootScope.$on('$translateChangeEnd', function () {
	        $onReadyDeferred.resolve();
	        globalOnChangeListener(); // one time only
	        globalOnChangeListener = null;
	      });
	
	      if ($loaderFactory) {
	
	        // If at least one async loader is defined and there are no
	        // (default) translations available we should try to load them.
	        if (angular.equals($translationTable, {})) {
	          if ($translate.use()) {
	            $translate.use($translate.use());
	          }
	        }
	
	        // Also, if there are any fallback language registered, we start
	        // loading them asynchronously as soon as we can.
	        if ($fallbackLanguage && $fallbackLanguage.length) {
	          var processAsyncResult = function (translation) {
	            translations(translation.key, translation.table);
	            $rootScope.$emit('$translateChangeEnd', { language: translation.key });
	            return translation;
	          };
	          for (var i = 0, len = $fallbackLanguage.length; i < len; i++) {
	            var fallbackLanguageId = $fallbackLanguage[i];
	            if ($forceAsyncReloadEnabled || !$translationTable[fallbackLanguageId]) {
	              langPromises[fallbackLanguageId] = loadAsync(fallbackLanguageId).then(processAsyncResult);
	            }
	          }
	        }
	      } else {
	        $rootScope.$emit('$translateReady', { language: $translate.use() });
	      }
	
	      return $translate;
	    }
	  ];
	}
	
	$translate.displayName = 'displayName';
	
	/**
	 * @ngdoc object
	 * @name pascalprecht.translate.$translateDefaultInterpolation
	 * @requires $interpolate
	 *
	 * @description
	 * Uses angular's `$interpolate` services to interpolate strings against some values.
	 *
	 * Be aware to configure a proper sanitization strategy.
	 *
	 * See also:
	 * * {@link pascalprecht.translate.$translateSanitization}
	 *
	 * @return {object} $translateDefaultInterpolation Interpolator service
	 */
	angular.module('pascalprecht.translate').factory('$translateDefaultInterpolation', $translateDefaultInterpolation);
	
	function $translateDefaultInterpolation ($interpolate, $translateSanitization) {
	
	  'use strict';
	
	  var $translateInterpolator = {},
	      $locale,
	      $identifier = 'default';
	
	  /**
	   * @ngdoc function
	   * @name pascalprecht.translate.$translateDefaultInterpolation#setLocale
	   * @methodOf pascalprecht.translate.$translateDefaultInterpolation
	   *
	   * @description
	   * Sets current locale (this is currently not use in this interpolation).
	   *
	   * @param {string} locale Language key or locale.
	   */
	  $translateInterpolator.setLocale = function (locale) {
	    $locale = locale;
	  };
	
	  /**
	   * @ngdoc function
	   * @name pascalprecht.translate.$translateDefaultInterpolation#getInterpolationIdentifier
	   * @methodOf pascalprecht.translate.$translateDefaultInterpolation
	   *
	   * @description
	   * Returns an identifier for this interpolation service.
	   *
	   * @returns {string} $identifier
	   */
	  $translateInterpolator.getInterpolationIdentifier = function () {
	    return $identifier;
	  };
	
	  /**
	   * @deprecated will be removed in 3.0
	   * @see {@link pascalprecht.translate.$translateSanitization}
	   */
	  $translateInterpolator.useSanitizeValueStrategy = function (value) {
	    $translateSanitization.useStrategy(value);
	    return this;
	  };
	
	  /**
	   * @ngdoc function
	   * @name pascalprecht.translate.$translateDefaultInterpolation#interpolate
	   * @methodOf pascalprecht.translate.$translateDefaultInterpolation
	   *
	   * @description
	   * Interpolates given value agains given interpolate params using angulars
	   * `$interpolate` service.
	   *
	   * Since AngularJS 1.5, `value` must not be a string but can be anything input.
	   *
	   * @returns {string} interpolated string.
	   */
	  $translateInterpolator.interpolate = function (value, interpolationParams, context) {
	    interpolationParams = interpolationParams || {};
	    interpolationParams = $translateSanitization.sanitize(interpolationParams, 'params', undefined, context);
	
	    var interpolatedText;
	    if (angular.isNumber(value)) {
	      // numbers are safe
	      interpolatedText = '' + value;
	    } else if (angular.isString(value)) {
	      // strings must be interpolated (that's the job here)
	      interpolatedText = $interpolate(value)(interpolationParams);
	      interpolatedText = $translateSanitization.sanitize(interpolatedText, 'text', undefined, context);
	    } else {
	      // neither a number or a string, cant interpolate => empty string
	      interpolatedText = '';
	    }
	
	    return interpolatedText;
	  };
	
	  return $translateInterpolator;
	}
	
	$translateDefaultInterpolation.displayName = '$translateDefaultInterpolation';
	
	angular.module('pascalprecht.translate').constant('$STORAGE_KEY', 'NG_TRANSLATE_LANG_KEY');
	
	angular.module('pascalprecht.translate')
	/**
	 * @ngdoc directive
	 * @name pascalprecht.translate.directive:translate
	 * @requires $interpolate, 
	 * @requires $compile, 
	 * @requires $parse, 
	 * @requires $rootScope
	 * @restrict AE
	 *
	 * @description
	 * Translates given translation id either through attribute or DOM content.
	 * Internally it uses $translate service to translate the translation id. It possible to
	 * pass an optional `translate-values` object literal as string into translation id.
	 *
	 * @param {string=} translate Translation id which could be either string or interpolated string.
	 * @param {string=} translate-values Values to pass into translation id. Can be passed as object literal string or interpolated object.
	 * @param {string=} translate-attr-ATTR translate Translation id and put it into ATTR attribute.
	 * @param {string=} translate-default will be used unless translation was successful
	 * @param {boolean=} translate-compile (default true if present) defines locally activation of {@link pascalprecht.translate.$translateProvider#methods_usePostCompiling}
	 * @param {boolean=} translate-keep-content (default true if present) defines that in case a KEY could not be translated, that the existing content is left in the innerHTML}
	 *
	 * @example
	   <example module="ngView">
	    <file name="index.html">
	      <div ng-controller="TranslateCtrl">
	
	        <pre translate="TRANSLATION_ID"></pre>
	        <pre translate>TRANSLATION_ID</pre>
	        <pre translate translate-attr-title="TRANSLATION_ID"></pre>
	        <pre translate="{{translationId}}"></pre>
	        <pre translate>{{translationId}}</pre>
	        <pre translate="WITH_VALUES" translate-values="{value: 5}"></pre>
	        <pre translate translate-values="{value: 5}">WITH_VALUES</pre>
	        <pre translate="WITH_VALUES" translate-values="{{values}}"></pre>
	        <pre translate translate-values="{{values}}">WITH_VALUES</pre>
	        <pre translate translate-attr-title="WITH_VALUES" translate-values="{{values}}"></pre>
	        <pre translate="WITH_CAMEL_CASE_KEY" translate-value-camel-case-key="Hi"></pre>
	
	      </div>
	    </file>
	    <file name="script.js">
	      angular.module('ngView', ['pascalprecht.translate'])
	
	      .config(function ($translateProvider) {
	
	        $translateProvider.translations('en',{
	          'TRANSLATION_ID': 'Hello there!',
	          'WITH_VALUES': 'The following value is dynamic: {{value}}',
	          'WITH_CAMEL_CASE_KEY': 'The interpolation key is camel cased: {{camelCaseKey}}'
	        }).preferredLanguage('en');
	
	      });
	
	      angular.module('ngView').controller('TranslateCtrl', function ($scope) {
	        $scope.translationId = 'TRANSLATION_ID';
	
	        $scope.values = {
	          value: 78
	        };
	      });
	    </file>
	    <file name="scenario.js">
	      it('should translate', function () {
	        inject(function ($rootScope, $compile) {
	          $rootScope.translationId = 'TRANSLATION_ID';
	
	          element = $compile('<p translate="TRANSLATION_ID"></p>')($rootScope);
	          $rootScope.$digest();
	          expect(element.text()).toBe('Hello there!');
	
	          element = $compile('<p translate="{{translationId}}"></p>')($rootScope);
	          $rootScope.$digest();
	          expect(element.text()).toBe('Hello there!');
	
	          element = $compile('<p translate>TRANSLATION_ID</p>')($rootScope);
	          $rootScope.$digest();
	          expect(element.text()).toBe('Hello there!');
	
	          element = $compile('<p translate>{{translationId}}</p>')($rootScope);
	          $rootScope.$digest();
	          expect(element.text()).toBe('Hello there!');
	
	          element = $compile('<p translate translate-attr-title="TRANSLATION_ID"></p>')($rootScope);
	          $rootScope.$digest();
	          expect(element.attr('title')).toBe('Hello there!');
	
	          element = $compile('<p translate="WITH_CAMEL_CASE_KEY" translate-value-camel-case-key="Hello"></p>')($rootScope);
	          $rootScope.$digest();
	          expect(element.text()).toBe('The interpolation key is camel cased: Hello');
	        });
	      });
	    </file>
	   </example>
	 */
	.directive('translate', translateDirective);
	function translateDirective($translate, $interpolate, $compile, $parse, $rootScope) {
	
	  'use strict';
	
	  /**
	   * @name trim
	   * @private
	   *
	   * @description
	   * trim polyfill
	   *
	   * @returns {string} The string stripped of whitespace from both ends
	   */
	  var trim = function() {
	    return this.toString().replace(/^\s+|\s+$/g, '');
	  };
	
	  return {
	    restrict: 'AE',
	    scope: true,
	    priority: $translate.directivePriority(),
	    compile: function (tElement, tAttr) {
	
	      var translateValuesExist = (tAttr.translateValues) ?
	        tAttr.translateValues : undefined;
	
	      var translateInterpolation = (tAttr.translateInterpolation) ?
	        tAttr.translateInterpolation : undefined;
	
	      var translateValueExist = tElement[0].outerHTML.match(/translate-value-+/i);
	
	      var interpolateRegExp = '^(.*)(' + $interpolate.startSymbol() + '.*' + $interpolate.endSymbol() + ')(.*)',
	          watcherRegExp = '^(.*)' + $interpolate.startSymbol() + '(.*)' + $interpolate.endSymbol() + '(.*)';
	
	      return function linkFn(scope, iElement, iAttr) {
	
	        scope.interpolateParams = {};
	        scope.preText = '';
	        scope.postText = '';
	        scope.translateNamespace = getTranslateNamespace(scope);
	        var translationIds = {};
	
	        var initInterpolationParams = function (interpolateParams, iAttr, tAttr) {
	          // initial setup
	          if (iAttr.translateValues) {
	            angular.extend(interpolateParams, $parse(iAttr.translateValues)(scope.$parent));
	          }
	          // initially fetch all attributes if existing and fill the params
	          if (translateValueExist) {
	            for (var attr in tAttr) {
	              if (Object.prototype.hasOwnProperty.call(iAttr, attr) && attr.substr(0, 14) === 'translateValue' && attr !== 'translateValues') {
	                var attributeName = angular.lowercase(attr.substr(14, 1)) + attr.substr(15);
	                interpolateParams[attributeName] = tAttr[attr];
	              }
	            }
	          }
	        };
	
	        // Ensures any change of the attribute "translate" containing the id will
	        // be re-stored to the scope's "translationId".
	        // If the attribute has no content, the element's text value (white spaces trimmed off) will be used.
	        var observeElementTranslation = function (translationId) {
	
	          // Remove any old watcher
	          if (angular.isFunction(observeElementTranslation._unwatchOld)) {
	            observeElementTranslation._unwatchOld();
	            observeElementTranslation._unwatchOld = undefined;
	          }
	
	          if (angular.equals(translationId , '') || !angular.isDefined(translationId)) {
	            var iElementText = trim.apply(iElement.text());
	
	            // Resolve translation id by inner html if required
	            var interpolateMatches = iElementText.match(interpolateRegExp);
	            // Interpolate translation id if required
	            if (angular.isArray(interpolateMatches)) {
	              scope.preText = interpolateMatches[1];
	              scope.postText = interpolateMatches[3];
	              translationIds.translate = $interpolate(interpolateMatches[2])(scope.$parent);
	              var watcherMatches = iElementText.match(watcherRegExp);
	              if (angular.isArray(watcherMatches) && watcherMatches[2] && watcherMatches[2].length) {
	                observeElementTranslation._unwatchOld = scope.$watch(watcherMatches[2], function (newValue) {
	                  translationIds.translate = newValue;
	                  updateTranslations();
	                });
	              }
	            } else {
	              // do not assigne the translation id if it is empty.
	              translationIds.translate = !iElementText ? undefined : iElementText;
	            }
	          } else {
	            translationIds.translate = translationId;
	          }
	          updateTranslations();
	        };
	
	        var observeAttributeTranslation = function (translateAttr) {
	          iAttr.$observe(translateAttr, function (translationId) {
	            translationIds[translateAttr] = translationId;
	            updateTranslations();
	          });
	        };
	
	        // initial setup with values
	        initInterpolationParams(scope.interpolateParams, iAttr, tAttr);
	
	        var firstAttributeChangedEvent = true;
	        iAttr.$observe('translate', function (translationId) {
	          if (typeof translationId === 'undefined') {
	            // case of element "<translate>xyz</translate>"
	            observeElementTranslation('');
	          } else {
	            // case of regular attribute
	            if (translationId !== '' || !firstAttributeChangedEvent) {
	              translationIds.translate = translationId;
	              updateTranslations();
	            }
	          }
	          firstAttributeChangedEvent = false;
	        });
	
	        for (var translateAttr in iAttr) {
	          if (iAttr.hasOwnProperty(translateAttr) && translateAttr.substr(0, 13) === 'translateAttr' && translateAttr.length > 13) {
	            observeAttributeTranslation(translateAttr);
	          }
	        }
	
	        iAttr.$observe('translateDefault', function (value) {
	          scope.defaultText = value;
	          updateTranslations();
	        });
	
	        if (translateValuesExist) {
	          iAttr.$observe('translateValues', function (interpolateParams) {
	            if (interpolateParams) {
	              scope.$parent.$watch(function () {
	                angular.extend(scope.interpolateParams, $parse(interpolateParams)(scope.$parent));
	              });
	            }
	          });
	        }
	
	        if (translateValueExist) {
	          var observeValueAttribute = function (attrName) {
	            iAttr.$observe(attrName, function (value) {
	              var attributeName = angular.lowercase(attrName.substr(14, 1)) + attrName.substr(15);
	              scope.interpolateParams[attributeName] = value;
	            });
	          };
	          for (var attr in iAttr) {
	            if (Object.prototype.hasOwnProperty.call(iAttr, attr) && attr.substr(0, 14) === 'translateValue' && attr !== 'translateValues') {
	              observeValueAttribute(attr);
	            }
	          }
	        }
	
	        // Master update function
	        var updateTranslations = function () {
	          for (var key in translationIds) {
	            if (translationIds.hasOwnProperty(key) && translationIds[key] !== undefined) {
	              updateTranslation(key, translationIds[key], scope, scope.interpolateParams, scope.defaultText, scope.translateNamespace);
	            }
	          }
	        };
	
	        // Put translation processing function outside loop
	        var updateTranslation = function(translateAttr, translationId, scope, interpolateParams, defaultTranslationText, translateNamespace) {
	          if (translationId) {
	            // if translation id starts with '.' and translateNamespace given, prepend namespace
	            if (translateNamespace && translationId.charAt(0) === '.') {
	              translationId = translateNamespace + translationId;
	            }
	
	            $translate(translationId, interpolateParams, translateInterpolation, defaultTranslationText, scope.translateLanguage)
	              .then(function (translation) {
	                applyTranslation(translation, scope, true, translateAttr);
	              }, function (translationId) {
	                applyTranslation(translationId, scope, false, translateAttr);
	              });
	          } else {
	            // as an empty string cannot be translated, we can solve this using successful=false
	            applyTranslation(translationId, scope, false, translateAttr);
	          }
	        };
	
	        var applyTranslation = function (value, scope, successful, translateAttr) {
	          if (!successful) {
	            if (typeof scope.defaultText !== 'undefined') {
	              value = scope.defaultText;
	            }
	          }
	          if (translateAttr === 'translate') {
	            // default translate into innerHTML
	            if (successful || (!successful && !$translate.isKeepContent() && typeof iAttr.translateKeepContent === 'undefined')) {
	              iElement.empty().append(scope.preText + value + scope.postText);
	            }
	            var globallyEnabled = $translate.isPostCompilingEnabled();
	            var locallyDefined = typeof tAttr.translateCompile !== 'undefined';
	            var locallyEnabled = locallyDefined && tAttr.translateCompile !== 'false';
	            if ((globallyEnabled && !locallyDefined) || locallyEnabled) {
	              $compile(iElement.contents())(scope);
	            }
	          } else {
	            // translate attribute
	            var attributeName = iAttr.$attr[translateAttr];
	            if (attributeName.substr(0, 5) === 'data-') {
	              // ensure html5 data prefix is stripped
	              attributeName = attributeName.substr(5);
	            }
	            attributeName = attributeName.substr(15);
	            iElement.attr(attributeName, value);
	          }
	        };
	
	        if (translateValuesExist || translateValueExist || iAttr.translateDefault) {
	          scope.$watch('interpolateParams', updateTranslations, true);
	        }
	
	        // Replaced watcher on translateLanguage with event listener
	        scope.$on('translateLanguageChanged', updateTranslations);
	
	        // Ensures the text will be refreshed after the current language was changed
	        // w/ $translate.use(...)
	        var unbind = $rootScope.$on('$translateChangeSuccess', updateTranslations);
	
	        // ensure translation will be looked up at least one
	        if (iElement.text().length) {
	          if (iAttr.translate) {
	            observeElementTranslation(iAttr.translate);
	          } else {
	            observeElementTranslation('');
	          }
	        } else if (iAttr.translate) {
	          // ensure attribute will be not skipped
	          observeElementTranslation(iAttr.translate);
	        }
	        updateTranslations();
	        scope.$on('$destroy', unbind);
	      };
	    }
	  };
	}
	
	/**
	 * Returns the scope's namespace.
	 * @private
	 * @param scope
	 * @returns {string}
	 */
	function getTranslateNamespace(scope) {
	  'use strict';
	  if (scope.translateNamespace) {
	    return scope.translateNamespace;
	  }
	  if (scope.$parent) {
	    return getTranslateNamespace(scope.$parent);
	  }
	}
	
	translateDirective.displayName = 'translateDirective';
	
	angular.module('pascalprecht.translate')
	/**
	 * @ngdoc directive
	 * @name pascalprecht.translate.directive:translate-attr
	 * @restrict A
	 *
	 * @description
	 * Translates attributes like translate-attr-ATTR, but with an object like ng-class.
	 * Internally it uses `translate` service to translate translation id. It possible to
	 * pass an optional `translate-values` object literal as string into translation id.
	 *
	 * @param {string=} translate-attr Object literal mapping attributes to translation ids.
	 * @param {string=} translate-values Values to pass into the translation ids. Can be passed as object literal string.
	 *
	 * @example
	   <example module="ngView">
	    <file name="index.html">
	      <div ng-controller="TranslateCtrl">
	
	        <input translate-attr="{ placeholder: translationId, title: 'WITH_VALUES' }" translate-values="{value: 5}" />
	
	      </div>
	    </file>
	    <file name="script.js">
	      angular.module('ngView', ['pascalprecht.translate'])
	
	      .config(function ($translateProvider) {
	
	        $translateProvider.translations('en',{
	          'TRANSLATION_ID': 'Hello there!',
	          'WITH_VALUES': 'The following value is dynamic: {{value}}',
	        }).preferredLanguage('en');
	
	      });
	
	      angular.module('ngView').controller('TranslateCtrl', function ($scope) {
	        $scope.translationId = 'TRANSLATION_ID';
	
	        $scope.values = {
	          value: 78
	        };
	      });
	    </file>
	    <file name="scenario.js">
	      it('should translate', function () {
	        inject(function ($rootScope, $compile) {
	          $rootScope.translationId = 'TRANSLATION_ID';
	
	          element = $compile('<input translate-attr="{ placeholder: translationId, title: 'WITH_VALUES' }" translate-values="{ value: 5 }" />')($rootScope);
	          $rootScope.$digest();
	          expect(element.attr('placeholder)).toBe('Hello there!');
	          expect(element.attr('title)).toBe('The following value is dynamic: 5');
	        });
	      });
	    </file>
	   </example>
	 */
	.directive('translateAttr', translateAttrDirective);
	function translateAttrDirective($translate, $rootScope) {
	
	  'use strict';
	
	  return {
	    restrict: 'A',
	    priority: $translate.directivePriority(),
	    link: function linkFn(scope, element, attr) {
	
	      var translateAttr,
	          translateValues,
	          previousAttributes = {};
	
	      // Main update translations function
	      var updateTranslations = function () {
	        angular.forEach(translateAttr, function (translationId, attributeName) {
	          if (!translationId) {
	            return;
	          }
	          previousAttributes[attributeName] = true;
	
	          // if translation id starts with '.' and translateNamespace given, prepend namespace
	          if (scope.translateNamespace && translationId.charAt(0) === '.') {
	            translationId = scope.translateNamespace + translationId;
	          }
	          $translate(translationId, translateValues, attr.translateInterpolation, undefined, scope.translateLanguage)
	            .then(function (translation) {
	              element.attr(attributeName, translation);
	            }, function (translationId) {
	              element.attr(attributeName, translationId);
	            });
	        });
	
	        // Removing unused attributes that were previously used
	        angular.forEach(previousAttributes, function (flag, attributeName) {
	          if (!translateAttr[attributeName]) {
	            element.removeAttr(attributeName);
	            delete previousAttributes[attributeName];
	          }
	        });
	      };
	
	      // Watch for attribute changes
	      watchAttribute(
	        scope,
	        attr.translateAttr,
	        function (newValue) { translateAttr = newValue; },
	        updateTranslations
	      );
	      // Watch for value changes
	      watchAttribute(
	        scope,
	        attr.translateValues,
	        function (newValue) { translateValues = newValue; },
	        updateTranslations
	      );
	
	      if (attr.translateValues) {
	        scope.$watch(attr.translateValues, updateTranslations, true);
	      }
	
	      // Replaced watcher on translateLanguage with event listener
	      scope.$on('translateLanguageChanged', updateTranslations);
	
	      // Ensures the text will be refreshed after the current language was changed
	      // w/ $translate.use(...)
	      var unbind = $rootScope.$on('$translateChangeSuccess', updateTranslations);
	
	      updateTranslations();
	      scope.$on('$destroy', unbind);
	    }
	  };
	}
	
	function watchAttribute(scope, attribute, valueCallback, changeCallback) {
	  'use strict';
	  if (!attribute) {
	    return;
	  }
	  if (attribute.substr(0, 2) === '::') {
	    attribute = attribute.substr(2);
	  } else {
	    scope.$watch(attribute, function(newValue) {
	      valueCallback(newValue);
	      changeCallback();
	    }, true);
	  }
	  valueCallback(scope.$eval(attribute));
	}
	
	translateAttrDirective.displayName = 'translateAttrDirective';
	
	angular.module('pascalprecht.translate')
	/**
	 * @ngdoc directive
	 * @name pascalprecht.translate.directive:translateCloak
	 * @requires $rootScope
	 * @requires $translate
	 * @restrict A
	 *
	 * $description
	 * Adds a `translate-cloak` class name to the given element where this directive
	 * is applied initially and removes it, once a loader has finished loading.
	 *
	 * This directive can be used to prevent initial flickering when loading translation
	 * data asynchronously.
	 *
	 * The class name is defined in
	 * {@link pascalprecht.translate.$translateProvider#cloakClassName $translate.cloakClassName()}.
	 *
	 * @param {string=} translate-cloak If a translationId is provided, it will be used for showing
	 *                                  or hiding the cloak. Basically it relies on the translation
	 *                                  resolve.
	 */
	.directive('translateCloak', translateCloakDirective);
	
	function translateCloakDirective($translate, $rootScope) {
	
	  'use strict';
	
	  return {
	    compile: function (tElement) {
	      var applyCloak = function () {
	        tElement.addClass($translate.cloakClassName());
	      },
	      removeCloak = function () {
	        tElement.removeClass($translate.cloakClassName());
	      };
	      $translate.onReady(function () {
	        removeCloak();
	      });
	      applyCloak();
	
	      return function linkFn(scope, iElement, iAttr) {
	        if (iAttr.translateCloak && iAttr.translateCloak.length) {
	          // Register a watcher for the defined translation allowing a fine tuned cloak
	          iAttr.$observe('translateCloak', function (translationId) {
	            $translate(translationId).then(removeCloak, applyCloak);
	          });
	          // Register for change events as this is being another indicicator revalidating the cloak)
	          $rootScope.$on('$translateChangeSuccess', function () {
	            $translate(iAttr.translateCloak).then(removeCloak, applyCloak);
	          });
	        }
	      };
	    }
	  };
	}
	
	translateCloakDirective.displayName = 'translateCloakDirective';
	
	angular.module('pascalprecht.translate')
	/**
	 * @ngdoc directive
	 * @name pascalprecht.translate.directive:translateNamespace
	 * @restrict A
	 *
	 * @description
	 * Translates given translation id either through attribute or DOM content.
	 * Internally it uses `translate` filter to translate translation id. It possible to
	 * pass an optional `translate-values` object literal as string into translation id.
	 *
	 * @param {string=} translate namespace name which could be either string or interpolated string.
	 *
	 * @example
	   <example module="ngView">
	    <file name="index.html">
	      <div translate-namespace="CONTENT">
	
	        <div>
	            <h1 translate>.HEADERS.TITLE</h1>
	            <h1 translate>.HEADERS.WELCOME</h1>
	        </div>
	
	        <div translate-namespace=".HEADERS">
	            <h1 translate>.TITLE</h1>
	            <h1 translate>.WELCOME</h1>
	        </div>
	
	      </div>
	    </file>
	    <file name="script.js">
	      angular.module('ngView', ['pascalprecht.translate'])
	
	      .config(function ($translateProvider) {
	
	        $translateProvider.translations('en',{
	          'TRANSLATION_ID': 'Hello there!',
	          'CONTENT': {
	            'HEADERS': {
	                TITLE: 'Title'
	            }
	          },
	          'CONTENT.HEADERS.WELCOME': 'Welcome'
	        }).preferredLanguage('en');
	
	      });
	
	    </file>
	   </example>
	 */
	.directive('translateNamespace', translateNamespaceDirective);
	
	function translateNamespaceDirective() {
	
	  'use strict';
	
	  return {
	    restrict: 'A',
	    scope: true,
	    compile: function () {
	      return {
	        pre: function (scope, iElement, iAttrs) {
	          scope.translateNamespace = getTranslateNamespace(scope);
	
	          if (scope.translateNamespace && iAttrs.translateNamespace.charAt(0) === '.') {
	            scope.translateNamespace += iAttrs.translateNamespace;
	          } else {
	            scope.translateNamespace = iAttrs.translateNamespace;
	          }
	        }
	      };
	    }
	  };
	}
	
	/**
	 * Returns the scope's namespace.
	 * @private
	 * @param scope
	 * @returns {string}
	 */
	function getTranslateNamespace(scope) {
	  'use strict';
	  if (scope.translateNamespace) {
	    return scope.translateNamespace;
	  }
	  if (scope.$parent) {
	    return getTranslateNamespace(scope.$parent);
	  }
	}
	
	translateNamespaceDirective.displayName = 'translateNamespaceDirective';
	
	angular.module('pascalprecht.translate')
	/**
	 * @ngdoc directive
	 * @name pascalprecht.translate.directive:translateLanguage
	 * @restrict A
	 *
	 * @description
	 * Forces the language to the directives in the underlying scope.
	 *
	 * @param {string=} translate language that will be negotiated.
	 *
	 * @example
	   <example module="ngView">
	    <file name="index.html">
	      <div>
	
	        <div>
	            <h1 translate>HELLO</h1>
	        </div>
	
	        <div translate-language="de">
	            <h1 translate>HELLO</h1>
	        </div>
	
	      </div>
	    </file>
	    <file name="script.js">
	      angular.module('ngView', ['pascalprecht.translate'])
	
	      .config(function ($translateProvider) {
	
	        $translateProvider
	          .translations('en',{
	            'HELLO': 'Hello world!'
	          })
	          .translations('de',{
	            'HELLO': 'Hallo Welt!'
	          })
	          .preferredLanguage('en');
	
	      });
	
	    </file>
	   </example>
	 */
	.directive('translateLanguage', translateLanguageDirective);
	
	function translateLanguageDirective() {
	
	  'use strict';
	
	  return {
	    restrict: 'A',
	    scope: true,
	    compile: function () {
	      return function linkFn(scope, iElement, iAttrs) {
	
	        iAttrs.$observe('translateLanguage', function (newTranslateLanguage) {
	          scope.translateLanguage = newTranslateLanguage;
	        });
	
	        scope.$watch('translateLanguage', function(){
	          scope.$broadcast('translateLanguageChanged');
	        });
	      };
	    }
	  };
	}
	
	translateLanguageDirective.displayName = 'translateLanguageDirective';
	
	angular.module('pascalprecht.translate')
	/**
	 * @ngdoc filter
	 * @name pascalprecht.translate.filter:translate
	 * @requires $parse
	 * @requires pascalprecht.translate.$translate
	 * @function
	 *
	 * @description
	 * Uses `$translate` service to translate contents. Accepts interpolate parameters
	 * to pass dynamized values though translation.
	 *
	 * @param {string} translationId A translation id to be translated.
	 * @param {*=} interpolateParams Optional object literal (as hash or string) to pass values into translation.
	 *
	 * @returns {string} Translated text.
	 *
	 * @example
	   <example module="ngView">
	    <file name="index.html">
	      <div ng-controller="TranslateCtrl">
	
	        <pre>{{ 'TRANSLATION_ID' | translate }}</pre>
	        <pre>{{ translationId | translate }}</pre>
	        <pre>{{ 'WITH_VALUES' | translate:'{value: 5}' }}</pre>
	        <pre>{{ 'WITH_VALUES' | translate:values }}</pre>
	
	      </div>
	    </file>
	    <file name="script.js">
	      angular.module('ngView', ['pascalprecht.translate'])
	
	      .config(function ($translateProvider) {
	
	        $translateProvider.translations('en', {
	          'TRANSLATION_ID': 'Hello there!',
	          'WITH_VALUES': 'The following value is dynamic: {{value}}'
	        });
	        $translateProvider.preferredLanguage('en');
	
	      });
	
	      angular.module('ngView').controller('TranslateCtrl', function ($scope) {
	        $scope.translationId = 'TRANSLATION_ID';
	
	        $scope.values = {
	          value: 78
	        };
	      });
	    </file>
	   </example>
	 */
	.filter('translate', translateFilterFactory);
	
	function translateFilterFactory($parse, $translate) {
	
	  'use strict';
	
	  var translateFilter = function (translationId, interpolateParams, interpolation, forceLanguage) {
	    if (!angular.isObject(interpolateParams)) {
	      interpolateParams = $parse(interpolateParams)(this);
	    }
	
	    return $translate.instant(translationId, interpolateParams, interpolation, forceLanguage);
	  };
	
	  if ($translate.statefulFilter()) {
	    translateFilter.$stateful = true;
	  }
	
	  return translateFilter;
	}
	
	translateFilterFactory.displayName = 'translateFilterFactory';
	
	angular.module('pascalprecht.translate')
	
	/**
	 * @ngdoc object
	 * @name pascalprecht.translate.$translationCache
	 * @requires $cacheFactory
	 *
	 * @description
	 * The first time a translation table is used, it is loaded in the translation cache for quick retrieval. You
	 * can load translation tables directly into the cache by consuming the
	 * `$translationCache` service directly.
	 *
	 * @return {object} $cacheFactory object.
	 */
	  .factory('$translationCache', $translationCache);
	
	function $translationCache($cacheFactory) {
	
	  'use strict';
	
	  return $cacheFactory('translations');
	}
	
	$translationCache.displayName = '$translationCache';
	return 'pascalprecht.translate';
	
	}));


/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	__webpack_require__(112);
	
	var _tpl = __webpack_require__(113);
	
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
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(224);

/***/ },
/* 113 */
/***/ function(module, exports) {

	module.exports = "<ul role=\"menu\" class=\"dropdown-menu\" ng-init=\"vm._showType= true\">\n    <li ng-repeat=\"type in vm.types\"\n        dnd-draggable=\"type\"\n        dnd-type=\"type.type\"\n        dnd-dragstart=\"vm.start(type.type)\"\n        dnd-effect-allowed=\"move\"\n        dnd-dragend=\"vm.end()\"\n        ng-show=\"vm._showType\">\n        <a ng-click=\"vm._showType = !vm._showType;\n                    vm.selectType(type.type);\n                    $event.stopPropagation();\">\n            {{type.type}}\n        </a>\n    </li>\n    <li ng-show=\"!vm._showType\"\n        style=\"padding-left: 5px;padding-right: 20px;\">\n        <div class=\"col-xs-10\">\n            <input type=\"text\" class=\"input-xs\" ng-model=\"vm._filter\">\n        </div>\n        <div class=\"col-xs-2\">\n            <button type=\"button\" class=\"btn btn-xs btn-white\"\n                    ng-click=\"vm._showType = !vm._showType;$event.stopPropagation();\">\n                <i class=\"fa fa-times\"></i>\n            </button>\n        </div>\n    </li>\n    <li ng-repeat=\"element in vm.list\"\n        ng-init=\"_element = vm.convert(element)\"\n        dnd-draggable=\"_element\"\n        dnd-type=\"vm._type\"\n        dnd-effect-allowed=\"move\"\n        dnd-dragstart=\"vm.start(vm._type)\"\n        dnd-dragend=\"vm.end()\"\n        ng-show=\"!vm._showType\">\n        <a ng-click=\"\">{{vm.getTitle(element)}}</a>\n    </li>\n</ul>\n"

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _common = __webpack_require__(100);
	
	var _common2 = _interopRequireDefault(_common);
	
	__webpack_require__(112);
	
	var _module2 = __webpack_require__(13);
	
	var _module3 = _interopRequireDefault(_module2);
	
	var _module4 = __webpack_require__(115);
	
	var _module5 = _interopRequireDefault(_module4);
	
	__webpack_require__(14);
	
	var _element = __webpack_require__(117);
	
	var _element2 = _interopRequireDefault(_element);
	
	var _editor = __webpack_require__(118);
	
	var _editor2 = _interopRequireDefault(_editor);
	
	var _cmsWrapper = __webpack_require__(120);
	
	var _cmsWrapper2 = _interopRequireDefault(_cmsWrapper);
	
	__webpack_require__(121);
	
	var _fragment = __webpack_require__(122);
	
	var _fragment2 = _interopRequireDefault(_fragment);
	
	var _container = __webpack_require__(123);
	
	var _container2 = _interopRequireDefault(_container);
	
	var _containerEdit = __webpack_require__(125);
	
	var _containerEdit2 = _interopRequireDefault(_containerEdit);
	
	var _cmsFormPath = __webpack_require__(127);
	
	var _cmsFormPath2 = _interopRequireDefault(_cmsFormPath);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _module = angular.module('components.cmsMain', ['dndLists', 'ui.bootstrap', _common2.default, _module3.default, _module5.default, 'ui.bootstrap.contextMenu']).directive('cmsContainer', _container2.default).directive('cmsElement', _element2.default).directive('cmsEditor', _editor2.default).directive('cmsWrapper', _cmsWrapper2.default).directive('cmsFragment', _fragment2.default).directive('cmsFormPath', _cmsFormPath2.default).directive('cmsContainerEdit', _containerEdit2.default);
	
	exports.default = _module.name;

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _module2 = __webpack_require__(16);
	
	var _module3 = _interopRequireDefault(_module2);
	
	var _tpl = __webpack_require__(116);
	
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
/* 116 */
/***/ function(module, exports) {

	module.exports = "<div class=\"cms-wrapper cms\"\n     ng-init=\"_showId = false;\">\n\n    <div style=\"position: absolute;right: 10px;\">\n        <button class=\"btn btn-xs btn-white\"\n                ng-click=\"_showId=!_showId;\"\n                ng-bind=\"_showId?'hide id':'show id'\">\n        </button>\n        <button type=\"button\" class=\"btn btn-xs btn-white\" ng-bind=\"vm.fullScreenText\"\n                ng-click=\"vm.changeScreenSize();\"></button>\n    </div>\n\n    <h3 style=\"font-weight: 300;\">Edit {{vm.cmsType}} {{_showId?'('+vm.cmsModel._id+')':''}}:</h3>\n\n    <form ng-submit=\"vm.onSubmit()\"\n          novalidate\n          class=\"cms-form form-horizontal\">\n\n        <uib-tabset ng-if=\"vm.isTab\">\n            <uib-tab ng-repeat=\"tab in vm.cmsFields\"\n                     heading=\"{{tab.title}}\"\n                     active=\"tab.active\">\n                <br>\n                <formly-form model=\"vm.cmsModel\" fields=\"tab.fields\"\n                             form=\"vm.form\" options=\"vm.options\">\n                </formly-form>\n            </uib-tab>\n        </uib-tabset>\n\n        <div>\n            <br>\n            <formly-form model=\"vm.cmsModel\" fields=\"vm.cmsFields\"\n                         form=\"vm.form\" options=\"vm.options\" ng-if=\"!vm.isTab\">\n            </formly-form>\n        </div>\n\n        <div class=\"form-group\">\n            <div class=\"col-sm-offset-2 col-sm-10\">\n                <button type=\"submit\" class=\"btn btn-primary submit-button\" ng-disabled=\"vm.form.$invalid\">Submit\n                </button>\n                <button type=\"button\" class=\"btn btn-primary\" ng-click=\"vm.onApply()\">Apply</button>\n                <button type=\"button\" class=\"btn btn-primary\" ng-click=\"vm.onAdd()\">Save and Add</button>\n                <button type=\"button\" class=\"btn btn-primary\" ng-click=\"vm.onCancel()\">Cancel</button>\n\n                <button type=\"button\" class=\"cms-btn btn-outline btn btn-danger pull-right\" ng-click=\"vm.onDelete()\">Delete</button>\n\n            </div>\n        </div>\n    </form>\n</div>"

/***/ },
/* 117 */
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
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _editor = __webpack_require__(119);
	
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
/* 119 */
/***/ function(module, exports) {

	module.exports = "<div context-menu=\"menu\"\n     ng-style=\"{display:vm.cmsMenu === 'true'?'inline-block':'block'}\">\n    <div ng-if=\"vm.cmsMenu !== 'true'\" class=\"cms cms-element-wrapper\" ng-style=\"vm.editorIcon\">\n        <div class=\"cms-element-controll-icon label label-primary\" style=\"font-size: 13px\"\n             ng-mouseover=\"vm.showControl()\" ng-show=\"vm.getControlVisible()\">\n            <i class=\"fa fa-circle-o-notch\"></i>\n        </div>\n\n        <div class=\"cms-element-controll\"\n             ng-mouseover=\"vm.__showControl = true\"\n             ng-mouseleave=\"vm.__showControl = false\"\n             ng-show=\"vm._showControl || vm.__showControl\">\n            <button type=\"button\" class=\"btn btn-sm btn-white pull-right\" ng-click=\"vm.edit()\">\n                <i class=\"fa fa-pencil-square-o\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-sm btn-white pull-right\" ng-click=\"vm.removeByDatabase()\">\n                <i class=\"fa fa-trash\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-sm btn-white pull-right\" ng-click=\"vm.remove()\">\n                <i class=\"fa fa-trash-o\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-sm btn-white pull-right\" ng-click=\"vm.copy()\">\n                <i class=\"fa fa-files-o\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-sm btn-white pull-right\" ng-click=\"vm.cmsRefresh()\">\n                <i class=\"fa fa-refresh\"></i>\n            </button>\n        </div>\n\n    </div>\n    <ng-transclude></ng-transclude>\n</div>"

/***/ },
/* 120 */
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
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(225);

/***/ },
/* 122 */
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
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _container = __webpack_require__(124);
	
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
/* 124 */
/***/ function(module, exports) {

	module.exports = "<i class=\"fa fa-circle-o-notch cms-element-controll-icon\"\n   ng-mouseover=\"vm.showControl()\"\n   ng-show=\"!vm._showControl && (vm.editState.editMode === 1)\"></i>\n<div class=\"cms-element-controll\"\n     ng-mouseover=\"vm.__showControl = true\"\n     ng-mouseleave=\"vm.__showControl = false\"\n     ng-show=\"vm._showControl || vm.__showControl\">\n    <button type=\"button\" class=\"btn btn-sm btn-white pull-right\" ng-click=\"\">\n        <i class=\"fa fa-plus\"></i>\n    </button>\n</div>\n<div class=\"{{vm.cmsInline === 'true'?'cms-containers-inline':'cms-containers'}}\"\n     dnd-list=\"vm.elements\"\n     dnd-disable-if=\"vm.elements.length > 0 && vm.elements[0].binding\"\n     dnd-allowed-types=\"vm.allowedTypes\"\n     dnd-horizontal-list=\"{{vm.cmsInline}}\"\n     ng-class=\"{'cms-panel-highlight':vm.highlight()}\">\n    <div ng-repeat=\"element in vm.elements\"\n         dnd-disable-if=\"element.binding || !vm.matchEditMode(element.type)\"\n         dnd-draggable=\"element\"\n         dnd-type=\"element.type\"\n         dnd-moved=\"vm.elements.splice($index, 1);\"\n         dnd-effect-allowed=\"move\"\n         dnd-dragstart=\"vm.start(element.type)\"\n         dnd-dragend=\"vm.end();\"\n         cms-element=\"element\"\n         cms-path=\"{{vm.path}}.elements[{{$index}}]\"\n         class=\"{{vm.cmsInline === 'true'?'cms-element':''}}\"\n    ></div>\n</div>\n"

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _containerEdit = __webpack_require__(126);
	
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
/* 126 */
/***/ function(module, exports) {

	module.exports = "<div class=\"cms-container-panel panel panel-default ui-widget-content\"\n     ng-show=\"vm.editState.showContainerEdit\"\n     style=\"position: fixed; top: 70px; right: 50px;width: 300px;height: 600px;z-index:1000\">\n    <div class=\"panel-heading\" style=\"padding: 0px 0px 0px 10px;height: 26px;cursor: move\">\n        <div class=\"panel-title\">\n            <h5>Edit panel</h5>\n        </div>\n    </div>\n    <div class=\"panel-body\">\n        <div js-tree=\"vm.treeConfig\" ng-model=\"vm.tree\"\n             tree-events=\"changed:vm.selectNode\" tree=\"vm.treeInstance\"></div>\n    </div>\n</div>"

/***/ },
/* 127 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
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
	            class: '@?cmsClass'
	        },
	        template: '\n        <formly-form model="vm.model" fields="vm.fields" form="vm.form" options="vm.options"></formly-form>\n        ',
	        controller: function controller() {
	            var vm = this;
	
	            var Path = _.find(cms.types[vm.type].paths, { path: vm.path });
	
	            if (Path) {
	                vm.fields = [angular.copy(_.get(cms.types[vm.type].form, Path.pathInForm))];
	
	                if (vm.class && vm.class !== '') _.merge(vm.fields[0], { templateOptions: { class: vm.class } });
	            }
	        },
	        controllerAs: 'vm'
	    };
	}
	
	exports.default = directive;

/***/ },
/* 128 */
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
	
	var _tpl = __webpack_require__(129);
	
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
/* 129 */
/***/ function(module, exports) {

	module.exports = "<div class=\"cms-wrapper animated fadeInRight cms-sidebar cms\">\n    <button type=\"button\" class=\"btn btn-sm btn-white cms-close-position\"\n            ng-click=\"cancel()\">\n        <i class=\"fa fa-times\"></i>\n    </button>\n\n    <div class=\"col-xs-6 col-sm-4 pull-right cms-controll-panel-right\">\n        <div ng-show=\"node\">\n            <h4>Information: </h4>\n            <h5 style=\"word-break: break-all;\">Name: {{node.text}}</h5>\n            <h5 style=\"word-break: break-all;\">Type: {{node.type}}</h5>\n            <h5 style=\"word-break: break-all;\">Path: {{node.path}}</h5>\n            <br>\n\n            <div class=\"btn-group\">\n                <button class=\"btn btn-xs btn-white cms-btn-bottom\"\n                        ng-click=\"open()\">\n                    Open page\n                </button>\n                <button class=\"btn btn-xs btn-white cms-btn-bottom\"\n                        ng-click=\"deletePage()\">\n                    Delete\n                </button>\n            </div>\n            <form role=\"form\" ng-submit=\"makeTemplate(templateName);templateName = '';\">\n                <button class=\"btn btn-xs btn-white cms-btn-bottom\"\n                        type=\"submit\" style=\"position: absolute;right: 15px;\"\n                        ng-disabled=\"!templateName\">\n                    Make template page\n                </button>\n                <input ng-model=\"templateName\" type=\"text\" class=\"form-control input-xs\" placeholder=\"template name\">\n            </form>\n            <form role=\"form\" ng-submit=\"createPage(template.selected, pageName);pageName = '';\">\n                <ui-select class=\"cms-select\" ng-model=\"template.selected\" theme=\"bootstrap\" ng-disabled=\"disabled\"\n                           style=\"min-width: 60px;\">\n                    <ui-select-match placeholder=\"Select a template page\">{{$select.selected}}</ui-select-match>\n                    <ui-select-choices repeat=\"_template in templates\">\n                        {{_template}}\n                    </ui-select-choices>\n                </ui-select>\n                <button class=\"btn btn-xs btn-white cms-btn-bottom\"\n                        type=\"submit\" style=\"position: absolute;right: 15px;\"\n                        ng-disabled=\"!pageName || !template.selected\">\n                    Create new page\n                </button>\n                <input ng-model=\"pageName\" type=\"text\" class=\"form-control input-xs\" placeholder=\"page name\">\n            </form>\n\n            <form role=\"form\" ng-submit=\"renamePage(newPageName);newPageName = '';\">\n                <button class=\"btn btn-xs btn-white cms-btn-bottom\"\n                        type=\"submit\" style=\"position: absolute;right: 15px;\"\n                        ng-disabled=\"!newPageName\">\n                    Rename\n                </button>\n                <input ng-model=\"newPageName\" type=\"text\" class=\"form-control input-xs\" placeholder=\"page name\">\n            </form>\n\n            <form role=\"form\" ng-submit=\"onFileSelect(files);\">\n                <button class=\"btn btn-xs btn-white cms-btn-bottom\"\n                        type=\"submit\" style=\"position: absolute;right: 15px;\">\n                    Up\n                </button>\n                <input type=\"file\" ngf-select ng-model=\"files\"\n                       ngf-multiple=\"true\" name=\"file\" class=\"form-control input-xs\"\n                       placeholder=\"file upload\">\n            </form>\n\n        </div>\n    </div>\n\n    <h2>Sitemaps:</h2>\n\n    <div js-tree=\"treeConfig\" ng-model=\"tree\"\n         tree-events=\"changed:selectNode\"></div>\n</div>\n"

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _tpl = __webpack_require__(131);
	
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
/* 131 */
/***/ function(module, exports) {

	module.exports = "<div style=\"margin-top: 7px;cursor: pointer;\">\n    <ui-select data-ng-model=\"vm.editState.editMode\" theme=\"bootstrap\" on-select=\"vm.onSelect($item)\">\n        <ui-select-match placeholder=\"\">\n            {{$select.selected.label}}&nbsp;&nbsp;&nbsp;\n        </ui-select-match>\n        <ui-select-choices data-repeat=\"item.value as item in vm.modes | filterBy: ['label']: $select.search\">\n            <div ng-bind-html=\"item.label | highlight: $select.search\"></div>\n        </ui-select-choices>\n    </ui-select>\n</div>\n"

/***/ },
/* 132 */
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
	
	var _module2 = __webpack_require__(114);
	
	var _module3 = _interopRequireDefault(_module2);
	
	var _module4 = __webpack_require__(115);
	
	var _module5 = _interopRequireDefault(_module4);
	
	var _cmsList = __webpack_require__(133);
	
	var _cmsList2 = _interopRequireDefault(_cmsList);
	
	var _importService2 = __webpack_require__(135);
	
	var _importService3 = _interopRequireDefault(_importService2);
	
	var _exportService2 = __webpack_require__(137);
	
	var _exportService3 = _interopRequireDefault(_exportService2);
	
	var _tpl = __webpack_require__(139);
	
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
	
	                        cms.loadElements($scope.node.type, function (list) {
	                            var _$scope$list;
	
	                            $scope.loading = false;
	                            (_$scope$list = $scope.list).push.apply(_$scope$list, _toConsumableArray(list));
	
	                            if ($scope.showAs.type === 'element') {
	                                $scope.selectElement($scope.list[0]._id);
	                            }
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
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _cmsList = __webpack_require__(134);
	
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
/* 134 */
/***/ function(module, exports) {

	module.exports = ""

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _importService = __webpack_require__(136);
	
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
/* 136 */
/***/ function(module, exports) {

	module.exports = "<div style=\"padding: 20px\">\n    <div class=\"panel panel-default\">\n        <div class=\"panel-body\">\n            <div js-tree=\"treeConfig\" ng-model=\"tree\"\n                 tree=\"treeInstance\"\n                 tree-events=\"changed:selectNode\"></div>\n        </div>\n    </div>\n    <br><br>\n    <button type=\"button\" class=\"btn btn-primary submit-button\" ng-click=\"choose()\">Choose</button>\n    <button type=\"button\" class=\"btn btn-primary\" ng-click=\"cancel()\">Cancel</button>\n</div>\n"

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _exportService = __webpack_require__(138);
	
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
/* 138 */
/***/ function(module, exports) {

	module.exports = "<div style=\"padding: 20px\">\n\n    <div class=\"panel panel-default\">\n        <div class=\"panel-body\">\n            <form role=\"form\" class=\"form-horizontal\">\n                <div class=\"form-group\">\n                    <label class=\"col-sm-12\">Filename:</label>\n                    <div class=\"col-sm-12\"><input type=\"text\" ng-model=\"filename\" class=\"form-control\"></div>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"col-sm-12\">Select Types:</label>\n                    <div class=\"cms-neutral\">\n                        <formly-form model=\"data\" fields=\"fields\" form=\"form\" options=\"options\"></formly-form>\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n\n\n    <br><br>\n    <button type=\"button\" class=\"btn btn-primary submit-button\" ng-click=\"choose()\">Choose</button>\n    <button type=\"button\" class=\"btn btn-primary\" ng-click=\"cancel()\">Cancel</button>\n</div>\n"

/***/ },
/* 139 */
/***/ function(module, exports) {

	module.exports = "<div class=\"cms-wrapper animated fadeInRight cms-sidebar cms\">\n    <button type=\"button\" class=\"btn btn-sm btn-white cms-close-position\"\n            ng-click=\"cancel()\">\n        <i class=\"fa fa-times\"></i>\n    </button>\n\n    <br>\n    <div class=\"row\">\n        <div class=\"col-xs-3 cms-panel\">\n            <div class=\"panel panel-primary\">\n                <div class=\"panel-heading\">Types</div>\n                <div class=\"panel-body\">\n                    <div js-tree=\"treeConfig\" ng-model=\"tree\"\n                         tree-events=\"changed:selectNode\" tree=\"treeInstance\"></div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-xs-9 cms-panel\">\n            <div class=\"panel panel-primary\">\n                <div class=\"panel-heading\">\n                    <div class=\"cms-admin-right-panel\">\n                        <label style=\"color: white\"> {{'Show' | translate}} : </label>\n\n                        <ui-select style=\"min-width: 50px;margin-left: 10px;margin-right: 10px;\"\n                                   class=\"cms-select\" data-ng-model=\"page.limit\" theme=\"bootstrap\"\n                                   on-select=\"refresh()\">\n                            <ui-select-match placeholder=\"\">{{$select.selected}}&nbsp;&nbsp;</ui-select-match>\n                            <ui-select-choices data-repeat=\"item in [10,25,50,100,200]\">{{item}}</ui-select-choices>\n                        </ui-select>\n\n                        <ui-select style=\"min-width: 60px;margin-left: 10px;margin-right: 10px;\"\n                                   class=\"cms-select\" data-ng-model=\"showAs.type\" theme=\"bootstrap\"\n                                   on-select=\"refresh()\">\n                            <ui-select-match placeholder=\"\">\n                                {{$select.selected.label}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</ui-select-match>\n                            <ui-select-choices\n                                    data-repeat=\"item.value as item in [{value:'list',label:'List'},{value:'table',label:'Table'},{value:'element',label:'Element'}]\">\n                                {{item.label}}\n                            </ui-select-choices>\n                        </ui-select>\n\n                        <div class=\"btn-group btn-group-xs\" style=\"margin-top: -12px;margin-right: 10px;\">\n                            <button type=\"button\" class=\"btn btn-white\" ng-click=\"setting()\">{{'Setting' | translate}}</button>\n                            <button type=\"button\" class=\"btn btn-white dropdown-toggle\" data-toggle=\"dropdown\">\n                                <span class=\"caret\"></span>\n                            </button>\n                            <ul class=\"dropdown-menu\" role=\"menu\" style=\"z-index: 10000 !important;\">\n                                <li><a href ng-click=\"deleteAll()\">{{'DeleteAll' | translate}}</a></li>\n                                <li><a href ng-click=\"import()\">Import</a></li>\n                                <li><a href ng-click=\"export()\">Export</a></li>\n\n                            </ul>\n                        </div>\n\n                        <button class=\"btn btn-white btn-xs\" ng-click=\"add()\">\n                            {{'Add' | translate}}\n                        </button>\n\n                    </div>\n\n                    <input type=\"text\" class=\"form-control input-xs\"\n                           style=\"margin-left: 10px;width: 100px;display: inline-block;\"\n                           ng-model=\"search.text\" ng-model-options=\"{debounce: 300}\" placeholder=\"search ...\">\n\n                    <div ng-if=\"queries && queries.length > 0\">\n                        <hr style=\"margin-top: 10px;margin-bottom: 5px;\">\n\n                        <div class=\"cms-admin-heading-form\" style=\"height: 60px;\">\n                            <formly-form ng-repeat=\"query in queries\" model=\"query.model\" fields=\"query.form\"\n                                         form=\"form\"\n                                         options=\"options\">\n                            </formly-form>\n                        </div>\n                    </div>\n\n                </div>\n                <div class=\"panel-body\" ng-if=\"node\">\n\n                    <div style=\"width: 100%;overflow-x: auto\" ng-if=\"showAs.type === 'table'\">\n                        <table class=\"table cms-admin-table\">\n                            <thead>\n                            <tr>\n                                <th ng-repeat=\"col in node.columns track by $index\" ng-bind=\"col.label\"></th>\n                                <th>Edit</th>\n                            </tr>\n                            </thead>\n                            <tbody>\n                            <tr ng-repeat=\"element in list track by $index\">\n                                <td ng-repeat=\"col in node.columns track by $index\">\n                                <span cms-direct-editable=\"model.{{col.value}}\"\n                                      cms-value=\"element[col.value]\"\n                                      cms-ref=\"{{element._id}}\"\n                                      cms-type=\"{{node.type}}\"></span>\n                                </td>\n                                <td>\n                                    <div cms-editor=\"{ref: element._id, type: node.type}\"\n                                         cms-remove=\"remove(element)\"></div>\n                                </td>\n                            </tr>\n                            </tbody>\n                        </table>\n                    </div>\n\n                    <div ng-if=\"loading\">\n                        <img src=\"/build/images/ajax-loader.gif\">\n                    </div>\n\n                    <div class=\"cms-panel-list-content\" ng-if=\"showAs.type === 'list'\">\n                        <div ng-repeat=\"element in list track by $index\"\n                             ng-class=\"elementClass\"\n                             cms-element=\"{ref: element._id, type: node.type, containers: {}}\"\n                             dnd-moved=\"remove(element)\"\n                             inline=\"false\"></div>\n                    </div>\n\n                    <div class=\"\" ng-if=\"showAs.type === 'element'\">\n                        <button class=\"btn cms-btn btn-primary btn-outline btn-xs\" style=\"margin-right: 10px;\"\n                                ng-repeat=\"e in list track by $index\"\n                                ng-click=\"selectElement(e._id);\" ng-show=\"list.length > 1\">\n                            {{getTitle(node.type, e._id)}}\n                        </button>\n                        <br><br>\n\n                        <div ng-if=\"element._id\"\n                             cms-element=\"{ref: element._id, type: node.type, containers: {}}\"\n                             inline=\"false\"></div>\n                    </div>\n\n                    <div class=\"clearfix\"></div>\n                    <uib-pagination ng-show=\"page.size > 1\" total-items=\"page.size\" ng-model=\"page.currentPage\"\n                                    class=\"pagination-sm\"\n                                    items-per-page=\"page.limit\"\n                                    ng-change=\"refresh(true)\"\n                                    max-size=\"10\"\n                                    boundary-link-numbers=\"true\"></uib-pagination>\n\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>\n"

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _common = __webpack_require__(100);
	
	var _common2 = _interopRequireDefault(_common);
	
	var _cmsNav = __webpack_require__(141);
	
	var _cmsNav2 = _interopRequireDefault(_cmsNav);
	
	var _module2 = __webpack_require__(132);
	
	var _module3 = _interopRequireDefault(_module2);
	
	var _module4 = __webpack_require__(111);
	
	var _module5 = _interopRequireDefault(_module4);
	
	var _module6 = __webpack_require__(128);
	
	var _module7 = _interopRequireDefault(_module6);
	
	var _module8 = __webpack_require__(130);
	
	var _module9 = _interopRequireDefault(_module8);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _module = angular.module('components.cmsNav', [_common2.default, _module3.default, _module5.default, _module7.default, _module9.default]).directive('cmsNav', _cmsNav2.default);
	
	exports.default = _module.name;

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _cmsNav = __webpack_require__(142);
	
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
/* 142 */
/***/ function(module, exports) {

	module.exports = "<div class=\"cms\">\n    <nav role=\"navigation\" class=\"navbar navbar-fixed-top navbar-default cms-menu\">\n        <div class=\"container\">\n            <div class=\"navbar-header\">\n                <button type=\"button\" data-toggle=\"collapse\" data-target=\"#dropdown_menu\" aria-expanded=\"false\"\n                        aria-controls=\"navbar\" class=\"navbar-toggle collapsed\"><span\n                        class=\"sr-only\">Toggle navigation</span><span class=\"icon-bar\"></span><span\n                        class=\"icon-bar\"></span><span\n                        class=\"icon-bar\"></span></button>\n                <a href=\"#\" class=\"navbar-brand\">Cms Mon</a></div>\n            <div id=\"dropdown_menu\" class=\"collapse navbar-collapse\">\n                <ul class=\"nav navbar-nav\">\n                    <li class=\"dropdown cms-types-dropdown\">\n                        <a href=\"#\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\"\n                                            class=\"dropdown-toggle\">Types<span class=\"caret\"></span></a>\n                        <ul role=\"menu\" cms-types=\"\" class=\"dropdown-menu\"></ul>\n                    </li>\n                    <li><a cms-admin>Admin</a></li>\n                    <li><a href=\"#\" cms-sitemap>Sitemap</a></li>\n                </ul>\n                <ul class=\"nav navbar-nav navbar-right\">\n                    <li>\n                        <div cms-edit-state></div>\n                    </li>\n                    <li><button class=\"btn btn-default navbar-btn\"\n                                style=\"margin-left: 10px\"\n                                ng-click=\"vm.toggleContainer()\">Container</button></li>\n                </ul>\n            </div>\n        </div>\n    </nav>\n</div>"

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map