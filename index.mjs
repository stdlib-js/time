// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-read-only-property@v0.1.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-time@v0.2.1-esm/index.mjs";export{default as constants}from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-time@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/string-base-lowercase@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-date-object@v0.1.1-esm/index.mjs";import{isPrimitive as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.1.1-esm/index.mjs";import{isPrimitive as a}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/string-lowercase@v0.1.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-leap-year@v0.1.0-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-leap-year@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-duration-string@v0.1.1-esm/index.mjs";import{isPrimitive as g}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-time-hours-in-day@esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-time-minutes-in-day@esm/index.mjs";import{isPrimitive as c}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.1.0-esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@v0.1.1-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.1.1-esm/index.mjs";import w from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-round@v0.1.1-esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-time-seconds-in-day@v0.2.1-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";import{primitives as y}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer-array@v0.1.0-esm/index.mjs";var T=/(\d+)([a-z]+)/gi,E={d:"days",h:"hours",m:"minutes",s:"seconds",ms:"milliseconds"};function V(e){var r,n,i;if(n={days:0,hours:0,minutes:0,seconds:0,milliseconds:0},0===e.length)return n;for(e=t(e),r=T.exec(e);r;)(i=E[r[2]])&&(n[i]=parseInt(r[1],10)),r=T.exec(e);return n}var M={};function D(){return(new Date).getFullYear()}e(M,"parseDuration",V);var x={1:31,2:28,3:31,4:30,5:31,6:30,7:31,8:31,9:30,10:31,11:30,12:31,jan:31,january:31,feb:28,february:28,mar:31,march:31,apr:30,april:30,may:31,jun:30,june:30,jul:31,july:31,aug:31,august:31,sep:30,september:30,oct:31,october:31,nov:30,november:30,dec:31,december:31};function F(e,r){var t,l,m,g;if(0===arguments.length)l=(g=new Date).getMonth()+1,m=g.getFullYear();else if(1===arguments.length)if(n(e))l=(g=e).getMonth()+1,m=g.getFullYear();else{if(!i(e)&&!a(e))throw new TypeError(u("invalid argument. First argument must be either a string, integer, or Date object. Value: `%s`.",e));m=D(),l=e}else{if(!i(e)&&!a(e))throw new TypeError(u("invalid argument. First argument must be either a string or integer. Value: `%s`.",e));if(!a(r))throw new TypeError(u("invalid argument. Second argument must be an integer. Value: `%s`.",r));l=e,m=r}if(a(l)&&(l<1||l>12))throw new RangeError(u("invalid argument. An integer month value must be on the interval: [1, 12]. Value: `%s`.",l));if(l=s(l.toString()),void 0===(t=x[l]))throw new Error(u("invalid argument. Must provide a recognized month. Value: `%s`.",l));return 28===t&&o(m)&&(t+=1),t}var Y={1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,10:10,11:11,12:12,jan:1,january:1,feb:2,february:2,mar:3,march:3,apr:4,april:4,may:5,jun:6,june:6,jul:7,july:7,aug:8,august:8,sep:9,september:9,oct:10,october:10,nov:11,november:11,dec:12,december:12},I=[31,28,31,30,31,30,31,31,30,31,30,31];function S(e,r,t){var o,m,g,d,f,h,c;if(0===arguments.length)d=(o=new Date).getMonth()+1,f=o.getFullYear(),h=o.getDate();else if(1===arguments.length){if(!n(e))throw new TypeError(u("invalid argument. If only providing a single argument, must provide a Date object. Value: `%s`.",e));d=(o=e).getMonth()+1,f=o.getFullYear(),h=o.getDate()}else{if(!i(e)&&!a(e))throw new TypeError(u("invalid argument. First argument must be either a string or integer. Value: `%s`.",e));if(!a(r))throw new TypeError(u("invalid argument. Second argument must be an integer. Value: `%s`.",r));if(!a(t))throw new TypeError(u("invalid argument. Third argument must be an integer. Value: `%s`.",t));d=e,h=r,f=t}if(m=F(d,f),h<1||h>m)throw new RangeError(u("invalid argument. Day number must be on the interval: [1, %u]. Value: `%d`.",m,h));for(d=s(d.toString()),d=Y[d],g=0,c=0;c<d-1;c++)g+=I[c],1===c&&l(f)&&(g+=1);return g+=h}var O={1:1,2:1,3:1,4:2,5:2,6:2,7:3,8:3,9:3,10:4,11:4,12:4,jan:1,january:1,feb:1,february:1,mar:1,march:1,apr:2,april:2,may:2,jun:2,june:2,jul:3,july:3,aug:3,august:3,sep:3,september:3,oct:4,october:4,nov:4,november:4,dec:4,december:4};function z(e){var r,t;if(arguments.length)if(n(e))r=e.getMonth()+1;else{if(!i(e)&&!a(e))throw new TypeError(u("invalid argument. Must provide either a string, integer, or Date object. Value: `%s`.",e));r=e}else r=(new Date).getMonth()+1;if(a(r)&&(r<1||r>12))throw new RangeError(u("invalid argument. An integer month value must be on the interval: [1, 12]. Value: `%s`.",r));if(r=s(r.toString()),void 0===(t=O[r]))throw new Error(u("invalid argument. Must provide a recognized month. Value: `%s`.",e));return t}var A=[0,90,181,273],_=[0,91,182,274];function k(e,r,t){var s,l,m,g;if(0===arguments.length)m=z(s=new Date),g=S(s),l=s.getFullYear();else if(1===arguments.length){if(!n(e))throw new TypeError(u("invalid argument. If only providing a single argument, must provide a Date object. Value: `%s`.",e));m=z(s=e),g=S(s),l=s.getFullYear()}else{if(!i(e)&&!a(e))throw new TypeError(u("invalid argument. First argument must be either a string or integer. Value: `%s`.",e));if(!a(r))throw new TypeError(u("invalid argument. Second argument must be an integer. Value: `%s`.",r));if(!a(t))throw new TypeError(u("invalid argument. Third argument must be an integer. Value: `%s`.",t));m=z(e),g=S(e,r,t),l=t}return o(l)?g-_[m-1]:g-A[m-1]}function R(e){var r;if(arguments.length)if(n(e))r=e.getFullYear();else{if(!a(e))throw new TypeError(u("invalid argument. Must provide either an integer or a Date object. Value: `%s`.",e));r=e}else r=D();return o(r)?366:365}function L(e){var r,t;if(!m(e))throw new TypeError(u("invalid argument. Must provide a valid duration string. Value: `%s`.",e));return t=864e5*(r=V(e)).days,t+=36e5*r.hours,t+=6e4*r.minutes,t+=1e3*r.seconds,t+=r.milliseconds}var P={1:744,2:672,3:744,4:720,5:744,6:720,7:744,8:744,9:720,10:744,11:720,12:744,jan:744,january:744,feb:672,february:672,mar:744,march:744,apr:720,april:720,may:744,jun:720,june:720,jul:744,july:744,aug:744,august:744,sep:720,september:720,oct:744,october:744,nov:720,november:720,dec:744,december:744};function N(e,r){var t,a,o,m;if(0===arguments.length)a=(m=new Date).getMonth()+1,o=m.getFullYear();else if(1===arguments.length)if(n(e))a=(m=e).getMonth()+1,o=m.getFullYear();else{if(!i(e)&&!g(e))throw new TypeError(u("invalid argument. First argument must be either a string, integer, or Date object. Value: `%s`.",e));o=D(),a=e}else{if(!i(e)&&!g(e))throw new TypeError(u("invalid argument. First argument must be either a string or integer. Value: `%s`.",e));if(!g(r))throw new TypeError(u("invalid argument. Second argument must be an integer. Value: `%s`.",r));a=e,o=r}if(g(a)&&(a<1||a>12))throw new RangeError(u("invalid argument. An integer month value must be on the interval: [1, 12]. Value: `%s`.",a));if(a=s(a.toString()),void 0===(t=P[a]))throw new Error(u("invalid argument. Must provide a recognized month. Value: `%s`.",a));return 672===t&&l(o)&&(t+=d),t}function q(e){var r;if(arguments.length)if(n(e))r=e.getFullYear();else{if(!a(e))throw new TypeError(u("invalid argument. Must provide either an integer or a Date object. Value: `%s`.",e));r=e}else r=D();return l(r)?8784:8760}function Q(e){return(e+f(e/4)-f(e/100)+f(e/400))%7}function W(e){var r;if(arguments.length)if(n(e))r=e.getFullYear();else{if(!a(e))throw new TypeError(u("invalid argument. Must provide either an integer or a Date object. Value: `%s`.",e));r=e}else r=D();return 4===Q(r)||3===Q(r-1)?53:52}var B={1:44640,2:40320,3:44640,4:43200,5:44640,6:43200,7:44640,8:44640,9:43200,10:44640,11:43200,12:44640,jan:44640,january:44640,feb:40320,february:40320,mar:44640,march:44640,apr:43200,april:43200,may:44640,jun:43200,june:43200,jul:44640,july:44640,aug:44640,august:44640,sep:43200,september:43200,oct:44640,october:44640,nov:43200,november:43200,dec:44640,december:44640};function C(e,r){var t,a,l,m;if(0===arguments.length)a=(m=new Date).getMonth()+1,l=m.getFullYear();else if(1===arguments.length)if(n(e))a=(m=e).getMonth()+1,l=m.getFullYear();else{if(!i(e)&&!g(e))throw new TypeError(u("invalid argument. First argument must be either a string, integer, or Date object. Value: `%s`.",e));l=D(),a=e}else{if(!i(e)&&!g(e))throw new TypeError(u("invalid argument. First argument must be either a string or integer. Value: `%s`.",e));if(!g(r))throw new TypeError(u("invalid argument. Second argument must be an integer. Value: `%s`.",r));a=e,l=r}if(g(a)&&(a<1||a>12))throw new RangeError(u("invalid argument. An integer month value must be on the interval: [1, 12]. Value: `%s`.",a));if(a=s(a.toString()),void 0===(t=B[a]))throw new Error(u("invalid argument. Must provide a recognized month. Value: `%s`.",a));return 40320===t&&o(l)&&(t+=h),t}function G(e){var r;if(arguments.length)if(n(e))r=e.getFullYear();else{if(!a(e))throw new TypeError(u("invalid argument. Must provide either an integer or a Date object. Value: `%s`.",e));r=e}else r=D();return l(r)?527040:525600}function H(e){var r;if(!c(e))throw new TypeError(u("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));return 0===e?"0ms":(r="",e>=864e5&&(r+=v(e/864e5)+"d",e%=864e5),e>=36e5&&(r+=v(e/36e5)+"h",e%=36e5),e>=6e4&&(r+=v(e/6e4)+"m",e%=6e4),e>=1e3&&(r+=v(e/1e3)+"s",e%=1e3),e>0&&(r+=e+"ms"),r)}var J=p(Date.now)?function(){return 0|w(Date.now()/1e3)}:function(){var e;return e=new Date,0|w(e.getTime()/1e3)},K={1:2678400,2:2419200,3:2678400,4:2592e3,5:2678400,6:2592e3,7:2678400,8:2678400,9:2592e3,10:2678400,11:2592e3,12:2678400,jan:2678400,january:2678400,feb:2419200,february:2419200,mar:2678400,march:2678400,apr:2592e3,april:2592e3,may:2678400,jun:2592e3,june:2592e3,jul:2678400,july:2678400,aug:2678400,august:2678400,sep:2592e3,september:2592e3,oct:2678400,october:2678400,nov:2592e3,november:2592e3,dec:2678400,december:2678400};function U(e,r){var t,l,m,g;if(0===arguments.length)l=(g=new Date).getMonth()+1,m=g.getFullYear();else if(1===arguments.length)if(n(e))l=(g=e).getMonth()+1,m=g.getFullYear();else{if(!i(e)&&!a(e))throw new TypeError(u("invalid argument. First argument must be either a string, integer, or Date object. Value: `%s`.",e));m=D(),l=e}else{if(!i(e)&&!a(e))throw new TypeError(u("invalid argument. First argument must be either a string or integer. Value: `%s`.",e));if(!a(r))throw new TypeError(u("invalid argument. Second argument must be an integer. Value: `%s`.",r));l=e,m=r}if(a(l)&&(l<1||l>12))throw new RangeError(u("invalid argument. An integer month value must be on the interval: [1, 12]. Value: `%s`.",l));if(l=s(l.toString()),void 0===(t=K[l]))throw new Error(u("invalid argument. Must provide a recognized month. Value: `%s`.",l));return 2419200===t&&o(m)&&(t+=b),t}function X(e){var r;if(arguments.length)if(n(e))r=e.getFullYear();else{if(!a(e))throw new TypeError(j("invalid argument. Must provide either an integer or a Date object. Value: `%s`.",e));r=e}else r=D();return o(r)?31622400:31536e3}function Z(e){if(e.__esModule)return e;var r=e.default;if("function"==typeof r){var t=function e(){if(this instanceof e){var t=[null];t.push.apply(t,arguments);var n=Function.bind.apply(r,t);return new n}return r.apply(this,arguments)};t.prototype=r.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(e).forEach((function(r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})})),t}var $="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};function ee(){throw new Error("setTimeout has not been defined")}function re(){throw new Error("clearTimeout has not been defined")}var te=ee,ne=re;function ie(e){if(te===setTimeout)return setTimeout(e,0);if((te===ee||!te)&&setTimeout)return te=setTimeout,setTimeout(e,0);try{return te(e,0)}catch(r){try{return te.call(null,e,0)}catch(r){return te.call(this,e,0)}}}"function"==typeof $.setTimeout&&(te=setTimeout),"function"==typeof $.clearTimeout&&(ne=clearTimeout);var ae,se=[],oe=!1,ue=-1;function le(){oe&&ae&&(oe=!1,ae.length?se=ae.concat(se):ue=-1,se.length&&me())}function me(){if(!oe){var e=ie(le);oe=!0;for(var r=se.length;r;){for(ae=se,se=[];++ue<r;)ae&&ae[ue].run();ue=-1,r=se.length}ae=null,oe=!1,function(e){if(ne===clearTimeout)return clearTimeout(e);if((ne===re||!ne)&&clearTimeout)return ne=clearTimeout,clearTimeout(e);try{ne(e)}catch(r){try{return ne.call(null,e)}catch(r){return ne.call(this,e)}}}(e)}}function ge(e){var r=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)r[t-1]=arguments[t];se.push(new de(e,r)),1!==se.length||oe||ie(me)}function de(e,r){this.fun=e,this.array=r}de.prototype.run=function(){this.fun.apply(null,this.array)};var fe={},he=[],ce={},ve={},pe={};function we(){}var be=we,je=we,ye=we,Te=we,Ee=we,Ve=we,Me=we;function De(e){throw new Error("process.binding is not supported")}function xe(){return"/"}function Fe(e){throw new Error("process.chdir is not supported")}function Ye(){return 0}var Ie=$.performance||{},Se=Ie.now||Ie.mozNow||Ie.msNow||Ie.oNow||Ie.webkitNow||function(){return(new Date).getTime()};function Oe(e){var r=.001*Se.call(Ie),t=Math.floor(r),n=Math.floor(r%1*1e9);return e&&(t-=e[0],(n-=e[1])<0&&(t--,n+=1e9)),[t,n]}var ze=new Date;function Ae(){return(new Date-ze)/1e3}var _e={nextTick:ge,title:"browser",browser:true,env:fe,argv:he,version:"",versions:ce,on:be,addListener:je,once:ye,off:Te,removeListener:Ee,removeAllListeners:Ve,emit:Me,binding:De,cwd:xe,chdir:Fe,umask:Ye,hrtime:Oe,platform:"browser",release:ve,config:pe,uptime:Ae},ke=Z(Object.freeze({__proto__:null,addListener:je,argv:he,binding:De,browser:true,chdir:Fe,config:pe,cwd:xe,default:_e,emit:Me,env:fe,hrtime:Oe,nextTick:ge,off:Te,on:be,once:ye,platform:"browser",release:ve,removeAllListeners:Ve,removeListener:Ee,title:"browser",umask:Ye,uptime:Ae,version:"",versions:ce}));function Re(){return ke.hrtime()}function Le(e){var r,t,n=Re();if(!y(e))throw new TypeError(u("invalid argument. Must provide an array of nonnegative integers. Value: `%s`.",e));if(2!==e.length)throw new RangeError(u("invalid argument. Input array must contain two elements. Value: `%s`.",e));return r=n[0]-e[0],t=n[1]-e[1],r>0&&t<0?(r-=1,t+=1e9):r<0&&t>0&&(r+=1,t-=1e9),[r,t]}var Pe={};e(Pe,"constants",r),e(Pe,"base",M),e(Pe,"currentYear",D),e(Pe,"dayOfQuarter",k),e(Pe,"dayOfYear",S),e(Pe,"daysInMonth",F),e(Pe,"daysInYear",R),e(Pe,"duration2ms",L),e(Pe,"hoursInMonth",N),e(Pe,"hoursInYear",q),e(Pe,"isoWeeksInYear",W),e(Pe,"minutesInMonth",C),e(Pe,"minutesInYear",G),e(Pe,"ms2duration",H),e(Pe,"now",J),e(Pe,"quarterOfYear",z),e(Pe,"secondsInMonth",U),e(Pe,"secondsInYear",X),e(Pe,"tic",Re),e(Pe,"toc",Le);export{M as base,D as currentYear,k as dayOfQuarter,S as dayOfYear,F as daysInMonth,R as daysInYear,Pe as default,L as duration2ms,N as hoursInMonth,q as hoursInYear,W as isoWeeksInYear,C as minutesInMonth,G as minutesInYear,H as ms2duration,J as now,z as quarterOfYear,U as secondsInMonth,X as secondsInYear,Re as tic,Le as toc};
//# sourceMappingURL=index.mjs.map
