"use strict";var a=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var L=a(function(Kt,R){
var Ye=require('@stdlib/string/base/lowercase/dist'),F=/(\d+)([a-z]+)/gi,Ee={d:"days",h:"hours",m:"minutes",s:"seconds",ms:"milliseconds"};function ye(r){var e,t,i;if(t={days:0,hours:0,minutes:0,seconds:0,milliseconds:0},r.length===0)return t;for(r=Ye(r),e=F.exec(r);e;)i=Ee[e[2]],i&&(t[i]=parseInt(e[1],10)),e=F.exec(r);return t}R.exports=ye
});var I=a(function(Xt,H){
var je=L();H.exports=je
});var Q=a(function(Zt,z){
var Ie=require('@stdlib/utils/define-read-only-property/dist'),U={};Ie(U,"parseDuration",I());z.exports=U
});var C=a(function($t,k){
function De(){return new Date().getFullYear()}k.exports=De
});var g=a(function(ra,W){
var xe=C();W.exports=xe
});var G=a(function(ea,Me){Me.exports={"1":31,jan:31,january:31,"2":28,feb:28,february:28,"3":31,mar:31,march:31,"4":30,apr:30,april:30,"5":31,may:31,"6":30,jun:30,june:30,"7":31,jul:31,july:31,"8":31,aug:31,august:31,"9":30,sep:30,september:30,"10":31,oct:31,october:31,"11":30,nov:30,november:30,"12":31,dec:31,december:31}});var K=a(function(ia,J){
var Te=require('@stdlib/assert/is-date-object/dist'),B=require('@stdlib/assert/is-string/dist').isPrimitive,b=require('@stdlib/assert/is-integer/dist').isPrimitive,Ve=require('@stdlib/string/lowercase/dist'),Oe=require('@stdlib/assert/is-leap-year/dist'),f=require('@stdlib/string/format/dist'),Ae=g(),Se=G();function Ne(r,e){var t,i,u,n;if(arguments.length===0)n=new Date,i=n.getMonth()+1,u=n.getFullYear();else if(arguments.length===1)if(Te(r))n=r,i=n.getMonth()+1,u=n.getFullYear();else if(B(r)||b(r))u=Ae(),i=r;else throw new TypeError(f('1QRAZ',r));else{if(!B(r)&&!b(r))throw new TypeError(f('1QRAX',r));if(!b(e))throw new TypeError(f('1QR7f',e));i=r,u=e}if(b(i)&&(i<1||i>12))throw new RangeError(f('1QRAa',i));if(i=Ve(i.toString()),t=Se[i],t===void 0)throw new Error(f('1QRAb',i));return t===28&&Oe(u)&&(t+=1),t}J.exports=Ne
});var D=a(function(ta,X){
var _e=K();X.exports=_e
});var Z=a(function(aa,Pe){Pe.exports={"1":1,jan:1,january:1,"2":2,feb:2,february:2,"3":3,mar:3,march:3,"4":4,apr:4,april:4,"5":5,may:5,"6":6,jun:6,june:6,"7":7,jul:7,july:7,"8":8,aug:8,august:8,"9":9,sep:9,september:9,"10":10,oct:10,october:10,"11":11,nov:11,november:11,"12":12,dec:12,december:12}});var $=a(function(na,Fe){Fe.exports=[31,28,31,30,31,30,31,31,30,31,30,31]});var er=a(function(ua,rr){
var Re=require('@stdlib/assert/is-date-object/dist'),Le=require('@stdlib/assert/is-string/dist').isPrimitive,x=require('@stdlib/assert/is-integer/dist').isPrimitive,He=D(),Ue=require('@stdlib/assert/is-leap-year/dist'),ze=require('@stdlib/string/lowercase/dist'),q=require('@stdlib/string/format/dist'),Qe=Z(),ke=$();function Ce(r,e,t){var i,u,n,v,c,l,m;if(arguments.length===0)i=new Date,v=i.getMonth()+1,c=i.getFullYear(),l=i.getDate();else if(arguments.length===1)if(Re(r))i=r,v=i.getMonth()+1,c=i.getFullYear(),l=i.getDate();else throw new TypeError(q('1QRAW',r));else{if(!Le(r)&&!x(r))throw new TypeError(q('1QRAX',r));if(!x(e))throw new TypeError(q('1QR7f',e));if(!x(t))throw new TypeError(q('1QR2z',t));v=r,l=e,c=t}if(u=He(v,c),l<1||l>u)throw new RangeError(q('1QRDz',u,l));for(v=ze(v.toString()),v=Qe[v],n=0,m=0;m<v-1;m++)n+=ke[m],m===1&&Ue(c)&&(n+=1);return n+=l,n}rr.exports=Ce
});var M=a(function(sa,ir){
var We=er();ir.exports=We
});var tr=a(function(oa,Ge){Ge.exports={"1":1,jan:1,january:1,"2":1,feb:1,february:1,"3":1,mar:1,march:1,"4":2,apr:2,april:2,"5":2,may:2,"6":2,jun:2,june:2,"7":3,jul:3,july:3,"8":3,aug:3,august:3,"9":3,sep:3,september:3,"10":4,oct:4,october:4,"11":4,nov:4,november:4,"12":4,dec:4,december:4}});var ur=a(function(va,nr){
var Be=require('@stdlib/assert/is-date-object/dist'),Je=require('@stdlib/assert/is-string/dist').isPrimitive,ar=require('@stdlib/assert/is-integer/dist').isPrimitive,Ke=require('@stdlib/string/lowercase/dist'),T=require('@stdlib/string/format/dist'),Xe=tr();function Ze(r){var e,t;if(arguments.length)if(Be(r))e=r.getMonth()+1;else if(Je(r)||ar(r))e=r;else throw new TypeError(T('1QRAd',r));else e=new Date().getMonth()+1;if(ar(e)&&(e<1||e>12))throw new RangeError(T('1QRAa',e));if(e=Ke(e.toString()),t=Xe[e],t===void 0)throw new Error(T('1QRAb',r));return t}nr.exports=Ze
});var V=a(function(ga,sr){
var $e=ur();sr.exports=$e
});var vr=a(function(la,or){
var ri=require('@stdlib/assert/is-date-object/dist'),ei=require('@stdlib/assert/is-string/dist').isPrimitive,O=require('@stdlib/assert/is-integer/dist').isPrimitive,A=M(),S=V(),ii=require('@stdlib/assert/is-leap-year/dist'),h=require('@stdlib/string/format/dist'),ti=[0,90,181,273],ai=[0,91,182,274];function ni(r,e,t){var i,u,n,v;if(arguments.length===0)i=new Date,n=S(i),v=A(i),u=i.getFullYear();else if(arguments.length===1)if(ri(r))i=r,n=S(i),v=A(i),u=i.getFullYear();else throw new TypeError(h('1QRAW',r));else{if(!ei(r)&&!O(r))throw new TypeError(h('1QRAX',r));if(!O(e))throw new TypeError(h('1QR7f',e));if(!O(t))throw new TypeError(h('1QR2z',t));n=S(r),v=A(r,e,t),u=t}return ii(u)?v-ai[n-1]:v-ti[n-1]}or.exports=ni
});var lr=a(function(ca,gr){
var ui=vr();gr.exports=ui
});var mr=a(function(ma,cr){
var si=require('@stdlib/assert/is-date-object/dist'),oi=require('@stdlib/assert/is-integer/dist').isPrimitive,vi=require('@stdlib/assert/is-leap-year/dist'),gi=require('@stdlib/string/format/dist'),li=g(),ci=365,mi=366;function fi(r){var e;if(arguments.length)if(si(r))e=r.getFullYear();else if(oi(r))e=r;else throw new TypeError(gi('1QRDx',r));else e=li();return vi(e)?mi:ci}cr.exports=fi
});var qr=a(function(fa,fr){
var qi=mr();fr.exports=qi
});var pr=a(function(qa,dr){
var di=require('@stdlib/assert/is-duration-string/dist'),pi=I(),wi=require('@stdlib/string/format/dist');function bi(r){var e,t;if(!di(r))throw new TypeError(wi('1QRDy',r));return e=pi(r),t=e.days*864e5,t+=e.hours*36e5,t+=e.minutes*6e4,t+=e.seconds*1e3,t+=e.milliseconds,t}dr.exports=bi
});var br=a(function(da,wr){
var hi=pr();wr.exports=hi
});var hr=a(function(pa,Yi){Yi.exports={"1":744,jan:744,january:744,"2":672,feb:672,february:672,"3":744,mar:744,march:744,"4":720,apr:720,april:720,"5":744,may:744,"6":720,jun:720,june:720,"7":744,jul:744,july:744,"8":744,aug:744,august:744,"9":720,sep:720,september:720,"10":744,oct:744,october:744,"11":720,nov:720,november:720,"12":744,dec:744,december:744}});var yr=a(function(wa,Er){
var Ei=require('@stdlib/assert/is-date-object/dist'),Yr=require('@stdlib/assert/is-string/dist').isPrimitive,Y=require('@stdlib/assert/is-integer/dist').isPrimitive,yi=require('@stdlib/string/lowercase/dist'),ji=require('@stdlib/assert/is-leap-year/dist'),d=require('@stdlib/string/format/dist'),Ii=require('@stdlib/constants/time/hours-in-day/dist'),Di=g(),xi=hr();function Mi(r,e){var t,i,u,n;if(arguments.length===0)n=new Date,i=n.getMonth()+1,u=n.getFullYear();else if(arguments.length===1)if(Ei(r))n=r,i=n.getMonth()+1,u=n.getFullYear();else if(Yr(r)||Y(r))u=Di(),i=r;else throw new TypeError(d('1QRAZ',r));else{if(!Yr(r)&&!Y(r))throw new TypeError(d('1QRAX',r));if(!Y(e))throw new TypeError(d('1QR7f',e));i=r,u=e}if(Y(i)&&(i<1||i>12))throw new RangeError(d('1QRAa',i));if(i=yi(i.toString()),t=xi[i],t===void 0)throw new Error(d('1QRAb',i));return t===672&&ji(u)&&(t+=Ii),t}Er.exports=Mi
});var Ir=a(function(ba,jr){
var Ti=yr();jr.exports=Ti
});var xr=a(function(ha,Dr){
var Vi=require('@stdlib/assert/is-date-object/dist'),Oi=require('@stdlib/assert/is-integer/dist').isPrimitive,Ai=require('@stdlib/assert/is-leap-year/dist'),Si=require('@stdlib/string/format/dist'),Ni=g(),_i=8760,Pi=8784;function Fi(r){var e;if(arguments.length)if(Vi(r))e=r.getFullYear();else if(Oi(r))e=r;else throw new TypeError(Si('1QRDx',r));else e=Ni();return Ai(e)?Pi:_i}Dr.exports=Fi
});var Tr=a(function(Ya,Mr){
var Ri=xr();Mr.exports=Ri
});var Ar=a(function(Ea,Or){
var Li=require('@stdlib/assert/is-date-object/dist'),Hi=require('@stdlib/assert/is-integer/dist').isPrimitive,Ui=require('@stdlib/string/format/dist'),N=require('@stdlib/math/base/special/floor/dist'),zi=g(),Qi=52,ki=53;function Vr(r){var e=r+N(r/4)-N(r/100)+N(r/400);return e%7}function Ci(r){var e;if(arguments.length)if(Li(r))e=r.getFullYear();else if(Hi(r))e=r;else throw new TypeError(Ui('1QRDx',r));else e=zi();return Vr(e)===4||Vr(e-1)===3?ki:Qi}Or.exports=Ci
});var Nr=a(function(ya,Sr){
var Wi=Ar();Sr.exports=Wi
});var _r=a(function(ja,Gi){Gi.exports={"1":44640,jan:44640,january:44640,"2":40320,feb:40320,february:40320,"3":44640,mar:44640,march:44640,"4":43200,apr:43200,april:43200,"5":44640,may:44640,"6":43200,jun:43200,june:43200,"7":44640,jul:44640,july:44640,"8":44640,aug:44640,august:44640,"9":43200,sep:43200,september:43200,"10":44640,oct:44640,october:44640,"11":43200,nov:43200,november:43200,"12":44640,dec:44640,december:44640}});var Rr=a(function(Ia,Fr){
var Bi=require('@stdlib/assert/is-date-object/dist'),Pr=require('@stdlib/assert/is-string/dist').isPrimitive,E=require('@stdlib/assert/is-integer/dist').isPrimitive,Ji=require('@stdlib/string/lowercase/dist'),Ki=require('@stdlib/assert/is-leap-year/dist'),p=require('@stdlib/string/format/dist'),Xi=require('@stdlib/constants/time/minutes-in-day/dist'),Zi=g(),$i=_r();function rt(r,e){var t,i,u,n;if(arguments.length===0)n=new Date,i=n.getMonth()+1,u=n.getFullYear();else if(arguments.length===1)if(Bi(r))n=r,i=n.getMonth()+1,u=n.getFullYear();else if(Pr(r)||E(r))u=Zi(),i=r;else throw new TypeError(p('1QRAZ',r));else{if(!Pr(r)&&!E(r))throw new TypeError(p('1QRAX',r));if(!E(e))throw new TypeError(p('1QR7f',e));i=r,u=e}if(E(i)&&(i<1||i>12))throw new RangeError(p('1QRAa',i));if(i=Ji(i.toString()),t=$i[i],t===void 0)throw new Error(p('1QRAb',i));return t===40320&&Ki(u)&&(t+=Xi),t}Fr.exports=rt
});var Hr=a(function(Da,Lr){
var et=Rr();Lr.exports=et
});var zr=a(function(xa,Ur){
var it=require('@stdlib/assert/is-date-object/dist'),tt=require('@stdlib/assert/is-integer/dist').isPrimitive,at=require('@stdlib/assert/is-leap-year/dist'),nt=g(),ut=require('@stdlib/string/format/dist'),st=525600,ot=527040;function vt(r){var e;if(arguments.length)if(it(r))e=r.getFullYear();else if(tt(r))e=r;else throw new TypeError(ut('1QRDx',r));else e=nt();return at(e)?ot:st}Ur.exports=vt
});var kr=a(function(Ma,Qr){
var gt=zr();Qr.exports=gt
});var Wr=a(function(Ta,Cr){
var lt=require('@stdlib/assert/is-nonnegative-integer/dist').isPrimitive,y=require('@stdlib/math/base/special/floor/dist'),ct=require('@stdlib/string/format/dist');function mt(r){var e;if(!lt(r))throw new TypeError(ct('1QR2K',r));return r===0?"0ms":(e="",r>=864e5&&(e+=y(r/864e5)+"d",r%=864e5),r>=36e5&&(e+=y(r/36e5)+"h",r%=36e5),r>=6e4&&(e+=y(r/6e4)+"m",r%=6e4),r>=1e3&&(e+=y(r/1e3)+"s",r%=1e3),r>0&&(e+=r+"ms"),e)}Cr.exports=mt
});var Br=a(function(Va,Gr){
var ft=Wr();Gr.exports=ft
});var Kr=a(function(Oa,Jr){
var qt=require('@stdlib/assert/is-function/dist'),dt=qt(Date.now);Jr.exports=dt
});var Zr=a(function(Aa,Xr){
var pt=require('@stdlib/math/base/special/round/dist');function wt(){var r=pt(Date.now()/1e3);return r|0}Xr.exports=wt
});var re=a(function(Sa,$r){
var bt=require('@stdlib/math/base/special/round/dist');function ht(){var r,e;return e=new Date,r=bt(e.getTime()/1e3),r|0}$r.exports=ht
});var ie=a(function(Na,ee){
var Yt=Kr(),Et=Zr(),yt=re(),_;Yt?_=Et:_=yt;ee.exports=_
});var te=a(function(_a,jt){jt.exports={"1":2678400,jan:2678400,january:2678400,"2":2419200,feb:2419200,february:2419200,"3":2678400,mar:2678400,march:2678400,"4":2592e3,apr:2592e3,april:2592e3,"5":2678400,may:2678400,"6":2592e3,jun:2592e3,june:2592e3,"7":2678400,jul:2678400,july:2678400,"8":2678400,aug:2678400,august:2678400,"9":2592e3,sep:2592e3,september:2592e3,"10":2678400,oct:2678400,october:2678400,"11":2592e3,nov:2592e3,november:2592e3,"12":2678400,dec:2678400,december:2678400}});var ue=a(function(Pa,ne){
var It=require('@stdlib/assert/is-date-object/dist'),ae=require('@stdlib/assert/is-string/dist').isPrimitive,j=require('@stdlib/assert/is-integer/dist').isPrimitive,Dt=require('@stdlib/string/lowercase/dist'),xt=require('@stdlib/assert/is-leap-year/dist'),Mt=g(),w=require('@stdlib/string/format/dist'),Tt=require('@stdlib/constants/time/seconds-in-day/dist'),Vt=te();function Ot(r,e){var t,i,u,n;if(arguments.length===0)n=new Date,i=n.getMonth()+1,u=n.getFullYear();else if(arguments.length===1)if(It(r))n=r,i=n.getMonth()+1,u=n.getFullYear();else if(ae(r)||j(r))u=Mt(),i=r;else throw new TypeError(w('1QRAZ',r));else{if(!ae(r)&&!j(r))throw new TypeError(w('1QRAX',r));if(!j(e))throw new TypeError(w('1QR7f',e));i=r,u=e}if(j(i)&&(i<1||i>12))throw new RangeError(w('1QRAa',i));if(i=Dt(i.toString()),t=Vt[i],t===void 0)throw new Error(w('1QRAb',i));return t===2419200&&xt(u)&&(t+=Tt),t}ne.exports=Ot
});var oe=a(function(Fa,se){
var At=ue();se.exports=At
});var ge=a(function(Ra,ve){
var St=require('@stdlib/assert/is-date-object/dist'),Nt=require('@stdlib/assert/is-integer/dist').isPrimitive,_t=require('@stdlib/assert/is-leap-year/dist'),Pt=g(),Ft=require('@stdlib/string/format/dist'),Rt=31536e3,Lt=31622400;function Ht(r){var e;if(arguments.length)if(St(r))e=r.getFullYear();else if(Nt(r))e=r;else throw new TypeError(Ft('1QRDx',r));else e=Pt();return _t(e)?Lt:Rt}ve.exports=Ht
});var ce=a(function(La,le){
var Ut=ge();le.exports=Ut
});var fe=a(function(Ha,me){
var zt=require("process");function Qt(){return zt.hrtime()}me.exports=Qt
});var P=a(function(Ua,qe){
var kt=fe();qe.exports=kt
});var we=a(function(za,pe){
var Ct=require('@stdlib/assert/is-nonnegative-integer-array/dist').primitives,de=require('@stdlib/string/format/dist'),Wt=P();function Gt(r){var e=Wt(),t,i;if(!Ct(r))throw new TypeError(de('1QRAe',r));if(r.length!==2)throw new RangeError(de('1QRAf',r));return t=e[0]-r[0],i=e[1]-r[1],t>0&&i<0?(t-=1,i+=1e9):t<0&&i>0&&(t+=1,i-=1e9),[t,i]}pe.exports=Gt
});var he=a(function(Qa,be){
var Bt=we();be.exports=Bt
});var o=require('@stdlib/utils/define-read-only-property/dist'),s={};o(s,"constants",require('@stdlib/constants/time/dist'));o(s,"base",Q());o(s,"currentYear",g());o(s,"dayOfQuarter",lr());o(s,"dayOfYear",M());o(s,"daysInMonth",D());o(s,"daysInYear",qr());o(s,"duration2ms",br());o(s,"hoursInMonth",Ir());o(s,"hoursInYear",Tr());o(s,"isoWeeksInYear",Nr());o(s,"minutesInMonth",Hr());o(s,"minutesInYear",kr());o(s,"ms2duration",Br());o(s,"now",ie());o(s,"quarterOfYear",V());o(s,"secondsInMonth",oe());o(s,"secondsInYear",ce());o(s,"tic",P());o(s,"toc",he());module.exports=s;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
