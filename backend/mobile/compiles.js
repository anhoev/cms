const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const fs = require('fs');
const path = require('path');
const { transform } = require('@babel/core');
const babelPluginTransformModulesCommonJs = require('@babel/plugin-transform-modules-commonjs');
const babelPluginSyntaxDynamicImport = require('@babel/plugin-syntax-dynamic-import');
const babelPluginSyntaxImportMeta = require('@babel/plugin-syntax-import-meta');
const sass = require('sass.js');
const axios = require('axios').default;

const langProcessor = {};

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

langProcessor.scss = function (scssText) {
  return new Promise(function (resolve, reject) {
    sass.compile(scssText, function (result) {
      if (result.status === 0) {
        resolve(result.text);
      } else {
        reject(result);
      }
    });
  });
};

class Component {
  constructor(name) {
    this.name = name;
    this.template = null;
    this.script = null;
    this.styles = [];
  }

  load(content) {
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
  }

  _normalizeSection(eltCx) {

    var p;

    if (eltCx === null || !eltCx.elt.hasAttribute('src')) {

      p = Promise.resolve(null);
    } else {

      p = axios.get(eltCx.elt.getAttribute('src'))
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
          if (!langProcessor[lang.toLowerCase()]) {
            return content;
          }
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
  }

  normalize() {

    return Promise.all(Array.prototype.concat(
      this._normalizeSection(this.template),
      this._normalizeSection(this.script),
      this.styles.map(this._normalizeSection)
    ))
      .then(function () {

        return this;
      }.bind(this));
  }
}

class TemplateContext {
  constructor(component, elt) {
    this.component = component;
    this.elt = elt;
  }

  getContent() {
    return this.elt.innerHTML;
  }

  getOuter() {

    return this.elt.outerHTML;
  }

  setContent(content) {
    this.elt.innerHTML = content;
  }
}

class ScriptContext {
  constructor(component, elt) {
    this.component = component;
    this.elt = elt;
    this.module = { exports: {} };
  }

  getContent() {
    return this.elt.textContent;
  }

  setContent(content) {
    this.elt.textContent = content;
  }
}

class StyleContext {
  constructor(component, elt) {
    this.component = component;
    this.elt = elt;
  }

  getContent() {
    return this.elt.textContent;
  }

  setContent(content) {
    this.elt.textContent = content;
  }

  getOuter() {
    return this.elt.outerHTML;
  }
}

class Compiler {
  constructor(str) {
    this.str = str;
  }

  append(s) {
    this.str = this.str + s;
    return this;
  }

  toString() {
    return this.str;
  }
}

function compile(_path) {
  const content = fs.readFileSync(path.join(_path), 'utf-8');
  return compileContent(content);
}

function compileContent(content) {
  const compiler = new Compiler('');
  const component = new Component('test');
  return component.load(content).normalize().then(c => {
    compiler.append(c.template.getOuter()).append('\n').append('<script>\n' + c.script.getContent() + '\n<' + '/script> \n')
      .append((function () {
        const style = new Compiler('');
        c.styles.reduce((acc, item) => acc.append(`<style${item.elt.hasAttribute('scoped') ? ' scoped' : ''}>${item.getContent()}</style>`).append('\n'), style);
        return style;
      })());
    return compiler.toString();
  });
}

// test
compile('plugins/test-plugin/test2.vue').then(a => console.log(a));

module.exports.compile = compile;
module.exports.compileContent = compileContent;
