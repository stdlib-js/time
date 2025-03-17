// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var i=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(a):n(a)+e,i&&(e="-"+e)),e}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(e){var r,n,u;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===e.specifier||10!==r)&&(u=4294967295+u+1),u<0?(n=(-u).toString(r),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=u.toString(r),u||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===o.call(e.specifier)?o.call(n):a.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var l=Math.abs,s=String.prototype.toLowerCase,c=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,p=/e-(\d)$/,h=/^(\d+)$/,m=/^(\d+)e/,d=/\.0$/,v=/\.0*e/,w=/(\..*[^0])0*e/;function b(e){var r,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":l(i)<1e-4?((r=e.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(e.precision),e.alternate||(n=f.call(n,w,"$1e"),n=f.call(n,v,"e"),n=f.call(n,d,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=f.call(n,g,"e+0$1"),n=f.call(n,p,"e-0$1"),e.alternate&&(n=f.call(n,h,"$1."),n=f.call(n,m,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===c.call(e.specifier)?c.call(n):s.call(n)}function y(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var E=String.fromCharCode,j=Array.isArray;function T(e){return e!=e}function _(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function S(e){var r,t,n,a,o,l,s,c,f,g,p,h,m;if(!j(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(l="",s=1,c=0;c<e.length;c++)if(n=e[c],"string"==typeof n)l+=n;else{if(r=void 0!==n.precision,!(n=_(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(a=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,T(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,T(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=r?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!T(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=T(o)?String(n.arg):E(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=b(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(g=n.arg,p=n.width,h=n.padRight,m=void 0,(m=p-g.length)<0?g:g=h?g+y(m):y(m)+g)),l+=n.arg||"",s+=1}return l}var I=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function V(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function M(e){var r,t,n,i;for(t=[],i=0,n=I.exec(e);n;)(r=e.slice(i,I.lastIndex-n[0].length)).length&&t.push(r),t.push(V(n)),i=I.lastIndex,n=I.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function D(e){var r,t;if("string"!=typeof e)throw new TypeError(D("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[M(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return S.apply(null,r)}var O,N=Object.prototype,F=N.toString,Y=N.__defineGetter__,A=N.__defineSetter__,k=N.__lookupGetter__,x=N.__lookupSetter__;O=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,i,a,o;if("object"!=typeof e||null===e||"[object Array]"===F.call(e))throw new TypeError(D("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===F.call(t))throw new TypeError(D("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(k.call(e,r)||x.call(e,r)?(n=e.__proto__,e.__proto__=N,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Y&&Y.call(e,r,t.get),o&&A&&A.call(e,r,t.set),e};var L=O;function R(e,r,t){L(e,r,{configurable:!1,enumerable:!0,writable:!1,value:t})}var C={};function P(e){return e.toLowerCase()}R(C,"HOURS_IN_DAY",24),R(C,"HOURS_IN_WEEK",168),R(C,"MILLISECONDS_IN_DAY",864e5),R(C,"MILLISECONDS_IN_HOUR",36e5),R(C,"MILLISECONDS_IN_MINUTE",6e4),R(C,"MILLISECONDS_IN_SECOND",1e3),R(C,"MILLISECONDS_IN_WEEK",6048e5),R(C,"MINUTES_IN_DAY",1440),R(C,"MINUTES_IN_HOUR",60),R(C,"MINUTES_IN_WEEK",10080),R(C,"MONTHS_IN_YEAR",12),R(C,"SECONDS_IN_DAY",86400),R(C,"SECONDS_IN_HOUR",3600),R(C,"SECONDS_IN_MINUTE",60),R(C,"SECONDS_IN_WEEK",604800);var U=/(\d+)([a-z]+)/gi,$={d:"days",h:"hours",m:"minutes",s:"seconds",ms:"milliseconds"};function z(e){var r,t,n;if(t={days:0,hours:0,minutes:0,seconds:0,milliseconds:0},0===e.length)return t;for(e=P(e),r=U.exec(e);r;)(n=$[r[2]])&&(t[n]=parseInt(r[1],10)),r=U.exec(e);return t}var W={};function B(){return(new Date).getFullYear()}R(W,"parseDuration",z);var G="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function H(){return G&&"symbol"==typeof Symbol.toStringTag}var Z=Object.prototype.toString;var K=Object.prototype.hasOwnProperty;var X,q="function"==typeof Symbol?Symbol:void 0,Q="function"==typeof q?q.toStringTag:"";X=H()?function(e){var r,t,n,i,a;if(null==e)return Z.call(e);t=e[Q],a=Q,r=null!=(i=e)&&K.call(i,a);try{e[Q]=void 0}catch(r){return Z.call(e)}return n=Z.call(e),r?e[Q]=t:delete e[Q],n}:function(e){return Z.call(e)};var J=X,ee=Date.prototype.getDay;var re=H();function te(e){return"object"==typeof e&&(e instanceof Date||(re?function(e){try{return ee.call(e),!0}catch(e){return!1}}(e):"[object Date]"===J(e)))}function ne(e,r,t){L(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function ie(e){return"string"==typeof e}var ae=String.prototype.valueOf;var oe=H();function ue(e){return"object"==typeof e&&(e instanceof String||(oe?function(e){try{return ae.call(e),!0}catch(e){return!1}}(e):"[object String]"===J(e)))}function le(e){return ie(e)||ue(e)}function se(e){return"number"==typeof e}ne(le,"isPrimitive",ie),ne(le,"isObject",ue);var ce=Number,fe=ce.prototype.toString;var ge=H();function pe(e){return"object"==typeof e&&(e instanceof ce||(ge?function(e){try{return fe.call(e),!0}catch(e){return!1}}(e):"[object Number]"===J(e)))}function he(e){return se(e)||pe(e)}ne(he,"isPrimitive",se),ne(he,"isObject",pe);var me=Number.POSITIVE_INFINITY,de=ce.NEGATIVE_INFINITY,ve=Math.floor;function we(e){return ve(e)===e}function be(e){return e<me&&e>de&&we(e)}function ye(e){return se(e)&&be(e)}function Ee(e){return pe(e)&&be(e.valueOf())}function je(e){return ye(e)||Ee(e)}function Te(e){if(!ie(e))throw new TypeError(D("invalid argument. Must provide a string. Value: `%s`.",e));return P(e)}function _e(e){var r;if(arguments.length)if(te(e))r=e.getFullYear();else{if(!ye(e))return!1;r=e}else r=(new Date).getFullYear();return r%100==0?r%400==0:r%4==0}ne(je,"isPrimitive",ye),ne(je,"isObject",Ee);var Se={1:31,2:28,3:31,4:30,5:31,6:30,7:31,8:31,9:30,10:31,11:30,12:31,jan:31,january:31,feb:28,february:28,mar:31,march:31,apr:30,april:30,may:31,jun:30,june:30,jul:31,july:31,aug:31,august:31,sep:30,september:30,oct:31,october:31,nov:30,november:30,dec:31,december:31};function Ie(e,r){var t,n,i,a;if(0===arguments.length)n=(a=new Date).getMonth()+1,i=a.getFullYear();else if(1===arguments.length)if(te(e))n=(a=e).getMonth()+1,i=a.getFullYear();else{if(!ie(e)&&!ye(e))throw new TypeError(D("invalid argument. First argument must be either a string, integer, or Date object. Value: `%s`.",e));i=B(),n=e}else{if(!ie(e)&&!ye(e))throw new TypeError(D("invalid argument. First argument must be either a string or integer. Value: `%s`.",e));if(!ye(r))throw new TypeError(D("invalid argument. Second argument must be an integer. Value: `%s`.",r));n=e,i=r}if(ye(n)&&(n<1||n>12))throw new RangeError(D("invalid argument. An integer month value must be on the interval: [1, 12]. Value: `%s`.",n));if(n=Te(n.toString()),void 0===(t=Se[n]))throw new Error(D("invalid argument. Must provide a recognized month. Value: `%s`.",n));return 28===t&&_e(i)&&(t+=1),t}var Ve={1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,10:10,11:11,12:12,jan:1,january:1,feb:2,february:2,mar:3,march:3,apr:4,april:4,may:5,jun:6,june:6,jul:7,july:7,aug:8,august:8,sep:9,september:9,oct:10,october:10,nov:11,november:11,dec:12,december:12},Me=[31,28,31,30,31,30,31,31,30,31,30,31];function De(e,r,t){var n,i,a,o,u,l,s;if(0===arguments.length)o=(n=new Date).getMonth()+1,u=n.getFullYear(),l=n.getDate();else if(1===arguments.length){if(!te(e))throw new TypeError(D("invalid argument. If only providing a single argument, must provide a Date object. Value: `%s`.",e));o=(n=e).getMonth()+1,u=n.getFullYear(),l=n.getDate()}else{if(!ie(e)&&!ye(e))throw new TypeError(D("invalid argument. First argument must be either a string or integer. Value: `%s`.",e));if(!ye(r))throw new TypeError(D("invalid argument. Second argument must be an integer. Value: `%s`.",r));if(!ye(t))throw new TypeError(D("invalid argument. Third argument must be an integer. Value: `%s`.",t));o=e,l=r,u=t}if(i=Ie(o,u),l<1||l>i)throw new RangeError(D("invalid argument. Day number must be on the interval: [1, %u]. Value: `%d`.",i,l));for(o=Te(o.toString()),o=Ve[o],a=0,s=0;s<o-1;s++)a+=Me[s],1===s&&_e(u)&&(a+=1);return a+=l}var Oe={1:1,2:1,3:1,4:2,5:2,6:2,7:3,8:3,9:3,10:4,11:4,12:4,jan:1,january:1,feb:1,february:1,mar:1,march:1,apr:2,april:2,may:2,jun:2,june:2,jul:3,july:3,aug:3,august:3,sep:3,september:3,oct:4,october:4,nov:4,november:4,dec:4,december:4};function Ne(e){var r,t;if(arguments.length)if(te(e))r=e.getMonth()+1;else{if(!ie(e)&&!ye(e))throw new TypeError(D("invalid argument. Must provide either a string, integer, or Date object. Value: `%s`.",e));r=e}else r=(new Date).getMonth()+1;if(ye(r)&&(r<1||r>12))throw new RangeError(D("invalid argument. An integer month value must be on the interval: [1, 12]. Value: `%s`.",r));if(r=Te(r.toString()),void 0===(t=Oe[r]))throw new Error(D("invalid argument. Must provide a recognized month. Value: `%s`.",e));return t}var Fe=[0,90,181,273],Ye=[0,91,182,274];function Ae(e,r,t){var n,i,a,o;if(0===arguments.length)a=Ne(n=new Date),o=De(n),i=n.getFullYear();else if(1===arguments.length){if(!te(e))throw new TypeError(D("invalid argument. If only providing a single argument, must provide a Date object. Value: `%s`.",e));a=Ne(n=e),o=De(n),i=n.getFullYear()}else{if(!ie(e)&&!ye(e))throw new TypeError(D("invalid argument. First argument must be either a string or integer. Value: `%s`.",e));if(!ye(r))throw new TypeError(D("invalid argument. Second argument must be an integer. Value: `%s`.",r));if(!ye(t))throw new TypeError(D("invalid argument. Third argument must be an integer. Value: `%s`.",t));a=Ne(e),o=De(e,r,t),i=t}return _e(i)?o-Ye[a-1]:o-Fe[a-1]}function ke(e){var r;if(arguments.length)if(te(e))r=e.getFullYear();else{if(!ye(e))throw new TypeError(D("invalid argument. Must provide either an integer or a Date object. Value: `%s`.",e));r=e}else r=B();return _e(r)?366:365}var xe=/^(?:\d+d)?(?:\d+h)?(?:\d+m)?(?:\d+s)?(?:\d+ms)?$/i;function Le(e){var r,t,n;if(!ie(n=e)||!xe.test(n))throw new TypeError(D("invalid argument. Must provide a valid duration string. Value: `%s`.",e));return t=864e5*(r=z(e)).days,t+=36e5*r.hours,t+=6e4*r.minutes,t+=1e3*r.seconds,t+=r.milliseconds}var Re={1:744,2:672,3:744,4:720,5:744,6:720,7:744,8:744,9:720,10:744,11:720,12:744,jan:744,january:744,feb:672,february:672,mar:744,march:744,apr:720,april:720,may:744,jun:720,june:720,jul:744,july:744,aug:744,august:744,sep:720,september:720,oct:744,october:744,nov:720,november:720,dec:744,december:744};function Ce(e,r){var t,n,i,a;if(0===arguments.length)n=(a=new Date).getMonth()+1,i=a.getFullYear();else if(1===arguments.length)if(te(e))n=(a=e).getMonth()+1,i=a.getFullYear();else{if(!ie(e)&&!ye(e))throw new TypeError(D("invalid argument. First argument must be either a string, integer, or Date object. Value: `%s`.",e));i=B(),n=e}else{if(!ie(e)&&!ye(e))throw new TypeError(D("invalid argument. First argument must be either a string or integer. Value: `%s`.",e));if(!ye(r))throw new TypeError(D("invalid argument. Second argument must be an integer. Value: `%s`.",r));n=e,i=r}if(ye(n)&&(n<1||n>12))throw new RangeError(D("invalid argument. An integer month value must be on the interval: [1, 12]. Value: `%s`.",n));if(n=Te(n.toString()),void 0===(t=Re[n]))throw new Error(D("invalid argument. Must provide a recognized month. Value: `%s`.",n));return 672===t&&_e(i)&&(t+=24),t}function Pe(e){var r;if(arguments.length)if(te(e))r=e.getFullYear();else{if(!ye(e))throw new TypeError(D("invalid argument. Must provide either an integer or a Date object. Value: `%s`.",e));r=e}else r=B();return _e(r)?8784:8760}function Ue(e){return(e+ve(e/4)-ve(e/100)+ve(e/400))%7}function $e(e){var r;if(arguments.length)if(te(e))r=e.getFullYear();else{if(!ye(e))throw new TypeError(D("invalid argument. Must provide either an integer or a Date object. Value: `%s`.",e));r=e}else r=B();return 4===Ue(r)||3===Ue(r-1)?53:52}var ze={1:44640,2:40320,3:44640,4:43200,5:44640,6:43200,7:44640,8:44640,9:43200,10:44640,11:43200,12:44640,jan:44640,january:44640,feb:40320,february:40320,mar:44640,march:44640,apr:43200,april:43200,may:44640,jun:43200,june:43200,jul:44640,july:44640,aug:44640,august:44640,sep:43200,september:43200,oct:44640,october:44640,nov:43200,november:43200,dec:44640,december:44640};function We(e,r){var t,n,i,a;if(0===arguments.length)n=(a=new Date).getMonth()+1,i=a.getFullYear();else if(1===arguments.length)if(te(e))n=(a=e).getMonth()+1,i=a.getFullYear();else{if(!ie(e)&&!ye(e))throw new TypeError(D("invalid argument. First argument must be either a string, integer, or Date object. Value: `%s`.",e));i=B(),n=e}else{if(!ie(e)&&!ye(e))throw new TypeError(D("invalid argument. First argument must be either a string or integer. Value: `%s`.",e));if(!ye(r))throw new TypeError(D("invalid argument. Second argument must be an integer. Value: `%s`.",r));n=e,i=r}if(ye(n)&&(n<1||n>12))throw new RangeError(D("invalid argument. An integer month value must be on the interval: [1, 12]. Value: `%s`.",n));if(n=Te(n.toString()),void 0===(t=ze[n]))throw new Error(D("invalid argument. Must provide a recognized month. Value: `%s`.",n));return 40320===t&&_e(i)&&(t+=1440),t}function Be(e){var r;if(arguments.length)if(te(e))r=e.getFullYear();else{if(!ye(e))throw new TypeError(D("invalid argument. Must provide either an integer or a Date object. Value: `%s`.",e));r=e}else r=B();return _e(r)?527040:525600}function Ge(e){return ye(e)&&e>=0}function He(e){return Ee(e)&&e.valueOf()>=0}function Ze(e){return Ge(e)||He(e)}function Ke(e){var r;if(!Ge(e))throw new TypeError(D("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));return 0===e?"0ms":(r="",e>=864e5&&(r+=ve(e/864e5)+"d",e%=864e5),e>=36e5&&(r+=ve(e/36e5)+"h",e%=36e5),e>=6e4&&(r+=ve(e/6e4)+"m",e%=6e4),e>=1e3&&(r+=ve(e/1e3)+"s",e%=1e3),e>0&&(r+=e+"ms"),r)}ne(Ze,"isPrimitive",Ge),ne(Ze,"isObject",He);var Xe=/./;function qe(e){return"boolean"==typeof e}var Qe=Boolean,Je=Boolean.prototype.toString;var er=H();function rr(e){return"object"==typeof e&&(e instanceof Qe||(er?function(e){try{return Je.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===J(e)))}function tr(e){return qe(e)||rr(e)}ne(tr,"isPrimitive",qe),ne(tr,"isObject",rr);var nr="object"==typeof self?self:null,ir="object"==typeof window?window:null,ar="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},or="object"==typeof ar?ar:null,ur="object"==typeof globalThis?globalThis:null;var lr=function(e){if(arguments.length){if(!qe(e))throw new TypeError(D("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return new Function("return this;")()}if(ur)return ur;if(nr)return nr;if(ir)return ir;if(or)return or;throw new Error("unexpected error. Unable to resolve global object.")}(),sr=lr.document&&lr.document.childNodes,cr=Int8Array;function fr(){return/^\s*function\s*([^(]*)/i}var gr,pr=/^\s*function\s*([^(]*)/i;ne(fr,"REGEXP",pr),gr=Array.isArray?Array.isArray:function(e){return"[object Array]"===J(e)};var hr=gr;function mr(e){return null!==e&&"object"==typeof e}var dr=function(e){if("function"!=typeof e)throw new TypeError(D("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!hr(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(mr);function vr(e){var r,t,n,i;if(("Object"===(t=J(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=pr.exec(n.toString()))return r[1]}return mr(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}ne(mr,"isObjectLikeArray",dr);var wr="function"==typeof Xe||"object"==typeof cr||"function"==typeof sr?function(e){return vr(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?vr(e).toLowerCase():r};var br,yr=(br=Date.now,"function"===wr(br)),Er=Math.round;var jr=yr?function(){return 0|Er(Date.now()/1e3)}:function(){var e;return e=new Date,0|Er(e.getTime()/1e3)},Tr={1:2678400,2:2419200,3:2678400,4:2592e3,5:2678400,6:2592e3,7:2678400,8:2678400,9:2592e3,10:2678400,11:2592e3,12:2678400,jan:2678400,january:2678400,feb:2419200,february:2419200,mar:2678400,march:2678400,apr:2592e3,april:2592e3,may:2678400,jun:2592e3,june:2592e3,jul:2678400,july:2678400,aug:2678400,august:2678400,sep:2592e3,september:2592e3,oct:2678400,october:2678400,nov:2592e3,november:2592e3,dec:2678400,december:2678400};function _r(e,r){var t,n,i,a;if(0===arguments.length)n=(a=new Date).getMonth()+1,i=a.getFullYear();else if(1===arguments.length)if(te(e))n=(a=e).getMonth()+1,i=a.getFullYear();else{if(!ie(e)&&!ye(e))throw new TypeError(D("invalid argument. First argument must be either a string, integer, or Date object. Value: `%s`.",e));i=B(),n=e}else{if(!ie(e)&&!ye(e))throw new TypeError(D("invalid argument. First argument must be either a string or integer. Value: `%s`.",e));if(!ye(r))throw new TypeError(D("invalid argument. Second argument must be an integer. Value: `%s`.",r));n=e,i=r}if(ye(n)&&(n<1||n>12))throw new RangeError(D("invalid argument. An integer month value must be on the interval: [1, 12]. Value: `%s`.",n));if(n=Te(n.toString()),void 0===(t=Tr[n]))throw new Error(D("invalid argument. Must provide a recognized month. Value: `%s`.",n));return 2419200===t&&_e(i)&&(t+=86400),t}function Sr(e){var r;if(arguments.length)if(te(e))r=e.getFullYear();else{if(!ye(e))throw new TypeError(D("invalid argument. Must provide either an integer or a Date object. Value: `%s`.",e));r=e}else r=B();return _e(r)?31622400:31536e3}function Ir(e){if(e.__esModule)return e;var r=e.default;if("function"==typeof r){var t=function e(){return this instanceof e?Reflect.construct(r,arguments,this.constructor):r.apply(this,arguments)};t.prototype=r.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(e).forEach((function(r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})})),t}function Vr(){throw new Error("setTimeout has not been defined")}function Mr(){throw new Error("clearTimeout has not been defined")}var Dr=Vr,Or=Mr;function Nr(e){if(Dr===setTimeout)return setTimeout(e,0);if((Dr===Vr||!Dr)&&setTimeout)return Dr=setTimeout,setTimeout(e,0);try{return Dr(e,0)}catch(r){try{return Dr.call(null,e,0)}catch(r){return Dr.call(this,e,0)}}}"function"==typeof ar.setTimeout&&(Dr=setTimeout),"function"==typeof ar.clearTimeout&&(Or=clearTimeout);var Fr,Yr=[],Ar=!1,kr=-1;function xr(){Ar&&Fr&&(Ar=!1,Fr.length?Yr=Fr.concat(Yr):kr=-1,Yr.length&&Lr())}function Lr(){if(!Ar){var e=Nr(xr);Ar=!0;for(var r=Yr.length;r;){for(Fr=Yr,Yr=[];++kr<r;)Fr&&Fr[kr].run();kr=-1,r=Yr.length}Fr=null,Ar=!1,function(e){if(Or===clearTimeout)return clearTimeout(e);if((Or===Mr||!Or)&&clearTimeout)return Or=clearTimeout,clearTimeout(e);try{return Or(e)}catch(r){try{return Or.call(null,e)}catch(r){return Or.call(this,e)}}}(e)}}function Rr(e){var r=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)r[t-1]=arguments[t];Yr.push(new Cr(e,r)),1!==Yr.length||Ar||Nr(Lr)}function Cr(e,r){this.fun=e,this.array=r}Cr.prototype.run=function(){this.fun.apply(null,this.array)};var Pr="browser",Ur="browser",$r={},zr=[],Wr={},Br={},Gr={};function Hr(){}var Zr=Hr,Kr=Hr,Xr=Hr,qr=Hr,Qr=Hr,Jr=Hr,et=Hr;function rt(e){throw new Error("process.binding is not supported")}function tt(){return"/"}function nt(e){throw new Error("process.chdir is not supported")}function it(){return 0}var at=ar.performance||{},ot=at.now||at.mozNow||at.msNow||at.oNow||at.webkitNow||function(){return(new Date).getTime()};function ut(e){var r=.001*ot.call(at),t=Math.floor(r),n=Math.floor(r%1*1e9);return e&&(t-=e[0],(n-=e[1])<0&&(t--,n+=1e9)),[t,n]}var lt=new Date;function st(){return(new Date-lt)/1e3}var ct={nextTick:Rr,title:Pr,browser:true,env:$r,argv:zr,version:"",versions:Wr,on:Zr,addListener:Kr,once:Xr,off:qr,removeListener:Qr,removeAllListeners:Jr,emit:et,binding:rt,cwd:tt,chdir:nt,umask:it,hrtime:ut,platform:Ur,release:Br,config:Gr,uptime:st},ft=Ir(Object.freeze({__proto__:null,addListener:Kr,argv:zr,binding:rt,browser:true,chdir:nt,config:Gr,cwd:tt,default:ct,emit:et,env:$r,hrtime:ut,nextTick:Rr,off:qr,on:Zr,once:Xr,platform:Ur,release:Br,removeAllListeners:Jr,removeListener:Qr,title:Pr,umask:it,uptime:st,version:"",versions:Wr}));function gt(){return ft.hrtime()}var pt=4294967295;function ht(e){if("function"!=typeof e)throw new TypeError(D("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!function(e){return null!=e&&"function"!=typeof e&&"number"==typeof e.length&&we(e.length)&&e.length>=0&&e.length<=pt}(r))return!1;if(t=r.length,0===t)return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}var mt=ht(Ze.isPrimitive),dt=ht(Ze.isObject),vt=ht(Ze);function wt(e){var r,t,n=gt();if(!mt(e))throw new TypeError(D("invalid argument. Must provide an array of nonnegative integers. Value: `%s`.",e));if(2!==e.length)throw new RangeError(D("invalid argument. Input array must contain two elements. Value: `%s`.",e));return r=n[0]-e[0],t=n[1]-e[1],r>0&&t<0?(r-=1,t+=1e9):r<0&&t>0&&(r+=1,t-=1e9),[r,t]}ne(vt,"primitives",mt),ne(vt,"objects",dt);var bt={};R(bt,"constants",C),R(bt,"base",W),R(bt,"currentYear",B),R(bt,"dayOfQuarter",Ae),R(bt,"dayOfYear",De),R(bt,"daysInMonth",Ie),R(bt,"daysInYear",ke),R(bt,"duration2ms",Le),R(bt,"hoursInMonth",Ce),R(bt,"hoursInYear",Pe),R(bt,"isoWeeksInYear",$e),R(bt,"minutesInMonth",We),R(bt,"minutesInYear",Be),R(bt,"ms2duration",Ke),R(bt,"now",jr),R(bt,"quarterOfYear",Ne),R(bt,"secondsInMonth",_r),R(bt,"secondsInYear",Sr),R(bt,"tic",gt),R(bt,"toc",wt);export{W as base,C as constants,B as currentYear,Ae as dayOfQuarter,De as dayOfYear,Ie as daysInMonth,ke as daysInYear,bt as default,Le as duration2ms,Ce as hoursInMonth,Pe as hoursInYear,$e as isoWeeksInYear,We as minutesInMonth,Be as minutesInYear,Ke as ms2duration,jr as now,Ne as quarterOfYear,_r as secondsInMonth,Sr as secondsInYear,gt as tic,wt as toc};
//# sourceMappingURL=mod.js.map
