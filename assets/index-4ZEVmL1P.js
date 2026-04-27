(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();function s0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var r0={exports:{}},fc={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ow=Symbol.for("react.transitional.element"),Mw=Symbol.for("react.fragment");function a0(e,t,n){var i=null;if(n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),"key"in t){n={};for(var s in t)s!=="key"&&(n[s]=t[s])}else n=t;return t=n.ref,{$$typeof:Ow,type:e,key:i,ref:t!==void 0?t:null,props:n}}fc.Fragment=Mw;fc.jsx=a0;fc.jsxs=a0;r0.exports=fc;var S=r0.exports,o0={exports:{}},W={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yd=Symbol.for("react.transitional.element"),Vw=Symbol.for("react.portal"),kw=Symbol.for("react.fragment"),Lw=Symbol.for("react.strict_mode"),Uw=Symbol.for("react.profiler"),Pw=Symbol.for("react.consumer"),zw=Symbol.for("react.context"),jw=Symbol.for("react.forward_ref"),Bw=Symbol.for("react.suspense"),qw=Symbol.for("react.memo"),l0=Symbol.for("react.lazy"),Hw=Symbol.for("react.activity"),qp=Symbol.iterator;function Fw(e){return e===null||typeof e!="object"?null:(e=qp&&e[qp]||e["@@iterator"],typeof e=="function"?e:null)}var u0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},c0=Object.assign,h0={};function Wr(e,t,n){this.props=e,this.context=t,this.refs=h0,this.updater=n||u0}Wr.prototype.isReactComponent={};Wr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Wr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function f0(){}f0.prototype=Wr.prototype;function Xd(e,t,n){this.props=e,this.context=t,this.refs=h0,this.updater=n||u0}var $d=Xd.prototype=new f0;$d.constructor=Xd;c0($d,Wr.prototype);$d.isPureReactComponent=!0;var Hp=Array.isArray;function wf(){}var Ct={H:null,A:null,T:null,S:null},d0=Object.prototype.hasOwnProperty;function Jd(e,t,n){var i=n.ref;return{$$typeof:Yd,type:e,key:t,ref:i!==void 0?i:null,props:n}}function Gw(e,t){return Jd(e.type,t,e.props)}function Zd(e){return typeof e=="object"&&e!==null&&e.$$typeof===Yd}function Kw(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Fp=/\/+/g;function Ah(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Kw(""+e.key):t.toString(36)}function Qw(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(wf,wf):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function er(e,t,n,i,s){var r=typeof e;(r==="undefined"||r==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(r){case"bigint":case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Yd:case Vw:a=!0;break;case l0:return a=e._init,er(a(e._payload),t,n,i,s)}}if(a)return s=s(e),a=i===""?"."+Ah(e,0):i,Hp(s)?(n="",a!=null&&(n=a.replace(Fp,"$&/")+"/"),er(s,t,n,"",function(h){return h})):s!=null&&(Zd(s)&&(s=Gw(s,n+(s.key==null||e&&e.key===s.key?"":(""+s.key).replace(Fp,"$&/")+"/")+a)),t.push(s)),1;a=0;var l=i===""?".":i+":";if(Hp(e))for(var u=0;u<e.length;u++)i=e[u],r=l+Ah(i,u),a+=er(i,t,n,r,s);else if(u=Fw(e),typeof u=="function")for(e=u.call(e),u=0;!(i=e.next()).done;)i=i.value,r=l+Ah(i,u++),a+=er(i,t,n,r,s);else if(r==="object"){if(typeof e.then=="function")return er(Qw(e),t,n,i,s);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return a}function El(e,t,n){if(e==null)return e;var i=[],s=0;return er(e,i,"","",function(r){return t.call(n,r,s++)}),i}function Yw(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Gp=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Xw={map:El,forEach:function(e,t,n){El(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return El(e,function(){t++}),t},toArray:function(e){return El(e,function(t){return t})||[]},only:function(e){if(!Zd(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};W.Activity=Hw;W.Children=Xw;W.Component=Wr;W.Fragment=kw;W.Profiler=Uw;W.PureComponent=Xd;W.StrictMode=Lw;W.Suspense=Bw;W.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Ct;W.__COMPILER_RUNTIME={__proto__:null,c:function(e){return Ct.H.useMemoCache(e)}};W.cache=function(e){return function(){return e.apply(null,arguments)}};W.cacheSignal=function(){return null};W.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=c0({},e.props),s=e.key;if(t!=null)for(r in t.key!==void 0&&(s=""+t.key),t)!d0.call(t,r)||r==="key"||r==="__self"||r==="__source"||r==="ref"&&t.ref===void 0||(i[r]=t[r]);var r=arguments.length-2;if(r===1)i.children=n;else if(1<r){for(var a=Array(r),l=0;l<r;l++)a[l]=arguments[l+2];i.children=a}return Jd(e.type,s,i)};W.createContext=function(e){return e={$$typeof:zw,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:Pw,_context:e},e};W.createElement=function(e,t,n){var i,s={},r=null;if(t!=null)for(i in t.key!==void 0&&(r=""+t.key),t)d0.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(s[i]=t[i]);var a=arguments.length-2;if(a===1)s.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];s.children=l}if(e&&e.defaultProps)for(i in a=e.defaultProps,a)s[i]===void 0&&(s[i]=a[i]);return Jd(e,r,s)};W.createRef=function(){return{current:null}};W.forwardRef=function(e){return{$$typeof:jw,render:e}};W.isValidElement=Zd;W.lazy=function(e){return{$$typeof:l0,_payload:{_status:-1,_result:e},_init:Yw}};W.memo=function(e,t){return{$$typeof:qw,type:e,compare:t===void 0?null:t}};W.startTransition=function(e){var t=Ct.T,n={};Ct.T=n;try{var i=e(),s=Ct.S;s!==null&&s(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(wf,Gp)}catch(r){Gp(r)}finally{t!==null&&n.types!==null&&(t.types=n.types),Ct.T=t}};W.unstable_useCacheRefresh=function(){return Ct.H.useCacheRefresh()};W.use=function(e){return Ct.H.use(e)};W.useActionState=function(e,t,n){return Ct.H.useActionState(e,t,n)};W.useCallback=function(e,t){return Ct.H.useCallback(e,t)};W.useContext=function(e){return Ct.H.useContext(e)};W.useDebugValue=function(){};W.useDeferredValue=function(e,t){return Ct.H.useDeferredValue(e,t)};W.useEffect=function(e,t){return Ct.H.useEffect(e,t)};W.useEffectEvent=function(e){return Ct.H.useEffectEvent(e)};W.useId=function(){return Ct.H.useId()};W.useImperativeHandle=function(e,t,n){return Ct.H.useImperativeHandle(e,t,n)};W.useInsertionEffect=function(e,t){return Ct.H.useInsertionEffect(e,t)};W.useLayoutEffect=function(e,t){return Ct.H.useLayoutEffect(e,t)};W.useMemo=function(e,t){return Ct.H.useMemo(e,t)};W.useOptimistic=function(e,t){return Ct.H.useOptimistic(e,t)};W.useReducer=function(e,t,n){return Ct.H.useReducer(e,t,n)};W.useRef=function(e){return Ct.H.useRef(e)};W.useState=function(e){return Ct.H.useState(e)};W.useSyncExternalStore=function(e,t,n){return Ct.H.useSyncExternalStore(e,t,n)};W.useTransition=function(){return Ct.H.useTransition()};W.version="19.2.5";o0.exports=W;var et=o0.exports;const $w=s0(et);var m0={exports:{}},dc={},g0={exports:{}},p0={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(M,F){var B=M.length;M.push(F);t:for(;0<B;){var K=B-1>>>1,rt=M[K];if(0<s(rt,F))M[K]=F,M[B]=rt,B=K;else break t}}function n(M){return M.length===0?null:M[0]}function i(M){if(M.length===0)return null;var F=M[0],B=M.pop();if(B!==F){M[0]=B;t:for(var K=0,rt=M.length,ke=rt>>>1;K<ke;){var cn=2*(K+1)-1,fe=M[cn],Se=cn+1,Le=M[Se];if(0>s(fe,B))Se<rt&&0>s(Le,fe)?(M[K]=Le,M[Se]=B,K=Se):(M[K]=fe,M[cn]=B,K=cn);else if(Se<rt&&0>s(Le,B))M[K]=Le,M[Se]=B,K=Se;else break t}}return F}function s(M,F){var B=M.sortIndex-F.sortIndex;return B!==0?B:M.id-F.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var r=performance;e.unstable_now=function(){return r.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var u=[],h=[],d=1,m=null,g=3,T=!1,D=!1,V=!1,P=!1,w=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;function x(M){for(var F=n(h);F!==null;){if(F.callback===null)i(h);else if(F.startTime<=M)i(h),F.sortIndex=F.expirationTime,t(u,F);else break;F=n(h)}}function z(M){if(V=!1,x(M),!D)if(n(u)!==null)D=!0,G||(G=!0,C());else{var F=n(h);F!==null&&Ve(z,F.startTime-M)}}var G=!1,v=-1,p=5,_=-1;function b(){return P?!0:!(e.unstable_now()-_<p)}function I(){if(P=!1,G){var M=e.unstable_now();_=M;var F=!0;try{t:{D=!1,V&&(V=!1,E(v),v=-1),T=!0;var B=g;try{e:{for(x(M),m=n(u);m!==null&&!(m.expirationTime>M&&b());){var K=m.callback;if(typeof K=="function"){m.callback=null,g=m.priorityLevel;var rt=K(m.expirationTime<=M);if(M=e.unstable_now(),typeof rt=="function"){m.callback=rt,x(M),F=!0;break e}m===n(u)&&i(u),x(M)}else i(u);m=n(u)}if(m!==null)F=!0;else{var ke=n(h);ke!==null&&Ve(z,ke.startTime-M),F=!1}}break t}finally{m=null,g=B,T=!1}F=void 0}}finally{F?C():G=!1}}}var C;if(typeof R=="function")C=function(){R(I)};else if(typeof MessageChannel<"u"){var A=new MessageChannel,zt=A.port2;A.port1.onmessage=I,C=function(){zt.postMessage(null)}}else C=function(){w(I,0)};function Ve(M,F){v=w(function(){M(e.unstable_now())},F)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(M){M.callback=null},e.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):p=0<M?Math.floor(1e3/M):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_next=function(M){switch(g){case 1:case 2:case 3:var F=3;break;default:F=g}var B=g;g=F;try{return M()}finally{g=B}},e.unstable_requestPaint=function(){P=!0},e.unstable_runWithPriority=function(M,F){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var B=g;g=M;try{return F()}finally{g=B}},e.unstable_scheduleCallback=function(M,F,B){var K=e.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?K+B:K):B=K,M){case 1:var rt=-1;break;case 2:rt=250;break;case 5:rt=1073741823;break;case 4:rt=1e4;break;default:rt=5e3}return rt=B+rt,M={id:d++,callback:F,priorityLevel:M,startTime:B,expirationTime:rt,sortIndex:-1},B>K?(M.sortIndex=B,t(h,M),n(u)===null&&M===n(h)&&(V?(E(v),v=-1):V=!0,Ve(z,B-K))):(M.sortIndex=rt,t(u,M),D||T||(D=!0,G||(G=!0,C()))),M},e.unstable_shouldYield=b,e.unstable_wrapCallback=function(M){var F=g;return function(){var B=g;g=F;try{return M.apply(this,arguments)}finally{g=B}}}})(p0);g0.exports=p0;var Jw=g0.exports,y0={exports:{}},be={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zw=et;function _0(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function gi(){}var Ee={d:{f:gi,r:function(){throw Error(_0(522))},D:gi,C:gi,L:gi,m:gi,X:gi,S:gi,M:gi},p:0,findDOMNode:null},Ww=Symbol.for("react.portal");function t1(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ww,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}var $a=Zw.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function mc(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}be.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Ee;be.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(_0(299));return t1(e,t,null,n)};be.flushSync=function(e){var t=$a.T,n=Ee.p;try{if($a.T=null,Ee.p=2,e)return e()}finally{$a.T=t,Ee.p=n,Ee.d.f()}};be.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,Ee.d.C(e,t))};be.prefetchDNS=function(e){typeof e=="string"&&Ee.d.D(e)};be.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=mc(n,t.crossOrigin),s=typeof t.integrity=="string"?t.integrity:void 0,r=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?Ee.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:s,fetchPriority:r}):n==="script"&&Ee.d.X(e,{crossOrigin:i,integrity:s,fetchPriority:r,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};be.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=mc(t.as,t.crossOrigin);Ee.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&Ee.d.M(e)};be.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=mc(n,t.crossOrigin);Ee.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};be.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=mc(t.as,t.crossOrigin);Ee.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else Ee.d.m(e)};be.requestFormReset=function(e){Ee.d.r(e)};be.unstable_batchedUpdates=function(e,t){return e(t)};be.useFormState=function(e,t,n){return $a.H.useFormState(e,t,n)};be.useFormStatus=function(){return $a.H.useHostTransitionStatus()};be.version="19.2.5";function v0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(v0)}catch(e){console.error(e)}}v0(),y0.exports=be;var e1=y0.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jt=Jw,T0=et,n1=e1;function k(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function E0(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Po(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function A0(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function b0(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Kp(e){if(Po(e)!==e)throw Error(k(188))}function i1(e){var t=e.alternate;if(!t){if(t=Po(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,i=t;;){var s=n.return;if(s===null)break;var r=s.alternate;if(r===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===r.child){for(r=s.child;r;){if(r===n)return Kp(s),e;if(r===i)return Kp(s),t;r=r.sibling}throw Error(k(188))}if(n.return!==i.return)n=s,i=r;else{for(var a=!1,l=s.child;l;){if(l===n){a=!0,n=s,i=r;break}if(l===i){a=!0,i=s,n=r;break}l=l.sibling}if(!a){for(l=r.child;l;){if(l===n){a=!0,n=r,i=s;break}if(l===i){a=!0,i=r,n=s;break}l=l.sibling}if(!a)throw Error(k(189))}}if(n.alternate!==i)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function S0(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=S0(e),t!==null)return t;e=e.sibling}return null}var Nt=Object.assign,s1=Symbol.for("react.element"),Al=Symbol.for("react.transitional.element"),ja=Symbol.for("react.portal"),lr=Symbol.for("react.fragment"),w0=Symbol.for("react.strict_mode"),If=Symbol.for("react.profiler"),I0=Symbol.for("react.consumer"),Hn=Symbol.for("react.context"),Wd=Symbol.for("react.forward_ref"),Rf=Symbol.for("react.suspense"),Cf=Symbol.for("react.suspense_list"),tm=Symbol.for("react.memo"),yi=Symbol.for("react.lazy"),Nf=Symbol.for("react.activity"),r1=Symbol.for("react.memo_cache_sentinel"),Qp=Symbol.iterator;function xa(e){return e===null||typeof e!="object"?null:(e=Qp&&e[Qp]||e["@@iterator"],typeof e=="function"?e:null)}var a1=Symbol.for("react.client.reference");function Df(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===a1?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case lr:return"Fragment";case If:return"Profiler";case w0:return"StrictMode";case Rf:return"Suspense";case Cf:return"SuspenseList";case Nf:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case ja:return"Portal";case Hn:return e.displayName||"Context";case I0:return(e._context.displayName||"Context")+".Consumer";case Wd:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case tm:return t=e.displayName||null,t!==null?t:Df(e.type)||"Memo";case yi:t=e._payload,e=e._init;try{return Df(e(t))}catch{}}return null}var Ba=Array.isArray,X=T0.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,dt=n1.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,bs={pending:!1,data:null,method:null,action:null},xf=[],ur=-1;function Vn(e){return{current:e}}function ne(e){0>ur||(e.current=xf[ur],xf[ur]=null,ur--)}function At(e,t){ur++,xf[ur]=e.current,e.current=t}var In=Vn(null),po=Vn(null),Mi=Vn(null),gu=Vn(null);function pu(e,t){switch(At(Mi,t),At(po,e),At(In,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Wy(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Wy(t),e=KE(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ne(In),At(In,e)}function kr(){ne(In),ne(po),ne(Mi)}function Of(e){e.memoizedState!==null&&At(gu,e);var t=In.current,n=KE(t,e.type);t!==n&&(At(po,e),At(In,n))}function yu(e){po.current===e&&(ne(In),ne(po)),gu.current===e&&(ne(gu),Ro._currentValue=bs)}var bh,Yp;function ps(e){if(bh===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);bh=t&&t[1]||"",Yp=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+bh+e+Yp}var Sh=!1;function wh(e,t){if(!e||Sh)return"";Sh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var m=function(){throw Error()};if(Object.defineProperty(m.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(m,[])}catch(T){var g=T}Reflect.construct(e,[],m)}else{try{m.call()}catch(T){g=T}e.call(m.prototype)}}else{try{throw Error()}catch(T){g=T}(m=e())&&typeof m.catch=="function"&&m.catch(function(){})}}catch(T){if(T&&g&&typeof T.stack=="string")return[T.stack,g.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=i.DetermineComponentFrameRoot(),a=r[0],l=r[1];if(a&&l){var u=a.split(`
`),h=l.split(`
`);for(s=i=0;i<u.length&&!u[i].includes("DetermineComponentFrameRoot");)i++;for(;s<h.length&&!h[s].includes("DetermineComponentFrameRoot");)s++;if(i===u.length||s===h.length)for(i=u.length-1,s=h.length-1;1<=i&&0<=s&&u[i]!==h[s];)s--;for(;1<=i&&0<=s;i--,s--)if(u[i]!==h[s]){if(i!==1||s!==1)do if(i--,s--,0>s||u[i]!==h[s]){var d=`
`+u[i].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=i&&0<=s);break}}}finally{Sh=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?ps(n):""}function o1(e,t){switch(e.tag){case 26:case 27:case 5:return ps(e.type);case 16:return ps("Lazy");case 13:return e.child!==t&&t!==null?ps("Suspense Fallback"):ps("Suspense");case 19:return ps("SuspenseList");case 0:case 15:return wh(e.type,!1);case 11:return wh(e.type.render,!1);case 1:return wh(e.type,!0);case 31:return ps("Activity");default:return""}}function Xp(e){try{var t="",n=null;do t+=o1(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Mf=Object.prototype.hasOwnProperty,em=Jt.unstable_scheduleCallback,Ih=Jt.unstable_cancelCallback,l1=Jt.unstable_shouldYield,u1=Jt.unstable_requestPaint,He=Jt.unstable_now,c1=Jt.unstable_getCurrentPriorityLevel,R0=Jt.unstable_ImmediatePriority,C0=Jt.unstable_UserBlockingPriority,_u=Jt.unstable_NormalPriority,h1=Jt.unstable_LowPriority,N0=Jt.unstable_IdlePriority,f1=Jt.log,d1=Jt.unstable_setDisableYieldValue,zo=null,Fe=null;function Ri(e){if(typeof f1=="function"&&d1(e),Fe&&typeof Fe.setStrictMode=="function")try{Fe.setStrictMode(zo,e)}catch{}}var Ge=Math.clz32?Math.clz32:p1,m1=Math.log,g1=Math.LN2;function p1(e){return e>>>=0,e===0?32:31-(m1(e)/g1|0)|0}var bl=256,Sl=262144,wl=4194304;function ys(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function gc(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var s=0,r=e.suspendedLanes,a=e.pingedLanes;e=e.warmLanes;var l=i&134217727;return l!==0?(i=l&~r,i!==0?s=ys(i):(a&=l,a!==0?s=ys(a):n||(n=l&~e,n!==0&&(s=ys(n))))):(l=i&~r,l!==0?s=ys(l):a!==0?s=ys(a):n||(n=i&~e,n!==0&&(s=ys(n)))),s===0?0:t!==0&&t!==s&&!(t&r)&&(r=s&-s,n=t&-t,r>=n||r===32&&(n&4194048)!==0)?t:s}function jo(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function y1(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function D0(){var e=wl;return wl<<=1,!(wl&62914560)&&(wl=4194304),e}function Rh(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Bo(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function _1(e,t,n,i,s,r){var a=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var l=e.entanglements,u=e.expirationTimes,h=e.hiddenUpdates;for(n=a&~n;0<n;){var d=31-Ge(n),m=1<<d;l[d]=0,u[d]=-1;var g=h[d];if(g!==null)for(h[d]=null,d=0;d<g.length;d++){var T=g[d];T!==null&&(T.lane&=-536870913)}n&=~m}i!==0&&x0(e,i,0),r!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=r&~(a&~t))}function x0(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Ge(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function O0(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Ge(n),s=1<<i;s&t|e[i]&t&&(e[i]|=t),n&=~s}}function M0(e,t){var n=t&-t;return n=n&42?1:nm(n),n&(e.suspendedLanes|t)?0:n}function nm(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function im(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function V0(){var e=dt.p;return e!==0?e:(e=window.event,e===void 0?32:iA(e.type))}function $p(e,t){var n=dt.p;try{return dt.p=e,t()}finally{dt.p=n}}var as=Math.random().toString(36).slice(2),re="__reactFiber$"+as,Oe="__reactProps$"+as,ta="__reactContainer$"+as,Vf="__reactEvents$"+as,v1="__reactListeners$"+as,T1="__reactHandles$"+as,Jp="__reactResources$"+as,qo="__reactMarker$"+as;function sm(e){delete e[re],delete e[Oe],delete e[Vf],delete e[v1],delete e[T1]}function cr(e){var t=e[re];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ta]||n[re]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=s_(e);e!==null;){if(n=e[re])return n;e=s_(e)}return t}e=n,n=e.parentNode}return null}function ea(e){if(e=e[re]||e[ta]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function qa(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(k(33))}function Er(e){var t=e[Jp];return t||(t=e[Jp]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function ee(e){e[qo]=!0}var k0=new Set,L0={};function Bs(e,t){Lr(e,t),Lr(e+"Capture",t)}function Lr(e,t){for(L0[e]=t,e=0;e<t.length;e++)k0.add(t[e])}var E1=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Zp={},Wp={};function A1(e){return Mf.call(Wp,e)?!0:Mf.call(Zp,e)?!1:E1.test(e)?Wp[e]=!0:(Zp[e]=!0,!1)}function Fl(e,t,n){if(A1(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Il(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Ln(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function Ze(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function U0(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function b1(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var s=i.get,r=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(a){n=""+a,r.call(this,a)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(a){n=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function kf(e){if(!e._valueTracker){var t=U0(e)?"checked":"value";e._valueTracker=b1(e,t,""+e[t])}}function P0(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=U0(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function vu(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var S1=/[\n"\\]/g;function en(e){return e.replace(S1,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Lf(e,t,n,i,s,r,a,l){e.name="",a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"?e.type=a:e.removeAttribute("type"),t!=null?a==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Ze(t)):e.value!==""+Ze(t)&&(e.value=""+Ze(t)):a!=="submit"&&a!=="reset"||e.removeAttribute("value"),t!=null?Uf(e,a,Ze(t)):n!=null?Uf(e,a,Ze(n)):i!=null&&e.removeAttribute("value"),s==null&&r!=null&&(e.defaultChecked=!!r),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"?e.name=""+Ze(l):e.removeAttribute("name")}function z0(e,t,n,i,s,r,a,l){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||n!=null){if(!(r!=="submit"&&r!=="reset"||t!=null)){kf(e);return}n=n!=null?""+Ze(n):"",t=t!=null?""+Ze(t):n,l||t===e.value||(e.value=t),e.defaultValue=t}i=i??s,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=l?e.checked:!!i,e.defaultChecked=!!i,a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(e.name=a),kf(e)}function Uf(e,t,n){t==="number"&&vu(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Ar(e,t,n,i){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&i&&(e[n].defaultSelected=!0)}else{for(n=""+Ze(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function j0(e,t,n){if(t!=null&&(t=""+Ze(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Ze(n):""}function B0(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(k(92));if(Ba(i)){if(1<i.length)throw Error(k(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=Ze(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),kf(e)}function Ur(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var w1=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ty(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||w1.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function q0(e,t,n){if(t!=null&&typeof t!="object")throw Error(k(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var s in t)i=t[s],t.hasOwnProperty(s)&&n[s]!==i&&ty(e,s,i)}else for(var r in t)t.hasOwnProperty(r)&&ty(e,r,t[r])}function rm(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var I1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),R1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Gl(e){return R1.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Fn(){}var Pf=null;function am(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var hr=null,br=null;function ey(e){var t=ea(e);if(t&&(e=t.stateNode)){var n=e[Oe]||null;t:switch(e=t.stateNode,t.type){case"input":if(Lf(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+en(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var s=i[Oe]||null;if(!s)throw Error(k(90));Lf(i,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&P0(i)}break t;case"textarea":j0(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&Ar(e,!!n.multiple,t,!1)}}}var Ch=!1;function H0(e,t,n){if(Ch)return e(t,n);Ch=!0;try{var i=e(t);return i}finally{if(Ch=!1,(hr!==null||br!==null)&&(Rc(),hr&&(t=hr,e=br,br=hr=null,ey(t),e)))for(t=0;t<e.length;t++)ey(e[t])}}function yo(e,t){var n=e.stateNode;if(n===null)return null;var i=n[Oe]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var Jn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zf=!1;if(Jn)try{var Oa={};Object.defineProperty(Oa,"passive",{get:function(){zf=!0}}),window.addEventListener("test",Oa,Oa),window.removeEventListener("test",Oa,Oa)}catch{zf=!1}var Ci=null,om=null,Kl=null;function F0(){if(Kl)return Kl;var e,t=om,n=t.length,i,s="value"in Ci?Ci.value:Ci.textContent,r=s.length;for(e=0;e<n&&t[e]===s[e];e++);var a=n-e;for(i=1;i<=a&&t[n-i]===s[r-i];i++);return Kl=s.slice(e,1<i?1-i:void 0)}function Ql(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Rl(){return!0}function ny(){return!1}function Me(e){function t(n,i,s,r,a){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=r,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(r):r[l]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Rl:ny,this.isPropagationStopped=ny,this}return Nt(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Rl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Rl)},persist:function(){},isPersistent:Rl}),t}var qs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pc=Me(qs),Ho=Nt({},qs,{view:0,detail:0}),C1=Me(Ho),Nh,Dh,Ma,yc=Nt({},Ho,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lm,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ma&&(Ma&&e.type==="mousemove"?(Nh=e.screenX-Ma.screenX,Dh=e.screenY-Ma.screenY):Dh=Nh=0,Ma=e),Nh)},movementY:function(e){return"movementY"in e?e.movementY:Dh}}),iy=Me(yc),N1=Nt({},yc,{dataTransfer:0}),D1=Me(N1),x1=Nt({},Ho,{relatedTarget:0}),xh=Me(x1),O1=Nt({},qs,{animationName:0,elapsedTime:0,pseudoElement:0}),M1=Me(O1),V1=Nt({},qs,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),k1=Me(V1),L1=Nt({},qs,{data:0}),sy=Me(L1),U1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},P1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},z1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function j1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=z1[e])?!!t[e]:!1}function lm(){return j1}var B1=Nt({},Ho,{key:function(e){if(e.key){var t=U1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ql(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?P1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lm,charCode:function(e){return e.type==="keypress"?Ql(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ql(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),q1=Me(B1),H1=Nt({},yc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ry=Me(H1),F1=Nt({},Ho,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lm}),G1=Me(F1),K1=Nt({},qs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Q1=Me(K1),Y1=Nt({},yc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),X1=Me(Y1),$1=Nt({},qs,{newState:0,oldState:0}),J1=Me($1),Z1=[9,13,27,32],um=Jn&&"CompositionEvent"in window,Ja=null;Jn&&"documentMode"in document&&(Ja=document.documentMode);var W1=Jn&&"TextEvent"in window&&!Ja,G0=Jn&&(!um||Ja&&8<Ja&&11>=Ja),ay=" ",oy=!1;function K0(e,t){switch(e){case"keyup":return Z1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Q0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var fr=!1;function tI(e,t){switch(e){case"compositionend":return Q0(t);case"keypress":return t.which!==32?null:(oy=!0,ay);case"textInput":return e=t.data,e===ay&&oy?null:e;default:return null}}function eI(e,t){if(fr)return e==="compositionend"||!um&&K0(e,t)?(e=F0(),Kl=om=Ci=null,fr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return G0&&t.locale!=="ko"?null:t.data;default:return null}}var nI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ly(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!nI[e.type]:t==="textarea"}function Y0(e,t,n,i){hr?br?br.push(i):br=[i]:hr=i,t=Uu(t,"onChange"),0<t.length&&(n=new pc("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var Za=null,_o=null;function iI(e){HE(e,0)}function _c(e){var t=qa(e);if(P0(t))return e}function uy(e,t){if(e==="change")return t}var X0=!1;if(Jn){var Oh;if(Jn){var Mh="oninput"in document;if(!Mh){var cy=document.createElement("div");cy.setAttribute("oninput","return;"),Mh=typeof cy.oninput=="function"}Oh=Mh}else Oh=!1;X0=Oh&&(!document.documentMode||9<document.documentMode)}function hy(){Za&&(Za.detachEvent("onpropertychange",$0),_o=Za=null)}function $0(e){if(e.propertyName==="value"&&_c(_o)){var t=[];Y0(t,_o,e,am(e)),H0(iI,t)}}function sI(e,t,n){e==="focusin"?(hy(),Za=t,_o=n,Za.attachEvent("onpropertychange",$0)):e==="focusout"&&hy()}function rI(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return _c(_o)}function aI(e,t){if(e==="click")return _c(t)}function oI(e,t){if(e==="input"||e==="change")return _c(t)}function lI(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Xe=typeof Object.is=="function"?Object.is:lI;function vo(e,t){if(Xe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!Mf.call(t,s)||!Xe(e[s],t[s]))return!1}return!0}function fy(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function dy(e,t){var n=fy(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=fy(n)}}function J0(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?J0(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Z0(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=vu(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=vu(e.document)}return t}function cm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var uI=Jn&&"documentMode"in document&&11>=document.documentMode,dr=null,jf=null,Wa=null,Bf=!1;function my(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Bf||dr==null||dr!==vu(i)||(i=dr,"selectionStart"in i&&cm(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Wa&&vo(Wa,i)||(Wa=i,i=Uu(jf,"onSelect"),0<i.length&&(t=new pc("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=dr)))}function gs(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var mr={animationend:gs("Animation","AnimationEnd"),animationiteration:gs("Animation","AnimationIteration"),animationstart:gs("Animation","AnimationStart"),transitionrun:gs("Transition","TransitionRun"),transitionstart:gs("Transition","TransitionStart"),transitioncancel:gs("Transition","TransitionCancel"),transitionend:gs("Transition","TransitionEnd")},Vh={},W0={};Jn&&(W0=document.createElement("div").style,"AnimationEvent"in window||(delete mr.animationend.animation,delete mr.animationiteration.animation,delete mr.animationstart.animation),"TransitionEvent"in window||delete mr.transitionend.transition);function Hs(e){if(Vh[e])return Vh[e];if(!mr[e])return e;var t=mr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in W0)return Vh[e]=t[n];return e}var tT=Hs("animationend"),eT=Hs("animationiteration"),nT=Hs("animationstart"),cI=Hs("transitionrun"),hI=Hs("transitionstart"),fI=Hs("transitioncancel"),iT=Hs("transitionend"),sT=new Map,qf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");qf.push("scrollEnd");function _n(e,t){sT.set(e,t),Bs(t,[e])}var Tu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Je=[],gr=0,hm=0;function vc(){for(var e=gr,t=hm=gr=0;t<e;){var n=Je[t];Je[t++]=null;var i=Je[t];Je[t++]=null;var s=Je[t];Je[t++]=null;var r=Je[t];if(Je[t++]=null,i!==null&&s!==null){var a=i.pending;a===null?s.next=s:(s.next=a.next,a.next=s),i.pending=s}r!==0&&rT(n,s,r)}}function Tc(e,t,n,i){Je[gr++]=e,Je[gr++]=t,Je[gr++]=n,Je[gr++]=i,hm|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function fm(e,t,n,i){return Tc(e,t,n,i),Eu(e)}function Fs(e,t){return Tc(e,null,null,t),Eu(e)}function rT(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var s=!1,r=e.return;r!==null;)r.childLanes|=n,i=r.alternate,i!==null&&(i.childLanes|=n),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(s=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,s&&t!==null&&(s=31-Ge(n),e=r.hiddenUpdates,i=e[s],i===null?e[s]=[t]:i.push(t),t.lane=n|536870912),r):null}function Eu(e){if(50<lo)throw lo=0,ud=null,Error(k(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var pr={};function dI(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function je(e,t,n,i){return new dI(e,t,n,i)}function dm(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Yn(e,t){var n=e.alternate;return n===null?(n=je(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function aT(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Yl(e,t,n,i,s,r){var a=0;if(i=e,typeof e=="function")dm(e)&&(a=1);else if(typeof e=="string")a=_R(e,n,In.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case Nf:return e=je(31,n,t,s),e.elementType=Nf,e.lanes=r,e;case lr:return Ss(n.children,s,r,t);case w0:a=8,s|=24;break;case If:return e=je(12,n,t,s|2),e.elementType=If,e.lanes=r,e;case Rf:return e=je(13,n,t,s),e.elementType=Rf,e.lanes=r,e;case Cf:return e=je(19,n,t,s),e.elementType=Cf,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Hn:a=10;break t;case I0:a=9;break t;case Wd:a=11;break t;case tm:a=14;break t;case yi:a=16,i=null;break t}a=29,n=Error(k(130,e===null?"null":typeof e,"")),i=null}return t=je(a,n,t,s),t.elementType=e,t.type=i,t.lanes=r,t}function Ss(e,t,n,i){return e=je(7,e,i,t),e.lanes=n,e}function kh(e,t,n){return e=je(6,e,null,t),e.lanes=n,e}function oT(e){var t=je(18,null,null,0);return t.stateNode=e,t}function Lh(e,t,n){return t=je(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var gy=new WeakMap;function nn(e,t){if(typeof e=="object"&&e!==null){var n=gy.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Xp(t)},gy.set(e,t),t)}return{value:e,source:t,stack:Xp(t)}}var yr=[],_r=0,Au=null,To=0,We=[],tn=0,Yi=null,bn=1,Sn="";function Bn(e,t){yr[_r++]=To,yr[_r++]=Au,Au=e,To=t}function lT(e,t,n){We[tn++]=bn,We[tn++]=Sn,We[tn++]=Yi,Yi=e;var i=bn;e=Sn;var s=32-Ge(i)-1;i&=~(1<<s),n+=1;var r=32-Ge(t)+s;if(30<r){var a=s-s%5;r=(i&(1<<a)-1).toString(32),i>>=a,s-=a,bn=1<<32-Ge(t)+s|n<<s|i,Sn=r+e}else bn=1<<r|n<<s|i,Sn=e}function mm(e){e.return!==null&&(Bn(e,1),lT(e,1,0))}function gm(e){for(;e===Au;)Au=yr[--_r],yr[_r]=null,To=yr[--_r],yr[_r]=null;for(;e===Yi;)Yi=We[--tn],We[tn]=null,Sn=We[--tn],We[tn]=null,bn=We[--tn],We[tn]=null}function uT(e,t){We[tn++]=bn,We[tn++]=Sn,We[tn++]=Yi,bn=t.id,Sn=t.overflow,Yi=e}var ae=null,It=null,ct=!1,Vi=null,sn=!1,Hf=Error(k(519));function Xi(e){var t=Error(k(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Eo(nn(t,e)),Hf}function py(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[re]=e,t[Oe]=i,n){case"dialog":it("cancel",t),it("close",t);break;case"iframe":case"object":case"embed":it("load",t);break;case"video":case"audio":for(n=0;n<wo.length;n++)it(wo[n],t);break;case"source":it("error",t);break;case"img":case"image":case"link":it("error",t),it("load",t);break;case"details":it("toggle",t);break;case"input":it("invalid",t),z0(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":it("invalid",t);break;case"textarea":it("invalid",t),B0(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||GE(t.textContent,n)?(i.popover!=null&&(it("beforetoggle",t),it("toggle",t)),i.onScroll!=null&&it("scroll",t),i.onScrollEnd!=null&&it("scrollend",t),i.onClick!=null&&(t.onclick=Fn),t=!0):t=!1,t||Xi(e,!0)}function yy(e){for(ae=e.return;ae;)switch(ae.tag){case 5:case 31:case 13:sn=!1;return;case 27:case 3:sn=!0;return;default:ae=ae.return}}function Ws(e){if(e!==ae)return!1;if(!ct)return yy(e),ct=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||md(e.type,e.memoizedProps)),n=!n),n&&It&&Xi(e),yy(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));It=i_(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));It=i_(e)}else t===27?(t=It,os(e.type)?(e=_d,_d=null,It=e):It=t):It=ae?on(e.stateNode.nextSibling):null;return!0}function Ds(){It=ae=null,ct=!1}function Uh(){var e=Vi;return e!==null&&(Ce===null?Ce=e:Ce.push.apply(Ce,e),Vi=null),e}function Eo(e){Vi===null?Vi=[e]:Vi.push(e)}var Ff=Vn(null),Gs=null,Gn=null;function vi(e,t,n){At(Ff,t._currentValue),t._currentValue=n}function Xn(e){e._currentValue=Ff.current,ne(Ff)}function Gf(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Kf(e,t,n,i){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var r=s.dependencies;if(r!==null){var a=s.child;r=r.firstContext;t:for(;r!==null;){var l=r;r=s;for(var u=0;u<t.length;u++)if(l.context===t[u]){r.lanes|=n,l=r.alternate,l!==null&&(l.lanes|=n),Gf(r.return,n,e),i||(a=null);break t}r=l.next}}else if(s.tag===18){if(a=s.return,a===null)throw Error(k(341));a.lanes|=n,r=a.alternate,r!==null&&(r.lanes|=n),Gf(a,n,e),a=null}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}}function na(e,t,n,i){e=null;for(var s=t,r=!1;s!==null;){if(!r){if(s.flags&524288)r=!0;else if(s.flags&262144)break}if(s.tag===10){var a=s.alternate;if(a===null)throw Error(k(387));if(a=a.memoizedProps,a!==null){var l=s.type;Xe(s.pendingProps.value,a.value)||(e!==null?e.push(l):e=[l])}}else if(s===gu.current){if(a=s.alternate,a===null)throw Error(k(387));a.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(Ro):e=[Ro])}s=s.return}e!==null&&Kf(t,e,n,i),t.flags|=262144}function bu(e){for(e=e.firstContext;e!==null;){if(!Xe(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function xs(e){Gs=e,Gn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function le(e){return cT(Gs,e)}function Cl(e,t){return Gs===null&&xs(e),cT(e,t)}function cT(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Gn===null){if(e===null)throw Error(k(308));Gn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Gn=Gn.next=t;return n}var mI=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},gI=Jt.unstable_scheduleCallback,pI=Jt.unstable_NormalPriority,Ht={$$typeof:Hn,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function pm(){return{controller:new mI,data:new Map,refCount:0}}function Fo(e){e.refCount--,e.refCount===0&&gI(pI,function(){e.controller.abort()})}var to=null,Qf=0,Pr=0,Sr=null;function yI(e,t){if(to===null){var n=to=[];Qf=0,Pr=Bm(),Sr={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Qf++,t.then(_y,_y),t}function _y(){if(--Qf===0&&to!==null){Sr!==null&&(Sr.status="fulfilled");var e=to;to=null,Pr=0,Sr=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function _I(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(s){n.push(s)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var s=0;s<n.length;s++)(0,n[s])(t)},function(s){for(i.status="rejected",i.reason=s,s=0;s<n.length;s++)(0,n[s])(void 0)}),i}var vy=X.S;X.S=function(e,t){SE=He(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&yI(e,t),vy!==null&&vy(e,t)};var ws=Vn(null);function ym(){var e=ws.current;return e!==null?e:Tt.pooledCache}function Xl(e,t){t===null?At(ws,ws.current):At(ws,t.pool)}function hT(){var e=ym();return e===null?null:{parent:Ht._currentValue,pool:e}}var ia=Error(k(460)),_m=Error(k(474)),Ec=Error(k(542)),Su={then:function(){}};function Ty(e){return e=e.status,e==="fulfilled"||e==="rejected"}function fT(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Fn,Fn),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Ay(e),e;default:if(typeof t.status=="string")t.then(Fn,Fn);else{if(e=Tt,e!==null&&100<e.shellSuspendCounter)throw Error(k(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=i}},function(i){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Ay(e),e}throw Is=t,ia}}function _s(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Is=n,ia):n}}var Is=null;function Ey(){if(Is===null)throw Error(k(459));var e=Is;return Is=null,e}function Ay(e){if(e===ia||e===Ec)throw Error(k(483))}var wr=null,Ao=0;function Nl(e){var t=Ao;return Ao+=1,wr===null&&(wr=[]),fT(wr,e,t)}function Va(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Dl(e,t){throw t.$$typeof===s1?Error(k(525)):(e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function dT(e){function t(w,E){if(e){var R=w.deletions;R===null?(w.deletions=[E],w.flags|=16):R.push(E)}}function n(w,E){if(!e)return null;for(;E!==null;)t(w,E),E=E.sibling;return null}function i(w){for(var E=new Map;w!==null;)w.key!==null?E.set(w.key,w):E.set(w.index,w),w=w.sibling;return E}function s(w,E){return w=Yn(w,E),w.index=0,w.sibling=null,w}function r(w,E,R){return w.index=R,e?(R=w.alternate,R!==null?(R=R.index,R<E?(w.flags|=67108866,E):R):(w.flags|=67108866,E)):(w.flags|=1048576,E)}function a(w){return e&&w.alternate===null&&(w.flags|=67108866),w}function l(w,E,R,x){return E===null||E.tag!==6?(E=kh(R,w.mode,x),E.return=w,E):(E=s(E,R),E.return=w,E)}function u(w,E,R,x){var z=R.type;return z===lr?d(w,E,R.props.children,x,R.key):E!==null&&(E.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===yi&&_s(z)===E.type)?(E=s(E,R.props),Va(E,R),E.return=w,E):(E=Yl(R.type,R.key,R.props,null,w.mode,x),Va(E,R),E.return=w,E)}function h(w,E,R,x){return E===null||E.tag!==4||E.stateNode.containerInfo!==R.containerInfo||E.stateNode.implementation!==R.implementation?(E=Lh(R,w.mode,x),E.return=w,E):(E=s(E,R.children||[]),E.return=w,E)}function d(w,E,R,x,z){return E===null||E.tag!==7?(E=Ss(R,w.mode,x,z),E.return=w,E):(E=s(E,R),E.return=w,E)}function m(w,E,R){if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return E=kh(""+E,w.mode,R),E.return=w,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Al:return R=Yl(E.type,E.key,E.props,null,w.mode,R),Va(R,E),R.return=w,R;case ja:return E=Lh(E,w.mode,R),E.return=w,E;case yi:return E=_s(E),m(w,E,R)}if(Ba(E)||xa(E))return E=Ss(E,w.mode,R,null),E.return=w,E;if(typeof E.then=="function")return m(w,Nl(E),R);if(E.$$typeof===Hn)return m(w,Cl(w,E),R);Dl(w,E)}return null}function g(w,E,R,x){var z=E!==null?E.key:null;if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return z!==null?null:l(w,E,""+R,x);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case Al:return R.key===z?u(w,E,R,x):null;case ja:return R.key===z?h(w,E,R,x):null;case yi:return R=_s(R),g(w,E,R,x)}if(Ba(R)||xa(R))return z!==null?null:d(w,E,R,x,null);if(typeof R.then=="function")return g(w,E,Nl(R),x);if(R.$$typeof===Hn)return g(w,E,Cl(w,R),x);Dl(w,R)}return null}function T(w,E,R,x,z){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return w=w.get(R)||null,l(E,w,""+x,z);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Al:return w=w.get(x.key===null?R:x.key)||null,u(E,w,x,z);case ja:return w=w.get(x.key===null?R:x.key)||null,h(E,w,x,z);case yi:return x=_s(x),T(w,E,R,x,z)}if(Ba(x)||xa(x))return w=w.get(R)||null,d(E,w,x,z,null);if(typeof x.then=="function")return T(w,E,R,Nl(x),z);if(x.$$typeof===Hn)return T(w,E,R,Cl(E,x),z);Dl(E,x)}return null}function D(w,E,R,x){for(var z=null,G=null,v=E,p=E=0,_=null;v!==null&&p<R.length;p++){v.index>p?(_=v,v=null):_=v.sibling;var b=g(w,v,R[p],x);if(b===null){v===null&&(v=_);break}e&&v&&b.alternate===null&&t(w,v),E=r(b,E,p),G===null?z=b:G.sibling=b,G=b,v=_}if(p===R.length)return n(w,v),ct&&Bn(w,p),z;if(v===null){for(;p<R.length;p++)v=m(w,R[p],x),v!==null&&(E=r(v,E,p),G===null?z=v:G.sibling=v,G=v);return ct&&Bn(w,p),z}for(v=i(v);p<R.length;p++)_=T(v,w,p,R[p],x),_!==null&&(e&&_.alternate!==null&&v.delete(_.key===null?p:_.key),E=r(_,E,p),G===null?z=_:G.sibling=_,G=_);return e&&v.forEach(function(I){return t(w,I)}),ct&&Bn(w,p),z}function V(w,E,R,x){if(R==null)throw Error(k(151));for(var z=null,G=null,v=E,p=E=0,_=null,b=R.next();v!==null&&!b.done;p++,b=R.next()){v.index>p?(_=v,v=null):_=v.sibling;var I=g(w,v,b.value,x);if(I===null){v===null&&(v=_);break}e&&v&&I.alternate===null&&t(w,v),E=r(I,E,p),G===null?z=I:G.sibling=I,G=I,v=_}if(b.done)return n(w,v),ct&&Bn(w,p),z;if(v===null){for(;!b.done;p++,b=R.next())b=m(w,b.value,x),b!==null&&(E=r(b,E,p),G===null?z=b:G.sibling=b,G=b);return ct&&Bn(w,p),z}for(v=i(v);!b.done;p++,b=R.next())b=T(v,w,p,b.value,x),b!==null&&(e&&b.alternate!==null&&v.delete(b.key===null?p:b.key),E=r(b,E,p),G===null?z=b:G.sibling=b,G=b);return e&&v.forEach(function(C){return t(w,C)}),ct&&Bn(w,p),z}function P(w,E,R,x){if(typeof R=="object"&&R!==null&&R.type===lr&&R.key===null&&(R=R.props.children),typeof R=="object"&&R!==null){switch(R.$$typeof){case Al:t:{for(var z=R.key;E!==null;){if(E.key===z){if(z=R.type,z===lr){if(E.tag===7){n(w,E.sibling),x=s(E,R.props.children),x.return=w,w=x;break t}}else if(E.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===yi&&_s(z)===E.type){n(w,E.sibling),x=s(E,R.props),Va(x,R),x.return=w,w=x;break t}n(w,E);break}else t(w,E);E=E.sibling}R.type===lr?(x=Ss(R.props.children,w.mode,x,R.key),x.return=w,w=x):(x=Yl(R.type,R.key,R.props,null,w.mode,x),Va(x,R),x.return=w,w=x)}return a(w);case ja:t:{for(z=R.key;E!==null;){if(E.key===z)if(E.tag===4&&E.stateNode.containerInfo===R.containerInfo&&E.stateNode.implementation===R.implementation){n(w,E.sibling),x=s(E,R.children||[]),x.return=w,w=x;break t}else{n(w,E);break}else t(w,E);E=E.sibling}x=Lh(R,w.mode,x),x.return=w,w=x}return a(w);case yi:return R=_s(R),P(w,E,R,x)}if(Ba(R))return D(w,E,R,x);if(xa(R)){if(z=xa(R),typeof z!="function")throw Error(k(150));return R=z.call(R),V(w,E,R,x)}if(typeof R.then=="function")return P(w,E,Nl(R),x);if(R.$$typeof===Hn)return P(w,E,Cl(w,R),x);Dl(w,R)}return typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint"?(R=""+R,E!==null&&E.tag===6?(n(w,E.sibling),x=s(E,R),x.return=w,w=x):(n(w,E),x=kh(R,w.mode,x),x.return=w,w=x),a(w)):n(w,E)}return function(w,E,R,x){try{Ao=0;var z=P(w,E,R,x);return wr=null,z}catch(v){if(v===ia||v===Ec)throw v;var G=je(29,v,null,w.mode);return G.lanes=x,G.return=w,G}finally{}}}var Os=dT(!0),mT=dT(!1),_i=!1;function vm(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Yf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ki(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Li(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,ft&2){var s=i.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),i.pending=t,t=Eu(e),rT(e,null,n),t}return Tc(e,i,t,n),Eu(e)}function eo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,O0(e,n)}}function Ph(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var a={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};r===null?s=r=a:r=r.next=a,n=n.next}while(n!==null);r===null?s=r=t:r=r.next=t}else s=r=t;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:r,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Xf=!1;function no(){if(Xf){var e=Sr;if(e!==null)throw e}}function io(e,t,n,i){Xf=!1;var s=e.updateQueue;_i=!1;var r=s.firstBaseUpdate,a=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var u=l,h=u.next;u.next=null,a===null?r=h:a.next=h,a=u;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==a&&(l===null?d.firstBaseUpdate=h:l.next=h,d.lastBaseUpdate=u))}if(r!==null){var m=s.baseState;a=0,d=h=u=null,l=r;do{var g=l.lane&-536870913,T=g!==l.lane;if(T?(ut&g)===g:(i&g)===g){g!==0&&g===Pr&&(Xf=!0),d!==null&&(d=d.next={lane:0,tag:l.tag,payload:l.payload,callback:null,next:null});t:{var D=e,V=l;g=t;var P=n;switch(V.tag){case 1:if(D=V.payload,typeof D=="function"){m=D.call(P,m,g);break t}m=D;break t;case 3:D.flags=D.flags&-65537|128;case 0:if(D=V.payload,g=typeof D=="function"?D.call(P,m,g):D,g==null)break t;m=Nt({},m,g);break t;case 2:_i=!0}}g=l.callback,g!==null&&(e.flags|=64,T&&(e.flags|=8192),T=s.callbacks,T===null?s.callbacks=[g]:T.push(g))}else T={lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(h=d=T,u=m):d=d.next=T,a|=g;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;T=l,l=T.next,T.next=null,s.lastBaseUpdate=T,s.shared.pending=null}}while(!0);d===null&&(u=m),s.baseState=u,s.firstBaseUpdate=h,s.lastBaseUpdate=d,r===null&&(s.shared.lanes=0),Ji|=a,e.lanes=a,e.memoizedState=m}}function gT(e,t){if(typeof e!="function")throw Error(k(191,e));e.call(t)}function pT(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)gT(n[e],t)}var zr=Vn(null),wu=Vn(0);function by(e,t){e=ei,At(wu,e),At(zr,t),ei=e|t.baseLanes}function $f(){At(wu,ei),At(zr,zr.current)}function Tm(){ei=wu.current,ne(zr),ne(wu)}var $e=Vn(null),an=null;function Ti(e){var t=e.alternate;At(Lt,Lt.current&1),At($e,e),an===null&&(t===null||zr.current!==null||t.memoizedState!==null)&&(an=e)}function Jf(e){At(Lt,Lt.current),At($e,e),an===null&&(an=e)}function yT(e){e.tag===22?(At(Lt,Lt.current),At($e,e),an===null&&(an=e)):Ei()}function Ei(){At(Lt,Lt.current),At($e,$e.current)}function ze(e){ne($e),an===e&&(an=null),ne(Lt)}var Lt=Vn(0);function Iu(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||pd(n)||yd(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Zn=0,tt=null,_t=null,Bt=null,Ru=!1,Ir=!1,Ms=!1,Cu=0,bo=0,Rr=null,vI=0;function Mt(){throw Error(k(321))}function Em(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Xe(e[n],t[n]))return!1;return!0}function Am(e,t,n,i,s,r){return Zn=r,tt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,X.H=e===null||e.memoizedState===null?YT:Mm,Ms=!1,r=n(i,s),Ms=!1,Ir&&(r=vT(t,n,i,s)),_T(e),r}function _T(e){X.H=So;var t=_t!==null&&_t.next!==null;if(Zn=0,Bt=_t=tt=null,Ru=!1,bo=0,Rr=null,t)throw Error(k(300));e===null||Gt||(e=e.dependencies,e!==null&&bu(e)&&(Gt=!0))}function vT(e,t,n,i){tt=e;var s=0;do{if(Ir&&(Rr=null),bo=0,Ir=!1,25<=s)throw Error(k(301));if(s+=1,Bt=_t=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}X.H=XT,r=t(n,i)}while(Ir);return r}function TI(){var e=X.H,t=e.useState()[0];return t=typeof t.then=="function"?Go(t):t,e=e.useState()[0],(_t!==null?_t.memoizedState:null)!==e&&(tt.flags|=1024),t}function bm(){var e=Cu!==0;return Cu=0,e}function Sm(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function wm(e){if(Ru){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Ru=!1}Zn=0,Bt=_t=tt=null,Ir=!1,bo=Cu=0,Rr=null}function Te(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Bt===null?tt.memoizedState=Bt=e:Bt=Bt.next=e,Bt}function Ut(){if(_t===null){var e=tt.alternate;e=e!==null?e.memoizedState:null}else e=_t.next;var t=Bt===null?tt.memoizedState:Bt.next;if(t!==null)Bt=t,_t=e;else{if(e===null)throw tt.alternate===null?Error(k(467)):Error(k(310));_t=e,e={memoizedState:_t.memoizedState,baseState:_t.baseState,baseQueue:_t.baseQueue,queue:_t.queue,next:null},Bt===null?tt.memoizedState=Bt=e:Bt=Bt.next=e}return Bt}function Ac(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Go(e){var t=bo;return bo+=1,Rr===null&&(Rr=[]),e=fT(Rr,e,t),t=tt,(Bt===null?t.memoizedState:Bt.next)===null&&(t=t.alternate,X.H=t===null||t.memoizedState===null?YT:Mm),e}function bc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Go(e);if(e.$$typeof===Hn)return le(e)}throw Error(k(438,String(e)))}function Im(e){var t=null,n=tt.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=tt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Ac(),tt.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=r1;return t.index++,n}function Wn(e,t){return typeof t=="function"?t(e):t}function $l(e){var t=Ut();return Rm(t,_t,e)}function Rm(e,t,n){var i=e.queue;if(i===null)throw Error(k(311));i.lastRenderedReducer=n;var s=e.baseQueue,r=i.pending;if(r!==null){if(s!==null){var a=s.next;s.next=r.next,r.next=a}t.baseQueue=s=r,i.pending=null}if(r=e.baseState,s===null)e.memoizedState=r;else{t=s.next;var l=a=null,u=null,h=t,d=!1;do{var m=h.lane&-536870913;if(m!==h.lane?(ut&m)===m:(Zn&m)===m){var g=h.revertLane;if(g===0)u!==null&&(u=u.next={lane:0,revertLane:0,gesture:null,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),m===Pr&&(d=!0);else if((Zn&g)===g){h=h.next,g===Pr&&(d=!0);continue}else m={lane:0,revertLane:h.revertLane,gesture:null,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null},u===null?(l=u=m,a=r):u=u.next=m,tt.lanes|=g,Ji|=g;m=h.action,Ms&&n(r,m),r=h.hasEagerState?h.eagerState:n(r,m)}else g={lane:m,revertLane:h.revertLane,gesture:h.gesture,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null},u===null?(l=u=g,a=r):u=u.next=g,tt.lanes|=m,Ji|=m;h=h.next}while(h!==null&&h!==t);if(u===null?a=r:u.next=l,!Xe(r,e.memoizedState)&&(Gt=!0,d&&(n=Sr,n!==null)))throw n;e.memoizedState=r,e.baseState=a,e.baseQueue=u,i.lastRenderedState=r}return s===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function zh(e){var t=Ut(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var i=n.dispatch,s=n.pending,r=t.memoizedState;if(s!==null){n.pending=null;var a=s=s.next;do r=e(r,a.action),a=a.next;while(a!==s);Xe(r,t.memoizedState)||(Gt=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),n.lastRenderedState=r}return[r,i]}function TT(e,t,n){var i=tt,s=Ut(),r=ct;if(r){if(n===void 0)throw Error(k(407));n=n()}else n=t();var a=!Xe((_t||s).memoizedState,n);if(a&&(s.memoizedState=n,Gt=!0),s=s.queue,Cm(bT.bind(null,i,s,e),[e]),s.getSnapshot!==t||a||Bt!==null&&Bt.memoizedState.tag&1){if(i.flags|=2048,jr(9,{destroy:void 0},AT.bind(null,i,s,n,t),null),Tt===null)throw Error(k(349));r||Zn&127||ET(i,t,n)}return n}function ET(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=tt.updateQueue,t===null?(t=Ac(),tt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function AT(e,t,n,i){t.value=n,t.getSnapshot=i,ST(t)&&wT(e)}function bT(e,t,n){return n(function(){ST(t)&&wT(e)})}function ST(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Xe(e,n)}catch{return!0}}function wT(e){var t=Fs(e,2);t!==null&&xe(t,e,2)}function Zf(e){var t=Te();if(typeof e=="function"){var n=e;if(e=n(),Ms){Ri(!0);try{n()}finally{Ri(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wn,lastRenderedState:e},t}function IT(e,t,n,i){return e.baseState=n,Rm(e,_t,typeof i=="function"?i:Wn)}function EI(e,t,n,i,s){if(wc(e))throw Error(k(485));if(e=t.action,e!==null){var r={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(a){r.listeners.push(a)}};X.T!==null?n(!0):r.isTransition=!1,i(r),n=t.pending,n===null?(r.next=t.pending=r,RT(t,r)):(r.next=n.next,t.pending=n.next=r)}}function RT(e,t){var n=t.action,i=t.payload,s=e.state;if(t.isTransition){var r=X.T,a={};X.T=a;try{var l=n(s,i),u=X.S;u!==null&&u(a,l),Sy(e,t,l)}catch(h){Wf(e,t,h)}finally{r!==null&&a.types!==null&&(r.types=a.types),X.T=r}}else try{r=n(s,i),Sy(e,t,r)}catch(h){Wf(e,t,h)}}function Sy(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){wy(e,t,i)},function(i){return Wf(e,t,i)}):wy(e,t,n)}function wy(e,t,n){t.status="fulfilled",t.value=n,CT(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,RT(e,n)))}function Wf(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,CT(t),t=t.next;while(t!==i)}e.action=null}function CT(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function NT(e,t){return t}function Iy(e,t){if(ct){var n=Tt.formState;if(n!==null){t:{var i=tt;if(ct){if(It){e:{for(var s=It,r=sn;s.nodeType!==8;){if(!r){s=null;break e}if(s=on(s.nextSibling),s===null){s=null;break e}}r=s.data,s=r==="F!"||r==="F"?s:null}if(s){It=on(s.nextSibling),i=s.data==="F!";break t}}Xi(i)}i=!1}i&&(t=n[0])}}return n=Te(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:NT,lastRenderedState:t},n.queue=i,n=GT.bind(null,tt,i),i.dispatch=n,i=Zf(!1),r=Om.bind(null,tt,!1,i.queue),i=Te(),s={state:t,dispatch:null,action:e,pending:null},i.queue=s,n=EI.bind(null,tt,s,r,n),s.dispatch=n,i.memoizedState=e,[t,n,!1]}function Ry(e){var t=Ut();return DT(t,_t,e)}function DT(e,t,n){if(t=Rm(e,t,NT)[0],e=$l(Wn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Go(t)}catch(a){throw a===ia?Ec:a}else i=t;t=Ut();var s=t.queue,r=s.dispatch;return n!==t.memoizedState&&(tt.flags|=2048,jr(9,{destroy:void 0},AI.bind(null,s,n),null)),[i,r,e]}function AI(e,t){e.action=t}function Cy(e){var t=Ut(),n=_t;if(n!==null)return DT(t,n,e);Ut(),t=t.memoizedState,n=Ut();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function jr(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=tt.updateQueue,t===null&&(t=Ac(),tt.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function xT(){return Ut().memoizedState}function Jl(e,t,n,i){var s=Te();tt.flags|=e,s.memoizedState=jr(1|t,{destroy:void 0},n,i===void 0?null:i)}function Sc(e,t,n,i){var s=Ut();i=i===void 0?null:i;var r=s.memoizedState.inst;_t!==null&&i!==null&&Em(i,_t.memoizedState.deps)?s.memoizedState=jr(t,r,n,i):(tt.flags|=e,s.memoizedState=jr(1|t,r,n,i))}function Ny(e,t){Jl(8390656,8,e,t)}function Cm(e,t){Sc(2048,8,e,t)}function bI(e){tt.flags|=4;var t=tt.updateQueue;if(t===null)t=Ac(),tt.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function OT(e){var t=Ut().memoizedState;return bI({ref:t,nextImpl:e}),function(){if(ft&2)throw Error(k(440));return t.impl.apply(void 0,arguments)}}function MT(e,t){return Sc(4,2,e,t)}function VT(e,t){return Sc(4,4,e,t)}function kT(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function LT(e,t,n){n=n!=null?n.concat([e]):null,Sc(4,4,kT.bind(null,t,e),n)}function Nm(){}function UT(e,t){var n=Ut();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&Em(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function PT(e,t){var n=Ut();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&Em(t,i[1]))return i[0];if(i=e(),Ms){Ri(!0);try{e()}finally{Ri(!1)}}return n.memoizedState=[i,t],i}function Dm(e,t,n){return n===void 0||Zn&1073741824&&!(ut&261930)?e.memoizedState=t:(e.memoizedState=n,e=IE(),tt.lanes|=e,Ji|=e,n)}function zT(e,t,n,i){return Xe(n,t)?n:zr.current!==null?(e=Dm(e,n,i),Xe(e,t)||(Gt=!0),e):!(Zn&42)||Zn&1073741824&&!(ut&261930)?(Gt=!0,e.memoizedState=n):(e=IE(),tt.lanes|=e,Ji|=e,t)}function jT(e,t,n,i,s){var r=dt.p;dt.p=r!==0&&8>r?r:8;var a=X.T,l={};X.T=l,Om(e,!1,t,n);try{var u=s(),h=X.S;if(h!==null&&h(l,u),u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=_I(u,i);so(e,t,d,Ke(e))}else so(e,t,i,Ke(e))}catch(m){so(e,t,{then:function(){},status:"rejected",reason:m},Ke())}finally{dt.p=r,a!==null&&l.types!==null&&(a.types=l.types),X.T=a}}function SI(){}function td(e,t,n,i){if(e.tag!==5)throw Error(k(476));var s=BT(e).queue;jT(e,s,t,bs,n===null?SI:function(){return qT(e),n(i)})}function BT(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:bs,baseState:bs,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wn,lastRenderedState:bs},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function qT(e){var t=BT(e);t.next===null&&(t=e.alternate.memoizedState),so(e,t.next.queue,{},Ke())}function xm(){return le(Ro)}function HT(){return Ut().memoizedState}function FT(){return Ut().memoizedState}function wI(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Ke();e=ki(n);var i=Li(t,e,n);i!==null&&(xe(i,t,n),eo(i,t,n)),t={cache:pm()},e.payload=t;return}t=t.return}}function II(e,t,n){var i=Ke();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},wc(e)?KT(t,n):(n=fm(e,t,n,i),n!==null&&(xe(n,e,i),QT(n,t,i)))}function GT(e,t,n){var i=Ke();so(e,t,n,i)}function so(e,t,n,i){var s={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(wc(e))KT(t,s);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var a=t.lastRenderedState,l=r(a,n);if(s.hasEagerState=!0,s.eagerState=l,Xe(l,a))return Tc(e,t,s,0),Tt===null&&vc(),!1}catch{}finally{}if(n=fm(e,t,s,i),n!==null)return xe(n,e,i),QT(n,t,i),!0}return!1}function Om(e,t,n,i){if(i={lane:2,revertLane:Bm(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},wc(e)){if(t)throw Error(k(479))}else t=fm(e,n,i,2),t!==null&&xe(t,e,2)}function wc(e){var t=e.alternate;return e===tt||t!==null&&t===tt}function KT(e,t){Ir=Ru=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function QT(e,t,n){if(n&4194048){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,O0(e,n)}}var So={readContext:le,use:bc,useCallback:Mt,useContext:Mt,useEffect:Mt,useImperativeHandle:Mt,useLayoutEffect:Mt,useInsertionEffect:Mt,useMemo:Mt,useReducer:Mt,useRef:Mt,useState:Mt,useDebugValue:Mt,useDeferredValue:Mt,useTransition:Mt,useSyncExternalStore:Mt,useId:Mt,useHostTransitionStatus:Mt,useFormState:Mt,useActionState:Mt,useOptimistic:Mt,useMemoCache:Mt,useCacheRefresh:Mt};So.useEffectEvent=Mt;var YT={readContext:le,use:bc,useCallback:function(e,t){return Te().memoizedState=[e,t===void 0?null:t],e},useContext:le,useEffect:Ny,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Jl(4194308,4,kT.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Jl(4194308,4,e,t)},useInsertionEffect:function(e,t){Jl(4,2,e,t)},useMemo:function(e,t){var n=Te();t=t===void 0?null:t;var i=e();if(Ms){Ri(!0);try{e()}finally{Ri(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=Te();if(n!==void 0){var s=n(t);if(Ms){Ri(!0);try{n(t)}finally{Ri(!1)}}}else s=t;return i.memoizedState=i.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},i.queue=e,e=e.dispatch=II.bind(null,tt,e),[i.memoizedState,e]},useRef:function(e){var t=Te();return e={current:e},t.memoizedState=e},useState:function(e){e=Zf(e);var t=e.queue,n=GT.bind(null,tt,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Nm,useDeferredValue:function(e,t){var n=Te();return Dm(n,e,t)},useTransition:function(){var e=Zf(!1);return e=jT.bind(null,tt,e.queue,!0,!1),Te().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=tt,s=Te();if(ct){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),Tt===null)throw Error(k(349));ut&127||ET(i,t,n)}s.memoizedState=n;var r={value:n,getSnapshot:t};return s.queue=r,Ny(bT.bind(null,i,r,e),[e]),i.flags|=2048,jr(9,{destroy:void 0},AT.bind(null,i,r,n,t),null),n},useId:function(){var e=Te(),t=Tt.identifierPrefix;if(ct){var n=Sn,i=bn;n=(i&~(1<<32-Ge(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Cu++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=vI++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:xm,useFormState:Iy,useActionState:Iy,useOptimistic:function(e){var t=Te();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Om.bind(null,tt,!0,n),n.dispatch=t,[e,t]},useMemoCache:Im,useCacheRefresh:function(){return Te().memoizedState=wI.bind(null,tt)},useEffectEvent:function(e){var t=Te(),n={impl:e};return t.memoizedState=n,function(){if(ft&2)throw Error(k(440));return n.impl.apply(void 0,arguments)}}},Mm={readContext:le,use:bc,useCallback:UT,useContext:le,useEffect:Cm,useImperativeHandle:LT,useInsertionEffect:MT,useLayoutEffect:VT,useMemo:PT,useReducer:$l,useRef:xT,useState:function(){return $l(Wn)},useDebugValue:Nm,useDeferredValue:function(e,t){var n=Ut();return zT(n,_t.memoizedState,e,t)},useTransition:function(){var e=$l(Wn)[0],t=Ut().memoizedState;return[typeof e=="boolean"?e:Go(e),t]},useSyncExternalStore:TT,useId:HT,useHostTransitionStatus:xm,useFormState:Ry,useActionState:Ry,useOptimistic:function(e,t){var n=Ut();return IT(n,_t,e,t)},useMemoCache:Im,useCacheRefresh:FT};Mm.useEffectEvent=OT;var XT={readContext:le,use:bc,useCallback:UT,useContext:le,useEffect:Cm,useImperativeHandle:LT,useInsertionEffect:MT,useLayoutEffect:VT,useMemo:PT,useReducer:zh,useRef:xT,useState:function(){return zh(Wn)},useDebugValue:Nm,useDeferredValue:function(e,t){var n=Ut();return _t===null?Dm(n,e,t):zT(n,_t.memoizedState,e,t)},useTransition:function(){var e=zh(Wn)[0],t=Ut().memoizedState;return[typeof e=="boolean"?e:Go(e),t]},useSyncExternalStore:TT,useId:HT,useHostTransitionStatus:xm,useFormState:Cy,useActionState:Cy,useOptimistic:function(e,t){var n=Ut();return _t!==null?IT(n,_t,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Im,useCacheRefresh:FT};XT.useEffectEvent=OT;function jh(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:Nt({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ed={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Ke(),s=ki(i);s.payload=t,n!=null&&(s.callback=n),t=Li(e,s,i),t!==null&&(xe(t,e,i),eo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Ke(),s=ki(i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Li(e,s,i),t!==null&&(xe(t,e,i),eo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ke(),i=ki(n);i.tag=2,t!=null&&(i.callback=t),t=Li(e,i,n),t!==null&&(xe(t,e,n),eo(t,e,n))}};function Dy(e,t,n,i,s,r,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,r,a):t.prototype&&t.prototype.isPureReactComponent?!vo(n,i)||!vo(s,r):!0}function xy(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&ed.enqueueReplaceState(t,t.state,null)}function Vs(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=Nt({},n));for(var s in e)n[s]===void 0&&(n[s]=e[s])}return n}function $T(e){Tu(e)}function JT(e){console.error(e)}function ZT(e){Tu(e)}function Nu(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function Oy(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function nd(e,t,n){return n=ki(n),n.tag=3,n.payload={element:null},n.callback=function(){Nu(e,t)},n}function WT(e){return e=ki(e),e.tag=3,e}function tE(e,t,n,i){var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var r=i.value;e.payload=function(){return s(r)},e.callback=function(){Oy(t,n,i)}}var a=n.stateNode;a!==null&&typeof a.componentDidCatch=="function"&&(e.callback=function(){Oy(t,n,i),typeof s!="function"&&(Ui===null?Ui=new Set([this]):Ui.add(this));var l=i.stack;this.componentDidCatch(i.value,{componentStack:l!==null?l:""})})}function RI(e,t,n,i,s){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&na(t,n,s,!0),n=$e.current,n!==null){switch(n.tag){case 31:case 13:return an===null?Vu():n.alternate===null&&Vt===0&&(Vt=3),n.flags&=-257,n.flags|=65536,n.lanes=s,i===Su?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),Jh(e,i,s)),!1;case 22:return n.flags|=65536,i===Su?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),Jh(e,i,s)),!1}throw Error(k(435,n.tag))}return Jh(e,i,s),Vu(),!1}if(ct)return t=$e.current,t!==null?(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=s,i!==Hf&&(e=Error(k(422),{cause:i}),Eo(nn(e,n)))):(i!==Hf&&(t=Error(k(423),{cause:i}),Eo(nn(t,n))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,i=nn(i,n),s=nd(e.stateNode,i,s),Ph(e,s),Vt!==4&&(Vt=2)),!1;var r=Error(k(520),{cause:i});if(r=nn(r,n),oo===null?oo=[r]:oo.push(r),Vt!==4&&(Vt=2),t===null)return!0;i=nn(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=s&-s,n.lanes|=e,e=nd(n.stateNode,i,e),Ph(n,e),!1;case 1:if(t=n.type,r=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(Ui===null||!Ui.has(r))))return n.flags|=65536,s&=-s,n.lanes|=s,s=WT(s),tE(s,e,n,i),Ph(n,s),!1}n=n.return}while(n!==null);return!1}var Vm=Error(k(461)),Gt=!1;function ie(e,t,n,i){t.child=e===null?mT(t,null,n,i):Os(t,e.child,n,i)}function My(e,t,n,i,s){n=n.render;var r=t.ref;if("ref"in i){var a={};for(var l in i)l!=="ref"&&(a[l]=i[l])}else a=i;return xs(t),i=Am(e,t,n,a,r,s),l=bm(),e!==null&&!Gt?(Sm(e,t,s),ti(e,t,s)):(ct&&l&&mm(t),t.flags|=1,ie(e,t,i,s),t.child)}function Vy(e,t,n,i,s){if(e===null){var r=n.type;return typeof r=="function"&&!dm(r)&&r.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=r,eE(e,t,r,i,s)):(e=Yl(n.type,null,i,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!km(e,s)){var a=r.memoizedProps;if(n=n.compare,n=n!==null?n:vo,n(a,i)&&e.ref===t.ref)return ti(e,t,s)}return t.flags|=1,e=Yn(r,i),e.ref=t.ref,e.return=t,t.child=e}function eE(e,t,n,i,s){if(e!==null){var r=e.memoizedProps;if(vo(r,i)&&e.ref===t.ref)if(Gt=!1,t.pendingProps=i=r,km(e,s))e.flags&131072&&(Gt=!0);else return t.lanes=e.lanes,ti(e,t,s)}return id(e,t,n,i,s)}function nE(e,t,n,i){var s=i.children,r=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if(t.flags&128){if(r=r!==null?r.baseLanes|n:n,e!==null){for(i=t.child=e.child,s=0;i!==null;)s=s|i.lanes|i.childLanes,i=i.sibling;i=s&~r}else i=0,t.child=null;return ky(e,t,r,n,i)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Xl(t,r!==null?r.cachePool:null),r!==null?by(t,r):$f(),yT(t);else return i=t.lanes=536870912,ky(e,t,r!==null?r.baseLanes|n:n,n,i)}else r!==null?(Xl(t,r.cachePool),by(t,r),Ei(),t.memoizedState=null):(e!==null&&Xl(t,null),$f(),Ei());return ie(e,t,s,n),t.child}function Ha(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function ky(e,t,n,i,s){var r=ym();return r=r===null?null:{parent:Ht._currentValue,pool:r},t.memoizedState={baseLanes:n,cachePool:r},e!==null&&Xl(t,null),$f(),yT(t),e!==null&&na(e,t,i,!0),t.childLanes=s,null}function Zl(e,t){return t=Du({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Ly(e,t,n){return Os(t,e.child,null,n),e=Zl(t,t.pendingProps),e.flags|=2,ze(t),t.memoizedState=null,e}function CI(e,t,n){var i=t.pendingProps,s=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ct){if(i.mode==="hidden")return e=Zl(t,i),t.lanes=536870912,Ha(null,e);if(Jf(t),(e=It)?(e=YE(e,sn),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Yi!==null?{id:bn,overflow:Sn}:null,retryLane:536870912,hydrationErrors:null},n=oT(e),n.return=t,t.child=n,ae=t,It=null)):e=null,e===null)throw Xi(t);return t.lanes=536870912,null}return Zl(t,i)}var r=e.memoizedState;if(r!==null){var a=r.dehydrated;if(Jf(t),s)if(t.flags&256)t.flags&=-257,t=Ly(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(k(558));else if(Gt||na(e,t,n,!1),s=(n&e.childLanes)!==0,Gt||s){if(i=Tt,i!==null&&(a=M0(i,n),a!==0&&a!==r.retryLane))throw r.retryLane=a,Fs(e,a),xe(i,e,a),Vm;Vu(),t=Ly(e,t,n)}else e=r.treeContext,It=on(a.nextSibling),ae=t,ct=!0,Vi=null,sn=!1,e!==null&&uT(t,e),t=Zl(t,i),t.flags|=4096;return t}return e=Yn(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Wl(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(k(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function id(e,t,n,i,s){return xs(t),n=Am(e,t,n,i,void 0,s),i=bm(),e!==null&&!Gt?(Sm(e,t,s),ti(e,t,s)):(ct&&i&&mm(t),t.flags|=1,ie(e,t,n,s),t.child)}function Uy(e,t,n,i,s,r){return xs(t),t.updateQueue=null,n=vT(t,i,n,s),_T(e),i=bm(),e!==null&&!Gt?(Sm(e,t,r),ti(e,t,r)):(ct&&i&&mm(t),t.flags|=1,ie(e,t,n,r),t.child)}function Py(e,t,n,i,s){if(xs(t),t.stateNode===null){var r=pr,a=n.contextType;typeof a=="object"&&a!==null&&(r=le(a)),r=new n(i,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=ed,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=i,r.state=t.memoizedState,r.refs={},vm(t),a=n.contextType,r.context=typeof a=="object"&&a!==null?le(a):pr,r.state=t.memoizedState,a=n.getDerivedStateFromProps,typeof a=="function"&&(jh(t,n,a,i),r.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(a=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),a!==r.state&&ed.enqueueReplaceState(r,r.state,null),io(t,i,r,s),no(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){r=t.stateNode;var l=t.memoizedProps,u=Vs(n,l);r.props=u;var h=r.context,d=n.contextType;a=pr,typeof d=="object"&&d!==null&&(a=le(d));var m=n.getDerivedStateFromProps;d=typeof m=="function"||typeof r.getSnapshotBeforeUpdate=="function",l=t.pendingProps!==l,d||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(l||h!==a)&&xy(t,r,i,a),_i=!1;var g=t.memoizedState;r.state=g,io(t,i,r,s),no(),h=t.memoizedState,l||g!==h||_i?(typeof m=="function"&&(jh(t,n,m,i),h=t.memoizedState),(u=_i||Dy(t,n,u,i,g,h,a))?(d||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=h),r.props=i,r.state=h,r.context=a,i=u):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{r=t.stateNode,Yf(e,t),a=t.memoizedProps,d=Vs(n,a),r.props=d,m=t.pendingProps,g=r.context,h=n.contextType,u=pr,typeof h=="object"&&h!==null&&(u=le(h)),l=n.getDerivedStateFromProps,(h=typeof l=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(a!==m||g!==u)&&xy(t,r,i,u),_i=!1,g=t.memoizedState,r.state=g,io(t,i,r,s),no();var T=t.memoizedState;a!==m||g!==T||_i||e!==null&&e.dependencies!==null&&bu(e.dependencies)?(typeof l=="function"&&(jh(t,n,l,i),T=t.memoizedState),(d=_i||Dy(t,n,d,i,g,T,u)||e!==null&&e.dependencies!==null&&bu(e.dependencies))?(h||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(i,T,u),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(i,T,u)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=T),r.props=i,r.state=T,r.context=u,i=d):(typeof r.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),i=!1)}return r=i,Wl(e,t),i=(t.flags&128)!==0,r||i?(r=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&i?(t.child=Os(t,e.child,null,s),t.child=Os(t,null,n,s)):ie(e,t,n,s),t.memoizedState=r.state,e=t.child):e=ti(e,t,s),e}function zy(e,t,n,i){return Ds(),t.flags|=256,ie(e,t,n,i),t.child}var Bh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function qh(e){return{baseLanes:e,cachePool:hT()}}function Hh(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Be),e}function iE(e,t,n){var i=t.pendingProps,s=!1,r=(t.flags&128)!==0,a;if((a=r)||(a=e!==null&&e.memoizedState===null?!1:(Lt.current&2)!==0),a&&(s=!0,t.flags&=-129),a=(t.flags&32)!==0,t.flags&=-33,e===null){if(ct){if(s?Ti(t):Ei(),(e=It)?(e=YE(e,sn),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Yi!==null?{id:bn,overflow:Sn}:null,retryLane:536870912,hydrationErrors:null},n=oT(e),n.return=t,t.child=n,ae=t,It=null)):e=null,e===null)throw Xi(t);return yd(e)?t.lanes=32:t.lanes=536870912,null}var l=i.children;return i=i.fallback,s?(Ei(),s=t.mode,l=Du({mode:"hidden",children:l},s),i=Ss(i,s,n,null),l.return=t,i.return=t,l.sibling=i,t.child=l,i=t.child,i.memoizedState=qh(n),i.childLanes=Hh(e,a,n),t.memoizedState=Bh,Ha(null,i)):(Ti(t),sd(t,l))}var u=e.memoizedState;if(u!==null&&(l=u.dehydrated,l!==null)){if(r)t.flags&256?(Ti(t),t.flags&=-257,t=Fh(e,t,n)):t.memoizedState!==null?(Ei(),t.child=e.child,t.flags|=128,t=null):(Ei(),l=i.fallback,s=t.mode,i=Du({mode:"visible",children:i.children},s),l=Ss(l,s,n,null),l.flags|=2,i.return=t,l.return=t,i.sibling=l,t.child=i,Os(t,e.child,null,n),i=t.child,i.memoizedState=qh(n),i.childLanes=Hh(e,a,n),t.memoizedState=Bh,t=Ha(null,i));else if(Ti(t),yd(l)){if(a=l.nextSibling&&l.nextSibling.dataset,a)var h=a.dgst;a=h,i=Error(k(419)),i.stack="",i.digest=a,Eo({value:i,source:null,stack:null}),t=Fh(e,t,n)}else if(Gt||na(e,t,n,!1),a=(n&e.childLanes)!==0,Gt||a){if(a=Tt,a!==null&&(i=M0(a,n),i!==0&&i!==u.retryLane))throw u.retryLane=i,Fs(e,i),xe(a,e,i),Vm;pd(l)||Vu(),t=Fh(e,t,n)}else pd(l)?(t.flags|=192,t.child=e.child,t=null):(e=u.treeContext,It=on(l.nextSibling),ae=t,ct=!0,Vi=null,sn=!1,e!==null&&uT(t,e),t=sd(t,i.children),t.flags|=4096);return t}return s?(Ei(),l=i.fallback,s=t.mode,u=e.child,h=u.sibling,i=Yn(u,{mode:"hidden",children:i.children}),i.subtreeFlags=u.subtreeFlags&65011712,h!==null?l=Yn(h,l):(l=Ss(l,s,n,null),l.flags|=2),l.return=t,i.return=t,i.sibling=l,t.child=i,Ha(null,i),i=t.child,l=e.child.memoizedState,l===null?l=qh(n):(s=l.cachePool,s!==null?(u=Ht._currentValue,s=s.parent!==u?{parent:u,pool:u}:s):s=hT(),l={baseLanes:l.baseLanes|n,cachePool:s}),i.memoizedState=l,i.childLanes=Hh(e,a,n),t.memoizedState=Bh,Ha(e.child,i)):(Ti(t),n=e.child,e=n.sibling,n=Yn(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(a=t.deletions,a===null?(t.deletions=[e],t.flags|=16):a.push(e)),t.child=n,t.memoizedState=null,n)}function sd(e,t){return t=Du({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Du(e,t){return e=je(22,e,null,t),e.lanes=0,e}function Fh(e,t,n){return Os(t,e.child,null,n),e=sd(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function jy(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Gf(e.return,t,n)}function Gh(e,t,n,i,s,r){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s,treeForkCount:r}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=i,a.tail=n,a.tailMode=s,a.treeForkCount=r)}function sE(e,t,n){var i=t.pendingProps,s=i.revealOrder,r=i.tail;i=i.children;var a=Lt.current,l=(a&2)!==0;if(l?(a=a&1|2,t.flags|=128):a&=1,At(Lt,a),ie(e,t,i,n),i=ct?To:0,!l&&e!==null&&e.flags&128)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&jy(e,n,t);else if(e.tag===19)jy(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&Iu(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),Gh(t,!1,s,n,r,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&Iu(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}Gh(t,!0,n,null,r,i);break;case"together":Gh(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function ti(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ji|=t.lanes,!(n&t.childLanes))if(e!==null){if(na(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=Yn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Yn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function km(e,t){return e.lanes&t?!0:(e=e.dependencies,!!(e!==null&&bu(e)))}function NI(e,t,n){switch(t.tag){case 3:pu(t,t.stateNode.containerInfo),vi(t,Ht,e.memoizedState.cache),Ds();break;case 27:case 5:Of(t);break;case 4:pu(t,t.stateNode.containerInfo);break;case 10:vi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Jf(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Ti(t),t.flags|=128,null):n&t.child.childLanes?iE(e,t,n):(Ti(t),e=ti(e,t,n),e!==null?e.sibling:null);Ti(t);break;case 19:var s=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(na(e,t,n,!1),i=(n&t.childLanes)!==0),s){if(i)return sE(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),At(Lt,Lt.current),i)break;return null;case 22:return t.lanes=0,nE(e,t,n,t.pendingProps);case 24:vi(t,Ht,e.memoizedState.cache)}return ti(e,t,n)}function rE(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Gt=!0;else{if(!km(e,n)&&!(t.flags&128))return Gt=!1,NI(e,t,n);Gt=!!(e.flags&131072)}else Gt=!1,ct&&t.flags&1048576&&lT(t,To,t.index);switch(t.lanes=0,t.tag){case 16:t:{var i=t.pendingProps;if(e=_s(t.elementType),t.type=e,typeof e=="function")dm(e)?(i=Vs(e,i),t.tag=1,t=Py(null,t,e,i,n)):(t.tag=0,t=id(null,t,e,i,n));else{if(e!=null){var s=e.$$typeof;if(s===Wd){t.tag=11,t=My(null,t,e,i,n);break t}else if(s===tm){t.tag=14,t=Vy(null,t,e,i,n);break t}}throw t=Df(e)||e,Error(k(306,t,""))}}return t;case 0:return id(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,s=Vs(i,t.pendingProps),Py(e,t,i,s,n);case 3:t:{if(pu(t,t.stateNode.containerInfo),e===null)throw Error(k(387));i=t.pendingProps;var r=t.memoizedState;s=r.element,Yf(e,t),io(t,i,null,n);var a=t.memoizedState;if(i=a.cache,vi(t,Ht,i),i!==r.cache&&Kf(t,[Ht],n,!0),no(),i=a.element,r.isDehydrated)if(r={element:i,isDehydrated:!1,cache:a.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=zy(e,t,i,n);break t}else if(i!==s){s=nn(Error(k(424)),t),Eo(s),t=zy(e,t,i,n);break t}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(It=on(e.firstChild),ae=t,ct=!0,Vi=null,sn=!0,n=mT(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ds(),i===s){t=ti(e,t,n);break t}ie(e,t,i,n)}t=t.child}return t;case 26:return Wl(e,t),e===null?(n=a_(t.type,null,t.pendingProps,null))?t.memoizedState=n:ct||(n=t.type,e=t.pendingProps,i=Pu(Mi.current).createElement(n),i[re]=t,i[Oe]=e,ue(i,n,e),ee(i),t.stateNode=i):t.memoizedState=a_(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Of(t),e===null&&ct&&(i=t.stateNode=XE(t.type,t.pendingProps,Mi.current),ae=t,sn=!0,s=It,os(t.type)?(_d=s,It=on(i.firstChild)):It=s),ie(e,t,t.pendingProps.children,n),Wl(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ct&&((s=i=It)&&(i=rR(i,t.type,t.pendingProps,sn),i!==null?(t.stateNode=i,ae=t,It=on(i.firstChild),sn=!1,s=!0):s=!1),s||Xi(t)),Of(t),s=t.type,r=t.pendingProps,a=e!==null?e.memoizedProps:null,i=r.children,md(s,r)?i=null:a!==null&&md(s,a)&&(t.flags|=32),t.memoizedState!==null&&(s=Am(e,t,TI,null,null,n),Ro._currentValue=s),Wl(e,t),ie(e,t,i,n),t.child;case 6:return e===null&&ct&&((e=n=It)&&(n=aR(n,t.pendingProps,sn),n!==null?(t.stateNode=n,ae=t,It=null,e=!0):e=!1),e||Xi(t)),null;case 13:return iE(e,t,n);case 4:return pu(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Os(t,null,i,n):ie(e,t,i,n),t.child;case 11:return My(e,t,t.type,t.pendingProps,n);case 7:return ie(e,t,t.pendingProps,n),t.child;case 8:return ie(e,t,t.pendingProps.children,n),t.child;case 12:return ie(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,vi(t,t.type,i.value),ie(e,t,i.children,n),t.child;case 9:return s=t.type._context,i=t.pendingProps.children,xs(t),s=le(s),i=i(s),t.flags|=1,ie(e,t,i,n),t.child;case 14:return Vy(e,t,t.type,t.pendingProps,n);case 15:return eE(e,t,t.type,t.pendingProps,n);case 19:return sE(e,t,n);case 31:return CI(e,t,n);case 22:return nE(e,t,n,t.pendingProps);case 24:return xs(t),i=le(Ht),e===null?(s=ym(),s===null&&(s=Tt,r=pm(),s.pooledCache=r,r.refCount++,r!==null&&(s.pooledCacheLanes|=n),s=r),t.memoizedState={parent:i,cache:s},vm(t),vi(t,Ht,s)):(e.lanes&n&&(Yf(e,t),io(t,null,null,n),no()),s=e.memoizedState,r=t.memoizedState,s.parent!==i?(s={parent:i,cache:i},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),vi(t,Ht,i)):(i=r.cache,vi(t,Ht,i),i!==s.cache&&Kf(t,[Ht],n,!0))),ie(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(k(156,t.tag))}function Un(e){e.flags|=4}function Kh(e,t,n,i,s){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(NE())e.flags|=8192;else throw Is=Su,_m}else e.flags&=-16777217}function By(e,t){if(t.type!=="stylesheet"||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!ZE(t))if(NE())e.flags|=8192;else throw Is=Su,_m}function xl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?D0():536870912,e.lanes|=t,Br|=t)}function ka(e,t){if(!ct)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function wt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&65011712,i|=s.flags&65011712,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function DI(e,t,n){var i=t.pendingProps;switch(gm(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return wt(t),null;case 1:return wt(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Xn(Ht),kr(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ws(t)?Un(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Uh())),wt(t),null;case 26:var s=t.type,r=t.memoizedState;return e===null?(Un(t),r!==null?(wt(t),By(t,r)):(wt(t),Kh(t,s,null,i,n))):r?r!==e.memoizedState?(Un(t),wt(t),By(t,r)):(wt(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&Un(t),wt(t),Kh(t,s,e,i,n)),null;case 27:if(yu(t),n=Mi.current,s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Un(t);else{if(!i){if(t.stateNode===null)throw Error(k(166));return wt(t),null}e=In.current,Ws(t)?py(t):(e=XE(s,i,n),t.stateNode=e,Un(t))}return wt(t),null;case 5:if(yu(t),s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Un(t);else{if(!i){if(t.stateNode===null)throw Error(k(166));return wt(t),null}if(r=In.current,Ws(t))py(t);else{var a=Pu(Mi.current);switch(r){case 1:r=a.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:r=a.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":r=a.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":r=a.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":r=a.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof i.is=="string"?a.createElement("select",{is:i.is}):a.createElement("select"),i.multiple?r.multiple=!0:i.size&&(r.size=i.size);break;default:r=typeof i.is=="string"?a.createElement(s,{is:i.is}):a.createElement(s)}}r[re]=t,r[Oe]=i;t:for(a=t.child;a!==null;){if(a.tag===5||a.tag===6)r.appendChild(a.stateNode);else if(a.tag!==4&&a.tag!==27&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break t;for(;a.sibling===null;){if(a.return===null||a.return===t)break t;a=a.return}a.sibling.return=a.return,a=a.sibling}t.stateNode=r;t:switch(ue(r,s,i),s){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&Un(t)}}return wt(t),Kh(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Un(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(k(166));if(e=Mi.current,Ws(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,s=ae,s!==null)switch(s.tag){case 27:case 5:i=s.memoizedProps}e[re]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||GE(e.nodeValue,n)),e||Xi(t,!0)}else e=Pu(e).createTextNode(i),e[re]=t,t.stateNode=e}return wt(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=Ws(t),n!==null){if(e===null){if(!i)throw Error(k(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(557));e[re]=t}else Ds(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;wt(t),e=!1}else n=Uh(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(ze(t),t):(ze(t),null);if(t.flags&128)throw Error(k(558))}return wt(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=Ws(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(k(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(k(317));s[re]=t}else Ds(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;wt(t),s=!1}else s=Uh(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(ze(t),t):(ze(t),null)}return ze(t),t.flags&128?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,s=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(s=i.alternate.memoizedState.cachePool.pool),r=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(r=i.memoizedState.cachePool.pool),r!==s&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),xl(t,t.updateQueue),wt(t),null);case 4:return kr(),e===null&&qm(t.stateNode.containerInfo),wt(t),null;case 10:return Xn(t.type),wt(t),null;case 19:if(ne(Lt),i=t.memoizedState,i===null)return wt(t),null;if(s=(t.flags&128)!==0,r=i.rendering,r===null)if(s)ka(i,!1);else{if(Vt!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(r=Iu(e),r!==null){for(t.flags|=128,ka(i,!1),e=r.updateQueue,t.updateQueue=e,xl(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)aT(n,e),n=n.sibling;return At(Lt,Lt.current&1|2),ct&&Bn(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&He()>Ou&&(t.flags|=128,s=!0,ka(i,!1),t.lanes=4194304)}else{if(!s)if(e=Iu(r),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,xl(t,e),ka(i,!0),i.tail===null&&i.tailMode==="hidden"&&!r.alternate&&!ct)return wt(t),null}else 2*He()-i.renderingStartTime>Ou&&n!==536870912&&(t.flags|=128,s=!0,ka(i,!1),t.lanes=4194304);i.isBackwards?(r.sibling=t.child,t.child=r):(e=i.last,e!==null?e.sibling=r:t.child=r,i.last=r)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=He(),e.sibling=null,n=Lt.current,At(Lt,s?n&1|2:n&1),ct&&Bn(t,i.treeForkCount),e):(wt(t),null);case 22:case 23:return ze(t),Tm(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?n&536870912&&!(t.flags&128)&&(wt(t),t.subtreeFlags&6&&(t.flags|=8192)):wt(t),n=t.updateQueue,n!==null&&xl(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&ne(ws),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Xn(Ht),wt(t),null;case 25:return null;case 30:return null}throw Error(k(156,t.tag))}function xI(e,t){switch(gm(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Xn(Ht),kr(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return yu(t),null;case 31:if(t.memoizedState!==null){if(ze(t),t.alternate===null)throw Error(k(340));Ds()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(ze(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));Ds()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ne(Lt),null;case 4:return kr(),null;case 10:return Xn(t.type),null;case 22:case 23:return ze(t),Tm(),e!==null&&ne(ws),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Xn(Ht),null;case 25:return null;default:return null}}function aE(e,t){switch(gm(t),t.tag){case 3:Xn(Ht),kr();break;case 26:case 27:case 5:yu(t);break;case 4:kr();break;case 31:t.memoizedState!==null&&ze(t);break;case 13:ze(t);break;case 19:ne(Lt);break;case 10:Xn(t.type);break;case 22:case 23:ze(t),Tm(),e!==null&&ne(ws);break;case 24:Xn(Ht)}}function Ko(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var s=i.next;n=s;do{if((n.tag&e)===e){i=void 0;var r=n.create,a=n.inst;i=r(),a.destroy=i}n=n.next}while(n!==s)}}catch(l){pt(t,t.return,l)}}function $i(e,t,n){try{var i=t.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var r=s.next;i=r;do{if((i.tag&e)===e){var a=i.inst,l=a.destroy;if(l!==void 0){a.destroy=void 0,s=t;var u=n,h=l;try{h()}catch(d){pt(s,u,d)}}}i=i.next}while(i!==r)}}catch(d){pt(t,t.return,d)}}function oE(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{pT(t,n)}catch(i){pt(e,e.return,i)}}}function lE(e,t,n){n.props=Vs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){pt(e,t,i)}}function ro(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(s){pt(e,t,s)}}function wn(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(s){pt(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(s){pt(e,t,s)}else n.current=null}function uE(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(s){pt(e,e.return,s)}}function Qh(e,t,n){try{var i=e.stateNode;WI(i,e.type,n,t),i[Oe]=t}catch(s){pt(e,e.return,s)}}function cE(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&os(e.type)||e.tag===4}function Yh(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||cE(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&os(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function rd(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Fn));else if(i!==4&&(i===27&&os(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(rd(e,t,n),e=e.sibling;e!==null;)rd(e,t,n),e=e.sibling}function xu(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&os(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(xu(e,t,n),e=e.sibling;e!==null;)xu(e,t,n),e=e.sibling}function hE(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);ue(t,i,n),t[re]=e,t[Oe]=n}catch(r){pt(e,e.return,r)}}var qn=!1,qt=!1,Xh=!1,qy=typeof WeakSet=="function"?WeakSet:Set,te=null;function OI(e,t){if(e=e.containerInfo,fd=qu,e=Z0(e),cm(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else t:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var s=i.anchorOffset,r=i.focusNode;i=i.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break t}var a=0,l=-1,u=-1,h=0,d=0,m=e,g=null;e:for(;;){for(var T;m!==n||s!==0&&m.nodeType!==3||(l=a+s),m!==r||i!==0&&m.nodeType!==3||(u=a+i),m.nodeType===3&&(a+=m.nodeValue.length),(T=m.firstChild)!==null;)g=m,m=T;for(;;){if(m===e)break e;if(g===n&&++h===s&&(l=a),g===r&&++d===i&&(u=a),(T=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=T}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(dd={focusedElem:e,selectionRange:n},qu=!1,te=t;te!==null;)if(t=te,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,te=e;else for(;te!==null;){switch(t=te,r=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)s=e[n],s.ref.impl=s.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&r!==null){e=void 0,n=t,s=r.memoizedProps,r=r.memoizedState,i=n.stateNode;try{var D=Vs(n.type,s);e=i.getSnapshotBeforeUpdate(D,r),i.__reactInternalSnapshotBeforeUpdate=e}catch(V){pt(n,n.return,V)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)gd(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":gd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(k(163))}if(e=t.sibling,e!==null){e.return=t.return,te=e;break}te=t.return}}function fE(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:zn(e,n),i&4&&Ko(5,n);break;case 1:if(zn(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(a){pt(n,n.return,a)}else{var s=Vs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(a){pt(n,n.return,a)}}i&64&&oE(n),i&512&&ro(n,n.return);break;case 3:if(zn(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{pT(e,t)}catch(a){pt(n,n.return,a)}}break;case 27:t===null&&i&4&&hE(n);case 26:case 5:zn(e,n),t===null&&i&4&&uE(n),i&512&&ro(n,n.return);break;case 12:zn(e,n);break;case 31:zn(e,n),i&4&&gE(e,n);break;case 13:zn(e,n),i&4&&pE(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=BI.bind(null,n),oR(e,n))));break;case 22:if(i=n.memoizedState!==null||qn,!i){t=t!==null&&t.memoizedState!==null||qt,s=qn;var r=qt;qn=i,(qt=t)&&!r?jn(e,n,(n.subtreeFlags&8772)!==0):zn(e,n),qn=s,qt=r}break;case 30:break;default:zn(e,n)}}function dE(e){var t=e.alternate;t!==null&&(e.alternate=null,dE(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&sm(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Dt=null,Re=!1;function Pn(e,t,n){for(n=n.child;n!==null;)mE(e,t,n),n=n.sibling}function mE(e,t,n){if(Fe&&typeof Fe.onCommitFiberUnmount=="function")try{Fe.onCommitFiberUnmount(zo,n)}catch{}switch(n.tag){case 26:qt||wn(n,t),Pn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:qt||wn(n,t);var i=Dt,s=Re;os(n.type)&&(Dt=n.stateNode,Re=!1),Pn(e,t,n),uo(n.stateNode),Dt=i,Re=s;break;case 5:qt||wn(n,t);case 6:if(i=Dt,s=Re,Dt=null,Pn(e,t,n),Dt=i,Re=s,Dt!==null)if(Re)try{(Dt.nodeType===9?Dt.body:Dt.nodeName==="HTML"?Dt.ownerDocument.body:Dt).removeChild(n.stateNode)}catch(r){pt(n,t,r)}else try{Dt.removeChild(n.stateNode)}catch(r){pt(n,t,r)}break;case 18:Dt!==null&&(Re?(e=Dt,e_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Gr(e)):e_(Dt,n.stateNode));break;case 4:i=Dt,s=Re,Dt=n.stateNode.containerInfo,Re=!0,Pn(e,t,n),Dt=i,Re=s;break;case 0:case 11:case 14:case 15:$i(2,n,t),qt||$i(4,n,t),Pn(e,t,n);break;case 1:qt||(wn(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&lE(n,t,i)),Pn(e,t,n);break;case 21:Pn(e,t,n);break;case 22:qt=(i=qt)||n.memoizedState!==null,Pn(e,t,n),qt=i;break;default:Pn(e,t,n)}}function gE(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Gr(e)}catch(n){pt(t,t.return,n)}}}function pE(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Gr(e)}catch(n){pt(t,t.return,n)}}function MI(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new qy),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new qy),t;default:throw Error(k(435,e.tag))}}function Ol(e,t){var n=MI(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var s=qI.bind(null,e,i);i.then(s,s)}})}function we(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i],r=e,a=t,l=a;t:for(;l!==null;){switch(l.tag){case 27:if(os(l.type)){Dt=l.stateNode,Re=!1;break t}break;case 5:Dt=l.stateNode,Re=!1;break t;case 3:case 4:Dt=l.stateNode.containerInfo,Re=!0;break t}l=l.return}if(Dt===null)throw Error(k(160));mE(r,a,s),Dt=null,Re=!1,r=s.alternate,r!==null&&(r.return=null),s.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)yE(t,e),t=t.sibling}var fn=null;function yE(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:we(t,e),Ie(e),i&4&&($i(3,e,e.return),Ko(3,e),$i(5,e,e.return));break;case 1:we(t,e),Ie(e),i&512&&(qt||n===null||wn(n,n.return)),i&64&&qn&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var s=fn;if(we(t,e),Ie(e),i&512&&(qt||n===null||wn(n,n.return)),i&4){var r=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){t:{i=e.type,n=e.memoizedProps,s=s.ownerDocument||s;e:switch(i){case"title":r=s.getElementsByTagName("title")[0],(!r||r[qo]||r[re]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=s.createElement(i),s.head.insertBefore(r,s.querySelector("head > title"))),ue(r,i,n),r[re]=e,ee(r),i=r;break t;case"link":var a=l_("link","href",s).get(i+(n.href||""));if(a){for(var l=0;l<a.length;l++)if(r=a[l],r.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&r.getAttribute("rel")===(n.rel==null?null:n.rel)&&r.getAttribute("title")===(n.title==null?null:n.title)&&r.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){a.splice(l,1);break e}}r=s.createElement(i),ue(r,i,n),s.head.appendChild(r);break;case"meta":if(a=l_("meta","content",s).get(i+(n.content||""))){for(l=0;l<a.length;l++)if(r=a[l],r.getAttribute("content")===(n.content==null?null:""+n.content)&&r.getAttribute("name")===(n.name==null?null:n.name)&&r.getAttribute("property")===(n.property==null?null:n.property)&&r.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute("charset")===(n.charSet==null?null:n.charSet)){a.splice(l,1);break e}}r=s.createElement(i),ue(r,i,n),s.head.appendChild(r);break;default:throw Error(k(468,i))}r[re]=e,ee(r),i=r}e.stateNode=i}else u_(s,e.type,e.stateNode);else e.stateNode=o_(s,i,e.memoizedProps);else r!==i?(r===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):r.count--,i===null?u_(s,e.type,e.stateNode):o_(s,i,e.memoizedProps)):i===null&&e.stateNode!==null&&Qh(e,e.memoizedProps,n.memoizedProps)}break;case 27:we(t,e),Ie(e),i&512&&(qt||n===null||wn(n,n.return)),n!==null&&i&4&&Qh(e,e.memoizedProps,n.memoizedProps);break;case 5:if(we(t,e),Ie(e),i&512&&(qt||n===null||wn(n,n.return)),e.flags&32){s=e.stateNode;try{Ur(s,"")}catch(D){pt(e,e.return,D)}}i&4&&e.stateNode!=null&&(s=e.memoizedProps,Qh(e,s,n!==null?n.memoizedProps:s)),i&1024&&(Xh=!0);break;case 6:if(we(t,e),Ie(e),i&4){if(e.stateNode===null)throw Error(k(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(D){pt(e,e.return,D)}}break;case 3:if(nu=null,s=fn,fn=zu(t.containerInfo),we(t,e),fn=s,Ie(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Gr(t.containerInfo)}catch(D){pt(e,e.return,D)}Xh&&(Xh=!1,_E(e));break;case 4:i=fn,fn=zu(e.stateNode.containerInfo),we(t,e),Ie(e),fn=i;break;case 12:we(t,e),Ie(e);break;case 31:we(t,e),Ie(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Ol(e,i)));break;case 13:we(t,e),Ie(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Ic=He()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Ol(e,i)));break;case 22:s=e.memoizedState!==null;var u=n!==null&&n.memoizedState!==null,h=qn,d=qt;if(qn=h||s,qt=d||u,we(t,e),qt=d,qn=h,Ie(e),i&8192)t:for(t=e.stateNode,t._visibility=s?t._visibility&-2:t._visibility|1,s&&(n===null||u||qn||qt||vs(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){u=n=t;try{if(r=u.stateNode,s)a=r.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none";else{l=u.stateNode;var m=u.memoizedProps.style,g=m!=null&&m.hasOwnProperty("display")?m.display:null;l.style.display=g==null||typeof g=="boolean"?"":(""+g).trim()}}catch(D){pt(u,u.return,D)}}}else if(t.tag===6){if(n===null){u=t;try{u.stateNode.nodeValue=s?"":u.memoizedProps}catch(D){pt(u,u.return,D)}}}else if(t.tag===18){if(n===null){u=t;try{var T=u.stateNode;s?n_(T,!0):n_(u.stateNode,!1)}catch(D){pt(u,u.return,D)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,Ol(e,n))));break;case 19:we(t,e),Ie(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Ol(e,i)));break;case 30:break;case 21:break;default:we(t,e),Ie(e)}}function Ie(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(cE(i)){n=i;break}i=i.return}if(n==null)throw Error(k(160));switch(n.tag){case 27:var s=n.stateNode,r=Yh(e);xu(e,r,s);break;case 5:var a=n.stateNode;n.flags&32&&(Ur(a,""),n.flags&=-33);var l=Yh(e);xu(e,l,a);break;case 3:case 4:var u=n.stateNode.containerInfo,h=Yh(e);rd(e,h,u);break;default:throw Error(k(161))}}catch(d){pt(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function _E(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;_E(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function zn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)fE(e,t.alternate,t),t=t.sibling}function vs(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:$i(4,t,t.return),vs(t);break;case 1:wn(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&lE(t,t.return,n),vs(t);break;case 27:uo(t.stateNode);case 26:case 5:wn(t,t.return),vs(t);break;case 22:t.memoizedState===null&&vs(t);break;case 30:vs(t);break;default:vs(t)}e=e.sibling}}function jn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,s=e,r=t,a=r.flags;switch(r.tag){case 0:case 11:case 15:jn(s,r,n),Ko(4,r);break;case 1:if(jn(s,r,n),i=r,s=i.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(h){pt(i,i.return,h)}if(i=r,s=i.updateQueue,s!==null){var l=i.stateNode;try{var u=s.shared.hiddenCallbacks;if(u!==null)for(s.shared.hiddenCallbacks=null,s=0;s<u.length;s++)gT(u[s],l)}catch(h){pt(i,i.return,h)}}n&&a&64&&oE(r),ro(r,r.return);break;case 27:hE(r);case 26:case 5:jn(s,r,n),n&&i===null&&a&4&&uE(r),ro(r,r.return);break;case 12:jn(s,r,n);break;case 31:jn(s,r,n),n&&a&4&&gE(s,r);break;case 13:jn(s,r,n),n&&a&4&&pE(s,r);break;case 22:r.memoizedState===null&&jn(s,r,n),ro(r,r.return);break;case 30:break;default:jn(s,r,n)}t=t.sibling}}function Lm(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Fo(n))}function Um(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Fo(e))}function hn(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)vE(e,t,n,i),t=t.sibling}function vE(e,t,n,i){var s=t.flags;switch(t.tag){case 0:case 11:case 15:hn(e,t,n,i),s&2048&&Ko(9,t);break;case 1:hn(e,t,n,i);break;case 3:hn(e,t,n,i),s&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Fo(e)));break;case 12:if(s&2048){hn(e,t,n,i),e=t.stateNode;try{var r=t.memoizedProps,a=r.id,l=r.onPostCommit;typeof l=="function"&&l(a,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(u){pt(t,t.return,u)}}else hn(e,t,n,i);break;case 31:hn(e,t,n,i);break;case 13:hn(e,t,n,i);break;case 23:break;case 22:r=t.stateNode,a=t.alternate,t.memoizedState!==null?r._visibility&2?hn(e,t,n,i):ao(e,t):r._visibility&2?hn(e,t,n,i):(r._visibility|=2,nr(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),s&2048&&Lm(a,t);break;case 24:hn(e,t,n,i),s&2048&&Um(t.alternate,t);break;default:hn(e,t,n,i)}}function nr(e,t,n,i,s){for(s=s&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var r=e,a=t,l=n,u=i,h=a.flags;switch(a.tag){case 0:case 11:case 15:nr(r,a,l,u,s),Ko(8,a);break;case 23:break;case 22:var d=a.stateNode;a.memoizedState!==null?d._visibility&2?nr(r,a,l,u,s):ao(r,a):(d._visibility|=2,nr(r,a,l,u,s)),s&&h&2048&&Lm(a.alternate,a);break;case 24:nr(r,a,l,u,s),s&&h&2048&&Um(a.alternate,a);break;default:nr(r,a,l,u,s)}t=t.sibling}}function ao(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,s=i.flags;switch(i.tag){case 22:ao(n,i),s&2048&&Lm(i.alternate,i);break;case 24:ao(n,i),s&2048&&Um(i.alternate,i);break;default:ao(n,i)}t=t.sibling}}var Fa=8192;function tr(e,t,n){if(e.subtreeFlags&Fa)for(e=e.child;e!==null;)TE(e,t,n),e=e.sibling}function TE(e,t,n){switch(e.tag){case 26:tr(e,t,n),e.flags&Fa&&e.memoizedState!==null&&vR(n,fn,e.memoizedState,e.memoizedProps);break;case 5:tr(e,t,n);break;case 3:case 4:var i=fn;fn=zu(e.stateNode.containerInfo),tr(e,t,n),fn=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Fa,Fa=16777216,tr(e,t,n),Fa=i):tr(e,t,n));break;default:tr(e,t,n)}}function EE(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function La(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];te=i,bE(i,e)}EE(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)AE(e),e=e.sibling}function AE(e){switch(e.tag){case 0:case 11:case 15:La(e),e.flags&2048&&$i(9,e,e.return);break;case 3:La(e);break;case 12:La(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,tu(e)):La(e);break;default:La(e)}}function tu(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];te=i,bE(i,e)}EE(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:$i(8,t,t.return),tu(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,tu(t));break;default:tu(t)}e=e.sibling}}function bE(e,t){for(;te!==null;){var n=te;switch(n.tag){case 0:case 11:case 15:$i(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Fo(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,te=i;else t:for(n=e;te!==null;){i=te;var s=i.sibling,r=i.return;if(dE(i),i===n){te=null;break t}if(s!==null){s.return=r,te=s;break t}te=r}}}var VI={getCacheForType:function(e){var t=le(Ht),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return le(Ht).controller.signal}},kI=typeof WeakMap=="function"?WeakMap:Map,ft=0,Tt=null,st=null,ut=0,gt=0,Pe=null,Ni=!1,sa=!1,Pm=!1,ei=0,Vt=0,Ji=0,Rs=0,zm=0,Be=0,Br=0,oo=null,Ce=null,ad=!1,Ic=0,SE=0,Ou=1/0,Mu=null,Ui=null,Xt=0,Pi=null,qr=null,$n=0,od=0,ld=null,wE=null,lo=0,ud=null;function Ke(){return ft&2&&ut!==0?ut&-ut:X.T!==null?Bm():V0()}function IE(){if(Be===0)if(!(ut&536870912)||ct){var e=Sl;Sl<<=1,!(Sl&3932160)&&(Sl=262144),Be=e}else Be=536870912;return e=$e.current,e!==null&&(e.flags|=32),Be}function xe(e,t,n){(e===Tt&&(gt===2||gt===9)||e.cancelPendingCommit!==null)&&(Hr(e,0),Di(e,ut,Be,!1)),Bo(e,n),(!(ft&2)||e!==Tt)&&(e===Tt&&(!(ft&2)&&(Rs|=n),Vt===4&&Di(e,ut,Be,!1)),kn(e))}function RE(e,t,n){if(ft&6)throw Error(k(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||jo(e,t),s=i?PI(e,t):$h(e,t,!0),r=i;do{if(s===0){sa&&!i&&Di(e,t,0,!1);break}else{if(n=e.current.alternate,r&&!LI(n)){s=$h(e,t,!1),r=!1;continue}if(s===2){if(r=t,e.errorRecoveryDisabledLanes&r)var a=0;else a=e.pendingLanes&-536870913,a=a!==0?a:a&536870912?536870912:0;if(a!==0){t=a;t:{var l=e;s=oo;var u=l.current.memoizedState.isDehydrated;if(u&&(Hr(l,a).flags|=256),a=$h(l,a,!1),a!==2){if(Pm&&!u){l.errorRecoveryDisabledLanes|=r,Rs|=r,s=4;break t}r=Ce,Ce=s,r!==null&&(Ce===null?Ce=r:Ce.push.apply(Ce,r))}s=a}if(r=!1,s!==2)continue}}if(s===1){Hr(e,0),Di(e,t,0,!0);break}t:{switch(i=e,r=s,r){case 0:case 1:throw Error(k(345));case 4:if((t&4194048)!==t)break;case 6:Di(i,t,Be,!Ni);break t;case 2:Ce=null;break;case 3:case 5:break;default:throw Error(k(329))}if((t&62914560)===t&&(s=Ic+300-He(),10<s)){if(Di(i,t,Be,!Ni),gc(i,0,!0)!==0)break t;$n=t,i.timeoutHandle=QE(Hy.bind(null,i,n,Ce,Mu,ad,t,Be,Rs,Br,Ni,r,"Throttled",-0,0),s);break t}Hy(i,n,Ce,Mu,ad,t,Be,Rs,Br,Ni,r,null,-0,0)}}break}while(!0);kn(e)}function Hy(e,t,n,i,s,r,a,l,u,h,d,m,g,T){if(e.timeoutHandle=-1,m=t.subtreeFlags,m&8192||(m&16785408)===16785408){m={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Fn},TE(t,r,m);var D=(r&62914560)===r?Ic-He():(r&4194048)===r?SE-He():0;if(D=TR(m,D),D!==null){$n=r,e.cancelPendingCommit=D(Gy.bind(null,e,t,r,n,i,s,a,l,u,d,m,null,g,T)),Di(e,r,a,!h);return}}Gy(e,t,r,n,i,s,a,l,u)}function LI(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var s=n[i],r=s.getSnapshot;s=s.value;try{if(!Xe(r(),s))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Di(e,t,n,i){t&=~zm,t&=~Rs,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var s=t;0<s;){var r=31-Ge(s),a=1<<r;i[r]=-1,s&=~a}n!==0&&x0(e,n,t)}function Rc(){return ft&6?!0:(Qo(0),!1)}function jm(){if(st!==null){if(gt===0)var e=st.return;else e=st,Gn=Gs=null,wm(e),wr=null,Ao=0,e=st;for(;e!==null;)aE(e.alternate,e),e=e.return;st=null}}function Hr(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,nR(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),$n=0,jm(),Tt=e,st=n=Yn(e.current,null),ut=t,gt=0,Pe=null,Ni=!1,sa=jo(e,t),Pm=!1,Br=Be=zm=Rs=Ji=Vt=0,Ce=oo=null,ad=!1,t&8&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var s=31-Ge(i),r=1<<s;t|=e[s],i&=~r}return ei=t,vc(),n}function CE(e,t){tt=null,X.H=So,t===ia||t===Ec?(t=Ey(),gt=3):t===_m?(t=Ey(),gt=4):gt=t===Vm?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Pe=t,st===null&&(Vt=1,Nu(e,nn(t,e.current)))}function NE(){var e=$e.current;return e===null?!0:(ut&4194048)===ut?an===null:(ut&62914560)===ut||ut&536870912?e===an:!1}function DE(){var e=X.H;return X.H=So,e===null?So:e}function xE(){var e=X.A;return X.A=VI,e}function Vu(){Vt=4,Ni||(ut&4194048)!==ut&&$e.current!==null||(sa=!0),!(Ji&134217727)&&!(Rs&134217727)||Tt===null||Di(Tt,ut,Be,!1)}function $h(e,t,n){var i=ft;ft|=2;var s=DE(),r=xE();(Tt!==e||ut!==t)&&(Mu=null,Hr(e,t)),t=!1;var a=Vt;t:do try{if(gt!==0&&st!==null){var l=st,u=Pe;switch(gt){case 8:jm(),a=6;break t;case 3:case 2:case 9:case 6:$e.current===null&&(t=!0);var h=gt;if(gt=0,Pe=null,vr(e,l,u,h),n&&sa){a=0;break t}break;default:h=gt,gt=0,Pe=null,vr(e,l,u,h)}}UI(),a=Vt;break}catch(d){CE(e,d)}while(!0);return t&&e.shellSuspendCounter++,Gn=Gs=null,ft=i,X.H=s,X.A=r,st===null&&(Tt=null,ut=0,vc()),a}function UI(){for(;st!==null;)OE(st)}function PI(e,t){var n=ft;ft|=2;var i=DE(),s=xE();Tt!==e||ut!==t?(Mu=null,Ou=He()+500,Hr(e,t)):sa=jo(e,t);t:do try{if(gt!==0&&st!==null){t=st;var r=Pe;e:switch(gt){case 1:gt=0,Pe=null,vr(e,t,r,1);break;case 2:case 9:if(Ty(r)){gt=0,Pe=null,Fy(t);break}t=function(){gt!==2&&gt!==9||Tt!==e||(gt=7),kn(e)},r.then(t,t);break t;case 3:gt=7;break t;case 4:gt=5;break t;case 7:Ty(r)?(gt=0,Pe=null,Fy(t)):(gt=0,Pe=null,vr(e,t,r,7));break;case 5:var a=null;switch(st.tag){case 26:a=st.memoizedState;case 5:case 27:var l=st;if(a?ZE(a):l.stateNode.complete){gt=0,Pe=null;var u=l.sibling;if(u!==null)st=u;else{var h=l.return;h!==null?(st=h,Cc(h)):st=null}break e}}gt=0,Pe=null,vr(e,t,r,5);break;case 6:gt=0,Pe=null,vr(e,t,r,6);break;case 8:jm(),Vt=6;break t;default:throw Error(k(462))}}zI();break}catch(d){CE(e,d)}while(!0);return Gn=Gs=null,X.H=i,X.A=s,ft=n,st!==null?0:(Tt=null,ut=0,vc(),Vt)}function zI(){for(;st!==null&&!l1();)OE(st)}function OE(e){var t=rE(e.alternate,e,ei);e.memoizedProps=e.pendingProps,t===null?Cc(e):st=t}function Fy(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Uy(n,t,t.pendingProps,t.type,void 0,ut);break;case 11:t=Uy(n,t,t.pendingProps,t.type.render,t.ref,ut);break;case 5:wm(t);default:aE(n,t),t=st=aT(t,ei),t=rE(n,t,ei)}e.memoizedProps=e.pendingProps,t===null?Cc(e):st=t}function vr(e,t,n,i){Gn=Gs=null,wm(t),wr=null,Ao=0;var s=t.return;try{if(RI(e,s,t,n,ut)){Vt=1,Nu(e,nn(n,e.current)),st=null;return}}catch(r){if(s!==null)throw st=s,r;Vt=1,Nu(e,nn(n,e.current)),st=null;return}t.flags&32768?(ct||i===1?e=!0:sa||ut&536870912?e=!1:(Ni=e=!0,(i===2||i===9||i===3||i===6)&&(i=$e.current,i!==null&&i.tag===13&&(i.flags|=16384))),ME(t,e)):Cc(t)}function Cc(e){var t=e;do{if(t.flags&32768){ME(t,Ni);return}e=t.return;var n=DI(t.alternate,t,ei);if(n!==null){st=n;return}if(t=t.sibling,t!==null){st=t;return}st=t=e}while(t!==null);Vt===0&&(Vt=5)}function ME(e,t){do{var n=xI(e.alternate,e);if(n!==null){n.flags&=32767,st=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){st=e;return}st=e=n}while(e!==null);Vt=6,st=null}function Gy(e,t,n,i,s,r,a,l,u){e.cancelPendingCommit=null;do Nc();while(Xt!==0);if(ft&6)throw Error(k(327));if(t!==null){if(t===e.current)throw Error(k(177));if(r=t.lanes|t.childLanes,r|=hm,_1(e,n,r,a,l,u),e===Tt&&(st=Tt=null,ut=0),qr=t,Pi=e,$n=n,od=r,ld=s,wE=i,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,HI(_u,function(){return PE(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,t.subtreeFlags&13878||i){i=X.T,X.T=null,s=dt.p,dt.p=2,a=ft,ft|=4;try{OI(e,t,n)}finally{ft=a,dt.p=s,X.T=i}}Xt=1,VE(),kE(),LE()}}function VE(){if(Xt===1){Xt=0;var e=Pi,t=qr,n=(t.flags&13878)!==0;if(t.subtreeFlags&13878||n){n=X.T,X.T=null;var i=dt.p;dt.p=2;var s=ft;ft|=4;try{yE(t,e);var r=dd,a=Z0(e.containerInfo),l=r.focusedElem,u=r.selectionRange;if(a!==l&&l&&l.ownerDocument&&J0(l.ownerDocument.documentElement,l)){if(u!==null&&cm(l)){var h=u.start,d=u.end;if(d===void 0&&(d=h),"selectionStart"in l)l.selectionStart=h,l.selectionEnd=Math.min(d,l.value.length);else{var m=l.ownerDocument||document,g=m&&m.defaultView||window;if(g.getSelection){var T=g.getSelection(),D=l.textContent.length,V=Math.min(u.start,D),P=u.end===void 0?V:Math.min(u.end,D);!T.extend&&V>P&&(a=P,P=V,V=a);var w=dy(l,V),E=dy(l,P);if(w&&E&&(T.rangeCount!==1||T.anchorNode!==w.node||T.anchorOffset!==w.offset||T.focusNode!==E.node||T.focusOffset!==E.offset)){var R=m.createRange();R.setStart(w.node,w.offset),T.removeAllRanges(),V>P?(T.addRange(R),T.extend(E.node,E.offset)):(R.setEnd(E.node,E.offset),T.addRange(R))}}}}for(m=[],T=l;T=T.parentNode;)T.nodeType===1&&m.push({element:T,left:T.scrollLeft,top:T.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<m.length;l++){var x=m[l];x.element.scrollLeft=x.left,x.element.scrollTop=x.top}}qu=!!fd,dd=fd=null}finally{ft=s,dt.p=i,X.T=n}}e.current=t,Xt=2}}function kE(){if(Xt===2){Xt=0;var e=Pi,t=qr,n=(t.flags&8772)!==0;if(t.subtreeFlags&8772||n){n=X.T,X.T=null;var i=dt.p;dt.p=2;var s=ft;ft|=4;try{fE(e,t.alternate,t)}finally{ft=s,dt.p=i,X.T=n}}Xt=3}}function LE(){if(Xt===4||Xt===3){Xt=0,u1();var e=Pi,t=qr,n=$n,i=wE;t.subtreeFlags&10256||t.flags&10256?Xt=5:(Xt=0,qr=Pi=null,UE(e,e.pendingLanes));var s=e.pendingLanes;if(s===0&&(Ui=null),im(n),t=t.stateNode,Fe&&typeof Fe.onCommitFiberRoot=="function")try{Fe.onCommitFiberRoot(zo,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=X.T,s=dt.p,dt.p=2,X.T=null;try{for(var r=e.onRecoverableError,a=0;a<i.length;a++){var l=i[a];r(l.value,{componentStack:l.stack})}}finally{X.T=t,dt.p=s}}$n&3&&Nc(),kn(e),s=e.pendingLanes,n&261930&&s&42?e===ud?lo++:(lo=0,ud=e):lo=0,Qo(0)}}function UE(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Fo(t)))}function Nc(){return VE(),kE(),LE(),PE()}function PE(){if(Xt!==5)return!1;var e=Pi,t=od;od=0;var n=im($n),i=X.T,s=dt.p;try{dt.p=32>n?32:n,X.T=null,n=ld,ld=null;var r=Pi,a=$n;if(Xt=0,qr=Pi=null,$n=0,ft&6)throw Error(k(331));var l=ft;if(ft|=4,AE(r.current),vE(r,r.current,a,n),ft=l,Qo(0,!1),Fe&&typeof Fe.onPostCommitFiberRoot=="function")try{Fe.onPostCommitFiberRoot(zo,r)}catch{}return!0}finally{dt.p=s,X.T=i,UE(e,t)}}function Ky(e,t,n){t=nn(n,t),t=nd(e.stateNode,t,2),e=Li(e,t,2),e!==null&&(Bo(e,2),kn(e))}function pt(e,t,n){if(e.tag===3)Ky(e,e,n);else for(;t!==null;){if(t.tag===3){Ky(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ui===null||!Ui.has(i))){e=nn(n,e),n=WT(2),i=Li(t,n,2),i!==null&&(tE(n,i,t,e),Bo(i,2),kn(i));break}}t=t.return}}function Jh(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new kI;var s=new Set;i.set(t,s)}else s=i.get(t),s===void 0&&(s=new Set,i.set(t,s));s.has(n)||(Pm=!0,s.add(n),e=jI.bind(null,e,t,n),t.then(e,e))}function jI(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Tt===e&&(ut&n)===n&&(Vt===4||Vt===3&&(ut&62914560)===ut&&300>He()-Ic?!(ft&2)&&Hr(e,0):zm|=n,Br===ut&&(Br=0)),kn(e)}function zE(e,t){t===0&&(t=D0()),e=Fs(e,t),e!==null&&(Bo(e,t),kn(e))}function BI(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),zE(e,n)}function qI(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(k(314))}i!==null&&i.delete(t),zE(e,n)}function HI(e,t){return em(e,t)}var ku=null,ir=null,cd=!1,Lu=!1,Zh=!1,xi=0;function kn(e){e!==ir&&e.next===null&&(ir===null?ku=ir=e:ir=ir.next=e),Lu=!0,cd||(cd=!0,GI())}function Qo(e,t){if(!Zh&&Lu){Zh=!0;do for(var n=!1,i=ku;i!==null;){if(e!==0){var s=i.pendingLanes;if(s===0)var r=0;else{var a=i.suspendedLanes,l=i.pingedLanes;r=(1<<31-Ge(42|e)+1)-1,r&=s&~(a&~l),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(n=!0,Qy(i,r))}else r=ut,r=gc(i,i===Tt?r:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),!(r&3)||jo(i,r)||(n=!0,Qy(i,r));i=i.next}while(n);Zh=!1}}function FI(){jE()}function jE(){Lu=cd=!1;var e=0;xi!==0&&eR()&&(e=xi);for(var t=He(),n=null,i=ku;i!==null;){var s=i.next,r=BE(i,t);r===0?(i.next=null,n===null?ku=s:n.next=s,s===null&&(ir=n)):(n=i,(e!==0||r&3)&&(Lu=!0)),i=s}Xt!==0&&Xt!==5||Qo(e),xi!==0&&(xi=0)}function BE(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var a=31-Ge(r),l=1<<a,u=s[a];u===-1?(!(l&n)||l&i)&&(s[a]=y1(l,t)):u<=t&&(e.expiredLanes|=l),r&=~l}if(t=Tt,n=ut,n=gc(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(gt===2||gt===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Ih(i),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||jo(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&Ih(i),im(n)){case 2:case 8:n=C0;break;case 32:n=_u;break;case 268435456:n=N0;break;default:n=_u}return i=qE.bind(null,e),n=em(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&Ih(i),e.callbackPriority=2,e.callbackNode=null,2}function qE(e,t){if(Xt!==0&&Xt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Nc()&&e.callbackNode!==n)return null;var i=ut;return i=gc(e,e===Tt?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(RE(e,i,t),BE(e,He()),e.callbackNode!=null&&e.callbackNode===n?qE.bind(null,e):null)}function Qy(e,t){if(Nc())return null;RE(e,t,!0)}function GI(){iR(function(){ft&6?em(R0,FI):jE()})}function Bm(){if(xi===0){var e=Pr;e===0&&(e=bl,bl<<=1,!(bl&261888)&&(bl=256)),xi=e}return xi}function Yy(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Gl(""+e)}function Xy(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function KI(e,t,n,i,s){if(t==="submit"&&n&&n.stateNode===s){var r=Yy((s[Oe]||null).action),a=i.submitter;a&&(t=(t=a[Oe]||null)?Yy(t.formAction):a.getAttribute("formAction"),t!==null&&(r=t,a=null));var l=new pc("action","action",null,i,s);e.push({event:l,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(xi!==0){var u=a?Xy(s,a):new FormData(s);td(n,{pending:!0,data:u,method:s.method,action:r},null,u)}}else typeof r=="function"&&(l.preventDefault(),u=a?Xy(s,a):new FormData(s),td(n,{pending:!0,data:u,method:s.method,action:r},r,u))},currentTarget:s}]})}}for(var Wh=0;Wh<qf.length;Wh++){var tf=qf[Wh],QI=tf.toLowerCase(),YI=tf[0].toUpperCase()+tf.slice(1);_n(QI,"on"+YI)}_n(tT,"onAnimationEnd");_n(eT,"onAnimationIteration");_n(nT,"onAnimationStart");_n("dblclick","onDoubleClick");_n("focusin","onFocus");_n("focusout","onBlur");_n(cI,"onTransitionRun");_n(hI,"onTransitionStart");_n(fI,"onTransitionCancel");_n(iT,"onTransitionEnd");Lr("onMouseEnter",["mouseout","mouseover"]);Lr("onMouseLeave",["mouseout","mouseover"]);Lr("onPointerEnter",["pointerout","pointerover"]);Lr("onPointerLeave",["pointerout","pointerover"]);Bs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Bs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Bs("onBeforeInput",["compositionend","keypress","textInput","paste"]);Bs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Bs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Bs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),XI=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(wo));function HE(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],s=i.event;i=i.listeners;t:{var r=void 0;if(t)for(var a=i.length-1;0<=a;a--){var l=i[a],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==r&&s.isPropagationStopped())break t;r=l,s.currentTarget=h;try{r(s)}catch(d){Tu(d)}s.currentTarget=null,r=u}else for(a=0;a<i.length;a++){if(l=i[a],u=l.instance,h=l.currentTarget,l=l.listener,u!==r&&s.isPropagationStopped())break t;r=l,s.currentTarget=h;try{r(s)}catch(d){Tu(d)}s.currentTarget=null,r=u}}}}function it(e,t){var n=t[Vf];n===void 0&&(n=t[Vf]=new Set);var i=e+"__bubble";n.has(i)||(FE(t,e,2,!1),n.add(i))}function ef(e,t,n){var i=0;t&&(i|=4),FE(n,e,i,t)}var Ml="_reactListening"+Math.random().toString(36).slice(2);function qm(e){if(!e[Ml]){e[Ml]=!0,k0.forEach(function(n){n!=="selectionchange"&&(XI.has(n)||ef(n,!1,e),ef(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ml]||(t[Ml]=!0,ef("selectionchange",!1,t))}}function FE(e,t,n,i){switch(iA(t)){case 2:var s=bR;break;case 8:s=SR;break;default:s=Km}n=s.bind(null,t,n,e),s=void 0,!zf||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function nf(e,t,n,i,s){var r=i;if(!(t&1)&&!(t&2)&&i!==null)t:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var l=i.stateNode.containerInfo;if(l===s)break;if(a===4)for(a=i.return;a!==null;){var u=a.tag;if((u===3||u===4)&&a.stateNode.containerInfo===s)return;a=a.return}for(;l!==null;){if(a=cr(l),a===null)return;if(u=a.tag,u===5||u===6||u===26||u===27){i=r=a;continue t}l=l.parentNode}}i=i.return}H0(function(){var h=r,d=am(n),m=[];t:{var g=sT.get(e);if(g!==void 0){var T=pc,D=e;switch(e){case"keypress":if(Ql(n)===0)break t;case"keydown":case"keyup":T=q1;break;case"focusin":D="focus",T=xh;break;case"focusout":D="blur",T=xh;break;case"beforeblur":case"afterblur":T=xh;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":T=iy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":T=D1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":T=G1;break;case tT:case eT:case nT:T=M1;break;case iT:T=Q1;break;case"scroll":case"scrollend":T=C1;break;case"wheel":T=X1;break;case"copy":case"cut":case"paste":T=k1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":T=ry;break;case"toggle":case"beforetoggle":T=J1}var V=(t&4)!==0,P=!V&&(e==="scroll"||e==="scrollend"),w=V?g!==null?g+"Capture":null:g;V=[];for(var E=h,R;E!==null;){var x=E;if(R=x.stateNode,x=x.tag,x!==5&&x!==26&&x!==27||R===null||w===null||(x=yo(E,w),x!=null&&V.push(Io(E,x,R))),P)break;E=E.return}0<V.length&&(g=new T(g,D,null,n,d),m.push({event:g,listeners:V}))}}if(!(t&7)){t:{if(g=e==="mouseover"||e==="pointerover",T=e==="mouseout"||e==="pointerout",g&&n!==Pf&&(D=n.relatedTarget||n.fromElement)&&(cr(D)||D[ta]))break t;if((T||g)&&(g=d.window===d?d:(g=d.ownerDocument)?g.defaultView||g.parentWindow:window,T?(D=n.relatedTarget||n.toElement,T=h,D=D?cr(D):null,D!==null&&(P=Po(D),V=D.tag,D!==P||V!==5&&V!==27&&V!==6)&&(D=null)):(T=null,D=h),T!==D)){if(V=iy,x="onMouseLeave",w="onMouseEnter",E="mouse",(e==="pointerout"||e==="pointerover")&&(V=ry,x="onPointerLeave",w="onPointerEnter",E="pointer"),P=T==null?g:qa(T),R=D==null?g:qa(D),g=new V(x,E+"leave",T,n,d),g.target=P,g.relatedTarget=R,x=null,cr(d)===h&&(V=new V(w,E+"enter",D,n,d),V.target=R,V.relatedTarget=P,x=V),P=x,T&&D)e:{for(V=$I,w=T,E=D,R=0,x=w;x;x=V(x))R++;x=0;for(var z=E;z;z=V(z))x++;for(;0<R-x;)w=V(w),R--;for(;0<x-R;)E=V(E),x--;for(;R--;){if(w===E||E!==null&&w===E.alternate){V=w;break e}w=V(w),E=V(E)}V=null}else V=null;T!==null&&$y(m,g,T,V,!1),D!==null&&P!==null&&$y(m,P,D,V,!0)}}t:{if(g=h?qa(h):window,T=g.nodeName&&g.nodeName.toLowerCase(),T==="select"||T==="input"&&g.type==="file")var G=uy;else if(ly(g))if(X0)G=oI;else{G=rI;var v=sI}else T=g.nodeName,!T||T.toLowerCase()!=="input"||g.type!=="checkbox"&&g.type!=="radio"?h&&rm(h.elementType)&&(G=uy):G=aI;if(G&&(G=G(e,h))){Y0(m,G,n,d);break t}v&&v(e,g,h),e==="focusout"&&h&&g.type==="number"&&h.memoizedProps.value!=null&&Uf(g,"number",g.value)}switch(v=h?qa(h):window,e){case"focusin":(ly(v)||v.contentEditable==="true")&&(dr=v,jf=h,Wa=null);break;case"focusout":Wa=jf=dr=null;break;case"mousedown":Bf=!0;break;case"contextmenu":case"mouseup":case"dragend":Bf=!1,my(m,n,d);break;case"selectionchange":if(uI)break;case"keydown":case"keyup":my(m,n,d)}var p;if(um)t:{switch(e){case"compositionstart":var _="onCompositionStart";break t;case"compositionend":_="onCompositionEnd";break t;case"compositionupdate":_="onCompositionUpdate";break t}_=void 0}else fr?K0(e,n)&&(_="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(G0&&n.locale!=="ko"&&(fr||_!=="onCompositionStart"?_==="onCompositionEnd"&&fr&&(p=F0()):(Ci=d,om="value"in Ci?Ci.value:Ci.textContent,fr=!0)),v=Uu(h,_),0<v.length&&(_=new sy(_,e,null,n,d),m.push({event:_,listeners:v}),p?_.data=p:(p=Q0(n),p!==null&&(_.data=p)))),(p=W1?tI(e,n):eI(e,n))&&(_=Uu(h,"onBeforeInput"),0<_.length&&(v=new sy("onBeforeInput","beforeinput",null,n,d),m.push({event:v,listeners:_}),v.data=p)),KI(m,e,h,n,d)}HE(m,t)})}function Io(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Uu(e,t){for(var n=t+"Capture",i=[];e!==null;){var s=e,r=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||r===null||(s=yo(e,n),s!=null&&i.unshift(Io(e,s,r)),s=yo(e,t),s!=null&&i.push(Io(e,s,r))),e.tag===3)return i;e=e.return}return[]}function $I(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function $y(e,t,n,i,s){for(var r=t._reactName,a=[];n!==null&&n!==i;){var l=n,u=l.alternate,h=l.stateNode;if(l=l.tag,u!==null&&u===i)break;l!==5&&l!==26&&l!==27||h===null||(u=h,s?(h=yo(n,r),h!=null&&a.unshift(Io(n,h,u))):s||(h=yo(n,r),h!=null&&a.push(Io(n,h,u)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var JI=/\r\n?/g,ZI=/\u0000|\uFFFD/g;function Jy(e){return(typeof e=="string"?e:""+e).replace(JI,`
`).replace(ZI,"")}function GE(e,t){return t=Jy(t),Jy(e)===t}function yt(e,t,n,i,s,r){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||Ur(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&Ur(e,""+i);break;case"className":Il(e,"class",i);break;case"tabIndex":Il(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Il(e,n,i);break;case"style":q0(e,i,r);break;case"data":if(t!=="object"){Il(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Gl(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(n==="formAction"?(t!=="input"&&yt(e,t,"name",s.name,s,null),yt(e,t,"formEncType",s.formEncType,s,null),yt(e,t,"formMethod",s.formMethod,s,null),yt(e,t,"formTarget",s.formTarget,s,null)):(yt(e,t,"encType",s.encType,s,null),yt(e,t,"method",s.method,s,null),yt(e,t,"target",s.target,s,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Gl(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=Fn);break;case"onScroll":i!=null&&it("scroll",e);break;case"onScrollEnd":i!=null&&it("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(k(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(k(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=Gl(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":it("beforetoggle",e),it("toggle",e),Fl(e,"popover",i);break;case"xlinkActuate":Ln(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Ln(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Ln(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Ln(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Ln(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Ln(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Ln(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Ln(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Ln(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Fl(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=I1.get(n)||n,Fl(e,n,i))}}function hd(e,t,n,i,s,r){switch(n){case"style":q0(e,i,r);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(k(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(k(60));e.innerHTML=n}}break;case"children":typeof i=="string"?Ur(e,i):(typeof i=="number"||typeof i=="bigint")&&Ur(e,""+i);break;case"onScroll":i!=null&&it("scroll",e);break;case"onScrollEnd":i!=null&&it("scrollend",e);break;case"onClick":i!=null&&(e.onclick=Fn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!L0.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(s=n.endsWith("Capture"),t=n.slice(2,s?n.length-7:void 0),r=e[Oe]||null,r=r!=null?r[n]:null,typeof r=="function"&&e.removeEventListener(t,r,s),typeof i=="function")){typeof r!="function"&&r!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,s);break t}n in e?e[n]=i:i===!0?e.setAttribute(n,""):Fl(e,n,i)}}}function ue(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":it("error",e),it("load",e);var i=!1,s=!1,r;for(r in n)if(n.hasOwnProperty(r)){var a=n[r];if(a!=null)switch(r){case"src":i=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(k(137,t));default:yt(e,t,r,a,n,null)}}s&&yt(e,t,"srcSet",n.srcSet,n,null),i&&yt(e,t,"src",n.src,n,null);return;case"input":it("invalid",e);var l=r=a=s=null,u=null,h=null;for(i in n)if(n.hasOwnProperty(i)){var d=n[i];if(d!=null)switch(i){case"name":s=d;break;case"type":a=d;break;case"checked":u=d;break;case"defaultChecked":h=d;break;case"value":r=d;break;case"defaultValue":l=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(k(137,t));break;default:yt(e,t,i,d,n,null)}}z0(e,r,l,u,h,a,s,!1);return;case"select":it("invalid",e),i=a=r=null;for(s in n)if(n.hasOwnProperty(s)&&(l=n[s],l!=null))switch(s){case"value":r=l;break;case"defaultValue":a=l;break;case"multiple":i=l;default:yt(e,t,s,l,n,null)}t=r,n=a,e.multiple=!!i,t!=null?Ar(e,!!i,t,!1):n!=null&&Ar(e,!!i,n,!0);return;case"textarea":it("invalid",e),r=s=i=null;for(a in n)if(n.hasOwnProperty(a)&&(l=n[a],l!=null))switch(a){case"value":i=l;break;case"defaultValue":s=l;break;case"children":r=l;break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(k(91));break;default:yt(e,t,a,l,n,null)}B0(e,i,s,r);return;case"option":for(u in n)if(n.hasOwnProperty(u)&&(i=n[u],i!=null))switch(u){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:yt(e,t,u,i,n,null)}return;case"dialog":it("beforetoggle",e),it("toggle",e),it("cancel",e),it("close",e);break;case"iframe":case"object":it("load",e);break;case"video":case"audio":for(i=0;i<wo.length;i++)it(wo[i],e);break;case"image":it("error",e),it("load",e);break;case"details":it("toggle",e);break;case"embed":case"source":case"link":it("error",e),it("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(h in n)if(n.hasOwnProperty(h)&&(i=n[h],i!=null))switch(h){case"children":case"dangerouslySetInnerHTML":throw Error(k(137,t));default:yt(e,t,h,i,n,null)}return;default:if(rm(t)){for(d in n)n.hasOwnProperty(d)&&(i=n[d],i!==void 0&&hd(e,t,d,i,n,void 0));return}}for(l in n)n.hasOwnProperty(l)&&(i=n[l],i!=null&&yt(e,t,l,i,n,null))}function WI(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,r=null,a=null,l=null,u=null,h=null,d=null;for(T in n){var m=n[T];if(n.hasOwnProperty(T)&&m!=null)switch(T){case"checked":break;case"value":break;case"defaultValue":u=m;default:i.hasOwnProperty(T)||yt(e,t,T,null,i,m)}}for(var g in i){var T=i[g];if(m=n[g],i.hasOwnProperty(g)&&(T!=null||m!=null))switch(g){case"type":r=T;break;case"name":s=T;break;case"checked":h=T;break;case"defaultChecked":d=T;break;case"value":a=T;break;case"defaultValue":l=T;break;case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(k(137,t));break;default:T!==m&&yt(e,t,g,T,i,m)}}Lf(e,a,l,u,h,d,r,s);return;case"select":T=a=l=g=null;for(r in n)if(u=n[r],n.hasOwnProperty(r)&&u!=null)switch(r){case"value":break;case"multiple":T=u;default:i.hasOwnProperty(r)||yt(e,t,r,null,i,u)}for(s in i)if(r=i[s],u=n[s],i.hasOwnProperty(s)&&(r!=null||u!=null))switch(s){case"value":g=r;break;case"defaultValue":l=r;break;case"multiple":a=r;default:r!==u&&yt(e,t,s,r,i,u)}t=l,n=a,i=T,g!=null?Ar(e,!!n,g,!1):!!i!=!!n&&(t!=null?Ar(e,!!n,t,!0):Ar(e,!!n,n?[]:"",!1));return;case"textarea":T=g=null;for(l in n)if(s=n[l],n.hasOwnProperty(l)&&s!=null&&!i.hasOwnProperty(l))switch(l){case"value":break;case"children":break;default:yt(e,t,l,null,i,s)}for(a in i)if(s=i[a],r=n[a],i.hasOwnProperty(a)&&(s!=null||r!=null))switch(a){case"value":g=s;break;case"defaultValue":T=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(k(91));break;default:s!==r&&yt(e,t,a,s,i,r)}j0(e,g,T);return;case"option":for(var D in n)if(g=n[D],n.hasOwnProperty(D)&&g!=null&&!i.hasOwnProperty(D))switch(D){case"selected":e.selected=!1;break;default:yt(e,t,D,null,i,g)}for(u in i)if(g=i[u],T=n[u],i.hasOwnProperty(u)&&g!==T&&(g!=null||T!=null))switch(u){case"selected":e.selected=g&&typeof g!="function"&&typeof g!="symbol";break;default:yt(e,t,u,g,i,T)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var V in n)g=n[V],n.hasOwnProperty(V)&&g!=null&&!i.hasOwnProperty(V)&&yt(e,t,V,null,i,g);for(h in i)if(g=i[h],T=n[h],i.hasOwnProperty(h)&&g!==T&&(g!=null||T!=null))switch(h){case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(k(137,t));break;default:yt(e,t,h,g,i,T)}return;default:if(rm(t)){for(var P in n)g=n[P],n.hasOwnProperty(P)&&g!==void 0&&!i.hasOwnProperty(P)&&hd(e,t,P,void 0,i,g);for(d in i)g=i[d],T=n[d],!i.hasOwnProperty(d)||g===T||g===void 0&&T===void 0||hd(e,t,d,g,i,T);return}}for(var w in n)g=n[w],n.hasOwnProperty(w)&&g!=null&&!i.hasOwnProperty(w)&&yt(e,t,w,null,i,g);for(m in i)g=i[m],T=n[m],!i.hasOwnProperty(m)||g===T||g==null&&T==null||yt(e,t,m,g,i,T)}function Zy(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function tR(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var s=n[i],r=s.transferSize,a=s.initiatorType,l=s.duration;if(r&&l&&Zy(a)){for(a=0,l=s.responseEnd,i+=1;i<n.length;i++){var u=n[i],h=u.startTime;if(h>l)break;var d=u.transferSize,m=u.initiatorType;d&&Zy(m)&&(u=u.responseEnd,a+=d*(u<l?1:(l-h)/(u-h)))}if(--i,t+=8*(r+a)/(s.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var fd=null,dd=null;function Pu(e){return e.nodeType===9?e:e.ownerDocument}function Wy(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function KE(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function md(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var sf=null;function eR(){var e=window.event;return e&&e.type==="popstate"?e===sf?!1:(sf=e,!0):(sf=null,!1)}var QE=typeof setTimeout=="function"?setTimeout:void 0,nR=typeof clearTimeout=="function"?clearTimeout:void 0,t_=typeof Promise=="function"?Promise:void 0,iR=typeof queueMicrotask=="function"?queueMicrotask:typeof t_<"u"?function(e){return t_.resolve(null).then(e).catch(sR)}:QE;function sR(e){setTimeout(function(){throw e})}function os(e){return e==="head"}function e_(e,t){var n=t,i=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(s),Gr(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")uo(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,uo(n);for(var r=n.firstChild;r;){var a=r.nextSibling,l=r.nodeName;r[qo]||l==="SCRIPT"||l==="STYLE"||l==="LINK"&&r.rel.toLowerCase()==="stylesheet"||n.removeChild(r),r=a}}else n==="body"&&uo(e.ownerDocument.body);n=s}while(n);Gr(t)}function n_(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function gd(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":gd(n),sm(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function rR(e,t,n,i){for(;e.nodeType===1;){var s=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[qo])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=on(e.nextSibling),e===null)break}return null}function aR(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=on(e.nextSibling),e===null))return null;return e}function YE(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=on(e.nextSibling),e===null))return null;return e}function pd(e){return e.data==="$?"||e.data==="$~"}function yd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function oR(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function on(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var _d=null;function i_(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return on(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function s_(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function XE(e,t,n){switch(t=Pu(n),e){case"html":if(e=t.documentElement,!e)throw Error(k(452));return e;case"head":if(e=t.head,!e)throw Error(k(453));return e;case"body":if(e=t.body,!e)throw Error(k(454));return e;default:throw Error(k(451))}}function uo(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);sm(e)}var un=new Map,r_=new Set;function zu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var oi=dt.d;dt.d={f:lR,r:uR,D:cR,C:hR,L:fR,m:dR,X:gR,S:mR,M:pR};function lR(){var e=oi.f(),t=Rc();return e||t}function uR(e){var t=ea(e);t!==null&&t.tag===5&&t.type==="form"?qT(t):oi.r(e)}var ra=typeof document>"u"?null:document;function $E(e,t,n){var i=ra;if(i&&typeof t=="string"&&t){var s=en(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof n=="string"&&(s+='[crossorigin="'+n+'"]'),r_.has(s)||(r_.add(s),e={rel:e,crossOrigin:n,href:t},i.querySelector(s)===null&&(t=i.createElement("link"),ue(t,"link",e),ee(t),i.head.appendChild(t)))}}function cR(e){oi.D(e),$E("dns-prefetch",e,null)}function hR(e,t){oi.C(e,t),$E("preconnect",e,t)}function fR(e,t,n){oi.L(e,t,n);var i=ra;if(i&&e&&t){var s='link[rel="preload"][as="'+en(t)+'"]';t==="image"&&n&&n.imageSrcSet?(s+='[imagesrcset="'+en(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(s+='[imagesizes="'+en(n.imageSizes)+'"]')):s+='[href="'+en(e)+'"]';var r=s;switch(t){case"style":r=Fr(e);break;case"script":r=aa(e)}un.has(r)||(e=Nt({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),un.set(r,e),i.querySelector(s)!==null||t==="style"&&i.querySelector(Yo(r))||t==="script"&&i.querySelector(Xo(r))||(t=i.createElement("link"),ue(t,"link",e),ee(t),i.head.appendChild(t)))}}function dR(e,t){oi.m(e,t);var n=ra;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+en(i)+'"][href="'+en(e)+'"]',r=s;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=aa(e)}if(!un.has(r)&&(e=Nt({rel:"modulepreload",href:e},t),un.set(r,e),n.querySelector(s)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Xo(r)))return}i=n.createElement("link"),ue(i,"link",e),ee(i),n.head.appendChild(i)}}}function mR(e,t,n){oi.S(e,t,n);var i=ra;if(i&&e){var s=Er(i).hoistableStyles,r=Fr(e);t=t||"default";var a=s.get(r);if(!a){var l={loading:0,preload:null};if(a=i.querySelector(Yo(r)))l.loading=5;else{e=Nt({rel:"stylesheet",href:e,"data-precedence":t},n),(n=un.get(r))&&Hm(e,n);var u=a=i.createElement("link");ee(u),ue(u,"link",e),u._p=new Promise(function(h,d){u.onload=h,u.onerror=d}),u.addEventListener("load",function(){l.loading|=1}),u.addEventListener("error",function(){l.loading|=2}),l.loading|=4,eu(a,t,i)}a={type:"stylesheet",instance:a,count:1,state:l},s.set(r,a)}}}function gR(e,t){oi.X(e,t);var n=ra;if(n&&e){var i=Er(n).hoistableScripts,s=aa(e),r=i.get(s);r||(r=n.querySelector(Xo(s)),r||(e=Nt({src:e,async:!0},t),(t=un.get(s))&&Fm(e,t),r=n.createElement("script"),ee(r),ue(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(s,r))}}function pR(e,t){oi.M(e,t);var n=ra;if(n&&e){var i=Er(n).hoistableScripts,s=aa(e),r=i.get(s);r||(r=n.querySelector(Xo(s)),r||(e=Nt({src:e,async:!0,type:"module"},t),(t=un.get(s))&&Fm(e,t),r=n.createElement("script"),ee(r),ue(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(s,r))}}function a_(e,t,n,i){var s=(s=Mi.current)?zu(s):null;if(!s)throw Error(k(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Fr(n.href),n=Er(s).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Fr(n.href);var r=Er(s).hoistableStyles,a=r.get(e);if(a||(s=s.ownerDocument||s,a={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,a),(r=s.querySelector(Yo(e)))&&!r._p&&(a.instance=r,a.state.loading=5),un.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},un.set(e,n),r||yR(s,e,n,a.state))),t&&i===null)throw Error(k(528,""));return a}if(t&&i!==null)throw Error(k(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=aa(n),n=Er(s).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(k(444,e))}}function Fr(e){return'href="'+en(e)+'"'}function Yo(e){return'link[rel="stylesheet"]['+e+"]"}function JE(e){return Nt({},e,{"data-precedence":e.precedence,precedence:null})}function yR(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),ue(t,"link",n),ee(t),e.head.appendChild(t))}function aa(e){return'[src="'+en(e)+'"]'}function Xo(e){return"script[async]"+e}function o_(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+en(n.href)+'"]');if(i)return t.instance=i,ee(i),i;var s=Nt({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),ee(i),ue(i,"style",s),eu(i,n.precedence,e),t.instance=i;case"stylesheet":s=Fr(n.href);var r=e.querySelector(Yo(s));if(r)return t.state.loading|=4,t.instance=r,ee(r),r;i=JE(n),(s=un.get(s))&&Hm(i,s),r=(e.ownerDocument||e).createElement("link"),ee(r);var a=r;return a._p=new Promise(function(l,u){a.onload=l,a.onerror=u}),ue(r,"link",i),t.state.loading|=4,eu(r,n.precedence,e),t.instance=r;case"script":return r=aa(n.src),(s=e.querySelector(Xo(r)))?(t.instance=s,ee(s),s):(i=n,(s=un.get(r))&&(i=Nt({},n),Fm(i,s)),e=e.ownerDocument||e,s=e.createElement("script"),ee(s),ue(s,"link",i),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(k(443,t.type))}else t.type==="stylesheet"&&!(t.state.loading&4)&&(i=t.instance,t.state.loading|=4,eu(i,n.precedence,e));return t.instance}function eu(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=i.length?i[i.length-1]:null,r=s,a=0;a<i.length;a++){var l=i[a];if(l.dataset.precedence===t)r=l;else if(r!==s)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Hm(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Fm(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var nu=null;function l_(e,t,n){if(nu===null){var i=new Map,s=nu=new Map;s.set(n,i)}else s=nu,i=s.get(n),i||(i=new Map,s.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),s=0;s<n.length;s++){var r=n[s];if(!(r[qo]||r[re]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var a=r.getAttribute(t)||"";a=e+a;var l=i.get(a);l?l.push(r):i.set(a,[r])}}return i}function u_(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function _R(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function ZE(e){return!(e.type==="stylesheet"&&!(e.state.loading&3))}function vR(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&!(n.state.loading&4)){if(n.instance===null){var s=Fr(i.href),r=t.querySelector(Yo(s));if(r){t=r._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=ju.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=r,ee(r);return}r=t.ownerDocument||t,i=JE(i),(s=un.get(s))&&Hm(i,s),r=r.createElement("link"),ee(r);var a=r;a._p=new Promise(function(l,u){a.onload=l,a.onerror=u}),ue(r,"link",i),n.instance=r}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=ju.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var rf=0;function TR(e,t){return e.stylesheets&&e.count===0&&iu(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&iu(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4+t);0<e.imgBytes&&rf===0&&(rf=62500*tR());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&iu(e,e.stylesheets),e.unsuspend)){var r=e.unsuspend;e.unsuspend=null,r()}},(e.imgBytes>rf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(s)}}:null}function ju(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)iu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Bu=null;function iu(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Bu=new Map,t.forEach(ER,e),Bu=null,ju.call(e))}function ER(e,t){if(!(t.state.loading&4)){var n=Bu.get(e);if(n)var i=n.get(null);else{n=new Map,Bu.set(e,n);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<s.length;r++){var a=s[r];(a.nodeName==="LINK"||a.getAttribute("media")!=="not all")&&(n.set(a.dataset.precedence,a),i=a)}i&&n.set(null,i)}s=t.instance,a=s.getAttribute("data-precedence"),r=n.get(a)||i,r===i&&n.set(null,s),n.set(a,s),this.count++,i=ju.bind(this),s.addEventListener("load",i),s.addEventListener("error",i),r?r.parentNode.insertBefore(s,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var Ro={$$typeof:Hn,Provider:null,Consumer:null,_currentValue:bs,_currentValue2:bs,_threadCount:0};function AR(e,t,n,i,s,r,a,l,u){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Rh(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rh(0),this.hiddenUpdates=Rh(null),this.identifierPrefix=i,this.onUncaughtError=s,this.onCaughtError=r,this.onRecoverableError=a,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=u,this.incompleteTransitions=new Map}function WE(e,t,n,i,s,r,a,l,u,h,d,m){return e=new AR(e,t,n,a,u,h,d,m,l),t=1,r===!0&&(t|=24),r=je(3,null,null,t),e.current=r,r.stateNode=e,t=pm(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:i,isDehydrated:n,cache:t},vm(r),e}function tA(e){return e?(e=pr,e):pr}function eA(e,t,n,i,s,r){s=tA(s),i.context===null?i.context=s:i.pendingContext=s,i=ki(t),i.payload={element:n},r=r===void 0?null:r,r!==null&&(i.callback=r),n=Li(e,i,t),n!==null&&(xe(n,e,t),eo(n,e,t))}function c_(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Gm(e,t){c_(e,t),(e=e.alternate)&&c_(e,t)}function nA(e){if(e.tag===13||e.tag===31){var t=Fs(e,67108864);t!==null&&xe(t,e,67108864),Gm(e,67108864)}}function h_(e){if(e.tag===13||e.tag===31){var t=Ke();t=nm(t);var n=Fs(e,t);n!==null&&xe(n,e,t),Gm(e,t)}}var qu=!0;function bR(e,t,n,i){var s=X.T;X.T=null;var r=dt.p;try{dt.p=2,Km(e,t,n,i)}finally{dt.p=r,X.T=s}}function SR(e,t,n,i){var s=X.T;X.T=null;var r=dt.p;try{dt.p=8,Km(e,t,n,i)}finally{dt.p=r,X.T=s}}function Km(e,t,n,i){if(qu){var s=vd(i);if(s===null)nf(e,t,i,Hu,n),f_(e,i);else if(IR(s,e,t,n,i))i.stopPropagation();else if(f_(e,i),t&4&&-1<wR.indexOf(e)){for(;s!==null;){var r=ea(s);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var a=ys(r.pendingLanes);if(a!==0){var l=r;for(l.pendingLanes|=2,l.entangledLanes|=2;a;){var u=1<<31-Ge(a);l.entanglements[1]|=u,a&=~u}kn(r),!(ft&6)&&(Ou=He()+500,Qo(0))}}break;case 31:case 13:l=Fs(r,2),l!==null&&xe(l,r,2),Rc(),Gm(r,2)}if(r=vd(i),r===null&&nf(e,t,i,Hu,n),r===s)break;s=r}s!==null&&i.stopPropagation()}else nf(e,t,i,null,n)}}function vd(e){return e=am(e),Qm(e)}var Hu=null;function Qm(e){if(Hu=null,e=cr(e),e!==null){var t=Po(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=A0(t),e!==null)return e;e=null}else if(n===31){if(e=b0(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Hu=e,null}function iA(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(c1()){case R0:return 2;case C0:return 8;case _u:case h1:return 32;case N0:return 268435456;default:return 32}default:return 32}}var Td=!1,zi=null,ji=null,Bi=null,Co=new Map,No=new Map,Ai=[],wR="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function f_(e,t){switch(e){case"focusin":case"focusout":zi=null;break;case"dragenter":case"dragleave":ji=null;break;case"mouseover":case"mouseout":Bi=null;break;case"pointerover":case"pointerout":Co.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":No.delete(t.pointerId)}}function Ua(e,t,n,i,s,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:r,targetContainers:[s]},t!==null&&(t=ea(t),t!==null&&nA(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function IR(e,t,n,i,s){switch(t){case"focusin":return zi=Ua(zi,e,t,n,i,s),!0;case"dragenter":return ji=Ua(ji,e,t,n,i,s),!0;case"mouseover":return Bi=Ua(Bi,e,t,n,i,s),!0;case"pointerover":var r=s.pointerId;return Co.set(r,Ua(Co.get(r)||null,e,t,n,i,s)),!0;case"gotpointercapture":return r=s.pointerId,No.set(r,Ua(No.get(r)||null,e,t,n,i,s)),!0}return!1}function sA(e){var t=cr(e.target);if(t!==null){var n=Po(t);if(n!==null){if(t=n.tag,t===13){if(t=A0(n),t!==null){e.blockedOn=t,$p(e.priority,function(){h_(n)});return}}else if(t===31){if(t=b0(n),t!==null){e.blockedOn=t,$p(e.priority,function(){h_(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function su(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=vd(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Pf=i,n.target.dispatchEvent(i),Pf=null}else return t=ea(n),t!==null&&nA(t),e.blockedOn=n,!1;t.shift()}return!0}function d_(e,t,n){su(e)&&n.delete(t)}function RR(){Td=!1,zi!==null&&su(zi)&&(zi=null),ji!==null&&su(ji)&&(ji=null),Bi!==null&&su(Bi)&&(Bi=null),Co.forEach(d_),No.forEach(d_)}function Vl(e,t){e.blockedOn===t&&(e.blockedOn=null,Td||(Td=!0,Jt.unstable_scheduleCallback(Jt.unstable_NormalPriority,RR)))}var kl=null;function m_(e){kl!==e&&(kl=e,Jt.unstable_scheduleCallback(Jt.unstable_NormalPriority,function(){kl===e&&(kl=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],s=e[t+2];if(typeof i!="function"){if(Qm(i||n)===null)continue;break}var r=ea(n);r!==null&&(e.splice(t,3),t-=3,td(r,{pending:!0,data:s,method:n.method,action:i},i,s))}}))}function Gr(e){function t(u){return Vl(u,e)}zi!==null&&Vl(zi,e),ji!==null&&Vl(ji,e),Bi!==null&&Vl(Bi,e),Co.forEach(t),No.forEach(t);for(var n=0;n<Ai.length;n++){var i=Ai[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Ai.length&&(n=Ai[0],n.blockedOn===null);)sA(n),n.blockedOn===null&&Ai.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var s=n[i],r=n[i+1],a=s[Oe]||null;if(typeof r=="function")a||m_(n);else if(a){var l=null;if(r&&r.hasAttribute("formAction")){if(s=r,a=r[Oe]||null)l=a.formAction;else if(Qm(s)!==null)continue}else l=a.action;typeof l=="function"?n[i+1]=l:(n.splice(i,3),i-=3),m_(n)}}}function rA(){function e(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(a){return s=a})},focusReset:"manual",scroll:"manual"})}function t(){s!==null&&(s(),s=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),s!==null&&(s(),s=null)}}}function Ym(e){this._internalRoot=e}Dc.prototype.render=Ym.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));var n=t.current,i=Ke();eA(n,i,e,t,null,null)};Dc.prototype.unmount=Ym.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;eA(e.current,2,null,e,null,null),Rc(),t[ta]=null}};function Dc(e){this._internalRoot=e}Dc.prototype.unstable_scheduleHydration=function(e){if(e){var t=V0();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ai.length&&t!==0&&t<Ai[n].priority;n++);Ai.splice(n,0,e),n===0&&sA(e)}};var g_=T0.version;if(g_!=="19.2.5")throw Error(k(527,g_,"19.2.5"));dt.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=i1(t),e=e!==null?S0(e):null,e=e===null?null:e.stateNode,e};var CR={bundleType:0,version:"19.2.5",rendererPackageName:"react-dom",currentDispatcherRef:X,reconcilerVersion:"19.2.5"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ll=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ll.isDisabled&&Ll.supportsFiber)try{zo=Ll.inject(CR),Fe=Ll}catch{}}dc.createRoot=function(e,t){if(!E0(e))throw Error(k(299));var n=!1,i="",s=$T,r=JT,a=ZT;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=WE(e,1,!1,null,null,n,i,null,s,r,a,rA),e[ta]=t.current,qm(e),new Ym(t)};dc.hydrateRoot=function(e,t,n){if(!E0(e))throw Error(k(299));var i=!1,s="",r=$T,a=JT,l=ZT,u=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(a=n.onCaughtError),n.onRecoverableError!==void 0&&(l=n.onRecoverableError),n.formState!==void 0&&(u=n.formState)),t=WE(e,1,!0,t,n??null,i,s,u,r,a,l,rA),t.context=tA(null),n=t.current,i=Ke(),i=nm(i),s=ki(i),s.callback=null,Li(n,s,i),n=i,t.current.lanes=n,Bo(t,n),kn(t),e[ta]=t.current,qm(e),new Dc(t)};dc.version="19.2.5";function aA(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(aA)}catch(e){console.error(e)}}aA(),m0.exports=dc;var NR=m0.exports;const DR=s0(NR);/**
 * @license lucide-react v1.11.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oA=(...e)=>e.filter((t,n,i)=>!!t&&t.trim()!==""&&i.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v1.11.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xR=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.11.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OR=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,i)=>i?i.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v1.11.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p_=e=>{const t=OR(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v1.11.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var af={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.11.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MR=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1},VR=et.createContext({}),kR=()=>et.useContext(VR),LR=et.forwardRef(({color:e,size:t,strokeWidth:n,absoluteStrokeWidth:i,className:s="",children:r,iconNode:a,...l},u)=>{const{size:h=24,strokeWidth:d=2,absoluteStrokeWidth:m=!1,color:g="currentColor",className:T=""}=kR()??{},D=i??m?Number(n??d)*24/Number(t??h):n??d;return et.createElement("svg",{ref:u,...af,width:t??h??af.width,height:t??h??af.height,stroke:e??g,strokeWidth:D,className:oA("lucide",T,s),...!r&&!MR(l)&&{"aria-hidden":"true"},...l},[...a.map(([V,P])=>et.createElement(V,P)),...Array.isArray(r)?r:[r]])});/**
 * @license lucide-react v1.11.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const he=(e,t)=>{const n=et.forwardRef(({className:i,...s},r)=>et.createElement(LR,{ref:r,iconNode:t,className:oA(`lucide-${xR(p_(e))}`,`lucide-${e}`,i),...s}));return n.displayName=p_(e),n};/**
 * @license lucide-react v1.11.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UR=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],lA=he("chart-column",UR);/**
 * @license lucide-react v1.11.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PR=[["path",{d:"M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z",key:"pzmjnu"}],["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83",key:"k2fpak"}]],y_=he("chart-pie",PR);/**
 * @license lucide-react v1.11.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zR=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],jR=he("chevron-right",zR);/**
 * @license lucide-react v1.11.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BR=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],qR=he("circle-alert",BR);/**
 * @license lucide-react v1.11.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HR=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],uA=he("circle-check-big",HR);/**
 * @license lucide-react v1.11.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FR=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]],GR=he("clock",FR);/**
 * @license lucide-react v1.11.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KR=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M8 13h2",key:"yr2amv"}],["path",{d:"M14 13h2",key:"un5t4a"}],["path",{d:"M8 17h2",key:"2yhykz"}],["path",{d:"M14 17h2",key:"10kma7"}]],QR=he("file-spreadsheet",KR);/**
 * @license lucide-react v1.11.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YR=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],XR=he("layout-dashboard",YR);/**
 * @license lucide-react v1.11.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $R=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],JR=he("menu",$R);/**
 * @license lucide-react v1.11.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZR=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],WR=he("message-square",ZR);/**
 * @license lucide-react v1.11.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t2=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],e2=he("plus",t2);/**
 * @license lucide-react v1.11.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n2=[["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3",key:"1rgiei"}],["path",{d:"M18 4.933V21",key:"tjwmp4"}],["path",{d:"m4 6 7.106-3.79a2 2 0 0 1 1.788 0L20 6",key:"zywc2d"}],["path",{d:"m6 11-3.52 2.147a1 1 0 0 0-.48.854V19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a1 1 0 0 0-.48-.853L18 11",key:"1d4ql0"}],["path",{d:"M6 4.933V21",key:"1ufz1j"}],["circle",{cx:"12",cy:"9",r:"2",key:"1092wv"}]],__=he("school",n2);/**
 * @license lucide-react v1.11.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i2=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],s2=he("search",i2);/**
 * @license lucide-react v1.11.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r2=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],a2=he("trending-up",r2);/**
 * @license lucide-react v1.11.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o2=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],l2=he("upload",o2);/**
 * @license lucide-react v1.11.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u2=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],c2=he("users",u2);/**
 * @license lucide-react v1.11.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h2=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Ed=he("x",h2),f2=()=>{};var v_={};/**
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
 */const cA=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let s=e.charCodeAt(i);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&i+1<e.length&&(e.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++i)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},d2=function(e){const t=[];let n=0,i=0;for(;n<e.length;){const s=e[n++];if(s<128)t[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=e[n++];t[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=e[n++],a=e[n++],l=e[n++],u=((s&7)<<18|(r&63)<<12|(a&63)<<6|l&63)-65536;t[i++]=String.fromCharCode(55296+(u>>10)),t[i++]=String.fromCharCode(56320+(u&1023))}else{const r=e[n++],a=e[n++];t[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|a&63)}}return t.join("")},hA={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<e.length;s+=3){const r=e[s],a=s+1<e.length,l=a?e[s+1]:0,u=s+2<e.length,h=u?e[s+2]:0,d=r>>2,m=(r&3)<<4|l>>4;let g=(l&15)<<2|h>>6,T=h&63;u||(T=64,a||(g=64)),i.push(n[d],n[m],n[g],n[T])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(cA(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):d2(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<e.length;){const r=n[e.charAt(s++)],l=s<e.length?n[e.charAt(s)]:0;++s;const h=s<e.length?n[e.charAt(s)]:64;++s;const m=s<e.length?n[e.charAt(s)]:64;if(++s,r==null||l==null||h==null||m==null)throw new m2;const g=r<<2|l>>4;if(i.push(g),h!==64){const T=l<<4&240|h>>2;if(i.push(T),m!==64){const D=h<<6&192|m;i.push(D)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class m2 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const g2=function(e){const t=cA(e);return hA.encodeByteArray(t,!0)},Fu=function(e){return g2(e).replace(/\./g,"")},fA=function(e){try{return hA.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function p2(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const y2=()=>p2().__FIREBASE_DEFAULTS__,_2=()=>{if(typeof process>"u"||typeof v_>"u")return;const e=v_.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},v2=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&fA(e[1]);return t&&JSON.parse(t)},xc=()=>{try{return f2()||y2()||_2()||v2()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},dA=e=>{var t,n;return(n=(t=xc())==null?void 0:t.emulatorHosts)==null?void 0:n[e]},T2=e=>{const t=dA(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),i]:[t.substring(0,n),i]},mA=()=>{var e;return(e=xc())==null?void 0:e.config},gA=e=>{var t;return(t=xc())==null?void 0:t[`_${e}`]};/**
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
 */class E2{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,i))}}}/**
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
 */function A2(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=t||"demo-project",s=e.iat||0,r=e.sub||e.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}},...e};return[Fu(JSON.stringify(n)),Fu(JSON.stringify(a)),""].join(".")}/**
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
 */function ye(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function b2(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ye())}function S2(){var t;const e=(t=xc())==null?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function w2(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function pA(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function I2(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function R2(){const e=ye();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function C2(){return!S2()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function yA(){try{return typeof indexedDB=="object"}catch{return!1}}function _A(){return new Promise((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;t(((r=s.error)==null?void 0:r.message)||"")}}catch(n){t(n)}})}function N2(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const D2="FirebaseError";class vn extends Error{constructor(t,n,i){super(n),this.code=t,this.customData=i,this.name=D2,Object.setPrototypeOf(this,vn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ks.prototype.create)}}class Ks{constructor(t,n,i){this.service=t,this.serviceName=n,this.errors=i}create(t,...n){const i=n[0]||{},s=`${this.service}/${t}`,r=this.errors[t],a=r?x2(r,i):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new vn(s,l,i)}}function x2(e,t){return e.replace(O2,(n,i)=>{const s=t[i];return s!=null?String(s):`<${i}?>`})}const O2=/\{\$([^}]+)}/g;function M2(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Zi(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const s of n){if(!i.includes(s))return!1;const r=e[s],a=t[s];if(T_(r)&&T_(a)){if(!Zi(r,a))return!1}else if(r!==a)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function T_(e){return e!==null&&typeof e=="object"}/**
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
 */function $o(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach(s=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function V2(e,t){const n=new k2(e,t);return n.subscribe.bind(n)}class k2{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(i=>{this.error(i)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,i){let s;if(t===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");L2(t,["next","error","complete"])?s=t:s={next:t,error:n,complete:i},s.next===void 0&&(s.next=of),s.error===void 0&&(s.error=of),s.complete===void 0&&(s.complete=of);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function L2(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function of(){}/**
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
 */const U2=1e3,P2=2,z2=4*60*60*1e3,j2=.5;function E_(e,t=U2,n=P2){const i=t*Math.pow(n,e),s=Math.round(j2*i*(Math.random()-.5)*2);return Math.min(z2,i+s)}/**
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
 */function Pt(e){return e&&e._delegate?e._delegate:e}/**
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
 */function Jo(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}async function vA(e){return(await fetch(e,{credentials:"include"})).ok}class pn{constructor(t,n,i){this.name=t,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Ts="[DEFAULT]";/**
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
 */class B2{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const i=new E2;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){const n=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(t==null?void 0:t.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(H2(t))try{this.getOrInitializeService({instanceIdentifier:Ts})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(t=Ts){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ts){return this.instances.has(t)}getOptions(t=Ts){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);i===l&&a.resolve(s)}return s}onInit(t,n){const i=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(i)??new Set;s.add(t),this.onInitCallbacks.set(i,s);const r=this.instances.get(i);return r&&t(r,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:q2(t),options:n}),this.instances.set(t,i),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch{}return i||null}normalizeInstanceIdentifier(t=Ts){return this.component?this.component.multipleInstances?t:Ts:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function q2(e){return e===Ts?void 0:e}function H2(e){return e.instantiationMode==="EAGER"}/**
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
 */class F2{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new B2(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var at;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(at||(at={}));const G2={debug:at.DEBUG,verbose:at.VERBOSE,info:at.INFO,warn:at.WARN,error:at.ERROR,silent:at.SILENT},K2=at.INFO,Q2={[at.DEBUG]:"log",[at.VERBOSE]:"log",[at.INFO]:"info",[at.WARN]:"warn",[at.ERROR]:"error"},Y2=(e,t,...n)=>{if(t<e.logLevel)return;const i=new Date().toISOString(),s=Q2[t];if(s)console[s](`[${i}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Oc{constructor(t){this.name=t,this._logLevel=K2,this._logHandler=Y2,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in at))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?G2[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,at.DEBUG,...t),this._logHandler(this,at.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,at.VERBOSE,...t),this._logHandler(this,at.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,at.INFO,...t),this._logHandler(this,at.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,at.WARN,...t),this._logHandler(this,at.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,at.ERROR,...t),this._logHandler(this,at.ERROR,...t)}}const X2=(e,t)=>t.some(n=>e instanceof n);let A_,b_;function $2(){return A_||(A_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function J2(){return b_||(b_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const TA=new WeakMap,Ad=new WeakMap,EA=new WeakMap,lf=new WeakMap,Xm=new WeakMap;function Z2(e){const t=new Promise((n,i)=>{const s=()=>{e.removeEventListener("success",r),e.removeEventListener("error",a)},r=()=>{n(qi(e.result)),s()},a=()=>{i(e.error),s()};e.addEventListener("success",r),e.addEventListener("error",a)});return t.then(n=>{n instanceof IDBCursor&&TA.set(n,e)}).catch(()=>{}),Xm.set(t,e),t}function W2(e){if(Ad.has(e))return;const t=new Promise((n,i)=>{const s=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",a),e.removeEventListener("abort",a)},r=()=>{n(),s()},a=()=>{i(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",r),e.addEventListener("error",a),e.addEventListener("abort",a)});Ad.set(e,t)}let bd={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Ad.get(e);if(t==="objectStoreNames")return e.objectStoreNames||EA.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return qi(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function tC(e){bd=e(bd)}function eC(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const i=e.call(uf(this),t,...n);return EA.set(i,t.sort?t.sort():[t]),qi(i)}:J2().includes(e)?function(...t){return e.apply(uf(this),t),qi(TA.get(this))}:function(...t){return qi(e.apply(uf(this),t))}}function nC(e){return typeof e=="function"?eC(e):(e instanceof IDBTransaction&&W2(e),X2(e,$2())?new Proxy(e,bd):e)}function qi(e){if(e instanceof IDBRequest)return Z2(e);if(lf.has(e))return lf.get(e);const t=nC(e);return t!==e&&(lf.set(e,t),Xm.set(t,e)),t}const uf=e=>Xm.get(e);function AA(e,t,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const a=indexedDB.open(e,t),l=qi(a);return i&&a.addEventListener("upgradeneeded",u=>{i(qi(a.result),u.oldVersion,u.newVersion,qi(a.transaction),u)}),n&&a.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{r&&u.addEventListener("close",()=>r()),s&&u.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const iC=["get","getKey","getAll","getAllKeys","count"],sC=["put","add","delete","clear"],cf=new Map;function S_(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(cf.get(t))return cf.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,s=sC.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||iC.includes(n)))return;const r=async function(a,...l){const u=this.transaction(a,s?"readwrite":"readonly");let h=u.store;return i&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&u.done]))[0]};return cf.set(t,r),r}tC(e=>({...e,get:(t,n,i)=>S_(t,n)||e.get(t,n,i),has:(t,n)=>!!S_(t,n)||e.has(t,n)}));/**
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
 */class rC{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(aC(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function aC(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Sd="@firebase/app",w_="0.14.11";/**
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
 */const ni=new Oc("@firebase/app"),oC="@firebase/app-compat",lC="@firebase/analytics-compat",uC="@firebase/analytics",cC="@firebase/app-check-compat",hC="@firebase/app-check",fC="@firebase/auth",dC="@firebase/auth-compat",mC="@firebase/database",gC="@firebase/data-connect",pC="@firebase/database-compat",yC="@firebase/functions",_C="@firebase/functions-compat",vC="@firebase/installations",TC="@firebase/installations-compat",EC="@firebase/messaging",AC="@firebase/messaging-compat",bC="@firebase/performance",SC="@firebase/performance-compat",wC="@firebase/remote-config",IC="@firebase/remote-config-compat",RC="@firebase/storage",CC="@firebase/storage-compat",NC="@firebase/firestore",DC="@firebase/ai",xC="@firebase/firestore-compat",OC="firebase",MC="12.12.0";/**
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
 */const wd="[DEFAULT]",VC={[Sd]:"fire-core",[oC]:"fire-core-compat",[uC]:"fire-analytics",[lC]:"fire-analytics-compat",[hC]:"fire-app-check",[cC]:"fire-app-check-compat",[fC]:"fire-auth",[dC]:"fire-auth-compat",[mC]:"fire-rtdb",[gC]:"fire-data-connect",[pC]:"fire-rtdb-compat",[yC]:"fire-fn",[_C]:"fire-fn-compat",[vC]:"fire-iid",[TC]:"fire-iid-compat",[EC]:"fire-fcm",[AC]:"fire-fcm-compat",[bC]:"fire-perf",[SC]:"fire-perf-compat",[wC]:"fire-rc",[IC]:"fire-rc-compat",[RC]:"fire-gcs",[CC]:"fire-gcs-compat",[NC]:"fire-fst",[xC]:"fire-fst-compat",[DC]:"fire-vertex","fire-js":"fire-js",[OC]:"fire-js-all"};/**
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
 */const Gu=new Map,kC=new Map,Id=new Map;function I_(e,t){try{e.container.addComponent(t)}catch(n){ni.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function On(e){const t=e.name;if(Id.has(t))return ni.debug(`There were multiple attempts to register component ${t}.`),!1;Id.set(t,e);for(const n of Gu.values())I_(n,e);for(const n of kC.values())I_(n,e);return!0}function Qs(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function dn(e){return e==null?!1:e.settings!==void 0}/**
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
 */const LC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Hi=new Ks("app","Firebase",LC);/**
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
 */class UC{constructor(t,n,i){this._isDeleted=!1,this._options={...t},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new pn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Hi.create("app-deleted",{appName:this._name})}}/**
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
 */const oa=MC;function bA(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const i={name:wd,automaticDataCollectionEnabled:!0,...t},s=i.name;if(typeof s!="string"||!s)throw Hi.create("bad-app-name",{appName:String(s)});if(n||(n=mA()),!n)throw Hi.create("no-options");const r=Gu.get(s);if(r){if(Zi(n,r.options)&&Zi(i,r.config))return r;throw Hi.create("duplicate-app",{appName:s})}const a=new F2(s);for(const u of Id.values())a.addComponent(u);const l=new UC(n,i,a);return Gu.set(s,l),l}function $m(e=wd){const t=Gu.get(e);if(!t&&e===wd&&mA())return bA();if(!t)throw Hi.create("no-app",{appName:e});return t}function ln(e,t,n){let i=VC[e]??e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),r=t.match(/\s|\//);if(s||r){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&r&&a.push("and"),r&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ni.warn(a.join(" "));return}On(new pn(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const PC="firebase-heartbeat-database",zC=1,Do="firebase-heartbeat-store";let hf=null;function SA(){return hf||(hf=AA(PC,zC,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Do)}catch(n){console.warn(n)}}}}).catch(e=>{throw Hi.create("idb-open",{originalErrorMessage:e.message})})),hf}async function jC(e){try{const n=(await SA()).transaction(Do),i=await n.objectStore(Do).get(wA(e));return await n.done,i}catch(t){if(t instanceof vn)ni.warn(t.message);else{const n=Hi.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});ni.warn(n.message)}}}async function R_(e,t){try{const i=(await SA()).transaction(Do,"readwrite");await i.objectStore(Do).put(t,wA(e)),await i.done}catch(n){if(n instanceof vn)ni.warn(n.message);else{const i=Hi.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ni.warn(i.message)}}}function wA(e){return`${e.name}!${e.options.appId}`}/**
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
 */const BC=1024,qC=30;class HC{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new GC(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var t,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=C_();if(((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(a=>a.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats.length>qC){const a=KC(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){ni.warn(i)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=C_(),{heartbeatsToSend:i,unsentEntries:s}=FC(this._heartbeatsCache.heartbeats),r=Fu(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return ni.warn(n),""}}}function C_(){return new Date().toISOString().substring(0,10)}function FC(e,t=BC){const n=[];let i=e.slice();for(const s of e){const r=n.find(a=>a.agent===s.agent);if(r){if(r.dates.push(s.date),N_(n)>t){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),N_(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class GC{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return yA()?_A().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await jC(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const i=await this.read();return R_(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const i=await this.read();return R_(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function N_(e){return Fu(JSON.stringify({version:2,heartbeats:e})).length}function KC(e){if(e.length===0)return-1;let t=0,n=e[0].date;for(let i=1;i<e.length;i++)e[i].date<n&&(n=e[i].date,t=i);return t}/**
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
 */function QC(e){On(new pn("platform-logger",t=>new rC(t),"PRIVATE")),On(new pn("heartbeat",t=>new HC(t),"PRIVATE")),ln(Sd,w_,e),ln(Sd,w_,"esm2020"),ln("fire-js","")}QC("");var YC="firebase",XC="12.12.1";/**
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
 */ln(YC,XC,"app");const IA="@firebase/installations",Jm="0.6.21";/**
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
 */const RA=1e4,CA=`w:${Jm}`,NA="FIS_v2",$C="https://firebaseinstallations.googleapis.com/v1",JC=60*60*1e3,ZC="installations",WC="Installations";/**
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
 */const tN={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ks=new Ks(ZC,WC,tN);function DA(e){return e instanceof vn&&e.code.includes("request-failed")}/**
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
 */function xA({projectId:e}){return`${$C}/projects/${e}/installations`}function OA(e){return{token:e.token,requestStatus:2,expiresIn:nN(e.expiresIn),creationTime:Date.now()}}async function MA(e,t){const i=(await t.json()).error;return ks.create("request-failed",{requestName:e,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function VA({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function eN(e,{refreshToken:t}){const n=VA(e);return n.append("Authorization",iN(t)),n}async function kA(e){const t=await e();return t.status>=500&&t.status<600?e():t}function nN(e){return Number(e.replace("s","000"))}function iN(e){return`${NA} ${e}`}/**
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
 */async function sN({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const i=xA(e),s=VA(e),r=t.getImmediate({optional:!0});if(r){const h=await r.getHeartbeatsHeader();h&&s.append("x-firebase-client",h)}const a={fid:n,authVersion:NA,appId:e.appId,sdkVersion:CA},l={method:"POST",headers:s,body:JSON.stringify(a)},u=await kA(()=>fetch(i,l));if(u.ok){const h=await u.json();return{fid:h.fid||n,registrationStatus:2,refreshToken:h.refreshToken,authToken:OA(h.authToken)}}else throw await MA("Create Installation",u)}/**
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
 */function LA(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function rN(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const aN=/^[cdef][\w-]{21}$/,Rd="";function oN(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=lN(e);return aN.test(n)?n:Rd}catch{return Rd}}function lN(e){return rN(e).substr(0,22)}/**
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
 */function Mc(e){return`${e.appName}!${e.appId}`}/**
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
 */const UA=new Map;function PA(e,t){const n=Mc(e);zA(n,t),uN(n,t)}function zA(e,t){const n=UA.get(e);if(n)for(const i of n)i(t)}function uN(e,t){const n=cN();n&&n.postMessage({key:e,fid:t}),hN()}let Es=null;function cN(){return!Es&&"BroadcastChannel"in self&&(Es=new BroadcastChannel("[Firebase] FID Change"),Es.onmessage=e=>{zA(e.data.key,e.data.fid)}),Es}function hN(){UA.size===0&&Es&&(Es.close(),Es=null)}/**
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
 */const fN="firebase-installations-database",dN=1,Ls="firebase-installations-store";let ff=null;function Zm(){return ff||(ff=AA(fN,dN,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Ls)}}})),ff}async function Ku(e,t){const n=Mc(e),s=(await Zm()).transaction(Ls,"readwrite"),r=s.objectStore(Ls),a=await r.get(n);return await r.put(t,n),await s.done,(!a||a.fid!==t.fid)&&PA(e,t.fid),t}async function jA(e){const t=Mc(e),i=(await Zm()).transaction(Ls,"readwrite");await i.objectStore(Ls).delete(t),await i.done}async function Vc(e,t){const n=Mc(e),s=(await Zm()).transaction(Ls,"readwrite"),r=s.objectStore(Ls),a=await r.get(n),l=t(a);return l===void 0?await r.delete(n):await r.put(l,n),await s.done,l&&(!a||a.fid!==l.fid)&&PA(e,l.fid),l}/**
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
 */async function Wm(e){let t;const n=await Vc(e.appConfig,i=>{const s=mN(i),r=gN(e,s);return t=r.registrationPromise,r.installationEntry});return n.fid===Rd?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function mN(e){const t=e||{fid:oN(),registrationStatus:0};return BA(t)}function gN(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(ks.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},i=pN(e,n);return{installationEntry:n,registrationPromise:i}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:yN(e)}:{installationEntry:t}}async function pN(e,t){try{const n=await sN(e,t);return Ku(e.appConfig,n)}catch(n){throw DA(n)&&n.customData.serverCode===409?await jA(e.appConfig):await Ku(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function yN(e){let t=await D_(e.appConfig);for(;t.registrationStatus===1;)await LA(100),t=await D_(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:i}=await Wm(e);return i||n}return t}function D_(e){return Vc(e,t=>{if(!t)throw ks.create("installation-not-found");return BA(t)})}function BA(e){return _N(e)?{fid:e.fid,registrationStatus:0}:e}function _N(e){return e.registrationStatus===1&&e.registrationTime+RA<Date.now()}/**
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
 */async function vN({appConfig:e,heartbeatServiceProvider:t},n){const i=TN(e,n),s=eN(e,n),r=t.getImmediate({optional:!0});if(r){const h=await r.getHeartbeatsHeader();h&&s.append("x-firebase-client",h)}const a={installation:{sdkVersion:CA,appId:e.appId}},l={method:"POST",headers:s,body:JSON.stringify(a)},u=await kA(()=>fetch(i,l));if(u.ok){const h=await u.json();return OA(h)}else throw await MA("Generate Auth Token",u)}function TN(e,{fid:t}){return`${xA(e)}/${t}/authTokens:generate`}/**
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
 */async function tg(e,t=!1){let n;const i=await Vc(e.appConfig,r=>{if(!qA(r))throw ks.create("not-registered");const a=r.authToken;if(!t&&bN(a))return r;if(a.requestStatus===1)return n=EN(e,t),r;{if(!navigator.onLine)throw ks.create("app-offline");const l=wN(r);return n=AN(e,l),l}});return n?await n:i.authToken}async function EN(e,t){let n=await x_(e.appConfig);for(;n.authToken.requestStatus===1;)await LA(100),n=await x_(e.appConfig);const i=n.authToken;return i.requestStatus===0?tg(e,t):i}function x_(e){return Vc(e,t=>{if(!qA(t))throw ks.create("not-registered");const n=t.authToken;return IN(n)?{...t,authToken:{requestStatus:0}}:t})}async function AN(e,t){try{const n=await vN(e,t),i={...t,authToken:n};return await Ku(e.appConfig,i),n}catch(n){if(DA(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await jA(e.appConfig);else{const i={...t,authToken:{requestStatus:0}};await Ku(e.appConfig,i)}throw n}}function qA(e){return e!==void 0&&e.registrationStatus===2}function bN(e){return e.requestStatus===2&&!SN(e)}function SN(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+JC}function wN(e){const t={requestStatus:1,requestTime:Date.now()};return{...e,authToken:t}}function IN(e){return e.requestStatus===1&&e.requestTime+RA<Date.now()}/**
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
 */async function RN(e){const t=e,{installationEntry:n,registrationPromise:i}=await Wm(t);return i?i.catch(console.error):tg(t).catch(console.error),n.fid}/**
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
 */async function CN(e,t=!1){const n=e;return await NN(n),(await tg(n,t)).token}async function NN(e){const{registrationPromise:t}=await Wm(e);t&&await t}/**
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
 */function DN(e){if(!e||!e.options)throw df("App Configuration");if(!e.name)throw df("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw df(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function df(e){return ks.create("missing-app-config-values",{valueName:e})}/**
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
 */const HA="installations",xN="installations-internal",ON=e=>{const t=e.getProvider("app").getImmediate(),n=DN(t),i=Qs(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},MN=e=>{const t=e.getProvider("app").getImmediate(),n=Qs(t,HA).getImmediate();return{getId:()=>RN(n),getToken:s=>CN(n,s)}};function VN(){On(new pn(HA,ON,"PUBLIC")),On(new pn(xN,MN,"PRIVATE"))}VN();ln(IA,Jm);ln(IA,Jm,"esm2020");/**
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
 */const Qu="analytics",kN="firebase_id",LN="origin",UN=60*1e3,PN="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",eg="https://www.googletagmanager.com/gtag/js";/**
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
 */const Ae=new Oc("@firebase/analytics");/**
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
 */const zN={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Qe=new Ks("analytics","Analytics",zN);/**
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
 */function jN(e){if(!e.startsWith(eg)){const t=Qe.create("invalid-gtag-resource",{gtagURL:e});return Ae.warn(t.message),""}return e}function FA(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function BN(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function qN(e,t){const n=BN("firebase-js-sdk-policy",{createScriptURL:jN}),i=document.createElement("script"),s=`${eg}?l=${e}&id=${t}`;i.src=n?n==null?void 0:n.createScriptURL(s):s,i.async=!0,document.head.appendChild(i)}function HN(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function FN(e,t,n,i,s,r){const a=i[s];try{if(a)await t[a];else{const u=(await FA(n)).find(h=>h.measurementId===s);u&&await t[u.appId]}}catch(l){Ae.error(l)}e("config",s,r)}async function GN(e,t,n,i,s){try{let r=[];if(s&&s.send_to){let a=s.send_to;Array.isArray(a)||(a=[a]);const l=await FA(n);for(const u of a){const h=l.find(m=>m.measurementId===u),d=h&&t[h.appId];if(d)r.push(d);else{r=[];break}}}r.length===0&&(r=Object.values(t)),await Promise.all(r),e("event",i,s||{})}catch(r){Ae.error(r)}}function KN(e,t,n,i){async function s(r,...a){try{if(r==="event"){const[l,u]=a;await GN(e,t,n,l,u)}else if(r==="config"){const[l,u]=a;await FN(e,t,n,i,l,u)}else if(r==="consent"){const[l,u]=a;e("consent",l,u)}else if(r==="get"){const[l,u,h]=a;e("get",l,u,h)}else if(r==="set"){const[l]=a;e("set",l)}else e(r,...a)}catch(l){Ae.error(l)}}return s}function QN(e,t,n,i,s){let r=function(...a){window[i].push(arguments)};return window[s]&&typeof window[s]=="function"&&(r=window[s]),window[s]=KN(r,e,t,n),{gtagCore:r,wrappedGtag:window[s]}}function YN(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(eg)&&n.src.includes(e))return n;return null}/**
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
 */const XN=30,$N=1e3;class JN{constructor(t={},n=$N){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const GA=new JN;function ZN(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function WN(e){var a;const{appId:t,apiKey:n}=e,i={method:"GET",headers:ZN(n)},s=PN.replace("{app-id}",t),r=await fetch(s,i);if(r.status!==200&&r.status!==304){let l="";try{const u=await r.json();(a=u.error)!=null&&a.message&&(l=u.error.message)}catch{}throw Qe.create("config-fetch-failed",{httpStatus:r.status,responseMessage:l})}return r.json()}async function tD(e,t=GA,n){const{appId:i,apiKey:s,measurementId:r}=e.options;if(!i)throw Qe.create("no-app-id");if(!s){if(r)return{measurementId:r,appId:i};throw Qe.create("no-api-key")}const a=t.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new iD;return setTimeout(async()=>{l.abort()},UN),KA({appId:i,apiKey:s,measurementId:r},a,l,t)}async function KA(e,{throttleEndTimeMillis:t,backoffCount:n},i,s=GA){var l;const{appId:r,measurementId:a}=e;try{await eD(i,t)}catch(u){if(a)return Ae.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:r,measurementId:a};throw u}try{const u=await WN(e);return s.deleteThrottleMetadata(r),u}catch(u){const h=u;if(!nD(h)){if(s.deleteThrottleMetadata(r),a)return Ae.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:r,measurementId:a};throw u}const d=Number((l=h==null?void 0:h.customData)==null?void 0:l.httpStatus)===503?E_(n,s.intervalMillis,XN):E_(n,s.intervalMillis),m={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return s.setThrottleMetadata(r,m),Ae.debug(`Calling attemptFetch again in ${d} millis`),KA(e,m,i,s)}}function eD(e,t){return new Promise((n,i)=>{const s=Math.max(t-Date.now(),0),r=setTimeout(n,s);e.addEventListener(()=>{clearTimeout(r),i(Qe.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function nD(e){if(!(e instanceof vn)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class iD{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function sD(e,t,n,i,s){if(s&&s.global){e("event",n,i);return}else{const r=await t,a={...i,send_to:r};e("event",n,a)}}async function rD(e,t,n,i){if(i&&i.global){const s={};for(const r of Object.keys(n))s[`user_properties.${r}`]=n[r];return e("set",s),Promise.resolve()}else{const s=await t;e("config",s,{update:!0,user_properties:n})}}/**
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
 */async function aD(){if(yA())try{await _A()}catch(e){return Ae.warn(Qe.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return Ae.warn(Qe.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function oD(e,t,n,i,s,r,a){const l=tD(e);l.then(g=>{n[g.measurementId]=g.appId,e.options.measurementId&&g.measurementId!==e.options.measurementId&&Ae.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>Ae.error(g)),t.push(l);const u=aD().then(g=>{if(g)return i.getId()}),[h,d]=await Promise.all([l,u]);YN(r)||qN(r,h.measurementId),s("js",new Date);const m=(a==null?void 0:a.config)??{};return m[LN]="firebase",m.update=!0,d!=null&&(m[kN]=d),s("config",h.measurementId,m),h.measurementId}/**
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
 */class lD{constructor(t){this.app=t}_delete(){return delete Cr[this.app.options.appId],Promise.resolve()}}let Cr={},O_=[];const M_={};let mf="dataLayer",uD="gtag",V_,ng,k_=!1;function cD(){const e=[];if(pA()&&e.push("This is a browser extension environment."),N2()||e.push("Cookies are not available."),e.length>0){const t=e.map((i,s)=>`(${s+1}) ${i}`).join(" "),n=Qe.create("invalid-analytics-context",{errorInfo:t});Ae.warn(n.message)}}function hD(e,t,n){cD();const i=e.options.appId;if(!i)throw Qe.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)Ae.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Qe.create("no-api-key");if(Cr[i]!=null)throw Qe.create("already-exists",{id:i});if(!k_){HN(mf);const{wrappedGtag:r,gtagCore:a}=QN(Cr,O_,M_,mf,uD);ng=r,V_=a,k_=!0}return Cr[i]=oD(e,O_,M_,t,V_,mf,n),new lD(e)}function fD(e=$m()){e=Pt(e);const t=Qs(e,Qu);return t.isInitialized()?t.getImmediate():dD(e)}function dD(e,t={}){const n=Qs(e,Qu);if(n.isInitialized()){const s=n.getImmediate();if(Zi(t,n.getOptions()))return s;throw Qe.create("already-initialized")}return n.initialize({options:t})}function mD(e,t,n){e=Pt(e),rD(ng,Cr[e.app.options.appId],t,n).catch(i=>Ae.error(i))}function gD(e,t,n,i){e=Pt(e),sD(ng,Cr[e.app.options.appId],t,n,i).catch(s=>Ae.error(s))}const L_="@firebase/analytics",U_="0.10.21";function pD(){On(new pn(Qu,(t,{options:n})=>{const i=t.getProvider("app").getImmediate(),s=t.getProvider("installations-internal").getImmediate();return hD(i,s,n)},"PUBLIC")),On(new pn("analytics-internal",e,"PRIVATE")),ln(L_,U_),ln(L_,U_,"esm2020");function e(t){try{const n=t.getProvider(Qu).getImmediate();return{logEvent:(i,s,r)=>gD(n,i,s,r),setUserProperties:(i,s)=>mD(n,i,s)}}catch(n){throw Qe.create("interop-component-reg-failed",{reason:n})}}}pD();function QA(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const yD=QA,YA=new Ks("auth","Firebase",QA());/**
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
 */const Yu=new Oc("@firebase/auth");function _D(e,...t){Yu.logLevel<=at.WARN&&Yu.warn(`Auth (${oa}): ${e}`,...t)}function ru(e,...t){Yu.logLevel<=at.ERROR&&Yu.error(`Auth (${oa}): ${e}`,...t)}/**
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
 */function ii(e,...t){throw ig(e,...t)}function Rn(e,...t){return ig(e,...t)}function XA(e,t,n){const i={...yD(),[t]:n};return new Ks("auth","Firebase",i).create(t,{appName:e.name})}function Fi(e){return XA(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ig(e,...t){if(typeof e!="string"){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return YA.create(e,...t)}function $(e,t,...n){if(!e)throw ig(t,...n)}function Kn(e){const t="INTERNAL ASSERTION FAILED: "+e;throw ru(t),new Error(t)}function si(e,t){e||Kn(t)}/**
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
 */function Cd(){var e;return typeof self<"u"&&((e=self.location)==null?void 0:e.href)||""}function vD(){return P_()==="http:"||P_()==="https:"}function P_(){var e;return typeof self<"u"&&((e=self.location)==null?void 0:e.protocol)||null}/**
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
 */function TD(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(vD()||pA()||"connection"in navigator)?navigator.onLine:!0}function ED(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class Zo{constructor(t,n){this.shortDelay=t,this.longDelay=n,si(n>t,"Short delay should be less than long delay!"),this.isMobile=b2()||I2()}get(){return TD()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function sg(e,t){si(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class $A{static initialize(t,n,i){this.fetchImpl=t,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Kn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Kn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Kn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const AD={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const bD=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],SD=new Zo(3e4,6e4);function kc(e,t){return e.tenantId&&!t.tenantId?{...t,tenantId:e.tenantId}:t}async function la(e,t,n,i,s={}){return JA(e,s,async()=>{let r={},a={};i&&(t==="GET"?a=i:r={body:JSON.stringify(i)});const l=$o({key:e.config.apiKey,...a}).slice(1),u=await e._getAdditionalHeaders();u["Content-Type"]="application/json",e.languageCode&&(u["X-Firebase-Locale"]=e.languageCode);const h={method:t,headers:u,...r};return w2()||(h.referrerPolicy="no-referrer"),e.emulatorConfig&&Jo(e.emulatorConfig.host)&&(h.credentials="include"),$A.fetch()(await WA(e,e.config.apiHost,n,l),h)})}async function JA(e,t,n){e._canInitEmulator=!1;const i={...AD,...t};try{const s=new wD(e),r=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const a=await r.json();if("needConfirmation"in a)throw Ul(e,"account-exists-with-different-credential",a);if(r.ok&&!("errorMessage"in a))return a;{const l=r.ok?a.errorMessage:a.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ul(e,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw Ul(e,"email-already-in-use",a);if(u==="USER_DISABLED")throw Ul(e,"user-disabled",a);const d=i[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw XA(e,d,h);ii(e,d)}}catch(s){if(s instanceof vn)throw s;ii(e,"network-request-failed",{message:String(s)})}}async function ZA(e,t,n,i,s={}){const r=await la(e,t,n,i,s);return"mfaPendingCredential"in r&&ii(e,"multi-factor-auth-required",{_serverResponse:r}),r}async function WA(e,t,n,i){const s=`${t}${n}?${i}`,r=e,a=r.config.emulator?sg(e.config,s):`${e.config.apiScheme}://${s}`;return bD.includes(n)&&(await r._persistenceManagerAvailable,r._getPersistenceType()==="COOKIE")?r._getPersistence()._getFinalTarget(a).toString():a}class wD{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(Rn(this.auth,"network-request-failed")),SD.get())})}}function Ul(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=Rn(e,t,i);return s.customData._tokenResponse=n,s}/**
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
 */async function ID(e,t){return la(e,"POST","/v1/accounts:delete",t)}async function Xu(e,t){return la(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function co(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function RD(e,t=!1){const n=Pt(e),i=await n.getIdToken(t),s=rg(i);$(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,a=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:co(gf(s.auth_time)),issuedAtTime:co(gf(s.iat)),expirationTime:co(gf(s.exp)),signInProvider:a||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function gf(e){return Number(e)*1e3}function rg(e){const[t,n,i]=e.split(".");if(t===void 0||n===void 0||i===void 0)return ru("JWT malformed, contained fewer than 3 sections"),null;try{const s=fA(n);return s?JSON.parse(s):(ru("Failed to decode base64 JWT payload"),null)}catch(s){return ru("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function z_(e){const t=rg(e);return $(t,"internal-error"),$(typeof t.exp<"u","internal-error"),$(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function xo(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof vn&&CD(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function CD({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class ND{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){if(t){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Nd{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=co(this.lastLoginAt),this.creationTime=co(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function $u(e){var m;const t=e.auth,n=await e.getIdToken(),i=await xo(e,Xu(t,{idToken:n}));$(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const r=(m=s.providerUserInfo)!=null&&m.length?tb(s.providerUserInfo):[],a=xD(e.providerData,r),l=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(a!=null&&a.length),h=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Nd(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(e,d)}async function DD(e){const t=Pt(e);await $u(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function xD(e,t){return[...e.filter(i=>!t.some(s=>s.providerId===i.providerId)),...t]}function tb(e){return e.map(({providerId:t,...n})=>({providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function OD(e,t){const n=await JA(e,{},async()=>{const i=$o({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:r}=e.config,a=await WA(e,s,"/v1/token",`key=${r}`),l=await e._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:i};return e.emulatorConfig&&Jo(e.emulatorConfig.host)&&(u.credentials="include"),$A.fetch()(a,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function MD(e,t){return la(e,"POST","/v2/accounts:revokeToken",kc(e,t))}/**
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
 */class Nr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){$(t.idToken,"internal-error"),$(typeof t.idToken<"u","internal-error"),$(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):z_(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){$(t.length!==0,"internal-error");const n=z_(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:($(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:i,refreshToken:s,expiresIn:r}=await OD(t,n);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(t,n,i){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(t,n){const{refreshToken:i,accessToken:s,expirationTime:r}=n,a=new Nr;return i&&($(typeof i=="string","internal-error",{appName:t}),a.refreshToken=i),s&&($(typeof s=="string","internal-error",{appName:t}),a.accessToken=s),r&&($(typeof r=="number","internal-error",{appName:t}),a.expirationTime=r),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Nr,this.toJSON())}_performRefresh(){return Kn("not implemented")}}/**
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
 */function pi(e,t){$(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class mn{constructor({uid:t,auth:n,stsTokenManager:i,...s}){this.providerId="firebase",this.proactiveRefresh=new ND(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Nd(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await xo(this,this.stsTokenManager.getToken(this.auth,t));return $(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return RD(this,t)}reload(){return DD(this)}_assign(t){this!==t&&($(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>({...n})),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new mn({...this,auth:t,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(t){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let i=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),i=!0),n&&await $u(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(dn(this.auth.app))return Promise.reject(Fi(this.auth));const t=await this.getIdToken();return await xo(this,ID(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>({...t})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){const i=n.displayName??void 0,s=n.email??void 0,r=n.phoneNumber??void 0,a=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,h=n.createdAt??void 0,d=n.lastLoginAt??void 0,{uid:m,emailVerified:g,isAnonymous:T,providerData:D,stsTokenManager:V}=n;$(m&&V,t,"internal-error");const P=Nr.fromJSON(this.name,V);$(typeof m=="string",t,"internal-error"),pi(i,t.name),pi(s,t.name),$(typeof g=="boolean",t,"internal-error"),$(typeof T=="boolean",t,"internal-error"),pi(r,t.name),pi(a,t.name),pi(l,t.name),pi(u,t.name),pi(h,t.name),pi(d,t.name);const w=new mn({uid:m,auth:t,email:s,emailVerified:g,displayName:i,isAnonymous:T,photoURL:a,phoneNumber:r,tenantId:l,stsTokenManager:P,createdAt:h,lastLoginAt:d});return D&&Array.isArray(D)&&(w.providerData=D.map(E=>({...E}))),u&&(w._redirectEventId=u),w}static async _fromIdTokenResponse(t,n,i=!1){const s=new Nr;s.updateFromServerResponse(n);const r=new mn({uid:n.localId,auth:t,stsTokenManager:s,isAnonymous:i});return await $u(r),r}static async _fromGetAccountInfoResponse(t,n,i){const s=n.users[0];$(s.localId!==void 0,"internal-error");const r=s.providerUserInfo!==void 0?tb(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(r!=null&&r.length),l=new Nr;l.updateFromIdToken(i);const u=new mn({uid:s.localId,auth:t,stsTokenManager:l,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:r,metadata:new Nd(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(r!=null&&r.length)};return Object.assign(u,h),u}}/**
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
 */const j_=new Map;function Qn(e){si(e instanceof Function,"Expected a class definition");let t=j_.get(e);return t?(si(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,j_.set(e,t),t)}/**
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
 */class eb{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}eb.type="NONE";const B_=eb;/**
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
 */function au(e,t,n){return`firebase:${e}:${t}:${n}`}class Dr{constructor(t,n,i){this.persistence=t,this.auth=n,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=au(this.userKey,s.apiKey,r),this.fullPersistenceKey=au("persistence",s.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const n=await Xu(this.auth,{idToken:t}).catch(()=>{});return n?mn._fromGetAccountInfoResponse(this.auth,n,t):null}return mn._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,i="authUser"){if(!n.length)return new Dr(Qn(B_),t,i);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let r=s[0]||Qn(B_);const a=au(i,t.config.apiKey,t.name);let l=null;for(const h of n)try{const d=await h._get(a);if(d){let m;if(typeof d=="string"){const g=await Xu(t,{idToken:d}).catch(()=>{});if(!g)break;m=await mn._fromGetAccountInfoResponse(t,g,d)}else m=mn._fromJSON(t,d);h!==r&&(l=m),r=h;break}}catch{}const u=s.filter(h=>h._shouldAllowMigration);return!r._shouldAllowMigration||!u.length?new Dr(r,t,i):(r=u[0],l&&await r._set(a,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==r)try{await h._remove(a)}catch{}})),new Dr(r,t,i))}}/**
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
 */function q_(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(rb(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(nb(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ob(t))return"Blackberry";if(lb(t))return"Webos";if(ib(t))return"Safari";if((t.includes("chrome/")||sb(t))&&!t.includes("edge/"))return"Chrome";if(ab(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=e.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function nb(e=ye()){return/firefox\//i.test(e)}function ib(e=ye()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function sb(e=ye()){return/crios\//i.test(e)}function rb(e=ye()){return/iemobile/i.test(e)}function ab(e=ye()){return/android/i.test(e)}function ob(e=ye()){return/blackberry/i.test(e)}function lb(e=ye()){return/webos/i.test(e)}function ag(e=ye()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function VD(e=ye()){var t;return ag(e)&&!!((t=window.navigator)!=null&&t.standalone)}function kD(){return R2()&&document.documentMode===10}function ub(e=ye()){return ag(e)||ab(e)||lb(e)||ob(e)||/windows phone/i.test(e)||rb(e)}/**
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
 */function cb(e,t=[]){let n;switch(e){case"Browser":n=q_(ye());break;case"Worker":n=`${q_(ye())}-${e}`;break;default:n=e}const i=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${oa}/${i}`}/**
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
 */class LD{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const i=r=>new Promise((a,l)=>{try{const u=t(r);a(u)}catch(u){l(u)}});i.onAbort=n,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const i of this.queue)await i(t),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function UD(e,t={}){return la(e,"GET","/v2/passwordPolicy",kc(e,t))}/**
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
 */const PD=6;class zD{constructor(t){var i;const n=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??PD,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((i=t.allowedNonAlphanumericCharacters)==null?void 0:i.join(""))??"",this.forceUpgradeOnSignin=t.forceUpgradeOnSignin??!1,this.schemaVersion=t.schemaVersion}validatePassword(t){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,n),this.validatePasswordCharacterOptions(t,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(t,n){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=t.length>=i),s&&(n.meetsMaxPasswordLength=t.length<=s)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let s=0;s<t.length;s++)i=t.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(t,n,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=r))}}/**
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
 */class jD{constructor(t,n,i,s){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new H_(this),this.idTokenSubscription=new H_(this),this.beforeStateQueue=new LD(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=YA,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(r=>this._resolvePersistenceManagerAvailable=r)}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Qn(n)),this._initializationPromise=this.queue(async()=>{var i,s,r;if(!this._deleted&&(this.persistenceManager=await Dr.create(this,t),(i=this._resolvePersistenceManagerAvailable)==null||i.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)==null?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await Xu(this,{idToken:t}),i=await mn._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(i)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var r;if(dn(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(r=this.redirectUser)==null?void 0:r._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(t);(!a||a===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await $u(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=ED()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(dn(this.app))return Promise.reject(Fi(this));const n=t?Pt(t):null;return n&&$(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&$(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return dn(this.app)?Promise.reject(Fi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return dn(this.app)?Promise.reject(Fi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Qn(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await UD(this),n=new zD(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new Ks("auth","Firebase",t())}onAuthStateChanged(t,n,i){return this.registerStateListener(this.authStateSubscription,t,n,i)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,i){return this.registerStateListener(this.idTokenSubscription,t,n,i)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const i=this.onAuthStateChanged(()=>{i(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await MD(this,i)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)==null?void 0:t.toJSON()}}async _setRedirectUser(t,n){const i=await this.getOrInitRedirectPersistenceManager(n);return t===null?i.removeCurrentUser():i.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Qn(t)||this._popupRedirectResolver;$(n,this,"argument-error"),this.redirectPersistenceManager=await Dr.create(this,[Qn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===t?this._currentUser:((i=this.redirectUser)==null?void 0:i._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,i,s){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if($(l,this,"internal-error"),l.then(()=>{a||r(this.currentUser)}),typeof n=="function"){const u=t.addObserver(n,i,s);return()=>{a=!0,u()}}else{const u=t.addObserver(n);return()=>{a=!0,u()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=cb(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var n;if(dn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return t!=null&&t.error&&_D(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Lc(e){return Pt(e)}class H_{constructor(t){this.auth=t,this.observer=null,this.addObserver=V2(n=>this.observer=n)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let og={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function BD(e){og=e}function qD(e){return og.loadJS(e)}function HD(){return og.gapiScript}function FD(e){return`__${e}${Math.floor(Math.random()*1e6)}`}/**
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
 */function GD(e,t){const n=Qs(e,"auth");if(n.isInitialized()){const s=n.getImmediate(),r=n.getOptions();if(Zi(r,t??{}))return s;ii(s,"already-initialized")}return n.initialize({options:t})}function KD(e,t){const n=(t==null?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Qn);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,t==null?void 0:t.popupRedirectResolver)}function QD(e,t,n){const i=Lc(e);$(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");const s=!1,r=hb(t),{host:a,port:l}=YD(t),u=l===null?"":`:${l}`,h={url:`${r}//${a}${u}/`},d=Object.freeze({host:a,port:l,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!i._canInitEmulator){$(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),$(Zi(h,i.config.emulator)&&Zi(d,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=h,i.emulatorConfig=d,i.settings.appVerificationDisabledForTesting=!0,Jo(a)?vA(`${r}//${a}${u}`):XD()}function hb(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function YD(e){const t=hb(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:F_(i.substr(r.length+1))}}else{const[r,a]=i.split(":");return{host:r,port:F_(a)}}}function F_(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function XD(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class fb{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Kn("not implemented")}_getIdTokenResponse(t){return Kn("not implemented")}_linkToIdToken(t,n){return Kn("not implemented")}_getReauthenticationResolver(t){return Kn("not implemented")}}/**
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
 */async function xr(e,t){return ZA(e,"POST","/v1/accounts:signInWithIdp",kc(e,t))}/**
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
 */const $D="http://localhost";class Us extends fb{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Us(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):ii("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:i,signInMethod:s,...r}=n;if(!i||!s)return null;const a=new Us(i,s);return a.idToken=r.idToken||void 0,a.accessToken=r.accessToken||void 0,a.secret=r.secret,a.nonce=r.nonce,a.pendingToken=r.pendingToken||null,a}_getIdTokenResponse(t){const n=this.buildRequest();return xr(t,n)}_linkToIdToken(t,n){const i=this.buildRequest();return i.idToken=n,xr(t,i)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,xr(t,n)}buildRequest(){const t={requestUri:$D,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=$o(n)}return t}}/**
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
 */class db{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Wo extends db{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class bi extends Wo{constructor(){super("facebook.com")}static credential(t){return Us._fromParams({providerId:bi.PROVIDER_ID,signInMethod:bi.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return bi.credentialFromTaggedObject(t)}static credentialFromError(t){return bi.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return bi.credential(t.oauthAccessToken)}catch{return null}}}bi.FACEBOOK_SIGN_IN_METHOD="facebook.com";bi.PROVIDER_ID="facebook.com";/**
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
 */class Si extends Wo{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Us._fromParams({providerId:Si.PROVIDER_ID,signInMethod:Si.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Si.credentialFromTaggedObject(t)}static credentialFromError(t){return Si.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:i}=t;if(!n&&!i)return null;try{return Si.credential(n,i)}catch{return null}}}Si.GOOGLE_SIGN_IN_METHOD="google.com";Si.PROVIDER_ID="google.com";/**
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
 */class wi extends Wo{constructor(){super("github.com")}static credential(t){return Us._fromParams({providerId:wi.PROVIDER_ID,signInMethod:wi.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return wi.credentialFromTaggedObject(t)}static credentialFromError(t){return wi.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return wi.credential(t.oauthAccessToken)}catch{return null}}}wi.GITHUB_SIGN_IN_METHOD="github.com";wi.PROVIDER_ID="github.com";/**
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
 */class Ii extends Wo{constructor(){super("twitter.com")}static credential(t,n){return Us._fromParams({providerId:Ii.PROVIDER_ID,signInMethod:Ii.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Ii.credentialFromTaggedObject(t)}static credentialFromError(t){return Ii.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=t;if(!n||!i)return null;try{return Ii.credential(n,i)}catch{return null}}}Ii.TWITTER_SIGN_IN_METHOD="twitter.com";Ii.PROVIDER_ID="twitter.com";/**
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
 */async function JD(e,t){return ZA(e,"POST","/v1/accounts:signUp",kc(e,t))}/**
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
 */class Wi{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,i,s=!1){const r=await mn._fromIdTokenResponse(t,i,s),a=G_(i);return new Wi({user:r,providerId:a,_tokenResponse:i,operationType:n})}static async _forOperation(t,n,i){await t._updateTokensIfNecessary(i,!0);const s=G_(i);return new Wi({user:t,providerId:s,_tokenResponse:i,operationType:n})}}function G_(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */async function ZD(e){var s;if(dn(e.app))return Promise.reject(Fi(e));const t=Lc(e);if(await t._initializationPromise,(s=t.currentUser)!=null&&s.isAnonymous)return new Wi({user:t.currentUser,providerId:null,operationType:"signIn"});const n=await JD(t,{returnSecureToken:!0}),i=await Wi._fromIdTokenResponse(t,"signIn",n,!0);return await t._updateCurrentUser(i.user),i}/**
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
 */class Ju extends vn{constructor(t,n,i,s){super(n.code,n.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,Ju.prototype),this.customData={appName:t.name,tenantId:t.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(t,n,i,s){return new Ju(t,n,i,s)}}function mb(e,t,n,i){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Ju._fromErrorAndOperation(e,r,t,i):r})}async function WD(e,t,n=!1){const i=await xo(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Wi._forOperation(e,"link",i)}/**
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
 */async function tx(e,t,n=!1){const{auth:i}=e;if(dn(i.app))return Promise.reject(Fi(i));const s="reauthenticate";try{const r=await xo(e,mb(i,s,t,e),n);$(r.idToken,i,"internal-error");const a=rg(r.idToken);$(a,i,"internal-error");const{sub:l}=a;return $(e.uid===l,i,"user-mismatch"),Wi._forOperation(e,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&ii(i,"user-mismatch"),r}}/**
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
 */async function ex(e,t,n=!1){if(dn(e.app))return Promise.reject(Fi(e));const i="signIn",s=await mb(e,i,t),r=await Wi._fromIdTokenResponse(e,i,s);return n||await e._updateCurrentUser(r.user),r}function nx(e,t,n,i){return Pt(e).onIdTokenChanged(t,n,i)}function ix(e,t,n){return Pt(e).beforeAuthStateChanged(t,n)}function sx(e,t,n,i){return Pt(e).onAuthStateChanged(t,n,i)}const Zu="__sak";/**
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
 */class gb{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Zu,"1"),this.storage.removeItem(Zu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const rx=1e3,ax=10;class pb extends gb{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ub(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),s=this.localCache[n];i!==s&&t(n,s,i)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((a,l,u)=>{this.notifyListeners(a,u)});return}const i=t.key;n?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(i);!n&&this.localCache[i]===a||this.notifyListeners(i,a)},r=this.storage.getItem(i);kD()&&r!==t.newValue&&t.newValue!==t.oldValue?setTimeout(s,ax):s()}notifyListeners(t,n){this.localCache[t]=n;const i=this.listeners[t];if(i)for(const s of Array.from(i))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:i}),!0)})},rx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}pb.type="LOCAL";const ox=pb;/**
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
 */class yb extends gb{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}yb.type="SESSION";const _b=yb;/**
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
 */function lx(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Uc{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(s=>s.isListeningto(t));if(n)return n;const i=new Uc(t);return this.receivers.push(i),i}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:i,eventType:s,data:r}=n.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const l=Array.from(a).map(async h=>h(n.origin,r)),u=await lx(l);n.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:u})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Uc.receivers=[];/**
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
 */function lg(e="",t=10){let n="";for(let i=0;i<t;i++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class ux{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,a;return new Promise((l,u)=>{const h=lg("",20);s.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},i);a={messageChannel:s,onMessage(m){const g=m;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(d),r=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),l(g.data.response);break;default:clearTimeout(d),clearTimeout(r),u(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:t,eventId:h,data:n},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function Cn(){return window}function cx(e){Cn().location.href=e}/**
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
 */function vb(){return typeof Cn().WorkerGlobalScope<"u"&&typeof Cn().importScripts=="function"}async function hx(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function fx(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)==null?void 0:e.controller)||null}function dx(){return vb()?self:null}/**
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
 */const Tb="firebaseLocalStorageDb",mx=1,Wu="firebaseLocalStorage",Eb="fbase_key";class tl{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Pc(e,t){return e.transaction([Wu],t?"readwrite":"readonly").objectStore(Wu)}function gx(){const e=indexedDB.deleteDatabase(Tb);return new tl(e).toPromise()}function Dd(){const e=indexedDB.open(Tb,mx);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const i=e.result;try{i.createObjectStore(Wu,{keyPath:Eb})}catch(s){n(s)}}),e.addEventListener("success",async()=>{const i=e.result;i.objectStoreNames.contains(Wu)?t(i):(i.close(),await gx(),t(await Dd()))})})}async function K_(e,t,n){const i=Pc(e,!0).put({[Eb]:t,value:n});return new tl(i).toPromise()}async function px(e,t){const n=Pc(e,!1).get(t),i=await new tl(n).toPromise();return i===void 0?null:i.value}function Q_(e,t){const n=Pc(e,!0).delete(t);return new tl(n).toPromise()}const yx=800,_x=3;class Ab{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Dd(),this.db)}async _withRetries(t){let n=0;for(;;)try{const i=await this._openDb();return await t(i)}catch(i){if(n++>_x)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return vb()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Uc._getInstance(dx()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var n,i;if(this.activeServiceWorker=await hx(),!this.activeServiceWorker)return;this.sender=new ux(this.activeServiceWorker);const t=await this.sender._send("ping",{},800);t&&(n=t[0])!=null&&n.fulfilled&&(i=t[0])!=null&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||fx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Dd();return await K_(t,Zu,"1"),await Q_(t,Zu),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>K_(i,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(i=>px(i,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Q_(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(s=>{const r=Pc(s,!1).getAll();return new tl(r).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;if(t.length!==0)for(const{fbase_key:s,value:r}of t)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(t,n){this.localCache[t]=n;const i=this.listeners[t];if(i)for(const s of Array.from(i))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),yx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ab.type="LOCAL";const vx=Ab;new Zo(3e4,6e4);/**
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
 */function Tx(e,t){return t?Qn(t):($(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class ug extends fb{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return xr(t,this._buildIdpRequest())}_linkToIdToken(t,n){return xr(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return xr(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function Ex(e){return ex(e.auth,new ug(e),e.bypassAuthState)}function Ax(e){const{auth:t,user:n}=e;return $(n,t,"internal-error"),tx(n,new ug(e),e.bypassAuthState)}async function bx(e){const{auth:t,user:n}=e;return $(n,t,"internal-error"),WD(n,new ug(e),e.bypassAuthState)}/**
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
 */class bb{constructor(t,n,i,s,r=!1){this.auth=t,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:i,postBody:s,tenantId:r,error:a,type:l}=t;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:n,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Ex;case"linkViaPopup":case"linkViaRedirect":return bx;case"reauthViaPopup":case"reauthViaRedirect":return Ax;default:ii(this.auth,"internal-error")}}resolve(t){si(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){si(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Sx=new Zo(2e3,1e4);class Tr extends bb{constructor(t,n,i,s,r){super(t,n,s,r),this.provider=i,this.authWindow=null,this.pollId=null,Tr.currentPopupAction&&Tr.currentPopupAction.cancel(),Tr.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return $(t,this.auth,"internal-error"),t}async onExecution(){si(this.filter.length===1,"Popup operations only handle one event");const t=lg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Rn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)==null?void 0:t.associatedEvent)||null}cancel(){this.reject(Rn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Tr.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,i;if((i=(n=this.authWindow)==null?void 0:n.window)!=null&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Rn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,Sx.get())};t()}}Tr.currentPopupAction=null;/**
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
 */const wx="pendingRedirect",ou=new Map;class Ix extends bb{constructor(t,n,i=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let t=ou.get(this.auth._key());if(!t){try{const i=await Rx(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(i)}catch(n){t=()=>Promise.reject(n)}ou.set(this.auth._key(),t)}return this.bypassAuthState||ou.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Rx(e,t){const n=Dx(t),i=Nx(e);if(!await i._isAvailable())return!1;const s=await i._get(n)==="true";return await i._remove(n),s}function Cx(e,t){ou.set(e._key(),t)}function Nx(e){return Qn(e._redirectPersistence)}function Dx(e){return au(wx,e.config.apiKey,e.name)}async function xx(e,t,n=!1){if(dn(e.app))return Promise.reject(Fi(e));const i=Lc(e),s=Tx(i,t),a=await new Ix(i,s,n).execute();return a&&!n&&(delete a.user._redirectEventId,await i._persistUserIfCurrent(a.user),await i._setRedirectUser(null,t)),a}/**
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
 */const Ox=10*60*1e3;class Mx{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(t,i)&&(n=!0,this.sendToConsumer(t,i),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!Vx(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var i;if(t.error&&!Sb(t)){const s=((i=t.error.code)==null?void 0:i.split("auth/")[1])||"internal-error";n.onError(Rn(this.auth,s))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const i=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&i}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Ox&&this.cachedEventUids.clear(),this.cachedEventUids.has(Y_(t))}saveEventToCache(t){this.cachedEventUids.add(Y_(t)),this.lastProcessedEventTime=Date.now()}}function Y_(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Sb({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function Vx(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Sb(e);default:return!1}}/**
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
 */async function kx(e,t={}){return la(e,"GET","/v1/projects",t)}/**
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
 */const Lx=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ux=/^https?/;async function Px(e){if(e.config.emulator)return;const{authorizedDomains:t}=await kx(e);for(const n of t)try{if(zx(n))return}catch{}ii(e,"unauthorized-domain")}function zx(e){const t=Cd(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const a=new URL(e);return a.hostname===""&&i===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===i}if(!Ux.test(n))return!1;if(Lx.test(e))return i===e;const s=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const jx=new Zo(3e4,6e4);function X_(){const e=Cn().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function Bx(e){return new Promise((t,n)=>{var s,r,a;function i(){X_(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{X_(),n(Rn(e,"network-request-failed"))},timeout:jx.get()})}if((r=(s=Cn().gapi)==null?void 0:s.iframes)!=null&&r.Iframe)t(gapi.iframes.getContext());else if((a=Cn().gapi)!=null&&a.load)i();else{const l=FD("iframefcb");return Cn()[l]=()=>{gapi.load?i():n(Rn(e,"network-request-failed"))},qD(`${HD()}?onload=${l}`).catch(u=>n(u))}}).catch(t=>{throw lu=null,t})}let lu=null;function qx(e){return lu=lu||Bx(e),lu}/**
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
 */const Hx=new Zo(5e3,15e3),Fx="__/auth/iframe",Gx="emulator/auth/iframe",Kx={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Qx=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Yx(e){const t=e.config;$(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?sg(t,Gx):`https://${e.config.authDomain}/${Fx}`,i={apiKey:t.apiKey,appName:e.name,v:oa},s=Qx.get(e.config.apiHost);s&&(i.eid=s);const r=e._getFrameworks();return r.length&&(i.fw=r.join(",")),`${n}?${$o(i).slice(1)}`}async function Xx(e){const t=await qx(e),n=Cn().gapi;return $(n,e,"internal-error"),t.open({where:document.body,url:Yx(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Kx,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const a=Rn(e,"network-request-failed"),l=Cn().setTimeout(()=>{r(a)},Hx.get());function u(){Cn().clearTimeout(l),s(i)}i.ping(u).then(u,()=>{r(a)})}))}/**
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
 */const $x={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Jx=500,Zx=600,Wx="_blank",tO="http://localhost";class $_{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function eO(e,t,n,i=Jx,s=Zx){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let l="";const u={...$x,width:i.toString(),height:s.toString(),top:r,left:a},h=ye().toLowerCase();n&&(l=sb(h)?Wx:n),nb(h)&&(t=t||tO,u.scrollbars="yes");const d=Object.entries(u).reduce((g,[T,D])=>`${g}${T}=${D},`,"");if(VD(h)&&l!=="_self")return nO(t||"",l),new $_(null);const m=window.open(t||"",l,d);$(m,e,"popup-blocked");try{m.focus()}catch{}return new $_(m)}function nO(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const iO="__/auth/handler",sO="emulator/auth/handler",rO=encodeURIComponent("fac");async function J_(e,t,n,i,s,r){$(e.config.authDomain,e,"auth-domain-config-required"),$(e.config.apiKey,e,"invalid-api-key");const a={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:oa,eventId:s};if(t instanceof db){t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||"",M2(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[d,m]of Object.entries({}))a[d]=m}if(t instanceof Wo){const d=t.getScopes().filter(m=>m!=="");d.length>0&&(a.scopes=d.join(","))}e.tenantId&&(a.tid=e.tenantId);const l=a;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const u=await e._getAppCheckToken(),h=u?`#${rO}=${encodeURIComponent(u)}`:"";return`${aO(e)}?${$o(l).slice(1)}${h}`}function aO({config:e}){return e.emulator?sg(e,sO):`https://${e.authDomain}/${iO}`}/**
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
 */const pf="webStorageSupport";class oO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=_b,this._completeRedirectFn=xx,this._overrideRedirectResult=Cx}async _openPopup(t,n,i,s){var a;si((a=this.eventManagers[t._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const r=await J_(t,n,i,Cd(),s);return eO(t,r,lg())}async _openRedirect(t,n,i,s){await this._originValidation(t);const r=await J_(t,n,i,Cd(),s);return cx(r),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:s,promise:r}=this.eventManagers[n];return s?Promise.resolve(s):(si(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(t);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(t){const n=await Xx(t),i=new Mx(t);return n.register("authEvent",s=>($(s==null?void 0:s.authEvent,t,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:i},this.iframes[t._key()]=n,i}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(pf,{type:pf},s=>{var a;const r=(a=s==null?void 0:s[0])==null?void 0:a[pf];r!==void 0&&n(!!r),ii(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Px(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return ub()||ib()||ag()}}const lO=oO;var Z_="@firebase/auth",W_="1.13.0";/**
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
 */class uO{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)==null?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(i=>{t((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function cO(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function hO(e){On(new pn("auth",(t,{options:n})=>{const i=t.getProvider("app").getImmediate(),s=t.getProvider("heartbeat"),r=t.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=i.options;$(a&&!a.includes(":"),"invalid-api-key",{appName:i.name});const u={apiKey:a,authDomain:l,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:cb(e)},h=new jD(i,s,r,u);return KD(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,i)=>{t.getProvider("auth-internal").initialize()})),On(new pn("auth-internal",t=>{const n=Lc(t.getProvider("auth").getImmediate());return(i=>new uO(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ln(Z_,W_,cO(e)),ln(Z_,W_,"esm2020")}/**
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
 */const fO=5*60,dO=gA("authIdTokenMaxAge")||fO;let tv=null;const mO=e=>async t=>{const n=t&&await t.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>dO)return;const s=n==null?void 0:n.token;tv!==s&&(tv=s,await fetch(e,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function gO(e=$m()){const t=Qs(e,"auth");if(t.isInitialized())return t.getImmediate();const n=GD(e,{popupRedirectResolver:lO,persistence:[vx,ox,_b]}),i=gA("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(i,location.origin);if(location.origin===r.origin){const a=mO(r.toString());ix(n,a,()=>a(n.currentUser)),nx(n,l=>a(l))}}const s=dA("auth");return s&&QD(n,`http://${s}`),n}function pO(){var e;return((e=document.getElementsByTagName("head"))==null?void 0:e[0])??document}BD({loadJS(e){return new Promise((t,n)=>{const i=document.createElement("script");i.setAttribute("src",e),i.onload=t,i.onerror=s=>{const r=Rn("internal-error");r.customData=s,n(r)},i.type="text/javascript",i.charset="UTF-8",pO().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});hO("Browser");var ev=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Gi,wb;(function(){var e;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(v,p){function _(){}_.prototype=p.prototype,v.F=p.prototype,v.prototype=new _,v.prototype.constructor=v,v.D=function(b,I,C){for(var A=Array(arguments.length-2),zt=2;zt<arguments.length;zt++)A[zt-2]=arguments[zt];return p.prototype[I].apply(b,A)}}function n(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(i,n),i.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(v,p,_){_||(_=0);const b=Array(16);if(typeof p=="string")for(var I=0;I<16;++I)b[I]=p.charCodeAt(_++)|p.charCodeAt(_++)<<8|p.charCodeAt(_++)<<16|p.charCodeAt(_++)<<24;else for(I=0;I<16;++I)b[I]=p[_++]|p[_++]<<8|p[_++]<<16|p[_++]<<24;p=v.g[0],_=v.g[1],I=v.g[2];let C=v.g[3],A;A=p+(C^_&(I^C))+b[0]+3614090360&4294967295,p=_+(A<<7&4294967295|A>>>25),A=C+(I^p&(_^I))+b[1]+3905402710&4294967295,C=p+(A<<12&4294967295|A>>>20),A=I+(_^C&(p^_))+b[2]+606105819&4294967295,I=C+(A<<17&4294967295|A>>>15),A=_+(p^I&(C^p))+b[3]+3250441966&4294967295,_=I+(A<<22&4294967295|A>>>10),A=p+(C^_&(I^C))+b[4]+4118548399&4294967295,p=_+(A<<7&4294967295|A>>>25),A=C+(I^p&(_^I))+b[5]+1200080426&4294967295,C=p+(A<<12&4294967295|A>>>20),A=I+(_^C&(p^_))+b[6]+2821735955&4294967295,I=C+(A<<17&4294967295|A>>>15),A=_+(p^I&(C^p))+b[7]+4249261313&4294967295,_=I+(A<<22&4294967295|A>>>10),A=p+(C^_&(I^C))+b[8]+1770035416&4294967295,p=_+(A<<7&4294967295|A>>>25),A=C+(I^p&(_^I))+b[9]+2336552879&4294967295,C=p+(A<<12&4294967295|A>>>20),A=I+(_^C&(p^_))+b[10]+4294925233&4294967295,I=C+(A<<17&4294967295|A>>>15),A=_+(p^I&(C^p))+b[11]+2304563134&4294967295,_=I+(A<<22&4294967295|A>>>10),A=p+(C^_&(I^C))+b[12]+1804603682&4294967295,p=_+(A<<7&4294967295|A>>>25),A=C+(I^p&(_^I))+b[13]+4254626195&4294967295,C=p+(A<<12&4294967295|A>>>20),A=I+(_^C&(p^_))+b[14]+2792965006&4294967295,I=C+(A<<17&4294967295|A>>>15),A=_+(p^I&(C^p))+b[15]+1236535329&4294967295,_=I+(A<<22&4294967295|A>>>10),A=p+(I^C&(_^I))+b[1]+4129170786&4294967295,p=_+(A<<5&4294967295|A>>>27),A=C+(_^I&(p^_))+b[6]+3225465664&4294967295,C=p+(A<<9&4294967295|A>>>23),A=I+(p^_&(C^p))+b[11]+643717713&4294967295,I=C+(A<<14&4294967295|A>>>18),A=_+(C^p&(I^C))+b[0]+3921069994&4294967295,_=I+(A<<20&4294967295|A>>>12),A=p+(I^C&(_^I))+b[5]+3593408605&4294967295,p=_+(A<<5&4294967295|A>>>27),A=C+(_^I&(p^_))+b[10]+38016083&4294967295,C=p+(A<<9&4294967295|A>>>23),A=I+(p^_&(C^p))+b[15]+3634488961&4294967295,I=C+(A<<14&4294967295|A>>>18),A=_+(C^p&(I^C))+b[4]+3889429448&4294967295,_=I+(A<<20&4294967295|A>>>12),A=p+(I^C&(_^I))+b[9]+568446438&4294967295,p=_+(A<<5&4294967295|A>>>27),A=C+(_^I&(p^_))+b[14]+3275163606&4294967295,C=p+(A<<9&4294967295|A>>>23),A=I+(p^_&(C^p))+b[3]+4107603335&4294967295,I=C+(A<<14&4294967295|A>>>18),A=_+(C^p&(I^C))+b[8]+1163531501&4294967295,_=I+(A<<20&4294967295|A>>>12),A=p+(I^C&(_^I))+b[13]+2850285829&4294967295,p=_+(A<<5&4294967295|A>>>27),A=C+(_^I&(p^_))+b[2]+4243563512&4294967295,C=p+(A<<9&4294967295|A>>>23),A=I+(p^_&(C^p))+b[7]+1735328473&4294967295,I=C+(A<<14&4294967295|A>>>18),A=_+(C^p&(I^C))+b[12]+2368359562&4294967295,_=I+(A<<20&4294967295|A>>>12),A=p+(_^I^C)+b[5]+4294588738&4294967295,p=_+(A<<4&4294967295|A>>>28),A=C+(p^_^I)+b[8]+2272392833&4294967295,C=p+(A<<11&4294967295|A>>>21),A=I+(C^p^_)+b[11]+1839030562&4294967295,I=C+(A<<16&4294967295|A>>>16),A=_+(I^C^p)+b[14]+4259657740&4294967295,_=I+(A<<23&4294967295|A>>>9),A=p+(_^I^C)+b[1]+2763975236&4294967295,p=_+(A<<4&4294967295|A>>>28),A=C+(p^_^I)+b[4]+1272893353&4294967295,C=p+(A<<11&4294967295|A>>>21),A=I+(C^p^_)+b[7]+4139469664&4294967295,I=C+(A<<16&4294967295|A>>>16),A=_+(I^C^p)+b[10]+3200236656&4294967295,_=I+(A<<23&4294967295|A>>>9),A=p+(_^I^C)+b[13]+681279174&4294967295,p=_+(A<<4&4294967295|A>>>28),A=C+(p^_^I)+b[0]+3936430074&4294967295,C=p+(A<<11&4294967295|A>>>21),A=I+(C^p^_)+b[3]+3572445317&4294967295,I=C+(A<<16&4294967295|A>>>16),A=_+(I^C^p)+b[6]+76029189&4294967295,_=I+(A<<23&4294967295|A>>>9),A=p+(_^I^C)+b[9]+3654602809&4294967295,p=_+(A<<4&4294967295|A>>>28),A=C+(p^_^I)+b[12]+3873151461&4294967295,C=p+(A<<11&4294967295|A>>>21),A=I+(C^p^_)+b[15]+530742520&4294967295,I=C+(A<<16&4294967295|A>>>16),A=_+(I^C^p)+b[2]+3299628645&4294967295,_=I+(A<<23&4294967295|A>>>9),A=p+(I^(_|~C))+b[0]+4096336452&4294967295,p=_+(A<<6&4294967295|A>>>26),A=C+(_^(p|~I))+b[7]+1126891415&4294967295,C=p+(A<<10&4294967295|A>>>22),A=I+(p^(C|~_))+b[14]+2878612391&4294967295,I=C+(A<<15&4294967295|A>>>17),A=_+(C^(I|~p))+b[5]+4237533241&4294967295,_=I+(A<<21&4294967295|A>>>11),A=p+(I^(_|~C))+b[12]+1700485571&4294967295,p=_+(A<<6&4294967295|A>>>26),A=C+(_^(p|~I))+b[3]+2399980690&4294967295,C=p+(A<<10&4294967295|A>>>22),A=I+(p^(C|~_))+b[10]+4293915773&4294967295,I=C+(A<<15&4294967295|A>>>17),A=_+(C^(I|~p))+b[1]+2240044497&4294967295,_=I+(A<<21&4294967295|A>>>11),A=p+(I^(_|~C))+b[8]+1873313359&4294967295,p=_+(A<<6&4294967295|A>>>26),A=C+(_^(p|~I))+b[15]+4264355552&4294967295,C=p+(A<<10&4294967295|A>>>22),A=I+(p^(C|~_))+b[6]+2734768916&4294967295,I=C+(A<<15&4294967295|A>>>17),A=_+(C^(I|~p))+b[13]+1309151649&4294967295,_=I+(A<<21&4294967295|A>>>11),A=p+(I^(_|~C))+b[4]+4149444226&4294967295,p=_+(A<<6&4294967295|A>>>26),A=C+(_^(p|~I))+b[11]+3174756917&4294967295,C=p+(A<<10&4294967295|A>>>22),A=I+(p^(C|~_))+b[2]+718787259&4294967295,I=C+(A<<15&4294967295|A>>>17),A=_+(C^(I|~p))+b[9]+3951481745&4294967295,v.g[0]=v.g[0]+p&4294967295,v.g[1]=v.g[1]+(I+(A<<21&4294967295|A>>>11))&4294967295,v.g[2]=v.g[2]+I&4294967295,v.g[3]=v.g[3]+C&4294967295}i.prototype.v=function(v,p){p===void 0&&(p=v.length);const _=p-this.blockSize,b=this.C;let I=this.h,C=0;for(;C<p;){if(I==0)for(;C<=_;)s(this,v,C),C+=this.blockSize;if(typeof v=="string"){for(;C<p;)if(b[I++]=v.charCodeAt(C++),I==this.blockSize){s(this,b),I=0;break}}else for(;C<p;)if(b[I++]=v[C++],I==this.blockSize){s(this,b),I=0;break}}this.h=I,this.o+=p},i.prototype.A=function(){var v=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);v[0]=128;for(var p=1;p<v.length-8;++p)v[p]=0;p=this.o*8;for(var _=v.length-8;_<v.length;++_)v[_]=p&255,p/=256;for(this.v(v),v=Array(16),p=0,_=0;_<4;++_)for(let b=0;b<32;b+=8)v[p++]=this.g[_]>>>b&255;return v};function r(v,p){var _=l;return Object.prototype.hasOwnProperty.call(_,v)?_[v]:_[v]=p(v)}function a(v,p){this.h=p;const _=[];let b=!0;for(let I=v.length-1;I>=0;I--){const C=v[I]|0;b&&C==p||(_[I]=C,b=!1)}this.g=_}var l={};function u(v){return-128<=v&&v<128?r(v,function(p){return new a([p|0],p<0?-1:0)}):new a([v|0],v<0?-1:0)}function h(v){if(isNaN(v)||!isFinite(v))return m;if(v<0)return P(h(-v));const p=[];let _=1;for(let b=0;v>=_;b++)p[b]=v/_|0,_*=4294967296;return new a(p,0)}function d(v,p){if(v.length==0)throw Error("number format error: empty string");if(p=p||10,p<2||36<p)throw Error("radix out of range: "+p);if(v.charAt(0)=="-")return P(d(v.substring(1),p));if(v.indexOf("-")>=0)throw Error('number format error: interior "-" character');const _=h(Math.pow(p,8));let b=m;for(let C=0;C<v.length;C+=8){var I=Math.min(8,v.length-C);const A=parseInt(v.substring(C,C+I),p);I<8?(I=h(Math.pow(p,I)),b=b.j(I).add(h(A))):(b=b.j(_),b=b.add(h(A)))}return b}var m=u(0),g=u(1),T=u(16777216);e=a.prototype,e.m=function(){if(V(this))return-P(this).m();let v=0,p=1;for(let _=0;_<this.g.length;_++){const b=this.i(_);v+=(b>=0?b:4294967296+b)*p,p*=4294967296}return v},e.toString=function(v){if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(D(this))return"0";if(V(this))return"-"+P(this).toString(v);const p=h(Math.pow(v,6));var _=this;let b="";for(;;){const I=x(_,p).g;_=w(_,I.j(p));let C=((_.g.length>0?_.g[0]:_.h)>>>0).toString(v);if(_=I,D(_))return C+b;for(;C.length<6;)C="0"+C;b=C+b}},e.i=function(v){return v<0?0:v<this.g.length?this.g[v]:this.h};function D(v){if(v.h!=0)return!1;for(let p=0;p<v.g.length;p++)if(v.g[p]!=0)return!1;return!0}function V(v){return v.h==-1}e.l=function(v){return v=w(this,v),V(v)?-1:D(v)?0:1};function P(v){const p=v.g.length,_=[];for(let b=0;b<p;b++)_[b]=~v.g[b];return new a(_,~v.h).add(g)}e.abs=function(){return V(this)?P(this):this},e.add=function(v){const p=Math.max(this.g.length,v.g.length),_=[];let b=0;for(let I=0;I<=p;I++){let C=b+(this.i(I)&65535)+(v.i(I)&65535),A=(C>>>16)+(this.i(I)>>>16)+(v.i(I)>>>16);b=A>>>16,C&=65535,A&=65535,_[I]=A<<16|C}return new a(_,_[_.length-1]&-2147483648?-1:0)};function w(v,p){return v.add(P(p))}e.j=function(v){if(D(this)||D(v))return m;if(V(this))return V(v)?P(this).j(P(v)):P(P(this).j(v));if(V(v))return P(this.j(P(v)));if(this.l(T)<0&&v.l(T)<0)return h(this.m()*v.m());const p=this.g.length+v.g.length,_=[];for(var b=0;b<2*p;b++)_[b]=0;for(b=0;b<this.g.length;b++)for(let I=0;I<v.g.length;I++){const C=this.i(b)>>>16,A=this.i(b)&65535,zt=v.i(I)>>>16,Ve=v.i(I)&65535;_[2*b+2*I]+=A*Ve,E(_,2*b+2*I),_[2*b+2*I+1]+=C*Ve,E(_,2*b+2*I+1),_[2*b+2*I+1]+=A*zt,E(_,2*b+2*I+1),_[2*b+2*I+2]+=C*zt,E(_,2*b+2*I+2)}for(v=0;v<p;v++)_[v]=_[2*v+1]<<16|_[2*v];for(v=p;v<2*p;v++)_[v]=0;return new a(_,0)};function E(v,p){for(;(v[p]&65535)!=v[p];)v[p+1]+=v[p]>>>16,v[p]&=65535,p++}function R(v,p){this.g=v,this.h=p}function x(v,p){if(D(p))throw Error("division by zero");if(D(v))return new R(m,m);if(V(v))return p=x(P(v),p),new R(P(p.g),P(p.h));if(V(p))return p=x(v,P(p)),new R(P(p.g),p.h);if(v.g.length>30){if(V(v)||V(p))throw Error("slowDivide_ only works with positive integers.");for(var _=g,b=p;b.l(v)<=0;)_=z(_),b=z(b);var I=G(_,1),C=G(b,1);for(b=G(b,2),_=G(_,2);!D(b);){var A=C.add(b);A.l(v)<=0&&(I=I.add(_),C=A),b=G(b,1),_=G(_,1)}return p=w(v,I.j(p)),new R(I,p)}for(I=m;v.l(p)>=0;){for(_=Math.max(1,Math.floor(v.m()/p.m())),b=Math.ceil(Math.log(_)/Math.LN2),b=b<=48?1:Math.pow(2,b-48),C=h(_),A=C.j(p);V(A)||A.l(v)>0;)_-=b,C=h(_),A=C.j(p);D(C)&&(C=g),I=I.add(C),v=w(v,A)}return new R(I,v)}e.B=function(v){return x(this,v).h},e.and=function(v){const p=Math.max(this.g.length,v.g.length),_=[];for(let b=0;b<p;b++)_[b]=this.i(b)&v.i(b);return new a(_,this.h&v.h)},e.or=function(v){const p=Math.max(this.g.length,v.g.length),_=[];for(let b=0;b<p;b++)_[b]=this.i(b)|v.i(b);return new a(_,this.h|v.h)},e.xor=function(v){const p=Math.max(this.g.length,v.g.length),_=[];for(let b=0;b<p;b++)_[b]=this.i(b)^v.i(b);return new a(_,this.h^v.h)};function z(v){const p=v.g.length+1,_=[];for(let b=0;b<p;b++)_[b]=v.i(b)<<1|v.i(b-1)>>>31;return new a(_,v.h)}function G(v,p){const _=p>>5;p%=32;const b=v.g.length-_,I=[];for(let C=0;C<b;C++)I[C]=p>0?v.i(C+_)>>>p|v.i(C+_+1)<<32-p:v.i(C+_);return new a(I,v.h)}i.prototype.digest=i.prototype.A,i.prototype.reset=i.prototype.u,i.prototype.update=i.prototype.v,wb=i,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=d,Gi=a}).apply(typeof ev<"u"?ev:typeof self<"u"?self:typeof window<"u"?window:{});var Pl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ib,Ga,Rb,uu,xd,Cb,Nb,Db;(function(){var e,t=Object.defineProperty;function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Pl=="object"&&Pl];for(var c=0;c<o.length;++c){var f=o[c];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var i=n(this);function s(o,c){if(c)t:{var f=i;o=o.split(".");for(var y=0;y<o.length-1;y++){var N=o[y];if(!(N in f))break t;f=f[N]}o=o[o.length-1],y=f[o],c=c(y),c!=y&&c!=null&&t(f,o,{configurable:!0,writable:!0,value:c})}}s("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(o){return o||function(c){var f=[],y;for(y in c)Object.prototype.hasOwnProperty.call(c,y)&&f.push([y,c[y]]);return f}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var r=r||{},a=this||self;function l(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function u(o,c,f){return o.call.apply(o.bind,arguments)}function h(o,c,f){return h=u,h.apply(null,arguments)}function d(o,c){var f=Array.prototype.slice.call(arguments,1);return function(){var y=f.slice();return y.push.apply(y,arguments),o.apply(this,y)}}function m(o,c){function f(){}f.prototype=c.prototype,o.Z=c.prototype,o.prototype=new f,o.prototype.constructor=o,o.Ob=function(y,N,O){for(var j=Array(arguments.length-2),nt=2;nt<arguments.length;nt++)j[nt-2]=arguments[nt];return c.prototype[N].apply(y,j)}}var g=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function T(o){const c=o.length;if(c>0){const f=Array(c);for(let y=0;y<c;y++)f[y]=o[y];return f}return[]}function D(o,c){for(let y=1;y<arguments.length;y++){const N=arguments[y];var f=typeof N;if(f=f!="object"?f:N?Array.isArray(N)?"array":f:"null",f=="array"||f=="object"&&typeof N.length=="number"){f=o.length||0;const O=N.length||0;o.length=f+O;for(let j=0;j<O;j++)o[f+j]=N[j]}else o.push(N)}}class V{constructor(c,f){this.i=c,this.j=f,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function P(o){a.setTimeout(()=>{throw o},0)}function w(){var o=v;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class E{constructor(){this.h=this.g=null}add(c,f){const y=R.get();y.set(c,f),this.h?this.h.next=y:this.g=y,this.h=y}}var R=new V(()=>new x,o=>o.reset());class x{constructor(){this.next=this.g=this.h=null}set(c,f){this.h=c,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let z,G=!1,v=new E,p=()=>{const o=Promise.resolve(void 0);z=()=>{o.then(_)}};function _(){for(var o;o=w();){try{o.h.call(o.g)}catch(f){P(f)}var c=R;c.j(o),c.h<100&&(c.h++,o.next=c.g,c.g=o)}G=!1}function b(){this.u=this.u,this.C=this.C}b.prototype.u=!1,b.prototype.dispose=function(){this.u||(this.u=!0,this.N())},b.prototype[Symbol.dispose]=function(){this.dispose()},b.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function I(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}I.prototype.h=function(){this.defaultPrevented=!0};var C=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const f=()=>{};a.addEventListener("test",f,c),a.removeEventListener("test",f,c)}catch{}return o}();function A(o){return/^[\s\xa0]*$/.test(o)}function zt(o,c){I.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,c)}m(zt,I),zt.prototype.init=function(o,c){const f=this.type=o.type,y=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget,c||(f=="mouseover"?c=o.fromElement:f=="mouseout"&&(c=o.toElement)),this.relatedTarget=c,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&zt.Z.h.call(this)},zt.prototype.h=function(){zt.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Ve="closure_listenable_"+(Math.random()*1e6|0),M=0;function F(o,c,f,y,N){this.listener=o,this.proxy=null,this.src=c,this.type=f,this.capture=!!y,this.ha=N,this.key=++M,this.da=this.fa=!1}function B(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function K(o,c,f){for(const y in o)c.call(f,o[y],y,o)}function rt(o,c){for(const f in o)c.call(void 0,o[f],f,o)}function ke(o){const c={};for(const f in o)c[f]=o[f];return c}const cn="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function fe(o,c){let f,y;for(let N=1;N<arguments.length;N++){y=arguments[N];for(f in y)o[f]=y[f];for(let O=0;O<cn.length;O++)f=cn[O],Object.prototype.hasOwnProperty.call(y,f)&&(o[f]=y[f])}}function Se(o){this.src=o,this.g={},this.h=0}Se.prototype.add=function(o,c,f,y,N){const O=o.toString();o=this.g[O],o||(o=this.g[O]=[],this.h++);const j=li(o,c,y,N);return j>-1?(c=o[j],f||(c.fa=!1)):(c=new F(c,this.src,O,!!y,N),c.fa=f,o.push(c)),c};function Le(o,c){const f=c.type;if(f in o.g){var y=o.g[f],N=Array.prototype.indexOf.call(y,c,void 0),O;(O=N>=0)&&Array.prototype.splice.call(y,N,1),O&&(B(c),o.g[f].length==0&&(delete o.g[f],o.h--))}}function li(o,c,f,y){for(let N=0;N<o.length;++N){const O=o[N];if(!O.da&&O.listener==c&&O.capture==!!f&&O.ha==y)return N}return-1}var bt="closure_lm_"+(Math.random()*1e6|0),ma={};function ll(o,c,f,y,N){if(Array.isArray(c)){for(let O=0;O<c.length;O++)ll(o,c[O],f,y,N);return null}return f=Qg(f),o&&o[Ve]?o.J(c,f,l(y)?!!y.capture:!1,N):eh(o,c,f,!1,y,N)}function eh(o,c,f,y,N,O){if(!c)throw Error("Invalid event type");const j=l(N)?!!N.capture:!!N;let nt=ih(o);if(nt||(o[bt]=nt=new Se(o)),f=nt.add(c,f,y,j,O),f.proxy)return f;if(y=sw(),f.proxy=y,y.src=o,y.listener=f,o.addEventListener)C||(N=j),N===void 0&&(N=!1),o.addEventListener(c.toString(),y,N);else if(o.attachEvent)o.attachEvent(Kg(c.toString()),y);else if(o.addListener&&o.removeListener)o.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return f}function sw(){function o(f){return c.call(o.src,o.listener,f)}const c=rw;return o}function Gg(o,c,f,y,N){if(Array.isArray(c))for(var O=0;O<c.length;O++)Gg(o,c[O],f,y,N);else y=l(y)?!!y.capture:!!y,f=Qg(f),o&&o[Ve]?(o=o.i,O=String(c).toString(),O in o.g&&(c=o.g[O],f=li(c,f,y,N),f>-1&&(B(c[f]),Array.prototype.splice.call(c,f,1),c.length==0&&(delete o.g[O],o.h--)))):o&&(o=ih(o))&&(c=o.g[c.toString()],o=-1,c&&(o=li(c,f,y,N)),(f=o>-1?c[o]:null)&&nh(f))}function nh(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[Ve])Le(c.i,o);else{var f=o.type,y=o.proxy;c.removeEventListener?c.removeEventListener(f,y,o.capture):c.detachEvent?c.detachEvent(Kg(f),y):c.addListener&&c.removeListener&&c.removeListener(y),(f=ih(c))?(Le(f,o),f.h==0&&(f.src=null,c[bt]=null)):B(o)}}}function Kg(o){return o in ma?ma[o]:ma[o]="on"+o}function rw(o,c){if(o.da)o=!0;else{c=new zt(c,this);const f=o.listener,y=o.ha||o.src;o.fa&&nh(o),o=f.call(y,c)}return o}function ih(o){return o=o[bt],o instanceof Se?o:null}var sh="__closure_events_fn_"+(Math.random()*1e9>>>0);function Qg(o){return typeof o=="function"?o:(o[sh]||(o[sh]=function(c){return o.handleEvent(c)}),o[sh])}function de(){b.call(this),this.i=new Se(this),this.M=this,this.G=null}m(de,b),de.prototype[Ve]=!0,de.prototype.removeEventListener=function(o,c,f,y){Gg(this,o,c,f,y)};function _e(o,c){var f,y=o.G;if(y)for(f=[];y;y=y.G)f.push(y);if(o=o.M,y=c.type||c,typeof c=="string")c=new I(c,o);else if(c instanceof I)c.target=c.target||o;else{var N=c;c=new I(y,o),fe(c,N)}N=!0;let O,j;if(f)for(j=f.length-1;j>=0;j--)O=c.g=f[j],N=ul(O,y,!0,c)&&N;if(O=c.g=o,N=ul(O,y,!0,c)&&N,N=ul(O,y,!1,c)&&N,f)for(j=0;j<f.length;j++)O=c.g=f[j],N=ul(O,y,!1,c)&&N}de.prototype.N=function(){if(de.Z.N.call(this),this.i){var o=this.i;for(const c in o.g){const f=o.g[c];for(let y=0;y<f.length;y++)B(f[y]);delete o.g[c],o.h--}}this.G=null},de.prototype.J=function(o,c,f,y){return this.i.add(String(o),c,!1,f,y)},de.prototype.K=function(o,c,f,y){return this.i.add(String(o),c,!0,f,y)};function ul(o,c,f,y){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();let N=!0;for(let O=0;O<c.length;++O){const j=c[O];if(j&&!j.da&&j.capture==f){const nt=j.listener,Yt=j.ha||j.src;j.fa&&Le(o.i,j),N=nt.call(Yt,y)!==!1&&N}}return N&&!y.defaultPrevented}function aw(o,c){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=h(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:a.setTimeout(o,c||0)}function Yg(o){o.g=aw(()=>{o.g=null,o.i&&(o.i=!1,Yg(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class ow extends b{constructor(c,f){super(),this.m=c,this.l=f,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Yg(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ga(o){b.call(this),this.h=o,this.g={}}m(ga,b);var Xg=[];function $g(o){K(o.g,function(c,f){this.g.hasOwnProperty(f)&&nh(c)},o),o.g={}}ga.prototype.N=function(){ga.Z.N.call(this),$g(this)},ga.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var rh=a.JSON.stringify,lw=a.JSON.parse,uw=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function Jg(){}function Zg(){}var pa={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function ah(){I.call(this,"d")}m(ah,I);function oh(){I.call(this,"c")}m(oh,I);var cs={},Wg=null;function cl(){return Wg=Wg||new de}cs.Ia="serverreachability";function tp(o){I.call(this,cs.Ia,o)}m(tp,I);function ya(o){const c=cl();_e(c,new tp(c))}cs.STAT_EVENT="statevent";function ep(o,c){I.call(this,cs.STAT_EVENT,o),this.stat=c}m(ep,I);function ve(o){const c=cl();_e(c,new ep(c,o))}cs.Ja="timingevent";function np(o,c){I.call(this,cs.Ja,o),this.size=c}m(np,I);function _a(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},c)}function va(){this.g=!0}va.prototype.ua=function(){this.g=!1};function cw(o,c,f,y,N,O){o.info(function(){if(o.g)if(O){var j="",nt=O.split("&");for(let vt=0;vt<nt.length;vt++){var Yt=nt[vt].split("=");if(Yt.length>1){const Zt=Yt[0];Yt=Yt[1];const En=Zt.split("_");j=En.length>=2&&En[1]=="type"?j+(Zt+"="+Yt+"&"):j+(Zt+"=redacted&")}}}else j=null;else j=O;return"XMLHTTP REQ ("+y+") [attempt "+N+"]: "+c+`
`+f+`
`+j})}function hw(o,c,f,y,N,O,j){o.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+N+"]: "+c+`
`+f+`
`+O+" "+j})}function $s(o,c,f,y){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+dw(o,f)+(y?" "+y:"")})}function fw(o,c){o.info(function(){return"TIMEOUT: "+c})}va.prototype.info=function(){};function dw(o,c){if(!o.g)return c;if(!c)return null;try{const O=JSON.parse(c);if(O){for(o=0;o<O.length;o++)if(Array.isArray(O[o])){var f=O[o];if(!(f.length<2)){var y=f[1];if(Array.isArray(y)&&!(y.length<1)){var N=y[0];if(N!="noop"&&N!="stop"&&N!="close")for(let j=1;j<y.length;j++)y[j]=""}}}}return rh(O)}catch{return c}}var hl={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},ip={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},sp;function lh(){}m(lh,Jg),lh.prototype.g=function(){return new XMLHttpRequest},sp=new lh;function Ta(o){return encodeURIComponent(String(o))}function mw(o){var c=1;o=o.split(":");const f=[];for(;c>0&&o.length;)f.push(o.shift()),c--;return o.length&&f.push(o.join(":")),f}function ui(o,c,f,y){this.j=o,this.i=c,this.l=f,this.S=y||1,this.V=new ga(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new rp}function rp(){this.i=null,this.g="",this.h=!1}var ap={},uh={};function ch(o,c,f){o.M=1,o.A=dl(Tn(c)),o.u=f,o.R=!0,op(o,null)}function op(o,c){o.F=Date.now(),fl(o),o.B=Tn(o.A);var f=o.B,y=o.S;Array.isArray(y)||(y=[String(y)]),Tp(f.i,"t",y),o.C=0,f=o.j.L,o.h=new rp,o.g=Pp(o.j,f?c:null,!o.u),o.P>0&&(o.O=new ow(h(o.Y,o,o.g),o.P)),c=o.V,f=o.g,y=o.ba;var N="readystatechange";Array.isArray(N)||(N&&(Xg[0]=N.toString()),N=Xg);for(let O=0;O<N.length;O++){const j=ll(f,N[O],y||c.handleEvent,!1,c.h||c);if(!j)break;c.g[j.key]=j}c=o.J?ke(o.J):{},o.u?(o.v||(o.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,c)):(o.v="GET",o.g.ea(o.B,o.v,null,c)),ya(),cw(o.i,o.v,o.B,o.l,o.S,o.u)}ui.prototype.ba=function(o){o=o.target;const c=this.O;c&&fi(o)==3?c.j():this.Y(o)},ui.prototype.Y=function(o){try{if(o==this.g)t:{const nt=fi(this.g),Yt=this.g.ya(),vt=this.g.ca();if(!(nt<3)&&(nt!=3||this.g&&(this.h.h||this.g.la()||Rp(this.g)))){this.K||nt!=4||Yt==7||(Yt==8||vt<=0?ya(3):ya(2)),hh(this);var c=this.g.ca();this.X=c;var f=gw(this);if(this.o=c==200,hw(this.i,this.v,this.B,this.l,this.S,nt,c),this.o){if(this.U&&!this.L){e:{if(this.g){var y,N=this.g;if((y=N.g?N.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!A(y)){var O=y;break e}}O=null}if(o=O)$s(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,fh(this,o);else{this.o=!1,this.m=3,ve(12),hs(this),Ea(this);break t}}if(this.R){o=!0;let Zt;for(;!this.K&&this.C<f.length;)if(Zt=pw(this,f),Zt==uh){nt==4&&(this.m=4,ve(14),o=!1),$s(this.i,this.l,null,"[Incomplete Response]");break}else if(Zt==ap){this.m=4,ve(15),$s(this.i,this.l,f,"[Invalid Chunk]"),o=!1;break}else $s(this.i,this.l,Zt,null),fh(this,Zt);if(lp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),nt!=4||f.length!=0||this.h.h||(this.m=1,ve(16),o=!1),this.o=this.o&&o,!o)$s(this.i,this.l,f,"[Invalid Chunked Response]"),hs(this),Ea(this);else if(f.length>0&&!this.W){this.W=!0;var j=this.j;j.g==this&&j.aa&&!j.P&&(j.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),Th(j),j.P=!0,ve(11))}}else $s(this.i,this.l,f,null),fh(this,f);nt==4&&hs(this),this.o&&!this.K&&(nt==4?Vp(this.j,this):(this.o=!1,fl(this)))}else Dw(this.g),c==400&&f.indexOf("Unknown SID")>0?(this.m=3,ve(12)):(this.m=0,ve(13)),hs(this),Ea(this)}}}catch{}finally{}};function gw(o){if(!lp(o))return o.g.la();const c=Rp(o.g);if(c==="")return"";let f="";const y=c.length,N=fi(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return hs(o),Ea(o),"";o.h.i=new a.TextDecoder}for(let O=0;O<y;O++)o.h.h=!0,f+=o.h.i.decode(c[O],{stream:!(N&&O==y-1)});return c.length=0,o.h.g+=f,o.C=0,o.h.g}function lp(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function pw(o,c){var f=o.C,y=c.indexOf(`
`,f);return y==-1?uh:(f=Number(c.substring(f,y)),isNaN(f)?ap:(y+=1,y+f>c.length?uh:(c=c.slice(y,y+f),o.C=y+f,c)))}ui.prototype.cancel=function(){this.K=!0,hs(this)};function fl(o){o.T=Date.now()+o.H,up(o,o.H)}function up(o,c){if(o.D!=null)throw Error("WatchDog timer not null");o.D=_a(h(o.aa,o),c)}function hh(o){o.D&&(a.clearTimeout(o.D),o.D=null)}ui.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(fw(this.i,this.B),this.M!=2&&(ya(),ve(17)),hs(this),this.m=2,Ea(this)):up(this,this.T-o)};function Ea(o){o.j.I==0||o.K||Vp(o.j,o)}function hs(o){hh(o);var c=o.O;c&&typeof c.dispose=="function"&&c.dispose(),o.O=null,$g(o.V),o.g&&(c=o.g,o.g=null,c.abort(),c.dispose())}function fh(o,c){try{var f=o.j;if(f.I!=0&&(f.g==o||dh(f.h,o))){if(!o.L&&dh(f.h,o)&&f.I==3){try{var y=f.Ba.g.parse(c)}catch{y=null}if(Array.isArray(y)&&y.length==3){var N=y;if(N[0]==0){t:if(!f.v){if(f.g)if(f.g.F+3e3<o.F)_l(f),pl(f);else break t;vh(f),ve(18)}}else f.xa=N[1],0<f.xa-f.K&&N[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=_a(h(f.Va,f),6e3));fp(f.h)<=1&&f.ta&&(f.ta=void 0)}else ds(f,11)}else if((o.L||f.g==o)&&_l(f),!A(c))for(N=f.Ba.g.parse(c),c=0;c<N.length;c++){let vt=N[c];const Zt=vt[0];if(!(Zt<=f.K))if(f.K=Zt,vt=vt[1],f.I==2)if(vt[0]=="c"){f.M=vt[1],f.ba=vt[2];const En=vt[3];En!=null&&(f.ka=En,f.j.info("VER="+f.ka));const ms=vt[4];ms!=null&&(f.za=ms,f.j.info("SVER="+f.za));const di=vt[5];di!=null&&typeof di=="number"&&di>0&&(y=1.5*di,f.O=y,f.j.info("backChannelRequestTimeoutMs_="+y)),y=f;const mi=o.g;if(mi){const Tl=mi.g?mi.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Tl){var O=y.h;O.g||Tl.indexOf("spdy")==-1&&Tl.indexOf("quic")==-1&&Tl.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(mh(O,O.h),O.h=null))}if(y.G){const Eh=mi.g?mi.g.getResponseHeader("X-HTTP-Session-Id"):null;Eh&&(y.wa=Eh,St(y.J,y.G,Eh))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-o.F,f.j.info("Handshake RTT: "+f.T+"ms")),y=f;var j=o;if(y.na=Up(y,y.L?y.ba:null,y.W),j.L){dp(y.h,j);var nt=j,Yt=y.O;Yt&&(nt.H=Yt),nt.D&&(hh(nt),fl(nt)),y.g=j}else Op(y);f.i.length>0&&yl(f)}else vt[0]!="stop"&&vt[0]!="close"||ds(f,7);else f.I==3&&(vt[0]=="stop"||vt[0]=="close"?vt[0]=="stop"?ds(f,7):_h(f):vt[0]!="noop"&&f.l&&f.l.qa(vt),f.A=0)}}ya(4)}catch{}}var yw=class{constructor(o,c){this.g=o,this.map=c}};function cp(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function hp(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function fp(o){return o.h?1:o.g?o.g.size:0}function dh(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function mh(o,c){o.g?o.g.add(c):o.h=c}function dp(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}cp.prototype.cancel=function(){if(this.i=mp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function mp(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const f of o.g.values())c=c.concat(f.G);return c}return T(o.i)}var gp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function _w(o,c){if(o){o=o.split("&");for(let f=0;f<o.length;f++){const y=o[f].indexOf("=");let N,O=null;y>=0?(N=o[f].substring(0,y),O=o[f].substring(y+1)):N=o[f],c(N,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function ci(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;o instanceof ci?(this.l=o.l,Aa(this,o.j),this.o=o.o,this.g=o.g,ba(this,o.u),this.h=o.h,gh(this,Ep(o.i)),this.m=o.m):o&&(c=String(o).match(gp))?(this.l=!1,Aa(this,c[1]||"",!0),this.o=Sa(c[2]||""),this.g=Sa(c[3]||"",!0),ba(this,c[4]),this.h=Sa(c[5]||"",!0),gh(this,c[6]||"",!0),this.m=Sa(c[7]||"")):(this.l=!1,this.i=new Ia(null,this.l))}ci.prototype.toString=function(){const o=[];var c=this.j;c&&o.push(wa(c,pp,!0),":");var f=this.g;return(f||c=="file")&&(o.push("//"),(c=this.o)&&o.push(wa(c,pp,!0),"@"),o.push(Ta(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&o.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&o.push("/"),o.push(wa(f,f.charAt(0)=="/"?Ew:Tw,!0))),(f=this.i.toString())&&o.push("?",f),(f=this.m)&&o.push("#",wa(f,bw)),o.join("")},ci.prototype.resolve=function(o){const c=Tn(this);let f=!!o.j;f?Aa(c,o.j):f=!!o.o,f?c.o=o.o:f=!!o.g,f?c.g=o.g:f=o.u!=null;var y=o.h;if(f)ba(c,o.u);else if(f=!!o.h){if(y.charAt(0)!="/")if(this.g&&!this.h)y="/"+y;else{var N=c.h.lastIndexOf("/");N!=-1&&(y=c.h.slice(0,N+1)+y)}if(N=y,N==".."||N==".")y="";else if(N.indexOf("./")!=-1||N.indexOf("/.")!=-1){y=N.lastIndexOf("/",0)==0,N=N.split("/");const O=[];for(let j=0;j<N.length;){const nt=N[j++];nt=="."?y&&j==N.length&&O.push(""):nt==".."?((O.length>1||O.length==1&&O[0]!="")&&O.pop(),y&&j==N.length&&O.push("")):(O.push(nt),y=!0)}y=O.join("/")}else y=N}return f?c.h=y:f=o.i.toString()!=="",f?gh(c,Ep(o.i)):f=!!o.m,f&&(c.m=o.m),c};function Tn(o){return new ci(o)}function Aa(o,c,f){o.j=f?Sa(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function ba(o,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);o.u=c}else o.u=null}function gh(o,c,f){c instanceof Ia?(o.i=c,Sw(o.i,o.l)):(f||(c=wa(c,Aw)),o.i=new Ia(c,o.l))}function St(o,c,f){o.i.set(c,f)}function dl(o){return St(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function Sa(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function wa(o,c,f){return typeof o=="string"?(o=encodeURI(o).replace(c,vw),f&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function vw(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var pp=/[#\/\?@]/g,Tw=/[#\?:]/g,Ew=/[#\?]/g,Aw=/[#\?@]/g,bw=/#/g;function Ia(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function fs(o){o.g||(o.g=new Map,o.h=0,o.i&&_w(o.i,function(c,f){o.add(decodeURIComponent(c.replace(/\+/g," ")),f)}))}e=Ia.prototype,e.add=function(o,c){fs(this),this.i=null,o=Js(this,o);let f=this.g.get(o);return f||this.g.set(o,f=[]),f.push(c),this.h+=1,this};function yp(o,c){fs(o),c=Js(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function _p(o,c){return fs(o),c=Js(o,c),o.g.has(c)}e.forEach=function(o,c){fs(this),this.g.forEach(function(f,y){f.forEach(function(N){o.call(c,N,y,this)},this)},this)};function vp(o,c){fs(o);let f=[];if(typeof c=="string")_p(o,c)&&(f=f.concat(o.g.get(Js(o,c))));else for(o=Array.from(o.g.values()),c=0;c<o.length;c++)f=f.concat(o[c]);return f}e.set=function(o,c){return fs(this),this.i=null,o=Js(this,o),_p(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},e.get=function(o,c){return o?(o=vp(this,o),o.length>0?String(o[0]):c):c};function Tp(o,c,f){yp(o,c),f.length>0&&(o.i=null,o.g.set(Js(o,c),T(f)),o.h+=f.length)}e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(let y=0;y<c.length;y++){var f=c[y];const N=Ta(f);f=vp(this,f);for(let O=0;O<f.length;O++){let j=N;f[O]!==""&&(j+="="+Ta(f[O])),o.push(j)}}return this.i=o.join("&")};function Ep(o){const c=new Ia;return c.i=o.i,o.g&&(c.g=new Map(o.g),c.h=o.h),c}function Js(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function Sw(o,c){c&&!o.j&&(fs(o),o.i=null,o.g.forEach(function(f,y){const N=y.toLowerCase();y!=N&&(yp(this,y),Tp(this,N,f))},o)),o.j=c}function ww(o,c){const f=new va;if(a.Image){const y=new Image;y.onload=d(hi,f,"TestLoadImage: loaded",!0,c,y),y.onerror=d(hi,f,"TestLoadImage: error",!1,c,y),y.onabort=d(hi,f,"TestLoadImage: abort",!1,c,y),y.ontimeout=d(hi,f,"TestLoadImage: timeout",!1,c,y),a.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=o}else c(!1)}function Iw(o,c){const f=new va,y=new AbortController,N=setTimeout(()=>{y.abort(),hi(f,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:y.signal}).then(O=>{clearTimeout(N),O.ok?hi(f,"TestPingServer: ok",!0,c):hi(f,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(N),hi(f,"TestPingServer: error",!1,c)})}function hi(o,c,f,y,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),y(f)}catch{}}function Rw(){this.g=new uw}function ph(o){this.i=o.Sb||null,this.h=o.ab||!1}m(ph,Jg),ph.prototype.g=function(){return new ml(this.i,this.h)};function ml(o,c){de.call(this),this.H=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}m(ml,de),e=ml.prototype,e.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=c,this.readyState=1,Ca(this)},e.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(c.body=o),(this.H||a).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Ra(this)),this.readyState=0},e.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Ca(this)),this.g&&(this.readyState=3,Ca(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Ap(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function Ap(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}e.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?Ra(this):Ca(this),this.readyState==3&&Ap(this)}},e.Oa=function(o){this.g&&(this.response=this.responseText=o,Ra(this))},e.Na=function(o){this.g&&(this.response=o,Ra(this))},e.ga=function(){this.g&&Ra(this)};function Ra(o){o.readyState=4,o.l=null,o.j=null,o.B=null,Ca(o)}e.setRequestHeader=function(o,c){this.A.append(o,c)},e.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var f=c.next();!f.done;)f=f.value,o.push(f[0]+": "+f[1]),f=c.next();return o.join(`\r
`)};function Ca(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(ml.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function bp(o){let c="";return K(o,function(f,y){c+=y,c+=":",c+=f,c+=`\r
`}),c}function yh(o,c,f){t:{for(y in f){var y=!1;break t}y=!0}y||(f=bp(f),typeof o=="string"?f!=null&&Ta(f):St(o,c,f))}function Ot(o){de.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}m(Ot,de);var Cw=/^https?$/i,Nw=["POST","PUT"];e=Ot.prototype,e.Fa=function(o){this.H=o},e.ea=function(o,c,f,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():sp.g(),this.g.onreadystatechange=g(h(this.Ca,this));try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(O){Sp(this,O);return}if(o=f||"",f=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var N in y)f.set(N,y[N]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const O of y.keys())f.set(O,y.get(O));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(f.keys()).find(O=>O.toLowerCase()=="content-type"),N=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(Nw,c,void 0)>=0)||y||N||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,j]of f)this.g.setRequestHeader(O,j);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(O){Sp(this,O)}};function Sp(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.o=5,wp(o),gl(o)}function wp(o){o.A||(o.A=!0,_e(o,"complete"),_e(o,"error"))}e.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,_e(this,"complete"),_e(this,"abort"),gl(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),gl(this,!0)),Ot.Z.N.call(this)},e.Ca=function(){this.u||(this.B||this.v||this.j?Ip(this):this.Xa())},e.Xa=function(){Ip(this)};function Ip(o){if(o.h&&typeof r<"u"){if(o.v&&fi(o)==4)setTimeout(o.Ca.bind(o),0);else if(_e(o,"readystatechange"),fi(o)==4){o.h=!1;try{const O=o.ca();t:switch(O){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break t;default:c=!1}var f;if(!(f=c)){var y;if(y=O===0){let j=String(o.D).match(gp)[1]||null;!j&&a.self&&a.self.location&&(j=a.self.location.protocol.slice(0,-1)),y=!Cw.test(j?j.toLowerCase():"")}f=y}if(f)_e(o,"complete"),_e(o,"success");else{o.o=6;try{var N=fi(o)>2?o.g.statusText:""}catch{N=""}o.l=N+" ["+o.ca()+"]",wp(o)}}finally{gl(o)}}}}function gl(o,c){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const f=o.g;o.g=null,c||_e(o,"ready");try{f.onreadystatechange=null}catch{}}}e.isActive=function(){return!!this.g};function fi(o){return o.g?o.g.readyState:0}e.ca=function(){try{return fi(this)>2?this.g.status:-1}catch{return-1}},e.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},e.La=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),lw(c)}};function Rp(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Dw(o){const c={};o=(o.g&&fi(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<o.length;y++){if(A(o[y]))continue;var f=mw(o[y]);const N=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const O=c[N]||[];c[N]=O,O.push(f)}rt(c,function(y){return y.join(", ")})}e.ya=function(){return this.o},e.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Na(o,c,f){return f&&f.internalChannelParams&&f.internalChannelParams[o]||c}function Cp(o){this.za=0,this.i=[],this.j=new va,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Na("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Na("baseRetryDelayMs",5e3,o),this.Za=Na("retryDelaySeedMs",1e4,o),this.Ta=Na("forwardChannelMaxRetries",2,o),this.va=Na("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new cp(o&&o.concurrentRequestLimit),this.Ba=new Rw,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}e=Cp.prototype,e.ka=8,e.I=1,e.connect=function(o,c,f,y){ve(0),this.W=o,this.H=c||{},f&&y!==void 0&&(this.H.OSID=f,this.H.OAID=y),this.F=this.X,this.J=Up(this,null,this.W),yl(this)};function _h(o){if(Np(o),o.I==3){var c=o.V++,f=Tn(o.J);if(St(f,"SID",o.M),St(f,"RID",c),St(f,"TYPE","terminate"),Da(o,f),c=new ui(o,o.j,c),c.M=2,c.A=dl(Tn(f)),f=!1,a.navigator&&a.navigator.sendBeacon)try{f=a.navigator.sendBeacon(c.A.toString(),"")}catch{}!f&&a.Image&&(new Image().src=c.A,f=!0),f||(c.g=Pp(c.j,null),c.g.ea(c.A)),c.F=Date.now(),fl(c)}Lp(o)}function pl(o){o.g&&(Th(o),o.g.cancel(),o.g=null)}function Np(o){pl(o),o.v&&(a.clearTimeout(o.v),o.v=null),_l(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function yl(o){if(!hp(o.h)&&!o.m){o.m=!0;var c=o.Ea;z||p(),G||(z(),G=!0),v.add(c,o),o.D=0}}function xw(o,c){return fp(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=c.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=_a(h(o.Ea,o,c),kp(o,o.D)),o.D++,!0)}e.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const N=new ui(this,this.j,o);let O=this.o;if(this.U&&(O?(O=ke(O),fe(O,this.U)):O=this.U),this.u!==null||this.R||(N.J=O,O=null),this.S)t:{for(var c=0,f=0;f<this.i.length;f++){e:{var y=this.i[f];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break e}y=void 0}if(y===void 0)break;if(c+=y,c>4096){c=f;break t}if(c===4096||f===this.i.length-1){c=f+1;break t}}c=1e3}else c=1e3;c=xp(this,N,c),f=Tn(this.J),St(f,"RID",o),St(f,"CVER",22),this.G&&St(f,"X-HTTP-Session-Id",this.G),Da(this,f),O&&(this.R?c="headers="+Ta(bp(O))+"&"+c:this.u&&yh(f,this.u,O)),mh(this.h,N),this.Ra&&St(f,"TYPE","init"),this.S?(St(f,"$req",c),St(f,"SID","null"),N.U=!0,ch(N,f,null)):ch(N,f,c),this.I=2}}else this.I==3&&(o?Dp(this,o):this.i.length==0||hp(this.h)||Dp(this))};function Dp(o,c){var f;c?f=c.l:f=o.V++;const y=Tn(o.J);St(y,"SID",o.M),St(y,"RID",f),St(y,"AID",o.K),Da(o,y),o.u&&o.o&&yh(y,o.u,o.o),f=new ui(o,o.j,f,o.D+1),o.u===null&&(f.J=o.o),c&&(o.i=c.G.concat(o.i)),c=xp(o,f,1e3),f.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),mh(o.h,f),ch(f,y,c)}function Da(o,c){o.H&&K(o.H,function(f,y){St(c,y,f)}),o.l&&K({},function(f,y){St(c,y,f)})}function xp(o,c,f){f=Math.min(o.i.length,f);const y=o.l?h(o.l.Ka,o.l,o):null;t:{var N=o.i;let nt=-1;for(;;){const Yt=["count="+f];nt==-1?f>0?(nt=N[0].g,Yt.push("ofs="+nt)):nt=0:Yt.push("ofs="+nt);let vt=!0;for(let Zt=0;Zt<f;Zt++){var O=N[Zt].g;const En=N[Zt].map;if(O-=nt,O<0)nt=Math.max(0,N[Zt].g-100),vt=!1;else try{O="req"+O+"_"||"";try{var j=En instanceof Map?En:Object.entries(En);for(const[ms,di]of j){let mi=di;l(di)&&(mi=rh(di)),Yt.push(O+ms+"="+encodeURIComponent(mi))}}catch(ms){throw Yt.push(O+"type="+encodeURIComponent("_badmap")),ms}}catch{y&&y(En)}}if(vt){j=Yt.join("&");break t}}j=void 0}return o=o.i.splice(0,f),c.G=o,j}function Op(o){if(!o.g&&!o.v){o.Y=1;var c=o.Da;z||p(),G||(z(),G=!0),v.add(c,o),o.A=0}}function vh(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=_a(h(o.Da,o),kp(o,o.A)),o.A++,!0)}e.Da=function(){if(this.v=null,Mp(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=_a(h(this.Wa,this),o)}},e.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,ve(10),pl(this),Mp(this))};function Th(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function Mp(o){o.g=new ui(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var c=Tn(o.na);St(c,"RID","rpc"),St(c,"SID",o.M),St(c,"AID",o.K),St(c,"CI",o.F?"0":"1"),!o.F&&o.ia&&St(c,"TO",o.ia),St(c,"TYPE","xmlhttp"),Da(o,c),o.u&&o.o&&yh(c,o.u,o.o),o.O&&(o.g.H=o.O);var f=o.g;o=o.ba,f.M=1,f.A=dl(Tn(c)),f.u=null,f.R=!0,op(f,o)}e.Va=function(){this.C!=null&&(this.C=null,pl(this),vh(this),ve(19))};function _l(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function Vp(o,c){var f=null;if(o.g==c){_l(o),Th(o),o.g=null;var y=2}else if(dh(o.h,c))f=c.G,dp(o.h,c),y=1;else return;if(o.I!=0){if(c.o)if(y==1){f=c.u?c.u.length:0,c=Date.now()-c.F;var N=o.D;y=cl(),_e(y,new np(y,f)),yl(o)}else Op(o);else if(N=c.m,N==3||N==0&&c.X>0||!(y==1&&xw(o,c)||y==2&&vh(o)))switch(f&&f.length>0&&(c=o.h,c.i=c.i.concat(f)),N){case 1:ds(o,5);break;case 4:ds(o,10);break;case 3:ds(o,6);break;default:ds(o,2)}}}function kp(o,c){let f=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(f*=2),f*c}function ds(o,c){if(o.j.info("Error code "+c),c==2){var f=h(o.bb,o),y=o.Ua;const N=!y;y=new ci(y||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Aa(y,"https"),dl(y),N?ww(y.toString(),f):Iw(y.toString(),f)}else ve(2);o.I=0,o.l&&o.l.pa(c),Lp(o),Np(o)}e.bb=function(o){o?(this.j.info("Successfully pinged google.com"),ve(2)):(this.j.info("Failed to ping google.com"),ve(1))};function Lp(o){if(o.I=0,o.ja=[],o.l){const c=mp(o.h);(c.length!=0||o.i.length!=0)&&(D(o.ja,c),D(o.ja,o.i),o.h.i.length=0,T(o.i),o.i.length=0),o.l.oa()}}function Up(o,c,f){var y=f instanceof ci?Tn(f):new ci(f);if(y.g!="")c&&(y.g=c+"."+y.g),ba(y,y.u);else{var N=a.location;y=N.protocol,c=c?c+"."+N.hostname:N.hostname,N=+N.port;const O=new ci(null);y&&Aa(O,y),c&&(O.g=c),N&&ba(O,N),f&&(O.h=f),y=O}return f=o.G,c=o.wa,f&&c&&St(y,f,c),St(y,"VER",o.ka),Da(o,y),y}function Pp(o,c,f){if(c&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Aa&&!o.ma?new Ot(new ph({ab:f})):new Ot(o.ma),c.Fa(o.L),c}e.isActive=function(){return!!this.l&&this.l.isActive(this)};function zp(){}e=zp.prototype,e.ra=function(){},e.qa=function(){},e.pa=function(){},e.oa=function(){},e.isActive=function(){return!0},e.Ka=function(){};function vl(){}vl.prototype.g=function(o,c){return new Ue(o,c)};function Ue(o,c){de.call(this),this.g=new Cp(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(o?o["X-WebChannel-Client-Profile"]=c.sa:o={"X-WebChannel-Client-Profile":c.sa}),this.g.U=o,(o=c&&c.Qb)&&!A(o)&&(this.g.u=o),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!A(c)&&(this.g.G=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new Zs(this)}m(Ue,de),Ue.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Ue.prototype.close=function(){_h(this.g)},Ue.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var f={};f.__data__=o,o=f}else this.v&&(f={},f.__data__=rh(o),o=f);c.i.push(new yw(c.Ya++,o)),c.I==3&&yl(c)},Ue.prototype.N=function(){this.g.l=null,delete this.j,_h(this.g),delete this.g,Ue.Z.N.call(this)};function jp(o){ah.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){t:{for(const f in c){o=f;break t}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}m(jp,ah);function Bp(){oh.call(this),this.status=1}m(Bp,oh);function Zs(o){this.g=o}m(Zs,zp),Zs.prototype.ra=function(){_e(this.g,"a")},Zs.prototype.qa=function(o){_e(this.g,new jp(o))},Zs.prototype.pa=function(o){_e(this.g,new Bp)},Zs.prototype.oa=function(){_e(this.g,"b")},vl.prototype.createWebChannel=vl.prototype.g,Ue.prototype.send=Ue.prototype.o,Ue.prototype.open=Ue.prototype.m,Ue.prototype.close=Ue.prototype.close,Db=function(){return new vl},Nb=function(){return cl()},Cb=cs,xd={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},hl.NO_ERROR=0,hl.TIMEOUT=8,hl.HTTP_ERROR=6,uu=hl,ip.COMPLETE="complete",Rb=ip,Zg.EventType=pa,pa.OPEN="a",pa.CLOSE="b",pa.ERROR="c",pa.MESSAGE="d",de.prototype.listen=de.prototype.J,Ga=Zg,Ot.prototype.listenOnce=Ot.prototype.K,Ot.prototype.getLastError=Ot.prototype.Ha,Ot.prototype.getLastErrorCode=Ot.prototype.ya,Ot.prototype.getStatus=Ot.prototype.ca,Ot.prototype.getResponseJson=Ot.prototype.La,Ot.prototype.getResponseText=Ot.prototype.la,Ot.prototype.send=Ot.prototype.ea,Ot.prototype.setWithCredentials=Ot.prototype.Fa,Ib=Ot}).apply(typeof Pl<"u"?Pl:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class ge{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}ge.UNAUTHENTICATED=new ge(null),ge.GOOGLE_CREDENTIALS=new ge("google-credentials-uid"),ge.FIRST_PARTY=new ge("first-party-uid"),ge.MOCK_USER=new ge("mock-user");/**
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
 */let ua="12.12.0";function yO(e){ua=e}/**
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
 */const Ps=new Oc("@firebase/firestore");function sr(){return Ps.logLevel}function H(e,...t){if(Ps.logLevel<=at.DEBUG){const n=t.map(cg);Ps.debug(`Firestore (${ua}): ${e}`,...n)}}function ri(e,...t){if(Ps.logLevel<=at.ERROR){const n=t.map(cg);Ps.error(`Firestore (${ua}): ${e}`,...n)}}function zs(e,...t){if(Ps.logLevel<=at.WARN){const n=t.map(cg);Ps.warn(`Firestore (${ua}): ${e}`,...n)}}function cg(e){if(typeof e=="string")return e;try{return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
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
 */function Y(e,t,n){let i="Unexpected state";typeof t=="string"?i=t:n=t,xb(e,i,n)}function xb(e,t,n){let i=`FIRESTORE (${ua}) INTERNAL ASSERTION FAILED: ${t} (ID: ${e.toString(16)})`;if(n!==void 0)try{i+=" CONTEXT: "+JSON.stringify(n)}catch{i+=" CONTEXT: "+n}throw ri(i),new Error(i)}function mt(e,t,n,i){let s="Unexpected state";typeof n=="string"?s=n:i=n,e||xb(t,s,i)}function Z(e,t){return e}/**
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
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends vn{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Cs{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class Ob{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class _O{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(ge.UNAUTHENTICATED))}shutdown(){}}class vO{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class TO{constructor(t){this.t=t,this.currentUser=ge.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){mt(this.o===void 0,42304);let i=this.i;const s=u=>this.i!==i?(i=this.i,n(u)):Promise.resolve();let r=new Cs;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Cs,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const u=r;t.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Cs)}},0),a()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==t?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(mt(typeof i.accessToken=="string",31837,{l:i}),new Ob(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return mt(t===null||typeof t=="string",2055,{h:t}),new ge(t)}}class EO{constructor(t,n,i){this.P=t,this.T=n,this.I=i,this.type="FirstParty",this.user=ge.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const t=this.A();return t&&this.R.set("Authorization",t),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class AO{constructor(t,n,i){this.P=t,this.T=n,this.I=i}getToken(){return Promise.resolve(new EO(this.P,this.T,this.I))}start(t,n){t.enqueueRetryable(()=>n(ge.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class nv{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class bO{constructor(t,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,dn(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,n){mt(this.o===void 0,3512);const i=r=>{r.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const a=r.token!==this.m;return this.m=r.token,H("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(r.token):Promise.resolve()};this.o=r=>{t.enqueueRetryable(()=>i(r))};const s=r=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(r=>s(r)),setTimeout(()=>{if(!this.appCheck){const r=this.V.getImmediate({optional:!0});r?s(r):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new nv(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(mt(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new nv(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function SO(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let i=0;i<e;i++)n[i]=Math.floor(256*Math.random());return n}/**
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
 */class hg{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const s=SO(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<n&&(i+=t.charAt(s[r]%62))}return i}}function ot(e,t){return e<t?-1:e>t?1:0}function Od(e,t){const n=Math.min(e.length,t.length);for(let i=0;i<n;i++){const s=e.charAt(i),r=t.charAt(i);if(s!==r)return yf(s)===yf(r)?ot(s,r):yf(s)?1:-1}return ot(e.length,t.length)}const wO=55296,IO=57343;function yf(e){const t=e.charCodeAt(0);return t>=wO&&t<=IO}function Kr(e,t,n){return e.length===t.length&&e.every((i,s)=>n(i,t[s]))}/**
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
 */const iv="__name__";class An{constructor(t,n,i){n===void 0?n=0:n>t.length&&Y(637,{offset:n,range:t.length}),i===void 0?i=t.length-n:i>t.length-n&&Y(1746,{length:i,range:t.length-n}),this.segments=t,this.offset=n,this.len=i}get length(){return this.len}isEqual(t){return An.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof An?t.forEach(i=>{n.push(i)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,i=this.limit();n<i;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const i=Math.min(t.length,n.length);for(let s=0;s<i;s++){const r=An.compareSegments(t.get(s),n.get(s));if(r!==0)return r}return ot(t.length,n.length)}static compareSegments(t,n){const i=An.isNumericId(t),s=An.isNumericId(n);return i&&!s?-1:!i&&s?1:i&&s?An.extractNumericId(t).compare(An.extractNumericId(n)):Od(t,n)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Gi.fromString(t.substring(4,t.length-2))}}class Et extends An{construct(t,n,i){return new Et(t,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const i of t){if(i.indexOf("//")>=0)throw new q(L.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(s=>s.length>0))}return new Et(n)}static emptyPath(){return new Et([])}}const RO=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class oe extends An{construct(t,n,i){return new oe(t,n,i)}static isValidIdentifier(t){return RO.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),oe.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===iv}static keyField(){return new oe([iv])}static fromServerFormat(t){const n=[];let i="",s=0;const r=()=>{if(i.length===0)throw new q(L.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let a=!1;for(;s<t.length;){const l=t[s];if(l==="\\"){if(s+1===t.length)throw new q(L.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new q(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);i+=u,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(i+=l,s++):(r(),s++)}if(r(),a)throw new q(L.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new oe(n)}static emptyPath(){return new oe([])}}/**
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
 */class Q{constructor(t){this.path=t}static fromPath(t){return new Q(Et.fromString(t))}static fromName(t){return new Q(Et.fromString(t).popFirst(5))}static empty(){return new Q(Et.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Et.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return Et.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Q(new Et(t.slice()))}}/**
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
 */function Mb(e,t,n){if(!n)throw new q(L.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function CO(e,t,n,i){if(t===!0&&i===!0)throw new q(L.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function sv(e){if(!Q.isDocumentKey(e))throw new q(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function rv(e){if(Q.isDocumentKey(e))throw new q(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Vb(e){return typeof e=="object"&&e!==null&&(Object.getPrototypeOf(e)===Object.prototype||Object.getPrototypeOf(e)===null)}function zc(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(i){return i.constructor?i.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":Y(12329,{type:typeof e})}function Ki(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new q(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=zc(e);throw new q(L.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */function Kt(e,t){const n={typeString:e};return t&&(n.value=t),n}function el(e,t){if(!Vb(e))throw new q(L.INVALID_ARGUMENT,"JSON must be an object");let n;for(const i in t)if(t[i]){const s=t[i].typeString,r="value"in t[i]?{value:t[i].value}:void 0;if(!(i in e)){n=`JSON missing required field: '${i}'`;break}const a=e[i];if(s&&typeof a!==s){n=`JSON field '${i}' must be a ${s}.`;break}if(r!==void 0&&a!==r.value){n=`Expected '${i}' field to equal '${r.value}'`;break}}if(n)throw new q(L.INVALID_ARGUMENT,n);return!0}/**
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
 */const av=-62135596800,ov=1e6;class Rt{static now(){return Rt.fromMillis(Date.now())}static fromDate(t){return Rt.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),i=Math.floor((t-1e3*n)*ov);return new Rt(n,i)}constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new q(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new q(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<av)throw new q(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new q(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ov}_compareTo(t){return this.seconds===t.seconds?ot(this.nanoseconds,t.nanoseconds):ot(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Rt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(el(t,Rt._jsonSchema))return new Rt(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-av;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Rt._jsonSchemaVersion="firestore/timestamp/1.0",Rt._jsonSchema={type:Kt("string",Rt._jsonSchemaVersion),seconds:Kt("number"),nanoseconds:Kt("number")};/**
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
 */class J{static fromTimestamp(t){return new J(t)}static min(){return new J(new Rt(0,0))}static max(){return new J(new Rt(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Oo=-1;function NO(e,t){const n=e.toTimestamp().seconds,i=e.toTimestamp().nanoseconds+1,s=J.fromTimestamp(i===1e9?new Rt(n+1,0):new Rt(n,i));return new ts(s,Q.empty(),t)}function DO(e){return new ts(e.readTime,e.key,Oo)}class ts{constructor(t,n,i){this.readTime=t,this.documentKey=n,this.largestBatchId=i}static min(){return new ts(J.min(),Q.empty(),Oo)}static max(){return new ts(J.max(),Q.empty(),Oo)}}function xO(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=Q.comparator(e.documentKey,t.documentKey),n!==0?n:ot(e.largestBatchId,t.largestBatchId))}/**
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
 */const OO="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class MO{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function ca(e){if(e.code!==L.FAILED_PRECONDITION||e.message!==OO)throw e;H("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class U{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&Y(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new U((i,s)=>{this.nextCallback=r=>{this.wrapSuccess(t,r).next(i,s)},this.catchCallback=r=>{this.wrapFailure(n,r).next(i,s)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof U?n:U.resolve(n)}catch(n){return U.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):U.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):U.reject(n)}static resolve(t){return new U((n,i)=>{n(t)})}static reject(t){return new U((n,i)=>{i(t)})}static waitFor(t){return new U((n,i)=>{let s=0,r=0,a=!1;t.forEach(l=>{++s,l.next(()=>{++r,a&&r===s&&n()},u=>i(u))}),a=!0,r===s&&n()})}static or(t){let n=U.resolve(!1);for(const i of t)n=n.next(s=>s?U.resolve(s):i());return n}static forEach(t,n){const i=[];return t.forEach((s,r)=>{i.push(n.call(this,s,r))}),this.waitFor(i)}static mapArray(t,n){return new U((i,s)=>{const r=t.length,a=new Array(r);let l=0;for(let u=0;u<r;u++){const h=u;n(t[h]).next(d=>{a[h]=d,++l,l===r&&i(a)},d=>s(d))}})}static doWhile(t,n){return new U((i,s)=>{const r=()=>{t()===!0?n().next(()=>{r()},s):i()};r()})}}function VO(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ha(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class jc{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=i=>this.ae(i),this.ue=i=>n.writeSequenceNumber(i))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}jc.ce=-1;/**
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
 */const fg=-1;function Bc(e){return e==null}function tc(e){return e===0&&1/e==-1/0}function kO(e){return typeof e=="number"&&Number.isInteger(e)&&!tc(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
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
 */const kb="";function LO(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=lv(t)),t=UO(e.get(n),t);return lv(t)}function UO(e,t){let n=t;const i=e.length;for(let s=0;s<i;s++){const r=e.charAt(s);switch(r){case"\0":n+="";break;case kb:n+="";break;default:n+=r}}return n}function lv(e){return e+kb+""}/**
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
 */function uv(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function ls(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Lb(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
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
 */class xt{constructor(t,n){this.comparator=t,this.root=n||se.EMPTY}insert(t,n){return new xt(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,se.BLACK,null,null))}remove(t){return new xt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,se.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(t){let n=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(t,i.key);if(s===0)return n+i.left.size;s<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,i)=>(t(n,i),!1))}toString(){const t=[];return this.inorderTraversal((n,i)=>(t.push(`${n}:${i}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new zl(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new zl(this.root,t,this.comparator,!1)}getReverseIterator(){return new zl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new zl(this.root,t,this.comparator,!0)}}class zl{constructor(t,n,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=n?i(t.key,n):1,n&&s&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(r===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class se{constructor(t,n,i,s,r){this.key=t,this.value=n,this.color=i??se.RED,this.left=s??se.EMPTY,this.right=r??se.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,i,s,r){return new se(t??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,i){let s=this;const r=i(t,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(t,n,i),null):r===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(t,n,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return se.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let i,s=this;if(n(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(t,s.key)===0){if(s.right.isEmpty())return se.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,se.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,se.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Y(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Y(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw Y(27949);return t+(this.isRed()?0:1)}}se.EMPTY=null,se.RED=!0,se.BLACK=!1;se.EMPTY=new class{constructor(){this.size=0}get key(){throw Y(57766)}get value(){throw Y(16141)}get color(){throw Y(16727)}get left(){throw Y(29726)}get right(){throw Y(36894)}copy(t,n,i,s,r){return this}insert(t,n,i){return new se(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class $t{constructor(t){this.comparator=t,this.data=new xt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,i)=>(t(n),!1))}forEachInRange(t,n){const i=this.data.getIteratorFrom(t[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,t[1])>=0)return;n(s.key)}}forEachWhile(t,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!t(i.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new cv(this.data.getIterator())}getIteratorFrom(t){return new cv(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(i=>{n=n.add(i)}),n}isEqual(t){if(!(t instanceof $t)||this.size!==t.size)return!1;const n=this.data.getIterator(),i=t.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new $t(this.comparator);return n.data=t,n}}class cv{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class qe{constructor(t){this.fields=t,t.sort(oe.comparator)}static empty(){return new qe([])}unionWith(t){let n=new $t(oe.comparator);for(const i of this.fields)n=n.add(i);for(const i of t)n=n.add(i);return new qe(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Kr(this.fields,t.fields,(n,i)=>n.isEqual(i))}}/**
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
 */class Ub extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ce{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new Ub("Invalid base64 string: "+r):r}}(t);return new ce(n)}static fromUint8Array(t){const n=function(s){let r="";for(let a=0;a<s.length;++a)r+=String.fromCharCode(s[a]);return r}(t);return new ce(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const i=new Uint8Array(n.length);for(let s=0;s<n.length;s++)i[s]=n.charCodeAt(s);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return ot(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ce.EMPTY_BYTE_STRING=new ce("");const PO=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function es(e){if(mt(!!e,39018),typeof e=="string"){let t=0;const n=PO.exec(e);if(mt(!!n,46558,{timestamp:e}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),t=Number(s)}const i=new Date(e);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:kt(e.seconds),nanos:kt(e.nanos)}}function kt(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function ns(e){return typeof e=="string"?ce.fromBase64String(e):ce.fromUint8Array(e)}/**
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
 */const Pb="server_timestamp",zb="__type__",jb="__previous_value__",Bb="__local_write_time__";function dg(e){var n,i;return((i=(((n=e==null?void 0:e.mapValue)==null?void 0:n.fields)||{})[zb])==null?void 0:i.stringValue)===Pb}function qc(e){const t=e.mapValue.fields[jb];return dg(t)?qc(t):t}function Mo(e){const t=es(e.mapValue.fields[Bb].timestampValue);return new Rt(t.seconds,t.nanos)}/**
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
 */class zO{constructor(t,n,i,s,r,a,l,u,h,d,m){this.databaseId=t,this.appId=n,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=d,this.apiKey=m}}const ec="(default)";class Vo{constructor(t,n){this.projectId=t,this.database=n||ec}static empty(){return new Vo("","")}get isDefaultDatabase(){return this.database===ec}isEqual(t){return t instanceof Vo&&t.projectId===this.projectId&&t.database===this.database}}function jO(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new q(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Vo(e.options.projectId,t)}/**
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
 */const qb="__type__",BO="__max__",jl={mapValue:{}},Hb="__vector__",nc="value";function is(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?dg(e)?4:HO(e)?9007199254740991:qO(e)?10:11:Y(28295,{value:e})}function Mn(e,t){if(e===t)return!0;const n=is(e);if(n!==is(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Mo(e).isEqual(Mo(t));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const a=es(s.timestampValue),l=es(r.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,r){return ns(s.bytesValue).isEqual(ns(r.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,r){return kt(s.geoPointValue.latitude)===kt(r.geoPointValue.latitude)&&kt(s.geoPointValue.longitude)===kt(r.geoPointValue.longitude)}(e,t);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return kt(s.integerValue)===kt(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const a=kt(s.doubleValue),l=kt(r.doubleValue);return a===l?tc(a)===tc(l):isNaN(a)&&isNaN(l)}return!1}(e,t);case 9:return Kr(e.arrayValue.values||[],t.arrayValue.values||[],Mn);case 10:case 11:return function(s,r){const a=s.mapValue.fields||{},l=r.mapValue.fields||{};if(uv(a)!==uv(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!Mn(a[u],l[u])))return!1;return!0}(e,t);default:return Y(52216,{left:e})}}function ko(e,t){return(e.values||[]).find(n=>Mn(n,t))!==void 0}function Qr(e,t){if(e===t)return 0;const n=is(e),i=is(t);if(n!==i)return ot(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return ot(e.booleanValue,t.booleanValue);case 2:return function(r,a){const l=kt(r.integerValue||r.doubleValue),u=kt(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(e,t);case 3:return hv(e.timestampValue,t.timestampValue);case 4:return hv(Mo(e),Mo(t));case 5:return Od(e.stringValue,t.stringValue);case 6:return function(r,a){const l=ns(r),u=ns(a);return l.compareTo(u)}(e.bytesValue,t.bytesValue);case 7:return function(r,a){const l=r.split("/"),u=a.split("/");for(let h=0;h<l.length&&h<u.length;h++){const d=ot(l[h],u[h]);if(d!==0)return d}return ot(l.length,u.length)}(e.referenceValue,t.referenceValue);case 8:return function(r,a){const l=ot(kt(r.latitude),kt(a.latitude));return l!==0?l:ot(kt(r.longitude),kt(a.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return fv(e.arrayValue,t.arrayValue);case 10:return function(r,a){var g,T,D,V;const l=r.fields||{},u=a.fields||{},h=(g=l[nc])==null?void 0:g.arrayValue,d=(T=u[nc])==null?void 0:T.arrayValue,m=ot(((D=h==null?void 0:h.values)==null?void 0:D.length)||0,((V=d==null?void 0:d.values)==null?void 0:V.length)||0);return m!==0?m:fv(h,d)}(e.mapValue,t.mapValue);case 11:return function(r,a){if(r===jl.mapValue&&a===jl.mapValue)return 0;if(r===jl.mapValue)return 1;if(a===jl.mapValue)return-1;const l=r.fields||{},u=Object.keys(l),h=a.fields||{},d=Object.keys(h);u.sort(),d.sort();for(let m=0;m<u.length&&m<d.length;++m){const g=Od(u[m],d[m]);if(g!==0)return g;const T=Qr(l[u[m]],h[d[m]]);if(T!==0)return T}return ot(u.length,d.length)}(e.mapValue,t.mapValue);default:throw Y(23264,{he:n})}}function hv(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return ot(e,t);const n=es(e),i=es(t),s=ot(n.seconds,i.seconds);return s!==0?s:ot(n.nanos,i.nanos)}function fv(e,t){const n=e.values||[],i=t.values||[];for(let s=0;s<n.length&&s<i.length;++s){const r=Qr(n[s],i[s]);if(r)return r}return ot(n.length,i.length)}function Yr(e){return Md(e)}function Md(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const i=es(n);return`time(${i.seconds},${i.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return ns(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return Q.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let i="[",s=!0;for(const r of n.values||[])s?s=!1:i+=",",i+=Md(r);return i+"]"}(e.arrayValue):"mapValue"in e?function(n){const i=Object.keys(n.fields||{}).sort();let s="{",r=!0;for(const a of i)r?r=!1:s+=",",s+=`${a}:${Md(n.fields[a])}`;return s+"}"}(e.mapValue):Y(61005,{value:e})}function cu(e){switch(is(e)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=qc(e);return t?16+cu(t):16;case 5:return 2*e.stringValue.length;case 6:return ns(e.bytesValue).approximateByteSize();case 7:return e.referenceValue.length;case 9:return function(i){return(i.values||[]).reduce((s,r)=>s+cu(r),0)}(e.arrayValue);case 10:case 11:return function(i){let s=0;return ls(i.fields,(r,a)=>{s+=r.length+cu(a)}),s}(e.mapValue);default:throw Y(13486,{value:e})}}function dv(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function Vd(e){return!!e&&"integerValue"in e}function mg(e){return!!e&&"arrayValue"in e}function mv(e){return!!e&&"nullValue"in e}function gv(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function hu(e){return!!e&&"mapValue"in e}function qO(e){var n,i;return((i=(((n=e==null?void 0:e.mapValue)==null?void 0:n.fields)||{})[qb])==null?void 0:i.stringValue)===Hb}function ho(e){if(e.geoPointValue)return{geoPointValue:{...e.geoPointValue}};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:{...e.timestampValue}};if(e.mapValue){const t={mapValue:{fields:{}}};return ls(e.mapValue.fields,(n,i)=>t.mapValue.fields[n]=ho(i)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=ho(e.arrayValue.values[n]);return t}return{...e}}function HO(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue===BO}/**
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
 */class De{constructor(t){this.value=t}static empty(){return new De({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let i=0;i<t.length-1;++i)if(n=(n.mapValue.fields||{})[t.get(i)],!hu(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=ho(n)}setAll(t){let n=oe.emptyPath(),i={},s=[];t.forEach((a,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,i,s),i={},s=[],n=l.popLast()}a?i[l.lastSegment()]=ho(a):s.push(l.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,i,s)}delete(t){const n=this.field(t.popLast());hu(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return Mn(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<t.length;++i){let s=n.mapValue.fields[t.get(i)];hu(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[t.get(i)]=s),n=s}return n.mapValue.fields}applyChanges(t,n,i){ls(n,(s,r)=>t[s]=r);for(const s of i)delete t[s]}clone(){return new De(ho(this.value))}}function Fb(e){const t=[];return ls(e.fields,(n,i)=>{const s=new oe([n]);if(hu(i)){const r=Fb(i.mapValue).fields;if(r.length===0)t.push(s);else for(const a of r)t.push(s.child(a))}else t.push(s)}),new qe(t)}/**
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
 */class pe{constructor(t,n,i,s,r,a,l){this.key=t,this.documentType=n,this.version=i,this.readTime=s,this.createTime=r,this.data=a,this.documentState=l}static newInvalidDocument(t){return new pe(t,0,J.min(),J.min(),J.min(),De.empty(),0)}static newFoundDocument(t,n,i,s){return new pe(t,1,n,J.min(),i,s,0)}static newNoDocument(t,n){return new pe(t,2,n,J.min(),J.min(),De.empty(),0)}static newUnknownDocument(t,n){return new pe(t,3,n,J.min(),J.min(),De.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=De.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=De.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof pe&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new pe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ic{constructor(t,n){this.position=t,this.inclusive=n}}function pv(e,t,n){let i=0;for(let s=0;s<e.position.length;s++){const r=t[s],a=e.position[s];if(r.field.isKeyField()?i=Q.comparator(Q.fromName(a.referenceValue),n.key):i=Qr(a,n.data.field(r.field)),r.dir==="desc"&&(i*=-1),i!==0)break}return i}function yv(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Mn(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class sc{constructor(t,n="asc"){this.field=t,this.dir=n}}function FO(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
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
 */class Gb{}class Ft extends Gb{constructor(t,n,i){super(),this.field=t,this.op=n,this.value=i}static create(t,n,i){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,i):new KO(t,n,i):n==="array-contains"?new XO(t,i):n==="in"?new $O(t,i):n==="not-in"?new JO(t,i):n==="array-contains-any"?new ZO(t,i):new Ft(t,n,i)}static createKeyFieldInFilter(t,n,i){return n==="in"?new QO(t,i):new YO(t,i)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Qr(n,this.value)):n!==null&&is(this.value)===is(n)&&this.matchesComparison(Qr(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return Y(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class yn extends Gb{constructor(t,n){super(),this.filters=t,this.op=n,this.Pe=null}static create(t,n){return new yn(t,n)}matches(t){return Kb(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Kb(e){return e.op==="and"}function Qb(e){return GO(e)&&Kb(e)}function GO(e){for(const t of e.filters)if(t instanceof yn)return!1;return!0}function kd(e){if(e instanceof Ft)return e.field.canonicalString()+e.op.toString()+Yr(e.value);if(Qb(e))return e.filters.map(t=>kd(t)).join(",");{const t=e.filters.map(n=>kd(n)).join(",");return`${e.op}(${t})`}}function Yb(e,t){return e instanceof Ft?function(i,s){return s instanceof Ft&&i.op===s.op&&i.field.isEqual(s.field)&&Mn(i.value,s.value)}(e,t):e instanceof yn?function(i,s){return s instanceof yn&&i.op===s.op&&i.filters.length===s.filters.length?i.filters.reduce((r,a,l)=>r&&Yb(a,s.filters[l]),!0):!1}(e,t):void Y(19439)}function Xb(e){return e instanceof Ft?function(n){return`${n.field.canonicalString()} ${n.op} ${Yr(n.value)}`}(e):e instanceof yn?function(n){return n.op.toString()+" {"+n.getFilters().map(Xb).join(" ,")+"}"}(e):"Filter"}class KO extends Ft{constructor(t,n,i){super(t,n,i),this.key=Q.fromName(i.referenceValue)}matches(t){const n=Q.comparator(t.key,this.key);return this.matchesComparison(n)}}class QO extends Ft{constructor(t,n){super(t,"in",n),this.keys=$b("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class YO extends Ft{constructor(t,n){super(t,"not-in",n),this.keys=$b("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function $b(e,t){var n;return(((n=t.arrayValue)==null?void 0:n.values)||[]).map(i=>Q.fromName(i.referenceValue))}class XO extends Ft{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return mg(n)&&ko(n.arrayValue,this.value)}}class $O extends Ft{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&ko(this.value.arrayValue,n)}}class JO extends Ft{constructor(t,n){super(t,"not-in",n)}matches(t){if(ko(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&n.nullValue===void 0&&!ko(this.value.arrayValue,n)}}class ZO extends Ft{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!mg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>ko(this.value.arrayValue,i))}}/**
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
 */class WO{constructor(t,n=null,i=[],s=[],r=null,a=null,l=null){this.path=t,this.collectionGroup=n,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=a,this.endAt=l,this.Te=null}}function _v(e,t=null,n=[],i=[],s=null,r=null,a=null){return new WO(e,t,n,i,s,r,a)}function gg(e){const t=Z(e);if(t.Te===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(i=>kd(i)).join(","),n+="|ob:",n+=t.orderBy.map(i=>function(r){return r.field.canonicalString()+r.dir}(i)).join(","),Bc(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(i=>Yr(i)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(i=>Yr(i)).join(",")),t.Te=n}return t.Te}function pg(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!FO(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Yb(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!yv(e.startAt,t.startAt)&&yv(e.endAt,t.endAt)}function Ld(e){return Q.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
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
 */class nl{constructor(t,n=null,i=[],s=[],r=null,a="F",l=null,u=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=a,this.startAt=l,this.endAt=u,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function tM(e,t,n,i,s,r,a,l){return new nl(e,t,n,i,s,r,a,l)}function yg(e){return new nl(e)}function vv(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function eM(e){return Q.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}function Jb(e){return e.collectionGroup!==null}function fo(e){const t=Z(e);if(t.Ee===null){t.Ee=[];const n=new Set;for(const r of t.explicitOrderBy)t.Ee.push(r),n.add(r.field.canonicalString());const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new $t(oe.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(t).forEach(r=>{n.has(r.canonicalString())||r.isKeyField()||t.Ee.push(new sc(r,i))}),n.has(oe.keyField().canonicalString())||t.Ee.push(new sc(oe.keyField(),i))}return t.Ee}function Nn(e){const t=Z(e);return t.Ie||(t.Ie=nM(t,fo(e))),t.Ie}function nM(e,t){if(e.limitType==="F")return _v(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(s=>{const r=s.dir==="desc"?"asc":"desc";return new sc(s.field,r)});const n=e.endAt?new ic(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new ic(e.startAt.position,e.startAt.inclusive):null;return _v(e.path,e.collectionGroup,t,e.filters,e.limit,n,i)}}function Ud(e,t){const n=e.filters.concat([t]);return new nl(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function Pd(e,t,n){return new nl(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Hc(e,t){return pg(Nn(e),Nn(t))&&e.limitType===t.limitType}function Zb(e){return`${gg(Nn(e))}|lt:${e.limitType}`}function rr(e){return`Query(target=${function(n){let i=n.path.canonicalString();return n.collectionGroup!==null&&(i+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(i+=`, filters: [${n.filters.map(s=>Xb(s)).join(", ")}]`),Bc(n.limit)||(i+=", limit: "+n.limit),n.orderBy.length>0&&(i+=`, orderBy: [${n.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),n.startAt&&(i+=", startAt: ",i+=n.startAt.inclusive?"b:":"a:",i+=n.startAt.position.map(s=>Yr(s)).join(",")),n.endAt&&(i+=", endAt: ",i+=n.endAt.inclusive?"a:":"b:",i+=n.endAt.position.map(s=>Yr(s)).join(",")),`Target(${i})`}(Nn(e))}; limitType=${e.limitType})`}function Fc(e,t){return t.isFoundDocument()&&function(i,s){const r=s.key.path;return i.collectionGroup!==null?s.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(r):Q.isDocumentKey(i.path)?i.path.isEqual(r):i.path.isImmediateParentOf(r)}(e,t)&&function(i,s){for(const r of fo(i))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(e,t)&&function(i,s){for(const r of i.filters)if(!r.matches(s))return!1;return!0}(e,t)&&function(i,s){return!(i.startAt&&!function(a,l,u){const h=pv(a,l,u);return a.inclusive?h<=0:h<0}(i.startAt,fo(i),s)||i.endAt&&!function(a,l,u){const h=pv(a,l,u);return a.inclusive?h>=0:h>0}(i.endAt,fo(i),s))}(e,t)}function iM(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Wb(e){return(t,n)=>{let i=!1;for(const s of fo(e)){const r=sM(s,t,n);if(r!==0)return r;i=i||s.field.isKeyField()}return 0}}function sM(e,t,n){const i=e.field.isKeyField()?Q.comparator(t.key,n.key):function(r,a,l){const u=a.data.field(r),h=l.data.field(r);return u!==null&&h!==null?Qr(u,h):Y(42886)}(e.field,t,n);switch(e.dir){case"asc":return i;case"desc":return-1*i;default:return Y(19790,{direction:e.dir})}}/**
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
 */class Ys{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),i=this.inner[n];if(i!==void 0){for(const[s,r]of i)if(this.equalsFn(s,t))return r}}has(t){return this.get(t)!==void 0}set(t,n){const i=this.mapKeyFn(t),s=this.inner[i];if(s===void 0)return this.inner[i]=[[t,n]],void this.innerSize++;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],t))return void(s[r]=[t,n]);s.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),i=this.inner[n];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return i.length===1?delete this.inner[n]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(t){ls(this.inner,(n,i)=>{for(const[s,r]of i)t(s,r)})}isEmpty(){return Lb(this.inner)}size(){return this.innerSize}}/**
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
 */const rM=new xt(Q.comparator);function ai(){return rM}const tS=new xt(Q.comparator);function Ka(...e){let t=tS;for(const n of e)t=t.insert(n.key,n);return t}function eS(e){let t=tS;return e.forEach((n,i)=>t=t.insert(n,i.overlayedDocument)),t}function As(){return mo()}function nS(){return mo()}function mo(){return new Ys(e=>e.toString(),(e,t)=>e.isEqual(t))}const aM=new xt(Q.comparator),oM=new $t(Q.comparator);function lt(...e){let t=oM;for(const n of e)t=t.add(n);return t}const lM=new $t(ot);function uM(){return lM}/**
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
 */function _g(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:tc(t)?"-0":t}}function iS(e){return{integerValue:""+e}}function cM(e,t){return kO(t)?iS(t):_g(e,t)}/**
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
 */class Gc{constructor(){this._=void 0}}function hM(e,t,n){return e instanceof rc?function(s,r){const a={fields:{[zb]:{stringValue:Pb},[Bb]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&dg(r)&&(r=qc(r)),r&&(a.fields[jb]=r),{mapValue:a}}(n,t):e instanceof Lo?rS(e,t):e instanceof Uo?aS(e,t):function(s,r){const a=sS(s,r),l=Tv(a)+Tv(s.Ae);return Vd(a)&&Vd(s.Ae)?iS(l):_g(s.serializer,l)}(e,t)}function fM(e,t,n){return e instanceof Lo?rS(e,t):e instanceof Uo?aS(e,t):n}function sS(e,t){return e instanceof ac?function(i){return Vd(i)||function(r){return!!r&&"doubleValue"in r}(i)}(t)?t:{integerValue:0}:null}class rc extends Gc{}class Lo extends Gc{constructor(t){super(),this.elements=t}}function rS(e,t){const n=oS(t);for(const i of e.elements)n.some(s=>Mn(s,i))||n.push(i);return{arrayValue:{values:n}}}class Uo extends Gc{constructor(t){super(),this.elements=t}}function aS(e,t){let n=oS(t);for(const i of e.elements)n=n.filter(s=>!Mn(s,i));return{arrayValue:{values:n}}}class ac extends Gc{constructor(t,n){super(),this.serializer=t,this.Ae=n}}function Tv(e){return kt(e.integerValue||e.doubleValue)}function oS(e){return mg(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function dM(e,t){return e.field.isEqual(t.field)&&function(i,s){return i instanceof Lo&&s instanceof Lo||i instanceof Uo&&s instanceof Uo?Kr(i.elements,s.elements,Mn):i instanceof ac&&s instanceof ac?Mn(i.Ae,s.Ae):i instanceof rc&&s instanceof rc}(e.transform,t.transform)}class mM{constructor(t,n){this.version=t,this.transformResults=n}}class Ye{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Ye}static exists(t){return new Ye(void 0,t)}static updateTime(t){return new Ye(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function fu(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Kc{}function lS(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new Qc(e.key,Ye.none()):new il(e.key,e.data,Ye.none());{const n=e.data,i=De.empty();let s=new $t(oe.comparator);for(let r of t.fields)if(!s.has(r)){let a=n.field(r);a===null&&r.length>1&&(r=r.popLast(),a=n.field(r)),a===null?i.delete(r):i.set(r,a),s=s.add(r)}return new us(e.key,i,new qe(s.toArray()),Ye.none())}}function gM(e,t,n){e instanceof il?function(s,r,a){const l=s.value.clone(),u=Av(s.fieldTransforms,r,a.transformResults);l.setAll(u),r.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(e,t,n):e instanceof us?function(s,r,a){if(!fu(s.precondition,r))return void r.convertToUnknownDocument(a.version);const l=Av(s.fieldTransforms,r,a.transformResults),u=r.data;u.setAll(uS(s)),u.setAll(l),r.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(e,t,n):function(s,r,a){r.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,n)}function go(e,t,n,i){return e instanceof il?function(r,a,l,u){if(!fu(r.precondition,a))return l;const h=r.value.clone(),d=bv(r.fieldTransforms,u,a);return h.setAll(d),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(e,t,n,i):e instanceof us?function(r,a,l,u){if(!fu(r.precondition,a))return l;const h=bv(r.fieldTransforms,u,a),d=a.data;return d.setAll(uS(r)),d.setAll(h),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),l===null?null:l.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(m=>m.field))}(e,t,n,i):function(r,a,l){return fu(r.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(e,t,n)}function pM(e,t){let n=null;for(const i of e.fieldTransforms){const s=t.data.field(i.field),r=sS(i.transform,s||null);r!=null&&(n===null&&(n=De.empty()),n.set(i.field,r))}return n||null}function Ev(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(i,s){return i===void 0&&s===void 0||!(!i||!s)&&Kr(i,s,(r,a)=>dM(r,a))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class il extends Kc{constructor(t,n,i,s=[]){super(),this.key=t,this.value=n,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class us extends Kc{constructor(t,n,i,s,r=[]){super(),this.key=t,this.data=n,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function uS(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=e.data.field(n);t.set(n,i)}}),t}function Av(e,t,n){const i=new Map;mt(e.length===n.length,32656,{Ve:n.length,de:e.length});for(let s=0;s<n.length;s++){const r=e[s],a=r.transform,l=t.data.field(r.field);i.set(r.field,fM(a,l,n[s]))}return i}function bv(e,t,n){const i=new Map;for(const s of e){const r=s.transform,a=n.data.field(s.field);i.set(s.field,hM(r,a,t))}return i}class Qc extends Kc{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class yM extends Kc{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class _M{constructor(t,n,i,s){this.batchId=t,this.localWriteTime=n,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(t,n){const i=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(t.key)&&gM(r,t,i[s])}}applyToLocalView(t,n){for(const i of this.baseMutations)i.key.isEqual(t.key)&&(n=go(i,t,n,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(t.key)&&(n=go(i,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const i=nS();return this.mutations.forEach(s=>{const r=t.get(s.key),a=r.overlayedDocument;let l=this.applyToLocalView(a,r.mutatedFields);l=n.has(s.key)?null:l;const u=lS(a,l);u!==null&&i.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(J.min())}),i}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),lt())}isEqual(t){return this.batchId===t.batchId&&Kr(this.mutations,t.mutations,(n,i)=>Ev(n,i))&&Kr(this.baseMutations,t.baseMutations,(n,i)=>Ev(n,i))}}class vg{constructor(t,n,i,s){this.batch=t,this.commitVersion=n,this.mutationResults=i,this.docVersions=s}static from(t,n,i){mt(t.mutations.length===i.length,58842,{me:t.mutations.length,fe:i.length});let s=function(){return aM}();const r=t.mutations;for(let a=0;a<r.length;a++)s=s.insert(r[a].key,i[a].version);return new vg(t,n,i,s)}}/**
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
 */class vM{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class TM{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
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
 */var jt,ht;function EM(e){switch(e){case L.OK:return Y(64938);case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0;default:return Y(15467,{code:e})}}function cS(e){if(e===void 0)return ri("GRPC error has no .code"),L.UNKNOWN;switch(e){case jt.OK:return L.OK;case jt.CANCELLED:return L.CANCELLED;case jt.UNKNOWN:return L.UNKNOWN;case jt.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case jt.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case jt.INTERNAL:return L.INTERNAL;case jt.UNAVAILABLE:return L.UNAVAILABLE;case jt.UNAUTHENTICATED:return L.UNAUTHENTICATED;case jt.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case jt.NOT_FOUND:return L.NOT_FOUND;case jt.ALREADY_EXISTS:return L.ALREADY_EXISTS;case jt.PERMISSION_DENIED:return L.PERMISSION_DENIED;case jt.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case jt.ABORTED:return L.ABORTED;case jt.OUT_OF_RANGE:return L.OUT_OF_RANGE;case jt.UNIMPLEMENTED:return L.UNIMPLEMENTED;case jt.DATA_LOSS:return L.DATA_LOSS;default:return Y(39323,{code:e})}}(ht=jt||(jt={}))[ht.OK=0]="OK",ht[ht.CANCELLED=1]="CANCELLED",ht[ht.UNKNOWN=2]="UNKNOWN",ht[ht.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ht[ht.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ht[ht.NOT_FOUND=5]="NOT_FOUND",ht[ht.ALREADY_EXISTS=6]="ALREADY_EXISTS",ht[ht.PERMISSION_DENIED=7]="PERMISSION_DENIED",ht[ht.UNAUTHENTICATED=16]="UNAUTHENTICATED",ht[ht.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ht[ht.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ht[ht.ABORTED=10]="ABORTED",ht[ht.OUT_OF_RANGE=11]="OUT_OF_RANGE",ht[ht.UNIMPLEMENTED=12]="UNIMPLEMENTED",ht[ht.INTERNAL=13]="INTERNAL",ht[ht.UNAVAILABLE=14]="UNAVAILABLE",ht[ht.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const bM=new Gi([4294967295,4294967295],0);function Sv(e){const t=AM().encode(e),n=new wb;return n.update(t),new Uint8Array(n.digest())}function wv(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),i=t.getUint32(4,!0),s=t.getUint32(8,!0),r=t.getUint32(12,!0);return[new Gi([n,i],0),new Gi([s,r],0)]}class Tg{constructor(t,n,i){if(this.bitmap=t,this.padding=n,this.hashCount=i,n<0||n>=8)throw new Qa(`Invalid padding: ${n}`);if(i<0)throw new Qa(`Invalid hash count: ${i}`);if(t.length>0&&this.hashCount===0)throw new Qa(`Invalid hash count: ${i}`);if(t.length===0&&n!==0)throw new Qa(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*t.length-n,this.pe=Gi.fromNumber(this.ge)}ye(t,n,i){let s=t.add(n.multiply(Gi.fromNumber(i)));return s.compare(bM)===1&&(s=new Gi([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const n=Sv(t),[i,s]=wv(n);for(let r=0;r<this.hashCount;r++){const a=this.ye(i,s,r);if(!this.we(a))return!1}return!0}static create(t,n,i){const s=t%8==0?0:8-t%8,r=new Uint8Array(Math.ceil(t/8)),a=new Tg(r,s,n);return i.forEach(l=>a.insert(l)),a}insert(t){if(this.ge===0)return;const n=Sv(t),[i,s]=wv(n);for(let r=0;r<this.hashCount;r++){const a=this.ye(i,s,r);this.Se(a)}}Se(t){const n=Math.floor(t/8),i=t%8;this.bitmap[n]|=1<<i}}class Qa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Yc{constructor(t,n,i,s,r){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,n,i){const s=new Map;return s.set(t,sl.createSynthesizedTargetChangeForCurrentChange(t,n,i)),new Yc(J.min(),s,new xt(ot),ai(),lt())}}class sl{constructor(t,n,i,s,r){this.resumeToken=t,this.current=n,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,n,i){return new sl(i,n,lt(),lt(),lt())}}/**
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
 */class du{constructor(t,n,i,s){this.be=t,this.removedTargetIds=n,this.key=i,this.De=s}}class hS{constructor(t,n){this.targetId=t,this.Ce=n}}class fS{constructor(t,n,i=ce.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=n,this.resumeToken=i,this.cause=s}}class Iv{constructor(){this.ve=0,this.Fe=Rv(),this.Me=ce.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=lt(),n=lt(),i=lt();return this.Fe.forEach((s,r)=>{switch(r){case 0:t=t.add(s);break;case 2:n=n.add(s);break;case 1:i=i.add(s);break;default:Y(38017,{changeType:r})}}),new sl(this.Me,this.xe,t,n,i)}qe(){this.Oe=!1,this.Fe=Rv()}Ke(t,n){this.Oe=!0,this.Fe=this.Fe.insert(t,n)}Ue(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}$e(){this.ve+=1}We(){this.ve-=1,mt(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class SM{constructor(t){this.Ge=t,this.ze=new Map,this.je=ai(),this.Je=Bl(),this.He=Bl(),this.Ze=new xt(ot)}Xe(t){for(const n of t.be)t.De&&t.De.isFoundDocument()?this.Ye(n,t.De):this.et(n,t.key,t.De);for(const n of t.removedTargetIds)this.et(n,t.key,t.De)}tt(t){this.forEachTarget(t,n=>{const i=this.nt(n);switch(t.state){case 0:this.rt(n)&&i.Le(t.resumeToken);break;case 1:i.We(),i.Ne||i.qe(),i.Le(t.resumeToken);break;case 2:i.We(),i.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(i.Qe(),i.Le(t.resumeToken));break;case 4:this.rt(n)&&(this.it(n),i.Le(t.resumeToken));break;default:Y(56790,{state:t.state})}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.ze.forEach((i,s)=>{this.rt(s)&&n(s)})}st(t){const n=t.targetId,i=t.Ce.count,s=this.ot(n);if(s){const r=s.target;if(Ld(r))if(i===0){const a=new Q(r.path);this.et(n,a,pe.newNoDocument(a,J.min()))}else mt(i===1,20013,{expectedCount:i});else{const a=this._t(n);if(a!==i){const l=this.ut(t),u=l?this.ct(l,t,a):1;if(u!==0){this.it(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,h)}}}}}ut(t){const n=t.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:i="",padding:s=0},hashCount:r=0}=n;let a,l;try{a=ns(i).toUint8Array()}catch(u){if(u instanceof Ub)return zs("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Tg(a,s,r)}catch(u){return zs(u instanceof Qa?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(t,n,i){return n.Ce.count===i-this.Pt(t,n.targetId)?0:2}Pt(t,n){const i=this.Ge.getRemoteKeysForTarget(n);let s=0;return i.forEach(r=>{const a=this.Ge.ht(),l=`projects/${a.projectId}/databases/${a.database}/documents/${r.path.canonicalString()}`;t.mightContain(l)||(this.et(n,r,null),s++)}),s}Tt(t){const n=new Map;this.ze.forEach((r,a)=>{const l=this.ot(a);if(l){if(r.current&&Ld(l.target)){const u=new Q(l.target.path);this.Et(u).has(a)||this.It(a,u)||this.et(a,u,pe.newNoDocument(u,t))}r.Be&&(n.set(a,r.ke()),r.qe())}});let i=lt();this.He.forEach((r,a)=>{let l=!0;a.forEachWhile(u=>{const h=this.ot(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(i=i.add(r))}),this.je.forEach((r,a)=>a.setReadTime(t));const s=new Yc(t,n,this.Ze,this.je,i);return this.je=ai(),this.Je=Bl(),this.He=Bl(),this.Ze=new xt(ot),s}Ye(t,n){if(!this.rt(t))return;const i=this.It(t,n.key)?2:0;this.nt(t).Ke(n.key,i),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Et(n.key).add(t)),this.He=this.He.insert(n.key,this.Rt(n.key).add(t))}et(t,n,i){if(!this.rt(t))return;const s=this.nt(t);this.It(t,n)?s.Ke(n,1):s.Ue(n),this.He=this.He.insert(n,this.Rt(n).delete(t)),this.He=this.He.insert(n,this.Rt(n).add(t)),i&&(this.je=this.je.insert(n,i))}removeTarget(t){this.ze.delete(t)}_t(t){const n=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}$e(t){this.nt(t).$e()}nt(t){let n=this.ze.get(t);return n||(n=new Iv,this.ze.set(t,n)),n}Rt(t){let n=this.He.get(t);return n||(n=new $t(ot),this.He=this.He.insert(t,n)),n}Et(t){let n=this.Je.get(t);return n||(n=new $t(ot),this.Je=this.Je.insert(t,n)),n}rt(t){const n=this.ot(t)!==null;return n||H("WatchChangeAggregator","Detected inactive target",t),n}ot(t){const n=this.ze.get(t);return n&&n.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new Iv),this.Ge.getRemoteKeysForTarget(t).forEach(n=>{this.et(t,n,null)})}It(t,n){return this.Ge.getRemoteKeysForTarget(t).has(n)}}function Bl(){return new xt(Q.comparator)}function Rv(){return new xt(Q.comparator)}const wM={asc:"ASCENDING",desc:"DESCENDING"},IM={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},RM={and:"AND",or:"OR"};class CM{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function zd(e,t){return e.useProto3Json||Bc(t)?t:{value:t}}function oc(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function dS(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function NM(e,t){return oc(e,t.toTimestamp())}function Dn(e){return mt(!!e,49232),J.fromTimestamp(function(n){const i=es(n);return new Rt(i.seconds,i.nanos)}(e))}function Eg(e,t){return jd(e,t).canonicalString()}function jd(e,t){const n=function(s){return new Et(["projects",s.projectId,"databases",s.database])}(e).child("documents");return t===void 0?n:n.child(t)}function mS(e){const t=Et.fromString(e);return mt(vS(t),10190,{key:t.toString()}),t}function Bd(e,t){return Eg(e.databaseId,t.path)}function _f(e,t){const n=mS(t);if(n.get(1)!==e.databaseId.projectId)throw new q(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new q(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new Q(pS(n))}function gS(e,t){return Eg(e.databaseId,t)}function DM(e){const t=mS(e);return t.length===4?Et.emptyPath():pS(t)}function qd(e){return new Et(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function pS(e){return mt(e.length>4&&e.get(4)==="documents",29091,{key:e.toString()}),e.popFirst(5)}function Cv(e,t,n){return{name:Bd(e,t),fields:n.value.mapValue.fields}}function xM(e,t){let n;if("targetChange"in t){t.targetChange;const i=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:Y(39313,{state:h})}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],r=function(h,d){return h.useProto3Json?(mt(d===void 0||typeof d=="string",58123),ce.fromBase64String(d||"")):(mt(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),ce.fromUint8Array(d||new Uint8Array))}(e,t.targetChange.resumeToken),a=t.targetChange.cause,l=a&&function(h){const d=h.code===void 0?L.UNKNOWN:cS(h.code);return new q(d,h.message||"")}(a);n=new fS(i,s,r,l||null)}else if("documentChange"in t){t.documentChange;const i=t.documentChange;i.document,i.document.name,i.document.updateTime;const s=_f(e,i.document.name),r=Dn(i.document.updateTime),a=i.document.createTime?Dn(i.document.createTime):J.min(),l=new De({mapValue:{fields:i.document.fields}}),u=pe.newFoundDocument(s,r,a,l),h=i.targetIds||[],d=i.removedTargetIds||[];n=new du(h,d,u.key,u)}else if("documentDelete"in t){t.documentDelete;const i=t.documentDelete;i.document;const s=_f(e,i.document),r=i.readTime?Dn(i.readTime):J.min(),a=pe.newNoDocument(s,r),l=i.removedTargetIds||[];n=new du([],l,a.key,a)}else if("documentRemove"in t){t.documentRemove;const i=t.documentRemove;i.document;const s=_f(e,i.document),r=i.removedTargetIds||[];n=new du([],r,s,null)}else{if(!("filter"in t))return Y(11601,{Vt:t});{t.filter;const i=t.filter;i.targetId;const{count:s=0,unchangedNames:r}=i,a=new TM(s,r),l=i.targetId;n=new hS(l,a)}}return n}function OM(e,t){let n;if(t instanceof il)n={update:Cv(e,t.key,t.value)};else if(t instanceof Qc)n={delete:Bd(e,t.key)};else if(t instanceof us)n={update:Cv(e,t.key,t.data),updateMask:BM(t.fieldMask)};else{if(!(t instanceof yM))return Y(16599,{dt:t.type});n={verify:Bd(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(i=>function(r,a){const l=a.transform;if(l instanceof rc)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Lo)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Uo)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof ac)return{fieldPath:a.field.canonicalString(),increment:l.Ae};throw Y(20930,{transform:a.transform})}(0,i))),t.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:NM(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:Y(27497)}(e,t.precondition)),n}function MM(e,t){return e&&e.length>0?(mt(t!==void 0,14353),e.map(n=>function(s,r){let a=s.updateTime?Dn(s.updateTime):Dn(r);return a.isEqual(J.min())&&(a=Dn(r)),new mM(a,s.transformResults||[])}(n,t))):[]}function VM(e,t){return{documents:[gS(e,t.path)]}}function kM(e,t){const n={structuredQuery:{}},i=t.path;let s;t.collectionGroup!==null?(s=i,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=i.popLast(),n.structuredQuery.from=[{collectionId:i.lastSegment()}]),n.parent=gS(e,s);const r=function(h){if(h.length!==0)return _S(yn.create(h,"and"))}(t.filters);r&&(n.structuredQuery.where=r);const a=function(h){if(h.length!==0)return h.map(d=>function(g){return{field:ar(g.field),direction:PM(g.dir)}}(d))}(t.orderBy);a&&(n.structuredQuery.orderBy=a);const l=zd(e,t.limit);return l!==null&&(n.structuredQuery.limit=l),t.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(t.endAt)),{ft:n,parent:s}}function LM(e){let t=DM(e.parent);const n=e.structuredQuery,i=n.from?n.from.length:0;let s=null;if(i>0){mt(i===1,65062);const d=n.from[0];d.allDescendants?s=d.collectionId:t=t.child(d.collectionId)}let r=[];n.where&&(r=function(m){const g=yS(m);return g instanceof yn&&Qb(g)?g.getFilters():[g]}(n.where));let a=[];n.orderBy&&(a=function(m){return m.map(g=>function(D){return new sc(or(D.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(D.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(m){let g;return g=typeof m=="object"?m.value:m,Bc(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(m){const g=!!m.before,T=m.values||[];return new ic(T,g)}(n.startAt));let h=null;return n.endAt&&(h=function(m){const g=!m.before,T=m.values||[];return new ic(T,g)}(n.endAt)),tM(t,s,a,r,l,"F",u,h)}function UM(e,t){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Y(28987,{purpose:s})}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function yS(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const i=or(n.unaryFilter.field);return Ft.create(i,"==",{doubleValue:NaN});case"IS_NULL":const s=or(n.unaryFilter.field);return Ft.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=or(n.unaryFilter.field);return Ft.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=or(n.unaryFilter.field);return Ft.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Y(61313);default:return Y(60726)}}(e):e.fieldFilter!==void 0?function(n){return Ft.create(or(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Y(58110);default:return Y(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return yn.create(n.compositeFilter.filters.map(i=>yS(i)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Y(1026)}}(n.compositeFilter.op))}(e):Y(30097,{filter:e})}function PM(e){return wM[e]}function zM(e){return IM[e]}function jM(e){return RM[e]}function ar(e){return{fieldPath:e.canonicalString()}}function or(e){return oe.fromServerFormat(e.fieldPath)}function _S(e){return e instanceof Ft?function(n){if(n.op==="=="){if(gv(n.value))return{unaryFilter:{field:ar(n.field),op:"IS_NAN"}};if(mv(n.value))return{unaryFilter:{field:ar(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(gv(n.value))return{unaryFilter:{field:ar(n.field),op:"IS_NOT_NAN"}};if(mv(n.value))return{unaryFilter:{field:ar(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ar(n.field),op:zM(n.op),value:n.value}}}(e):e instanceof yn?function(n){const i=n.getFilters().map(s=>_S(s));return i.length===1?i[0]:{compositeFilter:{op:jM(n.op),filters:i}}}(e):Y(54877,{filter:e})}function BM(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function vS(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}function TS(e){return!!e&&typeof e._toProto=="function"&&e._protoValueType==="ProtoValue"}/**
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
 */class Oi{constructor(t,n,i,s,r=J.min(),a=J.min(),l=ce.EMPTY_BYTE_STRING,u=null){this.target=t,this.targetId=n,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(t){return new Oi(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new Oi(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Oi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Oi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class qM{constructor(t){this.yt=t}}function HM(e){const t=LM({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Pd(t,t.limit,"L"):t}/**
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
 */class FM{constructor(){this.bn=new GM}addToCollectionParentIndex(t,n){return this.bn.add(n),U.resolve()}getCollectionParents(t,n){return U.resolve(this.bn.getEntries(n))}addFieldIndex(t,n){return U.resolve()}deleteFieldIndex(t,n){return U.resolve()}deleteAllFieldIndexes(t){return U.resolve()}createTargetIndexes(t,n){return U.resolve()}getDocumentsMatchingTarget(t,n){return U.resolve(null)}getIndexType(t,n){return U.resolve(0)}getFieldIndexes(t,n){return U.resolve([])}getNextCollectionGroupToUpdate(t){return U.resolve(null)}getMinOffset(t,n){return U.resolve(ts.min())}getMinOffsetFromCollectionGroup(t,n){return U.resolve(ts.min())}updateCollectionGroup(t,n,i){return U.resolve()}updateIndexEntries(t,n){return U.resolve()}}class GM{constructor(){this.index={}}add(t){const n=t.lastSegment(),i=t.popLast(),s=this.index[n]||new $t(Et.comparator),r=!s.has(i);return this.index[n]=s.add(i),r}has(t){const n=t.lastSegment(),i=t.popLast(),s=this.index[n];return s&&s.has(i)}getEntries(t){return(this.index[t]||new $t(Et.comparator)).toArray()}}/**
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
 */const Nv={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},ES=41943040;class Ne{static withCacheSize(t){return new Ne(t,Ne.DEFAULT_COLLECTION_PERCENTILE,Ne.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,n,i){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=i}}/**
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
 */Ne.DEFAULT_COLLECTION_PERCENTILE=10,Ne.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ne.DEFAULT=new Ne(ES,Ne.DEFAULT_COLLECTION_PERCENTILE,Ne.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ne.DISABLED=new Ne(-1,0,0);/**
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
 */class Xr{constructor(t){this.sr=t}next(){return this.sr+=2,this.sr}static _r(){return new Xr(0)}static ar(){return new Xr(-1)}}/**
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
 */const Dv="LruGarbageCollector",KM=1048576;function xv([e,t],[n,i]){const s=ot(e,n);return s===0?ot(t,i):s}class QM{constructor(t){this.Pr=t,this.buffer=new $t(xv),this.Tr=0}Er(){return++this.Tr}Ir(t){const n=[t,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const i=this.buffer.last();xv(n,i)<0&&(this.buffer=this.buffer.delete(i).add(n))}}get maxValue(){return this.buffer.last()[0]}}class YM{constructor(t,n,i){this.garbageCollector=t,this.asyncQueue=n,this.localStore=i,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(t){H(Dv,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ha(n)?H(Dv,"Ignoring IndexedDB error during garbage collection: ",n):await ca(n)}await this.Ar(3e5)})}}class XM{constructor(t,n){this.Vr=t,this.params=n}calculateTargetCount(t,n){return this.Vr.dr(t).next(i=>Math.floor(n/100*i))}nthSequenceNumber(t,n){if(n===0)return U.resolve(jc.ce);const i=new QM(n);return this.Vr.forEachTarget(t,s=>i.Ir(s.sequenceNumber)).next(()=>this.Vr.mr(t,s=>i.Ir(s))).next(()=>i.maxValue)}removeTargets(t,n,i){return this.Vr.removeTargets(t,n,i)}removeOrphanedDocuments(t,n){return this.Vr.removeOrphanedDocuments(t,n)}collect(t,n){return this.params.cacheSizeCollectionThreshold===-1?(H("LruGarbageCollector","Garbage collection skipped; disabled"),U.resolve(Nv)):this.getCacheSize(t).next(i=>i<this.params.cacheSizeCollectionThreshold?(H("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Nv):this.gr(t,n))}getCacheSize(t){return this.Vr.getCacheSize(t)}gr(t,n){let i,s,r,a,l,u,h;const d=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(H("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),s=this.params.maximumSequenceNumbersToCollect):s=m,a=Date.now(),this.nthSequenceNumber(t,s))).next(m=>(i=m,l=Date.now(),this.removeTargets(t,i,n))).next(m=>(r=m,u=Date.now(),this.removeOrphanedDocuments(t,i))).next(m=>(h=Date.now(),sr()<=at.DEBUG&&H("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-d}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${r} targets in `+(u-l)+`ms
	Removed ${m} documents in `+(h-u)+`ms
Total Duration: ${h-d}ms`),U.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:r,documentsRemoved:m})))}}function $M(e,t){return new XM(e,t)}/**
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
 */class JM{constructor(){this.changes=new Ys(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,pe.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?U.resolve(i):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class ZM{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
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
 */class WM{constructor(t,n,i,s){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=i,this.indexManager=s}getDocument(t,n){let i=null;return this.documentOverlayCache.getOverlay(t,n).next(s=>(i=s,this.remoteDocumentCache.getEntry(t,n))).next(s=>(i!==null&&go(i.mutation,s,qe.empty(),Rt.now()),s))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(i=>this.getLocalViewOfDocuments(t,i,lt()).next(()=>i))}getLocalViewOfDocuments(t,n,i=lt()){const s=As();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,i).next(r=>{let a=Ka();return r.forEach((l,u)=>{a=a.insert(l,u.overlayedDocument)}),a}))}getOverlayedDocuments(t,n){const i=As();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,lt()))}populateOverlays(t,n,i){const s=[];return i.forEach(r=>{n.has(r)||s.push(r)}),this.documentOverlayCache.getOverlays(t,s).next(r=>{r.forEach((a,l)=>{n.set(a,l)})})}computeViews(t,n,i,s){let r=ai();const a=mo(),l=function(){return mo()}();return n.forEach((u,h)=>{const d=i.get(h.key);s.has(h.key)&&(d===void 0||d.mutation instanceof us)?r=r.insert(h.key,h):d!==void 0?(a.set(h.key,d.mutation.getFieldMask()),go(d.mutation,h,d.mutation.getFieldMask(),Rt.now())):a.set(h.key,qe.empty())}),this.recalculateAndSaveOverlays(t,r).next(u=>(u.forEach((h,d)=>a.set(h,d)),n.forEach((h,d)=>l.set(h,new ZM(d,a.get(h)??null))),l))}recalculateAndSaveOverlays(t,n){const i=mo();let s=new xt((a,l)=>a-l),r=lt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(a=>{for(const l of a)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let d=i.get(u)||qe.empty();d=l.applyToLocalView(h,d),i.set(u,d);const m=(s.get(l.batchId)||lt()).add(u);s=s.insert(l.batchId,m)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,d=u.value,m=nS();d.forEach(g=>{if(!r.has(g)){const T=lS(n.get(g),i.get(g));T!==null&&m.set(g,T),r=r.add(g)}}),a.push(this.documentOverlayCache.saveOverlays(t,h,m))}return U.waitFor(a)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(i=>this.recalculateAndSaveOverlays(t,i))}getDocumentsMatchingQuery(t,n,i,s){return eM(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):Jb(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,i,s):this.getDocumentsMatchingCollectionQuery(t,n,i,s)}getNextDocuments(t,n,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,i,s).next(r=>{const a=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,i.largestBatchId,s-r.size):U.resolve(As());let l=Oo,u=r;return a.next(h=>U.forEach(h,(d,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),r.get(d)?U.resolve():this.remoteDocumentCache.getEntry(t,d).next(g=>{u=u.insert(d,g)}))).next(()=>this.populateOverlays(t,h,r)).next(()=>this.computeViews(t,u,h,lt())).next(d=>({batchId:l,changes:eS(d)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new Q(n)).next(i=>{let s=Ka();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}getDocumentsMatchingCollectionGroupQuery(t,n,i,s){const r=n.collectionGroup;let a=Ka();return this.indexManager.getCollectionParents(t,r).next(l=>U.forEach(l,u=>{const h=function(m,g){return new nl(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(r));return this.getDocumentsMatchingCollectionQuery(t,h,i,s).next(d=>{d.forEach((m,g)=>{a=a.insert(m,g)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,n,i,s){let r;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,i.largestBatchId).next(a=>(r=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,i,r,s))).next(a=>{r.forEach((u,h)=>{const d=h.getKey();a.get(d)===null&&(a=a.insert(d,pe.newInvalidDocument(d)))});let l=Ka();return a.forEach((u,h)=>{const d=r.get(u);d!==void 0&&go(d.mutation,h,qe.empty(),Rt.now()),Fc(n,h)&&(l=l.insert(u,h))}),l})}}/**
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
 */class tV{constructor(t){this.serializer=t,this.Nr=new Map,this.Br=new Map}getBundleMetadata(t,n){return U.resolve(this.Nr.get(n))}saveBundleMetadata(t,n){return this.Nr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Dn(s.createTime)}}(n)),U.resolve()}getNamedQuery(t,n){return U.resolve(this.Br.get(n))}saveNamedQuery(t,n){return this.Br.set(n.name,function(s){return{name:s.name,query:HM(s.bundledQuery),readTime:Dn(s.readTime)}}(n)),U.resolve()}}/**
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
 */class eV{constructor(){this.overlays=new xt(Q.comparator),this.Lr=new Map}getOverlay(t,n){return U.resolve(this.overlays.get(n))}getOverlays(t,n){const i=As();return U.forEach(n,s=>this.getOverlay(t,s).next(r=>{r!==null&&i.set(s,r)})).next(()=>i)}saveOverlays(t,n,i){return i.forEach((s,r)=>{this.St(t,n,r)}),U.resolve()}removeOverlaysForBatchId(t,n,i){const s=this.Lr.get(i);return s!==void 0&&(s.forEach(r=>this.overlays=this.overlays.remove(r)),this.Lr.delete(i)),U.resolve()}getOverlaysForCollection(t,n,i){const s=As(),r=n.length+1,a=new Q(n.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===r&&u.largestBatchId>i&&s.set(u.getKey(),u)}return U.resolve(s)}getOverlaysForCollectionGroup(t,n,i,s){let r=new xt((h,d)=>h-d);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>i){let d=r.get(h.largestBatchId);d===null&&(d=As(),r=r.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const l=As(),u=r.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,d)=>l.set(h,d)),!(l.size()>=s)););return U.resolve(l)}St(t,n,i){const s=this.overlays.get(i.key);if(s!==null){const a=this.Lr.get(s.largestBatchId).delete(i.key);this.Lr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(i.key,new vM(n,i));let r=this.Lr.get(n);r===void 0&&(r=lt(),this.Lr.set(n,r)),this.Lr.set(n,r.add(i.key))}}/**
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
 */class nV{constructor(){this.sessionToken=ce.EMPTY_BYTE_STRING}getSessionToken(t){return U.resolve(this.sessionToken)}setSessionToken(t,n){return this.sessionToken=n,U.resolve()}}/**
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
 */class Ag{constructor(){this.kr=new $t(Wt.qr),this.Kr=new $t(Wt.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(t,n){const i=new Wt(t,n);this.kr=this.kr.add(i),this.Kr=this.Kr.add(i)}$r(t,n){t.forEach(i=>this.addReference(i,n))}removeReference(t,n){this.Wr(new Wt(t,n))}Qr(t,n){t.forEach(i=>this.removeReference(i,n))}Gr(t){const n=new Q(new Et([])),i=new Wt(n,t),s=new Wt(n,t+1),r=[];return this.Kr.forEachInRange([i,s],a=>{this.Wr(a),r.push(a.key)}),r}zr(){this.kr.forEach(t=>this.Wr(t))}Wr(t){this.kr=this.kr.delete(t),this.Kr=this.Kr.delete(t)}jr(t){const n=new Q(new Et([])),i=new Wt(n,t),s=new Wt(n,t+1);let r=lt();return this.Kr.forEachInRange([i,s],a=>{r=r.add(a.key)}),r}containsKey(t){const n=new Wt(t,0),i=this.kr.firstAfterOrEqual(n);return i!==null&&t.isEqual(i.key)}}class Wt{constructor(t,n){this.key=t,this.Jr=n}static qr(t,n){return Q.comparator(t.key,n.key)||ot(t.Jr,n.Jr)}static Ur(t,n){return ot(t.Jr,n.Jr)||Q.comparator(t.key,n.key)}}/**
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
 */class iV{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Hr=new $t(Wt.qr)}checkEmpty(t){return U.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,i,s){const r=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new _M(r,n,i,s);this.mutationQueue.push(a);for(const l of s)this.Hr=this.Hr.add(new Wt(l.key,r)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return U.resolve(a)}lookupMutationBatch(t,n){return U.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(t,n){const i=n+1,s=this.Xr(i),r=s<0?0:s;return U.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return U.resolve(this.mutationQueue.length===0?fg:this.Yn-1)}getAllMutationBatches(t){return U.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const i=new Wt(n,0),s=new Wt(n,Number.POSITIVE_INFINITY),r=[];return this.Hr.forEachInRange([i,s],a=>{const l=this.Zr(a.Jr);r.push(l)}),U.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,n){let i=new $t(ot);return n.forEach(s=>{const r=new Wt(s,0),a=new Wt(s,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([r,a],l=>{i=i.add(l.Jr)})}),U.resolve(this.Yr(i))}getAllMutationBatchesAffectingQuery(t,n){const i=n.path,s=i.length+1;let r=i;Q.isDocumentKey(r)||(r=r.child(""));const a=new Wt(new Q(r),0);let l=new $t(ot);return this.Hr.forEachWhile(u=>{const h=u.key.path;return!!i.isPrefixOf(h)&&(h.length===s&&(l=l.add(u.Jr)),!0)},a),U.resolve(this.Yr(l))}Yr(t){const n=[];return t.forEach(i=>{const s=this.Zr(i);s!==null&&n.push(s)}),n}removeMutationBatch(t,n){mt(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Hr;return U.forEach(n.mutations,s=>{const r=new Wt(s.key,n.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.Hr=i})}nr(t){}containsKey(t,n){const i=new Wt(n,0),s=this.Hr.firstAfterOrEqual(i);return U.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,U.resolve()}ei(t,n){return this.Xr(t)}Xr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Zr(t){const n=this.Xr(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class sV{constructor(t){this.ti=t,this.docs=function(){return new xt(Q.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const i=n.key,s=this.docs.get(i),r=s?s.size:0,a=this.ti(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:a}),this.size+=a-r,this.indexManager.addToCollectionParentIndex(t,i.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const i=this.docs.get(n);return U.resolve(i?i.document.mutableCopy():pe.newInvalidDocument(n))}getEntries(t,n){let i=ai();return n.forEach(s=>{const r=this.docs.get(s);i=i.insert(s,r?r.document.mutableCopy():pe.newInvalidDocument(s))}),U.resolve(i)}getDocumentsMatchingQuery(t,n,i,s){let r=ai();const a=n.path,l=new Q(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:d}}=u.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||xO(DO(d),i)<=0||(s.has(d.key)||Fc(n,d))&&(r=r.insert(d.key,d.mutableCopy()))}return U.resolve(r)}getAllFromCollectionGroup(t,n,i,s){Y(9500)}ni(t,n){return U.forEach(this.docs,i=>n(i))}newChangeBuffer(t){return new rV(this)}getSize(t){return U.resolve(this.size)}}class rV extends JM{constructor(t){super(),this.Mr=t}applyChanges(t){const n=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?n.push(this.Mr.addEntry(t,s)):this.Mr.removeEntry(i)}),U.waitFor(n)}getFromCache(t,n){return this.Mr.getEntry(t,n)}getAllFromCache(t,n){return this.Mr.getEntries(t,n)}}/**
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
 */class aV{constructor(t){this.persistence=t,this.ri=new Ys(n=>gg(n),pg),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.ii=0,this.si=new Ag,this.targetCount=0,this.oi=Xr._r()}forEachTarget(t,n){return this.ri.forEach((i,s)=>n(s)),U.resolve()}getLastRemoteSnapshotVersion(t){return U.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return U.resolve(this.ii)}allocateTargetId(t){return this.highestTargetId=this.oi.next(),U.resolve(this.highestTargetId)}setTargetsMetadata(t,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.ii&&(this.ii=n),U.resolve()}lr(t){this.ri.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.oi=new Xr(n),this.highestTargetId=n),t.sequenceNumber>this.ii&&(this.ii=t.sequenceNumber)}addTargetData(t,n){return this.lr(n),this.targetCount+=1,U.resolve()}updateTargetData(t,n){return this.lr(n),U.resolve()}removeTargetData(t,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,U.resolve()}removeTargets(t,n,i){let s=0;const r=[];return this.ri.forEach((a,l)=>{l.sequenceNumber<=n&&i.get(l.targetId)===null&&(this.ri.delete(a),r.push(this.removeMatchingKeysForTargetId(t,l.targetId)),s++)}),U.waitFor(r).next(()=>s)}getTargetCount(t){return U.resolve(this.targetCount)}getTargetData(t,n){const i=this.ri.get(n)||null;return U.resolve(i)}addMatchingKeys(t,n,i){return this.si.$r(n,i),U.resolve()}removeMatchingKeys(t,n,i){this.si.Qr(n,i);const s=this.persistence.referenceDelegate,r=[];return s&&n.forEach(a=>{r.push(s.markPotentiallyOrphaned(t,a))}),U.waitFor(r)}removeMatchingKeysForTargetId(t,n){return this.si.Gr(n),U.resolve()}getMatchingKeysForTargetId(t,n){const i=this.si.jr(n);return U.resolve(i)}containsKey(t,n){return U.resolve(this.si.containsKey(n))}}/**
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
 */class AS{constructor(t,n){this._i={},this.overlays={},this.ai=new jc(0),this.ui=!1,this.ui=!0,this.ci=new nV,this.referenceDelegate=t(this),this.li=new aV(this),this.indexManager=new FM,this.remoteDocumentCache=function(s){return new sV(s)}(i=>this.referenceDelegate.hi(i)),this.serializer=new qM(n),this.Pi=new tV(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new eV,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let i=this._i[t.toKey()];return i||(i=new iV(n,this.referenceDelegate),this._i[t.toKey()]=i),i}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(t,n,i){H("MemoryPersistence","Starting transaction:",t);const s=new oV(this.ai.next());return this.referenceDelegate.Ti(),i(s).next(r=>this.referenceDelegate.Ei(s).next(()=>r)).toPromise().then(r=>(s.raiseOnCommittedEvent(),r))}Ii(t,n){return U.or(Object.values(this._i).map(i=>()=>i.containsKey(t,n)))}}class oV extends MO{constructor(t){super(),this.currentSequenceNumber=t}}class bg{constructor(t){this.persistence=t,this.Ri=new Ag,this.Ai=null}static Vi(t){return new bg(t)}get di(){if(this.Ai)return this.Ai;throw Y(60996)}addReference(t,n,i){return this.Ri.addReference(i,n),this.di.delete(i.toString()),U.resolve()}removeReference(t,n,i){return this.Ri.removeReference(i,n),this.di.add(i.toString()),U.resolve()}markPotentiallyOrphaned(t,n){return this.di.add(n.toString()),U.resolve()}removeTarget(t,n){this.Ri.Gr(n.targetId).forEach(s=>this.di.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(t,n.targetId).next(s=>{s.forEach(r=>this.di.add(r.toString()))}).next(()=>i.removeTargetData(t,n))}Ti(){this.Ai=new Set}Ei(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return U.forEach(this.di,i=>{const s=Q.fromPath(i);return this.mi(t,s).next(r=>{r||n.removeEntry(s,J.min())})}).next(()=>(this.Ai=null,n.apply(t)))}updateLimboDocument(t,n){return this.mi(t,n).next(i=>{i?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(t){return 0}mi(t,n){return U.or([()=>U.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ii(t,n)])}}class lc{constructor(t,n){this.persistence=t,this.fi=new Ys(i=>LO(i.path),(i,s)=>i.isEqual(s)),this.garbageCollector=$M(this,n)}static Vi(t,n){return new lc(t,n)}Ti(){}Ei(t){return U.resolve()}forEachTarget(t,n){return this.persistence.getTargetCache().forEachTarget(t,n)}dr(t){const n=this.pr(t);return this.persistence.getTargetCache().getTargetCount(t).next(i=>n.next(s=>i+s))}pr(t){let n=0;return this.mr(t,i=>{n++}).next(()=>n)}mr(t,n){return U.forEach(this.fi,(i,s)=>this.wr(t,i,s).next(r=>r?U.resolve():n(s)))}removeTargets(t,n,i){return this.persistence.getTargetCache().removeTargets(t,n,i)}removeOrphanedDocuments(t,n){let i=0;const s=this.persistence.getRemoteDocumentCache(),r=s.newChangeBuffer();return s.ni(t,a=>this.wr(t,a,n).next(l=>{l||(i++,r.removeEntry(a,J.min()))})).next(()=>r.apply(t)).next(()=>i)}markPotentiallyOrphaned(t,n){return this.fi.set(n,t.currentSequenceNumber),U.resolve()}removeTarget(t,n){const i=n.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,i)}addReference(t,n,i){return this.fi.set(i,t.currentSequenceNumber),U.resolve()}removeReference(t,n,i){return this.fi.set(i,t.currentSequenceNumber),U.resolve()}updateLimboDocument(t,n){return this.fi.set(n,t.currentSequenceNumber),U.resolve()}hi(t){let n=t.key.toString().length;return t.isFoundDocument()&&(n+=cu(t.data.value)),n}wr(t,n,i){return U.or([()=>this.persistence.Ii(t,n),()=>this.persistence.getTargetCache().containsKey(t,n),()=>{const s=this.fi.get(n);return U.resolve(s!==void 0&&s>i)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class Sg{constructor(t,n,i,s){this.targetId=t,this.fromCache=n,this.Ts=i,this.Es=s}static Is(t,n){let i=lt(),s=lt();for(const r of n.docChanges)switch(r.type){case 0:i=i.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new Sg(t,n.fromCache,i,s)}}/**
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
 */class lV{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class uV{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return C2()?8:VO(ye())>0?6:4}()}initialize(t,n){this.fs=t,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(t,n,i,s){const r={result:null};return this.gs(t,n).next(a=>{r.result=a}).next(()=>{if(!r.result)return this.ps(t,n,s,i).next(a=>{r.result=a})}).next(()=>{if(r.result)return;const a=new lV;return this.ys(t,n,a).next(l=>{if(r.result=l,this.As)return this.ws(t,n,a,l.size)})}).next(()=>r.result)}ws(t,n,i,s){return i.documentReadCount<this.Vs?(sr()<=at.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",rr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),U.resolve()):(sr()<=at.DEBUG&&H("QueryEngine","Query:",rr(n),"scans",i.documentReadCount,"local documents and returns",s,"documents as results."),i.documentReadCount>this.ds*s?(sr()<=at.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",rr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Nn(n))):U.resolve())}gs(t,n){if(vv(n))return U.resolve(null);let i=Nn(n);return this.indexManager.getIndexType(t,i).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Pd(n,null,"F"),i=Nn(n)),this.indexManager.getDocumentsMatchingTarget(t,i).next(r=>{const a=lt(...r);return this.fs.getDocuments(t,a).next(l=>this.indexManager.getMinOffset(t,i).next(u=>{const h=this.Ss(n,l);return this.bs(n,h,a,u.readTime)?this.gs(t,Pd(n,null,"F")):this.Ds(t,h,n,u)}))})))}ps(t,n,i,s){return vv(n)||s.isEqual(J.min())?U.resolve(null):this.fs.getDocuments(t,i).next(r=>{const a=this.Ss(n,r);return this.bs(n,a,i,s)?U.resolve(null):(sr()<=at.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),rr(n)),this.Ds(t,a,n,NO(s,Oo)).next(l=>l))})}Ss(t,n){let i=new $t(Wb(t));return n.forEach((s,r)=>{Fc(t,r)&&(i=i.add(r))}),i}bs(t,n,i,s){if(t.limit===null)return!1;if(i.size!==n.size)return!0;const r=t.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}ys(t,n,i){return sr()<=at.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",rr(n)),this.fs.getDocumentsMatchingQuery(t,n,ts.min(),i)}Ds(t,n,i,s){return this.fs.getDocumentsMatchingQuery(t,i,s).next(r=>(n.forEach(a=>{r=r.insert(a.key,a)}),r))}}/**
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
 */const wg="LocalStore",cV=3e8;class hV{constructor(t,n,i,s){this.persistence=t,this.Cs=n,this.serializer=s,this.vs=new xt(ot),this.Fs=new Ys(r=>gg(r),pg),this.Ms=new Map,this.xs=t.getRemoteDocumentCache(),this.li=t.getTargetCache(),this.Pi=t.getBundleCache(),this.Os(i)}Os(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new WM(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.vs))}}function fV(e,t,n,i){return new hV(e,t,n,i)}async function bS(e,t){const n=Z(e);return await n.persistence.runTransaction("Handle user change","readonly",i=>{let s;return n.mutationQueue.getAllMutationBatches(i).next(r=>(s=r,n.Os(t),n.mutationQueue.getAllMutationBatches(i))).next(r=>{const a=[],l=[];let u=lt();for(const h of s){a.push(h.batchId);for(const d of h.mutations)u=u.add(d.key)}for(const h of r){l.push(h.batchId);for(const d of h.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(i,u).next(h=>({Ns:h,removedBatchIds:a,addedBatchIds:l}))})})}function dV(e,t){const n=Z(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=t.batch.keys(),r=n.xs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,d){const m=h.batch,g=m.keys();let T=U.resolve();return g.forEach(D=>{T=T.next(()=>d.getEntry(u,D)).next(V=>{const P=h.docVersions.get(D);mt(P!==null,48541),V.version.compareTo(P)<0&&(m.applyToRemoteDocument(V,h),V.isValidDocument()&&(V.setReadTime(h.commitVersion),d.addEntry(V)))})}),T.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,i,t,r).next(()=>r.apply(i)).next(()=>n.mutationQueue.performConsistencyCheck(i)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(i,s,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(l){let u=lt();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(t))).next(()=>n.localDocuments.getDocuments(i,s))})}function SS(e){const t=Z(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.li.getLastRemoteSnapshotVersion(n))}function mV(e,t){const n=Z(e),i=t.snapshotVersion;let s=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const a=n.xs.newChangeBuffer({trackRemovals:!0});s=n.vs;const l=[];t.targetChanges.forEach((d,m)=>{const g=s.get(m);if(!g)return;l.push(n.li.removeMatchingKeys(r,d.removedDocuments,m).next(()=>n.li.addMatchingKeys(r,d.addedDocuments,m)));let T=g.withSequenceNumber(r.currentSequenceNumber);t.targetMismatches.get(m)!==null?T=T.withResumeToken(ce.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):d.resumeToken.approximateByteSize()>0&&(T=T.withResumeToken(d.resumeToken,i)),s=s.insert(m,T),function(V,P,w){return V.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=cV?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(g,T,d)&&l.push(n.li.updateTargetData(r,T))});let u=ai(),h=lt();if(t.documentUpdates.forEach(d=>{t.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(r,d))}),l.push(gV(r,a,t.documentUpdates).next(d=>{u=d.Bs,h=d.Ls})),!i.isEqual(J.min())){const d=n.li.getLastRemoteSnapshotVersion(r).next(m=>n.li.setTargetsMetadata(r,r.currentSequenceNumber,i));l.push(d)}return U.waitFor(l).next(()=>a.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,u,h)).next(()=>u)}).then(r=>(n.vs=s,r))}function gV(e,t,n){let i=lt(),s=lt();return n.forEach(r=>i=i.add(r)),t.getEntries(e,i).next(r=>{let a=ai();return n.forEach((l,u)=>{const h=r.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(J.min())?(t.removeEntry(l,u.readTime),a=a.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(t.addEntry(u),a=a.insert(l,u)):H(wg,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Bs:a,Ls:s}})}function pV(e,t){const n=Z(e);return n.persistence.runTransaction("Get next mutation batch","readonly",i=>(t===void 0&&(t=fg),n.mutationQueue.getNextMutationBatchAfterBatchId(i,t)))}function yV(e,t){const n=Z(e);return n.persistence.runTransaction("Allocate target","readwrite",i=>{let s;return n.li.getTargetData(i,t).next(r=>r?(s=r,U.resolve(s)):n.li.allocateTargetId(i).next(a=>(s=new Oi(t,a,"TargetPurposeListen",i.currentSequenceNumber),n.li.addTargetData(i,s).next(()=>s))))}).then(i=>{const s=n.vs.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.vs=n.vs.insert(i.targetId,i),n.Fs.set(t,i.targetId)),i})}async function Hd(e,t,n){const i=Z(e),s=i.vs.get(t),r=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",r,a=>i.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!ha(a))throw a;H(wg,`Failed to update sequence numbers for target ${t}: ${a}`)}i.vs=i.vs.remove(t),i.Fs.delete(s.target)}function Ov(e,t,n){const i=Z(e);let s=J.min(),r=lt();return i.persistence.runTransaction("Execute query","readwrite",a=>function(u,h,d){const m=Z(u),g=m.Fs.get(d);return g!==void 0?U.resolve(m.vs.get(g)):m.li.getTargetData(h,d)}(i,a,Nn(t)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,i.li.getMatchingKeysForTargetId(a,l.targetId).next(u=>{r=u})}).next(()=>i.Cs.getDocumentsMatchingQuery(a,t,n?s:J.min(),n?r:lt())).next(l=>(_V(i,iM(t),l),{documents:l,ks:r})))}function _V(e,t,n){let i=e.Ms.get(t)||J.min();n.forEach((s,r)=>{r.readTime.compareTo(i)>0&&(i=r.readTime)}),e.Ms.set(t,i)}class Mv{constructor(){this.activeTargetIds=uM()}Qs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ws(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class vV{constructor(){this.vo=new Mv,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,i){}addLocalQueryTarget(t,n=!0){return n&&this.vo.Qs(t),this.Fo[t]||"not-current"}updateQueryState(t,n,i){this.Fo[t]=n}removeLocalQueryTarget(t){this.vo.Gs(t)}isLocalQueryTarget(t){return this.vo.activeTargetIds.has(t)}clearQueryState(t){delete this.Fo[t]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(t){return this.vo.activeTargetIds.has(t)}start(){return this.vo=new Mv,Promise.resolve()}handleUserChange(t,n,i){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class TV{Mo(t){}shutdown(){}}/**
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
 */const Vv="ConnectivityMonitor";class kv{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(t){this.Lo.push(t)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){H(Vv,"Network connectivity changed: AVAILABLE");for(const t of this.Lo)t(0)}Bo(){H(Vv,"Network connectivity changed: UNAVAILABLE");for(const t of this.Lo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ql=null;function Fd(){return ql===null?ql=function(){return 268435456+Math.round(2147483648*Math.random())}():ql++,"0x"+ql.toString(16)}/**
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
 */const vf="RestConnection",EV={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class AV{get qo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ko=n+"://"+t.host,this.Uo=`projects/${i}/databases/${s}`,this.$o=this.databaseId.database===ec?`project_id=${i}`:`project_id=${i}&database_id=${s}`}Wo(t,n,i,s,r){const a=Fd(),l=this.Qo(t,n.toUriEncodedString());H(vf,`Sending RPC '${t}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,s,r);const{host:h}=new URL(l),d=Jo(h);return this.zo(t,l,u,i,d).then(m=>(H(vf,`Received RPC '${t}' ${a}: `,m),m),m=>{throw zs(vf,`RPC '${t}' ${a} failed with error: `,m,"url: ",l,"request:",i),m})}jo(t,n,i,s,r,a){return this.Wo(t,n,i,s,r)}Go(t,n,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ua}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,r)=>t[r]=s),i&&i.headers.forEach((s,r)=>t[r]=s)}Qo(t,n){const i=EV[t];let s=`${this.Ko}/v1/${n}:${i}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
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
 */class bV{constructor(t){this.Jo=t.Jo,this.Ho=t.Ho}Zo(t){this.Xo=t}Yo(t){this.e_=t}t_(t){this.n_=t}onMessage(t){this.r_=t}close(){this.Ho()}send(t){this.Jo(t)}i_(){this.Xo()}s_(){this.e_()}o_(t){this.n_(t)}__(t){this.r_(t)}}/**
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
 */const me="WebChannelConnection",Pa=(e,t,n)=>{e.listen(t,i=>{try{n(i)}catch(s){setTimeout(()=>{throw s},0)}})};class Or extends AV{constructor(t){super(t),this.a_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}static u_(){if(!Or.c_){const t=Nb();Pa(t,Cb.STAT_EVENT,n=>{n.stat===xd.PROXY?H(me,"STAT_EVENT: detected buffering proxy"):n.stat===xd.NOPROXY&&H(me,"STAT_EVENT: detected no buffering proxy")}),Or.c_=!0}}zo(t,n,i,s,r){const a=Fd();return new Promise((l,u)=>{const h=new Ib;h.setWithCredentials(!0),h.listenOnce(Rb.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case uu.NO_ERROR:const m=h.getResponseJson();H(me,`XHR for RPC '${t}' ${a} received:`,JSON.stringify(m)),l(m);break;case uu.TIMEOUT:H(me,`RPC '${t}' ${a} timed out`),u(new q(L.DEADLINE_EXCEEDED,"Request time out"));break;case uu.HTTP_ERROR:const g=h.getStatus();if(H(me,`RPC '${t}' ${a} failed with status:`,g,"response text:",h.getResponseText()),g>0){let T=h.getResponseJson();Array.isArray(T)&&(T=T[0]);const D=T==null?void 0:T.error;if(D&&D.status&&D.message){const V=function(w){const E=w.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(E)>=0?E:L.UNKNOWN}(D.status);u(new q(V,D.message))}else u(new q(L.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new q(L.UNAVAILABLE,"Connection failed."));break;default:Y(9055,{l_:t,streamId:a,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{H(me,`RPC '${t}' ${a} completed.`)}});const d=JSON.stringify(s);H(me,`RPC '${t}' ${a} sending request:`,s),h.send(n,"POST",d,i,15)})}T_(t,n,i){const s=Fd(),r=[this.Ko,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,n,i),l.encodeInitMessageHeaders=!0;const h=r.join("");H(me,`Creating RPC '${t}' stream ${s}: ${h}`,l);const d=a.createWebChannel(h,l);this.E_(d);let m=!1,g=!1;const T=new bV({Jo:D=>{g?H(me,`Not sending because RPC '${t}' stream ${s} is closed:`,D):(m||(H(me,`Opening RPC '${t}' stream ${s} transport.`),d.open(),m=!0),H(me,`RPC '${t}' stream ${s} sending:`,D),d.send(D))},Ho:()=>d.close()});return Pa(d,Ga.EventType.OPEN,()=>{g||(H(me,`RPC '${t}' stream ${s} transport opened.`),T.i_())}),Pa(d,Ga.EventType.CLOSE,()=>{g||(g=!0,H(me,`RPC '${t}' stream ${s} transport closed`),T.o_(),this.I_(d))}),Pa(d,Ga.EventType.ERROR,D=>{g||(g=!0,zs(me,`RPC '${t}' stream ${s} transport errored. Name:`,D.name,"Message:",D.message),T.o_(new q(L.UNAVAILABLE,"The operation could not be completed")))}),Pa(d,Ga.EventType.MESSAGE,D=>{var V;if(!g){const P=D.data[0];mt(!!P,16349);const w=P,E=(w==null?void 0:w.error)||((V=w[0])==null?void 0:V.error);if(E){H(me,`RPC '${t}' stream ${s} received error:`,E);const R=E.status;let x=function(v){const p=jt[v];if(p!==void 0)return cS(p)}(R),z=E.message;R==="NOT_FOUND"&&z.includes("database")&&z.includes("does not exist")&&z.includes(this.databaseId.database)&&zs(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),x===void 0&&(x=L.INTERNAL,z="Unknown error status: "+R+" with message "+E.message),g=!0,T.o_(new q(x,z)),d.close()}else H(me,`RPC '${t}' stream ${s} received:`,P),T.__(P)}}),Or.u_(),setTimeout(()=>{T.s_()},0),T}terminate(){this.a_.forEach(t=>t.close()),this.a_=[]}E_(t){this.a_.push(t)}I_(t){this.a_=this.a_.filter(n=>n===t)}Go(t,n,i){super.Go(t,n,i),this.databaseInfo.apiKey&&(t["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Db()}}/**
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
 */function SV(e){return new Or(e)}function Tf(){return typeof document<"u"?document:null}/**
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
 */function Xc(e){return new CM(e,!0)}/**
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
 */Or.c_=!1;class wS{constructor(t,n,i=1e3,s=1.5,r=6e4){this.Ci=t,this.timerId=n,this.R_=i,this.A_=s,this.V_=r,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(t){this.cancel();const n=Math.floor(this.d_+this.y_()),i=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-i);s>0&&H("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),t())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const Lv="PersistentStream";class IS{constructor(t,n,i,s,r,a,l,u){this.Ci=t,this.S_=i,this.b_=s,this.connection=r,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new wS(t,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(t){this.K_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,n){this.K_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(ri(n.toString()),ri("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.t_(n)}W_(){}auth(){this.state=1;const t=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.D_===n&&this.G_(i,s)},i=>{t(()=>{const s=new q(L.UNKNOWN,"Fetching auth token failed: "+i.message);return this.z_(s)})})}G_(t,n){const i=this.Q_(this.D_);this.stream=this.j_(t,n),this.stream.Zo(()=>{i(()=>this.listener.Zo())}),this.stream.Yo(()=>{i(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(s=>{i(()=>this.z_(s))}),this.stream.onMessage(s=>{i(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(t){return H(Lv,`close with error: ${t}`),this.stream=null,this.close(4,t)}Q_(t){return n=>{this.Ci.enqueueAndForget(()=>this.D_===t?n():(H(Lv,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class wV extends IS{constructor(t,n,i,s,r,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,i,s,a),this.serializer=r}j_(t,n){return this.connection.T_("Listen",t,n)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const n=xM(this.serializer,t),i=function(r){if(!("targetChange"in r))return J.min();const a=r.targetChange;return a.targetIds&&a.targetIds.length?J.min():a.readTime?Dn(a.readTime):J.min()}(t);return this.listener.H_(n,i)}Z_(t){const n={};n.database=qd(this.serializer),n.addTarget=function(r,a){let l;const u=a.target;if(l=Ld(u)?{documents:VM(r,u)}:{query:kM(r,u).ft},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=dS(r,a.resumeToken);const h=zd(r,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(J.min())>0){l.readTime=oc(r,a.snapshotVersion.toTimestamp());const h=zd(r,a.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,t);const i=UM(this.serializer,t);i&&(n.labels=i),this.q_(n)}X_(t){const n={};n.database=qd(this.serializer),n.removeTarget=t,this.q_(n)}}class IV extends IS{constructor(t,n,i,s,r,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,i,s,a),this.serializer=r}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(t,n){return this.connection.T_("Write",t,n)}J_(t){return mt(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,mt(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){mt(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const n=MM(t.writeResults,t.commitTime),i=Dn(t.commitTime);return this.listener.na(i,n)}ra(){const t={};t.database=qd(this.serializer),this.q_(t)}ea(t){const n={streamToken:this.lastStreamToken,writes:t.map(i=>OM(this.serializer,i))};this.q_(n)}}/**
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
 */class RV{}class CV extends RV{constructor(t,n,i,s){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=i,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new q(L.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(t,n,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,a])=>this.connection.Wo(t,jd(n,i),s,r,a)).catch(r=>{throw r.name==="FirebaseError"?(r.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new q(L.UNKNOWN,r.toString())})}jo(t,n,i,s,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.jo(t,jd(n,i),s,a,l,r)).catch(a=>{throw a.name==="FirebaseError"?(a.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new q(L.UNKNOWN,a.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function NV(e,t,n,i){return new CV(e,t,n,i)}class DV{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(ri(n),this.aa=!1):H("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const js="RemoteStore";class xV{constructor(t,n,i,s,r){this.localStore=t,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=r,this.Aa.Mo(a=>{i.enqueueAndForget(async()=>{Xs(this)&&(H(js,"Restarting streams for network reachability change."),await async function(u){const h=Z(u);h.Ia.add(4),await rl(h),h.Va.set("Unknown"),h.Ia.delete(4),await $c(h)}(this))})}),this.Va=new DV(i,s)}}async function $c(e){if(Xs(e))for(const t of e.Ra)await t(!0)}async function rl(e){for(const t of e.Ra)await t(!1)}function RS(e,t){const n=Z(e);n.Ea.has(t.targetId)||(n.Ea.set(t.targetId,t),Ng(n)?Cg(n):fa(n).O_()&&Rg(n,t))}function Ig(e,t){const n=Z(e),i=fa(n);n.Ea.delete(t),i.O_()&&CS(n,t),n.Ea.size===0&&(i.O_()?i.L_():Xs(n)&&n.Va.set("Unknown"))}function Rg(e,t){if(e.da.$e(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(J.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}fa(e).Z_(t)}function CS(e,t){e.da.$e(t),fa(e).X_(t)}function Cg(e){e.da=new SM({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),At:t=>e.Ea.get(t)||null,ht:()=>e.datastore.serializer.databaseId}),fa(e).start(),e.Va.ua()}function Ng(e){return Xs(e)&&!fa(e).x_()&&e.Ea.size>0}function Xs(e){return Z(e).Ia.size===0}function NS(e){e.da=void 0}async function OV(e){e.Va.set("Online")}async function MV(e){e.Ea.forEach((t,n)=>{Rg(e,t)})}async function VV(e,t){NS(e),Ng(e)?(e.Va.ha(t),Cg(e)):e.Va.set("Unknown")}async function kV(e,t,n){if(e.Va.set("Online"),t instanceof fS&&t.state===2&&t.cause)try{await async function(s,r){const a=r.cause;for(const l of r.targetIds)s.Ea.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.Ea.delete(l),s.da.removeTarget(l))}(e,t)}catch(i){H(js,"Failed to remove targets %s: %s ",t.targetIds.join(","),i),await uc(e,i)}else if(t instanceof du?e.da.Xe(t):t instanceof hS?e.da.st(t):e.da.tt(t),!n.isEqual(J.min()))try{const i=await SS(e.localStore);n.compareTo(i)>=0&&await function(r,a){const l=r.da.Tt(a);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const d=r.Ea.get(h);d&&r.Ea.set(h,d.withResumeToken(u.resumeToken,a))}}),l.targetMismatches.forEach((u,h)=>{const d=r.Ea.get(u);if(!d)return;r.Ea.set(u,d.withResumeToken(ce.EMPTY_BYTE_STRING,d.snapshotVersion)),CS(r,u);const m=new Oi(d.target,u,h,d.sequenceNumber);Rg(r,m)}),r.remoteSyncer.applyRemoteEvent(l)}(e,n)}catch(i){H(js,"Failed to raise snapshot:",i),await uc(e,i)}}async function uc(e,t,n){if(!ha(t))throw t;e.Ia.add(1),await rl(e),e.Va.set("Offline"),n||(n=()=>SS(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{H(js,"Retrying IndexedDB access"),await n(),e.Ia.delete(1),await $c(e)})}function DS(e,t){return t().catch(n=>uc(e,n,t))}async function Jc(e){const t=Z(e),n=ss(t);let i=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:fg;for(;LV(t);)try{const s=await pV(t.localStore,i);if(s===null){t.Ta.length===0&&n.L_();break}i=s.batchId,UV(t,s)}catch(s){await uc(t,s)}xS(t)&&OS(t)}function LV(e){return Xs(e)&&e.Ta.length<10}function UV(e,t){e.Ta.push(t);const n=ss(e);n.O_()&&n.Y_&&n.ea(t.mutations)}function xS(e){return Xs(e)&&!ss(e).x_()&&e.Ta.length>0}function OS(e){ss(e).start()}async function PV(e){ss(e).ra()}async function zV(e){const t=ss(e);for(const n of e.Ta)t.ea(n.mutations)}async function jV(e,t,n){const i=e.Ta.shift(),s=vg.from(i,t,n);await DS(e,()=>e.remoteSyncer.applySuccessfulWrite(s)),await Jc(e)}async function BV(e,t){t&&ss(e).Y_&&await async function(i,s){if(function(a){return EM(a)&&a!==L.ABORTED}(s.code)){const r=i.Ta.shift();ss(i).B_(),await DS(i,()=>i.remoteSyncer.rejectFailedWrite(r.batchId,s)),await Jc(i)}}(e,t),xS(e)&&OS(e)}async function Uv(e,t){const n=Z(e);n.asyncQueue.verifyOperationInProgress(),H(js,"RemoteStore received new credentials");const i=Xs(n);n.Ia.add(3),await rl(n),i&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Ia.delete(3),await $c(n)}async function qV(e,t){const n=Z(e);t?(n.Ia.delete(2),await $c(n)):t||(n.Ia.add(2),await rl(n),n.Va.set("Unknown"))}function fa(e){return e.ma||(e.ma=function(n,i,s){const r=Z(n);return r.sa(),new wV(i,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(e.datastore,e.asyncQueue,{Zo:OV.bind(null,e),Yo:MV.bind(null,e),t_:VV.bind(null,e),H_:kV.bind(null,e)}),e.Ra.push(async t=>{t?(e.ma.B_(),Ng(e)?Cg(e):e.Va.set("Unknown")):(await e.ma.stop(),NS(e))})),e.ma}function ss(e){return e.fa||(e.fa=function(n,i,s){const r=Z(n);return r.sa(),new IV(i,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(e.datastore,e.asyncQueue,{Zo:()=>Promise.resolve(),Yo:PV.bind(null,e),t_:BV.bind(null,e),ta:zV.bind(null,e),na:jV.bind(null,e)}),e.Ra.push(async t=>{t?(e.fa.B_(),await Jc(e)):(await e.fa.stop(),e.Ta.length>0&&(H(js,`Stopping write stream with ${e.Ta.length} pending writes`),e.Ta=[]))})),e.fa}/**
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
 */class Dg{constructor(t,n,i,s,r){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new Cs,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,i,s,r){const a=Date.now()+i,l=new Dg(t,n,a,s,r);return l.start(i),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(L.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function xg(e,t){if(ri("AsyncQueue",`${t}: ${e}`),ha(e))return new q(L.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class Mr{static emptySet(t){return new Mr(t.comparator)}constructor(t){this.comparator=t?(n,i)=>t(n,i)||Q.comparator(n.key,i.key):(n,i)=>Q.comparator(n.key,i.key),this.keyedMap=Ka(),this.sortedSet=new xt(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,i)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Mr)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),i=t.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,r=i.getNext().key;if(!s.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const i=new Mr;return i.comparator=this.comparator,i.keyedMap=t,i.sortedSet=n,i}}/**
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
 */class Pv{constructor(){this.ga=new xt(Q.comparator)}track(t){const n=t.doc.key,i=this.ga.get(n);i?t.type!==0&&i.type===3?this.ga=this.ga.insert(n,t):t.type===3&&i.type!==1?this.ga=this.ga.insert(n,{type:i.type,doc:t.doc}):t.type===2&&i.type===2?this.ga=this.ga.insert(n,{type:2,doc:t.doc}):t.type===2&&i.type===0?this.ga=this.ga.insert(n,{type:0,doc:t.doc}):t.type===1&&i.type===0?this.ga=this.ga.remove(n):t.type===1&&i.type===2?this.ga=this.ga.insert(n,{type:1,doc:i.doc}):t.type===0&&i.type===1?this.ga=this.ga.insert(n,{type:2,doc:t.doc}):Y(63341,{Vt:t,pa:i}):this.ga=this.ga.insert(n,t)}ya(){const t=[];return this.ga.inorderTraversal((n,i)=>{t.push(i)}),t}}class $r{constructor(t,n,i,s,r,a,l,u,h){this.query=t,this.docs=n,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=r,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(t,n,i,s,r){const a=[];return n.forEach(l=>{a.push({type:0,doc:l})}),new $r(t,n,Mr.emptySet(n),a,i,s,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Hc(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,i=t.docChanges;if(n.length!==i.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==i[s].type||!n[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
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
 */class HV{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(t=>t.Da())}}class FV{constructor(){this.queries=zv(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,i){const s=Z(n),r=s.queries;s.queries=zv(),r.forEach((a,l)=>{for(const u of l.Sa)u.onError(i)})})(this,new q(L.ABORTED,"Firestore shutting down"))}}function zv(){return new Ys(e=>Zb(e),Hc)}async function GV(e,t){const n=Z(e);let i=3;const s=t.query;let r=n.queries.get(s);r?!r.ba()&&t.Da()&&(i=2):(r=new HV,i=t.Da()?0:1);try{switch(i){case 0:r.wa=await n.onListen(s,!0);break;case 1:r.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(a){const l=xg(a,`Initialization of query '${rr(t.query)}' failed`);return void t.onError(l)}n.queries.set(s,r),r.Sa.push(t),t.va(n.onlineState),r.wa&&t.Fa(r.wa)&&Og(n)}async function KV(e,t){const n=Z(e),i=t.query;let s=3;const r=n.queries.get(i);if(r){const a=r.Sa.indexOf(t);a>=0&&(r.Sa.splice(a,1),r.Sa.length===0?s=t.Da()?0:1:!r.ba()&&t.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(i),n.onUnlisten(i,!0);case 1:return n.queries.delete(i),n.onUnlisten(i,!1);case 2:return n.onLastRemoteStoreUnlisten(i);default:return}}function QV(e,t){const n=Z(e);let i=!1;for(const s of t){const r=s.query,a=n.queries.get(r);if(a){for(const l of a.Sa)l.Fa(s)&&(i=!0);a.wa=s}}i&&Og(n)}function YV(e,t,n){const i=Z(e),s=i.queries.get(t);if(s)for(const r of s.Sa)r.onError(n);i.queries.delete(t)}function Og(e){e.Ca.forEach(t=>{t.next()})}var Gd,jv;(jv=Gd||(Gd={})).Ma="default",jv.Cache="cache";class XV{constructor(t,n,i){this.query=t,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=i||{}}Fa(t){if(!this.options.includeMetadataChanges){const i=[];for(const s of t.docChanges)s.type!==3&&i.push(s);t=new $r(t.query,t.docs,t.oldDocs,i,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),n=!0):this.La(t,this.onlineState)&&(this.ka(t),n=!0),this.Na=t,n}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),n=!0),n}La(t,n){if(!t.fromCache||!this.Da())return!0;const i=n!=="Offline";return(!this.options.qa||!i)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(t){t=$r.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==Gd.Cache}}/**
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
 */class MS{constructor(t){this.key=t}}class VS{constructor(t){this.key=t}}class $V{constructor(t,n){this.query=t,this.Za=n,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=lt(),this.mutatedKeys=lt(),this.eu=Wb(t),this.tu=new Mr(this.eu)}get nu(){return this.Za}ru(t,n){const i=n?n.iu:new Pv,s=n?n.tu:this.tu;let r=n?n.mutatedKeys:this.mutatedKeys,a=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((d,m)=>{const g=s.get(d),T=Fc(this.query,m)?m:null,D=!!g&&this.mutatedKeys.has(g.key),V=!!T&&(T.hasLocalMutations||this.mutatedKeys.has(T.key)&&T.hasCommittedMutations);let P=!1;g&&T?g.data.isEqual(T.data)?D!==V&&(i.track({type:3,doc:T}),P=!0):this.su(g,T)||(i.track({type:2,doc:T}),P=!0,(u&&this.eu(T,u)>0||h&&this.eu(T,h)<0)&&(l=!0)):!g&&T?(i.track({type:0,doc:T}),P=!0):g&&!T&&(i.track({type:1,doc:g}),P=!0,(u||h)&&(l=!0)),P&&(T?(a=a.add(T),r=V?r.add(d):r.delete(d)):(a=a.delete(d),r=r.delete(d)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const d=this.query.limitType==="F"?a.last():a.first();a=a.delete(d.key),r=r.delete(d.key),i.track({type:1,doc:d})}return{tu:a,iu:i,bs:l,mutatedKeys:r}}su(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,i,s){const r=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const a=t.iu.ya();a.sort((d,m)=>function(T,D){const V=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y(20277,{Vt:P})}};return V(T)-V(D)}(d.type,m.type)||this.eu(d.doc,m.doc)),this.ou(i),s=s??!1;const l=n&&!s?this._u():[],u=this.Ya.size===0&&this.current&&!s?1:0,h=u!==this.Xa;return this.Xa=u,a.length!==0||h?{snapshot:new $r(this.query,t.tu,r,a,t.mutatedKeys,u===0,h,!1,!!i&&i.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Pv,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(t){return!this.Za.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach(n=>this.Za=this.Za.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.Za=this.Za.delete(n)),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Ya;this.Ya=lt(),this.tu.forEach(i=>{this.uu(i.key)&&(this.Ya=this.Ya.add(i.key))});const n=[];return t.forEach(i=>{this.Ya.has(i)||n.push(new VS(i))}),this.Ya.forEach(i=>{t.has(i)||n.push(new MS(i))}),n}cu(t){this.Za=t.ks,this.Ya=lt();const n=this.ru(t.documents);return this.applyChanges(n,!0)}lu(){return $r.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const Mg="SyncEngine";class JV{constructor(t,n,i){this.query=t,this.targetId=n,this.view=i}}class ZV{constructor(t){this.key=t,this.hu=!1}}class WV{constructor(t,n,i,s,r,a){this.localStore=t,this.remoteStore=n,this.eventManager=i,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new Ys(l=>Zb(l),Hc),this.Eu=new Map,this.Iu=new Set,this.Ru=new xt(Q.comparator),this.Au=new Map,this.Vu=new Ag,this.du={},this.mu=new Map,this.fu=Xr.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function t4(e,t,n=!0){const i=jS(e);let s;const r=i.Tu.get(t);return r?(i.sharedClientState.addLocalQueryTarget(r.targetId),s=r.view.lu()):s=await kS(i,t,n,!0),s}async function e4(e,t){const n=jS(e);await kS(n,t,!0,!1)}async function kS(e,t,n,i){const s=await yV(e.localStore,Nn(t)),r=s.targetId,a=e.sharedClientState.addLocalQueryTarget(r,n);let l;return i&&(l=await n4(e,t,r,a==="current",s.resumeToken)),e.isPrimaryClient&&n&&RS(e.remoteStore,s),l}async function n4(e,t,n,i,s){e.pu=(m,g,T)=>async function(V,P,w,E){let R=P.view.ru(w);R.bs&&(R=await Ov(V.localStore,P.query,!1).then(({documents:v})=>P.view.ru(v,R)));const x=E&&E.targetChanges.get(P.targetId),z=E&&E.targetMismatches.get(P.targetId)!=null,G=P.view.applyChanges(R,V.isPrimaryClient,x,z);return qv(V,P.targetId,G.au),G.snapshot}(e,m,g,T);const r=await Ov(e.localStore,t,!0),a=new $V(t,r.ks),l=a.ru(r.documents),u=sl.createSynthesizedTargetChangeForCurrentChange(n,i&&e.onlineState!=="Offline",s),h=a.applyChanges(l,e.isPrimaryClient,u);qv(e,n,h.au);const d=new JV(t,n,a);return e.Tu.set(t,d),e.Eu.has(n)?e.Eu.get(n).push(t):e.Eu.set(n,[t]),h.snapshot}async function i4(e,t,n){const i=Z(e),s=i.Tu.get(t),r=i.Eu.get(s.targetId);if(r.length>1)return i.Eu.set(s.targetId,r.filter(a=>!Hc(a,t))),void i.Tu.delete(t);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(s.targetId),i.sharedClientState.isActiveQueryTarget(s.targetId)||await Hd(i.localStore,s.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(s.targetId),n&&Ig(i.remoteStore,s.targetId),Kd(i,s.targetId)}).catch(ca)):(Kd(i,s.targetId),await Hd(i.localStore,s.targetId,!0))}async function s4(e,t){const n=Z(e),i=n.Tu.get(t),s=n.Eu.get(i.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(i.targetId),Ig(n.remoteStore,i.targetId))}async function r4(e,t,n){const i=f4(e);try{const s=await function(a,l){const u=Z(a),h=Rt.now(),d=l.reduce((T,D)=>T.add(D.key),lt());let m,g;return u.persistence.runTransaction("Locally write mutations","readwrite",T=>{let D=ai(),V=lt();return u.xs.getEntries(T,d).next(P=>{D=P,D.forEach((w,E)=>{E.isValidDocument()||(V=V.add(w))})}).next(()=>u.localDocuments.getOverlayedDocuments(T,D)).next(P=>{m=P;const w=[];for(const E of l){const R=pM(E,m.get(E.key).overlayedDocument);R!=null&&w.push(new us(E.key,R,Fb(R.value.mapValue),Ye.exists(!0)))}return u.mutationQueue.addMutationBatch(T,h,w,l)}).next(P=>{g=P;const w=P.applyToLocalDocumentSet(m,V);return u.documentOverlayCache.saveOverlays(T,P.batchId,w)})}).then(()=>({batchId:g.batchId,changes:eS(m)}))}(i.localStore,t);i.sharedClientState.addPendingMutation(s.batchId),function(a,l,u){let h=a.du[a.currentUser.toKey()];h||(h=new xt(ot)),h=h.insert(l,u),a.du[a.currentUser.toKey()]=h}(i,s.batchId,n),await al(i,s.changes),await Jc(i.remoteStore)}catch(s){const r=xg(s,"Failed to persist write");n.reject(r)}}async function LS(e,t){const n=Z(e);try{const i=await mV(n.localStore,t);t.targetChanges.forEach((s,r)=>{const a=n.Au.get(r);a&&(mt(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?mt(a.hu,14607):s.removedDocuments.size>0&&(mt(a.hu,42227),a.hu=!1))}),await al(n,i,t)}catch(i){await ca(i)}}function Bv(e,t,n){const i=Z(e);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const s=[];i.Tu.forEach((r,a)=>{const l=a.view.va(t);l.snapshot&&s.push(l.snapshot)}),function(a,l){const u=Z(a);u.onlineState=l;let h=!1;u.queries.forEach((d,m)=>{for(const g of m.Sa)g.va(l)&&(h=!0)}),h&&Og(u)}(i.eventManager,t),s.length&&i.Pu.H_(s),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function a4(e,t,n){const i=Z(e);i.sharedClientState.updateQueryState(t,"rejected",n);const s=i.Au.get(t),r=s&&s.key;if(r){let a=new xt(Q.comparator);a=a.insert(r,pe.newNoDocument(r,J.min()));const l=lt().add(r),u=new Yc(J.min(),new Map,new xt(ot),a,l);await LS(i,u),i.Ru=i.Ru.remove(r),i.Au.delete(t),Vg(i)}else await Hd(i.localStore,t,!1).then(()=>Kd(i,t,n)).catch(ca)}async function o4(e,t){const n=Z(e),i=t.batch.batchId;try{const s=await dV(n.localStore,t);PS(n,i,null),US(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await al(n,s)}catch(s){await ca(s)}}async function l4(e,t,n){const i=Z(e);try{const s=await function(a,l){const u=Z(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let d;return u.mutationQueue.lookupMutationBatch(h,l).next(m=>(mt(m!==null,37113),d=m.keys(),u.mutationQueue.removeMutationBatch(h,m))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,d,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,d)).next(()=>u.localDocuments.getDocuments(h,d))})}(i.localStore,t);PS(i,t,n),US(i,t),i.sharedClientState.updateMutationState(t,"rejected",n),await al(i,s)}catch(s){await ca(s)}}function US(e,t){(e.mu.get(t)||[]).forEach(n=>{n.resolve()}),e.mu.delete(t)}function PS(e,t,n){const i=Z(e);let s=i.du[i.currentUser.toKey()];if(s){const r=s.get(t);r&&(n?r.reject(n):r.resolve(),s=s.remove(t)),i.du[i.currentUser.toKey()]=s}}function Kd(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const i of e.Eu.get(t))e.Tu.delete(i),n&&e.Pu.yu(i,n);e.Eu.delete(t),e.isPrimaryClient&&e.Vu.Gr(t).forEach(i=>{e.Vu.containsKey(i)||zS(e,i)})}function zS(e,t){e.Iu.delete(t.path.canonicalString());const n=e.Ru.get(t);n!==null&&(Ig(e.remoteStore,n),e.Ru=e.Ru.remove(t),e.Au.delete(n),Vg(e))}function qv(e,t,n){for(const i of n)i instanceof MS?(e.Vu.addReference(i.key,t),u4(e,i)):i instanceof VS?(H(Mg,"Document no longer in limbo: "+i.key),e.Vu.removeReference(i.key,t),e.Vu.containsKey(i.key)||zS(e,i.key)):Y(19791,{wu:i})}function u4(e,t){const n=t.key,i=n.path.canonicalString();e.Ru.get(n)||e.Iu.has(i)||(H(Mg,"New document in limbo: "+n),e.Iu.add(i),Vg(e))}function Vg(e){for(;e.Iu.size>0&&e.Ru.size<e.maxConcurrentLimboResolutions;){const t=e.Iu.values().next().value;e.Iu.delete(t);const n=new Q(Et.fromString(t)),i=e.fu.next();e.Au.set(i,new ZV(n)),e.Ru=e.Ru.insert(n,i),RS(e.remoteStore,new Oi(Nn(yg(n.path)),i,"TargetPurposeLimboResolution",jc.ce))}}async function al(e,t,n){const i=Z(e),s=[],r=[],a=[];i.Tu.isEmpty()||(i.Tu.forEach((l,u)=>{a.push(i.pu(u,t,n).then(h=>{var d;if((h||n)&&i.isPrimaryClient){const m=h?!h.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:d.current;i.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(h){s.push(h);const m=Sg.Is(u.targetId,h);r.push(m)}}))}),await Promise.all(a),i.Pu.H_(s),await async function(u,h){const d=Z(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>U.forEach(h,g=>U.forEach(g.Ts,T=>d.persistence.referenceDelegate.addReference(m,g.targetId,T)).next(()=>U.forEach(g.Es,T=>d.persistence.referenceDelegate.removeReference(m,g.targetId,T)))))}catch(m){if(!ha(m))throw m;H(wg,"Failed to update sequence numbers: "+m)}for(const m of h){const g=m.targetId;if(!m.fromCache){const T=d.vs.get(g),D=T.snapshotVersion,V=T.withLastLimboFreeSnapshotVersion(D);d.vs=d.vs.insert(g,V)}}}(i.localStore,r))}async function c4(e,t){const n=Z(e);if(!n.currentUser.isEqual(t)){H(Mg,"User change. New user:",t.toKey());const i=await bS(n.localStore,t);n.currentUser=t,function(r,a){r.mu.forEach(l=>{l.forEach(u=>{u.reject(new q(L.CANCELLED,a))})}),r.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,i.removedBatchIds,i.addedBatchIds),await al(n,i.Ns)}}function h4(e,t){const n=Z(e),i=n.Au.get(t);if(i&&i.hu)return lt().add(i.key);{let s=lt();const r=n.Eu.get(t);if(!r)return s;for(const a of r){const l=n.Tu.get(a);s=s.unionWith(l.view.nu)}return s}}function jS(e){const t=Z(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=LS.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=h4.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=a4.bind(null,t),t.Pu.H_=QV.bind(null,t.eventManager),t.Pu.yu=YV.bind(null,t.eventManager),t}function f4(e){const t=Z(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=o4.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=l4.bind(null,t),t}class cc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Xc(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,n){return null}Mu(t,n){return null}vu(t){return fV(this.persistence,new uV,t.initialUser,this.serializer)}Cu(t){return new AS(bg.Vi,this.serializer)}Du(t){return new vV}async terminate(){var t,n;(t=this.gcScheduler)==null||t.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}cc.provider={build:()=>new cc};class d4 extends cc{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,n){mt(this.persistence.referenceDelegate instanceof lc,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new YM(i,t.asyncQueue,n)}Cu(t){const n=this.cacheSizeBytes!==void 0?Ne.withCacheSize(this.cacheSizeBytes):Ne.DEFAULT;return new AS(i=>lc.Vi(i,n),this.serializer)}}class Qd{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Bv(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=c4.bind(null,this.syncEngine),await qV(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new FV}()}createDatastore(t){const n=Xc(t.databaseInfo.databaseId),i=SV(t.databaseInfo);return NV(t.authCredentials,t.appCheckCredentials,i,n)}createRemoteStore(t){return function(i,s,r,a,l){return new xV(i,s,r,a,l)}(this.localStore,this.datastore,t.asyncQueue,n=>Bv(this.syncEngine,n,0),function(){return kv.v()?new kv:new TV}())}createSyncEngine(t,n){return function(s,r,a,l,u,h,d){const m=new WV(s,r,a,l,u,h);return d&&(m.gu=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){var t,n;await async function(s){const r=Z(s);H(js,"RemoteStore shutting down."),r.Ia.add(5),await rl(r),r.Aa.shutdown(),r.Va.set("Unknown")}(this.remoteStore),(t=this.datastore)==null||t.terminate(),(n=this.eventManager)==null||n.terminate()}}Qd.provider={build:()=>new Qd};/**
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
 */class m4{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):ri("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,n){setTimeout(()=>{this.muted||t(n)},0)}}/**
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
 */const rs="FirestoreClient";class g4{constructor(t,n,i,s,r){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=i,this._databaseInfo=s,this.user=ge.UNAUTHENTICATED,this.clientId=hg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=r,this.authCredentials.start(i,async a=>{H(rs,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(i,a=>(H(rs,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Cs;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const i=xg(n,"Failed to shutdown persistence");t.reject(i)}}),t.promise}}async function Ef(e,t){e.asyncQueue.verifyOperationInProgress(),H(rs,"Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let i=n.initialUser;e.setCredentialChangeListener(async s=>{i.isEqual(s)||(await bS(t.localStore,s),i=s)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function Hv(e,t){e.asyncQueue.verifyOperationInProgress();const n=await p4(e);H(rs,"Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(i=>Uv(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,s)=>Uv(t.remoteStore,s)),e._onlineComponents=t}async function p4(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){H(rs,"Using user provided OfflineComponentProvider");try{await Ef(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!function(s){return s.name==="FirebaseError"?s.code===L.FAILED_PRECONDITION||s.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;zs("Error using user provided cache. Falling back to memory cache: "+n),await Ef(e,new cc)}}else H(rs,"Using default OfflineComponentProvider"),await Ef(e,new d4(void 0));return e._offlineComponents}async function BS(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(H(rs,"Using user provided OnlineComponentProvider"),await Hv(e,e._uninitializedComponentsProvider._online)):(H(rs,"Using default OnlineComponentProvider"),await Hv(e,new Qd))),e._onlineComponents}function y4(e){return BS(e).then(t=>t.syncEngine)}async function Fv(e){const t=await BS(e),n=t.eventManager;return n.onListen=t4.bind(null,t.syncEngine),n.onUnlisten=i4.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=e4.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=s4.bind(null,t.syncEngine),n}function _4(e,t,n,i){const s=new m4(i),r=new XV(t,s,n);return e.asyncQueue.enqueueAndForget(async()=>GV(await Fv(e),r)),()=>{s.Nu(),e.asyncQueue.enqueueAndForget(async()=>KV(await Fv(e),r))}}function v4(e,t){const n=new Cs;return e.asyncQueue.enqueueAndForget(async()=>r4(await y4(e),t,n)),n.promise}/**
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
 */function qS(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
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
 */const T4="ComponentProvider",Gv=new Map;function E4(e,t,n,i,s){return new zO(e,t,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,qS(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,i)}/**
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
 */const HS="firestore.googleapis.com",Kv=!0;class Qv{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new q(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=HS,this.ssl=Kv}else this.host=t.host,this.ssl=t.ssl??Kv;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=ES;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<KM)throw new q(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}CO("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=qS(t.experimentalLongPollingOptions??{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new q(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new q(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new q(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(i,s){return i.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Zc{constructor(t,n,i,s){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Qv({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new q(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new q(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Qv(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new _O;switch(i.type){case"firstParty":return new AO(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new q(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const i=Gv.get(n);i&&(H(T4,"Removing Datastore"),Gv.delete(n),i.terminate())}(this),Promise.resolve()}}function A4(e,t,n,i={}){var h;e=Ki(e,Zc);const s=Jo(t),r=e._getSettings(),a={...r,emulatorOptions:e._getEmulatorOptions()},l=`${t}:${n}`;s&&vA(`https://${l}`),r.host!==HS&&r.host!==l&&zs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...r,host:l,ssl:s,emulatorOptions:i};if(!Zi(u,a)&&(e._setSettings(u),i.mockUserToken)){let d,m;if(typeof i.mockUserToken=="string")d=i.mockUserToken,m=ge.MOCK_USER;else{d=A2(i.mockUserToken,(h=e._app)==null?void 0:h.options.projectId);const g=i.mockUserToken.sub||i.mockUserToken.user_id;if(!g)throw new q(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new ge(g)}e._authCredentials=new vO(new Ob(d,m))}}/**
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
 */class da{constructor(t,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=t}withConverter(t){return new da(this.firestore,t,this._query)}}class Qt{constructor(t,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Qi(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Qt(this.firestore,t,this._key)}toJSON(){return{type:Qt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,n,i){if(el(n,Qt._jsonSchema))return new Qt(t,i||null,new Q(Et.fromString(n.referencePath)))}}Qt._jsonSchemaVersion="firestore/documentReference/1.0",Qt._jsonSchema={type:Kt("string",Qt._jsonSchemaVersion),referencePath:Kt("string")};class Qi extends da{constructor(t,n,i){super(t,n,yg(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Qt(this.firestore,null,new Q(t))}withConverter(t){return new Qi(this.firestore,t,this._path)}}function FS(e,t,...n){if(e=Pt(e),Mb("collection","path",t),e instanceof Zc){const i=Et.fromString(t,...n);return rv(i),new Qi(e,null,i)}{if(!(e instanceof Qt||e instanceof Qi))throw new q(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child(Et.fromString(t,...n));return rv(i),new Qi(e.firestore,null,i)}}function Ya(e,t,...n){if(e=Pt(e),arguments.length===1&&(t=hg.newId()),Mb("doc","path",t),e instanceof Zc){const i=Et.fromString(t,...n);return sv(i),new Qt(e,null,new Q(i))}{if(!(e instanceof Qt||e instanceof Qi))throw new q(L.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child(Et.fromString(t,...n));return sv(i),new Qt(e.firestore,e instanceof Qi?e.converter:null,new Q(i))}}/**
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
 */const Yv="AsyncQueue";class Xv{constructor(t=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new wS(this,"async_queue_retry"),this._c=()=>{const i=Tf();i&&H(Yv,"Visibility state changed to "+i.visibilityState),this.M_.w_()},this.ac=t;const n=Tf();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const n=Tf();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise(()=>{});const n=new Cs;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Yu.push(t),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(t){if(!ha(t))throw t;H(Yv,"Operation failed with retryable error: "+t)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(t){const n=this.ac.then(()=>(this.rc=!0,t().catch(i=>{throw this.nc=i,this.rc=!1,ri("INTERNAL UNHANDLED ERROR: ",$v(i)),i}).then(i=>(this.rc=!1,i))));return this.ac=n,n}enqueueAfterDelay(t,n,i){this.uc(),this.oc.indexOf(t)>-1&&(n=0);const s=Dg.createAndSchedule(this,t,n,i,r=>this.hc(r));return this.tc.push(s),s}uc(){this.nc&&Y(47125,{Pc:$v(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ec(t){for(const n of this.tc)if(n.timerId===t)return!0;return!1}Ic(t){return this.Tc().then(()=>{this.tc.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Tc()})}Rc(t){this.oc.push(t)}hc(t){const n=this.tc.indexOf(t);this.tc.splice(n,1)}}function $v(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+`
`+e.stack),t}class Jr extends Zc{constructor(t,n,i,s){super(t,n,i,s),this.type="firestore",this._queue=new Xv,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Xv(t),this._firestoreClient=void 0,await t}}}function b4(e,t){const n=typeof e=="object"?e:$m(),i=typeof e=="string"?e:ec,s=Qs(n,"firestore").getImmediate({identifier:i});if(!s._initialized){const r=T2("firestore");r&&A4(s,...r)}return s}function kg(e){if(e._terminated)throw new q(L.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||S4(e),e._firestoreClient}function S4(e){var i,s,r,a;const t=e._freezeSettings(),n=E4(e._databaseId,((i=e._app)==null?void 0:i.options.appId)||"",e._persistenceKey,(s=e._app)==null?void 0:s.options.apiKey,t);e._componentsProvider||(r=t.localCache)!=null&&r._offlineComponentProvider&&((a=t.localCache)!=null&&a._onlineComponentProvider)&&(e._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),e._firestoreClient=new g4(e._authCredentials,e._appCheckCredentials,e._queue,n,e._componentsProvider&&function(u){const h=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(h),_online:h}}(e._componentsProvider))}/**
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
 */class rn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new rn(ce.fromBase64String(t))}catch(n){throw new q(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new rn(ce.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:rn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(el(t,rn._jsonSchema))return rn.fromBase64String(t.bytes)}}rn._jsonSchemaVersion="firestore/bytes/1.0",rn._jsonSchema={type:Kt("string",rn._jsonSchemaVersion),bytes:Kt("string")};/**
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
 */class Lg{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new q(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new oe(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Ug{constructor(t){this._methodName=t}}/**
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
 */class xn{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new q(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new q(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return ot(this._lat,t._lat)||ot(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:xn._jsonSchemaVersion}}static fromJSON(t){if(el(t,xn._jsonSchema))return new xn(t.latitude,t.longitude)}}xn._jsonSchemaVersion="firestore/geoPoint/1.0",xn._jsonSchema={type:Kt("string",xn._jsonSchemaVersion),latitude:Kt("number"),longitude:Kt("number")};/**
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
 */class gn{constructor(t){this._values=(t||[]).map(n=>n)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(i,s){if(i.length!==s.length)return!1;for(let r=0;r<i.length;++r)if(i[r]!==s[r])return!1;return!0}(this._values,t._values)}toJSON(){return{type:gn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(el(t,gn._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every(n=>typeof n=="number"))return new gn(t.vectorValues);throw new q(L.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}gn._jsonSchemaVersion="firestore/vectorValue/1.0",gn._jsonSchema={type:Kt("string",gn._jsonSchemaVersion),vectorValues:Kt("object")};/**
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
 */const w4=/^__.*__$/;class I4{constructor(t,n,i){this.data=t,this.fieldMask=n,this.fieldTransforms=i}toMutation(t,n){return this.fieldMask!==null?new us(t,this.data,this.fieldMask,n,this.fieldTransforms):new il(t,this.data,n,this.fieldTransforms)}}class GS{constructor(t,n,i){this.data=t,this.fieldMask=n,this.fieldTransforms=i}toMutation(t,n){return new us(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function KS(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y(40011,{dataSource:e})}}class Pg{constructor(t,n,i,s,r,a){this.settings=t,this.databaseId=n,this.serializer=i,this.ignoreUndefinedProperties=s,r===void 0&&this.Ac(),this.fieldTransforms=r||[],this.fieldMask=a||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(t){return new Pg({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(t){var s;const n=(s=this.path)==null?void 0:s.child(t),i=this.i({path:n,arrayElement:!1});return i.mc(t),i}fc(t){var s;const n=(s=this.path)==null?void 0:s.child(t),i=this.i({path:n,arrayElement:!1});return i.Ac(),i}gc(t){return this.i({path:void 0,arrayElement:!0})}yc(t){return hc(t,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Ac(){if(this.path)for(let t=0;t<this.path.length;t++)this.mc(this.path.get(t))}mc(t){if(t.length===0)throw this.yc("Document fields must not be empty");if(KS(this.dataSource)&&w4.test(t))throw this.yc('Document fields cannot begin and end with "__"')}}class R4{constructor(t,n,i){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=i||Xc(t)}I(t,n,i,s=!1){return new Pg({dataSource:t,methodName:n,targetDoc:i,path:oe.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function zg(e){const t=e._freezeSettings(),n=Xc(e._databaseId);return new R4(e._databaseId,!!t.ignoreUndefinedProperties,n)}function QS(e,t,n,i,s,r={}){const a=e.I(r.merge||r.mergeFields?2:0,t,n,s);jg("Data must be an object, but it was:",a,i);const l=YS(i,a);let u,h;if(r.merge)u=new qe(a.fieldMask),h=a.fieldTransforms;else if(r.mergeFields){const d=[];for(const m of r.mergeFields){const g=Zr(t,m,n);if(!a.contains(g))throw new q(L.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);JS(d,g)||d.push(g)}u=new qe(d),h=a.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,h=a.fieldTransforms;return new I4(new De(l),u,h)}class Wc extends Ug{_toFieldTransform(t){if(t.dataSource!==2)throw t.dataSource===1?t.yc(`${this._methodName}() can only appear at the top level of your update data`):t.yc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Wc}}function C4(e,t,n,i){const s=e.I(1,t,n);jg("Data must be an object, but it was:",s,i);const r=[],a=De.empty();ls(i,(u,h)=>{const d=$S(t,u,n);h=Pt(h);const m=s.fc(d);if(h instanceof Wc)r.push(d);else{const g=ol(h,m);g!=null&&(r.push(d),a.set(d,g))}});const l=new qe(r);return new GS(a,l,s.fieldTransforms)}function N4(e,t,n,i,s,r){const a=e.I(1,t,n),l=[Zr(t,i,n)],u=[s];if(r.length%2!=0)throw new q(L.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<r.length;g+=2)l.push(Zr(t,r[g])),u.push(r[g+1]);const h=[],d=De.empty();for(let g=l.length-1;g>=0;--g)if(!JS(h,l[g])){const T=l[g];let D=u[g];D=Pt(D);const V=a.fc(T);if(D instanceof Wc)h.push(T);else{const P=ol(D,V);P!=null&&(h.push(T),d.set(T,P))}}const m=new qe(h);return new GS(d,m,a.fieldTransforms)}function D4(e,t,n,i=!1){return ol(n,e.I(i?4:3,t))}function ol(e,t){if(XS(e=Pt(e)))return jg("Unsupported field value:",t,e),YS(e,t);if(e instanceof Ug)return function(i,s){if(!KS(s.dataSource))throw s.yc(`${i._methodName}() can only be used with update() and set()`);if(!s.path)throw s.yc(`${i._methodName}() is not currently supported inside arrays`);const r=i._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.arrayElement&&t.dataSource!==4)throw t.yc("Nested arrays are not supported");return function(i,s){const r=[];let a=0;for(const l of i){let u=ol(l,s.gc(a));u==null&&(u={nullValue:"NULL_VALUE"}),r.push(u),a++}return{arrayValue:{values:r}}}(e,t)}return function(i,s){if((i=Pt(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return cM(s.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const r=Rt.fromDate(i);return{timestampValue:oc(s.serializer,r)}}if(i instanceof Rt){const r=new Rt(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:oc(s.serializer,r)}}if(i instanceof xn)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof rn)return{bytesValue:dS(s.serializer,i._byteString)};if(i instanceof Qt){const r=s.databaseId,a=i.firestore._databaseId;if(!a.isEqual(r))throw s.yc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Eg(i.firestore._databaseId||s.databaseId,i._key.path)}}if(i instanceof gn)return function(a,l){const u=a instanceof gn?a.toArray():a;return{mapValue:{fields:{[qb]:{stringValue:Hb},[nc]:{arrayValue:{values:u.map(d=>{if(typeof d!="number")throw l.yc("VectorValues must only contain numeric values.");return _g(l.serializer,d)})}}}}}}(i,s);if(TS(i))return i._toProto(s.serializer);throw s.yc(`Unsupported field value: ${zc(i)}`)}(e,t)}function YS(e,t){const n={};return Lb(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ls(e,(i,s)=>{const r=ol(s,t.dc(i));r!=null&&(n[i]=r)}),{mapValue:{fields:n}}}function XS(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof Rt||e instanceof xn||e instanceof rn||e instanceof Qt||e instanceof Ug||e instanceof gn||TS(e))}function jg(e,t,n){if(!XS(n)||!Vb(n)){const i=zc(n);throw i==="an object"?t.yc(e+" a custom object"):t.yc(e+" "+i)}}function Zr(e,t,n){if((t=Pt(t))instanceof Lg)return t._internalPath;if(typeof t=="string")return $S(e,t);throw hc("Field path arguments must be of type string or ",e,!1,void 0,n)}const x4=new RegExp("[~\\*/\\[\\]]");function $S(e,t,n){if(t.search(x4)>=0)throw hc(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Lg(...t.split("."))._internalPath}catch{throw hc(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function hc(e,t,n,i,s){const r=i&&!i.isEmpty(),a=s!==void 0;let l=`Function ${t}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(r||a)&&(u+=" (found",r&&(u+=` in field ${i}`),a&&(u+=` in document ${s}`),u+=")"),new q(L.INVALID_ARGUMENT,l+e+u)}function JS(e,t){return e.some(n=>n.isEqual(t))}/**
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
 */class O4{convertValue(t,n="none"){switch(is(t)){case 0:return null;case 1:return t.booleanValue;case 2:return kt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(ns(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 11:return this.convertObject(t.mapValue,n);case 10:return this.convertVectorValue(t.mapValue);default:throw Y(62114,{value:t})}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const i={};return ls(t,(s,r)=>{i[s]=this.convertValue(r,n)}),i}convertVectorValue(t){var i,s,r;const n=(r=(s=(i=t.fields)==null?void 0:i[nc].arrayValue)==null?void 0:s.values)==null?void 0:r.map(a=>kt(a.doubleValue));return new gn(n)}convertGeoPoint(t){return new xn(kt(t.latitude),kt(t.longitude))}convertArray(t,n){return(t.values||[]).map(i=>this.convertValue(i,n))}convertServerTimestamp(t,n){switch(n){case"previous":const i=qc(t);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(Mo(t));default:return null}}convertTimestamp(t){const n=es(t);return new Rt(n.seconds,n.nanos)}convertDocumentKey(t,n){const i=Et.fromString(t);mt(vS(i),9688,{name:t});const s=new Vo(i.get(1),i.get(3)),r=new Q(i.popFirst(5));return s.isEqual(n)||ri(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
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
 */class ZS extends O4{constructor(t){super(),this.firestore=t}convertBytes(t){return new rn(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new Qt(this.firestore,null,n)}}const Jv="@firebase/firestore",Zv="4.14.0";/**
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
 */function Wv(e){return function(n,i){if(typeof n!="object"||n===null)return!1;const s=n;for(const r of i)if(r in s&&typeof s[r]=="function")return!0;return!1}(e,["next","error","complete"])}/**
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
 */class WS{constructor(t,n,i,s,r){this._firestore=t,this._userDataWriter=n,this._key=i,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Qt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new M4(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var t;return((t=this._document)==null?void 0:t.data.clone().value.mapValue.fields)??void 0}get(t){if(this._document){const n=this._document.data.field(Zr("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class M4 extends WS{data(){return super.data()}}/**
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
 */function V4(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new q(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Bg{}class k4 extends Bg{}function L4(e,t,...n){let i=[];t instanceof Bg&&i.push(t),i=i.concat(n),function(r){const a=r.filter(u=>u instanceof qg).length,l=r.filter(u=>u instanceof th).length;if(a>1||a>0&&l>0)throw new q(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const s of i)e=s._apply(e);return e}class th extends k4{constructor(t,n,i){super(),this._field=t,this._op=n,this._value=i,this.type="where"}static _create(t,n,i){return new th(t,n,i)}_apply(t){const n=this._parse(t);return tw(t._query,n),new da(t.firestore,t.converter,Ud(t._query,n))}_parse(t){const n=zg(t.firestore);return function(r,a,l,u,h,d,m){let g;if(h.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new q(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){e0(m,d);const D=[];for(const V of m)D.push(t0(u,r,V));g={arrayValue:{values:D}}}else g=t0(u,r,m)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||e0(m,d),g=D4(l,a,m,d==="in"||d==="not-in");return Ft.create(h,d,g)}(t._query,"where",n,t.firestore._databaseId,this._field,this._op,this._value)}}function U4(e,t,n){const i=t,s=Zr("where",e);return th._create(s,i,n)}class qg extends Bg{constructor(t,n){super(),this.type=t,this._queryConstraints=n}static _create(t,n){return new qg(t,n)}_parse(t){const n=this._queryConstraints.map(i=>i._parse(t)).filter(i=>i.getFilters().length>0);return n.length===1?n[0]:yn.create(n,this._getOperator())}_apply(t){const n=this._parse(t);return n.getFilters().length===0?t:(function(s,r){let a=s;const l=r.getFlattenedFilters();for(const u of l)tw(a,u),a=Ud(a,u)}(t._query,n),new da(t.firestore,t.converter,Ud(t._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function t0(e,t,n){if(typeof(n=Pt(n))=="string"){if(n==="")throw new q(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Jb(t)&&n.indexOf("/")!==-1)throw new q(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const i=t.path.child(Et.fromString(n));if(!Q.isDocumentKey(i))throw new q(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return dv(e,new Q(i))}if(n instanceof Qt)return dv(e,n._key);throw new q(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${zc(n)}.`)}function e0(e,t){if(!Array.isArray(e)||e.length===0)throw new q(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function tw(e,t){const n=function(s,r){for(const a of s)for(const l of a.getFlattenedFilters())if(r.indexOf(l.op)>=0)return l.op;return null}(e.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(n!==null)throw n===t.op?new q(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new q(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}function ew(e,t,n){let i;return i=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,i}class Xa{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Ns extends WS{constructor(t,n,i,s,r,a){super(t,n,i,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new mu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const i=this._document.data.field(Zr("DocumentSnapshot.get",t));if(i!==null)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new q(L.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,n={};return n.type=Ns._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Ns._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ns._jsonSchema={type:Kt("string",Ns._jsonSchemaVersion),bundleSource:Kt("string","DocumentSnapshot"),bundleName:Kt("string"),bundle:Kt("string")};class mu extends Ns{data(t={}){return super.data(t)}}class Vr{constructor(t,n,i,s){this._firestore=t,this._userDataWriter=n,this._snapshot=s,this.metadata=new Xa(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(i=>{t.call(n,new mu(this._firestore,this._userDataWriter,i.key,i,new Xa(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new q(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const u=new mu(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Xa(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>r||l.type!==3).map(l=>{const u=new mu(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Xa(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,d=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),d=a.indexOf(l.doc.key)),{type:P4(l.type),doc:u,oldIndex:h,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new q(L.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=Vr._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=hg.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],i=[],s=[];return this.docs.forEach(r=>{r._document!==null&&(n.push(r._document),i.push(this._userDataWriter.convertObjectMap(r._document.data.value.mapValue.fields,"previous")),s.push(r.ref.path))}),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function P4(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y(61501,{type:e})}}/**
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
 */Vr._jsonSchemaVersion="firestore/querySnapshot/1.0",Vr._jsonSchema={type:Kt("string",Vr._jsonSchemaVersion),bundleSource:Kt("string","QuerySnapshot"),bundleName:Kt("string"),bundle:Kt("string")};/**
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
 */class z4{constructor(t,n){this._firestore=t,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=zg(t)}set(t,n,i){this._verifyNotCommitted();const s=Af(t,this._firestore),r=ew(s.converter,n,i),a=QS(this._dataReader,"WriteBatch.set",s._key,r,s.converter!==null,i);return this._mutations.push(a.toMutation(s._key,Ye.none())),this}update(t,n,i,...s){this._verifyNotCommitted();const r=Af(t,this._firestore);let a;return a=typeof(n=Pt(n))=="string"||n instanceof Lg?N4(this._dataReader,"WriteBatch.update",r._key,n,i,s):C4(this._dataReader,"WriteBatch.update",r._key,n),this._mutations.push(a.toMutation(r._key,Ye.exists(!0))),this}delete(t){this._verifyNotCommitted();const n=Af(t,this._firestore);return this._mutations=this._mutations.concat(new Qc(n._key,Ye.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new q(L.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Af(e,t){if((e=Pt(e)).firestore!==t)throw new q(L.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}function bf(e,t,n){e=Ki(e,Qt);const i=Ki(e.firestore,Jr),s=ew(e.converter,t,n),r=zg(i);return Hg(i,[QS(r,"setDoc",e._key,s,e.converter!==null,n).toMutation(e._key,Ye.none())])}function j4(e){return Hg(Ki(e.firestore,Jr),[new Qc(e._key,Ye.none())])}function nw(e,...t){var h,d,m;e=Pt(e);let n={includeMetadataChanges:!1,source:"default"},i=0;typeof t[i]!="object"||Wv(t[i])||(n=t[i++]);const s={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(Wv(t[i])){const g=t[i];t[i]=(h=g.next)==null?void 0:h.bind(g),t[i+1]=(d=g.error)==null?void 0:d.bind(g),t[i+2]=(m=g.complete)==null?void 0:m.bind(g)}let r,a,l;if(e instanceof Qt)a=Ki(e.firestore,Jr),l=yg(e._key.path),r={next:g=>{t[i]&&t[i](B4(a,e,g))},error:t[i+1],complete:t[i+2]};else{const g=Ki(e,da);a=Ki(g.firestore,Jr),l=g._query;const T=new ZS(a);r={next:D=>{t[i]&&t[i](new Vr(a,T,g,D))},error:t[i+1],complete:t[i+2]},V4(e._query)}const u=kg(a);return _4(u,l,s,r)}function Hg(e,t){const n=kg(e);return v4(n,t)}function B4(e,t,n){const i=n.docs.get(t._key),s=new ZS(e);return new Ns(e,s,t._key,i,new Xa(n.hasPendingWrites,n.fromCache),t.converter)}function n0(e){return e=Ki(e,Jr),kg(e),new z4(e,t=>Hg(e,t))}(function(t,n=!0){yO(oa),On(new pn("firestore",(i,{instanceIdentifier:s,options:r})=>{const a=i.getProvider("app").getImmediate(),l=new Jr(new TO(i.getProvider("auth-internal")),new bO(a,i.getProvider("app-check-internal")),jO(a,s),a);return r={useFetchStreams:n,...r},l._setSettings(r),l},"PUBLIC").setMultipleInstances(!0)),ln(Jv,Zv,t),ln(Jv,Zv,"esm2020")})();const q4={apiKey:"AIzaSyDkGPd6MDL29Z8LY3EhPMLEXU_Q3_D8jLc",authDomain:"seguimiento-coaches.firebaseapp.com",projectId:"seguimiento-coaches",storageBucket:"seguimiento-coaches.firebasestorage.app",messagingSenderId:"782682130999",appId:"1:782682130999:web:5651867d9579d873cecdb2",measurementId:"G-PFED0LN5EQ"},Fg=bA(q4);typeof window<"u"&&fD(Fg);const i0=gO(Fg),za=b4(Fg);function H4(){const[e,t]=et.useState(null),[n,i]=et.useState(!0),[s,r]=et.useState([]),[a,l]=et.useState("dashboard"),[u,h]=et.useState(null),[d,m]=et.useState(!1),[g,T]=et.useState(""),[D,V]=et.useState("Todos"),[P,w]=et.useState("Todas"),[E,R]=et.useState(!1),[x,z]=et.useState(!1);et.useEffect(()=>{const M=document.createElement("script");return M.src="https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js",M.async=!0,document.body.appendChild(M),()=>{document.body.contains(M)&&document.body.removeChild(M)}},[]),et.useEffect(()=>{(async()=>{try{await ZD(i0)}catch(B){console.error("Error al autenticar:",B)}finally{i(!1)}})();const F=sx(i0,B=>{t(B)});return()=>F()},[]),et.useEffect(()=>{if(!e)return;const M=FS(za,"users",e.uid,"schools"),F=nw(M,B=>{const K=B.docs.map(rt=>({id:rt.id,...rt.data()}));r(K)},B=>console.error("Error obteniendo colegios:",B));return()=>F()},[e]);const G=et.useMemo(()=>[...new Set(s.map(M=>M.coach).filter(Boolean))],[s]),v=et.useMemo(()=>[...new Set(s.map(M=>M.region).filter(Boolean))],[s]),p=et.useMemo(()=>s.filter(M=>{var rt;const F=(rt=M.name)==null?void 0:rt.toLowerCase().includes(g.toLowerCase()),B=D==="Todos"||M.coach===D,K=P==="Todas"||M.region===P;return F&&B&&K}),[s,g,D,P]),_=et.useMemo(()=>{const M=p.length;let F=0,B=0,K=0,rt=0,ke=0;p.forEach(fe=>{F+=(Number(fe.completedActions)||0)+(Number(fe.progressActions)||0)+(Number(fe.pendingActions)||0),B+=Number(fe.completedActions)||0,K+=Number(fe.progressActions)||0,rt+=Number(fe.pendingActions)||0,fe.renewal==="ALTA"&&ke++});const cn=F>0?Math.round(B/F*100):0;return{totalSchools:M,totalActions:F,completed:B,progress:K,pending:rt,highRenewal:ke,completionRate:cn}},[p]),b=M=>{const F={};return p.forEach(B=>{const K=B[M]||"Sin definir";F[K]||(F[K]={ALTA:0,MEDIA:0,BAJA:0,"NO DEFINIDA":0,total:0});const rt=B.renewal||"NO DEFINIDA";F[K][rt]=(F[K][rt]||0)+1,F[K].total++}),Object.entries(F).map(([B,K])=>({name:B,...K})).sort((B,K)=>K.total-B.total)},I=et.useMemo(()=>b("coach"),[p]),C=et.useMemo(()=>b("region"),[p]),A=et.useMemo(()=>b("businessLine"),[p]),zt=async M=>{if(!e)return;const F=M.target.files[0];if(!F)return;if(!window.XLSX){alert("La librería de Excel se está cargando. Intenta de nuevo en un segundo.");return}R(!0);const B=new FileReader;B.onload=async K=>{try{const rt=K.target.result,ke=window.XLSX.read(rt,{type:"binary"}),cn=ke.SheetNames[0],fe=ke.Sheets[cn],Se=window.XLSX.utils.sheet_to_json(fe);let Le=n0(za),li=0;for(const bt of Se){const ma=bt.ID?String(bt.ID):`${Date.now()}-${Math.random().toString(36).substr(2,9)}`,ll={name:bt.colegio||bt.Colegio||"Sin Nombre",calendar:bt.calendario||bt.Calendario||"Sin definir",classification:bt.clasificacion||bt.Clasificacion||"Sin definir",businessLine:bt.lineaNegocio||bt.LineaNegocio||"Sin definir",coach:bt.coach||bt.Coach||"Sin Asignar",region:bt.regional||bt.Regional||"Sin Región",completedActions:Number(bt.completedActions||0),progressActions:Number(bt.progressActions||0),pendingActions:Number(bt.pendingActions||0),renewal:bt.renewal||bt.Probabilidad||"NO DEFINIDA",gestionType:bt.gestionType||bt["Tipo Gestion"]||"MANTENIMIENTO",updatedAt:new Date().toISOString()},eh=Ya(za,"users",e.uid,"schools",ma);Le.set(eh,ll,{merge:!0}),li++,li>=490&&(await Le.commit(),Le=n0(za),li=0)}li>0&&await Le.commit(),R(!1),M.target.value=null,z(!1),alert("¡Base de datos cargada exitosamente!")}catch(rt){console.error("Error procesando Excel:",rt),R(!1),alert("Hubo un error procesando el archivo. Revisa que el formato sea correcto.")}},B.readAsBinaryString(F)},Ve=()=>{if(!window.XLSX)return;const M=s.map(K=>({ID:K.id,colegio:K.name,calendario:K.calendar,clasificacion:K.classification,lineaNegocio:K.businessLine,coach:K.coach,regional:K.region,Probabilidad:K.renewal,"Tipo Gestion":K.gestionType,"Acciones Completadas":K.completedActions||0,"Acciones Progreso":K.progressActions||0,"Acciones Pendientes":K.pendingActions||0}));M.length===0&&M.push({ID:"12345",colegio:"Colegio Ejemplo",calendario:"A",clasificacion:"Premium",lineaNegocio:"Bilingüismo",coach:"Juan Pérez",regional:"Norte"});const F=window.XLSX.utils.json_to_sheet(M),B=window.XLSX.utils.book_new();window.XLSX.utils.book_append_sheet(B,F,"Colegios"),window.XLSX.writeFile(B,"Data_Coaches_Colegios.xlsx")};return n?S.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-50 text-indigo-600 font-semibold",children:"Conectando con Firebase..."}):S.jsxs("div",{className:"flex h-screen bg-gray-100 font-sans text-gray-800 overflow-hidden relative",children:[x&&S.jsx("div",{className:"fixed inset-0 bg-black/50 z-40 md:hidden",onClick:()=>z(!1)}),S.jsxs("aside",{className:`fixed inset-y-0 left-0 w-64 bg-indigo-900 text-white flex flex-col shadow-xl z-50 transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${x?"translate-x-0":"-translate-x-full"}`,children:[S.jsxs("div",{className:"p-6 flex justify-between items-center",children:[S.jsxs("h1",{className:"text-2xl font-bold tracking-tight flex items-center gap-2",children:[S.jsx(XR,{className:"text-indigo-400"}),"CoachTrack",S.jsx("span",{className:"text-indigo-400 text-sm align-top font-black",children:"CRM"})]}),S.jsx("button",{className:"md:hidden text-indigo-200 hover:text-white",onClick:()=>z(!1),children:S.jsx(Ed,{size:24})})]}),S.jsx("p",{className:"px-6 text-indigo-300 text-xs -mt-3 mb-4",children:"Panel de Coordinación"}),S.jsxs("nav",{className:"flex-1 px-4 space-y-2 mt-2",children:[S.jsxs("button",{onClick:()=>{l("dashboard"),z(!1)},className:`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${a==="dashboard"?"bg-indigo-800 text-white":"text-indigo-200 hover:bg-indigo-800/50 hover:text-white"}`,children:[S.jsx(lA,{size:20})," Dashboard"]}),S.jsxs("button",{onClick:()=>{l("schools"),z(!1)},className:`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${a==="schools"?"bg-indigo-800 text-white":"text-indigo-200 hover:bg-indigo-800/50 hover:text-white"}`,children:[S.jsx(__,{size:20})," Gestión de Colegios"]})]}),S.jsxs("div",{className:"p-4 border-t border-indigo-800 space-y-3",children:[S.jsxs("div",{className:"relative",children:[S.jsx("input",{type:"file",accept:".xlsx, .xls, .csv",className:"absolute inset-0 w-full h-full opacity-0 cursor-pointer",onChange:zt,disabled:E}),S.jsxs("button",{className:"w-full flex items-center justify-center gap-2 px-4 py-2 bg-indigo-700 hover:bg-indigo-600 rounded-lg text-sm font-medium transition-colors",children:[E?S.jsx(GR,{className:"animate-spin",size:16}):S.jsx(l2,{size:16}),E?"Cargando...":"Subir Excel"]})]}),S.jsxs("button",{onClick:Ve,className:"w-full flex items-center justify-center gap-2 px-4 py-2 border border-indigo-600 hover:bg-indigo-800 rounded-lg text-sm font-medium transition-colors",children:[S.jsx(QR,{size:16})," Exportar / Plantilla"]})]})]}),S.jsxs("main",{className:"flex-1 flex flex-col h-full overflow-hidden w-full",children:[S.jsxs("header",{className:"h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 md:px-8 shrink-0",children:[S.jsxs("div",{className:"flex items-center gap-2 md:gap-4 flex-1",children:[S.jsx("button",{className:"md:hidden p-2 text-gray-500 hover:bg-gray-100 rounded-lg",onClick:()=>z(!0),children:S.jsx(JR,{size:24})}),S.jsxs("div",{className:"relative hidden sm:block",children:[S.jsx(s2,{className:"absolute left-3 top-1/2 -translate-y-1/2 text-gray-400",size:18}),S.jsx("input",{type:"text",placeholder:"Buscar colegio...",value:g,onChange:M=>T(M.target.value),className:"pl-10 pr-4 py-2 rounded-full border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 w-48 lg:w-64 transition-all"})]}),S.jsxs("select",{value:D,onChange:M=>V(M.target.value),className:"px-2 md:px-4 py-2 rounded-full border border-gray-200 bg-gray-50 text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 max-w-[120px] md:max-w-none",children:[S.jsx("option",{value:"Todos",children:"Coaches"}),G.map(M=>S.jsx("option",{value:M,children:M},M))]}),S.jsxs("select",{value:P,onChange:M=>w(M.target.value),className:"px-2 md:px-4 py-2 rounded-full border border-gray-200 bg-gray-50 text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 max-w-[120px] md:max-w-none",children:[S.jsx("option",{value:"Todas",children:"Regiones"}),v.map(M=>S.jsx("option",{value:M,children:M},M))]})]}),S.jsxs("div",{className:"flex items-center gap-3 ml-4",children:[S.jsx("div",{className:"w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold border border-indigo-200 shrink-0",children:"CO"}),S.jsx("span",{className:"text-sm font-medium text-gray-600 hidden md:block",children:"Coordinador"})]})]}),S.jsx("div",{className:"flex-1 overflow-auto p-4 md:p-8",children:a==="dashboard"?S.jsxs("div",{className:"space-y-8 max-w-7xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500",children:[S.jsxs("div",{children:[S.jsx("h2",{className:"text-2xl font-bold text-gray-800",children:"Panorama General"}),S.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-4",children:[S.jsx(Hl,{title:"Total Colegios",value:_.totalSchools,icon:S.jsx(__,{size:24,className:"text-blue-600"}),color:"bg-blue-50",borderColor:"border-blue-200"}),S.jsx(Hl,{title:"% Avance Acciones",value:`${_.completionRate}%`,subtitle:"Global",icon:S.jsx(a2,{size:24,className:"text-indigo-600"}),color:"bg-indigo-50",borderColor:"border-indigo-200"}),S.jsx(Hl,{title:"Colegios Renov. ALTA",value:_.highRenewal,icon:S.jsx(uA,{size:24,className:"text-emerald-600"}),color:"bg-emerald-50",borderColor:"border-emerald-200"}),S.jsx(Hl,{title:"Acciones Pendientes",value:_.pending,icon:S.jsx(qR,{size:24,className:"text-rose-600"}),color:"bg-rose-50",borderColor:"border-rose-200"})]})]}),S.jsx("h3",{className:"text-xl font-bold text-gray-800 mt-10 mb-4",children:"Métricas de Renovación"}),S.jsxs("div",{className:"grid grid-cols-1 xl:grid-cols-3 gap-6",children:[S.jsx(Sf,{title:"Por Línea de Negocio",data:A,icon:S.jsx(y_,{size:18,className:"text-indigo-500"})}),S.jsx(Sf,{title:"Por Regional",data:C,icon:S.jsx(y_,{size:18,className:"text-indigo-500"})}),S.jsx(Sf,{title:"Por Coach",data:I,icon:S.jsx(c2,{size:18,className:"text-indigo-500"})})]})]}):S.jsxs("div",{className:"max-w-7xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500",children:[S.jsx("div",{className:"flex justify-between items-end mb-6",children:S.jsxs("div",{children:[S.jsx("h2",{className:"text-2xl font-bold text-gray-800",children:"Directorio de Colegios"}),S.jsx("p",{className:"text-gray-500 text-sm mt-1",children:"Selecciona un colegio para editar progreso y notas."})]})}),S.jsx("div",{className:"bg-white rounded-2xl shadow-sm border border-gray-200 overflow-x-auto",children:S.jsxs("table",{className:"w-full text-left border-collapse min-w-[800px]",children:[S.jsx("thead",{children:S.jsxs("tr",{className:"bg-gray-50 border-b border-gray-200 text-xs uppercase tracking-wider text-gray-500",children:[S.jsx("th",{className:"p-4 font-semibold",children:"Colegio"}),S.jsx("th",{className:"p-4 font-semibold",children:"Región / Línea"}),S.jsx("th",{className:"p-4 font-semibold text-center",children:"Avance"}),S.jsx("th",{className:"p-4 font-semibold text-center",children:"Gestión / Prob."}),S.jsx("th",{className:"p-4 font-semibold text-right",children:"Detalle"})]})}),S.jsxs("tbody",{className:"divide-y divide-gray-100",children:[p.map(M=>{const F=(Number(M.completedActions)||0)+(Number(M.progressActions)||0)+(Number(M.pendingActions)||0),B=F>0?Math.round((Number(M.completedActions)||0)/F*100):0;return S.jsxs("tr",{className:"hover:bg-gray-50 transition-colors group",children:[S.jsxs("td",{className:"p-4",children:[S.jsx("div",{className:"font-semibold text-gray-800",children:M.name}),S.jsxs("div",{className:"text-xs text-gray-400 mt-0.5",children:["Coach: ",M.coach]})]}),S.jsxs("td",{className:"p-4",children:[S.jsx("div",{className:"text-sm text-gray-700",children:M.region}),S.jsx("div",{className:"text-xs text-indigo-600 bg-indigo-50 inline-block px-2 py-0.5 rounded mt-1",children:M.businessLine})]}),S.jsxs("td",{className:"p-4 align-middle",children:[S.jsxs("div",{className:"flex items-center justify-center gap-3",children:[S.jsx("div",{className:"w-24 h-2 bg-gray-200 rounded-full overflow-hidden",children:S.jsx("div",{className:"h-full bg-indigo-500 rounded-full",style:{width:`${B}%`}})}),S.jsxs("span",{className:"text-sm font-bold text-gray-700 w-8",children:[B,"%"]})]}),S.jsxs("div",{className:"flex gap-2 justify-center mt-2 text-[10px] font-medium text-gray-500",children:[S.jsxs("span",{className:"flex items-center gap-1",children:[S.jsx("div",{className:"w-2 h-2 rounded-full bg-emerald-500"})," ",M.completedActions||0]}),S.jsxs("span",{className:"flex items-center gap-1",children:[S.jsx("div",{className:"w-2 h-2 rounded-full bg-yellow-400"})," ",M.progressActions||0]}),S.jsxs("span",{className:"flex items-center gap-1",children:[S.jsx("div",{className:"w-2 h-2 rounded-full bg-rose-500"})," ",M.pendingActions||0]})]})]}),S.jsxs("td",{className:"p-4 text-center space-y-2",children:[S.jsx("div",{children:S.jsx("span",{className:`text-[10px] font-bold px-2 py-0.5 rounded border ${M.gestionType==="RENOVACIÓN"?"bg-purple-100 text-purple-800 border-purple-200":"bg-blue-100 text-blue-800 border-blue-200"}`,children:M.gestionType||"MANTENIMIENTO"})}),S.jsx("div",{children:S.jsx(iw,{status:M.renewal})})]}),S.jsx("td",{className:"p-4 text-right",children:S.jsx("button",{onClick:()=>{h(M),m(!0)},className:"p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors inline-flex",children:S.jsx(jR,{size:20})})})]},M.id)}),p.length===0&&S.jsx("tr",{children:S.jsx("td",{colSpan:"5",className:"p-8 text-center text-gray-500",children:"No se encontraron colegios con los filtros actuales."})})]})]})})]})})]}),d&&u&&S.jsx(F4,{school:u,onClose:()=>{m(!1),h(null)},db:za,userId:e.uid})]})}function Hl({title:e,value:t,subtitle:n,icon:i,color:s,borderColor:r}){return S.jsxs("div",{className:`p-4 md:p-6 rounded-2xl border ${r} bg-white shadow-sm flex flex-col`,children:[S.jsx("div",{className:"flex justify-between items-start mb-4",children:S.jsx("div",{className:`p-3 rounded-xl ${s}`,children:i})}),S.jsx("h3",{className:"text-gray-500 text-sm font-medium",children:e}),S.jsx("div",{className:"text-2xl md:text-3xl font-black text-gray-800 mt-1",children:t}),n&&S.jsx("p",{className:"text-xs text-gray-400 mt-2",children:n})]})}function Sf({title:e,data:t,icon:n}){return S.jsxs("div",{className:"bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex flex-col",children:[S.jsxs("div",{className:"p-4 bg-gray-50 border-b border-gray-100 flex items-center gap-2",children:[n,S.jsx("h3",{className:"font-bold text-gray-800",children:e})]}),S.jsx("div",{className:"p-0 overflow-auto flex-1 max-h-[300px]",children:S.jsxs("table",{className:"w-full text-left text-sm",children:[S.jsx("thead",{children:S.jsxs("tr",{className:"bg-white text-gray-400 text-xs border-b",children:[S.jsx("th",{className:"p-3 font-medium",children:"Categoría"}),S.jsx("th",{className:"p-3 font-medium text-center text-emerald-600",children:"ALTA"}),S.jsx("th",{className:"p-3 font-medium text-center text-yellow-600",children:"MED"}),S.jsx("th",{className:"p-3 font-medium text-center text-rose-600",children:"BAJA"}),S.jsx("th",{className:"p-3 font-medium text-center font-bold",children:"Tot"})]})}),S.jsxs("tbody",{className:"divide-y divide-gray-50",children:[t.map((i,s)=>S.jsxs("tr",{className:"hover:bg-gray-50",children:[S.jsx("td",{className:"p-3 font-semibold text-gray-700 truncate max-w-[120px]",children:i.name}),S.jsx("td",{className:"p-3 text-center text-emerald-700 font-medium bg-emerald-50/30",children:i.ALTA}),S.jsx("td",{className:"p-3 text-center text-yellow-700 font-medium bg-yellow-50/30",children:i.MEDIA}),S.jsx("td",{className:"p-3 text-center text-rose-700 font-medium bg-rose-50/30",children:i.BAJA}),S.jsx("td",{className:"p-3 text-center font-black text-gray-800 bg-gray-50/50",children:i.total})]},s)),t.length===0&&S.jsx("tr",{children:S.jsx("td",{colSpan:"5",className:"p-4 text-center text-gray-400",children:"Sin datos"})})]})]})})]})}function iw({status:e}){const t={ALTA:"bg-emerald-100 text-emerald-800 border-emerald-200",MEDIA:"bg-yellow-100 text-yellow-800 border-yellow-200",BAJA:"bg-rose-100 text-rose-800 border-rose-200","NO DEFINIDA":"bg-gray-100 text-gray-600 border-gray-200"},n=t[e]||t["NO DEFINIDA"];return S.jsx("span",{className:`px-2 py-0.5 rounded-full text-[10px] md:text-xs font-bold border ${n}`,children:e||"NO DEFINIDA"})}function F4({school:e,onClose:t,db:n,userId:i}){const[s,r]=et.useState(!1),[a,l]=et.useState([]),[u,h]=et.useState(e.completedActions||0),[d,m]=et.useState(e.progressActions||0),[g,T]=et.useState(e.pendingActions||0),[D,V]=et.useState(e.renewal||"NO DEFINIDA"),[P,w]=et.useState(e.gestionType||"MANTENIMIENTO"),[E,R]=et.useState("");et.useEffect(()=>{s||(h(e.completedActions||0),m(e.progressActions||0),T(e.pendingActions||0),V(e.renewal||"NO DEFINIDA"),w(e.gestionType||"MANTENIMIENTO"))},[e,s]),et.useEffect(()=>{const p=FS(n,"users",i,"comments"),_=L4(p,U4("schoolId","==",e.id)),b=nw(_,I=>{const C=I.docs.map(A=>({id:A.id,...A.data()}));C.sort((A,zt)=>zt.createdAt-A.createdAt),l(C)});return()=>b()},[n,i,e.id]);const x=async()=>{const p=Ya(n,"users",i,"schools",e.id);await bf(p,{...e,completedActions:Number(u),progressActions:Number(d),pendingActions:Number(g),renewal:D,gestionType:P,updatedAt:new Date().toISOString()},{merge:!0}),r(!1)},z=async p=>{if(p.preventDefault(),!E.trim())return;const _=Date.now().toString(),b=Ya(n,"users",i,"comments",_);await bf(b,{schoolId:e.id,text:E,status:"OPEN",createdAt:Date.now(),resolvedAt:null}),R("")},G=async p=>{const _=Ya(n,"users",i,"comments",p.id),b=p.status==="OPEN";await bf(_,{...p,status:b?"RESOLVED":"OPEN",resolvedAt:b?Date.now():null},{merge:!0})},v=async p=>{const _=Ya(n,"users",i,"comments",p);await j4(_)};return S.jsx("div",{className:"fixed inset-0 z-[60] flex items-center justify-end bg-black/40 backdrop-blur-sm animate-in fade-in duration-200",children:S.jsxs("div",{className:"bg-white w-full max-w-md h-full shadow-2xl flex flex-col animate-in slide-in-from-right-full duration-300 relative",children:[S.jsxs("div",{className:"p-4 md:p-6 border-b border-gray-100 bg-gray-50 flex justify-between items-start",children:[S.jsxs("div",{className:"pr-8",children:[S.jsx("h2",{className:"text-xl font-bold text-gray-900 leading-tight",children:e.name}),S.jsxs("div",{className:"text-xs text-gray-500 mt-2 grid grid-cols-2 gap-2",children:[S.jsxs("p",{children:["Coach: ",S.jsx("span",{className:"font-semibold text-indigo-600",children:e.coach})]}),S.jsxs("p",{children:["Línea: ",S.jsx("span",{className:"font-semibold text-indigo-600",children:e.businessLine})]}),S.jsxs("p",{children:["Región: ",S.jsx("span",{className:"font-semibold text-gray-700",children:e.region})]}),S.jsxs("p",{children:["Cal/Clas: ",S.jsxs("span",{className:"font-semibold text-gray-700",children:[e.calendar," / ",e.classification]})]})]})]}),S.jsx("button",{onClick:t,className:"p-2 bg-white border border-gray-200 rounded-full hover:bg-gray-100 text-gray-500 transition-colors absolute top-4 right-4",children:S.jsx(Ed,{size:18})})]}),S.jsxs("div",{className:"flex-1 overflow-y-auto p-4 md:p-6 space-y-8 pb-24",children:[S.jsxs("section",{className:"bg-white border border-gray-200 rounded-xl p-5 shadow-sm",children:[S.jsxs("div",{className:"flex justify-between items-center mb-4",children:[S.jsxs("h3",{className:"font-bold text-gray-800 flex items-center gap-2",children:[S.jsx(lA,{size:18,className:"text-indigo-500"})," Clasificación y Avance"]}),s?S.jsxs("div",{className:"flex gap-2",children:[S.jsx("button",{onClick:()=>r(!1),className:"text-xs font-semibold text-gray-500 hover:underline",children:"Cancelar"}),S.jsx("button",{onClick:x,className:"text-xs font-semibold text-emerald-600 hover:underline",children:"Guardar"})]}):S.jsx("button",{onClick:()=>r(!0),className:"text-xs font-semibold text-indigo-600 hover:underline",children:"Editar"})]}),s?S.jsxs("div",{className:"space-y-4",children:[S.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[S.jsx("label",{className:"text-xs font-bold text-gray-600 uppercase",children:"Tipo Gestión"}),S.jsxs("select",{value:P,onChange:p=>w(p.target.value),className:"border rounded px-2 py-1 text-sm font-semibold",children:[S.jsx("option",{value:"MANTENIMIENTO",children:"MANTENIMIENTO"}),S.jsx("option",{value:"RENOVACIÓN",children:"RENOVACIÓN"})]})]}),S.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[S.jsx("label",{className:"text-xs font-bold text-gray-600 uppercase",children:"Prob. Cierre"}),S.jsxs("select",{value:D,onChange:p=>V(p.target.value),className:"border rounded px-2 py-1 text-sm font-semibold",children:[S.jsx("option",{value:"ALTA",children:"ALTA"}),S.jsx("option",{value:"MEDIA",children:"MEDIA"}),S.jsx("option",{value:"BAJA",children:"BAJA"}),S.jsx("option",{value:"NO DEFINIDA",children:"NO DEFINIDA"})]})]}),S.jsx("hr",{className:"my-2"}),S.jsxs("div",{className:"grid grid-cols-2 items-center gap-4",children:[S.jsx("label",{className:"text-sm font-medium text-emerald-700",children:"Acc. Hechas"}),S.jsx("input",{type:"number",min:"0",value:u,onChange:p=>h(p.target.value),className:"border rounded px-3 py-1.5 w-full text-sm"})]}),S.jsxs("div",{className:"grid grid-cols-2 items-center gap-4",children:[S.jsx("label",{className:"text-sm font-medium text-yellow-700",children:"Acc. Progreso"}),S.jsx("input",{type:"number",min:"0",value:d,onChange:p=>m(p.target.value),className:"border rounded px-3 py-1.5 w-full text-sm"})]}),S.jsxs("div",{className:"grid grid-cols-2 items-center gap-4",children:[S.jsx("label",{className:"text-sm font-medium text-rose-700",children:"Acc. Pendientes"}),S.jsx("input",{type:"number",min:"0",value:g,onChange:p=>T(p.target.value),className:"border rounded px-3 py-1.5 w-full text-sm"})]})]}):S.jsxs("div",{className:"space-y-4",children:[S.jsxs("div",{className:"flex gap-2",children:[S.jsx("span",{className:`px-3 py-1 rounded text-xs font-bold border ${e.gestionType==="RENOVACIÓN"?"bg-purple-100 text-purple-800 border-purple-200":"bg-blue-100 text-blue-800 border-blue-200"}`,children:e.gestionType||"MANTENIMIENTO"}),S.jsx(iw,{status:e.renewal})]}),S.jsxs("div",{className:"grid grid-cols-3 gap-2 text-center mt-4",children:[S.jsxs("div",{className:"bg-emerald-50 p-2 md:p-3 rounded-lg border border-emerald-100",children:[S.jsx("div",{className:"text-xl md:text-2xl font-black text-emerald-600",children:e.completedActions||0}),S.jsx("div",{className:"text-[9px] md:text-[10px] uppercase font-bold text-emerald-800 mt-1",children:"Hechas"})]}),S.jsxs("div",{className:"bg-yellow-50 p-2 md:p-3 rounded-lg border border-yellow-100",children:[S.jsx("div",{className:"text-xl md:text-2xl font-black text-yellow-600",children:e.progressActions||0}),S.jsx("div",{className:"text-[9px] md:text-[10px] uppercase font-bold text-yellow-800 mt-1",children:"Progreso"})]}),S.jsxs("div",{className:"bg-rose-50 p-2 md:p-3 rounded-lg border border-rose-100",children:[S.jsx("div",{className:"text-xl md:text-2xl font-black text-rose-600",children:e.pendingActions||0}),S.jsx("div",{className:"text-[9px] md:text-[10px] uppercase font-bold text-rose-800 mt-1",children:"Faltan"})]})]})]})]}),S.jsxs("section",{children:[S.jsxs("h3",{className:"font-bold text-gray-800 flex items-center gap-2 mb-4",children:[S.jsx(WR,{size:18,className:"text-indigo-500"})," Notas y Checklist"]}),S.jsxs("form",{onSubmit:z,className:"flex gap-2 mb-4",children:[S.jsx("input",{type:"text",value:E,onChange:p=>R(p.target.value),placeholder:"Añadir seguimiento...",className:"flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"}),S.jsx("button",{type:"submit",disabled:!E.trim(),className:"bg-indigo-600 text-white p-2 rounded-lg hover:bg-indigo-700 disabled:opacity-50 transition-colors",children:S.jsx(e2,{size:20})})]}),S.jsx("div",{className:"space-y-3",children:a.length===0?S.jsx("p",{className:"text-center text-sm text-gray-400 py-4 italic",children:"No hay notas para este colegio."}):a.map(p=>{const _=p.status==="RESOLVED",b=new Date(p.createdAt).toLocaleDateString("es-CO",{day:"2-digit",month:"short"});return S.jsx("div",{className:`p-3 rounded-lg border transition-all ${_?"bg-gray-50 border-gray-200":"bg-white border-indigo-100 shadow-sm"}`,children:S.jsxs("div",{className:"flex gap-3 items-start",children:[S.jsx("button",{onClick:()=>G(p),className:`mt-0.5 shrink-0 transition-colors ${_?"text-emerald-500 hover:text-gray-400":"text-gray-300 hover:text-emerald-500"}`,children:S.jsx(uA,{size:20,className:_?"fill-emerald-50":""})}),S.jsxs("div",{className:"flex-1",children:[S.jsx("p",{className:`text-sm ${_?"text-gray-500 line-through":"text-gray-800"}`,children:p.text}),S.jsxs("div",{className:"flex items-center gap-3 mt-2 text-[10px] text-gray-400 flex-wrap",children:[S.jsxs("span",{children:["Reportado: ",b]}),_&&p.resolvedAt&&S.jsxs("span",{className:"text-emerald-600 font-medium bg-emerald-50 px-1.5 py-0.5 rounded",children:["Resuelto el ",new Date(p.resolvedAt).toLocaleDateString("es-CO")]})]})]}),S.jsx("button",{onClick:()=>v(p.id),className:"text-gray-300 hover:text-red-500 md:opacity-0 md:group-hover:opacity-100 transition-opacity p-1",children:S.jsx(Ed,{size:14})})]})},p.id)})})]})]})]})})}DR.createRoot(document.getElementById("root")).render(S.jsx($w.StrictMode,{children:S.jsx(H4,{})}));
