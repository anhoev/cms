const fs = require('fs');
const path = require('path');
const jsdom = require('jsdom');
const sass = require('sass.js');
const axios = require('axios').default;
const terser = require('terser')
const {transform} = require('@babel/core');
const babelPluginSyntaxImportMeta = require('@babel/plugin-syntax-import-meta');
const babelPluginSyntaxDynamicImport = require('@babel/plugin-syntax-dynamic-import');
const babelPluginTransformModulesCommonJs = require('@babel/plugin-transform-modules-commonjs');

const {JSDOM} = jsdom;
const langProcessor = {};

const STRING_TO_REPLACE_NORMALIZE = "function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {\r\n" +
  "      if (typeof shadowMode !== 'boolean') {\r\n" +
  "          createInjectorSSR = createInjector;\r\n" +
  "          createInjector = shadowMode;\r\n" +
  "          shadowMode = false;\r\n" +
  "      }\r\n" +
  "      // Vue.extend constructor export interop.\r\n" +
  "      const options = typeof script === 'function' ? script.options : script;\r\n" +
  "      // render functions\r\n" +
  "      if (template && template.render) {\r\n" +
  "          options.render = template.render;\r\n" +
  "          options.staticRenderFns = template.staticRenderFns;\r\n" +
  "          options._compiled = true;\r\n" +
  "          // functional template\r\n" +
  "          if (isFunctionalTemplate) {\r\n" +
  "              options.functional = true;\r\n" +
  "          }\r\n" +
  "      }\r\n" +
  "      // scopedId\r\n" +
  "      if (scopeId) {\r\n" +
  "          options._scopeId = scopeId;\r\n" +
  "      }\r\n" +
  "      let hook;\r\n" +
  "      if (moduleIdentifier) {\r\n" +
  "          // server build\r\n" +
  "          hook = function (context) {\r\n" +
  "              // 2.3 injection\r\n" +
  "              context =\r\n" +
  "                  context || // cached call\r\n" +
  "                      (this.$vnode && this.$vnode.ssrContext) || // stateful\r\n" +
  "                      (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional\r\n" +
  "              // 2.2 with runInNewContext: true\r\n" +
  "              if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {\r\n" +
  "                  context = __VUE_SSR_CONTEXT__;\r\n" +
  "              }\r\n" +
  "              // inject component styles\r\n" +
  "              if (style) {\r\n" +
  "                  style.call(this, createInjectorSSR(context));\r\n" +
  "              }\r\n" +
  "              // register component module identifier for async chunk inference\r\n" +
  "              if (context && context._registeredComponents) {\r\n" +
  "                  context._registeredComponents.add(moduleIdentifier);\r\n" +
  "              }\r\n" +
  "          };\r\n" +
  "          // used by ssr in case component is cached and beforeCreate\r\n" +
  "          // never gets called\r\n" +
  "          options._ssrRegister = hook;\r\n" +
  "      }\r\n" +
  "      else if (style) {\r\n" +
  "          hook = shadowMode\r\n" +
  "              ? function (context) {\r\n" +
  "                  style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));\r\n" +
  "              }\r\n" +
  "              : function (context) {\r\n" +
  "                  style.call(this, createInjector(context));\r\n" +
  "              };\r\n" +
  "      }\r\n" +
  "      if (hook) {\r\n" +
  "          if (options.functional) {\r\n" +
  "              // register for functional component in vue file\r\n" +
  "              const originalRender = options.render;\r\n" +
  "              options.render = function renderWithStyleInjection(h, context) {\r\n" +
  "                  hook.call(context);\r\n" +
  "                  return originalRender(h, context);\r\n" +
  "              };\r\n" +
  "          }\r\n" +
  "          else {\r\n" +
  "              // inject component registration as beforeCreate hook\r\n" +
  "              const existing = options.beforeCreate;\r\n" +
  "              options.beforeCreate = existing ? [].concat(existing, hook) : [hook];\r\n" +
  "          }\r\n" +
  "      }\r\n" +
  "      return script;\r\n" +
  "  }"

const STRING_TO_REPLACE_ADDSTYLE = "let HEAD;\r\n" +
  "  const styles = {};\r\n" +
  "  function addStyle(id, css) {\r\n" +
  "      const group = isOldIE ? css.media || 'default' : id;\r\n" +
  "      const style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });\r\n" +
  "      if (!style.ids.has(id)) {\r\n" +
  "          style.ids.add(id);\r\n" +
  "          let code = css.source;\r\n" +
  "          if (css.map) {\r\n" +
  "              // https://developer.chrome.com/devtools/docs/javascript-debugging\r\n" +
  "              // this makes source maps inside style tags work properly in Chrome\r\n" +
  "              code += '\\n/*# sourceURL=' + css.map.sources[0] + ' */';\r\n" +
  "              // http://stackoverflow.com/a/26603875\r\n" +
  "              code +=\r\n" +
  "                  '\\n/*# sourceMappingURL=data:application/json;base64,' +\r\n" +
  "                      btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +\r\n" +
  "                      ' */';\r\n" +
  "          }\r\n" +
  "          if (!style.element) {\r\n" +
  "              style.element = document.createElement('style');\r\n" +
  "              style.element.type = 'text/css';\r\n" +
  "              if (css.media)\r\n" +
  "                  style.element.setAttribute('media', css.media);\r\n" +
  "              if (HEAD === undefined) {\r\n" +
  "                  HEAD = document.head || document.getElementsByTagName('head')[0];\r\n" +
  "              }\r\n" +
  "              HEAD.appendChild(style.element);\r\n" +
  "          }\r\n" +
  "          if ('styleSheet' in style.element) {\r\n" +
  "              style.styles.push(code);\r\n" +
  "              style.element.styleSheet.cssText = style.styles\r\n" +
  "                  .filter(Boolean)\r\n" +
  "                  .join('\\n');\r\n" +
  "          }\r\n" +
  "          else {\r\n" +
  "              const index = style.ids.size - 1;\r\n" +
  "              const textNode = document.createTextNode(code);\r\n" +
  "              const nodes = style.element.childNodes;\r\n" +
  "              if (nodes[index])\r\n" +
  "                  style.element.removeChild(nodes[index]);\r\n" +
  "              if (nodes.length)\r\n" +
  "                  style.element.insertBefore(textNode, nodes[index]);\r\n" +
  "              else\r\n" +
  "                  style.element.appendChild(textNode);\r\n" +
  "          }\r\n" +
  "      }\r\n" +
  "  }"

langProcessor.es6 = function (script) {
  return transform(script, {
    // Enables an access to `this` of the Component
    // so that this transform can obtain the proper information
    // of the instance of Component
    moduleId: this.name,
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
  let inputList = {}
  return {
    name: 'plugins',
    buildStart (options) {
      inputList[options.input] = {}
    },
    async load ( id ) {
      if (!(id in inputList)) return null;
      const comp = new Component();
      const data = fs.readFileSync(id, 'utf8');
      const f = await comp.load(data).normalize();
      if (id.slice(-8) === "shit.vue") {
      }
      inputList[id].template = f.template;
      inputList[id].styles = f.styles;
      return '<script>\n' + f.script.getContent() + '\n<' + '/script> \n';
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
    }
  }
}