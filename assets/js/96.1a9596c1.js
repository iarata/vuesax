(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{518:function(t,r,e){"use strict";e.r(r);var o={data:function(){return{colorAlert:"primary",titleAlert:"Alert",activeAlert:!1,valueInput:""}},methods:{openAlert:function(t){this.colorAlert=t||this.getColorRandom(),this.$vs.dialog({color:this.colorAlert,title:"Dialog - ".concat(this.colorAlert),text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",accept:this.acceptAlert})},acceptAlert:function(){this.$vs.notify({color:this.colorAlert,title:"Accept Selected",text:"Lorem ipsum dolor sit amet, consectetur"})},getColorRandom:function(){function t(t,r){return Math.floor(Math.random()*(r-t))+t}return"rgb(".concat(t(0,255),",").concat(t(0,255),",").concat(t(0,255),")")}}},n=e(1),c=Object(n.a)(o,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"centerx"},[e("vs-button",{attrs:{color:"primary",type:"flat"},on:{click:function(r){return t.openAlert("primary")}}},[t._v("Alert Primary")]),t._v(" "),e("vs-button",{attrs:{color:"success",type:"flat"},on:{click:function(r){return t.openAlert("success")}}},[t._v("Alert success")]),t._v(" "),e("vs-button",{attrs:{color:"danger",type:"flat"},on:{click:function(r){return t.openAlert("danger")}}},[t._v("Alert Danger")]),t._v(" "),e("vs-button",{attrs:{color:"warning",type:"flat"},on:{click:function(r){return t.openAlert("warning")}}},[t._v("Alert Warning")]),t._v(" "),e("vs-button",{attrs:{color:"dark",type:"flat"},on:{click:function(r){return t.openAlert("dark")}}},[t._v("Alert Dark")]),t._v(" "),e("vs-button",{attrs:{color:"primary",type:"gradient"},on:{click:function(r){return t.openAlert(null)}}},[t._v("Alert Color RGB | HEX")])],1)}),[],!1,null,null,null);r.default=c.exports}}]);