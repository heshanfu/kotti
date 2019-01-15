(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{469:function(t,s,e){"use strict";e.r(s);var a={name:"KtInputNumberDoc",data:function(){return{number1:12,number2:0,number3:0,number4:0}}},n=e(0),l=Object(n.a)(a,function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",[e("h1",[t._v("Input Number")]),t._v(" "),t._m(0),t._v(" "),e("h2",[t._v("Basic Usage")]),t._v(" "),e("div",{staticClass:"element-example white"},[e("KtInputNumber",{model:{value:t.number1,callback:function(s){t.number1=s},expression:"number1"}}),t._v(" "),e("pre",{domProps:{textContent:t._s("value: "+t.number1)}})],1),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),e("h3",[t._v("Range and Step")]),t._v(" "),e("div",{staticClass:"element-example white"},[e("KtInputNumber",{attrs:{max:12,min:0,step:.2},model:{value:t.number2,callback:function(s){t.number2=s},expression:"number2"}})],1),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),e("h3",[t._v("Disabled")]),t._v(" "),e("div",{staticClass:"element-example white"},[e("KtInputNumber",{attrs:{disabled:""},model:{value:t.number3,callback:function(s){t.number3=s},expression:"number3"}})],1),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),e("h2",[t._v("Style")]),t._v(" "),e("h3",[t._v("Show Max Number")]),t._v(" "),e("div",{staticClass:"element-example white"},[e("KtInputNumber",{attrs:{showMaxNumber:"",max:12},model:{value:t.number4,callback:function(s){t.number4=s},expression:"number4"}})],1),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),e("h3",[t._v("Full width")]),t._v(" "),e("div",{staticClass:"element-example white"},[e("KtInputNumber",{attrs:{max:12},model:{value:t.number4,callback:function(s){t.number4=s},expression:"number4"}}),t._v(" "),e("KtInputNumber",{attrs:{fullWidth:"",max:12},model:{value:t.number4,callback:function(s){t.number4=s},expression:"number4"}})],1),t._v(" "),t._m(10),t._v(" "),t._m(11)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Input Number is an input field which only supports the "),s("code",[this._v("Number")]),this._v(" type.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Bind a variable to "),s("code",[this._v("v-model")]),this._v(" in "),s("code",[this._v("<KtInputNumber>")]),this._v(".")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("pre",[e("code",{staticClass:"language-html"},[e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("KtInputNumber")]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"number1"')]),t._v(" />")]),t._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("You can use the "),s("code",[this._v("min")]),this._v(" and "),s("code",[this._v("max")]),this._v(" attributes to specify a minimum and maximum value.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The "),s("code",[this._v("step")]),this._v(" value specifies the step amount, which is "),s("code",[this._v("1")]),this._v(" by default.")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("pre",[e("code",{staticClass:"language-html"},[e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("KtInputNumber")]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"number2"')]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v(":max")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"12"')]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v(":min")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"0"')]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v(":step")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"0.2"')]),t._v(" />")]),t._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("When the "),s("code",[this._v("disabled")]),this._v(" attribute is "),s("code",[this._v("true")]),this._v(", the user cannot change the value.")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("pre",[e("code",{staticClass:"language-html"},[e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("KtInputNumber")]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"number3"')]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("disabled")]),t._v(" />")]),t._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("When "),s("code",[this._v("max")]),this._v(" attribute has a value, and "),s("code",[this._v("showMaxNumber")]),this._v(" is "),s("code",[this._v("true")]),this._v(", the max number shows beside the value.")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("pre",[e("code",{staticClass:"language-html"},[e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("KtInputNumber")]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"number4"')]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("showMaxNumber")]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v(":max")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"12"')]),t._v(" />")]),t._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("You can use "),s("code",[this._v("fullWidth")]),this._v(" to set the width of input to 100%.")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("pre",[e("code",{staticClass:"language-html"},[e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("KtInputNumber")]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"number4"')]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v(":max")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"12"')]),t._v(" />")]),t._v("\n"),e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("KtInputNumber")]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"number4"')]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("fullWidth")]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v(":max")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"12"')]),t._v(" />")]),t._v("\n")])])}],!1,null,null,null);l.options.__file="inputnumber.vue";s.default=l.exports}}]);