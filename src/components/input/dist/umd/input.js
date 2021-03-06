(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.input = factory());
}(this, (function () { 'use strict';

  function ready(callback){
    if (document.readyState!='loading') callback();
    else if (document.addEventListener) document.addEventListener('DOMContentLoaded', callback);
    else document.attachEvent('onreadystatechange', function(){
        if (document.readyState=='complete') callback();
    });
    }
    
    ready(function(){
    const head = document.head || document.getElementsByTagName('head')[0];
    const style = document.createElement('style');
    style.innerHTML = ".svg-icon {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}";
    head.appendChild(style);
    
    const svgNode = document.createElement('div');
    svgNode.style.height = 0;
    svgNode.style.width = 0; 
    svgNode.style.position = 'absolute'; 
    svgNode.style.visibility = 'hidden';
    svgNode.setAttribute('aria-hidden', 'true');
    
    
    svgNode.innerHTML = `<svg>
    <symbol id="icon-arrow-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="design-iconfont"><path d="M23.28,35.42l-20-20A1,1,0,0,1,3.3,14l1.42-1.43a1,1,0,0,1,1.43,0L24,30.43,41.85,12.58a1,1,0,0,1,1.43,0L44.7,14a1,1,0,0,1,0,1.42l-20,20a1,1,0,0,1-1.44,0Z"></path></symbol>
    <symbol id="icon-close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="design-iconfont"><path d="M21.71,23.28l20-20a1,1,0,0,1,1.42,0l1.43,1.42a1,1,0,0,1,0,1.43L26.7,24,44.55,41.85a1,1,0,0,1,0,1.43L43.12,44.7a1,1,0,0,1-1.42,0l-20-20a1,1,0,0,1,0-1.44Z"></path><path d="M26.29,23.28l-20-20a1,1,0,0,0-1.42,0L3.45,4.72a1,1,0,0,0,0,1.43L21.3,24,3.45,41.85a1,1,0,0,0,0,1.43L4.88,44.7a1,1,0,0,0,1.42,0l20-20a1,1,0,0,0,0-1.44Z"></path></symbol>
    <symbol id="icon-arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="design-iconfont"><path d="M35.42,23.28l-20-20A1,1,0,0,0,14,3.3L12.58,4.72a1,1,0,0,0,0,1.43L30.43,24,12.58,41.85a1,1,0,0,0,0,1.43L14,44.7a1,1,0,0,0,1.42,0l20-20a1,1,0,0,0,0-1.44Z"></path></symbol>
    <symbol id="icon-arrow-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="design-iconfont"><path d="M12.58,23.28l20-20A1,1,0,0,1,34,3.3l1.43,1.42a1,1,0,0,1,0,1.43L17.57,24,35.42,41.85a1,1,0,0,1,0,1.43L34,44.7a1,1,0,0,1-1.42,0l-20-20a1,1,0,0,1,0-1.44Z"></path></symbol>
    <symbol id="icon-arrow-up" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="design-iconfont"><path d="M23.28,12.58l-20,20A1,1,0,0,0,3.3,34l1.42,1.43a1,1,0,0,0,1.43,0L24,17.57,41.85,35.42a1,1,0,0,0,1.43,0L44.7,34a1,1,0,0,0,0-1.42l-20-20a1,1,0,0,0-1.44,0Z"></path></symbol>
    <symbol id="icon-maximize" class="icon design-iconfont" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M804.41210938 219.58789062v584.82421875H219.58789062V219.58789062h584.82421875m73.125-73.12499999H146.46289062v731.07421875h731.07421875V146.46289062z"></path></symbol>
    <symbol id="icon-resize" class="icon design-iconfont" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M938.666667 938.666667 853.333333 938.666667 853.333333 853.333333 938.666667 853.333333 938.666667 938.666667M938.666667 768 853.333333 768 853.333333 682.666667 938.666667 682.666667 938.666667 768M768 938.666667 682.666667 938.666667 682.666667 853.333333 768 853.333333 768 938.666667M768 768 682.666667 768 682.666667 682.666667 768 682.666667 768 768M597.333333 938.666667 512 938.666667 512 853.333333 597.333333 853.333333 597.333333 938.666667M938.666667 597.333333 853.333333 597.333333 853.333333 512 938.666667 512 938.666667 597.333333Z"></path></symbol>
    <symbol id="icon-minimize" class="icon design-iconfont" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M175.616 463.36h668.16c14.336 0 25.6 11.264 25.6 25.6v51.2c0 14.336-11.264 25.6-25.6 25.6H175.616c-14.336 0-25.6-11.264-25.6-25.6v-51.2c-0.512-14.336 11.264-25.6 25.6-25.6z"></path></symbol>
    <symbol id="icon-window" class="icon design-iconfont" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M98 273h655.3v655.3H98V273z m87.4 87.3v480.5h480.5V360.3H185.4z"></path><path d="M840.6 185.6H360.1V98.2H928v567.9h-87.4z"></path></symbol>
    <symbol id="icon-arrow-next" class="icon design-iconfont" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><defs><style></style></defs><path d="M455.168 884.337778l354.531556-372.508445-354.190223-372.224L534.186667 56.945778l432.981333 455.111111-78.734222 82.659555-354.417778 372.565334z m-398.222222 0l354.531555-372.508445-354.190222-372.224 78.734222-82.659555 432.924445 455.111111-78.734222 82.659555-354.474667 372.565334z"></path></symbol>
    <symbol id="icon-arrow-prev" class="icon design-iconfont" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><defs><style></style></defs><path d="M568.547556 139.605333L214.357333 512 568.888889 884.394667 490.154667 967.111111l-354.474667-372.565333L56.888889 512l432.924444-455.111111z m398.222222 0L612.579556 512 967.111111 884.394667 888.376889 967.111111l-354.531556-372.565333L455.111111 512l432.924445-455.111111z"></path></symbol>
    <symbol id="icon-check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="design-iconfont"><path d="M5,26.59a1.32,1.32,0,0,1-.14-1.77l1-1.26a1.31,1.31,0,0,1,1.72-.29l8.66,5.78A1.54,1.54,0,0,0,17.88,29L40.76,10.41a1.38,1.38,0,0,1,1.77.07l.56.56a1.26,1.26,0,0,1,0,1.76l0,0L18.48,37.33a2,2,0,0,1-2.8-.06Z"></path></symbol>
    <symbol id="icon-dot" class="icon design-iconfont" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><defs><style></style></defs><path d="M206.479 512c0 168.734 136.787 305.521 305.521 305.521s305.521-136.787 305.521-305.521c0-168.734-136.787-305.521-305.521-305.521-168.734 0-305.521 136.787-305.521 305.521z"></path></symbol>
    <symbol id="icon-clear" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32.001" class="design-iconfont"><path d="M5387.941-5635.216a15.894,15.894,0,0,1-11.313-4.687,15.894,15.894,0,0,1-4.687-11.313,15.894,15.894,0,0,1,4.687-11.313,15.894,15.894,0,0,1,11.313-4.687,15.894,15.894,0,0,1,11.313,4.687,15.893,15.893,0,0,1,4.686,11.313,15.893,15.893,0,0,1-4.686,11.313A15.894,15.894,0,0,1,5387.941-5635.216Zm-6.082-22.887-1.142,1.14,5.833,5.833-5.833,5.833,1.142,1.141,5.833-5.831,5.831,5.83,1.142-1.141-5.831-5.831,5.83-5.832-1.141-1.141-5.831,5.83Z" transform="translate(-5371.941 5667.216)"></path></symbol>
    <symbol id="icon-gps-fill" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="design-iconfont"><path d="M24,48h0L10.69,33.94A20.39,20.39,0,0,1,5.18,19.88,20.39,20.39,0,0,1,10.69,5.82a18.11,18.11,0,0,1,25.6-1c.35.32.69.66,1,1a20.35,20.35,0,0,1,5.52,14.06A20.33,20.33,0,0,1,37.3,33.94Zm.27-37.16a8.33,8.33,0,0,0-8.07,8.52,8.32,8.32,0,0,0,8.07,8.52,8.31,8.31,0,0,0,8.07-8.52A8.33,8.33,0,0,0,24.27,10.84Z"></path></symbol>
    <symbol id="icon-date" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="design-iconfont"><path d="M42,5.63H37.94V1.88a1.88,1.88,0,1,0-3.75,0V5.63H13.87V1.88a2,2,0,0,0-2-1.88,2,2,0,0,0-2,1.88V5.63H6a6,6,0,0,0-6,6.05V42H0a6,6,0,0,0,6,6H42a6,6,0,0,0,6-6V11.68h0A6,6,0,0,0,42,5.63Zm-36,4H9.83v3.47a2,2,0,0,0,4,0V9.66H34.19v3.47a1.88,1.88,0,0,0,3.75,0V9.66H42a2,2,0,0,1,2,2v7.07H4V11.68A2,2,0,0,1,6,9.66ZM42,44H6a2,2,0,0,1-2-2V22.5H44V41.94A2,2,0,0,1,42,44Z"></path><path d="M33.37,32.18H14.63a1.88,1.88,0,1,0,0,3.75H33.37a1.88,1.88,0,0,0,0-3.75Z"></path></symbol>
    <symbol id="icon-delete" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="design-iconfont"><path d="M20,18a2,2,0,0,0-2,2V33a2,2,0,0,0,4,0V20A2,2,0,0,0,20,18Z"></path><path d="M28,18a2,2,0,0,0-2,2V33a2,2,0,0,0,4,0V20A2,2,0,0,0,28,18Z"></path><path d="M44,8H33.2L30.54,3.05a2,2,0,0,0-1.76-1H19.29a2,2,0,0,0-1.75,1L14.82,8H4a2,2,0,0,0,0,4H7V44a2,2,0,0,0,2,2H39a2,2,0,0,0,2-2V12h3a2,2,0,0,0,0-4ZM20.47,6h7.11l1.08,2H19.38ZM37,42H11V12H37Z"></path></symbol>
    <symbol id="icon-loading" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="design-iconfont"><path d="M24,4h-.06a1.75,1.75,0,0,0-1.23.56,1.78,1.78,0,0,0-.48,1.26v8.62A1.78,1.78,0,0,0,24,16.15h.05a1.74,1.74,0,0,0,1.24-.55,1.81,1.81,0,0,0,.48-1.26V5.72A1.78,1.78,0,0,0,24,4Z"></path><path d="M30.67,19.09h0a1.75,1.75,0,0,0,1.23-.51l6-6a1.77,1.77,0,0,0,0-2.5,1.79,1.79,0,0,0-2.49,0l-6.05,6a1.79,1.79,0,0,0,1.26,3Z"></path><path d="M42.23,22.27H33.58a1.78,1.78,0,0,0-1.15,3.07,1.76,1.76,0,0,0,1.2.48h8.65a1.78,1.78,0,0,0-.05-3.55Z"></path><path d="M31.94,29.5A1.8,1.8,0,0,0,30.69,29a1.88,1.88,0,0,0-1.26.52,1.79,1.79,0,0,0,0,2.51l6,6a1.71,1.71,0,0,0,1.24.52h0A1.74,1.74,0,0,0,38,38a1.77,1.77,0,0,0,0-2.5Z"></path><path d="M25.77,33.64a1.77,1.77,0,0,0-3.54.1v8.54A1.78,1.78,0,0,0,23.94,44H24a1.76,1.76,0,0,0,1.21-.48,1.79,1.79,0,0,0,.56-1.24h0V33.64Z"></path><path d="M17.31,29h0a1.75,1.75,0,0,0-1.25.52l-6,6A1.78,1.78,0,0,0,10,38a1.77,1.77,0,0,0,2.5,0l6-6a1.78,1.78,0,0,0,0-2.51A1.76,1.76,0,0,0,17.31,29Z"></path><path d="M16.13,24a1.73,1.73,0,0,0-1.81-1.72H5.72a1.78,1.78,0,0,0,0,3.55h8.65A1.77,1.77,0,0,0,16.13,24Z"></path><path d="M12.54,10.06a1.79,1.79,0,0,0-2.49,0,1.77,1.77,0,0,0,0,2.5l6,6a1.78,1.78,0,0,0,1.25.53h0a1.75,1.75,0,0,0,1.24-.52,1.78,1.78,0,0,0,0-2.51Z"></path></symbol>
  </svg>`;

    if (document.body.firstChild) {
      document.body.insertBefore(svgNode, document.body.firstChild);
    } else {
      document.body.appendChild(svgNode);
    }

  });

  //
  var script$1 = {
    name: 'm-icon',
    props: {
      size: {
        type: Number | String,
        default: 18
      },
      color: {
        type: String,
        default: ''
      },
      spin: {
        type: Boolean,
        default: false
      },
      name: {
        type: String,
        default: ''
      }
    },
    mounted () {
      this.$refs.use.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', `#icon-${this.name}`);
    }
  };

  function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
      if (typeof shadowMode !== 'boolean') {
          createInjectorSSR = createInjector;
          createInjector = shadowMode;
          shadowMode = false;
      }
      // Vue.extend constructor export interop.
      const options = typeof script === 'function' ? script.options : script;
      // render functions
      if (template && template.render) {
          options.render = template.render;
          options.staticRenderFns = template.staticRenderFns;
          options._compiled = true;
          // functional template
          if (isFunctionalTemplate) {
              options.functional = true;
          }
      }
      // scopedId
      if (scopeId) {
          options._scopeId = scopeId;
      }
      let hook;
      if (moduleIdentifier) {
          // server build
          hook = function (context) {
              // 2.3 injection
              context =
                  context || // cached call
                      (this.$vnode && this.$vnode.ssrContext) || // stateful
                      (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
              // 2.2 with runInNewContext: true
              if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                  context = __VUE_SSR_CONTEXT__;
              }
              // inject component styles
              if (style) {
                  style.call(this, createInjectorSSR(context));
              }
              // register component module identifier for async chunk inference
              if (context && context._registeredComponents) {
                  context._registeredComponents.add(moduleIdentifier);
              }
          };
          // used by ssr in case component is cached and beforeCreate
          // never gets called
          options._ssrRegister = hook;
      }
      else if (style) {
          hook = shadowMode
              ? function (context) {
                  style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
              }
              : function (context) {
                  style.call(this, createInjector(context));
              };
      }
      if (hook) {
          if (options.functional) {
              // register for functional component in vue file
              const originalRender = options.render;
              options.render = function renderWithStyleInjection(h, context) {
                  hook.call(context);
                  return originalRender(h, context);
              };
          }
          else {
              // inject component registration as beforeCreate hook
              const existing = options.beforeCreate;
              options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
          }
      }
      return script;
  }

  /* script */
  const __vue_script__$1 = script$1;
  /* template */
  var __vue_render__$1 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "span",
      {
        staticClass: "m-icon",
        style:
          "width:" +
          _vm.size +
          "px;height:" +
          _vm.size +
          "px;color:" +
          _vm.color +
          ";",
        attrs: { spin: _vm.spin }
      },
      [
        _c(
          "svg",
          {
            staticClass: "icon",
            attrs: { "aria-hidden": "true", fill: "currentColor" }
          },
          [_c("use", { ref: "use" })]
        )
      ]
    )
  };
  var __vue_staticRenderFns__$1 = [];
  __vue_render__$1._withStripped = true;

    /* style */
    const __vue_inject_styles__$1 = undefined;
    /* scoped */
    const __vue_scope_id__$1 = "data-v-d6b08aba";
    /* module identifier */
    const __vue_module_identifier__$1 = undefined;
    /* functional template */
    const __vue_is_functional_template__$1 = false;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$1 = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
      __vue_inject_styles__$1,
      __vue_script__$1,
      __vue_scope_id__$1,
      __vue_is_functional_template__$1,
      __vue_module_identifier__$1,
      false,
      undefined,
      undefined,
      undefined
    );

  //
  var script = {
    name: 'm-input',
    components: {
      MIcon: __vue_component__$1
    },
    props: {
      value: {
        type: String,
        default: ''
      },
      placeholder: {
        type: String,
        default: '?????????'
      },
      conner: {
        type: Boolean,
        default: true
      },
      rounder: {
        type: Boolean,
        default: false
      },
      maxLength: {
        type: Number,
        default: 0
      },
      type: {
        type: String,
        default: 'text'
      },
      prefixLabel: {
        type: String,
        default: ''
      },
      prefixIcon: {
        type: String,
        default: ''
      },
      suffixLabel: {
        type: String,
        default: ''
      },
      suffixIcon: {
        type: String,
        default: ''
      },
      suffixColor: {
        type: String,
        default: ''
      },
      suffixSize: {
        type: String | Number,
        default: 14
      },
      prefixColor: {
        type: String,
        default: ''
      },
      prefixSize: {
        type: String | Number,
        default: 14
      },
      size: {
        type: String | Number,
        default: ''
      }
    },
    data () {
      return {
        data: this.value
      }
    },
    methods: {
      onDataChange (v) {
        this.data = this.maxLength ? v.subString(0, this.maxLength) : v;
        this.$emit('input', this.data);
      }
    },
    watch: {
      'data': 'onDataChange'
    }
  };

  /* script */
  const __vue_script__ = script;
  /* template */
  var __vue_render__ = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      {
        staticClass: "m-input",
        style: "height: " + _vm.size + "px;",
        attrs: { conner: _vm.conner, rounder: _vm.rounder }
      },
      [
        _vm.prefixLabel || _vm.prefixIcon
          ? _c("div", { staticClass: "m-input-prefix" }, [
              _c(
                "span",
                {
                  style:
                    "font-size: " +
                    _vm.prefixSize +
                    "px;color: " +
                    _vm.prefixColor +
                    ";"
                },
                [
                  _vm.prefixLabel
                    ? _c("span", [_vm._v(_vm._s(_vm.prefixLabel))])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.prefixIcon
                    ? _c("m-icon", {
                        attrs: {
                          size: _vm.prefixSize,
                          color: _vm.prefixColor,
                          name: _vm.prefixIcon
                        }
                      })
                    : _vm._e()
                ],
                1
              )
            ])
          : _vm._e(),
        _vm._v(" "),
        _c("div", { staticClass: "m-input-content" }, [
          _vm.type === "checkbox"
            ? _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.data,
                    expression: "data"
                  }
                ],
                staticClass: "m-input-core",
                attrs: { placeholder: _vm.placeholder, type: "checkbox" },
                domProps: {
                  checked: Array.isArray(_vm.data)
                    ? _vm._i(_vm.data, null) > -1
                    : _vm.data
                },
                on: {
                  change: function($event) {
                    var $$a = _vm.data,
                      $$el = $event.target,
                      $$c = $$el.checked ? true : false;
                    if (Array.isArray($$a)) {
                      var $$v = null,
                        $$i = _vm._i($$a, $$v);
                      if ($$el.checked) {
                        $$i < 0 && (_vm.data = $$a.concat([$$v]));
                      } else {
                        $$i > -1 &&
                          (_vm.data = $$a
                            .slice(0, $$i)
                            .concat($$a.slice($$i + 1)));
                      }
                    } else {
                      _vm.data = $$c;
                    }
                  }
                }
              })
            : _vm.type === "radio"
            ? _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.data,
                    expression: "data"
                  }
                ],
                staticClass: "m-input-core",
                attrs: { placeholder: _vm.placeholder, type: "radio" },
                domProps: { checked: _vm._q(_vm.data, null) },
                on: {
                  change: function($event) {
                    _vm.data = null;
                  }
                }
              })
            : _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.data,
                    expression: "data"
                  }
                ],
                staticClass: "m-input-core",
                attrs: { placeholder: _vm.placeholder, type: _vm.type },
                domProps: { value: _vm.data },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.data = $event.target.value;
                  }
                }
              })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "m-input-suffix" }, [
          _c(
            "span",
            {
              style:
                "font-size: " +
                _vm.suffixSize +
                "px;color: " +
                _vm.suffixColor +
                ";"
            },
            [
              _vm.maxLength
                ? _c("span", { staticClass: "m-input-length" }, [
                    _vm._v(_vm._s(_vm.data.length) + "/" + _vm._s(_vm.maxLength))
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c("span", { staticClass: "m-input-clear" }),
              _vm._v(" "),
              _vm.suffixLabel
                ? _c("span", [_vm._v(_vm._s(_vm.suffixLabel))])
                : _vm._e(),
              _vm._v(" "),
              _vm.suffixIcon
                ? _c("m-icon", {
                    attrs: {
                      color: _vm.suffixColor,
                      size: _vm.suffixSize,
                      name: _vm.suffixIcon
                    }
                  })
                : _vm._e()
            ],
            1
          )
        ])
      ]
    )
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

    /* style */
    const __vue_inject_styles__ = undefined;
    /* scoped */
    const __vue_scope_id__ = "data-v-1dbe6ad2";
    /* module identifier */
    const __vue_module_identifier__ = undefined;
    /* functional template */
    const __vue_is_functional_template__ = false;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__ = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      false,
      undefined,
      undefined,
      undefined
    );

  __vue_component__.install = Vue => {
    Vue.components(__vue_component__.name, __vue_component__);
  };

  return __vue_component__;

})));
