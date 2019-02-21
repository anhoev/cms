const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const fs = require('fs');
const path = require('path');
const { transform } = require('@babel/core');
const babelPluginTransformModulesCommonJs = require('@babel/plugin-transform-modules-commonjs');
const babelPluginSyntaxDynamicImport = require('@babel/plugin-syntax-dynamic-import');
const babelPluginSyntaxImportMeta = require('@babel/plugin-syntax-import-meta');

function Component(name) {
  this.name = name;
  this.template = null;
  this.script = null;
  this.styles = [];
  this._scopeId = '';
}

Component.prototype = {
  load: function (content) {

    const frag = JSDOM.fragment(content);
    for (let it = frag.firstChild; it; it = it.nextSibling) {

      switch (it.nodeName) {
        case 'TEMPLATE':
          this.template = new TemplateContext(this, it);
          break;
        case 'SCRIPT':
          this.script = new ScriptContext(this, it);
          break;
        case 'STYLE':
          this.styles.push(new StyleContext(this, it));
          break;
      }
    }
    return this;
  },

  _normalizeSection: function (eltCx) {

    var p;

    if (eltCx === null || !eltCx.elt.hasAttribute('src')) {

      p = Promise.resolve(null);
    } else {

      p = httpVueLoader.httpRequest(eltCx.elt.getAttribute('src'))
        .then(function (content) {

          eltCx.elt.removeAttribute('src');
          return content;
        });
    }

    return p
      .then(function (content) {

        if (eltCx !== null && eltCx.elt.hasAttribute('lang')) {

          var lang = eltCx.elt.getAttribute('lang');
          eltCx.elt.removeAttribute('lang');
          return langProcessor[lang.toLowerCase()].call(this, content === null ? eltCx.getContent() : content);
        } else if (eltCx.elt.tagName.toLowerCase() === 'script' && langProcessor.hasOwnProperty('es6')) {
          return langProcessor['es6'].call(this, content === null ? eltCx.getContent() : content);
        }
        return content;
      }.bind(this))
      .then(function (content) {

        if (content !== null) {
          eltCx.setContent(content);
        }
      });
  },

  normalize: function () {

    return Promise.all(Array.prototype.concat(
      this._normalizeSection(this.template),
      this._normalizeSection(this.script),
      this.styles.map(this._normalizeSection)
    ))
      .then(function () {

        return this;
      }.bind(this));
  }
};


function TemplateContext(component, elt) {

  this.component = component;
  this.elt = elt;
}

TemplateContext.prototype = {
  getContent: function () {
    return this.elt.innerHTML;
  },
  getOuter: function () {

    return this.elt.outerHTML;
  },
  setContent: function (content) {
    this.elt.innerHTML = content;
  }
};

function ScriptContext(component, elt) {

  this.component = component;
  this.elt = elt;
  this.module = { exports: {} };
}

ScriptContext.prototype = {

  getContent: function () {

    return this.elt.textContent;
  },
  setContent: function (content) {

    this.elt.textContent = content;
  }
};

function StyleContext(component, elt) {

  this.component = component;
  this.elt = elt;
}

StyleContext.prototype = {
  getContent: function () {
    return this.elt.textContent;
  },
  setContent: function (content) {
    this.withBase(function () {
      this.elt.textContent = content;
    });
  },
  getOuter: function () {
    return this.elt.outerHTML;
  }
};

langProcessor = {};

langProcessor.es6 = function (script) {
  return transform(script, {
    // Enables an access to `this` of the Component
    // so that this transform can obtain the proper information
    // of the instance of Component
    moduleId: this.name,
    plugins: [
      babelPluginSyntaxImportMeta,
      babelPluginSyntaxDynamicImport,
      babelPluginTransformModulesCommonJs
    ]
  }).code;
};

function _normalizeSection(eltCx) {

  var p;

  if (eltCx === null || !eltCx.elt.hasAttribute('src')) {

    p = Promise.resolve(null);
  } else {

    p = httpVueLoader.httpRequest(eltCx.elt.getAttribute('src'))
      .then(function (content) {

        eltCx.elt.removeAttribute('src');
        return content;
      });
  }

  return p
    .then(function (content) {

      if (eltCx !== null && eltCx.elt.hasAttribute('lang')) {

        var lang = eltCx.elt.getAttribute('lang');
        eltCx.elt.removeAttribute('lang');
        return langProcessor[lang.toLowerCase()].call(this, content === null ? eltCx.getContent() : content);
      } else if (eltCx.elt.tagName.toLowerCase() === 'script' && httpVueLoader.langProcessor.hasOwnProperty('es6')) {
        return langProcessor['es6'].call(this, content === null ? eltCx.getContent() : content);
      }
      return content;
    }.bind(this))
    .then(function (content) {

      if (content !== null) {
        eltCx.setContent(content);
      }
    });
}

function compile(_path) {
  const content = fs.readFileSync(path.join(_path), 'utf-8');
  const component = new Component('test');
  return component.load(content).normalize().then(c => {
    let newVue = '';
    newVue += `${c.template.getOuter()}`;
    /* eslint-disable */
    newVue += '<script>\n' + c.script.getContent() + '\n<' + '/script> \n';
    newVue += c.styles.reduce((acc, item) => acc + `<style${item.elt.hasAttribute('scoped') ? ' scoped' : ''}>${item.getContent()}</style>
`, '');
    return newVue;
  });
}

// compile('plugins/hello.txt');

module.exports = compile;
