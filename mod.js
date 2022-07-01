// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function e(e){var r=e.default;if("function"==typeof r){var t=function(){return r.apply(this,arguments)};t.prototype=r.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(e).forEach((function(r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})})),t}var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=function(){try{return r({},"x",{}),!0}catch(e){return!1}},n=Object.defineProperty;var i=function(e){return"number"==typeof e};function a(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}var o=function(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+a(i):a(i)+e,n&&(e="-"+e)),e},u=i,l=o,s=String.prototype.toLowerCase,c=String.prototype.toUpperCase;var f=function(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!u(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=l(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=l(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===c.call(e.specifier)?c.call(t):s.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t};var g=function(e){return"string"==typeof e},v=i,p=Math.abs,m=String.prototype.toLowerCase,h=String.prototype.toUpperCase,d=String.prototype.replace,w=/e\+(\d)$/,b=/e-(\d)$/,y=/^(\d+)$/,E=/^(\d+)e/,j=/\.0$/,T=/\.0*e/,_=/(\..*[^0])0*e/;var I=function(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!v(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":p(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=d.call(t,_,"$1e"),t=d.call(t,T,"e"),t=d.call(t,j,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=d.call(t,w,"e+0$1"),t=d.call(t,b,"e-0$1"),e.alternate&&(t=d.call(t,y,"$1."),t=d.call(t,E,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===h.call(e.specifier)?h.call(t):m.call(t)};function S(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var D=f,V=g,M=I,O=function(e,r,t){var n=r-e.length;return n<0?e:e=t?e+S(n):S(n)+e},F=o,Y=String.fromCharCode,N=isNaN,P=Array.isArray;function A(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function x(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}var L=function(e){var r,t,n,i,a,o,u,l,s;if(!P(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",u=1,l=0;l<e.length;l++)if(n=e[l],V(n))o+=n;else{if(r=void 0!==n.precision,!(n=A(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(i=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,N(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,N(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=D(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!N(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=N(a)?String(n.arg):Y(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=M(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=F(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=O(n.arg,n.width,n.padRight)),o+=n.arg||"",u+=1}return o},R=function(e){var r,t,n,i;for(t=[],i=0,n=k.exec(e);n;)(r=e.slice(i,k.lastIndex-n[0].length)).length&&t.push(r),t.push(x(n)),i=k.lastIndex,n=k.exec(e);return(r=e.slice(i)).length&&t.push(r),t},C=function(e){return"string"==typeof e};var U=function e(r){var t,n,i;if(!C(r))throw new TypeError(e("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=R(r),(n=new Array(arguments.length))[0]=t,i=1;i<n.length;i++)n[i]=arguments[i];return L.apply(null,n)},W=U,$=W,z=Object.prototype,B=z.toString,G=z.__defineGetter__,H=z.__defineSetter__,Z=z.__lookupGetter__,K=z.__lookupSetter__;var X=function(e,r,t){var n,i,a,o;if("object"!=typeof e||null===e||"[object Array]"===B.call(e))throw new TypeError($("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===B.call(t))throw new TypeError($("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(Z.call(e,r)||K.call(e,r)?(n=e.__proto__,e.__proto__=z,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&G&&G.call(e,r,t.get),o&&H&&H.call(e,r,t.set),e},q=n,Q=X,J=t()?q:Q,ee=J;var re,te,ne,ie,ae,oe,ue,le,se,ce,fe,ge,ve=function(e,r,t){ee(e,r,{configurable:!1,enumerable:!0,writable:!1,value:t})},pe=ve;var me,he,de,we,be,ye;var Ee,je,Te,_e,Ie,Se;var De=pe,Ve={};De(Ve,"HOURS_IN_DAY",24),De(Ve,"HOURS_IN_WEEK",te?re:(te=1,re=168)),De(Ve,"MILLISECONDS_IN_DAY",ie?ne:(ie=1,ne=864e5)),De(Ve,"MILLISECONDS_IN_HOUR",oe?ae:(oe=1,ae=36e5)),De(Ve,"MILLISECONDS_IN_MINUTE",le?ue:(le=1,ue=6e4)),De(Ve,"MILLISECONDS_IN_SECOND",ce?se:(ce=1,se=1e3)),De(Ve,"MILLISECONDS_IN_WEEK",ge?fe:(ge=1,fe=6048e5)),De(Ve,"MINUTES_IN_DAY",1440),De(Ve,"MINUTES_IN_HOUR",he?me:(he=1,me=60)),De(Ve,"MINUTES_IN_WEEK",we?de:(we=1,de=10080)),De(Ve,"MONTHS_IN_YEAR",ye?be:(ye=1,be=12)),De(Ve,"SECONDS_IN_DAY",86400),De(Ve,"SECONDS_IN_HOUR",je?Ee:(je=1,Ee=3600)),De(Ve,"SECONDS_IN_MINUTE",_e?Te:(_e=1,Te=60)),De(Ve,"SECONDS_IN_WEEK",Se?Ie:(Se=1,Ie=604800));var Me=Ve;var Oe=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var Fe=function(){return Oe&&"symbol"==typeof Symbol.toStringTag},Ye=Object.prototype.toString,Ne=Ye;var Pe=function(e){return Ne.call(e)},Ae=Object.prototype.hasOwnProperty;var ke=function(e,r){return null!=e&&Ae.call(e,r)},xe="function"==typeof Symbol?Symbol.toStringTag:"",Le=ke,Re=xe,Ce=Ye;var Ue=Pe,We=function(e){var r,t,n;if(null==e)return Ce.call(e);t=e[Re],r=Le(e,Re);try{e[Re]=void 0}catch(r){return Ce.call(e)}return n=Ce.call(e),r?e[Re]=t:delete e[Re],n},$e=Fe()?We:Ue,ze=Date.prototype.getDay;var Be=$e,Ge=function(e){try{return ze.call(e),!0}catch(e){return!1}},He=Fe();var Ze=function(e){return"object"==typeof e&&(e instanceof Date||(He?Ge(e):"[object Date]"===Be(e)))},Ke=J;var Xe=function(e,r,t){Ke(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})},qe=Xe;var Qe=function(e){return"string"==typeof e},Je=String.prototype.valueOf;var er=$e,rr=function(e){try{return Je.call(e),!0}catch(e){return!1}},tr=Fe();var nr=function(e){return"object"==typeof e&&(e instanceof String||(tr?rr(e):"[object String]"===er(e)))},ir=Qe,ar=nr;var or=qe,ur=function(e){return ir(e)||ar(e)},lr=nr;or(ur,"isPrimitive",Qe),or(ur,"isObject",lr);var sr=ur;var cr=function(e){return"number"==typeof e},fr=Number,gr=fr.prototype.toString;var vr=$e,pr=fr,mr=function(e){try{return gr.call(e),!0}catch(e){return!1}},hr=Fe();var dr=function(e){return"object"==typeof e&&(e instanceof pr||(hr?mr(e):"[object Number]"===vr(e)))},wr=cr,br=dr;var yr=qe,Er=function(e){return wr(e)||br(e)},jr=dr;yr(Er,"isPrimitive",cr),yr(Er,"isObject",jr);var Tr=Er,_r=Number.POSITIVE_INFINITY,Ir=fr.NEGATIVE_INFINITY,Sr=Math.floor,Dr=Sr;var Vr=function(e){return Dr(e)===e},Mr=_r,Or=Ir,Fr=Vr;var Yr=function(e){return e<Mr&&e>Or&&Fr(e)},Nr=Tr.isPrimitive,Pr=Yr;var Ar=function(e){return Nr(e)&&Pr(e)},kr=Tr.isObject,xr=Yr;var Lr=function(e){return kr(e)&&xr(e.valueOf())},Rr=Ar,Cr=Lr;var Ur=qe,Wr=function(e){return Rr(e)||Cr(e)},$r=Lr;Ur(Wr,"isPrimitive",Ar),Ur(Wr,"isObject",$r);var zr=Wr,Br=sr.isPrimitive,Gr=W;var Hr=function(e){if(!Br(e))throw new TypeError(Gr("invalid argument. Must provide a string. Value: `%s`.",e));return e.toLowerCase()},Zr=Ze,Kr=zr.isPrimitive;var Xr=function(e){var r;if(arguments.length)if(Zr(e))r=e.getFullYear();else{if(!Kr(e))return!1;r=e}else r=(new Date).getFullYear();return r%100==0?r%400==0:r%4==0},qr=Ze,Qr=sr.isPrimitive,Jr=zr.isPrimitive,et=Hr,rt=Xr,tt=W,nt={1:31,2:28,3:31,4:30,5:31,6:30,7:31,8:31,9:30,10:31,11:30,12:31,jan:31,january:31,feb:28,february:28,mar:31,march:31,apr:30,april:30,may:31,jun:30,june:30,jul:31,july:31,aug:31,august:31,sep:30,september:30,oct:31,october:31,nov:30,november:30,dec:31,december:31};var it=function(e,r){var t,n,i,a;if(0===arguments.length)n=(a=new Date).getMonth()+1,i=a.getFullYear();else if(1===arguments.length)if(qr(e))n=(a=e).getMonth()+1,i=a.getFullYear();else{if(!Qr(e)&&!Jr(e))throw new TypeError(tt("invalid argument. First argument must be either a string, integer, or Date object. Value: `%s`.",e));i=(new Date).getFullYear(),n=e}else{if(!Qr(e)&&!Jr(e))throw new TypeError(tt("invalid argument. First argument must be either a string or integer. Value: `%s`.",e));if(!Jr(r))throw new TypeError(tt("invalid argument. Second argument must be an integer. Value: `%s`.",r));n=e,i=r}if(Jr(n)&&(n<1||n>12))throw new RangeError(tt("invalid argument. An integer month value must be on the interval: [1, 12]. Value: `%s`.",n));if(n=et(n.toString()),void 0===(t=nt[n]))throw new Error(tt("invalid argument. Must provide a recognized month. Value: `%s`.",n));return 28===t&&rt(i)&&(t+=1),t},at=Ze,ot=sr.isPrimitive,ut=zr.isPrimitive,lt=it,st=Xr,ct=Hr,ft=W,gt={1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,10:10,11:11,12:12,jan:1,january:1,feb:2,february:2,mar:3,march:3,apr:4,april:4,may:5,jun:6,june:6,jul:7,july:7,aug:8,august:8,sep:9,september:9,oct:10,october:10,nov:11,november:11,dec:12,december:12},vt=[31,28,31,30,31,30,31,31,30,31,30,31];var pt=function(e,r,t){var n,i,a,o,u,l,s;if(0===arguments.length)o=(n=new Date).getMonth()+1,u=n.getFullYear(),l=n.getDate();else if(1===arguments.length){if(!at(e))throw new TypeError(ft("invalid argument. If only providing a single argument, must provide a Date object. Value: `%s`.",e));o=(n=e).getMonth()+1,u=n.getFullYear(),l=n.getDate()}else{if(!ot(e)&&!ut(e))throw new TypeError(ft("invalid argument. First argument must be either a string or integer. Value: `%s`.",e));if(!ut(r))throw new TypeError(ft("invalid argument. Second argument must be an integer. Value: `%s`.",r));if(!ut(t))throw new TypeError(ft("invalid argument. Third argument must be an integer. Value: `%s`.",t));o=e,l=r,u=t}if(i=lt(o,u),l<1||l>i)throw new RangeError(ft("invalid argument. Day number must be on the interval: [1, %u]. Value: `%d`.",i,l));for(o=ct(o.toString()),o=gt[o],a=0,s=0;s<o-1;s++)a+=vt[s],1===s&&st(u)&&(a+=1);return a+=l},mt=Ze,ht=sr.isPrimitive,dt=zr.isPrimitive,wt=Hr,bt=W,yt={1:1,2:1,3:1,4:2,5:2,6:2,7:3,8:3,9:3,10:4,11:4,12:4,jan:1,january:1,feb:1,february:1,mar:1,march:1,apr:2,april:2,may:2,jun:2,june:2,jul:3,july:3,aug:3,august:3,sep:3,september:3,oct:4,october:4,nov:4,november:4,dec:4,december:4};var Et=function(e){var r,t;if(arguments.length)if(mt(e))r=e.getMonth()+1;else{if(!ht(e)&&!dt(e))throw new TypeError(bt("invalid argument. Must provide either a string, integer, or Date object. Value: `%s`.",e));r=e}else r=(new Date).getMonth()+1;if(dt(r)&&(r<1||r>12))throw new RangeError(bt("invalid argument. An integer month value must be on the interval: [1, 12]. Value: `%s`.",r));if(r=wt(r.toString()),void 0===(t=yt[r]))throw new Error(bt("invalid argument. Must provide a recognized month. Value: `%s`.",e));return t},jt=Ze,Tt=sr.isPrimitive,_t=zr.isPrimitive,It=pt,St=Et,Dt=Xr,Vt=W,Mt=[0,90,181,273],Ot=[0,91,182,274];var Ft=function(e,r,t){var n,i,a,o;if(0===arguments.length)n=new Date,a=St(n),o=It(n),i=n.getFullYear();else if(1===arguments.length){if(!jt(e))throw new TypeError(Vt("invalid argument. If only providing a single argument, must provide a Date object. Value: `%s`.",e));a=St(n=e),o=It(n),i=n.getFullYear()}else{if(!Tt(e)&&!_t(e))throw new TypeError(Vt("invalid argument. First argument must be either a string or integer. Value: `%s`.",e));if(!_t(r))throw new TypeError(Vt("invalid argument. Second argument must be an integer. Value: `%s`.",r));if(!_t(t))throw new TypeError(Vt("invalid argument. Third argument must be an integer. Value: `%s`.",t));a=St(e),o=It(e,r,t),i=t}return Dt(i)?o-Ot[a-1]:o-Mt[a-1]},Yt=Ze,Nt=zr.isPrimitive,Pt=Xr,At=W;var kt=function(e){var r;if(arguments.length)if(Yt(e))r=e.getFullYear();else{if(!Nt(e))throw new TypeError(At("invalid argument. Must provide either an integer or a Date object. Value: `%s`.",e));r=e}else r=(new Date).getFullYear();return Pt(r)?366:365},xt=Ze,Lt=sr.isPrimitive,Rt=zr.isPrimitive,Ct=Hr,Ut=Xr,Wt=W,$t={1:744,2:672,3:744,4:720,5:744,6:720,7:744,8:744,9:720,10:744,11:720,12:744,jan:744,january:744,feb:672,february:672,mar:744,march:744,apr:720,april:720,may:744,jun:720,june:720,jul:744,july:744,aug:744,august:744,sep:720,september:720,oct:744,october:744,nov:720,november:720,dec:744,december:744};var zt=function(e,r){var t,n,i,a;if(0===arguments.length)n=(a=new Date).getMonth()+1,i=a.getFullYear();else if(1===arguments.length)if(xt(e))n=(a=e).getMonth()+1,i=a.getFullYear();else{if(!Lt(e)&&!Rt(e))throw new TypeError(Wt("invalid argument. First argument must be either a string, integer, or Date object. Value: `%s`.",e));i=(new Date).getFullYear(),n=e}else{if(!Lt(e)&&!Rt(e))throw new TypeError(Wt("invalid argument. First argument must be either a string or integer. Value: `%s`.",e));if(!Rt(r))throw new TypeError(Wt("invalid argument. Second argument must be an integer. Value: `%s`.",r));n=e,i=r}if(Rt(n)&&(n<1||n>12))throw new RangeError(Wt("invalid argument. An integer month value must be on the interval: [1, 12]. Value: `%s`.",n));if(n=Ct(n.toString()),void 0===(t=$t[n]))throw new Error(Wt("invalid argument. Must provide a recognized month. Value: `%s`.",n));return 672===t&&Ut(i)&&(t+=24),t},Bt=Ze,Gt=zr.isPrimitive,Ht=Xr,Zt=W;var Kt=function(e){var r;if(arguments.length)if(Bt(e))r=e.getFullYear();else{if(!Gt(e))throw new TypeError(Zt("invalid argument. Must provide either an integer or a Date object. Value: `%s`.",e));r=e}else r=(new Date).getFullYear();return Ht(r)?8784:8760},Xt=Ze,qt=zr.isPrimitive,Qt=W,Jt=Sr;function en(e){return(e+Jt(e/4)-Jt(e/100)+Jt(e/400))%7}var rn=function(e){var r;if(arguments.length)if(Xt(e))r=e.getFullYear();else{if(!qt(e))throw new TypeError(Qt("invalid argument. Must provide either an integer or a Date object. Value: `%s`.",e));r=e}else r=(new Date).getFullYear();return 4===en(r)||3===en(r-1)?53:52},tn=Ze,nn=sr.isPrimitive,an=zr.isPrimitive,on=Hr,un=Xr,ln=W,sn={1:44640,2:40320,3:44640,4:43200,5:44640,6:43200,7:44640,8:44640,9:43200,10:44640,11:43200,12:44640,jan:44640,january:44640,feb:40320,february:40320,mar:44640,march:44640,apr:43200,april:43200,may:44640,jun:43200,june:43200,jul:44640,july:44640,aug:44640,august:44640,sep:43200,september:43200,oct:44640,october:44640,nov:43200,november:43200,dec:44640,december:44640};var cn=function(e,r){var t,n,i,a;if(0===arguments.length)n=(a=new Date).getMonth()+1,i=a.getFullYear();else if(1===arguments.length)if(tn(e))n=(a=e).getMonth()+1,i=a.getFullYear();else{if(!nn(e)&&!an(e))throw new TypeError(ln("invalid argument. First argument must be either a string, integer, or Date object. Value: `%s`.",e));i=(new Date).getFullYear(),n=e}else{if(!nn(e)&&!an(e))throw new TypeError(ln("invalid argument. First argument must be either a string or integer. Value: `%s`.",e));if(!an(r))throw new TypeError(ln("invalid argument. Second argument must be an integer. Value: `%s`.",r));n=e,i=r}if(an(n)&&(n<1||n>12))throw new RangeError(ln("invalid argument. An integer month value must be on the interval: [1, 12]. Value: `%s`.",n));if(n=on(n.toString()),void 0===(t=sn[n]))throw new Error(ln("invalid argument. Must provide a recognized month. Value: `%s`.",n));return 40320===t&&un(i)&&(t+=1440),t},fn=Ze,gn=zr.isPrimitive,vn=Xr,pn=W;var mn=function(e){var r;if(arguments.length)if(fn(e))r=e.getFullYear();else{if(!gn(e))throw new TypeError(pn("invalid argument. Must provide either an integer or a Date object. Value: `%s`.",e));r=e}else r=(new Date).getFullYear();return vn(r)?527040:525600},hn=/./;var dn=function(e){return"boolean"==typeof e},wn=Boolean.prototype.toString;var bn=$e,yn=function(e){try{return wn.call(e),!0}catch(e){return!1}},En=Fe();var jn=function(e){return"object"==typeof e&&(e instanceof Boolean||(En?yn(e):"[object Boolean]"===bn(e)))},Tn=dn,_n=jn;var In=qe,Sn=function(e){return Tn(e)||_n(e)},Dn=jn;In(Sn,"isPrimitive",dn),In(Sn,"isObject",Dn);var Vn=Sn;var Mn=function(){return new Function("return this;")()},On="object"==typeof self?self:null,Fn="object"==typeof window?window:null,Yn="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Nn="object"==typeof Yn?Yn:null;module.exports=Nn;var Pn=Vn.isPrimitive,An=W,kn=Mn,xn=On,Ln=Fn,Rn=e(Object.freeze({__proto__:null}));var Cn=function(e){if(arguments.length){if(!Pn(e))throw new TypeError(An("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return kn()}if(xn)return xn;if(Ln)return Ln;if(Rn)return Rn;throw new Error("unexpected error. Unable to resolve global object.")},Un=Cn(),Wn=Un.document&&Un.document.childNodes,$n=Int8Array,zn=hn,Bn=Wn,Gn=$n;var Hn=function(){return"function"==typeof zn||"object"==typeof Gn||"function"==typeof Bn};var Zn=function(){return/^\s*function\s*([^(]*)/i},Kn=Zn;qe(Kn,"REGEXP",Zn());var Xn=Kn,qn=$e;var Qn=Array.isArray?Array.isArray:function(e){return"[object Array]"===qn(e)},Jn=W;var ei=function(e){return null!==e&&"object"==typeof e};qe(ei,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(Jn("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!Qn(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(ei));var ri=ei;var ti=$e,ni=Xn.REGEXP,ii=function(e){return ri(e)&&(e._isBuffer||e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e))};var ai=function(e){var r,t,n;if(("Object"===(t=ti(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=ni.exec(n.toString()))return r[1]}return ii(e)?"Buffer":t},oi=ai;var ui=ai;var li=function(e){var r;return null===e?"null":"object"===(r=typeof e)?oi(e).toLowerCase():r},si=function(e){return ui(e).toLowerCase()},ci=Hn()?si:li;var fi=function(e){return"function"===ci(e)}(Date.now),gi=Math.round,vi=gi;var pi=gi;var mi=fi?function(){return 0|vi(Date.now()/1e3)}:function(){var e;return e=new Date,0|pi(e.getTime()/1e3)},hi=Ze,di=sr.isPrimitive,wi=zr.isPrimitive,bi=Hr,yi=Xr,Ei=W,ji={1:2678400,2:2419200,3:2678400,4:2592e3,5:2678400,6:2592e3,7:2678400,8:2678400,9:2592e3,10:2678400,11:2592e3,12:2678400,jan:2678400,january:2678400,feb:2419200,february:2419200,mar:2678400,march:2678400,apr:2592e3,april:2592e3,may:2678400,jun:2592e3,june:2592e3,jul:2678400,july:2678400,aug:2678400,august:2678400,sep:2592e3,september:2592e3,oct:2678400,october:2678400,nov:2592e3,november:2592e3,dec:2678400,december:2678400};var Ti=function(e,r){var t,n,i,a;if(0===arguments.length)n=(a=new Date).getMonth()+1,i=a.getFullYear();else if(1===arguments.length)if(hi(e))n=(a=e).getMonth()+1,i=a.getFullYear();else{if(!di(e)&&!wi(e))throw new TypeError(Ei("invalid argument. First argument must be either a string, integer, or Date object. Value: `%s`.",e));i=(new Date).getFullYear(),n=e}else{if(!di(e)&&!wi(e))throw new TypeError(Ei("invalid argument. First argument must be either a string or integer. Value: `%s`.",e));if(!wi(r))throw new TypeError(Ei("invalid argument. Second argument must be an integer. Value: `%s`.",r));n=e,i=r}if(wi(n)&&(n<1||n>12))throw new RangeError(Ei("invalid argument. An integer month value must be on the interval: [1, 12]. Value: `%s`.",n));if(n=bi(n.toString()),void 0===(t=ji[n]))throw new Error(Ei("invalid argument. Must provide a recognized month. Value: `%s`.",n));return 2419200===t&&yi(i)&&(t+=86400),t},_i=Ze,Ii=zr.isPrimitive,Si=Xr,Di=W;var Vi=function(e){var r;if(arguments.length)if(_i(e))r=e.getFullYear();else{if(!Ii(e))throw new TypeError(Di("invalid argument. Must provide either an integer or a Date object. Value: `%s`.",e));r=e}else r=(new Date).getFullYear();return Si(r)?31622400:31536e3};function Mi(){throw new Error("setTimeout has not been defined")}function Oi(){throw new Error("clearTimeout has not been defined")}var Fi=Mi,Yi=Oi;function Ni(e){if(Fi===setTimeout)return setTimeout(e,0);if((Fi===Mi||!Fi)&&setTimeout)return Fi=setTimeout,setTimeout(e,0);try{return Fi(e,0)}catch(r){try{return Fi.call(null,e,0)}catch(r){return Fi.call(this,e,0)}}}"function"==typeof Yn.setTimeout&&(Fi=setTimeout),"function"==typeof Yn.clearTimeout&&(Yi=clearTimeout);var Pi,Ai=[],ki=!1,xi=-1;function Li(){ki&&Pi&&(ki=!1,Pi.length?Ai=Pi.concat(Ai):xi=-1,Ai.length&&Ri())}function Ri(){if(!ki){var e=Ni(Li);ki=!0;for(var r=Ai.length;r;){for(Pi=Ai,Ai=[];++xi<r;)Pi&&Pi[xi].run();xi=-1,r=Ai.length}Pi=null,ki=!1,function(e){if(Yi===clearTimeout)return clearTimeout(e);if((Yi===Oi||!Yi)&&clearTimeout)return Yi=clearTimeout,clearTimeout(e);try{Yi(e)}catch(r){try{return Yi.call(null,e)}catch(r){return Yi.call(this,e)}}}(e)}}function Ci(e){var r=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)r[t-1]=arguments[t];Ai.push(new Ui(e,r)),1!==Ai.length||ki||Ni(Ri)}function Ui(e,r){this.fun=e,this.array=r}Ui.prototype.run=function(){this.fun.apply(null,this.array)};var Wi={},$i=[],zi={},Bi={},Gi={};function Hi(){}var Zi=Hi,Ki=Hi,Xi=Hi,qi=Hi,Qi=Hi,Ji=Hi,ea=Hi;function ra(e){throw new Error("process.binding is not supported")}function ta(){return"/"}function na(e){throw new Error("process.chdir is not supported")}function ia(){return 0}var aa=Yn.performance||{},oa=aa.now||aa.mozNow||aa.msNow||aa.oNow||aa.webkitNow||function(){return(new Date).getTime()};function ua(e){var r=.001*oa.call(aa),t=Math.floor(r),n=Math.floor(r%1*1e9);return e&&(t-=e[0],(n-=e[1])<0&&(t--,n+=1e9)),[t,n]}var la=new Date;function sa(){return(new Date-la)/1e3}var ca={nextTick:Ci,title:"browser",browser:true,env:Wi,argv:$i,version:"",versions:zi,on:Zi,addListener:Ki,once:Xi,off:qi,removeListener:Qi,removeAllListeners:Ji,emit:ea,binding:ra,cwd:ta,chdir:na,umask:ia,hrtime:ua,platform:"browser",release:Bi,config:Gi,uptime:sa},fa=e(Object.freeze({__proto__:null,addListener:Ki,argv:$i,binding:ra,browser:true,chdir:na,config:Gi,cwd:ta,default:ca,emit:ea,env:Wi,hrtime:ua,nextTick:Ci,off:qi,on:Zi,once:Xi,platform:"browser",release:Bi,removeAllListeners:Ji,removeListener:Qi,title:"browser",umask:ia,uptime:sa,version:"",versions:zi}));var ga=function(){return fa.hrtime()},va=zr.isPrimitive;var pa=function(e){return va(e)&&e>=0},ma=zr.isObject;var ha=function(e){return ma(e)&&e.valueOf()>=0},da=pa,wa=ha;var ba=qe,ya=function(e){return da(e)||wa(e)},Ea=ha;ba(ya,"isPrimitive",pa),ba(ya,"isObject",Ea);var ja=Vr;var Ta=function(e){return null!=e&&"function"!=typeof e&&"number"==typeof e.length&&ja(e.length)&&e.length>=0&&e.length<=4294967295},_a=W;var Ia=ya,Sa=qe,Da=function(e){if("function"!=typeof e)throw new TypeError(_a("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!Ta(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}},Va=Da(Ia);Sa(Va,"primitives",Da(Ia.isPrimitive)),Sa(Va,"objects",Da(Ia.isObject));var Ma=Va.primitives,Oa=W,Fa=ga;var Ya=function(e){var r,t,n=Fa();if(!Ma(e))throw new TypeError(Oa("invalid argument. Must provide an array of nonnegative integers. Value: `%s`.",e));if(2!==e.length)throw new RangeError(Oa("invalid argument. Input array must contain two elements. Value: `%s`.",e));return r=n[0]-e[0],t=n[1]-e[1],r>0&&t<0?(r-=1,t+=1e9):r<0&&t>0&&(r+=1,t-=1e9),[r,t]},Na=Ya,Pa={};pe(Pa,"constants",Me),pe(Pa,"dayOfQuarter",Ft),pe(Pa,"dayOfYear",pt),pe(Pa,"daysInMonth",it),pe(Pa,"daysInYear",kt),pe(Pa,"hoursInMonth",zt),pe(Pa,"hoursInYear",Kt),pe(Pa,"isoWeeksInYear",rn),pe(Pa,"minutesInMonth",cn),pe(Pa,"minutesInYear",mn),pe(Pa,"now",mi),pe(Pa,"quarterOfYear",Et),pe(Pa,"secondsInMonth",Ti),pe(Pa,"secondsInYear",Vi),pe(Pa,"tic",ga),pe(Pa,"toc",Na);export{Me as constants,Ft as dayOfQuarter,pt as dayOfYear,it as daysInMonth,kt as daysInYear,Pa as default,zt as hoursInMonth,Kt as hoursInYear,rn as isoWeeksInYear,cn as minutesInMonth,mn as minutesInYear,mi as now,Et as quarterOfYear,Ti as secondsInMonth,Vi as secondsInYear,ga as tic,Na as toc};
//# sourceMappingURL=mod.js.map
