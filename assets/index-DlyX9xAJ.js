(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();function n0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var i0={exports:{}},uc={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xw=Symbol.for("react.transitional.element"),Ow=Symbol.for("react.fragment");function s0(e,t,n){var i=null;if(n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),"key"in t){n={};for(var s in t)s!=="key"&&(n[s]=t[s])}else n=t;return t=n.ref,{$$typeof:xw,type:e,key:i,ref:t!==void 0?t:null,props:n}}uc.Fragment=Ow;uc.jsx=s0;uc.jsxs=s0;i0.exports=uc;var I=i0.exports,r0={exports:{}},W={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kd=Symbol.for("react.transitional.element"),Mw=Symbol.for("react.portal"),Vw=Symbol.for("react.fragment"),kw=Symbol.for("react.strict_mode"),Lw=Symbol.for("react.profiler"),Uw=Symbol.for("react.consumer"),Pw=Symbol.for("react.context"),zw=Symbol.for("react.forward_ref"),jw=Symbol.for("react.suspense"),Bw=Symbol.for("react.memo"),a0=Symbol.for("react.lazy"),qw=Symbol.for("react.activity"),Bp=Symbol.iterator;function Hw(e){return e===null||typeof e!="object"?null:(e=Bp&&e[Bp]||e["@@iterator"],typeof e=="function"?e:null)}var o0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},l0=Object.assign,u0={};function Jr(e,t,n){this.props=e,this.context=t,this.refs=u0,this.updater=n||o0}Jr.prototype.isReactComponent={};Jr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Jr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function c0(){}c0.prototype=Jr.prototype;function Qd(e,t,n){this.props=e,this.context=t,this.refs=u0,this.updater=n||o0}var Yd=Qd.prototype=new c0;Yd.constructor=Qd;l0(Yd,Jr.prototype);Yd.isPureReactComponent=!0;var qp=Array.isArray;function Sf(){}var Ct={H:null,A:null,T:null,S:null},h0=Object.prototype.hasOwnProperty;function Xd(e,t,n){var i=n.ref;return{$$typeof:Kd,type:e,key:t,ref:i!==void 0?i:null,props:n}}function Fw(e,t){return Xd(e.type,t,e.props)}function $d(e){return typeof e=="object"&&e!==null&&e.$$typeof===Kd}function Gw(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Hp=/\/+/g;function Eh(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Gw(""+e.key):t.toString(36)}function Kw(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(Sf,Sf):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function Ws(e,t,n,i,s){var r=typeof e;(r==="undefined"||r==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(r){case"bigint":case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Kd:case Mw:a=!0;break;case a0:return a=e._init,Ws(a(e._payload),t,n,i,s)}}if(a)return s=s(e),a=i===""?"."+Eh(e,0):i,qp(s)?(n="",a!=null&&(n=a.replace(Hp,"$&/")+"/"),Ws(s,t,n,"",function(h){return h})):s!=null&&($d(s)&&(s=Fw(s,n+(s.key==null||e&&e.key===s.key?"":(""+s.key).replace(Hp,"$&/")+"/")+a)),t.push(s)),1;a=0;var l=i===""?".":i+":";if(qp(e))for(var u=0;u<e.length;u++)i=e[u],r=l+Eh(i,u),a+=Ws(i,t,n,r,s);else if(u=Hw(e),typeof u=="function")for(e=u.call(e),u=0;!(i=e.next()).done;)i=i.value,r=l+Eh(i,u++),a+=Ws(i,t,n,r,s);else if(r==="object"){if(typeof e.then=="function")return Ws(Kw(e),t,n,i,s);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return a}function _l(e,t,n){if(e==null)return e;var i=[],s=0;return Ws(e,i,"","",function(r){return t.call(n,r,s++)}),i}function Qw(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Fp=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Yw={map:_l,forEach:function(e,t,n){_l(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return _l(e,function(){t++}),t},toArray:function(e){return _l(e,function(t){return t})||[]},only:function(e){if(!$d(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};W.Activity=qw;W.Children=Yw;W.Component=Jr;W.Fragment=Vw;W.Profiler=Lw;W.PureComponent=Qd;W.StrictMode=kw;W.Suspense=jw;W.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Ct;W.__COMPILER_RUNTIME={__proto__:null,c:function(e){return Ct.H.useMemoCache(e)}};W.cache=function(e){return function(){return e.apply(null,arguments)}};W.cacheSignal=function(){return null};W.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=l0({},e.props),s=e.key;if(t!=null)for(r in t.key!==void 0&&(s=""+t.key),t)!h0.call(t,r)||r==="key"||r==="__self"||r==="__source"||r==="ref"&&t.ref===void 0||(i[r]=t[r]);var r=arguments.length-2;if(r===1)i.children=n;else if(1<r){for(var a=Array(r),l=0;l<r;l++)a[l]=arguments[l+2];i.children=a}return Xd(e.type,s,i)};W.createContext=function(e){return e={$$typeof:Pw,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:Uw,_context:e},e};W.createElement=function(e,t,n){var i,s={},r=null;if(t!=null)for(i in t.key!==void 0&&(r=""+t.key),t)h0.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(s[i]=t[i]);var a=arguments.length-2;if(a===1)s.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];s.children=l}if(e&&e.defaultProps)for(i in a=e.defaultProps,a)s[i]===void 0&&(s[i]=a[i]);return Xd(e,r,s)};W.createRef=function(){return{current:null}};W.forwardRef=function(e){return{$$typeof:zw,render:e}};W.isValidElement=$d;W.lazy=function(e){return{$$typeof:a0,_payload:{_status:-1,_result:e},_init:Qw}};W.memo=function(e,t){return{$$typeof:Bw,type:e,compare:t===void 0?null:t}};W.startTransition=function(e){var t=Ct.T,n={};Ct.T=n;try{var i=e(),s=Ct.S;s!==null&&s(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(Sf,Fp)}catch(r){Fp(r)}finally{t!==null&&n.types!==null&&(t.types=n.types),Ct.T=t}};W.unstable_useCacheRefresh=function(){return Ct.H.useCacheRefresh()};W.use=function(e){return Ct.H.use(e)};W.useActionState=function(e,t,n){return Ct.H.useActionState(e,t,n)};W.useCallback=function(e,t){return Ct.H.useCallback(e,t)};W.useContext=function(e){return Ct.H.useContext(e)};W.useDebugValue=function(){};W.useDeferredValue=function(e,t){return Ct.H.useDeferredValue(e,t)};W.useEffect=function(e,t){return Ct.H.useEffect(e,t)};W.useEffectEvent=function(e){return Ct.H.useEffectEvent(e)};W.useId=function(){return Ct.H.useId()};W.useImperativeHandle=function(e,t,n){return Ct.H.useImperativeHandle(e,t,n)};W.useInsertionEffect=function(e,t){return Ct.H.useInsertionEffect(e,t)};W.useLayoutEffect=function(e,t){return Ct.H.useLayoutEffect(e,t)};W.useMemo=function(e,t){return Ct.H.useMemo(e,t)};W.useOptimistic=function(e,t){return Ct.H.useOptimistic(e,t)};W.useReducer=function(e,t,n){return Ct.H.useReducer(e,t,n)};W.useRef=function(e){return Ct.H.useRef(e)};W.useState=function(e){return Ct.H.useState(e)};W.useSyncExternalStore=function(e,t,n){return Ct.H.useSyncExternalStore(e,t,n)};W.useTransition=function(){return Ct.H.useTransition()};W.version="19.2.5";r0.exports=W;var it=r0.exports;const Xw=n0(it);var f0={exports:{}},cc={},d0={exports:{}},m0={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(j,G){var K=j.length;j.push(G);t:for(;0<K;){var tt=K-1>>>1,Ot=j[tt];if(0<s(Ot,G))j[tt]=G,j[K]=Ot,K=tt;else break t}}function n(j){return j.length===0?null:j[0]}function i(j){if(j.length===0)return null;var G=j[0],K=j.pop();if(K!==G){j[0]=K;t:for(var tt=0,Ot=j.length,Ye=Ot>>>1;tt<Ye;){var Xe=2*(tt+1)-1,he=j[Xe],be=Xe+1,_n=j[be];if(0>s(he,K))be<Ot&&0>s(_n,he)?(j[tt]=_n,j[be]=K,tt=be):(j[tt]=he,j[Xe]=K,tt=Xe);else if(be<Ot&&0>s(_n,K))j[tt]=_n,j[be]=K,tt=be;else break t}}return G}function s(j,G){var K=j.sortIndex-G.sortIndex;return K!==0?K:j.id-G.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var r=performance;e.unstable_now=function(){return r.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var u=[],h=[],d=1,m=null,g=3,E=!1,D=!1,M=!1,U=!1,b=typeof setTimeout=="function"?setTimeout:null,A=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;function x(j){for(var G=n(h);G!==null;){if(G.callback===null)i(h);else if(G.startTime<=j)i(h),G.sortIndex=G.expirationTime,t(u,G);else break;G=n(h)}}function z(j){if(M=!1,x(j),!D)if(n(u)!==null)D=!0,P||(P=!0,S());else{var G=n(h);G!==null&&ft(z,G.startTime-j)}}var P=!1,_=-1,y=5,v=-1;function w(){return U?!0:!(e.unstable_now()-v<y)}function R(){if(U=!1,P){var j=e.unstable_now();v=j;var G=!0;try{t:{D=!1,M&&(M=!1,A(_),_=-1),E=!0;var K=g;try{e:{for(x(j),m=n(u);m!==null&&!(m.expirationTime>j&&w());){var tt=m.callback;if(typeof tt=="function"){m.callback=null,g=m.priorityLevel;var Ot=tt(m.expirationTime<=j);if(j=e.unstable_now(),typeof Ot=="function"){m.callback=Ot,x(j),G=!0;break e}m===n(u)&&i(u),x(j)}else i(u);m=n(u)}if(m!==null)G=!0;else{var Ye=n(h);Ye!==null&&ft(z,Ye.startTime-j),G=!1}}break t}finally{m=null,g=K,E=!1}G=void 0}}finally{G?S():P=!1}}}var S;if(typeof C=="function")S=function(){C(R)};else if(typeof MessageChannel<"u"){var T=new MessageChannel,J=T.port2;T.port1.onmessage=R,S=function(){J.postMessage(null)}}else S=function(){b(R,0)};function ft(j,G){_=b(function(){j(e.unstable_now())},G)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(j){j.callback=null},e.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):y=0<j?Math.floor(1e3/j):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_next=function(j){switch(g){case 1:case 2:case 3:var G=3;break;default:G=g}var K=g;g=G;try{return j()}finally{g=K}},e.unstable_requestPaint=function(){U=!0},e.unstable_runWithPriority=function(j,G){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var K=g;g=j;try{return G()}finally{g=K}},e.unstable_scheduleCallback=function(j,G,K){var tt=e.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?tt+K:tt):K=tt,j){case 1:var Ot=-1;break;case 2:Ot=250;break;case 5:Ot=1073741823;break;case 4:Ot=1e4;break;default:Ot=5e3}return Ot=K+Ot,j={id:d++,callback:G,priorityLevel:j,startTime:K,expirationTime:Ot,sortIndex:-1},K>tt?(j.sortIndex=K,t(h,j),n(u)===null&&j===n(h)&&(M?(A(_),_=-1):M=!0,ft(z,K-tt))):(j.sortIndex=Ot,t(u,j),D||E||(D=!0,P||(P=!0,S()))),j},e.unstable_shouldYield=w,e.unstable_wrapCallback=function(j){var G=g;return function(){var K=g;g=G;try{return j.apply(this,arguments)}finally{g=K}}}})(m0);d0.exports=m0;var $w=d0.exports,g0={exports:{}},Ae={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jw=it;function p0(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function di(){}var Ee={d:{f:di,r:function(){throw Error(p0(522))},D:di,C:di,L:di,m:di,X:di,S:di,M:di},p:0,findDOMNode:null},Zw=Symbol.for("react.portal");function Ww(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Zw,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}var Ya=Jw.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function hc(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}Ae.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Ee;Ae.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(p0(299));return Ww(e,t,null,n)};Ae.flushSync=function(e){var t=Ya.T,n=Ee.p;try{if(Ya.T=null,Ee.p=2,e)return e()}finally{Ya.T=t,Ee.p=n,Ee.d.f()}};Ae.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,Ee.d.C(e,t))};Ae.prefetchDNS=function(e){typeof e=="string"&&Ee.d.D(e)};Ae.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=hc(n,t.crossOrigin),s=typeof t.integrity=="string"?t.integrity:void 0,r=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?Ee.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:s,fetchPriority:r}):n==="script"&&Ee.d.X(e,{crossOrigin:i,integrity:s,fetchPriority:r,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};Ae.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=hc(t.as,t.crossOrigin);Ee.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&Ee.d.M(e)};Ae.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=hc(n,t.crossOrigin);Ee.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};Ae.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=hc(t.as,t.crossOrigin);Ee.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else Ee.d.m(e)};Ae.requestFormReset=function(e){Ee.d.r(e)};Ae.unstable_batchedUpdates=function(e,t){return e(t)};Ae.useFormState=function(e,t,n){return Ya.H.useFormState(e,t,n)};Ae.useFormStatus=function(){return Ya.H.useHostTransitionStatus()};Ae.version="19.2.5";function y0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(y0)}catch(e){console.error(e)}}y0(),g0.exports=Ae;var t1=g0.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jt=$w,_0=it,e1=t1;function V(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function v0(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Lo(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function E0(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function T0(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Gp(e){if(Lo(e)!==e)throw Error(V(188))}function n1(e){var t=e.alternate;if(!t){if(t=Lo(e),t===null)throw Error(V(188));return t!==e?null:e}for(var n=e,i=t;;){var s=n.return;if(s===null)break;var r=s.alternate;if(r===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===r.child){for(r=s.child;r;){if(r===n)return Gp(s),e;if(r===i)return Gp(s),t;r=r.sibling}throw Error(V(188))}if(n.return!==i.return)n=s,i=r;else{for(var a=!1,l=s.child;l;){if(l===n){a=!0,n=s,i=r;break}if(l===i){a=!0,i=s,n=r;break}l=l.sibling}if(!a){for(l=r.child;l;){if(l===n){a=!0,n=r,i=s;break}if(l===i){a=!0,i=r,n=s;break}l=l.sibling}if(!a)throw Error(V(189))}}if(n.alternate!==i)throw Error(V(190))}if(n.tag!==3)throw Error(V(188));return n.stateNode.current===n?e:t}function A0(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=A0(e),t!==null)return t;e=e.sibling}return null}var Nt=Object.assign,i1=Symbol.for("react.element"),vl=Symbol.for("react.transitional.element"),Pa=Symbol.for("react.portal"),ar=Symbol.for("react.fragment"),S0=Symbol.for("react.strict_mode"),bf=Symbol.for("react.profiler"),b0=Symbol.for("react.consumer"),qn=Symbol.for("react.context"),Jd=Symbol.for("react.forward_ref"),wf=Symbol.for("react.suspense"),Rf=Symbol.for("react.suspense_list"),Zd=Symbol.for("react.memo"),gi=Symbol.for("react.lazy"),If=Symbol.for("react.activity"),s1=Symbol.for("react.memo_cache_sentinel"),Kp=Symbol.iterator;function Na(e){return e===null||typeof e!="object"?null:(e=Kp&&e[Kp]||e["@@iterator"],typeof e=="function"?e:null)}var r1=Symbol.for("react.client.reference");function Cf(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===r1?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ar:return"Fragment";case bf:return"Profiler";case S0:return"StrictMode";case wf:return"Suspense";case Rf:return"SuspenseList";case If:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Pa:return"Portal";case qn:return e.displayName||"Context";case b0:return(e._context.displayName||"Context")+".Consumer";case Jd:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Zd:return t=e.displayName||null,t!==null?t:Cf(e.type)||"Memo";case gi:t=e._payload,e=e._init;try{return Cf(e(t))}catch{}}return null}var za=Array.isArray,Y=_0.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,mt=e1.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ts={pending:!1,data:null,method:null,action:null},Nf=[],or=-1;function Mn(e){return{current:e}}function ne(e){0>or||(e.current=Nf[or],Nf[or]=null,or--)}function St(e,t){or++,Nf[or]=e.current,e.current=t}var wn=Mn(null),mo=Mn(null),xi=Mn(null),fu=Mn(null);function du(e,t){switch(St(xi,t),St(mo,e),St(wn,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Zy(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Zy(t),e=FT(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ne(wn),St(wn,e)}function Mr(){ne(wn),ne(mo),ne(xi)}function Df(e){e.memoizedState!==null&&St(fu,e);var t=wn.current,n=FT(t,e.type);t!==n&&(St(mo,e),St(wn,n))}function mu(e){mo.current===e&&(ne(wn),ne(mo)),fu.current===e&&(ne(fu),wo._currentValue=Ts)}var Th,Qp;function ms(e){if(Th===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Th=t&&t[1]||"",Qp=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Th+e+Qp}var Ah=!1;function Sh(e,t){if(!e||Ah)return"";Ah=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var m=function(){throw Error()};if(Object.defineProperty(m.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(m,[])}catch(E){var g=E}Reflect.construct(e,[],m)}else{try{m.call()}catch(E){g=E}e.call(m.prototype)}}else{try{throw Error()}catch(E){g=E}(m=e())&&typeof m.catch=="function"&&m.catch(function(){})}}catch(E){if(E&&g&&typeof E.stack=="string")return[E.stack,g.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=i.DetermineComponentFrameRoot(),a=r[0],l=r[1];if(a&&l){var u=a.split(`
`),h=l.split(`
`);for(s=i=0;i<u.length&&!u[i].includes("DetermineComponentFrameRoot");)i++;for(;s<h.length&&!h[s].includes("DetermineComponentFrameRoot");)s++;if(i===u.length||s===h.length)for(i=u.length-1,s=h.length-1;1<=i&&0<=s&&u[i]!==h[s];)s--;for(;1<=i&&0<=s;i--,s--)if(u[i]!==h[s]){if(i!==1||s!==1)do if(i--,s--,0>s||u[i]!==h[s]){var d=`
`+u[i].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=i&&0<=s);break}}}finally{Ah=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?ms(n):""}function a1(e,t){switch(e.tag){case 26:case 27:case 5:return ms(e.type);case 16:return ms("Lazy");case 13:return e.child!==t&&t!==null?ms("Suspense Fallback"):ms("Suspense");case 19:return ms("SuspenseList");case 0:case 15:return Sh(e.type,!1);case 11:return Sh(e.type.render,!1);case 1:return Sh(e.type,!0);case 31:return ms("Activity");default:return""}}function Yp(e){try{var t="",n=null;do t+=a1(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var xf=Object.prototype.hasOwnProperty,Wd=Jt.unstable_scheduleCallback,bh=Jt.unstable_cancelCallback,o1=Jt.unstable_shouldYield,l1=Jt.unstable_requestPaint,je=Jt.unstable_now,u1=Jt.unstable_getCurrentPriorityLevel,w0=Jt.unstable_ImmediatePriority,R0=Jt.unstable_UserBlockingPriority,gu=Jt.unstable_NormalPriority,c1=Jt.unstable_LowPriority,I0=Jt.unstable_IdlePriority,h1=Jt.log,f1=Jt.unstable_setDisableYieldValue,Uo=null,Be=null;function wi(e){if(typeof h1=="function"&&f1(e),Be&&typeof Be.setStrictMode=="function")try{Be.setStrictMode(Uo,e)}catch{}}var qe=Math.clz32?Math.clz32:g1,d1=Math.log,m1=Math.LN2;function g1(e){return e>>>=0,e===0?32:31-(d1(e)/m1|0)|0}var El=256,Tl=262144,Al=4194304;function gs(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function fc(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var s=0,r=e.suspendedLanes,a=e.pingedLanes;e=e.warmLanes;var l=i&134217727;return l!==0?(i=l&~r,i!==0?s=gs(i):(a&=l,a!==0?s=gs(a):n||(n=l&~e,n!==0&&(s=gs(n))))):(l=i&~r,l!==0?s=gs(l):a!==0?s=gs(a):n||(n=i&~e,n!==0&&(s=gs(n)))),s===0?0:t!==0&&t!==s&&!(t&r)&&(r=s&-s,n=t&-t,r>=n||r===32&&(n&4194048)!==0)?t:s}function Po(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function p1(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function C0(){var e=Al;return Al<<=1,!(Al&62914560)&&(Al=4194304),e}function wh(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function zo(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function y1(e,t,n,i,s,r){var a=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var l=e.entanglements,u=e.expirationTimes,h=e.hiddenUpdates;for(n=a&~n;0<n;){var d=31-qe(n),m=1<<d;l[d]=0,u[d]=-1;var g=h[d];if(g!==null)for(h[d]=null,d=0;d<g.length;d++){var E=g[d];E!==null&&(E.lane&=-536870913)}n&=~m}i!==0&&N0(e,i,0),r!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=r&~(a&~t))}function N0(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-qe(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function D0(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-qe(n),s=1<<i;s&t|e[i]&t&&(e[i]|=t),n&=~s}}function x0(e,t){var n=t&-t;return n=n&42?1:tm(n),n&(e.suspendedLanes|t)?0:n}function tm(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function em(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function O0(){var e=mt.p;return e!==0?e:(e=window.event,e===void 0?32:eA(e.type))}function Xp(e,t){var n=mt.p;try{return mt.p=e,t()}finally{mt.p=n}}var ss=Math.random().toString(36).slice(2),re="__reactFiber$"+ss,Oe="__reactProps$"+ss,Zr="__reactContainer$"+ss,Of="__reactEvents$"+ss,_1="__reactListeners$"+ss,v1="__reactHandles$"+ss,$p="__reactResources$"+ss,jo="__reactMarker$"+ss;function nm(e){delete e[re],delete e[Oe],delete e[Of],delete e[_1],delete e[v1]}function lr(e){var t=e[re];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Zr]||n[re]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=i_(e);e!==null;){if(n=e[re])return n;e=i_(e)}return t}e=n,n=e.parentNode}return null}function Wr(e){if(e=e[re]||e[Zr]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function ja(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(V(33))}function vr(e){var t=e[$p];return t||(t=e[$p]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function ee(e){e[jo]=!0}var M0=new Set,V0={};function zs(e,t){Vr(e,t),Vr(e+"Capture",t)}function Vr(e,t){for(V0[e]=t,e=0;e<t.length;e++)M0.add(t[e])}var E1=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Jp={},Zp={};function T1(e){return xf.call(Zp,e)?!0:xf.call(Jp,e)?!1:E1.test(e)?Zp[e]=!0:(Jp[e]=!0,!1)}function Bl(e,t,n){if(T1(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Sl(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function kn(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function Je(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function k0(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function A1(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var s=i.get,r=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(a){n=""+a,r.call(this,a)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(a){n=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Mf(e){if(!e._valueTracker){var t=k0(e)?"checked":"value";e._valueTracker=A1(e,t,""+e[t])}}function L0(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=k0(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function pu(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var S1=/[\n"\\]/g;function tn(e){return e.replace(S1,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Vf(e,t,n,i,s,r,a,l){e.name="",a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"?e.type=a:e.removeAttribute("type"),t!=null?a==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Je(t)):e.value!==""+Je(t)&&(e.value=""+Je(t)):a!=="submit"&&a!=="reset"||e.removeAttribute("value"),t!=null?kf(e,a,Je(t)):n!=null?kf(e,a,Je(n)):i!=null&&e.removeAttribute("value"),s==null&&r!=null&&(e.defaultChecked=!!r),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"?e.name=""+Je(l):e.removeAttribute("name")}function U0(e,t,n,i,s,r,a,l){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||n!=null){if(!(r!=="submit"&&r!=="reset"||t!=null)){Mf(e);return}n=n!=null?""+Je(n):"",t=t!=null?""+Je(t):n,l||t===e.value||(e.value=t),e.defaultValue=t}i=i??s,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=l?e.checked:!!i,e.defaultChecked=!!i,a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(e.name=a),Mf(e)}function kf(e,t,n){t==="number"&&pu(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Er(e,t,n,i){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&i&&(e[n].defaultSelected=!0)}else{for(n=""+Je(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function P0(e,t,n){if(t!=null&&(t=""+Je(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Je(n):""}function z0(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(V(92));if(za(i)){if(1<i.length)throw Error(V(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=Je(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),Mf(e)}function kr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var b1=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Wp(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||b1.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function j0(e,t,n){if(t!=null&&typeof t!="object")throw Error(V(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var s in t)i=t[s],t.hasOwnProperty(s)&&n[s]!==i&&Wp(e,s,i)}else for(var r in t)t.hasOwnProperty(r)&&Wp(e,r,t[r])}function im(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var w1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),R1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ql(e){return R1.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Hn(){}var Lf=null;function sm(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ur=null,Tr=null;function ty(e){var t=Wr(e);if(t&&(e=t.stateNode)){var n=e[Oe]||null;t:switch(e=t.stateNode,t.type){case"input":if(Vf(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+tn(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var s=i[Oe]||null;if(!s)throw Error(V(90));Vf(i,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&L0(i)}break t;case"textarea":P0(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&Er(e,!!n.multiple,t,!1)}}}var Rh=!1;function B0(e,t,n){if(Rh)return e(t,n);Rh=!0;try{var i=e(t);return i}finally{if(Rh=!1,(ur!==null||Tr!==null)&&(bc(),ur&&(t=ur,e=Tr,Tr=ur=null,ty(t),e)))for(t=0;t<e.length;t++)ty(e[t])}}function go(e,t){var n=e.stateNode;if(n===null)return null;var i=n[Oe]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(V(231,t,typeof n));return n}var $n=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Uf=!1;if($n)try{var Da={};Object.defineProperty(Da,"passive",{get:function(){Uf=!0}}),window.addEventListener("test",Da,Da),window.removeEventListener("test",Da,Da)}catch{Uf=!1}var Ri=null,rm=null,Hl=null;function q0(){if(Hl)return Hl;var e,t=rm,n=t.length,i,s="value"in Ri?Ri.value:Ri.textContent,r=s.length;for(e=0;e<n&&t[e]===s[e];e++);var a=n-e;for(i=1;i<=a&&t[n-i]===s[r-i];i++);return Hl=s.slice(e,1<i?1-i:void 0)}function Fl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function bl(){return!0}function ey(){return!1}function Me(e){function t(n,i,s,r,a){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=r,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(r):r[l]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?bl:ey,this.isPropagationStopped=ey,this}return Nt(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=bl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=bl)},persist:function(){},isPersistent:bl}),t}var js={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},dc=Me(js),Bo=Nt({},js,{view:0,detail:0}),I1=Me(Bo),Ih,Ch,xa,mc=Nt({},Bo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:am,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==xa&&(xa&&e.type==="mousemove"?(Ih=e.screenX-xa.screenX,Ch=e.screenY-xa.screenY):Ch=Ih=0,xa=e),Ih)},movementY:function(e){return"movementY"in e?e.movementY:Ch}}),ny=Me(mc),C1=Nt({},mc,{dataTransfer:0}),N1=Me(C1),D1=Nt({},Bo,{relatedTarget:0}),Nh=Me(D1),x1=Nt({},js,{animationName:0,elapsedTime:0,pseudoElement:0}),O1=Me(x1),M1=Nt({},js,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),V1=Me(M1),k1=Nt({},js,{data:0}),iy=Me(k1),L1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},U1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},P1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function z1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=P1[e])?!!t[e]:!1}function am(){return z1}var j1=Nt({},Bo,{key:function(e){if(e.key){var t=L1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Fl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?U1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:am,charCode:function(e){return e.type==="keypress"?Fl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Fl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),B1=Me(j1),q1=Nt({},mc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sy=Me(q1),H1=Nt({},Bo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:am}),F1=Me(H1),G1=Nt({},js,{propertyName:0,elapsedTime:0,pseudoElement:0}),K1=Me(G1),Q1=Nt({},mc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Y1=Me(Q1),X1=Nt({},js,{newState:0,oldState:0}),$1=Me(X1),J1=[9,13,27,32],om=$n&&"CompositionEvent"in window,Xa=null;$n&&"documentMode"in document&&(Xa=document.documentMode);var Z1=$n&&"TextEvent"in window&&!Xa,H0=$n&&(!om||Xa&&8<Xa&&11>=Xa),ry=" ",ay=!1;function F0(e,t){switch(e){case"keyup":return J1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function G0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var cr=!1;function W1(e,t){switch(e){case"compositionend":return G0(t);case"keypress":return t.which!==32?null:(ay=!0,ry);case"textInput":return e=t.data,e===ry&&ay?null:e;default:return null}}function tR(e,t){if(cr)return e==="compositionend"||!om&&F0(e,t)?(e=q0(),Hl=rm=Ri=null,cr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return H0&&t.locale!=="ko"?null:t.data;default:return null}}var eR={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function oy(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!eR[e.type]:t==="textarea"}function K0(e,t,n,i){ur?Tr?Tr.push(i):Tr=[i]:ur=i,t=Vu(t,"onChange"),0<t.length&&(n=new dc("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var $a=null,po=null;function nR(e){BT(e,0)}function gc(e){var t=ja(e);if(L0(t))return e}function ly(e,t){if(e==="change")return t}var Q0=!1;if($n){var Dh;if($n){var xh="oninput"in document;if(!xh){var uy=document.createElement("div");uy.setAttribute("oninput","return;"),xh=typeof uy.oninput=="function"}Dh=xh}else Dh=!1;Q0=Dh&&(!document.documentMode||9<document.documentMode)}function cy(){$a&&($a.detachEvent("onpropertychange",Y0),po=$a=null)}function Y0(e){if(e.propertyName==="value"&&gc(po)){var t=[];K0(t,po,e,sm(e)),B0(nR,t)}}function iR(e,t,n){e==="focusin"?(cy(),$a=t,po=n,$a.attachEvent("onpropertychange",Y0)):e==="focusout"&&cy()}function sR(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return gc(po)}function rR(e,t){if(e==="click")return gc(t)}function aR(e,t){if(e==="input"||e==="change")return gc(t)}function oR(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ke=typeof Object.is=="function"?Object.is:oR;function yo(e,t){if(Ke(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!xf.call(t,s)||!Ke(e[s],t[s]))return!1}return!0}function hy(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function fy(e,t){var n=hy(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=hy(n)}}function X0(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?X0(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function $0(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=pu(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=pu(e.document)}return t}function lm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var lR=$n&&"documentMode"in document&&11>=document.documentMode,hr=null,Pf=null,Ja=null,zf=!1;function dy(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zf||hr==null||hr!==pu(i)||(i=hr,"selectionStart"in i&&lm(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ja&&yo(Ja,i)||(Ja=i,i=Vu(Pf,"onSelect"),0<i.length&&(t=new dc("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=hr)))}function ds(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var fr={animationend:ds("Animation","AnimationEnd"),animationiteration:ds("Animation","AnimationIteration"),animationstart:ds("Animation","AnimationStart"),transitionrun:ds("Transition","TransitionRun"),transitionstart:ds("Transition","TransitionStart"),transitioncancel:ds("Transition","TransitionCancel"),transitionend:ds("Transition","TransitionEnd")},Oh={},J0={};$n&&(J0=document.createElement("div").style,"AnimationEvent"in window||(delete fr.animationend.animation,delete fr.animationiteration.animation,delete fr.animationstart.animation),"TransitionEvent"in window||delete fr.transitionend.transition);function Bs(e){if(Oh[e])return Oh[e];if(!fr[e])return e;var t=fr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in J0)return Oh[e]=t[n];return e}var Z0=Bs("animationend"),W0=Bs("animationiteration"),tE=Bs("animationstart"),uR=Bs("transitionrun"),cR=Bs("transitionstart"),hR=Bs("transitioncancel"),eE=Bs("transitionend"),nE=new Map,jf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");jf.push("scrollEnd");function pn(e,t){nE.set(e,t),zs(t,[e])}var yu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},$e=[],dr=0,um=0;function pc(){for(var e=dr,t=um=dr=0;t<e;){var n=$e[t];$e[t++]=null;var i=$e[t];$e[t++]=null;var s=$e[t];$e[t++]=null;var r=$e[t];if($e[t++]=null,i!==null&&s!==null){var a=i.pending;a===null?s.next=s:(s.next=a.next,a.next=s),i.pending=s}r!==0&&iE(n,s,r)}}function yc(e,t,n,i){$e[dr++]=e,$e[dr++]=t,$e[dr++]=n,$e[dr++]=i,um|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function cm(e,t,n,i){return yc(e,t,n,i),_u(e)}function qs(e,t){return yc(e,null,null,t),_u(e)}function iE(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var s=!1,r=e.return;r!==null;)r.childLanes|=n,i=r.alternate,i!==null&&(i.childLanes|=n),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(s=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,s&&t!==null&&(s=31-qe(n),e=r.hiddenUpdates,i=e[s],i===null?e[s]=[t]:i.push(t),t.lane=n|536870912),r):null}function _u(e){if(50<ao)throw ao=0,od=null,Error(V(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var mr={};function fR(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ue(e,t,n,i){return new fR(e,t,n,i)}function hm(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Qn(e,t){var n=e.alternate;return n===null?(n=Ue(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function sE(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Gl(e,t,n,i,s,r){var a=0;if(i=e,typeof e=="function")hm(e)&&(a=1);else if(typeof e=="string")a=yI(e,n,wn.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case If:return e=Ue(31,n,t,s),e.elementType=If,e.lanes=r,e;case ar:return As(n.children,s,r,t);case S0:a=8,s|=24;break;case bf:return e=Ue(12,n,t,s|2),e.elementType=bf,e.lanes=r,e;case wf:return e=Ue(13,n,t,s),e.elementType=wf,e.lanes=r,e;case Rf:return e=Ue(19,n,t,s),e.elementType=Rf,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case qn:a=10;break t;case b0:a=9;break t;case Jd:a=11;break t;case Zd:a=14;break t;case gi:a=16,i=null;break t}a=29,n=Error(V(130,e===null?"null":typeof e,"")),i=null}return t=Ue(a,n,t,s),t.elementType=e,t.type=i,t.lanes=r,t}function As(e,t,n,i){return e=Ue(7,e,i,t),e.lanes=n,e}function Mh(e,t,n){return e=Ue(6,e,null,t),e.lanes=n,e}function rE(e){var t=Ue(18,null,null,0);return t.stateNode=e,t}function Vh(e,t,n){return t=Ue(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var my=new WeakMap;function en(e,t){if(typeof e=="object"&&e!==null){var n=my.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Yp(t)},my.set(e,t),t)}return{value:e,source:t,stack:Yp(t)}}var gr=[],pr=0,vu=null,_o=0,Ze=[],We=0,Ki=null,An=1,Sn="";function jn(e,t){gr[pr++]=_o,gr[pr++]=vu,vu=e,_o=t}function aE(e,t,n){Ze[We++]=An,Ze[We++]=Sn,Ze[We++]=Ki,Ki=e;var i=An;e=Sn;var s=32-qe(i)-1;i&=~(1<<s),n+=1;var r=32-qe(t)+s;if(30<r){var a=s-s%5;r=(i&(1<<a)-1).toString(32),i>>=a,s-=a,An=1<<32-qe(t)+s|n<<s|i,Sn=r+e}else An=1<<r|n<<s|i,Sn=e}function fm(e){e.return!==null&&(jn(e,1),aE(e,1,0))}function dm(e){for(;e===vu;)vu=gr[--pr],gr[pr]=null,_o=gr[--pr],gr[pr]=null;for(;e===Ki;)Ki=Ze[--We],Ze[We]=null,Sn=Ze[--We],Ze[We]=null,An=Ze[--We],Ze[We]=null}function oE(e,t){Ze[We++]=An,Ze[We++]=Sn,Ze[We++]=Ki,An=t.id,Sn=t.overflow,Ki=e}var ae=null,Rt=null,ct=!1,Oi=null,nn=!1,Bf=Error(V(519));function Qi(e){var t=Error(V(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw vo(en(t,e)),Bf}function gy(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[re]=e,t[Oe]=i,n){case"dialog":st("cancel",t),st("close",t);break;case"iframe":case"object":case"embed":st("load",t);break;case"video":case"audio":for(n=0;n<So.length;n++)st(So[n],t);break;case"source":st("error",t);break;case"img":case"image":case"link":st("error",t),st("load",t);break;case"details":st("toggle",t);break;case"input":st("invalid",t),U0(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":st("invalid",t);break;case"textarea":st("invalid",t),z0(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||HT(t.textContent,n)?(i.popover!=null&&(st("beforetoggle",t),st("toggle",t)),i.onScroll!=null&&st("scroll",t),i.onScrollEnd!=null&&st("scrollend",t),i.onClick!=null&&(t.onclick=Hn),t=!0):t=!1,t||Qi(e,!0)}function py(e){for(ae=e.return;ae;)switch(ae.tag){case 5:case 31:case 13:nn=!1;return;case 27:case 3:nn=!0;return;default:ae=ae.return}}function Js(e){if(e!==ae)return!1;if(!ct)return py(e),ct=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||fd(e.type,e.memoizedProps)),n=!n),n&&Rt&&Qi(e),py(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(V(317));Rt=n_(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(V(317));Rt=n_(e)}else t===27?(t=Rt,rs(e.type)?(e=pd,pd=null,Rt=e):Rt=t):Rt=ae?an(e.stateNode.nextSibling):null;return!0}function Cs(){Rt=ae=null,ct=!1}function kh(){var e=Oi;return e!==null&&(Ce===null?Ce=e:Ce.push.apply(Ce,e),Oi=null),e}function vo(e){Oi===null?Oi=[e]:Oi.push(e)}var qf=Mn(null),Hs=null,Fn=null;function yi(e,t,n){St(qf,t._currentValue),t._currentValue=n}function Yn(e){e._currentValue=qf.current,ne(qf)}function Hf(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Ff(e,t,n,i){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var r=s.dependencies;if(r!==null){var a=s.child;r=r.firstContext;t:for(;r!==null;){var l=r;r=s;for(var u=0;u<t.length;u++)if(l.context===t[u]){r.lanes|=n,l=r.alternate,l!==null&&(l.lanes|=n),Hf(r.return,n,e),i||(a=null);break t}r=l.next}}else if(s.tag===18){if(a=s.return,a===null)throw Error(V(341));a.lanes|=n,r=a.alternate,r!==null&&(r.lanes|=n),Hf(a,n,e),a=null}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}}function ta(e,t,n,i){e=null;for(var s=t,r=!1;s!==null;){if(!r){if(s.flags&524288)r=!0;else if(s.flags&262144)break}if(s.tag===10){var a=s.alternate;if(a===null)throw Error(V(387));if(a=a.memoizedProps,a!==null){var l=s.type;Ke(s.pendingProps.value,a.value)||(e!==null?e.push(l):e=[l])}}else if(s===fu.current){if(a=s.alternate,a===null)throw Error(V(387));a.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(wo):e=[wo])}s=s.return}e!==null&&Ff(t,e,n,i),t.flags|=262144}function Eu(e){for(e=e.firstContext;e!==null;){if(!Ke(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ns(e){Hs=e,Fn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function le(e){return lE(Hs,e)}function wl(e,t){return Hs===null&&Ns(e),lE(e,t)}function lE(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Fn===null){if(e===null)throw Error(V(308));Fn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Fn=Fn.next=t;return n}var dR=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},mR=Jt.unstable_scheduleCallback,gR=Jt.unstable_NormalPriority,Ht={$$typeof:qn,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function mm(){return{controller:new dR,data:new Map,refCount:0}}function qo(e){e.refCount--,e.refCount===0&&mR(gR,function(){e.controller.abort()})}var Za=null,Gf=0,Lr=0,Ar=null;function pR(e,t){if(Za===null){var n=Za=[];Gf=0,Lr=zm(),Ar={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Gf++,t.then(yy,yy),t}function yy(){if(--Gf===0&&Za!==null){Ar!==null&&(Ar.status="fulfilled");var e=Za;Za=null,Lr=0,Ar=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function yR(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(s){n.push(s)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var s=0;s<n.length;s++)(0,n[s])(t)},function(s){for(i.status="rejected",i.reason=s,s=0;s<n.length;s++)(0,n[s])(void 0)}),i}var _y=Y.S;Y.S=function(e,t){AT=je(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&pR(e,t),_y!==null&&_y(e,t)};var Ss=Mn(null);function gm(){var e=Ss.current;return e!==null?e:Tt.pooledCache}function Kl(e,t){t===null?St(Ss,Ss.current):St(Ss,t.pool)}function uE(){var e=gm();return e===null?null:{parent:Ht._currentValue,pool:e}}var ea=Error(V(460)),pm=Error(V(474)),_c=Error(V(542)),Tu={then:function(){}};function vy(e){return e=e.status,e==="fulfilled"||e==="rejected"}function cE(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Hn,Hn),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Ty(e),e;default:if(typeof t.status=="string")t.then(Hn,Hn);else{if(e=Tt,e!==null&&100<e.shellSuspendCounter)throw Error(V(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=i}},function(i){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Ty(e),e}throw bs=t,ea}}function ps(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(bs=n,ea):n}}var bs=null;function Ey(){if(bs===null)throw Error(V(459));var e=bs;return bs=null,e}function Ty(e){if(e===ea||e===_c)throw Error(V(483))}var Sr=null,Eo=0;function Rl(e){var t=Eo;return Eo+=1,Sr===null&&(Sr=[]),cE(Sr,e,t)}function Oa(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Il(e,t){throw t.$$typeof===i1?Error(V(525)):(e=Object.prototype.toString.call(t),Error(V(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function hE(e){function t(b,A){if(e){var C=b.deletions;C===null?(b.deletions=[A],b.flags|=16):C.push(A)}}function n(b,A){if(!e)return null;for(;A!==null;)t(b,A),A=A.sibling;return null}function i(b){for(var A=new Map;b!==null;)b.key!==null?A.set(b.key,b):A.set(b.index,b),b=b.sibling;return A}function s(b,A){return b=Qn(b,A),b.index=0,b.sibling=null,b}function r(b,A,C){return b.index=C,e?(C=b.alternate,C!==null?(C=C.index,C<A?(b.flags|=67108866,A):C):(b.flags|=67108866,A)):(b.flags|=1048576,A)}function a(b){return e&&b.alternate===null&&(b.flags|=67108866),b}function l(b,A,C,x){return A===null||A.tag!==6?(A=Mh(C,b.mode,x),A.return=b,A):(A=s(A,C),A.return=b,A)}function u(b,A,C,x){var z=C.type;return z===ar?d(b,A,C.props.children,x,C.key):A!==null&&(A.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===gi&&ps(z)===A.type)?(A=s(A,C.props),Oa(A,C),A.return=b,A):(A=Gl(C.type,C.key,C.props,null,b.mode,x),Oa(A,C),A.return=b,A)}function h(b,A,C,x){return A===null||A.tag!==4||A.stateNode.containerInfo!==C.containerInfo||A.stateNode.implementation!==C.implementation?(A=Vh(C,b.mode,x),A.return=b,A):(A=s(A,C.children||[]),A.return=b,A)}function d(b,A,C,x,z){return A===null||A.tag!==7?(A=As(C,b.mode,x,z),A.return=b,A):(A=s(A,C),A.return=b,A)}function m(b,A,C){if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return A=Mh(""+A,b.mode,C),A.return=b,A;if(typeof A=="object"&&A!==null){switch(A.$$typeof){case vl:return C=Gl(A.type,A.key,A.props,null,b.mode,C),Oa(C,A),C.return=b,C;case Pa:return A=Vh(A,b.mode,C),A.return=b,A;case gi:return A=ps(A),m(b,A,C)}if(za(A)||Na(A))return A=As(A,b.mode,C,null),A.return=b,A;if(typeof A.then=="function")return m(b,Rl(A),C);if(A.$$typeof===qn)return m(b,wl(b,A),C);Il(b,A)}return null}function g(b,A,C,x){var z=A!==null?A.key:null;if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return z!==null?null:l(b,A,""+C,x);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case vl:return C.key===z?u(b,A,C,x):null;case Pa:return C.key===z?h(b,A,C,x):null;case gi:return C=ps(C),g(b,A,C,x)}if(za(C)||Na(C))return z!==null?null:d(b,A,C,x,null);if(typeof C.then=="function")return g(b,A,Rl(C),x);if(C.$$typeof===qn)return g(b,A,wl(b,C),x);Il(b,C)}return null}function E(b,A,C,x,z){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return b=b.get(C)||null,l(A,b,""+x,z);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case vl:return b=b.get(x.key===null?C:x.key)||null,u(A,b,x,z);case Pa:return b=b.get(x.key===null?C:x.key)||null,h(A,b,x,z);case gi:return x=ps(x),E(b,A,C,x,z)}if(za(x)||Na(x))return b=b.get(C)||null,d(A,b,x,z,null);if(typeof x.then=="function")return E(b,A,C,Rl(x),z);if(x.$$typeof===qn)return E(b,A,C,wl(A,x),z);Il(A,x)}return null}function D(b,A,C,x){for(var z=null,P=null,_=A,y=A=0,v=null;_!==null&&y<C.length;y++){_.index>y?(v=_,_=null):v=_.sibling;var w=g(b,_,C[y],x);if(w===null){_===null&&(_=v);break}e&&_&&w.alternate===null&&t(b,_),A=r(w,A,y),P===null?z=w:P.sibling=w,P=w,_=v}if(y===C.length)return n(b,_),ct&&jn(b,y),z;if(_===null){for(;y<C.length;y++)_=m(b,C[y],x),_!==null&&(A=r(_,A,y),P===null?z=_:P.sibling=_,P=_);return ct&&jn(b,y),z}for(_=i(_);y<C.length;y++)v=E(_,b,y,C[y],x),v!==null&&(e&&v.alternate!==null&&_.delete(v.key===null?y:v.key),A=r(v,A,y),P===null?z=v:P.sibling=v,P=v);return e&&_.forEach(function(R){return t(b,R)}),ct&&jn(b,y),z}function M(b,A,C,x){if(C==null)throw Error(V(151));for(var z=null,P=null,_=A,y=A=0,v=null,w=C.next();_!==null&&!w.done;y++,w=C.next()){_.index>y?(v=_,_=null):v=_.sibling;var R=g(b,_,w.value,x);if(R===null){_===null&&(_=v);break}e&&_&&R.alternate===null&&t(b,_),A=r(R,A,y),P===null?z=R:P.sibling=R,P=R,_=v}if(w.done)return n(b,_),ct&&jn(b,y),z;if(_===null){for(;!w.done;y++,w=C.next())w=m(b,w.value,x),w!==null&&(A=r(w,A,y),P===null?z=w:P.sibling=w,P=w);return ct&&jn(b,y),z}for(_=i(_);!w.done;y++,w=C.next())w=E(_,b,y,w.value,x),w!==null&&(e&&w.alternate!==null&&_.delete(w.key===null?y:w.key),A=r(w,A,y),P===null?z=w:P.sibling=w,P=w);return e&&_.forEach(function(S){return t(b,S)}),ct&&jn(b,y),z}function U(b,A,C,x){if(typeof C=="object"&&C!==null&&C.type===ar&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case vl:t:{for(var z=C.key;A!==null;){if(A.key===z){if(z=C.type,z===ar){if(A.tag===7){n(b,A.sibling),x=s(A,C.props.children),x.return=b,b=x;break t}}else if(A.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===gi&&ps(z)===A.type){n(b,A.sibling),x=s(A,C.props),Oa(x,C),x.return=b,b=x;break t}n(b,A);break}else t(b,A);A=A.sibling}C.type===ar?(x=As(C.props.children,b.mode,x,C.key),x.return=b,b=x):(x=Gl(C.type,C.key,C.props,null,b.mode,x),Oa(x,C),x.return=b,b=x)}return a(b);case Pa:t:{for(z=C.key;A!==null;){if(A.key===z)if(A.tag===4&&A.stateNode.containerInfo===C.containerInfo&&A.stateNode.implementation===C.implementation){n(b,A.sibling),x=s(A,C.children||[]),x.return=b,b=x;break t}else{n(b,A);break}else t(b,A);A=A.sibling}x=Vh(C,b.mode,x),x.return=b,b=x}return a(b);case gi:return C=ps(C),U(b,A,C,x)}if(za(C))return D(b,A,C,x);if(Na(C)){if(z=Na(C),typeof z!="function")throw Error(V(150));return C=z.call(C),M(b,A,C,x)}if(typeof C.then=="function")return U(b,A,Rl(C),x);if(C.$$typeof===qn)return U(b,A,wl(b,C),x);Il(b,C)}return typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint"?(C=""+C,A!==null&&A.tag===6?(n(b,A.sibling),x=s(A,C),x.return=b,b=x):(n(b,A),x=Mh(C,b.mode,x),x.return=b,b=x),a(b)):n(b,A)}return function(b,A,C,x){try{Eo=0;var z=U(b,A,C,x);return Sr=null,z}catch(_){if(_===ea||_===_c)throw _;var P=Ue(29,_,null,b.mode);return P.lanes=x,P.return=b,P}finally{}}}var Ds=hE(!0),fE=hE(!1),pi=!1;function ym(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Kf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Mi(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Vi(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,dt&2){var s=i.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),i.pending=t,t=_u(e),iE(e,null,n),t}return yc(e,i,t,n),_u(e)}function Wa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,D0(e,n)}}function Lh(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var a={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};r===null?s=r=a:r=r.next=a,n=n.next}while(n!==null);r===null?s=r=t:r=r.next=t}else s=r=t;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:r,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Qf=!1;function to(){if(Qf){var e=Ar;if(e!==null)throw e}}function eo(e,t,n,i){Qf=!1;var s=e.updateQueue;pi=!1;var r=s.firstBaseUpdate,a=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var u=l,h=u.next;u.next=null,a===null?r=h:a.next=h,a=u;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==a&&(l===null?d.firstBaseUpdate=h:l.next=h,d.lastBaseUpdate=u))}if(r!==null){var m=s.baseState;a=0,d=h=u=null,l=r;do{var g=l.lane&-536870913,E=g!==l.lane;if(E?(ut&g)===g:(i&g)===g){g!==0&&g===Lr&&(Qf=!0),d!==null&&(d=d.next={lane:0,tag:l.tag,payload:l.payload,callback:null,next:null});t:{var D=e,M=l;g=t;var U=n;switch(M.tag){case 1:if(D=M.payload,typeof D=="function"){m=D.call(U,m,g);break t}m=D;break t;case 3:D.flags=D.flags&-65537|128;case 0:if(D=M.payload,g=typeof D=="function"?D.call(U,m,g):D,g==null)break t;m=Nt({},m,g);break t;case 2:pi=!0}}g=l.callback,g!==null&&(e.flags|=64,E&&(e.flags|=8192),E=s.callbacks,E===null?s.callbacks=[g]:E.push(g))}else E={lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(h=d=E,u=m):d=d.next=E,a|=g;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;E=l,l=E.next,E.next=null,s.lastBaseUpdate=E,s.shared.pending=null}}while(!0);d===null&&(u=m),s.baseState=u,s.firstBaseUpdate=h,s.lastBaseUpdate=d,r===null&&(s.shared.lanes=0),Xi|=a,e.lanes=a,e.memoizedState=m}}function dE(e,t){if(typeof e!="function")throw Error(V(191,e));e.call(t)}function mE(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)dE(n[e],t)}var Ur=Mn(null),Au=Mn(0);function Ay(e,t){e=ti,St(Au,e),St(Ur,t),ti=e|t.baseLanes}function Yf(){St(Au,ti),St(Ur,Ur.current)}function _m(){ti=Au.current,ne(Ur),ne(Au)}var Qe=Mn(null),rn=null;function _i(e){var t=e.alternate;St(Ut,Ut.current&1),St(Qe,e),rn===null&&(t===null||Ur.current!==null||t.memoizedState!==null)&&(rn=e)}function Xf(e){St(Ut,Ut.current),St(Qe,e),rn===null&&(rn=e)}function gE(e){e.tag===22?(St(Ut,Ut.current),St(Qe,e),rn===null&&(rn=e)):vi()}function vi(){St(Ut,Ut.current),St(Qe,Qe.current)}function Le(e){ne(Qe),rn===e&&(rn=null),ne(Ut)}var Ut=Mn(0);function Su(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||md(n)||gd(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Jn=0,et=null,vt=null,Bt=null,bu=!1,br=!1,xs=!1,wu=0,To=0,wr=null,_R=0;function Vt(){throw Error(V(321))}function vm(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ke(e[n],t[n]))return!1;return!0}function Em(e,t,n,i,s,r){return Jn=r,et=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Y.H=e===null||e.memoizedState===null?KE:xm,xs=!1,r=n(i,s),xs=!1,br&&(r=yE(t,n,i,s)),pE(e),r}function pE(e){Y.H=Ao;var t=vt!==null&&vt.next!==null;if(Jn=0,Bt=vt=et=null,bu=!1,To=0,wr=null,t)throw Error(V(300));e===null||Gt||(e=e.dependencies,e!==null&&Eu(e)&&(Gt=!0))}function yE(e,t,n,i){et=e;var s=0;do{if(br&&(wr=null),To=0,br=!1,25<=s)throw Error(V(301));if(s+=1,Bt=vt=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}Y.H=QE,r=t(n,i)}while(br);return r}function vR(){var e=Y.H,t=e.useState()[0];return t=typeof t.then=="function"?Ho(t):t,e=e.useState()[0],(vt!==null?vt.memoizedState:null)!==e&&(et.flags|=1024),t}function Tm(){var e=wu!==0;return wu=0,e}function Am(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Sm(e){if(bu){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}bu=!1}Jn=0,Bt=vt=et=null,br=!1,To=wu=0,wr=null}function ve(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Bt===null?et.memoizedState=Bt=e:Bt=Bt.next=e,Bt}function Pt(){if(vt===null){var e=et.alternate;e=e!==null?e.memoizedState:null}else e=vt.next;var t=Bt===null?et.memoizedState:Bt.next;if(t!==null)Bt=t,vt=e;else{if(e===null)throw et.alternate===null?Error(V(467)):Error(V(310));vt=e,e={memoizedState:vt.memoizedState,baseState:vt.baseState,baseQueue:vt.baseQueue,queue:vt.queue,next:null},Bt===null?et.memoizedState=Bt=e:Bt=Bt.next=e}return Bt}function vc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ho(e){var t=To;return To+=1,wr===null&&(wr=[]),e=cE(wr,e,t),t=et,(Bt===null?t.memoizedState:Bt.next)===null&&(t=t.alternate,Y.H=t===null||t.memoizedState===null?KE:xm),e}function Ec(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ho(e);if(e.$$typeof===qn)return le(e)}throw Error(V(438,String(e)))}function bm(e){var t=null,n=et.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=et.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=vc(),et.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=s1;return t.index++,n}function Zn(e,t){return typeof t=="function"?t(e):t}function Ql(e){var t=Pt();return wm(t,vt,e)}function wm(e,t,n){var i=e.queue;if(i===null)throw Error(V(311));i.lastRenderedReducer=n;var s=e.baseQueue,r=i.pending;if(r!==null){if(s!==null){var a=s.next;s.next=r.next,r.next=a}t.baseQueue=s=r,i.pending=null}if(r=e.baseState,s===null)e.memoizedState=r;else{t=s.next;var l=a=null,u=null,h=t,d=!1;do{var m=h.lane&-536870913;if(m!==h.lane?(ut&m)===m:(Jn&m)===m){var g=h.revertLane;if(g===0)u!==null&&(u=u.next={lane:0,revertLane:0,gesture:null,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),m===Lr&&(d=!0);else if((Jn&g)===g){h=h.next,g===Lr&&(d=!0);continue}else m={lane:0,revertLane:h.revertLane,gesture:null,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null},u===null?(l=u=m,a=r):u=u.next=m,et.lanes|=g,Xi|=g;m=h.action,xs&&n(r,m),r=h.hasEagerState?h.eagerState:n(r,m)}else g={lane:m,revertLane:h.revertLane,gesture:h.gesture,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null},u===null?(l=u=g,a=r):u=u.next=g,et.lanes|=m,Xi|=m;h=h.next}while(h!==null&&h!==t);if(u===null?a=r:u.next=l,!Ke(r,e.memoizedState)&&(Gt=!0,d&&(n=Ar,n!==null)))throw n;e.memoizedState=r,e.baseState=a,e.baseQueue=u,i.lastRenderedState=r}return s===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Uh(e){var t=Pt(),n=t.queue;if(n===null)throw Error(V(311));n.lastRenderedReducer=e;var i=n.dispatch,s=n.pending,r=t.memoizedState;if(s!==null){n.pending=null;var a=s=s.next;do r=e(r,a.action),a=a.next;while(a!==s);Ke(r,t.memoizedState)||(Gt=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),n.lastRenderedState=r}return[r,i]}function _E(e,t,n){var i=et,s=Pt(),r=ct;if(r){if(n===void 0)throw Error(V(407));n=n()}else n=t();var a=!Ke((vt||s).memoizedState,n);if(a&&(s.memoizedState=n,Gt=!0),s=s.queue,Rm(TE.bind(null,i,s,e),[e]),s.getSnapshot!==t||a||Bt!==null&&Bt.memoizedState.tag&1){if(i.flags|=2048,Pr(9,{destroy:void 0},EE.bind(null,i,s,n,t),null),Tt===null)throw Error(V(349));r||Jn&127||vE(i,t,n)}return n}function vE(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=et.updateQueue,t===null?(t=vc(),et.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function EE(e,t,n,i){t.value=n,t.getSnapshot=i,AE(t)&&SE(e)}function TE(e,t,n){return n(function(){AE(t)&&SE(e)})}function AE(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ke(e,n)}catch{return!0}}function SE(e){var t=qs(e,2);t!==null&&xe(t,e,2)}function $f(e){var t=ve();if(typeof e=="function"){var n=e;if(e=n(),xs){wi(!0);try{n()}finally{wi(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zn,lastRenderedState:e},t}function bE(e,t,n,i){return e.baseState=n,wm(e,vt,typeof i=="function"?i:Zn)}function ER(e,t,n,i,s){if(Ac(e))throw Error(V(485));if(e=t.action,e!==null){var r={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(a){r.listeners.push(a)}};Y.T!==null?n(!0):r.isTransition=!1,i(r),n=t.pending,n===null?(r.next=t.pending=r,wE(t,r)):(r.next=n.next,t.pending=n.next=r)}}function wE(e,t){var n=t.action,i=t.payload,s=e.state;if(t.isTransition){var r=Y.T,a={};Y.T=a;try{var l=n(s,i),u=Y.S;u!==null&&u(a,l),Sy(e,t,l)}catch(h){Jf(e,t,h)}finally{r!==null&&a.types!==null&&(r.types=a.types),Y.T=r}}else try{r=n(s,i),Sy(e,t,r)}catch(h){Jf(e,t,h)}}function Sy(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){by(e,t,i)},function(i){return Jf(e,t,i)}):by(e,t,n)}function by(e,t,n){t.status="fulfilled",t.value=n,RE(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,wE(e,n)))}function Jf(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,RE(t),t=t.next;while(t!==i)}e.action=null}function RE(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function IE(e,t){return t}function wy(e,t){if(ct){var n=Tt.formState;if(n!==null){t:{var i=et;if(ct){if(Rt){e:{for(var s=Rt,r=nn;s.nodeType!==8;){if(!r){s=null;break e}if(s=an(s.nextSibling),s===null){s=null;break e}}r=s.data,s=r==="F!"||r==="F"?s:null}if(s){Rt=an(s.nextSibling),i=s.data==="F!";break t}}Qi(i)}i=!1}i&&(t=n[0])}}return n=ve(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:IE,lastRenderedState:t},n.queue=i,n=HE.bind(null,et,i),i.dispatch=n,i=$f(!1),r=Dm.bind(null,et,!1,i.queue),i=ve(),s={state:t,dispatch:null,action:e,pending:null},i.queue=s,n=ER.bind(null,et,s,r,n),s.dispatch=n,i.memoizedState=e,[t,n,!1]}function Ry(e){var t=Pt();return CE(t,vt,e)}function CE(e,t,n){if(t=wm(e,t,IE)[0],e=Ql(Zn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Ho(t)}catch(a){throw a===ea?_c:a}else i=t;t=Pt();var s=t.queue,r=s.dispatch;return n!==t.memoizedState&&(et.flags|=2048,Pr(9,{destroy:void 0},TR.bind(null,s,n),null)),[i,r,e]}function TR(e,t){e.action=t}function Iy(e){var t=Pt(),n=vt;if(n!==null)return CE(t,n,e);Pt(),t=t.memoizedState,n=Pt();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function Pr(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=et.updateQueue,t===null&&(t=vc(),et.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function NE(){return Pt().memoizedState}function Yl(e,t,n,i){var s=ve();et.flags|=e,s.memoizedState=Pr(1|t,{destroy:void 0},n,i===void 0?null:i)}function Tc(e,t,n,i){var s=Pt();i=i===void 0?null:i;var r=s.memoizedState.inst;vt!==null&&i!==null&&vm(i,vt.memoizedState.deps)?s.memoizedState=Pr(t,r,n,i):(et.flags|=e,s.memoizedState=Pr(1|t,r,n,i))}function Cy(e,t){Yl(8390656,8,e,t)}function Rm(e,t){Tc(2048,8,e,t)}function AR(e){et.flags|=4;var t=et.updateQueue;if(t===null)t=vc(),et.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function DE(e){var t=Pt().memoizedState;return AR({ref:t,nextImpl:e}),function(){if(dt&2)throw Error(V(440));return t.impl.apply(void 0,arguments)}}function xE(e,t){return Tc(4,2,e,t)}function OE(e,t){return Tc(4,4,e,t)}function ME(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function VE(e,t,n){n=n!=null?n.concat([e]):null,Tc(4,4,ME.bind(null,t,e),n)}function Im(){}function kE(e,t){var n=Pt();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&vm(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function LE(e,t){var n=Pt();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&vm(t,i[1]))return i[0];if(i=e(),xs){wi(!0);try{e()}finally{wi(!1)}}return n.memoizedState=[i,t],i}function Cm(e,t,n){return n===void 0||Jn&1073741824&&!(ut&261930)?e.memoizedState=t:(e.memoizedState=n,e=bT(),et.lanes|=e,Xi|=e,n)}function UE(e,t,n,i){return Ke(n,t)?n:Ur.current!==null?(e=Cm(e,n,i),Ke(e,t)||(Gt=!0),e):!(Jn&42)||Jn&1073741824&&!(ut&261930)?(Gt=!0,e.memoizedState=n):(e=bT(),et.lanes|=e,Xi|=e,t)}function PE(e,t,n,i,s){var r=mt.p;mt.p=r!==0&&8>r?r:8;var a=Y.T,l={};Y.T=l,Dm(e,!1,t,n);try{var u=s(),h=Y.S;if(h!==null&&h(l,u),u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=yR(u,i);no(e,t,d,He(e))}else no(e,t,i,He(e))}catch(m){no(e,t,{then:function(){},status:"rejected",reason:m},He())}finally{mt.p=r,a!==null&&l.types!==null&&(a.types=l.types),Y.T=a}}function SR(){}function Zf(e,t,n,i){if(e.tag!==5)throw Error(V(476));var s=zE(e).queue;PE(e,s,t,Ts,n===null?SR:function(){return jE(e),n(i)})}function zE(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Ts,baseState:Ts,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zn,lastRenderedState:Ts},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function jE(e){var t=zE(e);t.next===null&&(t=e.alternate.memoizedState),no(e,t.next.queue,{},He())}function Nm(){return le(wo)}function BE(){return Pt().memoizedState}function qE(){return Pt().memoizedState}function bR(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=He();e=Mi(n);var i=Vi(t,e,n);i!==null&&(xe(i,t,n),Wa(i,t,n)),t={cache:mm()},e.payload=t;return}t=t.return}}function wR(e,t,n){var i=He();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Ac(e)?FE(t,n):(n=cm(e,t,n,i),n!==null&&(xe(n,e,i),GE(n,t,i)))}function HE(e,t,n){var i=He();no(e,t,n,i)}function no(e,t,n,i){var s={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ac(e))FE(t,s);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var a=t.lastRenderedState,l=r(a,n);if(s.hasEagerState=!0,s.eagerState=l,Ke(l,a))return yc(e,t,s,0),Tt===null&&pc(),!1}catch{}finally{}if(n=cm(e,t,s,i),n!==null)return xe(n,e,i),GE(n,t,i),!0}return!1}function Dm(e,t,n,i){if(i={lane:2,revertLane:zm(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Ac(e)){if(t)throw Error(V(479))}else t=cm(e,n,i,2),t!==null&&xe(t,e,2)}function Ac(e){var t=e.alternate;return e===et||t!==null&&t===et}function FE(e,t){br=bu=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function GE(e,t,n){if(n&4194048){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,D0(e,n)}}var Ao={readContext:le,use:Ec,useCallback:Vt,useContext:Vt,useEffect:Vt,useImperativeHandle:Vt,useLayoutEffect:Vt,useInsertionEffect:Vt,useMemo:Vt,useReducer:Vt,useRef:Vt,useState:Vt,useDebugValue:Vt,useDeferredValue:Vt,useTransition:Vt,useSyncExternalStore:Vt,useId:Vt,useHostTransitionStatus:Vt,useFormState:Vt,useActionState:Vt,useOptimistic:Vt,useMemoCache:Vt,useCacheRefresh:Vt};Ao.useEffectEvent=Vt;var KE={readContext:le,use:Ec,useCallback:function(e,t){return ve().memoizedState=[e,t===void 0?null:t],e},useContext:le,useEffect:Cy,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Yl(4194308,4,ME.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Yl(4194308,4,e,t)},useInsertionEffect:function(e,t){Yl(4,2,e,t)},useMemo:function(e,t){var n=ve();t=t===void 0?null:t;var i=e();if(xs){wi(!0);try{e()}finally{wi(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=ve();if(n!==void 0){var s=n(t);if(xs){wi(!0);try{n(t)}finally{wi(!1)}}}else s=t;return i.memoizedState=i.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},i.queue=e,e=e.dispatch=wR.bind(null,et,e),[i.memoizedState,e]},useRef:function(e){var t=ve();return e={current:e},t.memoizedState=e},useState:function(e){e=$f(e);var t=e.queue,n=HE.bind(null,et,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Im,useDeferredValue:function(e,t){var n=ve();return Cm(n,e,t)},useTransition:function(){var e=$f(!1);return e=PE.bind(null,et,e.queue,!0,!1),ve().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=et,s=ve();if(ct){if(n===void 0)throw Error(V(407));n=n()}else{if(n=t(),Tt===null)throw Error(V(349));ut&127||vE(i,t,n)}s.memoizedState=n;var r={value:n,getSnapshot:t};return s.queue=r,Cy(TE.bind(null,i,r,e),[e]),i.flags|=2048,Pr(9,{destroy:void 0},EE.bind(null,i,r,n,t),null),n},useId:function(){var e=ve(),t=Tt.identifierPrefix;if(ct){var n=Sn,i=An;n=(i&~(1<<32-qe(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=wu++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=_R++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Nm,useFormState:wy,useActionState:wy,useOptimistic:function(e){var t=ve();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Dm.bind(null,et,!0,n),n.dispatch=t,[e,t]},useMemoCache:bm,useCacheRefresh:function(){return ve().memoizedState=bR.bind(null,et)},useEffectEvent:function(e){var t=ve(),n={impl:e};return t.memoizedState=n,function(){if(dt&2)throw Error(V(440));return n.impl.apply(void 0,arguments)}}},xm={readContext:le,use:Ec,useCallback:kE,useContext:le,useEffect:Rm,useImperativeHandle:VE,useInsertionEffect:xE,useLayoutEffect:OE,useMemo:LE,useReducer:Ql,useRef:NE,useState:function(){return Ql(Zn)},useDebugValue:Im,useDeferredValue:function(e,t){var n=Pt();return UE(n,vt.memoizedState,e,t)},useTransition:function(){var e=Ql(Zn)[0],t=Pt().memoizedState;return[typeof e=="boolean"?e:Ho(e),t]},useSyncExternalStore:_E,useId:BE,useHostTransitionStatus:Nm,useFormState:Ry,useActionState:Ry,useOptimistic:function(e,t){var n=Pt();return bE(n,vt,e,t)},useMemoCache:bm,useCacheRefresh:qE};xm.useEffectEvent=DE;var QE={readContext:le,use:Ec,useCallback:kE,useContext:le,useEffect:Rm,useImperativeHandle:VE,useInsertionEffect:xE,useLayoutEffect:OE,useMemo:LE,useReducer:Uh,useRef:NE,useState:function(){return Uh(Zn)},useDebugValue:Im,useDeferredValue:function(e,t){var n=Pt();return vt===null?Cm(n,e,t):UE(n,vt.memoizedState,e,t)},useTransition:function(){var e=Uh(Zn)[0],t=Pt().memoizedState;return[typeof e=="boolean"?e:Ho(e),t]},useSyncExternalStore:_E,useId:BE,useHostTransitionStatus:Nm,useFormState:Iy,useActionState:Iy,useOptimistic:function(e,t){var n=Pt();return vt!==null?bE(n,vt,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:bm,useCacheRefresh:qE};QE.useEffectEvent=DE;function Ph(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:Nt({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Wf={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=He(),s=Mi(i);s.payload=t,n!=null&&(s.callback=n),t=Vi(e,s,i),t!==null&&(xe(t,e,i),Wa(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=He(),s=Mi(i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Vi(e,s,i),t!==null&&(xe(t,e,i),Wa(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=He(),i=Mi(n);i.tag=2,t!=null&&(i.callback=t),t=Vi(e,i,n),t!==null&&(xe(t,e,n),Wa(t,e,n))}};function Ny(e,t,n,i,s,r,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,r,a):t.prototype&&t.prototype.isPureReactComponent?!yo(n,i)||!yo(s,r):!0}function Dy(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Wf.enqueueReplaceState(t,t.state,null)}function Os(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=Nt({},n));for(var s in e)n[s]===void 0&&(n[s]=e[s])}return n}function YE(e){yu(e)}function XE(e){console.error(e)}function $E(e){yu(e)}function Ru(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function xy(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function td(e,t,n){return n=Mi(n),n.tag=3,n.payload={element:null},n.callback=function(){Ru(e,t)},n}function JE(e){return e=Mi(e),e.tag=3,e}function ZE(e,t,n,i){var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var r=i.value;e.payload=function(){return s(r)},e.callback=function(){xy(t,n,i)}}var a=n.stateNode;a!==null&&typeof a.componentDidCatch=="function"&&(e.callback=function(){xy(t,n,i),typeof s!="function"&&(ki===null?ki=new Set([this]):ki.add(this));var l=i.stack;this.componentDidCatch(i.value,{componentStack:l!==null?l:""})})}function RR(e,t,n,i,s){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&ta(t,n,s,!0),n=Qe.current,n!==null){switch(n.tag){case 31:case 13:return rn===null?xu():n.alternate===null&&kt===0&&(kt=3),n.flags&=-257,n.flags|=65536,n.lanes=s,i===Tu?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),Xh(e,i,s)),!1;case 22:return n.flags|=65536,i===Tu?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),Xh(e,i,s)),!1}throw Error(V(435,n.tag))}return Xh(e,i,s),xu(),!1}if(ct)return t=Qe.current,t!==null?(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=s,i!==Bf&&(e=Error(V(422),{cause:i}),vo(en(e,n)))):(i!==Bf&&(t=Error(V(423),{cause:i}),vo(en(t,n))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,i=en(i,n),s=td(e.stateNode,i,s),Lh(e,s),kt!==4&&(kt=2)),!1;var r=Error(V(520),{cause:i});if(r=en(r,n),ro===null?ro=[r]:ro.push(r),kt!==4&&(kt=2),t===null)return!0;i=en(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=s&-s,n.lanes|=e,e=td(n.stateNode,i,e),Lh(n,e),!1;case 1:if(t=n.type,r=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(ki===null||!ki.has(r))))return n.flags|=65536,s&=-s,n.lanes|=s,s=JE(s),ZE(s,e,n,i),Lh(n,s),!1}n=n.return}while(n!==null);return!1}var Om=Error(V(461)),Gt=!1;function ie(e,t,n,i){t.child=e===null?fE(t,null,n,i):Ds(t,e.child,n,i)}function Oy(e,t,n,i,s){n=n.render;var r=t.ref;if("ref"in i){var a={};for(var l in i)l!=="ref"&&(a[l]=i[l])}else a=i;return Ns(t),i=Em(e,t,n,a,r,s),l=Tm(),e!==null&&!Gt?(Am(e,t,s),Wn(e,t,s)):(ct&&l&&fm(t),t.flags|=1,ie(e,t,i,s),t.child)}function My(e,t,n,i,s){if(e===null){var r=n.type;return typeof r=="function"&&!hm(r)&&r.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=r,WE(e,t,r,i,s)):(e=Gl(n.type,null,i,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!Mm(e,s)){var a=r.memoizedProps;if(n=n.compare,n=n!==null?n:yo,n(a,i)&&e.ref===t.ref)return Wn(e,t,s)}return t.flags|=1,e=Qn(r,i),e.ref=t.ref,e.return=t,t.child=e}function WE(e,t,n,i,s){if(e!==null){var r=e.memoizedProps;if(yo(r,i)&&e.ref===t.ref)if(Gt=!1,t.pendingProps=i=r,Mm(e,s))e.flags&131072&&(Gt=!0);else return t.lanes=e.lanes,Wn(e,t,s)}return ed(e,t,n,i,s)}function tT(e,t,n,i){var s=i.children,r=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if(t.flags&128){if(r=r!==null?r.baseLanes|n:n,e!==null){for(i=t.child=e.child,s=0;i!==null;)s=s|i.lanes|i.childLanes,i=i.sibling;i=s&~r}else i=0,t.child=null;return Vy(e,t,r,n,i)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Kl(t,r!==null?r.cachePool:null),r!==null?Ay(t,r):Yf(),gE(t);else return i=t.lanes=536870912,Vy(e,t,r!==null?r.baseLanes|n:n,n,i)}else r!==null?(Kl(t,r.cachePool),Ay(t,r),vi(),t.memoizedState=null):(e!==null&&Kl(t,null),Yf(),vi());return ie(e,t,s,n),t.child}function Ba(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Vy(e,t,n,i,s){var r=gm();return r=r===null?null:{parent:Ht._currentValue,pool:r},t.memoizedState={baseLanes:n,cachePool:r},e!==null&&Kl(t,null),Yf(),gE(t),e!==null&&ta(e,t,i,!0),t.childLanes=s,null}function Xl(e,t){return t=Iu({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function ky(e,t,n){return Ds(t,e.child,null,n),e=Xl(t,t.pendingProps),e.flags|=2,Le(t),t.memoizedState=null,e}function IR(e,t,n){var i=t.pendingProps,s=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ct){if(i.mode==="hidden")return e=Xl(t,i),t.lanes=536870912,Ba(null,e);if(Xf(t),(e=Rt)?(e=KT(e,nn),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ki!==null?{id:An,overflow:Sn}:null,retryLane:536870912,hydrationErrors:null},n=rE(e),n.return=t,t.child=n,ae=t,Rt=null)):e=null,e===null)throw Qi(t);return t.lanes=536870912,null}return Xl(t,i)}var r=e.memoizedState;if(r!==null){var a=r.dehydrated;if(Xf(t),s)if(t.flags&256)t.flags&=-257,t=ky(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(V(558));else if(Gt||ta(e,t,n,!1),s=(n&e.childLanes)!==0,Gt||s){if(i=Tt,i!==null&&(a=x0(i,n),a!==0&&a!==r.retryLane))throw r.retryLane=a,qs(e,a),xe(i,e,a),Om;xu(),t=ky(e,t,n)}else e=r.treeContext,Rt=an(a.nextSibling),ae=t,ct=!0,Oi=null,nn=!1,e!==null&&oE(t,e),t=Xl(t,i),t.flags|=4096;return t}return e=Qn(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function $l(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(V(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function ed(e,t,n,i,s){return Ns(t),n=Em(e,t,n,i,void 0,s),i=Tm(),e!==null&&!Gt?(Am(e,t,s),Wn(e,t,s)):(ct&&i&&fm(t),t.flags|=1,ie(e,t,n,s),t.child)}function Ly(e,t,n,i,s,r){return Ns(t),t.updateQueue=null,n=yE(t,i,n,s),pE(e),i=Tm(),e!==null&&!Gt?(Am(e,t,r),Wn(e,t,r)):(ct&&i&&fm(t),t.flags|=1,ie(e,t,n,r),t.child)}function Uy(e,t,n,i,s){if(Ns(t),t.stateNode===null){var r=mr,a=n.contextType;typeof a=="object"&&a!==null&&(r=le(a)),r=new n(i,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Wf,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=i,r.state=t.memoizedState,r.refs={},ym(t),a=n.contextType,r.context=typeof a=="object"&&a!==null?le(a):mr,r.state=t.memoizedState,a=n.getDerivedStateFromProps,typeof a=="function"&&(Ph(t,n,a,i),r.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(a=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),a!==r.state&&Wf.enqueueReplaceState(r,r.state,null),eo(t,i,r,s),to(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){r=t.stateNode;var l=t.memoizedProps,u=Os(n,l);r.props=u;var h=r.context,d=n.contextType;a=mr,typeof d=="object"&&d!==null&&(a=le(d));var m=n.getDerivedStateFromProps;d=typeof m=="function"||typeof r.getSnapshotBeforeUpdate=="function",l=t.pendingProps!==l,d||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(l||h!==a)&&Dy(t,r,i,a),pi=!1;var g=t.memoizedState;r.state=g,eo(t,i,r,s),to(),h=t.memoizedState,l||g!==h||pi?(typeof m=="function"&&(Ph(t,n,m,i),h=t.memoizedState),(u=pi||Ny(t,n,u,i,g,h,a))?(d||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=h),r.props=i,r.state=h,r.context=a,i=u):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{r=t.stateNode,Kf(e,t),a=t.memoizedProps,d=Os(n,a),r.props=d,m=t.pendingProps,g=r.context,h=n.contextType,u=mr,typeof h=="object"&&h!==null&&(u=le(h)),l=n.getDerivedStateFromProps,(h=typeof l=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(a!==m||g!==u)&&Dy(t,r,i,u),pi=!1,g=t.memoizedState,r.state=g,eo(t,i,r,s),to();var E=t.memoizedState;a!==m||g!==E||pi||e!==null&&e.dependencies!==null&&Eu(e.dependencies)?(typeof l=="function"&&(Ph(t,n,l,i),E=t.memoizedState),(d=pi||Ny(t,n,d,i,g,E,u)||e!==null&&e.dependencies!==null&&Eu(e.dependencies))?(h||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(i,E,u),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(i,E,u)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=E),r.props=i,r.state=E,r.context=u,i=d):(typeof r.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),i=!1)}return r=i,$l(e,t),i=(t.flags&128)!==0,r||i?(r=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&i?(t.child=Ds(t,e.child,null,s),t.child=Ds(t,null,n,s)):ie(e,t,n,s),t.memoizedState=r.state,e=t.child):e=Wn(e,t,s),e}function Py(e,t,n,i){return Cs(),t.flags|=256,ie(e,t,n,i),t.child}var zh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function jh(e){return{baseLanes:e,cachePool:uE()}}function Bh(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Pe),e}function eT(e,t,n){var i=t.pendingProps,s=!1,r=(t.flags&128)!==0,a;if((a=r)||(a=e!==null&&e.memoizedState===null?!1:(Ut.current&2)!==0),a&&(s=!0,t.flags&=-129),a=(t.flags&32)!==0,t.flags&=-33,e===null){if(ct){if(s?_i(t):vi(),(e=Rt)?(e=KT(e,nn),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ki!==null?{id:An,overflow:Sn}:null,retryLane:536870912,hydrationErrors:null},n=rE(e),n.return=t,t.child=n,ae=t,Rt=null)):e=null,e===null)throw Qi(t);return gd(e)?t.lanes=32:t.lanes=536870912,null}var l=i.children;return i=i.fallback,s?(vi(),s=t.mode,l=Iu({mode:"hidden",children:l},s),i=As(i,s,n,null),l.return=t,i.return=t,l.sibling=i,t.child=l,i=t.child,i.memoizedState=jh(n),i.childLanes=Bh(e,a,n),t.memoizedState=zh,Ba(null,i)):(_i(t),nd(t,l))}var u=e.memoizedState;if(u!==null&&(l=u.dehydrated,l!==null)){if(r)t.flags&256?(_i(t),t.flags&=-257,t=qh(e,t,n)):t.memoizedState!==null?(vi(),t.child=e.child,t.flags|=128,t=null):(vi(),l=i.fallback,s=t.mode,i=Iu({mode:"visible",children:i.children},s),l=As(l,s,n,null),l.flags|=2,i.return=t,l.return=t,i.sibling=l,t.child=i,Ds(t,e.child,null,n),i=t.child,i.memoizedState=jh(n),i.childLanes=Bh(e,a,n),t.memoizedState=zh,t=Ba(null,i));else if(_i(t),gd(l)){if(a=l.nextSibling&&l.nextSibling.dataset,a)var h=a.dgst;a=h,i=Error(V(419)),i.stack="",i.digest=a,vo({value:i,source:null,stack:null}),t=qh(e,t,n)}else if(Gt||ta(e,t,n,!1),a=(n&e.childLanes)!==0,Gt||a){if(a=Tt,a!==null&&(i=x0(a,n),i!==0&&i!==u.retryLane))throw u.retryLane=i,qs(e,i),xe(a,e,i),Om;md(l)||xu(),t=qh(e,t,n)}else md(l)?(t.flags|=192,t.child=e.child,t=null):(e=u.treeContext,Rt=an(l.nextSibling),ae=t,ct=!0,Oi=null,nn=!1,e!==null&&oE(t,e),t=nd(t,i.children),t.flags|=4096);return t}return s?(vi(),l=i.fallback,s=t.mode,u=e.child,h=u.sibling,i=Qn(u,{mode:"hidden",children:i.children}),i.subtreeFlags=u.subtreeFlags&65011712,h!==null?l=Qn(h,l):(l=As(l,s,n,null),l.flags|=2),l.return=t,i.return=t,i.sibling=l,t.child=i,Ba(null,i),i=t.child,l=e.child.memoizedState,l===null?l=jh(n):(s=l.cachePool,s!==null?(u=Ht._currentValue,s=s.parent!==u?{parent:u,pool:u}:s):s=uE(),l={baseLanes:l.baseLanes|n,cachePool:s}),i.memoizedState=l,i.childLanes=Bh(e,a,n),t.memoizedState=zh,Ba(e.child,i)):(_i(t),n=e.child,e=n.sibling,n=Qn(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(a=t.deletions,a===null?(t.deletions=[e],t.flags|=16):a.push(e)),t.child=n,t.memoizedState=null,n)}function nd(e,t){return t=Iu({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Iu(e,t){return e=Ue(22,e,null,t),e.lanes=0,e}function qh(e,t,n){return Ds(t,e.child,null,n),e=nd(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function zy(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Hf(e.return,t,n)}function Hh(e,t,n,i,s,r){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s,treeForkCount:r}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=i,a.tail=n,a.tailMode=s,a.treeForkCount=r)}function nT(e,t,n){var i=t.pendingProps,s=i.revealOrder,r=i.tail;i=i.children;var a=Ut.current,l=(a&2)!==0;if(l?(a=a&1|2,t.flags|=128):a&=1,St(Ut,a),ie(e,t,i,n),i=ct?_o:0,!l&&e!==null&&e.flags&128)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&zy(e,n,t);else if(e.tag===19)zy(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&Su(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),Hh(t,!1,s,n,r,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&Su(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}Hh(t,!0,n,null,r,i);break;case"together":Hh(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function Wn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Xi|=t.lanes,!(n&t.childLanes))if(e!==null){if(ta(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(V(153));if(t.child!==null){for(e=t.child,n=Qn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Qn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Mm(e,t){return e.lanes&t?!0:(e=e.dependencies,!!(e!==null&&Eu(e)))}function CR(e,t,n){switch(t.tag){case 3:du(t,t.stateNode.containerInfo),yi(t,Ht,e.memoizedState.cache),Cs();break;case 27:case 5:Df(t);break;case 4:du(t,t.stateNode.containerInfo);break;case 10:yi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Xf(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(_i(t),t.flags|=128,null):n&t.child.childLanes?eT(e,t,n):(_i(t),e=Wn(e,t,n),e!==null?e.sibling:null);_i(t);break;case 19:var s=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(ta(e,t,n,!1),i=(n&t.childLanes)!==0),s){if(i)return nT(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),St(Ut,Ut.current),i)break;return null;case 22:return t.lanes=0,tT(e,t,n,t.pendingProps);case 24:yi(t,Ht,e.memoizedState.cache)}return Wn(e,t,n)}function iT(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Gt=!0;else{if(!Mm(e,n)&&!(t.flags&128))return Gt=!1,CR(e,t,n);Gt=!!(e.flags&131072)}else Gt=!1,ct&&t.flags&1048576&&aE(t,_o,t.index);switch(t.lanes=0,t.tag){case 16:t:{var i=t.pendingProps;if(e=ps(t.elementType),t.type=e,typeof e=="function")hm(e)?(i=Os(e,i),t.tag=1,t=Uy(null,t,e,i,n)):(t.tag=0,t=ed(null,t,e,i,n));else{if(e!=null){var s=e.$$typeof;if(s===Jd){t.tag=11,t=Oy(null,t,e,i,n);break t}else if(s===Zd){t.tag=14,t=My(null,t,e,i,n);break t}}throw t=Cf(e)||e,Error(V(306,t,""))}}return t;case 0:return ed(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,s=Os(i,t.pendingProps),Uy(e,t,i,s,n);case 3:t:{if(du(t,t.stateNode.containerInfo),e===null)throw Error(V(387));i=t.pendingProps;var r=t.memoizedState;s=r.element,Kf(e,t),eo(t,i,null,n);var a=t.memoizedState;if(i=a.cache,yi(t,Ht,i),i!==r.cache&&Ff(t,[Ht],n,!0),to(),i=a.element,r.isDehydrated)if(r={element:i,isDehydrated:!1,cache:a.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=Py(e,t,i,n);break t}else if(i!==s){s=en(Error(V(424)),t),vo(s),t=Py(e,t,i,n);break t}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Rt=an(e.firstChild),ae=t,ct=!0,Oi=null,nn=!0,n=fE(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Cs(),i===s){t=Wn(e,t,n);break t}ie(e,t,i,n)}t=t.child}return t;case 26:return $l(e,t),e===null?(n=r_(t.type,null,t.pendingProps,null))?t.memoizedState=n:ct||(n=t.type,e=t.pendingProps,i=ku(xi.current).createElement(n),i[re]=t,i[Oe]=e,ue(i,n,e),ee(i),t.stateNode=i):t.memoizedState=r_(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Df(t),e===null&&ct&&(i=t.stateNode=QT(t.type,t.pendingProps,xi.current),ae=t,nn=!0,s=Rt,rs(t.type)?(pd=s,Rt=an(i.firstChild)):Rt=s),ie(e,t,t.pendingProps.children,n),$l(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ct&&((s=i=Rt)&&(i=sI(i,t.type,t.pendingProps,nn),i!==null?(t.stateNode=i,ae=t,Rt=an(i.firstChild),nn=!1,s=!0):s=!1),s||Qi(t)),Df(t),s=t.type,r=t.pendingProps,a=e!==null?e.memoizedProps:null,i=r.children,fd(s,r)?i=null:a!==null&&fd(s,a)&&(t.flags|=32),t.memoizedState!==null&&(s=Em(e,t,vR,null,null,n),wo._currentValue=s),$l(e,t),ie(e,t,i,n),t.child;case 6:return e===null&&ct&&((e=n=Rt)&&(n=rI(n,t.pendingProps,nn),n!==null?(t.stateNode=n,ae=t,Rt=null,e=!0):e=!1),e||Qi(t)),null;case 13:return eT(e,t,n);case 4:return du(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Ds(t,null,i,n):ie(e,t,i,n),t.child;case 11:return Oy(e,t,t.type,t.pendingProps,n);case 7:return ie(e,t,t.pendingProps,n),t.child;case 8:return ie(e,t,t.pendingProps.children,n),t.child;case 12:return ie(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,yi(t,t.type,i.value),ie(e,t,i.children,n),t.child;case 9:return s=t.type._context,i=t.pendingProps.children,Ns(t),s=le(s),i=i(s),t.flags|=1,ie(e,t,i,n),t.child;case 14:return My(e,t,t.type,t.pendingProps,n);case 15:return WE(e,t,t.type,t.pendingProps,n);case 19:return nT(e,t,n);case 31:return IR(e,t,n);case 22:return tT(e,t,n,t.pendingProps);case 24:return Ns(t),i=le(Ht),e===null?(s=gm(),s===null&&(s=Tt,r=mm(),s.pooledCache=r,r.refCount++,r!==null&&(s.pooledCacheLanes|=n),s=r),t.memoizedState={parent:i,cache:s},ym(t),yi(t,Ht,s)):(e.lanes&n&&(Kf(e,t),eo(t,null,null,n),to()),s=e.memoizedState,r=t.memoizedState,s.parent!==i?(s={parent:i,cache:i},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),yi(t,Ht,i)):(i=r.cache,yi(t,Ht,i),i!==s.cache&&Ff(t,[Ht],n,!0))),ie(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(V(156,t.tag))}function Ln(e){e.flags|=4}function Fh(e,t,n,i,s){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(IT())e.flags|=8192;else throw bs=Tu,pm}else e.flags&=-16777217}function jy(e,t){if(t.type!=="stylesheet"||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!$T(t))if(IT())e.flags|=8192;else throw bs=Tu,pm}function Cl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?C0():536870912,e.lanes|=t,zr|=t)}function Ma(e,t){if(!ct)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function wt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&65011712,i|=s.flags&65011712,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function NR(e,t,n){var i=t.pendingProps;switch(dm(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return wt(t),null;case 1:return wt(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Yn(Ht),Mr(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Js(t)?Ln(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,kh())),wt(t),null;case 26:var s=t.type,r=t.memoizedState;return e===null?(Ln(t),r!==null?(wt(t),jy(t,r)):(wt(t),Fh(t,s,null,i,n))):r?r!==e.memoizedState?(Ln(t),wt(t),jy(t,r)):(wt(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&Ln(t),wt(t),Fh(t,s,e,i,n)),null;case 27:if(mu(t),n=xi.current,s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Ln(t);else{if(!i){if(t.stateNode===null)throw Error(V(166));return wt(t),null}e=wn.current,Js(t)?gy(t):(e=QT(s,i,n),t.stateNode=e,Ln(t))}return wt(t),null;case 5:if(mu(t),s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Ln(t);else{if(!i){if(t.stateNode===null)throw Error(V(166));return wt(t),null}if(r=wn.current,Js(t))gy(t);else{var a=ku(xi.current);switch(r){case 1:r=a.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:r=a.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":r=a.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":r=a.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":r=a.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof i.is=="string"?a.createElement("select",{is:i.is}):a.createElement("select"),i.multiple?r.multiple=!0:i.size&&(r.size=i.size);break;default:r=typeof i.is=="string"?a.createElement(s,{is:i.is}):a.createElement(s)}}r[re]=t,r[Oe]=i;t:for(a=t.child;a!==null;){if(a.tag===5||a.tag===6)r.appendChild(a.stateNode);else if(a.tag!==4&&a.tag!==27&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break t;for(;a.sibling===null;){if(a.return===null||a.return===t)break t;a=a.return}a.sibling.return=a.return,a=a.sibling}t.stateNode=r;t:switch(ue(r,s,i),s){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&Ln(t)}}return wt(t),Fh(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Ln(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(V(166));if(e=xi.current,Js(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,s=ae,s!==null)switch(s.tag){case 27:case 5:i=s.memoizedProps}e[re]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||HT(e.nodeValue,n)),e||Qi(t,!0)}else e=ku(e).createTextNode(i),e[re]=t,t.stateNode=e}return wt(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=Js(t),n!==null){if(e===null){if(!i)throw Error(V(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(V(557));e[re]=t}else Cs(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;wt(t),e=!1}else n=kh(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Le(t),t):(Le(t),null);if(t.flags&128)throw Error(V(558))}return wt(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=Js(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(V(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(V(317));s[re]=t}else Cs(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;wt(t),s=!1}else s=kh(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(Le(t),t):(Le(t),null)}return Le(t),t.flags&128?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,s=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(s=i.alternate.memoizedState.cachePool.pool),r=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(r=i.memoizedState.cachePool.pool),r!==s&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Cl(t,t.updateQueue),wt(t),null);case 4:return Mr(),e===null&&jm(t.stateNode.containerInfo),wt(t),null;case 10:return Yn(t.type),wt(t),null;case 19:if(ne(Ut),i=t.memoizedState,i===null)return wt(t),null;if(s=(t.flags&128)!==0,r=i.rendering,r===null)if(s)Ma(i,!1);else{if(kt!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(r=Su(e),r!==null){for(t.flags|=128,Ma(i,!1),e=r.updateQueue,t.updateQueue=e,Cl(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)sE(n,e),n=n.sibling;return St(Ut,Ut.current&1|2),ct&&jn(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&je()>Nu&&(t.flags|=128,s=!0,Ma(i,!1),t.lanes=4194304)}else{if(!s)if(e=Su(r),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,Cl(t,e),Ma(i,!0),i.tail===null&&i.tailMode==="hidden"&&!r.alternate&&!ct)return wt(t),null}else 2*je()-i.renderingStartTime>Nu&&n!==536870912&&(t.flags|=128,s=!0,Ma(i,!1),t.lanes=4194304);i.isBackwards?(r.sibling=t.child,t.child=r):(e=i.last,e!==null?e.sibling=r:t.child=r,i.last=r)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=je(),e.sibling=null,n=Ut.current,St(Ut,s?n&1|2:n&1),ct&&jn(t,i.treeForkCount),e):(wt(t),null);case 22:case 23:return Le(t),_m(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?n&536870912&&!(t.flags&128)&&(wt(t),t.subtreeFlags&6&&(t.flags|=8192)):wt(t),n=t.updateQueue,n!==null&&Cl(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&ne(Ss),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Yn(Ht),wt(t),null;case 25:return null;case 30:return null}throw Error(V(156,t.tag))}function DR(e,t){switch(dm(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Yn(Ht),Mr(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return mu(t),null;case 31:if(t.memoizedState!==null){if(Le(t),t.alternate===null)throw Error(V(340));Cs()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Le(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(V(340));Cs()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ne(Ut),null;case 4:return Mr(),null;case 10:return Yn(t.type),null;case 22:case 23:return Le(t),_m(),e!==null&&ne(Ss),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Yn(Ht),null;case 25:return null;default:return null}}function sT(e,t){switch(dm(t),t.tag){case 3:Yn(Ht),Mr();break;case 26:case 27:case 5:mu(t);break;case 4:Mr();break;case 31:t.memoizedState!==null&&Le(t);break;case 13:Le(t);break;case 19:ne(Ut);break;case 10:Yn(t.type);break;case 22:case 23:Le(t),_m(),e!==null&&ne(Ss);break;case 24:Yn(Ht)}}function Fo(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var s=i.next;n=s;do{if((n.tag&e)===e){i=void 0;var r=n.create,a=n.inst;i=r(),a.destroy=i}n=n.next}while(n!==s)}}catch(l){yt(t,t.return,l)}}function Yi(e,t,n){try{var i=t.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var r=s.next;i=r;do{if((i.tag&e)===e){var a=i.inst,l=a.destroy;if(l!==void 0){a.destroy=void 0,s=t;var u=n,h=l;try{h()}catch(d){yt(s,u,d)}}}i=i.next}while(i!==r)}}catch(d){yt(t,t.return,d)}}function rT(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{mE(t,n)}catch(i){yt(e,e.return,i)}}}function aT(e,t,n){n.props=Os(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){yt(e,t,i)}}function io(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(s){yt(e,t,s)}}function bn(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(s){yt(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(s){yt(e,t,s)}else n.current=null}function oT(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(s){yt(e,e.return,s)}}function Gh(e,t,n){try{var i=e.stateNode;ZR(i,e.type,n,t),i[Oe]=t}catch(s){yt(e,e.return,s)}}function lT(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&rs(e.type)||e.tag===4}function Kh(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||lT(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&rs(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function id(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Hn));else if(i!==4&&(i===27&&rs(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(id(e,t,n),e=e.sibling;e!==null;)id(e,t,n),e=e.sibling}function Cu(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&rs(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Cu(e,t,n),e=e.sibling;e!==null;)Cu(e,t,n),e=e.sibling}function uT(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);ue(t,i,n),t[re]=e,t[Oe]=n}catch(r){yt(e,e.return,r)}}var Bn=!1,qt=!1,Qh=!1,By=typeof WeakSet=="function"?WeakSet:Set,te=null;function xR(e,t){if(e=e.containerInfo,cd=zu,e=$0(e),lm(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else t:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var s=i.anchorOffset,r=i.focusNode;i=i.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break t}var a=0,l=-1,u=-1,h=0,d=0,m=e,g=null;e:for(;;){for(var E;m!==n||s!==0&&m.nodeType!==3||(l=a+s),m!==r||i!==0&&m.nodeType!==3||(u=a+i),m.nodeType===3&&(a+=m.nodeValue.length),(E=m.firstChild)!==null;)g=m,m=E;for(;;){if(m===e)break e;if(g===n&&++h===s&&(l=a),g===r&&++d===i&&(u=a),(E=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=E}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(hd={focusedElem:e,selectionRange:n},zu=!1,te=t;te!==null;)if(t=te,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,te=e;else for(;te!==null;){switch(t=te,r=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)s=e[n],s.ref.impl=s.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&r!==null){e=void 0,n=t,s=r.memoizedProps,r=r.memoizedState,i=n.stateNode;try{var D=Os(n.type,s);e=i.getSnapshotBeforeUpdate(D,r),i.__reactInternalSnapshotBeforeUpdate=e}catch(M){yt(n,n.return,M)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)dd(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":dd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(V(163))}if(e=t.sibling,e!==null){e.return=t.return,te=e;break}te=t.return}}function cT(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Pn(e,n),i&4&&Fo(5,n);break;case 1:if(Pn(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(a){yt(n,n.return,a)}else{var s=Os(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(a){yt(n,n.return,a)}}i&64&&rT(n),i&512&&io(n,n.return);break;case 3:if(Pn(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{mE(e,t)}catch(a){yt(n,n.return,a)}}break;case 27:t===null&&i&4&&uT(n);case 26:case 5:Pn(e,n),t===null&&i&4&&oT(n),i&512&&io(n,n.return);break;case 12:Pn(e,n);break;case 31:Pn(e,n),i&4&&dT(e,n);break;case 13:Pn(e,n),i&4&&mT(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=jR.bind(null,n),aI(e,n))));break;case 22:if(i=n.memoizedState!==null||Bn,!i){t=t!==null&&t.memoizedState!==null||qt,s=Bn;var r=qt;Bn=i,(qt=t)&&!r?zn(e,n,(n.subtreeFlags&8772)!==0):Pn(e,n),Bn=s,qt=r}break;case 30:break;default:Pn(e,n)}}function hT(e){var t=e.alternate;t!==null&&(e.alternate=null,hT(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&nm(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Dt=null,Ie=!1;function Un(e,t,n){for(n=n.child;n!==null;)fT(e,t,n),n=n.sibling}function fT(e,t,n){if(Be&&typeof Be.onCommitFiberUnmount=="function")try{Be.onCommitFiberUnmount(Uo,n)}catch{}switch(n.tag){case 26:qt||bn(n,t),Un(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:qt||bn(n,t);var i=Dt,s=Ie;rs(n.type)&&(Dt=n.stateNode,Ie=!1),Un(e,t,n),oo(n.stateNode),Dt=i,Ie=s;break;case 5:qt||bn(n,t);case 6:if(i=Dt,s=Ie,Dt=null,Un(e,t,n),Dt=i,Ie=s,Dt!==null)if(Ie)try{(Dt.nodeType===9?Dt.body:Dt.nodeName==="HTML"?Dt.ownerDocument.body:Dt).removeChild(n.stateNode)}catch(r){yt(n,t,r)}else try{Dt.removeChild(n.stateNode)}catch(r){yt(n,t,r)}break;case 18:Dt!==null&&(Ie?(e=Dt,t_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Hr(e)):t_(Dt,n.stateNode));break;case 4:i=Dt,s=Ie,Dt=n.stateNode.containerInfo,Ie=!0,Un(e,t,n),Dt=i,Ie=s;break;case 0:case 11:case 14:case 15:Yi(2,n,t),qt||Yi(4,n,t),Un(e,t,n);break;case 1:qt||(bn(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&aT(n,t,i)),Un(e,t,n);break;case 21:Un(e,t,n);break;case 22:qt=(i=qt)||n.memoizedState!==null,Un(e,t,n),qt=i;break;default:Un(e,t,n)}}function dT(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Hr(e)}catch(n){yt(t,t.return,n)}}}function mT(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Hr(e)}catch(n){yt(t,t.return,n)}}function OR(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new By),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new By),t;default:throw Error(V(435,e.tag))}}function Nl(e,t){var n=OR(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var s=BR.bind(null,e,i);i.then(s,s)}})}function we(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i],r=e,a=t,l=a;t:for(;l!==null;){switch(l.tag){case 27:if(rs(l.type)){Dt=l.stateNode,Ie=!1;break t}break;case 5:Dt=l.stateNode,Ie=!1;break t;case 3:case 4:Dt=l.stateNode.containerInfo,Ie=!0;break t}l=l.return}if(Dt===null)throw Error(V(160));fT(r,a,s),Dt=null,Ie=!1,r=s.alternate,r!==null&&(r.return=null),s.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)gT(t,e),t=t.sibling}var cn=null;function gT(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:we(t,e),Re(e),i&4&&(Yi(3,e,e.return),Fo(3,e),Yi(5,e,e.return));break;case 1:we(t,e),Re(e),i&512&&(qt||n===null||bn(n,n.return)),i&64&&Bn&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var s=cn;if(we(t,e),Re(e),i&512&&(qt||n===null||bn(n,n.return)),i&4){var r=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){t:{i=e.type,n=e.memoizedProps,s=s.ownerDocument||s;e:switch(i){case"title":r=s.getElementsByTagName("title")[0],(!r||r[jo]||r[re]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=s.createElement(i),s.head.insertBefore(r,s.querySelector("head > title"))),ue(r,i,n),r[re]=e,ee(r),i=r;break t;case"link":var a=o_("link","href",s).get(i+(n.href||""));if(a){for(var l=0;l<a.length;l++)if(r=a[l],r.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&r.getAttribute("rel")===(n.rel==null?null:n.rel)&&r.getAttribute("title")===(n.title==null?null:n.title)&&r.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){a.splice(l,1);break e}}r=s.createElement(i),ue(r,i,n),s.head.appendChild(r);break;case"meta":if(a=o_("meta","content",s).get(i+(n.content||""))){for(l=0;l<a.length;l++)if(r=a[l],r.getAttribute("content")===(n.content==null?null:""+n.content)&&r.getAttribute("name")===(n.name==null?null:n.name)&&r.getAttribute("property")===(n.property==null?null:n.property)&&r.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute("charset")===(n.charSet==null?null:n.charSet)){a.splice(l,1);break e}}r=s.createElement(i),ue(r,i,n),s.head.appendChild(r);break;default:throw Error(V(468,i))}r[re]=e,ee(r),i=r}e.stateNode=i}else l_(s,e.type,e.stateNode);else e.stateNode=a_(s,i,e.memoizedProps);else r!==i?(r===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):r.count--,i===null?l_(s,e.type,e.stateNode):a_(s,i,e.memoizedProps)):i===null&&e.stateNode!==null&&Gh(e,e.memoizedProps,n.memoizedProps)}break;case 27:we(t,e),Re(e),i&512&&(qt||n===null||bn(n,n.return)),n!==null&&i&4&&Gh(e,e.memoizedProps,n.memoizedProps);break;case 5:if(we(t,e),Re(e),i&512&&(qt||n===null||bn(n,n.return)),e.flags&32){s=e.stateNode;try{kr(s,"")}catch(D){yt(e,e.return,D)}}i&4&&e.stateNode!=null&&(s=e.memoizedProps,Gh(e,s,n!==null?n.memoizedProps:s)),i&1024&&(Qh=!0);break;case 6:if(we(t,e),Re(e),i&4){if(e.stateNode===null)throw Error(V(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(D){yt(e,e.return,D)}}break;case 3:if(Wl=null,s=cn,cn=Lu(t.containerInfo),we(t,e),cn=s,Re(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Hr(t.containerInfo)}catch(D){yt(e,e.return,D)}Qh&&(Qh=!1,pT(e));break;case 4:i=cn,cn=Lu(e.stateNode.containerInfo),we(t,e),Re(e),cn=i;break;case 12:we(t,e),Re(e);break;case 31:we(t,e),Re(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Nl(e,i)));break;case 13:we(t,e),Re(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Sc=je()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Nl(e,i)));break;case 22:s=e.memoizedState!==null;var u=n!==null&&n.memoizedState!==null,h=Bn,d=qt;if(Bn=h||s,qt=d||u,we(t,e),qt=d,Bn=h,Re(e),i&8192)t:for(t=e.stateNode,t._visibility=s?t._visibility&-2:t._visibility|1,s&&(n===null||u||Bn||qt||ys(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){u=n=t;try{if(r=u.stateNode,s)a=r.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none";else{l=u.stateNode;var m=u.memoizedProps.style,g=m!=null&&m.hasOwnProperty("display")?m.display:null;l.style.display=g==null||typeof g=="boolean"?"":(""+g).trim()}}catch(D){yt(u,u.return,D)}}}else if(t.tag===6){if(n===null){u=t;try{u.stateNode.nodeValue=s?"":u.memoizedProps}catch(D){yt(u,u.return,D)}}}else if(t.tag===18){if(n===null){u=t;try{var E=u.stateNode;s?e_(E,!0):e_(u.stateNode,!1)}catch(D){yt(u,u.return,D)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,Nl(e,n))));break;case 19:we(t,e),Re(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Nl(e,i)));break;case 30:break;case 21:break;default:we(t,e),Re(e)}}function Re(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(lT(i)){n=i;break}i=i.return}if(n==null)throw Error(V(160));switch(n.tag){case 27:var s=n.stateNode,r=Kh(e);Cu(e,r,s);break;case 5:var a=n.stateNode;n.flags&32&&(kr(a,""),n.flags&=-33);var l=Kh(e);Cu(e,l,a);break;case 3:case 4:var u=n.stateNode.containerInfo,h=Kh(e);id(e,h,u);break;default:throw Error(V(161))}}catch(d){yt(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function pT(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;pT(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Pn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)cT(e,t.alternate,t),t=t.sibling}function ys(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Yi(4,t,t.return),ys(t);break;case 1:bn(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&aT(t,t.return,n),ys(t);break;case 27:oo(t.stateNode);case 26:case 5:bn(t,t.return),ys(t);break;case 22:t.memoizedState===null&&ys(t);break;case 30:ys(t);break;default:ys(t)}e=e.sibling}}function zn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,s=e,r=t,a=r.flags;switch(r.tag){case 0:case 11:case 15:zn(s,r,n),Fo(4,r);break;case 1:if(zn(s,r,n),i=r,s=i.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(h){yt(i,i.return,h)}if(i=r,s=i.updateQueue,s!==null){var l=i.stateNode;try{var u=s.shared.hiddenCallbacks;if(u!==null)for(s.shared.hiddenCallbacks=null,s=0;s<u.length;s++)dE(u[s],l)}catch(h){yt(i,i.return,h)}}n&&a&64&&rT(r),io(r,r.return);break;case 27:uT(r);case 26:case 5:zn(s,r,n),n&&i===null&&a&4&&oT(r),io(r,r.return);break;case 12:zn(s,r,n);break;case 31:zn(s,r,n),n&&a&4&&dT(s,r);break;case 13:zn(s,r,n),n&&a&4&&mT(s,r);break;case 22:r.memoizedState===null&&zn(s,r,n),io(r,r.return);break;case 30:break;default:zn(s,r,n)}t=t.sibling}}function Vm(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&qo(n))}function km(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&qo(e))}function un(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)yT(e,t,n,i),t=t.sibling}function yT(e,t,n,i){var s=t.flags;switch(t.tag){case 0:case 11:case 15:un(e,t,n,i),s&2048&&Fo(9,t);break;case 1:un(e,t,n,i);break;case 3:un(e,t,n,i),s&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&qo(e)));break;case 12:if(s&2048){un(e,t,n,i),e=t.stateNode;try{var r=t.memoizedProps,a=r.id,l=r.onPostCommit;typeof l=="function"&&l(a,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(u){yt(t,t.return,u)}}else un(e,t,n,i);break;case 31:un(e,t,n,i);break;case 13:un(e,t,n,i);break;case 23:break;case 22:r=t.stateNode,a=t.alternate,t.memoizedState!==null?r._visibility&2?un(e,t,n,i):so(e,t):r._visibility&2?un(e,t,n,i):(r._visibility|=2,tr(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),s&2048&&Vm(a,t);break;case 24:un(e,t,n,i),s&2048&&km(t.alternate,t);break;default:un(e,t,n,i)}}function tr(e,t,n,i,s){for(s=s&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var r=e,a=t,l=n,u=i,h=a.flags;switch(a.tag){case 0:case 11:case 15:tr(r,a,l,u,s),Fo(8,a);break;case 23:break;case 22:var d=a.stateNode;a.memoizedState!==null?d._visibility&2?tr(r,a,l,u,s):so(r,a):(d._visibility|=2,tr(r,a,l,u,s)),s&&h&2048&&Vm(a.alternate,a);break;case 24:tr(r,a,l,u,s),s&&h&2048&&km(a.alternate,a);break;default:tr(r,a,l,u,s)}t=t.sibling}}function so(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,s=i.flags;switch(i.tag){case 22:so(n,i),s&2048&&Vm(i.alternate,i);break;case 24:so(n,i),s&2048&&km(i.alternate,i);break;default:so(n,i)}t=t.sibling}}var qa=8192;function Zs(e,t,n){if(e.subtreeFlags&qa)for(e=e.child;e!==null;)_T(e,t,n),e=e.sibling}function _T(e,t,n){switch(e.tag){case 26:Zs(e,t,n),e.flags&qa&&e.memoizedState!==null&&_I(n,cn,e.memoizedState,e.memoizedProps);break;case 5:Zs(e,t,n);break;case 3:case 4:var i=cn;cn=Lu(e.stateNode.containerInfo),Zs(e,t,n),cn=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=qa,qa=16777216,Zs(e,t,n),qa=i):Zs(e,t,n));break;default:Zs(e,t,n)}}function vT(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Va(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];te=i,TT(i,e)}vT(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)ET(e),e=e.sibling}function ET(e){switch(e.tag){case 0:case 11:case 15:Va(e),e.flags&2048&&Yi(9,e,e.return);break;case 3:Va(e);break;case 12:Va(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Jl(e)):Va(e);break;default:Va(e)}}function Jl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];te=i,TT(i,e)}vT(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Yi(8,t,t.return),Jl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Jl(t));break;default:Jl(t)}e=e.sibling}}function TT(e,t){for(;te!==null;){var n=te;switch(n.tag){case 0:case 11:case 15:Yi(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:qo(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,te=i;else t:for(n=e;te!==null;){i=te;var s=i.sibling,r=i.return;if(hT(i),i===n){te=null;break t}if(s!==null){s.return=r,te=s;break t}te=r}}}var MR={getCacheForType:function(e){var t=le(Ht),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return le(Ht).controller.signal}},VR=typeof WeakMap=="function"?WeakMap:Map,dt=0,Tt=null,rt=null,ut=0,pt=0,ke=null,Ii=!1,na=!1,Lm=!1,ti=0,kt=0,Xi=0,ws=0,Um=0,Pe=0,zr=0,ro=null,Ce=null,sd=!1,Sc=0,AT=0,Nu=1/0,Du=null,ki=null,Xt=0,Li=null,jr=null,Xn=0,rd=0,ad=null,ST=null,ao=0,od=null;function He(){return dt&2&&ut!==0?ut&-ut:Y.T!==null?zm():O0()}function bT(){if(Pe===0)if(!(ut&536870912)||ct){var e=Tl;Tl<<=1,!(Tl&3932160)&&(Tl=262144),Pe=e}else Pe=536870912;return e=Qe.current,e!==null&&(e.flags|=32),Pe}function xe(e,t,n){(e===Tt&&(pt===2||pt===9)||e.cancelPendingCommit!==null)&&(Br(e,0),Ci(e,ut,Pe,!1)),zo(e,n),(!(dt&2)||e!==Tt)&&(e===Tt&&(!(dt&2)&&(ws|=n),kt===4&&Ci(e,ut,Pe,!1)),Vn(e))}function wT(e,t,n){if(dt&6)throw Error(V(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Po(e,t),s=i?UR(e,t):Yh(e,t,!0),r=i;do{if(s===0){na&&!i&&Ci(e,t,0,!1);break}else{if(n=e.current.alternate,r&&!kR(n)){s=Yh(e,t,!1),r=!1;continue}if(s===2){if(r=t,e.errorRecoveryDisabledLanes&r)var a=0;else a=e.pendingLanes&-536870913,a=a!==0?a:a&536870912?536870912:0;if(a!==0){t=a;t:{var l=e;s=ro;var u=l.current.memoizedState.isDehydrated;if(u&&(Br(l,a).flags|=256),a=Yh(l,a,!1),a!==2){if(Lm&&!u){l.errorRecoveryDisabledLanes|=r,ws|=r,s=4;break t}r=Ce,Ce=s,r!==null&&(Ce===null?Ce=r:Ce.push.apply(Ce,r))}s=a}if(r=!1,s!==2)continue}}if(s===1){Br(e,0),Ci(e,t,0,!0);break}t:{switch(i=e,r=s,r){case 0:case 1:throw Error(V(345));case 4:if((t&4194048)!==t)break;case 6:Ci(i,t,Pe,!Ii);break t;case 2:Ce=null;break;case 3:case 5:break;default:throw Error(V(329))}if((t&62914560)===t&&(s=Sc+300-je(),10<s)){if(Ci(i,t,Pe,!Ii),fc(i,0,!0)!==0)break t;Xn=t,i.timeoutHandle=GT(qy.bind(null,i,n,Ce,Du,sd,t,Pe,ws,zr,Ii,r,"Throttled",-0,0),s);break t}qy(i,n,Ce,Du,sd,t,Pe,ws,zr,Ii,r,null,-0,0)}}break}while(!0);Vn(e)}function qy(e,t,n,i,s,r,a,l,u,h,d,m,g,E){if(e.timeoutHandle=-1,m=t.subtreeFlags,m&8192||(m&16785408)===16785408){m={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Hn},_T(t,r,m);var D=(r&62914560)===r?Sc-je():(r&4194048)===r?AT-je():0;if(D=vI(m,D),D!==null){Xn=r,e.cancelPendingCommit=D(Fy.bind(null,e,t,r,n,i,s,a,l,u,d,m,null,g,E)),Ci(e,r,a,!h);return}}Fy(e,t,r,n,i,s,a,l,u)}function kR(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var s=n[i],r=s.getSnapshot;s=s.value;try{if(!Ke(r(),s))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ci(e,t,n,i){t&=~Um,t&=~ws,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var s=t;0<s;){var r=31-qe(s),a=1<<r;i[r]=-1,s&=~a}n!==0&&N0(e,n,t)}function bc(){return dt&6?!0:(Go(0),!1)}function Pm(){if(rt!==null){if(pt===0)var e=rt.return;else e=rt,Fn=Hs=null,Sm(e),Sr=null,Eo=0,e=rt;for(;e!==null;)sT(e.alternate,e),e=e.return;rt=null}}function Br(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,eI(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Xn=0,Pm(),Tt=e,rt=n=Qn(e.current,null),ut=t,pt=0,ke=null,Ii=!1,na=Po(e,t),Lm=!1,zr=Pe=Um=ws=Xi=kt=0,Ce=ro=null,sd=!1,t&8&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var s=31-qe(i),r=1<<s;t|=e[s],i&=~r}return ti=t,pc(),n}function RT(e,t){et=null,Y.H=Ao,t===ea||t===_c?(t=Ey(),pt=3):t===pm?(t=Ey(),pt=4):pt=t===Om?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ke=t,rt===null&&(kt=1,Ru(e,en(t,e.current)))}function IT(){var e=Qe.current;return e===null?!0:(ut&4194048)===ut?rn===null:(ut&62914560)===ut||ut&536870912?e===rn:!1}function CT(){var e=Y.H;return Y.H=Ao,e===null?Ao:e}function NT(){var e=Y.A;return Y.A=MR,e}function xu(){kt=4,Ii||(ut&4194048)!==ut&&Qe.current!==null||(na=!0),!(Xi&134217727)&&!(ws&134217727)||Tt===null||Ci(Tt,ut,Pe,!1)}function Yh(e,t,n){var i=dt;dt|=2;var s=CT(),r=NT();(Tt!==e||ut!==t)&&(Du=null,Br(e,t)),t=!1;var a=kt;t:do try{if(pt!==0&&rt!==null){var l=rt,u=ke;switch(pt){case 8:Pm(),a=6;break t;case 3:case 2:case 9:case 6:Qe.current===null&&(t=!0);var h=pt;if(pt=0,ke=null,yr(e,l,u,h),n&&na){a=0;break t}break;default:h=pt,pt=0,ke=null,yr(e,l,u,h)}}LR(),a=kt;break}catch(d){RT(e,d)}while(!0);return t&&e.shellSuspendCounter++,Fn=Hs=null,dt=i,Y.H=s,Y.A=r,rt===null&&(Tt=null,ut=0,pc()),a}function LR(){for(;rt!==null;)DT(rt)}function UR(e,t){var n=dt;dt|=2;var i=CT(),s=NT();Tt!==e||ut!==t?(Du=null,Nu=je()+500,Br(e,t)):na=Po(e,t);t:do try{if(pt!==0&&rt!==null){t=rt;var r=ke;e:switch(pt){case 1:pt=0,ke=null,yr(e,t,r,1);break;case 2:case 9:if(vy(r)){pt=0,ke=null,Hy(t);break}t=function(){pt!==2&&pt!==9||Tt!==e||(pt=7),Vn(e)},r.then(t,t);break t;case 3:pt=7;break t;case 4:pt=5;break t;case 7:vy(r)?(pt=0,ke=null,Hy(t)):(pt=0,ke=null,yr(e,t,r,7));break;case 5:var a=null;switch(rt.tag){case 26:a=rt.memoizedState;case 5:case 27:var l=rt;if(a?$T(a):l.stateNode.complete){pt=0,ke=null;var u=l.sibling;if(u!==null)rt=u;else{var h=l.return;h!==null?(rt=h,wc(h)):rt=null}break e}}pt=0,ke=null,yr(e,t,r,5);break;case 6:pt=0,ke=null,yr(e,t,r,6);break;case 8:Pm(),kt=6;break t;default:throw Error(V(462))}}PR();break}catch(d){RT(e,d)}while(!0);return Fn=Hs=null,Y.H=i,Y.A=s,dt=n,rt!==null?0:(Tt=null,ut=0,pc(),kt)}function PR(){for(;rt!==null&&!o1();)DT(rt)}function DT(e){var t=iT(e.alternate,e,ti);e.memoizedProps=e.pendingProps,t===null?wc(e):rt=t}function Hy(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Ly(n,t,t.pendingProps,t.type,void 0,ut);break;case 11:t=Ly(n,t,t.pendingProps,t.type.render,t.ref,ut);break;case 5:Sm(t);default:sT(n,t),t=rt=sE(t,ti),t=iT(n,t,ti)}e.memoizedProps=e.pendingProps,t===null?wc(e):rt=t}function yr(e,t,n,i){Fn=Hs=null,Sm(t),Sr=null,Eo=0;var s=t.return;try{if(RR(e,s,t,n,ut)){kt=1,Ru(e,en(n,e.current)),rt=null;return}}catch(r){if(s!==null)throw rt=s,r;kt=1,Ru(e,en(n,e.current)),rt=null;return}t.flags&32768?(ct||i===1?e=!0:na||ut&536870912?e=!1:(Ii=e=!0,(i===2||i===9||i===3||i===6)&&(i=Qe.current,i!==null&&i.tag===13&&(i.flags|=16384))),xT(t,e)):wc(t)}function wc(e){var t=e;do{if(t.flags&32768){xT(t,Ii);return}e=t.return;var n=NR(t.alternate,t,ti);if(n!==null){rt=n;return}if(t=t.sibling,t!==null){rt=t;return}rt=t=e}while(t!==null);kt===0&&(kt=5)}function xT(e,t){do{var n=DR(e.alternate,e);if(n!==null){n.flags&=32767,rt=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){rt=e;return}rt=e=n}while(e!==null);kt=6,rt=null}function Fy(e,t,n,i,s,r,a,l,u){e.cancelPendingCommit=null;do Rc();while(Xt!==0);if(dt&6)throw Error(V(327));if(t!==null){if(t===e.current)throw Error(V(177));if(r=t.lanes|t.childLanes,r|=um,y1(e,n,r,a,l,u),e===Tt&&(rt=Tt=null,ut=0),jr=t,Li=e,Xn=n,rd=r,ad=s,ST=i,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,qR(gu,function(){return LT(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,t.subtreeFlags&13878||i){i=Y.T,Y.T=null,s=mt.p,mt.p=2,a=dt,dt|=4;try{xR(e,t,n)}finally{dt=a,mt.p=s,Y.T=i}}Xt=1,OT(),MT(),VT()}}function OT(){if(Xt===1){Xt=0;var e=Li,t=jr,n=(t.flags&13878)!==0;if(t.subtreeFlags&13878||n){n=Y.T,Y.T=null;var i=mt.p;mt.p=2;var s=dt;dt|=4;try{gT(t,e);var r=hd,a=$0(e.containerInfo),l=r.focusedElem,u=r.selectionRange;if(a!==l&&l&&l.ownerDocument&&X0(l.ownerDocument.documentElement,l)){if(u!==null&&lm(l)){var h=u.start,d=u.end;if(d===void 0&&(d=h),"selectionStart"in l)l.selectionStart=h,l.selectionEnd=Math.min(d,l.value.length);else{var m=l.ownerDocument||document,g=m&&m.defaultView||window;if(g.getSelection){var E=g.getSelection(),D=l.textContent.length,M=Math.min(u.start,D),U=u.end===void 0?M:Math.min(u.end,D);!E.extend&&M>U&&(a=U,U=M,M=a);var b=fy(l,M),A=fy(l,U);if(b&&A&&(E.rangeCount!==1||E.anchorNode!==b.node||E.anchorOffset!==b.offset||E.focusNode!==A.node||E.focusOffset!==A.offset)){var C=m.createRange();C.setStart(b.node,b.offset),E.removeAllRanges(),M>U?(E.addRange(C),E.extend(A.node,A.offset)):(C.setEnd(A.node,A.offset),E.addRange(C))}}}}for(m=[],E=l;E=E.parentNode;)E.nodeType===1&&m.push({element:E,left:E.scrollLeft,top:E.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<m.length;l++){var x=m[l];x.element.scrollLeft=x.left,x.element.scrollTop=x.top}}zu=!!cd,hd=cd=null}finally{dt=s,mt.p=i,Y.T=n}}e.current=t,Xt=2}}function MT(){if(Xt===2){Xt=0;var e=Li,t=jr,n=(t.flags&8772)!==0;if(t.subtreeFlags&8772||n){n=Y.T,Y.T=null;var i=mt.p;mt.p=2;var s=dt;dt|=4;try{cT(e,t.alternate,t)}finally{dt=s,mt.p=i,Y.T=n}}Xt=3}}function VT(){if(Xt===4||Xt===3){Xt=0,l1();var e=Li,t=jr,n=Xn,i=ST;t.subtreeFlags&10256||t.flags&10256?Xt=5:(Xt=0,jr=Li=null,kT(e,e.pendingLanes));var s=e.pendingLanes;if(s===0&&(ki=null),em(n),t=t.stateNode,Be&&typeof Be.onCommitFiberRoot=="function")try{Be.onCommitFiberRoot(Uo,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=Y.T,s=mt.p,mt.p=2,Y.T=null;try{for(var r=e.onRecoverableError,a=0;a<i.length;a++){var l=i[a];r(l.value,{componentStack:l.stack})}}finally{Y.T=t,mt.p=s}}Xn&3&&Rc(),Vn(e),s=e.pendingLanes,n&261930&&s&42?e===od?ao++:(ao=0,od=e):ao=0,Go(0)}}function kT(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,qo(t)))}function Rc(){return OT(),MT(),VT(),LT()}function LT(){if(Xt!==5)return!1;var e=Li,t=rd;rd=0;var n=em(Xn),i=Y.T,s=mt.p;try{mt.p=32>n?32:n,Y.T=null,n=ad,ad=null;var r=Li,a=Xn;if(Xt=0,jr=Li=null,Xn=0,dt&6)throw Error(V(331));var l=dt;if(dt|=4,ET(r.current),yT(r,r.current,a,n),dt=l,Go(0,!1),Be&&typeof Be.onPostCommitFiberRoot=="function")try{Be.onPostCommitFiberRoot(Uo,r)}catch{}return!0}finally{mt.p=s,Y.T=i,kT(e,t)}}function Gy(e,t,n){t=en(n,t),t=td(e.stateNode,t,2),e=Vi(e,t,2),e!==null&&(zo(e,2),Vn(e))}function yt(e,t,n){if(e.tag===3)Gy(e,e,n);else for(;t!==null;){if(t.tag===3){Gy(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ki===null||!ki.has(i))){e=en(n,e),n=JE(2),i=Vi(t,n,2),i!==null&&(ZE(n,i,t,e),zo(i,2),Vn(i));break}}t=t.return}}function Xh(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new VR;var s=new Set;i.set(t,s)}else s=i.get(t),s===void 0&&(s=new Set,i.set(t,s));s.has(n)||(Lm=!0,s.add(n),e=zR.bind(null,e,t,n),t.then(e,e))}function zR(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Tt===e&&(ut&n)===n&&(kt===4||kt===3&&(ut&62914560)===ut&&300>je()-Sc?!(dt&2)&&Br(e,0):Um|=n,zr===ut&&(zr=0)),Vn(e)}function UT(e,t){t===0&&(t=C0()),e=qs(e,t),e!==null&&(zo(e,t),Vn(e))}function jR(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),UT(e,n)}function BR(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(V(314))}i!==null&&i.delete(t),UT(e,n)}function qR(e,t){return Wd(e,t)}var Ou=null,er=null,ld=!1,Mu=!1,$h=!1,Ni=0;function Vn(e){e!==er&&e.next===null&&(er===null?Ou=er=e:er=er.next=e),Mu=!0,ld||(ld=!0,FR())}function Go(e,t){if(!$h&&Mu){$h=!0;do for(var n=!1,i=Ou;i!==null;){if(e!==0){var s=i.pendingLanes;if(s===0)var r=0;else{var a=i.suspendedLanes,l=i.pingedLanes;r=(1<<31-qe(42|e)+1)-1,r&=s&~(a&~l),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(n=!0,Ky(i,r))}else r=ut,r=fc(i,i===Tt?r:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),!(r&3)||Po(i,r)||(n=!0,Ky(i,r));i=i.next}while(n);$h=!1}}function HR(){PT()}function PT(){Mu=ld=!1;var e=0;Ni!==0&&tI()&&(e=Ni);for(var t=je(),n=null,i=Ou;i!==null;){var s=i.next,r=zT(i,t);r===0?(i.next=null,n===null?Ou=s:n.next=s,s===null&&(er=n)):(n=i,(e!==0||r&3)&&(Mu=!0)),i=s}Xt!==0&&Xt!==5||Go(e),Ni!==0&&(Ni=0)}function zT(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var a=31-qe(r),l=1<<a,u=s[a];u===-1?(!(l&n)||l&i)&&(s[a]=p1(l,t)):u<=t&&(e.expiredLanes|=l),r&=~l}if(t=Tt,n=ut,n=fc(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(pt===2||pt===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&bh(i),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||Po(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&bh(i),em(n)){case 2:case 8:n=R0;break;case 32:n=gu;break;case 268435456:n=I0;break;default:n=gu}return i=jT.bind(null,e),n=Wd(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&bh(i),e.callbackPriority=2,e.callbackNode=null,2}function jT(e,t){if(Xt!==0&&Xt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Rc()&&e.callbackNode!==n)return null;var i=ut;return i=fc(e,e===Tt?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(wT(e,i,t),zT(e,je()),e.callbackNode!=null&&e.callbackNode===n?jT.bind(null,e):null)}function Ky(e,t){if(Rc())return null;wT(e,t,!0)}function FR(){nI(function(){dt&6?Wd(w0,HR):PT()})}function zm(){if(Ni===0){var e=Lr;e===0&&(e=El,El<<=1,!(El&261888)&&(El=256)),Ni=e}return Ni}function Qy(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ql(""+e)}function Yy(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function GR(e,t,n,i,s){if(t==="submit"&&n&&n.stateNode===s){var r=Qy((s[Oe]||null).action),a=i.submitter;a&&(t=(t=a[Oe]||null)?Qy(t.formAction):a.getAttribute("formAction"),t!==null&&(r=t,a=null));var l=new dc("action","action",null,i,s);e.push({event:l,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Ni!==0){var u=a?Yy(s,a):new FormData(s);Zf(n,{pending:!0,data:u,method:s.method,action:r},null,u)}}else typeof r=="function"&&(l.preventDefault(),u=a?Yy(s,a):new FormData(s),Zf(n,{pending:!0,data:u,method:s.method,action:r},r,u))},currentTarget:s}]})}}for(var Jh=0;Jh<jf.length;Jh++){var Zh=jf[Jh],KR=Zh.toLowerCase(),QR=Zh[0].toUpperCase()+Zh.slice(1);pn(KR,"on"+QR)}pn(Z0,"onAnimationEnd");pn(W0,"onAnimationIteration");pn(tE,"onAnimationStart");pn("dblclick","onDoubleClick");pn("focusin","onFocus");pn("focusout","onBlur");pn(uR,"onTransitionRun");pn(cR,"onTransitionStart");pn(hR,"onTransitionCancel");pn(eE,"onTransitionEnd");Vr("onMouseEnter",["mouseout","mouseover"]);Vr("onMouseLeave",["mouseout","mouseover"]);Vr("onPointerEnter",["pointerout","pointerover"]);Vr("onPointerLeave",["pointerout","pointerover"]);zs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));zs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));zs("onBeforeInput",["compositionend","keypress","textInput","paste"]);zs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));zs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));zs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var So="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),YR=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(So));function BT(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],s=i.event;i=i.listeners;t:{var r=void 0;if(t)for(var a=i.length-1;0<=a;a--){var l=i[a],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==r&&s.isPropagationStopped())break t;r=l,s.currentTarget=h;try{r(s)}catch(d){yu(d)}s.currentTarget=null,r=u}else for(a=0;a<i.length;a++){if(l=i[a],u=l.instance,h=l.currentTarget,l=l.listener,u!==r&&s.isPropagationStopped())break t;r=l,s.currentTarget=h;try{r(s)}catch(d){yu(d)}s.currentTarget=null,r=u}}}}function st(e,t){var n=t[Of];n===void 0&&(n=t[Of]=new Set);var i=e+"__bubble";n.has(i)||(qT(t,e,2,!1),n.add(i))}function Wh(e,t,n){var i=0;t&&(i|=4),qT(n,e,i,t)}var Dl="_reactListening"+Math.random().toString(36).slice(2);function jm(e){if(!e[Dl]){e[Dl]=!0,M0.forEach(function(n){n!=="selectionchange"&&(YR.has(n)||Wh(n,!1,e),Wh(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Dl]||(t[Dl]=!0,Wh("selectionchange",!1,t))}}function qT(e,t,n,i){switch(eA(t)){case 2:var s=AI;break;case 8:s=SI;break;default:s=Fm}n=s.bind(null,t,n,e),s=void 0,!Uf||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function tf(e,t,n,i,s){var r=i;if(!(t&1)&&!(t&2)&&i!==null)t:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var l=i.stateNode.containerInfo;if(l===s)break;if(a===4)for(a=i.return;a!==null;){var u=a.tag;if((u===3||u===4)&&a.stateNode.containerInfo===s)return;a=a.return}for(;l!==null;){if(a=lr(l),a===null)return;if(u=a.tag,u===5||u===6||u===26||u===27){i=r=a;continue t}l=l.parentNode}}i=i.return}B0(function(){var h=r,d=sm(n),m=[];t:{var g=nE.get(e);if(g!==void 0){var E=dc,D=e;switch(e){case"keypress":if(Fl(n)===0)break t;case"keydown":case"keyup":E=B1;break;case"focusin":D="focus",E=Nh;break;case"focusout":D="blur",E=Nh;break;case"beforeblur":case"afterblur":E=Nh;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=ny;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=N1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=F1;break;case Z0:case W0:case tE:E=O1;break;case eE:E=K1;break;case"scroll":case"scrollend":E=I1;break;case"wheel":E=Y1;break;case"copy":case"cut":case"paste":E=V1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=sy;break;case"toggle":case"beforetoggle":E=$1}var M=(t&4)!==0,U=!M&&(e==="scroll"||e==="scrollend"),b=M?g!==null?g+"Capture":null:g;M=[];for(var A=h,C;A!==null;){var x=A;if(C=x.stateNode,x=x.tag,x!==5&&x!==26&&x!==27||C===null||b===null||(x=go(A,b),x!=null&&M.push(bo(A,x,C))),U)break;A=A.return}0<M.length&&(g=new E(g,D,null,n,d),m.push({event:g,listeners:M}))}}if(!(t&7)){t:{if(g=e==="mouseover"||e==="pointerover",E=e==="mouseout"||e==="pointerout",g&&n!==Lf&&(D=n.relatedTarget||n.fromElement)&&(lr(D)||D[Zr]))break t;if((E||g)&&(g=d.window===d?d:(g=d.ownerDocument)?g.defaultView||g.parentWindow:window,E?(D=n.relatedTarget||n.toElement,E=h,D=D?lr(D):null,D!==null&&(U=Lo(D),M=D.tag,D!==U||M!==5&&M!==27&&M!==6)&&(D=null)):(E=null,D=h),E!==D)){if(M=ny,x="onMouseLeave",b="onMouseEnter",A="mouse",(e==="pointerout"||e==="pointerover")&&(M=sy,x="onPointerLeave",b="onPointerEnter",A="pointer"),U=E==null?g:ja(E),C=D==null?g:ja(D),g=new M(x,A+"leave",E,n,d),g.target=U,g.relatedTarget=C,x=null,lr(d)===h&&(M=new M(b,A+"enter",D,n,d),M.target=C,M.relatedTarget=U,x=M),U=x,E&&D)e:{for(M=XR,b=E,A=D,C=0,x=b;x;x=M(x))C++;x=0;for(var z=A;z;z=M(z))x++;for(;0<C-x;)b=M(b),C--;for(;0<x-C;)A=M(A),x--;for(;C--;){if(b===A||A!==null&&b===A.alternate){M=b;break e}b=M(b),A=M(A)}M=null}else M=null;E!==null&&Xy(m,g,E,M,!1),D!==null&&U!==null&&Xy(m,U,D,M,!0)}}t:{if(g=h?ja(h):window,E=g.nodeName&&g.nodeName.toLowerCase(),E==="select"||E==="input"&&g.type==="file")var P=ly;else if(oy(g))if(Q0)P=aR;else{P=sR;var _=iR}else E=g.nodeName,!E||E.toLowerCase()!=="input"||g.type!=="checkbox"&&g.type!=="radio"?h&&im(h.elementType)&&(P=ly):P=rR;if(P&&(P=P(e,h))){K0(m,P,n,d);break t}_&&_(e,g,h),e==="focusout"&&h&&g.type==="number"&&h.memoizedProps.value!=null&&kf(g,"number",g.value)}switch(_=h?ja(h):window,e){case"focusin":(oy(_)||_.contentEditable==="true")&&(hr=_,Pf=h,Ja=null);break;case"focusout":Ja=Pf=hr=null;break;case"mousedown":zf=!0;break;case"contextmenu":case"mouseup":case"dragend":zf=!1,dy(m,n,d);break;case"selectionchange":if(lR)break;case"keydown":case"keyup":dy(m,n,d)}var y;if(om)t:{switch(e){case"compositionstart":var v="onCompositionStart";break t;case"compositionend":v="onCompositionEnd";break t;case"compositionupdate":v="onCompositionUpdate";break t}v=void 0}else cr?F0(e,n)&&(v="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(H0&&n.locale!=="ko"&&(cr||v!=="onCompositionStart"?v==="onCompositionEnd"&&cr&&(y=q0()):(Ri=d,rm="value"in Ri?Ri.value:Ri.textContent,cr=!0)),_=Vu(h,v),0<_.length&&(v=new iy(v,e,null,n,d),m.push({event:v,listeners:_}),y?v.data=y:(y=G0(n),y!==null&&(v.data=y)))),(y=Z1?W1(e,n):tR(e,n))&&(v=Vu(h,"onBeforeInput"),0<v.length&&(_=new iy("onBeforeInput","beforeinput",null,n,d),m.push({event:_,listeners:v}),_.data=y)),GR(m,e,h,n,d)}BT(m,t)})}function bo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Vu(e,t){for(var n=t+"Capture",i=[];e!==null;){var s=e,r=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||r===null||(s=go(e,n),s!=null&&i.unshift(bo(e,s,r)),s=go(e,t),s!=null&&i.push(bo(e,s,r))),e.tag===3)return i;e=e.return}return[]}function XR(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Xy(e,t,n,i,s){for(var r=t._reactName,a=[];n!==null&&n!==i;){var l=n,u=l.alternate,h=l.stateNode;if(l=l.tag,u!==null&&u===i)break;l!==5&&l!==26&&l!==27||h===null||(u=h,s?(h=go(n,r),h!=null&&a.unshift(bo(n,h,u))):s||(h=go(n,r),h!=null&&a.push(bo(n,h,u)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var $R=/\r\n?/g,JR=/\u0000|\uFFFD/g;function $y(e){return(typeof e=="string"?e:""+e).replace($R,`
`).replace(JR,"")}function HT(e,t){return t=$y(t),$y(e)===t}function _t(e,t,n,i,s,r){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||kr(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&kr(e,""+i);break;case"className":Sl(e,"class",i);break;case"tabIndex":Sl(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Sl(e,n,i);break;case"style":j0(e,i,r);break;case"data":if(t!=="object"){Sl(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=ql(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(n==="formAction"?(t!=="input"&&_t(e,t,"name",s.name,s,null),_t(e,t,"formEncType",s.formEncType,s,null),_t(e,t,"formMethod",s.formMethod,s,null),_t(e,t,"formTarget",s.formTarget,s,null)):(_t(e,t,"encType",s.encType,s,null),_t(e,t,"method",s.method,s,null),_t(e,t,"target",s.target,s,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=ql(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=Hn);break;case"onScroll":i!=null&&st("scroll",e);break;case"onScrollEnd":i!=null&&st("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(V(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(V(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=ql(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":st("beforetoggle",e),st("toggle",e),Bl(e,"popover",i);break;case"xlinkActuate":kn(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":kn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":kn(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":kn(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":kn(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":kn(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":kn(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":kn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":kn(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Bl(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=w1.get(n)||n,Bl(e,n,i))}}function ud(e,t,n,i,s,r){switch(n){case"style":j0(e,i,r);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(V(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(V(60));e.innerHTML=n}}break;case"children":typeof i=="string"?kr(e,i):(typeof i=="number"||typeof i=="bigint")&&kr(e,""+i);break;case"onScroll":i!=null&&st("scroll",e);break;case"onScrollEnd":i!=null&&st("scrollend",e);break;case"onClick":i!=null&&(e.onclick=Hn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!V0.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(s=n.endsWith("Capture"),t=n.slice(2,s?n.length-7:void 0),r=e[Oe]||null,r=r!=null?r[n]:null,typeof r=="function"&&e.removeEventListener(t,r,s),typeof i=="function")){typeof r!="function"&&r!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,s);break t}n in e?e[n]=i:i===!0?e.setAttribute(n,""):Bl(e,n,i)}}}function ue(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":st("error",e),st("load",e);var i=!1,s=!1,r;for(r in n)if(n.hasOwnProperty(r)){var a=n[r];if(a!=null)switch(r){case"src":i=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(V(137,t));default:_t(e,t,r,a,n,null)}}s&&_t(e,t,"srcSet",n.srcSet,n,null),i&&_t(e,t,"src",n.src,n,null);return;case"input":st("invalid",e);var l=r=a=s=null,u=null,h=null;for(i in n)if(n.hasOwnProperty(i)){var d=n[i];if(d!=null)switch(i){case"name":s=d;break;case"type":a=d;break;case"checked":u=d;break;case"defaultChecked":h=d;break;case"value":r=d;break;case"defaultValue":l=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(V(137,t));break;default:_t(e,t,i,d,n,null)}}U0(e,r,l,u,h,a,s,!1);return;case"select":st("invalid",e),i=a=r=null;for(s in n)if(n.hasOwnProperty(s)&&(l=n[s],l!=null))switch(s){case"value":r=l;break;case"defaultValue":a=l;break;case"multiple":i=l;default:_t(e,t,s,l,n,null)}t=r,n=a,e.multiple=!!i,t!=null?Er(e,!!i,t,!1):n!=null&&Er(e,!!i,n,!0);return;case"textarea":st("invalid",e),r=s=i=null;for(a in n)if(n.hasOwnProperty(a)&&(l=n[a],l!=null))switch(a){case"value":i=l;break;case"defaultValue":s=l;break;case"children":r=l;break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(V(91));break;default:_t(e,t,a,l,n,null)}z0(e,i,s,r);return;case"option":for(u in n)if(n.hasOwnProperty(u)&&(i=n[u],i!=null))switch(u){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:_t(e,t,u,i,n,null)}return;case"dialog":st("beforetoggle",e),st("toggle",e),st("cancel",e),st("close",e);break;case"iframe":case"object":st("load",e);break;case"video":case"audio":for(i=0;i<So.length;i++)st(So[i],e);break;case"image":st("error",e),st("load",e);break;case"details":st("toggle",e);break;case"embed":case"source":case"link":st("error",e),st("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(h in n)if(n.hasOwnProperty(h)&&(i=n[h],i!=null))switch(h){case"children":case"dangerouslySetInnerHTML":throw Error(V(137,t));default:_t(e,t,h,i,n,null)}return;default:if(im(t)){for(d in n)n.hasOwnProperty(d)&&(i=n[d],i!==void 0&&ud(e,t,d,i,n,void 0));return}}for(l in n)n.hasOwnProperty(l)&&(i=n[l],i!=null&&_t(e,t,l,i,n,null))}function ZR(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,r=null,a=null,l=null,u=null,h=null,d=null;for(E in n){var m=n[E];if(n.hasOwnProperty(E)&&m!=null)switch(E){case"checked":break;case"value":break;case"defaultValue":u=m;default:i.hasOwnProperty(E)||_t(e,t,E,null,i,m)}}for(var g in i){var E=i[g];if(m=n[g],i.hasOwnProperty(g)&&(E!=null||m!=null))switch(g){case"type":r=E;break;case"name":s=E;break;case"checked":h=E;break;case"defaultChecked":d=E;break;case"value":a=E;break;case"defaultValue":l=E;break;case"children":case"dangerouslySetInnerHTML":if(E!=null)throw Error(V(137,t));break;default:E!==m&&_t(e,t,g,E,i,m)}}Vf(e,a,l,u,h,d,r,s);return;case"select":E=a=l=g=null;for(r in n)if(u=n[r],n.hasOwnProperty(r)&&u!=null)switch(r){case"value":break;case"multiple":E=u;default:i.hasOwnProperty(r)||_t(e,t,r,null,i,u)}for(s in i)if(r=i[s],u=n[s],i.hasOwnProperty(s)&&(r!=null||u!=null))switch(s){case"value":g=r;break;case"defaultValue":l=r;break;case"multiple":a=r;default:r!==u&&_t(e,t,s,r,i,u)}t=l,n=a,i=E,g!=null?Er(e,!!n,g,!1):!!i!=!!n&&(t!=null?Er(e,!!n,t,!0):Er(e,!!n,n?[]:"",!1));return;case"textarea":E=g=null;for(l in n)if(s=n[l],n.hasOwnProperty(l)&&s!=null&&!i.hasOwnProperty(l))switch(l){case"value":break;case"children":break;default:_t(e,t,l,null,i,s)}for(a in i)if(s=i[a],r=n[a],i.hasOwnProperty(a)&&(s!=null||r!=null))switch(a){case"value":g=s;break;case"defaultValue":E=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(V(91));break;default:s!==r&&_t(e,t,a,s,i,r)}P0(e,g,E);return;case"option":for(var D in n)if(g=n[D],n.hasOwnProperty(D)&&g!=null&&!i.hasOwnProperty(D))switch(D){case"selected":e.selected=!1;break;default:_t(e,t,D,null,i,g)}for(u in i)if(g=i[u],E=n[u],i.hasOwnProperty(u)&&g!==E&&(g!=null||E!=null))switch(u){case"selected":e.selected=g&&typeof g!="function"&&typeof g!="symbol";break;default:_t(e,t,u,g,i,E)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var M in n)g=n[M],n.hasOwnProperty(M)&&g!=null&&!i.hasOwnProperty(M)&&_t(e,t,M,null,i,g);for(h in i)if(g=i[h],E=n[h],i.hasOwnProperty(h)&&g!==E&&(g!=null||E!=null))switch(h){case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(V(137,t));break;default:_t(e,t,h,g,i,E)}return;default:if(im(t)){for(var U in n)g=n[U],n.hasOwnProperty(U)&&g!==void 0&&!i.hasOwnProperty(U)&&ud(e,t,U,void 0,i,g);for(d in i)g=i[d],E=n[d],!i.hasOwnProperty(d)||g===E||g===void 0&&E===void 0||ud(e,t,d,g,i,E);return}}for(var b in n)g=n[b],n.hasOwnProperty(b)&&g!=null&&!i.hasOwnProperty(b)&&_t(e,t,b,null,i,g);for(m in i)g=i[m],E=n[m],!i.hasOwnProperty(m)||g===E||g==null&&E==null||_t(e,t,m,g,i,E)}function Jy(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function WR(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var s=n[i],r=s.transferSize,a=s.initiatorType,l=s.duration;if(r&&l&&Jy(a)){for(a=0,l=s.responseEnd,i+=1;i<n.length;i++){var u=n[i],h=u.startTime;if(h>l)break;var d=u.transferSize,m=u.initiatorType;d&&Jy(m)&&(u=u.responseEnd,a+=d*(u<l?1:(l-h)/(u-h)))}if(--i,t+=8*(r+a)/(s.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var cd=null,hd=null;function ku(e){return e.nodeType===9?e:e.ownerDocument}function Zy(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function FT(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function fd(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ef=null;function tI(){var e=window.event;return e&&e.type==="popstate"?e===ef?!1:(ef=e,!0):(ef=null,!1)}var GT=typeof setTimeout=="function"?setTimeout:void 0,eI=typeof clearTimeout=="function"?clearTimeout:void 0,Wy=typeof Promise=="function"?Promise:void 0,nI=typeof queueMicrotask=="function"?queueMicrotask:typeof Wy<"u"?function(e){return Wy.resolve(null).then(e).catch(iI)}:GT;function iI(e){setTimeout(function(){throw e})}function rs(e){return e==="head"}function t_(e,t){var n=t,i=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(s),Hr(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")oo(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,oo(n);for(var r=n.firstChild;r;){var a=r.nextSibling,l=r.nodeName;r[jo]||l==="SCRIPT"||l==="STYLE"||l==="LINK"&&r.rel.toLowerCase()==="stylesheet"||n.removeChild(r),r=a}}else n==="body"&&oo(e.ownerDocument.body);n=s}while(n);Hr(t)}function e_(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function dd(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":dd(n),nm(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function sI(e,t,n,i){for(;e.nodeType===1;){var s=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[jo])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=an(e.nextSibling),e===null)break}return null}function rI(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=an(e.nextSibling),e===null))return null;return e}function KT(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=an(e.nextSibling),e===null))return null;return e}function md(e){return e.data==="$?"||e.data==="$~"}function gd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function aI(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function an(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var pd=null;function n_(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return an(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function i_(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function QT(e,t,n){switch(t=ku(n),e){case"html":if(e=t.documentElement,!e)throw Error(V(452));return e;case"head":if(e=t.head,!e)throw Error(V(453));return e;case"body":if(e=t.body,!e)throw Error(V(454));return e;default:throw Error(V(451))}}function oo(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);nm(e)}var ln=new Map,s_=new Set;function Lu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ai=mt.d;mt.d={f:oI,r:lI,D:uI,C:cI,L:hI,m:fI,X:mI,S:dI,M:gI};function oI(){var e=ai.f(),t=bc();return e||t}function lI(e){var t=Wr(e);t!==null&&t.tag===5&&t.type==="form"?jE(t):ai.r(e)}var ia=typeof document>"u"?null:document;function YT(e,t,n){var i=ia;if(i&&typeof t=="string"&&t){var s=tn(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof n=="string"&&(s+='[crossorigin="'+n+'"]'),s_.has(s)||(s_.add(s),e={rel:e,crossOrigin:n,href:t},i.querySelector(s)===null&&(t=i.createElement("link"),ue(t,"link",e),ee(t),i.head.appendChild(t)))}}function uI(e){ai.D(e),YT("dns-prefetch",e,null)}function cI(e,t){ai.C(e,t),YT("preconnect",e,t)}function hI(e,t,n){ai.L(e,t,n);var i=ia;if(i&&e&&t){var s='link[rel="preload"][as="'+tn(t)+'"]';t==="image"&&n&&n.imageSrcSet?(s+='[imagesrcset="'+tn(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(s+='[imagesizes="'+tn(n.imageSizes)+'"]')):s+='[href="'+tn(e)+'"]';var r=s;switch(t){case"style":r=qr(e);break;case"script":r=sa(e)}ln.has(r)||(e=Nt({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),ln.set(r,e),i.querySelector(s)!==null||t==="style"&&i.querySelector(Ko(r))||t==="script"&&i.querySelector(Qo(r))||(t=i.createElement("link"),ue(t,"link",e),ee(t),i.head.appendChild(t)))}}function fI(e,t){ai.m(e,t);var n=ia;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+tn(i)+'"][href="'+tn(e)+'"]',r=s;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=sa(e)}if(!ln.has(r)&&(e=Nt({rel:"modulepreload",href:e},t),ln.set(r,e),n.querySelector(s)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Qo(r)))return}i=n.createElement("link"),ue(i,"link",e),ee(i),n.head.appendChild(i)}}}function dI(e,t,n){ai.S(e,t,n);var i=ia;if(i&&e){var s=vr(i).hoistableStyles,r=qr(e);t=t||"default";var a=s.get(r);if(!a){var l={loading:0,preload:null};if(a=i.querySelector(Ko(r)))l.loading=5;else{e=Nt({rel:"stylesheet",href:e,"data-precedence":t},n),(n=ln.get(r))&&Bm(e,n);var u=a=i.createElement("link");ee(u),ue(u,"link",e),u._p=new Promise(function(h,d){u.onload=h,u.onerror=d}),u.addEventListener("load",function(){l.loading|=1}),u.addEventListener("error",function(){l.loading|=2}),l.loading|=4,Zl(a,t,i)}a={type:"stylesheet",instance:a,count:1,state:l},s.set(r,a)}}}function mI(e,t){ai.X(e,t);var n=ia;if(n&&e){var i=vr(n).hoistableScripts,s=sa(e),r=i.get(s);r||(r=n.querySelector(Qo(s)),r||(e=Nt({src:e,async:!0},t),(t=ln.get(s))&&qm(e,t),r=n.createElement("script"),ee(r),ue(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(s,r))}}function gI(e,t){ai.M(e,t);var n=ia;if(n&&e){var i=vr(n).hoistableScripts,s=sa(e),r=i.get(s);r||(r=n.querySelector(Qo(s)),r||(e=Nt({src:e,async:!0,type:"module"},t),(t=ln.get(s))&&qm(e,t),r=n.createElement("script"),ee(r),ue(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(s,r))}}function r_(e,t,n,i){var s=(s=xi.current)?Lu(s):null;if(!s)throw Error(V(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=qr(n.href),n=vr(s).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=qr(n.href);var r=vr(s).hoistableStyles,a=r.get(e);if(a||(s=s.ownerDocument||s,a={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,a),(r=s.querySelector(Ko(e)))&&!r._p&&(a.instance=r,a.state.loading=5),ln.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},ln.set(e,n),r||pI(s,e,n,a.state))),t&&i===null)throw Error(V(528,""));return a}if(t&&i!==null)throw Error(V(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=sa(n),n=vr(s).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(V(444,e))}}function qr(e){return'href="'+tn(e)+'"'}function Ko(e){return'link[rel="stylesheet"]['+e+"]"}function XT(e){return Nt({},e,{"data-precedence":e.precedence,precedence:null})}function pI(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),ue(t,"link",n),ee(t),e.head.appendChild(t))}function sa(e){return'[src="'+tn(e)+'"]'}function Qo(e){return"script[async]"+e}function a_(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+tn(n.href)+'"]');if(i)return t.instance=i,ee(i),i;var s=Nt({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),ee(i),ue(i,"style",s),Zl(i,n.precedence,e),t.instance=i;case"stylesheet":s=qr(n.href);var r=e.querySelector(Ko(s));if(r)return t.state.loading|=4,t.instance=r,ee(r),r;i=XT(n),(s=ln.get(s))&&Bm(i,s),r=(e.ownerDocument||e).createElement("link"),ee(r);var a=r;return a._p=new Promise(function(l,u){a.onload=l,a.onerror=u}),ue(r,"link",i),t.state.loading|=4,Zl(r,n.precedence,e),t.instance=r;case"script":return r=sa(n.src),(s=e.querySelector(Qo(r)))?(t.instance=s,ee(s),s):(i=n,(s=ln.get(r))&&(i=Nt({},n),qm(i,s)),e=e.ownerDocument||e,s=e.createElement("script"),ee(s),ue(s,"link",i),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(V(443,t.type))}else t.type==="stylesheet"&&!(t.state.loading&4)&&(i=t.instance,t.state.loading|=4,Zl(i,n.precedence,e));return t.instance}function Zl(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=i.length?i[i.length-1]:null,r=s,a=0;a<i.length;a++){var l=i[a];if(l.dataset.precedence===t)r=l;else if(r!==s)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Bm(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function qm(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Wl=null;function o_(e,t,n){if(Wl===null){var i=new Map,s=Wl=new Map;s.set(n,i)}else s=Wl,i=s.get(n),i||(i=new Map,s.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),s=0;s<n.length;s++){var r=n[s];if(!(r[jo]||r[re]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var a=r.getAttribute(t)||"";a=e+a;var l=i.get(a);l?l.push(r):i.set(a,[r])}}return i}function l_(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function yI(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function $T(e){return!(e.type==="stylesheet"&&!(e.state.loading&3))}function _I(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&!(n.state.loading&4)){if(n.instance===null){var s=qr(i.href),r=t.querySelector(Ko(s));if(r){t=r._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Uu.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=r,ee(r);return}r=t.ownerDocument||t,i=XT(i),(s=ln.get(s))&&Bm(i,s),r=r.createElement("link"),ee(r);var a=r;a._p=new Promise(function(l,u){a.onload=l,a.onerror=u}),ue(r,"link",i),n.instance=r}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Uu.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var nf=0;function vI(e,t){return e.stylesheets&&e.count===0&&tu(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&tu(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4+t);0<e.imgBytes&&nf===0&&(nf=62500*WR());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&tu(e,e.stylesheets),e.unsuspend)){var r=e.unsuspend;e.unsuspend=null,r()}},(e.imgBytes>nf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(s)}}:null}function Uu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)tu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Pu=null;function tu(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Pu=new Map,t.forEach(EI,e),Pu=null,Uu.call(e))}function EI(e,t){if(!(t.state.loading&4)){var n=Pu.get(e);if(n)var i=n.get(null);else{n=new Map,Pu.set(e,n);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<s.length;r++){var a=s[r];(a.nodeName==="LINK"||a.getAttribute("media")!=="not all")&&(n.set(a.dataset.precedence,a),i=a)}i&&n.set(null,i)}s=t.instance,a=s.getAttribute("data-precedence"),r=n.get(a)||i,r===i&&n.set(null,s),n.set(a,s),this.count++,i=Uu.bind(this),s.addEventListener("load",i),s.addEventListener("error",i),r?r.parentNode.insertBefore(s,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var wo={$$typeof:qn,Provider:null,Consumer:null,_currentValue:Ts,_currentValue2:Ts,_threadCount:0};function TI(e,t,n,i,s,r,a,l,u){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=wh(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wh(0),this.hiddenUpdates=wh(null),this.identifierPrefix=i,this.onUncaughtError=s,this.onCaughtError=r,this.onRecoverableError=a,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=u,this.incompleteTransitions=new Map}function JT(e,t,n,i,s,r,a,l,u,h,d,m){return e=new TI(e,t,n,a,u,h,d,m,l),t=1,r===!0&&(t|=24),r=Ue(3,null,null,t),e.current=r,r.stateNode=e,t=mm(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:i,isDehydrated:n,cache:t},ym(r),e}function ZT(e){return e?(e=mr,e):mr}function WT(e,t,n,i,s,r){s=ZT(s),i.context===null?i.context=s:i.pendingContext=s,i=Mi(t),i.payload={element:n},r=r===void 0?null:r,r!==null&&(i.callback=r),n=Vi(e,i,t),n!==null&&(xe(n,e,t),Wa(n,e,t))}function u_(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Hm(e,t){u_(e,t),(e=e.alternate)&&u_(e,t)}function tA(e){if(e.tag===13||e.tag===31){var t=qs(e,67108864);t!==null&&xe(t,e,67108864),Hm(e,67108864)}}function c_(e){if(e.tag===13||e.tag===31){var t=He();t=tm(t);var n=qs(e,t);n!==null&&xe(n,e,t),Hm(e,t)}}var zu=!0;function AI(e,t,n,i){var s=Y.T;Y.T=null;var r=mt.p;try{mt.p=2,Fm(e,t,n,i)}finally{mt.p=r,Y.T=s}}function SI(e,t,n,i){var s=Y.T;Y.T=null;var r=mt.p;try{mt.p=8,Fm(e,t,n,i)}finally{mt.p=r,Y.T=s}}function Fm(e,t,n,i){if(zu){var s=yd(i);if(s===null)tf(e,t,i,ju,n),h_(e,i);else if(wI(s,e,t,n,i))i.stopPropagation();else if(h_(e,i),t&4&&-1<bI.indexOf(e)){for(;s!==null;){var r=Wr(s);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var a=gs(r.pendingLanes);if(a!==0){var l=r;for(l.pendingLanes|=2,l.entangledLanes|=2;a;){var u=1<<31-qe(a);l.entanglements[1]|=u,a&=~u}Vn(r),!(dt&6)&&(Nu=je()+500,Go(0))}}break;case 31:case 13:l=qs(r,2),l!==null&&xe(l,r,2),bc(),Hm(r,2)}if(r=yd(i),r===null&&tf(e,t,i,ju,n),r===s)break;s=r}s!==null&&i.stopPropagation()}else tf(e,t,i,null,n)}}function yd(e){return e=sm(e),Gm(e)}var ju=null;function Gm(e){if(ju=null,e=lr(e),e!==null){var t=Lo(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=E0(t),e!==null)return e;e=null}else if(n===31){if(e=T0(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return ju=e,null}function eA(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(u1()){case w0:return 2;case R0:return 8;case gu:case c1:return 32;case I0:return 268435456;default:return 32}default:return 32}}var _d=!1,Ui=null,Pi=null,zi=null,Ro=new Map,Io=new Map,Ei=[],bI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function h_(e,t){switch(e){case"focusin":case"focusout":Ui=null;break;case"dragenter":case"dragleave":Pi=null;break;case"mouseover":case"mouseout":zi=null;break;case"pointerover":case"pointerout":Ro.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Io.delete(t.pointerId)}}function ka(e,t,n,i,s,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:r,targetContainers:[s]},t!==null&&(t=Wr(t),t!==null&&tA(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function wI(e,t,n,i,s){switch(t){case"focusin":return Ui=ka(Ui,e,t,n,i,s),!0;case"dragenter":return Pi=ka(Pi,e,t,n,i,s),!0;case"mouseover":return zi=ka(zi,e,t,n,i,s),!0;case"pointerover":var r=s.pointerId;return Ro.set(r,ka(Ro.get(r)||null,e,t,n,i,s)),!0;case"gotpointercapture":return r=s.pointerId,Io.set(r,ka(Io.get(r)||null,e,t,n,i,s)),!0}return!1}function nA(e){var t=lr(e.target);if(t!==null){var n=Lo(t);if(n!==null){if(t=n.tag,t===13){if(t=E0(n),t!==null){e.blockedOn=t,Xp(e.priority,function(){c_(n)});return}}else if(t===31){if(t=T0(n),t!==null){e.blockedOn=t,Xp(e.priority,function(){c_(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function eu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=yd(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Lf=i,n.target.dispatchEvent(i),Lf=null}else return t=Wr(n),t!==null&&tA(t),e.blockedOn=n,!1;t.shift()}return!0}function f_(e,t,n){eu(e)&&n.delete(t)}function RI(){_d=!1,Ui!==null&&eu(Ui)&&(Ui=null),Pi!==null&&eu(Pi)&&(Pi=null),zi!==null&&eu(zi)&&(zi=null),Ro.forEach(f_),Io.forEach(f_)}function xl(e,t){e.blockedOn===t&&(e.blockedOn=null,_d||(_d=!0,Jt.unstable_scheduleCallback(Jt.unstable_NormalPriority,RI)))}var Ol=null;function d_(e){Ol!==e&&(Ol=e,Jt.unstable_scheduleCallback(Jt.unstable_NormalPriority,function(){Ol===e&&(Ol=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],s=e[t+2];if(typeof i!="function"){if(Gm(i||n)===null)continue;break}var r=Wr(n);r!==null&&(e.splice(t,3),t-=3,Zf(r,{pending:!0,data:s,method:n.method,action:i},i,s))}}))}function Hr(e){function t(u){return xl(u,e)}Ui!==null&&xl(Ui,e),Pi!==null&&xl(Pi,e),zi!==null&&xl(zi,e),Ro.forEach(t),Io.forEach(t);for(var n=0;n<Ei.length;n++){var i=Ei[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Ei.length&&(n=Ei[0],n.blockedOn===null);)nA(n),n.blockedOn===null&&Ei.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var s=n[i],r=n[i+1],a=s[Oe]||null;if(typeof r=="function")a||d_(n);else if(a){var l=null;if(r&&r.hasAttribute("formAction")){if(s=r,a=r[Oe]||null)l=a.formAction;else if(Gm(s)!==null)continue}else l=a.action;typeof l=="function"?n[i+1]=l:(n.splice(i,3),i-=3),d_(n)}}}function iA(){function e(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(a){return s=a})},focusReset:"manual",scroll:"manual"})}function t(){s!==null&&(s(),s=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),s!==null&&(s(),s=null)}}}function Km(e){this._internalRoot=e}Ic.prototype.render=Km.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(V(409));var n=t.current,i=He();WT(n,i,e,t,null,null)};Ic.prototype.unmount=Km.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;WT(e.current,2,null,e,null,null),bc(),t[Zr]=null}};function Ic(e){this._internalRoot=e}Ic.prototype.unstable_scheduleHydration=function(e){if(e){var t=O0();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ei.length&&t!==0&&t<Ei[n].priority;n++);Ei.splice(n,0,e),n===0&&nA(e)}};var m_=_0.version;if(m_!=="19.2.5")throw Error(V(527,m_,"19.2.5"));mt.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(V(188)):(e=Object.keys(e).join(","),Error(V(268,e)));return e=n1(t),e=e!==null?A0(e):null,e=e===null?null:e.stateNode,e};var II={bundleType:0,version:"19.2.5",rendererPackageName:"react-dom",currentDispatcherRef:Y,reconcilerVersion:"19.2.5"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ml=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ml.isDisabled&&Ml.supportsFiber)try{Uo=Ml.inject(II),Be=Ml}catch{}}cc.createRoot=function(e,t){if(!v0(e))throw Error(V(299));var n=!1,i="",s=YE,r=XE,a=$E;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=JT(e,1,!1,null,null,n,i,null,s,r,a,iA),e[Zr]=t.current,jm(e),new Km(t)};cc.hydrateRoot=function(e,t,n){if(!v0(e))throw Error(V(299));var i=!1,s="",r=YE,a=XE,l=$E,u=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(a=n.onCaughtError),n.onRecoverableError!==void 0&&(l=n.onRecoverableError),n.formState!==void 0&&(u=n.formState)),t=JT(e,1,!0,t,n??null,i,s,u,r,a,l,iA),t.context=ZT(null),n=t.current,i=He(),i=tm(i),s=Mi(i),s.callback=null,Vi(n,s,i),n=i,t.current.lanes=n,zo(t,n),Vn(t),e[Zr]=t.current,jm(e),new Ic(t)};cc.version="19.2.5";function sA(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sA)}catch(e){console.error(e)}}sA(),f0.exports=cc;var CI=f0.exports;const NI=n0(CI);/**
 * @license lucide-react v1.11.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rA=(...e)=>e.filter((t,n,i)=>!!t&&t.trim()!==""&&i.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v1.11.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DI=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.11.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xI=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,i)=>i?i.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v1.11.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g_=e=>{const t=xI(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v1.11.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var sf={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.11.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OI=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1},MI=it.createContext({}),VI=()=>it.useContext(MI),kI=it.forwardRef(({color:e,size:t,strokeWidth:n,absoluteStrokeWidth:i,className:s="",children:r,iconNode:a,...l},u)=>{const{size:h=24,strokeWidth:d=2,absoluteStrokeWidth:m=!1,color:g="currentColor",className:E=""}=VI()??{},D=i??m?Number(n??d)*24/Number(t??h):n??d;return it.createElement("svg",{ref:u,...sf,width:t??h??sf.width,height:t??h??sf.height,stroke:e??g,strokeWidth:D,className:rA("lucide",E,s),...!r&&!OI(l)&&{"aria-hidden":"true"},...l},[...a.map(([M,U])=>it.createElement(M,U)),...Array.isArray(r)?r:[r]])});/**
 * @license lucide-react v1.11.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Se=(e,t)=>{const n=it.forwardRef(({className:i,...s},r)=>it.createElement(kI,{ref:r,iconNode:t,className:rA(`lucide-${DI(g_(e))}`,`lucide-${e}`,i),...s}));return n.displayName=g_(e),n};/**
 * @license lucide-react v1.11.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LI=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],aA=Se("chart-column",LI);/**
 * @license lucide-react v1.11.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UI=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],PI=Se("chevron-right",UI);/**
 * @license lucide-react v1.11.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zI=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],jI=Se("circle-alert",zI);/**
 * @license lucide-react v1.11.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BI=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],oA=Se("circle-check-big",BI);/**
 * @license lucide-react v1.11.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qI=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]],HI=Se("clock",qI);/**
 * @license lucide-react v1.11.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FI=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M8 13h2",key:"yr2amv"}],["path",{d:"M14 13h2",key:"un5t4a"}],["path",{d:"M8 17h2",key:"2yhykz"}],["path",{d:"M14 17h2",key:"10kma7"}]],GI=Se("file-spreadsheet",FI);/**
 * @license lucide-react v1.11.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KI=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],QI=Se("layout-dashboard",KI);/**
 * @license lucide-react v1.11.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YI=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],XI=Se("menu",YI);/**
 * @license lucide-react v1.11.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $I=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],JI=Se("message-square",$I);/**
 * @license lucide-react v1.11.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZI=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],WI=Se("plus",ZI);/**
 * @license lucide-react v1.11.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tC=[["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3",key:"1rgiei"}],["path",{d:"M18 4.933V21",key:"tjwmp4"}],["path",{d:"m4 6 7.106-3.79a2 2 0 0 1 1.788 0L20 6",key:"zywc2d"}],["path",{d:"m6 11-3.52 2.147a1 1 0 0 0-.48.854V19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a1 1 0 0 0-.48-.853L18 11",key:"1d4ql0"}],["path",{d:"M6 4.933V21",key:"1ufz1j"}],["circle",{cx:"12",cy:"9",r:"2",key:"1092wv"}]],p_=Se("school",tC);/**
 * @license lucide-react v1.11.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eC=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],nC=Se("search",eC);/**
 * @license lucide-react v1.11.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iC=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],sC=Se("trending-up",iC);/**
 * @license lucide-react v1.11.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rC=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],aC=Se("upload",rC);/**
 * @license lucide-react v1.11.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oC=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],vd=Se("x",oC),lC=()=>{};var y_={};/**
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
 */const lA=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let s=e.charCodeAt(i);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&i+1<e.length&&(e.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++i)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},uC=function(e){const t=[];let n=0,i=0;for(;n<e.length;){const s=e[n++];if(s<128)t[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=e[n++];t[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=e[n++],a=e[n++],l=e[n++],u=((s&7)<<18|(r&63)<<12|(a&63)<<6|l&63)-65536;t[i++]=String.fromCharCode(55296+(u>>10)),t[i++]=String.fromCharCode(56320+(u&1023))}else{const r=e[n++],a=e[n++];t[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|a&63)}}return t.join("")},uA={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<e.length;s+=3){const r=e[s],a=s+1<e.length,l=a?e[s+1]:0,u=s+2<e.length,h=u?e[s+2]:0,d=r>>2,m=(r&3)<<4|l>>4;let g=(l&15)<<2|h>>6,E=h&63;u||(E=64,a||(g=64)),i.push(n[d],n[m],n[g],n[E])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(lA(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):uC(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<e.length;){const r=n[e.charAt(s++)],l=s<e.length?n[e.charAt(s)]:0;++s;const h=s<e.length?n[e.charAt(s)]:64;++s;const m=s<e.length?n[e.charAt(s)]:64;if(++s,r==null||l==null||h==null||m==null)throw new cC;const g=r<<2|l>>4;if(i.push(g),h!==64){const E=l<<4&240|h>>2;if(i.push(E),m!==64){const D=h<<6&192|m;i.push(D)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class cC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const hC=function(e){const t=lA(e);return uA.encodeByteArray(t,!0)},Bu=function(e){return hC(e).replace(/\./g,"")},cA=function(e){try{return uA.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function fC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const dC=()=>fC().__FIREBASE_DEFAULTS__,mC=()=>{if(typeof process>"u"||typeof y_>"u")return;const e=y_.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},gC=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&cA(e[1]);return t&&JSON.parse(t)},Cc=()=>{try{return lC()||dC()||mC()||gC()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},hA=e=>{var t,n;return(n=(t=Cc())==null?void 0:t.emulatorHosts)==null?void 0:n[e]},pC=e=>{const t=hA(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),i]:[t.substring(0,n),i]},fA=()=>{var e;return(e=Cc())==null?void 0:e.config},dA=e=>{var t;return(t=Cc())==null?void 0:t[`_${e}`]};/**
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
 */class yC{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,i))}}}/**
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
 */function _C(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=t||"demo-project",s=e.iat||0,r=e.sub||e.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}},...e};return[Bu(JSON.stringify(n)),Bu(JSON.stringify(a)),""].join(".")}/**
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
 */function pe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function vC(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(pe())}function EC(){var t;const e=(t=Cc())==null?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function TC(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function mA(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function AC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function SC(){const e=pe();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function bC(){return!EC()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function gA(){try{return typeof indexedDB=="object"}catch{return!1}}function pA(){return new Promise((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;t(((r=s.error)==null?void 0:r.message)||"")}}catch(n){t(n)}})}function wC(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const RC="FirebaseError";class yn extends Error{constructor(t,n,i){super(n),this.code=t,this.customData=i,this.name=RC,Object.setPrototypeOf(this,yn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Fs.prototype.create)}}class Fs{constructor(t,n,i){this.service=t,this.serviceName=n,this.errors=i}create(t,...n){const i=n[0]||{},s=`${this.service}/${t}`,r=this.errors[t],a=r?IC(r,i):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new yn(s,l,i)}}function IC(e,t){return e.replace(CC,(n,i)=>{const s=t[i];return s!=null?String(s):`<${i}?>`})}const CC=/\{\$([^}]+)}/g;function NC(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function $i(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const s of n){if(!i.includes(s))return!1;const r=e[s],a=t[s];if(__(r)&&__(a)){if(!$i(r,a))return!1}else if(r!==a)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function __(e){return e!==null&&typeof e=="object"}/**
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
 */function Yo(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach(s=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function DC(e,t){const n=new xC(e,t);return n.subscribe.bind(n)}class xC{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(i=>{this.error(i)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,i){let s;if(t===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");OC(t,["next","error","complete"])?s=t:s={next:t,error:n,complete:i},s.next===void 0&&(s.next=rf),s.error===void 0&&(s.error=rf),s.complete===void 0&&(s.complete=rf);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function OC(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function rf(){}/**
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
 */const MC=1e3,VC=2,kC=4*60*60*1e3,LC=.5;function v_(e,t=MC,n=VC){const i=t*Math.pow(n,e),s=Math.round(LC*i*(Math.random()-.5)*2);return Math.min(kC,i+s)}/**
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
 */function zt(e){return e&&e._delegate?e._delegate:e}/**
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
 */function Xo(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}async function yA(e){return(await fetch(e,{credentials:"include"})).ok}class mn{constructor(t,n,i){this.name=t,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const _s="[DEFAULT]";/**
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
 */class UC{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const i=new yC;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){const n=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(t==null?void 0:t.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(zC(t))try{this.getOrInitializeService({instanceIdentifier:_s})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(t=_s){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=_s){return this.instances.has(t)}getOptions(t=_s){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);i===l&&a.resolve(s)}return s}onInit(t,n){const i=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(i)??new Set;s.add(t),this.onInitCallbacks.set(i,s);const r=this.instances.get(i);return r&&t(r,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:PC(t),options:n}),this.instances.set(t,i),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch{}return i||null}normalizeInstanceIdentifier(t=_s){return this.component?this.component.multipleInstances?t:_s:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function PC(e){return e===_s?void 0:e}function zC(e){return e.instantiationMode==="EAGER"}/**
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
 */class jC{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new UC(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var at;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(at||(at={}));const BC={debug:at.DEBUG,verbose:at.VERBOSE,info:at.INFO,warn:at.WARN,error:at.ERROR,silent:at.SILENT},qC=at.INFO,HC={[at.DEBUG]:"log",[at.VERBOSE]:"log",[at.INFO]:"info",[at.WARN]:"warn",[at.ERROR]:"error"},FC=(e,t,...n)=>{if(t<e.logLevel)return;const i=new Date().toISOString(),s=HC[t];if(s)console[s](`[${i}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Nc{constructor(t){this.name=t,this._logLevel=qC,this._logHandler=FC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in at))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?BC[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,at.DEBUG,...t),this._logHandler(this,at.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,at.VERBOSE,...t),this._logHandler(this,at.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,at.INFO,...t),this._logHandler(this,at.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,at.WARN,...t),this._logHandler(this,at.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,at.ERROR,...t),this._logHandler(this,at.ERROR,...t)}}const GC=(e,t)=>t.some(n=>e instanceof n);let E_,T_;function KC(){return E_||(E_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function QC(){return T_||(T_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const _A=new WeakMap,Ed=new WeakMap,vA=new WeakMap,af=new WeakMap,Qm=new WeakMap;function YC(e){const t=new Promise((n,i)=>{const s=()=>{e.removeEventListener("success",r),e.removeEventListener("error",a)},r=()=>{n(ji(e.result)),s()},a=()=>{i(e.error),s()};e.addEventListener("success",r),e.addEventListener("error",a)});return t.then(n=>{n instanceof IDBCursor&&_A.set(n,e)}).catch(()=>{}),Qm.set(t,e),t}function XC(e){if(Ed.has(e))return;const t=new Promise((n,i)=>{const s=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",a),e.removeEventListener("abort",a)},r=()=>{n(),s()},a=()=>{i(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",r),e.addEventListener("error",a),e.addEventListener("abort",a)});Ed.set(e,t)}let Td={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Ed.get(e);if(t==="objectStoreNames")return e.objectStoreNames||vA.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ji(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function $C(e){Td=e(Td)}function JC(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const i=e.call(of(this),t,...n);return vA.set(i,t.sort?t.sort():[t]),ji(i)}:QC().includes(e)?function(...t){return e.apply(of(this),t),ji(_A.get(this))}:function(...t){return ji(e.apply(of(this),t))}}function ZC(e){return typeof e=="function"?JC(e):(e instanceof IDBTransaction&&XC(e),GC(e,KC())?new Proxy(e,Td):e)}function ji(e){if(e instanceof IDBRequest)return YC(e);if(af.has(e))return af.get(e);const t=ZC(e);return t!==e&&(af.set(e,t),Qm.set(t,e)),t}const of=e=>Qm.get(e);function EA(e,t,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const a=indexedDB.open(e,t),l=ji(a);return i&&a.addEventListener("upgradeneeded",u=>{i(ji(a.result),u.oldVersion,u.newVersion,ji(a.transaction),u)}),n&&a.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{r&&u.addEventListener("close",()=>r()),s&&u.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const WC=["get","getKey","getAll","getAllKeys","count"],t2=["put","add","delete","clear"],lf=new Map;function A_(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(lf.get(t))return lf.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,s=t2.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||WC.includes(n)))return;const r=async function(a,...l){const u=this.transaction(a,s?"readwrite":"readonly");let h=u.store;return i&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&u.done]))[0]};return lf.set(t,r),r}$C(e=>({...e,get:(t,n,i)=>A_(t,n)||e.get(t,n,i),has:(t,n)=>!!A_(t,n)||e.has(t,n)}));/**
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
 */class e2{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(n2(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function n2(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Ad="@firebase/app",S_="0.14.11";/**
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
 */const ei=new Nc("@firebase/app"),i2="@firebase/app-compat",s2="@firebase/analytics-compat",r2="@firebase/analytics",a2="@firebase/app-check-compat",o2="@firebase/app-check",l2="@firebase/auth",u2="@firebase/auth-compat",c2="@firebase/database",h2="@firebase/data-connect",f2="@firebase/database-compat",d2="@firebase/functions",m2="@firebase/functions-compat",g2="@firebase/installations",p2="@firebase/installations-compat",y2="@firebase/messaging",_2="@firebase/messaging-compat",v2="@firebase/performance",E2="@firebase/performance-compat",T2="@firebase/remote-config",A2="@firebase/remote-config-compat",S2="@firebase/storage",b2="@firebase/storage-compat",w2="@firebase/firestore",R2="@firebase/ai",I2="@firebase/firestore-compat",C2="firebase",N2="12.12.0";/**
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
 */const Sd="[DEFAULT]",D2={[Ad]:"fire-core",[i2]:"fire-core-compat",[r2]:"fire-analytics",[s2]:"fire-analytics-compat",[o2]:"fire-app-check",[a2]:"fire-app-check-compat",[l2]:"fire-auth",[u2]:"fire-auth-compat",[c2]:"fire-rtdb",[h2]:"fire-data-connect",[f2]:"fire-rtdb-compat",[d2]:"fire-fn",[m2]:"fire-fn-compat",[g2]:"fire-iid",[p2]:"fire-iid-compat",[y2]:"fire-fcm",[_2]:"fire-fcm-compat",[v2]:"fire-perf",[E2]:"fire-perf-compat",[T2]:"fire-rc",[A2]:"fire-rc-compat",[S2]:"fire-gcs",[b2]:"fire-gcs-compat",[w2]:"fire-fst",[I2]:"fire-fst-compat",[R2]:"fire-vertex","fire-js":"fire-js",[C2]:"fire-js-all"};/**
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
 */const qu=new Map,x2=new Map,bd=new Map;function b_(e,t){try{e.container.addComponent(t)}catch(n){ei.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function xn(e){const t=e.name;if(bd.has(t))return ei.debug(`There were multiple attempts to register component ${t}.`),!1;bd.set(t,e);for(const n of qu.values())b_(n,e);for(const n of x2.values())b_(n,e);return!0}function Gs(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function hn(e){return e==null?!1:e.settings!==void 0}/**
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
 */const O2={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Bi=new Fs("app","Firebase",O2);/**
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
 */class M2{constructor(t,n,i){this._isDeleted=!1,this._options={...t},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new mn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Bi.create("app-deleted",{appName:this._name})}}/**
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
 */const ra=N2;function TA(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const i={name:Sd,automaticDataCollectionEnabled:!0,...t},s=i.name;if(typeof s!="string"||!s)throw Bi.create("bad-app-name",{appName:String(s)});if(n||(n=fA()),!n)throw Bi.create("no-options");const r=qu.get(s);if(r){if($i(n,r.options)&&$i(i,r.config))return r;throw Bi.create("duplicate-app",{appName:s})}const a=new jC(s);for(const u of bd.values())a.addComponent(u);const l=new M2(n,i,a);return qu.set(s,l),l}function Ym(e=Sd){const t=qu.get(e);if(!t&&e===Sd&&fA())return TA();if(!t)throw Bi.create("no-app",{appName:e});return t}function on(e,t,n){let i=D2[e]??e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),r=t.match(/\s|\//);if(s||r){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&r&&a.push("and"),r&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ei.warn(a.join(" "));return}xn(new mn(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const V2="firebase-heartbeat-database",k2=1,Co="firebase-heartbeat-store";let uf=null;function AA(){return uf||(uf=EA(V2,k2,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Co)}catch(n){console.warn(n)}}}}).catch(e=>{throw Bi.create("idb-open",{originalErrorMessage:e.message})})),uf}async function L2(e){try{const n=(await AA()).transaction(Co),i=await n.objectStore(Co).get(SA(e));return await n.done,i}catch(t){if(t instanceof yn)ei.warn(t.message);else{const n=Bi.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});ei.warn(n.message)}}}async function w_(e,t){try{const i=(await AA()).transaction(Co,"readwrite");await i.objectStore(Co).put(t,SA(e)),await i.done}catch(n){if(n instanceof yn)ei.warn(n.message);else{const i=Bi.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ei.warn(i.message)}}}function SA(e){return`${e.name}!${e.options.appId}`}/**
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
 */const U2=1024,P2=30;class z2{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new B2(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var t,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=R_();if(((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(a=>a.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats.length>P2){const a=q2(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){ei.warn(i)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=R_(),{heartbeatsToSend:i,unsentEntries:s}=j2(this._heartbeatsCache.heartbeats),r=Bu(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return ei.warn(n),""}}}function R_(){return new Date().toISOString().substring(0,10)}function j2(e,t=U2){const n=[];let i=e.slice();for(const s of e){const r=n.find(a=>a.agent===s.agent);if(r){if(r.dates.push(s.date),I_(n)>t){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),I_(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class B2{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return gA()?pA().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await L2(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const i=await this.read();return w_(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const i=await this.read();return w_(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function I_(e){return Bu(JSON.stringify({version:2,heartbeats:e})).length}function q2(e){if(e.length===0)return-1;let t=0,n=e[0].date;for(let i=1;i<e.length;i++)e[i].date<n&&(n=e[i].date,t=i);return t}/**
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
 */function H2(e){xn(new mn("platform-logger",t=>new e2(t),"PRIVATE")),xn(new mn("heartbeat",t=>new z2(t),"PRIVATE")),on(Ad,S_,e),on(Ad,S_,"esm2020"),on("fire-js","")}H2("");var F2="firebase",G2="12.12.1";/**
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
 */on(F2,G2,"app");const bA="@firebase/installations",Xm="0.6.21";/**
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
 */const wA=1e4,RA=`w:${Xm}`,IA="FIS_v2",K2="https://firebaseinstallations.googleapis.com/v1",Q2=60*60*1e3,Y2="installations",X2="Installations";/**
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
 */const $2={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ms=new Fs(Y2,X2,$2);function CA(e){return e instanceof yn&&e.code.includes("request-failed")}/**
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
 */function NA({projectId:e}){return`${K2}/projects/${e}/installations`}function DA(e){return{token:e.token,requestStatus:2,expiresIn:Z2(e.expiresIn),creationTime:Date.now()}}async function xA(e,t){const i=(await t.json()).error;return Ms.create("request-failed",{requestName:e,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function OA({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function J2(e,{refreshToken:t}){const n=OA(e);return n.append("Authorization",W2(t)),n}async function MA(e){const t=await e();return t.status>=500&&t.status<600?e():t}function Z2(e){return Number(e.replace("s","000"))}function W2(e){return`${IA} ${e}`}/**
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
 */async function tN({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const i=NA(e),s=OA(e),r=t.getImmediate({optional:!0});if(r){const h=await r.getHeartbeatsHeader();h&&s.append("x-firebase-client",h)}const a={fid:n,authVersion:IA,appId:e.appId,sdkVersion:RA},l={method:"POST",headers:s,body:JSON.stringify(a)},u=await MA(()=>fetch(i,l));if(u.ok){const h=await u.json();return{fid:h.fid||n,registrationStatus:2,refreshToken:h.refreshToken,authToken:DA(h.authToken)}}else throw await xA("Create Installation",u)}/**
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
 */function VA(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function eN(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const nN=/^[cdef][\w-]{21}$/,wd="";function iN(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=sN(e);return nN.test(n)?n:wd}catch{return wd}}function sN(e){return eN(e).substr(0,22)}/**
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
 */function Dc(e){return`${e.appName}!${e.appId}`}/**
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
 */const kA=new Map;function LA(e,t){const n=Dc(e);UA(n,t),rN(n,t)}function UA(e,t){const n=kA.get(e);if(n)for(const i of n)i(t)}function rN(e,t){const n=aN();n&&n.postMessage({key:e,fid:t}),oN()}let vs=null;function aN(){return!vs&&"BroadcastChannel"in self&&(vs=new BroadcastChannel("[Firebase] FID Change"),vs.onmessage=e=>{UA(e.data.key,e.data.fid)}),vs}function oN(){kA.size===0&&vs&&(vs.close(),vs=null)}/**
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
 */const lN="firebase-installations-database",uN=1,Vs="firebase-installations-store";let cf=null;function $m(){return cf||(cf=EA(lN,uN,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Vs)}}})),cf}async function Hu(e,t){const n=Dc(e),s=(await $m()).transaction(Vs,"readwrite"),r=s.objectStore(Vs),a=await r.get(n);return await r.put(t,n),await s.done,(!a||a.fid!==t.fid)&&LA(e,t.fid),t}async function PA(e){const t=Dc(e),i=(await $m()).transaction(Vs,"readwrite");await i.objectStore(Vs).delete(t),await i.done}async function xc(e,t){const n=Dc(e),s=(await $m()).transaction(Vs,"readwrite"),r=s.objectStore(Vs),a=await r.get(n),l=t(a);return l===void 0?await r.delete(n):await r.put(l,n),await s.done,l&&(!a||a.fid!==l.fid)&&LA(e,l.fid),l}/**
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
 */async function Jm(e){let t;const n=await xc(e.appConfig,i=>{const s=cN(i),r=hN(e,s);return t=r.registrationPromise,r.installationEntry});return n.fid===wd?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function cN(e){const t=e||{fid:iN(),registrationStatus:0};return zA(t)}function hN(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Ms.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},i=fN(e,n);return{installationEntry:n,registrationPromise:i}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:dN(e)}:{installationEntry:t}}async function fN(e,t){try{const n=await tN(e,t);return Hu(e.appConfig,n)}catch(n){throw CA(n)&&n.customData.serverCode===409?await PA(e.appConfig):await Hu(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function dN(e){let t=await C_(e.appConfig);for(;t.registrationStatus===1;)await VA(100),t=await C_(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:i}=await Jm(e);return i||n}return t}function C_(e){return xc(e,t=>{if(!t)throw Ms.create("installation-not-found");return zA(t)})}function zA(e){return mN(e)?{fid:e.fid,registrationStatus:0}:e}function mN(e){return e.registrationStatus===1&&e.registrationTime+wA<Date.now()}/**
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
 */async function gN({appConfig:e,heartbeatServiceProvider:t},n){const i=pN(e,n),s=J2(e,n),r=t.getImmediate({optional:!0});if(r){const h=await r.getHeartbeatsHeader();h&&s.append("x-firebase-client",h)}const a={installation:{sdkVersion:RA,appId:e.appId}},l={method:"POST",headers:s,body:JSON.stringify(a)},u=await MA(()=>fetch(i,l));if(u.ok){const h=await u.json();return DA(h)}else throw await xA("Generate Auth Token",u)}function pN(e,{fid:t}){return`${NA(e)}/${t}/authTokens:generate`}/**
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
 */async function Zm(e,t=!1){let n;const i=await xc(e.appConfig,r=>{if(!jA(r))throw Ms.create("not-registered");const a=r.authToken;if(!t&&vN(a))return r;if(a.requestStatus===1)return n=yN(e,t),r;{if(!navigator.onLine)throw Ms.create("app-offline");const l=TN(r);return n=_N(e,l),l}});return n?await n:i.authToken}async function yN(e,t){let n=await N_(e.appConfig);for(;n.authToken.requestStatus===1;)await VA(100),n=await N_(e.appConfig);const i=n.authToken;return i.requestStatus===0?Zm(e,t):i}function N_(e){return xc(e,t=>{if(!jA(t))throw Ms.create("not-registered");const n=t.authToken;return AN(n)?{...t,authToken:{requestStatus:0}}:t})}async function _N(e,t){try{const n=await gN(e,t),i={...t,authToken:n};return await Hu(e.appConfig,i),n}catch(n){if(CA(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await PA(e.appConfig);else{const i={...t,authToken:{requestStatus:0}};await Hu(e.appConfig,i)}throw n}}function jA(e){return e!==void 0&&e.registrationStatus===2}function vN(e){return e.requestStatus===2&&!EN(e)}function EN(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Q2}function TN(e){const t={requestStatus:1,requestTime:Date.now()};return{...e,authToken:t}}function AN(e){return e.requestStatus===1&&e.requestTime+wA<Date.now()}/**
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
 */async function SN(e){const t=e,{installationEntry:n,registrationPromise:i}=await Jm(t);return i?i.catch(console.error):Zm(t).catch(console.error),n.fid}/**
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
 */async function bN(e,t=!1){const n=e;return await wN(n),(await Zm(n,t)).token}async function wN(e){const{registrationPromise:t}=await Jm(e);t&&await t}/**
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
 */function RN(e){if(!e||!e.options)throw hf("App Configuration");if(!e.name)throw hf("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw hf(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function hf(e){return Ms.create("missing-app-config-values",{valueName:e})}/**
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
 */const BA="installations",IN="installations-internal",CN=e=>{const t=e.getProvider("app").getImmediate(),n=RN(t),i=Gs(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},NN=e=>{const t=e.getProvider("app").getImmediate(),n=Gs(t,BA).getImmediate();return{getId:()=>SN(n),getToken:s=>bN(n,s)}};function DN(){xn(new mn(BA,CN,"PUBLIC")),xn(new mn(IN,NN,"PRIVATE"))}DN();on(bA,Xm);on(bA,Xm,"esm2020");/**
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
 */const Fu="analytics",xN="firebase_id",ON="origin",MN=60*1e3,VN="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Wm="https://www.googletagmanager.com/gtag/js";/**
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
 */const Te=new Nc("@firebase/analytics");/**
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
 */const kN={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Fe=new Fs("analytics","Analytics",kN);/**
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
 */function LN(e){if(!e.startsWith(Wm)){const t=Fe.create("invalid-gtag-resource",{gtagURL:e});return Te.warn(t.message),""}return e}function qA(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function UN(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function PN(e,t){const n=UN("firebase-js-sdk-policy",{createScriptURL:LN}),i=document.createElement("script"),s=`${Wm}?l=${e}&id=${t}`;i.src=n?n==null?void 0:n.createScriptURL(s):s,i.async=!0,document.head.appendChild(i)}function zN(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function jN(e,t,n,i,s,r){const a=i[s];try{if(a)await t[a];else{const u=(await qA(n)).find(h=>h.measurementId===s);u&&await t[u.appId]}}catch(l){Te.error(l)}e("config",s,r)}async function BN(e,t,n,i,s){try{let r=[];if(s&&s.send_to){let a=s.send_to;Array.isArray(a)||(a=[a]);const l=await qA(n);for(const u of a){const h=l.find(m=>m.measurementId===u),d=h&&t[h.appId];if(d)r.push(d);else{r=[];break}}}r.length===0&&(r=Object.values(t)),await Promise.all(r),e("event",i,s||{})}catch(r){Te.error(r)}}function qN(e,t,n,i){async function s(r,...a){try{if(r==="event"){const[l,u]=a;await BN(e,t,n,l,u)}else if(r==="config"){const[l,u]=a;await jN(e,t,n,i,l,u)}else if(r==="consent"){const[l,u]=a;e("consent",l,u)}else if(r==="get"){const[l,u,h]=a;e("get",l,u,h)}else if(r==="set"){const[l]=a;e("set",l)}else e(r,...a)}catch(l){Te.error(l)}}return s}function HN(e,t,n,i,s){let r=function(...a){window[i].push(arguments)};return window[s]&&typeof window[s]=="function"&&(r=window[s]),window[s]=qN(r,e,t,n),{gtagCore:r,wrappedGtag:window[s]}}function FN(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(Wm)&&n.src.includes(e))return n;return null}/**
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
 */const GN=30,KN=1e3;class QN{constructor(t={},n=KN){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const HA=new QN;function YN(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function XN(e){var a;const{appId:t,apiKey:n}=e,i={method:"GET",headers:YN(n)},s=VN.replace("{app-id}",t),r=await fetch(s,i);if(r.status!==200&&r.status!==304){let l="";try{const u=await r.json();(a=u.error)!=null&&a.message&&(l=u.error.message)}catch{}throw Fe.create("config-fetch-failed",{httpStatus:r.status,responseMessage:l})}return r.json()}async function $N(e,t=HA,n){const{appId:i,apiKey:s,measurementId:r}=e.options;if(!i)throw Fe.create("no-app-id");if(!s){if(r)return{measurementId:r,appId:i};throw Fe.create("no-api-key")}const a=t.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new WN;return setTimeout(async()=>{l.abort()},MN),FA({appId:i,apiKey:s,measurementId:r},a,l,t)}async function FA(e,{throttleEndTimeMillis:t,backoffCount:n},i,s=HA){var l;const{appId:r,measurementId:a}=e;try{await JN(i,t)}catch(u){if(a)return Te.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:r,measurementId:a};throw u}try{const u=await XN(e);return s.deleteThrottleMetadata(r),u}catch(u){const h=u;if(!ZN(h)){if(s.deleteThrottleMetadata(r),a)return Te.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:r,measurementId:a};throw u}const d=Number((l=h==null?void 0:h.customData)==null?void 0:l.httpStatus)===503?v_(n,s.intervalMillis,GN):v_(n,s.intervalMillis),m={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return s.setThrottleMetadata(r,m),Te.debug(`Calling attemptFetch again in ${d} millis`),FA(e,m,i,s)}}function JN(e,t){return new Promise((n,i)=>{const s=Math.max(t-Date.now(),0),r=setTimeout(n,s);e.addEventListener(()=>{clearTimeout(r),i(Fe.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function ZN(e){if(!(e instanceof yn)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class WN{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function tD(e,t,n,i,s){if(s&&s.global){e("event",n,i);return}else{const r=await t,a={...i,send_to:r};e("event",n,a)}}async function eD(e,t,n,i){if(i&&i.global){const s={};for(const r of Object.keys(n))s[`user_properties.${r}`]=n[r];return e("set",s),Promise.resolve()}else{const s=await t;e("config",s,{update:!0,user_properties:n})}}/**
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
 */async function nD(){if(gA())try{await pA()}catch(e){return Te.warn(Fe.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return Te.warn(Fe.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function iD(e,t,n,i,s,r,a){const l=$N(e);l.then(g=>{n[g.measurementId]=g.appId,e.options.measurementId&&g.measurementId!==e.options.measurementId&&Te.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>Te.error(g)),t.push(l);const u=nD().then(g=>{if(g)return i.getId()}),[h,d]=await Promise.all([l,u]);FN(r)||PN(r,h.measurementId),s("js",new Date);const m=(a==null?void 0:a.config)??{};return m[ON]="firebase",m.update=!0,d!=null&&(m[xN]=d),s("config",h.measurementId,m),h.measurementId}/**
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
 */class sD{constructor(t){this.app=t}_delete(){return delete Rr[this.app.options.appId],Promise.resolve()}}let Rr={},D_=[];const x_={};let ff="dataLayer",rD="gtag",O_,tg,M_=!1;function aD(){const e=[];if(mA()&&e.push("This is a browser extension environment."),wC()||e.push("Cookies are not available."),e.length>0){const t=e.map((i,s)=>`(${s+1}) ${i}`).join(" "),n=Fe.create("invalid-analytics-context",{errorInfo:t});Te.warn(n.message)}}function oD(e,t,n){aD();const i=e.options.appId;if(!i)throw Fe.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)Te.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Fe.create("no-api-key");if(Rr[i]!=null)throw Fe.create("already-exists",{id:i});if(!M_){zN(ff);const{wrappedGtag:r,gtagCore:a}=HN(Rr,D_,x_,ff,rD);tg=r,O_=a,M_=!0}return Rr[i]=iD(e,D_,x_,t,O_,ff,n),new sD(e)}function lD(e=Ym()){e=zt(e);const t=Gs(e,Fu);return t.isInitialized()?t.getImmediate():uD(e)}function uD(e,t={}){const n=Gs(e,Fu);if(n.isInitialized()){const s=n.getImmediate();if($i(t,n.getOptions()))return s;throw Fe.create("already-initialized")}return n.initialize({options:t})}function cD(e,t,n){e=zt(e),eD(tg,Rr[e.app.options.appId],t,n).catch(i=>Te.error(i))}function hD(e,t,n,i){e=zt(e),tD(tg,Rr[e.app.options.appId],t,n,i).catch(s=>Te.error(s))}const V_="@firebase/analytics",k_="0.10.21";function fD(){xn(new mn(Fu,(t,{options:n})=>{const i=t.getProvider("app").getImmediate(),s=t.getProvider("installations-internal").getImmediate();return oD(i,s,n)},"PUBLIC")),xn(new mn("analytics-internal",e,"PRIVATE")),on(V_,k_),on(V_,k_,"esm2020");function e(t){try{const n=t.getProvider(Fu).getImmediate();return{logEvent:(i,s,r)=>hD(n,i,s,r),setUserProperties:(i,s)=>cD(n,i,s)}}catch(n){throw Fe.create("interop-component-reg-failed",{reason:n})}}}fD();function GA(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const dD=GA,KA=new Fs("auth","Firebase",GA());/**
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
 */const Gu=new Nc("@firebase/auth");function mD(e,...t){Gu.logLevel<=at.WARN&&Gu.warn(`Auth (${ra}): ${e}`,...t)}function nu(e,...t){Gu.logLevel<=at.ERROR&&Gu.error(`Auth (${ra}): ${e}`,...t)}/**
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
 */function ni(e,...t){throw eg(e,...t)}function Rn(e,...t){return eg(e,...t)}function QA(e,t,n){const i={...dD(),[t]:n};return new Fs("auth","Firebase",i).create(t,{appName:e.name})}function qi(e){return QA(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function eg(e,...t){if(typeof e!="string"){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return KA.create(e,...t)}function X(e,t,...n){if(!e)throw eg(t,...n)}function Gn(e){const t="INTERNAL ASSERTION FAILED: "+e;throw nu(t),new Error(t)}function ii(e,t){e||Gn(t)}/**
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
 */function Rd(){var e;return typeof self<"u"&&((e=self.location)==null?void 0:e.href)||""}function gD(){return L_()==="http:"||L_()==="https:"}function L_(){var e;return typeof self<"u"&&((e=self.location)==null?void 0:e.protocol)||null}/**
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
 */function pD(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(gD()||mA()||"connection"in navigator)?navigator.onLine:!0}function yD(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class $o{constructor(t,n){this.shortDelay=t,this.longDelay=n,ii(n>t,"Short delay should be less than long delay!"),this.isMobile=vC()||AC()}get(){return pD()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ng(e,t){ii(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class YA{static initialize(t,n,i){this.fetchImpl=t,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Gn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Gn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Gn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const _D={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const vD=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],ED=new $o(3e4,6e4);function Oc(e,t){return e.tenantId&&!t.tenantId?{...t,tenantId:e.tenantId}:t}async function aa(e,t,n,i,s={}){return XA(e,s,async()=>{let r={},a={};i&&(t==="GET"?a=i:r={body:JSON.stringify(i)});const l=Yo({key:e.config.apiKey,...a}).slice(1),u=await e._getAdditionalHeaders();u["Content-Type"]="application/json",e.languageCode&&(u["X-Firebase-Locale"]=e.languageCode);const h={method:t,headers:u,...r};return TC()||(h.referrerPolicy="no-referrer"),e.emulatorConfig&&Xo(e.emulatorConfig.host)&&(h.credentials="include"),YA.fetch()(await JA(e,e.config.apiHost,n,l),h)})}async function XA(e,t,n){e._canInitEmulator=!1;const i={..._D,...t};try{const s=new TD(e),r=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const a=await r.json();if("needConfirmation"in a)throw Vl(e,"account-exists-with-different-credential",a);if(r.ok&&!("errorMessage"in a))return a;{const l=r.ok?a.errorMessage:a.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Vl(e,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw Vl(e,"email-already-in-use",a);if(u==="USER_DISABLED")throw Vl(e,"user-disabled",a);const d=i[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw QA(e,d,h);ni(e,d)}}catch(s){if(s instanceof yn)throw s;ni(e,"network-request-failed",{message:String(s)})}}async function $A(e,t,n,i,s={}){const r=await aa(e,t,n,i,s);return"mfaPendingCredential"in r&&ni(e,"multi-factor-auth-required",{_serverResponse:r}),r}async function JA(e,t,n,i){const s=`${t}${n}?${i}`,r=e,a=r.config.emulator?ng(e.config,s):`${e.config.apiScheme}://${s}`;return vD.includes(n)&&(await r._persistenceManagerAvailable,r._getPersistenceType()==="COOKIE")?r._getPersistence()._getFinalTarget(a).toString():a}class TD{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(Rn(this.auth,"network-request-failed")),ED.get())})}}function Vl(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=Rn(e,t,i);return s.customData._tokenResponse=n,s}/**
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
 */async function AD(e,t){return aa(e,"POST","/v1/accounts:delete",t)}async function Ku(e,t){return aa(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function lo(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function SD(e,t=!1){const n=zt(e),i=await n.getIdToken(t),s=ig(i);X(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,a=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:lo(df(s.auth_time)),issuedAtTime:lo(df(s.iat)),expirationTime:lo(df(s.exp)),signInProvider:a||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function df(e){return Number(e)*1e3}function ig(e){const[t,n,i]=e.split(".");if(t===void 0||n===void 0||i===void 0)return nu("JWT malformed, contained fewer than 3 sections"),null;try{const s=cA(n);return s?JSON.parse(s):(nu("Failed to decode base64 JWT payload"),null)}catch(s){return nu("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function U_(e){const t=ig(e);return X(t,"internal-error"),X(typeof t.exp<"u","internal-error"),X(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function No(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof yn&&bD(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function bD({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class wD{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){if(t){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Id{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=lo(this.lastLoginAt),this.creationTime=lo(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Qu(e){var m;const t=e.auth,n=await e.getIdToken(),i=await No(e,Ku(t,{idToken:n}));X(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const r=(m=s.providerUserInfo)!=null&&m.length?ZA(s.providerUserInfo):[],a=ID(e.providerData,r),l=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(a!=null&&a.length),h=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Id(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(e,d)}async function RD(e){const t=zt(e);await Qu(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function ID(e,t){return[...e.filter(i=>!t.some(s=>s.providerId===i.providerId)),...t]}function ZA(e){return e.map(({providerId:t,...n})=>({providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function CD(e,t){const n=await XA(e,{},async()=>{const i=Yo({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:r}=e.config,a=await JA(e,s,"/v1/token",`key=${r}`),l=await e._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:i};return e.emulatorConfig&&Xo(e.emulatorConfig.host)&&(u.credentials="include"),YA.fetch()(a,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ND(e,t){return aa(e,"POST","/v2/accounts:revokeToken",Oc(e,t))}/**
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
 */class Ir{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){X(t.idToken,"internal-error"),X(typeof t.idToken<"u","internal-error"),X(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):U_(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){X(t.length!==0,"internal-error");const n=U_(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(X(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:i,refreshToken:s,expiresIn:r}=await CD(t,n);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(t,n,i){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(t,n){const{refreshToken:i,accessToken:s,expirationTime:r}=n,a=new Ir;return i&&(X(typeof i=="string","internal-error",{appName:t}),a.refreshToken=i),s&&(X(typeof s=="string","internal-error",{appName:t}),a.accessToken=s),r&&(X(typeof r=="number","internal-error",{appName:t}),a.expirationTime=r),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Ir,this.toJSON())}_performRefresh(){return Gn("not implemented")}}/**
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
 */function mi(e,t){X(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class fn{constructor({uid:t,auth:n,stsTokenManager:i,...s}){this.providerId="firebase",this.proactiveRefresh=new wD(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Id(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await No(this,this.stsTokenManager.getToken(this.auth,t));return X(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return SD(this,t)}reload(){return RD(this)}_assign(t){this!==t&&(X(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>({...n})),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new fn({...this,auth:t,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(t){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let i=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),i=!0),n&&await Qu(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(hn(this.auth.app))return Promise.reject(qi(this.auth));const t=await this.getIdToken();return await No(this,AD(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>({...t})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){const i=n.displayName??void 0,s=n.email??void 0,r=n.phoneNumber??void 0,a=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,h=n.createdAt??void 0,d=n.lastLoginAt??void 0,{uid:m,emailVerified:g,isAnonymous:E,providerData:D,stsTokenManager:M}=n;X(m&&M,t,"internal-error");const U=Ir.fromJSON(this.name,M);X(typeof m=="string",t,"internal-error"),mi(i,t.name),mi(s,t.name),X(typeof g=="boolean",t,"internal-error"),X(typeof E=="boolean",t,"internal-error"),mi(r,t.name),mi(a,t.name),mi(l,t.name),mi(u,t.name),mi(h,t.name),mi(d,t.name);const b=new fn({uid:m,auth:t,email:s,emailVerified:g,displayName:i,isAnonymous:E,photoURL:a,phoneNumber:r,tenantId:l,stsTokenManager:U,createdAt:h,lastLoginAt:d});return D&&Array.isArray(D)&&(b.providerData=D.map(A=>({...A}))),u&&(b._redirectEventId=u),b}static async _fromIdTokenResponse(t,n,i=!1){const s=new Ir;s.updateFromServerResponse(n);const r=new fn({uid:n.localId,auth:t,stsTokenManager:s,isAnonymous:i});return await Qu(r),r}static async _fromGetAccountInfoResponse(t,n,i){const s=n.users[0];X(s.localId!==void 0,"internal-error");const r=s.providerUserInfo!==void 0?ZA(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(r!=null&&r.length),l=new Ir;l.updateFromIdToken(i);const u=new fn({uid:s.localId,auth:t,stsTokenManager:l,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:r,metadata:new Id(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(r!=null&&r.length)};return Object.assign(u,h),u}}/**
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
 */const P_=new Map;function Kn(e){ii(e instanceof Function,"Expected a class definition");let t=P_.get(e);return t?(ii(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,P_.set(e,t),t)}/**
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
 */class WA{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}WA.type="NONE";const z_=WA;/**
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
 */function iu(e,t,n){return`firebase:${e}:${t}:${n}`}class Cr{constructor(t,n,i){this.persistence=t,this.auth=n,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=iu(this.userKey,s.apiKey,r),this.fullPersistenceKey=iu("persistence",s.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const n=await Ku(this.auth,{idToken:t}).catch(()=>{});return n?fn._fromGetAccountInfoResponse(this.auth,n,t):null}return fn._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,i="authUser"){if(!n.length)return new Cr(Kn(z_),t,i);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let r=s[0]||Kn(z_);const a=iu(i,t.config.apiKey,t.name);let l=null;for(const h of n)try{const d=await h._get(a);if(d){let m;if(typeof d=="string"){const g=await Ku(t,{idToken:d}).catch(()=>{});if(!g)break;m=await fn._fromGetAccountInfoResponse(t,g,d)}else m=fn._fromJSON(t,d);h!==r&&(l=m),r=h;break}}catch{}const u=s.filter(h=>h._shouldAllowMigration);return!r._shouldAllowMigration||!u.length?new Cr(r,t,i):(r=u[0],l&&await r._set(a,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==r)try{await h._remove(a)}catch{}})),new Cr(r,t,i))}}/**
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
 */function j_(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(iS(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(tS(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(rS(t))return"Blackberry";if(aS(t))return"Webos";if(eS(t))return"Safari";if((t.includes("chrome/")||nS(t))&&!t.includes("edge/"))return"Chrome";if(sS(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=e.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function tS(e=pe()){return/firefox\//i.test(e)}function eS(e=pe()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function nS(e=pe()){return/crios\//i.test(e)}function iS(e=pe()){return/iemobile/i.test(e)}function sS(e=pe()){return/android/i.test(e)}function rS(e=pe()){return/blackberry/i.test(e)}function aS(e=pe()){return/webos/i.test(e)}function sg(e=pe()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function DD(e=pe()){var t;return sg(e)&&!!((t=window.navigator)!=null&&t.standalone)}function xD(){return SC()&&document.documentMode===10}function oS(e=pe()){return sg(e)||sS(e)||aS(e)||rS(e)||/windows phone/i.test(e)||iS(e)}/**
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
 */function lS(e,t=[]){let n;switch(e){case"Browser":n=j_(pe());break;case"Worker":n=`${j_(pe())}-${e}`;break;default:n=e}const i=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${ra}/${i}`}/**
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
 */class OD{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const i=r=>new Promise((a,l)=>{try{const u=t(r);a(u)}catch(u){l(u)}});i.onAbort=n,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const i of this.queue)await i(t),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function MD(e,t={}){return aa(e,"GET","/v2/passwordPolicy",Oc(e,t))}/**
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
 */const VD=6;class kD{constructor(t){var i;const n=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??VD,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((i=t.allowedNonAlphanumericCharacters)==null?void 0:i.join(""))??"",this.forceUpgradeOnSignin=t.forceUpgradeOnSignin??!1,this.schemaVersion=t.schemaVersion}validatePassword(t){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,n),this.validatePasswordCharacterOptions(t,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(t,n){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=t.length>=i),s&&(n.meetsMaxPasswordLength=t.length<=s)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let s=0;s<t.length;s++)i=t.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(t,n,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=r))}}/**
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
 */class LD{constructor(t,n,i,s){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new B_(this),this.idTokenSubscription=new B_(this),this.beforeStateQueue=new OD(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=KA,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(r=>this._resolvePersistenceManagerAvailable=r)}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Kn(n)),this._initializationPromise=this.queue(async()=>{var i,s,r;if(!this._deleted&&(this.persistenceManager=await Cr.create(this,t),(i=this._resolvePersistenceManagerAvailable)==null||i.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)==null?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await Ku(this,{idToken:t}),i=await fn._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(i)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var r;if(hn(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(r=this.redirectUser)==null?void 0:r._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(t);(!a||a===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Qu(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=yD()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(hn(this.app))return Promise.reject(qi(this));const n=t?zt(t):null;return n&&X(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&X(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return hn(this.app)?Promise.reject(qi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return hn(this.app)?Promise.reject(qi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Kn(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await MD(this),n=new kD(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new Fs("auth","Firebase",t())}onAuthStateChanged(t,n,i){return this.registerStateListener(this.authStateSubscription,t,n,i)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,i){return this.registerStateListener(this.idTokenSubscription,t,n,i)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const i=this.onAuthStateChanged(()=>{i(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await ND(this,i)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)==null?void 0:t.toJSON()}}async _setRedirectUser(t,n){const i=await this.getOrInitRedirectPersistenceManager(n);return t===null?i.removeCurrentUser():i.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Kn(t)||this._popupRedirectResolver;X(n,this,"argument-error"),this.redirectPersistenceManager=await Cr.create(this,[Kn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===t?this._currentUser:((i=this.redirectUser)==null?void 0:i._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,i,s){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(X(l,this,"internal-error"),l.then(()=>{a||r(this.currentUser)}),typeof n=="function"){const u=t.addObserver(n,i,s);return()=>{a=!0,u()}}else{const u=t.addObserver(n);return()=>{a=!0,u()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=lS(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var n;if(hn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return t!=null&&t.error&&mD(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Mc(e){return zt(e)}class B_{constructor(t){this.auth=t,this.observer=null,this.addObserver=DC(n=>this.observer=n)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let rg={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function UD(e){rg=e}function PD(e){return rg.loadJS(e)}function zD(){return rg.gapiScript}function jD(e){return`__${e}${Math.floor(Math.random()*1e6)}`}/**
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
 */function BD(e,t){const n=Gs(e,"auth");if(n.isInitialized()){const s=n.getImmediate(),r=n.getOptions();if($i(r,t??{}))return s;ni(s,"already-initialized")}return n.initialize({options:t})}function qD(e,t){const n=(t==null?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Kn);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,t==null?void 0:t.popupRedirectResolver)}function HD(e,t,n){const i=Mc(e);X(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");const s=!1,r=uS(t),{host:a,port:l}=FD(t),u=l===null?"":`:${l}`,h={url:`${r}//${a}${u}/`},d=Object.freeze({host:a,port:l,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!i._canInitEmulator){X(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),X($i(h,i.config.emulator)&&$i(d,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=h,i.emulatorConfig=d,i.settings.appVerificationDisabledForTesting=!0,Xo(a)?yA(`${r}//${a}${u}`):GD()}function uS(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function FD(e){const t=uS(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:q_(i.substr(r.length+1))}}else{const[r,a]=i.split(":");return{host:r,port:q_(a)}}}function q_(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function GD(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class cS{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Gn("not implemented")}_getIdTokenResponse(t){return Gn("not implemented")}_linkToIdToken(t,n){return Gn("not implemented")}_getReauthenticationResolver(t){return Gn("not implemented")}}/**
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
 */async function Nr(e,t){return $A(e,"POST","/v1/accounts:signInWithIdp",Oc(e,t))}/**
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
 */const KD="http://localhost";class ks extends cS{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new ks(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):ni("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:i,signInMethod:s,...r}=n;if(!i||!s)return null;const a=new ks(i,s);return a.idToken=r.idToken||void 0,a.accessToken=r.accessToken||void 0,a.secret=r.secret,a.nonce=r.nonce,a.pendingToken=r.pendingToken||null,a}_getIdTokenResponse(t){const n=this.buildRequest();return Nr(t,n)}_linkToIdToken(t,n){const i=this.buildRequest();return i.idToken=n,Nr(t,i)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Nr(t,n)}buildRequest(){const t={requestUri:KD,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Yo(n)}return t}}/**
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
 */class hS{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Jo extends hS{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ti extends Jo{constructor(){super("facebook.com")}static credential(t){return ks._fromParams({providerId:Ti.PROVIDER_ID,signInMethod:Ti.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ti.credentialFromTaggedObject(t)}static credentialFromError(t){return Ti.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Ti.credential(t.oauthAccessToken)}catch{return null}}}Ti.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ti.PROVIDER_ID="facebook.com";/**
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
 */class Ai extends Jo{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return ks._fromParams({providerId:Ai.PROVIDER_ID,signInMethod:Ai.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Ai.credentialFromTaggedObject(t)}static credentialFromError(t){return Ai.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:i}=t;if(!n&&!i)return null;try{return Ai.credential(n,i)}catch{return null}}}Ai.GOOGLE_SIGN_IN_METHOD="google.com";Ai.PROVIDER_ID="google.com";/**
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
 */class Si extends Jo{constructor(){super("github.com")}static credential(t){return ks._fromParams({providerId:Si.PROVIDER_ID,signInMethod:Si.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Si.credentialFromTaggedObject(t)}static credentialFromError(t){return Si.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Si.credential(t.oauthAccessToken)}catch{return null}}}Si.GITHUB_SIGN_IN_METHOD="github.com";Si.PROVIDER_ID="github.com";/**
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
 */class bi extends Jo{constructor(){super("twitter.com")}static credential(t,n){return ks._fromParams({providerId:bi.PROVIDER_ID,signInMethod:bi.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return bi.credentialFromTaggedObject(t)}static credentialFromError(t){return bi.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=t;if(!n||!i)return null;try{return bi.credential(n,i)}catch{return null}}}bi.TWITTER_SIGN_IN_METHOD="twitter.com";bi.PROVIDER_ID="twitter.com";/**
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
 */async function QD(e,t){return $A(e,"POST","/v1/accounts:signUp",Oc(e,t))}/**
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
 */class Ji{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,i,s=!1){const r=await fn._fromIdTokenResponse(t,i,s),a=H_(i);return new Ji({user:r,providerId:a,_tokenResponse:i,operationType:n})}static async _forOperation(t,n,i){await t._updateTokensIfNecessary(i,!0);const s=H_(i);return new Ji({user:t,providerId:s,_tokenResponse:i,operationType:n})}}function H_(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */async function YD(e){var s;if(hn(e.app))return Promise.reject(qi(e));const t=Mc(e);if(await t._initializationPromise,(s=t.currentUser)!=null&&s.isAnonymous)return new Ji({user:t.currentUser,providerId:null,operationType:"signIn"});const n=await QD(t,{returnSecureToken:!0}),i=await Ji._fromIdTokenResponse(t,"signIn",n,!0);return await t._updateCurrentUser(i.user),i}/**
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
 */class Yu extends yn{constructor(t,n,i,s){super(n.code,n.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,Yu.prototype),this.customData={appName:t.name,tenantId:t.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(t,n,i,s){return new Yu(t,n,i,s)}}function fS(e,t,n,i){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Yu._fromErrorAndOperation(e,r,t,i):r})}async function XD(e,t,n=!1){const i=await No(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Ji._forOperation(e,"link",i)}/**
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
 */async function $D(e,t,n=!1){const{auth:i}=e;if(hn(i.app))return Promise.reject(qi(i));const s="reauthenticate";try{const r=await No(e,fS(i,s,t,e),n);X(r.idToken,i,"internal-error");const a=ig(r.idToken);X(a,i,"internal-error");const{sub:l}=a;return X(e.uid===l,i,"user-mismatch"),Ji._forOperation(e,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&ni(i,"user-mismatch"),r}}/**
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
 */async function JD(e,t,n=!1){if(hn(e.app))return Promise.reject(qi(e));const i="signIn",s=await fS(e,i,t),r=await Ji._fromIdTokenResponse(e,i,s);return n||await e._updateCurrentUser(r.user),r}function ZD(e,t,n,i){return zt(e).onIdTokenChanged(t,n,i)}function WD(e,t,n){return zt(e).beforeAuthStateChanged(t,n)}function tx(e,t,n,i){return zt(e).onAuthStateChanged(t,n,i)}const Xu="__sak";/**
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
 */class dS{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Xu,"1"),this.storage.removeItem(Xu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const ex=1e3,nx=10;class mS extends dS{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=oS(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),s=this.localCache[n];i!==s&&t(n,s,i)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((a,l,u)=>{this.notifyListeners(a,u)});return}const i=t.key;n?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(i);!n&&this.localCache[i]===a||this.notifyListeners(i,a)},r=this.storage.getItem(i);xD()&&r!==t.newValue&&t.newValue!==t.oldValue?setTimeout(s,nx):s()}notifyListeners(t,n){this.localCache[t]=n;const i=this.listeners[t];if(i)for(const s of Array.from(i))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:i}),!0)})},ex)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}mS.type="LOCAL";const ix=mS;/**
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
 */class gS extends dS{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}gS.type="SESSION";const pS=gS;/**
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
 */function sx(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Vc{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(s=>s.isListeningto(t));if(n)return n;const i=new Vc(t);return this.receivers.push(i),i}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:i,eventType:s,data:r}=n.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const l=Array.from(a).map(async h=>h(n.origin,r)),u=await sx(l);n.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:u})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Vc.receivers=[];/**
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
 */function ag(e="",t=10){let n="";for(let i=0;i<t;i++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class rx{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,a;return new Promise((l,u)=>{const h=ag("",20);s.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},i);a={messageChannel:s,onMessage(m){const g=m;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(d),r=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),l(g.data.response);break;default:clearTimeout(d),clearTimeout(r),u(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:t,eventId:h,data:n},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function In(){return window}function ax(e){In().location.href=e}/**
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
 */function yS(){return typeof In().WorkerGlobalScope<"u"&&typeof In().importScripts=="function"}async function ox(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function lx(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)==null?void 0:e.controller)||null}function ux(){return yS()?self:null}/**
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
 */const _S="firebaseLocalStorageDb",cx=1,$u="firebaseLocalStorage",vS="fbase_key";class Zo{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function kc(e,t){return e.transaction([$u],t?"readwrite":"readonly").objectStore($u)}function hx(){const e=indexedDB.deleteDatabase(_S);return new Zo(e).toPromise()}function Cd(){const e=indexedDB.open(_S,cx);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const i=e.result;try{i.createObjectStore($u,{keyPath:vS})}catch(s){n(s)}}),e.addEventListener("success",async()=>{const i=e.result;i.objectStoreNames.contains($u)?t(i):(i.close(),await hx(),t(await Cd()))})})}async function F_(e,t,n){const i=kc(e,!0).put({[vS]:t,value:n});return new Zo(i).toPromise()}async function fx(e,t){const n=kc(e,!1).get(t),i=await new Zo(n).toPromise();return i===void 0?null:i.value}function G_(e,t){const n=kc(e,!0).delete(t);return new Zo(n).toPromise()}const dx=800,mx=3;class ES{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Cd(),this.db)}async _withRetries(t){let n=0;for(;;)try{const i=await this._openDb();return await t(i)}catch(i){if(n++>mx)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return yS()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Vc._getInstance(ux()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var n,i;if(this.activeServiceWorker=await ox(),!this.activeServiceWorker)return;this.sender=new rx(this.activeServiceWorker);const t=await this.sender._send("ping",{},800);t&&(n=t[0])!=null&&n.fulfilled&&(i=t[0])!=null&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||lx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Cd();return await F_(t,Xu,"1"),await G_(t,Xu),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>F_(i,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(i=>fx(i,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>G_(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(s=>{const r=kc(s,!1).getAll();return new Zo(r).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;if(t.length!==0)for(const{fbase_key:s,value:r}of t)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(t,n){this.localCache[t]=n;const i=this.listeners[t];if(i)for(const s of Array.from(i))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),dx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ES.type="LOCAL";const gx=ES;new $o(3e4,6e4);/**
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
 */function px(e,t){return t?Kn(t):(X(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class og extends cS{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Nr(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Nr(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Nr(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function yx(e){return JD(e.auth,new og(e),e.bypassAuthState)}function _x(e){const{auth:t,user:n}=e;return X(n,t,"internal-error"),$D(n,new og(e),e.bypassAuthState)}async function vx(e){const{auth:t,user:n}=e;return X(n,t,"internal-error"),XD(n,new og(e),e.bypassAuthState)}/**
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
 */class TS{constructor(t,n,i,s,r=!1){this.auth=t,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:i,postBody:s,tenantId:r,error:a,type:l}=t;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:n,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return yx;case"linkViaPopup":case"linkViaRedirect":return vx;case"reauthViaPopup":case"reauthViaRedirect":return _x;default:ni(this.auth,"internal-error")}}resolve(t){ii(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){ii(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Ex=new $o(2e3,1e4);class _r extends TS{constructor(t,n,i,s,r){super(t,n,s,r),this.provider=i,this.authWindow=null,this.pollId=null,_r.currentPopupAction&&_r.currentPopupAction.cancel(),_r.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return X(t,this.auth,"internal-error"),t}async onExecution(){ii(this.filter.length===1,"Popup operations only handle one event");const t=ag();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Rn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)==null?void 0:t.associatedEvent)||null}cancel(){this.reject(Rn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,_r.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,i;if((i=(n=this.authWindow)==null?void 0:n.window)!=null&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Rn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,Ex.get())};t()}}_r.currentPopupAction=null;/**
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
 */const Tx="pendingRedirect",su=new Map;class Ax extends TS{constructor(t,n,i=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let t=su.get(this.auth._key());if(!t){try{const i=await Sx(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(i)}catch(n){t=()=>Promise.reject(n)}su.set(this.auth._key(),t)}return this.bypassAuthState||su.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Sx(e,t){const n=Rx(t),i=wx(e);if(!await i._isAvailable())return!1;const s=await i._get(n)==="true";return await i._remove(n),s}function bx(e,t){su.set(e._key(),t)}function wx(e){return Kn(e._redirectPersistence)}function Rx(e){return iu(Tx,e.config.apiKey,e.name)}async function Ix(e,t,n=!1){if(hn(e.app))return Promise.reject(qi(e));const i=Mc(e),s=px(i,t),a=await new Ax(i,s,n).execute();return a&&!n&&(delete a.user._redirectEventId,await i._persistUserIfCurrent(a.user),await i._setRedirectUser(null,t)),a}/**
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
 */const Cx=10*60*1e3;class Nx{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(t,i)&&(n=!0,this.sendToConsumer(t,i),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!Dx(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var i;if(t.error&&!AS(t)){const s=((i=t.error.code)==null?void 0:i.split("auth/")[1])||"internal-error";n.onError(Rn(this.auth,s))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const i=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&i}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Cx&&this.cachedEventUids.clear(),this.cachedEventUids.has(K_(t))}saveEventToCache(t){this.cachedEventUids.add(K_(t)),this.lastProcessedEventTime=Date.now()}}function K_(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function AS({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function Dx(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return AS(e);default:return!1}}/**
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
 */async function xx(e,t={}){return aa(e,"GET","/v1/projects",t)}/**
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
 */const Ox=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Mx=/^https?/;async function Vx(e){if(e.config.emulator)return;const{authorizedDomains:t}=await xx(e);for(const n of t)try{if(kx(n))return}catch{}ni(e,"unauthorized-domain")}function kx(e){const t=Rd(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const a=new URL(e);return a.hostname===""&&i===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===i}if(!Mx.test(n))return!1;if(Ox.test(e))return i===e;const s=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const Lx=new $o(3e4,6e4);function Q_(){const e=In().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function Ux(e){return new Promise((t,n)=>{var s,r,a;function i(){Q_(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Q_(),n(Rn(e,"network-request-failed"))},timeout:Lx.get()})}if((r=(s=In().gapi)==null?void 0:s.iframes)!=null&&r.Iframe)t(gapi.iframes.getContext());else if((a=In().gapi)!=null&&a.load)i();else{const l=jD("iframefcb");return In()[l]=()=>{gapi.load?i():n(Rn(e,"network-request-failed"))},PD(`${zD()}?onload=${l}`).catch(u=>n(u))}}).catch(t=>{throw ru=null,t})}let ru=null;function Px(e){return ru=ru||Ux(e),ru}/**
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
 */const zx=new $o(5e3,15e3),jx="__/auth/iframe",Bx="emulator/auth/iframe",qx={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Hx=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Fx(e){const t=e.config;X(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?ng(t,Bx):`https://${e.config.authDomain}/${jx}`,i={apiKey:t.apiKey,appName:e.name,v:ra},s=Hx.get(e.config.apiHost);s&&(i.eid=s);const r=e._getFrameworks();return r.length&&(i.fw=r.join(",")),`${n}?${Yo(i).slice(1)}`}async function Gx(e){const t=await Px(e),n=In().gapi;return X(n,e,"internal-error"),t.open({where:document.body,url:Fx(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:qx,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const a=Rn(e,"network-request-failed"),l=In().setTimeout(()=>{r(a)},zx.get());function u(){In().clearTimeout(l),s(i)}i.ping(u).then(u,()=>{r(a)})}))}/**
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
 */const Kx={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Qx=500,Yx=600,Xx="_blank",$x="http://localhost";class Y_{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Jx(e,t,n,i=Qx,s=Yx){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let l="";const u={...Kx,width:i.toString(),height:s.toString(),top:r,left:a},h=pe().toLowerCase();n&&(l=nS(h)?Xx:n),tS(h)&&(t=t||$x,u.scrollbars="yes");const d=Object.entries(u).reduce((g,[E,D])=>`${g}${E}=${D},`,"");if(DD(h)&&l!=="_self")return Zx(t||"",l),new Y_(null);const m=window.open(t||"",l,d);X(m,e,"popup-blocked");try{m.focus()}catch{}return new Y_(m)}function Zx(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const Wx="__/auth/handler",tO="emulator/auth/handler",eO=encodeURIComponent("fac");async function X_(e,t,n,i,s,r){X(e.config.authDomain,e,"auth-domain-config-required"),X(e.config.apiKey,e,"invalid-api-key");const a={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:ra,eventId:s};if(t instanceof hS){t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||"",NC(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[d,m]of Object.entries({}))a[d]=m}if(t instanceof Jo){const d=t.getScopes().filter(m=>m!=="");d.length>0&&(a.scopes=d.join(","))}e.tenantId&&(a.tid=e.tenantId);const l=a;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const u=await e._getAppCheckToken(),h=u?`#${eO}=${encodeURIComponent(u)}`:"";return`${nO(e)}?${Yo(l).slice(1)}${h}`}function nO({config:e}){return e.emulator?ng(e,tO):`https://${e.authDomain}/${Wx}`}/**
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
 */const mf="webStorageSupport";class iO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=pS,this._completeRedirectFn=Ix,this._overrideRedirectResult=bx}async _openPopup(t,n,i,s){var a;ii((a=this.eventManagers[t._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const r=await X_(t,n,i,Rd(),s);return Jx(t,r,ag())}async _openRedirect(t,n,i,s){await this._originValidation(t);const r=await X_(t,n,i,Rd(),s);return ax(r),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:s,promise:r}=this.eventManagers[n];return s?Promise.resolve(s):(ii(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(t);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(t){const n=await Gx(t),i=new Nx(t);return n.register("authEvent",s=>(X(s==null?void 0:s.authEvent,t,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:i},this.iframes[t._key()]=n,i}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(mf,{type:mf},s=>{var a;const r=(a=s==null?void 0:s[0])==null?void 0:a[mf];r!==void 0&&n(!!r),ni(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Vx(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return oS()||eS()||sg()}}const sO=iO;var $_="@firebase/auth",J_="1.13.0";/**
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
 */class rO{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)==null?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(i=>{t((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function aO(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function oO(e){xn(new mn("auth",(t,{options:n})=>{const i=t.getProvider("app").getImmediate(),s=t.getProvider("heartbeat"),r=t.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=i.options;X(a&&!a.includes(":"),"invalid-api-key",{appName:i.name});const u={apiKey:a,authDomain:l,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:lS(e)},h=new LD(i,s,r,u);return qD(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,i)=>{t.getProvider("auth-internal").initialize()})),xn(new mn("auth-internal",t=>{const n=Mc(t.getProvider("auth").getImmediate());return(i=>new rO(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),on($_,J_,aO(e)),on($_,J_,"esm2020")}/**
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
 */const lO=5*60,uO=dA("authIdTokenMaxAge")||lO;let Z_=null;const cO=e=>async t=>{const n=t&&await t.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>uO)return;const s=n==null?void 0:n.token;Z_!==s&&(Z_=s,await fetch(e,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function hO(e=Ym()){const t=Gs(e,"auth");if(t.isInitialized())return t.getImmediate();const n=BD(e,{popupRedirectResolver:sO,persistence:[gx,ix,pS]}),i=dA("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(i,location.origin);if(location.origin===r.origin){const a=cO(r.toString());WD(n,a,()=>a(n.currentUser)),ZD(n,l=>a(l))}}const s=hA("auth");return s&&HD(n,`http://${s}`),n}function fO(){var e;return((e=document.getElementsByTagName("head"))==null?void 0:e[0])??document}UD({loadJS(e){return new Promise((t,n)=>{const i=document.createElement("script");i.setAttribute("src",e),i.onload=t,i.onerror=s=>{const r=Rn("internal-error");r.customData=s,n(r)},i.type="text/javascript",i.charset="UTF-8",fO().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});oO("Browser");var W_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Hi,SS;(function(){var e;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(_,y){function v(){}v.prototype=y.prototype,_.F=y.prototype,_.prototype=new v,_.prototype.constructor=_,_.D=function(w,R,S){for(var T=Array(arguments.length-2),J=2;J<arguments.length;J++)T[J-2]=arguments[J];return y.prototype[R].apply(w,T)}}function n(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(i,n),i.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(_,y,v){v||(v=0);const w=Array(16);if(typeof y=="string")for(var R=0;R<16;++R)w[R]=y.charCodeAt(v++)|y.charCodeAt(v++)<<8|y.charCodeAt(v++)<<16|y.charCodeAt(v++)<<24;else for(R=0;R<16;++R)w[R]=y[v++]|y[v++]<<8|y[v++]<<16|y[v++]<<24;y=_.g[0],v=_.g[1],R=_.g[2];let S=_.g[3],T;T=y+(S^v&(R^S))+w[0]+3614090360&4294967295,y=v+(T<<7&4294967295|T>>>25),T=S+(R^y&(v^R))+w[1]+3905402710&4294967295,S=y+(T<<12&4294967295|T>>>20),T=R+(v^S&(y^v))+w[2]+606105819&4294967295,R=S+(T<<17&4294967295|T>>>15),T=v+(y^R&(S^y))+w[3]+3250441966&4294967295,v=R+(T<<22&4294967295|T>>>10),T=y+(S^v&(R^S))+w[4]+4118548399&4294967295,y=v+(T<<7&4294967295|T>>>25),T=S+(R^y&(v^R))+w[5]+1200080426&4294967295,S=y+(T<<12&4294967295|T>>>20),T=R+(v^S&(y^v))+w[6]+2821735955&4294967295,R=S+(T<<17&4294967295|T>>>15),T=v+(y^R&(S^y))+w[7]+4249261313&4294967295,v=R+(T<<22&4294967295|T>>>10),T=y+(S^v&(R^S))+w[8]+1770035416&4294967295,y=v+(T<<7&4294967295|T>>>25),T=S+(R^y&(v^R))+w[9]+2336552879&4294967295,S=y+(T<<12&4294967295|T>>>20),T=R+(v^S&(y^v))+w[10]+4294925233&4294967295,R=S+(T<<17&4294967295|T>>>15),T=v+(y^R&(S^y))+w[11]+2304563134&4294967295,v=R+(T<<22&4294967295|T>>>10),T=y+(S^v&(R^S))+w[12]+1804603682&4294967295,y=v+(T<<7&4294967295|T>>>25),T=S+(R^y&(v^R))+w[13]+4254626195&4294967295,S=y+(T<<12&4294967295|T>>>20),T=R+(v^S&(y^v))+w[14]+2792965006&4294967295,R=S+(T<<17&4294967295|T>>>15),T=v+(y^R&(S^y))+w[15]+1236535329&4294967295,v=R+(T<<22&4294967295|T>>>10),T=y+(R^S&(v^R))+w[1]+4129170786&4294967295,y=v+(T<<5&4294967295|T>>>27),T=S+(v^R&(y^v))+w[6]+3225465664&4294967295,S=y+(T<<9&4294967295|T>>>23),T=R+(y^v&(S^y))+w[11]+643717713&4294967295,R=S+(T<<14&4294967295|T>>>18),T=v+(S^y&(R^S))+w[0]+3921069994&4294967295,v=R+(T<<20&4294967295|T>>>12),T=y+(R^S&(v^R))+w[5]+3593408605&4294967295,y=v+(T<<5&4294967295|T>>>27),T=S+(v^R&(y^v))+w[10]+38016083&4294967295,S=y+(T<<9&4294967295|T>>>23),T=R+(y^v&(S^y))+w[15]+3634488961&4294967295,R=S+(T<<14&4294967295|T>>>18),T=v+(S^y&(R^S))+w[4]+3889429448&4294967295,v=R+(T<<20&4294967295|T>>>12),T=y+(R^S&(v^R))+w[9]+568446438&4294967295,y=v+(T<<5&4294967295|T>>>27),T=S+(v^R&(y^v))+w[14]+3275163606&4294967295,S=y+(T<<9&4294967295|T>>>23),T=R+(y^v&(S^y))+w[3]+4107603335&4294967295,R=S+(T<<14&4294967295|T>>>18),T=v+(S^y&(R^S))+w[8]+1163531501&4294967295,v=R+(T<<20&4294967295|T>>>12),T=y+(R^S&(v^R))+w[13]+2850285829&4294967295,y=v+(T<<5&4294967295|T>>>27),T=S+(v^R&(y^v))+w[2]+4243563512&4294967295,S=y+(T<<9&4294967295|T>>>23),T=R+(y^v&(S^y))+w[7]+1735328473&4294967295,R=S+(T<<14&4294967295|T>>>18),T=v+(S^y&(R^S))+w[12]+2368359562&4294967295,v=R+(T<<20&4294967295|T>>>12),T=y+(v^R^S)+w[5]+4294588738&4294967295,y=v+(T<<4&4294967295|T>>>28),T=S+(y^v^R)+w[8]+2272392833&4294967295,S=y+(T<<11&4294967295|T>>>21),T=R+(S^y^v)+w[11]+1839030562&4294967295,R=S+(T<<16&4294967295|T>>>16),T=v+(R^S^y)+w[14]+4259657740&4294967295,v=R+(T<<23&4294967295|T>>>9),T=y+(v^R^S)+w[1]+2763975236&4294967295,y=v+(T<<4&4294967295|T>>>28),T=S+(y^v^R)+w[4]+1272893353&4294967295,S=y+(T<<11&4294967295|T>>>21),T=R+(S^y^v)+w[7]+4139469664&4294967295,R=S+(T<<16&4294967295|T>>>16),T=v+(R^S^y)+w[10]+3200236656&4294967295,v=R+(T<<23&4294967295|T>>>9),T=y+(v^R^S)+w[13]+681279174&4294967295,y=v+(T<<4&4294967295|T>>>28),T=S+(y^v^R)+w[0]+3936430074&4294967295,S=y+(T<<11&4294967295|T>>>21),T=R+(S^y^v)+w[3]+3572445317&4294967295,R=S+(T<<16&4294967295|T>>>16),T=v+(R^S^y)+w[6]+76029189&4294967295,v=R+(T<<23&4294967295|T>>>9),T=y+(v^R^S)+w[9]+3654602809&4294967295,y=v+(T<<4&4294967295|T>>>28),T=S+(y^v^R)+w[12]+3873151461&4294967295,S=y+(T<<11&4294967295|T>>>21),T=R+(S^y^v)+w[15]+530742520&4294967295,R=S+(T<<16&4294967295|T>>>16),T=v+(R^S^y)+w[2]+3299628645&4294967295,v=R+(T<<23&4294967295|T>>>9),T=y+(R^(v|~S))+w[0]+4096336452&4294967295,y=v+(T<<6&4294967295|T>>>26),T=S+(v^(y|~R))+w[7]+1126891415&4294967295,S=y+(T<<10&4294967295|T>>>22),T=R+(y^(S|~v))+w[14]+2878612391&4294967295,R=S+(T<<15&4294967295|T>>>17),T=v+(S^(R|~y))+w[5]+4237533241&4294967295,v=R+(T<<21&4294967295|T>>>11),T=y+(R^(v|~S))+w[12]+1700485571&4294967295,y=v+(T<<6&4294967295|T>>>26),T=S+(v^(y|~R))+w[3]+2399980690&4294967295,S=y+(T<<10&4294967295|T>>>22),T=R+(y^(S|~v))+w[10]+4293915773&4294967295,R=S+(T<<15&4294967295|T>>>17),T=v+(S^(R|~y))+w[1]+2240044497&4294967295,v=R+(T<<21&4294967295|T>>>11),T=y+(R^(v|~S))+w[8]+1873313359&4294967295,y=v+(T<<6&4294967295|T>>>26),T=S+(v^(y|~R))+w[15]+4264355552&4294967295,S=y+(T<<10&4294967295|T>>>22),T=R+(y^(S|~v))+w[6]+2734768916&4294967295,R=S+(T<<15&4294967295|T>>>17),T=v+(S^(R|~y))+w[13]+1309151649&4294967295,v=R+(T<<21&4294967295|T>>>11),T=y+(R^(v|~S))+w[4]+4149444226&4294967295,y=v+(T<<6&4294967295|T>>>26),T=S+(v^(y|~R))+w[11]+3174756917&4294967295,S=y+(T<<10&4294967295|T>>>22),T=R+(y^(S|~v))+w[2]+718787259&4294967295,R=S+(T<<15&4294967295|T>>>17),T=v+(S^(R|~y))+w[9]+3951481745&4294967295,_.g[0]=_.g[0]+y&4294967295,_.g[1]=_.g[1]+(R+(T<<21&4294967295|T>>>11))&4294967295,_.g[2]=_.g[2]+R&4294967295,_.g[3]=_.g[3]+S&4294967295}i.prototype.v=function(_,y){y===void 0&&(y=_.length);const v=y-this.blockSize,w=this.C;let R=this.h,S=0;for(;S<y;){if(R==0)for(;S<=v;)s(this,_,S),S+=this.blockSize;if(typeof _=="string"){for(;S<y;)if(w[R++]=_.charCodeAt(S++),R==this.blockSize){s(this,w),R=0;break}}else for(;S<y;)if(w[R++]=_[S++],R==this.blockSize){s(this,w),R=0;break}}this.h=R,this.o+=y},i.prototype.A=function(){var _=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);_[0]=128;for(var y=1;y<_.length-8;++y)_[y]=0;y=this.o*8;for(var v=_.length-8;v<_.length;++v)_[v]=y&255,y/=256;for(this.v(_),_=Array(16),y=0,v=0;v<4;++v)for(let w=0;w<32;w+=8)_[y++]=this.g[v]>>>w&255;return _};function r(_,y){var v=l;return Object.prototype.hasOwnProperty.call(v,_)?v[_]:v[_]=y(_)}function a(_,y){this.h=y;const v=[];let w=!0;for(let R=_.length-1;R>=0;R--){const S=_[R]|0;w&&S==y||(v[R]=S,w=!1)}this.g=v}var l={};function u(_){return-128<=_&&_<128?r(_,function(y){return new a([y|0],y<0?-1:0)}):new a([_|0],_<0?-1:0)}function h(_){if(isNaN(_)||!isFinite(_))return m;if(_<0)return U(h(-_));const y=[];let v=1;for(let w=0;_>=v;w++)y[w]=_/v|0,v*=4294967296;return new a(y,0)}function d(_,y){if(_.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(_.charAt(0)=="-")return U(d(_.substring(1),y));if(_.indexOf("-")>=0)throw Error('number format error: interior "-" character');const v=h(Math.pow(y,8));let w=m;for(let S=0;S<_.length;S+=8){var R=Math.min(8,_.length-S);const T=parseInt(_.substring(S,S+R),y);R<8?(R=h(Math.pow(y,R)),w=w.j(R).add(h(T))):(w=w.j(v),w=w.add(h(T)))}return w}var m=u(0),g=u(1),E=u(16777216);e=a.prototype,e.m=function(){if(M(this))return-U(this).m();let _=0,y=1;for(let v=0;v<this.g.length;v++){const w=this.i(v);_+=(w>=0?w:4294967296+w)*y,y*=4294967296}return _},e.toString=function(_){if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(D(this))return"0";if(M(this))return"-"+U(this).toString(_);const y=h(Math.pow(_,6));var v=this;let w="";for(;;){const R=x(v,y).g;v=b(v,R.j(y));let S=((v.g.length>0?v.g[0]:v.h)>>>0).toString(_);if(v=R,D(v))return S+w;for(;S.length<6;)S="0"+S;w=S+w}},e.i=function(_){return _<0?0:_<this.g.length?this.g[_]:this.h};function D(_){if(_.h!=0)return!1;for(let y=0;y<_.g.length;y++)if(_.g[y]!=0)return!1;return!0}function M(_){return _.h==-1}e.l=function(_){return _=b(this,_),M(_)?-1:D(_)?0:1};function U(_){const y=_.g.length,v=[];for(let w=0;w<y;w++)v[w]=~_.g[w];return new a(v,~_.h).add(g)}e.abs=function(){return M(this)?U(this):this},e.add=function(_){const y=Math.max(this.g.length,_.g.length),v=[];let w=0;for(let R=0;R<=y;R++){let S=w+(this.i(R)&65535)+(_.i(R)&65535),T=(S>>>16)+(this.i(R)>>>16)+(_.i(R)>>>16);w=T>>>16,S&=65535,T&=65535,v[R]=T<<16|S}return new a(v,v[v.length-1]&-2147483648?-1:0)};function b(_,y){return _.add(U(y))}e.j=function(_){if(D(this)||D(_))return m;if(M(this))return M(_)?U(this).j(U(_)):U(U(this).j(_));if(M(_))return U(this.j(U(_)));if(this.l(E)<0&&_.l(E)<0)return h(this.m()*_.m());const y=this.g.length+_.g.length,v=[];for(var w=0;w<2*y;w++)v[w]=0;for(w=0;w<this.g.length;w++)for(let R=0;R<_.g.length;R++){const S=this.i(w)>>>16,T=this.i(w)&65535,J=_.i(R)>>>16,ft=_.i(R)&65535;v[2*w+2*R]+=T*ft,A(v,2*w+2*R),v[2*w+2*R+1]+=S*ft,A(v,2*w+2*R+1),v[2*w+2*R+1]+=T*J,A(v,2*w+2*R+1),v[2*w+2*R+2]+=S*J,A(v,2*w+2*R+2)}for(_=0;_<y;_++)v[_]=v[2*_+1]<<16|v[2*_];for(_=y;_<2*y;_++)v[_]=0;return new a(v,0)};function A(_,y){for(;(_[y]&65535)!=_[y];)_[y+1]+=_[y]>>>16,_[y]&=65535,y++}function C(_,y){this.g=_,this.h=y}function x(_,y){if(D(y))throw Error("division by zero");if(D(_))return new C(m,m);if(M(_))return y=x(U(_),y),new C(U(y.g),U(y.h));if(M(y))return y=x(_,U(y)),new C(U(y.g),y.h);if(_.g.length>30){if(M(_)||M(y))throw Error("slowDivide_ only works with positive integers.");for(var v=g,w=y;w.l(_)<=0;)v=z(v),w=z(w);var R=P(v,1),S=P(w,1);for(w=P(w,2),v=P(v,2);!D(w);){var T=S.add(w);T.l(_)<=0&&(R=R.add(v),S=T),w=P(w,1),v=P(v,1)}return y=b(_,R.j(y)),new C(R,y)}for(R=m;_.l(y)>=0;){for(v=Math.max(1,Math.floor(_.m()/y.m())),w=Math.ceil(Math.log(v)/Math.LN2),w=w<=48?1:Math.pow(2,w-48),S=h(v),T=S.j(y);M(T)||T.l(_)>0;)v-=w,S=h(v),T=S.j(y);D(S)&&(S=g),R=R.add(S),_=b(_,T)}return new C(R,_)}e.B=function(_){return x(this,_).h},e.and=function(_){const y=Math.max(this.g.length,_.g.length),v=[];for(let w=0;w<y;w++)v[w]=this.i(w)&_.i(w);return new a(v,this.h&_.h)},e.or=function(_){const y=Math.max(this.g.length,_.g.length),v=[];for(let w=0;w<y;w++)v[w]=this.i(w)|_.i(w);return new a(v,this.h|_.h)},e.xor=function(_){const y=Math.max(this.g.length,_.g.length),v=[];for(let w=0;w<y;w++)v[w]=this.i(w)^_.i(w);return new a(v,this.h^_.h)};function z(_){const y=_.g.length+1,v=[];for(let w=0;w<y;w++)v[w]=_.i(w)<<1|_.i(w-1)>>>31;return new a(v,_.h)}function P(_,y){const v=y>>5;y%=32;const w=_.g.length-v,R=[];for(let S=0;S<w;S++)R[S]=y>0?_.i(S+v)>>>y|_.i(S+v+1)<<32-y:_.i(S+v);return new a(R,_.h)}i.prototype.digest=i.prototype.A,i.prototype.reset=i.prototype.u,i.prototype.update=i.prototype.v,SS=i,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=d,Hi=a}).apply(typeof W_<"u"?W_:typeof self<"u"?self:typeof window<"u"?window:{});var kl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var bS,Ha,wS,au,Nd,RS,IS,CS;(function(){var e,t=Object.defineProperty;function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof kl=="object"&&kl];for(var c=0;c<o.length;++c){var f=o[c];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var i=n(this);function s(o,c){if(c)t:{var f=i;o=o.split(".");for(var p=0;p<o.length-1;p++){var N=o[p];if(!(N in f))break t;f=f[N]}o=o[o.length-1],p=f[o],c=c(p),c!=p&&c!=null&&t(f,o,{configurable:!0,writable:!0,value:c})}}s("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(o){return o||function(c){var f=[],p;for(p in c)Object.prototype.hasOwnProperty.call(c,p)&&f.push([p,c[p]]);return f}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var r=r||{},a=this||self;function l(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function u(o,c,f){return o.call.apply(o.bind,arguments)}function h(o,c,f){return h=u,h.apply(null,arguments)}function d(o,c){var f=Array.prototype.slice.call(arguments,1);return function(){var p=f.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function m(o,c){function f(){}f.prototype=c.prototype,o.Z=c.prototype,o.prototype=new f,o.prototype.constructor=o,o.Ob=function(p,N,O){for(var B=Array(arguments.length-2),nt=2;nt<arguments.length;nt++)B[nt-2]=arguments[nt];return c.prototype[N].apply(p,B)}}var g=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function E(o){const c=o.length;if(c>0){const f=Array(c);for(let p=0;p<c;p++)f[p]=o[p];return f}return[]}function D(o,c){for(let p=1;p<arguments.length;p++){const N=arguments[p];var f=typeof N;if(f=f!="object"?f:N?Array.isArray(N)?"array":f:"null",f=="array"||f=="object"&&typeof N.length=="number"){f=o.length||0;const O=N.length||0;o.length=f+O;for(let B=0;B<O;B++)o[f+B]=N[B]}else o.push(N)}}class M{constructor(c,f){this.i=c,this.j=f,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function U(o){a.setTimeout(()=>{throw o},0)}function b(){var o=_;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class A{constructor(){this.h=this.g=null}add(c,f){const p=C.get();p.set(c,f),this.h?this.h.next=p:this.g=p,this.h=p}}var C=new M(()=>new x,o=>o.reset());class x{constructor(){this.next=this.g=this.h=null}set(c,f){this.h=c,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let z,P=!1,_=new A,y=()=>{const o=Promise.resolve(void 0);z=()=>{o.then(v)}};function v(){for(var o;o=b();){try{o.h.call(o.g)}catch(f){U(f)}var c=C;c.j(o),c.h<100&&(c.h++,o.next=c.g,c.g=o)}P=!1}function w(){this.u=this.u,this.C=this.C}w.prototype.u=!1,w.prototype.dispose=function(){this.u||(this.u=!0,this.N())},w.prototype[Symbol.dispose]=function(){this.dispose()},w.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function R(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}R.prototype.h=function(){this.defaultPrevented=!0};var S=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const f=()=>{};a.addEventListener("test",f,c),a.removeEventListener("test",f,c)}catch{}return o}();function T(o){return/^[\s\xa0]*$/.test(o)}function J(o,c){R.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,c)}m(J,R),J.prototype.init=function(o,c){const f=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget,c||(f=="mouseover"?c=o.fromElement:f=="mouseout"&&(c=o.toElement)),this.relatedTarget=c,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&J.Z.h.call(this)},J.prototype.h=function(){J.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var ft="closure_listenable_"+(Math.random()*1e6|0),j=0;function G(o,c,f,p,N){this.listener=o,this.proxy=null,this.src=c,this.type=f,this.capture=!!p,this.ha=N,this.key=++j,this.da=this.fa=!1}function K(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function tt(o,c,f){for(const p in o)c.call(f,o[p],p,o)}function Ot(o,c){for(const f in o)c.call(void 0,o[f],f,o)}function Ye(o){const c={};for(const f in o)c[f]=o[f];return c}const Xe="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function he(o,c){let f,p;for(let N=1;N<arguments.length;N++){p=arguments[N];for(f in p)o[f]=p[f];for(let O=0;O<Xe.length;O++)f=Xe[O],Object.prototype.hasOwnProperty.call(p,f)&&(o[f]=p[f])}}function be(o){this.src=o,this.g={},this.h=0}be.prototype.add=function(o,c,f,p,N){const O=o.toString();o=this.g[O],o||(o=this.g[O]=[],this.h++);const B=fa(o,c,p,N);return B>-1?(c=o[B],f||(c.fa=!1)):(c=new G(c,this.src,O,!!p,N),c.fa=f,o.push(c)),c};function _n(o,c){const f=c.type;if(f in o.g){var p=o.g[f],N=Array.prototype.indexOf.call(p,c,void 0),O;(O=N>=0)&&Array.prototype.splice.call(p,N,1),O&&(K(c),o.g[f].length==0&&(delete o.g[f],o.h--))}}function fa(o,c,f,p){for(let N=0;N<o.length;++N){const O=o[N];if(!O.da&&O.listener==c&&O.capture==!!f&&O.ha==p)return N}return-1}var Zc="closure_lm_"+(Math.random()*1e6|0),Wc={};function Hg(o,c,f,p,N){if(Array.isArray(c)){for(let O=0;O<c.length;O++)Hg(o,c[O],f,p,N);return null}return f=Kg(f),o&&o[ft]?o.J(c,f,l(p)?!!p.capture:!1,N):nw(o,c,f,!1,p,N)}function nw(o,c,f,p,N,O){if(!c)throw Error("Invalid event type");const B=l(N)?!!N.capture:!!N;let nt=eh(o);if(nt||(o[Zc]=nt=new be(o)),f=nt.add(c,f,p,B,O),f.proxy)return f;if(p=iw(),f.proxy=p,p.src=o,p.listener=f,o.addEventListener)S||(N=B),N===void 0&&(N=!1),o.addEventListener(c.toString(),p,N);else if(o.attachEvent)o.attachEvent(Gg(c.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return f}function iw(){function o(f){return c.call(o.src,o.listener,f)}const c=sw;return o}function Fg(o,c,f,p,N){if(Array.isArray(c))for(var O=0;O<c.length;O++)Fg(o,c[O],f,p,N);else p=l(p)?!!p.capture:!!p,f=Kg(f),o&&o[ft]?(o=o.i,O=String(c).toString(),O in o.g&&(c=o.g[O],f=fa(c,f,p,N),f>-1&&(K(c[f]),Array.prototype.splice.call(c,f,1),c.length==0&&(delete o.g[O],o.h--)))):o&&(o=eh(o))&&(c=o.g[c.toString()],o=-1,c&&(o=fa(c,f,p,N)),(f=o>-1?c[o]:null)&&th(f))}function th(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[ft])_n(c.i,o);else{var f=o.type,p=o.proxy;c.removeEventListener?c.removeEventListener(f,p,o.capture):c.detachEvent?c.detachEvent(Gg(f),p):c.addListener&&c.removeListener&&c.removeListener(p),(f=eh(c))?(_n(f,o),f.h==0&&(f.src=null,c[Zc]=null)):K(o)}}}function Gg(o){return o in Wc?Wc[o]:Wc[o]="on"+o}function sw(o,c){if(o.da)o=!0;else{c=new J(c,this);const f=o.listener,p=o.ha||o.src;o.fa&&th(o),o=f.call(p,c)}return o}function eh(o){return o=o[Zc],o instanceof be?o:null}var nh="__closure_events_fn_"+(Math.random()*1e9>>>0);function Kg(o){return typeof o=="function"?o:(o[nh]||(o[nh]=function(c){return o.handleEvent(c)}),o[nh])}function fe(){w.call(this),this.i=new be(this),this.M=this,this.G=null}m(fe,w),fe.prototype[ft]=!0,fe.prototype.removeEventListener=function(o,c,f,p){Fg(this,o,c,f,p)};function ye(o,c){var f,p=o.G;if(p)for(f=[];p;p=p.G)f.push(p);if(o=o.M,p=c.type||c,typeof c=="string")c=new R(c,o);else if(c instanceof R)c.target=c.target||o;else{var N=c;c=new R(p,o),he(c,N)}N=!0;let O,B;if(f)for(B=f.length-1;B>=0;B--)O=c.g=f[B],N=al(O,p,!0,c)&&N;if(O=c.g=o,N=al(O,p,!0,c)&&N,N=al(O,p,!1,c)&&N,f)for(B=0;B<f.length;B++)O=c.g=f[B],N=al(O,p,!1,c)&&N}fe.prototype.N=function(){if(fe.Z.N.call(this),this.i){var o=this.i;for(const c in o.g){const f=o.g[c];for(let p=0;p<f.length;p++)K(f[p]);delete o.g[c],o.h--}}this.G=null},fe.prototype.J=function(o,c,f,p){return this.i.add(String(o),c,!1,f,p)},fe.prototype.K=function(o,c,f,p){return this.i.add(String(o),c,!0,f,p)};function al(o,c,f,p){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();let N=!0;for(let O=0;O<c.length;++O){const B=c[O];if(B&&!B.da&&B.capture==f){const nt=B.listener,Yt=B.ha||B.src;B.fa&&_n(o.i,B),N=nt.call(Yt,p)!==!1&&N}}return N&&!p.defaultPrevented}function rw(o,c){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=h(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:a.setTimeout(o,c||0)}function Qg(o){o.g=rw(()=>{o.g=null,o.i&&(o.i=!1,Qg(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class aw extends w{constructor(c,f){super(),this.m=c,this.l=f,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Qg(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function da(o){w.call(this),this.h=o,this.g={}}m(da,w);var Yg=[];function Xg(o){tt(o.g,function(c,f){this.g.hasOwnProperty(f)&&th(c)},o),o.g={}}da.prototype.N=function(){da.Z.N.call(this),Xg(this)},da.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ih=a.JSON.stringify,ow=a.JSON.parse,lw=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function $g(){}function Jg(){}var ma={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function sh(){R.call(this,"d")}m(sh,R);function rh(){R.call(this,"c")}m(rh,R);var ls={},Zg=null;function ol(){return Zg=Zg||new fe}ls.Ia="serverreachability";function Wg(o){R.call(this,ls.Ia,o)}m(Wg,R);function ga(o){const c=ol();ye(c,new Wg(c))}ls.STAT_EVENT="statevent";function tp(o,c){R.call(this,ls.STAT_EVENT,o),this.stat=c}m(tp,R);function _e(o){const c=ol();ye(c,new tp(c,o))}ls.Ja="timingevent";function ep(o,c){R.call(this,ls.Ja,o),this.size=c}m(ep,R);function pa(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},c)}function ya(){this.g=!0}ya.prototype.ua=function(){this.g=!1};function uw(o,c,f,p,N,O){o.info(function(){if(o.g)if(O){var B="",nt=O.split("&");for(let Et=0;Et<nt.length;Et++){var Yt=nt[Et].split("=");if(Yt.length>1){const Zt=Yt[0];Yt=Yt[1];const En=Zt.split("_");B=En.length>=2&&En[1]=="type"?B+(Zt+"="+Yt+"&"):B+(Zt+"=redacted&")}}}else B=null;else B=O;return"XMLHTTP REQ ("+p+") [attempt "+N+"]: "+c+`
`+f+`
`+B})}function cw(o,c,f,p,N,O,B){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+N+"]: "+c+`
`+f+`
`+O+" "+B})}function Ys(o,c,f,p){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+fw(o,f)+(p?" "+p:"")})}function hw(o,c){o.info(function(){return"TIMEOUT: "+c})}ya.prototype.info=function(){};function fw(o,c){if(!o.g)return c;if(!c)return null;try{const O=JSON.parse(c);if(O){for(o=0;o<O.length;o++)if(Array.isArray(O[o])){var f=O[o];if(!(f.length<2)){var p=f[1];if(Array.isArray(p)&&!(p.length<1)){var N=p[0];if(N!="noop"&&N!="stop"&&N!="close")for(let B=1;B<p.length;B++)p[B]=""}}}}return ih(O)}catch{return c}}var ll={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},np={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},ip;function ah(){}m(ah,$g),ah.prototype.g=function(){return new XMLHttpRequest},ip=new ah;function _a(o){return encodeURIComponent(String(o))}function dw(o){var c=1;o=o.split(":");const f=[];for(;c>0&&o.length;)f.push(o.shift()),c--;return o.length&&f.push(o.join(":")),f}function oi(o,c,f,p){this.j=o,this.i=c,this.l=f,this.S=p||1,this.V=new da(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new sp}function sp(){this.i=null,this.g="",this.h=!1}var rp={},oh={};function lh(o,c,f){o.M=1,o.A=cl(vn(c)),o.u=f,o.R=!0,ap(o,null)}function ap(o,c){o.F=Date.now(),ul(o),o.B=vn(o.A);var f=o.B,p=o.S;Array.isArray(p)||(p=[String(p)]),vp(f.i,"t",p),o.C=0,f=o.j.L,o.h=new sp,o.g=Up(o.j,f?c:null,!o.u),o.P>0&&(o.O=new aw(h(o.Y,o,o.g),o.P)),c=o.V,f=o.g,p=o.ba;var N="readystatechange";Array.isArray(N)||(N&&(Yg[0]=N.toString()),N=Yg);for(let O=0;O<N.length;O++){const B=Hg(f,N[O],p||c.handleEvent,!1,c.h||c);if(!B)break;c.g[B.key]=B}c=o.J?Ye(o.J):{},o.u?(o.v||(o.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,c)):(o.v="GET",o.g.ea(o.B,o.v,null,c)),ga(),uw(o.i,o.v,o.B,o.l,o.S,o.u)}oi.prototype.ba=function(o){o=o.target;const c=this.O;c&&ci(o)==3?c.j():this.Y(o)},oi.prototype.Y=function(o){try{if(o==this.g)t:{const nt=ci(this.g),Yt=this.g.ya(),Et=this.g.ca();if(!(nt<3)&&(nt!=3||this.g&&(this.h.h||this.g.la()||Rp(this.g)))){this.K||nt!=4||Yt==7||(Yt==8||Et<=0?ga(3):ga(2)),uh(this);var c=this.g.ca();this.X=c;var f=mw(this);if(this.o=c==200,cw(this.i,this.v,this.B,this.l,this.S,nt,c),this.o){if(this.U&&!this.L){e:{if(this.g){var p,N=this.g;if((p=N.g?N.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!T(p)){var O=p;break e}}O=null}if(o=O)Ys(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,ch(this,o);else{this.o=!1,this.m=3,_e(12),us(this),va(this);break t}}if(this.R){o=!0;let Zt;for(;!this.K&&this.C<f.length;)if(Zt=gw(this,f),Zt==oh){nt==4&&(this.m=4,_e(14),o=!1),Ys(this.i,this.l,null,"[Incomplete Response]");break}else if(Zt==rp){this.m=4,_e(15),Ys(this.i,this.l,f,"[Invalid Chunk]"),o=!1;break}else Ys(this.i,this.l,Zt,null),ch(this,Zt);if(op(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),nt!=4||f.length!=0||this.h.h||(this.m=1,_e(16),o=!1),this.o=this.o&&o,!o)Ys(this.i,this.l,f,"[Invalid Chunked Response]"),us(this),va(this);else if(f.length>0&&!this.W){this.W=!0;var B=this.j;B.g==this&&B.aa&&!B.P&&(B.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),_h(B),B.P=!0,_e(11))}}else Ys(this.i,this.l,f,null),ch(this,f);nt==4&&us(this),this.o&&!this.K&&(nt==4?Mp(this.j,this):(this.o=!1,ul(this)))}else Nw(this.g),c==400&&f.indexOf("Unknown SID")>0?(this.m=3,_e(12)):(this.m=0,_e(13)),us(this),va(this)}}}catch{}finally{}};function mw(o){if(!op(o))return o.g.la();const c=Rp(o.g);if(c==="")return"";let f="";const p=c.length,N=ci(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return us(o),va(o),"";o.h.i=new a.TextDecoder}for(let O=0;O<p;O++)o.h.h=!0,f+=o.h.i.decode(c[O],{stream:!(N&&O==p-1)});return c.length=0,o.h.g+=f,o.C=0,o.h.g}function op(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function gw(o,c){var f=o.C,p=c.indexOf(`
`,f);return p==-1?oh:(f=Number(c.substring(f,p)),isNaN(f)?rp:(p+=1,p+f>c.length?oh:(c=c.slice(p,p+f),o.C=p+f,c)))}oi.prototype.cancel=function(){this.K=!0,us(this)};function ul(o){o.T=Date.now()+o.H,lp(o,o.H)}function lp(o,c){if(o.D!=null)throw Error("WatchDog timer not null");o.D=pa(h(o.aa,o),c)}function uh(o){o.D&&(a.clearTimeout(o.D),o.D=null)}oi.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(hw(this.i,this.B),this.M!=2&&(ga(),_e(17)),us(this),this.m=2,va(this)):lp(this,this.T-o)};function va(o){o.j.I==0||o.K||Mp(o.j,o)}function us(o){uh(o);var c=o.O;c&&typeof c.dispose=="function"&&c.dispose(),o.O=null,Xg(o.V),o.g&&(c=o.g,o.g=null,c.abort(),c.dispose())}function ch(o,c){try{var f=o.j;if(f.I!=0&&(f.g==o||hh(f.h,o))){if(!o.L&&hh(f.h,o)&&f.I==3){try{var p=f.Ba.g.parse(c)}catch{p=null}if(Array.isArray(p)&&p.length==3){var N=p;if(N[0]==0){t:if(!f.v){if(f.g)if(f.g.F+3e3<o.F)gl(f),dl(f);else break t;yh(f),_e(18)}}else f.xa=N[1],0<f.xa-f.K&&N[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=pa(h(f.Va,f),6e3));hp(f.h)<=1&&f.ta&&(f.ta=void 0)}else hs(f,11)}else if((o.L||f.g==o)&&gl(f),!T(c))for(N=f.Ba.g.parse(c),c=0;c<N.length;c++){let Et=N[c];const Zt=Et[0];if(!(Zt<=f.K))if(f.K=Zt,Et=Et[1],f.I==2)if(Et[0]=="c"){f.M=Et[1],f.ba=Et[2];const En=Et[3];En!=null&&(f.ka=En,f.j.info("VER="+f.ka));const fs=Et[4];fs!=null&&(f.za=fs,f.j.info("SVER="+f.za));const hi=Et[5];hi!=null&&typeof hi=="number"&&hi>0&&(p=1.5*hi,f.O=p,f.j.info("backChannelRequestTimeoutMs_="+p)),p=f;const fi=o.g;if(fi){const yl=fi.g?fi.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(yl){var O=p.h;O.g||yl.indexOf("spdy")==-1&&yl.indexOf("quic")==-1&&yl.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(fh(O,O.h),O.h=null))}if(p.G){const vh=fi.g?fi.g.getResponseHeader("X-HTTP-Session-Id"):null;vh&&(p.wa=vh,bt(p.J,p.G,vh))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-o.F,f.j.info("Handshake RTT: "+f.T+"ms")),p=f;var B=o;if(p.na=Lp(p,p.L?p.ba:null,p.W),B.L){fp(p.h,B);var nt=B,Yt=p.O;Yt&&(nt.H=Yt),nt.D&&(uh(nt),ul(nt)),p.g=B}else xp(p);f.i.length>0&&ml(f)}else Et[0]!="stop"&&Et[0]!="close"||hs(f,7);else f.I==3&&(Et[0]=="stop"||Et[0]=="close"?Et[0]=="stop"?hs(f,7):ph(f):Et[0]!="noop"&&f.l&&f.l.qa(Et),f.A=0)}}ga(4)}catch{}}var pw=class{constructor(o,c){this.g=o,this.map=c}};function up(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function cp(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function hp(o){return o.h?1:o.g?o.g.size:0}function hh(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function fh(o,c){o.g?o.g.add(c):o.h=c}function fp(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}up.prototype.cancel=function(){if(this.i=dp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function dp(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const f of o.g.values())c=c.concat(f.G);return c}return E(o.i)}var mp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function yw(o,c){if(o){o=o.split("&");for(let f=0;f<o.length;f++){const p=o[f].indexOf("=");let N,O=null;p>=0?(N=o[f].substring(0,p),O=o[f].substring(p+1)):N=o[f],c(N,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function li(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;o instanceof li?(this.l=o.l,Ea(this,o.j),this.o=o.o,this.g=o.g,Ta(this,o.u),this.h=o.h,dh(this,Ep(o.i)),this.m=o.m):o&&(c=String(o).match(mp))?(this.l=!1,Ea(this,c[1]||"",!0),this.o=Aa(c[2]||""),this.g=Aa(c[3]||"",!0),Ta(this,c[4]),this.h=Aa(c[5]||"",!0),dh(this,c[6]||"",!0),this.m=Aa(c[7]||"")):(this.l=!1,this.i=new ba(null,this.l))}li.prototype.toString=function(){const o=[];var c=this.j;c&&o.push(Sa(c,gp,!0),":");var f=this.g;return(f||c=="file")&&(o.push("//"),(c=this.o)&&o.push(Sa(c,gp,!0),"@"),o.push(_a(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&o.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&o.push("/"),o.push(Sa(f,f.charAt(0)=="/"?Ew:vw,!0))),(f=this.i.toString())&&o.push("?",f),(f=this.m)&&o.push("#",Sa(f,Aw)),o.join("")},li.prototype.resolve=function(o){const c=vn(this);let f=!!o.j;f?Ea(c,o.j):f=!!o.o,f?c.o=o.o:f=!!o.g,f?c.g=o.g:f=o.u!=null;var p=o.h;if(f)Ta(c,o.u);else if(f=!!o.h){if(p.charAt(0)!="/")if(this.g&&!this.h)p="/"+p;else{var N=c.h.lastIndexOf("/");N!=-1&&(p=c.h.slice(0,N+1)+p)}if(N=p,N==".."||N==".")p="";else if(N.indexOf("./")!=-1||N.indexOf("/.")!=-1){p=N.lastIndexOf("/",0)==0,N=N.split("/");const O=[];for(let B=0;B<N.length;){const nt=N[B++];nt=="."?p&&B==N.length&&O.push(""):nt==".."?((O.length>1||O.length==1&&O[0]!="")&&O.pop(),p&&B==N.length&&O.push("")):(O.push(nt),p=!0)}p=O.join("/")}else p=N}return f?c.h=p:f=o.i.toString()!=="",f?dh(c,Ep(o.i)):f=!!o.m,f&&(c.m=o.m),c};function vn(o){return new li(o)}function Ea(o,c,f){o.j=f?Aa(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function Ta(o,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);o.u=c}else o.u=null}function dh(o,c,f){c instanceof ba?(o.i=c,Sw(o.i,o.l)):(f||(c=Sa(c,Tw)),o.i=new ba(c,o.l))}function bt(o,c,f){o.i.set(c,f)}function cl(o){return bt(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function Aa(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Sa(o,c,f){return typeof o=="string"?(o=encodeURI(o).replace(c,_w),f&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function _w(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var gp=/[#\/\?@]/g,vw=/[#\?:]/g,Ew=/[#\?]/g,Tw=/[#\?@]/g,Aw=/#/g;function ba(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function cs(o){o.g||(o.g=new Map,o.h=0,o.i&&yw(o.i,function(c,f){o.add(decodeURIComponent(c.replace(/\+/g," ")),f)}))}e=ba.prototype,e.add=function(o,c){cs(this),this.i=null,o=Xs(this,o);let f=this.g.get(o);return f||this.g.set(o,f=[]),f.push(c),this.h+=1,this};function pp(o,c){cs(o),c=Xs(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function yp(o,c){return cs(o),c=Xs(o,c),o.g.has(c)}e.forEach=function(o,c){cs(this),this.g.forEach(function(f,p){f.forEach(function(N){o.call(c,N,p,this)},this)},this)};function _p(o,c){cs(o);let f=[];if(typeof c=="string")yp(o,c)&&(f=f.concat(o.g.get(Xs(o,c))));else for(o=Array.from(o.g.values()),c=0;c<o.length;c++)f=f.concat(o[c]);return f}e.set=function(o,c){return cs(this),this.i=null,o=Xs(this,o),yp(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},e.get=function(o,c){return o?(o=_p(this,o),o.length>0?String(o[0]):c):c};function vp(o,c,f){pp(o,c),f.length>0&&(o.i=null,o.g.set(Xs(o,c),E(f)),o.h+=f.length)}e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(let p=0;p<c.length;p++){var f=c[p];const N=_a(f);f=_p(this,f);for(let O=0;O<f.length;O++){let B=N;f[O]!==""&&(B+="="+_a(f[O])),o.push(B)}}return this.i=o.join("&")};function Ep(o){const c=new ba;return c.i=o.i,o.g&&(c.g=new Map(o.g),c.h=o.h),c}function Xs(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function Sw(o,c){c&&!o.j&&(cs(o),o.i=null,o.g.forEach(function(f,p){const N=p.toLowerCase();p!=N&&(pp(this,p),vp(this,N,f))},o)),o.j=c}function bw(o,c){const f=new ya;if(a.Image){const p=new Image;p.onload=d(ui,f,"TestLoadImage: loaded",!0,c,p),p.onerror=d(ui,f,"TestLoadImage: error",!1,c,p),p.onabort=d(ui,f,"TestLoadImage: abort",!1,c,p),p.ontimeout=d(ui,f,"TestLoadImage: timeout",!1,c,p),a.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else c(!1)}function ww(o,c){const f=new ya,p=new AbortController,N=setTimeout(()=>{p.abort(),ui(f,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:p.signal}).then(O=>{clearTimeout(N),O.ok?ui(f,"TestPingServer: ok",!0,c):ui(f,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(N),ui(f,"TestPingServer: error",!1,c)})}function ui(o,c,f,p,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),p(f)}catch{}}function Rw(){this.g=new lw}function mh(o){this.i=o.Sb||null,this.h=o.ab||!1}m(mh,$g),mh.prototype.g=function(){return new hl(this.i,this.h)};function hl(o,c){fe.call(this),this.H=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}m(hl,fe),e=hl.prototype,e.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=c,this.readyState=1,Ra(this)},e.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(c.body=o),(this.H||a).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,wa(this)),this.readyState=0},e.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Ra(this)),this.g&&(this.readyState=3,Ra(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Tp(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function Tp(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}e.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?wa(this):Ra(this),this.readyState==3&&Tp(this)}},e.Oa=function(o){this.g&&(this.response=this.responseText=o,wa(this))},e.Na=function(o){this.g&&(this.response=o,wa(this))},e.ga=function(){this.g&&wa(this)};function wa(o){o.readyState=4,o.l=null,o.j=null,o.B=null,Ra(o)}e.setRequestHeader=function(o,c){this.A.append(o,c)},e.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var f=c.next();!f.done;)f=f.value,o.push(f[0]+": "+f[1]),f=c.next();return o.join(`\r
`)};function Ra(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(hl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Ap(o){let c="";return tt(o,function(f,p){c+=p,c+=":",c+=f,c+=`\r
`}),c}function gh(o,c,f){t:{for(p in f){var p=!1;break t}p=!0}p||(f=Ap(f),typeof o=="string"?f!=null&&_a(f):bt(o,c,f))}function Mt(o){fe.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}m(Mt,fe);var Iw=/^https?$/i,Cw=["POST","PUT"];e=Mt.prototype,e.Fa=function(o){this.H=o},e.ea=function(o,c,f,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():ip.g(),this.g.onreadystatechange=g(h(this.Ca,this));try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(O){Sp(this,O);return}if(o=f||"",f=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var N in p)f.set(N,p[N]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const O of p.keys())f.set(O,p.get(O));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(f.keys()).find(O=>O.toLowerCase()=="content-type"),N=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(Cw,c,void 0)>=0)||p||N||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,B]of f)this.g.setRequestHeader(O,B);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(O){Sp(this,O)}};function Sp(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.o=5,bp(o),fl(o)}function bp(o){o.A||(o.A=!0,ye(o,"complete"),ye(o,"error"))}e.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,ye(this,"complete"),ye(this,"abort"),fl(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),fl(this,!0)),Mt.Z.N.call(this)},e.Ca=function(){this.u||(this.B||this.v||this.j?wp(this):this.Xa())},e.Xa=function(){wp(this)};function wp(o){if(o.h&&typeof r<"u"){if(o.v&&ci(o)==4)setTimeout(o.Ca.bind(o),0);else if(ye(o,"readystatechange"),ci(o)==4){o.h=!1;try{const O=o.ca();t:switch(O){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break t;default:c=!1}var f;if(!(f=c)){var p;if(p=O===0){let B=String(o.D).match(mp)[1]||null;!B&&a.self&&a.self.location&&(B=a.self.location.protocol.slice(0,-1)),p=!Iw.test(B?B.toLowerCase():"")}f=p}if(f)ye(o,"complete"),ye(o,"success");else{o.o=6;try{var N=ci(o)>2?o.g.statusText:""}catch{N=""}o.l=N+" ["+o.ca()+"]",bp(o)}}finally{fl(o)}}}}function fl(o,c){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const f=o.g;o.g=null,c||ye(o,"ready");try{f.onreadystatechange=null}catch{}}}e.isActive=function(){return!!this.g};function ci(o){return o.g?o.g.readyState:0}e.ca=function(){try{return ci(this)>2?this.g.status:-1}catch{return-1}},e.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},e.La=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),ow(c)}};function Rp(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Nw(o){const c={};o=(o.g&&ci(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(T(o[p]))continue;var f=dw(o[p]);const N=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const O=c[N]||[];c[N]=O,O.push(f)}Ot(c,function(p){return p.join(", ")})}e.ya=function(){return this.o},e.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ia(o,c,f){return f&&f.internalChannelParams&&f.internalChannelParams[o]||c}function Ip(o){this.za=0,this.i=[],this.j=new ya,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ia("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ia("baseRetryDelayMs",5e3,o),this.Za=Ia("retryDelaySeedMs",1e4,o),this.Ta=Ia("forwardChannelMaxRetries",2,o),this.va=Ia("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new up(o&&o.concurrentRequestLimit),this.Ba=new Rw,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}e=Ip.prototype,e.ka=8,e.I=1,e.connect=function(o,c,f,p){_e(0),this.W=o,this.H=c||{},f&&p!==void 0&&(this.H.OSID=f,this.H.OAID=p),this.F=this.X,this.J=Lp(this,null,this.W),ml(this)};function ph(o){if(Cp(o),o.I==3){var c=o.V++,f=vn(o.J);if(bt(f,"SID",o.M),bt(f,"RID",c),bt(f,"TYPE","terminate"),Ca(o,f),c=new oi(o,o.j,c),c.M=2,c.A=cl(vn(f)),f=!1,a.navigator&&a.navigator.sendBeacon)try{f=a.navigator.sendBeacon(c.A.toString(),"")}catch{}!f&&a.Image&&(new Image().src=c.A,f=!0),f||(c.g=Up(c.j,null),c.g.ea(c.A)),c.F=Date.now(),ul(c)}kp(o)}function dl(o){o.g&&(_h(o),o.g.cancel(),o.g=null)}function Cp(o){dl(o),o.v&&(a.clearTimeout(o.v),o.v=null),gl(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function ml(o){if(!cp(o.h)&&!o.m){o.m=!0;var c=o.Ea;z||y(),P||(z(),P=!0),_.add(c,o),o.D=0}}function Dw(o,c){return hp(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=c.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=pa(h(o.Ea,o,c),Vp(o,o.D)),o.D++,!0)}e.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const N=new oi(this,this.j,o);let O=this.o;if(this.U&&(O?(O=Ye(O),he(O,this.U)):O=this.U),this.u!==null||this.R||(N.J=O,O=null),this.S)t:{for(var c=0,f=0;f<this.i.length;f++){e:{var p=this.i[f];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break e}p=void 0}if(p===void 0)break;if(c+=p,c>4096){c=f;break t}if(c===4096||f===this.i.length-1){c=f+1;break t}}c=1e3}else c=1e3;c=Dp(this,N,c),f=vn(this.J),bt(f,"RID",o),bt(f,"CVER",22),this.G&&bt(f,"X-HTTP-Session-Id",this.G),Ca(this,f),O&&(this.R?c="headers="+_a(Ap(O))+"&"+c:this.u&&gh(f,this.u,O)),fh(this.h,N),this.Ra&&bt(f,"TYPE","init"),this.S?(bt(f,"$req",c),bt(f,"SID","null"),N.U=!0,lh(N,f,null)):lh(N,f,c),this.I=2}}else this.I==3&&(o?Np(this,o):this.i.length==0||cp(this.h)||Np(this))};function Np(o,c){var f;c?f=c.l:f=o.V++;const p=vn(o.J);bt(p,"SID",o.M),bt(p,"RID",f),bt(p,"AID",o.K),Ca(o,p),o.u&&o.o&&gh(p,o.u,o.o),f=new oi(o,o.j,f,o.D+1),o.u===null&&(f.J=o.o),c&&(o.i=c.G.concat(o.i)),c=Dp(o,f,1e3),f.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),fh(o.h,f),lh(f,p,c)}function Ca(o,c){o.H&&tt(o.H,function(f,p){bt(c,p,f)}),o.l&&tt({},function(f,p){bt(c,p,f)})}function Dp(o,c,f){f=Math.min(o.i.length,f);const p=o.l?h(o.l.Ka,o.l,o):null;t:{var N=o.i;let nt=-1;for(;;){const Yt=["count="+f];nt==-1?f>0?(nt=N[0].g,Yt.push("ofs="+nt)):nt=0:Yt.push("ofs="+nt);let Et=!0;for(let Zt=0;Zt<f;Zt++){var O=N[Zt].g;const En=N[Zt].map;if(O-=nt,O<0)nt=Math.max(0,N[Zt].g-100),Et=!1;else try{O="req"+O+"_"||"";try{var B=En instanceof Map?En:Object.entries(En);for(const[fs,hi]of B){let fi=hi;l(hi)&&(fi=ih(hi)),Yt.push(O+fs+"="+encodeURIComponent(fi))}}catch(fs){throw Yt.push(O+"type="+encodeURIComponent("_badmap")),fs}}catch{p&&p(En)}}if(Et){B=Yt.join("&");break t}}B=void 0}return o=o.i.splice(0,f),c.G=o,B}function xp(o){if(!o.g&&!o.v){o.Y=1;var c=o.Da;z||y(),P||(z(),P=!0),_.add(c,o),o.A=0}}function yh(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=pa(h(o.Da,o),Vp(o,o.A)),o.A++,!0)}e.Da=function(){if(this.v=null,Op(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=pa(h(this.Wa,this),o)}},e.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,_e(10),dl(this),Op(this))};function _h(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function Op(o){o.g=new oi(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var c=vn(o.na);bt(c,"RID","rpc"),bt(c,"SID",o.M),bt(c,"AID",o.K),bt(c,"CI",o.F?"0":"1"),!o.F&&o.ia&&bt(c,"TO",o.ia),bt(c,"TYPE","xmlhttp"),Ca(o,c),o.u&&o.o&&gh(c,o.u,o.o),o.O&&(o.g.H=o.O);var f=o.g;o=o.ba,f.M=1,f.A=cl(vn(c)),f.u=null,f.R=!0,ap(f,o)}e.Va=function(){this.C!=null&&(this.C=null,dl(this),yh(this),_e(19))};function gl(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function Mp(o,c){var f=null;if(o.g==c){gl(o),_h(o),o.g=null;var p=2}else if(hh(o.h,c))f=c.G,fp(o.h,c),p=1;else return;if(o.I!=0){if(c.o)if(p==1){f=c.u?c.u.length:0,c=Date.now()-c.F;var N=o.D;p=ol(),ye(p,new ep(p,f)),ml(o)}else xp(o);else if(N=c.m,N==3||N==0&&c.X>0||!(p==1&&Dw(o,c)||p==2&&yh(o)))switch(f&&f.length>0&&(c=o.h,c.i=c.i.concat(f)),N){case 1:hs(o,5);break;case 4:hs(o,10);break;case 3:hs(o,6);break;default:hs(o,2)}}}function Vp(o,c){let f=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(f*=2),f*c}function hs(o,c){if(o.j.info("Error code "+c),c==2){var f=h(o.bb,o),p=o.Ua;const N=!p;p=new li(p||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Ea(p,"https"),cl(p),N?bw(p.toString(),f):ww(p.toString(),f)}else _e(2);o.I=0,o.l&&o.l.pa(c),kp(o),Cp(o)}e.bb=function(o){o?(this.j.info("Successfully pinged google.com"),_e(2)):(this.j.info("Failed to ping google.com"),_e(1))};function kp(o){if(o.I=0,o.ja=[],o.l){const c=dp(o.h);(c.length!=0||o.i.length!=0)&&(D(o.ja,c),D(o.ja,o.i),o.h.i.length=0,E(o.i),o.i.length=0),o.l.oa()}}function Lp(o,c,f){var p=f instanceof li?vn(f):new li(f);if(p.g!="")c&&(p.g=c+"."+p.g),Ta(p,p.u);else{var N=a.location;p=N.protocol,c=c?c+"."+N.hostname:N.hostname,N=+N.port;const O=new li(null);p&&Ea(O,p),c&&(O.g=c),N&&Ta(O,N),f&&(O.h=f),p=O}return f=o.G,c=o.wa,f&&c&&bt(p,f,c),bt(p,"VER",o.ka),Ca(o,p),p}function Up(o,c,f){if(c&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Aa&&!o.ma?new Mt(new mh({ab:f})):new Mt(o.ma),c.Fa(o.L),c}e.isActive=function(){return!!this.l&&this.l.isActive(this)};function Pp(){}e=Pp.prototype,e.ra=function(){},e.qa=function(){},e.pa=function(){},e.oa=function(){},e.isActive=function(){return!0},e.Ka=function(){};function pl(){}pl.prototype.g=function(o,c){return new Ve(o,c)};function Ve(o,c){fe.call(this),this.g=new Ip(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(o?o["X-WebChannel-Client-Profile"]=c.sa:o={"X-WebChannel-Client-Profile":c.sa}),this.g.U=o,(o=c&&c.Qb)&&!T(o)&&(this.g.u=o),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!T(c)&&(this.g.G=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new $s(this)}m(Ve,fe),Ve.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Ve.prototype.close=function(){ph(this.g)},Ve.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var f={};f.__data__=o,o=f}else this.v&&(f={},f.__data__=ih(o),o=f);c.i.push(new pw(c.Ya++,o)),c.I==3&&ml(c)},Ve.prototype.N=function(){this.g.l=null,delete this.j,ph(this.g),delete this.g,Ve.Z.N.call(this)};function zp(o){sh.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){t:{for(const f in c){o=f;break t}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}m(zp,sh);function jp(){rh.call(this),this.status=1}m(jp,rh);function $s(o){this.g=o}m($s,Pp),$s.prototype.ra=function(){ye(this.g,"a")},$s.prototype.qa=function(o){ye(this.g,new zp(o))},$s.prototype.pa=function(o){ye(this.g,new jp)},$s.prototype.oa=function(){ye(this.g,"b")},pl.prototype.createWebChannel=pl.prototype.g,Ve.prototype.send=Ve.prototype.o,Ve.prototype.open=Ve.prototype.m,Ve.prototype.close=Ve.prototype.close,CS=function(){return new pl},IS=function(){return ol()},RS=ls,Nd={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},ll.NO_ERROR=0,ll.TIMEOUT=8,ll.HTTP_ERROR=6,au=ll,np.COMPLETE="complete",wS=np,Jg.EventType=ma,ma.OPEN="a",ma.CLOSE="b",ma.ERROR="c",ma.MESSAGE="d",fe.prototype.listen=fe.prototype.J,Ha=Jg,Mt.prototype.listenOnce=Mt.prototype.K,Mt.prototype.getLastError=Mt.prototype.Ha,Mt.prototype.getLastErrorCode=Mt.prototype.ya,Mt.prototype.getStatus=Mt.prototype.ca,Mt.prototype.getResponseJson=Mt.prototype.La,Mt.prototype.getResponseText=Mt.prototype.la,Mt.prototype.send=Mt.prototype.ea,Mt.prototype.setWithCredentials=Mt.prototype.Fa,bS=Mt}).apply(typeof kl<"u"?kl:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class me{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}me.UNAUTHENTICATED=new me(null),me.GOOGLE_CREDENTIALS=new me("google-credentials-uid"),me.FIRST_PARTY=new me("first-party-uid"),me.MOCK_USER=new me("mock-user");/**
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
 */let oa="12.12.0";function dO(e){oa=e}/**
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
 */const Ls=new Nc("@firebase/firestore");function nr(){return Ls.logLevel}function H(e,...t){if(Ls.logLevel<=at.DEBUG){const n=t.map(lg);Ls.debug(`Firestore (${oa}): ${e}`,...n)}}function si(e,...t){if(Ls.logLevel<=at.ERROR){const n=t.map(lg);Ls.error(`Firestore (${oa}): ${e}`,...n)}}function Us(e,...t){if(Ls.logLevel<=at.WARN){const n=t.map(lg);Ls.warn(`Firestore (${oa}): ${e}`,...n)}}function lg(e){if(typeof e=="string")return e;try{return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
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
 */function Q(e,t,n){let i="Unexpected state";typeof t=="string"?i=t:n=t,NS(e,i,n)}function NS(e,t,n){let i=`FIRESTORE (${oa}) INTERNAL ASSERTION FAILED: ${t} (ID: ${e.toString(16)})`;if(n!==void 0)try{i+=" CONTEXT: "+JSON.stringify(n)}catch{i+=" CONTEXT: "+n}throw si(i),new Error(i)}function gt(e,t,n,i){let s="Unexpected state";typeof n=="string"?s=n:i=n,e||NS(t,s,i)}function Z(e,t){return e}/**
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
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends yn{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Rs{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class DS{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class mO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(me.UNAUTHENTICATED))}shutdown(){}}class gO{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class pO{constructor(t){this.t=t,this.currentUser=me.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){gt(this.o===void 0,42304);let i=this.i;const s=u=>this.i!==i?(i=this.i,n(u)):Promise.resolve();let r=new Rs;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Rs,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const u=r;t.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Rs)}},0),a()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==t?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(gt(typeof i.accessToken=="string",31837,{l:i}),new DS(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return gt(t===null||typeof t=="string",2055,{h:t}),new me(t)}}class yO{constructor(t,n,i){this.P=t,this.T=n,this.I=i,this.type="FirstParty",this.user=me.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const t=this.A();return t&&this.R.set("Authorization",t),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class _O{constructor(t,n,i){this.P=t,this.T=n,this.I=i}getToken(){return Promise.resolve(new yO(this.P,this.T,this.I))}start(t,n){t.enqueueRetryable(()=>n(me.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class tv{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class vO{constructor(t,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,hn(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,n){gt(this.o===void 0,3512);const i=r=>{r.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const a=r.token!==this.m;return this.m=r.token,H("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(r.token):Promise.resolve()};this.o=r=>{t.enqueueRetryable(()=>i(r))};const s=r=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(r=>s(r)),setTimeout(()=>{if(!this.appCheck){const r=this.V.getImmediate({optional:!0});r?s(r):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new tv(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(gt(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new tv(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function EO(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let i=0;i<e;i++)n[i]=Math.floor(256*Math.random());return n}/**
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
 */class ug{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const s=EO(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<n&&(i+=t.charAt(s[r]%62))}return i}}function ot(e,t){return e<t?-1:e>t?1:0}function Dd(e,t){const n=Math.min(e.length,t.length);for(let i=0;i<n;i++){const s=e.charAt(i),r=t.charAt(i);if(s!==r)return gf(s)===gf(r)?ot(s,r):gf(s)?1:-1}return ot(e.length,t.length)}const TO=55296,AO=57343;function gf(e){const t=e.charCodeAt(0);return t>=TO&&t<=AO}function Fr(e,t,n){return e.length===t.length&&e.every((i,s)=>n(i,t[s]))}/**
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
 */const ev="__name__";class Tn{constructor(t,n,i){n===void 0?n=0:n>t.length&&Q(637,{offset:n,range:t.length}),i===void 0?i=t.length-n:i>t.length-n&&Q(1746,{length:i,range:t.length-n}),this.segments=t,this.offset=n,this.len=i}get length(){return this.len}isEqual(t){return Tn.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Tn?t.forEach(i=>{n.push(i)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,i=this.limit();n<i;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const i=Math.min(t.length,n.length);for(let s=0;s<i;s++){const r=Tn.compareSegments(t.get(s),n.get(s));if(r!==0)return r}return ot(t.length,n.length)}static compareSegments(t,n){const i=Tn.isNumericId(t),s=Tn.isNumericId(n);return i&&!s?-1:!i&&s?1:i&&s?Tn.extractNumericId(t).compare(Tn.extractNumericId(n)):Dd(t,n)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Hi.fromString(t.substring(4,t.length-2))}}class At extends Tn{construct(t,n,i){return new At(t,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const i of t){if(i.indexOf("//")>=0)throw new q(k.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(s=>s.length>0))}return new At(n)}static emptyPath(){return new At([])}}const SO=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class oe extends Tn{construct(t,n,i){return new oe(t,n,i)}static isValidIdentifier(t){return SO.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),oe.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ev}static keyField(){return new oe([ev])}static fromServerFormat(t){const n=[];let i="",s=0;const r=()=>{if(i.length===0)throw new q(k.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let a=!1;for(;s<t.length;){const l=t[s];if(l==="\\"){if(s+1===t.length)throw new q(k.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new q(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);i+=u,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(i+=l,s++):(r(),s++)}if(r(),a)throw new q(k.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new oe(n)}static emptyPath(){return new oe([])}}/**
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
 */class F{constructor(t){this.path=t}static fromPath(t){return new F(At.fromString(t))}static fromName(t){return new F(At.fromString(t).popFirst(5))}static empty(){return new F(At.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&At.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return At.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new F(new At(t.slice()))}}/**
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
 */function xS(e,t,n){if(!n)throw new q(k.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function bO(e,t,n,i){if(t===!0&&i===!0)throw new q(k.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function nv(e){if(!F.isDocumentKey(e))throw new q(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function iv(e){if(F.isDocumentKey(e))throw new q(k.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function OS(e){return typeof e=="object"&&e!==null&&(Object.getPrototypeOf(e)===Object.prototype||Object.getPrototypeOf(e)===null)}function Lc(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(i){return i.constructor?i.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":Q(12329,{type:typeof e})}function Fi(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new q(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Lc(e);throw new q(k.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */function Kt(e,t){const n={typeString:e};return t&&(n.value=t),n}function Wo(e,t){if(!OS(e))throw new q(k.INVALID_ARGUMENT,"JSON must be an object");let n;for(const i in t)if(t[i]){const s=t[i].typeString,r="value"in t[i]?{value:t[i].value}:void 0;if(!(i in e)){n=`JSON missing required field: '${i}'`;break}const a=e[i];if(s&&typeof a!==s){n=`JSON field '${i}' must be a ${s}.`;break}if(r!==void 0&&a!==r.value){n=`Expected '${i}' field to equal '${r.value}'`;break}}if(n)throw new q(k.INVALID_ARGUMENT,n);return!0}/**
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
 */const sv=-62135596800,rv=1e6;class It{static now(){return It.fromMillis(Date.now())}static fromDate(t){return It.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),i=Math.floor((t-1e3*n)*rv);return new It(n,i)}constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new q(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new q(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<sv)throw new q(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new q(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/rv}_compareTo(t){return this.seconds===t.seconds?ot(this.nanoseconds,t.nanoseconds):ot(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:It._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(Wo(t,It._jsonSchema))return new It(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-sv;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}It._jsonSchemaVersion="firestore/timestamp/1.0",It._jsonSchema={type:Kt("string",It._jsonSchemaVersion),seconds:Kt("number"),nanoseconds:Kt("number")};/**
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
 */class ${static fromTimestamp(t){return new $(t)}static min(){return new $(new It(0,0))}static max(){return new $(new It(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Do=-1;function wO(e,t){const n=e.toTimestamp().seconds,i=e.toTimestamp().nanoseconds+1,s=$.fromTimestamp(i===1e9?new It(n+1,0):new It(n,i));return new Zi(s,F.empty(),t)}function RO(e){return new Zi(e.readTime,e.key,Do)}class Zi{constructor(t,n,i){this.readTime=t,this.documentKey=n,this.largestBatchId=i}static min(){return new Zi($.min(),F.empty(),Do)}static max(){return new Zi($.max(),F.empty(),Do)}}function IO(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=F.comparator(e.documentKey,t.documentKey),n!==0?n:ot(e.largestBatchId,t.largestBatchId))}/**
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
 */const CO="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class NO{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function la(e){if(e.code!==k.FAILED_PRECONDITION||e.message!==CO)throw e;H("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class L{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&Q(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new L((i,s)=>{this.nextCallback=r=>{this.wrapSuccess(t,r).next(i,s)},this.catchCallback=r=>{this.wrapFailure(n,r).next(i,s)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):L.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):L.reject(n)}static resolve(t){return new L((n,i)=>{n(t)})}static reject(t){return new L((n,i)=>{i(t)})}static waitFor(t){return new L((n,i)=>{let s=0,r=0,a=!1;t.forEach(l=>{++s,l.next(()=>{++r,a&&r===s&&n()},u=>i(u))}),a=!0,r===s&&n()})}static or(t){let n=L.resolve(!1);for(const i of t)n=n.next(s=>s?L.resolve(s):i());return n}static forEach(t,n){const i=[];return t.forEach((s,r)=>{i.push(n.call(this,s,r))}),this.waitFor(i)}static mapArray(t,n){return new L((i,s)=>{const r=t.length,a=new Array(r);let l=0;for(let u=0;u<r;u++){const h=u;n(t[h]).next(d=>{a[h]=d,++l,l===r&&i(a)},d=>s(d))}})}static doWhile(t,n){return new L((i,s)=>{const r=()=>{t()===!0?n().next(()=>{r()},s):i()};r()})}}function DO(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ua(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class Uc{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=i=>this.ae(i),this.ue=i=>n.writeSequenceNumber(i))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}Uc.ce=-1;/**
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
 */const cg=-1;function Pc(e){return e==null}function Ju(e){return e===0&&1/e==-1/0}function xO(e){return typeof e=="number"&&Number.isInteger(e)&&!Ju(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
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
 */const MS="";function OO(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=av(t)),t=MO(e.get(n),t);return av(t)}function MO(e,t){let n=t;const i=e.length;for(let s=0;s<i;s++){const r=e.charAt(s);switch(r){case"\0":n+="";break;case MS:n+="";break;default:n+=r}}return n}function av(e){return e+MS+""}/**
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
 */function ov(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function as(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function VS(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
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
 */class xt{constructor(t,n){this.comparator=t,this.root=n||se.EMPTY}insert(t,n){return new xt(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,se.BLACK,null,null))}remove(t){return new xt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,se.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(t){let n=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(t,i.key);if(s===0)return n+i.left.size;s<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,i)=>(t(n,i),!1))}toString(){const t=[];return this.inorderTraversal((n,i)=>(t.push(`${n}:${i}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Ll(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Ll(this.root,t,this.comparator,!1)}getReverseIterator(){return new Ll(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Ll(this.root,t,this.comparator,!0)}}class Ll{constructor(t,n,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=n?i(t.key,n):1,n&&s&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(r===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class se{constructor(t,n,i,s,r){this.key=t,this.value=n,this.color=i??se.RED,this.left=s??se.EMPTY,this.right=r??se.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,i,s,r){return new se(t??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,i){let s=this;const r=i(t,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(t,n,i),null):r===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(t,n,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return se.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let i,s=this;if(n(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(t,s.key)===0){if(s.right.isEmpty())return se.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,se.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,se.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Q(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Q(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw Q(27949);return t+(this.isRed()?0:1)}}se.EMPTY=null,se.RED=!0,se.BLACK=!1;se.EMPTY=new class{constructor(){this.size=0}get key(){throw Q(57766)}get value(){throw Q(16141)}get color(){throw Q(16727)}get left(){throw Q(29726)}get right(){throw Q(36894)}copy(t,n,i,s,r){return this}insert(t,n,i){return new se(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class $t{constructor(t){this.comparator=t,this.data=new xt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,i)=>(t(n),!1))}forEachInRange(t,n){const i=this.data.getIteratorFrom(t[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,t[1])>=0)return;n(s.key)}}forEachWhile(t,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!t(i.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new lv(this.data.getIterator())}getIteratorFrom(t){return new lv(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(i=>{n=n.add(i)}),n}isEqual(t){if(!(t instanceof $t)||this.size!==t.size)return!1;const n=this.data.getIterator(),i=t.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new $t(this.comparator);return n.data=t,n}}class lv{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class ze{constructor(t){this.fields=t,t.sort(oe.comparator)}static empty(){return new ze([])}unionWith(t){let n=new $t(oe.comparator);for(const i of this.fields)n=n.add(i);for(const i of t)n=n.add(i);return new ze(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Fr(this.fields,t.fields,(n,i)=>n.isEqual(i))}}/**
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
 */class kS extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ce{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new kS("Invalid base64 string: "+r):r}}(t);return new ce(n)}static fromUint8Array(t){const n=function(s){let r="";for(let a=0;a<s.length;++a)r+=String.fromCharCode(s[a]);return r}(t);return new ce(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const i=new Uint8Array(n.length);for(let s=0;s<n.length;s++)i[s]=n.charCodeAt(s);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return ot(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ce.EMPTY_BYTE_STRING=new ce("");const VO=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Wi(e){if(gt(!!e,39018),typeof e=="string"){let t=0;const n=VO.exec(e);if(gt(!!n,46558,{timestamp:e}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),t=Number(s)}const i=new Date(e);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:Lt(e.seconds),nanos:Lt(e.nanos)}}function Lt(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function ts(e){return typeof e=="string"?ce.fromBase64String(e):ce.fromUint8Array(e)}/**
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
 */const LS="server_timestamp",US="__type__",PS="__previous_value__",zS="__local_write_time__";function hg(e){var n,i;return((i=(((n=e==null?void 0:e.mapValue)==null?void 0:n.fields)||{})[US])==null?void 0:i.stringValue)===LS}function zc(e){const t=e.mapValue.fields[PS];return hg(t)?zc(t):t}function xo(e){const t=Wi(e.mapValue.fields[zS].timestampValue);return new It(t.seconds,t.nanos)}/**
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
 */class kO{constructor(t,n,i,s,r,a,l,u,h,d,m){this.databaseId=t,this.appId=n,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=d,this.apiKey=m}}const Zu="(default)";class Oo{constructor(t,n){this.projectId=t,this.database=n||Zu}static empty(){return new Oo("","")}get isDefaultDatabase(){return this.database===Zu}isEqual(t){return t instanceof Oo&&t.projectId===this.projectId&&t.database===this.database}}function LO(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new q(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Oo(e.options.projectId,t)}/**
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
 */const jS="__type__",UO="__max__",Ul={mapValue:{}},BS="__vector__",Wu="value";function es(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?hg(e)?4:zO(e)?9007199254740991:PO(e)?10:11:Q(28295,{value:e})}function On(e,t){if(e===t)return!0;const n=es(e);if(n!==es(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return xo(e).isEqual(xo(t));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const a=Wi(s.timestampValue),l=Wi(r.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,r){return ts(s.bytesValue).isEqual(ts(r.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,r){return Lt(s.geoPointValue.latitude)===Lt(r.geoPointValue.latitude)&&Lt(s.geoPointValue.longitude)===Lt(r.geoPointValue.longitude)}(e,t);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Lt(s.integerValue)===Lt(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const a=Lt(s.doubleValue),l=Lt(r.doubleValue);return a===l?Ju(a)===Ju(l):isNaN(a)&&isNaN(l)}return!1}(e,t);case 9:return Fr(e.arrayValue.values||[],t.arrayValue.values||[],On);case 10:case 11:return function(s,r){const a=s.mapValue.fields||{},l=r.mapValue.fields||{};if(ov(a)!==ov(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!On(a[u],l[u])))return!1;return!0}(e,t);default:return Q(52216,{left:e})}}function Mo(e,t){return(e.values||[]).find(n=>On(n,t))!==void 0}function Gr(e,t){if(e===t)return 0;const n=es(e),i=es(t);if(n!==i)return ot(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return ot(e.booleanValue,t.booleanValue);case 2:return function(r,a){const l=Lt(r.integerValue||r.doubleValue),u=Lt(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(e,t);case 3:return uv(e.timestampValue,t.timestampValue);case 4:return uv(xo(e),xo(t));case 5:return Dd(e.stringValue,t.stringValue);case 6:return function(r,a){const l=ts(r),u=ts(a);return l.compareTo(u)}(e.bytesValue,t.bytesValue);case 7:return function(r,a){const l=r.split("/"),u=a.split("/");for(let h=0;h<l.length&&h<u.length;h++){const d=ot(l[h],u[h]);if(d!==0)return d}return ot(l.length,u.length)}(e.referenceValue,t.referenceValue);case 8:return function(r,a){const l=ot(Lt(r.latitude),Lt(a.latitude));return l!==0?l:ot(Lt(r.longitude),Lt(a.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return cv(e.arrayValue,t.arrayValue);case 10:return function(r,a){var g,E,D,M;const l=r.fields||{},u=a.fields||{},h=(g=l[Wu])==null?void 0:g.arrayValue,d=(E=u[Wu])==null?void 0:E.arrayValue,m=ot(((D=h==null?void 0:h.values)==null?void 0:D.length)||0,((M=d==null?void 0:d.values)==null?void 0:M.length)||0);return m!==0?m:cv(h,d)}(e.mapValue,t.mapValue);case 11:return function(r,a){if(r===Ul.mapValue&&a===Ul.mapValue)return 0;if(r===Ul.mapValue)return 1;if(a===Ul.mapValue)return-1;const l=r.fields||{},u=Object.keys(l),h=a.fields||{},d=Object.keys(h);u.sort(),d.sort();for(let m=0;m<u.length&&m<d.length;++m){const g=Dd(u[m],d[m]);if(g!==0)return g;const E=Gr(l[u[m]],h[d[m]]);if(E!==0)return E}return ot(u.length,d.length)}(e.mapValue,t.mapValue);default:throw Q(23264,{he:n})}}function uv(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return ot(e,t);const n=Wi(e),i=Wi(t),s=ot(n.seconds,i.seconds);return s!==0?s:ot(n.nanos,i.nanos)}function cv(e,t){const n=e.values||[],i=t.values||[];for(let s=0;s<n.length&&s<i.length;++s){const r=Gr(n[s],i[s]);if(r)return r}return ot(n.length,i.length)}function Kr(e){return xd(e)}function xd(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const i=Wi(n);return`time(${i.seconds},${i.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return ts(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return F.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let i="[",s=!0;for(const r of n.values||[])s?s=!1:i+=",",i+=xd(r);return i+"]"}(e.arrayValue):"mapValue"in e?function(n){const i=Object.keys(n.fields||{}).sort();let s="{",r=!0;for(const a of i)r?r=!1:s+=",",s+=`${a}:${xd(n.fields[a])}`;return s+"}"}(e.mapValue):Q(61005,{value:e})}function ou(e){switch(es(e)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=zc(e);return t?16+ou(t):16;case 5:return 2*e.stringValue.length;case 6:return ts(e.bytesValue).approximateByteSize();case 7:return e.referenceValue.length;case 9:return function(i){return(i.values||[]).reduce((s,r)=>s+ou(r),0)}(e.arrayValue);case 10:case 11:return function(i){let s=0;return as(i.fields,(r,a)=>{s+=r.length+ou(a)}),s}(e.mapValue);default:throw Q(13486,{value:e})}}function hv(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function Od(e){return!!e&&"integerValue"in e}function fg(e){return!!e&&"arrayValue"in e}function fv(e){return!!e&&"nullValue"in e}function dv(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function lu(e){return!!e&&"mapValue"in e}function PO(e){var n,i;return((i=(((n=e==null?void 0:e.mapValue)==null?void 0:n.fields)||{})[jS])==null?void 0:i.stringValue)===BS}function uo(e){if(e.geoPointValue)return{geoPointValue:{...e.geoPointValue}};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:{...e.timestampValue}};if(e.mapValue){const t={mapValue:{fields:{}}};return as(e.mapValue.fields,(n,i)=>t.mapValue.fields[n]=uo(i)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=uo(e.arrayValue.values[n]);return t}return{...e}}function zO(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue===UO}/**
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
 */class De{constructor(t){this.value=t}static empty(){return new De({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let i=0;i<t.length-1;++i)if(n=(n.mapValue.fields||{})[t.get(i)],!lu(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=uo(n)}setAll(t){let n=oe.emptyPath(),i={},s=[];t.forEach((a,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,i,s),i={},s=[],n=l.popLast()}a?i[l.lastSegment()]=uo(a):s.push(l.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,i,s)}delete(t){const n=this.field(t.popLast());lu(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return On(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<t.length;++i){let s=n.mapValue.fields[t.get(i)];lu(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[t.get(i)]=s),n=s}return n.mapValue.fields}applyChanges(t,n,i){as(n,(s,r)=>t[s]=r);for(const s of i)delete t[s]}clone(){return new De(uo(this.value))}}function qS(e){const t=[];return as(e.fields,(n,i)=>{const s=new oe([n]);if(lu(i)){const r=qS(i.mapValue).fields;if(r.length===0)t.push(s);else for(const a of r)t.push(s.child(a))}else t.push(s)}),new ze(t)}/**
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
 */class ge{constructor(t,n,i,s,r,a,l){this.key=t,this.documentType=n,this.version=i,this.readTime=s,this.createTime=r,this.data=a,this.documentState=l}static newInvalidDocument(t){return new ge(t,0,$.min(),$.min(),$.min(),De.empty(),0)}static newFoundDocument(t,n,i,s){return new ge(t,1,n,$.min(),i,s,0)}static newNoDocument(t,n){return new ge(t,2,n,$.min(),$.min(),De.empty(),0)}static newUnknownDocument(t,n){return new ge(t,3,n,$.min(),$.min(),De.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual($.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=De.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=De.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=$.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof ge&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ge(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class tc{constructor(t,n){this.position=t,this.inclusive=n}}function mv(e,t,n){let i=0;for(let s=0;s<e.position.length;s++){const r=t[s],a=e.position[s];if(r.field.isKeyField()?i=F.comparator(F.fromName(a.referenceValue),n.key):i=Gr(a,n.data.field(r.field)),r.dir==="desc"&&(i*=-1),i!==0)break}return i}function gv(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!On(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class ec{constructor(t,n="asc"){this.field=t,this.dir=n}}function jO(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
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
 */class HS{}class Ft extends HS{constructor(t,n,i){super(),this.field=t,this.op=n,this.value=i}static create(t,n,i){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,i):new qO(t,n,i):n==="array-contains"?new GO(t,i):n==="in"?new KO(t,i):n==="not-in"?new QO(t,i):n==="array-contains-any"?new YO(t,i):new Ft(t,n,i)}static createKeyFieldInFilter(t,n,i){return n==="in"?new HO(t,i):new FO(t,i)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Gr(n,this.value)):n!==null&&es(this.value)===es(n)&&this.matchesComparison(Gr(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return Q(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class gn extends HS{constructor(t,n){super(),this.filters=t,this.op=n,this.Pe=null}static create(t,n){return new gn(t,n)}matches(t){return FS(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function FS(e){return e.op==="and"}function GS(e){return BO(e)&&FS(e)}function BO(e){for(const t of e.filters)if(t instanceof gn)return!1;return!0}function Md(e){if(e instanceof Ft)return e.field.canonicalString()+e.op.toString()+Kr(e.value);if(GS(e))return e.filters.map(t=>Md(t)).join(",");{const t=e.filters.map(n=>Md(n)).join(",");return`${e.op}(${t})`}}function KS(e,t){return e instanceof Ft?function(i,s){return s instanceof Ft&&i.op===s.op&&i.field.isEqual(s.field)&&On(i.value,s.value)}(e,t):e instanceof gn?function(i,s){return s instanceof gn&&i.op===s.op&&i.filters.length===s.filters.length?i.filters.reduce((r,a,l)=>r&&KS(a,s.filters[l]),!0):!1}(e,t):void Q(19439)}function QS(e){return e instanceof Ft?function(n){return`${n.field.canonicalString()} ${n.op} ${Kr(n.value)}`}(e):e instanceof gn?function(n){return n.op.toString()+" {"+n.getFilters().map(QS).join(" ,")+"}"}(e):"Filter"}class qO extends Ft{constructor(t,n,i){super(t,n,i),this.key=F.fromName(i.referenceValue)}matches(t){const n=F.comparator(t.key,this.key);return this.matchesComparison(n)}}class HO extends Ft{constructor(t,n){super(t,"in",n),this.keys=YS("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class FO extends Ft{constructor(t,n){super(t,"not-in",n),this.keys=YS("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function YS(e,t){var n;return(((n=t.arrayValue)==null?void 0:n.values)||[]).map(i=>F.fromName(i.referenceValue))}class GO extends Ft{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return fg(n)&&Mo(n.arrayValue,this.value)}}class KO extends Ft{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Mo(this.value.arrayValue,n)}}class QO extends Ft{constructor(t,n){super(t,"not-in",n)}matches(t){if(Mo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Mo(this.value.arrayValue,n)}}class YO extends Ft{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!fg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>Mo(this.value.arrayValue,i))}}/**
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
 */class XO{constructor(t,n=null,i=[],s=[],r=null,a=null,l=null){this.path=t,this.collectionGroup=n,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=a,this.endAt=l,this.Te=null}}function pv(e,t=null,n=[],i=[],s=null,r=null,a=null){return new XO(e,t,n,i,s,r,a)}function dg(e){const t=Z(e);if(t.Te===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(i=>Md(i)).join(","),n+="|ob:",n+=t.orderBy.map(i=>function(r){return r.field.canonicalString()+r.dir}(i)).join(","),Pc(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(i=>Kr(i)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(i=>Kr(i)).join(",")),t.Te=n}return t.Te}function mg(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!jO(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!KS(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!gv(e.startAt,t.startAt)&&gv(e.endAt,t.endAt)}function Vd(e){return F.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
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
 */class tl{constructor(t,n=null,i=[],s=[],r=null,a="F",l=null,u=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=a,this.startAt=l,this.endAt=u,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function $O(e,t,n,i,s,r,a,l){return new tl(e,t,n,i,s,r,a,l)}function gg(e){return new tl(e)}function yv(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function JO(e){return F.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}function XS(e){return e.collectionGroup!==null}function co(e){const t=Z(e);if(t.Ee===null){t.Ee=[];const n=new Set;for(const r of t.explicitOrderBy)t.Ee.push(r),n.add(r.field.canonicalString());const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new $t(oe.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(t).forEach(r=>{n.has(r.canonicalString())||r.isKeyField()||t.Ee.push(new ec(r,i))}),n.has(oe.keyField().canonicalString())||t.Ee.push(new ec(oe.keyField(),i))}return t.Ee}function Cn(e){const t=Z(e);return t.Ie||(t.Ie=ZO(t,co(e))),t.Ie}function ZO(e,t){if(e.limitType==="F")return pv(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(s=>{const r=s.dir==="desc"?"asc":"desc";return new ec(s.field,r)});const n=e.endAt?new tc(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new tc(e.startAt.position,e.startAt.inclusive):null;return pv(e.path,e.collectionGroup,t,e.filters,e.limit,n,i)}}function kd(e,t){const n=e.filters.concat([t]);return new tl(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function Ld(e,t,n){return new tl(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function jc(e,t){return mg(Cn(e),Cn(t))&&e.limitType===t.limitType}function $S(e){return`${dg(Cn(e))}|lt:${e.limitType}`}function ir(e){return`Query(target=${function(n){let i=n.path.canonicalString();return n.collectionGroup!==null&&(i+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(i+=`, filters: [${n.filters.map(s=>QS(s)).join(", ")}]`),Pc(n.limit)||(i+=", limit: "+n.limit),n.orderBy.length>0&&(i+=`, orderBy: [${n.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),n.startAt&&(i+=", startAt: ",i+=n.startAt.inclusive?"b:":"a:",i+=n.startAt.position.map(s=>Kr(s)).join(",")),n.endAt&&(i+=", endAt: ",i+=n.endAt.inclusive?"a:":"b:",i+=n.endAt.position.map(s=>Kr(s)).join(",")),`Target(${i})`}(Cn(e))}; limitType=${e.limitType})`}function Bc(e,t){return t.isFoundDocument()&&function(i,s){const r=s.key.path;return i.collectionGroup!==null?s.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(r):F.isDocumentKey(i.path)?i.path.isEqual(r):i.path.isImmediateParentOf(r)}(e,t)&&function(i,s){for(const r of co(i))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(e,t)&&function(i,s){for(const r of i.filters)if(!r.matches(s))return!1;return!0}(e,t)&&function(i,s){return!(i.startAt&&!function(a,l,u){const h=mv(a,l,u);return a.inclusive?h<=0:h<0}(i.startAt,co(i),s)||i.endAt&&!function(a,l,u){const h=mv(a,l,u);return a.inclusive?h>=0:h>0}(i.endAt,co(i),s))}(e,t)}function WO(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function JS(e){return(t,n)=>{let i=!1;for(const s of co(e)){const r=tM(s,t,n);if(r!==0)return r;i=i||s.field.isKeyField()}return 0}}function tM(e,t,n){const i=e.field.isKeyField()?F.comparator(t.key,n.key):function(r,a,l){const u=a.data.field(r),h=l.data.field(r);return u!==null&&h!==null?Gr(u,h):Q(42886)}(e.field,t,n);switch(e.dir){case"asc":return i;case"desc":return-1*i;default:return Q(19790,{direction:e.dir})}}/**
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
 */class Ks{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),i=this.inner[n];if(i!==void 0){for(const[s,r]of i)if(this.equalsFn(s,t))return r}}has(t){return this.get(t)!==void 0}set(t,n){const i=this.mapKeyFn(t),s=this.inner[i];if(s===void 0)return this.inner[i]=[[t,n]],void this.innerSize++;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],t))return void(s[r]=[t,n]);s.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),i=this.inner[n];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return i.length===1?delete this.inner[n]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(t){as(this.inner,(n,i)=>{for(const[s,r]of i)t(s,r)})}isEmpty(){return VS(this.inner)}size(){return this.innerSize}}/**
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
 */const eM=new xt(F.comparator);function ri(){return eM}const ZS=new xt(F.comparator);function Fa(...e){let t=ZS;for(const n of e)t=t.insert(n.key,n);return t}function WS(e){let t=ZS;return e.forEach((n,i)=>t=t.insert(n,i.overlayedDocument)),t}function Es(){return ho()}function tb(){return ho()}function ho(){return new Ks(e=>e.toString(),(e,t)=>e.isEqual(t))}const nM=new xt(F.comparator),iM=new $t(F.comparator);function lt(...e){let t=iM;for(const n of e)t=t.add(n);return t}const sM=new $t(ot);function rM(){return sM}/**
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
 */function pg(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ju(t)?"-0":t}}function eb(e){return{integerValue:""+e}}function aM(e,t){return xO(t)?eb(t):pg(e,t)}/**
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
 */class qc{constructor(){this._=void 0}}function oM(e,t,n){return e instanceof nc?function(s,r){const a={fields:{[US]:{stringValue:LS},[zS]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&hg(r)&&(r=zc(r)),r&&(a.fields[PS]=r),{mapValue:a}}(n,t):e instanceof Vo?ib(e,t):e instanceof ko?sb(e,t):function(s,r){const a=nb(s,r),l=_v(a)+_v(s.Ae);return Od(a)&&Od(s.Ae)?eb(l):pg(s.serializer,l)}(e,t)}function lM(e,t,n){return e instanceof Vo?ib(e,t):e instanceof ko?sb(e,t):n}function nb(e,t){return e instanceof ic?function(i){return Od(i)||function(r){return!!r&&"doubleValue"in r}(i)}(t)?t:{integerValue:0}:null}class nc extends qc{}class Vo extends qc{constructor(t){super(),this.elements=t}}function ib(e,t){const n=rb(t);for(const i of e.elements)n.some(s=>On(s,i))||n.push(i);return{arrayValue:{values:n}}}class ko extends qc{constructor(t){super(),this.elements=t}}function sb(e,t){let n=rb(t);for(const i of e.elements)n=n.filter(s=>!On(s,i));return{arrayValue:{values:n}}}class ic extends qc{constructor(t,n){super(),this.serializer=t,this.Ae=n}}function _v(e){return Lt(e.integerValue||e.doubleValue)}function rb(e){return fg(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function uM(e,t){return e.field.isEqual(t.field)&&function(i,s){return i instanceof Vo&&s instanceof Vo||i instanceof ko&&s instanceof ko?Fr(i.elements,s.elements,On):i instanceof ic&&s instanceof ic?On(i.Ae,s.Ae):i instanceof nc&&s instanceof nc}(e.transform,t.transform)}class cM{constructor(t,n){this.version=t,this.transformResults=n}}class Ge{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Ge}static exists(t){return new Ge(void 0,t)}static updateTime(t){return new Ge(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function uu(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Hc{}function ab(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new Fc(e.key,Ge.none()):new el(e.key,e.data,Ge.none());{const n=e.data,i=De.empty();let s=new $t(oe.comparator);for(let r of t.fields)if(!s.has(r)){let a=n.field(r);a===null&&r.length>1&&(r=r.popLast(),a=n.field(r)),a===null?i.delete(r):i.set(r,a),s=s.add(r)}return new os(e.key,i,new ze(s.toArray()),Ge.none())}}function hM(e,t,n){e instanceof el?function(s,r,a){const l=s.value.clone(),u=Ev(s.fieldTransforms,r,a.transformResults);l.setAll(u),r.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(e,t,n):e instanceof os?function(s,r,a){if(!uu(s.precondition,r))return void r.convertToUnknownDocument(a.version);const l=Ev(s.fieldTransforms,r,a.transformResults),u=r.data;u.setAll(ob(s)),u.setAll(l),r.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(e,t,n):function(s,r,a){r.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,n)}function fo(e,t,n,i){return e instanceof el?function(r,a,l,u){if(!uu(r.precondition,a))return l;const h=r.value.clone(),d=Tv(r.fieldTransforms,u,a);return h.setAll(d),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(e,t,n,i):e instanceof os?function(r,a,l,u){if(!uu(r.precondition,a))return l;const h=Tv(r.fieldTransforms,u,a),d=a.data;return d.setAll(ob(r)),d.setAll(h),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),l===null?null:l.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(m=>m.field))}(e,t,n,i):function(r,a,l){return uu(r.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(e,t,n)}function fM(e,t){let n=null;for(const i of e.fieldTransforms){const s=t.data.field(i.field),r=nb(i.transform,s||null);r!=null&&(n===null&&(n=De.empty()),n.set(i.field,r))}return n||null}function vv(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(i,s){return i===void 0&&s===void 0||!(!i||!s)&&Fr(i,s,(r,a)=>uM(r,a))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class el extends Hc{constructor(t,n,i,s=[]){super(),this.key=t,this.value=n,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class os extends Hc{constructor(t,n,i,s,r=[]){super(),this.key=t,this.data=n,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function ob(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=e.data.field(n);t.set(n,i)}}),t}function Ev(e,t,n){const i=new Map;gt(e.length===n.length,32656,{Ve:n.length,de:e.length});for(let s=0;s<n.length;s++){const r=e[s],a=r.transform,l=t.data.field(r.field);i.set(r.field,lM(a,l,n[s]))}return i}function Tv(e,t,n){const i=new Map;for(const s of e){const r=s.transform,a=n.data.field(s.field);i.set(s.field,oM(r,a,t))}return i}class Fc extends Hc{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class dM extends Hc{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class mM{constructor(t,n,i,s){this.batchId=t,this.localWriteTime=n,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(t,n){const i=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(t.key)&&hM(r,t,i[s])}}applyToLocalView(t,n){for(const i of this.baseMutations)i.key.isEqual(t.key)&&(n=fo(i,t,n,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(t.key)&&(n=fo(i,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const i=tb();return this.mutations.forEach(s=>{const r=t.get(s.key),a=r.overlayedDocument;let l=this.applyToLocalView(a,r.mutatedFields);l=n.has(s.key)?null:l;const u=ab(a,l);u!==null&&i.set(s.key,u),a.isValidDocument()||a.convertToNoDocument($.min())}),i}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),lt())}isEqual(t){return this.batchId===t.batchId&&Fr(this.mutations,t.mutations,(n,i)=>vv(n,i))&&Fr(this.baseMutations,t.baseMutations,(n,i)=>vv(n,i))}}class yg{constructor(t,n,i,s){this.batch=t,this.commitVersion=n,this.mutationResults=i,this.docVersions=s}static from(t,n,i){gt(t.mutations.length===i.length,58842,{me:t.mutations.length,fe:i.length});let s=function(){return nM}();const r=t.mutations;for(let a=0;a<r.length;a++)s=s.insert(r[a].key,i[a].version);return new yg(t,n,i,s)}}/**
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
 */class gM{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class pM{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
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
 */var jt,ht;function yM(e){switch(e){case k.OK:return Q(64938);case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0;default:return Q(15467,{code:e})}}function lb(e){if(e===void 0)return si("GRPC error has no .code"),k.UNKNOWN;switch(e){case jt.OK:return k.OK;case jt.CANCELLED:return k.CANCELLED;case jt.UNKNOWN:return k.UNKNOWN;case jt.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case jt.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case jt.INTERNAL:return k.INTERNAL;case jt.UNAVAILABLE:return k.UNAVAILABLE;case jt.UNAUTHENTICATED:return k.UNAUTHENTICATED;case jt.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case jt.NOT_FOUND:return k.NOT_FOUND;case jt.ALREADY_EXISTS:return k.ALREADY_EXISTS;case jt.PERMISSION_DENIED:return k.PERMISSION_DENIED;case jt.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case jt.ABORTED:return k.ABORTED;case jt.OUT_OF_RANGE:return k.OUT_OF_RANGE;case jt.UNIMPLEMENTED:return k.UNIMPLEMENTED;case jt.DATA_LOSS:return k.DATA_LOSS;default:return Q(39323,{code:e})}}(ht=jt||(jt={}))[ht.OK=0]="OK",ht[ht.CANCELLED=1]="CANCELLED",ht[ht.UNKNOWN=2]="UNKNOWN",ht[ht.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ht[ht.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ht[ht.NOT_FOUND=5]="NOT_FOUND",ht[ht.ALREADY_EXISTS=6]="ALREADY_EXISTS",ht[ht.PERMISSION_DENIED=7]="PERMISSION_DENIED",ht[ht.UNAUTHENTICATED=16]="UNAUTHENTICATED",ht[ht.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ht[ht.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ht[ht.ABORTED=10]="ABORTED",ht[ht.OUT_OF_RANGE=11]="OUT_OF_RANGE",ht[ht.UNIMPLEMENTED=12]="UNIMPLEMENTED",ht[ht.INTERNAL=13]="INTERNAL",ht[ht.UNAVAILABLE=14]="UNAVAILABLE",ht[ht.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function _M(){return new TextEncoder}/**
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
 */const vM=new Hi([4294967295,4294967295],0);function Av(e){const t=_M().encode(e),n=new SS;return n.update(t),new Uint8Array(n.digest())}function Sv(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),i=t.getUint32(4,!0),s=t.getUint32(8,!0),r=t.getUint32(12,!0);return[new Hi([n,i],0),new Hi([s,r],0)]}class _g{constructor(t,n,i){if(this.bitmap=t,this.padding=n,this.hashCount=i,n<0||n>=8)throw new Ga(`Invalid padding: ${n}`);if(i<0)throw new Ga(`Invalid hash count: ${i}`);if(t.length>0&&this.hashCount===0)throw new Ga(`Invalid hash count: ${i}`);if(t.length===0&&n!==0)throw new Ga(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*t.length-n,this.pe=Hi.fromNumber(this.ge)}ye(t,n,i){let s=t.add(n.multiply(Hi.fromNumber(i)));return s.compare(vM)===1&&(s=new Hi([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const n=Av(t),[i,s]=Sv(n);for(let r=0;r<this.hashCount;r++){const a=this.ye(i,s,r);if(!this.we(a))return!1}return!0}static create(t,n,i){const s=t%8==0?0:8-t%8,r=new Uint8Array(Math.ceil(t/8)),a=new _g(r,s,n);return i.forEach(l=>a.insert(l)),a}insert(t){if(this.ge===0)return;const n=Av(t),[i,s]=Sv(n);for(let r=0;r<this.hashCount;r++){const a=this.ye(i,s,r);this.Se(a)}}Se(t){const n=Math.floor(t/8),i=t%8;this.bitmap[n]|=1<<i}}class Ga extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Gc{constructor(t,n,i,s,r){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,n,i){const s=new Map;return s.set(t,nl.createSynthesizedTargetChangeForCurrentChange(t,n,i)),new Gc($.min(),s,new xt(ot),ri(),lt())}}class nl{constructor(t,n,i,s,r){this.resumeToken=t,this.current=n,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,n,i){return new nl(i,n,lt(),lt(),lt())}}/**
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
 */class cu{constructor(t,n,i,s){this.be=t,this.removedTargetIds=n,this.key=i,this.De=s}}class ub{constructor(t,n){this.targetId=t,this.Ce=n}}class cb{constructor(t,n,i=ce.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=n,this.resumeToken=i,this.cause=s}}class bv{constructor(){this.ve=0,this.Fe=wv(),this.Me=ce.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=lt(),n=lt(),i=lt();return this.Fe.forEach((s,r)=>{switch(r){case 0:t=t.add(s);break;case 2:n=n.add(s);break;case 1:i=i.add(s);break;default:Q(38017,{changeType:r})}}),new nl(this.Me,this.xe,t,n,i)}qe(){this.Oe=!1,this.Fe=wv()}Ke(t,n){this.Oe=!0,this.Fe=this.Fe.insert(t,n)}Ue(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}$e(){this.ve+=1}We(){this.ve-=1,gt(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class EM{constructor(t){this.Ge=t,this.ze=new Map,this.je=ri(),this.Je=Pl(),this.He=Pl(),this.Ze=new xt(ot)}Xe(t){for(const n of t.be)t.De&&t.De.isFoundDocument()?this.Ye(n,t.De):this.et(n,t.key,t.De);for(const n of t.removedTargetIds)this.et(n,t.key,t.De)}tt(t){this.forEachTarget(t,n=>{const i=this.nt(n);switch(t.state){case 0:this.rt(n)&&i.Le(t.resumeToken);break;case 1:i.We(),i.Ne||i.qe(),i.Le(t.resumeToken);break;case 2:i.We(),i.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(i.Qe(),i.Le(t.resumeToken));break;case 4:this.rt(n)&&(this.it(n),i.Le(t.resumeToken));break;default:Q(56790,{state:t.state})}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.ze.forEach((i,s)=>{this.rt(s)&&n(s)})}st(t){const n=t.targetId,i=t.Ce.count,s=this.ot(n);if(s){const r=s.target;if(Vd(r))if(i===0){const a=new F(r.path);this.et(n,a,ge.newNoDocument(a,$.min()))}else gt(i===1,20013,{expectedCount:i});else{const a=this._t(n);if(a!==i){const l=this.ut(t),u=l?this.ct(l,t,a):1;if(u!==0){this.it(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,h)}}}}}ut(t){const n=t.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:i="",padding:s=0},hashCount:r=0}=n;let a,l;try{a=ts(i).toUint8Array()}catch(u){if(u instanceof kS)return Us("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new _g(a,s,r)}catch(u){return Us(u instanceof Ga?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(t,n,i){return n.Ce.count===i-this.Pt(t,n.targetId)?0:2}Pt(t,n){const i=this.Ge.getRemoteKeysForTarget(n);let s=0;return i.forEach(r=>{const a=this.Ge.ht(),l=`projects/${a.projectId}/databases/${a.database}/documents/${r.path.canonicalString()}`;t.mightContain(l)||(this.et(n,r,null),s++)}),s}Tt(t){const n=new Map;this.ze.forEach((r,a)=>{const l=this.ot(a);if(l){if(r.current&&Vd(l.target)){const u=new F(l.target.path);this.Et(u).has(a)||this.It(a,u)||this.et(a,u,ge.newNoDocument(u,t))}r.Be&&(n.set(a,r.ke()),r.qe())}});let i=lt();this.He.forEach((r,a)=>{let l=!0;a.forEachWhile(u=>{const h=this.ot(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(i=i.add(r))}),this.je.forEach((r,a)=>a.setReadTime(t));const s=new Gc(t,n,this.Ze,this.je,i);return this.je=ri(),this.Je=Pl(),this.He=Pl(),this.Ze=new xt(ot),s}Ye(t,n){if(!this.rt(t))return;const i=this.It(t,n.key)?2:0;this.nt(t).Ke(n.key,i),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Et(n.key).add(t)),this.He=this.He.insert(n.key,this.Rt(n.key).add(t))}et(t,n,i){if(!this.rt(t))return;const s=this.nt(t);this.It(t,n)?s.Ke(n,1):s.Ue(n),this.He=this.He.insert(n,this.Rt(n).delete(t)),this.He=this.He.insert(n,this.Rt(n).add(t)),i&&(this.je=this.je.insert(n,i))}removeTarget(t){this.ze.delete(t)}_t(t){const n=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}$e(t){this.nt(t).$e()}nt(t){let n=this.ze.get(t);return n||(n=new bv,this.ze.set(t,n)),n}Rt(t){let n=this.He.get(t);return n||(n=new $t(ot),this.He=this.He.insert(t,n)),n}Et(t){let n=this.Je.get(t);return n||(n=new $t(ot),this.Je=this.Je.insert(t,n)),n}rt(t){const n=this.ot(t)!==null;return n||H("WatchChangeAggregator","Detected inactive target",t),n}ot(t){const n=this.ze.get(t);return n&&n.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new bv),this.Ge.getRemoteKeysForTarget(t).forEach(n=>{this.et(t,n,null)})}It(t,n){return this.Ge.getRemoteKeysForTarget(t).has(n)}}function Pl(){return new xt(F.comparator)}function wv(){return new xt(F.comparator)}const TM={asc:"ASCENDING",desc:"DESCENDING"},AM={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},SM={and:"AND",or:"OR"};class bM{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function Ud(e,t){return e.useProto3Json||Pc(t)?t:{value:t}}function sc(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function hb(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function wM(e,t){return sc(e,t.toTimestamp())}function Nn(e){return gt(!!e,49232),$.fromTimestamp(function(n){const i=Wi(n);return new It(i.seconds,i.nanos)}(e))}function vg(e,t){return Pd(e,t).canonicalString()}function Pd(e,t){const n=function(s){return new At(["projects",s.projectId,"databases",s.database])}(e).child("documents");return t===void 0?n:n.child(t)}function fb(e){const t=At.fromString(e);return gt(yb(t),10190,{key:t.toString()}),t}function zd(e,t){return vg(e.databaseId,t.path)}function pf(e,t){const n=fb(t);if(n.get(1)!==e.databaseId.projectId)throw new q(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new q(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new F(mb(n))}function db(e,t){return vg(e.databaseId,t)}function RM(e){const t=fb(e);return t.length===4?At.emptyPath():mb(t)}function jd(e){return new At(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function mb(e){return gt(e.length>4&&e.get(4)==="documents",29091,{key:e.toString()}),e.popFirst(5)}function Rv(e,t,n){return{name:zd(e,t),fields:n.value.mapValue.fields}}function IM(e,t){let n;if("targetChange"in t){t.targetChange;const i=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:Q(39313,{state:h})}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],r=function(h,d){return h.useProto3Json?(gt(d===void 0||typeof d=="string",58123),ce.fromBase64String(d||"")):(gt(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),ce.fromUint8Array(d||new Uint8Array))}(e,t.targetChange.resumeToken),a=t.targetChange.cause,l=a&&function(h){const d=h.code===void 0?k.UNKNOWN:lb(h.code);return new q(d,h.message||"")}(a);n=new cb(i,s,r,l||null)}else if("documentChange"in t){t.documentChange;const i=t.documentChange;i.document,i.document.name,i.document.updateTime;const s=pf(e,i.document.name),r=Nn(i.document.updateTime),a=i.document.createTime?Nn(i.document.createTime):$.min(),l=new De({mapValue:{fields:i.document.fields}}),u=ge.newFoundDocument(s,r,a,l),h=i.targetIds||[],d=i.removedTargetIds||[];n=new cu(h,d,u.key,u)}else if("documentDelete"in t){t.documentDelete;const i=t.documentDelete;i.document;const s=pf(e,i.document),r=i.readTime?Nn(i.readTime):$.min(),a=ge.newNoDocument(s,r),l=i.removedTargetIds||[];n=new cu([],l,a.key,a)}else if("documentRemove"in t){t.documentRemove;const i=t.documentRemove;i.document;const s=pf(e,i.document),r=i.removedTargetIds||[];n=new cu([],r,s,null)}else{if(!("filter"in t))return Q(11601,{Vt:t});{t.filter;const i=t.filter;i.targetId;const{count:s=0,unchangedNames:r}=i,a=new pM(s,r),l=i.targetId;n=new ub(l,a)}}return n}function CM(e,t){let n;if(t instanceof el)n={update:Rv(e,t.key,t.value)};else if(t instanceof Fc)n={delete:zd(e,t.key)};else if(t instanceof os)n={update:Rv(e,t.key,t.data),updateMask:UM(t.fieldMask)};else{if(!(t instanceof dM))return Q(16599,{dt:t.type});n={verify:zd(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(i=>function(r,a){const l=a.transform;if(l instanceof nc)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Vo)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ko)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof ic)return{fieldPath:a.field.canonicalString(),increment:l.Ae};throw Q(20930,{transform:a.transform})}(0,i))),t.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:wM(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:Q(27497)}(e,t.precondition)),n}function NM(e,t){return e&&e.length>0?(gt(t!==void 0,14353),e.map(n=>function(s,r){let a=s.updateTime?Nn(s.updateTime):Nn(r);return a.isEqual($.min())&&(a=Nn(r)),new cM(a,s.transformResults||[])}(n,t))):[]}function DM(e,t){return{documents:[db(e,t.path)]}}function xM(e,t){const n={structuredQuery:{}},i=t.path;let s;t.collectionGroup!==null?(s=i,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=i.popLast(),n.structuredQuery.from=[{collectionId:i.lastSegment()}]),n.parent=db(e,s);const r=function(h){if(h.length!==0)return pb(gn.create(h,"and"))}(t.filters);r&&(n.structuredQuery.where=r);const a=function(h){if(h.length!==0)return h.map(d=>function(g){return{field:sr(g.field),direction:VM(g.dir)}}(d))}(t.orderBy);a&&(n.structuredQuery.orderBy=a);const l=Ud(e,t.limit);return l!==null&&(n.structuredQuery.limit=l),t.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(t.endAt)),{ft:n,parent:s}}function OM(e){let t=RM(e.parent);const n=e.structuredQuery,i=n.from?n.from.length:0;let s=null;if(i>0){gt(i===1,65062);const d=n.from[0];d.allDescendants?s=d.collectionId:t=t.child(d.collectionId)}let r=[];n.where&&(r=function(m){const g=gb(m);return g instanceof gn&&GS(g)?g.getFilters():[g]}(n.where));let a=[];n.orderBy&&(a=function(m){return m.map(g=>function(D){return new ec(rr(D.field),function(U){switch(U){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(D.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(m){let g;return g=typeof m=="object"?m.value:m,Pc(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(m){const g=!!m.before,E=m.values||[];return new tc(E,g)}(n.startAt));let h=null;return n.endAt&&(h=function(m){const g=!m.before,E=m.values||[];return new tc(E,g)}(n.endAt)),$O(t,s,a,r,l,"F",u,h)}function MM(e,t){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Q(28987,{purpose:s})}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function gb(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const i=rr(n.unaryFilter.field);return Ft.create(i,"==",{doubleValue:NaN});case"IS_NULL":const s=rr(n.unaryFilter.field);return Ft.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=rr(n.unaryFilter.field);return Ft.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=rr(n.unaryFilter.field);return Ft.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Q(61313);default:return Q(60726)}}(e):e.fieldFilter!==void 0?function(n){return Ft.create(rr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Q(58110);default:return Q(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return gn.create(n.compositeFilter.filters.map(i=>gb(i)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Q(1026)}}(n.compositeFilter.op))}(e):Q(30097,{filter:e})}function VM(e){return TM[e]}function kM(e){return AM[e]}function LM(e){return SM[e]}function sr(e){return{fieldPath:e.canonicalString()}}function rr(e){return oe.fromServerFormat(e.fieldPath)}function pb(e){return e instanceof Ft?function(n){if(n.op==="=="){if(dv(n.value))return{unaryFilter:{field:sr(n.field),op:"IS_NAN"}};if(fv(n.value))return{unaryFilter:{field:sr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(dv(n.value))return{unaryFilter:{field:sr(n.field),op:"IS_NOT_NAN"}};if(fv(n.value))return{unaryFilter:{field:sr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:sr(n.field),op:kM(n.op),value:n.value}}}(e):e instanceof gn?function(n){const i=n.getFilters().map(s=>pb(s));return i.length===1?i[0]:{compositeFilter:{op:LM(n.op),filters:i}}}(e):Q(54877,{filter:e})}function UM(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function yb(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}function _b(e){return!!e&&typeof e._toProto=="function"&&e._protoValueType==="ProtoValue"}/**
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
 */class Di{constructor(t,n,i,s,r=$.min(),a=$.min(),l=ce.EMPTY_BYTE_STRING,u=null){this.target=t,this.targetId=n,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(t){return new Di(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new Di(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Di(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Di(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class PM{constructor(t){this.yt=t}}function zM(e){const t=OM({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Ld(t,t.limit,"L"):t}/**
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
 */class jM{constructor(){this.bn=new BM}addToCollectionParentIndex(t,n){return this.bn.add(n),L.resolve()}getCollectionParents(t,n){return L.resolve(this.bn.getEntries(n))}addFieldIndex(t,n){return L.resolve()}deleteFieldIndex(t,n){return L.resolve()}deleteAllFieldIndexes(t){return L.resolve()}createTargetIndexes(t,n){return L.resolve()}getDocumentsMatchingTarget(t,n){return L.resolve(null)}getIndexType(t,n){return L.resolve(0)}getFieldIndexes(t,n){return L.resolve([])}getNextCollectionGroupToUpdate(t){return L.resolve(null)}getMinOffset(t,n){return L.resolve(Zi.min())}getMinOffsetFromCollectionGroup(t,n){return L.resolve(Zi.min())}updateCollectionGroup(t,n,i){return L.resolve()}updateIndexEntries(t,n){return L.resolve()}}class BM{constructor(){this.index={}}add(t){const n=t.lastSegment(),i=t.popLast(),s=this.index[n]||new $t(At.comparator),r=!s.has(i);return this.index[n]=s.add(i),r}has(t){const n=t.lastSegment(),i=t.popLast(),s=this.index[n];return s&&s.has(i)}getEntries(t){return(this.index[t]||new $t(At.comparator)).toArray()}}/**
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
 */const Iv={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},vb=41943040;class Ne{static withCacheSize(t){return new Ne(t,Ne.DEFAULT_COLLECTION_PERCENTILE,Ne.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,n,i){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=i}}/**
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
 */Ne.DEFAULT_COLLECTION_PERCENTILE=10,Ne.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ne.DEFAULT=new Ne(vb,Ne.DEFAULT_COLLECTION_PERCENTILE,Ne.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ne.DISABLED=new Ne(-1,0,0);/**
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
 */class Qr{constructor(t){this.sr=t}next(){return this.sr+=2,this.sr}static _r(){return new Qr(0)}static ar(){return new Qr(-1)}}/**
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
 */const Cv="LruGarbageCollector",qM=1048576;function Nv([e,t],[n,i]){const s=ot(e,n);return s===0?ot(t,i):s}class HM{constructor(t){this.Pr=t,this.buffer=new $t(Nv),this.Tr=0}Er(){return++this.Tr}Ir(t){const n=[t,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const i=this.buffer.last();Nv(n,i)<0&&(this.buffer=this.buffer.delete(i).add(n))}}get maxValue(){return this.buffer.last()[0]}}class FM{constructor(t,n,i){this.garbageCollector=t,this.asyncQueue=n,this.localStore=i,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(t){H(Cv,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ua(n)?H(Cv,"Ignoring IndexedDB error during garbage collection: ",n):await la(n)}await this.Ar(3e5)})}}class GM{constructor(t,n){this.Vr=t,this.params=n}calculateTargetCount(t,n){return this.Vr.dr(t).next(i=>Math.floor(n/100*i))}nthSequenceNumber(t,n){if(n===0)return L.resolve(Uc.ce);const i=new HM(n);return this.Vr.forEachTarget(t,s=>i.Ir(s.sequenceNumber)).next(()=>this.Vr.mr(t,s=>i.Ir(s))).next(()=>i.maxValue)}removeTargets(t,n,i){return this.Vr.removeTargets(t,n,i)}removeOrphanedDocuments(t,n){return this.Vr.removeOrphanedDocuments(t,n)}collect(t,n){return this.params.cacheSizeCollectionThreshold===-1?(H("LruGarbageCollector","Garbage collection skipped; disabled"),L.resolve(Iv)):this.getCacheSize(t).next(i=>i<this.params.cacheSizeCollectionThreshold?(H("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Iv):this.gr(t,n))}getCacheSize(t){return this.Vr.getCacheSize(t)}gr(t,n){let i,s,r,a,l,u,h;const d=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(H("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),s=this.params.maximumSequenceNumbersToCollect):s=m,a=Date.now(),this.nthSequenceNumber(t,s))).next(m=>(i=m,l=Date.now(),this.removeTargets(t,i,n))).next(m=>(r=m,u=Date.now(),this.removeOrphanedDocuments(t,i))).next(m=>(h=Date.now(),nr()<=at.DEBUG&&H("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-d}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${r} targets in `+(u-l)+`ms
	Removed ${m} documents in `+(h-u)+`ms
Total Duration: ${h-d}ms`),L.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:r,documentsRemoved:m})))}}function KM(e,t){return new GM(e,t)}/**
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
 */class QM{constructor(){this.changes=new Ks(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,ge.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?L.resolve(i):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class YM{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
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
 */class XM{constructor(t,n,i,s){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=i,this.indexManager=s}getDocument(t,n){let i=null;return this.documentOverlayCache.getOverlay(t,n).next(s=>(i=s,this.remoteDocumentCache.getEntry(t,n))).next(s=>(i!==null&&fo(i.mutation,s,ze.empty(),It.now()),s))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(i=>this.getLocalViewOfDocuments(t,i,lt()).next(()=>i))}getLocalViewOfDocuments(t,n,i=lt()){const s=Es();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,i).next(r=>{let a=Fa();return r.forEach((l,u)=>{a=a.insert(l,u.overlayedDocument)}),a}))}getOverlayedDocuments(t,n){const i=Es();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,lt()))}populateOverlays(t,n,i){const s=[];return i.forEach(r=>{n.has(r)||s.push(r)}),this.documentOverlayCache.getOverlays(t,s).next(r=>{r.forEach((a,l)=>{n.set(a,l)})})}computeViews(t,n,i,s){let r=ri();const a=ho(),l=function(){return ho()}();return n.forEach((u,h)=>{const d=i.get(h.key);s.has(h.key)&&(d===void 0||d.mutation instanceof os)?r=r.insert(h.key,h):d!==void 0?(a.set(h.key,d.mutation.getFieldMask()),fo(d.mutation,h,d.mutation.getFieldMask(),It.now())):a.set(h.key,ze.empty())}),this.recalculateAndSaveOverlays(t,r).next(u=>(u.forEach((h,d)=>a.set(h,d)),n.forEach((h,d)=>l.set(h,new YM(d,a.get(h)??null))),l))}recalculateAndSaveOverlays(t,n){const i=ho();let s=new xt((a,l)=>a-l),r=lt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(a=>{for(const l of a)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let d=i.get(u)||ze.empty();d=l.applyToLocalView(h,d),i.set(u,d);const m=(s.get(l.batchId)||lt()).add(u);s=s.insert(l.batchId,m)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,d=u.value,m=tb();d.forEach(g=>{if(!r.has(g)){const E=ab(n.get(g),i.get(g));E!==null&&m.set(g,E),r=r.add(g)}}),a.push(this.documentOverlayCache.saveOverlays(t,h,m))}return L.waitFor(a)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(i=>this.recalculateAndSaveOverlays(t,i))}getDocumentsMatchingQuery(t,n,i,s){return JO(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):XS(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,i,s):this.getDocumentsMatchingCollectionQuery(t,n,i,s)}getNextDocuments(t,n,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,i,s).next(r=>{const a=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,i.largestBatchId,s-r.size):L.resolve(Es());let l=Do,u=r;return a.next(h=>L.forEach(h,(d,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),r.get(d)?L.resolve():this.remoteDocumentCache.getEntry(t,d).next(g=>{u=u.insert(d,g)}))).next(()=>this.populateOverlays(t,h,r)).next(()=>this.computeViews(t,u,h,lt())).next(d=>({batchId:l,changes:WS(d)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new F(n)).next(i=>{let s=Fa();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}getDocumentsMatchingCollectionGroupQuery(t,n,i,s){const r=n.collectionGroup;let a=Fa();return this.indexManager.getCollectionParents(t,r).next(l=>L.forEach(l,u=>{const h=function(m,g){return new tl(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(r));return this.getDocumentsMatchingCollectionQuery(t,h,i,s).next(d=>{d.forEach((m,g)=>{a=a.insert(m,g)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,n,i,s){let r;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,i.largestBatchId).next(a=>(r=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,i,r,s))).next(a=>{r.forEach((u,h)=>{const d=h.getKey();a.get(d)===null&&(a=a.insert(d,ge.newInvalidDocument(d)))});let l=Fa();return a.forEach((u,h)=>{const d=r.get(u);d!==void 0&&fo(d.mutation,h,ze.empty(),It.now()),Bc(n,h)&&(l=l.insert(u,h))}),l})}}/**
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
 */class $M{constructor(t){this.serializer=t,this.Nr=new Map,this.Br=new Map}getBundleMetadata(t,n){return L.resolve(this.Nr.get(n))}saveBundleMetadata(t,n){return this.Nr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Nn(s.createTime)}}(n)),L.resolve()}getNamedQuery(t,n){return L.resolve(this.Br.get(n))}saveNamedQuery(t,n){return this.Br.set(n.name,function(s){return{name:s.name,query:zM(s.bundledQuery),readTime:Nn(s.readTime)}}(n)),L.resolve()}}/**
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
 */class JM{constructor(){this.overlays=new xt(F.comparator),this.Lr=new Map}getOverlay(t,n){return L.resolve(this.overlays.get(n))}getOverlays(t,n){const i=Es();return L.forEach(n,s=>this.getOverlay(t,s).next(r=>{r!==null&&i.set(s,r)})).next(()=>i)}saveOverlays(t,n,i){return i.forEach((s,r)=>{this.St(t,n,r)}),L.resolve()}removeOverlaysForBatchId(t,n,i){const s=this.Lr.get(i);return s!==void 0&&(s.forEach(r=>this.overlays=this.overlays.remove(r)),this.Lr.delete(i)),L.resolve()}getOverlaysForCollection(t,n,i){const s=Es(),r=n.length+1,a=new F(n.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===r&&u.largestBatchId>i&&s.set(u.getKey(),u)}return L.resolve(s)}getOverlaysForCollectionGroup(t,n,i,s){let r=new xt((h,d)=>h-d);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>i){let d=r.get(h.largestBatchId);d===null&&(d=Es(),r=r.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const l=Es(),u=r.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,d)=>l.set(h,d)),!(l.size()>=s)););return L.resolve(l)}St(t,n,i){const s=this.overlays.get(i.key);if(s!==null){const a=this.Lr.get(s.largestBatchId).delete(i.key);this.Lr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(i.key,new gM(n,i));let r=this.Lr.get(n);r===void 0&&(r=lt(),this.Lr.set(n,r)),this.Lr.set(n,r.add(i.key))}}/**
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
 */class ZM{constructor(){this.sessionToken=ce.EMPTY_BYTE_STRING}getSessionToken(t){return L.resolve(this.sessionToken)}setSessionToken(t,n){return this.sessionToken=n,L.resolve()}}/**
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
 */class Eg{constructor(){this.kr=new $t(Wt.qr),this.Kr=new $t(Wt.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(t,n){const i=new Wt(t,n);this.kr=this.kr.add(i),this.Kr=this.Kr.add(i)}$r(t,n){t.forEach(i=>this.addReference(i,n))}removeReference(t,n){this.Wr(new Wt(t,n))}Qr(t,n){t.forEach(i=>this.removeReference(i,n))}Gr(t){const n=new F(new At([])),i=new Wt(n,t),s=new Wt(n,t+1),r=[];return this.Kr.forEachInRange([i,s],a=>{this.Wr(a),r.push(a.key)}),r}zr(){this.kr.forEach(t=>this.Wr(t))}Wr(t){this.kr=this.kr.delete(t),this.Kr=this.Kr.delete(t)}jr(t){const n=new F(new At([])),i=new Wt(n,t),s=new Wt(n,t+1);let r=lt();return this.Kr.forEachInRange([i,s],a=>{r=r.add(a.key)}),r}containsKey(t){const n=new Wt(t,0),i=this.kr.firstAfterOrEqual(n);return i!==null&&t.isEqual(i.key)}}class Wt{constructor(t,n){this.key=t,this.Jr=n}static qr(t,n){return F.comparator(t.key,n.key)||ot(t.Jr,n.Jr)}static Ur(t,n){return ot(t.Jr,n.Jr)||F.comparator(t.key,n.key)}}/**
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
 */class WM{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Hr=new $t(Wt.qr)}checkEmpty(t){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,i,s){const r=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new mM(r,n,i,s);this.mutationQueue.push(a);for(const l of s)this.Hr=this.Hr.add(new Wt(l.key,r)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return L.resolve(a)}lookupMutationBatch(t,n){return L.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(t,n){const i=n+1,s=this.Xr(i),r=s<0?0:s;return L.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?cg:this.Yn-1)}getAllMutationBatches(t){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const i=new Wt(n,0),s=new Wt(n,Number.POSITIVE_INFINITY),r=[];return this.Hr.forEachInRange([i,s],a=>{const l=this.Zr(a.Jr);r.push(l)}),L.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,n){let i=new $t(ot);return n.forEach(s=>{const r=new Wt(s,0),a=new Wt(s,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([r,a],l=>{i=i.add(l.Jr)})}),L.resolve(this.Yr(i))}getAllMutationBatchesAffectingQuery(t,n){const i=n.path,s=i.length+1;let r=i;F.isDocumentKey(r)||(r=r.child(""));const a=new Wt(new F(r),0);let l=new $t(ot);return this.Hr.forEachWhile(u=>{const h=u.key.path;return!!i.isPrefixOf(h)&&(h.length===s&&(l=l.add(u.Jr)),!0)},a),L.resolve(this.Yr(l))}Yr(t){const n=[];return t.forEach(i=>{const s=this.Zr(i);s!==null&&n.push(s)}),n}removeMutationBatch(t,n){gt(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Hr;return L.forEach(n.mutations,s=>{const r=new Wt(s.key,n.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.Hr=i})}nr(t){}containsKey(t,n){const i=new Wt(n,0),s=this.Hr.firstAfterOrEqual(i);return L.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,L.resolve()}ei(t,n){return this.Xr(t)}Xr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Zr(t){const n=this.Xr(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class tV{constructor(t){this.ti=t,this.docs=function(){return new xt(F.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const i=n.key,s=this.docs.get(i),r=s?s.size:0,a=this.ti(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:a}),this.size+=a-r,this.indexManager.addToCollectionParentIndex(t,i.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const i=this.docs.get(n);return L.resolve(i?i.document.mutableCopy():ge.newInvalidDocument(n))}getEntries(t,n){let i=ri();return n.forEach(s=>{const r=this.docs.get(s);i=i.insert(s,r?r.document.mutableCopy():ge.newInvalidDocument(s))}),L.resolve(i)}getDocumentsMatchingQuery(t,n,i,s){let r=ri();const a=n.path,l=new F(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:d}}=u.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||IO(RO(d),i)<=0||(s.has(d.key)||Bc(n,d))&&(r=r.insert(d.key,d.mutableCopy()))}return L.resolve(r)}getAllFromCollectionGroup(t,n,i,s){Q(9500)}ni(t,n){return L.forEach(this.docs,i=>n(i))}newChangeBuffer(t){return new eV(this)}getSize(t){return L.resolve(this.size)}}class eV extends QM{constructor(t){super(),this.Mr=t}applyChanges(t){const n=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?n.push(this.Mr.addEntry(t,s)):this.Mr.removeEntry(i)}),L.waitFor(n)}getFromCache(t,n){return this.Mr.getEntry(t,n)}getAllFromCache(t,n){return this.Mr.getEntries(t,n)}}/**
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
 */class nV{constructor(t){this.persistence=t,this.ri=new Ks(n=>dg(n),mg),this.lastRemoteSnapshotVersion=$.min(),this.highestTargetId=0,this.ii=0,this.si=new Eg,this.targetCount=0,this.oi=Qr._r()}forEachTarget(t,n){return this.ri.forEach((i,s)=>n(s)),L.resolve()}getLastRemoteSnapshotVersion(t){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return L.resolve(this.ii)}allocateTargetId(t){return this.highestTargetId=this.oi.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(t,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.ii&&(this.ii=n),L.resolve()}lr(t){this.ri.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.oi=new Qr(n),this.highestTargetId=n),t.sequenceNumber>this.ii&&(this.ii=t.sequenceNumber)}addTargetData(t,n){return this.lr(n),this.targetCount+=1,L.resolve()}updateTargetData(t,n){return this.lr(n),L.resolve()}removeTargetData(t,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(t,n,i){let s=0;const r=[];return this.ri.forEach((a,l)=>{l.sequenceNumber<=n&&i.get(l.targetId)===null&&(this.ri.delete(a),r.push(this.removeMatchingKeysForTargetId(t,l.targetId)),s++)}),L.waitFor(r).next(()=>s)}getTargetCount(t){return L.resolve(this.targetCount)}getTargetData(t,n){const i=this.ri.get(n)||null;return L.resolve(i)}addMatchingKeys(t,n,i){return this.si.$r(n,i),L.resolve()}removeMatchingKeys(t,n,i){this.si.Qr(n,i);const s=this.persistence.referenceDelegate,r=[];return s&&n.forEach(a=>{r.push(s.markPotentiallyOrphaned(t,a))}),L.waitFor(r)}removeMatchingKeysForTargetId(t,n){return this.si.Gr(n),L.resolve()}getMatchingKeysForTargetId(t,n){const i=this.si.jr(n);return L.resolve(i)}containsKey(t,n){return L.resolve(this.si.containsKey(n))}}/**
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
 */class Eb{constructor(t,n){this._i={},this.overlays={},this.ai=new Uc(0),this.ui=!1,this.ui=!0,this.ci=new ZM,this.referenceDelegate=t(this),this.li=new nV(this),this.indexManager=new jM,this.remoteDocumentCache=function(s){return new tV(s)}(i=>this.referenceDelegate.hi(i)),this.serializer=new PM(n),this.Pi=new $M(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new JM,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let i=this._i[t.toKey()];return i||(i=new WM(n,this.referenceDelegate),this._i[t.toKey()]=i),i}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(t,n,i){H("MemoryPersistence","Starting transaction:",t);const s=new iV(this.ai.next());return this.referenceDelegate.Ti(),i(s).next(r=>this.referenceDelegate.Ei(s).next(()=>r)).toPromise().then(r=>(s.raiseOnCommittedEvent(),r))}Ii(t,n){return L.or(Object.values(this._i).map(i=>()=>i.containsKey(t,n)))}}class iV extends NO{constructor(t){super(),this.currentSequenceNumber=t}}class Tg{constructor(t){this.persistence=t,this.Ri=new Eg,this.Ai=null}static Vi(t){return new Tg(t)}get di(){if(this.Ai)return this.Ai;throw Q(60996)}addReference(t,n,i){return this.Ri.addReference(i,n),this.di.delete(i.toString()),L.resolve()}removeReference(t,n,i){return this.Ri.removeReference(i,n),this.di.add(i.toString()),L.resolve()}markPotentiallyOrphaned(t,n){return this.di.add(n.toString()),L.resolve()}removeTarget(t,n){this.Ri.Gr(n.targetId).forEach(s=>this.di.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(t,n.targetId).next(s=>{s.forEach(r=>this.di.add(r.toString()))}).next(()=>i.removeTargetData(t,n))}Ti(){this.Ai=new Set}Ei(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.di,i=>{const s=F.fromPath(i);return this.mi(t,s).next(r=>{r||n.removeEntry(s,$.min())})}).next(()=>(this.Ai=null,n.apply(t)))}updateLimboDocument(t,n){return this.mi(t,n).next(i=>{i?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(t){return 0}mi(t,n){return L.or([()=>L.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ii(t,n)])}}class rc{constructor(t,n){this.persistence=t,this.fi=new Ks(i=>OO(i.path),(i,s)=>i.isEqual(s)),this.garbageCollector=KM(this,n)}static Vi(t,n){return new rc(t,n)}Ti(){}Ei(t){return L.resolve()}forEachTarget(t,n){return this.persistence.getTargetCache().forEachTarget(t,n)}dr(t){const n=this.pr(t);return this.persistence.getTargetCache().getTargetCount(t).next(i=>n.next(s=>i+s))}pr(t){let n=0;return this.mr(t,i=>{n++}).next(()=>n)}mr(t,n){return L.forEach(this.fi,(i,s)=>this.wr(t,i,s).next(r=>r?L.resolve():n(s)))}removeTargets(t,n,i){return this.persistence.getTargetCache().removeTargets(t,n,i)}removeOrphanedDocuments(t,n){let i=0;const s=this.persistence.getRemoteDocumentCache(),r=s.newChangeBuffer();return s.ni(t,a=>this.wr(t,a,n).next(l=>{l||(i++,r.removeEntry(a,$.min()))})).next(()=>r.apply(t)).next(()=>i)}markPotentiallyOrphaned(t,n){return this.fi.set(n,t.currentSequenceNumber),L.resolve()}removeTarget(t,n){const i=n.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,i)}addReference(t,n,i){return this.fi.set(i,t.currentSequenceNumber),L.resolve()}removeReference(t,n,i){return this.fi.set(i,t.currentSequenceNumber),L.resolve()}updateLimboDocument(t,n){return this.fi.set(n,t.currentSequenceNumber),L.resolve()}hi(t){let n=t.key.toString().length;return t.isFoundDocument()&&(n+=ou(t.data.value)),n}wr(t,n,i){return L.or([()=>this.persistence.Ii(t,n),()=>this.persistence.getTargetCache().containsKey(t,n),()=>{const s=this.fi.get(n);return L.resolve(s!==void 0&&s>i)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class Ag{constructor(t,n,i,s){this.targetId=t,this.fromCache=n,this.Ts=i,this.Es=s}static Is(t,n){let i=lt(),s=lt();for(const r of n.docChanges)switch(r.type){case 0:i=i.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new Ag(t,n.fromCache,i,s)}}/**
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
 */class sV{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class rV{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return bC()?8:DO(pe())>0?6:4}()}initialize(t,n){this.fs=t,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(t,n,i,s){const r={result:null};return this.gs(t,n).next(a=>{r.result=a}).next(()=>{if(!r.result)return this.ps(t,n,s,i).next(a=>{r.result=a})}).next(()=>{if(r.result)return;const a=new sV;return this.ys(t,n,a).next(l=>{if(r.result=l,this.As)return this.ws(t,n,a,l.size)})}).next(()=>r.result)}ws(t,n,i,s){return i.documentReadCount<this.Vs?(nr()<=at.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",ir(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),L.resolve()):(nr()<=at.DEBUG&&H("QueryEngine","Query:",ir(n),"scans",i.documentReadCount,"local documents and returns",s,"documents as results."),i.documentReadCount>this.ds*s?(nr()<=at.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",ir(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Cn(n))):L.resolve())}gs(t,n){if(yv(n))return L.resolve(null);let i=Cn(n);return this.indexManager.getIndexType(t,i).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Ld(n,null,"F"),i=Cn(n)),this.indexManager.getDocumentsMatchingTarget(t,i).next(r=>{const a=lt(...r);return this.fs.getDocuments(t,a).next(l=>this.indexManager.getMinOffset(t,i).next(u=>{const h=this.Ss(n,l);return this.bs(n,h,a,u.readTime)?this.gs(t,Ld(n,null,"F")):this.Ds(t,h,n,u)}))})))}ps(t,n,i,s){return yv(n)||s.isEqual($.min())?L.resolve(null):this.fs.getDocuments(t,i).next(r=>{const a=this.Ss(n,r);return this.bs(n,a,i,s)?L.resolve(null):(nr()<=at.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ir(n)),this.Ds(t,a,n,wO(s,Do)).next(l=>l))})}Ss(t,n){let i=new $t(JS(t));return n.forEach((s,r)=>{Bc(t,r)&&(i=i.add(r))}),i}bs(t,n,i,s){if(t.limit===null)return!1;if(i.size!==n.size)return!0;const r=t.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}ys(t,n,i){return nr()<=at.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",ir(n)),this.fs.getDocumentsMatchingQuery(t,n,Zi.min(),i)}Ds(t,n,i,s){return this.fs.getDocumentsMatchingQuery(t,i,s).next(r=>(n.forEach(a=>{r=r.insert(a.key,a)}),r))}}/**
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
 */const Sg="LocalStore",aV=3e8;class oV{constructor(t,n,i,s){this.persistence=t,this.Cs=n,this.serializer=s,this.vs=new xt(ot),this.Fs=new Ks(r=>dg(r),mg),this.Ms=new Map,this.xs=t.getRemoteDocumentCache(),this.li=t.getTargetCache(),this.Pi=t.getBundleCache(),this.Os(i)}Os(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new XM(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.vs))}}function lV(e,t,n,i){return new oV(e,t,n,i)}async function Tb(e,t){const n=Z(e);return await n.persistence.runTransaction("Handle user change","readonly",i=>{let s;return n.mutationQueue.getAllMutationBatches(i).next(r=>(s=r,n.Os(t),n.mutationQueue.getAllMutationBatches(i))).next(r=>{const a=[],l=[];let u=lt();for(const h of s){a.push(h.batchId);for(const d of h.mutations)u=u.add(d.key)}for(const h of r){l.push(h.batchId);for(const d of h.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(i,u).next(h=>({Ns:h,removedBatchIds:a,addedBatchIds:l}))})})}function uV(e,t){const n=Z(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=t.batch.keys(),r=n.xs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,d){const m=h.batch,g=m.keys();let E=L.resolve();return g.forEach(D=>{E=E.next(()=>d.getEntry(u,D)).next(M=>{const U=h.docVersions.get(D);gt(U!==null,48541),M.version.compareTo(U)<0&&(m.applyToRemoteDocument(M,h),M.isValidDocument()&&(M.setReadTime(h.commitVersion),d.addEntry(M)))})}),E.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,i,t,r).next(()=>r.apply(i)).next(()=>n.mutationQueue.performConsistencyCheck(i)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(i,s,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(l){let u=lt();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(t))).next(()=>n.localDocuments.getDocuments(i,s))})}function Ab(e){const t=Z(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.li.getLastRemoteSnapshotVersion(n))}function cV(e,t){const n=Z(e),i=t.snapshotVersion;let s=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const a=n.xs.newChangeBuffer({trackRemovals:!0});s=n.vs;const l=[];t.targetChanges.forEach((d,m)=>{const g=s.get(m);if(!g)return;l.push(n.li.removeMatchingKeys(r,d.removedDocuments,m).next(()=>n.li.addMatchingKeys(r,d.addedDocuments,m)));let E=g.withSequenceNumber(r.currentSequenceNumber);t.targetMismatches.get(m)!==null?E=E.withResumeToken(ce.EMPTY_BYTE_STRING,$.min()).withLastLimboFreeSnapshotVersion($.min()):d.resumeToken.approximateByteSize()>0&&(E=E.withResumeToken(d.resumeToken,i)),s=s.insert(m,E),function(M,U,b){return M.resumeToken.approximateByteSize()===0||U.snapshotVersion.toMicroseconds()-M.snapshotVersion.toMicroseconds()>=aV?!0:b.addedDocuments.size+b.modifiedDocuments.size+b.removedDocuments.size>0}(g,E,d)&&l.push(n.li.updateTargetData(r,E))});let u=ri(),h=lt();if(t.documentUpdates.forEach(d=>{t.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(r,d))}),l.push(hV(r,a,t.documentUpdates).next(d=>{u=d.Bs,h=d.Ls})),!i.isEqual($.min())){const d=n.li.getLastRemoteSnapshotVersion(r).next(m=>n.li.setTargetsMetadata(r,r.currentSequenceNumber,i));l.push(d)}return L.waitFor(l).next(()=>a.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,u,h)).next(()=>u)}).then(r=>(n.vs=s,r))}function hV(e,t,n){let i=lt(),s=lt();return n.forEach(r=>i=i.add(r)),t.getEntries(e,i).next(r=>{let a=ri();return n.forEach((l,u)=>{const h=r.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual($.min())?(t.removeEntry(l,u.readTime),a=a.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(t.addEntry(u),a=a.insert(l,u)):H(Sg,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Bs:a,Ls:s}})}function fV(e,t){const n=Z(e);return n.persistence.runTransaction("Get next mutation batch","readonly",i=>(t===void 0&&(t=cg),n.mutationQueue.getNextMutationBatchAfterBatchId(i,t)))}function dV(e,t){const n=Z(e);return n.persistence.runTransaction("Allocate target","readwrite",i=>{let s;return n.li.getTargetData(i,t).next(r=>r?(s=r,L.resolve(s)):n.li.allocateTargetId(i).next(a=>(s=new Di(t,a,"TargetPurposeListen",i.currentSequenceNumber),n.li.addTargetData(i,s).next(()=>s))))}).then(i=>{const s=n.vs.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.vs=n.vs.insert(i.targetId,i),n.Fs.set(t,i.targetId)),i})}async function Bd(e,t,n){const i=Z(e),s=i.vs.get(t),r=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",r,a=>i.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!ua(a))throw a;H(Sg,`Failed to update sequence numbers for target ${t}: ${a}`)}i.vs=i.vs.remove(t),i.Fs.delete(s.target)}function Dv(e,t,n){const i=Z(e);let s=$.min(),r=lt();return i.persistence.runTransaction("Execute query","readwrite",a=>function(u,h,d){const m=Z(u),g=m.Fs.get(d);return g!==void 0?L.resolve(m.vs.get(g)):m.li.getTargetData(h,d)}(i,a,Cn(t)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,i.li.getMatchingKeysForTargetId(a,l.targetId).next(u=>{r=u})}).next(()=>i.Cs.getDocumentsMatchingQuery(a,t,n?s:$.min(),n?r:lt())).next(l=>(mV(i,WO(t),l),{documents:l,ks:r})))}function mV(e,t,n){let i=e.Ms.get(t)||$.min();n.forEach((s,r)=>{r.readTime.compareTo(i)>0&&(i=r.readTime)}),e.Ms.set(t,i)}class xv{constructor(){this.activeTargetIds=rM()}Qs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ws(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class gV{constructor(){this.vo=new xv,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,i){}addLocalQueryTarget(t,n=!0){return n&&this.vo.Qs(t),this.Fo[t]||"not-current"}updateQueryState(t,n,i){this.Fo[t]=n}removeLocalQueryTarget(t){this.vo.Gs(t)}isLocalQueryTarget(t){return this.vo.activeTargetIds.has(t)}clearQueryState(t){delete this.Fo[t]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(t){return this.vo.activeTargetIds.has(t)}start(){return this.vo=new xv,Promise.resolve()}handleUserChange(t,n,i){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class pV{Mo(t){}shutdown(){}}/**
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
 */const Ov="ConnectivityMonitor";class Mv{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(t){this.Lo.push(t)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){H(Ov,"Network connectivity changed: AVAILABLE");for(const t of this.Lo)t(0)}Bo(){H(Ov,"Network connectivity changed: UNAVAILABLE");for(const t of this.Lo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let zl=null;function qd(){return zl===null?zl=function(){return 268435456+Math.round(2147483648*Math.random())}():zl++,"0x"+zl.toString(16)}/**
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
 */const yf="RestConnection",yV={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class _V{get qo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ko=n+"://"+t.host,this.Uo=`projects/${i}/databases/${s}`,this.$o=this.databaseId.database===Zu?`project_id=${i}`:`project_id=${i}&database_id=${s}`}Wo(t,n,i,s,r){const a=qd(),l=this.Qo(t,n.toUriEncodedString());H(yf,`Sending RPC '${t}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,s,r);const{host:h}=new URL(l),d=Xo(h);return this.zo(t,l,u,i,d).then(m=>(H(yf,`Received RPC '${t}' ${a}: `,m),m),m=>{throw Us(yf,`RPC '${t}' ${a} failed with error: `,m,"url: ",l,"request:",i),m})}jo(t,n,i,s,r,a){return this.Wo(t,n,i,s,r)}Go(t,n,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+oa}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,r)=>t[r]=s),i&&i.headers.forEach((s,r)=>t[r]=s)}Qo(t,n){const i=yV[t];let s=`${this.Ko}/v1/${n}:${i}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
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
 */class vV{constructor(t){this.Jo=t.Jo,this.Ho=t.Ho}Zo(t){this.Xo=t}Yo(t){this.e_=t}t_(t){this.n_=t}onMessage(t){this.r_=t}close(){this.Ho()}send(t){this.Jo(t)}i_(){this.Xo()}s_(){this.e_()}o_(t){this.n_(t)}__(t){this.r_(t)}}/**
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
 */const de="WebChannelConnection",La=(e,t,n)=>{e.listen(t,i=>{try{n(i)}catch(s){setTimeout(()=>{throw s},0)}})};class Dr extends _V{constructor(t){super(t),this.a_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}static u_(){if(!Dr.c_){const t=IS();La(t,RS.STAT_EVENT,n=>{n.stat===Nd.PROXY?H(de,"STAT_EVENT: detected buffering proxy"):n.stat===Nd.NOPROXY&&H(de,"STAT_EVENT: detected no buffering proxy")}),Dr.c_=!0}}zo(t,n,i,s,r){const a=qd();return new Promise((l,u)=>{const h=new bS;h.setWithCredentials(!0),h.listenOnce(wS.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case au.NO_ERROR:const m=h.getResponseJson();H(de,`XHR for RPC '${t}' ${a} received:`,JSON.stringify(m)),l(m);break;case au.TIMEOUT:H(de,`RPC '${t}' ${a} timed out`),u(new q(k.DEADLINE_EXCEEDED,"Request time out"));break;case au.HTTP_ERROR:const g=h.getStatus();if(H(de,`RPC '${t}' ${a} failed with status:`,g,"response text:",h.getResponseText()),g>0){let E=h.getResponseJson();Array.isArray(E)&&(E=E[0]);const D=E==null?void 0:E.error;if(D&&D.status&&D.message){const M=function(b){const A=b.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf(A)>=0?A:k.UNKNOWN}(D.status);u(new q(M,D.message))}else u(new q(k.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new q(k.UNAVAILABLE,"Connection failed."));break;default:Q(9055,{l_:t,streamId:a,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{H(de,`RPC '${t}' ${a} completed.`)}});const d=JSON.stringify(s);H(de,`RPC '${t}' ${a} sending request:`,s),h.send(n,"POST",d,i,15)})}T_(t,n,i){const s=qd(),r=[this.Ko,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,n,i),l.encodeInitMessageHeaders=!0;const h=r.join("");H(de,`Creating RPC '${t}' stream ${s}: ${h}`,l);const d=a.createWebChannel(h,l);this.E_(d);let m=!1,g=!1;const E=new vV({Jo:D=>{g?H(de,`Not sending because RPC '${t}' stream ${s} is closed:`,D):(m||(H(de,`Opening RPC '${t}' stream ${s} transport.`),d.open(),m=!0),H(de,`RPC '${t}' stream ${s} sending:`,D),d.send(D))},Ho:()=>d.close()});return La(d,Ha.EventType.OPEN,()=>{g||(H(de,`RPC '${t}' stream ${s} transport opened.`),E.i_())}),La(d,Ha.EventType.CLOSE,()=>{g||(g=!0,H(de,`RPC '${t}' stream ${s} transport closed`),E.o_(),this.I_(d))}),La(d,Ha.EventType.ERROR,D=>{g||(g=!0,Us(de,`RPC '${t}' stream ${s} transport errored. Name:`,D.name,"Message:",D.message),E.o_(new q(k.UNAVAILABLE,"The operation could not be completed")))}),La(d,Ha.EventType.MESSAGE,D=>{var M;if(!g){const U=D.data[0];gt(!!U,16349);const b=U,A=(b==null?void 0:b.error)||((M=b[0])==null?void 0:M.error);if(A){H(de,`RPC '${t}' stream ${s} received error:`,A);const C=A.status;let x=function(_){const y=jt[_];if(y!==void 0)return lb(y)}(C),z=A.message;C==="NOT_FOUND"&&z.includes("database")&&z.includes("does not exist")&&z.includes(this.databaseId.database)&&Us(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),x===void 0&&(x=k.INTERNAL,z="Unknown error status: "+C+" with message "+A.message),g=!0,E.o_(new q(x,z)),d.close()}else H(de,`RPC '${t}' stream ${s} received:`,U),E.__(U)}}),Dr.u_(),setTimeout(()=>{E.s_()},0),E}terminate(){this.a_.forEach(t=>t.close()),this.a_=[]}E_(t){this.a_.push(t)}I_(t){this.a_=this.a_.filter(n=>n===t)}Go(t,n,i){super.Go(t,n,i),this.databaseInfo.apiKey&&(t["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return CS()}}/**
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
 */function EV(e){return new Dr(e)}function _f(){return typeof document<"u"?document:null}/**
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
 */function Kc(e){return new bM(e,!0)}/**
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
 */Dr.c_=!1;class Sb{constructor(t,n,i=1e3,s=1.5,r=6e4){this.Ci=t,this.timerId=n,this.R_=i,this.A_=s,this.V_=r,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(t){this.cancel();const n=Math.floor(this.d_+this.y_()),i=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-i);s>0&&H("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),t())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const Vv="PersistentStream";class bb{constructor(t,n,i,s,r,a,l,u){this.Ci=t,this.S_=i,this.b_=s,this.connection=r,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Sb(t,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(t){this.K_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,n){this.K_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():n&&n.code===k.RESOURCE_EXHAUSTED?(si(n.toString()),si("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.t_(n)}W_(){}auth(){this.state=1;const t=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.D_===n&&this.G_(i,s)},i=>{t(()=>{const s=new q(k.UNKNOWN,"Fetching auth token failed: "+i.message);return this.z_(s)})})}G_(t,n){const i=this.Q_(this.D_);this.stream=this.j_(t,n),this.stream.Zo(()=>{i(()=>this.listener.Zo())}),this.stream.Yo(()=>{i(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(s=>{i(()=>this.z_(s))}),this.stream.onMessage(s=>{i(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(t){return H(Vv,`close with error: ${t}`),this.stream=null,this.close(4,t)}Q_(t){return n=>{this.Ci.enqueueAndForget(()=>this.D_===t?n():(H(Vv,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class TV extends bb{constructor(t,n,i,s,r,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,i,s,a),this.serializer=r}j_(t,n){return this.connection.T_("Listen",t,n)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const n=IM(this.serializer,t),i=function(r){if(!("targetChange"in r))return $.min();const a=r.targetChange;return a.targetIds&&a.targetIds.length?$.min():a.readTime?Nn(a.readTime):$.min()}(t);return this.listener.H_(n,i)}Z_(t){const n={};n.database=jd(this.serializer),n.addTarget=function(r,a){let l;const u=a.target;if(l=Vd(u)?{documents:DM(r,u)}:{query:xM(r,u).ft},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=hb(r,a.resumeToken);const h=Ud(r,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo($.min())>0){l.readTime=sc(r,a.snapshotVersion.toTimestamp());const h=Ud(r,a.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,t);const i=MM(this.serializer,t);i&&(n.labels=i),this.q_(n)}X_(t){const n={};n.database=jd(this.serializer),n.removeTarget=t,this.q_(n)}}class AV extends bb{constructor(t,n,i,s,r,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,i,s,a),this.serializer=r}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(t,n){return this.connection.T_("Write",t,n)}J_(t){return gt(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,gt(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){gt(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const n=NM(t.writeResults,t.commitTime),i=Nn(t.commitTime);return this.listener.na(i,n)}ra(){const t={};t.database=jd(this.serializer),this.q_(t)}ea(t){const n={streamToken:this.lastStreamToken,writes:t.map(i=>CM(this.serializer,i))};this.q_(n)}}/**
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
 */class SV{}class bV extends SV{constructor(t,n,i,s){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=i,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new q(k.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(t,n,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,a])=>this.connection.Wo(t,Pd(n,i),s,r,a)).catch(r=>{throw r.name==="FirebaseError"?(r.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new q(k.UNKNOWN,r.toString())})}jo(t,n,i,s,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.jo(t,Pd(n,i),s,a,l,r)).catch(a=>{throw a.name==="FirebaseError"?(a.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new q(k.UNKNOWN,a.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function wV(e,t,n,i){return new bV(e,t,n,i)}class RV{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(si(n),this.aa=!1):H("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Ps="RemoteStore";class IV{constructor(t,n,i,s,r){this.localStore=t,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=r,this.Aa.Mo(a=>{i.enqueueAndForget(async()=>{Qs(this)&&(H(Ps,"Restarting streams for network reachability change."),await async function(u){const h=Z(u);h.Ia.add(4),await il(h),h.Va.set("Unknown"),h.Ia.delete(4),await Qc(h)}(this))})}),this.Va=new RV(i,s)}}async function Qc(e){if(Qs(e))for(const t of e.Ra)await t(!0)}async function il(e){for(const t of e.Ra)await t(!1)}function wb(e,t){const n=Z(e);n.Ea.has(t.targetId)||(n.Ea.set(t.targetId,t),Ig(n)?Rg(n):ca(n).O_()&&wg(n,t))}function bg(e,t){const n=Z(e),i=ca(n);n.Ea.delete(t),i.O_()&&Rb(n,t),n.Ea.size===0&&(i.O_()?i.L_():Qs(n)&&n.Va.set("Unknown"))}function wg(e,t){if(e.da.$e(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo($.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}ca(e).Z_(t)}function Rb(e,t){e.da.$e(t),ca(e).X_(t)}function Rg(e){e.da=new EM({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),At:t=>e.Ea.get(t)||null,ht:()=>e.datastore.serializer.databaseId}),ca(e).start(),e.Va.ua()}function Ig(e){return Qs(e)&&!ca(e).x_()&&e.Ea.size>0}function Qs(e){return Z(e).Ia.size===0}function Ib(e){e.da=void 0}async function CV(e){e.Va.set("Online")}async function NV(e){e.Ea.forEach((t,n)=>{wg(e,t)})}async function DV(e,t){Ib(e),Ig(e)?(e.Va.ha(t),Rg(e)):e.Va.set("Unknown")}async function xV(e,t,n){if(e.Va.set("Online"),t instanceof cb&&t.state===2&&t.cause)try{await async function(s,r){const a=r.cause;for(const l of r.targetIds)s.Ea.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.Ea.delete(l),s.da.removeTarget(l))}(e,t)}catch(i){H(Ps,"Failed to remove targets %s: %s ",t.targetIds.join(","),i),await ac(e,i)}else if(t instanceof cu?e.da.Xe(t):t instanceof ub?e.da.st(t):e.da.tt(t),!n.isEqual($.min()))try{const i=await Ab(e.localStore);n.compareTo(i)>=0&&await function(r,a){const l=r.da.Tt(a);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const d=r.Ea.get(h);d&&r.Ea.set(h,d.withResumeToken(u.resumeToken,a))}}),l.targetMismatches.forEach((u,h)=>{const d=r.Ea.get(u);if(!d)return;r.Ea.set(u,d.withResumeToken(ce.EMPTY_BYTE_STRING,d.snapshotVersion)),Rb(r,u);const m=new Di(d.target,u,h,d.sequenceNumber);wg(r,m)}),r.remoteSyncer.applyRemoteEvent(l)}(e,n)}catch(i){H(Ps,"Failed to raise snapshot:",i),await ac(e,i)}}async function ac(e,t,n){if(!ua(t))throw t;e.Ia.add(1),await il(e),e.Va.set("Offline"),n||(n=()=>Ab(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{H(Ps,"Retrying IndexedDB access"),await n(),e.Ia.delete(1),await Qc(e)})}function Cb(e,t){return t().catch(n=>ac(e,n,t))}async function Yc(e){const t=Z(e),n=ns(t);let i=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:cg;for(;OV(t);)try{const s=await fV(t.localStore,i);if(s===null){t.Ta.length===0&&n.L_();break}i=s.batchId,MV(t,s)}catch(s){await ac(t,s)}Nb(t)&&Db(t)}function OV(e){return Qs(e)&&e.Ta.length<10}function MV(e,t){e.Ta.push(t);const n=ns(e);n.O_()&&n.Y_&&n.ea(t.mutations)}function Nb(e){return Qs(e)&&!ns(e).x_()&&e.Ta.length>0}function Db(e){ns(e).start()}async function VV(e){ns(e).ra()}async function kV(e){const t=ns(e);for(const n of e.Ta)t.ea(n.mutations)}async function LV(e,t,n){const i=e.Ta.shift(),s=yg.from(i,t,n);await Cb(e,()=>e.remoteSyncer.applySuccessfulWrite(s)),await Yc(e)}async function UV(e,t){t&&ns(e).Y_&&await async function(i,s){if(function(a){return yM(a)&&a!==k.ABORTED}(s.code)){const r=i.Ta.shift();ns(i).B_(),await Cb(i,()=>i.remoteSyncer.rejectFailedWrite(r.batchId,s)),await Yc(i)}}(e,t),Nb(e)&&Db(e)}async function kv(e,t){const n=Z(e);n.asyncQueue.verifyOperationInProgress(),H(Ps,"RemoteStore received new credentials");const i=Qs(n);n.Ia.add(3),await il(n),i&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Ia.delete(3),await Qc(n)}async function PV(e,t){const n=Z(e);t?(n.Ia.delete(2),await Qc(n)):t||(n.Ia.add(2),await il(n),n.Va.set("Unknown"))}function ca(e){return e.ma||(e.ma=function(n,i,s){const r=Z(n);return r.sa(),new TV(i,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(e.datastore,e.asyncQueue,{Zo:CV.bind(null,e),Yo:NV.bind(null,e),t_:DV.bind(null,e),H_:xV.bind(null,e)}),e.Ra.push(async t=>{t?(e.ma.B_(),Ig(e)?Rg(e):e.Va.set("Unknown")):(await e.ma.stop(),Ib(e))})),e.ma}function ns(e){return e.fa||(e.fa=function(n,i,s){const r=Z(n);return r.sa(),new AV(i,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(e.datastore,e.asyncQueue,{Zo:()=>Promise.resolve(),Yo:VV.bind(null,e),t_:UV.bind(null,e),ta:kV.bind(null,e),na:LV.bind(null,e)}),e.Ra.push(async t=>{t?(e.fa.B_(),await Yc(e)):(await e.fa.stop(),e.Ta.length>0&&(H(Ps,`Stopping write stream with ${e.Ta.length} pending writes`),e.Ta=[]))})),e.fa}/**
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
 */class Cg{constructor(t,n,i,s,r){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new Rs,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,i,s,r){const a=Date.now()+i,l=new Cg(t,n,a,s,r);return l.start(i),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(k.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ng(e,t){if(si("AsyncQueue",`${t}: ${e}`),ua(e))return new q(k.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class xr{static emptySet(t){return new xr(t.comparator)}constructor(t){this.comparator=t?(n,i)=>t(n,i)||F.comparator(n.key,i.key):(n,i)=>F.comparator(n.key,i.key),this.keyedMap=Fa(),this.sortedSet=new xt(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,i)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof xr)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),i=t.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,r=i.getNext().key;if(!s.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const i=new xr;return i.comparator=this.comparator,i.keyedMap=t,i.sortedSet=n,i}}/**
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
 */class Lv{constructor(){this.ga=new xt(F.comparator)}track(t){const n=t.doc.key,i=this.ga.get(n);i?t.type!==0&&i.type===3?this.ga=this.ga.insert(n,t):t.type===3&&i.type!==1?this.ga=this.ga.insert(n,{type:i.type,doc:t.doc}):t.type===2&&i.type===2?this.ga=this.ga.insert(n,{type:2,doc:t.doc}):t.type===2&&i.type===0?this.ga=this.ga.insert(n,{type:0,doc:t.doc}):t.type===1&&i.type===0?this.ga=this.ga.remove(n):t.type===1&&i.type===2?this.ga=this.ga.insert(n,{type:1,doc:i.doc}):t.type===0&&i.type===1?this.ga=this.ga.insert(n,{type:2,doc:t.doc}):Q(63341,{Vt:t,pa:i}):this.ga=this.ga.insert(n,t)}ya(){const t=[];return this.ga.inorderTraversal((n,i)=>{t.push(i)}),t}}class Yr{constructor(t,n,i,s,r,a,l,u,h){this.query=t,this.docs=n,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=r,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(t,n,i,s,r){const a=[];return n.forEach(l=>{a.push({type:0,doc:l})}),new Yr(t,n,xr.emptySet(n),a,i,s,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&jc(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,i=t.docChanges;if(n.length!==i.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==i[s].type||!n[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
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
 */class zV{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(t=>t.Da())}}class jV{constructor(){this.queries=Uv(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,i){const s=Z(n),r=s.queries;s.queries=Uv(),r.forEach((a,l)=>{for(const u of l.Sa)u.onError(i)})})(this,new q(k.ABORTED,"Firestore shutting down"))}}function Uv(){return new Ks(e=>$S(e),jc)}async function BV(e,t){const n=Z(e);let i=3;const s=t.query;let r=n.queries.get(s);r?!r.ba()&&t.Da()&&(i=2):(r=new zV,i=t.Da()?0:1);try{switch(i){case 0:r.wa=await n.onListen(s,!0);break;case 1:r.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(a){const l=Ng(a,`Initialization of query '${ir(t.query)}' failed`);return void t.onError(l)}n.queries.set(s,r),r.Sa.push(t),t.va(n.onlineState),r.wa&&t.Fa(r.wa)&&Dg(n)}async function qV(e,t){const n=Z(e),i=t.query;let s=3;const r=n.queries.get(i);if(r){const a=r.Sa.indexOf(t);a>=0&&(r.Sa.splice(a,1),r.Sa.length===0?s=t.Da()?0:1:!r.ba()&&t.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(i),n.onUnlisten(i,!0);case 1:return n.queries.delete(i),n.onUnlisten(i,!1);case 2:return n.onLastRemoteStoreUnlisten(i);default:return}}function HV(e,t){const n=Z(e);let i=!1;for(const s of t){const r=s.query,a=n.queries.get(r);if(a){for(const l of a.Sa)l.Fa(s)&&(i=!0);a.wa=s}}i&&Dg(n)}function FV(e,t,n){const i=Z(e),s=i.queries.get(t);if(s)for(const r of s.Sa)r.onError(n);i.queries.delete(t)}function Dg(e){e.Ca.forEach(t=>{t.next()})}var Hd,Pv;(Pv=Hd||(Hd={})).Ma="default",Pv.Cache="cache";class GV{constructor(t,n,i){this.query=t,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=i||{}}Fa(t){if(!this.options.includeMetadataChanges){const i=[];for(const s of t.docChanges)s.type!==3&&i.push(s);t=new Yr(t.query,t.docs,t.oldDocs,i,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),n=!0):this.La(t,this.onlineState)&&(this.ka(t),n=!0),this.Na=t,n}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),n=!0),n}La(t,n){if(!t.fromCache||!this.Da())return!0;const i=n!=="Offline";return(!this.options.qa||!i)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(t){t=Yr.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==Hd.Cache}}/**
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
 */class xb{constructor(t){this.key=t}}class Ob{constructor(t){this.key=t}}class KV{constructor(t,n){this.query=t,this.Za=n,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=lt(),this.mutatedKeys=lt(),this.eu=JS(t),this.tu=new xr(this.eu)}get nu(){return this.Za}ru(t,n){const i=n?n.iu:new Lv,s=n?n.tu:this.tu;let r=n?n.mutatedKeys:this.mutatedKeys,a=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((d,m)=>{const g=s.get(d),E=Bc(this.query,m)?m:null,D=!!g&&this.mutatedKeys.has(g.key),M=!!E&&(E.hasLocalMutations||this.mutatedKeys.has(E.key)&&E.hasCommittedMutations);let U=!1;g&&E?g.data.isEqual(E.data)?D!==M&&(i.track({type:3,doc:E}),U=!0):this.su(g,E)||(i.track({type:2,doc:E}),U=!0,(u&&this.eu(E,u)>0||h&&this.eu(E,h)<0)&&(l=!0)):!g&&E?(i.track({type:0,doc:E}),U=!0):g&&!E&&(i.track({type:1,doc:g}),U=!0,(u||h)&&(l=!0)),U&&(E?(a=a.add(E),r=M?r.add(d):r.delete(d)):(a=a.delete(d),r=r.delete(d)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const d=this.query.limitType==="F"?a.last():a.first();a=a.delete(d.key),r=r.delete(d.key),i.track({type:1,doc:d})}return{tu:a,iu:i,bs:l,mutatedKeys:r}}su(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,i,s){const r=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const a=t.iu.ya();a.sort((d,m)=>function(E,D){const M=U=>{switch(U){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q(20277,{Vt:U})}};return M(E)-M(D)}(d.type,m.type)||this.eu(d.doc,m.doc)),this.ou(i),s=s??!1;const l=n&&!s?this._u():[],u=this.Ya.size===0&&this.current&&!s?1:0,h=u!==this.Xa;return this.Xa=u,a.length!==0||h?{snapshot:new Yr(this.query,t.tu,r,a,t.mutatedKeys,u===0,h,!1,!!i&&i.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Lv,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(t){return!this.Za.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach(n=>this.Za=this.Za.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.Za=this.Za.delete(n)),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Ya;this.Ya=lt(),this.tu.forEach(i=>{this.uu(i.key)&&(this.Ya=this.Ya.add(i.key))});const n=[];return t.forEach(i=>{this.Ya.has(i)||n.push(new Ob(i))}),this.Ya.forEach(i=>{t.has(i)||n.push(new xb(i))}),n}cu(t){this.Za=t.ks,this.Ya=lt();const n=this.ru(t.documents);return this.applyChanges(n,!0)}lu(){return Yr.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const xg="SyncEngine";class QV{constructor(t,n,i){this.query=t,this.targetId=n,this.view=i}}class YV{constructor(t){this.key=t,this.hu=!1}}class XV{constructor(t,n,i,s,r,a){this.localStore=t,this.remoteStore=n,this.eventManager=i,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new Ks(l=>$S(l),jc),this.Eu=new Map,this.Iu=new Set,this.Ru=new xt(F.comparator),this.Au=new Map,this.Vu=new Eg,this.du={},this.mu=new Map,this.fu=Qr.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function $V(e,t,n=!0){const i=Pb(e);let s;const r=i.Tu.get(t);return r?(i.sharedClientState.addLocalQueryTarget(r.targetId),s=r.view.lu()):s=await Mb(i,t,n,!0),s}async function JV(e,t){const n=Pb(e);await Mb(n,t,!0,!1)}async function Mb(e,t,n,i){const s=await dV(e.localStore,Cn(t)),r=s.targetId,a=e.sharedClientState.addLocalQueryTarget(r,n);let l;return i&&(l=await ZV(e,t,r,a==="current",s.resumeToken)),e.isPrimaryClient&&n&&wb(e.remoteStore,s),l}async function ZV(e,t,n,i,s){e.pu=(m,g,E)=>async function(M,U,b,A){let C=U.view.ru(b);C.bs&&(C=await Dv(M.localStore,U.query,!1).then(({documents:_})=>U.view.ru(_,C)));const x=A&&A.targetChanges.get(U.targetId),z=A&&A.targetMismatches.get(U.targetId)!=null,P=U.view.applyChanges(C,M.isPrimaryClient,x,z);return jv(M,U.targetId,P.au),P.snapshot}(e,m,g,E);const r=await Dv(e.localStore,t,!0),a=new KV(t,r.ks),l=a.ru(r.documents),u=nl.createSynthesizedTargetChangeForCurrentChange(n,i&&e.onlineState!=="Offline",s),h=a.applyChanges(l,e.isPrimaryClient,u);jv(e,n,h.au);const d=new QV(t,n,a);return e.Tu.set(t,d),e.Eu.has(n)?e.Eu.get(n).push(t):e.Eu.set(n,[t]),h.snapshot}async function WV(e,t,n){const i=Z(e),s=i.Tu.get(t),r=i.Eu.get(s.targetId);if(r.length>1)return i.Eu.set(s.targetId,r.filter(a=>!jc(a,t))),void i.Tu.delete(t);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(s.targetId),i.sharedClientState.isActiveQueryTarget(s.targetId)||await Bd(i.localStore,s.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(s.targetId),n&&bg(i.remoteStore,s.targetId),Fd(i,s.targetId)}).catch(la)):(Fd(i,s.targetId),await Bd(i.localStore,s.targetId,!0))}async function t4(e,t){const n=Z(e),i=n.Tu.get(t),s=n.Eu.get(i.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(i.targetId),bg(n.remoteStore,i.targetId))}async function e4(e,t,n){const i=l4(e);try{const s=await function(a,l){const u=Z(a),h=It.now(),d=l.reduce((E,D)=>E.add(D.key),lt());let m,g;return u.persistence.runTransaction("Locally write mutations","readwrite",E=>{let D=ri(),M=lt();return u.xs.getEntries(E,d).next(U=>{D=U,D.forEach((b,A)=>{A.isValidDocument()||(M=M.add(b))})}).next(()=>u.localDocuments.getOverlayedDocuments(E,D)).next(U=>{m=U;const b=[];for(const A of l){const C=fM(A,m.get(A.key).overlayedDocument);C!=null&&b.push(new os(A.key,C,qS(C.value.mapValue),Ge.exists(!0)))}return u.mutationQueue.addMutationBatch(E,h,b,l)}).next(U=>{g=U;const b=U.applyToLocalDocumentSet(m,M);return u.documentOverlayCache.saveOverlays(E,U.batchId,b)})}).then(()=>({batchId:g.batchId,changes:WS(m)}))}(i.localStore,t);i.sharedClientState.addPendingMutation(s.batchId),function(a,l,u){let h=a.du[a.currentUser.toKey()];h||(h=new xt(ot)),h=h.insert(l,u),a.du[a.currentUser.toKey()]=h}(i,s.batchId,n),await sl(i,s.changes),await Yc(i.remoteStore)}catch(s){const r=Ng(s,"Failed to persist write");n.reject(r)}}async function Vb(e,t){const n=Z(e);try{const i=await cV(n.localStore,t);t.targetChanges.forEach((s,r)=>{const a=n.Au.get(r);a&&(gt(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?gt(a.hu,14607):s.removedDocuments.size>0&&(gt(a.hu,42227),a.hu=!1))}),await sl(n,i,t)}catch(i){await la(i)}}function zv(e,t,n){const i=Z(e);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const s=[];i.Tu.forEach((r,a)=>{const l=a.view.va(t);l.snapshot&&s.push(l.snapshot)}),function(a,l){const u=Z(a);u.onlineState=l;let h=!1;u.queries.forEach((d,m)=>{for(const g of m.Sa)g.va(l)&&(h=!0)}),h&&Dg(u)}(i.eventManager,t),s.length&&i.Pu.H_(s),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function n4(e,t,n){const i=Z(e);i.sharedClientState.updateQueryState(t,"rejected",n);const s=i.Au.get(t),r=s&&s.key;if(r){let a=new xt(F.comparator);a=a.insert(r,ge.newNoDocument(r,$.min()));const l=lt().add(r),u=new Gc($.min(),new Map,new xt(ot),a,l);await Vb(i,u),i.Ru=i.Ru.remove(r),i.Au.delete(t),Og(i)}else await Bd(i.localStore,t,!1).then(()=>Fd(i,t,n)).catch(la)}async function i4(e,t){const n=Z(e),i=t.batch.batchId;try{const s=await uV(n.localStore,t);Lb(n,i,null),kb(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await sl(n,s)}catch(s){await la(s)}}async function s4(e,t,n){const i=Z(e);try{const s=await function(a,l){const u=Z(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let d;return u.mutationQueue.lookupMutationBatch(h,l).next(m=>(gt(m!==null,37113),d=m.keys(),u.mutationQueue.removeMutationBatch(h,m))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,d,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,d)).next(()=>u.localDocuments.getDocuments(h,d))})}(i.localStore,t);Lb(i,t,n),kb(i,t),i.sharedClientState.updateMutationState(t,"rejected",n),await sl(i,s)}catch(s){await la(s)}}function kb(e,t){(e.mu.get(t)||[]).forEach(n=>{n.resolve()}),e.mu.delete(t)}function Lb(e,t,n){const i=Z(e);let s=i.du[i.currentUser.toKey()];if(s){const r=s.get(t);r&&(n?r.reject(n):r.resolve(),s=s.remove(t)),i.du[i.currentUser.toKey()]=s}}function Fd(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const i of e.Eu.get(t))e.Tu.delete(i),n&&e.Pu.yu(i,n);e.Eu.delete(t),e.isPrimaryClient&&e.Vu.Gr(t).forEach(i=>{e.Vu.containsKey(i)||Ub(e,i)})}function Ub(e,t){e.Iu.delete(t.path.canonicalString());const n=e.Ru.get(t);n!==null&&(bg(e.remoteStore,n),e.Ru=e.Ru.remove(t),e.Au.delete(n),Og(e))}function jv(e,t,n){for(const i of n)i instanceof xb?(e.Vu.addReference(i.key,t),r4(e,i)):i instanceof Ob?(H(xg,"Document no longer in limbo: "+i.key),e.Vu.removeReference(i.key,t),e.Vu.containsKey(i.key)||Ub(e,i.key)):Q(19791,{wu:i})}function r4(e,t){const n=t.key,i=n.path.canonicalString();e.Ru.get(n)||e.Iu.has(i)||(H(xg,"New document in limbo: "+n),e.Iu.add(i),Og(e))}function Og(e){for(;e.Iu.size>0&&e.Ru.size<e.maxConcurrentLimboResolutions;){const t=e.Iu.values().next().value;e.Iu.delete(t);const n=new F(At.fromString(t)),i=e.fu.next();e.Au.set(i,new YV(n)),e.Ru=e.Ru.insert(n,i),wb(e.remoteStore,new Di(Cn(gg(n.path)),i,"TargetPurposeLimboResolution",Uc.ce))}}async function sl(e,t,n){const i=Z(e),s=[],r=[],a=[];i.Tu.isEmpty()||(i.Tu.forEach((l,u)=>{a.push(i.pu(u,t,n).then(h=>{var d;if((h||n)&&i.isPrimaryClient){const m=h?!h.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:d.current;i.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(h){s.push(h);const m=Ag.Is(u.targetId,h);r.push(m)}}))}),await Promise.all(a),i.Pu.H_(s),await async function(u,h){const d=Z(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>L.forEach(h,g=>L.forEach(g.Ts,E=>d.persistence.referenceDelegate.addReference(m,g.targetId,E)).next(()=>L.forEach(g.Es,E=>d.persistence.referenceDelegate.removeReference(m,g.targetId,E)))))}catch(m){if(!ua(m))throw m;H(Sg,"Failed to update sequence numbers: "+m)}for(const m of h){const g=m.targetId;if(!m.fromCache){const E=d.vs.get(g),D=E.snapshotVersion,M=E.withLastLimboFreeSnapshotVersion(D);d.vs=d.vs.insert(g,M)}}}(i.localStore,r))}async function a4(e,t){const n=Z(e);if(!n.currentUser.isEqual(t)){H(xg,"User change. New user:",t.toKey());const i=await Tb(n.localStore,t);n.currentUser=t,function(r,a){r.mu.forEach(l=>{l.forEach(u=>{u.reject(new q(k.CANCELLED,a))})}),r.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,i.removedBatchIds,i.addedBatchIds),await sl(n,i.Ns)}}function o4(e,t){const n=Z(e),i=n.Au.get(t);if(i&&i.hu)return lt().add(i.key);{let s=lt();const r=n.Eu.get(t);if(!r)return s;for(const a of r){const l=n.Tu.get(a);s=s.unionWith(l.view.nu)}return s}}function Pb(e){const t=Z(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Vb.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=o4.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=n4.bind(null,t),t.Pu.H_=HV.bind(null,t.eventManager),t.Pu.yu=FV.bind(null,t.eventManager),t}function l4(e){const t=Z(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=i4.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=s4.bind(null,t),t}class oc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Kc(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,n){return null}Mu(t,n){return null}vu(t){return lV(this.persistence,new rV,t.initialUser,this.serializer)}Cu(t){return new Eb(Tg.Vi,this.serializer)}Du(t){return new gV}async terminate(){var t,n;(t=this.gcScheduler)==null||t.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}oc.provider={build:()=>new oc};class u4 extends oc{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,n){gt(this.persistence.referenceDelegate instanceof rc,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new FM(i,t.asyncQueue,n)}Cu(t){const n=this.cacheSizeBytes!==void 0?Ne.withCacheSize(this.cacheSizeBytes):Ne.DEFAULT;return new Eb(i=>rc.Vi(i,n),this.serializer)}}class Gd{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>zv(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=a4.bind(null,this.syncEngine),await PV(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new jV}()}createDatastore(t){const n=Kc(t.databaseInfo.databaseId),i=EV(t.databaseInfo);return wV(t.authCredentials,t.appCheckCredentials,i,n)}createRemoteStore(t){return function(i,s,r,a,l){return new IV(i,s,r,a,l)}(this.localStore,this.datastore,t.asyncQueue,n=>zv(this.syncEngine,n,0),function(){return Mv.v()?new Mv:new pV}())}createSyncEngine(t,n){return function(s,r,a,l,u,h,d){const m=new XV(s,r,a,l,u,h);return d&&(m.gu=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){var t,n;await async function(s){const r=Z(s);H(Ps,"RemoteStore shutting down."),r.Ia.add(5),await il(r),r.Aa.shutdown(),r.Va.set("Unknown")}(this.remoteStore),(t=this.datastore)==null||t.terminate(),(n=this.eventManager)==null||n.terminate()}}Gd.provider={build:()=>new Gd};/**
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
 */class c4{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):si("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,n){setTimeout(()=>{this.muted||t(n)},0)}}/**
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
 */const is="FirestoreClient";class h4{constructor(t,n,i,s,r){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=i,this._databaseInfo=s,this.user=me.UNAUTHENTICATED,this.clientId=ug.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=r,this.authCredentials.start(i,async a=>{H(is,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(i,a=>(H(is,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Rs;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const i=Ng(n,"Failed to shutdown persistence");t.reject(i)}}),t.promise}}async function vf(e,t){e.asyncQueue.verifyOperationInProgress(),H(is,"Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let i=n.initialUser;e.setCredentialChangeListener(async s=>{i.isEqual(s)||(await Tb(t.localStore,s),i=s)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function Bv(e,t){e.asyncQueue.verifyOperationInProgress();const n=await f4(e);H(is,"Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(i=>kv(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,s)=>kv(t.remoteStore,s)),e._onlineComponents=t}async function f4(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){H(is,"Using user provided OfflineComponentProvider");try{await vf(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!function(s){return s.name==="FirebaseError"?s.code===k.FAILED_PRECONDITION||s.code===k.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Us("Error using user provided cache. Falling back to memory cache: "+n),await vf(e,new oc)}}else H(is,"Using default OfflineComponentProvider"),await vf(e,new u4(void 0));return e._offlineComponents}async function zb(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(H(is,"Using user provided OnlineComponentProvider"),await Bv(e,e._uninitializedComponentsProvider._online)):(H(is,"Using default OnlineComponentProvider"),await Bv(e,new Gd))),e._onlineComponents}function d4(e){return zb(e).then(t=>t.syncEngine)}async function qv(e){const t=await zb(e),n=t.eventManager;return n.onListen=$V.bind(null,t.syncEngine),n.onUnlisten=WV.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=JV.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=t4.bind(null,t.syncEngine),n}function m4(e,t,n,i){const s=new c4(i),r=new GV(t,s,n);return e.asyncQueue.enqueueAndForget(async()=>BV(await qv(e),r)),()=>{s.Nu(),e.asyncQueue.enqueueAndForget(async()=>qV(await qv(e),r))}}function g4(e,t){const n=new Rs;return e.asyncQueue.enqueueAndForget(async()=>e4(await d4(e),t,n)),n.promise}/**
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
 */function jb(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
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
 */const p4="ComponentProvider",Hv=new Map;function y4(e,t,n,i,s){return new kO(e,t,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,jb(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,i)}/**
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
 */const Bb="firestore.googleapis.com",Fv=!0;class Gv{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new q(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Bb,this.ssl=Fv}else this.host=t.host,this.ssl=t.ssl??Fv;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=vb;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<qM)throw new q(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}bO("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=jb(t.experimentalLongPollingOptions??{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new q(k.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new q(k.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new q(k.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(i,s){return i.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Xc{constructor(t,n,i,s){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Gv({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new q(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new q(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Gv(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new mO;switch(i.type){case"firstParty":return new _O(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new q(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const i=Hv.get(n);i&&(H(p4,"Removing Datastore"),Hv.delete(n),i.terminate())}(this),Promise.resolve()}}function _4(e,t,n,i={}){var h;e=Fi(e,Xc);const s=Xo(t),r=e._getSettings(),a={...r,emulatorOptions:e._getEmulatorOptions()},l=`${t}:${n}`;s&&yA(`https://${l}`),r.host!==Bb&&r.host!==l&&Us("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...r,host:l,ssl:s,emulatorOptions:i};if(!$i(u,a)&&(e._setSettings(u),i.mockUserToken)){let d,m;if(typeof i.mockUserToken=="string")d=i.mockUserToken,m=me.MOCK_USER;else{d=_C(i.mockUserToken,(h=e._app)==null?void 0:h.options.projectId);const g=i.mockUserToken.sub||i.mockUserToken.user_id;if(!g)throw new q(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new me(g)}e._authCredentials=new gO(new DS(d,m))}}/**
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
 */class ha{constructor(t,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=t}withConverter(t){return new ha(this.firestore,t,this._query)}}class Qt{constructor(t,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Gi(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Qt(this.firestore,t,this._key)}toJSON(){return{type:Qt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,n,i){if(Wo(n,Qt._jsonSchema))return new Qt(t,i||null,new F(At.fromString(n.referencePath)))}}Qt._jsonSchemaVersion="firestore/documentReference/1.0",Qt._jsonSchema={type:Kt("string",Qt._jsonSchemaVersion),referencePath:Kt("string")};class Gi extends ha{constructor(t,n,i){super(t,n,gg(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Qt(this.firestore,null,new F(t))}withConverter(t){return new Gi(this.firestore,t,this._path)}}function qb(e,t,...n){if(e=zt(e),xS("collection","path",t),e instanceof Xc){const i=At.fromString(t,...n);return iv(i),new Gi(e,null,i)}{if(!(e instanceof Qt||e instanceof Gi))throw new q(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child(At.fromString(t,...n));return iv(i),new Gi(e.firestore,null,i)}}function Ka(e,t,...n){if(e=zt(e),arguments.length===1&&(t=ug.newId()),xS("doc","path",t),e instanceof Xc){const i=At.fromString(t,...n);return nv(i),new Qt(e,null,new F(i))}{if(!(e instanceof Qt||e instanceof Gi))throw new q(k.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child(At.fromString(t,...n));return nv(i),new Qt(e.firestore,e instanceof Gi?e.converter:null,new F(i))}}/**
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
 */const Kv="AsyncQueue";class Qv{constructor(t=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Sb(this,"async_queue_retry"),this._c=()=>{const i=_f();i&&H(Kv,"Visibility state changed to "+i.visibilityState),this.M_.w_()},this.ac=t;const n=_f();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const n=_f();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise(()=>{});const n=new Rs;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Yu.push(t),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(t){if(!ua(t))throw t;H(Kv,"Operation failed with retryable error: "+t)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(t){const n=this.ac.then(()=>(this.rc=!0,t().catch(i=>{throw this.nc=i,this.rc=!1,si("INTERNAL UNHANDLED ERROR: ",Yv(i)),i}).then(i=>(this.rc=!1,i))));return this.ac=n,n}enqueueAfterDelay(t,n,i){this.uc(),this.oc.indexOf(t)>-1&&(n=0);const s=Cg.createAndSchedule(this,t,n,i,r=>this.hc(r));return this.tc.push(s),s}uc(){this.nc&&Q(47125,{Pc:Yv(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ec(t){for(const n of this.tc)if(n.timerId===t)return!0;return!1}Ic(t){return this.Tc().then(()=>{this.tc.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Tc()})}Rc(t){this.oc.push(t)}hc(t){const n=this.tc.indexOf(t);this.tc.splice(n,1)}}function Yv(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+`
`+e.stack),t}class Xr extends Xc{constructor(t,n,i,s){super(t,n,i,s),this.type="firestore",this._queue=new Qv,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Qv(t),this._firestoreClient=void 0,await t}}}function v4(e,t){const n=typeof e=="object"?e:Ym(),i=typeof e=="string"?e:Zu,s=Gs(n,"firestore").getImmediate({identifier:i});if(!s._initialized){const r=pC("firestore");r&&_4(s,...r)}return s}function Mg(e){if(e._terminated)throw new q(k.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||E4(e),e._firestoreClient}function E4(e){var i,s,r,a;const t=e._freezeSettings(),n=y4(e._databaseId,((i=e._app)==null?void 0:i.options.appId)||"",e._persistenceKey,(s=e._app)==null?void 0:s.options.apiKey,t);e._componentsProvider||(r=t.localCache)!=null&&r._offlineComponentProvider&&((a=t.localCache)!=null&&a._onlineComponentProvider)&&(e._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),e._firestoreClient=new h4(e._authCredentials,e._appCheckCredentials,e._queue,n,e._componentsProvider&&function(u){const h=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(h),_online:h}}(e._componentsProvider))}/**
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
 */class sn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new sn(ce.fromBase64String(t))}catch(n){throw new q(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new sn(ce.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:sn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(Wo(t,sn._jsonSchema))return sn.fromBase64String(t.bytes)}}sn._jsonSchemaVersion="firestore/bytes/1.0",sn._jsonSchema={type:Kt("string",sn._jsonSchemaVersion),bytes:Kt("string")};/**
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
 */class Vg{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new q(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new oe(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class kg{constructor(t){this._methodName=t}}/**
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
 */class Dn{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new q(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new q(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return ot(this._lat,t._lat)||ot(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Dn._jsonSchemaVersion}}static fromJSON(t){if(Wo(t,Dn._jsonSchema))return new Dn(t.latitude,t.longitude)}}Dn._jsonSchemaVersion="firestore/geoPoint/1.0",Dn._jsonSchema={type:Kt("string",Dn._jsonSchemaVersion),latitude:Kt("number"),longitude:Kt("number")};/**
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
 */class dn{constructor(t){this._values=(t||[]).map(n=>n)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(i,s){if(i.length!==s.length)return!1;for(let r=0;r<i.length;++r)if(i[r]!==s[r])return!1;return!0}(this._values,t._values)}toJSON(){return{type:dn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(Wo(t,dn._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every(n=>typeof n=="number"))return new dn(t.vectorValues);throw new q(k.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}dn._jsonSchemaVersion="firestore/vectorValue/1.0",dn._jsonSchema={type:Kt("string",dn._jsonSchemaVersion),vectorValues:Kt("object")};/**
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
 */const T4=/^__.*__$/;class A4{constructor(t,n,i){this.data=t,this.fieldMask=n,this.fieldTransforms=i}toMutation(t,n){return this.fieldMask!==null?new os(t,this.data,this.fieldMask,n,this.fieldTransforms):new el(t,this.data,n,this.fieldTransforms)}}class Hb{constructor(t,n,i){this.data=t,this.fieldMask=n,this.fieldTransforms=i}toMutation(t,n){return new os(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function Fb(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q(40011,{dataSource:e})}}class Lg{constructor(t,n,i,s,r,a){this.settings=t,this.databaseId=n,this.serializer=i,this.ignoreUndefinedProperties=s,r===void 0&&this.Ac(),this.fieldTransforms=r||[],this.fieldMask=a||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(t){return new Lg({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(t){var s;const n=(s=this.path)==null?void 0:s.child(t),i=this.i({path:n,arrayElement:!1});return i.mc(t),i}fc(t){var s;const n=(s=this.path)==null?void 0:s.child(t),i=this.i({path:n,arrayElement:!1});return i.Ac(),i}gc(t){return this.i({path:void 0,arrayElement:!0})}yc(t){return lc(t,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Ac(){if(this.path)for(let t=0;t<this.path.length;t++)this.mc(this.path.get(t))}mc(t){if(t.length===0)throw this.yc("Document fields must not be empty");if(Fb(this.dataSource)&&T4.test(t))throw this.yc('Document fields cannot begin and end with "__"')}}class S4{constructor(t,n,i){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=i||Kc(t)}I(t,n,i,s=!1){return new Lg({dataSource:t,methodName:n,targetDoc:i,path:oe.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ug(e){const t=e._freezeSettings(),n=Kc(e._databaseId);return new S4(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Gb(e,t,n,i,s,r={}){const a=e.I(r.merge||r.mergeFields?2:0,t,n,s);Pg("Data must be an object, but it was:",a,i);const l=Kb(i,a);let u,h;if(r.merge)u=new ze(a.fieldMask),h=a.fieldTransforms;else if(r.mergeFields){const d=[];for(const m of r.mergeFields){const g=$r(t,m,n);if(!a.contains(g))throw new q(k.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);Xb(d,g)||d.push(g)}u=new ze(d),h=a.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,h=a.fieldTransforms;return new A4(new De(l),u,h)}class $c extends kg{_toFieldTransform(t){if(t.dataSource!==2)throw t.dataSource===1?t.yc(`${this._methodName}() can only appear at the top level of your update data`):t.yc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof $c}}function b4(e,t,n,i){const s=e.I(1,t,n);Pg("Data must be an object, but it was:",s,i);const r=[],a=De.empty();as(i,(u,h)=>{const d=Yb(t,u,n);h=zt(h);const m=s.fc(d);if(h instanceof $c)r.push(d);else{const g=rl(h,m);g!=null&&(r.push(d),a.set(d,g))}});const l=new ze(r);return new Hb(a,l,s.fieldTransforms)}function w4(e,t,n,i,s,r){const a=e.I(1,t,n),l=[$r(t,i,n)],u=[s];if(r.length%2!=0)throw new q(k.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<r.length;g+=2)l.push($r(t,r[g])),u.push(r[g+1]);const h=[],d=De.empty();for(let g=l.length-1;g>=0;--g)if(!Xb(h,l[g])){const E=l[g];let D=u[g];D=zt(D);const M=a.fc(E);if(D instanceof $c)h.push(E);else{const U=rl(D,M);U!=null&&(h.push(E),d.set(E,U))}}const m=new ze(h);return new Hb(d,m,a.fieldTransforms)}function R4(e,t,n,i=!1){return rl(n,e.I(i?4:3,t))}function rl(e,t){if(Qb(e=zt(e)))return Pg("Unsupported field value:",t,e),Kb(e,t);if(e instanceof kg)return function(i,s){if(!Fb(s.dataSource))throw s.yc(`${i._methodName}() can only be used with update() and set()`);if(!s.path)throw s.yc(`${i._methodName}() is not currently supported inside arrays`);const r=i._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.arrayElement&&t.dataSource!==4)throw t.yc("Nested arrays are not supported");return function(i,s){const r=[];let a=0;for(const l of i){let u=rl(l,s.gc(a));u==null&&(u={nullValue:"NULL_VALUE"}),r.push(u),a++}return{arrayValue:{values:r}}}(e,t)}return function(i,s){if((i=zt(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return aM(s.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const r=It.fromDate(i);return{timestampValue:sc(s.serializer,r)}}if(i instanceof It){const r=new It(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:sc(s.serializer,r)}}if(i instanceof Dn)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof sn)return{bytesValue:hb(s.serializer,i._byteString)};if(i instanceof Qt){const r=s.databaseId,a=i.firestore._databaseId;if(!a.isEqual(r))throw s.yc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:vg(i.firestore._databaseId||s.databaseId,i._key.path)}}if(i instanceof dn)return function(a,l){const u=a instanceof dn?a.toArray():a;return{mapValue:{fields:{[jS]:{stringValue:BS},[Wu]:{arrayValue:{values:u.map(d=>{if(typeof d!="number")throw l.yc("VectorValues must only contain numeric values.");return pg(l.serializer,d)})}}}}}}(i,s);if(_b(i))return i._toProto(s.serializer);throw s.yc(`Unsupported field value: ${Lc(i)}`)}(e,t)}function Kb(e,t){const n={};return VS(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):as(e,(i,s)=>{const r=rl(s,t.dc(i));r!=null&&(n[i]=r)}),{mapValue:{fields:n}}}function Qb(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof It||e instanceof Dn||e instanceof sn||e instanceof Qt||e instanceof kg||e instanceof dn||_b(e))}function Pg(e,t,n){if(!Qb(n)||!OS(n)){const i=Lc(n);throw i==="an object"?t.yc(e+" a custom object"):t.yc(e+" "+i)}}function $r(e,t,n){if((t=zt(t))instanceof Vg)return t._internalPath;if(typeof t=="string")return Yb(e,t);throw lc("Field path arguments must be of type string or ",e,!1,void 0,n)}const I4=new RegExp("[~\\*/\\[\\]]");function Yb(e,t,n){if(t.search(I4)>=0)throw lc(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Vg(...t.split("."))._internalPath}catch{throw lc(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function lc(e,t,n,i,s){const r=i&&!i.isEmpty(),a=s!==void 0;let l=`Function ${t}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(r||a)&&(u+=" (found",r&&(u+=` in field ${i}`),a&&(u+=` in document ${s}`),u+=")"),new q(k.INVALID_ARGUMENT,l+e+u)}function Xb(e,t){return e.some(n=>n.isEqual(t))}/**
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
 */class C4{convertValue(t,n="none"){switch(es(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Lt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(ts(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 11:return this.convertObject(t.mapValue,n);case 10:return this.convertVectorValue(t.mapValue);default:throw Q(62114,{value:t})}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const i={};return as(t,(s,r)=>{i[s]=this.convertValue(r,n)}),i}convertVectorValue(t){var i,s,r;const n=(r=(s=(i=t.fields)==null?void 0:i[Wu].arrayValue)==null?void 0:s.values)==null?void 0:r.map(a=>Lt(a.doubleValue));return new dn(n)}convertGeoPoint(t){return new Dn(Lt(t.latitude),Lt(t.longitude))}convertArray(t,n){return(t.values||[]).map(i=>this.convertValue(i,n))}convertServerTimestamp(t,n){switch(n){case"previous":const i=zc(t);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(xo(t));default:return null}}convertTimestamp(t){const n=Wi(t);return new It(n.seconds,n.nanos)}convertDocumentKey(t,n){const i=At.fromString(t);gt(yb(i),9688,{name:t});const s=new Oo(i.get(1),i.get(3)),r=new F(i.popFirst(5));return s.isEqual(n)||si(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
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
 */class $b extends C4{constructor(t){super(),this.firestore=t}convertBytes(t){return new sn(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new Qt(this.firestore,null,n)}}const Xv="@firebase/firestore",$v="4.14.0";/**
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
 */function Jv(e){return function(n,i){if(typeof n!="object"||n===null)return!1;const s=n;for(const r of i)if(r in s&&typeof s[r]=="function")return!0;return!1}(e,["next","error","complete"])}/**
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
 */class Jb{constructor(t,n,i,s,r){this._firestore=t,this._userDataWriter=n,this._key=i,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Qt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new N4(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var t;return((t=this._document)==null?void 0:t.data.clone().value.mapValue.fields)??void 0}get(t){if(this._document){const n=this._document.data.field($r("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class N4 extends Jb{data(){return super.data()}}/**
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
 */function D4(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new q(k.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class zg{}class x4 extends zg{}function O4(e,t,...n){let i=[];t instanceof zg&&i.push(t),i=i.concat(n),function(r){const a=r.filter(u=>u instanceof jg).length,l=r.filter(u=>u instanceof Jc).length;if(a>1||a>0&&l>0)throw new q(k.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const s of i)e=s._apply(e);return e}class Jc extends x4{constructor(t,n,i){super(),this._field=t,this._op=n,this._value=i,this.type="where"}static _create(t,n,i){return new Jc(t,n,i)}_apply(t){const n=this._parse(t);return Zb(t._query,n),new ha(t.firestore,t.converter,kd(t._query,n))}_parse(t){const n=Ug(t.firestore);return function(r,a,l,u,h,d,m){let g;if(h.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new q(k.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){Wv(m,d);const D=[];for(const M of m)D.push(Zv(u,r,M));g={arrayValue:{values:D}}}else g=Zv(u,r,m)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||Wv(m,d),g=R4(l,a,m,d==="in"||d==="not-in");return Ft.create(h,d,g)}(t._query,"where",n,t.firestore._databaseId,this._field,this._op,this._value)}}function M4(e,t,n){const i=t,s=$r("where",e);return Jc._create(s,i,n)}class jg extends zg{constructor(t,n){super(),this.type=t,this._queryConstraints=n}static _create(t,n){return new jg(t,n)}_parse(t){const n=this._queryConstraints.map(i=>i._parse(t)).filter(i=>i.getFilters().length>0);return n.length===1?n[0]:gn.create(n,this._getOperator())}_apply(t){const n=this._parse(t);return n.getFilters().length===0?t:(function(s,r){let a=s;const l=r.getFlattenedFilters();for(const u of l)Zb(a,u),a=kd(a,u)}(t._query,n),new ha(t.firestore,t.converter,kd(t._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Zv(e,t,n){if(typeof(n=zt(n))=="string"){if(n==="")throw new q(k.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!XS(t)&&n.indexOf("/")!==-1)throw new q(k.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const i=t.path.child(At.fromString(n));if(!F.isDocumentKey(i))throw new q(k.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return hv(e,new F(i))}if(n instanceof Qt)return hv(e,n._key);throw new q(k.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Lc(n)}.`)}function Wv(e,t){if(!Array.isArray(e)||e.length===0)throw new q(k.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Zb(e,t){const n=function(s,r){for(const a of s)for(const l of a.getFlattenedFilters())if(r.indexOf(l.op)>=0)return l.op;return null}(e.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(n!==null)throw n===t.op?new q(k.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new q(k.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}function Wb(e,t,n){let i;return i=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,i}class Qa{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Is extends Jb{constructor(t,n,i,s,r,a){super(t,n,i,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new hu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const i=this._document.data.field($r("DocumentSnapshot.get",t));if(i!==null)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new q(k.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,n={};return n.type=Is._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Is._jsonSchemaVersion="firestore/documentSnapshot/1.0",Is._jsonSchema={type:Kt("string",Is._jsonSchemaVersion),bundleSource:Kt("string","DocumentSnapshot"),bundleName:Kt("string"),bundle:Kt("string")};class hu extends Is{data(t={}){return super.data(t)}}class Or{constructor(t,n,i,s){this._firestore=t,this._userDataWriter=n,this._snapshot=s,this.metadata=new Qa(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(i=>{t.call(n,new hu(this._firestore,this._userDataWriter,i.key,i,new Qa(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new q(k.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const u=new hu(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Qa(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>r||l.type!==3).map(l=>{const u=new hu(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Qa(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,d=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),d=a.indexOf(l.doc.key)),{type:V4(l.type),doc:u,oldIndex:h,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new q(k.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=Or._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=ug.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],i=[],s=[];return this.docs.forEach(r=>{r._document!==null&&(n.push(r._document),i.push(this._userDataWriter.convertObjectMap(r._document.data.value.mapValue.fields,"previous")),s.push(r.ref.path))}),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function V4(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q(61501,{type:e})}}/**
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
 */Or._jsonSchemaVersion="firestore/querySnapshot/1.0",Or._jsonSchema={type:Kt("string",Or._jsonSchemaVersion),bundleSource:Kt("string","QuerySnapshot"),bundleName:Kt("string"),bundle:Kt("string")};/**
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
 */class k4{constructor(t,n){this._firestore=t,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Ug(t)}set(t,n,i){this._verifyNotCommitted();const s=Ef(t,this._firestore),r=Wb(s.converter,n,i),a=Gb(this._dataReader,"WriteBatch.set",s._key,r,s.converter!==null,i);return this._mutations.push(a.toMutation(s._key,Ge.none())),this}update(t,n,i,...s){this._verifyNotCommitted();const r=Ef(t,this._firestore);let a;return a=typeof(n=zt(n))=="string"||n instanceof Vg?w4(this._dataReader,"WriteBatch.update",r._key,n,i,s):b4(this._dataReader,"WriteBatch.update",r._key,n),this._mutations.push(a.toMutation(r._key,Ge.exists(!0))),this}delete(t){this._verifyNotCommitted();const n=Ef(t,this._firestore);return this._mutations=this._mutations.concat(new Fc(n._key,Ge.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new q(k.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Ef(e,t){if((e=zt(e)).firestore!==t)throw new q(k.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}function Tf(e,t,n){e=Fi(e,Qt);const i=Fi(e.firestore,Xr),s=Wb(e.converter,t,n),r=Ug(i);return Bg(i,[Gb(r,"setDoc",e._key,s,e.converter!==null,n).toMutation(e._key,Ge.none())])}function L4(e){return Bg(Fi(e.firestore,Xr),[new Fc(e._key,Ge.none())])}function tw(e,...t){var h,d,m;e=zt(e);let n={includeMetadataChanges:!1,source:"default"},i=0;typeof t[i]!="object"||Jv(t[i])||(n=t[i++]);const s={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(Jv(t[i])){const g=t[i];t[i]=(h=g.next)==null?void 0:h.bind(g),t[i+1]=(d=g.error)==null?void 0:d.bind(g),t[i+2]=(m=g.complete)==null?void 0:m.bind(g)}let r,a,l;if(e instanceof Qt)a=Fi(e.firestore,Xr),l=gg(e._key.path),r={next:g=>{t[i]&&t[i](U4(a,e,g))},error:t[i+1],complete:t[i+2]};else{const g=Fi(e,ha);a=Fi(g.firestore,Xr),l=g._query;const E=new $b(a);r={next:D=>{t[i]&&t[i](new Or(a,E,g,D))},error:t[i+1],complete:t[i+2]},D4(e._query)}const u=Mg(a);return m4(u,l,s,r)}function Bg(e,t){const n=Mg(e);return g4(n,t)}function U4(e,t,n){const i=n.docs.get(t._key),s=new $b(e);return new Is(e,s,t._key,i,new Qa(n.hasPendingWrites,n.fromCache),t.converter)}function t0(e){return e=Fi(e,Xr),Mg(e),new k4(e,t=>Bg(e,t))}(function(t,n=!0){dO(ra),xn(new mn("firestore",(i,{instanceIdentifier:s,options:r})=>{const a=i.getProvider("app").getImmediate(),l=new Xr(new pO(i.getProvider("auth-internal")),new vO(a,i.getProvider("app-check-internal")),LO(a,s),a);return r={useFetchStreams:n,...r},l._setSettings(r),l},"PUBLIC").setMultipleInstances(!0)),on(Xv,$v,t),on(Xv,$v,"esm2020")})();const P4={apiKey:"AIzaSyDkGPd6MDL29Z8LY3EhPMLEXU_Q3_D8jLc",authDomain:"seguimiento-coaches.firebaseapp.com",projectId:"seguimiento-coaches",storageBucket:"seguimiento-coaches.firebasestorage.app",messagingSenderId:"782682130999",appId:"1:782682130999:web:5651867d9579d873cecdb2",measurementId:"G-PFED0LN5EQ"},qg=TA(P4);typeof window<"u"&&lD(qg);const e0=hO(qg),Ua=v4(qg);function z4(){const[e,t]=it.useState(null),[n,i]=it.useState(!0),[s,r]=it.useState([]),[a,l]=it.useState("dashboard"),[u,h]=it.useState(null),[d,m]=it.useState(!1),[g,E]=it.useState(""),[D,M]=it.useState("Todos"),[U,b]=it.useState("Todas"),[A,C]=it.useState(!1),[x,z]=it.useState(!1);it.useEffect(()=>{const S=document.createElement("script");return S.src="https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js",S.async=!0,document.body.appendChild(S),()=>{document.body.contains(S)&&document.body.removeChild(S)}},[]),it.useEffect(()=>{(async()=>{try{await YD(e0)}catch(J){console.error("Error al autenticar:",J)}finally{i(!1)}})();const T=tx(e0,J=>{t(J)});return()=>T()},[]),it.useEffect(()=>{if(!e)return;const S=qb(Ua,"users",e.uid,"schools"),T=tw(S,J=>{const ft=J.docs.map(j=>({id:j.id,...j.data()}));r(ft)},J=>console.error("Error obteniendo colegios:",J));return()=>T()},[e]);const P=it.useMemo(()=>[...new Set(s.map(S=>S.coach).filter(Boolean))],[s]),_=it.useMemo(()=>[...new Set(s.map(S=>S.region).filter(Boolean))],[s]),y=it.useMemo(()=>s.filter(S=>{var j;const T=(j=S.name)==null?void 0:j.toLowerCase().includes(g.toLowerCase()),J=D==="Todos"||S.coach===D,ft=U==="Todas"||S.region===U;return T&&J&&ft}),[s,g,D,U]),v=it.useMemo(()=>{const S=y.length;let T=0,J=0,ft=0,j=0,G=0;y.forEach(tt=>{T+=(Number(tt.completedActions)||0)+(Number(tt.progressActions)||0)+(Number(tt.pendingActions)||0),J+=Number(tt.completedActions)||0,ft+=Number(tt.progressActions)||0,j+=Number(tt.pendingActions)||0,tt.renewal==="ALTA"&&G++});const K=T>0?Math.round(J/T*100):0;return{totalSchools:S,totalActions:T,completed:J,progress:ft,pending:j,highRenewal:G,completionRate:K}},[y]),w=async S=>{if(!e)return;const T=S.target.files[0];if(!T)return;if(!window.XLSX){alert("La librería de Excel se está cargando. Intenta de nuevo en un segundo.");return}C(!0);const J=new FileReader;J.onload=async ft=>{try{const j=ft.target.result,G=window.XLSX.read(j,{type:"binary"}),K=G.SheetNames[0],tt=G.Sheets[K],Ot=window.XLSX.utils.sheet_to_json(tt);let Ye=t0(Ua),Xe=0;for(const he of Ot){const be=he.ID?String(he.ID):`${Date.now()}-${Math.random().toString(36).substr(2,9)}`,_n={name:he.Colegio||"Sin Nombre",region:he.Regional||"Sin Región",coach:he.Coach||"Sin Asignar",completedActions:Number(he["Acciones Completadas"])||0,progressActions:Number(he["Acciones Progreso"])||0,pendingActions:Number(he["Acciones Pendientes"])||0,renewal:he["Renovación (ALTA/MEDIA/BAJA)"]||"NO DEFINIDA",updatedAt:new Date().toISOString()},fa=Ka(Ua,"users",e.uid,"schools",be);Ye.set(fa,_n,{merge:!0}),Xe++,Xe>=490&&(await Ye.commit(),Ye=t0(Ua),Xe=0)}Xe>0&&await Ye.commit(),C(!1),S.target.value=null,z(!1)}catch(j){console.error("Error procesando Excel:",j),C(!1),alert("Hubo un error procesando el archivo.")}},J.readAsBinaryString(T)},R=()=>{if(!window.XLSX)return;const S=s.map(ft=>({ID:ft.id,Colegio:ft.name,Regional:ft.region,Coach:ft.coach,"Acciones Completadas":ft.completedActions||0,"Acciones Progreso":ft.progressActions||0,"Acciones Pendientes":ft.pendingActions||0,"Renovación (ALTA/MEDIA/BAJA)":ft.renewal||"NO DEFINIDA"}));S.length===0&&S.push({ID:"12345",Colegio:"Colegio Ejemplo",Regional:"Norte",Coach:"Juan Pérez","Acciones Completadas":10,"Acciones Progreso":5,"Acciones Pendientes":2,"Renovación (ALTA/MEDIA/BAJA)":"ALTA"});const T=window.XLSX.utils.json_to_sheet(S),J=window.XLSX.utils.book_new();window.XLSX.utils.book_append_sheet(J,T,"Colegios"),window.XLSX.writeFile(J,"Data_Coaches_Colegios.xlsx")};return n?I.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-50 text-indigo-600 font-semibold",children:"Conectando con Firebase..."}):I.jsxs("div",{className:"flex h-screen bg-gray-100 font-sans text-gray-800 overflow-hidden relative",children:[x&&I.jsx("div",{className:"fixed inset-0 bg-black/50 z-40 md:hidden",onClick:()=>z(!1)}),I.jsxs("aside",{className:`fixed inset-y-0 left-0 w-64 bg-indigo-900 text-white flex flex-col shadow-xl z-50 transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${x?"translate-x-0":"-translate-x-full"}`,children:[I.jsxs("div",{className:"p-6 flex justify-between items-center",children:[I.jsxs("h1",{className:"text-2xl font-bold tracking-tight flex items-center gap-2",children:[I.jsx(QI,{className:"text-indigo-400"}),"CoachTrack",I.jsx("span",{className:"text-indigo-400 text-sm align-top font-black",children:"CRM"})]}),I.jsx("button",{className:"md:hidden text-indigo-200 hover:text-white",onClick:()=>z(!1),children:I.jsx(vd,{size:24})})]}),I.jsx("p",{className:"px-6 text-indigo-300 text-xs -mt-3 mb-4",children:"Panel de Coordinación"}),I.jsxs("nav",{className:"flex-1 px-4 space-y-2 mt-2",children:[I.jsxs("button",{onClick:()=>{l("dashboard"),z(!1)},className:`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${a==="dashboard"?"bg-indigo-800 text-white":"text-indigo-200 hover:bg-indigo-800/50 hover:text-white"}`,children:[I.jsx(aA,{size:20})," Dashboard"]}),I.jsxs("button",{onClick:()=>{l("schools"),z(!1)},className:`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${a==="schools"?"bg-indigo-800 text-white":"text-indigo-200 hover:bg-indigo-800/50 hover:text-white"}`,children:[I.jsx(p_,{size:20})," Gestión de Colegios"]})]}),I.jsxs("div",{className:"p-4 border-t border-indigo-800 space-y-3",children:[I.jsxs("div",{className:"relative",children:[I.jsx("input",{type:"file",accept:".xlsx, .xls",className:"absolute inset-0 w-full h-full opacity-0 cursor-pointer",onChange:w,disabled:A}),I.jsxs("button",{className:"w-full flex items-center justify-center gap-2 px-4 py-2 bg-indigo-700 hover:bg-indigo-600 rounded-lg text-sm font-medium transition-colors",children:[A?I.jsx(HI,{className:"animate-spin",size:16}):I.jsx(aC,{size:16}),A?"Cargando...":"Subir Excel"]})]}),I.jsxs("button",{onClick:R,className:"w-full flex items-center justify-center gap-2 px-4 py-2 border border-indigo-600 hover:bg-indigo-800 rounded-lg text-sm font-medium transition-colors",children:[I.jsx(GI,{size:16})," Exportar / Plantilla"]})]})]}),I.jsxs("main",{className:"flex-1 flex flex-col h-full overflow-hidden w-full",children:[I.jsxs("header",{className:"h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 md:px-8 shrink-0",children:[I.jsxs("div",{className:"flex items-center gap-2 md:gap-4 flex-1",children:[I.jsx("button",{className:"md:hidden p-2 text-gray-500 hover:bg-gray-100 rounded-lg",onClick:()=>z(!0),children:I.jsx(XI,{size:24})}),I.jsxs("div",{className:"relative hidden sm:block",children:[I.jsx(nC,{className:"absolute left-3 top-1/2 -translate-y-1/2 text-gray-400",size:18}),I.jsx("input",{type:"text",placeholder:"Buscar colegio...",value:g,onChange:S=>E(S.target.value),className:"pl-10 pr-4 py-2 rounded-full border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 w-48 lg:w-64 transition-all"})]}),I.jsxs("select",{value:D,onChange:S=>M(S.target.value),className:"px-2 md:px-4 py-2 rounded-full border border-gray-200 bg-gray-50 text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 max-w-[120px] md:max-w-none",children:[I.jsx("option",{value:"Todos",children:"Coaches"}),P.map(S=>I.jsx("option",{value:S,children:S},S))]}),I.jsxs("select",{value:U,onChange:S=>b(S.target.value),className:"px-2 md:px-4 py-2 rounded-full border border-gray-200 bg-gray-50 text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 max-w-[120px] md:max-w-none",children:[I.jsx("option",{value:"Todas",children:"Regiones"}),_.map(S=>I.jsx("option",{value:S,children:S},S))]})]}),I.jsxs("div",{className:"flex items-center gap-3 ml-4",children:[I.jsx("div",{className:"w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold border border-indigo-200 shrink-0",children:"CO"}),I.jsx("span",{className:"text-sm font-medium text-gray-600 hidden md:block",children:"Coordinador"})]})]}),I.jsx("div",{className:"flex-1 overflow-auto p-4 md:p-8",children:a==="dashboard"?I.jsxs("div",{className:"space-y-6 max-w-7xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500",children:[I.jsx("h2",{className:"text-2xl font-bold text-gray-800",children:"Panorama General"}),I.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6",children:[I.jsx(jl,{title:"Total Colegios",value:v.totalSchools,icon:I.jsx(p_,{size:24,className:"text-blue-600"}),color:"bg-blue-50",borderColor:"border-blue-200"}),I.jsx(jl,{title:"% Avance Global",value:`${v.completionRate}%`,subtitle:"Acciones Completadas",icon:I.jsx(sC,{size:24,className:"text-indigo-600"}),color:"bg-indigo-50",borderColor:"border-indigo-200"}),I.jsx(jl,{title:"Colegios Renov. ALTA",value:v.highRenewal,icon:I.jsx(oA,{size:24,className:"text-emerald-600"}),color:"bg-emerald-50",borderColor:"border-emerald-200"}),I.jsx(jl,{title:"Acciones Pendientes",value:v.pending,icon:I.jsx(jI,{size:24,className:"text-rose-600"}),color:"bg-rose-50",borderColor:"border-rose-200"})]}),I.jsx("h3",{className:"text-xl font-bold text-gray-800 mt-10",children:"Desempeño por Coach"}),I.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:P.map(S=>{const T=s.filter(tt=>tt.coach===S);let J=0,ft=0,j=0;T.forEach(tt=>{J+=Number(tt.completedActions)||0,ft+=Number(tt.progressActions)||0,j+=Number(tt.pendingActions)||0});const G=J+ft+j,K=G>0?Math.round(J/G*100):0;return I.jsxs("div",{className:"bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer",onClick:()=>{M(S),l("schools")},children:[I.jsxs("div",{className:"flex justify-between items-center mb-4",children:[I.jsxs("div",{className:"flex items-center gap-3",children:[I.jsx("div",{className:"w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold shrink-0",children:S.charAt(0).toUpperCase()}),I.jsxs("div",{children:[I.jsx("h4",{className:"font-bold text-gray-800 line-clamp-1",children:S}),I.jsxs("p",{className:"text-xs text-gray-500",children:[T.length," Colegios"]})]})]}),I.jsxs("span",{className:"text-2xl font-black text-indigo-900",children:[K,"%"]})]}),I.jsxs("div",{className:"space-y-2",children:[I.jsx(Af,{label:"Completadas",value:J,total:G,color:"bg-emerald-500"}),I.jsx(Af,{label:"En Progreso",value:ft,total:G,color:"bg-yellow-400"}),I.jsx(Af,{label:"Pendientes",value:j,total:G,color:"bg-rose-500"})]})]},S)})})]}):I.jsxs("div",{className:"max-w-7xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500",children:[I.jsx("div",{className:"flex justify-between items-end mb-6",children:I.jsxs("div",{children:[I.jsx("h2",{className:"text-2xl font-bold text-gray-800",children:"Directorio de Colegios"}),I.jsx("p",{className:"text-gray-500 text-sm mt-1",children:"Selecciona un colegio para editar progreso y notas."})]})}),I.jsx("div",{className:"bg-white rounded-2xl shadow-sm border border-gray-200 overflow-x-auto",children:I.jsxs("table",{className:"w-full text-left border-collapse min-w-[800px]",children:[I.jsx("thead",{children:I.jsxs("tr",{className:"bg-gray-50 border-b border-gray-200 text-xs uppercase tracking-wider text-gray-500",children:[I.jsx("th",{className:"p-4 font-semibold",children:"Colegio"}),I.jsx("th",{className:"p-4 font-semibold",children:"Región / Coach"}),I.jsx("th",{className:"p-4 font-semibold text-center",children:"Avance"}),I.jsx("th",{className:"p-4 font-semibold text-center",children:"Renovación"}),I.jsx("th",{className:"p-4 font-semibold text-right",children:"Detalle"})]})}),I.jsxs("tbody",{className:"divide-y divide-gray-100",children:[y.map(S=>{const T=(Number(S.completedActions)||0)+(Number(S.progressActions)||0)+(Number(S.pendingActions)||0),J=T>0?Math.round((Number(S.completedActions)||0)/T*100):0;return I.jsxs("tr",{className:"hover:bg-gray-50 transition-colors group",children:[I.jsxs("td",{className:"p-4",children:[I.jsx("div",{className:"font-semibold text-gray-800",children:S.name}),I.jsxs("div",{className:"text-xs text-gray-400 mt-0.5",children:["ID: ",S.id.slice(0,8),"..."]})]}),I.jsxs("td",{className:"p-4",children:[I.jsx("div",{className:"text-sm text-gray-700",children:S.coach}),I.jsx("div",{className:"text-xs text-indigo-600 bg-indigo-50 inline-block px-2 py-0.5 rounded mt-1",children:S.region})]}),I.jsxs("td",{className:"p-4 align-middle",children:[I.jsxs("div",{className:"flex items-center justify-center gap-3",children:[I.jsx("div",{className:"w-24 h-2 bg-gray-200 rounded-full overflow-hidden",children:I.jsx("div",{className:"h-full bg-indigo-500 rounded-full",style:{width:`${J}%`}})}),I.jsxs("span",{className:"text-sm font-bold text-gray-700 w-8",children:[J,"%"]})]}),I.jsxs("div",{className:"flex gap-2 justify-center mt-2 text-[10px] font-medium text-gray-500",children:[I.jsxs("span",{className:"flex items-center gap-1",children:[I.jsx("div",{className:"w-2 h-2 rounded-full bg-emerald-500"})," ",S.completedActions||0]}),I.jsxs("span",{className:"flex items-center gap-1",children:[I.jsx("div",{className:"w-2 h-2 rounded-full bg-yellow-400"})," ",S.progressActions||0]}),I.jsxs("span",{className:"flex items-center gap-1",children:[I.jsx("div",{className:"w-2 h-2 rounded-full bg-rose-500"})," ",S.pendingActions||0]})]})]}),I.jsx("td",{className:"p-4 text-center",children:I.jsx(ew,{status:S.renewal})}),I.jsx("td",{className:"p-4 text-right",children:I.jsx("button",{onClick:()=>{h(S),m(!0)},className:"p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors inline-flex",children:I.jsx(PI,{size:20})})})]},S.id)}),y.length===0&&I.jsx("tr",{children:I.jsx("td",{colSpan:"5",className:"p-8 text-center text-gray-500",children:"No se encontraron colegios con los filtros actuales."})})]})]})})]})})]}),d&&u&&I.jsx(j4,{school:u,onClose:()=>{m(!1),h(null)},db:Ua,userId:e.uid})]})}function jl({title:e,value:t,subtitle:n,icon:i,color:s,borderColor:r}){return I.jsxs("div",{className:`p-4 md:p-6 rounded-2xl border ${r} bg-white shadow-sm flex flex-col`,children:[I.jsx("div",{className:"flex justify-between items-start mb-4",children:I.jsx("div",{className:`p-3 rounded-xl ${s}`,children:i})}),I.jsx("h3",{className:"text-gray-500 text-sm font-medium",children:e}),I.jsx("div",{className:"text-2xl md:text-3xl font-black text-gray-800 mt-1",children:t}),n&&I.jsx("p",{className:"text-xs text-gray-400 mt-2",children:n})]})}function Af({label:e,value:t,total:n,color:i}){const s=n>0?t/n*100:0;return I.jsxs("div",{className:"flex items-center justify-between text-sm py-1",children:[I.jsx("span",{className:"text-gray-600 w-24 text-xs",children:e}),I.jsx("div",{className:"flex-1 mx-3 h-2 bg-gray-100 rounded-full overflow-hidden",children:I.jsx("div",{className:`h-full ${i} rounded-full`,style:{width:`${s}%`}})}),I.jsx("span",{className:"font-bold text-gray-800 w-8 text-right",children:t})]})}function ew({status:e}){const t={ALTA:"bg-emerald-100 text-emerald-800 border-emerald-200",MEDIA:"bg-yellow-100 text-yellow-800 border-yellow-200",BAJA:"bg-rose-100 text-rose-800 border-rose-200","NO DEFINIDA":"bg-gray-100 text-gray-600 border-gray-200"},n=t[e]||t["NO DEFINIDA"];return I.jsx("span",{className:`px-3 py-1 rounded-full text-[10px] md:text-xs font-bold border ${n}`,children:e||"NO DEFINIDA"})}function j4({school:e,onClose:t,db:n,userId:i}){const[s,r]=it.useState(!1),[a,l]=it.useState([]),[u,h]=it.useState(e.completedActions||0),[d,m]=it.useState(e.progressActions||0),[g,E]=it.useState(e.pendingActions||0),[D,M]=it.useState(e.renewal||"NO DEFINIDA"),[U,b]=it.useState("");it.useEffect(()=>{s||(h(e.completedActions||0),m(e.progressActions||0),E(e.pendingActions||0),M(e.renewal||"NO DEFINIDA"))},[e,s]),it.useEffect(()=>{const P=qb(n,"users",i,"comments"),_=O4(P,M4("schoolId","==",e.id)),y=tw(_,v=>{const w=v.docs.map(R=>({id:R.id,...R.data()}));w.sort((R,S)=>S.createdAt-R.createdAt),l(w)});return()=>y()},[n,i,e.id]);const A=async()=>{const P=Ka(n,"users",i,"schools",e.id);await Tf(P,{...e,completedActions:Number(u),progressActions:Number(d),pendingActions:Number(g),renewal:D,updatedAt:new Date().toISOString()},{merge:!0}),r(!1)},C=async P=>{if(P.preventDefault(),!U.trim())return;const _=Date.now().toString(),y=Ka(n,"users",i,"comments",_);await Tf(y,{schoolId:e.id,text:U,status:"OPEN",createdAt:Date.now(),resolvedAt:null}),b("")},x=async P=>{const _=Ka(n,"users",i,"comments",P.id),y=P.status==="OPEN";await Tf(_,{...P,status:y?"RESOLVED":"OPEN",resolvedAt:y?Date.now():null},{merge:!0})},z=async P=>{const _=Ka(n,"users",i,"comments",P);await L4(_)};return I.jsx("div",{className:"fixed inset-0 z-[60] flex items-center justify-end bg-black/40 backdrop-blur-sm animate-in fade-in duration-200",children:I.jsxs("div",{className:"bg-white w-full max-w-md h-full shadow-2xl flex flex-col animate-in slide-in-from-right-full duration-300 relative",children:[I.jsxs("div",{className:"p-4 md:p-6 border-b border-gray-100 bg-gray-50 flex justify-between items-start",children:[I.jsxs("div",{className:"pr-8",children:[I.jsx("h2",{className:"text-xl font-bold text-gray-900 leading-tight",children:e.name}),I.jsxs("p",{className:"text-sm text-gray-500 mt-1",children:["Coach: ",I.jsx("span",{className:"font-semibold text-indigo-600",children:e.coach})," | ",e.region]})]}),I.jsx("button",{onClick:t,className:"p-2 bg-white border border-gray-200 rounded-full hover:bg-gray-100 text-gray-500 transition-colors absolute top-4 right-4",children:I.jsx(vd,{size:18})})]}),I.jsxs("div",{className:"flex-1 overflow-y-auto p-4 md:p-6 space-y-8 pb-24",children:[I.jsxs("section",{className:"bg-white border border-gray-200 rounded-xl p-5 shadow-sm",children:[I.jsxs("div",{className:"flex justify-between items-center mb-4",children:[I.jsxs("h3",{className:"font-bold text-gray-800 flex items-center gap-2",children:[I.jsx(aA,{size:18,className:"text-indigo-500"})," Avance de Acciones"]}),s?I.jsxs("div",{className:"flex gap-2",children:[I.jsx("button",{onClick:()=>r(!1),className:"text-xs font-semibold text-gray-500 hover:underline",children:"Cancelar"}),I.jsx("button",{onClick:A,className:"text-xs font-semibold text-emerald-600 hover:underline",children:"Guardar"})]}):I.jsx("button",{onClick:()=>r(!0),className:"text-xs font-semibold text-indigo-600 hover:underline",children:"Editar"})]}),s?I.jsxs("div",{className:"space-y-3",children:[I.jsxs("div",{className:"grid grid-cols-2 items-center gap-4",children:[I.jsx("label",{className:"text-sm font-medium text-emerald-700",children:"Completadas"}),I.jsx("input",{type:"number",min:"0",value:u,onChange:P=>h(P.target.value),className:"border rounded px-3 py-1.5 w-full text-sm"})]}),I.jsxs("div",{className:"grid grid-cols-2 items-center gap-4",children:[I.jsx("label",{className:"text-sm font-medium text-yellow-700",children:"En Progreso"}),I.jsx("input",{type:"number",min:"0",value:d,onChange:P=>m(P.target.value),className:"border rounded px-3 py-1.5 w-full text-sm"})]}),I.jsxs("div",{className:"grid grid-cols-2 items-center gap-4",children:[I.jsx("label",{className:"text-sm font-medium text-rose-700",children:"Pendientes"}),I.jsx("input",{type:"number",min:"0",value:g,onChange:P=>E(P.target.value),className:"border rounded px-3 py-1.5 w-full text-sm"})]}),I.jsxs("div",{className:"grid grid-cols-2 items-center gap-4 pt-3 border-t",children:[I.jsx("label",{className:"text-sm font-bold text-gray-700",children:"Renovación"}),I.jsxs("select",{value:D,onChange:P=>M(P.target.value),className:"border rounded px-3 py-1.5 w-full text-sm font-semibold",children:[I.jsx("option",{value:"ALTA",children:"ALTA"}),I.jsx("option",{value:"MEDIA",children:"MEDIA"}),I.jsx("option",{value:"BAJA",children:"BAJA"}),I.jsx("option",{value:"NO DEFINIDA",children:"NO DEFINIDA"})]})]})]}):I.jsxs("div",{className:"space-y-4",children:[I.jsxs("div",{className:"grid grid-cols-3 gap-2 text-center",children:[I.jsxs("div",{className:"bg-emerald-50 p-2 md:p-3 rounded-lg border border-emerald-100",children:[I.jsx("div",{className:"text-xl md:text-2xl font-black text-emerald-600",children:e.completedActions||0}),I.jsx("div",{className:"text-[9px] md:text-[10px] uppercase font-bold text-emerald-800 mt-1",children:"Hechas"})]}),I.jsxs("div",{className:"bg-yellow-50 p-2 md:p-3 rounded-lg border border-yellow-100",children:[I.jsx("div",{className:"text-xl md:text-2xl font-black text-yellow-600",children:e.progressActions||0}),I.jsx("div",{className:"text-[9px] md:text-[10px] uppercase font-bold text-yellow-800 mt-1",children:"Progreso"})]}),I.jsxs("div",{className:"bg-rose-50 p-2 md:p-3 rounded-lg border border-rose-100",children:[I.jsx("div",{className:"text-xl md:text-2xl font-black text-rose-600",children:e.pendingActions||0}),I.jsx("div",{className:"text-[9px] md:text-[10px] uppercase font-bold text-rose-800 mt-1",children:"Faltan"})]})]}),I.jsxs("div",{className:"flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100",children:[I.jsx("span",{className:"text-sm font-bold text-gray-700",children:"Probabilidad Renovación:"}),I.jsx(ew,{status:e.renewal})]})]})]}),I.jsxs("section",{children:[I.jsxs("h3",{className:"font-bold text-gray-800 flex items-center gap-2 mb-4",children:[I.jsx(JI,{size:18,className:"text-indigo-500"})," Notas y Checklist"]}),I.jsxs("form",{onSubmit:C,className:"flex gap-2 mb-4",children:[I.jsx("input",{type:"text",value:U,onChange:P=>b(P.target.value),placeholder:"Añadir seguimiento...",className:"flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"}),I.jsx("button",{type:"submit",disabled:!U.trim(),className:"bg-indigo-600 text-white p-2 rounded-lg hover:bg-indigo-700 disabled:opacity-50 transition-colors",children:I.jsx(WI,{size:20})})]}),I.jsx("div",{className:"space-y-3",children:a.length===0?I.jsx("p",{className:"text-center text-sm text-gray-400 py-4 italic",children:"No hay notas para este colegio."}):a.map(P=>{const _=P.status==="RESOLVED",y=new Date(P.createdAt).toLocaleDateString("es-CO",{day:"2-digit",month:"short"});return I.jsx("div",{className:`p-3 rounded-lg border transition-all ${_?"bg-gray-50 border-gray-200":"bg-white border-indigo-100 shadow-sm"}`,children:I.jsxs("div",{className:"flex gap-3 items-start",children:[I.jsx("button",{onClick:()=>x(P),className:`mt-0.5 shrink-0 transition-colors ${_?"text-emerald-500 hover:text-gray-400":"text-gray-300 hover:text-emerald-500"}`,children:I.jsx(oA,{size:20,className:_?"fill-emerald-50":""})}),I.jsxs("div",{className:"flex-1",children:[I.jsx("p",{className:`text-sm ${_?"text-gray-500 line-through":"text-gray-800"}`,children:P.text}),I.jsxs("div",{className:"flex items-center gap-3 mt-2 text-[10px] text-gray-400 flex-wrap",children:[I.jsxs("span",{children:["Reportado: ",y]}),_&&P.resolvedAt&&I.jsxs("span",{className:"text-emerald-600 font-medium bg-emerald-50 px-1.5 py-0.5 rounded",children:["Resuelto el ",new Date(P.resolvedAt).toLocaleDateString("es-CO")]})]})]}),I.jsx("button",{onClick:()=>z(P.id),className:"text-gray-300 hover:text-red-500 md:opacity-0 md:group-hover:opacity-100 transition-opacity p-1",children:I.jsx(vd,{size:14})})]})},P.id)})})]})]})]})})}NI.createRoot(document.getElementById("root")).render(I.jsx(Xw.StrictMode,{children:I.jsx(z4,{})}));
