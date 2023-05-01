// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).time=r()}(this,(function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var i=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(a):n(a)+e,i&&(e="-"+e)),e}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(e){var r,n,u;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===e.specifier||10!==r)&&(u=4294967295+u+1),u<0?(n=(-u).toString(r),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=u.toString(r),u||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===o.call(e.specifier)?o.call(n):a.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function l(e){return"string"==typeof e}var s=Math.abs,c=String.prototype.toLowerCase,f=String.prototype.toUpperCase,g=String.prototype.replace,p=/e\+(\d)$/,h=/e-(\d)$/,m=/^(\d+)$/,d=/^(\d+)e/,v=/\.0$/,w=/\.0*e/,b=/(\..*[^0])0*e/;function y(e){var r,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":s(i)<1e-4?((r=e.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(e.precision),e.alternate||(n=g.call(n,b,"$1e"),n=g.call(n,w,"e"),n=g.call(n,v,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=g.call(n,p,"e+0$1"),n=g.call(n,h,"e-0$1"),e.alternate&&(n=g.call(n,m,"$1."),n=g.call(n,d,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===f.call(e.specifier)?f.call(n):c.call(n)}function E(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function j(e,r,t){var n=r-e.length;return n<0?e:e=t?e+E(n):E(n)+e}var T=String.fromCharCode,_=isNaN,S=Array.isArray;function I(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function V(e){var r,t,n,a,o,s,c,f,g;if(!S(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(s="",c=1,f=0;f<e.length;f++)if(l(n=e[f]))s+=n;else{if(r=void 0!==n.precision,!(n=I(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,g=0;g<t.length;g++)switch(a=t.charAt(g)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,_(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,_(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!_(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=_(o)?String(n.arg):T(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=y(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=j(n.arg,n.width,n.padRight)),s+=n.arg||"",c+=1}return s}var M=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function D(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function N(e){var r,t,n,i;for(t=[],i=0,n=M.exec(e);n;)(r=e.slice(i,M.lastIndex-n[0].length)).length&&t.push(r),t.push(D(n)),i=M.lastIndex,n=M.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function O(e){return"string"==typeof e}function F(e){var r,t,n;if(!O(e))throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=N(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return V.apply(null,t)}var Y,A=Object.prototype,k=A.toString,x=A.__defineGetter__,L=A.__defineSetter__,C=A.__lookupGetter__,R=A.__lookupSetter__;Y=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,i,a,o;if("object"!=typeof e||null===e||"[object Array]"===k.call(e))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===k.call(t))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(C.call(e,r)||R.call(e,r)?(n=e.__proto__,e.__proto__=A,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&x&&x.call(e,r,t.get),o&&L&&L.call(e,r,t.set),e};var P=Y;function U(e,r,t){P(e,r,{configurable:!1,enumerable:!0,writable:!1,value:t})}var $=1440,z=86400,W={};function B(e){return e.toLowerCase()}U(W,"HOURS_IN_DAY",24),U(W,"HOURS_IN_WEEK",168),U(W,"MILLISECONDS_IN_DAY",864e5),U(W,"MILLISECONDS_IN_HOUR",36e5),U(W,"MILLISECONDS_IN_MINUTE",6e4),U(W,"MILLISECONDS_IN_SECOND",1e3),U(W,"MILLISECONDS_IN_WEEK",6048e5),U(W,"MINUTES_IN_DAY",$),U(W,"MINUTES_IN_HOUR",60),U(W,"MINUTES_IN_WEEK",10080),U(W,"MONTHS_IN_YEAR",12),U(W,"SECONDS_IN_DAY",z),U(W,"SECONDS_IN_HOUR",3600),U(W,"SECONDS_IN_MINUTE",60),U(W,"SECONDS_IN_WEEK",604800);var G=/(\d+)([a-z]+)/gi,H={d:"days",h:"hours",m:"minutes",s:"seconds",ms:"milliseconds"};function Z(e){var r,t,n;if(t={days:0,hours:0,minutes:0,seconds:0,milliseconds:0},0===e.length)return t;for(e=B(e),r=G.exec(e);r;)(n=H[r[2]])&&(t[n]=parseInt(r[1],10)),r=G.exec(e);return t}var K={};function X(){return(new Date).getFullYear()}U(K,"parseDuration",Z);var q="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Q(){return q&&"symbol"==typeof Symbol.toStringTag}var J=Object.prototype.toString;var ee=Object.prototype.hasOwnProperty;var re,te="function"==typeof Symbol?Symbol:void 0,ne="function"==typeof te?te.toStringTag:"";re=Q()?function(e){var r,t,n,i,a;if(null==e)return J.call(e);t=e[ne],a=ne,r=null!=(i=e)&&ee.call(i,a);try{e[ne]=void 0}catch(r){return J.call(e)}return n=J.call(e),r?e[ne]=t:delete e[ne],n}:function(e){return J.call(e)};var ie=re,ae=Date.prototype.getDay;var oe=Q();function ue(e){return"object"==typeof e&&(e instanceof Date||(oe?function(e){try{return ae.call(e),!0}catch(e){return!1}}(e):"[object Date]"===ie(e)))}function le(e,r,t){P(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function se(e){return"string"==typeof e}var ce=String.prototype.valueOf;var fe=Q();function ge(e){return"object"==typeof e&&(e instanceof String||(fe?function(e){try{return ce.call(e),!0}catch(e){return!1}}(e):"[object String]"===ie(e)))}function pe(e){return se(e)||ge(e)}function he(e){return"number"==typeof e}le(pe,"isPrimitive",se),le(pe,"isObject",ge);var me=Number,de=me.prototype.toString;var ve=Q();function we(e){return"object"==typeof e&&(e instanceof me||(ve?function(e){try{return de.call(e),!0}catch(e){return!1}}(e):"[object Number]"===ie(e)))}function be(e){return he(e)||we(e)}le(be,"isPrimitive",he),le(be,"isObject",we);var ye=Number.POSITIVE_INFINITY,Ee=me.NEGATIVE_INFINITY,je=Math.floor;function Te(e){return je(e)===e}function _e(e){return e<ye&&e>Ee&&Te(e)}function Se(e){return he(e)&&_e(e)}function Ie(e){return we(e)&&_e(e.valueOf())}function Ve(e){return Se(e)||Ie(e)}function Me(e){if(!se(e))throw new TypeError(F("invalid argument. Must provide a string. Value: `%s`.",e));return B(e)}function De(){return(new Date).getFullYear()}function Ne(e){var r;if(arguments.length)if(ue(e))r=e.getFullYear();else{if(!Se(e))return!1;r=e}else r=De();return r%100==0?r%400==0:r%4==0}le(Ve,"isPrimitive",Se),le(Ve,"isObject",Ie);var Oe={1:31,2:28,3:31,4:30,5:31,6:30,7:31,8:31,9:30,10:31,11:30,12:31,jan:31,january:31,feb:28,february:28,mar:31,march:31,apr:30,april:30,may:31,jun:30,june:30,jul:31,july:31,aug:31,august:31,sep:30,september:30,oct:31,october:31,nov:30,november:30,dec:31,december:31};function Fe(e,r){var t,n,i,a;if(0===arguments.length)n=(a=new Date).getMonth()+1,i=a.getFullYear();else if(1===arguments.length)if(ue(e))n=(a=e).getMonth()+1,i=a.getFullYear();else{if(!se(e)&&!Se(e))throw new TypeError(F("invalid argument. First argument must be either a string, integer, or Date object. Value: `%s`.",e));i=X(),n=e}else{if(!se(e)&&!Se(e))throw new TypeError(F("invalid argument. First argument must be either a string or integer. Value: `%s`.",e));if(!Se(r))throw new TypeError(F("invalid argument. Second argument must be an integer. Value: `%s`.",r));n=e,i=r}if(Se(n)&&(n<1||n>12))throw new RangeError(F("invalid argument. An integer month value must be on the interval: [1, 12]. Value: `%s`.",n));if(n=Me(n.toString()),void 0===(t=Oe[n]))throw new Error(F("invalid argument. Must provide a recognized month. Value: `%s`.",n));return 28===t&&Ne(i)&&(t+=1),t}var Ye={1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,10:10,11:11,12:12,jan:1,january:1,feb:2,february:2,mar:3,march:3,apr:4,april:4,may:5,jun:6,june:6,jul:7,july:7,aug:8,august:8,sep:9,september:9,oct:10,october:10,nov:11,november:11,dec:12,december:12},Ae=[31,28,31,30,31,30,31,31,30,31,30,31];function ke(e,r,t){var n,i,a,o,u,l,s;if(0===arguments.length)o=(n=new Date).getMonth()+1,u=n.getFullYear(),l=n.getDate();else if(1===arguments.length){if(!ue(e))throw new TypeError(F("invalid argument. If only providing a single argument, must provide a Date object. Value: `%s`.",e));o=(n=e).getMonth()+1,u=n.getFullYear(),l=n.getDate()}else{if(!se(e)&&!Se(e))throw new TypeError(F("invalid argument. First argument must be either a string or integer. Value: `%s`.",e));if(!Se(r))throw new TypeError(F("invalid argument. Second argument must be an integer. Value: `%s`.",r));if(!Se(t))throw new TypeError(F("invalid argument. Third argument must be an integer. Value: `%s`.",t));o=e,l=r,u=t}if(i=Fe(o,u),l<1||l>i)throw new RangeError(F("invalid argument. Day number must be on the interval: [1, %u]. Value: `%d`.",i,l));for(o=Me(o.toString()),o=Ye[o],a=0,s=0;s<o-1;s++)a+=Ae[s],1===s&&Ne(u)&&(a+=1);return a+=l}var xe={1:1,2:1,3:1,4:2,5:2,6:2,7:3,8:3,9:3,10:4,11:4,12:4,jan:1,january:1,feb:1,february:1,mar:1,march:1,apr:2,april:2,may:2,jun:2,june:2,jul:3,july:3,aug:3,august:3,sep:3,september:3,oct:4,october:4,nov:4,november:4,dec:4,december:4};function Le(e){var r,t;if(arguments.length)if(ue(e))r=e.getMonth()+1;else{if(!se(e)&&!Se(e))throw new TypeError(F("invalid argument. Must provide either a string, integer, or Date object. Value: `%s`.",e));r=e}else r=(new Date).getMonth()+1;if(Se(r)&&(r<1||r>12))throw new RangeError(F("invalid argument. An integer month value must be on the interval: [1, 12]. Value: `%s`.",r));if(r=Me(r.toString()),void 0===(t=xe[r]))throw new Error(F("invalid argument. Must provide a recognized month. Value: `%s`.",e));return t}var Ce=[0,90,181,273],Re=[0,91,182,274];var Pe=/^(?:\d+d)?(?:\d+h)?(?:\d+m)?(?:\d+s)?(?:\d+ms)?$/i;var Ue={1:744,2:672,3:744,4:720,5:744,6:720,7:744,8:744,9:720,10:744,11:720,12:744,jan:744,january:744,feb:672,february:672,mar:744,march:744,apr:720,april:720,may:744,jun:720,june:720,jul:744,july:744,aug:744,august:744,sep:720,september:720,oct:744,october:744,nov:720,november:720,dec:744,december:744};function $e(e){return(e+je(e/4)-je(e/100)+je(e/400))%7}var ze={1:44640,2:40320,3:44640,4:43200,5:44640,6:43200,7:44640,8:44640,9:43200,10:44640,11:43200,12:44640,jan:44640,january:44640,feb:40320,february:40320,mar:44640,march:44640,apr:43200,april:43200,may:44640,jun:43200,june:43200,jul:44640,july:44640,aug:44640,august:44640,sep:43200,september:43200,oct:44640,october:44640,nov:43200,november:43200,dec:44640,december:44640};var We=525600,Be=527040;function Ge(e){return Se(e)&&e>=0}function He(e){return Ie(e)&&e.valueOf()>=0}function Ze(e){return Ge(e)||He(e)}le(Ze,"isPrimitive",Ge),le(Ze,"isObject",He);var Ke=/./;function Xe(e){return"boolean"==typeof e}var qe=Boolean,Qe=Boolean.prototype.toString;var Je=Q();function er(e){return"object"==typeof e&&(e instanceof qe||(Je?function(e){try{return Qe.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===ie(e)))}function rr(e){return Xe(e)||er(e)}function tr(){return new Function("return this;")()}le(rr,"isPrimitive",Xe),le(rr,"isObject",er);var nr="object"==typeof self?self:null,ir="object"==typeof window?window:null,ar="object"==typeof globalThis?globalThis:null;var or=function(e){if(arguments.length){if(!Xe(e))throw new TypeError(F("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return tr()}if(ar)return ar;if(nr)return nr;if(ir)return ir;throw new Error("unexpected error. Unable to resolve global object.")}(),ur=or.document&&or.document.childNodes,lr=Int8Array;function sr(){return/^\s*function\s*([^(]*)/i}var cr,fr=/^\s*function\s*([^(]*)/i;le(sr,"REGEXP",fr),cr=Array.isArray?Array.isArray:function(e){return"[object Array]"===ie(e)};var gr=cr;function pr(e){return null!==e&&"object"==typeof e}var hr=function(e){if("function"!=typeof e)throw new TypeError(F("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!gr(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(pr);function mr(e){var r,t,n,i;if(("Object"===(t=ie(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=fr.exec(n.toString()))return r[1]}return pr(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}le(pr,"isObjectLikeArray",hr);var dr="function"==typeof Ke||"object"==typeof lr||"function"==typeof ur?function(e){return mr(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?mr(e).toLowerCase():r};var vr,wr=(vr=Date.now,"function"===dr(vr)),br=Math.round;var yr=wr?function(){return 0|br(Date.now()/1e3)}:function(){var e;return e=new Date,0|br(e.getTime()/1e3)},Er={1:2678400,2:2419200,3:2678400,4:2592e3,5:2678400,6:2592e3,7:2678400,8:2678400,9:2592e3,10:2678400,11:2592e3,12:2678400,jan:2678400,january:2678400,feb:2419200,february:2419200,mar:2678400,march:2678400,apr:2592e3,april:2592e3,may:2678400,jun:2592e3,june:2592e3,jul:2678400,july:2678400,aug:2678400,august:2678400,sep:2592e3,september:2592e3,oct:2678400,october:2678400,nov:2592e3,november:2592e3,dec:2678400,december:2678400};var jr=31536e3,Tr=31622400;function _r(e){if(e.__esModule)return e;var r=e.default;if("function"==typeof r){var t=function e(){if(this instanceof e){var t=[null];t.push.apply(t,arguments);var n=Function.bind.apply(r,t);return new n}return r.apply(this,arguments)};t.prototype=r.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(e).forEach((function(r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})})),t}var Sr="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};function Ir(){throw new Error("setTimeout has not been defined")}function Vr(){throw new Error("clearTimeout has not been defined")}var Mr=Ir,Dr=Vr;function Nr(e){if(Mr===setTimeout)return setTimeout(e,0);if((Mr===Ir||!Mr)&&setTimeout)return Mr=setTimeout,setTimeout(e,0);try{return Mr(e,0)}catch(r){try{return Mr.call(null,e,0)}catch(r){return Mr.call(this,e,0)}}}"function"==typeof Sr.setTimeout&&(Mr=setTimeout),"function"==typeof Sr.clearTimeout&&(Dr=clearTimeout);var Or,Fr=[],Yr=!1,Ar=-1;function kr(){Yr&&Or&&(Yr=!1,Or.length?Fr=Or.concat(Fr):Ar=-1,Fr.length&&xr())}function xr(){if(!Yr){var e=Nr(kr);Yr=!0;for(var r=Fr.length;r;){for(Or=Fr,Fr=[];++Ar<r;)Or&&Or[Ar].run();Ar=-1,r=Fr.length}Or=null,Yr=!1,function(e){if(Dr===clearTimeout)return clearTimeout(e);if((Dr===Vr||!Dr)&&clearTimeout)return Dr=clearTimeout,clearTimeout(e);try{Dr(e)}catch(r){try{return Dr.call(null,e)}catch(r){return Dr.call(this,e)}}}(e)}}function Lr(e){var r=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)r[t-1]=arguments[t];Fr.push(new Cr(e,r)),1!==Fr.length||Yr||Nr(xr)}function Cr(e,r){this.fun=e,this.array=r}Cr.prototype.run=function(){this.fun.apply(null,this.array)};var Rr="browser",Pr="browser",Ur={},$r=[],zr={},Wr={},Br={};function Gr(){}var Hr=Gr,Zr=Gr,Kr=Gr,Xr=Gr,qr=Gr,Qr=Gr,Jr=Gr;function et(e){throw new Error("process.binding is not supported")}function rt(){return"/"}function tt(e){throw new Error("process.chdir is not supported")}function nt(){return 0}var it=Sr.performance||{},at=it.now||it.mozNow||it.msNow||it.oNow||it.webkitNow||function(){return(new Date).getTime()};function ot(e){var r=.001*at.call(it),t=Math.floor(r),n=Math.floor(r%1*1e9);return e&&(t-=e[0],(n-=e[1])<0&&(t--,n+=1e9)),[t,n]}var ut=new Date;function lt(){return(new Date-ut)/1e3}var st={nextTick:Lr,title:Rr,browser:true,env:Ur,argv:$r,version:"",versions:zr,on:Hr,addListener:Zr,once:Kr,off:Xr,removeListener:qr,removeAllListeners:Qr,emit:Jr,binding:et,cwd:rt,chdir:tt,umask:nt,hrtime:ot,platform:Pr,release:Wr,config:Br,uptime:lt},ct=_r(Object.freeze({__proto__:null,addListener:Zr,argv:$r,binding:et,browser:true,chdir:tt,config:Br,cwd:rt,default:st,emit:Jr,env:Ur,hrtime:ot,nextTick:Lr,off:Xr,on:Hr,once:Kr,platform:Pr,release:Wr,removeAllListeners:Qr,removeListener:qr,title:Rr,umask:nt,uptime:lt,version:"",versions:zr}));function ft(){return ct.hrtime()}function gt(e){if("function"!=typeof e)throw new TypeError(F("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!function(e){return null!=e&&"function"!=typeof e&&"number"==typeof e.length&&Te(e.length)&&e.length>=0&&e.length<=4294967295}(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}var pt=gt(Ze.isPrimitive),ht=gt(Ze.isObject),mt=gt(Ze);le(mt,"primitives",pt),le(mt,"objects",ht);var dt={};return U(dt,"constants",W),U(dt,"base",K),U(dt,"currentYear",X),U(dt,"dayOfQuarter",(function(e,r,t){var n,i,a,o;if(0===arguments.length)a=Le(n=new Date),o=ke(n),i=n.getFullYear();else if(1===arguments.length){if(!ue(e))throw new TypeError(F("invalid argument. If only providing a single argument, must provide a Date object. Value: `%s`.",e));a=Le(n=e),o=ke(n),i=n.getFullYear()}else{if(!se(e)&&!Se(e))throw new TypeError(F("invalid argument. First argument must be either a string or integer. Value: `%s`.",e));if(!Se(r))throw new TypeError(F("invalid argument. Second argument must be an integer. Value: `%s`.",r));if(!Se(t))throw new TypeError(F("invalid argument. Third argument must be an integer. Value: `%s`.",t));a=Le(e),o=ke(e,r,t),i=t}return Ne(i)?o-Re[a-1]:o-Ce[a-1]})),U(dt,"dayOfYear",ke),U(dt,"daysInMonth",Fe),U(dt,"daysInYear",(function(e){var r;if(arguments.length)if(ue(e))r=e.getFullYear();else{if(!Se(e))throw new TypeError(F("invalid argument. Must provide either an integer or a Date object. Value: `%s`.",e));r=e}else r=X();return Ne(r)?366:365})),U(dt,"duration2ms",(function(e){var r,t,n;if(!se(n=e)||!Pe.test(n))throw new TypeError(F("invalid argument. Must provide a valid duration string. Value: `%s`.",e));return t=864e5*(r=Z(e)).days,t+=36e5*r.hours,t+=6e4*r.minutes,t+=1e3*r.seconds,t+=r.milliseconds})),U(dt,"hoursInMonth",(function(e,r){var t,n,i,a;if(0===arguments.length)n=(a=new Date).getMonth()+1,i=a.getFullYear();else if(1===arguments.length)if(ue(e))n=(a=e).getMonth()+1,i=a.getFullYear();else{if(!se(e)&&!Se(e))throw new TypeError(F("invalid argument. First argument must be either a string, integer, or Date object. Value: `%s`.",e));i=X(),n=e}else{if(!se(e)&&!Se(e))throw new TypeError(F("invalid argument. First argument must be either a string or integer. Value: `%s`.",e));if(!Se(r))throw new TypeError(F("invalid argument. Second argument must be an integer. Value: `%s`.",r));n=e,i=r}if(Se(n)&&(n<1||n>12))throw new RangeError(F("invalid argument. An integer month value must be on the interval: [1, 12]. Value: `%s`.",n));if(n=Me(n.toString()),void 0===(t=Ue[n]))throw new Error(F("invalid argument. Must provide a recognized month. Value: `%s`.",n));return 672===t&&Ne(i)&&(t+=24),t})),U(dt,"hoursInYear",(function(e){var r;if(arguments.length)if(ue(e))r=e.getFullYear();else{if(!Se(e))throw new TypeError(F("invalid argument. Must provide either an integer or a Date object. Value: `%s`.",e));r=e}else r=X();return Ne(r)?8784:8760})),U(dt,"isoWeeksInYear",(function(e){var r;if(arguments.length)if(ue(e))r=e.getFullYear();else{if(!Se(e))throw new TypeError(F("invalid argument. Must provide either an integer or a Date object. Value: `%s`.",e));r=e}else r=X();return 4===$e(r)||3===$e(r-1)?53:52})),U(dt,"minutesInMonth",(function(e,r){var t,n,i,a;if(0===arguments.length)n=(a=new Date).getMonth()+1,i=a.getFullYear();else if(1===arguments.length)if(ue(e))n=(a=e).getMonth()+1,i=a.getFullYear();else{if(!se(e)&&!Se(e))throw new TypeError(F("invalid argument. First argument must be either a string, integer, or Date object. Value: `%s`.",e));i=X(),n=e}else{if(!se(e)&&!Se(e))throw new TypeError(F("invalid argument. First argument must be either a string or integer. Value: `%s`.",e));if(!Se(r))throw new TypeError(F("invalid argument. Second argument must be an integer. Value: `%s`.",r));n=e,i=r}if(Se(n)&&(n<1||n>12))throw new RangeError(F("invalid argument. An integer month value must be on the interval: [1, 12]. Value: `%s`.",n));if(n=Me(n.toString()),void 0===(t=ze[n]))throw new Error(F("invalid argument. Must provide a recognized month. Value: `%s`.",n));return 40320===t&&Ne(i)&&(t+=$),t})),U(dt,"minutesInYear",(function(e){var r;if(arguments.length)if(ue(e))r=e.getFullYear();else{if(!Se(e))throw new TypeError(F("invalid argument. Must provide either an integer or a Date object. Value: `%s`.",e));r=e}else r=X();return Ne(r)?Be:We})),U(dt,"ms2duration",(function(e){var r;if(!Ge(e))throw new TypeError(F("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));return 0===e?"0ms":(r="",e>=864e5&&(r+=je(e/864e5)+"d",e%=864e5),e>=36e5&&(r+=je(e/36e5)+"h",e%=36e5),e>=6e4&&(r+=je(e/6e4)+"m",e%=6e4),e>=1e3&&(r+=je(e/1e3)+"s",e%=1e3),e>0&&(r+=e+"ms"),r)})),U(dt,"now",yr),U(dt,"quarterOfYear",Le),U(dt,"secondsInMonth",(function(e,r){var t,n,i,a;if(0===arguments.length)n=(a=new Date).getMonth()+1,i=a.getFullYear();else if(1===arguments.length)if(ue(e))n=(a=e).getMonth()+1,i=a.getFullYear();else{if(!se(e)&&!Se(e))throw new TypeError(F("invalid argument. First argument must be either a string, integer, or Date object. Value: `%s`.",e));i=X(),n=e}else{if(!se(e)&&!Se(e))throw new TypeError(F("invalid argument. First argument must be either a string or integer. Value: `%s`.",e));if(!Se(r))throw new TypeError(F("invalid argument. Second argument must be an integer. Value: `%s`.",r));n=e,i=r}if(Se(n)&&(n<1||n>12))throw new RangeError(F("invalid argument. An integer month value must be on the interval: [1, 12]. Value: `%s`.",n));if(n=Me(n.toString()),void 0===(t=Er[n]))throw new Error(F("invalid argument. Must provide a recognized month. Value: `%s`.",n));return 2419200===t&&Ne(i)&&(t+=z),t})),U(dt,"secondsInYear",(function(e){var r;if(arguments.length)if(ue(e))r=e.getFullYear();else{if(!Se(e))throw new TypeError(F("invalid argument. Must provide either an integer or a Date object. Value: `%s`.",e));r=e}else r=X();return Ne(r)?Tr:jr})),U(dt,"tic",ft),U(dt,"toc",(function(e){var r,t,n=ft();if(!pt(e))throw new TypeError(F("invalid argument. Must provide an array of nonnegative integers. Value: `%s`.",e));if(2!==e.length)throw new RangeError(F("invalid argument. Input array must contain two elements. Value: `%s`.",e));return r=n[0]-e[0],t=n[1]-e[1],r>0&&t<0?(r-=1,t+=1e9):r<0&&t>0&&(r+=1,t-=1e9),[r,t]})),dt}));
//# sourceMappingURL=browser.js.map
