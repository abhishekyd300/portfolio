(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function k_(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var rd={exports:{}},Oo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ng;function O1(){if(Ng)return Oo;Ng=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var m in l)m!=="key"&&(c[m]=l[m])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:d,ref:l!==void 0?l:null,props:c}}return Oo.Fragment=e,Oo.jsx=i,Oo.jsxs=i,Oo}var Lg;function P1(){return Lg||(Lg=1,rd.exports=O1()),rd.exports}var S=P1(),sd={exports:{}},at={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Og;function z1(){if(Og)return at;Og=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),y=Symbol.for("react.activity"),g=Symbol.iterator;function E(L){return L===null||typeof L!="object"?null:(L=g&&L[g]||L["@@iterator"],typeof L=="function"?L:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D=Object.assign,M={};function x(L,Z,be){this.props=L,this.context=Z,this.refs=M,this.updater=be||A}x.prototype.isReactComponent={},x.prototype.setState=function(L,Z){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,Z,"setState")},x.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function B(){}B.prototype=x.prototype;function H(L,Z,be){this.props=L,this.context=Z,this.refs=M,this.updater=be||A}var w=H.prototype=new B;w.constructor=H,D(w,x.prototype),w.isPureReactComponent=!0;var I=Array.isArray;function U(){}var z={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function O(L,Z,be){var Ce=be.ref;return{$$typeof:s,type:L,key:Z,ref:Ce!==void 0?Ce:null,props:be}}function q(L,Z){return O(L.type,Z,L.props)}function k(L){return typeof L=="object"&&L!==null&&L.$$typeof===s}function Q(L){var Z={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(be){return Z[be]})}var he=/\/+/g;function me(L,Z){return typeof L=="object"&&L!==null&&L.key!=null?Q(""+L.key):Z.toString(36)}function J(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(U,U):(L.status="pending",L.then(function(Z){L.status==="pending"&&(L.status="fulfilled",L.value=Z)},function(Z){L.status==="pending"&&(L.status="rejected",L.reason=Z)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function P(L,Z,be,Ce,ze){var ae=typeof L;(ae==="undefined"||ae==="boolean")&&(L=null);var Se=!1;if(L===null)Se=!0;else switch(ae){case"bigint":case"string":case"number":Se=!0;break;case"object":switch(L.$$typeof){case s:case e:Se=!0;break;case v:return Se=L._init,P(Se(L._payload),Z,be,Ce,ze)}}if(Se)return ze=ze(L),Se=Ce===""?"."+me(L,0):Ce,I(ze)?(be="",Se!=null&&(be=Se.replace(he,"$&/")+"/"),P(ze,Z,be,"",function(tt){return tt})):ze!=null&&(k(ze)&&(ze=q(ze,be+(ze.key==null||L&&L.key===ze.key?"":(""+ze.key).replace(he,"$&/")+"/")+Se)),Z.push(ze)),1;Se=0;var Me=Ce===""?".":Ce+":";if(I(L))for(var He=0;He<L.length;He++)Ce=L[He],ae=Me+me(Ce,He),Se+=P(Ce,Z,be,ae,ze);else if(He=E(L),typeof He=="function")for(L=He.call(L),He=0;!(Ce=L.next()).done;)Ce=Ce.value,ae=Me+me(Ce,He++),Se+=P(Ce,Z,be,ae,ze);else if(ae==="object"){if(typeof L.then=="function")return P(J(L),Z,be,Ce,ze);throw Z=String(L),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return Se}function G(L,Z,be){if(L==null)return L;var Ce=[],ze=0;return P(L,Ce,"","",function(ae){return Z.call(be,ae,ze++)}),Ce}function te(L){if(L._status===-1){var Z=L._result;Z=Z(),Z.then(function(be){(L._status===0||L._status===-1)&&(L._status=1,L._result=be)},function(be){(L._status===0||L._status===-1)&&(L._status=2,L._result=be)}),L._status===-1&&(L._status=0,L._result=Z)}if(L._status===1)return L._result.default;throw L._result}var _e=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)},Ee={map:G,forEach:function(L,Z,be){G(L,function(){Z.apply(this,arguments)},be)},count:function(L){var Z=0;return G(L,function(){Z++}),Z},toArray:function(L){return G(L,function(Z){return Z})||[]},only:function(L){if(!k(L))throw Error("React.Children.only expected to receive a single React element child.");return L}};return at.Activity=y,at.Children=Ee,at.Component=x,at.Fragment=i,at.Profiler=l,at.PureComponent=H,at.StrictMode=r,at.Suspense=p,at.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,at.__COMPILER_RUNTIME={__proto__:null,c:function(L){return z.H.useMemoCache(L)}},at.cache=function(L){return function(){return L.apply(null,arguments)}},at.cacheSignal=function(){return null},at.cloneElement=function(L,Z,be){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var Ce=D({},L.props),ze=L.key;if(Z!=null)for(ae in Z.key!==void 0&&(ze=""+Z.key),Z)!T.call(Z,ae)||ae==="key"||ae==="__self"||ae==="__source"||ae==="ref"&&Z.ref===void 0||(Ce[ae]=Z[ae]);var ae=arguments.length-2;if(ae===1)Ce.children=be;else if(1<ae){for(var Se=Array(ae),Me=0;Me<ae;Me++)Se[Me]=arguments[Me+2];Ce.children=Se}return O(L.type,ze,Ce)},at.createContext=function(L){return L={$$typeof:d,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:c,_context:L},L},at.createElement=function(L,Z,be){var Ce,ze={},ae=null;if(Z!=null)for(Ce in Z.key!==void 0&&(ae=""+Z.key),Z)T.call(Z,Ce)&&Ce!=="key"&&Ce!=="__self"&&Ce!=="__source"&&(ze[Ce]=Z[Ce]);var Se=arguments.length-2;if(Se===1)ze.children=be;else if(1<Se){for(var Me=Array(Se),He=0;He<Se;He++)Me[He]=arguments[He+2];ze.children=Me}if(L&&L.defaultProps)for(Ce in Se=L.defaultProps,Se)ze[Ce]===void 0&&(ze[Ce]=Se[Ce]);return O(L,ae,ze)},at.createRef=function(){return{current:null}},at.forwardRef=function(L){return{$$typeof:m,render:L}},at.isValidElement=k,at.lazy=function(L){return{$$typeof:v,_payload:{_status:-1,_result:L},_init:te}},at.memo=function(L,Z){return{$$typeof:h,type:L,compare:Z===void 0?null:Z}},at.startTransition=function(L){var Z=z.T,be={};z.T=be;try{var Ce=L(),ze=z.S;ze!==null&&ze(be,Ce),typeof Ce=="object"&&Ce!==null&&typeof Ce.then=="function"&&Ce.then(U,_e)}catch(ae){_e(ae)}finally{Z!==null&&be.types!==null&&(Z.types=be.types),z.T=Z}},at.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},at.use=function(L){return z.H.use(L)},at.useActionState=function(L,Z,be){return z.H.useActionState(L,Z,be)},at.useCallback=function(L,Z){return z.H.useCallback(L,Z)},at.useContext=function(L){return z.H.useContext(L)},at.useDebugValue=function(){},at.useDeferredValue=function(L,Z){return z.H.useDeferredValue(L,Z)},at.useEffect=function(L,Z){return z.H.useEffect(L,Z)},at.useEffectEvent=function(L){return z.H.useEffectEvent(L)},at.useId=function(){return z.H.useId()},at.useImperativeHandle=function(L,Z,be){return z.H.useImperativeHandle(L,Z,be)},at.useInsertionEffect=function(L,Z){return z.H.useInsertionEffect(L,Z)},at.useLayoutEffect=function(L,Z){return z.H.useLayoutEffect(L,Z)},at.useMemo=function(L,Z){return z.H.useMemo(L,Z)},at.useOptimistic=function(L,Z){return z.H.useOptimistic(L,Z)},at.useReducer=function(L,Z,be){return z.H.useReducer(L,Z,be)},at.useRef=function(L){return z.H.useRef(L)},at.useState=function(L){return z.H.useState(L)},at.useSyncExternalStore=function(L,Z,be){return z.H.useSyncExternalStore(L,Z,be)},at.useTransition=function(){return z.H.useTransition()},at.version="19.2.8",at}var Pg;function Bh(){return Pg||(Pg=1,sd.exports=z1()),sd.exports}var ft=Bh();const sr=k_(ft);var od={exports:{}},Po={},ld={exports:{}},cd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zg;function I1(){return zg||(zg=1,(function(s){function e(P,G){var te=P.length;P.push(G);e:for(;0<te;){var _e=te-1>>>1,Ee=P[_e];if(0<l(Ee,G))P[_e]=G,P[te]=Ee,te=_e;else break e}}function i(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var G=P[0],te=P.pop();if(te!==G){P[0]=te;e:for(var _e=0,Ee=P.length,L=Ee>>>1;_e<L;){var Z=2*(_e+1)-1,be=P[Z],Ce=Z+1,ze=P[Ce];if(0>l(be,te))Ce<Ee&&0>l(ze,be)?(P[_e]=ze,P[Ce]=te,_e=Ce):(P[_e]=be,P[Z]=te,_e=Z);else if(Ce<Ee&&0>l(ze,te))P[_e]=ze,P[Ce]=te,_e=Ce;else break e}}return G}function l(P,G){var te=P.sortIndex-G.sortIndex;return te!==0?te:P.id-G.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var d=Date,m=d.now();s.unstable_now=function(){return d.now()-m}}var p=[],h=[],v=1,y=null,g=3,E=!1,A=!1,D=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,B=typeof clearTimeout=="function"?clearTimeout:null,H=typeof setImmediate<"u"?setImmediate:null;function w(P){for(var G=i(h);G!==null;){if(G.callback===null)r(h);else if(G.startTime<=P)r(h),G.sortIndex=G.expirationTime,e(p,G);else break;G=i(h)}}function I(P){if(D=!1,w(P),!A)if(i(p)!==null)A=!0,U||(U=!0,Q());else{var G=i(h);G!==null&&J(I,G.startTime-P)}}var U=!1,z=-1,T=5,O=-1;function q(){return M?!0:!(s.unstable_now()-O<T)}function k(){if(M=!1,U){var P=s.unstable_now();O=P;var G=!0;try{e:{A=!1,D&&(D=!1,B(z),z=-1),E=!0;var te=g;try{t:{for(w(P),y=i(p);y!==null&&!(y.expirationTime>P&&q());){var _e=y.callback;if(typeof _e=="function"){y.callback=null,g=y.priorityLevel;var Ee=_e(y.expirationTime<=P);if(P=s.unstable_now(),typeof Ee=="function"){y.callback=Ee,w(P),G=!0;break t}y===i(p)&&r(p),w(P)}else r(p);y=i(p)}if(y!==null)G=!0;else{var L=i(h);L!==null&&J(I,L.startTime-P),G=!1}}break e}finally{y=null,g=te,E=!1}G=void 0}}finally{G?Q():U=!1}}}var Q;if(typeof H=="function")Q=function(){H(k)};else if(typeof MessageChannel<"u"){var he=new MessageChannel,me=he.port2;he.port1.onmessage=k,Q=function(){me.postMessage(null)}}else Q=function(){x(k,0)};function J(P,G){z=x(function(){P(s.unstable_now())},G)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(P){P.callback=null},s.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<P?Math.floor(1e3/P):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_next=function(P){switch(g){case 1:case 2:case 3:var G=3;break;default:G=g}var te=g;g=G;try{return P()}finally{g=te}},s.unstable_requestPaint=function(){M=!0},s.unstable_runWithPriority=function(P,G){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var te=g;g=P;try{return G()}finally{g=te}},s.unstable_scheduleCallback=function(P,G,te){var _e=s.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?_e+te:_e):te=_e,P){case 1:var Ee=-1;break;case 2:Ee=250;break;case 5:Ee=1073741823;break;case 4:Ee=1e4;break;default:Ee=5e3}return Ee=te+Ee,P={id:v++,callback:G,priorityLevel:P,startTime:te,expirationTime:Ee,sortIndex:-1},te>_e?(P.sortIndex=te,e(h,P),i(p)===null&&P===i(h)&&(D?(B(z),z=-1):D=!0,J(I,te-_e))):(P.sortIndex=Ee,e(p,P),A||E||(A=!0,U||(U=!0,Q()))),P},s.unstable_shouldYield=q,s.unstable_wrapCallback=function(P){var G=g;return function(){var te=g;g=G;try{return P.apply(this,arguments)}finally{g=te}}}})(cd)),cd}var Ig;function B1(){return Ig||(Ig=1,ld.exports=I1()),ld.exports}var ud={exports:{}},Nn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bg;function F1(){if(Bg)return Nn;Bg=1;var s=Bh();function e(p){var h="https://react.dev/errors/"+p;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)h+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+p+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(p,h,v){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:y==null?null:""+y,children:p,containerInfo:h,implementation:v}}var d=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(p,h){if(p==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Nn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Nn.createPortal=function(p,h){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return c(p,h,null,v)},Nn.flushSync=function(p){var h=d.T,v=r.p;try{if(d.T=null,r.p=2,p)return p()}finally{d.T=h,r.p=v,r.d.f()}},Nn.preconnect=function(p,h){typeof p=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,r.d.C(p,h))},Nn.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},Nn.preinit=function(p,h){if(typeof p=="string"&&h&&typeof h.as=="string"){var v=h.as,y=m(v,h.crossOrigin),g=typeof h.integrity=="string"?h.integrity:void 0,E=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;v==="style"?r.d.S(p,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:y,integrity:g,fetchPriority:E}):v==="script"&&r.d.X(p,{crossOrigin:y,integrity:g,fetchPriority:E,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Nn.preinitModule=function(p,h){if(typeof p=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var v=m(h.as,h.crossOrigin);r.d.M(p,{crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&r.d.M(p)},Nn.preload=function(p,h){if(typeof p=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var v=h.as,y=m(v,h.crossOrigin);r.d.L(p,v,{crossOrigin:y,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Nn.preloadModule=function(p,h){if(typeof p=="string")if(h){var v=m(h.as,h.crossOrigin);r.d.m(p,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else r.d.m(p)},Nn.requestFormReset=function(p){r.d.r(p)},Nn.unstable_batchedUpdates=function(p,h){return p(h)},Nn.useFormState=function(p,h,v){return d.H.useFormState(p,h,v)},Nn.useFormStatus=function(){return d.H.useHostTransitionStatus()},Nn.version="19.2.8",Nn}var Fg;function H1(){if(Fg)return ud.exports;Fg=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),ud.exports=F1(),ud.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hg;function G1(){if(Hg)return Po;Hg=1;var s=B1(),e=Bh(),i=H1();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(c(t)!==t)throw Error(r(188))}function h(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return p(u),t;if(f===o)return p(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=f;else{for(var _=!1,C=u.child;C;){if(C===a){_=!0,a=u,o=f;break}if(C===o){_=!0,o=u,a=f;break}C=C.sibling}if(!_){for(C=f.child;C;){if(C===a){_=!0,a=f,o=u;break}if(C===o){_=!0,o=f,a=u;break}C=C.sibling}if(!_)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}var y=Object.assign,g=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),B=Symbol.for("react.consumer"),H=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),U=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),O=Symbol.for("react.activity"),q=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function Q(t){return t===null||typeof t!="object"?null:(t=k&&t[k]||t["@@iterator"],typeof t=="function"?t:null)}var he=Symbol.for("react.client.reference");function me(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===he?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case D:return"Fragment";case x:return"Profiler";case M:return"StrictMode";case I:return"Suspense";case U:return"SuspenseList";case O:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case A:return"Portal";case H:return t.displayName||"Context";case B:return(t._context.displayName||"Context")+".Consumer";case w:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case z:return n=t.displayName||null,n!==null?n:me(t.type)||"Memo";case T:n=t._payload,t=t._init;try{return me(t(n))}catch{}}return null}var J=Array.isArray,P=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,te={pending:!1,data:null,method:null,action:null},_e=[],Ee=-1;function L(t){return{current:t}}function Z(t){0>Ee||(t.current=_e[Ee],_e[Ee]=null,Ee--)}function be(t,n){Ee++,_e[Ee]=t.current,t.current=n}var Ce=L(null),ze=L(null),ae=L(null),Se=L(null);function Me(t,n){switch(be(ae,n),be(ze,t),be(Ce,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?tg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=tg(n),t=ng(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Z(Ce),be(Ce,t)}function He(){Z(Ce),Z(ze),Z(ae)}function tt(t){t.memoizedState!==null&&be(Se,t);var n=Ce.current,a=ng(n,t.type);n!==a&&(be(ze,t),be(Ce,a))}function Ke(t){ze.current===t&&(Z(Ce),Z(ze)),Se.current===t&&(Z(Se),Do._currentValue=te)}var jt,ut;function vt(t){if(jt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);jt=n&&n[1]||"",ut=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+jt+t+ut}var xt=!1;function dt(t,n){if(!t||xt)return"";xt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var xe=function(){throw Error()};if(Object.defineProperty(xe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xe,[])}catch(ce){var oe=ce}Reflect.construct(t,[],xe)}else{try{xe.call()}catch(ce){oe=ce}t.call(xe.prototype)}}else{try{throw Error()}catch(ce){oe=ce}(xe=t())&&typeof xe.catch=="function"&&xe.catch(function(){})}}catch(ce){if(ce&&oe&&typeof ce.stack=="string")return[ce.stack,oe.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),_=f[0],C=f[1];if(_&&C){var F=_.split(`
`),ee=C.split(`
`);for(u=o=0;o<F.length&&!F[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ee.length&&!ee[u].includes("DetermineComponentFrameRoot");)u++;if(o===F.length||u===ee.length)for(o=F.length-1,u=ee.length-1;1<=o&&0<=u&&F[o]!==ee[u];)u--;for(;1<=o&&0<=u;o--,u--)if(F[o]!==ee[u]){if(o!==1||u!==1)do if(o--,u--,0>u||F[o]!==ee[u]){var pe=`
`+F[o].replace(" at new "," at ");return t.displayName&&pe.includes("<anonymous>")&&(pe=pe.replace("<anonymous>",t.displayName)),pe}while(1<=o&&0<=u);break}}}finally{xt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?vt(a):""}function $t(t,n){switch(t.tag){case 26:case 27:case 5:return vt(t.type);case 16:return vt("Lazy");case 13:return t.child!==n&&n!==null?vt("Suspense Fallback"):vt("Suspense");case 19:return vt("SuspenseList");case 0:case 15:return dt(t.type,!1);case 11:return dt(t.type.render,!1);case 1:return dt(t.type,!0);case 31:return vt("Activity");default:return""}}function en(t){try{var n="",a=null;do n+=$t(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var tn=Object.prototype.hasOwnProperty,on=s.unstable_scheduleCallback,Xt=s.unstable_cancelCallback,nn=s.unstable_shouldYield,j=s.unstable_requestPaint,Ft=s.unstable_now,Ct=s.unstable_getCurrentPriorityLevel,N=s.unstable_ImmediatePriority,b=s.unstable_UserBlockingPriority,K=s.unstable_NormalPriority,re=s.unstable_LowPriority,fe=s.unstable_IdlePriority,Te=s.log,De=s.unstable_setDisableYieldValue,ue=null,de=null;function Re(t){if(typeof Te=="function"&&De(t),de&&typeof de.setStrictMode=="function")try{de.setStrictMode(ue,t)}catch{}}var Be=Math.clz32?Math.clz32:Ze,Le=Math.log,Ue=Math.LN2;function Ze(t){return t>>>=0,t===0?32:31-(Le(t)/Ue|0)|0}var Qe=256,it=262144,W=4194304;function Ae(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ge(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,f=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var C=o&134217727;return C!==0?(o=C&~f,o!==0?u=Ae(o):(_&=C,_!==0?u=Ae(_):a||(a=C&~t,a!==0&&(u=Ae(a))))):(C=o&~f,C!==0?u=Ae(C):_!==0?u=Ae(_):a||(a=o&~t,a!==0&&(u=Ae(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function we(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Ie(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ye(){var t=W;return W<<=1,(W&62914560)===0&&(W=4194304),t}function je(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Ve(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Zt(t,n,a,o,u,f){var _=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var C=t.entanglements,F=t.expirationTimes,ee=t.hiddenUpdates;for(a=_&~a;0<a;){var pe=31-Be(a),xe=1<<pe;C[pe]=0,F[pe]=-1;var oe=ee[pe];if(oe!==null)for(ee[pe]=null,pe=0;pe<oe.length;pe++){var ce=oe[pe];ce!==null&&(ce.lane&=-536870913)}a&=~xe}o!==0&&Nt(t,o,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(_&~n))}function Nt(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Be(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function Zn(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Be(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function Kn(t,n){var a=n&-n;return a=(a&42)!==0?1:ks(a),(a&(t.suspendedLanes|n))!==0?0:a}function ks(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ws(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Xs(){var t=G.p;return t!==0?t:(t=window.event,t===void 0?32:Tg(t.type))}function Vr(t,n){var a=G.p;try{return G.p=t,n()}finally{G.p=a}}var Ni=Math.random().toString(36).slice(2),fn="__reactFiber$"+Ni,En="__reactProps$"+Ni,Fn="__reactContainer$"+Ni,lr="__reactEvents$"+Ni,$o="__reactListeners$"+Ni,el="__reactHandles$"+Ni,cr="__reactResources$"+Ni,Ta="__reactMarker$"+Ni;function Aa(t){delete t[fn],delete t[En],delete t[lr],delete t[$o],delete t[el]}function qi(t){var n=t[fn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Fn]||a[fn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=cg(t);t!==null;){if(a=t[fn])return a;t=cg(t)}return n}t=a,a=t.parentNode}return null}function Yi(t){if(t=t[fn]||t[Fn]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function ur(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function Ra(t){var n=t[cr];return n||(n=t[cr]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function dn(t){t[Ta]=!0}var tl=new Set,R={};function X(t,n){se(t,n),se(t+"Capture",n)}function se(t,n){for(R[t]=n,t=0;t<n.length;t++)tl.add(n[t])}var ne=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ie={},Oe={};function Ge(t){return tn.call(Oe,t)?!0:tn.call(ie,t)?!1:ne.test(t)?Oe[t]=!0:(ie[t]=!0,!1)}function Ne(t,n,a){if(Ge(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function We(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function ke(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function Je(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function st(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ye(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Tt(t){if(!t._valueTracker){var n=st(t)?"checked":"value";t._valueTracker=Ye(t,n,""+t[n])}}function Kt(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=st(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function kt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Lt=/[\n"\\]/g;function Ot(t){return t.replace(Lt,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Fe(t,n,a,o,u,f,_,C){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),n!=null?_==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Je(n)):t.value!==""+Je(n)&&(t.value=""+Je(n)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),n!=null?ht(t,_,Je(n)):a!=null?ht(t,_,Je(a)):o!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?t.name=""+Je(C):t.removeAttribute("name")}function Un(t,n,a,o,u,f,_,C){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Tt(t);return}a=a!=null?""+Je(a):"",n=n!=null?""+Je(n):a,C||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=C?t.checked:!!o,t.defaultChecked=!!o,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_),Tt(t)}function ht(t,n,a){n==="number"&&kt(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function vn(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+Je(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Qn(t,n,a){if(n!=null&&(n=""+Je(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+Je(a):""}function yi(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(J(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=Je(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),Tt(t)}function Jn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Pt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Qt(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||Pt.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Mi(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Qt(t,u,o)}else for(var f in n)n.hasOwnProperty(f)&&Qt(t,f,n[f])}function Ut(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Li=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ca=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function fr(t){return Ca.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Zi(){}var tu=null;function nu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var kr=null,Wr=null;function ep(t){var n=Yi(t);if(n&&(t=n.stateNode)){var a=t[En]||null;e:switch(t=n.stateNode,n.type){case"input":if(Fe(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ot(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[En]||null;if(!u)throw Error(r(90));Fe(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&Kt(o)}break e;case"textarea":Qn(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&vn(t,!!a.multiple,n,!1)}}}var iu=!1;function tp(t,n,a){if(iu)return t(n,a);iu=!0;try{var o=t(n);return o}finally{if(iu=!1,(kr!==null||Wr!==null)&&(Vl(),kr&&(n=kr,t=Wr,Wr=kr=null,ep(n),t)))for(n=0;n<t.length;n++)ep(t[n])}}function js(t,n){var a=t.stateNode;if(a===null)return null;var o=a[En]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Ki=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),au=!1;if(Ki)try{var qs={};Object.defineProperty(qs,"passive",{get:function(){au=!0}}),window.addEventListener("test",qs,qs),window.removeEventListener("test",qs,qs)}catch{au=!1}var wa=null,ru=null,nl=null;function np(){if(nl)return nl;var t,n=ru,a=n.length,o,u="value"in wa?wa.value:wa.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var _=a-t;for(o=1;o<=_&&n[a-o]===u[f-o];o++);return nl=u.slice(t,1<o?1-o:void 0)}function il(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function al(){return!0}function ip(){return!1}function Hn(t){function n(a,o,u,f,_){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var C in t)t.hasOwnProperty(C)&&(a=t[C],this[C]=a?a(f):f[C]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?al:ip,this.isPropagationStopped=ip,this}return y(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=al)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=al)},persist:function(){},isPersistent:al}),n}var dr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rl=Hn(dr),Ys=y({},dr,{view:0,detail:0}),Nv=Hn(Ys),su,ou,Zs,sl=y({},Ys,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Zs&&(Zs&&t.type==="mousemove"?(su=t.screenX-Zs.screenX,ou=t.screenY-Zs.screenY):ou=su=0,Zs=t),su)},movementY:function(t){return"movementY"in t?t.movementY:ou}}),ap=Hn(sl),Lv=y({},sl,{dataTransfer:0}),Ov=Hn(Lv),Pv=y({},Ys,{relatedTarget:0}),lu=Hn(Pv),zv=y({},dr,{animationName:0,elapsedTime:0,pseudoElement:0}),Iv=Hn(zv),Bv=y({},dr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Fv=Hn(Bv),Hv=y({},dr,{data:0}),rp=Hn(Hv),Gv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Vv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Wv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=kv[t])?!!n[t]:!1}function cu(){return Wv}var Xv=y({},Ys,{key:function(t){if(t.key){var n=Gv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=il(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Vv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cu,charCode:function(t){return t.type==="keypress"?il(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?il(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),jv=Hn(Xv),qv=y({},sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sp=Hn(qv),Yv=y({},Ys,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cu}),Zv=Hn(Yv),Kv=y({},dr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qv=Hn(Kv),Jv=y({},sl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),$v=Hn(Jv),ex=y({},dr,{newState:0,oldState:0}),tx=Hn(ex),nx=[9,13,27,32],uu=Ki&&"CompositionEvent"in window,Ks=null;Ki&&"documentMode"in document&&(Ks=document.documentMode);var ix=Ki&&"TextEvent"in window&&!Ks,op=Ki&&(!uu||Ks&&8<Ks&&11>=Ks),lp=" ",cp=!1;function up(t,n){switch(t){case"keyup":return nx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Xr=!1;function ax(t,n){switch(t){case"compositionend":return fp(n);case"keypress":return n.which!==32?null:(cp=!0,lp);case"textInput":return t=n.data,t===lp&&cp?null:t;default:return null}}function rx(t,n){if(Xr)return t==="compositionend"||!uu&&up(t,n)?(t=np(),nl=ru=wa=null,Xr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return op&&n.locale!=="ko"?null:n.data;default:return null}}var sx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!sx[t.type]:n==="textarea"}function hp(t,n,a,o){kr?Wr?Wr.push(o):Wr=[o]:kr=o,n=Zl(n,"onChange"),0<n.length&&(a=new rl("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var Qs=null,Js=null;function ox(t){Z0(t,0)}function ol(t){var n=ur(t);if(Kt(n))return t}function pp(t,n){if(t==="change")return n}var mp=!1;if(Ki){var fu;if(Ki){var du="oninput"in document;if(!du){var gp=document.createElement("div");gp.setAttribute("oninput","return;"),du=typeof gp.oninput=="function"}fu=du}else fu=!1;mp=fu&&(!document.documentMode||9<document.documentMode)}function _p(){Qs&&(Qs.detachEvent("onpropertychange",vp),Js=Qs=null)}function vp(t){if(t.propertyName==="value"&&ol(Js)){var n=[];hp(n,Js,t,nu(t)),tp(ox,n)}}function lx(t,n,a){t==="focusin"?(_p(),Qs=n,Js=a,Qs.attachEvent("onpropertychange",vp)):t==="focusout"&&_p()}function cx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ol(Js)}function ux(t,n){if(t==="click")return ol(n)}function fx(t,n){if(t==="input"||t==="change")return ol(n)}function dx(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var $n=typeof Object.is=="function"?Object.is:dx;function $s(t,n){if($n(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!tn.call(n,u)||!$n(t[u],n[u]))return!1}return!0}function xp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Sp(t,n){var a=xp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=xp(a)}}function yp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?yp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Mp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=kt(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=kt(t.document)}return n}function hu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var hx=Ki&&"documentMode"in document&&11>=document.documentMode,jr=null,pu=null,eo=null,mu=!1;function bp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;mu||jr==null||jr!==kt(o)||(o=jr,"selectionStart"in o&&hu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),eo&&$s(eo,o)||(eo=o,o=Zl(pu,"onSelect"),0<o.length&&(n=new rl("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=jr)))}function hr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var qr={animationend:hr("Animation","AnimationEnd"),animationiteration:hr("Animation","AnimationIteration"),animationstart:hr("Animation","AnimationStart"),transitionrun:hr("Transition","TransitionRun"),transitionstart:hr("Transition","TransitionStart"),transitioncancel:hr("Transition","TransitionCancel"),transitionend:hr("Transition","TransitionEnd")},gu={},Ep={};Ki&&(Ep=document.createElement("div").style,"AnimationEvent"in window||(delete qr.animationend.animation,delete qr.animationiteration.animation,delete qr.animationstart.animation),"TransitionEvent"in window||delete qr.transitionend.transition);function pr(t){if(gu[t])return gu[t];if(!qr[t])return t;var n=qr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Ep)return gu[t]=n[a];return t}var Tp=pr("animationend"),Ap=pr("animationiteration"),Rp=pr("animationstart"),px=pr("transitionrun"),mx=pr("transitionstart"),gx=pr("transitioncancel"),Cp=pr("transitionend"),wp=new Map,_u="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");_u.push("scrollEnd");function bi(t,n){wp.set(t,n),X(n,[t])}var ll=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},li=[],Yr=0,vu=0;function cl(){for(var t=Yr,n=vu=Yr=0;n<t;){var a=li[n];li[n++]=null;var o=li[n];li[n++]=null;var u=li[n];li[n++]=null;var f=li[n];if(li[n++]=null,o!==null&&u!==null){var _=o.pending;_===null?u.next=u:(u.next=_.next,_.next=u),o.pending=u}f!==0&&Dp(a,u,f)}}function ul(t,n,a,o){li[Yr++]=t,li[Yr++]=n,li[Yr++]=a,li[Yr++]=o,vu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function xu(t,n,a,o){return ul(t,n,a,o),fl(t)}function mr(t,n){return ul(t,null,null,n),fl(t)}function Dp(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-Be(a),t=f.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function fl(t){if(50<bo)throw bo=0,wf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Zr={};function _x(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ei(t,n,a,o){return new _x(t,n,a,o)}function Su(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Qi(t,n){var a=t.alternate;return a===null?(a=ei(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Up(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function dl(t,n,a,o,u,f){var _=0;if(o=t,typeof t=="function")Su(t)&&(_=1);else if(typeof t=="string")_=M1(t,a,Ce.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case O:return t=ei(31,a,n,u),t.elementType=O,t.lanes=f,t;case D:return gr(a.children,u,f,n);case M:_=8,u|=24;break;case x:return t=ei(12,a,n,u|2),t.elementType=x,t.lanes=f,t;case I:return t=ei(13,a,n,u),t.elementType=I,t.lanes=f,t;case U:return t=ei(19,a,n,u),t.elementType=U,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case H:_=10;break e;case B:_=9;break e;case w:_=11;break e;case z:_=14;break e;case T:_=16,o=null;break e}_=29,a=Error(r(130,t===null?"null":typeof t,"")),o=null}return n=ei(_,a,n,u),n.elementType=t,n.type=o,n.lanes=f,n}function gr(t,n,a,o){return t=ei(7,t,o,n),t.lanes=a,t}function yu(t,n,a){return t=ei(6,t,null,n),t.lanes=a,t}function Np(t){var n=ei(18,null,null,0);return n.stateNode=t,n}function Mu(t,n,a){return n=ei(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Lp=new WeakMap;function ci(t,n){if(typeof t=="object"&&t!==null){var a=Lp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:en(n)},Lp.set(t,n),n)}return{value:t,source:n,stack:en(n)}}var Kr=[],Qr=0,hl=null,to=0,ui=[],fi=0,Da=null,Oi=1,Pi="";function Ji(t,n){Kr[Qr++]=to,Kr[Qr++]=hl,hl=t,to=n}function Op(t,n,a){ui[fi++]=Oi,ui[fi++]=Pi,ui[fi++]=Da,Da=t;var o=Oi;t=Pi;var u=32-Be(o)-1;o&=~(1<<u),a+=1;var f=32-Be(n)+u;if(30<f){var _=u-u%5;f=(o&(1<<_)-1).toString(32),o>>=_,u-=_,Oi=1<<32-Be(n)+u|a<<u|o,Pi=f+t}else Oi=1<<f|a<<u|o,Pi=t}function bu(t){t.return!==null&&(Ji(t,1),Op(t,1,0))}function Eu(t){for(;t===hl;)hl=Kr[--Qr],Kr[Qr]=null,to=Kr[--Qr],Kr[Qr]=null;for(;t===Da;)Da=ui[--fi],ui[fi]=null,Pi=ui[--fi],ui[fi]=null,Oi=ui[--fi],ui[fi]=null}function Pp(t,n){ui[fi++]=Oi,ui[fi++]=Pi,ui[fi++]=Da,Oi=n.id,Pi=n.overflow,Da=t}var Tn=null,qt=null,St=!1,Ua=null,di=!1,Tu=Error(r(519));function Na(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw no(ci(n,t)),Tu}function zp(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[fn]=t,n[En]=o,a){case"dialog":mt("cancel",n),mt("close",n);break;case"iframe":case"object":case"embed":mt("load",n);break;case"video":case"audio":for(a=0;a<To.length;a++)mt(To[a],n);break;case"source":mt("error",n);break;case"img":case"image":case"link":mt("error",n),mt("load",n);break;case"details":mt("toggle",n);break;case"input":mt("invalid",n),Un(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":mt("invalid",n);break;case"textarea":mt("invalid",n),yi(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||$0(n.textContent,a)?(o.popover!=null&&(mt("beforetoggle",n),mt("toggle",n)),o.onScroll!=null&&mt("scroll",n),o.onScrollEnd!=null&&mt("scrollend",n),o.onClick!=null&&(n.onclick=Zi),n=!0):n=!1,n||Na(t,!0)}function Ip(t){for(Tn=t.return;Tn;)switch(Tn.tag){case 5:case 31:case 13:di=!1;return;case 27:case 3:di=!0;return;default:Tn=Tn.return}}function Jr(t){if(t!==Tn)return!1;if(!St)return Ip(t),St=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Wf(t.type,t.memoizedProps)),a=!a),a&&qt&&Na(t),Ip(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));qt=lg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));qt=lg(t)}else n===27?(n=qt,ja(t.type)?(t=Zf,Zf=null,qt=t):qt=n):qt=Tn?pi(t.stateNode.nextSibling):null;return!0}function _r(){qt=Tn=null,St=!1}function Au(){var t=Ua;return t!==null&&(Wn===null?Wn=t:Wn.push.apply(Wn,t),Ua=null),t}function no(t){Ua===null?Ua=[t]:Ua.push(t)}var Ru=L(null),vr=null,$i=null;function La(t,n,a){be(Ru,n._currentValue),n._currentValue=a}function ea(t){t._currentValue=Ru.current,Z(Ru)}function Cu(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function wu(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var _=u.child;f=f.firstContext;e:for(;f!==null;){var C=f;f=u;for(var F=0;F<n.length;F++)if(C.context===n[F]){f.lanes|=a,C=f.alternate,C!==null&&(C.lanes|=a),Cu(f.return,a,t),o||(_=null);break e}f=C.next}}else if(u.tag===18){if(_=u.return,_===null)throw Error(r(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),Cu(_,a,t),_=null}else _=u.child;if(_!==null)_.return=u;else for(_=u;_!==null;){if(_===t){_=null;break}if(u=_.sibling,u!==null){u.return=_.return,_=u;break}_=_.return}u=_}}function $r(t,n,a,o){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var _=u.alternate;if(_===null)throw Error(r(387));if(_=_.memoizedProps,_!==null){var C=u.type;$n(u.pendingProps.value,_.value)||(t!==null?t.push(C):t=[C])}}else if(u===Se.current){if(_=u.alternate,_===null)throw Error(r(387));_.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Do):t=[Do])}u=u.return}t!==null&&wu(n,t,a,o),n.flags|=262144}function pl(t){for(t=t.firstContext;t!==null;){if(!$n(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function xr(t){vr=t,$i=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function An(t){return Bp(vr,t)}function ml(t,n){return vr===null&&xr(t),Bp(t,n)}function Bp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},$i===null){if(t===null)throw Error(r(308));$i=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else $i=$i.next=n;return a}var vx=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},xx=s.unstable_scheduleCallback,Sx=s.unstable_NormalPriority,hn={$$typeof:H,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Du(){return{controller:new vx,data:new Map,refCount:0}}function io(t){t.refCount--,t.refCount===0&&xx(Sx,function(){t.controller.abort()})}var ao=null,Uu=0,es=0,ts=null;function yx(t,n){if(ao===null){var a=ao=[];Uu=0,es=Pf(),ts={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Uu++,n.then(Fp,Fp),n}function Fp(){if(--Uu===0&&ao!==null){ts!==null&&(ts.status="fulfilled");var t=ao;ao=null,es=0,ts=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Mx(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Hp=P.S;P.S=function(t,n){b0=Ft(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&yx(t,n),Hp!==null&&Hp(t,n)};var Sr=L(null);function Nu(){var t=Sr.current;return t!==null?t:Wt.pooledCache}function gl(t,n){n===null?be(Sr,Sr.current):be(Sr,n.pool)}function Gp(){var t=Nu();return t===null?null:{parent:hn._currentValue,pool:t}}var ns=Error(r(460)),Lu=Error(r(474)),_l=Error(r(542)),vl={then:function(){}};function Vp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function kp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Zi,Zi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Xp(t),t;default:if(typeof n.status=="string")n.then(Zi,Zi);else{if(t=Wt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Xp(t),t}throw Mr=n,ns}}function yr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Mr=a,ns):a}}var Mr=null;function Wp(){if(Mr===null)throw Error(r(459));var t=Mr;return Mr=null,t}function Xp(t){if(t===ns||t===_l)throw Error(r(483))}var is=null,ro=0;function xl(t){var n=ro;return ro+=1,is===null&&(is=[]),kp(is,t,n)}function so(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Sl(t,n){throw n.$$typeof===g?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function jp(t){function n(Y,V){if(t){var $=Y.deletions;$===null?(Y.deletions=[V],Y.flags|=16):$.push(V)}}function a(Y,V){if(!t)return null;for(;V!==null;)n(Y,V),V=V.sibling;return null}function o(Y){for(var V=new Map;Y!==null;)Y.key!==null?V.set(Y.key,Y):V.set(Y.index,Y),Y=Y.sibling;return V}function u(Y,V){return Y=Qi(Y,V),Y.index=0,Y.sibling=null,Y}function f(Y,V,$){return Y.index=$,t?($=Y.alternate,$!==null?($=$.index,$<V?(Y.flags|=67108866,V):$):(Y.flags|=67108866,V)):(Y.flags|=1048576,V)}function _(Y){return t&&Y.alternate===null&&(Y.flags|=67108866),Y}function C(Y,V,$,ve){return V===null||V.tag!==6?(V=yu($,Y.mode,ve),V.return=Y,V):(V=u(V,$),V.return=Y,V)}function F(Y,V,$,ve){var $e=$.type;return $e===D?pe(Y,V,$.props.children,ve,$.key):V!==null&&(V.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===T&&yr($e)===V.type)?(V=u(V,$.props),so(V,$),V.return=Y,V):(V=dl($.type,$.key,$.props,null,Y.mode,ve),so(V,$),V.return=Y,V)}function ee(Y,V,$,ve){return V===null||V.tag!==4||V.stateNode.containerInfo!==$.containerInfo||V.stateNode.implementation!==$.implementation?(V=Mu($,Y.mode,ve),V.return=Y,V):(V=u(V,$.children||[]),V.return=Y,V)}function pe(Y,V,$,ve,$e){return V===null||V.tag!==7?(V=gr($,Y.mode,ve,$e),V.return=Y,V):(V=u(V,$),V.return=Y,V)}function xe(Y,V,$){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=yu(""+V,Y.mode,$),V.return=Y,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case E:return $=dl(V.type,V.key,V.props,null,Y.mode,$),so($,V),$.return=Y,$;case A:return V=Mu(V,Y.mode,$),V.return=Y,V;case T:return V=yr(V),xe(Y,V,$)}if(J(V)||Q(V))return V=gr(V,Y.mode,$,null),V.return=Y,V;if(typeof V.then=="function")return xe(Y,xl(V),$);if(V.$$typeof===H)return xe(Y,ml(Y,V),$);Sl(Y,V)}return null}function oe(Y,V,$,ve){var $e=V!==null?V.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return $e!==null?null:C(Y,V,""+$,ve);if(typeof $=="object"&&$!==null){switch($.$$typeof){case E:return $.key===$e?F(Y,V,$,ve):null;case A:return $.key===$e?ee(Y,V,$,ve):null;case T:return $=yr($),oe(Y,V,$,ve)}if(J($)||Q($))return $e!==null?null:pe(Y,V,$,ve,null);if(typeof $.then=="function")return oe(Y,V,xl($),ve);if($.$$typeof===H)return oe(Y,V,ml(Y,$),ve);Sl(Y,$)}return null}function ce(Y,V,$,ve,$e){if(typeof ve=="string"&&ve!==""||typeof ve=="number"||typeof ve=="bigint")return Y=Y.get($)||null,C(V,Y,""+ve,$e);if(typeof ve=="object"&&ve!==null){switch(ve.$$typeof){case E:return Y=Y.get(ve.key===null?$:ve.key)||null,F(V,Y,ve,$e);case A:return Y=Y.get(ve.key===null?$:ve.key)||null,ee(V,Y,ve,$e);case T:return ve=yr(ve),ce(Y,V,$,ve,$e)}if(J(ve)||Q(ve))return Y=Y.get($)||null,pe(V,Y,ve,$e,null);if(typeof ve.then=="function")return ce(Y,V,$,xl(ve),$e);if(ve.$$typeof===H)return ce(Y,V,$,ml(V,ve),$e);Sl(V,ve)}return null}function Xe(Y,V,$,ve){for(var $e=null,At=null,qe=V,lt=V=0,_t=null;qe!==null&&lt<$.length;lt++){qe.index>lt?(_t=qe,qe=null):_t=qe.sibling;var Rt=oe(Y,qe,$[lt],ve);if(Rt===null){qe===null&&(qe=_t);break}t&&qe&&Rt.alternate===null&&n(Y,qe),V=f(Rt,V,lt),At===null?$e=Rt:At.sibling=Rt,At=Rt,qe=_t}if(lt===$.length)return a(Y,qe),St&&Ji(Y,lt),$e;if(qe===null){for(;lt<$.length;lt++)qe=xe(Y,$[lt],ve),qe!==null&&(V=f(qe,V,lt),At===null?$e=qe:At.sibling=qe,At=qe);return St&&Ji(Y,lt),$e}for(qe=o(qe);lt<$.length;lt++)_t=ce(qe,Y,lt,$[lt],ve),_t!==null&&(t&&_t.alternate!==null&&qe.delete(_t.key===null?lt:_t.key),V=f(_t,V,lt),At===null?$e=_t:At.sibling=_t,At=_t);return t&&qe.forEach(function(Qa){return n(Y,Qa)}),St&&Ji(Y,lt),$e}function et(Y,V,$,ve){if($==null)throw Error(r(151));for(var $e=null,At=null,qe=V,lt=V=0,_t=null,Rt=$.next();qe!==null&&!Rt.done;lt++,Rt=$.next()){qe.index>lt?(_t=qe,qe=null):_t=qe.sibling;var Qa=oe(Y,qe,Rt.value,ve);if(Qa===null){qe===null&&(qe=_t);break}t&&qe&&Qa.alternate===null&&n(Y,qe),V=f(Qa,V,lt),At===null?$e=Qa:At.sibling=Qa,At=Qa,qe=_t}if(Rt.done)return a(Y,qe),St&&Ji(Y,lt),$e;if(qe===null){for(;!Rt.done;lt++,Rt=$.next())Rt=xe(Y,Rt.value,ve),Rt!==null&&(V=f(Rt,V,lt),At===null?$e=Rt:At.sibling=Rt,At=Rt);return St&&Ji(Y,lt),$e}for(qe=o(qe);!Rt.done;lt++,Rt=$.next())Rt=ce(qe,Y,lt,Rt.value,ve),Rt!==null&&(t&&Rt.alternate!==null&&qe.delete(Rt.key===null?lt:Rt.key),V=f(Rt,V,lt),At===null?$e=Rt:At.sibling=Rt,At=Rt);return t&&qe.forEach(function(L1){return n(Y,L1)}),St&&Ji(Y,lt),$e}function Vt(Y,V,$,ve){if(typeof $=="object"&&$!==null&&$.type===D&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case E:e:{for(var $e=$.key;V!==null;){if(V.key===$e){if($e=$.type,$e===D){if(V.tag===7){a(Y,V.sibling),ve=u(V,$.props.children),ve.return=Y,Y=ve;break e}}else if(V.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===T&&yr($e)===V.type){a(Y,V.sibling),ve=u(V,$.props),so(ve,$),ve.return=Y,Y=ve;break e}a(Y,V);break}else n(Y,V);V=V.sibling}$.type===D?(ve=gr($.props.children,Y.mode,ve,$.key),ve.return=Y,Y=ve):(ve=dl($.type,$.key,$.props,null,Y.mode,ve),so(ve,$),ve.return=Y,Y=ve)}return _(Y);case A:e:{for($e=$.key;V!==null;){if(V.key===$e)if(V.tag===4&&V.stateNode.containerInfo===$.containerInfo&&V.stateNode.implementation===$.implementation){a(Y,V.sibling),ve=u(V,$.children||[]),ve.return=Y,Y=ve;break e}else{a(Y,V);break}else n(Y,V);V=V.sibling}ve=Mu($,Y.mode,ve),ve.return=Y,Y=ve}return _(Y);case T:return $=yr($),Vt(Y,V,$,ve)}if(J($))return Xe(Y,V,$,ve);if(Q($)){if($e=Q($),typeof $e!="function")throw Error(r(150));return $=$e.call($),et(Y,V,$,ve)}if(typeof $.then=="function")return Vt(Y,V,xl($),ve);if($.$$typeof===H)return Vt(Y,V,ml(Y,$),ve);Sl(Y,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,V!==null&&V.tag===6?(a(Y,V.sibling),ve=u(V,$),ve.return=Y,Y=ve):(a(Y,V),ve=yu($,Y.mode,ve),ve.return=Y,Y=ve),_(Y)):a(Y,V)}return function(Y,V,$,ve){try{ro=0;var $e=Vt(Y,V,$,ve);return is=null,$e}catch(qe){if(qe===ns||qe===_l)throw qe;var At=ei(29,qe,null,Y.mode);return At.lanes=ve,At.return=Y,At}finally{}}}var br=jp(!0),qp=jp(!1),Oa=!1;function Ou(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Pu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Pa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function za(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(wt&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=fl(t),Dp(t,null,a),n}return ul(t,o,n,a),fl(t)}function oo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Zn(t,a)}}function zu(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Iu=!1;function lo(){if(Iu){var t=ts;if(t!==null)throw t}}function co(t,n,a,o){Iu=!1;var u=t.updateQueue;Oa=!1;var f=u.firstBaseUpdate,_=u.lastBaseUpdate,C=u.shared.pending;if(C!==null){u.shared.pending=null;var F=C,ee=F.next;F.next=null,_===null?f=ee:_.next=ee,_=F;var pe=t.alternate;pe!==null&&(pe=pe.updateQueue,C=pe.lastBaseUpdate,C!==_&&(C===null?pe.firstBaseUpdate=ee:C.next=ee,pe.lastBaseUpdate=F))}if(f!==null){var xe=u.baseState;_=0,pe=ee=F=null,C=f;do{var oe=C.lane&-536870913,ce=oe!==C.lane;if(ce?(gt&oe)===oe:(o&oe)===oe){oe!==0&&oe===es&&(Iu=!0),pe!==null&&(pe=pe.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});e:{var Xe=t,et=C;oe=n;var Vt=a;switch(et.tag){case 1:if(Xe=et.payload,typeof Xe=="function"){xe=Xe.call(Vt,xe,oe);break e}xe=Xe;break e;case 3:Xe.flags=Xe.flags&-65537|128;case 0:if(Xe=et.payload,oe=typeof Xe=="function"?Xe.call(Vt,xe,oe):Xe,oe==null)break e;xe=y({},xe,oe);break e;case 2:Oa=!0}}oe=C.callback,oe!==null&&(t.flags|=64,ce&&(t.flags|=8192),ce=u.callbacks,ce===null?u.callbacks=[oe]:ce.push(oe))}else ce={lane:oe,tag:C.tag,payload:C.payload,callback:C.callback,next:null},pe===null?(ee=pe=ce,F=xe):pe=pe.next=ce,_|=oe;if(C=C.next,C===null){if(C=u.shared.pending,C===null)break;ce=C,C=ce.next,ce.next=null,u.lastBaseUpdate=ce,u.shared.pending=null}}while(!0);pe===null&&(F=xe),u.baseState=F,u.firstBaseUpdate=ee,u.lastBaseUpdate=pe,f===null&&(u.shared.lanes=0),Ga|=_,t.lanes=_,t.memoizedState=xe}}function Yp(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Zp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Yp(a[t],n)}var as=L(null),yl=L(0);function Kp(t,n){t=ca,be(yl,t),be(as,n),ca=t|n.baseLanes}function Bu(){be(yl,ca),be(as,as.current)}function Fu(){ca=yl.current,Z(as),Z(yl)}var ti=L(null),hi=null;function Ia(t){var n=t.alternate;be(ln,ln.current&1),be(ti,t),hi===null&&(n===null||as.current!==null||n.memoizedState!==null)&&(hi=t)}function Hu(t){be(ln,ln.current),be(ti,t),hi===null&&(hi=t)}function Qp(t){t.tag===22?(be(ln,ln.current),be(ti,t),hi===null&&(hi=t)):Ba()}function Ba(){be(ln,ln.current),be(ti,ti.current)}function ni(t){Z(ti),hi===t&&(hi=null),Z(ln)}var ln=L(0);function Ml(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||qf(a)||Yf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ta=0,ot=null,Ht=null,pn=null,bl=!1,rs=!1,Er=!1,El=0,uo=0,ss=null,bx=0;function an(){throw Error(r(321))}function Gu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!$n(t[a],n[a]))return!1;return!0}function Vu(t,n,a,o,u,f){return ta=f,ot=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=t===null||t.memoizedState===null?Om:af,Er=!1,f=a(o,u),Er=!1,rs&&(f=$p(n,a,o,u)),Jp(t),f}function Jp(t){P.H=po;var n=Ht!==null&&Ht.next!==null;if(ta=0,pn=Ht=ot=null,bl=!1,uo=0,ss=null,n)throw Error(r(300));t===null||mn||(t=t.dependencies,t!==null&&pl(t)&&(mn=!0))}function $p(t,n,a,o){ot=t;var u=0;do{if(rs&&(ss=null),uo=0,rs=!1,25<=u)throw Error(r(301));if(u+=1,pn=Ht=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}P.H=Pm,f=n(a,o)}while(rs);return f}function Ex(){var t=P.H,n=t.useState()[0];return n=typeof n.then=="function"?fo(n):n,t=t.useState()[0],(Ht!==null?Ht.memoizedState:null)!==t&&(ot.flags|=1024),n}function ku(){var t=El!==0;return El=0,t}function Wu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Xu(t){if(bl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}bl=!1}ta=0,pn=Ht=ot=null,rs=!1,uo=El=0,ss=null}function zn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pn===null?ot.memoizedState=pn=t:pn=pn.next=t,pn}function cn(){if(Ht===null){var t=ot.alternate;t=t!==null?t.memoizedState:null}else t=Ht.next;var n=pn===null?ot.memoizedState:pn.next;if(n!==null)pn=n,Ht=t;else{if(t===null)throw ot.alternate===null?Error(r(467)):Error(r(310));Ht=t,t={memoizedState:Ht.memoizedState,baseState:Ht.baseState,baseQueue:Ht.baseQueue,queue:Ht.queue,next:null},pn===null?ot.memoizedState=pn=t:pn=pn.next=t}return pn}function Tl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function fo(t){var n=uo;return uo+=1,ss===null&&(ss=[]),t=kp(ss,t,n),n=ot,(pn===null?n.memoizedState:pn.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?Om:af),t}function Al(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return fo(t);if(t.$$typeof===H)return An(t)}throw Error(r(438,String(t)))}function ju(t){var n=null,a=ot.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ot.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Tl(),ot.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=q;return n.index++,a}function na(t,n){return typeof n=="function"?n(t):n}function Rl(t){var n=cn();return qu(n,Ht,t)}function qu(t,n,a){var o=t.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=t.baseQueue,f=o.pending;if(f!==null){if(u!==null){var _=u.next;u.next=f.next,f.next=_}n.baseQueue=u=f,o.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var C=_=null,F=null,ee=n,pe=!1;do{var xe=ee.lane&-536870913;if(xe!==ee.lane?(gt&xe)===xe:(ta&xe)===xe){var oe=ee.revertLane;if(oe===0)F!==null&&(F=F.next={lane:0,revertLane:0,gesture:null,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),xe===es&&(pe=!0);else if((ta&oe)===oe){ee=ee.next,oe===es&&(pe=!0);continue}else xe={lane:0,revertLane:ee.revertLane,gesture:null,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null},F===null?(C=F=xe,_=f):F=F.next=xe,ot.lanes|=oe,Ga|=oe;xe=ee.action,Er&&a(f,xe),f=ee.hasEagerState?ee.eagerState:a(f,xe)}else oe={lane:xe,revertLane:ee.revertLane,gesture:ee.gesture,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null},F===null?(C=F=oe,_=f):F=F.next=oe,ot.lanes|=xe,Ga|=xe;ee=ee.next}while(ee!==null&&ee!==n);if(F===null?_=f:F.next=C,!$n(f,t.memoizedState)&&(mn=!0,pe&&(a=ts,a!==null)))throw a;t.memoizedState=f,t.baseState=_,t.baseQueue=F,o.lastRenderedState=f}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function Yu(t){var n=cn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var _=u=u.next;do f=t(f,_.action),_=_.next;while(_!==u);$n(f,n.memoizedState)||(mn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function em(t,n,a){var o=ot,u=cn(),f=St;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var _=!$n((Ht||u).memoizedState,a);if(_&&(u.memoizedState=a,mn=!0),u=u.queue,Qu(im.bind(null,o,u,t),[t]),u.getSnapshot!==n||_||pn!==null&&pn.memoizedState.tag&1){if(o.flags|=2048,os(9,{destroy:void 0},nm.bind(null,o,u,a,n),null),Wt===null)throw Error(r(349));f||(ta&127)!==0||tm(o,n,a)}return a}function tm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ot.updateQueue,n===null?(n=Tl(),ot.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function nm(t,n,a,o){n.value=a,n.getSnapshot=o,am(n)&&rm(t)}function im(t,n,a){return a(function(){am(n)&&rm(t)})}function am(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!$n(t,a)}catch{return!0}}function rm(t){var n=mr(t,2);n!==null&&Xn(n,t,2)}function Zu(t){var n=zn();if(typeof t=="function"){var a=t;if(t=a(),Er){Re(!0);try{a()}finally{Re(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:t},n}function sm(t,n,a,o){return t.baseState=a,qu(t,Ht,typeof o=="function"?o:na)}function Tx(t,n,a,o,u){if(Dl(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};P.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,om(n,f)):(f.next=a.next,n.pending=a.next=f)}}function om(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var f=P.T,_={};P.T=_;try{var C=a(u,o),F=P.S;F!==null&&F(_,C),lm(t,n,C)}catch(ee){Ku(t,n,ee)}finally{f!==null&&_.types!==null&&(f.types=_.types),P.T=f}}else try{f=a(u,o),lm(t,n,f)}catch(ee){Ku(t,n,ee)}}function lm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){cm(t,n,o)},function(o){return Ku(t,n,o)}):cm(t,n,a)}function cm(t,n,a){n.status="fulfilled",n.value=a,um(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,om(t,a)))}function Ku(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,um(n),n=n.next;while(n!==o)}t.action=null}function um(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function fm(t,n){return n}function dm(t,n){if(St){var a=Wt.formState;if(a!==null){e:{var o=ot;if(St){if(qt){t:{for(var u=qt,f=di;u.nodeType!==8;){if(!f){u=null;break t}if(u=pi(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){qt=pi(u.nextSibling),o=u.data==="F!";break e}}Na(o)}o=!1}o&&(n=a[0])}}return a=zn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:fm,lastRenderedState:n},a.queue=o,a=Um.bind(null,ot,o),o.dispatch=a,o=Zu(!1),f=nf.bind(null,ot,!1,o.queue),o=zn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=Tx.bind(null,ot,u,f,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function hm(t){var n=cn();return pm(n,Ht,t)}function pm(t,n,a){if(n=qu(t,n,fm)[0],t=Rl(na)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=fo(n)}catch(_){throw _===ns?_l:_}else o=n;n=cn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(ot.flags|=2048,os(9,{destroy:void 0},Ax.bind(null,u,a),null)),[o,f,t]}function Ax(t,n){t.action=n}function mm(t){var n=cn(),a=Ht;if(a!==null)return pm(n,a,t);cn(),n=n.memoizedState,a=cn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function os(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=ot.updateQueue,n===null&&(n=Tl(),ot.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function gm(){return cn().memoizedState}function Cl(t,n,a,o){var u=zn();ot.flags|=t,u.memoizedState=os(1|n,{destroy:void 0},a,o===void 0?null:o)}function wl(t,n,a,o){var u=cn();o=o===void 0?null:o;var f=u.memoizedState.inst;Ht!==null&&o!==null&&Gu(o,Ht.memoizedState.deps)?u.memoizedState=os(n,f,a,o):(ot.flags|=t,u.memoizedState=os(1|n,f,a,o))}function _m(t,n){Cl(8390656,8,t,n)}function Qu(t,n){wl(2048,8,t,n)}function Rx(t){ot.flags|=4;var n=ot.updateQueue;if(n===null)n=Tl(),ot.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function vm(t){var n=cn().memoizedState;return Rx({ref:n,nextImpl:t}),function(){if((wt&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function xm(t,n){return wl(4,2,t,n)}function Sm(t,n){return wl(4,4,t,n)}function ym(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Mm(t,n,a){a=a!=null?a.concat([t]):null,wl(4,4,ym.bind(null,n,t),a)}function Ju(){}function bm(t,n){var a=cn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Gu(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function Em(t,n){var a=cn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Gu(n,o[1]))return o[0];if(o=t(),Er){Re(!0);try{t()}finally{Re(!1)}}return a.memoizedState=[o,n],o}function $u(t,n,a){return a===void 0||(ta&1073741824)!==0&&(gt&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=T0(),ot.lanes|=t,Ga|=t,a)}function Tm(t,n,a,o){return $n(a,n)?a:as.current!==null?(t=$u(t,a,o),$n(t,n)||(mn=!0),t):(ta&42)===0||(ta&1073741824)!==0&&(gt&261930)===0?(mn=!0,t.memoizedState=a):(t=T0(),ot.lanes|=t,Ga|=t,n)}function Am(t,n,a,o,u){var f=G.p;G.p=f!==0&&8>f?f:8;var _=P.T,C={};P.T=C,nf(t,!1,n,a);try{var F=u(),ee=P.S;if(ee!==null&&ee(C,F),F!==null&&typeof F=="object"&&typeof F.then=="function"){var pe=Mx(F,o);ho(t,n,pe,ri(t))}else ho(t,n,o,ri(t))}catch(xe){ho(t,n,{then:function(){},status:"rejected",reason:xe},ri())}finally{G.p=f,_!==null&&C.types!==null&&(_.types=C.types),P.T=_}}function Cx(){}function ef(t,n,a,o){if(t.tag!==5)throw Error(r(476));var u=Rm(t).queue;Am(t,u,n,te,a===null?Cx:function(){return Cm(t),a(o)})}function Rm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:te,baseState:te,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:te},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Cm(t){var n=Rm(t);n.next===null&&(n=t.alternate.memoizedState),ho(t,n.next.queue,{},ri())}function tf(){return An(Do)}function wm(){return cn().memoizedState}function Dm(){return cn().memoizedState}function wx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ri();t=Pa(a);var o=za(n,t,a);o!==null&&(Xn(o,n,a),oo(o,n,a)),n={cache:Du()},t.payload=n;return}n=n.return}}function Dx(t,n,a){var o=ri();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Dl(t)?Nm(n,a):(a=xu(t,n,a,o),a!==null&&(Xn(a,t,o),Lm(a,n,o)))}function Um(t,n,a){var o=ri();ho(t,n,a,o)}function ho(t,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Dl(t))Nm(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,C=f(_,a);if(u.hasEagerState=!0,u.eagerState=C,$n(C,_))return ul(t,n,u,0),Wt===null&&cl(),!1}catch{}finally{}if(a=xu(t,n,u,o),a!==null)return Xn(a,t,o),Lm(a,n,o),!0}return!1}function nf(t,n,a,o){if(o={lane:2,revertLane:Pf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Dl(t)){if(n)throw Error(r(479))}else n=xu(t,a,o,2),n!==null&&Xn(n,t,2)}function Dl(t){var n=t.alternate;return t===ot||n!==null&&n===ot}function Nm(t,n){rs=bl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Lm(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Zn(t,a)}}var po={readContext:An,use:Al,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useLayoutEffect:an,useInsertionEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useSyncExternalStore:an,useId:an,useHostTransitionStatus:an,useFormState:an,useActionState:an,useOptimistic:an,useMemoCache:an,useCacheRefresh:an};po.useEffectEvent=an;var Om={readContext:An,use:Al,useCallback:function(t,n){return zn().memoizedState=[t,n===void 0?null:n],t},useContext:An,useEffect:_m,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Cl(4194308,4,ym.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Cl(4194308,4,t,n)},useInsertionEffect:function(t,n){Cl(4,2,t,n)},useMemo:function(t,n){var a=zn();n=n===void 0?null:n;var o=t();if(Er){Re(!0);try{t()}finally{Re(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=zn();if(a!==void 0){var u=a(n);if(Er){Re(!0);try{a(n)}finally{Re(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=Dx.bind(null,ot,t),[o.memoizedState,t]},useRef:function(t){var n=zn();return t={current:t},n.memoizedState=t},useState:function(t){t=Zu(t);var n=t.queue,a=Um.bind(null,ot,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Ju,useDeferredValue:function(t,n){var a=zn();return $u(a,t,n)},useTransition:function(){var t=Zu(!1);return t=Am.bind(null,ot,t.queue,!0,!1),zn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=ot,u=zn();if(St){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Wt===null)throw Error(r(349));(gt&127)!==0||tm(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,_m(im.bind(null,o,f,t),[t]),o.flags|=2048,os(9,{destroy:void 0},nm.bind(null,o,f,a,n),null),a},useId:function(){var t=zn(),n=Wt.identifierPrefix;if(St){var a=Pi,o=Oi;a=(o&~(1<<32-Be(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=El++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=bx++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:tf,useFormState:dm,useActionState:dm,useOptimistic:function(t){var n=zn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=nf.bind(null,ot,!0,a),a.dispatch=n,[t,n]},useMemoCache:ju,useCacheRefresh:function(){return zn().memoizedState=wx.bind(null,ot)},useEffectEvent:function(t){var n=zn(),a={impl:t};return n.memoizedState=a,function(){if((wt&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},af={readContext:An,use:Al,useCallback:bm,useContext:An,useEffect:Qu,useImperativeHandle:Mm,useInsertionEffect:xm,useLayoutEffect:Sm,useMemo:Em,useReducer:Rl,useRef:gm,useState:function(){return Rl(na)},useDebugValue:Ju,useDeferredValue:function(t,n){var a=cn();return Tm(a,Ht.memoizedState,t,n)},useTransition:function(){var t=Rl(na)[0],n=cn().memoizedState;return[typeof t=="boolean"?t:fo(t),n]},useSyncExternalStore:em,useId:wm,useHostTransitionStatus:tf,useFormState:hm,useActionState:hm,useOptimistic:function(t,n){var a=cn();return sm(a,Ht,t,n)},useMemoCache:ju,useCacheRefresh:Dm};af.useEffectEvent=vm;var Pm={readContext:An,use:Al,useCallback:bm,useContext:An,useEffect:Qu,useImperativeHandle:Mm,useInsertionEffect:xm,useLayoutEffect:Sm,useMemo:Em,useReducer:Yu,useRef:gm,useState:function(){return Yu(na)},useDebugValue:Ju,useDeferredValue:function(t,n){var a=cn();return Ht===null?$u(a,t,n):Tm(a,Ht.memoizedState,t,n)},useTransition:function(){var t=Yu(na)[0],n=cn().memoizedState;return[typeof t=="boolean"?t:fo(t),n]},useSyncExternalStore:em,useId:wm,useHostTransitionStatus:tf,useFormState:mm,useActionState:mm,useOptimistic:function(t,n){var a=cn();return Ht!==null?sm(a,Ht,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:ju,useCacheRefresh:Dm};Pm.useEffectEvent=vm;function rf(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:y({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var sf={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=ri(),u=Pa(o);u.payload=n,a!=null&&(u.callback=a),n=za(t,u,o),n!==null&&(Xn(n,t,o),oo(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=ri(),u=Pa(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=za(t,u,o),n!==null&&(Xn(n,t,o),oo(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ri(),o=Pa(a);o.tag=2,n!=null&&(o.callback=n),n=za(t,o,a),n!==null&&(Xn(n,t,a),oo(n,t,a))}};function zm(t,n,a,o,u,f,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,f,_):n.prototype&&n.prototype.isPureReactComponent?!$s(a,o)||!$s(u,f):!0}function Im(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&sf.enqueueReplaceState(n,n.state,null)}function Tr(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=y({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function Bm(t){ll(t)}function Fm(t){console.error(t)}function Hm(t){ll(t)}function Ul(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Gm(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function of(t,n,a){return a=Pa(a),a.tag=3,a.payload={element:null},a.callback=function(){Ul(t,n)},a}function Vm(t){return t=Pa(t),t.tag=3,t}function km(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;t.payload=function(){return u(f)},t.callback=function(){Gm(n,a,o)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){Gm(n,a,o),typeof u!="function"&&(Va===null?Va=new Set([this]):Va.add(this));var C=o.stack;this.componentDidCatch(o.value,{componentStack:C!==null?C:""})})}function Ux(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&$r(n,a,u,!0),a=ti.current,a!==null){switch(a.tag){case 31:case 13:return hi===null?kl():a.alternate===null&&rn===0&&(rn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===vl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Nf(t,o,u)),!1;case 22:return a.flags|=65536,o===vl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Nf(t,o,u)),!1}throw Error(r(435,a.tag))}return Nf(t,o,u),kl(),!1}if(St)return n=ti.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Tu&&(t=Error(r(422),{cause:o}),no(ci(t,a)))):(o!==Tu&&(n=Error(r(423),{cause:o}),no(ci(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=ci(o,a),u=of(t.stateNode,o,u),zu(t,u),rn!==4&&(rn=2)),!1;var f=Error(r(520),{cause:o});if(f=ci(f,a),Mo===null?Mo=[f]:Mo.push(f),rn!==4&&(rn=2),n===null)return!0;o=ci(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=of(a.stateNode,o,t),zu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Va===null||!Va.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Vm(u),km(u,t,a,o),zu(a,u),!1}a=a.return}while(a!==null);return!1}var lf=Error(r(461)),mn=!1;function Rn(t,n,a,o){n.child=t===null?qp(n,null,a,o):br(n,t.child,a,o)}function Wm(t,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var _={};for(var C in o)C!=="ref"&&(_[C]=o[C])}else _=o;return xr(n),o=Vu(t,n,a,_,f,u),C=ku(),t!==null&&!mn?(Wu(t,n,u),ia(t,n,u)):(St&&C&&bu(n),n.flags|=1,Rn(t,n,o,u),n.child)}function Xm(t,n,a,o,u){if(t===null){var f=a.type;return typeof f=="function"&&!Su(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,jm(t,n,f,o,u)):(t=dl(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!gf(t,u)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:$s,a(_,o)&&t.ref===n.ref)return ia(t,n,u)}return n.flags|=1,t=Qi(f,o),t.ref=n.ref,t.return=n,n.child=t}function jm(t,n,a,o,u){if(t!==null){var f=t.memoizedProps;if($s(f,o)&&t.ref===n.ref)if(mn=!1,n.pendingProps=o=f,gf(t,u))(t.flags&131072)!==0&&(mn=!0);else return n.lanes=t.lanes,ia(t,n,u)}return cf(t,n,a,o,u)}function qm(t,n,a,o){var u=o.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return Ym(t,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&gl(n,f!==null?f.cachePool:null),f!==null?Kp(n,f):Bu(),Qp(n);else return o=n.lanes=536870912,Ym(t,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(gl(n,f.cachePool),Kp(n,f),Ba(),n.memoizedState=null):(t!==null&&gl(n,null),Bu(),Ba());return Rn(t,n,u,a),n.child}function mo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Ym(t,n,a,o,u){var f=Nu();return f=f===null?null:{parent:hn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&gl(n,null),Bu(),Qp(n),t!==null&&$r(t,n,o,!0),n.childLanes=u,null}function Nl(t,n){return n=Ol({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Zm(t,n,a){return br(n,t.child,null,a),t=Nl(n,n.pendingProps),t.flags|=2,ni(n),n.memoizedState=null,t}function Nx(t,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(St){if(o.mode==="hidden")return t=Nl(n,o),n.lanes=536870912,mo(null,t);if(Hu(n),(t=qt)?(t=og(t,di),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Da!==null?{id:Oi,overflow:Pi}:null,retryLane:536870912,hydrationErrors:null},a=Np(t),a.return=n,n.child=a,Tn=n,qt=null)):t=null,t===null)throw Na(n);return n.lanes=536870912,null}return Nl(n,o)}var f=t.memoizedState;if(f!==null){var _=f.dehydrated;if(Hu(n),u)if(n.flags&256)n.flags&=-257,n=Zm(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(mn||$r(t,n,a,!1),u=(a&t.childLanes)!==0,mn||u){if(o=Wt,o!==null&&(_=Kn(o,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,mr(t,_),Xn(o,t,_),lf;kl(),n=Zm(t,n,a)}else t=f.treeContext,qt=pi(_.nextSibling),Tn=n,St=!0,Ua=null,di=!1,t!==null&&Pp(n,t),n=Nl(n,o),n.flags|=4096;return n}return t=Qi(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Ll(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function cf(t,n,a,o,u){return xr(n),a=Vu(t,n,a,o,void 0,u),o=ku(),t!==null&&!mn?(Wu(t,n,u),ia(t,n,u)):(St&&o&&bu(n),n.flags|=1,Rn(t,n,a,u),n.child)}function Km(t,n,a,o,u,f){return xr(n),n.updateQueue=null,a=$p(n,o,a,u),Jp(t),o=ku(),t!==null&&!mn?(Wu(t,n,f),ia(t,n,f)):(St&&o&&bu(n),n.flags|=1,Rn(t,n,a,f),n.child)}function Qm(t,n,a,o,u){if(xr(n),n.stateNode===null){var f=Zr,_=a.contextType;typeof _=="object"&&_!==null&&(f=An(_)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=sf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Ou(n),_=a.contextType,f.context=typeof _=="object"&&_!==null?An(_):Zr,f.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(rf(n,a,_,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&sf.enqueueReplaceState(f,f.state,null),co(n,o,f,u),lo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){f=n.stateNode;var C=n.memoizedProps,F=Tr(a,C);f.props=F;var ee=f.context,pe=a.contextType;_=Zr,typeof pe=="object"&&pe!==null&&(_=An(pe));var xe=a.getDerivedStateFromProps;pe=typeof xe=="function"||typeof f.getSnapshotBeforeUpdate=="function",C=n.pendingProps!==C,pe||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(C||ee!==_)&&Im(n,f,o,_),Oa=!1;var oe=n.memoizedState;f.state=oe,co(n,o,f,u),lo(),ee=n.memoizedState,C||oe!==ee||Oa?(typeof xe=="function"&&(rf(n,a,xe,o),ee=n.memoizedState),(F=Oa||zm(n,a,F,o,oe,ee,_))?(pe||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ee),f.props=o,f.state=ee,f.context=_,o=F):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Pu(t,n),_=n.memoizedProps,pe=Tr(a,_),f.props=pe,xe=n.pendingProps,oe=f.context,ee=a.contextType,F=Zr,typeof ee=="object"&&ee!==null&&(F=An(ee)),C=a.getDerivedStateFromProps,(ee=typeof C=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==xe||oe!==F)&&Im(n,f,o,F),Oa=!1,oe=n.memoizedState,f.state=oe,co(n,o,f,u),lo();var ce=n.memoizedState;_!==xe||oe!==ce||Oa||t!==null&&t.dependencies!==null&&pl(t.dependencies)?(typeof C=="function"&&(rf(n,a,C,o),ce=n.memoizedState),(pe=Oa||zm(n,a,pe,o,oe,ce,F)||t!==null&&t.dependencies!==null&&pl(t.dependencies))?(ee||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,ce,F),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,ce,F)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&oe===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&oe===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ce),f.props=o,f.state=ce,f.context=F,o=pe):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&oe===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&oe===t.memoizedState||(n.flags|=1024),o=!1)}return f=o,Ll(t,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&o?(n.child=br(n,t.child,null,u),n.child=br(n,null,a,u)):Rn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=ia(t,n,u),t}function Jm(t,n,a,o){return _r(),n.flags|=256,Rn(t,n,a,o),n.child}var uf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ff(t){return{baseLanes:t,cachePool:Gp()}}function df(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ai),t}function $m(t,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=t!==null&&t.memoizedState===null?!1:(ln.current&2)!==0),_&&(u=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,t===null){if(St){if(u?Ia(n):Ba(),(t=qt)?(t=og(t,di),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Da!==null?{id:Oi,overflow:Pi}:null,retryLane:536870912,hydrationErrors:null},a=Np(t),a.return=n,n.child=a,Tn=n,qt=null)):t=null,t===null)throw Na(n);return Yf(t)?n.lanes=32:n.lanes=536870912,null}var C=o.children;return o=o.fallback,u?(Ba(),u=n.mode,C=Ol({mode:"hidden",children:C},u),o=gr(o,u,a,null),C.return=n,o.return=n,C.sibling=o,n.child=C,o=n.child,o.memoizedState=ff(a),o.childLanes=df(t,_,a),n.memoizedState=uf,mo(null,o)):(Ia(n),hf(n,C))}var F=t.memoizedState;if(F!==null&&(C=F.dehydrated,C!==null)){if(f)n.flags&256?(Ia(n),n.flags&=-257,n=pf(t,n,a)):n.memoizedState!==null?(Ba(),n.child=t.child,n.flags|=128,n=null):(Ba(),C=o.fallback,u=n.mode,o=Ol({mode:"visible",children:o.children},u),C=gr(C,u,a,null),C.flags|=2,o.return=n,C.return=n,o.sibling=C,n.child=o,br(n,t.child,null,a),o=n.child,o.memoizedState=ff(a),o.childLanes=df(t,_,a),n.memoizedState=uf,n=mo(null,o));else if(Ia(n),Yf(C)){if(_=C.nextSibling&&C.nextSibling.dataset,_)var ee=_.dgst;_=ee,o=Error(r(419)),o.stack="",o.digest=_,no({value:o,source:null,stack:null}),n=pf(t,n,a)}else if(mn||$r(t,n,a,!1),_=(a&t.childLanes)!==0,mn||_){if(_=Wt,_!==null&&(o=Kn(_,a),o!==0&&o!==F.retryLane))throw F.retryLane=o,mr(t,o),Xn(_,t,o),lf;qf(C)||kl(),n=pf(t,n,a)}else qf(C)?(n.flags|=192,n.child=t.child,n=null):(t=F.treeContext,qt=pi(C.nextSibling),Tn=n,St=!0,Ua=null,di=!1,t!==null&&Pp(n,t),n=hf(n,o.children),n.flags|=4096);return n}return u?(Ba(),C=o.fallback,u=n.mode,F=t.child,ee=F.sibling,o=Qi(F,{mode:"hidden",children:o.children}),o.subtreeFlags=F.subtreeFlags&65011712,ee!==null?C=Qi(ee,C):(C=gr(C,u,a,null),C.flags|=2),C.return=n,o.return=n,o.sibling=C,n.child=o,mo(null,o),o=n.child,C=t.child.memoizedState,C===null?C=ff(a):(u=C.cachePool,u!==null?(F=hn._currentValue,u=u.parent!==F?{parent:F,pool:F}:u):u=Gp(),C={baseLanes:C.baseLanes|a,cachePool:u}),o.memoizedState=C,o.childLanes=df(t,_,a),n.memoizedState=uf,mo(t.child,o)):(Ia(n),a=t.child,t=a.sibling,a=Qi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(_=n.deletions,_===null?(n.deletions=[t],n.flags|=16):_.push(t)),n.child=a,n.memoizedState=null,a)}function hf(t,n){return n=Ol({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Ol(t,n){return t=ei(22,t,null,n),t.lanes=0,t}function pf(t,n,a){return br(n,t.child,null,a),t=hf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function e0(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Cu(t.return,n,a)}function mf(t,n,a,o,u,f){var _=t.memoizedState;_===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=o,_.tail=a,_.tailMode=u,_.treeForkCount=f)}function t0(t,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var _=ln.current,C=(_&2)!==0;if(C?(_=_&1|2,n.flags|=128):_&=1,be(ln,_),Rn(t,n,o,a),o=St?to:0,!C&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&e0(t,a,n);else if(t.tag===19)e0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Ml(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),mf(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Ml(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}mf(n,!0,a,null,f,o);break;case"together":mf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ia(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ga|=n.lanes,(a&n.childLanes)===0)if(t!==null){if($r(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Qi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Qi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function gf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&pl(t)))}function Lx(t,n,a){switch(n.tag){case 3:Me(n,n.stateNode.containerInfo),La(n,hn,t.memoizedState.cache),_r();break;case 27:case 5:tt(n);break;case 4:Me(n,n.stateNode.containerInfo);break;case 10:La(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Hu(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ia(n),n.flags|=128,null):(a&n.child.childLanes)!==0?$m(t,n,a):(Ia(n),t=ia(t,n,a),t!==null?t.sibling:null);Ia(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||($r(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return t0(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),be(ln,ln.current),o)break;return null;case 22:return n.lanes=0,qm(t,n,a,n.pendingProps);case 24:La(n,hn,t.memoizedState.cache)}return ia(t,n,a)}function n0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)mn=!0;else{if(!gf(t,a)&&(n.flags&128)===0)return mn=!1,Lx(t,n,a);mn=(t.flags&131072)!==0}else mn=!1,St&&(n.flags&1048576)!==0&&Op(n,to,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=yr(n.elementType),n.type=t,typeof t=="function")Su(t)?(o=Tr(t,o),n.tag=1,n=Qm(null,n,t,o,a)):(n.tag=0,n=cf(null,n,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===w){n.tag=11,n=Wm(null,n,t,o,a);break e}else if(u===z){n.tag=14,n=Xm(null,n,t,o,a);break e}}throw n=me(t)||t,Error(r(306,n,""))}}return n;case 0:return cf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Tr(o,n.pendingProps),Qm(t,n,o,u,a);case 3:e:{if(Me(n,n.stateNode.containerInfo),t===null)throw Error(r(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,Pu(t,n),co(n,o,null,a);var _=n.memoizedState;if(o=_.cache,La(n,hn,o),o!==f.cache&&wu(n,[hn],a,!0),lo(),o=_.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Jm(t,n,o,a);break e}else if(o!==u){u=ci(Error(r(424)),n),no(u),n=Jm(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(qt=pi(t.firstChild),Tn=n,St=!0,Ua=null,di=!0,a=qp(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(_r(),o===u){n=ia(t,n,a);break e}Rn(t,n,o,a)}n=n.child}return n;case 26:return Ll(t,n),t===null?(a=hg(n.type,null,n.pendingProps,null))?n.memoizedState=a:St||(a=n.type,t=n.pendingProps,o=Kl(ae.current).createElement(a),o[fn]=n,o[En]=t,Cn(o,a,t),dn(o),n.stateNode=o):n.memoizedState=hg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return tt(n),t===null&&St&&(o=n.stateNode=ug(n.type,n.pendingProps,ae.current),Tn=n,di=!0,u=qt,ja(n.type)?(Zf=u,qt=pi(o.firstChild)):qt=u),Rn(t,n,n.pendingProps.children,a),Ll(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&St&&((u=o=qt)&&(o=c1(o,n.type,n.pendingProps,di),o!==null?(n.stateNode=o,Tn=n,qt=pi(o.firstChild),di=!1,u=!0):u=!1),u||Na(n)),tt(n),u=n.type,f=n.pendingProps,_=t!==null?t.memoizedProps:null,o=f.children,Wf(u,f)?o=null:_!==null&&Wf(u,_)&&(n.flags|=32),n.memoizedState!==null&&(u=Vu(t,n,Ex,null,null,a),Do._currentValue=u),Ll(t,n),Rn(t,n,o,a),n.child;case 6:return t===null&&St&&((t=a=qt)&&(a=u1(a,n.pendingProps,di),a!==null?(n.stateNode=a,Tn=n,qt=null,t=!0):t=!1),t||Na(n)),null;case 13:return $m(t,n,a);case 4:return Me(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=br(n,null,o,a):Rn(t,n,o,a),n.child;case 11:return Wm(t,n,n.type,n.pendingProps,a);case 7:return Rn(t,n,n.pendingProps,a),n.child;case 8:return Rn(t,n,n.pendingProps.children,a),n.child;case 12:return Rn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,La(n,n.type,o.value),Rn(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,xr(n),u=An(u),o=o(u),n.flags|=1,Rn(t,n,o,a),n.child;case 14:return Xm(t,n,n.type,n.pendingProps,a);case 15:return jm(t,n,n.type,n.pendingProps,a);case 19:return t0(t,n,a);case 31:return Nx(t,n,a);case 22:return qm(t,n,a,n.pendingProps);case 24:return xr(n),o=An(hn),t===null?(u=Nu(),u===null&&(u=Wt,f=Du(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},Ou(n),La(n,hn,u)):((t.lanes&a)!==0&&(Pu(t,n),co(n,null,null,a),lo()),u=t.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),La(n,hn,o)):(o=f.cache,La(n,hn,o),o!==u.cache&&wu(n,[hn],a,!0))),Rn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function aa(t){t.flags|=4}function _f(t,n,a,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(w0())t.flags|=8192;else throw Mr=vl,Lu}else t.flags&=-16777217}function i0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!vg(n))if(w0())t.flags|=8192;else throw Mr=vl,Lu}function Pl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?ye():536870912,t.lanes|=n,fs|=n)}function go(t,n){if(!St)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Yt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function Ox(t,n,a){var o=n.pendingProps;switch(Eu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Yt(n),null;case 1:return Yt(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ea(hn),He(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Jr(n)?aa(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Au())),Yt(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(aa(n),f!==null?(Yt(n),i0(n,f)):(Yt(n),_f(n,u,null,o,a))):f?f!==t.memoizedState?(aa(n),Yt(n),i0(n,f)):(Yt(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&aa(n),Yt(n),_f(n,u,t,o,a)),null;case 27:if(Ke(n),a=ae.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&aa(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Yt(n),null}t=Ce.current,Jr(n)?zp(n):(t=ug(u,o,a),n.stateNode=t,aa(n))}return Yt(n),null;case 5:if(Ke(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&aa(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Yt(n),null}if(f=Ce.current,Jr(n))zp(n);else{var _=Kl(ae.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?_.createElement("select",{is:o.is}):_.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?_.createElement(u,{is:o.is}):_.createElement(u)}}f[fn]=n,f[En]=o;e:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break e;for(;_.sibling===null;){if(_.return===null||_.return===n)break e;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=f;e:switch(Cn(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&aa(n)}}return Yt(n),_f(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&aa(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(t=ae.current,Jr(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=Tn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[fn]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||$0(t.nodeValue,a)),t||Na(n,!0)}else t=Kl(t).createTextNode(o),t[fn]=n,n.stateNode=t}return Yt(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=Jr(n),a!==null){if(t===null){if(!o)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[fn]=n}else _r(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Yt(n),t=!1}else a=Au(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ni(n),n):(ni(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Yt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Jr(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[fn]=n}else _r(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Yt(n),u=!1}else u=Au(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ni(n),n):(ni(n),null)}return ni(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Pl(n,n.updateQueue),Yt(n),null);case 4:return He(),t===null&&Ff(n.stateNode.containerInfo),Yt(n),null;case 10:return ea(n.type),Yt(n),null;case 19:if(Z(ln),o=n.memoizedState,o===null)return Yt(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)go(o,!1);else{if(rn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Ml(t),f!==null){for(n.flags|=128,go(o,!1),t=f.updateQueue,n.updateQueue=t,Pl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Up(a,t),a=a.sibling;return be(ln,ln.current&1|2),St&&Ji(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&Ft()>Hl&&(n.flags|=128,u=!0,go(o,!1),n.lanes=4194304)}else{if(!u)if(t=Ml(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Pl(n,t),go(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!St)return Yt(n),null}else 2*Ft()-o.renderingStartTime>Hl&&a!==536870912&&(n.flags|=128,u=!0,go(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(t=o.last,t!==null?t.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ft(),t.sibling=null,a=ln.current,be(ln,u?a&1|2:a&1),St&&Ji(n,o.treeForkCount),t):(Yt(n),null);case 22:case 23:return ni(n),Fu(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Yt(n),n.subtreeFlags&6&&(n.flags|=8192)):Yt(n),a=n.updateQueue,a!==null&&Pl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&Z(Sr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ea(hn),Yt(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Px(t,n){switch(Eu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ea(hn),He(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Ke(n),null;case 31:if(n.memoizedState!==null){if(ni(n),n.alternate===null)throw Error(r(340));_r()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ni(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));_r()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Z(ln),null;case 4:return He(),null;case 10:return ea(n.type),null;case 22:case 23:return ni(n),Fu(),t!==null&&Z(Sr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ea(hn),null;case 25:return null;default:return null}}function a0(t,n){switch(Eu(n),n.tag){case 3:ea(hn),He();break;case 26:case 27:case 5:Ke(n);break;case 4:He();break;case 31:n.memoizedState!==null&&ni(n);break;case 13:ni(n);break;case 19:Z(ln);break;case 10:ea(n.type);break;case 22:case 23:ni(n),Fu(),t!==null&&Z(Sr);break;case 24:ea(hn)}}function _o(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var f=a.create,_=a.inst;o=f(),_.destroy=o}a=a.next}while(a!==u)}}catch(C){It(n,n.return,C)}}function Fa(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&t)===t){var _=o.inst,C=_.destroy;if(C!==void 0){_.destroy=void 0,u=n;var F=a,ee=C;try{ee()}catch(pe){It(u,F,pe)}}}o=o.next}while(o!==f)}}catch(pe){It(n,n.return,pe)}}function r0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Zp(n,a)}catch(o){It(t,t.return,o)}}}function s0(t,n,a){a.props=Tr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){It(t,n,o)}}function vo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){It(t,n,u)}}function zi(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){It(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){It(t,n,u)}else a.current=null}function o0(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){It(t,t.return,u)}}function vf(t,n,a){try{var o=t.stateNode;i1(o,t.type,a,n),o[En]=n}catch(u){It(t,t.return,u)}}function l0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ja(t.type)||t.tag===4}function xf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||l0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ja(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Sf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Zi));else if(o!==4&&(o===27&&ja(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Sf(t,n,a),t=t.sibling;t!==null;)Sf(t,n,a),t=t.sibling}function zl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&ja(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(zl(t,n,a),t=t.sibling;t!==null;)zl(t,n,a),t=t.sibling}function c0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Cn(n,o,a),n[fn]=t,n[En]=a}catch(f){It(t,t.return,f)}}var ra=!1,gn=!1,yf=!1,u0=typeof WeakSet=="function"?WeakSet:Set,Mn=null;function zx(t,n){if(t=t.containerInfo,Vf=ic,t=Mp(t),hu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var _=0,C=-1,F=-1,ee=0,pe=0,xe=t,oe=null;t:for(;;){for(var ce;xe!==a||u!==0&&xe.nodeType!==3||(C=_+u),xe!==f||o!==0&&xe.nodeType!==3||(F=_+o),xe.nodeType===3&&(_+=xe.nodeValue.length),(ce=xe.firstChild)!==null;)oe=xe,xe=ce;for(;;){if(xe===t)break t;if(oe===a&&++ee===u&&(C=_),oe===f&&++pe===o&&(F=_),(ce=xe.nextSibling)!==null)break;xe=oe,oe=xe.parentNode}xe=ce}a=C===-1||F===-1?null:{start:C,end:F}}else a=null}a=a||{start:0,end:0}}else a=null;for(kf={focusedElem:t,selectionRange:a},ic=!1,Mn=n;Mn!==null;)if(n=Mn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Mn=t;else for(;Mn!==null;){switch(n=Mn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var Xe=Tr(a.type,u);t=o.getSnapshotBeforeUpdate(Xe,f),o.__reactInternalSnapshotBeforeUpdate=t}catch(et){It(a,a.return,et)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)jf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":jf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,Mn=t;break}Mn=n.return}}function f0(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:oa(t,a),o&4&&_o(5,a);break;case 1:if(oa(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(_){It(a,a.return,_)}else{var u=Tr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(_){It(a,a.return,_)}}o&64&&r0(a),o&512&&vo(a,a.return);break;case 3:if(oa(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Zp(t,n)}catch(_){It(a,a.return,_)}}break;case 27:n===null&&o&4&&c0(a);case 26:case 5:oa(t,a),n===null&&o&4&&o0(a),o&512&&vo(a,a.return);break;case 12:oa(t,a);break;case 31:oa(t,a),o&4&&p0(t,a);break;case 13:oa(t,a),o&4&&m0(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Xx.bind(null,a),f1(t,a))));break;case 22:if(o=a.memoizedState!==null||ra,!o){n=n!==null&&n.memoizedState!==null||gn,u=ra;var f=gn;ra=o,(gn=n)&&!f?la(t,a,(a.subtreeFlags&8772)!==0):oa(t,a),ra=u,gn=f}break;case 30:break;default:oa(t,a)}}function d0(t){var n=t.alternate;n!==null&&(t.alternate=null,d0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Aa(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Jt=null,Gn=!1;function sa(t,n,a){for(a=a.child;a!==null;)h0(t,n,a),a=a.sibling}function h0(t,n,a){if(de&&typeof de.onCommitFiberUnmount=="function")try{de.onCommitFiberUnmount(ue,a)}catch{}switch(a.tag){case 26:gn||zi(a,n),sa(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:gn||zi(a,n);var o=Jt,u=Gn;ja(a.type)&&(Jt=a.stateNode,Gn=!1),sa(t,n,a),Ro(a.stateNode),Jt=o,Gn=u;break;case 5:gn||zi(a,n);case 6:if(o=Jt,u=Gn,Jt=null,sa(t,n,a),Jt=o,Gn=u,Jt!==null)if(Gn)try{(Jt.nodeType===9?Jt.body:Jt.nodeName==="HTML"?Jt.ownerDocument.body:Jt).removeChild(a.stateNode)}catch(f){It(a,n,f)}else try{Jt.removeChild(a.stateNode)}catch(f){It(a,n,f)}break;case 18:Jt!==null&&(Gn?(t=Jt,rg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),xs(t)):rg(Jt,a.stateNode));break;case 4:o=Jt,u=Gn,Jt=a.stateNode.containerInfo,Gn=!0,sa(t,n,a),Jt=o,Gn=u;break;case 0:case 11:case 14:case 15:Fa(2,a,n),gn||Fa(4,a,n),sa(t,n,a);break;case 1:gn||(zi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&s0(a,n,o)),sa(t,n,a);break;case 21:sa(t,n,a);break;case 22:gn=(o=gn)||a.memoizedState!==null,sa(t,n,a),gn=o;break;default:sa(t,n,a)}}function p0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{xs(t)}catch(a){It(n,n.return,a)}}}function m0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{xs(t)}catch(a){It(n,n.return,a)}}function Ix(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new u0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new u0),n;default:throw Error(r(435,t.tag))}}function Il(t,n){var a=Ix(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=jx.bind(null,t,o);o.then(u,u)}})}function Vn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=t,_=n,C=_;e:for(;C!==null;){switch(C.tag){case 27:if(ja(C.type)){Jt=C.stateNode,Gn=!1;break e}break;case 5:Jt=C.stateNode,Gn=!1;break e;case 3:case 4:Jt=C.stateNode.containerInfo,Gn=!0;break e}C=C.return}if(Jt===null)throw Error(r(160));h0(f,_,u),Jt=null,Gn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)g0(n,t),n=n.sibling}var Ei=null;function g0(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Vn(n,t),kn(t),o&4&&(Fa(3,t,t.return),_o(3,t),Fa(5,t,t.return));break;case 1:Vn(n,t),kn(t),o&512&&(gn||a===null||zi(a,a.return)),o&64&&ra&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ei;if(Vn(n,t),kn(t),o&512&&(gn||a===null||zi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Ta]||f[fn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),Cn(f,o,a),f[fn]=t,dn(f),o=f;break e;case"link":var _=gg("link","href",u).get(o+(a.href||""));if(_){for(var C=0;C<_.length;C++)if(f=_[C],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(C,1);break t}}f=u.createElement(o),Cn(f,o,a),u.head.appendChild(f);break;case"meta":if(_=gg("meta","content",u).get(o+(a.content||""))){for(C=0;C<_.length;C++)if(f=_[C],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(C,1);break t}}f=u.createElement(o),Cn(f,o,a),u.head.appendChild(f);break;default:throw Error(r(468,o))}f[fn]=t,dn(f),o=f}t.stateNode=o}else _g(u,t.type,t.stateNode);else t.stateNode=mg(u,o,t.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?_g(u,t.type,t.stateNode):mg(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&vf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Vn(n,t),kn(t),o&512&&(gn||a===null||zi(a,a.return)),a!==null&&o&4&&vf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Vn(n,t),kn(t),o&512&&(gn||a===null||zi(a,a.return)),t.flags&32){u=t.stateNode;try{Jn(u,"")}catch(Xe){It(t,t.return,Xe)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,vf(t,u,a!==null?a.memoizedProps:u)),o&1024&&(yf=!0);break;case 6:if(Vn(n,t),kn(t),o&4){if(t.stateNode===null)throw Error(r(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(Xe){It(t,t.return,Xe)}}break;case 3:if($l=null,u=Ei,Ei=Ql(n.containerInfo),Vn(n,t),Ei=u,kn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{xs(n.containerInfo)}catch(Xe){It(t,t.return,Xe)}yf&&(yf=!1,_0(t));break;case 4:o=Ei,Ei=Ql(t.stateNode.containerInfo),Vn(n,t),kn(t),Ei=o;break;case 12:Vn(n,t),kn(t);break;case 31:Vn(n,t),kn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Il(t,o)));break;case 13:Vn(n,t),kn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Fl=Ft()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Il(t,o)));break;case 22:u=t.memoizedState!==null;var F=a!==null&&a.memoizedState!==null,ee=ra,pe=gn;if(ra=ee||u,gn=pe||F,Vn(n,t),gn=pe,ra=ee,kn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||F||ra||gn||Ar(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){F=a=n;try{if(f=F.stateNode,u)_=f.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{C=F.stateNode;var xe=F.memoizedProps.style,oe=xe!=null&&xe.hasOwnProperty("display")?xe.display:null;C.style.display=oe==null||typeof oe=="boolean"?"":(""+oe).trim()}}catch(Xe){It(F,F.return,Xe)}}}else if(n.tag===6){if(a===null){F=n;try{F.stateNode.nodeValue=u?"":F.memoizedProps}catch(Xe){It(F,F.return,Xe)}}}else if(n.tag===18){if(a===null){F=n;try{var ce=F.stateNode;u?sg(ce,!0):sg(F.stateNode,!1)}catch(Xe){It(F,F.return,Xe)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Il(t,a))));break;case 19:Vn(n,t),kn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Il(t,o)));break;case 30:break;case 21:break;default:Vn(n,t),kn(t)}}function kn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(l0(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=xf(t);zl(t,f,u);break;case 5:var _=a.stateNode;a.flags&32&&(Jn(_,""),a.flags&=-33);var C=xf(t);zl(t,C,_);break;case 3:case 4:var F=a.stateNode.containerInfo,ee=xf(t);Sf(t,ee,F);break;default:throw Error(r(161))}}catch(pe){It(t,t.return,pe)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function _0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;_0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function oa(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)f0(t,n.alternate,n),n=n.sibling}function Ar(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Fa(4,n,n.return),Ar(n);break;case 1:zi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&s0(n,n.return,a),Ar(n);break;case 27:Ro(n.stateNode);case 26:case 5:zi(n,n.return),Ar(n);break;case 22:n.memoizedState===null&&Ar(n);break;case 30:Ar(n);break;default:Ar(n)}t=t.sibling}}function la(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,f=n,_=f.flags;switch(f.tag){case 0:case 11:case 15:la(u,f,a),_o(4,f);break;case 1:if(la(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ee){It(o,o.return,ee)}if(o=f,u=o.updateQueue,u!==null){var C=o.stateNode;try{var F=u.shared.hiddenCallbacks;if(F!==null)for(u.shared.hiddenCallbacks=null,u=0;u<F.length;u++)Yp(F[u],C)}catch(ee){It(o,o.return,ee)}}a&&_&64&&r0(f),vo(f,f.return);break;case 27:c0(f);case 26:case 5:la(u,f,a),a&&o===null&&_&4&&o0(f),vo(f,f.return);break;case 12:la(u,f,a);break;case 31:la(u,f,a),a&&_&4&&p0(u,f);break;case 13:la(u,f,a),a&&_&4&&m0(u,f);break;case 22:f.memoizedState===null&&la(u,f,a),vo(f,f.return);break;case 30:break;default:la(u,f,a)}n=n.sibling}}function Mf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&io(a))}function bf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&io(t))}function Ti(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)v0(t,n,a,o),n=n.sibling}function v0(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ti(t,n,a,o),u&2048&&_o(9,n);break;case 1:Ti(t,n,a,o);break;case 3:Ti(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&io(t)));break;case 12:if(u&2048){Ti(t,n,a,o),t=n.stateNode;try{var f=n.memoizedProps,_=f.id,C=f.onPostCommit;typeof C=="function"&&C(_,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(F){It(n,n.return,F)}}else Ti(t,n,a,o);break;case 31:Ti(t,n,a,o);break;case 13:Ti(t,n,a,o);break;case 23:break;case 22:f=n.stateNode,_=n.alternate,n.memoizedState!==null?f._visibility&2?Ti(t,n,a,o):xo(t,n):f._visibility&2?Ti(t,n,a,o):(f._visibility|=2,ls(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Mf(_,n);break;case 24:Ti(t,n,a,o),u&2048&&bf(n.alternate,n);break;default:Ti(t,n,a,o)}}function ls(t,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,_=n,C=a,F=o,ee=_.flags;switch(_.tag){case 0:case 11:case 15:ls(f,_,C,F,u),_o(8,_);break;case 23:break;case 22:var pe=_.stateNode;_.memoizedState!==null?pe._visibility&2?ls(f,_,C,F,u):xo(f,_):(pe._visibility|=2,ls(f,_,C,F,u)),u&&ee&2048&&Mf(_.alternate,_);break;case 24:ls(f,_,C,F,u),u&&ee&2048&&bf(_.alternate,_);break;default:ls(f,_,C,F,u)}n=n.sibling}}function xo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:xo(a,o),u&2048&&Mf(o.alternate,o);break;case 24:xo(a,o),u&2048&&bf(o.alternate,o);break;default:xo(a,o)}n=n.sibling}}var So=8192;function cs(t,n,a){if(t.subtreeFlags&So)for(t=t.child;t!==null;)x0(t,n,a),t=t.sibling}function x0(t,n,a){switch(t.tag){case 26:cs(t,n,a),t.flags&So&&t.memoizedState!==null&&b1(a,Ei,t.memoizedState,t.memoizedProps);break;case 5:cs(t,n,a);break;case 3:case 4:var o=Ei;Ei=Ql(t.stateNode.containerInfo),cs(t,n,a),Ei=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=So,So=16777216,cs(t,n,a),So=o):cs(t,n,a));break;default:cs(t,n,a)}}function S0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function yo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Mn=o,M0(o,t)}S0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)y0(t),t=t.sibling}function y0(t){switch(t.tag){case 0:case 11:case 15:yo(t),t.flags&2048&&Fa(9,t,t.return);break;case 3:yo(t);break;case 12:yo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Bl(t)):yo(t);break;default:yo(t)}}function Bl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Mn=o,M0(o,t)}S0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Fa(8,n,n.return),Bl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Bl(n));break;default:Bl(n)}t=t.sibling}}function M0(t,n){for(;Mn!==null;){var a=Mn;switch(a.tag){case 0:case 11:case 15:Fa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:io(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Mn=o;else e:for(a=t;Mn!==null;){o=Mn;var u=o.sibling,f=o.return;if(d0(o),o===a){Mn=null;break e}if(u!==null){u.return=f,Mn=u;break e}Mn=f}}}var Bx={getCacheForType:function(t){var n=An(hn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return An(hn).controller.signal}},Fx=typeof WeakMap=="function"?WeakMap:Map,wt=0,Wt=null,pt=null,gt=0,zt=0,ii=null,Ha=!1,us=!1,Ef=!1,ca=0,rn=0,Ga=0,Rr=0,Tf=0,ai=0,fs=0,Mo=null,Wn=null,Af=!1,Fl=0,b0=0,Hl=1/0,Gl=null,Va=null,xn=0,ka=null,ds=null,ua=0,Rf=0,Cf=null,E0=null,bo=0,wf=null;function ri(){return(wt&2)!==0&&gt!==0?gt&-gt:P.T!==null?Pf():Xs()}function T0(){if(ai===0)if((gt&536870912)===0||St){var t=it;it<<=1,(it&3932160)===0&&(it=262144),ai=t}else ai=536870912;return t=ti.current,t!==null&&(t.flags|=32),ai}function Xn(t,n,a){(t===Wt&&(zt===2||zt===9)||t.cancelPendingCommit!==null)&&(hs(t,0),Wa(t,gt,ai,!1)),Ve(t,a),((wt&2)===0||t!==Wt)&&(t===Wt&&((wt&2)===0&&(Rr|=a),rn===4&&Wa(t,gt,ai,!1)),Ii(t))}function A0(t,n,a){if((wt&6)!==0)throw Error(r(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||we(t,n),u=o?Vx(t,n):Uf(t,n,!0),f=o;do{if(u===0){us&&!o&&Wa(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!Hx(a)){u=Uf(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;e:{var C=t;u=Mo;var F=C.current.memoizedState.isDehydrated;if(F&&(hs(C,_).flags|=256),_=Uf(C,_,!1),_!==2){if(Ef&&!F){C.errorRecoveryDisabledLanes|=f,Rr|=f,u=4;break e}f=Wn,Wn=u,f!==null&&(Wn===null?Wn=f:Wn.push.apply(Wn,f))}u=_}if(f=!1,u!==2)continue}}if(u===1){hs(t,0),Wa(t,n,0,!0);break}e:{switch(o=t,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Wa(o,n,ai,!Ha);break e;case 2:Wn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Fl+300-Ft(),10<u)){if(Wa(o,n,ai,!Ha),ge(o,0,!0)!==0)break e;ua=n,o.timeoutHandle=ig(R0.bind(null,o,a,Wn,Gl,Af,n,ai,Rr,fs,Ha,f,"Throttled",-0,0),u);break e}R0(o,a,Wn,Gl,Af,n,ai,Rr,fs,Ha,f,null,-0,0)}}break}while(!0);Ii(t)}function R0(t,n,a,o,u,f,_,C,F,ee,pe,xe,oe,ce){if(t.timeoutHandle=-1,xe=n.subtreeFlags,xe&8192||(xe&16785408)===16785408){xe={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Zi},x0(n,f,xe);var Xe=(f&62914560)===f?Fl-Ft():(f&4194048)===f?b0-Ft():0;if(Xe=E1(xe,Xe),Xe!==null){ua=f,t.cancelPendingCommit=Xe(P0.bind(null,t,n,f,a,o,u,_,C,F,pe,xe,null,oe,ce)),Wa(t,f,_,!ee);return}}P0(t,n,f,a,o,u,_,C,F)}function Hx(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!$n(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Wa(t,n,a,o){n&=~Tf,n&=~Rr,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var f=31-Be(u),_=1<<f;o[f]=-1,u&=~_}a!==0&&Nt(t,a,n)}function Vl(){return(wt&6)===0?(Eo(0),!1):!0}function Df(){if(pt!==null){if(zt===0)var t=pt.return;else t=pt,$i=vr=null,Xu(t),is=null,ro=0,t=pt;for(;t!==null;)a0(t.alternate,t),t=t.return;pt=null}}function hs(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,s1(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ua=0,Df(),Wt=t,pt=a=Qi(t.current,null),gt=n,zt=0,ii=null,Ha=!1,us=we(t,n),Ef=!1,fs=ai=Tf=Rr=Ga=rn=0,Wn=Mo=null,Af=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-Be(o),f=1<<u;n|=t[u],o&=~f}return ca=n,cl(),a}function C0(t,n){ot=null,P.H=po,n===ns||n===_l?(n=Wp(),zt=3):n===Lu?(n=Wp(),zt=4):zt=n===lf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ii=n,pt===null&&(rn=1,Ul(t,ci(n,t.current)))}function w0(){var t=ti.current;return t===null?!0:(gt&4194048)===gt?hi===null:(gt&62914560)===gt||(gt&536870912)!==0?t===hi:!1}function D0(){var t=P.H;return P.H=po,t===null?po:t}function U0(){var t=P.A;return P.A=Bx,t}function kl(){rn=4,Ha||(gt&4194048)!==gt&&ti.current!==null||(us=!0),(Ga&134217727)===0&&(Rr&134217727)===0||Wt===null||Wa(Wt,gt,ai,!1)}function Uf(t,n,a){var o=wt;wt|=2;var u=D0(),f=U0();(Wt!==t||gt!==n)&&(Gl=null,hs(t,n)),n=!1;var _=rn;e:do try{if(zt!==0&&pt!==null){var C=pt,F=ii;switch(zt){case 8:Df(),_=6;break e;case 3:case 2:case 9:case 6:ti.current===null&&(n=!0);var ee=zt;if(zt=0,ii=null,ps(t,C,F,ee),a&&us){_=0;break e}break;default:ee=zt,zt=0,ii=null,ps(t,C,F,ee)}}Gx(),_=rn;break}catch(pe){C0(t,pe)}while(!0);return n&&t.shellSuspendCounter++,$i=vr=null,wt=o,P.H=u,P.A=f,pt===null&&(Wt=null,gt=0,cl()),_}function Gx(){for(;pt!==null;)N0(pt)}function Vx(t,n){var a=wt;wt|=2;var o=D0(),u=U0();Wt!==t||gt!==n?(Gl=null,Hl=Ft()+500,hs(t,n)):us=we(t,n);e:do try{if(zt!==0&&pt!==null){n=pt;var f=ii;t:switch(zt){case 1:zt=0,ii=null,ps(t,n,f,1);break;case 2:case 9:if(Vp(f)){zt=0,ii=null,L0(n);break}n=function(){zt!==2&&zt!==9||Wt!==t||(zt=7),Ii(t)},f.then(n,n);break e;case 3:zt=7;break e;case 4:zt=5;break e;case 7:Vp(f)?(zt=0,ii=null,L0(n)):(zt=0,ii=null,ps(t,n,f,7));break;case 5:var _=null;switch(pt.tag){case 26:_=pt.memoizedState;case 5:case 27:var C=pt;if(_?vg(_):C.stateNode.complete){zt=0,ii=null;var F=C.sibling;if(F!==null)pt=F;else{var ee=C.return;ee!==null?(pt=ee,Wl(ee)):pt=null}break t}}zt=0,ii=null,ps(t,n,f,5);break;case 6:zt=0,ii=null,ps(t,n,f,6);break;case 8:Df(),rn=6;break e;default:throw Error(r(462))}}kx();break}catch(pe){C0(t,pe)}while(!0);return $i=vr=null,P.H=o,P.A=u,wt=a,pt!==null?0:(Wt=null,gt=0,cl(),rn)}function kx(){for(;pt!==null&&!nn();)N0(pt)}function N0(t){var n=n0(t.alternate,t,ca);t.memoizedProps=t.pendingProps,n===null?Wl(t):pt=n}function L0(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Km(a,n,n.pendingProps,n.type,void 0,gt);break;case 11:n=Km(a,n,n.pendingProps,n.type.render,n.ref,gt);break;case 5:Xu(n);default:a0(a,n),n=pt=Up(n,ca),n=n0(a,n,ca)}t.memoizedProps=t.pendingProps,n===null?Wl(t):pt=n}function ps(t,n,a,o){$i=vr=null,Xu(n),is=null,ro=0;var u=n.return;try{if(Ux(t,u,n,a,gt)){rn=1,Ul(t,ci(a,t.current)),pt=null;return}}catch(f){if(u!==null)throw pt=u,f;rn=1,Ul(t,ci(a,t.current)),pt=null;return}n.flags&32768?(St||o===1?t=!0:us||(gt&536870912)!==0?t=!1:(Ha=t=!0,(o===2||o===9||o===3||o===6)&&(o=ti.current,o!==null&&o.tag===13&&(o.flags|=16384))),O0(n,t)):Wl(n)}function Wl(t){var n=t;do{if((n.flags&32768)!==0){O0(n,Ha);return}t=n.return;var a=Ox(n.alternate,n,ca);if(a!==null){pt=a;return}if(n=n.sibling,n!==null){pt=n;return}pt=n=t}while(n!==null);rn===0&&(rn=5)}function O0(t,n){do{var a=Px(t.alternate,t);if(a!==null){a.flags&=32767,pt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){pt=t;return}pt=t=a}while(t!==null);rn=6,pt=null}function P0(t,n,a,o,u,f,_,C,F){t.cancelPendingCommit=null;do Xl();while(xn!==0);if((wt&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=vu,Zt(t,a,f,_,C,F),t===Wt&&(pt=Wt=null,gt=0),ds=n,ka=t,ua=a,Rf=f,Cf=u,E0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,qx(K,function(){return H0(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=P.T,P.T=null,u=G.p,G.p=2,_=wt,wt|=4;try{zx(t,n,a)}finally{wt=_,G.p=u,P.T=o}}xn=1,z0(),I0(),B0()}}function z0(){if(xn===1){xn=0;var t=ka,n=ds,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var o=G.p;G.p=2;var u=wt;wt|=4;try{g0(n,t);var f=kf,_=Mp(t.containerInfo),C=f.focusedElem,F=f.selectionRange;if(_!==C&&C&&C.ownerDocument&&yp(C.ownerDocument.documentElement,C)){if(F!==null&&hu(C)){var ee=F.start,pe=F.end;if(pe===void 0&&(pe=ee),"selectionStart"in C)C.selectionStart=ee,C.selectionEnd=Math.min(pe,C.value.length);else{var xe=C.ownerDocument||document,oe=xe&&xe.defaultView||window;if(oe.getSelection){var ce=oe.getSelection(),Xe=C.textContent.length,et=Math.min(F.start,Xe),Vt=F.end===void 0?et:Math.min(F.end,Xe);!ce.extend&&et>Vt&&(_=Vt,Vt=et,et=_);var Y=Sp(C,et),V=Sp(C,Vt);if(Y&&V&&(ce.rangeCount!==1||ce.anchorNode!==Y.node||ce.anchorOffset!==Y.offset||ce.focusNode!==V.node||ce.focusOffset!==V.offset)){var $=xe.createRange();$.setStart(Y.node,Y.offset),ce.removeAllRanges(),et>Vt?(ce.addRange($),ce.extend(V.node,V.offset)):($.setEnd(V.node,V.offset),ce.addRange($))}}}}for(xe=[],ce=C;ce=ce.parentNode;)ce.nodeType===1&&xe.push({element:ce,left:ce.scrollLeft,top:ce.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<xe.length;C++){var ve=xe[C];ve.element.scrollLeft=ve.left,ve.element.scrollTop=ve.top}}ic=!!Vf,kf=Vf=null}finally{wt=u,G.p=o,P.T=a}}t.current=n,xn=2}}function I0(){if(xn===2){xn=0;var t=ka,n=ds,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var o=G.p;G.p=2;var u=wt;wt|=4;try{f0(t,n.alternate,n)}finally{wt=u,G.p=o,P.T=a}}xn=3}}function B0(){if(xn===4||xn===3){xn=0,j();var t=ka,n=ds,a=ua,o=E0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?xn=5:(xn=0,ds=ka=null,F0(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Va=null),Ws(a),n=n.stateNode,de&&typeof de.onCommitFiberRoot=="function")try{de.onCommitFiberRoot(ue,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=P.T,u=G.p,G.p=2,P.T=null;try{for(var f=t.onRecoverableError,_=0;_<o.length;_++){var C=o[_];f(C.value,{componentStack:C.stack})}}finally{P.T=n,G.p=u}}(ua&3)!==0&&Xl(),Ii(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===wf?bo++:(bo=0,wf=t):bo=0,Eo(0)}}function F0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,io(n)))}function Xl(){return z0(),I0(),B0(),H0()}function H0(){if(xn!==5)return!1;var t=ka,n=Rf;Rf=0;var a=Ws(ua),o=P.T,u=G.p;try{G.p=32>a?32:a,P.T=null,a=Cf,Cf=null;var f=ka,_=ua;if(xn=0,ds=ka=null,ua=0,(wt&6)!==0)throw Error(r(331));var C=wt;if(wt|=4,y0(f.current),v0(f,f.current,_,a),wt=C,Eo(0,!1),de&&typeof de.onPostCommitFiberRoot=="function")try{de.onPostCommitFiberRoot(ue,f)}catch{}return!0}finally{G.p=u,P.T=o,F0(t,n)}}function G0(t,n,a){n=ci(a,n),n=of(t.stateNode,n,2),t=za(t,n,2),t!==null&&(Ve(t,2),Ii(t))}function It(t,n,a){if(t.tag===3)G0(t,t,a);else for(;n!==null;){if(n.tag===3){G0(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Va===null||!Va.has(o))){t=ci(a,t),a=Vm(2),o=za(n,a,2),o!==null&&(km(a,o,n,t),Ve(o,2),Ii(o));break}}n=n.return}}function Nf(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new Fx;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Ef=!0,u.add(a),t=Wx.bind(null,t,n,a),n.then(t,t))}function Wx(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Wt===t&&(gt&a)===a&&(rn===4||rn===3&&(gt&62914560)===gt&&300>Ft()-Fl?(wt&2)===0&&hs(t,0):Tf|=a,fs===gt&&(fs=0)),Ii(t)}function V0(t,n){n===0&&(n=ye()),t=mr(t,n),t!==null&&(Ve(t,n),Ii(t))}function Xx(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),V0(t,a)}function jx(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),V0(t,a)}function qx(t,n){return on(t,n)}var jl=null,ms=null,Lf=!1,ql=!1,Of=!1,Xa=0;function Ii(t){t!==ms&&t.next===null&&(ms===null?jl=ms=t:ms=ms.next=t),ql=!0,Lf||(Lf=!0,Zx())}function Eo(t,n){if(!Of&&ql){Of=!0;do for(var a=!1,o=jl;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var _=o.suspendedLanes,C=o.pingedLanes;f=(1<<31-Be(42|t)+1)-1,f&=u&~(_&~C),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,j0(o,f))}else f=gt,f=ge(o,o===Wt?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||we(o,f)||(a=!0,j0(o,f));o=o.next}while(a);Of=!1}}function Yx(){k0()}function k0(){ql=Lf=!1;var t=0;Xa!==0&&r1()&&(t=Xa);for(var n=Ft(),a=null,o=jl;o!==null;){var u=o.next,f=W0(o,n);f===0?(o.next=null,a===null?jl=u:a.next=u,u===null&&(ms=a)):(a=o,(t!==0||(f&3)!==0)&&(ql=!0)),o=u}xn!==0&&xn!==5||Eo(t),Xa!==0&&(Xa=0)}function W0(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var _=31-Be(f),C=1<<_,F=u[_];F===-1?((C&a)===0||(C&o)!==0)&&(u[_]=Ie(C,n)):F<=n&&(t.expiredLanes|=C),f&=~C}if(n=Wt,a=gt,a=ge(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(zt===2||zt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Xt(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||we(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&Xt(o),Ws(a)){case 2:case 8:a=b;break;case 32:a=K;break;case 268435456:a=fe;break;default:a=K}return o=X0.bind(null,t),a=on(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&Xt(o),t.callbackPriority=2,t.callbackNode=null,2}function X0(t,n){if(xn!==0&&xn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Xl()&&t.callbackNode!==a)return null;var o=gt;return o=ge(t,t===Wt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(A0(t,o,n),W0(t,Ft()),t.callbackNode!=null&&t.callbackNode===a?X0.bind(null,t):null)}function j0(t,n){if(Xl())return null;A0(t,n,!0)}function Zx(){o1(function(){(wt&6)!==0?on(N,Yx):k0()})}function Pf(){if(Xa===0){var t=es;t===0&&(t=Qe,Qe<<=1,(Qe&261888)===0&&(Qe=256)),Xa=t}return Xa}function q0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:fr(""+t)}function Y0(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Kx(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=q0((u[En]||null).action),_=o.submitter;_&&(n=(n=_[En]||null)?q0(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var C=new rl("action","action",null,o,u);t.push({event:C,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Xa!==0){var F=_?Y0(u,_):new FormData(u);ef(a,{pending:!0,data:F,method:u.method,action:f},null,F)}}else typeof f=="function"&&(C.preventDefault(),F=_?Y0(u,_):new FormData(u),ef(a,{pending:!0,data:F,method:u.method,action:f},f,F))},currentTarget:u}]})}}for(var zf=0;zf<_u.length;zf++){var If=_u[zf],Qx=If.toLowerCase(),Jx=If[0].toUpperCase()+If.slice(1);bi(Qx,"on"+Jx)}bi(Tp,"onAnimationEnd"),bi(Ap,"onAnimationIteration"),bi(Rp,"onAnimationStart"),bi("dblclick","onDoubleClick"),bi("focusin","onFocus"),bi("focusout","onBlur"),bi(px,"onTransitionRun"),bi(mx,"onTransitionStart"),bi(gx,"onTransitionCancel"),bi(Cp,"onTransitionEnd"),se("onMouseEnter",["mouseout","mouseover"]),se("onMouseLeave",["mouseout","mouseover"]),se("onPointerEnter",["pointerout","pointerover"]),se("onPointerLeave",["pointerout","pointerover"]),X("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),X("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),X("onBeforeInput",["compositionend","keypress","textInput","paste"]),X("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),X("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),X("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var To="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$x=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(To));function Z0(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var f=void 0;if(n)for(var _=o.length-1;0<=_;_--){var C=o[_],F=C.instance,ee=C.currentTarget;if(C=C.listener,F!==f&&u.isPropagationStopped())break e;f=C,u.currentTarget=ee;try{f(u)}catch(pe){ll(pe)}u.currentTarget=null,f=F}else for(_=0;_<o.length;_++){if(C=o[_],F=C.instance,ee=C.currentTarget,C=C.listener,F!==f&&u.isPropagationStopped())break e;f=C,u.currentTarget=ee;try{f(u)}catch(pe){ll(pe)}u.currentTarget=null,f=F}}}}function mt(t,n){var a=n[lr];a===void 0&&(a=n[lr]=new Set);var o=t+"__bubble";a.has(o)||(K0(n,t,2,!1),a.add(o))}function Bf(t,n,a){var o=0;n&&(o|=4),K0(a,t,o,n)}var Yl="_reactListening"+Math.random().toString(36).slice(2);function Ff(t){if(!t[Yl]){t[Yl]=!0,tl.forEach(function(a){a!=="selectionchange"&&($x.has(a)||Bf(a,!1,t),Bf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Yl]||(n[Yl]=!0,Bf("selectionchange",!1,n))}}function K0(t,n,a,o){switch(Tg(n)){case 2:var u=R1;break;case 8:u=C1;break;default:u=ed}a=u.bind(null,n,a,t),u=void 0,!au||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function Hf(t,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var _=o.tag;if(_===3||_===4){var C=o.stateNode.containerInfo;if(C===u)break;if(_===4)for(_=o.return;_!==null;){var F=_.tag;if((F===3||F===4)&&_.stateNode.containerInfo===u)return;_=_.return}for(;C!==null;){if(_=qi(C),_===null)return;if(F=_.tag,F===5||F===6||F===26||F===27){o=f=_;continue e}C=C.parentNode}}o=o.return}tp(function(){var ee=f,pe=nu(a),xe=[];e:{var oe=wp.get(t);if(oe!==void 0){var ce=rl,Xe=t;switch(t){case"keypress":if(il(a)===0)break e;case"keydown":case"keyup":ce=jv;break;case"focusin":Xe="focus",ce=lu;break;case"focusout":Xe="blur",ce=lu;break;case"beforeblur":case"afterblur":ce=lu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ce=ap;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ce=Ov;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ce=Zv;break;case Tp:case Ap:case Rp:ce=Iv;break;case Cp:ce=Qv;break;case"scroll":case"scrollend":ce=Nv;break;case"wheel":ce=$v;break;case"copy":case"cut":case"paste":ce=Fv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ce=sp;break;case"toggle":case"beforetoggle":ce=tx}var et=(n&4)!==0,Vt=!et&&(t==="scroll"||t==="scrollend"),Y=et?oe!==null?oe+"Capture":null:oe;et=[];for(var V=ee,$;V!==null;){var ve=V;if($=ve.stateNode,ve=ve.tag,ve!==5&&ve!==26&&ve!==27||$===null||Y===null||(ve=js(V,Y),ve!=null&&et.push(Ao(V,ve,$))),Vt)break;V=V.return}0<et.length&&(oe=new ce(oe,Xe,null,a,pe),xe.push({event:oe,listeners:et}))}}if((n&7)===0){e:{if(oe=t==="mouseover"||t==="pointerover",ce=t==="mouseout"||t==="pointerout",oe&&a!==tu&&(Xe=a.relatedTarget||a.fromElement)&&(qi(Xe)||Xe[Fn]))break e;if((ce||oe)&&(oe=pe.window===pe?pe:(oe=pe.ownerDocument)?oe.defaultView||oe.parentWindow:window,ce?(Xe=a.relatedTarget||a.toElement,ce=ee,Xe=Xe?qi(Xe):null,Xe!==null&&(Vt=c(Xe),et=Xe.tag,Xe!==Vt||et!==5&&et!==27&&et!==6)&&(Xe=null)):(ce=null,Xe=ee),ce!==Xe)){if(et=ap,ve="onMouseLeave",Y="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(et=sp,ve="onPointerLeave",Y="onPointerEnter",V="pointer"),Vt=ce==null?oe:ur(ce),$=Xe==null?oe:ur(Xe),oe=new et(ve,V+"leave",ce,a,pe),oe.target=Vt,oe.relatedTarget=$,ve=null,qi(pe)===ee&&(et=new et(Y,V+"enter",Xe,a,pe),et.target=$,et.relatedTarget=Vt,ve=et),Vt=ve,ce&&Xe)t:{for(et=e1,Y=ce,V=Xe,$=0,ve=Y;ve;ve=et(ve))$++;ve=0;for(var $e=V;$e;$e=et($e))ve++;for(;0<$-ve;)Y=et(Y),$--;for(;0<ve-$;)V=et(V),ve--;for(;$--;){if(Y===V||V!==null&&Y===V.alternate){et=Y;break t}Y=et(Y),V=et(V)}et=null}else et=null;ce!==null&&Q0(xe,oe,ce,et,!1),Xe!==null&&Vt!==null&&Q0(xe,Vt,Xe,et,!0)}}e:{if(oe=ee?ur(ee):window,ce=oe.nodeName&&oe.nodeName.toLowerCase(),ce==="select"||ce==="input"&&oe.type==="file")var At=pp;else if(dp(oe))if(mp)At=fx;else{At=cx;var qe=lx}else ce=oe.nodeName,!ce||ce.toLowerCase()!=="input"||oe.type!=="checkbox"&&oe.type!=="radio"?ee&&Ut(ee.elementType)&&(At=pp):At=ux;if(At&&(At=At(t,ee))){hp(xe,At,a,pe);break e}qe&&qe(t,oe,ee),t==="focusout"&&ee&&oe.type==="number"&&ee.memoizedProps.value!=null&&ht(oe,"number",oe.value)}switch(qe=ee?ur(ee):window,t){case"focusin":(dp(qe)||qe.contentEditable==="true")&&(jr=qe,pu=ee,eo=null);break;case"focusout":eo=pu=jr=null;break;case"mousedown":mu=!0;break;case"contextmenu":case"mouseup":case"dragend":mu=!1,bp(xe,a,pe);break;case"selectionchange":if(hx)break;case"keydown":case"keyup":bp(xe,a,pe)}var lt;if(uu)e:{switch(t){case"compositionstart":var _t="onCompositionStart";break e;case"compositionend":_t="onCompositionEnd";break e;case"compositionupdate":_t="onCompositionUpdate";break e}_t=void 0}else Xr?up(t,a)&&(_t="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(_t="onCompositionStart");_t&&(op&&a.locale!=="ko"&&(Xr||_t!=="onCompositionStart"?_t==="onCompositionEnd"&&Xr&&(lt=np()):(wa=pe,ru="value"in wa?wa.value:wa.textContent,Xr=!0)),qe=Zl(ee,_t),0<qe.length&&(_t=new rp(_t,t,null,a,pe),xe.push({event:_t,listeners:qe}),lt?_t.data=lt:(lt=fp(a),lt!==null&&(_t.data=lt)))),(lt=ix?ax(t,a):rx(t,a))&&(_t=Zl(ee,"onBeforeInput"),0<_t.length&&(qe=new rp("onBeforeInput","beforeinput",null,a,pe),xe.push({event:qe,listeners:_t}),qe.data=lt)),Kx(xe,t,ee,a,pe)}Z0(xe,n)})}function Ao(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Zl(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=js(t,a),u!=null&&o.unshift(Ao(t,u,f)),u=js(t,n),u!=null&&o.push(Ao(t,u,f))),t.tag===3)return o;t=t.return}return[]}function e1(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Q0(t,n,a,o,u){for(var f=n._reactName,_=[];a!==null&&a!==o;){var C=a,F=C.alternate,ee=C.stateNode;if(C=C.tag,F!==null&&F===o)break;C!==5&&C!==26&&C!==27||ee===null||(F=ee,u?(ee=js(a,f),ee!=null&&_.unshift(Ao(a,ee,F))):u||(ee=js(a,f),ee!=null&&_.push(Ao(a,ee,F)))),a=a.return}_.length!==0&&t.push({event:n,listeners:_})}var t1=/\r\n?/g,n1=/\u0000|\uFFFD/g;function J0(t){return(typeof t=="string"?t:""+t).replace(t1,`
`).replace(n1,"")}function $0(t,n){return n=J0(n),J0(t)===n}function Gt(t,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Jn(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Jn(t,""+o);break;case"className":We(t,"class",o);break;case"tabIndex":We(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":We(t,a,o);break;case"style":Mi(t,o,f);break;case"data":if(n!=="object"){We(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=fr(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Gt(t,n,"name",u.name,u,null),Gt(t,n,"formEncType",u.formEncType,u,null),Gt(t,n,"formMethod",u.formMethod,u,null),Gt(t,n,"formTarget",u.formTarget,u,null)):(Gt(t,n,"encType",u.encType,u,null),Gt(t,n,"method",u.method,u,null),Gt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=fr(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=Zi);break;case"onScroll":o!=null&&mt("scroll",t);break;case"onScrollEnd":o!=null&&mt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=fr(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":mt("beforetoggle",t),mt("toggle",t),Ne(t,"popover",o);break;case"xlinkActuate":ke(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":ke(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":ke(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":ke(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":ke(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":ke(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":ke(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":ke(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":ke(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ne(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Li.get(a)||a,Ne(t,a,o))}}function Gf(t,n,a,o,u,f){switch(a){case"style":Mi(t,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof o=="string"?Jn(t,o):(typeof o=="number"||typeof o=="bigint")&&Jn(t,""+o);break;case"onScroll":o!=null&&mt("scroll",t);break;case"onScrollEnd":o!=null&&mt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=Zi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!R.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[En]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):Ne(t,a,o)}}}function Cn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":mt("error",t),mt("load",t);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Gt(t,n,f,_,a,null)}}u&&Gt(t,n,"srcSet",a.srcSet,a,null),o&&Gt(t,n,"src",a.src,a,null);return;case"input":mt("invalid",t);var C=f=_=u=null,F=null,ee=null;for(o in a)if(a.hasOwnProperty(o)){var pe=a[o];if(pe!=null)switch(o){case"name":u=pe;break;case"type":_=pe;break;case"checked":F=pe;break;case"defaultChecked":ee=pe;break;case"value":f=pe;break;case"defaultValue":C=pe;break;case"children":case"dangerouslySetInnerHTML":if(pe!=null)throw Error(r(137,n));break;default:Gt(t,n,o,pe,a,null)}}Un(t,f,C,F,ee,_,u,!1);return;case"select":mt("invalid",t),o=_=f=null;for(u in a)if(a.hasOwnProperty(u)&&(C=a[u],C!=null))switch(u){case"value":f=C;break;case"defaultValue":_=C;break;case"multiple":o=C;default:Gt(t,n,u,C,a,null)}n=f,a=_,t.multiple=!!o,n!=null?vn(t,!!o,n,!1):a!=null&&vn(t,!!o,a,!0);return;case"textarea":mt("invalid",t),f=u=o=null;for(_ in a)if(a.hasOwnProperty(_)&&(C=a[_],C!=null))switch(_){case"value":o=C;break;case"defaultValue":u=C;break;case"children":f=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(r(91));break;default:Gt(t,n,_,C,a,null)}yi(t,o,u,f);return;case"option":for(F in a)if(a.hasOwnProperty(F)&&(o=a[F],o!=null))switch(F){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Gt(t,n,F,o,a,null)}return;case"dialog":mt("beforetoggle",t),mt("toggle",t),mt("cancel",t),mt("close",t);break;case"iframe":case"object":mt("load",t);break;case"video":case"audio":for(o=0;o<To.length;o++)mt(To[o],t);break;case"image":mt("error",t),mt("load",t);break;case"details":mt("toggle",t);break;case"embed":case"source":case"link":mt("error",t),mt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ee in a)if(a.hasOwnProperty(ee)&&(o=a[ee],o!=null))switch(ee){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Gt(t,n,ee,o,a,null)}return;default:if(Ut(n)){for(pe in a)a.hasOwnProperty(pe)&&(o=a[pe],o!==void 0&&Gf(t,n,pe,o,a,void 0));return}}for(C in a)a.hasOwnProperty(C)&&(o=a[C],o!=null&&Gt(t,n,C,o,a,null))}function i1(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,_=null,C=null,F=null,ee=null,pe=null;for(ce in a){var xe=a[ce];if(a.hasOwnProperty(ce)&&xe!=null)switch(ce){case"checked":break;case"value":break;case"defaultValue":F=xe;default:o.hasOwnProperty(ce)||Gt(t,n,ce,null,o,xe)}}for(var oe in o){var ce=o[oe];if(xe=a[oe],o.hasOwnProperty(oe)&&(ce!=null||xe!=null))switch(oe){case"type":f=ce;break;case"name":u=ce;break;case"checked":ee=ce;break;case"defaultChecked":pe=ce;break;case"value":_=ce;break;case"defaultValue":C=ce;break;case"children":case"dangerouslySetInnerHTML":if(ce!=null)throw Error(r(137,n));break;default:ce!==xe&&Gt(t,n,oe,ce,o,xe)}}Fe(t,_,C,F,ee,pe,f,u);return;case"select":ce=_=C=oe=null;for(f in a)if(F=a[f],a.hasOwnProperty(f)&&F!=null)switch(f){case"value":break;case"multiple":ce=F;default:o.hasOwnProperty(f)||Gt(t,n,f,null,o,F)}for(u in o)if(f=o[u],F=a[u],o.hasOwnProperty(u)&&(f!=null||F!=null))switch(u){case"value":oe=f;break;case"defaultValue":C=f;break;case"multiple":_=f;default:f!==F&&Gt(t,n,u,f,o,F)}n=C,a=_,o=ce,oe!=null?vn(t,!!a,oe,!1):!!o!=!!a&&(n!=null?vn(t,!!a,n,!0):vn(t,!!a,a?[]:"",!1));return;case"textarea":ce=oe=null;for(C in a)if(u=a[C],a.hasOwnProperty(C)&&u!=null&&!o.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:Gt(t,n,C,null,o,u)}for(_ in o)if(u=o[_],f=a[_],o.hasOwnProperty(_)&&(u!=null||f!=null))switch(_){case"value":oe=u;break;case"defaultValue":ce=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&Gt(t,n,_,u,o,f)}Qn(t,oe,ce);return;case"option":for(var Xe in a)if(oe=a[Xe],a.hasOwnProperty(Xe)&&oe!=null&&!o.hasOwnProperty(Xe))switch(Xe){case"selected":t.selected=!1;break;default:Gt(t,n,Xe,null,o,oe)}for(F in o)if(oe=o[F],ce=a[F],o.hasOwnProperty(F)&&oe!==ce&&(oe!=null||ce!=null))switch(F){case"selected":t.selected=oe&&typeof oe!="function"&&typeof oe!="symbol";break;default:Gt(t,n,F,oe,o,ce)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var et in a)oe=a[et],a.hasOwnProperty(et)&&oe!=null&&!o.hasOwnProperty(et)&&Gt(t,n,et,null,o,oe);for(ee in o)if(oe=o[ee],ce=a[ee],o.hasOwnProperty(ee)&&oe!==ce&&(oe!=null||ce!=null))switch(ee){case"children":case"dangerouslySetInnerHTML":if(oe!=null)throw Error(r(137,n));break;default:Gt(t,n,ee,oe,o,ce)}return;default:if(Ut(n)){for(var Vt in a)oe=a[Vt],a.hasOwnProperty(Vt)&&oe!==void 0&&!o.hasOwnProperty(Vt)&&Gf(t,n,Vt,void 0,o,oe);for(pe in o)oe=o[pe],ce=a[pe],!o.hasOwnProperty(pe)||oe===ce||oe===void 0&&ce===void 0||Gf(t,n,pe,oe,o,ce);return}}for(var Y in a)oe=a[Y],a.hasOwnProperty(Y)&&oe!=null&&!o.hasOwnProperty(Y)&&Gt(t,n,Y,null,o,oe);for(xe in o)oe=o[xe],ce=a[xe],!o.hasOwnProperty(xe)||oe===ce||oe==null&&ce==null||Gt(t,n,xe,oe,o,ce)}function eg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function a1(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,_=u.initiatorType,C=u.duration;if(f&&C&&eg(_)){for(_=0,C=u.responseEnd,o+=1;o<a.length;o++){var F=a[o],ee=F.startTime;if(ee>C)break;var pe=F.transferSize,xe=F.initiatorType;pe&&eg(xe)&&(F=F.responseEnd,_+=pe*(F<C?1:(C-ee)/(F-ee)))}if(--o,n+=8*(f+_)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Vf=null,kf=null;function Kl(t){return t.nodeType===9?t:t.ownerDocument}function tg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ng(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Wf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Xf=null;function r1(){var t=window.event;return t&&t.type==="popstate"?t===Xf?!1:(Xf=t,!0):(Xf=null,!1)}var ig=typeof setTimeout=="function"?setTimeout:void 0,s1=typeof clearTimeout=="function"?clearTimeout:void 0,ag=typeof Promise=="function"?Promise:void 0,o1=typeof queueMicrotask=="function"?queueMicrotask:typeof ag<"u"?function(t){return ag.resolve(null).then(t).catch(l1)}:ig;function l1(t){setTimeout(function(){throw t})}function ja(t){return t==="head"}function rg(t,n){var a=n,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),xs(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Ro(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Ro(a);for(var f=a.firstChild;f;){var _=f.nextSibling,C=f.nodeName;f[Ta]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&Ro(t.ownerDocument.body);a=u}while(a);xs(n)}function sg(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function jf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":jf(a),Aa(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function c1(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Ta])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=pi(t.nextSibling),t===null)break}return null}function u1(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=pi(t.nextSibling),t===null))return null;return t}function og(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=pi(t.nextSibling),t===null))return null;return t}function qf(t){return t.data==="$?"||t.data==="$~"}function Yf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function f1(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function pi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Zf=null;function lg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return pi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function cg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function ug(t,n,a){switch(n=Kl(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Ro(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Aa(t)}var mi=new Map,fg=new Set;function Ql(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var fa=G.d;G.d={f:d1,r:h1,D:p1,C:m1,L:g1,m:_1,X:x1,S:v1,M:S1};function d1(){var t=fa.f(),n=Vl();return t||n}function h1(t){var n=Yi(t);n!==null&&n.tag===5&&n.type==="form"?Cm(n):fa.r(t)}var gs=typeof document>"u"?null:document;function dg(t,n,a){var o=gs;if(o&&typeof n=="string"&&n){var u=Ot(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),fg.has(u)||(fg.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Cn(n,"link",t),dn(n),o.head.appendChild(n)))}}function p1(t){fa.D(t),dg("dns-prefetch",t,null)}function m1(t,n){fa.C(t,n),dg("preconnect",t,n)}function g1(t,n,a){fa.L(t,n,a);var o=gs;if(o&&t&&n){var u='link[rel="preload"][as="'+Ot(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Ot(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Ot(a.imageSizes)+'"]')):u+='[href="'+Ot(t)+'"]';var f=u;switch(n){case"style":f=_s(t);break;case"script":f=vs(t)}mi.has(f)||(t=y({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),mi.set(f,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(Co(f))||n==="script"&&o.querySelector(wo(f))||(n=o.createElement("link"),Cn(n,"link",t),dn(n),o.head.appendChild(n)))}}function _1(t,n){fa.m(t,n);var a=gs;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Ot(o)+'"][href="'+Ot(t)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=vs(t)}if(!mi.has(f)&&(t=y({rel:"modulepreload",href:t},n),mi.set(f,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(wo(f)))return}o=a.createElement("link"),Cn(o,"link",t),dn(o),a.head.appendChild(o)}}}function v1(t,n,a){fa.S(t,n,a);var o=gs;if(o&&t){var u=Ra(o).hoistableStyles,f=_s(t);n=n||"default";var _=u.get(f);if(!_){var C={loading:0,preload:null};if(_=o.querySelector(Co(f)))C.loading=5;else{t=y({rel:"stylesheet",href:t,"data-precedence":n},a),(a=mi.get(f))&&Kf(t,a);var F=_=o.createElement("link");dn(F),Cn(F,"link",t),F._p=new Promise(function(ee,pe){F.onload=ee,F.onerror=pe}),F.addEventListener("load",function(){C.loading|=1}),F.addEventListener("error",function(){C.loading|=2}),C.loading|=4,Jl(_,n,o)}_={type:"stylesheet",instance:_,count:1,state:C},u.set(f,_)}}}function x1(t,n){fa.X(t,n);var a=gs;if(a&&t){var o=Ra(a).hoistableScripts,u=vs(t),f=o.get(u);f||(f=a.querySelector(wo(u)),f||(t=y({src:t,async:!0},n),(n=mi.get(u))&&Qf(t,n),f=a.createElement("script"),dn(f),Cn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function S1(t,n){fa.M(t,n);var a=gs;if(a&&t){var o=Ra(a).hoistableScripts,u=vs(t),f=o.get(u);f||(f=a.querySelector(wo(u)),f||(t=y({src:t,async:!0,type:"module"},n),(n=mi.get(u))&&Qf(t,n),f=a.createElement("script"),dn(f),Cn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function hg(t,n,a,o){var u=(u=ae.current)?Ql(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=_s(a.href),a=Ra(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=_s(a.href);var f=Ra(u).hoistableStyles,_=f.get(t);if(_||(u=u.ownerDocument||u,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,_),(f=u.querySelector(Co(t)))&&!f._p&&(_.instance=f,_.state.loading=5),mi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},mi.set(t,a),f||y1(u,t,a,_.state))),n&&o===null)throw Error(r(528,""));return _}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=vs(a),a=Ra(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function _s(t){return'href="'+Ot(t)+'"'}function Co(t){return'link[rel="stylesheet"]['+t+"]"}function pg(t){return y({},t,{"data-precedence":t.precedence,precedence:null})}function y1(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Cn(n,"link",a),dn(n),t.head.appendChild(n))}function vs(t){return'[src="'+Ot(t)+'"]'}function wo(t){return"script[async]"+t}function mg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+Ot(a.href)+'"]');if(o)return n.instance=o,dn(o),o;var u=y({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),dn(o),Cn(o,"style",u),Jl(o,a.precedence,t),n.instance=o;case"stylesheet":u=_s(a.href);var f=t.querySelector(Co(u));if(f)return n.state.loading|=4,n.instance=f,dn(f),f;o=pg(a),(u=mi.get(u))&&Kf(o,u),f=(t.ownerDocument||t).createElement("link"),dn(f);var _=f;return _._p=new Promise(function(C,F){_.onload=C,_.onerror=F}),Cn(f,"link",o),n.state.loading|=4,Jl(f,a.precedence,t),n.instance=f;case"script":return f=vs(a.src),(u=t.querySelector(wo(f)))?(n.instance=u,dn(u),u):(o=a,(u=mi.get(f))&&(o=y({},a),Qf(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),dn(u),Cn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Jl(o,a.precedence,t));return n.instance}function Jl(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,_=0;_<o.length;_++){var C=o[_];if(C.dataset.precedence===n)f=C;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Kf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Qf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var $l=null;function gg(t,n,a){if($l===null){var o=new Map,u=$l=new Map;u.set(a,o)}else u=$l,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[Ta]||f[fn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=t+_;var C=o.get(_);C?C.push(f):o.set(_,[f])}}return o}function _g(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function M1(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function vg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function b1(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=_s(o.href),f=n.querySelector(Co(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=ec.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,dn(f);return}f=n.ownerDocument||n,o=pg(o),(u=mi.get(u))&&Kf(o,u),f=f.createElement("link"),dn(f);var _=f;_._p=new Promise(function(C,F){_.onload=C,_.onerror=F}),Cn(f,"link",o),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=ec.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Jf=0;function E1(t,n){return t.stylesheets&&t.count===0&&nc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&nc(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Jf===0&&(Jf=62500*a1());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&nc(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Jf?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function ec(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)nc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var tc=null;function nc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,tc=new Map,n.forEach(T1,t),tc=null,ec.call(t))}function T1(t,n){if(!(n.state.loading&4)){var a=tc.get(t);if(a)var o=a.get(null);else{a=new Map,tc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var _=u[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),o=_)}o&&a.set(null,o)}u=n.instance,_=u.getAttribute("data-precedence"),f=a.get(_)||o,f===o&&a.set(null,u),a.set(_,u),this.count++,o=ec.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Do={$$typeof:H,Provider:null,Consumer:null,_currentValue:te,_currentValue2:te,_threadCount:0};function A1(t,n,a,o,u,f,_,C,F){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=je(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=je(0),this.hiddenUpdates=je(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=F,this.incompleteTransitions=new Map}function xg(t,n,a,o,u,f,_,C,F,ee,pe,xe){return t=new A1(t,n,a,_,F,ee,pe,xe,C),n=1,f===!0&&(n|=24),f=ei(3,null,null,n),t.current=f,f.stateNode=t,n=Du(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Ou(f),t}function Sg(t){return t?(t=Zr,t):Zr}function yg(t,n,a,o,u,f){u=Sg(u),o.context===null?o.context=u:o.pendingContext=u,o=Pa(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=za(t,o,n),a!==null&&(Xn(a,t,n),oo(a,t,n))}function Mg(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function $f(t,n){Mg(t,n),(t=t.alternate)&&Mg(t,n)}function bg(t){if(t.tag===13||t.tag===31){var n=mr(t,67108864);n!==null&&Xn(n,t,67108864),$f(t,67108864)}}function Eg(t){if(t.tag===13||t.tag===31){var n=ri();n=ks(n);var a=mr(t,n);a!==null&&Xn(a,t,n),$f(t,n)}}var ic=!0;function R1(t,n,a,o){var u=P.T;P.T=null;var f=G.p;try{G.p=2,ed(t,n,a,o)}finally{G.p=f,P.T=u}}function C1(t,n,a,o){var u=P.T;P.T=null;var f=G.p;try{G.p=8,ed(t,n,a,o)}finally{G.p=f,P.T=u}}function ed(t,n,a,o){if(ic){var u=td(o);if(u===null)Hf(t,n,o,ac,a),Ag(t,o);else if(D1(u,t,n,a,o))o.stopPropagation();else if(Ag(t,o),n&4&&-1<w1.indexOf(t)){for(;u!==null;){var f=Yi(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=Ae(f.pendingLanes);if(_!==0){var C=f;for(C.pendingLanes|=2,C.entangledLanes|=2;_;){var F=1<<31-Be(_);C.entanglements[1]|=F,_&=~F}Ii(f),(wt&6)===0&&(Hl=Ft()+500,Eo(0))}}break;case 31:case 13:C=mr(f,2),C!==null&&Xn(C,f,2),Vl(),$f(f,2)}if(f=td(o),f===null&&Hf(t,n,o,ac,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else Hf(t,n,o,null,a)}}function td(t){return t=nu(t),nd(t)}var ac=null;function nd(t){if(ac=null,t=qi(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=m(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return ac=t,null}function Tg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ct()){case N:return 2;case b:return 8;case K:case re:return 32;case fe:return 268435456;default:return 32}default:return 32}}var id=!1,qa=null,Ya=null,Za=null,Uo=new Map,No=new Map,Ka=[],w1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ag(t,n){switch(t){case"focusin":case"focusout":qa=null;break;case"dragenter":case"dragleave":Ya=null;break;case"mouseover":case"mouseout":Za=null;break;case"pointerover":case"pointerout":Uo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":No.delete(n.pointerId)}}function Lo(t,n,a,o,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Yi(n),n!==null&&bg(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function D1(t,n,a,o,u){switch(n){case"focusin":return qa=Lo(qa,t,n,a,o,u),!0;case"dragenter":return Ya=Lo(Ya,t,n,a,o,u),!0;case"mouseover":return Za=Lo(Za,t,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return Uo.set(f,Lo(Uo.get(f)||null,t,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,No.set(f,Lo(No.get(f)||null,t,n,a,o,u)),!0}return!1}function Rg(t){var n=qi(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,Vr(t.priority,function(){Eg(a)});return}}else if(n===31){if(n=m(a),n!==null){t.blockedOn=n,Vr(t.priority,function(){Eg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function rc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=td(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);tu=o,a.target.dispatchEvent(o),tu=null}else return n=Yi(a),n!==null&&bg(n),t.blockedOn=a,!1;n.shift()}return!0}function Cg(t,n,a){rc(t)&&a.delete(n)}function U1(){id=!1,qa!==null&&rc(qa)&&(qa=null),Ya!==null&&rc(Ya)&&(Ya=null),Za!==null&&rc(Za)&&(Za=null),Uo.forEach(Cg),No.forEach(Cg)}function sc(t,n){t.blockedOn===n&&(t.blockedOn=null,id||(id=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,U1)))}var oc=null;function wg(t){oc!==t&&(oc=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){oc===t&&(oc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(nd(o||a)===null)continue;break}var f=Yi(a);f!==null&&(t.splice(n,3),n-=3,ef(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function xs(t){function n(F){return sc(F,t)}qa!==null&&sc(qa,t),Ya!==null&&sc(Ya,t),Za!==null&&sc(Za,t),Uo.forEach(n),No.forEach(n);for(var a=0;a<Ka.length;a++){var o=Ka[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Ka.length&&(a=Ka[0],a.blockedOn===null);)Rg(a),a.blockedOn===null&&Ka.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],_=u[En]||null;if(typeof f=="function")_||wg(a);else if(_){var C=null;if(f&&f.hasAttribute("formAction")){if(u=f,_=f[En]||null)C=_.formAction;else if(nd(u)!==null)continue}else C=_.action;typeof C=="function"?a[o+1]=C:(a.splice(o,3),o-=3),wg(a)}}}function Dg(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return u=_})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function ad(t){this._internalRoot=t}lc.prototype.render=ad.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=ri();yg(a,o,t,n,null,null)},lc.prototype.unmount=ad.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;yg(t.current,2,null,t,null,null),Vl(),n[Fn]=null}};function lc(t){this._internalRoot=t}lc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Xs();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ka.length&&n!==0&&n<Ka[a].priority;a++);Ka.splice(a,0,t),a===0&&Rg(t)}};var Ug=e.version;if(Ug!=="19.2.8")throw Error(r(527,Ug,"19.2.8"));G.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=h(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var N1={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cc.isDisabled&&cc.supportsFiber)try{ue=cc.inject(N1),de=cc}catch{}}return Po.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,o="",u=Bm,f=Fm,_=Hm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=xg(t,1,!1,null,null,a,o,null,u,f,_,Dg),t[Fn]=n.current,Ff(t),new ad(n)},Po.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var o=!1,u="",f=Bm,_=Fm,C=Hm,F=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(C=a.onRecoverableError),a.formState!==void 0&&(F=a.formState)),n=xg(t,1,!0,n,a??null,o,u,F,f,_,C,Dg),n.context=Sg(null),a=n.current,o=ri(),o=ks(o),u=Pa(o),u.callback=null,za(a,u,o),a=o,n.current.lanes=a,Ve(n,a),Ii(n),t[Fn]=n.current,Ff(t),new lc(n)},Po.version="19.2.8",Po}var Gg;function V1(){if(Gg)return od.exports;Gg=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),od.exports=G1(),od.exports}var k1=V1();const W1=k_(k1);function X1({active:s,setActive:e}){const i=["About","Experience","Skills","Projects","Achievements","Contact"],[r,l]=ft.useState(!1),[c,d]=ft.useState(!1);ft.useEffect(()=>{const p=()=>l(window.scrollY>20);return window.addEventListener("scroll",p),()=>window.removeEventListener("scroll",p)},[]),ft.useEffect(()=>{const p=()=>{window.innerWidth>768&&d(!1)};return window.addEventListener("resize",p),()=>window.removeEventListener("resize",p)},[]),ft.useEffect(()=>{const p=h=>{h.key==="Escape"&&d(!1)};return window.addEventListener("keydown",p),()=>window.removeEventListener("keydown",p)},[]),ft.useEffect(()=>(c?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[c]);const m=p=>{e(p),d(!1)};return S.jsxs(S.Fragment,{children:[S.jsx("nav",{style:{position:"fixed",top:0,left:0,right:0,zIndex:100,background:r||c?"rgba(5, 7, 20, 0.96)":"transparent",backdropFilter:r||c?"blur(18px)":"none",borderBottom:r||c?"1px solid rgba(255, 255, 255, 0.08)":"none",transition:"all 0.3s ease",padding:"0 clamp(1rem, 5vw, 4rem)"},children:S.jsxs("div",{style:{maxWidth:1200,margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"space-between",height:64},children:[S.jsxs("a",{href:"#about",onClick:()=>m("About"),style:{fontFamily:"'Outfit', sans-serif",fontWeight:800,fontSize:22,color:"#a78bfa",letterSpacing:"-0.03em",textDecoration:"none",cursor:"pointer"},children:["AY",S.jsx("span",{style:{color:"#fff"},children:"."})]}),S.jsx("div",{className:"nav-desktop-links",style:{display:"flex",gap:4,alignItems:"center"},children:i.map(p=>S.jsx("a",{href:`#${p.toLowerCase()}`,onClick:()=>e(p),style:{color:s===p?"#a78bfa":"rgba(255, 255, 255, 0.6)",textDecoration:"none",fontSize:14,fontWeight:500,padding:"6px 14px",borderRadius:999,background:s===p?"rgba(167, 139, 250, 0.12)":"transparent",transition:"all 0.2s"},children:p},p))}),S.jsxs("button",{type:"button",className:"nav-hamburger-btn",onClick:()=>d(p=>!p),"aria-label":c?"Close navigation menu":"Open navigation menu","aria-expanded":c,children:[S.jsx("span",{className:`nav-bar-line ${c?"open":""}`}),S.jsx("span",{className:`nav-bar-line ${c?"open":""}`}),S.jsx("span",{className:`nav-bar-line ${c?"open":""}`})]})]})}),S.jsxs("div",{className:`nav-mobile-menu ${c?"open":""}`,children:[i.map(p=>S.jsxs("a",{href:`#${p.toLowerCase()}`,className:`nav-mobile-link ${s===p?"active":""}`,onClick:()=>m(p),children:[S.jsx("span",{children:p}),S.jsx("span",{style:{fontSize:13,opacity:.4},children:"▸"})]},p)),S.jsxs("div",{className:"nav-mobile-cta",children:[S.jsx("a",{href:"mailto:abhishekyd300@gmail.com",className:"nav-mobile-cta-btn nav-mobile-cta-primary",onClick:()=>d(!1),children:"Hire Me"}),S.jsx("a",{href:"/resume.pdf",target:"_blank",rel:"noreferrer",className:"nav-mobile-cta-btn nav-mobile-cta-secondary",onClick:()=>d(!1),children:"Download CV"})]})]}),c&&S.jsx("div",{className:"nav-mobile-backdrop",onClick:()=>d(!1)})]})}function j1(){const[s,e]=ft.useState(""),i=["Full-Stack Developer","MERN Stack Engineer","AWS Cloud Practitioner","Problem Solver"],r=ft.useRef(0),l=ft.useRef(0),c=ft.useRef(!1);return ft.useEffect(()=>{const d=()=>{const p=i[r.current];if(c.current)l.current--,e(p.slice(0,l.current)),l.current===0&&(c.current=!1,r.current=(r.current+1)%i.length);else if(l.current++,e(p.slice(0,l.current)),l.current===p.length){c.current=!0,setTimeout(d,1800);return}setTimeout(d,c.current?52:78)},m=setTimeout(d,500);return()=>clearTimeout(m)},[]),S.jsxs("section",{id:"about",style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",position:"relative",overflow:"hidden",padding:"80px clamp(1rem, 5vw, 4rem) 0"},children:[S.jsxs("div",{style:{position:"absolute",inset:0,pointerEvents:"none"},children:[S.jsx("div",{style:{position:"absolute",width:700,height:700,borderRadius:"50%",background:"radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)",top:"-15%",left:"-12%",animation:"blob1 12s ease-in-out infinite"}}),S.jsx("div",{style:{position:"absolute",width:500,height:500,borderRadius:"50%",background:"radial-gradient(circle, rgba(99, 102, 241, 0.12) 0%, transparent 70%)",bottom:"-5%",right:"-8%",animation:"blob2 14s ease-in-out infinite"}}),S.jsx("div",{style:{position:"absolute",width:320,height:320,borderRadius:"50%",background:"radial-gradient(circle, rgba(34, 211, 153, 0.08) 0%, transparent 70%)",top:"40%",left:"55%",animation:"blob3 10s ease-in-out infinite"}}),S.jsx("div",{style:{position:"absolute",inset:0,backgroundImage:"linear-gradient(rgba(255, 255, 255, 0.023) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.023) 1px, transparent 1px)",backgroundSize:"64px 64px"}})]}),S.jsxs("div",{className:"hero-container",children:[S.jsxs("div",{className:"hero-left",children:[S.jsx("span",{style:{fontSize:"16px",color:"rgba(255, 255, 255, 0.6)",fontWeight:600,letterSpacing:"0.15em",textTransform:"uppercase",marginBottom:"8px",display:"block"},children:"Hi I am"}),S.jsx("h1",{style:{fontFamily:"'Outfit', sans-serif",fontSize:"clamp(2rem, 4vw, 3.2rem)",fontWeight:800,lineHeight:1.1,margin:"0 0 8px",letterSpacing:"-0.02em",color:"#fff"},children:"Abhishek Yadav"}),S.jsxs("h2",{style:{fontFamily:"'Outfit', sans-serif",fontSize:"clamp(2.5rem, 5.5vw, 4.2rem)",fontWeight:800,color:"#fd6e0a",margin:"0 0 24px",lineHeight:1.05,letterSpacing:"-0.03em",minHeight:"clamp(3rem, 6vw, 4.5rem)"},children:[s,S.jsx("span",{style:{animation:"blink 1s step-end infinite",color:"#fd6e0a"},children:"|"})]}),S.jsxs("div",{className:"hero-social-row",children:[S.jsx("a",{href:"https://linkedin.com/in/abhishek-yadav-6207ab364/",target:"_blank",rel:"noreferrer",className:"hero-social-link",title:"LinkedIn",children:S.jsx("svg",{viewBox:"0 0 24 24",width:"20",height:"20",children:S.jsx("path",{d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"})})}),S.jsx("a",{href:"https://github.com/abhishekyd300",target:"_blank",rel:"noreferrer",className:"hero-social-link",title:"GitHub",children:S.jsx("svg",{viewBox:"0 0 24 24",width:"20",height:"20",children:S.jsx("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})})}),S.jsx("a",{href:"mailto:abhishekyd300@gmail.com",className:"hero-social-link",title:"Email",children:S.jsx("svg",{viewBox:"0 0 24 24",width:"20",height:"20",children:S.jsx("path",{d:"M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l12-9.725v15.438h-24v-15.438l12 9.725z"})})}),S.jsx("a",{href:"https://instagram.com",target:"_blank",rel:"noreferrer",className:"hero-social-link",title:"Instagram",children:S.jsx("svg",{viewBox:"0 0 24 24",width:"20",height:"20",children:S.jsx("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"})})})]}),S.jsxs("div",{className:"hero-btn-row",children:[S.jsx("a",{href:"mailto:abhishekyd300@gmail.com",className:"hero-btn-primary",children:"Hire Me"}),S.jsx("a",{href:"/resume.pdf",target:"_blank",rel:"noreferrer",className:"hero-btn-secondary",children:"Download CV"})]})]}),S.jsx("div",{className:"hero-right",children:S.jsxs("div",{className:"hero-image-wrapper",children:[S.jsx("div",{className:"hero-circle-bg"}),S.jsxs("div",{className:"hero-img-box",children:[S.jsx("img",{src:"/profile.png",alt:"Abhishek Yadav Portrait",className:"hero-portrait-img",onError:d=>{d.target.onerror=null,d.target.style.display="none",d.target.nextSibling.style.display="flex"}}),S.jsx("div",{style:{display:"none",flexDirection:"column",alignItems:"center",gap:6,zIndex:3,position:"relative"},children:S.jsx("span",{style:{fontSize:64},children:"👤"})})]})]})})]})]})}function q1(s=.12){const e=ft.useRef(null),[i,r]=ft.useState(!1);return ft.useEffect(()=>{const l=new IntersectionObserver(([d])=>{d.isIntersecting&&r(!0)},{threshold:s}),c=e.current;return c&&l.observe(c),()=>{c&&l.unobserve(c),l.disconnect()}},[s]),[e,i]}function wn({children:s,delay:e=0,dir:i="up"}){const[r,l]=q1(),c=i==="up"?"translateY(36px)":i==="left"?"translateX(-36px)":"translateX(36px)";return S.jsx("div",{ref:r,style:{opacity:l?1:0,transform:l?"none":c,transition:`opacity 0.65s ease ${e}s, transform 0.65s ease ${e}s`},children:s})}function Hr({label:s,title:e,color:i="#a78bfa"}){return S.jsxs("div",{style:{textAlign:"center",marginBottom:56},children:[S.jsx("span",{style:{color:i,fontSize:12,letterSpacing:"0.14em",textTransform:"uppercase",fontWeight:700},children:s}),S.jsx("h2",{style:{fontFamily:"'Outfit', sans-serif",fontSize:"clamp(1.9rem, 4vw, 2.9rem)",fontWeight:800,color:"#fff",margin:"8px 0 0",letterSpacing:"-0.03em"},children:e})]})}function Y1(){const s=[{icon:"💡",label:"Problem Solver",desc:"300+ DSA problems on LeetCode"},{icon:"🚀",label:"Full-Stack Dev",desc:"MERN stack end-to-end"},{icon:"☁️",label:"Cloud Certified",desc:"AWS Cloud Practitioner"},{icon:"🤝",label:"Team Player",desc:"Public speaking & leadership"}];return S.jsxs("section",{style:{padding:"100px clamp(1rem, 5vw, 4rem)",maxWidth:1200,margin:"0 auto"},children:[S.jsx(wn,{children:S.jsx(Hr,{label:"Who I Am",title:"About Me",color:"#22d3ee"})}),S.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:40,alignItems:"start"},children:[S.jsx(wn,{dir:"left",children:S.jsxs("div",{style:{background:"rgba(255, 255, 255, 0.03)",border:"1px solid rgba(255, 255, 255, 0.08)",borderRadius:24,padding:"36px 32px"},children:[S.jsx("h3",{style:{fontFamily:"'Outfit', sans-serif",color:"#fff",fontSize:20,fontWeight:700,marginBottom:16,letterSpacing:"-0.02em"},children:"Hey, I'm Abhishek 👋"}),S.jsxs("p",{style:{color:"rgba(255, 255, 255, 0.55)",fontSize:15,lineHeight:1.9,marginBottom:16},children:["I'm a passionate Computer Science undergraduate at"," ",S.jsx("span",{style:{color:"#a78bfa",fontWeight:600},children:"Parul University"})," (2023–2027), focused on building real-world web applications that create impact."]}),S.jsxs("p",{style:{color:"rgba(255, 255, 255, 0.55)",fontSize:15,lineHeight:1.9,marginBottom:16},children:["My expertise lies in the"," ",S.jsx("span",{style:{color:"#34d399",fontWeight:600},children:"MERN stack"})," — from designing RESTful APIs to crafting responsive UIs. I've built projects like"," ",S.jsx("span",{style:{color:"#22c55e",fontWeight:600},children:"Krishi Setu"})," (a farmer marketplace) and"," ",S.jsx("span",{style:{color:"#6366f1",fontWeight:600},children:"Smart CV"})," (an AI resume builder)."]}),S.jsxs("p",{style:{color:"rgba(255, 255, 255, 0.55)",fontSize:15,lineHeight:1.9},children:["I'm ",S.jsx("span",{style:{color:"#FF9900",fontWeight:600},children:"AWS Certified"}),", love competitive programming, and am actively seeking internship or full-time opportunities where I can grow and contribute."]}),S.jsx("div",{style:{display:"flex",gap:10,marginTop:24,flexWrap:"wrap"},children:["Open to Work","React Dev","Node.js","DSA"].map(e=>S.jsx("span",{style:{background:"rgba(167, 139, 250, 0.12)",border:"1px solid rgba(167, 139, 250, 0.2)",color:"#c4b5fd",borderRadius:999,padding:"4px 14px",fontSize:12,fontWeight:600},children:e},e))})]})}),S.jsx(wn,{dir:"right",delay:.1,children:S.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16},children:s.map(e=>S.jsxs("div",{style:{background:"rgba(255, 255, 255, 0.03)",border:"1px solid rgba(255, 255, 255, 0.08)",borderRadius:18,padding:"24px 20px",transition:"transform 0.3s, border-color 0.3s, box-shadow 0.3s"},onMouseEnter:i=>{i.currentTarget.style.transform="translateY(-4px)",i.currentTarget.style.borderColor="rgba(167, 139, 250, 0.3)",i.currentTarget.style.boxShadow="0 14px 40px rgba(124, 58, 237, 0.12)"},onMouseLeave:i=>{i.currentTarget.style.transform="none",i.currentTarget.style.borderColor="rgba(255, 255, 255, 0.08)",i.currentTarget.style.boxShadow="none"},children:[S.jsx("div",{style:{fontSize:30,marginBottom:10},children:e.icon}),S.jsx("div",{style:{color:"#fff",fontSize:14,fontWeight:700,marginBottom:4},children:e.label}),S.jsx("div",{style:{color:"rgba(255, 255, 255, 0.4)",fontSize:12,lineHeight:1.4},children:e.desc})]},e.label))})})]})]})}function Z1(){const[s,e]=ft.useState(null),i=[{company:"Synent Technologies",role:"Web Development & Designing Intern",type:"Fellowship Program",date:"June 2026 - Present",location:"Remote / Hybrid",candidateId:"SYN/J2/IP1172",offerLetterDate:"05 June 2026",color:"#fd6e0a",icon:"🏢",pdfUrl:"/Abhishek Yadav_Offer_Letter.pdf",highlights:["Selected for the Web Development and Designing fellowship program at Synent Technologies.","Hands-on exposure to real-world software tasks, enhancing core engineering and UI/UX design concepts.","Participating in end-to-end web application development and collaborating on production workflow tasks."],certified:!0}];return S.jsxs("section",{id:"experience",style:{padding:"80px clamp(1rem, 5vw, 4rem)",maxWidth:1200,margin:"0 auto"},children:[S.jsx(wn,{children:S.jsx(Hr,{label:"Career Journey",title:"Work Experience",color:"#fd6e0a"})}),S.jsx("div",{style:{display:"flex",flexDirection:"column",gap:24,marginTop:32},children:i.map((r,l)=>S.jsx(wn,{delay:l*.15,children:S.jsxs("div",{style:{background:"rgba(255, 255, 255, 0.03)",border:"1px solid rgba(255, 255, 255, 0.08)",borderRadius:20,padding:"32px clamp(20px, 4vw, 36px)",position:"relative",overflow:"hidden",transition:"all 0.3s ease"},children:[S.jsx("div",{style:{position:"absolute",top:0,left:0,width:4,height:"100%",background:r.color}}),S.jsxs("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"flex-start",gap:16,marginBottom:16},children:[S.jsxs("div",{children:[S.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:6},children:[S.jsx("span",{style:{fontSize:28},children:r.icon}),S.jsx("h3",{style:{fontSize:22,fontWeight:700,color:"#fff",fontFamily:"'Outfit', sans-serif",margin:0},children:r.role})]}),S.jsxs("h4",{style:{fontSize:16,color:r.color,fontWeight:600,margin:"4px 0 0"},children:[r.company," ",S.jsxs("span",{style:{color:"rgba(255,255,255,0.4)",fontWeight:400},children:["• ",r.type]})]})]}),S.jsxs("div",{style:{textAlign:"right",flexShrink:0},children:[S.jsx("span",{style:{display:"inline-block",padding:"6px 14px",borderRadius:20,background:`${r.color}15`,border:`1px solid ${r.color}40`,color:r.color,fontSize:13,fontWeight:600},children:r.date}),S.jsxs("div",{style:{fontSize:12,color:"rgba(255,255,255,0.4)",marginTop:6},children:["Candidate ID: ",r.candidateId]})]})]}),S.jsx("ul",{style:{padding:0,margin:"20px 0 24px",listStyle:"none"},children:r.highlights.map((c,d)=>S.jsxs("li",{style:{display:"flex",gap:10,color:"rgba(255, 255, 255, 0.7)",fontSize:14.5,lineHeight:1.6,marginBottom:10},children:[S.jsx("span",{style:{color:r.color},children:"▸"}),c]},d))}),r.certified&&S.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap",alignItems:"center"},children:[S.jsxs("button",{onClick:()=>e({title:`${r.company} Offer Letter`,url:r.pdfUrl}),style:{display:"inline-flex",alignItems:"center",gap:8,background:"rgba(253, 110, 10, 0.15)",border:"1px solid rgba(253, 110, 10, 0.4)",color:"#fd6e0a",padding:"10px 20px",borderRadius:10,fontSize:13.5,fontWeight:600,cursor:"pointer",transition:"all 0.2s ease"},onMouseEnter:c=>{c.currentTarget.style.background="rgba(253, 110, 10, 0.28)",c.currentTarget.style.transform="translateY(-2px)"},onMouseLeave:c=>{c.currentTarget.style.background="rgba(253, 110, 10, 0.15)",c.currentTarget.style.transform="none"},children:[S.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[S.jsx("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),S.jsx("polyline",{points:"14 2 14 8 20 8"}),S.jsx("line",{x1:"16",y1:"13",x2:"8",y2:"13"}),S.jsx("line",{x1:"16",y1:"17",x2:"8",y2:"17"})]}),"View Offer Letter PDF"]}),S.jsx("span",{style:{fontSize:12,color:"rgba(255, 255, 255, 0.4)"},children:"Verified PDF Document • Issued June 05, 2026"})]})]})},l))}),s&&S.jsx("div",{onClick:()=>e(null),style:{position:"fixed",inset:0,zIndex:1e3,background:"rgba(0, 0, 0, 0.85)",backdropFilter:"blur(8px)",display:"flex",alignItems:"center",justifyContent:"center",padding:20},children:S.jsxs("div",{onClick:r=>r.stopPropagation(),style:{position:"relative",maxWidth:900,width:"100%",height:"88vh",background:"#0b0d1e",border:"1px solid rgba(253, 110, 10, 0.35)",borderRadius:16,overflow:"hidden",display:"flex",flexDirection:"column",boxShadow:"0 25px 70px rgba(0,0,0,0.8)"},children:[S.jsxs("div",{style:{padding:"14px 20px",background:"rgba(255, 255, 255, 0.04)",borderBottom:"1px solid rgba(255, 255, 255, 0.08)",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[S.jsxs("h4",{style:{margin:0,color:"#fff",fontSize:16,fontWeight:700,fontFamily:"'Outfit', sans-serif"},children:["📄 ",s.title]}),S.jsx("div",{style:{display:"flex",gap:12,alignItems:"center"},children:S.jsx("button",{onClick:()=>e(null),style:{background:"none",border:"none",color:"rgba(255, 255, 255, 0.7)",fontSize:22,cursor:"pointer",lineHeight:1},children:"✕"})})]}),S.jsx("iframe",{src:s.url,title:s.title,style:{width:"100%",height:"100%",border:"none",background:"#ffffff"}})]})})]})}function K1(){const s=[{degree:"B.Tech in Computer Science & Engineering",institution:"Parul University",period:"2023 – 2027",cgpa:"7.85",status:"Ongoing",color:"#a78bfa",glow:"rgba(167, 139, 250, 0.15)",logo:"🎓",highlights:["MERN Stack Development","Data Structures & Algorithms","Cloud Computing","Database Management"]}];return S.jsxs("section",{style:{padding:"0 clamp(1rem, 5vw, 4rem) 100px",maxWidth:1200,margin:"0 auto"},children:[S.jsx(wn,{children:S.jsx(Hr,{label:"Academic Journey",title:"Education",color:"#f59e0b"})}),S.jsx("div",{style:{display:"flex",flexDirection:"column",gap:20},children:s.map((e,i)=>S.jsx(wn,{delay:i*.1,children:S.jsxs("div",{style:{background:"rgba(255, 255, 255, 0.03)",border:"1px solid rgba(255, 255, 255, 0.08)",borderRadius:24,padding:"36px 36px",position:"relative",overflow:"hidden",transition:"border-color 0.3s, box-shadow 0.3s"},onMouseEnter:r=>{r.currentTarget.style.borderColor=e.color+"50",r.currentTarget.style.boxShadow=`0 20px 60px ${e.glow}`},onMouseLeave:r=>{r.currentTarget.style.borderColor="rgba(255, 255, 255, 0.08)",r.currentTarget.style.boxShadow="none"},children:[S.jsx("div",{style:{position:"absolute",top:-60,right:-60,width:200,height:200,borderRadius:"50%",background:`radial-gradient(circle, ${e.color}12 0%, transparent 70%)`,pointerEvents:"none"}}),S.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:24,alignItems:"flex-start"},children:[S.jsxs("div",{style:{flex:1,minWidth:240},children:[S.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,marginBottom:14},children:[S.jsx("div",{style:{width:52,height:52,borderRadius:14,background:`${e.color}18`,border:`1px solid ${e.color}30`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:26,flexShrink:0},children:e.logo}),S.jsxs("div",{children:[S.jsx("h3",{style:{fontFamily:"'Outfit', sans-serif",color:"#fff",fontSize:19,fontWeight:700,margin:0,letterSpacing:"-0.02em"},children:e.degree}),S.jsx("p",{style:{color:e.color,fontSize:14,fontWeight:600,margin:"3px 0 0"},children:e.institution})]})]}),S.jsxs("div",{style:{display:"flex",gap:10,flexWrap:"wrap",marginBottom:16},children:[S.jsxs("span",{style:{background:"rgba(255, 255, 255, 0.06)",border:"1px solid rgba(255, 255, 255, 0.1)",color:"rgba(255, 255, 255, 0.6)",borderRadius:8,padding:"4px 12px",fontSize:12,fontWeight:500},children:["📅 ",e.period]}),S.jsxs("span",{style:{background:`${e.color}18`,border:`1px solid ${e.color}30`,color:e.color,borderRadius:8,padding:"4px 12px",fontSize:12,fontWeight:700},children:["CGPA: ",e.cgpa]}),S.jsxs("span",{style:{background:"rgba(34, 197, 94, 0.12)",border:"1px solid rgba(34, 197, 94, 0.25)",color:"#22c55e",borderRadius:8,padding:"4px 12px",fontSize:12,fontWeight:700},children:["● ",e.status]})]})]}),S.jsxs("div",{style:{flex:1,minWidth:220},children:[S.jsx("p",{style:{color:"rgba(255, 255, 255, 0.4)",fontSize:11,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",marginBottom:12},children:"Key Subjects"}),S.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:e.highlights.map(r=>S.jsx("span",{style:{background:"rgba(255, 255, 255, 0.04)",border:"1px solid rgba(255, 255, 255, 0.09)",color:"rgba(255, 255, 255, 0.65)",borderRadius:8,padding:"5px 12px",fontSize:12,fontWeight:500},children:r},r))})]})]})]})},e.institution))})]})}var W_={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Vg=sr.createContext&&sr.createContext(W_),Q1=["attr","size","title"];function J1(s,e){if(s==null)return{};var i,r,l=$1(s,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(s);for(r=0;r<c.length;r++)i=c[r],e.indexOf(i)===-1&&{}.propertyIsEnumerable.call(s,i)&&(l[i]=s[i])}return l}function $1(s,e){if(s==null)return{};var i={};for(var r in s)if({}.hasOwnProperty.call(s,r)){if(e.indexOf(r)!==-1)continue;i[r]=s[r]}return i}function Gc(){return Gc=Object.assign?Object.assign.bind():function(s){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var r in i)({}).hasOwnProperty.call(i,r)&&(s[r]=i[r])}return s},Gc.apply(null,arguments)}function kg(s,e){var i=Object.keys(s);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(s);e&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(s,l).enumerable})),i.push.apply(i,r)}return i}function Vc(s){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?kg(Object(i),!0).forEach(function(r){eS(s,r,i[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(i)):kg(Object(i)).forEach(function(r){Object.defineProperty(s,r,Object.getOwnPropertyDescriptor(i,r))})}return s}function eS(s,e,i){return(e=tS(e))in s?Object.defineProperty(s,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):s[e]=i,s}function tS(s){var e=nS(s,"string");return typeof e=="symbol"?e:e+""}function nS(s,e){if(typeof s!="object"||!s)return s;var i=s[Symbol.toPrimitive];if(i!==void 0){var r=i.call(s,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(s)}function X_(s){return s&&s.map((e,i)=>sr.createElement(e.tag,Vc({key:i},e.attr),X_(e.child)))}function Yo(s){return e=>sr.createElement(iS,Gc({attr:Vc({},s.attr)},e),X_(s.child))}function iS(s){var e=i=>{var r=s.attr,l=s.size,c=s.title,d=J1(s,Q1),m=l||i.size||"1em",p;return i.className&&(p=i.className),s.className&&(p=(p?p+" ":"")+s.className),sr.createElement("svg",Gc({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},i.attr,r,d,{className:p,style:Vc(Vc({color:s.color||i.color},i.style),s.style),height:m,width:m,xmlns:"http://www.w3.org/2000/svg"}),c&&sr.createElement("title",null,c),s.children)};return Vg!==void 0?sr.createElement(Vg.Consumer,null,i=>e(i)):e(W_)}function aS(s){return Yo({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(s)}function j_(s){return Yo({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(s)}function rS(s){return Yo({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M471.1 96C405 96 353.3 137.3 320 174.6 286.7 137.3 235 96 168.9 96 75.8 96 0 167.8 0 256s75.8 160 168.9 160c66.1 0 117.8-41.3 151.1-78.6 33.3 37.3 85 78.6 151.1 78.6 93.1 0 168.9-71.8 168.9-160S564.2 96 471.1 96zM168.9 320c-40.2 0-72.9-28.7-72.9-64s32.7-64 72.9-64c38.2 0 73.4 36.1 94 64-20.4 27.6-55.9 64-94 64zm302.2 0c-38.2 0-73.4-36.1-94-64 20.4-27.6 55.9-64 94-64 40.2 0 72.9 28.7 72.9 64s-32.7 64-72.9 64z"},child:[]}]})(s)}function sS(s){return Yo({attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M9.80307 3.0431C10.0554 3.15525 10.1691 3.45073 10.0569 3.70307L6.05691 12.7031C5.94475 12.9554 5.64927 13.0691 5.39693 12.9569C5.14459 12.8448 5.03094 12.5493 5.14309 12.2969L9.14309 3.29693C9.25525 3.04459 9.55073 2.93094 9.80307 3.0431ZM4.33218 5.3763C4.53857 5.55976 4.55716 5.87579 4.3737 6.08218L2.66898 8L4.3737 9.91782C4.55716 10.1242 4.53857 10.4402 4.33218 10.6237C4.12579 10.8072 3.80975 10.7886 3.6263 10.5822L1.6263 8.33218C1.4579 8.14274 1.4579 7.85726 1.6263 7.66782L3.6263 5.41782C3.80975 5.21143 4.12579 5.19284 4.33218 5.3763ZM11.6678 5.3763C11.8742 5.19284 12.1902 5.21143 12.3737 5.41782L14.3737 7.66782C14.5421 7.85726 14.5421 8.14274 14.3737 8.33218L12.3737 10.5822C12.1902 10.7886 11.8742 10.8072 11.6678 10.6237C11.4614 10.4402 11.4428 10.1242 11.6263 9.91782L13.331 8L11.6263 6.08218C11.4428 5.87579 11.4614 5.55976 11.6678 5.3763Z"},child:[]}]})(s)}const oS={"C++":()=>S.jsxs("svg",{viewBox:"0 0 128 128",width:"34",height:"34",children:[S.jsx("path",{fill:"#00599C",d:"M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.8-2.1-2.4-2.7z"}),S.jsx("path",{fill:"#004482",d:"M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z"}),S.jsx("path",{fill:"#659AD2",d:"M92 67.4v-5.8l-3.4 2v-4l3.4-2v-5.8l5.2 3v3.8l3.3-2v4l-3.3 2v3.8zm17 0v-5.8l-3.4 2v-4l3.4-2v-5.8l5.2 3v3.8l3.3-2v4l-3.3 2v3.8zM64 88c-13.3 0-24-10.7-24-24s10.7-24 24-24c7.2 0 13.8 3.2 18.3 8.2l-9.6 5.5C50.7 48.2 41 57 41 64s9.7 15.8 20.7 15.8c4.9 0 9.5-1.7 13.1-4.7l9.6 5.5C79.8 84.8 72.2 88 64 88z"})]}),JavaScript:()=>S.jsxs("svg",{viewBox:"0 0 128 128",width:"34",height:"34",children:[S.jsx("rect",{width:"128",height:"128",rx:"8",fill:"#F0DB4F"}),S.jsx("path",{fill:"#323330",d:"M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.963-8.548zM75.495 55.929H64.819l-.001 30.094c0 6.41.334 12.228-.727 14.15-.978 2.881-3.451 3.561-5.62 3.34-1.935-.387-3.874-1.961-4.762-3.565-.338-.612-.594-1.141-.752-1.506l-9.154 5.633c1.407 3.072 3.488 5.482 6.063 7.064 4.102 2.451 9.685 3.031 15.617 1.58 3.823-.981 7.312-3.244 9.394-6.547 2.842-4.48 2.572-10.006 2.561-16.171l.029-34.072z"})]}),React:()=>S.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"-11.5 -10.23174 23 20.46348",width:"34",height:"34",children:[S.jsx("title",{children:"React Logo"}),S.jsx("circle",{cx:"0",cy:"0",r:"2.05",fill:"#61DAFB"}),S.jsxs("g",{stroke:"#61DAFB",strokeWidth:"1",fill:"none",children:[S.jsx("ellipse",{rx:"11",ry:"4.2"}),S.jsx("ellipse",{rx:"11",ry:"4.2",transform:"rotate(60)"}),S.jsx("ellipse",{rx:"11",ry:"4.2",transform:"rotate(120)"})]})]}),"Node.js":()=>S.jsxs("svg",{viewBox:"0 0 128 128",width:"34",height:"34",children:[S.jsx("path",{fill:"#83CD29",d:"M112.771 30.334L68.781 4.996c-2.312-1.387-5.25-1.387-7.562 0L17.229 30.334c-2.312 1.355-3.781 3.824-3.781 6.542v50.25c0 2.719 1.469 5.188 3.781 6.542l43.99 25.021c2.312 1.355 5.25 1.355 7.562 0l43.99-25.021c2.312-1.354 3.781-3.823 3.781-6.542v-50.25c0-2.718-1.469-5.187-3.781-6.542z"}),S.jsx("path",{fill:"#404137",d:"M94.661 87.234c0 1.562-.906 2.968-2.312 3.666L64.981 106.5c-.594.312-1.281.468-1.969.468-.687 0-1.375-.156-2-.468L34.042 90.9c-1.406-.698-2.312-2.104-2.312-3.666V56.931c0-1.562.906-2.968 2.312-3.666l27.969-15.875c.594-.344 1.313-.531 2-.531s1.406.187 2 .531l27.969 15.875c1.406.698 2.312 2.104 2.312 3.666l-.631 30.303z"}),S.jsx("path",{fill:"#35BF5C",d:"M79.434 55.489l-14.453-8.271v16.543l14.453 8.271z"}),S.jsx("path",{fill:"#fff",d:"M48.566 55.489l14.415 8.272v16.543l-14.415-8.271z"}),S.jsx("path",{fill:"#83CD29",d:"M63.019 63.761l14.415-8.272-14.415-8.271-14.453 8.271z"})]}),"Express.js":()=>S.jsxs("svg",{viewBox:"0 0 128 128",width:"34",height:"34",children:[S.jsx("rect",{width:"128",height:"128",rx:"8",fill:"#1a1a1a"}),S.jsx("path",{fill:"#fff",d:"M126.67 98.44c-4.56 1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45C89 76 81.85 85.2 75.14 94.77c-2.4 3.42-4.92 4.91-9.4 3.7l26.92-36.13L67.6 29.71c4.31-.84 7.29-.41 10.21 3.45 6.06 8.07 12.58 15.78 19.23 24l18.87-27.17c4.22-1.15 7.41-.46 9.78 3.38L107 63l19.67 35.44zM1.33 61.74c.72-3.61 1.2-7.29 2.2-10.83 6-21.43 30.6-30.34 47.5-17.06C60.93 41.64 63.39 52.62 62.9 65H7.1c-.84 22.21 15.15 35.62 35.53 28.78 7.15-2.4 11.36-8 13.49-15 1-3.06 2.69-4 5.7-3.13-1.38 8.55-5.59 15.35-13.66 19.58-12.7 6.7-29.4 3.37-38.3-7.45-4.83-5.89-7.06-12.91-8.53-20.59-.08-.4-.44-.75-.68-1.12-.48-.48-.67-.86-.32-4.33zm5.9-2.54H57.8c-.41-16.25-10.95-26.87-25.43-26.54C17.42 32.94 7.03 43.51 7.23 59.2z"})]}),HTML:()=>S.jsxs("svg",{viewBox:"0 0 128 128",width:"34",height:"34",children:[S.jsx("path",{fill:"#E44D26",d:"M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"}),S.jsx("path",{fill:"#F16529",d:"M64 116.8l36.378-10.086 8.559-95.878H64z"}),S.jsx("path",{fill:"#EBEBEB",d:"M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"}),S.jsx("path",{fill:"#fff",d:"M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.336-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"})]}),CSS:()=>S.jsxs("svg",{viewBox:"0 0 128 128",width:"34",height:"34",children:[S.jsx("path",{fill:"#1572B6",d:"M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"}),S.jsx("path",{fill:"#33A9DC",d:"M64.001 117.062l36.559-10.136 8.601-96.354H64.001v106.49z"}),S.jsx("path",{fill:"#fff",d:"M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95V51.429z"}),S.jsx("path",{fill:"#EBEBEB",d:"M64.083 87.349l-.061.018-15.402-4.158-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018v-14.391z"}),S.jsx("path",{fill:"#fff",d:"M81.127 64.675l-1.666 18.522-15.426 4.164v14.391l28.354-7.858.208-2.337 2.406-26.882H81.127z"}),S.jsx("path",{fill:"#EBEBEB",d:"M64.048 23.435v13.831H30.64l-.277-3.108-.63-7.012-.331-3.711h34.646zm-.047 27.994H47.871l1.264 14.163h14.866V51.429z"})]}),MongoDB:()=>S.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 128 128",width:"34",height:"34",children:S.jsx("path",{fill:"#47A248",d:"M64.6 7c-.5 1.7-1.3 3.3-2.4 4.7-6.5 8.2-11.1 18-13.3 28.2-2.1 10.4-1.4 21.2 2 31.2 3.5 10.2 9.9 19.2 18.3 25.9.7-14.8 2.2-29.6 1.5-44.4-.3-7.2-1.5-14.3-3.6-21.2-1-3.3-2.3-6.6-2.5-10-.2-4.8 1.1-9.7 0-14.4z"})}),MySQL:()=>S.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 128 128",width:"34",height:"34",children:[S.jsx("path",{fill:"#00758F",d:"M23 80c9-25 26-42 48-42 18 0 30 12 34 31-7-11-17-17-29-17-18 0-33 11-45 28H23z"}),S.jsx("path",{fill:"#F29111",d:"M84 53c7 2 13 8 16 16-4-4-8-6-13-7-5-1-10 0-15 2 3-6 7-10 12-11z"})]}),"VS Code":()=>S.jsx(sS,{size:34,color:"#007ACC"}),GitHub:()=>S.jsx(j_,{size:34,color:"#ffffff"}),AWS:()=>S.jsxs("svg",{viewBox:"0 0 128 128",width:"34",height:"34",children:[S.jsx("path",{fill:"#FF9900",d:"M39.262 46.316c0 1.561.168 2.823.463 3.748.328.924.757 1.946 1.353 3.044.214.34.3.68.3.988 0 .432-.257.864-.804 1.296l-2.665 1.775c-.38.254-.761.38-1.107.38-.43 0-.86-.213-1.29-.607a13.295 13.295 0 0 1-1.548-2.02 33.267 33.267 0 0 1-1.328-2.533c-3.34 3.94-7.535 5.91-12.59 5.91-3.598 0-6.463-1.03-8.567-3.09-2.104-2.06-3.175-4.806-3.175-8.237 0-3.643 1.285-6.604 3.888-8.843 2.603-2.24 6.066-3.36 10.459-3.36 1.45 0 2.942.118 4.518.322 1.576.204 3.194.523 4.9.9v-3.11c0-3.233-.677-5.49-2.003-6.8-1.36-1.31-3.655-1.947-6.92-1.947-1.49 0-3.012.185-4.578.588-1.566.402-3.09.897-4.572 1.52-.685.307-1.195.481-1.49.558-.299.076-.52.118-.69.118-.601 0-.9-.432-.9-1.323V23.13c0-.685.085-1.197.296-1.5.213-.3.601-.6 1.197-.9 1.49-.771 3.285-1.416 5.389-1.946a26.208 26.208 0 0 1 6.755-.814c5.144 0 8.907 1.17 11.32 3.51 2.383 2.34 3.591 5.887 3.591 10.64v14.196zm-17.392 6.52c1.408 0 2.858-.254 4.395-.763 1.537-.51 2.899-1.435 4.055-2.695.685-.815 1.197-1.72 1.447-2.737.25-1.02.42-2.253.42-3.7v-1.78a36.003 36.003 0 0 0-3.917-.73 32.131 32.131 0 0 0-4.013-.254c-2.86 0-4.95.558-6.357 1.706-1.408 1.147-2.1 2.758-2.1 4.874 0 1.987.509 3.464 1.554 4.483 1.02 1.046 2.515 1.596 4.516 1.596zm34.19 4.609c-.76 0-1.27-.127-1.6-.407-.34-.254-.64-.855-.898-1.666L43.4 19.327c-.258-.847-.387-1.382-.387-1.664 0-.669.332-1.028.998-1.028h4.072c.806 0 1.333.127 1.63.407.343.254.601.855.857 1.664l8.695 34.28 8.08-34.28c.212-.847.47-1.41.81-1.664.34-.255.905-.407 1.68-.407h3.33c.804 0 1.332.127 1.673.407.338.254.637.855.847 1.664l8.183 34.71 8.951-34.71c.26-.847.518-1.41.858-1.664.34-.255.87-.407 1.63-.407h3.87c.665 0 1.025.334 1.025 1.028 0 .203-.04.407-.082.637-.04.226-.124.558-.295 1.027L97.419 55.47c-.257.848-.513 1.41-.854 1.665-.34.25-.867.405-1.622.405h-3.575c-.804 0-1.333-.127-1.675-.405-.337-.279-.636-.855-.845-1.697l-8.048-33.547-7.993 33.52c-.214.847-.51 1.414-.847 1.697-.338.278-.895.405-1.676.405h-3.572zm59.186 1.24c-2.19 0-4.386-.254-6.528-.787-2.147-.533-3.806-1.1-4.933-1.734-.685-.382-1.15-.805-1.32-1.199a3.026 3.026 0 0 1-.25-1.198v-2.01c0-.892.335-1.324.962-1.324.255 0 .51.042.764.128.256.085.638.254 1.047.424 1.42.636 2.98 1.143 4.617 1.487 1.675.343 3.313.514 4.992.514 2.66 0 4.73-.457 6.181-1.374 1.448-.916 2.188-2.236 2.188-3.93 0-1.16-.383-2.12-1.15-2.91-.764-.788-2.213-1.499-4.313-2.17l-6.196-1.92c-3.132-1-5.456-2.462-6.902-4.384-1.443-1.898-2.18-4.01-2.18-6.266 0-1.806.383-3.396 1.15-4.767.764-1.37 1.8-2.588 3.1-3.556 1.295-.997 2.77-1.73 4.478-2.24a18.854 18.854 0 0 1 5.565-.764c.976 0 1.993.052 2.977.178.98.13 1.886.306 2.787.51.857.215 1.672.465 2.448.718.775.25 1.384.51 1.82.762.601.345 1.042.69 1.294 1.069.253.35.38.814.38 1.37v1.86c0 .893-.336 1.35-.97 1.35-.34 0-.888-.172-1.594-.513-2.404-1.07-5.107-1.605-8.105-1.605-2.404 0-4.31.395-5.67 1.218-1.355.814-2.05 2.01-2.05 3.643 0 1.16.42 2.148 1.258 2.94.84.793 2.4 1.582 4.62 2.302l6.071 1.922c3.088.979 5.33 2.35 6.688 4.118 1.356 1.762 2.02 3.77 2.02 5.99 0 1.856-.383 3.523-1.108 4.97-.764 1.452-1.8 2.732-3.138 3.754-1.342 1.05-2.94 1.82-4.78 2.363a20.747 20.747 0 0 1-6.111.856z"}),S.jsx("path",{fill:"#FF9900",d:"M112.671 79.703c-13.559 10.013-33.256 15.334-50.188 15.334-23.747 0-45.14-8.763-61.308-23.34-1.27-1.149-.13-2.717 1.395-1.82C19.378 81.543 41.063 88.014 63.52 88.014c15.636 0 32.837-3.243 48.672-9.97 2.395-1.02 4.392 1.57 2.479 3.66zm5.772-6.588c-1.742-2.23-11.52-1.054-15.927-.53-1.334.165-1.541-1.002-.339-1.846 7.79-5.492 20.594-3.906 22.077-2.066 1.485 1.852-.388 14.69-7.708 20.814-1.12.947-2.196.442-1.7-.802 1.647-4.112 5.34-13.34 3.597-15.57z"})]}),DevOps:()=>S.jsx(rS,{size:34,color:"#0078D7"}),Postman:()=>S.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 128 128",width:"34",height:"34",children:[S.jsx("circle",{cx:"64",cy:"64",r:"56",fill:"#FF6C37"}),S.jsx("path",{fill:"#fff",d:"M86.5 41.5 56.7 71.3a8 8 0 1 1-5.7-5.7l29.8-29.8a4 4 0 1 1 5.7 5.7z"})]})},lS=[{cat:"Languages",color:"#818cf8",bg:"rgba(129,140,248,0.1)",border:"rgba(129,140,248,0.25)",items:["C++","JavaScript"]},{cat:"Technologies",color:"#34d399",bg:"rgba(52,211,153,0.1)",border:"rgba(52,211,153,0.25)",items:["HTML","CSS","React","Node.js","Express.js"]},{cat:"Database",color:"#fb923c",bg:"rgba(251,146,60,0.1)",border:"rgba(251,146,60,0.25)",items:["MongoDB","MySQL"]},{cat:"Tools",color:"#38bdf8",bg:"rgba(56,189,248,0.1)",border:"rgba(56,189,248,0.25)",items:["VS Code","GitHub","AWS","DevOps","Postman"]}];function cS({item:s,color:e,bg:i,border:r}){const[l,c]=ft.useState(!1),d=oS[s];return S.jsxs("div",{onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),style:{display:"flex",flexDirection:"column",alignItems:"center",gap:10,background:l?i:"rgba(255, 255, 255, 0.03)",border:`1px solid ${l?r:"rgba(255, 255, 255, 0.07)"}`,borderRadius:16,padding:"20px 16px",transition:"all 0.28s ease",transform:l?"translateY(-6px)":"none",boxShadow:l?`0 16px 40px ${e}22`:"none",cursor:"default",minWidth:90},children:[S.jsx("div",{style:{width:34,height:34,display:"flex",alignItems:"center",justifyContent:"center",filter:l?"none":"grayscale(20%) brightness(0.8)",transition:"filter 0.3s"},children:d?S.jsx(d,{}):S.jsx("span",{style:{fontSize:26},children:"💻"})}),S.jsx("span",{style:{color:l?"#fff":"rgba(255, 255, 255, 0.5)",fontSize:11,fontWeight:600,textAlign:"center",letterSpacing:"0.02em",transition:"color 0.25s",whiteSpace:"nowrap"},children:s})]})}function uS(){return S.jsxs("section",{id:"skills",style:{padding:"100px clamp(1rem, 5vw, 4rem)",maxWidth:1200,margin:"0 auto"},children:[S.jsx(wn,{children:S.jsx(Hr,{label:"Expertise",title:"Technical Skills"})}),S.jsx("div",{style:{display:"flex",flexDirection:"column",gap:40},children:lS.map((s,e)=>S.jsxs(wn,{delay:e*.08,children:[S.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:16},children:[S.jsx("div",{style:{width:3,height:22,borderRadius:4,background:s.color,flexShrink:0}}),S.jsx("span",{style:{color:s.color,fontSize:12,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase"},children:s.cat})]}),S.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:14},children:s.items.map((i,r)=>S.jsx(wn,{delay:e*.07+r*.06,children:S.jsx(cS,{item:i,color:s.color,bg:s.bg,border:s.border})},i))})]},s.cat))})]})}const fS=[{title:"Krishi Setu",subtitle:"Farmer-to-Consumer Marketplace",tags:["MERN","JWT","MongoDB","REST API"],color:"#22c55e",icon:"🌾",liveUrl:"https://krishi-setu-wine.vercel.app/",githubUrl:"https://github.com/abhishekyd300",bullets:["Full-stack F2C marketplace eliminating middlemen","RESTful APIs for auth, crop mgmt & order processing","JWT-based auth with role-based access control","Responsive dashboards for farmers & buyers"]},{title:"Smart CV",subtitle:"AI Resume Builder",tags:["MERN","GEMINI API","AI/LLM","PDF Export"],color:"#6366f1",icon:"🤖",liveUrl:"https://smartaicv.vercel.app/",githubUrl:"https://github.com/abhishekyd300",bullets:["AI-powered resume builder using GEMINI API","Dynamic content generation via AI prompts","PDF export/download for generated resumes","Template selection with live preview"]},{title:"ContestHub",subtitle:"Coding Contest & Assessment Platform",tags:["React","Node.js","Monaco Editor","AI Generation"],color:"#f59e0b",icon:"⚡",liveUrl:"https://contest-hub-mu.vercel.app/",githubUrl:"https://github.com/abhishekyd300/ContestHub",bullets:["Multi-language code editor supporting 15+ languages","Timed contests with real-time test execution","Live leaderboards and instant scoring system","Admin tools with AI-powered question generation"]},{title:"MiniCRM",subtitle:"Role-Based Inventory & Challan Management System",tags:["TypeScript","React","Express","Prisma","PostgreSQL"],color:"#06b6d4",icon:"📦",liveUrl:"https://minicrmportal.vercel.app",githubUrl:"https://github.com/abhishekyd300/MiniERP_CRM_portal",bullets:["Layered Express + TypeScript API with JWT auth & role middleware (Admin, Sales, Warehouse, Accounts)","Unified adjustStock() service logging StockMovement audit records for all manual & challan mutations","PostgreSQL via Supabase & Prisma with ChallanItem snapshotting (SKU, price) for historical integrity","Role-aware React SPA with permission-gated navigation and shared modular table/form components"]}];function dS(){return S.jsxs("section",{id:"projects",style:{padding:"0 clamp(1rem, 5vw, 4rem) 100px",maxWidth:1200,margin:"0 auto"},children:[S.jsx(wn,{children:S.jsx(Hr,{label:"Portfolio",title:"Featured Projects",color:"#22d3ee"})}),S.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(340px, 1fr))",gap:24},children:fS.map((s,e)=>S.jsx(wn,{delay:e*.15,children:S.jsxs("div",{style:{background:"rgba(255, 255, 255, 0.04)",border:"1px solid rgba(255, 255, 255, 0.09)",borderRadius:24,padding:"36px 32px",height:"100%",boxSizing:"border-box",transition:"transform 0.35s, box-shadow 0.35s, border-color 0.35s",position:"relative",overflow:"hidden"},onMouseEnter:i=>{i.currentTarget.style.transform="translateY(-8px)",i.currentTarget.style.boxShadow=`0 30px 80px ${s.color}22`,i.currentTarget.style.borderColor=s.color+"55"},onMouseLeave:i=>{i.currentTarget.style.transform="none",i.currentTarget.style.boxShadow="none",i.currentTarget.style.borderColor="rgba(255, 255, 255, 0.09)"},children:[S.jsx("div",{style:{position:"absolute",top:-40,right:-40,width:160,height:160,borderRadius:"50%",background:`radial-gradient(circle, ${s.color}15 0%, transparent 70%)`,pointerEvents:"none"}}),S.jsx("div",{style:{fontSize:44,marginBottom:16},children:s.icon}),S.jsx("h3",{style:{fontFamily:"'Outfit', sans-serif",color:"#fff",fontSize:22,fontWeight:700,margin:"0 0 4px",letterSpacing:"-0.02em"},children:s.title}),S.jsx("p",{style:{color:s.color,fontSize:13,fontWeight:600,margin:"0 0 20px"},children:s.subtitle}),S.jsx("ul",{style:{padding:0,margin:"0 0 24px",listStyle:"none"},children:s.bullets.map((i,r)=>S.jsxs("li",{style:{display:"flex",gap:10,color:"rgba(255, 255, 255, 0.58)",fontSize:13.5,lineHeight:1.65,marginBottom:8},children:[S.jsx("span",{style:{color:s.color,flexShrink:0,marginTop:3},children:"▸"}),i]},r))}),S.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6,marginBottom:24},children:s.tags.map(i=>S.jsx("span",{style:{background:`${s.color}18`,border:`1px solid ${s.color}35`,color:s.color,borderRadius:6,padding:"4px 10px",fontSize:12,fontWeight:600},children:i},i))}),S.jsxs("div",{style:{display:"flex",gap:10,flexWrap:"wrap"},children:[S.jsxs("a",{href:s.liveUrl,target:"_blank",rel:"noreferrer",style:{flex:1,minWidth:110,display:"flex",alignItems:"center",justifyContent:"center",gap:7,background:s.color,color:"#000",textDecoration:"none",padding:"10px 16px",borderRadius:10,fontSize:13,fontWeight:700,letterSpacing:"0.01em",transition:"transform 0.2s, box-shadow 0.2s",boxShadow:`0 4px 20px ${s.color}40`},onMouseEnter:i=>{i.currentTarget.style.transform="translateY(-2px)",i.currentTarget.style.boxShadow=`0 8px 28px ${s.color}65`},onMouseLeave:i=>{i.currentTarget.style.transform="none",i.currentTarget.style.boxShadow=`0 4px 20px ${s.color}40`},children:[S.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[S.jsx("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),S.jsx("polyline",{points:"15 3 21 3 21 9"}),S.jsx("line",{x1:"10",y1:"14",x2:"21",y2:"3"})]}),"Live Demo"]}),S.jsxs("a",{href:s.githubUrl,target:"_blank",rel:"noreferrer",style:{flex:1,minWidth:110,display:"flex",alignItems:"center",justifyContent:"center",gap:7,background:"rgba(255, 255, 255, 0.07)",border:"1px solid rgba(255, 255, 255, 0.15)",color:"#fff",textDecoration:"none",padding:"10px 16px",borderRadius:10,fontSize:13,fontWeight:700,transition:"background 0.2s, border-color 0.2s, transform 0.2s"},onMouseEnter:i=>{i.currentTarget.style.background="rgba(255, 255, 255, 0.13)",i.currentTarget.style.borderColor="rgba(255, 255, 255, 0.28)",i.currentTarget.style.transform="translateY(-2px)"},onMouseLeave:i=>{i.currentTarget.style.background="rgba(255, 255, 255, 0.07)",i.currentTarget.style.borderColor="rgba(255, 255, 255, 0.15)",i.currentTarget.style.transform="none"},children:[S.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"currentColor",children:S.jsx("path",{d:"M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"})}),"GitHub"]})]})]})},s.title))})]})}function hS({cert:s}){const[e,i]=ft.useState(!1),[r,l]=ft.useState(!1),c=s.badge&&!r?s.badge:null,d=S.jsxs("div",{onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),style:{background:e?"rgba(255, 255, 255, 0.055)":"rgba(255, 255, 255, 0.03)",border:`1px solid ${e?s.color+"50":"rgba(255, 255, 255, 0.08)"}`,borderRadius:20,padding:"0",overflow:"hidden",transition:"all 0.32s ease",transform:e?"translateY(-6px)":"none",boxShadow:e?`0 20px 56px ${s.glow}`:"none",display:"flex",flexDirection:"column",height:"100%"},children:[S.jsx("div",{style:{position:"relative",width:"100%",paddingBottom:"65%",background:c?"rgba(0, 0, 0, 0.3)":`linear-gradient(135deg, ${s.color}12, rgba(255, 255, 255, 0.03))`,overflow:"hidden",flexShrink:0},children:c?S.jsx("img",{src:c,alt:s.name,onError:()=>l(!0),style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"contain",padding:"16px"}}):S.jsx("div",{style:{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:S.jsx("span",{style:{fontSize:42},children:s.fallback})})}),S.jsxs("div",{style:{padding:"18px 20px 20px"},children:[S.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:8},children:[S.jsx("span",{style:{background:`${s.color}20`,color:s.color,fontSize:10,fontWeight:800,padding:"2px 10px",borderRadius:5,letterSpacing:"0.07em"},children:s.tag}),S.jsx("div",{style:{width:7,height:7,borderRadius:"50%",background:s.color,boxShadow:e?`0 0 10px ${s.color}`:"none",transition:"box-shadow 0.3s"}})]}),S.jsx("p",{style:{color:e?"#fff":"rgba(255, 255, 255, 0.82)",fontSize:14,fontWeight:700,lineHeight:1.35,margin:"0 0 4px",transition:"color 0.25s",fontFamily:"'Outfit', sans-serif"},children:s.name}),S.jsx("p",{style:{color:"rgba(255, 255, 255, 0.32)",fontSize:12,margin:0},children:s.issuer})]})]});return s.link?S.jsx("a",{href:s.link,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",display:"block",height:"100%"},children:d}):d}const pS=[{value:"300+",label:"DSA Problems Solved",icon:"⚡"},{value:"63",label:"Day LeetCode Streak",icon:"🔥"},{value:"100",label:"Days Badge Earned",icon:"🏅"},{value:"7.85",label:"CGPA at Parul University",icon:"🎓"}],mS=[{id:1,name:"AWS Certified Cloud Practitioner",issuer:"Amazon Web Services",tag:"AWS",badge:"/aws-practitioner.png",fallback:"☁️",color:"#FF9900",glow:"rgba(255,153,0,0.25)",link:"/aws-practitioner.png"},{id:2,name:"AWS Cloud Foundation",issuer:"Amazon Web Services",tag:"AWS",badge:"/aws-cloud-foundation.png",fallback:"🏗️",color:"#FF9900",glow:"rgba(255,153,0,0.25)",link:"/aws-cloud-foundation.png"},{id:3,name:"AI Intelligence Fundamentals",issuer:"AI Certification Body",tag:"AI",badge:"/aifundamentals.png",fallback:"🧠",color:"#60a5fa",glow:"rgba(96,165,250,0.25)",link:"/aifundamentals.png"},{id:4,name:"Computer Networking",issuer:"NPTEL",tag:"NPTEL",badge:"/computer-network.png",fallback:"🌐",color:"#a78bfa",glow:"rgba(167,139,250,0.25)",link:"/computer-network.png"},{id:5,name:"Data Analytics Essentials",issuer:"Cisco Networking Academy",tag:"Data Analytics",badge:"/DataAnalyticsEssentials.png",fallback:"📊",color:"#34d399",glow:"rgba(52,211,153,0.25)",link:"/DataAnalyticsEssentials.png"},{id:6,name:"Design and Analysis of Algorithm",issuer:"CodeTantra",tag:"Algorithms",badge:"/CodeTantra.png",fallback:"💻",color:"#fbbf24",glow:"rgba(251,191,36,0.25)",link:"/CodeTantra.png"}];function gS(){return S.jsx("section",{id:"achievements",style:{padding:"0 clamp(1rem, 5vw, 4rem) 100px"},children:S.jsxs("div",{style:{maxWidth:1200,margin:"0 auto"},children:[S.jsx(wn,{children:S.jsx(Hr,{label:"Track Record",title:"Achievements",color:"#f59e0b"})}),S.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(160px, 1fr))",gap:18,marginBottom:80},children:pS.map((s,e)=>S.jsx(wn,{delay:e*.1,children:S.jsxs("div",{style:{background:"rgba(245, 158, 11, 0.06)",border:"1px solid rgba(245, 158, 11, 0.18)",borderRadius:20,padding:"30px 16px",textAlign:"center",transition:"transform 0.3s, box-shadow 0.3s"},onMouseEnter:i=>{i.currentTarget.style.transform="translateY(-5px)",i.currentTarget.style.boxShadow="0 20px 50px rgba(245, 158, 11, 0.15)"},onMouseLeave:i=>{i.currentTarget.style.transform="none",i.currentTarget.style.boxShadow="none"},children:[S.jsx("div",{style:{fontSize:28,marginBottom:10},children:s.icon}),S.jsx("div",{style:{fontFamily:"'Outfit', sans-serif",fontSize:36,fontWeight:800,color:"#fbbf24",letterSpacing:"-0.04em"},children:s.value}),S.jsx("div",{style:{color:"rgba(255, 255, 255, 0.42)",fontSize:12,marginTop:5,lineHeight:1.4},children:s.label})]})},s.label))}),S.jsx(wn,{children:S.jsxs("div",{style:{textAlign:"center",marginBottom:40},children:[S.jsx("span",{style:{color:"#a78bfa",fontSize:12,letterSpacing:"0.14em",textTransform:"uppercase",fontWeight:700},children:"Credentials"}),S.jsx("h3",{style:{fontFamily:"'Outfit', sans-serif",color:"#fff",fontSize:28,fontWeight:800,margin:"8px 0 4px",letterSpacing:"-0.02em"},children:"Certifications"}),S.jsx("p",{style:{color:"rgba(255, 255, 255, 0.35)",fontSize:13},children:"My professional credentials and certifications"})]})}),S.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(240px, 1fr))",gap:20},children:mS.map((s,e)=>S.jsx(wn,{delay:e*.09,children:S.jsx(hS,{cert:s})},s.id))})]})})}function _S(s){return Yo({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"},child:[]}]})(s)}function vS(){const s=[{label:"abhishekyd300@gmail.com",href:"mailto:abhishekyd300@gmail.com",icon:S.jsx(_S,{size:20,color:"#EA4335"})},{label:"linkedin.com/in/abhishek-yadav-6207ab364",href:"https://linkedin.com/in/abhishek-yadav-6207ab364/",icon:S.jsx(aS,{size:20,color:"#0A66C2"})},{label:"github.com/abhishekyd300",href:"https://github.com/abhishekyd300",icon:S.jsx(j_,{size:20,color:"#ffffff"})}];return S.jsx("section",{id:"contact",style:{padding:"0 clamp(1rem, 5vw, 4rem) 120px",maxWidth:680,margin:"0 auto",textAlign:"center"},children:S.jsxs(wn,{children:[S.jsx(Hr,{label:"Let's Connect",title:"Get In Touch"}),S.jsx("p",{style:{color:"rgba(255, 255, 255, 0.42)",fontSize:15,lineHeight:1.9,marginBottom:44,marginTop:-28},children:"Actively looking for internship and full-time opportunities. Whether you have a role, a project, or just want to say hi — my inbox is always open."}),S.jsx("div",{style:{display:"flex",flexDirection:"column",gap:14,alignItems:"center"},children:s.map(e=>S.jsxs("a",{href:e.href,target:"_blank",rel:"noreferrer",style:{display:"flex",alignItems:"center",gap:14,background:"rgba(255, 255, 255, 0.04)",border:"1px solid rgba(255, 255, 255, 0.09)",borderRadius:14,padding:"13px 22px",color:"rgba(255, 255, 255, 0.62)",textDecoration:"none",fontSize:14,fontWeight:500,width:"100%",maxWidth:440,transition:"all 0.25s"},onMouseEnter:i=>{i.currentTarget.style.background="rgba(167, 139, 250, 0.09)",i.currentTarget.style.borderColor="rgba(167, 139, 250, 0.3)",i.currentTarget.style.color="#fff",i.currentTarget.style.transform="translateY(-2px)"},onMouseLeave:i=>{i.currentTarget.style.background="rgba(255, 255, 255, 0.04)",i.currentTarget.style.borderColor="rgba(255, 255, 255, 0.09)",i.currentTarget.style.color="rgba(255, 255, 255, 0.62)",i.currentTarget.style.transform="none"},children:[S.jsx("span",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:22},children:e.icon}),S.jsx("span",{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:e.label})]},e.href))})]})})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fh="185",xS=0,Wg=1,SS=2,Pc=1,yS=2,ko=3,or=0,qn=1,_a=2,xa=0,Os=1,jd=2,Xg=3,jg=4,MS=5,Lr=100,bS=101,ES=102,TS=103,AS=104,RS=200,CS=201,wS=202,DS=203,qd=204,Yd=205,US=206,NS=207,LS=208,OS=209,PS=210,zS=211,IS=212,BS=213,FS=214,Zd=0,Kd=1,Qd=2,Is=3,Jd=4,$d=5,eh=6,th=7,q_=0,HS=1,GS=2,ki=0,Y_=1,Z_=2,K_=3,Q_=4,J_=5,$_=6,ev=7,tv=300,Ir=301,Bs=302,fd=303,dd=304,Kc=306,nh=1e3,va=1001,ih=1002,Dn=1003,VS=1004,uc=1005,Pn=1006,hd=1007,Pr=1008,xi=1009,nv=1010,iv=1011,jo=1012,Hh=1013,Xi=1014,Gi=1015,Ma=1016,Gh=1017,Vh=1018,qo=1020,av=35902,rv=35899,sv=1021,ov=1022,Di=1023,ba=1026,zr=1027,lv=1028,kh=1029,Br=1030,Wh=1031,Xh=1033,zc=33776,Ic=33777,Bc=33778,Fc=33779,ah=35840,rh=35841,sh=35842,oh=35843,lh=36196,ch=37492,uh=37496,fh=37488,dh=37489,kc=37490,hh=37491,ph=37808,mh=37809,gh=37810,_h=37811,vh=37812,xh=37813,Sh=37814,yh=37815,Mh=37816,bh=37817,Eh=37818,Th=37819,Ah=37820,Rh=37821,Ch=36492,wh=36494,Dh=36495,Uh=36283,Nh=36284,Wc=36285,Lh=36286,kS=3200,qg=0,WS=1,ar="",_i="srgb",Xc="srgb-linear",jc="linear",Bt="srgb",Ss=7680,Yg=519,XS=512,jS=513,qS=514,jh=515,YS=516,ZS=517,qh=518,KS=519,Zg=35044,Kg="300 es",Vi=2e3,qc=2001;function QS(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Yc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function JS(){const s=Yc("canvas");return s.style.display="block",s}const Qg={};function Jg(...s){const e="THREE."+s.shift();console.log(e,...s)}function cv(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=s[1];i&&i.isStackTrace?s[0]+=" "+i.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function nt(...s){s=cv(s);const e="THREE."+s.shift();{const i=s[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...s)}}function bt(...s){s=cv(s);const e="THREE."+s.shift();{const i=s[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...s)}}function Ps(...s){const e=s.join(" ");e in Qg||(Qg[e]=!0,nt(...s))}function $S(s,e,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const ey={[Zd]:Kd,[Qd]:eh,[Jd]:th,[Is]:$d,[Kd]:Zd,[eh]:Qd,[th]:Jd,[$d]:Is};class Gr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,e);e.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],pd=Math.PI/180,Oh=180/Math.PI;function Zo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Ln[s&255]+Ln[s>>8&255]+Ln[s>>16&255]+Ln[s>>24&255]+"-"+Ln[e&255]+Ln[e>>8&255]+"-"+Ln[e>>16&15|64]+Ln[e>>24&255]+"-"+Ln[i&63|128]+Ln[i>>8&255]+"-"+Ln[i>>16&255]+Ln[i>>24&255]+Ln[r&255]+Ln[r>>8&255]+Ln[r>>16&255]+Ln[r>>24&255]).toLowerCase()}function Mt(s,e,i){return Math.max(e,Math.min(i,s))}function ty(s,e){return(s%e+e)%e}function md(s,e,i){return(1-i)*s+i*e}function zo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function jn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Zh=class Zh{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Mt(this.x,e.x,i.x),this.y=Mt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Mt(this.x,e,i),this.y=Mt(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-e.x,d=this.y-e.y;return this.x=c*r-d*l+e.x,this.y=c*l+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Zh.prototype.isVector2=!0;let Dt=Zh;class Gs{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,c,d,m){let p=r[l+0],h=r[l+1],v=r[l+2],y=r[l+3],g=c[d+0],E=c[d+1],A=c[d+2],D=c[d+3];if(y!==D||p!==g||h!==E||v!==A){let M=p*g+h*E+v*A+y*D;M<0&&(g=-g,E=-E,A=-A,D=-D,M=-M);let x=1-m;if(M<.9995){const B=Math.acos(M),H=Math.sin(B);x=Math.sin(x*B)/H,m=Math.sin(m*B)/H,p=p*x+g*m,h=h*x+E*m,v=v*x+A*m,y=y*x+D*m}else{p=p*x+g*m,h=h*x+E*m,v=v*x+A*m,y=y*x+D*m;const B=1/Math.sqrt(p*p+h*h+v*v+y*y);p*=B,h*=B,v*=B,y*=B}}e[i]=p,e[i+1]=h,e[i+2]=v,e[i+3]=y}static multiplyQuaternionsFlat(e,i,r,l,c,d){const m=r[l],p=r[l+1],h=r[l+2],v=r[l+3],y=c[d],g=c[d+1],E=c[d+2],A=c[d+3];return e[i]=m*A+v*y+p*E-h*g,e[i+1]=p*A+v*g+h*y-m*E,e[i+2]=h*A+v*E+m*g-p*y,e[i+3]=v*A-m*y-p*g-h*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,c=e._z,d=e._order,m=Math.cos,p=Math.sin,h=m(r/2),v=m(l/2),y=m(c/2),g=p(r/2),E=p(l/2),A=p(c/2);switch(d){case"XYZ":this._x=g*v*y+h*E*A,this._y=h*E*y-g*v*A,this._z=h*v*A+g*E*y,this._w=h*v*y-g*E*A;break;case"YXZ":this._x=g*v*y+h*E*A,this._y=h*E*y-g*v*A,this._z=h*v*A-g*E*y,this._w=h*v*y+g*E*A;break;case"ZXY":this._x=g*v*y-h*E*A,this._y=h*E*y+g*v*A,this._z=h*v*A+g*E*y,this._w=h*v*y-g*E*A;break;case"ZYX":this._x=g*v*y-h*E*A,this._y=h*E*y+g*v*A,this._z=h*v*A-g*E*y,this._w=h*v*y+g*E*A;break;case"YZX":this._x=g*v*y+h*E*A,this._y=h*E*y+g*v*A,this._z=h*v*A-g*E*y,this._w=h*v*y-g*E*A;break;case"XZY":this._x=g*v*y-h*E*A,this._y=h*E*y-g*v*A,this._z=h*v*A+g*E*y,this._w=h*v*y+g*E*A;break;default:nt("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],c=i[8],d=i[1],m=i[5],p=i[9],h=i[2],v=i[6],y=i[10],g=r+m+y;if(g>0){const E=.5/Math.sqrt(g+1);this._w=.25/E,this._x=(v-p)*E,this._y=(c-h)*E,this._z=(d-l)*E}else if(r>m&&r>y){const E=2*Math.sqrt(1+r-m-y);this._w=(v-p)/E,this._x=.25*E,this._y=(l+d)/E,this._z=(c+h)/E}else if(m>y){const E=2*Math.sqrt(1+m-r-y);this._w=(c-h)/E,this._x=(l+d)/E,this._y=.25*E,this._z=(p+v)/E}else{const E=2*Math.sqrt(1+y-r-m);this._w=(d-l)/E,this._x=(c+h)/E,this._y=(p+v)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,c=e._z,d=e._w,m=i._x,p=i._y,h=i._z,v=i._w;return this._x=r*v+d*m+l*h-c*p,this._y=l*v+d*p+c*m-r*h,this._z=c*v+d*h+r*p-l*m,this._w=d*v-r*m-l*p-c*h,this._onChangeCallback(),this}slerp(e,i){let r=e._x,l=e._y,c=e._z,d=e._w,m=this.dot(e);m<0&&(r=-r,l=-l,c=-c,d=-d,m=-m);let p=1-i;if(m<.9995){const h=Math.acos(m),v=Math.sin(h);p=Math.sin(p*h)/v,i=Math.sin(i*h)/v,this._x=this._x*p+r*i,this._y=this._y*p+l*i,this._z=this._z*p+c*i,this._w=this._w*p+d*i,this._onChangeCallback()}else this._x=this._x*p+r*i,this._y=this._y*p+l*i,this._z=this._z*p+c*i,this._w=this._w*p+d*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Kh=class Kh{constructor(e=0,i=0,r=0){this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion($g.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion($g.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=e.elements,d=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*d,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,c=e.x,d=e.y,m=e.z,p=e.w,h=2*(d*l-m*r),v=2*(m*i-c*l),y=2*(c*r-d*i);return this.x=i+p*h+d*y-m*v,this.y=r+p*v+m*h-c*y,this.z=l+p*y+c*v-d*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Mt(this.x,e.x,i.x),this.y=Mt(this.y,e.y,i.y),this.z=Mt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Mt(this.x,e,i),this.y=Mt(this.y,e,i),this.z=Mt(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,c=e.z,d=i.x,m=i.y,p=i.z;return this.x=l*p-c*m,this.y=c*d-r*p,this.z=r*m-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return gd.copy(this).projectOnVector(e),this.sub(gd)}reflect(e){return this.sub(gd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Kh.prototype.isVector3=!0;let le=Kh;const gd=new le,$g=new Gs,Qh=class Qh{constructor(e,i,r,l,c,d,m,p,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,d,m,p,h)}set(e,i,r,l,c,d,m,p,h){const v=this.elements;return v[0]=e,v[1]=l,v[2]=m,v[3]=i,v[4]=c,v[5]=p,v[6]=r,v[7]=d,v[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,d=r[0],m=r[3],p=r[6],h=r[1],v=r[4],y=r[7],g=r[2],E=r[5],A=r[8],D=l[0],M=l[3],x=l[6],B=l[1],H=l[4],w=l[7],I=l[2],U=l[5],z=l[8];return c[0]=d*D+m*B+p*I,c[3]=d*M+m*H+p*U,c[6]=d*x+m*w+p*z,c[1]=h*D+v*B+y*I,c[4]=h*M+v*H+y*U,c[7]=h*x+v*w+y*z,c[2]=g*D+E*B+A*I,c[5]=g*M+E*H+A*U,c[8]=g*x+E*w+A*z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],d=e[4],m=e[5],p=e[6],h=e[7],v=e[8];return i*d*v-i*m*h-r*c*v+r*m*p+l*c*h-l*d*p}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],d=e[4],m=e[5],p=e[6],h=e[7],v=e[8],y=v*d-m*h,g=m*p-v*c,E=h*c-d*p,A=i*y+r*g+l*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const D=1/A;return e[0]=y*D,e[1]=(l*h-v*r)*D,e[2]=(m*r-l*d)*D,e[3]=g*D,e[4]=(v*i-l*p)*D,e[5]=(l*c-m*i)*D,e[6]=E*D,e[7]=(r*p-h*i)*D,e[8]=(d*i-r*c)*D,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,c,d,m){const p=Math.cos(c),h=Math.sin(c);return this.set(r*p,r*h,-r*(p*d+h*m)+d+e,-l*h,l*p,-l*(-h*d+p*m)+m+i,0,0,1),this}scale(e,i){return Ps("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(_d.makeScale(e,i)),this}rotate(e){return Ps("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(_d.makeRotation(-e)),this}translate(e,i){return Ps("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(_d.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Qh.prototype.isMatrix3=!0;let rt=Qh;const _d=new rt,e_=new rt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),t_=new rt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ny(){const s={enabled:!0,workingColorSpace:Xc,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===Bt&&(l.r=Sa(l.r),l.g=Sa(l.g),l.b=Sa(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Bt&&(l.r=zs(l.r),l.g=zs(l.g),l.b=zs(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ar?jc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Ps("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Ps("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Xc]:{primaries:e,whitePoint:r,transfer:jc,toXYZ:e_,fromXYZ:t_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:_i},outputColorSpaceConfig:{drawingBufferColorSpace:_i}},[_i]:{primaries:e,whitePoint:r,transfer:Bt,toXYZ:e_,fromXYZ:t_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:_i}}}),s}const yt=ny();function Sa(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function zs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ys;class iy{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{ys===void 0&&(ys=Yc("canvas")),ys.width=e.width,ys.height=e.height;const l=ys.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=ys}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Yc("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=Sa(c[d]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Sa(i[r]/255)*255):i[r]=Sa(i[r]);return{data:i,width:e.width,height:e.height}}else return nt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ay=0;class Yh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ay++}),this.uuid=Zo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,m=l.length;d<m;d++)l[d].isDataTexture?c.push(vd(l[d].image)):c.push(vd(l[d]))}else c=vd(l);r.url=c}return i||(e.images[this.uuid]=r),r}}function vd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?iy.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(nt("Texture: Unable to serialize Texture."),{})}let ry=0;const xd=new le;class Bn extends Gr{constructor(e=Bn.DEFAULT_IMAGE,i=Bn.DEFAULT_MAPPING,r=va,l=va,c=Pn,d=Pr,m=Di,p=xi,h=Bn.DEFAULT_ANISOTROPY,v=ar){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ry++}),this.uuid=Zo(),this.name="",this.source=new Yh(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=h,this.format=m,this.internalFormat=null,this.type=p,this.offset=new Dt(0,0),this.repeat=new Dt(1,1),this.center=new Dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(xd).x}get height(){return this.source.getSize(xd).y}get depth(){return this.source.getSize(xd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){nt(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){nt(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==tv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case nh:e.x=e.x-Math.floor(e.x);break;case va:e.x=e.x<0?0:1;break;case ih:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case nh:e.y=e.y-Math.floor(e.y);break;case va:e.y=e.y<0?0:1;break;case ih:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bn.DEFAULT_IMAGE=null;Bn.DEFAULT_MAPPING=tv;Bn.DEFAULT_ANISOTROPY=1;const Jh=class Jh{constructor(e=0,i=0,r=0,l=1){this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=this.w,d=e.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,c;const p=e.elements,h=p[0],v=p[4],y=p[8],g=p[1],E=p[5],A=p[9],D=p[2],M=p[6],x=p[10];if(Math.abs(v-g)<.01&&Math.abs(y-D)<.01&&Math.abs(A-M)<.01){if(Math.abs(v+g)<.1&&Math.abs(y+D)<.1&&Math.abs(A+M)<.1&&Math.abs(h+E+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const H=(h+1)/2,w=(E+1)/2,I=(x+1)/2,U=(v+g)/4,z=(y+D)/4,T=(A+M)/4;return H>w&&H>I?H<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(H),l=U/r,c=z/r):w>I?w<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(w),r=U/l,c=T/l):I<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(I),r=z/c,l=T/c),this.set(r,l,c,i),this}let B=Math.sqrt((M-A)*(M-A)+(y-D)*(y-D)+(g-v)*(g-v));return Math.abs(B)<.001&&(B=1),this.x=(M-A)/B,this.y=(y-D)/B,this.z=(g-v)/B,this.w=Math.acos((h+E+x-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Mt(this.x,e.x,i.x),this.y=Mt(this.y,e.y,i.y),this.z=Mt(this.z,e.z,i.z),this.w=Mt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Mt(this.x,e,i),this.y=Mt(this.y,e,i),this.z=Mt(this.z,e,i),this.w=Mt(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Jh.prototype.isVector4=!0;let sn=Jh;class sy extends Gr{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new sn(0,0,e,i),this.scissorTest=!1,this.viewport=new sn(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:r.depth},c=new Bn(l),d=r.count;for(let m=0;m<d;m++)this.textures[m]=c.clone(),this.textures[m].isRenderTargetTexture=!0,this.textures[m].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:Pn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Yh(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wi extends sy{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class uv extends Bn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=va,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class oy extends Bn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=va,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Zc=class Zc{constructor(e,i,r,l,c,d,m,p,h,v,y,g,E,A,D,M){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,d,m,p,h,v,y,g,E,A,D,M)}set(e,i,r,l,c,d,m,p,h,v,y,g,E,A,D,M){const x=this.elements;return x[0]=e,x[4]=i,x[8]=r,x[12]=l,x[1]=c,x[5]=d,x[9]=m,x[13]=p,x[2]=h,x[6]=v,x[10]=y,x[14]=g,x[3]=E,x[7]=A,x[11]=D,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Zc().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,r=e.elements,l=1/Ms.setFromMatrixColumn(e,0).length(),c=1/Ms.setFromMatrixColumn(e,1).length(),d=1/Ms.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,c=e.z,d=Math.cos(r),m=Math.sin(r),p=Math.cos(l),h=Math.sin(l),v=Math.cos(c),y=Math.sin(c);if(e.order==="XYZ"){const g=d*v,E=d*y,A=m*v,D=m*y;i[0]=p*v,i[4]=-p*y,i[8]=h,i[1]=E+A*h,i[5]=g-D*h,i[9]=-m*p,i[2]=D-g*h,i[6]=A+E*h,i[10]=d*p}else if(e.order==="YXZ"){const g=p*v,E=p*y,A=h*v,D=h*y;i[0]=g+D*m,i[4]=A*m-E,i[8]=d*h,i[1]=d*y,i[5]=d*v,i[9]=-m,i[2]=E*m-A,i[6]=D+g*m,i[10]=d*p}else if(e.order==="ZXY"){const g=p*v,E=p*y,A=h*v,D=h*y;i[0]=g-D*m,i[4]=-d*y,i[8]=A+E*m,i[1]=E+A*m,i[5]=d*v,i[9]=D-g*m,i[2]=-d*h,i[6]=m,i[10]=d*p}else if(e.order==="ZYX"){const g=d*v,E=d*y,A=m*v,D=m*y;i[0]=p*v,i[4]=A*h-E,i[8]=g*h+D,i[1]=p*y,i[5]=D*h+g,i[9]=E*h-A,i[2]=-h,i[6]=m*p,i[10]=d*p}else if(e.order==="YZX"){const g=d*p,E=d*h,A=m*p,D=m*h;i[0]=p*v,i[4]=D-g*y,i[8]=A*y+E,i[1]=y,i[5]=d*v,i[9]=-m*v,i[2]=-h*v,i[6]=E*y+A,i[10]=g-D*y}else if(e.order==="XZY"){const g=d*p,E=d*h,A=m*p,D=m*h;i[0]=p*v,i[4]=-y,i[8]=h*v,i[1]=g*y+D,i[5]=d*v,i[9]=E*y-A,i[2]=A*y-E,i[6]=m*v,i[10]=D*y+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ly,e,cy)}lookAt(e,i,r){const l=this.elements;return si.subVectors(e,i),si.lengthSq()===0&&(si.z=1),si.normalize(),Ja.crossVectors(r,si),Ja.lengthSq()===0&&(Math.abs(r.z)===1?si.x+=1e-4:si.z+=1e-4,si.normalize(),Ja.crossVectors(r,si)),Ja.normalize(),fc.crossVectors(si,Ja),l[0]=Ja.x,l[4]=fc.x,l[8]=si.x,l[1]=Ja.y,l[5]=fc.y,l[9]=si.y,l[2]=Ja.z,l[6]=fc.z,l[10]=si.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,d=r[0],m=r[4],p=r[8],h=r[12],v=r[1],y=r[5],g=r[9],E=r[13],A=r[2],D=r[6],M=r[10],x=r[14],B=r[3],H=r[7],w=r[11],I=r[15],U=l[0],z=l[4],T=l[8],O=l[12],q=l[1],k=l[5],Q=l[9],he=l[13],me=l[2],J=l[6],P=l[10],G=l[14],te=l[3],_e=l[7],Ee=l[11],L=l[15];return c[0]=d*U+m*q+p*me+h*te,c[4]=d*z+m*k+p*J+h*_e,c[8]=d*T+m*Q+p*P+h*Ee,c[12]=d*O+m*he+p*G+h*L,c[1]=v*U+y*q+g*me+E*te,c[5]=v*z+y*k+g*J+E*_e,c[9]=v*T+y*Q+g*P+E*Ee,c[13]=v*O+y*he+g*G+E*L,c[2]=A*U+D*q+M*me+x*te,c[6]=A*z+D*k+M*J+x*_e,c[10]=A*T+D*Q+M*P+x*Ee,c[14]=A*O+D*he+M*G+x*L,c[3]=B*U+H*q+w*me+I*te,c[7]=B*z+H*k+w*J+I*_e,c[11]=B*T+H*Q+w*P+I*Ee,c[15]=B*O+H*he+w*G+I*L,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[12],d=e[1],m=e[5],p=e[9],h=e[13],v=e[2],y=e[6],g=e[10],E=e[14],A=e[3],D=e[7],M=e[11],x=e[15],B=p*E-h*g,H=m*E-h*y,w=m*g-p*y,I=d*E-h*v,U=d*g-p*v,z=d*y-m*v;return i*(D*B-M*H+x*w)-r*(A*B-M*I+x*U)+l*(A*H-D*I+x*z)-c*(A*w-D*U+M*z)}determinantAffine(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[1],d=e[5],m=e[9],p=e[2],h=e[6],v=e[10];return i*(d*v-m*h)-r*(c*v-m*p)+l*(c*h-d*p)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],d=e[4],m=e[5],p=e[6],h=e[7],v=e[8],y=e[9],g=e[10],E=e[11],A=e[12],D=e[13],M=e[14],x=e[15],B=i*m-r*d,H=i*p-l*d,w=i*h-c*d,I=r*p-l*m,U=r*h-c*m,z=l*h-c*p,T=v*D-y*A,O=v*M-g*A,q=v*x-E*A,k=y*M-g*D,Q=y*x-E*D,he=g*x-E*M,me=B*he-H*Q+w*k+I*q-U*O+z*T;if(me===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const J=1/me;return e[0]=(m*he-p*Q+h*k)*J,e[1]=(l*Q-r*he-c*k)*J,e[2]=(D*z-M*U+x*I)*J,e[3]=(g*U-y*z-E*I)*J,e[4]=(p*q-d*he-h*O)*J,e[5]=(i*he-l*q+c*O)*J,e[6]=(M*w-A*z-x*H)*J,e[7]=(v*z-g*w+E*H)*J,e[8]=(d*Q-m*q+h*T)*J,e[9]=(r*q-i*Q-c*T)*J,e[10]=(A*U-D*w+x*B)*J,e[11]=(y*w-v*U-E*B)*J,e[12]=(m*O-d*k-p*T)*J,e[13]=(i*k-r*O+l*T)*J,e[14]=(D*H-A*I-M*B)*J,e[15]=(v*I-y*H+g*B)*J,this}scale(e){const i=this.elements,r=e.x,l=e.y,c=e.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,d=e.x,m=e.y,p=e.z,h=c*d,v=c*m;return this.set(h*d+r,h*m-l*p,h*p+l*m,0,h*m+l*p,v*m+r,v*p-l*d,0,h*p-l*m,v*p+l*d,c*p*p+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,c,d){return this.set(1,r,c,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,c=i._x,d=i._y,m=i._z,p=i._w,h=c+c,v=d+d,y=m+m,g=c*h,E=c*v,A=c*y,D=d*v,M=d*y,x=m*y,B=p*h,H=p*v,w=p*y,I=r.x,U=r.y,z=r.z;return l[0]=(1-(D+x))*I,l[1]=(E+w)*I,l[2]=(A-H)*I,l[3]=0,l[4]=(E-w)*U,l[5]=(1-(g+x))*U,l[6]=(M+B)*U,l[7]=0,l[8]=(A+H)*z,l[9]=(M-B)*z,l[10]=(1-(g+D))*z,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinantAffine();if(c===0)return r.set(1,1,1),i.identity(),this;let d=Ms.set(l[0],l[1],l[2]).length();const m=Ms.set(l[4],l[5],l[6]).length(),p=Ms.set(l[8],l[9],l[10]).length();c<0&&(d=-d),Ai.copy(this);const h=1/d,v=1/m,y=1/p;return Ai.elements[0]*=h,Ai.elements[1]*=h,Ai.elements[2]*=h,Ai.elements[4]*=v,Ai.elements[5]*=v,Ai.elements[6]*=v,Ai.elements[8]*=y,Ai.elements[9]*=y,Ai.elements[10]*=y,i.setFromRotationMatrix(Ai),r.x=d,r.y=m,r.z=p,this}makePerspective(e,i,r,l,c,d,m=Vi,p=!1){const h=this.elements,v=2*c/(i-e),y=2*c/(r-l),g=(i+e)/(i-e),E=(r+l)/(r-l);let A,D;if(p)A=c/(d-c),D=d*c/(d-c);else if(m===Vi)A=-(d+c)/(d-c),D=-2*d*c/(d-c);else if(m===qc)A=-d/(d-c),D=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+m);return h[0]=v,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=y,h[9]=E,h[13]=0,h[2]=0,h[6]=0,h[10]=A,h[14]=D,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,i,r,l,c,d,m=Vi,p=!1){const h=this.elements,v=2/(i-e),y=2/(r-l),g=-(i+e)/(i-e),E=-(r+l)/(r-l);let A,D;if(p)A=1/(d-c),D=d/(d-c);else if(m===Vi)A=-2/(d-c),D=-(d+c)/(d-c);else if(m===qc)A=-1/(d-c),D=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+m);return h[0]=v,h[4]=0,h[8]=0,h[12]=g,h[1]=0,h[5]=y,h[9]=0,h[13]=E,h[2]=0,h[6]=0,h[10]=A,h[14]=D,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}};Zc.prototype.isMatrix4=!0;let un=Zc;const Ms=new le,Ai=new un,ly=new le(0,0,0),cy=new le(1,1,1),Ja=new le,fc=new le,si=new le,n_=new un,i_=new Gs;class Fr{constructor(e=0,i=0,r=0,l=Fr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,c=l[0],d=l[4],m=l[8],p=l[1],h=l[5],v=l[9],y=l[2],g=l[6],E=l[10];switch(i){case"XYZ":this._y=Math.asin(Mt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,E),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(m,E),this._z=Math.atan2(p,h)):(this._y=Math.atan2(-y,c),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-y,E),this._z=Math.atan2(-d,h)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-Mt(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(g,E),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-d,h));break;case"YZX":this._z=Math.asin(Mt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,h),this._y=Math.atan2(-y,c)):(this._x=0,this._y=Math.atan2(m,E));break;case"XZY":this._z=Math.asin(-Mt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(m,c)):(this._x=Math.atan2(-v,E),this._y=0);break;default:nt("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return n_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(n_,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return i_.setFromEuler(this),this.setFromQuaternion(i_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fr.DEFAULT_ORDER="XYZ";class fv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let uy=0;const a_=new le,bs=new Gs,da=new un,dc=new le,Io=new le,fy=new le,dy=new Gs,r_=new le(1,0,0),s_=new le(0,1,0),o_=new le(0,0,1),l_={type:"added"},hy={type:"removed"},Es={type:"childadded",child:null},Sd={type:"childremoved",child:null};class Yn extends Gr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:uy++}),this.uuid=Zo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Yn.DEFAULT_UP.clone();const e=new le,i=new Fr,r=new Gs,l=new le(1,1,1);function c(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new un},normalMatrix:{value:new rt}}),this.matrix=new un,this.matrixWorld=new un,this.matrixAutoUpdate=Yn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return bs.setFromAxisAngle(e,i),this.quaternion.multiply(bs),this}rotateOnWorldAxis(e,i){return bs.setFromAxisAngle(e,i),this.quaternion.premultiply(bs),this}rotateX(e){return this.rotateOnAxis(r_,e)}rotateY(e){return this.rotateOnAxis(s_,e)}rotateZ(e){return this.rotateOnAxis(o_,e)}translateOnAxis(e,i){return a_.copy(e).applyQuaternion(this.quaternion),this.position.add(a_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(r_,e)}translateY(e){return this.translateOnAxis(s_,e)}translateZ(e){return this.translateOnAxis(o_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(da.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?dc.copy(e):dc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Io.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?da.lookAt(Io,dc,this.up):da.lookAt(dc,Io,this.up),this.quaternion.setFromRotationMatrix(da),l&&(da.extractRotation(l.matrixWorld),bs.setFromRotationMatrix(da),this.quaternion.premultiply(bs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(bt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(l_),Es.child=e,this.dispatchEvent(Es),Es.child=null):bt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(hy),Sd.child=e,this.dispatchEvent(Sd),Sd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),da.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),da.multiply(e.parent.matrixWorld)),e.applyMatrix4(da),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(l_),Es.child=e,this.dispatchEvent(Es),Es.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Io,e,fy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Io,dy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,r=e.y,l=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*r-c[8]*l,c[13]+=r-c[1]*i-c[5]*r-c[9]*l,c[14]+=l-c[2]*i-c[6]*r-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i,r=!1){const l=this.parent;if(e===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){const c=this.children;for(let d=0,m=c.length;d<m;d++)c[d].updateWorldMatrix(!1,!0,r)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(m=>({...m,boundingBox:m.boundingBox?m.boundingBox.toJSON():void 0,boundingSphere:m.boundingSphere?m.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(m=>({...m})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(m,p){return m[p.uuid]===void 0&&(m[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const m=this.geometry.parameters;if(m!==void 0&&m.shapes!==void 0){const p=m.shapes;if(Array.isArray(p))for(let h=0,v=p.length;h<v;h++){const y=p[h];c(e.shapes,y)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const m=[];for(let p=0,h=this.material.length;p<h;p++)m.push(c(e.materials,this.material[p]));l.material=m}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let m=0;m<this.children.length;m++)l.children.push(this.children[m].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let m=0;m<this.animations.length;m++){const p=this.animations[m];l.animations.push(c(e.animations,p))}}if(i){const m=d(e.geometries),p=d(e.materials),h=d(e.textures),v=d(e.images),y=d(e.shapes),g=d(e.skeletons),E=d(e.animations),A=d(e.nodes);m.length>0&&(r.geometries=m),p.length>0&&(r.materials=p),h.length>0&&(r.textures=h),v.length>0&&(r.images=v),y.length>0&&(r.shapes=y),g.length>0&&(r.skeletons=g),E.length>0&&(r.animations=E),A.length>0&&(r.nodes=A)}return r.object=l,r;function d(m){const p=[];for(const h in m){const v=m[h];delete v.metadata,p.push(v)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Yn.DEFAULT_UP=new le(0,1,0);Yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class hc extends Yn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const py={type:"move"};class yd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new le,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new le),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new le,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new le,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,c=null,d=null;const m=this._targetRay,p=this._grip,h=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(h&&e.hand){d=!0;for(const D of e.hand.values()){const M=i.getJointPose(D,r),x=this._getHandJoint(h,D);M!==null&&(x.matrix.fromArray(M.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=M.radius),x.visible=M!==null}const v=h.joints["index-finger-tip"],y=h.joints["thumb-tip"],g=v.position.distanceTo(y.position),E=.02,A=.005;h.inputState.pinching&&g>E+A?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&g<=E-A&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:e,target:this})));m!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(m.matrix.fromArray(l.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,l.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(l.linearVelocity)):m.hasLinearVelocity=!1,l.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(l.angularVelocity)):m.hasAngularVelocity=!1,this.dispatchEvent(py)))}return m!==null&&(m.visible=l!==null),p!==null&&(p.visible=c!==null),h!==null&&(h.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new hc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const dv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$a={h:0,s:0,l:0},pc={h:0,s:0,l:0};function Md(s,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(e-s)*6*i:i<1/2?e:i<2/3?s+(e-s)*6*(2/3-i):s}class Et{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=_i){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=yt.workingColorSpace){return this.r=e,this.g=i,this.b=r,yt.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=yt.workingColorSpace){if(e=ty(e,1),i=Mt(i,0,1),r=Mt(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,d=2*r-c;this.r=Md(d,c,e+1/3),this.g=Md(d,c,e),this.b=Md(d,c,e-1/3)}return yt.colorSpaceToWorking(this,l),this}setStyle(e,i=_i){function r(c){c!==void 0&&parseFloat(c)<1&&nt("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const d=l[1],m=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(m))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(m))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(m))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:nt("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);nt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=_i){const r=dv[e.toLowerCase()];return r!==void 0?this.setHex(r,i):nt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Sa(e.r),this.g=Sa(e.g),this.b=Sa(e.b),this}copyLinearToSRGB(e){return this.r=zs(e.r),this.g=zs(e.g),this.b=zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_i){return yt.workingToColorSpace(On.copy(this),e),Math.round(Mt(On.r*255,0,255))*65536+Math.round(Mt(On.g*255,0,255))*256+Math.round(Mt(On.b*255,0,255))}getHexString(e=_i){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=yt.workingColorSpace){yt.workingToColorSpace(On.copy(this),i);const r=On.r,l=On.g,c=On.b,d=Math.max(r,l,c),m=Math.min(r,l,c);let p,h;const v=(m+d)/2;if(m===d)p=0,h=0;else{const y=d-m;switch(h=v<=.5?y/(d+m):y/(2-d-m),d){case r:p=(l-c)/y+(l<c?6:0);break;case l:p=(c-r)/y+2;break;case c:p=(r-l)/y+4;break}p/=6}return e.h=p,e.s=h,e.l=v,e}getRGB(e,i=yt.workingColorSpace){return yt.workingToColorSpace(On.copy(this),i),e.r=On.r,e.g=On.g,e.b=On.b,e}getStyle(e=_i){yt.workingToColorSpace(On.copy(this),e);const i=On.r,r=On.g,l=On.b;return e!==_i?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL($a),this.setHSL($a.h+e,$a.s+i,$a.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL($a),e.getHSL(pc);const r=md($a.h,pc.h,i),l=md($a.s,pc.s,i),c=md($a.l,pc.l,i);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const On=new Et;Et.NAMES=dv;class my extends Yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fr,this.environmentIntensity=1,this.environmentRotation=new Fr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ri=new le,ha=new le,bd=new le,pa=new le,Ts=new le,As=new le,c_=new le,Ed=new le,Td=new le,Ad=new le,Rd=new sn,Cd=new sn,wd=new sn;class wi{constructor(e=new le,i=new le,r=new le){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),Ri.subVectors(e,i),l.cross(Ri);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,r,l,c){Ri.subVectors(l,i),ha.subVectors(r,i),bd.subVectors(e,i);const d=Ri.dot(Ri),m=Ri.dot(ha),p=Ri.dot(bd),h=ha.dot(ha),v=ha.dot(bd),y=d*h-m*m;if(y===0)return c.set(0,0,0),null;const g=1/y,E=(h*p-m*v)*g,A=(d*v-m*p)*g;return c.set(1-E-A,A,E)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,pa)===null?!1:pa.x>=0&&pa.y>=0&&pa.x+pa.y<=1}static getInterpolation(e,i,r,l,c,d,m,p){return this.getBarycoord(e,i,r,l,pa)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,pa.x),p.addScaledVector(d,pa.y),p.addScaledVector(m,pa.z),p)}static getInterpolatedAttribute(e,i,r,l,c,d){return Rd.setScalar(0),Cd.setScalar(0),wd.setScalar(0),Rd.fromBufferAttribute(e,i),Cd.fromBufferAttribute(e,r),wd.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(Rd,c.x),d.addScaledVector(Cd,c.y),d.addScaledVector(wd,c.z),d}static isFrontFacing(e,i,r,l){return Ri.subVectors(r,i),ha.subVectors(e,i),Ri.cross(ha).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ri.subVectors(this.c,this.b),ha.subVectors(this.a,this.b),Ri.cross(ha).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return wi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,c){return wi.getInterpolation(e,this.a,this.b,this.c,i,r,l,c)}containsPoint(e){return wi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,c=this.c;let d,m;Ts.subVectors(l,r),As.subVectors(c,r),Ed.subVectors(e,r);const p=Ts.dot(Ed),h=As.dot(Ed);if(p<=0&&h<=0)return i.copy(r);Td.subVectors(e,l);const v=Ts.dot(Td),y=As.dot(Td);if(v>=0&&y<=v)return i.copy(l);const g=p*y-v*h;if(g<=0&&p>=0&&v<=0)return d=p/(p-v),i.copy(r).addScaledVector(Ts,d);Ad.subVectors(e,c);const E=Ts.dot(Ad),A=As.dot(Ad);if(A>=0&&E<=A)return i.copy(c);const D=E*h-p*A;if(D<=0&&h>=0&&A<=0)return m=h/(h-A),i.copy(r).addScaledVector(As,m);const M=v*A-E*y;if(M<=0&&y-v>=0&&E-A>=0)return c_.subVectors(c,l),m=(y-v)/(y-v+(E-A)),i.copy(l).addScaledVector(c_,m);const x=1/(M+D+g);return d=D*x,m=g*x,i.copy(r).addScaledVector(Ts,d).addScaledVector(As,m)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ko{constructor(e=new le(1/0,1/0,1/0),i=new le(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Ci.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Ci.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Ci.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let d=0,m=c.count;d<m;d++)e.isMesh===!0?e.getVertexPosition(d,Ci):Ci.fromBufferAttribute(c,d),Ci.applyMatrix4(e.matrixWorld),this.expandByPoint(Ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),mc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),mc.copy(r.boundingBox)),mc.applyMatrix4(e.matrixWorld),this.union(mc)}const l=e.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ci),Ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bo),gc.subVectors(this.max,Bo),Rs.subVectors(e.a,Bo),Cs.subVectors(e.b,Bo),ws.subVectors(e.c,Bo),er.subVectors(Cs,Rs),tr.subVectors(ws,Cs),Cr.subVectors(Rs,ws);let i=[0,-er.z,er.y,0,-tr.z,tr.y,0,-Cr.z,Cr.y,er.z,0,-er.x,tr.z,0,-tr.x,Cr.z,0,-Cr.x,-er.y,er.x,0,-tr.y,tr.x,0,-Cr.y,Cr.x,0];return!Dd(i,Rs,Cs,ws,gc)||(i=[1,0,0,0,1,0,0,0,1],!Dd(i,Rs,Cs,ws,gc))?!1:(_c.crossVectors(er,tr),i=[_c.x,_c.y,_c.z],Dd(i,Rs,Cs,ws,gc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ma[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ma[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ma[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ma[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ma[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ma[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ma[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ma[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ma),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ma=[new le,new le,new le,new le,new le,new le,new le,new le],Ci=new le,mc=new Ko,Rs=new le,Cs=new le,ws=new le,er=new le,tr=new le,Cr=new le,Bo=new le,gc=new le,_c=new le,wr=new le;function Dd(s,e,i,r,l){for(let c=0,d=s.length-3;c<=d;c+=3){wr.fromArray(s,c);const m=l.x*Math.abs(wr.x)+l.y*Math.abs(wr.y)+l.z*Math.abs(wr.z),p=e.dot(wr),h=i.dot(wr),v=r.dot(wr);if(Math.max(-Math.max(p,h,v),Math.min(p,h,v))>m)return!1}return!0}const _n=new le,vc=new Dt;let gy=0;class Si extends Gr{constructor(e,i,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gy++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=Zg,this.updateRanges=[],this.gpuType=Gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)vc.fromBufferAttribute(this,i),vc.applyMatrix3(e),this.setXY(i,vc.x,vc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)_n.fromBufferAttribute(this,i),_n.applyMatrix3(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)_n.fromBufferAttribute(this,i),_n.applyMatrix4(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)_n.fromBufferAttribute(this,i),_n.applyNormalMatrix(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)_n.fromBufferAttribute(this,i),_n.transformDirection(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=zo(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=jn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=zo(i,this.array)),i}setX(e,i){return this.normalized&&(i=jn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=zo(i,this.array)),i}setY(e,i){return this.normalized&&(i=jn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=zo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=jn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=zo(i,this.array)),i}setW(e,i){return this.normalized&&(i=jn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=jn(i,this.array),r=jn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=jn(i,this.array),r=jn(r,this.array),l=jn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e*=this.itemSize,this.normalized&&(i=jn(i,this.array),r=jn(r,this.array),l=jn(l,this.array),c=jn(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Zg&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class hv extends Si{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class pv extends Si{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class ya extends Si{constructor(e,i,r){super(new Float32Array(e),i,r)}}const _y=new Ko,Fo=new le,Ud=new le;class Qc{constructor(e=new le,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):_y.setFromPoints(e).getCenter(r);let l=0;for(let c=0,d=e.length;c<d;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fo.subVectors(e,this.center);const i=Fo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Fo,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ud.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fo.copy(e.center).add(Ud)),this.expandByPoint(Fo.copy(e.center).sub(Ud))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let vy=0;const gi=new un,Nd=new Yn,Ds=new le,oi=new Ko,Ho=new Ko,bn=new le;class Ui extends Gr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vy++}),this.uuid=Zo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(QS(e)?pv:hv)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new rt().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return gi.makeRotationFromQuaternion(e),this.applyMatrix4(gi),this}rotateX(e){return gi.makeRotationX(e),this.applyMatrix4(gi),this}rotateY(e){return gi.makeRotationY(e),this.applyMatrix4(gi),this}rotateZ(e){return gi.makeRotationZ(e),this.applyMatrix4(gi),this}translate(e,i,r){return gi.makeTranslation(e,i,r),this.applyMatrix4(gi),this}scale(e,i,r){return gi.makeScale(e,i,r),this.applyMatrix4(gi),this}lookAt(e){return Nd.lookAt(e),Nd.updateMatrix(),this.applyMatrix4(Nd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ds).negate(),this.translate(Ds.x,Ds.y,Ds.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=e.length;l<c;l++){const d=e[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new ya(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&nt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ko);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){bt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new le(-1/0,-1/0,-1/0),new le(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];oi.setFromBufferAttribute(c),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&bt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qc);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){bt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new le,1/0);return}if(e){const r=this.boundingSphere.center;if(oi.setFromBufferAttribute(e),i)for(let c=0,d=i.length;c<d;c++){const m=i[c];Ho.setFromBufferAttribute(m),this.morphTargetsRelative?(bn.addVectors(oi.min,Ho.min),oi.expandByPoint(bn),bn.addVectors(oi.max,Ho.max),oi.expandByPoint(bn)):(oi.expandByPoint(Ho.min),oi.expandByPoint(Ho.max))}oi.getCenter(r);let l=0;for(let c=0,d=e.count;c<d;c++)bn.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(bn));if(i)for(let c=0,d=i.length;c<d;c++){const m=i[c],p=this.morphTargetsRelative;for(let h=0,v=m.count;h<v;h++)bn.fromBufferAttribute(m,h),p&&(Ds.fromBufferAttribute(e,h),bn.add(Ds)),l=Math.max(l,r.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&bt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){bt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;let d=this.getAttribute("tangent");(d===void 0||d.count!==r.count)&&(d=new Si(new Float32Array(4*r.count),4),this.setAttribute("tangent",d));const m=[],p=[];for(let T=0;T<r.count;T++)m[T]=new le,p[T]=new le;const h=new le,v=new le,y=new le,g=new Dt,E=new Dt,A=new Dt,D=new le,M=new le;function x(T,O,q){h.fromBufferAttribute(r,T),v.fromBufferAttribute(r,O),y.fromBufferAttribute(r,q),g.fromBufferAttribute(c,T),E.fromBufferAttribute(c,O),A.fromBufferAttribute(c,q),v.sub(h),y.sub(h),E.sub(g),A.sub(g);const k=1/(E.x*A.y-A.x*E.y);isFinite(k)&&(D.copy(v).multiplyScalar(A.y).addScaledVector(y,-E.y).multiplyScalar(k),M.copy(y).multiplyScalar(E.x).addScaledVector(v,-A.x).multiplyScalar(k),m[T].add(D),m[O].add(D),m[q].add(D),p[T].add(M),p[O].add(M),p[q].add(M))}let B=this.groups;B.length===0&&(B=[{start:0,count:e.count}]);for(let T=0,O=B.length;T<O;++T){const q=B[T],k=q.start,Q=q.count;for(let he=k,me=k+Q;he<me;he+=3)x(e.getX(he+0),e.getX(he+1),e.getX(he+2))}const H=new le,w=new le,I=new le,U=new le;function z(T){I.fromBufferAttribute(l,T),U.copy(I);const O=m[T];H.copy(O),H.sub(I.multiplyScalar(I.dot(O))).normalize(),w.crossVectors(U,O);const k=w.dot(p[T])<0?-1:1;d.setXYZW(T,H.x,H.y,H.z,k)}for(let T=0,O=B.length;T<O;++T){const q=B[T],k=q.start,Q=q.count;for(let he=k,me=k+Q;he<me;he+=3)z(e.getX(he+0)),z(e.getX(he+1)),z(e.getX(he+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new Si(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let g=0,E=r.count;g<E;g++)r.setXYZ(g,0,0,0);const l=new le,c=new le,d=new le,m=new le,p=new le,h=new le,v=new le,y=new le;if(e)for(let g=0,E=e.count;g<E;g+=3){const A=e.getX(g+0),D=e.getX(g+1),M=e.getX(g+2);l.fromBufferAttribute(i,A),c.fromBufferAttribute(i,D),d.fromBufferAttribute(i,M),v.subVectors(d,c),y.subVectors(l,c),v.cross(y),m.fromBufferAttribute(r,A),p.fromBufferAttribute(r,D),h.fromBufferAttribute(r,M),m.add(v),p.add(v),h.add(v),r.setXYZ(A,m.x,m.y,m.z),r.setXYZ(D,p.x,p.y,p.z),r.setXYZ(M,h.x,h.y,h.z)}else for(let g=0,E=i.count;g<E;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),d.fromBufferAttribute(i,g+2),v.subVectors(d,c),y.subVectors(l,c),v.cross(y),r.setXYZ(g+0,v.x,v.y,v.z),r.setXYZ(g+1,v.x,v.y,v.z),r.setXYZ(g+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)bn.fromBufferAttribute(e,i),bn.normalize(),e.setXYZ(i,bn.x,bn.y,bn.z)}toNonIndexed(){function e(m,p){const h=m.array,v=m.itemSize,y=m.normalized,g=new h.constructor(p.length*v);let E=0,A=0;for(let D=0,M=p.length;D<M;D++){m.isInterleavedBufferAttribute?E=p[D]*m.data.stride+m.offset:E=p[D]*v;for(let x=0;x<v;x++)g[A++]=h[E++]}return new Si(g,v,y)}if(this.index===null)return nt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ui,r=this.index.array,l=this.attributes;for(const m in l){const p=l[m],h=e(p,r);i.setAttribute(m,h)}const c=this.morphAttributes;for(const m in c){const p=[],h=c[m];for(let v=0,y=h.length;v<y;v++){const g=h[v],E=e(g,r);p.push(E)}i.morphAttributes[m]=p}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let m=0,p=d.length;m<p;m++){const h=d[m];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const p=this.parameters;for(const h in p)p[h]!==void 0&&(e[h]=p[h]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const p in r){const h=r[p];e.data.attributes[p]=h.toJSON(e.data)}const l={};let c=!1;for(const p in this.morphAttributes){const h=this.morphAttributes[p],v=[];for(let y=0,g=h.length;y<g;y++){const E=h[y];v.push(E.toJSON(e.data))}v.length>0&&(l[p]=v,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const m=this.boundingSphere;return m!==null&&(e.data.boundingSphere=m.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const h in l){const v=l[h];this.setAttribute(h,v.clone(i))}const c=e.morphAttributes;for(const h in c){const v=[],y=c[h];for(let g=0,E=y.length;g<E;g++)v.push(y[g].clone(i));this.morphAttributes[h]=v}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let h=0,v=d.length;h<v;h++){const y=d[h];this.addGroup(y.start,y.count,y.materialIndex)}const m=e.boundingBox;m!==null&&(this.boundingBox=m.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let xy=0;class Qo extends Gr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xy++}),this.uuid=Zo(),this.name="",this.type="Material",this.blending=Os,this.side=or,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qd,this.blendDst=Yd,this.blendEquation=Lr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=Is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ss,this.stencilZFail=Ss,this.stencilZPass=Ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){nt(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){nt(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector2&&r&&r.isVector2||l&&l.isEuler&&r&&r.isEuler||l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Os&&(r.blending=this.blending),this.side!==or&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==qd&&(r.blendSrc=this.blendSrc),this.blendDst!==Yd&&(r.blendDst=this.blendDst),this.blendEquation!==Lr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Is&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yg&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ss&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ss&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ss&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const d=[];for(const m in c){const p=c[m];delete p.metadata,d.push(p)}return d}if(i){const c=l(e.textures),d=l(e.images);c.length>0&&(r.textures=c),d.length>0&&(r.images=d)}return r}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Et().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new Dt().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Dt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ga=new le,Ld=new le,xc=new le,nr=new le,Od=new le,Sc=new le,Pd=new le;class mv{constructor(e=new le,i=new le(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ga)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ga.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ga.copy(this.origin).addScaledVector(this.direction,i),ga.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Ld.copy(e).add(i).multiplyScalar(.5),xc.copy(i).sub(e).normalize(),nr.copy(this.origin).sub(Ld);const c=e.distanceTo(i)*.5,d=-this.direction.dot(xc),m=nr.dot(this.direction),p=-nr.dot(xc),h=nr.lengthSq(),v=Math.abs(1-d*d);let y,g,E,A;if(v>0)if(y=d*p-m,g=d*m-p,A=c*v,y>=0)if(g>=-A)if(g<=A){const D=1/v;y*=D,g*=D,E=y*(y+d*g+2*m)+g*(d*y+g+2*p)+h}else g=c,y=Math.max(0,-(d*g+m)),E=-y*y+g*(g+2*p)+h;else g=-c,y=Math.max(0,-(d*g+m)),E=-y*y+g*(g+2*p)+h;else g<=-A?(y=Math.max(0,-(-d*c+m)),g=y>0?-c:Math.min(Math.max(-c,-p),c),E=-y*y+g*(g+2*p)+h):g<=A?(y=0,g=Math.min(Math.max(-c,-p),c),E=g*(g+2*p)+h):(y=Math.max(0,-(d*c+m)),g=y>0?c:Math.min(Math.max(-c,-p),c),E=-y*y+g*(g+2*p)+h);else g=d>0?-c:c,y=Math.max(0,-(d*g+m)),E=-y*y+g*(g+2*p)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,y),l&&l.copy(Ld).addScaledVector(xc,g),E}intersectSphere(e,i){ga.subVectors(e.center,this.origin);const r=ga.dot(this.direction),l=ga.dot(ga)-r*r,c=e.radius*e.radius;if(l>c)return null;const d=Math.sqrt(c-l),m=r-d,p=r+d;return p<0?null:m<0?this.at(p,i):this.at(m,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,c,d,m,p;const h=1/this.direction.x,v=1/this.direction.y,y=1/this.direction.z,g=this.origin;return h>=0?(r=(e.min.x-g.x)*h,l=(e.max.x-g.x)*h):(r=(e.max.x-g.x)*h,l=(e.min.x-g.x)*h),v>=0?(c=(e.min.y-g.y)*v,d=(e.max.y-g.y)*v):(c=(e.max.y-g.y)*v,d=(e.min.y-g.y)*v),r>d||c>l||((c>r||isNaN(r))&&(r=c),(d<l||isNaN(l))&&(l=d),y>=0?(m=(e.min.z-g.z)*y,p=(e.max.z-g.z)*y):(m=(e.max.z-g.z)*y,p=(e.min.z-g.z)*y),r>p||m>l)||((m>r||r!==r)&&(r=m),(p<l||l!==l)&&(l=p),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,ga)!==null}intersectTriangle(e,i,r,l,c){Od.subVectors(i,e),Sc.subVectors(r,e),Pd.crossVectors(Od,Sc);let d=this.direction.dot(Pd),m;if(d>0){if(l)return null;m=1}else if(d<0)m=-1,d=-d;else return null;nr.subVectors(this.origin,e);const p=m*this.direction.dot(Sc.crossVectors(nr,Sc));if(p<0)return null;const h=m*this.direction.dot(Od.cross(nr));if(h<0||p+h>d)return null;const v=-m*nr.dot(Pd);return v<0?null:this.at(v/d,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gv extends Qo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fr,this.combine=q_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const u_=new un,Dr=new mv,yc=new Qc,f_=new le,Mc=new le,bc=new le,Ec=new le,zd=new le,Tc=new le,d_=new le,Ac=new le;class Ea extends Yn{constructor(e=new Ui,i=new gv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const m=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[m]=c}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const m=this.morphTargetInfluences;if(c&&m){Tc.set(0,0,0);for(let p=0,h=c.length;p<h;p++){const v=m[p],y=c[p];v!==0&&(zd.fromBufferAttribute(y,e),d?Tc.addScaledVector(zd,v):Tc.addScaledVector(zd.sub(i),v))}i.add(Tc)}return i}raycast(e,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),yc.copy(r.boundingSphere),yc.applyMatrix4(c),Dr.copy(e.ray).recast(e.near),!(yc.containsPoint(Dr.origin)===!1&&(Dr.intersectSphere(yc,f_)===null||Dr.origin.distanceToSquared(f_)>(e.far-e.near)**2))&&(u_.copy(c).invert(),Dr.copy(e.ray).applyMatrix4(u_),!(r.boundingBox!==null&&Dr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,Dr)))}_computeIntersections(e,i,r){let l;const c=this.geometry,d=this.material,m=c.index,p=c.attributes.position,h=c.attributes.uv,v=c.attributes.uv1,y=c.attributes.normal,g=c.groups,E=c.drawRange;if(m!==null)if(Array.isArray(d))for(let A=0,D=g.length;A<D;A++){const M=g[A],x=d[M.materialIndex],B=Math.max(M.start,E.start),H=Math.min(m.count,Math.min(M.start+M.count,E.start+E.count));for(let w=B,I=H;w<I;w+=3){const U=m.getX(w),z=m.getX(w+1),T=m.getX(w+2);l=Rc(this,x,e,r,h,v,y,U,z,T),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const A=Math.max(0,E.start),D=Math.min(m.count,E.start+E.count);for(let M=A,x=D;M<x;M+=3){const B=m.getX(M),H=m.getX(M+1),w=m.getX(M+2);l=Rc(this,d,e,r,h,v,y,B,H,w),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(d))for(let A=0,D=g.length;A<D;A++){const M=g[A],x=d[M.materialIndex],B=Math.max(M.start,E.start),H=Math.min(p.count,Math.min(M.start+M.count,E.start+E.count));for(let w=B,I=H;w<I;w+=3){const U=w,z=w+1,T=w+2;l=Rc(this,x,e,r,h,v,y,U,z,T),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const A=Math.max(0,E.start),D=Math.min(p.count,E.start+E.count);for(let M=A,x=D;M<x;M+=3){const B=M,H=M+1,w=M+2;l=Rc(this,d,e,r,h,v,y,B,H,w),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function Sy(s,e,i,r,l,c,d,m){let p;if(e.side===qn?p=r.intersectTriangle(d,c,l,!0,m):p=r.intersectTriangle(l,c,d,e.side===or,m),p===null)return null;Ac.copy(m),Ac.applyMatrix4(s.matrixWorld);const h=i.ray.origin.distanceTo(Ac);return h<i.near||h>i.far?null:{distance:h,point:Ac.clone(),object:s}}function Rc(s,e,i,r,l,c,d,m,p,h){s.getVertexPosition(m,Mc),s.getVertexPosition(p,bc),s.getVertexPosition(h,Ec);const v=Sy(s,e,i,r,Mc,bc,Ec,d_);if(v){const y=new le;wi.getBarycoord(d_,Mc,bc,Ec,y),l&&(v.uv=wi.getInterpolatedAttribute(l,m,p,h,y,new Dt)),c&&(v.uv1=wi.getInterpolatedAttribute(c,m,p,h,y,new Dt)),d&&(v.normal=wi.getInterpolatedAttribute(d,m,p,h,y,new le),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const g={a:m,b:p,c:h,normal:new le,materialIndex:0};wi.getNormal(Mc,bc,Ec,g.normal),v.face=g,v.barycoord=y}return v}class yy extends Bn{constructor(e=null,i=1,r=1,l,c,d,m,p,h=Dn,v=Dn,y,g){super(null,d,m,p,h,v,l,c,y,g),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Id=new le,My=new le,by=new rt;class Nr{constructor(e=new le(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=Id.subVectors(r,i).cross(My.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,r=!0){const l=e.delta(Id),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const d=-(e.start.dot(this.normal)+this.constant)/c;return r===!0&&(d<0||d>1)?null:i.copy(e.start).addScaledVector(l,d)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||by.getNormalMatrix(e),l=this.coplanarPoint(Id).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ur=new Qc,Ey=new Dt(.5,.5),Cc=new le;class _v{constructor(e=new Nr,i=new Nr,r=new Nr,l=new Nr,c=new Nr,d=new Nr){this.planes=[e,i,r,l,c,d]}set(e,i,r,l,c,d){const m=this.planes;return m[0].copy(e),m[1].copy(i),m[2].copy(r),m[3].copy(l),m[4].copy(c),m[5].copy(d),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Vi,r=!1){const l=this.planes,c=e.elements,d=c[0],m=c[1],p=c[2],h=c[3],v=c[4],y=c[5],g=c[6],E=c[7],A=c[8],D=c[9],M=c[10],x=c[11],B=c[12],H=c[13],w=c[14],I=c[15];if(l[0].setComponents(h-d,E-v,x-A,I-B).normalize(),l[1].setComponents(h+d,E+v,x+A,I+B).normalize(),l[2].setComponents(h+m,E+y,x+D,I+H).normalize(),l[3].setComponents(h-m,E-y,x-D,I-H).normalize(),r)l[4].setComponents(p,g,M,w).normalize(),l[5].setComponents(h-p,E-g,x-M,I-w).normalize();else if(l[4].setComponents(h-p,E-g,x-M,I-w).normalize(),i===Vi)l[5].setComponents(h+p,E+g,x+M,I+w).normalize();else if(i===qc)l[5].setComponents(p,g,M,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ur.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ur.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ur)}intersectsSprite(e){Ur.center.set(0,0,0);const i=Ey.distanceTo(e.center);return Ur.radius=.7071067811865476+i,Ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ur)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Cc.x=l.normal.x>0?e.max.x:e.min.x,Cc.y=l.normal.y>0?e.max.y:e.min.y,Cc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Cc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class vv extends Qo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const h_=new un,Ph=new mv,wc=new Qc,Dc=new le;class Ty extends Yn{constructor(e=new Ui,i=new vv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),wc.copy(r.boundingSphere),wc.applyMatrix4(l),wc.radius+=c,e.ray.intersectsSphere(wc)===!1)return;h_.copy(l).invert(),Ph.copy(e.ray).applyMatrix4(h_);const m=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=m*m,h=r.index,y=r.attributes.position;if(h!==null){const g=Math.max(0,d.start),E=Math.min(h.count,d.start+d.count);for(let A=g,D=E;A<D;A++){const M=h.getX(A);Dc.fromBufferAttribute(y,M),p_(Dc,M,p,l,e,i,this)}}else{const g=Math.max(0,d.start),E=Math.min(y.count,d.start+d.count);for(let A=g,D=E;A<D;A++)Dc.fromBufferAttribute(y,A),p_(Dc,A,p,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const m=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[m]=c}}}}}function p_(s,e,i,r,l,c,d){const m=Ph.distanceSqToPoint(s);if(m<i){const p=new le;Ph.closestPointToPoint(s,p),p.applyMatrix4(r);const h=l.ray.origin.distanceTo(p);if(h<l.near||h>l.far)return;c.push({distance:h,distanceToRay:Math.sqrt(m),point:p,index:e,face:null,faceIndex:null,barycoord:null,object:d})}}class xv extends Bn{constructor(e=[],i=Ir,r,l,c,d,m,p,h,v){super(e,i,r,l,c,d,m,p,h,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Fs extends Bn{constructor(e,i,r=Xi,l,c,d,m=Dn,p=Dn,h,v=ba,y=1){if(v!==ba&&v!==zr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:i,depth:y};super(g,l,c,d,m,p,v,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Yh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Ay extends Fs{constructor(e,i=Xi,r=Ir,l,c,d=Dn,m=Dn,p,h=ba){const v={width:e,height:e,depth:1},y=[v,v,v,v,v,v];super(e,e,i,r,l,c,d,m,p,h),this.image=y,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Sv extends Bn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Jo extends Ui{constructor(e=1,i=1,r=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:d};const m=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const p=[],h=[],v=[],y=[];let g=0,E=0;A("z","y","x",-1,-1,r,i,e,d,c,0),A("z","y","x",1,-1,r,i,-e,d,c,1),A("x","z","y",1,1,e,r,i,l,d,2),A("x","z","y",1,-1,e,r,-i,l,d,3),A("x","y","z",1,-1,e,i,r,l,c,4),A("x","y","z",-1,-1,e,i,-r,l,c,5),this.setIndex(p),this.setAttribute("position",new ya(h,3)),this.setAttribute("normal",new ya(v,3)),this.setAttribute("uv",new ya(y,2));function A(D,M,x,B,H,w,I,U,z,T,O){const q=w/z,k=I/T,Q=w/2,he=I/2,me=U/2,J=z+1,P=T+1;let G=0,te=0;const _e=new le;for(let Ee=0;Ee<P;Ee++){const L=Ee*k-he;for(let Z=0;Z<J;Z++){const be=Z*q-Q;_e[D]=be*B,_e[M]=L*H,_e[x]=me,h.push(_e.x,_e.y,_e.z),_e[D]=0,_e[M]=0,_e[x]=U>0?1:-1,v.push(_e.x,_e.y,_e.z),y.push(Z/z),y.push(1-Ee/T),G+=1}}for(let Ee=0;Ee<T;Ee++)for(let L=0;L<z;L++){const Z=g+L+J*Ee,be=g+L+J*(Ee+1),Ce=g+(L+1)+J*(Ee+1),ze=g+(L+1)+J*Ee;p.push(Z,be,ze),p.push(be,Ce,ze),te+=6}m.addGroup(E,te,O),E+=te,g+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Jc extends Ui{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const c=e/2,d=i/2,m=Math.floor(r),p=Math.floor(l),h=m+1,v=p+1,y=e/m,g=i/p,E=[],A=[],D=[],M=[];for(let x=0;x<v;x++){const B=x*g-d;for(let H=0;H<h;H++){const w=H*y-c;A.push(w,-B,0),D.push(0,0,1),M.push(H/m),M.push(1-x/p)}}for(let x=0;x<p;x++)for(let B=0;B<m;B++){const H=B+h*x,w=B+h*(x+1),I=B+1+h*(x+1),U=B+1+h*x;E.push(H,w,U),E.push(w,I,U)}this.setIndex(E),this.setAttribute("position",new ya(A,3)),this.setAttribute("normal",new ya(D,3)),this.setAttribute("uv",new ya(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jc(e.width,e.height,e.widthSegments,e.heightSegments)}}function Hs(s){const e={};for(const i in s){e[i]={};for(const r in s[i]){const l=s[i][r];if(m_(l))l.isRenderTargetTexture?(nt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone();else if(Array.isArray(l))if(m_(l[0])){const c=[];for(let d=0,m=l.length;d<m;d++)c[d]=l[d].clone();e[i][r]=c}else e[i][r]=l.slice();else e[i][r]=l}}return e}function In(s){const e={};for(let i=0;i<s.length;i++){const r=Hs(s[i]);for(const l in r)e[l]=r[l]}return e}function m_(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Ry(s){const e=[];for(let i=0;i<s.length;i++)e.push(s[i].clone());return e}function yv(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:yt.workingColorSpace}const Cy={clone:Hs,merge:In};var wy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ji extends Qo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wy,this.fragmentShader=Dy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hs(e.uniforms),this.uniformsGroups=Ry(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const r in e.uniforms){const l=e.uniforms[r];switch(this.uniforms[r]={},l.type){case"t":this.uniforms[r].value=i[l.value]||null;break;case"c":this.uniforms[r].value=new Et().setHex(l.value);break;case"v2":this.uniforms[r].value=new Dt().fromArray(l.value);break;case"v3":this.uniforms[r].value=new le().fromArray(l.value);break;case"v4":this.uniforms[r].value=new sn().fromArray(l.value);break;case"m3":this.uniforms[r].value=new rt().fromArray(l.value);break;case"m4":this.uniforms[r].value=new un().fromArray(l.value);break;default:this.uniforms[r].value=l.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Uy extends ji{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ny extends Qo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ly extends Qo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Uc=new le,Nc=new Gs,Bi=new le;class Mv extends Yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new un,this.projectionMatrix=new un,this.projectionMatrixInverse=new un,this.coordinateSystem=Vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Uc,Nc,Bi),Bi.x===1&&Bi.y===1&&Bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Uc,Nc,Bi.set(1,1,1)).invert()}updateWorldMatrix(e,i,r=!1){super.updateWorldMatrix(e,i,r),this.matrixWorld.decompose(Uc,Nc,Bi),Bi.x===1&&Bi.y===1&&Bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Uc,Nc,Bi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ir=new le,g_=new Dt,__=new Dt;class vi extends Mv{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Oh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(pd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Oh*2*Math.atan(Math.tan(pd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){ir.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ir.x,ir.y).multiplyScalar(-e/ir.z),ir.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(ir.x,ir.y).multiplyScalar(-e/ir.z)}getViewSize(e,i){return this.getViewBounds(e,g_,__),i.subVectors(__,g_)}setViewOffset(e,i,r,l,c,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(pd*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const p=d.fullWidth,h=d.fullHeight;c+=d.offsetX*l/p,i-=d.offsetY*r/h,l*=d.width/p,r*=d.height/h}const m=this.filmOffset;m!==0&&(c+=e*m/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class bv extends Mv{constructor(e=-1,i=1,r=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,d=r+e,m=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=h*this.view.offsetX,d=c+h*this.view.width,m-=v*this.view.offsetY,p=m-v*this.view.height}this.projectionMatrix.makeOrthographic(c,d,m,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Us=-90,Ns=1;class Oy extends Yn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new vi(Us,Ns,e,i);l.layers=this.layers,this.add(l);const c=new vi(Us,Ns,e,i);c.layers=this.layers,this.add(c);const d=new vi(Us,Ns,e,i);d.layers=this.layers,this.add(d);const m=new vi(Us,Ns,e,i);m.layers=this.layers,this.add(m);const p=new vi(Us,Ns,e,i);p.layers=this.layers,this.add(p);const h=new vi(Us,Ns,e,i);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,c,d,m,p]=i;for(const h of i)this.remove(h);if(e===Vi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),m.up.set(0,1,0),m.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===qc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),m.up.set(0,-1,0),m.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of i)this.add(h),h.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,d,m,p,h,v]=this.children,y=e.getRenderTarget(),g=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const D=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let M=!1;e.isWebGLRenderer===!0?M=e.state.buffers.depth.getReversed():M=e.reversedDepthBuffer,e.setRenderTarget(r,0,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(r,1,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),e.setRenderTarget(r,2,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(r,3,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(r,4,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),r.texture.generateMipmaps=D,e.setRenderTarget(r,5,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,v),e.setRenderTarget(y,g,E),e.xr.enabled=A,r.texture.needsPMREMUpdate=!0}}class Py extends vi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class zy{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,nt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}const $h=class $h{constructor(e,i,r,l){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,r,l)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let r=0;r<4;r++)this.elements[r]=e[r+i];return this}set(e,i,r,l){const c=this.elements;return c[0]=e,c[2]=i,c[1]=r,c[3]=l,this}};$h.prototype.isMatrix2=!0;let v_=$h;function x_(s,e,i,r){const l=Iy(r);switch(i){case sv:return s*e;case lv:return s*e/l.components*l.byteLength;case kh:return s*e/l.components*l.byteLength;case Br:return s*e*2/l.components*l.byteLength;case Wh:return s*e*2/l.components*l.byteLength;case ov:return s*e*3/l.components*l.byteLength;case Di:return s*e*4/l.components*l.byteLength;case Xh:return s*e*4/l.components*l.byteLength;case zc:case Ic:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Bc:case Fc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case rh:case oh:return Math.max(s,16)*Math.max(e,8)/4;case ah:case sh:return Math.max(s,8)*Math.max(e,8)/2;case lh:case ch:case fh:case dh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case uh:case kc:case hh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ph:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case mh:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case gh:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case _h:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case vh:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case xh:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Sh:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case yh:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Mh:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case bh:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Eh:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Th:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Ah:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Rh:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Ch:case wh:case Dh:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Uh:case Nh:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Wc:case Lh:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Iy(s){switch(s){case xi:case nv:return{byteLength:1,components:1};case jo:case iv:case Ma:return{byteLength:2,components:1};case Gh:case Vh:return{byteLength:2,components:4};case Xi:case Hh:case Gi:return{byteLength:4,components:1};case av:case rv:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fh}}));typeof window<"u"&&(window.__THREE__?nt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ev(){let s=null,e=!1,i=null,r=null;function l(c,d){i(c,d),r=s.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&s!==null&&(r=s.requestAnimationFrame(l),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function By(s){const e=new WeakMap;function i(m,p){const h=m.array,v=m.usage,y=h.byteLength,g=s.createBuffer();s.bindBuffer(p,g),s.bufferData(p,h,v),m.onUploadCallback();let E;if(h instanceof Float32Array)E=s.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)E=s.HALF_FLOAT;else if(h instanceof Uint16Array)m.isFloat16BufferAttribute?E=s.HALF_FLOAT:E=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)E=s.SHORT;else if(h instanceof Uint32Array)E=s.UNSIGNED_INT;else if(h instanceof Int32Array)E=s.INT;else if(h instanceof Int8Array)E=s.BYTE;else if(h instanceof Uint8Array)E=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)E=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:E,bytesPerElement:h.BYTES_PER_ELEMENT,version:m.version,size:y}}function r(m,p,h){const v=p.array,y=p.updateRanges;if(s.bindBuffer(h,m),y.length===0)s.bufferSubData(h,0,v);else{y.sort((E,A)=>E.start-A.start);let g=0;for(let E=1;E<y.length;E++){const A=y[g],D=y[E];D.start<=A.start+A.count+1?A.count=Math.max(A.count,D.start+D.count-A.start):(++g,y[g]=D)}y.length=g+1;for(let E=0,A=y.length;E<A;E++){const D=y[E];s.bufferSubData(h,D.start*v.BYTES_PER_ELEMENT,v,D.start,D.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(m){return m.isInterleavedBufferAttribute&&(m=m.data),e.get(m)}function c(m){m.isInterleavedBufferAttribute&&(m=m.data);const p=e.get(m);p&&(s.deleteBuffer(p.buffer),e.delete(m))}function d(m,p){if(m.isInterleavedBufferAttribute&&(m=m.data),m.isGLBufferAttribute){const v=e.get(m);(!v||v.version<m.version)&&e.set(m,{buffer:m.buffer,type:m.type,bytesPerElement:m.elementSize,version:m.version});return}const h=e.get(m);if(h===void 0)e.set(m,i(m,p));else if(h.version<m.version){if(h.size!==m.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,m,p),h.version=m.version}}return{get:l,remove:c,update:d}}var Fy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hy=`#ifdef USE_ALPHAHASH
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
#endif`,Gy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ky=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xy=`#ifdef USE_AOMAP
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
#endif`,jy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qy=`#ifdef USE_BATCHING
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
#endif`,Yy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ky=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Jy=`#ifdef USE_IRIDESCENCE
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
#endif`,$y=`#ifdef USE_BUMPMAP
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
#endif`,e2=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,t2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,n2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,i2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,a2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,r2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,s2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,o2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,l2=`#define PI 3.141592653589793
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
} // validated`,c2=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,u2=`vec3 transformedNormal = objectNormal;
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
#endif`,f2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,d2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,h2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,p2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,m2="gl_FragColor = linearToOutputTexel( gl_FragColor );",g2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_2=`#ifdef USE_ENVMAP
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
#endif`,v2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,x2=`#ifdef USE_ENVMAP
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
#endif`,S2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,y2=`#ifdef USE_ENVMAP
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
#endif`,M2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,b2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,E2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,T2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,A2=`#ifdef USE_GRADIENTMAP
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
}`,R2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,C2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,w2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,D2=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,U2=`#ifdef USE_ENVMAP
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
#endif`,N2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,L2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,O2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,P2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,z2=`PhysicalMaterial material;
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
#endif`,I2=`uniform sampler2D dfgLUT;
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
}`,B2=`
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
#endif`,F2=`#if defined( RE_IndirectDiffuse )
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
#endif`,H2=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,G2=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,V2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,k2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,W2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,X2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,j2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,q2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Y2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Z2=`#if defined( USE_POINTS_UV )
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
#endif`,K2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Q2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,J2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,eM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tM=`#ifdef USE_MORPHTARGETS
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
#endif`,nM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,aM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,rM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,lM=`#ifdef USE_NORMALMAP
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
#endif`,cM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,uM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,mM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_M=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,SM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,MM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,EM=`float getShadowMask() {
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
}`,TM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,AM=`#ifdef USE_SKINNING
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
#endif`,RM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,CM=`#ifdef USE_SKINNING
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
#endif`,wM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,DM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,UM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,NM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,LM=`#ifdef USE_TRANSMISSION
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
#endif`,OM=`#ifdef USE_TRANSMISSION
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
#endif`,PM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,IM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,BM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const FM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,HM=`uniform sampler2D t2D;
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
}`,GM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,kM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,WM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XM=`#include <common>
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
}`,jM=`#if DEPTH_PACKING == 3200
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
}`,qM=`#define DISTANCE
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
}`,YM=`#define DISTANCE
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
}`,ZM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,KM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QM=`uniform float scale;
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
}`,JM=`uniform vec3 diffuse;
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
}`,$M=`#include <common>
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
}`,eb=`uniform vec3 diffuse;
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
}`,tb=`#define LAMBERT
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
}`,nb=`#define LAMBERT
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
}`,ib=`#define MATCAP
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
}`,ab=`#define MATCAP
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
}`,rb=`#define NORMAL
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
}`,sb=`#define NORMAL
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
}`,ob=`#define PHONG
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
}`,lb=`#define PHONG
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
}`,cb=`#define STANDARD
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
}`,ub=`#define STANDARD
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
}`,fb=`#define TOON
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
}`,db=`#define TOON
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
}`,hb=`uniform float size;
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
}`,pb=`uniform vec3 diffuse;
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
}`,mb=`#include <common>
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
}`,gb=`uniform vec3 color;
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
}`,_b=`uniform float rotation;
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
}`,vb=`uniform vec3 diffuse;
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
}`,ct={alphahash_fragment:Fy,alphahash_pars_fragment:Hy,alphamap_fragment:Gy,alphamap_pars_fragment:Vy,alphatest_fragment:ky,alphatest_pars_fragment:Wy,aomap_fragment:Xy,aomap_pars_fragment:jy,batching_pars_vertex:qy,batching_vertex:Yy,begin_vertex:Zy,beginnormal_vertex:Ky,bsdfs:Qy,iridescence_fragment:Jy,bumpmap_pars_fragment:$y,clipping_planes_fragment:e2,clipping_planes_pars_fragment:t2,clipping_planes_pars_vertex:n2,clipping_planes_vertex:i2,color_fragment:a2,color_pars_fragment:r2,color_pars_vertex:s2,color_vertex:o2,common:l2,cube_uv_reflection_fragment:c2,defaultnormal_vertex:u2,displacementmap_pars_vertex:f2,displacementmap_vertex:d2,emissivemap_fragment:h2,emissivemap_pars_fragment:p2,colorspace_fragment:m2,colorspace_pars_fragment:g2,envmap_fragment:_2,envmap_common_pars_fragment:v2,envmap_pars_fragment:x2,envmap_pars_vertex:S2,envmap_physical_pars_fragment:U2,envmap_vertex:y2,fog_vertex:M2,fog_pars_vertex:b2,fog_fragment:E2,fog_pars_fragment:T2,gradientmap_pars_fragment:A2,lightmap_pars_fragment:R2,lights_lambert_fragment:C2,lights_lambert_pars_fragment:w2,lights_pars_begin:D2,lights_toon_fragment:N2,lights_toon_pars_fragment:L2,lights_phong_fragment:O2,lights_phong_pars_fragment:P2,lights_physical_fragment:z2,lights_physical_pars_fragment:I2,lights_fragment_begin:B2,lights_fragment_maps:F2,lights_fragment_end:H2,lightprobes_pars_fragment:G2,logdepthbuf_fragment:V2,logdepthbuf_pars_fragment:k2,logdepthbuf_pars_vertex:W2,logdepthbuf_vertex:X2,map_fragment:j2,map_pars_fragment:q2,map_particle_fragment:Y2,map_particle_pars_fragment:Z2,metalnessmap_fragment:K2,metalnessmap_pars_fragment:Q2,morphinstance_vertex:J2,morphcolor_vertex:$2,morphnormal_vertex:eM,morphtarget_pars_vertex:tM,morphtarget_vertex:nM,normal_fragment_begin:iM,normal_fragment_maps:aM,normal_pars_fragment:rM,normal_pars_vertex:sM,normal_vertex:oM,normalmap_pars_fragment:lM,clearcoat_normal_fragment_begin:cM,clearcoat_normal_fragment_maps:uM,clearcoat_pars_fragment:fM,iridescence_pars_fragment:dM,opaque_fragment:hM,packing:pM,premultiplied_alpha_fragment:mM,project_vertex:gM,dithering_fragment:_M,dithering_pars_fragment:vM,roughnessmap_fragment:xM,roughnessmap_pars_fragment:SM,shadowmap_pars_fragment:yM,shadowmap_pars_vertex:MM,shadowmap_vertex:bM,shadowmask_pars_fragment:EM,skinbase_vertex:TM,skinning_pars_vertex:AM,skinning_vertex:RM,skinnormal_vertex:CM,specularmap_fragment:wM,specularmap_pars_fragment:DM,tonemapping_fragment:UM,tonemapping_pars_fragment:NM,transmission_fragment:LM,transmission_pars_fragment:OM,uv_pars_fragment:PM,uv_pars_vertex:zM,uv_vertex:IM,worldpos_vertex:BM,background_vert:FM,background_frag:HM,backgroundCube_vert:GM,backgroundCube_frag:VM,cube_vert:kM,cube_frag:WM,depth_vert:XM,depth_frag:jM,distance_vert:qM,distance_frag:YM,equirect_vert:ZM,equirect_frag:KM,linedashed_vert:QM,linedashed_frag:JM,meshbasic_vert:$M,meshbasic_frag:eb,meshlambert_vert:tb,meshlambert_frag:nb,meshmatcap_vert:ib,meshmatcap_frag:ab,meshnormal_vert:rb,meshnormal_frag:sb,meshphong_vert:ob,meshphong_frag:lb,meshphysical_vert:cb,meshphysical_frag:ub,meshtoon_vert:fb,meshtoon_frag:db,points_vert:hb,points_frag:pb,shadow_vert:mb,shadow_frag:gb,sprite_vert:_b,sprite_frag:vb},Pe={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},envMapRotation:{value:new rt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new Dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new le},probesMax:{value:new le},probesResolution:{value:new le}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new Dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},Hi={basic:{uniforms:In([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:In([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Et(0)},envMapIntensity:{value:1}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:In([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:In([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:In([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new Et(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:In([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:In([Pe.points,Pe.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:In([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:In([Pe.common,Pe.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:In([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:In([Pe.sprite,Pe.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new rt}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distance:{uniforms:In([Pe.common,Pe.displacementmap,{referencePosition:{value:new le},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distance_vert,fragmentShader:ct.distance_frag},shadow:{uniforms:In([Pe.lights,Pe.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};Hi.physical={uniforms:In([Hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new Dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new Dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new Dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};const Lc={r:0,b:0,g:0},xb=new un,Tv=new rt;Tv.set(-1,0,0,0,1,0,0,0,1);function Sb(s,e,i,r,l,c){const d=new Et(0);let m=l===!0?0:1,p,h,v=null,y=0,g=null;function E(B){let H=B.isScene===!0?B.background:null;if(H&&H.isTexture){const w=B.backgroundBlurriness>0;H=e.get(H,w)}return H}function A(B){let H=!1;const w=E(B);w===null?M(d,m):w&&w.isColor&&(M(w,1),H=!0);const I=s.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,c):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(s.autoClear||H)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function D(B,H){const w=E(H);w&&(w.isCubeTexture||w.mapping===Kc)?(h===void 0&&(h=new Ea(new Jo(1,1,1),new ji({name:"BackgroundCubeMaterial",uniforms:Hs(Hi.backgroundCube.uniforms),vertexShader:Hi.backgroundCube.vertexShader,fragmentShader:Hi.backgroundCube.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,U,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=w,h.material.uniforms.backgroundBlurriness.value=H.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=H.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(xb.makeRotationFromEuler(H.backgroundRotation)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(Tv),h.material.toneMapped=yt.getTransfer(w.colorSpace)!==Bt,(v!==w||y!==w.version||g!==s.toneMapping)&&(h.material.needsUpdate=!0,v=w,y=w.version,g=s.toneMapping),h.layers.enableAll(),B.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(p===void 0&&(p=new Ea(new Jc(2,2),new ji({name:"BackgroundMaterial",uniforms:Hs(Hi.background.uniforms),vertexShader:Hi.background.vertexShader,fragmentShader:Hi.background.fragmentShader,side:or,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(p)),p.material.uniforms.t2D.value=w,p.material.uniforms.backgroundIntensity.value=H.backgroundIntensity,p.material.toneMapped=yt.getTransfer(w.colorSpace)!==Bt,w.matrixAutoUpdate===!0&&w.updateMatrix(),p.material.uniforms.uvTransform.value.copy(w.matrix),(v!==w||y!==w.version||g!==s.toneMapping)&&(p.material.needsUpdate=!0,v=w,y=w.version,g=s.toneMapping),p.layers.enableAll(),B.unshift(p,p.geometry,p.material,0,0,null))}function M(B,H){B.getRGB(Lc,yv(s)),i.buffers.color.setClear(Lc.r,Lc.g,Lc.b,H,c)}function x(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(B,H=1){d.set(B),m=H,M(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(B){m=B,M(d,m)},render:A,addToRenderList:D,dispose:x}}function yb(s,e){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=g(null);let c=l,d=!1;function m(k,Q,he,me,J){let P=!1;const G=y(k,me,he,Q);c!==G&&(c=G,h(c.object)),P=E(k,me,he,J),P&&A(k,me,he,J),J!==null&&e.update(J,s.ELEMENT_ARRAY_BUFFER),(P||d)&&(d=!1,w(k,Q,he,me),J!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function p(){return s.createVertexArray()}function h(k){return s.bindVertexArray(k)}function v(k){return s.deleteVertexArray(k)}function y(k,Q,he,me){const J=me.wireframe===!0;let P=r[Q.id];P===void 0&&(P={},r[Q.id]=P);const G=k.isInstancedMesh===!0?k.id:0;let te=P[G];te===void 0&&(te={},P[G]=te);let _e=te[he.id];_e===void 0&&(_e={},te[he.id]=_e);let Ee=_e[J];return Ee===void 0&&(Ee=g(p()),_e[J]=Ee),Ee}function g(k){const Q=[],he=[],me=[];for(let J=0;J<i;J++)Q[J]=0,he[J]=0,me[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Q,enabledAttributes:he,attributeDivisors:me,object:k,attributes:{},index:null}}function E(k,Q,he,me){const J=c.attributes,P=Q.attributes;let G=0;const te=he.getAttributes();for(const _e in te)if(te[_e].location>=0){const L=J[_e];let Z=P[_e];if(Z===void 0&&(_e==="instanceMatrix"&&k.instanceMatrix&&(Z=k.instanceMatrix),_e==="instanceColor"&&k.instanceColor&&(Z=k.instanceColor)),L===void 0||L.attribute!==Z||Z&&L.data!==Z.data)return!0;G++}return c.attributesNum!==G||c.index!==me}function A(k,Q,he,me){const J={},P=Q.attributes;let G=0;const te=he.getAttributes();for(const _e in te)if(te[_e].location>=0){let L=P[_e];L===void 0&&(_e==="instanceMatrix"&&k.instanceMatrix&&(L=k.instanceMatrix),_e==="instanceColor"&&k.instanceColor&&(L=k.instanceColor));const Z={};Z.attribute=L,L&&L.data&&(Z.data=L.data),J[_e]=Z,G++}c.attributes=J,c.attributesNum=G,c.index=me}function D(){const k=c.newAttributes;for(let Q=0,he=k.length;Q<he;Q++)k[Q]=0}function M(k){x(k,0)}function x(k,Q){const he=c.newAttributes,me=c.enabledAttributes,J=c.attributeDivisors;he[k]=1,me[k]===0&&(s.enableVertexAttribArray(k),me[k]=1),J[k]!==Q&&(s.vertexAttribDivisor(k,Q),J[k]=Q)}function B(){const k=c.newAttributes,Q=c.enabledAttributes;for(let he=0,me=Q.length;he<me;he++)Q[he]!==k[he]&&(s.disableVertexAttribArray(he),Q[he]=0)}function H(k,Q,he,me,J,P,G){G===!0?s.vertexAttribIPointer(k,Q,he,J,P):s.vertexAttribPointer(k,Q,he,me,J,P)}function w(k,Q,he,me){D();const J=me.attributes,P=he.getAttributes(),G=Q.defaultAttributeValues;for(const te in P){const _e=P[te];if(_e.location>=0){let Ee=J[te];if(Ee===void 0&&(te==="instanceMatrix"&&k.instanceMatrix&&(Ee=k.instanceMatrix),te==="instanceColor"&&k.instanceColor&&(Ee=k.instanceColor)),Ee!==void 0){const L=Ee.normalized,Z=Ee.itemSize,be=e.get(Ee);if(be===void 0)continue;const Ce=be.buffer,ze=be.type,ae=be.bytesPerElement,Se=ze===s.INT||ze===s.UNSIGNED_INT||Ee.gpuType===Hh;if(Ee.isInterleavedBufferAttribute){const Me=Ee.data,He=Me.stride,tt=Ee.offset;if(Me.isInstancedInterleavedBuffer){for(let Ke=0;Ke<_e.locationSize;Ke++)x(_e.location+Ke,Me.meshPerAttribute);k.isInstancedMesh!==!0&&me._maxInstanceCount===void 0&&(me._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let Ke=0;Ke<_e.locationSize;Ke++)M(_e.location+Ke);s.bindBuffer(s.ARRAY_BUFFER,Ce);for(let Ke=0;Ke<_e.locationSize;Ke++)H(_e.location+Ke,Z/_e.locationSize,ze,L,He*ae,(tt+Z/_e.locationSize*Ke)*ae,Se)}else{if(Ee.isInstancedBufferAttribute){for(let Me=0;Me<_e.locationSize;Me++)x(_e.location+Me,Ee.meshPerAttribute);k.isInstancedMesh!==!0&&me._maxInstanceCount===void 0&&(me._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let Me=0;Me<_e.locationSize;Me++)M(_e.location+Me);s.bindBuffer(s.ARRAY_BUFFER,Ce);for(let Me=0;Me<_e.locationSize;Me++)H(_e.location+Me,Z/_e.locationSize,ze,L,Z*ae,Z/_e.locationSize*Me*ae,Se)}}else if(G!==void 0){const L=G[te];if(L!==void 0)switch(L.length){case 2:s.vertexAttrib2fv(_e.location,L);break;case 3:s.vertexAttrib3fv(_e.location,L);break;case 4:s.vertexAttrib4fv(_e.location,L);break;default:s.vertexAttrib1fv(_e.location,L)}}}}B()}function I(){O();for(const k in r){const Q=r[k];for(const he in Q){const me=Q[he];for(const J in me){const P=me[J];for(const G in P)v(P[G].object),delete P[G];delete me[J]}}delete r[k]}}function U(k){if(r[k.id]===void 0)return;const Q=r[k.id];for(const he in Q){const me=Q[he];for(const J in me){const P=me[J];for(const G in P)v(P[G].object),delete P[G];delete me[J]}}delete r[k.id]}function z(k){for(const Q in r){const he=r[Q];for(const me in he){const J=he[me];if(J[k.id]===void 0)continue;const P=J[k.id];for(const G in P)v(P[G].object),delete P[G];delete J[k.id]}}}function T(k){for(const Q in r){const he=r[Q],me=k.isInstancedMesh===!0?k.id:0,J=he[me];if(J!==void 0){for(const P in J){const G=J[P];for(const te in G)v(G[te].object),delete G[te];delete J[P]}delete he[me],Object.keys(he).length===0&&delete r[Q]}}}function O(){q(),d=!0,c!==l&&(c=l,h(c.object))}function q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:m,reset:O,resetDefaultState:q,dispose:I,releaseStatesOfGeometry:U,releaseStatesOfObject:T,releaseStatesOfProgram:z,initAttributes:D,enableAttribute:M,disableUnusedAttributes:B}}function Mb(s,e,i){let r;function l(p){r=p}function c(p,h){s.drawArrays(r,p,h),i.update(h,r,1)}function d(p,h,v){v!==0&&(s.drawArraysInstanced(r,p,h,v),i.update(h,r,v))}function m(p,h,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,h,0,v);let g=0;for(let E=0;E<v;E++)g+=h[E];i.update(g,r,1)}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=m}function bb(s,e,i,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");l=s.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(z){return!(z!==Di&&r.convert(z)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function m(z){const T=z===Ma&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==xi&&r.convert(z)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==Gi&&!T)}function p(z){if(z==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp";const v=p(h);v!==h&&(nt("WebGLRenderer:",h,"not supported, using",v,"instead."),h=v);const y=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&g===!1&&nt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const E=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),D=s.getParameter(s.MAX_TEXTURE_SIZE),M=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),B=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),H=s.getParameter(s.MAX_VARYING_VECTORS),w=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),I=s.getParameter(s.MAX_SAMPLES),U=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:d,textureTypeReadable:m,precision:h,logarithmicDepthBuffer:y,reversedDepthBuffer:g,maxTextures:E,maxVertexTextures:A,maxTextureSize:D,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:B,maxVaryings:H,maxFragmentUniforms:w,maxSamples:I,samples:U}}function Eb(s){const e=this;let i=null,r=0,l=!1,c=!1;const d=new Nr,m=new rt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(y,g){const E=y.length!==0||g||r!==0||l;return l=g,r=y.length,E},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(y,g){i=v(y,g,0)},this.setState=function(y,g,E){const A=y.clippingPlanes,D=y.clipIntersection,M=y.clipShadows,x=s.get(y);if(!l||A===null||A.length===0||c&&!M)c?v(null):h();else{const B=c?0:r,H=B*4;let w=x.clippingState||null;p.value=w,w=v(A,g,H,E);for(let I=0;I!==H;++I)w[I]=i[I];x.clippingState=w,this.numIntersection=D?this.numPlanes:0,this.numPlanes+=B}};function h(){p.value!==i&&(p.value=i,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(y,g,E,A){const D=y!==null?y.length:0;let M=null;if(D!==0){if(M=p.value,A!==!0||M===null){const x=E+D*4,B=g.matrixWorldInverse;m.getNormalMatrix(B),(M===null||M.length<x)&&(M=new Float32Array(x));for(let H=0,w=E;H!==D;++H,w+=4)d.copy(y[H]).applyMatrix4(B,m),d.normal.toArray(M,w),M[w+3]=d.constant}p.value=M,p.needsUpdate=!0}return e.numPlanes=D,e.numIntersection=0,M}}const rr=4,S_=[.125,.215,.35,.446,.526,.582],Or=20,Tb=256,Go=new bv,y_=new Et;let Bd=null,Fd=0,Hd=0,Gd=!1;const Ab=new le;class M_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,c={}){const{size:d=256,position:m=Ab}=c;Bd=this._renderer.getRenderTarget(),Fd=this._renderer.getActiveCubeFace(),Hd=this._renderer.getActiveMipmapLevel(),Gd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,l,p,m),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=T_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=E_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Bd,Fd,Hd),this._renderer.xr.enabled=Gd,e.scissorTest=!1,Ls(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Ir||e.mapping===Bs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bd=this._renderer.getRenderTarget(),Fd=this._renderer.getActiveCubeFace(),Hd=this._renderer.getActiveMipmapLevel(),Gd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Pn,minFilter:Pn,generateMipmaps:!1,type:Ma,format:Di,colorSpace:Xc,depthBuffer:!1},l=b_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=b_(e,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Rb(c)),this._blurMaterial=wb(c,e,i),this._ggxMaterial=Cb(c,e,i)}return l}_compileMaterial(e){const i=new Ea(new Ui,e);this._renderer.compile(i,Go)}_sceneToCubeUV(e,i,r,l,c){const p=new vi(90,1,i,r),h=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],y=this._renderer,g=y.autoClear,E=y.toneMapping;y.getClearColor(y_),y.toneMapping=ki,y.autoClear=!1,y.state.buffers.depth.getReversed()&&(y.setRenderTarget(l),y.clearDepth(),y.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ea(new Jo,new gv({name:"PMREM.Background",side:qn,depthWrite:!1,depthTest:!1})));const D=this._backgroundBox,M=D.material;let x=!1;const B=e.background;B?B.isColor&&(M.color.copy(B),e.background=null,x=!0):(M.color.copy(y_),x=!0);for(let H=0;H<6;H++){const w=H%3;w===0?(p.up.set(0,h[H],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+v[H],c.y,c.z)):w===1?(p.up.set(0,0,h[H]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+v[H],c.z)):(p.up.set(0,h[H],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+v[H]));const I=this._cubeSize;Ls(l,w*I,H>2?I:0,I,I),y.setRenderTarget(l),x&&y.render(D,p),y.render(e,p)}y.toneMapping=E,y.autoClear=g,e.background=B}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Ir||e.mapping===Bs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=T_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=E_());const c=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=c;const m=c.uniforms;m.envMap.value=e;const p=this._cubeSize;Ls(i,0,0,3*p,2*p),r.setRenderTarget(i),r.render(d,Go)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,c=this._pingPongRenderTarget,d=this._ggxMaterial,m=this._lodMeshes[r];m.material=d;const p=d.uniforms,h=r/(this._lodMeshes.length-1),v=i/(this._lodMeshes.length-1),y=Math.sqrt(h*h-v*v),g=0+h*1.25,E=y*g,{_lodMax:A}=this,D=this._sizeLods[r],M=3*D*(r>A-rr?r-A+rr:0),x=4*(this._cubeSize-D);p.envMap.value=e.texture,p.roughness.value=E,p.mipInt.value=A-i,Ls(c,M,x,3*D,2*D),l.setRenderTarget(c),l.render(m,Go),p.envMap.value=c.texture,p.roughness.value=0,p.mipInt.value=A-r,Ls(e,M,x,3*D,2*D),l.setRenderTarget(e),l.render(m,Go)}_blur(e,i,r,l,c){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,r,l,"latitudinal",c),this._halfBlur(d,e,r,r,l,"longitudinal",c)}_halfBlur(e,i,r,l,c,d,m){const p=this._renderer,h=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&bt("blur direction must be either latitudinal or longitudinal!");const v=3,y=this._lodMeshes[l];y.material=h;const g=h.uniforms,E=this._sizeLods[r]-1,A=isFinite(c)?Math.PI/(2*E):2*Math.PI/(2*Or-1),D=c/A,M=isFinite(c)?1+Math.floor(v*D):Or;M>Or&&nt(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Or}`);const x=[];let B=0;for(let z=0;z<Or;++z){const T=z/D,O=Math.exp(-T*T/2);x.push(O),z===0?B+=O:z<M&&(B+=2*O)}for(let z=0;z<x.length;z++)x[z]=x[z]/B;g.envMap.value=e.texture,g.samples.value=M,g.weights.value=x,g.latitudinal.value=d==="latitudinal",m&&(g.poleAxis.value=m);const{_lodMax:H}=this;g.dTheta.value=A,g.mipInt.value=H-r;const w=this._sizeLods[l],I=3*w*(l>H-rr?l-H+rr:0),U=4*(this._cubeSize-w);Ls(i,I,U,3*w,2*w),p.setRenderTarget(i),p.render(y,Go)}}function Rb(s){const e=[],i=[],r=[];let l=s;const c=s-rr+1+S_.length;for(let d=0;d<c;d++){const m=Math.pow(2,l);e.push(m);let p=1/m;d>s-rr?p=S_[d-s+rr-1]:d===0&&(p=0),i.push(p);const h=1/(m-2),v=-h,y=1+h,g=[v,v,y,v,y,y,v,v,y,y,v,y],E=6,A=6,D=3,M=2,x=1,B=new Float32Array(D*A*E),H=new Float32Array(M*A*E),w=new Float32Array(x*A*E);for(let U=0;U<E;U++){const z=U%3*2/3-1,T=U>2?0:-1,O=[z,T,0,z+2/3,T,0,z+2/3,T+1,0,z,T,0,z+2/3,T+1,0,z,T+1,0];B.set(O,D*A*U),H.set(g,M*A*U);const q=[U,U,U,U,U,U];w.set(q,x*A*U)}const I=new Ui;I.setAttribute("position",new Si(B,D)),I.setAttribute("uv",new Si(H,M)),I.setAttribute("faceIndex",new Si(w,x)),r.push(new Ea(I,null)),l>rr&&l--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function b_(s,e,i){const r=new Wi(s,e,i);return r.texture.mapping=Kc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ls(s,e,i,r,l){s.viewport.set(e,i,r,l),s.scissor.set(e,i,r,l)}function Cb(s,e,i){return new ji({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Tb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:$c(),fragmentShader:`

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
		`,blending:xa,depthTest:!1,depthWrite:!1})}function wb(s,e,i){const r=new Float32Array(Or),l=new le(0,1,0);return new ji({name:"SphericalGaussianBlur",defines:{n:Or,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:$c(),fragmentShader:`

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
		`,blending:xa,depthTest:!1,depthWrite:!1})}function E_(){return new ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$c(),fragmentShader:`

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
		`,blending:xa,depthTest:!1,depthWrite:!1})}function T_(){return new ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$c(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xa,depthTest:!1,depthWrite:!1})}function $c(){return`

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
	`}class Av extends Wi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new xv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Jo(5,5,5),c=new ji({name:"CubemapFromEquirect",uniforms:Hs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:qn,blending:xa});c.uniforms.tEquirect.value=i;const d=new Ea(l,c),m=i.minFilter;return i.minFilter===Pr&&(i.minFilter=Pn),new Oy(1,10,this).update(e,d),i.minFilter=m,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const c=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,r,l);e.setRenderTarget(c)}}function Db(s){let e=new WeakMap,i=new WeakMap,r=null;function l(g,E=!1){return g==null?null:E?d(g):c(g)}function c(g){if(g&&g.isTexture){const E=g.mapping;if(E===fd||E===dd)if(e.has(g)){const A=e.get(g).texture;return m(A,g.mapping)}else{const A=g.image;if(A&&A.height>0){const D=new Av(A.height);return D.fromEquirectangularTexture(s,g),e.set(g,D),g.addEventListener("dispose",h),m(D.texture,g.mapping)}else return null}}return g}function d(g){if(g&&g.isTexture){const E=g.mapping,A=E===fd||E===dd,D=E===Ir||E===Bs;if(A||D){let M=i.get(g);const x=M!==void 0?M.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==x)return r===null&&(r=new M_(s)),M=A?r.fromEquirectangular(g,M):r.fromCubemap(g,M),M.texture.pmremVersion=g.pmremVersion,i.set(g,M),M.texture;if(M!==void 0)return M.texture;{const B=g.image;return A&&B&&B.height>0||D&&B&&p(B)?(r===null&&(r=new M_(s)),M=A?r.fromEquirectangular(g):r.fromCubemap(g),M.texture.pmremVersion=g.pmremVersion,i.set(g,M),g.addEventListener("dispose",v),M.texture):null}}}return g}function m(g,E){return E===fd?g.mapping=Ir:E===dd&&(g.mapping=Bs),g}function p(g){let E=0;const A=6;for(let D=0;D<A;D++)g[D]!==void 0&&E++;return E===A}function h(g){const E=g.target;E.removeEventListener("dispose",h);const A=e.get(E);A!==void 0&&(e.delete(E),A.dispose())}function v(g){const E=g.target;E.removeEventListener("dispose",v);const A=i.get(E);A!==void 0&&(i.delete(E),A.dispose())}function y(){e=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:l,dispose:y}}function Ub(s){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=s.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Ps("WebGLRenderer: "+r+" extension not supported."),l}}}function Nb(s,e,i,r){const l={},c=new WeakMap;function d(y){const g=y.target;g.index!==null&&e.remove(g.index);for(const A in g.attributes)e.remove(g.attributes[A]);g.removeEventListener("dispose",d),delete l[g.id];const E=c.get(g);E&&(e.remove(E),c.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function m(y,g){return l[g.id]===!0||(g.addEventListener("dispose",d),l[g.id]=!0,i.memory.geometries++),g}function p(y){const g=y.attributes;for(const E in g)e.update(g[E],s.ARRAY_BUFFER)}function h(y){const g=[],E=y.index,A=y.attributes.position;let D=0;if(A===void 0)return;if(E!==null){const B=E.array;D=E.version;for(let H=0,w=B.length;H<w;H+=3){const I=B[H+0],U=B[H+1],z=B[H+2];g.push(I,U,U,z,z,I)}}else{const B=A.array;D=A.version;for(let H=0,w=B.length/3-1;H<w;H+=3){const I=H+0,U=H+1,z=H+2;g.push(I,U,U,z,z,I)}}const M=new(A.count>=65535?pv:hv)(g,1);M.version=D;const x=c.get(y);x&&e.remove(x),c.set(y,M)}function v(y){const g=c.get(y);if(g){const E=y.index;E!==null&&g.version<E.version&&h(y)}else h(y);return c.get(y)}return{get:m,update:p,getWireframeAttribute:v}}function Lb(s,e,i){let r;function l(y){r=y}let c,d;function m(y){c=y.type,d=y.bytesPerElement}function p(y,g){s.drawElements(r,g,c,y*d),i.update(g,r,1)}function h(y,g,E){E!==0&&(s.drawElementsInstanced(r,g,c,y*d,E),i.update(g,r,E))}function v(y,g,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,c,y,0,E);let D=0;for(let M=0;M<E;M++)D+=g[M];i.update(D,r,1)}this.setMode=l,this.setIndex=m,this.render=p,this.renderInstances=h,this.renderMultiDraw=v}function Ob(s){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,d,m){switch(i.calls++,d){case s.TRIANGLES:i.triangles+=m*(c/3);break;case s.LINES:i.lines+=m*(c/2);break;case s.LINE_STRIP:i.lines+=m*(c-1);break;case s.LINE_LOOP:i.lines+=m*c;break;case s.POINTS:i.points+=m*c;break;default:bt("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function Pb(s,e,i){const r=new WeakMap,l=new sn;function c(d,m,p){const h=d.morphTargetInfluences,v=m.morphAttributes.position||m.morphAttributes.normal||m.morphAttributes.color,y=v!==void 0?v.length:0;let g=r.get(m);if(g===void 0||g.count!==y){let O=function(){z.dispose(),r.delete(m),m.removeEventListener("dispose",O)};g!==void 0&&g.texture.dispose();const E=m.morphAttributes.position!==void 0,A=m.morphAttributes.normal!==void 0,D=m.morphAttributes.color!==void 0,M=m.morphAttributes.position||[],x=m.morphAttributes.normal||[],B=m.morphAttributes.color||[];let H=0;E===!0&&(H=1),A===!0&&(H=2),D===!0&&(H=3);let w=m.attributes.position.count*H,I=1;w>e.maxTextureSize&&(I=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const U=new Float32Array(w*I*4*y),z=new uv(U,w,I,y);z.type=Gi,z.needsUpdate=!0;const T=H*4;for(let q=0;q<y;q++){const k=M[q],Q=x[q],he=B[q],me=w*I*4*q;for(let J=0;J<k.count;J++){const P=J*T;E===!0&&(l.fromBufferAttribute(k,J),U[me+P+0]=l.x,U[me+P+1]=l.y,U[me+P+2]=l.z,U[me+P+3]=0),A===!0&&(l.fromBufferAttribute(Q,J),U[me+P+4]=l.x,U[me+P+5]=l.y,U[me+P+6]=l.z,U[me+P+7]=0),D===!0&&(l.fromBufferAttribute(he,J),U[me+P+8]=l.x,U[me+P+9]=l.y,U[me+P+10]=l.z,U[me+P+11]=he.itemSize===4?l.w:1)}}g={count:y,texture:z,size:new Dt(w,I)},r.set(m,g),m.addEventListener("dispose",O)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",d.morphTexture,i);else{let E=0;for(let D=0;D<h.length;D++)E+=h[D];const A=m.morphTargetsRelative?1:1-E;p.getUniforms().setValue(s,"morphTargetBaseInfluence",A),p.getUniforms().setValue(s,"morphTargetInfluences",h)}p.getUniforms().setValue(s,"morphTargetsTexture",g.texture,i),p.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:c}}function zb(s,e,i,r,l){let c=new WeakMap;function d(h){const v=l.render.frame,y=h.geometry,g=e.get(h,y);if(c.get(g)!==v&&(e.update(g),c.set(g,v)),h.isInstancedMesh&&(h.hasEventListener("dispose",p)===!1&&h.addEventListener("dispose",p),c.get(h)!==v&&(i.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,s.ARRAY_BUFFER),c.set(h,v))),h.isSkinnedMesh){const E=h.skeleton;c.get(E)!==v&&(E.update(),c.set(E,v))}return g}function m(){c=new WeakMap}function p(h){const v=h.target;v.removeEventListener("dispose",p),r.releaseStatesOfObject(v),i.remove(v.instanceMatrix),v.instanceColor!==null&&i.remove(v.instanceColor)}return{update:d,dispose:m}}const Ib={[Y_]:"LINEAR_TONE_MAPPING",[Z_]:"REINHARD_TONE_MAPPING",[K_]:"CINEON_TONE_MAPPING",[Q_]:"ACES_FILMIC_TONE_MAPPING",[$_]:"AGX_TONE_MAPPING",[ev]:"NEUTRAL_TONE_MAPPING",[J_]:"CUSTOM_TONE_MAPPING"};function Bb(s,e,i,r,l,c){const d=new Wi(e,i,{type:s,depthBuffer:l,stencilBuffer:c,samples:r?4:0,depthTexture:l?new Fs(e,i):void 0}),m=new Wi(e,i,{type:Ma,depthBuffer:!1,stencilBuffer:!1}),p=new Ui;p.setAttribute("position",new ya([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new ya([0,2,0,0,2,0],2));const h=new Uy({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),v=new Ea(p,h),y=new bv(-1,1,1,-1,0,1);let g=null,E=null,A=!1,D,M=null,x=[],B=!1;this.setSize=function(H,w){d.setSize(H,w),m.setSize(H,w);for(let I=0;I<x.length;I++){const U=x[I];U.setSize&&U.setSize(H,w)}},this.setEffects=function(H){x=H,B=x.length>0&&x[0].isRenderPass===!0;const w=d.width,I=d.height;for(let U=0;U<x.length;U++){const z=x[U];z.setSize&&z.setSize(w,I)}},this.begin=function(H,w){if(A||H.toneMapping===ki&&x.length===0)return!1;if(M=w,w!==null){const I=w.width,U=w.height;(d.width!==I||d.height!==U)&&this.setSize(I,U)}return B===!1&&H.setRenderTarget(d),D=H.toneMapping,H.toneMapping=ki,!0},this.hasRenderPass=function(){return B},this.end=function(H,w){H.toneMapping=D,A=!0;let I=d,U=m;for(let z=0;z<x.length;z++){const T=x[z];if(T.enabled!==!1&&(T.render(H,U,I,w),T.needsSwap!==!1)){const O=I;I=U,U=O}}if(g!==H.outputColorSpace||E!==H.toneMapping){g=H.outputColorSpace,E=H.toneMapping,h.defines={},yt.getTransfer(g)===Bt&&(h.defines.SRGB_TRANSFER="");const z=Ib[E];z&&(h.defines[z]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=I.texture,H.setRenderTarget(M),H.render(v,y),M=null,A=!1},this.isCompositing=function(){return A},this.dispose=function(){d.depthTexture&&d.depthTexture.dispose(),d.dispose(),m.dispose(),p.dispose(),h.dispose()}}const Rv=new Bn,zh=new Fs(1,1),Cv=new uv,wv=new oy,Dv=new xv,A_=[],R_=[],C_=new Float32Array(16),w_=new Float32Array(9),D_=new Float32Array(4);function Vs(s,e,i){const r=s[0];if(r<=0||r>0)return s;const l=e*i;let c=A_[l];if(c===void 0&&(c=new Float32Array(l),A_[l]=c),e!==0){r.toArray(c,0);for(let d=1,m=0;d!==e;++d)m+=i,s[d].toArray(c,m)}return c}function Sn(s,e){if(s.length!==e.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==e[i])return!1;return!0}function yn(s,e){for(let i=0,r=e.length;i<r;i++)s[i]=e[i]}function eu(s,e){let i=R_[e];i===void 0&&(i=new Int32Array(e),R_[e]=i);for(let r=0;r!==e;++r)i[r]=s.allocateTextureUnit();return i}function Fb(s,e){const i=this.cache;i[0]!==e&&(s.uniform1f(this.addr,e),i[0]=e)}function Hb(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Sn(i,e))return;s.uniform2fv(this.addr,e),yn(i,e)}}function Gb(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Sn(i,e))return;s.uniform3fv(this.addr,e),yn(i,e)}}function Vb(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Sn(i,e))return;s.uniform4fv(this.addr,e),yn(i,e)}}function kb(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(Sn(i,e))return;s.uniformMatrix2fv(this.addr,!1,e),yn(i,e)}else{if(Sn(i,r))return;D_.set(r),s.uniformMatrix2fv(this.addr,!1,D_),yn(i,r)}}function Wb(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(Sn(i,e))return;s.uniformMatrix3fv(this.addr,!1,e),yn(i,e)}else{if(Sn(i,r))return;w_.set(r),s.uniformMatrix3fv(this.addr,!1,w_),yn(i,r)}}function Xb(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(Sn(i,e))return;s.uniformMatrix4fv(this.addr,!1,e),yn(i,e)}else{if(Sn(i,r))return;C_.set(r),s.uniformMatrix4fv(this.addr,!1,C_),yn(i,r)}}function jb(s,e){const i=this.cache;i[0]!==e&&(s.uniform1i(this.addr,e),i[0]=e)}function qb(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Sn(i,e))return;s.uniform2iv(this.addr,e),yn(i,e)}}function Yb(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Sn(i,e))return;s.uniform3iv(this.addr,e),yn(i,e)}}function Zb(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Sn(i,e))return;s.uniform4iv(this.addr,e),yn(i,e)}}function Kb(s,e){const i=this.cache;i[0]!==e&&(s.uniform1ui(this.addr,e),i[0]=e)}function Qb(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Sn(i,e))return;s.uniform2uiv(this.addr,e),yn(i,e)}}function Jb(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Sn(i,e))return;s.uniform3uiv(this.addr,e),yn(i,e)}}function $b(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Sn(i,e))return;s.uniform4uiv(this.addr,e),yn(i,e)}}function e3(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(zh.compareFunction=i.isReversedDepthBuffer()?qh:jh,c=zh):c=Rv,i.setTexture2D(e||c,l)}function t3(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||wv,l)}function n3(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||Dv,l)}function i3(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||Cv,l)}function a3(s){switch(s){case 5126:return Fb;case 35664:return Hb;case 35665:return Gb;case 35666:return Vb;case 35674:return kb;case 35675:return Wb;case 35676:return Xb;case 5124:case 35670:return jb;case 35667:case 35671:return qb;case 35668:case 35672:return Yb;case 35669:case 35673:return Zb;case 5125:return Kb;case 36294:return Qb;case 36295:return Jb;case 36296:return $b;case 35678:case 36198:case 36298:case 36306:case 35682:return e3;case 35679:case 36299:case 36307:return t3;case 35680:case 36300:case 36308:case 36293:return n3;case 36289:case 36303:case 36311:case 36292:return i3}}function r3(s,e){s.uniform1fv(this.addr,e)}function s3(s,e){const i=Vs(e,this.size,2);s.uniform2fv(this.addr,i)}function o3(s,e){const i=Vs(e,this.size,3);s.uniform3fv(this.addr,i)}function l3(s,e){const i=Vs(e,this.size,4);s.uniform4fv(this.addr,i)}function c3(s,e){const i=Vs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function u3(s,e){const i=Vs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function f3(s,e){const i=Vs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function d3(s,e){s.uniform1iv(this.addr,e)}function h3(s,e){s.uniform2iv(this.addr,e)}function p3(s,e){s.uniform3iv(this.addr,e)}function m3(s,e){s.uniform4iv(this.addr,e)}function g3(s,e){s.uniform1uiv(this.addr,e)}function _3(s,e){s.uniform2uiv(this.addr,e)}function v3(s,e){s.uniform3uiv(this.addr,e)}function x3(s,e){s.uniform4uiv(this.addr,e)}function S3(s,e,i){const r=this.cache,l=e.length,c=eu(i,l);Sn(r,c)||(s.uniform1iv(this.addr,c),yn(r,c));let d;this.type===s.SAMPLER_2D_SHADOW?d=zh:d=Rv;for(let m=0;m!==l;++m)i.setTexture2D(e[m]||d,c[m])}function y3(s,e,i){const r=this.cache,l=e.length,c=eu(i,l);Sn(r,c)||(s.uniform1iv(this.addr,c),yn(r,c));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||wv,c[d])}function M3(s,e,i){const r=this.cache,l=e.length,c=eu(i,l);Sn(r,c)||(s.uniform1iv(this.addr,c),yn(r,c));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||Dv,c[d])}function b3(s,e,i){const r=this.cache,l=e.length,c=eu(i,l);Sn(r,c)||(s.uniform1iv(this.addr,c),yn(r,c));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||Cv,c[d])}function E3(s){switch(s){case 5126:return r3;case 35664:return s3;case 35665:return o3;case 35666:return l3;case 35674:return c3;case 35675:return u3;case 35676:return f3;case 5124:case 35670:return d3;case 35667:case 35671:return h3;case 35668:case 35672:return p3;case 35669:case 35673:return m3;case 5125:return g3;case 36294:return _3;case 36295:return v3;case 36296:return x3;case 35678:case 36198:case 36298:case 36306:case 35682:return S3;case 35679:case 36299:case 36307:return y3;case 35680:case 36300:case 36308:case 36293:return M3;case 36289:case 36303:case 36311:case 36292:return b3}}class T3{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=a3(i.type)}}class A3{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=E3(i.type)}}class R3{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const m=l[c];m.setValue(e,i[m.id],r)}}}const Vd=/(\w+)(\])?(\[|\.)?/g;function U_(s,e){s.seq.push(e),s.map[e.id]=e}function C3(s,e,i){const r=s.name,l=r.length;for(Vd.lastIndex=0;;){const c=Vd.exec(r),d=Vd.lastIndex;let m=c[1];const p=c[2]==="]",h=c[3];if(p&&(m=m|0),h===void 0||h==="["&&d+2===l){U_(i,h===void 0?new T3(m,s,e):new A3(m,s,e));break}else{let y=i.map[m];y===void 0&&(y=new R3(m),U_(i,y)),i=y}}}class Hc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let d=0;d<r;++d){const m=e.getActiveUniform(i,d),p=e.getUniformLocation(i,m.name);C3(m,p,this)}const l=[],c=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(d):c.push(d);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let c=0,d=i.length;c!==d;++c){const m=i[c],p=r[m.id];p.needsUpdate!==!1&&m.setValue(e,p.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,c=e.length;l!==c;++l){const d=e[l];d.id in i&&r.push(d)}return r}}function N_(s,e,i){const r=s.createShader(e);return s.shaderSource(r,i),s.compileShader(r),r}const w3=37297;let D3=0;function U3(s,e){const i=s.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let d=l;d<c;d++){const m=d+1;r.push(`${m===e?">":" "} ${m}: ${i[d]}`)}return r.join(`
`)}const L_=new rt;function N3(s){yt._getMatrix(L_,yt.workingColorSpace,s);const e=`mat3( ${L_.elements.map(i=>i.toFixed(4))} )`;switch(yt.getTransfer(s)){case jc:return[e,"LinearTransferOETF"];case Bt:return[e,"sRGBTransferOETF"];default:return nt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function O_(s,e,i){const r=s.getShaderParameter(e,s.COMPILE_STATUS),c=(s.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const m=parseInt(d[1]);return i.toUpperCase()+`

`+c+`

`+U3(s.getShaderSource(e),m)}else return c}function L3(s,e){const i=N3(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const O3={[Y_]:"Linear",[Z_]:"Reinhard",[K_]:"Cineon",[Q_]:"ACESFilmic",[$_]:"AgX",[ev]:"Neutral",[J_]:"Custom"};function P3(s,e){const i=O3[e];return i===void 0?(nt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Oc=new le;function z3(){yt.getLuminanceCoefficients(Oc);const s=Oc.x.toFixed(4),e=Oc.y.toFixed(4),i=Oc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function I3(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wo).join(`
`)}function B3(s){const e=[];for(const i in s){const r=s[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function F3(s,e){const i={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(e,l),d=c.name;let m=1;c.type===s.FLOAT_MAT2&&(m=2),c.type===s.FLOAT_MAT3&&(m=3),c.type===s.FLOAT_MAT4&&(m=4),i[d]={type:c.type,location:s.getAttribLocation(e,d),locationSize:m}}return i}function Wo(s){return s!==""}function P_(s,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function z_(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const H3=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ih(s){return s.replace(H3,V3)}const G3=new Map;function V3(s,e){let i=ct[e];if(i===void 0){const r=G3.get(e);if(r!==void 0)i=ct[r],nt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Ih(i)}const k3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function I_(s){return s.replace(k3,W3)}function W3(s,e,i,r){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function B_(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const X3={[Pc]:"SHADOWMAP_TYPE_PCF",[ko]:"SHADOWMAP_TYPE_VSM"};function j3(s){return X3[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const q3={[Ir]:"ENVMAP_TYPE_CUBE",[Bs]:"ENVMAP_TYPE_CUBE",[Kc]:"ENVMAP_TYPE_CUBE_UV"};function Y3(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":q3[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const Z3={[Bs]:"ENVMAP_MODE_REFRACTION"};function K3(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Z3[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Q3={[q_]:"ENVMAP_BLENDING_MULTIPLY",[HS]:"ENVMAP_BLENDING_MIX",[GS]:"ENVMAP_BLENDING_ADD"};function J3(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Q3[s.combine]||"ENVMAP_BLENDING_NONE"}function $3(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function eE(s,e,i,r){const l=s.getContext(),c=i.defines;let d=i.vertexShader,m=i.fragmentShader;const p=j3(i),h=Y3(i),v=K3(i),y=J3(i),g=$3(i),E=I3(i),A=B3(c),D=l.createProgram();let M,x,B=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Wo).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Wo).join(`
`),x.length>0&&(x+=`
`)):(M=[B_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wo).join(`
`),x=[B_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+v:"",i.envMap?"#define "+y:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ki?"#define TONE_MAPPING":"",i.toneMapping!==ki?ct.tonemapping_pars_fragment:"",i.toneMapping!==ki?P3("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,L3("linearToOutputTexel",i.outputColorSpace),z3(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Wo).join(`
`)),d=Ih(d),d=P_(d,i),d=z_(d,i),m=Ih(m),m=P_(m,i),m=z_(m,i),d=I_(d),m=I_(m),i.isRawShaderMaterial!==!0&&(B=`#version 300 es
`,M=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",i.glslVersion===Kg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Kg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const H=B+M+d,w=B+x+m,I=N_(l,l.VERTEX_SHADER,H),U=N_(l,l.FRAGMENT_SHADER,w);l.attachShader(D,I),l.attachShader(D,U),i.index0AttributeName!==void 0?l.bindAttribLocation(D,0,i.index0AttributeName):i.hasPositionAttribute===!0&&l.bindAttribLocation(D,0,"position"),l.linkProgram(D);function z(k){if(s.debug.checkShaderErrors){const Q=l.getProgramInfoLog(D)||"",he=l.getShaderInfoLog(I)||"",me=l.getShaderInfoLog(U)||"",J=Q.trim(),P=he.trim(),G=me.trim();let te=!0,_e=!0;if(l.getProgramParameter(D,l.LINK_STATUS)===!1)if(te=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,D,I,U);else{const Ee=O_(l,I,"vertex"),L=O_(l,U,"fragment");bt("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(D,l.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+J+`
`+Ee+`
`+L)}else J!==""?nt("WebGLProgram: Program Info Log:",J):(P===""||G==="")&&(_e=!1);_e&&(k.diagnostics={runnable:te,programLog:J,vertexShader:{log:P,prefix:M},fragmentShader:{log:G,prefix:x}})}l.deleteShader(I),l.deleteShader(U),T=new Hc(l,D),O=F3(l,D)}let T;this.getUniforms=function(){return T===void 0&&z(this),T};let O;this.getAttributes=function(){return O===void 0&&z(this),O};let q=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return q===!1&&(q=l.getProgramParameter(D,w3)),q},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(D),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=D3++,this.cacheKey=e,this.usedTimes=1,this.program=D,this.vertexShader=I,this.fragmentShader=U,this}let tE=0;class nE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,r){const l=this._getShaderCacheForMaterial(e);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(r)===!1&&(l.add(r),r.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new iE(e),i.set(e,r)),r}}class iE{constructor(e){this.id=tE++,this.code=e,this.usedTimes=0}}function aE(s){return s===Br||s===kc||s===Wc}function rE(s,e,i,r,l,c){const d=new fv,m=new nE,p=new Set,h=[],v=new Map,y=r.logarithmicDepthBuffer;let g=r.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(T){return p.add(T),T===0?"uv":`uv${T}`}function D(T,O,q,k,Q,he){const me=k.fog,J=Q.geometry,P=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?k.environment:null,G=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,te=e.get(T.envMap||P,G),_e=te&&te.mapping===Kc?te.image.height:null,Ee=E[T.type];T.precision!==null&&(g=r.getMaxPrecision(T.precision),g!==T.precision&&nt("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const L=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Z=L!==void 0?L.length:0;let be=0;J.morphAttributes.position!==void 0&&(be=1),J.morphAttributes.normal!==void 0&&(be=2),J.morphAttributes.color!==void 0&&(be=3);let Ce,ze,ae,Se;if(Ee){const Ve=Hi[Ee];Ce=Ve.vertexShader,ze=Ve.fragmentShader}else{Ce=T.vertexShader,ze=T.fragmentShader;const Ve=m.getVertexShaderStage(T),Zt=m.getFragmentShaderStage(T);m.update(T,Ve,Zt),ae=Ve.id,Se=Zt.id}const Me=s.getRenderTarget(),He=s.state.buffers.depth.getReversed(),tt=Q.isInstancedMesh===!0,Ke=Q.isBatchedMesh===!0,jt=!!T.map,ut=!!T.matcap,vt=!!te,xt=!!T.aoMap,dt=!!T.lightMap,$t=!!T.bumpMap&&T.wireframe===!1,en=!!T.normalMap,tn=!!T.displacementMap,on=!!T.emissiveMap,Xt=!!T.metalnessMap,nn=!!T.roughnessMap,j=T.anisotropy>0,Ft=T.clearcoat>0,Ct=T.dispersion>0,N=T.iridescence>0,b=T.sheen>0,K=T.transmission>0,re=j&&!!T.anisotropyMap,fe=Ft&&!!T.clearcoatMap,Te=Ft&&!!T.clearcoatNormalMap,De=Ft&&!!T.clearcoatRoughnessMap,ue=N&&!!T.iridescenceMap,de=N&&!!T.iridescenceThicknessMap,Re=b&&!!T.sheenColorMap,Be=b&&!!T.sheenRoughnessMap,Le=!!T.specularMap,Ue=!!T.specularColorMap,Ze=!!T.specularIntensityMap,Qe=K&&!!T.transmissionMap,it=K&&!!T.thicknessMap,W=!!T.gradientMap,Ae=!!T.alphaMap,ge=T.alphaTest>0,we=!!T.alphaHash,Ie=!!T.extensions;let ye=ki;T.toneMapped&&(Me===null||Me.isXRRenderTarget===!0)&&(ye=s.toneMapping);const je={shaderID:Ee,shaderType:T.type,shaderName:T.name,vertexShader:Ce,fragmentShader:ze,defines:T.defines,customVertexShaderID:ae,customFragmentShaderID:Se,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:Ke,batchingColor:Ke&&Q._colorsTexture!==null,instancing:tt,instancingColor:tt&&Q.instanceColor!==null,instancingMorph:tt&&Q.morphTexture!==null,outputColorSpace:Me===null?s.outputColorSpace:Me.isXRRenderTarget===!0?Me.texture.colorSpace:yt.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:jt,matcap:ut,envMap:vt,envMapMode:vt&&te.mapping,envMapCubeUVHeight:_e,aoMap:xt,lightMap:dt,bumpMap:$t,normalMap:en,displacementMap:tn,emissiveMap:on,normalMapObjectSpace:en&&T.normalMapType===WS,normalMapTangentSpace:en&&T.normalMapType===qg,packedNormalMap:en&&T.normalMapType===qg&&aE(T.normalMap.format),metalnessMap:Xt,roughnessMap:nn,anisotropy:j,anisotropyMap:re,clearcoat:Ft,clearcoatMap:fe,clearcoatNormalMap:Te,clearcoatRoughnessMap:De,dispersion:Ct,iridescence:N,iridescenceMap:ue,iridescenceThicknessMap:de,sheen:b,sheenColorMap:Re,sheenRoughnessMap:Be,specularMap:Le,specularColorMap:Ue,specularIntensityMap:Ze,transmission:K,transmissionMap:Qe,thicknessMap:it,gradientMap:W,opaque:T.transparent===!1&&T.blending===Os&&T.alphaToCoverage===!1,alphaMap:Ae,alphaTest:ge,alphaHash:we,combine:T.combine,mapUv:jt&&A(T.map.channel),aoMapUv:xt&&A(T.aoMap.channel),lightMapUv:dt&&A(T.lightMap.channel),bumpMapUv:$t&&A(T.bumpMap.channel),normalMapUv:en&&A(T.normalMap.channel),displacementMapUv:tn&&A(T.displacementMap.channel),emissiveMapUv:on&&A(T.emissiveMap.channel),metalnessMapUv:Xt&&A(T.metalnessMap.channel),roughnessMapUv:nn&&A(T.roughnessMap.channel),anisotropyMapUv:re&&A(T.anisotropyMap.channel),clearcoatMapUv:fe&&A(T.clearcoatMap.channel),clearcoatNormalMapUv:Te&&A(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:De&&A(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&A(T.iridescenceMap.channel),iridescenceThicknessMapUv:de&&A(T.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&A(T.sheenColorMap.channel),sheenRoughnessMapUv:Be&&A(T.sheenRoughnessMap.channel),specularMapUv:Le&&A(T.specularMap.channel),specularColorMapUv:Ue&&A(T.specularColorMap.channel),specularIntensityMapUv:Ze&&A(T.specularIntensityMap.channel),transmissionMapUv:Qe&&A(T.transmissionMap.channel),thicknessMapUv:it&&A(T.thicknessMap.channel),alphaMapUv:Ae&&A(T.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(en||j),vertexNormals:!!J.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!J.attributes.uv&&(jt||Ae),fog:!!me,useFog:T.fog===!0,fogExp2:!!me&&me.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||J.attributes.normal===void 0&&en===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:y,reversedDepthBuffer:He,skinning:Q.isSkinnedMesh===!0,hasPositionAttribute:J.attributes.position!==void 0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:be,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numSpotLightMaps:O.spotLightMap.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numSpotLightShadowsWithMaps:O.numSpotLightShadowsWithMaps,numLightProbes:O.numLightProbes,numLightProbeGrids:he.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&q.length>0,shadowMapType:s.shadowMap.type,toneMapping:ye,decodeVideoTexture:jt&&T.map.isVideoTexture===!0&&yt.getTransfer(T.map.colorSpace)===Bt,decodeVideoTextureEmissive:on&&T.emissiveMap.isVideoTexture===!0&&yt.getTransfer(T.emissiveMap.colorSpace)===Bt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===_a,flipSided:T.side===qn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ie&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&T.extensions.multiDraw===!0||Ke)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return je.vertexUv1s=p.has(1),je.vertexUv2s=p.has(2),je.vertexUv3s=p.has(3),p.clear(),je}function M(T){const O=[];if(T.shaderID?O.push(T.shaderID):(O.push(T.customVertexShaderID),O.push(T.customFragmentShaderID)),T.defines!==void 0)for(const q in T.defines)O.push(q),O.push(T.defines[q]);return T.isRawShaderMaterial===!1&&(x(O,T),B(O,T),O.push(s.outputColorSpace)),O.push(T.customProgramCacheKey),O.join()}function x(T,O){T.push(O.precision),T.push(O.outputColorSpace),T.push(O.envMapMode),T.push(O.envMapCubeUVHeight),T.push(O.mapUv),T.push(O.alphaMapUv),T.push(O.lightMapUv),T.push(O.aoMapUv),T.push(O.bumpMapUv),T.push(O.normalMapUv),T.push(O.displacementMapUv),T.push(O.emissiveMapUv),T.push(O.metalnessMapUv),T.push(O.roughnessMapUv),T.push(O.anisotropyMapUv),T.push(O.clearcoatMapUv),T.push(O.clearcoatNormalMapUv),T.push(O.clearcoatRoughnessMapUv),T.push(O.iridescenceMapUv),T.push(O.iridescenceThicknessMapUv),T.push(O.sheenColorMapUv),T.push(O.sheenRoughnessMapUv),T.push(O.specularMapUv),T.push(O.specularColorMapUv),T.push(O.specularIntensityMapUv),T.push(O.transmissionMapUv),T.push(O.thicknessMapUv),T.push(O.combine),T.push(O.fogExp2),T.push(O.sizeAttenuation),T.push(O.morphTargetsCount),T.push(O.morphAttributeCount),T.push(O.numDirLights),T.push(O.numPointLights),T.push(O.numSpotLights),T.push(O.numSpotLightMaps),T.push(O.numHemiLights),T.push(O.numRectAreaLights),T.push(O.numDirLightShadows),T.push(O.numPointLightShadows),T.push(O.numSpotLightShadows),T.push(O.numSpotLightShadowsWithMaps),T.push(O.numLightProbes),T.push(O.shadowMapType),T.push(O.toneMapping),T.push(O.numClippingPlanes),T.push(O.numClipIntersection),T.push(O.depthPacking)}function B(T,O){d.disableAll(),O.instancing&&d.enable(0),O.instancingColor&&d.enable(1),O.instancingMorph&&d.enable(2),O.matcap&&d.enable(3),O.envMap&&d.enable(4),O.normalMapObjectSpace&&d.enable(5),O.normalMapTangentSpace&&d.enable(6),O.clearcoat&&d.enable(7),O.iridescence&&d.enable(8),O.alphaTest&&d.enable(9),O.vertexColors&&d.enable(10),O.vertexAlphas&&d.enable(11),O.vertexUv1s&&d.enable(12),O.vertexUv2s&&d.enable(13),O.vertexUv3s&&d.enable(14),O.vertexTangents&&d.enable(15),O.anisotropy&&d.enable(16),O.alphaHash&&d.enable(17),O.batching&&d.enable(18),O.dispersion&&d.enable(19),O.batchingColor&&d.enable(20),O.gradientMap&&d.enable(21),O.packedNormalMap&&d.enable(22),O.vertexNormals&&d.enable(23),T.push(d.mask),d.disableAll(),O.fog&&d.enable(0),O.useFog&&d.enable(1),O.flatShading&&d.enable(2),O.logarithmicDepthBuffer&&d.enable(3),O.reversedDepthBuffer&&d.enable(4),O.skinning&&d.enable(5),O.morphTargets&&d.enable(6),O.morphNormals&&d.enable(7),O.morphColors&&d.enable(8),O.premultipliedAlpha&&d.enable(9),O.shadowMapEnabled&&d.enable(10),O.doubleSided&&d.enable(11),O.flipSided&&d.enable(12),O.useDepthPacking&&d.enable(13),O.dithering&&d.enable(14),O.transmission&&d.enable(15),O.sheen&&d.enable(16),O.opaque&&d.enable(17),O.pointsUvs&&d.enable(18),O.decodeVideoTexture&&d.enable(19),O.decodeVideoTextureEmissive&&d.enable(20),O.alphaToCoverage&&d.enable(21),O.numLightProbeGrids>0&&d.enable(22),O.hasPositionAttribute&&d.enable(23),T.push(d.mask)}function H(T){const O=E[T.type];let q;if(O){const k=Hi[O];q=Cy.clone(k.uniforms)}else q=T.uniforms;return q}function w(T,O){let q=v.get(O);return q!==void 0?++q.usedTimes:(q=new eE(s,O,T,l),h.push(q),v.set(O,q)),q}function I(T){if(--T.usedTimes===0){const O=h.indexOf(T);h[O]=h[h.length-1],h.pop(),v.delete(T.cacheKey),T.destroy()}}function U(T){m.remove(T)}function z(){m.dispose()}return{getParameters:D,getProgramCacheKey:M,getUniforms:H,acquireProgram:w,releaseProgram:I,releaseShaderCache:U,programs:h,dispose:z}}function sE(){let s=new WeakMap;function e(d){return s.has(d)}function i(d){let m=s.get(d);return m===void 0&&(m={},s.set(d,m)),m}function r(d){s.delete(d)}function l(d,m,p){s.get(d)[m]=p}function c(){s=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:c}}function oE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function F_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function H_(){const s=[];let e=0;const i=[],r=[],l=[];function c(){e=0,i.length=0,r.length=0,l.length=0}function d(g){let E=0;return g.isInstancedMesh&&(E+=2),g.isSkinnedMesh&&(E+=1),E}function m(g,E,A,D,M,x){let B=s[e];return B===void 0?(B={id:g.id,object:g,geometry:E,material:A,materialVariant:d(g),groupOrder:D,renderOrder:g.renderOrder,z:M,group:x},s[e]=B):(B.id=g.id,B.object=g,B.geometry=E,B.material=A,B.materialVariant=d(g),B.groupOrder=D,B.renderOrder=g.renderOrder,B.z=M,B.group=x),e++,B}function p(g,E,A,D,M,x){const B=m(g,E,A,D,M,x);A.transmission>0?r.push(B):A.transparent===!0?l.push(B):i.push(B)}function h(g,E,A,D,M,x){const B=m(g,E,A,D,M,x);A.transmission>0?r.unshift(B):A.transparent===!0?l.unshift(B):i.unshift(B)}function v(g,E,A){i.length>1&&i.sort(g||oE),r.length>1&&r.sort(E||F_),l.length>1&&l.sort(E||F_),A&&(i.reverse(),r.reverse(),l.reverse())}function y(){for(let g=e,E=s.length;g<E;g++){const A=s[g];if(A.id===null)break;A.id=null,A.object=null,A.geometry=null,A.material=null,A.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:p,unshift:h,finish:y,sort:v}}function lE(){let s=new WeakMap;function e(r,l){const c=s.get(r);let d;return c===void 0?(d=new H_,s.set(r,[d])):l>=c.length?(d=new H_,c.push(d)):d=c[l],d}function i(){s=new WeakMap}return{get:e,dispose:i}}function cE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new le,color:new Et};break;case"SpotLight":i={position:new le,direction:new le,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new le,color:new Et,distance:0,decay:0};break;case"HemisphereLight":i={direction:new le,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":i={color:new Et,position:new le,halfWidth:new le,halfHeight:new le};break}return s[e.id]=i,i}}}function uE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=i,i}}}let fE=0;function dE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function hE(s){const e=new cE,i=uE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new le);const l=new le,c=new un,d=new un;function m(h){let v=0,y=0,g=0;for(let O=0;O<9;O++)r.probe[O].set(0,0,0);let E=0,A=0,D=0,M=0,x=0,B=0,H=0,w=0,I=0,U=0,z=0;h.sort(dE);for(let O=0,q=h.length;O<q;O++){const k=h[O],Q=k.color,he=k.intensity,me=k.distance;let J=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===Br?J=k.shadow.map.texture:J=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)v+=Q.r*he,y+=Q.g*he,g+=Q.b*he;else if(k.isLightProbe){for(let P=0;P<9;P++)r.probe[P].addScaledVector(k.sh.coefficients[P],he);z++}else if(k.isDirectionalLight){const P=e.get(k);if(P.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const G=k.shadow,te=i.get(k);te.shadowIntensity=G.intensity,te.shadowBias=G.bias,te.shadowNormalBias=G.normalBias,te.shadowRadius=G.radius,te.shadowMapSize=G.mapSize,r.directionalShadow[E]=te,r.directionalShadowMap[E]=J,r.directionalShadowMatrix[E]=k.shadow.matrix,B++}r.directional[E]=P,E++}else if(k.isSpotLight){const P=e.get(k);P.position.setFromMatrixPosition(k.matrixWorld),P.color.copy(Q).multiplyScalar(he),P.distance=me,P.coneCos=Math.cos(k.angle),P.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),P.decay=k.decay,r.spot[D]=P;const G=k.shadow;if(k.map&&(r.spotLightMap[I]=k.map,I++,G.updateMatrices(k),k.castShadow&&U++),r.spotLightMatrix[D]=G.matrix,k.castShadow){const te=i.get(k);te.shadowIntensity=G.intensity,te.shadowBias=G.bias,te.shadowNormalBias=G.normalBias,te.shadowRadius=G.radius,te.shadowMapSize=G.mapSize,r.spotShadow[D]=te,r.spotShadowMap[D]=J,w++}D++}else if(k.isRectAreaLight){const P=e.get(k);P.color.copy(Q).multiplyScalar(he),P.halfWidth.set(k.width*.5,0,0),P.halfHeight.set(0,k.height*.5,0),r.rectArea[M]=P,M++}else if(k.isPointLight){const P=e.get(k);if(P.color.copy(k.color).multiplyScalar(k.intensity),P.distance=k.distance,P.decay=k.decay,k.castShadow){const G=k.shadow,te=i.get(k);te.shadowIntensity=G.intensity,te.shadowBias=G.bias,te.shadowNormalBias=G.normalBias,te.shadowRadius=G.radius,te.shadowMapSize=G.mapSize,te.shadowCameraNear=G.camera.near,te.shadowCameraFar=G.camera.far,r.pointShadow[A]=te,r.pointShadowMap[A]=J,r.pointShadowMatrix[A]=k.shadow.matrix,H++}r.point[A]=P,A++}else if(k.isHemisphereLight){const P=e.get(k);P.skyColor.copy(k.color).multiplyScalar(he),P.groundColor.copy(k.groundColor).multiplyScalar(he),r.hemi[x]=P,x++}}M>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Pe.LTC_FLOAT_1,r.rectAreaLTC2=Pe.LTC_FLOAT_2):(r.rectAreaLTC1=Pe.LTC_HALF_1,r.rectAreaLTC2=Pe.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=y,r.ambient[2]=g;const T=r.hash;(T.directionalLength!==E||T.pointLength!==A||T.spotLength!==D||T.rectAreaLength!==M||T.hemiLength!==x||T.numDirectionalShadows!==B||T.numPointShadows!==H||T.numSpotShadows!==w||T.numSpotMaps!==I||T.numLightProbes!==z)&&(r.directional.length=E,r.spot.length=D,r.rectArea.length=M,r.point.length=A,r.hemi.length=x,r.directionalShadow.length=B,r.directionalShadowMap.length=B,r.pointShadow.length=H,r.pointShadowMap.length=H,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=B,r.pointShadowMatrix.length=H,r.spotLightMatrix.length=w+I-U,r.spotLightMap.length=I,r.numSpotLightShadowsWithMaps=U,r.numLightProbes=z,T.directionalLength=E,T.pointLength=A,T.spotLength=D,T.rectAreaLength=M,T.hemiLength=x,T.numDirectionalShadows=B,T.numPointShadows=H,T.numSpotShadows=w,T.numSpotMaps=I,T.numLightProbes=z,r.version=fE++)}function p(h,v){let y=0,g=0,E=0,A=0,D=0;const M=v.matrixWorldInverse;for(let x=0,B=h.length;x<B;x++){const H=h[x];if(H.isDirectionalLight){const w=r.directional[y];w.direction.setFromMatrixPosition(H.matrixWorld),l.setFromMatrixPosition(H.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(M),y++}else if(H.isSpotLight){const w=r.spot[E];w.position.setFromMatrixPosition(H.matrixWorld),w.position.applyMatrix4(M),w.direction.setFromMatrixPosition(H.matrixWorld),l.setFromMatrixPosition(H.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(M),E++}else if(H.isRectAreaLight){const w=r.rectArea[A];w.position.setFromMatrixPosition(H.matrixWorld),w.position.applyMatrix4(M),d.identity(),c.copy(H.matrixWorld),c.premultiply(M),d.extractRotation(c),w.halfWidth.set(H.width*.5,0,0),w.halfHeight.set(0,H.height*.5,0),w.halfWidth.applyMatrix4(d),w.halfHeight.applyMatrix4(d),A++}else if(H.isPointLight){const w=r.point[g];w.position.setFromMatrixPosition(H.matrixWorld),w.position.applyMatrix4(M),g++}else if(H.isHemisphereLight){const w=r.hemi[D];w.direction.setFromMatrixPosition(H.matrixWorld),w.direction.transformDirection(M),D++}}}return{setup:m,setupView:p,state:r}}function G_(s){const e=new hE(s),i=[],r=[],l=[];function c(g){y.camera=g,i.length=0,r.length=0,l.length=0}function d(g){i.push(g)}function m(g){r.push(g)}function p(g){l.push(g)}function h(){e.setup(i)}function v(g){e.setupView(i,g)}const y={lightsArray:i,shadowsArray:r,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:y,setupLights:h,setupLightsView:v,pushLight:d,pushShadow:m,pushLightProbeGrid:p}}function pE(s){let e=new WeakMap;function i(l,c=0){const d=e.get(l);let m;return d===void 0?(m=new G_(s),e.set(l,[m])):c>=d.length?(m=new G_(s),d.push(m)):m=d[c],m}function r(){e=new WeakMap}return{get:i,dispose:r}}const mE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gE=`uniform sampler2D shadow_pass;
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
}`,_E=[new le(1,0,0),new le(-1,0,0),new le(0,1,0),new le(0,-1,0),new le(0,0,1),new le(0,0,-1)],vE=[new le(0,-1,0),new le(0,-1,0),new le(0,0,1),new le(0,0,-1),new le(0,-1,0),new le(0,-1,0)],V_=new un,Vo=new le,kd=new le;function xE(s,e,i){let r=new _v;const l=new Dt,c=new Dt,d=new sn,m=new Ny,p=new Ly,h={},v=i.maxTextureSize,y={[or]:qn,[qn]:or,[_a]:_a},g=new ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Dt},radius:{value:4}},vertexShader:mE,fragmentShader:gE}),E=g.clone();E.defines.HORIZONTAL_PASS=1;const A=new Ui;A.setAttribute("position",new Si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const D=new Ea(A,g),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pc;let x=this.type;this.render=function(U,z,T){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||U.length===0)return;this.type===yS&&(nt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Pc);const O=s.getRenderTarget(),q=s.getActiveCubeFace(),k=s.getActiveMipmapLevel(),Q=s.state;Q.setBlending(xa),Q.buffers.depth.getReversed()===!0?Q.buffers.color.setClear(0,0,0,0):Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const he=x!==this.type;he&&z.traverse(function(me){me.material&&(Array.isArray(me.material)?me.material.forEach(J=>J.needsUpdate=!0):me.material.needsUpdate=!0)});for(let me=0,J=U.length;me<J;me++){const P=U[me],G=P.shadow;if(G===void 0){nt("WebGLShadowMap:",P,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;l.copy(G.mapSize);const te=G.getFrameExtents();l.multiply(te),c.copy(G.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/te.x),l.x=c.x*te.x,G.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/te.y),l.y=c.y*te.y,G.mapSize.y=c.y));const _e=s.state.buffers.depth.getReversed();if(G.camera._reversedDepth=_e,G.map===null||he===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===ko){if(P.isPointLight){nt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Wi(l.x,l.y,{format:Br,type:Ma,minFilter:Pn,magFilter:Pn,generateMipmaps:!1}),G.map.texture.name=P.name+".shadowMap",G.map.depthTexture=new Fs(l.x,l.y,Gi),G.map.depthTexture.name=P.name+".shadowMapDepth",G.map.depthTexture.format=ba,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Dn,G.map.depthTexture.magFilter=Dn}else P.isPointLight?(G.map=new Av(l.x),G.map.depthTexture=new Ay(l.x,Xi)):(G.map=new Wi(l.x,l.y),G.map.depthTexture=new Fs(l.x,l.y,Xi)),G.map.depthTexture.name=P.name+".shadowMap",G.map.depthTexture.format=ba,this.type===Pc?(G.map.depthTexture.compareFunction=_e?qh:jh,G.map.depthTexture.minFilter=Pn,G.map.depthTexture.magFilter=Pn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Dn,G.map.depthTexture.magFilter=Dn);G.camera.updateProjectionMatrix()}const Ee=G.map.isWebGLCubeRenderTarget?6:1;for(let L=0;L<Ee;L++){if(G.map.isWebGLCubeRenderTarget)s.setRenderTarget(G.map,L),s.clear();else{L===0&&(s.setRenderTarget(G.map),s.clear());const Z=G.getViewport(L);d.set(c.x*Z.x,c.y*Z.y,c.x*Z.z,c.y*Z.w),Q.viewport(d)}if(P.isPointLight){const Z=G.camera,be=G.matrix,Ce=P.distance||Z.far;Ce!==Z.far&&(Z.far=Ce,Z.updateProjectionMatrix()),Vo.setFromMatrixPosition(P.matrixWorld),Z.position.copy(Vo),kd.copy(Z.position),kd.add(_E[L]),Z.up.copy(vE[L]),Z.lookAt(kd),Z.updateMatrixWorld(),be.makeTranslation(-Vo.x,-Vo.y,-Vo.z),V_.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),G._frustum.setFromProjectionMatrix(V_,Z.coordinateSystem,Z.reversedDepth)}else G.updateMatrices(P);r=G.getFrustum(),w(z,T,G.camera,P,this.type)}G.isPointLightShadow!==!0&&this.type===ko&&B(G,T),G.needsUpdate=!1}x=this.type,M.needsUpdate=!1,s.setRenderTarget(O,q,k)};function B(U,z){const T=e.update(D);g.defines.VSM_SAMPLES!==U.blurSamples&&(g.defines.VSM_SAMPLES=U.blurSamples,E.defines.VSM_SAMPLES=U.blurSamples,g.needsUpdate=!0,E.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new Wi(l.x,l.y,{format:Br,type:Ma})),g.uniforms.shadow_pass.value=U.map.depthTexture,g.uniforms.resolution.value=U.mapSize,g.uniforms.radius.value=U.radius,s.setRenderTarget(U.mapPass),s.clear(),s.renderBufferDirect(z,null,T,g,D,null),E.uniforms.shadow_pass.value=U.mapPass.texture,E.uniforms.resolution.value=U.mapSize,E.uniforms.radius.value=U.radius,s.setRenderTarget(U.map),s.clear(),s.renderBufferDirect(z,null,T,E,D,null)}function H(U,z,T,O){let q=null;const k=T.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(k!==void 0)q=k;else if(q=T.isPointLight===!0?p:m,s.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const Q=q.uuid,he=z.uuid;let me=h[Q];me===void 0&&(me={},h[Q]=me);let J=me[he];J===void 0&&(J=q.clone(),me[he]=J,z.addEventListener("dispose",I)),q=J}if(q.visible=z.visible,q.wireframe=z.wireframe,O===ko?q.side=z.shadowSide!==null?z.shadowSide:z.side:q.side=z.shadowSide!==null?z.shadowSide:y[z.side],q.alphaMap=z.alphaMap,q.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,q.map=z.map,q.clipShadows=z.clipShadows,q.clippingPlanes=z.clippingPlanes,q.clipIntersection=z.clipIntersection,q.displacementMap=z.displacementMap,q.displacementScale=z.displacementScale,q.displacementBias=z.displacementBias,q.wireframeLinewidth=z.wireframeLinewidth,q.linewidth=z.linewidth,T.isPointLight===!0&&q.isMeshDistanceMaterial===!0){const Q=s.properties.get(q);Q.light=T}return q}function w(U,z,T,O,q){if(U.visible===!1)return;if(U.layers.test(z.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&q===ko)&&(!U.frustumCulled||r.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,U.matrixWorld);const he=e.update(U),me=U.material;if(Array.isArray(me)){const J=he.groups;for(let P=0,G=J.length;P<G;P++){const te=J[P],_e=me[te.materialIndex];if(_e&&_e.visible){const Ee=H(U,_e,O,q);U.onBeforeShadow(s,U,z,T,he,Ee,te),s.renderBufferDirect(T,null,he,Ee,U,te),U.onAfterShadow(s,U,z,T,he,Ee,te)}}}else if(me.visible){const J=H(U,me,O,q);U.onBeforeShadow(s,U,z,T,he,J,null),s.renderBufferDirect(T,null,he,J,U,null),U.onAfterShadow(s,U,z,T,he,J,null)}}const Q=U.children;for(let he=0,me=Q.length;he<me;he++)w(Q[he],z,T,O,q)}function I(U){U.target.removeEventListener("dispose",I);for(const T in h){const O=h[T],q=U.target.uuid;q in O&&(O[q].dispose(),delete O[q])}}}function SE(s,e){function i(){let W=!1;const Ae=new sn;let ge=null;const we=new sn(0,0,0,0);return{setMask:function(Ie){ge!==Ie&&!W&&(s.colorMask(Ie,Ie,Ie,Ie),ge=Ie)},setLocked:function(Ie){W=Ie},setClear:function(Ie,ye,je,Ve,Zt){Zt===!0&&(Ie*=Ve,ye*=Ve,je*=Ve),Ae.set(Ie,ye,je,Ve),we.equals(Ae)===!1&&(s.clearColor(Ie,ye,je,Ve),we.copy(Ae))},reset:function(){W=!1,ge=null,we.set(-1,0,0,0)}}}function r(){let W=!1,Ae=!1,ge=null,we=null,Ie=null;return{setReversed:function(ye){if(Ae!==ye){const je=e.get("EXT_clip_control");ye?je.clipControlEXT(je.LOWER_LEFT_EXT,je.ZERO_TO_ONE_EXT):je.clipControlEXT(je.LOWER_LEFT_EXT,je.NEGATIVE_ONE_TO_ONE_EXT),Ae=ye;const Ve=Ie;Ie=null,this.setClear(Ve)}},getReversed:function(){return Ae},setTest:function(ye){ye?Me(s.DEPTH_TEST):He(s.DEPTH_TEST)},setMask:function(ye){ge!==ye&&!W&&(s.depthMask(ye),ge=ye)},setFunc:function(ye){if(Ae&&(ye=ey[ye]),we!==ye){switch(ye){case Zd:s.depthFunc(s.NEVER);break;case Kd:s.depthFunc(s.ALWAYS);break;case Qd:s.depthFunc(s.LESS);break;case Is:s.depthFunc(s.LEQUAL);break;case Jd:s.depthFunc(s.EQUAL);break;case $d:s.depthFunc(s.GEQUAL);break;case eh:s.depthFunc(s.GREATER);break;case th:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}we=ye}},setLocked:function(ye){W=ye},setClear:function(ye){Ie!==ye&&(Ie=ye,Ae&&(ye=1-ye),s.clearDepth(ye))},reset:function(){W=!1,ge=null,we=null,Ie=null,Ae=!1}}}function l(){let W=!1,Ae=null,ge=null,we=null,Ie=null,ye=null,je=null,Ve=null,Zt=null;return{setTest:function(Nt){W||(Nt?Me(s.STENCIL_TEST):He(s.STENCIL_TEST))},setMask:function(Nt){Ae!==Nt&&!W&&(s.stencilMask(Nt),Ae=Nt)},setFunc:function(Nt,Zn,Kn){(ge!==Nt||we!==Zn||Ie!==Kn)&&(s.stencilFunc(Nt,Zn,Kn),ge=Nt,we=Zn,Ie=Kn)},setOp:function(Nt,Zn,Kn){(ye!==Nt||je!==Zn||Ve!==Kn)&&(s.stencilOp(Nt,Zn,Kn),ye=Nt,je=Zn,Ve=Kn)},setLocked:function(Nt){W=Nt},setClear:function(Nt){Zt!==Nt&&(s.clearStencil(Nt),Zt=Nt)},reset:function(){W=!1,Ae=null,ge=null,we=null,Ie=null,ye=null,je=null,Ve=null,Zt=null}}}const c=new i,d=new r,m=new l,p=new WeakMap,h=new WeakMap;let v={},y={},g={},E=new WeakMap,A=[],D=null,M=!1,x=null,B=null,H=null,w=null,I=null,U=null,z=null,T=new Et(0,0,0),O=0,q=!1,k=null,Q=null,he=null,me=null,J=null;const P=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,te=0;const _e=s.getParameter(s.VERSION);_e.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(_e)[1]),G=te>=1):_e.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(_e)[1]),G=te>=2);let Ee=null,L={};const Z=s.getParameter(s.SCISSOR_BOX),be=s.getParameter(s.VIEWPORT),Ce=new sn().fromArray(Z),ze=new sn().fromArray(be);function ae(W,Ae,ge,we){const Ie=new Uint8Array(4),ye=s.createTexture();s.bindTexture(W,ye),s.texParameteri(W,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(W,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let je=0;je<ge;je++)W===s.TEXTURE_3D||W===s.TEXTURE_2D_ARRAY?s.texImage3D(Ae,0,s.RGBA,1,1,we,0,s.RGBA,s.UNSIGNED_BYTE,Ie):s.texImage2D(Ae+je,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ie);return ye}const Se={};Se[s.TEXTURE_2D]=ae(s.TEXTURE_2D,s.TEXTURE_2D,1),Se[s.TEXTURE_CUBE_MAP]=ae(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[s.TEXTURE_2D_ARRAY]=ae(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Se[s.TEXTURE_3D]=ae(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),m.setClear(0),Me(s.DEPTH_TEST),d.setFunc(Is),$t(!1),en(Wg),Me(s.CULL_FACE),xt(xa);function Me(W){v[W]!==!0&&(s.enable(W),v[W]=!0)}function He(W){v[W]!==!1&&(s.disable(W),v[W]=!1)}function tt(W,Ae){return g[W]!==Ae?(s.bindFramebuffer(W,Ae),g[W]=Ae,W===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Ae),W===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Ae),!0):!1}function Ke(W,Ae){let ge=A,we=!1;if(W){ge=E.get(Ae),ge===void 0&&(ge=[],E.set(Ae,ge));const Ie=W.textures;if(ge.length!==Ie.length||ge[0]!==s.COLOR_ATTACHMENT0){for(let ye=0,je=Ie.length;ye<je;ye++)ge[ye]=s.COLOR_ATTACHMENT0+ye;ge.length=Ie.length,we=!0}}else ge[0]!==s.BACK&&(ge[0]=s.BACK,we=!0);we&&s.drawBuffers(ge)}function jt(W){return D!==W?(s.useProgram(W),D=W,!0):!1}const ut={[Lr]:s.FUNC_ADD,[bS]:s.FUNC_SUBTRACT,[ES]:s.FUNC_REVERSE_SUBTRACT};ut[TS]=s.MIN,ut[AS]=s.MAX;const vt={[RS]:s.ZERO,[CS]:s.ONE,[wS]:s.SRC_COLOR,[qd]:s.SRC_ALPHA,[PS]:s.SRC_ALPHA_SATURATE,[LS]:s.DST_COLOR,[US]:s.DST_ALPHA,[DS]:s.ONE_MINUS_SRC_COLOR,[Yd]:s.ONE_MINUS_SRC_ALPHA,[OS]:s.ONE_MINUS_DST_COLOR,[NS]:s.ONE_MINUS_DST_ALPHA,[zS]:s.CONSTANT_COLOR,[IS]:s.ONE_MINUS_CONSTANT_COLOR,[BS]:s.CONSTANT_ALPHA,[FS]:s.ONE_MINUS_CONSTANT_ALPHA};function xt(W,Ae,ge,we,Ie,ye,je,Ve,Zt,Nt){if(W===xa){M===!0&&(He(s.BLEND),M=!1);return}if(M===!1&&(Me(s.BLEND),M=!0),W!==MS){if(W!==x||Nt!==q){if((B!==Lr||I!==Lr)&&(s.blendEquation(s.FUNC_ADD),B=Lr,I=Lr),Nt)switch(W){case Os:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case jd:s.blendFunc(s.ONE,s.ONE);break;case Xg:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case jg:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:bt("WebGLState: Invalid blending: ",W);break}else switch(W){case Os:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case jd:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Xg:bt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case jg:bt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:bt("WebGLState: Invalid blending: ",W);break}H=null,w=null,U=null,z=null,T.set(0,0,0),O=0,x=W,q=Nt}return}Ie=Ie||Ae,ye=ye||ge,je=je||we,(Ae!==B||Ie!==I)&&(s.blendEquationSeparate(ut[Ae],ut[Ie]),B=Ae,I=Ie),(ge!==H||we!==w||ye!==U||je!==z)&&(s.blendFuncSeparate(vt[ge],vt[we],vt[ye],vt[je]),H=ge,w=we,U=ye,z=je),(Ve.equals(T)===!1||Zt!==O)&&(s.blendColor(Ve.r,Ve.g,Ve.b,Zt),T.copy(Ve),O=Zt),x=W,q=!1}function dt(W,Ae){W.side===_a?He(s.CULL_FACE):Me(s.CULL_FACE);let ge=W.side===qn;Ae&&(ge=!ge),$t(ge),W.blending===Os&&W.transparent===!1?xt(xa):xt(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),d.setFunc(W.depthFunc),d.setTest(W.depthTest),d.setMask(W.depthWrite),c.setMask(W.colorWrite);const we=W.stencilWrite;m.setTest(we),we&&(m.setMask(W.stencilWriteMask),m.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),m.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),on(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?Me(s.SAMPLE_ALPHA_TO_COVERAGE):He(s.SAMPLE_ALPHA_TO_COVERAGE)}function $t(W){k!==W&&(W?s.frontFace(s.CW):s.frontFace(s.CCW),k=W)}function en(W){W!==xS?(Me(s.CULL_FACE),W!==Q&&(W===Wg?s.cullFace(s.BACK):W===SS?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):He(s.CULL_FACE),Q=W}function tn(W){W!==he&&(G&&s.lineWidth(W),he=W)}function on(W,Ae,ge){W?(Me(s.POLYGON_OFFSET_FILL),(me!==Ae||J!==ge)&&(me=Ae,J=ge,d.getReversed()&&(Ae=-Ae),s.polygonOffset(Ae,ge))):He(s.POLYGON_OFFSET_FILL)}function Xt(W){W?Me(s.SCISSOR_TEST):He(s.SCISSOR_TEST)}function nn(W){W===void 0&&(W=s.TEXTURE0+P-1),Ee!==W&&(s.activeTexture(W),Ee=W)}function j(W,Ae,ge){ge===void 0&&(Ee===null?ge=s.TEXTURE0+P-1:ge=Ee);let we=L[ge];we===void 0&&(we={type:void 0,texture:void 0},L[ge]=we),(we.type!==W||we.texture!==Ae)&&(Ee!==ge&&(s.activeTexture(ge),Ee=ge),s.bindTexture(W,Ae||Se[W]),we.type=W,we.texture=Ae)}function Ft(){const W=L[Ee];W!==void 0&&W.type!==void 0&&(s.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function Ct(){try{s.compressedTexImage2D(...arguments)}catch(W){bt("WebGLState:",W)}}function N(){try{s.compressedTexImage3D(...arguments)}catch(W){bt("WebGLState:",W)}}function b(){try{s.texSubImage2D(...arguments)}catch(W){bt("WebGLState:",W)}}function K(){try{s.texSubImage3D(...arguments)}catch(W){bt("WebGLState:",W)}}function re(){try{s.compressedTexSubImage2D(...arguments)}catch(W){bt("WebGLState:",W)}}function fe(){try{s.compressedTexSubImage3D(...arguments)}catch(W){bt("WebGLState:",W)}}function Te(){try{s.texStorage2D(...arguments)}catch(W){bt("WebGLState:",W)}}function De(){try{s.texStorage3D(...arguments)}catch(W){bt("WebGLState:",W)}}function ue(){try{s.texImage2D(...arguments)}catch(W){bt("WebGLState:",W)}}function de(){try{s.texImage3D(...arguments)}catch(W){bt("WebGLState:",W)}}function Re(W){return y[W]!==void 0?y[W]:s.getParameter(W)}function Be(W,Ae){y[W]!==Ae&&(s.pixelStorei(W,Ae),y[W]=Ae)}function Le(W){Ce.equals(W)===!1&&(s.scissor(W.x,W.y,W.z,W.w),Ce.copy(W))}function Ue(W){ze.equals(W)===!1&&(s.viewport(W.x,W.y,W.z,W.w),ze.copy(W))}function Ze(W,Ae){let ge=h.get(Ae);ge===void 0&&(ge=new WeakMap,h.set(Ae,ge));let we=ge.get(W);we===void 0&&(we=s.getUniformBlockIndex(Ae,W.name),ge.set(W,we))}function Qe(W,Ae){const we=h.get(Ae).get(W);p.get(Ae)!==we&&(s.uniformBlockBinding(Ae,we,W.__bindingPointIndex),p.set(Ae,we))}function it(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),d.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),v={},y={},Ee=null,L={},g={},E=new WeakMap,A=[],D=null,M=!1,x=null,B=null,H=null,w=null,I=null,U=null,z=null,T=new Et(0,0,0),O=0,q=!1,k=null,Q=null,he=null,me=null,J=null,Ce.set(0,0,s.canvas.width,s.canvas.height),ze.set(0,0,s.canvas.width,s.canvas.height),c.reset(),d.reset(),m.reset()}return{buffers:{color:c,depth:d,stencil:m},enable:Me,disable:He,bindFramebuffer:tt,drawBuffers:Ke,useProgram:jt,setBlending:xt,setMaterial:dt,setFlipSided:$t,setCullFace:en,setLineWidth:tn,setPolygonOffset:on,setScissorTest:Xt,activeTexture:nn,bindTexture:j,unbindTexture:Ft,compressedTexImage2D:Ct,compressedTexImage3D:N,texImage2D:ue,texImage3D:de,pixelStorei:Be,getParameter:Re,updateUBOMapping:Ze,uniformBlockBinding:Qe,texStorage2D:Te,texStorage3D:De,texSubImage2D:b,texSubImage3D:K,compressedTexSubImage2D:re,compressedTexSubImage3D:fe,scissor:Le,viewport:Ue,reset:it}}function yE(s,e,i,r,l,c,d){const m=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Dt,v=new WeakMap,y=new Set;let g;const E=new WeakMap;let A=!1;try{A=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function D(N,b){return A?new OffscreenCanvas(N,b):Yc("canvas")}function M(N,b,K){let re=1;const fe=Ct(N);if((fe.width>K||fe.height>K)&&(re=K/Math.max(fe.width,fe.height)),re<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const Te=Math.floor(re*fe.width),De=Math.floor(re*fe.height);g===void 0&&(g=D(Te,De));const ue=b?D(Te,De):g;return ue.width=Te,ue.height=De,ue.getContext("2d").drawImage(N,0,0,Te,De),nt("WebGLRenderer: Texture has been resized from ("+fe.width+"x"+fe.height+") to ("+Te+"x"+De+")."),ue}else return"data"in N&&nt("WebGLRenderer: Image in DataTexture is too big ("+fe.width+"x"+fe.height+")."),N;return N}function x(N){return N.generateMipmaps}function B(N){s.generateMipmap(N)}function H(N){return N.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?s.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function w(N,b,K,re,fe,Te=!1){if(N!==null){if(s[N]!==void 0)return s[N];nt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let De;re&&(De=e.get("EXT_texture_norm16"),De||nt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ue=b;if(b===s.RED&&(K===s.FLOAT&&(ue=s.R32F),K===s.HALF_FLOAT&&(ue=s.R16F),K===s.UNSIGNED_BYTE&&(ue=s.R8),K===s.UNSIGNED_SHORT&&De&&(ue=De.R16_EXT),K===s.SHORT&&De&&(ue=De.R16_SNORM_EXT)),b===s.RED_INTEGER&&(K===s.UNSIGNED_BYTE&&(ue=s.R8UI),K===s.UNSIGNED_SHORT&&(ue=s.R16UI),K===s.UNSIGNED_INT&&(ue=s.R32UI),K===s.BYTE&&(ue=s.R8I),K===s.SHORT&&(ue=s.R16I),K===s.INT&&(ue=s.R32I)),b===s.RG&&(K===s.FLOAT&&(ue=s.RG32F),K===s.HALF_FLOAT&&(ue=s.RG16F),K===s.UNSIGNED_BYTE&&(ue=s.RG8),K===s.UNSIGNED_SHORT&&De&&(ue=De.RG16_EXT),K===s.SHORT&&De&&(ue=De.RG16_SNORM_EXT)),b===s.RG_INTEGER&&(K===s.UNSIGNED_BYTE&&(ue=s.RG8UI),K===s.UNSIGNED_SHORT&&(ue=s.RG16UI),K===s.UNSIGNED_INT&&(ue=s.RG32UI),K===s.BYTE&&(ue=s.RG8I),K===s.SHORT&&(ue=s.RG16I),K===s.INT&&(ue=s.RG32I)),b===s.RGB_INTEGER&&(K===s.UNSIGNED_BYTE&&(ue=s.RGB8UI),K===s.UNSIGNED_SHORT&&(ue=s.RGB16UI),K===s.UNSIGNED_INT&&(ue=s.RGB32UI),K===s.BYTE&&(ue=s.RGB8I),K===s.SHORT&&(ue=s.RGB16I),K===s.INT&&(ue=s.RGB32I)),b===s.RGBA_INTEGER&&(K===s.UNSIGNED_BYTE&&(ue=s.RGBA8UI),K===s.UNSIGNED_SHORT&&(ue=s.RGBA16UI),K===s.UNSIGNED_INT&&(ue=s.RGBA32UI),K===s.BYTE&&(ue=s.RGBA8I),K===s.SHORT&&(ue=s.RGBA16I),K===s.INT&&(ue=s.RGBA32I)),b===s.RGB&&(K===s.UNSIGNED_SHORT&&De&&(ue=De.RGB16_EXT),K===s.SHORT&&De&&(ue=De.RGB16_SNORM_EXT),K===s.UNSIGNED_INT_5_9_9_9_REV&&(ue=s.RGB9_E5),K===s.UNSIGNED_INT_10F_11F_11F_REV&&(ue=s.R11F_G11F_B10F)),b===s.RGBA){const de=Te?jc:yt.getTransfer(fe);K===s.FLOAT&&(ue=s.RGBA32F),K===s.HALF_FLOAT&&(ue=s.RGBA16F),K===s.UNSIGNED_BYTE&&(ue=de===Bt?s.SRGB8_ALPHA8:s.RGBA8),K===s.UNSIGNED_SHORT&&De&&(ue=De.RGBA16_EXT),K===s.SHORT&&De&&(ue=De.RGBA16_SNORM_EXT),K===s.UNSIGNED_SHORT_4_4_4_4&&(ue=s.RGBA4),K===s.UNSIGNED_SHORT_5_5_5_1&&(ue=s.RGB5_A1)}return(ue===s.R16F||ue===s.R32F||ue===s.RG16F||ue===s.RG32F||ue===s.RGBA16F||ue===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function I(N,b){let K;return N?b===null||b===Xi||b===qo?K=s.DEPTH24_STENCIL8:b===Gi?K=s.DEPTH32F_STENCIL8:b===jo&&(K=s.DEPTH24_STENCIL8,nt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Xi||b===qo?K=s.DEPTH_COMPONENT24:b===Gi?K=s.DEPTH_COMPONENT32F:b===jo&&(K=s.DEPTH_COMPONENT16),K}function U(N,b){return x(N)===!0||N.isFramebufferTexture&&N.minFilter!==Dn&&N.minFilter!==Pn?Math.log2(Math.max(b.width,b.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?b.mipmaps.length:1}function z(N){const b=N.target;b.removeEventListener("dispose",z),O(b),b.isVideoTexture&&v.delete(b),b.isHTMLTexture&&y.delete(b)}function T(N){const b=N.target;b.removeEventListener("dispose",T),k(b)}function O(N){const b=r.get(N);if(b.__webglInit===void 0)return;const K=N.source,re=E.get(K);if(re){const fe=re[b.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&q(N),Object.keys(re).length===0&&E.delete(K)}r.remove(N)}function q(N){const b=r.get(N);s.deleteTexture(b.__webglTexture);const K=N.source,re=E.get(K);delete re[b.__cacheKey],d.memory.textures--}function k(N){const b=r.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),r.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(b.__webglFramebuffer[re]))for(let fe=0;fe<b.__webglFramebuffer[re].length;fe++)s.deleteFramebuffer(b.__webglFramebuffer[re][fe]);else s.deleteFramebuffer(b.__webglFramebuffer[re]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[re])}else{if(Array.isArray(b.__webglFramebuffer))for(let re=0;re<b.__webglFramebuffer.length;re++)s.deleteFramebuffer(b.__webglFramebuffer[re]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let re=0;re<b.__webglColorRenderbuffer.length;re++)b.__webglColorRenderbuffer[re]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[re]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const K=N.textures;for(let re=0,fe=K.length;re<fe;re++){const Te=r.get(K[re]);Te.__webglTexture&&(s.deleteTexture(Te.__webglTexture),d.memory.textures--),r.remove(K[re])}r.remove(N)}let Q=0;function he(){Q=0}function me(){return Q}function J(N){Q=N}function P(){const N=Q;return N>=l.maxTextures&&nt("WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),Q+=1,N}function G(N){const b=[];return b.push(N.wrapS),b.push(N.wrapT),b.push(N.wrapR||0),b.push(N.magFilter),b.push(N.minFilter),b.push(N.anisotropy),b.push(N.internalFormat),b.push(N.format),b.push(N.type),b.push(N.generateMipmaps),b.push(N.premultiplyAlpha),b.push(N.flipY),b.push(N.unpackAlignment),b.push(N.colorSpace),b.join()}function te(N,b){const K=r.get(N);if(N.isVideoTexture&&j(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&K.__version!==N.version){const re=N.image;if(re===null)nt("WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)nt("WebGLRenderer: Texture marked for update but image is incomplete");else{He(K,N,b);return}}else N.isExternalTexture&&(K.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,K.__webglTexture,s.TEXTURE0+b)}function _e(N,b){const K=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&K.__version!==N.version){He(K,N,b);return}else N.isExternalTexture&&(K.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(s.TEXTURE_2D_ARRAY,K.__webglTexture,s.TEXTURE0+b)}function Ee(N,b){const K=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&K.__version!==N.version){He(K,N,b);return}i.bindTexture(s.TEXTURE_3D,K.__webglTexture,s.TEXTURE0+b)}function L(N,b){const K=r.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&K.__version!==N.version){tt(K,N,b);return}i.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture,s.TEXTURE0+b)}const Z={[nh]:s.REPEAT,[va]:s.CLAMP_TO_EDGE,[ih]:s.MIRRORED_REPEAT},be={[Dn]:s.NEAREST,[VS]:s.NEAREST_MIPMAP_NEAREST,[uc]:s.NEAREST_MIPMAP_LINEAR,[Pn]:s.LINEAR,[hd]:s.LINEAR_MIPMAP_NEAREST,[Pr]:s.LINEAR_MIPMAP_LINEAR},Ce={[XS]:s.NEVER,[KS]:s.ALWAYS,[jS]:s.LESS,[jh]:s.LEQUAL,[qS]:s.EQUAL,[qh]:s.GEQUAL,[YS]:s.GREATER,[ZS]:s.NOTEQUAL};function ze(N,b){if(b.type===Gi&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Pn||b.magFilter===hd||b.magFilter===uc||b.magFilter===Pr||b.minFilter===Pn||b.minFilter===hd||b.minFilter===uc||b.minFilter===Pr)&&nt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(N,s.TEXTURE_WRAP_S,Z[b.wrapS]),s.texParameteri(N,s.TEXTURE_WRAP_T,Z[b.wrapT]),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,Z[b.wrapR]),s.texParameteri(N,s.TEXTURE_MAG_FILTER,be[b.magFilter]),s.texParameteri(N,s.TEXTURE_MIN_FILTER,be[b.minFilter]),b.compareFunction&&(s.texParameteri(N,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(N,s.TEXTURE_COMPARE_FUNC,Ce[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Dn||b.minFilter!==uc&&b.minFilter!==Pr||b.type===Gi&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");s.texParameterf(N,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function ae(N,b){let K=!1;N.__webglInit===void 0&&(N.__webglInit=!0,b.addEventListener("dispose",z));const re=b.source;let fe=E.get(re);fe===void 0&&(fe={},E.set(re,fe));const Te=G(b);if(Te!==N.__cacheKey){fe[Te]===void 0&&(fe[Te]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,K=!0),fe[Te].usedTimes++;const De=fe[N.__cacheKey];De!==void 0&&(fe[N.__cacheKey].usedTimes--,De.usedTimes===0&&q(b)),N.__cacheKey=Te,N.__webglTexture=fe[Te].texture}return K}function Se(N,b,K){return Math.floor(Math.floor(N/K)/b)}function Me(N,b,K,re){const Te=N.updateRanges;if(Te.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,b.width,b.height,K,re,b.data);else{Te.sort((Be,Le)=>Be.start-Le.start);let De=0;for(let Be=1;Be<Te.length;Be++){const Le=Te[De],Ue=Te[Be],Ze=Le.start+Le.count,Qe=Se(Ue.start,b.width,4),it=Se(Le.start,b.width,4);Ue.start<=Ze+1&&Qe===it&&Se(Ue.start+Ue.count-1,b.width,4)===Qe?Le.count=Math.max(Le.count,Ue.start+Ue.count-Le.start):(++De,Te[De]=Ue)}Te.length=De+1;const ue=i.getParameter(s.UNPACK_ROW_LENGTH),de=i.getParameter(s.UNPACK_SKIP_PIXELS),Re=i.getParameter(s.UNPACK_SKIP_ROWS);i.pixelStorei(s.UNPACK_ROW_LENGTH,b.width);for(let Be=0,Le=Te.length;Be<Le;Be++){const Ue=Te[Be],Ze=Math.floor(Ue.start/4),Qe=Math.ceil(Ue.count/4),it=Ze%b.width,W=Math.floor(Ze/b.width),Ae=Qe,ge=1;i.pixelStorei(s.UNPACK_SKIP_PIXELS,it),i.pixelStorei(s.UNPACK_SKIP_ROWS,W),i.texSubImage2D(s.TEXTURE_2D,0,it,W,Ae,ge,K,re,b.data)}N.clearUpdateRanges(),i.pixelStorei(s.UNPACK_ROW_LENGTH,ue),i.pixelStorei(s.UNPACK_SKIP_PIXELS,de),i.pixelStorei(s.UNPACK_SKIP_ROWS,Re)}}function He(N,b,K){let re=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(re=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(re=s.TEXTURE_3D);const fe=ae(N,b),Te=b.source;i.bindTexture(re,N.__webglTexture,s.TEXTURE0+K);const De=r.get(Te);if(Te.version!==De.__version||fe===!0){if(i.activeTexture(s.TEXTURE0+K),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const ge=yt.getPrimaries(yt.workingColorSpace),we=b.colorSpace===ar?null:yt.getPrimaries(b.colorSpace),Ie=b.colorSpace===ar||ge===we?s.NONE:s.BROWSER_DEFAULT_WEBGL;i.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie)}i.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment);let de=M(b.image,!1,l.maxTextureSize);de=Ft(b,de);const Re=c.convert(b.format,b.colorSpace),Be=c.convert(b.type);let Le=w(b.internalFormat,Re,Be,b.normalized,b.colorSpace,b.isVideoTexture);ze(re,b);let Ue;const Ze=b.mipmaps,Qe=b.isVideoTexture!==!0,it=De.__version===void 0||fe===!0,W=Te.dataReady,Ae=U(b,de);if(b.isDepthTexture)Le=I(b.format===zr,b.type),it&&(Qe?i.texStorage2D(s.TEXTURE_2D,1,Le,de.width,de.height):i.texImage2D(s.TEXTURE_2D,0,Le,de.width,de.height,0,Re,Be,null));else if(b.isDataTexture)if(Ze.length>0){Qe&&it&&i.texStorage2D(s.TEXTURE_2D,Ae,Le,Ze[0].width,Ze[0].height);for(let ge=0,we=Ze.length;ge<we;ge++)Ue=Ze[ge],Qe?W&&i.texSubImage2D(s.TEXTURE_2D,ge,0,0,Ue.width,Ue.height,Re,Be,Ue.data):i.texImage2D(s.TEXTURE_2D,ge,Le,Ue.width,Ue.height,0,Re,Be,Ue.data);b.generateMipmaps=!1}else Qe?(it&&i.texStorage2D(s.TEXTURE_2D,Ae,Le,de.width,de.height),W&&Me(b,de,Re,Be)):i.texImage2D(s.TEXTURE_2D,0,Le,de.width,de.height,0,Re,Be,de.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Qe&&it&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ae,Le,Ze[0].width,Ze[0].height,de.depth);for(let ge=0,we=Ze.length;ge<we;ge++)if(Ue=Ze[ge],b.format!==Di)if(Re!==null)if(Qe){if(W)if(b.layerUpdates.size>0){const Ie=x_(Ue.width,Ue.height,b.format,b.type);for(const ye of b.layerUpdates){const je=Ue.data.subarray(ye*Ie/Ue.data.BYTES_PER_ELEMENT,(ye+1)*Ie/Ue.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ge,0,0,ye,Ue.width,Ue.height,1,Re,je)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ge,0,0,0,Ue.width,Ue.height,de.depth,Re,Ue.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ge,Le,Ue.width,Ue.height,de.depth,0,Ue.data,0,0);else nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Qe?W&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,ge,0,0,0,Ue.width,Ue.height,de.depth,Re,Be,Ue.data):i.texImage3D(s.TEXTURE_2D_ARRAY,ge,Le,Ue.width,Ue.height,de.depth,0,Re,Be,Ue.data)}else{Qe&&it&&i.texStorage2D(s.TEXTURE_2D,Ae,Le,Ze[0].width,Ze[0].height);for(let ge=0,we=Ze.length;ge<we;ge++)Ue=Ze[ge],b.format!==Di?Re!==null?Qe?W&&i.compressedTexSubImage2D(s.TEXTURE_2D,ge,0,0,Ue.width,Ue.height,Re,Ue.data):i.compressedTexImage2D(s.TEXTURE_2D,ge,Le,Ue.width,Ue.height,0,Ue.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qe?W&&i.texSubImage2D(s.TEXTURE_2D,ge,0,0,Ue.width,Ue.height,Re,Be,Ue.data):i.texImage2D(s.TEXTURE_2D,ge,Le,Ue.width,Ue.height,0,Re,Be,Ue.data)}else if(b.isDataArrayTexture)if(Qe){if(it&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ae,Le,de.width,de.height,de.depth),W)if(b.layerUpdates.size>0){const ge=x_(de.width,de.height,b.format,b.type);for(const we of b.layerUpdates){const Ie=de.data.subarray(we*ge/de.data.BYTES_PER_ELEMENT,(we+1)*ge/de.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,we,de.width,de.height,1,Re,Be,Ie)}b.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,Re,Be,de.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Le,de.width,de.height,de.depth,0,Re,Be,de.data);else if(b.isData3DTexture)Qe?(it&&i.texStorage3D(s.TEXTURE_3D,Ae,Le,de.width,de.height,de.depth),W&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,Re,Be,de.data)):i.texImage3D(s.TEXTURE_3D,0,Le,de.width,de.height,de.depth,0,Re,Be,de.data);else if(b.isFramebufferTexture){if(it)if(Qe)i.texStorage2D(s.TEXTURE_2D,Ae,Le,de.width,de.height);else{let ge=de.width,we=de.height;for(let Ie=0;Ie<Ae;Ie++)i.texImage2D(s.TEXTURE_2D,Ie,Le,ge,we,0,Re,Be,null),ge>>=1,we>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in s){const ge=s.canvas;if(ge.hasAttribute("layoutsubtree")||ge.setAttribute("layoutsubtree","true"),de.parentNode!==ge){ge.appendChild(de),y.add(b),ge.onpaint=we=>{const Ie=we.changedElements;for(const ye of y)Ie.includes(ye.image)&&(ye.needsUpdate=!0)},ge.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,de);else{const Ie=s.RGBA,ye=s.RGBA,je=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Ie,ye,je,de)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Ze.length>0){if(Qe&&it){const ge=Ct(Ze[0]);i.texStorage2D(s.TEXTURE_2D,Ae,Le,ge.width,ge.height)}for(let ge=0,we=Ze.length;ge<we;ge++)Ue=Ze[ge],Qe?W&&i.texSubImage2D(s.TEXTURE_2D,ge,0,0,Re,Be,Ue):i.texImage2D(s.TEXTURE_2D,ge,Le,Re,Be,Ue);b.generateMipmaps=!1}else if(Qe){if(it){const ge=Ct(de);i.texStorage2D(s.TEXTURE_2D,Ae,Le,ge.width,ge.height)}W&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Re,Be,de)}else i.texImage2D(s.TEXTURE_2D,0,Le,Re,Be,de);x(b)&&B(re),De.__version=Te.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function tt(N,b,K){if(b.image.length!==6)return;const re=ae(N,b),fe=b.source;i.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+K);const Te=r.get(fe);if(fe.version!==Te.__version||re===!0){i.activeTexture(s.TEXTURE0+K);const De=yt.getPrimaries(yt.workingColorSpace),ue=b.colorSpace===ar?null:yt.getPrimaries(b.colorSpace),de=b.colorSpace===ar||De===ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;i.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const Re=b.isCompressedTexture||b.image[0].isCompressedTexture,Be=b.image[0]&&b.image[0].isDataTexture,Le=[];for(let ye=0;ye<6;ye++)!Re&&!Be?Le[ye]=M(b.image[ye],!0,l.maxCubemapSize):Le[ye]=Be?b.image[ye].image:b.image[ye],Le[ye]=Ft(b,Le[ye]);const Ue=Le[0],Ze=c.convert(b.format,b.colorSpace),Qe=c.convert(b.type),it=w(b.internalFormat,Ze,Qe,b.normalized,b.colorSpace),W=b.isVideoTexture!==!0,Ae=Te.__version===void 0||re===!0,ge=fe.dataReady;let we=U(b,Ue);ze(s.TEXTURE_CUBE_MAP,b);let Ie;if(Re){W&&Ae&&i.texStorage2D(s.TEXTURE_CUBE_MAP,we,it,Ue.width,Ue.height);for(let ye=0;ye<6;ye++){Ie=Le[ye].mipmaps;for(let je=0;je<Ie.length;je++){const Ve=Ie[je];b.format!==Di?Ze!==null?W?ge&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,je,0,0,Ve.width,Ve.height,Ze,Ve.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,je,it,Ve.width,Ve.height,0,Ve.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?ge&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,je,0,0,Ve.width,Ve.height,Ze,Qe,Ve.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,je,it,Ve.width,Ve.height,0,Ze,Qe,Ve.data)}}}else{if(Ie=b.mipmaps,W&&Ae){Ie.length>0&&we++;const ye=Ct(Le[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,we,it,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(Be){W?ge&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Le[ye].width,Le[ye].height,Ze,Qe,Le[ye].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,it,Le[ye].width,Le[ye].height,0,Ze,Qe,Le[ye].data);for(let je=0;je<Ie.length;je++){const Zt=Ie[je].image[ye].image;W?ge&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,je+1,0,0,Zt.width,Zt.height,Ze,Qe,Zt.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,je+1,it,Zt.width,Zt.height,0,Ze,Qe,Zt.data)}}else{W?ge&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Ze,Qe,Le[ye]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,it,Ze,Qe,Le[ye]);for(let je=0;je<Ie.length;je++){const Ve=Ie[je];W?ge&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,je+1,0,0,Ze,Qe,Ve.image[ye]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,je+1,it,Ze,Qe,Ve.image[ye])}}}x(b)&&B(s.TEXTURE_CUBE_MAP),Te.__version=fe.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function Ke(N,b,K,re,fe,Te){const De=c.convert(K.format,K.colorSpace),ue=c.convert(K.type),de=w(K.internalFormat,De,ue,K.normalized,K.colorSpace),Re=r.get(b),Be=r.get(K);if(Be.__renderTarget=b,!Re.__hasExternalTextures){const Le=Math.max(1,b.width>>Te),Ue=Math.max(1,b.height>>Te);fe===s.TEXTURE_3D||fe===s.TEXTURE_2D_ARRAY?i.texImage3D(fe,Te,de,Le,Ue,b.depth,0,De,ue,null):i.texImage2D(fe,Te,de,Le,Ue,0,De,ue,null)}i.bindFramebuffer(s.FRAMEBUFFER,N),nn(b)?m.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,re,fe,Be.__webglTexture,0,Xt(b)):(fe===s.TEXTURE_2D||fe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,re,fe,Be.__webglTexture,Te),i.bindFramebuffer(s.FRAMEBUFFER,null)}function jt(N,b,K){if(s.bindRenderbuffer(s.RENDERBUFFER,N),b.depthBuffer){const re=b.depthTexture,fe=re&&re.isDepthTexture?re.type:null,Te=I(b.stencilBuffer,fe),De=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;nn(b)?m.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Xt(b),Te,b.width,b.height):K?s.renderbufferStorageMultisample(s.RENDERBUFFER,Xt(b),Te,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,Te,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,De,s.RENDERBUFFER,N)}else{const re=b.textures;for(let fe=0;fe<re.length;fe++){const Te=re[fe],De=c.convert(Te.format,Te.colorSpace),ue=c.convert(Te.type),de=w(Te.internalFormat,De,ue,Te.normalized,Te.colorSpace);nn(b)?m.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Xt(b),de,b.width,b.height):K?s.renderbufferStorageMultisample(s.RENDERBUFFER,Xt(b),de,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,de,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ut(N,b,K){const re=b.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(s.FRAMEBUFFER,N),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const fe=r.get(b.depthTexture);if(fe.__renderTarget=b,(!fe.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),re){if(fe.__webglInit===void 0&&(fe.__webglInit=!0,b.depthTexture.addEventListener("dispose",z)),fe.__webglTexture===void 0){fe.__webglTexture=s.createTexture(),i.bindTexture(s.TEXTURE_CUBE_MAP,fe.__webglTexture),ze(s.TEXTURE_CUBE_MAP,b.depthTexture);const Re=c.convert(b.depthTexture.format),Be=c.convert(b.depthTexture.type);let Le;b.depthTexture.format===ba?Le=s.DEPTH_COMPONENT24:b.depthTexture.format===zr&&(Le=s.DEPTH24_STENCIL8);for(let Ue=0;Ue<6;Ue++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0,Le,b.width,b.height,0,Re,Be,null)}}else te(b.depthTexture,0);const Te=fe.__webglTexture,De=Xt(b),ue=re?s.TEXTURE_CUBE_MAP_POSITIVE_X+K:s.TEXTURE_2D,de=b.depthTexture.format===zr?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(b.depthTexture.format===ba)nn(b)?m.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,de,ue,Te,0,De):s.framebufferTexture2D(s.FRAMEBUFFER,de,ue,Te,0);else if(b.depthTexture.format===zr)nn(b)?m.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,de,ue,Te,0,De):s.framebufferTexture2D(s.FRAMEBUFFER,de,ue,Te,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function vt(N){const b=r.get(N),K=N.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==N.depthTexture){const re=N.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),re){const fe=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,re.removeEventListener("dispose",fe)};re.addEventListener("dispose",fe),b.__depthDisposeCallback=fe}b.__boundDepthTexture=re}if(N.depthTexture&&!b.__autoAllocateDepthBuffer)if(K)for(let re=0;re<6;re++)ut(b.__webglFramebuffer[re],N,re);else{const re=N.texture.mipmaps;re&&re.length>0?ut(b.__webglFramebuffer[0],N,0):ut(b.__webglFramebuffer,N,0)}else if(K){b.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[re]),b.__webglDepthbuffer[re]===void 0)b.__webglDepthbuffer[re]=s.createRenderbuffer(),jt(b.__webglDepthbuffer[re],N,!1);else{const fe=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Te=b.__webglDepthbuffer[re];s.bindRenderbuffer(s.RENDERBUFFER,Te),s.framebufferRenderbuffer(s.FRAMEBUFFER,fe,s.RENDERBUFFER,Te)}}else{const re=N.texture.mipmaps;if(re&&re.length>0?i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),jt(b.__webglDepthbuffer,N,!1);else{const fe=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Te=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Te),s.framebufferRenderbuffer(s.FRAMEBUFFER,fe,s.RENDERBUFFER,Te)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function xt(N,b,K){const re=r.get(N);b!==void 0&&Ke(re.__webglFramebuffer,N,N.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),K!==void 0&&vt(N)}function dt(N){const b=N.texture,K=r.get(N),re=r.get(b);N.addEventListener("dispose",T);const fe=N.textures,Te=N.isWebGLCubeRenderTarget===!0,De=fe.length>1;if(De||(re.__webglTexture===void 0&&(re.__webglTexture=s.createTexture()),re.__version=b.version,d.memory.textures++),Te){K.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(b.mipmaps&&b.mipmaps.length>0){K.__webglFramebuffer[ue]=[];for(let de=0;de<b.mipmaps.length;de++)K.__webglFramebuffer[ue][de]=s.createFramebuffer()}else K.__webglFramebuffer[ue]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){K.__webglFramebuffer=[];for(let ue=0;ue<b.mipmaps.length;ue++)K.__webglFramebuffer[ue]=s.createFramebuffer()}else K.__webglFramebuffer=s.createFramebuffer();if(De)for(let ue=0,de=fe.length;ue<de;ue++){const Re=r.get(fe[ue]);Re.__webglTexture===void 0&&(Re.__webglTexture=s.createTexture(),d.memory.textures++)}if(N.samples>0&&nn(N)===!1){K.__webglMultisampledFramebuffer=s.createFramebuffer(),K.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let ue=0;ue<fe.length;ue++){const de=fe[ue];K.__webglColorRenderbuffer[ue]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,K.__webglColorRenderbuffer[ue]);const Re=c.convert(de.format,de.colorSpace),Be=c.convert(de.type),Le=w(de.internalFormat,Re,Be,de.normalized,de.colorSpace,N.isXRRenderTarget===!0),Ue=Xt(N);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ue,Le,N.width,N.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.RENDERBUFFER,K.__webglColorRenderbuffer[ue])}s.bindRenderbuffer(s.RENDERBUFFER,null),N.depthBuffer&&(K.__webglDepthRenderbuffer=s.createRenderbuffer(),jt(K.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Te){i.bindTexture(s.TEXTURE_CUBE_MAP,re.__webglTexture),ze(s.TEXTURE_CUBE_MAP,b);for(let ue=0;ue<6;ue++)if(b.mipmaps&&b.mipmaps.length>0)for(let de=0;de<b.mipmaps.length;de++)Ke(K.__webglFramebuffer[ue][de],N,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,de);else Ke(K.__webglFramebuffer[ue],N,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);x(b)&&B(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(De){for(let ue=0,de=fe.length;ue<de;ue++){const Re=fe[ue],Be=r.get(Re);let Le=s.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Le=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Le,Be.__webglTexture),ze(Le,Re),Ke(K.__webglFramebuffer,N,Re,s.COLOR_ATTACHMENT0+ue,Le,0),x(Re)&&B(Le)}i.unbindTexture()}else{let ue=s.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(ue=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(ue,re.__webglTexture),ze(ue,b),b.mipmaps&&b.mipmaps.length>0)for(let de=0;de<b.mipmaps.length;de++)Ke(K.__webglFramebuffer[de],N,b,s.COLOR_ATTACHMENT0,ue,de);else Ke(K.__webglFramebuffer,N,b,s.COLOR_ATTACHMENT0,ue,0);x(b)&&B(ue),i.unbindTexture()}N.depthBuffer&&vt(N)}function $t(N){const b=N.textures;for(let K=0,re=b.length;K<re;K++){const fe=b[K];if(x(fe)){const Te=H(N),De=r.get(fe).__webglTexture;i.bindTexture(Te,De),B(Te),i.unbindTexture()}}}const en=[],tn=[];function on(N){if(N.samples>0){if(nn(N)===!1){const b=N.textures,K=N.width,re=N.height;let fe=s.COLOR_BUFFER_BIT;const Te=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,De=r.get(N),ue=b.length>1;if(ue)for(let Re=0;Re<b.length;Re++)i.bindFramebuffer(s.FRAMEBUFFER,De.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,De.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer);const de=N.texture.mipmaps;de&&de.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,De.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let Re=0;Re<b.length;Re++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(fe|=s.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(fe|=s.STENCIL_BUFFER_BIT)),ue){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,De.__webglColorRenderbuffer[Re]);const Be=r.get(b[Re]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Be,0)}s.blitFramebuffer(0,0,K,re,0,0,K,re,fe,s.NEAREST),p===!0&&(en.length=0,tn.length=0,en.push(s.COLOR_ATTACHMENT0+Re),N.depthBuffer&&N.resolveDepthBuffer===!1&&(en.push(Te),tn.push(Te),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,tn)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,en))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ue)for(let Re=0;Re<b.length;Re++){i.bindFramebuffer(s.FRAMEBUFFER,De.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.RENDERBUFFER,De.__webglColorRenderbuffer[Re]);const Be=r.get(b[Re]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,De.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.TEXTURE_2D,Be,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&p){const b=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function Xt(N){return Math.min(l.maxSamples,N.samples)}function nn(N){const b=r.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function j(N){const b=d.render.frame;v.get(N)!==b&&(v.set(N,b),N.update())}function Ft(N,b){const K=N.colorSpace,re=N.format,fe=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||K!==Xc&&K!==ar&&(yt.getTransfer(K)===Bt?(re!==Di||fe!==xi)&&nt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):bt("WebGLTextures: Unsupported texture color space:",K)),b}function Ct(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(h.width=N.naturalWidth||N.width,h.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(h.width=N.displayWidth,h.height=N.displayHeight):(h.width=N.width,h.height=N.height),h}this.allocateTextureUnit=P,this.resetTextureUnits=he,this.getTextureUnits=me,this.setTextureUnits=J,this.setTexture2D=te,this.setTexture2DArray=_e,this.setTexture3D=Ee,this.setTextureCube=L,this.rebindTextures=xt,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=$t,this.updateMultisampleRenderTarget=on,this.setupDepthRenderbuffer=vt,this.setupFrameBufferTexture=Ke,this.useMultisampledRTT=nn,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function ME(s,e){function i(r,l=ar){let c;const d=yt.getTransfer(l);if(r===xi)return s.UNSIGNED_BYTE;if(r===Gh)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Vh)return s.UNSIGNED_SHORT_5_5_5_1;if(r===av)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===rv)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===nv)return s.BYTE;if(r===iv)return s.SHORT;if(r===jo)return s.UNSIGNED_SHORT;if(r===Hh)return s.INT;if(r===Xi)return s.UNSIGNED_INT;if(r===Gi)return s.FLOAT;if(r===Ma)return s.HALF_FLOAT;if(r===sv)return s.ALPHA;if(r===ov)return s.RGB;if(r===Di)return s.RGBA;if(r===ba)return s.DEPTH_COMPONENT;if(r===zr)return s.DEPTH_STENCIL;if(r===lv)return s.RED;if(r===kh)return s.RED_INTEGER;if(r===Br)return s.RG;if(r===Wh)return s.RG_INTEGER;if(r===Xh)return s.RGBA_INTEGER;if(r===zc||r===Ic||r===Bc||r===Fc)if(d===Bt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===zc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ic)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Bc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Fc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===zc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ic)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Bc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Fc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ah||r===rh||r===sh||r===oh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===ah)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===rh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===sh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===oh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===lh||r===ch||r===uh||r===fh||r===dh||r===kc||r===hh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===lh||r===ch)return d===Bt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===uh)return d===Bt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===fh)return c.COMPRESSED_R11_EAC;if(r===dh)return c.COMPRESSED_SIGNED_R11_EAC;if(r===kc)return c.COMPRESSED_RG11_EAC;if(r===hh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===ph||r===mh||r===gh||r===_h||r===vh||r===xh||r===Sh||r===yh||r===Mh||r===bh||r===Eh||r===Th||r===Ah||r===Rh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===ph)return d===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===mh)return d===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===gh)return d===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===_h)return d===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===vh)return d===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===xh)return d===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Sh)return d===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===yh)return d===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Mh)return d===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===bh)return d===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Eh)return d===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Th)return d===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ah)return d===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Rh)return d===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ch||r===wh||r===Dh)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Ch)return d===Bt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===wh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Dh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Uh||r===Nh||r===Wc||r===Lh)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Uh)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Nh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Wc)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Lh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===qo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const bE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,EE=`
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

}`;class TE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new Sv(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new ji({vertexShader:bE,fragmentShader:EE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ea(new Jc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class AE extends Gr{constructor(e,i){super();const r=this;let l=null,c=1,d=null,m="local-floor",p=1,h=null,v=null,y=null,g=null,E=null,A=null;const D=typeof XRWebGLBinding<"u",M=new TE,x={},B=i.getContextAttributes();let H=null,w=null;const I=[],U=[],z=new Dt;let T=null;const O=new vi;O.viewport=new sn;const q=new vi;q.viewport=new sn;const k=[O,q],Q=new Py;let he=null,me=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let Se=I[ae];return Se===void 0&&(Se=new yd,I[ae]=Se),Se.getTargetRaySpace()},this.getControllerGrip=function(ae){let Se=I[ae];return Se===void 0&&(Se=new yd,I[ae]=Se),Se.getGripSpace()},this.getHand=function(ae){let Se=I[ae];return Se===void 0&&(Se=new yd,I[ae]=Se),Se.getHandSpace()};function J(ae){const Se=U.indexOf(ae.inputSource);if(Se===-1)return;const Me=I[Se];Me!==void 0&&(Me.update(ae.inputSource,ae.frame,h||d),Me.dispatchEvent({type:ae.type,data:ae.inputSource}))}function P(){l.removeEventListener("select",J),l.removeEventListener("selectstart",J),l.removeEventListener("selectend",J),l.removeEventListener("squeeze",J),l.removeEventListener("squeezestart",J),l.removeEventListener("squeezeend",J),l.removeEventListener("end",P),l.removeEventListener("inputsourceschange",G);for(let ae=0;ae<I.length;ae++){const Se=U[ae];Se!==null&&(U[ae]=null,I[ae].disconnect(Se))}he=null,me=null,M.reset();for(const ae in x)delete x[ae];e.setRenderTarget(H),E=null,g=null,y=null,l=null,w=null,ze.stop(),r.isPresenting=!1,e.setPixelRatio(T),e.setSize(z.width,z.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){c=ae,r.isPresenting===!0&&nt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){m=ae,r.isPresenting===!0&&nt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||d},this.setReferenceSpace=function(ae){h=ae},this.getBaseLayer=function(){return g!==null?g:E},this.getBinding=function(){return y===null&&D&&(y=new XRWebGLBinding(l,i)),y},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(ae){if(l=ae,l!==null){if(H=e.getRenderTarget(),l.addEventListener("select",J),l.addEventListener("selectstart",J),l.addEventListener("selectend",J),l.addEventListener("squeeze",J),l.addEventListener("squeezestart",J),l.addEventListener("squeezeend",J),l.addEventListener("end",P),l.addEventListener("inputsourceschange",G),B.xrCompatible!==!0&&await i.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(z),D&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,He=null,tt=null;B.depth&&(tt=B.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Me=B.stencil?zr:ba,He=B.stencil?qo:Xi);const Ke={colorFormat:i.RGBA8,depthFormat:tt,scaleFactor:c};y=this.getBinding(),g=y.createProjectionLayer(Ke),l.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),w=new Wi(g.textureWidth,g.textureHeight,{format:Di,type:xi,depthTexture:new Fs(g.textureWidth,g.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:B.stencil,colorSpace:e.outputColorSpace,samples:B.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Me={antialias:B.antialias,alpha:!0,depth:B.depth,stencil:B.stencil,framebufferScaleFactor:c};E=new XRWebGLLayer(l,i,Me),l.updateRenderState({baseLayer:E}),e.setPixelRatio(1),e.setSize(E.framebufferWidth,E.framebufferHeight,!1),w=new Wi(E.framebufferWidth,E.framebufferHeight,{format:Di,type:xi,colorSpace:e.outputColorSpace,stencilBuffer:B.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(p),h=null,d=await l.requestReferenceSpace(m),ze.setContext(l),ze.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function G(ae){for(let Se=0;Se<ae.removed.length;Se++){const Me=ae.removed[Se],He=U.indexOf(Me);He>=0&&(U[He]=null,I[He].disconnect(Me))}for(let Se=0;Se<ae.added.length;Se++){const Me=ae.added[Se];let He=U.indexOf(Me);if(He===-1){for(let Ke=0;Ke<I.length;Ke++)if(Ke>=U.length){U.push(Me),He=Ke;break}else if(U[Ke]===null){U[Ke]=Me,He=Ke;break}if(He===-1)break}const tt=I[He];tt&&tt.connect(Me)}}const te=new le,_e=new le;function Ee(ae,Se,Me){te.setFromMatrixPosition(Se.matrixWorld),_e.setFromMatrixPosition(Me.matrixWorld);const He=te.distanceTo(_e),tt=Se.projectionMatrix.elements,Ke=Me.projectionMatrix.elements,jt=tt[14]/(tt[10]-1),ut=tt[14]/(tt[10]+1),vt=(tt[9]+1)/tt[5],xt=(tt[9]-1)/tt[5],dt=(tt[8]-1)/tt[0],$t=(Ke[8]+1)/Ke[0],en=jt*dt,tn=jt*$t,on=He/(-dt+$t),Xt=on*-dt;if(Se.matrixWorld.decompose(ae.position,ae.quaternion,ae.scale),ae.translateX(Xt),ae.translateZ(on),ae.matrixWorld.compose(ae.position,ae.quaternion,ae.scale),ae.matrixWorldInverse.copy(ae.matrixWorld).invert(),tt[10]===-1)ae.projectionMatrix.copy(Se.projectionMatrix),ae.projectionMatrixInverse.copy(Se.projectionMatrixInverse);else{const nn=jt+on,j=ut+on,Ft=en-Xt,Ct=tn+(He-Xt),N=vt*ut/j*nn,b=xt*ut/j*nn;ae.projectionMatrix.makePerspective(Ft,Ct,N,b,nn,j),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert()}}function L(ae,Se){Se===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(Se.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(l===null)return;let Se=ae.near,Me=ae.far;M.texture!==null&&(M.depthNear>0&&(Se=M.depthNear),M.depthFar>0&&(Me=M.depthFar)),Q.near=q.near=O.near=Se,Q.far=q.far=O.far=Me,(he!==Q.near||me!==Q.far)&&(l.updateRenderState({depthNear:Q.near,depthFar:Q.far}),he=Q.near,me=Q.far),Q.layers.mask=ae.layers.mask|6,O.layers.mask=Q.layers.mask&-5,q.layers.mask=Q.layers.mask&-3;const He=ae.parent,tt=Q.cameras;L(Q,He);for(let Ke=0;Ke<tt.length;Ke++)L(tt[Ke],He);tt.length===2?Ee(Q,O,q):Q.projectionMatrix.copy(O.projectionMatrix),Z(ae,Q,He)};function Z(ae,Se,Me){Me===null?ae.matrix.copy(Se.matrixWorld):(ae.matrix.copy(Me.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(Se.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(Se.projectionMatrix),ae.projectionMatrixInverse.copy(Se.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=Oh*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return Q},this.getFoveation=function(){if(!(g===null&&E===null))return p},this.setFoveation=function(ae){p=ae,g!==null&&(g.fixedFoveation=ae),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=ae)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(Q)},this.getCameraTexture=function(ae){return x[ae]};let be=null;function Ce(ae,Se){if(v=Se.getViewerPose(h||d),A=Se,v!==null){const Me=v.views;E!==null&&(e.setRenderTargetFramebuffer(w,E.framebuffer),e.setRenderTarget(w));let He=!1;Me.length!==Q.cameras.length&&(Q.cameras.length=0,He=!0);for(let ut=0;ut<Me.length;ut++){const vt=Me[ut];let xt=null;if(E!==null)xt=E.getViewport(vt);else{const $t=y.getViewSubImage(g,vt);xt=$t.viewport,ut===0&&(e.setRenderTargetTextures(w,$t.colorTexture,$t.depthStencilTexture),e.setRenderTarget(w))}let dt=k[ut];dt===void 0&&(dt=new vi,dt.layers.enable(ut),dt.viewport=new sn,k[ut]=dt),dt.matrix.fromArray(vt.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(vt.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(xt.x,xt.y,xt.width,xt.height),ut===0&&(Q.matrix.copy(dt.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)),He===!0&&Q.cameras.push(dt)}const tt=l.enabledFeatures;if(tt&&tt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&D){y=r.getBinding();const ut=y.getDepthInformation(Me[0]);ut&&ut.isValid&&ut.texture&&M.init(ut,l.renderState)}if(tt&&tt.includes("camera-access")&&D){e.state.unbindTexture(),y=r.getBinding();for(let ut=0;ut<Me.length;ut++){const vt=Me[ut].camera;if(vt){let xt=x[vt];xt||(xt=new Sv,x[vt]=xt);const dt=y.getCameraImage(vt);xt.sourceTexture=dt}}}}for(let Me=0;Me<I.length;Me++){const He=U[Me],tt=I[Me];He!==null&&tt!==void 0&&tt.update(He,Se,h||d)}be&&be(ae,Se),Se.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:Se}),A=null}const ze=new Ev;ze.setAnimationLoop(Ce),this.setAnimationLoop=function(ae){be=ae},this.dispose=function(){}}}const RE=new un,Uv=new rt;Uv.set(-1,0,0,0,1,0,0,0,1);function CE(s,e){function i(M,x){M.matrixAutoUpdate===!0&&M.updateMatrix(),x.value.copy(M.matrix)}function r(M,x){x.color.getRGB(M.fogColor.value,yv(s)),x.isFog?(M.fogNear.value=x.near,M.fogFar.value=x.far):x.isFogExp2&&(M.fogDensity.value=x.density)}function l(M,x,B,H,w){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?c(M,x):x.isMeshLambertMaterial?(c(M,x),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(c(M,x),y(M,x)):x.isMeshPhongMaterial?(c(M,x),v(M,x),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(c(M,x),g(M,x),x.isMeshPhysicalMaterial&&E(M,x,w)):x.isMeshMatcapMaterial?(c(M,x),A(M,x)):x.isMeshDepthMaterial?c(M,x):x.isMeshDistanceMaterial?(c(M,x),D(M,x)):x.isMeshNormalMaterial?c(M,x):x.isLineBasicMaterial?(d(M,x),x.isLineDashedMaterial&&m(M,x)):x.isPointsMaterial?p(M,x,B,H):x.isSpriteMaterial?h(M,x):x.isShadowMaterial?(M.color.value.copy(x.color),M.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(M,x){M.opacity.value=x.opacity,x.color&&M.diffuse.value.copy(x.color),x.emissive&&M.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.bumpMap&&(M.bumpMap.value=x.bumpMap,i(x.bumpMap,M.bumpMapTransform),M.bumpScale.value=x.bumpScale,x.side===qn&&(M.bumpScale.value*=-1)),x.normalMap&&(M.normalMap.value=x.normalMap,i(x.normalMap,M.normalMapTransform),M.normalScale.value.copy(x.normalScale),x.side===qn&&M.normalScale.value.negate()),x.displacementMap&&(M.displacementMap.value=x.displacementMap,i(x.displacementMap,M.displacementMapTransform),M.displacementScale.value=x.displacementScale,M.displacementBias.value=x.displacementBias),x.emissiveMap&&(M.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,M.emissiveMapTransform)),x.specularMap&&(M.specularMap.value=x.specularMap,i(x.specularMap,M.specularMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest);const B=e.get(x),H=B.envMap,w=B.envMapRotation;H&&(M.envMap.value=H,M.envMapRotation.value.setFromMatrix4(RE.makeRotationFromEuler(w)).transpose(),H.isCubeTexture&&H.isRenderTargetTexture===!1&&M.envMapRotation.value.premultiply(Uv),M.reflectivity.value=x.reflectivity,M.ior.value=x.ior,M.refractionRatio.value=x.refractionRatio),x.lightMap&&(M.lightMap.value=x.lightMap,M.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,M.lightMapTransform)),x.aoMap&&(M.aoMap.value=x.aoMap,M.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,M.aoMapTransform))}function d(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform))}function m(M,x){M.dashSize.value=x.dashSize,M.totalSize.value=x.dashSize+x.gapSize,M.scale.value=x.scale}function p(M,x,B,H){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.size.value=x.size*B,M.scale.value=H*.5,x.map&&(M.map.value=x.map,i(x.map,M.uvTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function h(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.rotation.value=x.rotation,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function v(M,x){M.specular.value.copy(x.specular),M.shininess.value=Math.max(x.shininess,1e-4)}function y(M,x){x.gradientMap&&(M.gradientMap.value=x.gradientMap)}function g(M,x){M.metalness.value=x.metalness,x.metalnessMap&&(M.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,M.metalnessMapTransform)),M.roughness.value=x.roughness,x.roughnessMap&&(M.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,M.roughnessMapTransform)),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)}function E(M,x,B){M.ior.value=x.ior,x.sheen>0&&(M.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),M.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(M.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,M.sheenColorMapTransform)),x.sheenRoughnessMap&&(M.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,M.sheenRoughnessMapTransform))),x.clearcoat>0&&(M.clearcoat.value=x.clearcoat,M.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(M.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,M.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(M.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===qn&&M.clearcoatNormalScale.value.negate())),x.dispersion>0&&(M.dispersion.value=x.dispersion),x.iridescence>0&&(M.iridescence.value=x.iridescence,M.iridescenceIOR.value=x.iridescenceIOR,M.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(M.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,M.iridescenceMapTransform)),x.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),x.transmission>0&&(M.transmission.value=x.transmission,M.transmissionSamplerMap.value=B.texture,M.transmissionSamplerSize.value.set(B.width,B.height),x.transmissionMap&&(M.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,M.transmissionMapTransform)),M.thickness.value=x.thickness,x.thicknessMap&&(M.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=x.attenuationDistance,M.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(M.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(M.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=x.specularIntensity,M.specularColor.value.copy(x.specularColor),x.specularColorMap&&(M.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,M.specularColorMapTransform)),x.specularIntensityMap&&(M.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,M.specularIntensityMapTransform))}function A(M,x){x.matcap&&(M.matcap.value=x.matcap)}function D(M,x){const B=e.get(x).light;M.referencePosition.value.setFromMatrixPosition(B.matrixWorld),M.nearDistance.value=B.shadow.camera.near,M.farDistance.value=B.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function wE(s,e,i,r){let l={},c={},d=[];const m=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(w,I){const U=I.program;r.uniformBlockBinding(w,U)}function h(w,I){let U=l[w.id];U===void 0&&(M(w),U=v(w),l[w.id]=U,w.addEventListener("dispose",B));const z=I.program;r.updateUBOMapping(w,z);const T=e.render.frame;c[w.id]!==T&&(g(w),c[w.id]=T)}function v(w){const I=y();w.__bindingPointIndex=I;const U=s.createBuffer(),z=w.__size,T=w.usage;return s.bindBuffer(s.UNIFORM_BUFFER,U),s.bufferData(s.UNIFORM_BUFFER,z,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,I,U),U}function y(){for(let w=0;w<m;w++)if(d.indexOf(w)===-1)return d.push(w),w;return bt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(w){const I=l[w.id],U=w.uniforms,z=w.__cache;s.bindBuffer(s.UNIFORM_BUFFER,I);for(let T=0,O=U.length;T<O;T++){const q=U[T];if(Array.isArray(q))for(let k=0,Q=q.length;k<Q;k++)E(q[k],T,k,z);else E(q,T,0,z)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function E(w,I,U,z){if(D(w,I,U,z)===!0){const T=w.__offset,O=w.value;if(Array.isArray(O)){let q=0;for(let k=0;k<O.length;k++){const Q=O[k],he=x(Q);A(Q,w.__data,q),typeof Q!="number"&&typeof Q!="boolean"&&!Q.isMatrix3&&!ArrayBuffer.isView(Q)&&(q+=he.storage/Float32Array.BYTES_PER_ELEMENT)}}else A(O,w.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,T,w.__data)}}function A(w,I,U){typeof w=="number"||typeof w=="boolean"?I[0]=w:w.isMatrix3?(I[0]=w.elements[0],I[1]=w.elements[1],I[2]=w.elements[2],I[3]=0,I[4]=w.elements[3],I[5]=w.elements[4],I[6]=w.elements[5],I[7]=0,I[8]=w.elements[6],I[9]=w.elements[7],I[10]=w.elements[8],I[11]=0):ArrayBuffer.isView(w)?I.set(new w.constructor(w.buffer,w.byteOffset,I.length)):w.toArray(I,U)}function D(w,I,U,z){const T=w.value,O=I+"_"+U;if(z[O]===void 0)return typeof T=="number"||typeof T=="boolean"?z[O]=T:ArrayBuffer.isView(T)?z[O]=T.slice():z[O]=T.clone(),!0;{const q=z[O];if(typeof T=="number"||typeof T=="boolean"){if(q!==T)return z[O]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(q.equals(T)===!1)return q.copy(T),!0}}return!1}function M(w){const I=w.uniforms;let U=0;const z=16;for(let O=0,q=I.length;O<q;O++){const k=Array.isArray(I[O])?I[O]:[I[O]];for(let Q=0,he=k.length;Q<he;Q++){const me=k[Q],J=Array.isArray(me.value)?me.value:[me.value];for(let P=0,G=J.length;P<G;P++){const te=J[P],_e=x(te),Ee=U%z,L=Ee%_e.boundary,Z=Ee+L;U+=L,Z!==0&&z-Z<_e.storage&&(U+=z-Z),me.__data=new Float32Array(_e.storage/Float32Array.BYTES_PER_ELEMENT),me.__offset=U,U+=_e.storage}}}const T=U%z;return T>0&&(U+=z-T),w.__size=U,w.__cache={},this}function x(w){const I={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(I.boundary=4,I.storage=4):w.isVector2?(I.boundary=8,I.storage=8):w.isVector3||w.isColor?(I.boundary=16,I.storage=12):w.isVector4?(I.boundary=16,I.storage=16):w.isMatrix3?(I.boundary=48,I.storage=48):w.isMatrix4?(I.boundary=64,I.storage=64):w.isTexture?nt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(I.boundary=16,I.storage=w.byteLength):nt("WebGLRenderer: Unsupported uniform value type.",w),I}function B(w){const I=w.target;I.removeEventListener("dispose",B);const U=d.indexOf(I.__bindingPointIndex);d.splice(U,1),s.deleteBuffer(l[I.id]),delete l[I.id],delete c[I.id]}function H(){for(const w in l)s.deleteBuffer(l[w]);d=[],l={},c={}}return{bind:p,update:h,dispose:H}}const DE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Fi=null;function UE(){return Fi===null&&(Fi=new yy(DE,16,16,Br,Ma),Fi.name="DFG_LUT",Fi.minFilter=Pn,Fi.magFilter=Pn,Fi.wrapS=va,Fi.wrapT=va,Fi.generateMipmaps=!1,Fi.needsUpdate=!0),Fi}class NE{constructor(e={}){const{canvas:i=JS(),context:r=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:m=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:h=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:y=!1,reversedDepthBuffer:g=!1,outputBufferType:E=xi}=e;this.isWebGLRenderer=!0;let A;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");A=r.getContextAttributes().alpha}else A=d;const D=E,M=new Set([Xh,Wh,kh]),x=new Set([xi,Xi,jo,qo,Gh,Vh]),B=new Uint32Array(4),H=new Int32Array(4),w=new le;let I=null,U=null;const z=[],T=[];let O=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const q=this;let k=!1,Q=null,he=null,me=null,J=null;this._outputColorSpace=_i;let P=0,G=0,te=null,_e=-1,Ee=null;const L=new sn,Z=new sn;let be=null;const Ce=new Et(0);let ze=0,ae=i.width,Se=i.height,Me=1,He=null,tt=null;const Ke=new sn(0,0,ae,Se),jt=new sn(0,0,ae,Se);let ut=!1;const vt=new _v;let xt=!1,dt=!1;const $t=new un,en=new le,tn=new sn,on={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xt=!1;function nn(){return te===null?Me:1}let j=r;function Ft(R,X){return i.getContext(R,X)}try{const R={alpha:!0,depth:l,stencil:c,antialias:m,premultipliedAlpha:p,preserveDrawingBuffer:h,powerPreference:v,failIfMajorPerformanceCaveat:y};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Fh}`),i.addEventListener("webglcontextlost",Zt,!1),i.addEventListener("webglcontextrestored",Nt,!1),i.addEventListener("webglcontextcreationerror",Zn,!1),j===null){const X="webgl2";if(j=Ft(X,R),j===null)throw Ft(X)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(R){throw bt("WebGLRenderer: "+R.message),R}let Ct,N,b,K,re,fe,Te,De,ue,de,Re,Be,Le,Ue,Ze,Qe,it,W,Ae,ge,we,Ie,ye;function je(){Ct=new Ub(j),Ct.init(),we=new ME(j,Ct),N=new bb(j,Ct,e,we),b=new SE(j,Ct),N.reversedDepthBuffer&&g&&b.buffers.depth.setReversed(!0),he=j.createFramebuffer(),me=j.createFramebuffer(),J=j.createFramebuffer(),K=new Ob(j),re=new sE,fe=new yE(j,Ct,b,re,N,we,K),Te=new Db(q),De=new By(j),Ie=new yb(j,De),ue=new Nb(j,De,K,Ie),de=new zb(j,ue,De,Ie,K),W=new Pb(j,N,fe),Ze=new Eb(re),Re=new rE(q,Te,Ct,N,Ie,Ze),Be=new CE(q,re),Le=new lE,Ue=new pE(Ct),it=new Sb(q,Te,b,de,A,p),Qe=new xE(q,de,N),ye=new wE(j,K,N,b),Ae=new Mb(j,Ct,K),ge=new Lb(j,Ct,K),K.programs=Re.programs,q.capabilities=N,q.extensions=Ct,q.properties=re,q.renderLists=Le,q.shadowMap=Qe,q.state=b,q.info=K}je(),D!==xi&&(O=new Bb(D,i.width,i.height,m,l,c));const Ve=new AE(q,j);this.xr=Ve,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const R=Ct.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Ct.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Me},this.setPixelRatio=function(R){R!==void 0&&(Me=R,this.setSize(ae,Se,!1))},this.getSize=function(R){return R.set(ae,Se)},this.setSize=function(R,X,se=!0){if(Ve.isPresenting){nt("WebGLRenderer: Can't change size while VR device is presenting.");return}ae=R,Se=X,i.width=Math.floor(R*Me),i.height=Math.floor(X*Me),se===!0&&(i.style.width=R+"px",i.style.height=X+"px"),O!==null&&O.setSize(i.width,i.height),this.setViewport(0,0,R,X)},this.getDrawingBufferSize=function(R){return R.set(ae*Me,Se*Me).floor()},this.setDrawingBufferSize=function(R,X,se){ae=R,Se=X,Me=se,i.width=Math.floor(R*se),i.height=Math.floor(X*se),this.setViewport(0,0,R,X)},this.setEffects=function(R){if(D===xi){bt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let X=0;X<R.length;X++)if(R[X].isOutputPass===!0){nt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(L)},this.getViewport=function(R){return R.copy(Ke)},this.setViewport=function(R,X,se,ne){R.isVector4?Ke.set(R.x,R.y,R.z,R.w):Ke.set(R,X,se,ne),b.viewport(L.copy(Ke).multiplyScalar(Me).round())},this.getScissor=function(R){return R.copy(jt)},this.setScissor=function(R,X,se,ne){R.isVector4?jt.set(R.x,R.y,R.z,R.w):jt.set(R,X,se,ne),b.scissor(Z.copy(jt).multiplyScalar(Me).round())},this.getScissorTest=function(){return ut},this.setScissorTest=function(R){b.setScissorTest(ut=R)},this.setOpaqueSort=function(R){He=R},this.setTransparentSort=function(R){tt=R},this.getClearColor=function(R){return R.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor(...arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha(...arguments)},this.clear=function(R=!0,X=!0,se=!0){let ne=0;if(R){let ie=!1;if(te!==null){const Oe=te.texture.format;ie=M.has(Oe)}if(ie){const Oe=te.texture.type,Ge=x.has(Oe),Ne=it.getClearColor(),We=it.getClearAlpha(),ke=Ne.r,Je=Ne.g,st=Ne.b;Ge?(B[0]=ke,B[1]=Je,B[2]=st,B[3]=We,j.clearBufferuiv(j.COLOR,0,B)):(H[0]=ke,H[1]=Je,H[2]=st,H[3]=We,j.clearBufferiv(j.COLOR,0,H))}else ne|=j.COLOR_BUFFER_BIT}X&&(ne|=j.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),se&&(ne|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne!==0&&j.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),Q=R},this.dispose=function(){i.removeEventListener("webglcontextlost",Zt,!1),i.removeEventListener("webglcontextrestored",Nt,!1),i.removeEventListener("webglcontextcreationerror",Zn,!1),it.dispose(),Le.dispose(),Ue.dispose(),re.dispose(),Te.dispose(),de.dispose(),Ie.dispose(),ye.dispose(),Re.dispose(),Ve.dispose(),Ve.removeEventListener("sessionstart",fn),Ve.removeEventListener("sessionend",En),Fn.stop()};function Zt(R){R.preventDefault(),Jg("WebGLRenderer: Context Lost."),k=!0}function Nt(){Jg("WebGLRenderer: Context Restored."),k=!1;const R=K.autoReset,X=Qe.enabled,se=Qe.autoUpdate,ne=Qe.needsUpdate,ie=Qe.type;je(),K.autoReset=R,Qe.enabled=X,Qe.autoUpdate=se,Qe.needsUpdate=ne,Qe.type=ie}function Zn(R){bt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Kn(R){const X=R.target;X.removeEventListener("dispose",Kn),ks(X)}function ks(R){Ws(R),re.remove(R)}function Ws(R){const X=re.get(R).programs;X!==void 0&&(X.forEach(function(se){Re.releaseProgram(se)}),R.isShaderMaterial&&Re.releaseShaderCache(R))}this.renderBufferDirect=function(R,X,se,ne,ie,Oe){X===null&&(X=on);const Ge=ie.isMesh&&ie.matrixWorld.determinantAffine()<0,Ne=Ra(R,X,se,ne,ie);b.setMaterial(ne,Ge);let We=se.index,ke=1;if(ne.wireframe===!0){if(We=ue.getWireframeAttribute(se),We===void 0)return;ke=2}const Je=se.drawRange,st=se.attributes.position;let Ye=Je.start*ke,Tt=(Je.start+Je.count)*ke;Oe!==null&&(Ye=Math.max(Ye,Oe.start*ke),Tt=Math.min(Tt,(Oe.start+Oe.count)*ke)),We!==null?(Ye=Math.max(Ye,0),Tt=Math.min(Tt,We.count)):st!=null&&(Ye=Math.max(Ye,0),Tt=Math.min(Tt,st.count));const Kt=Tt-Ye;if(Kt<0||Kt===1/0)return;Ie.setup(ie,ne,Ne,se,We);let kt,Lt=Ae;if(We!==null&&(kt=De.get(We),Lt=ge,Lt.setIndex(kt)),ie.isMesh)ne.wireframe===!0?(b.setLineWidth(ne.wireframeLinewidth*nn()),Lt.setMode(j.LINES)):Lt.setMode(j.TRIANGLES);else if(ie.isLine){let Ot=ne.linewidth;Ot===void 0&&(Ot=1),b.setLineWidth(Ot*nn()),ie.isLineSegments?Lt.setMode(j.LINES):ie.isLineLoop?Lt.setMode(j.LINE_LOOP):Lt.setMode(j.LINE_STRIP)}else ie.isPoints?Lt.setMode(j.POINTS):ie.isSprite&&Lt.setMode(j.TRIANGLES);if(ie.isBatchedMesh)if(Ct.get("WEBGL_multi_draw"))Lt.renderMultiDraw(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount);else{const Ot=ie._multiDrawStarts,Fe=ie._multiDrawCounts,Un=ie._multiDrawCount,ht=We?De.get(We).bytesPerElement:1,vn=re.get(ne).currentProgram.getUniforms();for(let Qn=0;Qn<Un;Qn++)vn.setValue(j,"_gl_DrawID",Qn),Lt.render(Ot[Qn]/ht,Fe[Qn])}else if(ie.isInstancedMesh)Lt.renderInstances(Ye,Kt,ie.count);else if(se.isInstancedBufferGeometry){const Ot=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,Fe=Math.min(se.instanceCount,Ot);Lt.renderInstances(Ye,Kt,Fe)}else Lt.render(Ye,Kt)};function Xs(R,X,se){R.transparent===!0&&R.side===_a&&R.forceSinglePass===!1?(R.side=qn,R.needsUpdate=!0,Aa(R,X,se),R.side=or,R.needsUpdate=!0,Aa(R,X,se),R.side=_a):Aa(R,X,se)}this.compile=function(R,X,se=null){se===null&&(se=R),U=Ue.get(se),U.init(X),T.push(U),se.traverseVisible(function(ie){ie.isLight&&ie.layers.test(X.layers)&&(U.pushLight(ie),ie.castShadow&&U.pushShadow(ie))}),R!==se&&R.traverseVisible(function(ie){ie.isLight&&ie.layers.test(X.layers)&&(U.pushLight(ie),ie.castShadow&&U.pushShadow(ie))}),U.setupLights();const ne=new Set;return R.traverse(function(ie){if(!(ie.isMesh||ie.isPoints||ie.isLine||ie.isSprite))return;const Oe=ie.material;if(Oe)if(Array.isArray(Oe))for(let Ge=0;Ge<Oe.length;Ge++){const Ne=Oe[Ge];Xs(Ne,se,ie),ne.add(Ne)}else Xs(Oe,se,ie),ne.add(Oe)}),U=T.pop(),ne},this.compileAsync=function(R,X,se=null){const ne=this.compile(R,X,se);return new Promise(ie=>{function Oe(){if(ne.forEach(function(Ge){re.get(Ge).currentProgram.isReady()&&ne.delete(Ge)}),ne.size===0){ie(R);return}setTimeout(Oe,10)}Ct.get("KHR_parallel_shader_compile")!==null?Oe():setTimeout(Oe,10)})};let Vr=null;function Ni(R){Vr&&Vr(R)}function fn(){Fn.stop()}function En(){Fn.start()}const Fn=new Ev;Fn.setAnimationLoop(Ni),typeof self<"u"&&Fn.setContext(self),this.setAnimationLoop=function(R){Vr=R,Ve.setAnimationLoop(R),R===null?Fn.stop():Fn.start()},Ve.addEventListener("sessionstart",fn),Ve.addEventListener("sessionend",En),this.render=function(R,X){if(X!==void 0&&X.isCamera!==!0){bt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;Q!==null&&Q.renderStart(R,X);const se=Ve.enabled===!0&&Ve.isPresenting===!0,ne=O!==null&&(te===null||se)&&O.begin(q,te);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Ve.enabled===!0&&Ve.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(Ve.cameraAutoUpdate===!0&&Ve.updateCamera(X),X=Ve.getCamera()),R.isScene===!0&&R.onBeforeRender(q,R,X,te),U=Ue.get(R,T.length),U.init(X),U.state.textureUnits=fe.getTextureUnits(),T.push(U),$t.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),vt.setFromProjectionMatrix($t,Vi,X.reversedDepth),dt=this.localClippingEnabled,xt=Ze.init(this.clippingPlanes,dt),I=Le.get(R,z.length),I.init(),z.push(I),Ve.enabled===!0&&Ve.isPresenting===!0){const Ge=q.xr.getDepthSensingMesh();Ge!==null&&lr(Ge,X,-1/0,q.sortObjects)}lr(R,X,0,q.sortObjects),I.finish(),q.sortObjects===!0&&I.sort(He,tt,X.reversedDepth),Xt=Ve.enabled===!1||Ve.isPresenting===!1||Ve.hasDepthSensing()===!1,Xt&&it.addToRenderList(I,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),xt===!0&&Ze.beginShadows();const ie=U.state.shadowsArray;if(Qe.render(ie,R,X),xt===!0&&Ze.endShadows(),(ne&&O.hasRenderPass())===!1){const Ge=I.opaque,Ne=I.transmissive;if(U.setupLights(),X.isArrayCamera){const We=X.cameras;if(Ne.length>0)for(let ke=0,Je=We.length;ke<Je;ke++){const st=We[ke];el(Ge,Ne,R,st)}Xt&&it.render(R);for(let ke=0,Je=We.length;ke<Je;ke++){const st=We[ke];$o(I,R,st,st.viewport)}}else Ne.length>0&&el(Ge,Ne,R,X),Xt&&it.render(R),$o(I,R,X)}te!==null&&G===0&&(fe.updateMultisampleRenderTarget(te),fe.updateRenderTargetMipmap(te)),ne&&O.end(q),R.isScene===!0&&R.onAfterRender(q,R,X),Ie.resetDefaultState(),_e=-1,Ee=null,T.pop(),T.length>0?(U=T[T.length-1],fe.setTextureUnits(U.state.textureUnits),xt===!0&&Ze.setGlobalState(q.clippingPlanes,U.state.camera)):U=null,z.pop(),z.length>0?I=z[z.length-1]:I=null,Q!==null&&Q.renderEnd()};function lr(R,X,se,ne){if(R.visible===!1)return;if(R.layers.test(X.layers)){if(R.isGroup)se=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(X);else if(R.isLightProbeGrid)U.pushLightProbeGrid(R);else if(R.isLight)U.pushLight(R),R.castShadow&&U.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||vt.intersectsSprite(R)){ne&&tn.setFromMatrixPosition(R.matrixWorld).applyMatrix4($t);const Ge=de.update(R),Ne=R.material;Ne.visible&&I.push(R,Ge,Ne,se,tn.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||vt.intersectsObject(R))){const Ge=de.update(R),Ne=R.material;if(ne&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),tn.copy(R.boundingSphere.center)):(Ge.boundingSphere===null&&Ge.computeBoundingSphere(),tn.copy(Ge.boundingSphere.center)),tn.applyMatrix4(R.matrixWorld).applyMatrix4($t)),Array.isArray(Ne)){const We=Ge.groups;for(let ke=0,Je=We.length;ke<Je;ke++){const st=We[ke],Ye=Ne[st.materialIndex];Ye&&Ye.visible&&I.push(R,Ge,Ye,se,tn.z,st)}}else Ne.visible&&I.push(R,Ge,Ne,se,tn.z,null)}}const Oe=R.children;for(let Ge=0,Ne=Oe.length;Ge<Ne;Ge++)lr(Oe[Ge],X,se,ne)}function $o(R,X,se,ne){const{opaque:ie,transmissive:Oe,transparent:Ge}=R;U.setupLightsView(se),xt===!0&&Ze.setGlobalState(q.clippingPlanes,se),ne&&b.viewport(L.copy(ne)),ie.length>0&&cr(ie,X,se),Oe.length>0&&cr(Oe,X,se),Ge.length>0&&cr(Ge,X,se),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function el(R,X,se,ne){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;if(U.state.transmissionRenderTarget[ne.id]===void 0){const Ye=Ct.has("EXT_color_buffer_half_float")||Ct.has("EXT_color_buffer_float");U.state.transmissionRenderTarget[ne.id]=new Wi(1,1,{generateMipmaps:!0,type:Ye?Ma:xi,minFilter:Pr,samples:Math.max(4,N.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:yt.workingColorSpace})}const Oe=U.state.transmissionRenderTarget[ne.id],Ge=ne.viewport||L;Oe.setSize(Ge.z*q.transmissionResolutionScale,Ge.w*q.transmissionResolutionScale);const Ne=q.getRenderTarget(),We=q.getActiveCubeFace(),ke=q.getActiveMipmapLevel();q.setRenderTarget(Oe),q.getClearColor(Ce),ze=q.getClearAlpha(),ze<1&&q.setClearColor(16777215,.5),q.clear(),Xt&&it.render(se);const Je=q.toneMapping;q.toneMapping=ki;const st=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),U.setupLightsView(ne),xt===!0&&Ze.setGlobalState(q.clippingPlanes,ne),cr(R,se,ne),fe.updateMultisampleRenderTarget(Oe),fe.updateRenderTargetMipmap(Oe),Ct.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let Tt=0,Kt=X.length;Tt<Kt;Tt++){const kt=X[Tt],{object:Lt,geometry:Ot,material:Fe,group:Un}=kt;if(Fe.side===_a&&Lt.layers.test(ne.layers)){const ht=Fe.side;Fe.side=qn,Fe.needsUpdate=!0,Ta(Lt,se,ne,Ot,Fe,Un),Fe.side=ht,Fe.needsUpdate=!0,Ye=!0}}Ye===!0&&(fe.updateMultisampleRenderTarget(Oe),fe.updateRenderTargetMipmap(Oe))}q.setRenderTarget(Ne,We,ke),q.setClearColor(Ce,ze),st!==void 0&&(ne.viewport=st),q.toneMapping=Je}function cr(R,X,se){const ne=X.isScene===!0?X.overrideMaterial:null;for(let ie=0,Oe=R.length;ie<Oe;ie++){const Ge=R[ie],{object:Ne,geometry:We,group:ke}=Ge;let Je=Ge.material;Je.allowOverride===!0&&ne!==null&&(Je=ne),Ne.layers.test(se.layers)&&Ta(Ne,X,se,We,Je,ke)}}function Ta(R,X,se,ne,ie,Oe){R.onBeforeRender(q,X,se,ne,ie,Oe),R.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),ie.onBeforeRender(q,X,se,ne,R,Oe),ie.transparent===!0&&ie.side===_a&&ie.forceSinglePass===!1?(ie.side=qn,ie.needsUpdate=!0,q.renderBufferDirect(se,X,ne,ie,R,Oe),ie.side=or,ie.needsUpdate=!0,q.renderBufferDirect(se,X,ne,ie,R,Oe),ie.side=_a):q.renderBufferDirect(se,X,ne,ie,R,Oe),R.onAfterRender(q,X,se,ne,ie,Oe)}function Aa(R,X,se){X.isScene!==!0&&(X=on);const ne=re.get(R),ie=U.state.lights,Oe=U.state.shadowsArray,Ge=ie.state.version,Ne=Re.getParameters(R,ie.state,Oe,X,se,U.state.lightProbeGridArray),We=Re.getProgramCacheKey(Ne);let ke=ne.programs;ne.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?X.environment:null,ne.fog=X.fog;const Je=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;ne.envMap=Te.get(R.envMap||ne.environment,Je),ne.envMapRotation=ne.environment!==null&&R.envMap===null?X.environmentRotation:R.envMapRotation,ke===void 0&&(R.addEventListener("dispose",Kn),ke=new Map,ne.programs=ke);let st=ke.get(We);if(st!==void 0){if(ne.currentProgram===st&&ne.lightsStateVersion===Ge)return Yi(R,Ne),st}else Ne.uniforms=Re.getUniforms(R),Q!==null&&R.isNodeMaterial&&Q.build(R,se,Ne),R.onBeforeCompile(Ne,q),st=Re.acquireProgram(Ne,We),ke.set(We,st),ne.uniforms=Ne.uniforms;const Ye=ne.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ye.clippingPlanes=Ze.uniform),Yi(R,Ne),ne.needsLights=tl(R),ne.lightsStateVersion=Ge,ne.needsLights&&(Ye.ambientLightColor.value=ie.state.ambient,Ye.lightProbe.value=ie.state.probe,Ye.directionalLights.value=ie.state.directional,Ye.directionalLightShadows.value=ie.state.directionalShadow,Ye.spotLights.value=ie.state.spot,Ye.spotLightShadows.value=ie.state.spotShadow,Ye.rectAreaLights.value=ie.state.rectArea,Ye.ltc_1.value=ie.state.rectAreaLTC1,Ye.ltc_2.value=ie.state.rectAreaLTC2,Ye.pointLights.value=ie.state.point,Ye.pointLightShadows.value=ie.state.pointShadow,Ye.hemisphereLights.value=ie.state.hemi,Ye.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,Ye.spotLightMatrix.value=ie.state.spotLightMatrix,Ye.spotLightMap.value=ie.state.spotLightMap,Ye.pointShadowMatrix.value=ie.state.pointShadowMatrix),ne.lightProbeGrid=U.state.lightProbeGridArray.length>0,ne.currentProgram=st,ne.uniformsList=null,st}function qi(R){if(R.uniformsList===null){const X=R.currentProgram.getUniforms();R.uniformsList=Hc.seqWithValue(X.seq,R.uniforms)}return R.uniformsList}function Yi(R,X){const se=re.get(R);se.outputColorSpace=X.outputColorSpace,se.batching=X.batching,se.batchingColor=X.batchingColor,se.instancing=X.instancing,se.instancingColor=X.instancingColor,se.instancingMorph=X.instancingMorph,se.skinning=X.skinning,se.morphTargets=X.morphTargets,se.morphNormals=X.morphNormals,se.morphColors=X.morphColors,se.morphTargetsCount=X.morphTargetsCount,se.numClippingPlanes=X.numClippingPlanes,se.numIntersection=X.numClipIntersection,se.vertexAlphas=X.vertexAlphas,se.vertexTangents=X.vertexTangents,se.toneMapping=X.toneMapping}function ur(R,X){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;w.setFromMatrixPosition(X.matrixWorld);for(let se=0,ne=R.length;se<ne;se++){const ie=R[se];if(ie.texture!==null&&ie.boundingBox.containsPoint(w))return ie}return null}function Ra(R,X,se,ne,ie){X.isScene!==!0&&(X=on),fe.resetTextureUnits();const Oe=X.fog,Ge=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial?X.environment:null,Ne=te===null?q.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:yt.workingColorSpace,We=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial&&!ne.envMap||ne.isMeshPhongMaterial&&!ne.envMap,ke=Te.get(ne.envMap||Ge,We),Je=ne.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,st=!!se.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),Ye=!!se.morphAttributes.position,Tt=!!se.morphAttributes.normal,Kt=!!se.morphAttributes.color;let kt=ki;ne.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(kt=q.toneMapping);const Lt=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,Ot=Lt!==void 0?Lt.length:0,Fe=re.get(ne),Un=U.state.lights;if(xt===!0&&(dt===!0||R!==Ee)){const Ut=R===Ee&&ne.id===_e;Ze.setState(ne,R,Ut)}let ht=!1;ne.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==Un.state.version||Fe.outputColorSpace!==Ne||ie.isBatchedMesh&&Fe.batching===!1||!ie.isBatchedMesh&&Fe.batching===!0||ie.isBatchedMesh&&Fe.batchingColor===!0&&ie.colorTexture===null||ie.isBatchedMesh&&Fe.batchingColor===!1&&ie.colorTexture!==null||ie.isInstancedMesh&&Fe.instancing===!1||!ie.isInstancedMesh&&Fe.instancing===!0||ie.isSkinnedMesh&&Fe.skinning===!1||!ie.isSkinnedMesh&&Fe.skinning===!0||ie.isInstancedMesh&&Fe.instancingColor===!0&&ie.instanceColor===null||ie.isInstancedMesh&&Fe.instancingColor===!1&&ie.instanceColor!==null||ie.isInstancedMesh&&Fe.instancingMorph===!0&&ie.morphTexture===null||ie.isInstancedMesh&&Fe.instancingMorph===!1&&ie.morphTexture!==null||Fe.envMap!==ke||ne.fog===!0&&Fe.fog!==Oe||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==Ze.numPlanes||Fe.numIntersection!==Ze.numIntersection)||Fe.vertexAlphas!==Je||Fe.vertexTangents!==st||Fe.morphTargets!==Ye||Fe.morphNormals!==Tt||Fe.morphColors!==Kt||Fe.toneMapping!==kt||Fe.morphTargetsCount!==Ot||!!Fe.lightProbeGrid!=U.state.lightProbeGridArray.length>0)&&(ht=!0):(ht=!0,Fe.__version=ne.version);let vn=Fe.currentProgram;ht===!0&&(vn=Aa(ne,X,ie),Q&&ne.isNodeMaterial&&Q.onUpdateProgram(ne,vn,Fe));let Qn=!1,yi=!1,Jn=!1;const Pt=vn.getUniforms(),Qt=Fe.uniforms;if(b.useProgram(vn.program)&&(Qn=!0,yi=!0,Jn=!0),ne.id!==_e&&(_e=ne.id,yi=!0),Fe.needsLights){const Ut=ur(U.state.lightProbeGridArray,ie);Fe.lightProbeGrid!==Ut&&(Fe.lightProbeGrid=Ut,yi=!0)}if(Qn||Ee!==R){b.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Pt.setValue(j,"projectionMatrix",R.projectionMatrix),Pt.setValue(j,"viewMatrix",R.matrixWorldInverse);const Li=Pt.map.cameraPosition;Li!==void 0&&Li.setValue(j,en.setFromMatrixPosition(R.matrixWorld)),N.logarithmicDepthBuffer&&Pt.setValue(j,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Pt.setValue(j,"isOrthographic",R.isOrthographicCamera===!0),Ee!==R&&(Ee=R,yi=!0,Jn=!0)}if(Fe.needsLights&&(Un.state.directionalShadowMap.length>0&&Pt.setValue(j,"directionalShadowMap",Un.state.directionalShadowMap,fe),Un.state.spotShadowMap.length>0&&Pt.setValue(j,"spotShadowMap",Un.state.spotShadowMap,fe),Un.state.pointShadowMap.length>0&&Pt.setValue(j,"pointShadowMap",Un.state.pointShadowMap,fe)),ie.isSkinnedMesh){Pt.setOptional(j,ie,"bindMatrix"),Pt.setOptional(j,ie,"bindMatrixInverse");const Ut=ie.skeleton;Ut&&(Ut.boneTexture===null&&Ut.computeBoneTexture(),Pt.setValue(j,"boneTexture",Ut.boneTexture,fe))}ie.isBatchedMesh&&(Pt.setOptional(j,ie,"batchingTexture"),Pt.setValue(j,"batchingTexture",ie._matricesTexture,fe),Pt.setOptional(j,ie,"batchingIdTexture"),Pt.setValue(j,"batchingIdTexture",ie._indirectTexture,fe),Pt.setOptional(j,ie,"batchingColorTexture"),ie._colorsTexture!==null&&Pt.setValue(j,"batchingColorTexture",ie._colorsTexture,fe));const Mi=se.morphAttributes;if((Mi.position!==void 0||Mi.normal!==void 0||Mi.color!==void 0)&&W.update(ie,se,vn),(yi||Fe.receiveShadow!==ie.receiveShadow)&&(Fe.receiveShadow=ie.receiveShadow,Pt.setValue(j,"receiveShadow",ie.receiveShadow)),(ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial)&&ne.envMap===null&&X.environment!==null&&(Qt.envMapIntensity.value=X.environmentIntensity),Qt.dfgLUT!==void 0&&(Qt.dfgLUT.value=UE()),yi){if(Pt.setValue(j,"toneMappingExposure",q.toneMappingExposure),Fe.needsLights&&dn(Qt,Jn),Oe&&ne.fog===!0&&Be.refreshFogUniforms(Qt,Oe),Be.refreshMaterialUniforms(Qt,ne,Me,Se,U.state.transmissionRenderTarget[R.id]),Fe.needsLights&&Fe.lightProbeGrid){const Ut=Fe.lightProbeGrid;Qt.probesSH.value=Ut.texture,Qt.probesMin.value.copy(Ut.boundingBox.min),Qt.probesMax.value.copy(Ut.boundingBox.max),Qt.probesResolution.value.copy(Ut.resolution)}Hc.upload(j,qi(Fe),Qt,fe)}if(ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Hc.upload(j,qi(Fe),Qt,fe),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Pt.setValue(j,"center",ie.center),Pt.setValue(j,"modelViewMatrix",ie.modelViewMatrix),Pt.setValue(j,"normalMatrix",ie.normalMatrix),Pt.setValue(j,"modelMatrix",ie.matrixWorld),ne.uniformsGroups!==void 0){const Ut=ne.uniformsGroups;for(let Li=0,Ca=Ut.length;Li<Ca;Li++){const fr=Ut[Li];ye.update(fr,vn),ye.bind(fr,vn)}}return vn}function dn(R,X){R.ambientLightColor.needsUpdate=X,R.lightProbe.needsUpdate=X,R.directionalLights.needsUpdate=X,R.directionalLightShadows.needsUpdate=X,R.pointLights.needsUpdate=X,R.pointLightShadows.needsUpdate=X,R.spotLights.needsUpdate=X,R.spotLightShadows.needsUpdate=X,R.rectAreaLights.needsUpdate=X,R.hemisphereLights.needsUpdate=X}function tl(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(R,X,se){const ne=re.get(R);ne.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),re.get(R.texture).__webglTexture=X,re.get(R.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:se,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,X){const se=re.get(R);se.__webglFramebuffer=X,se.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(R,X=0,se=0){te=R,P=X,G=se;let ne=null,ie=!1,Oe=!1;if(R){const Ne=re.get(R);if(Ne.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(j.FRAMEBUFFER,Ne.__webglFramebuffer),L.copy(R.viewport),Z.copy(R.scissor),be=R.scissorTest,b.viewport(L),b.scissor(Z),b.setScissorTest(be),_e=-1;return}else if(Ne.__webglFramebuffer===void 0)fe.setupRenderTarget(R);else if(Ne.__hasExternalTextures)fe.rebindTextures(R,re.get(R.texture).__webglTexture,re.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Je=R.depthTexture;if(Ne.__boundDepthTexture!==Je){if(Je!==null&&re.has(Je)&&(R.width!==Je.image.width||R.height!==Je.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");fe.setupDepthRenderbuffer(R)}}const We=R.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Oe=!0);const ke=re.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ke[X])?ne=ke[X][se]:ne=ke[X],ie=!0):R.samples>0&&fe.useMultisampledRTT(R)===!1?ne=re.get(R).__webglMultisampledFramebuffer:Array.isArray(ke)?ne=ke[se]:ne=ke,L.copy(R.viewport),Z.copy(R.scissor),be=R.scissorTest}else L.copy(Ke).multiplyScalar(Me).floor(),Z.copy(jt).multiplyScalar(Me).floor(),be=ut;if(se!==0&&(ne=he),b.bindFramebuffer(j.FRAMEBUFFER,ne)&&b.drawBuffers(R,ne),b.viewport(L),b.scissor(Z),b.setScissorTest(be),ie){const Ne=re.get(R.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ne.__webglTexture,se)}else if(Oe){const Ne=X;for(let We=0;We<R.textures.length;We++){const ke=re.get(R.textures[We]);j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0+We,ke.__webglTexture,se,Ne)}}else if(R!==null&&se!==0){const Ne=re.get(R.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Ne.__webglTexture,se)}_e=-1},this.readRenderTargetPixels=function(R,X,se,ne,ie,Oe,Ge,Ne=0){if(!(R&&R.isWebGLRenderTarget)){bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=re.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ge!==void 0&&(We=We[Ge]),We){b.bindFramebuffer(j.FRAMEBUFFER,We);try{const ke=R.textures[Ne],Je=ke.format,st=ke.type;if(R.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+Ne),!N.textureFormatReadable(Je)){bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!N.textureTypeReadable(st)){bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=R.width-ne&&se>=0&&se<=R.height-ie&&j.readPixels(X,se,ne,ie,we.convert(Je),we.convert(st),Oe)}finally{const ke=te!==null?re.get(te).__webglFramebuffer:null;b.bindFramebuffer(j.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(R,X,se,ne,ie,Oe,Ge,Ne=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=re.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ge!==void 0&&(We=We[Ge]),We)if(X>=0&&X<=R.width-ne&&se>=0&&se<=R.height-ie){b.bindFramebuffer(j.FRAMEBUFFER,We);const ke=R.textures[Ne],Je=ke.format,st=ke.type;if(R.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+Ne),!N.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!N.textureTypeReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ye=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,Ye),j.bufferData(j.PIXEL_PACK_BUFFER,Oe.byteLength,j.STREAM_READ),j.readPixels(X,se,ne,ie,we.convert(Je),we.convert(st),0);const Tt=te!==null?re.get(te).__webglFramebuffer:null;b.bindFramebuffer(j.FRAMEBUFFER,Tt);const Kt=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await $S(j,Kt,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,Ye),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,Oe),j.deleteBuffer(Ye),j.deleteSync(Kt),Oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,X=null,se=0){const ne=Math.pow(2,-se),ie=Math.floor(R.image.width*ne),Oe=Math.floor(R.image.height*ne),Ge=X!==null?X.x:0,Ne=X!==null?X.y:0;fe.setTexture2D(R,0),j.copyTexSubImage2D(j.TEXTURE_2D,se,0,0,Ge,Ne,ie,Oe),b.unbindTexture()},this.copyTextureToTexture=function(R,X,se=null,ne=null,ie=0,Oe=0){let Ge,Ne,We,ke,Je,st,Ye,Tt,Kt;const kt=R.isCompressedTexture?R.mipmaps[Oe]:R.image;if(se!==null)Ge=se.max.x-se.min.x,Ne=se.max.y-se.min.y,We=se.isBox3?se.max.z-se.min.z:1,ke=se.min.x,Je=se.min.y,st=se.isBox3?se.min.z:0;else{const Qt=Math.pow(2,-ie);Ge=Math.floor(kt.width*Qt),Ne=Math.floor(kt.height*Qt),R.isDataArrayTexture?We=kt.depth:R.isData3DTexture?We=Math.floor(kt.depth*Qt):We=1,ke=0,Je=0,st=0}ne!==null?(Ye=ne.x,Tt=ne.y,Kt=ne.z):(Ye=0,Tt=0,Kt=0);const Lt=we.convert(X.format),Ot=we.convert(X.type);let Fe;X.isData3DTexture?(fe.setTexture3D(X,0),Fe=j.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(fe.setTexture2DArray(X,0),Fe=j.TEXTURE_2D_ARRAY):(fe.setTexture2D(X,0),Fe=j.TEXTURE_2D),b.activeTexture(j.TEXTURE0),b.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,X.flipY),b.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),b.pixelStorei(j.UNPACK_ALIGNMENT,X.unpackAlignment);const Un=b.getParameter(j.UNPACK_ROW_LENGTH),ht=b.getParameter(j.UNPACK_IMAGE_HEIGHT),vn=b.getParameter(j.UNPACK_SKIP_PIXELS),Qn=b.getParameter(j.UNPACK_SKIP_ROWS),yi=b.getParameter(j.UNPACK_SKIP_IMAGES);b.pixelStorei(j.UNPACK_ROW_LENGTH,kt.width),b.pixelStorei(j.UNPACK_IMAGE_HEIGHT,kt.height),b.pixelStorei(j.UNPACK_SKIP_PIXELS,ke),b.pixelStorei(j.UNPACK_SKIP_ROWS,Je),b.pixelStorei(j.UNPACK_SKIP_IMAGES,st);const Jn=R.isDataArrayTexture||R.isData3DTexture,Pt=X.isDataArrayTexture||X.isData3DTexture;if(R.isDepthTexture){const Qt=re.get(R),Mi=re.get(X),Ut=re.get(Qt.__renderTarget),Li=re.get(Mi.__renderTarget);b.bindFramebuffer(j.READ_FRAMEBUFFER,Ut.__webglFramebuffer),b.bindFramebuffer(j.DRAW_FRAMEBUFFER,Li.__webglFramebuffer);for(let Ca=0;Ca<We;Ca++)Jn&&(j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,re.get(R).__webglTexture,ie,st+Ca),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,re.get(X).__webglTexture,Oe,Kt+Ca)),j.blitFramebuffer(ke,Je,Ge,Ne,Ye,Tt,Ge,Ne,j.DEPTH_BUFFER_BIT,j.NEAREST);b.bindFramebuffer(j.READ_FRAMEBUFFER,null),b.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(ie!==0||R.isRenderTargetTexture||re.has(R)){const Qt=re.get(R),Mi=re.get(X);b.bindFramebuffer(j.READ_FRAMEBUFFER,me),b.bindFramebuffer(j.DRAW_FRAMEBUFFER,J);for(let Ut=0;Ut<We;Ut++)Jn?j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Qt.__webglTexture,ie,st+Ut):j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Qt.__webglTexture,ie),Pt?j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Mi.__webglTexture,Oe,Kt+Ut):j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Mi.__webglTexture,Oe),ie!==0?j.blitFramebuffer(ke,Je,Ge,Ne,Ye,Tt,Ge,Ne,j.COLOR_BUFFER_BIT,j.NEAREST):Pt?j.copyTexSubImage3D(Fe,Oe,Ye,Tt,Kt+Ut,ke,Je,Ge,Ne):j.copyTexSubImage2D(Fe,Oe,Ye,Tt,ke,Je,Ge,Ne);b.bindFramebuffer(j.READ_FRAMEBUFFER,null),b.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else Pt?R.isDataTexture||R.isData3DTexture?j.texSubImage3D(Fe,Oe,Ye,Tt,Kt,Ge,Ne,We,Lt,Ot,kt.data):X.isCompressedArrayTexture?j.compressedTexSubImage3D(Fe,Oe,Ye,Tt,Kt,Ge,Ne,We,Lt,kt.data):j.texSubImage3D(Fe,Oe,Ye,Tt,Kt,Ge,Ne,We,Lt,Ot,kt):R.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,Oe,Ye,Tt,Ge,Ne,Lt,Ot,kt.data):R.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,Oe,Ye,Tt,kt.width,kt.height,Lt,kt.data):j.texSubImage2D(j.TEXTURE_2D,Oe,Ye,Tt,Ge,Ne,Lt,Ot,kt);b.pixelStorei(j.UNPACK_ROW_LENGTH,Un),b.pixelStorei(j.UNPACK_IMAGE_HEIGHT,ht),b.pixelStorei(j.UNPACK_SKIP_PIXELS,vn),b.pixelStorei(j.UNPACK_SKIP_ROWS,Qn),b.pixelStorei(j.UNPACK_SKIP_IMAGES,yi),Oe===0&&X.generateMipmaps&&j.generateMipmap(Fe),b.unbindTexture()},this.initRenderTarget=function(R){re.get(R).__webglFramebuffer===void 0&&fe.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?fe.setTextureCube(R,0):R.isData3DTexture?fe.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?fe.setTexture2DArray(R,0):fe.setTexture2D(R,0),b.unbindTexture()},this.resetState=function(){P=0,G=0,te=null,b.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=yt._getDrawingBufferColorSpace(e),i.unpackColorSpace=yt._getUnpackColorSpace()}}function LE(){const s=ft.useRef(null);return ft.useEffect(()=>{const e=s.current;if(!e)return;const i=new my,r=new vi(60,window.innerWidth/window.innerHeight,.1,100);r.position.set(0,6,9),r.lookAt(0,0,0);const l=new NE({alpha:!0,antialias:!0});l.setSize(window.innerWidth,window.innerHeight),l.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.appendChild(l.domElement);const c=35e3,d=9,m=3,p=1.2,h=.6,v=3,y=new Ui,g=new Float32Array(c*3),E=new Float32Array(c*3),A=new Et("#fd6e0a"),D=new Et("#00d2ff");for(let U=0;U<c;U++){const z=Math.pow(Math.random(),1.5)*d,T=U%m/m*Math.PI*2,O=z*p,q=Math.pow(Math.random(),v)*(Math.random()<.5?1:-1)*h*z,k=Math.pow(Math.random(),v)*(Math.random()<.5?1:-1)*h*z,Q=Math.pow(Math.random(),v)*(Math.random()<.5?1:-1)*h*z;g[U*3]=Math.cos(T+O)*z+q,g[U*3+1]=k,g[U*3+2]=Math.sin(T+O)*z+Q;const he=A.clone().lerp(D,z/d);E[U*3]=he.r,E[U*3+1]=he.g,E[U*3+2]=he.b}y.setAttribute("position",new Si(g,3)),y.setAttribute("color",new Si(E,3));const M=new vv({size:.025,sizeAttenuation:!0,depthWrite:!1,blending:jd,vertexColors:!0,transparent:!0,opacity:.45}),x=new Ty(y,M);i.add(x);const B=()=>{const U=window.innerWidth,z=window.innerHeight;r.aspect=U/z,r.updateProjectionMatrix(),l.setSize(U,z)};window.addEventListener("resize",B);let H;const w=new zy,I=()=>{const U=w.getElapsedTime();x.rotation.y=U*.04,x.rotation.x=Math.sin(U*.1)*.08,l.render(i,r),H=requestAnimationFrame(I)};return I(),()=>{window.removeEventListener("resize",B),cancelAnimationFrame(H),e&&l.domElement&&e.removeChild(l.domElement),y.dispose(),M.dispose(),l.dispose()}},[]),S.jsx("div",{ref:s,style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",pointerEvents:"none",zIndex:0,overflow:"hidden"}})}const Wd={},OE="Hello! I am Abhishek's Portfolio AI Assistant. I can answer questions about Abhishek's projects, technical skills, background, or help you send him a message. How can I help you today?",PE=typeof import.meta<"u"&&(Wd==null?void 0:Wd.VITE_CHATBOT_API_ENDPOINT)||"https://dum-e-ai.vercel.app/api/agent/chat";function zE(s={}){const e=s.apiEndpoint||PE,i=s.initialGreeting||OE,[r,l]=ft.useState(!!s.initialOpen),[c,d]=ft.useState(!1),[m,p]=ft.useState(""),[h,v]=ft.useState([{id:"msg_welcome",role:"assistant",content:i,timestamp:Date.now(),sources:[],projects:[]}]);ft.useEffect(()=>{var A,D;try{let M=(A=window.sessionStorage)==null?void 0:A.getItem("portfolio_ai_session_id");M||(M="sess_"+Math.random().toString(36).substring(2,10)+"_"+Date.now().toString(36),(D=window.sessionStorage)==null||D.setItem("portfolio_ai_session_id",M)),p(M)}catch{p("sess_fallback_"+Date.now())}},[]);const y=ft.useCallback(A=>{l(D=>typeof A=="boolean"?A:!D)},[]),g=ft.useCallback(()=>{var A;try{const D="sess_"+Math.random().toString(36).substring(2,10)+"_"+Date.now().toString(36);(A=window.sessionStorage)==null||A.setItem("portfolio_ai_session_id",D),p(D)}catch{p("sess_"+Date.now())}v([{id:"msg_"+Date.now(),role:"assistant",content:i,timestamp:Date.now(),sources:[],projects:[]}])},[i]),E=ft.useCallback(async A=>{if(!A||typeof A!="string"||A.trim().length===0||c)return;const D=A.trim(),M="msg_user_"+Date.now();v(x=>[...x,{id:M,role:"user",content:D,timestamp:Date.now()}]),d(!0);try{const x=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:D,sessionId:m||void 0})});if(!x.ok){const H=await x.json().catch(()=>({}));throw new Error(H.message||`Server responded with status ${x.status}`)}const B=await x.json();v(H=>[...H,{id:"msg_asst_"+Date.now(),role:"assistant",content:B.message||"I've processed your inquiry.",timestamp:Date.now(),sources:B.sources||[],projects:B.projects||[],toolCalls:B.toolCalls||[]}])}catch(x){console.error("[Portfolio Chatbot Error]:",x),v(B=>[...B,{id:"msg_err_"+Date.now(),role:"assistant",content:`⚠️ Sorry, I encountered an issue connecting to the portfolio assistant: ${x.message}`,timestamp:Date.now(),isError:!0}])}finally{d(!1)}},[e,m,c]);return{isOpen:r,isLoading:c,sessionId:m,messages:h,sendMessage:E,toggleChat:y,clearHistory:g}}function IE({project:s}){return s?S.jsxs("div",{className:"pc-project-card",children:[S.jsx("div",{className:"pc-project-title",children:s.name}),s.tagline&&S.jsx("p",{className:"pc-project-desc",children:s.tagline}),Array.isArray(s.technologies)&&s.technologies.length>0&&S.jsx("div",{className:"pc-tags",children:s.technologies.map((e,i)=>S.jsx("span",{className:"pc-tag",children:e},i))}),S.jsxs("div",{className:"pc-project-links",children:[s.liveDemo&&S.jsxs("a",{href:s.liveDemo,target:"_blank",rel:"noopener noreferrer",className:"pc-link-btn",children:[S.jsx("span",{children:"Live Demo"})," ↗"]}),s.github&&S.jsxs("a",{href:s.github,target:"_blank",rel:"noopener noreferrer",className:"pc-link-btn",children:[S.jsx("span",{children:"GitHub Code"})," ↗"]})]})]}):null}function Xo(s,e=""){if(!s)return null;const i=new RegExp("(\\[[^\\]]+\\]\\(https?:\\/\\/[^\\s)]+\\)|`[^`]+`|\\*\\*[^*]+\\*\\*|(?<!\\*)\\*[^*]+\\*(?!\\*)|https?:\\/\\/[^\\s<]+)","g"),r=[];let l=0,c;for(;(c=i.exec(s))!==null;){if(c.index>l){const h=s.substring(l,c.index).replace(/\*\*/g,"");h&&r.push(h)}const d=c[0],m=`${e}-${c.index}`;if(d.startsWith("**")&&d.endsWith("**")){const p=d.substring(2,d.length-2).trim();r.push(S.jsx("strong",{className:"pc-strong",children:p},m))}else if(d.startsWith("`")&&d.endsWith("`")){const p=d.substring(1,d.length-1);r.push(S.jsx("code",{className:"pc-inline-code",children:p},m))}else if(d.startsWith("[")&&d.includes("](")){const p=d.match(/^\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)$/);p?r.push(S.jsxs("a",{href:p[2],target:"_blank",rel:"noopener noreferrer",className:"pc-md-link",children:[p[1]," ",S.jsx("span",{style:{fontSize:"10px"},children:"↗"})]},m)):r.push(d)}else if(d.startsWith("http://")||d.startsWith("https://"))r.push(S.jsxs("a",{href:d,target:"_blank",rel:"noopener noreferrer",className:"pc-md-link",children:[d," ",S.jsx("span",{style:{fontSize:"10px"},children:"↗"})]},m));else if(d.startsWith("*")&&d.endsWith("*")){const p=d.substring(1,d.length-1).trim();r.push(S.jsx("em",{children:p},m))}else r.push(d.replace(/\*\*/g,""));l=i.lastIndex}if(l<s.length){const d=s.substring(l).replace(/\*\*/g,"");d&&r.push(d)}return r}function BE(s){if(!s||!((s.includes("contact request for Abhishek")||s.includes("prepared your contact request")||s.includes("draft for Abhishek")||s.includes("send this message to Abhishek"))&&/Name\*{0,2}\s*:/i.test(s)&&/Email\*{0,2}\s*:/i.test(s)))return null;const i=s.match(/(?:[\*\•\-]\s*)?\*{0,2}Name\*{0,2}\s*:\s*([^\n\r]+)/i),r=s.match(/(?:[\*\•\-]\s*)?\*{0,2}Email\*{0,2}\s*:\s*([^\n\r]+)/i),l=s.match(/(?:[\*\•\-]\s*)?\*{0,2}Message\*{0,2}\s*:\s*([^\n\r]+)/i);if(!i||!r)return null;const c=i[1].replace(/[*"`]/g,"").trim(),d=r[1].replace(/[*"`]/g,"").trim(),m=l?l[1].replace(/^["']|["']$/g,"").replace(/[*`]/g,"").trim():"",p=[],h=[];let v=!1;const y=s.split(`
`);for(const g of y){if(/(?:Name|Email|Message)\*{0,2}\s*:/i.test(g)||g.trim().startsWith("*")&&/(?:Name|Email|Message)/i.test(g)){v=!0;continue}v?g.trim().length>0&&h.push(g.trim()):g.trim().length>0&&p.push(g.trim())}return{name:c,email:d,message:m,intro:p.join(" "),followUp:h.join(" ")}}function FE(s){if(!s)return null;const e=s.split(`
`),i=[];let r=[];const l=()=>{r.length>0&&(i.push(S.jsx("div",{className:"pc-list-wrap",children:r.map((c,d)=>S.jsxs("div",{className:"pc-list-item",children:[c.type==="bullet"?S.jsx("span",{className:"pc-bullet",children:"✦"}):S.jsx("span",{className:"pc-num-badge",children:c.num}),S.jsx("div",{className:"pc-list-content",children:Xo(c.text,`li-${i.length}-${d}`)})]},d))},`list-${i.length}`)),r=[])};for(let c=0;c<e.length;c++){const d=e[c],m=d.trim();if(!m){l(),i.push(S.jsx("div",{className:"pc-spacer"},`sp-${c}`));continue}const p=m.match(/^(#{1,3})\s+(.+)$/);if(p){l(),i.push(S.jsx("h4",{className:"pc-content-heading",children:Xo(p[2],`h-${c}`)},`h-${c}`));continue}const h=m.match(/^(\d+)[\.\)]\s+(.+)$/);if(h){r.push({type:"numbered",num:h[1],text:h[2]});continue}const v=m.match(/^[\*\-\+•]\s+(.+)$/);if(v){r.push({type:"bullet",text:v[1]});continue}l(),i.push(S.jsx("p",{className:"pc-text-p",children:Xo(d,`p-${c}`)},`p-${c}`))}return l(),i}function HE({draft:s,onAction:e}){return S.jsxs("div",{className:"pc-contact-card",children:[S.jsxs("div",{className:"pc-contact-card-header",children:[S.jsxs("div",{className:"pc-contact-card-badge",children:[S.jsx("span",{className:"pc-pulse-dot"}),S.jsx("span",{children:"Contact Request Draft"})]}),S.jsx("span",{className:"pc-contact-card-to",children:"To: Abhishek Yadav"})]}),S.jsxs("div",{className:"pc-contact-card-body",children:[S.jsxs("div",{className:"pc-contact-field",children:[S.jsxs("span",{className:"pc-contact-label",children:[S.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[S.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),S.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),"Sender"]}),S.jsx("span",{className:"pc-contact-val pc-contact-bold",children:s.name})]}),S.jsxs("div",{className:"pc-contact-field",children:[S.jsxs("span",{className:"pc-contact-label",children:[S.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[S.jsx("rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}),S.jsx("path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"})]}),"Email"]}),S.jsx("span",{className:"pc-contact-val pc-contact-email",children:s.email})]}),s.message&&S.jsxs("div",{className:"pc-contact-field pc-contact-col",children:[S.jsxs("span",{className:"pc-contact-label",children:[S.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:S.jsx("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"})}),"Message"]}),S.jsxs("div",{className:"pc-contact-quote",children:["“",s.message,"”"]})]})]}),S.jsxs("div",{className:"pc-contact-actions",children:[S.jsxs("button",{type:"button",className:"pc-hitl-btn pc-hitl-confirm",onClick:()=>e&&e("Yes, please send it to Abhishek!"),children:[S.jsx("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:S.jsx("polyline",{points:"20 6 9 17 4 12"})}),"Confirm & Send"]}),S.jsxs("button",{type:"button",className:"pc-hitl-btn pc-hitl-cancel",onClick:()=>e&&e("No, cancel it"),children:[S.jsxs("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[S.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),S.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),"Cancel"]})]})]})}function GE({text:s}){const[e,i]=ft.useState(!1),r=()=>{const l=(s||"").replace(/\*\*/g,"").trim();typeof navigator<"u"&&navigator.clipboard&&navigator.clipboard.writeText(l).then(()=>{i(!0),setTimeout(()=>i(!1),2e3)})};return S.jsxs("button",{type:"button",className:"pc-copy-btn",onClick:r,title:e?"Copied to clipboard!":"Copy response",children:[e?S.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"#10b981",strokeWidth:"2.5",children:S.jsx("polyline",{points:"20 6 9 17 4 12"})}):S.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[S.jsx("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),S.jsx("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]}),S.jsx("span",{children:e?"Copied":"Copy"})]})}function VE({message:s,onAction:e}){const i=s.role==="user",r=i?null:BE(s.content),l=!i&&s.content&&(s.content.includes("successfully sent to Abhishek")||s.content.includes("Your message has been saved")),c=s.timestamp?new Date(s.timestamp).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):"",d=!i&&!r&&s.content&&(s.content.includes("Would you like me to send this message")||s.content.includes("Please confirm"));return S.jsxs("div",{className:`pc-msg-wrap ${i?"pc-msg-user":"pc-msg-assistant"}`,children:[!i&&S.jsxs("div",{className:"pc-msg-header-bar",children:[S.jsxs("span",{className:"pc-asst-label",children:[S.jsx("span",{className:"pc-sparkle",children:"✦"})," DUM-E"]}),S.jsx(GE,{text:s.content})]}),S.jsxs("div",{className:"pc-bubble",children:[r?S.jsxs("div",{children:[r.intro&&S.jsx("p",{className:"pc-text-p",children:Xo(r.intro,"intro")}),S.jsx(HE,{draft:r,onAction:e}),r.followUp&&!r.followUp.includes("Would you like me to send")&&S.jsx("p",{className:"pc-text-p",style:{marginTop:"10px"},children:Xo(r.followUp,"followup")})]}):FE(s.content),l&&S.jsx("div",{className:"pc-success-card",children:S.jsxs("div",{className:"pc-success-badge",children:[S.jsx("span",{className:"pc-success-check",children:"✔"}),S.jsx("span",{children:"Delivered directly to Abhishek"})]})}),d&&!r&&S.jsxs("div",{className:"pc-hitl-actions",children:[S.jsx("button",{type:"button",className:"pc-hitl-btn pc-hitl-confirm",onClick:()=>e&&e("Yes, please send it to Abhishek!"),children:"✔ Confirm & Send"}),S.jsx("button",{type:"button",className:"pc-hitl-btn pc-hitl-cancel",onClick:()=>e&&e("No, cancel it"),children:"✖ Cancel"})]}),Array.isArray(s.projects)&&s.projects.length>0&&S.jsx("div",{className:"pc-projects-list",children:s.projects.map((m,p)=>S.jsx(IE,{project:m},p))}),Array.isArray(s.sources)&&s.sources.length>0&&S.jsx("div",{className:"pc-sources-wrap",children:s.sources.map((m,p)=>S.jsxs("span",{className:"pc-source-chip",title:m.title,children:["📄 ",m.source]},p))})]}),c&&S.jsx("span",{className:"pc-msg-meta",children:c})]})}function kE(){return S.jsx("div",{className:"pc-msg-wrap pc-msg-assistant",children:S.jsxs("div",{className:"pc-thinking",children:[S.jsxs("div",{className:"pc-dots",children:[S.jsx("span",{className:"pc-dot"}),S.jsx("span",{className:"pc-dot"}),S.jsx("span",{className:"pc-dot"})]}),S.jsx("span",{children:"Thinking & querying portfolio knowledge..."})]})})}const WE=["🚀 What MERN projects has Abhishek built?","🧠 Explain the architecture of SAERS","💼 What are Abhishek’s technical skills?","📬 How can I contact or hire Abhishek?"];function XE({suggestions:s=WE,onSelect:e}){return!s||s.length===0?null:S.jsx("div",{className:"pc-suggestions",children:s.map((i,r)=>S.jsx("button",{type:"button",className:"pc-pill",onClick:()=>e&&e(i),children:i},r))})}function jE({isOpen:s,onClose:e,messages:i,isLoading:r,onSendMessage:l,onClearHistory:c}){const[d,m]=ft.useState(""),[p,h]=ft.useState(!1),[v,y]=ft.useState(!1),g=ft.useRef(null),E=ft.useRef(null);ft.useEffect(()=>{function M(x){E.current&&!E.current.contains(x.target)&&y(!1)}return v&&document.addEventListener("mousedown",M),()=>{document.removeEventListener("mousedown",M)}},[v]),ft.useEffect(()=>{var M;s&&((M=g.current)==null||M.scrollIntoView({behavior:"smooth"}))},[i,r,s]);const A=M=>{M==null||M.preventDefault(),!(!d.trim()||r)&&(l(d),m(""))},D=M=>{M.key==="Enter"&&!M.shiftKey&&(M.preventDefault(),A())};return S.jsxs("div",{className:`pc-window ${s?"pc-visible":""} ${p?"pc-expanded":""}`,children:[S.jsxs("div",{className:"pc-header",children:[S.jsxs("div",{className:"pc-header-left",children:[S.jsx("div",{className:"pc-header-avatar",children:"DE"}),S.jsxs("div",{className:"pc-header-info",children:[S.jsx("h4",{children:"DUM-E"}),S.jsxs("div",{className:"pc-header-status",children:[S.jsx("span",{className:"pc-header-dot"}),S.jsx("span",{children:"Online"})]})]})]}),S.jsxs("div",{className:"pc-header-actions",children:[S.jsx("button",{type:"button",className:"pc-icon-btn",title:p?"Restore compact size":"Expand chat window",onClick:()=>h(M=>!M),"aria-label":p?"Restore window size":"Expand window size",children:p?S.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[S.jsx("polyline",{points:"4 14 10 14 10 20"}),S.jsx("polyline",{points:"20 10 14 10 14 4"}),S.jsx("line",{x1:"14",y1:"10",x2:"21",y2:"3"}),S.jsx("line",{x1:"3",y1:"21",x2:"10",y2:"14"})]}):S.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[S.jsx("polyline",{points:"15 3 21 3 21 9"}),S.jsx("polyline",{points:"9 21 3 21 3 15"}),S.jsx("line",{x1:"21",y1:"3",x2:"14",y2:"10"}),S.jsx("line",{x1:"3",y1:"21",x2:"10",y2:"14"})]})}),S.jsxs("div",{className:"pc-menu-anchor",ref:E,children:[S.jsx("button",{type:"button",className:`pc-icon-btn ${v?"pc-active":""}`,title:"More options",onClick:()=>y(M=>!M),"aria-label":"More options","aria-expanded":v,children:S.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",children:[S.jsx("circle",{cx:"12",cy:"5",r:"1.8"}),S.jsx("circle",{cx:"12",cy:"12",r:"1.8"}),S.jsx("circle",{cx:"12",cy:"19",r:"1.8"})]})}),v&&S.jsxs("div",{className:"pc-dropdown-menu",children:[S.jsx("button",{type:"button",className:"pc-menu-item",onClick:()=>{h(M=>!M),y(!1)},children:p?S.jsxs(S.Fragment,{children:[S.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[S.jsx("polyline",{points:"4 14 10 14 10 20"}),S.jsx("polyline",{points:"20 10 14 10 14 4"}),S.jsx("line",{x1:"14",y1:"10",x2:"21",y2:"3"}),S.jsx("line",{x1:"3",y1:"21",x2:"10",y2:"14"})]}),S.jsx("span",{children:"Restore Compact Size"})]}):S.jsxs(S.Fragment,{children:[S.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[S.jsx("polyline",{points:"15 3 21 3 21 9"}),S.jsx("polyline",{points:"9 21 3 21 3 15"}),S.jsx("line",{x1:"21",y1:"3",x2:"14",y2:"10"}),S.jsx("line",{x1:"3",y1:"21",x2:"10",y2:"14"})]}),S.jsx("span",{children:"Expand Chat Window"})]})}),S.jsx("div",{className:"pc-menu-divider"}),S.jsxs("button",{type:"button",className:"pc-menu-item pc-menu-danger",onClick:()=>{c(),y(!1)},children:[S.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[S.jsx("path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}),S.jsx("path",{d:"M21 3v5h-5"}),S.jsx("path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}),S.jsx("path",{d:"M8 16H3v5"})]}),S.jsx("span",{children:"Clear & Refresh Chat"})]})]})]}),S.jsx("button",{type:"button",className:"pc-icon-btn",title:"Close chat",onClick:e,children:S.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[S.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),S.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]})]}),S.jsxs("div",{className:"pc-messages-container",children:[i.map(M=>S.jsx(VE,{message:M,onAction:x=>l(x)},M.id)),r&&S.jsx(kE,{}),S.jsx("div",{ref:g})]}),i.length<=2&&!r&&S.jsx(XE,{onSelect:M=>l(M)}),S.jsxs("form",{className:"pc-input-area",onSubmit:A,children:[S.jsx("input",{type:"text",className:"pc-input",placeholder:"Ask about projects, skills, or contact...",value:d,onChange:M=>m(M.target.value),onKeyDown:D,disabled:r}),S.jsx("button",{type:"submit",className:"pc-send-btn",disabled:!d.trim()||r,title:"Send message",children:S.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[S.jsx("line",{x1:"22",y1:"2",x2:"11",y2:"13"}),S.jsx("polygon",{points:"22 2 15 22 11 13 2 9 22 2"})]})})]})]})}const Xd={},qE=typeof import.meta<"u"&&(Xd==null?void 0:Xd.VITE_CHATBOT_API_ENDPOINT)||"https://dum-e-ai.vercel.app/api/agent/chat";function YE({apiEndpoint:s=qE,position:e="bottom-right",initialOpen:i=!1,initialGreeting:r}){const{isOpen:l,isLoading:c,messages:d,sendMessage:m,toggleChat:p,clearHistory:h}=zE({apiEndpoint:s,initialOpen:i,initialGreeting:r}),v=e==="bottom-left"?"pc-pos-left":"";return S.jsxs("div",{className:`pc-widget-root ${v}`,children:[S.jsx(jE,{isOpen:l,onClose:()=>p(!1),messages:d,isLoading:c,onSendMessage:m,onClearHistory:h}),S.jsxs("button",{type:"button",className:`pc-fab ${l?"pc-open":""}`,onClick:()=>p(),"aria-label":l?"Close AI Chat":"Open Portfolio AI Chat",children:[S.jsx("span",{className:"pc-status-badge",children:S.jsx("span",{className:"pc-status-ping"})}),l?S.jsxs("svg",{className:"pc-fab-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[S.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),S.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}):S.jsxs("svg",{className:"pc-fab-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[S.jsx("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}),S.jsx("circle",{cx:"9",cy:"10",r:"1",fill:"currentColor"}),S.jsx("circle",{cx:"15",cy:"10",r:"1",fill:"currentColor"})]})]})]})}function ZE(){const[s,e]=ft.useState("About");return S.jsxs("div",{style:{background:"#050714",minHeight:"100vh",position:"relative"},children:[S.jsx(LE,{}),S.jsx(X1,{active:s,setActive:e}),S.jsx(j1,{}),S.jsx(Y1,{}),S.jsx(Z1,{}),S.jsx(K1,{}),S.jsx(uS,{}),S.jsx(dS,{}),S.jsx(gS,{}),S.jsx(vS,{}),S.jsx(YE,{}),S.jsx("footer",{style:{textAlign:"center",padding:"24px",borderTop:"1px solid rgba(255, 255, 255, 0.05)",color:"rgba(255, 255, 255, 0.22)",fontSize:13},children:"Built with React · Abhishek Yadav © 2025"})]})}W1.createRoot(document.getElementById("root")).render(S.jsx(sr.StrictMode,{children:S.jsx(ZE,{})}));
