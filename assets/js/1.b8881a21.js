(window.webpackJsonp=window.webpackJsonp||[]).push([[1,8,19,21,34,40,43],{555:function(e,t,n){},561:function(e,t,n){"use strict";n(555)},562:function(e,t,n){},568:function(e,t,n){"use strict";n.r(t);var i=n(39),s={props:{item:{type:Object,required:!0}},computed:{link(){return Object(i.c)(this.item.link)},exact(){return this.$site.locales?Object.keys(this.$site.locales).some(e=>e===this.link):"/"===this.link}},methods:{isExternal:i.g,isMailto:i.h,isTel:i.i}},a=n(19),r=Object(a.a)(s,(function(){var e=this,t=e._self._c;return e.isExternal(e.link)?t("a",{staticClass:"nav-link external ov-parent ov-hover",attrs:{href:e.link,target:e.isMailto(e.link)||e.isTel(e.link)?null:"_blank",rel:e.isMailto(e.link)||e.isTel(e.link)?null:"noopener noreferrer"}},[e.item.icon?t("v-icon",{attrs:{name:e.item.icon,animation:"wrench",hover:""}}):e._e(),e._v("\n  "+e._s(e.item.text)+"\n")],1):t("router-link",{staticClass:"nav-link ov-parent ov-hover",attrs:{to:e.link,exact:e.exact}},[e.item.icon?t("v-icon",{attrs:{name:e.item.icon,animation:"wrench",hover:""}}):e._e(),e._v("\n  "+e._s(e.item.text)+"\n")],1)}),[],!1,null,null,null);t.default=r.exports},569:function(e,t,n){"use strict";n.r(t);var i={name:"DropdownTransition",methods:{setHeight(e){e.style.height=e.scrollHeight+"px"},unsetHeight(e){e.style.height=""}}},s=(n(561),n(19)),a=Object(s.a)(i,(function(){return(0,this._self._c)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null);t.default=a.exports},571:function(e,t,n){},572:function(e,t,n){},580:function(e,t,n){"use strict";n(562)},587:function(e,t,n){"use strict";n.r(t);var i=n(568),s=n(569),a={components:{NavLink:i.default,DropdownTransition:s.default},props:{item:{type:Object,required:!0}},data:()=>({open:!1}),methods:{toggle(){this.open=!this.open}}},r=(n(580),n(19)),o=Object(r.a)(a,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"dropdown-wrapper",class:{open:e.open}},[t("a",{staticClass:"dropdown-title",on:{click:e.toggle}},[t("span",{staticClass:"title ov-parent ov-hover"},[e.item.icon?t("v-icon",{attrs:{name:e.item.icon,animation:"wrench",hover:""}}):e._e(),e._v("\n      "+e._s(e.item.text)+"\n    ")],1),e._v(" "),t("span",{staticClass:"arrow",class:e.open?"down":"right"})]),e._v(" "),t("DropdownTransition",[t("ul",{directives:[{name:"show",rawName:"v-show",value:e.open,expression:"open"}],staticClass:"nav-dropdown"},e._l(e.item.items,(function(n,i){return t("li",{key:n.link||i,staticClass:"dropdown-item"},["links"===n.type?t("h4",[e._v("\n          "+e._s(n.text)+"\n        ")]):e._e(),e._v(" "),"links"===n.type?t("ul",{staticClass:"dropdown-subitem-wrapper"},e._l(n.items,(function(e){return t("li",{key:e.link,staticClass:"dropdown-subitem"},[t("NavLink",{attrs:{item:e}})],1)})),0):t("NavLink",{attrs:{item:n}})],1)})),0)])],1)}),[],!1,null,null,null);t.default=o.exports},593:function(e,t,n){"use strict";n(571)},595:function(e,t,n){},596:function(e,t,n){"use strict";n(572)},606:function(e,t,n){"use strict";n.r(t);var i=n(587),s=n(568),a=n(39),r={components:{NavLink:s.default,DropdownLink:i.default},computed:{userNav(){return this.$themeLocaleConfig.nav||this.$themeConfig.nav||[]},nav(){const{$site:{locales:e},userNav:t}=this;if(e&&Object.keys(e).length>1){const n=this.$page.path;if(!this.isLanguageSwitcher)return t;const i=this.$router.options.routes,s=this.$themeConfig.locales||{},a={text:this.$themeLocaleConfig.selectText||"Languages",items:Object.keys(e).map(t=>{const a=e[t],r=s[t]&&s[t].label||a.lang;let o;return a.lang===this.$lang?o=n:(o=n.replace(this.$localeConfig.path,t),i.some(e=>e.path===o)||(o=t)),{text:r,link:o}}),icon:this.$themeConfig.languageIcon};return[...t,a]}return t},userLinks(){return(this.nav||[]).map(e=>Object.assign(Object(a.k)(e),{items:(e.items||[]).map(a.k)}))},isLanguageSwitcher(){return void 0===this.$page.frontmatter.layout}}},o=(n(593),n(19)),l=Object(o.a)(r,(function(){var e=this,t=e._self._c;return e.userLinks.length?t("nav",{staticClass:"nav-links"},[e._l(e.userLinks,(function(e){return t("div",{key:e.link,staticClass:"nav-item"},["links"===e.type?t("DropdownLink",{attrs:{item:e}}):t("NavLink",{attrs:{item:e}})],1)})),e._v(" "),e.$themeConfig.search&&!1!==e.$frontmatter.search?t("div",{staticClass:"nav-item"},[t("a",{staticClass:"nav-link ov-parent ov-hover",staticStyle:{cursor:"pointer"},on:{click:function(t){return e.$emit("toggle-search")}}},[e.$themeConfig.searchIcon?t("v-icon",{attrs:{name:e.$themeConfig.searchIcon,animation:"wrench",hover:""}}):e._e(),e._v("\n      "+e._s(e.$themeLocales.search)+"\n    ")],1)]):e._e()],2):e._e()}),[],!1,null,null,null);t.default=l.exports},609:function(e,t,n){"use strict";n.r(t);var i=n(626),s=n(614),a=n(39);function r(e,t){return"group"===t.type&&t.children.some(t=>"group"===t.type?r(e,t):"page"===t.type&&Object(a.f)(e,t.path))}var o={name:"SidebarLinks",components:{SidebarGroup:i.default,SidebarLink:s.default},props:{items:{type:Array,default:()=>[]},depth:{type:Number,required:!0},sidebarDepth:{type:Number,default:void 0},initialOpenGroupIndex:{type:Number,default:0}},data(){return{openGroupIndex:this.initialOpenGroupIndex||0}},watch:{$route(){this.refreshIndex()}},created(){this.refreshIndex()},methods:{refreshIndex(){const e=function(e,t){for(let n=0;n<t.length;n++){const i=t[n];if(r(e,i))return n}return-1}(this.$route,this.items);e>-1&&(this.openGroupIndex=e)},toggleGroup(e){this.openGroupIndex=e===this.openGroupIndex?-1:e},isActive(e){return Object(a.f)(this.$route,e.regularPath)}}},l=n(19),c=Object(l.a)(o,(function(){var e=this,t=e._self._c;return e.items.length?t("ul",{staticClass:"sidebar-links"},e._l(e.items,(function(n,i){return t("li",{key:i,staticClass:"sidebar-header"},["group"===n.type?t("SidebarGroup",{attrs:{item:n,open:i===e.openGroupIndex,collapsable:n.collapsable||n.collapsible,depth:e.depth},on:{toggle:function(t){return e.toggleGroup(i)}}}):t("SidebarLink",{attrs:{"sidebar-depth":e.sidebarDepth,item:n}})],1)})),0):e._e()}),[],!1,null,null,null);t.default=c.exports},614:function(e,t,n){"use strict";n.r(t);var i=n(39);function s(e,t,n,i,s){const a={props:{to:t,activeClass:"",exactActiveClass:""},class:{active:i,"sidebar-link":!0}};return s>2&&(a.style={"padding-left":s+"rem"}),e("RouterLink",a,n)}function a(e,t,n,r,o,l=1){return!t||l>o?null:e("ul",{class:"sidebar-sub-headers"},t.map(t=>{const c=Object(i.f)(r,n+"#"+t.slug);return e("li",{class:"sidebar-sub-header"},[s(e,n+"#"+t.slug,t.title,c,t.level-1),a(e,t.children,n,r,o,l+1)])}))}var r={functional:!0,props:{item:{type:Object,default:()=>{}},sidebarDepth:{type:Number,default:void 0}},render(e,{parent:{$page:t,$site:n,$route:r,$themeConfig:o,$themeLocaleConfig:l},props:{item:c,sidebarDepth:u}}){const p=Object(i.f)(r,c.path),d="auto"===c.type?p||c.children.some(e=>Object(i.f)(r,c.basePath+"#"+e.slug)):p,h="external"===c.type?function(e,t,n){return e("a",{attrs:{href:t,target:"_blank",rel:"noopener noreferrer"},class:{"sidebar-link":!0}},[n,e("OutboundLink")])}(e,c.path,c.title||c.path):s(e,c.path,c.title||c.path,d),f=[t.frontmatter.sidebarDepth,u,l.sidebarDepth,o.sidebarDepth,1].find(e=>void 0!==e),m=l.displayAllHeaders||o.displayAllHeaders;if("auto"===c.type)return[h,a(e,c.children,c.basePath,r,f)];if((d||m)&&c.headers&&!i.e.test(c.path)){return[h,a(e,Object(i.d)(c.headers),c.path,r,f)]}return h}},o=(n(596),n(19)),l=Object(o.a)(r,void 0,void 0,!1,null,null,null);t.default=l.exports},617:function(e,t,n){"use strict";n(595)},626:function(e,t,n){"use strict";n.r(t);var i=n(39),s={name:"SidebarGroup",components:{DropdownTransition:n(569).default},props:{item:{type:Object,default:()=>{}},open:{type:Boolean,required:!0},collapsable:{type:Boolean,default:!1},depth:{type:Number,required:!0}},beforeCreate(){this.$options.components.SidebarLinks=n(609).default},methods:{isActive:i.f}},a=(n(617),n(19)),r=Object(a.a)(s,(function(){var e=this,t=e._self._c;return t("section",{staticClass:"sidebar-group",class:[{collapsable:e.collapsable,"is-sub-group":0!==e.depth},"depth-"+e.depth]},[e.item.path?t("RouterLink",{staticClass:"sidebar-heading clickable",class:{open:e.open,active:e.isActive(e.$route,e.item.path)},attrs:{to:e.item.path},nativeOn:{click:function(t){return e.$emit("toggle")}}},[t("span",[e._v(e._s(e.item.title))]),e._v(" "),e.collapsable?t("span",{staticClass:"arrow",class:e.open?"down":"right"}):e._e()]):t("p",{staticClass:"sidebar-heading",class:{open:e.open},on:{click:function(t){return e.$emit("toggle")}}},[t("span",[e._v(e._s(e.item.title))]),e._v(" "),e.collapsable?t("span",{staticClass:"arrow",class:e.open?"down":"right"}):e._e()]),e._v(" "),t("DropdownTransition",[e.open||!e.collapsable?t("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:e.item.children,"sidebar-depth":e.item.sidebarDepth,"initial-open-group-index":e.item.initialOpenGroupIndex,depth:e.depth+1}}):e._e()],1)],1)}),[],!1,null,null,null);t.default=r.exports},627:function(e,t,n){},657:function(e,t,n){"use strict";n(627)},729:function(e,t,n){"use strict";n.r(t);var i=n(609),s=n(606),a={name:"Sidebar",components:{SidebarLinks:i.default,NavLinks:s.default},props:{items:{type:Array,default:()=>[]}}},r=(n(657),n(19)),o=Object(r.a)(a,(function(){var e=this,t=e._self._c;return t("aside",{staticClass:"sidebar"},[e._t("top"),e._v(" "),t("NavLinks",{on:{"toggle-search":function(t){return e.$emit("toggle-search")}}}),e._v(" "),t("SidebarLinks",{attrs:{depth:0,items:e.items}}),e._v(" "),e._t("bottom")],2)}),[],!1,null,null,null);t.default=o.exports}}]);