!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=7)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(1),i=o(r);n(6),new i.default({target:document.querySelector("body")})},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t,n){("time"in t&&"object"===U(e.time)||e.time!==n.time)&&(e.m=t.m=I.computed.m(e.time)),("time"in t&&"object"===U(e.time)||e.time!==n.time||"m"in t&&"object"===U(e.m)||e.m!==n.m)&&(e.h=t.h=I.computed.h(e.time,e.m)),("time"in t&&"object"===U(e.time)||e.time!==n.time)&&(e.H=t.H=I.computed.H(e.time)),("m"in t&&"object"===U(e.m)||e.m!==n.m)&&(e.past=t.past=I.computed.past(e.m)),("m"in t&&"object"===U(e.m)||e.m!==n.m)&&(e.to=t.to=I.computed.to(e.m)),("m"in t&&"object"===U(e.m)||e.m!==n.m)&&(e.oclock=t.oclock=I.computed.oclock(e.m)),("m"in t&&"object"===U(e.m)||e.m!==n.m)&&(e.oneMinute=t.oneMinute=I.computed.oneMinute(e.m)),("m"in t&&"object"===U(e.m)||e.m!==n.m)&&(e.twoMinutes=t.twoMinutes=I.computed.twoMinutes(e.m)),("m"in t&&"object"===U(e.m)||e.m!==n.m)&&(e.threeMinutes=t.threeMinutes=I.computed.threeMinutes(e.m)),("m"in t&&"object"===U(e.m)||e.m!==n.m)&&(e.fourMinutes=t.fourMinutes=I.computed.fourMinutes(e.m)),("m"in t&&"object"===U(e.m)||e.m!==n.m)&&(e.fiveMinutes=t.fiveMinutes=I.computed.fiveMinutes(e.m)),("m"in t&&"object"===U(e.m)||e.m!==n.m)&&(e.fiveOnlyMinutes=t.fiveOnlyMinutes=I.computed.fiveOnlyMinutes(e.m)),("m"in t&&"object"===U(e.m)||e.m!==n.m)&&(e.tenMinutes=t.tenMinutes=I.computed.tenMinutes(e.m)),("m"in t&&"object"===U(e.m)||e.m!==n.m)&&(e.quarter=t.quarter=I.computed.quarter(e.m)),("m"in t&&"object"===U(e.m)||e.m!==n.m)&&(e.twentyMinutes=t.twentyMinutes=I.computed.twentyMinutes(e.m)),("m"in t&&"object"===U(e.m)||e.m!==n.m)&&(e.plusFiveMinutes=t.plusFiveMinutes=I.computed.plusFiveMinutes(e.m)),("m"in t&&"object"===U(e.m)||e.m!==n.m)&&(e.half=t.half=I.computed.half(e.m))}function i(e,t){var n=document.createElement("pre"),o=W(e,t),r={on:e.h>=10||0==e.h},i=new I.components.Word({target:n,root:t.root||t,yield:o,data:r}),S=k(e,t),U={on:6==e.h},R=new I.components.Word({target:n,root:t.root||t,yield:S,data:U}),L=H(e,t),A={on:1==e.h||11==e.h},E=new I.components.Word({target:n,root:t.root||t,yield:L,data:A});n.appendChild(document.createTextNode("\n"));var q=_(e,t),F={on:4==e.h},P=new I.components.Word({target:n,root:t.root||t,yield:q,data:F});n.appendChild(document.createTextNode("G"));var G=B(e,t),D={on:5==e.h},K=new I.components.Word({target:n,root:t.root||t,yield:G,data:D}),X=O(e,t),Y={on:2==e.h||0==e.h},z=new I.components.Word({target:n,root:t.root||t,yield:X,data:Y});n.appendChild(document.createTextNode("\n"));var J=T(e,t),V={on:8==e.h},Z=new I.components.Word({target:n,root:t.root||t,yield:J,data:V}),Q=j(e,t),$={on:9==e.h},ee=new I.components.Word({target:n,root:t.root||t,yield:Q,data:$}),te=C(e,t),ne={on:7==e.h},oe=new I.components.Word({target:n,root:t.root||t,yield:te,data:ne});n.appendChild(document.createTextNode("\n"));var re=x(e,t),ie={on:3==e.h},ue=new I.components.Word({target:n,root:t.root||t,yield:re,data:ie});n.appendChild(document.createTextNode("V"));var ae=M(e,t),de={on:!0},ce=new I.components.Word({target:n,root:t.root||t,yield:ae,data:de});n.appendChild(document.createTextNode("X"));var fe=N(e,t),se={on:e.to},le=new I.components.Word({target:n,root:t.root||t,yield:fe,data:se});n.appendChild(document.createTextNode("\nX"));var me=b(e,t),pe={on:e.twentyMinutes},he=new I.components.Word({target:n,root:t.root||t,yield:me,data:pe});n.appendChild(document.createTextNode("P"));var ve=g(e,t),ye={on:e.tenMinutes||e.quarter},we=new I.components.Word({target:n,root:t.root||t,yield:ve,data:ye});n.appendChild(document.createTextNode("T\n"));var ge=w(e,t),be={on:e.twentyMinutes},Ne=new I.components.Word({target:n,root:t.root||t,yield:ge,data:be}),Me=y(e,t),xe={on:e.fiveOnlyMinutes},Ce=new I.components.Word({target:n,root:t.root||t,yield:Me,data:xe}),je=v(e,t),Te={on:e.plusFiveMinutes},Oe=new I.components.Word({target:n,root:t.root||t,yield:je,data:Te});n.appendChild(document.createTextNode("\n"));var Be=h(e,t),_e={on:e.half},He=new I.components.Word({target:n,root:t.root||t,yield:Be,data:_e});n.appendChild(document.createTextNode("BF"));var ke=p(e,t),We={on:e.H<12},Se=new I.components.Word({target:n,root:t.root||t,yield:ke,data:We});n.appendChild(document.createTextNode("\n"));var Ue=m(e,t),Re={on:e.H>=19&&e.H<23},Le=new I.components.Word({target:n,root:t.root||t,yield:Ue,data:Re});n.appendChild(document.createTextNode("ZE"));var Ie=l(e,t),Ae={on:e.H>=15&&e.H<=18},Ee=new I.components.Word({target:n,root:t.root||t,yield:Ie,data:Ae});n.appendChild(document.createTextNode("\n"));var qe=s(e,t),Fe={on:e.H>=23&&e.H<24},Pe=new I.components.Word({target:n,root:t.root||t,yield:qe,data:Fe});n.appendChild(document.createTextNode("B"));var Ge=f(e,t),De={on:e.H>=12&&e.H<14},Ke=new I.components.Word({target:n,root:t.root||t,yield:Ge,data:De});n.appendChild(document.createTextNode("\n"));var Xe=c(e,t),Ye={on:e.oneMinute},ze=new I.components.Word({target:n,root:t.root||t,yield:Xe,data:Ye});n.appendChild(document.createTextNode("  "));var Je=d(e,t),Ve={on:e.twoMinutes},Ze=new I.components.Word({target:n,root:t.root||t,yield:Je,data:Ve});n.appendChild(document.createTextNode("  "));var Qe=a(e,t),$e={on:e.threeMinutes},et=new I.components.Word({target:n,root:t.root||t,yield:Qe,data:$e});n.appendChild(document.createTextNode("  "));var tt=u(e,t),nt={on:e.fourMinutes},ot=new I.components.Word({target:n,root:t.root||t,yield:tt,data:nt}),rt=document.createTextNode("\n"),it=document.createTextNode("\n"),ut=document.createTextNode("\n\n");return{mount:function(e,t){e.insertBefore(n,t),e.insertBefore(rt,t),e.insertBefore(it,t),e.insertBefore(ut,t)},update:function(e,t){o.update(e,t);var n={};("h"in e||"h"in e)&&(n.on=t.h>=10||0==t.h),Object.keys(n).length&&i.set(n),S.update(e,t);var r={};"h"in e&&(r.on=6==t.h),Object.keys(r).length&&R.set(r),L.update(e,t);var u={};("h"in e||"h"in e)&&(u.on=1==t.h||11==t.h),Object.keys(u).length&&E.set(u),q.update(e,t);var a={};"h"in e&&(a.on=4==t.h),Object.keys(a).length&&P.set(a),G.update(e,t);var d={};"h"in e&&(d.on=5==t.h),Object.keys(d).length&&K.set(d),X.update(e,t);var c={};("h"in e||"h"in e)&&(c.on=2==t.h||0==t.h),Object.keys(c).length&&z.set(c),J.update(e,t);var f={};"h"in e&&(f.on=8==t.h),Object.keys(f).length&&Z.set(f),Q.update(e,t);var s={};"h"in e&&(s.on=9==t.h),Object.keys(s).length&&ee.set(s),te.update(e,t);var l={};"h"in e&&(l.on=7==t.h),Object.keys(l).length&&oe.set(l),re.update(e,t);var m={};"h"in e&&(m.on=3==t.h),Object.keys(m).length&&ue.set(m),ae.update(e,t),fe.update(e,t);var p={};"to"in e&&(p.on=t.to),Object.keys(p).length&&le.set(p),me.update(e,t);var h={};"twentyMinutes"in e&&(h.on=t.twentyMinutes),Object.keys(h).length&&he.set(h),ve.update(e,t);var v={};("tenMinutes"in e||"quarter"in e)&&(v.on=t.tenMinutes||t.quarter),Object.keys(v).length&&we.set(v),ge.update(e,t);var y={};"twentyMinutes"in e&&(y.on=t.twentyMinutes),Object.keys(y).length&&Ne.set(y),Me.update(e,t);var w={};"fiveOnlyMinutes"in e&&(w.on=t.fiveOnlyMinutes),Object.keys(w).length&&Ce.set(w),je.update(e,t);var g={};"plusFiveMinutes"in e&&(g.on=t.plusFiveMinutes),Object.keys(g).length&&Oe.set(g),Be.update(e,t);var b={};"half"in e&&(b.on=t.half),Object.keys(b).length&&He.set(b),ke.update(e,t);var N={};"H"in e&&(N.on=t.H<12),Object.keys(N).length&&Se.set(N),Ue.update(e,t);var M={};("H"in e||"H"in e)&&(M.on=t.H>=19&&t.H<23),Object.keys(M).length&&Le.set(M),Ie.update(e,t);var x={};("H"in e||"H"in e)&&(x.on=t.H>=15&&t.H<=18),Object.keys(x).length&&Ee.set(x),qe.update(e,t);var C={};("H"in e||"H"in e)&&(C.on=t.H>=23&&t.H<24),Object.keys(C).length&&Pe.set(C),Ge.update(e,t);var j={};("H"in e||"H"in e)&&(j.on=t.H>=12&&t.H<14),Object.keys(j).length&&Ke.set(j),Xe.update(e,t);var T={};"oneMinute"in e&&(T.on=t.oneMinute),Object.keys(T).length&&ze.set(T),Je.update(e,t);var O={};"twoMinutes"in e&&(O.on=t.twoMinutes),Object.keys(O).length&&Ze.set(O),Qe.update(e,t);var B={};"threeMinutes"in e&&(B.on=t.threeMinutes),Object.keys(B).length&&et.set(B),tt.update(e,t);var _={};"fourMinutes"in e&&(_.on=t.fourMinutes),Object.keys(_).length&&ot.set(_)},teardown:function(e){i.teardown(!1),R.teardown(!1),E.teardown(!1),P.teardown(!1),K.teardown(!1),z.teardown(!1),Z.teardown(!1),ee.teardown(!1),oe.teardown(!1),ue.teardown(!1),ce.teardown(!1),le.teardown(!1),he.teardown(!1),we.teardown(!1),Ne.teardown(!1),Ce.teardown(!1),Oe.teardown(!1),He.teardown(!1),Se.teardown(!1),Le.teardown(!1),Ee.teardown(!1),Pe.teardown(!1),Ke.teardown(!1),ze.teardown(!1),Ze.teardown(!1),et.teardown(!1),ot.teardown(!1),e&&(n.parentNode.removeChild(n),rt.parentNode.removeChild(rt),it.parentNode.removeChild(it),ut.parentNode.removeChild(ut))}}}function u(e,t){var n=document.createTextNode(".");return{mount:function(e,t){e.insertBefore(n,t)},update:function(e,t){},teardown:function(e){e&&n.parentNode.removeChild(n)}}}function a(e,t){var n=document.createTextNode(".");return{mount:function(e,t){e.insertBefore(n,t)},update:function(e,t){},teardown:function(e){e&&n.parentNode.removeChild(n)}}}function d(e,t){var n=document.createTextNode(".");return{mount:function(e,t){e.insertBefore(n,t)},update:function(e,t){},teardown:function(e){e&&n.parentNode.removeChild(n)}}}function c(e,t){var n=document.createTextNode(".");return{mount:function(e,t){e.insertBefore(n,t)},update:function(e,t){},teardown:function(e){e&&n.parentNode.removeChild(n)}}}function f(e,t){var n=document.createTextNode("TRƯA");return{mount:function(e,t){e.insertBefore(n,t)},update:function(e,t){},teardown:function(e){e&&n.parentNode.removeChild(n)}}}function s(e,t){var n=document.createTextNode("KHUYA");return{mount:function(e,t){e.insertBefore(n,t)},update:function(e,t){},teardown:function(e){e&&n.parentNode.removeChild(n)}}}function l(e,t){var n=document.createTextNode("CHIỀU");return{mount:function(e,t){e.insertBefore(n,t)},update:function(e,t){},teardown:function(e){e&&n.parentNode.removeChild(n)}}}function m(e,t){var n=document.createTextNode("TỒI");return{mount:function(e,t){e.insertBefore(n,t)},update:function(e,t){},teardown:function(e){e&&n.parentNode.removeChild(n)}}}function p(e,t){var n=document.createTextNode("SÁNG");return{mount:function(e,t){e.insertBefore(n,t)},update:function(e,t){},teardown:function(e){e&&n.parentNode.removeChild(n)}}}function h(e,t){var n=document.createTextNode("RƯỠI");return{mount:function(e,t){e.insertBefore(n,t)},update:function(e,t){},teardown:function(e){e&&n.parentNode.removeChild(n)}}}function v(e,t){var n=document.createTextNode("LĂM");return{mount:function(e,t){e.insertBefore(n,t)},update:function(e,t){},teardown:function(e){e&&n.parentNode.removeChild(n)}}}function y(e,t){var n=document.createTextNode("NĂM");return{mount:function(e,t){e.insertBefore(n,t)},update:function(e,t){},teardown:function(e){e&&n.parentNode.removeChild(n)}}}function w(e,t){var n=document.createTextNode("MƯƠI");return{mount:function(e,t){e.insertBefore(n,t)},update:function(e,t){},teardown:function(e){e&&n.parentNode.removeChild(n)}}}function g(e,t){var n=document.createTextNode("MƯỜI");return{mount:function(e,t){e.insertBefore(n,t)},update:function(e,t){},teardown:function(e){e&&n.parentNode.removeChild(n)}}}function b(e,t){var n=document.createTextNode("HAI");return{mount:function(e,t){e.insertBefore(n,t)},update:function(e,t){},teardown:function(e){e&&n.parentNode.removeChild(n)}}}function N(e,t){var n=document.createTextNode("KÉM");return{mount:function(e,t){e.insertBefore(n,t)},update:function(e,t){},teardown:function(e){e&&n.parentNode.removeChild(n)}}}function M(e,t){var n=document.createTextNode("GIỜ");return{mount:function(e,t){e.insertBefore(n,t)},update:function(e,t){},teardown:function(e){e&&n.parentNode.removeChild(n)}}}function x(e,t){var n=document.createTextNode("BA");return{mount:function(e,t){e.insertBefore(n,t)},update:function(e,t){},teardown:function(e){e&&n.parentNode.removeChild(n)}}}function C(e,t){var n=document.createTextNode("BẢY");return{mount:function(e,t){e.insertBefore(n,t)},update:function(e,t){},teardown:function(e){e&&n.parentNode.removeChild(n)}}}function j(e,t){var n=document.createTextNode("CHÍN");return{mount:function(e,t){e.insertBefore(n,t)},update:function(e,t){},teardown:function(e){e&&n.parentNode.removeChild(n)}}}function T(e,t){var n=document.createTextNode("TÁM");return{mount:function(e,t){e.insertBefore(n,t)},update:function(e,t){},teardown:function(e){e&&n.parentNode.removeChild(n)}}}function O(e,t){var n=document.createTextNode("HAI");return{mount:function(e,t){e.insertBefore(n,t)},update:function(e,t){},teardown:function(e){e&&n.parentNode.removeChild(n)}}}function B(e,t){var n=document.createTextNode("NĂM");return{mount:function(e,t){e.insertBefore(n,t)},update:function(e,t){},teardown:function(e){e&&n.parentNode.removeChild(n)}}}function _(e,t){var n=document.createTextNode("BỐN");return{mount:function(e,t){e.insertBefore(n,t)},update:function(e,t){},teardown:function(e){e&&n.parentNode.removeChild(n)}}}function H(e,t){var n=document.createTextNode("MỘT");return{mount:function(e,t){e.insertBefore(n,t)},update:function(e,t){},teardown:function(e){e&&n.parentNode.removeChild(n)}}}function k(e,t){var n=document.createTextNode("SÁU");return{mount:function(e,t){e.insertBefore(n,t)},update:function(e,t){},teardown:function(e){e&&n.parentNode.removeChild(n)}}}function W(e,t){var n=document.createTextNode("MƯỜI");return{mount:function(e,t){e.insertBefore(n,t)},update:function(e,t){},teardown:function(e){e&&n.parentNode.removeChild(n)}}}function S(e){function t(e,t,o){for(var r in e)if(r in t){var i=t[r],u=o[r];if(i!==u||"object"===("undefined"==typeof i?"undefined":U(i))){var a=e[r];if(a)for(var d=0;d<a.length;d+=1){var c=a[d];c.__calling||(c.__calling=!0,c.call(n,i,u),c.__calling=!1)}}}}e=e||{};var n=this,o=Object.assign(I.data(),e.data);r(o,o,{});var u={immediate:Object.create(null),deferred:Object.create(null)},a=Object.create(null);this.fire=function(e,t){var n=e in a&&a[e].slice();if(n)for(var o=0;o<n.length;o+=1)n[o].call(this,t)},this.get=function(e){return e?o[e]:o},this.set=function(e){var n=o;for(o=Object.assign({},n,e),r(o,e,n),t(u.immediate,e,n),d&&d.update(e,o),t(u.deferred,e,n);this.__renderHooks.length;){var i=this.__renderHooks.pop();i.fn.call(i.context)}},this._mount=function(e,t){d.mount(e,t)},this.observe=function(e,t,r){var i=r&&r.defer?u.deferred:u.immediate;return(i[e]||(i[e]=[])).push(t),r&&r.init===!1||(t.__calling=!0,t.call(n,o[e]),t.__calling=!1),{cancel:function(){var n=i[e].indexOf(t);~n&&i[e].splice(n,1)}}},this.on=function(e,t){var n=a[e]||(a[e]=[]);return n.push(t),{cancel:function(){var e=n.indexOf(t);~e&&n.splice(e,1)}}},this.teardown=function(e){this.fire("teardown"),I.onteardown.call(this),d.teardown(e!==!1),d=null,o={}},this.root=e.root,this.yield=e.yield,this.__renderHooks=[];var d=i(o,this);for(e.target&&this._mount(e.target);this.__renderHooks.length;){var c=this.__renderHooks.pop();c.fn.call(c.context)}e.root?e.root.__renderHooks.push({fn:I.onrender,context:this}):I.onrender.call(this)}Object.defineProperty(t,"__esModule",{value:!0});var U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},R=n(2),L=o(R),I=function(){return{components:{Word:L.default},data:function(){return{time:new Date}},computed:{m:function(e){return e.getMinutes()},h:function e(t,n){var e=t.getHours();return(e+(n>=35?1:0))%12},H:function(e){return e.getHours()},past:function(e){return e>=5&&e<35},to:function(e){return e>=35},oclock:function(e){return e>=0&&e<5},oneMinute:function(e){return e%5>=1},twoMinutes:function(e){return e%5>=2},threeMinutes:function(e){return e%5>=3},fourMinutes:function(e){return e%5>=4},fiveMinutes:function(e){return e>=5&&e<10||e>=55||e>=25&&e<30||e>=35&&e<40},fiveOnlyMinutes:function(e){return e>=5&&e<10||e>=55},tenMinutes:function(e){return e>=10&&e<15||e>=50&&e<55},quarter:function(e){return e>=15&&e<20||e>=45&&e<50},twentyMinutes:function(e){return e>=20&&e<30||e>=35&&e<45},plusFiveMinutes:function(e){return e>=15&&e<20||e>=25&&e<30||e>=35&&e<40||e>=45&&e<50},half:function(e){return e>=30&&e<35}},onrender:function(){var e=this;this.interval=setInterval(function(){var t=new Date;e.set({time:t})},3e3)},onteardown:function(){clearInterval(this.interval)}}}();t.default=S},function(e,t){"use strict";function n(e,t){function n(e){return e.on?r:o}var i=document.createComment("#if on"),u=n(e),a=u&&u(e,t);return{mount:function(e,t){e.insertBefore(i,t),a&&a.mount(i.parentNode,i)},update:function(e,o){var r=u;u=n(o),r===u&&a?a.update(e,o):(a&&a.teardown(!0),a=u&&u(o,t),a&&a.mount(i.parentNode,i))},teardown:function(e){a&&a.teardown(e),e&&i.parentNode.removeChild(i)}}}function o(e,t){var n=document.createComment("yield");return{mount:function(e,o){e.insertBefore(n,o),t.yield&&t.yield.mount(e,n)},update:function(e,t){},teardown:function(e){t.yield&&t.yield.teardown(e),e&&n.parentNode.removeChild(n)}}}function r(e,t){var n=document.createElement("b"),o=document.createComment("yield");return n.appendChild(o),{mount:function(e,r){e.insertBefore(n,r),t.yield&&t.yield.mount(n,o)},update:function(e,t){},teardown:function(e){t.yield&&t.yield.teardown(e),e&&n.parentNode.removeChild(n)}}}function i(e){function t(e,t,n){for(var r in e)if(r in t){var i=t[r],a=n[r];if(i!==a||"object"===("undefined"==typeof i?"undefined":u(i))){var d=e[r];if(d)for(var c=0;c<d.length;c+=1){var f=d[c];f.__calling||(f.__calling=!0,f.call(o,i,a),f.__calling=!1)}}}}e=e||{};var o=this,r=e.data||{},i={immediate:Object.create(null),deferred:Object.create(null)},a=Object.create(null);this.fire=function(e,t){var n=e in a&&a[e].slice();if(n)for(var o=0;o<n.length;o+=1)n[o].call(this,t)},this.get=function(e){return e?r[e]:r},this.set=function(e){var n=r;r=Object.assign({},n,e),t(i.immediate,e,n),d&&d.update(e,r),t(i.deferred,e,n)},this._mount=function(e,t){d.mount(e,t)},this.observe=function(e,t,n){var u=n&&n.defer?i.deferred:i.immediate;return(u[e]||(u[e]=[])).push(t),n&&n.init===!1||(t.__calling=!0,t.call(o,r[e]),t.__calling=!1),{cancel:function(){var n=u[e].indexOf(t);~n&&u[e].splice(n,1)}}},this.on=function(e,t){var n=a[e]||(a[e]=[]);return n.push(t),{cancel:function(){var e=n.indexOf(t);~e&&n.splice(e,1)}}},this.teardown=function(e){this.fire("teardown"),d.teardown(e!==!1),d=null,r={}},this.root=e.root,this.yield=e.yield;var d=n(r,this);e.target&&this._mount(e.target)}Object.defineProperty(t,"__esModule",{value:!0});var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=i},function(e,t,n){t=e.exports=n(4)(),t.push([e.i,"*,h1,h2,h3,h4,h5,h6{font-family:Source Code Pro,Consolas,monospace}html{background-color:#000}body,html{height:100%}body{align-items:center;display:flex;justify-content:center}pre{color:hsla(0,0%,100%,.27);font-size:5vmin;letter-spacing:.55em;text-align:center;transition:color 1s ease,text-shadow 1s ease}pre b{color:#fff;font-weight:400;font-style:normal;text-shadow:0 0 4px #fff}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<t.length;r++){var u=t[r];"number"==typeof u[0]&&o[u[0]]||(n&&!u[2]?u[2]=n:n&&(u[2]="("+u[2]+") and ("+n+")"),e.push(u))}},e}},function(e,t){function n(e,t){for(var n=0;n<e.length;n++){var o=e[n],r=l[o.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](o.parts[i]);for(;i<o.parts.length;i++)r.parts.push(d(o.parts[i],t))}else{for(var u=[],i=0;i<o.parts.length;i++)u.push(d(o.parts[i],t));l[o.id]={id:o.id,refs:1,parts:u}}}}function o(e){for(var t=[],n={},o=0;o<e.length;o++){var r=e[o],i=r[0],u=r[1],a=r[2],d=r[3],c={css:u,media:a,sourceMap:d};n[i]?n[i].parts.push(c):t.push(n[i]={id:i,parts:[c]})}return t}function r(e,t){var n=h(),o=w[w.length-1];if("top"===e.insertAt)o?o.nextSibling?n.insertBefore(t,o.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),w.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function i(e){e.parentNode.removeChild(e);var t=w.indexOf(e);t>=0&&w.splice(t,1)}function u(e){var t=document.createElement("style");return t.type="text/css",r(e,t),t}function a(e){var t=document.createElement("link");return t.rel="stylesheet",r(e,t),t}function d(e,t){var n,o,r;if(t.singleton){var d=y++;n=v||(v=u(t)),o=c.bind(null,n,d,!1),r=c.bind(null,n,d,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=a(t),o=s.bind(null,n),r=function(){i(n),n.href&&URL.revokeObjectURL(n.href)}):(n=u(t),o=f.bind(null,n),r=function(){i(n)});return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}function c(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=g(t,r);else{var i=document.createTextNode(r),u=e.childNodes;u[t]&&e.removeChild(u[t]),u.length?e.insertBefore(i,u[t]):e.appendChild(i)}}function f(e,t){var n=t.css,o=t.media;if(o&&e.setAttribute("media",o),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function s(e,t){var n=t.css,o=t.sourceMap;o&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var r=new Blob([n],{type:"text/css"}),i=e.href;e.href=URL.createObjectURL(r),i&&URL.revokeObjectURL(i)}var l={},m=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},p=m(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),h=m(function(){return document.head||document.getElementsByTagName("head")[0]}),v=null,y=0,w=[];e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},"undefined"==typeof t.singleton&&(t.singleton=p()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var r=o(e);return n(r,t),function(e){for(var i=[],u=0;u<r.length;u++){var a=r[u],d=l[a.id];d.refs--,i.push(d)}if(e){var c=o(e);n(c,t)}for(var u=0;u<i.length;u++){var d=i[u];if(0===d.refs){for(var f=0;f<d.parts.length;f++)d.parts[f]();delete l[d.id]}}}};var g=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){var o=n(3);"string"==typeof o&&(o=[[e.i,o,""]]),n(5)(o,{}),o.locals&&(e.exports=o.locals)},function(e,t,n){e.exports=n(0)}]);