// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-read-only-property@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-time@esm/index.mjs";export{default as constants}from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-time@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-date-object@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/string-lowercase@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-leap-year@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-time-hours-in-day@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-time-minutes-in-day@esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-round@esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-time-seconds-in-day@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer-array@esm/index.mjs";function v(e){var r=e.default;if("function"==typeof r){var t=function(){return r.apply(this,arguments)};t.prototype=r.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(e).forEach((function(r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})})),t}var c={1:31,2:28,3:31,4:30,5:31,6:30,7:31,8:31,9:30,10:31,11:30,12:31,jan:31,january:31,feb:28,february:28,mar:31,march:31,apr:30,april:30,may:31,jun:30,june:30,jul:31,july:31,aug:31,august:31,sep:30,september:30,oct:31,october:31,nov:30,november:30,dec:31,december:31},p=t,w=n.isPrimitive,b=i.isPrimitive,j=a,y=o,T=s,E=c;var Y=function(e,r){var t,n,i,a;if(0===arguments.length)n=(a=new Date).getMonth()+1,i=a.getFullYear();else if(1===arguments.length)if(p(e))n=(a=e).getMonth()+1,i=a.getFullYear();else{if(!w(e)&&!b(e))throw new TypeError(T("invalid argument. First argument must be either a string, integer, or Date object. Value: `%s`.",e));i=(new Date).getFullYear(),n=e}else{if(!w(e)&&!b(e))throw new TypeError(T("invalid argument. First argument must be either a string or integer. Value: `%s`.",e));if(!b(r))throw new TypeError(T("invalid argument. Second argument must be an integer. Value: `%s`.",r));n=e,i=r}if(b(n)&&(n<1||n>12))throw new RangeError(T("invalid argument. An integer month value must be on the interval: [1, 12]. Value: `%s`.",n));if(n=j(n.toString()),void 0===(t=E[n]))throw new Error(T("invalid argument. Must provide a recognized month. Value: `%s`.",n));return 28===t&&y(i)&&(t+=1),t},V={1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,10:10,11:11,12:12,jan:1,january:1,feb:2,february:2,mar:3,march:3,apr:4,april:4,may:5,jun:6,june:6,jul:7,july:7,aug:8,august:8,sep:9,september:9,oct:10,october:10,nov:11,november:11,dec:12,december:12},D=t,F=n.isPrimitive,M=i.isPrimitive,P=Y,I=o,x=a,O=s,S=V,k=[31,28,31,30,31,30,31,31,30,31,30,31];var A=function(e,r,t){var n,i,a,o,s,u,l;if(0===arguments.length)o=(n=new Date).getMonth()+1,s=n.getFullYear(),u=n.getDate();else if(1===arguments.length){if(!D(e))throw new TypeError(O("invalid argument. If only providing a single argument, must provide a Date object. Value: `%s`.",e));o=(n=e).getMonth()+1,s=n.getFullYear(),u=n.getDate()}else{if(!F(e)&&!M(e))throw new TypeError(O("invalid argument. First argument must be either a string or integer. Value: `%s`.",e));if(!M(r))throw new TypeError(O("invalid argument. Second argument must be an integer. Value: `%s`.",r));if(!M(t))throw new TypeError(O("invalid argument. Third argument must be an integer. Value: `%s`.",t));o=e,u=r,s=t}if(i=P(o,s),u<1||u>i)throw new RangeError(O("invalid argument. Day number must be on the interval: [1, %u]. Value: `%d`.",i,u));for(o=x(o.toString()),o=S[o],a=0,l=0;l<o-1;l++)a+=k[l],1===l&&I(s)&&(a+=1);return a+=u},z={1:1,2:1,3:1,4:2,5:2,6:2,7:3,8:3,9:3,10:4,11:4,12:4,jan:1,january:1,feb:1,february:1,mar:1,march:1,apr:2,april:2,may:2,jun:2,june:2,jul:3,july:3,aug:3,august:3,sep:3,september:3,oct:4,october:4,nov:4,november:4,dec:4,december:4},R=t,L=n.isPrimitive,_=i.isPrimitive,N=a,q=s,Q=z;var W=function(e){var r,t;if(arguments.length)if(R(e))r=e.getMonth()+1;else{if(!L(e)&&!_(e))throw new TypeError(q("invalid argument. Must provide either a string, integer, or Date object. Value: `%s`.",e));r=e}else r=(new Date).getMonth()+1;if(_(r)&&(r<1||r>12))throw new RangeError(q("invalid argument. An integer month value must be on the interval: [1, 12]. Value: `%s`.",r));if(r=N(r.toString()),void 0===(t=Q[r]))throw new Error(q("invalid argument. Must provide a recognized month. Value: `%s`.",e));return t},B=t,C=n.isPrimitive,G=i.isPrimitive,H=A,J=W,K=o,U=s,X=[0,90,181,273],Z=[0,91,182,274];var $=function(e,r,t){var n,i,a,o;if(0===arguments.length)n=new Date,a=J(n),o=H(n),i=n.getFullYear();else if(1===arguments.length){if(!B(e))throw new TypeError(U("invalid argument. If only providing a single argument, must provide a Date object. Value: `%s`.",e));a=J(n=e),o=H(n),i=n.getFullYear()}else{if(!C(e)&&!G(e))throw new TypeError(U("invalid argument. First argument must be either a string or integer. Value: `%s`.",e));if(!G(r))throw new TypeError(U("invalid argument. Second argument must be an integer. Value: `%s`.",r));if(!G(t))throw new TypeError(U("invalid argument. Third argument must be an integer. Value: `%s`.",t));a=J(e),o=H(e,r,t),i=t}return K(i)?o-Z[a-1]:o-X[a-1]},ee=t,re=i.isPrimitive,te=o,ne=s;var ie=function(e){var r;if(arguments.length)if(ee(e))r=e.getFullYear();else{if(!re(e))throw new TypeError(ne("invalid argument. Must provide either an integer or a Date object. Value: `%s`.",e));r=e}else r=(new Date).getFullYear();return te(r)?366:365},ae={1:744,2:672,3:744,4:720,5:744,6:720,7:744,8:744,9:720,10:744,11:720,12:744,jan:744,january:744,feb:672,february:672,mar:744,march:744,apr:720,april:720,may:744,jun:720,june:720,jul:744,july:744,aug:744,august:744,sep:720,september:720,oct:744,october:744,nov:720,november:720,dec:744,december:744},oe=t,se=n.isPrimitive,ue=i.isPrimitive,le=a,me=o,ge=s,de=u,fe=ae;var he=function(e,r){var t,n,i,a;if(0===arguments.length)n=(a=new Date).getMonth()+1,i=a.getFullYear();else if(1===arguments.length)if(oe(e))n=(a=e).getMonth()+1,i=a.getFullYear();else{if(!se(e)&&!ue(e))throw new TypeError(ge("invalid argument. First argument must be either a string, integer, or Date object. Value: `%s`.",e));i=(new Date).getFullYear(),n=e}else{if(!se(e)&&!ue(e))throw new TypeError(ge("invalid argument. First argument must be either a string or integer. Value: `%s`.",e));if(!ue(r))throw new TypeError(ge("invalid argument. Second argument must be an integer. Value: `%s`.",r));n=e,i=r}if(ue(n)&&(n<1||n>12))throw new RangeError(ge("invalid argument. An integer month value must be on the interval: [1, 12]. Value: `%s`.",n));if(n=le(n.toString()),void 0===(t=fe[n]))throw new Error(ge("invalid argument. Must provide a recognized month. Value: `%s`.",n));return 672===t&&me(i)&&(t+=de),t},ve=t,ce=i.isPrimitive,pe=o,we=s;var be=function(e){var r;if(arguments.length)if(ve(e))r=e.getFullYear();else{if(!ce(e))throw new TypeError(we("invalid argument. Must provide either an integer or a Date object. Value: `%s`.",e));r=e}else r=(new Date).getFullYear();return pe(r)?8784:8760},je=t,ye=i.isPrimitive,Te=s,Ee=l;function Ye(e){return(e+Ee(e/4)-Ee(e/100)+Ee(e/400))%7}var Ve=function(e){var r;if(arguments.length)if(je(e))r=e.getFullYear();else{if(!ye(e))throw new TypeError(Te("invalid argument. Must provide either an integer or a Date object. Value: `%s`.",e));r=e}else r=(new Date).getFullYear();return 4===Ye(r)||3===Ye(r-1)?53:52},De={1:44640,2:40320,3:44640,4:43200,5:44640,6:43200,7:44640,8:44640,9:43200,10:44640,11:43200,12:44640,jan:44640,january:44640,feb:40320,february:40320,mar:44640,march:44640,apr:43200,april:43200,may:44640,jun:43200,june:43200,jul:44640,july:44640,aug:44640,august:44640,sep:43200,september:43200,oct:44640,october:44640,nov:43200,november:43200,dec:44640,december:44640},Fe=t,Me=n.isPrimitive,Pe=i.isPrimitive,Ie=a,xe=o,Oe=s,Se=m,ke=De;var Ae=function(e,r){var t,n,i,a;if(0===arguments.length)n=(a=new Date).getMonth()+1,i=a.getFullYear();else if(1===arguments.length)if(Fe(e))n=(a=e).getMonth()+1,i=a.getFullYear();else{if(!Me(e)&&!Pe(e))throw new TypeError(Oe("invalid argument. First argument must be either a string, integer, or Date object. Value: `%s`.",e));i=(new Date).getFullYear(),n=e}else{if(!Me(e)&&!Pe(e))throw new TypeError(Oe("invalid argument. First argument must be either a string or integer. Value: `%s`.",e));if(!Pe(r))throw new TypeError(Oe("invalid argument. Second argument must be an integer. Value: `%s`.",r));n=e,i=r}if(Pe(n)&&(n<1||n>12))throw new RangeError(Oe("invalid argument. An integer month value must be on the interval: [1, 12]. Value: `%s`.",n));if(n=Ie(n.toString()),void 0===(t=ke[n]))throw new Error(Oe("invalid argument. Must provide a recognized month. Value: `%s`.",n));return 40320===t&&xe(i)&&(t+=Se),t},ze=t,Re=i.isPrimitive,Le=o,_e=s;var Ne=function(e){var r;if(arguments.length)if(ze(e))r=e.getFullYear();else{if(!Re(e))throw new TypeError(_e("invalid argument. Must provide either an integer or a Date object. Value: `%s`.",e));r=e}else r=(new Date).getFullYear();return Le(r)?527040:525600},qe=g(Date.now),Qe=d;var We=d;var Be=qe?function(){return 0|Qe(Date.now()/1e3)}:function(){var e;return e=new Date,0|We(e.getTime()/1e3)},Ce={1:2678400,2:2419200,3:2678400,4:2592e3,5:2678400,6:2592e3,7:2678400,8:2678400,9:2592e3,10:2678400,11:2592e3,12:2678400,jan:2678400,january:2678400,feb:2419200,february:2419200,mar:2678400,march:2678400,apr:2592e3,april:2592e3,may:2678400,jun:2592e3,june:2592e3,jul:2678400,july:2678400,aug:2678400,august:2678400,sep:2592e3,september:2592e3,oct:2678400,october:2678400,nov:2592e3,november:2592e3,dec:2678400,december:2678400},Ge=t,He=n.isPrimitive,Je=i.isPrimitive,Ke=a,Ue=o,Xe=s,Ze=f,$e=Ce;var er=function(e,r){var t,n,i,a;if(0===arguments.length)n=(a=new Date).getMonth()+1,i=a.getFullYear();else if(1===arguments.length)if(Ge(e))n=(a=e).getMonth()+1,i=a.getFullYear();else{if(!He(e)&&!Je(e))throw new TypeError(Xe("invalid argument. First argument must be either a string, integer, or Date object. Value: `%s`.",e));i=(new Date).getFullYear(),n=e}else{if(!He(e)&&!Je(e))throw new TypeError(Xe("invalid argument. First argument must be either a string or integer. Value: `%s`.",e));if(!Je(r))throw new TypeError(Xe("invalid argument. Second argument must be an integer. Value: `%s`.",r));n=e,i=r}if(Je(n)&&(n<1||n>12))throw new RangeError(Xe("invalid argument. An integer month value must be on the interval: [1, 12]. Value: `%s`.",n));if(n=Ke(n.toString()),void 0===(t=$e[n]))throw new Error(Xe("invalid argument. Must provide a recognized month. Value: `%s`.",n));return 2419200===t&&Ue(i)&&(t+=Ze),t},rr=t,tr=i.isPrimitive,nr=o,ir=s;var ar=function(e){var r;if(arguments.length)if(rr(e))r=e.getFullYear();else{if(!tr(e))throw new TypeError(ir("invalid argument. Must provide either an integer or a Date object. Value: `%s`.",e));r=e}else r=(new Date).getFullYear();return nr(r)?31622400:31536e3},or="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};function sr(){throw new Error("setTimeout has not been defined")}function ur(){throw new Error("clearTimeout has not been defined")}var lr=sr,mr=ur;function gr(e){if(lr===setTimeout)return setTimeout(e,0);if((lr===sr||!lr)&&setTimeout)return lr=setTimeout,setTimeout(e,0);try{return lr(e,0)}catch(r){try{return lr.call(null,e,0)}catch(r){return lr.call(this,e,0)}}}"function"==typeof or.setTimeout&&(lr=setTimeout),"function"==typeof or.clearTimeout&&(mr=clearTimeout);var dr,fr=[],hr=!1,vr=-1;function cr(){hr&&dr&&(hr=!1,dr.length?fr=dr.concat(fr):vr=-1,fr.length&&pr())}function pr(){if(!hr){var e=gr(cr);hr=!0;for(var r=fr.length;r;){for(dr=fr,fr=[];++vr<r;)dr&&dr[vr].run();vr=-1,r=fr.length}dr=null,hr=!1,function(e){if(mr===clearTimeout)return clearTimeout(e);if((mr===ur||!mr)&&clearTimeout)return mr=clearTimeout,clearTimeout(e);try{mr(e)}catch(r){try{return mr.call(null,e)}catch(r){return mr.call(this,e)}}}(e)}}function wr(e){var r=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)r[t-1]=arguments[t];fr.push(new br(e,r)),1!==fr.length||hr||gr(pr)}function br(e,r){this.fun=e,this.array=r}br.prototype.run=function(){this.fun.apply(null,this.array)};var jr={},yr=[],Tr={},Er={},Yr={};function Vr(){}var Dr=Vr,Fr=Vr,Mr=Vr,Pr=Vr,Ir=Vr,xr=Vr,Or=Vr;function Sr(e){throw new Error("process.binding is not supported")}function kr(){return"/"}function Ar(e){throw new Error("process.chdir is not supported")}function zr(){return 0}var Rr=or.performance||{},Lr=Rr.now||Rr.mozNow||Rr.msNow||Rr.oNow||Rr.webkitNow||function(){return(new Date).getTime()};function _r(e){var r=.001*Lr.call(Rr),t=Math.floor(r),n=Math.floor(r%1*1e9);return e&&(t-=e[0],(n-=e[1])<0&&(t--,n+=1e9)),[t,n]}var Nr=new Date;function qr(){return(new Date-Nr)/1e3}var Qr={nextTick:wr,title:"browser",browser:true,env:jr,argv:yr,version:"",versions:Tr,on:Dr,addListener:Fr,once:Mr,off:Pr,removeListener:Ir,removeAllListeners:xr,emit:Or,binding:Sr,cwd:kr,chdir:Ar,umask:zr,hrtime:_r,platform:"browser",release:Er,config:Yr,uptime:qr},Wr=v(Object.freeze({__proto__:null,addListener:Fr,argv:yr,binding:Sr,browser:true,chdir:Ar,config:Yr,cwd:kr,default:Qr,emit:Or,env:jr,hrtime:_r,nextTick:wr,off:Pr,on:Dr,once:Mr,platform:"browser",release:Er,removeAllListeners:xr,removeListener:Ir,title:"browser",umask:zr,uptime:qr,version:"",versions:Tr}));var Br=function(){return Wr.hrtime()},Cr=h.primitives,Gr=s,Hr=Br;var Jr=function(e){var r,t,n=Hr();if(!Cr(e))throw new TypeError(Gr("invalid argument. Must provide an array of nonnegative integers. Value: `%s`.",e));if(2!==e.length)throw new RangeError(Gr("invalid argument. Input array must contain two elements. Value: `%s`.",e));return r=n[0]-e[0],t=n[1]-e[1],r>0&&t<0?(r-=1,t+=1e9):r<0&&t>0&&(r+=1,t-=1e9),[r,t]},Kr=Jr,Ur={};e(Ur,"constants",r),e(Ur,"dayOfQuarter",$),e(Ur,"dayOfYear",A),e(Ur,"daysInMonth",Y),e(Ur,"daysInYear",ie),e(Ur,"hoursInMonth",he),e(Ur,"hoursInYear",be),e(Ur,"isoWeeksInYear",Ve),e(Ur,"minutesInMonth",Ae),e(Ur,"minutesInYear",Ne),e(Ur,"now",Be),e(Ur,"quarterOfYear",W),e(Ur,"secondsInMonth",er),e(Ur,"secondsInYear",ar),e(Ur,"tic",Br),e(Ur,"toc",Kr);export{$ as dayOfQuarter,A as dayOfYear,Y as daysInMonth,ie as daysInYear,Ur as default,he as hoursInMonth,be as hoursInYear,Ve as isoWeeksInYear,Ae as minutesInMonth,Ne as minutesInYear,Be as now,W as quarterOfYear,er as secondsInMonth,ar as secondsInYear,Br as tic,Kr as toc};
//# sourceMappingURL=index.mjs.map
