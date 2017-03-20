'use strict';
var jsdom = require("jsdom"),
    path = require('path');

var ENVIORMENT_NOT_READY = "Angular environment not yet ready";

function ngCompile(modules, angularPath, settings, cb) {

    if (!(modules instanceof Array)) {
        modules = [];
    }

    this.modules = modules;
    var _self = this;
    this.modules.unshift({name: 'ng', path: path.join(__dirname, '../../node_modules/angular/angular.js')});
    this.ready = false;

    if (!ngCompile.prototype.envReady) throw new Error(ENVIORMENT_NOT_READY);

    global['Node'] = class {
    };
    this._modules = [];
    this.modules.forEach(function (module) {
        require(path.resolve(process.cwd(), module.path));
        if (module.name === "ng") global.angular = global.window.angular;
        _self._modules.push(module.name);
    });

    this.window = global.window;
    this.angular = window.angular;

    cb(this);

    window.angular.injector(this._modules).invoke(function ($rootScope, $compile, $interpolate) {
        _self.services = {$rootScope: $rootScope, $compile: $compile, $interpolate: $interpolate};
        _self.ready = true;
        if (typeof _self.readyCallback === "function") _self.readyCallback();
    });
}

ngCompile.prototype.onEnvReady = function (callback) {
    if (ngCompile.prototype.envReady)
        callback();
    else
        ngCompile.prototype.envReadyCallback = callback;
}
ngCompile.prototype.envReady = false;
ngCompile.prototype.env = jsdom.env({
    html: '<p></p>',
    done: function (errors, window) {
        /* istanbul ignore if */
        if (errors)
            console.log(errors);
        else {
            global.window = window;
            global.document = window.document;
            ngCompile.prototype.envReady = true;
            if (ngCompile.prototype.envReadyCallback) ngCompile.prototype.envReadyCallback();
        }
    }
});
ngCompile.prototype.onReady = function (callback) {
    if (this.ready)
        callback();
    else
        this.readyCallback = callback;
}
ngCompile.prototype.$new = function () {
    if (!this.ready) throw new Error(ENVIORMENT_NOT_READY);
    return this.services.$rootScope.$new()
}
ngCompile.prototype.$interpolate = function (html) {
    if (!this.ready) throw new Error(ENVIORMENT_NOT_READY);
    return this.services.$interpolate(html)
}
ngCompile.prototype.$compile = function (html, init) {
    if (!this.ready) throw new Error(ENVIORMENT_NOT_READY);
    if (typeof html === "object") html = (html.length ? html[0].outerHTML : html.outerHTML);
    var $scope = this.$new(), _self = this;
    const fns = _self.services.$rootScope.fns = [];
    if (init) init(_self.services.$rootScope);
    return function*(context) {
        _self.angular.extend($scope, context);
        let elem = _self.services.$compile(html)($scope);
        elem = _self.angular.element('<div/>').append(elem);

        $scope.$apply();
        while (fns.length > 0) {
            for (const {fn, args} of fns) yield* fn(...args);
            fns.length = 0;
            $scope.$apply();
        }

        const str = elem[0].innerHTML;
        $scope.$destroy();
        $scope = null;
        return str;
    }
}

module.exports = ngCompile;