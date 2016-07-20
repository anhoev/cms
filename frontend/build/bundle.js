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

	'use strict';
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	__webpack_require__(3);
	
	__webpack_require__(4);
	
	var _unionWith = __webpack_require__(5);
	
	var _unionWith2 = _interopRequireDefault(_unionWith);
	
	var _pickBy = __webpack_require__(6);
	
	var _pickBy2 = _interopRequireDefault(_pickBy);
	
	var _jsonFn = __webpack_require__(7);
	
	var _jsonFn2 = _interopRequireDefault(_jsonFn);
	
	__webpack_require__(8);
	
	__webpack_require__(12);
	
	var _components = __webpack_require__(13);
	
	var _components2 = _interopRequireDefault(_components);
	
	var _common = __webpack_require__(89);
	
	var _common2 = _interopRequireDefault(_common);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_.unionWith = _unionWith2.default;
	
	_.pickBy = _pickBy2.default;
	
	window.JsonFn = _jsonFn2.default;
	_jsonFn2.default.stringify = function (obj) {
	    return JSON.stringify(obj, function (key, value) {
	        if (value instanceof Function || typeof value == 'function') {
	            return value.toString();
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
	            } catch (e) {
	                console.log(e);
	                console.log(value);
	            }
	        }
	        if (prefix === '_PxEgEr_') {
	            return eval(value.slice(8));
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

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(2);

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = lib_lib;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(1);

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(56);

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(73);

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(155);

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(229);

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(9);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./cms.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./cms.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(10)();
	// imports
	
	
	// module
	exports.push([module.id, "@charset \"UTF-8\";.cms .text-nowrap,.input-group-btn{white-space:nowrap}.cms .dl-horizontal dd:after,.container-fluid:after,.container:after,.row:after{clear:both}.input-group{position:relative;display:table;border-collapse:separate}.input-group[class*=col-]{float:none;padding-left:0;padding-right:0}.input-group .form-control{position:relative;z-index:2;float:left;width:100%;margin-bottom:0}.input-group .form-control:focus{z-index:3}.input-group .form-control,.input-group-addon,.input-group-btn{display:table-cell}.container-fluid:after,.container-fluid:before,.container:after,.container:before,.row:after,.row:before{content:\" \";display:table}.input-group .form-control:not(:first-child):not(:last-child),.input-group-addon:not(:first-child):not(:last-child),.input-group-btn:not(:first-child):not(:last-child){border-radius:0}.input-group-addon,.input-group-btn{width:1%;white-space:nowrap;vertical-align:middle}.input-group-addon{padding:6px 12px;font-size:14px;font-weight:400;line-height:1;color:#555;text-align:center;background-color:#eee;border:1px solid #ccc;border-radius:4px}.cms .input-group-sm>.input-group-addon,.cms .input-group-sm>.input-group-btn>.input-group-addon.btn,.cms-form .input-group-addon.form-control,.input-group-addon.input-sm,.input-group-sm>.input-group-addon,.input-group-sm>.input-group-btn>.input-group-addon.btn{padding:5px 10px;font-size:12px;border-radius:3px}.cms .input-group-lg>.input-group-addon,.cms .input-group-lg>.input-group-btn>.input-group-addon.btn,.input-group-addon.input-lg,.input-group-lg>.input-group-addon,.input-group-lg>.input-group-btn>.input-group-addon.btn{padding:10px 16px;font-size:18px;border-radius:6px}.input-group-addon input[type=radio],.input-group-addon input[type=checkbox]{margin-top:0}.input-group .form-control:first-child,.input-group-addon:first-child,.input-group-btn:first-child>.btn,.input-group-btn:first-child>.btn-group>.btn,.input-group-btn:first-child>.dropdown-toggle,.input-group-btn:last-child>.btn-group:not(:last-child)>.btn,.input-group-btn:last-child>.btn:not(:last-child):not(.dropdown-toggle){border-bottom-right-radius:0;border-top-right-radius:0}.input-group-addon:first-child{border-right:0}.input-group .form-control:last-child,.input-group-addon:last-child,.input-group-btn:first-child>.btn-group:not(:first-child)>.btn,.input-group-btn:first-child>.btn:not(:first-child),.input-group-btn:last-child>.btn,.input-group-btn:last-child>.btn-group>.btn,.input-group-btn:last-child>.dropdown-toggle{border-bottom-left-radius:0;border-top-left-radius:0}.input-group-addon:last-child{border-left:0}.input-group-btn{position:relative;font-size:0}.input-group-btn>.btn{position:relative}.input-group-btn>.btn+.btn{margin-left:-1px}.input-group-btn>.btn:active,.input-group-btn>.btn:focus,.input-group-btn>.btn:hover{z-index:2}.input-group-btn:first-child>.btn,.input-group-btn:first-child>.btn-group{margin-right:-1px}.input-group-btn:last-child>.btn,.input-group-btn:last-child>.btn-group{z-index:2;margin-left:-1px}.container,.container-fluid{margin-right:auto;margin-left:auto;padding-left:15px;padding-right:15px}@media (min-width:768px){.container{width:750px}}@media (min-width:992px){.container{width:970px}}@media (min-width:1200px){.container{width:1170px}}.row{margin-left:-15px;margin-right:-15px}.cms-field-form .col-sm-10,.cms-field-form .col-sm-2,.col-lg-1,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-md-1,.col-md-10,.col-md-11,.col-md-12,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-sm-1,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-xs-1,.col-xs-10,.col-xs-11,.col-xs-12,.col-xs-2,.col-xs-3,.col-xs-4,.col-xs-5,.col-xs-6,.col-xs-7,.col-xs-8,.col-xs-9{position:relative;min-height:1px;padding-left:15px;padding-right:15px}.cms-field-form .col-sm-10,.cms-field-form .col-sm-2,.col-xs-1,.col-xs-10,.col-xs-11,.col-xs-12,.col-xs-2,.col-xs-3,.col-xs-4,.col-xs-5,.col-xs-6,.col-xs-7,.col-xs-8,.col-xs-9{float:left}.col-xs-1{width:8.33333%}.col-xs-2{width:16.66667%}.col-xs-3{width:25%}.col-xs-4{width:33.33333%}.col-xs-5{width:41.66667%}.col-xs-6{width:50%}.col-xs-7{width:58.33333%}.col-xs-8{width:66.66667%}.col-xs-9{width:75%}.col-xs-10{width:83.33333%}.col-xs-11{width:91.66667%}.cms-field-form .col-sm-10,.cms-field-form .col-sm-2,.col-xs-12{width:100%}.col-xs-pull-0{right:auto}.col-xs-pull-1{right:8.33333%}.col-xs-pull-2{right:16.66667%}.col-xs-pull-3{right:25%}.col-xs-pull-4{right:33.33333%}.col-xs-pull-5{right:41.66667%}.col-xs-pull-6{right:50%}.col-xs-pull-7{right:58.33333%}.col-xs-pull-8{right:66.66667%}.col-xs-pull-9{right:75%}.col-xs-pull-10{right:83.33333%}.col-xs-pull-11{right:91.66667%}.col-xs-pull-12{right:100%}.col-xs-push-0{left:auto}.col-xs-push-1{left:8.33333%}.col-xs-push-2{left:16.66667%}.col-xs-push-3{left:25%}.col-xs-push-4{left:33.33333%}.col-xs-push-5{left:41.66667%}.col-xs-push-6{left:50%}.col-xs-push-7{left:58.33333%}.col-xs-push-8{left:66.66667%}.col-xs-push-9{left:75%}.col-xs-push-10{left:83.33333%}.col-xs-push-11{left:91.66667%}.col-xs-push-12{left:100%}.col-xs-offset-0{margin-left:0}.col-xs-offset-1{margin-left:8.33333%}.col-xs-offset-2{margin-left:16.66667%}.col-xs-offset-3{margin-left:25%}.col-xs-offset-4{margin-left:33.33333%}.col-xs-offset-5{margin-left:41.66667%}.col-xs-offset-6{margin-left:50%}.col-xs-offset-7{margin-left:58.33333%}.col-xs-offset-8{margin-left:66.66667%}.col-xs-offset-9{margin-left:75%}.col-xs-offset-10{margin-left:83.33333%}.col-xs-offset-11{margin-left:91.66667%}.col-xs-offset-12{margin-left:100%}@media (min-width:768px){.col-sm-1,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9{float:left}.col-sm-1{width:8.33333%}.col-sm-2{width:16.66667%}.col-sm-3{width:25%}.col-sm-4{width:33.33333%}.col-sm-5{width:41.66667%}.col-sm-6{width:50%}.col-sm-7{width:58.33333%}.col-sm-8{width:66.66667%}.col-sm-9{width:75%}.col-sm-10{width:83.33333%}.col-sm-11{width:91.66667%}.col-sm-12{width:100%}.col-sm-pull-0{right:auto}.col-sm-pull-1{right:8.33333%}.col-sm-pull-2{right:16.66667%}.col-sm-pull-3{right:25%}.col-sm-pull-4{right:33.33333%}.col-sm-pull-5{right:41.66667%}.col-sm-pull-6{right:50%}.col-sm-pull-7{right:58.33333%}.col-sm-pull-8{right:66.66667%}.col-sm-pull-9{right:75%}.col-sm-pull-10{right:83.33333%}.col-sm-pull-11{right:91.66667%}.col-sm-pull-12{right:100%}.col-sm-push-0{left:auto}.col-sm-push-1{left:8.33333%}.col-sm-push-2{left:16.66667%}.col-sm-push-3{left:25%}.col-sm-push-4{left:33.33333%}.col-sm-push-5{left:41.66667%}.col-sm-push-6{left:50%}.col-sm-push-7{left:58.33333%}.col-sm-push-8{left:66.66667%}.col-sm-push-9{left:75%}.col-sm-push-10{left:83.33333%}.col-sm-push-11{left:91.66667%}.col-sm-push-12{left:100%}.col-sm-offset-0{margin-left:0}.col-sm-offset-1{margin-left:8.33333%}.col-sm-offset-2{margin-left:16.66667%}.col-sm-offset-3{margin-left:25%}.col-sm-offset-4{margin-left:33.33333%}.col-sm-offset-5{margin-left:41.66667%}.col-sm-offset-6{margin-left:50%}.col-sm-offset-7{margin-left:58.33333%}.col-sm-offset-8{margin-left:66.66667%}.col-sm-offset-9{margin-left:75%}.col-sm-offset-10{margin-left:83.33333%}.col-sm-offset-11{margin-left:91.66667%}.col-sm-offset-12{margin-left:100%}}@media (min-width:992px){.col-md-1,.col-md-10,.col-md-11,.col-md-12,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9{float:left}.col-md-1{width:8.33333%}.col-md-2{width:16.66667%}.col-md-3{width:25%}.col-md-4{width:33.33333%}.col-md-5{width:41.66667%}.col-md-6{width:50%}.col-md-7{width:58.33333%}.col-md-8{width:66.66667%}.col-md-9{width:75%}.col-md-10{width:83.33333%}.col-md-11{width:91.66667%}.col-md-12{width:100%}.col-md-pull-0{right:auto}.col-md-pull-1{right:8.33333%}.col-md-pull-2{right:16.66667%}.col-md-pull-3{right:25%}.col-md-pull-4{right:33.33333%}.col-md-pull-5{right:41.66667%}.col-md-pull-6{right:50%}.col-md-pull-7{right:58.33333%}.col-md-pull-8{right:66.66667%}.col-md-pull-9{right:75%}.col-md-pull-10{right:83.33333%}.col-md-pull-11{right:91.66667%}.col-md-pull-12{right:100%}.col-md-push-0{left:auto}.col-md-push-1{left:8.33333%}.col-md-push-2{left:16.66667%}.col-md-push-3{left:25%}.col-md-push-4{left:33.33333%}.col-md-push-5{left:41.66667%}.col-md-push-6{left:50%}.col-md-push-7{left:58.33333%}.col-md-push-8{left:66.66667%}.col-md-push-9{left:75%}.col-md-push-10{left:83.33333%}.col-md-push-11{left:91.66667%}.col-md-push-12{left:100%}.col-md-offset-0{margin-left:0}.col-md-offset-1{margin-left:8.33333%}.col-md-offset-2{margin-left:16.66667%}.col-md-offset-3{margin-left:25%}.col-md-offset-4{margin-left:33.33333%}.col-md-offset-5{margin-left:41.66667%}.col-md-offset-6{margin-left:50%}.col-md-offset-7{margin-left:58.33333%}.col-md-offset-8{margin-left:66.66667%}.col-md-offset-9{margin-left:75%}.col-md-offset-10{margin-left:83.33333%}.col-md-offset-11{margin-left:91.66667%}.col-md-offset-12{margin-left:100%}}@media (min-width:1200px){.col-lg-1,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9{float:left}.col-lg-1{width:8.33333%}.col-lg-2{width:16.66667%}.col-lg-3{width:25%}.col-lg-4{width:33.33333%}.col-lg-5{width:41.66667%}.col-lg-6{width:50%}.col-lg-7{width:58.33333%}.col-lg-8{width:66.66667%}.col-lg-9{width:75%}.col-lg-10{width:83.33333%}.col-lg-11{width:91.66667%}.col-lg-12{width:100%}.col-lg-pull-0{right:auto}.col-lg-pull-1{right:8.33333%}.col-lg-pull-2{right:16.66667%}.col-lg-pull-3{right:25%}.col-lg-pull-4{right:33.33333%}.col-lg-pull-5{right:41.66667%}.col-lg-pull-6{right:50%}.col-lg-pull-7{right:58.33333%}.col-lg-pull-8{right:66.66667%}.col-lg-pull-9{right:75%}.col-lg-pull-10{right:83.33333%}.col-lg-pull-11{right:91.66667%}.col-lg-pull-12{right:100%}.col-lg-push-0{left:auto}.col-lg-push-1{left:8.33333%}.col-lg-push-2{left:16.66667%}.col-lg-push-3{left:25%}.col-lg-push-4{left:33.33333%}.col-lg-push-5{left:41.66667%}.col-lg-push-6{left:50%}.col-lg-push-7{left:58.33333%}.col-lg-push-8{left:66.66667%}.col-lg-push-9{left:75%}.col-lg-push-10{left:83.33333%}.col-lg-push-11{left:91.66667%}.col-lg-push-12{left:100%}.col-lg-offset-0{margin-left:0}.col-lg-offset-1{margin-left:8.33333%}.col-lg-offset-2{margin-left:16.66667%}.col-lg-offset-3{margin-left:25%}.col-lg-offset-4{margin-left:33.33333%}.col-lg-offset-5{margin-left:41.66667%}.col-lg-offset-6{margin-left:50%}.col-lg-offset-7{margin-left:58.33333%}.col-lg-offset-8{margin-left:66.66667%}.col-lg-offset-9{margin-left:75%}.col-lg-offset-10{margin-left:83.33333%}.col-lg-offset-11{margin-left:91.66667%}.col-lg-offset-12{margin-left:100%}}@media (max-width:768px){.navbar-fixed-side{margin-left:-15px;margin-right:-15px}}@media (min-width:768px){.navbar-fixed-side{position:fixed;margin:0 -15px;height:100vh;width:inherit;overflow:auto;border-top-width:0;border-bottom-width:0;border-radius:0}.navbar-fixed-side .container,.navbar-fixed-side .container-fluid{width:auto;padding-left:0;padding-right:0}.navbar-fixed-side .navbar-header{float:none}.navbar-fixed-side .navbar-brand{height:auto}.navbar-fixed-side>.container .navbar-brand,.navbar-fixed-side>.container-fluid .navbar-brand{margin-left:0}.navbar-fixed-side .navbar-collapse{width:100%;border-top:1px solid #e7e7e7}.navbar-fixed-side .navbar-nav{float:none;margin:0 -15px}.navbar-fixed-side .navbar-nav>li{float:none}.navbar-fixed-side .navbar-nav>li>a{padding-top:10px;padding-bottom:10px;border-bottom:1px solid #e7e7e7}.navbar-fixed-side .navbar-form{margin:0 -15px;padding:10px 15px;border-bottom:1px solid #e7e7e7}.navbar-fixed-side .navbar-text{float:none;margin-left:0;margin-right:0}.navbar-fixed-side .navbar-left,.navbar-fixed-side .navbar-right{float:none!important}.navbar-fixed-side .navbar-nav .dropdown-menu{position:static;float:none;width:auto;margin-top:0;background-color:transparent;border:0;box-shadow:none;border-bottom:1px solid #e7e7e7}.navbar-fixed-side .navbar-nav .dropdown-menu .dropdown-header,.navbar-fixed-side .navbar-nav .dropdown-menu>li>a{padding:5px 15px 5px 25px}.navbar-fixed-side .navbar-nav .dropdown-menu>li>a{line-height:20px;color:#777}.navbar-fixed-side .navbar-nav .dropdown-menu>li>a:focus,.navbar-fixed-side .navbar-nav .dropdown-menu>li>a:hover{background-image:none}.navbar-fixed-side .navbar-nav .dropdown-menu>.active>a{background-color:#e7e7e7;color:#555}.navbar-fixed-side .navbar-nav .dropdown-menu>li>a:focus,.navbar-fixed-side .navbar-nav .dropdown-menu>li>a:hover,.navbar-fixed-side .navbar-nav>li>a:focus,.navbar-fixed-side .navbar-nav>li>a:hover{background-color:#f0f0f0;color:#333}.navbar-fixed-side .dropdown-menu>.dropdown-header,.navbar-fixed-side .dropdown>.dropdown-toggle{background-color:transparent!important;color:#9d9d9d!important;cursor:default;font-size:.8em;text-transform:uppercase;border-bottom:none;padding-bottom:0}.navbar-fixed-side .dropdown-toggle .caret{display:none}.navbar-fixed-side .dropdown-menu{display:block}.navbar-fixed-side.navbar-inverse .navbar-collapse,.navbar-fixed-side.navbar-inverse .navbar-form,.navbar-fixed-side.navbar-inverse .navbar-nav .dropdown-menu,.navbar-fixed-side.navbar-inverse .navbar-nav>li>a{border-color:#363636}.navbar-fixed-side.navbar-inverse .divider{background-color:#363636}.navbar-fixed-side.navbar-inverse .navbar-nav .dropdown-menu>li>a{color:#9d9d9d}.navbar-fixed-side.navbar-inverse .navbar-nav .dropdown-menu>.active>a{background-color:#090909;color:#fff}.navbar-fixed-side.navbar-inverse .navbar-nav .dropdown-menu>li:not(.active)>a:focus,.navbar-fixed-side.navbar-inverse .navbar-nav .dropdown-menu>li:not(.active)>a:hover,.navbar-fixed-side.navbar-inverse .navbar-nav>li:not(.active)>a:focus,.navbar-fixed-side.navbar-inverse .navbar-nav>li:not(.active)>a:hover{background-color:#2f2f2f;color:#fff}.navbar-fixed-side.navbar-inverse .dropdown>.dropdown-toggle{color:#777!important}}.cms .btn-group>.btn-group,.cms .btn-toolbar .btn,.cms .btn-toolbar .btn-group,.cms .btn-toolbar .input-group,.cms .cms-field-form .col-sm-10,.cms .cms-field-form .col-sm-2,.cms .col-xs-1,.cms .col-xs-10,.cms .col-xs-11,.cms .col-xs-12,.cms .col-xs-2,.cms .col-xs-3,.cms .col-xs-4,.cms .col-xs-5,.cms .col-xs-6,.cms .col-xs-7,.cms .col-xs-8,.cms .col-xs-9,.cms .dropdown-menu,.cms-field-form .cms .col-sm-10,.cms-field-form .cms .col-sm-2{float:left}.cms{/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\n  /*! Source: https://github.com/h5bp/html5-boilerplate/blob/master/src/css/main.css */}.cms html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}.cms body{margin:0}.cms article,.cms aside,.cms details,.cms figcaption,.cms figure,.cms footer,.cms header,.cms hgroup,.cms main,.cms menu,.cms nav,.cms section,.cms summary{display:block}.cms audio,.cms canvas,.cms progress,.cms video{display:inline-block;vertical-align:baseline}.cms audio:not([controls]){display:none;height:0}.cms [hidden],.cms template{display:none}.cms a{background-color:transparent}.cms a:active,.cms a:hover{outline:0}.cms b,.cms strong{font-weight:700}.cms dfn{font-style:italic}.cms h1{margin:.67em 0}.cms mark{background:#ff0;color:#000}.cms sub,.cms sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}.cms sup{top:-.5em}.cms sub{bottom:-.25em}.cms img{border:0;vertical-align:middle}.cms svg:not(:root){overflow:hidden}.cms hr{box-sizing:content-box;height:0}.cms pre{overflow:auto}.cms code,.cms kbd,.cms pre,.cms samp{font-size:1em}.cms button,.cms input,.cms optgroup,.cms select,.cms textarea{color:inherit;font:inherit;margin:0}.cms button{overflow:visible}.cms button,.cms select{text-transform:none}.cms button,.cms html input[type=button],.cms input[type=reset],.cms input[type=submit]{-webkit-appearance:button;cursor:pointer}.cms button[disabled],.cms html input[disabled]{cursor:default}.cms button::-moz-focus-inner,.cms input::-moz-focus-inner{border:0;padding:0}.cms input[type=radio],.cms input[type=checkbox]{box-sizing:border-box;padding:0}.cms input[type=number]::-webkit-inner-spin-button,.cms input[type=number]::-webkit-outer-spin-button{height:auto}.cms input[type=search]::-webkit-search-cancel-button,.cms input[type=search]::-webkit-search-decoration{-webkit-appearance:none}.cms textarea{overflow:auto}.cms optgroup{font-weight:700}.cms table{border-collapse:collapse;border-spacing:0}.cms td,.cms th{padding:0}@media print{.cms *,.cms :after,.cms :before{background:0 0!important;color:#000!important;box-shadow:none!important;text-shadow:none!important}.cms a,.cms a:visited{text-decoration:underline}.cms a[href]:after{content:\" (\" attr(href) \")\"}.cms abbr[title]:after{content:\" (\" attr(title) \")\"}.cms a[href^=\"#\"]:after,.cms a[href^=\"javascript:\"]:after{content:\"\"}.cms blockquote,.cms pre{border:1px solid #999;page-break-inside:avoid}.cms thead{display:table-header-group}.cms img,.cms tr{page-break-inside:avoid}.cms img{max-width:100%!important}.cms h2,.cms h3,.cms p{orphans:3;widows:3}.cms h2,.cms h3{page-break-after:avoid}.cms .navbar{display:none}.cms .btn>.caret,.cms .dropup>.btn>.caret{border-top-color:#000!important}.cms .label{border:1px solid #000}.cms .table{border-collapse:collapse!important}.cms .table td,.cms .table th{background-color:#fff!important}.cms .table-bordered td,.cms .table-bordered th{border:1px solid #ddd!important}}.cms .btn,.cms .btn-danger.active,.cms .btn-danger:active,.cms .btn-default.active,.cms .btn-default:active,.cms .btn-info.active,.cms .btn-info:active,.cms .btn-primary.active,.cms .btn-primary:active,.cms .btn-warning.active,.cms .btn-warning:active,.cms .btn.active,.cms .btn:active,.cms .dropdown-menu>.disabled>a:focus,.cms .dropdown-menu>.disabled>a:hover,.cms .form-control,.cms .navbar-toggle,.open>.cms .btn-danger.dropdown-toggle,.open>.cms .btn-default.dropdown-toggle,.open>.cms .btn-info.dropdown-toggle,.open>.cms .btn-primary.dropdown-toggle,.open>.cms .btn-warning.dropdown-toggle{background-image:none}.cms *,.cms :after,.cms :before{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.cms html{font-size:10px;-webkit-tap-highlight-color:transparent}.cms body{font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif;font-size:14px;line-height:1.42857;color:#333;background-color:#fff}.cms button,.cms input,.cms select,.cms textarea{font-family:inherit;font-size:inherit;line-height:inherit}.cms a{color:#337ab7;text-decoration:none}.cms a:focus,.cms a:hover{color:#23527c;text-decoration:underline}.cms a:focus{outline:dotted thin;outline:-webkit-focus-ring-color auto 5px;outline-offset:-2px}.cms figure{margin:0}.cms .img-responsive{display:block;max-width:100%;height:auto}.cms .img-rounded{border-radius:6px}.cms .img-thumbnail{padding:4px;line-height:1.42857;background-color:#fff;border:1px solid #ddd;border-radius:4px;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;display:inline-block;max-width:100%;height:auto}.cms .img-circle{border-radius:50%}.cms hr{margin-top:20px;margin-bottom:20px;border:0;border-top:1px solid #eee}.cms .sr-only{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);border:0}.cms .sr-only-focusable:active,.cms .sr-only-focusable:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}.cms [role=button]{cursor:pointer}.cms .h1,.cms .h2,.cms .h3,.cms .h4,.cms .h5,.cms .h6,.cms h1,.cms h2,.cms h3,.cms h4,.cms h5,.cms h6{font-family:inherit;font-weight:500;line-height:1.1;color:inherit}.cms .h1 .small,.cms .h1 small,.cms .h2 .small,.cms .h2 small,.cms .h3 .small,.cms .h3 small,.cms .h4 .small,.cms .h4 small,.cms .h5 .small,.cms .h5 small,.cms .h6 .small,.cms .h6 small,.cms h1 .small,.cms h1 small,.cms h2 .small,.cms h2 small,.cms h3 .small,.cms h3 small,.cms h4 .small,.cms h4 small,.cms h5 .small,.cms h5 small,.cms h6 .small,.cms h6 small{font-weight:400;line-height:1;color:#777}.cms .h1,.cms .h2,.cms .h3,.cms h1,.cms h2,.cms h3{margin-top:20px;margin-bottom:10px}.cms .h1 .small,.cms .h1 small,.cms .h2 .small,.cms .h2 small,.cms .h3 .small,.cms .h3 small,.cms h1 .small,.cms h1 small,.cms h2 .small,.cms h2 small,.cms h3 .small,.cms h3 small{font-size:65%}.cms .h4,.cms .h5,.cms .h6,.cms h4,.cms h5,.cms h6{margin-top:10px;margin-bottom:10px}.cms .h4 .small,.cms .h4 small,.cms .h5 .small,.cms .h5 small,.cms .h6 .small,.cms .h6 small,.cms h4 .small,.cms h4 small,.cms h5 .small,.cms h5 small,.cms h6 .small,.cms h6 small{font-size:75%}.cms .h1,.cms h1{font-size:36px}.cms .h2,.cms h2{font-size:30px}.cms .h3,.cms h3{font-size:24px}.cms .h4,.cms h4{font-size:18px}.cms .h5,.cms h5{font-size:14px}.cms .h6,.cms h6{font-size:12px}.cms p{margin:0 0 10px}.cms .lead{margin-bottom:20px;font-size:16px;font-weight:300;line-height:1.4}.cms dt,.cms kbd kbd,.cms label{font-weight:700}@media (min-width:768px){.cms .lead{font-size:21px}}.cms .small,.cms small{font-size:85%}.cms .mark,.cms mark{background-color:#fcf8e3;padding:.2em}.cms .list-inline,.cms .list-unstyled{padding-left:0;list-style:none}.cms .text-left{text-align:left}.cms .text-right{text-align:right}.cms .text-center{text-align:center}.cms .text-justify{text-align:justify}.cms .text-lowercase{text-transform:lowercase}.cms .initialism,.cms .text-uppercase{text-transform:uppercase}.cms .text-capitalize{text-transform:capitalize}.cms .text-muted{color:#777}.cms .text-primary{color:#337ab7}.cms a.text-primary:focus,.cms a.text-primary:hover{color:#286090}.cms .text-success{color:#3c763d}.cms a.text-success:focus,.cms a.text-success:hover{color:#2b542c}.cms .text-info{color:#31708f}.cms a.text-info:focus,.cms a.text-info:hover{color:#245269}.cms .text-warning{color:#8a6d3b}.cms a.text-warning:focus,.cms a.text-warning:hover{color:#66512c}.cms .text-danger{color:#a94442}.cms a.text-danger:focus,.cms a.text-danger:hover{color:#843534}.cms .bg-primary{color:#fff;background-color:#337ab7}.cms a.bg-primary:focus,.cms a.bg-primary:hover{background-color:#286090}.cms .bg-success{background-color:#dff0d8}.cms a.bg-success:focus,.cms a.bg-success:hover{background-color:#c1e2b3}.cms .bg-info{background-color:#d9edf7}.cms a.bg-info:focus,.cms a.bg-info:hover{background-color:#afd9ee}.cms .bg-warning{background-color:#fcf8e3}.cms a.bg-warning:focus,.cms a.bg-warning:hover{background-color:#f7ecb5}.cms .bg-danger{background-color:#f2dede}.cms a.bg-danger:focus,.cms a.bg-danger:hover{background-color:#e4b9b9}.cms .page-header{padding-bottom:9px;margin:40px 0 20px;border-bottom:1px solid #eee}.cms ol,.cms ul{margin-top:0;margin-bottom:10px}.cms ol ol,.cms ol ul,.cms ul ol,.cms ul ul{margin-bottom:0}.cms .list-inline{margin-left:-5px}.cms .list-inline>li{display:inline-block;padding-left:5px;padding-right:5px}.cms dl{margin-top:0;margin-bottom:20px}.cms dd,.cms dt{line-height:1.42857}.cms dd{margin-left:0}.cms .dl-horizontal dd:after,.cms .dl-horizontal dd:before{content:\" \";display:table}@media (min-width:768px){.cms .dl-horizontal dt{float:left;width:160px;clear:left;text-align:right;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.cms .dl-horizontal dd{margin-left:180px}.cms .container{width:750px}}.cms .btn-group-vertical>.btn-group:after,.cms .btn-toolbar:after,.cms .clearfix:after,.cms .container-fluid:after,.cms .container:after,.cms .dropdown-menu>li>a,.cms .form-horizontal .form-group:after,.cms .modal-footer:after,.cms .modal-header:after,.cms .navbar-collapse:after,.cms .navbar-header:after,.cms .navbar:after,.cms .pager:after,.cms .panel-body:after,.cms .row:after{clear:both}.cms abbr[data-original-title],.cms abbr[title]{cursor:help;border-bottom:1px dotted #777}.cms .initialism{font-size:90%}.cms blockquote{padding:10px 20px;margin:0 0 20px;font-size:17.5px;border-left:5px solid #eee}.cms blockquote ol:last-child,.cms blockquote p:last-child,.cms blockquote ul:last-child{margin-bottom:0}.cms blockquote .small,.cms blockquote footer,.cms blockquote small{display:block;font-size:80%;line-height:1.42857;color:#777}.cms blockquote .small:before,.cms blockquote footer:before,.cms blockquote small:before{content:'\\2014   \\A0'}.cms .blockquote-reverse,.cms blockquote.pull-right{padding-right:15px;padding-left:0;border-right:5px solid #eee;border-left:0;text-align:right}.cms code,.cms kbd{padding:2px 4px;font-size:90%}.cms .blockquote-reverse .small:before,.cms .blockquote-reverse footer:before,.cms .blockquote-reverse small:before,.cms blockquote.pull-right .small:before,.cms blockquote.pull-right footer:before,.cms blockquote.pull-right small:before{content:''}.cms .blockquote-reverse .small:after,.cms .blockquote-reverse footer:after,.cms .blockquote-reverse small:after,.cms blockquote.pull-right .small:after,.cms blockquote.pull-right footer:after,.cms blockquote.pull-right small:after{content:'\\A0   \\2014'}.cms address{margin-bottom:20px;font-style:normal;line-height:1.42857}.cms code,.cms kbd,.cms pre,.cms samp{font-family:Menlo,Monaco,Consolas,\"Courier New\",monospace}.cms code{color:#c7254e;background-color:#f9f2f4;border-radius:4px}.cms kbd{color:#fff;background-color:#333;border-radius:3px;box-shadow:inset 0 -1px 0 rgba(0,0,0,.25)}.cms kbd kbd{padding:0;font-size:100%;box-shadow:none}.cms pre{display:block;padding:9.5px;margin:0 0 10px;font-size:13px;line-height:1.42857;word-break:break-all;word-wrap:break-word;color:#333;background-color:#f5f5f5;border:1px solid #ccc;border-radius:4px}.cms .container-fluid:after,.cms .container-fluid:before,.cms .container:after,.cms .container:before,.cms .row:after,.cms .row:before{display:table;content:\" \"}.cms .container,.cms .container-fluid{margin-right:auto;margin-left:auto;padding-left:15px;padding-right:15px}.cms pre code,.cms table{background-color:transparent}.cms pre code{padding:0;font-size:inherit;color:inherit;white-space:pre-wrap;border-radius:0}.cms .pre-scrollable{max-height:340px;overflow-y:scroll}@media (min-width:992px){.cms .container{width:970px}}@media (min-width:1200px){.cms .container{width:1170px}}.cms .row{margin-left:-15px;margin-right:-15px}.cms .cms-field-form .col-sm-10,.cms .cms-field-form .col-sm-2,.cms .col-lg-1,.cms .col-lg-10,.cms .col-lg-11,.cms .col-lg-12,.cms .col-lg-2,.cms .col-lg-3,.cms .col-lg-4,.cms .col-lg-5,.cms .col-lg-6,.cms .col-lg-7,.cms .col-lg-8,.cms .col-lg-9,.cms .col-md-1,.cms .col-md-10,.cms .col-md-11,.cms .col-md-12,.cms .col-md-2,.cms .col-md-3,.cms .col-md-4,.cms .col-md-5,.cms .col-md-6,.cms .col-md-7,.cms .col-md-8,.cms .col-md-9,.cms .col-sm-1,.cms .col-sm-10,.cms .col-sm-11,.cms .col-sm-12,.cms .col-sm-2,.cms .col-sm-3,.cms .col-sm-4,.cms .col-sm-5,.cms .col-sm-6,.cms .col-sm-7,.cms .col-sm-8,.cms .col-sm-9,.cms .col-xs-1,.cms .col-xs-10,.cms .col-xs-11,.cms .col-xs-12,.cms .col-xs-2,.cms .col-xs-3,.cms .col-xs-4,.cms .col-xs-5,.cms .col-xs-6,.cms .col-xs-7,.cms .col-xs-8,.cms .col-xs-9,.cms-field-form .cms .col-sm-10,.cms-field-form .cms .col-sm-2{position:relative;min-height:1px;padding-left:15px;padding-right:15px}.cms .col-xs-1{width:8.33333%}.cms .col-xs-2{width:16.66667%}.cms .col-xs-3{width:25%}.cms .col-xs-4{width:33.33333%}.cms .col-xs-5{width:41.66667%}.cms .col-xs-6{width:50%}.cms .col-xs-7{width:58.33333%}.cms .col-xs-8{width:66.66667%}.cms .col-xs-9{width:75%}.cms .col-xs-10{width:83.33333%}.cms .col-xs-11{width:91.66667%}.cms .cms-field-form .col-sm-10,.cms .cms-field-form .col-sm-2,.cms .col-xs-12,.cms-field-form .cms .col-sm-10,.cms-field-form .cms .col-sm-2{width:100%}.cms .col-xs-pull-0{right:auto}.cms .col-xs-pull-1{right:8.33333%}.cms .col-xs-pull-2{right:16.66667%}.cms .col-xs-pull-3{right:25%}.cms .col-xs-pull-4{right:33.33333%}.cms .col-xs-pull-5{right:41.66667%}.cms .col-xs-pull-6{right:50%}.cms .col-xs-pull-7{right:58.33333%}.cms .col-xs-pull-8{right:66.66667%}.cms .col-xs-pull-9{right:75%}.cms .col-xs-pull-10{right:83.33333%}.cms .col-xs-pull-11{right:91.66667%}.cms .col-xs-pull-12{right:100%}.cms .col-xs-push-0{left:auto}.cms .col-xs-push-1{left:8.33333%}.cms .col-xs-push-2{left:16.66667%}.cms .col-xs-push-3{left:25%}.cms .col-xs-push-4{left:33.33333%}.cms .col-xs-push-5{left:41.66667%}.cms .col-xs-push-6{left:50%}.cms .col-xs-push-7{left:58.33333%}.cms .col-xs-push-8{left:66.66667%}.cms .col-xs-push-9{left:75%}.cms .col-xs-push-10{left:83.33333%}.cms .col-xs-push-11{left:91.66667%}.cms .col-xs-push-12{left:100%}.cms .col-xs-offset-0{margin-left:0}.cms .col-xs-offset-1{margin-left:8.33333%}.cms .col-xs-offset-2{margin-left:16.66667%}.cms .col-xs-offset-3{margin-left:25%}.cms .col-xs-offset-4{margin-left:33.33333%}.cms .col-xs-offset-5{margin-left:41.66667%}.cms .col-xs-offset-6{margin-left:50%}.cms .col-xs-offset-7{margin-left:58.33333%}.cms .col-xs-offset-8{margin-left:66.66667%}.cms .col-xs-offset-9{margin-left:75%}.cms .col-xs-offset-10{margin-left:83.33333%}.cms .col-xs-offset-11{margin-left:91.66667%}.cms .col-xs-offset-12{margin-left:100%}@media (min-width:768px){.cms .col-sm-1,.cms .col-sm-10,.cms .col-sm-11,.cms .col-sm-12,.cms .col-sm-2,.cms .col-sm-3,.cms .col-sm-4,.cms .col-sm-5,.cms .col-sm-6,.cms .col-sm-7,.cms .col-sm-8,.cms .col-sm-9{float:left}.cms .col-sm-1{width:8.33333%}.cms .col-sm-2{width:16.66667%}.cms .col-sm-3{width:25%}.cms .col-sm-4{width:33.33333%}.cms .col-sm-5{width:41.66667%}.cms .col-sm-6{width:50%}.cms .col-sm-7{width:58.33333%}.cms .col-sm-8{width:66.66667%}.cms .col-sm-9{width:75%}.cms .col-sm-10{width:83.33333%}.cms .col-sm-11{width:91.66667%}.cms .col-sm-12{width:100%}.cms .col-sm-pull-0{right:auto}.cms .col-sm-pull-1{right:8.33333%}.cms .col-sm-pull-2{right:16.66667%}.cms .col-sm-pull-3{right:25%}.cms .col-sm-pull-4{right:33.33333%}.cms .col-sm-pull-5{right:41.66667%}.cms .col-sm-pull-6{right:50%}.cms .col-sm-pull-7{right:58.33333%}.cms .col-sm-pull-8{right:66.66667%}.cms .col-sm-pull-9{right:75%}.cms .col-sm-pull-10{right:83.33333%}.cms .col-sm-pull-11{right:91.66667%}.cms .col-sm-pull-12{right:100%}.cms .col-sm-push-0{left:auto}.cms .col-sm-push-1{left:8.33333%}.cms .col-sm-push-2{left:16.66667%}.cms .col-sm-push-3{left:25%}.cms .col-sm-push-4{left:33.33333%}.cms .col-sm-push-5{left:41.66667%}.cms .col-sm-push-6{left:50%}.cms .col-sm-push-7{left:58.33333%}.cms .col-sm-push-8{left:66.66667%}.cms .col-sm-push-9{left:75%}.cms .col-sm-push-10{left:83.33333%}.cms .col-sm-push-11{left:91.66667%}.cms .col-sm-push-12{left:100%}.cms .col-sm-offset-0{margin-left:0}.cms .col-sm-offset-1{margin-left:8.33333%}.cms .col-sm-offset-2{margin-left:16.66667%}.cms .col-sm-offset-3{margin-left:25%}.cms .col-sm-offset-4{margin-left:33.33333%}.cms .col-sm-offset-5{margin-left:41.66667%}.cms .col-sm-offset-6{margin-left:50%}.cms .col-sm-offset-7{margin-left:58.33333%}.cms .col-sm-offset-8{margin-left:66.66667%}.cms .col-sm-offset-9{margin-left:75%}.cms .col-sm-offset-10{margin-left:83.33333%}.cms .col-sm-offset-11{margin-left:91.66667%}.cms .col-sm-offset-12{margin-left:100%}}@media (min-width:992px){.cms .col-md-1,.cms .col-md-10,.cms .col-md-11,.cms .col-md-12,.cms .col-md-2,.cms .col-md-3,.cms .col-md-4,.cms .col-md-5,.cms .col-md-6,.cms .col-md-7,.cms .col-md-8,.cms .col-md-9{float:left}.cms .col-md-1{width:8.33333%}.cms .col-md-2{width:16.66667%}.cms .col-md-3{width:25%}.cms .col-md-4{width:33.33333%}.cms .col-md-5{width:41.66667%}.cms .col-md-6{width:50%}.cms .col-md-7{width:58.33333%}.cms .col-md-8{width:66.66667%}.cms .col-md-9{width:75%}.cms .col-md-10{width:83.33333%}.cms .col-md-11{width:91.66667%}.cms .col-md-12{width:100%}.cms .col-md-pull-0{right:auto}.cms .col-md-pull-1{right:8.33333%}.cms .col-md-pull-2{right:16.66667%}.cms .col-md-pull-3{right:25%}.cms .col-md-pull-4{right:33.33333%}.cms .col-md-pull-5{right:41.66667%}.cms .col-md-pull-6{right:50%}.cms .col-md-pull-7{right:58.33333%}.cms .col-md-pull-8{right:66.66667%}.cms .col-md-pull-9{right:75%}.cms .col-md-pull-10{right:83.33333%}.cms .col-md-pull-11{right:91.66667%}.cms .col-md-pull-12{right:100%}.cms .col-md-push-0{left:auto}.cms .col-md-push-1{left:8.33333%}.cms .col-md-push-2{left:16.66667%}.cms .col-md-push-3{left:25%}.cms .col-md-push-4{left:33.33333%}.cms .col-md-push-5{left:41.66667%}.cms .col-md-push-6{left:50%}.cms .col-md-push-7{left:58.33333%}.cms .col-md-push-8{left:66.66667%}.cms .col-md-push-9{left:75%}.cms .col-md-push-10{left:83.33333%}.cms .col-md-push-11{left:91.66667%}.cms .col-md-push-12{left:100%}.cms .col-md-offset-0{margin-left:0}.cms .col-md-offset-1{margin-left:8.33333%}.cms .col-md-offset-2{margin-left:16.66667%}.cms .col-md-offset-3{margin-left:25%}.cms .col-md-offset-4{margin-left:33.33333%}.cms .col-md-offset-5{margin-left:41.66667%}.cms .col-md-offset-6{margin-left:50%}.cms .col-md-offset-7{margin-left:58.33333%}.cms .col-md-offset-8{margin-left:66.66667%}.cms .col-md-offset-9{margin-left:75%}.cms .col-md-offset-10{margin-left:83.33333%}.cms .col-md-offset-11{margin-left:91.66667%}.cms .col-md-offset-12{margin-left:100%}}@media (min-width:1200px){.cms .col-lg-1,.cms .col-lg-10,.cms .col-lg-11,.cms .col-lg-12,.cms .col-lg-2,.cms .col-lg-3,.cms .col-lg-4,.cms .col-lg-5,.cms .col-lg-6,.cms .col-lg-7,.cms .col-lg-8,.cms .col-lg-9{float:left}.cms .col-lg-1{width:8.33333%}.cms .col-lg-2{width:16.66667%}.cms .col-lg-3{width:25%}.cms .col-lg-4{width:33.33333%}.cms .col-lg-5{width:41.66667%}.cms .col-lg-6{width:50%}.cms .col-lg-7{width:58.33333%}.cms .col-lg-8{width:66.66667%}.cms .col-lg-9{width:75%}.cms .col-lg-10{width:83.33333%}.cms .col-lg-11{width:91.66667%}.cms .col-lg-12{width:100%}.cms .col-lg-pull-0{right:auto}.cms .col-lg-pull-1{right:8.33333%}.cms .col-lg-pull-2{right:16.66667%}.cms .col-lg-pull-3{right:25%}.cms .col-lg-pull-4{right:33.33333%}.cms .col-lg-pull-5{right:41.66667%}.cms .col-lg-pull-6{right:50%}.cms .col-lg-pull-7{right:58.33333%}.cms .col-lg-pull-8{right:66.66667%}.cms .col-lg-pull-9{right:75%}.cms .col-lg-pull-10{right:83.33333%}.cms .col-lg-pull-11{right:91.66667%}.cms .col-lg-pull-12{right:100%}.cms .col-lg-push-0{left:auto}.cms .col-lg-push-1{left:8.33333%}.cms .col-lg-push-2{left:16.66667%}.cms .col-lg-push-3{left:25%}.cms .col-lg-push-4{left:33.33333%}.cms .col-lg-push-5{left:41.66667%}.cms .col-lg-push-6{left:50%}.cms .col-lg-push-7{left:58.33333%}.cms .col-lg-push-8{left:66.66667%}.cms .col-lg-push-9{left:75%}.cms .col-lg-push-10{left:83.33333%}.cms .col-lg-push-11{left:91.66667%}.cms .col-lg-push-12{left:100%}.cms .col-lg-offset-0{margin-left:0}.cms .col-lg-offset-1{margin-left:8.33333%}.cms .col-lg-offset-2{margin-left:16.66667%}.cms .col-lg-offset-3{margin-left:25%}.cms .col-lg-offset-4{margin-left:33.33333%}.cms .col-lg-offset-5{margin-left:41.66667%}.cms .col-lg-offset-6{margin-left:50%}.cms .col-lg-offset-7{margin-left:58.33333%}.cms .col-lg-offset-8{margin-left:66.66667%}.cms .col-lg-offset-9{margin-left:75%}.cms .col-lg-offset-10{margin-left:83.33333%}.cms .col-lg-offset-11{margin-left:91.66667%}.cms .col-lg-offset-12{margin-left:100%}}.cms caption{padding-top:8px;padding-bottom:8px;color:#777;text-align:left}.cms th{text-align:left}.cms .table{width:100%;max-width:100%;margin-bottom:20px}.cms .table>tbody>tr>td,.cms .table>tbody>tr>th,.cms .table>tfoot>tr>td,.cms .table>tfoot>tr>th,.cms .table>thead>tr>td,.cms .table>thead>tr>th{padding:8px;line-height:1.42857;vertical-align:top;border-top:1px solid #ddd}.cms .table>thead>tr>th{vertical-align:bottom;border-bottom:2px solid #ddd}.cms .table>caption+thead>tr:first-child>td,.cms .table>caption+thead>tr:first-child>th,.cms .table>colgroup+thead>tr:first-child>td,.cms .table>colgroup+thead>tr:first-child>th,.cms .table>thead:first-child>tr:first-child>td,.cms .table>thead:first-child>tr:first-child>th{border-top:0}.cms .table>tbody+tbody{border-top:2px solid #ddd}.cms .table .table{background-color:#fff}.cms .table-condensed>tbody>tr>td,.cms .table-condensed>tbody>tr>th,.cms .table-condensed>tfoot>tr>td,.cms .table-condensed>tfoot>tr>th,.cms .table-condensed>thead>tr>td,.cms .table-condensed>thead>tr>th{padding:5px}.cms .table-bordered,.cms .table-bordered>tbody>tr>td,.cms .table-bordered>tbody>tr>th,.cms .table-bordered>tfoot>tr>td,.cms .table-bordered>tfoot>tr>th,.cms .table-bordered>thead>tr>td,.cms .table-bordered>thead>tr>th{border:1px solid #ddd}.cms .table-bordered>thead>tr>td,.cms .table-bordered>thead>tr>th{border-bottom-width:2px}.cms .table-striped>tbody>tr:nth-of-type(odd){background-color:#f9f9f9}.cms .table-hover>tbody>tr:hover,.cms .table>tbody>tr.active>td,.cms .table>tbody>tr.active>th,.cms .table>tbody>tr>td.active,.cms .table>tbody>tr>th.active,.cms .table>tfoot>tr.active>td,.cms .table>tfoot>tr.active>th,.cms .table>tfoot>tr>td.active,.cms .table>tfoot>tr>th.active,.cms .table>thead>tr.active>td,.cms .table>thead>tr.active>th,.cms .table>thead>tr>td.active,.cms .table>thead>tr>th.active{background-color:#f5f5f5}.cms table col[class*=col-]{position:static;float:none;display:table-column}.cms table td[class*=col-],.cms table th[class*=col-]{position:static;float:none;display:table-cell}.cms .table-hover>tbody>tr.active:hover>td,.cms .table-hover>tbody>tr.active:hover>th,.cms .table-hover>tbody>tr:hover>.active,.cms .table-hover>tbody>tr>td.active:hover,.cms .table-hover>tbody>tr>th.active:hover{background-color:#e8e8e8}.cms .table>tbody>tr.success>td,.cms .table>tbody>tr.success>th,.cms .table>tbody>tr>td.success,.cms .table>tbody>tr>th.success,.cms .table>tfoot>tr.success>td,.cms .table>tfoot>tr.success>th,.cms .table>tfoot>tr>td.success,.cms .table>tfoot>tr>th.success,.cms .table>thead>tr.success>td,.cms .table>thead>tr.success>th,.cms .table>thead>tr>td.success,.cms .table>thead>tr>th.success{background-color:#dff0d8}.cms .table-hover>tbody>tr.success:hover>td,.cms .table-hover>tbody>tr.success:hover>th,.cms .table-hover>tbody>tr:hover>.success,.cms .table-hover>tbody>tr>td.success:hover,.cms .table-hover>tbody>tr>th.success:hover{background-color:#d0e9c6}.cms .table>tbody>tr.info>td,.cms .table>tbody>tr.info>th,.cms .table>tbody>tr>td.info,.cms .table>tbody>tr>th.info,.cms .table>tfoot>tr.info>td,.cms .table>tfoot>tr.info>th,.cms .table>tfoot>tr>td.info,.cms .table>tfoot>tr>th.info,.cms .table>thead>tr.info>td,.cms .table>thead>tr.info>th,.cms .table>thead>tr>td.info,.cms .table>thead>tr>th.info{background-color:#d9edf7}.cms .table-hover>tbody>tr.info:hover>td,.cms .table-hover>tbody>tr.info:hover>th,.cms .table-hover>tbody>tr:hover>.info,.cms .table-hover>tbody>tr>td.info:hover,.cms .table-hover>tbody>tr>th.info:hover{background-color:#c4e3f3}.cms .table>tbody>tr.warning>td,.cms .table>tbody>tr.warning>th,.cms .table>tbody>tr>td.warning,.cms .table>tbody>tr>th.warning,.cms .table>tfoot>tr.warning>td,.cms .table>tfoot>tr.warning>th,.cms .table>tfoot>tr>td.warning,.cms .table>tfoot>tr>th.warning,.cms .table>thead>tr.warning>td,.cms .table>thead>tr.warning>th,.cms .table>thead>tr>td.warning,.cms .table>thead>tr>th.warning{background-color:#fcf8e3}.cms .table-hover>tbody>tr.warning:hover>td,.cms .table-hover>tbody>tr.warning:hover>th,.cms .table-hover>tbody>tr:hover>.warning,.cms .table-hover>tbody>tr>td.warning:hover,.cms .table-hover>tbody>tr>th.warning:hover{background-color:#faf2cc}.cms .table>tbody>tr.danger>td,.cms .table>tbody>tr.danger>th,.cms .table>tbody>tr>td.danger,.cms .table>tbody>tr>th.danger,.cms .table>tfoot>tr.danger>td,.cms .table>tfoot>tr.danger>th,.cms .table>tfoot>tr>td.danger,.cms .table>tfoot>tr>th.danger,.cms .table>thead>tr.danger>td,.cms .table>thead>tr.danger>th,.cms .table>thead>tr>td.danger,.cms .table>thead>tr>th.danger{background-color:#f2dede}.cms .table-hover>tbody>tr.danger:hover>td,.cms .table-hover>tbody>tr.danger:hover>th,.cms .table-hover>tbody>tr:hover>.danger,.cms .table-hover>tbody>tr>td.danger:hover,.cms .table-hover>tbody>tr>th.danger:hover{background-color:#ebcccc}.cms .table-responsive{overflow-x:auto;min-height:.01%}@media screen and (max-width:767px){.cms .table-responsive{width:100%;margin-bottom:15px;overflow-y:hidden;-ms-overflow-style:-ms-autohiding-scrollbar;border:1px solid #ddd}.cms .table-responsive>.table{margin-bottom:0}.cms .table-responsive>.table>tbody>tr>td,.cms .table-responsive>.table>tbody>tr>th,.cms .table-responsive>.table>tfoot>tr>td,.cms .table-responsive>.table>tfoot>tr>th,.cms .table-responsive>.table>thead>tr>td,.cms .table-responsive>.table>thead>tr>th{white-space:nowrap}.cms .table-responsive>.table-bordered{border:0}.cms .table-responsive>.table-bordered>tbody>tr>td:first-child,.cms .table-responsive>.table-bordered>tbody>tr>th:first-child,.cms .table-responsive>.table-bordered>tfoot>tr>td:first-child,.cms .table-responsive>.table-bordered>tfoot>tr>th:first-child,.cms .table-responsive>.table-bordered>thead>tr>td:first-child,.cms .table-responsive>.table-bordered>thead>tr>th:first-child{border-left:0}.cms .table-responsive>.table-bordered>tbody>tr>td:last-child,.cms .table-responsive>.table-bordered>tbody>tr>th:last-child,.cms .table-responsive>.table-bordered>tfoot>tr>td:last-child,.cms .table-responsive>.table-bordered>tfoot>tr>th:last-child,.cms .table-responsive>.table-bordered>thead>tr>td:last-child,.cms .table-responsive>.table-bordered>thead>tr>th:last-child{border-right:0}.cms .table-responsive>.table-bordered>tbody>tr:last-child>td,.cms .table-responsive>.table-bordered>tbody>tr:last-child>th,.cms .table-responsive>.table-bordered>tfoot>tr:last-child>td,.cms .table-responsive>.table-bordered>tfoot>tr:last-child>th{border-bottom:0}}.cms fieldset{padding:0;margin:0;border:0;min-width:0}.cms legend{display:block;width:100%;padding:0;margin-bottom:20px;font-size:21px;line-height:inherit;color:#333;border:0;border-bottom:1px solid #e5e5e5}.cms label{display:inline-block;max-width:100%;margin-bottom:5px}.cms input[type=search]{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none}.cms input[type=radio],.cms input[type=checkbox]{margin:4px 0 0;margin-top:1px\\9;line-height:normal}.cms .form-control,.cms output{font-size:14px;line-height:1.42857;color:#555;display:block}.cms input[type=file]{display:block}.cms input[type=range]{display:block;width:100%}.cms select[multiple],.cms select[size]{height:auto}.cms input[type=file]:focus,.cms input[type=radio]:focus,.cms input[type=checkbox]:focus{outline:dotted thin;outline:-webkit-focus-ring-color auto 5px;outline-offset:-2px}.cms output{padding-top:7px}.cms .form-control{width:100%;height:34px;padding:6px 12px;background-color:#fff;border:1px solid #ccc;border-radius:4px;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075);box-shadow:inset 0 1px 1px rgba(0,0,0,.075);-webkit-transition:border-color ease-in-out .15s,box-shadow ease-in-out .15s;-o-transition:border-color ease-in-out .15s,box-shadow ease-in-out .15s;transition:border-color ease-in-out .15s,box-shadow ease-in-out .15s}.cms .form-control:focus{border-color:#66afe9;outline:0;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)}.cms .form-control::-moz-placeholder{color:#999;opacity:1}.cms .form-control:-ms-input-placeholder{color:#999}.cms .form-control::-webkit-input-placeholder{color:#999}.cms .has-success .checkbox,.cms .has-success .checkbox-inline,.cms .has-success .control-label,.cms .has-success .form-control-feedback,.cms .has-success .help-block,.cms .has-success .radio,.cms .has-success .radio-inline,.cms .has-success.checkbox label,.cms .has-success.checkbox-inline label,.cms .has-success.radio label,.cms .has-success.radio-inline label{color:#3c763d}.cms .form-control::-ms-expand{border:0;background-color:transparent}.cms .form-control[disabled],.cms .form-control[readonly],fieldset[disabled] .cms .form-control{background-color:#eee;opacity:1}.cms .form-control[disabled],fieldset[disabled] .cms .form-control{cursor:not-allowed}.cms textarea.form-control{height:auto}@media screen and (-webkit-min-device-pixel-ratio:0){.cms input[type=date].form-control,.cms input[type=time].form-control,.cms input[type=datetime-local].form-control,.cms input[type=month].form-control{line-height:34px}.cms .cms-form input[type=date].form-control,.cms .cms-form input[type=time].form-control,.cms .cms-form input[type=datetime-local].form-control,.cms .cms-form input[type=month].form-control,.cms .input-group-sm>.input-group-btn>input[type=date].btn,.cms .input-group-sm>.input-group-btn>input[type=time].btn,.cms .input-group-sm>.input-group-btn>input[type=datetime-local].btn,.cms .input-group-sm>.input-group-btn>input[type=month].btn,.cms .input-group-sm>input[type=date].form-control,.cms .input-group-sm>input[type=date].input-group-addon,.cms .input-group-sm>input[type=time].form-control,.cms .input-group-sm>input[type=time].input-group-addon,.cms .input-group-sm>input[type=datetime-local].form-control,.cms .input-group-sm>input[type=datetime-local].input-group-addon,.cms .input-group-sm>input[type=month].form-control,.cms .input-group-sm>input[type=month].input-group-addon,.cms input[type=date].input-sm,.cms input[type=time].input-sm,.cms input[type=datetime-local].input-sm,.cms input[type=month].input-sm,.cms-form .cms input[type=date].form-control,.cms-form .cms input[type=time].form-control,.cms-form .cms input[type=datetime-local].form-control,.cms-form .cms input[type=month].form-control,.input-group-sm .cms input[type=date],.input-group-sm .cms input[type=time],.input-group-sm .cms input[type=datetime-local],.input-group-sm .cms input[type=month]{line-height:30px}.cms .input-group-lg>.input-group-btn>input[type=date].btn,.cms .input-group-lg>.input-group-btn>input[type=time].btn,.cms .input-group-lg>.input-group-btn>input[type=datetime-local].btn,.cms .input-group-lg>.input-group-btn>input[type=month].btn,.cms .input-group-lg>input[type=date].form-control,.cms .input-group-lg>input[type=date].input-group-addon,.cms .input-group-lg>input[type=time].form-control,.cms .input-group-lg>input[type=time].input-group-addon,.cms .input-group-lg>input[type=datetime-local].form-control,.cms .input-group-lg>input[type=datetime-local].input-group-addon,.cms .input-group-lg>input[type=month].form-control,.cms .input-group-lg>input[type=month].input-group-addon,.cms input[type=date].input-lg,.cms input[type=time].input-lg,.cms input[type=datetime-local].input-lg,.cms input[type=month].input-lg,.input-group-lg .cms input[type=date],.input-group-lg .cms input[type=time],.input-group-lg .cms input[type=datetime-local],.input-group-lg .cms input[type=month]{line-height:46px}}.cms .form-group{margin-bottom:15px}.cms .checkbox,.cms .radio{position:relative;display:block;margin-top:10px;margin-bottom:10px}.cms .checkbox label,.cms .radio label{min-height:20px;padding-left:20px;margin-bottom:0;font-weight:400;cursor:pointer}.cms .checkbox input[type=checkbox],.cms .checkbox-inline input[type=checkbox],.cms .radio input[type=radio],.cms .radio-inline input[type=radio]{position:absolute;margin-left:-20px;margin-top:4px\\9}.cms .checkbox+.checkbox,.cms .radio+.radio{margin-top:-5px}.cms .checkbox-inline,.cms .radio-inline{position:relative;display:inline-block;padding-left:20px;margin-bottom:0;vertical-align:middle;font-weight:400;cursor:pointer}.cms .checkbox-inline+.checkbox-inline,.cms .radio-inline+.radio-inline{margin-top:0;margin-left:10px}.cms .checkbox-inline.disabled,.cms .checkbox.disabled label,.cms .radio-inline.disabled,.cms .radio.disabled label,.cms input[type=radio].disabled,.cms input[type=radio][disabled],.cms input[type=checkbox].disabled,.cms input[type=checkbox][disabled],fieldset[disabled] .cms .checkbox label,fieldset[disabled] .cms .checkbox-inline,fieldset[disabled] .cms .radio label,fieldset[disabled] .cms .radio-inline,fieldset[disabled] .cms input[type=radio],fieldset[disabled] .cms input[type=checkbox]{cursor:not-allowed}.cms .form-control-static{padding-top:7px;padding-bottom:7px;margin-bottom:0;min-height:34px}.cms .cms-form .form-control-static.form-control,.cms .form-control-static.input-lg,.cms .form-control-static.input-sm,.cms .input-group-lg>.form-control-static.form-control,.cms .input-group-lg>.form-control-static.input-group-addon,.cms .input-group-lg>.input-group-btn>.form-control-static.btn,.cms .input-group-sm>.form-control-static.form-control,.cms .input-group-sm>.form-control-static.input-group-addon,.cms .input-group-sm>.input-group-btn>.form-control-static.btn,.cms-form .cms .form-control-static.form-control{padding-left:0;padding-right:0}.cms .cms-form .form-control,.cms .input-group-sm>.form-control,.cms .input-group-sm>.input-group-addon,.cms .input-group-sm>.input-group-btn>.btn,.cms .input-sm,.cms-form .cms .form-control{height:30px;padding:5px 10px;font-size:12px;line-height:1.5;border-radius:3px}.cms .cms-form select.form-control,.cms .input-group-sm>.input-group-btn>select.btn,.cms .input-group-sm>select.form-control,.cms .input-group-sm>select.input-group-addon,.cms select.input-sm,.cms-form .cms select.form-control{height:30px;line-height:30px}.cms .cms-form select[multiple].form-control,.cms .cms-form textarea.form-control,.cms .input-group-sm>.input-group-btn>select[multiple].btn,.cms .input-group-sm>.input-group-btn>textarea.btn,.cms .input-group-sm>select[multiple].form-control,.cms .input-group-sm>select[multiple].input-group-addon,.cms .input-group-sm>textarea.form-control,.cms .input-group-sm>textarea.input-group-addon,.cms select[multiple].input-sm,.cms textarea.input-sm,.cms-form .cms select[multiple].form-control,.cms-form .cms textarea.form-control{height:auto}.cms .form-group-sm .form-control{height:30px;padding:5px 10px;font-size:12px;line-height:1.5;border-radius:3px}.cms .form-group-sm select.form-control{height:30px;line-height:30px}.cms .form-group-sm select[multiple].form-control,.cms .form-group-sm textarea.form-control{height:auto}.cms .form-group-sm .form-control-static{height:30px;min-height:32px;padding:6px 10px;font-size:12px;line-height:1.5}.cms .input-group-lg>.form-control,.cms .input-group-lg>.input-group-addon,.cms .input-group-lg>.input-group-btn>.btn,.cms .input-lg{height:46px;padding:10px 16px;font-size:18px;line-height:1.33333;border-radius:6px}.cms .input-group-lg>.input-group-btn>select.btn,.cms .input-group-lg>select.form-control,.cms .input-group-lg>select.input-group-addon,.cms select.input-lg{height:46px;line-height:46px}.cms .input-group-lg>.input-group-btn>select[multiple].btn,.cms .input-group-lg>.input-group-btn>textarea.btn,.cms .input-group-lg>select[multiple].form-control,.cms .input-group-lg>select[multiple].input-group-addon,.cms .input-group-lg>textarea.form-control,.cms .input-group-lg>textarea.input-group-addon,.cms select[multiple].input-lg,.cms textarea.input-lg{height:auto}.cms .form-group-lg .form-control{height:46px;padding:10px 16px;font-size:18px;line-height:1.33333;border-radius:6px}.cms .form-group-lg select.form-control{height:46px;line-height:46px}.cms .form-group-lg select[multiple].form-control,.cms .form-group-lg textarea.form-control{height:auto}.cms .form-group-lg .form-control-static{height:46px;min-height:38px;padding:11px 16px;font-size:18px;line-height:1.33333}.cms .has-feedback{position:relative}.cms .has-feedback .form-control{padding-right:42.5px}.cms .form-control-feedback{position:absolute;top:0;right:0;z-index:2;display:block;width:34px;height:34px;line-height:34px;text-align:center;pointer-events:none}.cms .collapsing,.cms .dropdown,.cms .dropup{position:relative}.cms .form-group-lg .form-control+.form-control-feedback,.cms .input-group-lg+.form-control-feedback,.cms .input-group-lg>.form-control+.form-control-feedback,.cms .input-group-lg>.input-group-addon+.form-control-feedback,.cms .input-group-lg>.input-group-btn>.btn+.form-control-feedback,.cms .input-lg+.form-control-feedback{width:46px;height:46px;line-height:46px}.cms .cms-form .form-control+.form-control-feedback,.cms .form-group-sm .form-control+.form-control-feedback,.cms .input-group-sm+.form-control-feedback,.cms .input-group-sm>.form-control+.form-control-feedback,.cms .input-group-sm>.input-group-addon+.form-control-feedback,.cms .input-group-sm>.input-group-btn>.btn+.form-control-feedback,.cms .input-sm+.form-control-feedback,.cms-form .cms .form-control+.form-control-feedback{width:30px;height:30px;line-height:30px}.cms .has-success .form-control{border-color:#3c763d;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075);box-shadow:inset 0 1px 1px rgba(0,0,0,.075)}.cms .has-success .form-control:focus{border-color:#2b542c;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #67b168;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #67b168}.cms .has-success .input-group-addon{color:#3c763d;border-color:#3c763d;background-color:#dff0d8}.cms .has-warning .checkbox,.cms .has-warning .checkbox-inline,.cms .has-warning .control-label,.cms .has-warning .form-control-feedback,.cms .has-warning .help-block,.cms .has-warning .radio,.cms .has-warning .radio-inline,.cms .has-warning.checkbox label,.cms .has-warning.checkbox-inline label,.cms .has-warning.radio label,.cms .has-warning.radio-inline label{color:#8a6d3b}.cms .has-warning .form-control{border-color:#8a6d3b;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075);box-shadow:inset 0 1px 1px rgba(0,0,0,.075)}.cms .has-warning .form-control:focus{border-color:#66512c;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #c0a16b;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #c0a16b}.cms .has-warning .input-group-addon{color:#8a6d3b;border-color:#8a6d3b;background-color:#fcf8e3}.cms .has-error .checkbox,.cms .has-error .checkbox-inline,.cms .has-error .control-label,.cms .has-error .form-control-feedback,.cms .has-error .help-block,.cms .has-error .radio,.cms .has-error .radio-inline,.cms .has-error.checkbox label,.cms .has-error.checkbox-inline label,.cms .has-error.radio label,.cms .has-error.radio-inline label{color:#a94442}.cms .has-error .form-control{border-color:#a94442;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075);box-shadow:inset 0 1px 1px rgba(0,0,0,.075)}.cms .has-error .form-control:focus{border-color:#843534;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #ce8483;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #ce8483}.cms .has-error .input-group-addon{color:#a94442;border-color:#a94442;background-color:#f2dede}.cms .has-feedback label~.form-control-feedback{top:25px}.cms .has-feedback label.sr-only~.form-control-feedback{top:0}.cms .help-block{display:block;margin-top:5px;margin-bottom:10px;color:#737373}@media (min-width:768px){.cms .form-inline .form-control-static,.cms .form-inline .form-group{display:inline-block}.cms .form-inline .control-label,.cms .form-inline .form-group{margin-bottom:0;vertical-align:middle}.cms .form-inline .form-control{display:inline-block;width:auto;vertical-align:middle}.cms .form-inline .input-group{display:inline-table;vertical-align:middle}.cms .form-inline .input-group .form-control,.cms .form-inline .input-group .input-group-addon,.cms .form-inline .input-group .input-group-btn{width:auto}.cms .form-inline .input-group>.form-control{width:100%}.cms .form-inline .checkbox,.cms .form-inline .radio{display:inline-block;margin-top:0;margin-bottom:0;vertical-align:middle}.cms .form-inline .checkbox label,.cms .form-inline .radio label{padding-left:0}.cms .form-inline .checkbox input[type=checkbox],.cms .form-inline .radio input[type=radio]{position:relative;margin-left:0}.cms .form-inline .has-feedback .form-control-feedback{top:0}.cms .form-horizontal .control-label{text-align:right;margin-bottom:0;padding-top:7px}}.cms .form-horizontal .checkbox,.cms .form-horizontal .checkbox-inline,.cms .form-horizontal .radio,.cms .form-horizontal .radio-inline{margin-top:0;margin-bottom:0;padding-top:7px}.cms .form-horizontal .checkbox,.cms .form-horizontal .radio{min-height:27px}.cms .form-horizontal .form-group{margin-left:-15px;margin-right:-15px}.cms .form-horizontal .form-group:after,.cms .form-horizontal .form-group:before{content:\" \";display:table}.cms .form-horizontal .has-feedback .form-control-feedback{right:15px}@media (min-width:768px){.cms .form-horizontal .form-group-lg .control-label{padding-top:11px;font-size:18px}.cms .form-horizontal .form-group-sm .control-label{padding-top:6px;font-size:12px}}.cms .btn{display:inline-block;margin-bottom:0;font-weight:400;text-align:center;vertical-align:middle;touch-action:manipulation;cursor:pointer;border:1px solid transparent;white-space:nowrap;padding:6px 12px;font-size:14px;line-height:1.42857;border-radius:4px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.cms .btn.active.focus,.cms .btn.active:focus,.cms .btn.focus,.cms .btn:active.focus,.cms .btn:active:focus,.cms .btn:focus{outline:dotted thin;outline:-webkit-focus-ring-color auto 5px;outline-offset:-2px}.cms .btn.focus,.cms .btn:focus,.cms .btn:hover{color:#333;text-decoration:none}.cms .btn.active,.cms .btn:active{outline:0;-webkit-box-shadow:inset 0 3px 5px rgba(0,0,0,.125);box-shadow:inset 0 3px 5px rgba(0,0,0,.125)}.cms .btn.disabled,.cms .btn[disabled],fieldset[disabled] .cms .btn{cursor:not-allowed;opacity:.65;filter:alpha(opacity=65);-webkit-box-shadow:none;box-shadow:none}.cms a.btn.disabled,fieldset[disabled] .cms a.btn{pointer-events:none}.cms .btn-default{color:#333;background-color:#fff;border-color:#ccc}.cms .btn-default.focus,.cms .btn-default:focus{color:#333;background-color:#e6e6e6;border-color:#8c8c8c}.cms .btn-default.active,.cms .btn-default:active,.cms .btn-default:hover,.open>.cms .btn-default.dropdown-toggle{color:#333;background-color:#e6e6e6;border-color:#adadad}.cms .btn-default.active.focus,.cms .btn-default.active:focus,.cms .btn-default.active:hover,.cms .btn-default:active.focus,.cms .btn-default:active:focus,.cms .btn-default:active:hover,.open>.cms .btn-default.dropdown-toggle.focus,.open>.cms .btn-default.dropdown-toggle:focus,.open>.cms .btn-default.dropdown-toggle:hover{color:#333;background-color:#d4d4d4;border-color:#8c8c8c}.cms .btn-default.disabled.focus,.cms .btn-default.disabled:focus,.cms .btn-default.disabled:hover,.cms .btn-default[disabled].focus,.cms .btn-default[disabled]:focus,.cms .btn-default[disabled]:hover,fieldset[disabled] .cms .btn-default.focus,fieldset[disabled] .cms .btn-default:focus,fieldset[disabled] .cms .btn-default:hover{background-color:#fff;border-color:#ccc}.cms .btn-default .badge{color:#fff;background-color:#333}.cms .btn-primary{color:#fff;background-color:#337ab7;border-color:#2e6da4}.cms .btn-primary.focus,.cms .btn-primary:focus{color:#fff;background-color:#286090;border-color:#122b40}.cms .btn-primary.active,.cms .btn-primary:active,.cms .btn-primary:hover,.open>.cms .btn-primary.dropdown-toggle{color:#fff;background-color:#286090;border-color:#204d74}.cms .btn-primary.active.focus,.cms .btn-primary.active:focus,.cms .btn-primary.active:hover,.cms .btn-primary:active.focus,.cms .btn-primary:active:focus,.cms .btn-primary:active:hover,.open>.cms .btn-primary.dropdown-toggle.focus,.open>.cms .btn-primary.dropdown-toggle:focus,.open>.cms .btn-primary.dropdown-toggle:hover{color:#fff;background-color:#204d74;border-color:#122b40}.cms .btn-primary.disabled.focus,.cms .btn-primary.disabled:focus,.cms .btn-primary.disabled:hover,.cms .btn-primary[disabled].focus,.cms .btn-primary[disabled]:focus,.cms .btn-primary[disabled]:hover,fieldset[disabled] .cms .btn-primary.focus,fieldset[disabled] .cms .btn-primary:focus,fieldset[disabled] .cms .btn-primary:hover{background-color:#337ab7;border-color:#2e6da4}.cms .btn-primary .badge{color:#337ab7;background-color:#fff}.cms .btn-success{color:#fff;background-color:#5cb85c;border-color:#4cae4c}.cms .btn-success.focus,.cms .btn-success:focus{color:#fff;background-color:#449d44;border-color:#255625}.cms .btn-success.active,.cms .btn-success:active,.cms .btn-success:hover,.open>.cms .btn-success.dropdown-toggle{color:#fff;background-color:#449d44;border-color:#398439}.cms .btn-success.active.focus,.cms .btn-success.active:focus,.cms .btn-success.active:hover,.cms .btn-success:active.focus,.cms .btn-success:active:focus,.cms .btn-success:active:hover,.open>.cms .btn-success.dropdown-toggle.focus,.open>.cms .btn-success.dropdown-toggle:focus,.open>.cms .btn-success.dropdown-toggle:hover{color:#fff;background-color:#398439;border-color:#255625}.cms .btn-success.active,.cms .btn-success:active,.open>.cms .btn-success.dropdown-toggle{background-image:none}.cms .btn-success.disabled.focus,.cms .btn-success.disabled:focus,.cms .btn-success.disabled:hover,.cms .btn-success[disabled].focus,.cms .btn-success[disabled]:focus,.cms .btn-success[disabled]:hover,fieldset[disabled] .cms .btn-success.focus,fieldset[disabled] .cms .btn-success:focus,fieldset[disabled] .cms .btn-success:hover{background-color:#5cb85c;border-color:#4cae4c}.cms .btn-success .badge{color:#5cb85c;background-color:#fff}.cms .btn-info{color:#fff;background-color:#5bc0de;border-color:#46b8da}.cms .btn-info.focus,.cms .btn-info:focus{color:#fff;background-color:#31b0d5;border-color:#1b6d85}.cms .btn-info.active,.cms .btn-info:active,.cms .btn-info:hover,.open>.cms .btn-info.dropdown-toggle{color:#fff;background-color:#31b0d5;border-color:#269abc}.cms .btn-info.active.focus,.cms .btn-info.active:focus,.cms .btn-info.active:hover,.cms .btn-info:active.focus,.cms .btn-info:active:focus,.cms .btn-info:active:hover,.open>.cms .btn-info.dropdown-toggle.focus,.open>.cms .btn-info.dropdown-toggle:focus,.open>.cms .btn-info.dropdown-toggle:hover{color:#fff;background-color:#269abc;border-color:#1b6d85}.cms .btn-info.disabled.focus,.cms .btn-info.disabled:focus,.cms .btn-info.disabled:hover,.cms .btn-info[disabled].focus,.cms .btn-info[disabled]:focus,.cms .btn-info[disabled]:hover,fieldset[disabled] .cms .btn-info.focus,fieldset[disabled] .cms .btn-info:focus,fieldset[disabled] .cms .btn-info:hover{background-color:#5bc0de;border-color:#46b8da}.cms .btn-info .badge{color:#5bc0de;background-color:#fff}.cms .btn-warning{color:#fff;background-color:#f0ad4e;border-color:#eea236}.cms .btn-warning.focus,.cms .btn-warning:focus{color:#fff;background-color:#ec971f;border-color:#985f0d}.cms .btn-warning.active,.cms .btn-warning:active,.cms .btn-warning:hover,.open>.cms .btn-warning.dropdown-toggle{color:#fff;background-color:#ec971f;border-color:#d58512}.cms .btn-warning.active.focus,.cms .btn-warning.active:focus,.cms .btn-warning.active:hover,.cms .btn-warning:active.focus,.cms .btn-warning:active:focus,.cms .btn-warning:active:hover,.open>.cms .btn-warning.dropdown-toggle.focus,.open>.cms .btn-warning.dropdown-toggle:focus,.open>.cms .btn-warning.dropdown-toggle:hover{color:#fff;background-color:#d58512;border-color:#985f0d}.cms .btn-warning.disabled.focus,.cms .btn-warning.disabled:focus,.cms .btn-warning.disabled:hover,.cms .btn-warning[disabled].focus,.cms .btn-warning[disabled]:focus,.cms .btn-warning[disabled]:hover,fieldset[disabled] .cms .btn-warning.focus,fieldset[disabled] .cms .btn-warning:focus,fieldset[disabled] .cms .btn-warning:hover{background-color:#f0ad4e;border-color:#eea236}.cms .btn-warning .badge{color:#f0ad4e;background-color:#fff}.cms .btn-danger{color:#fff;background-color:#d9534f;border-color:#d43f3a}.cms .btn-danger.focus,.cms .btn-danger:focus{color:#fff;background-color:#c9302c;border-color:#761c19}.cms .btn-danger.active,.cms .btn-danger:active,.cms .btn-danger:hover,.open>.cms .btn-danger.dropdown-toggle{color:#fff;background-color:#c9302c;border-color:#ac2925}.cms .btn-danger.active.focus,.cms .btn-danger.active:focus,.cms .btn-danger.active:hover,.cms .btn-danger:active.focus,.cms .btn-danger:active:focus,.cms .btn-danger:active:hover,.open>.cms .btn-danger.dropdown-toggle.focus,.open>.cms .btn-danger.dropdown-toggle:focus,.open>.cms .btn-danger.dropdown-toggle:hover{color:#fff;background-color:#ac2925;border-color:#761c19}.cms .btn-danger.disabled.focus,.cms .btn-danger.disabled:focus,.cms .btn-danger.disabled:hover,.cms .btn-danger[disabled].focus,.cms .btn-danger[disabled]:focus,.cms .btn-danger[disabled]:hover,fieldset[disabled] .cms .btn-danger.focus,fieldset[disabled] .cms .btn-danger:focus,fieldset[disabled] .cms .btn-danger:hover{background-color:#d9534f;border-color:#d43f3a}.cms .btn-danger .badge{color:#d9534f;background-color:#fff}.cms .btn-link{color:#337ab7;font-weight:400;border-radius:0}.cms .btn-link,.cms .btn-link.active,.cms .btn-link:active,.cms .btn-link[disabled],fieldset[disabled] .cms .btn-link{background-color:transparent;-webkit-box-shadow:none;box-shadow:none}.cms .btn-link,.cms .btn-link:active,.cms .btn-link:focus,.cms .btn-link:hover{border-color:transparent}.cms .btn-link:focus,.cms .btn-link:hover{color:#23527c;text-decoration:underline;background-color:transparent}.cms .btn-link[disabled]:focus,.cms .btn-link[disabled]:hover,fieldset[disabled] .cms .btn-link:focus,fieldset[disabled] .cms .btn-link:hover{color:#777;text-decoration:none}.cms .btn-group-lg>.btn,.cms .btn-lg{padding:10px 16px;font-size:18px;line-height:1.33333;border-radius:6px}.cms .btn-group-sm>.btn,.cms .btn-sm{padding:5px 10px;font-size:12px;line-height:1.5;border-radius:3px}.cms .btn-group-xs>.btn,.cms .btn-xs{padding:1px 5px;font-size:12px;line-height:1.5;border-radius:3px}.cms .btn-block{display:block;width:100%}.cms .btn-block+.btn-block{margin-top:5px}.cms input[type=button].btn-block,.cms input[type=reset].btn-block,.cms input[type=submit].btn-block{width:100%}.cms .fade{opacity:0;-webkit-transition:opacity .15s linear;-o-transition:opacity .15s linear;transition:opacity .15s linear}.cms .fade.in{opacity:1}.cms .collapse{display:none}.cms .collapse.in{display:block}.cms tr.collapse.in{display:table-row}.cms tbody.collapse.in{display:table-row-group}.cms .collapsing{height:0;overflow:hidden;-webkit-transition-property:height,visibility;transition-property:height,visibility;-webkit-transition-duration:.35s;transition-duration:.35s;-webkit-transition-timing-function:ease;transition-timing-function:ease}.cms .caret{display:inline-block;width:0;height:0;margin-left:2px;vertical-align:middle;border-top:4px dashed;border-top:4px solid\\9;border-right:4px solid transparent;border-left:4px solid transparent}.cms .dropdown-toggle:focus{outline:0}.cms .dropdown-menu{position:absolute;top:100%;left:0;z-index:1000;display:none;min-width:160px;padding:5px 0;margin:2px 0 0;list-style:none;font-size:14px;text-align:left;background-color:#fff;border:1px solid #ccc;border:1px solid rgba(0,0,0,.15);border-radius:4px;-webkit-box-shadow:0 6px 12px rgba(0,0,0,.175);box-shadow:0 6px 12px rgba(0,0,0,.175);background-clip:padding-box}.cms .dropdown-menu-right,.cms .dropdown-menu.pull-right{left:auto;right:0}.cms .dropdown-header,.cms .dropdown-menu>li>a{display:block;padding:3px 20px;line-height:1.42857;white-space:nowrap}.cms .dropdown-menu .divider{height:1px;margin:9px 0;overflow:hidden;background-color:#e5e5e5}.cms .dropdown-menu>li>a{font-weight:400;color:#333}.cms .dropdown-menu>li>a:focus,.cms .dropdown-menu>li>a:hover{text-decoration:none;color:#262626;background-color:#f5f5f5}.cms .dropdown-menu>.active>a,.cms .dropdown-menu>.active>a:focus,.cms .dropdown-menu>.active>a:hover{color:#fff;text-decoration:none;outline:0;background-color:#337ab7}.cms .dropdown-menu>.disabled>a,.cms .dropdown-menu>.disabled>a:focus,.cms .dropdown-menu>.disabled>a:hover{color:#777}.cms .dropdown-menu>.disabled>a:focus,.cms .dropdown-menu>.disabled>a:hover{text-decoration:none;background-color:transparent;filter:progid:DXImageTransform.Microsoft.gradient(enabled=false);cursor:not-allowed}.cms .open>.dropdown-menu{display:block}.cms .open>a{outline:0}.cms .dropdown-menu-left{left:0;right:auto}.cms .dropdown-header{font-size:12px;color:#777}.cms .dropdown-backdrop{position:fixed;left:0;right:0;bottom:0;top:0;z-index:990}.cms .pull-right>.dropdown-menu{right:0;left:auto}.cms .dropup .caret,.cms .navbar-fixed-bottom .dropdown .caret{border-top:0;border-bottom:4px dashed;border-bottom:4px solid\\9;content:\"\"}.cms .dropup .dropdown-menu,.cms .navbar-fixed-bottom .dropdown .dropdown-menu{top:auto;bottom:100%;margin-bottom:2px}@media (min-width:768px){.cms .navbar-right .dropdown-menu{right:0;left:auto}.cms .navbar-right .dropdown-menu-left{left:0;right:auto}}.cms .btn-group,.cms .btn-group-vertical{position:relative;display:inline-block;vertical-align:middle}.cms .btn-group-vertical>.btn,.cms .btn-group>.btn{position:relative;float:left}.cms .btn-group-vertical>.btn.active,.cms .btn-group-vertical>.btn:active,.cms .btn-group-vertical>.btn:focus,.cms .btn-group-vertical>.btn:hover,.cms .btn-group>.btn.active,.cms .btn-group>.btn:active,.cms .btn-group>.btn:focus,.cms .btn-group>.btn:hover{z-index:2}.cms .btn-group .btn+.btn,.cms .btn-group .btn+.btn-group,.cms .btn-group .btn-group+.btn,.cms .btn-group .btn-group+.btn-group{margin-left:-1px}.cms .btn-toolbar{margin-left:-5px}.cms .btn-toolbar:after,.cms .btn-toolbar:before{content:\" \";display:table}.cms .btn-toolbar>.btn,.cms .btn-toolbar>.btn-group,.cms .btn-toolbar>.input-group{margin-left:5px}.cms .btn .caret,.cms .btn-group>.btn:first-child{margin-left:0}.cms .btn-group>.btn:not(:first-child):not(:last-child):not(.dropdown-toggle){border-radius:0}.cms .btn-group>.btn:first-child:not(:last-child):not(.dropdown-toggle){border-bottom-right-radius:0;border-top-right-radius:0}.cms .btn-group>.btn:last-child:not(:first-child),.cms .btn-group>.dropdown-toggle:not(:first-child){border-bottom-left-radius:0;border-top-left-radius:0}.cms .btn-group>.btn-group:not(:first-child):not(:last-child)>.btn{border-radius:0}.cms .btn-group>.btn-group:first-child:not(:last-child)>.btn:last-child,.cms .btn-group>.btn-group:first-child:not(:last-child)>.dropdown-toggle{border-bottom-right-radius:0;border-top-right-radius:0}.cms .btn-group>.btn-group:last-child:not(:first-child)>.btn:first-child{border-bottom-left-radius:0;border-top-left-radius:0}.cms .btn-group .dropdown-toggle:active,.cms .btn-group.open .dropdown-toggle{outline:0}.cms .btn-group>.btn+.dropdown-toggle{padding-left:8px;padding-right:8px}.cms .btn-group-lg.btn-group>.btn+.dropdown-toggle,.cms .btn-group>.btn-lg+.dropdown-toggle{padding-left:12px;padding-right:12px}.cms .btn-group.open .dropdown-toggle{-webkit-box-shadow:inset 0 3px 5px rgba(0,0,0,.125);box-shadow:inset 0 3px 5px rgba(0,0,0,.125)}.cms .btn-group.open .dropdown-toggle.btn-link{-webkit-box-shadow:none;box-shadow:none}.cms .btn-group-lg>.btn .caret,.cms .btn-lg .caret{border-width:5px 5px 0}.cms .dropup .btn-group-lg>.btn .caret,.cms .dropup .btn-lg .caret{border-width:0 5px 5px}.cms .btn-group-vertical>.btn,.cms .btn-group-vertical>.btn-group,.cms .btn-group-vertical>.btn-group>.btn{display:block;float:none;width:100%;max-width:100%}.cms .btn-group-vertical>.btn-group:after,.cms .btn-group-vertical>.btn-group:before{content:\" \";display:table}.cms .btn-group-vertical>.btn-group>.btn{float:none}.cms .btn-group-vertical>.btn+.btn,.cms .btn-group-vertical>.btn+.btn-group,.cms .btn-group-vertical>.btn-group+.btn,.cms .btn-group-vertical>.btn-group+.btn-group{margin-top:-1px;margin-left:0}.cms .btn-group-vertical>.btn:not(:first-child):not(:last-child){border-radius:0}.cms .btn-group-vertical>.btn:first-child:not(:last-child){border-radius:4px 4px 0 0}.cms .btn-group-vertical>.btn:last-child:not(:first-child){border-radius:0 0 4px 4px}.cms .btn-group-vertical>.btn-group:not(:first-child):not(:last-child)>.btn{border-radius:0}.cms .btn-group-vertical>.btn-group:first-child:not(:last-child)>.btn:last-child,.cms .btn-group-vertical>.btn-group:first-child:not(:last-child)>.dropdown-toggle{border-bottom-right-radius:0;border-bottom-left-radius:0}.cms .btn-group-vertical>.btn-group:last-child:not(:first-child)>.btn:first-child{border-top-right-radius:0;border-top-left-radius:0}.cms .btn-group-justified{display:table;width:100%;table-layout:fixed;border-collapse:separate}.cms .btn-group-justified>.btn,.cms .btn-group-justified>.btn-group{float:none;display:table-cell;width:1%}.cms .btn-group-justified>.btn-group .btn{width:100%}.cms .btn-group-justified>.btn-group .dropdown-menu{left:auto}.cms [data-toggle=buttons]>.btn input[type=radio],.cms [data-toggle=buttons]>.btn input[type=checkbox],.cms [data-toggle=buttons]>.btn-group>.btn input[type=radio],.cms [data-toggle=buttons]>.btn-group>.btn input[type=checkbox]{position:absolute;clip:rect(0,0,0,0);pointer-events:none}.cms .input-group{position:relative;display:table;border-collapse:separate}.cms .input-group[class*=col-]{float:none;padding-left:0;padding-right:0}.cms .input-group .form-control{position:relative;z-index:2;float:left;width:100%;margin-bottom:0}.cms .input-group .form-control:focus{z-index:3}.cms .input-group .form-control,.cms .input-group-addon,.cms .input-group-btn{display:table-cell}.cms .input-group .form-control:not(:first-child):not(:last-child),.cms .input-group-addon:not(:first-child):not(:last-child),.cms .input-group-btn:not(:first-child):not(:last-child){border-radius:0}.cms .input-group-addon,.cms .input-group-btn{width:1%;white-space:nowrap;vertical-align:middle}.cms .input-group-addon{padding:6px 12px;font-size:14px;font-weight:400;line-height:1;color:#555;text-align:center;background-color:#eee;border:1px solid #ccc;border-radius:4px}.cms .cms-form .input-group-addon.form-control,.cms .input-group-addon.input-sm,.cms .input-group-sm>.input-group-addon,.cms .input-group-sm>.input-group-btn>.input-group-addon.btn,.cms-form .cms .input-group-addon.form-control{padding:5px 10px;font-size:12px;border-radius:3px}.cms .input-group-addon.input-lg,.cms .input-group-lg>.input-group-addon,.cms .input-group-lg>.input-group-btn>.input-group-addon.btn{padding:10px 16px;font-size:18px;border-radius:6px}.cms .input-group-addon input[type=radio],.cms .input-group-addon input[type=checkbox]{margin-top:0}.cms .input-group .form-control:first-child,.cms .input-group-addon:first-child,.cms .input-group-btn:first-child>.btn,.cms .input-group-btn:first-child>.btn-group>.btn,.cms .input-group-btn:first-child>.dropdown-toggle,.cms .input-group-btn:last-child>.btn-group:not(:last-child)>.btn,.cms .input-group-btn:last-child>.btn:not(:last-child):not(.dropdown-toggle){border-bottom-right-radius:0;border-top-right-radius:0}.cms .input-group-addon:first-child{border-right:0}.cms .input-group .form-control:last-child,.cms .input-group-addon:last-child,.cms .input-group-btn:first-child>.btn-group:not(:first-child)>.btn,.cms .input-group-btn:first-child>.btn:not(:first-child),.cms .input-group-btn:last-child>.btn,.cms .input-group-btn:last-child>.btn-group>.btn,.cms .input-group-btn:last-child>.dropdown-toggle{border-bottom-left-radius:0;border-top-left-radius:0}.cms .input-group-addon:last-child{border-left:0}.cms .input-group-btn{position:relative;font-size:0;white-space:nowrap}.cms .input-group-btn>.btn{position:relative}.cms .input-group-btn>.btn+.btn{margin-left:-1px}.cms .input-group-btn>.btn:active,.cms .input-group-btn>.btn:focus,.cms .input-group-btn>.btn:hover{z-index:2}.cms .input-group-btn:first-child>.btn,.cms .input-group-btn:first-child>.btn-group{margin-right:-1px}.cms .input-group-btn:last-child>.btn,.cms .input-group-btn:last-child>.btn-group{z-index:2;margin-left:-1px}.cms .nav{margin-bottom:0;padding-left:0;list-style:none}.cms .nav:after,.cms .nav:before{content:\" \";display:table}.cms .nav>li,.cms .nav>li>a{display:block;position:relative}.cms .nav:after{clear:both}.cms .nav>li>a{padding:10px 15px}.cms .nav>li>a:focus,.cms .nav>li>a:hover{text-decoration:none;background-color:#eee}.cms .nav>li.disabled>a{color:#777}.cms .nav>li.disabled>a:focus,.cms .nav>li.disabled>a:hover{color:#777;text-decoration:none;background-color:transparent;cursor:not-allowed}.cms .nav .open>a,.cms .nav .open>a:focus,.cms .nav .open>a:hover{background-color:#eee;border-color:#337ab7}.cms .nav .nav-divider{height:1px;margin:9px 0;overflow:hidden;background-color:#e5e5e5}.cms .nav>li>a>img{max-width:none}.cms .nav-tabs{border-bottom:1px solid #ddd}.cms .nav-tabs>li{float:left;margin-bottom:-1px}.cms .nav-tabs>li>a{margin-right:2px;line-height:1.42857;border:1px solid transparent;border-radius:4px 4px 0 0}.cms .nav-tabs>li>a:hover{border-color:#eee #eee #ddd}.cms .nav-tabs>li.active>a,.cms .nav-tabs>li.active>a:focus,.cms .nav-tabs>li.active>a:hover{color:#555;background-color:#fff;border:1px solid #ddd;border-bottom-color:transparent;cursor:default}.cms .nav-pills>li{float:left}.cms .nav-justified>li,.cms .nav-stacked>li,.cms .nav-tabs.nav-justified>li{float:none}.cms .nav-pills>li>a{border-radius:4px}.cms .nav-pills>li+li{margin-left:2px}.cms .nav-pills>li.active>a,.cms .nav-pills>li.active>a:focus,.cms .nav-pills>li.active>a:hover{color:#fff;background-color:#337ab7}.cms .nav-stacked>li+li{margin-top:2px;margin-left:0}.cms .nav-justified,.cms .nav-tabs.nav-justified{width:100%}.cms .nav-justified>li>a,.cms .nav-tabs.nav-justified>li>a{text-align:center;margin-bottom:5px}.cms .nav-justified>.dropdown .dropdown-menu{top:auto;left:auto}.cms .nav-tabs-justified,.cms .nav-tabs.nav-justified{border-bottom:0}.cms .nav-tabs-justified>li>a,.cms .nav-tabs.nav-justified>li>a{margin-right:0;border-radius:4px}.cms .nav-tabs-justified>.active>a,.cms .nav-tabs-justified>.active>a:focus,.cms .nav-tabs-justified>.active>a:hover,.cms .nav-tabs.nav-justified>.active>a,.cms .nav-tabs.nav-justified>.active>a:focus,.cms .nav-tabs.nav-justified>.active>a:hover{border:1px solid #ddd}@media (min-width:768px){.cms .nav-justified>li,.cms .nav-tabs.nav-justified>li{display:table-cell;width:1%}.cms .nav-justified>li>a,.cms .nav-tabs.nav-justified>li>a{margin-bottom:0}.cms .nav-tabs-justified>li>a,.cms .nav-tabs.nav-justified>li>a{border-bottom:1px solid #ddd;border-radius:4px 4px 0 0}.cms .nav-tabs-justified>.active>a,.cms .nav-tabs-justified>.active>a:focus,.cms .nav-tabs-justified>.active>a:hover,.cms .nav-tabs.nav-justified>.active>a,.cms .nav-tabs.nav-justified>.active>a:focus,.cms .nav-tabs.nav-justified>.active>a:hover{border-bottom-color:#fff}}.cms .tab-content>.tab-pane{display:none}.cms .tab-content>.active{display:block}.cms .navbar-collapse:after,.cms .navbar-collapse:before,.cms .navbar-header:after,.cms .navbar-header:before,.cms .navbar:after,.cms .navbar:before{display:table;content:\" \"}.cms .nav-tabs .dropdown-menu{margin-top:-1px;border-top-right-radius:0;border-top-left-radius:0}.cms .navbar{position:relative;min-height:50px;margin-bottom:20px;border:1px solid transparent}.cms .navbar-collapse{overflow-x:visible;padding-right:15px;padding-left:15px;border-top:1px solid transparent;box-shadow:inset 0 1px 0 rgba(255,255,255,.1);-webkit-overflow-scrolling:touch}.cms .navbar-collapse.in{overflow-y:auto}.cms .navbar-fixed-bottom .navbar-collapse,.cms .navbar-fixed-top .navbar-collapse{max-height:340px}@media (max-device-width:480px) and (orientation:landscape){.cms .navbar-fixed-bottom .navbar-collapse,.cms .navbar-fixed-top .navbar-collapse{max-height:200px}}.cms .container-fluid>.navbar-collapse,.cms .container-fluid>.navbar-header,.cms .container>.navbar-collapse,.cms .container>.navbar-header{margin-right:-15px;margin-left:-15px}@media (min-width:768px){.cms .navbar{border-radius:4px}.cms .navbar-header{float:left}.cms .navbar-collapse{width:auto;border-top:0;box-shadow:none}.cms .navbar-collapse.collapse{display:block!important;height:auto!important;padding-bottom:0;overflow:visible!important}.cms .navbar-collapse.in{overflow-y:visible}.navbar-fixed-bottom .cms .navbar-collapse,.navbar-fixed-top .cms .navbar-collapse,.navbar-static-top .cms .navbar-collapse{padding-left:0;padding-right:0}.cms .container-fluid>.navbar-collapse,.cms .container-fluid>.navbar-header,.cms .container>.navbar-collapse,.cms .container>.navbar-header{margin-right:0;margin-left:0}.cms .navbar-static-top{border-radius:0}}.cms .navbar-static-top{z-index:1000;border-width:0 0 1px}.cms .navbar-fixed-bottom,.cms .navbar-fixed-top{position:fixed;right:0;left:0;z-index:1030}.cms .navbar-fixed-top{top:0;border-width:0 0 1px}.cms .navbar-fixed-bottom{bottom:0;margin-bottom:0;border-width:1px 0 0}.cms .navbar-brand{float:left;padding:15px;font-size:18px;line-height:20px;height:50px}.cms .navbar-brand:focus,.cms .navbar-brand:hover{text-decoration:none}.cms .navbar-brand>img{display:block}@media (min-width:768px){.cms .navbar-fixed-bottom,.cms .navbar-fixed-top{border-radius:0}.navbar>.container .cms .navbar-brand,.navbar>.container-fluid .cms .navbar-brand{margin-left:-15px}}.cms .navbar-toggle{position:relative;float:right;margin-right:15px;padding:9px 10px;margin-top:8px;margin-bottom:8px;background-color:transparent;border:1px solid transparent;border-radius:4px}.cms .navbar-toggle:focus{outline:0}.cms .navbar-toggle .icon-bar{display:block;width:22px;height:2px;border-radius:1px}.cms .navbar-toggle .icon-bar+.icon-bar{margin-top:4px}.cms .navbar-nav{margin:7.5px -15px}.cms .navbar-nav>li>a{padding-top:10px;padding-bottom:10px;line-height:20px}@media (max-width:767px){.cms .navbar-nav .open .dropdown-menu{position:static;float:none;width:auto;margin-top:0;background-color:transparent;border:0;box-shadow:none}.cms .navbar-nav .open .dropdown-menu .dropdown-header,.cms .navbar-nav .open .dropdown-menu>li>a{padding:5px 15px 5px 25px}.cms .navbar-nav .open .dropdown-menu>li>a{line-height:20px}.cms .navbar-nav .open .dropdown-menu>li>a:focus,.cms .navbar-nav .open .dropdown-menu>li>a:hover{background-image:none}}.cms .progress-bar-striped,.cms .progress-striped .progress-bar,.progress-striped .cms .progress-bar-success{background-image:-webkit-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:-o-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)}@media (min-width:768px){.cms .navbar-toggle{display:none}.cms .navbar-nav{float:left;margin:0}.cms .navbar-nav>li{float:left}.cms .navbar-nav>li>a{padding-top:15px;padding-bottom:15px}}.cms .navbar-form{padding:10px 15px;border-top:1px solid transparent;border-bottom:1px solid transparent;-webkit-box-shadow:inset 0 1px 0 rgba(255,255,255,.1),0 1px 0 rgba(255,255,255,.1);box-shadow:inset 0 1px 0 rgba(255,255,255,.1),0 1px 0 rgba(255,255,255,.1);margin:8px -15px}@media (min-width:768px){.cms .navbar-form .form-control-static,.cms .navbar-form .form-group{display:inline-block}.cms .navbar-form .control-label,.cms .navbar-form .form-group{margin-bottom:0;vertical-align:middle}.cms .navbar-form .form-control{display:inline-block;width:auto;vertical-align:middle}.cms .navbar-form .input-group{display:inline-table;vertical-align:middle}.cms .navbar-form .input-group .form-control,.cms .navbar-form .input-group .input-group-addon,.cms .navbar-form .input-group .input-group-btn{width:auto}.cms .navbar-form .input-group>.form-control{width:100%}.cms .navbar-form .checkbox,.cms .navbar-form .radio{display:inline-block;margin-top:0;margin-bottom:0;vertical-align:middle}.cms .navbar-form .checkbox label,.cms .navbar-form .radio label{padding-left:0}.cms .navbar-form .checkbox input[type=checkbox],.cms .navbar-form .radio input[type=radio]{position:relative;margin-left:0}.cms .navbar-form .has-feedback .form-control-feedback{top:0}.cms .navbar-form{width:auto;border:0;margin-left:0;margin-right:0;padding-top:0;padding-bottom:0;-webkit-box-shadow:none;box-shadow:none}}.cms .breadcrumb>li,.cms .pagination{display:inline-block}.btn .cms .badge,.btn .cms .label{top:-1px;position:relative}@media (max-width:767px){.cms .navbar-form .form-group{margin-bottom:5px}.cms .navbar-form .form-group:last-child{margin-bottom:0}}.cms .navbar-nav>li>.dropdown-menu{margin-top:0;border-top-right-radius:0;border-top-left-radius:0}.cms .navbar-fixed-bottom .navbar-nav>li>.dropdown-menu{margin-bottom:0;border-radius:4px 4px 0 0}.cms .navbar-btn{margin-top:8px;margin-bottom:8px}.cms .btn-group-sm>.navbar-btn.btn,.cms .navbar-btn.btn-sm{margin-top:10px;margin-bottom:10px}.cms .btn-group-xs>.navbar-btn.btn,.cms .navbar-btn.btn-xs{margin-top:14px;margin-bottom:14px}.cms .navbar-text{margin-top:15px;margin-bottom:15px}@media (min-width:768px){.cms .navbar-text{float:left;margin-left:15px;margin-right:15px}.cms .navbar-left{float:left!important}.cms .navbar-right{float:right!important;margin-right:-15px}.cms .navbar-right~.navbar-right{margin-right:0}}.cms .navbar-default{background-color:#f8f8f8;border-color:#e7e7e7}.cms .navbar-default .navbar-brand{color:#777}.cms .navbar-default .navbar-brand:focus,.cms .navbar-default .navbar-brand:hover{color:#5e5e5e;background-color:transparent}.cms .navbar-default .navbar-nav>li>a,.cms .navbar-default .navbar-text{color:#777}.cms .navbar-default .navbar-nav>li>a:focus,.cms .navbar-default .navbar-nav>li>a:hover{color:#333;background-color:transparent}.cms .navbar-default .navbar-nav>.active>a,.cms .navbar-default .navbar-nav>.active>a:focus,.cms .navbar-default .navbar-nav>.active>a:hover{color:#555;background-color:#e7e7e7}.cms .navbar-default .navbar-nav>.disabled>a,.cms .navbar-default .navbar-nav>.disabled>a:focus,.cms .navbar-default .navbar-nav>.disabled>a:hover{color:#ccc;background-color:transparent}.cms .navbar-default .navbar-toggle{border-color:#ddd}.cms .navbar-default .navbar-toggle:focus,.cms .navbar-default .navbar-toggle:hover{background-color:#ddd}.cms .navbar-default .navbar-toggle .icon-bar{background-color:#888}.cms .navbar-default .navbar-collapse,.cms .navbar-default .navbar-form{border-color:#e7e7e7}.cms .navbar-default .navbar-nav>.open>a,.cms .navbar-default .navbar-nav>.open>a:focus,.cms .navbar-default .navbar-nav>.open>a:hover{background-color:#e7e7e7;color:#555}@media (max-width:767px){.cms .navbar-default .navbar-nav .open .dropdown-menu>li>a{color:#777}.cms .navbar-default .navbar-nav .open .dropdown-menu>li>a:focus,.cms .navbar-default .navbar-nav .open .dropdown-menu>li>a:hover{color:#333;background-color:transparent}.cms .navbar-default .navbar-nav .open .dropdown-menu>.active>a,.cms .navbar-default .navbar-nav .open .dropdown-menu>.active>a:focus,.cms .navbar-default .navbar-nav .open .dropdown-menu>.active>a:hover{color:#555;background-color:#e7e7e7}.cms .navbar-default .navbar-nav .open .dropdown-menu>.disabled>a,.cms .navbar-default .navbar-nav .open .dropdown-menu>.disabled>a:focus,.cms .navbar-default .navbar-nav .open .dropdown-menu>.disabled>a:hover{color:#ccc;background-color:transparent}}.cms .navbar-default .navbar-link{color:#777}.cms .navbar-default .navbar-link:hover{color:#333}.cms .navbar-default .btn-link{color:#777}.cms .navbar-default .btn-link:focus,.cms .navbar-default .btn-link:hover{color:#333}.cms .navbar-default .btn-link[disabled]:focus,.cms .navbar-default .btn-link[disabled]:hover,fieldset[disabled] .cms .navbar-default .btn-link:focus,fieldset[disabled] .cms .navbar-default .btn-link:hover{color:#ccc}.cms .navbar-inverse{background-color:#222;border-color:#090909}.cms .navbar-inverse .navbar-brand{color:#9d9d9d}.cms .navbar-inverse .navbar-brand:focus,.cms .navbar-inverse .navbar-brand:hover{color:#fff;background-color:transparent}.cms .navbar-inverse .navbar-nav>li>a,.cms .navbar-inverse .navbar-text{color:#9d9d9d}.cms .navbar-inverse .navbar-nav>li>a:focus,.cms .navbar-inverse .navbar-nav>li>a:hover{color:#fff;background-color:transparent}.cms .navbar-inverse .navbar-nav>.active>a,.cms .navbar-inverse .navbar-nav>.active>a:focus,.cms .navbar-inverse .navbar-nav>.active>a:hover{color:#fff;background-color:#090909}.cms .navbar-inverse .navbar-nav>.disabled>a,.cms .navbar-inverse .navbar-nav>.disabled>a:focus,.cms .navbar-inverse .navbar-nav>.disabled>a:hover{color:#444;background-color:transparent}.cms .navbar-inverse .navbar-toggle{border-color:#333}.cms .navbar-inverse .navbar-toggle:focus,.cms .navbar-inverse .navbar-toggle:hover{background-color:#333}.cms .navbar-inverse .navbar-toggle .icon-bar{background-color:#fff}.cms .navbar-inverse .navbar-collapse,.cms .navbar-inverse .navbar-form{border-color:#101010}.cms .navbar-inverse .navbar-nav>.open>a,.cms .navbar-inverse .navbar-nav>.open>a:focus,.cms .navbar-inverse .navbar-nav>.open>a:hover{background-color:#090909;color:#fff}@media (max-width:767px){.cms .navbar-inverse .navbar-nav .open .dropdown-menu>.dropdown-header{border-color:#090909}.cms .navbar-inverse .navbar-nav .open .dropdown-menu .divider{background-color:#090909}.cms .navbar-inverse .navbar-nav .open .dropdown-menu>li>a{color:#9d9d9d}.cms .navbar-inverse .navbar-nav .open .dropdown-menu>li>a:focus,.cms .navbar-inverse .navbar-nav .open .dropdown-menu>li>a:hover{color:#fff;background-color:transparent}.cms .navbar-inverse .navbar-nav .open .dropdown-menu>.active>a,.cms .navbar-inverse .navbar-nav .open .dropdown-menu>.active>a:focus,.cms .navbar-inverse .navbar-nav .open .dropdown-menu>.active>a:hover{color:#fff;background-color:#090909}.cms .navbar-inverse .navbar-nav .open .dropdown-menu>.disabled>a,.cms .navbar-inverse .navbar-nav .open .dropdown-menu>.disabled>a:focus,.cms .navbar-inverse .navbar-nav .open .dropdown-menu>.disabled>a:hover{color:#444;background-color:transparent}}.cms .navbar-inverse .navbar-link{color:#9d9d9d}.cms .navbar-inverse .navbar-link:hover{color:#fff}.cms .navbar-inverse .btn-link{color:#9d9d9d}.cms .navbar-inverse .btn-link:focus,.cms .navbar-inverse .btn-link:hover{color:#fff}.cms .navbar-inverse .btn-link[disabled]:focus,.cms .navbar-inverse .btn-link[disabled]:hover,fieldset[disabled] .cms .navbar-inverse .btn-link:focus,fieldset[disabled] .cms .navbar-inverse .btn-link:hover{color:#444}.cms .breadcrumb{padding:8px 15px;margin-bottom:20px;list-style:none;background-color:#f5f5f5;border-radius:4px}.cms .breadcrumb>li+li:before{content:\"/\\A0\";padding:0 5px;color:#ccc}.cms .breadcrumb>.active{color:#777}.cms .pagination{padding-left:0;margin:20px 0;border-radius:4px}.cms .pagination>li{display:inline}.cms .pagination>li>a,.cms .pagination>li>span{position:relative;float:left;padding:6px 12px;line-height:1.42857;text-decoration:none;color:#337ab7;background-color:#fff;border:1px solid #ddd;margin-left:-1px}.cms .pager .next>a,.cms .pager .next>span,.list-group-item>.cms .badge{float:right}.cms .pagination>li:first-child>a,.cms .pagination>li:first-child>span{margin-left:0;border-bottom-left-radius:4px;border-top-left-radius:4px}.cms .pagination>li:last-child>a,.cms .pagination>li:last-child>span{border-bottom-right-radius:4px;border-top-right-radius:4px}.cms .pagination>li>a:focus,.cms .pagination>li>a:hover,.cms .pagination>li>span:focus,.cms .pagination>li>span:hover{z-index:2;color:#23527c;background-color:#eee;border-color:#ddd}.cms .pagination>.active>a,.cms .pagination>.active>a:focus,.cms .pagination>.active>a:hover,.cms .pagination>.active>span,.cms .pagination>.active>span:focus,.cms .pagination>.active>span:hover{z-index:3;color:#fff;background-color:#337ab7;border-color:#337ab7;cursor:default}.cms .pagination>.disabled>a,.cms .pagination>.disabled>a:focus,.cms .pagination>.disabled>a:hover,.cms .pagination>.disabled>span,.cms .pagination>.disabled>span:focus,.cms .pagination>.disabled>span:hover{color:#777;background-color:#fff;border-color:#ddd;cursor:not-allowed}.cms .pagination-lg>li>a,.cms .pagination-lg>li>span{padding:10px 16px;font-size:18px;line-height:1.33333}.cms .pagination-lg>li:first-child>a,.cms .pagination-lg>li:first-child>span{border-bottom-left-radius:6px;border-top-left-radius:6px}.cms .pagination-lg>li:last-child>a,.cms .pagination-lg>li:last-child>span{border-bottom-right-radius:6px;border-top-right-radius:6px}.cms .pagination-sm>li>a,.cms .pagination-sm>li>span{padding:5px 10px;font-size:12px;line-height:1.5}.cms .badge,.cms .label{font-weight:700;line-height:1;white-space:nowrap;text-align:center}.cms .pagination-sm>li:first-child>a,.cms .pagination-sm>li:first-child>span{border-bottom-left-radius:3px;border-top-left-radius:3px}.cms .pagination-sm>li:last-child>a,.cms .pagination-sm>li:last-child>span{border-bottom-right-radius:3px;border-top-right-radius:3px}.cms .pager{padding-left:0;margin:20px 0;list-style:none;text-align:center}.cms .pager:after,.cms .pager:before{content:\" \";display:table}.cms .pager li{display:inline}.cms .pager li>a,.cms .pager li>span{display:inline-block;padding:5px 14px;background-color:#fff;border:1px solid #ddd;border-radius:15px}.cms .pager li>a:focus,.cms .pager li>a:hover{text-decoration:none;background-color:#eee}.cms .pager .previous>a,.cms .pager .previous>span{float:left}.cms .pager .disabled>a,.cms .pager .disabled>a:focus,.cms .pager .disabled>a:hover,.cms .pager .disabled>span{color:#777;background-color:#fff;cursor:not-allowed}.cms .label{display:inline;padding:.2em .6em .3em;font-size:75%;color:#fff;vertical-align:baseline;border-radius:.25em}.cms .label:empty{display:none}.cms a.label:focus,.cms a.label:hover{color:#fff;text-decoration:none;cursor:pointer}.cms .label-default{background-color:#777}.cms .label-default[href]:focus,.cms .label-default[href]:hover{background-color:#5e5e5e}.cms .label-primary{background-color:#337ab7}.cms .label-primary[href]:focus,.cms .label-primary[href]:hover{background-color:#286090}.cms .label-success{background-color:#5cb85c}.cms .label-success[href]:focus,.cms .label-success[href]:hover{background-color:#449d44}.cms .label-info{background-color:#5bc0de}.cms .label-info[href]:focus,.cms .label-info[href]:hover{background-color:#31b0d5}.cms .label-warning{background-color:#f0ad4e}.cms .label-warning[href]:focus,.cms .label-warning[href]:hover{background-color:#ec971f}.cms .label-danger{background-color:#d9534f}.cms .label-danger[href]:focus,.cms .label-danger[href]:hover{background-color:#c9302c}.cms .badge{display:inline-block;min-width:10px;padding:3px 7px;font-size:12px;color:#fff;vertical-align:middle;background-color:#777;border-radius:10px}.cms .badge:empty{display:none}.btn-group-xs>.btn .cms .badge,.btn-xs .cms .badge,.cms .btn-group-xs>.btn .cms .badge{top:0;padding:1px 5px}.list-group-item.active>.cms .badge,.nav-pills>.active>a>.cms .badge{color:#337ab7;background-color:#fff}.list-group-item>.cms .badge+.cms .badge{margin-right:5px}.nav-pills>li>a>.cms .badge{margin-left:3px}.cms a.badge:focus,.cms a.badge:hover{color:#fff;text-decoration:none;cursor:pointer}.cms .jumbotron{padding-top:30px;padding-bottom:30px;margin-bottom:30px;color:inherit;background-color:#eee}.cms .jumbotron .h1,.cms .jumbotron h1{color:inherit}.cms .jumbotron p{margin-bottom:15px;font-size:21px;font-weight:200}.cms .alert .alert-link,.cms .close{font-weight:700}.cms .jumbotron>hr{border-top-color:#d5d5d5}.container .cms .jumbotron,.container-fluid .cms .jumbotron{border-radius:6px;padding-left:15px;padding-right:15px}.cms .jumbotron .container{max-width:100%}@media screen and (min-width:768px){.cms .jumbotron{padding-top:48px;padding-bottom:48px}.container .cms .jumbotron,.container-fluid .cms .jumbotron{padding-left:60px;padding-right:60px}.cms .jumbotron .h1,.cms .jumbotron h1{font-size:63px}}.cms .thumbnail{display:block;padding:4px;margin-bottom:20px;line-height:1.42857;background-color:#fff;border:1px solid #ddd;border-radius:4px;-webkit-transition:border .2s ease-in-out;-o-transition:border .2s ease-in-out;transition:border .2s ease-in-out}.cms .thumbnail a>img,.cms .thumbnail>img{display:block;max-width:100%;height:auto;margin-left:auto;margin-right:auto}.cms .thumbnail .caption{padding:9px;color:#333}.cms a.thumbnail.active,.cms a.thumbnail:focus,.cms a.thumbnail:hover{border-color:#337ab7}.cms .alert{padding:15px;margin-bottom:20px;border:1px solid transparent;border-radius:4px}.cms .alert h4{margin-top:0;color:inherit}.cms .alert>p,.cms .alert>ul{margin-bottom:0}.cms .alert>p+p{margin-top:5px}.cms .alert-dismissable,.cms .alert-dismissible{padding-right:35px}.cms .alert-dismissable .close,.cms .alert-dismissible .close{position:relative;top:-2px;right:-21px;color:inherit}.cms .alert-success{background-color:#dff0d8;border-color:#d6e9c6;color:#3c763d}.cms .alert-success hr{border-top-color:#c9e2b3}.cms .alert-success .alert-link{color:#2b542c}.cms .alert-info{background-color:#d9edf7;border-color:#bce8f1;color:#31708f}.cms .alert-info hr{border-top-color:#a6e1ec}.cms .alert-info .alert-link{color:#245269}.cms .alert-warning{background-color:#fcf8e3;border-color:#faebcc;color:#8a6d3b}.cms .alert-warning hr{border-top-color:#f7e1b5}.cms .alert-warning .alert-link{color:#66512c}.cms .alert-danger{background-color:#f2dede;border-color:#ebccd1;color:#a94442}.cms .alert-danger hr{border-top-color:#e4b9c0}.cms .alert-danger .alert-link{color:#843534}@-webkit-keyframes progress-bar-stripes{from{background-position:40px 0}to{background-position:0 0}}@keyframes progress-bar-stripes{from{background-position:40px 0}to{background-position:0 0}}.cms .progress{overflow:hidden;height:20px;margin-bottom:20px;background-color:#f5f5f5;border-radius:4px;-webkit-box-shadow:inset 0 1px 2px rgba(0,0,0,.1);box-shadow:inset 0 1px 2px rgba(0,0,0,.1)}.cms .progress-bar{float:left;width:0;height:100%;font-size:12px;line-height:20px;color:#fff;text-align:center;background-color:#337ab7;-webkit-box-shadow:inset 0 -1px 0 rgba(0,0,0,.15);box-shadow:inset 0 -1px 0 rgba(0,0,0,.15);-webkit-transition:width .6s ease;-o-transition:width .6s ease;transition:width .6s ease}.cms .progress-bar-striped,.cms .progress-striped .progress-bar{background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-size:40px 40px}.cms .progress-bar.active,.cms .progress.active .progress-bar{-webkit-animation:progress-bar-stripes 2s linear infinite;-o-animation:progress-bar-stripes 2s linear infinite;animation:progress-bar-stripes 2s linear infinite}.cms .progress-bar-success{background-color:#5cb85c}.progress-striped .cms .progress-bar-success{background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)}.progress-striped .cms .progress-bar-info,.progress-striped .cms .progress-bar-warning{background-image:-webkit-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:-o-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)}.cms .progress-bar-info{background-color:#5bc0de}.progress-striped .cms .progress-bar-info{background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)}.cms .progress-bar-warning{background-color:#f0ad4e}.progress-striped .cms .progress-bar-warning{background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)}.cms .progress-bar-danger{background-color:#d9534f}.progress-striped .cms .progress-bar-danger{background-image:-webkit-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:-o-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)}.cms .media{margin-top:15px}.cms .media:first-child{margin-top:0}.cms .media,.cms .media-body{zoom:1;overflow:hidden}.cms .media-body{width:10000px}.cms .media-object{display:block}.cms .media-object.img-thumbnail{max-width:none}.cms .media-right,.cms .media>.pull-right{padding-left:10px}.cms .media-left,.cms .media>.pull-left{padding-right:10px}.cms .media-body,.cms .media-left,.cms .media-right{display:table-cell;vertical-align:top}.cms .media-middle{vertical-align:middle}.cms .media-bottom{vertical-align:bottom}.cms .media-heading{margin-top:0;margin-bottom:5px}.cms .media-list{padding-left:0;list-style:none}.cms .list-group{margin-bottom:20px;padding-left:0}.cms .list-group-item{position:relative;display:block;padding:10px 15px;margin-bottom:-1px;background-color:#fff;border:1px solid #ddd}.cms .list-group-item:first-child{border-top-right-radius:4px;border-top-left-radius:4px}.cms .list-group-item:last-child{margin-bottom:0;border-bottom-right-radius:4px;border-bottom-left-radius:4px}.cms a.list-group-item,.cms button.list-group-item{color:#555}.cms a.list-group-item .list-group-item-heading,.cms button.list-group-item .list-group-item-heading{color:#333}.cms a.list-group-item:focus,.cms a.list-group-item:hover,.cms button.list-group-item:focus,.cms button.list-group-item:hover{text-decoration:none;color:#555;background-color:#f5f5f5}.cms button.list-group-item{width:100%;text-align:left}.cms .list-group-item.disabled,.cms .list-group-item.disabled:focus,.cms .list-group-item.disabled:hover{background-color:#eee;color:#777;cursor:not-allowed}.cms .list-group-item.disabled .list-group-item-heading,.cms .list-group-item.disabled:focus .list-group-item-heading,.cms .list-group-item.disabled:hover .list-group-item-heading{color:inherit}.cms .list-group-item.disabled .list-group-item-text,.cms .list-group-item.disabled:focus .list-group-item-text,.cms .list-group-item.disabled:hover .list-group-item-text{color:#777}.cms .list-group-item.active,.cms .list-group-item.active:focus,.cms .list-group-item.active:hover{z-index:2;color:#fff;background-color:#337ab7;border-color:#337ab7}.cms .list-group-item.active .list-group-item-heading,.cms .list-group-item.active .list-group-item-heading>.small,.cms .list-group-item.active .list-group-item-heading>small,.cms .list-group-item.active:focus .list-group-item-heading,.cms .list-group-item.active:focus .list-group-item-heading>.small,.cms .list-group-item.active:focus .list-group-item-heading>small,.cms .list-group-item.active:hover .list-group-item-heading,.cms .list-group-item.active:hover .list-group-item-heading>.small,.cms .list-group-item.active:hover .list-group-item-heading>small{color:inherit}.cms .list-group-item.active .list-group-item-text,.cms .list-group-item.active:focus .list-group-item-text,.cms .list-group-item.active:hover .list-group-item-text{color:#c7ddef}.cms .list-group-item-success{color:#3c763d;background-color:#dff0d8}.cms a.list-group-item-success,.cms button.list-group-item-success{color:#3c763d}.cms a.list-group-item-success .list-group-item-heading,.cms button.list-group-item-success .list-group-item-heading{color:inherit}.cms a.list-group-item-success:focus,.cms a.list-group-item-success:hover,.cms button.list-group-item-success:focus,.cms button.list-group-item-success:hover{color:#3c763d;background-color:#d0e9c6}.cms a.list-group-item-success.active,.cms a.list-group-item-success.active:focus,.cms a.list-group-item-success.active:hover,.cms button.list-group-item-success.active,.cms button.list-group-item-success.active:focus,.cms button.list-group-item-success.active:hover{color:#fff;background-color:#3c763d;border-color:#3c763d}.cms .list-group-item-info{color:#31708f;background-color:#d9edf7}.cms a.list-group-item-info,.cms button.list-group-item-info{color:#31708f}.cms a.list-group-item-info .list-group-item-heading,.cms button.list-group-item-info .list-group-item-heading{color:inherit}.cms a.list-group-item-info:focus,.cms a.list-group-item-info:hover,.cms button.list-group-item-info:focus,.cms button.list-group-item-info:hover{color:#31708f;background-color:#c4e3f3}.cms a.list-group-item-info.active,.cms a.list-group-item-info.active:focus,.cms a.list-group-item-info.active:hover,.cms button.list-group-item-info.active,.cms button.list-group-item-info.active:focus,.cms button.list-group-item-info.active:hover{color:#fff;background-color:#31708f;border-color:#31708f}.cms .list-group-item-warning{color:#8a6d3b;background-color:#fcf8e3}.cms a.list-group-item-warning,.cms button.list-group-item-warning{color:#8a6d3b}.cms a.list-group-item-warning .list-group-item-heading,.cms button.list-group-item-warning .list-group-item-heading{color:inherit}.cms a.list-group-item-warning:focus,.cms a.list-group-item-warning:hover,.cms button.list-group-item-warning:focus,.cms button.list-group-item-warning:hover{color:#8a6d3b;background-color:#faf2cc}.cms a.list-group-item-warning.active,.cms a.list-group-item-warning.active:focus,.cms a.list-group-item-warning.active:hover,.cms button.list-group-item-warning.active,.cms button.list-group-item-warning.active:focus,.cms button.list-group-item-warning.active:hover{color:#fff;background-color:#8a6d3b;border-color:#8a6d3b}.cms .list-group-item-danger{color:#a94442;background-color:#f2dede}.cms a.list-group-item-danger,.cms button.list-group-item-danger{color:#a94442}.cms a.list-group-item-danger .list-group-item-heading,.cms button.list-group-item-danger .list-group-item-heading{color:inherit}.cms a.list-group-item-danger:focus,.cms a.list-group-item-danger:hover,.cms button.list-group-item-danger:focus,.cms button.list-group-item-danger:hover{color:#a94442;background-color:#ebcccc}.cms a.list-group-item-danger.active,.cms a.list-group-item-danger.active:focus,.cms a.list-group-item-danger.active:hover,.cms button.list-group-item-danger.active,.cms button.list-group-item-danger.active:focus,.cms button.list-group-item-danger.active:hover{color:#fff;background-color:#a94442;border-color:#a94442}.btn-white,.cms .panel-heading>.dropdown .dropdown-toggle,.cms .panel-title,.cms .panel-title>.small,.cms .panel-title>.small>a,.cms .panel-title>a,.cms .panel-title>small,.cms .panel-title>small>a{color:inherit}.cms .list-group-item-heading{margin-top:0;margin-bottom:5px}.cms .list-group-item-text{margin-bottom:0;line-height:1.3}.cms .panel{margin-bottom:20px;background-color:#fff;border:1px solid transparent;border-radius:4px;-webkit-box-shadow:0 1px 1px rgba(0,0,0,.05);box-shadow:0 1px 1px rgba(0,0,0,.05)}.cms .panel-title,.cms .panel>.list-group,.cms .panel>.panel-collapse>.list-group,.cms .panel>.panel-collapse>.table,.cms .panel>.table,.cms .panel>.table-responsive>.table{margin-bottom:0}.cms .panel-body{padding:15px}.cms .panel-body:after,.cms .panel-body:before{content:\" \";display:table}.cms .panel-heading{padding:10px 15px;border-bottom:1px solid transparent;border-top-right-radius:3px;border-top-left-radius:3px}.cms .panel-title{margin-top:0;font-size:16px}.cms .panel-footer{padding:10px 15px;background-color:#f5f5f5;border-top:1px solid #ddd;border-bottom-right-radius:3px;border-bottom-left-radius:3px}.cms .panel>.list-group .list-group-item,.cms .panel>.panel-collapse>.list-group .list-group-item{border-width:1px 0;border-radius:0}.cms .panel-group .panel-heading,.cms .panel>.table-bordered>tbody>tr:first-child>td,.cms .panel>.table-bordered>tbody>tr:first-child>th,.cms .panel>.table-bordered>thead>tr:first-child>td,.cms .panel>.table-bordered>thead>tr:first-child>th,.cms .panel>.table-responsive>.table-bordered>tbody>tr:first-child>td,.cms .panel>.table-responsive>.table-bordered>tbody>tr:first-child>th,.cms .panel>.table-responsive>.table-bordered>thead>tr:first-child>td,.cms .panel>.table-responsive>.table-bordered>thead>tr:first-child>th{border-bottom:0}.cms .panel>.list-group:first-child .list-group-item:first-child,.cms .panel>.panel-collapse>.list-group:first-child .list-group-item:first-child{border-top:0;border-top-right-radius:3px;border-top-left-radius:3px}.cms .panel>.list-group:last-child .list-group-item:last-child,.cms .panel>.panel-collapse>.list-group:last-child .list-group-item:last-child{border-bottom:0;border-bottom-right-radius:3px;border-bottom-left-radius:3px}.cms .panel>.panel-heading+.panel-collapse>.list-group .list-group-item:first-child{border-top-right-radius:0;border-top-left-radius:0}.cms .panel>.table-responsive:first-child>.table:first-child,.cms .panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child,.cms .panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child,.cms .panel>.table:first-child,.cms .panel>.table:first-child>tbody:first-child>tr:first-child,.cms .panel>.table:first-child>thead:first-child>tr:first-child{border-top-right-radius:3px;border-top-left-radius:3px}.cms .list-group+.panel-footer,.cms .panel-heading+.list-group .list-group-item:first-child{border-top-width:0}.cms .panel>.panel-collapse>.table caption,.cms .panel>.table caption,.cms .panel>.table-responsive>.table caption{padding-left:15px;padding-right:15px}.cms .panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child td:first-child,.cms .panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child th:first-child,.cms .panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child td:first-child,.cms .panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child th:first-child,.cms .panel>.table:first-child>tbody:first-child>tr:first-child td:first-child,.cms .panel>.table:first-child>tbody:first-child>tr:first-child th:first-child,.cms .panel>.table:first-child>thead:first-child>tr:first-child td:first-child,.cms .panel>.table:first-child>thead:first-child>tr:first-child th:first-child{border-top-left-radius:3px}.cms .panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child td:last-child,.cms .panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child th:last-child,.cms .panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child td:last-child,.cms .panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child th:last-child,.cms .panel>.table:first-child>tbody:first-child>tr:first-child td:last-child,.cms .panel>.table:first-child>tbody:first-child>tr:first-child th:last-child,.cms .panel>.table:first-child>thead:first-child>tr:first-child td:last-child,.cms .panel>.table:first-child>thead:first-child>tr:first-child th:last-child{border-top-right-radius:3px}.cms .panel>.table-responsive:last-child>.table:last-child,.cms .panel>.table:last-child{border-bottom-right-radius:3px;border-bottom-left-radius:3px}.cms .panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child,.cms .panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child,.cms .panel>.table:last-child>tbody:last-child>tr:last-child,.cms .panel>.table:last-child>tfoot:last-child>tr:last-child{border-bottom-left-radius:3px;border-bottom-right-radius:3px}.cms .panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child td:first-child,.cms .panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child th:first-child,.cms .panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child td:first-child,.cms .panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child th:first-child,.cms .panel>.table:last-child>tbody:last-child>tr:last-child td:first-child,.cms .panel>.table:last-child>tbody:last-child>tr:last-child th:first-child,.cms .panel>.table:last-child>tfoot:last-child>tr:last-child td:first-child,.cms .panel>.table:last-child>tfoot:last-child>tr:last-child th:first-child{border-bottom-left-radius:3px}.cms .panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child td:last-child,.cms .panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child th:last-child,.cms .panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child td:last-child,.cms .panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child th:last-child,.cms .panel>.table:last-child>tbody:last-child>tr:last-child td:last-child,.cms .panel>.table:last-child>tbody:last-child>tr:last-child th:last-child,.cms .panel>.table:last-child>tfoot:last-child>tr:last-child td:last-child,.cms .panel>.table:last-child>tfoot:last-child>tr:last-child th:last-child{border-bottom-right-radius:3px}.cms .panel>.panel-body+.table,.cms .panel>.panel-body+.table-responsive,.cms .panel>.table+.panel-body,.cms .panel>.table-responsive+.panel-body{border-top:1px solid #ddd}.cms .panel>.table>tbody:first-child>tr:first-child td,.cms .panel>.table>tbody:first-child>tr:first-child th{border-top:0}.cms .panel>.table-bordered,.cms .panel>.table-responsive>.table-bordered{border:0}.cms .panel>.table-bordered>tbody>tr>td:first-child,.cms .panel>.table-bordered>tbody>tr>th:first-child,.cms .panel>.table-bordered>tfoot>tr>td:first-child,.cms .panel>.table-bordered>tfoot>tr>th:first-child,.cms .panel>.table-bordered>thead>tr>td:first-child,.cms .panel>.table-bordered>thead>tr>th:first-child,.cms .panel>.table-responsive>.table-bordered>tbody>tr>td:first-child,.cms .panel>.table-responsive>.table-bordered>tbody>tr>th:first-child,.cms .panel>.table-responsive>.table-bordered>tfoot>tr>td:first-child,.cms .panel>.table-responsive>.table-bordered>tfoot>tr>th:first-child,.cms .panel>.table-responsive>.table-bordered>thead>tr>td:first-child,.cms .panel>.table-responsive>.table-bordered>thead>tr>th:first-child{border-left:0}.cms .panel>.table-bordered>tbody>tr>td:last-child,.cms .panel>.table-bordered>tbody>tr>th:last-child,.cms .panel>.table-bordered>tfoot>tr>td:last-child,.cms .panel>.table-bordered>tfoot>tr>th:last-child,.cms .panel>.table-bordered>thead>tr>td:last-child,.cms .panel>.table-bordered>thead>tr>th:last-child,.cms .panel>.table-responsive>.table-bordered>tbody>tr>td:last-child,.cms .panel>.table-responsive>.table-bordered>tbody>tr>th:last-child,.cms .panel>.table-responsive>.table-bordered>tfoot>tr>td:last-child,.cms .panel>.table-responsive>.table-bordered>tfoot>tr>th:last-child,.cms .panel>.table-responsive>.table-bordered>thead>tr>td:last-child,.cms .panel>.table-responsive>.table-bordered>thead>tr>th:last-child{border-right:0}.cms .panel>.table-bordered>tbody>tr:last-child>td,.cms .panel>.table-bordered>tbody>tr:last-child>th,.cms .panel>.table-bordered>tfoot>tr:last-child>td,.cms .panel>.table-bordered>tfoot>tr:last-child>th,.cms .panel>.table-responsive>.table-bordered>tbody>tr:last-child>td,.cms .panel>.table-responsive>.table-bordered>tbody>tr:last-child>th,.cms .panel>.table-responsive>.table-bordered>tfoot>tr:last-child>td,.cms .panel>.table-responsive>.table-bordered>tfoot>tr:last-child>th{border-bottom:0}.cms .panel>.table-responsive{border:0;margin-bottom:0}.cms .panel-group{margin-bottom:20px}.cms .panel-group .panel{margin-bottom:0;border-radius:4px}.cms .panel-group .panel+.panel{margin-top:5px}.cms .panel-group .panel-heading+.panel-collapse>.list-group,.cms .panel-group .panel-heading+.panel-collapse>.panel-body{border-top:1px solid #ddd}.cms .panel-group .panel-footer{border-top:0}.cms .panel-group .panel-footer+.panel-collapse .panel-body{border-bottom:1px solid #ddd}.cms .panel-default{border-color:#ddd}.cms .panel-default>.panel-heading{color:#333;background-color:#f5f5f5;border-color:#ddd}.cms .panel-default>.panel-heading+.panel-collapse>.panel-body{border-top-color:#ddd}.cms .panel-default>.panel-heading .badge{color:#f5f5f5;background-color:#333}.cms .panel-default>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#ddd}.cms .panel-primary{border-color:#337ab7}.cms .panel-primary>.panel-heading{color:#fff;background-color:#337ab7;border-color:#337ab7}.cms .panel-primary>.panel-heading+.panel-collapse>.panel-body{border-top-color:#337ab7}.cms .panel-primary>.panel-heading .badge{color:#337ab7;background-color:#fff}.cms .panel-primary>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#337ab7}.cms .panel-success{border-color:#d6e9c6}.cms .panel-success>.panel-heading{color:#3c763d;background-color:#dff0d8;border-color:#d6e9c6}.cms .panel-success>.panel-heading+.panel-collapse>.panel-body{border-top-color:#d6e9c6}.cms .panel-success>.panel-heading .badge{color:#dff0d8;background-color:#3c763d}.cms .panel-success>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#d6e9c6}.cms .panel-info{border-color:#bce8f1}.cms .panel-info>.panel-heading{color:#31708f;background-color:#d9edf7;border-color:#bce8f1}.cms .panel-info>.panel-heading+.panel-collapse>.panel-body{border-top-color:#bce8f1}.cms .panel-info>.panel-heading .badge{color:#d9edf7;background-color:#31708f}.cms .panel-info>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#bce8f1}.cms .panel-warning{border-color:#faebcc}.cms .panel-warning>.panel-heading{color:#8a6d3b;background-color:#fcf8e3;border-color:#faebcc}.cms .panel-warning>.panel-heading+.panel-collapse>.panel-body{border-top-color:#faebcc}.cms .panel-warning>.panel-heading .badge{color:#fcf8e3;background-color:#8a6d3b}.cms .panel-warning>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#faebcc}.cms .panel-danger{border-color:#ebccd1}.cms .panel-danger>.panel-heading{color:#a94442;background-color:#f2dede;border-color:#ebccd1}.cms .panel-danger>.panel-heading+.panel-collapse>.panel-body{border-top-color:#ebccd1}.cms .panel-danger>.panel-heading .badge{color:#f2dede;background-color:#a94442}.cms .panel-danger>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#ebccd1}.cms .embed-responsive{position:relative;display:block;height:0;padding:0;overflow:hidden}.cms .embed-responsive .embed-responsive-item,.cms .embed-responsive embed,.cms .embed-responsive iframe,.cms .embed-responsive object,.cms .embed-responsive video{position:absolute;top:0;left:0;bottom:0;height:100%;width:100%;border:0}.cms .embed-responsive-16by9{padding-bottom:56.25%}.cms .embed-responsive-4by3{padding-bottom:75%}.cms .well{min-height:20px;padding:19px;margin-bottom:20px;background-color:#f5f5f5;border:1px solid #e3e3e3;border-radius:4px;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.05);box-shadow:inset 0 1px 1px rgba(0,0,0,.05)}.cms .well blockquote{border-color:#ddd;border-color:rgba(0,0,0,.15)}.cms .well-lg{padding:24px;border-radius:6px}.cms .well-sm{padding:9px;border-radius:3px}.cms .close{float:right;font-size:21px;line-height:1;color:#000;text-shadow:0 1px 0 #fff;opacity:.2;filter:alpha(opacity=20)}.cms .popover,.cms .tooltip{font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif;font-style:normal;font-weight:400;letter-spacing:normal;line-break:auto;line-height:1.42857;text-shadow:none;text-transform:none;white-space:normal;word-break:normal;word-spacing:normal;word-wrap:normal;text-decoration:none}.cms .close:focus,.cms .close:hover{color:#000;text-decoration:none;cursor:pointer;opacity:.5;filter:alpha(opacity=50)}.cms button.close{padding:0;cursor:pointer;background:0 0;border:0;-webkit-appearance:none}.cms .modal-open{overflow:hidden}.cms .modal{display:none;overflow:hidden;position:fixed;top:0;right:0;bottom:0;left:0;z-index:1050;-webkit-overflow-scrolling:touch;outline:0}.cms .modal-footer:after,.cms .modal-footer:before,.cms .modal-header:after,.cms .modal-header:before{content:\" \";display:table}.cms .modal.fade .modal-dialog{-webkit-transform:translate(0,-25%);-ms-transform:translate(0,-25%);-o-transform:translate(0,-25%);transform:translate(0,-25%);-webkit-transition:-webkit-transform .3s ease-out;-moz-transition:-moz-transform .3s ease-out;-o-transition:-o-transform .3s ease-out;transition:transform .3s ease-out}.cms .modal.in .modal-dialog{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);-o-transform:translate(0,0);transform:translate(0,0)}.cms .modal-open .modal{overflow-x:hidden;overflow-y:auto}.cms .modal-dialog{position:relative;width:auto;margin:10px}.cms .modal-content{position:relative;background-color:#fff;border:1px solid #999;border:1px solid rgba(0,0,0,.2);border-radius:6px;-webkit-box-shadow:0 3px 9px rgba(0,0,0,.5);box-shadow:0 3px 9px rgba(0,0,0,.5);background-clip:padding-box;outline:0}.cms .modal-backdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1040;background-color:#000}.cms .modal-backdrop.fade{opacity:0;filter:alpha(opacity=0)}.cms .carousel-control,.cms .modal-backdrop.in{opacity:.5;filter:alpha(opacity=50)}.cms .modal-header{padding:15px;border-bottom:1px solid #e5e5e5}.cms .modal-header .close{margin-top:-2px}.cms .modal-title{margin:0;line-height:1.42857}.cms .modal-body{position:relative;padding:15px}.cms .modal-footer{padding:15px;text-align:right;border-top:1px solid #e5e5e5}.cms .modal-footer .btn+.btn{margin-left:5px;margin-bottom:0}.cms .modal-footer .btn-group .btn+.btn{margin-left:-1px}.cms .modal-footer .btn-block+.btn-block{margin-left:0}.cms .modal-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}@media (min-width:768px){.cms .modal-dialog{width:600px;margin:30px auto}.cms .modal-content{-webkit-box-shadow:0 5px 15px rgba(0,0,0,.5);box-shadow:0 5px 15px rgba(0,0,0,.5)}.cms .modal-sm{width:300px}}@media (min-width:992px){.cms .modal-lg{width:900px}}.cms .tooltip{position:absolute;z-index:1070;display:block;text-align:left;text-align:start;font-size:12px;opacity:0;filter:alpha(opacity=0)}.cms .tooltip.in{opacity:.9;filter:alpha(opacity=90)}.cms .tooltip.top{margin-top:-3px;padding:5px 0}.cms .tooltip.right{margin-left:3px;padding:0 5px}.cms .tooltip.bottom{margin-top:3px;padding:5px 0}.cms .tooltip.left{margin-left:-3px;padding:0 5px}.cms .tooltip-inner{max-width:200px;padding:3px 8px;color:#fff;text-align:center;background-color:#000;border-radius:4px}.cms .tooltip-arrow{position:absolute;width:0;height:0;border-color:transparent;border-style:solid}.cms .tooltip.top .tooltip-arrow{bottom:0;left:50%;margin-left:-5px;border-width:5px 5px 0;border-top-color:#000}.cms .tooltip.top-left .tooltip-arrow{bottom:0;right:5px;margin-bottom:-5px;border-width:5px 5px 0;border-top-color:#000}.cms .tooltip.top-right .tooltip-arrow{bottom:0;left:5px;margin-bottom:-5px;border-width:5px 5px 0;border-top-color:#000}.cms .tooltip.right .tooltip-arrow{top:50%;left:0;margin-top:-5px;border-width:5px 5px 5px 0;border-right-color:#000}.cms .tooltip.left .tooltip-arrow{top:50%;right:0;margin-top:-5px;border-width:5px 0 5px 5px;border-left-color:#000}.cms .tooltip.bottom .tooltip-arrow{top:0;left:50%;margin-left:-5px;border-width:0 5px 5px;border-bottom-color:#000}.cms .tooltip.bottom-left .tooltip-arrow{top:0;right:5px;margin-top:-5px;border-width:0 5px 5px;border-bottom-color:#000}.cms .tooltip.bottom-right .tooltip-arrow{top:0;left:5px;margin-top:-5px;border-width:0 5px 5px;border-bottom-color:#000}.cms .popover{position:absolute;top:0;left:0;z-index:1060;display:none;max-width:276px;padding:1px;text-align:left;text-align:start;font-size:14px;background-color:#fff;background-clip:padding-box;border:1px solid #ccc;border:1px solid rgba(0,0,0,.2);border-radius:6px;-webkit-box-shadow:0 5px 10px rgba(0,0,0,.2);box-shadow:0 5px 10px rgba(0,0,0,.2)}.cms .carousel-caption,.cms .carousel-control{color:#fff;text-align:center;text-shadow:0 1px 2px rgba(0,0,0,.6)}.cms .popover.top{margin-top:-10px}.cms .popover.right{margin-left:10px}.cms .popover.bottom{margin-top:10px}.cms .popover.left{margin-left:-10px}.cms .popover-title{margin:0;padding:8px 14px;font-size:14px;background-color:#f7f7f7;border-bottom:1px solid #ebebeb;border-radius:5px 5px 0 0}.cms .popover-content{padding:9px 14px}.cms .popover>.arrow,.cms .popover>.arrow:after{position:absolute;display:block;width:0;height:0;border-color:transparent;border-style:solid}.cms .popover>.arrow{border-width:11px}.cms .popover>.arrow:after{border-width:10px;content:\"\"}.cms .popover.top>.arrow{left:50%;margin-left:-11px;border-bottom-width:0;border-top-color:#999;border-top-color:rgba(0,0,0,.25);bottom:-11px}.cms .popover.top>.arrow:after{content:\" \";bottom:1px;margin-left:-10px;border-bottom-width:0;border-top-color:#fff}.cms .popover.right>.arrow{top:50%;left:-11px;margin-top:-11px;border-left-width:0;border-right-color:#999;border-right-color:rgba(0,0,0,.25)}.cms .popover.right>.arrow:after{content:\" \";left:1px;bottom:-10px;border-left-width:0;border-right-color:#fff}.cms .popover.bottom>.arrow{left:50%;margin-left:-11px;border-top-width:0;border-bottom-color:#999;border-bottom-color:rgba(0,0,0,.25);top:-11px}.cms .popover.bottom>.arrow:after{content:\" \";top:1px;margin-left:-10px;border-top-width:0;border-bottom-color:#fff}.cms .popover.left>.arrow{top:50%;right:-11px;margin-top:-11px;border-right-width:0;border-left-color:#999;border-left-color:rgba(0,0,0,.25)}.cms .popover.left>.arrow:after{content:\" \";right:1px;border-right-width:0;border-left-color:#fff;bottom:-10px}.cms .carousel{position:relative}.cms .carousel-inner{position:relative;overflow:hidden;width:100%}.cms .carousel-inner>.item{display:none;position:relative;-webkit-transition:.6s ease-in-out left;-o-transition:.6s ease-in-out left;transition:.6s ease-in-out left}.cms .carousel-inner>.item>a>img,.cms .carousel-inner>.item>img{display:block;max-width:100%;height:auto;line-height:1}@media all and (transform-3d),(-webkit-transform-3d){.cms .carousel-inner>.item{-webkit-transition:-webkit-transform .6s ease-in-out;-moz-transition:-moz-transform .6s ease-in-out;-o-transition:-o-transform .6s ease-in-out;transition:transform .6s ease-in-out;-webkit-backface-visibility:hidden;-moz-backface-visibility:hidden;backface-visibility:hidden;-webkit-perspective:1000px;-moz-perspective:1000px;perspective:1000px}.cms .carousel-inner>.item.active.right,.cms .carousel-inner>.item.next{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0);left:0}.cms .carousel-inner>.item.active.left,.cms .carousel-inner>.item.prev{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);left:0}.cms .carousel-inner>.item.active,.cms .carousel-inner>.item.next.left,.cms .carousel-inner>.item.prev.right{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);left:0}}.cms .carousel-inner>.active,.cms .carousel-inner>.next,.cms .carousel-inner>.prev{display:block}.cms .carousel-inner>.active{left:0}.cms .carousel-inner>.next,.cms .carousel-inner>.prev{position:absolute;top:0;width:100%}.cms .carousel-inner>.next{left:100%}.cms .carousel-inner>.prev{left:-100%}.cms .carousel-inner>.next.left,.cms .carousel-inner>.prev.right{left:0}.cms .carousel-inner>.active.left{left:-100%}.cms .carousel-inner>.active.right{left:100%}.cms .carousel-control{position:absolute;top:0;left:0;bottom:0;width:15%;font-size:20px;background-color:transparent}.cms .carousel-control.left{background-image:-webkit-linear-gradient(left,rgba(0,0,0,.5) 0,rgba(0,0,0,.0001) 100%);background-image:-o-linear-gradient(left,rgba(0,0,0,.5) 0,rgba(0,0,0,.0001) 100%);background-image:linear-gradient(to right,rgba(0,0,0,.5) 0,rgba(0,0,0,.0001) 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000', endColorstr='#00000000', GradientType=1)}.cms .carousel-control.right{left:auto;right:0;background-image:-webkit-linear-gradient(left,rgba(0,0,0,.0001) 0,rgba(0,0,0,.5) 100%);background-image:-o-linear-gradient(left,rgba(0,0,0,.0001) 0,rgba(0,0,0,.5) 100%);background-image:linear-gradient(to right,rgba(0,0,0,.0001) 0,rgba(0,0,0,.5) 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#80000000', GradientType=1)}.cms .carousel-control:focus,.cms .carousel-control:hover{outline:0;color:#fff;text-decoration:none;opacity:.9;filter:alpha(opacity=90)}.cms .carousel-control .glyphicon-chevron-left,.cms .carousel-control .glyphicon-chevron-right,.cms .carousel-control .icon-next,.cms .carousel-control .icon-prev{position:absolute;top:50%;margin-top:-10px;z-index:5;display:inline-block}.cms .carousel-control .glyphicon-chevron-left,.cms .carousel-control .icon-prev{left:50%;margin-left:-10px}.cms .carousel-control .glyphicon-chevron-right,.cms .carousel-control .icon-next{right:50%;margin-right:-10px}.cms .carousel-control .icon-next,.cms .carousel-control .icon-prev{width:20px;height:20px;line-height:1;font-family:serif}.cms .carousel-control .icon-prev:before{content:'\\2039'}.cms .carousel-control .icon-next:before{content:'\\203A'}.cms .carousel-indicators{position:absolute;bottom:10px;left:50%;z-index:15;width:60%;margin-left:-30%;padding-left:0;list-style:none;text-align:center}.cms .carousel-indicators li{display:inline-block;width:10px;height:10px;margin:1px;text-indent:-999px;border:1px solid #fff;border-radius:10px;cursor:pointer;background-color:#000\\9;background-color:transparent}.cms .carousel-indicators .active{margin:0;width:12px;height:12px;background-color:#fff}.cms .carousel-caption{position:absolute;left:15%;right:15%;bottom:20px;z-index:10;padding-top:20px;padding-bottom:20px}.cms .carousel-caption .btn,.cms .text-hide{text-shadow:none}@media screen and (min-width:768px){.cms .carousel-control .glyphicon-chevron-left,.cms .carousel-control .glyphicon-chevron-right,.cms .carousel-control .icon-next,.cms .carousel-control .icon-prev{width:30px;height:30px;margin-top:-10px;font-size:30px}.cms .carousel-control .glyphicon-chevron-left,.cms .carousel-control .icon-prev{margin-left:-10px}.cms .carousel-control .glyphicon-chevron-right,.cms .carousel-control .icon-next{margin-right:-10px}.cms .carousel-caption{left:20%;right:20%;padding-bottom:30px}.cms .carousel-indicators{bottom:20px}}.cms .clearfix:after,.cms .clearfix:before{content:\" \";display:table}.cms .center-block{display:block;margin-left:auto;margin-right:auto}.cms .pull-right{float:right!important}.cms .pull-left{float:left!important}.cms .hide{display:none!important}.cms .show{display:block!important}.cms .hidden,.cms .visible-lg,.cms .visible-lg-block,.cms .visible-lg-inline,.cms .visible-lg-inline-block,.cms .visible-md,.cms .visible-md-block,.cms .visible-md-inline,.cms .visible-md-inline-block,.cms .visible-sm,.cms .visible-sm-block,.cms .visible-sm-inline,.cms .visible-sm-inline-block,.cms .visible-xs,.cms .visible-xs-block,.cms .visible-xs-inline,.cms .visible-xs-inline-block{display:none!important}.cms .invisible{visibility:hidden}.cms .text-hide{font:0/0 a;color:transparent;background-color:transparent;border:0}.cms .affix{position:fixed}@-ms-viewport{width:device-width}@media (max-width:767px){.cms .visible-xs{display:block!important}.cms table.visible-xs{display:table!important}.cms tr.visible-xs{display:table-row!important}.cms td.visible-xs,.cms th.visible-xs{display:table-cell!important}.cms .visible-xs-block{display:block!important}.cms .visible-xs-inline{display:inline!important}.cms .visible-xs-inline-block{display:inline-block!important}}@media (min-width:768px) and (max-width:991px){.cms .visible-sm{display:block!important}.cms table.visible-sm{display:table!important}.cms tr.visible-sm{display:table-row!important}.cms td.visible-sm,.cms th.visible-sm{display:table-cell!important}.cms .visible-sm-block{display:block!important}.cms .visible-sm-inline{display:inline!important}.cms .visible-sm-inline-block{display:inline-block!important}}@media (min-width:992px) and (max-width:1199px){.cms .visible-md{display:block!important}.cms table.visible-md{display:table!important}.cms tr.visible-md{display:table-row!important}.cms td.visible-md,.cms th.visible-md{display:table-cell!important}.cms .visible-md-block{display:block!important}.cms .visible-md-inline{display:inline!important}.cms .visible-md-inline-block{display:inline-block!important}}@media (min-width:1200px){.cms .visible-lg{display:block!important}.cms table.visible-lg{display:table!important}.cms tr.visible-lg{display:table-row!important}.cms td.visible-lg,.cms th.visible-lg{display:table-cell!important}.cms .visible-lg-block{display:block!important}.cms .visible-lg-inline{display:inline!important}.cms .visible-lg-inline-block{display:inline-block!important}.cms .hidden-lg{display:none!important}}@media (max-width:767px){.cms .hidden-xs{display:none!important}}@media (min-width:768px) and (max-width:991px){.cms .hidden-sm{display:none!important}}@media (min-width:992px) and (max-width:1199px){.cms .hidden-md{display:none!important}}.cms .visible-print{display:none!important}@media print{.cms .visible-print{display:block!important}.cms table.visible-print{display:table!important}.cms tr.visible-print{display:table-row!important}.cms td.visible-print,.cms th.visible-print{display:table-cell!important}}.cms .visible-print-block{display:none!important}@media print{.cms .visible-print-block{display:block!important}}.cms .visible-print-inline{display:none!important}@media print{.cms .visible-print-inline{display:inline!important}}.cms .visible-print-inline-block{display:none!important}@media print{.cms .visible-print-inline-block{display:inline-block!important}.cms .hidden-print{display:none!important}}.cms-navbar-fix{top:75px}.cms-containers,.cms-containers-inline{min-height:42px;padding-left:0}.cms-containers-inline>div,.cms-containers>div{position:relative}.cms-containers .cms-element,.cms-containers-inline .cms-element{display:inline-block}.cms-containers .dndDraggingSource,.cms-containers-inline .dndDraggingSource{display:none!important}.cms-containers .dndPlaceholder{display:block;background-color:#ddd;min-height:42px;position:relative}.cms-containers-inline .dndPlaceholder{display:inline-block;background-color:#ddd;min-height:20px;width:50px;position:relative}[cms-editable]{border-bottom:1px solid rgba(221,221,221,.53);display:inline}.cms-element-controll,.cms-element-controll-icon{position:absolute;z-index:1}.cms-element-controll{width:150px;right:10px}.cms-element-controll-icon{right:20px}.cms-admin .cms-element-controll-icon{right:initial}.cms-admin .cms-element-controll{right:initial;margin-left:-115px}.cms-window .modal-dialog{width:100%;height:100%;padding:0;margin:0}.cms-window .modal-content{height:100%;border-radius:0;overflow:auto}.vakata-context.jstree-contextmenu.jstree-proton-contextmenu{z-index:10000}.cms-close-position{position:absolute;right:3px;top:3px;z-index:1}.cms-controll-panel-right{position:absolute;right:3px;top:37px;border-radius:10px;height:94%;background-color:rgba(0,0,0,.03);padding:10px}.cms-sidebar h3,.cms-sidebar h4,.cms-sidebar h5{font-weight:400}a[cms-admin],a[ng-click]{cursor:pointer}.cms-btn-bottom.btn{margin-bottom:5px;display:block}.cms-select .ui-select-search,.cms-select .ui-select-toggle,.form-control.input-xs,.input-group-xs>.form-control,.input-group-xs>.input-group-addon,.input-group-xs>.input-group-btn>.btn{height:22px;padding:2px 5px;font-size:12px;line-height:1.5;border-radius:3px}[cms-editable] .popover{z-index:10000;min-width:250px;max-width:none}[cms-editable] .form-horizontal .control-label{text-align:left}[cms-editable] .col-sm-10,[cms-editable] .col-sm-2{width:100%}[cms-editable] .col-sm-10{margin-top:5px}[cms-login] .form-signin{max-width:330px;padding:15px;margin:0 auto}[cms-login] .form-signin .form-signin-heading{margin-bottom:10px}[cms-login] .form-signin .checkbox{margin-bottom:10px;font-weight:400}[cms-login] .form-signin .form-control{position:relative;height:auto;box-sizing:border-box;padding:10px;font-size:16px}[cms-login] .form-signin .form-control:focus{z-index:2}[cms-login] .form-signin input[type=email]{margin-bottom:-1px;border-bottom-right-radius:0;border-bottom-left-radius:0}[cms-login] .form-signin input[type=password]{margin-bottom:10px;border-top-left-radius:0;border-top-right-radius:0}.cms-panel .panel{border-radius:1px}.cms-panel .panel .panel-default{border-color:#e7eaec}.cms-panel .panel-heading{border-radius:1px;color:#000;padding:4px 10px}.cms-panel .cms-border{position:relative;border:1px solid #bbb;margin:10px 0;padding:5px 5px 0;background-color:#ddd;-moz-box-shadow:inset 0 1px 1px #eee;-ms-box-shadow:inset 0 1px 1px #eee;-o-box-shadow:inset 0 1px 1px #eee;-webkit-box-shadow:inset 0 1px 1px #EEE;box-shadow:inset 0 1px 1px #EEE;-moz-border-radius:4px;-webkit-border-radius:4px;border-radius:4px}.cms-panel .cms-border:after,.cms-panel .cms-border:before{z-index:-1;position:absolute;content:\"\";bottom:15px;width:50%;top:50%;max-width:300px;background:rgba(0,0,0,.7)}.cms-panel .cms-border:before{left:10px;-webkit-box-shadow:0 15px 10px rgba(0,0,0,.7);-moz-box-shadow:0 15px 10px rgba(0,0,0,.7);box-shadow:0 15px 10px rgba(0,0,0,.7);-webkit-transform:rotate(-3deg);-moz-transform:rotate(-3deg);-o-transform:rotate(-3deg);-ms-transform:rotate(-3deg);transform:rotate(-3deg)}.cms-panel .cms-border:after{-webkit-box-shadow:0 15px 10px rgba(0,0,0,.7);-moz-box-shadow:0 15px 10px rgba(0,0,0,.7);box-shadow:0 15px 10px rgba(0,0,0,.7);-webkit-transform:rotate(3deg);-moz-transform:rotate(3deg);-o-transform:rotate(3deg);-ms-transform:rotate(3deg);transform:rotate(3deg);right:10px;left:auto}.cms-wrapper{padding:20px;position:relative}.btn-white{background:#fff;border:1px solid #e7eaec}.btn-white.active,.btn-white.active:focus,.btn-white.active:hover,.btn-white:active,.btn-white:active:focus,.btn-white:active:hover,.btn-white:focus,.btn-white:hover{color:inherit;border:1px solid #d2d2d2}.btn-white.active,.btn-white:active{box-shadow:0 2px 5px rgba(0,0,0,.15) inset;background-image:none}.btn-white.active[disabled],.btn-white.disabled,.btn-white.disabled.active,.btn-white.disabled:active,.btn-white.disabled:focus,.btn-white.disabled:hover,.btn-white[disabled],.btn-white[disabled]:active,.btn-white[disabled]:focus,.btn-white[disabled]:hover,fieldset[disabled] .btn-white,fieldset[disabled] .btn-white.active,fieldset[disabled] .btn-white:active,fieldset[disabled] .btn-white:focus,fieldset[disabled] .btn-white:hover{color:#cacaca}.btn.btn-white{border:1px solid #e7eaec}.cms-panel-highlight{box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19)}.cms-form .control-label{font-weight:500}.lint-error{font-family:arial;font-size:70%;background:#ffa;color:#a00;padding:2px 5px 3px}.lint-error-icon{color:#fff;background-color:red;font-weight:700;border-radius:50%;padding:0 3px;margin-right:7px}ul.CodeMirror-hints{z-index:100000001}[data-ng-app] .CodeMirror-Tern-tooltip,div.CodeMirror-lint-tooltip{z-index:100000000}.scrollable-menu{height:auto;max-height:200px;overflow-x:hidden}.cms-edit-shadow{display:inline-block;-webkit-box-shadow:0 0 4px 0 #f0ad4e;-moz-box-shadow:0 0 4px 0 #f0ad4e;box-shadow:0 0 4px 0 #f0ad4e}.nonDraggableImage{-webkit-user-drag:none}.cms-layout{margin-top:15px;padding:5px;border:1px dashed rgba(111,164,210,.4);border-radius:10px}[cms-fragment] .cms-layout{margin-top:0;padding:0;border:none;border-radius:0}.cms-field-form .col-sm-2{text-align:start!important;margin-bottom:5px!important}.cms-data-element .cms-layout,.cms-data-element [cms-editable]{border:none}", ""]);
	
	// exports


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(38);

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(54);

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(246);

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _module = __webpack_require__(14);
	
	var _module2 = _interopRequireDefault(_module);
	
	var _module3 = __webpack_require__(95);
	
	var _module4 = _interopRequireDefault(_module3);
	
	var _module5 = __webpack_require__(98);
	
	var _module6 = _interopRequireDefault(_module5);
	
	var _module7 = __webpack_require__(109);
	
	var _module8 = _interopRequireDefault(_module7);
	
	var _module9 = __webpack_require__(111);
	
	var _module10 = _interopRequireDefault(_module9);
	
	var _module11 = __webpack_require__(113);
	
	var _module12 = _interopRequireDefault(_module11);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var components = _angular2.default.module('components', [_module4.default, _module6.default, _module8.default, _module10.default, _module12.default]);
	
	exports.default = components.name;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	__webpack_require__(15);
	
	var _editableFormly = __webpack_require__(16);
	
	var _editableFormly2 = _interopRequireDefault(_editableFormly);
	
	var _module2 = __webpack_require__(17);
	
	var _module3 = _interopRequireDefault(_module2);
	
	var _tpl = __webpack_require__(88);
	
	var _tpl2 = _interopRequireDefault(_tpl);
	
	var _common = __webpack_require__(89);
	
	var _common2 = _interopRequireDefault(_common);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _module = _angular2.default.module('components.cmsEditable', [_module3.default, 'ui.bootstrap', _common2.default]).directive('cmsEditable', directive).directive('cmsDirectEditable', cmsDirectEditableDirective).run(run);
	
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
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(33);

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = "<form ng-submit=\"vm.onSubmit()\" novalidate class=\"form-horizontal cms-field-form\">\n    <formly-form model=\"model\" fields=\"vm.fields\" form=\"vm.form\" options=\"vm.options\">\n    </formly-form>\n    <button type=\"submit\" class=\"btn btn-primary submit-button\" ng-disabled=\"vm.form.$invalid\">Submit</button>\n    <button type=\"button\" class=\"btn btn-primary\" ng-click=\"vm.isOpen = false\">Cancel</button>\n</form>\n<br ng-if=\"adminList === 'true'\">"

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	__webpack_require__(18);
	
	var _config = __webpack_require__(19);
	
	var _config2 = _interopRequireDefault(_config);
	
	__webpack_require__(50);
	
	__webpack_require__(51);
	
	__webpack_require__(52);
	
	__webpack_require__(53);
	
	__webpack_require__(54);
	
	__webpack_require__(55);
	
	__webpack_require__(56);
	
	var _tinycolor2 = __webpack_require__(57);
	
	var _tinycolor3 = _interopRequireDefault(_tinycolor2);
	
	__webpack_require__(58);
	
	__webpack_require__(59);
	
	__webpack_require__(60);
	
	var _codemirror = __webpack_require__(61);
	
	var _codemirror2 = _interopRequireDefault(_codemirror);
	
	__webpack_require__(62);
	
	__webpack_require__(63);
	
	__webpack_require__(64);
	
	__webpack_require__(65);
	
	__webpack_require__(66);
	
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
	
	var _tern2 = __webpack_require__(78);
	
	var _tern3 = _interopRequireDefault(_tern2);
	
	__webpack_require__(79);
	
	__webpack_require__(80);
	
	__webpack_require__(81);
	
	__webpack_require__(82);
	
	__webpack_require__(83);
	
	__webpack_require__(84);
	
	__webpack_require__(85);
	
	__webpack_require__(86);
	
	__webpack_require__(87);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	window.tinycolor = _tinycolor3.default;
	
	window.CodeMirror = _codemirror2.default;
	
	window.tern = _tern3.default;
	
	
	var _module = _angular2.default.module('components.formly', ['formly', 'formlyBootstrap', 'ngJsTree', 'ui.select', 'ngSanitize', 'angular.filter', 'ui.codemirror', 'color.picker', 'dndLists']).config(_config2.default).constant('size', { label: 'col-sm-2', input: 'col-sm-10' });
	
	exports.default = _module.name;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(61);

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _panel = __webpack_require__(20);
	
	var _panel2 = _interopRequireDefault(_panel);
	
	var _repeatSection = __webpack_require__(21);
	
	var _repeatSection2 = _interopRequireDefault(_repeatSection);
	
	var _repeatSection3 = __webpack_require__(22);
	
	var _repeatSection4 = _interopRequireDefault(_repeatSection3);
	
	var _treeTemplate = __webpack_require__(23);
	
	var _treeTemplate2 = _interopRequireDefault(_treeTemplate);
	
	var _tree = __webpack_require__(24);
	
	var _tree2 = _interopRequireDefault(_tree);
	
	var _refSelect = __webpack_require__(25);
	
	var _refSelect2 = _interopRequireDefault(_refSelect);
	
	var _ref = __webpack_require__(26);
	
	var _ref2 = _interopRequireDefault(_ref);
	
	var _code = __webpack_require__(27);
	
	var _code2 = _interopRequireDefault(_code);
	
	var _code3 = __webpack_require__(28);
	
	var _code4 = _interopRequireDefault(_code3);
	
	var _array = __webpack_require__(34);
	
	var _array2 = _interopRequireDefault(_array);
	
	var _arrayTemplate = __webpack_require__(35);
	
	var _arrayTemplate2 = _interopRequireDefault(_arrayTemplate);
	
	var _selectType = __webpack_require__(36);
	
	var _selectType2 = _interopRequireDefault(_selectType);
	
	var _selectElement = __webpack_require__(37);
	
	var _selectElement2 = _interopRequireDefault(_selectElement);
	
	var _selectProperty = __webpack_require__(38);
	
	var _selectProperty2 = _interopRequireDefault(_selectProperty);
	
	var _selectChildProperty = __webpack_require__(39);
	
	var _selectChildProperty2 = _interopRequireDefault(_selectChildProperty);
	
	var _selectFn = __webpack_require__(40);
	
	var _selectFn2 = _interopRequireDefault(_selectFn);
	
	var _select = __webpack_require__(41);
	
	var _select2 = _interopRequireDefault(_select);
	
	var _selectWhole = __webpack_require__(42);
	
	var _selectWhole2 = _interopRequireDefault(_selectWhole);
	
	var _multiSelect = __webpack_require__(43);
	
	var _multiSelect2 = _interopRequireDefault(_multiSelect);
	
	var _bsGridSelect = __webpack_require__(44);
	
	var _bsGridSelect2 = _interopRequireDefault(_bsGridSelect);
	
	var _bsGridSelect3 = __webpack_require__(45);
	
	var _bsGridSelect4 = _interopRequireDefault(_bsGridSelect3);
	
	var _checkbox = __webpack_require__(46);
	
	var _checkbox2 = _interopRequireDefault(_checkbox);
	
	var _saveContainersController = __webpack_require__(47);
	
	var _saveContainersController2 = _interopRequireDefault(_saveContainersController);
	
	var _recursive = __webpack_require__(48);
	
	var _recursive2 = _interopRequireDefault(_recursive);
	
	var _recursive3 = __webpack_require__(49);
	
	var _recursive4 = _interopRequireDefault(_recursive3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	config.$inject = ['formlyConfigProvider', 'size', '$rootScopeProvider'];
	
	function config(formlyConfigProvider, size, $rootScopeProvider) {
	    $rootScopeProvider.digestTtl(20);
	
	    var config = formlyConfigProvider;
	    config.removeWrapperByName('bootstrapLabel');
	
	    config.setWrapper({
	        name: 'bootstrapLabel',
	        template: '\n        <div>\n          <label for="{{id}}" class="control-label ' + size.label + '"\n                 uib-tooltip-html=\'to.tooltip\'>\n            {{to.label}} {{to.required ? \'*\' : \'\'}}\n          </label>\n          <div class="' + size.input + '"><formly-transclude></formly-transclude></div>\n        </div>\n        '
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
	        template: '\n            <div class="row" style="padding-top:7px;">\n                <div class="col-sm-4">\n                    <input type="text" class="form-control input-xs" ng-model="model[options.key]" placeholder="URL">\n                </div>\n                <div class="col-sm-6">\n                    <button class="btn btn-white cms-btn-bottom btn-xs" type="button" ng-click="onFileUpload(file)"  style="position: absolute;right: 15px;">\n                        Up\n                    </button>\n                    <input type="file" ngf-select ng-model="file"\n                           name="file" class="form-control input-xs"\n                           placeholder="file upload">\n                </div>\n                <div class="col-sm-2">\n                    <div class="checkbox" style="padding-top: 0px;">\n                        <label>\n                            <input type="checkbox"\n                               class="formly-field-checkbox"\n                               ng-model="genName">\n                            Gen name\n                        </label>\n                    </div>\n                </div>\n            </div>\n            \n            <img ng-if="model[options.key]" ng-src="{{model[options.key]}}" width="30px" height="30px">\n        ',
	        controller: function controller($scope, cms) {
	            $scope.genName = true;
	            $scope.onFileUpload = function (file) {
	                //files: an array of files selected, each file has name, size, and type.
	                cms.uploadFile(file, '.image', function () {
	                    $scope.model[$scope.options.key] = '.image/' + file.name;
	                    $scope.file = null;
	                    console.log('upload successful');
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
	        name: 'select',
	        template: _select2.default,
	        controller: function controller() {},
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
/* 20 */
/***/ function(module, exports) {

	module.exports = "<div ng-if=\"!to.noPanel\"\n     ng-show=\"!(model[options.key].null && to.null)\"\n     class=\"cms-panel\" ng-init=\"state = {_show :true}\"\n     style=\"position: relative;\">\n    <button type=\"button\" class=\"btn btn-xs btn-white\" ng-if=\"to.null\"\n            style=\"position: absolute;right: 0px;margin-top: 15px;z-index: 1;\"\n            ng-click=\"model[options.key].null = true;\">\n        <i class=\"fa fa-trash-o\"></i>\n    </button>\n    <fieldset style=\"padding: 0 10px 10px 10px;\n    border: 1px solid #eee;border-radius:4px;background-color: rgba(128, 128, 128, 0.03)\">\n        <legend style=\"color: #337ab7;font-weight: 200;border: 0;margin-left: 10px;width: initial;padding: 0 5px;\"\n                ng-if=\"to.label\"\n                ng-style=\"{color:to.choice?'#8338b7':'#337ab7'}\">\n            <span ng-show=\"to.choice\"\n                  uib-dropdown on-toggle=\"toggled(open)\">\n                  <span uib-dropdown-toggle\n                        uib-tooltip='{{to.tooltip}}'\n                        style=\"cursor: pointer\">\n                      {{options.templateOptions.label}}</span>\n                  <ul uib-dropdown-menu aria-labelledby=\"simple-dropdown\">\n                      <li ng-repeat=\"v in options.fieldGroup track by $index\"\n                          ng-show=\"v.key !== 'choice'\">\n                          <a ng-click=\"options.key && options.key !== ''? (model[options.key].choice = v.key): (model.choice = v.key);\">\n                              {{v.key}}</a>\n                      </li>\n                  </ul>\n\n            </span>\n            <span ng-if=\"!to.choice\"\n                  uib-tooltip='{{to.tooltip}}'>\n                {{options.templateOptions.label}}\n            </span>\n            <button type=\"button\" ng-click=\"state._show = !state._show\"\n                    class=\"btn btn-white btn-xs\"\n                    style=\"border: none;background-color: transparent;\"\n                    ng-bind=\"state._show? '-': '+'\">\n            </button>\n        </legend>\n        <div ng-show=\"state._show\">\n            <formly-transclude></formly-transclude>\n        </div>\n    </fieldset>\n    <br>\n</div>\n<div ng-if=\"to.noPanel\">\n    <formly-transclude></formly-transclude>\n</div>\n<div ng-show=\"(model[options.key].null && to.null)\">\n    <div class=\"form-group\">\n        <div class=\"col-sm-offset-2 col-sm-10\">\n            <button type=\"button\" class=\"btn btn-white btn-xs\"\n                    ng-click=\"model[options.key].null = false;\" style=\"z-index: 1;\"> add {{to.label}}\n            </button>\n        </div>\n    </div>\n</div>\n"

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = "<div>\n    <div dnd-list=\"model[options.key]\"\n         class=\"cms-containers\" style=\"min-height: 0px\">\n        <div class=\"repeatsection\"\n             style=\"position: relative\"\n             ng-repeat=\"element in model[options.key]\"\n             dnd-draggable=\"element\"\n             dnd-moved=\"model[options.key].splice($index, 1);\"\n             dnd-effect-allowed=\"move\"\n             ng-init=\"_fields = copyFields(to.fields);_options = createFormOptions($index)\">\n            <button type=\"button\" class=\"btn btn-xs btn-white\"\n                    style=\"position: absolute;right: 0px;z-index: 10;\"\n                    ng-style=\"{'margin-top': marginTop}\"\n                    ng-click=\"model[options.key].splice($index, 1)\">\n                <i class=\"fa fa-trash-o\"></i>\n            </button>\n            <formly-form fields=\"_fields\"\n                         model=\"element\"\n                         options=\"_options\"\n                         form=\"form\">\n            </formly-form>\n        </div>\n    </div>\n\n    <div class=\"form-group\">\n        <div class=\"col-sm-offset-2 col-sm-10\">\n            <div ng-if=\"!choice\">\n                <button type=\"button\" class=\"btn btn-white btn-xs\"\n                        ng-click=\"addNew()\">{{to.btnText}}\n                </button>\n            </div>\n            <div ng-if=\"choice\">\n                <div class=\"btn-group-xs\" uib-dropdown>\n                    <button type=\"button\" class=\"btn btn-white\" uib-dropdown-toggle>\n                        {{to.btnText}} <span class=\"caret\"></span>\n                    </button>\n                    <ul class=\"scrollable-menu\" uib-dropdown-menu role=\"menu\" aria-labelledby=\"btn-append-to-body\"\n                        style=\"z-index: 10000;\">\n                        <li style=\"padding: 0px 20px;\" ng-show=\"choice.length > 7\">\n                            <input type=\"text\" ng-model=\"_choice\" ng-click=\"$event.stopPropagation();\">\n                        </li>\n                        <li role=\"menuitem\" ng-repeat=\"c in choice | filter: _choice track by $index\">\n                            <a ng-click=\"addNewWithChoice(c); _choice = ''\">{{c}}</a>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n\n\n</div>\n"

/***/ },
/* 22 */
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
/* 23 */
/***/ function(module, exports) {

	module.exports = "<div class=\"form-group\" ng-init=\"_showTree = false\">\n    <label class=\"control-label {{size.label}}\"\n           ng-show=\"options.templateOptions.label\"\n           uib-tooltip='{{to.tooltip}}'>\n        {{options.templateOptions.label}}\n    </label>\n    <div class=\"{{size.input}}\">\n        <div style=\"position: absolute;right: 12px;\">\n            <button type=\"button\" class=\"btn btn-xs btn-success\"\n                    ng-click=\"_showTree = !_showTree\"\n                    ng-bind=\"_showTree?'hide tree':'show tree'\"\n            >show tree\n            </button>\n            <button type=\"button\" class=\"btn btn-xs btn-danger\"\n                    ng-click=\"clear()\">clear\n            </button>\n        </div>\n\n        <div style=\"overflow-wrap: break-word;padding-top: 7px;\"\n             ng-show=\"!_showTree\" >\n            <button class=\"btn btn-xs btn-outline btn-default\"\n                    type=\"button\"\n                    style=\"margin-left: 4px;\"\n                    ng-repeat=\"v in model[options.key]\">\n                {{v}}\n            </button>\n        </div>\n        <div ng-show=\"_showTree\"\n             js-tree=\"treeConfig\"\n             style=\"margin-top: 7px;\"\n             ng-model=\"tree\"\n             tree=\"treeInstance\"\n             tree-events=\"check_node:check;uncheck_node:check\">\n        </div>\n\n    </div>\n</div>\n<br>"

/***/ },
/* 24 */
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
/* 25 */
/***/ function(module, exports) {

	module.exports = "<ui-select ng-if=\"!to.multiple\" data-ng-model=\"model[options.key]\" theme=\"bootstrap\">\n    <ui-select-match placeholder=\"{{to.placeholder}}\">\n        {{$select.selected[to.labelProp]}}\n    </ui-select-match>\n    <ui-select-choices data-repeat=\"model in models | filterBy: [to.labelProp]: $select.search\">\n        <div ng-bind-html=\"model[to.labelProp] | highlight: $select.search\"></div>\n    </ui-select-choices>\n</ui-select>\n\n<ui-select ng-if=\"to.multiple\" multiple data-ng-model=\"model[options.key]\" theme=\"bootstrap\">\n    <ui-select-match placeholder=\"{{to.placeholder}}\">\n        {{$item[to.labelProp]}}\n    </ui-select-match>\n    <ui-select-choices data-repeat=\"model in models | filterBy: [to.labelProp]: $select.search\">\n        <div ng-bind-html=\"model[to.labelProp] | highlight: $select.search\"></div>\n    </ui-select-choices>\n</ui-select>"

/***/ },
/* 26 */
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
	                var escape = function escape(s) {
	                    return s.replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t").replace(/\f/g, "\\f");
	                };
	                $scope.model[$scope.options.key] = JsonFn.parse('{"fn":"' + escape(value) + '"}').fn;
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(6);

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(29);

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(30);

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(31);

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(32);

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

	module.exports = "<div style=\"min-height: 20px;position: relative;\"\n     ng-repeat=\"element in model[options.key] track by $index\"\n     ng-init=\"itemOptions = copyItemOptions(to.field);_formState = createFormState($index)\">\n    <button type=\"button\" class=\"btn btn-xs btn-white\"\n            style=\"position: absolute;right: 0px;z-index: 1;\"\n            ng-click=\"model[options.key].splice($index, 1)\">\n        <i class=\"fa fa-trash-o\"></i>\n    </button>\n    <formly-field options=\"itemOptions\"\n                  model=\"model[options.key]\"\n                  form=\"form\"\n                  form-state=\"_formState\"\n                  index=\"$index\">\n    </formly-field>\n</div>\n<div class=\"form-group\">\n    <div class=\"col-sm-offset-2 col-sm-10\">\n        <button type=\"button\" class=\"btn btn-white btn-xs\"\n                ng-click=\"addNew()\" style=\"z-index: 1;\">{{to.btnText}}\n        </button>\n    </div>\n</div>"

/***/ },
/* 36 */
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
/* 37 */
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
/* 38 */
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
	
	    var Type = cms.data.types[_.get(model, path).BindType];
	    $scope.to.options = _.map(Type.columns, function (v) {
	        return { name: v, value: v };
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
/* 40 */
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
/* 41 */
/***/ function(module, exports) {

	module.exports = "<ui-select ng-if=\"!to.multiple\" data-ng-model=\"model[options.key]\" theme=\"bootstrap\">\n    <ui-select-match placeholder=\"{{to.placeholder}}\">\n        {{$select.selected.name}}\n    </ui-select-match>\n    <ui-select-choices data-repeat=\"item.value as item in to.options | filterBy: ['name']: $select.search\">\n        <div ng-bind-html=\"item.name | highlight: $select.search\"></div>\n    </ui-select-choices>\n</ui-select>\n\n<ui-select ng-if=\"to.multiple\" multiple data-ng-model=\"model[options.key]\" theme=\"bootstrap\">\n    <ui-select-match placeholder=\"{{to.placeholder}}\">\n        {{$item.name}}\n    </ui-select-match>\n    <ui-select-choices data-repeat=\"item.value as item in to.options | filterBy: ['name']: $select.search\">\n        <div ng-bind-html=\"item.name | highlight: $select.search\"></div>\n    </ui-select-choices>\n</ui-select>\n\n"

/***/ },
/* 42 */
/***/ function(module, exports) {

	module.exports = "<ui-select data-ng-model=\"model[options.key]\" theme=\"bootstrap\" on-select=\"onSelect()\">\n    <ui-select-match placeholder=\"{{to.placeholder}}\">\n        {{getLabel? getLabel($select.selected): $select.selected[to.labelProp]}}\n    </ui-select-match>\n    <ui-select-choices data-repeat=\"item in to.options | filterBy: [to.labelProp]: $select.search\">\n        <div ng-bind-html=\"getLabel? getLabel(item): item[to.labelProp] | highlight: $select.search\"></div>\n    </ui-select-choices>\n</ui-select>\n\n"

/***/ },
/* 43 */
/***/ function(module, exports) {

	module.exports = "<ui-select multiple data-ng-model=\"model[options.key]\" theme=\"bootstrap\">\n    <ui-select-match placeholder=\"{{to.placeholder}}\">\n        {{$item.name}}\n    </ui-select-match>\n    <ui-select-choices data-repeat=\"item.value as item in to.options | filterBy: ['name']: $select.search\">\n        <div ng-bind-html=\"item.name | highlight: $select.search\"></div>\n    </ui-select-choices>\n</ui-select>"

/***/ },
/* 44 */
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
/* 45 */
/***/ function(module, exports) {

	module.exports = "<div class=\"ui-select-container ui-select-multiple ui-select-bootstrap dropdown form-control\">\n    <span>\n        <button type=\"button\" class=\"ui-select-match-item btn btn-default btn-xs\"\n                style=\"min-width: 30px;\"\n                ng-click=\"model[options.key].splice($index,1)\"\n                ng-repeat=\"item in model[options.key] track by $index\">\n            {{item}}\n        </button>\n    </span>\n    <div class=\"btn-group\" uib-dropdown>\n        <input class=\"ui-select-search input-xs\" uib-dropdown-toggle>\n        <ul uib-dropdown-menu role=\"menu\" aria-labelledby=\"single-button\">\n            <li role=\"menuitem\" ng-repeat=\"option in to.options track by $index\">\n                <a ng-click=\"add(option.value)\">{{option.name}}</a>\n            </li>\n        </ul>\n    </div>\n</div>"

/***/ },
/* 46 */
/***/ function(module, exports) {

	module.exports = "<div class=\"checkbox\">\n\t<label>\n\t\t<input type=\"checkbox\"\n           class=\"formly-field-checkbox\"\n\t\t       ng-model=\"model[options.key]\">\n\t\t{{to.label}}\n\t\t{{to.required ? '*' : ''}}\n\t</label>\n</div>\n"

/***/ },
/* 47 */
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
/* 48 */
/***/ function(module, exports) {

	module.exports = "<formly-form fields=\"_fields\"\n             model=\"_model\"\n             options=\"{formState:_formState}\"\n             form=\"form\">\n</formly-form>"

/***/ },
/* 49 */
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
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(62);

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(64);

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(35);

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(36);

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(55);

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(57);

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(59);

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;// TinyColor v1.3.0
	// https://github.com/bgrins/TinyColor
	// Brian Grinstead, MIT License
	
	(function() {
	
	var trimLeft = /^\s+/,
	    trimRight = /\s+$/,
	    tinyCounter = 0,
	    math = Math,
	    mathRound = math.round,
	    mathMin = math.min,
	    mathMax = math.max,
	    mathRandom = math.random;
	
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
	    toHex8: function() {
	        return rgbaToHex(this._r, this._g, this._b, this._a);
	    },
	    toHex8String: function() {
	        return '#' + this.toHex8();
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
	        var hex8String = '#' + rgbaToHex(this._r, this._g, this._b, this._a);
	        var secondHex8String = hex8String;
	        var gradientType = this._gradientType ? "GradientType = 1, " : "";
	
	        if (secondColor) {
	            var s = tinycolor(secondColor);
	            secondHex8String = s.toHex8String();
	        }
	
	        return "progid:DXImageTransform.Microsoft.gradient("+gradientType+"startColorstr="+hex8String+",endColorstr="+secondHex8String+")";
	    },
	    toString: function(format) {
	        var formatSet = !!format;
	        format = format || this._format;
	
	        var formattedString = false;
	        var hasAlpha = this._a < 1 && this._a >= 0;
	        var needsAlphaFormat = !formatSet && hasAlpha && (format === "hex" || format === "hex6" || format === "hex3" || format === "name");
	
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
	    var ok = false;
	    var format = false;
	
	    if (typeof color == "string") {
	        color = stringInputToObject(color);
	    }
	
	    if (typeof color == "object") {
	        if (color.hasOwnProperty("r") && color.hasOwnProperty("g") && color.hasOwnProperty("b")) {
	            rgb = rgbToRgb(color.r, color.g, color.b);
	            ok = true;
	            format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
	        }
	        else if (color.hasOwnProperty("h") && color.hasOwnProperty("s") && color.hasOwnProperty("v")) {
	            color.s = convertToPercentage(color.s);
	            color.v = convertToPercentage(color.v);
	            rgb = hsvToRgb(color.h, color.s, color.v);
	            ok = true;
	            format = "hsv";
	        }
	        else if (color.hasOwnProperty("h") && color.hasOwnProperty("s") && color.hasOwnProperty("l")) {
	            color.s = convertToPercentage(color.s);
	            color.l = convertToPercentage(color.l);
	            rgb = hslToRgb(color.h, color.s, color.l);
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
	
	    var i = math.floor(h),
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
	// Assumes r, g, b and a are contained in the set [0, 255]
	// Returns an 8 character hex
	function rgbaToHex(r, g, b, a) {
	
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
	    var hue = (mathRound(hsl.h) + amount) % 360;
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
	    var w = p * 2 - 1;
	    var a = rgb2.a - rgb1.a;
	
	    var w1;
	
	    if (w * a == -1) {
	        w1 = w;
	    } else {
	        w1 = (w + a) / (1 + w * a);
	    }
	
	    w1 = (w1 + 1) / 2;
	
	    var w2 = 1 - w1;
	
	    var rgba = {
	        r: rgb2.r * w1 + rgb1.r * w2,
	        g: rgb2.g * w1 + rgb1.g * w2,
	        b: rgb2.b * w1 + rgb1.b * w2,
	        a: rgb2.a * p  + rgb1.a * (1 - p)
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
	    if ((math.abs(n - max) < 0.000001)) {
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
	        rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
	        rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
	        hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
	        hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
	        hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
	        hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
	        hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
	        hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
	        hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
	    };
	})();
	
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
	            a: convertHexToDecimal(match[1]),
	            r: parseIntFromHex(match[2]),
	            g: parseIntFromHex(match[3]),
	            b: parseIntFromHex(match[4]),
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
	
	})();


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(65);

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(66);

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(68);

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(71);

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(70);

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(72);

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(140);

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(142);

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(143);

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(144);

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(146);

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(148);

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(149);

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(151);

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(152);

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(153);

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(217);

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(218);

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(219);

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(220);

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(228);

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(221);

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(223);

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(224);

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(225);

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(226);

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(227);

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(230);

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(232);

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(233);

/***/ },
/* 88 */
/***/ function(module, exports) {

	module.exports = "<div ng-if=\"vm.showJson()\">\n    <button style=\"width: 60px\"\n            popover-placement=\"bottom\"\n            popover-is-open=\"vm.isOpen\"\n            uib-popover-template=\"'editable-formly.html'\"\n            class=\"btn btn-white btn-xs\">\n        edit\n    </button>\n</div>\n<span popover-placement=\"bottom\"\n      popover-is-open=\"vm.isOpen\"\n      uib-popover-template=\"'editable-formly.html'\"\n      style=\"cursor: pointer\"\n      ng-if=\"!vm.showJson()\">\n    {{!vm.isValueUndefined? vm.value: '______'}}\n</span>"

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _cms = __webpack_require__(90);
	
	var _cms2 = _interopRequireDefault(_cms);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var commonModule = _angular2.default.module('common', [_cms2.default]);
	
	exports.default = commonModule.name;

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	__webpack_require__(91);
	
	var _Type = __webpack_require__(92);
	
	var _Type2 = _interopRequireDefault(_Type);
	
	var _menu = __webpack_require__(93);
	
	var _menu2 = _interopRequireDefault(_menu);
	
	var _QueryBuilder = __webpack_require__(94);
	
	var _QueryBuilder2 = _interopRequireDefault(_QueryBuilder);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	window.Enum = {
	    Load: { NOT: 'NOT', LOADING: 'LOADING', LOADED: 'LOADED', PART_LOADED: 'PART_LOADED' },
	    EditMode: { ALL: 'ALL', VIEWELEMENT: 'VIEWELEMENT', DATAELEMENT: 'DATAELEMENT', CONTAINER: 'CONTAINER' }
	};
	
	var modelModule = _angular2.default.module('common.data', ['ngFileUpload']).factory('cms', cms).run(run);
	
	cms.$inject = ['$http', 'Upload'];
	function cms($http, Upload) {
	    var data = {};
	    var editState = {
	        /**
	         * 0: edit by drag and drop element
	         * 1: edit by container
	         */
	        editMode: Enum.EditMode.DATAELEMENT,
	        dragType: null
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
	            var query = ref ? Type && _.find(Type.list, { _id: ref }) ? 'element=false' : 'element=' + ref : '';
	            if (!Type) Type = data.types[type] = { list: [] };
	            if (!Type.template) query += '&template=true';
	            if (content) query = '';
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
	
	    function updateContainerPage() {
	        var url = location.pathname;
	        $http.post('/cms-container-page' + url, { containers: data.containers }).then(function () {
	            console.log('Update container page successful');
	        });
	    }
	
	    var loadElementsPending = [];
	
	    function countElements(type, cb, params) {
	        $http.get('/api/v1/' + type + '/count?' + params, _transform).then(function (res) {
	            if (cb) cb(res.data.count);
	        });
	    }
	
	    function loadElements(type, cb, params) {
	        if (!params && data.types[type] && data.types[type]._load === Enum.Load.LOADED) {
	            if (cb) cb(data.types[type].list);
	            return;
	        }
	
	        if (cb) loadElementsPending.push(cb);
	        if (data.types[type]._load !== Enum.Load.LOADING) {
	            data.types[type]._load = Enum.Load.LOADING;
	
	            $http.get('/api/v1/' + type + '?' + params, _transform).then(function (res) {
	                var list = JsonFn.clone(res.data, true);
	                if (!params) {
	                    data.types[type].list = list;
	                    data.types[type]._load = Enum.Load.LOADED;
	                } else {
	                    data.types[type].list = _.unionWith(data.types[type].list, list, function (e1, e2) {
	                        return e1._id === e2._id;
	                    });
	                    data.types[type].queryList = list.map(function (e) {
	                        return _.find(data.types[type].list, function (e2) {
	                            return e2._id === e._id;
	                        });
	                    });
	                    data.types[type]._load = Enum.Load.PART_LOADED;
	                }
	
	                loadElementsPending.forEach(function (cb) {
	                    return cb(data.types[type].queryList);
	                });
	                loadElementsPending.length = 0;
	            });
	        }
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
	
	    function updateElement(type, model) {
	        $http.post('api/v1/' + type + '/' + model._id, JsonFn.stringify(_.pick(model, function (v, k) {
	            return k !== '$data';
	        }))).then(function (res) {
	            console.log(res.data);
	        });
	    }
	
	    function listColumns(form) {
	        if (form[0].isTab) {
	            var _ret = function () {
	                var _fields = [];
	                form.forEach(function (_ref) {
	                    var fields = _ref.fields;
	
	                    _fields.push.apply(_fields, _toConsumableArray(fields.map(function (field) {
	                        return field.key;
	                    })));
	                });
	                return {
	                    v: _fields
	                };
	            }();
	
	            if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	        }
	        return form.map(function (field) {
	            return field.key;
	        });
	    }
	
	    function findField(form, property) {
	        if (form[0].isTab) {
	            var result = undefined;
	            form.forEach(function (_ref2) {
	                var fields = _ref2.fields;
	
	                var f = fields.find(function (f) {
	                    return f.key === property;
	                });
	                if (f) result = f;
	            });
	            return result;
	        }
	        return form.find(function (f) {
	            return f.key === property;
	        });
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
	
	    function exportAll() {
	        $http.post('/cms-export', {}).then(function (res) {
	            console.log('Export successful');
	        });
	    }
	
	    function importAll() {
	        $http.post('/cms-import', {}).then(function (res) {
	            console.log('Import successful');
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
	            console.log('delete successful');
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
	                var field = findField(Type.form, property);
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
	
	                    _.each(options, function (_ref5) {
	                        var name = _ref5.name;
	                        var value = _ref5.value;
	
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
	                config.dynamicQuery.forEach(function (dynamicQuery) {
	                    if (dynamicQuery.field.length === 0) return;
	                    _children.push.apply(_children, _toConsumableArray(createChildren(dynamicQuery.field, null, _path)));
	                });
	                columns = _.filter(columns, function (col) {
	                    if (_.isEmpty(config.showFields)) return true;
	                    return config.showFields.indexOf(col) !== -1;
	                });
	            }
	            return {
	                children: _children,
	                columns: columns,
	                text: k,
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
	
	    return window.cms = {
	        findByID: findByID,
	        findFnByID: findFnByID,
	        findByRef: findByRef,
	        findFnByRef: findFnByRef,
	        getType: getType,
	        createElement: createElement,
	        updateElement: updateElement,
	        findField: findField,
	        data: data,
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
	        execServerFnForWrapper: execServerFnForWrapper
	    };
	}
	run.$inject = ['cms', '$http'];
	function run(cms, $http) {
	    var data = cms.data;
	    try {
	
	        cms.parseAndSaveData(JsonFn.parse($('#cms-data').text(), true));
	        data.serverFn = data.setupServerFn(data.serverFn, $http.post);
	        delete data.setupServerFn;
	        window.Types = data.types;
	        window.Local = data.Local = {};
	
	        //menu
	        var menu = cms.data.online.menu;
	        $('.main-nav').css('top', menu.top);
	        $('body').css('padding-top', menu.bodyPaddingTop);
	        $('body').append(_menu2.default);
	        if (menu.inverse) $('.cms-menu').addClass('navbar-inverse');
	        if (menu.bottom) $('.cms-menu').removeClass('navbar-fixed-top').addClass('navbar-fixed-bottom');
	    } catch (e) {}
	}
	exports.default = modelModule.name;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(4);

/***/ },
/* 92 */
/***/ function(module, exports) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
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
/* 93 */
/***/ function(module, exports) {

	module.exports = "<div class=\"cms\">\n    <nav role=\"navigation\" class=\"navbar navbar-fixed-top navbar-default cms-menu\">\n        <div class=\"container\">\n            <div class=\"navbar-header\">\n                <button type=\"button\" data-toggle=\"collapse\" data-target=\"#dropdown_menu\" aria-expanded=\"false\"\n                        aria-controls=\"navbar\" class=\"navbar-toggle collapsed\"><span\n                        class=\"sr-only\">Toggle navigation</span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span><span\n                        class=\"icon-bar\"></span></button>\n                <a href=\"#\" class=\"navbar-brand\">Cms Mon</a></div>\n            <div id=\"dropdown_menu\" class=\"collapse navbar-collapse\">\n                <ul class=\"nav navbar-nav\">\n                    <li class=\"dropdown\"><a href=\"#\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\"\n                                            class=\"dropdown-toggle\">Types<span class=\"caret\"></span></a>\n                        <ul role=\"menu\" cms-types=\"\" class=\"dropdown-menu\"></ul>\n                    </li>\n                    <li><a cms-admin=\"\">Admin</a></li>\n                    <li><a href=\"#\" cms-sitemap=\"\">Sitemap</a></li>\n                </ul>\n                <ul class=\"nav navbar-nav navbar-right\">\n                    <li>\n                        <div cms-edit-state=\"cms-edit-state\"></div>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </nav>\n</div>\n\n<!--\n<br><br><br><br>\n-->\n"

/***/ },
/* 94 */
/***/ function(module, exports) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var QueryBuilder = function () {
	    function QueryBuilder() {
	        _classCallCheck(this, QueryBuilder);
	    }
	
	    _createClass(QueryBuilder, [{
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
	            if (_query) this._query = JSON.stringify(_query);
	            return this;
	        }
	    }, {
	        key: 'build',
	        value: function build() {
	            this._skip = (this._page - 1) * this._limit;
	
	            var params = '';
	            if (this._limit) params += 'limit=' + this._limit;
	            if (this._skip) params += '&skip=' + this._skip;
	            if (this._query) params += '&query=' + this._query;
	            if (this._sort) params += '&sort=' + this._sort;
	            return params;
	        }
	    }]);
	
	    return QueryBuilder;
	}();
	
	exports.default = QueryBuilder;

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	__webpack_require__(96);
	
	var _tpl = __webpack_require__(97);
	
	var _tpl2 = _interopRequireDefault(_tpl);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _module = _angular2.default.module('components.cmsTypes', ['dndLists']).directive('cmsTypes', directive);
	
	directive.$inject = ['cms', '$http'];
	
	function directive(cms, $http) {
	    controller.$inject = [];
	    function controller() {
	        var vm = this;
	        vm.types = _.map(Types, function (v, k) {
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
	                vm.list = cms.data.types[type].list;
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
	        };
	        vm.start = function (type) {
	            cms.editState.dragType = type;
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
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(234);

/***/ },
/* 97 */
/***/ function(module, exports) {

	module.exports = "<ul role=\"menu\" class=\"dropdown-menu\" ng-init=\"vm._showType= true\">\n    <li ng-repeat=\"type in vm.types\"\n        dnd-draggable=\"type\"\n        dnd-type=\"type.type\"\n        dnd-dragstart=\"vm.start(type.type)\"\n        dnd-effect-allowed=\"move\"\n        dnd-dragend=\"vm.end()\"\n        ng-show=\"vm._showType\">\n        <a ng-click=\"vm._showType = !vm._showType;\n                    vm.selectType(type.type);\n                    $event.stopPropagation();\">\n            {{type.type}}\n        </a>\n    </li>\n    <li ng-show=\"!vm._showType\"\n        style=\"padding-left: 5px;padding-right: 20px;\">\n        <div class=\"col-xs-10\">\n            <input type=\"text\" class=\"input-xs\" ng-model=\"vm._filter\">\n        </div>\n        <div class=\"col-xs-2\">\n            <button type=\"button\" class=\"btn btn-xs btn-white\"\n                    ng-click=\"vm._showType = !vm._showType;$event.stopPropagation();\">\n                <i class=\"fa fa-times\"></i>\n            </button>\n        </div>\n    </li>\n    <li ng-repeat=\"element in vm.list\"\n        ng-init=\"_element = vm.convert(element)\"\n        dnd-draggable=\"_element\"\n        dnd-type=\"vm._type\"\n        dnd-effect-allowed=\"move\"\n        dnd-dragstart=\"vm.start(vm._type)\"\n        dnd-dragend=\"vm.end()\"\n        ng-show=\"!vm._showType\">\n        <a ng-click=\"\">{{vm.getTitle(element)}}</a>\n    </li>\n</ul>\n"

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _common = __webpack_require__(89);
	
	var _common2 = _interopRequireDefault(_common);
	
	__webpack_require__(96);
	
	var _module2 = __webpack_require__(14);
	
	var _module3 = _interopRequireDefault(_module2);
	
	var _module4 = __webpack_require__(99);
	
	var _module5 = _interopRequireDefault(_module4);
	
	__webpack_require__(15);
	
	var _element = __webpack_require__(101);
	
	var _element2 = _interopRequireDefault(_element);
	
	var _editor = __webpack_require__(102);
	
	var _editor2 = _interopRequireDefault(_editor);
	
	var _cmsWrapper = __webpack_require__(104);
	
	var _cmsWrapper2 = _interopRequireDefault(_cmsWrapper);
	
	__webpack_require__(105);
	
	var _fragment = __webpack_require__(106);
	
	var _fragment2 = _interopRequireDefault(_fragment);
	
	var _container = __webpack_require__(107);
	
	var _container2 = _interopRequireDefault(_container);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _module = _angular2.default.module('components.cmsMain', ['dndLists', 'ui.bootstrap', _common2.default, _module3.default, _module5.default, 'ui.bootstrap.contextMenu']).directive('cmsContainer', _container2.default).directive('cmsElement', _element2.default).directive('cmsEditor', _editor2.default).directive('cmsWrapper', _cmsWrapper2.default).directive('cmsFragment', _fragment2.default);
	
	exports.default = _module.name;

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _module2 = __webpack_require__(17);
	
	var _module3 = _interopRequireDefault(_module2);
	
	var _tpl = __webpack_require__(100);
	
	var _tpl2 = _interopRequireDefault(_tpl);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _module = _angular2.default.module('components.cmsElementEdit', [_module3.default]).directive('cmsElementEdit', directive).factory('formService', service);
	
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
	            $scope.type = type;
	
	            var post = function post() {
	                return $http.post('api/v1/' + type + '/' + ref, JsonFn.stringify($scope.model));
	            };
	            $scope.submit = function () {
	                post().then(function () {
	                    $uibModalInstance.close();
	                    console.log('update element successful');
	                }, function () {
	                    return $uibModalInstance.dismiss('cancel');
	                });
	            };
	
	            $scope.apply = function () {
	                post().then();
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
	            var modalInstance = $uibModal.open({
	                animation: false,
	                size: 'lg',
	                template: '\n                <div cms-element-edit\n                     cms-type="type"\n                     cms-model="model"\n                     cms-fields="fields"\n                     on-cancel="cancel()"\n                     on-submit="submit()"\n                     on-add="add()"\n                     on-apply="apply()">\n                </div>\n                ',
	                controller: modalCtrl,
	                windowClass: 'cms-window-placeholder'
	            });
	
	            if (cb) modalInstance.result.then(function () {
	                $timeout(cb, 100);
	            });
	        });
	    }
	
	    return {
	        edit: edit
	    };
	}
	
	exports.default = _module.name;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 100 */
/***/ function(module, exports) {

	module.exports = "<div class=\"cms-wrapper\"\n     ng-init=\"_showId = false;\">\n\n    <div style=\"position: absolute;right: 10px;\">\n        <button class=\"btn btn-xs btn-white\"\n                ng-click=\"_showId=!_showId;\"\n                ng-bind=\"_showId?'hide id':'show id'\">\n        </button>\n        <button type=\"button\" class=\"btn btn-xs btn-white\" ng-bind=\"vm.fullScreenText\"\n                ng-click=\"vm.changeScreenSize();\"></button>\n    </div>\n\n    <h3 style=\"font-weight: 300;\">Edit {{vm.cmsType}} {{_showId?'('+vm.cmsModel._id+')':''}}:</h3>\n\n    <form ng-submit=\"vm.onSubmit()\"\n          novalidate\n          class=\"cms-form form-horizontal\">\n\n        <uib-tabset ng-if=\"vm.isTab\">\n            <uib-tab ng-repeat=\"tab in vm.cmsFields\"\n                     heading=\"{{tab.title}}\"\n                     active=\"tab.active\">\n                <br>\n                <formly-form model=\"vm.cmsModel\" fields=\"tab.fields\"\n                             form=\"vm.form\" options=\"vm.options\">\n                </formly-form>\n            </uib-tab>\n        </uib-tabset>\n\n        <div>\n            <br>\n            <formly-form model=\"vm.cmsModel\" fields=\"vm.cmsFields\"\n                         form=\"vm.form\" options=\"vm.options\" ng-if=\"!vm.isTab\">\n            </formly-form>\n        </div>\n\n        <div class=\"form-group\">\n            <div class=\"col-sm-offset-2 col-sm-10\">\n                <button type=\"submit\" class=\"btn btn-primary submit-button\" ng-disabled=\"vm.form.$invalid\">Submit\n                </button>\n                <button type=\"button\" class=\"btn btn-primary\" ng-click=\"vm.onApply()\">Apply</button>\n                <button type=\"button\" class=\"btn btn-primary\" ng-click=\"vm.onAdd()\">Save and Add</button>\n                <button type=\"button\" class=\"btn btn-primary\" ng-click=\"vm.onCancel()\">Cancel</button>\n\n            </div>\n        </div>\n    </form>\n</div>"

/***/ },
/* 101 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	elementDirective.$inject = ['cms', '$compile', '$http', '$timeout'];
	function elementDirective(cms, $compile, $http, $timeout) {
	
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
	
	        var Type = undefined;
	
	        cms.getType(type, ref, function (model) {
	            if (!model) {
	                vm.dndMoved();
	                cms.updateContainerPage();
	                return;
	            }
	            vm.element.ref = model._id;
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
	                            var parentKey = _bind$fn.parentKey;
	                            var key = _bind$fn.key;
	
	                            scope.model[key] = Types[binding.BindType].fn[parentFn].bind(model);
	                        } else if (bind.choice === 'scope') {
	                            var key = bind.scope.key;
	
	                            scope.model[key] = e[key].bind(scope.parentModel);
	                        } else if (bind.choice === 'array') {
	                            var parentKey = bind.array.parentKey;
	
	                            scope.prepareElement = function (item) {
	                                var containers = JsonFn.clone(vm.element.containers);
	                                Types.Layout.fn.getTreeWithBinding(containers, bind.array.bind, item, binding.BindType);
	                                return { type: vm.element.type, ref: vm.element.ref, containers: containers, binding: {} };
	                            };
	                            template = '\n                                <div ng-repeat="item in parentModel.' + parentKey + ' track by $index"\n                                     ng-init="e = prepareElement(item)">\n                                     <div cms-element="e"></div>\n                                </div>';
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
	            scope.cmsInline = scope.$parent.vm.cmsInline === 'true';
	
	            scope.$parent.$watch('vm.cmsInline', function () {
	                scope.cmsInline = scope.$parent.vm.cmsInline === 'true';
	                reRender();
	            });
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
	                    fn($http.post, scope, type, k);
	                });
	
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
	            dndMoved: '&'
	        },
	        controllerAs: 'vm',
	        controller: function controller() {},
	        link: link
	    };
	}
	
	exports.default = elementDirective;

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _elementControl = __webpack_require__(103);
	
	var _elementControl2 = _interopRequireDefault(_elementControl);
	
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
	        template: _elementControl2.default
	    };
	}
	
	exports.default = directive;

/***/ },
/* 103 */
/***/ function(module, exports) {

	module.exports = "<div context-menu=\"menu\"\n     ng-style=\"{display:vm.cmsMenu === 'true'?'inline-block':'block'}\">\n    <div ng-if=\"vm.cmsMenu !== 'true'\">\n        <i class=\"fa fa-circle-o-notch cms-element-controll-icon\"\n           ng-mouseover=\"vm.showControl()\" ng-show=\"vm.getControlVisible()\"></i>\n        <div class=\"cms-element-controll\"\n             ng-mouseover=\"vm.__showControl = true\"\n             ng-mouseleave=\"vm.__showControl = false\"\n             ng-show=\"vm._showControl || vm.__showControl\">\n            <button type=\"button\" class=\"btn btn-sm btn-white\" ng-click=\"vm.cmsRefresh()\">\n                <i class=\"fa fa-refresh\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-sm btn-white\" ng-click=\"vm.remove()\">\n                <i class=\"fa fa-trash-o\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-sm btn-white\" ng-click=\"vm.removeByDatabase()\">\n                <i class=\"fa fa-trash\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-sm btn-white\" ng-click=\"vm.edit()\">\n                <i class=\"fa fa-pencil-square-o\"></i>\n            </button>\n        </div>\n    </div>\n    <ng-transclude></ng-transclude>\n</div>"

/***/ },
/* 104 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	directive.$inject = ['cms', '$compile', '$http', '$timeout'];
	function directive(cms, $compile, $http, $timeout) {
	
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
	
	
	                _.assign(scope, { fn: {}, model: vm.element, serverFn: {}, serverFnData: serverFnData });
	
	                _.each(fn, function (v, k) {
	                    return scope.fn[k] = v.bind(scope.model);
	                });
	                _.each(serverFn, function (fn, k) {
	                    return fn($http.post, scope, vm.cmsWrapper, k);
	                });
	
	                element.html(template);
	            } else {
	                var _vm$element = vm.element;
	                var list = _vm$element.list;
	                var _element = _vm$element.element;
	                var _fn = _vm$element.Fn;
	
	                var template = undefined;
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
	                        template = '\n                        <div ng-repeat="element in result track by $index">\n                            <div cms-fragment="{{layout.ID}}" model="element"></div>\n                        </div>\n                        ';
	                    } else {
	                        scope.e = { type: BindType };
	                        template = '\n                        <br>\n                        <div ng-repeat="element in result track by $index">\n                            <div cms-element="{type:type,ref:element._id}"></div>\n                        </div>\n                        ';
	                    }
	                } else if (!_element.null) {
	                    var BindType = _element.BindType;
	                    var layout = _element.layout;
	                    var model = _element.model;
	                    var query = _element.query;
	
	                    _.assign(scope, { model: model, layout: layout, type: BindType });
	                    template = '<br><div cms-element="{type:type,ref:vm.element.element.model._id}"></div>';
	                }
	                if (_fn) {
	                    vm.element.fn = _.mapValues(_fn(), function (f) {
	                        return f.bind(vm.element);
	                    });
	                }
	                element.html(template);
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
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(235);

/***/ },
/* 106 */
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
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _container = __webpack_require__(108);
	
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
/* 108 */
/***/ function(module, exports) {

	module.exports = "<i class=\"fa fa-circle-o-notch cms-element-controll-icon\"\n   ng-mouseover=\"vm.showControl()\"\n   ng-show=\"!vm._showControl && (vm.editState.editMode === 1)\"></i>\n<div class=\"cms-element-controll\"\n     ng-mouseover=\"vm.__showControl = true\"\n     ng-mouseleave=\"vm.__showControl = false\"\n     ng-show=\"vm._showControl || vm.__showControl\">\n    <button type=\"button\" class=\"btn btn-sm btn-white pull-right\" ng-click=\"\">\n        <i class=\"fa fa-plus\"></i>\n    </button>\n</div>\n<div class=\"{{vm.cmsInline === 'true'?'cms-containers-inline':'cms-containers'}}\"\n     dnd-list=\"vm.elements\"\n     dnd-disable-if=\"vm.elements.length > 0 && vm.elements[0].binding\"\n     dnd-allowed-types=\"vm.allowedTypes\"\n     dnd-horizontal-list=\"{{vm.cmsInline}}\"\n     ng-class=\"{'cms-panel-highlight':vm.highlight()}\">\n    <div ng-repeat=\"element in vm.elements\"\n         dnd-disable-if=\"element.binding\"\n         dnd-draggable=\"element\"\n         dnd-type=\"element.type\"\n         dnd-moved=\"vm.elements.splice($index, 1);\"\n         dnd-effect-allowed=\"move\"\n         dnd-dragstart=\"vm.start(element.type)\"\n         dnd-dragend=\"vm.end();\"\n         cms-element=\"element\"\n         cms-path=\"{{vm.path}}.elements[{{$index}}]\"\n         class=\"{{vm.cmsInline === 'true'?'cms-element':''}}\"\n    ></div>\n</div>\n"

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	__webpack_require__(15);
	
	__webpack_require__(52);
	
	__webpack_require__(53);
	
	__webpack_require__(54);
	
	__webpack_require__(55);
	
	__webpack_require__(56);
	
	var _tpl = __webpack_require__(110);
	
	var _tpl2 = _interopRequireDefault(_tpl);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _module = _angular2.default.module('components.cmsSitemap', ['ui.bootstrap', 'ngJsTree', 'ui.select']).directive('cmsSitemap', directive);
	
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
/* 110 */
/***/ function(module, exports) {

	module.exports = "<div class=\"cms-wrapper animated fadeInRight cms-sidebar\">\n    <button type=\"button\" class=\"btn btn-sm btn-white cms-close-position\"\n            ng-click=\"cancel()\">\n        <i class=\"fa fa-times\"></i>\n    </button>\n\n    <div class=\"col-xs-6 col-sm-4 pull-right cms-controll-panel-right\">\n        <div ng-show=\"node\">\n            <h4>Information: </h4>\n            <h5 style=\"word-break: break-all;\">Name: {{node.text}}</h5>\n            <h5 style=\"word-break: break-all;\">Type: {{node.type}}</h5>\n            <h5 style=\"word-break: break-all;\">Path: {{node.path}}</h5>\n            <br>\n\n            <div class=\"btn-group\">\n                <button class=\"btn btn-xs btn-white cms-btn-bottom\"\n                        ng-click=\"open()\">\n                    Open page\n                </button>\n                <button class=\"btn btn-xs btn-white cms-btn-bottom\"\n                        ng-click=\"deletePage()\">\n                    Delete\n                </button>\n            </div>\n            <form role=\"form\" ng-submit=\"makeTemplate(templateName);templateName = '';\">\n                <button class=\"btn btn-xs btn-white cms-btn-bottom\"\n                        type=\"submit\" style=\"position: absolute;right: 15px;\"\n                        ng-disabled=\"!templateName\">\n                    Make template page\n                </button>\n                <input ng-model=\"templateName\" type=\"text\" class=\"form-control input-xs\" placeholder=\"template name\">\n            </form>\n            <form role=\"form\" ng-submit=\"createPage(template.selected, pageName);pageName = '';\">\n                <ui-select class=\"cms-select\" ng-model=\"template.selected\" theme=\"bootstrap\" ng-disabled=\"disabled\"\n                           style=\"min-width: 60px;\">\n                    <ui-select-match placeholder=\"Select a template page\">{{$select.selected}}</ui-select-match>\n                    <ui-select-choices repeat=\"_template in templates\">\n                        {{_template}}\n                    </ui-select-choices>\n                </ui-select>\n                <button class=\"btn btn-xs btn-white cms-btn-bottom\"\n                        type=\"submit\" style=\"position: absolute;right: 15px;\"\n                        ng-disabled=\"!pageName || !template.selected\">\n                    Create new page\n                </button>\n                <input ng-model=\"pageName\" type=\"text\" class=\"form-control input-xs\" placeholder=\"page name\">\n            </form>\n\n            <form role=\"form\" ng-submit=\"renamePage(newPageName);newPageName = '';\">\n                <button class=\"btn btn-xs btn-white cms-btn-bottom\"\n                        type=\"submit\" style=\"position: absolute;right: 15px;\"\n                        ng-disabled=\"!newPageName\">\n                    Rename\n                </button>\n                <input ng-model=\"newPageName\" type=\"text\" class=\"form-control input-xs\" placeholder=\"page name\">\n            </form>\n\n            <form role=\"form\" ng-submit=\"onFileSelect(files);\">\n                <button class=\"btn btn-xs btn-white cms-btn-bottom\"\n                        type=\"submit\" style=\"position: absolute;right: 15px;\">\n                    Up\n                </button>\n                <input type=\"file\" ngf-select ng-model=\"files\"\n                       ngf-multiple=\"true\" name=\"file\" class=\"form-control input-xs\"\n                       placeholder=\"file upload\">\n            </form>\n\n        </div>\n    </div>\n\n    <h2>Sitemaps:</h2>\n\n    <div js-tree=\"treeConfig\" ng-model=\"tree\"\n         tree-events=\"changed:selectNode\"></div>\n</div>\n"

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _tpl = __webpack_require__(112);
	
	var _tpl2 = _interopRequireDefault(_tpl);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _module = _angular2.default.module('components.cmsEditState', ['ui.select']).directive('cmsEditState', directive);
	
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
/* 112 */
/***/ function(module, exports) {

	module.exports = "<div style=\"margin-top: 7px;cursor: pointer;\">\n    <ui-select data-ng-model=\"vm.editState.editMode\" theme=\"bootstrap\" on-select=\"vm.onSelect($item)\">\n        <ui-select-match placeholder=\"\">\n            {{$select.selected.label}}&nbsp;&nbsp;&nbsp;\n        </ui-select-match>\n        <ui-select-choices data-repeat=\"item.value as item in vm.modes | filterBy: ['label']: $select.search\">\n            <div ng-bind-html=\"item.label | highlight: $select.search\"></div>\n        </ui-select-choices>\n    </ui-select>\n</div>\n"

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	__webpack_require__(15);
	
	__webpack_require__(52);
	
	__webpack_require__(53);
	
	__webpack_require__(54);
	
	__webpack_require__(55);
	
	__webpack_require__(56);
	
	var _module2 = __webpack_require__(98);
	
	var _module3 = _interopRequireDefault(_module2);
	
	var _module4 = __webpack_require__(99);
	
	var _module5 = _interopRequireDefault(_module4);
	
	var _cmsList = __webpack_require__(114);
	
	var _cmsList2 = _interopRequireDefault(_cmsList);
	
	var _tpl = __webpack_require__(116);
	
	var _tpl2 = _interopRequireDefault(_tpl);
	
	var _QueryBuilder = __webpack_require__(94);
	
	var _QueryBuilder2 = _interopRequireDefault(_QueryBuilder);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _module = _angular2.default.module('components.cmsAdmin', ['ui.bootstrap', 'ngJsTree', 'ui.select', _module3.default, _module5.default]).directive('cmsAdmin', directive).directive('cmsList', _cmsList2.default);
	
	directive.$inject = ['cms', '$uibModal', '$timeout', 'formService'];
	
	function directive(cms, $uibModal, $timeout, formService) {
	    controller.$inject = [];
	    function controller() {
	        var vm = this;
	
	        vm.openSitemap = function () {
	            function modalCtrl($scope, $uibModalInstance) {
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
	
	                    $scope.list = null;
	                    $timeout(function () {
	                        if (changeAdminList) {
	                            $scope.tree = cms.getAdminList();
	                            $scope.treeConfig.version++;
	                        }
	
	                        // number of pages;
	                        var queryBuilder = new _QueryBuilder2.default();
	                        var params = queryBuilder.limit($scope.page.limit).page($scope.page.currentPage).query($scope.node.query).build();
	
	                        cms.loadElements($scope.node.type, function (list) {
	                            var Type = cms.data.types[$scope.node.type];
	                            $scope.list = list;
	                        }, params);
	
	                        if (!onlyChangePage) cms.countElements($scope.node.type, function (count) {
	                            $scope.page.size = count;
	                        }, params);
	                    });
	                };
	
	                // onclick
	                $scope.selectNode = function (e, select) {
	                    var _node = JsonFn.clone(select && select.node ? select.node.original : null);
	                    $scope.node = _.get($scope.tree, _node.path);
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
	
	                $scope.setting = function () {
	                    var config = _.find(Types.Config.list, { type: $scope.node.type });
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
	                    cms.exportAll();
	                };
	
	                $scope.import = function () {
	                    cms.importAll();
	                };
	
	                $scope.deleteAll = function () {
	                    cms.deleteElements($scope.node.type, function () {
	                        return $scope.refresh();
	                    });
	                };
	
	                // pagination
	                $scope.page = {
	                    limit: 50,
	                    currentPage: 1
	                };
	
	                $scope.setItemsPerPage = function (num) {
	                    $scope.itemsPerPage = num;
	                    $scope.currentPage = 1; //reset to first page
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
	        template: '<a ng-click="vm.openSitemap()">Admin</a>',
	        controllerAs: 'vm',
	        controller: controller
	    };
	}
	
	exports.default = _module.name;

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _cmsList = __webpack_require__(115);
	
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
/* 115 */
/***/ function(module, exports) {

	module.exports = ""

/***/ },
/* 116 */
/***/ function(module, exports) {

	module.exports = "<div class=\"cms-wrapper animated fadeInRight cms-sidebar cms-admin cms\">\n    <button type=\"button\" class=\"btn btn-sm btn-white cms-close-position\"\n            ng-click=\"cancel()\">\n        <i class=\"fa fa-times\"></i>\n    </button>\n\n    <div class=\"row\">\n        <div class=\"col-xs-12\">\n            <h2>Administration:</h2>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-xs-3 cms-panel\">\n            <div class=\"panel panel-default\">\n                <div class=\"panel-heading\">Types</div>\n                <div class=\"panel-body\">\n                    <div js-tree=\"treeConfig\" ng-model=\"tree\"\n                         tree-events=\"changed:selectNode\" tree=\"treeInstance\"></div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-xs-9 cms-panel\">\n            <div class=\"panel panel-default\">\n                <div class=\"panel-heading\">\n                    <button class=\"btn btn-white btn-xs pull-right\" ng-click=\"add()\">\n                        Add\n                    </button>\n\n                    <button class=\"btn btn-white btn-xs pull-right\" style=\"margin-right: 10px;\" ng-click=\"setting()\">\n                        Setting\n                    </button>\n\n                    <button class=\"btn btn-white btn-xs pull-right\" style=\"margin-right: 10px;\" ng-click=\"export()\">\n                        Export\n                    </button>\n\n                    <button class=\"btn btn-white btn-xs pull-right\" style=\"margin-right: 10px;\" ng-click=\"import()\">\n                        Import\n                    </button>\n\n                    <button class=\"btn btn-white btn-xs pull-right\" style=\"margin-right: 10px;\" ng-click=\"deleteAll()\">\n                        Delete all\n                    </button>\n\n                    <ui-select style=\"min-width: 50px;margin-left: 10px;margin-right: 10px;\" class=\"cms-select pull-right\" data-ng-model=\"page.limit\" theme=\"bootstrap\" on-select=\"refresh()\">\n                        <ui-select-match placeholder=\"\">{{$select.selected}}</ui-select-match>\n                        <ui-select-choices data-repeat=\"item in [5,50,100,200]\">{{item}}</ui-select-choices>\n                    </ui-select>\n\n                    <label class=\"pull-right\"> Show : </label>\n\n                    List\n                </div>\n                <div class=\"panel-body\" ng-if=\"node\">\n                    <table class=\"table\">\n                        <thead>\n                        <tr>\n                            <th ng-repeat=\"col in node.columns track by $index\" ng-bind=\"col\"></th>\n                            <th>Edit</th>\n                        </tr>\n                        </thead>\n                        <tbody>\n                        <tr ng-repeat=\"element in list\">\n                            <td ng-repeat=\"col in node.columns track by $index\" ng-if=\"list.length <= 50\">\n                                <span cms-direct-editable=\"model.{{col}}\"\n                                      cms-value=\"element[col]\"\n                                      cms-ref=\"{{element._id}}\"\n                                      cms-type=\"{{node.type}}\"></span>\n                            </td>\n                            <td ng-repeat=\"col in node.columns\" ng-bind=\"get(element, col)\"\n                                ng-if=\"list.length > 50\"></td>\n                            <td>\n                                <div cms-editor=\"{ref: element._id, type:node.type}\" cms-remove=\"remove(element)\"></div>\n                            </td>\n                        </tr>\n                        </tbody>\n                    </table>\n\n                    <uib-pagination ng-show=\"page.size > 1\" total-items=\"page.size\" ng-model=\"page.currentPage\"\n                                    class=\"pagination-sm\"\n                                    items-per-page=\"page.limit\"\n                                    ng-change=\"refresh(true)\"></uib-pagination>\n\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>\n"

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map