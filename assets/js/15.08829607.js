(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{652:function(e,t,n){"use strict";var i=n(2),l=n(146),a=n(49),s=n(14),r=n(15),o=n(147),c=n(68),u=n(67),f=n(26),d=u("splice"),p=f("splice",{ACCESSORS:!0,0:0,1:2}),h=Math.max,y=Math.min;i({target:"Array",proto:!0,forced:!d||!p},{splice:function(e,t){var n,i,u,f,d,p,b=r(this),g=s(b.length),w=l(e,g),m=arguments.length;if(0===m?n=i=0:1===m?(n=0,i=g-w):(n=m-2,i=y(h(a(t),0),g-w)),g+n-i>9007199254740991)throw TypeError("Maximum allowed length exceeded");for(u=o(b,i),f=0;f<i;f++)(d=w+f)in b&&c(u,f,b[d]);if(u.length=i,n<i){for(f=w;f<g-i;f++)p=f+n,(d=f+i)in b?b[p]=b[d]:delete b[p];for(f=g;f>g-i+n;f--)delete b[f-1]}else if(n>i)for(f=g-i;f>w;f--)p=f+n-1,(d=f+i-1)in b?b[p]=b[d]:delete b[p];for(f=0;f<n;f++)b[f+w]=arguments[f+2];return b.length=g-i+n,u}})},694:function(e,t,n){},795:function(e,t,n){"use strict";n(694)},814:function(e,t,n){"use strict";n.r(t);n(91),n(652);var i={data:function(){return{dynamicTags:[{type:"",label:"源代码"},{type:"success",label:"Node.js"},{type:"info",label:"Github"},{type:"danger",label:"Git"},{type:"warning",label:"Github Desktop"}],types:["","success","info","warning","danger"],typeNow:0,inputVisible:!1,inputValue:""}},methods:{handleClose:function(e){this.dynamicTags.splice(this.dynamicTags.indexOf(e),1)}}},l=(n(795),n(36)),a=Object(l.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._l(e.dynamicTags,(function(t){return n("el-tag",{key:t.label,attrs:{type:t.type,closable:"","disable-transitions":!1,effect:"dark"},on:{close:function(n){return e.handleClose(t)}}},[e._v("\n    "+e._s(t.label)+"\n  ")])})),1)}),[],!1,null,"70235631",null);t.default=a.exports}}]);