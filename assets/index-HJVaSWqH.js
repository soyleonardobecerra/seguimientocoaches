(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();function fv(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var dv={exports:{}},Ic={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kw=Symbol.for("react.transitional.element"),Lw=Symbol.for("react.fragment");function mv(e,t,n){var i=null;if(n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),"key"in t){n={};for(var s in t)s!=="key"&&(n[s]=t[s])}else n=t;return t=n.ref,{$$typeof:kw,type:e,key:i,ref:t!==void 0?t:null,props:n}}Ic.Fragment=Lw;Ic.jsx=mv;Ic.jsxs=mv;dv.exports=Ic;var y=dv.exports,pv={exports:{}},W={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sm=Symbol.for("react.transitional.element"),Uw=Symbol.for("react.portal"),Pw=Symbol.for("react.fragment"),jw=Symbol.for("react.strict_mode"),zw=Symbol.for("react.profiler"),Bw=Symbol.for("react.consumer"),qw=Symbol.for("react.context"),Hw=Symbol.for("react.forward_ref"),Fw=Symbol.for("react.suspense"),Gw=Symbol.for("react.memo"),gv=Symbol.for("react.lazy"),Kw=Symbol.for("react.activity"),Yg=Symbol.iterator;function Qw(e){return e===null||typeof e!="object"?null:(e=Yg&&e[Yg]||e["@@iterator"],typeof e=="function"?e:null)}var yv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_v=Object.assign,vv={};function ha(e,t,n){this.props=e,this.context=t,this.refs=vv,this.updater=n||yv}ha.prototype.isReactComponent={};ha.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ha.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Tv(){}Tv.prototype=ha.prototype;function rm(e,t,n){this.props=e,this.context=t,this.refs=vv,this.updater=n||yv}var am=rm.prototype=new Tv;am.constructor=rm;_v(am,ha.prototype);am.isPureReactComponent=!0;var Xg=Array.isArray;function kf(){}var Dt={H:null,A:null,T:null,S:null},Ev=Object.prototype.hasOwnProperty;function om(e,t,n){var i=n.ref;return{$$typeof:sm,type:e,key:t,ref:i!==void 0?i:null,props:n}}function Yw(e,t){return om(e.type,t,e.props)}function lm(e){return typeof e=="object"&&e!==null&&e.$$typeof===sm}function Xw(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var $g=/\/+/g;function Mh(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Xw(""+e.key):t.toString(36)}function $w(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(kf,kf):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function dr(e,t,n,i,s){var r=typeof e;(r==="undefined"||r==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(r){case"bigint":case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case sm:case Uw:a=!0;break;case gv:return a=e._init,dr(a(e._payload),t,n,i,s)}}if(a)return s=s(e),a=i===""?"."+Mh(e,0):i,Xg(s)?(n="",a!=null&&(n=a.replace($g,"$&/")+"/"),dr(s,t,n,"",function(h){return h})):s!=null&&(lm(s)&&(s=Yw(s,n+(s.key==null||e&&e.key===s.key?"":(""+s.key).replace($g,"$&/")+"/")+a)),t.push(s)),1;a=0;var l=i===""?".":i+":";if(Xg(e))for(var u=0;u<e.length;u++)i=e[u],r=l+Mh(i,u),a+=dr(i,t,n,r,s);else if(u=Qw(e),typeof u=="function")for(e=u.call(e),u=0;!(i=e.next()).done;)i=i.value,r=l+Mh(i,u++),a+=dr(i,t,n,r,s);else if(r==="object"){if(typeof e.then=="function")return dr($w(e),t,n,i,s);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return a}function Vl(e,t,n){if(e==null)return e;var i=[],s=0;return dr(e,i,"","",function(r){return t.call(n,r,s++)}),i}function Jw(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Jg=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Zw={map:Vl,forEach:function(e,t,n){Vl(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Vl(e,function(){t++}),t},toArray:function(e){return Vl(e,function(t){return t})||[]},only:function(e){if(!lm(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};W.Activity=Kw;W.Children=Zw;W.Component=ha;W.Fragment=Pw;W.Profiler=zw;W.PureComponent=rm;W.StrictMode=jw;W.Suspense=Fw;W.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Dt;W.__COMPILER_RUNTIME={__proto__:null,c:function(e){return Dt.H.useMemoCache(e)}};W.cache=function(e){return function(){return e.apply(null,arguments)}};W.cacheSignal=function(){return null};W.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=_v({},e.props),s=e.key;if(t!=null)for(r in t.key!==void 0&&(s=""+t.key),t)!Ev.call(t,r)||r==="key"||r==="__self"||r==="__source"||r==="ref"&&t.ref===void 0||(i[r]=t[r]);var r=arguments.length-2;if(r===1)i.children=n;else if(1<r){for(var a=Array(r),l=0;l<r;l++)a[l]=arguments[l+2];i.children=a}return om(e.type,s,i)};W.createContext=function(e){return e={$$typeof:qw,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:Bw,_context:e},e};W.createElement=function(e,t,n){var i,s={},r=null;if(t!=null)for(i in t.key!==void 0&&(r=""+t.key),t)Ev.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(s[i]=t[i]);var a=arguments.length-2;if(a===1)s.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];s.children=l}if(e&&e.defaultProps)for(i in a=e.defaultProps,a)s[i]===void 0&&(s[i]=a[i]);return om(e,r,s)};W.createRef=function(){return{current:null}};W.forwardRef=function(e){return{$$typeof:Hw,render:e}};W.isValidElement=lm;W.lazy=function(e){return{$$typeof:gv,_payload:{_status:-1,_result:e},_init:Jw}};W.memo=function(e,t){return{$$typeof:Gw,type:e,compare:t===void 0?null:t}};W.startTransition=function(e){var t=Dt.T,n={};Dt.T=n;try{var i=e(),s=Dt.S;s!==null&&s(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(kf,Jg)}catch(r){Jg(r)}finally{t!==null&&n.types!==null&&(t.types=n.types),Dt.T=t}};W.unstable_useCacheRefresh=function(){return Dt.H.useCacheRefresh()};W.use=function(e){return Dt.H.use(e)};W.useActionState=function(e,t,n){return Dt.H.useActionState(e,t,n)};W.useCallback=function(e,t){return Dt.H.useCallback(e,t)};W.useContext=function(e){return Dt.H.useContext(e)};W.useDebugValue=function(){};W.useDeferredValue=function(e,t){return Dt.H.useDeferredValue(e,t)};W.useEffect=function(e,t){return Dt.H.useEffect(e,t)};W.useEffectEvent=function(e){return Dt.H.useEffectEvent(e)};W.useId=function(){return Dt.H.useId()};W.useImperativeHandle=function(e,t,n){return Dt.H.useImperativeHandle(e,t,n)};W.useInsertionEffect=function(e,t){return Dt.H.useInsertionEffect(e,t)};W.useLayoutEffect=function(e,t){return Dt.H.useLayoutEffect(e,t)};W.useMemo=function(e,t){return Dt.H.useMemo(e,t)};W.useOptimistic=function(e,t){return Dt.H.useOptimistic(e,t)};W.useReducer=function(e,t,n){return Dt.H.useReducer(e,t,n)};W.useRef=function(e){return Dt.H.useRef(e)};W.useState=function(e){return Dt.H.useState(e)};W.useSyncExternalStore=function(e,t,n){return Dt.H.useSyncExternalStore(e,t,n)};W.useTransition=function(){return Dt.H.useTransition()};W.version="19.2.5";pv.exports=W;var nt=pv.exports;const Ww=fv(nt);var bv={exports:{}},Rc={},Av={exports:{}},Sv={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(j,$){var Y=j.length;j.push($);t:for(;0<Y;){var vt=Y-1>>>1,kt=j[vt];if(0<s(kt,$))j[vt]=$,j[Y]=kt,Y=vt;else break t}}function n(j){return j.length===0?null:j[0]}function i(j){if(j.length===0)return null;var $=j[0],Y=j.pop();if(Y!==$){j[0]=Y;t:for(var vt=0,kt=j.length,Bn=kt>>>1;vt<Bn;){var qn=2*(vt+1)-1,pi=j[qn],Ne=qn+1,bn=j[Ne];if(0>s(pi,Y))Ne<kt&&0>s(bn,pi)?(j[vt]=bn,j[Ne]=Y,vt=Ne):(j[vt]=pi,j[qn]=Y,vt=qn);else if(Ne<kt&&0>s(bn,Y))j[vt]=bn,j[Ne]=Y,vt=Ne;else break t}}return $}function s(j,$){var Y=j.sortIndex-$.sortIndex;return Y!==0?Y:j.id-$.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var r=performance;e.unstable_now=function(){return r.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var u=[],h=[],d=1,m=null,p=3,v=!1,C=!1,M=!1,U=!1,S=typeof setTimeout=="function"?setTimeout:null,b=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;function D(j){for(var $=n(h);$!==null;){if($.callback===null)i(h);else if($.startTime<=j)i(h),$.sortIndex=$.expirationTime,t(u,$);else break;$=n(h)}}function B(j){if(M=!1,D(j),!C)if(n(u)!==null)C=!0,F||(F=!0,N());else{var $=n(h);$!==null&&Ce(B,$.startTime-j)}}var F=!1,T=-1,_=5,E=-1;function w(){return U?!0:!(e.unstable_now()-E<_)}function I(){if(U=!1,F){var j=e.unstable_now();E=j;var $=!0;try{t:{C=!1,M&&(M=!1,b(T),T=-1),v=!0;var Y=p;try{e:{for(D(j),m=n(u);m!==null&&!(m.expirationTime>j&&w());){var vt=m.callback;if(typeof vt=="function"){m.callback=null,p=m.priorityLevel;var kt=vt(m.expirationTime<=j);if(j=e.unstable_now(),typeof kt=="function"){m.callback=kt,D(j),$=!0;break e}m===n(u)&&i(u),D(j)}else i(u);m=n(u)}if(m!==null)$=!0;else{var Bn=n(h);Bn!==null&&Ce(B,Bn.startTime-j),$=!1}}break t}finally{m=null,p=Y,v=!1}$=void 0}}finally{$?N():F=!1}}}var N;if(typeof R=="function")N=function(){R(I)};else if(typeof MessageChannel<"u"){var A=new MessageChannel,Zt=A.port2;A.port1.onmessage=I,N=function(){Zt.postMessage(null)}}else N=function(){S(I,0)};function Ce(j,$){T=S(function(){j(e.unstable_now())},$)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(j){j.callback=null},e.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<j?Math.floor(1e3/j):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_next=function(j){switch(p){case 1:case 2:case 3:var $=3;break;default:$=p}var Y=p;p=$;try{return j()}finally{p=Y}},e.unstable_requestPaint=function(){U=!0},e.unstable_runWithPriority=function(j,$){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var Y=p;p=j;try{return $()}finally{p=Y}},e.unstable_scheduleCallback=function(j,$,Y){var vt=e.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?vt+Y:vt):Y=vt,j){case 1:var kt=-1;break;case 2:kt=250;break;case 5:kt=1073741823;break;case 4:kt=1e4;break;default:kt=5e3}return kt=Y+kt,j={id:d++,callback:$,priorityLevel:j,startTime:Y,expirationTime:kt,sortIndex:-1},Y>vt?(j.sortIndex=Y,t(h,j),n(u)===null&&j===n(h)&&(M?(b(T),T=-1):M=!0,Ce(B,Y-vt))):(j.sortIndex=kt,t(u,j),C||v||(C=!0,F||(F=!0,N()))),j},e.unstable_shouldYield=w,e.unstable_wrapCallback=function(j){var $=p;return function(){var Y=p;p=$;try{return j.apply(this,arguments)}finally{p=Y}}}})(Sv);Av.exports=Sv;var t1=Av.exports,wv={exports:{}},Re={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e1=nt;function Iv(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Ai(){}var we={d:{f:Ai,r:function(){throw Error(Iv(522))},D:Ai,C:Ai,L:Ai,m:Ai,X:Ai,S:Ai,M:Ai},p:0,findDOMNode:null},n1=Symbol.for("react.portal");function i1(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:n1,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}var lo=e1.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Cc(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}Re.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=we;Re.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(Iv(299));return i1(e,t,null,n)};Re.flushSync=function(e){var t=lo.T,n=we.p;try{if(lo.T=null,we.p=2,e)return e()}finally{lo.T=t,we.p=n,we.d.f()}};Re.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,we.d.C(e,t))};Re.prefetchDNS=function(e){typeof e=="string"&&we.d.D(e)};Re.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=Cc(n,t.crossOrigin),s=typeof t.integrity=="string"?t.integrity:void 0,r=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?we.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:s,fetchPriority:r}):n==="script"&&we.d.X(e,{crossOrigin:i,integrity:s,fetchPriority:r,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};Re.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=Cc(t.as,t.crossOrigin);we.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&we.d.M(e)};Re.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=Cc(n,t.crossOrigin);we.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};Re.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=Cc(t.as,t.crossOrigin);we.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else we.d.m(e)};Re.requestFormReset=function(e){we.d.r(e)};Re.unstable_batchedUpdates=function(e,t){return e(t)};Re.useFormState=function(e,t,n){return lo.H.useFormState(e,t,n)};Re.useFormStatus=function(){return lo.H.useHostTransitionStatus()};Re.version="19.2.5";function Rv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Rv)}catch(e){console.error(e)}}Rv(),wv.exports=Re;var s1=wv.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ie=t1,Cv=nt,r1=s1;function V(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Nv(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Jo(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function xv(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Dv(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Zg(e){if(Jo(e)!==e)throw Error(V(188))}function a1(e){var t=e.alternate;if(!t){if(t=Jo(e),t===null)throw Error(V(188));return t!==e?null:e}for(var n=e,i=t;;){var s=n.return;if(s===null)break;var r=s.alternate;if(r===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===r.child){for(r=s.child;r;){if(r===n)return Zg(s),e;if(r===i)return Zg(s),t;r=r.sibling}throw Error(V(188))}if(n.return!==i.return)n=s,i=r;else{for(var a=!1,l=s.child;l;){if(l===n){a=!0,n=s,i=r;break}if(l===i){a=!0,i=s,n=r;break}l=l.sibling}if(!a){for(l=r.child;l;){if(l===n){a=!0,n=r,i=s;break}if(l===i){a=!0,i=r,n=s;break}l=l.sibling}if(!a)throw Error(V(189))}}if(n.alternate!==i)throw Error(V(190))}if(n.tag!==3)throw Error(V(188));return n.stateNode.current===n?e:t}function Ov(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=Ov(e),t!==null)return t;e=e.sibling}return null}var Ot=Object.assign,o1=Symbol.for("react.element"),kl=Symbol.for("react.transitional.element"),Wa=Symbol.for("react.portal"),Tr=Symbol.for("react.fragment"),Mv=Symbol.for("react.strict_mode"),Lf=Symbol.for("react.profiler"),Vv=Symbol.for("react.consumer"),$n=Symbol.for("react.context"),um=Symbol.for("react.forward_ref"),Uf=Symbol.for("react.suspense"),Pf=Symbol.for("react.suspense_list"),cm=Symbol.for("react.memo"),wi=Symbol.for("react.lazy"),jf=Symbol.for("react.activity"),l1=Symbol.for("react.memo_cache_sentinel"),Wg=Symbol.iterator;function Fa(e){return e===null||typeof e!="object"?null:(e=Wg&&e[Wg]||e["@@iterator"],typeof e=="function"?e:null)}var u1=Symbol.for("react.client.reference");function zf(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===u1?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Tr:return"Fragment";case Lf:return"Profiler";case Mv:return"StrictMode";case Uf:return"Suspense";case Pf:return"SuspenseList";case jf:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Wa:return"Portal";case $n:return e.displayName||"Context";case Vv:return(e._context.displayName||"Context")+".Consumer";case um:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case cm:return t=e.displayName||null,t!==null?t:zf(e.type)||"Memo";case wi:t=e._payload,e=e._init;try{return zf(e(t))}catch{}}return null}var to=Array.isArray,Q=Cv.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,pt=r1.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Vs={pending:!1,data:null,method:null,action:null},Bf=[],Er=-1;function jn(e){return{current:e}}function le(e){0>Er||(e.current=Bf[Er],Bf[Er]=null,Er--)}function It(e,t){Er++,Bf[Er]=e.current,e.current=t}var Dn=jn(null),No=jn(null),qi=jn(null),Cu=jn(null);function Nu(e,t){switch(It(qi,t),It(No,e),It(Dn,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?r_(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=r_(t),e=tb(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}le(Dn),It(Dn,e)}function Qr(){le(Dn),le(No),le(qi)}function qf(e){e.memoizedState!==null&&It(Cu,e);var t=Dn.current,n=tb(t,e.type);t!==n&&(It(No,e),It(Dn,n))}function xu(e){No.current===e&&(le(Dn),le(No)),Cu.current===e&&(le(Cu),zo._currentValue=Vs)}var Vh,ty;function Rs(e){if(Vh===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Vh=t&&t[1]||"",ty=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Vh+e+ty}var kh=!1;function Lh(e,t){if(!e||kh)return"";kh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var m=function(){throw Error()};if(Object.defineProperty(m.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(m,[])}catch(v){var p=v}Reflect.construct(e,[],m)}else{try{m.call()}catch(v){p=v}e.call(m.prototype)}}else{try{throw Error()}catch(v){p=v}(m=e())&&typeof m.catch=="function"&&m.catch(function(){})}}catch(v){if(v&&p&&typeof v.stack=="string")return[v.stack,p.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=i.DetermineComponentFrameRoot(),a=r[0],l=r[1];if(a&&l){var u=a.split(`
`),h=l.split(`
`);for(s=i=0;i<u.length&&!u[i].includes("DetermineComponentFrameRoot");)i++;for(;s<h.length&&!h[s].includes("DetermineComponentFrameRoot");)s++;if(i===u.length||s===h.length)for(i=u.length-1,s=h.length-1;1<=i&&0<=s&&u[i]!==h[s];)s--;for(;1<=i&&0<=s;i--,s--)if(u[i]!==h[s]){if(i!==1||s!==1)do if(i--,s--,0>s||u[i]!==h[s]){var d=`
`+u[i].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=i&&0<=s);break}}}finally{kh=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Rs(n):""}function c1(e,t){switch(e.tag){case 26:case 27:case 5:return Rs(e.type);case 16:return Rs("Lazy");case 13:return e.child!==t&&t!==null?Rs("Suspense Fallback"):Rs("Suspense");case 19:return Rs("SuspenseList");case 0:case 15:return Lh(e.type,!1);case 11:return Lh(e.type.render,!1);case 1:return Lh(e.type,!0);case 31:return Rs("Activity");default:return""}}function ey(e){try{var t="",n=null;do t+=c1(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Hf=Object.prototype.hasOwnProperty,hm=ie.unstable_scheduleCallback,Uh=ie.unstable_cancelCallback,h1=ie.unstable_shouldYield,f1=ie.unstable_requestPaint,Ge=ie.unstable_now,d1=ie.unstable_getCurrentPriorityLevel,kv=ie.unstable_ImmediatePriority,Lv=ie.unstable_UserBlockingPriority,Du=ie.unstable_NormalPriority,m1=ie.unstable_LowPriority,Uv=ie.unstable_IdlePriority,p1=ie.log,g1=ie.unstable_setDisableYieldValue,Zo=null,Ke=null;function ki(e){if(typeof p1=="function"&&g1(e),Ke&&typeof Ke.setStrictMode=="function")try{Ke.setStrictMode(Zo,e)}catch{}}var Qe=Math.clz32?Math.clz32:v1,y1=Math.log,_1=Math.LN2;function v1(e){return e>>>=0,e===0?32:31-(y1(e)/_1|0)|0}var Ll=256,Ul=262144,Pl=4194304;function Cs(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Nc(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var s=0,r=e.suspendedLanes,a=e.pingedLanes;e=e.warmLanes;var l=i&134217727;return l!==0?(i=l&~r,i!==0?s=Cs(i):(a&=l,a!==0?s=Cs(a):n||(n=l&~e,n!==0&&(s=Cs(n))))):(l=i&~r,l!==0?s=Cs(l):a!==0?s=Cs(a):n||(n=i&~e,n!==0&&(s=Cs(n)))),s===0?0:t!==0&&t!==s&&!(t&r)&&(r=s&-s,n=t&-t,r>=n||r===32&&(n&4194048)!==0)?t:s}function Wo(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function T1(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pv(){var e=Pl;return Pl<<=1,!(Pl&62914560)&&(Pl=4194304),e}function Ph(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function tl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function E1(e,t,n,i,s,r){var a=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var l=e.entanglements,u=e.expirationTimes,h=e.hiddenUpdates;for(n=a&~n;0<n;){var d=31-Qe(n),m=1<<d;l[d]=0,u[d]=-1;var p=h[d];if(p!==null)for(h[d]=null,d=0;d<p.length;d++){var v=p[d];v!==null&&(v.lane&=-536870913)}n&=~m}i!==0&&jv(e,i,0),r!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=r&~(a&~t))}function jv(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Qe(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function zv(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Qe(n),s=1<<i;s&t|e[i]&t&&(e[i]|=t),n&=~s}}function Bv(e,t){var n=t&-t;return n=n&42?1:fm(n),n&(e.suspendedLanes|t)?0:n}function fm(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function dm(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function qv(){var e=pt.p;return e!==0?e:(e=window.event,e===void 0?32:hb(e.type))}function ny(e,t){var n=pt.p;try{return pt.p=e,t()}finally{pt.p=n}}var ps=Math.random().toString(36).slice(2),fe="__reactFiber$"+ps,Ue="__reactProps$"+ps,fa="__reactContainer$"+ps,Ff="__reactEvents$"+ps,b1="__reactListeners$"+ps,A1="__reactHandles$"+ps,iy="__reactResources$"+ps,el="__reactMarker$"+ps;function mm(e){delete e[fe],delete e[Ue],delete e[Ff],delete e[b1],delete e[A1]}function br(e){var t=e[fe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[fa]||n[fe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=c_(e);e!==null;){if(n=e[fe])return n;e=c_(e)}return t}e=n,n=e.parentNode}return null}function da(e){if(e=e[fe]||e[fa]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function eo(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(V(33))}function Mr(e){var t=e[iy];return t||(t=e[iy]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function oe(e){e[el]=!0}var Hv=new Set,Fv={};function Zs(e,t){Yr(e,t),Yr(e+"Capture",t)}function Yr(e,t){for(Fv[e]=t,e=0;e<t.length;e++)Hv.add(t[e])}var S1=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),sy={},ry={};function w1(e){return Hf.call(ry,e)?!0:Hf.call(sy,e)?!1:S1.test(e)?ry[e]=!0:(sy[e]=!0,!1)}function iu(e,t,n){if(w1(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function jl(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Hn(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function tn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Gv(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function I1(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var s=i.get,r=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(a){n=""+a,r.call(this,a)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(a){n=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Gf(e){if(!e._valueTracker){var t=Gv(e)?"checked":"value";e._valueTracker=I1(e,t,""+e[t])}}function Kv(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=Gv(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function Ou(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var R1=/[\n"\\]/g;function sn(e){return e.replace(R1,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Kf(e,t,n,i,s,r,a,l){e.name="",a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"?e.type=a:e.removeAttribute("type"),t!=null?a==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+tn(t)):e.value!==""+tn(t)&&(e.value=""+tn(t)):a!=="submit"&&a!=="reset"||e.removeAttribute("value"),t!=null?Qf(e,a,tn(t)):n!=null?Qf(e,a,tn(n)):i!=null&&e.removeAttribute("value"),s==null&&r!=null&&(e.defaultChecked=!!r),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"?e.name=""+tn(l):e.removeAttribute("name")}function Qv(e,t,n,i,s,r,a,l){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||n!=null){if(!(r!=="submit"&&r!=="reset"||t!=null)){Gf(e);return}n=n!=null?""+tn(n):"",t=t!=null?""+tn(t):n,l||t===e.value||(e.value=t),e.defaultValue=t}i=i??s,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=l?e.checked:!!i,e.defaultChecked=!!i,a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(e.name=a),Gf(e)}function Qf(e,t,n){t==="number"&&Ou(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Vr(e,t,n,i){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&i&&(e[n].defaultSelected=!0)}else{for(n=""+tn(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function Yv(e,t,n){if(t!=null&&(t=""+tn(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+tn(n):""}function Xv(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(V(92));if(to(i)){if(1<i.length)throw Error(V(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=tn(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),Gf(e)}function Xr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var C1=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ay(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||C1.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function $v(e,t,n){if(t!=null&&typeof t!="object")throw Error(V(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var s in t)i=t[s],t.hasOwnProperty(s)&&n[s]!==i&&ay(e,s,i)}else for(var r in t)t.hasOwnProperty(r)&&ay(e,r,t[r])}function pm(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var N1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),x1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function su(e){return x1.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Jn(){}var Yf=null;function gm(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ar=null,kr=null;function oy(e){var t=da(e);if(t&&(e=t.stateNode)){var n=e[Ue]||null;t:switch(e=t.stateNode,t.type){case"input":if(Kf(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+sn(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var s=i[Ue]||null;if(!s)throw Error(V(90));Kf(i,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&Kv(i)}break t;case"textarea":Yv(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&Vr(e,!!n.multiple,t,!1)}}}var jh=!1;function Jv(e,t,n){if(jh)return e(t,n);jh=!0;try{var i=e(t);return i}finally{if(jh=!1,(Ar!==null||kr!==null)&&(Bc(),Ar&&(t=Ar,e=kr,kr=Ar=null,oy(t),e)))for(t=0;t<e.length;t++)oy(e[t])}}function xo(e,t){var n=e.stateNode;if(n===null)return null;var i=n[Ue]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(V(231,t,typeof n));return n}var si=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xf=!1;if(si)try{var Ga={};Object.defineProperty(Ga,"passive",{get:function(){Xf=!0}}),window.addEventListener("test",Ga,Ga),window.removeEventListener("test",Ga,Ga)}catch{Xf=!1}var Li=null,ym=null,ru=null;function Zv(){if(ru)return ru;var e,t=ym,n=t.length,i,s="value"in Li?Li.value:Li.textContent,r=s.length;for(e=0;e<n&&t[e]===s[e];e++);var a=n-e;for(i=1;i<=a&&t[n-i]===s[r-i];i++);return ru=s.slice(e,1<i?1-i:void 0)}function au(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function zl(){return!0}function ly(){return!1}function Pe(e){function t(n,i,s,r,a){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=r,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(r):r[l]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?zl:ly,this.isPropagationStopped=ly,this}return Ot(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=zl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=zl)},persist:function(){},isPersistent:zl}),t}var Ws={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xc=Pe(Ws),nl=Ot({},Ws,{view:0,detail:0}),D1=Pe(nl),zh,Bh,Ka,Dc=Ot({},nl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_m,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ka&&(Ka&&e.type==="mousemove"?(zh=e.screenX-Ka.screenX,Bh=e.screenY-Ka.screenY):Bh=zh=0,Ka=e),zh)},movementY:function(e){return"movementY"in e?e.movementY:Bh}}),uy=Pe(Dc),O1=Ot({},Dc,{dataTransfer:0}),M1=Pe(O1),V1=Ot({},nl,{relatedTarget:0}),qh=Pe(V1),k1=Ot({},Ws,{animationName:0,elapsedTime:0,pseudoElement:0}),L1=Pe(k1),U1=Ot({},Ws,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),P1=Pe(U1),j1=Ot({},Ws,{data:0}),cy=Pe(j1),z1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},B1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},q1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function H1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=q1[e])?!!t[e]:!1}function _m(){return H1}var F1=Ot({},nl,{key:function(e){if(e.key){var t=z1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=au(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?B1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_m,charCode:function(e){return e.type==="keypress"?au(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?au(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),G1=Pe(F1),K1=Ot({},Dc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hy=Pe(K1),Q1=Ot({},nl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_m}),Y1=Pe(Q1),X1=Ot({},Ws,{propertyName:0,elapsedTime:0,pseudoElement:0}),$1=Pe(X1),J1=Ot({},Dc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Z1=Pe(J1),W1=Ot({},Ws,{newState:0,oldState:0}),tI=Pe(W1),eI=[9,13,27,32],vm=si&&"CompositionEvent"in window,uo=null;si&&"documentMode"in document&&(uo=document.documentMode);var nI=si&&"TextEvent"in window&&!uo,Wv=si&&(!vm||uo&&8<uo&&11>=uo),fy=" ",dy=!1;function tT(e,t){switch(e){case"keyup":return eI.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function eT(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Sr=!1;function iI(e,t){switch(e){case"compositionend":return eT(t);case"keypress":return t.which!==32?null:(dy=!0,fy);case"textInput":return e=t.data,e===fy&&dy?null:e;default:return null}}function sI(e,t){if(Sr)return e==="compositionend"||!vm&&tT(e,t)?(e=Zv(),ru=ym=Li=null,Sr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Wv&&t.locale!=="ko"?null:t.data;default:return null}}var rI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function my(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!rI[e.type]:t==="textarea"}function nT(e,t,n,i){Ar?kr?kr.push(i):kr=[i]:Ar=i,t=$u(t,"onChange"),0<t.length&&(n=new xc("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var co=null,Do=null;function aI(e){JE(e,0)}function Oc(e){var t=eo(e);if(Kv(t))return e}function py(e,t){if(e==="change")return t}var iT=!1;if(si){var Hh;if(si){var Fh="oninput"in document;if(!Fh){var gy=document.createElement("div");gy.setAttribute("oninput","return;"),Fh=typeof gy.oninput=="function"}Hh=Fh}else Hh=!1;iT=Hh&&(!document.documentMode||9<document.documentMode)}function yy(){co&&(co.detachEvent("onpropertychange",sT),Do=co=null)}function sT(e){if(e.propertyName==="value"&&Oc(Do)){var t=[];nT(t,Do,e,gm(e)),Jv(aI,t)}}function oI(e,t,n){e==="focusin"?(yy(),co=t,Do=n,co.attachEvent("onpropertychange",sT)):e==="focusout"&&yy()}function lI(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Oc(Do)}function uI(e,t){if(e==="click")return Oc(t)}function cI(e,t){if(e==="input"||e==="change")return Oc(t)}function hI(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Je=typeof Object.is=="function"?Object.is:hI;function Oo(e,t){if(Je(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!Hf.call(t,s)||!Je(e[s],t[s]))return!1}return!0}function _y(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function vy(e,t){var n=_y(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=_y(n)}}function rT(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?rT(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function aT(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ou(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ou(e.document)}return t}function Tm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var fI=si&&"documentMode"in document&&11>=document.documentMode,wr=null,$f=null,ho=null,Jf=!1;function Ty(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Jf||wr==null||wr!==Ou(i)||(i=wr,"selectionStart"in i&&Tm(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ho&&Oo(ho,i)||(ho=i,i=$u($f,"onSelect"),0<i.length&&(t=new xc("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=wr)))}function Is(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ir={animationend:Is("Animation","AnimationEnd"),animationiteration:Is("Animation","AnimationIteration"),animationstart:Is("Animation","AnimationStart"),transitionrun:Is("Transition","TransitionRun"),transitionstart:Is("Transition","TransitionStart"),transitioncancel:Is("Transition","TransitionCancel"),transitionend:Is("Transition","TransitionEnd")},Gh={},oT={};si&&(oT=document.createElement("div").style,"AnimationEvent"in window||(delete Ir.animationend.animation,delete Ir.animationiteration.animation,delete Ir.animationstart.animation),"TransitionEvent"in window||delete Ir.transitionend.transition);function tr(e){if(Gh[e])return Gh[e];if(!Ir[e])return e;var t=Ir[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in oT)return Gh[e]=t[n];return e}var lT=tr("animationend"),uT=tr("animationiteration"),cT=tr("animationstart"),dI=tr("transitionrun"),mI=tr("transitionstart"),pI=tr("transitioncancel"),hT=tr("transitionend"),fT=new Map,Zf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Zf.push("scrollEnd");function Tn(e,t){fT.set(e,t),Zs(t,[e])}var Mu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},We=[],Rr=0,Em=0;function Mc(){for(var e=Rr,t=Em=Rr=0;t<e;){var n=We[t];We[t++]=null;var i=We[t];We[t++]=null;var s=We[t];We[t++]=null;var r=We[t];if(We[t++]=null,i!==null&&s!==null){var a=i.pending;a===null?s.next=s:(s.next=a.next,a.next=s),i.pending=s}r!==0&&dT(n,s,r)}}function Vc(e,t,n,i){We[Rr++]=e,We[Rr++]=t,We[Rr++]=n,We[Rr++]=i,Em|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function bm(e,t,n,i){return Vc(e,t,n,i),Vu(e)}function er(e,t){return Vc(e,null,null,t),Vu(e)}function dT(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var s=!1,r=e.return;r!==null;)r.childLanes|=n,i=r.alternate,i!==null&&(i.childLanes|=n),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(s=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,s&&t!==null&&(s=31-Qe(n),e=r.hiddenUpdates,i=e[s],i===null?e[s]=[t]:i.push(t),t.lane=n|536870912),r):null}function Vu(e){if(50<Eo)throw Eo=0,vd=null,Error(V(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Cr={};function gI(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qe(e,t,n,i){return new gI(e,t,n,i)}function Am(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ei(e,t){var n=e.alternate;return n===null?(n=qe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function mT(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ou(e,t,n,i,s,r){var a=0;if(i=e,typeof e=="function")Am(e)&&(a=1);else if(typeof e=="string")a=ER(e,n,Dn.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case jf:return e=qe(31,n,t,s),e.elementType=jf,e.lanes=r,e;case Tr:return ks(n.children,s,r,t);case Mv:a=8,s|=24;break;case Lf:return e=qe(12,n,t,s|2),e.elementType=Lf,e.lanes=r,e;case Uf:return e=qe(13,n,t,s),e.elementType=Uf,e.lanes=r,e;case Pf:return e=qe(19,n,t,s),e.elementType=Pf,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case $n:a=10;break t;case Vv:a=9;break t;case um:a=11;break t;case cm:a=14;break t;case wi:a=16,i=null;break t}a=29,n=Error(V(130,e===null?"null":typeof e,"")),i=null}return t=qe(a,n,t,s),t.elementType=e,t.type=i,t.lanes=r,t}function ks(e,t,n,i){return e=qe(7,e,i,t),e.lanes=n,e}function Kh(e,t,n){return e=qe(6,e,null,t),e.lanes=n,e}function pT(e){var t=qe(18,null,null,0);return t.stateNode=e,t}function Qh(e,t,n){return t=qe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ey=new WeakMap;function rn(e,t){if(typeof e=="object"&&e!==null){var n=Ey.get(e);return n!==void 0?n:(t={value:e,source:t,stack:ey(t)},Ey.set(e,t),t)}return{value:e,source:t,stack:ey(t)}}var Nr=[],xr=0,ku=null,Mo=0,en=[],nn=0,is=null,Cn=1,Nn="";function Yn(e,t){Nr[xr++]=Mo,Nr[xr++]=ku,ku=e,Mo=t}function gT(e,t,n){en[nn++]=Cn,en[nn++]=Nn,en[nn++]=is,is=e;var i=Cn;e=Nn;var s=32-Qe(i)-1;i&=~(1<<s),n+=1;var r=32-Qe(t)+s;if(30<r){var a=s-s%5;r=(i&(1<<a)-1).toString(32),i>>=a,s-=a,Cn=1<<32-Qe(t)+s|n<<s|i,Nn=r+e}else Cn=1<<r|n<<s|i,Nn=e}function Sm(e){e.return!==null&&(Yn(e,1),gT(e,1,0))}function wm(e){for(;e===ku;)ku=Nr[--xr],Nr[xr]=null,Mo=Nr[--xr],Nr[xr]=null;for(;e===is;)is=en[--nn],en[nn]=null,Nn=en[--nn],en[nn]=null,Cn=en[--nn],en[nn]=null}function yT(e,t){en[nn++]=Cn,en[nn++]=Nn,en[nn++]=is,Cn=t.id,Nn=t.overflow,is=e}var de=null,Nt=null,ft=!1,Hi=null,an=!1,Wf=Error(V(519));function ss(e){var t=Error(V(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Vo(rn(t,e)),Wf}function by(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[fe]=e,t[Ue]=i,n){case"dialog":rt("cancel",t),rt("close",t);break;case"iframe":case"object":case"embed":rt("load",t);break;case"video":case"audio":for(n=0;n<Po.length;n++)rt(Po[n],t);break;case"source":rt("error",t);break;case"img":case"image":case"link":rt("error",t),rt("load",t);break;case"details":rt("toggle",t);break;case"input":rt("invalid",t),Qv(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":rt("invalid",t);break;case"textarea":rt("invalid",t),Xv(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||WE(t.textContent,n)?(i.popover!=null&&(rt("beforetoggle",t),rt("toggle",t)),i.onScroll!=null&&rt("scroll",t),i.onScrollEnd!=null&&rt("scrollend",t),i.onClick!=null&&(t.onclick=Jn),t=!0):t=!1,t||ss(e,!0)}function Ay(e){for(de=e.return;de;)switch(de.tag){case 5:case 31:case 13:an=!1;return;case 27:case 3:an=!0;return;default:de=de.return}}function hr(e){if(e!==de)return!1;if(!ft)return Ay(e),ft=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Sd(e.type,e.memoizedProps)),n=!n),n&&Nt&&ss(e),Ay(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(V(317));Nt=u_(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(V(317));Nt=u_(e)}else t===27?(t=Nt,gs(e.type)?(e=Cd,Cd=null,Nt=e):Nt=t):Nt=de?un(e.stateNode.nextSibling):null;return!0}function Bs(){Nt=de=null,ft=!1}function Yh(){var e=Hi;return e!==null&&(Me===null?Me=e:Me.push.apply(Me,e),Hi=null),e}function Vo(e){Hi===null?Hi=[e]:Hi.push(e)}var td=jn(null),nr=null,Zn=null;function Ri(e,t,n){It(td,t._currentValue),t._currentValue=n}function ni(e){e._currentValue=td.current,le(td)}function ed(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function nd(e,t,n,i){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var r=s.dependencies;if(r!==null){var a=s.child;r=r.firstContext;t:for(;r!==null;){var l=r;r=s;for(var u=0;u<t.length;u++)if(l.context===t[u]){r.lanes|=n,l=r.alternate,l!==null&&(l.lanes|=n),ed(r.return,n,e),i||(a=null);break t}r=l.next}}else if(s.tag===18){if(a=s.return,a===null)throw Error(V(341));a.lanes|=n,r=a.alternate,r!==null&&(r.lanes|=n),ed(a,n,e),a=null}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}}function ma(e,t,n,i){e=null;for(var s=t,r=!1;s!==null;){if(!r){if(s.flags&524288)r=!0;else if(s.flags&262144)break}if(s.tag===10){var a=s.alternate;if(a===null)throw Error(V(387));if(a=a.memoizedProps,a!==null){var l=s.type;Je(s.pendingProps.value,a.value)||(e!==null?e.push(l):e=[l])}}else if(s===Cu.current){if(a=s.alternate,a===null)throw Error(V(387));a.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(zo):e=[zo])}s=s.return}e!==null&&nd(t,e,n,i),t.flags|=262144}function Lu(e){for(e=e.firstContext;e!==null;){if(!Je(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function qs(e){nr=e,Zn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function pe(e){return _T(nr,e)}function Bl(e,t){return nr===null&&qs(e),_T(e,t)}function _T(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Zn===null){if(e===null)throw Error(V(308));Zn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Zn=Zn.next=t;return n}var yI=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},_I=ie.unstable_scheduleCallback,vI=ie.unstable_NormalPriority,Qt={$$typeof:$n,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Im(){return{controller:new yI,data:new Map,refCount:0}}function il(e){e.refCount--,e.refCount===0&&_I(vI,function(){e.controller.abort()})}var fo=null,id=0,$r=0,Lr=null;function TI(e,t){if(fo===null){var n=fo=[];id=0,$r=Jm(),Lr={status:"pending",value:void 0,then:function(i){n.push(i)}}}return id++,t.then(Sy,Sy),t}function Sy(){if(--id===0&&fo!==null){Lr!==null&&(Lr.status="fulfilled");var e=fo;fo=null,$r=0,Lr=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function EI(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(s){n.push(s)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var s=0;s<n.length;s++)(0,n[s])(t)},function(s){for(i.status="rejected",i.reason=s,s=0;s<n.length;s++)(0,n[s])(void 0)}),i}var wy=Q.S;Q.S=function(e,t){OE=Ge(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&TI(e,t),wy!==null&&wy(e,t)};var Ls=jn(null);function Rm(){var e=Ls.current;return e!==null?e:St.pooledCache}function lu(e,t){t===null?It(Ls,Ls.current):It(Ls,t.pool)}function vT(){var e=Rm();return e===null?null:{parent:Qt._currentValue,pool:e}}var pa=Error(V(460)),Cm=Error(V(474)),kc=Error(V(542)),Uu={then:function(){}};function Iy(e){return e=e.status,e==="fulfilled"||e==="rejected"}function TT(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Jn,Jn),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Cy(e),e;default:if(typeof t.status=="string")t.then(Jn,Jn);else{if(e=St,e!==null&&100<e.shellSuspendCounter)throw Error(V(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=i}},function(i){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Cy(e),e}throw Us=t,pa}}function Ns(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Us=n,pa):n}}var Us=null;function Ry(){if(Us===null)throw Error(V(459));var e=Us;return Us=null,e}function Cy(e){if(e===pa||e===kc)throw Error(V(483))}var Ur=null,ko=0;function ql(e){var t=ko;return ko+=1,Ur===null&&(Ur=[]),TT(Ur,e,t)}function Qa(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Hl(e,t){throw t.$$typeof===o1?Error(V(525)):(e=Object.prototype.toString.call(t),Error(V(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function ET(e){function t(S,b){if(e){var R=S.deletions;R===null?(S.deletions=[b],S.flags|=16):R.push(b)}}function n(S,b){if(!e)return null;for(;b!==null;)t(S,b),b=b.sibling;return null}function i(S){for(var b=new Map;S!==null;)S.key!==null?b.set(S.key,S):b.set(S.index,S),S=S.sibling;return b}function s(S,b){return S=ei(S,b),S.index=0,S.sibling=null,S}function r(S,b,R){return S.index=R,e?(R=S.alternate,R!==null?(R=R.index,R<b?(S.flags|=67108866,b):R):(S.flags|=67108866,b)):(S.flags|=1048576,b)}function a(S){return e&&S.alternate===null&&(S.flags|=67108866),S}function l(S,b,R,D){return b===null||b.tag!==6?(b=Kh(R,S.mode,D),b.return=S,b):(b=s(b,R),b.return=S,b)}function u(S,b,R,D){var B=R.type;return B===Tr?d(S,b,R.props.children,D,R.key):b!==null&&(b.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===wi&&Ns(B)===b.type)?(b=s(b,R.props),Qa(b,R),b.return=S,b):(b=ou(R.type,R.key,R.props,null,S.mode,D),Qa(b,R),b.return=S,b)}function h(S,b,R,D){return b===null||b.tag!==4||b.stateNode.containerInfo!==R.containerInfo||b.stateNode.implementation!==R.implementation?(b=Qh(R,S.mode,D),b.return=S,b):(b=s(b,R.children||[]),b.return=S,b)}function d(S,b,R,D,B){return b===null||b.tag!==7?(b=ks(R,S.mode,D,B),b.return=S,b):(b=s(b,R),b.return=S,b)}function m(S,b,R){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return b=Kh(""+b,S.mode,R),b.return=S,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case kl:return R=ou(b.type,b.key,b.props,null,S.mode,R),Qa(R,b),R.return=S,R;case Wa:return b=Qh(b,S.mode,R),b.return=S,b;case wi:return b=Ns(b),m(S,b,R)}if(to(b)||Fa(b))return b=ks(b,S.mode,R,null),b.return=S,b;if(typeof b.then=="function")return m(S,ql(b),R);if(b.$$typeof===$n)return m(S,Bl(S,b),R);Hl(S,b)}return null}function p(S,b,R,D){var B=b!==null?b.key:null;if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return B!==null?null:l(S,b,""+R,D);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case kl:return R.key===B?u(S,b,R,D):null;case Wa:return R.key===B?h(S,b,R,D):null;case wi:return R=Ns(R),p(S,b,R,D)}if(to(R)||Fa(R))return B!==null?null:d(S,b,R,D,null);if(typeof R.then=="function")return p(S,b,ql(R),D);if(R.$$typeof===$n)return p(S,b,Bl(S,R),D);Hl(S,R)}return null}function v(S,b,R,D,B){if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return S=S.get(R)||null,l(b,S,""+D,B);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case kl:return S=S.get(D.key===null?R:D.key)||null,u(b,S,D,B);case Wa:return S=S.get(D.key===null?R:D.key)||null,h(b,S,D,B);case wi:return D=Ns(D),v(S,b,R,D,B)}if(to(D)||Fa(D))return S=S.get(R)||null,d(b,S,D,B,null);if(typeof D.then=="function")return v(S,b,R,ql(D),B);if(D.$$typeof===$n)return v(S,b,R,Bl(b,D),B);Hl(b,D)}return null}function C(S,b,R,D){for(var B=null,F=null,T=b,_=b=0,E=null;T!==null&&_<R.length;_++){T.index>_?(E=T,T=null):E=T.sibling;var w=p(S,T,R[_],D);if(w===null){T===null&&(T=E);break}e&&T&&w.alternate===null&&t(S,T),b=r(w,b,_),F===null?B=w:F.sibling=w,F=w,T=E}if(_===R.length)return n(S,T),ft&&Yn(S,_),B;if(T===null){for(;_<R.length;_++)T=m(S,R[_],D),T!==null&&(b=r(T,b,_),F===null?B=T:F.sibling=T,F=T);return ft&&Yn(S,_),B}for(T=i(T);_<R.length;_++)E=v(T,S,_,R[_],D),E!==null&&(e&&E.alternate!==null&&T.delete(E.key===null?_:E.key),b=r(E,b,_),F===null?B=E:F.sibling=E,F=E);return e&&T.forEach(function(I){return t(S,I)}),ft&&Yn(S,_),B}function M(S,b,R,D){if(R==null)throw Error(V(151));for(var B=null,F=null,T=b,_=b=0,E=null,w=R.next();T!==null&&!w.done;_++,w=R.next()){T.index>_?(E=T,T=null):E=T.sibling;var I=p(S,T,w.value,D);if(I===null){T===null&&(T=E);break}e&&T&&I.alternate===null&&t(S,T),b=r(I,b,_),F===null?B=I:F.sibling=I,F=I,T=E}if(w.done)return n(S,T),ft&&Yn(S,_),B;if(T===null){for(;!w.done;_++,w=R.next())w=m(S,w.value,D),w!==null&&(b=r(w,b,_),F===null?B=w:F.sibling=w,F=w);return ft&&Yn(S,_),B}for(T=i(T);!w.done;_++,w=R.next())w=v(T,S,_,w.value,D),w!==null&&(e&&w.alternate!==null&&T.delete(w.key===null?_:w.key),b=r(w,b,_),F===null?B=w:F.sibling=w,F=w);return e&&T.forEach(function(N){return t(S,N)}),ft&&Yn(S,_),B}function U(S,b,R,D){if(typeof R=="object"&&R!==null&&R.type===Tr&&R.key===null&&(R=R.props.children),typeof R=="object"&&R!==null){switch(R.$$typeof){case kl:t:{for(var B=R.key;b!==null;){if(b.key===B){if(B=R.type,B===Tr){if(b.tag===7){n(S,b.sibling),D=s(b,R.props.children),D.return=S,S=D;break t}}else if(b.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===wi&&Ns(B)===b.type){n(S,b.sibling),D=s(b,R.props),Qa(D,R),D.return=S,S=D;break t}n(S,b);break}else t(S,b);b=b.sibling}R.type===Tr?(D=ks(R.props.children,S.mode,D,R.key),D.return=S,S=D):(D=ou(R.type,R.key,R.props,null,S.mode,D),Qa(D,R),D.return=S,S=D)}return a(S);case Wa:t:{for(B=R.key;b!==null;){if(b.key===B)if(b.tag===4&&b.stateNode.containerInfo===R.containerInfo&&b.stateNode.implementation===R.implementation){n(S,b.sibling),D=s(b,R.children||[]),D.return=S,S=D;break t}else{n(S,b);break}else t(S,b);b=b.sibling}D=Qh(R,S.mode,D),D.return=S,S=D}return a(S);case wi:return R=Ns(R),U(S,b,R,D)}if(to(R))return C(S,b,R,D);if(Fa(R)){if(B=Fa(R),typeof B!="function")throw Error(V(150));return R=B.call(R),M(S,b,R,D)}if(typeof R.then=="function")return U(S,b,ql(R),D);if(R.$$typeof===$n)return U(S,b,Bl(S,R),D);Hl(S,R)}return typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint"?(R=""+R,b!==null&&b.tag===6?(n(S,b.sibling),D=s(b,R),D.return=S,S=D):(n(S,b),D=Kh(R,S.mode,D),D.return=S,S=D),a(S)):n(S,b)}return function(S,b,R,D){try{ko=0;var B=U(S,b,R,D);return Ur=null,B}catch(T){if(T===pa||T===kc)throw T;var F=qe(29,T,null,S.mode);return F.lanes=D,F.return=S,F}finally{}}}var Hs=ET(!0),bT=ET(!1),Ii=!1;function Nm(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function sd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Fi(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Gi(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,mt&2){var s=i.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),i.pending=t,t=Vu(e),dT(e,null,n),t}return Vc(e,i,t,n),Vu(e)}function mo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,zv(e,n)}}function Xh(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var a={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};r===null?s=r=a:r=r.next=a,n=n.next}while(n!==null);r===null?s=r=t:r=r.next=t}else s=r=t;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:r,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var rd=!1;function po(){if(rd){var e=Lr;if(e!==null)throw e}}function go(e,t,n,i){rd=!1;var s=e.updateQueue;Ii=!1;var r=s.firstBaseUpdate,a=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var u=l,h=u.next;u.next=null,a===null?r=h:a.next=h,a=u;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==a&&(l===null?d.firstBaseUpdate=h:l.next=h,d.lastBaseUpdate=u))}if(r!==null){var m=s.baseState;a=0,d=h=u=null,l=r;do{var p=l.lane&-536870913,v=p!==l.lane;if(v?(ct&p)===p:(i&p)===p){p!==0&&p===$r&&(rd=!0),d!==null&&(d=d.next={lane:0,tag:l.tag,payload:l.payload,callback:null,next:null});t:{var C=e,M=l;p=t;var U=n;switch(M.tag){case 1:if(C=M.payload,typeof C=="function"){m=C.call(U,m,p);break t}m=C;break t;case 3:C.flags=C.flags&-65537|128;case 0:if(C=M.payload,p=typeof C=="function"?C.call(U,m,p):C,p==null)break t;m=Ot({},m,p);break t;case 2:Ii=!0}}p=l.callback,p!==null&&(e.flags|=64,v&&(e.flags|=8192),v=s.callbacks,v===null?s.callbacks=[p]:v.push(p))}else v={lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(h=d=v,u=m):d=d.next=v,a|=p;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;v=l,l=v.next,v.next=null,s.lastBaseUpdate=v,s.shared.pending=null}}while(!0);d===null&&(u=m),s.baseState=u,s.firstBaseUpdate=h,s.lastBaseUpdate=d,r===null&&(s.shared.lanes=0),as|=a,e.lanes=a,e.memoizedState=m}}function AT(e,t){if(typeof e!="function")throw Error(V(191,e));e.call(t)}function ST(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)AT(n[e],t)}var Jr=jn(null),Pu=jn(0);function Ny(e,t){e=li,It(Pu,e),It(Jr,t),li=e|t.baseLanes}function ad(){It(Pu,li),It(Jr,Jr.current)}function xm(){li=Pu.current,le(Jr),le(Pu)}var Ze=jn(null),ln=null;function Ci(e){var t=e.alternate;It(Bt,Bt.current&1),It(Ze,e),ln===null&&(t===null||Jr.current!==null||t.memoizedState!==null)&&(ln=e)}function od(e){It(Bt,Bt.current),It(Ze,e),ln===null&&(ln=e)}function wT(e){e.tag===22?(It(Bt,Bt.current),It(Ze,e),ln===null&&(ln=e)):Ni()}function Ni(){It(Bt,Bt.current),It(Ze,Ze.current)}function Be(e){le(Ze),ln===e&&(ln=null),le(Bt)}var Bt=jn(0);function ju(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Id(n)||Rd(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ri=0,tt=null,bt=null,Gt=null,zu=!1,Pr=!1,Fs=!1,Bu=0,Lo=0,jr=null,bI=0;function Ut(){throw Error(V(321))}function Dm(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Je(e[n],t[n]))return!1;return!0}function Om(e,t,n,i,s,r){return ri=r,tt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Q.H=e===null||e.memoizedState===null?nE:Hm,Fs=!1,r=n(i,s),Fs=!1,Pr&&(r=RT(t,n,i,s)),IT(e),r}function IT(e){Q.H=Uo;var t=bt!==null&&bt.next!==null;if(ri=0,Gt=bt=tt=null,zu=!1,Lo=0,jr=null,t)throw Error(V(300));e===null||Xt||(e=e.dependencies,e!==null&&Lu(e)&&(Xt=!0))}function RT(e,t,n,i){tt=e;var s=0;do{if(Pr&&(jr=null),Lo=0,Pr=!1,25<=s)throw Error(V(301));if(s+=1,Gt=bt=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}Q.H=iE,r=t(n,i)}while(Pr);return r}function AI(){var e=Q.H,t=e.useState()[0];return t=typeof t.then=="function"?sl(t):t,e=e.useState()[0],(bt!==null?bt.memoizedState:null)!==e&&(tt.flags|=1024),t}function Mm(){var e=Bu!==0;return Bu=0,e}function Vm(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function km(e){if(zu){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}zu=!1}ri=0,Gt=bt=tt=null,Pr=!1,Lo=Bu=0,jr=null}function Se(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Gt===null?tt.memoizedState=Gt=e:Gt=Gt.next=e,Gt}function qt(){if(bt===null){var e=tt.alternate;e=e!==null?e.memoizedState:null}else e=bt.next;var t=Gt===null?tt.memoizedState:Gt.next;if(t!==null)Gt=t,bt=e;else{if(e===null)throw tt.alternate===null?Error(V(467)):Error(V(310));bt=e,e={memoizedState:bt.memoizedState,baseState:bt.baseState,baseQueue:bt.baseQueue,queue:bt.queue,next:null},Gt===null?tt.memoizedState=Gt=e:Gt=Gt.next=e}return Gt}function Lc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function sl(e){var t=Lo;return Lo+=1,jr===null&&(jr=[]),e=TT(jr,e,t),t=tt,(Gt===null?t.memoizedState:Gt.next)===null&&(t=t.alternate,Q.H=t===null||t.memoizedState===null?nE:Hm),e}function Uc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return sl(e);if(e.$$typeof===$n)return pe(e)}throw Error(V(438,String(e)))}function Lm(e){var t=null,n=tt.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=tt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Lc(),tt.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=l1;return t.index++,n}function ai(e,t){return typeof t=="function"?t(e):t}function uu(e){var t=qt();return Um(t,bt,e)}function Um(e,t,n){var i=e.queue;if(i===null)throw Error(V(311));i.lastRenderedReducer=n;var s=e.baseQueue,r=i.pending;if(r!==null){if(s!==null){var a=s.next;s.next=r.next,r.next=a}t.baseQueue=s=r,i.pending=null}if(r=e.baseState,s===null)e.memoizedState=r;else{t=s.next;var l=a=null,u=null,h=t,d=!1;do{var m=h.lane&-536870913;if(m!==h.lane?(ct&m)===m:(ri&m)===m){var p=h.revertLane;if(p===0)u!==null&&(u=u.next={lane:0,revertLane:0,gesture:null,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),m===$r&&(d=!0);else if((ri&p)===p){h=h.next,p===$r&&(d=!0);continue}else m={lane:0,revertLane:h.revertLane,gesture:null,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null},u===null?(l=u=m,a=r):u=u.next=m,tt.lanes|=p,as|=p;m=h.action,Fs&&n(r,m),r=h.hasEagerState?h.eagerState:n(r,m)}else p={lane:m,revertLane:h.revertLane,gesture:h.gesture,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null},u===null?(l=u=p,a=r):u=u.next=p,tt.lanes|=m,as|=m;h=h.next}while(h!==null&&h!==t);if(u===null?a=r:u.next=l,!Je(r,e.memoizedState)&&(Xt=!0,d&&(n=Lr,n!==null)))throw n;e.memoizedState=r,e.baseState=a,e.baseQueue=u,i.lastRenderedState=r}return s===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function $h(e){var t=qt(),n=t.queue;if(n===null)throw Error(V(311));n.lastRenderedReducer=e;var i=n.dispatch,s=n.pending,r=t.memoizedState;if(s!==null){n.pending=null;var a=s=s.next;do r=e(r,a.action),a=a.next;while(a!==s);Je(r,t.memoizedState)||(Xt=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),n.lastRenderedState=r}return[r,i]}function CT(e,t,n){var i=tt,s=qt(),r=ft;if(r){if(n===void 0)throw Error(V(407));n=n()}else n=t();var a=!Je((bt||s).memoizedState,n);if(a&&(s.memoizedState=n,Xt=!0),s=s.queue,Pm(DT.bind(null,i,s,e),[e]),s.getSnapshot!==t||a||Gt!==null&&Gt.memoizedState.tag&1){if(i.flags|=2048,Zr(9,{destroy:void 0},xT.bind(null,i,s,n,t),null),St===null)throw Error(V(349));r||ri&127||NT(i,t,n)}return n}function NT(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=tt.updateQueue,t===null?(t=Lc(),tt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function xT(e,t,n,i){t.value=n,t.getSnapshot=i,OT(t)&&MT(e)}function DT(e,t,n){return n(function(){OT(t)&&MT(e)})}function OT(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Je(e,n)}catch{return!0}}function MT(e){var t=er(e,2);t!==null&&Le(t,e,2)}function ld(e){var t=Se();if(typeof e=="function"){var n=e;if(e=n(),Fs){ki(!0);try{n()}finally{ki(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ai,lastRenderedState:e},t}function VT(e,t,n,i){return e.baseState=n,Um(e,bt,typeof i=="function"?i:ai)}function SI(e,t,n,i,s){if(jc(e))throw Error(V(485));if(e=t.action,e!==null){var r={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(a){r.listeners.push(a)}};Q.T!==null?n(!0):r.isTransition=!1,i(r),n=t.pending,n===null?(r.next=t.pending=r,kT(t,r)):(r.next=n.next,t.pending=n.next=r)}}function kT(e,t){var n=t.action,i=t.payload,s=e.state;if(t.isTransition){var r=Q.T,a={};Q.T=a;try{var l=n(s,i),u=Q.S;u!==null&&u(a,l),xy(e,t,l)}catch(h){ud(e,t,h)}finally{r!==null&&a.types!==null&&(r.types=a.types),Q.T=r}}else try{r=n(s,i),xy(e,t,r)}catch(h){ud(e,t,h)}}function xy(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){Dy(e,t,i)},function(i){return ud(e,t,i)}):Dy(e,t,n)}function Dy(e,t,n){t.status="fulfilled",t.value=n,LT(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,kT(e,n)))}function ud(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,LT(t),t=t.next;while(t!==i)}e.action=null}function LT(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function UT(e,t){return t}function Oy(e,t){if(ft){var n=St.formState;if(n!==null){t:{var i=tt;if(ft){if(Nt){e:{for(var s=Nt,r=an;s.nodeType!==8;){if(!r){s=null;break e}if(s=un(s.nextSibling),s===null){s=null;break e}}r=s.data,s=r==="F!"||r==="F"?s:null}if(s){Nt=un(s.nextSibling),i=s.data==="F!";break t}}ss(i)}i=!1}i&&(t=n[0])}}return n=Se(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:UT,lastRenderedState:t},n.queue=i,n=WT.bind(null,tt,i),i.dispatch=n,i=ld(!1),r=qm.bind(null,tt,!1,i.queue),i=Se(),s={state:t,dispatch:null,action:e,pending:null},i.queue=s,n=SI.bind(null,tt,s,r,n),s.dispatch=n,i.memoizedState=e,[t,n,!1]}function My(e){var t=qt();return PT(t,bt,e)}function PT(e,t,n){if(t=Um(e,t,UT)[0],e=uu(ai)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=sl(t)}catch(a){throw a===pa?kc:a}else i=t;t=qt();var s=t.queue,r=s.dispatch;return n!==t.memoizedState&&(tt.flags|=2048,Zr(9,{destroy:void 0},wI.bind(null,s,n),null)),[i,r,e]}function wI(e,t){e.action=t}function Vy(e){var t=qt(),n=bt;if(n!==null)return PT(t,n,e);qt(),t=t.memoizedState,n=qt();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function Zr(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=tt.updateQueue,t===null&&(t=Lc(),tt.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function jT(){return qt().memoizedState}function cu(e,t,n,i){var s=Se();tt.flags|=e,s.memoizedState=Zr(1|t,{destroy:void 0},n,i===void 0?null:i)}function Pc(e,t,n,i){var s=qt();i=i===void 0?null:i;var r=s.memoizedState.inst;bt!==null&&i!==null&&Dm(i,bt.memoizedState.deps)?s.memoizedState=Zr(t,r,n,i):(tt.flags|=e,s.memoizedState=Zr(1|t,r,n,i))}function ky(e,t){cu(8390656,8,e,t)}function Pm(e,t){Pc(2048,8,e,t)}function II(e){tt.flags|=4;var t=tt.updateQueue;if(t===null)t=Lc(),tt.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function zT(e){var t=qt().memoizedState;return II({ref:t,nextImpl:e}),function(){if(mt&2)throw Error(V(440));return t.impl.apply(void 0,arguments)}}function BT(e,t){return Pc(4,2,e,t)}function qT(e,t){return Pc(4,4,e,t)}function HT(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function FT(e,t,n){n=n!=null?n.concat([e]):null,Pc(4,4,HT.bind(null,t,e),n)}function jm(){}function GT(e,t){var n=qt();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&Dm(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function KT(e,t){var n=qt();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&Dm(t,i[1]))return i[0];if(i=e(),Fs){ki(!0);try{e()}finally{ki(!1)}}return n.memoizedState=[i,t],i}function zm(e,t,n){return n===void 0||ri&1073741824&&!(ct&261930)?e.memoizedState=t:(e.memoizedState=n,e=VE(),tt.lanes|=e,as|=e,n)}function QT(e,t,n,i){return Je(n,t)?n:Jr.current!==null?(e=zm(e,n,i),Je(e,t)||(Xt=!0),e):!(ri&42)||ri&1073741824&&!(ct&261930)?(Xt=!0,e.memoizedState=n):(e=VE(),tt.lanes|=e,as|=e,t)}function YT(e,t,n,i,s){var r=pt.p;pt.p=r!==0&&8>r?r:8;var a=Q.T,l={};Q.T=l,qm(e,!1,t,n);try{var u=s(),h=Q.S;if(h!==null&&h(l,u),u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=EI(u,i);yo(e,t,d,Ye(e))}else yo(e,t,i,Ye(e))}catch(m){yo(e,t,{then:function(){},status:"rejected",reason:m},Ye())}finally{pt.p=r,a!==null&&l.types!==null&&(a.types=l.types),Q.T=a}}function RI(){}function cd(e,t,n,i){if(e.tag!==5)throw Error(V(476));var s=XT(e).queue;YT(e,s,t,Vs,n===null?RI:function(){return $T(e),n(i)})}function XT(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Vs,baseState:Vs,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ai,lastRenderedState:Vs},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ai,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function $T(e){var t=XT(e);t.next===null&&(t=e.alternate.memoizedState),yo(e,t.next.queue,{},Ye())}function Bm(){return pe(zo)}function JT(){return qt().memoizedState}function ZT(){return qt().memoizedState}function CI(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Ye();e=Fi(n);var i=Gi(t,e,n);i!==null&&(Le(i,t,n),mo(i,t,n)),t={cache:Im()},e.payload=t;return}t=t.return}}function NI(e,t,n){var i=Ye();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},jc(e)?tE(t,n):(n=bm(e,t,n,i),n!==null&&(Le(n,e,i),eE(n,t,i)))}function WT(e,t,n){var i=Ye();yo(e,t,n,i)}function yo(e,t,n,i){var s={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(jc(e))tE(t,s);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var a=t.lastRenderedState,l=r(a,n);if(s.hasEagerState=!0,s.eagerState=l,Je(l,a))return Vc(e,t,s,0),St===null&&Mc(),!1}catch{}finally{}if(n=bm(e,t,s,i),n!==null)return Le(n,e,i),eE(n,t,i),!0}return!1}function qm(e,t,n,i){if(i={lane:2,revertLane:Jm(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},jc(e)){if(t)throw Error(V(479))}else t=bm(e,n,i,2),t!==null&&Le(t,e,2)}function jc(e){var t=e.alternate;return e===tt||t!==null&&t===tt}function tE(e,t){Pr=zu=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function eE(e,t,n){if(n&4194048){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,zv(e,n)}}var Uo={readContext:pe,use:Uc,useCallback:Ut,useContext:Ut,useEffect:Ut,useImperativeHandle:Ut,useLayoutEffect:Ut,useInsertionEffect:Ut,useMemo:Ut,useReducer:Ut,useRef:Ut,useState:Ut,useDebugValue:Ut,useDeferredValue:Ut,useTransition:Ut,useSyncExternalStore:Ut,useId:Ut,useHostTransitionStatus:Ut,useFormState:Ut,useActionState:Ut,useOptimistic:Ut,useMemoCache:Ut,useCacheRefresh:Ut};Uo.useEffectEvent=Ut;var nE={readContext:pe,use:Uc,useCallback:function(e,t){return Se().memoizedState=[e,t===void 0?null:t],e},useContext:pe,useEffect:ky,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,cu(4194308,4,HT.bind(null,t,e),n)},useLayoutEffect:function(e,t){return cu(4194308,4,e,t)},useInsertionEffect:function(e,t){cu(4,2,e,t)},useMemo:function(e,t){var n=Se();t=t===void 0?null:t;var i=e();if(Fs){ki(!0);try{e()}finally{ki(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=Se();if(n!==void 0){var s=n(t);if(Fs){ki(!0);try{n(t)}finally{ki(!1)}}}else s=t;return i.memoizedState=i.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},i.queue=e,e=e.dispatch=NI.bind(null,tt,e),[i.memoizedState,e]},useRef:function(e){var t=Se();return e={current:e},t.memoizedState=e},useState:function(e){e=ld(e);var t=e.queue,n=WT.bind(null,tt,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:jm,useDeferredValue:function(e,t){var n=Se();return zm(n,e,t)},useTransition:function(){var e=ld(!1);return e=YT.bind(null,tt,e.queue,!0,!1),Se().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=tt,s=Se();if(ft){if(n===void 0)throw Error(V(407));n=n()}else{if(n=t(),St===null)throw Error(V(349));ct&127||NT(i,t,n)}s.memoizedState=n;var r={value:n,getSnapshot:t};return s.queue=r,ky(DT.bind(null,i,r,e),[e]),i.flags|=2048,Zr(9,{destroy:void 0},xT.bind(null,i,r,n,t),null),n},useId:function(){var e=Se(),t=St.identifierPrefix;if(ft){var n=Nn,i=Cn;n=(i&~(1<<32-Qe(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Bu++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=bI++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Bm,useFormState:Oy,useActionState:Oy,useOptimistic:function(e){var t=Se();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=qm.bind(null,tt,!0,n),n.dispatch=t,[e,t]},useMemoCache:Lm,useCacheRefresh:function(){return Se().memoizedState=CI.bind(null,tt)},useEffectEvent:function(e){var t=Se(),n={impl:e};return t.memoizedState=n,function(){if(mt&2)throw Error(V(440));return n.impl.apply(void 0,arguments)}}},Hm={readContext:pe,use:Uc,useCallback:GT,useContext:pe,useEffect:Pm,useImperativeHandle:FT,useInsertionEffect:BT,useLayoutEffect:qT,useMemo:KT,useReducer:uu,useRef:jT,useState:function(){return uu(ai)},useDebugValue:jm,useDeferredValue:function(e,t){var n=qt();return QT(n,bt.memoizedState,e,t)},useTransition:function(){var e=uu(ai)[0],t=qt().memoizedState;return[typeof e=="boolean"?e:sl(e),t]},useSyncExternalStore:CT,useId:JT,useHostTransitionStatus:Bm,useFormState:My,useActionState:My,useOptimistic:function(e,t){var n=qt();return VT(n,bt,e,t)},useMemoCache:Lm,useCacheRefresh:ZT};Hm.useEffectEvent=zT;var iE={readContext:pe,use:Uc,useCallback:GT,useContext:pe,useEffect:Pm,useImperativeHandle:FT,useInsertionEffect:BT,useLayoutEffect:qT,useMemo:KT,useReducer:$h,useRef:jT,useState:function(){return $h(ai)},useDebugValue:jm,useDeferredValue:function(e,t){var n=qt();return bt===null?zm(n,e,t):QT(n,bt.memoizedState,e,t)},useTransition:function(){var e=$h(ai)[0],t=qt().memoizedState;return[typeof e=="boolean"?e:sl(e),t]},useSyncExternalStore:CT,useId:JT,useHostTransitionStatus:Bm,useFormState:Vy,useActionState:Vy,useOptimistic:function(e,t){var n=qt();return bt!==null?VT(n,bt,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Lm,useCacheRefresh:ZT};iE.useEffectEvent=zT;function Jh(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:Ot({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var hd={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Ye(),s=Fi(i);s.payload=t,n!=null&&(s.callback=n),t=Gi(e,s,i),t!==null&&(Le(t,e,i),mo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Ye(),s=Fi(i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Gi(e,s,i),t!==null&&(Le(t,e,i),mo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ye(),i=Fi(n);i.tag=2,t!=null&&(i.callback=t),t=Gi(e,i,n),t!==null&&(Le(t,e,n),mo(t,e,n))}};function Ly(e,t,n,i,s,r,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,r,a):t.prototype&&t.prototype.isPureReactComponent?!Oo(n,i)||!Oo(s,r):!0}function Uy(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&hd.enqueueReplaceState(t,t.state,null)}function Gs(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=Ot({},n));for(var s in e)n[s]===void 0&&(n[s]=e[s])}return n}function sE(e){Mu(e)}function rE(e){console.error(e)}function aE(e){Mu(e)}function qu(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function Py(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function fd(e,t,n){return n=Fi(n),n.tag=3,n.payload={element:null},n.callback=function(){qu(e,t)},n}function oE(e){return e=Fi(e),e.tag=3,e}function lE(e,t,n,i){var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var r=i.value;e.payload=function(){return s(r)},e.callback=function(){Py(t,n,i)}}var a=n.stateNode;a!==null&&typeof a.componentDidCatch=="function"&&(e.callback=function(){Py(t,n,i),typeof s!="function"&&(Ki===null?Ki=new Set([this]):Ki.add(this));var l=i.stack;this.componentDidCatch(i.value,{componentStack:l!==null?l:""})})}function xI(e,t,n,i,s){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&ma(t,n,s,!0),n=Ze.current,n!==null){switch(n.tag){case 31:case 13:return ln===null?Qu():n.alternate===null&&Pt===0&&(Pt=3),n.flags&=-257,n.flags|=65536,n.lanes=s,i===Uu?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),uf(e,i,s)),!1;case 22:return n.flags|=65536,i===Uu?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),uf(e,i,s)),!1}throw Error(V(435,n.tag))}return uf(e,i,s),Qu(),!1}if(ft)return t=Ze.current,t!==null?(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=s,i!==Wf&&(e=Error(V(422),{cause:i}),Vo(rn(e,n)))):(i!==Wf&&(t=Error(V(423),{cause:i}),Vo(rn(t,n))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,i=rn(i,n),s=fd(e.stateNode,i,s),Xh(e,s),Pt!==4&&(Pt=2)),!1;var r=Error(V(520),{cause:i});if(r=rn(r,n),To===null?To=[r]:To.push(r),Pt!==4&&(Pt=2),t===null)return!0;i=rn(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=s&-s,n.lanes|=e,e=fd(n.stateNode,i,e),Xh(n,e),!1;case 1:if(t=n.type,r=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(Ki===null||!Ki.has(r))))return n.flags|=65536,s&=-s,n.lanes|=s,s=oE(s),lE(s,e,n,i),Xh(n,s),!1}n=n.return}while(n!==null);return!1}var Fm=Error(V(461)),Xt=!1;function ce(e,t,n,i){t.child=e===null?bT(t,null,n,i):Hs(t,e.child,n,i)}function jy(e,t,n,i,s){n=n.render;var r=t.ref;if("ref"in i){var a={};for(var l in i)l!=="ref"&&(a[l]=i[l])}else a=i;return qs(t),i=Om(e,t,n,a,r,s),l=Mm(),e!==null&&!Xt?(Vm(e,t,s),oi(e,t,s)):(ft&&l&&Sm(t),t.flags|=1,ce(e,t,i,s),t.child)}function zy(e,t,n,i,s){if(e===null){var r=n.type;return typeof r=="function"&&!Am(r)&&r.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=r,uE(e,t,r,i,s)):(e=ou(n.type,null,i,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!Gm(e,s)){var a=r.memoizedProps;if(n=n.compare,n=n!==null?n:Oo,n(a,i)&&e.ref===t.ref)return oi(e,t,s)}return t.flags|=1,e=ei(r,i),e.ref=t.ref,e.return=t,t.child=e}function uE(e,t,n,i,s){if(e!==null){var r=e.memoizedProps;if(Oo(r,i)&&e.ref===t.ref)if(Xt=!1,t.pendingProps=i=r,Gm(e,s))e.flags&131072&&(Xt=!0);else return t.lanes=e.lanes,oi(e,t,s)}return dd(e,t,n,i,s)}function cE(e,t,n,i){var s=i.children,r=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if(t.flags&128){if(r=r!==null?r.baseLanes|n:n,e!==null){for(i=t.child=e.child,s=0;i!==null;)s=s|i.lanes|i.childLanes,i=i.sibling;i=s&~r}else i=0,t.child=null;return By(e,t,r,n,i)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&lu(t,r!==null?r.cachePool:null),r!==null?Ny(t,r):ad(),wT(t);else return i=t.lanes=536870912,By(e,t,r!==null?r.baseLanes|n:n,n,i)}else r!==null?(lu(t,r.cachePool),Ny(t,r),Ni(),t.memoizedState=null):(e!==null&&lu(t,null),ad(),Ni());return ce(e,t,s,n),t.child}function no(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function By(e,t,n,i,s){var r=Rm();return r=r===null?null:{parent:Qt._currentValue,pool:r},t.memoizedState={baseLanes:n,cachePool:r},e!==null&&lu(t,null),ad(),wT(t),e!==null&&ma(e,t,i,!0),t.childLanes=s,null}function hu(e,t){return t=Hu({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function qy(e,t,n){return Hs(t,e.child,null,n),e=hu(t,t.pendingProps),e.flags|=2,Be(t),t.memoizedState=null,e}function DI(e,t,n){var i=t.pendingProps,s=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ft){if(i.mode==="hidden")return e=hu(t,i),t.lanes=536870912,no(null,e);if(od(t),(e=Nt)?(e=nb(e,an),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:is!==null?{id:Cn,overflow:Nn}:null,retryLane:536870912,hydrationErrors:null},n=pT(e),n.return=t,t.child=n,de=t,Nt=null)):e=null,e===null)throw ss(t);return t.lanes=536870912,null}return hu(t,i)}var r=e.memoizedState;if(r!==null){var a=r.dehydrated;if(od(t),s)if(t.flags&256)t.flags&=-257,t=qy(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(V(558));else if(Xt||ma(e,t,n,!1),s=(n&e.childLanes)!==0,Xt||s){if(i=St,i!==null&&(a=Bv(i,n),a!==0&&a!==r.retryLane))throw r.retryLane=a,er(e,a),Le(i,e,a),Fm;Qu(),t=qy(e,t,n)}else e=r.treeContext,Nt=un(a.nextSibling),de=t,ft=!0,Hi=null,an=!1,e!==null&&yT(t,e),t=hu(t,i),t.flags|=4096;return t}return e=ei(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function fu(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(V(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function dd(e,t,n,i,s){return qs(t),n=Om(e,t,n,i,void 0,s),i=Mm(),e!==null&&!Xt?(Vm(e,t,s),oi(e,t,s)):(ft&&i&&Sm(t),t.flags|=1,ce(e,t,n,s),t.child)}function Hy(e,t,n,i,s,r){return qs(t),t.updateQueue=null,n=RT(t,i,n,s),IT(e),i=Mm(),e!==null&&!Xt?(Vm(e,t,r),oi(e,t,r)):(ft&&i&&Sm(t),t.flags|=1,ce(e,t,n,r),t.child)}function Fy(e,t,n,i,s){if(qs(t),t.stateNode===null){var r=Cr,a=n.contextType;typeof a=="object"&&a!==null&&(r=pe(a)),r=new n(i,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=hd,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=i,r.state=t.memoizedState,r.refs={},Nm(t),a=n.contextType,r.context=typeof a=="object"&&a!==null?pe(a):Cr,r.state=t.memoizedState,a=n.getDerivedStateFromProps,typeof a=="function"&&(Jh(t,n,a,i),r.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(a=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),a!==r.state&&hd.enqueueReplaceState(r,r.state,null),go(t,i,r,s),po(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){r=t.stateNode;var l=t.memoizedProps,u=Gs(n,l);r.props=u;var h=r.context,d=n.contextType;a=Cr,typeof d=="object"&&d!==null&&(a=pe(d));var m=n.getDerivedStateFromProps;d=typeof m=="function"||typeof r.getSnapshotBeforeUpdate=="function",l=t.pendingProps!==l,d||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(l||h!==a)&&Uy(t,r,i,a),Ii=!1;var p=t.memoizedState;r.state=p,go(t,i,r,s),po(),h=t.memoizedState,l||p!==h||Ii?(typeof m=="function"&&(Jh(t,n,m,i),h=t.memoizedState),(u=Ii||Ly(t,n,u,i,p,h,a))?(d||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=h),r.props=i,r.state=h,r.context=a,i=u):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{r=t.stateNode,sd(e,t),a=t.memoizedProps,d=Gs(n,a),r.props=d,m=t.pendingProps,p=r.context,h=n.contextType,u=Cr,typeof h=="object"&&h!==null&&(u=pe(h)),l=n.getDerivedStateFromProps,(h=typeof l=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(a!==m||p!==u)&&Uy(t,r,i,u),Ii=!1,p=t.memoizedState,r.state=p,go(t,i,r,s),po();var v=t.memoizedState;a!==m||p!==v||Ii||e!==null&&e.dependencies!==null&&Lu(e.dependencies)?(typeof l=="function"&&(Jh(t,n,l,i),v=t.memoizedState),(d=Ii||Ly(t,n,d,i,p,v,u)||e!==null&&e.dependencies!==null&&Lu(e.dependencies))?(h||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(i,v,u),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(i,v,u)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=v),r.props=i,r.state=v,r.context=u,i=d):(typeof r.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),i=!1)}return r=i,fu(e,t),i=(t.flags&128)!==0,r||i?(r=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&i?(t.child=Hs(t,e.child,null,s),t.child=Hs(t,null,n,s)):ce(e,t,n,s),t.memoizedState=r.state,e=t.child):e=oi(e,t,s),e}function Gy(e,t,n,i){return Bs(),t.flags|=256,ce(e,t,n,i),t.child}var Zh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Wh(e){return{baseLanes:e,cachePool:vT()}}function tf(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=He),e}function hE(e,t,n){var i=t.pendingProps,s=!1,r=(t.flags&128)!==0,a;if((a=r)||(a=e!==null&&e.memoizedState===null?!1:(Bt.current&2)!==0),a&&(s=!0,t.flags&=-129),a=(t.flags&32)!==0,t.flags&=-33,e===null){if(ft){if(s?Ci(t):Ni(),(e=Nt)?(e=nb(e,an),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:is!==null?{id:Cn,overflow:Nn}:null,retryLane:536870912,hydrationErrors:null},n=pT(e),n.return=t,t.child=n,de=t,Nt=null)):e=null,e===null)throw ss(t);return Rd(e)?t.lanes=32:t.lanes=536870912,null}var l=i.children;return i=i.fallback,s?(Ni(),s=t.mode,l=Hu({mode:"hidden",children:l},s),i=ks(i,s,n,null),l.return=t,i.return=t,l.sibling=i,t.child=l,i=t.child,i.memoizedState=Wh(n),i.childLanes=tf(e,a,n),t.memoizedState=Zh,no(null,i)):(Ci(t),md(t,l))}var u=e.memoizedState;if(u!==null&&(l=u.dehydrated,l!==null)){if(r)t.flags&256?(Ci(t),t.flags&=-257,t=ef(e,t,n)):t.memoizedState!==null?(Ni(),t.child=e.child,t.flags|=128,t=null):(Ni(),l=i.fallback,s=t.mode,i=Hu({mode:"visible",children:i.children},s),l=ks(l,s,n,null),l.flags|=2,i.return=t,l.return=t,i.sibling=l,t.child=i,Hs(t,e.child,null,n),i=t.child,i.memoizedState=Wh(n),i.childLanes=tf(e,a,n),t.memoizedState=Zh,t=no(null,i));else if(Ci(t),Rd(l)){if(a=l.nextSibling&&l.nextSibling.dataset,a)var h=a.dgst;a=h,i=Error(V(419)),i.stack="",i.digest=a,Vo({value:i,source:null,stack:null}),t=ef(e,t,n)}else if(Xt||ma(e,t,n,!1),a=(n&e.childLanes)!==0,Xt||a){if(a=St,a!==null&&(i=Bv(a,n),i!==0&&i!==u.retryLane))throw u.retryLane=i,er(e,i),Le(a,e,i),Fm;Id(l)||Qu(),t=ef(e,t,n)}else Id(l)?(t.flags|=192,t.child=e.child,t=null):(e=u.treeContext,Nt=un(l.nextSibling),de=t,ft=!0,Hi=null,an=!1,e!==null&&yT(t,e),t=md(t,i.children),t.flags|=4096);return t}return s?(Ni(),l=i.fallback,s=t.mode,u=e.child,h=u.sibling,i=ei(u,{mode:"hidden",children:i.children}),i.subtreeFlags=u.subtreeFlags&65011712,h!==null?l=ei(h,l):(l=ks(l,s,n,null),l.flags|=2),l.return=t,i.return=t,i.sibling=l,t.child=i,no(null,i),i=t.child,l=e.child.memoizedState,l===null?l=Wh(n):(s=l.cachePool,s!==null?(u=Qt._currentValue,s=s.parent!==u?{parent:u,pool:u}:s):s=vT(),l={baseLanes:l.baseLanes|n,cachePool:s}),i.memoizedState=l,i.childLanes=tf(e,a,n),t.memoizedState=Zh,no(e.child,i)):(Ci(t),n=e.child,e=n.sibling,n=ei(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(a=t.deletions,a===null?(t.deletions=[e],t.flags|=16):a.push(e)),t.child=n,t.memoizedState=null,n)}function md(e,t){return t=Hu({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Hu(e,t){return e=qe(22,e,null,t),e.lanes=0,e}function ef(e,t,n){return Hs(t,e.child,null,n),e=md(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ky(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),ed(e.return,t,n)}function nf(e,t,n,i,s,r){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s,treeForkCount:r}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=i,a.tail=n,a.tailMode=s,a.treeForkCount=r)}function fE(e,t,n){var i=t.pendingProps,s=i.revealOrder,r=i.tail;i=i.children;var a=Bt.current,l=(a&2)!==0;if(l?(a=a&1|2,t.flags|=128):a&=1,It(Bt,a),ce(e,t,i,n),i=ft?Mo:0,!l&&e!==null&&e.flags&128)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ky(e,n,t);else if(e.tag===19)Ky(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&ju(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),nf(t,!1,s,n,r,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&ju(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}nf(t,!0,n,null,r,i);break;case"together":nf(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function oi(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),as|=t.lanes,!(n&t.childLanes))if(e!==null){if(ma(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(V(153));if(t.child!==null){for(e=t.child,n=ei(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ei(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Gm(e,t){return e.lanes&t?!0:(e=e.dependencies,!!(e!==null&&Lu(e)))}function OI(e,t,n){switch(t.tag){case 3:Nu(t,t.stateNode.containerInfo),Ri(t,Qt,e.memoizedState.cache),Bs();break;case 27:case 5:qf(t);break;case 4:Nu(t,t.stateNode.containerInfo);break;case 10:Ri(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,od(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Ci(t),t.flags|=128,null):n&t.child.childLanes?hE(e,t,n):(Ci(t),e=oi(e,t,n),e!==null?e.sibling:null);Ci(t);break;case 19:var s=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(ma(e,t,n,!1),i=(n&t.childLanes)!==0),s){if(i)return fE(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),It(Bt,Bt.current),i)break;return null;case 22:return t.lanes=0,cE(e,t,n,t.pendingProps);case 24:Ri(t,Qt,e.memoizedState.cache)}return oi(e,t,n)}function dE(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Xt=!0;else{if(!Gm(e,n)&&!(t.flags&128))return Xt=!1,OI(e,t,n);Xt=!!(e.flags&131072)}else Xt=!1,ft&&t.flags&1048576&&gT(t,Mo,t.index);switch(t.lanes=0,t.tag){case 16:t:{var i=t.pendingProps;if(e=Ns(t.elementType),t.type=e,typeof e=="function")Am(e)?(i=Gs(e,i),t.tag=1,t=Fy(null,t,e,i,n)):(t.tag=0,t=dd(null,t,e,i,n));else{if(e!=null){var s=e.$$typeof;if(s===um){t.tag=11,t=jy(null,t,e,i,n);break t}else if(s===cm){t.tag=14,t=zy(null,t,e,i,n);break t}}throw t=zf(e)||e,Error(V(306,t,""))}}return t;case 0:return dd(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,s=Gs(i,t.pendingProps),Fy(e,t,i,s,n);case 3:t:{if(Nu(t,t.stateNode.containerInfo),e===null)throw Error(V(387));i=t.pendingProps;var r=t.memoizedState;s=r.element,sd(e,t),go(t,i,null,n);var a=t.memoizedState;if(i=a.cache,Ri(t,Qt,i),i!==r.cache&&nd(t,[Qt],n,!0),po(),i=a.element,r.isDehydrated)if(r={element:i,isDehydrated:!1,cache:a.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=Gy(e,t,i,n);break t}else if(i!==s){s=rn(Error(V(424)),t),Vo(s),t=Gy(e,t,i,n);break t}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Nt=un(e.firstChild),de=t,ft=!0,Hi=null,an=!0,n=bT(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Bs(),i===s){t=oi(e,t,n);break t}ce(e,t,i,n)}t=t.child}return t;case 26:return fu(e,t),e===null?(n=f_(t.type,null,t.pendingProps,null))?t.memoizedState=n:ft||(n=t.type,e=t.pendingProps,i=Ju(qi.current).createElement(n),i[fe]=t,i[Ue]=e,ge(i,n,e),oe(i),t.stateNode=i):t.memoizedState=f_(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return qf(t),e===null&&ft&&(i=t.stateNode=ib(t.type,t.pendingProps,qi.current),de=t,an=!0,s=Nt,gs(t.type)?(Cd=s,Nt=un(i.firstChild)):Nt=s),ce(e,t,t.pendingProps.children,n),fu(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ft&&((s=i=Nt)&&(i=lR(i,t.type,t.pendingProps,an),i!==null?(t.stateNode=i,de=t,Nt=un(i.firstChild),an=!1,s=!0):s=!1),s||ss(t)),qf(t),s=t.type,r=t.pendingProps,a=e!==null?e.memoizedProps:null,i=r.children,Sd(s,r)?i=null:a!==null&&Sd(s,a)&&(t.flags|=32),t.memoizedState!==null&&(s=Om(e,t,AI,null,null,n),zo._currentValue=s),fu(e,t),ce(e,t,i,n),t.child;case 6:return e===null&&ft&&((e=n=Nt)&&(n=uR(n,t.pendingProps,an),n!==null?(t.stateNode=n,de=t,Nt=null,e=!0):e=!1),e||ss(t)),null;case 13:return hE(e,t,n);case 4:return Nu(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Hs(t,null,i,n):ce(e,t,i,n),t.child;case 11:return jy(e,t,t.type,t.pendingProps,n);case 7:return ce(e,t,t.pendingProps,n),t.child;case 8:return ce(e,t,t.pendingProps.children,n),t.child;case 12:return ce(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,Ri(t,t.type,i.value),ce(e,t,i.children,n),t.child;case 9:return s=t.type._context,i=t.pendingProps.children,qs(t),s=pe(s),i=i(s),t.flags|=1,ce(e,t,i,n),t.child;case 14:return zy(e,t,t.type,t.pendingProps,n);case 15:return uE(e,t,t.type,t.pendingProps,n);case 19:return fE(e,t,n);case 31:return DI(e,t,n);case 22:return cE(e,t,n,t.pendingProps);case 24:return qs(t),i=pe(Qt),e===null?(s=Rm(),s===null&&(s=St,r=Im(),s.pooledCache=r,r.refCount++,r!==null&&(s.pooledCacheLanes|=n),s=r),t.memoizedState={parent:i,cache:s},Nm(t),Ri(t,Qt,s)):(e.lanes&n&&(sd(e,t),go(t,null,null,n),po()),s=e.memoizedState,r=t.memoizedState,s.parent!==i?(s={parent:i,cache:i},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),Ri(t,Qt,i)):(i=r.cache,Ri(t,Qt,i),i!==s.cache&&nd(t,[Qt],n,!0))),ce(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(V(156,t.tag))}function Fn(e){e.flags|=4}function sf(e,t,n,i,s){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(UE())e.flags|=8192;else throw Us=Uu,Cm}else e.flags&=-16777217}function Qy(e,t){if(t.type!=="stylesheet"||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!ab(t))if(UE())e.flags|=8192;else throw Us=Uu,Cm}function Fl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Pv():536870912,e.lanes|=t,Wr|=t)}function Ya(e,t){if(!ft)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Ct(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&65011712,i|=s.flags&65011712,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function MI(e,t,n){var i=t.pendingProps;switch(wm(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ct(t),null;case 1:return Ct(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),ni(Qt),Qr(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(hr(t)?Fn(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Yh())),Ct(t),null;case 26:var s=t.type,r=t.memoizedState;return e===null?(Fn(t),r!==null?(Ct(t),Qy(t,r)):(Ct(t),sf(t,s,null,i,n))):r?r!==e.memoizedState?(Fn(t),Ct(t),Qy(t,r)):(Ct(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&Fn(t),Ct(t),sf(t,s,e,i,n)),null;case 27:if(xu(t),n=qi.current,s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Fn(t);else{if(!i){if(t.stateNode===null)throw Error(V(166));return Ct(t),null}e=Dn.current,hr(t)?by(t):(e=ib(s,i,n),t.stateNode=e,Fn(t))}return Ct(t),null;case 5:if(xu(t),s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Fn(t);else{if(!i){if(t.stateNode===null)throw Error(V(166));return Ct(t),null}if(r=Dn.current,hr(t))by(t);else{var a=Ju(qi.current);switch(r){case 1:r=a.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:r=a.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":r=a.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":r=a.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":r=a.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof i.is=="string"?a.createElement("select",{is:i.is}):a.createElement("select"),i.multiple?r.multiple=!0:i.size&&(r.size=i.size);break;default:r=typeof i.is=="string"?a.createElement(s,{is:i.is}):a.createElement(s)}}r[fe]=t,r[Ue]=i;t:for(a=t.child;a!==null;){if(a.tag===5||a.tag===6)r.appendChild(a.stateNode);else if(a.tag!==4&&a.tag!==27&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break t;for(;a.sibling===null;){if(a.return===null||a.return===t)break t;a=a.return}a.sibling.return=a.return,a=a.sibling}t.stateNode=r;t:switch(ge(r,s,i),s){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&Fn(t)}}return Ct(t),sf(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Fn(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(V(166));if(e=qi.current,hr(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,s=de,s!==null)switch(s.tag){case 27:case 5:i=s.memoizedProps}e[fe]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||WE(e.nodeValue,n)),e||ss(t,!0)}else e=Ju(e).createTextNode(i),e[fe]=t,t.stateNode=e}return Ct(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=hr(t),n!==null){if(e===null){if(!i)throw Error(V(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(V(557));e[fe]=t}else Bs(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ct(t),e=!1}else n=Yh(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Be(t),t):(Be(t),null);if(t.flags&128)throw Error(V(558))}return Ct(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=hr(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(V(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(V(317));s[fe]=t}else Bs(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ct(t),s=!1}else s=Yh(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(Be(t),t):(Be(t),null)}return Be(t),t.flags&128?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,s=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(s=i.alternate.memoizedState.cachePool.pool),r=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(r=i.memoizedState.cachePool.pool),r!==s&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Fl(t,t.updateQueue),Ct(t),null);case 4:return Qr(),e===null&&Zm(t.stateNode.containerInfo),Ct(t),null;case 10:return ni(t.type),Ct(t),null;case 19:if(le(Bt),i=t.memoizedState,i===null)return Ct(t),null;if(s=(t.flags&128)!==0,r=i.rendering,r===null)if(s)Ya(i,!1);else{if(Pt!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(r=ju(e),r!==null){for(t.flags|=128,Ya(i,!1),e=r.updateQueue,t.updateQueue=e,Fl(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)mT(n,e),n=n.sibling;return It(Bt,Bt.current&1|2),ft&&Yn(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&Ge()>Gu&&(t.flags|=128,s=!0,Ya(i,!1),t.lanes=4194304)}else{if(!s)if(e=ju(r),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,Fl(t,e),Ya(i,!0),i.tail===null&&i.tailMode==="hidden"&&!r.alternate&&!ft)return Ct(t),null}else 2*Ge()-i.renderingStartTime>Gu&&n!==536870912&&(t.flags|=128,s=!0,Ya(i,!1),t.lanes=4194304);i.isBackwards?(r.sibling=t.child,t.child=r):(e=i.last,e!==null?e.sibling=r:t.child=r,i.last=r)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Ge(),e.sibling=null,n=Bt.current,It(Bt,s?n&1|2:n&1),ft&&Yn(t,i.treeForkCount),e):(Ct(t),null);case 22:case 23:return Be(t),xm(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?n&536870912&&!(t.flags&128)&&(Ct(t),t.subtreeFlags&6&&(t.flags|=8192)):Ct(t),n=t.updateQueue,n!==null&&Fl(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&le(Ls),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ni(Qt),Ct(t),null;case 25:return null;case 30:return null}throw Error(V(156,t.tag))}function VI(e,t){switch(wm(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ni(Qt),Qr(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return xu(t),null;case 31:if(t.memoizedState!==null){if(Be(t),t.alternate===null)throw Error(V(340));Bs()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Be(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(V(340));Bs()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return le(Bt),null;case 4:return Qr(),null;case 10:return ni(t.type),null;case 22:case 23:return Be(t),xm(),e!==null&&le(Ls),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ni(Qt),null;case 25:return null;default:return null}}function mE(e,t){switch(wm(t),t.tag){case 3:ni(Qt),Qr();break;case 26:case 27:case 5:xu(t);break;case 4:Qr();break;case 31:t.memoizedState!==null&&Be(t);break;case 13:Be(t);break;case 19:le(Bt);break;case 10:ni(t.type);break;case 22:case 23:Be(t),xm(),e!==null&&le(Ls);break;case 24:ni(Qt)}}function rl(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var s=i.next;n=s;do{if((n.tag&e)===e){i=void 0;var r=n.create,a=n.inst;i=r(),a.destroy=i}n=n.next}while(n!==s)}}catch(l){_t(t,t.return,l)}}function rs(e,t,n){try{var i=t.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var r=s.next;i=r;do{if((i.tag&e)===e){var a=i.inst,l=a.destroy;if(l!==void 0){a.destroy=void 0,s=t;var u=n,h=l;try{h()}catch(d){_t(s,u,d)}}}i=i.next}while(i!==r)}}catch(d){_t(t,t.return,d)}}function pE(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{ST(t,n)}catch(i){_t(e,e.return,i)}}}function gE(e,t,n){n.props=Gs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){_t(e,t,i)}}function _o(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(s){_t(e,t,s)}}function xn(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(s){_t(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(s){_t(e,t,s)}else n.current=null}function yE(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(s){_t(e,e.return,s)}}function rf(e,t,n){try{var i=e.stateNode;nR(i,e.type,n,t),i[Ue]=t}catch(s){_t(e,e.return,s)}}function _E(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&gs(e.type)||e.tag===4}function af(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||_E(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&gs(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function pd(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Jn));else if(i!==4&&(i===27&&gs(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(pd(e,t,n),e=e.sibling;e!==null;)pd(e,t,n),e=e.sibling}function Fu(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&gs(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Fu(e,t,n),e=e.sibling;e!==null;)Fu(e,t,n),e=e.sibling}function vE(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);ge(t,i,n),t[fe]=e,t[Ue]=n}catch(r){_t(e,e.return,r)}}var Xn=!1,Kt=!1,of=!1,Yy=typeof WeakSet=="function"?WeakSet:Set,ae=null;function kI(e,t){if(e=e.containerInfo,bd=ec,e=aT(e),Tm(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else t:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var s=i.anchorOffset,r=i.focusNode;i=i.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break t}var a=0,l=-1,u=-1,h=0,d=0,m=e,p=null;e:for(;;){for(var v;m!==n||s!==0&&m.nodeType!==3||(l=a+s),m!==r||i!==0&&m.nodeType!==3||(u=a+i),m.nodeType===3&&(a+=m.nodeValue.length),(v=m.firstChild)!==null;)p=m,m=v;for(;;){if(m===e)break e;if(p===n&&++h===s&&(l=a),p===r&&++d===i&&(u=a),(v=m.nextSibling)!==null)break;m=p,p=m.parentNode}m=v}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ad={focusedElem:e,selectionRange:n},ec=!1,ae=t;ae!==null;)if(t=ae,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ae=e;else for(;ae!==null;){switch(t=ae,r=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)s=e[n],s.ref.impl=s.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&r!==null){e=void 0,n=t,s=r.memoizedProps,r=r.memoizedState,i=n.stateNode;try{var C=Gs(n.type,s);e=i.getSnapshotBeforeUpdate(C,r),i.__reactInternalSnapshotBeforeUpdate=e}catch(M){_t(n,n.return,M)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)wd(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":wd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(V(163))}if(e=t.sibling,e!==null){e.return=t.return,ae=e;break}ae=t.return}}function TE(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Kn(e,n),i&4&&rl(5,n);break;case 1:if(Kn(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(a){_t(n,n.return,a)}else{var s=Gs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(a){_t(n,n.return,a)}}i&64&&pE(n),i&512&&_o(n,n.return);break;case 3:if(Kn(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{ST(e,t)}catch(a){_t(n,n.return,a)}}break;case 27:t===null&&i&4&&vE(n);case 26:case 5:Kn(e,n),t===null&&i&4&&yE(n),i&512&&_o(n,n.return);break;case 12:Kn(e,n);break;case 31:Kn(e,n),i&4&&AE(e,n);break;case 13:Kn(e,n),i&4&&SE(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=FI.bind(null,n),cR(e,n))));break;case 22:if(i=n.memoizedState!==null||Xn,!i){t=t!==null&&t.memoizedState!==null||Kt,s=Xn;var r=Kt;Xn=i,(Kt=t)&&!r?Qn(e,n,(n.subtreeFlags&8772)!==0):Kn(e,n),Xn=s,Kt=r}break;case 30:break;default:Kn(e,n)}}function EE(e){var t=e.alternate;t!==null&&(e.alternate=null,EE(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&mm(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Mt=null,Oe=!1;function Gn(e,t,n){for(n=n.child;n!==null;)bE(e,t,n),n=n.sibling}function bE(e,t,n){if(Ke&&typeof Ke.onCommitFiberUnmount=="function")try{Ke.onCommitFiberUnmount(Zo,n)}catch{}switch(n.tag){case 26:Kt||xn(n,t),Gn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Kt||xn(n,t);var i=Mt,s=Oe;gs(n.type)&&(Mt=n.stateNode,Oe=!1),Gn(e,t,n),bo(n.stateNode),Mt=i,Oe=s;break;case 5:Kt||xn(n,t);case 6:if(i=Mt,s=Oe,Mt=null,Gn(e,t,n),Mt=i,Oe=s,Mt!==null)if(Oe)try{(Mt.nodeType===9?Mt.body:Mt.nodeName==="HTML"?Mt.ownerDocument.body:Mt).removeChild(n.stateNode)}catch(r){_t(n,t,r)}else try{Mt.removeChild(n.stateNode)}catch(r){_t(n,t,r)}break;case 18:Mt!==null&&(Oe?(e=Mt,o_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),ia(e)):o_(Mt,n.stateNode));break;case 4:i=Mt,s=Oe,Mt=n.stateNode.containerInfo,Oe=!0,Gn(e,t,n),Mt=i,Oe=s;break;case 0:case 11:case 14:case 15:rs(2,n,t),Kt||rs(4,n,t),Gn(e,t,n);break;case 1:Kt||(xn(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&gE(n,t,i)),Gn(e,t,n);break;case 21:Gn(e,t,n);break;case 22:Kt=(i=Kt)||n.memoizedState!==null,Gn(e,t,n),Kt=i;break;default:Gn(e,t,n)}}function AE(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ia(e)}catch(n){_t(t,t.return,n)}}}function SE(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ia(e)}catch(n){_t(t,t.return,n)}}function LI(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Yy),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Yy),t;default:throw Error(V(435,e.tag))}}function Gl(e,t){var n=LI(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var s=GI.bind(null,e,i);i.then(s,s)}})}function xe(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i],r=e,a=t,l=a;t:for(;l!==null;){switch(l.tag){case 27:if(gs(l.type)){Mt=l.stateNode,Oe=!1;break t}break;case 5:Mt=l.stateNode,Oe=!1;break t;case 3:case 4:Mt=l.stateNode.containerInfo,Oe=!0;break t}l=l.return}if(Mt===null)throw Error(V(160));bE(r,a,s),Mt=null,Oe=!1,r=s.alternate,r!==null&&(r.return=null),s.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)wE(t,e),t=t.sibling}var mn=null;function wE(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:xe(t,e),De(e),i&4&&(rs(3,e,e.return),rl(3,e),rs(5,e,e.return));break;case 1:xe(t,e),De(e),i&512&&(Kt||n===null||xn(n,n.return)),i&64&&Xn&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var s=mn;if(xe(t,e),De(e),i&512&&(Kt||n===null||xn(n,n.return)),i&4){var r=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){t:{i=e.type,n=e.memoizedProps,s=s.ownerDocument||s;e:switch(i){case"title":r=s.getElementsByTagName("title")[0],(!r||r[el]||r[fe]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=s.createElement(i),s.head.insertBefore(r,s.querySelector("head > title"))),ge(r,i,n),r[fe]=e,oe(r),i=r;break t;case"link":var a=m_("link","href",s).get(i+(n.href||""));if(a){for(var l=0;l<a.length;l++)if(r=a[l],r.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&r.getAttribute("rel")===(n.rel==null?null:n.rel)&&r.getAttribute("title")===(n.title==null?null:n.title)&&r.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){a.splice(l,1);break e}}r=s.createElement(i),ge(r,i,n),s.head.appendChild(r);break;case"meta":if(a=m_("meta","content",s).get(i+(n.content||""))){for(l=0;l<a.length;l++)if(r=a[l],r.getAttribute("content")===(n.content==null?null:""+n.content)&&r.getAttribute("name")===(n.name==null?null:n.name)&&r.getAttribute("property")===(n.property==null?null:n.property)&&r.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute("charset")===(n.charSet==null?null:n.charSet)){a.splice(l,1);break e}}r=s.createElement(i),ge(r,i,n),s.head.appendChild(r);break;default:throw Error(V(468,i))}r[fe]=e,oe(r),i=r}e.stateNode=i}else p_(s,e.type,e.stateNode);else e.stateNode=d_(s,i,e.memoizedProps);else r!==i?(r===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):r.count--,i===null?p_(s,e.type,e.stateNode):d_(s,i,e.memoizedProps)):i===null&&e.stateNode!==null&&rf(e,e.memoizedProps,n.memoizedProps)}break;case 27:xe(t,e),De(e),i&512&&(Kt||n===null||xn(n,n.return)),n!==null&&i&4&&rf(e,e.memoizedProps,n.memoizedProps);break;case 5:if(xe(t,e),De(e),i&512&&(Kt||n===null||xn(n,n.return)),e.flags&32){s=e.stateNode;try{Xr(s,"")}catch(C){_t(e,e.return,C)}}i&4&&e.stateNode!=null&&(s=e.memoizedProps,rf(e,s,n!==null?n.memoizedProps:s)),i&1024&&(of=!0);break;case 6:if(xe(t,e),De(e),i&4){if(e.stateNode===null)throw Error(V(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(C){_t(e,e.return,C)}}break;case 3:if(pu=null,s=mn,mn=Zu(t.containerInfo),xe(t,e),mn=s,De(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ia(t.containerInfo)}catch(C){_t(e,e.return,C)}of&&(of=!1,IE(e));break;case 4:i=mn,mn=Zu(e.stateNode.containerInfo),xe(t,e),De(e),mn=i;break;case 12:xe(t,e),De(e);break;case 31:xe(t,e),De(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Gl(e,i)));break;case 13:xe(t,e),De(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(zc=Ge()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Gl(e,i)));break;case 22:s=e.memoizedState!==null;var u=n!==null&&n.memoizedState!==null,h=Xn,d=Kt;if(Xn=h||s,Kt=d||u,xe(t,e),Kt=d,Xn=h,De(e),i&8192)t:for(t=e.stateNode,t._visibility=s?t._visibility&-2:t._visibility|1,s&&(n===null||u||Xn||Kt||xs(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){u=n=t;try{if(r=u.stateNode,s)a=r.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none";else{l=u.stateNode;var m=u.memoizedProps.style,p=m!=null&&m.hasOwnProperty("display")?m.display:null;l.style.display=p==null||typeof p=="boolean"?"":(""+p).trim()}}catch(C){_t(u,u.return,C)}}}else if(t.tag===6){if(n===null){u=t;try{u.stateNode.nodeValue=s?"":u.memoizedProps}catch(C){_t(u,u.return,C)}}}else if(t.tag===18){if(n===null){u=t;try{var v=u.stateNode;s?l_(v,!0):l_(u.stateNode,!1)}catch(C){_t(u,u.return,C)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,Gl(e,n))));break;case 19:xe(t,e),De(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Gl(e,i)));break;case 30:break;case 21:break;default:xe(t,e),De(e)}}function De(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(_E(i)){n=i;break}i=i.return}if(n==null)throw Error(V(160));switch(n.tag){case 27:var s=n.stateNode,r=af(e);Fu(e,r,s);break;case 5:var a=n.stateNode;n.flags&32&&(Xr(a,""),n.flags&=-33);var l=af(e);Fu(e,l,a);break;case 3:case 4:var u=n.stateNode.containerInfo,h=af(e);pd(e,h,u);break;default:throw Error(V(161))}}catch(d){_t(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function IE(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;IE(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Kn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)TE(e,t.alternate,t),t=t.sibling}function xs(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:rs(4,t,t.return),xs(t);break;case 1:xn(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&gE(t,t.return,n),xs(t);break;case 27:bo(t.stateNode);case 26:case 5:xn(t,t.return),xs(t);break;case 22:t.memoizedState===null&&xs(t);break;case 30:xs(t);break;default:xs(t)}e=e.sibling}}function Qn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,s=e,r=t,a=r.flags;switch(r.tag){case 0:case 11:case 15:Qn(s,r,n),rl(4,r);break;case 1:if(Qn(s,r,n),i=r,s=i.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(h){_t(i,i.return,h)}if(i=r,s=i.updateQueue,s!==null){var l=i.stateNode;try{var u=s.shared.hiddenCallbacks;if(u!==null)for(s.shared.hiddenCallbacks=null,s=0;s<u.length;s++)AT(u[s],l)}catch(h){_t(i,i.return,h)}}n&&a&64&&pE(r),_o(r,r.return);break;case 27:vE(r);case 26:case 5:Qn(s,r,n),n&&i===null&&a&4&&yE(r),_o(r,r.return);break;case 12:Qn(s,r,n);break;case 31:Qn(s,r,n),n&&a&4&&AE(s,r);break;case 13:Qn(s,r,n),n&&a&4&&SE(s,r);break;case 22:r.memoizedState===null&&Qn(s,r,n),_o(r,r.return);break;case 30:break;default:Qn(s,r,n)}t=t.sibling}}function Km(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&il(n))}function Qm(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&il(e))}function dn(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)RE(e,t,n,i),t=t.sibling}function RE(e,t,n,i){var s=t.flags;switch(t.tag){case 0:case 11:case 15:dn(e,t,n,i),s&2048&&rl(9,t);break;case 1:dn(e,t,n,i);break;case 3:dn(e,t,n,i),s&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&il(e)));break;case 12:if(s&2048){dn(e,t,n,i),e=t.stateNode;try{var r=t.memoizedProps,a=r.id,l=r.onPostCommit;typeof l=="function"&&l(a,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(u){_t(t,t.return,u)}}else dn(e,t,n,i);break;case 31:dn(e,t,n,i);break;case 13:dn(e,t,n,i);break;case 23:break;case 22:r=t.stateNode,a=t.alternate,t.memoizedState!==null?r._visibility&2?dn(e,t,n,i):vo(e,t):r._visibility&2?dn(e,t,n,i):(r._visibility|=2,mr(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),s&2048&&Km(a,t);break;case 24:dn(e,t,n,i),s&2048&&Qm(t.alternate,t);break;default:dn(e,t,n,i)}}function mr(e,t,n,i,s){for(s=s&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var r=e,a=t,l=n,u=i,h=a.flags;switch(a.tag){case 0:case 11:case 15:mr(r,a,l,u,s),rl(8,a);break;case 23:break;case 22:var d=a.stateNode;a.memoizedState!==null?d._visibility&2?mr(r,a,l,u,s):vo(r,a):(d._visibility|=2,mr(r,a,l,u,s)),s&&h&2048&&Km(a.alternate,a);break;case 24:mr(r,a,l,u,s),s&&h&2048&&Qm(a.alternate,a);break;default:mr(r,a,l,u,s)}t=t.sibling}}function vo(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,s=i.flags;switch(i.tag){case 22:vo(n,i),s&2048&&Km(i.alternate,i);break;case 24:vo(n,i),s&2048&&Qm(i.alternate,i);break;default:vo(n,i)}t=t.sibling}}var io=8192;function fr(e,t,n){if(e.subtreeFlags&io)for(e=e.child;e!==null;)CE(e,t,n),e=e.sibling}function CE(e,t,n){switch(e.tag){case 26:fr(e,t,n),e.flags&io&&e.memoizedState!==null&&bR(n,mn,e.memoizedState,e.memoizedProps);break;case 5:fr(e,t,n);break;case 3:case 4:var i=mn;mn=Zu(e.stateNode.containerInfo),fr(e,t,n),mn=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=io,io=16777216,fr(e,t,n),io=i):fr(e,t,n));break;default:fr(e,t,n)}}function NE(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Xa(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];ae=i,DE(i,e)}NE(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)xE(e),e=e.sibling}function xE(e){switch(e.tag){case 0:case 11:case 15:Xa(e),e.flags&2048&&rs(9,e,e.return);break;case 3:Xa(e);break;case 12:Xa(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,du(e)):Xa(e);break;default:Xa(e)}}function du(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];ae=i,DE(i,e)}NE(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:rs(8,t,t.return),du(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,du(t));break;default:du(t)}e=e.sibling}}function DE(e,t){for(;ae!==null;){var n=ae;switch(n.tag){case 0:case 11:case 15:rs(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:il(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,ae=i;else t:for(n=e;ae!==null;){i=ae;var s=i.sibling,r=i.return;if(EE(i),i===n){ae=null;break t}if(s!==null){s.return=r,ae=s;break t}ae=r}}}var UI={getCacheForType:function(e){var t=pe(Qt),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return pe(Qt).controller.signal}},PI=typeof WeakMap=="function"?WeakMap:Map,mt=0,St=null,at=null,ct=0,yt=0,ze=null,Ui=!1,ga=!1,Ym=!1,li=0,Pt=0,as=0,Ps=0,Xm=0,He=0,Wr=0,To=null,Me=null,gd=!1,zc=0,OE=0,Gu=1/0,Ku=null,Ki=null,ee=0,Qi=null,ta=null,ii=0,yd=0,_d=null,ME=null,Eo=0,vd=null;function Ye(){return mt&2&&ct!==0?ct&-ct:Q.T!==null?Jm():qv()}function VE(){if(He===0)if(!(ct&536870912)||ft){var e=Ul;Ul<<=1,!(Ul&3932160)&&(Ul=262144),He=e}else He=536870912;return e=Ze.current,e!==null&&(e.flags|=32),He}function Le(e,t,n){(e===St&&(yt===2||yt===9)||e.cancelPendingCommit!==null)&&(ea(e,0),Pi(e,ct,He,!1)),tl(e,n),(!(mt&2)||e!==St)&&(e===St&&(!(mt&2)&&(Ps|=n),Pt===4&&Pi(e,ct,He,!1)),zn(e))}function kE(e,t,n){if(mt&6)throw Error(V(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Wo(e,t),s=i?BI(e,t):lf(e,t,!0),r=i;do{if(s===0){ga&&!i&&Pi(e,t,0,!1);break}else{if(n=e.current.alternate,r&&!jI(n)){s=lf(e,t,!1),r=!1;continue}if(s===2){if(r=t,e.errorRecoveryDisabledLanes&r)var a=0;else a=e.pendingLanes&-536870913,a=a!==0?a:a&536870912?536870912:0;if(a!==0){t=a;t:{var l=e;s=To;var u=l.current.memoizedState.isDehydrated;if(u&&(ea(l,a).flags|=256),a=lf(l,a,!1),a!==2){if(Ym&&!u){l.errorRecoveryDisabledLanes|=r,Ps|=r,s=4;break t}r=Me,Me=s,r!==null&&(Me===null?Me=r:Me.push.apply(Me,r))}s=a}if(r=!1,s!==2)continue}}if(s===1){ea(e,0),Pi(e,t,0,!0);break}t:{switch(i=e,r=s,r){case 0:case 1:throw Error(V(345));case 4:if((t&4194048)!==t)break;case 6:Pi(i,t,He,!Ui);break t;case 2:Me=null;break;case 3:case 5:break;default:throw Error(V(329))}if((t&62914560)===t&&(s=zc+300-Ge(),10<s)){if(Pi(i,t,He,!Ui),Nc(i,0,!0)!==0)break t;ii=t,i.timeoutHandle=eb(Xy.bind(null,i,n,Me,Ku,gd,t,He,Ps,Wr,Ui,r,"Throttled",-0,0),s);break t}Xy(i,n,Me,Ku,gd,t,He,Ps,Wr,Ui,r,null,-0,0)}}break}while(!0);zn(e)}function Xy(e,t,n,i,s,r,a,l,u,h,d,m,p,v){if(e.timeoutHandle=-1,m=t.subtreeFlags,m&8192||(m&16785408)===16785408){m={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Jn},CE(t,r,m);var C=(r&62914560)===r?zc-Ge():(r&4194048)===r?OE-Ge():0;if(C=AR(m,C),C!==null){ii=r,e.cancelPendingCommit=C(Jy.bind(null,e,t,r,n,i,s,a,l,u,d,m,null,p,v)),Pi(e,r,a,!h);return}}Jy(e,t,r,n,i,s,a,l,u)}function jI(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var s=n[i],r=s.getSnapshot;s=s.value;try{if(!Je(r(),s))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Pi(e,t,n,i){t&=~Xm,t&=~Ps,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var s=t;0<s;){var r=31-Qe(s),a=1<<r;i[r]=-1,s&=~a}n!==0&&jv(e,n,t)}function Bc(){return mt&6?!0:(al(0),!1)}function $m(){if(at!==null){if(yt===0)var e=at.return;else e=at,Zn=nr=null,km(e),Ur=null,ko=0,e=at;for(;e!==null;)mE(e.alternate,e),e=e.return;at=null}}function ea(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,rR(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),ii=0,$m(),St=e,at=n=ei(e.current,null),ct=t,yt=0,ze=null,Ui=!1,ga=Wo(e,t),Ym=!1,Wr=He=Xm=Ps=as=Pt=0,Me=To=null,gd=!1,t&8&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var s=31-Qe(i),r=1<<s;t|=e[s],i&=~r}return li=t,Mc(),n}function LE(e,t){tt=null,Q.H=Uo,t===pa||t===kc?(t=Ry(),yt=3):t===Cm?(t=Ry(),yt=4):yt=t===Fm?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ze=t,at===null&&(Pt=1,qu(e,rn(t,e.current)))}function UE(){var e=Ze.current;return e===null?!0:(ct&4194048)===ct?ln===null:(ct&62914560)===ct||ct&536870912?e===ln:!1}function PE(){var e=Q.H;return Q.H=Uo,e===null?Uo:e}function jE(){var e=Q.A;return Q.A=UI,e}function Qu(){Pt=4,Ui||(ct&4194048)!==ct&&Ze.current!==null||(ga=!0),!(as&134217727)&&!(Ps&134217727)||St===null||Pi(St,ct,He,!1)}function lf(e,t,n){var i=mt;mt|=2;var s=PE(),r=jE();(St!==e||ct!==t)&&(Ku=null,ea(e,t)),t=!1;var a=Pt;t:do try{if(yt!==0&&at!==null){var l=at,u=ze;switch(yt){case 8:$m(),a=6;break t;case 3:case 2:case 9:case 6:Ze.current===null&&(t=!0);var h=yt;if(yt=0,ze=null,Dr(e,l,u,h),n&&ga){a=0;break t}break;default:h=yt,yt=0,ze=null,Dr(e,l,u,h)}}zI(),a=Pt;break}catch(d){LE(e,d)}while(!0);return t&&e.shellSuspendCounter++,Zn=nr=null,mt=i,Q.H=s,Q.A=r,at===null&&(St=null,ct=0,Mc()),a}function zI(){for(;at!==null;)zE(at)}function BI(e,t){var n=mt;mt|=2;var i=PE(),s=jE();St!==e||ct!==t?(Ku=null,Gu=Ge()+500,ea(e,t)):ga=Wo(e,t);t:do try{if(yt!==0&&at!==null){t=at;var r=ze;e:switch(yt){case 1:yt=0,ze=null,Dr(e,t,r,1);break;case 2:case 9:if(Iy(r)){yt=0,ze=null,$y(t);break}t=function(){yt!==2&&yt!==9||St!==e||(yt=7),zn(e)},r.then(t,t);break t;case 3:yt=7;break t;case 4:yt=5;break t;case 7:Iy(r)?(yt=0,ze=null,$y(t)):(yt=0,ze=null,Dr(e,t,r,7));break;case 5:var a=null;switch(at.tag){case 26:a=at.memoizedState;case 5:case 27:var l=at;if(a?ab(a):l.stateNode.complete){yt=0,ze=null;var u=l.sibling;if(u!==null)at=u;else{var h=l.return;h!==null?(at=h,qc(h)):at=null}break e}}yt=0,ze=null,Dr(e,t,r,5);break;case 6:yt=0,ze=null,Dr(e,t,r,6);break;case 8:$m(),Pt=6;break t;default:throw Error(V(462))}}qI();break}catch(d){LE(e,d)}while(!0);return Zn=nr=null,Q.H=i,Q.A=s,mt=n,at!==null?0:(St=null,ct=0,Mc(),Pt)}function qI(){for(;at!==null&&!h1();)zE(at)}function zE(e){var t=dE(e.alternate,e,li);e.memoizedProps=e.pendingProps,t===null?qc(e):at=t}function $y(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Hy(n,t,t.pendingProps,t.type,void 0,ct);break;case 11:t=Hy(n,t,t.pendingProps,t.type.render,t.ref,ct);break;case 5:km(t);default:mE(n,t),t=at=mT(t,li),t=dE(n,t,li)}e.memoizedProps=e.pendingProps,t===null?qc(e):at=t}function Dr(e,t,n,i){Zn=nr=null,km(t),Ur=null,ko=0;var s=t.return;try{if(xI(e,s,t,n,ct)){Pt=1,qu(e,rn(n,e.current)),at=null;return}}catch(r){if(s!==null)throw at=s,r;Pt=1,qu(e,rn(n,e.current)),at=null;return}t.flags&32768?(ft||i===1?e=!0:ga||ct&536870912?e=!1:(Ui=e=!0,(i===2||i===9||i===3||i===6)&&(i=Ze.current,i!==null&&i.tag===13&&(i.flags|=16384))),BE(t,e)):qc(t)}function qc(e){var t=e;do{if(t.flags&32768){BE(t,Ui);return}e=t.return;var n=MI(t.alternate,t,li);if(n!==null){at=n;return}if(t=t.sibling,t!==null){at=t;return}at=t=e}while(t!==null);Pt===0&&(Pt=5)}function BE(e,t){do{var n=VI(e.alternate,e);if(n!==null){n.flags&=32767,at=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){at=e;return}at=e=n}while(e!==null);Pt=6,at=null}function Jy(e,t,n,i,s,r,a,l,u){e.cancelPendingCommit=null;do Hc();while(ee!==0);if(mt&6)throw Error(V(327));if(t!==null){if(t===e.current)throw Error(V(177));if(r=t.lanes|t.childLanes,r|=Em,E1(e,n,r,a,l,u),e===St&&(at=St=null,ct=0),ta=t,Qi=e,ii=n,yd=r,_d=s,ME=i,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,KI(Du,function(){return KE(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,t.subtreeFlags&13878||i){i=Q.T,Q.T=null,s=pt.p,pt.p=2,a=mt,mt|=4;try{kI(e,t,n)}finally{mt=a,pt.p=s,Q.T=i}}ee=1,qE(),HE(),FE()}}function qE(){if(ee===1){ee=0;var e=Qi,t=ta,n=(t.flags&13878)!==0;if(t.subtreeFlags&13878||n){n=Q.T,Q.T=null;var i=pt.p;pt.p=2;var s=mt;mt|=4;try{wE(t,e);var r=Ad,a=aT(e.containerInfo),l=r.focusedElem,u=r.selectionRange;if(a!==l&&l&&l.ownerDocument&&rT(l.ownerDocument.documentElement,l)){if(u!==null&&Tm(l)){var h=u.start,d=u.end;if(d===void 0&&(d=h),"selectionStart"in l)l.selectionStart=h,l.selectionEnd=Math.min(d,l.value.length);else{var m=l.ownerDocument||document,p=m&&m.defaultView||window;if(p.getSelection){var v=p.getSelection(),C=l.textContent.length,M=Math.min(u.start,C),U=u.end===void 0?M:Math.min(u.end,C);!v.extend&&M>U&&(a=U,U=M,M=a);var S=vy(l,M),b=vy(l,U);if(S&&b&&(v.rangeCount!==1||v.anchorNode!==S.node||v.anchorOffset!==S.offset||v.focusNode!==b.node||v.focusOffset!==b.offset)){var R=m.createRange();R.setStart(S.node,S.offset),v.removeAllRanges(),M>U?(v.addRange(R),v.extend(b.node,b.offset)):(R.setEnd(b.node,b.offset),v.addRange(R))}}}}for(m=[],v=l;v=v.parentNode;)v.nodeType===1&&m.push({element:v,left:v.scrollLeft,top:v.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<m.length;l++){var D=m[l];D.element.scrollLeft=D.left,D.element.scrollTop=D.top}}ec=!!bd,Ad=bd=null}finally{mt=s,pt.p=i,Q.T=n}}e.current=t,ee=2}}function HE(){if(ee===2){ee=0;var e=Qi,t=ta,n=(t.flags&8772)!==0;if(t.subtreeFlags&8772||n){n=Q.T,Q.T=null;var i=pt.p;pt.p=2;var s=mt;mt|=4;try{TE(e,t.alternate,t)}finally{mt=s,pt.p=i,Q.T=n}}ee=3}}function FE(){if(ee===4||ee===3){ee=0,f1();var e=Qi,t=ta,n=ii,i=ME;t.subtreeFlags&10256||t.flags&10256?ee=5:(ee=0,ta=Qi=null,GE(e,e.pendingLanes));var s=e.pendingLanes;if(s===0&&(Ki=null),dm(n),t=t.stateNode,Ke&&typeof Ke.onCommitFiberRoot=="function")try{Ke.onCommitFiberRoot(Zo,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=Q.T,s=pt.p,pt.p=2,Q.T=null;try{for(var r=e.onRecoverableError,a=0;a<i.length;a++){var l=i[a];r(l.value,{componentStack:l.stack})}}finally{Q.T=t,pt.p=s}}ii&3&&Hc(),zn(e),s=e.pendingLanes,n&261930&&s&42?e===vd?Eo++:(Eo=0,vd=e):Eo=0,al(0)}}function GE(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,il(t)))}function Hc(){return qE(),HE(),FE(),KE()}function KE(){if(ee!==5)return!1;var e=Qi,t=yd;yd=0;var n=dm(ii),i=Q.T,s=pt.p;try{pt.p=32>n?32:n,Q.T=null,n=_d,_d=null;var r=Qi,a=ii;if(ee=0,ta=Qi=null,ii=0,mt&6)throw Error(V(331));var l=mt;if(mt|=4,xE(r.current),RE(r,r.current,a,n),mt=l,al(0,!1),Ke&&typeof Ke.onPostCommitFiberRoot=="function")try{Ke.onPostCommitFiberRoot(Zo,r)}catch{}return!0}finally{pt.p=s,Q.T=i,GE(e,t)}}function Zy(e,t,n){t=rn(n,t),t=fd(e.stateNode,t,2),e=Gi(e,t,2),e!==null&&(tl(e,2),zn(e))}function _t(e,t,n){if(e.tag===3)Zy(e,e,n);else for(;t!==null;){if(t.tag===3){Zy(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ki===null||!Ki.has(i))){e=rn(n,e),n=oE(2),i=Gi(t,n,2),i!==null&&(lE(n,i,t,e),tl(i,2),zn(i));break}}t=t.return}}function uf(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new PI;var s=new Set;i.set(t,s)}else s=i.get(t),s===void 0&&(s=new Set,i.set(t,s));s.has(n)||(Ym=!0,s.add(n),e=HI.bind(null,e,t,n),t.then(e,e))}function HI(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,St===e&&(ct&n)===n&&(Pt===4||Pt===3&&(ct&62914560)===ct&&300>Ge()-zc?!(mt&2)&&ea(e,0):Xm|=n,Wr===ct&&(Wr=0)),zn(e)}function QE(e,t){t===0&&(t=Pv()),e=er(e,t),e!==null&&(tl(e,t),zn(e))}function FI(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),QE(e,n)}function GI(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(V(314))}i!==null&&i.delete(t),QE(e,n)}function KI(e,t){return hm(e,t)}var Yu=null,pr=null,Td=!1,Xu=!1,cf=!1,ji=0;function zn(e){e!==pr&&e.next===null&&(pr===null?Yu=pr=e:pr=pr.next=e),Xu=!0,Td||(Td=!0,YI())}function al(e,t){if(!cf&&Xu){cf=!0;do for(var n=!1,i=Yu;i!==null;){if(e!==0){var s=i.pendingLanes;if(s===0)var r=0;else{var a=i.suspendedLanes,l=i.pingedLanes;r=(1<<31-Qe(42|e)+1)-1,r&=s&~(a&~l),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(n=!0,Wy(i,r))}else r=ct,r=Nc(i,i===St?r:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),!(r&3)||Wo(i,r)||(n=!0,Wy(i,r));i=i.next}while(n);cf=!1}}function QI(){YE()}function YE(){Xu=Td=!1;var e=0;ji!==0&&sR()&&(e=ji);for(var t=Ge(),n=null,i=Yu;i!==null;){var s=i.next,r=XE(i,t);r===0?(i.next=null,n===null?Yu=s:n.next=s,s===null&&(pr=n)):(n=i,(e!==0||r&3)&&(Xu=!0)),i=s}ee!==0&&ee!==5||al(e),ji!==0&&(ji=0)}function XE(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var a=31-Qe(r),l=1<<a,u=s[a];u===-1?(!(l&n)||l&i)&&(s[a]=T1(l,t)):u<=t&&(e.expiredLanes|=l),r&=~l}if(t=St,n=ct,n=Nc(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(yt===2||yt===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Uh(i),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||Wo(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&Uh(i),dm(n)){case 2:case 8:n=Lv;break;case 32:n=Du;break;case 268435456:n=Uv;break;default:n=Du}return i=$E.bind(null,e),n=hm(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&Uh(i),e.callbackPriority=2,e.callbackNode=null,2}function $E(e,t){if(ee!==0&&ee!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hc()&&e.callbackNode!==n)return null;var i=ct;return i=Nc(e,e===St?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(kE(e,i,t),XE(e,Ge()),e.callbackNode!=null&&e.callbackNode===n?$E.bind(null,e):null)}function Wy(e,t){if(Hc())return null;kE(e,t,!0)}function YI(){aR(function(){mt&6?hm(kv,QI):YE()})}function Jm(){if(ji===0){var e=$r;e===0&&(e=Ll,Ll<<=1,!(Ll&261888)&&(Ll=256)),ji=e}return ji}function t_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:su(""+e)}function e_(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function XI(e,t,n,i,s){if(t==="submit"&&n&&n.stateNode===s){var r=t_((s[Ue]||null).action),a=i.submitter;a&&(t=(t=a[Ue]||null)?t_(t.formAction):a.getAttribute("formAction"),t!==null&&(r=t,a=null));var l=new xc("action","action",null,i,s);e.push({event:l,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(ji!==0){var u=a?e_(s,a):new FormData(s);cd(n,{pending:!0,data:u,method:s.method,action:r},null,u)}}else typeof r=="function"&&(l.preventDefault(),u=a?e_(s,a):new FormData(s),cd(n,{pending:!0,data:u,method:s.method,action:r},r,u))},currentTarget:s}]})}}for(var hf=0;hf<Zf.length;hf++){var ff=Zf[hf],$I=ff.toLowerCase(),JI=ff[0].toUpperCase()+ff.slice(1);Tn($I,"on"+JI)}Tn(lT,"onAnimationEnd");Tn(uT,"onAnimationIteration");Tn(cT,"onAnimationStart");Tn("dblclick","onDoubleClick");Tn("focusin","onFocus");Tn("focusout","onBlur");Tn(dI,"onTransitionRun");Tn(mI,"onTransitionStart");Tn(pI,"onTransitionCancel");Tn(hT,"onTransitionEnd");Yr("onMouseEnter",["mouseout","mouseover"]);Yr("onMouseLeave",["mouseout","mouseover"]);Yr("onPointerEnter",["pointerout","pointerover"]);Yr("onPointerLeave",["pointerout","pointerover"]);Zs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Zs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Zs("onBeforeInput",["compositionend","keypress","textInput","paste"]);Zs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Zs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Zs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ZI=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Po));function JE(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],s=i.event;i=i.listeners;t:{var r=void 0;if(t)for(var a=i.length-1;0<=a;a--){var l=i[a],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==r&&s.isPropagationStopped())break t;r=l,s.currentTarget=h;try{r(s)}catch(d){Mu(d)}s.currentTarget=null,r=u}else for(a=0;a<i.length;a++){if(l=i[a],u=l.instance,h=l.currentTarget,l=l.listener,u!==r&&s.isPropagationStopped())break t;r=l,s.currentTarget=h;try{r(s)}catch(d){Mu(d)}s.currentTarget=null,r=u}}}}function rt(e,t){var n=t[Ff];n===void 0&&(n=t[Ff]=new Set);var i=e+"__bubble";n.has(i)||(ZE(t,e,2,!1),n.add(i))}function df(e,t,n){var i=0;t&&(i|=4),ZE(n,e,i,t)}var Kl="_reactListening"+Math.random().toString(36).slice(2);function Zm(e){if(!e[Kl]){e[Kl]=!0,Hv.forEach(function(n){n!=="selectionchange"&&(ZI.has(n)||df(n,!1,e),df(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Kl]||(t[Kl]=!0,df("selectionchange",!1,t))}}function ZE(e,t,n,i){switch(hb(t)){case 2:var s=IR;break;case 8:s=RR;break;default:s=np}n=s.bind(null,t,n,e),s=void 0,!Xf||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function mf(e,t,n,i,s){var r=i;if(!(t&1)&&!(t&2)&&i!==null)t:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var l=i.stateNode.containerInfo;if(l===s)break;if(a===4)for(a=i.return;a!==null;){var u=a.tag;if((u===3||u===4)&&a.stateNode.containerInfo===s)return;a=a.return}for(;l!==null;){if(a=br(l),a===null)return;if(u=a.tag,u===5||u===6||u===26||u===27){i=r=a;continue t}l=l.parentNode}}i=i.return}Jv(function(){var h=r,d=gm(n),m=[];t:{var p=fT.get(e);if(p!==void 0){var v=xc,C=e;switch(e){case"keypress":if(au(n)===0)break t;case"keydown":case"keyup":v=G1;break;case"focusin":C="focus",v=qh;break;case"focusout":C="blur",v=qh;break;case"beforeblur":case"afterblur":v=qh;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=uy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=M1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Y1;break;case lT:case uT:case cT:v=L1;break;case hT:v=$1;break;case"scroll":case"scrollend":v=D1;break;case"wheel":v=Z1;break;case"copy":case"cut":case"paste":v=P1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=hy;break;case"toggle":case"beforetoggle":v=tI}var M=(t&4)!==0,U=!M&&(e==="scroll"||e==="scrollend"),S=M?p!==null?p+"Capture":null:p;M=[];for(var b=h,R;b!==null;){var D=b;if(R=D.stateNode,D=D.tag,D!==5&&D!==26&&D!==27||R===null||S===null||(D=xo(b,S),D!=null&&M.push(jo(b,D,R))),U)break;b=b.return}0<M.length&&(p=new v(p,C,null,n,d),m.push({event:p,listeners:M}))}}if(!(t&7)){t:{if(p=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",p&&n!==Yf&&(C=n.relatedTarget||n.fromElement)&&(br(C)||C[fa]))break t;if((v||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,v?(C=n.relatedTarget||n.toElement,v=h,C=C?br(C):null,C!==null&&(U=Jo(C),M=C.tag,C!==U||M!==5&&M!==27&&M!==6)&&(C=null)):(v=null,C=h),v!==C)){if(M=uy,D="onMouseLeave",S="onMouseEnter",b="mouse",(e==="pointerout"||e==="pointerover")&&(M=hy,D="onPointerLeave",S="onPointerEnter",b="pointer"),U=v==null?p:eo(v),R=C==null?p:eo(C),p=new M(D,b+"leave",v,n,d),p.target=U,p.relatedTarget=R,D=null,br(d)===h&&(M=new M(S,b+"enter",C,n,d),M.target=R,M.relatedTarget=U,D=M),U=D,v&&C)e:{for(M=WI,S=v,b=C,R=0,D=S;D;D=M(D))R++;D=0;for(var B=b;B;B=M(B))D++;for(;0<R-D;)S=M(S),R--;for(;0<D-R;)b=M(b),D--;for(;R--;){if(S===b||b!==null&&S===b.alternate){M=S;break e}S=M(S),b=M(b)}M=null}else M=null;v!==null&&n_(m,p,v,M,!1),C!==null&&U!==null&&n_(m,U,C,M,!0)}}t:{if(p=h?eo(h):window,v=p.nodeName&&p.nodeName.toLowerCase(),v==="select"||v==="input"&&p.type==="file")var F=py;else if(my(p))if(iT)F=cI;else{F=lI;var T=oI}else v=p.nodeName,!v||v.toLowerCase()!=="input"||p.type!=="checkbox"&&p.type!=="radio"?h&&pm(h.elementType)&&(F=py):F=uI;if(F&&(F=F(e,h))){nT(m,F,n,d);break t}T&&T(e,p,h),e==="focusout"&&h&&p.type==="number"&&h.memoizedProps.value!=null&&Qf(p,"number",p.value)}switch(T=h?eo(h):window,e){case"focusin":(my(T)||T.contentEditable==="true")&&(wr=T,$f=h,ho=null);break;case"focusout":ho=$f=wr=null;break;case"mousedown":Jf=!0;break;case"contextmenu":case"mouseup":case"dragend":Jf=!1,Ty(m,n,d);break;case"selectionchange":if(fI)break;case"keydown":case"keyup":Ty(m,n,d)}var _;if(vm)t:{switch(e){case"compositionstart":var E="onCompositionStart";break t;case"compositionend":E="onCompositionEnd";break t;case"compositionupdate":E="onCompositionUpdate";break t}E=void 0}else Sr?tT(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(Wv&&n.locale!=="ko"&&(Sr||E!=="onCompositionStart"?E==="onCompositionEnd"&&Sr&&(_=Zv()):(Li=d,ym="value"in Li?Li.value:Li.textContent,Sr=!0)),T=$u(h,E),0<T.length&&(E=new cy(E,e,null,n,d),m.push({event:E,listeners:T}),_?E.data=_:(_=eT(n),_!==null&&(E.data=_)))),(_=nI?iI(e,n):sI(e,n))&&(E=$u(h,"onBeforeInput"),0<E.length&&(T=new cy("onBeforeInput","beforeinput",null,n,d),m.push({event:T,listeners:E}),T.data=_)),XI(m,e,h,n,d)}JE(m,t)})}function jo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function $u(e,t){for(var n=t+"Capture",i=[];e!==null;){var s=e,r=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||r===null||(s=xo(e,n),s!=null&&i.unshift(jo(e,s,r)),s=xo(e,t),s!=null&&i.push(jo(e,s,r))),e.tag===3)return i;e=e.return}return[]}function WI(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function n_(e,t,n,i,s){for(var r=t._reactName,a=[];n!==null&&n!==i;){var l=n,u=l.alternate,h=l.stateNode;if(l=l.tag,u!==null&&u===i)break;l!==5&&l!==26&&l!==27||h===null||(u=h,s?(h=xo(n,r),h!=null&&a.unshift(jo(n,h,u))):s||(h=xo(n,r),h!=null&&a.push(jo(n,h,u)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var tR=/\r\n?/g,eR=/\u0000|\uFFFD/g;function i_(e){return(typeof e=="string"?e:""+e).replace(tR,`
`).replace(eR,"")}function WE(e,t){return t=i_(t),i_(e)===t}function Et(e,t,n,i,s,r){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||Xr(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&Xr(e,""+i);break;case"className":jl(e,"class",i);break;case"tabIndex":jl(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":jl(e,n,i);break;case"style":$v(e,i,r);break;case"data":if(t!=="object"){jl(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=su(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(n==="formAction"?(t!=="input"&&Et(e,t,"name",s.name,s,null),Et(e,t,"formEncType",s.formEncType,s,null),Et(e,t,"formMethod",s.formMethod,s,null),Et(e,t,"formTarget",s.formTarget,s,null)):(Et(e,t,"encType",s.encType,s,null),Et(e,t,"method",s.method,s,null),Et(e,t,"target",s.target,s,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=su(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=Jn);break;case"onScroll":i!=null&&rt("scroll",e);break;case"onScrollEnd":i!=null&&rt("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(V(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(V(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=su(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":rt("beforetoggle",e),rt("toggle",e),iu(e,"popover",i);break;case"xlinkActuate":Hn(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Hn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Hn(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Hn(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Hn(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Hn(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Hn(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Hn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Hn(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":iu(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=N1.get(n)||n,iu(e,n,i))}}function Ed(e,t,n,i,s,r){switch(n){case"style":$v(e,i,r);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(V(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(V(60));e.innerHTML=n}}break;case"children":typeof i=="string"?Xr(e,i):(typeof i=="number"||typeof i=="bigint")&&Xr(e,""+i);break;case"onScroll":i!=null&&rt("scroll",e);break;case"onScrollEnd":i!=null&&rt("scrollend",e);break;case"onClick":i!=null&&(e.onclick=Jn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Fv.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(s=n.endsWith("Capture"),t=n.slice(2,s?n.length-7:void 0),r=e[Ue]||null,r=r!=null?r[n]:null,typeof r=="function"&&e.removeEventListener(t,r,s),typeof i=="function")){typeof r!="function"&&r!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,s);break t}n in e?e[n]=i:i===!0?e.setAttribute(n,""):iu(e,n,i)}}}function ge(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":rt("error",e),rt("load",e);var i=!1,s=!1,r;for(r in n)if(n.hasOwnProperty(r)){var a=n[r];if(a!=null)switch(r){case"src":i=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(V(137,t));default:Et(e,t,r,a,n,null)}}s&&Et(e,t,"srcSet",n.srcSet,n,null),i&&Et(e,t,"src",n.src,n,null);return;case"input":rt("invalid",e);var l=r=a=s=null,u=null,h=null;for(i in n)if(n.hasOwnProperty(i)){var d=n[i];if(d!=null)switch(i){case"name":s=d;break;case"type":a=d;break;case"checked":u=d;break;case"defaultChecked":h=d;break;case"value":r=d;break;case"defaultValue":l=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(V(137,t));break;default:Et(e,t,i,d,n,null)}}Qv(e,r,l,u,h,a,s,!1);return;case"select":rt("invalid",e),i=a=r=null;for(s in n)if(n.hasOwnProperty(s)&&(l=n[s],l!=null))switch(s){case"value":r=l;break;case"defaultValue":a=l;break;case"multiple":i=l;default:Et(e,t,s,l,n,null)}t=r,n=a,e.multiple=!!i,t!=null?Vr(e,!!i,t,!1):n!=null&&Vr(e,!!i,n,!0);return;case"textarea":rt("invalid",e),r=s=i=null;for(a in n)if(n.hasOwnProperty(a)&&(l=n[a],l!=null))switch(a){case"value":i=l;break;case"defaultValue":s=l;break;case"children":r=l;break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(V(91));break;default:Et(e,t,a,l,n,null)}Xv(e,i,s,r);return;case"option":for(u in n)if(n.hasOwnProperty(u)&&(i=n[u],i!=null))switch(u){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:Et(e,t,u,i,n,null)}return;case"dialog":rt("beforetoggle",e),rt("toggle",e),rt("cancel",e),rt("close",e);break;case"iframe":case"object":rt("load",e);break;case"video":case"audio":for(i=0;i<Po.length;i++)rt(Po[i],e);break;case"image":rt("error",e),rt("load",e);break;case"details":rt("toggle",e);break;case"embed":case"source":case"link":rt("error",e),rt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(h in n)if(n.hasOwnProperty(h)&&(i=n[h],i!=null))switch(h){case"children":case"dangerouslySetInnerHTML":throw Error(V(137,t));default:Et(e,t,h,i,n,null)}return;default:if(pm(t)){for(d in n)n.hasOwnProperty(d)&&(i=n[d],i!==void 0&&Ed(e,t,d,i,n,void 0));return}}for(l in n)n.hasOwnProperty(l)&&(i=n[l],i!=null&&Et(e,t,l,i,n,null))}function nR(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,r=null,a=null,l=null,u=null,h=null,d=null;for(v in n){var m=n[v];if(n.hasOwnProperty(v)&&m!=null)switch(v){case"checked":break;case"value":break;case"defaultValue":u=m;default:i.hasOwnProperty(v)||Et(e,t,v,null,i,m)}}for(var p in i){var v=i[p];if(m=n[p],i.hasOwnProperty(p)&&(v!=null||m!=null))switch(p){case"type":r=v;break;case"name":s=v;break;case"checked":h=v;break;case"defaultChecked":d=v;break;case"value":a=v;break;case"defaultValue":l=v;break;case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(V(137,t));break;default:v!==m&&Et(e,t,p,v,i,m)}}Kf(e,a,l,u,h,d,r,s);return;case"select":v=a=l=p=null;for(r in n)if(u=n[r],n.hasOwnProperty(r)&&u!=null)switch(r){case"value":break;case"multiple":v=u;default:i.hasOwnProperty(r)||Et(e,t,r,null,i,u)}for(s in i)if(r=i[s],u=n[s],i.hasOwnProperty(s)&&(r!=null||u!=null))switch(s){case"value":p=r;break;case"defaultValue":l=r;break;case"multiple":a=r;default:r!==u&&Et(e,t,s,r,i,u)}t=l,n=a,i=v,p!=null?Vr(e,!!n,p,!1):!!i!=!!n&&(t!=null?Vr(e,!!n,t,!0):Vr(e,!!n,n?[]:"",!1));return;case"textarea":v=p=null;for(l in n)if(s=n[l],n.hasOwnProperty(l)&&s!=null&&!i.hasOwnProperty(l))switch(l){case"value":break;case"children":break;default:Et(e,t,l,null,i,s)}for(a in i)if(s=i[a],r=n[a],i.hasOwnProperty(a)&&(s!=null||r!=null))switch(a){case"value":p=s;break;case"defaultValue":v=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(V(91));break;default:s!==r&&Et(e,t,a,s,i,r)}Yv(e,p,v);return;case"option":for(var C in n)if(p=n[C],n.hasOwnProperty(C)&&p!=null&&!i.hasOwnProperty(C))switch(C){case"selected":e.selected=!1;break;default:Et(e,t,C,null,i,p)}for(u in i)if(p=i[u],v=n[u],i.hasOwnProperty(u)&&p!==v&&(p!=null||v!=null))switch(u){case"selected":e.selected=p&&typeof p!="function"&&typeof p!="symbol";break;default:Et(e,t,u,p,i,v)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var M in n)p=n[M],n.hasOwnProperty(M)&&p!=null&&!i.hasOwnProperty(M)&&Et(e,t,M,null,i,p);for(h in i)if(p=i[h],v=n[h],i.hasOwnProperty(h)&&p!==v&&(p!=null||v!=null))switch(h){case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(V(137,t));break;default:Et(e,t,h,p,i,v)}return;default:if(pm(t)){for(var U in n)p=n[U],n.hasOwnProperty(U)&&p!==void 0&&!i.hasOwnProperty(U)&&Ed(e,t,U,void 0,i,p);for(d in i)p=i[d],v=n[d],!i.hasOwnProperty(d)||p===v||p===void 0&&v===void 0||Ed(e,t,d,p,i,v);return}}for(var S in n)p=n[S],n.hasOwnProperty(S)&&p!=null&&!i.hasOwnProperty(S)&&Et(e,t,S,null,i,p);for(m in i)p=i[m],v=n[m],!i.hasOwnProperty(m)||p===v||p==null&&v==null||Et(e,t,m,p,i,v)}function s_(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function iR(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var s=n[i],r=s.transferSize,a=s.initiatorType,l=s.duration;if(r&&l&&s_(a)){for(a=0,l=s.responseEnd,i+=1;i<n.length;i++){var u=n[i],h=u.startTime;if(h>l)break;var d=u.transferSize,m=u.initiatorType;d&&s_(m)&&(u=u.responseEnd,a+=d*(u<l?1:(l-h)/(u-h)))}if(--i,t+=8*(r+a)/(s.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var bd=null,Ad=null;function Ju(e){return e.nodeType===9?e:e.ownerDocument}function r_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function tb(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Sd(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var pf=null;function sR(){var e=window.event;return e&&e.type==="popstate"?e===pf?!1:(pf=e,!0):(pf=null,!1)}var eb=typeof setTimeout=="function"?setTimeout:void 0,rR=typeof clearTimeout=="function"?clearTimeout:void 0,a_=typeof Promise=="function"?Promise:void 0,aR=typeof queueMicrotask=="function"?queueMicrotask:typeof a_<"u"?function(e){return a_.resolve(null).then(e).catch(oR)}:eb;function oR(e){setTimeout(function(){throw e})}function gs(e){return e==="head"}function o_(e,t){var n=t,i=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(s),ia(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")bo(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,bo(n);for(var r=n.firstChild;r;){var a=r.nextSibling,l=r.nodeName;r[el]||l==="SCRIPT"||l==="STYLE"||l==="LINK"&&r.rel.toLowerCase()==="stylesheet"||n.removeChild(r),r=a}}else n==="body"&&bo(e.ownerDocument.body);n=s}while(n);ia(t)}function l_(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function wd(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":wd(n),mm(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function lR(e,t,n,i){for(;e.nodeType===1;){var s=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[el])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=un(e.nextSibling),e===null)break}return null}function uR(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=un(e.nextSibling),e===null))return null;return e}function nb(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=un(e.nextSibling),e===null))return null;return e}function Id(e){return e.data==="$?"||e.data==="$~"}function Rd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function cR(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function un(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Cd=null;function u_(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return un(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function c_(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function ib(e,t,n){switch(t=Ju(n),e){case"html":if(e=t.documentElement,!e)throw Error(V(452));return e;case"head":if(e=t.head,!e)throw Error(V(453));return e;case"body":if(e=t.body,!e)throw Error(V(454));return e;default:throw Error(V(451))}}function bo(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);mm(e)}var hn=new Map,h_=new Set;function Zu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var mi=pt.d;pt.d={f:hR,r:fR,D:dR,C:mR,L:pR,m:gR,X:_R,S:yR,M:vR};function hR(){var e=mi.f(),t=Bc();return e||t}function fR(e){var t=da(e);t!==null&&t.tag===5&&t.type==="form"?$T(t):mi.r(e)}var ya=typeof document>"u"?null:document;function sb(e,t,n){var i=ya;if(i&&typeof t=="string"&&t){var s=sn(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof n=="string"&&(s+='[crossorigin="'+n+'"]'),h_.has(s)||(h_.add(s),e={rel:e,crossOrigin:n,href:t},i.querySelector(s)===null&&(t=i.createElement("link"),ge(t,"link",e),oe(t),i.head.appendChild(t)))}}function dR(e){mi.D(e),sb("dns-prefetch",e,null)}function mR(e,t){mi.C(e,t),sb("preconnect",e,t)}function pR(e,t,n){mi.L(e,t,n);var i=ya;if(i&&e&&t){var s='link[rel="preload"][as="'+sn(t)+'"]';t==="image"&&n&&n.imageSrcSet?(s+='[imagesrcset="'+sn(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(s+='[imagesizes="'+sn(n.imageSizes)+'"]')):s+='[href="'+sn(e)+'"]';var r=s;switch(t){case"style":r=na(e);break;case"script":r=_a(e)}hn.has(r)||(e=Ot({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),hn.set(r,e),i.querySelector(s)!==null||t==="style"&&i.querySelector(ol(r))||t==="script"&&i.querySelector(ll(r))||(t=i.createElement("link"),ge(t,"link",e),oe(t),i.head.appendChild(t)))}}function gR(e,t){mi.m(e,t);var n=ya;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+sn(i)+'"][href="'+sn(e)+'"]',r=s;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=_a(e)}if(!hn.has(r)&&(e=Ot({rel:"modulepreload",href:e},t),hn.set(r,e),n.querySelector(s)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(ll(r)))return}i=n.createElement("link"),ge(i,"link",e),oe(i),n.head.appendChild(i)}}}function yR(e,t,n){mi.S(e,t,n);var i=ya;if(i&&e){var s=Mr(i).hoistableStyles,r=na(e);t=t||"default";var a=s.get(r);if(!a){var l={loading:0,preload:null};if(a=i.querySelector(ol(r)))l.loading=5;else{e=Ot({rel:"stylesheet",href:e,"data-precedence":t},n),(n=hn.get(r))&&Wm(e,n);var u=a=i.createElement("link");oe(u),ge(u,"link",e),u._p=new Promise(function(h,d){u.onload=h,u.onerror=d}),u.addEventListener("load",function(){l.loading|=1}),u.addEventListener("error",function(){l.loading|=2}),l.loading|=4,mu(a,t,i)}a={type:"stylesheet",instance:a,count:1,state:l},s.set(r,a)}}}function _R(e,t){mi.X(e,t);var n=ya;if(n&&e){var i=Mr(n).hoistableScripts,s=_a(e),r=i.get(s);r||(r=n.querySelector(ll(s)),r||(e=Ot({src:e,async:!0},t),(t=hn.get(s))&&tp(e,t),r=n.createElement("script"),oe(r),ge(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(s,r))}}function vR(e,t){mi.M(e,t);var n=ya;if(n&&e){var i=Mr(n).hoistableScripts,s=_a(e),r=i.get(s);r||(r=n.querySelector(ll(s)),r||(e=Ot({src:e,async:!0,type:"module"},t),(t=hn.get(s))&&tp(e,t),r=n.createElement("script"),oe(r),ge(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(s,r))}}function f_(e,t,n,i){var s=(s=qi.current)?Zu(s):null;if(!s)throw Error(V(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=na(n.href),n=Mr(s).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=na(n.href);var r=Mr(s).hoistableStyles,a=r.get(e);if(a||(s=s.ownerDocument||s,a={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,a),(r=s.querySelector(ol(e)))&&!r._p&&(a.instance=r,a.state.loading=5),hn.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},hn.set(e,n),r||TR(s,e,n,a.state))),t&&i===null)throw Error(V(528,""));return a}if(t&&i!==null)throw Error(V(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=_a(n),n=Mr(s).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(V(444,e))}}function na(e){return'href="'+sn(e)+'"'}function ol(e){return'link[rel="stylesheet"]['+e+"]"}function rb(e){return Ot({},e,{"data-precedence":e.precedence,precedence:null})}function TR(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),ge(t,"link",n),oe(t),e.head.appendChild(t))}function _a(e){return'[src="'+sn(e)+'"]'}function ll(e){return"script[async]"+e}function d_(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+sn(n.href)+'"]');if(i)return t.instance=i,oe(i),i;var s=Ot({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),oe(i),ge(i,"style",s),mu(i,n.precedence,e),t.instance=i;case"stylesheet":s=na(n.href);var r=e.querySelector(ol(s));if(r)return t.state.loading|=4,t.instance=r,oe(r),r;i=rb(n),(s=hn.get(s))&&Wm(i,s),r=(e.ownerDocument||e).createElement("link"),oe(r);var a=r;return a._p=new Promise(function(l,u){a.onload=l,a.onerror=u}),ge(r,"link",i),t.state.loading|=4,mu(r,n.precedence,e),t.instance=r;case"script":return r=_a(n.src),(s=e.querySelector(ll(r)))?(t.instance=s,oe(s),s):(i=n,(s=hn.get(r))&&(i=Ot({},n),tp(i,s)),e=e.ownerDocument||e,s=e.createElement("script"),oe(s),ge(s,"link",i),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(V(443,t.type))}else t.type==="stylesheet"&&!(t.state.loading&4)&&(i=t.instance,t.state.loading|=4,mu(i,n.precedence,e));return t.instance}function mu(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=i.length?i[i.length-1]:null,r=s,a=0;a<i.length;a++){var l=i[a];if(l.dataset.precedence===t)r=l;else if(r!==s)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Wm(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function tp(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var pu=null;function m_(e,t,n){if(pu===null){var i=new Map,s=pu=new Map;s.set(n,i)}else s=pu,i=s.get(n),i||(i=new Map,s.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),s=0;s<n.length;s++){var r=n[s];if(!(r[el]||r[fe]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var a=r.getAttribute(t)||"";a=e+a;var l=i.get(a);l?l.push(r):i.set(a,[r])}}return i}function p_(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function ER(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function ab(e){return!(e.type==="stylesheet"&&!(e.state.loading&3))}function bR(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&!(n.state.loading&4)){if(n.instance===null){var s=na(i.href),r=t.querySelector(ol(s));if(r){t=r._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Wu.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=r,oe(r);return}r=t.ownerDocument||t,i=rb(i),(s=hn.get(s))&&Wm(i,s),r=r.createElement("link"),oe(r);var a=r;a._p=new Promise(function(l,u){a.onload=l,a.onerror=u}),ge(r,"link",i),n.instance=r}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Wu.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var gf=0;function AR(e,t){return e.stylesheets&&e.count===0&&gu(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&gu(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4+t);0<e.imgBytes&&gf===0&&(gf=62500*iR());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&gu(e,e.stylesheets),e.unsuspend)){var r=e.unsuspend;e.unsuspend=null,r()}},(e.imgBytes>gf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(s)}}:null}function Wu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)gu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var tc=null;function gu(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,tc=new Map,t.forEach(SR,e),tc=null,Wu.call(e))}function SR(e,t){if(!(t.state.loading&4)){var n=tc.get(e);if(n)var i=n.get(null);else{n=new Map,tc.set(e,n);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<s.length;r++){var a=s[r];(a.nodeName==="LINK"||a.getAttribute("media")!=="not all")&&(n.set(a.dataset.precedence,a),i=a)}i&&n.set(null,i)}s=t.instance,a=s.getAttribute("data-precedence"),r=n.get(a)||i,r===i&&n.set(null,s),n.set(a,s),this.count++,i=Wu.bind(this),s.addEventListener("load",i),s.addEventListener("error",i),r?r.parentNode.insertBefore(s,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var zo={$$typeof:$n,Provider:null,Consumer:null,_currentValue:Vs,_currentValue2:Vs,_threadCount:0};function wR(e,t,n,i,s,r,a,l,u){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ph(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ph(0),this.hiddenUpdates=Ph(null),this.identifierPrefix=i,this.onUncaughtError=s,this.onCaughtError=r,this.onRecoverableError=a,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=u,this.incompleteTransitions=new Map}function ob(e,t,n,i,s,r,a,l,u,h,d,m){return e=new wR(e,t,n,a,u,h,d,m,l),t=1,r===!0&&(t|=24),r=qe(3,null,null,t),e.current=r,r.stateNode=e,t=Im(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:i,isDehydrated:n,cache:t},Nm(r),e}function lb(e){return e?(e=Cr,e):Cr}function ub(e,t,n,i,s,r){s=lb(s),i.context===null?i.context=s:i.pendingContext=s,i=Fi(t),i.payload={element:n},r=r===void 0?null:r,r!==null&&(i.callback=r),n=Gi(e,i,t),n!==null&&(Le(n,e,t),mo(n,e,t))}function g_(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ep(e,t){g_(e,t),(e=e.alternate)&&g_(e,t)}function cb(e){if(e.tag===13||e.tag===31){var t=er(e,67108864);t!==null&&Le(t,e,67108864),ep(e,67108864)}}function y_(e){if(e.tag===13||e.tag===31){var t=Ye();t=fm(t);var n=er(e,t);n!==null&&Le(n,e,t),ep(e,t)}}var ec=!0;function IR(e,t,n,i){var s=Q.T;Q.T=null;var r=pt.p;try{pt.p=2,np(e,t,n,i)}finally{pt.p=r,Q.T=s}}function RR(e,t,n,i){var s=Q.T;Q.T=null;var r=pt.p;try{pt.p=8,np(e,t,n,i)}finally{pt.p=r,Q.T=s}}function np(e,t,n,i){if(ec){var s=Nd(i);if(s===null)mf(e,t,i,nc,n),__(e,i);else if(NR(s,e,t,n,i))i.stopPropagation();else if(__(e,i),t&4&&-1<CR.indexOf(e)){for(;s!==null;){var r=da(s);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var a=Cs(r.pendingLanes);if(a!==0){var l=r;for(l.pendingLanes|=2,l.entangledLanes|=2;a;){var u=1<<31-Qe(a);l.entanglements[1]|=u,a&=~u}zn(r),!(mt&6)&&(Gu=Ge()+500,al(0))}}break;case 31:case 13:l=er(r,2),l!==null&&Le(l,r,2),Bc(),ep(r,2)}if(r=Nd(i),r===null&&mf(e,t,i,nc,n),r===s)break;s=r}s!==null&&i.stopPropagation()}else mf(e,t,i,null,n)}}function Nd(e){return e=gm(e),ip(e)}var nc=null;function ip(e){if(nc=null,e=br(e),e!==null){var t=Jo(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=xv(t),e!==null)return e;e=null}else if(n===31){if(e=Dv(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return nc=e,null}function hb(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(d1()){case kv:return 2;case Lv:return 8;case Du:case m1:return 32;case Uv:return 268435456;default:return 32}default:return 32}}var xd=!1,Yi=null,Xi=null,$i=null,Bo=new Map,qo=new Map,xi=[],CR="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function __(e,t){switch(e){case"focusin":case"focusout":Yi=null;break;case"dragenter":case"dragleave":Xi=null;break;case"mouseover":case"mouseout":$i=null;break;case"pointerover":case"pointerout":Bo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":qo.delete(t.pointerId)}}function $a(e,t,n,i,s,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:r,targetContainers:[s]},t!==null&&(t=da(t),t!==null&&cb(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function NR(e,t,n,i,s){switch(t){case"focusin":return Yi=$a(Yi,e,t,n,i,s),!0;case"dragenter":return Xi=$a(Xi,e,t,n,i,s),!0;case"mouseover":return $i=$a($i,e,t,n,i,s),!0;case"pointerover":var r=s.pointerId;return Bo.set(r,$a(Bo.get(r)||null,e,t,n,i,s)),!0;case"gotpointercapture":return r=s.pointerId,qo.set(r,$a(qo.get(r)||null,e,t,n,i,s)),!0}return!1}function fb(e){var t=br(e.target);if(t!==null){var n=Jo(t);if(n!==null){if(t=n.tag,t===13){if(t=xv(n),t!==null){e.blockedOn=t,ny(e.priority,function(){y_(n)});return}}else if(t===31){if(t=Dv(n),t!==null){e.blockedOn=t,ny(e.priority,function(){y_(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function yu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Nd(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Yf=i,n.target.dispatchEvent(i),Yf=null}else return t=da(n),t!==null&&cb(t),e.blockedOn=n,!1;t.shift()}return!0}function v_(e,t,n){yu(e)&&n.delete(t)}function xR(){xd=!1,Yi!==null&&yu(Yi)&&(Yi=null),Xi!==null&&yu(Xi)&&(Xi=null),$i!==null&&yu($i)&&($i=null),Bo.forEach(v_),qo.forEach(v_)}function Ql(e,t){e.blockedOn===t&&(e.blockedOn=null,xd||(xd=!0,ie.unstable_scheduleCallback(ie.unstable_NormalPriority,xR)))}var Yl=null;function T_(e){Yl!==e&&(Yl=e,ie.unstable_scheduleCallback(ie.unstable_NormalPriority,function(){Yl===e&&(Yl=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],s=e[t+2];if(typeof i!="function"){if(ip(i||n)===null)continue;break}var r=da(n);r!==null&&(e.splice(t,3),t-=3,cd(r,{pending:!0,data:s,method:n.method,action:i},i,s))}}))}function ia(e){function t(u){return Ql(u,e)}Yi!==null&&Ql(Yi,e),Xi!==null&&Ql(Xi,e),$i!==null&&Ql($i,e),Bo.forEach(t),qo.forEach(t);for(var n=0;n<xi.length;n++){var i=xi[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<xi.length&&(n=xi[0],n.blockedOn===null);)fb(n),n.blockedOn===null&&xi.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var s=n[i],r=n[i+1],a=s[Ue]||null;if(typeof r=="function")a||T_(n);else if(a){var l=null;if(r&&r.hasAttribute("formAction")){if(s=r,a=r[Ue]||null)l=a.formAction;else if(ip(s)!==null)continue}else l=a.action;typeof l=="function"?n[i+1]=l:(n.splice(i,3),i-=3),T_(n)}}}function db(){function e(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(a){return s=a})},focusReset:"manual",scroll:"manual"})}function t(){s!==null&&(s(),s=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),s!==null&&(s(),s=null)}}}function sp(e){this._internalRoot=e}Fc.prototype.render=sp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(V(409));var n=t.current,i=Ye();ub(n,i,e,t,null,null)};Fc.prototype.unmount=sp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ub(e.current,2,null,e,null,null),Bc(),t[fa]=null}};function Fc(e){this._internalRoot=e}Fc.prototype.unstable_scheduleHydration=function(e){if(e){var t=qv();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xi.length&&t!==0&&t<xi[n].priority;n++);xi.splice(n,0,e),n===0&&fb(e)}};var E_=Cv.version;if(E_!=="19.2.5")throw Error(V(527,E_,"19.2.5"));pt.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(V(188)):(e=Object.keys(e).join(","),Error(V(268,e)));return e=a1(t),e=e!==null?Ov(e):null,e=e===null?null:e.stateNode,e};var DR={bundleType:0,version:"19.2.5",rendererPackageName:"react-dom",currentDispatcherRef:Q,reconcilerVersion:"19.2.5"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xl.isDisabled&&Xl.supportsFiber)try{Zo=Xl.inject(DR),Ke=Xl}catch{}}Rc.createRoot=function(e,t){if(!Nv(e))throw Error(V(299));var n=!1,i="",s=sE,r=rE,a=aE;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=ob(e,1,!1,null,null,n,i,null,s,r,a,db),e[fa]=t.current,Zm(e),new sp(t)};Rc.hydrateRoot=function(e,t,n){if(!Nv(e))throw Error(V(299));var i=!1,s="",r=sE,a=rE,l=aE,u=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(a=n.onCaughtError),n.onRecoverableError!==void 0&&(l=n.onRecoverableError),n.formState!==void 0&&(u=n.formState)),t=ob(e,1,!0,t,n??null,i,s,u,r,a,l,db),t.context=lb(null),n=t.current,i=Ye(),i=fm(i),s=Fi(i),s.callback=null,Gi(n,s,i),n=i,t.current.lanes=n,tl(t,n),zn(t),e[fa]=t.current,Zm(e),new Fc(t)};Rc.version="19.2.5";function mb(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(mb)}catch(e){console.error(e)}}mb(),bv.exports=Rc;var OR=bv.exports;const MR=fv(OR);/**
 * @license lucide-react v1.11.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pb=(...e)=>e.filter((t,n,i)=>!!t&&t.trim()!==""&&i.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v1.11.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VR=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.11.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kR=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,i)=>i?i.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v1.11.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b_=e=>{const t=kR(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v1.11.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var yf={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.11.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LR=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1},UR=nt.createContext({}),PR=()=>nt.useContext(UR),jR=nt.forwardRef(({color:e,size:t,strokeWidth:n,absoluteStrokeWidth:i,className:s="",children:r,iconNode:a,...l},u)=>{const{size:h=24,strokeWidth:d=2,absoluteStrokeWidth:m=!1,color:p="currentColor",className:v=""}=PR()??{},C=i??m?Number(n??d)*24/Number(t??h):n??d;return nt.createElement("svg",{ref:u,...yf,width:t??h??yf.width,height:t??h??yf.height,stroke:e??p,strokeWidth:C,className:pb("lucide",v,s),...!r&&!LR(l)&&{"aria-hidden":"true"},...l},[...a.map(([M,U])=>nt.createElement(M,U)),...Array.isArray(r)?r:[r]])});/**
 * @license lucide-react v1.11.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ue=(e,t)=>{const n=nt.forwardRef(({className:i,...s},r)=>nt.createElement(jR,{ref:r,iconNode:t,className:pb(`lucide-${VR(b_(e))}`,`lucide-${e}`,i),...s}));return n.displayName=b_(e),n};/**
 * @license lucide-react v1.11.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zR=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],gb=ue("activity",zR);/**
 * @license lucide-react v1.11.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BR=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],qR=ue("chart-column",BR);/**
 * @license lucide-react v1.11.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HR=[["path",{d:"M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z",key:"pzmjnu"}],["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83",key:"k2fpak"}]],A_=ue("chart-pie",HR);/**
 * @license lucide-react v1.11.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FR=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],S_=ue("circle-alert",FR);/**
 * @license lucide-react v1.11.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GR=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Dd=ue("circle-check-big",GR);/**
 * @license lucide-react v1.11.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KR=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]],yb=ue("circle-plus",KR);/**
 * @license lucide-react v1.11.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QR=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]],w_=ue("clock",QR);/**
 * @license lucide-react v1.11.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YR=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M8 13h2",key:"yr2amv"}],["path",{d:"M14 13h2",key:"un5t4a"}],["path",{d:"M8 17h2",key:"2yhykz"}],["path",{d:"M14 17h2",key:"10kma7"}]],XR=ue("file-spreadsheet",YR);/**
 * @license lucide-react v1.11.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $R=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],JR=ue("menu",$R);/**
 * @license lucide-react v1.11.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZR=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],WR=ue("message-square",ZR);/**
 * @license lucide-react v1.11.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t2=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],e2=ue("plus",t2);/**
 * @license lucide-react v1.11.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n2=[["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3",key:"1rgiei"}],["path",{d:"M18 4.933V21",key:"tjwmp4"}],["path",{d:"m4 6 7.106-3.79a2 2 0 0 1 1.788 0L20 6",key:"zywc2d"}],["path",{d:"m6 11-3.52 2.147a1 1 0 0 0-.48.854V19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a1 1 0 0 0-.48-.853L18 11",key:"1d4ql0"}],["path",{d:"M6 4.933V21",key:"1ufz1j"}],["circle",{cx:"12",cy:"9",r:"2",key:"1092wv"}]],I_=ue("school",n2);/**
 * @license lucide-react v1.11.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i2=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],s2=ue("search",i2);/**
 * @license lucide-react v1.11.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r2=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],a2=ue("trash-2",r2);/**
 * @license lucide-react v1.11.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o2=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],R_=ue("trending-up",o2);/**
 * @license lucide-react v1.11.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l2=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],u2=ue("upload",l2);/**
 * @license lucide-react v1.11.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c2=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],h2=ue("users",c2);/**
 * @license lucide-react v1.11.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f2=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],ic=ue("x",f2),d2=()=>{};var C_={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _b=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let s=e.charCodeAt(i);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&i+1<e.length&&(e.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++i)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},m2=function(e){const t=[];let n=0,i=0;for(;n<e.length;){const s=e[n++];if(s<128)t[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=e[n++];t[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=e[n++],a=e[n++],l=e[n++],u=((s&7)<<18|(r&63)<<12|(a&63)<<6|l&63)-65536;t[i++]=String.fromCharCode(55296+(u>>10)),t[i++]=String.fromCharCode(56320+(u&1023))}else{const r=e[n++],a=e[n++];t[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|a&63)}}return t.join("")},vb={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<e.length;s+=3){const r=e[s],a=s+1<e.length,l=a?e[s+1]:0,u=s+2<e.length,h=u?e[s+2]:0,d=r>>2,m=(r&3)<<4|l>>4;let p=(l&15)<<2|h>>6,v=h&63;u||(v=64,a||(p=64)),i.push(n[d],n[m],n[p],n[v])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(_b(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):m2(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<e.length;){const r=n[e.charAt(s++)],l=s<e.length?n[e.charAt(s)]:0;++s;const h=s<e.length?n[e.charAt(s)]:64;++s;const m=s<e.length?n[e.charAt(s)]:64;if(++s,r==null||l==null||h==null||m==null)throw new p2;const p=r<<2|l>>4;if(i.push(p),h!==64){const v=l<<4&240|h>>2;if(i.push(v),m!==64){const C=h<<6&192|m;i.push(C)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class p2 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const g2=function(e){const t=_b(e);return vb.encodeByteArray(t,!0)},sc=function(e){return g2(e).replace(/\./g,"")},Tb=function(e){try{return vb.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y2(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _2=()=>y2().__FIREBASE_DEFAULTS__,v2=()=>{if(typeof process>"u"||typeof C_>"u")return;const e=C_.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},T2=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Tb(e[1]);return t&&JSON.parse(t)},Gc=()=>{try{return d2()||_2()||v2()||T2()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Eb=e=>{var t,n;return(n=(t=Gc())==null?void 0:t.emulatorHosts)==null?void 0:n[e]},E2=e=>{const t=Eb(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),i]:[t.substring(0,n),i]},bb=()=>{var e;return(e=Gc())==null?void 0:e.config},Ab=e=>{var t;return(t=Gc())==null?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b2{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A2(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=t||"demo-project",s=e.iat||0,r=e.sub||e.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}},...e};return[sc(JSON.stringify(n)),sc(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function S2(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ee())}function w2(){var t;const e=(t=Gc())==null?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function I2(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Sb(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function R2(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function C2(){const e=Ee();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function N2(){return!w2()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function wb(){try{return typeof indexedDB=="object"}catch{return!1}}function Ib(){return new Promise((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;t(((r=s.error)==null?void 0:r.message)||"")}}catch(n){t(n)}})}function x2(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D2="FirebaseError";class En extends Error{constructor(t,n,i){super(n),this.code=t,this.customData=i,this.name=D2,Object.setPrototypeOf(this,En.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ir.prototype.create)}}class ir{constructor(t,n,i){this.service=t,this.serviceName=n,this.errors=i}create(t,...n){const i=n[0]||{},s=`${this.service}/${t}`,r=this.errors[t],a=r?O2(r,i):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new En(s,l,i)}}function O2(e,t){return e.replace(M2,(n,i)=>{const s=t[i];return s!=null?String(s):`<${i}?>`})}const M2=/\{\$([^}]+)}/g;function V2(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function os(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const s of n){if(!i.includes(s))return!1;const r=e[s],a=t[s];if(N_(r)&&N_(a)){if(!os(r,a))return!1}else if(r!==a)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function N_(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ul(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach(s=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function k2(e,t){const n=new L2(e,t);return n.subscribe.bind(n)}class L2{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(i=>{this.error(i)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,i){let s;if(t===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");U2(t,["next","error","complete"])?s=t:s={next:t,error:n,complete:i},s.next===void 0&&(s.next=_f),s.error===void 0&&(s.error=_f),s.complete===void 0&&(s.complete=_f);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function U2(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function _f(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P2=1e3,j2=2,z2=4*60*60*1e3,B2=.5;function x_(e,t=P2,n=j2){const i=t*Math.pow(n,e),s=Math.round(B2*i*(Math.random()-.5)*2);return Math.min(z2,i+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(e){return e&&e._delegate?e._delegate:e}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cl(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Rb(e){return(await fetch(e,{credentials:"include"})).ok}class _n{constructor(t,n,i){this.name=t,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ds="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q2{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const i=new b2;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){const n=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(t==null?void 0:t.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(F2(t))try{this.getOrInitializeService({instanceIdentifier:Ds})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(t=Ds){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ds){return this.instances.has(t)}getOptions(t=Ds){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);i===l&&a.resolve(s)}return s}onInit(t,n){const i=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(i)??new Set;s.add(t),this.onInitCallbacks.set(i,s);const r=this.instances.get(i);return r&&t(r,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:H2(t),options:n}),this.instances.set(t,i),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch{}return i||null}normalizeInstanceIdentifier(t=Ds){return this.component?this.component.multipleInstances?t:Ds:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function H2(e){return e===Ds?void 0:e}function F2(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G2{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new q2(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ot;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(ot||(ot={}));const K2={debug:ot.DEBUG,verbose:ot.VERBOSE,info:ot.INFO,warn:ot.WARN,error:ot.ERROR,silent:ot.SILENT},Q2=ot.INFO,Y2={[ot.DEBUG]:"log",[ot.VERBOSE]:"log",[ot.INFO]:"info",[ot.WARN]:"warn",[ot.ERROR]:"error"},X2=(e,t,...n)=>{if(t<e.logLevel)return;const i=new Date().toISOString(),s=Y2[t];if(s)console[s](`[${i}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Kc{constructor(t){this.name=t,this._logLevel=Q2,this._logHandler=X2,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ot))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?K2[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ot.DEBUG,...t),this._logHandler(this,ot.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ot.VERBOSE,...t),this._logHandler(this,ot.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ot.INFO,...t),this._logHandler(this,ot.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ot.WARN,...t),this._logHandler(this,ot.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ot.ERROR,...t),this._logHandler(this,ot.ERROR,...t)}}const $2=(e,t)=>t.some(n=>e instanceof n);let D_,O_;function J2(){return D_||(D_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Z2(){return O_||(O_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Cb=new WeakMap,Od=new WeakMap,Nb=new WeakMap,vf=new WeakMap,rp=new WeakMap;function W2(e){const t=new Promise((n,i)=>{const s=()=>{e.removeEventListener("success",r),e.removeEventListener("error",a)},r=()=>{n(Ji(e.result)),s()},a=()=>{i(e.error),s()};e.addEventListener("success",r),e.addEventListener("error",a)});return t.then(n=>{n instanceof IDBCursor&&Cb.set(n,e)}).catch(()=>{}),rp.set(t,e),t}function tC(e){if(Od.has(e))return;const t=new Promise((n,i)=>{const s=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",a),e.removeEventListener("abort",a)},r=()=>{n(),s()},a=()=>{i(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",r),e.addEventListener("error",a),e.addEventListener("abort",a)});Od.set(e,t)}let Md={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Od.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Nb.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ji(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function eC(e){Md=e(Md)}function nC(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const i=e.call(Tf(this),t,...n);return Nb.set(i,t.sort?t.sort():[t]),Ji(i)}:Z2().includes(e)?function(...t){return e.apply(Tf(this),t),Ji(Cb.get(this))}:function(...t){return Ji(e.apply(Tf(this),t))}}function iC(e){return typeof e=="function"?nC(e):(e instanceof IDBTransaction&&tC(e),$2(e,J2())?new Proxy(e,Md):e)}function Ji(e){if(e instanceof IDBRequest)return W2(e);if(vf.has(e))return vf.get(e);const t=iC(e);return t!==e&&(vf.set(e,t),rp.set(t,e)),t}const Tf=e=>rp.get(e);function xb(e,t,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const a=indexedDB.open(e,t),l=Ji(a);return i&&a.addEventListener("upgradeneeded",u=>{i(Ji(a.result),u.oldVersion,u.newVersion,Ji(a.transaction),u)}),n&&a.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{r&&u.addEventListener("close",()=>r()),s&&u.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const sC=["get","getKey","getAll","getAllKeys","count"],rC=["put","add","delete","clear"],Ef=new Map;function M_(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Ef.get(t))return Ef.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,s=rC.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||sC.includes(n)))return;const r=async function(a,...l){const u=this.transaction(a,s?"readwrite":"readonly");let h=u.store;return i&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&u.done]))[0]};return Ef.set(t,r),r}eC(e=>({...e,get:(t,n,i)=>M_(t,n)||e.get(t,n,i),has:(t,n)=>!!M_(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aC{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(oC(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function oC(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Vd="@firebase/app",V_="0.14.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ui=new Kc("@firebase/app"),lC="@firebase/app-compat",uC="@firebase/analytics-compat",cC="@firebase/analytics",hC="@firebase/app-check-compat",fC="@firebase/app-check",dC="@firebase/auth",mC="@firebase/auth-compat",pC="@firebase/database",gC="@firebase/data-connect",yC="@firebase/database-compat",_C="@firebase/functions",vC="@firebase/functions-compat",TC="@firebase/installations",EC="@firebase/installations-compat",bC="@firebase/messaging",AC="@firebase/messaging-compat",SC="@firebase/performance",wC="@firebase/performance-compat",IC="@firebase/remote-config",RC="@firebase/remote-config-compat",CC="@firebase/storage",NC="@firebase/storage-compat",xC="@firebase/firestore",DC="@firebase/ai",OC="@firebase/firestore-compat",MC="firebase",VC="12.12.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kd="[DEFAULT]",kC={[Vd]:"fire-core",[lC]:"fire-core-compat",[cC]:"fire-analytics",[uC]:"fire-analytics-compat",[fC]:"fire-app-check",[hC]:"fire-app-check-compat",[dC]:"fire-auth",[mC]:"fire-auth-compat",[pC]:"fire-rtdb",[gC]:"fire-data-connect",[yC]:"fire-rtdb-compat",[_C]:"fire-fn",[vC]:"fire-fn-compat",[TC]:"fire-iid",[EC]:"fire-iid-compat",[bC]:"fire-fcm",[AC]:"fire-fcm-compat",[SC]:"fire-perf",[wC]:"fire-perf-compat",[IC]:"fire-rc",[RC]:"fire-rc-compat",[CC]:"fire-gcs",[NC]:"fire-gcs-compat",[xC]:"fire-fst",[OC]:"fire-fst-compat",[DC]:"fire-vertex","fire-js":"fire-js",[MC]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rc=new Map,LC=new Map,Ld=new Map;function k_(e,t){try{e.container.addComponent(t)}catch(n){ui.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Un(e){const t=e.name;if(Ld.has(t))return ui.debug(`There were multiple attempts to register component ${t}.`),!1;Ld.set(t,e);for(const n of rc.values())k_(n,e);for(const n of LC.values())k_(n,e);return!0}function sr(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function pn(e){return e==null?!1:e.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Zi=new ir("app","Firebase",UC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PC{constructor(t,n,i){this._isDeleted=!1,this._options={...t},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new _n("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Zi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const va=VC;function Db(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const i={name:kd,automaticDataCollectionEnabled:!0,...t},s=i.name;if(typeof s!="string"||!s)throw Zi.create("bad-app-name",{appName:String(s)});if(n||(n=bb()),!n)throw Zi.create("no-options");const r=rc.get(s);if(r){if(os(n,r.options)&&os(i,r.config))return r;throw Zi.create("duplicate-app",{appName:s})}const a=new G2(s);for(const u of Ld.values())a.addComponent(u);const l=new PC(n,i,a);return rc.set(s,l),l}function ap(e=kd){const t=rc.get(e);if(!t&&e===kd&&bb())return Db();if(!t)throw Zi.create("no-app",{appName:e});return t}function cn(e,t,n){let i=kC[e]??e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),r=t.match(/\s|\//);if(s||r){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&r&&a.push("and"),r&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ui.warn(a.join(" "));return}Un(new _n(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jC="firebase-heartbeat-database",zC=1,Ho="firebase-heartbeat-store";let bf=null;function Ob(){return bf||(bf=xb(jC,zC,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Ho)}catch(n){console.warn(n)}}}}).catch(e=>{throw Zi.create("idb-open",{originalErrorMessage:e.message})})),bf}async function BC(e){try{const n=(await Ob()).transaction(Ho),i=await n.objectStore(Ho).get(Mb(e));return await n.done,i}catch(t){if(t instanceof En)ui.warn(t.message);else{const n=Zi.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});ui.warn(n.message)}}}async function L_(e,t){try{const i=(await Ob()).transaction(Ho,"readwrite");await i.objectStore(Ho).put(t,Mb(e)),await i.done}catch(n){if(n instanceof En)ui.warn(n.message);else{const i=Zi.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ui.warn(i.message)}}}function Mb(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qC=1024,HC=30;class FC{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new KC(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var t,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=U_();if(((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(a=>a.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats.length>HC){const a=QC(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){ui.warn(i)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=U_(),{heartbeatsToSend:i,unsentEntries:s}=GC(this._heartbeatsCache.heartbeats),r=sc(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return ui.warn(n),""}}}function U_(){return new Date().toISOString().substring(0,10)}function GC(e,t=qC){const n=[];let i=e.slice();for(const s of e){const r=n.find(a=>a.agent===s.agent);if(r){if(r.dates.push(s.date),P_(n)>t){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),P_(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class KC{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return wb()?Ib().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await BC(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const i=await this.read();return L_(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const i=await this.read();return L_(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function P_(e){return sc(JSON.stringify({version:2,heartbeats:e})).length}function QC(e){if(e.length===0)return-1;let t=0,n=e[0].date;for(let i=1;i<e.length;i++)e[i].date<n&&(n=e[i].date,t=i);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YC(e){Un(new _n("platform-logger",t=>new aC(t),"PRIVATE")),Un(new _n("heartbeat",t=>new FC(t),"PRIVATE")),cn(Vd,V_,e),cn(Vd,V_,"esm2020"),cn("fire-js","")}YC("");var XC="firebase",$C="12.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */cn(XC,$C,"app");const Vb="@firebase/installations",op="0.6.21";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kb=1e4,Lb=`w:${op}`,Ub="FIS_v2",JC="https://firebaseinstallations.googleapis.com/v1",ZC=60*60*1e3,WC="installations",tN="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eN={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ks=new ir(WC,tN,eN);function Pb(e){return e instanceof En&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jb({projectId:e}){return`${JC}/projects/${e}/installations`}function zb(e){return{token:e.token,requestStatus:2,expiresIn:iN(e.expiresIn),creationTime:Date.now()}}async function Bb(e,t){const i=(await t.json()).error;return Ks.create("request-failed",{requestName:e,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function qb({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function nN(e,{refreshToken:t}){const n=qb(e);return n.append("Authorization",sN(t)),n}async function Hb(e){const t=await e();return t.status>=500&&t.status<600?e():t}function iN(e){return Number(e.replace("s","000"))}function sN(e){return`${Ub} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rN({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const i=jb(e),s=qb(e),r=t.getImmediate({optional:!0});if(r){const h=await r.getHeartbeatsHeader();h&&s.append("x-firebase-client",h)}const a={fid:n,authVersion:Ub,appId:e.appId,sdkVersion:Lb},l={method:"POST",headers:s,body:JSON.stringify(a)},u=await Hb(()=>fetch(i,l));if(u.ok){const h=await u.json();return{fid:h.fid||n,registrationStatus:2,refreshToken:h.refreshToken,authToken:zb(h.authToken)}}else throw await Bb("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fb(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aN(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oN=/^[cdef][\w-]{21}$/,Ud="";function lN(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=uN(e);return oN.test(n)?n:Ud}catch{return Ud}}function uN(e){return aN(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qc(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gb=new Map;function Kb(e,t){const n=Qc(e);Qb(n,t),cN(n,t)}function Qb(e,t){const n=Gb.get(e);if(n)for(const i of n)i(t)}function cN(e,t){const n=hN();n&&n.postMessage({key:e,fid:t}),fN()}let Os=null;function hN(){return!Os&&"BroadcastChannel"in self&&(Os=new BroadcastChannel("[Firebase] FID Change"),Os.onmessage=e=>{Qb(e.data.key,e.data.fid)}),Os}function fN(){Gb.size===0&&Os&&(Os.close(),Os=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dN="firebase-installations-database",mN=1,Qs="firebase-installations-store";let Af=null;function lp(){return Af||(Af=xb(dN,mN,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Qs)}}})),Af}async function ac(e,t){const n=Qc(e),s=(await lp()).transaction(Qs,"readwrite"),r=s.objectStore(Qs),a=await r.get(n);return await r.put(t,n),await s.done,(!a||a.fid!==t.fid)&&Kb(e,t.fid),t}async function Yb(e){const t=Qc(e),i=(await lp()).transaction(Qs,"readwrite");await i.objectStore(Qs).delete(t),await i.done}async function Yc(e,t){const n=Qc(e),s=(await lp()).transaction(Qs,"readwrite"),r=s.objectStore(Qs),a=await r.get(n),l=t(a);return l===void 0?await r.delete(n):await r.put(l,n),await s.done,l&&(!a||a.fid!==l.fid)&&Kb(e,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function up(e){let t;const n=await Yc(e.appConfig,i=>{const s=pN(i),r=gN(e,s);return t=r.registrationPromise,r.installationEntry});return n.fid===Ud?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function pN(e){const t=e||{fid:lN(),registrationStatus:0};return Xb(t)}function gN(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Ks.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},i=yN(e,n);return{installationEntry:n,registrationPromise:i}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:_N(e)}:{installationEntry:t}}async function yN(e,t){try{const n=await rN(e,t);return ac(e.appConfig,n)}catch(n){throw Pb(n)&&n.customData.serverCode===409?await Yb(e.appConfig):await ac(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function _N(e){let t=await j_(e.appConfig);for(;t.registrationStatus===1;)await Fb(100),t=await j_(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:i}=await up(e);return i||n}return t}function j_(e){return Yc(e,t=>{if(!t)throw Ks.create("installation-not-found");return Xb(t)})}function Xb(e){return vN(e)?{fid:e.fid,registrationStatus:0}:e}function vN(e){return e.registrationStatus===1&&e.registrationTime+kb<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TN({appConfig:e,heartbeatServiceProvider:t},n){const i=EN(e,n),s=nN(e,n),r=t.getImmediate({optional:!0});if(r){const h=await r.getHeartbeatsHeader();h&&s.append("x-firebase-client",h)}const a={installation:{sdkVersion:Lb,appId:e.appId}},l={method:"POST",headers:s,body:JSON.stringify(a)},u=await Hb(()=>fetch(i,l));if(u.ok){const h=await u.json();return zb(h)}else throw await Bb("Generate Auth Token",u)}function EN(e,{fid:t}){return`${jb(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cp(e,t=!1){let n;const i=await Yc(e.appConfig,r=>{if(!$b(r))throw Ks.create("not-registered");const a=r.authToken;if(!t&&SN(a))return r;if(a.requestStatus===1)return n=bN(e,t),r;{if(!navigator.onLine)throw Ks.create("app-offline");const l=IN(r);return n=AN(e,l),l}});return n?await n:i.authToken}async function bN(e,t){let n=await z_(e.appConfig);for(;n.authToken.requestStatus===1;)await Fb(100),n=await z_(e.appConfig);const i=n.authToken;return i.requestStatus===0?cp(e,t):i}function z_(e){return Yc(e,t=>{if(!$b(t))throw Ks.create("not-registered");const n=t.authToken;return RN(n)?{...t,authToken:{requestStatus:0}}:t})}async function AN(e,t){try{const n=await TN(e,t),i={...t,authToken:n};return await ac(e.appConfig,i),n}catch(n){if(Pb(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Yb(e.appConfig);else{const i={...t,authToken:{requestStatus:0}};await ac(e.appConfig,i)}throw n}}function $b(e){return e!==void 0&&e.registrationStatus===2}function SN(e){return e.requestStatus===2&&!wN(e)}function wN(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+ZC}function IN(e){const t={requestStatus:1,requestTime:Date.now()};return{...e,authToken:t}}function RN(e){return e.requestStatus===1&&e.requestTime+kb<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CN(e){const t=e,{installationEntry:n,registrationPromise:i}=await up(t);return i?i.catch(console.error):cp(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NN(e,t=!1){const n=e;return await xN(n),(await cp(n,t)).token}async function xN(e){const{registrationPromise:t}=await up(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DN(e){if(!e||!e.options)throw Sf("App Configuration");if(!e.name)throw Sf("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Sf(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Sf(e){return Ks.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jb="installations",ON="installations-internal",MN=e=>{const t=e.getProvider("app").getImmediate(),n=DN(t),i=sr(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},VN=e=>{const t=e.getProvider("app").getImmediate(),n=sr(t,Jb).getImmediate();return{getId:()=>CN(n),getToken:s=>NN(n,s)}};function kN(){Un(new _n(Jb,MN,"PUBLIC")),Un(new _n(ON,VN,"PRIVATE"))}kN();cn(Vb,op);cn(Vb,op,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oc="analytics",LN="firebase_id",UN="origin",PN=60*1e3,jN="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",hp="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ie=new Kc("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zN={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Xe=new ir("analytics","Analytics",zN);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BN(e){if(!e.startsWith(hp)){const t=Xe.create("invalid-gtag-resource",{gtagURL:e});return Ie.warn(t.message),""}return e}function Zb(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function qN(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function HN(e,t){const n=qN("firebase-js-sdk-policy",{createScriptURL:BN}),i=document.createElement("script"),s=`${hp}?l=${e}&id=${t}`;i.src=n?n==null?void 0:n.createScriptURL(s):s,i.async=!0,document.head.appendChild(i)}function FN(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function GN(e,t,n,i,s,r){const a=i[s];try{if(a)await t[a];else{const u=(await Zb(n)).find(h=>h.measurementId===s);u&&await t[u.appId]}}catch(l){Ie.error(l)}e("config",s,r)}async function KN(e,t,n,i,s){try{let r=[];if(s&&s.send_to){let a=s.send_to;Array.isArray(a)||(a=[a]);const l=await Zb(n);for(const u of a){const h=l.find(m=>m.measurementId===u),d=h&&t[h.appId];if(d)r.push(d);else{r=[];break}}}r.length===0&&(r=Object.values(t)),await Promise.all(r),e("event",i,s||{})}catch(r){Ie.error(r)}}function QN(e,t,n,i){async function s(r,...a){try{if(r==="event"){const[l,u]=a;await KN(e,t,n,l,u)}else if(r==="config"){const[l,u]=a;await GN(e,t,n,i,l,u)}else if(r==="consent"){const[l,u]=a;e("consent",l,u)}else if(r==="get"){const[l,u,h]=a;e("get",l,u,h)}else if(r==="set"){const[l]=a;e("set",l)}else e(r,...a)}catch(l){Ie.error(l)}}return s}function YN(e,t,n,i,s){let r=function(...a){window[i].push(arguments)};return window[s]&&typeof window[s]=="function"&&(r=window[s]),window[s]=QN(r,e,t,n),{gtagCore:r,wrappedGtag:window[s]}}function XN(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(hp)&&n.src.includes(e))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $N=30,JN=1e3;class ZN{constructor(t={},n=JN){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Wb=new ZN;function WN(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function tx(e){var a;const{appId:t,apiKey:n}=e,i={method:"GET",headers:WN(n)},s=jN.replace("{app-id}",t),r=await fetch(s,i);if(r.status!==200&&r.status!==304){let l="";try{const u=await r.json();(a=u.error)!=null&&a.message&&(l=u.error.message)}catch{}throw Xe.create("config-fetch-failed",{httpStatus:r.status,responseMessage:l})}return r.json()}async function ex(e,t=Wb,n){const{appId:i,apiKey:s,measurementId:r}=e.options;if(!i)throw Xe.create("no-app-id");if(!s){if(r)return{measurementId:r,appId:i};throw Xe.create("no-api-key")}const a=t.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new sx;return setTimeout(async()=>{l.abort()},PN),tA({appId:i,apiKey:s,measurementId:r},a,l,t)}async function tA(e,{throttleEndTimeMillis:t,backoffCount:n},i,s=Wb){var l;const{appId:r,measurementId:a}=e;try{await nx(i,t)}catch(u){if(a)return Ie.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:r,measurementId:a};throw u}try{const u=await tx(e);return s.deleteThrottleMetadata(r),u}catch(u){const h=u;if(!ix(h)){if(s.deleteThrottleMetadata(r),a)return Ie.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:r,measurementId:a};throw u}const d=Number((l=h==null?void 0:h.customData)==null?void 0:l.httpStatus)===503?x_(n,s.intervalMillis,$N):x_(n,s.intervalMillis),m={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return s.setThrottleMetadata(r,m),Ie.debug(`Calling attemptFetch again in ${d} millis`),tA(e,m,i,s)}}function nx(e,t){return new Promise((n,i)=>{const s=Math.max(t-Date.now(),0),r=setTimeout(n,s);e.addEventListener(()=>{clearTimeout(r),i(Xe.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function ix(e){if(!(e instanceof En)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class sx{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function rx(e,t,n,i,s){if(s&&s.global){e("event",n,i);return}else{const r=await t,a={...i,send_to:r};e("event",n,a)}}async function ax(e,t,n,i){if(i&&i.global){const s={};for(const r of Object.keys(n))s[`user_properties.${r}`]=n[r];return e("set",s),Promise.resolve()}else{const s=await t;e("config",s,{update:!0,user_properties:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ox(){if(wb())try{await Ib()}catch(e){return Ie.warn(Xe.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return Ie.warn(Xe.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function lx(e,t,n,i,s,r,a){const l=ex(e);l.then(p=>{n[p.measurementId]=p.appId,e.options.measurementId&&p.measurementId!==e.options.measurementId&&Ie.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${p.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(p=>Ie.error(p)),t.push(l);const u=ox().then(p=>{if(p)return i.getId()}),[h,d]=await Promise.all([l,u]);XN(r)||HN(r,h.measurementId),s("js",new Date);const m=(a==null?void 0:a.config)??{};return m[UN]="firebase",m.update=!0,d!=null&&(m[LN]=d),s("config",h.measurementId,m),h.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ux{constructor(t){this.app=t}_delete(){return delete zr[this.app.options.appId],Promise.resolve()}}let zr={},B_=[];const q_={};let wf="dataLayer",cx="gtag",H_,fp,F_=!1;function hx(){const e=[];if(Sb()&&e.push("This is a browser extension environment."),x2()||e.push("Cookies are not available."),e.length>0){const t=e.map((i,s)=>`(${s+1}) ${i}`).join(" "),n=Xe.create("invalid-analytics-context",{errorInfo:t});Ie.warn(n.message)}}function fx(e,t,n){hx();const i=e.options.appId;if(!i)throw Xe.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)Ie.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Xe.create("no-api-key");if(zr[i]!=null)throw Xe.create("already-exists",{id:i});if(!F_){FN(wf);const{wrappedGtag:r,gtagCore:a}=YN(zr,B_,q_,wf,cx);fp=r,H_=a,F_=!0}return zr[i]=lx(e,B_,q_,t,H_,wf,n),new ux(e)}function dx(e=ap()){e=Ht(e);const t=sr(e,oc);return t.isInitialized()?t.getImmediate():mx(e)}function mx(e,t={}){const n=sr(e,oc);if(n.isInitialized()){const s=n.getImmediate();if(os(t,n.getOptions()))return s;throw Xe.create("already-initialized")}return n.initialize({options:t})}function px(e,t,n){e=Ht(e),ax(fp,zr[e.app.options.appId],t,n).catch(i=>Ie.error(i))}function gx(e,t,n,i){e=Ht(e),rx(fp,zr[e.app.options.appId],t,n,i).catch(s=>Ie.error(s))}const G_="@firebase/analytics",K_="0.10.21";function yx(){Un(new _n(oc,(t,{options:n})=>{const i=t.getProvider("app").getImmediate(),s=t.getProvider("installations-internal").getImmediate();return fx(i,s,n)},"PUBLIC")),Un(new _n("analytics-internal",e,"PRIVATE")),cn(G_,K_),cn(G_,K_,"esm2020");function e(t){try{const n=t.getProvider(oc).getImmediate();return{logEvent:(i,s,r)=>gx(n,i,s,r),setUserProperties:(i,s)=>px(n,i,s)}}catch(n){throw Xe.create("interop-component-reg-failed",{reason:n})}}}yx();function eA(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const _x=eA,nA=new ir("auth","Firebase",eA());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc=new Kc("@firebase/auth");function vx(e,...t){lc.logLevel<=ot.WARN&&lc.warn(`Auth (${va}): ${e}`,...t)}function _u(e,...t){lc.logLevel<=ot.ERROR&&lc.error(`Auth (${va}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ci(e,...t){throw dp(e,...t)}function On(e,...t){return dp(e,...t)}function iA(e,t,n){const i={..._x(),[t]:n};return new ir("auth","Firebase",i).create(t,{appName:e.name})}function Wi(e){return iA(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function dp(e,...t){if(typeof e!="string"){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return nA.create(e,...t)}function X(e,t,...n){if(!e)throw dp(t,...n)}function Wn(e){const t="INTERNAL ASSERTION FAILED: "+e;throw _u(t),new Error(t)}function hi(e,t){e||Wn(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pd(){var e;return typeof self<"u"&&((e=self.location)==null?void 0:e.href)||""}function Tx(){return Q_()==="http:"||Q_()==="https:"}function Q_(){var e;return typeof self<"u"&&((e=self.location)==null?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ex(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Tx()||Sb()||"connection"in navigator)?navigator.onLine:!0}function bx(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(t,n){this.shortDelay=t,this.longDelay=n,hi(n>t,"Short delay should be less than long delay!"),this.isMobile=S2()||R2()}get(){return Ex()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mp(e,t){hi(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sA{static initialize(t,n,i){this.fetchImpl=t,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Wn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Wn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Wn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ax={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sx=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],wx=new hl(3e4,6e4);function Xc(e,t){return e.tenantId&&!t.tenantId?{...t,tenantId:e.tenantId}:t}async function Ta(e,t,n,i,s={}){return rA(e,s,async()=>{let r={},a={};i&&(t==="GET"?a=i:r={body:JSON.stringify(i)});const l=ul({key:e.config.apiKey,...a}).slice(1),u=await e._getAdditionalHeaders();u["Content-Type"]="application/json",e.languageCode&&(u["X-Firebase-Locale"]=e.languageCode);const h={method:t,headers:u,...r};return I2()||(h.referrerPolicy="no-referrer"),e.emulatorConfig&&cl(e.emulatorConfig.host)&&(h.credentials="include"),sA.fetch()(await oA(e,e.config.apiHost,n,l),h)})}async function rA(e,t,n){e._canInitEmulator=!1;const i={...Ax,...t};try{const s=new Ix(e),r=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const a=await r.json();if("needConfirmation"in a)throw $l(e,"account-exists-with-different-credential",a);if(r.ok&&!("errorMessage"in a))return a;{const l=r.ok?a.errorMessage:a.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw $l(e,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw $l(e,"email-already-in-use",a);if(u==="USER_DISABLED")throw $l(e,"user-disabled",a);const d=i[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw iA(e,d,h);ci(e,d)}}catch(s){if(s instanceof En)throw s;ci(e,"network-request-failed",{message:String(s)})}}async function aA(e,t,n,i,s={}){const r=await Ta(e,t,n,i,s);return"mfaPendingCredential"in r&&ci(e,"multi-factor-auth-required",{_serverResponse:r}),r}async function oA(e,t,n,i){const s=`${t}${n}?${i}`,r=e,a=r.config.emulator?mp(e.config,s):`${e.config.apiScheme}://${s}`;return Sx.includes(n)&&(await r._persistenceManagerAvailable,r._getPersistenceType()==="COOKIE")?r._getPersistence()._getFinalTarget(a).toString():a}class Ix{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(On(this.auth,"network-request-failed")),wx.get())})}}function $l(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=On(e,t,i);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rx(e,t){return Ta(e,"POST","/v1/accounts:delete",t)}async function uc(e,t){return Ta(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ao(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function Cx(e,t=!1){const n=Ht(e),i=await n.getIdToken(t),s=pp(i);X(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,a=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:Ao(If(s.auth_time)),issuedAtTime:Ao(If(s.iat)),expirationTime:Ao(If(s.exp)),signInProvider:a||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function If(e){return Number(e)*1e3}function pp(e){const[t,n,i]=e.split(".");if(t===void 0||n===void 0||i===void 0)return _u("JWT malformed, contained fewer than 3 sections"),null;try{const s=Tb(n);return s?JSON.parse(s):(_u("Failed to decode base64 JWT payload"),null)}catch(s){return _u("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Y_(e){const t=pp(e);return X(t,"internal-error"),X(typeof t.exp<"u","internal-error"),X(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fo(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof En&&Nx(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function Nx({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xx{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){if(t){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ao(this.lastLoginAt),this.creationTime=Ao(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cc(e){var m;const t=e.auth,n=await e.getIdToken(),i=await Fo(e,uc(t,{idToken:n}));X(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const r=(m=s.providerUserInfo)!=null&&m.length?lA(s.providerUserInfo):[],a=Ox(e.providerData,r),l=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(a!=null&&a.length),h=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new jd(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(e,d)}async function Dx(e){const t=Ht(e);await cc(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Ox(e,t){return[...e.filter(i=>!t.some(s=>s.providerId===i.providerId)),...t]}function lA(e){return e.map(({providerId:t,...n})=>({providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mx(e,t){const n=await rA(e,{},async()=>{const i=ul({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:r}=e.config,a=await oA(e,s,"/v1/token",`key=${r}`),l=await e._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:i};return e.emulatorConfig&&cl(e.emulatorConfig.host)&&(u.credentials="include"),sA.fetch()(a,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Vx(e,t){return Ta(e,"POST","/v2/accounts:revokeToken",Xc(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){X(t.idToken,"internal-error"),X(typeof t.idToken<"u","internal-error"),X(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Y_(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){X(t.length!==0,"internal-error");const n=Y_(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(X(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:i,refreshToken:s,expiresIn:r}=await Mx(t,n);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(t,n,i){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(t,n){const{refreshToken:i,accessToken:s,expirationTime:r}=n,a=new Br;return i&&(X(typeof i=="string","internal-error",{appName:t}),a.refreshToken=i),s&&(X(typeof s=="string","internal-error",{appName:t}),a.accessToken=s),r&&(X(typeof r=="number","internal-error",{appName:t}),a.expirationTime=r),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Br,this.toJSON())}_performRefresh(){return Wn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Si(e,t){X(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class gn{constructor({uid:t,auth:n,stsTokenManager:i,...s}){this.providerId="firebase",this.proactiveRefresh=new xx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new jd(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await Fo(this,this.stsTokenManager.getToken(this.auth,t));return X(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return Cx(this,t)}reload(){return Dx(this)}_assign(t){this!==t&&(X(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>({...n})),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new gn({...this,auth:t,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(t){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let i=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),i=!0),n&&await cc(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(pn(this.auth.app))return Promise.reject(Wi(this.auth));const t=await this.getIdToken();return await Fo(this,Rx(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>({...t})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){const i=n.displayName??void 0,s=n.email??void 0,r=n.phoneNumber??void 0,a=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,h=n.createdAt??void 0,d=n.lastLoginAt??void 0,{uid:m,emailVerified:p,isAnonymous:v,providerData:C,stsTokenManager:M}=n;X(m&&M,t,"internal-error");const U=Br.fromJSON(this.name,M);X(typeof m=="string",t,"internal-error"),Si(i,t.name),Si(s,t.name),X(typeof p=="boolean",t,"internal-error"),X(typeof v=="boolean",t,"internal-error"),Si(r,t.name),Si(a,t.name),Si(l,t.name),Si(u,t.name),Si(h,t.name),Si(d,t.name);const S=new gn({uid:m,auth:t,email:s,emailVerified:p,displayName:i,isAnonymous:v,photoURL:a,phoneNumber:r,tenantId:l,stsTokenManager:U,createdAt:h,lastLoginAt:d});return C&&Array.isArray(C)&&(S.providerData=C.map(b=>({...b}))),u&&(S._redirectEventId=u),S}static async _fromIdTokenResponse(t,n,i=!1){const s=new Br;s.updateFromServerResponse(n);const r=new gn({uid:n.localId,auth:t,stsTokenManager:s,isAnonymous:i});return await cc(r),r}static async _fromGetAccountInfoResponse(t,n,i){const s=n.users[0];X(s.localId!==void 0,"internal-error");const r=s.providerUserInfo!==void 0?lA(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(r!=null&&r.length),l=new Br;l.updateFromIdToken(i);const u=new gn({uid:s.localId,auth:t,stsTokenManager:l,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:r,metadata:new jd(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(r!=null&&r.length)};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X_=new Map;function ti(e){hi(e instanceof Function,"Expected a class definition");let t=X_.get(e);return t?(hi(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,X_.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uA{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}uA.type="NONE";const $_=uA;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vu(e,t,n){return`firebase:${e}:${t}:${n}`}class qr{constructor(t,n,i){this.persistence=t,this.auth=n,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=vu(this.userKey,s.apiKey,r),this.fullPersistenceKey=vu("persistence",s.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const n=await uc(this.auth,{idToken:t}).catch(()=>{});return n?gn._fromGetAccountInfoResponse(this.auth,n,t):null}return gn._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,i="authUser"){if(!n.length)return new qr(ti($_),t,i);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let r=s[0]||ti($_);const a=vu(i,t.config.apiKey,t.name);let l=null;for(const h of n)try{const d=await h._get(a);if(d){let m;if(typeof d=="string"){const p=await uc(t,{idToken:d}).catch(()=>{});if(!p)break;m=await gn._fromGetAccountInfoResponse(t,p,d)}else m=gn._fromJSON(t,d);h!==r&&(l=m),r=h;break}}catch{}const u=s.filter(h=>h._shouldAllowMigration);return!r._shouldAllowMigration||!u.length?new qr(r,t,i):(r=u[0],l&&await r._set(a,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==r)try{await h._remove(a)}catch{}})),new qr(r,t,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J_(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(dA(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(cA(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(pA(t))return"Blackberry";if(gA(t))return"Webos";if(hA(t))return"Safari";if((t.includes("chrome/")||fA(t))&&!t.includes("edge/"))return"Chrome";if(mA(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=e.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function cA(e=Ee()){return/firefox\//i.test(e)}function hA(e=Ee()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function fA(e=Ee()){return/crios\//i.test(e)}function dA(e=Ee()){return/iemobile/i.test(e)}function mA(e=Ee()){return/android/i.test(e)}function pA(e=Ee()){return/blackberry/i.test(e)}function gA(e=Ee()){return/webos/i.test(e)}function gp(e=Ee()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function kx(e=Ee()){var t;return gp(e)&&!!((t=window.navigator)!=null&&t.standalone)}function Lx(){return C2()&&document.documentMode===10}function yA(e=Ee()){return gp(e)||mA(e)||gA(e)||pA(e)||/windows phone/i.test(e)||dA(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _A(e,t=[]){let n;switch(e){case"Browser":n=J_(Ee());break;case"Worker":n=`${J_(Ee())}-${e}`;break;default:n=e}const i=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${va}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ux{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const i=r=>new Promise((a,l)=>{try{const u=t(r);a(u)}catch(u){l(u)}});i.onAbort=n,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const i of this.queue)await i(t),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Px(e,t={}){return Ta(e,"GET","/v2/passwordPolicy",Xc(e,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jx=6;class zx{constructor(t){var i;const n=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??jx,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((i=t.allowedNonAlphanumericCharacters)==null?void 0:i.join(""))??"",this.forceUpgradeOnSignin=t.forceUpgradeOnSignin??!1,this.schemaVersion=t.schemaVersion}validatePassword(t){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,n),this.validatePasswordCharacterOptions(t,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(t,n){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=t.length>=i),s&&(n.meetsMaxPasswordLength=t.length<=s)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let s=0;s<t.length;s++)i=t.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(t,n,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bx{constructor(t,n,i,s){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Z_(this),this.idTokenSubscription=new Z_(this),this.beforeStateQueue=new Ux(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=nA,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(r=>this._resolvePersistenceManagerAvailable=r)}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=ti(n)),this._initializationPromise=this.queue(async()=>{var i,s,r;if(!this._deleted&&(this.persistenceManager=await qr.create(this,t),(i=this._resolvePersistenceManagerAvailable)==null||i.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)==null?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await uc(this,{idToken:t}),i=await gn._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(i)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var r;if(pn(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(r=this.redirectUser)==null?void 0:r._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(t);(!a||a===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await cc(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=bx()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(pn(this.app))return Promise.reject(Wi(this));const n=t?Ht(t):null;return n&&X(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&X(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return pn(this.app)?Promise.reject(Wi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return pn(this.app)?Promise.reject(Wi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ti(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await Px(this),n=new zx(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new ir("auth","Firebase",t())}onAuthStateChanged(t,n,i){return this.registerStateListener(this.authStateSubscription,t,n,i)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,i){return this.registerStateListener(this.idTokenSubscription,t,n,i)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const i=this.onAuthStateChanged(()=>{i(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await Vx(this,i)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)==null?void 0:t.toJSON()}}async _setRedirectUser(t,n){const i=await this.getOrInitRedirectPersistenceManager(n);return t===null?i.removeCurrentUser():i.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&ti(t)||this._popupRedirectResolver;X(n,this,"argument-error"),this.redirectPersistenceManager=await qr.create(this,[ti(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===t?this._currentUser:((i=this.redirectUser)==null?void 0:i._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,i,s){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(X(l,this,"internal-error"),l.then(()=>{a||r(this.currentUser)}),typeof n=="function"){const u=t.addObserver(n,i,s);return()=>{a=!0,u()}}else{const u=t.addObserver(n);return()=>{a=!0,u()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=_A(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var n;if(pn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return t!=null&&t.error&&vx(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function $c(e){return Ht(e)}class Z_{constructor(t){this.auth=t,this.observer=null,this.addObserver=k2(n=>this.observer=n)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yp={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function qx(e){yp=e}function Hx(e){return yp.loadJS(e)}function Fx(){return yp.gapiScript}function Gx(e){return`__${e}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kx(e,t){const n=sr(e,"auth");if(n.isInitialized()){const s=n.getImmediate(),r=n.getOptions();if(os(r,t??{}))return s;ci(s,"already-initialized")}return n.initialize({options:t})}function Qx(e,t){const n=(t==null?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(ti);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,t==null?void 0:t.popupRedirectResolver)}function Yx(e,t,n){const i=$c(e);X(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");const s=!1,r=vA(t),{host:a,port:l}=Xx(t),u=l===null?"":`:${l}`,h={url:`${r}//${a}${u}/`},d=Object.freeze({host:a,port:l,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!i._canInitEmulator){X(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),X(os(h,i.config.emulator)&&os(d,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=h,i.emulatorConfig=d,i.settings.appVerificationDisabledForTesting=!0,cl(a)?Rb(`${r}//${a}${u}`):$x()}function vA(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Xx(e){const t=vA(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:W_(i.substr(r.length+1))}}else{const[r,a]=i.split(":");return{host:r,port:W_(a)}}}function W_(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function $x(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TA{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Wn("not implemented")}_getIdTokenResponse(t){return Wn("not implemented")}_linkToIdToken(t,n){return Wn("not implemented")}_getReauthenticationResolver(t){return Wn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hr(e,t){return aA(e,"POST","/v1/accounts:signInWithIdp",Xc(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jx="http://localhost";class Ys extends TA{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Ys(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):ci("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:i,signInMethod:s,...r}=n;if(!i||!s)return null;const a=new Ys(i,s);return a.idToken=r.idToken||void 0,a.accessToken=r.accessToken||void 0,a.secret=r.secret,a.nonce=r.nonce,a.pendingToken=r.pendingToken||null,a}_getIdTokenResponse(t){const n=this.buildRequest();return Hr(t,n)}_linkToIdToken(t,n){const i=this.buildRequest();return i.idToken=n,Hr(t,i)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Hr(t,n)}buildRequest(){const t={requestUri:Jx,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=ul(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EA{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl extends EA{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di extends fl{constructor(){super("facebook.com")}static credential(t){return Ys._fromParams({providerId:Di.PROVIDER_ID,signInMethod:Di.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Di.credentialFromTaggedObject(t)}static credentialFromError(t){return Di.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Di.credential(t.oauthAccessToken)}catch{return null}}}Di.FACEBOOK_SIGN_IN_METHOD="facebook.com";Di.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi extends fl{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Ys._fromParams({providerId:Oi.PROVIDER_ID,signInMethod:Oi.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Oi.credentialFromTaggedObject(t)}static credentialFromError(t){return Oi.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:i}=t;if(!n&&!i)return null;try{return Oi.credential(n,i)}catch{return null}}}Oi.GOOGLE_SIGN_IN_METHOD="google.com";Oi.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi extends fl{constructor(){super("github.com")}static credential(t){return Ys._fromParams({providerId:Mi.PROVIDER_ID,signInMethod:Mi.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Mi.credentialFromTaggedObject(t)}static credentialFromError(t){return Mi.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Mi.credential(t.oauthAccessToken)}catch{return null}}}Mi.GITHUB_SIGN_IN_METHOD="github.com";Mi.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi extends fl{constructor(){super("twitter.com")}static credential(t,n){return Ys._fromParams({providerId:Vi.PROVIDER_ID,signInMethod:Vi.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Vi.credentialFromTaggedObject(t)}static credentialFromError(t){return Vi.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=t;if(!n||!i)return null;try{return Vi.credential(n,i)}catch{return null}}}Vi.TWITTER_SIGN_IN_METHOD="twitter.com";Vi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zx(e,t){return aA(e,"POST","/v1/accounts:signUp",Xc(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,i,s=!1){const r=await gn._fromIdTokenResponse(t,i,s),a=t0(i);return new ls({user:r,providerId:a,_tokenResponse:i,operationType:n})}static async _forOperation(t,n,i){await t._updateTokensIfNecessary(i,!0);const s=t0(i);return new ls({user:t,providerId:s,_tokenResponse:i,operationType:n})}}function t0(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wx(e){var s;if(pn(e.app))return Promise.reject(Wi(e));const t=$c(e);if(await t._initializationPromise,(s=t.currentUser)!=null&&s.isAnonymous)return new ls({user:t.currentUser,providerId:null,operationType:"signIn"});const n=await Zx(t,{returnSecureToken:!0}),i=await ls._fromIdTokenResponse(t,"signIn",n,!0);return await t._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc extends En{constructor(t,n,i,s){super(n.code,n.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,hc.prototype),this.customData={appName:t.name,tenantId:t.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(t,n,i,s){return new hc(t,n,i,s)}}function bA(e,t,n,i){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?hc._fromErrorAndOperation(e,r,t,i):r})}async function tD(e,t,n=!1){const i=await Fo(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return ls._forOperation(e,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eD(e,t,n=!1){const{auth:i}=e;if(pn(i.app))return Promise.reject(Wi(i));const s="reauthenticate";try{const r=await Fo(e,bA(i,s,t,e),n);X(r.idToken,i,"internal-error");const a=pp(r.idToken);X(a,i,"internal-error");const{sub:l}=a;return X(e.uid===l,i,"user-mismatch"),ls._forOperation(e,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&ci(i,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nD(e,t,n=!1){if(pn(e.app))return Promise.reject(Wi(e));const i="signIn",s=await bA(e,i,t),r=await ls._fromIdTokenResponse(e,i,s);return n||await e._updateCurrentUser(r.user),r}function iD(e,t,n,i){return Ht(e).onIdTokenChanged(t,n,i)}function sD(e,t,n){return Ht(e).beforeAuthStateChanged(t,n)}function rD(e,t,n,i){return Ht(e).onAuthStateChanged(t,n,i)}const fc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AA{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(fc,"1"),this.storage.removeItem(fc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aD=1e3,oD=10;class SA extends AA{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=yA(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),s=this.localCache[n];i!==s&&t(n,s,i)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((a,l,u)=>{this.notifyListeners(a,u)});return}const i=t.key;n?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(i);!n&&this.localCache[i]===a||this.notifyListeners(i,a)},r=this.storage.getItem(i);Lx()&&r!==t.newValue&&t.newValue!==t.oldValue?setTimeout(s,oD):s()}notifyListeners(t,n){this.localCache[t]=n;const i=this.listeners[t];if(i)for(const s of Array.from(i))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:i}),!0)})},aD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}SA.type="LOCAL";const lD=SA;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wA extends AA{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}wA.type="SESSION";const IA=wA;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uD(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(s=>s.isListeningto(t));if(n)return n;const i=new Jc(t);return this.receivers.push(i),i}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:i,eventType:s,data:r}=n.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const l=Array.from(a).map(async h=>h(n.origin,r)),u=await uD(l);n.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:u})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Jc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _p(e="",t=10){let n="";for(let i=0;i<t;i++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cD{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,a;return new Promise((l,u)=>{const h=_p("",20);s.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},i);a={messageChannel:s,onMessage(m){const p=m;if(p.data.eventId===h)switch(p.data.status){case"ack":clearTimeout(d),r=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),l(p.data.response);break;default:clearTimeout(d),clearTimeout(r),u(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:t,eventId:h,data:n},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(){return window}function hD(e){Mn().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RA(){return typeof Mn().WorkerGlobalScope<"u"&&typeof Mn().importScripts=="function"}async function fD(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function dD(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)==null?void 0:e.controller)||null}function mD(){return RA()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CA="firebaseLocalStorageDb",pD=1,dc="firebaseLocalStorage",NA="fbase_key";class dl{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Zc(e,t){return e.transaction([dc],t?"readwrite":"readonly").objectStore(dc)}function gD(){const e=indexedDB.deleteDatabase(CA);return new dl(e).toPromise()}function zd(){const e=indexedDB.open(CA,pD);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const i=e.result;try{i.createObjectStore(dc,{keyPath:NA})}catch(s){n(s)}}),e.addEventListener("success",async()=>{const i=e.result;i.objectStoreNames.contains(dc)?t(i):(i.close(),await gD(),t(await zd()))})})}async function e0(e,t,n){const i=Zc(e,!0).put({[NA]:t,value:n});return new dl(i).toPromise()}async function yD(e,t){const n=Zc(e,!1).get(t),i=await new dl(n).toPromise();return i===void 0?null:i.value}function n0(e,t){const n=Zc(e,!0).delete(t);return new dl(n).toPromise()}const _D=800,vD=3;class xA{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await zd(),this.db)}async _withRetries(t){let n=0;for(;;)try{const i=await this._openDb();return await t(i)}catch(i){if(n++>vD)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return RA()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Jc._getInstance(mD()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var n,i;if(this.activeServiceWorker=await fD(),!this.activeServiceWorker)return;this.sender=new cD(this.activeServiceWorker);const t=await this.sender._send("ping",{},800);t&&(n=t[0])!=null&&n.fulfilled&&(i=t[0])!=null&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||dD()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await zd();return await e0(t,fc,"1"),await n0(t,fc),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>e0(i,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(i=>yD(i,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>n0(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(s=>{const r=Zc(s,!1).getAll();return new dl(r).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;if(t.length!==0)for(const{fbase_key:s,value:r}of t)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(t,n){this.localCache[t]=n;const i=this.listeners[t];if(i)for(const s of Array.from(i))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_D)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}xA.type="LOCAL";const TD=xA;new hl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ED(e,t){return t?ti(t):(X(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp extends TA{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Hr(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Hr(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Hr(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function bD(e){return nD(e.auth,new vp(e),e.bypassAuthState)}function AD(e){const{auth:t,user:n}=e;return X(n,t,"internal-error"),eD(n,new vp(e),e.bypassAuthState)}async function SD(e){const{auth:t,user:n}=e;return X(n,t,"internal-error"),tD(n,new vp(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DA{constructor(t,n,i,s,r=!1){this.auth=t,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:i,postBody:s,tenantId:r,error:a,type:l}=t;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:n,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return bD;case"linkViaPopup":case"linkViaRedirect":return SD;case"reauthViaPopup":case"reauthViaRedirect":return AD;default:ci(this.auth,"internal-error")}}resolve(t){hi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){hi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wD=new hl(2e3,1e4);class Or extends DA{constructor(t,n,i,s,r){super(t,n,s,r),this.provider=i,this.authWindow=null,this.pollId=null,Or.currentPopupAction&&Or.currentPopupAction.cancel(),Or.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return X(t,this.auth,"internal-error"),t}async onExecution(){hi(this.filter.length===1,"Popup operations only handle one event");const t=_p();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(On(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)==null?void 0:t.associatedEvent)||null}cancel(){this.reject(On(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Or.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,i;if((i=(n=this.authWindow)==null?void 0:n.window)!=null&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(On(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,wD.get())};t()}}Or.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ID="pendingRedirect",Tu=new Map;class RD extends DA{constructor(t,n,i=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let t=Tu.get(this.auth._key());if(!t){try{const i=await CD(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(i)}catch(n){t=()=>Promise.reject(n)}Tu.set(this.auth._key(),t)}return this.bypassAuthState||Tu.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function CD(e,t){const n=DD(t),i=xD(e);if(!await i._isAvailable())return!1;const s=await i._get(n)==="true";return await i._remove(n),s}function ND(e,t){Tu.set(e._key(),t)}function xD(e){return ti(e._redirectPersistence)}function DD(e){return vu(ID,e.config.apiKey,e.name)}async function OD(e,t,n=!1){if(pn(e.app))return Promise.reject(Wi(e));const i=$c(e),s=ED(i,t),a=await new RD(i,s,n).execute();return a&&!n&&(delete a.user._redirectEventId,await i._persistUserIfCurrent(a.user),await i._setRedirectUser(null,t)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MD=10*60*1e3;class VD{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(t,i)&&(n=!0,this.sendToConsumer(t,i),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!kD(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var i;if(t.error&&!OA(t)){const s=((i=t.error.code)==null?void 0:i.split("auth/")[1])||"internal-error";n.onError(On(this.auth,s))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const i=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&i}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=MD&&this.cachedEventUids.clear(),this.cachedEventUids.has(i0(t))}saveEventToCache(t){this.cachedEventUids.add(i0(t)),this.lastProcessedEventTime=Date.now()}}function i0(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function OA({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function kD(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return OA(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LD(e,t={}){return Ta(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,PD=/^https?/;async function jD(e){if(e.config.emulator)return;const{authorizedDomains:t}=await LD(e);for(const n of t)try{if(zD(n))return}catch{}ci(e,"unauthorized-domain")}function zD(e){const t=Pd(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const a=new URL(e);return a.hostname===""&&i===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===i}if(!PD.test(n))return!1;if(UD.test(e))return i===e;const s=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BD=new hl(3e4,6e4);function s0(){const e=Mn().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function qD(e){return new Promise((t,n)=>{var s,r,a;function i(){s0(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{s0(),n(On(e,"network-request-failed"))},timeout:BD.get()})}if((r=(s=Mn().gapi)==null?void 0:s.iframes)!=null&&r.Iframe)t(gapi.iframes.getContext());else if((a=Mn().gapi)!=null&&a.load)i();else{const l=Gx("iframefcb");return Mn()[l]=()=>{gapi.load?i():n(On(e,"network-request-failed"))},Hx(`${Fx()}?onload=${l}`).catch(u=>n(u))}}).catch(t=>{throw Eu=null,t})}let Eu=null;function HD(e){return Eu=Eu||qD(e),Eu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FD=new hl(5e3,15e3),GD="__/auth/iframe",KD="emulator/auth/iframe",QD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},YD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function XD(e){const t=e.config;X(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?mp(t,KD):`https://${e.config.authDomain}/${GD}`,i={apiKey:t.apiKey,appName:e.name,v:va},s=YD.get(e.config.apiHost);s&&(i.eid=s);const r=e._getFrameworks();return r.length&&(i.fw=r.join(",")),`${n}?${ul(i).slice(1)}`}async function $D(e){const t=await HD(e),n=Mn().gapi;return X(n,e,"internal-error"),t.open({where:document.body,url:XD(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:QD,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const a=On(e,"network-request-failed"),l=Mn().setTimeout(()=>{r(a)},FD.get());function u(){Mn().clearTimeout(l),s(i)}i.ping(u).then(u,()=>{r(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ZD=500,WD=600,tO="_blank",eO="http://localhost";class r0{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function nO(e,t,n,i=ZD,s=WD){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let l="";const u={...JD,width:i.toString(),height:s.toString(),top:r,left:a},h=Ee().toLowerCase();n&&(l=fA(h)?tO:n),cA(h)&&(t=t||eO,u.scrollbars="yes");const d=Object.entries(u).reduce((p,[v,C])=>`${p}${v}=${C},`,"");if(kx(h)&&l!=="_self")return iO(t||"",l),new r0(null);const m=window.open(t||"",l,d);X(m,e,"popup-blocked");try{m.focus()}catch{}return new r0(m)}function iO(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sO="__/auth/handler",rO="emulator/auth/handler",aO=encodeURIComponent("fac");async function a0(e,t,n,i,s,r){X(e.config.authDomain,e,"auth-domain-config-required"),X(e.config.apiKey,e,"invalid-api-key");const a={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:va,eventId:s};if(t instanceof EA){t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||"",V2(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[d,m]of Object.entries({}))a[d]=m}if(t instanceof fl){const d=t.getScopes().filter(m=>m!=="");d.length>0&&(a.scopes=d.join(","))}e.tenantId&&(a.tid=e.tenantId);const l=a;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const u=await e._getAppCheckToken(),h=u?`#${aO}=${encodeURIComponent(u)}`:"";return`${oO(e)}?${ul(l).slice(1)}${h}`}function oO({config:e}){return e.emulator?mp(e,rO):`https://${e.authDomain}/${sO}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rf="webStorageSupport";class lO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=IA,this._completeRedirectFn=OD,this._overrideRedirectResult=ND}async _openPopup(t,n,i,s){var a;hi((a=this.eventManagers[t._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const r=await a0(t,n,i,Pd(),s);return nO(t,r,_p())}async _openRedirect(t,n,i,s){await this._originValidation(t);const r=await a0(t,n,i,Pd(),s);return hD(r),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:s,promise:r}=this.eventManagers[n];return s?Promise.resolve(s):(hi(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(t);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(t){const n=await $D(t),i=new VD(t);return n.register("authEvent",s=>(X(s==null?void 0:s.authEvent,t,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:i},this.iframes[t._key()]=n,i}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Rf,{type:Rf},s=>{var a;const r=(a=s==null?void 0:s[0])==null?void 0:a[Rf];r!==void 0&&n(!!r),ci(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=jD(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return yA()||hA()||gp()}}const uO=lO;var o0="@firebase/auth",l0="1.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cO{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)==null?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(i=>{t((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hO(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function fO(e){Un(new _n("auth",(t,{options:n})=>{const i=t.getProvider("app").getImmediate(),s=t.getProvider("heartbeat"),r=t.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=i.options;X(a&&!a.includes(":"),"invalid-api-key",{appName:i.name});const u={apiKey:a,authDomain:l,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:_A(e)},h=new Bx(i,s,r,u);return Qx(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,i)=>{t.getProvider("auth-internal").initialize()})),Un(new _n("auth-internal",t=>{const n=$c(t.getProvider("auth").getImmediate());return(i=>new cO(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),cn(o0,l0,hO(e)),cn(o0,l0,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dO=5*60,mO=Ab("authIdTokenMaxAge")||dO;let u0=null;const pO=e=>async t=>{const n=t&&await t.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>mO)return;const s=n==null?void 0:n.token;u0!==s&&(u0=s,await fetch(e,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function gO(e=ap()){const t=sr(e,"auth");if(t.isInitialized())return t.getImmediate();const n=Kx(e,{popupRedirectResolver:uO,persistence:[TD,lD,IA]}),i=Ab("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(i,location.origin);if(location.origin===r.origin){const a=pO(r.toString());sD(n,a,()=>a(n.currentUser)),iD(n,l=>a(l))}}const s=Eb("auth");return s&&Yx(n,`http://${s}`),n}function yO(){var e;return((e=document.getElementsByTagName("head"))==null?void 0:e[0])??document}qx({loadJS(e){return new Promise((t,n)=>{const i=document.createElement("script");i.setAttribute("src",e),i.onload=t,i.onerror=s=>{const r=On("internal-error");r.customData=s,n(r)},i.type="text/javascript",i.charset="UTF-8",yO().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});fO("Browser");var c0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ts,MA;(function(){var e;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(T,_){function E(){}E.prototype=_.prototype,T.F=_.prototype,T.prototype=new E,T.prototype.constructor=T,T.D=function(w,I,N){for(var A=Array(arguments.length-2),Zt=2;Zt<arguments.length;Zt++)A[Zt-2]=arguments[Zt];return _.prototype[I].apply(w,A)}}function n(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(i,n),i.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,_,E){E||(E=0);const w=Array(16);if(typeof _=="string")for(var I=0;I<16;++I)w[I]=_.charCodeAt(E++)|_.charCodeAt(E++)<<8|_.charCodeAt(E++)<<16|_.charCodeAt(E++)<<24;else for(I=0;I<16;++I)w[I]=_[E++]|_[E++]<<8|_[E++]<<16|_[E++]<<24;_=T.g[0],E=T.g[1],I=T.g[2];let N=T.g[3],A;A=_+(N^E&(I^N))+w[0]+3614090360&4294967295,_=E+(A<<7&4294967295|A>>>25),A=N+(I^_&(E^I))+w[1]+3905402710&4294967295,N=_+(A<<12&4294967295|A>>>20),A=I+(E^N&(_^E))+w[2]+606105819&4294967295,I=N+(A<<17&4294967295|A>>>15),A=E+(_^I&(N^_))+w[3]+3250441966&4294967295,E=I+(A<<22&4294967295|A>>>10),A=_+(N^E&(I^N))+w[4]+4118548399&4294967295,_=E+(A<<7&4294967295|A>>>25),A=N+(I^_&(E^I))+w[5]+1200080426&4294967295,N=_+(A<<12&4294967295|A>>>20),A=I+(E^N&(_^E))+w[6]+2821735955&4294967295,I=N+(A<<17&4294967295|A>>>15),A=E+(_^I&(N^_))+w[7]+4249261313&4294967295,E=I+(A<<22&4294967295|A>>>10),A=_+(N^E&(I^N))+w[8]+1770035416&4294967295,_=E+(A<<7&4294967295|A>>>25),A=N+(I^_&(E^I))+w[9]+2336552879&4294967295,N=_+(A<<12&4294967295|A>>>20),A=I+(E^N&(_^E))+w[10]+4294925233&4294967295,I=N+(A<<17&4294967295|A>>>15),A=E+(_^I&(N^_))+w[11]+2304563134&4294967295,E=I+(A<<22&4294967295|A>>>10),A=_+(N^E&(I^N))+w[12]+1804603682&4294967295,_=E+(A<<7&4294967295|A>>>25),A=N+(I^_&(E^I))+w[13]+4254626195&4294967295,N=_+(A<<12&4294967295|A>>>20),A=I+(E^N&(_^E))+w[14]+2792965006&4294967295,I=N+(A<<17&4294967295|A>>>15),A=E+(_^I&(N^_))+w[15]+1236535329&4294967295,E=I+(A<<22&4294967295|A>>>10),A=_+(I^N&(E^I))+w[1]+4129170786&4294967295,_=E+(A<<5&4294967295|A>>>27),A=N+(E^I&(_^E))+w[6]+3225465664&4294967295,N=_+(A<<9&4294967295|A>>>23),A=I+(_^E&(N^_))+w[11]+643717713&4294967295,I=N+(A<<14&4294967295|A>>>18),A=E+(N^_&(I^N))+w[0]+3921069994&4294967295,E=I+(A<<20&4294967295|A>>>12),A=_+(I^N&(E^I))+w[5]+3593408605&4294967295,_=E+(A<<5&4294967295|A>>>27),A=N+(E^I&(_^E))+w[10]+38016083&4294967295,N=_+(A<<9&4294967295|A>>>23),A=I+(_^E&(N^_))+w[15]+3634488961&4294967295,I=N+(A<<14&4294967295|A>>>18),A=E+(N^_&(I^N))+w[4]+3889429448&4294967295,E=I+(A<<20&4294967295|A>>>12),A=_+(I^N&(E^I))+w[9]+568446438&4294967295,_=E+(A<<5&4294967295|A>>>27),A=N+(E^I&(_^E))+w[14]+3275163606&4294967295,N=_+(A<<9&4294967295|A>>>23),A=I+(_^E&(N^_))+w[3]+4107603335&4294967295,I=N+(A<<14&4294967295|A>>>18),A=E+(N^_&(I^N))+w[8]+1163531501&4294967295,E=I+(A<<20&4294967295|A>>>12),A=_+(I^N&(E^I))+w[13]+2850285829&4294967295,_=E+(A<<5&4294967295|A>>>27),A=N+(E^I&(_^E))+w[2]+4243563512&4294967295,N=_+(A<<9&4294967295|A>>>23),A=I+(_^E&(N^_))+w[7]+1735328473&4294967295,I=N+(A<<14&4294967295|A>>>18),A=E+(N^_&(I^N))+w[12]+2368359562&4294967295,E=I+(A<<20&4294967295|A>>>12),A=_+(E^I^N)+w[5]+4294588738&4294967295,_=E+(A<<4&4294967295|A>>>28),A=N+(_^E^I)+w[8]+2272392833&4294967295,N=_+(A<<11&4294967295|A>>>21),A=I+(N^_^E)+w[11]+1839030562&4294967295,I=N+(A<<16&4294967295|A>>>16),A=E+(I^N^_)+w[14]+4259657740&4294967295,E=I+(A<<23&4294967295|A>>>9),A=_+(E^I^N)+w[1]+2763975236&4294967295,_=E+(A<<4&4294967295|A>>>28),A=N+(_^E^I)+w[4]+1272893353&4294967295,N=_+(A<<11&4294967295|A>>>21),A=I+(N^_^E)+w[7]+4139469664&4294967295,I=N+(A<<16&4294967295|A>>>16),A=E+(I^N^_)+w[10]+3200236656&4294967295,E=I+(A<<23&4294967295|A>>>9),A=_+(E^I^N)+w[13]+681279174&4294967295,_=E+(A<<4&4294967295|A>>>28),A=N+(_^E^I)+w[0]+3936430074&4294967295,N=_+(A<<11&4294967295|A>>>21),A=I+(N^_^E)+w[3]+3572445317&4294967295,I=N+(A<<16&4294967295|A>>>16),A=E+(I^N^_)+w[6]+76029189&4294967295,E=I+(A<<23&4294967295|A>>>9),A=_+(E^I^N)+w[9]+3654602809&4294967295,_=E+(A<<4&4294967295|A>>>28),A=N+(_^E^I)+w[12]+3873151461&4294967295,N=_+(A<<11&4294967295|A>>>21),A=I+(N^_^E)+w[15]+530742520&4294967295,I=N+(A<<16&4294967295|A>>>16),A=E+(I^N^_)+w[2]+3299628645&4294967295,E=I+(A<<23&4294967295|A>>>9),A=_+(I^(E|~N))+w[0]+4096336452&4294967295,_=E+(A<<6&4294967295|A>>>26),A=N+(E^(_|~I))+w[7]+1126891415&4294967295,N=_+(A<<10&4294967295|A>>>22),A=I+(_^(N|~E))+w[14]+2878612391&4294967295,I=N+(A<<15&4294967295|A>>>17),A=E+(N^(I|~_))+w[5]+4237533241&4294967295,E=I+(A<<21&4294967295|A>>>11),A=_+(I^(E|~N))+w[12]+1700485571&4294967295,_=E+(A<<6&4294967295|A>>>26),A=N+(E^(_|~I))+w[3]+2399980690&4294967295,N=_+(A<<10&4294967295|A>>>22),A=I+(_^(N|~E))+w[10]+4293915773&4294967295,I=N+(A<<15&4294967295|A>>>17),A=E+(N^(I|~_))+w[1]+2240044497&4294967295,E=I+(A<<21&4294967295|A>>>11),A=_+(I^(E|~N))+w[8]+1873313359&4294967295,_=E+(A<<6&4294967295|A>>>26),A=N+(E^(_|~I))+w[15]+4264355552&4294967295,N=_+(A<<10&4294967295|A>>>22),A=I+(_^(N|~E))+w[6]+2734768916&4294967295,I=N+(A<<15&4294967295|A>>>17),A=E+(N^(I|~_))+w[13]+1309151649&4294967295,E=I+(A<<21&4294967295|A>>>11),A=_+(I^(E|~N))+w[4]+4149444226&4294967295,_=E+(A<<6&4294967295|A>>>26),A=N+(E^(_|~I))+w[11]+3174756917&4294967295,N=_+(A<<10&4294967295|A>>>22),A=I+(_^(N|~E))+w[2]+718787259&4294967295,I=N+(A<<15&4294967295|A>>>17),A=E+(N^(I|~_))+w[9]+3951481745&4294967295,T.g[0]=T.g[0]+_&4294967295,T.g[1]=T.g[1]+(I+(A<<21&4294967295|A>>>11))&4294967295,T.g[2]=T.g[2]+I&4294967295,T.g[3]=T.g[3]+N&4294967295}i.prototype.v=function(T,_){_===void 0&&(_=T.length);const E=_-this.blockSize,w=this.C;let I=this.h,N=0;for(;N<_;){if(I==0)for(;N<=E;)s(this,T,N),N+=this.blockSize;if(typeof T=="string"){for(;N<_;)if(w[I++]=T.charCodeAt(N++),I==this.blockSize){s(this,w),I=0;break}}else for(;N<_;)if(w[I++]=T[N++],I==this.blockSize){s(this,w),I=0;break}}this.h=I,this.o+=_},i.prototype.A=function(){var T=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);T[0]=128;for(var _=1;_<T.length-8;++_)T[_]=0;_=this.o*8;for(var E=T.length-8;E<T.length;++E)T[E]=_&255,_/=256;for(this.v(T),T=Array(16),_=0,E=0;E<4;++E)for(let w=0;w<32;w+=8)T[_++]=this.g[E]>>>w&255;return T};function r(T,_){var E=l;return Object.prototype.hasOwnProperty.call(E,T)?E[T]:E[T]=_(T)}function a(T,_){this.h=_;const E=[];let w=!0;for(let I=T.length-1;I>=0;I--){const N=T[I]|0;w&&N==_||(E[I]=N,w=!1)}this.g=E}var l={};function u(T){return-128<=T&&T<128?r(T,function(_){return new a([_|0],_<0?-1:0)}):new a([T|0],T<0?-1:0)}function h(T){if(isNaN(T)||!isFinite(T))return m;if(T<0)return U(h(-T));const _=[];let E=1;for(let w=0;T>=E;w++)_[w]=T/E|0,E*=4294967296;return new a(_,0)}function d(T,_){if(T.length==0)throw Error("number format error: empty string");if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(T.charAt(0)=="-")return U(d(T.substring(1),_));if(T.indexOf("-")>=0)throw Error('number format error: interior "-" character');const E=h(Math.pow(_,8));let w=m;for(let N=0;N<T.length;N+=8){var I=Math.min(8,T.length-N);const A=parseInt(T.substring(N,N+I),_);I<8?(I=h(Math.pow(_,I)),w=w.j(I).add(h(A))):(w=w.j(E),w=w.add(h(A)))}return w}var m=u(0),p=u(1),v=u(16777216);e=a.prototype,e.m=function(){if(M(this))return-U(this).m();let T=0,_=1;for(let E=0;E<this.g.length;E++){const w=this.i(E);T+=(w>=0?w:4294967296+w)*_,_*=4294967296}return T},e.toString=function(T){if(T=T||10,T<2||36<T)throw Error("radix out of range: "+T);if(C(this))return"0";if(M(this))return"-"+U(this).toString(T);const _=h(Math.pow(T,6));var E=this;let w="";for(;;){const I=D(E,_).g;E=S(E,I.j(_));let N=((E.g.length>0?E.g[0]:E.h)>>>0).toString(T);if(E=I,C(E))return N+w;for(;N.length<6;)N="0"+N;w=N+w}},e.i=function(T){return T<0?0:T<this.g.length?this.g[T]:this.h};function C(T){if(T.h!=0)return!1;for(let _=0;_<T.g.length;_++)if(T.g[_]!=0)return!1;return!0}function M(T){return T.h==-1}e.l=function(T){return T=S(this,T),M(T)?-1:C(T)?0:1};function U(T){const _=T.g.length,E=[];for(let w=0;w<_;w++)E[w]=~T.g[w];return new a(E,~T.h).add(p)}e.abs=function(){return M(this)?U(this):this},e.add=function(T){const _=Math.max(this.g.length,T.g.length),E=[];let w=0;for(let I=0;I<=_;I++){let N=w+(this.i(I)&65535)+(T.i(I)&65535),A=(N>>>16)+(this.i(I)>>>16)+(T.i(I)>>>16);w=A>>>16,N&=65535,A&=65535,E[I]=A<<16|N}return new a(E,E[E.length-1]&-2147483648?-1:0)};function S(T,_){return T.add(U(_))}e.j=function(T){if(C(this)||C(T))return m;if(M(this))return M(T)?U(this).j(U(T)):U(U(this).j(T));if(M(T))return U(this.j(U(T)));if(this.l(v)<0&&T.l(v)<0)return h(this.m()*T.m());const _=this.g.length+T.g.length,E=[];for(var w=0;w<2*_;w++)E[w]=0;for(w=0;w<this.g.length;w++)for(let I=0;I<T.g.length;I++){const N=this.i(w)>>>16,A=this.i(w)&65535,Zt=T.i(I)>>>16,Ce=T.i(I)&65535;E[2*w+2*I]+=A*Ce,b(E,2*w+2*I),E[2*w+2*I+1]+=N*Ce,b(E,2*w+2*I+1),E[2*w+2*I+1]+=A*Zt,b(E,2*w+2*I+1),E[2*w+2*I+2]+=N*Zt,b(E,2*w+2*I+2)}for(T=0;T<_;T++)E[T]=E[2*T+1]<<16|E[2*T];for(T=_;T<2*_;T++)E[T]=0;return new a(E,0)};function b(T,_){for(;(T[_]&65535)!=T[_];)T[_+1]+=T[_]>>>16,T[_]&=65535,_++}function R(T,_){this.g=T,this.h=_}function D(T,_){if(C(_))throw Error("division by zero");if(C(T))return new R(m,m);if(M(T))return _=D(U(T),_),new R(U(_.g),U(_.h));if(M(_))return _=D(T,U(_)),new R(U(_.g),_.h);if(T.g.length>30){if(M(T)||M(_))throw Error("slowDivide_ only works with positive integers.");for(var E=p,w=_;w.l(T)<=0;)E=B(E),w=B(w);var I=F(E,1),N=F(w,1);for(w=F(w,2),E=F(E,2);!C(w);){var A=N.add(w);A.l(T)<=0&&(I=I.add(E),N=A),w=F(w,1),E=F(E,1)}return _=S(T,I.j(_)),new R(I,_)}for(I=m;T.l(_)>=0;){for(E=Math.max(1,Math.floor(T.m()/_.m())),w=Math.ceil(Math.log(E)/Math.LN2),w=w<=48?1:Math.pow(2,w-48),N=h(E),A=N.j(_);M(A)||A.l(T)>0;)E-=w,N=h(E),A=N.j(_);C(N)&&(N=p),I=I.add(N),T=S(T,A)}return new R(I,T)}e.B=function(T){return D(this,T).h},e.and=function(T){const _=Math.max(this.g.length,T.g.length),E=[];for(let w=0;w<_;w++)E[w]=this.i(w)&T.i(w);return new a(E,this.h&T.h)},e.or=function(T){const _=Math.max(this.g.length,T.g.length),E=[];for(let w=0;w<_;w++)E[w]=this.i(w)|T.i(w);return new a(E,this.h|T.h)},e.xor=function(T){const _=Math.max(this.g.length,T.g.length),E=[];for(let w=0;w<_;w++)E[w]=this.i(w)^T.i(w);return new a(E,this.h^T.h)};function B(T){const _=T.g.length+1,E=[];for(let w=0;w<_;w++)E[w]=T.i(w)<<1|T.i(w-1)>>>31;return new a(E,T.h)}function F(T,_){const E=_>>5;_%=32;const w=T.g.length-E,I=[];for(let N=0;N<w;N++)I[N]=_>0?T.i(N+E)>>>_|T.i(N+E+1)<<32-_:T.i(N+E);return new a(I,T.h)}i.prototype.digest=i.prototype.A,i.prototype.reset=i.prototype.u,i.prototype.update=i.prototype.v,MA=i,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=d,ts=a}).apply(typeof c0<"u"?c0:typeof self<"u"?self:typeof window<"u"?window:{});var Jl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var VA,so,kA,bu,Bd,LA,UA,PA;(function(){var e,t=Object.defineProperty;function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Jl=="object"&&Jl];for(var c=0;c<o.length;++c){var f=o[c];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var i=n(this);function s(o,c){if(c)t:{var f=i;o=o.split(".");for(var g=0;g<o.length-1;g++){var x=o[g];if(!(x in f))break t;f=f[x]}o=o[o.length-1],g=f[o],c=c(g),c!=g&&c!=null&&t(f,o,{configurable:!0,writable:!0,value:c})}}s("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(o){return o||function(c){var f=[],g;for(g in c)Object.prototype.hasOwnProperty.call(c,g)&&f.push([g,c[g]]);return f}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var r=r||{},a=this||self;function l(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function u(o,c,f){return o.call.apply(o.bind,arguments)}function h(o,c,f){return h=u,h.apply(null,arguments)}function d(o,c){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),o.apply(this,g)}}function m(o,c){function f(){}f.prototype=c.prototype,o.Z=c.prototype,o.prototype=new f,o.prototype.constructor=o,o.Ob=function(g,x,O){for(var z=Array(arguments.length-2),it=2;it<arguments.length;it++)z[it-2]=arguments[it];return c.prototype[x].apply(g,z)}}var p=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function v(o){const c=o.length;if(c>0){const f=Array(c);for(let g=0;g<c;g++)f[g]=o[g];return f}return[]}function C(o,c){for(let g=1;g<arguments.length;g++){const x=arguments[g];var f=typeof x;if(f=f!="object"?f:x?Array.isArray(x)?"array":f:"null",f=="array"||f=="object"&&typeof x.length=="number"){f=o.length||0;const O=x.length||0;o.length=f+O;for(let z=0;z<O;z++)o[f+z]=x[z]}else o.push(x)}}class M{constructor(c,f){this.i=c,this.j=f,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function U(o){a.setTimeout(()=>{throw o},0)}function S(){var o=T;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class b{constructor(){this.h=this.g=null}add(c,f){const g=R.get();g.set(c,f),this.h?this.h.next=g:this.g=g,this.h=g}}var R=new M(()=>new D,o=>o.reset());class D{constructor(){this.next=this.g=this.h=null}set(c,f){this.h=c,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let B,F=!1,T=new b,_=()=>{const o=Promise.resolve(void 0);B=()=>{o.then(E)}};function E(){for(var o;o=S();){try{o.h.call(o.g)}catch(f){U(f)}var c=R;c.j(o),c.h<100&&(c.h++,o.next=c.g,c.g=o)}F=!1}function w(){this.u=this.u,this.C=this.C}w.prototype.u=!1,w.prototype.dispose=function(){this.u||(this.u=!0,this.N())},w.prototype[Symbol.dispose]=function(){this.dispose()},w.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function I(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}I.prototype.h=function(){this.defaultPrevented=!0};var N=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const f=()=>{};a.addEventListener("test",f,c),a.removeEventListener("test",f,c)}catch{}return o}();function A(o){return/^[\s\xa0]*$/.test(o)}function Zt(o,c){I.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,c)}m(Zt,I),Zt.prototype.init=function(o,c){const f=this.type=o.type,g=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget,c||(f=="mouseover"?c=o.fromElement:f=="mouseout"&&(c=o.toElement)),this.relatedTarget=c,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&Zt.Z.h.call(this)},Zt.prototype.h=function(){Zt.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Ce="closure_listenable_"+(Math.random()*1e6|0),j=0;function $(o,c,f,g,x){this.listener=o,this.proxy=null,this.src=c,this.type=f,this.capture=!!g,this.ha=x,this.key=++j,this.da=this.fa=!1}function Y(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function vt(o,c,f){for(const g in o)c.call(f,o[g],g,o)}function kt(o,c){for(const f in o)c.call(void 0,o[f],f,o)}function Bn(o){const c={};for(const f in o)c[f]=o[f];return c}const qn="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function pi(o,c){let f,g;for(let x=1;x<arguments.length;x++){g=arguments[x];for(f in g)o[f]=g[f];for(let O=0;O<qn.length;O++)f=qn[O],Object.prototype.hasOwnProperty.call(g,f)&&(o[f]=g[f])}}function Ne(o){this.src=o,this.g={},this.h=0}Ne.prototype.add=function(o,c,f,g,x){const O=o.toString();o=this.g[O],o||(o=this.g[O]=[],this.h++);const z=Ia(o,c,g,x);return z>-1?(c=o[z],f||(c.fa=!1)):(c=new $(c,this.src,O,!!g,x),c.fa=f,o.push(c)),c};function bn(o,c){const f=c.type;if(f in o.g){var g=o.g[f],x=Array.prototype.indexOf.call(g,c,void 0),O;(O=x>=0)&&Array.prototype.splice.call(g,x,1),O&&(Y(c),o.g[f].length==0&&(delete o.g[f],o.h--))}}function Ia(o,c,f,g){for(let x=0;x<o.length;++x){const O=o[x];if(!O.da&&O.listener==c&&O.capture==!!f&&O.ha==g)return x}return-1}var Ra="closure_lm_"+(Math.random()*1e6|0),P={};function ht(o,c,f,g,x){if(Array.isArray(c)){for(let O=0;O<c.length;O++)ht(o,c[O],f,g,x);return null}return f=vs(f),o&&o[Ce]?o.J(c,f,l(g)?!!g.capture:!1,x):st(o,c,f,!1,g,x)}function st(o,c,f,g,x,O){if(!c)throw Error("Invalid event type");const z=l(x)?!!x.capture:!!x;let it=be(o);if(it||(o[Ra]=it=new Ne(o)),f=it.add(c,f,g,z,O),f.proxy)return f;if(g=et(),f.proxy=g,g.src=o,g.listener=f,o.addEventListener)N||(x=z),x===void 0&&(x=!1),o.addEventListener(c.toString(),g,x);else if(o.attachEvent)o.attachEvent(An(c.toString()),g);else if(o.addListener&&o.removeListener)o.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function et(){function o(f){return c.call(o.src,o.listener,f)}const c=Ca;return o}function jt(o,c,f,g,x){if(Array.isArray(c))for(var O=0;O<c.length;O++)jt(o,c[O],f,g,x);else g=l(g)?!!g.capture:!!g,f=vs(f),o&&o[Ce]?(o=o.i,O=String(c).toString(),O in o.g&&(c=o.g[O],f=Ia(c,f,g,x),f>-1&&(Y(c[f]),Array.prototype.splice.call(c,f,1),c.length==0&&(delete o.g[O],o.h--)))):o&&(o=be(o))&&(c=o.g[c.toString()],o=-1,c&&(o=Ia(c,f,g,x)),(f=o>-1?c[o]:null)&&fn(f))}function fn(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[Ce])bn(c.i,o);else{var f=o.type,g=o.proxy;c.removeEventListener?c.removeEventListener(f,g,o.capture):c.detachEvent?c.detachEvent(An(f),g):c.addListener&&c.removeListener&&c.removeListener(g),(f=be(c))?(bn(f,o),f.h==0&&(f.src=null,c[Ra]=null)):Y(o)}}}function An(o){return o in P?P[o]:P[o]="on"+o}function Ca(o,c){if(o.da)o=!0;else{c=new Zt(c,this);const f=o.listener,g=o.ha||o.src;o.fa&&fn(o),o=f.call(g,c)}return o}function be(o){return o=o[Ra],o instanceof Ne?o:null}var gi="__closure_events_fn_"+(Math.random()*1e9>>>0);function vs(o){return typeof o=="function"?o:(o[gi]||(o[gi]=function(c){return o.handleEvent(c)}),o[gi])}function Wt(){w.call(this),this.i=new Ne(this),this.M=this,this.G=null}m(Wt,w),Wt.prototype[Ce]=!0,Wt.prototype.removeEventListener=function(o,c,f,g){jt(this,o,c,f,g)};function Tt(o,c){var f,g=o.G;if(g)for(f=[];g;g=g.G)f.push(g);if(o=o.M,g=c.type||c,typeof c=="string")c=new I(c,o);else if(c instanceof I)c.target=c.target||o;else{var x=c;c=new I(g,o),pi(c,x)}x=!0;let O,z;if(f)for(z=f.length-1;z>=0;z--)O=c.g=f[z],x=or(O,g,!0,c)&&x;if(O=c.g=o,x=or(O,g,!0,c)&&x,x=or(O,g,!1,c)&&x,f)for(z=0;z<f.length;z++)O=c.g=f[z],x=or(O,g,!1,c)&&x}Wt.prototype.N=function(){if(Wt.Z.N.call(this),this.i){var o=this.i;for(const c in o.g){const f=o.g[c];for(let g=0;g<f.length;g++)Y(f[g]);delete o.g[c],o.h--}}this.G=null},Wt.prototype.J=function(o,c,f,g){return this.i.add(String(o),c,!1,f,g)},Wt.prototype.K=function(o,c,f,g){return this.i.add(String(o),c,!0,f,g)};function or(o,c,f,g){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();let x=!0;for(let O=0;O<c.length;++O){const z=c[O];if(z&&!z.da&&z.capture==f){const it=z.listener,te=z.ha||z.src;z.fa&&bn(o.i,z),x=it.call(te,g)!==!1&&x}}return x&&!g.defaultPrevented}function ph(o,c){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=h(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:a.setTimeout(o,c||0)}function El(o){o.g=ph(()=>{o.g=null,o.i&&(o.i=!1,El(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class bl extends w{constructor(c,f){super(),this.m=c,this.l=f,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:El(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ts(o){w.call(this),this.h=o,this.g={}}m(Ts,w);var eg=[];function ng(o){vt(o.g,function(c,f){this.g.hasOwnProperty(f)&&fn(c)},o),o.g={}}Ts.prototype.N=function(){Ts.Z.N.call(this),ng(this)},Ts.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var gh=a.JSON.stringify,hw=a.JSON.parse,fw=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function ig(){}function sg(){}var Na={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function yh(){I.call(this,"d")}m(yh,I);function _h(){I.call(this,"c")}m(_h,I);var Es={},rg=null;function Al(){return rg=rg||new Wt}Es.Ia="serverreachability";function ag(o){I.call(this,Es.Ia,o)}m(ag,I);function xa(o){const c=Al();Tt(c,new ag(c))}Es.STAT_EVENT="statevent";function og(o,c){I.call(this,Es.STAT_EVENT,o),this.stat=c}m(og,I);function Ae(o){const c=Al();Tt(c,new og(c,o))}Es.Ja="timingevent";function lg(o,c){I.call(this,Es.Ja,o),this.size=c}m(lg,I);function Da(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},c)}function Oa(){this.g=!0}Oa.prototype.ua=function(){this.g=!1};function dw(o,c,f,g,x,O){o.info(function(){if(o.g)if(O){var z="",it=O.split("&");for(let At=0;At<it.length;At++){var te=it[At].split("=");if(te.length>1){const se=te[0];te=te[1];const wn=se.split("_");z=wn.length>=2&&wn[1]=="type"?z+(se+"="+te+"&"):z+(se+"=redacted&")}}}else z=null;else z=O;return"XMLHTTP REQ ("+g+") [attempt "+x+"]: "+c+`
`+f+`
`+z})}function mw(o,c,f,g,x,O,z){o.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+x+"]: "+c+`
`+f+`
`+O+" "+z})}function lr(o,c,f,g){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+gw(o,f)+(g?" "+g:"")})}function pw(o,c){o.info(function(){return"TIMEOUT: "+c})}Oa.prototype.info=function(){};function gw(o,c){if(!o.g)return c;if(!c)return null;try{const O=JSON.parse(c);if(O){for(o=0;o<O.length;o++)if(Array.isArray(O[o])){var f=O[o];if(!(f.length<2)){var g=f[1];if(Array.isArray(g)&&!(g.length<1)){var x=g[0];if(x!="noop"&&x!="stop"&&x!="close")for(let z=1;z<g.length;z++)g[z]=""}}}}return gh(O)}catch{return c}}var Sl={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},ug={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},cg;function vh(){}m(vh,ig),vh.prototype.g=function(){return new XMLHttpRequest},cg=new vh;function Ma(o){return encodeURIComponent(String(o))}function yw(o){var c=1;o=o.split(":");const f=[];for(;c>0&&o.length;)f.push(o.shift()),c--;return o.length&&f.push(o.join(":")),f}function yi(o,c,f,g){this.j=o,this.i=c,this.l=f,this.S=g||1,this.V=new Ts(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new hg}function hg(){this.i=null,this.g="",this.h=!1}var fg={},Th={};function Eh(o,c,f){o.M=1,o.A=Il(Sn(c)),o.u=f,o.R=!0,dg(o,null)}function dg(o,c){o.F=Date.now(),wl(o),o.B=Sn(o.A);var f=o.B,g=o.S;Array.isArray(g)||(g=[String(g)]),Ig(f.i,"t",g),o.C=0,f=o.j.L,o.h=new hg,o.g=Fg(o.j,f?c:null,!o.u),o.P>0&&(o.O=new bl(h(o.Y,o,o.g),o.P)),c=o.V,f=o.g,g=o.ba;var x="readystatechange";Array.isArray(x)||(x&&(eg[0]=x.toString()),x=eg);for(let O=0;O<x.length;O++){const z=ht(f,x[O],g||c.handleEvent,!1,c.h||c);if(!z)break;c.g[z.key]=z}c=o.J?Bn(o.J):{},o.u?(o.v||(o.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,c)):(o.v="GET",o.g.ea(o.B,o.v,null,c)),xa(),dw(o.i,o.v,o.B,o.l,o.S,o.u)}yi.prototype.ba=function(o){o=o.target;const c=this.O;c&&Ti(o)==3?c.j():this.Y(o)},yi.prototype.Y=function(o){try{if(o==this.g)t:{const it=Ti(this.g),te=this.g.ya(),At=this.g.ca();if(!(it<3)&&(it!=3||this.g&&(this.h.h||this.g.la()||Mg(this.g)))){this.K||it!=4||te==7||(te==8||At<=0?xa(3):xa(2)),bh(this);var c=this.g.ca();this.X=c;var f=_w(this);if(this.o=c==200,mw(this.i,this.v,this.B,this.l,this.S,it,c),this.o){if(this.U&&!this.L){e:{if(this.g){var g,x=this.g;if((g=x.g?x.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!A(g)){var O=g;break e}}O=null}if(o=O)lr(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ah(this,o);else{this.o=!1,this.m=3,Ae(12),bs(this),Va(this);break t}}if(this.R){o=!0;let se;for(;!this.K&&this.C<f.length;)if(se=vw(this,f),se==Th){it==4&&(this.m=4,Ae(14),o=!1),lr(this.i,this.l,null,"[Incomplete Response]");break}else if(se==fg){this.m=4,Ae(15),lr(this.i,this.l,f,"[Invalid Chunk]"),o=!1;break}else lr(this.i,this.l,se,null),Ah(this,se);if(mg(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),it!=4||f.length!=0||this.h.h||(this.m=1,Ae(16),o=!1),this.o=this.o&&o,!o)lr(this.i,this.l,f,"[Invalid Chunked Response]"),bs(this),Va(this);else if(f.length>0&&!this.W){this.W=!0;var z=this.j;z.g==this&&z.aa&&!z.P&&(z.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),Dh(z),z.P=!0,Ae(11))}}else lr(this.i,this.l,f,null),Ah(this,f);it==4&&bs(this),this.o&&!this.K&&(it==4?zg(this.j,this):(this.o=!1,wl(this)))}else Mw(this.g),c==400&&f.indexOf("Unknown SID")>0?(this.m=3,Ae(12)):(this.m=0,Ae(13)),bs(this),Va(this)}}}catch{}finally{}};function _w(o){if(!mg(o))return o.g.la();const c=Mg(o.g);if(c==="")return"";let f="";const g=c.length,x=Ti(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return bs(o),Va(o),"";o.h.i=new a.TextDecoder}for(let O=0;O<g;O++)o.h.h=!0,f+=o.h.i.decode(c[O],{stream:!(x&&O==g-1)});return c.length=0,o.h.g+=f,o.C=0,o.h.g}function mg(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function vw(o,c){var f=o.C,g=c.indexOf(`
`,f);return g==-1?Th:(f=Number(c.substring(f,g)),isNaN(f)?fg:(g+=1,g+f>c.length?Th:(c=c.slice(g,g+f),o.C=g+f,c)))}yi.prototype.cancel=function(){this.K=!0,bs(this)};function wl(o){o.T=Date.now()+o.H,pg(o,o.H)}function pg(o,c){if(o.D!=null)throw Error("WatchDog timer not null");o.D=Da(h(o.aa,o),c)}function bh(o){o.D&&(a.clearTimeout(o.D),o.D=null)}yi.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(pw(this.i,this.B),this.M!=2&&(xa(),Ae(17)),bs(this),this.m=2,Va(this)):pg(this,this.T-o)};function Va(o){o.j.I==0||o.K||zg(o.j,o)}function bs(o){bh(o);var c=o.O;c&&typeof c.dispose=="function"&&c.dispose(),o.O=null,ng(o.V),o.g&&(c=o.g,o.g=null,c.abort(),c.dispose())}function Ah(o,c){try{var f=o.j;if(f.I!=0&&(f.g==o||Sh(f.h,o))){if(!o.L&&Sh(f.h,o)&&f.I==3){try{var g=f.Ba.g.parse(c)}catch{g=null}if(Array.isArray(g)&&g.length==3){var x=g;if(x[0]==0){t:if(!f.v){if(f.g)if(f.g.F+3e3<o.F)Dl(f),Nl(f);else break t;xh(f),Ae(18)}}else f.xa=x[1],0<f.xa-f.K&&x[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=Da(h(f.Va,f),6e3));_g(f.h)<=1&&f.ta&&(f.ta=void 0)}else Ss(f,11)}else if((o.L||f.g==o)&&Dl(f),!A(c))for(x=f.Ba.g.parse(c),c=0;c<x.length;c++){let At=x[c];const se=At[0];if(!(se<=f.K))if(f.K=se,At=At[1],f.I==2)if(At[0]=="c"){f.M=At[1],f.ba=At[2];const wn=At[3];wn!=null&&(f.ka=wn,f.j.info("VER="+f.ka));const ws=At[4];ws!=null&&(f.za=ws,f.j.info("SVER="+f.za));const Ei=At[5];Ei!=null&&typeof Ei=="number"&&Ei>0&&(g=1.5*Ei,f.O=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const bi=o.g;if(bi){const Ml=bi.g?bi.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ml){var O=g.h;O.g||Ml.indexOf("spdy")==-1&&Ml.indexOf("quic")==-1&&Ml.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(wh(O,O.h),O.h=null))}if(g.G){const Oh=bi.g?bi.g.getResponseHeader("X-HTTP-Session-Id"):null;Oh&&(g.wa=Oh,Rt(g.J,g.G,Oh))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-o.F,f.j.info("Handshake RTT: "+f.T+"ms")),g=f;var z=o;if(g.na=Hg(g,g.L?g.ba:null,g.W),z.L){vg(g.h,z);var it=z,te=g.O;te&&(it.H=te),it.D&&(bh(it),wl(it)),g.g=z}else Pg(g);f.i.length>0&&xl(f)}else At[0]!="stop"&&At[0]!="close"||Ss(f,7);else f.I==3&&(At[0]=="stop"||At[0]=="close"?At[0]=="stop"?Ss(f,7):Nh(f):At[0]!="noop"&&f.l&&f.l.qa(At),f.A=0)}}xa(4)}catch{}}var Tw=class{constructor(o,c){this.g=o,this.map=c}};function gg(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function yg(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function _g(o){return o.h?1:o.g?o.g.size:0}function Sh(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function wh(o,c){o.g?o.g.add(c):o.h=c}function vg(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}gg.prototype.cancel=function(){if(this.i=Tg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Tg(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const f of o.g.values())c=c.concat(f.G);return c}return v(o.i)}var Eg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ew(o,c){if(o){o=o.split("&");for(let f=0;f<o.length;f++){const g=o[f].indexOf("=");let x,O=null;g>=0?(x=o[f].substring(0,g),O=o[f].substring(g+1)):x=o[f],c(x,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function _i(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;o instanceof _i?(this.l=o.l,ka(this,o.j),this.o=o.o,this.g=o.g,La(this,o.u),this.h=o.h,Ih(this,Rg(o.i)),this.m=o.m):o&&(c=String(o).match(Eg))?(this.l=!1,ka(this,c[1]||"",!0),this.o=Ua(c[2]||""),this.g=Ua(c[3]||"",!0),La(this,c[4]),this.h=Ua(c[5]||"",!0),Ih(this,c[6]||"",!0),this.m=Ua(c[7]||"")):(this.l=!1,this.i=new ja(null,this.l))}_i.prototype.toString=function(){const o=[];var c=this.j;c&&o.push(Pa(c,bg,!0),":");var f=this.g;return(f||c=="file")&&(o.push("//"),(c=this.o)&&o.push(Pa(c,bg,!0),"@"),o.push(Ma(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&o.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&o.push("/"),o.push(Pa(f,f.charAt(0)=="/"?Sw:Aw,!0))),(f=this.i.toString())&&o.push("?",f),(f=this.m)&&o.push("#",Pa(f,Iw)),o.join("")},_i.prototype.resolve=function(o){const c=Sn(this);let f=!!o.j;f?ka(c,o.j):f=!!o.o,f?c.o=o.o:f=!!o.g,f?c.g=o.g:f=o.u!=null;var g=o.h;if(f)La(c,o.u);else if(f=!!o.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var x=c.h.lastIndexOf("/");x!=-1&&(g=c.h.slice(0,x+1)+g)}if(x=g,x==".."||x==".")g="";else if(x.indexOf("./")!=-1||x.indexOf("/.")!=-1){g=x.lastIndexOf("/",0)==0,x=x.split("/");const O=[];for(let z=0;z<x.length;){const it=x[z++];it=="."?g&&z==x.length&&O.push(""):it==".."?((O.length>1||O.length==1&&O[0]!="")&&O.pop(),g&&z==x.length&&O.push("")):(O.push(it),g=!0)}g=O.join("/")}else g=x}return f?c.h=g:f=o.i.toString()!=="",f?Ih(c,Rg(o.i)):f=!!o.m,f&&(c.m=o.m),c};function Sn(o){return new _i(o)}function ka(o,c,f){o.j=f?Ua(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function La(o,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);o.u=c}else o.u=null}function Ih(o,c,f){c instanceof ja?(o.i=c,Rw(o.i,o.l)):(f||(c=Pa(c,ww)),o.i=new ja(c,o.l))}function Rt(o,c,f){o.i.set(c,f)}function Il(o){return Rt(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function Ua(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Pa(o,c,f){return typeof o=="string"?(o=encodeURI(o).replace(c,bw),f&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function bw(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var bg=/[#\/\?@]/g,Aw=/[#\?:]/g,Sw=/[#\?]/g,ww=/[#\?@]/g,Iw=/#/g;function ja(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function As(o){o.g||(o.g=new Map,o.h=0,o.i&&Ew(o.i,function(c,f){o.add(decodeURIComponent(c.replace(/\+/g," ")),f)}))}e=ja.prototype,e.add=function(o,c){As(this),this.i=null,o=ur(this,o);let f=this.g.get(o);return f||this.g.set(o,f=[]),f.push(c),this.h+=1,this};function Ag(o,c){As(o),c=ur(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function Sg(o,c){return As(o),c=ur(o,c),o.g.has(c)}e.forEach=function(o,c){As(this),this.g.forEach(function(f,g){f.forEach(function(x){o.call(c,x,g,this)},this)},this)};function wg(o,c){As(o);let f=[];if(typeof c=="string")Sg(o,c)&&(f=f.concat(o.g.get(ur(o,c))));else for(o=Array.from(o.g.values()),c=0;c<o.length;c++)f=f.concat(o[c]);return f}e.set=function(o,c){return As(this),this.i=null,o=ur(this,o),Sg(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},e.get=function(o,c){return o?(o=wg(this,o),o.length>0?String(o[0]):c):c};function Ig(o,c,f){Ag(o,c),f.length>0&&(o.i=null,o.g.set(ur(o,c),v(f)),o.h+=f.length)}e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(let g=0;g<c.length;g++){var f=c[g];const x=Ma(f);f=wg(this,f);for(let O=0;O<f.length;O++){let z=x;f[O]!==""&&(z+="="+Ma(f[O])),o.push(z)}}return this.i=o.join("&")};function Rg(o){const c=new ja;return c.i=o.i,o.g&&(c.g=new Map(o.g),c.h=o.h),c}function ur(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function Rw(o,c){c&&!o.j&&(As(o),o.i=null,o.g.forEach(function(f,g){const x=g.toLowerCase();g!=x&&(Ag(this,g),Ig(this,x,f))},o)),o.j=c}function Cw(o,c){const f=new Oa;if(a.Image){const g=new Image;g.onload=d(vi,f,"TestLoadImage: loaded",!0,c,g),g.onerror=d(vi,f,"TestLoadImage: error",!1,c,g),g.onabort=d(vi,f,"TestLoadImage: abort",!1,c,g),g.ontimeout=d(vi,f,"TestLoadImage: timeout",!1,c,g),a.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=o}else c(!1)}function Nw(o,c){const f=new Oa,g=new AbortController,x=setTimeout(()=>{g.abort(),vi(f,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:g.signal}).then(O=>{clearTimeout(x),O.ok?vi(f,"TestPingServer: ok",!0,c):vi(f,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(x),vi(f,"TestPingServer: error",!1,c)})}function vi(o,c,f,g,x){try{x&&(x.onload=null,x.onerror=null,x.onabort=null,x.ontimeout=null),g(f)}catch{}}function xw(){this.g=new fw}function Rh(o){this.i=o.Sb||null,this.h=o.ab||!1}m(Rh,ig),Rh.prototype.g=function(){return new Rl(this.i,this.h)};function Rl(o,c){Wt.call(this),this.H=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}m(Rl,Wt),e=Rl.prototype,e.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=c,this.readyState=1,Ba(this)},e.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(c.body=o),(this.H||a).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,za(this)),this.readyState=0},e.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Ba(this)),this.g&&(this.readyState=3,Ba(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Cg(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function Cg(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}e.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?za(this):Ba(this),this.readyState==3&&Cg(this)}},e.Oa=function(o){this.g&&(this.response=this.responseText=o,za(this))},e.Na=function(o){this.g&&(this.response=o,za(this))},e.ga=function(){this.g&&za(this)};function za(o){o.readyState=4,o.l=null,o.j=null,o.B=null,Ba(o)}e.setRequestHeader=function(o,c){this.A.append(o,c)},e.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var f=c.next();!f.done;)f=f.value,o.push(f[0]+": "+f[1]),f=c.next();return o.join(`\r
`)};function Ba(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Rl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Ng(o){let c="";return vt(o,function(f,g){c+=g,c+=":",c+=f,c+=`\r
`}),c}function Ch(o,c,f){t:{for(g in f){var g=!1;break t}g=!0}g||(f=Ng(f),typeof o=="string"?f!=null&&Ma(f):Rt(o,c,f))}function Lt(o){Wt.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}m(Lt,Wt);var Dw=/^https?$/i,Ow=["POST","PUT"];e=Lt.prototype,e.Fa=function(o){this.H=o},e.ea=function(o,c,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():cg.g(),this.g.onreadystatechange=p(h(this.Ca,this));try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(O){xg(this,O);return}if(o=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var x in g)f.set(x,g[x]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const O of g.keys())f.set(O,g.get(O));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(O=>O.toLowerCase()=="content-type"),x=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(Ow,c,void 0)>=0)||g||x||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,z]of f)this.g.setRequestHeader(O,z);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(O){xg(this,O)}};function xg(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.o=5,Dg(o),Cl(o)}function Dg(o){o.A||(o.A=!0,Tt(o,"complete"),Tt(o,"error"))}e.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,Tt(this,"complete"),Tt(this,"abort"),Cl(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Cl(this,!0)),Lt.Z.N.call(this)},e.Ca=function(){this.u||(this.B||this.v||this.j?Og(this):this.Xa())},e.Xa=function(){Og(this)};function Og(o){if(o.h&&typeof r<"u"){if(o.v&&Ti(o)==4)setTimeout(o.Ca.bind(o),0);else if(Tt(o,"readystatechange"),Ti(o)==4){o.h=!1;try{const O=o.ca();t:switch(O){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break t;default:c=!1}var f;if(!(f=c)){var g;if(g=O===0){let z=String(o.D).match(Eg)[1]||null;!z&&a.self&&a.self.location&&(z=a.self.location.protocol.slice(0,-1)),g=!Dw.test(z?z.toLowerCase():"")}f=g}if(f)Tt(o,"complete"),Tt(o,"success");else{o.o=6;try{var x=Ti(o)>2?o.g.statusText:""}catch{x=""}o.l=x+" ["+o.ca()+"]",Dg(o)}}finally{Cl(o)}}}}function Cl(o,c){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const f=o.g;o.g=null,c||Tt(o,"ready");try{f.onreadystatechange=null}catch{}}}e.isActive=function(){return!!this.g};function Ti(o){return o.g?o.g.readyState:0}e.ca=function(){try{return Ti(this)>2?this.g.status:-1}catch{return-1}},e.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},e.La=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),hw(c)}};function Mg(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Mw(o){const c={};o=(o.g&&Ti(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<o.length;g++){if(A(o[g]))continue;var f=yw(o[g]);const x=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const O=c[x]||[];c[x]=O,O.push(f)}kt(c,function(g){return g.join(", ")})}e.ya=function(){return this.o},e.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function qa(o,c,f){return f&&f.internalChannelParams&&f.internalChannelParams[o]||c}function Vg(o){this.za=0,this.i=[],this.j=new Oa,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=qa("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=qa("baseRetryDelayMs",5e3,o),this.Za=qa("retryDelaySeedMs",1e4,o),this.Ta=qa("forwardChannelMaxRetries",2,o),this.va=qa("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new gg(o&&o.concurrentRequestLimit),this.Ba=new xw,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}e=Vg.prototype,e.ka=8,e.I=1,e.connect=function(o,c,f,g){Ae(0),this.W=o,this.H=c||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.J=Hg(this,null,this.W),xl(this)};function Nh(o){if(kg(o),o.I==3){var c=o.V++,f=Sn(o.J);if(Rt(f,"SID",o.M),Rt(f,"RID",c),Rt(f,"TYPE","terminate"),Ha(o,f),c=new yi(o,o.j,c),c.M=2,c.A=Il(Sn(f)),f=!1,a.navigator&&a.navigator.sendBeacon)try{f=a.navigator.sendBeacon(c.A.toString(),"")}catch{}!f&&a.Image&&(new Image().src=c.A,f=!0),f||(c.g=Fg(c.j,null),c.g.ea(c.A)),c.F=Date.now(),wl(c)}qg(o)}function Nl(o){o.g&&(Dh(o),o.g.cancel(),o.g=null)}function kg(o){Nl(o),o.v&&(a.clearTimeout(o.v),o.v=null),Dl(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function xl(o){if(!yg(o.h)&&!o.m){o.m=!0;var c=o.Ea;B||_(),F||(B(),F=!0),T.add(c,o),o.D=0}}function Vw(o,c){return _g(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=c.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=Da(h(o.Ea,o,c),Bg(o,o.D)),o.D++,!0)}e.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const x=new yi(this,this.j,o);let O=this.o;if(this.U&&(O?(O=Bn(O),pi(O,this.U)):O=this.U),this.u!==null||this.R||(x.J=O,O=null),this.S)t:{for(var c=0,f=0;f<this.i.length;f++){e:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break e}g=void 0}if(g===void 0)break;if(c+=g,c>4096){c=f;break t}if(c===4096||f===this.i.length-1){c=f+1;break t}}c=1e3}else c=1e3;c=Ug(this,x,c),f=Sn(this.J),Rt(f,"RID",o),Rt(f,"CVER",22),this.G&&Rt(f,"X-HTTP-Session-Id",this.G),Ha(this,f),O&&(this.R?c="headers="+Ma(Ng(O))+"&"+c:this.u&&Ch(f,this.u,O)),wh(this.h,x),this.Ra&&Rt(f,"TYPE","init"),this.S?(Rt(f,"$req",c),Rt(f,"SID","null"),x.U=!0,Eh(x,f,null)):Eh(x,f,c),this.I=2}}else this.I==3&&(o?Lg(this,o):this.i.length==0||yg(this.h)||Lg(this))};function Lg(o,c){var f;c?f=c.l:f=o.V++;const g=Sn(o.J);Rt(g,"SID",o.M),Rt(g,"RID",f),Rt(g,"AID",o.K),Ha(o,g),o.u&&o.o&&Ch(g,o.u,o.o),f=new yi(o,o.j,f,o.D+1),o.u===null&&(f.J=o.o),c&&(o.i=c.G.concat(o.i)),c=Ug(o,f,1e3),f.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),wh(o.h,f),Eh(f,g,c)}function Ha(o,c){o.H&&vt(o.H,function(f,g){Rt(c,g,f)}),o.l&&vt({},function(f,g){Rt(c,g,f)})}function Ug(o,c,f){f=Math.min(o.i.length,f);const g=o.l?h(o.l.Ka,o.l,o):null;t:{var x=o.i;let it=-1;for(;;){const te=["count="+f];it==-1?f>0?(it=x[0].g,te.push("ofs="+it)):it=0:te.push("ofs="+it);let At=!0;for(let se=0;se<f;se++){var O=x[se].g;const wn=x[se].map;if(O-=it,O<0)it=Math.max(0,x[se].g-100),At=!1;else try{O="req"+O+"_"||"";try{var z=wn instanceof Map?wn:Object.entries(wn);for(const[ws,Ei]of z){let bi=Ei;l(Ei)&&(bi=gh(Ei)),te.push(O+ws+"="+encodeURIComponent(bi))}}catch(ws){throw te.push(O+"type="+encodeURIComponent("_badmap")),ws}}catch{g&&g(wn)}}if(At){z=te.join("&");break t}}z=void 0}return o=o.i.splice(0,f),c.G=o,z}function Pg(o){if(!o.g&&!o.v){o.Y=1;var c=o.Da;B||_(),F||(B(),F=!0),T.add(c,o),o.A=0}}function xh(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=Da(h(o.Da,o),Bg(o,o.A)),o.A++,!0)}e.Da=function(){if(this.v=null,jg(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=Da(h(this.Wa,this),o)}},e.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Ae(10),Nl(this),jg(this))};function Dh(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function jg(o){o.g=new yi(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var c=Sn(o.na);Rt(c,"RID","rpc"),Rt(c,"SID",o.M),Rt(c,"AID",o.K),Rt(c,"CI",o.F?"0":"1"),!o.F&&o.ia&&Rt(c,"TO",o.ia),Rt(c,"TYPE","xmlhttp"),Ha(o,c),o.u&&o.o&&Ch(c,o.u,o.o),o.O&&(o.g.H=o.O);var f=o.g;o=o.ba,f.M=1,f.A=Il(Sn(c)),f.u=null,f.R=!0,dg(f,o)}e.Va=function(){this.C!=null&&(this.C=null,Nl(this),xh(this),Ae(19))};function Dl(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function zg(o,c){var f=null;if(o.g==c){Dl(o),Dh(o),o.g=null;var g=2}else if(Sh(o.h,c))f=c.G,vg(o.h,c),g=1;else return;if(o.I!=0){if(c.o)if(g==1){f=c.u?c.u.length:0,c=Date.now()-c.F;var x=o.D;g=Al(),Tt(g,new lg(g,f)),xl(o)}else Pg(o);else if(x=c.m,x==3||x==0&&c.X>0||!(g==1&&Vw(o,c)||g==2&&xh(o)))switch(f&&f.length>0&&(c=o.h,c.i=c.i.concat(f)),x){case 1:Ss(o,5);break;case 4:Ss(o,10);break;case 3:Ss(o,6);break;default:Ss(o,2)}}}function Bg(o,c){let f=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(f*=2),f*c}function Ss(o,c){if(o.j.info("Error code "+c),c==2){var f=h(o.bb,o),g=o.Ua;const x=!g;g=new _i(g||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||ka(g,"https"),Il(g),x?Cw(g.toString(),f):Nw(g.toString(),f)}else Ae(2);o.I=0,o.l&&o.l.pa(c),qg(o),kg(o)}e.bb=function(o){o?(this.j.info("Successfully pinged google.com"),Ae(2)):(this.j.info("Failed to ping google.com"),Ae(1))};function qg(o){if(o.I=0,o.ja=[],o.l){const c=Tg(o.h);(c.length!=0||o.i.length!=0)&&(C(o.ja,c),C(o.ja,o.i),o.h.i.length=0,v(o.i),o.i.length=0),o.l.oa()}}function Hg(o,c,f){var g=f instanceof _i?Sn(f):new _i(f);if(g.g!="")c&&(g.g=c+"."+g.g),La(g,g.u);else{var x=a.location;g=x.protocol,c=c?c+"."+x.hostname:x.hostname,x=+x.port;const O=new _i(null);g&&ka(O,g),c&&(O.g=c),x&&La(O,x),f&&(O.h=f),g=O}return f=o.G,c=o.wa,f&&c&&Rt(g,f,c),Rt(g,"VER",o.ka),Ha(o,g),g}function Fg(o,c,f){if(c&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Aa&&!o.ma?new Lt(new Rh({ab:f})):new Lt(o.ma),c.Fa(o.L),c}e.isActive=function(){return!!this.l&&this.l.isActive(this)};function Gg(){}e=Gg.prototype,e.ra=function(){},e.qa=function(){},e.pa=function(){},e.oa=function(){},e.isActive=function(){return!0},e.Ka=function(){};function Ol(){}Ol.prototype.g=function(o,c){return new je(o,c)};function je(o,c){Wt.call(this),this.g=new Vg(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(o?o["X-WebChannel-Client-Profile"]=c.sa:o={"X-WebChannel-Client-Profile":c.sa}),this.g.U=o,(o=c&&c.Qb)&&!A(o)&&(this.g.u=o),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!A(c)&&(this.g.G=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new cr(this)}m(je,Wt),je.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},je.prototype.close=function(){Nh(this.g)},je.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var f={};f.__data__=o,o=f}else this.v&&(f={},f.__data__=gh(o),o=f);c.i.push(new Tw(c.Ya++,o)),c.I==3&&xl(c)},je.prototype.N=function(){this.g.l=null,delete this.j,Nh(this.g),delete this.g,je.Z.N.call(this)};function Kg(o){yh.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){t:{for(const f in c){o=f;break t}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}m(Kg,yh);function Qg(){_h.call(this),this.status=1}m(Qg,_h);function cr(o){this.g=o}m(cr,Gg),cr.prototype.ra=function(){Tt(this.g,"a")},cr.prototype.qa=function(o){Tt(this.g,new Kg(o))},cr.prototype.pa=function(o){Tt(this.g,new Qg)},cr.prototype.oa=function(){Tt(this.g,"b")},Ol.prototype.createWebChannel=Ol.prototype.g,je.prototype.send=je.prototype.o,je.prototype.open=je.prototype.m,je.prototype.close=je.prototype.close,PA=function(){return new Ol},UA=function(){return Al()},LA=Es,Bd={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Sl.NO_ERROR=0,Sl.TIMEOUT=8,Sl.HTTP_ERROR=6,bu=Sl,ug.COMPLETE="complete",kA=ug,sg.EventType=Na,Na.OPEN="a",Na.CLOSE="b",Na.ERROR="c",Na.MESSAGE="d",Wt.prototype.listen=Wt.prototype.J,so=sg,Lt.prototype.listenOnce=Lt.prototype.K,Lt.prototype.getLastError=Lt.prototype.Ha,Lt.prototype.getLastErrorCode=Lt.prototype.ya,Lt.prototype.getStatus=Lt.prototype.ca,Lt.prototype.getResponseJson=Lt.prototype.La,Lt.prototype.getResponseText=Lt.prototype.la,Lt.prototype.send=Lt.prototype.ea,Lt.prototype.setWithCredentials=Lt.prototype.Fa,VA=Lt}).apply(typeof Jl<"u"?Jl:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}ve.UNAUTHENTICATED=new ve(null),ve.GOOGLE_CREDENTIALS=new ve("google-credentials-uid"),ve.FIRST_PARTY=new ve("first-party-uid"),ve.MOCK_USER=new ve("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ea="12.12.0";function _O(e){Ea=e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xs=new Kc("@firebase/firestore");function gr(){return Xs.logLevel}function H(e,...t){if(Xs.logLevel<=ot.DEBUG){const n=t.map(Tp);Xs.debug(`Firestore (${Ea}): ${e}`,...n)}}function fi(e,...t){if(Xs.logLevel<=ot.ERROR){const n=t.map(Tp);Xs.error(`Firestore (${Ea}): ${e}`,...n)}}function $s(e,...t){if(Xs.logLevel<=ot.WARN){const n=t.map(Tp);Xs.warn(`Firestore (${Ea}): ${e}`,...n)}}function Tp(e){if(typeof e=="string")return e;try{return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(e,t,n){let i="Unexpected state";typeof t=="string"?i=t:n=t,jA(e,i,n)}function jA(e,t,n){let i=`FIRESTORE (${Ea}) INTERNAL ASSERTION FAILED: ${t} (ID: ${e.toString(16)})`;if(n!==void 0)try{i+=" CONTEXT: "+JSON.stringify(n)}catch{i+=" CONTEXT: "+n}throw fi(i),new Error(i)}function gt(e,t,n,i){let s="Unexpected state";typeof n=="string"?s=n:i=n,e||jA(t,s,i)}function Z(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends En{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zA{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class vO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(ve.UNAUTHENTICATED))}shutdown(){}}class TO{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class EO{constructor(t){this.t=t,this.currentUser=ve.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){gt(this.o===void 0,42304);let i=this.i;const s=u=>this.i!==i?(i=this.i,n(u)):Promise.resolve();let r=new js;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new js,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const u=r;t.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new js)}},0),a()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==t?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(gt(typeof i.accessToken=="string",31837,{l:i}),new zA(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return gt(t===null||typeof t=="string",2055,{h:t}),new ve(t)}}class bO{constructor(t,n,i){this.P=t,this.T=n,this.I=i,this.type="FirstParty",this.user=ve.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const t=this.A();return t&&this.R.set("Authorization",t),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class AO{constructor(t,n,i){this.P=t,this.T=n,this.I=i}getToken(){return Promise.resolve(new bO(this.P,this.T,this.I))}start(t,n){t.enqueueRetryable(()=>n(ve.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class h0{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class SO{constructor(t,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,pn(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,n){gt(this.o===void 0,3512);const i=r=>{r.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const a=r.token!==this.m;return this.m=r.token,H("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(r.token):Promise.resolve()};this.o=r=>{t.enqueueRetryable(()=>i(r))};const s=r=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(r=>s(r)),setTimeout(()=>{if(!this.appCheck){const r=this.V.getImmediate({optional:!0});r?s(r):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new h0(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(gt(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new h0(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wO(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let i=0;i<e;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const s=wO(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<n&&(i+=t.charAt(s[r]%62))}return i}}function lt(e,t){return e<t?-1:e>t?1:0}function qd(e,t){const n=Math.min(e.length,t.length);for(let i=0;i<n;i++){const s=e.charAt(i),r=t.charAt(i);if(s!==r)return Cf(s)===Cf(r)?lt(s,r):Cf(s)?1:-1}return lt(e.length,t.length)}const IO=55296,RO=57343;function Cf(e){const t=e.charCodeAt(0);return t>=IO&&t<=RO}function sa(e,t,n){return e.length===t.length&&e.every((i,s)=>n(i,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f0="__name__";class Rn{constructor(t,n,i){n===void 0?n=0:n>t.length&&K(637,{offset:n,range:t.length}),i===void 0?i=t.length-n:i>t.length-n&&K(1746,{length:i,range:t.length-n}),this.segments=t,this.offset=n,this.len=i}get length(){return this.len}isEqual(t){return Rn.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Rn?t.forEach(i=>{n.push(i)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,i=this.limit();n<i;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const i=Math.min(t.length,n.length);for(let s=0;s<i;s++){const r=Rn.compareSegments(t.get(s),n.get(s));if(r!==0)return r}return lt(t.length,n.length)}static compareSegments(t,n){const i=Rn.isNumericId(t),s=Rn.isNumericId(n);return i&&!s?-1:!i&&s?1:i&&s?Rn.extractNumericId(t).compare(Rn.extractNumericId(n)):qd(t,n)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return ts.fromString(t.substring(4,t.length-2))}}class wt extends Rn{construct(t,n,i){return new wt(t,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const i of t){if(i.indexOf("//")>=0)throw new q(k.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(s=>s.length>0))}return new wt(n)}static emptyPath(){return new wt([])}}const CO=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class me extends Rn{construct(t,n,i){return new me(t,n,i)}static isValidIdentifier(t){return CO.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),me.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===f0}static keyField(){return new me([f0])}static fromServerFormat(t){const n=[];let i="",s=0;const r=()=>{if(i.length===0)throw new q(k.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let a=!1;for(;s<t.length;){const l=t[s];if(l==="\\"){if(s+1===t.length)throw new q(k.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new q(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);i+=u,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(i+=l,s++):(r(),s++)}if(r(),a)throw new q(k.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new me(n)}static emptyPath(){return new me([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(t){this.path=t}static fromPath(t){return new G(wt.fromString(t))}static fromName(t){return new G(wt.fromString(t).popFirst(5))}static empty(){return new G(wt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&wt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return wt.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new G(new wt(t.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BA(e,t,n){if(!n)throw new q(k.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function NO(e,t,n,i){if(t===!0&&i===!0)throw new q(k.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function d0(e){if(!G.isDocumentKey(e))throw new q(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function m0(e){if(G.isDocumentKey(e))throw new q(k.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function qA(e){return typeof e=="object"&&e!==null&&(Object.getPrototypeOf(e)===Object.prototype||Object.getPrototypeOf(e)===null)}function Wc(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(i){return i.constructor?i.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":K(12329,{type:typeof e})}function es(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new q(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Wc(e);throw new q(k.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(e,t){const n={typeString:e};return t&&(n.value=t),n}function ml(e,t){if(!qA(e))throw new q(k.INVALID_ARGUMENT,"JSON must be an object");let n;for(const i in t)if(t[i]){const s=t[i].typeString,r="value"in t[i]?{value:t[i].value}:void 0;if(!(i in e)){n=`JSON missing required field: '${i}'`;break}const a=e[i];if(s&&typeof a!==s){n=`JSON field '${i}' must be a ${s}.`;break}if(r!==void 0&&a!==r.value){n=`Expected '${i}' field to equal '${r.value}'`;break}}if(n)throw new q(k.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p0=-62135596800,g0=1e6;class xt{static now(){return xt.fromMillis(Date.now())}static fromDate(t){return xt.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),i=Math.floor((t-1e3*n)*g0);return new xt(n,i)}constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new q(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new q(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<p0)throw new q(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new q(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/g0}_compareTo(t){return this.seconds===t.seconds?lt(this.nanoseconds,t.nanoseconds):lt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:xt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(ml(t,xt._jsonSchema))return new xt(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-p0;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}xt._jsonSchemaVersion="firestore/timestamp/1.0",xt._jsonSchema={type:$t("string",xt._jsonSchemaVersion),seconds:$t("number"),nanoseconds:$t("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{static fromTimestamp(t){return new J(t)}static min(){return new J(new xt(0,0))}static max(){return new J(new xt(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Go=-1;function xO(e,t){const n=e.toTimestamp().seconds,i=e.toTimestamp().nanoseconds+1,s=J.fromTimestamp(i===1e9?new xt(n+1,0):new xt(n,i));return new us(s,G.empty(),t)}function DO(e){return new us(e.readTime,e.key,Go)}class us{constructor(t,n,i){this.readTime=t,this.documentKey=n,this.largestBatchId=i}static min(){return new us(J.min(),G.empty(),Go)}static max(){return new us(J.max(),G.empty(),Go)}}function OO(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=G.comparator(e.documentKey,t.documentKey),n!==0?n:lt(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MO="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class VO{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ba(e){if(e.code!==k.FAILED_PRECONDITION||e.message!==MO)throw e;H("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&K(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new L((i,s)=>{this.nextCallback=r=>{this.wrapSuccess(t,r).next(i,s)},this.catchCallback=r=>{this.wrapFailure(n,r).next(i,s)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):L.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):L.reject(n)}static resolve(t){return new L((n,i)=>{n(t)})}static reject(t){return new L((n,i)=>{i(t)})}static waitFor(t){return new L((n,i)=>{let s=0,r=0,a=!1;t.forEach(l=>{++s,l.next(()=>{++r,a&&r===s&&n()},u=>i(u))}),a=!0,r===s&&n()})}static or(t){let n=L.resolve(!1);for(const i of t)n=n.next(s=>s?L.resolve(s):i());return n}static forEach(t,n){const i=[];return t.forEach((s,r)=>{i.push(n.call(this,s,r))}),this.waitFor(i)}static mapArray(t,n){return new L((i,s)=>{const r=t.length,a=new Array(r);let l=0;for(let u=0;u<r;u++){const h=u;n(t[h]).next(d=>{a[h]=d,++l,l===r&&i(a)},d=>s(d))}})}static doWhile(t,n){return new L((i,s)=>{const r=()=>{t()===!0?n().next(()=>{r()},s):i()};r()})}}function kO(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Aa(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=i=>this.ae(i),this.ue=i=>n.writeSequenceNumber(i))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}th.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bp=-1;function eh(e){return e==null}function mc(e){return e===0&&1/e==-1/0}function LO(e){return typeof e=="number"&&Number.isInteger(e)&&!mc(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HA="";function UO(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=y0(t)),t=PO(e.get(n),t);return y0(t)}function PO(e,t){let n=t;const i=e.length;for(let s=0;s<i;s++){const r=e.charAt(s);switch(r){case"\0":n+="";break;case HA:n+="";break;default:n+=r}}return n}function y0(e){return e+HA+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _0(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function ys(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function FA(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(t,n){this.comparator=t,this.root=n||he.EMPTY}insert(t,n){return new Vt(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,he.BLACK,null,null))}remove(t){return new Vt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,he.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(t){let n=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(t,i.key);if(s===0)return n+i.left.size;s<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,i)=>(t(n,i),!1))}toString(){const t=[];return this.inorderTraversal((n,i)=>(t.push(`${n}:${i}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Zl(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Zl(this.root,t,this.comparator,!1)}getReverseIterator(){return new Zl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Zl(this.root,t,this.comparator,!0)}}class Zl{constructor(t,n,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=n?i(t.key,n):1,n&&s&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(r===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class he{constructor(t,n,i,s,r){this.key=t,this.value=n,this.color=i??he.RED,this.left=s??he.EMPTY,this.right=r??he.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,i,s,r){return new he(t??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,i){let s=this;const r=i(t,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(t,n,i),null):r===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(t,n,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return he.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let i,s=this;if(n(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(t,s.key)===0){if(s.right.isEmpty())return he.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,he.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,he.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw K(43730,{key:this.key,value:this.value});if(this.right.isRed())throw K(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw K(27949);return t+(this.isRed()?0:1)}}he.EMPTY=null,he.RED=!0,he.BLACK=!1;he.EMPTY=new class{constructor(){this.size=0}get key(){throw K(57766)}get value(){throw K(16141)}get color(){throw K(16727)}get left(){throw K(29726)}get right(){throw K(36894)}copy(t,n,i,s,r){return this}insert(t,n,i){return new he(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(t){this.comparator=t,this.data=new Vt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,i)=>(t(n),!1))}forEachInRange(t,n){const i=this.data.getIteratorFrom(t[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,t[1])>=0)return;n(s.key)}}forEachWhile(t,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!t(i.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new v0(this.data.getIterator())}getIteratorFrom(t){return new v0(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(i=>{n=n.add(i)}),n}isEqual(t){if(!(t instanceof ne)||this.size!==t.size)return!1;const n=this.data.getIterator(),i=t.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new ne(this.comparator);return n.data=t,n}}class v0{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(t){this.fields=t,t.sort(me.comparator)}static empty(){return new Fe([])}unionWith(t){let n=new ne(me.comparator);for(const i of this.fields)n=n.add(i);for(const i of t)n=n.add(i);return new Fe(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return sa(this.fields,t.fields,(n,i)=>n.isEqual(i))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GA extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new GA("Invalid base64 string: "+r):r}}(t);return new ye(n)}static fromUint8Array(t){const n=function(s){let r="";for(let a=0;a<s.length;++a)r+=String.fromCharCode(s[a]);return r}(t);return new ye(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const i=new Uint8Array(n.length);for(let s=0;s<n.length;s++)i[s]=n.charCodeAt(s);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return lt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ye.EMPTY_BYTE_STRING=new ye("");const jO=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function cs(e){if(gt(!!e,39018),typeof e=="string"){let t=0;const n=jO.exec(e);if(gt(!!n,46558,{timestamp:e}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),t=Number(s)}const i=new Date(e);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:zt(e.seconds),nanos:zt(e.nanos)}}function zt(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function hs(e){return typeof e=="string"?ye.fromBase64String(e):ye.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KA="server_timestamp",QA="__type__",YA="__previous_value__",XA="__local_write_time__";function Ap(e){var n,i;return((i=(((n=e==null?void 0:e.mapValue)==null?void 0:n.fields)||{})[QA])==null?void 0:i.stringValue)===KA}function nh(e){const t=e.mapValue.fields[YA];return Ap(t)?nh(t):t}function Ko(e){const t=cs(e.mapValue.fields[XA].timestampValue);return new xt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zO{constructor(t,n,i,s,r,a,l,u,h,d,m){this.databaseId=t,this.appId=n,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=d,this.apiKey=m}}const pc="(default)";class Qo{constructor(t,n){this.projectId=t,this.database=n||pc}static empty(){return new Qo("","")}get isDefaultDatabase(){return this.database===pc}isEqual(t){return t instanceof Qo&&t.projectId===this.projectId&&t.database===this.database}}function BO(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new q(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Qo(e.options.projectId,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $A="__type__",qO="__max__",Wl={mapValue:{}},JA="__vector__",gc="value";function fs(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Ap(e)?4:FO(e)?9007199254740991:HO(e)?10:11:K(28295,{value:e})}function Pn(e,t){if(e===t)return!0;const n=fs(e);if(n!==fs(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Ko(e).isEqual(Ko(t));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const a=cs(s.timestampValue),l=cs(r.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,r){return hs(s.bytesValue).isEqual(hs(r.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,r){return zt(s.geoPointValue.latitude)===zt(r.geoPointValue.latitude)&&zt(s.geoPointValue.longitude)===zt(r.geoPointValue.longitude)}(e,t);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return zt(s.integerValue)===zt(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const a=zt(s.doubleValue),l=zt(r.doubleValue);return a===l?mc(a)===mc(l):isNaN(a)&&isNaN(l)}return!1}(e,t);case 9:return sa(e.arrayValue.values||[],t.arrayValue.values||[],Pn);case 10:case 11:return function(s,r){const a=s.mapValue.fields||{},l=r.mapValue.fields||{};if(_0(a)!==_0(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!Pn(a[u],l[u])))return!1;return!0}(e,t);default:return K(52216,{left:e})}}function Yo(e,t){return(e.values||[]).find(n=>Pn(n,t))!==void 0}function ra(e,t){if(e===t)return 0;const n=fs(e),i=fs(t);if(n!==i)return lt(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return lt(e.booleanValue,t.booleanValue);case 2:return function(r,a){const l=zt(r.integerValue||r.doubleValue),u=zt(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(e,t);case 3:return T0(e.timestampValue,t.timestampValue);case 4:return T0(Ko(e),Ko(t));case 5:return qd(e.stringValue,t.stringValue);case 6:return function(r,a){const l=hs(r),u=hs(a);return l.compareTo(u)}(e.bytesValue,t.bytesValue);case 7:return function(r,a){const l=r.split("/"),u=a.split("/");for(let h=0;h<l.length&&h<u.length;h++){const d=lt(l[h],u[h]);if(d!==0)return d}return lt(l.length,u.length)}(e.referenceValue,t.referenceValue);case 8:return function(r,a){const l=lt(zt(r.latitude),zt(a.latitude));return l!==0?l:lt(zt(r.longitude),zt(a.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return E0(e.arrayValue,t.arrayValue);case 10:return function(r,a){var p,v,C,M;const l=r.fields||{},u=a.fields||{},h=(p=l[gc])==null?void 0:p.arrayValue,d=(v=u[gc])==null?void 0:v.arrayValue,m=lt(((C=h==null?void 0:h.values)==null?void 0:C.length)||0,((M=d==null?void 0:d.values)==null?void 0:M.length)||0);return m!==0?m:E0(h,d)}(e.mapValue,t.mapValue);case 11:return function(r,a){if(r===Wl.mapValue&&a===Wl.mapValue)return 0;if(r===Wl.mapValue)return 1;if(a===Wl.mapValue)return-1;const l=r.fields||{},u=Object.keys(l),h=a.fields||{},d=Object.keys(h);u.sort(),d.sort();for(let m=0;m<u.length&&m<d.length;++m){const p=qd(u[m],d[m]);if(p!==0)return p;const v=ra(l[u[m]],h[d[m]]);if(v!==0)return v}return lt(u.length,d.length)}(e.mapValue,t.mapValue);default:throw K(23264,{he:n})}}function T0(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return lt(e,t);const n=cs(e),i=cs(t),s=lt(n.seconds,i.seconds);return s!==0?s:lt(n.nanos,i.nanos)}function E0(e,t){const n=e.values||[],i=t.values||[];for(let s=0;s<n.length&&s<i.length;++s){const r=ra(n[s],i[s]);if(r)return r}return lt(n.length,i.length)}function aa(e){return Hd(e)}function Hd(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const i=cs(n);return`time(${i.seconds},${i.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return hs(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return G.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let i="[",s=!0;for(const r of n.values||[])s?s=!1:i+=",",i+=Hd(r);return i+"]"}(e.arrayValue):"mapValue"in e?function(n){const i=Object.keys(n.fields||{}).sort();let s="{",r=!0;for(const a of i)r?r=!1:s+=",",s+=`${a}:${Hd(n.fields[a])}`;return s+"}"}(e.mapValue):K(61005,{value:e})}function Au(e){switch(fs(e)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=nh(e);return t?16+Au(t):16;case 5:return 2*e.stringValue.length;case 6:return hs(e.bytesValue).approximateByteSize();case 7:return e.referenceValue.length;case 9:return function(i){return(i.values||[]).reduce((s,r)=>s+Au(r),0)}(e.arrayValue);case 10:case 11:return function(i){let s=0;return ys(i.fields,(r,a)=>{s+=r.length+Au(a)}),s}(e.mapValue);default:throw K(13486,{value:e})}}function b0(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function Fd(e){return!!e&&"integerValue"in e}function Sp(e){return!!e&&"arrayValue"in e}function A0(e){return!!e&&"nullValue"in e}function S0(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Su(e){return!!e&&"mapValue"in e}function HO(e){var n,i;return((i=(((n=e==null?void 0:e.mapValue)==null?void 0:n.fields)||{})[$A])==null?void 0:i.stringValue)===JA}function So(e){if(e.geoPointValue)return{geoPointValue:{...e.geoPointValue}};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:{...e.timestampValue}};if(e.mapValue){const t={mapValue:{fields:{}}};return ys(e.mapValue.fields,(n,i)=>t.mapValue.fields[n]=So(i)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=So(e.arrayValue.values[n]);return t}return{...e}}function FO(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue===qO}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(t){this.value=t}static empty(){return new ke({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let i=0;i<t.length-1;++i)if(n=(n.mapValue.fields||{})[t.get(i)],!Su(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=So(n)}setAll(t){let n=me.emptyPath(),i={},s=[];t.forEach((a,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,i,s),i={},s=[],n=l.popLast()}a?i[l.lastSegment()]=So(a):s.push(l.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,i,s)}delete(t){const n=this.field(t.popLast());Su(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return Pn(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<t.length;++i){let s=n.mapValue.fields[t.get(i)];Su(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[t.get(i)]=s),n=s}return n.mapValue.fields}applyChanges(t,n,i){ys(n,(s,r)=>t[s]=r);for(const s of i)delete t[s]}clone(){return new ke(So(this.value))}}function ZA(e){const t=[];return ys(e.fields,(n,i)=>{const s=new me([n]);if(Su(i)){const r=ZA(i.mapValue).fields;if(r.length===0)t.push(s);else for(const a of r)t.push(s.child(a))}else t.push(s)}),new Fe(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(t,n,i,s,r,a,l){this.key=t,this.documentType=n,this.version=i,this.readTime=s,this.createTime=r,this.data=a,this.documentState=l}static newInvalidDocument(t){return new Te(t,0,J.min(),J.min(),J.min(),ke.empty(),0)}static newFoundDocument(t,n,i,s){return new Te(t,1,n,J.min(),i,s,0)}static newNoDocument(t,n){return new Te(t,2,n,J.min(),J.min(),ke.empty(),0)}static newUnknownDocument(t,n){return new Te(t,3,n,J.min(),J.min(),ke.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=ke.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=ke.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Te&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Te(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(t,n){this.position=t,this.inclusive=n}}function w0(e,t,n){let i=0;for(let s=0;s<e.position.length;s++){const r=t[s],a=e.position[s];if(r.field.isKeyField()?i=G.comparator(G.fromName(a.referenceValue),n.key):i=ra(a,n.data.field(r.field)),r.dir==="desc"&&(i*=-1),i!==0)break}return i}function I0(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Pn(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(t,n="asc"){this.field=t,this.dir=n}}function GO(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WA{}class Yt extends WA{constructor(t,n,i){super(),this.field=t,this.op=n,this.value=i}static create(t,n,i){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,i):new QO(t,n,i):n==="array-contains"?new $O(t,i):n==="in"?new JO(t,i):n==="not-in"?new ZO(t,i):n==="array-contains-any"?new WO(t,i):new Yt(t,n,i)}static createKeyFieldInFilter(t,n,i){return n==="in"?new YO(t,i):new XO(t,i)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(ra(n,this.value)):n!==null&&fs(this.value)===fs(n)&&this.matchesComparison(ra(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return K(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class vn extends WA{constructor(t,n){super(),this.filters=t,this.op=n,this.Pe=null}static create(t,n){return new vn(t,n)}matches(t){return tS(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function tS(e){return e.op==="and"}function eS(e){return KO(e)&&tS(e)}function KO(e){for(const t of e.filters)if(t instanceof vn)return!1;return!0}function Gd(e){if(e instanceof Yt)return e.field.canonicalString()+e.op.toString()+aa(e.value);if(eS(e))return e.filters.map(t=>Gd(t)).join(",");{const t=e.filters.map(n=>Gd(n)).join(",");return`${e.op}(${t})`}}function nS(e,t){return e instanceof Yt?function(i,s){return s instanceof Yt&&i.op===s.op&&i.field.isEqual(s.field)&&Pn(i.value,s.value)}(e,t):e instanceof vn?function(i,s){return s instanceof vn&&i.op===s.op&&i.filters.length===s.filters.length?i.filters.reduce((r,a,l)=>r&&nS(a,s.filters[l]),!0):!1}(e,t):void K(19439)}function iS(e){return e instanceof Yt?function(n){return`${n.field.canonicalString()} ${n.op} ${aa(n.value)}`}(e):e instanceof vn?function(n){return n.op.toString()+" {"+n.getFilters().map(iS).join(" ,")+"}"}(e):"Filter"}class QO extends Yt{constructor(t,n,i){super(t,n,i),this.key=G.fromName(i.referenceValue)}matches(t){const n=G.comparator(t.key,this.key);return this.matchesComparison(n)}}class YO extends Yt{constructor(t,n){super(t,"in",n),this.keys=sS("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class XO extends Yt{constructor(t,n){super(t,"not-in",n),this.keys=sS("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function sS(e,t){var n;return(((n=t.arrayValue)==null?void 0:n.values)||[]).map(i=>G.fromName(i.referenceValue))}class $O extends Yt{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Sp(n)&&Yo(n.arrayValue,this.value)}}class JO extends Yt{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Yo(this.value.arrayValue,n)}}class ZO extends Yt{constructor(t,n){super(t,"not-in",n)}matches(t){if(Yo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Yo(this.value.arrayValue,n)}}class WO extends Yt{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Sp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>Yo(this.value.arrayValue,i))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tM{constructor(t,n=null,i=[],s=[],r=null,a=null,l=null){this.path=t,this.collectionGroup=n,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=a,this.endAt=l,this.Te=null}}function R0(e,t=null,n=[],i=[],s=null,r=null,a=null){return new tM(e,t,n,i,s,r,a)}function wp(e){const t=Z(e);if(t.Te===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(i=>Gd(i)).join(","),n+="|ob:",n+=t.orderBy.map(i=>function(r){return r.field.canonicalString()+r.dir}(i)).join(","),eh(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(i=>aa(i)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(i=>aa(i)).join(",")),t.Te=n}return t.Te}function Ip(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!GO(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!nS(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!I0(e.startAt,t.startAt)&&I0(e.endAt,t.endAt)}function Kd(e){return G.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(t,n=null,i=[],s=[],r=null,a="F",l=null,u=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=a,this.startAt=l,this.endAt=u,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function eM(e,t,n,i,s,r,a,l){return new pl(e,t,n,i,s,r,a,l)}function Rp(e){return new pl(e)}function C0(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function nM(e){return G.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}function rS(e){return e.collectionGroup!==null}function wo(e){const t=Z(e);if(t.Ee===null){t.Ee=[];const n=new Set;for(const r of t.explicitOrderBy)t.Ee.push(r),n.add(r.field.canonicalString());const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new ne(me.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(t).forEach(r=>{n.has(r.canonicalString())||r.isKeyField()||t.Ee.push(new _c(r,i))}),n.has(me.keyField().canonicalString())||t.Ee.push(new _c(me.keyField(),i))}return t.Ee}function Vn(e){const t=Z(e);return t.Ie||(t.Ie=iM(t,wo(e))),t.Ie}function iM(e,t){if(e.limitType==="F")return R0(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(s=>{const r=s.dir==="desc"?"asc":"desc";return new _c(s.field,r)});const n=e.endAt?new yc(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new yc(e.startAt.position,e.startAt.inclusive):null;return R0(e.path,e.collectionGroup,t,e.filters,e.limit,n,i)}}function Qd(e,t){const n=e.filters.concat([t]);return new pl(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function Yd(e,t,n){return new pl(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function ih(e,t){return Ip(Vn(e),Vn(t))&&e.limitType===t.limitType}function aS(e){return`${wp(Vn(e))}|lt:${e.limitType}`}function yr(e){return`Query(target=${function(n){let i=n.path.canonicalString();return n.collectionGroup!==null&&(i+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(i+=`, filters: [${n.filters.map(s=>iS(s)).join(", ")}]`),eh(n.limit)||(i+=", limit: "+n.limit),n.orderBy.length>0&&(i+=`, orderBy: [${n.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),n.startAt&&(i+=", startAt: ",i+=n.startAt.inclusive?"b:":"a:",i+=n.startAt.position.map(s=>aa(s)).join(",")),n.endAt&&(i+=", endAt: ",i+=n.endAt.inclusive?"a:":"b:",i+=n.endAt.position.map(s=>aa(s)).join(",")),`Target(${i})`}(Vn(e))}; limitType=${e.limitType})`}function sh(e,t){return t.isFoundDocument()&&function(i,s){const r=s.key.path;return i.collectionGroup!==null?s.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(r):G.isDocumentKey(i.path)?i.path.isEqual(r):i.path.isImmediateParentOf(r)}(e,t)&&function(i,s){for(const r of wo(i))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(e,t)&&function(i,s){for(const r of i.filters)if(!r.matches(s))return!1;return!0}(e,t)&&function(i,s){return!(i.startAt&&!function(a,l,u){const h=w0(a,l,u);return a.inclusive?h<=0:h<0}(i.startAt,wo(i),s)||i.endAt&&!function(a,l,u){const h=w0(a,l,u);return a.inclusive?h>=0:h>0}(i.endAt,wo(i),s))}(e,t)}function sM(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function oS(e){return(t,n)=>{let i=!1;for(const s of wo(e)){const r=rM(s,t,n);if(r!==0)return r;i=i||s.field.isKeyField()}return 0}}function rM(e,t,n){const i=e.field.isKeyField()?G.comparator(t.key,n.key):function(r,a,l){const u=a.data.field(r),h=l.data.field(r);return u!==null&&h!==null?ra(u,h):K(42886)}(e.field,t,n);switch(e.dir){case"asc":return i;case"desc":return-1*i;default:return K(19790,{direction:e.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),i=this.inner[n];if(i!==void 0){for(const[s,r]of i)if(this.equalsFn(s,t))return r}}has(t){return this.get(t)!==void 0}set(t,n){const i=this.mapKeyFn(t),s=this.inner[i];if(s===void 0)return this.inner[i]=[[t,n]],void this.innerSize++;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],t))return void(s[r]=[t,n]);s.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),i=this.inner[n];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return i.length===1?delete this.inner[n]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(t){ys(this.inner,(n,i)=>{for(const[s,r]of i)t(s,r)})}isEmpty(){return FA(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aM=new Vt(G.comparator);function di(){return aM}const lS=new Vt(G.comparator);function ro(...e){let t=lS;for(const n of e)t=t.insert(n.key,n);return t}function uS(e){let t=lS;return e.forEach((n,i)=>t=t.insert(n,i.overlayedDocument)),t}function Ms(){return Io()}function cS(){return Io()}function Io(){return new rr(e=>e.toString(),(e,t)=>e.isEqual(t))}const oM=new Vt(G.comparator),lM=new ne(G.comparator);function ut(...e){let t=lM;for(const n of e)t=t.add(n);return t}const uM=new ne(lt);function cM(){return uM}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cp(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:mc(t)?"-0":t}}function hS(e){return{integerValue:""+e}}function hM(e,t){return LO(t)?hS(t):Cp(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(){this._=void 0}}function fM(e,t,n){return e instanceof vc?function(s,r){const a={fields:{[QA]:{stringValue:KA},[XA]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&Ap(r)&&(r=nh(r)),r&&(a.fields[YA]=r),{mapValue:a}}(n,t):e instanceof Xo?dS(e,t):e instanceof $o?mS(e,t):function(s,r){const a=fS(s,r),l=N0(a)+N0(s.Ae);return Fd(a)&&Fd(s.Ae)?hS(l):Cp(s.serializer,l)}(e,t)}function dM(e,t,n){return e instanceof Xo?dS(e,t):e instanceof $o?mS(e,t):n}function fS(e,t){return e instanceof Tc?function(i){return Fd(i)||function(r){return!!r&&"doubleValue"in r}(i)}(t)?t:{integerValue:0}:null}class vc extends rh{}class Xo extends rh{constructor(t){super(),this.elements=t}}function dS(e,t){const n=pS(t);for(const i of e.elements)n.some(s=>Pn(s,i))||n.push(i);return{arrayValue:{values:n}}}class $o extends rh{constructor(t){super(),this.elements=t}}function mS(e,t){let n=pS(t);for(const i of e.elements)n=n.filter(s=>!Pn(s,i));return{arrayValue:{values:n}}}class Tc extends rh{constructor(t,n){super(),this.serializer=t,this.Ae=n}}function N0(e){return zt(e.integerValue||e.doubleValue)}function pS(e){return Sp(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function mM(e,t){return e.field.isEqual(t.field)&&function(i,s){return i instanceof Xo&&s instanceof Xo||i instanceof $o&&s instanceof $o?sa(i.elements,s.elements,Pn):i instanceof Tc&&s instanceof Tc?Pn(i.Ae,s.Ae):i instanceof vc&&s instanceof vc}(e.transform,t.transform)}class pM{constructor(t,n){this.version=t,this.transformResults=n}}class $e{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new $e}static exists(t){return new $e(void 0,t)}static updateTime(t){return new $e(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function wu(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class ah{}function gS(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new oh(e.key,$e.none()):new gl(e.key,e.data,$e.none());{const n=e.data,i=ke.empty();let s=new ne(me.comparator);for(let r of t.fields)if(!s.has(r)){let a=n.field(r);a===null&&r.length>1&&(r=r.popLast(),a=n.field(r)),a===null?i.delete(r):i.set(r,a),s=s.add(r)}return new _s(e.key,i,new Fe(s.toArray()),$e.none())}}function gM(e,t,n){e instanceof gl?function(s,r,a){const l=s.value.clone(),u=D0(s.fieldTransforms,r,a.transformResults);l.setAll(u),r.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(e,t,n):e instanceof _s?function(s,r,a){if(!wu(s.precondition,r))return void r.convertToUnknownDocument(a.version);const l=D0(s.fieldTransforms,r,a.transformResults),u=r.data;u.setAll(yS(s)),u.setAll(l),r.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(e,t,n):function(s,r,a){r.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,n)}function Ro(e,t,n,i){return e instanceof gl?function(r,a,l,u){if(!wu(r.precondition,a))return l;const h=r.value.clone(),d=O0(r.fieldTransforms,u,a);return h.setAll(d),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(e,t,n,i):e instanceof _s?function(r,a,l,u){if(!wu(r.precondition,a))return l;const h=O0(r.fieldTransforms,u,a),d=a.data;return d.setAll(yS(r)),d.setAll(h),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),l===null?null:l.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(m=>m.field))}(e,t,n,i):function(r,a,l){return wu(r.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(e,t,n)}function yM(e,t){let n=null;for(const i of e.fieldTransforms){const s=t.data.field(i.field),r=fS(i.transform,s||null);r!=null&&(n===null&&(n=ke.empty()),n.set(i.field,r))}return n||null}function x0(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(i,s){return i===void 0&&s===void 0||!(!i||!s)&&sa(i,s,(r,a)=>mM(r,a))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class gl extends ah{constructor(t,n,i,s=[]){super(),this.key=t,this.value=n,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class _s extends ah{constructor(t,n,i,s,r=[]){super(),this.key=t,this.data=n,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function yS(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=e.data.field(n);t.set(n,i)}}),t}function D0(e,t,n){const i=new Map;gt(e.length===n.length,32656,{Ve:n.length,de:e.length});for(let s=0;s<n.length;s++){const r=e[s],a=r.transform,l=t.data.field(r.field);i.set(r.field,dM(a,l,n[s]))}return i}function O0(e,t,n){const i=new Map;for(const s of e){const r=s.transform,a=n.data.field(s.field);i.set(s.field,fM(r,a,t))}return i}class oh extends ah{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class _M extends ah{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vM{constructor(t,n,i,s){this.batchId=t,this.localWriteTime=n,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(t,n){const i=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(t.key)&&gM(r,t,i[s])}}applyToLocalView(t,n){for(const i of this.baseMutations)i.key.isEqual(t.key)&&(n=Ro(i,t,n,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(t.key)&&(n=Ro(i,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const i=cS();return this.mutations.forEach(s=>{const r=t.get(s.key),a=r.overlayedDocument;let l=this.applyToLocalView(a,r.mutatedFields);l=n.has(s.key)?null:l;const u=gS(a,l);u!==null&&i.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(J.min())}),i}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),ut())}isEqual(t){return this.batchId===t.batchId&&sa(this.mutations,t.mutations,(n,i)=>x0(n,i))&&sa(this.baseMutations,t.baseMutations,(n,i)=>x0(n,i))}}class Np{constructor(t,n,i,s){this.batch=t,this.commitVersion=n,this.mutationResults=i,this.docVersions=s}static from(t,n,i){gt(t.mutations.length===i.length,58842,{me:t.mutations.length,fe:i.length});let s=function(){return oM}();const r=t.mutations;for(let a=0;a<r.length;a++)s=s.insert(r[a].key,i[a].version);return new Np(t,n,i,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TM{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EM{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ft,dt;function bM(e){switch(e){case k.OK:return K(64938);case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0;default:return K(15467,{code:e})}}function _S(e){if(e===void 0)return fi("GRPC error has no .code"),k.UNKNOWN;switch(e){case Ft.OK:return k.OK;case Ft.CANCELLED:return k.CANCELLED;case Ft.UNKNOWN:return k.UNKNOWN;case Ft.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case Ft.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case Ft.INTERNAL:return k.INTERNAL;case Ft.UNAVAILABLE:return k.UNAVAILABLE;case Ft.UNAUTHENTICATED:return k.UNAUTHENTICATED;case Ft.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case Ft.NOT_FOUND:return k.NOT_FOUND;case Ft.ALREADY_EXISTS:return k.ALREADY_EXISTS;case Ft.PERMISSION_DENIED:return k.PERMISSION_DENIED;case Ft.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case Ft.ABORTED:return k.ABORTED;case Ft.OUT_OF_RANGE:return k.OUT_OF_RANGE;case Ft.UNIMPLEMENTED:return k.UNIMPLEMENTED;case Ft.DATA_LOSS:return k.DATA_LOSS;default:return K(39323,{code:e})}}(dt=Ft||(Ft={}))[dt.OK=0]="OK",dt[dt.CANCELLED=1]="CANCELLED",dt[dt.UNKNOWN=2]="UNKNOWN",dt[dt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",dt[dt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",dt[dt.NOT_FOUND=5]="NOT_FOUND",dt[dt.ALREADY_EXISTS=6]="ALREADY_EXISTS",dt[dt.PERMISSION_DENIED=7]="PERMISSION_DENIED",dt[dt.UNAUTHENTICATED=16]="UNAUTHENTICATED",dt[dt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",dt[dt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",dt[dt.ABORTED=10]="ABORTED",dt[dt.OUT_OF_RANGE=11]="OUT_OF_RANGE",dt[dt.UNIMPLEMENTED=12]="UNIMPLEMENTED",dt[dt.INTERNAL=13]="INTERNAL",dt[dt.UNAVAILABLE=14]="UNAVAILABLE",dt[dt.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AM(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SM=new ts([4294967295,4294967295],0);function M0(e){const t=AM().encode(e),n=new MA;return n.update(t),new Uint8Array(n.digest())}function V0(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),i=t.getUint32(4,!0),s=t.getUint32(8,!0),r=t.getUint32(12,!0);return[new ts([n,i],0),new ts([s,r],0)]}class xp{constructor(t,n,i){if(this.bitmap=t,this.padding=n,this.hashCount=i,n<0||n>=8)throw new ao(`Invalid padding: ${n}`);if(i<0)throw new ao(`Invalid hash count: ${i}`);if(t.length>0&&this.hashCount===0)throw new ao(`Invalid hash count: ${i}`);if(t.length===0&&n!==0)throw new ao(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*t.length-n,this.pe=ts.fromNumber(this.ge)}ye(t,n,i){let s=t.add(n.multiply(ts.fromNumber(i)));return s.compare(SM)===1&&(s=new ts([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const n=M0(t),[i,s]=V0(n);for(let r=0;r<this.hashCount;r++){const a=this.ye(i,s,r);if(!this.we(a))return!1}return!0}static create(t,n,i){const s=t%8==0?0:8-t%8,r=new Uint8Array(Math.ceil(t/8)),a=new xp(r,s,n);return i.forEach(l=>a.insert(l)),a}insert(t){if(this.ge===0)return;const n=M0(t),[i,s]=V0(n);for(let r=0;r<this.hashCount;r++){const a=this.ye(i,s,r);this.Se(a)}}Se(t){const n=Math.floor(t/8),i=t%8;this.bitmap[n]|=1<<i}}class ao extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(t,n,i,s,r){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,n,i){const s=new Map;return s.set(t,yl.createSynthesizedTargetChangeForCurrentChange(t,n,i)),new lh(J.min(),s,new Vt(lt),di(),ut())}}class yl{constructor(t,n,i,s,r){this.resumeToken=t,this.current=n,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,n,i){return new yl(i,n,ut(),ut(),ut())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(t,n,i,s){this.be=t,this.removedTargetIds=n,this.key=i,this.De=s}}class vS{constructor(t,n){this.targetId=t,this.Ce=n}}class TS{constructor(t,n,i=ye.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=n,this.resumeToken=i,this.cause=s}}class k0{constructor(){this.ve=0,this.Fe=L0(),this.Me=ye.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=ut(),n=ut(),i=ut();return this.Fe.forEach((s,r)=>{switch(r){case 0:t=t.add(s);break;case 2:n=n.add(s);break;case 1:i=i.add(s);break;default:K(38017,{changeType:r})}}),new yl(this.Me,this.xe,t,n,i)}qe(){this.Oe=!1,this.Fe=L0()}Ke(t,n){this.Oe=!0,this.Fe=this.Fe.insert(t,n)}Ue(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}$e(){this.ve+=1}We(){this.ve-=1,gt(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class wM{constructor(t){this.Ge=t,this.ze=new Map,this.je=di(),this.Je=tu(),this.He=tu(),this.Ze=new Vt(lt)}Xe(t){for(const n of t.be)t.De&&t.De.isFoundDocument()?this.Ye(n,t.De):this.et(n,t.key,t.De);for(const n of t.removedTargetIds)this.et(n,t.key,t.De)}tt(t){this.forEachTarget(t,n=>{const i=this.nt(n);switch(t.state){case 0:this.rt(n)&&i.Le(t.resumeToken);break;case 1:i.We(),i.Ne||i.qe(),i.Le(t.resumeToken);break;case 2:i.We(),i.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(i.Qe(),i.Le(t.resumeToken));break;case 4:this.rt(n)&&(this.it(n),i.Le(t.resumeToken));break;default:K(56790,{state:t.state})}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.ze.forEach((i,s)=>{this.rt(s)&&n(s)})}st(t){const n=t.targetId,i=t.Ce.count,s=this.ot(n);if(s){const r=s.target;if(Kd(r))if(i===0){const a=new G(r.path);this.et(n,a,Te.newNoDocument(a,J.min()))}else gt(i===1,20013,{expectedCount:i});else{const a=this._t(n);if(a!==i){const l=this.ut(t),u=l?this.ct(l,t,a):1;if(u!==0){this.it(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,h)}}}}}ut(t){const n=t.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:i="",padding:s=0},hashCount:r=0}=n;let a,l;try{a=hs(i).toUint8Array()}catch(u){if(u instanceof GA)return $s("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new xp(a,s,r)}catch(u){return $s(u instanceof ao?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(t,n,i){return n.Ce.count===i-this.Pt(t,n.targetId)?0:2}Pt(t,n){const i=this.Ge.getRemoteKeysForTarget(n);let s=0;return i.forEach(r=>{const a=this.Ge.ht(),l=`projects/${a.projectId}/databases/${a.database}/documents/${r.path.canonicalString()}`;t.mightContain(l)||(this.et(n,r,null),s++)}),s}Tt(t){const n=new Map;this.ze.forEach((r,a)=>{const l=this.ot(a);if(l){if(r.current&&Kd(l.target)){const u=new G(l.target.path);this.Et(u).has(a)||this.It(a,u)||this.et(a,u,Te.newNoDocument(u,t))}r.Be&&(n.set(a,r.ke()),r.qe())}});let i=ut();this.He.forEach((r,a)=>{let l=!0;a.forEachWhile(u=>{const h=this.ot(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(i=i.add(r))}),this.je.forEach((r,a)=>a.setReadTime(t));const s=new lh(t,n,this.Ze,this.je,i);return this.je=di(),this.Je=tu(),this.He=tu(),this.Ze=new Vt(lt),s}Ye(t,n){if(!this.rt(t))return;const i=this.It(t,n.key)?2:0;this.nt(t).Ke(n.key,i),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Et(n.key).add(t)),this.He=this.He.insert(n.key,this.Rt(n.key).add(t))}et(t,n,i){if(!this.rt(t))return;const s=this.nt(t);this.It(t,n)?s.Ke(n,1):s.Ue(n),this.He=this.He.insert(n,this.Rt(n).delete(t)),this.He=this.He.insert(n,this.Rt(n).add(t)),i&&(this.je=this.je.insert(n,i))}removeTarget(t){this.ze.delete(t)}_t(t){const n=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}$e(t){this.nt(t).$e()}nt(t){let n=this.ze.get(t);return n||(n=new k0,this.ze.set(t,n)),n}Rt(t){let n=this.He.get(t);return n||(n=new ne(lt),this.He=this.He.insert(t,n)),n}Et(t){let n=this.Je.get(t);return n||(n=new ne(lt),this.Je=this.Je.insert(t,n)),n}rt(t){const n=this.ot(t)!==null;return n||H("WatchChangeAggregator","Detected inactive target",t),n}ot(t){const n=this.ze.get(t);return n&&n.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new k0),this.Ge.getRemoteKeysForTarget(t).forEach(n=>{this.et(t,n,null)})}It(t,n){return this.Ge.getRemoteKeysForTarget(t).has(n)}}function tu(){return new Vt(G.comparator)}function L0(){return new Vt(G.comparator)}const IM={asc:"ASCENDING",desc:"DESCENDING"},RM={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},CM={and:"AND",or:"OR"};class NM{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function Xd(e,t){return e.useProto3Json||eh(t)?t:{value:t}}function Ec(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function ES(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function xM(e,t){return Ec(e,t.toTimestamp())}function kn(e){return gt(!!e,49232),J.fromTimestamp(function(n){const i=cs(n);return new xt(i.seconds,i.nanos)}(e))}function Dp(e,t){return $d(e,t).canonicalString()}function $d(e,t){const n=function(s){return new wt(["projects",s.projectId,"databases",s.database])}(e).child("documents");return t===void 0?n:n.child(t)}function bS(e){const t=wt.fromString(e);return gt(RS(t),10190,{key:t.toString()}),t}function Jd(e,t){return Dp(e.databaseId,t.path)}function Nf(e,t){const n=bS(t);if(n.get(1)!==e.databaseId.projectId)throw new q(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new q(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new G(SS(n))}function AS(e,t){return Dp(e.databaseId,t)}function DM(e){const t=bS(e);return t.length===4?wt.emptyPath():SS(t)}function Zd(e){return new wt(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function SS(e){return gt(e.length>4&&e.get(4)==="documents",29091,{key:e.toString()}),e.popFirst(5)}function U0(e,t,n){return{name:Jd(e,t),fields:n.value.mapValue.fields}}function OM(e,t){let n;if("targetChange"in t){t.targetChange;const i=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:K(39313,{state:h})}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],r=function(h,d){return h.useProto3Json?(gt(d===void 0||typeof d=="string",58123),ye.fromBase64String(d||"")):(gt(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),ye.fromUint8Array(d||new Uint8Array))}(e,t.targetChange.resumeToken),a=t.targetChange.cause,l=a&&function(h){const d=h.code===void 0?k.UNKNOWN:_S(h.code);return new q(d,h.message||"")}(a);n=new TS(i,s,r,l||null)}else if("documentChange"in t){t.documentChange;const i=t.documentChange;i.document,i.document.name,i.document.updateTime;const s=Nf(e,i.document.name),r=kn(i.document.updateTime),a=i.document.createTime?kn(i.document.createTime):J.min(),l=new ke({mapValue:{fields:i.document.fields}}),u=Te.newFoundDocument(s,r,a,l),h=i.targetIds||[],d=i.removedTargetIds||[];n=new Iu(h,d,u.key,u)}else if("documentDelete"in t){t.documentDelete;const i=t.documentDelete;i.document;const s=Nf(e,i.document),r=i.readTime?kn(i.readTime):J.min(),a=Te.newNoDocument(s,r),l=i.removedTargetIds||[];n=new Iu([],l,a.key,a)}else if("documentRemove"in t){t.documentRemove;const i=t.documentRemove;i.document;const s=Nf(e,i.document),r=i.removedTargetIds||[];n=new Iu([],r,s,null)}else{if(!("filter"in t))return K(11601,{Vt:t});{t.filter;const i=t.filter;i.targetId;const{count:s=0,unchangedNames:r}=i,a=new EM(s,r),l=i.targetId;n=new vS(l,a)}}return n}function MM(e,t){let n;if(t instanceof gl)n={update:U0(e,t.key,t.value)};else if(t instanceof oh)n={delete:Jd(e,t.key)};else if(t instanceof _s)n={update:U0(e,t.key,t.data),updateMask:qM(t.fieldMask)};else{if(!(t instanceof _M))return K(16599,{dt:t.type});n={verify:Jd(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(i=>function(r,a){const l=a.transform;if(l instanceof vc)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Xo)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof $o)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Tc)return{fieldPath:a.field.canonicalString(),increment:l.Ae};throw K(20930,{transform:a.transform})}(0,i))),t.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:xM(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:K(27497)}(e,t.precondition)),n}function VM(e,t){return e&&e.length>0?(gt(t!==void 0,14353),e.map(n=>function(s,r){let a=s.updateTime?kn(s.updateTime):kn(r);return a.isEqual(J.min())&&(a=kn(r)),new pM(a,s.transformResults||[])}(n,t))):[]}function kM(e,t){return{documents:[AS(e,t.path)]}}function LM(e,t){const n={structuredQuery:{}},i=t.path;let s;t.collectionGroup!==null?(s=i,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=i.popLast(),n.structuredQuery.from=[{collectionId:i.lastSegment()}]),n.parent=AS(e,s);const r=function(h){if(h.length!==0)return IS(vn.create(h,"and"))}(t.filters);r&&(n.structuredQuery.where=r);const a=function(h){if(h.length!==0)return h.map(d=>function(p){return{field:_r(p.field),direction:jM(p.dir)}}(d))}(t.orderBy);a&&(n.structuredQuery.orderBy=a);const l=Xd(e,t.limit);return l!==null&&(n.structuredQuery.limit=l),t.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(t.endAt)),{ft:n,parent:s}}function UM(e){let t=DM(e.parent);const n=e.structuredQuery,i=n.from?n.from.length:0;let s=null;if(i>0){gt(i===1,65062);const d=n.from[0];d.allDescendants?s=d.collectionId:t=t.child(d.collectionId)}let r=[];n.where&&(r=function(m){const p=wS(m);return p instanceof vn&&eS(p)?p.getFilters():[p]}(n.where));let a=[];n.orderBy&&(a=function(m){return m.map(p=>function(C){return new _c(vr(C.field),function(U){switch(U){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(p))}(n.orderBy));let l=null;n.limit&&(l=function(m){let p;return p=typeof m=="object"?m.value:m,eh(p)?null:p}(n.limit));let u=null;n.startAt&&(u=function(m){const p=!!m.before,v=m.values||[];return new yc(v,p)}(n.startAt));let h=null;return n.endAt&&(h=function(m){const p=!m.before,v=m.values||[];return new yc(v,p)}(n.endAt)),eM(t,s,a,r,l,"F",u,h)}function PM(e,t){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K(28987,{purpose:s})}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function wS(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const i=vr(n.unaryFilter.field);return Yt.create(i,"==",{doubleValue:NaN});case"IS_NULL":const s=vr(n.unaryFilter.field);return Yt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=vr(n.unaryFilter.field);return Yt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=vr(n.unaryFilter.field);return Yt.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return K(61313);default:return K(60726)}}(e):e.fieldFilter!==void 0?function(n){return Yt.create(vr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return K(58110);default:return K(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return vn.create(n.compositeFilter.filters.map(i=>wS(i)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return K(1026)}}(n.compositeFilter.op))}(e):K(30097,{filter:e})}function jM(e){return IM[e]}function zM(e){return RM[e]}function BM(e){return CM[e]}function _r(e){return{fieldPath:e.canonicalString()}}function vr(e){return me.fromServerFormat(e.fieldPath)}function IS(e){return e instanceof Yt?function(n){if(n.op==="=="){if(S0(n.value))return{unaryFilter:{field:_r(n.field),op:"IS_NAN"}};if(A0(n.value))return{unaryFilter:{field:_r(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(S0(n.value))return{unaryFilter:{field:_r(n.field),op:"IS_NOT_NAN"}};if(A0(n.value))return{unaryFilter:{field:_r(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:_r(n.field),op:zM(n.op),value:n.value}}}(e):e instanceof vn?function(n){const i=n.getFilters().map(s=>IS(s));return i.length===1?i[0]:{compositeFilter:{op:BM(n.op),filters:i}}}(e):K(54877,{filter:e})}function qM(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function RS(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}function CS(e){return!!e&&typeof e._toProto=="function"&&e._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(t,n,i,s,r=J.min(),a=J.min(),l=ye.EMPTY_BYTE_STRING,u=null){this.target=t,this.targetId=n,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(t){return new zi(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new zi(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new zi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new zi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HM{constructor(t){this.yt=t}}function FM(e){const t=UM({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Yd(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GM{constructor(){this.bn=new KM}addToCollectionParentIndex(t,n){return this.bn.add(n),L.resolve()}getCollectionParents(t,n){return L.resolve(this.bn.getEntries(n))}addFieldIndex(t,n){return L.resolve()}deleteFieldIndex(t,n){return L.resolve()}deleteAllFieldIndexes(t){return L.resolve()}createTargetIndexes(t,n){return L.resolve()}getDocumentsMatchingTarget(t,n){return L.resolve(null)}getIndexType(t,n){return L.resolve(0)}getFieldIndexes(t,n){return L.resolve([])}getNextCollectionGroupToUpdate(t){return L.resolve(null)}getMinOffset(t,n){return L.resolve(us.min())}getMinOffsetFromCollectionGroup(t,n){return L.resolve(us.min())}updateCollectionGroup(t,n,i){return L.resolve()}updateIndexEntries(t,n){return L.resolve()}}class KM{constructor(){this.index={}}add(t){const n=t.lastSegment(),i=t.popLast(),s=this.index[n]||new ne(wt.comparator),r=!s.has(i);return this.index[n]=s.add(i),r}has(t){const n=t.lastSegment(),i=t.popLast(),s=this.index[n];return s&&s.has(i)}getEntries(t){return(this.index[t]||new ne(wt.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P0={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},NS=41943040;class Ve{static withCacheSize(t){return new Ve(t,Ve.DEFAULT_COLLECTION_PERCENTILE,Ve.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,n,i){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ve.DEFAULT_COLLECTION_PERCENTILE=10,Ve.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ve.DEFAULT=new Ve(NS,Ve.DEFAULT_COLLECTION_PERCENTILE,Ve.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ve.DISABLED=new Ve(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(t){this.sr=t}next(){return this.sr+=2,this.sr}static _r(){return new oa(0)}static ar(){return new oa(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j0="LruGarbageCollector",QM=1048576;function z0([e,t],[n,i]){const s=lt(e,n);return s===0?lt(t,i):s}class YM{constructor(t){this.Pr=t,this.buffer=new ne(z0),this.Tr=0}Er(){return++this.Tr}Ir(t){const n=[t,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const i=this.buffer.last();z0(n,i)<0&&(this.buffer=this.buffer.delete(i).add(n))}}get maxValue(){return this.buffer.last()[0]}}class XM{constructor(t,n,i){this.garbageCollector=t,this.asyncQueue=n,this.localStore=i,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(t){H(j0,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Aa(n)?H(j0,"Ignoring IndexedDB error during garbage collection: ",n):await ba(n)}await this.Ar(3e5)})}}class $M{constructor(t,n){this.Vr=t,this.params=n}calculateTargetCount(t,n){return this.Vr.dr(t).next(i=>Math.floor(n/100*i))}nthSequenceNumber(t,n){if(n===0)return L.resolve(th.ce);const i=new YM(n);return this.Vr.forEachTarget(t,s=>i.Ir(s.sequenceNumber)).next(()=>this.Vr.mr(t,s=>i.Ir(s))).next(()=>i.maxValue)}removeTargets(t,n,i){return this.Vr.removeTargets(t,n,i)}removeOrphanedDocuments(t,n){return this.Vr.removeOrphanedDocuments(t,n)}collect(t,n){return this.params.cacheSizeCollectionThreshold===-1?(H("LruGarbageCollector","Garbage collection skipped; disabled"),L.resolve(P0)):this.getCacheSize(t).next(i=>i<this.params.cacheSizeCollectionThreshold?(H("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),P0):this.gr(t,n))}getCacheSize(t){return this.Vr.getCacheSize(t)}gr(t,n){let i,s,r,a,l,u,h;const d=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(H("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),s=this.params.maximumSequenceNumbersToCollect):s=m,a=Date.now(),this.nthSequenceNumber(t,s))).next(m=>(i=m,l=Date.now(),this.removeTargets(t,i,n))).next(m=>(r=m,u=Date.now(),this.removeOrphanedDocuments(t,i))).next(m=>(h=Date.now(),gr()<=ot.DEBUG&&H("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-d}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${r} targets in `+(u-l)+`ms
	Removed ${m} documents in `+(h-u)+`ms
Total Duration: ${h-d}ms`),L.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:r,documentsRemoved:m})))}}function JM(e,t){return new $M(e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZM{constructor(){this.changes=new rr(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,Te.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?L.resolve(i):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WM{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t4{constructor(t,n,i,s){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=i,this.indexManager=s}getDocument(t,n){let i=null;return this.documentOverlayCache.getOverlay(t,n).next(s=>(i=s,this.remoteDocumentCache.getEntry(t,n))).next(s=>(i!==null&&Ro(i.mutation,s,Fe.empty(),xt.now()),s))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(i=>this.getLocalViewOfDocuments(t,i,ut()).next(()=>i))}getLocalViewOfDocuments(t,n,i=ut()){const s=Ms();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,i).next(r=>{let a=ro();return r.forEach((l,u)=>{a=a.insert(l,u.overlayedDocument)}),a}))}getOverlayedDocuments(t,n){const i=Ms();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,ut()))}populateOverlays(t,n,i){const s=[];return i.forEach(r=>{n.has(r)||s.push(r)}),this.documentOverlayCache.getOverlays(t,s).next(r=>{r.forEach((a,l)=>{n.set(a,l)})})}computeViews(t,n,i,s){let r=di();const a=Io(),l=function(){return Io()}();return n.forEach((u,h)=>{const d=i.get(h.key);s.has(h.key)&&(d===void 0||d.mutation instanceof _s)?r=r.insert(h.key,h):d!==void 0?(a.set(h.key,d.mutation.getFieldMask()),Ro(d.mutation,h,d.mutation.getFieldMask(),xt.now())):a.set(h.key,Fe.empty())}),this.recalculateAndSaveOverlays(t,r).next(u=>(u.forEach((h,d)=>a.set(h,d)),n.forEach((h,d)=>l.set(h,new WM(d,a.get(h)??null))),l))}recalculateAndSaveOverlays(t,n){const i=Io();let s=new Vt((a,l)=>a-l),r=ut();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(a=>{for(const l of a)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let d=i.get(u)||Fe.empty();d=l.applyToLocalView(h,d),i.set(u,d);const m=(s.get(l.batchId)||ut()).add(u);s=s.insert(l.batchId,m)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,d=u.value,m=cS();d.forEach(p=>{if(!r.has(p)){const v=gS(n.get(p),i.get(p));v!==null&&m.set(p,v),r=r.add(p)}}),a.push(this.documentOverlayCache.saveOverlays(t,h,m))}return L.waitFor(a)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(i=>this.recalculateAndSaveOverlays(t,i))}getDocumentsMatchingQuery(t,n,i,s){return nM(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):rS(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,i,s):this.getDocumentsMatchingCollectionQuery(t,n,i,s)}getNextDocuments(t,n,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,i,s).next(r=>{const a=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,i.largestBatchId,s-r.size):L.resolve(Ms());let l=Go,u=r;return a.next(h=>L.forEach(h,(d,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),r.get(d)?L.resolve():this.remoteDocumentCache.getEntry(t,d).next(p=>{u=u.insert(d,p)}))).next(()=>this.populateOverlays(t,h,r)).next(()=>this.computeViews(t,u,h,ut())).next(d=>({batchId:l,changes:uS(d)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new G(n)).next(i=>{let s=ro();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}getDocumentsMatchingCollectionGroupQuery(t,n,i,s){const r=n.collectionGroup;let a=ro();return this.indexManager.getCollectionParents(t,r).next(l=>L.forEach(l,u=>{const h=function(m,p){return new pl(p,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(r));return this.getDocumentsMatchingCollectionQuery(t,h,i,s).next(d=>{d.forEach((m,p)=>{a=a.insert(m,p)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,n,i,s){let r;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,i.largestBatchId).next(a=>(r=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,i,r,s))).next(a=>{r.forEach((u,h)=>{const d=h.getKey();a.get(d)===null&&(a=a.insert(d,Te.newInvalidDocument(d)))});let l=ro();return a.forEach((u,h)=>{const d=r.get(u);d!==void 0&&Ro(d.mutation,h,Fe.empty(),xt.now()),sh(n,h)&&(l=l.insert(u,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e4{constructor(t){this.serializer=t,this.Nr=new Map,this.Br=new Map}getBundleMetadata(t,n){return L.resolve(this.Nr.get(n))}saveBundleMetadata(t,n){return this.Nr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:kn(s.createTime)}}(n)),L.resolve()}getNamedQuery(t,n){return L.resolve(this.Br.get(n))}saveNamedQuery(t,n){return this.Br.set(n.name,function(s){return{name:s.name,query:FM(s.bundledQuery),readTime:kn(s.readTime)}}(n)),L.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n4{constructor(){this.overlays=new Vt(G.comparator),this.Lr=new Map}getOverlay(t,n){return L.resolve(this.overlays.get(n))}getOverlays(t,n){const i=Ms();return L.forEach(n,s=>this.getOverlay(t,s).next(r=>{r!==null&&i.set(s,r)})).next(()=>i)}saveOverlays(t,n,i){return i.forEach((s,r)=>{this.St(t,n,r)}),L.resolve()}removeOverlaysForBatchId(t,n,i){const s=this.Lr.get(i);return s!==void 0&&(s.forEach(r=>this.overlays=this.overlays.remove(r)),this.Lr.delete(i)),L.resolve()}getOverlaysForCollection(t,n,i){const s=Ms(),r=n.length+1,a=new G(n.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===r&&u.largestBatchId>i&&s.set(u.getKey(),u)}return L.resolve(s)}getOverlaysForCollectionGroup(t,n,i,s){let r=new Vt((h,d)=>h-d);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>i){let d=r.get(h.largestBatchId);d===null&&(d=Ms(),r=r.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const l=Ms(),u=r.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,d)=>l.set(h,d)),!(l.size()>=s)););return L.resolve(l)}St(t,n,i){const s=this.overlays.get(i.key);if(s!==null){const a=this.Lr.get(s.largestBatchId).delete(i.key);this.Lr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(i.key,new TM(n,i));let r=this.Lr.get(n);r===void 0&&(r=ut(),this.Lr.set(n,r)),this.Lr.set(n,r.add(i.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i4{constructor(){this.sessionToken=ye.EMPTY_BYTE_STRING}getSessionToken(t){return L.resolve(this.sessionToken)}setSessionToken(t,n){return this.sessionToken=n,L.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Op{constructor(){this.kr=new ne(re.qr),this.Kr=new ne(re.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(t,n){const i=new re(t,n);this.kr=this.kr.add(i),this.Kr=this.Kr.add(i)}$r(t,n){t.forEach(i=>this.addReference(i,n))}removeReference(t,n){this.Wr(new re(t,n))}Qr(t,n){t.forEach(i=>this.removeReference(i,n))}Gr(t){const n=new G(new wt([])),i=new re(n,t),s=new re(n,t+1),r=[];return this.Kr.forEachInRange([i,s],a=>{this.Wr(a),r.push(a.key)}),r}zr(){this.kr.forEach(t=>this.Wr(t))}Wr(t){this.kr=this.kr.delete(t),this.Kr=this.Kr.delete(t)}jr(t){const n=new G(new wt([])),i=new re(n,t),s=new re(n,t+1);let r=ut();return this.Kr.forEachInRange([i,s],a=>{r=r.add(a.key)}),r}containsKey(t){const n=new re(t,0),i=this.kr.firstAfterOrEqual(n);return i!==null&&t.isEqual(i.key)}}class re{constructor(t,n){this.key=t,this.Jr=n}static qr(t,n){return G.comparator(t.key,n.key)||lt(t.Jr,n.Jr)}static Ur(t,n){return lt(t.Jr,n.Jr)||G.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s4{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Hr=new ne(re.qr)}checkEmpty(t){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,i,s){const r=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new vM(r,n,i,s);this.mutationQueue.push(a);for(const l of s)this.Hr=this.Hr.add(new re(l.key,r)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return L.resolve(a)}lookupMutationBatch(t,n){return L.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(t,n){const i=n+1,s=this.Xr(i),r=s<0?0:s;return L.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?bp:this.Yn-1)}getAllMutationBatches(t){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const i=new re(n,0),s=new re(n,Number.POSITIVE_INFINITY),r=[];return this.Hr.forEachInRange([i,s],a=>{const l=this.Zr(a.Jr);r.push(l)}),L.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,n){let i=new ne(lt);return n.forEach(s=>{const r=new re(s,0),a=new re(s,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([r,a],l=>{i=i.add(l.Jr)})}),L.resolve(this.Yr(i))}getAllMutationBatchesAffectingQuery(t,n){const i=n.path,s=i.length+1;let r=i;G.isDocumentKey(r)||(r=r.child(""));const a=new re(new G(r),0);let l=new ne(lt);return this.Hr.forEachWhile(u=>{const h=u.key.path;return!!i.isPrefixOf(h)&&(h.length===s&&(l=l.add(u.Jr)),!0)},a),L.resolve(this.Yr(l))}Yr(t){const n=[];return t.forEach(i=>{const s=this.Zr(i);s!==null&&n.push(s)}),n}removeMutationBatch(t,n){gt(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Hr;return L.forEach(n.mutations,s=>{const r=new re(s.key,n.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.Hr=i})}nr(t){}containsKey(t,n){const i=new re(n,0),s=this.Hr.firstAfterOrEqual(i);return L.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,L.resolve()}ei(t,n){return this.Xr(t)}Xr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Zr(t){const n=this.Xr(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r4{constructor(t){this.ti=t,this.docs=function(){return new Vt(G.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const i=n.key,s=this.docs.get(i),r=s?s.size:0,a=this.ti(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:a}),this.size+=a-r,this.indexManager.addToCollectionParentIndex(t,i.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const i=this.docs.get(n);return L.resolve(i?i.document.mutableCopy():Te.newInvalidDocument(n))}getEntries(t,n){let i=di();return n.forEach(s=>{const r=this.docs.get(s);i=i.insert(s,r?r.document.mutableCopy():Te.newInvalidDocument(s))}),L.resolve(i)}getDocumentsMatchingQuery(t,n,i,s){let r=di();const a=n.path,l=new G(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:d}}=u.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||OO(DO(d),i)<=0||(s.has(d.key)||sh(n,d))&&(r=r.insert(d.key,d.mutableCopy()))}return L.resolve(r)}getAllFromCollectionGroup(t,n,i,s){K(9500)}ni(t,n){return L.forEach(this.docs,i=>n(i))}newChangeBuffer(t){return new a4(this)}getSize(t){return L.resolve(this.size)}}class a4 extends ZM{constructor(t){super(),this.Mr=t}applyChanges(t){const n=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?n.push(this.Mr.addEntry(t,s)):this.Mr.removeEntry(i)}),L.waitFor(n)}getFromCache(t,n){return this.Mr.getEntry(t,n)}getAllFromCache(t,n){return this.Mr.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o4{constructor(t){this.persistence=t,this.ri=new rr(n=>wp(n),Ip),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.ii=0,this.si=new Op,this.targetCount=0,this.oi=oa._r()}forEachTarget(t,n){return this.ri.forEach((i,s)=>n(s)),L.resolve()}getLastRemoteSnapshotVersion(t){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return L.resolve(this.ii)}allocateTargetId(t){return this.highestTargetId=this.oi.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(t,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.ii&&(this.ii=n),L.resolve()}lr(t){this.ri.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.oi=new oa(n),this.highestTargetId=n),t.sequenceNumber>this.ii&&(this.ii=t.sequenceNumber)}addTargetData(t,n){return this.lr(n),this.targetCount+=1,L.resolve()}updateTargetData(t,n){return this.lr(n),L.resolve()}removeTargetData(t,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(t,n,i){let s=0;const r=[];return this.ri.forEach((a,l)=>{l.sequenceNumber<=n&&i.get(l.targetId)===null&&(this.ri.delete(a),r.push(this.removeMatchingKeysForTargetId(t,l.targetId)),s++)}),L.waitFor(r).next(()=>s)}getTargetCount(t){return L.resolve(this.targetCount)}getTargetData(t,n){const i=this.ri.get(n)||null;return L.resolve(i)}addMatchingKeys(t,n,i){return this.si.$r(n,i),L.resolve()}removeMatchingKeys(t,n,i){this.si.Qr(n,i);const s=this.persistence.referenceDelegate,r=[];return s&&n.forEach(a=>{r.push(s.markPotentiallyOrphaned(t,a))}),L.waitFor(r)}removeMatchingKeysForTargetId(t,n){return this.si.Gr(n),L.resolve()}getMatchingKeysForTargetId(t,n){const i=this.si.jr(n);return L.resolve(i)}containsKey(t,n){return L.resolve(this.si.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xS{constructor(t,n){this._i={},this.overlays={},this.ai=new th(0),this.ui=!1,this.ui=!0,this.ci=new i4,this.referenceDelegate=t(this),this.li=new o4(this),this.indexManager=new GM,this.remoteDocumentCache=function(s){return new r4(s)}(i=>this.referenceDelegate.hi(i)),this.serializer=new HM(n),this.Pi=new e4(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new n4,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let i=this._i[t.toKey()];return i||(i=new s4(n,this.referenceDelegate),this._i[t.toKey()]=i),i}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(t,n,i){H("MemoryPersistence","Starting transaction:",t);const s=new l4(this.ai.next());return this.referenceDelegate.Ti(),i(s).next(r=>this.referenceDelegate.Ei(s).next(()=>r)).toPromise().then(r=>(s.raiseOnCommittedEvent(),r))}Ii(t,n){return L.or(Object.values(this._i).map(i=>()=>i.containsKey(t,n)))}}class l4 extends VO{constructor(t){super(),this.currentSequenceNumber=t}}class Mp{constructor(t){this.persistence=t,this.Ri=new Op,this.Ai=null}static Vi(t){return new Mp(t)}get di(){if(this.Ai)return this.Ai;throw K(60996)}addReference(t,n,i){return this.Ri.addReference(i,n),this.di.delete(i.toString()),L.resolve()}removeReference(t,n,i){return this.Ri.removeReference(i,n),this.di.add(i.toString()),L.resolve()}markPotentiallyOrphaned(t,n){return this.di.add(n.toString()),L.resolve()}removeTarget(t,n){this.Ri.Gr(n.targetId).forEach(s=>this.di.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(t,n.targetId).next(s=>{s.forEach(r=>this.di.add(r.toString()))}).next(()=>i.removeTargetData(t,n))}Ti(){this.Ai=new Set}Ei(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.di,i=>{const s=G.fromPath(i);return this.mi(t,s).next(r=>{r||n.removeEntry(s,J.min())})}).next(()=>(this.Ai=null,n.apply(t)))}updateLimboDocument(t,n){return this.mi(t,n).next(i=>{i?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(t){return 0}mi(t,n){return L.or([()=>L.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ii(t,n)])}}class bc{constructor(t,n){this.persistence=t,this.fi=new rr(i=>UO(i.path),(i,s)=>i.isEqual(s)),this.garbageCollector=JM(this,n)}static Vi(t,n){return new bc(t,n)}Ti(){}Ei(t){return L.resolve()}forEachTarget(t,n){return this.persistence.getTargetCache().forEachTarget(t,n)}dr(t){const n=this.pr(t);return this.persistence.getTargetCache().getTargetCount(t).next(i=>n.next(s=>i+s))}pr(t){let n=0;return this.mr(t,i=>{n++}).next(()=>n)}mr(t,n){return L.forEach(this.fi,(i,s)=>this.wr(t,i,s).next(r=>r?L.resolve():n(s)))}removeTargets(t,n,i){return this.persistence.getTargetCache().removeTargets(t,n,i)}removeOrphanedDocuments(t,n){let i=0;const s=this.persistence.getRemoteDocumentCache(),r=s.newChangeBuffer();return s.ni(t,a=>this.wr(t,a,n).next(l=>{l||(i++,r.removeEntry(a,J.min()))})).next(()=>r.apply(t)).next(()=>i)}markPotentiallyOrphaned(t,n){return this.fi.set(n,t.currentSequenceNumber),L.resolve()}removeTarget(t,n){const i=n.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,i)}addReference(t,n,i){return this.fi.set(i,t.currentSequenceNumber),L.resolve()}removeReference(t,n,i){return this.fi.set(i,t.currentSequenceNumber),L.resolve()}updateLimboDocument(t,n){return this.fi.set(n,t.currentSequenceNumber),L.resolve()}hi(t){let n=t.key.toString().length;return t.isFoundDocument()&&(n+=Au(t.data.value)),n}wr(t,n,i){return L.or([()=>this.persistence.Ii(t,n),()=>this.persistence.getTargetCache().containsKey(t,n),()=>{const s=this.fi.get(n);return L.resolve(s!==void 0&&s>i)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vp{constructor(t,n,i,s){this.targetId=t,this.fromCache=n,this.Ts=i,this.Es=s}static Is(t,n){let i=ut(),s=ut();for(const r of n.docChanges)switch(r.type){case 0:i=i.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new Vp(t,n.fromCache,i,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u4{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c4{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return N2()?8:kO(Ee())>0?6:4}()}initialize(t,n){this.fs=t,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(t,n,i,s){const r={result:null};return this.gs(t,n).next(a=>{r.result=a}).next(()=>{if(!r.result)return this.ps(t,n,s,i).next(a=>{r.result=a})}).next(()=>{if(r.result)return;const a=new u4;return this.ys(t,n,a).next(l=>{if(r.result=l,this.As)return this.ws(t,n,a,l.size)})}).next(()=>r.result)}ws(t,n,i,s){return i.documentReadCount<this.Vs?(gr()<=ot.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",yr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),L.resolve()):(gr()<=ot.DEBUG&&H("QueryEngine","Query:",yr(n),"scans",i.documentReadCount,"local documents and returns",s,"documents as results."),i.documentReadCount>this.ds*s?(gr()<=ot.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",yr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Vn(n))):L.resolve())}gs(t,n){if(C0(n))return L.resolve(null);let i=Vn(n);return this.indexManager.getIndexType(t,i).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Yd(n,null,"F"),i=Vn(n)),this.indexManager.getDocumentsMatchingTarget(t,i).next(r=>{const a=ut(...r);return this.fs.getDocuments(t,a).next(l=>this.indexManager.getMinOffset(t,i).next(u=>{const h=this.Ss(n,l);return this.bs(n,h,a,u.readTime)?this.gs(t,Yd(n,null,"F")):this.Ds(t,h,n,u)}))})))}ps(t,n,i,s){return C0(n)||s.isEqual(J.min())?L.resolve(null):this.fs.getDocuments(t,i).next(r=>{const a=this.Ss(n,r);return this.bs(n,a,i,s)?L.resolve(null):(gr()<=ot.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),yr(n)),this.Ds(t,a,n,xO(s,Go)).next(l=>l))})}Ss(t,n){let i=new ne(oS(t));return n.forEach((s,r)=>{sh(t,r)&&(i=i.add(r))}),i}bs(t,n,i,s){if(t.limit===null)return!1;if(i.size!==n.size)return!0;const r=t.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}ys(t,n,i){return gr()<=ot.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",yr(n)),this.fs.getDocumentsMatchingQuery(t,n,us.min(),i)}Ds(t,n,i,s){return this.fs.getDocumentsMatchingQuery(t,i,s).next(r=>(n.forEach(a=>{r=r.insert(a.key,a)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kp="LocalStore",h4=3e8;class f4{constructor(t,n,i,s){this.persistence=t,this.Cs=n,this.serializer=s,this.vs=new Vt(lt),this.Fs=new rr(r=>wp(r),Ip),this.Ms=new Map,this.xs=t.getRemoteDocumentCache(),this.li=t.getTargetCache(),this.Pi=t.getBundleCache(),this.Os(i)}Os(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new t4(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.vs))}}function d4(e,t,n,i){return new f4(e,t,n,i)}async function DS(e,t){const n=Z(e);return await n.persistence.runTransaction("Handle user change","readonly",i=>{let s;return n.mutationQueue.getAllMutationBatches(i).next(r=>(s=r,n.Os(t),n.mutationQueue.getAllMutationBatches(i))).next(r=>{const a=[],l=[];let u=ut();for(const h of s){a.push(h.batchId);for(const d of h.mutations)u=u.add(d.key)}for(const h of r){l.push(h.batchId);for(const d of h.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(i,u).next(h=>({Ns:h,removedBatchIds:a,addedBatchIds:l}))})})}function m4(e,t){const n=Z(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=t.batch.keys(),r=n.xs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,d){const m=h.batch,p=m.keys();let v=L.resolve();return p.forEach(C=>{v=v.next(()=>d.getEntry(u,C)).next(M=>{const U=h.docVersions.get(C);gt(U!==null,48541),M.version.compareTo(U)<0&&(m.applyToRemoteDocument(M,h),M.isValidDocument()&&(M.setReadTime(h.commitVersion),d.addEntry(M)))})}),v.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,i,t,r).next(()=>r.apply(i)).next(()=>n.mutationQueue.performConsistencyCheck(i)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(i,s,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(l){let u=ut();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(t))).next(()=>n.localDocuments.getDocuments(i,s))})}function OS(e){const t=Z(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.li.getLastRemoteSnapshotVersion(n))}function p4(e,t){const n=Z(e),i=t.snapshotVersion;let s=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const a=n.xs.newChangeBuffer({trackRemovals:!0});s=n.vs;const l=[];t.targetChanges.forEach((d,m)=>{const p=s.get(m);if(!p)return;l.push(n.li.removeMatchingKeys(r,d.removedDocuments,m).next(()=>n.li.addMatchingKeys(r,d.addedDocuments,m)));let v=p.withSequenceNumber(r.currentSequenceNumber);t.targetMismatches.get(m)!==null?v=v.withResumeToken(ye.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):d.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(d.resumeToken,i)),s=s.insert(m,v),function(M,U,S){return M.resumeToken.approximateByteSize()===0||U.snapshotVersion.toMicroseconds()-M.snapshotVersion.toMicroseconds()>=h4?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(p,v,d)&&l.push(n.li.updateTargetData(r,v))});let u=di(),h=ut();if(t.documentUpdates.forEach(d=>{t.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(r,d))}),l.push(g4(r,a,t.documentUpdates).next(d=>{u=d.Bs,h=d.Ls})),!i.isEqual(J.min())){const d=n.li.getLastRemoteSnapshotVersion(r).next(m=>n.li.setTargetsMetadata(r,r.currentSequenceNumber,i));l.push(d)}return L.waitFor(l).next(()=>a.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,u,h)).next(()=>u)}).then(r=>(n.vs=s,r))}function g4(e,t,n){let i=ut(),s=ut();return n.forEach(r=>i=i.add(r)),t.getEntries(e,i).next(r=>{let a=di();return n.forEach((l,u)=>{const h=r.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(J.min())?(t.removeEntry(l,u.readTime),a=a.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(t.addEntry(u),a=a.insert(l,u)):H(kp,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Bs:a,Ls:s}})}function y4(e,t){const n=Z(e);return n.persistence.runTransaction("Get next mutation batch","readonly",i=>(t===void 0&&(t=bp),n.mutationQueue.getNextMutationBatchAfterBatchId(i,t)))}function _4(e,t){const n=Z(e);return n.persistence.runTransaction("Allocate target","readwrite",i=>{let s;return n.li.getTargetData(i,t).next(r=>r?(s=r,L.resolve(s)):n.li.allocateTargetId(i).next(a=>(s=new zi(t,a,"TargetPurposeListen",i.currentSequenceNumber),n.li.addTargetData(i,s).next(()=>s))))}).then(i=>{const s=n.vs.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.vs=n.vs.insert(i.targetId,i),n.Fs.set(t,i.targetId)),i})}async function Wd(e,t,n){const i=Z(e),s=i.vs.get(t),r=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",r,a=>i.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!Aa(a))throw a;H(kp,`Failed to update sequence numbers for target ${t}: ${a}`)}i.vs=i.vs.remove(t),i.Fs.delete(s.target)}function B0(e,t,n){const i=Z(e);let s=J.min(),r=ut();return i.persistence.runTransaction("Execute query","readwrite",a=>function(u,h,d){const m=Z(u),p=m.Fs.get(d);return p!==void 0?L.resolve(m.vs.get(p)):m.li.getTargetData(h,d)}(i,a,Vn(t)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,i.li.getMatchingKeysForTargetId(a,l.targetId).next(u=>{r=u})}).next(()=>i.Cs.getDocumentsMatchingQuery(a,t,n?s:J.min(),n?r:ut())).next(l=>(v4(i,sM(t),l),{documents:l,ks:r})))}function v4(e,t,n){let i=e.Ms.get(t)||J.min();n.forEach((s,r)=>{r.readTime.compareTo(i)>0&&(i=r.readTime)}),e.Ms.set(t,i)}class q0{constructor(){this.activeTargetIds=cM()}Qs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ws(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class T4{constructor(){this.vo=new q0,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,i){}addLocalQueryTarget(t,n=!0){return n&&this.vo.Qs(t),this.Fo[t]||"not-current"}updateQueryState(t,n,i){this.Fo[t]=n}removeLocalQueryTarget(t){this.vo.Gs(t)}isLocalQueryTarget(t){return this.vo.activeTargetIds.has(t)}clearQueryState(t){delete this.Fo[t]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(t){return this.vo.activeTargetIds.has(t)}start(){return this.vo=new q0,Promise.resolve()}handleUserChange(t,n,i){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E4{Mo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H0="ConnectivityMonitor";class F0{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(t){this.Lo.push(t)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){H(H0,"Network connectivity changed: AVAILABLE");for(const t of this.Lo)t(0)}Bo(){H(H0,"Network connectivity changed: UNAVAILABLE");for(const t of this.Lo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eu=null;function tm(){return eu===null?eu=function(){return 268435456+Math.round(2147483648*Math.random())}():eu++,"0x"+eu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xf="RestConnection",b4={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class A4{get qo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ko=n+"://"+t.host,this.Uo=`projects/${i}/databases/${s}`,this.$o=this.databaseId.database===pc?`project_id=${i}`:`project_id=${i}&database_id=${s}`}Wo(t,n,i,s,r){const a=tm(),l=this.Qo(t,n.toUriEncodedString());H(xf,`Sending RPC '${t}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,s,r);const{host:h}=new URL(l),d=cl(h);return this.zo(t,l,u,i,d).then(m=>(H(xf,`Received RPC '${t}' ${a}: `,m),m),m=>{throw $s(xf,`RPC '${t}' ${a} failed with error: `,m,"url: ",l,"request:",i),m})}jo(t,n,i,s,r,a){return this.Wo(t,n,i,s,r)}Go(t,n,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ea}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,r)=>t[r]=s),i&&i.headers.forEach((s,r)=>t[r]=s)}Qo(t,n){const i=b4[t];let s=`${this.Ko}/v1/${n}:${i}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S4{constructor(t){this.Jo=t.Jo,this.Ho=t.Ho}Zo(t){this.Xo=t}Yo(t){this.e_=t}t_(t){this.n_=t}onMessage(t){this.r_=t}close(){this.Ho()}send(t){this.Jo(t)}i_(){this.Xo()}s_(){this.e_()}o_(t){this.n_(t)}__(t){this.r_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _e="WebChannelConnection",Ja=(e,t,n)=>{e.listen(t,i=>{try{n(i)}catch(s){setTimeout(()=>{throw s},0)}})};class Fr extends A4{constructor(t){super(t),this.a_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}static u_(){if(!Fr.c_){const t=UA();Ja(t,LA.STAT_EVENT,n=>{n.stat===Bd.PROXY?H(_e,"STAT_EVENT: detected buffering proxy"):n.stat===Bd.NOPROXY&&H(_e,"STAT_EVENT: detected no buffering proxy")}),Fr.c_=!0}}zo(t,n,i,s,r){const a=tm();return new Promise((l,u)=>{const h=new VA;h.setWithCredentials(!0),h.listenOnce(kA.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case bu.NO_ERROR:const m=h.getResponseJson();H(_e,`XHR for RPC '${t}' ${a} received:`,JSON.stringify(m)),l(m);break;case bu.TIMEOUT:H(_e,`RPC '${t}' ${a} timed out`),u(new q(k.DEADLINE_EXCEEDED,"Request time out"));break;case bu.HTTP_ERROR:const p=h.getStatus();if(H(_e,`RPC '${t}' ${a} failed with status:`,p,"response text:",h.getResponseText()),p>0){let v=h.getResponseJson();Array.isArray(v)&&(v=v[0]);const C=v==null?void 0:v.error;if(C&&C.status&&C.message){const M=function(S){const b=S.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf(b)>=0?b:k.UNKNOWN}(C.status);u(new q(M,C.message))}else u(new q(k.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new q(k.UNAVAILABLE,"Connection failed."));break;default:K(9055,{l_:t,streamId:a,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{H(_e,`RPC '${t}' ${a} completed.`)}});const d=JSON.stringify(s);H(_e,`RPC '${t}' ${a} sending request:`,s),h.send(n,"POST",d,i,15)})}T_(t,n,i){const s=tm(),r=[this.Ko,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,n,i),l.encodeInitMessageHeaders=!0;const h=r.join("");H(_e,`Creating RPC '${t}' stream ${s}: ${h}`,l);const d=a.createWebChannel(h,l);this.E_(d);let m=!1,p=!1;const v=new S4({Jo:C=>{p?H(_e,`Not sending because RPC '${t}' stream ${s} is closed:`,C):(m||(H(_e,`Opening RPC '${t}' stream ${s} transport.`),d.open(),m=!0),H(_e,`RPC '${t}' stream ${s} sending:`,C),d.send(C))},Ho:()=>d.close()});return Ja(d,so.EventType.OPEN,()=>{p||(H(_e,`RPC '${t}' stream ${s} transport opened.`),v.i_())}),Ja(d,so.EventType.CLOSE,()=>{p||(p=!0,H(_e,`RPC '${t}' stream ${s} transport closed`),v.o_(),this.I_(d))}),Ja(d,so.EventType.ERROR,C=>{p||(p=!0,$s(_e,`RPC '${t}' stream ${s} transport errored. Name:`,C.name,"Message:",C.message),v.o_(new q(k.UNAVAILABLE,"The operation could not be completed")))}),Ja(d,so.EventType.MESSAGE,C=>{var M;if(!p){const U=C.data[0];gt(!!U,16349);const S=U,b=(S==null?void 0:S.error)||((M=S[0])==null?void 0:M.error);if(b){H(_e,`RPC '${t}' stream ${s} received error:`,b);const R=b.status;let D=function(T){const _=Ft[T];if(_!==void 0)return _S(_)}(R),B=b.message;R==="NOT_FOUND"&&B.includes("database")&&B.includes("does not exist")&&B.includes(this.databaseId.database)&&$s(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),D===void 0&&(D=k.INTERNAL,B="Unknown error status: "+R+" with message "+b.message),p=!0,v.o_(new q(D,B)),d.close()}else H(_e,`RPC '${t}' stream ${s} received:`,U),v.__(U)}}),Fr.u_(),setTimeout(()=>{v.s_()},0),v}terminate(){this.a_.forEach(t=>t.close()),this.a_=[]}E_(t){this.a_.push(t)}I_(t){this.a_=this.a_.filter(n=>n===t)}Go(t,n,i){super.Go(t,n,i),this.databaseInfo.apiKey&&(t["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return PA()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w4(e){return new Fr(e)}function Df(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uh(e){return new NM(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Fr.c_=!1;class MS{constructor(t,n,i=1e3,s=1.5,r=6e4){this.Ci=t,this.timerId=n,this.R_=i,this.A_=s,this.V_=r,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(t){this.cancel();const n=Math.floor(this.d_+this.y_()),i=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-i);s>0&&H("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),t())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G0="PersistentStream";class VS{constructor(t,n,i,s,r,a,l,u){this.Ci=t,this.S_=i,this.b_=s,this.connection=r,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new MS(t,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(t){this.K_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,n){this.K_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():n&&n.code===k.RESOURCE_EXHAUSTED?(fi(n.toString()),fi("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.t_(n)}W_(){}auth(){this.state=1;const t=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.D_===n&&this.G_(i,s)},i=>{t(()=>{const s=new q(k.UNKNOWN,"Fetching auth token failed: "+i.message);return this.z_(s)})})}G_(t,n){const i=this.Q_(this.D_);this.stream=this.j_(t,n),this.stream.Zo(()=>{i(()=>this.listener.Zo())}),this.stream.Yo(()=>{i(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(s=>{i(()=>this.z_(s))}),this.stream.onMessage(s=>{i(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(t){return H(G0,`close with error: ${t}`),this.stream=null,this.close(4,t)}Q_(t){return n=>{this.Ci.enqueueAndForget(()=>this.D_===t?n():(H(G0,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class I4 extends VS{constructor(t,n,i,s,r,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,i,s,a),this.serializer=r}j_(t,n){return this.connection.T_("Listen",t,n)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const n=OM(this.serializer,t),i=function(r){if(!("targetChange"in r))return J.min();const a=r.targetChange;return a.targetIds&&a.targetIds.length?J.min():a.readTime?kn(a.readTime):J.min()}(t);return this.listener.H_(n,i)}Z_(t){const n={};n.database=Zd(this.serializer),n.addTarget=function(r,a){let l;const u=a.target;if(l=Kd(u)?{documents:kM(r,u)}:{query:LM(r,u).ft},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=ES(r,a.resumeToken);const h=Xd(r,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(J.min())>0){l.readTime=Ec(r,a.snapshotVersion.toTimestamp());const h=Xd(r,a.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,t);const i=PM(this.serializer,t);i&&(n.labels=i),this.q_(n)}X_(t){const n={};n.database=Zd(this.serializer),n.removeTarget=t,this.q_(n)}}class R4 extends VS{constructor(t,n,i,s,r,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,i,s,a),this.serializer=r}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(t,n){return this.connection.T_("Write",t,n)}J_(t){return gt(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,gt(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){gt(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const n=VM(t.writeResults,t.commitTime),i=kn(t.commitTime);return this.listener.na(i,n)}ra(){const t={};t.database=Zd(this.serializer),this.q_(t)}ea(t){const n={streamToken:this.lastStreamToken,writes:t.map(i=>MM(this.serializer,i))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C4{}class N4 extends C4{constructor(t,n,i,s){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=i,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new q(k.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(t,n,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,a])=>this.connection.Wo(t,$d(n,i),s,r,a)).catch(r=>{throw r.name==="FirebaseError"?(r.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new q(k.UNKNOWN,r.toString())})}jo(t,n,i,s,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.jo(t,$d(n,i),s,a,l,r)).catch(a=>{throw a.name==="FirebaseError"?(a.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new q(k.UNKNOWN,a.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function x4(e,t,n,i){return new N4(e,t,n,i)}class D4{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(fi(n),this.aa=!1):H("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Js="RemoteStore";class O4{constructor(t,n,i,s,r){this.localStore=t,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=r,this.Aa.Mo(a=>{i.enqueueAndForget(async()=>{ar(this)&&(H(Js,"Restarting streams for network reachability change."),await async function(u){const h=Z(u);h.Ia.add(4),await _l(h),h.Va.set("Unknown"),h.Ia.delete(4),await ch(h)}(this))})}),this.Va=new D4(i,s)}}async function ch(e){if(ar(e))for(const t of e.Ra)await t(!0)}async function _l(e){for(const t of e.Ra)await t(!1)}function kS(e,t){const n=Z(e);n.Ea.has(t.targetId)||(n.Ea.set(t.targetId,t),jp(n)?Pp(n):Sa(n).O_()&&Up(n,t))}function Lp(e,t){const n=Z(e),i=Sa(n);n.Ea.delete(t),i.O_()&&LS(n,t),n.Ea.size===0&&(i.O_()?i.L_():ar(n)&&n.Va.set("Unknown"))}function Up(e,t){if(e.da.$e(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(J.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Sa(e).Z_(t)}function LS(e,t){e.da.$e(t),Sa(e).X_(t)}function Pp(e){e.da=new wM({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),At:t=>e.Ea.get(t)||null,ht:()=>e.datastore.serializer.databaseId}),Sa(e).start(),e.Va.ua()}function jp(e){return ar(e)&&!Sa(e).x_()&&e.Ea.size>0}function ar(e){return Z(e).Ia.size===0}function US(e){e.da=void 0}async function M4(e){e.Va.set("Online")}async function V4(e){e.Ea.forEach((t,n)=>{Up(e,t)})}async function k4(e,t){US(e),jp(e)?(e.Va.ha(t),Pp(e)):e.Va.set("Unknown")}async function L4(e,t,n){if(e.Va.set("Online"),t instanceof TS&&t.state===2&&t.cause)try{await async function(s,r){const a=r.cause;for(const l of r.targetIds)s.Ea.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.Ea.delete(l),s.da.removeTarget(l))}(e,t)}catch(i){H(Js,"Failed to remove targets %s: %s ",t.targetIds.join(","),i),await Ac(e,i)}else if(t instanceof Iu?e.da.Xe(t):t instanceof vS?e.da.st(t):e.da.tt(t),!n.isEqual(J.min()))try{const i=await OS(e.localStore);n.compareTo(i)>=0&&await function(r,a){const l=r.da.Tt(a);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const d=r.Ea.get(h);d&&r.Ea.set(h,d.withResumeToken(u.resumeToken,a))}}),l.targetMismatches.forEach((u,h)=>{const d=r.Ea.get(u);if(!d)return;r.Ea.set(u,d.withResumeToken(ye.EMPTY_BYTE_STRING,d.snapshotVersion)),LS(r,u);const m=new zi(d.target,u,h,d.sequenceNumber);Up(r,m)}),r.remoteSyncer.applyRemoteEvent(l)}(e,n)}catch(i){H(Js,"Failed to raise snapshot:",i),await Ac(e,i)}}async function Ac(e,t,n){if(!Aa(t))throw t;e.Ia.add(1),await _l(e),e.Va.set("Offline"),n||(n=()=>OS(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{H(Js,"Retrying IndexedDB access"),await n(),e.Ia.delete(1),await ch(e)})}function PS(e,t){return t().catch(n=>Ac(e,n,t))}async function hh(e){const t=Z(e),n=ds(t);let i=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:bp;for(;U4(t);)try{const s=await y4(t.localStore,i);if(s===null){t.Ta.length===0&&n.L_();break}i=s.batchId,P4(t,s)}catch(s){await Ac(t,s)}jS(t)&&zS(t)}function U4(e){return ar(e)&&e.Ta.length<10}function P4(e,t){e.Ta.push(t);const n=ds(e);n.O_()&&n.Y_&&n.ea(t.mutations)}function jS(e){return ar(e)&&!ds(e).x_()&&e.Ta.length>0}function zS(e){ds(e).start()}async function j4(e){ds(e).ra()}async function z4(e){const t=ds(e);for(const n of e.Ta)t.ea(n.mutations)}async function B4(e,t,n){const i=e.Ta.shift(),s=Np.from(i,t,n);await PS(e,()=>e.remoteSyncer.applySuccessfulWrite(s)),await hh(e)}async function q4(e,t){t&&ds(e).Y_&&await async function(i,s){if(function(a){return bM(a)&&a!==k.ABORTED}(s.code)){const r=i.Ta.shift();ds(i).B_(),await PS(i,()=>i.remoteSyncer.rejectFailedWrite(r.batchId,s)),await hh(i)}}(e,t),jS(e)&&zS(e)}async function K0(e,t){const n=Z(e);n.asyncQueue.verifyOperationInProgress(),H(Js,"RemoteStore received new credentials");const i=ar(n);n.Ia.add(3),await _l(n),i&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Ia.delete(3),await ch(n)}async function H4(e,t){const n=Z(e);t?(n.Ia.delete(2),await ch(n)):t||(n.Ia.add(2),await _l(n),n.Va.set("Unknown"))}function Sa(e){return e.ma||(e.ma=function(n,i,s){const r=Z(n);return r.sa(),new I4(i,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(e.datastore,e.asyncQueue,{Zo:M4.bind(null,e),Yo:V4.bind(null,e),t_:k4.bind(null,e),H_:L4.bind(null,e)}),e.Ra.push(async t=>{t?(e.ma.B_(),jp(e)?Pp(e):e.Va.set("Unknown")):(await e.ma.stop(),US(e))})),e.ma}function ds(e){return e.fa||(e.fa=function(n,i,s){const r=Z(n);return r.sa(),new R4(i,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(e.datastore,e.asyncQueue,{Zo:()=>Promise.resolve(),Yo:j4.bind(null,e),t_:q4.bind(null,e),ta:z4.bind(null,e),na:B4.bind(null,e)}),e.Ra.push(async t=>{t?(e.fa.B_(),await hh(e)):(await e.fa.stop(),e.Ta.length>0&&(H(Js,`Stopping write stream with ${e.Ta.length} pending writes`),e.Ta=[]))})),e.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp{constructor(t,n,i,s,r){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new js,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,i,s,r){const a=Date.now()+i,l=new zp(t,n,a,s,r);return l.start(i),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(k.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Bp(e,t){if(fi("AsyncQueue",`${t}: ${e}`),Aa(e))return new q(k.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{static emptySet(t){return new Gr(t.comparator)}constructor(t){this.comparator=t?(n,i)=>t(n,i)||G.comparator(n.key,i.key):(n,i)=>G.comparator(n.key,i.key),this.keyedMap=ro(),this.sortedSet=new Vt(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,i)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Gr)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),i=t.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,r=i.getNext().key;if(!s.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const i=new Gr;return i.comparator=this.comparator,i.keyedMap=t,i.sortedSet=n,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q0{constructor(){this.ga=new Vt(G.comparator)}track(t){const n=t.doc.key,i=this.ga.get(n);i?t.type!==0&&i.type===3?this.ga=this.ga.insert(n,t):t.type===3&&i.type!==1?this.ga=this.ga.insert(n,{type:i.type,doc:t.doc}):t.type===2&&i.type===2?this.ga=this.ga.insert(n,{type:2,doc:t.doc}):t.type===2&&i.type===0?this.ga=this.ga.insert(n,{type:0,doc:t.doc}):t.type===1&&i.type===0?this.ga=this.ga.remove(n):t.type===1&&i.type===2?this.ga=this.ga.insert(n,{type:1,doc:i.doc}):t.type===0&&i.type===1?this.ga=this.ga.insert(n,{type:2,doc:t.doc}):K(63341,{Vt:t,pa:i}):this.ga=this.ga.insert(n,t)}ya(){const t=[];return this.ga.inorderTraversal((n,i)=>{t.push(i)}),t}}class la{constructor(t,n,i,s,r,a,l,u,h){this.query=t,this.docs=n,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=r,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(t,n,i,s,r){const a=[];return n.forEach(l=>{a.push({type:0,doc:l})}),new la(t,n,Gr.emptySet(n),a,i,s,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&ih(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,i=t.docChanges;if(n.length!==i.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==i[s].type||!n[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F4{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(t=>t.Da())}}class G4{constructor(){this.queries=Y0(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,i){const s=Z(n),r=s.queries;s.queries=Y0(),r.forEach((a,l)=>{for(const u of l.Sa)u.onError(i)})})(this,new q(k.ABORTED,"Firestore shutting down"))}}function Y0(){return new rr(e=>aS(e),ih)}async function K4(e,t){const n=Z(e);let i=3;const s=t.query;let r=n.queries.get(s);r?!r.ba()&&t.Da()&&(i=2):(r=new F4,i=t.Da()?0:1);try{switch(i){case 0:r.wa=await n.onListen(s,!0);break;case 1:r.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(a){const l=Bp(a,`Initialization of query '${yr(t.query)}' failed`);return void t.onError(l)}n.queries.set(s,r),r.Sa.push(t),t.va(n.onlineState),r.wa&&t.Fa(r.wa)&&qp(n)}async function Q4(e,t){const n=Z(e),i=t.query;let s=3;const r=n.queries.get(i);if(r){const a=r.Sa.indexOf(t);a>=0&&(r.Sa.splice(a,1),r.Sa.length===0?s=t.Da()?0:1:!r.ba()&&t.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(i),n.onUnlisten(i,!0);case 1:return n.queries.delete(i),n.onUnlisten(i,!1);case 2:return n.onLastRemoteStoreUnlisten(i);default:return}}function Y4(e,t){const n=Z(e);let i=!1;for(const s of t){const r=s.query,a=n.queries.get(r);if(a){for(const l of a.Sa)l.Fa(s)&&(i=!0);a.wa=s}}i&&qp(n)}function X4(e,t,n){const i=Z(e),s=i.queries.get(t);if(s)for(const r of s.Sa)r.onError(n);i.queries.delete(t)}function qp(e){e.Ca.forEach(t=>{t.next()})}var em,X0;(X0=em||(em={})).Ma="default",X0.Cache="cache";class $4{constructor(t,n,i){this.query=t,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=i||{}}Fa(t){if(!this.options.includeMetadataChanges){const i=[];for(const s of t.docChanges)s.type!==3&&i.push(s);t=new la(t.query,t.docs,t.oldDocs,i,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),n=!0):this.La(t,this.onlineState)&&(this.ka(t),n=!0),this.Na=t,n}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),n=!0),n}La(t,n){if(!t.fromCache||!this.Da())return!0;const i=n!=="Offline";return(!this.options.qa||!i)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(t){t=la.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==em.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BS{constructor(t){this.key=t}}class qS{constructor(t){this.key=t}}class J4{constructor(t,n){this.query=t,this.Za=n,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=ut(),this.mutatedKeys=ut(),this.eu=oS(t),this.tu=new Gr(this.eu)}get nu(){return this.Za}ru(t,n){const i=n?n.iu:new Q0,s=n?n.tu:this.tu;let r=n?n.mutatedKeys:this.mutatedKeys,a=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((d,m)=>{const p=s.get(d),v=sh(this.query,m)?m:null,C=!!p&&this.mutatedKeys.has(p.key),M=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let U=!1;p&&v?p.data.isEqual(v.data)?C!==M&&(i.track({type:3,doc:v}),U=!0):this.su(p,v)||(i.track({type:2,doc:v}),U=!0,(u&&this.eu(v,u)>0||h&&this.eu(v,h)<0)&&(l=!0)):!p&&v?(i.track({type:0,doc:v}),U=!0):p&&!v&&(i.track({type:1,doc:p}),U=!0,(u||h)&&(l=!0)),U&&(v?(a=a.add(v),r=M?r.add(d):r.delete(d)):(a=a.delete(d),r=r.delete(d)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const d=this.query.limitType==="F"?a.last():a.first();a=a.delete(d.key),r=r.delete(d.key),i.track({type:1,doc:d})}return{tu:a,iu:i,bs:l,mutatedKeys:r}}su(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,i,s){const r=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const a=t.iu.ya();a.sort((d,m)=>function(v,C){const M=U=>{switch(U){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K(20277,{Vt:U})}};return M(v)-M(C)}(d.type,m.type)||this.eu(d.doc,m.doc)),this.ou(i),s=s??!1;const l=n&&!s?this._u():[],u=this.Ya.size===0&&this.current&&!s?1:0,h=u!==this.Xa;return this.Xa=u,a.length!==0||h?{snapshot:new la(this.query,t.tu,r,a,t.mutatedKeys,u===0,h,!1,!!i&&i.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Q0,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(t){return!this.Za.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach(n=>this.Za=this.Za.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.Za=this.Za.delete(n)),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Ya;this.Ya=ut(),this.tu.forEach(i=>{this.uu(i.key)&&(this.Ya=this.Ya.add(i.key))});const n=[];return t.forEach(i=>{this.Ya.has(i)||n.push(new qS(i))}),this.Ya.forEach(i=>{t.has(i)||n.push(new BS(i))}),n}cu(t){this.Za=t.ks,this.Ya=ut();const n=this.ru(t.documents);return this.applyChanges(n,!0)}lu(){return la.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const Hp="SyncEngine";class Z4{constructor(t,n,i){this.query=t,this.targetId=n,this.view=i}}class W4{constructor(t){this.key=t,this.hu=!1}}class tV{constructor(t,n,i,s,r,a){this.localStore=t,this.remoteStore=n,this.eventManager=i,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new rr(l=>aS(l),ih),this.Eu=new Map,this.Iu=new Set,this.Ru=new Vt(G.comparator),this.Au=new Map,this.Vu=new Op,this.du={},this.mu=new Map,this.fu=oa.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function eV(e,t,n=!0){const i=YS(e);let s;const r=i.Tu.get(t);return r?(i.sharedClientState.addLocalQueryTarget(r.targetId),s=r.view.lu()):s=await HS(i,t,n,!0),s}async function nV(e,t){const n=YS(e);await HS(n,t,!0,!1)}async function HS(e,t,n,i){const s=await _4(e.localStore,Vn(t)),r=s.targetId,a=e.sharedClientState.addLocalQueryTarget(r,n);let l;return i&&(l=await iV(e,t,r,a==="current",s.resumeToken)),e.isPrimaryClient&&n&&kS(e.remoteStore,s),l}async function iV(e,t,n,i,s){e.pu=(m,p,v)=>async function(M,U,S,b){let R=U.view.ru(S);R.bs&&(R=await B0(M.localStore,U.query,!1).then(({documents:T})=>U.view.ru(T,R)));const D=b&&b.targetChanges.get(U.targetId),B=b&&b.targetMismatches.get(U.targetId)!=null,F=U.view.applyChanges(R,M.isPrimaryClient,D,B);return J0(M,U.targetId,F.au),F.snapshot}(e,m,p,v);const r=await B0(e.localStore,t,!0),a=new J4(t,r.ks),l=a.ru(r.documents),u=yl.createSynthesizedTargetChangeForCurrentChange(n,i&&e.onlineState!=="Offline",s),h=a.applyChanges(l,e.isPrimaryClient,u);J0(e,n,h.au);const d=new Z4(t,n,a);return e.Tu.set(t,d),e.Eu.has(n)?e.Eu.get(n).push(t):e.Eu.set(n,[t]),h.snapshot}async function sV(e,t,n){const i=Z(e),s=i.Tu.get(t),r=i.Eu.get(s.targetId);if(r.length>1)return i.Eu.set(s.targetId,r.filter(a=>!ih(a,t))),void i.Tu.delete(t);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(s.targetId),i.sharedClientState.isActiveQueryTarget(s.targetId)||await Wd(i.localStore,s.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(s.targetId),n&&Lp(i.remoteStore,s.targetId),nm(i,s.targetId)}).catch(ba)):(nm(i,s.targetId),await Wd(i.localStore,s.targetId,!0))}async function rV(e,t){const n=Z(e),i=n.Tu.get(t),s=n.Eu.get(i.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(i.targetId),Lp(n.remoteStore,i.targetId))}async function aV(e,t,n){const i=dV(e);try{const s=await function(a,l){const u=Z(a),h=xt.now(),d=l.reduce((v,C)=>v.add(C.key),ut());let m,p;return u.persistence.runTransaction("Locally write mutations","readwrite",v=>{let C=di(),M=ut();return u.xs.getEntries(v,d).next(U=>{C=U,C.forEach((S,b)=>{b.isValidDocument()||(M=M.add(S))})}).next(()=>u.localDocuments.getOverlayedDocuments(v,C)).next(U=>{m=U;const S=[];for(const b of l){const R=yM(b,m.get(b.key).overlayedDocument);R!=null&&S.push(new _s(b.key,R,ZA(R.value.mapValue),$e.exists(!0)))}return u.mutationQueue.addMutationBatch(v,h,S,l)}).next(U=>{p=U;const S=U.applyToLocalDocumentSet(m,M);return u.documentOverlayCache.saveOverlays(v,U.batchId,S)})}).then(()=>({batchId:p.batchId,changes:uS(m)}))}(i.localStore,t);i.sharedClientState.addPendingMutation(s.batchId),function(a,l,u){let h=a.du[a.currentUser.toKey()];h||(h=new Vt(lt)),h=h.insert(l,u),a.du[a.currentUser.toKey()]=h}(i,s.batchId,n),await vl(i,s.changes),await hh(i.remoteStore)}catch(s){const r=Bp(s,"Failed to persist write");n.reject(r)}}async function FS(e,t){const n=Z(e);try{const i=await p4(n.localStore,t);t.targetChanges.forEach((s,r)=>{const a=n.Au.get(r);a&&(gt(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?gt(a.hu,14607):s.removedDocuments.size>0&&(gt(a.hu,42227),a.hu=!1))}),await vl(n,i,t)}catch(i){await ba(i)}}function $0(e,t,n){const i=Z(e);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const s=[];i.Tu.forEach((r,a)=>{const l=a.view.va(t);l.snapshot&&s.push(l.snapshot)}),function(a,l){const u=Z(a);u.onlineState=l;let h=!1;u.queries.forEach((d,m)=>{for(const p of m.Sa)p.va(l)&&(h=!0)}),h&&qp(u)}(i.eventManager,t),s.length&&i.Pu.H_(s),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function oV(e,t,n){const i=Z(e);i.sharedClientState.updateQueryState(t,"rejected",n);const s=i.Au.get(t),r=s&&s.key;if(r){let a=new Vt(G.comparator);a=a.insert(r,Te.newNoDocument(r,J.min()));const l=ut().add(r),u=new lh(J.min(),new Map,new Vt(lt),a,l);await FS(i,u),i.Ru=i.Ru.remove(r),i.Au.delete(t),Fp(i)}else await Wd(i.localStore,t,!1).then(()=>nm(i,t,n)).catch(ba)}async function lV(e,t){const n=Z(e),i=t.batch.batchId;try{const s=await m4(n.localStore,t);KS(n,i,null),GS(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await vl(n,s)}catch(s){await ba(s)}}async function uV(e,t,n){const i=Z(e);try{const s=await function(a,l){const u=Z(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let d;return u.mutationQueue.lookupMutationBatch(h,l).next(m=>(gt(m!==null,37113),d=m.keys(),u.mutationQueue.removeMutationBatch(h,m))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,d,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,d)).next(()=>u.localDocuments.getDocuments(h,d))})}(i.localStore,t);KS(i,t,n),GS(i,t),i.sharedClientState.updateMutationState(t,"rejected",n),await vl(i,s)}catch(s){await ba(s)}}function GS(e,t){(e.mu.get(t)||[]).forEach(n=>{n.resolve()}),e.mu.delete(t)}function KS(e,t,n){const i=Z(e);let s=i.du[i.currentUser.toKey()];if(s){const r=s.get(t);r&&(n?r.reject(n):r.resolve(),s=s.remove(t)),i.du[i.currentUser.toKey()]=s}}function nm(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const i of e.Eu.get(t))e.Tu.delete(i),n&&e.Pu.yu(i,n);e.Eu.delete(t),e.isPrimaryClient&&e.Vu.Gr(t).forEach(i=>{e.Vu.containsKey(i)||QS(e,i)})}function QS(e,t){e.Iu.delete(t.path.canonicalString());const n=e.Ru.get(t);n!==null&&(Lp(e.remoteStore,n),e.Ru=e.Ru.remove(t),e.Au.delete(n),Fp(e))}function J0(e,t,n){for(const i of n)i instanceof BS?(e.Vu.addReference(i.key,t),cV(e,i)):i instanceof qS?(H(Hp,"Document no longer in limbo: "+i.key),e.Vu.removeReference(i.key,t),e.Vu.containsKey(i.key)||QS(e,i.key)):K(19791,{wu:i})}function cV(e,t){const n=t.key,i=n.path.canonicalString();e.Ru.get(n)||e.Iu.has(i)||(H(Hp,"New document in limbo: "+n),e.Iu.add(i),Fp(e))}function Fp(e){for(;e.Iu.size>0&&e.Ru.size<e.maxConcurrentLimboResolutions;){const t=e.Iu.values().next().value;e.Iu.delete(t);const n=new G(wt.fromString(t)),i=e.fu.next();e.Au.set(i,new W4(n)),e.Ru=e.Ru.insert(n,i),kS(e.remoteStore,new zi(Vn(Rp(n.path)),i,"TargetPurposeLimboResolution",th.ce))}}async function vl(e,t,n){const i=Z(e),s=[],r=[],a=[];i.Tu.isEmpty()||(i.Tu.forEach((l,u)=>{a.push(i.pu(u,t,n).then(h=>{var d;if((h||n)&&i.isPrimaryClient){const m=h?!h.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:d.current;i.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(h){s.push(h);const m=Vp.Is(u.targetId,h);r.push(m)}}))}),await Promise.all(a),i.Pu.H_(s),await async function(u,h){const d=Z(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>L.forEach(h,p=>L.forEach(p.Ts,v=>d.persistence.referenceDelegate.addReference(m,p.targetId,v)).next(()=>L.forEach(p.Es,v=>d.persistence.referenceDelegate.removeReference(m,p.targetId,v)))))}catch(m){if(!Aa(m))throw m;H(kp,"Failed to update sequence numbers: "+m)}for(const m of h){const p=m.targetId;if(!m.fromCache){const v=d.vs.get(p),C=v.snapshotVersion,M=v.withLastLimboFreeSnapshotVersion(C);d.vs=d.vs.insert(p,M)}}}(i.localStore,r))}async function hV(e,t){const n=Z(e);if(!n.currentUser.isEqual(t)){H(Hp,"User change. New user:",t.toKey());const i=await DS(n.localStore,t);n.currentUser=t,function(r,a){r.mu.forEach(l=>{l.forEach(u=>{u.reject(new q(k.CANCELLED,a))})}),r.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,i.removedBatchIds,i.addedBatchIds),await vl(n,i.Ns)}}function fV(e,t){const n=Z(e),i=n.Au.get(t);if(i&&i.hu)return ut().add(i.key);{let s=ut();const r=n.Eu.get(t);if(!r)return s;for(const a of r){const l=n.Tu.get(a);s=s.unionWith(l.view.nu)}return s}}function YS(e){const t=Z(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=FS.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=fV.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=oV.bind(null,t),t.Pu.H_=Y4.bind(null,t.eventManager),t.Pu.yu=X4.bind(null,t.eventManager),t}function dV(e){const t=Z(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=lV.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=uV.bind(null,t),t}class Sc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=uh(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,n){return null}Mu(t,n){return null}vu(t){return d4(this.persistence,new c4,t.initialUser,this.serializer)}Cu(t){return new xS(Mp.Vi,this.serializer)}Du(t){return new T4}async terminate(){var t,n;(t=this.gcScheduler)==null||t.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Sc.provider={build:()=>new Sc};class mV extends Sc{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,n){gt(this.persistence.referenceDelegate instanceof bc,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new XM(i,t.asyncQueue,n)}Cu(t){const n=this.cacheSizeBytes!==void 0?Ve.withCacheSize(this.cacheSizeBytes):Ve.DEFAULT;return new xS(i=>bc.Vi(i,n),this.serializer)}}class im{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>$0(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=hV.bind(null,this.syncEngine),await H4(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new G4}()}createDatastore(t){const n=uh(t.databaseInfo.databaseId),i=w4(t.databaseInfo);return x4(t.authCredentials,t.appCheckCredentials,i,n)}createRemoteStore(t){return function(i,s,r,a,l){return new O4(i,s,r,a,l)}(this.localStore,this.datastore,t.asyncQueue,n=>$0(this.syncEngine,n,0),function(){return F0.v()?new F0:new E4}())}createSyncEngine(t,n){return function(s,r,a,l,u,h,d){const m=new tV(s,r,a,l,u,h);return d&&(m.gu=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){var t,n;await async function(s){const r=Z(s);H(Js,"RemoteStore shutting down."),r.Ia.add(5),await _l(r),r.Aa.shutdown(),r.Va.set("Unknown")}(this.remoteStore),(t=this.datastore)==null||t.terminate(),(n=this.eventManager)==null||n.terminate()}}im.provider={build:()=>new im};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pV{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):fi("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,n){setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ms="FirestoreClient";class gV{constructor(t,n,i,s,r){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=i,this._databaseInfo=s,this.user=ve.UNAUTHENTICATED,this.clientId=Ep.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=r,this.authCredentials.start(i,async a=>{H(ms,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(i,a=>(H(ms,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new js;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const i=Bp(n,"Failed to shutdown persistence");t.reject(i)}}),t.promise}}async function Of(e,t){e.asyncQueue.verifyOperationInProgress(),H(ms,"Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let i=n.initialUser;e.setCredentialChangeListener(async s=>{i.isEqual(s)||(await DS(t.localStore,s),i=s)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function Z0(e,t){e.asyncQueue.verifyOperationInProgress();const n=await yV(e);H(ms,"Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(i=>K0(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,s)=>K0(t.remoteStore,s)),e._onlineComponents=t}async function yV(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){H(ms,"Using user provided OfflineComponentProvider");try{await Of(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!function(s){return s.name==="FirebaseError"?s.code===k.FAILED_PRECONDITION||s.code===k.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;$s("Error using user provided cache. Falling back to memory cache: "+n),await Of(e,new Sc)}}else H(ms,"Using default OfflineComponentProvider"),await Of(e,new mV(void 0));return e._offlineComponents}async function XS(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(H(ms,"Using user provided OnlineComponentProvider"),await Z0(e,e._uninitializedComponentsProvider._online)):(H(ms,"Using default OnlineComponentProvider"),await Z0(e,new im))),e._onlineComponents}function _V(e){return XS(e).then(t=>t.syncEngine)}async function W0(e){const t=await XS(e),n=t.eventManager;return n.onListen=eV.bind(null,t.syncEngine),n.onUnlisten=sV.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=nV.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=rV.bind(null,t.syncEngine),n}function vV(e,t,n,i){const s=new pV(i),r=new $4(t,s,n);return e.asyncQueue.enqueueAndForget(async()=>K4(await W0(e),r)),()=>{s.Nu(),e.asyncQueue.enqueueAndForget(async()=>Q4(await W0(e),r))}}function TV(e,t){const n=new js;return e.asyncQueue.enqueueAndForget(async()=>aV(await _V(e),t,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $S(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EV="ComponentProvider",tv=new Map;function bV(e,t,n,i,s){return new zO(e,t,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,$S(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JS="firestore.googleapis.com",ev=!0;class nv{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new q(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=JS,this.ssl=ev}else this.host=t.host,this.ssl=t.ssl??ev;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=NS;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<QM)throw new q(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}NO("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=$S(t.experimentalLongPollingOptions??{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new q(k.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new q(k.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new q(k.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(i,s){return i.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class fh{constructor(t,n,i,s){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new nv({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new q(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new q(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new nv(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new vO;switch(i.type){case"firstParty":return new AO(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new q(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const i=tv.get(n);i&&(H(EV,"Removing Datastore"),tv.delete(n),i.terminate())}(this),Promise.resolve()}}function AV(e,t,n,i={}){var h;e=es(e,fh);const s=cl(t),r=e._getSettings(),a={...r,emulatorOptions:e._getEmulatorOptions()},l=`${t}:${n}`;s&&Rb(`https://${l}`),r.host!==JS&&r.host!==l&&$s("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...r,host:l,ssl:s,emulatorOptions:i};if(!os(u,a)&&(e._setSettings(u),i.mockUserToken)){let d,m;if(typeof i.mockUserToken=="string")d=i.mockUserToken,m=ve.MOCK_USER;else{d=A2(i.mockUserToken,(h=e._app)==null?void 0:h.options.projectId);const p=i.mockUserToken.sub||i.mockUserToken.user_id;if(!p)throw new q(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new ve(p)}e._authCredentials=new TO(new zA(d,m))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(t,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=t}withConverter(t){return new wa(this.firestore,t,this._query)}}class Jt{constructor(t,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ns(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Jt(this.firestore,t,this._key)}toJSON(){return{type:Jt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,n,i){if(ml(n,Jt._jsonSchema))return new Jt(t,i||null,new G(wt.fromString(n.referencePath)))}}Jt._jsonSchemaVersion="firestore/documentReference/1.0",Jt._jsonSchema={type:$t("string",Jt._jsonSchemaVersion),referencePath:$t("string")};class ns extends wa{constructor(t,n,i){super(t,n,Rp(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Jt(this.firestore,null,new G(t))}withConverter(t){return new ns(this.firestore,t,this._path)}}function ZS(e,t,...n){if(e=Ht(e),BA("collection","path",t),e instanceof fh){const i=wt.fromString(t,...n);return m0(i),new ns(e,null,i)}{if(!(e instanceof Jt||e instanceof ns))throw new q(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child(wt.fromString(t,...n));return m0(i),new ns(e.firestore,null,i)}}function Bi(e,t,...n){if(e=Ht(e),arguments.length===1&&(t=Ep.newId()),BA("doc","path",t),e instanceof fh){const i=wt.fromString(t,...n);return d0(i),new Jt(e,null,new G(i))}{if(!(e instanceof Jt||e instanceof ns))throw new q(k.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child(wt.fromString(t,...n));return d0(i),new Jt(e.firestore,e instanceof ns?e.converter:null,new G(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iv="AsyncQueue";class sv{constructor(t=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new MS(this,"async_queue_retry"),this._c=()=>{const i=Df();i&&H(iv,"Visibility state changed to "+i.visibilityState),this.M_.w_()},this.ac=t;const n=Df();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const n=Df();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise(()=>{});const n=new js;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Yu.push(t),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(t){if(!Aa(t))throw t;H(iv,"Operation failed with retryable error: "+t)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(t){const n=this.ac.then(()=>(this.rc=!0,t().catch(i=>{throw this.nc=i,this.rc=!1,fi("INTERNAL UNHANDLED ERROR: ",rv(i)),i}).then(i=>(this.rc=!1,i))));return this.ac=n,n}enqueueAfterDelay(t,n,i){this.uc(),this.oc.indexOf(t)>-1&&(n=0);const s=zp.createAndSchedule(this,t,n,i,r=>this.hc(r));return this.tc.push(s),s}uc(){this.nc&&K(47125,{Pc:rv(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ec(t){for(const n of this.tc)if(n.timerId===t)return!0;return!1}Ic(t){return this.Tc().then(()=>{this.tc.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Tc()})}Rc(t){this.oc.push(t)}hc(t){const n=this.tc.indexOf(t);this.tc.splice(n,1)}}function rv(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+`
`+e.stack),t}class ua extends fh{constructor(t,n,i,s){super(t,n,i,s),this.type="firestore",this._queue=new sv,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new sv(t),this._firestoreClient=void 0,await t}}}function SV(e,t){const n=typeof e=="object"?e:ap(),i=typeof e=="string"?e:pc,s=sr(n,"firestore").getImmediate({identifier:i});if(!s._initialized){const r=E2("firestore");r&&AV(s,...r)}return s}function Gp(e){if(e._terminated)throw new q(k.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||wV(e),e._firestoreClient}function wV(e){var i,s,r,a;const t=e._freezeSettings(),n=bV(e._databaseId,((i=e._app)==null?void 0:i.options.appId)||"",e._persistenceKey,(s=e._app)==null?void 0:s.options.apiKey,t);e._componentsProvider||(r=t.localCache)!=null&&r._offlineComponentProvider&&((a=t.localCache)!=null&&a._onlineComponentProvider)&&(e._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),e._firestoreClient=new gV(e._authCredentials,e._appCheckCredentials,e._queue,n,e._componentsProvider&&function(u){const h=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(h),_online:h}}(e._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(t){this._byteString=t}static fromBase64String(t){try{return new on(ye.fromBase64String(t))}catch(n){throw new q(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new on(ye.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:on._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(ml(t,on._jsonSchema))return on.fromBase64String(t.bytes)}}on._jsonSchemaVersion="firestore/bytes/1.0",on._jsonSchema={type:$t("string",on._jsonSchemaVersion),bytes:$t("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new q(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new me(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new q(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new q(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return lt(this._lat,t._lat)||lt(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ln._jsonSchemaVersion}}static fromJSON(t){if(ml(t,Ln._jsonSchema))return new Ln(t.latitude,t.longitude)}}Ln._jsonSchemaVersion="firestore/geoPoint/1.0",Ln._jsonSchema={type:$t("string",Ln._jsonSchemaVersion),latitude:$t("number"),longitude:$t("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(t){this._values=(t||[]).map(n=>n)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(i,s){if(i.length!==s.length)return!1;for(let r=0;r<i.length;++r)if(i[r]!==s[r])return!1;return!0}(this._values,t._values)}toJSON(){return{type:yn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(ml(t,yn._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every(n=>typeof n=="number"))return new yn(t.vectorValues);throw new q(k.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}yn._jsonSchemaVersion="firestore/vectorValue/1.0",yn._jsonSchema={type:$t("string",yn._jsonSchemaVersion),vectorValues:$t("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IV=/^__.*__$/;class RV{constructor(t,n,i){this.data=t,this.fieldMask=n,this.fieldTransforms=i}toMutation(t,n){return this.fieldMask!==null?new _s(t,this.data,this.fieldMask,n,this.fieldTransforms):new gl(t,this.data,n,this.fieldTransforms)}}class WS{constructor(t,n,i){this.data=t,this.fieldMask=n,this.fieldTransforms=i}toMutation(t,n){return new _s(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function tw(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K(40011,{dataSource:e})}}class Yp{constructor(t,n,i,s,r,a){this.settings=t,this.databaseId=n,this.serializer=i,this.ignoreUndefinedProperties=s,r===void 0&&this.Ac(),this.fieldTransforms=r||[],this.fieldMask=a||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(t){return new Yp({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(t){var s;const n=(s=this.path)==null?void 0:s.child(t),i=this.i({path:n,arrayElement:!1});return i.mc(t),i}fc(t){var s;const n=(s=this.path)==null?void 0:s.child(t),i=this.i({path:n,arrayElement:!1});return i.Ac(),i}gc(t){return this.i({path:void 0,arrayElement:!0})}yc(t){return wc(t,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Ac(){if(this.path)for(let t=0;t<this.path.length;t++)this.mc(this.path.get(t))}mc(t){if(t.length===0)throw this.yc("Document fields must not be empty");if(tw(this.dataSource)&&IV.test(t))throw this.yc('Document fields cannot begin and end with "__"')}}class CV{constructor(t,n,i){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=i||uh(t)}I(t,n,i,s=!1){return new Yp({dataSource:t,methodName:n,targetDoc:i,path:me.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Xp(e){const t=e._freezeSettings(),n=uh(e._databaseId);return new CV(e._databaseId,!!t.ignoreUndefinedProperties,n)}function ew(e,t,n,i,s,r={}){const a=e.I(r.merge||r.mergeFields?2:0,t,n,s);$p("Data must be an object, but it was:",a,i);const l=nw(i,a);let u,h;if(r.merge)u=new Fe(a.fieldMask),h=a.fieldTransforms;else if(r.mergeFields){const d=[];for(const m of r.mergeFields){const p=ca(t,m,n);if(!a.contains(p))throw new q(k.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);rw(d,p)||d.push(p)}u=new Fe(d),h=a.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,h=a.fieldTransforms;return new RV(new ke(l),u,h)}class dh extends Qp{_toFieldTransform(t){if(t.dataSource!==2)throw t.dataSource===1?t.yc(`${this._methodName}() can only appear at the top level of your update data`):t.yc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof dh}}function NV(e,t,n,i){const s=e.I(1,t,n);$p("Data must be an object, but it was:",s,i);const r=[],a=ke.empty();ys(i,(u,h)=>{const d=sw(t,u,n);h=Ht(h);const m=s.fc(d);if(h instanceof dh)r.push(d);else{const p=Tl(h,m);p!=null&&(r.push(d),a.set(d,p))}});const l=new Fe(r);return new WS(a,l,s.fieldTransforms)}function xV(e,t,n,i,s,r){const a=e.I(1,t,n),l=[ca(t,i,n)],u=[s];if(r.length%2!=0)throw new q(k.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<r.length;p+=2)l.push(ca(t,r[p])),u.push(r[p+1]);const h=[],d=ke.empty();for(let p=l.length-1;p>=0;--p)if(!rw(h,l[p])){const v=l[p];let C=u[p];C=Ht(C);const M=a.fc(v);if(C instanceof dh)h.push(v);else{const U=Tl(C,M);U!=null&&(h.push(v),d.set(v,U))}}const m=new Fe(h);return new WS(d,m,a.fieldTransforms)}function DV(e,t,n,i=!1){return Tl(n,e.I(i?4:3,t))}function Tl(e,t){if(iw(e=Ht(e)))return $p("Unsupported field value:",t,e),nw(e,t);if(e instanceof Qp)return function(i,s){if(!tw(s.dataSource))throw s.yc(`${i._methodName}() can only be used with update() and set()`);if(!s.path)throw s.yc(`${i._methodName}() is not currently supported inside arrays`);const r=i._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.arrayElement&&t.dataSource!==4)throw t.yc("Nested arrays are not supported");return function(i,s){const r=[];let a=0;for(const l of i){let u=Tl(l,s.gc(a));u==null&&(u={nullValue:"NULL_VALUE"}),r.push(u),a++}return{arrayValue:{values:r}}}(e,t)}return function(i,s){if((i=Ht(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return hM(s.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const r=xt.fromDate(i);return{timestampValue:Ec(s.serializer,r)}}if(i instanceof xt){const r=new xt(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Ec(s.serializer,r)}}if(i instanceof Ln)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof on)return{bytesValue:ES(s.serializer,i._byteString)};if(i instanceof Jt){const r=s.databaseId,a=i.firestore._databaseId;if(!a.isEqual(r))throw s.yc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Dp(i.firestore._databaseId||s.databaseId,i._key.path)}}if(i instanceof yn)return function(a,l){const u=a instanceof yn?a.toArray():a;return{mapValue:{fields:{[$A]:{stringValue:JA},[gc]:{arrayValue:{values:u.map(d=>{if(typeof d!="number")throw l.yc("VectorValues must only contain numeric values.");return Cp(l.serializer,d)})}}}}}}(i,s);if(CS(i))return i._toProto(s.serializer);throw s.yc(`Unsupported field value: ${Wc(i)}`)}(e,t)}function nw(e,t){const n={};return FA(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ys(e,(i,s)=>{const r=Tl(s,t.dc(i));r!=null&&(n[i]=r)}),{mapValue:{fields:n}}}function iw(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof xt||e instanceof Ln||e instanceof on||e instanceof Jt||e instanceof Qp||e instanceof yn||CS(e))}function $p(e,t,n){if(!iw(n)||!qA(n)){const i=Wc(n);throw i==="an object"?t.yc(e+" a custom object"):t.yc(e+" "+i)}}function ca(e,t,n){if((t=Ht(t))instanceof Kp)return t._internalPath;if(typeof t=="string")return sw(e,t);throw wc("Field path arguments must be of type string or ",e,!1,void 0,n)}const OV=new RegExp("[~\\*/\\[\\]]");function sw(e,t,n){if(t.search(OV)>=0)throw wc(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Kp(...t.split("."))._internalPath}catch{throw wc(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function wc(e,t,n,i,s){const r=i&&!i.isEmpty(),a=s!==void 0;let l=`Function ${t}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(r||a)&&(u+=" (found",r&&(u+=` in field ${i}`),a&&(u+=` in document ${s}`),u+=")"),new q(k.INVALID_ARGUMENT,l+e+u)}function rw(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MV{convertValue(t,n="none"){switch(fs(t)){case 0:return null;case 1:return t.booleanValue;case 2:return zt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(hs(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 11:return this.convertObject(t.mapValue,n);case 10:return this.convertVectorValue(t.mapValue);default:throw K(62114,{value:t})}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const i={};return ys(t,(s,r)=>{i[s]=this.convertValue(r,n)}),i}convertVectorValue(t){var i,s,r;const n=(r=(s=(i=t.fields)==null?void 0:i[gc].arrayValue)==null?void 0:s.values)==null?void 0:r.map(a=>zt(a.doubleValue));return new yn(n)}convertGeoPoint(t){return new Ln(zt(t.latitude),zt(t.longitude))}convertArray(t,n){return(t.values||[]).map(i=>this.convertValue(i,n))}convertServerTimestamp(t,n){switch(n){case"previous":const i=nh(t);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(Ko(t));default:return null}}convertTimestamp(t){const n=cs(t);return new xt(n.seconds,n.nanos)}convertDocumentKey(t,n){const i=wt.fromString(t);gt(RS(i),9688,{name:t});const s=new Qo(i.get(1),i.get(3)),r=new G(i.popFirst(5));return s.isEqual(n)||fi(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aw extends MV{constructor(t){super(),this.firestore=t}convertBytes(t){return new on(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new Jt(this.firestore,null,n)}}const av="@firebase/firestore",ov="4.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lv(e){return function(n,i){if(typeof n!="object"||n===null)return!1;const s=n;for(const r of i)if(r in s&&typeof s[r]=="function")return!0;return!1}(e,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ow{constructor(t,n,i,s,r){this._firestore=t,this._userDataWriter=n,this._key=i,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Jt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new VV(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var t;return((t=this._document)==null?void 0:t.data.clone().value.mapValue.fields)??void 0}get(t){if(this._document){const n=this._document.data.field(ca("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class VV extends ow{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kV(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new q(k.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Jp{}class LV extends Jp{}function UV(e,t,...n){let i=[];t instanceof Jp&&i.push(t),i=i.concat(n),function(r){const a=r.filter(u=>u instanceof Zp).length,l=r.filter(u=>u instanceof mh).length;if(a>1||a>0&&l>0)throw new q(k.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const s of i)e=s._apply(e);return e}class mh extends LV{constructor(t,n,i){super(),this._field=t,this._op=n,this._value=i,this.type="where"}static _create(t,n,i){return new mh(t,n,i)}_apply(t){const n=this._parse(t);return lw(t._query,n),new wa(t.firestore,t.converter,Qd(t._query,n))}_parse(t){const n=Xp(t.firestore);return function(r,a,l,u,h,d,m){let p;if(h.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new q(k.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){cv(m,d);const C=[];for(const M of m)C.push(uv(u,r,M));p={arrayValue:{values:C}}}else p=uv(u,r,m)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||cv(m,d),p=DV(l,a,m,d==="in"||d==="not-in");return Yt.create(h,d,p)}(t._query,"where",n,t.firestore._databaseId,this._field,this._op,this._value)}}function PV(e,t,n){const i=t,s=ca("where",e);return mh._create(s,i,n)}class Zp extends Jp{constructor(t,n){super(),this.type=t,this._queryConstraints=n}static _create(t,n){return new Zp(t,n)}_parse(t){const n=this._queryConstraints.map(i=>i._parse(t)).filter(i=>i.getFilters().length>0);return n.length===1?n[0]:vn.create(n,this._getOperator())}_apply(t){const n=this._parse(t);return n.getFilters().length===0?t:(function(s,r){let a=s;const l=r.getFlattenedFilters();for(const u of l)lw(a,u),a=Qd(a,u)}(t._query,n),new wa(t.firestore,t.converter,Qd(t._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function uv(e,t,n){if(typeof(n=Ht(n))=="string"){if(n==="")throw new q(k.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!rS(t)&&n.indexOf("/")!==-1)throw new q(k.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const i=t.path.child(wt.fromString(n));if(!G.isDocumentKey(i))throw new q(k.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return b0(e,new G(i))}if(n instanceof Jt)return b0(e,n._key);throw new q(k.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Wc(n)}.`)}function cv(e,t){if(!Array.isArray(e)||e.length===0)throw new q(k.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function lw(e,t){const n=function(s,r){for(const a of s)for(const l of a.getFlattenedFilters())if(r.indexOf(l.op)>=0)return l.op;return null}(e.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(n!==null)throw n===t.op?new q(k.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new q(k.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}function uw(e,t,n){let i;return i=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,i}class oo{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class zs extends ow{constructor(t,n,i,s,r,a){super(t,n,i,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Ru(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const i=this._document.data.field(ca("DocumentSnapshot.get",t));if(i!==null)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new q(k.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,n={};return n.type=zs._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}zs._jsonSchemaVersion="firestore/documentSnapshot/1.0",zs._jsonSchema={type:$t("string",zs._jsonSchemaVersion),bundleSource:$t("string","DocumentSnapshot"),bundleName:$t("string"),bundle:$t("string")};class Ru extends zs{data(t={}){return super.data(t)}}class Kr{constructor(t,n,i,s){this._firestore=t,this._userDataWriter=n,this._snapshot=s,this.metadata=new oo(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(i=>{t.call(n,new Ru(this._firestore,this._userDataWriter,i.key,i,new oo(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new q(k.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const u=new Ru(s._firestore,s._userDataWriter,l.doc.key,l.doc,new oo(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>r||l.type!==3).map(l=>{const u=new Ru(s._firestore,s._userDataWriter,l.doc.key,l.doc,new oo(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,d=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),d=a.indexOf(l.doc.key)),{type:jV(l.type),doc:u,oldIndex:h,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new q(k.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=Kr._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=Ep.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],i=[],s=[];return this.docs.forEach(r=>{r._document!==null&&(n.push(r._document),i.push(this._userDataWriter.convertObjectMap(r._document.data.value.mapValue.fields,"previous")),s.push(r.ref.path))}),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function jV(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K(61501,{type:e})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Kr._jsonSchemaVersion="firestore/querySnapshot/1.0",Kr._jsonSchema={type:$t("string",Kr._jsonSchemaVersion),bundleSource:$t("string","QuerySnapshot"),bundleName:$t("string"),bundle:$t("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zV{constructor(t,n){this._firestore=t,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Xp(t)}set(t,n,i){this._verifyNotCommitted();const s=Mf(t,this._firestore),r=uw(s.converter,n,i),a=ew(this._dataReader,"WriteBatch.set",s._key,r,s.converter!==null,i);return this._mutations.push(a.toMutation(s._key,$e.none())),this}update(t,n,i,...s){this._verifyNotCommitted();const r=Mf(t,this._firestore);let a;return a=typeof(n=Ht(n))=="string"||n instanceof Kp?xV(this._dataReader,"WriteBatch.update",r._key,n,i,s):NV(this._dataReader,"WriteBatch.update",r._key,n),this._mutations.push(a.toMutation(r._key,$e.exists(!0))),this}delete(t){this._verifyNotCommitted();const n=Mf(t,this._firestore);return this._mutations=this._mutations.concat(new oh(n._key,$e.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new q(k.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Mf(e,t){if((e=Ht(e)).firestore!==t)throw new q(k.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}function Co(e,t,n){e=es(e,Jt);const i=es(e.firestore,ua),s=uw(e.converter,t,n),r=Xp(i);return Wp(i,[ew(r,"setDoc",e._key,s,e.converter!==null,n).toMutation(e._key,$e.none())])}function BV(e){return Wp(es(e.firestore,ua),[new oh(e._key,$e.none())])}function cw(e,...t){var h,d,m;e=Ht(e);let n={includeMetadataChanges:!1,source:"default"},i=0;typeof t[i]!="object"||lv(t[i])||(n=t[i++]);const s={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(lv(t[i])){const p=t[i];t[i]=(h=p.next)==null?void 0:h.bind(p),t[i+1]=(d=p.error)==null?void 0:d.bind(p),t[i+2]=(m=p.complete)==null?void 0:m.bind(p)}let r,a,l;if(e instanceof Jt)a=es(e.firestore,ua),l=Rp(e._key.path),r={next:p=>{t[i]&&t[i](qV(a,e,p))},error:t[i+1],complete:t[i+2]};else{const p=es(e,wa);a=es(p.firestore,ua),l=p._query;const v=new aw(a);r={next:C=>{t[i]&&t[i](new Kr(a,v,p,C))},error:t[i+1],complete:t[i+2]},kV(e._query)}const u=Gp(a);return vV(u,l,s,r)}function Wp(e,t){const n=Gp(e);return TV(n,t)}function qV(e,t,n){const i=n.docs.get(t._key),s=new aw(e);return new zs(e,s,t._key,i,new oo(n.hasPendingWrites,n.fromCache),t.converter)}function nu(e){return e=es(e,ua),Gp(e),new zV(e,t=>Wp(e,t))}(function(t,n=!0){_O(va),Un(new _n("firestore",(i,{instanceIdentifier:s,options:r})=>{const a=i.getProvider("app").getImmediate(),l=new ua(new EO(i.getProvider("auth-internal")),new SO(a,i.getProvider("app-check-internal")),BO(a,s),a);return r={useFetchStreams:n,...r},l._setSettings(r),l},"PUBLIC").setMultipleInstances(!0)),cn(av,ov,t),cn(av,ov,"esm2020")})();const HV={apiKey:"AIzaSyDkGPd6MDL29Z8LY3EhPMLEXU_Q3_D8jLc",authDomain:"seguimiento-coaches.firebaseapp.com",projectId:"seguimiento-coaches",storageBucket:"seguimiento-coaches.firebasestorage.app",messagingSenderId:"782682130999",appId:"1:782682130999:web:5651867d9579d873cecdb2",measurementId:"G-PFED0LN5EQ"},tg=Db(HV);typeof window<"u"&&dx(tg);const hv=gO(tg),In=SV(tg);function FV(){const[e,t]=nt.useState(null),[n,i]=nt.useState(!0),[s,r]=nt.useState([]),[a,l]=nt.useState("dashboard"),[u,h]=nt.useState(null),[d,m]=nt.useState(!1),[p,v]=nt.useState(!1),[C,M]=nt.useState([]),[U,S]=nt.useState(""),[b,R]=nt.useState("Todos"),[D,B]=nt.useState("Todas"),[F,T]=nt.useState("Todos"),[_,E]=nt.useState("Todas"),[w,I]=nt.useState(!1),[N,A]=nt.useState(!1);nt.useEffect(()=>{const P=document.createElement("script");return P.src="https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js",P.async=!0,document.body.appendChild(P),()=>{document.body.contains(P)&&document.body.removeChild(P)}},[]),nt.useEffect(()=>{(async()=>{try{await Wx(hv)}catch(st){console.error("Error al autenticar:",st)}finally{i(!1)}})();const ht=rD(hv,t);return()=>ht()},[]),nt.useEffect(()=>{if(!e)return;const P=ZS(In,"users",e.uid,"schools"),ht=cw(P,st=>{const et=st.docs.map(jt=>({id:jt.id,...jt.data()}));r(et)},st=>console.error("Error obteniendo colegios:",st));return()=>ht()},[e]);const Zt=nt.useMemo(()=>[...new Set(s.map(P=>P.coach).filter(Boolean))],[s]),Ce=nt.useMemo(()=>[...new Set(s.map(P=>P.region).filter(Boolean))],[s]),j=nt.useMemo(()=>s.filter(P=>{var An;const ht=(An=P.name)==null?void 0:An.toLowerCase().includes(U.toLowerCase()),st=b==="Todos"||P.coach===b,et=D==="Todas"||P.region===D,jt=F==="Todos"||(P.gestionType||"MANTENIMIENTO")===F,fn=_==="Todas"||(P.renewal||"NO DEFINIDA")===_;return ht&&st&&et&&jt&&fn}),[s,U,b,D,F,_]),$=nt.useMemo(()=>{const P=j.length;let ht=0,st=0,et=0,jt=0,fn=0,An=0;j.forEach(be=>{ht+=(Number(be.completedActions)||0)+(Number(be.progressActions)||0)+(Number(be.pendingActions)||0),st+=Number(be.completedActions)||0,et+=Number(be.progressActions)||0,jt+=Number(be.pendingActions)||0,be.renewal==="ALTA"&&fn++,be.renewal==="FIRMADO"&&An++});const Ca=ht>0?Math.round(st/ht*100):0;return{totalSchools:P,totalActions:ht,completed:st,progress:et,pending:jt,highRenewal:fn,firmados:An,completionRate:Ca}},[j]),Y=P=>{const ht={};return j.forEach(st=>{const et=st[P]||"Sin definir";ht[et]||(ht[et]={FIRMADO:0,ALTA:0,MEDIA:0,BAJA:0,"NO DEFINIDA":0,total:0});const jt=st.renewal||"NO DEFINIDA";ht[et][jt]!==void 0&&(ht[et][jt]+=1),ht[et].total++}),Object.entries(ht).map(([st,et])=>({name:st,...et})).sort((st,et)=>et.total-st.total)},vt=nt.useMemo(()=>Y("coach"),[j]),kt=nt.useMemo(()=>Y("region"),[j]),Bn=nt.useMemo(()=>Y("businessLine"),[j]),qn=async(P,ht)=>{e&&await Co(Bi(In,"users",e.uid,"schools",P),{renewal:ht,updatedAt:new Date().toISOString()},{merge:!0})},pi=async()=>{if(!(C.length===0||!window.confirm(`Estás a punto de ELIMINAR ${C.length} colegio(s). ¿Estás seguro?`)||!window.confirm("DOBLE CONFIRMACIÓN: Esta acción es irreversible. ¿Deseas borrar los datos definitivamente?")))try{let st=nu(In),et=0;for(const jt of C)st.delete(Bi(In,"users",e.uid,"schools",jt)),et++,et>=490&&(await st.commit(),st=nu(In),et=0);et>0&&await st.commit(),M([])}catch(st){console.error("Error eliminando:",st),alert("Hubo un error al eliminar los colegios.")}},Ne=P=>{M(ht=>ht.includes(P)?ht.filter(st=>st!==P):[...ht,P])},bn=()=>{C.length===j.length?M([]):M(j.map(P=>P.id))},Ia=async P=>{if(!e)return;const ht=P.target.files[0];if(!ht)return;I(!0);const st=new FileReader;st.onload=async et=>{try{const jt=et.target.result,fn=window.XLSX.read(jt,{type:"binary"}),An=fn.SheetNames[0],Ca=fn.Sheets[An],be=window.XLSX.utils.sheet_to_json(Ca);let gi=nu(In),vs=0;for(const Wt of be){const Tt=El=>{const bl=Object.keys(Wt).find(Ts=>El.includes(Ts.toLowerCase().trim()));return bl?Wt[bl]:null},or=Tt(["id"])||`${Date.now()}-${Math.random().toString(36).substr(2,9)}`,ph={name:Tt(["colegio","nombre"])||"Sin Nombre",calendar:Tt(["calendario","cal"])||"Sin definir",classification:Tt(["clasificacion","tipo"])||"Sin definir",businessLine:Tt(["lineanegocio","linea"])||"Sin definir",coach:Tt(["coach","entrenador"])||"Sin Asignar",region:Tt(["regional","region","zona"])||"Sin Región",completedActions:Number(Tt(["acciones hechas","completedactions"])||0),progressActions:Number(Tt(["acciones progreso","progressactions"])||0),pendingActions:Number(Tt(["acciones pendientes","pendingactions"])||0),renewal:Tt(["probabilidad","renewal"])||"NO DEFINIDA",gestionType:Tt(["status","gestiontype","tipo gestion"])||"MANTENIMIENTO",updatedAt:new Date().toISOString()};gi.set(Bi(In,"users",e.uid,"schools",String(or)),ph,{merge:!0}),vs++,vs>=450&&(await gi.commit(),gi=nu(In),vs=0)}vs>0&&await gi.commit(),I(!1),P.target.value=null,alert(`¡Sincronización exitosa! Procesados ${be.length} registros.`)}catch(jt){console.error("Error crítico de sincronización:",jt),I(!1),alert("Error de conexión. Verifica el formato del archivo.")}},st.readAsBinaryString(ht)},Ra=()=>{if(!window.XLSX)return;const P=s.map(et=>({ID:et.id,colegio:et.name,calendario:et.calendar,clasificacion:et.classification,lineaNegocio:et.businessLine,coach:et.coach,regional:et.region,STATUS:et.gestionType,Probabilidad:et.renewal,"Acciones Hechas":et.completedActions,"Acciones Progreso":et.progressActions,"Acciones Pendientes":et.pendingActions})),ht=window.XLSX.utils.json_to_sheet(P.length?P:[{ID:"123",colegio:"Base",STATUS:"MANTENIMIENTO",Probabilidad:"ALTA"}]),st=window.XLSX.utils.book_new();window.XLSX.utils.book_append_sheet(st,ht,"Colegios"),window.XLSX.writeFile(st,"Data_CRM_Completa.xlsx")};return n?y.jsx("div",{className:"min-h-screen flex items-center justify-center bg-slate-950 text-cyan-400 font-semibold tracking-widest uppercase",children:"Inicializando Sistema..."}):y.jsxs("div",{className:"flex h-screen bg-[#0B1120] font-sans text-slate-200 overflow-hidden relative selection:bg-cyan-500/30",children:[N&&y.jsx("div",{className:"fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden",onClick:()=>A(!1)}),y.jsxs("aside",{className:`fixed inset-y-0 left-0 w-64 bg-[#0F172A] border-r border-slate-800 flex flex-col shadow-[4px_0_24px_rgba(0,0,0,0.5)] z-50 transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${N?"translate-x-0":"-translate-x-full"}`,children:[y.jsxs("div",{className:"p-6 flex justify-between items-center border-b border-slate-800/50",children:[y.jsxs("h1",{className:"text-2xl font-black tracking-tight flex items-center gap-2 text-white",children:[y.jsx(gb,{className:"text-cyan-400",size:28}),"Coach",y.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500",children:"Track"})]}),y.jsx("button",{className:"md:hidden text-slate-400 hover:text-white",onClick:()=>A(!1),children:y.jsx(ic,{size:24})})]}),y.jsx("p",{className:"px-6 text-slate-500 text-xs font-semibold tracking-wider uppercase mt-4 mb-2",children:"Panel de Control"}),y.jsxs("nav",{className:"flex-1 px-4 space-y-2 mt-2",children:[y.jsxs("button",{onClick:()=>{l("dashboard"),A(!1)},className:`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium ${a==="dashboard"?"bg-gradient-to-r from-cyan-500/20 to-blue-500/10 text-cyan-400 border border-cyan-500/30":"text-slate-400 hover:bg-slate-800/50 hover:text-slate-200"}`,children:[y.jsx(qR,{size:20})," Dashboard Visual"]}),y.jsxs("button",{onClick:()=>{l("schools"),A(!1)},className:`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium ${a==="schools"?"bg-gradient-to-r from-cyan-500/20 to-blue-500/10 text-cyan-400 border border-cyan-500/30":"text-slate-400 hover:bg-slate-800/50 hover:text-slate-200"}`,children:[y.jsx(I_,{size:20})," Gestión de Datos"]})]}),y.jsxs("div",{className:"p-4 border-t border-slate-800 space-y-3 bg-[#0B1120]/50",children:[y.jsxs("div",{className:"relative",children:[y.jsx("input",{type:"file",accept:".xlsx, .xls, .csv",className:"absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10",onChange:Ia,disabled:w}),y.jsxs("button",{className:"w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 rounded-xl text-sm font-bold text-white transition-all shadow-[0_0_15px_rgba(8,145,178,0.4)]",children:[w?y.jsx(w_,{className:"animate-spin",size:18}):y.jsx(u2,{size:18})," Sincronizar Excel"]})]}),y.jsxs("button",{onClick:Ra,className:"w-full flex items-center justify-center gap-2 px-4 py-2 border border-slate-700 hover:bg-slate-800 hover:text-white rounded-xl text-sm font-medium text-slate-400 transition-colors",children:[y.jsx(XR,{size:16})," Exportar Reporte"]})]})]}),y.jsxs("main",{className:"flex-1 flex flex-col h-full overflow-hidden w-full",children:[y.jsx("header",{className:"bg-[#0F172A]/90 backdrop-blur-md border-b border-slate-800 px-4 py-3 shrink-0 z-10",children:y.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-between gap-3",children:[y.jsxs("div",{className:"flex w-full md:w-auto items-center gap-3",children:[y.jsx("button",{className:"md:hidden p-2 text-slate-400 hover:text-white",onClick:()=>A(!0),children:y.jsx(JR,{size:24})}),y.jsxs("div",{className:"relative flex-1 md:w-64",children:[y.jsx(s2,{className:"absolute left-3 top-1/2 -translate-y-1/2 text-slate-500",size:16}),y.jsx("input",{type:"text",placeholder:"Buscar colegio...",value:U,onChange:P=>S(P.target.value),className:"pl-9 pr-4 py-1.5 w-full rounded-lg border border-slate-700 bg-slate-900/50 text-sm text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"})]})]}),y.jsxs("div",{className:"flex flex-wrap items-center justify-end gap-2 w-full md:w-auto",children:[y.jsxs("select",{value:b,onChange:P=>R(P.target.value),className:"px-2 py-1.5 rounded-lg border border-slate-700 bg-slate-900/50 text-xs text-slate-300 focus:border-cyan-500 outline-none",children:[y.jsx("option",{value:"Todos",children:"Coach: Todos"}),Zt.map(P=>y.jsx("option",{value:P,children:P},P))]}),y.jsxs("select",{value:D,onChange:P=>B(P.target.value),className:"px-2 py-1.5 rounded-lg border border-slate-700 bg-slate-900/50 text-xs text-slate-300 focus:border-cyan-500 outline-none",children:[y.jsx("option",{value:"Todas",children:"Región: Todas"}),Ce.map(P=>y.jsx("option",{value:P,children:P},P))]}),y.jsxs("select",{value:F,onChange:P=>T(P.target.value),className:"px-2 py-1.5 rounded-lg border border-slate-700 bg-slate-900/50 text-xs text-slate-300 focus:border-cyan-500 outline-none",children:[y.jsx("option",{value:"Todos",children:"STATUS: Todos"}),y.jsx("option",{value:"MANTENIMIENTO",children:"MANTENIMIENTO"}),y.jsx("option",{value:"RENOVACIÓN",children:"RENOVACIÓN"})]}),y.jsxs("select",{value:_,onChange:P=>E(P.target.value),className:"px-2 py-1.5 rounded-lg border border-slate-700 bg-slate-900/50 text-xs text-slate-300 focus:border-cyan-500 outline-none",children:[y.jsx("option",{value:"Todas",children:"Prob: Todas"}),y.jsx("option",{value:"FIRMADO",children:"FIRMADO"}),y.jsx("option",{value:"ALTA",children:"ALTA"}),y.jsx("option",{value:"MEDIA",children:"MEDIA"}),y.jsx("option",{value:"BAJA",children:"BAJA"}),y.jsx("option",{value:"NO DEFINIDA",children:"NO DEFINIDA"})]})]})]})}),y.jsx("div",{className:"flex-1 overflow-auto p-4 md:p-6 custom-scrollbar",children:a==="dashboard"?y.jsxs("div",{className:"space-y-8 max-w-7xl mx-auto animate-in fade-in duration-300",children:[y.jsxs("div",{children:[y.jsx("h2",{className:"text-2xl font-bold text-white tracking-wide",children:"Métricas Globales"}),y.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-4",children:[y.jsx(Za,{title:"Entidades Filtradas",value:$.totalSchools,icon:y.jsx(I_,{size:20,className:"text-blue-400"}),color:"bg-blue-500/10",borderColor:"border-blue-500/20"}),y.jsx(Za,{title:"Avance Acciones",value:`${$.completionRate}%`,icon:y.jsx(R_,{size:20,className:"text-cyan-400"}),color:"bg-cyan-500/10",borderColor:"border-cyan-500/20"}),y.jsx(Za,{title:"Colegios Firmados",value:$.firmados,icon:y.jsx(Dd,{size:20,className:"text-purple-400"}),color:"bg-purple-500/10",borderColor:"border-purple-500/20"}),y.jsx(Za,{title:"Prob. ALTA",value:$.highRenewal,icon:y.jsx(R_,{size:20,className:"text-emerald-400"}),color:"bg-emerald-500/10",borderColor:"border-emerald-500/20"}),y.jsx(Za,{title:"Acc. Pendientes",value:$.pending,icon:y.jsx(S_,{size:20,className:"text-rose-400"}),color:"bg-rose-500/10",borderColor:"border-rose-500/20"})]})]}),y.jsx("h3",{className:"text-xl font-bold text-white mt-10 mb-4 border-b border-slate-800 pb-2",children:"Matriz de Probabilidades (Basado en filtros)"}),y.jsxs("div",{className:"grid grid-cols-1 xl:grid-cols-3 gap-6",children:[y.jsx(Vf,{title:"Por Línea de Negocio",data:Bn,icon:y.jsx(A_,{size:18,className:"text-fuchsia-400"})}),y.jsx(Vf,{title:"Por Regional",data:kt,icon:y.jsx(A_,{size:18,className:"text-amber-400"})}),y.jsx(Vf,{title:"Rendimiento de Coaches",data:vt,icon:y.jsx(h2,{size:18,className:"text-cyan-400"})})]})]}):y.jsxs("div",{className:"max-w-7xl mx-auto animate-in fade-in duration-300",children:[y.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-end mb-6 gap-4",children:[y.jsxs("div",{children:[y.jsx("h2",{className:"text-2xl font-bold text-white tracking-wide",children:"Directorio de Colegios"}),y.jsxs("p",{className:"text-slate-400 text-sm mt-1",children:["Mostrando ",j.length," colegio(s)."]})]}),y.jsxs("div",{className:"flex gap-3",children:[C.length>0&&y.jsxs("button",{onClick:pi,className:"flex items-center gap-2 bg-rose-500/10 border border-rose-500/30 text-rose-400 px-4 py-2 rounded-lg text-sm font-bold hover:bg-rose-500 hover:text-white transition-all",children:[y.jsx(a2,{size:16})," Eliminar (",C.length,")"]}),y.jsxs("button",{onClick:()=>v(!0),className:"flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-[0_0_10px_rgba(8,145,178,0.3)] transition-all",children:[y.jsx(yb,{size:16})," Nuevo"]})]})]}),y.jsx("div",{className:"bg-[#0F172A] rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.3)] border border-slate-800 overflow-x-auto",children:y.jsxs("table",{className:"w-full text-left border-collapse min-w-[900px]",children:[y.jsx("thead",{children:y.jsxs("tr",{className:"bg-[#151E32] border-b border-slate-800 text-xs uppercase tracking-wider text-slate-400",children:[y.jsx("th",{className:"p-4 w-10 text-center",children:y.jsx("input",{type:"checkbox",onChange:bn,checked:C.length>0&&C.length===j.length,className:"rounded border-slate-600 bg-slate-900 accent-cyan-500 w-4 h-4"})}),y.jsx("th",{className:"p-4 font-semibold",children:"Colegio"}),y.jsx("th",{className:"p-4 font-semibold",children:"Región / Línea"}),y.jsx("th",{className:"p-4 font-semibold text-center",children:"Avance CoachHub"}),y.jsx("th",{className:"p-4 font-semibold text-center",children:"STATUS"}),y.jsx("th",{className:"p-4 font-semibold text-center",children:"Probabilidad"}),y.jsx("th",{className:"p-4 font-semibold text-right",children:"Acción"})]})}),y.jsxs("tbody",{className:"divide-y divide-slate-800/50",children:[j.map(P=>{const ht=(Number(P.completedActions)||0)+(Number(P.progressActions)||0)+(Number(P.pendingActions)||0),st=ht>0?Math.round((Number(P.completedActions)||0)/ht*100):0,et=C.includes(P.id);return y.jsxs("tr",{className:`hover:bg-slate-800/40 transition-colors group ${et?"bg-cyan-900/10":""}`,children:[y.jsx("td",{className:"p-4 text-center",children:y.jsx("input",{type:"checkbox",checked:et,onChange:()=>Ne(P.id),className:"rounded border-slate-600 bg-slate-900 accent-cyan-500 w-4 h-4 cursor-pointer"})}),y.jsxs("td",{className:"p-4",children:[y.jsx("div",{className:"font-bold text-slate-200 text-sm max-w-[250px] truncate",title:P.name,children:P.name}),y.jsxs("div",{className:"text-[10px] text-slate-500 mt-1 uppercase tracking-wider",children:["Coach: ",y.jsx("span",{className:"text-cyan-400 font-medium",children:P.coach})]})]}),y.jsxs("td",{className:"p-4",children:[y.jsx("div",{className:"text-xs text-slate-300 font-medium",children:P.region}),y.jsx("div",{className:"text-[9px] text-fuchsia-400 bg-fuchsia-400/10 border border-fuchsia-400/20 inline-block px-1.5 py-0.5 rounded mt-1 font-bold uppercase tracking-wider",children:P.businessLine})]}),y.jsxs("td",{className:"p-4 align-middle",children:[y.jsxs("div",{className:"flex items-center justify-center gap-2",children:[y.jsx("div",{className:"w-16 lg:w-20 h-1.5 bg-slate-800 rounded-full overflow-hidden",children:y.jsx("div",{className:"h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full",style:{width:`${st}%`}})}),y.jsxs("span",{className:"text-xs font-bold text-slate-300 w-8",children:[st,"%"]})]}),y.jsxs("div",{className:"flex gap-1.5 justify-center mt-1.5 text-[9px] font-mono text-slate-500",children:[y.jsxs("span",{className:"flex items-center gap-1 text-emerald-400/70",title:"Hechas",children:[y.jsx(Dd,{size:10}),P.completedActions||0]}),y.jsxs("span",{className:"flex items-center gap-1 text-amber-400/70",title:"Progreso",children:[y.jsx(w_,{size:10}),P.progressActions||0]}),y.jsxs("span",{className:"flex items-center gap-1 text-rose-400/70",title:"Pendientes",children:[y.jsx(S_,{size:10}),P.pendingActions||0]})]})]}),y.jsx("td",{className:"p-4 text-center",children:y.jsx("span",{className:`text-[10px] font-black px-2 py-1 rounded border tracking-widest uppercase ${P.gestionType==="RENOVACIÓN"?"bg-purple-500/10 text-purple-400 border-purple-500/20":"bg-blue-500/10 text-blue-400 border-blue-500/20"}`,children:P.gestionType||"MANTENIMIENTO"})}),y.jsx("td",{className:"p-4 text-center",children:y.jsxs("select",{value:P.renewal||"NO DEFINIDA",onChange:jt=>qn(P.id,jt.target.value),className:`text-xs font-bold px-2 py-1.5 rounded-lg border bg-slate-900 focus:outline-none cursor-pointer tracking-wider uppercase
                                ${P.renewal==="FIRMADO"?"text-purple-400 border-purple-500/30":P.renewal==="ALTA"?"text-emerald-400 border-emerald-500/30":P.renewal==="MEDIA"?"text-amber-400 border-amber-500/30":P.renewal==="BAJA"?"text-rose-400 border-rose-500/30":"text-slate-400 border-slate-700"}`,children:[y.jsx("option",{value:"FIRMADO",className:"text-purple-400 bg-slate-900",children:"FIRMADO"}),y.jsx("option",{value:"ALTA",className:"text-emerald-400 bg-slate-900",children:"ALTA"}),y.jsx("option",{value:"MEDIA",className:"text-amber-400 bg-slate-900",children:"MEDIA"}),y.jsx("option",{value:"BAJA",className:"text-rose-400 bg-slate-900",children:"BAJA"}),y.jsx("option",{value:"NO DEFINIDA",className:"text-slate-400 bg-slate-900",children:"NO DEFINIDA"})]})}),y.jsx("td",{className:"p-4 text-right",children:y.jsx("button",{onClick:()=>{h(P),m(!0)},className:"p-2 bg-slate-800 border border-slate-700 text-cyan-400 hover:bg-cyan-500 hover:text-white hover:border-cyan-500 rounded-lg transition-all shadow-sm",children:"Editar"})})]},P.id)}),j.length===0&&y.jsx("tr",{children:y.jsx("td",{colSpan:"7",className:"p-8 text-center text-slate-500 font-mono text-sm uppercase",children:"No hay colegios que coincidan con los filtros."})})]})]})})]})})]}),d&&u&&y.jsx(QV,{school:u,onClose:()=>{m(!1),h(null)},db:In,userId:e.uid}),p&&y.jsx(KV,{onClose:()=>v(!1),db:In,userId:e.uid,coaches:Zt,regions:Ce})]})}function Za({title:e,value:t,icon:n,color:i,borderColor:s}){return y.jsxs("div",{className:`p-4 md:p-5 rounded-2xl border ${s} bg-[#0F172A] shadow-lg flex flex-col relative overflow-hidden`,children:[y.jsx("div",{className:`absolute -right-4 -top-4 w-20 h-20 ${i} rounded-full blur-2xl opacity-50`}),y.jsx("div",{className:"flex justify-between items-start mb-3",children:y.jsx("div",{className:`p-2 rounded-xl bg-slate-900 border border-slate-800 ${i.replace("10","20")}`,children:n})}),y.jsx("h3",{className:"text-slate-400 text-xs font-semibold uppercase tracking-wider relative z-10",children:e}),y.jsx("div",{className:"text-2xl font-black text-white mt-1 tracking-tight relative z-10",children:t})]})}function Vf({title:e,data:t,icon:n}){return y.jsxs("div",{className:"bg-[#0F172A] rounded-2xl border border-slate-800 shadow-lg overflow-hidden flex flex-col relative",children:[y.jsxs("div",{className:"p-4 bg-[#151E32] border-b border-slate-800 flex items-center gap-3",children:[y.jsx("div",{className:"p-1.5 bg-slate-900 rounded-lg border border-slate-800",children:n}),y.jsx("h3",{className:"font-bold text-slate-200 text-sm",children:e})]}),y.jsx("div",{className:"p-0 overflow-auto flex-1 max-h-[320px] custom-scrollbar",children:y.jsxs("table",{className:"w-full text-left text-sm",children:[y.jsx("thead",{className:"sticky top-0 bg-[#0F172A] shadow-sm z-10",children:y.jsxs("tr",{className:"text-slate-500 text-[9px] uppercase tracking-wider border-b border-slate-800",children:[y.jsx("th",{className:"p-3 font-semibold",children:"Categoría"}),y.jsx("th",{className:"p-3 font-semibold text-center text-purple-400",children:"FIRM"}),y.jsx("th",{className:"p-3 font-semibold text-center text-emerald-400",children:"ALTA"}),y.jsx("th",{className:"p-3 font-semibold text-center text-amber-400",children:"MED"}),y.jsx("th",{className:"p-3 font-semibold text-center text-rose-400",children:"BAJA"}),y.jsx("th",{className:"p-3 font-semibold text-center text-white",children:"Tot"})]})}),y.jsxs("tbody",{className:"divide-y divide-slate-800/50",children:[t.map((i,s)=>y.jsxs("tr",{className:"hover:bg-slate-800/30 transition-colors",children:[y.jsx("td",{className:"p-3 font-medium text-slate-300 text-xs truncate max-w-[120px]",title:i.name,children:i.name}),y.jsx("td",{className:"p-3 text-center text-purple-400 font-bold bg-purple-500/5",children:i.FIRMADO}),y.jsx("td",{className:"p-3 text-center text-emerald-400 font-bold bg-emerald-500/5",children:i.ALTA}),y.jsx("td",{className:"p-3 text-center text-amber-400 font-bold bg-amber-500/5",children:i.MEDIA}),y.jsx("td",{className:"p-3 text-center text-rose-400 font-bold bg-rose-500/5",children:i.BAJA}),y.jsx("td",{className:"p-3 text-center font-black text-cyan-400 bg-cyan-500/5",children:i.total})]},s)),t.length===0&&y.jsx("tr",{children:y.jsx("td",{colSpan:"6",className:"p-4 text-center text-slate-600 text-xs uppercase tracking-widest",children:"Sin datos"})})]})]})})]})}function GV({status:e}){const t={FIRMADO:"bg-purple-500/10 text-purple-400 border-purple-500/30",ALTA:"bg-emerald-500/10 text-emerald-400 border-emerald-500/30",MEDIA:"bg-amber-500/10 text-amber-400 border-amber-500/30",BAJA:"bg-rose-500/10 text-rose-400 border-rose-500/30","NO DEFINIDA":"bg-slate-800 text-slate-400 border-slate-700"},n=t[e]||t["NO DEFINIDA"];return y.jsx("span",{className:`px-2 py-1 rounded border text-[10px] uppercase tracking-wider font-bold ${n}`,children:e||"ND"})}function KV({onClose:e,db:t,userId:n,coaches:i,regions:s}){const[r,a]=nt.useState({name:"",coach:i[0]||"Sin Asignar",region:s[0]||"Sin Región",businessLine:"Compartir",calendar:"A",classification:"AA"}),l=async u=>{if(u.preventDefault(),!r.name.trim())return alert("El nombre es obligatorio");const h=`${Date.now()}-${Math.random().toString(36).substr(2,9)}`;await Co(Bi(t,"users",n,"schools",h),{...r,completedActions:0,progressActions:0,pendingActions:0,renewal:"NO DEFINIDA",gestionType:"MANTENIMIENTO",updatedAt:new Date().toISOString()}),e()};return y.jsx("div",{className:"fixed inset-0 z-[70] flex items-center justify-center bg-black/60 backdrop-blur-md animate-in fade-in",children:y.jsxs("div",{className:"bg-[#0F172A] border border-slate-800 w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden",children:[y.jsxs("div",{className:"p-5 border-b border-slate-800 bg-[#151E32] flex justify-between items-center",children:[y.jsxs("h2",{className:"text-lg font-bold text-white flex items-center gap-2",children:[y.jsx(yb,{size:20,className:"text-cyan-400"})," Nuevo Registro"]}),y.jsx("button",{onClick:e,className:"text-slate-400 hover:text-white",children:y.jsx(ic,{size:20})})]}),y.jsxs("form",{onSubmit:l,className:"p-6 space-y-4",children:[y.jsxs("div",{children:[y.jsx("label",{className:"block text-xs font-bold text-slate-400 mb-1 uppercase tracking-wide",children:"Nombre del Colegio"}),y.jsx("input",{type:"text",autoFocus:!0,required:!0,value:r.name,onChange:u=>a({...r,name:u.target.value}),className:"w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white focus:border-cyan-500 outline-none",placeholder:"Ej. Gimnasio Moderno"})]}),y.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[y.jsxs("div",{children:[y.jsx("label",{className:"block text-xs font-bold text-slate-400 mb-1 uppercase tracking-wide",children:"Coach Asignado"}),y.jsxs("select",{value:r.coach,onChange:u=>a({...r,coach:u.target.value}),className:"w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white focus:border-cyan-500 outline-none",children:[i.map(u=>y.jsx("option",{value:u,children:u},u)),y.jsx("option",{value:"Otro",children:"Otro..."})]})]}),y.jsxs("div",{children:[y.jsx("label",{className:"block text-xs font-bold text-slate-400 mb-1 uppercase tracking-wide",children:"Región / Zona"}),y.jsxs("select",{value:r.region,onChange:u=>a({...r,region:u.target.value}),className:"w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white focus:border-cyan-500 outline-none",children:[s.map(u=>y.jsx("option",{value:u,children:u},u)),y.jsx("option",{value:"Otra",children:"Otra..."})]})]})]}),y.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[y.jsxs("div",{children:[y.jsx("label",{className:"block text-xs font-bold text-slate-400 mb-1 uppercase tracking-wide",children:"Línea de Negocio"}),y.jsx("input",{type:"text",value:r.businessLine,onChange:u=>a({...r,businessLine:u.target.value}),className:"w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white focus:border-cyan-500 outline-none"})]}),y.jsxs("div",{children:[y.jsx("label",{className:"block text-xs font-bold text-slate-400 mb-1 uppercase tracking-wide",children:"Clasificación"}),y.jsx("input",{type:"text",value:r.classification,onChange:u=>a({...r,classification:u.target.value}),className:"w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white focus:border-cyan-500 outline-none"})]})]}),y.jsxs("div",{className:"pt-4 flex justify-end gap-3",children:[y.jsx("button",{type:"button",onClick:e,className:"px-4 py-2 rounded-lg text-slate-400 hover:bg-slate-800 text-sm font-bold transition-all",children:"Cancelar"}),y.jsx("button",{type:"submit",className:"px-5 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-bold shadow-[0_0_15px_rgba(8,145,178,0.4)] transition-all",children:"Crear Entidad"})]})]})]})})}function QV({school:e,onClose:t,db:n,userId:i}){const[s,r]=nt.useState(!1),[a,l]=nt.useState([]),[u,h]=nt.useState({name:e.name,coach:e.coach,region:e.region,businessLine:e.businessLine,calendar:e.calendar,classification:e.classification,gestionType:e.gestionType||"MANTENIMIENTO",renewal:e.renewal||"NO DEFINIDA",completedActions:e.completedActions||0,progressActions:e.progressActions||0,pendingActions:e.pendingActions||0}),[d,m]=nt.useState("");nt.useEffect(()=>{const C=UV(ZS(n,"users",i,"comments"),PV("schoolId","==",e.id)),M=cw(C,U=>{const S=U.docs.map(b=>({id:b.id,...b.data()}));l(S.sort((b,R)=>R.createdAt-b.createdAt))});return()=>M()},[n,i,e.id]);const p=async()=>{await Co(Bi(n,"users",i,"schools",e.id),{...u,completedActions:Number(u.completedActions),progressActions:Number(u.progressActions),pendingActions:Number(u.pendingActions),updatedAt:new Date().toISOString()},{merge:!0}),r(!1)},v=async C=>{C.preventDefault(),d.trim()&&(await Co(Bi(n,"users",i,"comments",Date.now().toString()),{schoolId:e.id,text:d,status:"OPEN",createdAt:Date.now(),resolvedAt:null}),m(""))};return y.jsx("div",{className:"fixed inset-0 z-[70] flex items-center justify-end bg-black/60 backdrop-blur-md animate-in fade-in duration-200",children:y.jsxs("div",{className:"bg-[#0F172A] border-l border-slate-800 w-full max-w-md h-full shadow-[0_0_50px_rgba(0,0,0,0.8)] flex flex-col relative animate-in slide-in-from-right-full",children:[y.jsxs("div",{className:"p-6 border-b border-slate-800 bg-[#151E32]",children:[s?y.jsx("input",{type:"text",value:u.name,onChange:C=>h({...u,name:C.target.value}),className:"w-full bg-slate-900 border border-slate-700 rounded px-2 py-1 text-white font-bold mb-2"}):y.jsx("h2",{className:"text-xl font-bold text-white pr-6 leading-tight",children:u.name}),y.jsxs("div",{className:"text-xs text-slate-400 mt-3 grid grid-cols-2 gap-y-2 gap-x-4",children:[y.jsxs("p",{children:["Coach: ",s?y.jsx("input",{type:"text",value:u.coach,onChange:C=>h({...u,coach:C.target.value}),className:"w-full bg-slate-900 border border-slate-700 rounded px-1 text-white"}):y.jsx("span",{className:"font-semibold text-cyan-400",children:u.coach})]}),y.jsxs("p",{children:["Línea: ",s?y.jsx("input",{type:"text",value:u.businessLine,onChange:C=>h({...u,businessLine:C.target.value}),className:"w-full bg-slate-900 border border-slate-700 rounded px-1 text-white"}):y.jsx("span",{className:"font-semibold text-cyan-400",children:u.businessLine})]}),y.jsxs("p",{children:["Región: ",s?y.jsx("input",{type:"text",value:u.region,onChange:C=>h({...u,region:C.target.value}),className:"w-full bg-slate-900 border border-slate-700 rounded px-1 text-white"}):y.jsx("span",{className:"font-semibold text-slate-300",children:u.region})]}),y.jsxs("p",{children:["C/C: ",s?y.jsx("input",{type:"text",value:u.classification,onChange:C=>h({...u,classification:C.target.value}),className:"w-full bg-slate-900 border border-slate-700 rounded px-1 text-white"}):y.jsxs("span",{className:"font-semibold text-slate-300",children:[u.calendar,"/",u.classification]})]})]}),y.jsx("button",{onClick:t,className:"p-2 bg-slate-800/50 hover:bg-slate-700 text-slate-400 hover:text-white border border-slate-700 rounded-full transition-colors absolute top-4 right-4",children:y.jsx(ic,{size:18})})]}),y.jsxs("div",{className:"flex-1 overflow-y-auto p-6 space-y-6 pb-24 custom-scrollbar",children:[y.jsxs("section",{className:"bg-[#151E32]/50 border border-slate-800 rounded-xl p-5 relative overflow-hidden",children:[y.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-3xl"}),y.jsxs("div",{className:"flex justify-between items-center mb-5 relative z-10",children:[y.jsxs("h3",{className:"font-bold text-slate-200 flex items-center gap-2",children:[y.jsx(gb,{size:18,className:"text-cyan-400"})," Parámetros de Registro"]}),s?y.jsxs("div",{className:"flex gap-3",children:[y.jsx("button",{onClick:()=>r(!1),className:"text-xs font-semibold text-slate-500 uppercase hover:text-white",children:"Cancelar"}),y.jsx("button",{onClick:p,className:"text-xs font-bold text-emerald-400 uppercase hover:text-emerald-300",children:"Guardar"})]}):y.jsx("button",{onClick:()=>r(!0),className:"text-xs font-bold text-cyan-400 hover:text-cyan-300 tracking-wider uppercase",children:"Modificar Todo"})]}),s?y.jsxs("div",{className:"space-y-4 relative z-10",children:[y.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[y.jsx("label",{className:"text-xs font-bold text-slate-500 uppercase mt-2",children:"STATUS"}),y.jsxs("select",{value:u.gestionType,onChange:C=>h({...u,gestionType:C.target.value}),className:"bg-slate-900 border border-slate-700 text-white rounded px-2 py-1.5 text-sm focus:border-cyan-500 outline-none",children:[y.jsx("option",{value:"MANTENIMIENTO",children:"MANTENIMIENTO"}),y.jsx("option",{value:"RENOVACIÓN",children:"RENOVACIÓN"})]})]}),y.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[y.jsx("label",{className:"text-xs font-bold text-slate-500 uppercase mt-2",children:"Probabilidad"}),y.jsxs("select",{value:u.renewal,onChange:C=>h({...u,renewal:C.target.value}),className:"bg-slate-900 border border-slate-700 text-white rounded px-2 py-1.5 text-sm focus:border-cyan-500 outline-none",children:[y.jsx("option",{value:"FIRMADO",children:"FIRMADO"}),y.jsx("option",{value:"ALTA",children:"ALTA"}),y.jsx("option",{value:"MEDIA",children:"MEDIA"}),y.jsx("option",{value:"BAJA",children:"BAJA"}),y.jsx("option",{value:"NO DEFINIDA",children:"NO DEFINIDA"})]})]}),y.jsx("hr",{className:"border-slate-800 my-4"}),y.jsxs("div",{className:"grid grid-cols-2 items-center gap-3",children:[y.jsx("label",{className:"text-xs font-bold text-emerald-500 uppercase",children:"Ejecutadas"}),y.jsx("input",{type:"number",min:"0",value:u.completedActions,onChange:C=>h({...u,completedActions:C.target.value}),className:"bg-slate-900 border border-emerald-500/30 text-emerald-400 rounded px-3 py-1.5 w-full text-sm outline-none focus:border-emerald-500"})]}),y.jsxs("div",{className:"grid grid-cols-2 items-center gap-3",children:[y.jsx("label",{className:"text-xs font-bold text-amber-500 uppercase",children:"En Curso"}),y.jsx("input",{type:"number",min:"0",value:u.progressActions,onChange:C=>h({...u,progressActions:C.target.value}),className:"bg-slate-900 border border-amber-500/30 text-amber-400 rounded px-3 py-1.5 w-full text-sm outline-none focus:border-amber-500"})]}),y.jsxs("div",{className:"grid grid-cols-2 items-center gap-3",children:[y.jsx("label",{className:"text-xs font-bold text-rose-500 uppercase",children:"Pendientes"}),y.jsx("input",{type:"number",min:"0",value:u.pendingActions,onChange:C=>h({...u,pendingActions:C.target.value}),className:"bg-slate-900 border border-rose-500/30 text-rose-400 rounded px-3 py-1.5 w-full text-sm outline-none focus:border-rose-500"})]})]}):y.jsxs("div",{className:"space-y-5 relative z-10",children:[y.jsxs("div",{className:"flex gap-2",children:[y.jsx("span",{className:`px-2 py-1 rounded border text-[10px] uppercase tracking-wider font-bold ${u.gestionType==="RENOVACIÓN"?"bg-purple-500/10 text-purple-400 border-purple-500/30":"bg-blue-500/10 text-blue-400 border-blue-500/30"}`,children:u.gestionType}),y.jsx(GV,{status:u.renewal})]}),y.jsxs("div",{className:"grid grid-cols-3 gap-3 text-center",children:[y.jsxs("div",{className:"bg-emerald-500/5 p-3 rounded-xl border border-emerald-500/20",children:[y.jsx("div",{className:"text-2xl font-black text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]",children:u.completedActions}),y.jsx("div",{className:"text-[9px] uppercase tracking-widest font-bold text-emerald-600 mt-1",children:"Hechas"})]}),y.jsxs("div",{className:"bg-amber-500/5 p-3 rounded-xl border border-amber-500/20",children:[y.jsx("div",{className:"text-2xl font-black text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]",children:u.progressActions}),y.jsx("div",{className:"text-[9px] uppercase tracking-widest font-bold text-amber-600 mt-1",children:"Curso"})]}),y.jsxs("div",{className:"bg-rose-500/5 p-3 rounded-xl border border-rose-500/20",children:[y.jsx("div",{className:"text-2xl font-black text-rose-400 drop-shadow-[0_0_8px_rgba(251,113,133,0.5)]",children:u.pendingActions}),y.jsx("div",{className:"text-[9px] uppercase tracking-widest font-bold text-rose-600 mt-1",children:"Espera"})]})]})]})]}),y.jsxs("section",{children:[y.jsxs("h3",{className:"font-bold text-slate-200 flex items-center gap-2 mb-4",children:[y.jsx(WR,{size:18,className:"text-cyan-400"})," Log de Seguimiento"]}),y.jsxs("form",{onSubmit:v,className:"flex gap-2 mb-5",children:[y.jsx("input",{type:"text",value:d,onChange:C=>m(C.target.value),placeholder:"Registrar evento o nota...",className:"flex-1 bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"}),y.jsx("button",{type:"submit",disabled:!d.trim(),className:"bg-cyan-600/20 border border-cyan-500/30 text-cyan-400 p-2.5 rounded-lg hover:bg-cyan-500 hover:text-white disabled:opacity-30 transition-all",children:y.jsx(e2,{size:20})})]}),y.jsx("div",{className:"space-y-3",children:a.length===0?y.jsx("p",{className:"text-center text-xs text-slate-600 py-6 font-mono tracking-widest uppercase",children:"Sin registros"}):a.map(C=>{const M=C.status==="RESOLVED";return y.jsx("div",{className:`p-3.5 rounded-xl border transition-all ${M?"bg-slate-900/50 border-slate-800":"bg-[#151E32] border-slate-700 shadow-md"}`,children:y.jsxs("div",{className:"flex gap-3 items-start",children:[y.jsx("button",{onClick:async()=>await Co(Bi(n,"users",i,"comments",C.id),{...C,status:M?"OPEN":"RESOLVED",resolvedAt:M?null:Date.now()},{merge:!0}),className:`mt-0.5 shrink-0 transition-all hover:scale-110 ${M?"text-emerald-500/50":"text-slate-600 hover:text-emerald-400"}`,children:y.jsx(Dd,{size:18})}),y.jsxs("div",{className:"flex-1",children:[y.jsx("p",{className:`text-sm ${M?"text-slate-500 line-through decoration-slate-600":"text-slate-300"}`,children:C.text}),y.jsxs("div",{className:"flex items-center gap-3 mt-2 text-[10px] text-slate-500 font-mono",children:[y.jsx("span",{children:new Date(C.createdAt).toLocaleDateString("es-CO")}),M&&C.resolvedAt&&y.jsxs("span",{className:"text-emerald-400 bg-emerald-400/10 px-1.5 py-0.5 rounded",children:["Check: ",new Date(C.resolvedAt).toLocaleDateString("es-CO")]})]})]}),y.jsx("button",{onClick:async()=>await BV(Bi(n,"users",i,"comments",C.id)),className:"text-slate-600 hover:text-rose-400 opacity-0 md:group-hover:opacity-100 transition-opacity p-1",children:y.jsx(ic,{size:14})})]})},C.id)})})]})]})]})})}MR.createRoot(document.getElementById("root")).render(y.jsx(Ww.StrictMode,{children:y.jsx(FV,{})}));
