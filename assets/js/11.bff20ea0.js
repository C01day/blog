(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{625:function(t,e,s){},633:function(t,e,s){"use strict";s(625)},690:function(t,e,s){},789:function(t,e,s){"use strict";s(690)},806:function(t,e,s){"use strict";s.r(e);s(17);var i=s(638),n=s(734),a=new(s.n(n).a),r=a.renderer.rules.link_open||function(t,e,s,i,n){return n.renderToken(t,e,s)};a.renderer.rules.link_open=function(t,e,s,i,n){var a=t[e].attrIndex("target");return a<0?t[e].attrPush(["target","_blank"]):t[e].attrs[a][1]="_blank",r(t,e,s,i,n)};var o={github:"https://github.com/",linkedin:"https://www.linkedin.com/in/",facebook:"https://www.facebook.com/",twitter:"https://www.twitter.com/",zhihu:"https://www.zhihu.com/people/",weibo:"http://weibo.com/",email:"mailto:"},c={github:"ri-github-fill",linkedin:"ri-linkedin-box-fill",facebook:"ri-facebook-box-fill",twitter:"ri-twitter-fill",zhihu:"ri-zhihu-line",weibo:"ri-weibo-fill",email:"hi-mail"},l={components:{Common:i.a},data:function(){return{bio:""}},mounted:function(){var t=this;fetch("/md/about.md").then((function(t){return t.text()})).then((function(e){return t.bio=a.render(e)})).catch((function(t){return console.error(t)}))},methods:{snsLink:function(t,e){return o[e]+t},snsIcon:function(t){return c[t]}}},u=(s(789),s(633),s(36)),_=Object(u.a)(l,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("Common",{staticClass:"about-wrapper"},[s("div",{staticClass:"profile"},[s("div",{staticClass:"profile__content"},[s("div",{staticClass:"profile__basic col-md-4"},[s("img",{staticClass:"avatar",attrs:{src:t.$withBase(t.$page.frontmatter.avatar)}}),t._v(" "),s("h3",{staticClass:"title"},[t._v(t._s(t.$page.frontmatter.name))]),t._v(" "),s("p",{staticClass:"subname"},[t._v(t._s(t.$page.frontmatter.subname))]),t._v(" "),s("div",{staticClass:"sns"},[t._l(t.$themeConfig.personalInfo.sns,(function(e,i){return s("div",{key:"about-"+i+"-"+e,staticClass:"sns__item"},[s("a",{attrs:{target:"_blank",href:t.snsLink(e,i)}},[s("v-icon",{attrs:{name:t.snsIcon(i),scale:"1.82"}})],1)])})),t._v(" "),t.$page.frontmatter.cv?s("div",{staticClass:"sns__item"},[s("a",{attrs:{href:t.$page.frontmatter.cv}},[s("v-icon",{attrs:{name:"ai-cv",scale:"2.2"}})],1)]):t._e()],2)]),t._v(" "),s("div",{staticClass:"profile__info col-md-8"},[s("h3",{staticClass:"title"},[t._v("关于我")]),t._v(" "),s("div",{staticClass:"bio-info",domProps:{innerHTML:t._s(this.bio)}}),t._v(" "),s("div",{staticClass:"personal-info"},[s("div",{staticClass:"col-md-5 interests"},[s("p",{staticClass:"subtitle"},[t._v("Interests")]),t._v(" "),s("ul",t._l(t.$page.frontmatter.interests,(function(e,i){return s("li",{key:"interests-"+i},[s("p",{staticClass:"item",domProps:{innerHTML:t._s(e)}},[t._v(t._s(e))])])})),0)]),t._v(" "),s("div",{staticClass:"col-md-7 education"},[s("p",{staticClass:"subtitle"},[t._v("Education")]),t._v(" "),s("ul",t._l(t.$page.frontmatter.education,(function(e,i){return s("li",{key:"education-"+i},[s("p",{staticClass:"degree"},[t._v(t._s(e.degree)+", "+t._s(e.year))]),t._v(" "),s("p",{staticClass:"school"},[t._v(t._s(e.school))])])})),0)])])])])]),t._v(" "),s("Content",{staticClass:"theme-content"})],1)}),[],!1,null,null,null);e.default=_.exports}}]);