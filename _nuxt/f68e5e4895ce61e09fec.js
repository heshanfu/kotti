(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{478:function(t,e,s){"use strict";s.r(e);var i={name:"StepsDocs",data:function(){return{current:1,status:"error"}},computed:{labelText:function(){return this.current>2?"Finished":"Next Status"}}},a=s(0),l=Object(a.a)(i,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",[s("h1",[t._v("Steps")]),t._v(" "),s("h2",[t._v("Step Status")]),t._v(" "),s("div",{staticClass:"element-example"},[s("KtStep",{attrs:{title:"Finished",description:"Your order has been accepted"}}),t._v(" "),s("KtStep",{attrs:{title:"Process",description:"Your items are Printing",status:"process"}}),t._v(" "),s("KtStep",{attrs:{title:"Wait",status:"wait",indexNumber:3,description:"with index number"}}),t._v(" "),s("KtStep",{attrs:{title:"Error",status:"error",hideLine:"",icon:"cloud",description:"Customized icons"}})],1),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),s("h2",[t._v("Step Structure")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),s("h2",[t._v("Steps")]),t._v(" "),t._m(5),t._v(" "),s("div",{staticClass:"element-example"},[s("KtRow",[s("KtCol",{attrs:{span:12,xs:24}},[s("KtSteps",{attrs:{current:t.current,status:"process"}},[s("KtStep",{attrs:{title:"Pending",description:"Your items have been ordered"}}),t._v(" "),s("KtStep",{attrs:{title:"Print",description:"Your items are printing"}}),t._v(" "),s("KtStep",{attrs:{title:"Shipped",description:"Your items have been shipped"}})],1)],1),t._v(" "),s("KtCol",{attrs:{span:12,xs:24}},[s("KtSteps",{attrs:{current:t.current,status:"process",showIcon:""}},[s("KtStep",{attrs:{title:"Pending",description:"Your items have been ordered"}}),t._v(" "),s("KtStep",{attrs:{title:"Print",description:"Your items are printing"}}),t._v(" "),s("KtStep",{attrs:{title:"Shipped",description:"Your items have been shipped"}})],1)],1)],1),t._v(" "),s("KtRow",{staticClass:"mt-16px"},[s("KtButton",{attrs:{label:"Reset"},on:{click:function(e){t.current=0}}}),t._v(" "),s("KtButton",{attrs:{label:t.labelText},on:{click:function(e){t.current++}}})],1)],1),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),s("h2",[t._v("Usage")]),t._v(" "),s("h3",[t._v("Steps Attributes")]),t._v(" "),t._m(8),t._v(" "),s("h3",[t._v("Step Attributes")]),t._v(" "),t._m(9),t._v(" "),s("h3",[t._v("Theme")]),t._v(" "),t._m(10)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("KtStep")]),this._v(" includes 4 statuses that can be controlled via the "),e("code",[this._v("status")]),this._v(" prop:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("Finished: The step is finished (default)")]),this._v(" "),e("li",[this._v("Process: The step is procssing")]),this._v(" "),e("li",[this._v("Wait: The step is waiting for last step to be finished")]),this._v(" "),e("li",[this._v("Error: The step is finished with an error")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("pre",[s("code",{staticClass:"language-html"},[s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("KtStep")]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("title")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"Process"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("description")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"Your items are Printing"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("status")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"process"')]),t._v(" />")]),t._v("\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Each "),e("code",[this._v("KtStep")]),this._v(" has four elements:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ol",[s("li",[t._v("Indicator: The icon on the left, can be changed with the "),s("code",[t._v("icon")]),t._v(" prop")]),t._v(" "),s("li",[t._v("Line: The line under the icon, if the step is last in the group, you may want to use "),s("code",[t._v("hideLine")]),t._v(" to disable the line")]),t._v(" "),s("li",[t._v("Title: The bold text on the right side, given via "),s("code",[t._v("title")]),t._v(" props.")]),t._v(" "),s("li",[t._v("Description: The grey text under tilte, given via "),s("code",[t._v("description")]),t._v(" props.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("KtSteps")]),this._v(" provides easier use of "),e("code",[this._v("KtStep")]),this._v(", since "),e("code",[this._v("KtStep")]),this._v(" normally used as a group.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("pre",[s("code",{staticClass:"language-html"},[s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("KtSteps")]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v(":current")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"1"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("status")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"process"')]),t._v(">")]),t._v("\n\t"),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("KtStep")]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("title")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"Pending"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("description")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"Your items have been ordered"')]),t._v("/>")]),t._v("\n\t"),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("KtStep")]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("title")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"Print"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("description")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"Your items are printing"')]),t._v("/>")]),t._v("\n\t"),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("KtStep")]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("title")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"Shipped"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("description")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"Your items has been shipped"')]),t._v("/>")]),t._v("\n"),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-name"},[t._v("KtSteps")]),t._v(">")]),t._v("\n"),s("span",{staticClass:"hljs-comment"},[t._v("\x3c!-- Show as icons --\x3e")]),t._v("\n"),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("KtSteps")]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v(":current")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"1"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("status")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"process"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("showIcon")]),t._v(">")]),t._v("\n\t...\n"),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-name"},[t._v("KtSteps")]),t._v(">")]),t._v("\n")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[s("code",[t._v("current")]),t._v(" props controls which step is current step. "),s("code",[t._v("status")]),t._v(" specifies the status of current step. By default "),s("code",[t._v("KtSteps")]),t._v(" uses numberic indicator, if you want to use icons, set "),s("code",[t._v("showIcon")]),t._v(" to "),s("code",[t._v("true")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("Attribute")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("Description")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("Type")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("Accepted Values")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("Default")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("current")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("index of current step")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("Number")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("—")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("0")])])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("showIcon")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("show indicator as icons")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("Boolean")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("—")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("false")])])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("status")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("status of the step")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("String")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("process")]),t._v(", "),s("code",[t._v("finished")]),t._v(", "),s("code",[t._v("error")]),t._v(" and "),s("code",[t._v("wait")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("process")])])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("Attribute")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("Description")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("Type")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("Accepted Values")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("Default")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("description")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("description text of the step")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("String")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("—")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("null")])])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("hideLine")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("should be used for the last step")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("Boolean")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("true")]),t._v(", "),s("code",[t._v("false")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("false")])])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("icon")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("icon of the step")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("String")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("yoco icon string")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("check")])])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("status")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("status of the step")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("String")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("process")]),t._v(", "),s("code",[t._v("finished")]),t._v(", "),s("code",[t._v("error")]),t._v(" and "),s("code",[t._v("wait")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("process")])])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("title")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("title text of the step")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("String")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("—")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("null")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[this._v("Attribute")]),this._v(" "),e("th",{staticStyle:{"text-align":"left"}},[this._v("Description")])])]),this._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[this._v("brandColor")])]),this._v(" "),e("td",{staticStyle:{"text-align":"left"}},[this._v("Changes the color of indicator and line")])])])])}],!1,null,null,null);l.options.__file="steps.vue";e.default=l.exports}}]);