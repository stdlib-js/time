// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-read-only-property@v0.2.2-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-time@v0.3.2-esm/index.mjs";export{default as constants}from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-time@v0.3.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/string-base-lowercase@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-date-object@v0.2.2-esm/index.mjs";import{isPrimitive as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.2.2-esm/index.mjs";import{isPrimitive as a}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/string-lowercase@v0.3.0-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-leap-year@v0.2.2-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.2.2-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-duration-string@v0.2.2-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-time-hours-in-day@v0.3.2-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@v0.2.3-esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-time-minutes-in-day@v0.3.2-esm/index.mjs";import{isPrimitive as h}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-round@esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-date-object@esm/index.mjs";import{isPrimitive as w}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import{isPrimitive as b}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@esm/index.mjs";import y from"https://cdn.jsdelivr.net/gh/stdlib-js/string-lowercase@esm/index.mjs";import T from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-leap-year@esm/index.mjs";import E from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-time-seconds-in-day@esm/index.mjs";import{primitives as V}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer-array@esm/index.mjs";var M=/(\d+)([a-z]+)/gi,x={d:"days",h:"hours",m:"minutes",s:"seconds",ms:"milliseconds"};function D(e){var r,n,i;if(n={days:0,hours:0,minutes:0,seconds:0,milliseconds:0},0===e.length)return n;for(e=t(e),r=M.exec(e);r;)(i=x[r[2]])&&(n[i]=parseInt(r[1],10)),r=M.exec(e);return n}var F={};function Y(){return(new Date).getFullYear()}e(F,"parseDuration",D);var I={1:31,2:28,3:31,4:30,5:31,6:30,7:31,8:31,9:30,10:31,11:30,12:31,jan:31,january:31,feb:28,february:28,mar:31,march:31,apr:30,april:30,may:31,jun:30,june:30,jul:31,july:31,aug:31,august:31,sep:30,september:30,oct:31,october:31,nov:30,november:30,dec:31,december:31};function S(e,r){var t,l,m,d;if(0===arguments.length)l=(d=new Date).getMonth()+1,m=d.getFullYear();else if(1===arguments.length)if(n(e))l=(d=e).getMonth()+1,m=d.getFullYear();else{if(!i(e)&&!a(e))throw new TypeError(u("invalid argument. First argument must be either a string, integer, or Date object. Value: `%s`.",e));m=Y(),l=e}else{if(!i(e)&&!a(e))throw new TypeError(u("invalid argument. First argument must be either a string or integer. Value: `%s`.",e));if(!a(r))throw new TypeError(u("invalid argument. Second argument must be an integer. Value: `%s`.",r));l=e,m=r}if(a(l)&&(l<1||l>12))throw new RangeError(u("invalid argument. An integer month value must be on the interval: [1, 12]. Value: `%s`.",l));if(l=s(l.toString()),void 0===(t=I[l]))throw new Error(u("invalid argument. Must provide a recognized month. Value: `%s`.",l));return 28===t&&o(m)&&(t+=1),t}var O={1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,10:10,11:11,12:12,jan:1,january:1,feb:2,february:2,mar:3,march:3,apr:4,april:4,may:5,jun:6,june:6,jul:7,july:7,aug:8,august:8,sep:9,september:9,oct:10,october:10,nov:11,november:11,dec:12,december:12},z=[31,28,31,30,31,30,31,31,30,31,30,31];function A(e,r,t){var l,m,d,g,h,f,c;if(0===arguments.length)g=(l=new Date).getMonth()+1,h=l.getFullYear(),f=l.getDate();else if(1===arguments.length){if(!n(e))throw new TypeError(u("invalid argument. If only providing a single argument, must provide a Date object. Value: `%s`.",e));g=(l=e).getMonth()+1,h=l.getFullYear(),f=l.getDate()}else{if(!i(e)&&!a(e))throw new TypeError(u("invalid argument. First argument must be either a string or integer. Value: `%s`.",e));if(!a(r))throw new TypeError(u("invalid argument. Second argument must be an integer. Value: `%s`.",r));if(!a(t))throw new TypeError(u("invalid argument. Third argument must be an integer. Value: `%s`.",t));g=e,f=r,h=t}if(m=S(g,h),f<1||f>m)throw new RangeError(u("invalid argument. Day number must be on the interval: [1, %u]. Value: `%d`.",m,f));for(g=s(g.toString()),g=O[g],d=0,c=0;c<g-1;c++)d+=z[c],1===c&&o(h)&&(d+=1);return d+=f}var R={1:1,2:1,3:1,4:2,5:2,6:2,7:3,8:3,9:3,10:4,11:4,12:4,jan:1,january:1,feb:1,february:1,mar:1,march:1,apr:2,april:2,may:2,jun:2,june:2,jul:3,july:3,aug:3,august:3,sep:3,september:3,oct:4,october:4,nov:4,november:4,dec:4,december:4};function _(e){var r,t;if(arguments.length)if(n(e))r=e.getMonth()+1;else{if(!i(e)&&!a(e))throw new TypeError(u("invalid argument. Must provide either a string, integer, or Date object. Value: `%s`.",e));r=e}else r=(new Date).getMonth()+1;if(a(r)&&(r<1||r>12))throw new RangeError(u("invalid argument. An integer month value must be on the interval: [1, 12]. Value: `%s`.",r));if(r=s(r.toString()),void 0===(t=R[r]))throw new Error(u("invalid argument. Must provide a recognized month. Value: `%s`.",e));return t}var k=[0,90,181,273],P=[0,91,182,274];function L(e,r,t){var s,l,m,d;if(0===arguments.length)m=_(s=new Date),d=A(s),l=s.getFullYear();else if(1===arguments.length){if(!n(e))throw new TypeError(u("invalid argument. If only providing a single argument, must provide a Date object. Value: `%s`.",e));m=_(s=e),d=A(s),l=s.getFullYear()}else{if(!i(e)&&!a(e))throw new TypeError(u("invalid argument. First argument must be either a string or integer. Value: `%s`.",e));if(!a(r))throw new TypeError(u("invalid argument. Second argument must be an integer. Value: `%s`.",r));if(!a(t))throw new TypeError(u("invalid argument. Third argument must be an integer. Value: `%s`.",t));m=_(e),d=A(e,r,t),l=t}return o(l)?d-P[m-1]:d-k[m-1]}function N(e){var r;if(arguments.length)if(n(e))r=e.getFullYear();else{if(!a(e))throw new TypeError(u("invalid argument. Must provide either an integer or a Date object. Value: `%s`.",e));r=e}else r=Y();return o(r)?366:365}function q(e){var r,t;if(!l(e))throw new TypeError(u("invalid argument. Must provide a valid duration string. Value: `%s`.",e));return t=864e5*(r=D(e)).days,t+=36e5*r.hours,t+=6e4*r.minutes,t+=1e3*r.seconds,t+=r.milliseconds}var Q={1:744,2:672,3:744,4:720,5:744,6:720,7:744,8:744,9:720,10:744,11:720,12:744,jan:744,january:744,feb:672,february:672,mar:744,march:744,apr:720,april:720,may:744,jun:720,june:720,jul:744,july:744,aug:744,august:744,sep:720,september:720,oct:744,october:744,nov:720,november:720,dec:744,december:744};function W(e,r){var t,l,d,g;if(0===arguments.length)l=(g=new Date).getMonth()+1,d=g.getFullYear();else if(1===arguments.length)if(n(e))l=(g=e).getMonth()+1,d=g.getFullYear();else{if(!i(e)&&!a(e))throw new TypeError(u("invalid argument. First argument must be either a string, integer, or Date object. Value: `%s`.",e));d=Y(),l=e}else{if(!i(e)&&!a(e))throw new TypeError(u("invalid argument. First argument must be either a string or integer. Value: `%s`.",e));if(!a(r))throw new TypeError(u("invalid argument. Second argument must be an integer. Value: `%s`.",r));l=e,d=r}if(a(l)&&(l<1||l>12))throw new RangeError(u("invalid argument. An integer month value must be on the interval: [1, 12]. Value: `%s`.",l));if(l=s(l.toString()),void 0===(t=Q[l]))throw new Error(u("invalid argument. Must provide a recognized month. Value: `%s`.",l));return 672===t&&o(d)&&(t+=m),t}function B(e){var r;if(arguments.length)if(n(e))r=e.getFullYear();else{if(!a(e))throw new TypeError(u("invalid argument. Must provide either an integer or a Date object. Value: `%s`.",e));r=e}else r=Y();return o(r)?8784:8760}function C(e){return(e+d(e/4)-d(e/100)+d(e/400))%7}function G(e){var r;if(arguments.length)if(n(e))r=e.getFullYear();else{if(!a(e))throw new TypeError(u("invalid argument. Must provide either an integer or a Date object. Value: `%s`.",e));r=e}else r=Y();return 4===C(r)||3===C(r-1)?53:52}var H={1:44640,2:40320,3:44640,4:43200,5:44640,6:43200,7:44640,8:44640,9:43200,10:44640,11:43200,12:44640,jan:44640,january:44640,feb:40320,february:40320,mar:44640,march:44640,apr:43200,april:43200,may:44640,jun:43200,june:43200,jul:44640,july:44640,aug:44640,august:44640,sep:43200,september:43200,oct:44640,october:44640,nov:43200,november:43200,dec:44640,december:44640};function J(e,r){var t,l,m,d;if(0===arguments.length)l=(d=new Date).getMonth()+1,m=d.getFullYear();else if(1===arguments.length)if(n(e))l=(d=e).getMonth()+1,m=d.getFullYear();else{if(!i(e)&&!a(e))throw new TypeError(u("invalid argument. First argument must be either a string, integer, or Date object. Value: `%s`.",e));m=Y(),l=e}else{if(!i(e)&&!a(e))throw new TypeError(u("invalid argument. First argument must be either a string or integer. Value: `%s`.",e));if(!a(r))throw new TypeError(u("invalid argument. Second argument must be an integer. Value: `%s`.",r));l=e,m=r}if(a(l)&&(l<1||l>12))throw new RangeError(u("invalid argument. An integer month value must be on the interval: [1, 12]. Value: `%s`.",l));if(l=s(l.toString()),void 0===(t=H[l]))throw new Error(u("invalid argument. Must provide a recognized month. Value: `%s`.",l));return 40320===t&&o(m)&&(t+=g),t}function K(e){var r;if(arguments.length)if(n(e))r=e.getFullYear();else{if(!a(e))throw new TypeError(u("invalid argument. Must provide either an integer or a Date object. Value: `%s`.",e));r=e}else r=Y();return o(r)?527040:525600}function U(e){var r;if(!h(e))throw new TypeError(c("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));return 0===e?"0ms":(r="",e>=864e5&&(r+=f(e/864e5)+"d",e%=864e5),e>=36e5&&(r+=f(e/36e5)+"h",e%=36e5),e>=6e4&&(r+=f(e/6e4)+"m",e%=6e4),e>=1e3&&(r+=f(e/1e3)+"s",e%=1e3),e>0&&(r+=e+"ms"),r)}var X=v(Date.now)?function(){return 0|p(Date.now()/1e3)}:function(){var e;return e=new Date,0|p(e.getTime()/1e3)},Z={1:2678400,2:2419200,3:2678400,4:2592e3,5:2678400,6:2592e3,7:2678400,8:2678400,9:2592e3,10:2678400,11:2592e3,12:2678400,jan:2678400,january:2678400,feb:2419200,february:2419200,mar:2678400,march:2678400,apr:2592e3,april:2592e3,may:2678400,jun:2592e3,june:2592e3,jul:2678400,july:2678400,aug:2678400,august:2678400,sep:2592e3,september:2592e3,oct:2678400,october:2678400,nov:2592e3,november:2592e3,dec:2678400,december:2678400};function $(e,r){var t,n,i,a;if(0===arguments.length)n=(a=new Date).getMonth()+1,i=a.getFullYear();else if(1===arguments.length)if(j(e))n=(a=e).getMonth()+1,i=a.getFullYear();else{if(!w(e)&&!b(e))throw new TypeError(c("invalid argument. First argument must be either a string, integer, or Date object. Value: `%s`.",e));i=Y(),n=e}else{if(!w(e)&&!b(e))throw new TypeError(c("invalid argument. First argument must be either a string or integer. Value: `%s`.",e));if(!b(r))throw new TypeError(c("invalid argument. Second argument must be an integer. Value: `%s`.",r));n=e,i=r}if(b(n)&&(n<1||n>12))throw new RangeError(c("invalid argument. An integer month value must be on the interval: [1, 12]. Value: `%s`.",n));if(n=y(n.toString()),void 0===(t=Z[n]))throw new Error(c("invalid argument. Must provide a recognized month. Value: `%s`.",n));return 2419200===t&&T(i)&&(t+=E),t}function ee(e){var r;if(arguments.length)if(n(e))r=e.getFullYear();else{if(!b(e))throw new TypeError(c("invalid argument. Must provide either an integer or a Date object. Value: `%s`.",e));r=e}else r=Y();return T(r)?31622400:31536e3}function re(e){if(e.__esModule)return e;var r=e.default;if("function"==typeof r){var t=function e(){return this instanceof e?Reflect.construct(r,arguments,this.constructor):r.apply(this,arguments)};t.prototype=r.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(e).forEach((function(r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})})),t}var te="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};function ne(){throw new Error("setTimeout has not been defined")}function ie(){throw new Error("clearTimeout has not been defined")}var ae=ne,se=ie;function oe(e){if(ae===setTimeout)return setTimeout(e,0);if((ae===ne||!ae)&&setTimeout)return ae=setTimeout,setTimeout(e,0);try{return ae(e,0)}catch(r){try{return ae.call(null,e,0)}catch(r){return ae.call(this,e,0)}}}"function"==typeof te.setTimeout&&(ae=setTimeout),"function"==typeof te.clearTimeout&&(se=clearTimeout);var ue,le=[],me=!1,de=-1;function ge(){me&&ue&&(me=!1,ue.length?le=ue.concat(le):de=-1,le.length&&he())}function he(){if(!me){var e=oe(ge);me=!0;for(var r=le.length;r;){for(ue=le,le=[];++de<r;)ue&&ue[de].run();de=-1,r=le.length}ue=null,me=!1,function(e){if(se===clearTimeout)return clearTimeout(e);if((se===ie||!se)&&clearTimeout)return se=clearTimeout,clearTimeout(e);try{return se(e)}catch(r){try{return se.call(null,e)}catch(r){return se.call(this,e)}}}(e)}}function fe(e){var r=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)r[t-1]=arguments[t];le.push(new ce(e,r)),1!==le.length||me||oe(he)}function ce(e,r){this.fun=e,this.array=r}ce.prototype.run=function(){this.fun.apply(null,this.array)};var ve="browser",pe="browser",je={},we=[],be={},ye={},Te={};function Ee(){}var Ve=Ee,Me=Ee,xe=Ee,De=Ee,Fe=Ee,Ye=Ee,Ie=Ee;function Se(e){throw new Error("process.binding is not supported")}function Oe(){return"/"}function ze(e){throw new Error("process.chdir is not supported")}function Ae(){return 0}var Re=te.performance||{},_e=Re.now||Re.mozNow||Re.msNow||Re.oNow||Re.webkitNow||function(){return(new Date).getTime()};function ke(e){var r=.001*_e.call(Re),t=Math.floor(r),n=Math.floor(r%1*1e9);return e&&(t-=e[0],(n-=e[1])<0&&(t--,n+=1e9)),[t,n]}var Pe=new Date;function Le(){return(new Date-Pe)/1e3}var Ne={nextTick:fe,title:ve,browser:true,env:je,argv:we,version:"",versions:be,on:Ve,addListener:Me,once:xe,off:De,removeListener:Fe,removeAllListeners:Ye,emit:Ie,binding:Se,cwd:Oe,chdir:ze,umask:Ae,hrtime:ke,platform:pe,release:ye,config:Te,uptime:Le},qe=re(Object.freeze({__proto__:null,addListener:Me,argv:we,binding:Se,browser:true,chdir:ze,config:Te,cwd:Oe,default:Ne,emit:Ie,env:je,hrtime:ke,nextTick:fe,off:De,on:Ve,once:xe,platform:pe,release:ye,removeAllListeners:Ye,removeListener:Fe,title:ve,umask:Ae,uptime:Le,version:"",versions:be}));function Qe(){return qe.hrtime()}function We(e){var r,t,n=Qe();if(!V(e))throw new TypeError(c("invalid argument. Must provide an array of nonnegative integers. Value: `%s`.",e));if(2!==e.length)throw new RangeError(c("invalid argument. Input array must contain two elements. Value: `%s`.",e));return r=n[0]-e[0],t=n[1]-e[1],r>0&&t<0?(r-=1,t+=1e9):r<0&&t>0&&(r+=1,t-=1e9),[r,t]}var Be={};e(Be,"constants",r),e(Be,"base",F),e(Be,"currentYear",Y),e(Be,"dayOfQuarter",L),e(Be,"dayOfYear",A),e(Be,"daysInMonth",S),e(Be,"daysInYear",N),e(Be,"duration2ms",q),e(Be,"hoursInMonth",W),e(Be,"hoursInYear",B),e(Be,"isoWeeksInYear",G),e(Be,"minutesInMonth",J),e(Be,"minutesInYear",K),e(Be,"ms2duration",U),e(Be,"now",X),e(Be,"quarterOfYear",_),e(Be,"secondsInMonth",$),e(Be,"secondsInYear",ee),e(Be,"tic",Qe),e(Be,"toc",We);export{F as base,Y as currentYear,L as dayOfQuarter,A as dayOfYear,S as daysInMonth,N as daysInYear,Be as default,q as duration2ms,W as hoursInMonth,B as hoursInYear,G as isoWeeksInYear,J as minutesInMonth,K as minutesInYear,U as ms2duration,X as now,_ as quarterOfYear,$ as secondsInMonth,ee as secondsInYear,Qe as tic,We as toc};
//# sourceMappingURL=index.mjs.map