(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{649:function(t,e,n){},727:function(t,e,n){"use strict";n(649)},745:function(t,e,n){"use strict";n.r(e);n(22);var i={data:()=>({dynamicTags:[{type:"",label:"标签一"},{type:"success",label:"标签二"},{type:"info",label:"标签三"},{type:"danger",label:"标签四"},{type:"warning",label:"标签五"}],types:["","success","info","warning","danger"],typeNow:0,inputVisible:!1,inputValue:""}),methods:{handleClose(t){this.dynamicTags.splice(this.dynamicTags.indexOf(t),1)},showInput(){this.inputVisible=!0,this.$nextTick(t=>{this.$refs.saveTagInput.$refs.input.focus()})},handleInputConfirm(){let t=this.inputValue;t&&(this.dynamicTags.push({type:this.types[this.typeNow],label:t}),this.typeNow++,this.typeNow=this.typeNow%5),this.inputVisible=!1,this.inputValue=""}}},s=(n(727),n(19)),a=Object(s.a)(i,(function(){var t=this,e=t._self._c;return e("div",[t._l(t.dynamicTags,(function(n){return e("el-tag",{key:n.label,attrs:{type:n.type,closable:"","disable-transitions":!1,effect:"dark"},on:{close:function(e){return t.handleClose(n)}}},[t._v("\n    "+t._s(n.label)+"\n  ")])})),t._v(" "),t.inputVisible?e("el-input",{ref:"saveTagInput",staticClass:"input-new-tag",attrs:{size:"small"},on:{blur:t.handleInputConfirm},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleInputConfirm.apply(null,arguments)}},model:{value:t.inputValue,callback:function(e){t.inputValue=e},expression:"inputValue"}}):e("el-button",{staticClass:"button-new-tag",attrs:{size:"small"},on:{click:t.showInput}},[t._v("+ New Tag")])],2)}),[],!1,null,"1ffba67c",null);e.default=a.exports}}]);