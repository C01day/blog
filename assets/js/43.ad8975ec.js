(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{568:function(e,t,i){"use strict";i.r(t);var n=i(39),l={props:{item:{type:Object,required:!0}},computed:{link(){return Object(n.c)(this.item.link)},exact(){return this.$site.locales?Object.keys(this.$site.locales).some(e=>e===this.link):"/"===this.link}},methods:{isExternal:n.g,isMailto:n.h,isTel:n.i}},s=i(19),r=Object(s.a)(l,(function(){var e=this,t=e._self._c;return e.isExternal(e.link)?t("a",{staticClass:"nav-link external ov-parent ov-hover",attrs:{href:e.link,target:e.isMailto(e.link)||e.isTel(e.link)?null:"_blank",rel:e.isMailto(e.link)||e.isTel(e.link)?null:"noopener noreferrer"}},[e.item.icon?t("v-icon",{attrs:{name:e.item.icon,animation:"wrench",hover:""}}):e._e(),e._v("\n  "+e._s(e.item.text)+"\n")],1):t("router-link",{staticClass:"nav-link ov-parent ov-hover",attrs:{to:e.link,exact:e.exact}},[e.item.icon?t("v-icon",{attrs:{name:e.item.icon,animation:"wrench",hover:""}}):e._e(),e._v("\n  "+e._s(e.item.text)+"\n")],1)}),[],!1,null,null,null);t.default=r.exports}}]);