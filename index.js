// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r(require("process")):"function"==typeof define&&define.amd?define(["process"],r):(e="undefined"!=typeof globalThis?globalThis:e||self).time=r(e.require$$0)}(this,(function(e){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function n(e){return"number"==typeof e}function i(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function a(e,r,t){var n=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+i(a):i(a)+e,n&&(e="-"+e)),e}var o=String.prototype.toLowerCase,u=String.prototype.toUpperCase;function l(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!n(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=a(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=a(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===u.call(e.specifier)?u.call(t):o.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var s=Math.abs,c=String.prototype.toLowerCase,f=String.prototype.toUpperCase,g=String.prototype.replace,p=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,m=/^(\d+)e/,v=/\.0$/,b=/\.0*e/,w=/(\..*[^0])0*e/;function y(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!n(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":s(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=g.call(t,w,"$1e"),t=g.call(t,b,"e"),t=g.call(t,v,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=g.call(t,p,"e+0$1"),t=g.call(t,d,"e-0$1"),e.alternate&&(t=g.call(t,h,"$1."),t=g.call(t,m,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===f.call(e.specifier)?f.call(t):c.call(t)}function E(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var j=String.fromCharCode,S=Array.isArray;function I(e){return e!=e}function _(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function T(e){var r,t,n,i,o,u,s,c,f,g,p,d,h;if(!S(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(u="",s=1,c=0;c<e.length;c++)if(n=e[c],"string"==typeof n)u+=n;else{if(r=void 0!==n.precision,!(n=_(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,I(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,I(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=l(n);break;case"s":n.maxWidth=r?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!I(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=I(o)?String(n.arg):j(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=y(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=a(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(g=n.arg,p=n.width,d=n.padRight,h=void 0,(h=p-g.length)<0?g:g=d?g+E(h):E(h)+g)),u+=n.arg||"",s+=1}return u}var V=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function M(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function D(e){var r,t,n,i;for(t=[],i=0,n=V.exec(e);n;)(r=e.slice(i,V.lastIndex-n[0].length)).length&&t.push(r),t.push(M(n)),i=V.lastIndex,n=V.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function F(e){var r,t;if("string"!=typeof e)throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[D(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return T.apply(null,r)}var N,O=Object.prototype,Y=O.toString,A=O.__defineGetter__,x=O.__defineSetter__,k=O.__lookupGetter__,C=O.__lookupSetter__;N=function(){try{return r({},"x",{}),!0}catch(e){return!1}}()?t:function(e,r,t){var n,i,a,o;if("object"!=typeof e||null===e||"[object Array]"===Y.call(e))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===Y.call(t))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(k.call(e,r)||C.call(e,r)?(n=e.__proto__,e.__proto__=O,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&A&&A.call(e,r,t.get),o&&x&&x.call(e,r,t.set),e};var R=N;function L(e,r,t){R(e,r,{configurable:!1,enumerable:!0,writable:!1,value:t})}var P={};function U(e){return e.toLowerCase()}L(P,"HOURS_IN_DAY",24),L(P,"HOURS_IN_WEEK",168),L(P,"MILLISECONDS_IN_DAY",864e5),L(P,"MILLISECONDS_IN_HOUR",36e5),L(P,"MILLISECONDS_IN_MINUTE",6e4),L(P,"MILLISECONDS_IN_SECOND",1e3),L(P,"MILLISECONDS_IN_WEEK",6048e5),L(P,"MINUTES_IN_DAY",1440),L(P,"MINUTES_IN_HOUR",60),L(P,"MINUTES_IN_WEEK",10080),L(P,"MONTHS_IN_YEAR",12),L(P,"SECONDS_IN_DAY",86400),L(P,"SECONDS_IN_HOUR",3600),L(P,"SECONDS_IN_MINUTE",60),L(P,"SECONDS_IN_WEEK",604800);var $=/(\d+)([a-z]+)/gi,W={d:"days",h:"hours",m:"minutes",s:"seconds",ms:"milliseconds"};function z(e){var r,t,n;if(t={days:0,hours:0,minutes:0,seconds:0,milliseconds:0},0===e.length)return t;for(e=U(e),r=$.exec(e);r;)(n=W[r[2]])&&(t[n]=parseInt(r[1],10)),r=$.exec(e);return t}var B={};function G(){return(new Date).getFullYear()}L(B,"parseDuration",z);var H="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Z(){return H&&"symbol"==typeof Symbol.toStringTag}var K=Object.prototype.toString;var q=Object.prototype.hasOwnProperty;var X,Q="function"==typeof Symbol?Symbol:void 0,J="function"==typeof Q?Q.toStringTag:"";X=Z()?function(e){var r,t,n,i,a;if(null==e)return K.call(e);t=e[J],a=J,r=null!=(i=e)&&q.call(i,a);try{e[J]=void 0}catch(r){return K.call(e)}return n=K.call(e),r?e[J]=t:delete e[J],n}:function(e){return K.call(e)};var ee=X,re=Date.prototype.getDay;var te=Z();function ne(e){return"object"==typeof e&&(e instanceof Date||(te?function(e){try{return re.call(e),!0}catch(e){return!1}}(e):"[object Date]"===ee(e)))}function ie(e,r,t){R(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function ae(e){return"string"==typeof e}var oe=String.prototype.valueOf;var ue=Z();function le(e){return"object"==typeof e&&(e instanceof String||(ue?function(e){try{return oe.call(e),!0}catch(e){return!1}}(e):"[object String]"===ee(e)))}function se(e){return ae(e)||le(e)}function ce(e){return"number"==typeof e}ie(se,"isPrimitive",ae),ie(se,"isObject",le);var fe=Number,ge=fe.prototype.toString;var pe=Z();function de(e){return"object"==typeof e&&(e instanceof fe||(pe?function(e){try{return ge.call(e),!0}catch(e){return!1}}(e):"[object Number]"===ee(e)))}function he(e){return ce(e)||de(e)}ie(he,"isPrimitive",ce),ie(he,"isObject",de);var me=Number.POSITIVE_INFINITY,ve=fe.NEGATIVE_INFINITY,be=Math.floor;function we(e){return be(e)===e}function ye(e){return e<me&&e>ve&&we(e)}function Ee(e){return ce(e)&&ye(e)}function je(e){return de(e)&&ye(e.valueOf())}function Se(e){return Ee(e)||je(e)}function Ie(e){if(!ae(e))throw new TypeError(F("invalid argument. Must provide a string. Value: `%s`.",e));return U(e)}function _e(e){var r;if(arguments.length)if(ne(e))r=e.getFullYear();else{if(!Ee(e))return!1;r=e}else r=(new Date).getFullYear();return r%100==0?r%400==0:r%4==0}ie(Se,"isPrimitive",Ee),ie(Se,"isObject",je);var Te={1:31,2:28,3:31,4:30,5:31,6:30,7:31,8:31,9:30,10:31,11:30,12:31,jan:31,january:31,feb:28,february:28,mar:31,march:31,apr:30,april:30,may:31,jun:30,june:30,jul:31,july:31,aug:31,august:31,sep:30,september:30,oct:31,october:31,nov:30,november:30,dec:31,december:31};function Ve(e,r){var t,n,i,a;if(0===arguments.length)n=(a=new Date).getMonth()+1,i=a.getFullYear();else if(1===arguments.length)if(ne(e))n=(a=e).getMonth()+1,i=a.getFullYear();else{if(!ae(e)&&!Ee(e))throw new TypeError(F("invalid argument. First argument must be either a string, integer, or Date object. Value: `%s`.",e));i=G(),n=e}else{if(!ae(e)&&!Ee(e))throw new TypeError(F("invalid argument. First argument must be either a string or integer. Value: `%s`.",e));if(!Ee(r))throw new TypeError(F("invalid argument. Second argument must be an integer. Value: `%s`.",r));n=e,i=r}if(Ee(n)&&(n<1||n>12))throw new RangeError(F("invalid argument. An integer month value must be on the interval: [1, 12]. Value: `%s`.",n));if(n=Ie(n.toString()),void 0===(t=Te[n]))throw new Error(F("invalid argument. Must provide a recognized month. Value: `%s`.",n));return 28===t&&_e(i)&&(t+=1),t}var Me={1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,10:10,11:11,12:12,jan:1,january:1,feb:2,february:2,mar:3,march:3,apr:4,april:4,may:5,jun:6,june:6,jul:7,july:7,aug:8,august:8,sep:9,september:9,oct:10,october:10,nov:11,november:11,dec:12,december:12},De=[31,28,31,30,31,30,31,31,30,31,30,31];function Fe(e,r,t){var n,i,a,o,u,l,s;if(0===arguments.length)o=(n=new Date).getMonth()+1,u=n.getFullYear(),l=n.getDate();else if(1===arguments.length){if(!ne(e))throw new TypeError(F("invalid argument. If only providing a single argument, must provide a Date object. Value: `%s`.",e));o=(n=e).getMonth()+1,u=n.getFullYear(),l=n.getDate()}else{if(!ae(e)&&!Ee(e))throw new TypeError(F("invalid argument. First argument must be either a string or integer. Value: `%s`.",e));if(!Ee(r))throw new TypeError(F("invalid argument. Second argument must be an integer. Value: `%s`.",r));if(!Ee(t))throw new TypeError(F("invalid argument. Third argument must be an integer. Value: `%s`.",t));o=e,l=r,u=t}if(i=Ve(o,u),l<1||l>i)throw new RangeError(F("invalid argument. Day number must be on the interval: [1, %u]. Value: `%d`.",i,l));for(o=Ie(o.toString()),o=Me[o],a=0,s=0;s<o-1;s++)a+=De[s],1===s&&_e(u)&&(a+=1);return a+=l}var Ne={1:1,2:1,3:1,4:2,5:2,6:2,7:3,8:3,9:3,10:4,11:4,12:4,jan:1,january:1,feb:1,february:1,mar:1,march:1,apr:2,april:2,may:2,jun:2,june:2,jul:3,july:3,aug:3,august:3,sep:3,september:3,oct:4,october:4,nov:4,november:4,dec:4,december:4};function Oe(e){var r,t;if(arguments.length)if(ne(e))r=e.getMonth()+1;else{if(!ae(e)&&!Ee(e))throw new TypeError(F("invalid argument. Must provide either a string, integer, or Date object. Value: `%s`.",e));r=e}else r=(new Date).getMonth()+1;if(Ee(r)&&(r<1||r>12))throw new RangeError(F("invalid argument. An integer month value must be on the interval: [1, 12]. Value: `%s`.",r));if(r=Ie(r.toString()),void 0===(t=Ne[r]))throw new Error(F("invalid argument. Must provide a recognized month. Value: `%s`.",e));return t}var Ye=[0,90,181,273],Ae=[0,91,182,274];var xe=/^(?:\d+d)?(?:\d+h)?(?:\d+m)?(?:\d+s)?(?:\d+ms)?$/i;var ke={1:744,2:672,3:744,4:720,5:744,6:720,7:744,8:744,9:720,10:744,11:720,12:744,jan:744,january:744,feb:672,february:672,mar:744,march:744,apr:720,april:720,may:744,jun:720,june:720,jul:744,july:744,aug:744,august:744,sep:720,september:720,oct:744,october:744,nov:720,november:720,dec:744,december:744};function Ce(e){return(e+be(e/4)-be(e/100)+be(e/400))%7}var Re={1:44640,2:40320,3:44640,4:43200,5:44640,6:43200,7:44640,8:44640,9:43200,10:44640,11:43200,12:44640,jan:44640,january:44640,feb:40320,february:40320,mar:44640,march:44640,apr:43200,april:43200,may:44640,jun:43200,june:43200,jul:44640,july:44640,aug:44640,august:44640,sep:43200,september:43200,oct:44640,october:44640,nov:43200,november:43200,dec:44640,december:44640};function Le(e){return Ee(e)&&e>=0}function Pe(e){return je(e)&&e.valueOf()>=0}function Ue(e){return Le(e)||Pe(e)}ie(Ue,"isPrimitive",Le),ie(Ue,"isObject",Pe);var $e=/./;function We(e){return"boolean"==typeof e}var ze=Boolean,Be=Boolean.prototype.toString;var Ge=Z();function He(e){return"object"==typeof e&&(e instanceof ze||(Ge?function(e){try{return Be.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===ee(e)))}function Ze(e){return We(e)||He(e)}ie(Ze,"isPrimitive",We),ie(Ze,"isObject",He);var Ke="object"==typeof self?self:null,qe="object"==typeof window?window:null,Xe="object"==typeof global?global:null,Qe="object"==typeof globalThis?globalThis:null;var Je=function(e){if(arguments.length){if(!We(e))throw new TypeError(F("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return new Function("return this;")()}if(Qe)return Qe;if(Ke)return Ke;if(qe)return qe;if(Xe)return Xe;throw new Error("unexpected error. Unable to resolve global object.")}(),er=Je.document&&Je.document.childNodes,rr=Int8Array;function tr(){return/^\s*function\s*([^(]*)/i}var nr,ir=/^\s*function\s*([^(]*)/i;ie(tr,"REGEXP",ir),nr=Array.isArray?Array.isArray:function(e){return"[object Array]"===ee(e)};var ar=nr;function or(e){return null!==e&&"object"==typeof e}var ur=function(e){if("function"!=typeof e)throw new TypeError(F("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!ar(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(or);function lr(e){var r,t,n,i;if(("Object"===(t=ee(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=ir.exec(n.toString()))return r[1]}return or(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}ie(or,"isObjectLikeArray",ur);var sr="function"==typeof $e||"object"==typeof rr||"function"==typeof er?function(e){return lr(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?lr(e).toLowerCase():r};var cr,fr=(cr=Date.now,"function"===sr(cr)),gr=Math.round;var pr=fr?function(){return 0|gr(Date.now()/1e3)}:function(){var e;return e=new Date,0|gr(e.getTime()/1e3)},dr={1:2678400,2:2419200,3:2678400,4:2592e3,5:2678400,6:2592e3,7:2678400,8:2678400,9:2592e3,10:2678400,11:2592e3,12:2678400,jan:2678400,january:2678400,feb:2419200,february:2419200,mar:2678400,march:2678400,apr:2592e3,april:2592e3,may:2678400,jun:2592e3,june:2592e3,jul:2678400,july:2678400,aug:2678400,august:2678400,sep:2592e3,september:2592e3,oct:2678400,october:2678400,nov:2592e3,november:2592e3,dec:2678400,december:2678400};var hr=e;function mr(){return hr.hrtime()}var vr=4294967295;function br(e){if("function"!=typeof e)throw new TypeError(F("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!function(e){return null!=e&&"function"!=typeof e&&"number"==typeof e.length&&we(e.length)&&e.length>=0&&e.length<=vr}(r))return!1;if(t=r.length,0===t)return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}var wr=br(Ue.isPrimitive),yr=br(Ue.isObject),Er=br(Ue);ie(Er,"primitives",wr),ie(Er,"objects",yr);var jr={};return L(jr,"constants",P),L(jr,"base",B),L(jr,"currentYear",G),L(jr,"dayOfQuarter",(function(e,r,t){var n,i,a,o;if(0===arguments.length)a=Oe(n=new Date),o=Fe(n),i=n.getFullYear();else if(1===arguments.length){if(!ne(e))throw new TypeError(F("invalid argument. If only providing a single argument, must provide a Date object. Value: `%s`.",e));a=Oe(n=e),o=Fe(n),i=n.getFullYear()}else{if(!ae(e)&&!Ee(e))throw new TypeError(F("invalid argument. First argument must be either a string or integer. Value: `%s`.",e));if(!Ee(r))throw new TypeError(F("invalid argument. Second argument must be an integer. Value: `%s`.",r));if(!Ee(t))throw new TypeError(F("invalid argument. Third argument must be an integer. Value: `%s`.",t));a=Oe(e),o=Fe(e,r,t),i=t}return _e(i)?o-Ae[a-1]:o-Ye[a-1]})),L(jr,"dayOfYear",Fe),L(jr,"daysInMonth",Ve),L(jr,"daysInYear",(function(e){var r;if(arguments.length)if(ne(e))r=e.getFullYear();else{if(!Ee(e))throw new TypeError(F("invalid argument. Must provide either an integer or a Date object. Value: `%s`.",e));r=e}else r=G();return _e(r)?366:365})),L(jr,"duration2ms",(function(e){var r,t,n;if(!ae(n=e)||!xe.test(n))throw new TypeError(F("invalid argument. Must provide a valid duration string. Value: `%s`.",e));return t=864e5*(r=z(e)).days,t+=36e5*r.hours,t+=6e4*r.minutes,t+=1e3*r.seconds,t+=r.milliseconds})),L(jr,"hoursInMonth",(function(e,r){var t,n,i,a;if(0===arguments.length)n=(a=new Date).getMonth()+1,i=a.getFullYear();else if(1===arguments.length)if(ne(e))n=(a=e).getMonth()+1,i=a.getFullYear();else{if(!ae(e)&&!Ee(e))throw new TypeError(F("invalid argument. First argument must be either a string, integer, or Date object. Value: `%s`.",e));i=G(),n=e}else{if(!ae(e)&&!Ee(e))throw new TypeError(F("invalid argument. First argument must be either a string or integer. Value: `%s`.",e));if(!Ee(r))throw new TypeError(F("invalid argument. Second argument must be an integer. Value: `%s`.",r));n=e,i=r}if(Ee(n)&&(n<1||n>12))throw new RangeError(F("invalid argument. An integer month value must be on the interval: [1, 12]. Value: `%s`.",n));if(n=Ie(n.toString()),void 0===(t=ke[n]))throw new Error(F("invalid argument. Must provide a recognized month. Value: `%s`.",n));return 672===t&&_e(i)&&(t+=24),t})),L(jr,"hoursInYear",(function(e){var r;if(arguments.length)if(ne(e))r=e.getFullYear();else{if(!Ee(e))throw new TypeError(F("invalid argument. Must provide either an integer or a Date object. Value: `%s`.",e));r=e}else r=G();return _e(r)?8784:8760})),L(jr,"isoWeeksInYear",(function(e){var r;if(arguments.length)if(ne(e))r=e.getFullYear();else{if(!Ee(e))throw new TypeError(F("invalid argument. Must provide either an integer or a Date object. Value: `%s`.",e));r=e}else r=G();return 4===Ce(r)||3===Ce(r-1)?53:52})),L(jr,"minutesInMonth",(function(e,r){var t,n,i,a;if(0===arguments.length)n=(a=new Date).getMonth()+1,i=a.getFullYear();else if(1===arguments.length)if(ne(e))n=(a=e).getMonth()+1,i=a.getFullYear();else{if(!ae(e)&&!Ee(e))throw new TypeError(F("invalid argument. First argument must be either a string, integer, or Date object. Value: `%s`.",e));i=G(),n=e}else{if(!ae(e)&&!Ee(e))throw new TypeError(F("invalid argument. First argument must be either a string or integer. Value: `%s`.",e));if(!Ee(r))throw new TypeError(F("invalid argument. Second argument must be an integer. Value: `%s`.",r));n=e,i=r}if(Ee(n)&&(n<1||n>12))throw new RangeError(F("invalid argument. An integer month value must be on the interval: [1, 12]. Value: `%s`.",n));if(n=Ie(n.toString()),void 0===(t=Re[n]))throw new Error(F("invalid argument. Must provide a recognized month. Value: `%s`.",n));return 40320===t&&_e(i)&&(t+=1440),t})),L(jr,"minutesInYear",(function(e){var r;if(arguments.length)if(ne(e))r=e.getFullYear();else{if(!Ee(e))throw new TypeError(F("invalid argument. Must provide either an integer or a Date object. Value: `%s`.",e));r=e}else r=G();return _e(r)?527040:525600})),L(jr,"ms2duration",(function(e){var r;if(!Le(e))throw new TypeError(F("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));return 0===e?"0ms":(r="",e>=864e5&&(r+=be(e/864e5)+"d",e%=864e5),e>=36e5&&(r+=be(e/36e5)+"h",e%=36e5),e>=6e4&&(r+=be(e/6e4)+"m",e%=6e4),e>=1e3&&(r+=be(e/1e3)+"s",e%=1e3),e>0&&(r+=e+"ms"),r)})),L(jr,"now",pr),L(jr,"quarterOfYear",Oe),L(jr,"secondsInMonth",(function(e,r){var t,n,i,a;if(0===arguments.length)n=(a=new Date).getMonth()+1,i=a.getFullYear();else if(1===arguments.length)if(ne(e))n=(a=e).getMonth()+1,i=a.getFullYear();else{if(!ae(e)&&!Ee(e))throw new TypeError(F("invalid argument. First argument must be either a string, integer, or Date object. Value: `%s`.",e));i=G(),n=e}else{if(!ae(e)&&!Ee(e))throw new TypeError(F("invalid argument. First argument must be either a string or integer. Value: `%s`.",e));if(!Ee(r))throw new TypeError(F("invalid argument. Second argument must be an integer. Value: `%s`.",r));n=e,i=r}if(Ee(n)&&(n<1||n>12))throw new RangeError(F("invalid argument. An integer month value must be on the interval: [1, 12]. Value: `%s`.",n));if(n=Ie(n.toString()),void 0===(t=dr[n]))throw new Error(F("invalid argument. Must provide a recognized month. Value: `%s`.",n));return 2419200===t&&_e(i)&&(t+=86400),t})),L(jr,"secondsInYear",(function(e){var r;if(arguments.length)if(ne(e))r=e.getFullYear();else{if(!Ee(e))throw new TypeError(F("invalid argument. Must provide either an integer or a Date object. Value: `%s`.",e));r=e}else r=G();return _e(r)?31622400:31536e3})),L(jr,"tic",mr),L(jr,"toc",(function(e){var r,t,n=mr();if(!wr(e))throw new TypeError(F("invalid argument. Must provide an array of nonnegative integers. Value: `%s`.",e));if(2!==e.length)throw new RangeError(F("invalid argument. Input array must contain two elements. Value: `%s`.",e));return r=n[0]-e[0],t=n[1]-e[1],r>0&&t<0?(r-=1,t+=1e9):r<0&&t>0&&(r+=1,t-=1e9),[r,t]})),jr}));
//# sourceMappingURL=index.js.map
