var e=function(e){return e.reduce((function(e,t){return e[t]=t,e}),{})},t=e(["display","edit"]),n=e(["input","rawInput","show","close","invalid"]),i=e(["boolean","checkbox","input","password","radio","select","textarea","url"]),a={name:"QuickEdit",props:{buttonOkText:{type:String,default:"Ok"},buttonCancelText:{type:String,default:"Cancel"},emptyText:{type:String,default:"Empty"},booleanYesText:{type:String,default:"Yes"},booleanNoText:{type:String,default:"No"},type:{type:String,default:i.input},options:{type:Array,default:function(){return[]}},value:{type:[String,Array,Boolean,Number],default:""},placeholderValue:{type:String,default:""},classes:{type:Object,default:function(){return null}},validator:{type:Function,default:null},showButtons:{type:Boolean,default:!0},startOpen:{type:Boolean,default:!1},formatMultiple:{type:Function,default:function(e){return e.join(", ")}}},computed:{isEmpty:function(){return""===this.prettyValue||null===this.prettyValue},isEditing:function(){return t.edit===this.inputState},isEnabled:function(){return!this.$attrs.disabled&&""!==this.$attrs.disabled},isRequired:function(){return this.$attrs.required||""===this.$attrs.required},isMultiple:function(){return this.displayOptions.length&&(this.types.select===this.type||this.types.checkbox===this.type||this.types.radio===this.type)},prettyValue:function(){return this.isMultiple?Array.isArray(this.theValue)?this.formatMultiple(this.theValue.map(this.getDisplayOption)):this.getDisplayOption(this.theValue):this.theValue},displayOptions:function(){var e=this.options[0];return e&&"string"==typeof e?this.options.map((function(e){return{value:e,text:e}})):this.options},displayValue:function(){return this.types.boolean===this.type?this.theValue?this.booleanYesText:this.booleanNoText:this.types.password===this.type?"•".repeat(8):this.isEmpty?this.emptyText:this.prettyValue},classNames:function(){return Object.assign({},this.defaultClasses,this.classes)},tabIndex:function(){return this.$attrs.tabindex||0}},watch:{value:function(e){this.setValue(e)}},data:function(){return{inputState:this.startOpen?t.edit:t.display,theValue:"",inputValue:"",types:i,defaultClasses:{buttonCancel:"vue-quick-edit__button vue-quick-edit__button--cancel",buttonOk:"vue-quick-edit__button vue-quick-edit__button--ok",buttons:"vue-quick-edit__buttons",input:"vue-quick-edit__input",link:"vue-quick-edit__link",isClickable:"vue-quick-edit__link--is-clickable",isEmpty:"vue-quick-edit__link--is-empty",isRequired:"vue-quick-edit__link--is-required",wrapper:"vue-quick-edit"}}},methods:{handleClick:function(){this.isEnabled&&(this.types.boolean===this.type?(this.theValue=!this.theValue,this.$emit(n.input,this.theValue)):this.show())},show:function(e){void 0===e&&(e=!0),this.inputValue=this.theValue,this.inputState=t.edit,this.$emit(n.show,this.theValue),e&&this.focus()},close:function(e){void 0===e&&(e=!0),this.inputState=t.display,this.$emit(n.close,this.theValue),e&&this.focus()},ok:function(e){if(void 0===e&&(e=!0),this.validator){var t=this.validator(this.inputValue);if(t)return void this.$emit(n.invalid,this.theValue,t)}this.theValue=this.inputValue,this.$emit(n.input,this.theValue),this.$emit(n.rawInput,this.inputValue),this.close(e)},focus:function(){var e=this;setTimeout((function(){var t=e.isEditing?"input,select,textarea":"span",n=e.$refs.el&&e.$refs.el.querySelector(t);n&&n.focus()}),0)},setValue:function(e){this.theValue=e,this.inputValue=e},getDisplayOption:function(e){var t=this.displayOptions.find((function(t){return t.value===e}));return t?t.text:""}},created:function(){this.setValue(this.value)}};function u(e,t,n,i,a,u,s,l,o,r){"boolean"!=typeof s&&(o=l,l=s,s=!1);var d,c="function"==typeof n?n.options:n;if(e&&e.render&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns,c._compiled=!0,a&&(c.functional=!0)),i&&(c._scopeId=i),u?(d=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,o(e)),e&&e._registeredComponents&&e._registeredComponents.add(u)},c._ssrRegister=d):t&&(d=s?function(e){t.call(this,r(e,this.$root.$options.shadowRoot))}:function(e){t.call(this,l(e))}),d)if(c.functional){var p=c.render;c.render=function(e,t){return d.call(t),p(e,t)}}else{var y=c.beforeCreate;c.beforeCreate=y?[].concat(y,d):[d]}return n}var s,l="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function o(e){return function(e,t){return function(e,t){var n=l?t.media||"default":e,i=r[n]||(r[n]={ids:new Set,styles:[]});if(!i.ids.has(e)){i.ids.add(e);var a=t.source;if(t.map&&(a+="\n/*# sourceURL="+t.map.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t.map))))+" */"),i.element||(i.element=document.createElement("style"),i.element.type="text/css",t.media&&i.element.setAttribute("media",t.media),void 0===s&&(s=document.head||document.getElementsByTagName("head")[0]),s.appendChild(i.element)),"styleSheet"in i.element)i.styles.push(a),i.element.styleSheet.cssText=i.styles.filter(Boolean).join("\n");else{var u=i.ids.size-1,o=document.createTextNode(a),d=i.element.childNodes;d[u]&&i.element.removeChild(d[u]),d.length?i.element.insertBefore(o,d[u]):i.element.appendChild(o)}}}(e,t)}}var r={};var d=a,c=function(){var e,t=this,n=t.$createElement,i=t._self._c||n;return i("div",{ref:"el",class:t.classNames.wrapper},[t.isEditing&&t.isEnabled?[t.types.select===t.type?i("select",t._b({directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"}],class:t.classNames.input,attrs:{tabindex:t.tabIndex},on:{keypress:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.ok(!0)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"escape",void 0,e.key,void 0)||e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:t.close(!0)}],change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));t.inputValue=e.target.multiple?n:n[0]}}},"select",t.$attrs,!1),[i("option",{directives:[{name:"show",rawName:"v-show",value:t.$attrs.placeholder,expression:"$attrs.placeholder"}],domProps:{value:t.placeholderValue}},[t._v(t._s(t.$attrs.placeholder))]),t._v(" "),t._l(t.displayOptions,(function(e){return i("option",{key:e.value,attrs:{disabled:e.disabled},domProps:{value:e.value}},[t._v(t._s(e.text))])}))],2):t.types.textarea===t.type?i("textarea",t._b({directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"}],class:t.classNames.input,attrs:{tabindex:t.tabIndex},domProps:{value:t.inputValue},on:{keypress:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:e.ctrlKey?t.ok(!0):null},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"escape",void 0,e.key,void 0)||e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:t.close(!0)}],input:function(e){e.target.composing||(t.inputValue=e.target.value)}}},"textarea",t.$attrs,!1)):t.types.radio===t.type||t.types.checkbox===t.type?t._l(t.displayOptions,(function(e){return[i("label",{key:e.value},[t._v("\n        "+t._s(e.text)+"\n        "),"checkbox"===t.type?i("input",{directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"}],attrs:{disabled:e.disabled,tabindex:t.tabIndex,type:"checkbox"},domProps:{value:e.value,checked:Array.isArray(t.inputValue)?t._i(t.inputValue,e.value)>-1:t.inputValue},on:{keypress:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.ok(!0)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"escape",void 0,e.key,void 0)||e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:t.close(!0)}],change:function(n){var i=t.inputValue,a=n.target,u=!!a.checked;if(Array.isArray(i)){var s=e.value,l=t._i(i,s);a.checked?l<0&&(t.inputValue=i.concat([s])):l>-1&&(t.inputValue=i.slice(0,l).concat(i.slice(l+1)))}else t.inputValue=u}}}):"radio"===t.type?i("input",{directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"}],attrs:{disabled:e.disabled,tabindex:t.tabIndex,type:"radio"},domProps:{value:e.value,checked:t._q(t.inputValue,e.value)},on:{keypress:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.ok(!0)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"escape",void 0,e.key,void 0)||e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:t.close(!0)}],change:function(n){t.inputValue=e.value}}}):i("input",{directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"}],attrs:{disabled:e.disabled,tabindex:t.tabIndex,type:t.type},domProps:{value:e.value,value:t.inputValue},on:{keypress:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.ok(!0)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"escape",void 0,e.key,void 0)||e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:t.close(!0)}],input:function(e){e.target.composing||(t.inputValue=e.target.value)}}})])]})):"checkbox"===t.type?i("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"}],class:t.classNames.input,attrs:{tabindex:t.tabIndex,type:"checkbox"},domProps:{checked:Array.isArray(t.inputValue)?t._i(t.inputValue,null)>-1:t.inputValue},on:{keypress:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.ok(!0)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"escape",void 0,e.key,void 0)||e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:t.close(!0)}],change:function(e){var n=t.inputValue,i=e.target,a=!!i.checked;if(Array.isArray(n)){var u=t._i(n,null);i.checked?u<0&&(t.inputValue=n.concat([null])):u>-1&&(t.inputValue=n.slice(0,u).concat(n.slice(u+1)))}else t.inputValue=a}}},"input",t.$attrs,!1)):"radio"===t.type?i("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"}],class:t.classNames.input,attrs:{tabindex:t.tabIndex,type:"radio"},domProps:{checked:t._q(t.inputValue,null)},on:{keypress:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.ok(!0)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"escape",void 0,e.key,void 0)||e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:t.close(!0)}],change:function(e){t.inputValue=null}}},"input",t.$attrs,!1)):i("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"}],class:t.classNames.input,attrs:{tabindex:t.tabIndex,type:t.type},domProps:{value:t.inputValue},on:{keypress:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.ok(!0)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"escape",void 0,e.key,void 0)||e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:t.close(!0)}],input:function(e){e.target.composing||(t.inputValue=e.target.value)}}},"input",t.$attrs,!1)),t._v(" "),t.showButtons?i("div",{class:t.classNames.buttons},[i("button",{class:t.classNames.buttonOk,attrs:{title:t.buttonOkText},on:{click:function(e){return t.ok(!0)}}},[t._t("button-ok",[t._v(t._s(t.buttonOkText))])],2),t._v(" "),i("button",{class:t.classNames.buttonCancel,attrs:{title:t.buttonCancelText},on:{click:function(e){return t.close(!0)}}},[t._t("button-cancel",[t._v(t._s(t.buttonCancelText))])],2)]):t._e()]:[t._t("prepend"),t._v(" "),i("span",{class:(e={},e[t.classNames.link]=!0,e[t.classNames.isClickable]=t.isEnabled,e[t.classNames.isEmpty]=t.isEmpty,e[t.classNames.isRequired]=t.isRequired&&t.isEmpty,e),attrs:{tabindex:!!t.isEnabled&&t.tabIndex},on:{click:t.handleClick,keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleClick(e)}}},[t._t("default",[t._v(t._s(t.displayValue))],{value:t.displayValue,rawValue:t.theValue})],2),t._v(" "),t._t("append")]],2)};c._withStripped=!0;var p=u({render:c,staticRenderFns:[]},(function(e){e&&e("data-v-63f6990f_0",{source:".vue-quick-edit__link {\n  white-space: pre-wrap;\n  color: #0088cc;\n}\n.vue-quick-edit__link--is-clickable {\n  border-bottom: 1px dashed #0088cc;\n  cursor: pointer;\n}\n.vue-quick-edit__link--is-clickable:hover {\n  color: #2a6496;\n  border-color: #2a6496;\n}\n.vue-quick-edit__link--is-empty {\n  font-style: italic;\n  color: gray;\n}\n.vue-quick-edit__link--is-required {\n  color: #dc3545;\n}\n.vue-quick-edit__input {\n  background-color: #f9f9f9;\n  color: #333;\n  border: 1px solid #ccc;\n  height: 32px;\n  padding: 0;\n}\n.vue-quick-edit__buttons {\n  margin-top: 8px;\n}\n.vue-quick-edit__button {\n  height: 34px;\n  min-width: 34px;\n  border: 1px solid #ccc;\n}\n.vue-quick-edit__button--ok {\n  color: #fff;\n  background-color: #3276b1;\n  border-color: #357ebd;\n}\n.vue-quick-edit__button--cancel {\n  color: #333;\n  margin-left: 8px;\n  background-color: #fff;\n}\n[multiple].vue-quick-edit__input,\ntextarea.vue-quick-edit__input {\n  height: unset;\n  min-height: 64px;\n  display: block;\n}\n.vue-quick-edit__input:not(textarea):not([multiple]) + .vue-quick-edit__buttons,\nlabel + .vue-quick-edit__buttons {\n  display: inline;\n  margin-left: 8px;\n}",map:void 0,media:void 0})}),d,void 0,!1,void 0,!1,o,void 0,void 0);function y(e){y.installed||(y.installed=!0,e.component("QuickEdit",p))}var h={install:y},f=null;"undefined"!=typeof window?f=window.Vue:"undefined"!=typeof global&&(f=global.Vue),f&&f.use(h);export default p;export{y as install};
