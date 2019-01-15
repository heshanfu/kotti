(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{470:function(s,t,a){"use strict";a.r(t);var l={name:"KtInputDoc",data:function(){return{v1:"Jony One O",v2:"",v3:"Jony Three O",v4:4,v5:"email@example.com",dialog:{enabled:!0,message:"Help Message",position:"right",html:""}}}},e=a(0),n=Object(e.a)(l,function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h1",[s._v("Inputs")]),s._v(" "),a("h2",[s._v("Label")]),s._v(" "),a("div",{staticClass:"element-example"},[a("KtInput",{attrs:{label:"Name",labelFor:"Name",placeholder:"Add your name"},model:{value:s.v1,callback:function(t){s.v1=t},expression:"v1"}}),s._v(" "),a("KtInput",{attrs:{placeholder:"Add your name"}})],1),s._v(" "),s._m(0),s._v(" "),s._m(1),s._v(" "),s._m(2),s._v(" "),a("h2",[s._v("Icon")]),s._v(" "),a("div",{staticClass:"element-example"},[a("KtInput",{attrs:{placeholder:"Add your name",icon:"user"},model:{value:s.v3,callback:function(t){s.v3=t},expression:"v3"}}),s._v(" "),a("KtInput",{attrs:{iconPosition:"right",placeholder:"Add your name",icon:"user"},model:{value:s.v3,callback:function(t){s.v3=t},expression:"v3"}})],1),s._v(" "),s._m(3),s._v(" "),s._m(4),s._v(" "),a("h2",[s._v("Icon Dialog")]),s._v(" "),a("div",{staticClass:"element-example"},[a("KtInput",{attrs:{placeholder:"Serach your name",icon:"circle_question",iconPosition:"right",dialog:"Available"},model:{value:s.v3,callback:function(t){s.v3=t},expression:"v3"}}),s._v(" "),a("KtInput",{attrs:{placeholder:"Serach your name",icon:"check",iconPosition:"right"},model:{value:s.v3,callback:function(t){s.v3=t},expression:"v3"}},[a("div",{attrs:{slot:"dialog"},slot:"dialog"},[a("h4",[s._v("Availabe")]),s._v(" "),a("span",[s._v("This user name is availabe")])])])],1),s._v(" "),s._m(5),s._v(" "),s._m(6),s._v(" "),a("h2",[s._v("Addon Text")]),s._v(" "),a("div",{staticClass:"element-example"},[a("KtInput",{attrs:{label:"Name",placeholder:"Add your name",addonText:"User Name"},model:{value:s.v3,callback:function(t){s.v3=t},expression:"v3"}})],1),s._v(" "),s._m(7),s._v(" "),s._m(8),s._v(" "),a("h2",[s._v("Type")]),s._v(" "),a("div",{staticClass:"element-example"},[a("KtInput",{attrs:{type:"number",label:"Number",step:"0.1",placeholder:"Add your name"},model:{value:s.v4,callback:function(t){s.v4=t},expression:"v4"}}),s._v(" "),a("KtInput",{attrs:{type:"email",label:"Email"},model:{value:s.v5,callback:function(t){s.v5=t},expression:"v5"}})],1),s._v(" "),s._m(9),s._v(" "),s._m(10),s._v(" "),a("h2",[s._v("Disabled")]),s._v(" "),a("div",{staticClass:"element-example white"},[a("KtInput",{attrs:{label:"Disabled Input",placeholder:s.v5,disabled:""}})],1),s._v(" "),s._m(11),s._v(" "),s._m(12),s._v(" "),a("h2",[s._v("Validate")]),s._v(" "),a("div",{staticClass:"element-example"},[a("KtInput",{attrs:{label:"Success Input",placeholder:s.v5,validate:"success",validateText:"Your user name is availabe"}}),s._v(" "),a("KtInput",{attrs:{label:"Error Input",placeholder:s.v5,validate:"error",validateText:"Your input is invalid"}}),s._v(" "),a("KtInput",{attrs:{label:"Warning Input",placeholder:s.v5,validate:"warning",validateText:"Your input is wrong"}})],1),s._v(" "),s._m(13),s._v(" "),s._m(14),s._v(" "),a("h2",[s._v("Required")]),s._v(" "),a("div",{staticClass:"element-example"},[a("KtInput",{attrs:{placeholder:s.v5,label:"Required Input",required:""}})],1),s._v(" "),s._m(15),s._v(" "),s._m(16),s._v(" "),a("h2",[s._v("Compact")]),s._v(" "),a("p",[s._v("In order to save vertical space on the page when many inputs need, and icon only input can not deliver clear information,\nyou can choose compact input style.")]),s._v(" "),s._m(17),s._v(" "),a("div",{staticClass:"element-example"},[a("KtInput",{attrs:{label:"Full Name",placeholder:"Your first name and last name",isCompact:""}}),s._v(" "),a("KtInput",{attrs:{label:"Address",isCompact:""}}),s._v(" "),a("KtInput",{attrs:{label:"Company",isCompact:""}})],1),s._v(" "),s._m(18),s._v(" "),s._m(19)])},[function(){var s=this.$createElement,t=this._self._c||s;return t("p",[t("code",[this._v("label")]),this._v(" props accept "),t("code",[this._v("String")]),this._v(" and show on the top of "),t("code",[this._v("input")]),this._v(".")])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[t("code",[this._v("labelFor")]),this._v(" define the "),t("code",[this._v("for")]),this._v(" attributes in "),t("code",[this._v("label")]),this._v(".")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("KtInput")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"v1"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("label")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"Name"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("labelFor")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"Name"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("placeholder")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"Add your name"')]),s._v("/>")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("KtInput")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("placeholder")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"Add your name"')]),s._v("/>")]),s._v("\n")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[t("code",[this._v("icon")]),this._v(" accepts any "),t("code",[this._v("String")]),this._v(" from yoco, the default location of icon is "),t("code",[this._v("left")]),this._v(",\nto change the location, set "),t("code",[this._v('iconPosition="right"')])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("KtInput")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"v3"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("placeholder")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"Add your name"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("icon")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"user"')]),s._v("/>")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("KtInput")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"v2"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("placeholder")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"Serach your name"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("iconPosition")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"right"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("icon")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"search"')]),s._v("/>")]),s._v("\n")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("If you want show addition information of the input field, "),t("code",[this._v("dialog")]),this._v(" accepts "),t("code",[this._v("String")]),this._v(" text or "),t("code",[this._v("dialog")]),this._v(" slot for HTML template.")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("KtInput")]),s._v("\n\t\t"),a("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"v3"')]),s._v("\n\t\t"),a("span",{staticClass:"hljs-attr"},[s._v("placeholder")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"Serach your name"')]),s._v("\n\t\t"),a("span",{staticClass:"hljs-attr"},[s._v("icon")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"circle_question"')]),s._v("\n\t\t"),a("span",{staticClass:"hljs-attr"},[s._v("iconPosition")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"right"')]),s._v("\n\t\t"),a("span",{staticClass:"hljs-attr"},[s._v("dialog")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"Available"')]),s._v("\n\t\t/>")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("KtInput")]),s._v("\n\t"),a("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"v3"')]),s._v("\n\t"),a("span",{staticClass:"hljs-attr"},[s._v("placeholder")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"Serach your name"')]),s._v("\n\t"),a("span",{staticClass:"hljs-attr"},[s._v("icon")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"check"')]),s._v("\n\t"),a("span",{staticClass:"hljs-attr"},[s._v("iconPosition")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"right"')]),s._v("\n\t>")]),s._v("\n\t"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("slot")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"dialog"')]),s._v(">")]),s._v("\n\t\t"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("h4")]),s._v(">")]),s._v("Availabe"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("h4")]),s._v(">")]),s._v("\n\t\t"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("span")]),s._v(">")]),s._v("This user name is availabe"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("span")]),s._v(">")]),s._v("\n\t"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("KtInput")]),s._v(">")]),s._v("\n")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("When an value needs a fixed prefix or suffix,\nin order to make sure user doesn't put it in input field,\nuse an "),t("code",[this._v("addonText")]),this._v(" to indicate that system has already pre-input this value.")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("KtInput")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"v3"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("label")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"Name"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("placeholder")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"Add your name"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("addonText")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"User Name"')]),s._v("/>")]),s._v("\n")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("p",[s._v("For input field it accept types "),a("code",[s._v("Number")]),s._v(", "),a("code",[s._v("text")]),s._v(" and "),a("code",[s._v("email")]),s._v(".\nUsing "),a("code",[s._v("step")]),s._v(" to define the precision.\nIf you want to use "),a("code",[s._v("checkbox")]),s._v(", "),a("code",[s._v("radio")]),s._v(" type, using "),a("code",[s._v("KtCheckbox")]),s._v(" and "),a("code",[s._v("KtRadio")]),s._v(".")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("KtInput")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"v4"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"number"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("label")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"Number"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("step")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"0.1"')]),s._v("/>")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("KtInput")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"v5"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"email"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("label")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"Email"')]),s._v(" />")]),s._v("\n")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("Add "),t("code",[this._v("disabled")]),this._v(" to "),t("code",[this._v("KtInput")]),this._v(" to make input not editable.")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("KtInput")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("label")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"Disabled Input"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":placeholder")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"v5"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("disabled")]),s._v(" />")]),s._v("\n")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[t("code",[this._v("validate")]),this._v(" props accepts three validation: "),t("code",[this._v("success")]),this._v(", "),t("code",[this._v("error")]),this._v(", and "),t("code",[this._v("warning")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("KtInput")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("label")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"Success Input"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":placeholder")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"v5"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("validate")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"success"')]),s._v(" />")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("KtInput")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("label")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"Error Input"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":placeholder")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"v5"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("validate")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"error"')]),s._v(" />")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("KtInput")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("label")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"Warning Input"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":placeholder")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"v5"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("validate")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"warning"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("validateText")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"Your input is wrong"')]),s._v("/>")]),s._v("\n")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[t("code",[this._v("required")]),this._v(" marks a field as non-optional. Browsers will also refuse sending the form until the field is filled.")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("KtInput")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("placeholder")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"email@example.com"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("label")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"Required Input"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("required")]),s._v("/>")]),s._v("\n")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("Note that "),t("strong",[t("code",[this._v("isCompact")]),this._v(" is incompatible with "),t("code",[this._v("addonText")])]),this._v(", and won’t be applied if both are passed.")])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("Using "),t("code",[this._v("isCompact")]),this._v(" to enable compact style.")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("KtInput")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("label")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"Full Name"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("placeholder")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"Your first name and last name"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("isCompact")]),s._v("/>")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("KtInput")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("label")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"Address"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("isCompact")]),s._v("/>")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("KtInput")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("label")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"Company"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("isCompact")]),s._v("/>")]),s._v("\n")])])}],!1,null,null,null);n.options.__file="inputs.vue";t.default=n.exports}}]);