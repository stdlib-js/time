// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-read-only-property@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-time@esm/index.mjs";export{default as constants}from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-time@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/string-base-lowercase@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-date-object@esm/index.mjs";import{isPrimitive as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import{isPrimitive as a}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/string-lowercase@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-leap-year@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.0.3-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-duration-string@v0.0.1-esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-time-hours-in-day@v0.0.8-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-time-minutes-in-day@v0.0.8-esm/index.mjs";import{isPrimitive as h}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-round@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-time-seconds-in-day@esm/index.mjs";import{primitives as w}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer-array@esm/index.mjs";var b=/(\d+)([a-z]+)/gi,j={d:"days",h:"hours",m:"minutes",s:"seconds",ms:"milliseconds"};function y(e){var r,n,i;if(n={days:0,hours:0,minutes:0,seconds:0,milliseconds:0},0===e.length)return n;for(e=t(e),r=b.exec(e);r;)(i=j[r[2]])&&(n[i]=parseInt(r[1],10)),r=b.exec(e);return n}var T={};function E(){return(new Date).getFullYear()}e(T,"parseDuration",y);var V={1:31,2:28,3:31,4:30,5:31,6:30,7:31,8:31,9:30,10:31,11:30,12:31,jan:31,january:31,feb:28,february:28,mar:31,march:31,apr:30,april:30,may:31,jun:30,june:30,jul:31,july:31,aug:31,august:31,sep:30,september:30,oct:31,october:31,nov:30,november:30,dec:31,december:31};function M(e,r){var t,l,m,g;if(0===arguments.length)l=(g=new Date).getMonth()+1,m=g.getFullYear();else if(1===arguments.length)if(n(e))l=(g=e).getMonth()+1,m=g.getFullYear();else{if(!i(e)&&!a(e))throw new TypeError(u("invalid argument. First argument must be either a string, integer, or Date object. Value: `%s`.",e));m=E(),l=e}else{if(!i(e)&&!a(e))throw new TypeError(u("invalid argument. First argument must be either a string or integer. Value: `%s`.",e));if(!a(r))throw new TypeError(u("invalid argument. Second argument must be an integer. Value: `%s`.",r));l=e,m=r}if(a(l)&&(l<1||l>12))throw new RangeError(u("invalid argument. An integer month value must be on the interval: [1, 12]. Value: `%s`.",l));if(l=o(l.toString()),void 0===(t=V[l]))throw new Error(u("invalid argument. Must provide a recognized month. Value: `%s`.",l));return 28===t&&s(m)&&(t+=1),t}var D={1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,10:10,11:11,12:12,jan:1,january:1,feb:2,february:2,mar:3,march:3,apr:4,april:4,may:5,jun:6,june:6,jul:7,july:7,aug:8,august:8,sep:9,september:9,oct:10,october:10,nov:11,november:11,dec:12,december:12},F=[31,28,31,30,31,30,31,31,30,31,30,31];function x(e,r,t){var l,m,g,d,f,h,c;if(0===arguments.length)d=(l=new Date).getMonth()+1,f=l.getFullYear(),h=l.getDate();else if(1===arguments.length){if(!n(e))throw new TypeError(u("invalid argument. If only providing a single argument, must provide a Date object. Value: `%s`.",e));d=(l=e).getMonth()+1,f=l.getFullYear(),h=l.getDate()}else{if(!i(e)&&!a(e))throw new TypeError(u("invalid argument. First argument must be either a string or integer. Value: `%s`.",e));if(!a(r))throw new TypeError(u("invalid argument. Second argument must be an integer. Value: `%s`.",r));if(!a(t))throw new TypeError(u("invalid argument. Third argument must be an integer. Value: `%s`.",t));d=e,h=r,f=t}if(m=M(d,f),h<1||h>m)throw new RangeError(u("invalid argument. Day number must be on the interval: [1, %u]. Value: `%d`.",m,h));for(d=o(d.toString()),d=D[d],g=0,c=0;c<d-1;c++)g+=F[c],1===c&&s(f)&&(g+=1);return g+=h}var Y={1:1,2:1,3:1,4:2,5:2,6:2,7:3,8:3,9:3,10:4,11:4,12:4,jan:1,january:1,feb:1,february:1,mar:1,march:1,apr:2,april:2,may:2,jun:2,june:2,jul:3,july:3,aug:3,august:3,sep:3,september:3,oct:4,october:4,nov:4,november:4,dec:4,december:4};function I(e){var r,t;if(arguments.length)if(n(e))r=e.getMonth()+1;else{if(!i(e)&&!a(e))throw new TypeError(l("invalid argument. Must provide either a string, integer, or Date object. Value: `%s`.",e));r=e}else r=(new Date).getMonth()+1;if(a(r)&&(r<1||r>12))throw new RangeError(l("invalid argument. An integer month value must be on the interval: [1, 12]. Value: `%s`.",r));if(r=o(r.toString()),void 0===(t=Y[r]))throw new Error(l("invalid argument. Must provide a recognized month. Value: `%s`.",e));return t}var S=[0,90,181,273],O=[0,91,182,274];function z(e,r,t){var o,l,m,g;if(0===arguments.length)m=I(o=new Date),g=x(o),l=o.getFullYear();else if(1===arguments.length){if(!n(e))throw new TypeError(u("invalid argument. If only providing a single argument, must provide a Date object. Value: `%s`.",e));m=I(o=e),g=x(o),l=o.getFullYear()}else{if(!i(e)&&!a(e))throw new TypeError(u("invalid argument. First argument must be either a string or integer. Value: `%s`.",e));if(!a(r))throw new TypeError(u("invalid argument. Second argument must be an integer. Value: `%s`.",r));if(!a(t))throw new TypeError(u("invalid argument. Third argument must be an integer. Value: `%s`.",t));m=I(e),g=x(e,r,t),l=t}return s(l)?g-O[m-1]:g-S[m-1]}function A(e){var r;if(arguments.length)if(n(e))r=e.getFullYear();else{if(!a(e))throw new TypeError(u("invalid argument. Must provide either an integer or a Date object. Value: `%s`.",e));r=e}else r=E();return s(r)?366:365}function _(e){var r,t;if(!m(e))throw new TypeError(u("invalid argument. Must provide a valid duration string. Value: `%s`.",e));return t=864e5*(r=y(e)).days,t+=36e5*r.hours,t+=6e4*r.minutes,t+=1e3*r.seconds,t+=r.milliseconds}var k={1:744,2:672,3:744,4:720,5:744,6:720,7:744,8:744,9:720,10:744,11:720,12:744,jan:744,january:744,feb:672,february:672,mar:744,march:744,apr:720,april:720,may:744,jun:720,june:720,jul:744,july:744,aug:744,august:744,sep:720,september:720,oct:744,october:744,nov:720,november:720,dec:744,december:744};function R(e,r){var t,l,m,d;if(0===arguments.length)l=(d=new Date).getMonth()+1,m=d.getFullYear();else if(1===arguments.length)if(n(e))l=(d=e).getMonth()+1,m=d.getFullYear();else{if(!i(e)&&!a(e))throw new TypeError(u("invalid argument. First argument must be either a string, integer, or Date object. Value: `%s`.",e));m=E(),l=e}else{if(!i(e)&&!a(e))throw new TypeError(u("invalid argument. First argument must be either a string or integer. Value: `%s`.",e));if(!a(r))throw new TypeError(u("invalid argument. Second argument must be an integer. Value: `%s`.",r));l=e,m=r}if(a(l)&&(l<1||l>12))throw new RangeError(u("invalid argument. An integer month value must be on the interval: [1, 12]. Value: `%s`.",l));if(l=o(l.toString()),void 0===(t=k[l]))throw new Error(u("invalid argument. Must provide a recognized month. Value: `%s`.",l));return 672===t&&s(m)&&(t+=g),t}function L(e){var r;if(arguments.length)if(n(e))r=e.getFullYear();else{if(!a(e))throw new TypeError(u("invalid argument. Must provide either an integer or a Date object. Value: `%s`.",e));r=e}else r=E();return s(r)?8784:8760}function P(e){return(e+d(e/4)-d(e/100)+d(e/400))%7}function N(e){var r;if(arguments.length)if(n(e))r=e.getFullYear();else{if(!a(e))throw new TypeError(u("invalid argument. Must provide either an integer or a Date object. Value: `%s`.",e));r=e}else r=E();return 4===P(r)||3===P(r-1)?53:52}var q={1:44640,2:40320,3:44640,4:43200,5:44640,6:43200,7:44640,8:44640,9:43200,10:44640,11:43200,12:44640,jan:44640,january:44640,feb:40320,february:40320,mar:44640,march:44640,apr:43200,april:43200,may:44640,jun:43200,june:43200,jul:44640,july:44640,aug:44640,august:44640,sep:43200,september:43200,oct:44640,october:44640,nov:43200,november:43200,dec:44640,december:44640};function Q(e,r){var t,l,m,g;if(0===arguments.length)l=(g=new Date).getMonth()+1,m=g.getFullYear();else if(1===arguments.length)if(n(e))l=(g=e).getMonth()+1,m=g.getFullYear();else{if(!i(e)&&!a(e))throw new TypeError(u("invalid argument. First argument must be either a string, integer, or Date object. Value: `%s`.",e));m=E(),l=e}else{if(!i(e)&&!a(e))throw new TypeError(u("invalid argument. First argument must be either a string or integer. Value: `%s`.",e));if(!a(r))throw new TypeError(u("invalid argument. Second argument must be an integer. Value: `%s`.",r));l=e,m=r}if(a(l)&&(l<1||l>12))throw new RangeError(u("invalid argument. An integer month value must be on the interval: [1, 12]. Value: `%s`.",l));if(l=o(l.toString()),void 0===(t=q[l]))throw new Error(u("invalid argument. Must provide a recognized month. Value: `%s`.",l));return 40320===t&&s(m)&&(t+=f),t}function W(e){var r;if(arguments.length)if(n(e))r=e.getFullYear();else{if(!a(e))throw new TypeError(u("invalid argument. Must provide either an integer or a Date object. Value: `%s`.",e));r=e}else r=E();return s(r)?527040:525600}function B(e){var r;if(!h(e))throw new TypeError(u("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));return 0===e?"0ms":(r="",e>=864e5&&(r+=d(e/864e5)+"d",e%=864e5),e>=36e5&&(r+=d(e/36e5)+"h",e%=36e5),e>=6e4&&(r+=d(e/6e4)+"m",e%=6e4),e>=1e3&&(r+=d(e/1e3)+"s",e%=1e3),e>0&&(r+=e+"ms"),r)}var C=c(Date.now)?function(){return 0|v(Date.now()/1e3)}:function(){var e;return e=new Date,0|v(e.getTime()/1e3)},G={1:2678400,2:2419200,3:2678400,4:2592e3,5:2678400,6:2592e3,7:2678400,8:2678400,9:2592e3,10:2678400,11:2592e3,12:2678400,jan:2678400,january:2678400,feb:2419200,february:2419200,mar:2678400,march:2678400,apr:2592e3,april:2592e3,may:2678400,jun:2592e3,june:2592e3,jul:2678400,july:2678400,aug:2678400,august:2678400,sep:2592e3,september:2592e3,oct:2678400,october:2678400,nov:2592e3,november:2592e3,dec:2678400,december:2678400};function H(e,r){var t,u,m,g;if(0===arguments.length)u=(g=new Date).getMonth()+1,m=g.getFullYear();else if(1===arguments.length)if(n(e))u=(g=e).getMonth()+1,m=g.getFullYear();else{if(!i(e)&&!a(e))throw new TypeError(l("invalid argument. First argument must be either a string, integer, or Date object. Value: `%s`.",e));m=E(),u=e}else{if(!i(e)&&!a(e))throw new TypeError(l("invalid argument. First argument must be either a string or integer. Value: `%s`.",e));if(!a(r))throw new TypeError(l("invalid argument. Second argument must be an integer. Value: `%s`.",r));u=e,m=r}if(a(u)&&(u<1||u>12))throw new RangeError(l("invalid argument. An integer month value must be on the interval: [1, 12]. Value: `%s`.",u));if(u=o(u.toString()),void 0===(t=G[u]))throw new Error(l("invalid argument. Must provide a recognized month. Value: `%s`.",u));return 2419200===t&&s(m)&&(t+=p),t}function J(e){var r;if(arguments.length)if(n(e))r=e.getFullYear();else{if(!a(e))throw new TypeError(l("invalid argument. Must provide either an integer or a Date object. Value: `%s`.",e));r=e}else r=E();return s(r)?31622400:31536e3}function K(e){if(e.__esModule)return e;var r=e.default;if("function"==typeof r){var t=function e(){if(this instanceof e){var t=[null];t.push.apply(t,arguments);var n=Function.bind.apply(r,t);return new n}return r.apply(this,arguments)};t.prototype=r.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(e).forEach((function(r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})})),t}var U="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};function X(){throw new Error("setTimeout has not been defined")}function Z(){throw new Error("clearTimeout has not been defined")}var $=X,ee=Z;function re(e){if($===setTimeout)return setTimeout(e,0);if(($===X||!$)&&setTimeout)return $=setTimeout,setTimeout(e,0);try{return $(e,0)}catch(r){try{return $.call(null,e,0)}catch(r){return $.call(this,e,0)}}}"function"==typeof U.setTimeout&&($=setTimeout),"function"==typeof U.clearTimeout&&(ee=clearTimeout);var te,ne=[],ie=!1,ae=-1;function oe(){ie&&te&&(ie=!1,te.length?ne=te.concat(ne):ae=-1,ne.length&&se())}function se(){if(!ie){var e=re(oe);ie=!0;for(var r=ne.length;r;){for(te=ne,ne=[];++ae<r;)te&&te[ae].run();ae=-1,r=ne.length}te=null,ie=!1,function(e){if(ee===clearTimeout)return clearTimeout(e);if((ee===Z||!ee)&&clearTimeout)return ee=clearTimeout,clearTimeout(e);try{ee(e)}catch(r){try{return ee.call(null,e)}catch(r){return ee.call(this,e)}}}(e)}}function ue(e){var r=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)r[t-1]=arguments[t];ne.push(new le(e,r)),1!==ne.length||ie||re(se)}function le(e,r){this.fun=e,this.array=r}le.prototype.run=function(){this.fun.apply(null,this.array)};var me={},ge=[],de={},fe={},he={};function ce(){}var ve=ce,pe=ce,we=ce,be=ce,je=ce,ye=ce,Te=ce;function Ee(e){throw new Error("process.binding is not supported")}function Ve(){return"/"}function Me(e){throw new Error("process.chdir is not supported")}function De(){return 0}var Fe=U.performance||{},xe=Fe.now||Fe.mozNow||Fe.msNow||Fe.oNow||Fe.webkitNow||function(){return(new Date).getTime()};function Ye(e){var r=.001*xe.call(Fe),t=Math.floor(r),n=Math.floor(r%1*1e9);return e&&(t-=e[0],(n-=e[1])<0&&(t--,n+=1e9)),[t,n]}var Ie=new Date;function Se(){return(new Date-Ie)/1e3}var Oe={nextTick:ue,title:"browser",browser:true,env:me,argv:ge,version:"",versions:de,on:ve,addListener:pe,once:we,off:be,removeListener:je,removeAllListeners:ye,emit:Te,binding:Ee,cwd:Ve,chdir:Me,umask:De,hrtime:Ye,platform:"browser",release:fe,config:he,uptime:Se},ze=K(Object.freeze({__proto__:null,addListener:pe,argv:ge,binding:Ee,browser:true,chdir:Me,config:he,cwd:Ve,default:Oe,emit:Te,env:me,hrtime:Ye,nextTick:ue,off:be,on:ve,once:we,platform:"browser",release:fe,removeAllListeners:ye,removeListener:je,title:"browser",umask:De,uptime:Se,version:"",versions:de}));function Ae(){return ze.hrtime()}function _e(e){var r,t,n=Ae();if(!w(e))throw new TypeError(u("invalid argument. Must provide an array of nonnegative integers. Value: `%s`.",e));if(2!==e.length)throw new RangeError(u("invalid argument. Input array must contain two elements. Value: `%s`.",e));return r=n[0]-e[0],t=n[1]-e[1],r>0&&t<0?(r-=1,t+=1e9):r<0&&t>0&&(r+=1,t-=1e9),[r,t]}var ke={};e(ke,"constants",r),e(ke,"base",T),e(ke,"currentYear",E),e(ke,"dayOfQuarter",z),e(ke,"dayOfYear",x),e(ke,"daysInMonth",M),e(ke,"daysInYear",A),e(ke,"duration2ms",_),e(ke,"hoursInMonth",R),e(ke,"hoursInYear",L),e(ke,"isoWeeksInYear",N),e(ke,"minutesInMonth",Q),e(ke,"minutesInYear",W),e(ke,"ms2duration",B),e(ke,"now",C),e(ke,"quarterOfYear",I),e(ke,"secondsInMonth",H),e(ke,"secondsInYear",J),e(ke,"tic",Ae),e(ke,"toc",_e);export{T as base,E as currentYear,z as dayOfQuarter,x as dayOfYear,M as daysInMonth,A as daysInYear,ke as default,_ as duration2ms,R as hoursInMonth,L as hoursInYear,N as isoWeeksInYear,Q as minutesInMonth,W as minutesInYear,B as ms2duration,C as now,I as quarterOfYear,H as secondsInMonth,J as secondsInYear,Ae as tic,_e as toc};
//# sourceMappingURL=index.mjs.map
