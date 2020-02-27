const fs = require('fs');
const path = require('path');
const jsdom = require('jsdom');
const sass = require('sass.js');
const axios = require('axios').default;
const terser = require('terser')
const babelPluginSyntaxImportMeta = require('@babel/plugin-syntax-import-meta');
const babelPluginSyntaxDynamicImport = require('@babel/plugin-syntax-dynamic-import');
const babelPluginTransformModulesCommonJs = require('@babel/plugin-transform-modules-commonjs');

const {JSDOM} = jsdom;
const langProcessor = {};

langProcessor.es6 = function (script) {
  return script;
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
        } else if (eltCx !== null && eltCx.elt.tagName.toLowerCase() === 'script' && langProcessor.hasOwnProperty('es6')) {
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
    this.module = {exports: {}};
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

module.exports = function () {
  let inputList = {};
  return {
    name: 'plugins',
    buildStart(options) {
      inputList[options.input] = {};
    },
    resolveId(id, importer) {
      if (!(importer in inputList))
        return;
      if (!id.includes('.vue') && !id.includes('script.js'))
        return;
      id = path.resolve(path.dirname(importer), id);
      return id;
    },
    async load(id) {
      if (id.includes('?name=script.js')) {
        return inputList[id.replace('?name=script.js', '')].script.getContent();
      }
      if (!(id in inputList)) return null;
      const comp = new Component();
      const data = fs.readFileSync(id, 'utf8');
      inputList[id] = await comp.load(data).normalize();
      const fileName = path.relative(path.dirname(id), id).split(path.sep).shift();
      return `export * from '${fileName}?name=script.js'\nimport script from '${fileName}?name=script.js'\nexport default script`;
    },
    generateBundle(options, bundle, isWrite) {
      for (let keys in bundle) {
        const compiler = new Compiler('');
        if (bundle[keys].code) {
          let code = bundle[keys].code;
          // code = code.replace(STRING_TO_REPLACE_NORMALIZE, 'const normalizeComponent = require("../normalizeComponent")');
          // code = code.replace(STRING_TO_REPLACE_ADDSTYLE, 'const addStyle = require("../addStyle")')
          let minified = terser.minify(code, {
            output: {
              ascii_only: true
            },
            compress: {
              pure_funcs: ['makeMap']
            }
          }).code;
          compiler.append('<script>\n' + code + '\n<' + '/script> \n')
        }
        const id = bundle[keys].facadeModuleId;
        if (inputList[id].template) {
          compiler.append(inputList[id].template.getOuter()).append('\n');
        }
        if (inputList[id].styles) {
          compiler.append((function () {
            const style = new Compiler('');
            inputList[id].styles.reduce((acc, item) => acc.append(`<style${item.elt.hasAttribute('scoped') ? ' scoped' : ''}>${item.getContent()}</style>`).append('\n'), style);
            return style;
          })());
        }
        bundle[keys].code = compiler.toString();
      }
    },
    transform(source, filename) {
      if (filename in inputList) {
        return `//do_nothing;\n${source}`;
      }
      return null;
    }
  }
}
