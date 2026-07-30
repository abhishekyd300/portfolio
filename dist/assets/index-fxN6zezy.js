(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function H_(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var id={exports:{}},Oo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wg;function D1(){if(wg)return Oo;wg=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:d,ref:l!==void 0?l:null,props:c}}return Oo.Fragment=e,Oo.jsx=i,Oo.jsxs=i,Oo}var Dg;function U1(){return Dg||(Dg=1,id.exports=D1()),id.exports}var L=U1(),ad={exports:{}},at={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ug;function L1(){if(Ug)return at;Ug=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),_=Symbol.iterator;function b(U){return U===null||typeof U!="object"?null:(U=_&&U[_]||U["@@iterator"],typeof U=="function"?U:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D=Object.assign,M={};function v(U,Z,be){this.props=U,this.context=Z,this.refs=M,this.updater=be||A}v.prototype.isReactComponent={},v.prototype.setState=function(U,Z){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,Z,"setState")},v.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function H(){}H.prototype=v.prototype;function G(U,Z,be){this.props=U,this.context=Z,this.refs=M,this.updater=be||A}var C=G.prototype=new H;C.constructor=G,D(C,v.prototype),C.isPureReactComponent=!0;var I=Array.isArray;function N(){}var P={H:null,A:null,T:null,S:null},E=Object.prototype.hasOwnProperty;function O(U,Z,be){var Ce=be.ref;return{$$typeof:s,type:U,key:Z,ref:Ce!==void 0?Ce:null,props:be}}function Y(U,Z){return O(U.type,Z,U.props)}function k(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function Q(U){var Z={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(be){return Z[be]})}var he=/\/+/g;function ve(U,Z){return typeof U=="object"&&U!==null&&U.key!=null?Q(""+U.key):Z.toString(36)}function J(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(N,N):(U.status="pending",U.then(function(Z){U.status==="pending"&&(U.status="fulfilled",U.value=Z)},function(Z){U.status==="pending"&&(U.status="rejected",U.reason=Z)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function z(U,Z,be,Ce,ze){var ae=typeof U;(ae==="undefined"||ae==="boolean")&&(U=null);var Se=!1;if(U===null)Se=!0;else switch(ae){case"bigint":case"string":case"number":Se=!0;break;case"object":switch(U.$$typeof){case s:case e:Se=!0;break;case S:return Se=U._init,z(Se(U._payload),Z,be,Ce,ze)}}if(Se)return ze=ze(U),Se=Ce===""?"."+ve(U,0):Ce,I(ze)?(be="",Se!=null&&(be=Se.replace(he,"$&/")+"/"),z(ze,Z,be,"",function(tt){return tt})):ze!=null&&(k(ze)&&(ze=Y(ze,be+(ze.key==null||U&&U.key===ze.key?"":(""+ze.key).replace(he,"$&/")+"/")+Se)),Z.push(ze)),1;Se=0;var Me=Ce===""?".":Ce+":";if(I(U))for(var He=0;He<U.length;He++)Ce=U[He],ae=Me+ve(Ce,He),Se+=z(Ce,Z,be,ae,ze);else if(He=b(U),typeof He=="function")for(U=He.call(U),He=0;!(Ce=U.next()).done;)Ce=Ce.value,ae=Me+ve(Ce,He++),Se+=z(Ce,Z,be,ae,ze);else if(ae==="object"){if(typeof U.then=="function")return z(J(U),Z,be,Ce,ze);throw Z=String(U),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return Se}function F(U,Z,be){if(U==null)return U;var Ce=[],ze=0;return z(U,Ce,"","",function(ae){return Z.call(be,ae,ze++)}),Ce}function te(U){if(U._status===-1){var Z=U._result;Z=Z(),Z.then(function(be){(U._status===0||U._status===-1)&&(U._status=1,U._result=be)},function(be){(U._status===0||U._status===-1)&&(U._status=2,U._result=be)}),U._status===-1&&(U._status=0,U._result=Z)}if(U._status===1)return U._result.default;throw U._result}var ge=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)},Ee={map:F,forEach:function(U,Z,be){F(U,function(){Z.apply(this,arguments)},be)},count:function(U){var Z=0;return F(U,function(){Z++}),Z},toArray:function(U){return F(U,function(Z){return Z})||[]},only:function(U){if(!k(U))throw Error("React.Children.only expected to receive a single React element child.");return U}};return at.Activity=x,at.Children=Ee,at.Component=v,at.Fragment=i,at.Profiler=l,at.PureComponent=G,at.StrictMode=r,at.Suspense=m,at.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,at.__COMPILER_RUNTIME={__proto__:null,c:function(U){return P.H.useMemoCache(U)}},at.cache=function(U){return function(){return U.apply(null,arguments)}},at.cacheSignal=function(){return null},at.cloneElement=function(U,Z,be){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var Ce=D({},U.props),ze=U.key;if(Z!=null)for(ae in Z.key!==void 0&&(ze=""+Z.key),Z)!E.call(Z,ae)||ae==="key"||ae==="__self"||ae==="__source"||ae==="ref"&&Z.ref===void 0||(Ce[ae]=Z[ae]);var ae=arguments.length-2;if(ae===1)Ce.children=be;else if(1<ae){for(var Se=Array(ae),Me=0;Me<ae;Me++)Se[Me]=arguments[Me+2];Ce.children=Se}return O(U.type,ze,Ce)},at.createContext=function(U){return U={$$typeof:d,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:c,_context:U},U},at.createElement=function(U,Z,be){var Ce,ze={},ae=null;if(Z!=null)for(Ce in Z.key!==void 0&&(ae=""+Z.key),Z)E.call(Z,Ce)&&Ce!=="key"&&Ce!=="__self"&&Ce!=="__source"&&(ze[Ce]=Z[Ce]);var Se=arguments.length-2;if(Se===1)ze.children=be;else if(1<Se){for(var Me=Array(Se),He=0;He<Se;He++)Me[He]=arguments[He+2];ze.children=Me}if(U&&U.defaultProps)for(Ce in Se=U.defaultProps,Se)ze[Ce]===void 0&&(ze[Ce]=Se[Ce]);return O(U,ae,ze)},at.createRef=function(){return{current:null}},at.forwardRef=function(U){return{$$typeof:p,render:U}},at.isValidElement=k,at.lazy=function(U){return{$$typeof:S,_payload:{_status:-1,_result:U},_init:te}},at.memo=function(U,Z){return{$$typeof:h,type:U,compare:Z===void 0?null:Z}},at.startTransition=function(U){var Z=P.T,be={};P.T=be;try{var Ce=U(),ze=P.S;ze!==null&&ze(be,Ce),typeof Ce=="object"&&Ce!==null&&typeof Ce.then=="function"&&Ce.then(N,ge)}catch(ae){ge(ae)}finally{Z!==null&&be.types!==null&&(Z.types=be.types),P.T=Z}},at.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},at.use=function(U){return P.H.use(U)},at.useActionState=function(U,Z,be){return P.H.useActionState(U,Z,be)},at.useCallback=function(U,Z){return P.H.useCallback(U,Z)},at.useContext=function(U){return P.H.useContext(U)},at.useDebugValue=function(){},at.useDeferredValue=function(U,Z){return P.H.useDeferredValue(U,Z)},at.useEffect=function(U,Z){return P.H.useEffect(U,Z)},at.useEffectEvent=function(U){return P.H.useEffectEvent(U)},at.useId=function(){return P.H.useId()},at.useImperativeHandle=function(U,Z,be){return P.H.useImperativeHandle(U,Z,be)},at.useInsertionEffect=function(U,Z){return P.H.useInsertionEffect(U,Z)},at.useLayoutEffect=function(U,Z){return P.H.useLayoutEffect(U,Z)},at.useMemo=function(U,Z){return P.H.useMemo(U,Z)},at.useOptimistic=function(U,Z){return P.H.useOptimistic(U,Z)},at.useReducer=function(U,Z,be){return P.H.useReducer(U,Z,be)},at.useRef=function(U){return P.H.useRef(U)},at.useState=function(U){return P.H.useState(U)},at.useSyncExternalStore=function(U,Z,be){return P.H.useSyncExternalStore(U,Z,be)},at.useTransition=function(){return P.H.useTransition()},at.version="19.2.8",at}var Lg;function Oh(){return Lg||(Lg=1,ad.exports=L1()),ad.exports}var bn=Oh();const sr=H_(bn);var rd={exports:{}},Po={},sd={exports:{}},od={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ng;function N1(){return Ng||(Ng=1,(function(s){function e(z,F){var te=z.length;z.push(F);e:for(;0<te;){var ge=te-1>>>1,Ee=z[ge];if(0<l(Ee,F))z[ge]=F,z[te]=Ee,te=ge;else break e}}function i(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var F=z[0],te=z.pop();if(te!==F){z[0]=te;e:for(var ge=0,Ee=z.length,U=Ee>>>1;ge<U;){var Z=2*(ge+1)-1,be=z[Z],Ce=Z+1,ze=z[Ce];if(0>l(be,te))Ce<Ee&&0>l(ze,be)?(z[ge]=ze,z[Ce]=te,ge=Ce):(z[ge]=be,z[Z]=te,ge=Z);else if(Ce<Ee&&0>l(ze,te))z[ge]=ze,z[Ce]=te,ge=Ce;else break e}}return F}function l(z,F){var te=z.sortIndex-F.sortIndex;return te!==0?te:z.id-F.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var d=Date,p=d.now();s.unstable_now=function(){return d.now()-p}}var m=[],h=[],S=1,x=null,_=3,b=!1,A=!1,D=!1,M=!1,v=typeof setTimeout=="function"?setTimeout:null,H=typeof clearTimeout=="function"?clearTimeout:null,G=typeof setImmediate<"u"?setImmediate:null;function C(z){for(var F=i(h);F!==null;){if(F.callback===null)r(h);else if(F.startTime<=z)r(h),F.sortIndex=F.expirationTime,e(m,F);else break;F=i(h)}}function I(z){if(D=!1,C(z),!A)if(i(m)!==null)A=!0,N||(N=!0,Q());else{var F=i(h);F!==null&&J(I,F.startTime-z)}}var N=!1,P=-1,E=5,O=-1;function Y(){return M?!0:!(s.unstable_now()-O<E)}function k(){if(M=!1,N){var z=s.unstable_now();O=z;var F=!0;try{e:{A=!1,D&&(D=!1,H(P),P=-1),b=!0;var te=_;try{t:{for(C(z),x=i(m);x!==null&&!(x.expirationTime>z&&Y());){var ge=x.callback;if(typeof ge=="function"){x.callback=null,_=x.priorityLevel;var Ee=ge(x.expirationTime<=z);if(z=s.unstable_now(),typeof Ee=="function"){x.callback=Ee,C(z),F=!0;break t}x===i(m)&&r(m),C(z)}else r(m);x=i(m)}if(x!==null)F=!0;else{var U=i(h);U!==null&&J(I,U.startTime-z),F=!1}}break e}finally{x=null,_=te,b=!1}F=void 0}}finally{F?Q():N=!1}}}var Q;if(typeof G=="function")Q=function(){G(k)};else if(typeof MessageChannel<"u"){var he=new MessageChannel,ve=he.port2;he.port1.onmessage=k,Q=function(){ve.postMessage(null)}}else Q=function(){v(k,0)};function J(z,F){P=v(function(){z(s.unstable_now())},F)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(z){z.callback=null},s.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<z?Math.floor(1e3/z):5},s.unstable_getCurrentPriorityLevel=function(){return _},s.unstable_next=function(z){switch(_){case 1:case 2:case 3:var F=3;break;default:F=_}var te=_;_=F;try{return z()}finally{_=te}},s.unstable_requestPaint=function(){M=!0},s.unstable_runWithPriority=function(z,F){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var te=_;_=z;try{return F()}finally{_=te}},s.unstable_scheduleCallback=function(z,F,te){var ge=s.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?ge+te:ge):te=ge,z){case 1:var Ee=-1;break;case 2:Ee=250;break;case 5:Ee=1073741823;break;case 4:Ee=1e4;break;default:Ee=5e3}return Ee=te+Ee,z={id:S++,callback:F,priorityLevel:z,startTime:te,expirationTime:Ee,sortIndex:-1},te>ge?(z.sortIndex=te,e(h,z),i(m)===null&&z===i(h)&&(D?(H(P),P=-1):D=!0,J(I,te-ge))):(z.sortIndex=Ee,e(m,z),A||b||(A=!0,N||(N=!0,Q()))),z},s.unstable_shouldYield=Y,s.unstable_wrapCallback=function(z){var F=_;return function(){var te=_;_=F;try{return z.apply(this,arguments)}finally{_=te}}}})(od)),od}var Og;function O1(){return Og||(Og=1,sd.exports=N1()),sd.exports}var ld={exports:{}},Ln={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pg;function P1(){if(Pg)return Ln;Pg=1;var s=Oh();function e(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var S=2;S<arguments.length;S++)h+="&args[]="+encodeURIComponent(arguments[S])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,h,S){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:h,implementation:S}}var d=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Ln.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Ln.createPortal=function(m,h){var S=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return c(m,h,null,S)},Ln.flushSync=function(m){var h=d.T,S=r.p;try{if(d.T=null,r.p=2,m)return m()}finally{d.T=h,r.p=S,r.d.f()}},Ln.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,r.d.C(m,h))},Ln.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Ln.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var S=h.as,x=p(S,h.crossOrigin),_=typeof h.integrity=="string"?h.integrity:void 0,b=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;S==="style"?r.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:x,integrity:_,fetchPriority:b}):S==="script"&&r.d.X(m,{crossOrigin:x,integrity:_,fetchPriority:b,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Ln.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var S=p(h.as,h.crossOrigin);r.d.M(m,{crossOrigin:S,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&r.d.M(m)},Ln.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var S=h.as,x=p(S,h.crossOrigin);r.d.L(m,S,{crossOrigin:x,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Ln.preloadModule=function(m,h){if(typeof m=="string")if(h){var S=p(h.as,h.crossOrigin);r.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:S,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else r.d.m(m)},Ln.requestFormReset=function(m){r.d.r(m)},Ln.unstable_batchedUpdates=function(m,h){return m(h)},Ln.useFormState=function(m,h,S){return d.H.useFormState(m,h,S)},Ln.useFormStatus=function(){return d.H.useHostTransitionStatus()},Ln.version="19.2.8",Ln}var zg;function z1(){if(zg)return ld.exports;zg=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),ld.exports=P1(),ld.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ig;function I1(){if(Ig)return Po;Ig=1;var s=O1(),e=Oh(),i=z1();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(r(188))}function h(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),t;if(f===o)return m(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=f;else{for(var g=!1,R=u.child;R;){if(R===a){g=!0,a=u,o=f;break}if(R===o){g=!0,o=u,a=f;break}R=R.sibling}if(!g){for(R=f.child;R;){if(R===a){g=!0,a=f,o=u;break}if(R===o){g=!0,o=f,a=u;break}R=R.sibling}if(!g)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function S(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=S(t),n!==null)return n;t=t.sibling}return null}var x=Object.assign,_=Symbol.for("react.element"),b=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),H=Symbol.for("react.consumer"),G=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),N=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),O=Symbol.for("react.activity"),Y=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function Q(t){return t===null||typeof t!="object"?null:(t=k&&t[k]||t["@@iterator"],typeof t=="function"?t:null)}var he=Symbol.for("react.client.reference");function ve(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===he?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case D:return"Fragment";case v:return"Profiler";case M:return"StrictMode";case I:return"Suspense";case N:return"SuspenseList";case O:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case A:return"Portal";case G:return t.displayName||"Context";case H:return(t._context.displayName||"Context")+".Consumer";case C:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case P:return n=t.displayName||null,n!==null?n:ve(t.type)||"Memo";case E:n=t._payload,t=t._init;try{return ve(t(n))}catch{}}return null}var J=Array.isArray,z=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,te={pending:!1,data:null,method:null,action:null},ge=[],Ee=-1;function U(t){return{current:t}}function Z(t){0>Ee||(t.current=ge[Ee],ge[Ee]=null,Ee--)}function be(t,n){Ee++,ge[Ee]=t.current,t.current=n}var Ce=U(null),ze=U(null),ae=U(null),Se=U(null);function Me(t,n){switch(be(ae,n),be(ze,t),be(Ce,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?J0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=J0(n),t=$0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Z(Ce),be(Ce,t)}function He(){Z(Ce),Z(ze),Z(ae)}function tt(t){t.memoizedState!==null&&be(Se,t);var n=Ce.current,a=$0(n,t.type);n!==a&&(be(ze,t),be(Ce,a))}function Ke(t){ze.current===t&&(Z(Ce),Z(ze)),Se.current===t&&(Z(Se),Do._currentValue=te)}var Wt,ut;function _t(t){if(Wt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Wt=n&&n[1]||"",ut=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Wt+t+ut}var vt=!1;function ft(t,n){if(!t||vt)return"";vt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var xe=function(){throw Error()};if(Object.defineProperty(xe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xe,[])}catch(ce){var oe=ce}Reflect.construct(t,[],xe)}else{try{xe.call()}catch(ce){oe=ce}t.call(xe.prototype)}}else{try{throw Error()}catch(ce){oe=ce}(xe=t())&&typeof xe.catch=="function"&&xe.catch(function(){})}}catch(ce){if(ce&&oe&&typeof ce.stack=="string")return[ce.stack,oe.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),g=f[0],R=f[1];if(g&&R){var B=g.split(`
`),ee=R.split(`
`);for(u=o=0;o<B.length&&!B[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ee.length&&!ee[u].includes("DetermineComponentFrameRoot");)u++;if(o===B.length||u===ee.length)for(o=B.length-1,u=ee.length-1;1<=o&&0<=u&&B[o]!==ee[u];)u--;for(;1<=o&&0<=u;o--,u--)if(B[o]!==ee[u]){if(o!==1||u!==1)do if(o--,u--,0>u||B[o]!==ee[u]){var pe=`
`+B[o].replace(" at new "," at ");return t.displayName&&pe.includes("<anonymous>")&&(pe=pe.replace("<anonymous>",t.displayName)),pe}while(1<=o&&0<=u);break}}}finally{vt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?_t(a):""}function Jt(t,n){switch(t.tag){case 26:case 27:case 5:return _t(t.type);case 16:return _t("Lazy");case 13:return t.child!==n&&n!==null?_t("Suspense Fallback"):_t("Suspense");case 19:return _t("SuspenseList");case 0:case 15:return ft(t.type,!1);case 11:return ft(t.type.render,!1);case 1:return ft(t.type,!0);case 31:return _t("Activity");default:return""}}function $t(t){try{var n="",a=null;do n+=Jt(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var en=Object.prototype.hasOwnProperty,sn=s.unstable_scheduleCallback,Xt=s.unstable_cancelCallback,tn=s.unstable_shouldYield,q=s.unstable_requestPaint,Bt=s.unstable_now,Rt=s.unstable_getCurrentPriorityLevel,w=s.unstable_ImmediatePriority,y=s.unstable_UserBlockingPriority,K=s.unstable_NormalPriority,re=s.unstable_LowPriority,fe=s.unstable_IdlePriority,Te=s.log,De=s.unstable_setDisableYieldValue,ue=null,de=null;function Re(t){if(typeof Te=="function"&&De(t),de&&typeof de.setStrictMode=="function")try{de.setStrictMode(ue,t)}catch{}}var Be=Math.clz32?Math.clz32:Ze,Ne=Math.log,Ue=Math.LN2;function Ze(t){return t>>>=0,t===0?32:31-(Ne(t)/Ue|0)|0}var Qe=256,it=262144,X=4194304;function Ae(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function me(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,f=t.suspendedLanes,g=t.pingedLanes;t=t.warmLanes;var R=o&134217727;return R!==0?(o=R&~f,o!==0?u=Ae(o):(g&=R,g!==0?u=Ae(g):a||(a=R&~t,a!==0&&(u=Ae(a))))):(R=o&~f,R!==0?u=Ae(R):g!==0?u=Ae(g):a||(a=o&~t,a!==0&&(u=Ae(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function we(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Ie(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ye(){var t=X;return X<<=1,(X&62914560)===0&&(X=4194304),t}function qe(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Ve(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function jt(t,n,a,o,u,f){var g=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var R=t.entanglements,B=t.expirationTimes,ee=t.hiddenUpdates;for(a=g&~a;0<a;){var pe=31-Be(a),xe=1<<pe;R[pe]=0,B[pe]=-1;var oe=ee[pe];if(oe!==null)for(ee[pe]=null,pe=0;pe<oe.length;pe++){var ce=oe[pe];ce!==null&&(ce.lane&=-536870913)}a&=~xe}o!==0&&Ut(t,o,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(g&~n))}function Ut(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Be(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function Zn(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Be(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function Kn(t,n){var a=n&-n;return a=(a&42)!==0?1:ks(a),(a&(t.suspendedLanes|n))!==0?0:a}function ks(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Xs(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ws(){var t=F.p;return t!==0?t:(t=window.event,t===void 0?32:Mg(t.type))}function Vr(t,n){var a=F.p;try{return F.p=t,n()}finally{F.p=a}}var Li=Math.random().toString(36).slice(2),un="__reactFiber$"+Li,En="__reactProps$"+Li,Fn="__reactContainer$"+Li,lr="__reactEvents$"+Li,Qo="__reactListeners$"+Li,Jo="__reactHandles$"+Li,cr="__reactResources$"+Li,Ta="__reactMarker$"+Li;function Aa(t){delete t[un],delete t[En],delete t[lr],delete t[Qo],delete t[Jo]}function Yi(t){var n=t[un];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Fn]||a[un]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=sg(t);t!==null;){if(a=t[un])return a;t=sg(t)}return n}t=a,a=t.parentNode}return null}function ji(t){if(t=t[un]||t[Fn]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function ur(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function Ra(t){var n=t[cr];return n||(n=t[cr]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function fn(t){t[Ta]=!0}var $o=new Set,T={};function W(t,n){se(t,n),se(t+"Capture",n)}function se(t,n){for(T[t]=n,t=0;t<n.length;t++)$o.add(n[t])}var ne=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ie={},Oe={};function Ge(t){return en.call(Oe,t)?!0:en.call(ie,t)?!1:ne.test(t)?Oe[t]=!0:(ie[t]=!0,!1)}function Le(t,n,a){if(Ge(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Xe(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function ke(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function Je(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function st(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function je(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(g){a=""+g,f.call(this,g)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Et(t){if(!t._valueTracker){var n=st(t)?"checked":"value";t._valueTracker=je(t,n,""+t[n])}}function Zt(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=st(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function Vt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Lt=/[\n"\\]/g;function Nt(t){return t.replace(Lt,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Fe(t,n,a,o,u,f,g,R){t.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?t.type=g:t.removeAttribute("type"),n!=null?g==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Je(n)):t.value!==""+Je(n)&&(t.value=""+Je(n)):g!=="submit"&&g!=="reset"||t.removeAttribute("value"),n!=null?dt(t,g,Je(n)):a!=null?dt(t,g,Je(a)):o!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+Je(R):t.removeAttribute("name")}function Un(t,n,a,o,u,f,g,R){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Et(t);return}a=a!=null?""+Je(a):"",n=n!=null?""+Je(n):a,R||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=R?t.checked:!!o,t.defaultChecked=!!o,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(t.name=g),Et(t)}function dt(t,n,a){n==="number"&&Vt(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function _n(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+Je(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Qn(t,n,a){if(n!=null&&(n=""+Je(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+Je(a):""}function yi(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(J(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=Je(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),Et(t)}function Jn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Ot=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Kt(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||Ot.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Mi(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Kt(t,u,o)}else for(var f in n)n.hasOwnProperty(f)&&Kt(t,f,n[f])}function Dt(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ni=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ca=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function fr(t){return Ca.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Zi(){}var $c=null;function eu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var kr=null,Xr=null;function Qh(t){var n=ji(t);if(n&&(t=n.stateNode)){var a=t[En]||null;e:switch(t=n.stateNode,n.type){case"input":if(Fe(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Nt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[En]||null;if(!u)throw Error(r(90));Fe(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&Zt(o)}break e;case"textarea":Qn(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&_n(t,!!a.multiple,n,!1)}}}var tu=!1;function Jh(t,n,a){if(tu)return t(n,a);tu=!0;try{var o=t(n);return o}finally{if(tu=!1,(kr!==null||Xr!==null)&&(Hl(),kr&&(n=kr,t=Xr,Xr=kr=null,Qh(n),t)))for(n=0;n<t.length;n++)Qh(t[n])}}function qs(t,n){var a=t.stateNode;if(a===null)return null;var o=a[En]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Ki=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),nu=!1;if(Ki)try{var Ys={};Object.defineProperty(Ys,"passive",{get:function(){nu=!0}}),window.addEventListener("test",Ys,Ys),window.removeEventListener("test",Ys,Ys)}catch{nu=!1}var wa=null,iu=null,el=null;function $h(){if(el)return el;var t,n=iu,a=n.length,o,u="value"in wa?wa.value:wa.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var g=a-t;for(o=1;o<=g&&n[a-o]===u[f-o];o++);return el=u.slice(t,1<o?1-o:void 0)}function tl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function nl(){return!0}function ep(){return!1}function Hn(t){function n(a,o,u,f,g){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=g,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(a=t[R],this[R]=a?a(f):f[R]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?nl:ep,this.isPropagationStopped=ep,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=nl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=nl)},persist:function(){},isPersistent:nl}),n}var dr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},il=Hn(dr),js=x({},dr,{view:0,detail:0}),Cv=Hn(js),au,ru,Zs,al=x({},js,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ou,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Zs&&(Zs&&t.type==="mousemove"?(au=t.screenX-Zs.screenX,ru=t.screenY-Zs.screenY):ru=au=0,Zs=t),au)},movementY:function(t){return"movementY"in t?t.movementY:ru}}),tp=Hn(al),wv=x({},al,{dataTransfer:0}),Dv=Hn(wv),Uv=x({},js,{relatedTarget:0}),su=Hn(Uv),Lv=x({},dr,{animationName:0,elapsedTime:0,pseudoElement:0}),Nv=Hn(Lv),Ov=x({},dr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Pv=Hn(Ov),zv=x({},dr,{data:0}),np=Hn(zv),Iv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Bv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Fv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Hv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Fv[t])?!!n[t]:!1}function ou(){return Hv}var Gv=x({},js,{key:function(t){if(t.key){var n=Iv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=tl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Bv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ou,charCode:function(t){return t.type==="keypress"?tl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?tl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Vv=Hn(Gv),kv=x({},al,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ip=Hn(kv),Xv=x({},js,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ou}),Wv=Hn(Xv),qv=x({},dr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Yv=Hn(qv),jv=x({},al,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Zv=Hn(jv),Kv=x({},dr,{newState:0,oldState:0}),Qv=Hn(Kv),Jv=[9,13,27,32],lu=Ki&&"CompositionEvent"in window,Ks=null;Ki&&"documentMode"in document&&(Ks=document.documentMode);var $v=Ki&&"TextEvent"in window&&!Ks,ap=Ki&&(!lu||Ks&&8<Ks&&11>=Ks),rp=" ",sp=!1;function op(t,n){switch(t){case"keyup":return Jv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Wr=!1;function ex(t,n){switch(t){case"compositionend":return lp(n);case"keypress":return n.which!==32?null:(sp=!0,rp);case"textInput":return t=n.data,t===rp&&sp?null:t;default:return null}}function tx(t,n){if(Wr)return t==="compositionend"||!lu&&op(t,n)?(t=$h(),el=iu=wa=null,Wr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return ap&&n.locale!=="ko"?null:n.data;default:return null}}var nx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!nx[t.type]:n==="textarea"}function up(t,n,a,o){kr?Xr?Xr.push(o):Xr=[o]:kr=o,n=Yl(n,"onChange"),0<n.length&&(a=new il("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var Qs=null,Js=null;function ix(t){q0(t,0)}function rl(t){var n=ur(t);if(Zt(n))return t}function fp(t,n){if(t==="change")return n}var dp=!1;if(Ki){var cu;if(Ki){var uu="oninput"in document;if(!uu){var hp=document.createElement("div");hp.setAttribute("oninput","return;"),uu=typeof hp.oninput=="function"}cu=uu}else cu=!1;dp=cu&&(!document.documentMode||9<document.documentMode)}function pp(){Qs&&(Qs.detachEvent("onpropertychange",mp),Js=Qs=null)}function mp(t){if(t.propertyName==="value"&&rl(Js)){var n=[];up(n,Js,t,eu(t)),Jh(ix,n)}}function ax(t,n,a){t==="focusin"?(pp(),Qs=n,Js=a,Qs.attachEvent("onpropertychange",mp)):t==="focusout"&&pp()}function rx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return rl(Js)}function sx(t,n){if(t==="click")return rl(n)}function ox(t,n){if(t==="input"||t==="change")return rl(n)}function lx(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var $n=typeof Object.is=="function"?Object.is:lx;function $s(t,n){if($n(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!en.call(n,u)||!$n(t[u],n[u]))return!1}return!0}function gp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function _p(t,n){var a=gp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=gp(a)}}function vp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?vp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function xp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Vt(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Vt(t.document)}return n}function fu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var cx=Ki&&"documentMode"in document&&11>=document.documentMode,qr=null,du=null,eo=null,hu=!1;function Sp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;hu||qr==null||qr!==Vt(o)||(o=qr,"selectionStart"in o&&fu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),eo&&$s(eo,o)||(eo=o,o=Yl(du,"onSelect"),0<o.length&&(n=new il("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=qr)))}function hr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Yr={animationend:hr("Animation","AnimationEnd"),animationiteration:hr("Animation","AnimationIteration"),animationstart:hr("Animation","AnimationStart"),transitionrun:hr("Transition","TransitionRun"),transitionstart:hr("Transition","TransitionStart"),transitioncancel:hr("Transition","TransitionCancel"),transitionend:hr("Transition","TransitionEnd")},pu={},yp={};Ki&&(yp=document.createElement("div").style,"AnimationEvent"in window||(delete Yr.animationend.animation,delete Yr.animationiteration.animation,delete Yr.animationstart.animation),"TransitionEvent"in window||delete Yr.transitionend.transition);function pr(t){if(pu[t])return pu[t];if(!Yr[t])return t;var n=Yr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in yp)return pu[t]=n[a];return t}var Mp=pr("animationend"),bp=pr("animationiteration"),Ep=pr("animationstart"),ux=pr("transitionrun"),fx=pr("transitionstart"),dx=pr("transitioncancel"),Tp=pr("transitionend"),Ap=new Map,mu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");mu.push("scrollEnd");function bi(t,n){Ap.set(t,n),W(n,[t])}var sl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},li=[],jr=0,gu=0;function ol(){for(var t=jr,n=gu=jr=0;n<t;){var a=li[n];li[n++]=null;var o=li[n];li[n++]=null;var u=li[n];li[n++]=null;var f=li[n];if(li[n++]=null,o!==null&&u!==null){var g=o.pending;g===null?u.next=u:(u.next=g.next,g.next=u),o.pending=u}f!==0&&Rp(a,u,f)}}function ll(t,n,a,o){li[jr++]=t,li[jr++]=n,li[jr++]=a,li[jr++]=o,gu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function _u(t,n,a,o){return ll(t,n,a,o),cl(t)}function mr(t,n){return ll(t,null,null,n),cl(t)}function Rp(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-Be(a),t=f.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function cl(t){if(50<bo)throw bo=0,Rf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Zr={};function hx(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ei(t,n,a,o){return new hx(t,n,a,o)}function vu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Qi(t,n){var a=t.alternate;return a===null?(a=ei(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Cp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function ul(t,n,a,o,u,f){var g=0;if(o=t,typeof t=="function")vu(t)&&(g=1);else if(typeof t=="string")g=v1(t,a,Ce.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case O:return t=ei(31,a,n,u),t.elementType=O,t.lanes=f,t;case D:return gr(a.children,u,f,n);case M:g=8,u|=24;break;case v:return t=ei(12,a,n,u|2),t.elementType=v,t.lanes=f,t;case I:return t=ei(13,a,n,u),t.elementType=I,t.lanes=f,t;case N:return t=ei(19,a,n,u),t.elementType=N,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case G:g=10;break e;case H:g=9;break e;case C:g=11;break e;case P:g=14;break e;case E:g=16,o=null;break e}g=29,a=Error(r(130,t===null?"null":typeof t,"")),o=null}return n=ei(g,a,n,u),n.elementType=t,n.type=o,n.lanes=f,n}function gr(t,n,a,o){return t=ei(7,t,o,n),t.lanes=a,t}function xu(t,n,a){return t=ei(6,t,null,n),t.lanes=a,t}function wp(t){var n=ei(18,null,null,0);return n.stateNode=t,n}function Su(t,n,a){return n=ei(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Dp=new WeakMap;function ci(t,n){if(typeof t=="object"&&t!==null){var a=Dp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:$t(n)},Dp.set(t,n),n)}return{value:t,source:n,stack:$t(n)}}var Kr=[],Qr=0,fl=null,to=0,ui=[],fi=0,Da=null,Oi=1,Pi="";function Ji(t,n){Kr[Qr++]=to,Kr[Qr++]=fl,fl=t,to=n}function Up(t,n,a){ui[fi++]=Oi,ui[fi++]=Pi,ui[fi++]=Da,Da=t;var o=Oi;t=Pi;var u=32-Be(o)-1;o&=~(1<<u),a+=1;var f=32-Be(n)+u;if(30<f){var g=u-u%5;f=(o&(1<<g)-1).toString(32),o>>=g,u-=g,Oi=1<<32-Be(n)+u|a<<u|o,Pi=f+t}else Oi=1<<f|a<<u|o,Pi=t}function yu(t){t.return!==null&&(Ji(t,1),Up(t,1,0))}function Mu(t){for(;t===fl;)fl=Kr[--Qr],Kr[Qr]=null,to=Kr[--Qr],Kr[Qr]=null;for(;t===Da;)Da=ui[--fi],ui[fi]=null,Pi=ui[--fi],ui[fi]=null,Oi=ui[--fi],ui[fi]=null}function Lp(t,n){ui[fi++]=Oi,ui[fi++]=Pi,ui[fi++]=Da,Oi=n.id,Pi=n.overflow,Da=t}var Tn=null,qt=null,xt=!1,Ua=null,di=!1,bu=Error(r(519));function La(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw no(ci(n,t)),bu}function Np(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[un]=t,n[En]=o,a){case"dialog":pt("cancel",n),pt("close",n);break;case"iframe":case"object":case"embed":pt("load",n);break;case"video":case"audio":for(a=0;a<To.length;a++)pt(To[a],n);break;case"source":pt("error",n);break;case"img":case"image":case"link":pt("error",n),pt("load",n);break;case"details":pt("toggle",n);break;case"input":pt("invalid",n),Un(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":pt("invalid",n);break;case"textarea":pt("invalid",n),yi(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||K0(n.textContent,a)?(o.popover!=null&&(pt("beforetoggle",n),pt("toggle",n)),o.onScroll!=null&&pt("scroll",n),o.onScrollEnd!=null&&pt("scrollend",n),o.onClick!=null&&(n.onclick=Zi),n=!0):n=!1,n||La(t,!0)}function Op(t){for(Tn=t.return;Tn;)switch(Tn.tag){case 5:case 31:case 13:di=!1;return;case 27:case 3:di=!0;return;default:Tn=Tn.return}}function Jr(t){if(t!==Tn)return!1;if(!xt)return Op(t),xt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Vf(t.type,t.memoizedProps)),a=!a),a&&qt&&La(t),Op(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));qt=rg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));qt=rg(t)}else n===27?(n=qt,qa(t.type)?(t=Yf,Yf=null,qt=t):qt=n):qt=Tn?pi(t.stateNode.nextSibling):null;return!0}function _r(){qt=Tn=null,xt=!1}function Eu(){var t=Ua;return t!==null&&(Xn===null?Xn=t:Xn.push.apply(Xn,t),Ua=null),t}function no(t){Ua===null?Ua=[t]:Ua.push(t)}var Tu=U(null),vr=null,$i=null;function Na(t,n,a){be(Tu,n._currentValue),n._currentValue=a}function ea(t){t._currentValue=Tu.current,Z(Tu)}function Au(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Ru(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var g=u.child;f=f.firstContext;e:for(;f!==null;){var R=f;f=u;for(var B=0;B<n.length;B++)if(R.context===n[B]){f.lanes|=a,R=f.alternate,R!==null&&(R.lanes|=a),Au(f.return,a,t),o||(g=null);break e}f=R.next}}else if(u.tag===18){if(g=u.return,g===null)throw Error(r(341));g.lanes|=a,f=g.alternate,f!==null&&(f.lanes|=a),Au(g,a,t),g=null}else g=u.child;if(g!==null)g.return=u;else for(g=u;g!==null;){if(g===t){g=null;break}if(u=g.sibling,u!==null){u.return=g.return,g=u;break}g=g.return}u=g}}function $r(t,n,a,o){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var g=u.alternate;if(g===null)throw Error(r(387));if(g=g.memoizedProps,g!==null){var R=u.type;$n(u.pendingProps.value,g.value)||(t!==null?t.push(R):t=[R])}}else if(u===Se.current){if(g=u.alternate,g===null)throw Error(r(387));g.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Do):t=[Do])}u=u.return}t!==null&&Ru(n,t,a,o),n.flags|=262144}function dl(t){for(t=t.firstContext;t!==null;){if(!$n(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function xr(t){vr=t,$i=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function An(t){return Pp(vr,t)}function hl(t,n){return vr===null&&xr(t),Pp(t,n)}function Pp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},$i===null){if(t===null)throw Error(r(308));$i=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else $i=$i.next=n;return a}var px=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},mx=s.unstable_scheduleCallback,gx=s.unstable_NormalPriority,dn={$$typeof:G,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Cu(){return{controller:new px,data:new Map,refCount:0}}function io(t){t.refCount--,t.refCount===0&&mx(gx,function(){t.controller.abort()})}var ao=null,wu=0,es=0,ts=null;function _x(t,n){if(ao===null){var a=ao=[];wu=0,es=Nf(),ts={status:"pending",value:void 0,then:function(o){a.push(o)}}}return wu++,n.then(zp,zp),n}function zp(){if(--wu===0&&ao!==null){ts!==null&&(ts.status="fulfilled");var t=ao;ao=null,es=0,ts=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function vx(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Ip=z.S;z.S=function(t,n){S0=Bt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&_x(t,n),Ip!==null&&Ip(t,n)};var Sr=U(null);function Du(){var t=Sr.current;return t!==null?t:kt.pooledCache}function pl(t,n){n===null?be(Sr,Sr.current):be(Sr,n.pool)}function Bp(){var t=Du();return t===null?null:{parent:dn._currentValue,pool:t}}var ns=Error(r(460)),Uu=Error(r(474)),ml=Error(r(542)),gl={then:function(){}};function Fp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Hp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Zi,Zi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Vp(t),t;default:if(typeof n.status=="string")n.then(Zi,Zi);else{if(t=kt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Vp(t),t}throw Mr=n,ns}}function yr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Mr=a,ns):a}}var Mr=null;function Gp(){if(Mr===null)throw Error(r(459));var t=Mr;return Mr=null,t}function Vp(t){if(t===ns||t===ml)throw Error(r(483))}var is=null,ro=0;function _l(t){var n=ro;return ro+=1,is===null&&(is=[]),Hp(is,t,n)}function so(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function vl(t,n){throw n.$$typeof===_?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function kp(t){function n(j,V){if(t){var $=j.deletions;$===null?(j.deletions=[V],j.flags|=16):$.push(V)}}function a(j,V){if(!t)return null;for(;V!==null;)n(j,V),V=V.sibling;return null}function o(j){for(var V=new Map;j!==null;)j.key!==null?V.set(j.key,j):V.set(j.index,j),j=j.sibling;return V}function u(j,V){return j=Qi(j,V),j.index=0,j.sibling=null,j}function f(j,V,$){return j.index=$,t?($=j.alternate,$!==null?($=$.index,$<V?(j.flags|=67108866,V):$):(j.flags|=67108866,V)):(j.flags|=1048576,V)}function g(j){return t&&j.alternate===null&&(j.flags|=67108866),j}function R(j,V,$,_e){return V===null||V.tag!==6?(V=xu($,j.mode,_e),V.return=j,V):(V=u(V,$),V.return=j,V)}function B(j,V,$,_e){var $e=$.type;return $e===D?pe(j,V,$.props.children,_e,$.key):V!==null&&(V.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===E&&yr($e)===V.type)?(V=u(V,$.props),so(V,$),V.return=j,V):(V=ul($.type,$.key,$.props,null,j.mode,_e),so(V,$),V.return=j,V)}function ee(j,V,$,_e){return V===null||V.tag!==4||V.stateNode.containerInfo!==$.containerInfo||V.stateNode.implementation!==$.implementation?(V=Su($,j.mode,_e),V.return=j,V):(V=u(V,$.children||[]),V.return=j,V)}function pe(j,V,$,_e,$e){return V===null||V.tag!==7?(V=gr($,j.mode,_e,$e),V.return=j,V):(V=u(V,$),V.return=j,V)}function xe(j,V,$){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=xu(""+V,j.mode,$),V.return=j,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case b:return $=ul(V.type,V.key,V.props,null,j.mode,$),so($,V),$.return=j,$;case A:return V=Su(V,j.mode,$),V.return=j,V;case E:return V=yr(V),xe(j,V,$)}if(J(V)||Q(V))return V=gr(V,j.mode,$,null),V.return=j,V;if(typeof V.then=="function")return xe(j,_l(V),$);if(V.$$typeof===G)return xe(j,hl(j,V),$);vl(j,V)}return null}function oe(j,V,$,_e){var $e=V!==null?V.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return $e!==null?null:R(j,V,""+$,_e);if(typeof $=="object"&&$!==null){switch($.$$typeof){case b:return $.key===$e?B(j,V,$,_e):null;case A:return $.key===$e?ee(j,V,$,_e):null;case E:return $=yr($),oe(j,V,$,_e)}if(J($)||Q($))return $e!==null?null:pe(j,V,$,_e,null);if(typeof $.then=="function")return oe(j,V,_l($),_e);if($.$$typeof===G)return oe(j,V,hl(j,$),_e);vl(j,$)}return null}function ce(j,V,$,_e,$e){if(typeof _e=="string"&&_e!==""||typeof _e=="number"||typeof _e=="bigint")return j=j.get($)||null,R(V,j,""+_e,$e);if(typeof _e=="object"&&_e!==null){switch(_e.$$typeof){case b:return j=j.get(_e.key===null?$:_e.key)||null,B(V,j,_e,$e);case A:return j=j.get(_e.key===null?$:_e.key)||null,ee(V,j,_e,$e);case E:return _e=yr(_e),ce(j,V,$,_e,$e)}if(J(_e)||Q(_e))return j=j.get($)||null,pe(V,j,_e,$e,null);if(typeof _e.then=="function")return ce(j,V,$,_l(_e),$e);if(_e.$$typeof===G)return ce(j,V,$,hl(V,_e),$e);vl(V,_e)}return null}function We(j,V,$,_e){for(var $e=null,Tt=null,Ye=V,lt=V=0,gt=null;Ye!==null&&lt<$.length;lt++){Ye.index>lt?(gt=Ye,Ye=null):gt=Ye.sibling;var At=oe(j,Ye,$[lt],_e);if(At===null){Ye===null&&(Ye=gt);break}t&&Ye&&At.alternate===null&&n(j,Ye),V=f(At,V,lt),Tt===null?$e=At:Tt.sibling=At,Tt=At,Ye=gt}if(lt===$.length)return a(j,Ye),xt&&Ji(j,lt),$e;if(Ye===null){for(;lt<$.length;lt++)Ye=xe(j,$[lt],_e),Ye!==null&&(V=f(Ye,V,lt),Tt===null?$e=Ye:Tt.sibling=Ye,Tt=Ye);return xt&&Ji(j,lt),$e}for(Ye=o(Ye);lt<$.length;lt++)gt=ce(Ye,j,lt,$[lt],_e),gt!==null&&(t&&gt.alternate!==null&&Ye.delete(gt.key===null?lt:gt.key),V=f(gt,V,lt),Tt===null?$e=gt:Tt.sibling=gt,Tt=gt);return t&&Ye.forEach(function(Qa){return n(j,Qa)}),xt&&Ji(j,lt),$e}function et(j,V,$,_e){if($==null)throw Error(r(151));for(var $e=null,Tt=null,Ye=V,lt=V=0,gt=null,At=$.next();Ye!==null&&!At.done;lt++,At=$.next()){Ye.index>lt?(gt=Ye,Ye=null):gt=Ye.sibling;var Qa=oe(j,Ye,At.value,_e);if(Qa===null){Ye===null&&(Ye=gt);break}t&&Ye&&Qa.alternate===null&&n(j,Ye),V=f(Qa,V,lt),Tt===null?$e=Qa:Tt.sibling=Qa,Tt=Qa,Ye=gt}if(At.done)return a(j,Ye),xt&&Ji(j,lt),$e;if(Ye===null){for(;!At.done;lt++,At=$.next())At=xe(j,At.value,_e),At!==null&&(V=f(At,V,lt),Tt===null?$e=At:Tt.sibling=At,Tt=At);return xt&&Ji(j,lt),$e}for(Ye=o(Ye);!At.done;lt++,At=$.next())At=ce(Ye,j,lt,At.value,_e),At!==null&&(t&&At.alternate!==null&&Ye.delete(At.key===null?lt:At.key),V=f(At,V,lt),Tt===null?$e=At:Tt.sibling=At,Tt=At);return t&&Ye.forEach(function(w1){return n(j,w1)}),xt&&Ji(j,lt),$e}function Gt(j,V,$,_e){if(typeof $=="object"&&$!==null&&$.type===D&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case b:e:{for(var $e=$.key;V!==null;){if(V.key===$e){if($e=$.type,$e===D){if(V.tag===7){a(j,V.sibling),_e=u(V,$.props.children),_e.return=j,j=_e;break e}}else if(V.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===E&&yr($e)===V.type){a(j,V.sibling),_e=u(V,$.props),so(_e,$),_e.return=j,j=_e;break e}a(j,V);break}else n(j,V);V=V.sibling}$.type===D?(_e=gr($.props.children,j.mode,_e,$.key),_e.return=j,j=_e):(_e=ul($.type,$.key,$.props,null,j.mode,_e),so(_e,$),_e.return=j,j=_e)}return g(j);case A:e:{for($e=$.key;V!==null;){if(V.key===$e)if(V.tag===4&&V.stateNode.containerInfo===$.containerInfo&&V.stateNode.implementation===$.implementation){a(j,V.sibling),_e=u(V,$.children||[]),_e.return=j,j=_e;break e}else{a(j,V);break}else n(j,V);V=V.sibling}_e=Su($,j.mode,_e),_e.return=j,j=_e}return g(j);case E:return $=yr($),Gt(j,V,$,_e)}if(J($))return We(j,V,$,_e);if(Q($)){if($e=Q($),typeof $e!="function")throw Error(r(150));return $=$e.call($),et(j,V,$,_e)}if(typeof $.then=="function")return Gt(j,V,_l($),_e);if($.$$typeof===G)return Gt(j,V,hl(j,$),_e);vl(j,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,V!==null&&V.tag===6?(a(j,V.sibling),_e=u(V,$),_e.return=j,j=_e):(a(j,V),_e=xu($,j.mode,_e),_e.return=j,j=_e),g(j)):a(j,V)}return function(j,V,$,_e){try{ro=0;var $e=Gt(j,V,$,_e);return is=null,$e}catch(Ye){if(Ye===ns||Ye===ml)throw Ye;var Tt=ei(29,Ye,null,j.mode);return Tt.lanes=_e,Tt.return=j,Tt}finally{}}}var br=kp(!0),Xp=kp(!1),Oa=!1;function Lu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Nu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Pa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function za(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Ct&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=cl(t),Rp(t,null,a),n}return ll(t,o,n,a),cl(t)}function oo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Zn(t,a)}}function Ou(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=g:f=f.next=g,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Pu=!1;function lo(){if(Pu){var t=ts;if(t!==null)throw t}}function co(t,n,a,o){Pu=!1;var u=t.updateQueue;Oa=!1;var f=u.firstBaseUpdate,g=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var B=R,ee=B.next;B.next=null,g===null?f=ee:g.next=ee,g=B;var pe=t.alternate;pe!==null&&(pe=pe.updateQueue,R=pe.lastBaseUpdate,R!==g&&(R===null?pe.firstBaseUpdate=ee:R.next=ee,pe.lastBaseUpdate=B))}if(f!==null){var xe=u.baseState;g=0,pe=ee=B=null,R=f;do{var oe=R.lane&-536870913,ce=oe!==R.lane;if(ce?(mt&oe)===oe:(o&oe)===oe){oe!==0&&oe===es&&(Pu=!0),pe!==null&&(pe=pe.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var We=t,et=R;oe=n;var Gt=a;switch(et.tag){case 1:if(We=et.payload,typeof We=="function"){xe=We.call(Gt,xe,oe);break e}xe=We;break e;case 3:We.flags=We.flags&-65537|128;case 0:if(We=et.payload,oe=typeof We=="function"?We.call(Gt,xe,oe):We,oe==null)break e;xe=x({},xe,oe);break e;case 2:Oa=!0}}oe=R.callback,oe!==null&&(t.flags|=64,ce&&(t.flags|=8192),ce=u.callbacks,ce===null?u.callbacks=[oe]:ce.push(oe))}else ce={lane:oe,tag:R.tag,payload:R.payload,callback:R.callback,next:null},pe===null?(ee=pe=ce,B=xe):pe=pe.next=ce,g|=oe;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;ce=R,R=ce.next,ce.next=null,u.lastBaseUpdate=ce,u.shared.pending=null}}while(!0);pe===null&&(B=xe),u.baseState=B,u.firstBaseUpdate=ee,u.lastBaseUpdate=pe,f===null&&(u.shared.lanes=0),Ga|=g,t.lanes=g,t.memoizedState=xe}}function Wp(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function qp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Wp(a[t],n)}var as=U(null),xl=U(0);function Yp(t,n){t=ca,be(xl,t),be(as,n),ca=t|n.baseLanes}function zu(){be(xl,ca),be(as,as.current)}function Iu(){ca=xl.current,Z(as),Z(xl)}var ti=U(null),hi=null;function Ia(t){var n=t.alternate;be(on,on.current&1),be(ti,t),hi===null&&(n===null||as.current!==null||n.memoizedState!==null)&&(hi=t)}function Bu(t){be(on,on.current),be(ti,t),hi===null&&(hi=t)}function jp(t){t.tag===22?(be(on,on.current),be(ti,t),hi===null&&(hi=t)):Ba()}function Ba(){be(on,on.current),be(ti,ti.current)}function ni(t){Z(ti),hi===t&&(hi=null),Z(on)}var on=U(0);function Sl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Wf(a)||qf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ta=0,ot=null,Ft=null,hn=null,yl=!1,rs=!1,Er=!1,Ml=0,uo=0,ss=null,xx=0;function nn(){throw Error(r(321))}function Fu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!$n(t[a],n[a]))return!1;return!0}function Hu(t,n,a,o,u,f){return ta=f,ot=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=t===null||t.memoizedState===null?Um:tf,Er=!1,f=a(o,u),Er=!1,rs&&(f=Kp(n,a,o,u)),Zp(t),f}function Zp(t){z.H=po;var n=Ft!==null&&Ft.next!==null;if(ta=0,hn=Ft=ot=null,yl=!1,uo=0,ss=null,n)throw Error(r(300));t===null||pn||(t=t.dependencies,t!==null&&dl(t)&&(pn=!0))}function Kp(t,n,a,o){ot=t;var u=0;do{if(rs&&(ss=null),uo=0,rs=!1,25<=u)throw Error(r(301));if(u+=1,hn=Ft=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}z.H=Lm,f=n(a,o)}while(rs);return f}function Sx(){var t=z.H,n=t.useState()[0];return n=typeof n.then=="function"?fo(n):n,t=t.useState()[0],(Ft!==null?Ft.memoizedState:null)!==t&&(ot.flags|=1024),n}function Gu(){var t=Ml!==0;return Ml=0,t}function Vu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function ku(t){if(yl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}yl=!1}ta=0,hn=Ft=ot=null,rs=!1,uo=Ml=0,ss=null}function zn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return hn===null?ot.memoizedState=hn=t:hn=hn.next=t,hn}function ln(){if(Ft===null){var t=ot.alternate;t=t!==null?t.memoizedState:null}else t=Ft.next;var n=hn===null?ot.memoizedState:hn.next;if(n!==null)hn=n,Ft=t;else{if(t===null)throw ot.alternate===null?Error(r(467)):Error(r(310));Ft=t,t={memoizedState:Ft.memoizedState,baseState:Ft.baseState,baseQueue:Ft.baseQueue,queue:Ft.queue,next:null},hn===null?ot.memoizedState=hn=t:hn=hn.next=t}return hn}function bl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function fo(t){var n=uo;return uo+=1,ss===null&&(ss=[]),t=Hp(ss,t,n),n=ot,(hn===null?n.memoizedState:hn.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?Um:tf),t}function El(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return fo(t);if(t.$$typeof===G)return An(t)}throw Error(r(438,String(t)))}function Xu(t){var n=null,a=ot.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ot.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=bl(),ot.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=Y;return n.index++,a}function na(t,n){return typeof n=="function"?n(t):n}function Tl(t){var n=ln();return Wu(n,Ft,t)}function Wu(t,n,a){var o=t.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=t.baseQueue,f=o.pending;if(f!==null){if(u!==null){var g=u.next;u.next=f.next,f.next=g}n.baseQueue=u=f,o.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var R=g=null,B=null,ee=n,pe=!1;do{var xe=ee.lane&-536870913;if(xe!==ee.lane?(mt&xe)===xe:(ta&xe)===xe){var oe=ee.revertLane;if(oe===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),xe===es&&(pe=!0);else if((ta&oe)===oe){ee=ee.next,oe===es&&(pe=!0);continue}else xe={lane:0,revertLane:ee.revertLane,gesture:null,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null},B===null?(R=B=xe,g=f):B=B.next=xe,ot.lanes|=oe,Ga|=oe;xe=ee.action,Er&&a(f,xe),f=ee.hasEagerState?ee.eagerState:a(f,xe)}else oe={lane:xe,revertLane:ee.revertLane,gesture:ee.gesture,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null},B===null?(R=B=oe,g=f):B=B.next=oe,ot.lanes|=xe,Ga|=xe;ee=ee.next}while(ee!==null&&ee!==n);if(B===null?g=f:B.next=R,!$n(f,t.memoizedState)&&(pn=!0,pe&&(a=ts,a!==null)))throw a;t.memoizedState=f,t.baseState=g,t.baseQueue=B,o.lastRenderedState=f}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function qu(t){var n=ln(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var g=u=u.next;do f=t(f,g.action),g=g.next;while(g!==u);$n(f,n.memoizedState)||(pn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function Qp(t,n,a){var o=ot,u=ln(),f=xt;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var g=!$n((Ft||u).memoizedState,a);if(g&&(u.memoizedState=a,pn=!0),u=u.queue,Zu(em.bind(null,o,u,t),[t]),u.getSnapshot!==n||g||hn!==null&&hn.memoizedState.tag&1){if(o.flags|=2048,os(9,{destroy:void 0},$p.bind(null,o,u,a,n),null),kt===null)throw Error(r(349));f||(ta&127)!==0||Jp(o,n,a)}return a}function Jp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ot.updateQueue,n===null?(n=bl(),ot.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function $p(t,n,a,o){n.value=a,n.getSnapshot=o,tm(n)&&nm(t)}function em(t,n,a){return a(function(){tm(n)&&nm(t)})}function tm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!$n(t,a)}catch{return!0}}function nm(t){var n=mr(t,2);n!==null&&Wn(n,t,2)}function Yu(t){var n=zn();if(typeof t=="function"){var a=t;if(t=a(),Er){Re(!0);try{a()}finally{Re(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:t},n}function im(t,n,a,o){return t.baseState=a,Wu(t,Ft,typeof o=="function"?o:na)}function yx(t,n,a,o,u){if(Cl(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){f.listeners.push(g)}};z.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,am(n,f)):(f.next=a.next,n.pending=a.next=f)}}function am(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var f=z.T,g={};z.T=g;try{var R=a(u,o),B=z.S;B!==null&&B(g,R),rm(t,n,R)}catch(ee){ju(t,n,ee)}finally{f!==null&&g.types!==null&&(f.types=g.types),z.T=f}}else try{f=a(u,o),rm(t,n,f)}catch(ee){ju(t,n,ee)}}function rm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){sm(t,n,o)},function(o){return ju(t,n,o)}):sm(t,n,a)}function sm(t,n,a){n.status="fulfilled",n.value=a,om(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,am(t,a)))}function ju(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,om(n),n=n.next;while(n!==o)}t.action=null}function om(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function lm(t,n){return n}function cm(t,n){if(xt){var a=kt.formState;if(a!==null){e:{var o=ot;if(xt){if(qt){t:{for(var u=qt,f=di;u.nodeType!==8;){if(!f){u=null;break t}if(u=pi(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){qt=pi(u.nextSibling),o=u.data==="F!";break e}}La(o)}o=!1}o&&(n=a[0])}}return a=zn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:lm,lastRenderedState:n},a.queue=o,a=Cm.bind(null,ot,o),o.dispatch=a,o=Yu(!1),f=ef.bind(null,ot,!1,o.queue),o=zn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=yx.bind(null,ot,u,f,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function um(t){var n=ln();return fm(n,Ft,t)}function fm(t,n,a){if(n=Wu(t,n,lm)[0],t=Tl(na)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=fo(n)}catch(g){throw g===ns?ml:g}else o=n;n=ln();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(ot.flags|=2048,os(9,{destroy:void 0},Mx.bind(null,u,a),null)),[o,f,t]}function Mx(t,n){t.action=n}function dm(t){var n=ln(),a=Ft;if(a!==null)return fm(n,a,t);ln(),n=n.memoizedState,a=ln();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function os(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=ot.updateQueue,n===null&&(n=bl(),ot.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function hm(){return ln().memoizedState}function Al(t,n,a,o){var u=zn();ot.flags|=t,u.memoizedState=os(1|n,{destroy:void 0},a,o===void 0?null:o)}function Rl(t,n,a,o){var u=ln();o=o===void 0?null:o;var f=u.memoizedState.inst;Ft!==null&&o!==null&&Fu(o,Ft.memoizedState.deps)?u.memoizedState=os(n,f,a,o):(ot.flags|=t,u.memoizedState=os(1|n,f,a,o))}function pm(t,n){Al(8390656,8,t,n)}function Zu(t,n){Rl(2048,8,t,n)}function bx(t){ot.flags|=4;var n=ot.updateQueue;if(n===null)n=bl(),ot.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function mm(t){var n=ln().memoizedState;return bx({ref:n,nextImpl:t}),function(){if((Ct&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function gm(t,n){return Rl(4,2,t,n)}function _m(t,n){return Rl(4,4,t,n)}function vm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function xm(t,n,a){a=a!=null?a.concat([t]):null,Rl(4,4,vm.bind(null,n,t),a)}function Ku(){}function Sm(t,n){var a=ln();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Fu(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function ym(t,n){var a=ln();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Fu(n,o[1]))return o[0];if(o=t(),Er){Re(!0);try{t()}finally{Re(!1)}}return a.memoizedState=[o,n],o}function Qu(t,n,a){return a===void 0||(ta&1073741824)!==0&&(mt&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=M0(),ot.lanes|=t,Ga|=t,a)}function Mm(t,n,a,o){return $n(a,n)?a:as.current!==null?(t=Qu(t,a,o),$n(t,n)||(pn=!0),t):(ta&42)===0||(ta&1073741824)!==0&&(mt&261930)===0?(pn=!0,t.memoizedState=a):(t=M0(),ot.lanes|=t,Ga|=t,n)}function bm(t,n,a,o,u){var f=F.p;F.p=f!==0&&8>f?f:8;var g=z.T,R={};z.T=R,ef(t,!1,n,a);try{var B=u(),ee=z.S;if(ee!==null&&ee(R,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var pe=vx(B,o);ho(t,n,pe,ri(t))}else ho(t,n,o,ri(t))}catch(xe){ho(t,n,{then:function(){},status:"rejected",reason:xe},ri())}finally{F.p=f,g!==null&&R.types!==null&&(g.types=R.types),z.T=g}}function Ex(){}function Ju(t,n,a,o){if(t.tag!==5)throw Error(r(476));var u=Em(t).queue;bm(t,u,n,te,a===null?Ex:function(){return Tm(t),a(o)})}function Em(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:te,baseState:te,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:te},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Tm(t){var n=Em(t);n.next===null&&(n=t.alternate.memoizedState),ho(t,n.next.queue,{},ri())}function $u(){return An(Do)}function Am(){return ln().memoizedState}function Rm(){return ln().memoizedState}function Tx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ri();t=Pa(a);var o=za(n,t,a);o!==null&&(Wn(o,n,a),oo(o,n,a)),n={cache:Cu()},t.payload=n;return}n=n.return}}function Ax(t,n,a){var o=ri();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Cl(t)?wm(n,a):(a=_u(t,n,a,o),a!==null&&(Wn(a,t,o),Dm(a,n,o)))}function Cm(t,n,a){var o=ri();ho(t,n,a,o)}function ho(t,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Cl(t))wm(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var g=n.lastRenderedState,R=f(g,a);if(u.hasEagerState=!0,u.eagerState=R,$n(R,g))return ll(t,n,u,0),kt===null&&ol(),!1}catch{}finally{}if(a=_u(t,n,u,o),a!==null)return Wn(a,t,o),Dm(a,n,o),!0}return!1}function ef(t,n,a,o){if(o={lane:2,revertLane:Nf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Cl(t)){if(n)throw Error(r(479))}else n=_u(t,a,o,2),n!==null&&Wn(n,t,2)}function Cl(t){var n=t.alternate;return t===ot||n!==null&&n===ot}function wm(t,n){rs=yl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Dm(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Zn(t,a)}}var po={readContext:An,use:El,useCallback:nn,useContext:nn,useEffect:nn,useImperativeHandle:nn,useLayoutEffect:nn,useInsertionEffect:nn,useMemo:nn,useReducer:nn,useRef:nn,useState:nn,useDebugValue:nn,useDeferredValue:nn,useTransition:nn,useSyncExternalStore:nn,useId:nn,useHostTransitionStatus:nn,useFormState:nn,useActionState:nn,useOptimistic:nn,useMemoCache:nn,useCacheRefresh:nn};po.useEffectEvent=nn;var Um={readContext:An,use:El,useCallback:function(t,n){return zn().memoizedState=[t,n===void 0?null:n],t},useContext:An,useEffect:pm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Al(4194308,4,vm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Al(4194308,4,t,n)},useInsertionEffect:function(t,n){Al(4,2,t,n)},useMemo:function(t,n){var a=zn();n=n===void 0?null:n;var o=t();if(Er){Re(!0);try{t()}finally{Re(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=zn();if(a!==void 0){var u=a(n);if(Er){Re(!0);try{a(n)}finally{Re(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=Ax.bind(null,ot,t),[o.memoizedState,t]},useRef:function(t){var n=zn();return t={current:t},n.memoizedState=t},useState:function(t){t=Yu(t);var n=t.queue,a=Cm.bind(null,ot,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Ku,useDeferredValue:function(t,n){var a=zn();return Qu(a,t,n)},useTransition:function(){var t=Yu(!1);return t=bm.bind(null,ot,t.queue,!0,!1),zn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=ot,u=zn();if(xt){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),kt===null)throw Error(r(349));(mt&127)!==0||Jp(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,pm(em.bind(null,o,f,t),[t]),o.flags|=2048,os(9,{destroy:void 0},$p.bind(null,o,f,a,n),null),a},useId:function(){var t=zn(),n=kt.identifierPrefix;if(xt){var a=Pi,o=Oi;a=(o&~(1<<32-Be(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Ml++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=xx++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:$u,useFormState:cm,useActionState:cm,useOptimistic:function(t){var n=zn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=ef.bind(null,ot,!0,a),a.dispatch=n,[t,n]},useMemoCache:Xu,useCacheRefresh:function(){return zn().memoizedState=Tx.bind(null,ot)},useEffectEvent:function(t){var n=zn(),a={impl:t};return n.memoizedState=a,function(){if((Ct&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},tf={readContext:An,use:El,useCallback:Sm,useContext:An,useEffect:Zu,useImperativeHandle:xm,useInsertionEffect:gm,useLayoutEffect:_m,useMemo:ym,useReducer:Tl,useRef:hm,useState:function(){return Tl(na)},useDebugValue:Ku,useDeferredValue:function(t,n){var a=ln();return Mm(a,Ft.memoizedState,t,n)},useTransition:function(){var t=Tl(na)[0],n=ln().memoizedState;return[typeof t=="boolean"?t:fo(t),n]},useSyncExternalStore:Qp,useId:Am,useHostTransitionStatus:$u,useFormState:um,useActionState:um,useOptimistic:function(t,n){var a=ln();return im(a,Ft,t,n)},useMemoCache:Xu,useCacheRefresh:Rm};tf.useEffectEvent=mm;var Lm={readContext:An,use:El,useCallback:Sm,useContext:An,useEffect:Zu,useImperativeHandle:xm,useInsertionEffect:gm,useLayoutEffect:_m,useMemo:ym,useReducer:qu,useRef:hm,useState:function(){return qu(na)},useDebugValue:Ku,useDeferredValue:function(t,n){var a=ln();return Ft===null?Qu(a,t,n):Mm(a,Ft.memoizedState,t,n)},useTransition:function(){var t=qu(na)[0],n=ln().memoizedState;return[typeof t=="boolean"?t:fo(t),n]},useSyncExternalStore:Qp,useId:Am,useHostTransitionStatus:$u,useFormState:dm,useActionState:dm,useOptimistic:function(t,n){var a=ln();return Ft!==null?im(a,Ft,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Xu,useCacheRefresh:Rm};Lm.useEffectEvent=mm;function nf(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:x({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var af={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=ri(),u=Pa(o);u.payload=n,a!=null&&(u.callback=a),n=za(t,u,o),n!==null&&(Wn(n,t,o),oo(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=ri(),u=Pa(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=za(t,u,o),n!==null&&(Wn(n,t,o),oo(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ri(),o=Pa(a);o.tag=2,n!=null&&(o.callback=n),n=za(t,o,a),n!==null&&(Wn(n,t,a),oo(n,t,a))}};function Nm(t,n,a,o,u,f,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,f,g):n.prototype&&n.prototype.isPureReactComponent?!$s(a,o)||!$s(u,f):!0}function Om(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&af.enqueueReplaceState(n,n.state,null)}function Tr(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=x({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function Pm(t){sl(t)}function zm(t){console.error(t)}function Im(t){sl(t)}function wl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Bm(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function rf(t,n,a){return a=Pa(a),a.tag=3,a.payload={element:null},a.callback=function(){wl(t,n)},a}function Fm(t){return t=Pa(t),t.tag=3,t}function Hm(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;t.payload=function(){return u(f)},t.callback=function(){Bm(n,a,o)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(t.callback=function(){Bm(n,a,o),typeof u!="function"&&(Va===null?Va=new Set([this]):Va.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function Rx(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&$r(n,a,u,!0),a=ti.current,a!==null){switch(a.tag){case 31:case 13:return hi===null?Gl():a.alternate===null&&an===0&&(an=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===gl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Df(t,o,u)),!1;case 22:return a.flags|=65536,o===gl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Df(t,o,u)),!1}throw Error(r(435,a.tag))}return Df(t,o,u),Gl(),!1}if(xt)return n=ti.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==bu&&(t=Error(r(422),{cause:o}),no(ci(t,a)))):(o!==bu&&(n=Error(r(423),{cause:o}),no(ci(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=ci(o,a),u=rf(t.stateNode,o,u),Ou(t,u),an!==4&&(an=2)),!1;var f=Error(r(520),{cause:o});if(f=ci(f,a),Mo===null?Mo=[f]:Mo.push(f),an!==4&&(an=2),n===null)return!0;o=ci(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=rf(a.stateNode,o,t),Ou(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Va===null||!Va.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Fm(u),Hm(u,t,a,o),Ou(a,u),!1}a=a.return}while(a!==null);return!1}var sf=Error(r(461)),pn=!1;function Rn(t,n,a,o){n.child=t===null?Xp(n,null,a,o):br(n,t.child,a,o)}function Gm(t,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var g={};for(var R in o)R!=="ref"&&(g[R]=o[R])}else g=o;return xr(n),o=Hu(t,n,a,g,f,u),R=Gu(),t!==null&&!pn?(Vu(t,n,u),ia(t,n,u)):(xt&&R&&yu(n),n.flags|=1,Rn(t,n,o,u),n.child)}function Vm(t,n,a,o,u){if(t===null){var f=a.type;return typeof f=="function"&&!vu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,km(t,n,f,o,u)):(t=ul(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!pf(t,u)){var g=f.memoizedProps;if(a=a.compare,a=a!==null?a:$s,a(g,o)&&t.ref===n.ref)return ia(t,n,u)}return n.flags|=1,t=Qi(f,o),t.ref=n.ref,t.return=n,n.child=t}function km(t,n,a,o,u){if(t!==null){var f=t.memoizedProps;if($s(f,o)&&t.ref===n.ref)if(pn=!1,n.pendingProps=o=f,pf(t,u))(t.flags&131072)!==0&&(pn=!0);else return n.lanes=t.lanes,ia(t,n,u)}return of(t,n,a,o,u)}function Xm(t,n,a,o){var u=o.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return Wm(t,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&pl(n,f!==null?f.cachePool:null),f!==null?Yp(n,f):zu(),jp(n);else return o=n.lanes=536870912,Wm(t,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(pl(n,f.cachePool),Yp(n,f),Ba(),n.memoizedState=null):(t!==null&&pl(n,null),zu(),Ba());return Rn(t,n,u,a),n.child}function mo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Wm(t,n,a,o,u){var f=Du();return f=f===null?null:{parent:dn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&pl(n,null),zu(),jp(n),t!==null&&$r(t,n,o,!0),n.childLanes=u,null}function Dl(t,n){return n=Ll({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function qm(t,n,a){return br(n,t.child,null,a),t=Dl(n,n.pendingProps),t.flags|=2,ni(n),n.memoizedState=null,t}function Cx(t,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(xt){if(o.mode==="hidden")return t=Dl(n,o),n.lanes=536870912,mo(null,t);if(Bu(n),(t=qt)?(t=ag(t,di),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Da!==null?{id:Oi,overflow:Pi}:null,retryLane:536870912,hydrationErrors:null},a=wp(t),a.return=n,n.child=a,Tn=n,qt=null)):t=null,t===null)throw La(n);return n.lanes=536870912,null}return Dl(n,o)}var f=t.memoizedState;if(f!==null){var g=f.dehydrated;if(Bu(n),u)if(n.flags&256)n.flags&=-257,n=qm(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(pn||$r(t,n,a,!1),u=(a&t.childLanes)!==0,pn||u){if(o=kt,o!==null&&(g=Kn(o,a),g!==0&&g!==f.retryLane))throw f.retryLane=g,mr(t,g),Wn(o,t,g),sf;Gl(),n=qm(t,n,a)}else t=f.treeContext,qt=pi(g.nextSibling),Tn=n,xt=!0,Ua=null,di=!1,t!==null&&Lp(n,t),n=Dl(n,o),n.flags|=4096;return n}return t=Qi(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Ul(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function of(t,n,a,o,u){return xr(n),a=Hu(t,n,a,o,void 0,u),o=Gu(),t!==null&&!pn?(Vu(t,n,u),ia(t,n,u)):(xt&&o&&yu(n),n.flags|=1,Rn(t,n,a,u),n.child)}function Ym(t,n,a,o,u,f){return xr(n),n.updateQueue=null,a=Kp(n,o,a,u),Zp(t),o=Gu(),t!==null&&!pn?(Vu(t,n,f),ia(t,n,f)):(xt&&o&&yu(n),n.flags|=1,Rn(t,n,a,f),n.child)}function jm(t,n,a,o,u){if(xr(n),n.stateNode===null){var f=Zr,g=a.contextType;typeof g=="object"&&g!==null&&(f=An(g)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=af,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Lu(n),g=a.contextType,f.context=typeof g=="object"&&g!==null?An(g):Zr,f.state=n.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(nf(n,a,g,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(g=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),g!==f.state&&af.enqueueReplaceState(f,f.state,null),co(n,o,f,u),lo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){f=n.stateNode;var R=n.memoizedProps,B=Tr(a,R);f.props=B;var ee=f.context,pe=a.contextType;g=Zr,typeof pe=="object"&&pe!==null&&(g=An(pe));var xe=a.getDerivedStateFromProps;pe=typeof xe=="function"||typeof f.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,pe||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(R||ee!==g)&&Om(n,f,o,g),Oa=!1;var oe=n.memoizedState;f.state=oe,co(n,o,f,u),lo(),ee=n.memoizedState,R||oe!==ee||Oa?(typeof xe=="function"&&(nf(n,a,xe,o),ee=n.memoizedState),(B=Oa||Nm(n,a,B,o,oe,ee,g))?(pe||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ee),f.props=o,f.state=ee,f.context=g,o=B):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Nu(t,n),g=n.memoizedProps,pe=Tr(a,g),f.props=pe,xe=n.pendingProps,oe=f.context,ee=a.contextType,B=Zr,typeof ee=="object"&&ee!==null&&(B=An(ee)),R=a.getDerivedStateFromProps,(ee=typeof R=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(g!==xe||oe!==B)&&Om(n,f,o,B),Oa=!1,oe=n.memoizedState,f.state=oe,co(n,o,f,u),lo();var ce=n.memoizedState;g!==xe||oe!==ce||Oa||t!==null&&t.dependencies!==null&&dl(t.dependencies)?(typeof R=="function"&&(nf(n,a,R,o),ce=n.memoizedState),(pe=Oa||Nm(n,a,pe,o,oe,ce,B)||t!==null&&t.dependencies!==null&&dl(t.dependencies))?(ee||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,ce,B),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,ce,B)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&oe===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&oe===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ce),f.props=o,f.state=ce,f.context=B,o=pe):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&oe===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&oe===t.memoizedState||(n.flags|=1024),o=!1)}return f=o,Ul(t,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&o?(n.child=br(n,t.child,null,u),n.child=br(n,null,a,u)):Rn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=ia(t,n,u),t}function Zm(t,n,a,o){return _r(),n.flags|=256,Rn(t,n,a,o),n.child}var lf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function cf(t){return{baseLanes:t,cachePool:Bp()}}function uf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ai),t}function Km(t,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,g;if((g=f)||(g=t!==null&&t.memoizedState===null?!1:(on.current&2)!==0),g&&(u=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,t===null){if(xt){if(u?Ia(n):Ba(),(t=qt)?(t=ag(t,di),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Da!==null?{id:Oi,overflow:Pi}:null,retryLane:536870912,hydrationErrors:null},a=wp(t),a.return=n,n.child=a,Tn=n,qt=null)):t=null,t===null)throw La(n);return qf(t)?n.lanes=32:n.lanes=536870912,null}var R=o.children;return o=o.fallback,u?(Ba(),u=n.mode,R=Ll({mode:"hidden",children:R},u),o=gr(o,u,a,null),R.return=n,o.return=n,R.sibling=o,n.child=R,o=n.child,o.memoizedState=cf(a),o.childLanes=uf(t,g,a),n.memoizedState=lf,mo(null,o)):(Ia(n),ff(n,R))}var B=t.memoizedState;if(B!==null&&(R=B.dehydrated,R!==null)){if(f)n.flags&256?(Ia(n),n.flags&=-257,n=df(t,n,a)):n.memoizedState!==null?(Ba(),n.child=t.child,n.flags|=128,n=null):(Ba(),R=o.fallback,u=n.mode,o=Ll({mode:"visible",children:o.children},u),R=gr(R,u,a,null),R.flags|=2,o.return=n,R.return=n,o.sibling=R,n.child=o,br(n,t.child,null,a),o=n.child,o.memoizedState=cf(a),o.childLanes=uf(t,g,a),n.memoizedState=lf,n=mo(null,o));else if(Ia(n),qf(R)){if(g=R.nextSibling&&R.nextSibling.dataset,g)var ee=g.dgst;g=ee,o=Error(r(419)),o.stack="",o.digest=g,no({value:o,source:null,stack:null}),n=df(t,n,a)}else if(pn||$r(t,n,a,!1),g=(a&t.childLanes)!==0,pn||g){if(g=kt,g!==null&&(o=Kn(g,a),o!==0&&o!==B.retryLane))throw B.retryLane=o,mr(t,o),Wn(g,t,o),sf;Wf(R)||Gl(),n=df(t,n,a)}else Wf(R)?(n.flags|=192,n.child=t.child,n=null):(t=B.treeContext,qt=pi(R.nextSibling),Tn=n,xt=!0,Ua=null,di=!1,t!==null&&Lp(n,t),n=ff(n,o.children),n.flags|=4096);return n}return u?(Ba(),R=o.fallback,u=n.mode,B=t.child,ee=B.sibling,o=Qi(B,{mode:"hidden",children:o.children}),o.subtreeFlags=B.subtreeFlags&65011712,ee!==null?R=Qi(ee,R):(R=gr(R,u,a,null),R.flags|=2),R.return=n,o.return=n,o.sibling=R,n.child=o,mo(null,o),o=n.child,R=t.child.memoizedState,R===null?R=cf(a):(u=R.cachePool,u!==null?(B=dn._currentValue,u=u.parent!==B?{parent:B,pool:B}:u):u=Bp(),R={baseLanes:R.baseLanes|a,cachePool:u}),o.memoizedState=R,o.childLanes=uf(t,g,a),n.memoizedState=lf,mo(t.child,o)):(Ia(n),a=t.child,t=a.sibling,a=Qi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(g=n.deletions,g===null?(n.deletions=[t],n.flags|=16):g.push(t)),n.child=a,n.memoizedState=null,a)}function ff(t,n){return n=Ll({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Ll(t,n){return t=ei(22,t,null,n),t.lanes=0,t}function df(t,n,a){return br(n,t.child,null,a),t=ff(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Qm(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Au(t.return,n,a)}function hf(t,n,a,o,u,f){var g=t.memoizedState;g===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(g.isBackwards=n,g.rendering=null,g.renderingStartTime=0,g.last=o,g.tail=a,g.tailMode=u,g.treeForkCount=f)}function Jm(t,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var g=on.current,R=(g&2)!==0;if(R?(g=g&1|2,n.flags|=128):g&=1,be(on,g),Rn(t,n,o,a),o=xt?to:0,!R&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Qm(t,a,n);else if(t.tag===19)Qm(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Sl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),hf(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Sl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}hf(n,!0,a,null,f,o);break;case"together":hf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ia(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ga|=n.lanes,(a&n.childLanes)===0)if(t!==null){if($r(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Qi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Qi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function pf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&dl(t)))}function wx(t,n,a){switch(n.tag){case 3:Me(n,n.stateNode.containerInfo),Na(n,dn,t.memoizedState.cache),_r();break;case 27:case 5:tt(n);break;case 4:Me(n,n.stateNode.containerInfo);break;case 10:Na(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Bu(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ia(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Km(t,n,a):(Ia(n),t=ia(t,n,a),t!==null?t.sibling:null);Ia(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||($r(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return Jm(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),be(on,on.current),o)break;return null;case 22:return n.lanes=0,Xm(t,n,a,n.pendingProps);case 24:Na(n,dn,t.memoizedState.cache)}return ia(t,n,a)}function $m(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)pn=!0;else{if(!pf(t,a)&&(n.flags&128)===0)return pn=!1,wx(t,n,a);pn=(t.flags&131072)!==0}else pn=!1,xt&&(n.flags&1048576)!==0&&Up(n,to,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=yr(n.elementType),n.type=t,typeof t=="function")vu(t)?(o=Tr(t,o),n.tag=1,n=jm(null,n,t,o,a)):(n.tag=0,n=of(null,n,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===C){n.tag=11,n=Gm(null,n,t,o,a);break e}else if(u===P){n.tag=14,n=Vm(null,n,t,o,a);break e}}throw n=ve(t)||t,Error(r(306,n,""))}}return n;case 0:return of(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Tr(o,n.pendingProps),jm(t,n,o,u,a);case 3:e:{if(Me(n,n.stateNode.containerInfo),t===null)throw Error(r(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,Nu(t,n),co(n,o,null,a);var g=n.memoizedState;if(o=g.cache,Na(n,dn,o),o!==f.cache&&Ru(n,[dn],a,!0),lo(),o=g.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Zm(t,n,o,a);break e}else if(o!==u){u=ci(Error(r(424)),n),no(u),n=Zm(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(qt=pi(t.firstChild),Tn=n,xt=!0,Ua=null,di=!0,a=Xp(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(_r(),o===u){n=ia(t,n,a);break e}Rn(t,n,o,a)}n=n.child}return n;case 26:return Ul(t,n),t===null?(a=ug(n.type,null,n.pendingProps,null))?n.memoizedState=a:xt||(a=n.type,t=n.pendingProps,o=jl(ae.current).createElement(a),o[un]=n,o[En]=t,Cn(o,a,t),fn(o),n.stateNode=o):n.memoizedState=ug(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return tt(n),t===null&&xt&&(o=n.stateNode=og(n.type,n.pendingProps,ae.current),Tn=n,di=!0,u=qt,qa(n.type)?(Yf=u,qt=pi(o.firstChild)):qt=u),Rn(t,n,n.pendingProps.children,a),Ul(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&xt&&((u=o=qt)&&(o=r1(o,n.type,n.pendingProps,di),o!==null?(n.stateNode=o,Tn=n,qt=pi(o.firstChild),di=!1,u=!0):u=!1),u||La(n)),tt(n),u=n.type,f=n.pendingProps,g=t!==null?t.memoizedProps:null,o=f.children,Vf(u,f)?o=null:g!==null&&Vf(u,g)&&(n.flags|=32),n.memoizedState!==null&&(u=Hu(t,n,Sx,null,null,a),Do._currentValue=u),Ul(t,n),Rn(t,n,o,a),n.child;case 6:return t===null&&xt&&((t=a=qt)&&(a=s1(a,n.pendingProps,di),a!==null?(n.stateNode=a,Tn=n,qt=null,t=!0):t=!1),t||La(n)),null;case 13:return Km(t,n,a);case 4:return Me(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=br(n,null,o,a):Rn(t,n,o,a),n.child;case 11:return Gm(t,n,n.type,n.pendingProps,a);case 7:return Rn(t,n,n.pendingProps,a),n.child;case 8:return Rn(t,n,n.pendingProps.children,a),n.child;case 12:return Rn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Na(n,n.type,o.value),Rn(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,xr(n),u=An(u),o=o(u),n.flags|=1,Rn(t,n,o,a),n.child;case 14:return Vm(t,n,n.type,n.pendingProps,a);case 15:return km(t,n,n.type,n.pendingProps,a);case 19:return Jm(t,n,a);case 31:return Cx(t,n,a);case 22:return Xm(t,n,a,n.pendingProps);case 24:return xr(n),o=An(dn),t===null?(u=Du(),u===null&&(u=kt,f=Cu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},Lu(n),Na(n,dn,u)):((t.lanes&a)!==0&&(Nu(t,n),co(n,null,null,a),lo()),u=t.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Na(n,dn,o)):(o=f.cache,Na(n,dn,o),o!==u.cache&&Ru(n,[dn],a,!0))),Rn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function aa(t){t.flags|=4}function mf(t,n,a,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(A0())t.flags|=8192;else throw Mr=gl,Uu}else t.flags&=-16777217}function e0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!mg(n))if(A0())t.flags|=8192;else throw Mr=gl,Uu}function Nl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?ye():536870912,t.lanes|=n,fs|=n)}function go(t,n){if(!xt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Yt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function Dx(t,n,a){var o=n.pendingProps;switch(Mu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Yt(n),null;case 1:return Yt(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ea(dn),He(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Jr(n)?aa(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Eu())),Yt(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(aa(n),f!==null?(Yt(n),e0(n,f)):(Yt(n),mf(n,u,null,o,a))):f?f!==t.memoizedState?(aa(n),Yt(n),e0(n,f)):(Yt(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&aa(n),Yt(n),mf(n,u,t,o,a)),null;case 27:if(Ke(n),a=ae.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&aa(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Yt(n),null}t=Ce.current,Jr(n)?Np(n):(t=og(u,o,a),n.stateNode=t,aa(n))}return Yt(n),null;case 5:if(Ke(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&aa(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Yt(n),null}if(f=Ce.current,Jr(n))Np(n);else{var g=jl(ae.current);switch(f){case 1:f=g.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=g.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=g.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=g.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=g.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?g.createElement("select",{is:o.is}):g.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?g.createElement(u,{is:o.is}):g.createElement(u)}}f[un]=n,f[En]=o;e:for(g=n.child;g!==null;){if(g.tag===5||g.tag===6)f.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break e;for(;g.sibling===null;){if(g.return===null||g.return===n)break e;g=g.return}g.sibling.return=g.return,g=g.sibling}n.stateNode=f;e:switch(Cn(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&aa(n)}}return Yt(n),mf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&aa(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(t=ae.current,Jr(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=Tn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[un]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||K0(t.nodeValue,a)),t||La(n,!0)}else t=jl(t).createTextNode(o),t[un]=n,n.stateNode=t}return Yt(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=Jr(n),a!==null){if(t===null){if(!o)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[un]=n}else _r(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Yt(n),t=!1}else a=Eu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ni(n),n):(ni(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Yt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Jr(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[un]=n}else _r(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Yt(n),u=!1}else u=Eu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ni(n),n):(ni(n),null)}return ni(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Nl(n,n.updateQueue),Yt(n),null);case 4:return He(),t===null&&If(n.stateNode.containerInfo),Yt(n),null;case 10:return ea(n.type),Yt(n),null;case 19:if(Z(on),o=n.memoizedState,o===null)return Yt(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)go(o,!1);else{if(an!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Sl(t),f!==null){for(n.flags|=128,go(o,!1),t=f.updateQueue,n.updateQueue=t,Nl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Cp(a,t),a=a.sibling;return be(on,on.current&1|2),xt&&Ji(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&Bt()>Bl&&(n.flags|=128,u=!0,go(o,!1),n.lanes=4194304)}else{if(!u)if(t=Sl(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Nl(n,t),go(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!xt)return Yt(n),null}else 2*Bt()-o.renderingStartTime>Bl&&a!==536870912&&(n.flags|=128,u=!0,go(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(t=o.last,t!==null?t.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Bt(),t.sibling=null,a=on.current,be(on,u?a&1|2:a&1),xt&&Ji(n,o.treeForkCount),t):(Yt(n),null);case 22:case 23:return ni(n),Iu(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Yt(n),n.subtreeFlags&6&&(n.flags|=8192)):Yt(n),a=n.updateQueue,a!==null&&Nl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&Z(Sr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ea(dn),Yt(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Ux(t,n){switch(Mu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ea(dn),He(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Ke(n),null;case 31:if(n.memoizedState!==null){if(ni(n),n.alternate===null)throw Error(r(340));_r()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ni(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));_r()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Z(on),null;case 4:return He(),null;case 10:return ea(n.type),null;case 22:case 23:return ni(n),Iu(),t!==null&&Z(Sr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ea(dn),null;case 25:return null;default:return null}}function t0(t,n){switch(Mu(n),n.tag){case 3:ea(dn),He();break;case 26:case 27:case 5:Ke(n);break;case 4:He();break;case 31:n.memoizedState!==null&&ni(n);break;case 13:ni(n);break;case 19:Z(on);break;case 10:ea(n.type);break;case 22:case 23:ni(n),Iu(),t!==null&&Z(Sr);break;case 24:ea(dn)}}function _o(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var f=a.create,g=a.inst;o=f(),g.destroy=o}a=a.next}while(a!==u)}}catch(R){zt(n,n.return,R)}}function Fa(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&t)===t){var g=o.inst,R=g.destroy;if(R!==void 0){g.destroy=void 0,u=n;var B=a,ee=R;try{ee()}catch(pe){zt(u,B,pe)}}}o=o.next}while(o!==f)}}catch(pe){zt(n,n.return,pe)}}function n0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{qp(n,a)}catch(o){zt(t,t.return,o)}}}function i0(t,n,a){a.props=Tr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){zt(t,n,o)}}function vo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){zt(t,n,u)}}function zi(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){zt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){zt(t,n,u)}else a.current=null}function a0(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){zt(t,t.return,u)}}function gf(t,n,a){try{var o=t.stateNode;$x(o,t.type,a,n),o[En]=n}catch(u){zt(t,t.return,u)}}function r0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&qa(t.type)||t.tag===4}function _f(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||r0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&qa(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function vf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Zi));else if(o!==4&&(o===27&&qa(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(vf(t,n,a),t=t.sibling;t!==null;)vf(t,n,a),t=t.sibling}function Ol(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&qa(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Ol(t,n,a),t=t.sibling;t!==null;)Ol(t,n,a),t=t.sibling}function s0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Cn(n,o,a),n[un]=t,n[En]=a}catch(f){zt(t,t.return,f)}}var ra=!1,mn=!1,xf=!1,o0=typeof WeakSet=="function"?WeakSet:Set,yn=null;function Lx(t,n){if(t=t.containerInfo,Hf=tc,t=xp(t),fu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var g=0,R=-1,B=-1,ee=0,pe=0,xe=t,oe=null;t:for(;;){for(var ce;xe!==a||u!==0&&xe.nodeType!==3||(R=g+u),xe!==f||o!==0&&xe.nodeType!==3||(B=g+o),xe.nodeType===3&&(g+=xe.nodeValue.length),(ce=xe.firstChild)!==null;)oe=xe,xe=ce;for(;;){if(xe===t)break t;if(oe===a&&++ee===u&&(R=g),oe===f&&++pe===o&&(B=g),(ce=xe.nextSibling)!==null)break;xe=oe,oe=xe.parentNode}xe=ce}a=R===-1||B===-1?null:{start:R,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(Gf={focusedElem:t,selectionRange:a},tc=!1,yn=n;yn!==null;)if(n=yn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,yn=t;else for(;yn!==null;){switch(n=yn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var We=Tr(a.type,u);t=o.getSnapshotBeforeUpdate(We,f),o.__reactInternalSnapshotBeforeUpdate=t}catch(et){zt(a,a.return,et)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Xf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Xf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,yn=t;break}yn=n.return}}function l0(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:oa(t,a),o&4&&_o(5,a);break;case 1:if(oa(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(g){zt(a,a.return,g)}else{var u=Tr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(g){zt(a,a.return,g)}}o&64&&n0(a),o&512&&vo(a,a.return);break;case 3:if(oa(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{qp(t,n)}catch(g){zt(a,a.return,g)}}break;case 27:n===null&&o&4&&s0(a);case 26:case 5:oa(t,a),n===null&&o&4&&a0(a),o&512&&vo(a,a.return);break;case 12:oa(t,a);break;case 31:oa(t,a),o&4&&f0(t,a);break;case 13:oa(t,a),o&4&&d0(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Gx.bind(null,a),o1(t,a))));break;case 22:if(o=a.memoizedState!==null||ra,!o){n=n!==null&&n.memoizedState!==null||mn,u=ra;var f=mn;ra=o,(mn=n)&&!f?la(t,a,(a.subtreeFlags&8772)!==0):oa(t,a),ra=u,mn=f}break;case 30:break;default:oa(t,a)}}function c0(t){var n=t.alternate;n!==null&&(t.alternate=null,c0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Aa(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Qt=null,Gn=!1;function sa(t,n,a){for(a=a.child;a!==null;)u0(t,n,a),a=a.sibling}function u0(t,n,a){if(de&&typeof de.onCommitFiberUnmount=="function")try{de.onCommitFiberUnmount(ue,a)}catch{}switch(a.tag){case 26:mn||zi(a,n),sa(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:mn||zi(a,n);var o=Qt,u=Gn;qa(a.type)&&(Qt=a.stateNode,Gn=!1),sa(t,n,a),Ro(a.stateNode),Qt=o,Gn=u;break;case 5:mn||zi(a,n);case 6:if(o=Qt,u=Gn,Qt=null,sa(t,n,a),Qt=o,Gn=u,Qt!==null)if(Gn)try{(Qt.nodeType===9?Qt.body:Qt.nodeName==="HTML"?Qt.ownerDocument.body:Qt).removeChild(a.stateNode)}catch(f){zt(a,n,f)}else try{Qt.removeChild(a.stateNode)}catch(f){zt(a,n,f)}break;case 18:Qt!==null&&(Gn?(t=Qt,ng(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),xs(t)):ng(Qt,a.stateNode));break;case 4:o=Qt,u=Gn,Qt=a.stateNode.containerInfo,Gn=!0,sa(t,n,a),Qt=o,Gn=u;break;case 0:case 11:case 14:case 15:Fa(2,a,n),mn||Fa(4,a,n),sa(t,n,a);break;case 1:mn||(zi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&i0(a,n,o)),sa(t,n,a);break;case 21:sa(t,n,a);break;case 22:mn=(o=mn)||a.memoizedState!==null,sa(t,n,a),mn=o;break;default:sa(t,n,a)}}function f0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{xs(t)}catch(a){zt(n,n.return,a)}}}function d0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{xs(t)}catch(a){zt(n,n.return,a)}}function Nx(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new o0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new o0),n;default:throw Error(r(435,t.tag))}}function Pl(t,n){var a=Nx(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=Vx.bind(null,t,o);o.then(u,u)}})}function Vn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=t,g=n,R=g;e:for(;R!==null;){switch(R.tag){case 27:if(qa(R.type)){Qt=R.stateNode,Gn=!1;break e}break;case 5:Qt=R.stateNode,Gn=!1;break e;case 3:case 4:Qt=R.stateNode.containerInfo,Gn=!0;break e}R=R.return}if(Qt===null)throw Error(r(160));u0(f,g,u),Qt=null,Gn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)h0(n,t),n=n.sibling}var Ei=null;function h0(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Vn(n,t),kn(t),o&4&&(Fa(3,t,t.return),_o(3,t),Fa(5,t,t.return));break;case 1:Vn(n,t),kn(t),o&512&&(mn||a===null||zi(a,a.return)),o&64&&ra&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ei;if(Vn(n,t),kn(t),o&512&&(mn||a===null||zi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Ta]||f[un]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),Cn(f,o,a),f[un]=t,fn(f),o=f;break e;case"link":var g=hg("link","href",u).get(o+(a.href||""));if(g){for(var R=0;R<g.length;R++)if(f=g[R],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){g.splice(R,1);break t}}f=u.createElement(o),Cn(f,o,a),u.head.appendChild(f);break;case"meta":if(g=hg("meta","content",u).get(o+(a.content||""))){for(R=0;R<g.length;R++)if(f=g[R],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){g.splice(R,1);break t}}f=u.createElement(o),Cn(f,o,a),u.head.appendChild(f);break;default:throw Error(r(468,o))}f[un]=t,fn(f),o=f}t.stateNode=o}else pg(u,t.type,t.stateNode);else t.stateNode=dg(u,o,t.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?pg(u,t.type,t.stateNode):dg(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&gf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Vn(n,t),kn(t),o&512&&(mn||a===null||zi(a,a.return)),a!==null&&o&4&&gf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Vn(n,t),kn(t),o&512&&(mn||a===null||zi(a,a.return)),t.flags&32){u=t.stateNode;try{Jn(u,"")}catch(We){zt(t,t.return,We)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,gf(t,u,a!==null?a.memoizedProps:u)),o&1024&&(xf=!0);break;case 6:if(Vn(n,t),kn(t),o&4){if(t.stateNode===null)throw Error(r(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(We){zt(t,t.return,We)}}break;case 3:if(Ql=null,u=Ei,Ei=Zl(n.containerInfo),Vn(n,t),Ei=u,kn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{xs(n.containerInfo)}catch(We){zt(t,t.return,We)}xf&&(xf=!1,p0(t));break;case 4:o=Ei,Ei=Zl(t.stateNode.containerInfo),Vn(n,t),kn(t),Ei=o;break;case 12:Vn(n,t),kn(t);break;case 31:Vn(n,t),kn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Pl(t,o)));break;case 13:Vn(n,t),kn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Il=Bt()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Pl(t,o)));break;case 22:u=t.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,ee=ra,pe=mn;if(ra=ee||u,mn=pe||B,Vn(n,t),mn=pe,ra=ee,kn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||B||ra||mn||Ar(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){B=a=n;try{if(f=B.stateNode,u)g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{R=B.stateNode;var xe=B.memoizedProps.style,oe=xe!=null&&xe.hasOwnProperty("display")?xe.display:null;R.style.display=oe==null||typeof oe=="boolean"?"":(""+oe).trim()}}catch(We){zt(B,B.return,We)}}}else if(n.tag===6){if(a===null){B=n;try{B.stateNode.nodeValue=u?"":B.memoizedProps}catch(We){zt(B,B.return,We)}}}else if(n.tag===18){if(a===null){B=n;try{var ce=B.stateNode;u?ig(ce,!0):ig(B.stateNode,!1)}catch(We){zt(B,B.return,We)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Pl(t,a))));break;case 19:Vn(n,t),kn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Pl(t,o)));break;case 30:break;case 21:break;default:Vn(n,t),kn(t)}}function kn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(r0(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=_f(t);Ol(t,f,u);break;case 5:var g=a.stateNode;a.flags&32&&(Jn(g,""),a.flags&=-33);var R=_f(t);Ol(t,R,g);break;case 3:case 4:var B=a.stateNode.containerInfo,ee=_f(t);vf(t,ee,B);break;default:throw Error(r(161))}}catch(pe){zt(t,t.return,pe)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function p0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;p0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function oa(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)l0(t,n.alternate,n),n=n.sibling}function Ar(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Fa(4,n,n.return),Ar(n);break;case 1:zi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&i0(n,n.return,a),Ar(n);break;case 27:Ro(n.stateNode);case 26:case 5:zi(n,n.return),Ar(n);break;case 22:n.memoizedState===null&&Ar(n);break;case 30:Ar(n);break;default:Ar(n)}t=t.sibling}}function la(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,f=n,g=f.flags;switch(f.tag){case 0:case 11:case 15:la(u,f,a),_o(4,f);break;case 1:if(la(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ee){zt(o,o.return,ee)}if(o=f,u=o.updateQueue,u!==null){var R=o.stateNode;try{var B=u.shared.hiddenCallbacks;if(B!==null)for(u.shared.hiddenCallbacks=null,u=0;u<B.length;u++)Wp(B[u],R)}catch(ee){zt(o,o.return,ee)}}a&&g&64&&n0(f),vo(f,f.return);break;case 27:s0(f);case 26:case 5:la(u,f,a),a&&o===null&&g&4&&a0(f),vo(f,f.return);break;case 12:la(u,f,a);break;case 31:la(u,f,a),a&&g&4&&f0(u,f);break;case 13:la(u,f,a),a&&g&4&&d0(u,f);break;case 22:f.memoizedState===null&&la(u,f,a),vo(f,f.return);break;case 30:break;default:la(u,f,a)}n=n.sibling}}function Sf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&io(a))}function yf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&io(t))}function Ti(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)m0(t,n,a,o),n=n.sibling}function m0(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ti(t,n,a,o),u&2048&&_o(9,n);break;case 1:Ti(t,n,a,o);break;case 3:Ti(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&io(t)));break;case 12:if(u&2048){Ti(t,n,a,o),t=n.stateNode;try{var f=n.memoizedProps,g=f.id,R=f.onPostCommit;typeof R=="function"&&R(g,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(B){zt(n,n.return,B)}}else Ti(t,n,a,o);break;case 31:Ti(t,n,a,o);break;case 13:Ti(t,n,a,o);break;case 23:break;case 22:f=n.stateNode,g=n.alternate,n.memoizedState!==null?f._visibility&2?Ti(t,n,a,o):xo(t,n):f._visibility&2?Ti(t,n,a,o):(f._visibility|=2,ls(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Sf(g,n);break;case 24:Ti(t,n,a,o),u&2048&&yf(n.alternate,n);break;default:Ti(t,n,a,o)}}function ls(t,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,g=n,R=a,B=o,ee=g.flags;switch(g.tag){case 0:case 11:case 15:ls(f,g,R,B,u),_o(8,g);break;case 23:break;case 22:var pe=g.stateNode;g.memoizedState!==null?pe._visibility&2?ls(f,g,R,B,u):xo(f,g):(pe._visibility|=2,ls(f,g,R,B,u)),u&&ee&2048&&Sf(g.alternate,g);break;case 24:ls(f,g,R,B,u),u&&ee&2048&&yf(g.alternate,g);break;default:ls(f,g,R,B,u)}n=n.sibling}}function xo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:xo(a,o),u&2048&&Sf(o.alternate,o);break;case 24:xo(a,o),u&2048&&yf(o.alternate,o);break;default:xo(a,o)}n=n.sibling}}var So=8192;function cs(t,n,a){if(t.subtreeFlags&So)for(t=t.child;t!==null;)g0(t,n,a),t=t.sibling}function g0(t,n,a){switch(t.tag){case 26:cs(t,n,a),t.flags&So&&t.memoizedState!==null&&x1(a,Ei,t.memoizedState,t.memoizedProps);break;case 5:cs(t,n,a);break;case 3:case 4:var o=Ei;Ei=Zl(t.stateNode.containerInfo),cs(t,n,a),Ei=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=So,So=16777216,cs(t,n,a),So=o):cs(t,n,a));break;default:cs(t,n,a)}}function _0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function yo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];yn=o,x0(o,t)}_0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)v0(t),t=t.sibling}function v0(t){switch(t.tag){case 0:case 11:case 15:yo(t),t.flags&2048&&Fa(9,t,t.return);break;case 3:yo(t);break;case 12:yo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,zl(t)):yo(t);break;default:yo(t)}}function zl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];yn=o,x0(o,t)}_0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Fa(8,n,n.return),zl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,zl(n));break;default:zl(n)}t=t.sibling}}function x0(t,n){for(;yn!==null;){var a=yn;switch(a.tag){case 0:case 11:case 15:Fa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:io(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,yn=o;else e:for(a=t;yn!==null;){o=yn;var u=o.sibling,f=o.return;if(c0(o),o===a){yn=null;break e}if(u!==null){u.return=f,yn=u;break e}yn=f}}}var Ox={getCacheForType:function(t){var n=An(dn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return An(dn).controller.signal}},Px=typeof WeakMap=="function"?WeakMap:Map,Ct=0,kt=null,ht=null,mt=0,Pt=0,ii=null,Ha=!1,us=!1,Mf=!1,ca=0,an=0,Ga=0,Rr=0,bf=0,ai=0,fs=0,Mo=null,Xn=null,Ef=!1,Il=0,S0=0,Bl=1/0,Fl=null,Va=null,vn=0,ka=null,ds=null,ua=0,Tf=0,Af=null,y0=null,bo=0,Rf=null;function ri(){return(Ct&2)!==0&&mt!==0?mt&-mt:z.T!==null?Nf():Ws()}function M0(){if(ai===0)if((mt&536870912)===0||xt){var t=it;it<<=1,(it&3932160)===0&&(it=262144),ai=t}else ai=536870912;return t=ti.current,t!==null&&(t.flags|=32),ai}function Wn(t,n,a){(t===kt&&(Pt===2||Pt===9)||t.cancelPendingCommit!==null)&&(hs(t,0),Xa(t,mt,ai,!1)),Ve(t,a),((Ct&2)===0||t!==kt)&&(t===kt&&((Ct&2)===0&&(Rr|=a),an===4&&Xa(t,mt,ai,!1)),Ii(t))}function b0(t,n,a){if((Ct&6)!==0)throw Error(r(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||we(t,n),u=o?Bx(t,n):wf(t,n,!0),f=o;do{if(u===0){us&&!o&&Xa(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!zx(a)){u=wf(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var g=0;else g=t.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;e:{var R=t;u=Mo;var B=R.current.memoizedState.isDehydrated;if(B&&(hs(R,g).flags|=256),g=wf(R,g,!1),g!==2){if(Mf&&!B){R.errorRecoveryDisabledLanes|=f,Rr|=f,u=4;break e}f=Xn,Xn=u,f!==null&&(Xn===null?Xn=f:Xn.push.apply(Xn,f))}u=g}if(f=!1,u!==2)continue}}if(u===1){hs(t,0),Xa(t,n,0,!0);break}e:{switch(o=t,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Xa(o,n,ai,!Ha);break e;case 2:Xn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Il+300-Bt(),10<u)){if(Xa(o,n,ai,!Ha),me(o,0,!0)!==0)break e;ua=n,o.timeoutHandle=eg(E0.bind(null,o,a,Xn,Fl,Ef,n,ai,Rr,fs,Ha,f,"Throttled",-0,0),u);break e}E0(o,a,Xn,Fl,Ef,n,ai,Rr,fs,Ha,f,null,-0,0)}}break}while(!0);Ii(t)}function E0(t,n,a,o,u,f,g,R,B,ee,pe,xe,oe,ce){if(t.timeoutHandle=-1,xe=n.subtreeFlags,xe&8192||(xe&16785408)===16785408){xe={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Zi},g0(n,f,xe);var We=(f&62914560)===f?Il-Bt():(f&4194048)===f?S0-Bt():0;if(We=S1(xe,We),We!==null){ua=f,t.cancelPendingCommit=We(L0.bind(null,t,n,f,a,o,u,g,R,B,pe,xe,null,oe,ce)),Xa(t,f,g,!ee);return}}L0(t,n,f,a,o,u,g,R,B)}function zx(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!$n(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Xa(t,n,a,o){n&=~bf,n&=~Rr,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var f=31-Be(u),g=1<<f;o[f]=-1,u&=~g}a!==0&&Ut(t,a,n)}function Hl(){return(Ct&6)===0?(Eo(0),!1):!0}function Cf(){if(ht!==null){if(Pt===0)var t=ht.return;else t=ht,$i=vr=null,ku(t),is=null,ro=0,t=ht;for(;t!==null;)t0(t.alternate,t),t=t.return;ht=null}}function hs(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,n1(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ua=0,Cf(),kt=t,ht=a=Qi(t.current,null),mt=n,Pt=0,ii=null,Ha=!1,us=we(t,n),Mf=!1,fs=ai=bf=Rr=Ga=an=0,Xn=Mo=null,Ef=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-Be(o),f=1<<u;n|=t[u],o&=~f}return ca=n,ol(),a}function T0(t,n){ot=null,z.H=po,n===ns||n===ml?(n=Gp(),Pt=3):n===Uu?(n=Gp(),Pt=4):Pt=n===sf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ii=n,ht===null&&(an=1,wl(t,ci(n,t.current)))}function A0(){var t=ti.current;return t===null?!0:(mt&4194048)===mt?hi===null:(mt&62914560)===mt||(mt&536870912)!==0?t===hi:!1}function R0(){var t=z.H;return z.H=po,t===null?po:t}function C0(){var t=z.A;return z.A=Ox,t}function Gl(){an=4,Ha||(mt&4194048)!==mt&&ti.current!==null||(us=!0),(Ga&134217727)===0&&(Rr&134217727)===0||kt===null||Xa(kt,mt,ai,!1)}function wf(t,n,a){var o=Ct;Ct|=2;var u=R0(),f=C0();(kt!==t||mt!==n)&&(Fl=null,hs(t,n)),n=!1;var g=an;e:do try{if(Pt!==0&&ht!==null){var R=ht,B=ii;switch(Pt){case 8:Cf(),g=6;break e;case 3:case 2:case 9:case 6:ti.current===null&&(n=!0);var ee=Pt;if(Pt=0,ii=null,ps(t,R,B,ee),a&&us){g=0;break e}break;default:ee=Pt,Pt=0,ii=null,ps(t,R,B,ee)}}Ix(),g=an;break}catch(pe){T0(t,pe)}while(!0);return n&&t.shellSuspendCounter++,$i=vr=null,Ct=o,z.H=u,z.A=f,ht===null&&(kt=null,mt=0,ol()),g}function Ix(){for(;ht!==null;)w0(ht)}function Bx(t,n){var a=Ct;Ct|=2;var o=R0(),u=C0();kt!==t||mt!==n?(Fl=null,Bl=Bt()+500,hs(t,n)):us=we(t,n);e:do try{if(Pt!==0&&ht!==null){n=ht;var f=ii;t:switch(Pt){case 1:Pt=0,ii=null,ps(t,n,f,1);break;case 2:case 9:if(Fp(f)){Pt=0,ii=null,D0(n);break}n=function(){Pt!==2&&Pt!==9||kt!==t||(Pt=7),Ii(t)},f.then(n,n);break e;case 3:Pt=7;break e;case 4:Pt=5;break e;case 7:Fp(f)?(Pt=0,ii=null,D0(n)):(Pt=0,ii=null,ps(t,n,f,7));break;case 5:var g=null;switch(ht.tag){case 26:g=ht.memoizedState;case 5:case 27:var R=ht;if(g?mg(g):R.stateNode.complete){Pt=0,ii=null;var B=R.sibling;if(B!==null)ht=B;else{var ee=R.return;ee!==null?(ht=ee,Vl(ee)):ht=null}break t}}Pt=0,ii=null,ps(t,n,f,5);break;case 6:Pt=0,ii=null,ps(t,n,f,6);break;case 8:Cf(),an=6;break e;default:throw Error(r(462))}}Fx();break}catch(pe){T0(t,pe)}while(!0);return $i=vr=null,z.H=o,z.A=u,Ct=a,ht!==null?0:(kt=null,mt=0,ol(),an)}function Fx(){for(;ht!==null&&!tn();)w0(ht)}function w0(t){var n=$m(t.alternate,t,ca);t.memoizedProps=t.pendingProps,n===null?Vl(t):ht=n}function D0(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Ym(a,n,n.pendingProps,n.type,void 0,mt);break;case 11:n=Ym(a,n,n.pendingProps,n.type.render,n.ref,mt);break;case 5:ku(n);default:t0(a,n),n=ht=Cp(n,ca),n=$m(a,n,ca)}t.memoizedProps=t.pendingProps,n===null?Vl(t):ht=n}function ps(t,n,a,o){$i=vr=null,ku(n),is=null,ro=0;var u=n.return;try{if(Rx(t,u,n,a,mt)){an=1,wl(t,ci(a,t.current)),ht=null;return}}catch(f){if(u!==null)throw ht=u,f;an=1,wl(t,ci(a,t.current)),ht=null;return}n.flags&32768?(xt||o===1?t=!0:us||(mt&536870912)!==0?t=!1:(Ha=t=!0,(o===2||o===9||o===3||o===6)&&(o=ti.current,o!==null&&o.tag===13&&(o.flags|=16384))),U0(n,t)):Vl(n)}function Vl(t){var n=t;do{if((n.flags&32768)!==0){U0(n,Ha);return}t=n.return;var a=Dx(n.alternate,n,ca);if(a!==null){ht=a;return}if(n=n.sibling,n!==null){ht=n;return}ht=n=t}while(n!==null);an===0&&(an=5)}function U0(t,n){do{var a=Ux(t.alternate,t);if(a!==null){a.flags&=32767,ht=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){ht=t;return}ht=t=a}while(t!==null);an=6,ht=null}function L0(t,n,a,o,u,f,g,R,B){t.cancelPendingCommit=null;do kl();while(vn!==0);if((Ct&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=gu,jt(t,a,f,g,R,B),t===kt&&(ht=kt=null,mt=0),ds=n,ka=t,ua=a,Tf=f,Af=u,y0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,kx(K,function(){return I0(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=z.T,z.T=null,u=F.p,F.p=2,g=Ct,Ct|=4;try{Lx(t,n,a)}finally{Ct=g,F.p=u,z.T=o}}vn=1,N0(),O0(),P0()}}function N0(){if(vn===1){vn=0;var t=ka,n=ds,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var o=F.p;F.p=2;var u=Ct;Ct|=4;try{h0(n,t);var f=Gf,g=xp(t.containerInfo),R=f.focusedElem,B=f.selectionRange;if(g!==R&&R&&R.ownerDocument&&vp(R.ownerDocument.documentElement,R)){if(B!==null&&fu(R)){var ee=B.start,pe=B.end;if(pe===void 0&&(pe=ee),"selectionStart"in R)R.selectionStart=ee,R.selectionEnd=Math.min(pe,R.value.length);else{var xe=R.ownerDocument||document,oe=xe&&xe.defaultView||window;if(oe.getSelection){var ce=oe.getSelection(),We=R.textContent.length,et=Math.min(B.start,We),Gt=B.end===void 0?et:Math.min(B.end,We);!ce.extend&&et>Gt&&(g=Gt,Gt=et,et=g);var j=_p(R,et),V=_p(R,Gt);if(j&&V&&(ce.rangeCount!==1||ce.anchorNode!==j.node||ce.anchorOffset!==j.offset||ce.focusNode!==V.node||ce.focusOffset!==V.offset)){var $=xe.createRange();$.setStart(j.node,j.offset),ce.removeAllRanges(),et>Gt?(ce.addRange($),ce.extend(V.node,V.offset)):($.setEnd(V.node,V.offset),ce.addRange($))}}}}for(xe=[],ce=R;ce=ce.parentNode;)ce.nodeType===1&&xe.push({element:ce,left:ce.scrollLeft,top:ce.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<xe.length;R++){var _e=xe[R];_e.element.scrollLeft=_e.left,_e.element.scrollTop=_e.top}}tc=!!Hf,Gf=Hf=null}finally{Ct=u,F.p=o,z.T=a}}t.current=n,vn=2}}function O0(){if(vn===2){vn=0;var t=ka,n=ds,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var o=F.p;F.p=2;var u=Ct;Ct|=4;try{l0(t,n.alternate,n)}finally{Ct=u,F.p=o,z.T=a}}vn=3}}function P0(){if(vn===4||vn===3){vn=0,q();var t=ka,n=ds,a=ua,o=y0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?vn=5:(vn=0,ds=ka=null,z0(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Va=null),Xs(a),n=n.stateNode,de&&typeof de.onCommitFiberRoot=="function")try{de.onCommitFiberRoot(ue,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=z.T,u=F.p,F.p=2,z.T=null;try{for(var f=t.onRecoverableError,g=0;g<o.length;g++){var R=o[g];f(R.value,{componentStack:R.stack})}}finally{z.T=n,F.p=u}}(ua&3)!==0&&kl(),Ii(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===Rf?bo++:(bo=0,Rf=t):bo=0,Eo(0)}}function z0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,io(n)))}function kl(){return N0(),O0(),P0(),I0()}function I0(){if(vn!==5)return!1;var t=ka,n=Tf;Tf=0;var a=Xs(ua),o=z.T,u=F.p;try{F.p=32>a?32:a,z.T=null,a=Af,Af=null;var f=ka,g=ua;if(vn=0,ds=ka=null,ua=0,(Ct&6)!==0)throw Error(r(331));var R=Ct;if(Ct|=4,v0(f.current),m0(f,f.current,g,a),Ct=R,Eo(0,!1),de&&typeof de.onPostCommitFiberRoot=="function")try{de.onPostCommitFiberRoot(ue,f)}catch{}return!0}finally{F.p=u,z.T=o,z0(t,n)}}function B0(t,n,a){n=ci(a,n),n=rf(t.stateNode,n,2),t=za(t,n,2),t!==null&&(Ve(t,2),Ii(t))}function zt(t,n,a){if(t.tag===3)B0(t,t,a);else for(;n!==null;){if(n.tag===3){B0(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Va===null||!Va.has(o))){t=ci(a,t),a=Fm(2),o=za(n,a,2),o!==null&&(Hm(a,o,n,t),Ve(o,2),Ii(o));break}}n=n.return}}function Df(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new Px;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Mf=!0,u.add(a),t=Hx.bind(null,t,n,a),n.then(t,t))}function Hx(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,kt===t&&(mt&a)===a&&(an===4||an===3&&(mt&62914560)===mt&&300>Bt()-Il?(Ct&2)===0&&hs(t,0):bf|=a,fs===mt&&(fs=0)),Ii(t)}function F0(t,n){n===0&&(n=ye()),t=mr(t,n),t!==null&&(Ve(t,n),Ii(t))}function Gx(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),F0(t,a)}function Vx(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),F0(t,a)}function kx(t,n){return sn(t,n)}var Xl=null,ms=null,Uf=!1,Wl=!1,Lf=!1,Wa=0;function Ii(t){t!==ms&&t.next===null&&(ms===null?Xl=ms=t:ms=ms.next=t),Wl=!0,Uf||(Uf=!0,Wx())}function Eo(t,n){if(!Lf&&Wl){Lf=!0;do for(var a=!1,o=Xl;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var g=o.suspendedLanes,R=o.pingedLanes;f=(1<<31-Be(42|t)+1)-1,f&=u&~(g&~R),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,k0(o,f))}else f=mt,f=me(o,o===kt?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||we(o,f)||(a=!0,k0(o,f));o=o.next}while(a);Lf=!1}}function Xx(){H0()}function H0(){Wl=Uf=!1;var t=0;Wa!==0&&t1()&&(t=Wa);for(var n=Bt(),a=null,o=Xl;o!==null;){var u=o.next,f=G0(o,n);f===0?(o.next=null,a===null?Xl=u:a.next=u,u===null&&(ms=a)):(a=o,(t!==0||(f&3)!==0)&&(Wl=!0)),o=u}vn!==0&&vn!==5||Eo(t),Wa!==0&&(Wa=0)}function G0(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var g=31-Be(f),R=1<<g,B=u[g];B===-1?((R&a)===0||(R&o)!==0)&&(u[g]=Ie(R,n)):B<=n&&(t.expiredLanes|=R),f&=~R}if(n=kt,a=mt,a=me(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Pt===2||Pt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Xt(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||we(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&Xt(o),Xs(a)){case 2:case 8:a=y;break;case 32:a=K;break;case 268435456:a=fe;break;default:a=K}return o=V0.bind(null,t),a=sn(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&Xt(o),t.callbackPriority=2,t.callbackNode=null,2}function V0(t,n){if(vn!==0&&vn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(kl()&&t.callbackNode!==a)return null;var o=mt;return o=me(t,t===kt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(b0(t,o,n),G0(t,Bt()),t.callbackNode!=null&&t.callbackNode===a?V0.bind(null,t):null)}function k0(t,n){if(kl())return null;b0(t,n,!0)}function Wx(){i1(function(){(Ct&6)!==0?sn(w,Xx):H0()})}function Nf(){if(Wa===0){var t=es;t===0&&(t=Qe,Qe<<=1,(Qe&261888)===0&&(Qe=256)),Wa=t}return Wa}function X0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:fr(""+t)}function W0(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function qx(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=X0((u[En]||null).action),g=o.submitter;g&&(n=(n=g[En]||null)?X0(n.formAction):g.getAttribute("formAction"),n!==null&&(f=n,g=null));var R=new il("action","action",null,o,u);t.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Wa!==0){var B=g?W0(u,g):new FormData(u);Ju(a,{pending:!0,data:B,method:u.method,action:f},null,B)}}else typeof f=="function"&&(R.preventDefault(),B=g?W0(u,g):new FormData(u),Ju(a,{pending:!0,data:B,method:u.method,action:f},f,B))},currentTarget:u}]})}}for(var Of=0;Of<mu.length;Of++){var Pf=mu[Of],Yx=Pf.toLowerCase(),jx=Pf[0].toUpperCase()+Pf.slice(1);bi(Yx,"on"+jx)}bi(Mp,"onAnimationEnd"),bi(bp,"onAnimationIteration"),bi(Ep,"onAnimationStart"),bi("dblclick","onDoubleClick"),bi("focusin","onFocus"),bi("focusout","onBlur"),bi(ux,"onTransitionRun"),bi(fx,"onTransitionStart"),bi(dx,"onTransitionCancel"),bi(Tp,"onTransitionEnd"),se("onMouseEnter",["mouseout","mouseover"]),se("onMouseLeave",["mouseout","mouseover"]),se("onPointerEnter",["pointerout","pointerover"]),se("onPointerLeave",["pointerout","pointerover"]),W("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),W("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),W("onBeforeInput",["compositionend","keypress","textInput","paste"]),W("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),W("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),W("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var To="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(To));function q0(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var f=void 0;if(n)for(var g=o.length-1;0<=g;g--){var R=o[g],B=R.instance,ee=R.currentTarget;if(R=R.listener,B!==f&&u.isPropagationStopped())break e;f=R,u.currentTarget=ee;try{f(u)}catch(pe){sl(pe)}u.currentTarget=null,f=B}else for(g=0;g<o.length;g++){if(R=o[g],B=R.instance,ee=R.currentTarget,R=R.listener,B!==f&&u.isPropagationStopped())break e;f=R,u.currentTarget=ee;try{f(u)}catch(pe){sl(pe)}u.currentTarget=null,f=B}}}}function pt(t,n){var a=n[lr];a===void 0&&(a=n[lr]=new Set);var o=t+"__bubble";a.has(o)||(Y0(n,t,2,!1),a.add(o))}function zf(t,n,a){var o=0;n&&(o|=4),Y0(a,t,o,n)}var ql="_reactListening"+Math.random().toString(36).slice(2);function If(t){if(!t[ql]){t[ql]=!0,$o.forEach(function(a){a!=="selectionchange"&&(Zx.has(a)||zf(a,!1,t),zf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[ql]||(n[ql]=!0,zf("selectionchange",!1,n))}}function Y0(t,n,a,o){switch(Mg(n)){case 2:var u=b1;break;case 8:u=E1;break;default:u=Jf}a=u.bind(null,n,a,t),u=void 0,!nu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function Bf(t,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var g=o.tag;if(g===3||g===4){var R=o.stateNode.containerInfo;if(R===u)break;if(g===4)for(g=o.return;g!==null;){var B=g.tag;if((B===3||B===4)&&g.stateNode.containerInfo===u)return;g=g.return}for(;R!==null;){if(g=Yi(R),g===null)return;if(B=g.tag,B===5||B===6||B===26||B===27){o=f=g;continue e}R=R.parentNode}}o=o.return}Jh(function(){var ee=f,pe=eu(a),xe=[];e:{var oe=Ap.get(t);if(oe!==void 0){var ce=il,We=t;switch(t){case"keypress":if(tl(a)===0)break e;case"keydown":case"keyup":ce=Vv;break;case"focusin":We="focus",ce=su;break;case"focusout":We="blur",ce=su;break;case"beforeblur":case"afterblur":ce=su;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ce=tp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ce=Dv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ce=Wv;break;case Mp:case bp:case Ep:ce=Nv;break;case Tp:ce=Yv;break;case"scroll":case"scrollend":ce=Cv;break;case"wheel":ce=Zv;break;case"copy":case"cut":case"paste":ce=Pv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ce=ip;break;case"toggle":case"beforetoggle":ce=Qv}var et=(n&4)!==0,Gt=!et&&(t==="scroll"||t==="scrollend"),j=et?oe!==null?oe+"Capture":null:oe;et=[];for(var V=ee,$;V!==null;){var _e=V;if($=_e.stateNode,_e=_e.tag,_e!==5&&_e!==26&&_e!==27||$===null||j===null||(_e=qs(V,j),_e!=null&&et.push(Ao(V,_e,$))),Gt)break;V=V.return}0<et.length&&(oe=new ce(oe,We,null,a,pe),xe.push({event:oe,listeners:et}))}}if((n&7)===0){e:{if(oe=t==="mouseover"||t==="pointerover",ce=t==="mouseout"||t==="pointerout",oe&&a!==$c&&(We=a.relatedTarget||a.fromElement)&&(Yi(We)||We[Fn]))break e;if((ce||oe)&&(oe=pe.window===pe?pe:(oe=pe.ownerDocument)?oe.defaultView||oe.parentWindow:window,ce?(We=a.relatedTarget||a.toElement,ce=ee,We=We?Yi(We):null,We!==null&&(Gt=c(We),et=We.tag,We!==Gt||et!==5&&et!==27&&et!==6)&&(We=null)):(ce=null,We=ee),ce!==We)){if(et=tp,_e="onMouseLeave",j="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(et=ip,_e="onPointerLeave",j="onPointerEnter",V="pointer"),Gt=ce==null?oe:ur(ce),$=We==null?oe:ur(We),oe=new et(_e,V+"leave",ce,a,pe),oe.target=Gt,oe.relatedTarget=$,_e=null,Yi(pe)===ee&&(et=new et(j,V+"enter",We,a,pe),et.target=$,et.relatedTarget=Gt,_e=et),Gt=_e,ce&&We)t:{for(et=Kx,j=ce,V=We,$=0,_e=j;_e;_e=et(_e))$++;_e=0;for(var $e=V;$e;$e=et($e))_e++;for(;0<$-_e;)j=et(j),$--;for(;0<_e-$;)V=et(V),_e--;for(;$--;){if(j===V||V!==null&&j===V.alternate){et=j;break t}j=et(j),V=et(V)}et=null}else et=null;ce!==null&&j0(xe,oe,ce,et,!1),We!==null&&Gt!==null&&j0(xe,Gt,We,et,!0)}}e:{if(oe=ee?ur(ee):window,ce=oe.nodeName&&oe.nodeName.toLowerCase(),ce==="select"||ce==="input"&&oe.type==="file")var Tt=fp;else if(cp(oe))if(dp)Tt=ox;else{Tt=rx;var Ye=ax}else ce=oe.nodeName,!ce||ce.toLowerCase()!=="input"||oe.type!=="checkbox"&&oe.type!=="radio"?ee&&Dt(ee.elementType)&&(Tt=fp):Tt=sx;if(Tt&&(Tt=Tt(t,ee))){up(xe,Tt,a,pe);break e}Ye&&Ye(t,oe,ee),t==="focusout"&&ee&&oe.type==="number"&&ee.memoizedProps.value!=null&&dt(oe,"number",oe.value)}switch(Ye=ee?ur(ee):window,t){case"focusin":(cp(Ye)||Ye.contentEditable==="true")&&(qr=Ye,du=ee,eo=null);break;case"focusout":eo=du=qr=null;break;case"mousedown":hu=!0;break;case"contextmenu":case"mouseup":case"dragend":hu=!1,Sp(xe,a,pe);break;case"selectionchange":if(cx)break;case"keydown":case"keyup":Sp(xe,a,pe)}var lt;if(lu)e:{switch(t){case"compositionstart":var gt="onCompositionStart";break e;case"compositionend":gt="onCompositionEnd";break e;case"compositionupdate":gt="onCompositionUpdate";break e}gt=void 0}else Wr?op(t,a)&&(gt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(gt="onCompositionStart");gt&&(ap&&a.locale!=="ko"&&(Wr||gt!=="onCompositionStart"?gt==="onCompositionEnd"&&Wr&&(lt=$h()):(wa=pe,iu="value"in wa?wa.value:wa.textContent,Wr=!0)),Ye=Yl(ee,gt),0<Ye.length&&(gt=new np(gt,t,null,a,pe),xe.push({event:gt,listeners:Ye}),lt?gt.data=lt:(lt=lp(a),lt!==null&&(gt.data=lt)))),(lt=$v?ex(t,a):tx(t,a))&&(gt=Yl(ee,"onBeforeInput"),0<gt.length&&(Ye=new np("onBeforeInput","beforeinput",null,a,pe),xe.push({event:Ye,listeners:gt}),Ye.data=lt)),qx(xe,t,ee,a,pe)}q0(xe,n)})}function Ao(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Yl(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=qs(t,a),u!=null&&o.unshift(Ao(t,u,f)),u=qs(t,n),u!=null&&o.push(Ao(t,u,f))),t.tag===3)return o;t=t.return}return[]}function Kx(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function j0(t,n,a,o,u){for(var f=n._reactName,g=[];a!==null&&a!==o;){var R=a,B=R.alternate,ee=R.stateNode;if(R=R.tag,B!==null&&B===o)break;R!==5&&R!==26&&R!==27||ee===null||(B=ee,u?(ee=qs(a,f),ee!=null&&g.unshift(Ao(a,ee,B))):u||(ee=qs(a,f),ee!=null&&g.push(Ao(a,ee,B)))),a=a.return}g.length!==0&&t.push({event:n,listeners:g})}var Qx=/\r\n?/g,Jx=/\u0000|\uFFFD/g;function Z0(t){return(typeof t=="string"?t:""+t).replace(Qx,`
`).replace(Jx,"")}function K0(t,n){return n=Z0(n),Z0(t)===n}function Ht(t,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Jn(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Jn(t,""+o);break;case"className":Xe(t,"class",o);break;case"tabIndex":Xe(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Xe(t,a,o);break;case"style":Mi(t,o,f);break;case"data":if(n!=="object"){Xe(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=fr(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ht(t,n,"name",u.name,u,null),Ht(t,n,"formEncType",u.formEncType,u,null),Ht(t,n,"formMethod",u.formMethod,u,null),Ht(t,n,"formTarget",u.formTarget,u,null)):(Ht(t,n,"encType",u.encType,u,null),Ht(t,n,"method",u.method,u,null),Ht(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=fr(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=Zi);break;case"onScroll":o!=null&&pt("scroll",t);break;case"onScrollEnd":o!=null&&pt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=fr(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":pt("beforetoggle",t),pt("toggle",t),Le(t,"popover",o);break;case"xlinkActuate":ke(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":ke(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":ke(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":ke(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":ke(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":ke(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":ke(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":ke(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":ke(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Le(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Ni.get(a)||a,Le(t,a,o))}}function Ff(t,n,a,o,u,f){switch(a){case"style":Mi(t,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof o=="string"?Jn(t,o):(typeof o=="number"||typeof o=="bigint")&&Jn(t,""+o);break;case"onScroll":o!=null&&pt("scroll",t);break;case"onScrollEnd":o!=null&&pt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=Zi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!T.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[En]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):Le(t,a,o)}}}function Cn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":pt("error",t),pt("load",t);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var g=a[f];if(g!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ht(t,n,f,g,a,null)}}u&&Ht(t,n,"srcSet",a.srcSet,a,null),o&&Ht(t,n,"src",a.src,a,null);return;case"input":pt("invalid",t);var R=f=g=u=null,B=null,ee=null;for(o in a)if(a.hasOwnProperty(o)){var pe=a[o];if(pe!=null)switch(o){case"name":u=pe;break;case"type":g=pe;break;case"checked":B=pe;break;case"defaultChecked":ee=pe;break;case"value":f=pe;break;case"defaultValue":R=pe;break;case"children":case"dangerouslySetInnerHTML":if(pe!=null)throw Error(r(137,n));break;default:Ht(t,n,o,pe,a,null)}}Un(t,f,R,B,ee,g,u,!1);return;case"select":pt("invalid",t),o=g=f=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":f=R;break;case"defaultValue":g=R;break;case"multiple":o=R;default:Ht(t,n,u,R,a,null)}n=f,a=g,t.multiple=!!o,n!=null?_n(t,!!o,n,!1):a!=null&&_n(t,!!o,a,!0);return;case"textarea":pt("invalid",t),f=u=o=null;for(g in a)if(a.hasOwnProperty(g)&&(R=a[g],R!=null))switch(g){case"value":o=R;break;case"defaultValue":u=R;break;case"children":f=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(91));break;default:Ht(t,n,g,R,a,null)}yi(t,o,u,f);return;case"option":for(B in a)if(a.hasOwnProperty(B)&&(o=a[B],o!=null))switch(B){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Ht(t,n,B,o,a,null)}return;case"dialog":pt("beforetoggle",t),pt("toggle",t),pt("cancel",t),pt("close",t);break;case"iframe":case"object":pt("load",t);break;case"video":case"audio":for(o=0;o<To.length;o++)pt(To[o],t);break;case"image":pt("error",t),pt("load",t);break;case"details":pt("toggle",t);break;case"embed":case"source":case"link":pt("error",t),pt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ee in a)if(a.hasOwnProperty(ee)&&(o=a[ee],o!=null))switch(ee){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ht(t,n,ee,o,a,null)}return;default:if(Dt(n)){for(pe in a)a.hasOwnProperty(pe)&&(o=a[pe],o!==void 0&&Ff(t,n,pe,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&Ht(t,n,R,o,a,null))}function $x(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,g=null,R=null,B=null,ee=null,pe=null;for(ce in a){var xe=a[ce];if(a.hasOwnProperty(ce)&&xe!=null)switch(ce){case"checked":break;case"value":break;case"defaultValue":B=xe;default:o.hasOwnProperty(ce)||Ht(t,n,ce,null,o,xe)}}for(var oe in o){var ce=o[oe];if(xe=a[oe],o.hasOwnProperty(oe)&&(ce!=null||xe!=null))switch(oe){case"type":f=ce;break;case"name":u=ce;break;case"checked":ee=ce;break;case"defaultChecked":pe=ce;break;case"value":g=ce;break;case"defaultValue":R=ce;break;case"children":case"dangerouslySetInnerHTML":if(ce!=null)throw Error(r(137,n));break;default:ce!==xe&&Ht(t,n,oe,ce,o,xe)}}Fe(t,g,R,B,ee,pe,f,u);return;case"select":ce=g=R=oe=null;for(f in a)if(B=a[f],a.hasOwnProperty(f)&&B!=null)switch(f){case"value":break;case"multiple":ce=B;default:o.hasOwnProperty(f)||Ht(t,n,f,null,o,B)}for(u in o)if(f=o[u],B=a[u],o.hasOwnProperty(u)&&(f!=null||B!=null))switch(u){case"value":oe=f;break;case"defaultValue":R=f;break;case"multiple":g=f;default:f!==B&&Ht(t,n,u,f,o,B)}n=R,a=g,o=ce,oe!=null?_n(t,!!a,oe,!1):!!o!=!!a&&(n!=null?_n(t,!!a,n,!0):_n(t,!!a,a?[]:"",!1));return;case"textarea":ce=oe=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Ht(t,n,R,null,o,u)}for(g in o)if(u=o[g],f=a[g],o.hasOwnProperty(g)&&(u!=null||f!=null))switch(g){case"value":oe=u;break;case"defaultValue":ce=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&Ht(t,n,g,u,o,f)}Qn(t,oe,ce);return;case"option":for(var We in a)if(oe=a[We],a.hasOwnProperty(We)&&oe!=null&&!o.hasOwnProperty(We))switch(We){case"selected":t.selected=!1;break;default:Ht(t,n,We,null,o,oe)}for(B in o)if(oe=o[B],ce=a[B],o.hasOwnProperty(B)&&oe!==ce&&(oe!=null||ce!=null))switch(B){case"selected":t.selected=oe&&typeof oe!="function"&&typeof oe!="symbol";break;default:Ht(t,n,B,oe,o,ce)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var et in a)oe=a[et],a.hasOwnProperty(et)&&oe!=null&&!o.hasOwnProperty(et)&&Ht(t,n,et,null,o,oe);for(ee in o)if(oe=o[ee],ce=a[ee],o.hasOwnProperty(ee)&&oe!==ce&&(oe!=null||ce!=null))switch(ee){case"children":case"dangerouslySetInnerHTML":if(oe!=null)throw Error(r(137,n));break;default:Ht(t,n,ee,oe,o,ce)}return;default:if(Dt(n)){for(var Gt in a)oe=a[Gt],a.hasOwnProperty(Gt)&&oe!==void 0&&!o.hasOwnProperty(Gt)&&Ff(t,n,Gt,void 0,o,oe);for(pe in o)oe=o[pe],ce=a[pe],!o.hasOwnProperty(pe)||oe===ce||oe===void 0&&ce===void 0||Ff(t,n,pe,oe,o,ce);return}}for(var j in a)oe=a[j],a.hasOwnProperty(j)&&oe!=null&&!o.hasOwnProperty(j)&&Ht(t,n,j,null,o,oe);for(xe in o)oe=o[xe],ce=a[xe],!o.hasOwnProperty(xe)||oe===ce||oe==null&&ce==null||Ht(t,n,xe,oe,o,ce)}function Q0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function e1(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,g=u.initiatorType,R=u.duration;if(f&&R&&Q0(g)){for(g=0,R=u.responseEnd,o+=1;o<a.length;o++){var B=a[o],ee=B.startTime;if(ee>R)break;var pe=B.transferSize,xe=B.initiatorType;pe&&Q0(xe)&&(B=B.responseEnd,g+=pe*(B<R?1:(R-ee)/(B-ee)))}if(--o,n+=8*(f+g)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Hf=null,Gf=null;function jl(t){return t.nodeType===9?t:t.ownerDocument}function J0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function $0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Vf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var kf=null;function t1(){var t=window.event;return t&&t.type==="popstate"?t===kf?!1:(kf=t,!0):(kf=null,!1)}var eg=typeof setTimeout=="function"?setTimeout:void 0,n1=typeof clearTimeout=="function"?clearTimeout:void 0,tg=typeof Promise=="function"?Promise:void 0,i1=typeof queueMicrotask=="function"?queueMicrotask:typeof tg<"u"?function(t){return tg.resolve(null).then(t).catch(a1)}:eg;function a1(t){setTimeout(function(){throw t})}function qa(t){return t==="head"}function ng(t,n){var a=n,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),xs(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Ro(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Ro(a);for(var f=a.firstChild;f;){var g=f.nextSibling,R=f.nodeName;f[Ta]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=g}}else a==="body"&&Ro(t.ownerDocument.body);a=u}while(a);xs(n)}function ig(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function Xf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Xf(a),Aa(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function r1(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Ta])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=pi(t.nextSibling),t===null)break}return null}function s1(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=pi(t.nextSibling),t===null))return null;return t}function ag(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=pi(t.nextSibling),t===null))return null;return t}function Wf(t){return t.data==="$?"||t.data==="$~"}function qf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function o1(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function pi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Yf=null;function rg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return pi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function sg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function og(t,n,a){switch(n=jl(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Ro(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Aa(t)}var mi=new Map,lg=new Set;function Zl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var fa=F.d;F.d={f:l1,r:c1,D:u1,C:f1,L:d1,m:h1,X:m1,S:p1,M:g1};function l1(){var t=fa.f(),n=Hl();return t||n}function c1(t){var n=ji(t);n!==null&&n.tag===5&&n.type==="form"?Tm(n):fa.r(t)}var gs=typeof document>"u"?null:document;function cg(t,n,a){var o=gs;if(o&&typeof n=="string"&&n){var u=Nt(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),lg.has(u)||(lg.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Cn(n,"link",t),fn(n),o.head.appendChild(n)))}}function u1(t){fa.D(t),cg("dns-prefetch",t,null)}function f1(t,n){fa.C(t,n),cg("preconnect",t,n)}function d1(t,n,a){fa.L(t,n,a);var o=gs;if(o&&t&&n){var u='link[rel="preload"][as="'+Nt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Nt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Nt(a.imageSizes)+'"]')):u+='[href="'+Nt(t)+'"]';var f=u;switch(n){case"style":f=_s(t);break;case"script":f=vs(t)}mi.has(f)||(t=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),mi.set(f,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(Co(f))||n==="script"&&o.querySelector(wo(f))||(n=o.createElement("link"),Cn(n,"link",t),fn(n),o.head.appendChild(n)))}}function h1(t,n){fa.m(t,n);var a=gs;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Nt(o)+'"][href="'+Nt(t)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=vs(t)}if(!mi.has(f)&&(t=x({rel:"modulepreload",href:t},n),mi.set(f,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(wo(f)))return}o=a.createElement("link"),Cn(o,"link",t),fn(o),a.head.appendChild(o)}}}function p1(t,n,a){fa.S(t,n,a);var o=gs;if(o&&t){var u=Ra(o).hoistableStyles,f=_s(t);n=n||"default";var g=u.get(f);if(!g){var R={loading:0,preload:null};if(g=o.querySelector(Co(f)))R.loading=5;else{t=x({rel:"stylesheet",href:t,"data-precedence":n},a),(a=mi.get(f))&&jf(t,a);var B=g=o.createElement("link");fn(B),Cn(B,"link",t),B._p=new Promise(function(ee,pe){B.onload=ee,B.onerror=pe}),B.addEventListener("load",function(){R.loading|=1}),B.addEventListener("error",function(){R.loading|=2}),R.loading|=4,Kl(g,n,o)}g={type:"stylesheet",instance:g,count:1,state:R},u.set(f,g)}}}function m1(t,n){fa.X(t,n);var a=gs;if(a&&t){var o=Ra(a).hoistableScripts,u=vs(t),f=o.get(u);f||(f=a.querySelector(wo(u)),f||(t=x({src:t,async:!0},n),(n=mi.get(u))&&Zf(t,n),f=a.createElement("script"),fn(f),Cn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function g1(t,n){fa.M(t,n);var a=gs;if(a&&t){var o=Ra(a).hoistableScripts,u=vs(t),f=o.get(u);f||(f=a.querySelector(wo(u)),f||(t=x({src:t,async:!0,type:"module"},n),(n=mi.get(u))&&Zf(t,n),f=a.createElement("script"),fn(f),Cn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function ug(t,n,a,o){var u=(u=ae.current)?Zl(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=_s(a.href),a=Ra(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=_s(a.href);var f=Ra(u).hoistableStyles,g=f.get(t);if(g||(u=u.ownerDocument||u,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,g),(f=u.querySelector(Co(t)))&&!f._p&&(g.instance=f,g.state.loading=5),mi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},mi.set(t,a),f||_1(u,t,a,g.state))),n&&o===null)throw Error(r(528,""));return g}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=vs(a),a=Ra(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function _s(t){return'href="'+Nt(t)+'"'}function Co(t){return'link[rel="stylesheet"]['+t+"]"}function fg(t){return x({},t,{"data-precedence":t.precedence,precedence:null})}function _1(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Cn(n,"link",a),fn(n),t.head.appendChild(n))}function vs(t){return'[src="'+Nt(t)+'"]'}function wo(t){return"script[async]"+t}function dg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+Nt(a.href)+'"]');if(o)return n.instance=o,fn(o),o;var u=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),fn(o),Cn(o,"style",u),Kl(o,a.precedence,t),n.instance=o;case"stylesheet":u=_s(a.href);var f=t.querySelector(Co(u));if(f)return n.state.loading|=4,n.instance=f,fn(f),f;o=fg(a),(u=mi.get(u))&&jf(o,u),f=(t.ownerDocument||t).createElement("link"),fn(f);var g=f;return g._p=new Promise(function(R,B){g.onload=R,g.onerror=B}),Cn(f,"link",o),n.state.loading|=4,Kl(f,a.precedence,t),n.instance=f;case"script":return f=vs(a.src),(u=t.querySelector(wo(f)))?(n.instance=u,fn(u),u):(o=a,(u=mi.get(f))&&(o=x({},a),Zf(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),fn(u),Cn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Kl(o,a.precedence,t));return n.instance}function Kl(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,g=0;g<o.length;g++){var R=o[g];if(R.dataset.precedence===n)f=R;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function jf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Zf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Ql=null;function hg(t,n,a){if(Ql===null){var o=new Map,u=Ql=new Map;u.set(a,o)}else u=Ql,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[Ta]||f[un]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var g=f.getAttribute(n)||"";g=t+g;var R=o.get(g);R?R.push(f):o.set(g,[f])}}return o}function pg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function v1(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function mg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function x1(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=_s(o.href),f=n.querySelector(Co(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Jl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,fn(f);return}f=n.ownerDocument||n,o=fg(o),(u=mi.get(u))&&jf(o,u),f=f.createElement("link"),fn(f);var g=f;g._p=new Promise(function(R,B){g.onload=R,g.onerror=B}),Cn(f,"link",o),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Jl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Kf=0;function S1(t,n){return t.stylesheets&&t.count===0&&ec(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&ec(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Kf===0&&(Kf=62500*e1());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&ec(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Kf?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function Jl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ec(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var $l=null;function ec(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,$l=new Map,n.forEach(y1,t),$l=null,Jl.call(t))}function y1(t,n){if(!(n.state.loading&4)){var a=$l.get(t);if(a)var o=a.get(null);else{a=new Map,$l.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var g=u[f];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),o=g)}o&&a.set(null,o)}u=n.instance,g=u.getAttribute("data-precedence"),f=a.get(g)||o,f===o&&a.set(null,u),a.set(g,u),this.count++,o=Jl.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Do={$$typeof:G,Provider:null,Consumer:null,_currentValue:te,_currentValue2:te,_threadCount:0};function M1(t,n,a,o,u,f,g,R,B){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=qe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qe(0),this.hiddenUpdates=qe(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function gg(t,n,a,o,u,f,g,R,B,ee,pe,xe){return t=new M1(t,n,a,g,B,ee,pe,xe,R),n=1,f===!0&&(n|=24),f=ei(3,null,null,n),t.current=f,f.stateNode=t,n=Cu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Lu(f),t}function _g(t){return t?(t=Zr,t):Zr}function vg(t,n,a,o,u,f){u=_g(u),o.context===null?o.context=u:o.pendingContext=u,o=Pa(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=za(t,o,n),a!==null&&(Wn(a,t,n),oo(a,t,n))}function xg(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Qf(t,n){xg(t,n),(t=t.alternate)&&xg(t,n)}function Sg(t){if(t.tag===13||t.tag===31){var n=mr(t,67108864);n!==null&&Wn(n,t,67108864),Qf(t,67108864)}}function yg(t){if(t.tag===13||t.tag===31){var n=ri();n=ks(n);var a=mr(t,n);a!==null&&Wn(a,t,n),Qf(t,n)}}var tc=!0;function b1(t,n,a,o){var u=z.T;z.T=null;var f=F.p;try{F.p=2,Jf(t,n,a,o)}finally{F.p=f,z.T=u}}function E1(t,n,a,o){var u=z.T;z.T=null;var f=F.p;try{F.p=8,Jf(t,n,a,o)}finally{F.p=f,z.T=u}}function Jf(t,n,a,o){if(tc){var u=$f(o);if(u===null)Bf(t,n,o,nc,a),bg(t,o);else if(A1(u,t,n,a,o))o.stopPropagation();else if(bg(t,o),n&4&&-1<T1.indexOf(t)){for(;u!==null;){var f=ji(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var g=Ae(f.pendingLanes);if(g!==0){var R=f;for(R.pendingLanes|=2,R.entangledLanes|=2;g;){var B=1<<31-Be(g);R.entanglements[1]|=B,g&=~B}Ii(f),(Ct&6)===0&&(Bl=Bt()+500,Eo(0))}}break;case 31:case 13:R=mr(f,2),R!==null&&Wn(R,f,2),Hl(),Qf(f,2)}if(f=$f(o),f===null&&Bf(t,n,o,nc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else Bf(t,n,o,null,a)}}function $f(t){return t=eu(t),ed(t)}var nc=null;function ed(t){if(nc=null,t=Yi(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=p(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return nc=t,null}function Mg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Rt()){case w:return 2;case y:return 8;case K:case re:return 32;case fe:return 268435456;default:return 32}default:return 32}}var td=!1,Ya=null,ja=null,Za=null,Uo=new Map,Lo=new Map,Ka=[],T1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function bg(t,n){switch(t){case"focusin":case"focusout":Ya=null;break;case"dragenter":case"dragleave":ja=null;break;case"mouseover":case"mouseout":Za=null;break;case"pointerover":case"pointerout":Uo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Lo.delete(n.pointerId)}}function No(t,n,a,o,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=ji(n),n!==null&&Sg(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function A1(t,n,a,o,u){switch(n){case"focusin":return Ya=No(Ya,t,n,a,o,u),!0;case"dragenter":return ja=No(ja,t,n,a,o,u),!0;case"mouseover":return Za=No(Za,t,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return Uo.set(f,No(Uo.get(f)||null,t,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Lo.set(f,No(Lo.get(f)||null,t,n,a,o,u)),!0}return!1}function Eg(t){var n=Yi(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,Vr(t.priority,function(){yg(a)});return}}else if(n===31){if(n=p(a),n!==null){t.blockedOn=n,Vr(t.priority,function(){yg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ic(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=$f(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);$c=o,a.target.dispatchEvent(o),$c=null}else return n=ji(a),n!==null&&Sg(n),t.blockedOn=a,!1;n.shift()}return!0}function Tg(t,n,a){ic(t)&&a.delete(n)}function R1(){td=!1,Ya!==null&&ic(Ya)&&(Ya=null),ja!==null&&ic(ja)&&(ja=null),Za!==null&&ic(Za)&&(Za=null),Uo.forEach(Tg),Lo.forEach(Tg)}function ac(t,n){t.blockedOn===n&&(t.blockedOn=null,td||(td=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,R1)))}var rc=null;function Ag(t){rc!==t&&(rc=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){rc===t&&(rc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(ed(o||a)===null)continue;break}var f=ji(a);f!==null&&(t.splice(n,3),n-=3,Ju(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function xs(t){function n(B){return ac(B,t)}Ya!==null&&ac(Ya,t),ja!==null&&ac(ja,t),Za!==null&&ac(Za,t),Uo.forEach(n),Lo.forEach(n);for(var a=0;a<Ka.length;a++){var o=Ka[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Ka.length&&(a=Ka[0],a.blockedOn===null);)Eg(a),a.blockedOn===null&&Ka.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],g=u[En]||null;if(typeof f=="function")g||Ag(a);else if(g){var R=null;if(f&&f.hasAttribute("formAction")){if(u=f,g=f[En]||null)R=g.formAction;else if(ed(u)!==null)continue}else R=g.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),Ag(a)}}}function Rg(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(g){return u=g})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function nd(t){this._internalRoot=t}sc.prototype.render=nd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=ri();vg(a,o,t,n,null,null)},sc.prototype.unmount=nd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;vg(t.current,2,null,t,null,null),Hl(),n[Fn]=null}};function sc(t){this._internalRoot=t}sc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Ws();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ka.length&&n!==0&&n<Ka[a].priority;a++);Ka.splice(a,0,t),a===0&&Eg(t)}};var Cg=e.version;if(Cg!=="19.2.8")throw Error(r(527,Cg,"19.2.8"));F.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=h(n),t=t!==null?S(t):null,t=t===null?null:t.stateNode,t};var C1={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var oc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!oc.isDisabled&&oc.supportsFiber)try{ue=oc.inject(C1),de=oc}catch{}}return Po.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,o="",u=Pm,f=zm,g=Im;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),n=gg(t,1,!1,null,null,a,o,null,u,f,g,Rg),t[Fn]=n.current,If(t),new nd(n)},Po.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var o=!1,u="",f=Pm,g=zm,R=Im,B=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=gg(t,1,!0,n,a??null,o,u,B,f,g,R,Rg),n.context=_g(null),a=n.current,o=ri(),o=ks(o),u=Pa(o),u.callback=null,za(a,u,o),a=o,n.current.lanes=a,Ve(n,a),Ii(n),t[Fn]=n.current,If(t),new sc(n)},Po.version="19.2.8",Po}var Bg;function B1(){if(Bg)return rd.exports;Bg=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),rd.exports=I1(),rd.exports}var F1=B1();const H1=H_(F1);function G1({active:s,setActive:e}){const i=["About","Experience","Skills","Projects","Achievements","Contact"],[r,l]=bn.useState(!1);return bn.useEffect(()=>{const c=()=>l(window.scrollY>20);return window.addEventListener("scroll",c),()=>window.removeEventListener("scroll",c)},[]),L.jsx("nav",{style:{position:"fixed",top:0,left:0,right:0,zIndex:100,background:r?"rgba(5, 7, 20, 0.93)":"transparent",backdropFilter:r?"blur(18px)":"none",borderBottom:r?"1px solid rgba(255, 255, 255, 0.07)":"none",transition:"all 0.4s",padding:"0 clamp(1rem, 5vw, 4rem)"},children:L.jsxs("div",{style:{maxWidth:1200,margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"space-between",height:64},children:[L.jsxs("span",{style:{fontFamily:"'Outfit', sans-serif",fontWeight:800,fontSize:22,color:"#a78bfa",letterSpacing:"-0.03em"},children:["AY",L.jsx("span",{style:{color:"#fff"},children:"."})]}),L.jsx("div",{style:{display:"flex",gap:4,flexWrap:"wrap"},children:i.map(c=>L.jsx("a",{href:`#${c.toLowerCase()}`,onClick:()=>e(c),style:{color:s===c?"#a78bfa":"rgba(255, 255, 255, 0.6)",textDecoration:"none",fontSize:14,fontWeight:500,padding:"6px 14px",borderRadius:999,background:s===c?"rgba(167, 139, 250, 0.12)":"transparent",transition:"all 0.2s"},children:c},c))})]})})}function V1(){const[s,e]=bn.useState(""),i=["Full-Stack Developer","MERN Stack Engineer","AWS Cloud Practitioner","Problem Solver"],r=bn.useRef(0),l=bn.useRef(0),c=bn.useRef(!1);return bn.useEffect(()=>{const d=()=>{const m=i[r.current];if(c.current)l.current--,e(m.slice(0,l.current)),l.current===0&&(c.current=!1,r.current=(r.current+1)%i.length);else if(l.current++,e(m.slice(0,l.current)),l.current===m.length){c.current=!0,setTimeout(d,1800);return}setTimeout(d,c.current?52:78)},p=setTimeout(d,500);return()=>clearTimeout(p)},[]),L.jsxs("section",{id:"about",style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",position:"relative",overflow:"hidden",padding:"80px clamp(1rem, 5vw, 4rem) 0"},children:[L.jsxs("div",{style:{position:"absolute",inset:0,pointerEvents:"none"},children:[L.jsx("div",{style:{position:"absolute",width:700,height:700,borderRadius:"50%",background:"radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)",top:"-15%",left:"-12%",animation:"blob1 12s ease-in-out infinite"}}),L.jsx("div",{style:{position:"absolute",width:500,height:500,borderRadius:"50%",background:"radial-gradient(circle, rgba(99, 102, 241, 0.12) 0%, transparent 70%)",bottom:"-5%",right:"-8%",animation:"blob2 14s ease-in-out infinite"}}),L.jsx("div",{style:{position:"absolute",width:320,height:320,borderRadius:"50%",background:"radial-gradient(circle, rgba(34, 211, 153, 0.08) 0%, transparent 70%)",top:"40%",left:"55%",animation:"blob3 10s ease-in-out infinite"}}),L.jsx("div",{style:{position:"absolute",inset:0,backgroundImage:"linear-gradient(rgba(255, 255, 255, 0.023) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.023) 1px, transparent 1px)",backgroundSize:"64px 64px"}})]}),L.jsxs("div",{className:"hero-container",children:[L.jsxs("div",{className:"hero-left",children:[L.jsx("span",{style:{fontSize:"16px",color:"rgba(255, 255, 255, 0.6)",fontWeight:600,letterSpacing:"0.15em",textTransform:"uppercase",marginBottom:"8px",display:"block"},children:"Hi I am"}),L.jsx("h1",{style:{fontFamily:"'Outfit', sans-serif",fontSize:"clamp(2rem, 4vw, 3.2rem)",fontWeight:800,lineHeight:1.1,margin:"0 0 8px",letterSpacing:"-0.02em",color:"#fff"},children:"Abhishek Yadav"}),L.jsxs("h2",{style:{fontFamily:"'Outfit', sans-serif",fontSize:"clamp(2.5rem, 5.5vw, 4.2rem)",fontWeight:800,color:"#fd6e0a",margin:"0 0 24px",lineHeight:1.05,letterSpacing:"-0.03em",minHeight:"clamp(3rem, 6vw, 4.5rem)"},children:[s,L.jsx("span",{style:{animation:"blink 1s step-end infinite",color:"#fd6e0a"},children:"|"})]}),L.jsxs("div",{className:"hero-social-row",children:[L.jsx("a",{href:"https://linkedin.com/in/abhishek-yadav-6207ab364/",target:"_blank",rel:"noreferrer",className:"hero-social-link",title:"LinkedIn",children:L.jsx("svg",{viewBox:"0 0 24 24",width:"20",height:"20",children:L.jsx("path",{d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"})})}),L.jsx("a",{href:"https://github.com/abhishekyd300",target:"_blank",rel:"noreferrer",className:"hero-social-link",title:"GitHub",children:L.jsx("svg",{viewBox:"0 0 24 24",width:"20",height:"20",children:L.jsx("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})})}),L.jsx("a",{href:"mailto:abhishekyd300@gmail.com",className:"hero-social-link",title:"Email",children:L.jsx("svg",{viewBox:"0 0 24 24",width:"20",height:"20",children:L.jsx("path",{d:"M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l12-9.725v15.438h-24v-15.438l12 9.725z"})})}),L.jsx("a",{href:"https://instagram.com",target:"_blank",rel:"noreferrer",className:"hero-social-link",title:"Instagram",children:L.jsx("svg",{viewBox:"0 0 24 24",width:"20",height:"20",children:L.jsx("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"})})})]}),L.jsxs("div",{className:"hero-btn-row",children:[L.jsx("a",{href:"mailto:abhishekyd300@gmail.com",className:"hero-btn-primary",children:"Hire Me"}),L.jsx("a",{href:"/resume.pdf",target:"_blank",rel:"noreferrer",className:"hero-btn-secondary",children:"Download CV"})]})]}),L.jsx("div",{className:"hero-right",children:L.jsxs("div",{className:"hero-image-wrapper",children:[L.jsx("div",{className:"hero-circle-bg"}),L.jsxs("div",{className:"hero-img-box",children:[L.jsx("img",{src:"/profile.png",alt:"Abhishek Yadav Portrait",className:"hero-portrait-img",onError:d=>{d.target.onerror=null,d.target.style.display="none",d.target.nextSibling.style.display="flex"}}),L.jsx("div",{style:{display:"none",flexDirection:"column",alignItems:"center",gap:6,zIndex:3,position:"relative"},children:L.jsx("span",{style:{fontSize:64},children:"👤"})})]})]})})]})]})}function k1(s=.12){const e=bn.useRef(null),[i,r]=bn.useState(!1);return bn.useEffect(()=>{const l=new IntersectionObserver(([d])=>{d.isIntersecting&&r(!0)},{threshold:s}),c=e.current;return c&&l.observe(c),()=>{c&&l.unobserve(c),l.disconnect()}},[s]),[e,i]}function wn({children:s,delay:e=0,dir:i="up"}){const[r,l]=k1(),c=i==="up"?"translateY(36px)":i==="left"?"translateX(-36px)":"translateX(36px)";return L.jsx("div",{ref:r,style:{opacity:l?1:0,transform:l?"none":c,transition:`opacity 0.65s ease ${e}s, transform 0.65s ease ${e}s`},children:s})}function Hr({label:s,title:e,color:i="#a78bfa"}){return L.jsxs("div",{style:{textAlign:"center",marginBottom:56},children:[L.jsx("span",{style:{color:i,fontSize:12,letterSpacing:"0.14em",textTransform:"uppercase",fontWeight:700},children:s}),L.jsx("h2",{style:{fontFamily:"'Outfit', sans-serif",fontSize:"clamp(1.9rem, 4vw, 2.9rem)",fontWeight:800,color:"#fff",margin:"8px 0 0",letterSpacing:"-0.03em"},children:e})]})}function X1(){const s=[{icon:"💡",label:"Problem Solver",desc:"300+ DSA problems on LeetCode"},{icon:"🚀",label:"Full-Stack Dev",desc:"MERN stack end-to-end"},{icon:"☁️",label:"Cloud Certified",desc:"AWS Cloud Practitioner"},{icon:"🤝",label:"Team Player",desc:"Public speaking & leadership"}];return L.jsxs("section",{style:{padding:"100px clamp(1rem, 5vw, 4rem)",maxWidth:1200,margin:"0 auto"},children:[L.jsx(wn,{children:L.jsx(Hr,{label:"Who I Am",title:"About Me",color:"#22d3ee"})}),L.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:40,alignItems:"start"},children:[L.jsx(wn,{dir:"left",children:L.jsxs("div",{style:{background:"rgba(255, 255, 255, 0.03)",border:"1px solid rgba(255, 255, 255, 0.08)",borderRadius:24,padding:"36px 32px"},children:[L.jsx("h3",{style:{fontFamily:"'Outfit', sans-serif",color:"#fff",fontSize:20,fontWeight:700,marginBottom:16,letterSpacing:"-0.02em"},children:"Hey, I'm Abhishek 👋"}),L.jsxs("p",{style:{color:"rgba(255, 255, 255, 0.55)",fontSize:15,lineHeight:1.9,marginBottom:16},children:["I'm a passionate Computer Science undergraduate at"," ",L.jsx("span",{style:{color:"#a78bfa",fontWeight:600},children:"Parul University"})," (2023–2027), focused on building real-world web applications that create impact."]}),L.jsxs("p",{style:{color:"rgba(255, 255, 255, 0.55)",fontSize:15,lineHeight:1.9,marginBottom:16},children:["My expertise lies in the"," ",L.jsx("span",{style:{color:"#34d399",fontWeight:600},children:"MERN stack"})," — from designing RESTful APIs to crafting responsive UIs. I've built projects like"," ",L.jsx("span",{style:{color:"#22c55e",fontWeight:600},children:"Krishi Setu"})," (a farmer marketplace) and"," ",L.jsx("span",{style:{color:"#6366f1",fontWeight:600},children:"Smart CV"})," (an AI resume builder)."]}),L.jsxs("p",{style:{color:"rgba(255, 255, 255, 0.55)",fontSize:15,lineHeight:1.9},children:["I'm ",L.jsx("span",{style:{color:"#FF9900",fontWeight:600},children:"AWS Certified"}),", love competitive programming, and am actively seeking internship or full-time opportunities where I can grow and contribute."]}),L.jsx("div",{style:{display:"flex",gap:10,marginTop:24,flexWrap:"wrap"},children:["Open to Work","React Dev","Node.js","DSA"].map(e=>L.jsx("span",{style:{background:"rgba(167, 139, 250, 0.12)",border:"1px solid rgba(167, 139, 250, 0.2)",color:"#c4b5fd",borderRadius:999,padding:"4px 14px",fontSize:12,fontWeight:600},children:e},e))})]})}),L.jsx(wn,{dir:"right",delay:.1,children:L.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16},children:s.map(e=>L.jsxs("div",{style:{background:"rgba(255, 255, 255, 0.03)",border:"1px solid rgba(255, 255, 255, 0.08)",borderRadius:18,padding:"24px 20px",transition:"transform 0.3s, border-color 0.3s, box-shadow 0.3s"},onMouseEnter:i=>{i.currentTarget.style.transform="translateY(-4px)",i.currentTarget.style.borderColor="rgba(167, 139, 250, 0.3)",i.currentTarget.style.boxShadow="0 14px 40px rgba(124, 58, 237, 0.12)"},onMouseLeave:i=>{i.currentTarget.style.transform="none",i.currentTarget.style.borderColor="rgba(255, 255, 255, 0.08)",i.currentTarget.style.boxShadow="none"},children:[L.jsx("div",{style:{fontSize:30,marginBottom:10},children:e.icon}),L.jsx("div",{style:{color:"#fff",fontSize:14,fontWeight:700,marginBottom:4},children:e.label}),L.jsx("div",{style:{color:"rgba(255, 255, 255, 0.4)",fontSize:12,lineHeight:1.4},children:e.desc})]},e.label))})})]})]})}function W1(){const[s,e]=bn.useState(null),i=[{company:"Synent Technologies",role:"Web Development & Designing Intern",type:"Fellowship Program",date:"June 2026 - Present",location:"Remote / Hybrid",candidateId:"SYN/J2/IP1172",offerLetterDate:"05 June 2026",color:"#fd6e0a",icon:"🏢",pdfUrl:"/Abhishek Yadav_Offer_Letter.pdf",highlights:["Selected for the Web Development and Designing fellowship program at Synent Technologies.","Hands-on exposure to real-world software tasks, enhancing core engineering and UI/UX design concepts.","Participating in end-to-end web application development and collaborating on production workflow tasks."],certified:!0}];return L.jsxs("section",{id:"experience",style:{padding:"80px clamp(1rem, 5vw, 4rem)",maxWidth:1200,margin:"0 auto"},children:[L.jsx(wn,{children:L.jsx(Hr,{label:"Career Journey",title:"Work Experience",color:"#fd6e0a"})}),L.jsx("div",{style:{display:"flex",flexDirection:"column",gap:24,marginTop:32},children:i.map((r,l)=>L.jsx(wn,{delay:l*.15,children:L.jsxs("div",{style:{background:"rgba(255, 255, 255, 0.03)",border:"1px solid rgba(255, 255, 255, 0.08)",borderRadius:20,padding:"32px clamp(20px, 4vw, 36px)",position:"relative",overflow:"hidden",transition:"all 0.3s ease"},children:[L.jsx("div",{style:{position:"absolute",top:0,left:0,width:4,height:"100%",background:r.color}}),L.jsxs("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"flex-start",gap:16,marginBottom:16},children:[L.jsxs("div",{children:[L.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:6},children:[L.jsx("span",{style:{fontSize:28},children:r.icon}),L.jsx("h3",{style:{fontSize:22,fontWeight:700,color:"#fff",fontFamily:"'Outfit', sans-serif",margin:0},children:r.role})]}),L.jsxs("h4",{style:{fontSize:16,color:r.color,fontWeight:600,margin:"4px 0 0"},children:[r.company," ",L.jsxs("span",{style:{color:"rgba(255,255,255,0.4)",fontWeight:400},children:["• ",r.type]})]})]}),L.jsxs("div",{style:{textAlign:"right",flexShrink:0},children:[L.jsx("span",{style:{display:"inline-block",padding:"6px 14px",borderRadius:20,background:`${r.color}15`,border:`1px solid ${r.color}40`,color:r.color,fontSize:13,fontWeight:600},children:r.date}),L.jsxs("div",{style:{fontSize:12,color:"rgba(255,255,255,0.4)",marginTop:6},children:["Candidate ID: ",r.candidateId]})]})]}),L.jsx("ul",{style:{padding:0,margin:"20px 0 24px",listStyle:"none"},children:r.highlights.map((c,d)=>L.jsxs("li",{style:{display:"flex",gap:10,color:"rgba(255, 255, 255, 0.7)",fontSize:14.5,lineHeight:1.6,marginBottom:10},children:[L.jsx("span",{style:{color:r.color},children:"▸"}),c]},d))}),r.certified&&L.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap",alignItems:"center"},children:[L.jsxs("button",{onClick:()=>e({title:`${r.company} Offer Letter`,url:r.pdfUrl}),style:{display:"inline-flex",alignItems:"center",gap:8,background:"rgba(253, 110, 10, 0.15)",border:"1px solid rgba(253, 110, 10, 0.4)",color:"#fd6e0a",padding:"10px 20px",borderRadius:10,fontSize:13.5,fontWeight:600,cursor:"pointer",transition:"all 0.2s ease"},onMouseEnter:c=>{c.currentTarget.style.background="rgba(253, 110, 10, 0.28)",c.currentTarget.style.transform="translateY(-2px)"},onMouseLeave:c=>{c.currentTarget.style.background="rgba(253, 110, 10, 0.15)",c.currentTarget.style.transform="none"},children:[L.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[L.jsx("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),L.jsx("polyline",{points:"14 2 14 8 20 8"}),L.jsx("line",{x1:"16",y1:"13",x2:"8",y2:"13"}),L.jsx("line",{x1:"16",y1:"17",x2:"8",y2:"17"})]}),"View Offer Letter PDF"]}),L.jsx("span",{style:{fontSize:12,color:"rgba(255, 255, 255, 0.4)"},children:"Verified PDF Document • Issued June 05, 2026"})]})]})},l))}),s&&L.jsx("div",{onClick:()=>e(null),style:{position:"fixed",inset:0,zIndex:1e3,background:"rgba(0, 0, 0, 0.85)",backdropFilter:"blur(8px)",display:"flex",alignItems:"center",justifyContent:"center",padding:20},children:L.jsxs("div",{onClick:r=>r.stopPropagation(),style:{position:"relative",maxWidth:900,width:"100%",height:"88vh",background:"#0b0d1e",border:"1px solid rgba(253, 110, 10, 0.35)",borderRadius:16,overflow:"hidden",display:"flex",flexDirection:"column",boxShadow:"0 25px 70px rgba(0,0,0,0.8)"},children:[L.jsxs("div",{style:{padding:"14px 20px",background:"rgba(255, 255, 255, 0.04)",borderBottom:"1px solid rgba(255, 255, 255, 0.08)",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[L.jsxs("h4",{style:{margin:0,color:"#fff",fontSize:16,fontWeight:700,fontFamily:"'Outfit', sans-serif"},children:["📄 ",s.title]}),L.jsx("div",{style:{display:"flex",gap:12,alignItems:"center"},children:L.jsx("button",{onClick:()=>e(null),style:{background:"none",border:"none",color:"rgba(255, 255, 255, 0.7)",fontSize:22,cursor:"pointer",lineHeight:1},children:"✕"})})]}),L.jsx("iframe",{src:s.url,title:s.title,style:{width:"100%",height:"100%",border:"none",background:"#ffffff"}})]})})]})}function q1(){const s=[{degree:"B.Tech in Computer Science & Engineering",institution:"Parul University",period:"2023 – 2027",cgpa:"7.85",status:"Ongoing",color:"#a78bfa",glow:"rgba(167, 139, 250, 0.15)",logo:"🎓",highlights:["MERN Stack Development","Data Structures & Algorithms","Cloud Computing","Database Management"]}];return L.jsxs("section",{style:{padding:"0 clamp(1rem, 5vw, 4rem) 100px",maxWidth:1200,margin:"0 auto"},children:[L.jsx(wn,{children:L.jsx(Hr,{label:"Academic Journey",title:"Education",color:"#f59e0b"})}),L.jsx("div",{style:{display:"flex",flexDirection:"column",gap:20},children:s.map((e,i)=>L.jsx(wn,{delay:i*.1,children:L.jsxs("div",{style:{background:"rgba(255, 255, 255, 0.03)",border:"1px solid rgba(255, 255, 255, 0.08)",borderRadius:24,padding:"36px 36px",position:"relative",overflow:"hidden",transition:"border-color 0.3s, box-shadow 0.3s"},onMouseEnter:r=>{r.currentTarget.style.borderColor=e.color+"50",r.currentTarget.style.boxShadow=`0 20px 60px ${e.glow}`},onMouseLeave:r=>{r.currentTarget.style.borderColor="rgba(255, 255, 255, 0.08)",r.currentTarget.style.boxShadow="none"},children:[L.jsx("div",{style:{position:"absolute",top:-60,right:-60,width:200,height:200,borderRadius:"50%",background:`radial-gradient(circle, ${e.color}12 0%, transparent 70%)`,pointerEvents:"none"}}),L.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:24,alignItems:"flex-start"},children:[L.jsxs("div",{style:{flex:1,minWidth:240},children:[L.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,marginBottom:14},children:[L.jsx("div",{style:{width:52,height:52,borderRadius:14,background:`${e.color}18`,border:`1px solid ${e.color}30`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:26,flexShrink:0},children:e.logo}),L.jsxs("div",{children:[L.jsx("h3",{style:{fontFamily:"'Outfit', sans-serif",color:"#fff",fontSize:19,fontWeight:700,margin:0,letterSpacing:"-0.02em"},children:e.degree}),L.jsx("p",{style:{color:e.color,fontSize:14,fontWeight:600,margin:"3px 0 0"},children:e.institution})]})]}),L.jsxs("div",{style:{display:"flex",gap:10,flexWrap:"wrap",marginBottom:16},children:[L.jsxs("span",{style:{background:"rgba(255, 255, 255, 0.06)",border:"1px solid rgba(255, 255, 255, 0.1)",color:"rgba(255, 255, 255, 0.6)",borderRadius:8,padding:"4px 12px",fontSize:12,fontWeight:500},children:["📅 ",e.period]}),L.jsxs("span",{style:{background:`${e.color}18`,border:`1px solid ${e.color}30`,color:e.color,borderRadius:8,padding:"4px 12px",fontSize:12,fontWeight:700},children:["CGPA: ",e.cgpa]}),L.jsxs("span",{style:{background:"rgba(34, 197, 94, 0.12)",border:"1px solid rgba(34, 197, 94, 0.25)",color:"#22c55e",borderRadius:8,padding:"4px 12px",fontSize:12,fontWeight:700},children:["● ",e.status]})]})]}),L.jsxs("div",{style:{flex:1,minWidth:220},children:[L.jsx("p",{style:{color:"rgba(255, 255, 255, 0.4)",fontSize:11,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",marginBottom:12},children:"Key Subjects"}),L.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:e.highlights.map(r=>L.jsx("span",{style:{background:"rgba(255, 255, 255, 0.04)",border:"1px solid rgba(255, 255, 255, 0.09)",color:"rgba(255, 255, 255, 0.65)",borderRadius:8,padding:"5px 12px",fontSize:12,fontWeight:500},children:r},r))})]})]})]})},e.institution))})]})}var G_={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Fg=sr.createContext&&sr.createContext(G_),Y1=["attr","size","title"];function j1(s,e){if(s==null)return{};var i,r,l=Z1(s,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(s);for(r=0;r<c.length;r++)i=c[r],e.indexOf(i)===-1&&{}.propertyIsEnumerable.call(s,i)&&(l[i]=s[i])}return l}function Z1(s,e){if(s==null)return{};var i={};for(var r in s)if({}.hasOwnProperty.call(s,r)){if(e.indexOf(r)!==-1)continue;i[r]=s[r]}return i}function Fc(){return Fc=Object.assign?Object.assign.bind():function(s){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var r in i)({}).hasOwnProperty.call(i,r)&&(s[r]=i[r])}return s},Fc.apply(null,arguments)}function Hg(s,e){var i=Object.keys(s);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(s);e&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(s,l).enumerable})),i.push.apply(i,r)}return i}function Hc(s){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?Hg(Object(i),!0).forEach(function(r){K1(s,r,i[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(i)):Hg(Object(i)).forEach(function(r){Object.defineProperty(s,r,Object.getOwnPropertyDescriptor(i,r))})}return s}function K1(s,e,i){return(e=Q1(e))in s?Object.defineProperty(s,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):s[e]=i,s}function Q1(s){var e=J1(s,"string");return typeof e=="symbol"?e:e+""}function J1(s,e){if(typeof s!="object"||!s)return s;var i=s[Symbol.toPrimitive];if(i!==void 0){var r=i.call(s,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(s)}function V_(s){return s&&s.map((e,i)=>sr.createElement(e.tag,Hc({key:i},e.attr),V_(e.child)))}function Ph(s){return e=>sr.createElement($1,Fc({attr:Hc({},s.attr)},e),V_(s.child))}function $1(s){var e=i=>{var r=s.attr,l=s.size,c=s.title,d=j1(s,Y1),p=l||i.size||"1em",m;return i.className&&(m=i.className),s.className&&(m=(m?m+" ":"")+s.className),sr.createElement("svg",Fc({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},i.attr,r,d,{className:m,style:Hc(Hc({color:s.color||i.color},i.style),s.style),height:p,width:p,xmlns:"http://www.w3.org/2000/svg"}),c&&sr.createElement("title",null,c),s.children)};return Fg!==void 0?sr.createElement(Fg.Consumer,null,i=>e(i)):e(G_)}function eS(s){return Ph({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(s)}function tS(s){return Ph({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M471.1 96C405 96 353.3 137.3 320 174.6 286.7 137.3 235 96 168.9 96 75.8 96 0 167.8 0 256s75.8 160 168.9 160c66.1 0 117.8-41.3 151.1-78.6 33.3 37.3 85 78.6 151.1 78.6 93.1 0 168.9-71.8 168.9-160S564.2 96 471.1 96zM168.9 320c-40.2 0-72.9-28.7-72.9-64s32.7-64 72.9-64c38.2 0 73.4 36.1 94 64-20.4 27.6-55.9 64-94 64zm302.2 0c-38.2 0-73.4-36.1-94-64 20.4-27.6 55.9-64 94-64 40.2 0 72.9 28.7 72.9 64s-32.7 64-72.9 64z"},child:[]}]})(s)}function nS(s){return Ph({attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M9.80307 3.0431C10.0554 3.15525 10.1691 3.45073 10.0569 3.70307L6.05691 12.7031C5.94475 12.9554 5.64927 13.0691 5.39693 12.9569C5.14459 12.8448 5.03094 12.5493 5.14309 12.2969L9.14309 3.29693C9.25525 3.04459 9.55073 2.93094 9.80307 3.0431ZM4.33218 5.3763C4.53857 5.55976 4.55716 5.87579 4.3737 6.08218L2.66898 8L4.3737 9.91782C4.55716 10.1242 4.53857 10.4402 4.33218 10.6237C4.12579 10.8072 3.80975 10.7886 3.6263 10.5822L1.6263 8.33218C1.4579 8.14274 1.4579 7.85726 1.6263 7.66782L3.6263 5.41782C3.80975 5.21143 4.12579 5.19284 4.33218 5.3763ZM11.6678 5.3763C11.8742 5.19284 12.1902 5.21143 12.3737 5.41782L14.3737 7.66782C14.5421 7.85726 14.5421 8.14274 14.3737 8.33218L12.3737 10.5822C12.1902 10.7886 11.8742 10.8072 11.6678 10.6237C11.4614 10.4402 11.4428 10.1242 11.6263 9.91782L13.331 8L11.6263 6.08218C11.4428 5.87579 11.4614 5.55976 11.6678 5.3763Z"},child:[]}]})(s)}const iS={"C++":()=>L.jsxs("svg",{viewBox:"0 0 128 128",width:"34",height:"34",children:[L.jsx("path",{fill:"#00599C",d:"M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.8-2.1-2.4-2.7z"}),L.jsx("path",{fill:"#004482",d:"M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z"}),L.jsx("path",{fill:"#659AD2",d:"M92 67.4v-5.8l-3.4 2v-4l3.4-2v-5.8l5.2 3v3.8l3.3-2v4l-3.3 2v3.8zm17 0v-5.8l-3.4 2v-4l3.4-2v-5.8l5.2 3v3.8l3.3-2v4l-3.3 2v3.8zM64 88c-13.3 0-24-10.7-24-24s10.7-24 24-24c7.2 0 13.8 3.2 18.3 8.2l-9.6 5.5C50.7 48.2 41 57 41 64s9.7 15.8 20.7 15.8c4.9 0 9.5-1.7 13.1-4.7l9.6 5.5C79.8 84.8 72.2 88 64 88z"})]}),JavaScript:()=>L.jsxs("svg",{viewBox:"0 0 128 128",width:"34",height:"34",children:[L.jsx("rect",{width:"128",height:"128",rx:"8",fill:"#F0DB4F"}),L.jsx("path",{fill:"#323330",d:"M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.963-8.548zM75.495 55.929H64.819l-.001 30.094c0 6.41.334 12.228-.727 14.15-.978 2.881-3.451 3.561-5.62 3.34-1.935-.387-3.874-1.961-4.762-3.565-.338-.612-.594-1.141-.752-1.506l-9.154 5.633c1.407 3.072 3.488 5.482 6.063 7.064 4.102 2.451 9.685 3.031 15.617 1.58 3.823-.981 7.312-3.244 9.394-6.547 2.842-4.48 2.572-10.006 2.561-16.171l.029-34.072z"})]}),React:()=>L.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"-11.5 -10.23174 23 20.46348",width:"34",height:"34",children:[L.jsx("title",{children:"React Logo"}),L.jsx("circle",{cx:"0",cy:"0",r:"2.05",fill:"#61DAFB"}),L.jsxs("g",{stroke:"#61DAFB",strokeWidth:"1",fill:"none",children:[L.jsx("ellipse",{rx:"11",ry:"4.2"}),L.jsx("ellipse",{rx:"11",ry:"4.2",transform:"rotate(60)"}),L.jsx("ellipse",{rx:"11",ry:"4.2",transform:"rotate(120)"})]})]}),"Node.js":()=>L.jsxs("svg",{viewBox:"0 0 128 128",width:"34",height:"34",children:[L.jsx("path",{fill:"#83CD29",d:"M112.771 30.334L68.781 4.996c-2.312-1.387-5.25-1.387-7.562 0L17.229 30.334c-2.312 1.355-3.781 3.824-3.781 6.542v50.25c0 2.719 1.469 5.188 3.781 6.542l43.99 25.021c2.312 1.355 5.25 1.355 7.562 0l43.99-25.021c2.312-1.354 3.781-3.823 3.781-6.542v-50.25c0-2.718-1.469-5.187-3.781-6.542z"}),L.jsx("path",{fill:"#404137",d:"M94.661 87.234c0 1.562-.906 2.968-2.312 3.666L64.981 106.5c-.594.312-1.281.468-1.969.468-.687 0-1.375-.156-2-.468L34.042 90.9c-1.406-.698-2.312-2.104-2.312-3.666V56.931c0-1.562.906-2.968 2.312-3.666l27.969-15.875c.594-.344 1.313-.531 2-.531s1.406.187 2 .531l27.969 15.875c1.406.698 2.312 2.104 2.312 3.666l-.631 30.303z"}),L.jsx("path",{fill:"#35BF5C",d:"M79.434 55.489l-14.453-8.271v16.543l14.453 8.271z"}),L.jsx("path",{fill:"#fff",d:"M48.566 55.489l14.415 8.272v16.543l-14.415-8.271z"}),L.jsx("path",{fill:"#83CD29",d:"M63.019 63.761l14.415-8.272-14.415-8.271-14.453 8.271z"})]}),"Express.js":()=>L.jsxs("svg",{viewBox:"0 0 128 128",width:"34",height:"34",children:[L.jsx("rect",{width:"128",height:"128",rx:"8",fill:"#1a1a1a"}),L.jsx("path",{fill:"#fff",d:"M126.67 98.44c-4.56 1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45C89 76 81.85 85.2 75.14 94.77c-2.4 3.42-4.92 4.91-9.4 3.7l26.92-36.13L67.6 29.71c4.31-.84 7.29-.41 10.21 3.45 6.06 8.07 12.58 15.78 19.23 24l18.87-27.17c4.22-1.15 7.41-.46 9.78 3.38L107 63l19.67 35.44zM1.33 61.74c.72-3.61 1.2-7.29 2.2-10.83 6-21.43 30.6-30.34 47.5-17.06C60.93 41.64 63.39 52.62 62.9 65H7.1c-.84 22.21 15.15 35.62 35.53 28.78 7.15-2.4 11.36-8 13.49-15 1-3.06 2.69-4 5.7-3.13-1.38 8.55-5.59 15.35-13.66 19.58-12.7 6.7-29.4 3.37-38.3-7.45-4.83-5.89-7.06-12.91-8.53-20.59-.08-.4-.44-.75-.68-1.12-.48-.48-.67-.86-.32-4.33zm5.9-2.54H57.8c-.41-16.25-10.95-26.87-25.43-26.54C17.42 32.94 7.03 43.51 7.23 59.2z"})]}),HTML:()=>L.jsxs("svg",{viewBox:"0 0 128 128",width:"34",height:"34",children:[L.jsx("path",{fill:"#E44D26",d:"M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"}),L.jsx("path",{fill:"#F16529",d:"M64 116.8l36.378-10.086 8.559-95.878H64z"}),L.jsx("path",{fill:"#EBEBEB",d:"M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"}),L.jsx("path",{fill:"#fff",d:"M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.336-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"})]}),CSS:()=>L.jsxs("svg",{viewBox:"0 0 128 128",width:"34",height:"34",children:[L.jsx("path",{fill:"#1572B6",d:"M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"}),L.jsx("path",{fill:"#33A9DC",d:"M64.001 117.062l36.559-10.136 8.601-96.354H64.001v106.49z"}),L.jsx("path",{fill:"#fff",d:"M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95V51.429z"}),L.jsx("path",{fill:"#EBEBEB",d:"M64.083 87.349l-.061.018-15.402-4.158-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018v-14.391z"}),L.jsx("path",{fill:"#fff",d:"M81.127 64.675l-1.666 18.522-15.426 4.164v14.391l28.354-7.858.208-2.337 2.406-26.882H81.127z"}),L.jsx("path",{fill:"#EBEBEB",d:"M64.048 23.435v13.831H30.64l-.277-3.108-.63-7.012-.331-3.711h34.646zm-.047 27.994H47.871l1.264 14.163h14.866V51.429z"})]}),MongoDB:()=>L.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 128 128",width:"34",height:"34",children:L.jsx("path",{fill:"#47A248",d:"M64.6 7c-.5 1.7-1.3 3.3-2.4 4.7-6.5 8.2-11.1 18-13.3 28.2-2.1 10.4-1.4 21.2 2 31.2 3.5 10.2 9.9 19.2 18.3 25.9.7-14.8 2.2-29.6 1.5-44.4-.3-7.2-1.5-14.3-3.6-21.2-1-3.3-2.3-6.6-2.5-10-.2-4.8 1.1-9.7 0-14.4z"})}),MySQL:()=>L.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 128 128",width:"34",height:"34",children:[L.jsx("path",{fill:"#00758F",d:"M23 80c9-25 26-42 48-42 18 0 30 12 34 31-7-11-17-17-29-17-18 0-33 11-45 28H23z"}),L.jsx("path",{fill:"#F29111",d:"M84 53c7 2 13 8 16 16-4-4-8-6-13-7-5-1-10 0-15 2 3-6 7-10 12-11z"})]}),"VS Code":()=>L.jsx(nS,{size:34,color:"#007ACC"}),GitHub:()=>L.jsx(eS,{size:34,color:"#ffffff"}),AWS:()=>L.jsxs("svg",{viewBox:"0 0 128 128",width:"34",height:"34",children:[L.jsx("path",{fill:"#FF9900",d:"M39.262 46.316c0 1.561.168 2.823.463 3.748.328.924.757 1.946 1.353 3.044.214.34.3.68.3.988 0 .432-.257.864-.804 1.296l-2.665 1.775c-.38.254-.761.38-1.107.38-.43 0-.86-.213-1.29-.607a13.295 13.295 0 0 1-1.548-2.02 33.267 33.267 0 0 1-1.328-2.533c-3.34 3.94-7.535 5.91-12.59 5.91-3.598 0-6.463-1.03-8.567-3.09-2.104-2.06-3.175-4.806-3.175-8.237 0-3.643 1.285-6.604 3.888-8.843 2.603-2.24 6.066-3.36 10.459-3.36 1.45 0 2.942.118 4.518.322 1.576.204 3.194.523 4.9.9v-3.11c0-3.233-.677-5.49-2.003-6.8-1.36-1.31-3.655-1.947-6.92-1.947-1.49 0-3.012.185-4.578.588-1.566.402-3.09.897-4.572 1.52-.685.307-1.195.481-1.49.558-.299.076-.52.118-.69.118-.601 0-.9-.432-.9-1.323V23.13c0-.685.085-1.197.296-1.5.213-.3.601-.6 1.197-.9 1.49-.771 3.285-1.416 5.389-1.946a26.208 26.208 0 0 1 6.755-.814c5.144 0 8.907 1.17 11.32 3.51 2.383 2.34 3.591 5.887 3.591 10.64v14.196zm-17.392 6.52c1.408 0 2.858-.254 4.395-.763 1.537-.51 2.899-1.435 4.055-2.695.685-.815 1.197-1.72 1.447-2.737.25-1.02.42-2.253.42-3.7v-1.78a36.003 36.003 0 0 0-3.917-.73 32.131 32.131 0 0 0-4.013-.254c-2.86 0-4.95.558-6.357 1.706-1.408 1.147-2.1 2.758-2.1 4.874 0 1.987.509 3.464 1.554 4.483 1.02 1.046 2.515 1.596 4.516 1.596zm34.19 4.609c-.76 0-1.27-.127-1.6-.407-.34-.254-.64-.855-.898-1.666L43.4 19.327c-.258-.847-.387-1.382-.387-1.664 0-.669.332-1.028.998-1.028h4.072c.806 0 1.333.127 1.63.407.343.254.601.855.857 1.664l8.695 34.28 8.08-34.28c.212-.847.47-1.41.81-1.664.34-.255.905-.407 1.68-.407h3.33c.804 0 1.332.127 1.673.407.338.254.637.855.847 1.664l8.183 34.71 8.951-34.71c.26-.847.518-1.41.858-1.664.34-.255.87-.407 1.63-.407h3.87c.665 0 1.025.334 1.025 1.028 0 .203-.04.407-.082.637-.04.226-.124.558-.295 1.027L97.419 55.47c-.257.848-.513 1.41-.854 1.665-.34.25-.867.405-1.622.405h-3.575c-.804 0-1.333-.127-1.675-.405-.337-.279-.636-.855-.845-1.697l-8.048-33.547-7.993 33.52c-.214.847-.51 1.414-.847 1.697-.338.278-.895.405-1.676.405h-3.572zm59.186 1.24c-2.19 0-4.386-.254-6.528-.787-2.147-.533-3.806-1.1-4.933-1.734-.685-.382-1.15-.805-1.32-1.199a3.026 3.026 0 0 1-.25-1.198v-2.01c0-.892.335-1.324.962-1.324.255 0 .51.042.764.128.256.085.638.254 1.047.424 1.42.636 2.98 1.143 4.617 1.487 1.675.343 3.313.514 4.992.514 2.66 0 4.73-.457 6.181-1.374 1.448-.916 2.188-2.236 2.188-3.93 0-1.16-.383-2.12-1.15-2.91-.764-.788-2.213-1.499-4.313-2.17l-6.196-1.92c-3.132-1-5.456-2.462-6.902-4.384-1.443-1.898-2.18-4.01-2.18-6.266 0-1.806.383-3.396 1.15-4.767.764-1.37 1.8-2.588 3.1-3.556 1.295-.997 2.77-1.73 4.478-2.24a18.854 18.854 0 0 1 5.565-.764c.976 0 1.993.052 2.977.178.98.13 1.886.306 2.787.51.857.215 1.672.465 2.448.718.775.25 1.384.51 1.82.762.601.345 1.042.69 1.294 1.069.253.35.38.814.38 1.37v1.86c0 .893-.336 1.35-.97 1.35-.34 0-.888-.172-1.594-.513-2.404-1.07-5.107-1.605-8.105-1.605-2.404 0-4.31.395-5.67 1.218-1.355.814-2.05 2.01-2.05 3.643 0 1.16.42 2.148 1.258 2.94.84.793 2.4 1.582 4.62 2.302l6.071 1.922c3.088.979 5.33 2.35 6.688 4.118 1.356 1.762 2.02 3.77 2.02 5.99 0 1.856-.383 3.523-1.108 4.97-.764 1.452-1.8 2.732-3.138 3.754-1.342 1.05-2.94 1.82-4.78 2.363a20.747 20.747 0 0 1-6.111.856z"}),L.jsx("path",{fill:"#FF9900",d:"M112.671 79.703c-13.559 10.013-33.256 15.334-50.188 15.334-23.747 0-45.14-8.763-61.308-23.34-1.27-1.149-.13-2.717 1.395-1.82C19.378 81.543 41.063 88.014 63.52 88.014c15.636 0 32.837-3.243 48.672-9.97 2.395-1.02 4.392 1.57 2.479 3.66zm5.772-6.588c-1.742-2.23-11.52-1.054-15.927-.53-1.334.165-1.541-1.002-.339-1.846 7.79-5.492 20.594-3.906 22.077-2.066 1.485 1.852-.388 14.69-7.708 20.814-1.12.947-2.196.442-1.7-.802 1.647-4.112 5.34-13.34 3.597-15.57z"})]}),DevOps:()=>L.jsx(tS,{size:34,color:"#0078D7"}),Postman:()=>L.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 128 128",width:"34",height:"34",children:[L.jsx("circle",{cx:"64",cy:"64",r:"56",fill:"#FF6C37"}),L.jsx("path",{fill:"#fff",d:"M86.5 41.5 56.7 71.3a8 8 0 1 1-5.7-5.7l29.8-29.8a4 4 0 1 1 5.7 5.7z"})]})},aS=[{cat:"Languages",color:"#818cf8",bg:"rgba(129,140,248,0.1)",border:"rgba(129,140,248,0.25)",items:["C++","JavaScript"]},{cat:"Technologies",color:"#34d399",bg:"rgba(52,211,153,0.1)",border:"rgba(52,211,153,0.25)",items:["HTML","CSS","React","Node.js","Express.js"]},{cat:"Database",color:"#fb923c",bg:"rgba(251,146,60,0.1)",border:"rgba(251,146,60,0.25)",items:["MongoDB","MySQL"]},{cat:"Tools",color:"#38bdf8",bg:"rgba(56,189,248,0.1)",border:"rgba(56,189,248,0.25)",items:["VS Code","GitHub","AWS","DevOps","Postman"]}];function rS({item:s,color:e,bg:i,border:r}){const[l,c]=bn.useState(!1),d=iS[s];return L.jsxs("div",{onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),style:{display:"flex",flexDirection:"column",alignItems:"center",gap:10,background:l?i:"rgba(255, 255, 255, 0.03)",border:`1px solid ${l?r:"rgba(255, 255, 255, 0.07)"}`,borderRadius:16,padding:"20px 16px",transition:"all 0.28s ease",transform:l?"translateY(-6px)":"none",boxShadow:l?`0 16px 40px ${e}22`:"none",cursor:"default",minWidth:90},children:[L.jsx("div",{style:{width:34,height:34,display:"flex",alignItems:"center",justifyContent:"center",filter:l?"none":"grayscale(20%) brightness(0.8)",transition:"filter 0.3s"},children:d?L.jsx(d,{}):L.jsx("span",{style:{fontSize:26},children:"💻"})}),L.jsx("span",{style:{color:l?"#fff":"rgba(255, 255, 255, 0.5)",fontSize:11,fontWeight:600,textAlign:"center",letterSpacing:"0.02em",transition:"color 0.25s",whiteSpace:"nowrap"},children:s})]})}function sS(){return L.jsxs("section",{id:"skills",style:{padding:"100px clamp(1rem, 5vw, 4rem)",maxWidth:1200,margin:"0 auto"},children:[L.jsx(wn,{children:L.jsx(Hr,{label:"Expertise",title:"Technical Skills"})}),L.jsx("div",{style:{display:"flex",flexDirection:"column",gap:40},children:aS.map((s,e)=>L.jsxs(wn,{delay:e*.08,children:[L.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:16},children:[L.jsx("div",{style:{width:3,height:22,borderRadius:4,background:s.color,flexShrink:0}}),L.jsx("span",{style:{color:s.color,fontSize:12,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase"},children:s.cat})]}),L.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:14},children:s.items.map((i,r)=>L.jsx(wn,{delay:e*.07+r*.06,children:L.jsx(rS,{item:i,color:s.color,bg:s.bg,border:s.border})},i))})]},s.cat))})]})}const oS=[{title:"Krishi Setu",subtitle:"Farmer-to-Consumer Marketplace",tags:["MERN","JWT","MongoDB","REST API"],color:"#22c55e",icon:"🌾",liveUrl:"https://krishi-setu-wine.vercel.app/",githubUrl:"https://github.com/abhishekyd300",bullets:["Full-stack F2C marketplace eliminating middlemen","RESTful APIs for auth, crop mgmt & order processing","JWT-based auth with role-based access control","Responsive dashboards for farmers & buyers"]},{title:"Smart CV",subtitle:"AI Resume Builder",tags:["MERN","GEMINI API","AI/LLM","PDF Export"],color:"#6366f1",icon:"🤖",liveUrl:"https://smartaicv.vercel.app/",githubUrl:"https://github.com/abhishekyd300",bullets:["AI-powered resume builder using GEMINI API","Dynamic content generation via AI prompts","PDF export/download for generated resumes","Template selection with live preview"]},{title:"ContestHub",subtitle:"Coding Contest & Assessment Platform",tags:["React","Node.js","Monaco Editor","AI Generation"],color:"#f59e0b",icon:"⚡",liveUrl:"https://contest-hub-mu.vercel.app/",githubUrl:"https://github.com/abhishekyd300/ContestHub",bullets:["Multi-language code editor supporting 15+ languages","Timed contests with real-time test execution","Live leaderboards and instant scoring system","Admin tools with AI-powered question generation"]}];function lS(){return L.jsxs("section",{id:"projects",style:{padding:"0 clamp(1rem, 5vw, 4rem) 100px",maxWidth:1200,margin:"0 auto"},children:[L.jsx(wn,{children:L.jsx(Hr,{label:"Portfolio",title:"Featured Projects",color:"#22d3ee"})}),L.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(340px, 1fr))",gap:24},children:oS.map((s,e)=>L.jsx(wn,{delay:e*.15,children:L.jsxs("div",{style:{background:"rgba(255, 255, 255, 0.04)",border:"1px solid rgba(255, 255, 255, 0.09)",borderRadius:24,padding:"36px 32px",height:"100%",boxSizing:"border-box",transition:"transform 0.35s, box-shadow 0.35s, border-color 0.35s",position:"relative",overflow:"hidden"},onMouseEnter:i=>{i.currentTarget.style.transform="translateY(-8px)",i.currentTarget.style.boxShadow=`0 30px 80px ${s.color}22`,i.currentTarget.style.borderColor=s.color+"55"},onMouseLeave:i=>{i.currentTarget.style.transform="none",i.currentTarget.style.boxShadow="none",i.currentTarget.style.borderColor="rgba(255, 255, 255, 0.09)"},children:[L.jsx("div",{style:{position:"absolute",top:-40,right:-40,width:160,height:160,borderRadius:"50%",background:`radial-gradient(circle, ${s.color}15 0%, transparent 70%)`,pointerEvents:"none"}}),L.jsx("div",{style:{fontSize:44,marginBottom:16},children:s.icon}),L.jsx("h3",{style:{fontFamily:"'Outfit', sans-serif",color:"#fff",fontSize:22,fontWeight:700,margin:"0 0 4px",letterSpacing:"-0.02em"},children:s.title}),L.jsx("p",{style:{color:s.color,fontSize:13,fontWeight:600,margin:"0 0 20px"},children:s.subtitle}),L.jsx("ul",{style:{padding:0,margin:"0 0 24px",listStyle:"none"},children:s.bullets.map((i,r)=>L.jsxs("li",{style:{display:"flex",gap:10,color:"rgba(255, 255, 255, 0.58)",fontSize:13.5,lineHeight:1.65,marginBottom:8},children:[L.jsx("span",{style:{color:s.color,flexShrink:0,marginTop:3},children:"▸"}),i]},r))}),L.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6,marginBottom:24},children:s.tags.map(i=>L.jsx("span",{style:{background:`${s.color}18`,border:`1px solid ${s.color}35`,color:s.color,borderRadius:6,padding:"4px 10px",fontSize:12,fontWeight:600},children:i},i))}),L.jsxs("div",{style:{display:"flex",gap:10,flexWrap:"wrap"},children:[L.jsxs("a",{href:s.liveUrl,target:"_blank",rel:"noreferrer",style:{flex:1,minWidth:110,display:"flex",alignItems:"center",justifyContent:"center",gap:7,background:s.color,color:"#000",textDecoration:"none",padding:"10px 16px",borderRadius:10,fontSize:13,fontWeight:700,letterSpacing:"0.01em",transition:"transform 0.2s, box-shadow 0.2s",boxShadow:`0 4px 20px ${s.color}40`},onMouseEnter:i=>{i.currentTarget.style.transform="translateY(-2px)",i.currentTarget.style.boxShadow=`0 8px 28px ${s.color}65`},onMouseLeave:i=>{i.currentTarget.style.transform="none",i.currentTarget.style.boxShadow=`0 4px 20px ${s.color}40`},children:[L.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[L.jsx("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),L.jsx("polyline",{points:"15 3 21 3 21 9"}),L.jsx("line",{x1:"10",y1:"14",x2:"21",y2:"3"})]}),"Live Demo"]}),L.jsxs("a",{href:s.githubUrl,target:"_blank",rel:"noreferrer",style:{flex:1,minWidth:110,display:"flex",alignItems:"center",justifyContent:"center",gap:7,background:"rgba(255, 255, 255, 0.07)",border:"1px solid rgba(255, 255, 255, 0.15)",color:"#fff",textDecoration:"none",padding:"10px 16px",borderRadius:10,fontSize:13,fontWeight:700,transition:"background 0.2s, border-color 0.2s, transform 0.2s"},onMouseEnter:i=>{i.currentTarget.style.background="rgba(255, 255, 255, 0.13)",i.currentTarget.style.borderColor="rgba(255, 255, 255, 0.28)",i.currentTarget.style.transform="translateY(-2px)"},onMouseLeave:i=>{i.currentTarget.style.background="rgba(255, 255, 255, 0.07)",i.currentTarget.style.borderColor="rgba(255, 255, 255, 0.15)",i.currentTarget.style.transform="none"},children:[L.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"currentColor",children:L.jsx("path",{d:"M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"})}),"GitHub"]})]})]})},s.title))})]})}function cS({cert:s}){const[e,i]=bn.useState(!1),[r,l]=bn.useState(!1),c=s.badge&&!r?s.badge:null;return L.jsxs("div",{onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),style:{background:e?"rgba(255, 255, 255, 0.055)":"rgba(255, 255, 255, 0.03)",border:`1px solid ${e?s.color+"50":"rgba(255, 255, 255, 0.08)"}`,borderRadius:20,padding:"0",overflow:"hidden",transition:"all 0.32s ease",transform:e?"translateY(-6px)":"none",boxShadow:e?`0 20px 56px ${s.glow}`:"none",display:"flex",flexDirection:"column"},children:[L.jsx("div",{style:{position:"relative",width:"100%",paddingBottom:"65%",background:c?"rgba(0, 0, 0, 0.3)":`linear-gradient(135deg, ${s.color}12, rgba(255, 255, 255, 0.03))`,overflow:"hidden",flexShrink:0},children:c?L.jsx("img",{src:c,alt:s.name,onError:()=>l(!0),style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"contain",padding:"16px"}}):L.jsx("div",{style:{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:L.jsx("span",{style:{fontSize:42},children:s.fallback})})}),L.jsxs("div",{style:{padding:"18px 20px 20px"},children:[L.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:8},children:[L.jsx("span",{style:{background:`${s.color}20`,color:s.color,fontSize:10,fontWeight:800,padding:"2px 10px",borderRadius:5,letterSpacing:"0.07em"},children:s.tag}),L.jsx("div",{style:{width:7,height:7,borderRadius:"50%",background:s.color,boxShadow:e?`0 0 10px ${s.color}`:"none",transition:"box-shadow 0.3s"}})]}),L.jsx("p",{style:{color:e?"#fff":"rgba(255, 255, 255, 0.82)",fontSize:14,fontWeight:700,lineHeight:1.35,margin:"0 0 4px",transition:"color 0.25s",fontFamily:"'Outfit', sans-serif"},children:s.name}),L.jsx("p",{style:{color:"rgba(255, 255, 255, 0.32)",fontSize:12,margin:0},children:s.issuer})]})]})}const uS=[{value:"300+",label:"DSA Problems Solved",icon:"⚡"},{value:"63",label:"Day LeetCode Streak",icon:"🔥"},{value:"100",label:"Days Badge Earned",icon:"🏅"},{value:"7.85",label:"CGPA at Parul University",icon:"🎓"}],fS=[{id:1,name:"AWS Certified Cloud Practitioner",issuer:"Amazon Web Services",tag:"AWS",badge:"/aws-practitioner.png",fallback:"☁️",color:"#FF9900",glow:"rgba(255,153,0,0.25)"},{id:2,name:"AWS Cloud Foundation",issuer:"Amazon Web Services",tag:"AWS",badge:"/aws-cloud-foundation.png",fallback:"🏗️",color:"#FF9900",glow:"rgba(255,153,0,0.25)"},{id:3,name:"AI Intelligence Fundamentals",issuer:"AI Certification Body",tag:"AI",badge:"/aifundamentals.png",fallback:"🧠",color:"#60a5fa",glow:"rgba(96,165,250,0.25)"},{id:4,name:"Computer Networking",issuer:"NPTEL",tag:"NPTEL",badge:"/computer-network.png",fallback:"🌐",color:"#a78bfa",glow:"rgba(167,139,250,0.25)"}];function dS(){return L.jsx("section",{id:"achievements",style:{padding:"0 clamp(1rem, 5vw, 4rem) 100px"},children:L.jsxs("div",{style:{maxWidth:1200,margin:"0 auto"},children:[L.jsx(wn,{children:L.jsx(Hr,{label:"Track Record",title:"Achievements",color:"#f59e0b"})}),L.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(160px, 1fr))",gap:18,marginBottom:80},children:uS.map((s,e)=>L.jsx(wn,{delay:e*.1,children:L.jsxs("div",{style:{background:"rgba(245, 158, 11, 0.06)",border:"1px solid rgba(245, 158, 11, 0.18)",borderRadius:20,padding:"30px 16px",textAlign:"center",transition:"transform 0.3s, box-shadow 0.3s"},onMouseEnter:i=>{i.currentTarget.style.transform="translateY(-5px)",i.currentTarget.style.boxShadow="0 20px 50px rgba(245, 158, 11, 0.15)"},onMouseLeave:i=>{i.currentTarget.style.transform="none",i.currentTarget.style.boxShadow="none"},children:[L.jsx("div",{style:{fontSize:28,marginBottom:10},children:s.icon}),L.jsx("div",{style:{fontFamily:"'Outfit', sans-serif",fontSize:36,fontWeight:800,color:"#fbbf24",letterSpacing:"-0.04em"},children:s.value}),L.jsx("div",{style:{color:"rgba(255, 255, 255, 0.42)",fontSize:12,marginTop:5,lineHeight:1.4},children:s.label})]})},s.label))}),L.jsx(wn,{children:L.jsxs("div",{style:{textAlign:"center",marginBottom:40},children:[L.jsx("span",{style:{color:"#a78bfa",fontSize:12,letterSpacing:"0.14em",textTransform:"uppercase",fontWeight:700},children:"Credentials"}),L.jsx("h3",{style:{fontFamily:"'Outfit', sans-serif",color:"#fff",fontSize:28,fontWeight:800,margin:"8px 0 4px",letterSpacing:"-0.02em"},children:"Certifications"}),L.jsx("p",{style:{color:"rgba(255, 255, 255, 0.35)",fontSize:13},children:"My professional credentials and certifications"})]})}),L.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(240px, 1fr))",gap:20},children:fS.map((s,e)=>L.jsx(wn,{delay:e*.09,children:L.jsx(cS,{cert:s})},s.id))})]})})}function hS(){const s=[{label:"abhishekyd300@gmail.com",href:"mailto:abhishekyd300@gmail.com",icon:"📧"},{label:"linkedin.com/in/abhishek-yadav-6207ab364",href:"https://linkedin.com/in/abhishek-yadav-6207ab364/",icon:"💼"},{label:"github.com/abhishekyd300",href:"https://github.com/abhishekyd300",icon:"🐙"}];return L.jsx("section",{id:"contact",style:{padding:"0 clamp(1rem, 5vw, 4rem) 120px",maxWidth:680,margin:"0 auto",textAlign:"center"},children:L.jsxs(wn,{children:[L.jsx(Hr,{label:"Let's Connect",title:"Get In Touch"}),L.jsx("p",{style:{color:"rgba(255, 255, 255, 0.42)",fontSize:15,lineHeight:1.9,marginBottom:44,marginTop:-28},children:"Actively looking for internship and full-time opportunities. Whether you have a role, a project, or just want to say hi — my inbox is always open."}),L.jsx("div",{style:{display:"flex",flexDirection:"column",gap:14,alignItems:"center"},children:s.map(e=>L.jsxs("a",{href:e.href,target:"_blank",rel:"noreferrer",style:{display:"flex",alignItems:"center",gap:14,background:"rgba(255, 255, 255, 0.04)",border:"1px solid rgba(255, 255, 255, 0.09)",borderRadius:14,padding:"13px 22px",color:"rgba(255, 255, 255, 0.62)",textDecoration:"none",fontSize:14,fontWeight:500,width:"100%",maxWidth:440,transition:"all 0.25s"},onMouseEnter:i=>{i.currentTarget.style.background="rgba(167, 139, 250, 0.09)",i.currentTarget.style.borderColor="rgba(167, 139, 250, 0.3)",i.currentTarget.style.color="#fff",i.currentTarget.style.transform="translateY(-2px)"},onMouseLeave:i=>{i.currentTarget.style.background="rgba(255, 255, 255, 0.04)",i.currentTarget.style.borderColor="rgba(255, 255, 255, 0.09)",i.currentTarget.style.color="rgba(255, 255, 255, 0.62)",i.currentTarget.style.transform="none"},children:[L.jsx("span",{style:{fontSize:20},children:e.icon}),L.jsx("span",{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:e.label})]},e.href))})]})})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zh="185",pS=0,Gg=1,mS=2,Nc=1,gS=2,ko=3,or=0,Yn=1,_a=2,xa=0,Os=1,Vd=2,Vg=3,kg=4,_S=5,Nr=100,vS=101,xS=102,SS=103,yS=104,MS=200,bS=201,ES=202,TS=203,kd=204,Xd=205,AS=206,RS=207,CS=208,wS=209,DS=210,US=211,LS=212,NS=213,OS=214,Wd=0,qd=1,Yd=2,Is=3,jd=4,Zd=5,Kd=6,Qd=7,k_=0,PS=1,zS=2,ki=0,X_=1,W_=2,q_=3,Y_=4,j_=5,Z_=6,K_=7,Q_=300,Ir=301,Bs=302,cd=303,ud=304,jc=306,Jd=1e3,va=1001,$d=1002,Dn=1003,IS=1004,lc=1005,Pn=1006,fd=1007,Pr=1008,xi=1009,J_=1010,$_=1011,Wo=1012,Ih=1013,Wi=1014,Gi=1015,Ma=1016,Bh=1017,Fh=1018,qo=1020,ev=35902,tv=35899,nv=1021,iv=1022,Di=1023,ba=1026,zr=1027,av=1028,Hh=1029,Br=1030,Gh=1031,Vh=1033,Oc=33776,Pc=33777,zc=33778,Ic=33779,eh=35840,th=35841,nh=35842,ih=35843,ah=36196,rh=37492,sh=37496,oh=37488,lh=37489,Gc=37490,ch=37491,uh=37808,fh=37809,dh=37810,hh=37811,ph=37812,mh=37813,gh=37814,_h=37815,vh=37816,xh=37817,Sh=37818,yh=37819,Mh=37820,bh=37821,Eh=36492,Th=36494,Ah=36495,Rh=36283,Ch=36284,Vc=36285,wh=36286,BS=3200,Xg=0,FS=1,ar="",_i="srgb",kc="srgb-linear",Xc="linear",It="srgb",Ss=7680,Wg=519,HS=512,GS=513,VS=514,kh=515,kS=516,XS=517,Xh=518,WS=519,qg=35044,Yg="300 es",Vi=2e3,Wc=2001;function qS(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function qc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function YS(){const s=qc("canvas");return s.style.display="block",s}const jg={};function Zg(...s){const e="THREE."+s.shift();console.log(e,...s)}function rv(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=s[1];i&&i.isStackTrace?s[0]+=" "+i.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function nt(...s){s=rv(s);const e="THREE."+s.shift();{const i=s[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...s)}}function Mt(...s){s=rv(s);const e="THREE."+s.shift();{const i=s[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...s)}}function Ps(...s){const e=s.join(" ");e in jg||(jg[e]=!0,nt(...s))}function jS(s,e,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const ZS={[Wd]:qd,[Yd]:Kd,[jd]:Qd,[Is]:Zd,[qd]:Wd,[Kd]:Yd,[Qd]:jd,[Zd]:Is};class Gr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,e);e.target=null}}}const Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],dd=Math.PI/180,Dh=180/Math.PI;function Yo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Nn[s&255]+Nn[s>>8&255]+Nn[s>>16&255]+Nn[s>>24&255]+"-"+Nn[e&255]+Nn[e>>8&255]+"-"+Nn[e>>16&15|64]+Nn[e>>24&255]+"-"+Nn[i&63|128]+Nn[i>>8&255]+"-"+Nn[i>>16&255]+Nn[i>>24&255]+Nn[r&255]+Nn[r>>8&255]+Nn[r>>16&255]+Nn[r>>24&255]).toLowerCase()}function yt(s,e,i){return Math.max(e,Math.min(i,s))}function KS(s,e){return(s%e+e)%e}function hd(s,e,i){return(1-i)*s+i*e}function zo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function qn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const qh=class qh{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=yt(this.x,e.x,i.x),this.y=yt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=yt(this.x,e,i),this.y=yt(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(yt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(yt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-e.x,d=this.y-e.y;return this.x=c*r-d*l+e.x,this.y=c*l+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};qh.prototype.isVector2=!0;let wt=qh;class Gs{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,c,d,p){let m=r[l+0],h=r[l+1],S=r[l+2],x=r[l+3],_=c[d+0],b=c[d+1],A=c[d+2],D=c[d+3];if(x!==D||m!==_||h!==b||S!==A){let M=m*_+h*b+S*A+x*D;M<0&&(_=-_,b=-b,A=-A,D=-D,M=-M);let v=1-p;if(M<.9995){const H=Math.acos(M),G=Math.sin(H);v=Math.sin(v*H)/G,p=Math.sin(p*H)/G,m=m*v+_*p,h=h*v+b*p,S=S*v+A*p,x=x*v+D*p}else{m=m*v+_*p,h=h*v+b*p,S=S*v+A*p,x=x*v+D*p;const H=1/Math.sqrt(m*m+h*h+S*S+x*x);m*=H,h*=H,S*=H,x*=H}}e[i]=m,e[i+1]=h,e[i+2]=S,e[i+3]=x}static multiplyQuaternionsFlat(e,i,r,l,c,d){const p=r[l],m=r[l+1],h=r[l+2],S=r[l+3],x=c[d],_=c[d+1],b=c[d+2],A=c[d+3];return e[i]=p*A+S*x+m*b-h*_,e[i+1]=m*A+S*_+h*x-p*b,e[i+2]=h*A+S*b+p*_-m*x,e[i+3]=S*A-p*x-m*_-h*b,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,c=e._z,d=e._order,p=Math.cos,m=Math.sin,h=p(r/2),S=p(l/2),x=p(c/2),_=m(r/2),b=m(l/2),A=m(c/2);switch(d){case"XYZ":this._x=_*S*x+h*b*A,this._y=h*b*x-_*S*A,this._z=h*S*A+_*b*x,this._w=h*S*x-_*b*A;break;case"YXZ":this._x=_*S*x+h*b*A,this._y=h*b*x-_*S*A,this._z=h*S*A-_*b*x,this._w=h*S*x+_*b*A;break;case"ZXY":this._x=_*S*x-h*b*A,this._y=h*b*x+_*S*A,this._z=h*S*A+_*b*x,this._w=h*S*x-_*b*A;break;case"ZYX":this._x=_*S*x-h*b*A,this._y=h*b*x+_*S*A,this._z=h*S*A-_*b*x,this._w=h*S*x+_*b*A;break;case"YZX":this._x=_*S*x+h*b*A,this._y=h*b*x+_*S*A,this._z=h*S*A-_*b*x,this._w=h*S*x-_*b*A;break;case"XZY":this._x=_*S*x-h*b*A,this._y=h*b*x-_*S*A,this._z=h*S*A+_*b*x,this._w=h*S*x+_*b*A;break;default:nt("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],c=i[8],d=i[1],p=i[5],m=i[9],h=i[2],S=i[6],x=i[10],_=r+p+x;if(_>0){const b=.5/Math.sqrt(_+1);this._w=.25/b,this._x=(S-m)*b,this._y=(c-h)*b,this._z=(d-l)*b}else if(r>p&&r>x){const b=2*Math.sqrt(1+r-p-x);this._w=(S-m)/b,this._x=.25*b,this._y=(l+d)/b,this._z=(c+h)/b}else if(p>x){const b=2*Math.sqrt(1+p-r-x);this._w=(c-h)/b,this._x=(l+d)/b,this._y=.25*b,this._z=(m+S)/b}else{const b=2*Math.sqrt(1+x-r-p);this._w=(d-l)/b,this._x=(c+h)/b,this._y=(m+S)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,c=e._z,d=e._w,p=i._x,m=i._y,h=i._z,S=i._w;return this._x=r*S+d*p+l*h-c*m,this._y=l*S+d*m+c*p-r*h,this._z=c*S+d*h+r*m-l*p,this._w=d*S-r*p-l*m-c*h,this._onChangeCallback(),this}slerp(e,i){let r=e._x,l=e._y,c=e._z,d=e._w,p=this.dot(e);p<0&&(r=-r,l=-l,c=-c,d=-d,p=-p);let m=1-i;if(p<.9995){const h=Math.acos(p),S=Math.sin(h);m=Math.sin(m*h)/S,i=Math.sin(i*h)/S,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Yh=class Yh{constructor(e=0,i=0,r=0){this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Kg.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Kg.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=e.elements,d=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*d,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,c=e.x,d=e.y,p=e.z,m=e.w,h=2*(d*l-p*r),S=2*(p*i-c*l),x=2*(c*r-d*i);return this.x=i+m*h+d*x-p*S,this.y=r+m*S+p*h-c*x,this.z=l+m*x+c*S-d*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=yt(this.x,e.x,i.x),this.y=yt(this.y,e.y,i.y),this.z=yt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=yt(this.x,e,i),this.y=yt(this.y,e,i),this.z=yt(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(yt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,c=e.z,d=i.x,p=i.y,m=i.z;return this.x=l*m-c*p,this.y=c*d-r*m,this.z=r*p-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return pd.copy(this).projectOnVector(e),this.sub(pd)}reflect(e){return this.sub(pd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(yt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Yh.prototype.isVector3=!0;let le=Yh;const pd=new le,Kg=new Gs,jh=class jh{constructor(e,i,r,l,c,d,p,m,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,d,p,m,h)}set(e,i,r,l,c,d,p,m,h){const S=this.elements;return S[0]=e,S[1]=l,S[2]=p,S[3]=i,S[4]=c,S[5]=m,S[6]=r,S[7]=d,S[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,d=r[0],p=r[3],m=r[6],h=r[1],S=r[4],x=r[7],_=r[2],b=r[5],A=r[8],D=l[0],M=l[3],v=l[6],H=l[1],G=l[4],C=l[7],I=l[2],N=l[5],P=l[8];return c[0]=d*D+p*H+m*I,c[3]=d*M+p*G+m*N,c[6]=d*v+p*C+m*P,c[1]=h*D+S*H+x*I,c[4]=h*M+S*G+x*N,c[7]=h*v+S*C+x*P,c[2]=_*D+b*H+A*I,c[5]=_*M+b*G+A*N,c[8]=_*v+b*C+A*P,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],d=e[4],p=e[5],m=e[6],h=e[7],S=e[8];return i*d*S-i*p*h-r*c*S+r*p*m+l*c*h-l*d*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],d=e[4],p=e[5],m=e[6],h=e[7],S=e[8],x=S*d-p*h,_=p*m-S*c,b=h*c-d*m,A=i*x+r*_+l*b;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const D=1/A;return e[0]=x*D,e[1]=(l*h-S*r)*D,e[2]=(p*r-l*d)*D,e[3]=_*D,e[4]=(S*i-l*m)*D,e[5]=(l*c-p*i)*D,e[6]=b*D,e[7]=(r*m-h*i)*D,e[8]=(d*i-r*c)*D,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,c,d,p){const m=Math.cos(c),h=Math.sin(c);return this.set(r*m,r*h,-r*(m*d+h*p)+d+e,-l*h,l*m,-l*(-h*d+m*p)+p+i,0,0,1),this}scale(e,i){return Ps("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(md.makeScale(e,i)),this}rotate(e){return Ps("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(md.makeRotation(-e)),this}translate(e,i){return Ps("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(md.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};jh.prototype.isMatrix3=!0;let rt=jh;const md=new rt,Qg=new rt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jg=new rt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function QS(){const s={enabled:!0,workingColorSpace:kc,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===It&&(l.r=Sa(l.r),l.g=Sa(l.g),l.b=Sa(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===It&&(l.r=zs(l.r),l.g=zs(l.g),l.b=zs(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ar?Xc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Ps("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Ps("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[kc]:{primaries:e,whitePoint:r,transfer:Xc,toXYZ:Qg,fromXYZ:Jg,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:_i},outputColorSpaceConfig:{drawingBufferColorSpace:_i}},[_i]:{primaries:e,whitePoint:r,transfer:It,toXYZ:Qg,fromXYZ:Jg,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:_i}}}),s}const St=QS();function Sa(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function zs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ys;class JS{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{ys===void 0&&(ys=qc("canvas")),ys.width=e.width,ys.height=e.height;const l=ys.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=ys}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=qc("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=Sa(c[d]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Sa(i[r]/255)*255):i[r]=Sa(i[r]);return{data:i,width:e.width,height:e.height}}else return nt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let $S=0;class Wh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$S++}),this.uuid=Yo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,p=l.length;d<p;d++)l[d].isDataTexture?c.push(gd(l[d].image)):c.push(gd(l[d]))}else c=gd(l);r.url=c}return i||(e.images[this.uuid]=r),r}}function gd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?JS.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(nt("Texture: Unable to serialize Texture."),{})}let ey=0;const _d=new le;class Bn extends Gr{constructor(e=Bn.DEFAULT_IMAGE,i=Bn.DEFAULT_MAPPING,r=va,l=va,c=Pn,d=Pr,p=Di,m=xi,h=Bn.DEFAULT_ANISOTROPY,S=ar){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ey++}),this.uuid=Yo(),this.name="",this.source=new Wh(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=h,this.format=p,this.internalFormat=null,this.type=m,this.offset=new wt(0,0),this.repeat=new wt(1,1),this.center=new wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=S,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(_d).x}get height(){return this.source.getSize(_d).y}get depth(){return this.source.getSize(_d).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){nt(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){nt(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Q_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Jd:e.x=e.x-Math.floor(e.x);break;case va:e.x=e.x<0?0:1;break;case $d:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Jd:e.y=e.y-Math.floor(e.y);break;case va:e.y=e.y<0?0:1;break;case $d:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bn.DEFAULT_IMAGE=null;Bn.DEFAULT_MAPPING=Q_;Bn.DEFAULT_ANISOTROPY=1;const Zh=class Zh{constructor(e=0,i=0,r=0,l=1){this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=this.w,d=e.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,c;const m=e.elements,h=m[0],S=m[4],x=m[8],_=m[1],b=m[5],A=m[9],D=m[2],M=m[6],v=m[10];if(Math.abs(S-_)<.01&&Math.abs(x-D)<.01&&Math.abs(A-M)<.01){if(Math.abs(S+_)<.1&&Math.abs(x+D)<.1&&Math.abs(A+M)<.1&&Math.abs(h+b+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const G=(h+1)/2,C=(b+1)/2,I=(v+1)/2,N=(S+_)/4,P=(x+D)/4,E=(A+M)/4;return G>C&&G>I?G<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(G),l=N/r,c=P/r):C>I?C<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(C),r=N/l,c=E/l):I<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(I),r=P/c,l=E/c),this.set(r,l,c,i),this}let H=Math.sqrt((M-A)*(M-A)+(x-D)*(x-D)+(_-S)*(_-S));return Math.abs(H)<.001&&(H=1),this.x=(M-A)/H,this.y=(x-D)/H,this.z=(_-S)/H,this.w=Math.acos((h+b+v-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=yt(this.x,e.x,i.x),this.y=yt(this.y,e.y,i.y),this.z=yt(this.z,e.z,i.z),this.w=yt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=yt(this.x,e,i),this.y=yt(this.y,e,i),this.z=yt(this.z,e,i),this.w=yt(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(yt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Zh.prototype.isVector4=!0;let rn=Zh;class ty extends Gr{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new rn(0,0,e,i),this.scissorTest=!1,this.viewport=new rn(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:r.depth},c=new Bn(l),d=r.count;for(let p=0;p<d;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:Pn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Wh(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xi extends ty{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class sv extends Bn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=va,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ny extends Bn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=va,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Yc=class Yc{constructor(e,i,r,l,c,d,p,m,h,S,x,_,b,A,D,M){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,d,p,m,h,S,x,_,b,A,D,M)}set(e,i,r,l,c,d,p,m,h,S,x,_,b,A,D,M){const v=this.elements;return v[0]=e,v[4]=i,v[8]=r,v[12]=l,v[1]=c,v[5]=d,v[9]=p,v[13]=m,v[2]=h,v[6]=S,v[10]=x,v[14]=_,v[3]=b,v[7]=A,v[11]=D,v[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Yc().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,r=e.elements,l=1/Ms.setFromMatrixColumn(e,0).length(),c=1/Ms.setFromMatrixColumn(e,1).length(),d=1/Ms.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,c=e.z,d=Math.cos(r),p=Math.sin(r),m=Math.cos(l),h=Math.sin(l),S=Math.cos(c),x=Math.sin(c);if(e.order==="XYZ"){const _=d*S,b=d*x,A=p*S,D=p*x;i[0]=m*S,i[4]=-m*x,i[8]=h,i[1]=b+A*h,i[5]=_-D*h,i[9]=-p*m,i[2]=D-_*h,i[6]=A+b*h,i[10]=d*m}else if(e.order==="YXZ"){const _=m*S,b=m*x,A=h*S,D=h*x;i[0]=_+D*p,i[4]=A*p-b,i[8]=d*h,i[1]=d*x,i[5]=d*S,i[9]=-p,i[2]=b*p-A,i[6]=D+_*p,i[10]=d*m}else if(e.order==="ZXY"){const _=m*S,b=m*x,A=h*S,D=h*x;i[0]=_-D*p,i[4]=-d*x,i[8]=A+b*p,i[1]=b+A*p,i[5]=d*S,i[9]=D-_*p,i[2]=-d*h,i[6]=p,i[10]=d*m}else if(e.order==="ZYX"){const _=d*S,b=d*x,A=p*S,D=p*x;i[0]=m*S,i[4]=A*h-b,i[8]=_*h+D,i[1]=m*x,i[5]=D*h+_,i[9]=b*h-A,i[2]=-h,i[6]=p*m,i[10]=d*m}else if(e.order==="YZX"){const _=d*m,b=d*h,A=p*m,D=p*h;i[0]=m*S,i[4]=D-_*x,i[8]=A*x+b,i[1]=x,i[5]=d*S,i[9]=-p*S,i[2]=-h*S,i[6]=b*x+A,i[10]=_-D*x}else if(e.order==="XZY"){const _=d*m,b=d*h,A=p*m,D=p*h;i[0]=m*S,i[4]=-x,i[8]=h*S,i[1]=_*x+D,i[5]=d*S,i[9]=b*x-A,i[2]=A*x-b,i[6]=p*S,i[10]=D*x+_}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(iy,e,ay)}lookAt(e,i,r){const l=this.elements;return si.subVectors(e,i),si.lengthSq()===0&&(si.z=1),si.normalize(),Ja.crossVectors(r,si),Ja.lengthSq()===0&&(Math.abs(r.z)===1?si.x+=1e-4:si.z+=1e-4,si.normalize(),Ja.crossVectors(r,si)),Ja.normalize(),cc.crossVectors(si,Ja),l[0]=Ja.x,l[4]=cc.x,l[8]=si.x,l[1]=Ja.y,l[5]=cc.y,l[9]=si.y,l[2]=Ja.z,l[6]=cc.z,l[10]=si.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,d=r[0],p=r[4],m=r[8],h=r[12],S=r[1],x=r[5],_=r[9],b=r[13],A=r[2],D=r[6],M=r[10],v=r[14],H=r[3],G=r[7],C=r[11],I=r[15],N=l[0],P=l[4],E=l[8],O=l[12],Y=l[1],k=l[5],Q=l[9],he=l[13],ve=l[2],J=l[6],z=l[10],F=l[14],te=l[3],ge=l[7],Ee=l[11],U=l[15];return c[0]=d*N+p*Y+m*ve+h*te,c[4]=d*P+p*k+m*J+h*ge,c[8]=d*E+p*Q+m*z+h*Ee,c[12]=d*O+p*he+m*F+h*U,c[1]=S*N+x*Y+_*ve+b*te,c[5]=S*P+x*k+_*J+b*ge,c[9]=S*E+x*Q+_*z+b*Ee,c[13]=S*O+x*he+_*F+b*U,c[2]=A*N+D*Y+M*ve+v*te,c[6]=A*P+D*k+M*J+v*ge,c[10]=A*E+D*Q+M*z+v*Ee,c[14]=A*O+D*he+M*F+v*U,c[3]=H*N+G*Y+C*ve+I*te,c[7]=H*P+G*k+C*J+I*ge,c[11]=H*E+G*Q+C*z+I*Ee,c[15]=H*O+G*he+C*F+I*U,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[12],d=e[1],p=e[5],m=e[9],h=e[13],S=e[2],x=e[6],_=e[10],b=e[14],A=e[3],D=e[7],M=e[11],v=e[15],H=m*b-h*_,G=p*b-h*x,C=p*_-m*x,I=d*b-h*S,N=d*_-m*S,P=d*x-p*S;return i*(D*H-M*G+v*C)-r*(A*H-M*I+v*N)+l*(A*G-D*I+v*P)-c*(A*C-D*N+M*P)}determinantAffine(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[1],d=e[5],p=e[9],m=e[2],h=e[6],S=e[10];return i*(d*S-p*h)-r*(c*S-p*m)+l*(c*h-d*m)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],d=e[4],p=e[5],m=e[6],h=e[7],S=e[8],x=e[9],_=e[10],b=e[11],A=e[12],D=e[13],M=e[14],v=e[15],H=i*p-r*d,G=i*m-l*d,C=i*h-c*d,I=r*m-l*p,N=r*h-c*p,P=l*h-c*m,E=S*D-x*A,O=S*M-_*A,Y=S*v-b*A,k=x*M-_*D,Q=x*v-b*D,he=_*v-b*M,ve=H*he-G*Q+C*k+I*Y-N*O+P*E;if(ve===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const J=1/ve;return e[0]=(p*he-m*Q+h*k)*J,e[1]=(l*Q-r*he-c*k)*J,e[2]=(D*P-M*N+v*I)*J,e[3]=(_*N-x*P-b*I)*J,e[4]=(m*Y-d*he-h*O)*J,e[5]=(i*he-l*Y+c*O)*J,e[6]=(M*C-A*P-v*G)*J,e[7]=(S*P-_*C+b*G)*J,e[8]=(d*Q-p*Y+h*E)*J,e[9]=(r*Y-i*Q-c*E)*J,e[10]=(A*N-D*C+v*H)*J,e[11]=(x*C-S*N-b*H)*J,e[12]=(p*O-d*k-m*E)*J,e[13]=(i*k-r*O+l*E)*J,e[14]=(D*G-A*I-M*H)*J,e[15]=(S*I-x*G+_*H)*J,this}scale(e){const i=this.elements,r=e.x,l=e.y,c=e.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,d=e.x,p=e.y,m=e.z,h=c*d,S=c*p;return this.set(h*d+r,h*p-l*m,h*m+l*p,0,h*p+l*m,S*p+r,S*m-l*d,0,h*m-l*p,S*m+l*d,c*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,c,d){return this.set(1,r,c,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,c=i._x,d=i._y,p=i._z,m=i._w,h=c+c,S=d+d,x=p+p,_=c*h,b=c*S,A=c*x,D=d*S,M=d*x,v=p*x,H=m*h,G=m*S,C=m*x,I=r.x,N=r.y,P=r.z;return l[0]=(1-(D+v))*I,l[1]=(b+C)*I,l[2]=(A-G)*I,l[3]=0,l[4]=(b-C)*N,l[5]=(1-(_+v))*N,l[6]=(M+H)*N,l[7]=0,l[8]=(A+G)*P,l[9]=(M-H)*P,l[10]=(1-(_+D))*P,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinantAffine();if(c===0)return r.set(1,1,1),i.identity(),this;let d=Ms.set(l[0],l[1],l[2]).length();const p=Ms.set(l[4],l[5],l[6]).length(),m=Ms.set(l[8],l[9],l[10]).length();c<0&&(d=-d),Ai.copy(this);const h=1/d,S=1/p,x=1/m;return Ai.elements[0]*=h,Ai.elements[1]*=h,Ai.elements[2]*=h,Ai.elements[4]*=S,Ai.elements[5]*=S,Ai.elements[6]*=S,Ai.elements[8]*=x,Ai.elements[9]*=x,Ai.elements[10]*=x,i.setFromRotationMatrix(Ai),r.x=d,r.y=p,r.z=m,this}makePerspective(e,i,r,l,c,d,p=Vi,m=!1){const h=this.elements,S=2*c/(i-e),x=2*c/(r-l),_=(i+e)/(i-e),b=(r+l)/(r-l);let A,D;if(m)A=c/(d-c),D=d*c/(d-c);else if(p===Vi)A=-(d+c)/(d-c),D=-2*d*c/(d-c);else if(p===Wc)A=-d/(d-c),D=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return h[0]=S,h[4]=0,h[8]=_,h[12]=0,h[1]=0,h[5]=x,h[9]=b,h[13]=0,h[2]=0,h[6]=0,h[10]=A,h[14]=D,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,i,r,l,c,d,p=Vi,m=!1){const h=this.elements,S=2/(i-e),x=2/(r-l),_=-(i+e)/(i-e),b=-(r+l)/(r-l);let A,D;if(m)A=1/(d-c),D=d/(d-c);else if(p===Vi)A=-2/(d-c),D=-(d+c)/(d-c);else if(p===Wc)A=-1/(d-c),D=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return h[0]=S,h[4]=0,h[8]=0,h[12]=_,h[1]=0,h[5]=x,h[9]=0,h[13]=b,h[2]=0,h[6]=0,h[10]=A,h[14]=D,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}};Yc.prototype.isMatrix4=!0;let cn=Yc;const Ms=new le,Ai=new cn,iy=new le(0,0,0),ay=new le(1,1,1),Ja=new le,cc=new le,si=new le,$g=new cn,e_=new Gs;class Fr{constructor(e=0,i=0,r=0,l=Fr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,c=l[0],d=l[4],p=l[8],m=l[1],h=l[5],S=l[9],x=l[2],_=l[6],b=l[10];switch(i){case"XYZ":this._y=Math.asin(yt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-S,b),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(_,h),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(p,b),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(yt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-x,b),this._z=Math.atan2(-d,h)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-yt(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(_,b),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-d,h));break;case"YZX":this._z=Math.asin(yt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-S,h),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(p,b));break;case"XZY":this._z=Math.asin(-yt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(_,h),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-S,b),this._y=0);break;default:nt("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return $g.makeRotationFromQuaternion(e),this.setFromRotationMatrix($g,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return e_.setFromEuler(this),this.setFromQuaternion(e_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fr.DEFAULT_ORDER="XYZ";class ov{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ry=0;const t_=new le,bs=new Gs,da=new cn,uc=new le,Io=new le,sy=new le,oy=new Gs,n_=new le(1,0,0),i_=new le(0,1,0),a_=new le(0,0,1),r_={type:"added"},ly={type:"removed"},Es={type:"childadded",child:null},vd={type:"childremoved",child:null};class jn extends Gr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ry++}),this.uuid=Yo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=jn.DEFAULT_UP.clone();const e=new le,i=new Fr,r=new Gs,l=new le(1,1,1);function c(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new cn},normalMatrix:{value:new rt}}),this.matrix=new cn,this.matrixWorld=new cn,this.matrixAutoUpdate=jn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ov,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return bs.setFromAxisAngle(e,i),this.quaternion.multiply(bs),this}rotateOnWorldAxis(e,i){return bs.setFromAxisAngle(e,i),this.quaternion.premultiply(bs),this}rotateX(e){return this.rotateOnAxis(n_,e)}rotateY(e){return this.rotateOnAxis(i_,e)}rotateZ(e){return this.rotateOnAxis(a_,e)}translateOnAxis(e,i){return t_.copy(e).applyQuaternion(this.quaternion),this.position.add(t_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(n_,e)}translateY(e){return this.translateOnAxis(i_,e)}translateZ(e){return this.translateOnAxis(a_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(da.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?uc.copy(e):uc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Io.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?da.lookAt(Io,uc,this.up):da.lookAt(uc,Io,this.up),this.quaternion.setFromRotationMatrix(da),l&&(da.extractRotation(l.matrixWorld),bs.setFromRotationMatrix(da),this.quaternion.premultiply(bs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Mt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(r_),Es.child=e,this.dispatchEvent(Es),Es.child=null):Mt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(ly),vd.child=e,this.dispatchEvent(vd),vd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),da.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),da.multiply(e.parent.matrixWorld)),e.applyMatrix4(da),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(r_),Es.child=e,this.dispatchEvent(Es),Es.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Io,e,sy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Io,oy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,r=e.y,l=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*r-c[8]*l,c[13]+=r-c[1]*i-c[5]*r-c[9]*l,c[14]+=l-c[2]*i-c[6]*r-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i,r=!1){const l=this.parent;if(e===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){const c=this.children;for(let d=0,p=c.length;d<p;d++)c[d].updateWorldMatrix(!1,!0,r)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let h=0,S=m.length;h<S;h++){const x=m[h];c(e.shapes,x)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,h=this.material.length;m<h;m++)p.push(c(e.materials,this.material[m]));l.material=p}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(e.animations,m))}}if(i){const p=d(e.geometries),m=d(e.materials),h=d(e.textures),S=d(e.images),x=d(e.shapes),_=d(e.skeletons),b=d(e.animations),A=d(e.nodes);p.length>0&&(r.geometries=p),m.length>0&&(r.materials=m),h.length>0&&(r.textures=h),S.length>0&&(r.images=S),x.length>0&&(r.shapes=x),_.length>0&&(r.skeletons=_),b.length>0&&(r.animations=b),A.length>0&&(r.nodes=A)}return r.object=l,r;function d(p){const m=[];for(const h in p){const S=p[h];delete S.metadata,m.push(S)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}jn.DEFAULT_UP=new le(0,1,0);jn.DEFAULT_MATRIX_AUTO_UPDATE=!0;jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class fc extends jn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const cy={type:"move"};class xd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new le,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new le),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new le,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new le,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,c=null,d=null;const p=this._targetRay,m=this._grip,h=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(h&&e.hand){d=!0;for(const D of e.hand.values()){const M=i.getJointPose(D,r),v=this._getHandJoint(h,D);M!==null&&(v.matrix.fromArray(M.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=M.radius),v.visible=M!==null}const S=h.joints["index-finger-tip"],x=h.joints["thumb-tip"],_=S.position.distanceTo(x.position),b=.02,A=.005;h.inputState.pinching&&_>b+A?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&_<=b-A&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));p!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(cy)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),h!==null&&(h.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new fc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const lv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$a={h:0,s:0,l:0},dc={h:0,s:0,l:0};function Sd(s,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(e-s)*6*i:i<1/2?e:i<2/3?s+(e-s)*6*(2/3-i):s}class bt{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=_i){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,St.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=St.workingColorSpace){return this.r=e,this.g=i,this.b=r,St.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=St.workingColorSpace){if(e=KS(e,1),i=yt(i,0,1),r=yt(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,d=2*r-c;this.r=Sd(d,c,e+1/3),this.g=Sd(d,c,e),this.b=Sd(d,c,e-1/3)}return St.colorSpaceToWorking(this,l),this}setStyle(e,i=_i){function r(c){c!==void 0&&parseFloat(c)<1&&nt("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const d=l[1],p=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:nt("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);nt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=_i){const r=lv[e.toLowerCase()];return r!==void 0?this.setHex(r,i):nt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Sa(e.r),this.g=Sa(e.g),this.b=Sa(e.b),this}copyLinearToSRGB(e){return this.r=zs(e.r),this.g=zs(e.g),this.b=zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_i){return St.workingToColorSpace(On.copy(this),e),Math.round(yt(On.r*255,0,255))*65536+Math.round(yt(On.g*255,0,255))*256+Math.round(yt(On.b*255,0,255))}getHexString(e=_i){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=St.workingColorSpace){St.workingToColorSpace(On.copy(this),i);const r=On.r,l=On.g,c=On.b,d=Math.max(r,l,c),p=Math.min(r,l,c);let m,h;const S=(p+d)/2;if(p===d)m=0,h=0;else{const x=d-p;switch(h=S<=.5?x/(d+p):x/(2-d-p),d){case r:m=(l-c)/x+(l<c?6:0);break;case l:m=(c-r)/x+2;break;case c:m=(r-l)/x+4;break}m/=6}return e.h=m,e.s=h,e.l=S,e}getRGB(e,i=St.workingColorSpace){return St.workingToColorSpace(On.copy(this),i),e.r=On.r,e.g=On.g,e.b=On.b,e}getStyle(e=_i){St.workingToColorSpace(On.copy(this),e);const i=On.r,r=On.g,l=On.b;return e!==_i?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL($a),this.setHSL($a.h+e,$a.s+i,$a.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL($a),e.getHSL(dc);const r=hd($a.h,dc.h,i),l=hd($a.s,dc.s,i),c=hd($a.l,dc.l,i);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const On=new bt;bt.NAMES=lv;class uy extends jn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fr,this.environmentIntensity=1,this.environmentRotation=new Fr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ri=new le,ha=new le,yd=new le,pa=new le,Ts=new le,As=new le,s_=new le,Md=new le,bd=new le,Ed=new le,Td=new rn,Ad=new rn,Rd=new rn;class wi{constructor(e=new le,i=new le,r=new le){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),Ri.subVectors(e,i),l.cross(Ri);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,r,l,c){Ri.subVectors(l,i),ha.subVectors(r,i),yd.subVectors(e,i);const d=Ri.dot(Ri),p=Ri.dot(ha),m=Ri.dot(yd),h=ha.dot(ha),S=ha.dot(yd),x=d*h-p*p;if(x===0)return c.set(0,0,0),null;const _=1/x,b=(h*m-p*S)*_,A=(d*S-p*m)*_;return c.set(1-b-A,A,b)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,pa)===null?!1:pa.x>=0&&pa.y>=0&&pa.x+pa.y<=1}static getInterpolation(e,i,r,l,c,d,p,m){return this.getBarycoord(e,i,r,l,pa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,pa.x),m.addScaledVector(d,pa.y),m.addScaledVector(p,pa.z),m)}static getInterpolatedAttribute(e,i,r,l,c,d){return Td.setScalar(0),Ad.setScalar(0),Rd.setScalar(0),Td.fromBufferAttribute(e,i),Ad.fromBufferAttribute(e,r),Rd.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(Td,c.x),d.addScaledVector(Ad,c.y),d.addScaledVector(Rd,c.z),d}static isFrontFacing(e,i,r,l){return Ri.subVectors(r,i),ha.subVectors(e,i),Ri.cross(ha).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ri.subVectors(this.c,this.b),ha.subVectors(this.a,this.b),Ri.cross(ha).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return wi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,c){return wi.getInterpolation(e,this.a,this.b,this.c,i,r,l,c)}containsPoint(e){return wi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,c=this.c;let d,p;Ts.subVectors(l,r),As.subVectors(c,r),Md.subVectors(e,r);const m=Ts.dot(Md),h=As.dot(Md);if(m<=0&&h<=0)return i.copy(r);bd.subVectors(e,l);const S=Ts.dot(bd),x=As.dot(bd);if(S>=0&&x<=S)return i.copy(l);const _=m*x-S*h;if(_<=0&&m>=0&&S<=0)return d=m/(m-S),i.copy(r).addScaledVector(Ts,d);Ed.subVectors(e,c);const b=Ts.dot(Ed),A=As.dot(Ed);if(A>=0&&b<=A)return i.copy(c);const D=b*h-m*A;if(D<=0&&h>=0&&A<=0)return p=h/(h-A),i.copy(r).addScaledVector(As,p);const M=S*A-b*x;if(M<=0&&x-S>=0&&b-A>=0)return s_.subVectors(c,l),p=(x-S)/(x-S+(b-A)),i.copy(l).addScaledVector(s_,p);const v=1/(M+D+_);return d=D*v,p=_*v,i.copy(r).addScaledVector(Ts,d).addScaledVector(As,p)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class jo{constructor(e=new le(1/0,1/0,1/0),i=new le(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Ci.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Ci.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Ci.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let d=0,p=c.count;d<p;d++)e.isMesh===!0?e.getVertexPosition(d,Ci):Ci.fromBufferAttribute(c,d),Ci.applyMatrix4(e.matrixWorld),this.expandByPoint(Ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),hc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),hc.copy(r.boundingBox)),hc.applyMatrix4(e.matrixWorld),this.union(hc)}const l=e.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ci),Ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bo),pc.subVectors(this.max,Bo),Rs.subVectors(e.a,Bo),Cs.subVectors(e.b,Bo),ws.subVectors(e.c,Bo),er.subVectors(Cs,Rs),tr.subVectors(ws,Cs),Cr.subVectors(Rs,ws);let i=[0,-er.z,er.y,0,-tr.z,tr.y,0,-Cr.z,Cr.y,er.z,0,-er.x,tr.z,0,-tr.x,Cr.z,0,-Cr.x,-er.y,er.x,0,-tr.y,tr.x,0,-Cr.y,Cr.x,0];return!Cd(i,Rs,Cs,ws,pc)||(i=[1,0,0,0,1,0,0,0,1],!Cd(i,Rs,Cs,ws,pc))?!1:(mc.crossVectors(er,tr),i=[mc.x,mc.y,mc.z],Cd(i,Rs,Cs,ws,pc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ma[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ma[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ma[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ma[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ma[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ma[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ma[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ma[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ma),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ma=[new le,new le,new le,new le,new le,new le,new le,new le],Ci=new le,hc=new jo,Rs=new le,Cs=new le,ws=new le,er=new le,tr=new le,Cr=new le,Bo=new le,pc=new le,mc=new le,wr=new le;function Cd(s,e,i,r,l){for(let c=0,d=s.length-3;c<=d;c+=3){wr.fromArray(s,c);const p=l.x*Math.abs(wr.x)+l.y*Math.abs(wr.y)+l.z*Math.abs(wr.z),m=e.dot(wr),h=i.dot(wr),S=r.dot(wr);if(Math.max(-Math.max(m,h,S),Math.min(m,h,S))>p)return!1}return!0}const gn=new le,gc=new wt;let fy=0;class Si extends Gr{constructor(e,i,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:fy++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=qg,this.updateRanges=[],this.gpuType=Gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)gc.fromBufferAttribute(this,i),gc.applyMatrix3(e),this.setXY(i,gc.x,gc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)gn.fromBufferAttribute(this,i),gn.applyMatrix3(e),this.setXYZ(i,gn.x,gn.y,gn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)gn.fromBufferAttribute(this,i),gn.applyMatrix4(e),this.setXYZ(i,gn.x,gn.y,gn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)gn.fromBufferAttribute(this,i),gn.applyNormalMatrix(e),this.setXYZ(i,gn.x,gn.y,gn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)gn.fromBufferAttribute(this,i),gn.transformDirection(e),this.setXYZ(i,gn.x,gn.y,gn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=zo(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=qn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=zo(i,this.array)),i}setX(e,i){return this.normalized&&(i=qn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=zo(i,this.array)),i}setY(e,i){return this.normalized&&(i=qn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=zo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=qn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=zo(i,this.array)),i}setW(e,i){return this.normalized&&(i=qn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=qn(i,this.array),r=qn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=qn(i,this.array),r=qn(r,this.array),l=qn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e*=this.itemSize,this.normalized&&(i=qn(i,this.array),r=qn(r,this.array),l=qn(l,this.array),c=qn(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qg&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class cv extends Si{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class uv extends Si{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class ya extends Si{constructor(e,i,r){super(new Float32Array(e),i,r)}}const dy=new jo,Fo=new le,wd=new le;class Zc{constructor(e=new le,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):dy.setFromPoints(e).getCenter(r);let l=0;for(let c=0,d=e.length;c<d;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fo.subVectors(e,this.center);const i=Fo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Fo,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fo.copy(e.center).add(wd)),this.expandByPoint(Fo.copy(e.center).sub(wd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let hy=0;const gi=new cn,Dd=new jn,Ds=new le,oi=new jo,Ho=new jo,Mn=new le;class Ui extends Gr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hy++}),this.uuid=Yo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qS(e)?uv:cv)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new rt().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return gi.makeRotationFromQuaternion(e),this.applyMatrix4(gi),this}rotateX(e){return gi.makeRotationX(e),this.applyMatrix4(gi),this}rotateY(e){return gi.makeRotationY(e),this.applyMatrix4(gi),this}rotateZ(e){return gi.makeRotationZ(e),this.applyMatrix4(gi),this}translate(e,i,r){return gi.makeTranslation(e,i,r),this.applyMatrix4(gi),this}scale(e,i,r){return gi.makeScale(e,i,r),this.applyMatrix4(gi),this}lookAt(e){return Dd.lookAt(e),Dd.updateMatrix(),this.applyMatrix4(Dd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ds).negate(),this.translate(Ds.x,Ds.y,Ds.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=e.length;l<c;l++){const d=e[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new ya(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&nt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Mt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new le(-1/0,-1/0,-1/0),new le(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];oi.setFromBufferAttribute(c),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Mt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zc);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Mt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new le,1/0);return}if(e){const r=this.boundingSphere.center;if(oi.setFromBufferAttribute(e),i)for(let c=0,d=i.length;c<d;c++){const p=i[c];Ho.setFromBufferAttribute(p),this.morphTargetsRelative?(Mn.addVectors(oi.min,Ho.min),oi.expandByPoint(Mn),Mn.addVectors(oi.max,Ho.max),oi.expandByPoint(Mn)):(oi.expandByPoint(Ho.min),oi.expandByPoint(Ho.max))}oi.getCenter(r);let l=0;for(let c=0,d=e.count;c<d;c++)Mn.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(Mn));if(i)for(let c=0,d=i.length;c<d;c++){const p=i[c],m=this.morphTargetsRelative;for(let h=0,S=p.count;h<S;h++)Mn.fromBufferAttribute(p,h),m&&(Ds.fromBufferAttribute(e,h),Mn.add(Ds)),l=Math.max(l,r.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Mt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Mt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;let d=this.getAttribute("tangent");(d===void 0||d.count!==r.count)&&(d=new Si(new Float32Array(4*r.count),4),this.setAttribute("tangent",d));const p=[],m=[];for(let E=0;E<r.count;E++)p[E]=new le,m[E]=new le;const h=new le,S=new le,x=new le,_=new wt,b=new wt,A=new wt,D=new le,M=new le;function v(E,O,Y){h.fromBufferAttribute(r,E),S.fromBufferAttribute(r,O),x.fromBufferAttribute(r,Y),_.fromBufferAttribute(c,E),b.fromBufferAttribute(c,O),A.fromBufferAttribute(c,Y),S.sub(h),x.sub(h),b.sub(_),A.sub(_);const k=1/(b.x*A.y-A.x*b.y);isFinite(k)&&(D.copy(S).multiplyScalar(A.y).addScaledVector(x,-b.y).multiplyScalar(k),M.copy(x).multiplyScalar(b.x).addScaledVector(S,-A.x).multiplyScalar(k),p[E].add(D),p[O].add(D),p[Y].add(D),m[E].add(M),m[O].add(M),m[Y].add(M))}let H=this.groups;H.length===0&&(H=[{start:0,count:e.count}]);for(let E=0,O=H.length;E<O;++E){const Y=H[E],k=Y.start,Q=Y.count;for(let he=k,ve=k+Q;he<ve;he+=3)v(e.getX(he+0),e.getX(he+1),e.getX(he+2))}const G=new le,C=new le,I=new le,N=new le;function P(E){I.fromBufferAttribute(l,E),N.copy(I);const O=p[E];G.copy(O),G.sub(I.multiplyScalar(I.dot(O))).normalize(),C.crossVectors(N,O);const k=C.dot(m[E])<0?-1:1;d.setXYZW(E,G.x,G.y,G.z,k)}for(let E=0,O=H.length;E<O;++E){const Y=H[E],k=Y.start,Q=Y.count;for(let he=k,ve=k+Q;he<ve;he+=3)P(e.getX(he+0)),P(e.getX(he+1)),P(e.getX(he+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new Si(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let _=0,b=r.count;_<b;_++)r.setXYZ(_,0,0,0);const l=new le,c=new le,d=new le,p=new le,m=new le,h=new le,S=new le,x=new le;if(e)for(let _=0,b=e.count;_<b;_+=3){const A=e.getX(_+0),D=e.getX(_+1),M=e.getX(_+2);l.fromBufferAttribute(i,A),c.fromBufferAttribute(i,D),d.fromBufferAttribute(i,M),S.subVectors(d,c),x.subVectors(l,c),S.cross(x),p.fromBufferAttribute(r,A),m.fromBufferAttribute(r,D),h.fromBufferAttribute(r,M),p.add(S),m.add(S),h.add(S),r.setXYZ(A,p.x,p.y,p.z),r.setXYZ(D,m.x,m.y,m.z),r.setXYZ(M,h.x,h.y,h.z)}else for(let _=0,b=i.count;_<b;_+=3)l.fromBufferAttribute(i,_+0),c.fromBufferAttribute(i,_+1),d.fromBufferAttribute(i,_+2),S.subVectors(d,c),x.subVectors(l,c),S.cross(x),r.setXYZ(_+0,S.x,S.y,S.z),r.setXYZ(_+1,S.x,S.y,S.z),r.setXYZ(_+2,S.x,S.y,S.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)Mn.fromBufferAttribute(e,i),Mn.normalize(),e.setXYZ(i,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function e(p,m){const h=p.array,S=p.itemSize,x=p.normalized,_=new h.constructor(m.length*S);let b=0,A=0;for(let D=0,M=m.length;D<M;D++){p.isInterleavedBufferAttribute?b=m[D]*p.data.stride+p.offset:b=m[D]*S;for(let v=0;v<S;v++)_[A++]=h[b++]}return new Si(_,S,x)}if(this.index===null)return nt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ui,r=this.index.array,l=this.attributes;for(const p in l){const m=l[p],h=e(m,r);i.setAttribute(p,h)}const c=this.morphAttributes;for(const p in c){const m=[],h=c[p];for(let S=0,x=h.length;S<x;S++){const _=h[S],b=e(_,r);m.push(b)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let p=0,m=d.length;p<m;p++){const h=d[p];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(e[h]=m[h]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const h=r[m];e.data.attributes[m]=h.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],S=[];for(let x=0,_=h.length;x<_;x++){const b=h[x];S.push(b.toJSON(e.data))}S.length>0&&(l[m]=S,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const p=this.boundingSphere;return p!==null&&(e.data.boundingSphere=p.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const h in l){const S=l[h];this.setAttribute(h,S.clone(i))}const c=e.morphAttributes;for(const h in c){const S=[],x=c[h];for(let _=0,b=x.length;_<b;_++)S.push(x[_].clone(i));this.morphAttributes[h]=S}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let h=0,S=d.length;h<S;h++){const x=d[h];this.addGroup(x.start,x.count,x.materialIndex)}const p=e.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let py=0;class Zo extends Gr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:py++}),this.uuid=Yo(),this.name="",this.type="Material",this.blending=Os,this.side=or,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kd,this.blendDst=Xd,this.blendEquation=Nr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new bt(0,0,0),this.blendAlpha=0,this.depthFunc=Is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ss,this.stencilZFail=Ss,this.stencilZPass=Ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){nt(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){nt(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector2&&r&&r.isVector2||l&&l.isEuler&&r&&r.isEuler||l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Os&&(r.blending=this.blending),this.side!==or&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==kd&&(r.blendSrc=this.blendSrc),this.blendDst!==Xd&&(r.blendDst=this.blendDst),this.blendEquation!==Nr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Is&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wg&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ss&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ss&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ss&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const d=[];for(const p in c){const m=c[p];delete m.metadata,d.push(m)}return d}if(i){const c=l(e.textures),d=l(e.images);c.length>0&&(r.textures=c),d.length>0&&(r.images=d)}return r}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new bt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new wt().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new wt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ga=new le,Ud=new le,_c=new le,nr=new le,Ld=new le,vc=new le,Nd=new le;class fv{constructor(e=new le,i=new le(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ga)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ga.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ga.copy(this.origin).addScaledVector(this.direction,i),ga.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Ud.copy(e).add(i).multiplyScalar(.5),_c.copy(i).sub(e).normalize(),nr.copy(this.origin).sub(Ud);const c=e.distanceTo(i)*.5,d=-this.direction.dot(_c),p=nr.dot(this.direction),m=-nr.dot(_c),h=nr.lengthSq(),S=Math.abs(1-d*d);let x,_,b,A;if(S>0)if(x=d*m-p,_=d*p-m,A=c*S,x>=0)if(_>=-A)if(_<=A){const D=1/S;x*=D,_*=D,b=x*(x+d*_+2*p)+_*(d*x+_+2*m)+h}else _=c,x=Math.max(0,-(d*_+p)),b=-x*x+_*(_+2*m)+h;else _=-c,x=Math.max(0,-(d*_+p)),b=-x*x+_*(_+2*m)+h;else _<=-A?(x=Math.max(0,-(-d*c+p)),_=x>0?-c:Math.min(Math.max(-c,-m),c),b=-x*x+_*(_+2*m)+h):_<=A?(x=0,_=Math.min(Math.max(-c,-m),c),b=_*(_+2*m)+h):(x=Math.max(0,-(d*c+p)),_=x>0?c:Math.min(Math.max(-c,-m),c),b=-x*x+_*(_+2*m)+h);else _=d>0?-c:c,x=Math.max(0,-(d*_+p)),b=-x*x+_*(_+2*m)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(Ud).addScaledVector(_c,_),b}intersectSphere(e,i){ga.subVectors(e.center,this.origin);const r=ga.dot(this.direction),l=ga.dot(ga)-r*r,c=e.radius*e.radius;if(l>c)return null;const d=Math.sqrt(c-l),p=r-d,m=r+d;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,c,d,p,m;const h=1/this.direction.x,S=1/this.direction.y,x=1/this.direction.z,_=this.origin;return h>=0?(r=(e.min.x-_.x)*h,l=(e.max.x-_.x)*h):(r=(e.max.x-_.x)*h,l=(e.min.x-_.x)*h),S>=0?(c=(e.min.y-_.y)*S,d=(e.max.y-_.y)*S):(c=(e.max.y-_.y)*S,d=(e.min.y-_.y)*S),r>d||c>l||((c>r||isNaN(r))&&(r=c),(d<l||isNaN(l))&&(l=d),x>=0?(p=(e.min.z-_.z)*x,m=(e.max.z-_.z)*x):(p=(e.max.z-_.z)*x,m=(e.min.z-_.z)*x),r>m||p>l)||((p>r||r!==r)&&(r=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,ga)!==null}intersectTriangle(e,i,r,l,c){Ld.subVectors(i,e),vc.subVectors(r,e),Nd.crossVectors(Ld,vc);let d=this.direction.dot(Nd),p;if(d>0){if(l)return null;p=1}else if(d<0)p=-1,d=-d;else return null;nr.subVectors(this.origin,e);const m=p*this.direction.dot(vc.crossVectors(nr,vc));if(m<0)return null;const h=p*this.direction.dot(Ld.cross(nr));if(h<0||m+h>d)return null;const S=-p*nr.dot(Nd);return S<0?null:this.at(S/d,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dv extends Zo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fr,this.combine=k_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const o_=new cn,Dr=new fv,xc=new Zc,l_=new le,Sc=new le,yc=new le,Mc=new le,Od=new le,bc=new le,c_=new le,Ec=new le;class Ea extends jn{constructor(e=new Ui,i=new dv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const p=this.morphTargetInfluences;if(c&&p){bc.set(0,0,0);for(let m=0,h=c.length;m<h;m++){const S=p[m],x=c[m];S!==0&&(Od.fromBufferAttribute(x,e),d?bc.addScaledVector(Od,S):bc.addScaledVector(Od.sub(i),S))}i.add(bc)}return i}raycast(e,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),xc.copy(r.boundingSphere),xc.applyMatrix4(c),Dr.copy(e.ray).recast(e.near),!(xc.containsPoint(Dr.origin)===!1&&(Dr.intersectSphere(xc,l_)===null||Dr.origin.distanceToSquared(l_)>(e.far-e.near)**2))&&(o_.copy(c).invert(),Dr.copy(e.ray).applyMatrix4(o_),!(r.boundingBox!==null&&Dr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,Dr)))}_computeIntersections(e,i,r){let l;const c=this.geometry,d=this.material,p=c.index,m=c.attributes.position,h=c.attributes.uv,S=c.attributes.uv1,x=c.attributes.normal,_=c.groups,b=c.drawRange;if(p!==null)if(Array.isArray(d))for(let A=0,D=_.length;A<D;A++){const M=_[A],v=d[M.materialIndex],H=Math.max(M.start,b.start),G=Math.min(p.count,Math.min(M.start+M.count,b.start+b.count));for(let C=H,I=G;C<I;C+=3){const N=p.getX(C),P=p.getX(C+1),E=p.getX(C+2);l=Tc(this,v,e,r,h,S,x,N,P,E),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const A=Math.max(0,b.start),D=Math.min(p.count,b.start+b.count);for(let M=A,v=D;M<v;M+=3){const H=p.getX(M),G=p.getX(M+1),C=p.getX(M+2);l=Tc(this,d,e,r,h,S,x,H,G,C),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let A=0,D=_.length;A<D;A++){const M=_[A],v=d[M.materialIndex],H=Math.max(M.start,b.start),G=Math.min(m.count,Math.min(M.start+M.count,b.start+b.count));for(let C=H,I=G;C<I;C+=3){const N=C,P=C+1,E=C+2;l=Tc(this,v,e,r,h,S,x,N,P,E),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const A=Math.max(0,b.start),D=Math.min(m.count,b.start+b.count);for(let M=A,v=D;M<v;M+=3){const H=M,G=M+1,C=M+2;l=Tc(this,d,e,r,h,S,x,H,G,C),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function my(s,e,i,r,l,c,d,p){let m;if(e.side===Yn?m=r.intersectTriangle(d,c,l,!0,p):m=r.intersectTriangle(l,c,d,e.side===or,p),m===null)return null;Ec.copy(p),Ec.applyMatrix4(s.matrixWorld);const h=i.ray.origin.distanceTo(Ec);return h<i.near||h>i.far?null:{distance:h,point:Ec.clone(),object:s}}function Tc(s,e,i,r,l,c,d,p,m,h){s.getVertexPosition(p,Sc),s.getVertexPosition(m,yc),s.getVertexPosition(h,Mc);const S=my(s,e,i,r,Sc,yc,Mc,c_);if(S){const x=new le;wi.getBarycoord(c_,Sc,yc,Mc,x),l&&(S.uv=wi.getInterpolatedAttribute(l,p,m,h,x,new wt)),c&&(S.uv1=wi.getInterpolatedAttribute(c,p,m,h,x,new wt)),d&&(S.normal=wi.getInterpolatedAttribute(d,p,m,h,x,new le),S.normal.dot(r.direction)>0&&S.normal.multiplyScalar(-1));const _={a:p,b:m,c:h,normal:new le,materialIndex:0};wi.getNormal(Sc,yc,Mc,_.normal),S.face=_,S.barycoord=x}return S}class gy extends Bn{constructor(e=null,i=1,r=1,l,c,d,p,m,h=Dn,S=Dn,x,_){super(null,d,p,m,h,S,l,c,x,_),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Pd=new le,_y=new le,vy=new rt;class Lr{constructor(e=new le(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=Pd.subVectors(r,i).cross(_y.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,r=!0){const l=e.delta(Pd),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const d=-(e.start.dot(this.normal)+this.constant)/c;return r===!0&&(d<0||d>1)?null:i.copy(e.start).addScaledVector(l,d)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||vy.getNormalMatrix(e),l=this.coplanarPoint(Pd).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ur=new Zc,xy=new wt(.5,.5),Ac=new le;class hv{constructor(e=new Lr,i=new Lr,r=new Lr,l=new Lr,c=new Lr,d=new Lr){this.planes=[e,i,r,l,c,d]}set(e,i,r,l,c,d){const p=this.planes;return p[0].copy(e),p[1].copy(i),p[2].copy(r),p[3].copy(l),p[4].copy(c),p[5].copy(d),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Vi,r=!1){const l=this.planes,c=e.elements,d=c[0],p=c[1],m=c[2],h=c[3],S=c[4],x=c[5],_=c[6],b=c[7],A=c[8],D=c[9],M=c[10],v=c[11],H=c[12],G=c[13],C=c[14],I=c[15];if(l[0].setComponents(h-d,b-S,v-A,I-H).normalize(),l[1].setComponents(h+d,b+S,v+A,I+H).normalize(),l[2].setComponents(h+p,b+x,v+D,I+G).normalize(),l[3].setComponents(h-p,b-x,v-D,I-G).normalize(),r)l[4].setComponents(m,_,M,C).normalize(),l[5].setComponents(h-m,b-_,v-M,I-C).normalize();else if(l[4].setComponents(h-m,b-_,v-M,I-C).normalize(),i===Vi)l[5].setComponents(h+m,b+_,v+M,I+C).normalize();else if(i===Wc)l[5].setComponents(m,_,M,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ur.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ur.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ur)}intersectsSprite(e){Ur.center.set(0,0,0);const i=xy.distanceTo(e.center);return Ur.radius=.7071067811865476+i,Ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ur)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Ac.x=l.normal.x>0?e.max.x:e.min.x,Ac.y=l.normal.y>0?e.max.y:e.min.y,Ac.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Ac)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class pv extends Zo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new bt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const u_=new cn,Uh=new fv,Rc=new Zc,Cc=new le;class Sy extends jn{constructor(e=new Ui,i=new pv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Rc.copy(r.boundingSphere),Rc.applyMatrix4(l),Rc.radius+=c,e.ray.intersectsSphere(Rc)===!1)return;u_.copy(l).invert(),Uh.copy(e.ray).applyMatrix4(u_);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,h=r.index,x=r.attributes.position;if(h!==null){const _=Math.max(0,d.start),b=Math.min(h.count,d.start+d.count);for(let A=_,D=b;A<D;A++){const M=h.getX(A);Cc.fromBufferAttribute(x,M),f_(Cc,M,m,l,e,i,this)}}else{const _=Math.max(0,d.start),b=Math.min(x.count,d.start+d.count);for(let A=_,D=b;A<D;A++)Cc.fromBufferAttribute(x,A),f_(Cc,A,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function f_(s,e,i,r,l,c,d){const p=Uh.distanceSqToPoint(s);if(p<i){const m=new le;Uh.closestPointToPoint(s,m),m.applyMatrix4(r);const h=l.ray.origin.distanceTo(m);if(h<l.near||h>l.far)return;c.push({distance:h,distanceToRay:Math.sqrt(p),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:d})}}class mv extends Bn{constructor(e=[],i=Ir,r,l,c,d,p,m,h,S){super(e,i,r,l,c,d,p,m,h,S),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Fs extends Bn{constructor(e,i,r=Wi,l,c,d,p=Dn,m=Dn,h,S=ba,x=1){if(S!==ba&&S!==zr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:i,depth:x};super(_,l,c,d,p,m,S,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Wh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class yy extends Fs{constructor(e,i=Wi,r=Ir,l,c,d=Dn,p=Dn,m,h=ba){const S={width:e,height:e,depth:1},x=[S,S,S,S,S,S];super(e,e,i,r,l,c,d,p,m,h),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class gv extends Bn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ko extends Ui{constructor(e=1,i=1,r=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:d};const p=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const m=[],h=[],S=[],x=[];let _=0,b=0;A("z","y","x",-1,-1,r,i,e,d,c,0),A("z","y","x",1,-1,r,i,-e,d,c,1),A("x","z","y",1,1,e,r,i,l,d,2),A("x","z","y",1,-1,e,r,-i,l,d,3),A("x","y","z",1,-1,e,i,r,l,c,4),A("x","y","z",-1,-1,e,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new ya(h,3)),this.setAttribute("normal",new ya(S,3)),this.setAttribute("uv",new ya(x,2));function A(D,M,v,H,G,C,I,N,P,E,O){const Y=C/P,k=I/E,Q=C/2,he=I/2,ve=N/2,J=P+1,z=E+1;let F=0,te=0;const ge=new le;for(let Ee=0;Ee<z;Ee++){const U=Ee*k-he;for(let Z=0;Z<J;Z++){const be=Z*Y-Q;ge[D]=be*H,ge[M]=U*G,ge[v]=ve,h.push(ge.x,ge.y,ge.z),ge[D]=0,ge[M]=0,ge[v]=N>0?1:-1,S.push(ge.x,ge.y,ge.z),x.push(Z/P),x.push(1-Ee/E),F+=1}}for(let Ee=0;Ee<E;Ee++)for(let U=0;U<P;U++){const Z=_+U+J*Ee,be=_+U+J*(Ee+1),Ce=_+(U+1)+J*(Ee+1),ze=_+(U+1)+J*Ee;m.push(Z,be,ze),m.push(be,Ce,ze),te+=6}p.addGroup(b,te,O),b+=te,_+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ko(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Kc extends Ui{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const c=e/2,d=i/2,p=Math.floor(r),m=Math.floor(l),h=p+1,S=m+1,x=e/p,_=i/m,b=[],A=[],D=[],M=[];for(let v=0;v<S;v++){const H=v*_-d;for(let G=0;G<h;G++){const C=G*x-c;A.push(C,-H,0),D.push(0,0,1),M.push(G/p),M.push(1-v/m)}}for(let v=0;v<m;v++)for(let H=0;H<p;H++){const G=H+h*v,C=H+h*(v+1),I=H+1+h*(v+1),N=H+1+h*v;b.push(G,C,N),b.push(C,I,N)}this.setIndex(b),this.setAttribute("position",new ya(A,3)),this.setAttribute("normal",new ya(D,3)),this.setAttribute("uv",new ya(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kc(e.width,e.height,e.widthSegments,e.heightSegments)}}function Hs(s){const e={};for(const i in s){e[i]={};for(const r in s[i]){const l=s[i][r];if(d_(l))l.isRenderTargetTexture?(nt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone();else if(Array.isArray(l))if(d_(l[0])){const c=[];for(let d=0,p=l.length;d<p;d++)c[d]=l[d].clone();e[i][r]=c}else e[i][r]=l.slice();else e[i][r]=l}}return e}function In(s){const e={};for(let i=0;i<s.length;i++){const r=Hs(s[i]);for(const l in r)e[l]=r[l]}return e}function d_(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function My(s){const e=[];for(let i=0;i<s.length;i++)e.push(s[i].clone());return e}function _v(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:St.workingColorSpace}const by={clone:Hs,merge:In};var Ey=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ty=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qi extends Zo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ey,this.fragmentShader=Ty,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hs(e.uniforms),this.uniformsGroups=My(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const r in e.uniforms){const l=e.uniforms[r];switch(this.uniforms[r]={},l.type){case"t":this.uniforms[r].value=i[l.value]||null;break;case"c":this.uniforms[r].value=new bt().setHex(l.value);break;case"v2":this.uniforms[r].value=new wt().fromArray(l.value);break;case"v3":this.uniforms[r].value=new le().fromArray(l.value);break;case"v4":this.uniforms[r].value=new rn().fromArray(l.value);break;case"m3":this.uniforms[r].value=new rt().fromArray(l.value);break;case"m4":this.uniforms[r].value=new cn().fromArray(l.value);break;default:this.uniforms[r].value=l.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Ay extends qi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ry extends Zo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=BS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Cy extends Zo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const wc=new le,Dc=new Gs,Bi=new le;class vv extends jn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new cn,this.projectionMatrix=new cn,this.projectionMatrixInverse=new cn,this.coordinateSystem=Vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(wc,Dc,Bi),Bi.x===1&&Bi.y===1&&Bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wc,Dc,Bi.set(1,1,1)).invert()}updateWorldMatrix(e,i,r=!1){super.updateWorldMatrix(e,i,r),this.matrixWorld.decompose(wc,Dc,Bi),Bi.x===1&&Bi.y===1&&Bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wc,Dc,Bi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ir=new le,h_=new wt,p_=new wt;class vi extends vv{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Dh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(dd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Dh*2*Math.atan(Math.tan(dd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){ir.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ir.x,ir.y).multiplyScalar(-e/ir.z),ir.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(ir.x,ir.y).multiplyScalar(-e/ir.z)}getViewSize(e,i){return this.getViewBounds(e,h_,p_),i.subVectors(p_,h_)}setViewOffset(e,i,r,l,c,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(dd*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,h=d.fullHeight;c+=d.offsetX*l/m,i-=d.offsetY*r/h,l*=d.width/m,r*=d.height/h}const p=this.filmOffset;p!==0&&(c+=e*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class xv extends vv{constructor(e=-1,i=1,r=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,d=r+e,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,S=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=h*this.view.offsetX,d=c+h*this.view.width,p-=S*this.view.offsetY,m=p-S*this.view.height}this.projectionMatrix.makeOrthographic(c,d,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Us=-90,Ls=1;class wy extends jn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new vi(Us,Ls,e,i);l.layers=this.layers,this.add(l);const c=new vi(Us,Ls,e,i);c.layers=this.layers,this.add(c);const d=new vi(Us,Ls,e,i);d.layers=this.layers,this.add(d);const p=new vi(Us,Ls,e,i);p.layers=this.layers,this.add(p);const m=new vi(Us,Ls,e,i);m.layers=this.layers,this.add(m);const h=new vi(Us,Ls,e,i);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,c,d,p,m]=i;for(const h of i)this.remove(h);if(e===Vi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Wc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of i)this.add(h),h.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,d,p,m,h,S]=this.children,x=e.getRenderTarget(),_=e.getActiveCubeFace(),b=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const D=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let M=!1;e.isWebGLRenderer===!0?M=e.state.buffers.depth.getReversed():M=e.reversedDepthBuffer,e.setRenderTarget(r,0,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(r,1,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),e.setRenderTarget(r,2,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(r,3,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(r,4,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),r.texture.generateMipmaps=D,e.setRenderTarget(r,5,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,S),e.setRenderTarget(x,_,b),e.xr.enabled=A,r.texture.needsPMREMUpdate=!0}}class Dy extends vi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Uy{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,nt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}const Kh=class Kh{constructor(e,i,r,l){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,r,l)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let r=0;r<4;r++)this.elements[r]=e[r+i];return this}set(e,i,r,l){const c=this.elements;return c[0]=e,c[2]=i,c[1]=r,c[3]=l,this}};Kh.prototype.isMatrix2=!0;let m_=Kh;function g_(s,e,i,r){const l=Ly(r);switch(i){case nv:return s*e;case av:return s*e/l.components*l.byteLength;case Hh:return s*e/l.components*l.byteLength;case Br:return s*e*2/l.components*l.byteLength;case Gh:return s*e*2/l.components*l.byteLength;case iv:return s*e*3/l.components*l.byteLength;case Di:return s*e*4/l.components*l.byteLength;case Vh:return s*e*4/l.components*l.byteLength;case Oc:case Pc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case zc:case Ic:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case th:case ih:return Math.max(s,16)*Math.max(e,8)/4;case eh:case nh:return Math.max(s,8)*Math.max(e,8)/2;case ah:case rh:case oh:case lh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case sh:case Gc:case ch:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case uh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case fh:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case dh:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case hh:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case ph:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case mh:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case gh:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case _h:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case vh:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case xh:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Sh:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case yh:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Mh:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case bh:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Eh:case Th:case Ah:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Rh:case Ch:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Vc:case wh:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Ly(s){switch(s){case xi:case J_:return{byteLength:1,components:1};case Wo:case $_:case Ma:return{byteLength:2,components:1};case Bh:case Fh:return{byteLength:2,components:4};case Wi:case Ih:case Gi:return{byteLength:4,components:1};case ev:case tv:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zh}}));typeof window<"u"&&(window.__THREE__?nt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Sv(){let s=null,e=!1,i=null,r=null;function l(c,d){i(c,d),r=s.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&s!==null&&(r=s.requestAnimationFrame(l),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function Ny(s){const e=new WeakMap;function i(p,m){const h=p.array,S=p.usage,x=h.byteLength,_=s.createBuffer();s.bindBuffer(m,_),s.bufferData(m,h,S),p.onUploadCallback();let b;if(h instanceof Float32Array)b=s.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)b=s.HALF_FLOAT;else if(h instanceof Uint16Array)p.isFloat16BufferAttribute?b=s.HALF_FLOAT:b=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)b=s.SHORT;else if(h instanceof Uint32Array)b=s.UNSIGNED_INT;else if(h instanceof Int32Array)b=s.INT;else if(h instanceof Int8Array)b=s.BYTE;else if(h instanceof Uint8Array)b=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)b=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:_,type:b,bytesPerElement:h.BYTES_PER_ELEMENT,version:p.version,size:x}}function r(p,m,h){const S=m.array,x=m.updateRanges;if(s.bindBuffer(h,p),x.length===0)s.bufferSubData(h,0,S);else{x.sort((b,A)=>b.start-A.start);let _=0;for(let b=1;b<x.length;b++){const A=x[_],D=x[b];D.start<=A.start+A.count+1?A.count=Math.max(A.count,D.start+D.count-A.start):(++_,x[_]=D)}x.length=_+1;for(let b=0,A=x.length;b<A;b++){const D=x[b];s.bufferSubData(h,D.start*S.BYTES_PER_ELEMENT,S,D.start,D.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),e.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=e.get(p);m&&(s.deleteBuffer(m.buffer),e.delete(p))}function d(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const S=e.get(p);(!S||S.version<p.version)&&e.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const h=e.get(p);if(h===void 0)e.set(p,i(p,m));else if(h.version<p.version){if(h.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,p,m),h.version=p.version}}return{get:l,remove:c,update:d}}var Oy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Py=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,zy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Iy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,By=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Fy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Gy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,ky=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Xy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Yy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,jy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Zy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ky=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$y=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,eM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,tM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,nM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,iM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,aM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,rM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,sM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,oM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,uM="gl_FragColor = linearToOutputTexel( gl_FragColor );",fM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,hM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,pM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,mM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,_M=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,SM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,MM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,EM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,TM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,AM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,RM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,CM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,DM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,UM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,LM=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,NM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,OM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,PM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zM=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,IM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,BM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,FM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,HM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,GM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,VM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,XM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,WM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,YM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ZM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,KM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,QM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,JM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,$M=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,e2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,t2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,n2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,i2=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,a2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,r2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,s2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,o2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,l2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,c2=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,u2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,f2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,d2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,h2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,p2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,m2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,g2=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,_2=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,v2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,x2=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,S2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,y2=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,M2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,b2=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,E2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,T2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,A2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,R2=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,C2=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,w2=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,D2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,U2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,L2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,N2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const O2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,P2=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,I2=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,F2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,H2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,G2=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,V2=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,k2=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,X2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,W2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q2=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Y2=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,j2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Z2=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,K2=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Q2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,J2=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,$2=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,tb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,nb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ib=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ab=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,rb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ob=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,cb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ub=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,db=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ct={alphahash_fragment:Oy,alphahash_pars_fragment:Py,alphamap_fragment:zy,alphamap_pars_fragment:Iy,alphatest_fragment:By,alphatest_pars_fragment:Fy,aomap_fragment:Hy,aomap_pars_fragment:Gy,batching_pars_vertex:Vy,batching_vertex:ky,begin_vertex:Xy,beginnormal_vertex:Wy,bsdfs:qy,iridescence_fragment:Yy,bumpmap_pars_fragment:jy,clipping_planes_fragment:Zy,clipping_planes_pars_fragment:Ky,clipping_planes_pars_vertex:Qy,clipping_planes_vertex:Jy,color_fragment:$y,color_pars_fragment:eM,color_pars_vertex:tM,color_vertex:nM,common:iM,cube_uv_reflection_fragment:aM,defaultnormal_vertex:rM,displacementmap_pars_vertex:sM,displacementmap_vertex:oM,emissivemap_fragment:lM,emissivemap_pars_fragment:cM,colorspace_fragment:uM,colorspace_pars_fragment:fM,envmap_fragment:dM,envmap_common_pars_fragment:hM,envmap_pars_fragment:pM,envmap_pars_vertex:mM,envmap_physical_pars_fragment:AM,envmap_vertex:gM,fog_vertex:_M,fog_pars_vertex:vM,fog_fragment:xM,fog_pars_fragment:SM,gradientmap_pars_fragment:yM,lightmap_pars_fragment:MM,lights_lambert_fragment:bM,lights_lambert_pars_fragment:EM,lights_pars_begin:TM,lights_toon_fragment:RM,lights_toon_pars_fragment:CM,lights_phong_fragment:wM,lights_phong_pars_fragment:DM,lights_physical_fragment:UM,lights_physical_pars_fragment:LM,lights_fragment_begin:NM,lights_fragment_maps:OM,lights_fragment_end:PM,lightprobes_pars_fragment:zM,logdepthbuf_fragment:IM,logdepthbuf_pars_fragment:BM,logdepthbuf_pars_vertex:FM,logdepthbuf_vertex:HM,map_fragment:GM,map_pars_fragment:VM,map_particle_fragment:kM,map_particle_pars_fragment:XM,metalnessmap_fragment:WM,metalnessmap_pars_fragment:qM,morphinstance_vertex:YM,morphcolor_vertex:jM,morphnormal_vertex:ZM,morphtarget_pars_vertex:KM,morphtarget_vertex:QM,normal_fragment_begin:JM,normal_fragment_maps:$M,normal_pars_fragment:e2,normal_pars_vertex:t2,normal_vertex:n2,normalmap_pars_fragment:i2,clearcoat_normal_fragment_begin:a2,clearcoat_normal_fragment_maps:r2,clearcoat_pars_fragment:s2,iridescence_pars_fragment:o2,opaque_fragment:l2,packing:c2,premultiplied_alpha_fragment:u2,project_vertex:f2,dithering_fragment:d2,dithering_pars_fragment:h2,roughnessmap_fragment:p2,roughnessmap_pars_fragment:m2,shadowmap_pars_fragment:g2,shadowmap_pars_vertex:_2,shadowmap_vertex:v2,shadowmask_pars_fragment:x2,skinbase_vertex:S2,skinning_pars_vertex:y2,skinning_vertex:M2,skinnormal_vertex:b2,specularmap_fragment:E2,specularmap_pars_fragment:T2,tonemapping_fragment:A2,tonemapping_pars_fragment:R2,transmission_fragment:C2,transmission_pars_fragment:w2,uv_pars_fragment:D2,uv_pars_vertex:U2,uv_vertex:L2,worldpos_vertex:N2,background_vert:O2,background_frag:P2,backgroundCube_vert:z2,backgroundCube_frag:I2,cube_vert:B2,cube_frag:F2,depth_vert:H2,depth_frag:G2,distance_vert:V2,distance_frag:k2,equirect_vert:X2,equirect_frag:W2,linedashed_vert:q2,linedashed_frag:Y2,meshbasic_vert:j2,meshbasic_frag:Z2,meshlambert_vert:K2,meshlambert_frag:Q2,meshmatcap_vert:J2,meshmatcap_frag:$2,meshnormal_vert:eb,meshnormal_frag:tb,meshphong_vert:nb,meshphong_frag:ib,meshphysical_vert:ab,meshphysical_frag:rb,meshtoon_vert:sb,meshtoon_frag:ob,points_vert:lb,points_frag:cb,shadow_vert:ub,shadow_frag:fb,sprite_vert:db,sprite_frag:hb},Pe={common:{diffuse:{value:new bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},envMapRotation:{value:new rt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new le},probesMax:{value:new le},probesResolution:{value:new le}},points:{diffuse:{value:new bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new bt(16777215)},opacity:{value:1},center:{value:new wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},Hi={basic:{uniforms:In([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:In([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new bt(0)},envMapIntensity:{value:1}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:In([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new bt(0)},specular:{value:new bt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:In([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:In([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new bt(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:In([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:In([Pe.points,Pe.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:In([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:In([Pe.common,Pe.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:In([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:In([Pe.sprite,Pe.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new rt}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distance:{uniforms:In([Pe.common,Pe.displacementmap,{referencePosition:{value:new le},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distance_vert,fragmentShader:ct.distance_frag},shadow:{uniforms:In([Pe.lights,Pe.fog,{color:{value:new bt(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};Hi.physical={uniforms:In([Hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new bt(0)},specularColor:{value:new bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};const Uc={r:0,b:0,g:0},pb=new cn,yv=new rt;yv.set(-1,0,0,0,1,0,0,0,1);function mb(s,e,i,r,l,c){const d=new bt(0);let p=l===!0?0:1,m,h,S=null,x=0,_=null;function b(H){let G=H.isScene===!0?H.background:null;if(G&&G.isTexture){const C=H.backgroundBlurriness>0;G=e.get(G,C)}return G}function A(H){let G=!1;const C=b(H);C===null?M(d,p):C&&C.isColor&&(M(C,1),G=!0);const I=s.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,c):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(s.autoClear||G)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function D(H,G){const C=b(G);C&&(C.isCubeTexture||C.mapping===jc)?(h===void 0&&(h=new Ea(new Ko(1,1,1),new qi({name:"BackgroundCubeMaterial",uniforms:Hs(Hi.backgroundCube.uniforms),vertexShader:Hi.backgroundCube.vertexShader,fragmentShader:Hi.backgroundCube.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,N,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=C,h.material.uniforms.backgroundBlurriness.value=G.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=G.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(pb.makeRotationFromEuler(G.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(yv),h.material.toneMapped=St.getTransfer(C.colorSpace)!==It,(S!==C||x!==C.version||_!==s.toneMapping)&&(h.material.needsUpdate=!0,S=C,x=C.version,_=s.toneMapping),h.layers.enableAll(),H.unshift(h,h.geometry,h.material,0,0,null)):C&&C.isTexture&&(m===void 0&&(m=new Ea(new Kc(2,2),new qi({name:"BackgroundMaterial",uniforms:Hs(Hi.background.uniforms),vertexShader:Hi.background.vertexShader,fragmentShader:Hi.background.fragmentShader,side:or,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(m)),m.material.uniforms.t2D.value=C,m.material.uniforms.backgroundIntensity.value=G.backgroundIntensity,m.material.toneMapped=St.getTransfer(C.colorSpace)!==It,C.matrixAutoUpdate===!0&&C.updateMatrix(),m.material.uniforms.uvTransform.value.copy(C.matrix),(S!==C||x!==C.version||_!==s.toneMapping)&&(m.material.needsUpdate=!0,S=C,x=C.version,_=s.toneMapping),m.layers.enableAll(),H.unshift(m,m.geometry,m.material,0,0,null))}function M(H,G){H.getRGB(Uc,_v(s)),i.buffers.color.setClear(Uc.r,Uc.g,Uc.b,G,c)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(H,G=1){d.set(H),p=G,M(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(H){p=H,M(d,p)},render:A,addToRenderList:D,dispose:v}}function gb(s,e){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=_(null);let c=l,d=!1;function p(k,Q,he,ve,J){let z=!1;const F=x(k,ve,he,Q);c!==F&&(c=F,h(c.object)),z=b(k,ve,he,J),z&&A(k,ve,he,J),J!==null&&e.update(J,s.ELEMENT_ARRAY_BUFFER),(z||d)&&(d=!1,C(k,Q,he,ve),J!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function m(){return s.createVertexArray()}function h(k){return s.bindVertexArray(k)}function S(k){return s.deleteVertexArray(k)}function x(k,Q,he,ve){const J=ve.wireframe===!0;let z=r[Q.id];z===void 0&&(z={},r[Q.id]=z);const F=k.isInstancedMesh===!0?k.id:0;let te=z[F];te===void 0&&(te={},z[F]=te);let ge=te[he.id];ge===void 0&&(ge={},te[he.id]=ge);let Ee=ge[J];return Ee===void 0&&(Ee=_(m()),ge[J]=Ee),Ee}function _(k){const Q=[],he=[],ve=[];for(let J=0;J<i;J++)Q[J]=0,he[J]=0,ve[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Q,enabledAttributes:he,attributeDivisors:ve,object:k,attributes:{},index:null}}function b(k,Q,he,ve){const J=c.attributes,z=Q.attributes;let F=0;const te=he.getAttributes();for(const ge in te)if(te[ge].location>=0){const U=J[ge];let Z=z[ge];if(Z===void 0&&(ge==="instanceMatrix"&&k.instanceMatrix&&(Z=k.instanceMatrix),ge==="instanceColor"&&k.instanceColor&&(Z=k.instanceColor)),U===void 0||U.attribute!==Z||Z&&U.data!==Z.data)return!0;F++}return c.attributesNum!==F||c.index!==ve}function A(k,Q,he,ve){const J={},z=Q.attributes;let F=0;const te=he.getAttributes();for(const ge in te)if(te[ge].location>=0){let U=z[ge];U===void 0&&(ge==="instanceMatrix"&&k.instanceMatrix&&(U=k.instanceMatrix),ge==="instanceColor"&&k.instanceColor&&(U=k.instanceColor));const Z={};Z.attribute=U,U&&U.data&&(Z.data=U.data),J[ge]=Z,F++}c.attributes=J,c.attributesNum=F,c.index=ve}function D(){const k=c.newAttributes;for(let Q=0,he=k.length;Q<he;Q++)k[Q]=0}function M(k){v(k,0)}function v(k,Q){const he=c.newAttributes,ve=c.enabledAttributes,J=c.attributeDivisors;he[k]=1,ve[k]===0&&(s.enableVertexAttribArray(k),ve[k]=1),J[k]!==Q&&(s.vertexAttribDivisor(k,Q),J[k]=Q)}function H(){const k=c.newAttributes,Q=c.enabledAttributes;for(let he=0,ve=Q.length;he<ve;he++)Q[he]!==k[he]&&(s.disableVertexAttribArray(he),Q[he]=0)}function G(k,Q,he,ve,J,z,F){F===!0?s.vertexAttribIPointer(k,Q,he,J,z):s.vertexAttribPointer(k,Q,he,ve,J,z)}function C(k,Q,he,ve){D();const J=ve.attributes,z=he.getAttributes(),F=Q.defaultAttributeValues;for(const te in z){const ge=z[te];if(ge.location>=0){let Ee=J[te];if(Ee===void 0&&(te==="instanceMatrix"&&k.instanceMatrix&&(Ee=k.instanceMatrix),te==="instanceColor"&&k.instanceColor&&(Ee=k.instanceColor)),Ee!==void 0){const U=Ee.normalized,Z=Ee.itemSize,be=e.get(Ee);if(be===void 0)continue;const Ce=be.buffer,ze=be.type,ae=be.bytesPerElement,Se=ze===s.INT||ze===s.UNSIGNED_INT||Ee.gpuType===Ih;if(Ee.isInterleavedBufferAttribute){const Me=Ee.data,He=Me.stride,tt=Ee.offset;if(Me.isInstancedInterleavedBuffer){for(let Ke=0;Ke<ge.locationSize;Ke++)v(ge.location+Ke,Me.meshPerAttribute);k.isInstancedMesh!==!0&&ve._maxInstanceCount===void 0&&(ve._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let Ke=0;Ke<ge.locationSize;Ke++)M(ge.location+Ke);s.bindBuffer(s.ARRAY_BUFFER,Ce);for(let Ke=0;Ke<ge.locationSize;Ke++)G(ge.location+Ke,Z/ge.locationSize,ze,U,He*ae,(tt+Z/ge.locationSize*Ke)*ae,Se)}else{if(Ee.isInstancedBufferAttribute){for(let Me=0;Me<ge.locationSize;Me++)v(ge.location+Me,Ee.meshPerAttribute);k.isInstancedMesh!==!0&&ve._maxInstanceCount===void 0&&(ve._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let Me=0;Me<ge.locationSize;Me++)M(ge.location+Me);s.bindBuffer(s.ARRAY_BUFFER,Ce);for(let Me=0;Me<ge.locationSize;Me++)G(ge.location+Me,Z/ge.locationSize,ze,U,Z*ae,Z/ge.locationSize*Me*ae,Se)}}else if(F!==void 0){const U=F[te];if(U!==void 0)switch(U.length){case 2:s.vertexAttrib2fv(ge.location,U);break;case 3:s.vertexAttrib3fv(ge.location,U);break;case 4:s.vertexAttrib4fv(ge.location,U);break;default:s.vertexAttrib1fv(ge.location,U)}}}}H()}function I(){O();for(const k in r){const Q=r[k];for(const he in Q){const ve=Q[he];for(const J in ve){const z=ve[J];for(const F in z)S(z[F].object),delete z[F];delete ve[J]}}delete r[k]}}function N(k){if(r[k.id]===void 0)return;const Q=r[k.id];for(const he in Q){const ve=Q[he];for(const J in ve){const z=ve[J];for(const F in z)S(z[F].object),delete z[F];delete ve[J]}}delete r[k.id]}function P(k){for(const Q in r){const he=r[Q];for(const ve in he){const J=he[ve];if(J[k.id]===void 0)continue;const z=J[k.id];for(const F in z)S(z[F].object),delete z[F];delete J[k.id]}}}function E(k){for(const Q in r){const he=r[Q],ve=k.isInstancedMesh===!0?k.id:0,J=he[ve];if(J!==void 0){for(const z in J){const F=J[z];for(const te in F)S(F[te].object),delete F[te];delete J[z]}delete he[ve],Object.keys(he).length===0&&delete r[Q]}}}function O(){Y(),d=!0,c!==l&&(c=l,h(c.object))}function Y(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:O,resetDefaultState:Y,dispose:I,releaseStatesOfGeometry:N,releaseStatesOfObject:E,releaseStatesOfProgram:P,initAttributes:D,enableAttribute:M,disableUnusedAttributes:H}}function _b(s,e,i){let r;function l(m){r=m}function c(m,h){s.drawArrays(r,m,h),i.update(h,r,1)}function d(m,h,S){S!==0&&(s.drawArraysInstanced(r,m,h,S),i.update(h,r,S))}function p(m,h,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,h,0,S);let _=0;for(let b=0;b<S;b++)_+=h[b];i.update(_,r,1)}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=p}function vb(s,e,i,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");l=s.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(P){return!(P!==Di&&r.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(P){const E=P===Ma&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==xi&&r.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Gi&&!E)}function m(P){if(P==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp";const S=m(h);S!==h&&(nt("WebGLRenderer:",h,"not supported, using",S,"instead."),h=S);const x=i.logarithmicDepthBuffer===!0,_=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&_===!1&&nt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const b=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),D=s.getParameter(s.MAX_TEXTURE_SIZE),M=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),H=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),G=s.getParameter(s.MAX_VARYING_VECTORS),C=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),I=s.getParameter(s.MAX_SAMPLES),N=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:p,precision:h,logarithmicDepthBuffer:x,reversedDepthBuffer:_,maxTextures:b,maxVertexTextures:A,maxTextureSize:D,maxCubemapSize:M,maxAttributes:v,maxVertexUniforms:H,maxVaryings:G,maxFragmentUniforms:C,maxSamples:I,samples:N}}function xb(s){const e=this;let i=null,r=0,l=!1,c=!1;const d=new Lr,p=new rt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,_){const b=x.length!==0||_||r!==0||l;return l=_,r=x.length,b},this.beginShadows=function(){c=!0,S(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,_){i=S(x,_,0)},this.setState=function(x,_,b){const A=x.clippingPlanes,D=x.clipIntersection,M=x.clipShadows,v=s.get(x);if(!l||A===null||A.length===0||c&&!M)c?S(null):h();else{const H=c?0:r,G=H*4;let C=v.clippingState||null;m.value=C,C=S(A,_,G,b);for(let I=0;I!==G;++I)C[I]=i[I];v.clippingState=C,this.numIntersection=D?this.numPlanes:0,this.numPlanes+=H}};function h(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function S(x,_,b,A){const D=x!==null?x.length:0;let M=null;if(D!==0){if(M=m.value,A!==!0||M===null){const v=b+D*4,H=_.matrixWorldInverse;p.getNormalMatrix(H),(M===null||M.length<v)&&(M=new Float32Array(v));for(let G=0,C=b;G!==D;++G,C+=4)d.copy(x[G]).applyMatrix4(H,p),d.normal.toArray(M,C),M[C+3]=d.constant}m.value=M,m.needsUpdate=!0}return e.numPlanes=D,e.numIntersection=0,M}}const rr=4,__=[.125,.215,.35,.446,.526,.582],Or=20,Sb=256,Go=new xv,v_=new bt;let zd=null,Id=0,Bd=0,Fd=!1;const yb=new le;class x_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,c={}){const{size:d=256,position:p=yb}=c;zd=this._renderer.getRenderTarget(),Id=this._renderer.getActiveCubeFace(),Bd=this._renderer.getActiveMipmapLevel(),Fd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=M_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=y_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(zd,Id,Bd),this._renderer.xr.enabled=Fd,e.scissorTest=!1,Ns(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Ir||e.mapping===Bs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),zd=this._renderer.getRenderTarget(),Id=this._renderer.getActiveCubeFace(),Bd=this._renderer.getActiveMipmapLevel(),Fd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Pn,minFilter:Pn,generateMipmaps:!1,type:Ma,format:Di,colorSpace:kc,depthBuffer:!1},l=S_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=S_(e,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Mb(c)),this._blurMaterial=Eb(c,e,i),this._ggxMaterial=bb(c,e,i)}return l}_compileMaterial(e){const i=new Ea(new Ui,e);this._renderer.compile(i,Go)}_sceneToCubeUV(e,i,r,l,c){const m=new vi(90,1,i,r),h=[1,-1,1,1,1,1],S=[1,1,1,-1,-1,-1],x=this._renderer,_=x.autoClear,b=x.toneMapping;x.getClearColor(v_),x.toneMapping=ki,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(l),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ea(new Ko,new dv({name:"PMREM.Background",side:Yn,depthWrite:!1,depthTest:!1})));const D=this._backgroundBox,M=D.material;let v=!1;const H=e.background;H?H.isColor&&(M.color.copy(H),e.background=null,v=!0):(M.color.copy(v_),v=!0);for(let G=0;G<6;G++){const C=G%3;C===0?(m.up.set(0,h[G],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+S[G],c.y,c.z)):C===1?(m.up.set(0,0,h[G]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+S[G],c.z)):(m.up.set(0,h[G],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+S[G]));const I=this._cubeSize;Ns(l,C*I,G>2?I:0,I,I),x.setRenderTarget(l),v&&x.render(D,m),x.render(e,m)}x.toneMapping=b,x.autoClear=_,e.background=H}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Ir||e.mapping===Bs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=M_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=y_());const c=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=c;const p=c.uniforms;p.envMap.value=e;const m=this._cubeSize;Ns(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(d,Go)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,c=this._pingPongRenderTarget,d=this._ggxMaterial,p=this._lodMeshes[r];p.material=d;const m=d.uniforms,h=r/(this._lodMeshes.length-1),S=i/(this._lodMeshes.length-1),x=Math.sqrt(h*h-S*S),_=0+h*1.25,b=x*_,{_lodMax:A}=this,D=this._sizeLods[r],M=3*D*(r>A-rr?r-A+rr:0),v=4*(this._cubeSize-D);m.envMap.value=e.texture,m.roughness.value=b,m.mipInt.value=A-i,Ns(c,M,v,3*D,2*D),l.setRenderTarget(c),l.render(p,Go),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=A-r,Ns(e,M,v,3*D,2*D),l.setRenderTarget(e),l.render(p,Go)}_blur(e,i,r,l,c){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,r,l,"latitudinal",c),this._halfBlur(d,e,r,r,l,"longitudinal",c)}_halfBlur(e,i,r,l,c,d,p){const m=this._renderer,h=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&Mt("blur direction must be either latitudinal or longitudinal!");const S=3,x=this._lodMeshes[l];x.material=h;const _=h.uniforms,b=this._sizeLods[r]-1,A=isFinite(c)?Math.PI/(2*b):2*Math.PI/(2*Or-1),D=c/A,M=isFinite(c)?1+Math.floor(S*D):Or;M>Or&&nt(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Or}`);const v=[];let H=0;for(let P=0;P<Or;++P){const E=P/D,O=Math.exp(-E*E/2);v.push(O),P===0?H+=O:P<M&&(H+=2*O)}for(let P=0;P<v.length;P++)v[P]=v[P]/H;_.envMap.value=e.texture,_.samples.value=M,_.weights.value=v,_.latitudinal.value=d==="latitudinal",p&&(_.poleAxis.value=p);const{_lodMax:G}=this;_.dTheta.value=A,_.mipInt.value=G-r;const C=this._sizeLods[l],I=3*C*(l>G-rr?l-G+rr:0),N=4*(this._cubeSize-C);Ns(i,I,N,3*C,2*C),m.setRenderTarget(i),m.render(x,Go)}}function Mb(s){const e=[],i=[],r=[];let l=s;const c=s-rr+1+__.length;for(let d=0;d<c;d++){const p=Math.pow(2,l);e.push(p);let m=1/p;d>s-rr?m=__[d-s+rr-1]:d===0&&(m=0),i.push(m);const h=1/(p-2),S=-h,x=1+h,_=[S,S,x,S,x,x,S,S,x,x,S,x],b=6,A=6,D=3,M=2,v=1,H=new Float32Array(D*A*b),G=new Float32Array(M*A*b),C=new Float32Array(v*A*b);for(let N=0;N<b;N++){const P=N%3*2/3-1,E=N>2?0:-1,O=[P,E,0,P+2/3,E,0,P+2/3,E+1,0,P,E,0,P+2/3,E+1,0,P,E+1,0];H.set(O,D*A*N),G.set(_,M*A*N);const Y=[N,N,N,N,N,N];C.set(Y,v*A*N)}const I=new Ui;I.setAttribute("position",new Si(H,D)),I.setAttribute("uv",new Si(G,M)),I.setAttribute("faceIndex",new Si(C,v)),r.push(new Ea(I,null)),l>rr&&l--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function S_(s,e,i){const r=new Xi(s,e,i);return r.texture.mapping=jc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ns(s,e,i,r,l){s.viewport.set(e,i,r,l),s.scissor.set(e,i,r,l)}function bb(s,e,i){return new qi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Sb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Qc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:xa,depthTest:!1,depthWrite:!1})}function Eb(s,e,i){const r=new Float32Array(Or),l=new le(0,1,0);return new qi({name:"SphericalGaussianBlur",defines:{n:Or,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Qc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:xa,depthTest:!1,depthWrite:!1})}function y_(){return new qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:xa,depthTest:!1,depthWrite:!1})}function M_(){return new qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xa,depthTest:!1,depthWrite:!1})}function Qc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Mv extends Xi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new mv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Ko(5,5,5),c=new qi({name:"CubemapFromEquirect",uniforms:Hs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Yn,blending:xa});c.uniforms.tEquirect.value=i;const d=new Ea(l,c),p=i.minFilter;return i.minFilter===Pr&&(i.minFilter=Pn),new wy(1,10,this).update(e,d),i.minFilter=p,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const c=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,r,l);e.setRenderTarget(c)}}function Tb(s){let e=new WeakMap,i=new WeakMap,r=null;function l(_,b=!1){return _==null?null:b?d(_):c(_)}function c(_){if(_&&_.isTexture){const b=_.mapping;if(b===cd||b===ud)if(e.has(_)){const A=e.get(_).texture;return p(A,_.mapping)}else{const A=_.image;if(A&&A.height>0){const D=new Mv(A.height);return D.fromEquirectangularTexture(s,_),e.set(_,D),_.addEventListener("dispose",h),p(D.texture,_.mapping)}else return null}}return _}function d(_){if(_&&_.isTexture){const b=_.mapping,A=b===cd||b===ud,D=b===Ir||b===Bs;if(A||D){let M=i.get(_);const v=M!==void 0?M.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==v)return r===null&&(r=new x_(s)),M=A?r.fromEquirectangular(_,M):r.fromCubemap(_,M),M.texture.pmremVersion=_.pmremVersion,i.set(_,M),M.texture;if(M!==void 0)return M.texture;{const H=_.image;return A&&H&&H.height>0||D&&H&&m(H)?(r===null&&(r=new x_(s)),M=A?r.fromEquirectangular(_):r.fromCubemap(_),M.texture.pmremVersion=_.pmremVersion,i.set(_,M),_.addEventListener("dispose",S),M.texture):null}}}return _}function p(_,b){return b===cd?_.mapping=Ir:b===ud&&(_.mapping=Bs),_}function m(_){let b=0;const A=6;for(let D=0;D<A;D++)_[D]!==void 0&&b++;return b===A}function h(_){const b=_.target;b.removeEventListener("dispose",h);const A=e.get(b);A!==void 0&&(e.delete(b),A.dispose())}function S(_){const b=_.target;b.removeEventListener("dispose",S);const A=i.get(b);A!==void 0&&(i.delete(b),A.dispose())}function x(){e=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:l,dispose:x}}function Ab(s){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=s.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Ps("WebGLRenderer: "+r+" extension not supported."),l}}}function Rb(s,e,i,r){const l={},c=new WeakMap;function d(x){const _=x.target;_.index!==null&&e.remove(_.index);for(const A in _.attributes)e.remove(_.attributes[A]);_.removeEventListener("dispose",d),delete l[_.id];const b=c.get(_);b&&(e.remove(b),c.delete(_)),r.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,i.memory.geometries--}function p(x,_){return l[_.id]===!0||(_.addEventListener("dispose",d),l[_.id]=!0,i.memory.geometries++),_}function m(x){const _=x.attributes;for(const b in _)e.update(_[b],s.ARRAY_BUFFER)}function h(x){const _=[],b=x.index,A=x.attributes.position;let D=0;if(A===void 0)return;if(b!==null){const H=b.array;D=b.version;for(let G=0,C=H.length;G<C;G+=3){const I=H[G+0],N=H[G+1],P=H[G+2];_.push(I,N,N,P,P,I)}}else{const H=A.array;D=A.version;for(let G=0,C=H.length/3-1;G<C;G+=3){const I=G+0,N=G+1,P=G+2;_.push(I,N,N,P,P,I)}}const M=new(A.count>=65535?uv:cv)(_,1);M.version=D;const v=c.get(x);v&&e.remove(v),c.set(x,M)}function S(x){const _=c.get(x);if(_){const b=x.index;b!==null&&_.version<b.version&&h(x)}else h(x);return c.get(x)}return{get:p,update:m,getWireframeAttribute:S}}function Cb(s,e,i){let r;function l(x){r=x}let c,d;function p(x){c=x.type,d=x.bytesPerElement}function m(x,_){s.drawElements(r,_,c,x*d),i.update(_,r,1)}function h(x,_,b){b!==0&&(s.drawElementsInstanced(r,_,c,x*d,b),i.update(_,r,b))}function S(x,_,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,_,0,c,x,0,b);let D=0;for(let M=0;M<b;M++)D+=_[M];i.update(D,r,1)}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=h,this.renderMultiDraw=S}function wb(s){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,d,p){switch(i.calls++,d){case s.TRIANGLES:i.triangles+=p*(c/3);break;case s.LINES:i.lines+=p*(c/2);break;case s.LINE_STRIP:i.lines+=p*(c-1);break;case s.LINE_LOOP:i.lines+=p*c;break;case s.POINTS:i.points+=p*c;break;default:Mt("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function Db(s,e,i){const r=new WeakMap,l=new rn;function c(d,p,m){const h=d.morphTargetInfluences,S=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,x=S!==void 0?S.length:0;let _=r.get(p);if(_===void 0||_.count!==x){let Y=function(){E.dispose(),r.delete(p),p.removeEventListener("dispose",Y)};var b=Y;_!==void 0&&_.texture.dispose();const A=p.morphAttributes.position!==void 0,D=p.morphAttributes.normal!==void 0,M=p.morphAttributes.color!==void 0,v=p.morphAttributes.position||[],H=p.morphAttributes.normal||[],G=p.morphAttributes.color||[];let C=0;A===!0&&(C=1),D===!0&&(C=2),M===!0&&(C=3);let I=p.attributes.position.count*C,N=1;I>e.maxTextureSize&&(N=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const P=new Float32Array(I*N*4*x),E=new sv(P,I,N,x);E.type=Gi,E.needsUpdate=!0;const O=C*4;for(let k=0;k<x;k++){const Q=v[k],he=H[k],ve=G[k],J=I*N*4*k;for(let z=0;z<Q.count;z++){const F=z*O;A===!0&&(l.fromBufferAttribute(Q,z),P[J+F+0]=l.x,P[J+F+1]=l.y,P[J+F+2]=l.z,P[J+F+3]=0),D===!0&&(l.fromBufferAttribute(he,z),P[J+F+4]=l.x,P[J+F+5]=l.y,P[J+F+6]=l.z,P[J+F+7]=0),M===!0&&(l.fromBufferAttribute(ve,z),P[J+F+8]=l.x,P[J+F+9]=l.y,P[J+F+10]=l.z,P[J+F+11]=ve.itemSize===4?l.w:1)}}_={count:x,texture:E,size:new wt(I,N)},r.set(p,_),p.addEventListener("dispose",Y)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",d.morphTexture,i);else{let A=0;for(let M=0;M<h.length;M++)A+=h[M];const D=p.morphTargetsRelative?1:1-A;m.getUniforms().setValue(s,"morphTargetBaseInfluence",D),m.getUniforms().setValue(s,"morphTargetInfluences",h)}m.getUniforms().setValue(s,"morphTargetsTexture",_.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}return{update:c}}function Ub(s,e,i,r,l){let c=new WeakMap;function d(h){const S=l.render.frame,x=h.geometry,_=e.get(h,x);if(c.get(_)!==S&&(e.update(_),c.set(_,S)),h.isInstancedMesh&&(h.hasEventListener("dispose",m)===!1&&h.addEventListener("dispose",m),c.get(h)!==S&&(i.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,s.ARRAY_BUFFER),c.set(h,S))),h.isSkinnedMesh){const b=h.skeleton;c.get(b)!==S&&(b.update(),c.set(b,S))}return _}function p(){c=new WeakMap}function m(h){const S=h.target;S.removeEventListener("dispose",m),r.releaseStatesOfObject(S),i.remove(S.instanceMatrix),S.instanceColor!==null&&i.remove(S.instanceColor)}return{update:d,dispose:p}}const Lb={[X_]:"LINEAR_TONE_MAPPING",[W_]:"REINHARD_TONE_MAPPING",[q_]:"CINEON_TONE_MAPPING",[Y_]:"ACES_FILMIC_TONE_MAPPING",[Z_]:"AGX_TONE_MAPPING",[K_]:"NEUTRAL_TONE_MAPPING",[j_]:"CUSTOM_TONE_MAPPING"};function Nb(s,e,i,r,l,c){const d=new Xi(e,i,{type:s,depthBuffer:l,stencilBuffer:c,samples:r?4:0,depthTexture:l?new Fs(e,i):void 0}),p=new Xi(e,i,{type:Ma,depthBuffer:!1,stencilBuffer:!1}),m=new Ui;m.setAttribute("position",new ya([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new ya([0,2,0,0,2,0],2));const h=new Ay({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),S=new Ea(m,h),x=new xv(-1,1,1,-1,0,1);let _=null,b=null,A=!1,D,M=null,v=[],H=!1;this.setSize=function(G,C){d.setSize(G,C),p.setSize(G,C);for(let I=0;I<v.length;I++){const N=v[I];N.setSize&&N.setSize(G,C)}},this.setEffects=function(G){v=G,H=v.length>0&&v[0].isRenderPass===!0;const C=d.width,I=d.height;for(let N=0;N<v.length;N++){const P=v[N];P.setSize&&P.setSize(C,I)}},this.begin=function(G,C){if(A||G.toneMapping===ki&&v.length===0)return!1;if(M=C,C!==null){const I=C.width,N=C.height;(d.width!==I||d.height!==N)&&this.setSize(I,N)}return H===!1&&G.setRenderTarget(d),D=G.toneMapping,G.toneMapping=ki,!0},this.hasRenderPass=function(){return H},this.end=function(G,C){G.toneMapping=D,A=!0;let I=d,N=p;for(let P=0;P<v.length;P++){const E=v[P];if(E.enabled!==!1&&(E.render(G,N,I,C),E.needsSwap!==!1)){const O=I;I=N,N=O}}if(_!==G.outputColorSpace||b!==G.toneMapping){_=G.outputColorSpace,b=G.toneMapping,h.defines={},St.getTransfer(_)===It&&(h.defines.SRGB_TRANSFER="");const P=Lb[b];P&&(h.defines[P]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=I.texture,G.setRenderTarget(M),G.render(S,x),M=null,A=!1},this.isCompositing=function(){return A},this.dispose=function(){d.depthTexture&&d.depthTexture.dispose(),d.dispose(),p.dispose(),m.dispose(),h.dispose()}}const bv=new Bn,Lh=new Fs(1,1),Ev=new sv,Tv=new ny,Av=new mv,b_=[],E_=[],T_=new Float32Array(16),A_=new Float32Array(9),R_=new Float32Array(4);function Vs(s,e,i){const r=s[0];if(r<=0||r>0)return s;const l=e*i;let c=b_[l];if(c===void 0&&(c=new Float32Array(l),b_[l]=c),e!==0){r.toArray(c,0);for(let d=1,p=0;d!==e;++d)p+=i,s[d].toArray(c,p)}return c}function xn(s,e){if(s.length!==e.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==e[i])return!1;return!0}function Sn(s,e){for(let i=0,r=e.length;i<r;i++)s[i]=e[i]}function Jc(s,e){let i=E_[e];i===void 0&&(i=new Int32Array(e),E_[e]=i);for(let r=0;r!==e;++r)i[r]=s.allocateTextureUnit();return i}function Ob(s,e){const i=this.cache;i[0]!==e&&(s.uniform1f(this.addr,e),i[0]=e)}function Pb(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(xn(i,e))return;s.uniform2fv(this.addr,e),Sn(i,e)}}function zb(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(xn(i,e))return;s.uniform3fv(this.addr,e),Sn(i,e)}}function Ib(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(xn(i,e))return;s.uniform4fv(this.addr,e),Sn(i,e)}}function Bb(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(xn(i,e))return;s.uniformMatrix2fv(this.addr,!1,e),Sn(i,e)}else{if(xn(i,r))return;R_.set(r),s.uniformMatrix2fv(this.addr,!1,R_),Sn(i,r)}}function Fb(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(xn(i,e))return;s.uniformMatrix3fv(this.addr,!1,e),Sn(i,e)}else{if(xn(i,r))return;A_.set(r),s.uniformMatrix3fv(this.addr,!1,A_),Sn(i,r)}}function Hb(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(xn(i,e))return;s.uniformMatrix4fv(this.addr,!1,e),Sn(i,e)}else{if(xn(i,r))return;T_.set(r),s.uniformMatrix4fv(this.addr,!1,T_),Sn(i,r)}}function Gb(s,e){const i=this.cache;i[0]!==e&&(s.uniform1i(this.addr,e),i[0]=e)}function Vb(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(xn(i,e))return;s.uniform2iv(this.addr,e),Sn(i,e)}}function kb(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(xn(i,e))return;s.uniform3iv(this.addr,e),Sn(i,e)}}function Xb(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(xn(i,e))return;s.uniform4iv(this.addr,e),Sn(i,e)}}function Wb(s,e){const i=this.cache;i[0]!==e&&(s.uniform1ui(this.addr,e),i[0]=e)}function qb(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(xn(i,e))return;s.uniform2uiv(this.addr,e),Sn(i,e)}}function Yb(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(xn(i,e))return;s.uniform3uiv(this.addr,e),Sn(i,e)}}function jb(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(xn(i,e))return;s.uniform4uiv(this.addr,e),Sn(i,e)}}function Zb(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(Lh.compareFunction=i.isReversedDepthBuffer()?Xh:kh,c=Lh):c=bv,i.setTexture2D(e||c,l)}function Kb(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||Tv,l)}function Qb(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||Av,l)}function Jb(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||Ev,l)}function $b(s){switch(s){case 5126:return Ob;case 35664:return Pb;case 35665:return zb;case 35666:return Ib;case 35674:return Bb;case 35675:return Fb;case 35676:return Hb;case 5124:case 35670:return Gb;case 35667:case 35671:return Vb;case 35668:case 35672:return kb;case 35669:case 35673:return Xb;case 5125:return Wb;case 36294:return qb;case 36295:return Yb;case 36296:return jb;case 35678:case 36198:case 36298:case 36306:case 35682:return Zb;case 35679:case 36299:case 36307:return Kb;case 35680:case 36300:case 36308:case 36293:return Qb;case 36289:case 36303:case 36311:case 36292:return Jb}}function eE(s,e){s.uniform1fv(this.addr,e)}function tE(s,e){const i=Vs(e,this.size,2);s.uniform2fv(this.addr,i)}function nE(s,e){const i=Vs(e,this.size,3);s.uniform3fv(this.addr,i)}function iE(s,e){const i=Vs(e,this.size,4);s.uniform4fv(this.addr,i)}function aE(s,e){const i=Vs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function rE(s,e){const i=Vs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function sE(s,e){const i=Vs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function oE(s,e){s.uniform1iv(this.addr,e)}function lE(s,e){s.uniform2iv(this.addr,e)}function cE(s,e){s.uniform3iv(this.addr,e)}function uE(s,e){s.uniform4iv(this.addr,e)}function fE(s,e){s.uniform1uiv(this.addr,e)}function dE(s,e){s.uniform2uiv(this.addr,e)}function hE(s,e){s.uniform3uiv(this.addr,e)}function pE(s,e){s.uniform4uiv(this.addr,e)}function mE(s,e,i){const r=this.cache,l=e.length,c=Jc(i,l);xn(r,c)||(s.uniform1iv(this.addr,c),Sn(r,c));let d;this.type===s.SAMPLER_2D_SHADOW?d=Lh:d=bv;for(let p=0;p!==l;++p)i.setTexture2D(e[p]||d,c[p])}function gE(s,e,i){const r=this.cache,l=e.length,c=Jc(i,l);xn(r,c)||(s.uniform1iv(this.addr,c),Sn(r,c));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||Tv,c[d])}function _E(s,e,i){const r=this.cache,l=e.length,c=Jc(i,l);xn(r,c)||(s.uniform1iv(this.addr,c),Sn(r,c));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||Av,c[d])}function vE(s,e,i){const r=this.cache,l=e.length,c=Jc(i,l);xn(r,c)||(s.uniform1iv(this.addr,c),Sn(r,c));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||Ev,c[d])}function xE(s){switch(s){case 5126:return eE;case 35664:return tE;case 35665:return nE;case 35666:return iE;case 35674:return aE;case 35675:return rE;case 35676:return sE;case 5124:case 35670:return oE;case 35667:case 35671:return lE;case 35668:case 35672:return cE;case 35669:case 35673:return uE;case 5125:return fE;case 36294:return dE;case 36295:return hE;case 36296:return pE;case 35678:case 36198:case 36298:case 36306:case 35682:return mE;case 35679:case 36299:case 36307:return gE;case 35680:case 36300:case 36308:case 36293:return _E;case 36289:case 36303:case 36311:case 36292:return vE}}class SE{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=$b(i.type)}}class yE{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=xE(i.type)}}class ME{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const p=l[c];p.setValue(e,i[p.id],r)}}}const Hd=/(\w+)(\])?(\[|\.)?/g;function C_(s,e){s.seq.push(e),s.map[e.id]=e}function bE(s,e,i){const r=s.name,l=r.length;for(Hd.lastIndex=0;;){const c=Hd.exec(r),d=Hd.lastIndex;let p=c[1];const m=c[2]==="]",h=c[3];if(m&&(p=p|0),h===void 0||h==="["&&d+2===l){C_(i,h===void 0?new SE(p,s,e):new yE(p,s,e));break}else{let x=i.map[p];x===void 0&&(x=new ME(p),C_(i,x)),i=x}}}class Bc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let d=0;d<r;++d){const p=e.getActiveUniform(i,d),m=e.getUniformLocation(i,p.name);bE(p,m,this)}const l=[],c=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(d):c.push(d);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let c=0,d=i.length;c!==d;++c){const p=i[c],m=r[p.id];m.needsUpdate!==!1&&p.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,c=e.length;l!==c;++l){const d=e[l];d.id in i&&r.push(d)}return r}}function w_(s,e,i){const r=s.createShader(e);return s.shaderSource(r,i),s.compileShader(r),r}const EE=37297;let TE=0;function AE(s,e){const i=s.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let d=l;d<c;d++){const p=d+1;r.push(`${p===e?">":" "} ${p}: ${i[d]}`)}return r.join(`
`)}const D_=new rt;function RE(s){St._getMatrix(D_,St.workingColorSpace,s);const e=`mat3( ${D_.elements.map(i=>i.toFixed(4))} )`;switch(St.getTransfer(s)){case Xc:return[e,"LinearTransferOETF"];case It:return[e,"sRGBTransferOETF"];default:return nt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function U_(s,e,i){const r=s.getShaderParameter(e,s.COMPILE_STATUS),c=(s.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const p=parseInt(d[1]);return i.toUpperCase()+`

`+c+`

`+AE(s.getShaderSource(e),p)}else return c}function CE(s,e){const i=RE(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const wE={[X_]:"Linear",[W_]:"Reinhard",[q_]:"Cineon",[Y_]:"ACESFilmic",[Z_]:"AgX",[K_]:"Neutral",[j_]:"Custom"};function DE(s,e){const i=wE[e];return i===void 0?(nt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Lc=new le;function UE(){St.getLuminanceCoefficients(Lc);const s=Lc.x.toFixed(4),e=Lc.y.toFixed(4),i=Lc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function LE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xo).join(`
`)}function NE(s){const e=[];for(const i in s){const r=s[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function OE(s,e){const i={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(e,l),d=c.name;let p=1;c.type===s.FLOAT_MAT2&&(p=2),c.type===s.FLOAT_MAT3&&(p=3),c.type===s.FLOAT_MAT4&&(p=4),i[d]={type:c.type,location:s.getAttribLocation(e,d),locationSize:p}}return i}function Xo(s){return s!==""}function L_(s,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function N_(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const PE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nh(s){return s.replace(PE,IE)}const zE=new Map;function IE(s,e){let i=ct[e];if(i===void 0){const r=zE.get(e);if(r!==void 0)i=ct[r],nt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Nh(i)}const BE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function O_(s){return s.replace(BE,FE)}function FE(s,e,i,r){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function P_(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const HE={[Nc]:"SHADOWMAP_TYPE_PCF",[ko]:"SHADOWMAP_TYPE_VSM"};function GE(s){return HE[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const VE={[Ir]:"ENVMAP_TYPE_CUBE",[Bs]:"ENVMAP_TYPE_CUBE",[jc]:"ENVMAP_TYPE_CUBE_UV"};function kE(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":VE[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const XE={[Bs]:"ENVMAP_MODE_REFRACTION"};function WE(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":XE[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const qE={[k_]:"ENVMAP_BLENDING_MULTIPLY",[PS]:"ENVMAP_BLENDING_MIX",[zS]:"ENVMAP_BLENDING_ADD"};function YE(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":qE[s.combine]||"ENVMAP_BLENDING_NONE"}function jE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function ZE(s,e,i,r){const l=s.getContext(),c=i.defines;let d=i.vertexShader,p=i.fragmentShader;const m=GE(i),h=kE(i),S=WE(i),x=YE(i),_=jE(i),b=LE(i),A=NE(c),D=l.createProgram();let M,v,H=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Xo).join(`
`),M.length>0&&(M+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Xo).join(`
`),v.length>0&&(v+=`
`)):(M=[P_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+S:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xo).join(`
`),v=[P_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+S:"",i.envMap?"#define "+x:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ki?"#define TONE_MAPPING":"",i.toneMapping!==ki?ct.tonemapping_pars_fragment:"",i.toneMapping!==ki?DE("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,CE("linearToOutputTexel",i.outputColorSpace),UE(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Xo).join(`
`)),d=Nh(d),d=L_(d,i),d=N_(d,i),p=Nh(p),p=L_(p,i),p=N_(p,i),d=O_(d),p=O_(p),i.isRawShaderMaterial!==!0&&(H=`#version 300 es
`,M=[b,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,v=["#define varying in",i.glslVersion===Yg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Yg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const G=H+M+d,C=H+v+p,I=w_(l,l.VERTEX_SHADER,G),N=w_(l,l.FRAGMENT_SHADER,C);l.attachShader(D,I),l.attachShader(D,N),i.index0AttributeName!==void 0?l.bindAttribLocation(D,0,i.index0AttributeName):i.hasPositionAttribute===!0&&l.bindAttribLocation(D,0,"position"),l.linkProgram(D);function P(k){if(s.debug.checkShaderErrors){const Q=l.getProgramInfoLog(D)||"",he=l.getShaderInfoLog(I)||"",ve=l.getShaderInfoLog(N)||"",J=Q.trim(),z=he.trim(),F=ve.trim();let te=!0,ge=!0;if(l.getProgramParameter(D,l.LINK_STATUS)===!1)if(te=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,D,I,N);else{const Ee=U_(l,I,"vertex"),U=U_(l,N,"fragment");Mt("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(D,l.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+J+`
`+Ee+`
`+U)}else J!==""?nt("WebGLProgram: Program Info Log:",J):(z===""||F==="")&&(ge=!1);ge&&(k.diagnostics={runnable:te,programLog:J,vertexShader:{log:z,prefix:M},fragmentShader:{log:F,prefix:v}})}l.deleteShader(I),l.deleteShader(N),E=new Bc(l,D),O=OE(l,D)}let E;this.getUniforms=function(){return E===void 0&&P(this),E};let O;this.getAttributes=function(){return O===void 0&&P(this),O};let Y=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Y===!1&&(Y=l.getProgramParameter(D,EE)),Y},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(D),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=TE++,this.cacheKey=e,this.usedTimes=1,this.program=D,this.vertexShader=I,this.fragmentShader=N,this}let KE=0;class QE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,r){const l=this._getShaderCacheForMaterial(e);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(r)===!1&&(l.add(r),r.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new JE(e),i.set(e,r)),r}}class JE{constructor(e){this.id=KE++,this.code=e,this.usedTimes=0}}function $E(s){return s===Br||s===Gc||s===Vc}function e3(s,e,i,r,l,c){const d=new ov,p=new QE,m=new Set,h=[],S=new Map,x=r.logarithmicDepthBuffer;let _=r.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(E){return m.add(E),E===0?"uv":`uv${E}`}function D(E,O,Y,k,Q,he){const ve=k.fog,J=Q.geometry,z=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?k.environment:null,F=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,te=e.get(E.envMap||z,F),ge=te&&te.mapping===jc?te.image.height:null,Ee=b[E.type];E.precision!==null&&(_=r.getMaxPrecision(E.precision),_!==E.precision&&nt("WebGLProgram.getParameters:",E.precision,"not supported, using",_,"instead."));const U=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Z=U!==void 0?U.length:0;let be=0;J.morphAttributes.position!==void 0&&(be=1),J.morphAttributes.normal!==void 0&&(be=2),J.morphAttributes.color!==void 0&&(be=3);let Ce,ze,ae,Se;if(Ee){const Ve=Hi[Ee];Ce=Ve.vertexShader,ze=Ve.fragmentShader}else{Ce=E.vertexShader,ze=E.fragmentShader;const Ve=p.getVertexShaderStage(E),jt=p.getFragmentShaderStage(E);p.update(E,Ve,jt),ae=Ve.id,Se=jt.id}const Me=s.getRenderTarget(),He=s.state.buffers.depth.getReversed(),tt=Q.isInstancedMesh===!0,Ke=Q.isBatchedMesh===!0,Wt=!!E.map,ut=!!E.matcap,_t=!!te,vt=!!E.aoMap,ft=!!E.lightMap,Jt=!!E.bumpMap&&E.wireframe===!1,$t=!!E.normalMap,en=!!E.displacementMap,sn=!!E.emissiveMap,Xt=!!E.metalnessMap,tn=!!E.roughnessMap,q=E.anisotropy>0,Bt=E.clearcoat>0,Rt=E.dispersion>0,w=E.iridescence>0,y=E.sheen>0,K=E.transmission>0,re=q&&!!E.anisotropyMap,fe=Bt&&!!E.clearcoatMap,Te=Bt&&!!E.clearcoatNormalMap,De=Bt&&!!E.clearcoatRoughnessMap,ue=w&&!!E.iridescenceMap,de=w&&!!E.iridescenceThicknessMap,Re=y&&!!E.sheenColorMap,Be=y&&!!E.sheenRoughnessMap,Ne=!!E.specularMap,Ue=!!E.specularColorMap,Ze=!!E.specularIntensityMap,Qe=K&&!!E.transmissionMap,it=K&&!!E.thicknessMap,X=!!E.gradientMap,Ae=!!E.alphaMap,me=E.alphaTest>0,we=!!E.alphaHash,Ie=!!E.extensions;let ye=ki;E.toneMapped&&(Me===null||Me.isXRRenderTarget===!0)&&(ye=s.toneMapping);const qe={shaderID:Ee,shaderType:E.type,shaderName:E.name,vertexShader:Ce,fragmentShader:ze,defines:E.defines,customVertexShaderID:ae,customFragmentShaderID:Se,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:_,batching:Ke,batchingColor:Ke&&Q._colorsTexture!==null,instancing:tt,instancingColor:tt&&Q.instanceColor!==null,instancingMorph:tt&&Q.morphTexture!==null,outputColorSpace:Me===null?s.outputColorSpace:Me.isXRRenderTarget===!0?Me.texture.colorSpace:St.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:Wt,matcap:ut,envMap:_t,envMapMode:_t&&te.mapping,envMapCubeUVHeight:ge,aoMap:vt,lightMap:ft,bumpMap:Jt,normalMap:$t,displacementMap:en,emissiveMap:sn,normalMapObjectSpace:$t&&E.normalMapType===FS,normalMapTangentSpace:$t&&E.normalMapType===Xg,packedNormalMap:$t&&E.normalMapType===Xg&&$E(E.normalMap.format),metalnessMap:Xt,roughnessMap:tn,anisotropy:q,anisotropyMap:re,clearcoat:Bt,clearcoatMap:fe,clearcoatNormalMap:Te,clearcoatRoughnessMap:De,dispersion:Rt,iridescence:w,iridescenceMap:ue,iridescenceThicknessMap:de,sheen:y,sheenColorMap:Re,sheenRoughnessMap:Be,specularMap:Ne,specularColorMap:Ue,specularIntensityMap:Ze,transmission:K,transmissionMap:Qe,thicknessMap:it,gradientMap:X,opaque:E.transparent===!1&&E.blending===Os&&E.alphaToCoverage===!1,alphaMap:Ae,alphaTest:me,alphaHash:we,combine:E.combine,mapUv:Wt&&A(E.map.channel),aoMapUv:vt&&A(E.aoMap.channel),lightMapUv:ft&&A(E.lightMap.channel),bumpMapUv:Jt&&A(E.bumpMap.channel),normalMapUv:$t&&A(E.normalMap.channel),displacementMapUv:en&&A(E.displacementMap.channel),emissiveMapUv:sn&&A(E.emissiveMap.channel),metalnessMapUv:Xt&&A(E.metalnessMap.channel),roughnessMapUv:tn&&A(E.roughnessMap.channel),anisotropyMapUv:re&&A(E.anisotropyMap.channel),clearcoatMapUv:fe&&A(E.clearcoatMap.channel),clearcoatNormalMapUv:Te&&A(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:De&&A(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&A(E.iridescenceMap.channel),iridescenceThicknessMapUv:de&&A(E.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&A(E.sheenColorMap.channel),sheenRoughnessMapUv:Be&&A(E.sheenRoughnessMap.channel),specularMapUv:Ne&&A(E.specularMap.channel),specularColorMapUv:Ue&&A(E.specularColorMap.channel),specularIntensityMapUv:Ze&&A(E.specularIntensityMap.channel),transmissionMapUv:Qe&&A(E.transmissionMap.channel),thicknessMapUv:it&&A(E.thicknessMap.channel),alphaMapUv:Ae&&A(E.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&($t||q),vertexNormals:!!J.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!J.attributes.uv&&(Wt||Ae),fog:!!ve,useFog:E.fog===!0,fogExp2:!!ve&&ve.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||J.attributes.normal===void 0&&$t===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:He,skinning:Q.isSkinnedMesh===!0,hasPositionAttribute:J.attributes.position!==void 0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:be,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numSpotLightMaps:O.spotLightMap.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numSpotLightShadowsWithMaps:O.numSpotLightShadowsWithMaps,numLightProbes:O.numLightProbes,numLightProbeGrids:he.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&Y.length>0,shadowMapType:s.shadowMap.type,toneMapping:ye,decodeVideoTexture:Wt&&E.map.isVideoTexture===!0&&St.getTransfer(E.map.colorSpace)===It,decodeVideoTextureEmissive:sn&&E.emissiveMap.isVideoTexture===!0&&St.getTransfer(E.emissiveMap.colorSpace)===It,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===_a,flipSided:E.side===Yn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ie&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&E.extensions.multiDraw===!0||Ke)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return qe.vertexUv1s=m.has(1),qe.vertexUv2s=m.has(2),qe.vertexUv3s=m.has(3),m.clear(),qe}function M(E){const O=[];if(E.shaderID?O.push(E.shaderID):(O.push(E.customVertexShaderID),O.push(E.customFragmentShaderID)),E.defines!==void 0)for(const Y in E.defines)O.push(Y),O.push(E.defines[Y]);return E.isRawShaderMaterial===!1&&(v(O,E),H(O,E),O.push(s.outputColorSpace)),O.push(E.customProgramCacheKey),O.join()}function v(E,O){E.push(O.precision),E.push(O.outputColorSpace),E.push(O.envMapMode),E.push(O.envMapCubeUVHeight),E.push(O.mapUv),E.push(O.alphaMapUv),E.push(O.lightMapUv),E.push(O.aoMapUv),E.push(O.bumpMapUv),E.push(O.normalMapUv),E.push(O.displacementMapUv),E.push(O.emissiveMapUv),E.push(O.metalnessMapUv),E.push(O.roughnessMapUv),E.push(O.anisotropyMapUv),E.push(O.clearcoatMapUv),E.push(O.clearcoatNormalMapUv),E.push(O.clearcoatRoughnessMapUv),E.push(O.iridescenceMapUv),E.push(O.iridescenceThicknessMapUv),E.push(O.sheenColorMapUv),E.push(O.sheenRoughnessMapUv),E.push(O.specularMapUv),E.push(O.specularColorMapUv),E.push(O.specularIntensityMapUv),E.push(O.transmissionMapUv),E.push(O.thicknessMapUv),E.push(O.combine),E.push(O.fogExp2),E.push(O.sizeAttenuation),E.push(O.morphTargetsCount),E.push(O.morphAttributeCount),E.push(O.numDirLights),E.push(O.numPointLights),E.push(O.numSpotLights),E.push(O.numSpotLightMaps),E.push(O.numHemiLights),E.push(O.numRectAreaLights),E.push(O.numDirLightShadows),E.push(O.numPointLightShadows),E.push(O.numSpotLightShadows),E.push(O.numSpotLightShadowsWithMaps),E.push(O.numLightProbes),E.push(O.shadowMapType),E.push(O.toneMapping),E.push(O.numClippingPlanes),E.push(O.numClipIntersection),E.push(O.depthPacking)}function H(E,O){d.disableAll(),O.instancing&&d.enable(0),O.instancingColor&&d.enable(1),O.instancingMorph&&d.enable(2),O.matcap&&d.enable(3),O.envMap&&d.enable(4),O.normalMapObjectSpace&&d.enable(5),O.normalMapTangentSpace&&d.enable(6),O.clearcoat&&d.enable(7),O.iridescence&&d.enable(8),O.alphaTest&&d.enable(9),O.vertexColors&&d.enable(10),O.vertexAlphas&&d.enable(11),O.vertexUv1s&&d.enable(12),O.vertexUv2s&&d.enable(13),O.vertexUv3s&&d.enable(14),O.vertexTangents&&d.enable(15),O.anisotropy&&d.enable(16),O.alphaHash&&d.enable(17),O.batching&&d.enable(18),O.dispersion&&d.enable(19),O.batchingColor&&d.enable(20),O.gradientMap&&d.enable(21),O.packedNormalMap&&d.enable(22),O.vertexNormals&&d.enable(23),E.push(d.mask),d.disableAll(),O.fog&&d.enable(0),O.useFog&&d.enable(1),O.flatShading&&d.enable(2),O.logarithmicDepthBuffer&&d.enable(3),O.reversedDepthBuffer&&d.enable(4),O.skinning&&d.enable(5),O.morphTargets&&d.enable(6),O.morphNormals&&d.enable(7),O.morphColors&&d.enable(8),O.premultipliedAlpha&&d.enable(9),O.shadowMapEnabled&&d.enable(10),O.doubleSided&&d.enable(11),O.flipSided&&d.enable(12),O.useDepthPacking&&d.enable(13),O.dithering&&d.enable(14),O.transmission&&d.enable(15),O.sheen&&d.enable(16),O.opaque&&d.enable(17),O.pointsUvs&&d.enable(18),O.decodeVideoTexture&&d.enable(19),O.decodeVideoTextureEmissive&&d.enable(20),O.alphaToCoverage&&d.enable(21),O.numLightProbeGrids>0&&d.enable(22),O.hasPositionAttribute&&d.enable(23),E.push(d.mask)}function G(E){const O=b[E.type];let Y;if(O){const k=Hi[O];Y=by.clone(k.uniforms)}else Y=E.uniforms;return Y}function C(E,O){let Y=S.get(O);return Y!==void 0?++Y.usedTimes:(Y=new ZE(s,O,E,l),h.push(Y),S.set(O,Y)),Y}function I(E){if(--E.usedTimes===0){const O=h.indexOf(E);h[O]=h[h.length-1],h.pop(),S.delete(E.cacheKey),E.destroy()}}function N(E){p.remove(E)}function P(){p.dispose()}return{getParameters:D,getProgramCacheKey:M,getUniforms:G,acquireProgram:C,releaseProgram:I,releaseShaderCache:N,programs:h,dispose:P}}function t3(){let s=new WeakMap;function e(d){return s.has(d)}function i(d){let p=s.get(d);return p===void 0&&(p={},s.set(d,p)),p}function r(d){s.delete(d)}function l(d,p,m){s.get(d)[p]=m}function c(){s=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:c}}function n3(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function z_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function I_(){const s=[];let e=0;const i=[],r=[],l=[];function c(){e=0,i.length=0,r.length=0,l.length=0}function d(_){let b=0;return _.isInstancedMesh&&(b+=2),_.isSkinnedMesh&&(b+=1),b}function p(_,b,A,D,M,v){let H=s[e];return H===void 0?(H={id:_.id,object:_,geometry:b,material:A,materialVariant:d(_),groupOrder:D,renderOrder:_.renderOrder,z:M,group:v},s[e]=H):(H.id=_.id,H.object=_,H.geometry=b,H.material=A,H.materialVariant=d(_),H.groupOrder=D,H.renderOrder=_.renderOrder,H.z=M,H.group=v),e++,H}function m(_,b,A,D,M,v){const H=p(_,b,A,D,M,v);A.transmission>0?r.push(H):A.transparent===!0?l.push(H):i.push(H)}function h(_,b,A,D,M,v){const H=p(_,b,A,D,M,v);A.transmission>0?r.unshift(H):A.transparent===!0?l.unshift(H):i.unshift(H)}function S(_,b,A){i.length>1&&i.sort(_||n3),r.length>1&&r.sort(b||z_),l.length>1&&l.sort(b||z_),A&&(i.reverse(),r.reverse(),l.reverse())}function x(){for(let _=e,b=s.length;_<b;_++){const A=s[_];if(A.id===null)break;A.id=null,A.object=null,A.geometry=null,A.material=null,A.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:m,unshift:h,finish:x,sort:S}}function i3(){let s=new WeakMap;function e(r,l){const c=s.get(r);let d;return c===void 0?(d=new I_,s.set(r,[d])):l>=c.length?(d=new I_,c.push(d)):d=c[l],d}function i(){s=new WeakMap}return{get:e,dispose:i}}function a3(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new le,color:new bt};break;case"SpotLight":i={position:new le,direction:new le,color:new bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new le,color:new bt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new le,skyColor:new bt,groundColor:new bt};break;case"RectAreaLight":i={color:new bt,position:new le,halfWidth:new le,halfHeight:new le};break}return s[e.id]=i,i}}}function r3(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=i,i}}}let s3=0;function o3(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function l3(s){const e=new a3,i=r3(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new le);const l=new le,c=new cn,d=new cn;function p(h){let S=0,x=0,_=0;for(let O=0;O<9;O++)r.probe[O].set(0,0,0);let b=0,A=0,D=0,M=0,v=0,H=0,G=0,C=0,I=0,N=0,P=0;h.sort(o3);for(let O=0,Y=h.length;O<Y;O++){const k=h[O],Q=k.color,he=k.intensity,ve=k.distance;let J=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===Br?J=k.shadow.map.texture:J=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)S+=Q.r*he,x+=Q.g*he,_+=Q.b*he;else if(k.isLightProbe){for(let z=0;z<9;z++)r.probe[z].addScaledVector(k.sh.coefficients[z],he);P++}else if(k.isDirectionalLight){const z=e.get(k);if(z.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const F=k.shadow,te=i.get(k);te.shadowIntensity=F.intensity,te.shadowBias=F.bias,te.shadowNormalBias=F.normalBias,te.shadowRadius=F.radius,te.shadowMapSize=F.mapSize,r.directionalShadow[b]=te,r.directionalShadowMap[b]=J,r.directionalShadowMatrix[b]=k.shadow.matrix,H++}r.directional[b]=z,b++}else if(k.isSpotLight){const z=e.get(k);z.position.setFromMatrixPosition(k.matrixWorld),z.color.copy(Q).multiplyScalar(he),z.distance=ve,z.coneCos=Math.cos(k.angle),z.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),z.decay=k.decay,r.spot[D]=z;const F=k.shadow;if(k.map&&(r.spotLightMap[I]=k.map,I++,F.updateMatrices(k),k.castShadow&&N++),r.spotLightMatrix[D]=F.matrix,k.castShadow){const te=i.get(k);te.shadowIntensity=F.intensity,te.shadowBias=F.bias,te.shadowNormalBias=F.normalBias,te.shadowRadius=F.radius,te.shadowMapSize=F.mapSize,r.spotShadow[D]=te,r.spotShadowMap[D]=J,C++}D++}else if(k.isRectAreaLight){const z=e.get(k);z.color.copy(Q).multiplyScalar(he),z.halfWidth.set(k.width*.5,0,0),z.halfHeight.set(0,k.height*.5,0),r.rectArea[M]=z,M++}else if(k.isPointLight){const z=e.get(k);if(z.color.copy(k.color).multiplyScalar(k.intensity),z.distance=k.distance,z.decay=k.decay,k.castShadow){const F=k.shadow,te=i.get(k);te.shadowIntensity=F.intensity,te.shadowBias=F.bias,te.shadowNormalBias=F.normalBias,te.shadowRadius=F.radius,te.shadowMapSize=F.mapSize,te.shadowCameraNear=F.camera.near,te.shadowCameraFar=F.camera.far,r.pointShadow[A]=te,r.pointShadowMap[A]=J,r.pointShadowMatrix[A]=k.shadow.matrix,G++}r.point[A]=z,A++}else if(k.isHemisphereLight){const z=e.get(k);z.skyColor.copy(k.color).multiplyScalar(he),z.groundColor.copy(k.groundColor).multiplyScalar(he),r.hemi[v]=z,v++}}M>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Pe.LTC_FLOAT_1,r.rectAreaLTC2=Pe.LTC_FLOAT_2):(r.rectAreaLTC1=Pe.LTC_HALF_1,r.rectAreaLTC2=Pe.LTC_HALF_2)),r.ambient[0]=S,r.ambient[1]=x,r.ambient[2]=_;const E=r.hash;(E.directionalLength!==b||E.pointLength!==A||E.spotLength!==D||E.rectAreaLength!==M||E.hemiLength!==v||E.numDirectionalShadows!==H||E.numPointShadows!==G||E.numSpotShadows!==C||E.numSpotMaps!==I||E.numLightProbes!==P)&&(r.directional.length=b,r.spot.length=D,r.rectArea.length=M,r.point.length=A,r.hemi.length=v,r.directionalShadow.length=H,r.directionalShadowMap.length=H,r.pointShadow.length=G,r.pointShadowMap.length=G,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=H,r.pointShadowMatrix.length=G,r.spotLightMatrix.length=C+I-N,r.spotLightMap.length=I,r.numSpotLightShadowsWithMaps=N,r.numLightProbes=P,E.directionalLength=b,E.pointLength=A,E.spotLength=D,E.rectAreaLength=M,E.hemiLength=v,E.numDirectionalShadows=H,E.numPointShadows=G,E.numSpotShadows=C,E.numSpotMaps=I,E.numLightProbes=P,r.version=s3++)}function m(h,S){let x=0,_=0,b=0,A=0,D=0;const M=S.matrixWorldInverse;for(let v=0,H=h.length;v<H;v++){const G=h[v];if(G.isDirectionalLight){const C=r.directional[x];C.direction.setFromMatrixPosition(G.matrixWorld),l.setFromMatrixPosition(G.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(M),x++}else if(G.isSpotLight){const C=r.spot[b];C.position.setFromMatrixPosition(G.matrixWorld),C.position.applyMatrix4(M),C.direction.setFromMatrixPosition(G.matrixWorld),l.setFromMatrixPosition(G.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(M),b++}else if(G.isRectAreaLight){const C=r.rectArea[A];C.position.setFromMatrixPosition(G.matrixWorld),C.position.applyMatrix4(M),d.identity(),c.copy(G.matrixWorld),c.premultiply(M),d.extractRotation(c),C.halfWidth.set(G.width*.5,0,0),C.halfHeight.set(0,G.height*.5,0),C.halfWidth.applyMatrix4(d),C.halfHeight.applyMatrix4(d),A++}else if(G.isPointLight){const C=r.point[_];C.position.setFromMatrixPosition(G.matrixWorld),C.position.applyMatrix4(M),_++}else if(G.isHemisphereLight){const C=r.hemi[D];C.direction.setFromMatrixPosition(G.matrixWorld),C.direction.transformDirection(M),D++}}}return{setup:p,setupView:m,state:r}}function B_(s){const e=new l3(s),i=[],r=[],l=[];function c(_){x.camera=_,i.length=0,r.length=0,l.length=0}function d(_){i.push(_)}function p(_){r.push(_)}function m(_){l.push(_)}function h(){e.setup(i)}function S(_){e.setupView(i,_)}const x={lightsArray:i,shadowsArray:r,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:x,setupLights:h,setupLightsView:S,pushLight:d,pushShadow:p,pushLightProbeGrid:m}}function c3(s){let e=new WeakMap;function i(l,c=0){const d=e.get(l);let p;return d===void 0?(p=new B_(s),e.set(l,[p])):c>=d.length?(p=new B_(s),d.push(p)):p=d[c],p}function r(){e=new WeakMap}return{get:i,dispose:r}}const u3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,f3=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,d3=[new le(1,0,0),new le(-1,0,0),new le(0,1,0),new le(0,-1,0),new le(0,0,1),new le(0,0,-1)],h3=[new le(0,-1,0),new le(0,-1,0),new le(0,0,1),new le(0,0,-1),new le(0,-1,0),new le(0,-1,0)],F_=new cn,Vo=new le,Gd=new le;function p3(s,e,i){let r=new hv;const l=new wt,c=new wt,d=new rn,p=new Ry,m=new Cy,h={},S=i.maxTextureSize,x={[or]:Yn,[Yn]:or,[_a]:_a},_=new qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new wt},radius:{value:4}},vertexShader:u3,fragmentShader:f3}),b=_.clone();b.defines.HORIZONTAL_PASS=1;const A=new Ui;A.setAttribute("position",new Si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const D=new Ea(A,_),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nc;let v=this.type;this.render=function(N,P,E){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||N.length===0)return;this.type===gS&&(nt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Nc);const O=s.getRenderTarget(),Y=s.getActiveCubeFace(),k=s.getActiveMipmapLevel(),Q=s.state;Q.setBlending(xa),Q.buffers.depth.getReversed()===!0?Q.buffers.color.setClear(0,0,0,0):Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const he=v!==this.type;he&&P.traverse(function(ve){ve.material&&(Array.isArray(ve.material)?ve.material.forEach(J=>J.needsUpdate=!0):ve.material.needsUpdate=!0)});for(let ve=0,J=N.length;ve<J;ve++){const z=N[ve],F=z.shadow;if(F===void 0){nt("WebGLShadowMap:",z,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;l.copy(F.mapSize);const te=F.getFrameExtents();l.multiply(te),c.copy(F.mapSize),(l.x>S||l.y>S)&&(l.x>S&&(c.x=Math.floor(S/te.x),l.x=c.x*te.x,F.mapSize.x=c.x),l.y>S&&(c.y=Math.floor(S/te.y),l.y=c.y*te.y,F.mapSize.y=c.y));const ge=s.state.buffers.depth.getReversed();if(F.camera._reversedDepth=ge,F.map===null||he===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===ko){if(z.isPointLight){nt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new Xi(l.x,l.y,{format:Br,type:Ma,minFilter:Pn,magFilter:Pn,generateMipmaps:!1}),F.map.texture.name=z.name+".shadowMap",F.map.depthTexture=new Fs(l.x,l.y,Gi),F.map.depthTexture.name=z.name+".shadowMapDepth",F.map.depthTexture.format=ba,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Dn,F.map.depthTexture.magFilter=Dn}else z.isPointLight?(F.map=new Mv(l.x),F.map.depthTexture=new yy(l.x,Wi)):(F.map=new Xi(l.x,l.y),F.map.depthTexture=new Fs(l.x,l.y,Wi)),F.map.depthTexture.name=z.name+".shadowMap",F.map.depthTexture.format=ba,this.type===Nc?(F.map.depthTexture.compareFunction=ge?Xh:kh,F.map.depthTexture.minFilter=Pn,F.map.depthTexture.magFilter=Pn):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Dn,F.map.depthTexture.magFilter=Dn);F.camera.updateProjectionMatrix()}const Ee=F.map.isWebGLCubeRenderTarget?6:1;for(let U=0;U<Ee;U++){if(F.map.isWebGLCubeRenderTarget)s.setRenderTarget(F.map,U),s.clear();else{U===0&&(s.setRenderTarget(F.map),s.clear());const Z=F.getViewport(U);d.set(c.x*Z.x,c.y*Z.y,c.x*Z.z,c.y*Z.w),Q.viewport(d)}if(z.isPointLight){const Z=F.camera,be=F.matrix,Ce=z.distance||Z.far;Ce!==Z.far&&(Z.far=Ce,Z.updateProjectionMatrix()),Vo.setFromMatrixPosition(z.matrixWorld),Z.position.copy(Vo),Gd.copy(Z.position),Gd.add(d3[U]),Z.up.copy(h3[U]),Z.lookAt(Gd),Z.updateMatrixWorld(),be.makeTranslation(-Vo.x,-Vo.y,-Vo.z),F_.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),F._frustum.setFromProjectionMatrix(F_,Z.coordinateSystem,Z.reversedDepth)}else F.updateMatrices(z);r=F.getFrustum(),C(P,E,F.camera,z,this.type)}F.isPointLightShadow!==!0&&this.type===ko&&H(F,E),F.needsUpdate=!1}v=this.type,M.needsUpdate=!1,s.setRenderTarget(O,Y,k)};function H(N,P){const E=e.update(D);_.defines.VSM_SAMPLES!==N.blurSamples&&(_.defines.VSM_SAMPLES=N.blurSamples,b.defines.VSM_SAMPLES=N.blurSamples,_.needsUpdate=!0,b.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Xi(l.x,l.y,{format:Br,type:Ma})),_.uniforms.shadow_pass.value=N.map.depthTexture,_.uniforms.resolution.value=N.mapSize,_.uniforms.radius.value=N.radius,s.setRenderTarget(N.mapPass),s.clear(),s.renderBufferDirect(P,null,E,_,D,null),b.uniforms.shadow_pass.value=N.mapPass.texture,b.uniforms.resolution.value=N.mapSize,b.uniforms.radius.value=N.radius,s.setRenderTarget(N.map),s.clear(),s.renderBufferDirect(P,null,E,b,D,null)}function G(N,P,E,O){let Y=null;const k=E.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(k!==void 0)Y=k;else if(Y=E.isPointLight===!0?m:p,s.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const Q=Y.uuid,he=P.uuid;let ve=h[Q];ve===void 0&&(ve={},h[Q]=ve);let J=ve[he];J===void 0&&(J=Y.clone(),ve[he]=J,P.addEventListener("dispose",I)),Y=J}if(Y.visible=P.visible,Y.wireframe=P.wireframe,O===ko?Y.side=P.shadowSide!==null?P.shadowSide:P.side:Y.side=P.shadowSide!==null?P.shadowSide:x[P.side],Y.alphaMap=P.alphaMap,Y.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,Y.map=P.map,Y.clipShadows=P.clipShadows,Y.clippingPlanes=P.clippingPlanes,Y.clipIntersection=P.clipIntersection,Y.displacementMap=P.displacementMap,Y.displacementScale=P.displacementScale,Y.displacementBias=P.displacementBias,Y.wireframeLinewidth=P.wireframeLinewidth,Y.linewidth=P.linewidth,E.isPointLight===!0&&Y.isMeshDistanceMaterial===!0){const Q=s.properties.get(Y);Q.light=E}return Y}function C(N,P,E,O,Y){if(N.visible===!1)return;if(N.layers.test(P.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&Y===ko)&&(!N.frustumCulled||r.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,N.matrixWorld);const he=e.update(N),ve=N.material;if(Array.isArray(ve)){const J=he.groups;for(let z=0,F=J.length;z<F;z++){const te=J[z],ge=ve[te.materialIndex];if(ge&&ge.visible){const Ee=G(N,ge,O,Y);N.onBeforeShadow(s,N,P,E,he,Ee,te),s.renderBufferDirect(E,null,he,Ee,N,te),N.onAfterShadow(s,N,P,E,he,Ee,te)}}}else if(ve.visible){const J=G(N,ve,O,Y);N.onBeforeShadow(s,N,P,E,he,J,null),s.renderBufferDirect(E,null,he,J,N,null),N.onAfterShadow(s,N,P,E,he,J,null)}}const Q=N.children;for(let he=0,ve=Q.length;he<ve;he++)C(Q[he],P,E,O,Y)}function I(N){N.target.removeEventListener("dispose",I);for(const E in h){const O=h[E],Y=N.target.uuid;Y in O&&(O[Y].dispose(),delete O[Y])}}}function m3(s,e){function i(){let X=!1;const Ae=new rn;let me=null;const we=new rn(0,0,0,0);return{setMask:function(Ie){me!==Ie&&!X&&(s.colorMask(Ie,Ie,Ie,Ie),me=Ie)},setLocked:function(Ie){X=Ie},setClear:function(Ie,ye,qe,Ve,jt){jt===!0&&(Ie*=Ve,ye*=Ve,qe*=Ve),Ae.set(Ie,ye,qe,Ve),we.equals(Ae)===!1&&(s.clearColor(Ie,ye,qe,Ve),we.copy(Ae))},reset:function(){X=!1,me=null,we.set(-1,0,0,0)}}}function r(){let X=!1,Ae=!1,me=null,we=null,Ie=null;return{setReversed:function(ye){if(Ae!==ye){const qe=e.get("EXT_clip_control");ye?qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.ZERO_TO_ONE_EXT):qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.NEGATIVE_ONE_TO_ONE_EXT),Ae=ye;const Ve=Ie;Ie=null,this.setClear(Ve)}},getReversed:function(){return Ae},setTest:function(ye){ye?Me(s.DEPTH_TEST):He(s.DEPTH_TEST)},setMask:function(ye){me!==ye&&!X&&(s.depthMask(ye),me=ye)},setFunc:function(ye){if(Ae&&(ye=ZS[ye]),we!==ye){switch(ye){case Wd:s.depthFunc(s.NEVER);break;case qd:s.depthFunc(s.ALWAYS);break;case Yd:s.depthFunc(s.LESS);break;case Is:s.depthFunc(s.LEQUAL);break;case jd:s.depthFunc(s.EQUAL);break;case Zd:s.depthFunc(s.GEQUAL);break;case Kd:s.depthFunc(s.GREATER);break;case Qd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}we=ye}},setLocked:function(ye){X=ye},setClear:function(ye){Ie!==ye&&(Ie=ye,Ae&&(ye=1-ye),s.clearDepth(ye))},reset:function(){X=!1,me=null,we=null,Ie=null,Ae=!1}}}function l(){let X=!1,Ae=null,me=null,we=null,Ie=null,ye=null,qe=null,Ve=null,jt=null;return{setTest:function(Ut){X||(Ut?Me(s.STENCIL_TEST):He(s.STENCIL_TEST))},setMask:function(Ut){Ae!==Ut&&!X&&(s.stencilMask(Ut),Ae=Ut)},setFunc:function(Ut,Zn,Kn){(me!==Ut||we!==Zn||Ie!==Kn)&&(s.stencilFunc(Ut,Zn,Kn),me=Ut,we=Zn,Ie=Kn)},setOp:function(Ut,Zn,Kn){(ye!==Ut||qe!==Zn||Ve!==Kn)&&(s.stencilOp(Ut,Zn,Kn),ye=Ut,qe=Zn,Ve=Kn)},setLocked:function(Ut){X=Ut},setClear:function(Ut){jt!==Ut&&(s.clearStencil(Ut),jt=Ut)},reset:function(){X=!1,Ae=null,me=null,we=null,Ie=null,ye=null,qe=null,Ve=null,jt=null}}}const c=new i,d=new r,p=new l,m=new WeakMap,h=new WeakMap;let S={},x={},_={},b=new WeakMap,A=[],D=null,M=!1,v=null,H=null,G=null,C=null,I=null,N=null,P=null,E=new bt(0,0,0),O=0,Y=!1,k=null,Q=null,he=null,ve=null,J=null;const z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,te=0;const ge=s.getParameter(s.VERSION);ge.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(ge)[1]),F=te>=1):ge.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(ge)[1]),F=te>=2);let Ee=null,U={};const Z=s.getParameter(s.SCISSOR_BOX),be=s.getParameter(s.VIEWPORT),Ce=new rn().fromArray(Z),ze=new rn().fromArray(be);function ae(X,Ae,me,we){const Ie=new Uint8Array(4),ye=s.createTexture();s.bindTexture(X,ye),s.texParameteri(X,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(X,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let qe=0;qe<me;qe++)X===s.TEXTURE_3D||X===s.TEXTURE_2D_ARRAY?s.texImage3D(Ae,0,s.RGBA,1,1,we,0,s.RGBA,s.UNSIGNED_BYTE,Ie):s.texImage2D(Ae+qe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ie);return ye}const Se={};Se[s.TEXTURE_2D]=ae(s.TEXTURE_2D,s.TEXTURE_2D,1),Se[s.TEXTURE_CUBE_MAP]=ae(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[s.TEXTURE_2D_ARRAY]=ae(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Se[s.TEXTURE_3D]=ae(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),p.setClear(0),Me(s.DEPTH_TEST),d.setFunc(Is),Jt(!1),$t(Gg),Me(s.CULL_FACE),vt(xa);function Me(X){S[X]!==!0&&(s.enable(X),S[X]=!0)}function He(X){S[X]!==!1&&(s.disable(X),S[X]=!1)}function tt(X,Ae){return _[X]!==Ae?(s.bindFramebuffer(X,Ae),_[X]=Ae,X===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=Ae),X===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=Ae),!0):!1}function Ke(X,Ae){let me=A,we=!1;if(X){me=b.get(Ae),me===void 0&&(me=[],b.set(Ae,me));const Ie=X.textures;if(me.length!==Ie.length||me[0]!==s.COLOR_ATTACHMENT0){for(let ye=0,qe=Ie.length;ye<qe;ye++)me[ye]=s.COLOR_ATTACHMENT0+ye;me.length=Ie.length,we=!0}}else me[0]!==s.BACK&&(me[0]=s.BACK,we=!0);we&&s.drawBuffers(me)}function Wt(X){return D!==X?(s.useProgram(X),D=X,!0):!1}const ut={[Nr]:s.FUNC_ADD,[vS]:s.FUNC_SUBTRACT,[xS]:s.FUNC_REVERSE_SUBTRACT};ut[SS]=s.MIN,ut[yS]=s.MAX;const _t={[MS]:s.ZERO,[bS]:s.ONE,[ES]:s.SRC_COLOR,[kd]:s.SRC_ALPHA,[DS]:s.SRC_ALPHA_SATURATE,[CS]:s.DST_COLOR,[AS]:s.DST_ALPHA,[TS]:s.ONE_MINUS_SRC_COLOR,[Xd]:s.ONE_MINUS_SRC_ALPHA,[wS]:s.ONE_MINUS_DST_COLOR,[RS]:s.ONE_MINUS_DST_ALPHA,[US]:s.CONSTANT_COLOR,[LS]:s.ONE_MINUS_CONSTANT_COLOR,[NS]:s.CONSTANT_ALPHA,[OS]:s.ONE_MINUS_CONSTANT_ALPHA};function vt(X,Ae,me,we,Ie,ye,qe,Ve,jt,Ut){if(X===xa){M===!0&&(He(s.BLEND),M=!1);return}if(M===!1&&(Me(s.BLEND),M=!0),X!==_S){if(X!==v||Ut!==Y){if((H!==Nr||I!==Nr)&&(s.blendEquation(s.FUNC_ADD),H=Nr,I=Nr),Ut)switch(X){case Os:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Vd:s.blendFunc(s.ONE,s.ONE);break;case Vg:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case kg:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Mt("WebGLState: Invalid blending: ",X);break}else switch(X){case Os:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Vd:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Vg:Mt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case kg:Mt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Mt("WebGLState: Invalid blending: ",X);break}G=null,C=null,N=null,P=null,E.set(0,0,0),O=0,v=X,Y=Ut}return}Ie=Ie||Ae,ye=ye||me,qe=qe||we,(Ae!==H||Ie!==I)&&(s.blendEquationSeparate(ut[Ae],ut[Ie]),H=Ae,I=Ie),(me!==G||we!==C||ye!==N||qe!==P)&&(s.blendFuncSeparate(_t[me],_t[we],_t[ye],_t[qe]),G=me,C=we,N=ye,P=qe),(Ve.equals(E)===!1||jt!==O)&&(s.blendColor(Ve.r,Ve.g,Ve.b,jt),E.copy(Ve),O=jt),v=X,Y=!1}function ft(X,Ae){X.side===_a?He(s.CULL_FACE):Me(s.CULL_FACE);let me=X.side===Yn;Ae&&(me=!me),Jt(me),X.blending===Os&&X.transparent===!1?vt(xa):vt(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),d.setFunc(X.depthFunc),d.setTest(X.depthTest),d.setMask(X.depthWrite),c.setMask(X.colorWrite);const we=X.stencilWrite;p.setTest(we),we&&(p.setMask(X.stencilWriteMask),p.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),p.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),sn(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?Me(s.SAMPLE_ALPHA_TO_COVERAGE):He(s.SAMPLE_ALPHA_TO_COVERAGE)}function Jt(X){k!==X&&(X?s.frontFace(s.CW):s.frontFace(s.CCW),k=X)}function $t(X){X!==pS?(Me(s.CULL_FACE),X!==Q&&(X===Gg?s.cullFace(s.BACK):X===mS?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):He(s.CULL_FACE),Q=X}function en(X){X!==he&&(F&&s.lineWidth(X),he=X)}function sn(X,Ae,me){X?(Me(s.POLYGON_OFFSET_FILL),(ve!==Ae||J!==me)&&(ve=Ae,J=me,d.getReversed()&&(Ae=-Ae),s.polygonOffset(Ae,me))):He(s.POLYGON_OFFSET_FILL)}function Xt(X){X?Me(s.SCISSOR_TEST):He(s.SCISSOR_TEST)}function tn(X){X===void 0&&(X=s.TEXTURE0+z-1),Ee!==X&&(s.activeTexture(X),Ee=X)}function q(X,Ae,me){me===void 0&&(Ee===null?me=s.TEXTURE0+z-1:me=Ee);let we=U[me];we===void 0&&(we={type:void 0,texture:void 0},U[me]=we),(we.type!==X||we.texture!==Ae)&&(Ee!==me&&(s.activeTexture(me),Ee=me),s.bindTexture(X,Ae||Se[X]),we.type=X,we.texture=Ae)}function Bt(){const X=U[Ee];X!==void 0&&X.type!==void 0&&(s.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function Rt(){try{s.compressedTexImage2D(...arguments)}catch(X){Mt("WebGLState:",X)}}function w(){try{s.compressedTexImage3D(...arguments)}catch(X){Mt("WebGLState:",X)}}function y(){try{s.texSubImage2D(...arguments)}catch(X){Mt("WebGLState:",X)}}function K(){try{s.texSubImage3D(...arguments)}catch(X){Mt("WebGLState:",X)}}function re(){try{s.compressedTexSubImage2D(...arguments)}catch(X){Mt("WebGLState:",X)}}function fe(){try{s.compressedTexSubImage3D(...arguments)}catch(X){Mt("WebGLState:",X)}}function Te(){try{s.texStorage2D(...arguments)}catch(X){Mt("WebGLState:",X)}}function De(){try{s.texStorage3D(...arguments)}catch(X){Mt("WebGLState:",X)}}function ue(){try{s.texImage2D(...arguments)}catch(X){Mt("WebGLState:",X)}}function de(){try{s.texImage3D(...arguments)}catch(X){Mt("WebGLState:",X)}}function Re(X){return x[X]!==void 0?x[X]:s.getParameter(X)}function Be(X,Ae){x[X]!==Ae&&(s.pixelStorei(X,Ae),x[X]=Ae)}function Ne(X){Ce.equals(X)===!1&&(s.scissor(X.x,X.y,X.z,X.w),Ce.copy(X))}function Ue(X){ze.equals(X)===!1&&(s.viewport(X.x,X.y,X.z,X.w),ze.copy(X))}function Ze(X,Ae){let me=h.get(Ae);me===void 0&&(me=new WeakMap,h.set(Ae,me));let we=me.get(X);we===void 0&&(we=s.getUniformBlockIndex(Ae,X.name),me.set(X,we))}function Qe(X,Ae){const we=h.get(Ae).get(X);m.get(Ae)!==we&&(s.uniformBlockBinding(Ae,we,X.__bindingPointIndex),m.set(Ae,we))}function it(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),d.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),S={},x={},Ee=null,U={},_={},b=new WeakMap,A=[],D=null,M=!1,v=null,H=null,G=null,C=null,I=null,N=null,P=null,E=new bt(0,0,0),O=0,Y=!1,k=null,Q=null,he=null,ve=null,J=null,Ce.set(0,0,s.canvas.width,s.canvas.height),ze.set(0,0,s.canvas.width,s.canvas.height),c.reset(),d.reset(),p.reset()}return{buffers:{color:c,depth:d,stencil:p},enable:Me,disable:He,bindFramebuffer:tt,drawBuffers:Ke,useProgram:Wt,setBlending:vt,setMaterial:ft,setFlipSided:Jt,setCullFace:$t,setLineWidth:en,setPolygonOffset:sn,setScissorTest:Xt,activeTexture:tn,bindTexture:q,unbindTexture:Bt,compressedTexImage2D:Rt,compressedTexImage3D:w,texImage2D:ue,texImage3D:de,pixelStorei:Be,getParameter:Re,updateUBOMapping:Ze,uniformBlockBinding:Qe,texStorage2D:Te,texStorage3D:De,texSubImage2D:y,texSubImage3D:K,compressedTexSubImage2D:re,compressedTexSubImage3D:fe,scissor:Ne,viewport:Ue,reset:it}}function g3(s,e,i,r,l,c,d){const p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new wt,S=new WeakMap,x=new Set;let _;const b=new WeakMap;let A=!1;try{A=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function D(w,y){return A?new OffscreenCanvas(w,y):qc("canvas")}function M(w,y,K){let re=1;const fe=Rt(w);if((fe.width>K||fe.height>K)&&(re=K/Math.max(fe.width,fe.height)),re<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const Te=Math.floor(re*fe.width),De=Math.floor(re*fe.height);_===void 0&&(_=D(Te,De));const ue=y?D(Te,De):_;return ue.width=Te,ue.height=De,ue.getContext("2d").drawImage(w,0,0,Te,De),nt("WebGLRenderer: Texture has been resized from ("+fe.width+"x"+fe.height+") to ("+Te+"x"+De+")."),ue}else return"data"in w&&nt("WebGLRenderer: Image in DataTexture is too big ("+fe.width+"x"+fe.height+")."),w;return w}function v(w){return w.generateMipmaps}function H(w){s.generateMipmap(w)}function G(w){return w.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?s.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function C(w,y,K,re,fe,Te=!1){if(w!==null){if(s[w]!==void 0)return s[w];nt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let De;re&&(De=e.get("EXT_texture_norm16"),De||nt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ue=y;if(y===s.RED&&(K===s.FLOAT&&(ue=s.R32F),K===s.HALF_FLOAT&&(ue=s.R16F),K===s.UNSIGNED_BYTE&&(ue=s.R8),K===s.UNSIGNED_SHORT&&De&&(ue=De.R16_EXT),K===s.SHORT&&De&&(ue=De.R16_SNORM_EXT)),y===s.RED_INTEGER&&(K===s.UNSIGNED_BYTE&&(ue=s.R8UI),K===s.UNSIGNED_SHORT&&(ue=s.R16UI),K===s.UNSIGNED_INT&&(ue=s.R32UI),K===s.BYTE&&(ue=s.R8I),K===s.SHORT&&(ue=s.R16I),K===s.INT&&(ue=s.R32I)),y===s.RG&&(K===s.FLOAT&&(ue=s.RG32F),K===s.HALF_FLOAT&&(ue=s.RG16F),K===s.UNSIGNED_BYTE&&(ue=s.RG8),K===s.UNSIGNED_SHORT&&De&&(ue=De.RG16_EXT),K===s.SHORT&&De&&(ue=De.RG16_SNORM_EXT)),y===s.RG_INTEGER&&(K===s.UNSIGNED_BYTE&&(ue=s.RG8UI),K===s.UNSIGNED_SHORT&&(ue=s.RG16UI),K===s.UNSIGNED_INT&&(ue=s.RG32UI),K===s.BYTE&&(ue=s.RG8I),K===s.SHORT&&(ue=s.RG16I),K===s.INT&&(ue=s.RG32I)),y===s.RGB_INTEGER&&(K===s.UNSIGNED_BYTE&&(ue=s.RGB8UI),K===s.UNSIGNED_SHORT&&(ue=s.RGB16UI),K===s.UNSIGNED_INT&&(ue=s.RGB32UI),K===s.BYTE&&(ue=s.RGB8I),K===s.SHORT&&(ue=s.RGB16I),K===s.INT&&(ue=s.RGB32I)),y===s.RGBA_INTEGER&&(K===s.UNSIGNED_BYTE&&(ue=s.RGBA8UI),K===s.UNSIGNED_SHORT&&(ue=s.RGBA16UI),K===s.UNSIGNED_INT&&(ue=s.RGBA32UI),K===s.BYTE&&(ue=s.RGBA8I),K===s.SHORT&&(ue=s.RGBA16I),K===s.INT&&(ue=s.RGBA32I)),y===s.RGB&&(K===s.UNSIGNED_SHORT&&De&&(ue=De.RGB16_EXT),K===s.SHORT&&De&&(ue=De.RGB16_SNORM_EXT),K===s.UNSIGNED_INT_5_9_9_9_REV&&(ue=s.RGB9_E5),K===s.UNSIGNED_INT_10F_11F_11F_REV&&(ue=s.R11F_G11F_B10F)),y===s.RGBA){const de=Te?Xc:St.getTransfer(fe);K===s.FLOAT&&(ue=s.RGBA32F),K===s.HALF_FLOAT&&(ue=s.RGBA16F),K===s.UNSIGNED_BYTE&&(ue=de===It?s.SRGB8_ALPHA8:s.RGBA8),K===s.UNSIGNED_SHORT&&De&&(ue=De.RGBA16_EXT),K===s.SHORT&&De&&(ue=De.RGBA16_SNORM_EXT),K===s.UNSIGNED_SHORT_4_4_4_4&&(ue=s.RGBA4),K===s.UNSIGNED_SHORT_5_5_5_1&&(ue=s.RGB5_A1)}return(ue===s.R16F||ue===s.R32F||ue===s.RG16F||ue===s.RG32F||ue===s.RGBA16F||ue===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function I(w,y){let K;return w?y===null||y===Wi||y===qo?K=s.DEPTH24_STENCIL8:y===Gi?K=s.DEPTH32F_STENCIL8:y===Wo&&(K=s.DEPTH24_STENCIL8,nt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Wi||y===qo?K=s.DEPTH_COMPONENT24:y===Gi?K=s.DEPTH_COMPONENT32F:y===Wo&&(K=s.DEPTH_COMPONENT16),K}function N(w,y){return v(w)===!0||w.isFramebufferTexture&&w.minFilter!==Dn&&w.minFilter!==Pn?Math.log2(Math.max(y.width,y.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?y.mipmaps.length:1}function P(w){const y=w.target;y.removeEventListener("dispose",P),O(y),y.isVideoTexture&&S.delete(y),y.isHTMLTexture&&x.delete(y)}function E(w){const y=w.target;y.removeEventListener("dispose",E),k(y)}function O(w){const y=r.get(w);if(y.__webglInit===void 0)return;const K=w.source,re=b.get(K);if(re){const fe=re[y.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&Y(w),Object.keys(re).length===0&&b.delete(K)}r.remove(w)}function Y(w){const y=r.get(w);s.deleteTexture(y.__webglTexture);const K=w.source,re=b.get(K);delete re[y.__cacheKey],d.memory.textures--}function k(w){const y=r.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),r.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(y.__webglFramebuffer[re]))for(let fe=0;fe<y.__webglFramebuffer[re].length;fe++)s.deleteFramebuffer(y.__webglFramebuffer[re][fe]);else s.deleteFramebuffer(y.__webglFramebuffer[re]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[re])}else{if(Array.isArray(y.__webglFramebuffer))for(let re=0;re<y.__webglFramebuffer.length;re++)s.deleteFramebuffer(y.__webglFramebuffer[re]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let re=0;re<y.__webglColorRenderbuffer.length;re++)y.__webglColorRenderbuffer[re]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[re]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const K=w.textures;for(let re=0,fe=K.length;re<fe;re++){const Te=r.get(K[re]);Te.__webglTexture&&(s.deleteTexture(Te.__webglTexture),d.memory.textures--),r.remove(K[re])}r.remove(w)}let Q=0;function he(){Q=0}function ve(){return Q}function J(w){Q=w}function z(){const w=Q;return w>=l.maxTextures&&nt("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+l.maxTextures),Q+=1,w}function F(w){const y=[];return y.push(w.wrapS),y.push(w.wrapT),y.push(w.wrapR||0),y.push(w.magFilter),y.push(w.minFilter),y.push(w.anisotropy),y.push(w.internalFormat),y.push(w.format),y.push(w.type),y.push(w.generateMipmaps),y.push(w.premultiplyAlpha),y.push(w.flipY),y.push(w.unpackAlignment),y.push(w.colorSpace),y.join()}function te(w,y){const K=r.get(w);if(w.isVideoTexture&&q(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&K.__version!==w.version){const re=w.image;if(re===null)nt("WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)nt("WebGLRenderer: Texture marked for update but image is incomplete");else{He(K,w,y);return}}else w.isExternalTexture&&(K.__webglTexture=w.sourceTexture?w.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,K.__webglTexture,s.TEXTURE0+y)}function ge(w,y){const K=r.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&K.__version!==w.version){He(K,w,y);return}else w.isExternalTexture&&(K.__webglTexture=w.sourceTexture?w.sourceTexture:null);i.bindTexture(s.TEXTURE_2D_ARRAY,K.__webglTexture,s.TEXTURE0+y)}function Ee(w,y){const K=r.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&K.__version!==w.version){He(K,w,y);return}i.bindTexture(s.TEXTURE_3D,K.__webglTexture,s.TEXTURE0+y)}function U(w,y){const K=r.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&K.__version!==w.version){tt(K,w,y);return}i.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture,s.TEXTURE0+y)}const Z={[Jd]:s.REPEAT,[va]:s.CLAMP_TO_EDGE,[$d]:s.MIRRORED_REPEAT},be={[Dn]:s.NEAREST,[IS]:s.NEAREST_MIPMAP_NEAREST,[lc]:s.NEAREST_MIPMAP_LINEAR,[Pn]:s.LINEAR,[fd]:s.LINEAR_MIPMAP_NEAREST,[Pr]:s.LINEAR_MIPMAP_LINEAR},Ce={[HS]:s.NEVER,[WS]:s.ALWAYS,[GS]:s.LESS,[kh]:s.LEQUAL,[VS]:s.EQUAL,[Xh]:s.GEQUAL,[kS]:s.GREATER,[XS]:s.NOTEQUAL};function ze(w,y){if(y.type===Gi&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Pn||y.magFilter===fd||y.magFilter===lc||y.magFilter===Pr||y.minFilter===Pn||y.minFilter===fd||y.minFilter===lc||y.minFilter===Pr)&&nt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(w,s.TEXTURE_WRAP_S,Z[y.wrapS]),s.texParameteri(w,s.TEXTURE_WRAP_T,Z[y.wrapT]),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,Z[y.wrapR]),s.texParameteri(w,s.TEXTURE_MAG_FILTER,be[y.magFilter]),s.texParameteri(w,s.TEXTURE_MIN_FILTER,be[y.minFilter]),y.compareFunction&&(s.texParameteri(w,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(w,s.TEXTURE_COMPARE_FUNC,Ce[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Dn||y.minFilter!==lc&&y.minFilter!==Pr||y.type===Gi&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||r.get(y).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");s.texParameterf(w,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,l.getMaxAnisotropy())),r.get(y).__currentAnisotropy=y.anisotropy}}}function ae(w,y){let K=!1;w.__webglInit===void 0&&(w.__webglInit=!0,y.addEventListener("dispose",P));const re=y.source;let fe=b.get(re);fe===void 0&&(fe={},b.set(re,fe));const Te=F(y);if(Te!==w.__cacheKey){fe[Te]===void 0&&(fe[Te]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,K=!0),fe[Te].usedTimes++;const De=fe[w.__cacheKey];De!==void 0&&(fe[w.__cacheKey].usedTimes--,De.usedTimes===0&&Y(y)),w.__cacheKey=Te,w.__webglTexture=fe[Te].texture}return K}function Se(w,y,K){return Math.floor(Math.floor(w/K)/y)}function Me(w,y,K,re){const Te=w.updateRanges;if(Te.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,y.width,y.height,K,re,y.data);else{Te.sort((Be,Ne)=>Be.start-Ne.start);let De=0;for(let Be=1;Be<Te.length;Be++){const Ne=Te[De],Ue=Te[Be],Ze=Ne.start+Ne.count,Qe=Se(Ue.start,y.width,4),it=Se(Ne.start,y.width,4);Ue.start<=Ze+1&&Qe===it&&Se(Ue.start+Ue.count-1,y.width,4)===Qe?Ne.count=Math.max(Ne.count,Ue.start+Ue.count-Ne.start):(++De,Te[De]=Ue)}Te.length=De+1;const ue=i.getParameter(s.UNPACK_ROW_LENGTH),de=i.getParameter(s.UNPACK_SKIP_PIXELS),Re=i.getParameter(s.UNPACK_SKIP_ROWS);i.pixelStorei(s.UNPACK_ROW_LENGTH,y.width);for(let Be=0,Ne=Te.length;Be<Ne;Be++){const Ue=Te[Be],Ze=Math.floor(Ue.start/4),Qe=Math.ceil(Ue.count/4),it=Ze%y.width,X=Math.floor(Ze/y.width),Ae=Qe,me=1;i.pixelStorei(s.UNPACK_SKIP_PIXELS,it),i.pixelStorei(s.UNPACK_SKIP_ROWS,X),i.texSubImage2D(s.TEXTURE_2D,0,it,X,Ae,me,K,re,y.data)}w.clearUpdateRanges(),i.pixelStorei(s.UNPACK_ROW_LENGTH,ue),i.pixelStorei(s.UNPACK_SKIP_PIXELS,de),i.pixelStorei(s.UNPACK_SKIP_ROWS,Re)}}function He(w,y,K){let re=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(re=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(re=s.TEXTURE_3D);const fe=ae(w,y),Te=y.source;i.bindTexture(re,w.__webglTexture,s.TEXTURE0+K);const De=r.get(Te);if(Te.version!==De.__version||fe===!0){if(i.activeTexture(s.TEXTURE0+K),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const me=St.getPrimaries(St.workingColorSpace),we=y.colorSpace===ar?null:St.getPrimaries(y.colorSpace),Ie=y.colorSpace===ar||me===we?s.NONE:s.BROWSER_DEFAULT_WEBGL;i.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie)}i.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment);let de=M(y.image,!1,l.maxTextureSize);de=Bt(y,de);const Re=c.convert(y.format,y.colorSpace),Be=c.convert(y.type);let Ne=C(y.internalFormat,Re,Be,y.normalized,y.colorSpace,y.isVideoTexture);ze(re,y);let Ue;const Ze=y.mipmaps,Qe=y.isVideoTexture!==!0,it=De.__version===void 0||fe===!0,X=Te.dataReady,Ae=N(y,de);if(y.isDepthTexture)Ne=I(y.format===zr,y.type),it&&(Qe?i.texStorage2D(s.TEXTURE_2D,1,Ne,de.width,de.height):i.texImage2D(s.TEXTURE_2D,0,Ne,de.width,de.height,0,Re,Be,null));else if(y.isDataTexture)if(Ze.length>0){Qe&&it&&i.texStorage2D(s.TEXTURE_2D,Ae,Ne,Ze[0].width,Ze[0].height);for(let me=0,we=Ze.length;me<we;me++)Ue=Ze[me],Qe?X&&i.texSubImage2D(s.TEXTURE_2D,me,0,0,Ue.width,Ue.height,Re,Be,Ue.data):i.texImage2D(s.TEXTURE_2D,me,Ne,Ue.width,Ue.height,0,Re,Be,Ue.data);y.generateMipmaps=!1}else Qe?(it&&i.texStorage2D(s.TEXTURE_2D,Ae,Ne,de.width,de.height),X&&Me(y,de,Re,Be)):i.texImage2D(s.TEXTURE_2D,0,Ne,de.width,de.height,0,Re,Be,de.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Qe&&it&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ae,Ne,Ze[0].width,Ze[0].height,de.depth);for(let me=0,we=Ze.length;me<we;me++)if(Ue=Ze[me],y.format!==Di)if(Re!==null)if(Qe){if(X)if(y.layerUpdates.size>0){const Ie=g_(Ue.width,Ue.height,y.format,y.type);for(const ye of y.layerUpdates){const qe=Ue.data.subarray(ye*Ie/Ue.data.BYTES_PER_ELEMENT,(ye+1)*Ie/Ue.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,me,0,0,ye,Ue.width,Ue.height,1,Re,qe)}y.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,me,0,0,0,Ue.width,Ue.height,de.depth,Re,Ue.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,me,Ne,Ue.width,Ue.height,de.depth,0,Ue.data,0,0);else nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Qe?X&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,me,0,0,0,Ue.width,Ue.height,de.depth,Re,Be,Ue.data):i.texImage3D(s.TEXTURE_2D_ARRAY,me,Ne,Ue.width,Ue.height,de.depth,0,Re,Be,Ue.data)}else{Qe&&it&&i.texStorage2D(s.TEXTURE_2D,Ae,Ne,Ze[0].width,Ze[0].height);for(let me=0,we=Ze.length;me<we;me++)Ue=Ze[me],y.format!==Di?Re!==null?Qe?X&&i.compressedTexSubImage2D(s.TEXTURE_2D,me,0,0,Ue.width,Ue.height,Re,Ue.data):i.compressedTexImage2D(s.TEXTURE_2D,me,Ne,Ue.width,Ue.height,0,Ue.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qe?X&&i.texSubImage2D(s.TEXTURE_2D,me,0,0,Ue.width,Ue.height,Re,Be,Ue.data):i.texImage2D(s.TEXTURE_2D,me,Ne,Ue.width,Ue.height,0,Re,Be,Ue.data)}else if(y.isDataArrayTexture)if(Qe){if(it&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ae,Ne,de.width,de.height,de.depth),X)if(y.layerUpdates.size>0){const me=g_(de.width,de.height,y.format,y.type);for(const we of y.layerUpdates){const Ie=de.data.subarray(we*me/de.data.BYTES_PER_ELEMENT,(we+1)*me/de.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,we,de.width,de.height,1,Re,Be,Ie)}y.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,Re,Be,de.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Ne,de.width,de.height,de.depth,0,Re,Be,de.data);else if(y.isData3DTexture)Qe?(it&&i.texStorage3D(s.TEXTURE_3D,Ae,Ne,de.width,de.height,de.depth),X&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,Re,Be,de.data)):i.texImage3D(s.TEXTURE_3D,0,Ne,de.width,de.height,de.depth,0,Re,Be,de.data);else if(y.isFramebufferTexture){if(it)if(Qe)i.texStorage2D(s.TEXTURE_2D,Ae,Ne,de.width,de.height);else{let me=de.width,we=de.height;for(let Ie=0;Ie<Ae;Ie++)i.texImage2D(s.TEXTURE_2D,Ie,Ne,me,we,0,Re,Be,null),me>>=1,we>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in s){const me=s.canvas;if(me.hasAttribute("layoutsubtree")||me.setAttribute("layoutsubtree","true"),de.parentNode!==me){me.appendChild(de),x.add(y),me.onpaint=we=>{const Ie=we.changedElements;for(const ye of x)Ie.includes(ye.image)&&(ye.needsUpdate=!0)},me.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,de);else{const Ie=s.RGBA,ye=s.RGBA,qe=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Ie,ye,qe,de)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Ze.length>0){if(Qe&&it){const me=Rt(Ze[0]);i.texStorage2D(s.TEXTURE_2D,Ae,Ne,me.width,me.height)}for(let me=0,we=Ze.length;me<we;me++)Ue=Ze[me],Qe?X&&i.texSubImage2D(s.TEXTURE_2D,me,0,0,Re,Be,Ue):i.texImage2D(s.TEXTURE_2D,me,Ne,Re,Be,Ue);y.generateMipmaps=!1}else if(Qe){if(it){const me=Rt(de);i.texStorage2D(s.TEXTURE_2D,Ae,Ne,me.width,me.height)}X&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Re,Be,de)}else i.texImage2D(s.TEXTURE_2D,0,Ne,Re,Be,de);v(y)&&H(re),De.__version=Te.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function tt(w,y,K){if(y.image.length!==6)return;const re=ae(w,y),fe=y.source;i.bindTexture(s.TEXTURE_CUBE_MAP,w.__webglTexture,s.TEXTURE0+K);const Te=r.get(fe);if(fe.version!==Te.__version||re===!0){i.activeTexture(s.TEXTURE0+K);const De=St.getPrimaries(St.workingColorSpace),ue=y.colorSpace===ar?null:St.getPrimaries(y.colorSpace),de=y.colorSpace===ar||De===ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;i.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const Re=y.isCompressedTexture||y.image[0].isCompressedTexture,Be=y.image[0]&&y.image[0].isDataTexture,Ne=[];for(let ye=0;ye<6;ye++)!Re&&!Be?Ne[ye]=M(y.image[ye],!0,l.maxCubemapSize):Ne[ye]=Be?y.image[ye].image:y.image[ye],Ne[ye]=Bt(y,Ne[ye]);const Ue=Ne[0],Ze=c.convert(y.format,y.colorSpace),Qe=c.convert(y.type),it=C(y.internalFormat,Ze,Qe,y.normalized,y.colorSpace),X=y.isVideoTexture!==!0,Ae=Te.__version===void 0||re===!0,me=fe.dataReady;let we=N(y,Ue);ze(s.TEXTURE_CUBE_MAP,y);let Ie;if(Re){X&&Ae&&i.texStorage2D(s.TEXTURE_CUBE_MAP,we,it,Ue.width,Ue.height);for(let ye=0;ye<6;ye++){Ie=Ne[ye].mipmaps;for(let qe=0;qe<Ie.length;qe++){const Ve=Ie[qe];y.format!==Di?Ze!==null?X?me&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,qe,0,0,Ve.width,Ve.height,Ze,Ve.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,qe,it,Ve.width,Ve.height,0,Ve.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?me&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,qe,0,0,Ve.width,Ve.height,Ze,Qe,Ve.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,qe,it,Ve.width,Ve.height,0,Ze,Qe,Ve.data)}}}else{if(Ie=y.mipmaps,X&&Ae){Ie.length>0&&we++;const ye=Rt(Ne[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,we,it,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(Be){X?me&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Ne[ye].width,Ne[ye].height,Ze,Qe,Ne[ye].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,it,Ne[ye].width,Ne[ye].height,0,Ze,Qe,Ne[ye].data);for(let qe=0;qe<Ie.length;qe++){const jt=Ie[qe].image[ye].image;X?me&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,qe+1,0,0,jt.width,jt.height,Ze,Qe,jt.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,qe+1,it,jt.width,jt.height,0,Ze,Qe,jt.data)}}else{X?me&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Ze,Qe,Ne[ye]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,it,Ze,Qe,Ne[ye]);for(let qe=0;qe<Ie.length;qe++){const Ve=Ie[qe];X?me&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,qe+1,0,0,Ze,Qe,Ve.image[ye]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,qe+1,it,Ze,Qe,Ve.image[ye])}}}v(y)&&H(s.TEXTURE_CUBE_MAP),Te.__version=fe.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function Ke(w,y,K,re,fe,Te){const De=c.convert(K.format,K.colorSpace),ue=c.convert(K.type),de=C(K.internalFormat,De,ue,K.normalized,K.colorSpace),Re=r.get(y),Be=r.get(K);if(Be.__renderTarget=y,!Re.__hasExternalTextures){const Ne=Math.max(1,y.width>>Te),Ue=Math.max(1,y.height>>Te);fe===s.TEXTURE_3D||fe===s.TEXTURE_2D_ARRAY?i.texImage3D(fe,Te,de,Ne,Ue,y.depth,0,De,ue,null):i.texImage2D(fe,Te,de,Ne,Ue,0,De,ue,null)}i.bindFramebuffer(s.FRAMEBUFFER,w),tn(y)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,re,fe,Be.__webglTexture,0,Xt(y)):(fe===s.TEXTURE_2D||fe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,re,fe,Be.__webglTexture,Te),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Wt(w,y,K){if(s.bindRenderbuffer(s.RENDERBUFFER,w),y.depthBuffer){const re=y.depthTexture,fe=re&&re.isDepthTexture?re.type:null,Te=I(y.stencilBuffer,fe),De=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;tn(y)?p.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Xt(y),Te,y.width,y.height):K?s.renderbufferStorageMultisample(s.RENDERBUFFER,Xt(y),Te,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,Te,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,De,s.RENDERBUFFER,w)}else{const re=y.textures;for(let fe=0;fe<re.length;fe++){const Te=re[fe],De=c.convert(Te.format,Te.colorSpace),ue=c.convert(Te.type),de=C(Te.internalFormat,De,ue,Te.normalized,Te.colorSpace);tn(y)?p.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Xt(y),de,y.width,y.height):K?s.renderbufferStorageMultisample(s.RENDERBUFFER,Xt(y),de,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,de,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ut(w,y,K){const re=y.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(s.FRAMEBUFFER,w),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const fe=r.get(y.depthTexture);if(fe.__renderTarget=y,(!fe.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),re){if(fe.__webglInit===void 0&&(fe.__webglInit=!0,y.depthTexture.addEventListener("dispose",P)),fe.__webglTexture===void 0){fe.__webglTexture=s.createTexture(),i.bindTexture(s.TEXTURE_CUBE_MAP,fe.__webglTexture),ze(s.TEXTURE_CUBE_MAP,y.depthTexture);const Re=c.convert(y.depthTexture.format),Be=c.convert(y.depthTexture.type);let Ne;y.depthTexture.format===ba?Ne=s.DEPTH_COMPONENT24:y.depthTexture.format===zr&&(Ne=s.DEPTH24_STENCIL8);for(let Ue=0;Ue<6;Ue++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0,Ne,y.width,y.height,0,Re,Be,null)}}else te(y.depthTexture,0);const Te=fe.__webglTexture,De=Xt(y),ue=re?s.TEXTURE_CUBE_MAP_POSITIVE_X+K:s.TEXTURE_2D,de=y.depthTexture.format===zr?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(y.depthTexture.format===ba)tn(y)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,de,ue,Te,0,De):s.framebufferTexture2D(s.FRAMEBUFFER,de,ue,Te,0);else if(y.depthTexture.format===zr)tn(y)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,de,ue,Te,0,De):s.framebufferTexture2D(s.FRAMEBUFFER,de,ue,Te,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function _t(w){const y=r.get(w),K=w.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==w.depthTexture){const re=w.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),re){const fe=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,re.removeEventListener("dispose",fe)};re.addEventListener("dispose",fe),y.__depthDisposeCallback=fe}y.__boundDepthTexture=re}if(w.depthTexture&&!y.__autoAllocateDepthBuffer)if(K)for(let re=0;re<6;re++)ut(y.__webglFramebuffer[re],w,re);else{const re=w.texture.mipmaps;re&&re.length>0?ut(y.__webglFramebuffer[0],w,0):ut(y.__webglFramebuffer,w,0)}else if(K){y.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(i.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[re]),y.__webglDepthbuffer[re]===void 0)y.__webglDepthbuffer[re]=s.createRenderbuffer(),Wt(y.__webglDepthbuffer[re],w,!1);else{const fe=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Te=y.__webglDepthbuffer[re];s.bindRenderbuffer(s.RENDERBUFFER,Te),s.framebufferRenderbuffer(s.FRAMEBUFFER,fe,s.RENDERBUFFER,Te)}}else{const re=w.texture.mipmaps;if(re&&re.length>0?i.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=s.createRenderbuffer(),Wt(y.__webglDepthbuffer,w,!1);else{const fe=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Te=y.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Te),s.framebufferRenderbuffer(s.FRAMEBUFFER,fe,s.RENDERBUFFER,Te)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function vt(w,y,K){const re=r.get(w);y!==void 0&&Ke(re.__webglFramebuffer,w,w.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),K!==void 0&&_t(w)}function ft(w){const y=w.texture,K=r.get(w),re=r.get(y);w.addEventListener("dispose",E);const fe=w.textures,Te=w.isWebGLCubeRenderTarget===!0,De=fe.length>1;if(De||(re.__webglTexture===void 0&&(re.__webglTexture=s.createTexture()),re.__version=y.version,d.memory.textures++),Te){K.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(y.mipmaps&&y.mipmaps.length>0){K.__webglFramebuffer[ue]=[];for(let de=0;de<y.mipmaps.length;de++)K.__webglFramebuffer[ue][de]=s.createFramebuffer()}else K.__webglFramebuffer[ue]=s.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){K.__webglFramebuffer=[];for(let ue=0;ue<y.mipmaps.length;ue++)K.__webglFramebuffer[ue]=s.createFramebuffer()}else K.__webglFramebuffer=s.createFramebuffer();if(De)for(let ue=0,de=fe.length;ue<de;ue++){const Re=r.get(fe[ue]);Re.__webglTexture===void 0&&(Re.__webglTexture=s.createTexture(),d.memory.textures++)}if(w.samples>0&&tn(w)===!1){K.__webglMultisampledFramebuffer=s.createFramebuffer(),K.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let ue=0;ue<fe.length;ue++){const de=fe[ue];K.__webglColorRenderbuffer[ue]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,K.__webglColorRenderbuffer[ue]);const Re=c.convert(de.format,de.colorSpace),Be=c.convert(de.type),Ne=C(de.internalFormat,Re,Be,de.normalized,de.colorSpace,w.isXRRenderTarget===!0),Ue=Xt(w);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ue,Ne,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.RENDERBUFFER,K.__webglColorRenderbuffer[ue])}s.bindRenderbuffer(s.RENDERBUFFER,null),w.depthBuffer&&(K.__webglDepthRenderbuffer=s.createRenderbuffer(),Wt(K.__webglDepthRenderbuffer,w,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Te){i.bindTexture(s.TEXTURE_CUBE_MAP,re.__webglTexture),ze(s.TEXTURE_CUBE_MAP,y);for(let ue=0;ue<6;ue++)if(y.mipmaps&&y.mipmaps.length>0)for(let de=0;de<y.mipmaps.length;de++)Ke(K.__webglFramebuffer[ue][de],w,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,de);else Ke(K.__webglFramebuffer[ue],w,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);v(y)&&H(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(De){for(let ue=0,de=fe.length;ue<de;ue++){const Re=fe[ue],Be=r.get(Re);let Ne=s.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Ne=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Ne,Be.__webglTexture),ze(Ne,Re),Ke(K.__webglFramebuffer,w,Re,s.COLOR_ATTACHMENT0+ue,Ne,0),v(Re)&&H(Ne)}i.unbindTexture()}else{let ue=s.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ue=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(ue,re.__webglTexture),ze(ue,y),y.mipmaps&&y.mipmaps.length>0)for(let de=0;de<y.mipmaps.length;de++)Ke(K.__webglFramebuffer[de],w,y,s.COLOR_ATTACHMENT0,ue,de);else Ke(K.__webglFramebuffer,w,y,s.COLOR_ATTACHMENT0,ue,0);v(y)&&H(ue),i.unbindTexture()}w.depthBuffer&&_t(w)}function Jt(w){const y=w.textures;for(let K=0,re=y.length;K<re;K++){const fe=y[K];if(v(fe)){const Te=G(w),De=r.get(fe).__webglTexture;i.bindTexture(Te,De),H(Te),i.unbindTexture()}}}const $t=[],en=[];function sn(w){if(w.samples>0){if(tn(w)===!1){const y=w.textures,K=w.width,re=w.height;let fe=s.COLOR_BUFFER_BIT;const Te=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,De=r.get(w),ue=y.length>1;if(ue)for(let Re=0;Re<y.length;Re++)i.bindFramebuffer(s.FRAMEBUFFER,De.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,De.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer);const de=w.texture.mipmaps;de&&de.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,De.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let Re=0;Re<y.length;Re++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(fe|=s.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(fe|=s.STENCIL_BUFFER_BIT)),ue){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,De.__webglColorRenderbuffer[Re]);const Be=r.get(y[Re]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Be,0)}s.blitFramebuffer(0,0,K,re,0,0,K,re,fe,s.NEAREST),m===!0&&($t.length=0,en.length=0,$t.push(s.COLOR_ATTACHMENT0+Re),w.depthBuffer&&w.resolveDepthBuffer===!1&&($t.push(Te),en.push(Te),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,en)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,$t))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ue)for(let Re=0;Re<y.length;Re++){i.bindFramebuffer(s.FRAMEBUFFER,De.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.RENDERBUFFER,De.__webglColorRenderbuffer[Re]);const Be=r.get(y[Re]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,De.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.TEXTURE_2D,Be,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&m){const y=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[y])}}}function Xt(w){return Math.min(l.maxSamples,w.samples)}function tn(w){const y=r.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function q(w){const y=d.render.frame;S.get(w)!==y&&(S.set(w,y),w.update())}function Bt(w,y){const K=w.colorSpace,re=w.format,fe=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||K!==kc&&K!==ar&&(St.getTransfer(K)===It?(re!==Di||fe!==xi)&&nt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Mt("WebGLTextures: Unsupported texture color space:",K)),y}function Rt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(h.width=w.naturalWidth||w.width,h.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(h.width=w.displayWidth,h.height=w.displayHeight):(h.width=w.width,h.height=w.height),h}this.allocateTextureUnit=z,this.resetTextureUnits=he,this.getTextureUnits=ve,this.setTextureUnits=J,this.setTexture2D=te,this.setTexture2DArray=ge,this.setTexture3D=Ee,this.setTextureCube=U,this.rebindTextures=vt,this.setupRenderTarget=ft,this.updateRenderTargetMipmap=Jt,this.updateMultisampleRenderTarget=sn,this.setupDepthRenderbuffer=_t,this.setupFrameBufferTexture=Ke,this.useMultisampledRTT=tn,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function _3(s,e){function i(r,l=ar){let c;const d=St.getTransfer(l);if(r===xi)return s.UNSIGNED_BYTE;if(r===Bh)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Fh)return s.UNSIGNED_SHORT_5_5_5_1;if(r===ev)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===tv)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===J_)return s.BYTE;if(r===$_)return s.SHORT;if(r===Wo)return s.UNSIGNED_SHORT;if(r===Ih)return s.INT;if(r===Wi)return s.UNSIGNED_INT;if(r===Gi)return s.FLOAT;if(r===Ma)return s.HALF_FLOAT;if(r===nv)return s.ALPHA;if(r===iv)return s.RGB;if(r===Di)return s.RGBA;if(r===ba)return s.DEPTH_COMPONENT;if(r===zr)return s.DEPTH_STENCIL;if(r===av)return s.RED;if(r===Hh)return s.RED_INTEGER;if(r===Br)return s.RG;if(r===Gh)return s.RG_INTEGER;if(r===Vh)return s.RGBA_INTEGER;if(r===Oc||r===Pc||r===zc||r===Ic)if(d===It)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Oc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Pc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===zc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ic)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Oc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Pc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===zc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ic)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===eh||r===th||r===nh||r===ih)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===eh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===th)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===nh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ih)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ah||r===rh||r===sh||r===oh||r===lh||r===Gc||r===ch)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===ah||r===rh)return d===It?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===sh)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===oh)return c.COMPRESSED_R11_EAC;if(r===lh)return c.COMPRESSED_SIGNED_R11_EAC;if(r===Gc)return c.COMPRESSED_RG11_EAC;if(r===ch)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===uh||r===fh||r===dh||r===hh||r===ph||r===mh||r===gh||r===_h||r===vh||r===xh||r===Sh||r===yh||r===Mh||r===bh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===uh)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===fh)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===dh)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===hh)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ph)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===mh)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===gh)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===_h)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===vh)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===xh)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Sh)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===yh)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Mh)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===bh)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Eh||r===Th||r===Ah)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Eh)return d===It?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Th)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ah)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Rh||r===Ch||r===Vc||r===wh)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Rh)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Ch)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Vc)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===wh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===qo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const v3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,x3=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class S3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new gv(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new qi({vertexShader:v3,fragmentShader:x3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ea(new Kc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class y3 extends Gr{constructor(e,i){super();const r=this;let l=null,c=1,d=null,p="local-floor",m=1,h=null,S=null,x=null,_=null,b=null,A=null;const D=typeof XRWebGLBinding<"u",M=new S3,v={},H=i.getContextAttributes();let G=null,C=null;const I=[],N=[],P=new wt;let E=null;const O=new vi;O.viewport=new rn;const Y=new vi;Y.viewport=new rn;const k=[O,Y],Q=new Dy;let he=null,ve=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let Se=I[ae];return Se===void 0&&(Se=new xd,I[ae]=Se),Se.getTargetRaySpace()},this.getControllerGrip=function(ae){let Se=I[ae];return Se===void 0&&(Se=new xd,I[ae]=Se),Se.getGripSpace()},this.getHand=function(ae){let Se=I[ae];return Se===void 0&&(Se=new xd,I[ae]=Se),Se.getHandSpace()};function J(ae){const Se=N.indexOf(ae.inputSource);if(Se===-1)return;const Me=I[Se];Me!==void 0&&(Me.update(ae.inputSource,ae.frame,h||d),Me.dispatchEvent({type:ae.type,data:ae.inputSource}))}function z(){l.removeEventListener("select",J),l.removeEventListener("selectstart",J),l.removeEventListener("selectend",J),l.removeEventListener("squeeze",J),l.removeEventListener("squeezestart",J),l.removeEventListener("squeezeend",J),l.removeEventListener("end",z),l.removeEventListener("inputsourceschange",F);for(let ae=0;ae<I.length;ae++){const Se=N[ae];Se!==null&&(N[ae]=null,I[ae].disconnect(Se))}he=null,ve=null,M.reset();for(const ae in v)delete v[ae];e.setRenderTarget(G),b=null,_=null,x=null,l=null,C=null,ze.stop(),r.isPresenting=!1,e.setPixelRatio(E),e.setSize(P.width,P.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){c=ae,r.isPresenting===!0&&nt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){p=ae,r.isPresenting===!0&&nt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||d},this.setReferenceSpace=function(ae){h=ae},this.getBaseLayer=function(){return _!==null?_:b},this.getBinding=function(){return x===null&&D&&(x=new XRWebGLBinding(l,i)),x},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(ae){if(l=ae,l!==null){if(G=e.getRenderTarget(),l.addEventListener("select",J),l.addEventListener("selectstart",J),l.addEventListener("selectend",J),l.addEventListener("squeeze",J),l.addEventListener("squeezestart",J),l.addEventListener("squeezeend",J),l.addEventListener("end",z),l.addEventListener("inputsourceschange",F),H.xrCompatible!==!0&&await i.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(P),D&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,He=null,tt=null;H.depth&&(tt=H.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Me=H.stencil?zr:ba,He=H.stencil?qo:Wi);const Ke={colorFormat:i.RGBA8,depthFormat:tt,scaleFactor:c};x=this.getBinding(),_=x.createProjectionLayer(Ke),l.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),C=new Xi(_.textureWidth,_.textureHeight,{format:Di,type:xi,depthTexture:new Fs(_.textureWidth,_.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:H.stencil,colorSpace:e.outputColorSpace,samples:H.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const Me={antialias:H.antialias,alpha:!0,depth:H.depth,stencil:H.stencil,framebufferScaleFactor:c};b=new XRWebGLLayer(l,i,Me),l.updateRenderState({baseLayer:b}),e.setPixelRatio(1),e.setSize(b.framebufferWidth,b.framebufferHeight,!1),C=new Xi(b.framebufferWidth,b.framebufferHeight,{format:Di,type:xi,colorSpace:e.outputColorSpace,stencilBuffer:H.stencil,resolveDepthBuffer:b.ignoreDepthValues===!1,resolveStencilBuffer:b.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(m),h=null,d=await l.requestReferenceSpace(p),ze.setContext(l),ze.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function F(ae){for(let Se=0;Se<ae.removed.length;Se++){const Me=ae.removed[Se],He=N.indexOf(Me);He>=0&&(N[He]=null,I[He].disconnect(Me))}for(let Se=0;Se<ae.added.length;Se++){const Me=ae.added[Se];let He=N.indexOf(Me);if(He===-1){for(let Ke=0;Ke<I.length;Ke++)if(Ke>=N.length){N.push(Me),He=Ke;break}else if(N[Ke]===null){N[Ke]=Me,He=Ke;break}if(He===-1)break}const tt=I[He];tt&&tt.connect(Me)}}const te=new le,ge=new le;function Ee(ae,Se,Me){te.setFromMatrixPosition(Se.matrixWorld),ge.setFromMatrixPosition(Me.matrixWorld);const He=te.distanceTo(ge),tt=Se.projectionMatrix.elements,Ke=Me.projectionMatrix.elements,Wt=tt[14]/(tt[10]-1),ut=tt[14]/(tt[10]+1),_t=(tt[9]+1)/tt[5],vt=(tt[9]-1)/tt[5],ft=(tt[8]-1)/tt[0],Jt=(Ke[8]+1)/Ke[0],$t=Wt*ft,en=Wt*Jt,sn=He/(-ft+Jt),Xt=sn*-ft;if(Se.matrixWorld.decompose(ae.position,ae.quaternion,ae.scale),ae.translateX(Xt),ae.translateZ(sn),ae.matrixWorld.compose(ae.position,ae.quaternion,ae.scale),ae.matrixWorldInverse.copy(ae.matrixWorld).invert(),tt[10]===-1)ae.projectionMatrix.copy(Se.projectionMatrix),ae.projectionMatrixInverse.copy(Se.projectionMatrixInverse);else{const tn=Wt+sn,q=ut+sn,Bt=$t-Xt,Rt=en+(He-Xt),w=_t*ut/q*tn,y=vt*ut/q*tn;ae.projectionMatrix.makePerspective(Bt,Rt,w,y,tn,q),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert()}}function U(ae,Se){Se===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(Se.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(l===null)return;let Se=ae.near,Me=ae.far;M.texture!==null&&(M.depthNear>0&&(Se=M.depthNear),M.depthFar>0&&(Me=M.depthFar)),Q.near=Y.near=O.near=Se,Q.far=Y.far=O.far=Me,(he!==Q.near||ve!==Q.far)&&(l.updateRenderState({depthNear:Q.near,depthFar:Q.far}),he=Q.near,ve=Q.far),Q.layers.mask=ae.layers.mask|6,O.layers.mask=Q.layers.mask&-5,Y.layers.mask=Q.layers.mask&-3;const He=ae.parent,tt=Q.cameras;U(Q,He);for(let Ke=0;Ke<tt.length;Ke++)U(tt[Ke],He);tt.length===2?Ee(Q,O,Y):Q.projectionMatrix.copy(O.projectionMatrix),Z(ae,Q,He)};function Z(ae,Se,Me){Me===null?ae.matrix.copy(Se.matrixWorld):(ae.matrix.copy(Me.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(Se.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(Se.projectionMatrix),ae.projectionMatrixInverse.copy(Se.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=Dh*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return Q},this.getFoveation=function(){if(!(_===null&&b===null))return m},this.setFoveation=function(ae){m=ae,_!==null&&(_.fixedFoveation=ae),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=ae)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(Q)},this.getCameraTexture=function(ae){return v[ae]};let be=null;function Ce(ae,Se){if(S=Se.getViewerPose(h||d),A=Se,S!==null){const Me=S.views;b!==null&&(e.setRenderTargetFramebuffer(C,b.framebuffer),e.setRenderTarget(C));let He=!1;Me.length!==Q.cameras.length&&(Q.cameras.length=0,He=!0);for(let ut=0;ut<Me.length;ut++){const _t=Me[ut];let vt=null;if(b!==null)vt=b.getViewport(_t);else{const Jt=x.getViewSubImage(_,_t);vt=Jt.viewport,ut===0&&(e.setRenderTargetTextures(C,Jt.colorTexture,Jt.depthStencilTexture),e.setRenderTarget(C))}let ft=k[ut];ft===void 0&&(ft=new vi,ft.layers.enable(ut),ft.viewport=new rn,k[ut]=ft),ft.matrix.fromArray(_t.transform.matrix),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.projectionMatrix.fromArray(_t.projectionMatrix),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert(),ft.viewport.set(vt.x,vt.y,vt.width,vt.height),ut===0&&(Q.matrix.copy(ft.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)),He===!0&&Q.cameras.push(ft)}const tt=l.enabledFeatures;if(tt&&tt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&D){x=r.getBinding();const ut=x.getDepthInformation(Me[0]);ut&&ut.isValid&&ut.texture&&M.init(ut,l.renderState)}if(tt&&tt.includes("camera-access")&&D){e.state.unbindTexture(),x=r.getBinding();for(let ut=0;ut<Me.length;ut++){const _t=Me[ut].camera;if(_t){let vt=v[_t];vt||(vt=new gv,v[_t]=vt);const ft=x.getCameraImage(_t);vt.sourceTexture=ft}}}}for(let Me=0;Me<I.length;Me++){const He=N[Me],tt=I[Me];He!==null&&tt!==void 0&&tt.update(He,Se,h||d)}be&&be(ae,Se),Se.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:Se}),A=null}const ze=new Sv;ze.setAnimationLoop(Ce),this.setAnimationLoop=function(ae){be=ae},this.dispose=function(){}}}const M3=new cn,Rv=new rt;Rv.set(-1,0,0,0,1,0,0,0,1);function b3(s,e){function i(M,v){M.matrixAutoUpdate===!0&&M.updateMatrix(),v.value.copy(M.matrix)}function r(M,v){v.color.getRGB(M.fogColor.value,_v(s)),v.isFog?(M.fogNear.value=v.near,M.fogFar.value=v.far):v.isFogExp2&&(M.fogDensity.value=v.density)}function l(M,v,H,G,C){v.isNodeMaterial?v.uniformsNeedUpdate=!1:v.isMeshBasicMaterial?c(M,v):v.isMeshLambertMaterial?(c(M,v),v.envMap&&(M.envMapIntensity.value=v.envMapIntensity)):v.isMeshToonMaterial?(c(M,v),x(M,v)):v.isMeshPhongMaterial?(c(M,v),S(M,v),v.envMap&&(M.envMapIntensity.value=v.envMapIntensity)):v.isMeshStandardMaterial?(c(M,v),_(M,v),v.isMeshPhysicalMaterial&&b(M,v,C)):v.isMeshMatcapMaterial?(c(M,v),A(M,v)):v.isMeshDepthMaterial?c(M,v):v.isMeshDistanceMaterial?(c(M,v),D(M,v)):v.isMeshNormalMaterial?c(M,v):v.isLineBasicMaterial?(d(M,v),v.isLineDashedMaterial&&p(M,v)):v.isPointsMaterial?m(M,v,H,G):v.isSpriteMaterial?h(M,v):v.isShadowMaterial?(M.color.value.copy(v.color),M.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(M,v){M.opacity.value=v.opacity,v.color&&M.diffuse.value.copy(v.color),v.emissive&&M.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.bumpMap&&(M.bumpMap.value=v.bumpMap,i(v.bumpMap,M.bumpMapTransform),M.bumpScale.value=v.bumpScale,v.side===Yn&&(M.bumpScale.value*=-1)),v.normalMap&&(M.normalMap.value=v.normalMap,i(v.normalMap,M.normalMapTransform),M.normalScale.value.copy(v.normalScale),v.side===Yn&&M.normalScale.value.negate()),v.displacementMap&&(M.displacementMap.value=v.displacementMap,i(v.displacementMap,M.displacementMapTransform),M.displacementScale.value=v.displacementScale,M.displacementBias.value=v.displacementBias),v.emissiveMap&&(M.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,M.emissiveMapTransform)),v.specularMap&&(M.specularMap.value=v.specularMap,i(v.specularMap,M.specularMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest);const H=e.get(v),G=H.envMap,C=H.envMapRotation;G&&(M.envMap.value=G,M.envMapRotation.value.setFromMatrix4(M3.makeRotationFromEuler(C)).transpose(),G.isCubeTexture&&G.isRenderTargetTexture===!1&&M.envMapRotation.value.premultiply(Rv),M.reflectivity.value=v.reflectivity,M.ior.value=v.ior,M.refractionRatio.value=v.refractionRatio),v.lightMap&&(M.lightMap.value=v.lightMap,M.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,M.lightMapTransform)),v.aoMap&&(M.aoMap.value=v.aoMap,M.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,M.aoMapTransform))}function d(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform))}function p(M,v){M.dashSize.value=v.dashSize,M.totalSize.value=v.dashSize+v.gapSize,M.scale.value=v.scale}function m(M,v,H,G){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.size.value=v.size*H,M.scale.value=G*.5,v.map&&(M.map.value=v.map,i(v.map,M.uvTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function h(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.rotation.value=v.rotation,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function S(M,v){M.specular.value.copy(v.specular),M.shininess.value=Math.max(v.shininess,1e-4)}function x(M,v){v.gradientMap&&(M.gradientMap.value=v.gradientMap)}function _(M,v){M.metalness.value=v.metalness,v.metalnessMap&&(M.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,M.metalnessMapTransform)),M.roughness.value=v.roughness,v.roughnessMap&&(M.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,M.roughnessMapTransform)),v.envMap&&(M.envMapIntensity.value=v.envMapIntensity)}function b(M,v,H){M.ior.value=v.ior,v.sheen>0&&(M.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),M.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(M.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,M.sheenColorMapTransform)),v.sheenRoughnessMap&&(M.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,M.sheenRoughnessMapTransform))),v.clearcoat>0&&(M.clearcoat.value=v.clearcoat,M.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(M.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,M.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(M.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Yn&&M.clearcoatNormalScale.value.negate())),v.dispersion>0&&(M.dispersion.value=v.dispersion),v.iridescence>0&&(M.iridescence.value=v.iridescence,M.iridescenceIOR.value=v.iridescenceIOR,M.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(M.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,M.iridescenceMapTransform)),v.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),v.transmission>0&&(M.transmission.value=v.transmission,M.transmissionSamplerMap.value=H.texture,M.transmissionSamplerSize.value.set(H.width,H.height),v.transmissionMap&&(M.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,M.transmissionMapTransform)),M.thickness.value=v.thickness,v.thicknessMap&&(M.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=v.attenuationDistance,M.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(M.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(M.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=v.specularIntensity,M.specularColor.value.copy(v.specularColor),v.specularColorMap&&(M.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,M.specularColorMapTransform)),v.specularIntensityMap&&(M.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,M.specularIntensityMapTransform))}function A(M,v){v.matcap&&(M.matcap.value=v.matcap)}function D(M,v){const H=e.get(v).light;M.referencePosition.value.setFromMatrixPosition(H.matrixWorld),M.nearDistance.value=H.shadow.camera.near,M.farDistance.value=H.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function E3(s,e,i,r){let l={},c={},d=[];const p=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(C,I){const N=I.program;r.uniformBlockBinding(C,N)}function h(C,I){let N=l[C.id];N===void 0&&(M(C),N=S(C),l[C.id]=N,C.addEventListener("dispose",H));const P=I.program;r.updateUBOMapping(C,P);const E=e.render.frame;c[C.id]!==E&&(_(C),c[C.id]=E)}function S(C){const I=x();C.__bindingPointIndex=I;const N=s.createBuffer(),P=C.__size,E=C.usage;return s.bindBuffer(s.UNIFORM_BUFFER,N),s.bufferData(s.UNIFORM_BUFFER,P,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,I,N),N}function x(){for(let C=0;C<p;C++)if(d.indexOf(C)===-1)return d.push(C),C;return Mt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(C){const I=l[C.id],N=C.uniforms,P=C.__cache;s.bindBuffer(s.UNIFORM_BUFFER,I);for(let E=0,O=N.length;E<O;E++){const Y=N[E];if(Array.isArray(Y))for(let k=0,Q=Y.length;k<Q;k++)b(Y[k],E,k,P);else b(Y,E,0,P)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function b(C,I,N,P){if(D(C,I,N,P)===!0){const E=C.__offset,O=C.value;if(Array.isArray(O)){let Y=0;for(let k=0;k<O.length;k++){const Q=O[k],he=v(Q);A(Q,C.__data,Y),typeof Q!="number"&&typeof Q!="boolean"&&!Q.isMatrix3&&!ArrayBuffer.isView(Q)&&(Y+=he.storage/Float32Array.BYTES_PER_ELEMENT)}}else A(O,C.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,E,C.__data)}}function A(C,I,N){typeof C=="number"||typeof C=="boolean"?I[0]=C:C.isMatrix3?(I[0]=C.elements[0],I[1]=C.elements[1],I[2]=C.elements[2],I[3]=0,I[4]=C.elements[3],I[5]=C.elements[4],I[6]=C.elements[5],I[7]=0,I[8]=C.elements[6],I[9]=C.elements[7],I[10]=C.elements[8],I[11]=0):ArrayBuffer.isView(C)?I.set(new C.constructor(C.buffer,C.byteOffset,I.length)):C.toArray(I,N)}function D(C,I,N,P){const E=C.value,O=I+"_"+N;if(P[O]===void 0)return typeof E=="number"||typeof E=="boolean"?P[O]=E:ArrayBuffer.isView(E)?P[O]=E.slice():P[O]=E.clone(),!0;{const Y=P[O];if(typeof E=="number"||typeof E=="boolean"){if(Y!==E)return P[O]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(Y.equals(E)===!1)return Y.copy(E),!0}}return!1}function M(C){const I=C.uniforms;let N=0;const P=16;for(let O=0,Y=I.length;O<Y;O++){const k=Array.isArray(I[O])?I[O]:[I[O]];for(let Q=0,he=k.length;Q<he;Q++){const ve=k[Q],J=Array.isArray(ve.value)?ve.value:[ve.value];for(let z=0,F=J.length;z<F;z++){const te=J[z],ge=v(te),Ee=N%P,U=Ee%ge.boundary,Z=Ee+U;N+=U,Z!==0&&P-Z<ge.storage&&(N+=P-Z),ve.__data=new Float32Array(ge.storage/Float32Array.BYTES_PER_ELEMENT),ve.__offset=N,N+=ge.storage}}}const E=N%P;return E>0&&(N+=P-E),C.__size=N,C.__cache={},this}function v(C){const I={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(I.boundary=4,I.storage=4):C.isVector2?(I.boundary=8,I.storage=8):C.isVector3||C.isColor?(I.boundary=16,I.storage=12):C.isVector4?(I.boundary=16,I.storage=16):C.isMatrix3?(I.boundary=48,I.storage=48):C.isMatrix4?(I.boundary=64,I.storage=64):C.isTexture?nt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(I.boundary=16,I.storage=C.byteLength):nt("WebGLRenderer: Unsupported uniform value type.",C),I}function H(C){const I=C.target;I.removeEventListener("dispose",H);const N=d.indexOf(I.__bindingPointIndex);d.splice(N,1),s.deleteBuffer(l[I.id]),delete l[I.id],delete c[I.id]}function G(){for(const C in l)s.deleteBuffer(l[C]);d=[],l={},c={}}return{bind:m,update:h,dispose:G}}const T3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Fi=null;function A3(){return Fi===null&&(Fi=new gy(T3,16,16,Br,Ma),Fi.name="DFG_LUT",Fi.minFilter=Pn,Fi.magFilter=Pn,Fi.wrapS=va,Fi.wrapT=va,Fi.generateMipmaps=!1,Fi.needsUpdate=!0),Fi}class R3{constructor(e={}){const{canvas:i=YS(),context:r=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:h=!1,powerPreference:S="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:_=!1,outputBufferType:b=xi}=e;this.isWebGLRenderer=!0;let A;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");A=r.getContextAttributes().alpha}else A=d;const D=b,M=new Set([Vh,Gh,Hh]),v=new Set([xi,Wi,Wo,qo,Bh,Fh]),H=new Uint32Array(4),G=new Int32Array(4),C=new le;let I=null,N=null;const P=[],E=[];let O=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const Y=this;let k=!1,Q=null,he=null,ve=null,J=null;this._outputColorSpace=_i;let z=0,F=0,te=null,ge=-1,Ee=null;const U=new rn,Z=new rn;let be=null;const Ce=new bt(0);let ze=0,ae=i.width,Se=i.height,Me=1,He=null,tt=null;const Ke=new rn(0,0,ae,Se),Wt=new rn(0,0,ae,Se);let ut=!1;const _t=new hv;let vt=!1,ft=!1;const Jt=new cn,$t=new le,en=new rn,sn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xt=!1;function tn(){return te===null?Me:1}let q=r;function Bt(T,W){return i.getContext(T,W)}try{const T={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:h,powerPreference:S,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${zh}`),i.addEventListener("webglcontextlost",jt,!1),i.addEventListener("webglcontextrestored",Ut,!1),i.addEventListener("webglcontextcreationerror",Zn,!1),q===null){const W="webgl2";if(q=Bt(W,T),q===null)throw Bt(W)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(T){throw Mt("WebGLRenderer: "+T.message),T}let Rt,w,y,K,re,fe,Te,De,ue,de,Re,Be,Ne,Ue,Ze,Qe,it,X,Ae,me,we,Ie,ye;function qe(){Rt=new Ab(q),Rt.init(),we=new _3(q,Rt),w=new vb(q,Rt,e,we),y=new m3(q,Rt),w.reversedDepthBuffer&&_&&y.buffers.depth.setReversed(!0),he=q.createFramebuffer(),ve=q.createFramebuffer(),J=q.createFramebuffer(),K=new wb(q),re=new t3,fe=new g3(q,Rt,y,re,w,we,K),Te=new Tb(Y),De=new Ny(q),Ie=new gb(q,De),ue=new Rb(q,De,K,Ie),de=new Ub(q,ue,De,Ie,K),X=new Db(q,w,fe),Ze=new xb(re),Re=new e3(Y,Te,Rt,w,Ie,Ze),Be=new b3(Y,re),Ne=new i3,Ue=new c3(Rt),it=new mb(Y,Te,y,de,A,m),Qe=new p3(Y,de,w),ye=new E3(q,K,w,y),Ae=new _b(q,Rt,K),me=new Cb(q,Rt,K),K.programs=Re.programs,Y.capabilities=w,Y.extensions=Rt,Y.properties=re,Y.renderLists=Ne,Y.shadowMap=Qe,Y.state=y,Y.info=K}qe(),D!==xi&&(O=new Nb(D,i.width,i.height,p,l,c));const Ve=new y3(Y,q);this.xr=Ve,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const T=Rt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Rt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Me},this.setPixelRatio=function(T){T!==void 0&&(Me=T,this.setSize(ae,Se,!1))},this.getSize=function(T){return T.set(ae,Se)},this.setSize=function(T,W,se=!0){if(Ve.isPresenting){nt("WebGLRenderer: Can't change size while VR device is presenting.");return}ae=T,Se=W,i.width=Math.floor(T*Me),i.height=Math.floor(W*Me),se===!0&&(i.style.width=T+"px",i.style.height=W+"px"),O!==null&&O.setSize(i.width,i.height),this.setViewport(0,0,T,W)},this.getDrawingBufferSize=function(T){return T.set(ae*Me,Se*Me).floor()},this.setDrawingBufferSize=function(T,W,se){ae=T,Se=W,Me=se,i.width=Math.floor(T*se),i.height=Math.floor(W*se),this.setViewport(0,0,T,W)},this.setEffects=function(T){if(D===xi){Mt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let W=0;W<T.length;W++)if(T[W].isOutputPass===!0){nt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(U)},this.getViewport=function(T){return T.copy(Ke)},this.setViewport=function(T,W,se,ne){T.isVector4?Ke.set(T.x,T.y,T.z,T.w):Ke.set(T,W,se,ne),y.viewport(U.copy(Ke).multiplyScalar(Me).round())},this.getScissor=function(T){return T.copy(Wt)},this.setScissor=function(T,W,se,ne){T.isVector4?Wt.set(T.x,T.y,T.z,T.w):Wt.set(T,W,se,ne),y.scissor(Z.copy(Wt).multiplyScalar(Me).round())},this.getScissorTest=function(){return ut},this.setScissorTest=function(T){y.setScissorTest(ut=T)},this.setOpaqueSort=function(T){He=T},this.setTransparentSort=function(T){tt=T},this.getClearColor=function(T){return T.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor(...arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha(...arguments)},this.clear=function(T=!0,W=!0,se=!0){let ne=0;if(T){let ie=!1;if(te!==null){const Oe=te.texture.format;ie=M.has(Oe)}if(ie){const Oe=te.texture.type,Ge=v.has(Oe),Le=it.getClearColor(),Xe=it.getClearAlpha(),ke=Le.r,Je=Le.g,st=Le.b;Ge?(H[0]=ke,H[1]=Je,H[2]=st,H[3]=Xe,q.clearBufferuiv(q.COLOR,0,H)):(G[0]=ke,G[1]=Je,G[2]=st,G[3]=Xe,q.clearBufferiv(q.COLOR,0,G))}else ne|=q.COLOR_BUFFER_BIT}W&&(ne|=q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),se&&(ne|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne!==0&&q.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),Q=T},this.dispose=function(){i.removeEventListener("webglcontextlost",jt,!1),i.removeEventListener("webglcontextrestored",Ut,!1),i.removeEventListener("webglcontextcreationerror",Zn,!1),it.dispose(),Ne.dispose(),Ue.dispose(),re.dispose(),Te.dispose(),de.dispose(),Ie.dispose(),ye.dispose(),Re.dispose(),Ve.dispose(),Ve.removeEventListener("sessionstart",un),Ve.removeEventListener("sessionend",En),Fn.stop()};function jt(T){T.preventDefault(),Zg("WebGLRenderer: Context Lost."),k=!0}function Ut(){Zg("WebGLRenderer: Context Restored."),k=!1;const T=K.autoReset,W=Qe.enabled,se=Qe.autoUpdate,ne=Qe.needsUpdate,ie=Qe.type;qe(),K.autoReset=T,Qe.enabled=W,Qe.autoUpdate=se,Qe.needsUpdate=ne,Qe.type=ie}function Zn(T){Mt("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Kn(T){const W=T.target;W.removeEventListener("dispose",Kn),ks(W)}function ks(T){Xs(T),re.remove(T)}function Xs(T){const W=re.get(T).programs;W!==void 0&&(W.forEach(function(se){Re.releaseProgram(se)}),T.isShaderMaterial&&Re.releaseShaderCache(T))}this.renderBufferDirect=function(T,W,se,ne,ie,Oe){W===null&&(W=sn);const Ge=ie.isMesh&&ie.matrixWorld.determinantAffine()<0,Le=Ra(T,W,se,ne,ie);y.setMaterial(ne,Ge);let Xe=se.index,ke=1;if(ne.wireframe===!0){if(Xe=ue.getWireframeAttribute(se),Xe===void 0)return;ke=2}const Je=se.drawRange,st=se.attributes.position;let je=Je.start*ke,Et=(Je.start+Je.count)*ke;Oe!==null&&(je=Math.max(je,Oe.start*ke),Et=Math.min(Et,(Oe.start+Oe.count)*ke)),Xe!==null?(je=Math.max(je,0),Et=Math.min(Et,Xe.count)):st!=null&&(je=Math.max(je,0),Et=Math.min(Et,st.count));const Zt=Et-je;if(Zt<0||Zt===1/0)return;Ie.setup(ie,ne,Le,se,Xe);let Vt,Lt=Ae;if(Xe!==null&&(Vt=De.get(Xe),Lt=me,Lt.setIndex(Vt)),ie.isMesh)ne.wireframe===!0?(y.setLineWidth(ne.wireframeLinewidth*tn()),Lt.setMode(q.LINES)):Lt.setMode(q.TRIANGLES);else if(ie.isLine){let Nt=ne.linewidth;Nt===void 0&&(Nt=1),y.setLineWidth(Nt*tn()),ie.isLineSegments?Lt.setMode(q.LINES):ie.isLineLoop?Lt.setMode(q.LINE_LOOP):Lt.setMode(q.LINE_STRIP)}else ie.isPoints?Lt.setMode(q.POINTS):ie.isSprite&&Lt.setMode(q.TRIANGLES);if(ie.isBatchedMesh)if(Rt.get("WEBGL_multi_draw"))Lt.renderMultiDraw(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount);else{const Nt=ie._multiDrawStarts,Fe=ie._multiDrawCounts,Un=ie._multiDrawCount,dt=Xe?De.get(Xe).bytesPerElement:1,_n=re.get(ne).currentProgram.getUniforms();for(let Qn=0;Qn<Un;Qn++)_n.setValue(q,"_gl_DrawID",Qn),Lt.render(Nt[Qn]/dt,Fe[Qn])}else if(ie.isInstancedMesh)Lt.renderInstances(je,Zt,ie.count);else if(se.isInstancedBufferGeometry){const Nt=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,Fe=Math.min(se.instanceCount,Nt);Lt.renderInstances(je,Zt,Fe)}else Lt.render(je,Zt)};function Ws(T,W,se){T.transparent===!0&&T.side===_a&&T.forceSinglePass===!1?(T.side=Yn,T.needsUpdate=!0,Aa(T,W,se),T.side=or,T.needsUpdate=!0,Aa(T,W,se),T.side=_a):Aa(T,W,se)}this.compile=function(T,W,se=null){se===null&&(se=T),N=Ue.get(se),N.init(W),E.push(N),se.traverseVisible(function(ie){ie.isLight&&ie.layers.test(W.layers)&&(N.pushLight(ie),ie.castShadow&&N.pushShadow(ie))}),T!==se&&T.traverseVisible(function(ie){ie.isLight&&ie.layers.test(W.layers)&&(N.pushLight(ie),ie.castShadow&&N.pushShadow(ie))}),N.setupLights();const ne=new Set;return T.traverse(function(ie){if(!(ie.isMesh||ie.isPoints||ie.isLine||ie.isSprite))return;const Oe=ie.material;if(Oe)if(Array.isArray(Oe))for(let Ge=0;Ge<Oe.length;Ge++){const Le=Oe[Ge];Ws(Le,se,ie),ne.add(Le)}else Ws(Oe,se,ie),ne.add(Oe)}),N=E.pop(),ne},this.compileAsync=function(T,W,se=null){const ne=this.compile(T,W,se);return new Promise(ie=>{function Oe(){if(ne.forEach(function(Ge){re.get(Ge).currentProgram.isReady()&&ne.delete(Ge)}),ne.size===0){ie(T);return}setTimeout(Oe,10)}Rt.get("KHR_parallel_shader_compile")!==null?Oe():setTimeout(Oe,10)})};let Vr=null;function Li(T){Vr&&Vr(T)}function un(){Fn.stop()}function En(){Fn.start()}const Fn=new Sv;Fn.setAnimationLoop(Li),typeof self<"u"&&Fn.setContext(self),this.setAnimationLoop=function(T){Vr=T,Ve.setAnimationLoop(T),T===null?Fn.stop():Fn.start()},Ve.addEventListener("sessionstart",un),Ve.addEventListener("sessionend",En),this.render=function(T,W){if(W!==void 0&&W.isCamera!==!0){Mt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;Q!==null&&Q.renderStart(T,W);const se=Ve.enabled===!0&&Ve.isPresenting===!0,ne=O!==null&&(te===null||se)&&O.begin(Y,te);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Ve.enabled===!0&&Ve.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(Ve.cameraAutoUpdate===!0&&Ve.updateCamera(W),W=Ve.getCamera()),T.isScene===!0&&T.onBeforeRender(Y,T,W,te),N=Ue.get(T,E.length),N.init(W),N.state.textureUnits=fe.getTextureUnits(),E.push(N),Jt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),_t.setFromProjectionMatrix(Jt,Vi,W.reversedDepth),ft=this.localClippingEnabled,vt=Ze.init(this.clippingPlanes,ft),I=Ne.get(T,P.length),I.init(),P.push(I),Ve.enabled===!0&&Ve.isPresenting===!0){const Ge=Y.xr.getDepthSensingMesh();Ge!==null&&lr(Ge,W,-1/0,Y.sortObjects)}lr(T,W,0,Y.sortObjects),I.finish(),Y.sortObjects===!0&&I.sort(He,tt,W.reversedDepth),Xt=Ve.enabled===!1||Ve.isPresenting===!1||Ve.hasDepthSensing()===!1,Xt&&it.addToRenderList(I,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),vt===!0&&Ze.beginShadows();const ie=N.state.shadowsArray;if(Qe.render(ie,T,W),vt===!0&&Ze.endShadows(),(ne&&O.hasRenderPass())===!1){const Ge=I.opaque,Le=I.transmissive;if(N.setupLights(),W.isArrayCamera){const Xe=W.cameras;if(Le.length>0)for(let ke=0,Je=Xe.length;ke<Je;ke++){const st=Xe[ke];Jo(Ge,Le,T,st)}Xt&&it.render(T);for(let ke=0,Je=Xe.length;ke<Je;ke++){const st=Xe[ke];Qo(I,T,st,st.viewport)}}else Le.length>0&&Jo(Ge,Le,T,W),Xt&&it.render(T),Qo(I,T,W)}te!==null&&F===0&&(fe.updateMultisampleRenderTarget(te),fe.updateRenderTargetMipmap(te)),ne&&O.end(Y),T.isScene===!0&&T.onAfterRender(Y,T,W),Ie.resetDefaultState(),ge=-1,Ee=null,E.pop(),E.length>0?(N=E[E.length-1],fe.setTextureUnits(N.state.textureUnits),vt===!0&&Ze.setGlobalState(Y.clippingPlanes,N.state.camera)):N=null,P.pop(),P.length>0?I=P[P.length-1]:I=null,Q!==null&&Q.renderEnd()};function lr(T,W,se,ne){if(T.visible===!1)return;if(T.layers.test(W.layers)){if(T.isGroup)se=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(W);else if(T.isLightProbeGrid)N.pushLightProbeGrid(T);else if(T.isLight)N.pushLight(T),T.castShadow&&N.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||_t.intersectsSprite(T)){ne&&en.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Jt);const Ge=de.update(T),Le=T.material;Le.visible&&I.push(T,Ge,Le,se,en.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||_t.intersectsObject(T))){const Ge=de.update(T),Le=T.material;if(ne&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),en.copy(T.boundingSphere.center)):(Ge.boundingSphere===null&&Ge.computeBoundingSphere(),en.copy(Ge.boundingSphere.center)),en.applyMatrix4(T.matrixWorld).applyMatrix4(Jt)),Array.isArray(Le)){const Xe=Ge.groups;for(let ke=0,Je=Xe.length;ke<Je;ke++){const st=Xe[ke],je=Le[st.materialIndex];je&&je.visible&&I.push(T,Ge,je,se,en.z,st)}}else Le.visible&&I.push(T,Ge,Le,se,en.z,null)}}const Oe=T.children;for(let Ge=0,Le=Oe.length;Ge<Le;Ge++)lr(Oe[Ge],W,se,ne)}function Qo(T,W,se,ne){const{opaque:ie,transmissive:Oe,transparent:Ge}=T;N.setupLightsView(se),vt===!0&&Ze.setGlobalState(Y.clippingPlanes,se),ne&&y.viewport(U.copy(ne)),ie.length>0&&cr(ie,W,se),Oe.length>0&&cr(Oe,W,se),Ge.length>0&&cr(Ge,W,se),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function Jo(T,W,se,ne){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[ne.id]===void 0){const je=Rt.has("EXT_color_buffer_half_float")||Rt.has("EXT_color_buffer_float");N.state.transmissionRenderTarget[ne.id]=new Xi(1,1,{generateMipmaps:!0,type:je?Ma:xi,minFilter:Pr,samples:Math.max(4,w.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:St.workingColorSpace})}const Oe=N.state.transmissionRenderTarget[ne.id],Ge=ne.viewport||U;Oe.setSize(Ge.z*Y.transmissionResolutionScale,Ge.w*Y.transmissionResolutionScale);const Le=Y.getRenderTarget(),Xe=Y.getActiveCubeFace(),ke=Y.getActiveMipmapLevel();Y.setRenderTarget(Oe),Y.getClearColor(Ce),ze=Y.getClearAlpha(),ze<1&&Y.setClearColor(16777215,.5),Y.clear(),Xt&&it.render(se);const Je=Y.toneMapping;Y.toneMapping=ki;const st=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),N.setupLightsView(ne),vt===!0&&Ze.setGlobalState(Y.clippingPlanes,ne),cr(T,se,ne),fe.updateMultisampleRenderTarget(Oe),fe.updateRenderTargetMipmap(Oe),Rt.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let Et=0,Zt=W.length;Et<Zt;Et++){const Vt=W[Et],{object:Lt,geometry:Nt,material:Fe,group:Un}=Vt;if(Fe.side===_a&&Lt.layers.test(ne.layers)){const dt=Fe.side;Fe.side=Yn,Fe.needsUpdate=!0,Ta(Lt,se,ne,Nt,Fe,Un),Fe.side=dt,Fe.needsUpdate=!0,je=!0}}je===!0&&(fe.updateMultisampleRenderTarget(Oe),fe.updateRenderTargetMipmap(Oe))}Y.setRenderTarget(Le,Xe,ke),Y.setClearColor(Ce,ze),st!==void 0&&(ne.viewport=st),Y.toneMapping=Je}function cr(T,W,se){const ne=W.isScene===!0?W.overrideMaterial:null;for(let ie=0,Oe=T.length;ie<Oe;ie++){const Ge=T[ie],{object:Le,geometry:Xe,group:ke}=Ge;let Je=Ge.material;Je.allowOverride===!0&&ne!==null&&(Je=ne),Le.layers.test(se.layers)&&Ta(Le,W,se,Xe,Je,ke)}}function Ta(T,W,se,ne,ie,Oe){T.onBeforeRender(Y,W,se,ne,ie,Oe),T.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),ie.onBeforeRender(Y,W,se,ne,T,Oe),ie.transparent===!0&&ie.side===_a&&ie.forceSinglePass===!1?(ie.side=Yn,ie.needsUpdate=!0,Y.renderBufferDirect(se,W,ne,ie,T,Oe),ie.side=or,ie.needsUpdate=!0,Y.renderBufferDirect(se,W,ne,ie,T,Oe),ie.side=_a):Y.renderBufferDirect(se,W,ne,ie,T,Oe),T.onAfterRender(Y,W,se,ne,ie,Oe)}function Aa(T,W,se){W.isScene!==!0&&(W=sn);const ne=re.get(T),ie=N.state.lights,Oe=N.state.shadowsArray,Ge=ie.state.version,Le=Re.getParameters(T,ie.state,Oe,W,se,N.state.lightProbeGridArray),Xe=Re.getProgramCacheKey(Le);let ke=ne.programs;ne.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?W.environment:null,ne.fog=W.fog;const Je=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;ne.envMap=Te.get(T.envMap||ne.environment,Je),ne.envMapRotation=ne.environment!==null&&T.envMap===null?W.environmentRotation:T.envMapRotation,ke===void 0&&(T.addEventListener("dispose",Kn),ke=new Map,ne.programs=ke);let st=ke.get(Xe);if(st!==void 0){if(ne.currentProgram===st&&ne.lightsStateVersion===Ge)return ji(T,Le),st}else Le.uniforms=Re.getUniforms(T),Q!==null&&T.isNodeMaterial&&Q.build(T,se,Le),T.onBeforeCompile(Le,Y),st=Re.acquireProgram(Le,Xe),ke.set(Xe,st),ne.uniforms=Le.uniforms;const je=ne.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(je.clippingPlanes=Ze.uniform),ji(T,Le),ne.needsLights=$o(T),ne.lightsStateVersion=Ge,ne.needsLights&&(je.ambientLightColor.value=ie.state.ambient,je.lightProbe.value=ie.state.probe,je.directionalLights.value=ie.state.directional,je.directionalLightShadows.value=ie.state.directionalShadow,je.spotLights.value=ie.state.spot,je.spotLightShadows.value=ie.state.spotShadow,je.rectAreaLights.value=ie.state.rectArea,je.ltc_1.value=ie.state.rectAreaLTC1,je.ltc_2.value=ie.state.rectAreaLTC2,je.pointLights.value=ie.state.point,je.pointLightShadows.value=ie.state.pointShadow,je.hemisphereLights.value=ie.state.hemi,je.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,je.spotLightMatrix.value=ie.state.spotLightMatrix,je.spotLightMap.value=ie.state.spotLightMap,je.pointShadowMatrix.value=ie.state.pointShadowMatrix),ne.lightProbeGrid=N.state.lightProbeGridArray.length>0,ne.currentProgram=st,ne.uniformsList=null,st}function Yi(T){if(T.uniformsList===null){const W=T.currentProgram.getUniforms();T.uniformsList=Bc.seqWithValue(W.seq,T.uniforms)}return T.uniformsList}function ji(T,W){const se=re.get(T);se.outputColorSpace=W.outputColorSpace,se.batching=W.batching,se.batchingColor=W.batchingColor,se.instancing=W.instancing,se.instancingColor=W.instancingColor,se.instancingMorph=W.instancingMorph,se.skinning=W.skinning,se.morphTargets=W.morphTargets,se.morphNormals=W.morphNormals,se.morphColors=W.morphColors,se.morphTargetsCount=W.morphTargetsCount,se.numClippingPlanes=W.numClippingPlanes,se.numIntersection=W.numClipIntersection,se.vertexAlphas=W.vertexAlphas,se.vertexTangents=W.vertexTangents,se.toneMapping=W.toneMapping}function ur(T,W){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;C.setFromMatrixPosition(W.matrixWorld);for(let se=0,ne=T.length;se<ne;se++){const ie=T[se];if(ie.texture!==null&&ie.boundingBox.containsPoint(C))return ie}return null}function Ra(T,W,se,ne,ie){W.isScene!==!0&&(W=sn),fe.resetTextureUnits();const Oe=W.fog,Ge=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial?W.environment:null,Le=te===null?Y.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:St.workingColorSpace,Xe=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial&&!ne.envMap||ne.isMeshPhongMaterial&&!ne.envMap,ke=Te.get(ne.envMap||Ge,Xe),Je=ne.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,st=!!se.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),je=!!se.morphAttributes.position,Et=!!se.morphAttributes.normal,Zt=!!se.morphAttributes.color;let Vt=ki;ne.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Vt=Y.toneMapping);const Lt=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,Nt=Lt!==void 0?Lt.length:0,Fe=re.get(ne),Un=N.state.lights;if(vt===!0&&(ft===!0||T!==Ee)){const Dt=T===Ee&&ne.id===ge;Ze.setState(ne,T,Dt)}let dt=!1;ne.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==Un.state.version||Fe.outputColorSpace!==Le||ie.isBatchedMesh&&Fe.batching===!1||!ie.isBatchedMesh&&Fe.batching===!0||ie.isBatchedMesh&&Fe.batchingColor===!0&&ie.colorTexture===null||ie.isBatchedMesh&&Fe.batchingColor===!1&&ie.colorTexture!==null||ie.isInstancedMesh&&Fe.instancing===!1||!ie.isInstancedMesh&&Fe.instancing===!0||ie.isSkinnedMesh&&Fe.skinning===!1||!ie.isSkinnedMesh&&Fe.skinning===!0||ie.isInstancedMesh&&Fe.instancingColor===!0&&ie.instanceColor===null||ie.isInstancedMesh&&Fe.instancingColor===!1&&ie.instanceColor!==null||ie.isInstancedMesh&&Fe.instancingMorph===!0&&ie.morphTexture===null||ie.isInstancedMesh&&Fe.instancingMorph===!1&&ie.morphTexture!==null||Fe.envMap!==ke||ne.fog===!0&&Fe.fog!==Oe||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==Ze.numPlanes||Fe.numIntersection!==Ze.numIntersection)||Fe.vertexAlphas!==Je||Fe.vertexTangents!==st||Fe.morphTargets!==je||Fe.morphNormals!==Et||Fe.morphColors!==Zt||Fe.toneMapping!==Vt||Fe.morphTargetsCount!==Nt||!!Fe.lightProbeGrid!=N.state.lightProbeGridArray.length>0)&&(dt=!0):(dt=!0,Fe.__version=ne.version);let _n=Fe.currentProgram;dt===!0&&(_n=Aa(ne,W,ie),Q&&ne.isNodeMaterial&&Q.onUpdateProgram(ne,_n,Fe));let Qn=!1,yi=!1,Jn=!1;const Ot=_n.getUniforms(),Kt=Fe.uniforms;if(y.useProgram(_n.program)&&(Qn=!0,yi=!0,Jn=!0),ne.id!==ge&&(ge=ne.id,yi=!0),Fe.needsLights){const Dt=ur(N.state.lightProbeGridArray,ie);Fe.lightProbeGrid!==Dt&&(Fe.lightProbeGrid=Dt,yi=!0)}if(Qn||Ee!==T){y.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Ot.setValue(q,"projectionMatrix",T.projectionMatrix),Ot.setValue(q,"viewMatrix",T.matrixWorldInverse);const Ni=Ot.map.cameraPosition;Ni!==void 0&&Ni.setValue(q,$t.setFromMatrixPosition(T.matrixWorld)),w.logarithmicDepthBuffer&&Ot.setValue(q,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Ot.setValue(q,"isOrthographic",T.isOrthographicCamera===!0),Ee!==T&&(Ee=T,yi=!0,Jn=!0)}if(Fe.needsLights&&(Un.state.directionalShadowMap.length>0&&Ot.setValue(q,"directionalShadowMap",Un.state.directionalShadowMap,fe),Un.state.spotShadowMap.length>0&&Ot.setValue(q,"spotShadowMap",Un.state.spotShadowMap,fe),Un.state.pointShadowMap.length>0&&Ot.setValue(q,"pointShadowMap",Un.state.pointShadowMap,fe)),ie.isSkinnedMesh){Ot.setOptional(q,ie,"bindMatrix"),Ot.setOptional(q,ie,"bindMatrixInverse");const Dt=ie.skeleton;Dt&&(Dt.boneTexture===null&&Dt.computeBoneTexture(),Ot.setValue(q,"boneTexture",Dt.boneTexture,fe))}ie.isBatchedMesh&&(Ot.setOptional(q,ie,"batchingTexture"),Ot.setValue(q,"batchingTexture",ie._matricesTexture,fe),Ot.setOptional(q,ie,"batchingIdTexture"),Ot.setValue(q,"batchingIdTexture",ie._indirectTexture,fe),Ot.setOptional(q,ie,"batchingColorTexture"),ie._colorsTexture!==null&&Ot.setValue(q,"batchingColorTexture",ie._colorsTexture,fe));const Mi=se.morphAttributes;if((Mi.position!==void 0||Mi.normal!==void 0||Mi.color!==void 0)&&X.update(ie,se,_n),(yi||Fe.receiveShadow!==ie.receiveShadow)&&(Fe.receiveShadow=ie.receiveShadow,Ot.setValue(q,"receiveShadow",ie.receiveShadow)),(ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial)&&ne.envMap===null&&W.environment!==null&&(Kt.envMapIntensity.value=W.environmentIntensity),Kt.dfgLUT!==void 0&&(Kt.dfgLUT.value=A3()),yi){if(Ot.setValue(q,"toneMappingExposure",Y.toneMappingExposure),Fe.needsLights&&fn(Kt,Jn),Oe&&ne.fog===!0&&Be.refreshFogUniforms(Kt,Oe),Be.refreshMaterialUniforms(Kt,ne,Me,Se,N.state.transmissionRenderTarget[T.id]),Fe.needsLights&&Fe.lightProbeGrid){const Dt=Fe.lightProbeGrid;Kt.probesSH.value=Dt.texture,Kt.probesMin.value.copy(Dt.boundingBox.min),Kt.probesMax.value.copy(Dt.boundingBox.max),Kt.probesResolution.value.copy(Dt.resolution)}Bc.upload(q,Yi(Fe),Kt,fe)}if(ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Bc.upload(q,Yi(Fe),Kt,fe),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Ot.setValue(q,"center",ie.center),Ot.setValue(q,"modelViewMatrix",ie.modelViewMatrix),Ot.setValue(q,"normalMatrix",ie.normalMatrix),Ot.setValue(q,"modelMatrix",ie.matrixWorld),ne.uniformsGroups!==void 0){const Dt=ne.uniformsGroups;for(let Ni=0,Ca=Dt.length;Ni<Ca;Ni++){const fr=Dt[Ni];ye.update(fr,_n),ye.bind(fr,_n)}}return _n}function fn(T,W){T.ambientLightColor.needsUpdate=W,T.lightProbe.needsUpdate=W,T.directionalLights.needsUpdate=W,T.directionalLightShadows.needsUpdate=W,T.pointLights.needsUpdate=W,T.pointLightShadows.needsUpdate=W,T.spotLights.needsUpdate=W,T.spotLightShadows.needsUpdate=W,T.rectAreaLights.needsUpdate=W,T.hemisphereLights.needsUpdate=W}function $o(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(T,W,se){const ne=re.get(T);ne.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),re.get(T.texture).__webglTexture=W,re.get(T.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:se,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,W){const se=re.get(T);se.__webglFramebuffer=W,se.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(T,W=0,se=0){te=T,z=W,F=se;let ne=null,ie=!1,Oe=!1;if(T){const Le=re.get(T);if(Le.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(q.FRAMEBUFFER,Le.__webglFramebuffer),U.copy(T.viewport),Z.copy(T.scissor),be=T.scissorTest,y.viewport(U),y.scissor(Z),y.setScissorTest(be),ge=-1;return}else if(Le.__webglFramebuffer===void 0)fe.setupRenderTarget(T);else if(Le.__hasExternalTextures)fe.rebindTextures(T,re.get(T.texture).__webglTexture,re.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Je=T.depthTexture;if(Le.__boundDepthTexture!==Je){if(Je!==null&&re.has(Je)&&(T.width!==Je.image.width||T.height!==Je.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");fe.setupDepthRenderbuffer(T)}}const Xe=T.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Oe=!0);const ke=re.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(ke[W])?ne=ke[W][se]:ne=ke[W],ie=!0):T.samples>0&&fe.useMultisampledRTT(T)===!1?ne=re.get(T).__webglMultisampledFramebuffer:Array.isArray(ke)?ne=ke[se]:ne=ke,U.copy(T.viewport),Z.copy(T.scissor),be=T.scissorTest}else U.copy(Ke).multiplyScalar(Me).floor(),Z.copy(Wt).multiplyScalar(Me).floor(),be=ut;if(se!==0&&(ne=he),y.bindFramebuffer(q.FRAMEBUFFER,ne)&&y.drawBuffers(T,ne),y.viewport(U),y.scissor(Z),y.setScissorTest(be),ie){const Le=re.get(T.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+W,Le.__webglTexture,se)}else if(Oe){const Le=W;for(let Xe=0;Xe<T.textures.length;Xe++){const ke=re.get(T.textures[Xe]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+Xe,ke.__webglTexture,se,Le)}}else if(T!==null&&se!==0){const Le=re.get(T.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Le.__webglTexture,se)}ge=-1},this.readRenderTargetPixels=function(T,W,se,ne,ie,Oe,Ge,Le=0){if(!(T&&T.isWebGLRenderTarget)){Mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=re.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ge!==void 0&&(Xe=Xe[Ge]),Xe){y.bindFramebuffer(q.FRAMEBUFFER,Xe);try{const ke=T.textures[Le],Je=ke.format,st=ke.type;if(T.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Le),!w.textureFormatReadable(Je)){Mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!w.textureTypeReadable(st)){Mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=T.width-ne&&se>=0&&se<=T.height-ie&&q.readPixels(W,se,ne,ie,we.convert(Je),we.convert(st),Oe)}finally{const ke=te!==null?re.get(te).__webglFramebuffer:null;y.bindFramebuffer(q.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(T,W,se,ne,ie,Oe,Ge,Le=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=re.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ge!==void 0&&(Xe=Xe[Ge]),Xe)if(W>=0&&W<=T.width-ne&&se>=0&&se<=T.height-ie){y.bindFramebuffer(q.FRAMEBUFFER,Xe);const ke=T.textures[Le],Je=ke.format,st=ke.type;if(T.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Le),!w.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!w.textureTypeReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const je=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,je),q.bufferData(q.PIXEL_PACK_BUFFER,Oe.byteLength,q.STREAM_READ),q.readPixels(W,se,ne,ie,we.convert(Je),we.convert(st),0);const Et=te!==null?re.get(te).__webglFramebuffer:null;y.bindFramebuffer(q.FRAMEBUFFER,Et);const Zt=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await jS(q,Zt,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,je),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,Oe),q.deleteBuffer(je),q.deleteSync(Zt),Oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,W=null,se=0){const ne=Math.pow(2,-se),ie=Math.floor(T.image.width*ne),Oe=Math.floor(T.image.height*ne),Ge=W!==null?W.x:0,Le=W!==null?W.y:0;fe.setTexture2D(T,0),q.copyTexSubImage2D(q.TEXTURE_2D,se,0,0,Ge,Le,ie,Oe),y.unbindTexture()},this.copyTextureToTexture=function(T,W,se=null,ne=null,ie=0,Oe=0){let Ge,Le,Xe,ke,Je,st,je,Et,Zt;const Vt=T.isCompressedTexture?T.mipmaps[Oe]:T.image;if(se!==null)Ge=se.max.x-se.min.x,Le=se.max.y-se.min.y,Xe=se.isBox3?se.max.z-se.min.z:1,ke=se.min.x,Je=se.min.y,st=se.isBox3?se.min.z:0;else{const Kt=Math.pow(2,-ie);Ge=Math.floor(Vt.width*Kt),Le=Math.floor(Vt.height*Kt),T.isDataArrayTexture?Xe=Vt.depth:T.isData3DTexture?Xe=Math.floor(Vt.depth*Kt):Xe=1,ke=0,Je=0,st=0}ne!==null?(je=ne.x,Et=ne.y,Zt=ne.z):(je=0,Et=0,Zt=0);const Lt=we.convert(W.format),Nt=we.convert(W.type);let Fe;W.isData3DTexture?(fe.setTexture3D(W,0),Fe=q.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(fe.setTexture2DArray(W,0),Fe=q.TEXTURE_2D_ARRAY):(fe.setTexture2D(W,0),Fe=q.TEXTURE_2D),y.activeTexture(q.TEXTURE0),y.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,W.flipY),y.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),y.pixelStorei(q.UNPACK_ALIGNMENT,W.unpackAlignment);const Un=y.getParameter(q.UNPACK_ROW_LENGTH),dt=y.getParameter(q.UNPACK_IMAGE_HEIGHT),_n=y.getParameter(q.UNPACK_SKIP_PIXELS),Qn=y.getParameter(q.UNPACK_SKIP_ROWS),yi=y.getParameter(q.UNPACK_SKIP_IMAGES);y.pixelStorei(q.UNPACK_ROW_LENGTH,Vt.width),y.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Vt.height),y.pixelStorei(q.UNPACK_SKIP_PIXELS,ke),y.pixelStorei(q.UNPACK_SKIP_ROWS,Je),y.pixelStorei(q.UNPACK_SKIP_IMAGES,st);const Jn=T.isDataArrayTexture||T.isData3DTexture,Ot=W.isDataArrayTexture||W.isData3DTexture;if(T.isDepthTexture){const Kt=re.get(T),Mi=re.get(W),Dt=re.get(Kt.__renderTarget),Ni=re.get(Mi.__renderTarget);y.bindFramebuffer(q.READ_FRAMEBUFFER,Dt.__webglFramebuffer),y.bindFramebuffer(q.DRAW_FRAMEBUFFER,Ni.__webglFramebuffer);for(let Ca=0;Ca<Xe;Ca++)Jn&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,re.get(T).__webglTexture,ie,st+Ca),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,re.get(W).__webglTexture,Oe,Zt+Ca)),q.blitFramebuffer(ke,Je,Ge,Le,je,Et,Ge,Le,q.DEPTH_BUFFER_BIT,q.NEAREST);y.bindFramebuffer(q.READ_FRAMEBUFFER,null),y.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(ie!==0||T.isRenderTargetTexture||re.has(T)){const Kt=re.get(T),Mi=re.get(W);y.bindFramebuffer(q.READ_FRAMEBUFFER,ve),y.bindFramebuffer(q.DRAW_FRAMEBUFFER,J);for(let Dt=0;Dt<Xe;Dt++)Jn?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Kt.__webglTexture,ie,st+Dt):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Kt.__webglTexture,ie),Ot?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Mi.__webglTexture,Oe,Zt+Dt):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Mi.__webglTexture,Oe),ie!==0?q.blitFramebuffer(ke,Je,Ge,Le,je,Et,Ge,Le,q.COLOR_BUFFER_BIT,q.NEAREST):Ot?q.copyTexSubImage3D(Fe,Oe,je,Et,Zt+Dt,ke,Je,Ge,Le):q.copyTexSubImage2D(Fe,Oe,je,Et,ke,Je,Ge,Le);y.bindFramebuffer(q.READ_FRAMEBUFFER,null),y.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else Ot?T.isDataTexture||T.isData3DTexture?q.texSubImage3D(Fe,Oe,je,Et,Zt,Ge,Le,Xe,Lt,Nt,Vt.data):W.isCompressedArrayTexture?q.compressedTexSubImage3D(Fe,Oe,je,Et,Zt,Ge,Le,Xe,Lt,Vt.data):q.texSubImage3D(Fe,Oe,je,Et,Zt,Ge,Le,Xe,Lt,Nt,Vt):T.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,Oe,je,Et,Ge,Le,Lt,Nt,Vt.data):T.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,Oe,je,Et,Vt.width,Vt.height,Lt,Vt.data):q.texSubImage2D(q.TEXTURE_2D,Oe,je,Et,Ge,Le,Lt,Nt,Vt);y.pixelStorei(q.UNPACK_ROW_LENGTH,Un),y.pixelStorei(q.UNPACK_IMAGE_HEIGHT,dt),y.pixelStorei(q.UNPACK_SKIP_PIXELS,_n),y.pixelStorei(q.UNPACK_SKIP_ROWS,Qn),y.pixelStorei(q.UNPACK_SKIP_IMAGES,yi),Oe===0&&W.generateMipmaps&&q.generateMipmap(Fe),y.unbindTexture()},this.initRenderTarget=function(T){re.get(T).__webglFramebuffer===void 0&&fe.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?fe.setTextureCube(T,0):T.isData3DTexture?fe.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?fe.setTexture2DArray(T,0):fe.setTexture2D(T,0),y.unbindTexture()},this.resetState=function(){z=0,F=0,te=null,y.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=St._getDrawingBufferColorSpace(e),i.unpackColorSpace=St._getUnpackColorSpace()}}function C3(){const s=bn.useRef(null);return bn.useEffect(()=>{const e=s.current;if(!e)return;const i=new uy,r=new vi(60,window.innerWidth/window.innerHeight,.1,100);r.position.set(0,6,9),r.lookAt(0,0,0);const l=new R3({alpha:!0,antialias:!0});l.setSize(window.innerWidth,window.innerHeight),l.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.appendChild(l.domElement);const c=35e3,d=9,p=3,m=1.2,h=.6,S=3,x=new Ui,_=new Float32Array(c*3),b=new Float32Array(c*3),A=new bt("#fd6e0a"),D=new bt("#00d2ff");for(let N=0;N<c;N++){const P=Math.pow(Math.random(),1.5)*d,E=N%p/p*Math.PI*2,O=P*m,Y=Math.pow(Math.random(),S)*(Math.random()<.5?1:-1)*h*P,k=Math.pow(Math.random(),S)*(Math.random()<.5?1:-1)*h*P,Q=Math.pow(Math.random(),S)*(Math.random()<.5?1:-1)*h*P;_[N*3]=Math.cos(E+O)*P+Y,_[N*3+1]=k,_[N*3+2]=Math.sin(E+O)*P+Q;const he=A.clone().lerp(D,P/d);b[N*3]=he.r,b[N*3+1]=he.g,b[N*3+2]=he.b}x.setAttribute("position",new Si(_,3)),x.setAttribute("color",new Si(b,3));const M=new pv({size:.025,sizeAttenuation:!0,depthWrite:!1,blending:Vd,vertexColors:!0,transparent:!0,opacity:.45}),v=new Sy(x,M);i.add(v);const H=()=>{const N=window.innerWidth,P=window.innerHeight;r.aspect=N/P,r.updateProjectionMatrix(),l.setSize(N,P)};window.addEventListener("resize",H);let G;const C=new Uy,I=()=>{const N=C.getElapsedTime();v.rotation.y=N*.04,v.rotation.x=Math.sin(N*.1)*.08,l.render(i,r),G=requestAnimationFrame(I)};return I(),()=>{window.removeEventListener("resize",H),cancelAnimationFrame(G),e&&l.domElement&&e.removeChild(l.domElement),x.dispose(),M.dispose(),l.dispose()}},[]),L.jsx("div",{ref:s,style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",pointerEvents:"none",zIndex:0,overflow:"hidden"}})}function w3(){const[s,e]=bn.useState("About");return L.jsxs("div",{style:{background:"#050714",minHeight:"100vh",position:"relative"},children:[L.jsx(C3,{}),L.jsx(G1,{active:s,setActive:e}),L.jsx(V1,{}),L.jsx(X1,{}),L.jsx(W1,{}),L.jsx(q1,{}),L.jsx(sS,{}),L.jsx(lS,{}),L.jsx(dS,{}),L.jsx(hS,{}),L.jsx("footer",{style:{textAlign:"center",padding:"24px",borderTop:"1px solid rgba(255, 255, 255, 0.05)",color:"rgba(255, 255, 255, 0.22)",fontSize:13},children:"Built with React · Abhishek Yadav © 2025"})]})}H1.createRoot(document.getElementById("root")).render(L.jsx(sr.StrictMode,{children:L.jsx(w3,{})}));
