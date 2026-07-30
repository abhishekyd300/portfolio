(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const c of u.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(o){if(o.ep)return;o.ep=!0;const u=n(o);fetch(o.href,u)}})();function jm(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Ac={exports:{}},Oa={},bc={exports:{}},ht={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Op;function hv(){if(Op)return ht;Op=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),y=Symbol.iterator;function g(N){return N===null||typeof N!="object"?null:(N=y&&N[y]||N["@@iterator"],typeof N=="function"?N:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,C={};function _(N,K,Ne){this.props=N,this.context=K,this.refs=C,this.updater=Ne||M}_.prototype.isReactComponent={},_.prototype.setState=function(N,K){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,K,"setState")},_.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function v(){}v.prototype=_.prototype;function O(N,K,Ne){this.props=N,this.context=K,this.refs=C,this.updater=Ne||M}var k=O.prototype=new v;k.constructor=O,A(k,_.prototype),k.isPureReactComponent=!0;var b=Array.isArray,U=Object.prototype.hasOwnProperty,P={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function T(N,K,Ne){var qe,ze={},re=null,_e=null;if(K!=null)for(qe in K.ref!==void 0&&(_e=K.ref),K.key!==void 0&&(re=""+K.key),K)U.call(K,qe)&&!F.hasOwnProperty(qe)&&(ze[qe]=K[qe]);var pe=arguments.length-2;if(pe===1)ze.children=Ne;else if(1<pe){for(var Ue=Array(pe),Qe=0;Qe<pe;Qe++)Ue[Qe]=arguments[Qe+2];ze.children=Ue}if(N&&N.defaultProps)for(qe in pe=N.defaultProps,pe)ze[qe]===void 0&&(ze[qe]=pe[qe]);return{$$typeof:s,type:N,key:re,ref:_e,props:ze,_owner:P.current}}function D(N,K){return{$$typeof:s,type:N.type,key:K,ref:N.ref,props:N.props,_owner:N._owner}}function X(N){return typeof N=="object"&&N!==null&&N.$$typeof===s}function V(N){var K={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(Ne){return K[Ne]})}var $=/\/+/g;function ce(N,K){return typeof N=="object"&&N!==null&&N.key!=null?V(""+N.key):K.toString(36)}function ge(N,K,Ne,qe,ze){var re=typeof N;(re==="undefined"||re==="boolean")&&(N=null);var _e=!1;if(N===null)_e=!0;else switch(re){case"string":case"number":_e=!0;break;case"object":switch(N.$$typeof){case s:case e:_e=!0}}if(_e)return _e=N,ze=ze(_e),N=qe===""?"."+ce(_e,0):qe,b(ze)?(Ne="",N!=null&&(Ne=N.replace($,"$&/")+"/"),ge(ze,K,Ne,"",function(Qe){return Qe})):ze!=null&&(X(ze)&&(ze=D(ze,Ne+(!ze.key||_e&&_e.key===ze.key?"":(""+ze.key).replace($,"$&/")+"/")+N)),K.push(ze)),1;if(_e=0,qe=qe===""?".":qe+":",b(N))for(var pe=0;pe<N.length;pe++){re=N[pe];var Ue=qe+ce(re,pe);_e+=ge(re,K,Ne,Ue,ze)}else if(Ue=g(N),typeof Ue=="function")for(N=Ue.call(N),pe=0;!(re=N.next()).done;)re=re.value,Ue=qe+ce(re,pe++),_e+=ge(re,K,Ne,Ue,ze);else if(re==="object")throw K=String(N),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.");return _e}function Z(N,K,Ne){if(N==null)return N;var qe=[],ze=0;return ge(N,qe,"","",function(re){return K.call(Ne,re,ze++)}),qe}function fe(N){if(N._status===-1){var K=N._result;K=K(),K.then(function(Ne){(N._status===0||N._status===-1)&&(N._status=1,N._result=Ne)},function(Ne){(N._status===0||N._status===-1)&&(N._status=2,N._result=Ne)}),N._status===-1&&(N._status=0,N._result=K)}if(N._status===1)return N._result.default;throw N._result}var q={current:null},Y={transition:null},oe={ReactCurrentDispatcher:q,ReactCurrentBatchConfig:Y,ReactCurrentOwner:P};function le(){throw Error("act(...) is not supported in production builds of React.")}return ht.Children={map:Z,forEach:function(N,K,Ne){Z(N,function(){K.apply(this,arguments)},Ne)},count:function(N){var K=0;return Z(N,function(){K++}),K},toArray:function(N){return Z(N,function(K){return K})||[]},only:function(N){if(!X(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},ht.Component=_,ht.Fragment=n,ht.Profiler=o,ht.PureComponent=O,ht.StrictMode=r,ht.Suspense=p,ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oe,ht.act=le,ht.cloneElement=function(N,K,Ne){if(N==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+N+".");var qe=A({},N.props),ze=N.key,re=N.ref,_e=N._owner;if(K!=null){if(K.ref!==void 0&&(re=K.ref,_e=P.current),K.key!==void 0&&(ze=""+K.key),N.type&&N.type.defaultProps)var pe=N.type.defaultProps;for(Ue in K)U.call(K,Ue)&&!F.hasOwnProperty(Ue)&&(qe[Ue]=K[Ue]===void 0&&pe!==void 0?pe[Ue]:K[Ue])}var Ue=arguments.length-2;if(Ue===1)qe.children=Ne;else if(1<Ue){pe=Array(Ue);for(var Qe=0;Qe<Ue;Qe++)pe[Qe]=arguments[Qe+2];qe.children=pe}return{$$typeof:s,type:N.type,key:ze,ref:re,props:qe,_owner:_e}},ht.createContext=function(N){return N={$$typeof:c,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},N.Provider={$$typeof:u,_context:N},N.Consumer=N},ht.createElement=T,ht.createFactory=function(N){var K=T.bind(null,N);return K.type=N,K},ht.createRef=function(){return{current:null}},ht.forwardRef=function(N){return{$$typeof:d,render:N}},ht.isValidElement=X,ht.lazy=function(N){return{$$typeof:S,_payload:{_status:-1,_result:N},_init:fe}},ht.memo=function(N,K){return{$$typeof:m,type:N,compare:K===void 0?null:K}},ht.startTransition=function(N){var K=Y.transition;Y.transition={};try{N()}finally{Y.transition=K}},ht.unstable_act=le,ht.useCallback=function(N,K){return q.current.useCallback(N,K)},ht.useContext=function(N){return q.current.useContext(N)},ht.useDebugValue=function(){},ht.useDeferredValue=function(N){return q.current.useDeferredValue(N)},ht.useEffect=function(N,K){return q.current.useEffect(N,K)},ht.useId=function(){return q.current.useId()},ht.useImperativeHandle=function(N,K,Ne){return q.current.useImperativeHandle(N,K,Ne)},ht.useInsertionEffect=function(N,K){return q.current.useInsertionEffect(N,K)},ht.useLayoutEffect=function(N,K){return q.current.useLayoutEffect(N,K)},ht.useMemo=function(N,K){return q.current.useMemo(N,K)},ht.useReducer=function(N,K,Ne){return q.current.useReducer(N,K,Ne)},ht.useRef=function(N){return q.current.useRef(N)},ht.useState=function(N){return q.current.useState(N)},ht.useSyncExternalStore=function(N,K,Ne){return q.current.useSyncExternalStore(N,K,Ne)},ht.useTransition=function(){return q.current.useTransition()},ht.version="18.3.1",ht}var kp;function id(){return kp||(kp=1,bc.exports=hv()),bc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bp;function pv(){if(Bp)return Oa;Bp=1;var s=id(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function c(d,p,m){var S,y={},g=null,M=null;m!==void 0&&(g=""+m),p.key!==void 0&&(g=""+p.key),p.ref!==void 0&&(M=p.ref);for(S in p)r.call(p,S)&&!u.hasOwnProperty(S)&&(y[S]=p[S]);if(d&&d.defaultProps)for(S in p=d.defaultProps,p)y[S]===void 0&&(y[S]=p[S]);return{$$typeof:e,type:d,key:g,ref:M,props:y,_owner:o.current}}return Oa.Fragment=n,Oa.jsx=c,Oa.jsxs=c,Oa}var zp;function mv(){return zp||(zp=1,Ac.exports=pv()),Ac.exports}var L=mv(),fn=id();const Rr=jm(fn);var il={},Cc={exports:{}},kn={},Rc={exports:{}},Pc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vp;function gv(){return Vp||(Vp=1,(function(s){function e(Y,oe){var le=Y.length;Y.push(oe);e:for(;0<le;){var N=le-1>>>1,K=Y[N];if(0<o(K,oe))Y[N]=oe,Y[le]=K,le=N;else break e}}function n(Y){return Y.length===0?null:Y[0]}function r(Y){if(Y.length===0)return null;var oe=Y[0],le=Y.pop();if(le!==oe){Y[0]=le;e:for(var N=0,K=Y.length,Ne=K>>>1;N<Ne;){var qe=2*(N+1)-1,ze=Y[qe],re=qe+1,_e=Y[re];if(0>o(ze,le))re<K&&0>o(_e,ze)?(Y[N]=_e,Y[re]=le,N=re):(Y[N]=ze,Y[qe]=le,N=qe);else if(re<K&&0>o(_e,le))Y[N]=_e,Y[re]=le,N=re;else break e}}return oe}function o(Y,oe){var le=Y.sortIndex-oe.sortIndex;return le!==0?le:Y.id-oe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var c=Date,d=c.now();s.unstable_now=function(){return c.now()-d}}var p=[],m=[],S=1,y=null,g=3,M=!1,A=!1,C=!1,_=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function k(Y){for(var oe=n(m);oe!==null;){if(oe.callback===null)r(m);else if(oe.startTime<=Y)r(m),oe.sortIndex=oe.expirationTime,e(p,oe);else break;oe=n(m)}}function b(Y){if(C=!1,k(Y),!A)if(n(p)!==null)A=!0,fe(U);else{var oe=n(m);oe!==null&&q(b,oe.startTime-Y)}}function U(Y,oe){A=!1,C&&(C=!1,v(T),T=-1),M=!0;var le=g;try{for(k(oe),y=n(p);y!==null&&(!(y.expirationTime>oe)||Y&&!V());){var N=y.callback;if(typeof N=="function"){y.callback=null,g=y.priorityLevel;var K=N(y.expirationTime<=oe);oe=s.unstable_now(),typeof K=="function"?y.callback=K:y===n(p)&&r(p),k(oe)}else r(p);y=n(p)}if(y!==null)var Ne=!0;else{var qe=n(m);qe!==null&&q(b,qe.startTime-oe),Ne=!1}return Ne}finally{y=null,g=le,M=!1}}var P=!1,F=null,T=-1,D=5,X=-1;function V(){return!(s.unstable_now()-X<D)}function $(){if(F!==null){var Y=s.unstable_now();X=Y;var oe=!0;try{oe=F(!0,Y)}finally{oe?ce():(P=!1,F=null)}}else P=!1}var ce;if(typeof O=="function")ce=function(){O($)};else if(typeof MessageChannel<"u"){var ge=new MessageChannel,Z=ge.port2;ge.port1.onmessage=$,ce=function(){Z.postMessage(null)}}else ce=function(){_($,0)};function fe(Y){F=Y,P||(P=!0,ce())}function q(Y,oe){T=_(function(){Y(s.unstable_now())},oe)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(Y){Y.callback=null},s.unstable_continueExecution=function(){A||M||(A=!0,fe(U))},s.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<Y?Math.floor(1e3/Y):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_getFirstCallbackNode=function(){return n(p)},s.unstable_next=function(Y){switch(g){case 1:case 2:case 3:var oe=3;break;default:oe=g}var le=g;g=oe;try{return Y()}finally{g=le}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(Y,oe){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var le=g;g=Y;try{return oe()}finally{g=le}},s.unstable_scheduleCallback=function(Y,oe,le){var N=s.unstable_now();switch(typeof le=="object"&&le!==null?(le=le.delay,le=typeof le=="number"&&0<le?N+le:N):le=N,Y){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=le+K,Y={id:S++,callback:oe,priorityLevel:Y,startTime:le,expirationTime:K,sortIndex:-1},le>N?(Y.sortIndex=le,e(m,Y),n(p)===null&&Y===n(m)&&(C?(v(T),T=-1):C=!0,q(b,le-N))):(Y.sortIndex=K,e(p,Y),A||M||(A=!0,fe(U))),Y},s.unstable_shouldYield=V,s.unstable_wrapCallback=function(Y){var oe=g;return function(){var le=g;g=oe;try{return Y.apply(this,arguments)}finally{g=le}}}})(Pc)),Pc}var Hp;function vv(){return Hp||(Hp=1,Rc.exports=gv()),Rc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gp;function _v(){if(Gp)return kn;Gp=1;var s=id(),e=vv();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function u(t,i){c(t,i),c(t+"Capture",i)}function c(t,i){for(o[t]=i,t=0;t<i.length;t++)r.add(i[t])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,S={},y={};function g(t){return p.call(y,t)?!0:p.call(S,t)?!1:m.test(t)?y[t]=!0:(S[t]=!0,!1)}function M(t,i,a,l){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:a!==null?!a.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function A(t,i,a,l){if(i===null||typeof i>"u"||M(t,i,a,l))return!0;if(l)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function C(t,i,a,l,f,h,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=E}var _={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){_[t]=new C(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];_[i]=new C(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){_[t]=new C(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){_[t]=new C(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){_[t]=new C(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){_[t]=new C(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){_[t]=new C(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){_[t]=new C(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){_[t]=new C(t,5,!1,t.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function O(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(v,O);_[i]=new C(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(v,O);_[i]=new C(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(v,O);_[i]=new C(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){_[t]=new C(t,1,!1,t.toLowerCase(),null,!1,!1)}),_.xlinkHref=new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){_[t]=new C(t,1,!1,t.toLowerCase(),null,!0,!0)});function k(t,i,a,l){var f=_.hasOwnProperty(i)?_[i]:null;(f!==null?f.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(A(i,a,f,l)&&(a=null),l||f===null?g(i)&&(a===null?t.removeAttribute(i):t.setAttribute(i,""+a)):f.mustUseProperty?t[f.propertyName]=a===null?f.type===3?!1:"":a:(i=f.attributeName,l=f.attributeNamespace,a===null?t.removeAttribute(i):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,l?t.setAttributeNS(l,i,a):t.setAttribute(i,a))))}var b=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,U=Symbol.for("react.element"),P=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),X=Symbol.for("react.provider"),V=Symbol.for("react.context"),$=Symbol.for("react.forward_ref"),ce=Symbol.for("react.suspense"),ge=Symbol.for("react.suspense_list"),Z=Symbol.for("react.memo"),fe=Symbol.for("react.lazy"),q=Symbol.for("react.offscreen"),Y=Symbol.iterator;function oe(t){return t===null||typeof t!="object"?null:(t=Y&&t[Y]||t["@@iterator"],typeof t=="function"?t:null)}var le=Object.assign,N;function K(t){if(N===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);N=i&&i[1]||""}return`
`+N+t}var Ne=!1;function qe(t,i){if(!t||Ne)return"";Ne=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ae){var l=ae}Reflect.construct(t,[],i)}else{try{i.call()}catch(ae){l=ae}t.call(i.prototype)}else{try{throw Error()}catch(ae){l=ae}t()}}catch(ae){if(ae&&l&&typeof ae.stack=="string"){for(var f=ae.stack.split(`
`),h=l.stack.split(`
`),E=f.length-1,I=h.length-1;1<=E&&0<=I&&f[E]!==h[I];)I--;for(;1<=E&&0<=I;E--,I--)if(f[E]!==h[I]){if(E!==1||I!==1)do if(E--,I--,0>I||f[E]!==h[I]){var B=`
`+f[E].replace(" at new "," at ");return t.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",t.displayName)),B}while(1<=E&&0<=I);break}}}finally{Ne=!1,Error.prepareStackTrace=a}return(t=t?t.displayName||t.name:"")?K(t):""}function ze(t){switch(t.tag){case 5:return K(t.type);case 16:return K("Lazy");case 13:return K("Suspense");case 19:return K("SuspenseList");case 0:case 2:case 15:return t=qe(t.type,!1),t;case 11:return t=qe(t.type.render,!1),t;case 1:return t=qe(t.type,!0),t;default:return""}}function re(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case F:return"Fragment";case P:return"Portal";case D:return"Profiler";case T:return"StrictMode";case ce:return"Suspense";case ge:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case V:return(t.displayName||"Context")+".Consumer";case X:return(t._context.displayName||"Context")+".Provider";case $:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Z:return i=t.displayName||null,i!==null?i:re(t.type)||"Memo";case fe:i=t._payload,t=t._init;try{return re(t(i))}catch{}}return null}function _e(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return re(i);case 8:return i===T?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function pe(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ue(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Qe(t){var i=Ue(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,h=a.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(E){l=""+E,h.call(this,E)}}),Object.defineProperty(t,i,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(E){l=""+E},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Je(t){t._valueTracker||(t._valueTracker=Qe(t))}function kt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return t&&(l=Ue(t)?t.checked?"true":"false":t.value),t=l,t!==a?(i.setValue(t),!0):!1}function ut(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Tt(t,i){var a=i.checked;return le({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??t._wrapperState.initialChecked})}function vt(t,i){var a=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;a=pe(i.value!=null?i.value:a),t._wrapperState={initialChecked:l,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function pt(t,i){i=i.checked,i!=null&&k(t,"checked",i,!1)}function Bt(t,i){pt(t,i);var a=pe(i.value),l=i.type;if(a!=null)l==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+a):t.value!==""+a&&(t.value=""+a);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?qt(t,i.type,a):i.hasOwnProperty("defaultValue")&&qt(t,i.type,pe(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function jt(t,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,a||i===t.value||(t.value=i),t.defaultValue=i}a=t.name,a!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,a!==""&&(t.name=a)}function qt(t,i,a){(i!=="number"||ut(t.ownerDocument)!==t)&&(a==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+a&&(t.defaultValue=""+a))}var Gt=Array.isArray;function Ct(t,i,a,l){if(t=t.options,i){i={};for(var f=0;f<a.length;f++)i["$"+a[f]]=!0;for(a=0;a<t.length;a++)f=i.hasOwnProperty("$"+t[a].value),t[a].selected!==f&&(t[a].selected=f),f&&l&&(t[a].defaultSelected=!0)}else{for(a=""+pe(a),i=null,f=0;f<t.length;f++){if(t[f].value===a){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function zt(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return le({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function G(t,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(n(92));if(Gt(a)){if(1<a.length)throw Error(n(93));a=a[0]}i=a}i==null&&(i=""),a=i}t._wrapperState={initialValue:pe(a)}}function dn(t,i){var a=pe(i.value),l=pe(i.defaultValue);a!=null&&(a=""+a,a!==t.value&&(t.value=a),i.defaultValue==null&&t.defaultValue!==a&&(t.defaultValue=a)),l!=null&&(t.defaultValue=""+l)}function Mt(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function R(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function x(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?R(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var j,ne=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,l,f){MSApp.execUnsafeLocalFunction(function(){return t(i,a,l,f)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(j=j||document.createElement("div"),j.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=j.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function ue(t,i){if(i){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=i;return}}t.textContent=i}var Me={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ce=["Webkit","ms","Moz","O"];Object.keys(Me).forEach(function(t){Ce.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Me[i]=Me[t]})});function de(t,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Me.hasOwnProperty(t)&&Me[t]?(""+i).trim():i+"px"}function me(t,i){t=t.style;for(var a in i)if(i.hasOwnProperty(a)){var l=a.indexOf("--")===0,f=de(a,i[a],l);a==="float"&&(a="cssFloat"),l?t.setProperty(a,f):t[a]=f}}var Pe=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ye(t,i){if(i){if(Pe[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function Le(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var be=null;function Ze(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var et=null,it=null,z=null;function Ae(t){if(t=Ma(t)){if(typeof et!="function")throw Error(n(280));var i=t.stateNode;i&&(i=_o(i),et(t.stateNode,t.type,i))}}function he(t){it?z?z.push(t):z=[t]:it=t}function Re(){if(it){var t=it,i=z;if(z=it=null,Ae(t),i)for(t=0;t<i.length;t++)Ae(i[t])}}function De(t,i){return t(i)}function ve(){}var Ge=!1;function Ve(t,i,a){if(Ge)return t(i,a);Ge=!0;try{return De(t,i,a)}finally{Ge=!1,(it!==null||z!==null)&&(ve(),Re())}}function Dt(t,i){var a=t.stateNode;if(a===null)return null;var l=_o(a);if(l===null)return null;a=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(n(231,i,typeof a));return a}var At=!1;if(d)try{var _n={};Object.defineProperty(_n,"passive",{get:function(){At=!0}}),window.addEventListener("test",_n,_n),window.removeEventListener("test",_n,_n)}catch{At=!1}function qn(t,i,a,l,f,h,E,I,B){var ae=Array.prototype.slice.call(arguments,3);try{i.apply(a,ae)}catch(Se){this.onError(Se)}}var Lr=!1,us=null,Dr=!1,Ir=null,$l={onError:function(t){Lr=!0,us=t}};function Ja(t,i,a,l,f,h,E,I,B){Lr=!1,us=null,qn.apply($l,arguments)}function eo(t,i,a,l,f,h,E,I,B){if(Ja.apply(this,arguments),Lr){if(Lr){var ae=us;Lr=!1,us=null}else throw Error(n(198));Dr||(Dr=!0,Ir=ae)}}function An(t){var i=t,a=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(a=i.return),t=i.return;while(t)}return i.tag===3?a:null}function cs(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function na(t){if(An(t)!==t)throw Error(n(188))}function to(t){var i=t.alternate;if(!i){if(i=An(t),i===null)throw Error(n(188));return i!==t?null:t}for(var a=t,l=i;;){var f=a.return;if(f===null)break;var h=f.alternate;if(h===null){if(l=f.return,l!==null){a=l;continue}break}if(f.child===h.child){for(h=f.child;h;){if(h===a)return na(f),t;if(h===l)return na(f),i;h=h.sibling}throw Error(n(188))}if(a.return!==l.return)a=f,l=h;else{for(var E=!1,I=f.child;I;){if(I===a){E=!0,a=f,l=h;break}if(I===l){E=!0,l=f,a=h;break}I=I.sibling}if(!E){for(I=h.child;I;){if(I===a){E=!0,a=h,l=f;break}if(I===l){E=!0,l=h,a=f;break}I=I.sibling}if(!E)throw Error(n(189))}}if(a.alternate!==l)throw Error(n(190))}if(a.tag!==3)throw Error(n(188));return a.stateNode.current===a?t:i}function Nr(t){return t=to(t),t!==null?ia(t):null}function ia(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=ia(t);if(i!==null)return i;t=t.sibling}return null}var Ur=e.unstable_scheduleCallback,ra=e.unstable_cancelCallback,no=e.unstable_shouldYield,Kl=e.unstable_requestPaint,Wt=e.unstable_now,Zl=e.unstable_getCurrentPriorityLevel,sa=e.unstable_ImmediatePriority,w=e.unstable_UserBlockingPriority,W=e.unstable_NormalPriority,se=e.unstable_LowPriority,ee=e.unstable_IdlePriority,J=null,we=null;function ke(t){if(we&&typeof we.onCommitFiberRoot=="function")try{we.onCommitFiberRoot(J,t,void 0,(t.current.flags&128)===128)}catch{}}var Te=Math.clz32?Math.clz32:at,We=Math.log,Ke=Math.LN2;function at(t){return t>>>=0,t===0?32:31-(We(t)/Ke|0)|0}var ot=64,je=4194304;function _t(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function It(t,i){var a=t.pendingLanes;if(a===0)return 0;var l=0,f=t.suspendedLanes,h=t.pingedLanes,E=a&268435455;if(E!==0){var I=E&~f;I!==0?l=_t(I):(h&=E,h!==0&&(l=_t(h)))}else E=a&~f,E!==0?l=_t(E):h!==0&&(l=_t(h));if(l===0)return 0;if(i!==0&&i!==l&&(i&f)===0&&(f=l&-l,h=i&-i,f>=h||f===16&&(h&4194240)!==0))return i;if((l&4)!==0&&(l|=a&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)a=31-Te(i),f=1<<a,l|=t[a],i&=~f;return l}function Vt(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Rt(t,i){for(var a=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,h=t.pendingLanes;0<h;){var E=31-Te(h),I=1<<E,B=f[E];B===-1?((I&a)===0||(I&l)!==0)&&(f[E]=Vt(I,i)):B<=i&&(t.expiredLanes|=I),h&=~I}}function Jt(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Fe(){var t=ot;return ot<<=1,(ot&4194240)===0&&(ot=64),t}function hn(t){for(var i=[],a=0;31>a;a++)i.push(t);return i}function ft(t,i,a){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-Te(i),t[i]=a}function Ln(t,i){var a=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<a;){var f=31-Te(a),h=1<<f;i[f]=0,l[f]=-1,t[f]=-1,a&=~h}}function Dn(t,i){var a=t.entangledLanes|=i;for(t=t.entanglements;a;){var l=31-Te(a),f=1<<l;f&i|t[l]&i&&(t[l]|=i),a&=~f}}var dt=0;function Ni(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var bt,Ut,ai,Pt,oi,Si=!1,Fr=[],nr=null,ir=null,rr=null,aa=new Map,oa=new Map,sr=[],U0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sd(t,i){switch(t){case"focusin":case"focusout":nr=null;break;case"dragenter":case"dragleave":ir=null;break;case"mouseover":case"mouseout":rr=null;break;case"pointerover":case"pointerout":aa.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":oa.delete(i.pointerId)}}function la(t,i,a,l,f,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:h,targetContainers:[f]},i!==null&&(i=Ma(i),i!==null&&Ut(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function F0(t,i,a,l,f){switch(i){case"focusin":return nr=la(nr,t,i,a,l,f),!0;case"dragenter":return ir=la(ir,t,i,a,l,f),!0;case"mouseover":return rr=la(rr,t,i,a,l,f),!0;case"pointerover":var h=f.pointerId;return aa.set(h,la(aa.get(h)||null,t,i,a,l,f)),!0;case"gotpointercapture":return h=f.pointerId,oa.set(h,la(oa.get(h)||null,t,i,a,l,f)),!0}return!1}function yd(t){var i=Or(t.target);if(i!==null){var a=An(i);if(a!==null){if(i=a.tag,i===13){if(i=cs(a),i!==null){t.blockedOn=i,oi(t.priority,function(){ai(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function io(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var a=Jl(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);be=l,a.target.dispatchEvent(l),be=null}else return i=Ma(a),i!==null&&Ut(i),t.blockedOn=a,!1;i.shift()}return!0}function Md(t,i,a){io(t)&&a.delete(i)}function O0(){Si=!1,nr!==null&&io(nr)&&(nr=null),ir!==null&&io(ir)&&(ir=null),rr!==null&&io(rr)&&(rr=null),aa.forEach(Md),oa.forEach(Md)}function ua(t,i){t.blockedOn===i&&(t.blockedOn=null,Si||(Si=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,O0)))}function ca(t){function i(f){return ua(f,t)}if(0<Fr.length){ua(Fr[0],t);for(var a=1;a<Fr.length;a++){var l=Fr[a];l.blockedOn===t&&(l.blockedOn=null)}}for(nr!==null&&ua(nr,t),ir!==null&&ua(ir,t),rr!==null&&ua(rr,t),aa.forEach(i),oa.forEach(i),a=0;a<sr.length;a++)l=sr[a],l.blockedOn===t&&(l.blockedOn=null);for(;0<sr.length&&(a=sr[0],a.blockedOn===null);)yd(a),a.blockedOn===null&&sr.shift()}var fs=b.ReactCurrentBatchConfig,ro=!0;function k0(t,i,a,l){var f=dt,h=fs.transition;fs.transition=null;try{dt=1,Ql(t,i,a,l)}finally{dt=f,fs.transition=h}}function B0(t,i,a,l){var f=dt,h=fs.transition;fs.transition=null;try{dt=4,Ql(t,i,a,l)}finally{dt=f,fs.transition=h}}function Ql(t,i,a,l){if(ro){var f=Jl(t,i,a,l);if(f===null)gu(t,i,l,so,a),Sd(t,l);else if(F0(f,t,i,a,l))l.stopPropagation();else if(Sd(t,l),i&4&&-1<U0.indexOf(t)){for(;f!==null;){var h=Ma(f);if(h!==null&&bt(h),h=Jl(t,i,a,l),h===null&&gu(t,i,l,so,a),h===f)break;f=h}f!==null&&l.stopPropagation()}else gu(t,i,l,null,a)}}var so=null;function Jl(t,i,a,l){if(so=null,t=Ze(l),t=Or(t),t!==null)if(i=An(t),i===null)t=null;else if(a=i.tag,a===13){if(t=cs(i),t!==null)return t;t=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return so=t,null}function Ed(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Zl()){case sa:return 1;case w:return 4;case W:case se:return 16;case ee:return 536870912;default:return 16}default:return 16}}var ar=null,eu=null,ao=null;function Td(){if(ao)return ao;var t,i=eu,a=i.length,l,f="value"in ar?ar.value:ar.textContent,h=f.length;for(t=0;t<a&&i[t]===f[t];t++);var E=a-t;for(l=1;l<=E&&i[a-l]===f[h-l];l++);return ao=f.slice(t,1<l?1-l:void 0)}function oo(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function lo(){return!0}function wd(){return!1}function Hn(t){function i(a,l,f,h,E){this._reactName=a,this._targetInst=f,this.type=l,this.nativeEvent=h,this.target=E,this.currentTarget=null;for(var I in t)t.hasOwnProperty(I)&&(a=t[I],this[I]=a?a(h):h[I]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?lo:wd,this.isPropagationStopped=wd,this}return le(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=lo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=lo)},persist:function(){},isPersistent:lo}),i}var ds={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tu=Hn(ds),fa=le({},ds,{view:0,detail:0}),z0=Hn(fa),nu,iu,da,uo=le({},fa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:su,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==da&&(da&&t.type==="mousemove"?(nu=t.screenX-da.screenX,iu=t.screenY-da.screenY):iu=nu=0,da=t),nu)},movementY:function(t){return"movementY"in t?t.movementY:iu}}),Ad=Hn(uo),V0=le({},uo,{dataTransfer:0}),H0=Hn(V0),G0=le({},fa,{relatedTarget:0}),ru=Hn(G0),W0=le({},ds,{animationName:0,elapsedTime:0,pseudoElement:0}),X0=Hn(W0),Y0=le({},ds,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),j0=Hn(Y0),q0=le({},ds,{data:0}),bd=Hn(q0),$0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},K0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Z0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Q0(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Z0[t])?!!i[t]:!1}function su(){return Q0}var J0=le({},fa,{key:function(t){if(t.key){var i=$0[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=oo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?K0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:su,charCode:function(t){return t.type==="keypress"?oo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?oo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),eg=Hn(J0),tg=le({},uo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cd=Hn(tg),ng=le({},fa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:su}),ig=Hn(ng),rg=le({},ds,{propertyName:0,elapsedTime:0,pseudoElement:0}),sg=Hn(rg),ag=le({},uo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),og=Hn(ag),lg=[9,13,27,32],au=d&&"CompositionEvent"in window,ha=null;d&&"documentMode"in document&&(ha=document.documentMode);var ug=d&&"TextEvent"in window&&!ha,Rd=d&&(!au||ha&&8<ha&&11>=ha),Pd=" ",Ld=!1;function Dd(t,i){switch(t){case"keyup":return lg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Id(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var hs=!1;function cg(t,i){switch(t){case"compositionend":return Id(i);case"keypress":return i.which!==32?null:(Ld=!0,Pd);case"textInput":return t=i.data,t===Pd&&Ld?null:t;default:return null}}function fg(t,i){if(hs)return t==="compositionend"||!au&&Dd(t,i)?(t=Td(),ao=eu=ar=null,hs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Rd&&i.locale!=="ko"?null:i.data;default:return null}}var dg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nd(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!dg[t.type]:i==="textarea"}function Ud(t,i,a,l){he(l),i=mo(i,"onChange"),0<i.length&&(a=new tu("onChange","change",null,a,l),t.push({event:a,listeners:i}))}var pa=null,ma=null;function hg(t){Jd(t,0)}function co(t){var i=_s(t);if(kt(i))return t}function pg(t,i){if(t==="change")return i}var Fd=!1;if(d){var ou;if(d){var lu="oninput"in document;if(!lu){var Od=document.createElement("div");Od.setAttribute("oninput","return;"),lu=typeof Od.oninput=="function"}ou=lu}else ou=!1;Fd=ou&&(!document.documentMode||9<document.documentMode)}function kd(){pa&&(pa.detachEvent("onpropertychange",Bd),ma=pa=null)}function Bd(t){if(t.propertyName==="value"&&co(ma)){var i=[];Ud(i,ma,t,Ze(t)),Ve(hg,i)}}function mg(t,i,a){t==="focusin"?(kd(),pa=i,ma=a,pa.attachEvent("onpropertychange",Bd)):t==="focusout"&&kd()}function gg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return co(ma)}function vg(t,i){if(t==="click")return co(i)}function _g(t,i){if(t==="input"||t==="change")return co(i)}function xg(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var li=typeof Object.is=="function"?Object.is:xg;function ga(t,i){if(li(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var a=Object.keys(t),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var f=a[l];if(!p.call(i,f)||!li(t[f],i[f]))return!1}return!0}function zd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Vd(t,i){var a=zd(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=i&&l>=i)return{node:a,offset:i-t};t=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=zd(a)}}function Hd(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Hd(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Gd(){for(var t=window,i=ut();i instanceof t.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)t=i.contentWindow;else break;i=ut(t.document)}return i}function uu(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function Sg(t){var i=Gd(),a=t.focusedElem,l=t.selectionRange;if(i!==a&&a&&a.ownerDocument&&Hd(a.ownerDocument.documentElement,a)){if(l!==null&&uu(a)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(t,a.value.length);else if(t=(i=a.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var f=a.textContent.length,h=Math.min(l.start,f);l=l.end===void 0?h:Math.min(l.end,f),!t.extend&&h>l&&(f=l,l=h,h=f),f=Vd(a,h);var E=Vd(a,l);f&&E&&(t.rangeCount!==1||t.anchorNode!==f.node||t.anchorOffset!==f.offset||t.focusNode!==E.node||t.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),t.removeAllRanges(),h>l?(t.addRange(i),t.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),t.addRange(i)))}}for(i=[],t=a;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)t=i[a],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var yg=d&&"documentMode"in document&&11>=document.documentMode,ps=null,cu=null,va=null,fu=!1;function Wd(t,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;fu||ps==null||ps!==ut(l)||(l=ps,"selectionStart"in l&&uu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),va&&ga(va,l)||(va=l,l=mo(cu,"onSelect"),0<l.length&&(i=new tu("onSelect","select",null,i,a),t.push({event:i,listeners:l}),i.target=ps)))}function fo(t,i){var a={};return a[t.toLowerCase()]=i.toLowerCase(),a["Webkit"+t]="webkit"+i,a["Moz"+t]="moz"+i,a}var ms={animationend:fo("Animation","AnimationEnd"),animationiteration:fo("Animation","AnimationIteration"),animationstart:fo("Animation","AnimationStart"),transitionend:fo("Transition","TransitionEnd")},du={},Xd={};d&&(Xd=document.createElement("div").style,"AnimationEvent"in window||(delete ms.animationend.animation,delete ms.animationiteration.animation,delete ms.animationstart.animation),"TransitionEvent"in window||delete ms.transitionend.transition);function ho(t){if(du[t])return du[t];if(!ms[t])return t;var i=ms[t],a;for(a in i)if(i.hasOwnProperty(a)&&a in Xd)return du[t]=i[a];return t}var Yd=ho("animationend"),jd=ho("animationiteration"),qd=ho("animationstart"),$d=ho("transitionend"),Kd=new Map,Zd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function or(t,i){Kd.set(t,i),u(i,[t])}for(var hu=0;hu<Zd.length;hu++){var pu=Zd[hu],Mg=pu.toLowerCase(),Eg=pu[0].toUpperCase()+pu.slice(1);or(Mg,"on"+Eg)}or(Yd,"onAnimationEnd"),or(jd,"onAnimationIteration"),or(qd,"onAnimationStart"),or("dblclick","onDoubleClick"),or("focusin","onFocus"),or("focusout","onBlur"),or($d,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _a="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Tg=new Set("cancel close invalid load scroll toggle".split(" ").concat(_a));function Qd(t,i,a){var l=t.type||"unknown-event";t.currentTarget=a,eo(l,i,void 0,t),t.currentTarget=null}function Jd(t,i){i=(i&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],f=l.event;l=l.listeners;e:{var h=void 0;if(i)for(var E=l.length-1;0<=E;E--){var I=l[E],B=I.instance,ae=I.currentTarget;if(I=I.listener,B!==h&&f.isPropagationStopped())break e;Qd(f,I,ae),h=B}else for(E=0;E<l.length;E++){if(I=l[E],B=I.instance,ae=I.currentTarget,I=I.listener,B!==h&&f.isPropagationStopped())break e;Qd(f,I,ae),h=B}}}if(Dr)throw t=Ir,Dr=!1,Ir=null,t}function Ft(t,i){var a=i[Mu];a===void 0&&(a=i[Mu]=new Set);var l=t+"__bubble";a.has(l)||(eh(i,t,2,!1),a.add(l))}function mu(t,i,a){var l=0;i&&(l|=4),eh(a,t,l,i)}var po="_reactListening"+Math.random().toString(36).slice(2);function xa(t){if(!t[po]){t[po]=!0,r.forEach(function(a){a!=="selectionchange"&&(Tg.has(a)||mu(a,!1,t),mu(a,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[po]||(i[po]=!0,mu("selectionchange",!1,i))}}function eh(t,i,a,l){switch(Ed(i)){case 1:var f=k0;break;case 4:f=B0;break;default:f=Ql}a=f.bind(null,i,a,t),f=void 0,!At||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(i,a,{capture:!0,passive:f}):t.addEventListener(i,a,!0):f!==void 0?t.addEventListener(i,a,{passive:f}):t.addEventListener(i,a,!1)}function gu(t,i,a,l,f){var h=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var E=l.tag;if(E===3||E===4){var I=l.stateNode.containerInfo;if(I===f||I.nodeType===8&&I.parentNode===f)break;if(E===4)for(E=l.return;E!==null;){var B=E.tag;if((B===3||B===4)&&(B=E.stateNode.containerInfo,B===f||B.nodeType===8&&B.parentNode===f))return;E=E.return}for(;I!==null;){if(E=Or(I),E===null)return;if(B=E.tag,B===5||B===6){l=h=E;continue e}I=I.parentNode}}l=l.return}Ve(function(){var ae=h,Se=Ze(a),ye=[];e:{var xe=Kd.get(t);if(xe!==void 0){var Oe=tu,He=t;switch(t){case"keypress":if(oo(a)===0)break e;case"keydown":case"keyup":Oe=eg;break;case"focusin":He="focus",Oe=ru;break;case"focusout":He="blur",Oe=ru;break;case"beforeblur":case"afterblur":Oe=ru;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Oe=Ad;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Oe=H0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Oe=ig;break;case Yd:case jd:case qd:Oe=X0;break;case $d:Oe=sg;break;case"scroll":Oe=z0;break;case"wheel":Oe=og;break;case"copy":case"cut":case"paste":Oe=j0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Oe=Cd}var Xe=(i&4)!==0,Zt=!Xe&&t==="scroll",Q=Xe?xe!==null?xe+"Capture":null:xe;Xe=[];for(var H=ae,te;H!==null;){te=H;var Ee=te.stateNode;if(te.tag===5&&Ee!==null&&(te=Ee,Q!==null&&(Ee=Dt(H,Q),Ee!=null&&Xe.push(Sa(H,Ee,te)))),Zt)break;H=H.return}0<Xe.length&&(xe=new Oe(xe,He,null,a,Se),ye.push({event:xe,listeners:Xe}))}}if((i&7)===0){e:{if(xe=t==="mouseover"||t==="pointerover",Oe=t==="mouseout"||t==="pointerout",xe&&a!==be&&(He=a.relatedTarget||a.fromElement)&&(Or(He)||He[Ui]))break e;if((Oe||xe)&&(xe=Se.window===Se?Se:(xe=Se.ownerDocument)?xe.defaultView||xe.parentWindow:window,Oe?(He=a.relatedTarget||a.toElement,Oe=ae,He=He?Or(He):null,He!==null&&(Zt=An(He),He!==Zt||He.tag!==5&&He.tag!==6)&&(He=null)):(Oe=null,He=ae),Oe!==He)){if(Xe=Ad,Ee="onMouseLeave",Q="onMouseEnter",H="mouse",(t==="pointerout"||t==="pointerover")&&(Xe=Cd,Ee="onPointerLeave",Q="onPointerEnter",H="pointer"),Zt=Oe==null?xe:_s(Oe),te=He==null?xe:_s(He),xe=new Xe(Ee,H+"leave",Oe,a,Se),xe.target=Zt,xe.relatedTarget=te,Ee=null,Or(Se)===ae&&(Xe=new Xe(Q,H+"enter",He,a,Se),Xe.target=te,Xe.relatedTarget=Zt,Ee=Xe),Zt=Ee,Oe&&He)t:{for(Xe=Oe,Q=He,H=0,te=Xe;te;te=gs(te))H++;for(te=0,Ee=Q;Ee;Ee=gs(Ee))te++;for(;0<H-te;)Xe=gs(Xe),H--;for(;0<te-H;)Q=gs(Q),te--;for(;H--;){if(Xe===Q||Q!==null&&Xe===Q.alternate)break t;Xe=gs(Xe),Q=gs(Q)}Xe=null}else Xe=null;Oe!==null&&th(ye,xe,Oe,Xe,!1),He!==null&&Zt!==null&&th(ye,Zt,He,Xe,!0)}}e:{if(xe=ae?_s(ae):window,Oe=xe.nodeName&&xe.nodeName.toLowerCase(),Oe==="select"||Oe==="input"&&xe.type==="file")var $e=pg;else if(Nd(xe))if(Fd)$e=_g;else{$e=gg;var tt=mg}else(Oe=xe.nodeName)&&Oe.toLowerCase()==="input"&&(xe.type==="checkbox"||xe.type==="radio")&&($e=vg);if($e&&($e=$e(t,ae))){Ud(ye,$e,a,Se);break e}tt&&tt(t,xe,ae),t==="focusout"&&(tt=xe._wrapperState)&&tt.controlled&&xe.type==="number"&&qt(xe,"number",xe.value)}switch(tt=ae?_s(ae):window,t){case"focusin":(Nd(tt)||tt.contentEditable==="true")&&(ps=tt,cu=ae,va=null);break;case"focusout":va=cu=ps=null;break;case"mousedown":fu=!0;break;case"contextmenu":case"mouseup":case"dragend":fu=!1,Wd(ye,a,Se);break;case"selectionchange":if(yg)break;case"keydown":case"keyup":Wd(ye,a,Se)}var nt;if(au)e:{switch(t){case"compositionstart":var st="onCompositionStart";break e;case"compositionend":st="onCompositionEnd";break e;case"compositionupdate":st="onCompositionUpdate";break e}st=void 0}else hs?Dd(t,a)&&(st="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(st="onCompositionStart");st&&(Rd&&a.locale!=="ko"&&(hs||st!=="onCompositionStart"?st==="onCompositionEnd"&&hs&&(nt=Td()):(ar=Se,eu="value"in ar?ar.value:ar.textContent,hs=!0)),tt=mo(ae,st),0<tt.length&&(st=new bd(st,t,null,a,Se),ye.push({event:st,listeners:tt}),nt?st.data=nt:(nt=Id(a),nt!==null&&(st.data=nt)))),(nt=ug?cg(t,a):fg(t,a))&&(ae=mo(ae,"onBeforeInput"),0<ae.length&&(Se=new bd("onBeforeInput","beforeinput",null,a,Se),ye.push({event:Se,listeners:ae}),Se.data=nt))}Jd(ye,i)})}function Sa(t,i,a){return{instance:t,listener:i,currentTarget:a}}function mo(t,i){for(var a=i+"Capture",l=[];t!==null;){var f=t,h=f.stateNode;f.tag===5&&h!==null&&(f=h,h=Dt(t,a),h!=null&&l.unshift(Sa(t,h,f)),h=Dt(t,i),h!=null&&l.push(Sa(t,h,f))),t=t.return}return l}function gs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function th(t,i,a,l,f){for(var h=i._reactName,E=[];a!==null&&a!==l;){var I=a,B=I.alternate,ae=I.stateNode;if(B!==null&&B===l)break;I.tag===5&&ae!==null&&(I=ae,f?(B=Dt(a,h),B!=null&&E.unshift(Sa(a,B,I))):f||(B=Dt(a,h),B!=null&&E.push(Sa(a,B,I)))),a=a.return}E.length!==0&&t.push({event:i,listeners:E})}var wg=/\r\n?/g,Ag=/\u0000|\uFFFD/g;function nh(t){return(typeof t=="string"?t:""+t).replace(wg,`
`).replace(Ag,"")}function go(t,i,a){if(i=nh(i),nh(t)!==i&&a)throw Error(n(425))}function vo(){}var vu=null,_u=null;function xu(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Su=typeof setTimeout=="function"?setTimeout:void 0,bg=typeof clearTimeout=="function"?clearTimeout:void 0,ih=typeof Promise=="function"?Promise:void 0,Cg=typeof queueMicrotask=="function"?queueMicrotask:typeof ih<"u"?function(t){return ih.resolve(null).then(t).catch(Rg)}:Su;function Rg(t){setTimeout(function(){throw t})}function yu(t,i){var a=i,l=0;do{var f=a.nextSibling;if(t.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(l===0){t.removeChild(f),ca(i);return}l--}else a!=="$"&&a!=="$?"&&a!=="$!"||l++;a=f}while(a);ca(i)}function lr(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function rh(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return t;i--}else a==="/$"&&i++}t=t.previousSibling}return null}var vs=Math.random().toString(36).slice(2),yi="__reactFiber$"+vs,ya="__reactProps$"+vs,Ui="__reactContainer$"+vs,Mu="__reactEvents$"+vs,Pg="__reactListeners$"+vs,Lg="__reactHandles$"+vs;function Or(t){var i=t[yi];if(i)return i;for(var a=t.parentNode;a;){if(i=a[Ui]||a[yi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(t=rh(t);t!==null;){if(a=t[yi])return a;t=rh(t)}return i}t=a,a=t.parentNode}return null}function Ma(t){return t=t[yi]||t[Ui],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function _s(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function _o(t){return t[ya]||null}var Eu=[],xs=-1;function ur(t){return{current:t}}function Ot(t){0>xs||(t.current=Eu[xs],Eu[xs]=null,xs--)}function Nt(t,i){xs++,Eu[xs]=t.current,t.current=i}var cr={},xn=ur(cr),In=ur(!1),kr=cr;function Ss(t,i){var a=t.type.contextTypes;if(!a)return cr;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var f={},h;for(h in a)f[h]=i[h];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=f),f}function Nn(t){return t=t.childContextTypes,t!=null}function xo(){Ot(In),Ot(xn)}function sh(t,i,a){if(xn.current!==cr)throw Error(n(168));Nt(xn,i),Nt(In,a)}function ah(t,i,a){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return a;l=l.getChildContext();for(var f in l)if(!(f in i))throw Error(n(108,_e(t)||"Unknown",f));return le({},a,l)}function So(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||cr,kr=xn.current,Nt(xn,t),Nt(In,In.current),!0}function oh(t,i,a){var l=t.stateNode;if(!l)throw Error(n(169));a?(t=ah(t,i,kr),l.__reactInternalMemoizedMergedChildContext=t,Ot(In),Ot(xn),Nt(xn,t)):Ot(In),Nt(In,a)}var Fi=null,yo=!1,Tu=!1;function lh(t){Fi===null?Fi=[t]:Fi.push(t)}function Dg(t){yo=!0,lh(t)}function fr(){if(!Tu&&Fi!==null){Tu=!0;var t=0,i=dt;try{var a=Fi;for(dt=1;t<a.length;t++){var l=a[t];do l=l(!0);while(l!==null)}Fi=null,yo=!1}catch(f){throw Fi!==null&&(Fi=Fi.slice(t+1)),Ur(sa,fr),f}finally{dt=i,Tu=!1}}return null}var ys=[],Ms=0,Mo=null,Eo=0,$n=[],Kn=0,Br=null,Oi=1,ki="";function zr(t,i){ys[Ms++]=Eo,ys[Ms++]=Mo,Mo=t,Eo=i}function uh(t,i,a){$n[Kn++]=Oi,$n[Kn++]=ki,$n[Kn++]=Br,Br=t;var l=Oi;t=ki;var f=32-Te(l)-1;l&=~(1<<f),a+=1;var h=32-Te(i)+f;if(30<h){var E=f-f%5;h=(l&(1<<E)-1).toString(32),l>>=E,f-=E,Oi=1<<32-Te(i)+f|a<<f|l,ki=h+t}else Oi=1<<h|a<<f|l,ki=t}function wu(t){t.return!==null&&(zr(t,1),uh(t,1,0))}function Au(t){for(;t===Mo;)Mo=ys[--Ms],ys[Ms]=null,Eo=ys[--Ms],ys[Ms]=null;for(;t===Br;)Br=$n[--Kn],$n[Kn]=null,ki=$n[--Kn],$n[Kn]=null,Oi=$n[--Kn],$n[Kn]=null}var Gn=null,Wn=null,Ht=!1,ui=null;function ch(t,i){var a=ei(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=t,i=t.deletions,i===null?(t.deletions=[a],t.flags|=16):i.push(a)}function fh(t,i){switch(t.tag){case 5:var a=t.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Gn=t,Wn=lr(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Gn=t,Wn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Br!==null?{id:Oi,overflow:ki}:null,t.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=ei(18,null,null,0),a.stateNode=i,a.return=t,t.child=a,Gn=t,Wn=null,!0):!1;default:return!1}}function bu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Cu(t){if(Ht){var i=Wn;if(i){var a=i;if(!fh(t,i)){if(bu(t))throw Error(n(418));i=lr(a.nextSibling);var l=Gn;i&&fh(t,i)?ch(l,a):(t.flags=t.flags&-4097|2,Ht=!1,Gn=t)}}else{if(bu(t))throw Error(n(418));t.flags=t.flags&-4097|2,Ht=!1,Gn=t}}}function dh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Gn=t}function To(t){if(t!==Gn)return!1;if(!Ht)return dh(t),Ht=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!xu(t.type,t.memoizedProps)),i&&(i=Wn)){if(bu(t))throw hh(),Error(n(418));for(;i;)ch(t,i),i=lr(i.nextSibling)}if(dh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"){if(i===0){Wn=lr(t.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}t=t.nextSibling}Wn=null}}else Wn=Gn?lr(t.stateNode.nextSibling):null;return!0}function hh(){for(var t=Wn;t;)t=lr(t.nextSibling)}function Es(){Wn=Gn=null,Ht=!1}function Ru(t){ui===null?ui=[t]:ui.push(t)}var Ig=b.ReactCurrentBatchConfig;function Ea(t,i,a){if(t=a.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(n(309));var l=a.stateNode}if(!l)throw Error(n(147,t));var f=l,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(E){var I=f.refs;E===null?delete I[h]:I[h]=E},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!a._owner)throw Error(n(290,t))}return t}function wo(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function ph(t){var i=t._init;return i(t._payload)}function mh(t){function i(Q,H){if(t){var te=Q.deletions;te===null?(Q.deletions=[H],Q.flags|=16):te.push(H)}}function a(Q,H){if(!t)return null;for(;H!==null;)i(Q,H),H=H.sibling;return null}function l(Q,H){for(Q=new Map;H!==null;)H.key!==null?Q.set(H.key,H):Q.set(H.index,H),H=H.sibling;return Q}function f(Q,H){return Q=xr(Q,H),Q.index=0,Q.sibling=null,Q}function h(Q,H,te){return Q.index=te,t?(te=Q.alternate,te!==null?(te=te.index,te<H?(Q.flags|=2,H):te):(Q.flags|=2,H)):(Q.flags|=1048576,H)}function E(Q){return t&&Q.alternate===null&&(Q.flags|=2),Q}function I(Q,H,te,Ee){return H===null||H.tag!==6?(H=Sc(te,Q.mode,Ee),H.return=Q,H):(H=f(H,te),H.return=Q,H)}function B(Q,H,te,Ee){var $e=te.type;return $e===F?Se(Q,H,te.props.children,Ee,te.key):H!==null&&(H.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===fe&&ph($e)===H.type)?(Ee=f(H,te.props),Ee.ref=Ea(Q,H,te),Ee.return=Q,Ee):(Ee=$o(te.type,te.key,te.props,null,Q.mode,Ee),Ee.ref=Ea(Q,H,te),Ee.return=Q,Ee)}function ae(Q,H,te,Ee){return H===null||H.tag!==4||H.stateNode.containerInfo!==te.containerInfo||H.stateNode.implementation!==te.implementation?(H=yc(te,Q.mode,Ee),H.return=Q,H):(H=f(H,te.children||[]),H.return=Q,H)}function Se(Q,H,te,Ee,$e){return H===null||H.tag!==7?(H=qr(te,Q.mode,Ee,$e),H.return=Q,H):(H=f(H,te),H.return=Q,H)}function ye(Q,H,te){if(typeof H=="string"&&H!==""||typeof H=="number")return H=Sc(""+H,Q.mode,te),H.return=Q,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case U:return te=$o(H.type,H.key,H.props,null,Q.mode,te),te.ref=Ea(Q,null,H),te.return=Q,te;case P:return H=yc(H,Q.mode,te),H.return=Q,H;case fe:var Ee=H._init;return ye(Q,Ee(H._payload),te)}if(Gt(H)||oe(H))return H=qr(H,Q.mode,te,null),H.return=Q,H;wo(Q,H)}return null}function xe(Q,H,te,Ee){var $e=H!==null?H.key:null;if(typeof te=="string"&&te!==""||typeof te=="number")return $e!==null?null:I(Q,H,""+te,Ee);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case U:return te.key===$e?B(Q,H,te,Ee):null;case P:return te.key===$e?ae(Q,H,te,Ee):null;case fe:return $e=te._init,xe(Q,H,$e(te._payload),Ee)}if(Gt(te)||oe(te))return $e!==null?null:Se(Q,H,te,Ee,null);wo(Q,te)}return null}function Oe(Q,H,te,Ee,$e){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number")return Q=Q.get(te)||null,I(H,Q,""+Ee,$e);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case U:return Q=Q.get(Ee.key===null?te:Ee.key)||null,B(H,Q,Ee,$e);case P:return Q=Q.get(Ee.key===null?te:Ee.key)||null,ae(H,Q,Ee,$e);case fe:var tt=Ee._init;return Oe(Q,H,te,tt(Ee._payload),$e)}if(Gt(Ee)||oe(Ee))return Q=Q.get(te)||null,Se(H,Q,Ee,$e,null);wo(H,Ee)}return null}function He(Q,H,te,Ee){for(var $e=null,tt=null,nt=H,st=H=0,un=null;nt!==null&&st<te.length;st++){nt.index>st?(un=nt,nt=null):un=nt.sibling;var Et=xe(Q,nt,te[st],Ee);if(Et===null){nt===null&&(nt=un);break}t&&nt&&Et.alternate===null&&i(Q,nt),H=h(Et,H,st),tt===null?$e=Et:tt.sibling=Et,tt=Et,nt=un}if(st===te.length)return a(Q,nt),Ht&&zr(Q,st),$e;if(nt===null){for(;st<te.length;st++)nt=ye(Q,te[st],Ee),nt!==null&&(H=h(nt,H,st),tt===null?$e=nt:tt.sibling=nt,tt=nt);return Ht&&zr(Q,st),$e}for(nt=l(Q,nt);st<te.length;st++)un=Oe(nt,Q,st,te[st],Ee),un!==null&&(t&&un.alternate!==null&&nt.delete(un.key===null?st:un.key),H=h(un,H,st),tt===null?$e=un:tt.sibling=un,tt=un);return t&&nt.forEach(function(Sr){return i(Q,Sr)}),Ht&&zr(Q,st),$e}function Xe(Q,H,te,Ee){var $e=oe(te);if(typeof $e!="function")throw Error(n(150));if(te=$e.call(te),te==null)throw Error(n(151));for(var tt=$e=null,nt=H,st=H=0,un=null,Et=te.next();nt!==null&&!Et.done;st++,Et=te.next()){nt.index>st?(un=nt,nt=null):un=nt.sibling;var Sr=xe(Q,nt,Et.value,Ee);if(Sr===null){nt===null&&(nt=un);break}t&&nt&&Sr.alternate===null&&i(Q,nt),H=h(Sr,H,st),tt===null?$e=Sr:tt.sibling=Sr,tt=Sr,nt=un}if(Et.done)return a(Q,nt),Ht&&zr(Q,st),$e;if(nt===null){for(;!Et.done;st++,Et=te.next())Et=ye(Q,Et.value,Ee),Et!==null&&(H=h(Et,H,st),tt===null?$e=Et:tt.sibling=Et,tt=Et);return Ht&&zr(Q,st),$e}for(nt=l(Q,nt);!Et.done;st++,Et=te.next())Et=Oe(nt,Q,st,Et.value,Ee),Et!==null&&(t&&Et.alternate!==null&&nt.delete(Et.key===null?st:Et.key),H=h(Et,H,st),tt===null?$e=Et:tt.sibling=Et,tt=Et);return t&&nt.forEach(function(dv){return i(Q,dv)}),Ht&&zr(Q,st),$e}function Zt(Q,H,te,Ee){if(typeof te=="object"&&te!==null&&te.type===F&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case U:e:{for(var $e=te.key,tt=H;tt!==null;){if(tt.key===$e){if($e=te.type,$e===F){if(tt.tag===7){a(Q,tt.sibling),H=f(tt,te.props.children),H.return=Q,Q=H;break e}}else if(tt.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===fe&&ph($e)===tt.type){a(Q,tt.sibling),H=f(tt,te.props),H.ref=Ea(Q,tt,te),H.return=Q,Q=H;break e}a(Q,tt);break}else i(Q,tt);tt=tt.sibling}te.type===F?(H=qr(te.props.children,Q.mode,Ee,te.key),H.return=Q,Q=H):(Ee=$o(te.type,te.key,te.props,null,Q.mode,Ee),Ee.ref=Ea(Q,H,te),Ee.return=Q,Q=Ee)}return E(Q);case P:e:{for(tt=te.key;H!==null;){if(H.key===tt)if(H.tag===4&&H.stateNode.containerInfo===te.containerInfo&&H.stateNode.implementation===te.implementation){a(Q,H.sibling),H=f(H,te.children||[]),H.return=Q,Q=H;break e}else{a(Q,H);break}else i(Q,H);H=H.sibling}H=yc(te,Q.mode,Ee),H.return=Q,Q=H}return E(Q);case fe:return tt=te._init,Zt(Q,H,tt(te._payload),Ee)}if(Gt(te))return He(Q,H,te,Ee);if(oe(te))return Xe(Q,H,te,Ee);wo(Q,te)}return typeof te=="string"&&te!==""||typeof te=="number"?(te=""+te,H!==null&&H.tag===6?(a(Q,H.sibling),H=f(H,te),H.return=Q,Q=H):(a(Q,H),H=Sc(te,Q.mode,Ee),H.return=Q,Q=H),E(Q)):a(Q,H)}return Zt}var Ts=mh(!0),gh=mh(!1),Ao=ur(null),bo=null,ws=null,Pu=null;function Lu(){Pu=ws=bo=null}function Du(t){var i=Ao.current;Ot(Ao),t._currentValue=i}function Iu(t,i,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===a)break;t=t.return}}function As(t,i){bo=t,Pu=ws=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(Un=!0),t.firstContext=null)}function Zn(t){var i=t._currentValue;if(Pu!==t)if(t={context:t,memoizedValue:i,next:null},ws===null){if(bo===null)throw Error(n(308));ws=t,bo.dependencies={lanes:0,firstContext:t}}else ws=ws.next=t;return i}var Vr=null;function Nu(t){Vr===null?Vr=[t]:Vr.push(t)}function vh(t,i,a,l){var f=i.interleaved;return f===null?(a.next=a,Nu(i)):(a.next=f.next,f.next=a),i.interleaved=a,Bi(t,l)}function Bi(t,i){t.lanes|=i;var a=t.alternate;for(a!==null&&(a.lanes|=i),a=t,t=t.return;t!==null;)t.childLanes|=i,a=t.alternate,a!==null&&(a.childLanes|=i),a=t,t=t.return;return a.tag===3?a.stateNode:null}var dr=!1;function Uu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _h(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function zi(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function hr(t,i,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(xt&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,Bi(t,a)}return f=l.interleaved,f===null?(i.next=i,Nu(l)):(i.next=f.next,f.next=i),l.interleaved=i,Bi(t,a)}function Co(t,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,Dn(t,a)}}function xh(t,i){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var f=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var E={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};h===null?f=h=E:h=h.next=E,a=a.next}while(a!==null);h===null?f=h=i:h=h.next=i}else f=h=i;a={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:h,shared:l.shared,effects:l.effects},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=i:t.next=i,a.lastBaseUpdate=i}function Ro(t,i,a,l){var f=t.updateQueue;dr=!1;var h=f.firstBaseUpdate,E=f.lastBaseUpdate,I=f.shared.pending;if(I!==null){f.shared.pending=null;var B=I,ae=B.next;B.next=null,E===null?h=ae:E.next=ae,E=B;var Se=t.alternate;Se!==null&&(Se=Se.updateQueue,I=Se.lastBaseUpdate,I!==E&&(I===null?Se.firstBaseUpdate=ae:I.next=ae,Se.lastBaseUpdate=B))}if(h!==null){var ye=f.baseState;E=0,Se=ae=B=null,I=h;do{var xe=I.lane,Oe=I.eventTime;if((l&xe)===xe){Se!==null&&(Se=Se.next={eventTime:Oe,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var He=t,Xe=I;switch(xe=i,Oe=a,Xe.tag){case 1:if(He=Xe.payload,typeof He=="function"){ye=He.call(Oe,ye,xe);break e}ye=He;break e;case 3:He.flags=He.flags&-65537|128;case 0:if(He=Xe.payload,xe=typeof He=="function"?He.call(Oe,ye,xe):He,xe==null)break e;ye=le({},ye,xe);break e;case 2:dr=!0}}I.callback!==null&&I.lane!==0&&(t.flags|=64,xe=f.effects,xe===null?f.effects=[I]:xe.push(I))}else Oe={eventTime:Oe,lane:xe,tag:I.tag,payload:I.payload,callback:I.callback,next:null},Se===null?(ae=Se=Oe,B=ye):Se=Se.next=Oe,E|=xe;if(I=I.next,I===null){if(I=f.shared.pending,I===null)break;xe=I,I=xe.next,xe.next=null,f.lastBaseUpdate=xe,f.shared.pending=null}}while(!0);if(Se===null&&(B=ye),f.baseState=B,f.firstBaseUpdate=ae,f.lastBaseUpdate=Se,i=f.shared.interleaved,i!==null){f=i;do E|=f.lane,f=f.next;while(f!==i)}else h===null&&(f.shared.lanes=0);Wr|=E,t.lanes=E,t.memoizedState=ye}}function Sh(t,i,a){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],f=l.callback;if(f!==null){if(l.callback=null,l=a,typeof f!="function")throw Error(n(191,f));f.call(l)}}}var Ta={},Mi=ur(Ta),wa=ur(Ta),Aa=ur(Ta);function Hr(t){if(t===Ta)throw Error(n(174));return t}function Fu(t,i){switch(Nt(Aa,i),Nt(wa,t),Nt(Mi,Ta),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:x(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=x(i,t)}Ot(Mi),Nt(Mi,i)}function bs(){Ot(Mi),Ot(wa),Ot(Aa)}function yh(t){Hr(Aa.current);var i=Hr(Mi.current),a=x(i,t.type);i!==a&&(Nt(wa,t),Nt(Mi,a))}function Ou(t){wa.current===t&&(Ot(Mi),Ot(wa))}var Xt=ur(0);function Po(t){for(var i=t;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var ku=[];function Bu(){for(var t=0;t<ku.length;t++)ku[t]._workInProgressVersionPrimary=null;ku.length=0}var Lo=b.ReactCurrentDispatcher,zu=b.ReactCurrentBatchConfig,Gr=0,Yt=null,nn=null,on=null,Do=!1,ba=!1,Ca=0,Ng=0;function Sn(){throw Error(n(321))}function Vu(t,i){if(i===null)return!1;for(var a=0;a<i.length&&a<t.length;a++)if(!li(t[a],i[a]))return!1;return!0}function Hu(t,i,a,l,f,h){if(Gr=h,Yt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Lo.current=t===null||t.memoizedState===null?kg:Bg,t=a(l,f),ba){h=0;do{if(ba=!1,Ca=0,25<=h)throw Error(n(301));h+=1,on=nn=null,i.updateQueue=null,Lo.current=zg,t=a(l,f)}while(ba)}if(Lo.current=Uo,i=nn!==null&&nn.next!==null,Gr=0,on=nn=Yt=null,Do=!1,i)throw Error(n(300));return t}function Gu(){var t=Ca!==0;return Ca=0,t}function Ei(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?Yt.memoizedState=on=t:on=on.next=t,on}function Qn(){if(nn===null){var t=Yt.alternate;t=t!==null?t.memoizedState:null}else t=nn.next;var i=on===null?Yt.memoizedState:on.next;if(i!==null)on=i,nn=t;else{if(t===null)throw Error(n(310));nn=t,t={memoizedState:nn.memoizedState,baseState:nn.baseState,baseQueue:nn.baseQueue,queue:nn.queue,next:null},on===null?Yt.memoizedState=on=t:on=on.next=t}return on}function Ra(t,i){return typeof i=="function"?i(t):i}function Wu(t){var i=Qn(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var l=nn,f=l.baseQueue,h=a.pending;if(h!==null){if(f!==null){var E=f.next;f.next=h.next,h.next=E}l.baseQueue=f=h,a.pending=null}if(f!==null){h=f.next,l=l.baseState;var I=E=null,B=null,ae=h;do{var Se=ae.lane;if((Gr&Se)===Se)B!==null&&(B=B.next={lane:0,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null}),l=ae.hasEagerState?ae.eagerState:t(l,ae.action);else{var ye={lane:Se,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null};B===null?(I=B=ye,E=l):B=B.next=ye,Yt.lanes|=Se,Wr|=Se}ae=ae.next}while(ae!==null&&ae!==h);B===null?E=l:B.next=I,li(l,i.memoizedState)||(Un=!0),i.memoizedState=l,i.baseState=E,i.baseQueue=B,a.lastRenderedState=l}if(t=a.interleaved,t!==null){f=t;do h=f.lane,Yt.lanes|=h,Wr|=h,f=f.next;while(f!==t)}else f===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Xu(t){var i=Qn(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var l=a.dispatch,f=a.pending,h=i.memoizedState;if(f!==null){a.pending=null;var E=f=f.next;do h=t(h,E.action),E=E.next;while(E!==f);li(h,i.memoizedState)||(Un=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),a.lastRenderedState=h}return[h,l]}function Mh(){}function Eh(t,i){var a=Yt,l=Qn(),f=i(),h=!li(l.memoizedState,f);if(h&&(l.memoizedState=f,Un=!0),l=l.queue,Yu(Ah.bind(null,a,l,t),[t]),l.getSnapshot!==i||h||on!==null&&on.memoizedState.tag&1){if(a.flags|=2048,Pa(9,wh.bind(null,a,l,f,i),void 0,null),ln===null)throw Error(n(349));(Gr&30)!==0||Th(a,i,f)}return f}function Th(t,i,a){t.flags|=16384,t={getSnapshot:i,value:a},i=Yt.updateQueue,i===null?(i={lastEffect:null,stores:null},Yt.updateQueue=i,i.stores=[t]):(a=i.stores,a===null?i.stores=[t]:a.push(t))}function wh(t,i,a,l){i.value=a,i.getSnapshot=l,bh(i)&&Ch(t)}function Ah(t,i,a){return a(function(){bh(i)&&Ch(t)})}function bh(t){var i=t.getSnapshot;t=t.value;try{var a=i();return!li(t,a)}catch{return!0}}function Ch(t){var i=Bi(t,1);i!==null&&hi(i,t,1,-1)}function Rh(t){var i=Ei();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ra,lastRenderedState:t},i.queue=t,t=t.dispatch=Og.bind(null,Yt,t),[i.memoizedState,t]}function Pa(t,i,a,l){return t={tag:t,create:i,destroy:a,deps:l,next:null},i=Yt.updateQueue,i===null?(i={lastEffect:null,stores:null},Yt.updateQueue=i,i.lastEffect=t.next=t):(a=i.lastEffect,a===null?i.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,i.lastEffect=t)),t}function Ph(){return Qn().memoizedState}function Io(t,i,a,l){var f=Ei();Yt.flags|=t,f.memoizedState=Pa(1|i,a,void 0,l===void 0?null:l)}function No(t,i,a,l){var f=Qn();l=l===void 0?null:l;var h=void 0;if(nn!==null){var E=nn.memoizedState;if(h=E.destroy,l!==null&&Vu(l,E.deps)){f.memoizedState=Pa(i,a,h,l);return}}Yt.flags|=t,f.memoizedState=Pa(1|i,a,h,l)}function Lh(t,i){return Io(8390656,8,t,i)}function Yu(t,i){return No(2048,8,t,i)}function Dh(t,i){return No(4,2,t,i)}function Ih(t,i){return No(4,4,t,i)}function Nh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Uh(t,i,a){return a=a!=null?a.concat([t]):null,No(4,4,Nh.bind(null,i,t),a)}function ju(){}function Fh(t,i){var a=Qn();i=i===void 0?null:i;var l=a.memoizedState;return l!==null&&i!==null&&Vu(i,l[1])?l[0]:(a.memoizedState=[t,i],t)}function Oh(t,i){var a=Qn();i=i===void 0?null:i;var l=a.memoizedState;return l!==null&&i!==null&&Vu(i,l[1])?l[0]:(t=t(),a.memoizedState=[t,i],t)}function kh(t,i,a){return(Gr&21)===0?(t.baseState&&(t.baseState=!1,Un=!0),t.memoizedState=a):(li(a,i)||(a=Fe(),Yt.lanes|=a,Wr|=a,t.baseState=!0),i)}function Ug(t,i){var a=dt;dt=a!==0&&4>a?a:4,t(!0);var l=zu.transition;zu.transition={};try{t(!1),i()}finally{dt=a,zu.transition=l}}function Bh(){return Qn().memoizedState}function Fg(t,i,a){var l=vr(t);if(a={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null},zh(t))Vh(i,a);else if(a=vh(t,i,a,l),a!==null){var f=Cn();hi(a,t,l,f),Hh(a,i,l)}}function Og(t,i,a){var l=vr(t),f={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null};if(zh(t))Vh(i,f);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var E=i.lastRenderedState,I=h(E,a);if(f.hasEagerState=!0,f.eagerState=I,li(I,E)){var B=i.interleaved;B===null?(f.next=f,Nu(i)):(f.next=B.next,B.next=f),i.interleaved=f;return}}catch{}finally{}a=vh(t,i,f,l),a!==null&&(f=Cn(),hi(a,t,l,f),Hh(a,i,l))}}function zh(t){var i=t.alternate;return t===Yt||i!==null&&i===Yt}function Vh(t,i){ba=Do=!0;var a=t.pending;a===null?i.next=i:(i.next=a.next,a.next=i),t.pending=i}function Hh(t,i,a){if((a&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,Dn(t,a)}}var Uo={readContext:Zn,useCallback:Sn,useContext:Sn,useEffect:Sn,useImperativeHandle:Sn,useInsertionEffect:Sn,useLayoutEffect:Sn,useMemo:Sn,useReducer:Sn,useRef:Sn,useState:Sn,useDebugValue:Sn,useDeferredValue:Sn,useTransition:Sn,useMutableSource:Sn,useSyncExternalStore:Sn,useId:Sn,unstable_isNewReconciler:!1},kg={readContext:Zn,useCallback:function(t,i){return Ei().memoizedState=[t,i===void 0?null:i],t},useContext:Zn,useEffect:Lh,useImperativeHandle:function(t,i,a){return a=a!=null?a.concat([t]):null,Io(4194308,4,Nh.bind(null,i,t),a)},useLayoutEffect:function(t,i){return Io(4194308,4,t,i)},useInsertionEffect:function(t,i){return Io(4,2,t,i)},useMemo:function(t,i){var a=Ei();return i=i===void 0?null:i,t=t(),a.memoizedState=[t,i],t},useReducer:function(t,i,a){var l=Ei();return i=a!==void 0?a(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=Fg.bind(null,Yt,t),[l.memoizedState,t]},useRef:function(t){var i=Ei();return t={current:t},i.memoizedState=t},useState:Rh,useDebugValue:ju,useDeferredValue:function(t){return Ei().memoizedState=t},useTransition:function(){var t=Rh(!1),i=t[0];return t=Ug.bind(null,t[1]),Ei().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,a){var l=Yt,f=Ei();if(Ht){if(a===void 0)throw Error(n(407));a=a()}else{if(a=i(),ln===null)throw Error(n(349));(Gr&30)!==0||Th(l,i,a)}f.memoizedState=a;var h={value:a,getSnapshot:i};return f.queue=h,Lh(Ah.bind(null,l,h,t),[t]),l.flags|=2048,Pa(9,wh.bind(null,l,h,a,i),void 0,null),a},useId:function(){var t=Ei(),i=ln.identifierPrefix;if(Ht){var a=ki,l=Oi;a=(l&~(1<<32-Te(l)-1)).toString(32)+a,i=":"+i+"R"+a,a=Ca++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Ng++,i=":"+i+"r"+a.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},Bg={readContext:Zn,useCallback:Fh,useContext:Zn,useEffect:Yu,useImperativeHandle:Uh,useInsertionEffect:Dh,useLayoutEffect:Ih,useMemo:Oh,useReducer:Wu,useRef:Ph,useState:function(){return Wu(Ra)},useDebugValue:ju,useDeferredValue:function(t){var i=Qn();return kh(i,nn.memoizedState,t)},useTransition:function(){var t=Wu(Ra)[0],i=Qn().memoizedState;return[t,i]},useMutableSource:Mh,useSyncExternalStore:Eh,useId:Bh,unstable_isNewReconciler:!1},zg={readContext:Zn,useCallback:Fh,useContext:Zn,useEffect:Yu,useImperativeHandle:Uh,useInsertionEffect:Dh,useLayoutEffect:Ih,useMemo:Oh,useReducer:Xu,useRef:Ph,useState:function(){return Xu(Ra)},useDebugValue:ju,useDeferredValue:function(t){var i=Qn();return nn===null?i.memoizedState=t:kh(i,nn.memoizedState,t)},useTransition:function(){var t=Xu(Ra)[0],i=Qn().memoizedState;return[t,i]},useMutableSource:Mh,useSyncExternalStore:Eh,useId:Bh,unstable_isNewReconciler:!1};function ci(t,i){if(t&&t.defaultProps){i=le({},i),t=t.defaultProps;for(var a in t)i[a]===void 0&&(i[a]=t[a]);return i}return i}function qu(t,i,a,l){i=t.memoizedState,a=a(l,i),a=a==null?i:le({},i,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Fo={isMounted:function(t){return(t=t._reactInternals)?An(t)===t:!1},enqueueSetState:function(t,i,a){t=t._reactInternals;var l=Cn(),f=vr(t),h=zi(l,f);h.payload=i,a!=null&&(h.callback=a),i=hr(t,h,f),i!==null&&(hi(i,t,f,l),Co(i,t,f))},enqueueReplaceState:function(t,i,a){t=t._reactInternals;var l=Cn(),f=vr(t),h=zi(l,f);h.tag=1,h.payload=i,a!=null&&(h.callback=a),i=hr(t,h,f),i!==null&&(hi(i,t,f,l),Co(i,t,f))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var a=Cn(),l=vr(t),f=zi(a,l);f.tag=2,i!=null&&(f.callback=i),i=hr(t,f,l),i!==null&&(hi(i,t,l,a),Co(i,t,l))}};function Gh(t,i,a,l,f,h,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,E):i.prototype&&i.prototype.isPureReactComponent?!ga(a,l)||!ga(f,h):!0}function Wh(t,i,a){var l=!1,f=cr,h=i.contextType;return typeof h=="object"&&h!==null?h=Zn(h):(f=Nn(i)?kr:xn.current,l=i.contextTypes,h=(l=l!=null)?Ss(t,f):cr),i=new i(a,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Fo,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=f,t.__reactInternalMemoizedMaskedChildContext=h),i}function Xh(t,i,a,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==t&&Fo.enqueueReplaceState(i,i.state,null)}function $u(t,i,a,l){var f=t.stateNode;f.props=a,f.state=t.memoizedState,f.refs={},Uu(t);var h=i.contextType;typeof h=="object"&&h!==null?f.context=Zn(h):(h=Nn(i)?kr:xn.current,f.context=Ss(t,h)),f.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(qu(t,i,h,a),f.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&Fo.enqueueReplaceState(f,f.state,null),Ro(t,a,f,l),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308)}function Cs(t,i){try{var a="",l=i;do a+=ze(l),l=l.return;while(l);var f=a}catch(h){f=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:f,digest:null}}function Ku(t,i,a){return{value:t,source:null,stack:a??null,digest:i??null}}function Zu(t,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var Vg=typeof WeakMap=="function"?WeakMap:Map;function Yh(t,i,a){a=zi(-1,a),a.tag=3,a.payload={element:null};var l=i.value;return a.callback=function(){Go||(Go=!0,dc=l),Zu(t,i)},a}function jh(t,i,a){a=zi(-1,a),a.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var f=i.value;a.payload=function(){return l(f)},a.callback=function(){Zu(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(a.callback=function(){Zu(t,i),typeof l!="function"&&(mr===null?mr=new Set([this]):mr.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),a}function qh(t,i,a){var l=t.pingCache;if(l===null){l=t.pingCache=new Vg;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(a)||(f.add(a),t=tv.bind(null,t,i,a),i.then(t,t))}function $h(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Kh(t,i,a,l,f){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=zi(-1,1),i.tag=2,hr(a,i,1))),a.lanes|=1),t):(t.flags|=65536,t.lanes=f,t)}var Hg=b.ReactCurrentOwner,Un=!1;function bn(t,i,a,l){i.child=t===null?gh(i,null,a,l):Ts(i,t.child,a,l)}function Zh(t,i,a,l,f){a=a.render;var h=i.ref;return As(i,f),l=Hu(t,i,a,l,h,f),a=Gu(),t!==null&&!Un?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,Vi(t,i,f)):(Ht&&a&&wu(i),i.flags|=1,bn(t,i,l,f),i.child)}function Qh(t,i,a,l,f){if(t===null){var h=a.type;return typeof h=="function"&&!xc(h)&&h.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=h,Jh(t,i,h,l,f)):(t=$o(a.type,null,l,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,(t.lanes&f)===0){var E=h.memoizedProps;if(a=a.compare,a=a!==null?a:ga,a(E,l)&&t.ref===i.ref)return Vi(t,i,f)}return i.flags|=1,t=xr(h,l),t.ref=i.ref,t.return=i,i.child=t}function Jh(t,i,a,l,f){if(t!==null){var h=t.memoizedProps;if(ga(h,l)&&t.ref===i.ref)if(Un=!1,i.pendingProps=l=h,(t.lanes&f)!==0)(t.flags&131072)!==0&&(Un=!0);else return i.lanes=t.lanes,Vi(t,i,f)}return Qu(t,i,a,l,f)}function ep(t,i,a){var l=i.pendingProps,f=l.children,h=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Nt(Ps,Xn),Xn|=a;else{if((a&1073741824)===0)return t=h!==null?h.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Nt(Ps,Xn),Xn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=h!==null?h.baseLanes:a,Nt(Ps,Xn),Xn|=l}else h!==null?(l=h.baseLanes|a,i.memoizedState=null):l=a,Nt(Ps,Xn),Xn|=l;return bn(t,i,f,a),i.child}function tp(t,i){var a=i.ref;(t===null&&a!==null||t!==null&&t.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Qu(t,i,a,l,f){var h=Nn(a)?kr:xn.current;return h=Ss(i,h),As(i,f),a=Hu(t,i,a,l,h,f),l=Gu(),t!==null&&!Un?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,Vi(t,i,f)):(Ht&&l&&wu(i),i.flags|=1,bn(t,i,a,f),i.child)}function np(t,i,a,l,f){if(Nn(a)){var h=!0;So(i)}else h=!1;if(As(i,f),i.stateNode===null)ko(t,i),Wh(i,a,l),$u(i,a,l,f),l=!0;else if(t===null){var E=i.stateNode,I=i.memoizedProps;E.props=I;var B=E.context,ae=a.contextType;typeof ae=="object"&&ae!==null?ae=Zn(ae):(ae=Nn(a)?kr:xn.current,ae=Ss(i,ae));var Se=a.getDerivedStateFromProps,ye=typeof Se=="function"||typeof E.getSnapshotBeforeUpdate=="function";ye||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(I!==l||B!==ae)&&Xh(i,E,l,ae),dr=!1;var xe=i.memoizedState;E.state=xe,Ro(i,l,E,f),B=i.memoizedState,I!==l||xe!==B||In.current||dr?(typeof Se=="function"&&(qu(i,a,Se,l),B=i.memoizedState),(I=dr||Gh(i,a,I,l,xe,B,ae))?(ye||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=B),E.props=l,E.state=B,E.context=ae,l=I):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{E=i.stateNode,_h(t,i),I=i.memoizedProps,ae=i.type===i.elementType?I:ci(i.type,I),E.props=ae,ye=i.pendingProps,xe=E.context,B=a.contextType,typeof B=="object"&&B!==null?B=Zn(B):(B=Nn(a)?kr:xn.current,B=Ss(i,B));var Oe=a.getDerivedStateFromProps;(Se=typeof Oe=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(I!==ye||xe!==B)&&Xh(i,E,l,B),dr=!1,xe=i.memoizedState,E.state=xe,Ro(i,l,E,f);var He=i.memoizedState;I!==ye||xe!==He||In.current||dr?(typeof Oe=="function"&&(qu(i,a,Oe,l),He=i.memoizedState),(ae=dr||Gh(i,a,ae,l,xe,He,B)||!1)?(Se||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(l,He,B),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(l,He,B)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||I===t.memoizedProps&&xe===t.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||I===t.memoizedProps&&xe===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=He),E.props=l,E.state=He,E.context=B,l=ae):(typeof E.componentDidUpdate!="function"||I===t.memoizedProps&&xe===t.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||I===t.memoizedProps&&xe===t.memoizedState||(i.flags|=1024),l=!1)}return Ju(t,i,a,l,h,f)}function Ju(t,i,a,l,f,h){tp(t,i);var E=(i.flags&128)!==0;if(!l&&!E)return f&&oh(i,a,!1),Vi(t,i,h);l=i.stateNode,Hg.current=i;var I=E&&typeof a.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&E?(i.child=Ts(i,t.child,null,h),i.child=Ts(i,null,I,h)):bn(t,i,I,h),i.memoizedState=l.state,f&&oh(i,a,!0),i.child}function ip(t){var i=t.stateNode;i.pendingContext?sh(t,i.pendingContext,i.pendingContext!==i.context):i.context&&sh(t,i.context,!1),Fu(t,i.containerInfo)}function rp(t,i,a,l,f){return Es(),Ru(f),i.flags|=256,bn(t,i,a,l),i.child}var ec={dehydrated:null,treeContext:null,retryLane:0};function tc(t){return{baseLanes:t,cachePool:null,transitions:null}}function sp(t,i,a){var l=i.pendingProps,f=Xt.current,h=!1,E=(i.flags&128)!==0,I;if((I=E)||(I=t!==null&&t.memoizedState===null?!1:(f&2)!==0),I?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(f|=1),Nt(Xt,f&1),t===null)return Cu(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(E=l.children,t=l.fallback,h?(l=i.mode,h=i.child,E={mode:"hidden",children:E},(l&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=E):h=Ko(E,l,0,null),t=qr(t,l,a,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=tc(a),i.memoizedState=ec,t):nc(i,E));if(f=t.memoizedState,f!==null&&(I=f.dehydrated,I!==null))return Gg(t,i,E,l,I,f,a);if(h){h=l.fallback,E=i.mode,f=t.child,I=f.sibling;var B={mode:"hidden",children:l.children};return(E&1)===0&&i.child!==f?(l=i.child,l.childLanes=0,l.pendingProps=B,i.deletions=null):(l=xr(f,B),l.subtreeFlags=f.subtreeFlags&14680064),I!==null?h=xr(I,h):(h=qr(h,E,a,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,E=t.child.memoizedState,E=E===null?tc(a):{baseLanes:E.baseLanes|a,cachePool:null,transitions:E.transitions},h.memoizedState=E,h.childLanes=t.childLanes&~a,i.memoizedState=ec,l}return h=t.child,t=h.sibling,l=xr(h,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=a),l.return=i,l.sibling=null,t!==null&&(a=i.deletions,a===null?(i.deletions=[t],i.flags|=16):a.push(t)),i.child=l,i.memoizedState=null,l}function nc(t,i){return i=Ko({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Oo(t,i,a,l){return l!==null&&Ru(l),Ts(i,t.child,null,a),t=nc(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Gg(t,i,a,l,f,h,E){if(a)return i.flags&256?(i.flags&=-257,l=Ku(Error(n(422))),Oo(t,i,E,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=l.fallback,f=i.mode,l=Ko({mode:"visible",children:l.children},f,0,null),h=qr(h,f,E,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,(i.mode&1)!==0&&Ts(i,t.child,null,E),i.child.memoizedState=tc(E),i.memoizedState=ec,h);if((i.mode&1)===0)return Oo(t,i,E,null);if(f.data==="$!"){if(l=f.nextSibling&&f.nextSibling.dataset,l)var I=l.dgst;return l=I,h=Error(n(419)),l=Ku(h,l,void 0),Oo(t,i,E,l)}if(I=(E&t.childLanes)!==0,Un||I){if(l=ln,l!==null){switch(E&-E){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(l.suspendedLanes|E))!==0?0:f,f!==0&&f!==h.retryLane&&(h.retryLane=f,Bi(t,f),hi(l,t,f,-1))}return _c(),l=Ku(Error(n(421))),Oo(t,i,E,l)}return f.data==="$?"?(i.flags|=128,i.child=t.child,i=nv.bind(null,t),f._reactRetry=i,null):(t=h.treeContext,Wn=lr(f.nextSibling),Gn=i,Ht=!0,ui=null,t!==null&&($n[Kn++]=Oi,$n[Kn++]=ki,$n[Kn++]=Br,Oi=t.id,ki=t.overflow,Br=i),i=nc(i,l.children),i.flags|=4096,i)}function ap(t,i,a){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Iu(t.return,i,a)}function ic(t,i,a,l,f){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:f}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=a,h.tailMode=f)}function op(t,i,a){var l=i.pendingProps,f=l.revealOrder,h=l.tail;if(bn(t,i,l.children,a),l=Xt.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ap(t,a,i);else if(t.tag===19)ap(t,a,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Nt(Xt,l),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(a=i.child,f=null;a!==null;)t=a.alternate,t!==null&&Po(t)===null&&(f=a),a=a.sibling;a=f,a===null?(f=i.child,i.child=null):(f=a.sibling,a.sibling=null),ic(i,!1,f,a,h);break;case"backwards":for(a=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&Po(t)===null){i.child=f;break}t=f.sibling,f.sibling=a,a=f,f=t}ic(i,!0,a,null,h);break;case"together":ic(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ko(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Vi(t,i,a){if(t!==null&&(i.dependencies=t.dependencies),Wr|=i.lanes,(a&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,a=xr(t,t.pendingProps),i.child=a,a.return=i;t.sibling!==null;)t=t.sibling,a=a.sibling=xr(t,t.pendingProps),a.return=i;a.sibling=null}return i.child}function Wg(t,i,a){switch(i.tag){case 3:ip(i),Es();break;case 5:yh(i);break;case 1:Nn(i.type)&&So(i);break;case 4:Fu(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,f=i.memoizedProps.value;Nt(Ao,l._currentValue),l._currentValue=f;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Nt(Xt,Xt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?sp(t,i,a):(Nt(Xt,Xt.current&1),t=Vi(t,i,a),t!==null?t.sibling:null);Nt(Xt,Xt.current&1);break;case 19:if(l=(a&i.childLanes)!==0,(t.flags&128)!==0){if(l)return op(t,i,a);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Nt(Xt,Xt.current),l)break;return null;case 22:case 23:return i.lanes=0,ep(t,i,a)}return Vi(t,i,a)}var lp,rc,up,cp;lp=function(t,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},rc=function(){},up=function(t,i,a,l){var f=t.memoizedProps;if(f!==l){t=i.stateNode,Hr(Mi.current);var h=null;switch(a){case"input":f=Tt(t,f),l=Tt(t,l),h=[];break;case"select":f=le({},f,{value:void 0}),l=le({},l,{value:void 0}),h=[];break;case"textarea":f=zt(t,f),l=zt(t,l),h=[];break;default:typeof f.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=vo)}Ye(a,l);var E;a=null;for(ae in f)if(!l.hasOwnProperty(ae)&&f.hasOwnProperty(ae)&&f[ae]!=null)if(ae==="style"){var I=f[ae];for(E in I)I.hasOwnProperty(E)&&(a||(a={}),a[E]="")}else ae!=="dangerouslySetInnerHTML"&&ae!=="children"&&ae!=="suppressContentEditableWarning"&&ae!=="suppressHydrationWarning"&&ae!=="autoFocus"&&(o.hasOwnProperty(ae)?h||(h=[]):(h=h||[]).push(ae,null));for(ae in l){var B=l[ae];if(I=f!=null?f[ae]:void 0,l.hasOwnProperty(ae)&&B!==I&&(B!=null||I!=null))if(ae==="style")if(I){for(E in I)!I.hasOwnProperty(E)||B&&B.hasOwnProperty(E)||(a||(a={}),a[E]="");for(E in B)B.hasOwnProperty(E)&&I[E]!==B[E]&&(a||(a={}),a[E]=B[E])}else a||(h||(h=[]),h.push(ae,a)),a=B;else ae==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,I=I?I.__html:void 0,B!=null&&I!==B&&(h=h||[]).push(ae,B)):ae==="children"?typeof B!="string"&&typeof B!="number"||(h=h||[]).push(ae,""+B):ae!=="suppressContentEditableWarning"&&ae!=="suppressHydrationWarning"&&(o.hasOwnProperty(ae)?(B!=null&&ae==="onScroll"&&Ft("scroll",t),h||I===B||(h=[])):(h=h||[]).push(ae,B))}a&&(h=h||[]).push("style",a);var ae=h;(i.updateQueue=ae)&&(i.flags|=4)}},cp=function(t,i,a,l){a!==l&&(i.flags|=4)};function La(t,i){if(!Ht)switch(t.tailMode){case"hidden":i=t.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function yn(t){var i=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(i)for(var f=t.child;f!==null;)a|=f.lanes|f.childLanes,l|=f.subtreeFlags&14680064,l|=f.flags&14680064,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)a|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=a,i}function Xg(t,i,a){var l=i.pendingProps;switch(Au(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return yn(i),null;case 1:return Nn(i.type)&&xo(),yn(i),null;case 3:return l=i.stateNode,bs(),Ot(In),Ot(xn),Bu(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(To(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ui!==null&&(mc(ui),ui=null))),rc(t,i),yn(i),null;case 5:Ou(i);var f=Hr(Aa.current);if(a=i.type,t!==null&&i.stateNode!=null)up(t,i,a,l,f),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return yn(i),null}if(t=Hr(Mi.current),To(i)){l=i.stateNode,a=i.type;var h=i.memoizedProps;switch(l[yi]=i,l[ya]=h,t=(i.mode&1)!==0,a){case"dialog":Ft("cancel",l),Ft("close",l);break;case"iframe":case"object":case"embed":Ft("load",l);break;case"video":case"audio":for(f=0;f<_a.length;f++)Ft(_a[f],l);break;case"source":Ft("error",l);break;case"img":case"image":case"link":Ft("error",l),Ft("load",l);break;case"details":Ft("toggle",l);break;case"input":vt(l,h),Ft("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!h.multiple},Ft("invalid",l);break;case"textarea":G(l,h),Ft("invalid",l)}Ye(a,h),f=null;for(var E in h)if(h.hasOwnProperty(E)){var I=h[E];E==="children"?typeof I=="string"?l.textContent!==I&&(h.suppressHydrationWarning!==!0&&go(l.textContent,I,t),f=["children",I]):typeof I=="number"&&l.textContent!==""+I&&(h.suppressHydrationWarning!==!0&&go(l.textContent,I,t),f=["children",""+I]):o.hasOwnProperty(E)&&I!=null&&E==="onScroll"&&Ft("scroll",l)}switch(a){case"input":Je(l),jt(l,h,!0);break;case"textarea":Je(l),Mt(l);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(l.onclick=vo)}l=f,i.updateQueue=l,l!==null&&(i.flags|=4)}else{E=f.nodeType===9?f:f.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=R(a)),t==="http://www.w3.org/1999/xhtml"?a==="script"?(t=E.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=E.createElement(a,{is:l.is}):(t=E.createElement(a),a==="select"&&(E=t,l.multiple?E.multiple=!0:l.size&&(E.size=l.size))):t=E.createElementNS(t,a),t[yi]=i,t[ya]=l,lp(t,i,!1,!1),i.stateNode=t;e:{switch(E=Le(a,l),a){case"dialog":Ft("cancel",t),Ft("close",t),f=l;break;case"iframe":case"object":case"embed":Ft("load",t),f=l;break;case"video":case"audio":for(f=0;f<_a.length;f++)Ft(_a[f],t);f=l;break;case"source":Ft("error",t),f=l;break;case"img":case"image":case"link":Ft("error",t),Ft("load",t),f=l;break;case"details":Ft("toggle",t),f=l;break;case"input":vt(t,l),f=Tt(t,l),Ft("invalid",t);break;case"option":f=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},f=le({},l,{value:void 0}),Ft("invalid",t);break;case"textarea":G(t,l),f=zt(t,l),Ft("invalid",t);break;default:f=l}Ye(a,f),I=f;for(h in I)if(I.hasOwnProperty(h)){var B=I[h];h==="style"?me(t,B):h==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,B!=null&&ne(t,B)):h==="children"?typeof B=="string"?(a!=="textarea"||B!=="")&&ue(t,B):typeof B=="number"&&ue(t,""+B):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(o.hasOwnProperty(h)?B!=null&&h==="onScroll"&&Ft("scroll",t):B!=null&&k(t,h,B,E))}switch(a){case"input":Je(t),jt(t,l,!1);break;case"textarea":Je(t),Mt(t);break;case"option":l.value!=null&&t.setAttribute("value",""+pe(l.value));break;case"select":t.multiple=!!l.multiple,h=l.value,h!=null?Ct(t,!!l.multiple,h,!1):l.defaultValue!=null&&Ct(t,!!l.multiple,l.defaultValue,!0);break;default:typeof f.onClick=="function"&&(t.onclick=vo)}switch(a){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return yn(i),null;case 6:if(t&&i.stateNode!=null)cp(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(a=Hr(Aa.current),Hr(Mi.current),To(i)){if(l=i.stateNode,a=i.memoizedProps,l[yi]=i,(h=l.nodeValue!==a)&&(t=Gn,t!==null))switch(t.tag){case 3:go(l.nodeValue,a,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&go(l.nodeValue,a,(t.mode&1)!==0)}h&&(i.flags|=4)}else l=(a.nodeType===9?a:a.ownerDocument).createTextNode(l),l[yi]=i,i.stateNode=l}return yn(i),null;case 13:if(Ot(Xt),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ht&&Wn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)hh(),Es(),i.flags|=98560,h=!1;else if(h=To(i),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[yi]=i}else Es(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;yn(i),h=!1}else ui!==null&&(mc(ui),ui=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Xt.current&1)!==0?rn===0&&(rn=3):_c())),i.updateQueue!==null&&(i.flags|=4),yn(i),null);case 4:return bs(),rc(t,i),t===null&&xa(i.stateNode.containerInfo),yn(i),null;case 10:return Du(i.type._context),yn(i),null;case 17:return Nn(i.type)&&xo(),yn(i),null;case 19:if(Ot(Xt),h=i.memoizedState,h===null)return yn(i),null;if(l=(i.flags&128)!==0,E=h.rendering,E===null)if(l)La(h,!1);else{if(rn!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(E=Po(t),E!==null){for(i.flags|=128,La(h,!1),l=E.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=a,a=i.child;a!==null;)h=a,t=l,h.flags&=14680066,E=h.alternate,E===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=E.childLanes,h.lanes=E.lanes,h.child=E.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=E.memoizedProps,h.memoizedState=E.memoizedState,h.updateQueue=E.updateQueue,h.type=E.type,t=E.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),a=a.sibling;return Nt(Xt,Xt.current&1|2),i.child}t=t.sibling}h.tail!==null&&Wt()>Ls&&(i.flags|=128,l=!0,La(h,!1),i.lanes=4194304)}else{if(!l)if(t=Po(E),t!==null){if(i.flags|=128,l=!0,a=t.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),La(h,!0),h.tail===null&&h.tailMode==="hidden"&&!E.alternate&&!Ht)return yn(i),null}else 2*Wt()-h.renderingStartTime>Ls&&a!==1073741824&&(i.flags|=128,l=!0,La(h,!1),i.lanes=4194304);h.isBackwards?(E.sibling=i.child,i.child=E):(a=h.last,a!==null?a.sibling=E:i.child=E,h.last=E)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=Wt(),i.sibling=null,a=Xt.current,Nt(Xt,l?a&1|2:a&1),i):(yn(i),null);case 22:case 23:return vc(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(Xn&1073741824)!==0&&(yn(i),i.subtreeFlags&6&&(i.flags|=8192)):yn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function Yg(t,i){switch(Au(i),i.tag){case 1:return Nn(i.type)&&xo(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return bs(),Ot(In),Ot(xn),Bu(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Ou(i),null;case 13:if(Ot(Xt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));Es()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Ot(Xt),null;case 4:return bs(),null;case 10:return Du(i.type._context),null;case 22:case 23:return vc(),null;case 24:return null;default:return null}}var Bo=!1,Mn=!1,jg=typeof WeakSet=="function"?WeakSet:Set,Be=null;function Rs(t,i){var a=t.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(l){$t(t,i,l)}else a.current=null}function sc(t,i,a){try{a()}catch(l){$t(t,i,l)}}var fp=!1;function qg(t,i){if(vu=ro,t=Gd(),uu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var f=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break e}var E=0,I=-1,B=-1,ae=0,Se=0,ye=t,xe=null;t:for(;;){for(var Oe;ye!==a||f!==0&&ye.nodeType!==3||(I=E+f),ye!==h||l!==0&&ye.nodeType!==3||(B=E+l),ye.nodeType===3&&(E+=ye.nodeValue.length),(Oe=ye.firstChild)!==null;)xe=ye,ye=Oe;for(;;){if(ye===t)break t;if(xe===a&&++ae===f&&(I=E),xe===h&&++Se===l&&(B=E),(Oe=ye.nextSibling)!==null)break;ye=xe,xe=ye.parentNode}ye=Oe}a=I===-1||B===-1?null:{start:I,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(_u={focusedElem:t,selectionRange:a},ro=!1,Be=i;Be!==null;)if(i=Be,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Be=t;else for(;Be!==null;){i=Be;try{var He=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(He!==null){var Xe=He.memoizedProps,Zt=He.memoizedState,Q=i.stateNode,H=Q.getSnapshotBeforeUpdate(i.elementType===i.type?Xe:ci(i.type,Xe),Zt);Q.__reactInternalSnapshotBeforeUpdate=H}break;case 3:var te=i.stateNode.containerInfo;te.nodeType===1?te.textContent="":te.nodeType===9&&te.documentElement&&te.removeChild(te.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Ee){$t(i,i.return,Ee)}if(t=i.sibling,t!==null){t.return=i.return,Be=t;break}Be=i.return}return He=fp,fp=!1,He}function Da(t,i,a){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var f=l=l.next;do{if((f.tag&t)===t){var h=f.destroy;f.destroy=void 0,h!==void 0&&sc(i,a,h)}f=f.next}while(f!==l)}}function zo(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&t)===t){var l=a.create;a.destroy=l()}a=a.next}while(a!==i)}}function ac(t){var i=t.ref;if(i!==null){var a=t.stateNode;switch(t.tag){case 5:t=a;break;default:t=a}typeof i=="function"?i(t):i.current=t}}function dp(t){var i=t.alternate;i!==null&&(t.alternate=null,dp(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[yi],delete i[ya],delete i[Mu],delete i[Pg],delete i[Lg])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function hp(t){return t.tag===5||t.tag===3||t.tag===4}function pp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||hp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function oc(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(t,i):a.insertBefore(t,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(t,a)):(i=a,i.appendChild(t)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=vo));else if(l!==4&&(t=t.child,t!==null))for(oc(t,i,a),t=t.sibling;t!==null;)oc(t,i,a),t=t.sibling}function lc(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?a.insertBefore(t,i):a.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(lc(t,i,a),t=t.sibling;t!==null;)lc(t,i,a),t=t.sibling}var pn=null,fi=!1;function pr(t,i,a){for(a=a.child;a!==null;)mp(t,i,a),a=a.sibling}function mp(t,i,a){if(we&&typeof we.onCommitFiberUnmount=="function")try{we.onCommitFiberUnmount(J,a)}catch{}switch(a.tag){case 5:Mn||Rs(a,i);case 6:var l=pn,f=fi;pn=null,pr(t,i,a),pn=l,fi=f,pn!==null&&(fi?(t=pn,a=a.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)):pn.removeChild(a.stateNode));break;case 18:pn!==null&&(fi?(t=pn,a=a.stateNode,t.nodeType===8?yu(t.parentNode,a):t.nodeType===1&&yu(t,a),ca(t)):yu(pn,a.stateNode));break;case 4:l=pn,f=fi,pn=a.stateNode.containerInfo,fi=!0,pr(t,i,a),pn=l,fi=f;break;case 0:case 11:case 14:case 15:if(!Mn&&(l=a.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){f=l=l.next;do{var h=f,E=h.destroy;h=h.tag,E!==void 0&&((h&2)!==0||(h&4)!==0)&&sc(a,i,E),f=f.next}while(f!==l)}pr(t,i,a);break;case 1:if(!Mn&&(Rs(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=a.memoizedProps,l.state=a.memoizedState,l.componentWillUnmount()}catch(I){$t(a,i,I)}pr(t,i,a);break;case 21:pr(t,i,a);break;case 22:a.mode&1?(Mn=(l=Mn)||a.memoizedState!==null,pr(t,i,a),Mn=l):pr(t,i,a);break;default:pr(t,i,a)}}function gp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var a=t.stateNode;a===null&&(a=t.stateNode=new jg),i.forEach(function(l){var f=iv.bind(null,t,l);a.has(l)||(a.add(l),l.then(f,f))})}}function di(t,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var f=a[l];try{var h=t,E=i,I=E;e:for(;I!==null;){switch(I.tag){case 5:pn=I.stateNode,fi=!1;break e;case 3:pn=I.stateNode.containerInfo,fi=!0;break e;case 4:pn=I.stateNode.containerInfo,fi=!0;break e}I=I.return}if(pn===null)throw Error(n(160));mp(h,E,f),pn=null,fi=!1;var B=f.alternate;B!==null&&(B.return=null),f.return=null}catch(ae){$t(f,i,ae)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)vp(i,t),i=i.sibling}function vp(t,i){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(di(i,t),Ti(t),l&4){try{Da(3,t,t.return),zo(3,t)}catch(Xe){$t(t,t.return,Xe)}try{Da(5,t,t.return)}catch(Xe){$t(t,t.return,Xe)}}break;case 1:di(i,t),Ti(t),l&512&&a!==null&&Rs(a,a.return);break;case 5:if(di(i,t),Ti(t),l&512&&a!==null&&Rs(a,a.return),t.flags&32){var f=t.stateNode;try{ue(f,"")}catch(Xe){$t(t,t.return,Xe)}}if(l&4&&(f=t.stateNode,f!=null)){var h=t.memoizedProps,E=a!==null?a.memoizedProps:h,I=t.type,B=t.updateQueue;if(t.updateQueue=null,B!==null)try{I==="input"&&h.type==="radio"&&h.name!=null&&pt(f,h),Le(I,E);var ae=Le(I,h);for(E=0;E<B.length;E+=2){var Se=B[E],ye=B[E+1];Se==="style"?me(f,ye):Se==="dangerouslySetInnerHTML"?ne(f,ye):Se==="children"?ue(f,ye):k(f,Se,ye,ae)}switch(I){case"input":Bt(f,h);break;case"textarea":dn(f,h);break;case"select":var xe=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!h.multiple;var Oe=h.value;Oe!=null?Ct(f,!!h.multiple,Oe,!1):xe!==!!h.multiple&&(h.defaultValue!=null?Ct(f,!!h.multiple,h.defaultValue,!0):Ct(f,!!h.multiple,h.multiple?[]:"",!1))}f[ya]=h}catch(Xe){$t(t,t.return,Xe)}}break;case 6:if(di(i,t),Ti(t),l&4){if(t.stateNode===null)throw Error(n(162));f=t.stateNode,h=t.memoizedProps;try{f.nodeValue=h}catch(Xe){$t(t,t.return,Xe)}}break;case 3:if(di(i,t),Ti(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{ca(i.containerInfo)}catch(Xe){$t(t,t.return,Xe)}break;case 4:di(i,t),Ti(t);break;case 13:di(i,t),Ti(t),f=t.child,f.flags&8192&&(h=f.memoizedState!==null,f.stateNode.isHidden=h,!h||f.alternate!==null&&f.alternate.memoizedState!==null||(fc=Wt())),l&4&&gp(t);break;case 22:if(Se=a!==null&&a.memoizedState!==null,t.mode&1?(Mn=(ae=Mn)||Se,di(i,t),Mn=ae):di(i,t),Ti(t),l&8192){if(ae=t.memoizedState!==null,(t.stateNode.isHidden=ae)&&!Se&&(t.mode&1)!==0)for(Be=t,Se=t.child;Se!==null;){for(ye=Be=Se;Be!==null;){switch(xe=Be,Oe=xe.child,xe.tag){case 0:case 11:case 14:case 15:Da(4,xe,xe.return);break;case 1:Rs(xe,xe.return);var He=xe.stateNode;if(typeof He.componentWillUnmount=="function"){l=xe,a=xe.return;try{i=l,He.props=i.memoizedProps,He.state=i.memoizedState,He.componentWillUnmount()}catch(Xe){$t(l,a,Xe)}}break;case 5:Rs(xe,xe.return);break;case 22:if(xe.memoizedState!==null){Sp(ye);continue}}Oe!==null?(Oe.return=xe,Be=Oe):Sp(ye)}Se=Se.sibling}e:for(Se=null,ye=t;;){if(ye.tag===5){if(Se===null){Se=ye;try{f=ye.stateNode,ae?(h=f.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(I=ye.stateNode,B=ye.memoizedProps.style,E=B!=null&&B.hasOwnProperty("display")?B.display:null,I.style.display=de("display",E))}catch(Xe){$t(t,t.return,Xe)}}}else if(ye.tag===6){if(Se===null)try{ye.stateNode.nodeValue=ae?"":ye.memoizedProps}catch(Xe){$t(t,t.return,Xe)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===t)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===t)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===t)break e;Se===ye&&(Se=null),ye=ye.return}Se===ye&&(Se=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:di(i,t),Ti(t),l&4&&gp(t);break;case 21:break;default:di(i,t),Ti(t)}}function Ti(t){var i=t.flags;if(i&2){try{e:{for(var a=t.return;a!==null;){if(hp(a)){var l=a;break e}a=a.return}throw Error(n(160))}switch(l.tag){case 5:var f=l.stateNode;l.flags&32&&(ue(f,""),l.flags&=-33);var h=pp(t);lc(t,h,f);break;case 3:case 4:var E=l.stateNode.containerInfo,I=pp(t);oc(t,I,E);break;default:throw Error(n(161))}}catch(B){$t(t,t.return,B)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function $g(t,i,a){Be=t,_p(t)}function _p(t,i,a){for(var l=(t.mode&1)!==0;Be!==null;){var f=Be,h=f.child;if(f.tag===22&&l){var E=f.memoizedState!==null||Bo;if(!E){var I=f.alternate,B=I!==null&&I.memoizedState!==null||Mn;I=Bo;var ae=Mn;if(Bo=E,(Mn=B)&&!ae)for(Be=f;Be!==null;)E=Be,B=E.child,E.tag===22&&E.memoizedState!==null?yp(f):B!==null?(B.return=E,Be=B):yp(f);for(;h!==null;)Be=h,_p(h),h=h.sibling;Be=f,Bo=I,Mn=ae}xp(t)}else(f.subtreeFlags&8772)!==0&&h!==null?(h.return=f,Be=h):xp(t)}}function xp(t){for(;Be!==null;){var i=Be;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Mn||zo(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!Mn)if(a===null)l.componentDidMount();else{var f=i.elementType===i.type?a.memoizedProps:ci(i.type,a.memoizedProps);l.componentDidUpdate(f,a.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&Sh(i,h,l);break;case 3:var E=i.updateQueue;if(E!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Sh(i,E,a)}break;case 5:var I=i.stateNode;if(a===null&&i.flags&4){a=I;var B=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":B.autoFocus&&a.focus();break;case"img":B.src&&(a.src=B.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ae=i.alternate;if(ae!==null){var Se=ae.memoizedState;if(Se!==null){var ye=Se.dehydrated;ye!==null&&ca(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}Mn||i.flags&512&&ac(i)}catch(xe){$t(i,i.return,xe)}}if(i===t){Be=null;break}if(a=i.sibling,a!==null){a.return=i.return,Be=a;break}Be=i.return}}function Sp(t){for(;Be!==null;){var i=Be;if(i===t){Be=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Be=a;break}Be=i.return}}function yp(t){for(;Be!==null;){var i=Be;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{zo(4,i)}catch(B){$t(i,a,B)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var f=i.return;try{l.componentDidMount()}catch(B){$t(i,f,B)}}var h=i.return;try{ac(i)}catch(B){$t(i,h,B)}break;case 5:var E=i.return;try{ac(i)}catch(B){$t(i,E,B)}}}catch(B){$t(i,i.return,B)}if(i===t){Be=null;break}var I=i.sibling;if(I!==null){I.return=i.return,Be=I;break}Be=i.return}}var Kg=Math.ceil,Vo=b.ReactCurrentDispatcher,uc=b.ReactCurrentOwner,Jn=b.ReactCurrentBatchConfig,xt=0,ln=null,en=null,mn=0,Xn=0,Ps=ur(0),rn=0,Ia=null,Wr=0,Ho=0,cc=0,Na=null,Fn=null,fc=0,Ls=1/0,Hi=null,Go=!1,dc=null,mr=null,Wo=!1,gr=null,Xo=0,Ua=0,hc=null,Yo=-1,jo=0;function Cn(){return(xt&6)!==0?Wt():Yo!==-1?Yo:Yo=Wt()}function vr(t){return(t.mode&1)===0?1:(xt&2)!==0&&mn!==0?mn&-mn:Ig.transition!==null?(jo===0&&(jo=Fe()),jo):(t=dt,t!==0||(t=window.event,t=t===void 0?16:Ed(t.type)),t)}function hi(t,i,a,l){if(50<Ua)throw Ua=0,hc=null,Error(n(185));ft(t,a,l),((xt&2)===0||t!==ln)&&(t===ln&&((xt&2)===0&&(Ho|=a),rn===4&&_r(t,mn)),On(t,l),a===1&&xt===0&&(i.mode&1)===0&&(Ls=Wt()+500,yo&&fr()))}function On(t,i){var a=t.callbackNode;Rt(t,i);var l=It(t,t===ln?mn:0);if(l===0)a!==null&&ra(a),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(a!=null&&ra(a),i===1)t.tag===0?Dg(Ep.bind(null,t)):lh(Ep.bind(null,t)),Cg(function(){(xt&6)===0&&fr()}),a=null;else{switch(Ni(l)){case 1:a=sa;break;case 4:a=w;break;case 16:a=W;break;case 536870912:a=ee;break;default:a=W}a=Lp(a,Mp.bind(null,t))}t.callbackPriority=i,t.callbackNode=a}}function Mp(t,i){if(Yo=-1,jo=0,(xt&6)!==0)throw Error(n(327));var a=t.callbackNode;if(Ds()&&t.callbackNode!==a)return null;var l=It(t,t===ln?mn:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=qo(t,l);else{i=l;var f=xt;xt|=2;var h=wp();(ln!==t||mn!==i)&&(Hi=null,Ls=Wt()+500,Yr(t,i));do try{Jg();break}catch(I){Tp(t,I)}while(!0);Lu(),Vo.current=h,xt=f,en!==null?i=0:(ln=null,mn=0,i=rn)}if(i!==0){if(i===2&&(f=Jt(t),f!==0&&(l=f,i=pc(t,f))),i===1)throw a=Ia,Yr(t,0),_r(t,l),On(t,Wt()),a;if(i===6)_r(t,l);else{if(f=t.current.alternate,(l&30)===0&&!Zg(f)&&(i=qo(t,l),i===2&&(h=Jt(t),h!==0&&(l=h,i=pc(t,h))),i===1))throw a=Ia,Yr(t,0),_r(t,l),On(t,Wt()),a;switch(t.finishedWork=f,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:jr(t,Fn,Hi);break;case 3:if(_r(t,l),(l&130023424)===l&&(i=fc+500-Wt(),10<i)){if(It(t,0)!==0)break;if(f=t.suspendedLanes,(f&l)!==l){Cn(),t.pingedLanes|=t.suspendedLanes&f;break}t.timeoutHandle=Su(jr.bind(null,t,Fn,Hi),i);break}jr(t,Fn,Hi);break;case 4:if(_r(t,l),(l&4194240)===l)break;for(i=t.eventTimes,f=-1;0<l;){var E=31-Te(l);h=1<<E,E=i[E],E>f&&(f=E),l&=~h}if(l=f,l=Wt()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*Kg(l/1960))-l,10<l){t.timeoutHandle=Su(jr.bind(null,t,Fn,Hi),l);break}jr(t,Fn,Hi);break;case 5:jr(t,Fn,Hi);break;default:throw Error(n(329))}}}return On(t,Wt()),t.callbackNode===a?Mp.bind(null,t):null}function pc(t,i){var a=Na;return t.current.memoizedState.isDehydrated&&(Yr(t,i).flags|=256),t=qo(t,i),t!==2&&(i=Fn,Fn=a,i!==null&&mc(i)),t}function mc(t){Fn===null?Fn=t:Fn.push.apply(Fn,t)}function Zg(t){for(var i=t;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var l=0;l<a.length;l++){var f=a[l],h=f.getSnapshot;f=f.value;try{if(!li(h(),f))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function _r(t,i){for(i&=~cc,i&=~Ho,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var a=31-Te(i),l=1<<a;t[a]=-1,i&=~l}}function Ep(t){if((xt&6)!==0)throw Error(n(327));Ds();var i=It(t,0);if((i&1)===0)return On(t,Wt()),null;var a=qo(t,i);if(t.tag!==0&&a===2){var l=Jt(t);l!==0&&(i=l,a=pc(t,l))}if(a===1)throw a=Ia,Yr(t,0),_r(t,i),On(t,Wt()),a;if(a===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,jr(t,Fn,Hi),On(t,Wt()),null}function gc(t,i){var a=xt;xt|=1;try{return t(i)}finally{xt=a,xt===0&&(Ls=Wt()+500,yo&&fr())}}function Xr(t){gr!==null&&gr.tag===0&&(xt&6)===0&&Ds();var i=xt;xt|=1;var a=Jn.transition,l=dt;try{if(Jn.transition=null,dt=1,t)return t()}finally{dt=l,Jn.transition=a,xt=i,(xt&6)===0&&fr()}}function vc(){Xn=Ps.current,Ot(Ps)}function Yr(t,i){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;if(a!==-1&&(t.timeoutHandle=-1,bg(a)),en!==null)for(a=en.return;a!==null;){var l=a;switch(Au(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&xo();break;case 3:bs(),Ot(In),Ot(xn),Bu();break;case 5:Ou(l);break;case 4:bs();break;case 13:Ot(Xt);break;case 19:Ot(Xt);break;case 10:Du(l.type._context);break;case 22:case 23:vc()}a=a.return}if(ln=t,en=t=xr(t.current,null),mn=Xn=i,rn=0,Ia=null,cc=Ho=Wr=0,Fn=Na=null,Vr!==null){for(i=0;i<Vr.length;i++)if(a=Vr[i],l=a.interleaved,l!==null){a.interleaved=null;var f=l.next,h=a.pending;if(h!==null){var E=h.next;h.next=f,l.next=E}a.pending=l}Vr=null}return t}function Tp(t,i){do{var a=en;try{if(Lu(),Lo.current=Uo,Do){for(var l=Yt.memoizedState;l!==null;){var f=l.queue;f!==null&&(f.pending=null),l=l.next}Do=!1}if(Gr=0,on=nn=Yt=null,ba=!1,Ca=0,uc.current=null,a===null||a.return===null){rn=1,Ia=i,en=null;break}e:{var h=t,E=a.return,I=a,B=i;if(i=mn,I.flags|=32768,B!==null&&typeof B=="object"&&typeof B.then=="function"){var ae=B,Se=I,ye=Se.tag;if((Se.mode&1)===0&&(ye===0||ye===11||ye===15)){var xe=Se.alternate;xe?(Se.updateQueue=xe.updateQueue,Se.memoizedState=xe.memoizedState,Se.lanes=xe.lanes):(Se.updateQueue=null,Se.memoizedState=null)}var Oe=$h(E);if(Oe!==null){Oe.flags&=-257,Kh(Oe,E,I,h,i),Oe.mode&1&&qh(h,ae,i),i=Oe,B=ae;var He=i.updateQueue;if(He===null){var Xe=new Set;Xe.add(B),i.updateQueue=Xe}else He.add(B);break e}else{if((i&1)===0){qh(h,ae,i),_c();break e}B=Error(n(426))}}else if(Ht&&I.mode&1){var Zt=$h(E);if(Zt!==null){(Zt.flags&65536)===0&&(Zt.flags|=256),Kh(Zt,E,I,h,i),Ru(Cs(B,I));break e}}h=B=Cs(B,I),rn!==4&&(rn=2),Na===null?Na=[h]:Na.push(h),h=E;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var Q=Yh(h,B,i);xh(h,Q);break e;case 1:I=B;var H=h.type,te=h.stateNode;if((h.flags&128)===0&&(typeof H.getDerivedStateFromError=="function"||te!==null&&typeof te.componentDidCatch=="function"&&(mr===null||!mr.has(te)))){h.flags|=65536,i&=-i,h.lanes|=i;var Ee=jh(h,I,i);xh(h,Ee);break e}}h=h.return}while(h!==null)}bp(a)}catch($e){i=$e,en===a&&a!==null&&(en=a=a.return);continue}break}while(!0)}function wp(){var t=Vo.current;return Vo.current=Uo,t===null?Uo:t}function _c(){(rn===0||rn===3||rn===2)&&(rn=4),ln===null||(Wr&268435455)===0&&(Ho&268435455)===0||_r(ln,mn)}function qo(t,i){var a=xt;xt|=2;var l=wp();(ln!==t||mn!==i)&&(Hi=null,Yr(t,i));do try{Qg();break}catch(f){Tp(t,f)}while(!0);if(Lu(),xt=a,Vo.current=l,en!==null)throw Error(n(261));return ln=null,mn=0,rn}function Qg(){for(;en!==null;)Ap(en)}function Jg(){for(;en!==null&&!no();)Ap(en)}function Ap(t){var i=Pp(t.alternate,t,Xn);t.memoizedProps=t.pendingProps,i===null?bp(t):en=i,uc.current=null}function bp(t){var i=t;do{var a=i.alternate;if(t=i.return,(i.flags&32768)===0){if(a=Xg(a,i,Xn),a!==null){en=a;return}}else{if(a=Yg(a,i),a!==null){a.flags&=32767,en=a;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{rn=6,en=null;return}}if(i=i.sibling,i!==null){en=i;return}en=i=t}while(i!==null);rn===0&&(rn=5)}function jr(t,i,a){var l=dt,f=Jn.transition;try{Jn.transition=null,dt=1,ev(t,i,a,l)}finally{Jn.transition=f,dt=l}return null}function ev(t,i,a,l){do Ds();while(gr!==null);if((xt&6)!==0)throw Error(n(327));a=t.finishedWork;var f=t.finishedLanes;if(a===null)return null;if(t.finishedWork=null,t.finishedLanes=0,a===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=a.lanes|a.childLanes;if(Ln(t,h),t===ln&&(en=ln=null,mn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Wo||(Wo=!0,Lp(W,function(){return Ds(),null})),h=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||h){h=Jn.transition,Jn.transition=null;var E=dt;dt=1;var I=xt;xt|=4,uc.current=null,qg(t,a),vp(a,t),Sg(_u),ro=!!vu,_u=vu=null,t.current=a,$g(a),Kl(),xt=I,dt=E,Jn.transition=h}else t.current=a;if(Wo&&(Wo=!1,gr=t,Xo=f),h=t.pendingLanes,h===0&&(mr=null),ke(a.stateNode),On(t,Wt()),i!==null)for(l=t.onRecoverableError,a=0;a<i.length;a++)f=i[a],l(f.value,{componentStack:f.stack,digest:f.digest});if(Go)throw Go=!1,t=dc,dc=null,t;return(Xo&1)!==0&&t.tag!==0&&Ds(),h=t.pendingLanes,(h&1)!==0?t===hc?Ua++:(Ua=0,hc=t):Ua=0,fr(),null}function Ds(){if(gr!==null){var t=Ni(Xo),i=Jn.transition,a=dt;try{if(Jn.transition=null,dt=16>t?16:t,gr===null)var l=!1;else{if(t=gr,gr=null,Xo=0,(xt&6)!==0)throw Error(n(331));var f=xt;for(xt|=4,Be=t.current;Be!==null;){var h=Be,E=h.child;if((Be.flags&16)!==0){var I=h.deletions;if(I!==null){for(var B=0;B<I.length;B++){var ae=I[B];for(Be=ae;Be!==null;){var Se=Be;switch(Se.tag){case 0:case 11:case 15:Da(8,Se,h)}var ye=Se.child;if(ye!==null)ye.return=Se,Be=ye;else for(;Be!==null;){Se=Be;var xe=Se.sibling,Oe=Se.return;if(dp(Se),Se===ae){Be=null;break}if(xe!==null){xe.return=Oe,Be=xe;break}Be=Oe}}}var He=h.alternate;if(He!==null){var Xe=He.child;if(Xe!==null){He.child=null;do{var Zt=Xe.sibling;Xe.sibling=null,Xe=Zt}while(Xe!==null)}}Be=h}}if((h.subtreeFlags&2064)!==0&&E!==null)E.return=h,Be=E;else e:for(;Be!==null;){if(h=Be,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:Da(9,h,h.return)}var Q=h.sibling;if(Q!==null){Q.return=h.return,Be=Q;break e}Be=h.return}}var H=t.current;for(Be=H;Be!==null;){E=Be;var te=E.child;if((E.subtreeFlags&2064)!==0&&te!==null)te.return=E,Be=te;else e:for(E=H;Be!==null;){if(I=Be,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:zo(9,I)}}catch($e){$t(I,I.return,$e)}if(I===E){Be=null;break e}var Ee=I.sibling;if(Ee!==null){Ee.return=I.return,Be=Ee;break e}Be=I.return}}if(xt=f,fr(),we&&typeof we.onPostCommitFiberRoot=="function")try{we.onPostCommitFiberRoot(J,t)}catch{}l=!0}return l}finally{dt=a,Jn.transition=i}}return!1}function Cp(t,i,a){i=Cs(a,i),i=Yh(t,i,1),t=hr(t,i,1),i=Cn(),t!==null&&(ft(t,1,i),On(t,i))}function $t(t,i,a){if(t.tag===3)Cp(t,t,a);else for(;i!==null;){if(i.tag===3){Cp(i,t,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(mr===null||!mr.has(l))){t=Cs(a,t),t=jh(i,t,1),i=hr(i,t,1),t=Cn(),i!==null&&(ft(i,1,t),On(i,t));break}}i=i.return}}function tv(t,i,a){var l=t.pingCache;l!==null&&l.delete(i),i=Cn(),t.pingedLanes|=t.suspendedLanes&a,ln===t&&(mn&a)===a&&(rn===4||rn===3&&(mn&130023424)===mn&&500>Wt()-fc?Yr(t,0):cc|=a),On(t,i)}function Rp(t,i){i===0&&((t.mode&1)===0?i=1:(i=je,je<<=1,(je&130023424)===0&&(je=4194304)));var a=Cn();t=Bi(t,i),t!==null&&(ft(t,i,a),On(t,a))}function nv(t){var i=t.memoizedState,a=0;i!==null&&(a=i.retryLane),Rp(t,a)}function iv(t,i){var a=0;switch(t.tag){case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(a=f.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),Rp(t,a)}var Pp;Pp=function(t,i,a){if(t!==null)if(t.memoizedProps!==i.pendingProps||In.current)Un=!0;else{if((t.lanes&a)===0&&(i.flags&128)===0)return Un=!1,Wg(t,i,a);Un=(t.flags&131072)!==0}else Un=!1,Ht&&(i.flags&1048576)!==0&&uh(i,Eo,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;ko(t,i),t=i.pendingProps;var f=Ss(i,xn.current);As(i,a),f=Hu(null,i,l,t,f,a);var h=Gu();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Nn(l)?(h=!0,So(i)):h=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Uu(i),f.updater=Fo,i.stateNode=f,f._reactInternals=i,$u(i,l,t,a),i=Ju(null,i,l,!0,h,a)):(i.tag=0,Ht&&h&&wu(i),bn(null,i,f,a),i=i.child),i;case 16:l=i.elementType;e:{switch(ko(t,i),t=i.pendingProps,f=l._init,l=f(l._payload),i.type=l,f=i.tag=sv(l),t=ci(l,t),f){case 0:i=Qu(null,i,l,t,a);break e;case 1:i=np(null,i,l,t,a);break e;case 11:i=Zh(null,i,l,t,a);break e;case 14:i=Qh(null,i,l,ci(l.type,t),a);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:ci(l,f),Qu(t,i,l,f,a);case 1:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:ci(l,f),np(t,i,l,f,a);case 3:e:{if(ip(i),t===null)throw Error(n(387));l=i.pendingProps,h=i.memoizedState,f=h.element,_h(t,i),Ro(i,l,null,a);var E=i.memoizedState;if(l=E.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){f=Cs(Error(n(423)),i),i=rp(t,i,l,a,f);break e}else if(l!==f){f=Cs(Error(n(424)),i),i=rp(t,i,l,a,f);break e}else for(Wn=lr(i.stateNode.containerInfo.firstChild),Gn=i,Ht=!0,ui=null,a=gh(i,null,l,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Es(),l===f){i=Vi(t,i,a);break e}bn(t,i,l,a)}i=i.child}return i;case 5:return yh(i),t===null&&Cu(i),l=i.type,f=i.pendingProps,h=t!==null?t.memoizedProps:null,E=f.children,xu(l,f)?E=null:h!==null&&xu(l,h)&&(i.flags|=32),tp(t,i),bn(t,i,E,a),i.child;case 6:return t===null&&Cu(i),null;case 13:return sp(t,i,a);case 4:return Fu(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=Ts(i,null,l,a):bn(t,i,l,a),i.child;case 11:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:ci(l,f),Zh(t,i,l,f,a);case 7:return bn(t,i,i.pendingProps,a),i.child;case 8:return bn(t,i,i.pendingProps.children,a),i.child;case 12:return bn(t,i,i.pendingProps.children,a),i.child;case 10:e:{if(l=i.type._context,f=i.pendingProps,h=i.memoizedProps,E=f.value,Nt(Ao,l._currentValue),l._currentValue=E,h!==null)if(li(h.value,E)){if(h.children===f.children&&!In.current){i=Vi(t,i,a);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var I=h.dependencies;if(I!==null){E=h.child;for(var B=I.firstContext;B!==null;){if(B.context===l){if(h.tag===1){B=zi(-1,a&-a),B.tag=2;var ae=h.updateQueue;if(ae!==null){ae=ae.shared;var Se=ae.pending;Se===null?B.next=B:(B.next=Se.next,Se.next=B),ae.pending=B}}h.lanes|=a,B=h.alternate,B!==null&&(B.lanes|=a),Iu(h.return,a,i),I.lanes|=a;break}B=B.next}}else if(h.tag===10)E=h.type===i.type?null:h.child;else if(h.tag===18){if(E=h.return,E===null)throw Error(n(341));E.lanes|=a,I=E.alternate,I!==null&&(I.lanes|=a),Iu(E,a,i),E=h.sibling}else E=h.child;if(E!==null)E.return=h;else for(E=h;E!==null;){if(E===i){E=null;break}if(h=E.sibling,h!==null){h.return=E.return,E=h;break}E=E.return}h=E}bn(t,i,f.children,a),i=i.child}return i;case 9:return f=i.type,l=i.pendingProps.children,As(i,a),f=Zn(f),l=l(f),i.flags|=1,bn(t,i,l,a),i.child;case 14:return l=i.type,f=ci(l,i.pendingProps),f=ci(l.type,f),Qh(t,i,l,f,a);case 15:return Jh(t,i,i.type,i.pendingProps,a);case 17:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:ci(l,f),ko(t,i),i.tag=1,Nn(l)?(t=!0,So(i)):t=!1,As(i,a),Wh(i,l,f),$u(i,l,f,a),Ju(null,i,l,!0,t,a);case 19:return op(t,i,a);case 22:return ep(t,i,a)}throw Error(n(156,i.tag))};function Lp(t,i){return Ur(t,i)}function rv(t,i,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ei(t,i,a,l){return new rv(t,i,a,l)}function xc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function sv(t){if(typeof t=="function")return xc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===$)return 11;if(t===Z)return 14}return 2}function xr(t,i){var a=t.alternate;return a===null?(a=ei(t.tag,i,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=i,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&14680064,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,i=t.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a}function $o(t,i,a,l,f,h){var E=2;if(l=t,typeof t=="function")xc(t)&&(E=1);else if(typeof t=="string")E=5;else e:switch(t){case F:return qr(a.children,f,h,i);case T:E=8,f|=8;break;case D:return t=ei(12,a,i,f|2),t.elementType=D,t.lanes=h,t;case ce:return t=ei(13,a,i,f),t.elementType=ce,t.lanes=h,t;case ge:return t=ei(19,a,i,f),t.elementType=ge,t.lanes=h,t;case q:return Ko(a,f,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case X:E=10;break e;case V:E=9;break e;case $:E=11;break e;case Z:E=14;break e;case fe:E=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=ei(E,a,i,f),i.elementType=t,i.type=l,i.lanes=h,i}function qr(t,i,a,l){return t=ei(7,t,l,i),t.lanes=a,t}function Ko(t,i,a,l){return t=ei(22,t,l,i),t.elementType=q,t.lanes=a,t.stateNode={isHidden:!1},t}function Sc(t,i,a){return t=ei(6,t,null,i),t.lanes=a,t}function yc(t,i,a){return i=ei(4,t.children!==null?t.children:[],t.key,i),i.lanes=a,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function av(t,i,a,l,f){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=hn(0),this.expirationTimes=hn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hn(0),this.identifierPrefix=l,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function Mc(t,i,a,l,f,h,E,I,B){return t=new av(t,i,a,I,B),i===1?(i=1,h===!0&&(i|=8)):i=0,h=ei(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:l,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Uu(h),t}function ov(t,i,a){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:P,key:l==null?null:""+l,children:t,containerInfo:i,implementation:a}}function Dp(t){if(!t)return cr;t=t._reactInternals;e:{if(An(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Nn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var a=t.type;if(Nn(a))return ah(t,a,i)}return i}function Ip(t,i,a,l,f,h,E,I,B){return t=Mc(a,l,!0,t,f,h,E,I,B),t.context=Dp(null),a=t.current,l=Cn(),f=vr(a),h=zi(l,f),h.callback=i??null,hr(a,h,f),t.current.lanes=f,ft(t,f,l),On(t,l),t}function Zo(t,i,a,l){var f=i.current,h=Cn(),E=vr(f);return a=Dp(a),i.context===null?i.context=a:i.pendingContext=a,i=zi(h,E),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=hr(f,i,E),t!==null&&(hi(t,f,E,h),Co(t,f,E)),E}function Qo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Np(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<i?a:i}}function Ec(t,i){Np(t,i),(t=t.alternate)&&Np(t,i)}function lv(){return null}var Up=typeof reportError=="function"?reportError:function(t){console.error(t)};function Tc(t){this._internalRoot=t}Jo.prototype.render=Tc.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Zo(t,i,null,null)},Jo.prototype.unmount=Tc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Xr(function(){Zo(null,t,null,null)}),i[Ui]=null}};function Jo(t){this._internalRoot=t}Jo.prototype.unstable_scheduleHydration=function(t){if(t){var i=Pt();t={blockedOn:null,target:t,priority:i};for(var a=0;a<sr.length&&i!==0&&i<sr[a].priority;a++);sr.splice(a,0,t),a===0&&yd(t)}};function wc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function el(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Fp(){}function uv(t,i,a,l,f){if(f){if(typeof l=="function"){var h=l;l=function(){var ae=Qo(E);h.call(ae)}}var E=Ip(i,l,t,0,null,!1,!1,"",Fp);return t._reactRootContainer=E,t[Ui]=E.current,xa(t.nodeType===8?t.parentNode:t),Xr(),E}for(;f=t.lastChild;)t.removeChild(f);if(typeof l=="function"){var I=l;l=function(){var ae=Qo(B);I.call(ae)}}var B=Mc(t,0,!1,null,null,!1,!1,"",Fp);return t._reactRootContainer=B,t[Ui]=B.current,xa(t.nodeType===8?t.parentNode:t),Xr(function(){Zo(i,B,a,l)}),B}function tl(t,i,a,l,f){var h=a._reactRootContainer;if(h){var E=h;if(typeof f=="function"){var I=f;f=function(){var B=Qo(E);I.call(B)}}Zo(i,E,t,f)}else E=uv(a,i,t,f,l);return Qo(E)}bt=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var a=_t(i.pendingLanes);a!==0&&(Dn(i,a|1),On(i,Wt()),(xt&6)===0&&(Ls=Wt()+500,fr()))}break;case 13:Xr(function(){var l=Bi(t,1);if(l!==null){var f=Cn();hi(l,t,1,f)}}),Ec(t,1)}},Ut=function(t){if(t.tag===13){var i=Bi(t,134217728);if(i!==null){var a=Cn();hi(i,t,134217728,a)}Ec(t,134217728)}},ai=function(t){if(t.tag===13){var i=vr(t),a=Bi(t,i);if(a!==null){var l=Cn();hi(a,t,i,l)}Ec(t,i)}},Pt=function(){return dt},oi=function(t,i){var a=dt;try{return dt=t,i()}finally{dt=a}},et=function(t,i,a){switch(i){case"input":if(Bt(t,a),i=a.name,a.type==="radio"&&i!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==t&&l.form===t.form){var f=_o(l);if(!f)throw Error(n(90));kt(l),Bt(l,f)}}}break;case"textarea":dn(t,a);break;case"select":i=a.value,i!=null&&Ct(t,!!a.multiple,i,!1)}},De=gc,ve=Xr;var cv={usingClientEntryPoint:!1,Events:[Ma,_s,_o,he,Re,gc]},Fa={findFiberByHostInstance:Or,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},fv={bundleType:Fa.bundleType,version:Fa.version,rendererPackageName:Fa.rendererPackageName,rendererConfig:Fa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Nr(t),t===null?null:t.stateNode},findFiberByHostInstance:Fa.findFiberByHostInstance||lv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nl.isDisabled&&nl.supportsFiber)try{J=nl.inject(fv),we=nl}catch{}}return kn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cv,kn.createPortal=function(t,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wc(i))throw Error(n(200));return ov(t,i,null,a)},kn.createRoot=function(t,i){if(!wc(t))throw Error(n(299));var a=!1,l="",f=Up;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=Mc(t,1,!1,null,null,a,!1,l,f),t[Ui]=i.current,xa(t.nodeType===8?t.parentNode:t),new Tc(i)},kn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=Nr(i),t=t===null?null:t.stateNode,t},kn.flushSync=function(t){return Xr(t)},kn.hydrate=function(t,i,a){if(!el(i))throw Error(n(200));return tl(null,t,i,!0,a)},kn.hydrateRoot=function(t,i,a){if(!wc(t))throw Error(n(405));var l=a!=null&&a.hydratedSources||null,f=!1,h="",E=Up;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onRecoverableError!==void 0&&(E=a.onRecoverableError)),i=Ip(i,null,t,1,a??null,f,!1,h,E),t[Ui]=i.current,xa(t),l)for(t=0;t<l.length;t++)a=l[t],f=a._getVersion,f=f(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,f]:i.mutableSourceEagerHydrationData.push(a,f);return new Jo(i)},kn.render=function(t,i,a){if(!el(i))throw Error(n(200));return tl(null,t,i,!1,a)},kn.unmountComponentAtNode=function(t){if(!el(t))throw Error(n(40));return t._reactRootContainer?(Xr(function(){tl(null,null,t,!1,function(){t._reactRootContainer=null,t[Ui]=null})}),!0):!1},kn.unstable_batchedUpdates=gc,kn.unstable_renderSubtreeIntoContainer=function(t,i,a,l){if(!el(a))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return tl(t,i,a,!1,l)},kn.version="18.3.1-next-f1338f8080-20240426",kn}var Wp;function xv(){if(Wp)return Cc.exports;Wp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Cc.exports=_v(),Cc.exports}var Xp;function Sv(){if(Xp)return il;Xp=1;var s=xv();return il.createRoot=s.createRoot,il.hydrateRoot=s.hydrateRoot,il}var yv=Sv();const Mv=jm(yv);function Ev({active:s,setActive:e}){const n=["About","Experience","Skills","Projects","Achievements","Contact"],[r,o]=fn.useState(!1);return fn.useEffect(()=>{const u=()=>o(window.scrollY>20);return window.addEventListener("scroll",u),()=>window.removeEventListener("scroll",u)},[]),L.jsx("nav",{style:{position:"fixed",top:0,left:0,right:0,zIndex:100,background:r?"rgba(5, 7, 20, 0.93)":"transparent",backdropFilter:r?"blur(18px)":"none",borderBottom:r?"1px solid rgba(255, 255, 255, 0.07)":"none",transition:"all 0.4s",padding:"0 clamp(1rem, 5vw, 4rem)"},children:L.jsxs("div",{style:{maxWidth:1200,margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"space-between",height:64},children:[L.jsxs("span",{style:{fontFamily:"'Outfit', sans-serif",fontWeight:800,fontSize:22,color:"#a78bfa",letterSpacing:"-0.03em"},children:["AY",L.jsx("span",{style:{color:"#fff"},children:"."})]}),L.jsx("div",{style:{display:"flex",gap:4,flexWrap:"wrap"},children:n.map(u=>L.jsx("a",{href:`#${u.toLowerCase()}`,onClick:()=>e(u),style:{color:s===u?"#a78bfa":"rgba(255, 255, 255, 0.6)",textDecoration:"none",fontSize:14,fontWeight:500,padding:"6px 14px",borderRadius:999,background:s===u?"rgba(167, 139, 250, 0.12)":"transparent",transition:"all 0.2s"},children:u},u))})]})})}function Tv(){const[s,e]=fn.useState(""),n=["Full-Stack Developer","MERN Stack Engineer","AWS Cloud Practitioner","Problem Solver"],r=fn.useRef(0),o=fn.useRef(0),u=fn.useRef(!1);return fn.useEffect(()=>{const c=()=>{const p=n[r.current];if(u.current)o.current--,e(p.slice(0,o.current)),o.current===0&&(u.current=!1,r.current=(r.current+1)%n.length);else if(o.current++,e(p.slice(0,o.current)),o.current===p.length){u.current=!0,setTimeout(c,1800);return}setTimeout(c,u.current?52:78)},d=setTimeout(c,500);return()=>clearTimeout(d)},[]),L.jsxs("section",{id:"about",style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",position:"relative",overflow:"hidden",padding:"80px clamp(1rem, 5vw, 4rem) 0"},children:[L.jsxs("div",{style:{position:"absolute",inset:0,pointerEvents:"none"},children:[L.jsx("div",{style:{position:"absolute",width:700,height:700,borderRadius:"50%",background:"radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)",top:"-15%",left:"-12%",animation:"blob1 12s ease-in-out infinite"}}),L.jsx("div",{style:{position:"absolute",width:500,height:500,borderRadius:"50%",background:"radial-gradient(circle, rgba(99, 102, 241, 0.12) 0%, transparent 70%)",bottom:"-5%",right:"-8%",animation:"blob2 14s ease-in-out infinite"}}),L.jsx("div",{style:{position:"absolute",width:320,height:320,borderRadius:"50%",background:"radial-gradient(circle, rgba(34, 211, 153, 0.08) 0%, transparent 70%)",top:"40%",left:"55%",animation:"blob3 10s ease-in-out infinite"}}),L.jsx("div",{style:{position:"absolute",inset:0,backgroundImage:"linear-gradient(rgba(255, 255, 255, 0.023) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.023) 1px, transparent 1px)",backgroundSize:"64px 64px"}})]}),L.jsxs("div",{className:"hero-container",children:[L.jsxs("div",{className:"hero-left",children:[L.jsx("span",{style:{fontSize:"16px",color:"rgba(255, 255, 255, 0.6)",fontWeight:600,letterSpacing:"0.15em",textTransform:"uppercase",marginBottom:"8px",display:"block"},children:"Hi I am"}),L.jsx("h1",{style:{fontFamily:"'Outfit', sans-serif",fontSize:"clamp(2rem, 4vw, 3.2rem)",fontWeight:800,lineHeight:1.1,margin:"0 0 8px",letterSpacing:"-0.02em",color:"#fff"},children:"Abhishek Yadav"}),L.jsxs("h2",{style:{fontFamily:"'Outfit', sans-serif",fontSize:"clamp(2.5rem, 5.5vw, 4.2rem)",fontWeight:800,color:"#fd6e0a",margin:"0 0 24px",lineHeight:1.05,letterSpacing:"-0.03em",minHeight:"clamp(3rem, 6vw, 4.5rem)"},children:[s,L.jsx("span",{style:{animation:"blink 1s step-end infinite",color:"#fd6e0a"},children:"|"})]}),L.jsxs("div",{className:"hero-social-row",children:[L.jsx("a",{href:"https://linkedin.com/in/abhishek-yadav-6207ab364/",target:"_blank",rel:"noreferrer",className:"hero-social-link",title:"LinkedIn",children:L.jsx("svg",{viewBox:"0 0 24 24",width:"20",height:"20",children:L.jsx("path",{d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"})})}),L.jsx("a",{href:"https://github.com/abhishekyd300",target:"_blank",rel:"noreferrer",className:"hero-social-link",title:"GitHub",children:L.jsx("svg",{viewBox:"0 0 24 24",width:"20",height:"20",children:L.jsx("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})})}),L.jsx("a",{href:"mailto:abhishekyd300@gmail.com",className:"hero-social-link",title:"Email",children:L.jsx("svg",{viewBox:"0 0 24 24",width:"20",height:"20",children:L.jsx("path",{d:"M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l12-9.725v15.438h-24v-15.438l12 9.725z"})})}),L.jsx("a",{href:"https://instagram.com",target:"_blank",rel:"noreferrer",className:"hero-social-link",title:"Instagram",children:L.jsx("svg",{viewBox:"0 0 24 24",width:"20",height:"20",children:L.jsx("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"})})})]}),L.jsxs("div",{className:"hero-btn-row",children:[L.jsx("a",{href:"mailto:abhishekyd300@gmail.com",className:"hero-btn-primary",children:"Hire Me"}),L.jsx("a",{href:"/resume.pdf",target:"_blank",rel:"noreferrer",className:"hero-btn-secondary",children:"Download CV"})]})]}),L.jsx("div",{className:"hero-right",children:L.jsxs("div",{className:"hero-image-wrapper",children:[L.jsx("div",{className:"hero-circle-bg"}),L.jsxs("div",{className:"hero-img-box",children:[L.jsx("img",{src:"/profile.png",alt:"Abhishek Yadav Portrait",className:"hero-portrait-img",onError:c=>{c.target.onerror=null,c.target.style.display="none",c.target.nextSibling.style.display="flex"}}),L.jsx("div",{style:{display:"none",flexDirection:"column",alignItems:"center",gap:6,zIndex:3,position:"relative"},children:L.jsx("span",{style:{fontSize:64},children:"👤"})})]})]})})]})]})}function wv(s=.12){const e=fn.useRef(null),[n,r]=fn.useState(!1);return fn.useEffect(()=>{const o=new IntersectionObserver(([c])=>{c.isIntersecting&&r(!0)},{threshold:s}),u=e.current;return u&&o.observe(u),()=>{u&&o.unobserve(u),o.disconnect()}},[s]),[e,n]}function gn({children:s,delay:e=0,dir:n="up"}){const[r,o]=wv(),u=n==="up"?"translateY(36px)":n==="left"?"translateX(-36px)":"translateX(36px)";return L.jsx("div",{ref:r,style:{opacity:o?1:0,transform:o?"none":u,transition:`opacity 0.65s ease ${e}s, transform 0.65s ease ${e}s`},children:s})}function os({label:s,title:e,color:n="#a78bfa"}){return L.jsxs("div",{style:{textAlign:"center",marginBottom:56},children:[L.jsx("span",{style:{color:n,fontSize:12,letterSpacing:"0.14em",textTransform:"uppercase",fontWeight:700},children:s}),L.jsx("h2",{style:{fontFamily:"'Outfit', sans-serif",fontSize:"clamp(1.9rem, 4vw, 2.9rem)",fontWeight:800,color:"#fff",margin:"8px 0 0",letterSpacing:"-0.03em"},children:e})]})}function Av(){const s=[{icon:"💡",label:"Problem Solver",desc:"300+ DSA problems on LeetCode"},{icon:"🚀",label:"Full-Stack Dev",desc:"MERN stack end-to-end"},{icon:"☁️",label:"Cloud Certified",desc:"AWS Cloud Practitioner"},{icon:"🤝",label:"Team Player",desc:"Public speaking & leadership"}];return L.jsxs("section",{style:{padding:"100px clamp(1rem, 5vw, 4rem)",maxWidth:1200,margin:"0 auto"},children:[L.jsx(gn,{children:L.jsx(os,{label:"Who I Am",title:"About Me",color:"#22d3ee"})}),L.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:40,alignItems:"start"},children:[L.jsx(gn,{dir:"left",children:L.jsxs("div",{style:{background:"rgba(255, 255, 255, 0.03)",border:"1px solid rgba(255, 255, 255, 0.08)",borderRadius:24,padding:"36px 32px"},children:[L.jsx("h3",{style:{fontFamily:"'Outfit', sans-serif",color:"#fff",fontSize:20,fontWeight:700,marginBottom:16,letterSpacing:"-0.02em"},children:"Hey, I'm Abhishek 👋"}),L.jsxs("p",{style:{color:"rgba(255, 255, 255, 0.55)",fontSize:15,lineHeight:1.9,marginBottom:16},children:["I'm a passionate Computer Science undergraduate at"," ",L.jsx("span",{style:{color:"#a78bfa",fontWeight:600},children:"Parul University"})," (2023–2027), focused on building real-world web applications that create impact."]}),L.jsxs("p",{style:{color:"rgba(255, 255, 255, 0.55)",fontSize:15,lineHeight:1.9,marginBottom:16},children:["My expertise lies in the"," ",L.jsx("span",{style:{color:"#34d399",fontWeight:600},children:"MERN stack"})," — from designing RESTful APIs to crafting responsive UIs. I've built projects like"," ",L.jsx("span",{style:{color:"#22c55e",fontWeight:600},children:"Krishi Setu"})," (a farmer marketplace) and"," ",L.jsx("span",{style:{color:"#6366f1",fontWeight:600},children:"Smart CV"})," (an AI resume builder)."]}),L.jsxs("p",{style:{color:"rgba(255, 255, 255, 0.55)",fontSize:15,lineHeight:1.9},children:["I'm ",L.jsx("span",{style:{color:"#FF9900",fontWeight:600},children:"AWS Certified"}),", love competitive programming, and am actively seeking internship or full-time opportunities where I can grow and contribute."]}),L.jsx("div",{style:{display:"flex",gap:10,marginTop:24,flexWrap:"wrap"},children:["Open to Work","React Dev","Node.js","DSA"].map(e=>L.jsx("span",{style:{background:"rgba(167, 139, 250, 0.12)",border:"1px solid rgba(167, 139, 250, 0.2)",color:"#c4b5fd",borderRadius:999,padding:"4px 14px",fontSize:12,fontWeight:600},children:e},e))})]})}),L.jsx(gn,{dir:"right",delay:.1,children:L.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16},children:s.map(e=>L.jsxs("div",{style:{background:"rgba(255, 255, 255, 0.03)",border:"1px solid rgba(255, 255, 255, 0.08)",borderRadius:18,padding:"24px 20px",transition:"transform 0.3s, border-color 0.3s, box-shadow 0.3s"},onMouseEnter:n=>{n.currentTarget.style.transform="translateY(-4px)",n.currentTarget.style.borderColor="rgba(167, 139, 250, 0.3)",n.currentTarget.style.boxShadow="0 14px 40px rgba(124, 58, 237, 0.12)"},onMouseLeave:n=>{n.currentTarget.style.transform="none",n.currentTarget.style.borderColor="rgba(255, 255, 255, 0.08)",n.currentTarget.style.boxShadow="none"},children:[L.jsx("div",{style:{fontSize:30,marginBottom:10},children:e.icon}),L.jsx("div",{style:{color:"#fff",fontSize:14,fontWeight:700,marginBottom:4},children:e.label}),L.jsx("div",{style:{color:"rgba(255, 255, 255, 0.4)",fontSize:12,lineHeight:1.4},children:e.desc})]},e.label))})})]})]})}function bv(){const[s,e]=fn.useState(null),n=[{company:"Synent Technologies",role:"Web Development & Designing Intern",type:"Fellowship Program",date:"June 2026 - Present",location:"Remote / Hybrid",candidateId:"SYN/J2/IP1172",offerLetterDate:"05 June 2026",color:"#fd6e0a",icon:"🏢",pdfUrl:"/Abhishek Yadav_Offer_Letter.pdf",highlights:["Selected for the Web Development and Designing fellowship program at Synent Technologies.","Hands-on exposure to real-world software tasks, enhancing core engineering and UI/UX design concepts.","Participating in end-to-end web application development and collaborating on production workflow tasks."],certified:!0}];return L.jsxs("section",{id:"experience",style:{padding:"80px clamp(1rem, 5vw, 4rem)",maxWidth:1200,margin:"0 auto"},children:[L.jsx(gn,{children:L.jsx(os,{label:"Career Journey",title:"Work Experience",color:"#fd6e0a"})}),L.jsx("div",{style:{display:"flex",flexDirection:"column",gap:24,marginTop:32},children:n.map((r,o)=>L.jsx(gn,{delay:o*.15,children:L.jsxs("div",{style:{background:"rgba(255, 255, 255, 0.03)",border:"1px solid rgba(255, 255, 255, 0.08)",borderRadius:20,padding:"32px clamp(20px, 4vw, 36px)",position:"relative",overflow:"hidden",transition:"all 0.3s ease"},children:[L.jsx("div",{style:{position:"absolute",top:0,left:0,width:4,height:"100%",background:r.color}}),L.jsxs("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"flex-start",gap:16,marginBottom:16},children:[L.jsxs("div",{children:[L.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:6},children:[L.jsx("span",{style:{fontSize:28},children:r.icon}),L.jsx("h3",{style:{fontSize:22,fontWeight:700,color:"#fff",fontFamily:"'Outfit', sans-serif",margin:0},children:r.role})]}),L.jsxs("h4",{style:{fontSize:16,color:r.color,fontWeight:600,margin:"4px 0 0"},children:[r.company," ",L.jsxs("span",{style:{color:"rgba(255,255,255,0.4)",fontWeight:400},children:["• ",r.type]})]})]}),L.jsxs("div",{style:{textAlign:"right",flexShrink:0},children:[L.jsx("span",{style:{display:"inline-block",padding:"6px 14px",borderRadius:20,background:`${r.color}15`,border:`1px solid ${r.color}40`,color:r.color,fontSize:13,fontWeight:600},children:r.date}),L.jsxs("div",{style:{fontSize:12,color:"rgba(255,255,255,0.4)",marginTop:6},children:["Candidate ID: ",r.candidateId]})]})]}),L.jsx("ul",{style:{padding:0,margin:"20px 0 24px",listStyle:"none"},children:r.highlights.map((u,c)=>L.jsxs("li",{style:{display:"flex",gap:10,color:"rgba(255, 255, 255, 0.7)",fontSize:14.5,lineHeight:1.6,marginBottom:10},children:[L.jsx("span",{style:{color:r.color},children:"▸"}),u]},c))}),r.certified&&L.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap",alignItems:"center"},children:[L.jsxs("button",{onClick:()=>e({title:`${r.company} Offer Letter`,url:r.pdfUrl}),style:{display:"inline-flex",alignItems:"center",gap:8,background:"rgba(253, 110, 10, 0.15)",border:"1px solid rgba(253, 110, 10, 0.4)",color:"#fd6e0a",padding:"10px 20px",borderRadius:10,fontSize:13.5,fontWeight:600,cursor:"pointer",transition:"all 0.2s ease"},onMouseEnter:u=>{u.currentTarget.style.background="rgba(253, 110, 10, 0.28)",u.currentTarget.style.transform="translateY(-2px)"},onMouseLeave:u=>{u.currentTarget.style.background="rgba(253, 110, 10, 0.15)",u.currentTarget.style.transform="none"},children:[L.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[L.jsx("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),L.jsx("polyline",{points:"14 2 14 8 20 8"}),L.jsx("line",{x1:"16",y1:"13",x2:"8",y2:"13"}),L.jsx("line",{x1:"16",y1:"17",x2:"8",y2:"17"})]}),"View Offer Letter PDF"]}),L.jsx("span",{style:{fontSize:12,color:"rgba(255, 255, 255, 0.4)"},children:"Verified PDF Document • Issued June 05, 2026"})]})]})},o))}),s&&L.jsx("div",{onClick:()=>e(null),style:{position:"fixed",inset:0,zIndex:1e3,background:"rgba(0, 0, 0, 0.85)",backdropFilter:"blur(8px)",display:"flex",alignItems:"center",justifyContent:"center",padding:20},children:L.jsxs("div",{onClick:r=>r.stopPropagation(),style:{position:"relative",maxWidth:900,width:"100%",height:"88vh",background:"#0b0d1e",border:"1px solid rgba(253, 110, 10, 0.35)",borderRadius:16,overflow:"hidden",display:"flex",flexDirection:"column",boxShadow:"0 25px 70px rgba(0,0,0,0.8)"},children:[L.jsxs("div",{style:{padding:"14px 20px",background:"rgba(255, 255, 255, 0.04)",borderBottom:"1px solid rgba(255, 255, 255, 0.08)",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[L.jsxs("h4",{style:{margin:0,color:"#fff",fontSize:16,fontWeight:700,fontFamily:"'Outfit', sans-serif"},children:["📄 ",s.title]}),L.jsx("div",{style:{display:"flex",gap:12,alignItems:"center"},children:L.jsx("button",{onClick:()=>e(null),style:{background:"none",border:"none",color:"rgba(255, 255, 255, 0.7)",fontSize:22,cursor:"pointer",lineHeight:1},children:"✕"})})]}),L.jsx("iframe",{src:s.url,title:s.title,style:{width:"100%",height:"100%",border:"none",background:"#ffffff"}})]})})]})}function Cv(){const s=[{degree:"B.Tech in Computer Science & Engineering",institution:"Parul University",period:"2023 – 2027",cgpa:"7.85",status:"Ongoing",color:"#a78bfa",glow:"rgba(167, 139, 250, 0.15)",logo:"🎓",highlights:["MERN Stack Development","Data Structures & Algorithms","Cloud Computing","Database Management"]}];return L.jsxs("section",{style:{padding:"0 clamp(1rem, 5vw, 4rem) 100px",maxWidth:1200,margin:"0 auto"},children:[L.jsx(gn,{children:L.jsx(os,{label:"Academic Journey",title:"Education",color:"#f59e0b"})}),L.jsx("div",{style:{display:"flex",flexDirection:"column",gap:20},children:s.map((e,n)=>L.jsx(gn,{delay:n*.1,children:L.jsxs("div",{style:{background:"rgba(255, 255, 255, 0.03)",border:"1px solid rgba(255, 255, 255, 0.08)",borderRadius:24,padding:"36px 36px",position:"relative",overflow:"hidden",transition:"border-color 0.3s, box-shadow 0.3s"},onMouseEnter:r=>{r.currentTarget.style.borderColor=e.color+"50",r.currentTarget.style.boxShadow=`0 20px 60px ${e.glow}`},onMouseLeave:r=>{r.currentTarget.style.borderColor="rgba(255, 255, 255, 0.08)",r.currentTarget.style.boxShadow="none"},children:[L.jsx("div",{style:{position:"absolute",top:-60,right:-60,width:200,height:200,borderRadius:"50%",background:`radial-gradient(circle, ${e.color}12 0%, transparent 70%)`,pointerEvents:"none"}}),L.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:24,alignItems:"flex-start"},children:[L.jsxs("div",{style:{flex:1,minWidth:240},children:[L.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,marginBottom:14},children:[L.jsx("div",{style:{width:52,height:52,borderRadius:14,background:`${e.color}18`,border:`1px solid ${e.color}30`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:26,flexShrink:0},children:e.logo}),L.jsxs("div",{children:[L.jsx("h3",{style:{fontFamily:"'Outfit', sans-serif",color:"#fff",fontSize:19,fontWeight:700,margin:0,letterSpacing:"-0.02em"},children:e.degree}),L.jsx("p",{style:{color:e.color,fontSize:14,fontWeight:600,margin:"3px 0 0"},children:e.institution})]})]}),L.jsxs("div",{style:{display:"flex",gap:10,flexWrap:"wrap",marginBottom:16},children:[L.jsxs("span",{style:{background:"rgba(255, 255, 255, 0.06)",border:"1px solid rgba(255, 255, 255, 0.1)",color:"rgba(255, 255, 255, 0.6)",borderRadius:8,padding:"4px 12px",fontSize:12,fontWeight:500},children:["📅 ",e.period]}),L.jsxs("span",{style:{background:`${e.color}18`,border:`1px solid ${e.color}30`,color:e.color,borderRadius:8,padding:"4px 12px",fontSize:12,fontWeight:700},children:["CGPA: ",e.cgpa]}),L.jsxs("span",{style:{background:"rgba(34, 197, 94, 0.12)",border:"1px solid rgba(34, 197, 94, 0.25)",color:"#22c55e",borderRadius:8,padding:"4px 12px",fontSize:12,fontWeight:700},children:["● ",e.status]})]})]}),L.jsxs("div",{style:{flex:1,minWidth:220},children:[L.jsx("p",{style:{color:"rgba(255, 255, 255, 0.4)",fontSize:11,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",marginBottom:12},children:"Key Subjects"}),L.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:e.highlights.map(r=>L.jsx("span",{style:{background:"rgba(255, 255, 255, 0.04)",border:"1px solid rgba(255, 255, 255, 0.09)",color:"rgba(255, 255, 255, 0.65)",borderRadius:8,padding:"5px 12px",fontSize:12,fontWeight:500},children:r},r))})]})]})]})},e.institution))})]})}var qm={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Yp=Rr.createContext&&Rr.createContext(qm),Rv=["attr","size","title"];function Pv(s,e){if(s==null)return{};var n,r,o=Lv(s,e);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(s);for(r=0;r<u.length;r++)n=u[r],e.indexOf(n)===-1&&{}.propertyIsEnumerable.call(s,n)&&(o[n]=s[n])}return o}function Lv(s,e){if(s==null)return{};var n={};for(var r in s)if({}.hasOwnProperty.call(s,r)){if(e.indexOf(r)!==-1)continue;n[r]=s[r]}return n}function Ul(){return Ul=Object.assign?Object.assign.bind():function(s){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(s[r]=n[r])}return s},Ul.apply(null,arguments)}function jp(s,e){var n=Object.keys(s);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(s);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(s,o).enumerable})),n.push.apply(n,r)}return n}function Fl(s){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?jp(Object(n),!0).forEach(function(r){Dv(s,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(n)):jp(Object(n)).forEach(function(r){Object.defineProperty(s,r,Object.getOwnPropertyDescriptor(n,r))})}return s}function Dv(s,e,n){return(e=Iv(e))in s?Object.defineProperty(s,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):s[e]=n,s}function Iv(s){var e=Nv(s,"string");return typeof e=="symbol"?e:e+""}function Nv(s,e){if(typeof s!="object"||!s)return s;var n=s[Symbol.toPrimitive];if(n!==void 0){var r=n.call(s,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(s)}function $m(s){return s&&s.map((e,n)=>Rr.createElement(e.tag,Fl({key:n},e.attr),$m(e.child)))}function rd(s){return e=>Rr.createElement(Uv,Ul({attr:Fl({},s.attr)},e),$m(s.child))}function Uv(s){var e=n=>{var r=s.attr,o=s.size,u=s.title,c=Pv(s,Rv),d=o||n.size||"1em",p;return n.className&&(p=n.className),s.className&&(p=(p?p+" ":"")+s.className),Rr.createElement("svg",Ul({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,c,{className:p,style:Fl(Fl({color:s.color||n.color},n.style),s.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),u&&Rr.createElement("title",null,u),s.children)};return Yp!==void 0?Rr.createElement(Yp.Consumer,null,n=>e(n)):e(qm)}function Fv(s){return rd({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(s)}function Ov(s){return rd({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M471.1 96C405 96 353.3 137.3 320 174.6 286.7 137.3 235 96 168.9 96 75.8 96 0 167.8 0 256s75.8 160 168.9 160c66.1 0 117.8-41.3 151.1-78.6 33.3 37.3 85 78.6 151.1 78.6 93.1 0 168.9-71.8 168.9-160S564.2 96 471.1 96zM168.9 320c-40.2 0-72.9-28.7-72.9-64s32.7-64 72.9-64c38.2 0 73.4 36.1 94 64-20.4 27.6-55.9 64-94 64zm302.2 0c-38.2 0-73.4-36.1-94-64 20.4-27.6 55.9-64 94-64 40.2 0 72.9 28.7 72.9 64s-32.7 64-72.9 64z"},child:[]}]})(s)}function kv(s){return rd({attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M9.80307 3.0431C10.0554 3.15525 10.1691 3.45073 10.0569 3.70307L6.05691 12.7031C5.94475 12.9554 5.64927 13.0691 5.39693 12.9569C5.14459 12.8448 5.03094 12.5493 5.14309 12.2969L9.14309 3.29693C9.25525 3.04459 9.55073 2.93094 9.80307 3.0431ZM4.33218 5.3763C4.53857 5.55976 4.55716 5.87579 4.3737 6.08218L2.66898 8L4.3737 9.91782C4.55716 10.1242 4.53857 10.4402 4.33218 10.6237C4.12579 10.8072 3.80975 10.7886 3.6263 10.5822L1.6263 8.33218C1.4579 8.14274 1.4579 7.85726 1.6263 7.66782L3.6263 5.41782C3.80975 5.21143 4.12579 5.19284 4.33218 5.3763ZM11.6678 5.3763C11.8742 5.19284 12.1902 5.21143 12.3737 5.41782L14.3737 7.66782C14.5421 7.85726 14.5421 8.14274 14.3737 8.33218L12.3737 10.5822C12.1902 10.7886 11.8742 10.8072 11.6678 10.6237C11.4614 10.4402 11.4428 10.1242 11.6263 9.91782L13.331 8L11.6263 6.08218C11.4428 5.87579 11.4614 5.55976 11.6678 5.3763Z"},child:[]}]})(s)}const Bv={"C++":()=>L.jsxs("svg",{viewBox:"0 0 128 128",width:"34",height:"34",children:[L.jsx("path",{fill:"#00599C",d:"M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.8-2.1-2.4-2.7z"}),L.jsx("path",{fill:"#004482",d:"M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z"}),L.jsx("path",{fill:"#659AD2",d:"M92 67.4v-5.8l-3.4 2v-4l3.4-2v-5.8l5.2 3v3.8l3.3-2v4l-3.3 2v3.8zm17 0v-5.8l-3.4 2v-4l3.4-2v-5.8l5.2 3v3.8l3.3-2v4l-3.3 2v3.8zM64 88c-13.3 0-24-10.7-24-24s10.7-24 24-24c7.2 0 13.8 3.2 18.3 8.2l-9.6 5.5C50.7 48.2 41 57 41 64s9.7 15.8 20.7 15.8c4.9 0 9.5-1.7 13.1-4.7l9.6 5.5C79.8 84.8 72.2 88 64 88z"})]}),JavaScript:()=>L.jsxs("svg",{viewBox:"0 0 128 128",width:"34",height:"34",children:[L.jsx("rect",{width:"128",height:"128",rx:"8",fill:"#F0DB4F"}),L.jsx("path",{fill:"#323330",d:"M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.963-8.548zM75.495 55.929H64.819l-.001 30.094c0 6.41.334 12.228-.727 14.15-.978 2.881-3.451 3.561-5.62 3.34-1.935-.387-3.874-1.961-4.762-3.565-.338-.612-.594-1.141-.752-1.506l-9.154 5.633c1.407 3.072 3.488 5.482 6.063 7.064 4.102 2.451 9.685 3.031 15.617 1.58 3.823-.981 7.312-3.244 9.394-6.547 2.842-4.48 2.572-10.006 2.561-16.171l.029-34.072z"})]}),React:()=>L.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"-11.5 -10.23174 23 20.46348",width:"34",height:"34",children:[L.jsx("title",{children:"React Logo"}),L.jsx("circle",{cx:"0",cy:"0",r:"2.05",fill:"#61DAFB"}),L.jsxs("g",{stroke:"#61DAFB",strokeWidth:"1",fill:"none",children:[L.jsx("ellipse",{rx:"11",ry:"4.2"}),L.jsx("ellipse",{rx:"11",ry:"4.2",transform:"rotate(60)"}),L.jsx("ellipse",{rx:"11",ry:"4.2",transform:"rotate(120)"})]})]}),"Node.js":()=>L.jsxs("svg",{viewBox:"0 0 128 128",width:"34",height:"34",children:[L.jsx("path",{fill:"#83CD29",d:"M112.771 30.334L68.781 4.996c-2.312-1.387-5.25-1.387-7.562 0L17.229 30.334c-2.312 1.355-3.781 3.824-3.781 6.542v50.25c0 2.719 1.469 5.188 3.781 6.542l43.99 25.021c2.312 1.355 5.25 1.355 7.562 0l43.99-25.021c2.312-1.354 3.781-3.823 3.781-6.542v-50.25c0-2.718-1.469-5.187-3.781-6.542z"}),L.jsx("path",{fill:"#404137",d:"M94.661 87.234c0 1.562-.906 2.968-2.312 3.666L64.981 106.5c-.594.312-1.281.468-1.969.468-.687 0-1.375-.156-2-.468L34.042 90.9c-1.406-.698-2.312-2.104-2.312-3.666V56.931c0-1.562.906-2.968 2.312-3.666l27.969-15.875c.594-.344 1.313-.531 2-.531s1.406.187 2 .531l27.969 15.875c1.406.698 2.312 2.104 2.312 3.666l-.631 30.303z"}),L.jsx("path",{fill:"#35BF5C",d:"M79.434 55.489l-14.453-8.271v16.543l14.453 8.271z"}),L.jsx("path",{fill:"#fff",d:"M48.566 55.489l14.415 8.272v16.543l-14.415-8.271z"}),L.jsx("path",{fill:"#83CD29",d:"M63.019 63.761l14.415-8.272-14.415-8.271-14.453 8.271z"})]}),"Express.js":()=>L.jsxs("svg",{viewBox:"0 0 128 128",width:"34",height:"34",children:[L.jsx("rect",{width:"128",height:"128",rx:"8",fill:"#1a1a1a"}),L.jsx("path",{fill:"#fff",d:"M126.67 98.44c-4.56 1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45C89 76 81.85 85.2 75.14 94.77c-2.4 3.42-4.92 4.91-9.4 3.7l26.92-36.13L67.6 29.71c4.31-.84 7.29-.41 10.21 3.45 6.06 8.07 12.58 15.78 19.23 24l18.87-27.17c4.22-1.15 7.41-.46 9.78 3.38L107 63l19.67 35.44zM1.33 61.74c.72-3.61 1.2-7.29 2.2-10.83 6-21.43 30.6-30.34 47.5-17.06C60.93 41.64 63.39 52.62 62.9 65H7.1c-.84 22.21 15.15 35.62 35.53 28.78 7.15-2.4 11.36-8 13.49-15 1-3.06 2.69-4 5.7-3.13-1.38 8.55-5.59 15.35-13.66 19.58-12.7 6.7-29.4 3.37-38.3-7.45-4.83-5.89-7.06-12.91-8.53-20.59-.08-.4-.44-.75-.68-1.12-.48-.48-.67-.86-.32-4.33zm5.9-2.54H57.8c-.41-16.25-10.95-26.87-25.43-26.54C17.42 32.94 7.03 43.51 7.23 59.2z"})]}),HTML:()=>L.jsxs("svg",{viewBox:"0 0 128 128",width:"34",height:"34",children:[L.jsx("path",{fill:"#E44D26",d:"M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"}),L.jsx("path",{fill:"#F16529",d:"M64 116.8l36.378-10.086 8.559-95.878H64z"}),L.jsx("path",{fill:"#EBEBEB",d:"M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"}),L.jsx("path",{fill:"#fff",d:"M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.336-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"})]}),CSS:()=>L.jsxs("svg",{viewBox:"0 0 128 128",width:"34",height:"34",children:[L.jsx("path",{fill:"#1572B6",d:"M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"}),L.jsx("path",{fill:"#33A9DC",d:"M64.001 117.062l36.559-10.136 8.601-96.354H64.001v106.49z"}),L.jsx("path",{fill:"#fff",d:"M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95V51.429z"}),L.jsx("path",{fill:"#EBEBEB",d:"M64.083 87.349l-.061.018-15.402-4.158-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018v-14.391z"}),L.jsx("path",{fill:"#fff",d:"M81.127 64.675l-1.666 18.522-15.426 4.164v14.391l28.354-7.858.208-2.337 2.406-26.882H81.127z"}),L.jsx("path",{fill:"#EBEBEB",d:"M64.048 23.435v13.831H30.64l-.277-3.108-.63-7.012-.331-3.711h34.646zm-.047 27.994H47.871l1.264 14.163h14.866V51.429z"})]}),MongoDB:()=>L.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 128 128",width:"34",height:"34",children:L.jsx("path",{fill:"#47A248",d:"M64.6 7c-.5 1.7-1.3 3.3-2.4 4.7-6.5 8.2-11.1 18-13.3 28.2-2.1 10.4-1.4 21.2 2 31.2 3.5 10.2 9.9 19.2 18.3 25.9.7-14.8 2.2-29.6 1.5-44.4-.3-7.2-1.5-14.3-3.6-21.2-1-3.3-2.3-6.6-2.5-10-.2-4.8 1.1-9.7 0-14.4z"})}),MySQL:()=>L.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 128 128",width:"34",height:"34",children:[L.jsx("path",{fill:"#00758F",d:"M23 80c9-25 26-42 48-42 18 0 30 12 34 31-7-11-17-17-29-17-18 0-33 11-45 28H23z"}),L.jsx("path",{fill:"#F29111",d:"M84 53c7 2 13 8 16 16-4-4-8-6-13-7-5-1-10 0-15 2 3-6 7-10 12-11z"})]}),"VS Code":()=>L.jsx(kv,{size:34,color:"#007ACC"}),GitHub:()=>L.jsx(Fv,{size:34,color:"#ffffff"}),AWS:()=>L.jsxs("svg",{viewBox:"0 0 128 128",width:"34",height:"34",children:[L.jsx("path",{fill:"#FF9900",d:"M39.262 46.316c0 1.561.168 2.823.463 3.748.328.924.757 1.946 1.353 3.044.214.34.3.68.3.988 0 .432-.257.864-.804 1.296l-2.665 1.775c-.38.254-.761.38-1.107.38-.43 0-.86-.213-1.29-.607a13.295 13.295 0 0 1-1.548-2.02 33.267 33.267 0 0 1-1.328-2.533c-3.34 3.94-7.535 5.91-12.59 5.91-3.598 0-6.463-1.03-8.567-3.09-2.104-2.06-3.175-4.806-3.175-8.237 0-3.643 1.285-6.604 3.888-8.843 2.603-2.24 6.066-3.36 10.459-3.36 1.45 0 2.942.118 4.518.322 1.576.204 3.194.523 4.9.9v-3.11c0-3.233-.677-5.49-2.003-6.8-1.36-1.31-3.655-1.947-6.92-1.947-1.49 0-3.012.185-4.578.588-1.566.402-3.09.897-4.572 1.52-.685.307-1.195.481-1.49.558-.299.076-.52.118-.69.118-.601 0-.9-.432-.9-1.323V23.13c0-.685.085-1.197.296-1.5.213-.3.601-.6 1.197-.9 1.49-.771 3.285-1.416 5.389-1.946a26.208 26.208 0 0 1 6.755-.814c5.144 0 8.907 1.17 11.32 3.51 2.383 2.34 3.591 5.887 3.591 10.64v14.196zm-17.392 6.52c1.408 0 2.858-.254 4.395-.763 1.537-.51 2.899-1.435 4.055-2.695.685-.815 1.197-1.72 1.447-2.737.25-1.02.42-2.253.42-3.7v-1.78a36.003 36.003 0 0 0-3.917-.73 32.131 32.131 0 0 0-4.013-.254c-2.86 0-4.95.558-6.357 1.706-1.408 1.147-2.1 2.758-2.1 4.874 0 1.987.509 3.464 1.554 4.483 1.02 1.046 2.515 1.596 4.516 1.596zm34.19 4.609c-.76 0-1.27-.127-1.6-.407-.34-.254-.64-.855-.898-1.666L43.4 19.327c-.258-.847-.387-1.382-.387-1.664 0-.669.332-1.028.998-1.028h4.072c.806 0 1.333.127 1.63.407.343.254.601.855.857 1.664l8.695 34.28 8.08-34.28c.212-.847.47-1.41.81-1.664.34-.255.905-.407 1.68-.407h3.33c.804 0 1.332.127 1.673.407.338.254.637.855.847 1.664l8.183 34.71 8.951-34.71c.26-.847.518-1.41.858-1.664.34-.255.87-.407 1.63-.407h3.87c.665 0 1.025.334 1.025 1.028 0 .203-.04.407-.082.637-.04.226-.124.558-.295 1.027L97.419 55.47c-.257.848-.513 1.41-.854 1.665-.34.25-.867.405-1.622.405h-3.575c-.804 0-1.333-.127-1.675-.405-.337-.279-.636-.855-.845-1.697l-8.048-33.547-7.993 33.52c-.214.847-.51 1.414-.847 1.697-.338.278-.895.405-1.676.405h-3.572zm59.186 1.24c-2.19 0-4.386-.254-6.528-.787-2.147-.533-3.806-1.1-4.933-1.734-.685-.382-1.15-.805-1.32-1.199a3.026 3.026 0 0 1-.25-1.198v-2.01c0-.892.335-1.324.962-1.324.255 0 .51.042.764.128.256.085.638.254 1.047.424 1.42.636 2.98 1.143 4.617 1.487 1.675.343 3.313.514 4.992.514 2.66 0 4.73-.457 6.181-1.374 1.448-.916 2.188-2.236 2.188-3.93 0-1.16-.383-2.12-1.15-2.91-.764-.788-2.213-1.499-4.313-2.17l-6.196-1.92c-3.132-1-5.456-2.462-6.902-4.384-1.443-1.898-2.18-4.01-2.18-6.266 0-1.806.383-3.396 1.15-4.767.764-1.37 1.8-2.588 3.1-3.556 1.295-.997 2.77-1.73 4.478-2.24a18.854 18.854 0 0 1 5.565-.764c.976 0 1.993.052 2.977.178.98.13 1.886.306 2.787.51.857.215 1.672.465 2.448.718.775.25 1.384.51 1.82.762.601.345 1.042.69 1.294 1.069.253.35.38.814.38 1.37v1.86c0 .893-.336 1.35-.97 1.35-.34 0-.888-.172-1.594-.513-2.404-1.07-5.107-1.605-8.105-1.605-2.404 0-4.31.395-5.67 1.218-1.355.814-2.05 2.01-2.05 3.643 0 1.16.42 2.148 1.258 2.94.84.793 2.4 1.582 4.62 2.302l6.071 1.922c3.088.979 5.33 2.35 6.688 4.118 1.356 1.762 2.02 3.77 2.02 5.99 0 1.856-.383 3.523-1.108 4.97-.764 1.452-1.8 2.732-3.138 3.754-1.342 1.05-2.94 1.82-4.78 2.363a20.747 20.747 0 0 1-6.111.856z"}),L.jsx("path",{fill:"#FF9900",d:"M112.671 79.703c-13.559 10.013-33.256 15.334-50.188 15.334-23.747 0-45.14-8.763-61.308-23.34-1.27-1.149-.13-2.717 1.395-1.82C19.378 81.543 41.063 88.014 63.52 88.014c15.636 0 32.837-3.243 48.672-9.97 2.395-1.02 4.392 1.57 2.479 3.66zm5.772-6.588c-1.742-2.23-11.52-1.054-15.927-.53-1.334.165-1.541-1.002-.339-1.846 7.79-5.492 20.594-3.906 22.077-2.066 1.485 1.852-.388 14.69-7.708 20.814-1.12.947-2.196.442-1.7-.802 1.647-4.112 5.34-13.34 3.597-15.57z"})]}),DevOps:()=>L.jsx(Ov,{size:34,color:"#0078D7"}),Postman:()=>L.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 128 128",width:"34",height:"34",children:[L.jsx("circle",{cx:"64",cy:"64",r:"56",fill:"#FF6C37"}),L.jsx("path",{fill:"#fff",d:"M86.5 41.5 56.7 71.3a8 8 0 1 1-5.7-5.7l29.8-29.8a4 4 0 1 1 5.7 5.7z"})]})},zv=[{cat:"Languages",color:"#818cf8",bg:"rgba(129,140,248,0.1)",border:"rgba(129,140,248,0.25)",items:["C++","JavaScript"]},{cat:"Technologies",color:"#34d399",bg:"rgba(52,211,153,0.1)",border:"rgba(52,211,153,0.25)",items:["HTML","CSS","React","Node.js","Express.js"]},{cat:"Database",color:"#fb923c",bg:"rgba(251,146,60,0.1)",border:"rgba(251,146,60,0.25)",items:["MongoDB","MySQL"]},{cat:"Tools",color:"#38bdf8",bg:"rgba(56,189,248,0.1)",border:"rgba(56,189,248,0.25)",items:["VS Code","GitHub","AWS","DevOps","Postman"]}];function Vv({item:s,color:e,bg:n,border:r}){const[o,u]=fn.useState(!1),c=Bv[s];return L.jsxs("div",{onMouseEnter:()=>u(!0),onMouseLeave:()=>u(!1),style:{display:"flex",flexDirection:"column",alignItems:"center",gap:10,background:o?n:"rgba(255, 255, 255, 0.03)",border:`1px solid ${o?r:"rgba(255, 255, 255, 0.07)"}`,borderRadius:16,padding:"20px 16px",transition:"all 0.28s ease",transform:o?"translateY(-6px)":"none",boxShadow:o?`0 16px 40px ${e}22`:"none",cursor:"default",minWidth:90},children:[L.jsx("div",{style:{width:34,height:34,display:"flex",alignItems:"center",justifyContent:"center",filter:o?"none":"grayscale(20%) brightness(0.8)",transition:"filter 0.3s"},children:c?L.jsx(c,{}):L.jsx("span",{style:{fontSize:26},children:"💻"})}),L.jsx("span",{style:{color:o?"#fff":"rgba(255, 255, 255, 0.5)",fontSize:11,fontWeight:600,textAlign:"center",letterSpacing:"0.02em",transition:"color 0.25s",whiteSpace:"nowrap"},children:s})]})}function Hv(){return L.jsxs("section",{id:"skills",style:{padding:"100px clamp(1rem, 5vw, 4rem)",maxWidth:1200,margin:"0 auto"},children:[L.jsx(gn,{children:L.jsx(os,{label:"Expertise",title:"Technical Skills"})}),L.jsx("div",{style:{display:"flex",flexDirection:"column",gap:40},children:zv.map((s,e)=>L.jsxs(gn,{delay:e*.08,children:[L.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:16},children:[L.jsx("div",{style:{width:3,height:22,borderRadius:4,background:s.color,flexShrink:0}}),L.jsx("span",{style:{color:s.color,fontSize:12,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase"},children:s.cat})]}),L.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:14},children:s.items.map((n,r)=>L.jsx(gn,{delay:e*.07+r*.06,children:L.jsx(Vv,{item:n,color:s.color,bg:s.bg,border:s.border})},n))})]},s.cat))})]})}const Gv=[{title:"Krishi Setu",subtitle:"Farmer-to-Consumer Marketplace",tags:["MERN","JWT","MongoDB","REST API"],color:"#22c55e",icon:"🌾",liveUrl:"https://krishi-setu-wine.vercel.app/",githubUrl:"https://github.com/abhishekyd300",bullets:["Full-stack F2C marketplace eliminating middlemen","RESTful APIs for auth, crop mgmt & order processing","JWT-based auth with role-based access control","Responsive dashboards for farmers & buyers"]},{title:"Smart CV",subtitle:"AI Resume Builder",tags:["MERN","GEMINI API","AI/LLM","PDF Export"],color:"#6366f1",icon:"🤖",liveUrl:"https://smartaicv.vercel.app/",githubUrl:"https://github.com/abhishekyd300",bullets:["AI-powered resume builder using GEMINI API","Dynamic content generation via AI prompts","PDF export/download for generated resumes","Template selection with live preview"]},{title:"ContestHub",subtitle:"Coding Contest & Assessment Platform",tags:["React","Node.js","Monaco Editor","AI Generation"],color:"#f59e0b",icon:"⚡",liveUrl:"https://contest-hub-mu.vercel.app/",githubUrl:"https://github.com/abhishekyd300/ContestHub",bullets:["Multi-language code editor supporting 15+ languages","Timed contests with real-time test execution","Live leaderboards and instant scoring system","Admin tools with AI-powered question generation"]}];function Wv(){return L.jsxs("section",{id:"projects",style:{padding:"0 clamp(1rem, 5vw, 4rem) 100px",maxWidth:1200,margin:"0 auto"},children:[L.jsx(gn,{children:L.jsx(os,{label:"Portfolio",title:"Featured Projects",color:"#22d3ee"})}),L.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(340px, 1fr))",gap:24},children:Gv.map((s,e)=>L.jsx(gn,{delay:e*.15,children:L.jsxs("div",{style:{background:"rgba(255, 255, 255, 0.04)",border:"1px solid rgba(255, 255, 255, 0.09)",borderRadius:24,padding:"36px 32px",height:"100%",boxSizing:"border-box",transition:"transform 0.35s, box-shadow 0.35s, border-color 0.35s",position:"relative",overflow:"hidden"},onMouseEnter:n=>{n.currentTarget.style.transform="translateY(-8px)",n.currentTarget.style.boxShadow=`0 30px 80px ${s.color}22`,n.currentTarget.style.borderColor=s.color+"55"},onMouseLeave:n=>{n.currentTarget.style.transform="none",n.currentTarget.style.boxShadow="none",n.currentTarget.style.borderColor="rgba(255, 255, 255, 0.09)"},children:[L.jsx("div",{style:{position:"absolute",top:-40,right:-40,width:160,height:160,borderRadius:"50%",background:`radial-gradient(circle, ${s.color}15 0%, transparent 70%)`,pointerEvents:"none"}}),L.jsx("div",{style:{fontSize:44,marginBottom:16},children:s.icon}),L.jsx("h3",{style:{fontFamily:"'Outfit', sans-serif",color:"#fff",fontSize:22,fontWeight:700,margin:"0 0 4px",letterSpacing:"-0.02em"},children:s.title}),L.jsx("p",{style:{color:s.color,fontSize:13,fontWeight:600,margin:"0 0 20px"},children:s.subtitle}),L.jsx("ul",{style:{padding:0,margin:"0 0 24px",listStyle:"none"},children:s.bullets.map((n,r)=>L.jsxs("li",{style:{display:"flex",gap:10,color:"rgba(255, 255, 255, 0.58)",fontSize:13.5,lineHeight:1.65,marginBottom:8},children:[L.jsx("span",{style:{color:s.color,flexShrink:0,marginTop:3},children:"▸"}),n]},r))}),L.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6,marginBottom:24},children:s.tags.map(n=>L.jsx("span",{style:{background:`${s.color}18`,border:`1px solid ${s.color}35`,color:s.color,borderRadius:6,padding:"4px 10px",fontSize:12,fontWeight:600},children:n},n))}),L.jsxs("div",{style:{display:"flex",gap:10,flexWrap:"wrap"},children:[L.jsxs("a",{href:s.liveUrl,target:"_blank",rel:"noreferrer",style:{flex:1,minWidth:110,display:"flex",alignItems:"center",justifyContent:"center",gap:7,background:s.color,color:"#000",textDecoration:"none",padding:"10px 16px",borderRadius:10,fontSize:13,fontWeight:700,letterSpacing:"0.01em",transition:"transform 0.2s, box-shadow 0.2s",boxShadow:`0 4px 20px ${s.color}40`},onMouseEnter:n=>{n.currentTarget.style.transform="translateY(-2px)",n.currentTarget.style.boxShadow=`0 8px 28px ${s.color}65`},onMouseLeave:n=>{n.currentTarget.style.transform="none",n.currentTarget.style.boxShadow=`0 4px 20px ${s.color}40`},children:[L.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[L.jsx("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),L.jsx("polyline",{points:"15 3 21 3 21 9"}),L.jsx("line",{x1:"10",y1:"14",x2:"21",y2:"3"})]}),"Live Demo"]}),L.jsxs("a",{href:s.githubUrl,target:"_blank",rel:"noreferrer",style:{flex:1,minWidth:110,display:"flex",alignItems:"center",justifyContent:"center",gap:7,background:"rgba(255, 255, 255, 0.07)",border:"1px solid rgba(255, 255, 255, 0.15)",color:"#fff",textDecoration:"none",padding:"10px 16px",borderRadius:10,fontSize:13,fontWeight:700,transition:"background 0.2s, border-color 0.2s, transform 0.2s"},onMouseEnter:n=>{n.currentTarget.style.background="rgba(255, 255, 255, 0.13)",n.currentTarget.style.borderColor="rgba(255, 255, 255, 0.28)",n.currentTarget.style.transform="translateY(-2px)"},onMouseLeave:n=>{n.currentTarget.style.background="rgba(255, 255, 255, 0.07)",n.currentTarget.style.borderColor="rgba(255, 255, 255, 0.15)",n.currentTarget.style.transform="none"},children:[L.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"currentColor",children:L.jsx("path",{d:"M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"})}),"GitHub"]})]})]})},s.title))})]})}function Xv({cert:s}){const[e,n]=fn.useState(!1),[r,o]=fn.useState(!1),u=s.badge&&!r?s.badge:null;return L.jsxs("div",{onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),style:{background:e?"rgba(255, 255, 255, 0.055)":"rgba(255, 255, 255, 0.03)",border:`1px solid ${e?s.color+"50":"rgba(255, 255, 255, 0.08)"}`,borderRadius:20,padding:"0",overflow:"hidden",transition:"all 0.32s ease",transform:e?"translateY(-6px)":"none",boxShadow:e?`0 20px 56px ${s.glow}`:"none",display:"flex",flexDirection:"column"},children:[L.jsx("div",{style:{position:"relative",width:"100%",paddingBottom:"65%",background:u?"rgba(0, 0, 0, 0.3)":`linear-gradient(135deg, ${s.color}12, rgba(255, 255, 255, 0.03))`,overflow:"hidden",flexShrink:0},children:u?L.jsx("img",{src:u,alt:s.name,onError:()=>o(!0),style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"contain",padding:"16px"}}):L.jsx("div",{style:{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:L.jsx("span",{style:{fontSize:42},children:s.fallback})})}),L.jsxs("div",{style:{padding:"18px 20px 20px"},children:[L.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:8},children:[L.jsx("span",{style:{background:`${s.color}20`,color:s.color,fontSize:10,fontWeight:800,padding:"2px 10px",borderRadius:5,letterSpacing:"0.07em"},children:s.tag}),L.jsx("div",{style:{width:7,height:7,borderRadius:"50%",background:s.color,boxShadow:e?`0 0 10px ${s.color}`:"none",transition:"box-shadow 0.3s"}})]}),L.jsx("p",{style:{color:e?"#fff":"rgba(255, 255, 255, 0.82)",fontSize:14,fontWeight:700,lineHeight:1.35,margin:"0 0 4px",transition:"color 0.25s",fontFamily:"'Outfit', sans-serif"},children:s.name}),L.jsx("p",{style:{color:"rgba(255, 255, 255, 0.32)",fontSize:12,margin:0},children:s.issuer})]})]})}const Yv=[{value:"300+",label:"DSA Problems Solved",icon:"⚡"},{value:"63",label:"Day LeetCode Streak",icon:"🔥"},{value:"100",label:"Days Badge Earned",icon:"🏅"},{value:"7.85",label:"CGPA at Parul University",icon:"🎓"}],jv=[{id:1,name:"AWS Certified Cloud Practitioner",issuer:"Amazon Web Services",tag:"AWS",badge:"/aws-practitioner.png",fallback:"☁️",color:"#FF9900",glow:"rgba(255,153,0,0.25)"},{id:2,name:"AWS Cloud Foundation",issuer:"Amazon Web Services",tag:"AWS",badge:"/aws-cloud-foundation.png",fallback:"🏗️",color:"#FF9900",glow:"rgba(255,153,0,0.25)"},{id:3,name:"AI Intelligence Fundamentals",issuer:"AI Certification Body",tag:"AI",badge:"/aifundamentals.png",fallback:"🧠",color:"#60a5fa",glow:"rgba(96,165,250,0.25)"},{id:4,name:"Computer Networking",issuer:"NPTEL",tag:"NPTEL",badge:"/computer-network.png",fallback:"🌐",color:"#a78bfa",glow:"rgba(167,139,250,0.25)"}];function qv(){return L.jsx("section",{id:"achievements",style:{padding:"0 clamp(1rem, 5vw, 4rem) 100px"},children:L.jsxs("div",{style:{maxWidth:1200,margin:"0 auto"},children:[L.jsx(gn,{children:L.jsx(os,{label:"Track Record",title:"Achievements",color:"#f59e0b"})}),L.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(160px, 1fr))",gap:18,marginBottom:80},children:Yv.map((s,e)=>L.jsx(gn,{delay:e*.1,children:L.jsxs("div",{style:{background:"rgba(245, 158, 11, 0.06)",border:"1px solid rgba(245, 158, 11, 0.18)",borderRadius:20,padding:"30px 16px",textAlign:"center",transition:"transform 0.3s, box-shadow 0.3s"},onMouseEnter:n=>{n.currentTarget.style.transform="translateY(-5px)",n.currentTarget.style.boxShadow="0 20px 50px rgba(245, 158, 11, 0.15)"},onMouseLeave:n=>{n.currentTarget.style.transform="none",n.currentTarget.style.boxShadow="none"},children:[L.jsx("div",{style:{fontSize:28,marginBottom:10},children:s.icon}),L.jsx("div",{style:{fontFamily:"'Outfit', sans-serif",fontSize:36,fontWeight:800,color:"#fbbf24",letterSpacing:"-0.04em"},children:s.value}),L.jsx("div",{style:{color:"rgba(255, 255, 255, 0.42)",fontSize:12,marginTop:5,lineHeight:1.4},children:s.label})]})},s.label))}),L.jsx(gn,{children:L.jsxs("div",{style:{textAlign:"center",marginBottom:40},children:[L.jsx("span",{style:{color:"#a78bfa",fontSize:12,letterSpacing:"0.14em",textTransform:"uppercase",fontWeight:700},children:"Credentials"}),L.jsx("h3",{style:{fontFamily:"'Outfit', sans-serif",color:"#fff",fontSize:28,fontWeight:800,margin:"8px 0 4px",letterSpacing:"-0.02em"},children:"Certifications"}),L.jsx("p",{style:{color:"rgba(255, 255, 255, 0.35)",fontSize:13},children:"My professional credentials and certifications"})]})}),L.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(240px, 1fr))",gap:20},children:jv.map((s,e)=>L.jsx(gn,{delay:e*.09,children:L.jsx(Xv,{cert:s})},s.id))})]})})}function $v(){const s=[{label:"abhishekyd300@gmail.com",href:"mailto:abhishekyd300@gmail.com",icon:"📧"},{label:"linkedin.com/in/abhishek-yadav-6207ab364",href:"https://linkedin.com/in/abhishek-yadav-6207ab364/",icon:"💼"},{label:"github.com/abhishekyd300",href:"https://github.com/abhishekyd300",icon:"🐙"}];return L.jsx("section",{id:"contact",style:{padding:"0 clamp(1rem, 5vw, 4rem) 120px",maxWidth:680,margin:"0 auto",textAlign:"center"},children:L.jsxs(gn,{children:[L.jsx(os,{label:"Let's Connect",title:"Get In Touch"}),L.jsx("p",{style:{color:"rgba(255, 255, 255, 0.42)",fontSize:15,lineHeight:1.9,marginBottom:44,marginTop:-28},children:"Actively looking for internship and full-time opportunities. Whether you have a role, a project, or just want to say hi — my inbox is always open."}),L.jsx("div",{style:{display:"flex",flexDirection:"column",gap:14,alignItems:"center"},children:s.map(e=>L.jsxs("a",{href:e.href,target:"_blank",rel:"noreferrer",style:{display:"flex",alignItems:"center",gap:14,background:"rgba(255, 255, 255, 0.04)",border:"1px solid rgba(255, 255, 255, 0.09)",borderRadius:14,padding:"13px 22px",color:"rgba(255, 255, 255, 0.62)",textDecoration:"none",fontSize:14,fontWeight:500,width:"100%",maxWidth:440,transition:"all 0.25s"},onMouseEnter:n=>{n.currentTarget.style.background="rgba(167, 139, 250, 0.09)",n.currentTarget.style.borderColor="rgba(167, 139, 250, 0.3)",n.currentTarget.style.color="#fff",n.currentTarget.style.transform="translateY(-2px)"},onMouseLeave:n=>{n.currentTarget.style.background="rgba(255, 255, 255, 0.04)",n.currentTarget.style.borderColor="rgba(255, 255, 255, 0.09)",n.currentTarget.style.color="rgba(255, 255, 255, 0.62)",n.currentTarget.style.transform="none"},children:[L.jsx("span",{style:{fontSize:20},children:e.icon}),L.jsx("span",{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:e.label})]},e.href))})]})})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const sd="185",Kv=0,qp=1,Zv=2,Rl=1,Qv=2,Xa=3,Pr=0,zn=1,qi=2,Ki=0,js=1,ff=2,$p=3,Kp=4,Jv=5,es=100,e_=101,t_=102,n_=103,i_=104,r_=200,s_=201,a_=202,o_=203,df=204,hf=205,l_=206,u_=207,c_=208,f_=209,d_=210,h_=211,p_=212,m_=213,g_=214,pf=0,mf=1,gf=2,Ks=3,vf=4,_f=5,xf=6,Sf=7,Km=0,v_=1,__=2,Pi=0,Zm=1,Qm=2,Jm=3,e0=4,t0=5,n0=6,i0=7,r0=300,rs=301,Zs=302,Lc=303,Dc=304,Wl=306,yf=1e3,$i=1001,Mf=1002,vn=1003,x_=1004,rl=1005,wn=1006,Ic=1007,ns=1008,ri=1009,s0=1010,a0=1011,ja=1012,ad=1013,Di=1014,Ci=1015,Ji=1016,od=1017,ld=1018,qa=1020,o0=35902,l0=35899,u0=1021,c0=1022,_i=1023,er=1026,is=1027,f0=1028,ud=1029,ss=1030,cd=1031,fd=1033,Pl=33776,Ll=33777,Dl=33778,Il=33779,Ef=35840,Tf=35841,wf=35842,Af=35843,bf=36196,Cf=37492,Rf=37496,Pf=37488,Lf=37489,Ol=37490,Df=37491,If=37808,Nf=37809,Uf=37810,Ff=37811,Of=37812,kf=37813,Bf=37814,zf=37815,Vf=37816,Hf=37817,Gf=37818,Wf=37819,Xf=37820,Yf=37821,jf=36492,qf=36494,$f=36495,Kf=36283,Zf=36284,kl=36285,Qf=36286,S_=3200,Zp=0,y_=1,br="",ni="srgb",Bl="srgb-linear",zl="linear",Lt="srgb",Is=7680,Qp=519,M_=512,E_=513,T_=514,dd=515,w_=516,A_=517,hd=518,b_=519,Jp=35044,em="300 es",Ri=2e3,Vl=2001;function C_(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Hl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function R_(){const s=Hl("canvas");return s.style.display="block",s}const tm={};function nm(...s){const e="THREE."+s.shift();console.log(e,...s)}function d0(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=s[1];n&&n.isStackTrace?s[0]+=" "+n.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function rt(...s){s=d0(s);const e="THREE."+s.shift();{const n=s[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...s)}}function St(...s){s=d0(s);const e="THREE."+s.shift();{const n=s[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...s)}}function qs(...s){const e=s.join(" ");e in tm||(tm[e]=!0,rt(...s))}function P_(s,e,n){return new Promise(function(r,o){function u(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(u,n);break;default:r()}}setTimeout(u,n)})}const L_={[pf]:mf,[gf]:xf,[vf]:Sf,[Ks]:_f,[mf]:pf,[xf]:gf,[Sf]:vf,[_f]:Ks};class ls{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const u=o.indexOf(n);u!==-1&&o.splice(u,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let u=0,c=o.length;u<c;u++)o[u].call(this,e);e.target=null}}}const En=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Nc=Math.PI/180,Jf=180/Math.PI;function $a(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(En[s&255]+En[s>>8&255]+En[s>>16&255]+En[s>>24&255]+"-"+En[e&255]+En[e>>8&255]+"-"+En[e>>16&15|64]+En[e>>24&255]+"-"+En[n&63|128]+En[n>>8&255]+"-"+En[n>>16&255]+En[n>>24&255]+En[r&255]+En[r>>8&255]+En[r>>16&255]+En[r>>24&255]).toLowerCase()}function gt(s,e,n){return Math.max(e,Math.min(n,s))}function D_(s,e){return(s%e+e)%e}function Uc(s,e,n){return(1-n)*s+n*e}function ka(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Bn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const md=class md{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=gt(this.x,e.x,n.x),this.y=gt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=gt(this.x,e,n),this.y=gt(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(gt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(gt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),o=Math.sin(n),u=this.x-e.x,c=this.y-e.y;return this.x=u*r-c*o+e.x,this.y=u*o+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};md.prototype.isVector2=!0;let wt=md;class ea{constructor(e=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=o}static slerpFlat(e,n,r,o,u,c,d){let p=r[o+0],m=r[o+1],S=r[o+2],y=r[o+3],g=u[c+0],M=u[c+1],A=u[c+2],C=u[c+3];if(y!==C||p!==g||m!==M||S!==A){let _=p*g+m*M+S*A+y*C;_<0&&(g=-g,M=-M,A=-A,C=-C,_=-_);let v=1-d;if(_<.9995){const O=Math.acos(_),k=Math.sin(O);v=Math.sin(v*O)/k,d=Math.sin(d*O)/k,p=p*v+g*d,m=m*v+M*d,S=S*v+A*d,y=y*v+C*d}else{p=p*v+g*d,m=m*v+M*d,S=S*v+A*d,y=y*v+C*d;const O=1/Math.sqrt(p*p+m*m+S*S+y*y);p*=O,m*=O,S*=O,y*=O}}e[n]=p,e[n+1]=m,e[n+2]=S,e[n+3]=y}static multiplyQuaternionsFlat(e,n,r,o,u,c){const d=r[o],p=r[o+1],m=r[o+2],S=r[o+3],y=u[c],g=u[c+1],M=u[c+2],A=u[c+3];return e[n]=d*A+S*y+p*M-m*g,e[n+1]=p*A+S*g+m*y-d*M,e[n+2]=m*A+S*M+d*g-p*y,e[n+3]=S*A-d*y-p*g-m*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,o){return this._x=e,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,o=e._y,u=e._z,c=e._order,d=Math.cos,p=Math.sin,m=d(r/2),S=d(o/2),y=d(u/2),g=p(r/2),M=p(o/2),A=p(u/2);switch(c){case"XYZ":this._x=g*S*y+m*M*A,this._y=m*M*y-g*S*A,this._z=m*S*A+g*M*y,this._w=m*S*y-g*M*A;break;case"YXZ":this._x=g*S*y+m*M*A,this._y=m*M*y-g*S*A,this._z=m*S*A-g*M*y,this._w=m*S*y+g*M*A;break;case"ZXY":this._x=g*S*y-m*M*A,this._y=m*M*y+g*S*A,this._z=m*S*A+g*M*y,this._w=m*S*y-g*M*A;break;case"ZYX":this._x=g*S*y-m*M*A,this._y=m*M*y+g*S*A,this._z=m*S*A-g*M*y,this._w=m*S*y+g*M*A;break;case"YZX":this._x=g*S*y+m*M*A,this._y=m*M*y+g*S*A,this._z=m*S*A-g*M*y,this._w=m*S*y-g*M*A;break;case"XZY":this._x=g*S*y-m*M*A,this._y=m*M*y-g*S*A,this._z=m*S*A+g*M*y,this._w=m*S*y+g*M*A;break;default:rt("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],o=n[4],u=n[8],c=n[1],d=n[5],p=n[9],m=n[2],S=n[6],y=n[10],g=r+d+y;if(g>0){const M=.5/Math.sqrt(g+1);this._w=.25/M,this._x=(S-p)*M,this._y=(u-m)*M,this._z=(c-o)*M}else if(r>d&&r>y){const M=2*Math.sqrt(1+r-d-y);this._w=(S-p)/M,this._x=.25*M,this._y=(o+c)/M,this._z=(u+m)/M}else if(d>y){const M=2*Math.sqrt(1+d-r-y);this._w=(u-m)/M,this._x=(o+c)/M,this._y=.25*M,this._z=(p+S)/M}else{const M=2*Math.sqrt(1+y-r-d);this._w=(c-o)/M,this._x=(u+m)/M,this._y=(p+S)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,o=e._y,u=e._z,c=e._w,d=n._x,p=n._y,m=n._z,S=n._w;return this._x=r*S+c*d+o*m-u*p,this._y=o*S+c*p+u*d-r*m,this._z=u*S+c*m+r*p-o*d,this._w=c*S-r*d-o*p-u*m,this._onChangeCallback(),this}slerp(e,n){let r=e._x,o=e._y,u=e._z,c=e._w,d=this.dot(e);d<0&&(r=-r,o=-o,u=-u,c=-c,d=-d);let p=1-n;if(d<.9995){const m=Math.acos(d),S=Math.sin(m);p=Math.sin(p*m)/S,n=Math.sin(n*m)/S,this._x=this._x*p+r*n,this._y=this._y*p+o*n,this._z=this._z*p+u*n,this._w=this._w*p+c*n,this._onChangeCallback()}else this._x=this._x*p+r*n,this._y=this._y*p+o*n,this._z=this._z*p+u*n,this._w=this._w*p+c*n,this.normalize();return this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),u*Math.sin(n),u*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const gd=class gd{constructor(e=0,n=0,r=0){this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(im.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(im.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,o=this.z,u=e.elements;return this.x=u[0]*n+u[3]*r+u[6]*o,this.y=u[1]*n+u[4]*r+u[7]*o,this.z=u[2]*n+u[5]*r+u[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,u=e.elements,c=1/(u[3]*n+u[7]*r+u[11]*o+u[15]);return this.x=(u[0]*n+u[4]*r+u[8]*o+u[12])*c,this.y=(u[1]*n+u[5]*r+u[9]*o+u[13])*c,this.z=(u[2]*n+u[6]*r+u[10]*o+u[14])*c,this}applyQuaternion(e){const n=this.x,r=this.y,o=this.z,u=e.x,c=e.y,d=e.z,p=e.w,m=2*(c*o-d*r),S=2*(d*n-u*o),y=2*(u*r-c*n);return this.x=n+p*m+c*y-d*S,this.y=r+p*S+d*m-u*y,this.z=o+p*y+u*S-c*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,o=this.z,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*o,this.y=u[1]*n+u[5]*r+u[9]*o,this.z=u[2]*n+u[6]*r+u[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=gt(this.x,e.x,n.x),this.y=gt(this.y,e.y,n.y),this.z=gt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=gt(this.x,e,n),this.y=gt(this.y,e,n),this.z=gt(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(gt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,o=e.y,u=e.z,c=n.x,d=n.y,p=n.z;return this.x=o*p-u*d,this.y=u*c-r*p,this.z=r*d-o*c,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Fc.copy(this).projectOnVector(e),this.sub(Fc)}reflect(e){return this.sub(Fc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(gt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return n*n+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const o=Math.sin(n)*e;return this.x=o*Math.sin(r),this.y=Math.cos(n)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};gd.prototype.isVector3=!0;let ie=gd;const Fc=new ie,im=new ea,vd=class vd{constructor(e,n,r,o,u,c,d,p,m){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,o,u,c,d,p,m)}set(e,n,r,o,u,c,d,p,m){const S=this.elements;return S[0]=e,S[1]=o,S[2]=d,S[3]=n,S[4]=u,S[5]=p,S[6]=r,S[7]=c,S[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,u=this.elements,c=r[0],d=r[3],p=r[6],m=r[1],S=r[4],y=r[7],g=r[2],M=r[5],A=r[8],C=o[0],_=o[3],v=o[6],O=o[1],k=o[4],b=o[7],U=o[2],P=o[5],F=o[8];return u[0]=c*C+d*O+p*U,u[3]=c*_+d*k+p*P,u[6]=c*v+d*b+p*F,u[1]=m*C+S*O+y*U,u[4]=m*_+S*k+y*P,u[7]=m*v+S*b+y*F,u[2]=g*C+M*O+A*U,u[5]=g*_+M*k+A*P,u[8]=g*v+M*b+A*F,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],o=e[2],u=e[3],c=e[4],d=e[5],p=e[6],m=e[7],S=e[8];return n*c*S-n*d*m-r*u*S+r*d*p+o*u*m-o*c*p}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],u=e[3],c=e[4],d=e[5],p=e[6],m=e[7],S=e[8],y=S*c-d*m,g=d*p-S*u,M=m*u-c*p,A=n*y+r*g+o*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=y*C,e[1]=(o*m-S*r)*C,e[2]=(d*r-o*c)*C,e[3]=g*C,e[4]=(S*n-o*p)*C,e[5]=(o*u-d*n)*C,e[6]=M*C,e[7]=(r*p-m*n)*C,e[8]=(c*n-r*u)*C,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,o,u,c,d){const p=Math.cos(u),m=Math.sin(u);return this.set(r*p,r*m,-r*(p*c+m*d)+c+e,-o*m,o*p,-o*(-m*c+p*d)+d+n,0,0,1),this}scale(e,n){return qs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Oc.makeScale(e,n)),this}rotate(e){return qs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Oc.makeRotation(-e)),this}translate(e,n){return qs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Oc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};vd.prototype.isMatrix3=!0;let lt=vd;const Oc=new lt,rm=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sm=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function I_(){const s={enabled:!0,workingColorSpace:Bl,spaces:{},convert:function(o,u,c){return this.enabled===!1||u===c||!u||!c||(this.spaces[u].transfer===Lt&&(o.r=Zi(o.r),o.g=Zi(o.g),o.b=Zi(o.b)),this.spaces[u].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[u].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Lt&&(o.r=$s(o.r),o.g=$s(o.g),o.b=$s(o.b))),o},workingToColorSpace:function(o,u){return this.convert(o,this.workingColorSpace,u)},colorSpaceToWorking:function(o,u){return this.convert(o,u,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===br?zl:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,u=this.workingColorSpace){return o.fromArray(this.spaces[u].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,u,c){return o.copy(this.spaces[u].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,u){return qs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,u)},toWorkingColorSpace:function(o,u){return qs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,u)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Bl]:{primaries:e,whitePoint:r,transfer:zl,toXYZ:rm,fromXYZ:sm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ni},outputColorSpaceConfig:{drawingBufferColorSpace:ni}},[ni]:{primaries:e,whitePoint:r,transfer:Lt,toXYZ:rm,fromXYZ:sm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ni}}}),s}const mt=I_();function Zi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function $s(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ns;class N_{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Ns===void 0&&(Ns=Hl("canvas")),Ns.width=e.width,Ns.height=e.height;const o=Ns.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Ns}return r.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Hl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),u=o.data;for(let c=0;c<u.length;c++)u[c]=Zi(u[c]/255)*255;return r.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Zi(n[r]/255)*255):n[r]=Zi(n[r]);return{data:n,width:e.width,height:e.height}}else return rt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let U_=0;class pd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:U_++}),this.uuid=$a(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let u;if(Array.isArray(o)){u=[];for(let c=0,d=o.length;c<d;c++)o[c].isDataTexture?u.push(kc(o[c].image)):u.push(kc(o[c]))}else u=kc(o);r.url=u}return n||(e.images[this.uuid]=r),r}}function kc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?N_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(rt("Texture: Unable to serialize Texture."),{})}let F_=0;const Bc=new ie;class Pn extends ls{constructor(e=Pn.DEFAULT_IMAGE,n=Pn.DEFAULT_MAPPING,r=$i,o=$i,u=wn,c=ns,d=_i,p=ri,m=Pn.DEFAULT_ANISOTROPY,S=br){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:F_++}),this.uuid=$a(),this.name="",this.source=new pd(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=u,this.minFilter=c,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new wt(0,0),this.repeat=new wt(1,1),this.center=new wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=S,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Bc).x}get height(){return this.source.getSize(Bc).y}get depth(){return this.source.getSize(Bc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const r=e[n];if(r===void 0){rt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){rt(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==r0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case yf:e.x=e.x-Math.floor(e.x);break;case $i:e.x=e.x<0?0:1;break;case Mf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case yf:e.y=e.y-Math.floor(e.y);break;case $i:e.y=e.y<0?0:1;break;case Mf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=r0;Pn.DEFAULT_ANISOTROPY=1;const _d=class _d{constructor(e=0,n=0,r=0,o=1){this.x=e,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,o){return this.x=e,this.y=n,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,u=this.w,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*o+c[12]*u,this.y=c[1]*n+c[5]*r+c[9]*o+c[13]*u,this.z=c[2]*n+c[6]*r+c[10]*o+c[14]*u,this.w=c[3]*n+c[7]*r+c[11]*o+c[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,o,u;const p=e.elements,m=p[0],S=p[4],y=p[8],g=p[1],M=p[5],A=p[9],C=p[2],_=p[6],v=p[10];if(Math.abs(S-g)<.01&&Math.abs(y-C)<.01&&Math.abs(A-_)<.01){if(Math.abs(S+g)<.1&&Math.abs(y+C)<.1&&Math.abs(A+_)<.1&&Math.abs(m+M+v-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const k=(m+1)/2,b=(M+1)/2,U=(v+1)/2,P=(S+g)/4,F=(y+C)/4,T=(A+_)/4;return k>b&&k>U?k<.01?(r=0,o=.707106781,u=.707106781):(r=Math.sqrt(k),o=P/r,u=F/r):b>U?b<.01?(r=.707106781,o=0,u=.707106781):(o=Math.sqrt(b),r=P/o,u=T/o):U<.01?(r=.707106781,o=.707106781,u=0):(u=Math.sqrt(U),r=F/u,o=T/u),this.set(r,o,u,n),this}let O=Math.sqrt((_-A)*(_-A)+(y-C)*(y-C)+(g-S)*(g-S));return Math.abs(O)<.001&&(O=1),this.x=(_-A)/O,this.y=(y-C)/O,this.z=(g-S)/O,this.w=Math.acos((m+M+v-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=gt(this.x,e.x,n.x),this.y=gt(this.y,e.y,n.y),this.z=gt(this.z,e.z,n.z),this.w=gt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=gt(this.x,e,n),this.y=gt(this.y,e,n),this.z=gt(this.z,e,n),this.w=gt(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(gt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};_d.prototype.isVector4=!0;let Kt=_d;class O_ extends ls{constructor(e=1,n=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=r.depth,this.scissor=new Kt(0,0,e,n),this.scissorTest=!1,this.viewport=new Kt(0,0,e,n),this.textures=[];const o={width:e,height:n,depth:r.depth},u=new Pn(o),c=r.count;for(let d=0;d<c;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:wn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let o=0,u=this.textures.length;o<u;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},e.textures[n].image);this.textures[n].source=new pd(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Li extends O_{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class h0 extends Pn{constructor(e=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=vn,this.minFilter=vn,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class k_ extends Pn{constructor(e=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=vn,this.minFilter=vn,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Gl=class Gl{constructor(e,n,r,o,u,c,d,p,m,S,y,g,M,A,C,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,o,u,c,d,p,m,S,y,g,M,A,C,_)}set(e,n,r,o,u,c,d,p,m,S,y,g,M,A,C,_){const v=this.elements;return v[0]=e,v[4]=n,v[8]=r,v[12]=o,v[1]=u,v[5]=c,v[9]=d,v[13]=p,v[2]=m,v[6]=S,v[10]=y,v[14]=g,v[3]=M,v[7]=A,v[11]=C,v[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Gl().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,r=e.elements,o=1/Us.setFromMatrixColumn(e,0).length(),u=1/Us.setFromMatrixColumn(e,1).length(),c=1/Us.setFromMatrixColumn(e,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*u,n[5]=r[5]*u,n[6]=r[6]*u,n[7]=0,n[8]=r[8]*c,n[9]=r[9]*c,n[10]=r[10]*c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,o=e.y,u=e.z,c=Math.cos(r),d=Math.sin(r),p=Math.cos(o),m=Math.sin(o),S=Math.cos(u),y=Math.sin(u);if(e.order==="XYZ"){const g=c*S,M=c*y,A=d*S,C=d*y;n[0]=p*S,n[4]=-p*y,n[8]=m,n[1]=M+A*m,n[5]=g-C*m,n[9]=-d*p,n[2]=C-g*m,n[6]=A+M*m,n[10]=c*p}else if(e.order==="YXZ"){const g=p*S,M=p*y,A=m*S,C=m*y;n[0]=g+C*d,n[4]=A*d-M,n[8]=c*m,n[1]=c*y,n[5]=c*S,n[9]=-d,n[2]=M*d-A,n[6]=C+g*d,n[10]=c*p}else if(e.order==="ZXY"){const g=p*S,M=p*y,A=m*S,C=m*y;n[0]=g-C*d,n[4]=-c*y,n[8]=A+M*d,n[1]=M+A*d,n[5]=c*S,n[9]=C-g*d,n[2]=-c*m,n[6]=d,n[10]=c*p}else if(e.order==="ZYX"){const g=c*S,M=c*y,A=d*S,C=d*y;n[0]=p*S,n[4]=A*m-M,n[8]=g*m+C,n[1]=p*y,n[5]=C*m+g,n[9]=M*m-A,n[2]=-m,n[6]=d*p,n[10]=c*p}else if(e.order==="YZX"){const g=c*p,M=c*m,A=d*p,C=d*m;n[0]=p*S,n[4]=C-g*y,n[8]=A*y+M,n[1]=y,n[5]=c*S,n[9]=-d*S,n[2]=-m*S,n[6]=M*y+A,n[10]=g-C*y}else if(e.order==="XZY"){const g=c*p,M=c*m,A=d*p,C=d*m;n[0]=p*S,n[4]=-y,n[8]=m*S,n[1]=g*y+C,n[5]=c*S,n[9]=M*y-A,n[2]=A*y-M,n[6]=d*S,n[10]=C*y+g}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(B_,e,z_)}lookAt(e,n,r){const o=this.elements;return Yn.subVectors(e,n),Yn.lengthSq()===0&&(Yn.z=1),Yn.normalize(),yr.crossVectors(r,Yn),yr.lengthSq()===0&&(Math.abs(r.z)===1?Yn.x+=1e-4:Yn.z+=1e-4,Yn.normalize(),yr.crossVectors(r,Yn)),yr.normalize(),sl.crossVectors(Yn,yr),o[0]=yr.x,o[4]=sl.x,o[8]=Yn.x,o[1]=yr.y,o[5]=sl.y,o[9]=Yn.y,o[2]=yr.z,o[6]=sl.z,o[10]=Yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,u=this.elements,c=r[0],d=r[4],p=r[8],m=r[12],S=r[1],y=r[5],g=r[9],M=r[13],A=r[2],C=r[6],_=r[10],v=r[14],O=r[3],k=r[7],b=r[11],U=r[15],P=o[0],F=o[4],T=o[8],D=o[12],X=o[1],V=o[5],$=o[9],ce=o[13],ge=o[2],Z=o[6],fe=o[10],q=o[14],Y=o[3],oe=o[7],le=o[11],N=o[15];return u[0]=c*P+d*X+p*ge+m*Y,u[4]=c*F+d*V+p*Z+m*oe,u[8]=c*T+d*$+p*fe+m*le,u[12]=c*D+d*ce+p*q+m*N,u[1]=S*P+y*X+g*ge+M*Y,u[5]=S*F+y*V+g*Z+M*oe,u[9]=S*T+y*$+g*fe+M*le,u[13]=S*D+y*ce+g*q+M*N,u[2]=A*P+C*X+_*ge+v*Y,u[6]=A*F+C*V+_*Z+v*oe,u[10]=A*T+C*$+_*fe+v*le,u[14]=A*D+C*ce+_*q+v*N,u[3]=O*P+k*X+b*ge+U*Y,u[7]=O*F+k*V+b*Z+U*oe,u[11]=O*T+k*$+b*fe+U*le,u[15]=O*D+k*ce+b*q+U*N,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],o=e[8],u=e[12],c=e[1],d=e[5],p=e[9],m=e[13],S=e[2],y=e[6],g=e[10],M=e[14],A=e[3],C=e[7],_=e[11],v=e[15],O=p*M-m*g,k=d*M-m*y,b=d*g-p*y,U=c*M-m*S,P=c*g-p*S,F=c*y-d*S;return n*(C*O-_*k+v*b)-r*(A*O-_*U+v*P)+o*(A*k-C*U+v*F)-u*(A*b-C*P+_*F)}determinantAffine(){const e=this.elements,n=e[0],r=e[4],o=e[8],u=e[1],c=e[5],d=e[9],p=e[2],m=e[6],S=e[10];return n*(c*S-d*m)-r*(u*S-d*p)+o*(u*m-c*p)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],u=e[3],c=e[4],d=e[5],p=e[6],m=e[7],S=e[8],y=e[9],g=e[10],M=e[11],A=e[12],C=e[13],_=e[14],v=e[15],O=n*d-r*c,k=n*p-o*c,b=n*m-u*c,U=r*p-o*d,P=r*m-u*d,F=o*m-u*p,T=S*C-y*A,D=S*_-g*A,X=S*v-M*A,V=y*_-g*C,$=y*v-M*C,ce=g*v-M*_,ge=O*ce-k*$+b*V+U*X-P*D+F*T;if(ge===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Z=1/ge;return e[0]=(d*ce-p*$+m*V)*Z,e[1]=(o*$-r*ce-u*V)*Z,e[2]=(C*F-_*P+v*U)*Z,e[3]=(g*P-y*F-M*U)*Z,e[4]=(p*X-c*ce-m*D)*Z,e[5]=(n*ce-o*X+u*D)*Z,e[6]=(_*b-A*F-v*k)*Z,e[7]=(S*F-g*b+M*k)*Z,e[8]=(c*$-d*X+m*T)*Z,e[9]=(r*X-n*$-u*T)*Z,e[10]=(A*P-C*b+v*O)*Z,e[11]=(y*b-S*P-M*O)*Z,e[12]=(d*D-c*V-p*T)*Z,e[13]=(n*V-r*D+o*T)*Z,e[14]=(C*k-A*U-_*O)*Z,e[15]=(S*U-y*k+g*O)*Z,this}scale(e){const n=this.elements,r=e.x,o=e.y,u=e.z;return n[0]*=r,n[4]*=o,n[8]*=u,n[1]*=r,n[5]*=o,n[9]*=u,n[2]*=r,n[6]*=o,n[10]*=u,n[3]*=r,n[7]*=o,n[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),o=Math.sin(n),u=1-r,c=e.x,d=e.y,p=e.z,m=u*c,S=u*d;return this.set(m*c+r,m*d-o*p,m*p+o*d,0,m*d+o*p,S*d+r,S*p-o*c,0,m*p-o*d,S*p+o*c,u*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,o,u,c){return this.set(1,r,u,0,e,1,c,0,n,o,1,0,0,0,0,1),this}compose(e,n,r){const o=this.elements,u=n._x,c=n._y,d=n._z,p=n._w,m=u+u,S=c+c,y=d+d,g=u*m,M=u*S,A=u*y,C=c*S,_=c*y,v=d*y,O=p*m,k=p*S,b=p*y,U=r.x,P=r.y,F=r.z;return o[0]=(1-(C+v))*U,o[1]=(M+b)*U,o[2]=(A-k)*U,o[3]=0,o[4]=(M-b)*P,o[5]=(1-(g+v))*P,o[6]=(_+O)*P,o[7]=0,o[8]=(A+k)*F,o[9]=(_-O)*F,o[10]=(1-(g+C))*F,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const u=this.determinantAffine();if(u===0)return r.set(1,1,1),n.identity(),this;let c=Us.set(o[0],o[1],o[2]).length();const d=Us.set(o[4],o[5],o[6]).length(),p=Us.set(o[8],o[9],o[10]).length();u<0&&(c=-c),pi.copy(this);const m=1/c,S=1/d,y=1/p;return pi.elements[0]*=m,pi.elements[1]*=m,pi.elements[2]*=m,pi.elements[4]*=S,pi.elements[5]*=S,pi.elements[6]*=S,pi.elements[8]*=y,pi.elements[9]*=y,pi.elements[10]*=y,n.setFromRotationMatrix(pi),r.x=c,r.y=d,r.z=p,this}makePerspective(e,n,r,o,u,c,d=Ri,p=!1){const m=this.elements,S=2*u/(n-e),y=2*u/(r-o),g=(n+e)/(n-e),M=(r+o)/(r-o);let A,C;if(p)A=u/(c-u),C=c*u/(c-u);else if(d===Ri)A=-(c+u)/(c-u),C=-2*c*u/(c-u);else if(d===Vl)A=-c/(c-u),C=-c*u/(c-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=S,m[4]=0,m[8]=g,m[12]=0,m[1]=0,m[5]=y,m[9]=M,m[13]=0,m[2]=0,m[6]=0,m[10]=A,m[14]=C,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,n,r,o,u,c,d=Ri,p=!1){const m=this.elements,S=2/(n-e),y=2/(r-o),g=-(n+e)/(n-e),M=-(r+o)/(r-o);let A,C;if(p)A=1/(c-u),C=c/(c-u);else if(d===Ri)A=-2/(c-u),C=-(c+u)/(c-u);else if(d===Vl)A=-1/(c-u),C=-u/(c-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=S,m[4]=0,m[8]=0,m[12]=g,m[1]=0,m[5]=y,m[9]=0,m[13]=M,m[2]=0,m[6]=0,m[10]=A,m[14]=C,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}};Gl.prototype.isMatrix4=!0;let Qt=Gl;const Us=new ie,pi=new Qt,B_=new ie(0,0,0),z_=new ie(1,1,1),yr=new ie,sl=new ie,Yn=new ie,am=new Qt,om=new ea;class as{constructor(e=0,n=0,r=0,o=as.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,o=this._order){return this._x=e,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const o=e.elements,u=o[0],c=o[4],d=o[8],p=o[1],m=o[5],S=o[9],y=o[2],g=o[6],M=o[10];switch(n){case"XYZ":this._y=Math.asin(gt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-S,M),this._z=Math.atan2(-c,u)):(this._x=Math.atan2(g,m),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-y,u),this._z=0);break;case"ZXY":this._x=Math.asin(gt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-y,M),this._z=Math.atan2(-c,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-gt(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(g,M),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-c,m));break;case"YZX":this._z=Math.asin(gt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-S,m),this._y=Math.atan2(-y,u)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-gt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(g,m),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-S,M),this._y=0);break;default:rt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return am.makeRotationFromQuaternion(e),this.setFromRotationMatrix(am,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return om.setFromEuler(this),this.setFromQuaternion(om,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}as.DEFAULT_ORDER="XYZ";class p0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let V_=0;const lm=new ie,Fs=new ea,Gi=new Qt,al=new ie,Ba=new ie,H_=new ie,G_=new ea,um=new ie(1,0,0),cm=new ie(0,1,0),fm=new ie(0,0,1),dm={type:"added"},W_={type:"removed"},Os={type:"childadded",child:null},zc={type:"childremoved",child:null};class Vn extends ls{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:V_++}),this.uuid=$a(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vn.DEFAULT_UP.clone();const e=new ie,n=new as,r=new ea,o=new ie(1,1,1);function u(){r.setFromEuler(n,!1)}function c(){n.setFromQuaternion(r,void 0,!1)}n._onChange(u),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Qt},normalMatrix:{value:new lt}}),this.matrix=new Qt,this.matrixWorld=new Qt,this.matrixAutoUpdate=Vn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new p0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Fs.setFromAxisAngle(e,n),this.quaternion.multiply(Fs),this}rotateOnWorldAxis(e,n){return Fs.setFromAxisAngle(e,n),this.quaternion.premultiply(Fs),this}rotateX(e){return this.rotateOnAxis(um,e)}rotateY(e){return this.rotateOnAxis(cm,e)}rotateZ(e){return this.rotateOnAxis(fm,e)}translateOnAxis(e,n){return lm.copy(e).applyQuaternion(this.quaternion),this.position.add(lm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(um,e)}translateY(e){return this.translateOnAxis(cm,e)}translateZ(e){return this.translateOnAxis(fm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gi.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?al.copy(e):al.set(e,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Ba.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gi.lookAt(Ba,al,this.up):Gi.lookAt(al,Ba,this.up),this.quaternion.setFromRotationMatrix(Gi),o&&(Gi.extractRotation(o.matrixWorld),Fs.setFromRotationMatrix(Gi),this.quaternion.premultiply(Fs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(St("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(dm),Os.child=e,this.dispatchEvent(Os),Os.child=null):St("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(W_),zc.child=e,this.dispatchEvent(zc),zc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(dm),Os.child=e,this.dispatchEvent(Os),Os.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const c=this.children[r].getObjectByProperty(e,n);if(c!==void 0)return c}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const o=this.children;for(let u=0,c=o.length;u<c;u++)o[u].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ba,e,H_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ba,G_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,r=e.y,o=e.z,u=this.matrix.elements;u[12]+=n-u[0]*n-u[4]*r-u[8]*o,u[13]+=r-u[1]*n-u[5]*r-u[9]*o,u[14]+=o-u[2]*n-u[6]*r-u[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),n===!0){const u=this.children;for(let c=0,d=u.length;c<d;c++)u[c].updateWorldMatrix(!1,!0,r)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(d=>({...d})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function u(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,S=p.length;m<S;m++){const y=p[m];u(e.shapes,y)}else u(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(u(e.materials,this.material[p]));o.material=d}else o.material=u(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];o.animations.push(u(e.animations,p))}}if(n){const d=c(e.geometries),p=c(e.materials),m=c(e.textures),S=c(e.images),y=c(e.shapes),g=c(e.skeletons),M=c(e.animations),A=c(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),S.length>0&&(r.images=S),y.length>0&&(r.shapes=y),g.length>0&&(r.skeletons=g),M.length>0&&(r.animations=M),A.length>0&&(r.nodes=A)}return r.object=o,r;function c(d){const p=[];for(const m in d){const S=d[m];delete S.metadata,p.push(S)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Vn.DEFAULT_UP=new ie(0,1,0);Vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ol extends Vn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const X_={type:"move"};class Vc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ol,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ol,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ie,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ie),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ol,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ie,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ie,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let o=null,u=null,c=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){c=!0;for(const C of e.hand.values()){const _=n.getJointPose(C,r),v=this._getHandJoint(m,C);_!==null&&(v.matrix.fromArray(_.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=_.radius),v.visible=_!==null}const S=m.joints["index-finger-tip"],y=m.joints["thumb-tip"],g=S.position.distanceTo(y.position),M=.02,A=.005;m.inputState.pinching&&g>M+A?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&g<=M-A&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(u=n.getPose(e.gripSpace,r),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:e,target:this})));d!==null&&(o=n.getPose(e.targetRaySpace,r),o===null&&u!==null&&(o=u),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(X_)))}return d!==null&&(d.visible=o!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=c!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new ol;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const m0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mr={h:0,s:0,l:0},ll={h:0,s:0,l:0};function Hc(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class yt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ni){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mt.colorSpaceToWorking(this,n),this}setRGB(e,n,r,o=mt.workingColorSpace){return this.r=e,this.g=n,this.b=r,mt.colorSpaceToWorking(this,o),this}setHSL(e,n,r,o=mt.workingColorSpace){if(e=D_(e,1),n=gt(n,0,1),r=gt(r,0,1),n===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+n):r+n-r*n,c=2*r-u;this.r=Hc(c,u,e+1/3),this.g=Hc(c,u,e),this.b=Hc(c,u,e-1/3)}return mt.colorSpaceToWorking(this,o),this}setStyle(e,n=ni){function r(u){u!==void 0&&parseFloat(u)<1&&rt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const c=o[1],d=o[2];switch(c){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,n);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,n);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,n);break;default:rt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=o[1],c=u.length;if(c===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,n);if(c===6)return this.setHex(parseInt(u,16),n);rt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ni){const r=m0[e.toLowerCase()];return r!==void 0?this.setHex(r,n):rt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zi(e.r),this.g=Zi(e.g),this.b=Zi(e.b),this}copyLinearToSRGB(e){return this.r=$s(e.r),this.g=$s(e.g),this.b=$s(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ni){return mt.workingToColorSpace(Tn.copy(this),e),Math.round(gt(Tn.r*255,0,255))*65536+Math.round(gt(Tn.g*255,0,255))*256+Math.round(gt(Tn.b*255,0,255))}getHexString(e=ni){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=mt.workingColorSpace){mt.workingToColorSpace(Tn.copy(this),n);const r=Tn.r,o=Tn.g,u=Tn.b,c=Math.max(r,o,u),d=Math.min(r,o,u);let p,m;const S=(d+c)/2;if(d===c)p=0,m=0;else{const y=c-d;switch(m=S<=.5?y/(c+d):y/(2-c-d),c){case r:p=(o-u)/y+(o<u?6:0);break;case o:p=(u-r)/y+2;break;case u:p=(r-o)/y+4;break}p/=6}return e.h=p,e.s=m,e.l=S,e}getRGB(e,n=mt.workingColorSpace){return mt.workingToColorSpace(Tn.copy(this),n),e.r=Tn.r,e.g=Tn.g,e.b=Tn.b,e}getStyle(e=ni){mt.workingToColorSpace(Tn.copy(this),e);const n=Tn.r,r=Tn.g,o=Tn.b;return e!==ni?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,n,r){return this.getHSL(Mr),this.setHSL(Mr.h+e,Mr.s+n,Mr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(Mr),e.getHSL(ll);const r=Uc(Mr.h,ll.h,n),o=Uc(Mr.s,ll.s,n),u=Uc(Mr.l,ll.l,n);return this.setHSL(r,o,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,o=this.b,u=e.elements;return this.r=u[0]*n+u[3]*r+u[6]*o,this.g=u[1]*n+u[4]*r+u[7]*o,this.b=u[2]*n+u[5]*r+u[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tn=new yt;yt.NAMES=m0;class Y_ extends Vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new as,this.environmentIntensity=1,this.environmentRotation=new as,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const mi=new ie,Wi=new ie,Gc=new ie,Xi=new ie,ks=new ie,Bs=new ie,hm=new ie,Wc=new ie,Xc=new ie,Yc=new ie,jc=new Kt,qc=new Kt,$c=new Kt;class vi{constructor(e=new ie,n=new ie,r=new ie){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,o){o.subVectors(r,n),mi.subVectors(e,n),o.cross(mi);const u=o.lengthSq();return u>0?o.multiplyScalar(1/Math.sqrt(u)):o.set(0,0,0)}static getBarycoord(e,n,r,o,u){mi.subVectors(o,n),Wi.subVectors(r,n),Gc.subVectors(e,n);const c=mi.dot(mi),d=mi.dot(Wi),p=mi.dot(Gc),m=Wi.dot(Wi),S=Wi.dot(Gc),y=c*m-d*d;if(y===0)return u.set(0,0,0),null;const g=1/y,M=(m*p-d*S)*g,A=(c*S-d*p)*g;return u.set(1-M-A,A,M)}static containsPoint(e,n,r,o){return this.getBarycoord(e,n,r,o,Xi)===null?!1:Xi.x>=0&&Xi.y>=0&&Xi.x+Xi.y<=1}static getInterpolation(e,n,r,o,u,c,d,p){return this.getBarycoord(e,n,r,o,Xi)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,Xi.x),p.addScaledVector(c,Xi.y),p.addScaledVector(d,Xi.z),p)}static getInterpolatedAttribute(e,n,r,o,u,c){return jc.setScalar(0),qc.setScalar(0),$c.setScalar(0),jc.fromBufferAttribute(e,n),qc.fromBufferAttribute(e,r),$c.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(jc,u.x),c.addScaledVector(qc,u.y),c.addScaledVector($c,u.z),c}static isFrontFacing(e,n,r,o){return mi.subVectors(r,n),Wi.subVectors(e,n),mi.cross(Wi).dot(o)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,o){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,r,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mi.subVectors(this.c,this.b),Wi.subVectors(this.a,this.b),mi.cross(Wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return vi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,o,u){return vi.getInterpolation(e,this.a,this.b,this.c,n,r,o,u)}containsPoint(e){return vi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,o=this.b,u=this.c;let c,d;ks.subVectors(o,r),Bs.subVectors(u,r),Wc.subVectors(e,r);const p=ks.dot(Wc),m=Bs.dot(Wc);if(p<=0&&m<=0)return n.copy(r);Xc.subVectors(e,o);const S=ks.dot(Xc),y=Bs.dot(Xc);if(S>=0&&y<=S)return n.copy(o);const g=p*y-S*m;if(g<=0&&p>=0&&S<=0)return c=p/(p-S),n.copy(r).addScaledVector(ks,c);Yc.subVectors(e,u);const M=ks.dot(Yc),A=Bs.dot(Yc);if(A>=0&&M<=A)return n.copy(u);const C=M*m-p*A;if(C<=0&&m>=0&&A<=0)return d=m/(m-A),n.copy(r).addScaledVector(Bs,d);const _=S*A-M*y;if(_<=0&&y-S>=0&&M-A>=0)return hm.subVectors(u,o),d=(y-S)/(y-S+(M-A)),n.copy(o).addScaledVector(hm,d);const v=1/(_+C+g);return c=C*v,d=g*v,n.copy(r).addScaledVector(ks,c).addScaledVector(Bs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ka{constructor(e=new ie(1/0,1/0,1/0),n=new ie(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(gi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(gi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=gi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(n===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let c=0,d=u.count;c<d;c++)e.isMesh===!0?e.getVertexPosition(c,gi):gi.fromBufferAttribute(u,c),gi.applyMatrix4(e.matrixWorld),this.expandByPoint(gi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ul.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),ul.copy(r.boundingBox)),ul.applyMatrix4(e.matrixWorld),this.union(ul)}const o=e.children;for(let u=0,c=o.length;u<c;u++)this.expandByObject(o[u],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gi),gi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(za),cl.subVectors(this.max,za),zs.subVectors(e.a,za),Vs.subVectors(e.b,za),Hs.subVectors(e.c,za),Er.subVectors(Vs,zs),Tr.subVectors(Hs,Vs),$r.subVectors(zs,Hs);let n=[0,-Er.z,Er.y,0,-Tr.z,Tr.y,0,-$r.z,$r.y,Er.z,0,-Er.x,Tr.z,0,-Tr.x,$r.z,0,-$r.x,-Er.y,Er.x,0,-Tr.y,Tr.x,0,-$r.y,$r.x,0];return!Kc(n,zs,Vs,Hs,cl)||(n=[1,0,0,0,1,0,0,0,1],!Kc(n,zs,Vs,Hs,cl))?!1:(fl.crossVectors(Er,Tr),n=[fl.x,fl.y,fl.z],Kc(n,zs,Vs,Hs,cl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Yi=[new ie,new ie,new ie,new ie,new ie,new ie,new ie,new ie],gi=new ie,ul=new Ka,zs=new ie,Vs=new ie,Hs=new ie,Er=new ie,Tr=new ie,$r=new ie,za=new ie,cl=new ie,fl=new ie,Kr=new ie;function Kc(s,e,n,r,o){for(let u=0,c=s.length-3;u<=c;u+=3){Kr.fromArray(s,u);const d=o.x*Math.abs(Kr.x)+o.y*Math.abs(Kr.y)+o.z*Math.abs(Kr.z),p=e.dot(Kr),m=n.dot(Kr),S=r.dot(Kr);if(Math.max(-Math.max(p,m,S),Math.min(p,m,S))>d)return!1}return!0}const tn=new ie,dl=new wt;let j_=0;class si extends ls{constructor(e,n,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:j_++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Jp,this.updateRanges=[],this.gpuType=Ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let o=0,u=this.itemSize;o<u;o++)this.array[e+o]=n.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)dl.fromBufferAttribute(this,n),dl.applyMatrix3(e),this.setXY(n,dl.x,dl.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)tn.fromBufferAttribute(this,n),tn.applyMatrix3(e),this.setXYZ(n,tn.x,tn.y,tn.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)tn.fromBufferAttribute(this,n),tn.applyMatrix4(e),this.setXYZ(n,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)tn.fromBufferAttribute(this,n),tn.applyNormalMatrix(e),this.setXYZ(n,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)tn.fromBufferAttribute(this,n),tn.transformDirection(e),this.setXYZ(n,tn.x,tn.y,tn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=ka(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Bn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ka(n,this.array)),n}setX(e,n){return this.normalized&&(n=Bn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ka(n,this.array)),n}setY(e,n){return this.normalized&&(n=Bn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ka(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Bn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ka(n,this.array)),n}setW(e,n){return this.normalized&&(n=Bn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Bn(n,this.array),r=Bn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,o){return e*=this.itemSize,this.normalized&&(n=Bn(n,this.array),r=Bn(r,this.array),o=Bn(o,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,n,r,o,u){return e*=this.itemSize,this.normalized&&(n=Bn(n,this.array),r=Bn(r,this.array),o=Bn(o,this.array),u=Bn(u,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Jp&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class g0 extends si{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class v0 extends si{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Qi extends si{constructor(e,n,r){super(new Float32Array(e),n,r)}}const q_=new Ka,Va=new ie,Zc=new ie;class Xl{constructor(e=new ie,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):q_.setFromPoints(e).getCenter(r);let o=0;for(let u=0,c=e.length;u<c;u++)o=Math.max(o,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Va.subVectors(e,this.center);const n=Va.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(Va,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Va.copy(e.center).add(Zc)),this.expandByPoint(Va.copy(e.center).sub(Zc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let $_=0;const ti=new Qt,Qc=new Vn,Gs=new ie,jn=new Ka,Ha=new Ka,cn=new ie;class xi extends ls{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$_++}),this.uuid=$a(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(C_(e)?v0:g0)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new lt().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ti.makeRotationFromQuaternion(e),this.applyMatrix4(ti),this}rotateX(e){return ti.makeRotationX(e),this.applyMatrix4(ti),this}rotateY(e){return ti.makeRotationY(e),this.applyMatrix4(ti),this}rotateZ(e){return ti.makeRotationZ(e),this.applyMatrix4(ti),this}translate(e,n,r){return ti.makeTranslation(e,n,r),this.applyMatrix4(ti),this}scale(e,n,r){return ti.makeScale(e,n,r),this.applyMatrix4(ti),this}lookAt(e){return Qc.lookAt(e),Qc.updateMatrix(),this.applyMatrix4(Qc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gs).negate(),this.translate(Gs.x,Gs.y,Gs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let o=0,u=e.length;o<u;o++){const c=e[o];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Qi(r,3))}else{const r=Math.min(e.length,n.count);for(let o=0;o<r;o++){const u=e[o];n.setXYZ(o,u.x,u.y,u.z||0)}e.length>n.count&&rt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ka);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){St("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ie(-1/0,-1/0,-1/0),new ie(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const u=n[r];jn.setFromBufferAttribute(u),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,jn.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,jn.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint(jn.min),this.boundingBox.expandByPoint(jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&St('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){St("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ie,1/0);return}if(e){const r=this.boundingSphere.center;if(jn.setFromBufferAttribute(e),n)for(let u=0,c=n.length;u<c;u++){const d=n[u];Ha.setFromBufferAttribute(d),this.morphTargetsRelative?(cn.addVectors(jn.min,Ha.min),jn.expandByPoint(cn),cn.addVectors(jn.max,Ha.max),jn.expandByPoint(cn)):(jn.expandByPoint(Ha.min),jn.expandByPoint(Ha.max))}jn.getCenter(r);let o=0;for(let u=0,c=e.count;u<c;u++)cn.fromBufferAttribute(e,u),o=Math.max(o,r.distanceToSquared(cn));if(n)for(let u=0,c=n.length;u<c;u++){const d=n[u],p=this.morphTargetsRelative;for(let m=0,S=d.count;m<S;m++)cn.fromBufferAttribute(d,m),p&&(Gs.fromBufferAttribute(e,m),cn.add(Gs)),o=Math.max(o,r.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&St('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){St("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,u=n.uv;let c=this.getAttribute("tangent");(c===void 0||c.count!==r.count)&&(c=new si(new Float32Array(4*r.count),4),this.setAttribute("tangent",c));const d=[],p=[];for(let T=0;T<r.count;T++)d[T]=new ie,p[T]=new ie;const m=new ie,S=new ie,y=new ie,g=new wt,M=new wt,A=new wt,C=new ie,_=new ie;function v(T,D,X){m.fromBufferAttribute(r,T),S.fromBufferAttribute(r,D),y.fromBufferAttribute(r,X),g.fromBufferAttribute(u,T),M.fromBufferAttribute(u,D),A.fromBufferAttribute(u,X),S.sub(m),y.sub(m),M.sub(g),A.sub(g);const V=1/(M.x*A.y-A.x*M.y);isFinite(V)&&(C.copy(S).multiplyScalar(A.y).addScaledVector(y,-M.y).multiplyScalar(V),_.copy(y).multiplyScalar(M.x).addScaledVector(S,-A.x).multiplyScalar(V),d[T].add(C),d[D].add(C),d[X].add(C),p[T].add(_),p[D].add(_),p[X].add(_))}let O=this.groups;O.length===0&&(O=[{start:0,count:e.count}]);for(let T=0,D=O.length;T<D;++T){const X=O[T],V=X.start,$=X.count;for(let ce=V,ge=V+$;ce<ge;ce+=3)v(e.getX(ce+0),e.getX(ce+1),e.getX(ce+2))}const k=new ie,b=new ie,U=new ie,P=new ie;function F(T){U.fromBufferAttribute(o,T),P.copy(U);const D=d[T];k.copy(D),k.sub(U.multiplyScalar(U.dot(D))).normalize(),b.crossVectors(P,D);const V=b.dot(p[T])<0?-1:1;c.setXYZW(T,k.x,k.y,k.z,V)}for(let T=0,D=O.length;T<D;++T){const X=O[T],V=X.start,$=X.count;for(let ce=V,ge=V+$;ce<ge;ce+=3)F(e.getX(ce+0)),F(e.getX(ce+1)),F(e.getX(ce+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==n.count)r=new si(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let g=0,M=r.count;g<M;g++)r.setXYZ(g,0,0,0);const o=new ie,u=new ie,c=new ie,d=new ie,p=new ie,m=new ie,S=new ie,y=new ie;if(e)for(let g=0,M=e.count;g<M;g+=3){const A=e.getX(g+0),C=e.getX(g+1),_=e.getX(g+2);o.fromBufferAttribute(n,A),u.fromBufferAttribute(n,C),c.fromBufferAttribute(n,_),S.subVectors(c,u),y.subVectors(o,u),S.cross(y),d.fromBufferAttribute(r,A),p.fromBufferAttribute(r,C),m.fromBufferAttribute(r,_),d.add(S),p.add(S),m.add(S),r.setXYZ(A,d.x,d.y,d.z),r.setXYZ(C,p.x,p.y,p.z),r.setXYZ(_,m.x,m.y,m.z)}else for(let g=0,M=n.count;g<M;g+=3)o.fromBufferAttribute(n,g+0),u.fromBufferAttribute(n,g+1),c.fromBufferAttribute(n,g+2),S.subVectors(c,u),y.subVectors(o,u),S.cross(y),r.setXYZ(g+0,S.x,S.y,S.z),r.setXYZ(g+1,S.x,S.y,S.z),r.setXYZ(g+2,S.x,S.y,S.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)cn.fromBufferAttribute(e,n),cn.normalize(),e.setXYZ(n,cn.x,cn.y,cn.z)}toNonIndexed(){function e(d,p){const m=d.array,S=d.itemSize,y=d.normalized,g=new m.constructor(p.length*S);let M=0,A=0;for(let C=0,_=p.length;C<_;C++){d.isInterleavedBufferAttribute?M=p[C]*d.data.stride+d.offset:M=p[C]*S;for(let v=0;v<S;v++)g[A++]=m[M++]}return new si(g,S,y)}if(this.index===null)return rt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new xi,r=this.index.array,o=this.attributes;for(const d in o){const p=o[d],m=e(p,r);n.setAttribute(d,m)}const u=this.morphAttributes;for(const d in u){const p=[],m=u[d];for(let S=0,y=m.length;S<y;S++){const g=m[S],M=e(g,r);p.push(M)}n.morphAttributes[d]=p}n.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let d=0,p=c.length;d<p;d++){const m=c[d];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const o={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],S=[];for(let y=0,g=m.length;y<g;y++){const M=m[y];S.push(M.toJSON(e.data))}S.length>0&&(o[p]=S,u=!0)}u&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const m in o){const S=o[m];this.setAttribute(m,S.clone(n))}const u=e.morphAttributes;for(const m in u){const S=[],y=u[m];for(let g=0,M=y.length;g<M;g++)S.push(y[g].clone(n));this.morphAttributes[m]=S}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let m=0,S=c.length;m<S;m++){const y=c[m];this.addGroup(y.start,y.count,y.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let K_=0;class Za extends ls{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:K_++}),this.uuid=$a(),this.name="",this.type="Material",this.blending=js,this.side=Pr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=df,this.blendDst=hf,this.blendEquation=es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new yt(0,0,0),this.blendAlpha=0,this.depthFunc=Ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Is,this.stencilZFail=Is,this.stencilZPass=Is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){rt(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){rt(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==js&&(r.blending=this.blending),this.side!==Pr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==df&&(r.blendSrc=this.blendSrc),this.blendDst!==hf&&(r.blendDst=this.blendDst),this.blendEquation!==es&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ks&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Is&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Is&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Is&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(u){const c=[];for(const d in u){const p=u[d];delete p.metadata,c.push(p)}return c}if(n){const u=o(e.textures),c=o(e.images);u.length>0&&(r.textures=u),c.length>0&&(r.images=c)}return r}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new yt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new wt().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new wt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let u=0;u!==o;++u)r[u]=n[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ji=new ie,Jc=new ie,hl=new ie,wr=new ie,ef=new ie,pl=new ie,tf=new ie;class _0{constructor(e=new ie,n=new ie(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ji)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ji.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ji.copy(this.origin).addScaledVector(this.direction,n),ji.distanceToSquared(e))}distanceSqToSegment(e,n,r,o){Jc.copy(e).add(n).multiplyScalar(.5),hl.copy(n).sub(e).normalize(),wr.copy(this.origin).sub(Jc);const u=e.distanceTo(n)*.5,c=-this.direction.dot(hl),d=wr.dot(this.direction),p=-wr.dot(hl),m=wr.lengthSq(),S=Math.abs(1-c*c);let y,g,M,A;if(S>0)if(y=c*p-d,g=c*d-p,A=u*S,y>=0)if(g>=-A)if(g<=A){const C=1/S;y*=C,g*=C,M=y*(y+c*g+2*d)+g*(c*y+g+2*p)+m}else g=u,y=Math.max(0,-(c*g+d)),M=-y*y+g*(g+2*p)+m;else g=-u,y=Math.max(0,-(c*g+d)),M=-y*y+g*(g+2*p)+m;else g<=-A?(y=Math.max(0,-(-c*u+d)),g=y>0?-u:Math.min(Math.max(-u,-p),u),M=-y*y+g*(g+2*p)+m):g<=A?(y=0,g=Math.min(Math.max(-u,-p),u),M=g*(g+2*p)+m):(y=Math.max(0,-(c*u+d)),g=y>0?u:Math.min(Math.max(-u,-p),u),M=-y*y+g*(g+2*p)+m);else g=c>0?-u:u,y=Math.max(0,-(c*g+d)),M=-y*y+g*(g+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,y),o&&o.copy(Jc).addScaledVector(hl,g),M}intersectSphere(e,n){ji.subVectors(e.center,this.origin);const r=ji.dot(this.direction),o=ji.dot(ji)-r*r,u=e.radius*e.radius;if(o>u)return null;const c=Math.sqrt(u-o),d=r-c,p=r+c;return p<0?null:d<0?this.at(p,n):this.at(d,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,o,u,c,d,p;const m=1/this.direction.x,S=1/this.direction.y,y=1/this.direction.z,g=this.origin;return m>=0?(r=(e.min.x-g.x)*m,o=(e.max.x-g.x)*m):(r=(e.max.x-g.x)*m,o=(e.min.x-g.x)*m),S>=0?(u=(e.min.y-g.y)*S,c=(e.max.y-g.y)*S):(u=(e.max.y-g.y)*S,c=(e.min.y-g.y)*S),r>c||u>o||((u>r||isNaN(r))&&(r=u),(c<o||isNaN(o))&&(o=c),y>=0?(d=(e.min.z-g.z)*y,p=(e.max.z-g.z)*y):(d=(e.max.z-g.z)*y,p=(e.min.z-g.z)*y),r>p||d>o)||((d>r||r!==r)&&(r=d),(p<o||o!==o)&&(o=p),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(e){return this.intersectBox(e,ji)!==null}intersectTriangle(e,n,r,o,u){ef.subVectors(n,e),pl.subVectors(r,e),tf.crossVectors(ef,pl);let c=this.direction.dot(tf),d;if(c>0){if(o)return null;d=1}else if(c<0)d=-1,c=-c;else return null;wr.subVectors(this.origin,e);const p=d*this.direction.dot(pl.crossVectors(wr,pl));if(p<0)return null;const m=d*this.direction.dot(ef.cross(wr));if(m<0||p+m>c)return null;const S=-d*wr.dot(tf);return S<0?null:this.at(S/c,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class x0 extends Za{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new as,this.combine=Km,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pm=new Qt,Zr=new _0,ml=new Xl,mm=new ie,gl=new ie,vl=new ie,_l=new ie,nf=new ie,xl=new ie,gm=new ie,Sl=new ie;class tr extends Vn{constructor(e=new xi,n=new x0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,c=o.length;u<c;u++){const d=o[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,n){const r=this.geometry,o=r.attributes.position,u=r.morphAttributes.position,c=r.morphTargetsRelative;n.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(u&&d){xl.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const S=d[p],y=u[p];S!==0&&(nf.fromBufferAttribute(y,e),c?xl.addScaledVector(nf,S):xl.addScaledVector(nf.sub(n),S))}n.add(xl)}return n}raycast(e,n){const r=this.geometry,o=this.material,u=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),ml.copy(r.boundingSphere),ml.applyMatrix4(u),Zr.copy(e.ray).recast(e.near),!(ml.containsPoint(Zr.origin)===!1&&(Zr.intersectSphere(ml,mm)===null||Zr.origin.distanceToSquared(mm)>(e.far-e.near)**2))&&(pm.copy(u).invert(),Zr.copy(e.ray).applyMatrix4(pm),!(r.boundingBox!==null&&Zr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Zr)))}_computeIntersections(e,n,r){let o;const u=this.geometry,c=this.material,d=u.index,p=u.attributes.position,m=u.attributes.uv,S=u.attributes.uv1,y=u.attributes.normal,g=u.groups,M=u.drawRange;if(d!==null)if(Array.isArray(c))for(let A=0,C=g.length;A<C;A++){const _=g[A],v=c[_.materialIndex],O=Math.max(_.start,M.start),k=Math.min(d.count,Math.min(_.start+_.count,M.start+M.count));for(let b=O,U=k;b<U;b+=3){const P=d.getX(b),F=d.getX(b+1),T=d.getX(b+2);o=yl(this,v,e,r,m,S,y,P,F,T),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=_.materialIndex,n.push(o))}}else{const A=Math.max(0,M.start),C=Math.min(d.count,M.start+M.count);for(let _=A,v=C;_<v;_+=3){const O=d.getX(_),k=d.getX(_+1),b=d.getX(_+2);o=yl(this,c,e,r,m,S,y,O,k,b),o&&(o.faceIndex=Math.floor(_/3),n.push(o))}}else if(p!==void 0)if(Array.isArray(c))for(let A=0,C=g.length;A<C;A++){const _=g[A],v=c[_.materialIndex],O=Math.max(_.start,M.start),k=Math.min(p.count,Math.min(_.start+_.count,M.start+M.count));for(let b=O,U=k;b<U;b+=3){const P=b,F=b+1,T=b+2;o=yl(this,v,e,r,m,S,y,P,F,T),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=_.materialIndex,n.push(o))}}else{const A=Math.max(0,M.start),C=Math.min(p.count,M.start+M.count);for(let _=A,v=C;_<v;_+=3){const O=_,k=_+1,b=_+2;o=yl(this,c,e,r,m,S,y,O,k,b),o&&(o.faceIndex=Math.floor(_/3),n.push(o))}}}}function Z_(s,e,n,r,o,u,c,d){let p;if(e.side===zn?p=r.intersectTriangle(c,u,o,!0,d):p=r.intersectTriangle(o,u,c,e.side===Pr,d),p===null)return null;Sl.copy(d),Sl.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(Sl);return m<n.near||m>n.far?null:{distance:m,point:Sl.clone(),object:s}}function yl(s,e,n,r,o,u,c,d,p,m){s.getVertexPosition(d,gl),s.getVertexPosition(p,vl),s.getVertexPosition(m,_l);const S=Z_(s,e,n,r,gl,vl,_l,gm);if(S){const y=new ie;vi.getBarycoord(gm,gl,vl,_l,y),o&&(S.uv=vi.getInterpolatedAttribute(o,d,p,m,y,new wt)),u&&(S.uv1=vi.getInterpolatedAttribute(u,d,p,m,y,new wt)),c&&(S.normal=vi.getInterpolatedAttribute(c,d,p,m,y,new ie),S.normal.dot(r.direction)>0&&S.normal.multiplyScalar(-1));const g={a:d,b:p,c:m,normal:new ie,materialIndex:0};vi.getNormal(gl,vl,_l,g.normal),S.face=g,S.barycoord=y}return S}class Q_ extends Pn{constructor(e=null,n=1,r=1,o,u,c,d,p,m=vn,S=vn,y,g){super(null,c,d,p,m,S,o,u,y,g),this.isDataTexture=!0,this.image={data:e,width:n,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const rf=new ie,J_=new ie,ex=new lt;class Jr{constructor(e=new ie(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,o){return this.normal.set(e,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const o=rf.subVectors(r,n).cross(J_.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,r=!0){const o=e.delta(rf),u=this.normal.dot(o);if(u===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/u;return r===!0&&(c<0||c>1)?null:n.copy(e.start).addScaledVector(o,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||ex.getNormalMatrix(e),o=this.coplanarPoint(rf).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qr=new Xl,tx=new wt(.5,.5),Ml=new ie;class S0{constructor(e=new Jr,n=new Jr,r=new Jr,o=new Jr,u=new Jr,c=new Jr){this.planes=[e,n,r,o,u,c]}set(e,n,r,o,u,c){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(r),d[3].copy(o),d[4].copy(u),d[5].copy(c),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Ri,r=!1){const o=this.planes,u=e.elements,c=u[0],d=u[1],p=u[2],m=u[3],S=u[4],y=u[5],g=u[6],M=u[7],A=u[8],C=u[9],_=u[10],v=u[11],O=u[12],k=u[13],b=u[14],U=u[15];if(o[0].setComponents(m-c,M-S,v-A,U-O).normalize(),o[1].setComponents(m+c,M+S,v+A,U+O).normalize(),o[2].setComponents(m+d,M+y,v+C,U+k).normalize(),o[3].setComponents(m-d,M-y,v-C,U-k).normalize(),r)o[4].setComponents(p,g,_,b).normalize(),o[5].setComponents(m-p,M-g,v-_,U-b).normalize();else if(o[4].setComponents(m-p,M-g,v-_,U-b).normalize(),n===Ri)o[5].setComponents(m+p,M+g,v+_,U+b).normalize();else if(n===Vl)o[5].setComponents(p,g,_,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Qr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qr)}intersectsSprite(e){Qr.center.set(0,0,0);const n=tx.distanceTo(e.center);return Qr.radius=.7071067811865476+n,Qr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qr)}intersectsSphere(e){const n=this.planes,r=e.center,o=-e.radius;for(let u=0;u<6;u++)if(n[u].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(Ml.x=o.normal.x>0?e.max.x:e.min.x,Ml.y=o.normal.y>0?e.max.y:e.min.y,Ml.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Ml)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class y0 extends Za{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new yt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const vm=new Qt,ed=new _0,El=new Xl,Tl=new ie;class nx extends Vn{constructor(e=new xi,n=new y0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,o=this.matrixWorld,u=e.params.Points.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),El.copy(r.boundingSphere),El.applyMatrix4(o),El.radius+=u,e.ray.intersectsSphere(El)===!1)return;vm.copy(o).invert(),ed.copy(e.ray).applyMatrix4(vm);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=r.index,y=r.attributes.position;if(m!==null){const g=Math.max(0,c.start),M=Math.min(m.count,c.start+c.count);for(let A=g,C=M;A<C;A++){const _=m.getX(A);Tl.fromBufferAttribute(y,_),_m(Tl,_,p,o,e,n,this)}}else{const g=Math.max(0,c.start),M=Math.min(y.count,c.start+c.count);for(let A=g,C=M;A<C;A++)Tl.fromBufferAttribute(y,A),_m(Tl,A,p,o,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,c=o.length;u<c;u++){const d=o[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function _m(s,e,n,r,o,u,c){const d=ed.distanceSqToPoint(s);if(d<n){const p=new ie;ed.closestPointToPoint(s,p),p.applyMatrix4(r);const m=o.ray.origin.distanceTo(p);if(m<o.near||m>o.far)return;u.push({distance:m,distanceToRay:Math.sqrt(d),point:p,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class M0 extends Pn{constructor(e=[],n=rs,r,o,u,c,d,p,m,S){super(e,n,r,o,u,c,d,p,m,S),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Qs extends Pn{constructor(e,n,r=Di,o,u,c,d=vn,p=vn,m,S=er,y=1){if(S!==er&&S!==is)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:n,depth:y};super(g,o,u,c,d,p,S,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new pd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class ix extends Qs{constructor(e,n=Di,r=rs,o,u,c=vn,d=vn,p,m=er){const S={width:e,height:e,depth:1},y=[S,S,S,S,S,S];super(e,e,n,r,o,u,c,d,p,m),this.image=y,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class E0 extends Pn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Qa extends xi{constructor(e=1,n=1,r=1,o=1,u=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:o,heightSegments:u,depthSegments:c};const d=this;o=Math.floor(o),u=Math.floor(u),c=Math.floor(c);const p=[],m=[],S=[],y=[];let g=0,M=0;A("z","y","x",-1,-1,r,n,e,c,u,0),A("z","y","x",1,-1,r,n,-e,c,u,1),A("x","z","y",1,1,e,r,n,o,c,2),A("x","z","y",1,-1,e,r,-n,o,c,3),A("x","y","z",1,-1,e,n,r,o,u,4),A("x","y","z",-1,-1,e,n,-r,o,u,5),this.setIndex(p),this.setAttribute("position",new Qi(m,3)),this.setAttribute("normal",new Qi(S,3)),this.setAttribute("uv",new Qi(y,2));function A(C,_,v,O,k,b,U,P,F,T,D){const X=b/F,V=U/T,$=b/2,ce=U/2,ge=P/2,Z=F+1,fe=T+1;let q=0,Y=0;const oe=new ie;for(let le=0;le<fe;le++){const N=le*V-ce;for(let K=0;K<Z;K++){const Ne=K*X-$;oe[C]=Ne*O,oe[_]=N*k,oe[v]=ge,m.push(oe.x,oe.y,oe.z),oe[C]=0,oe[_]=0,oe[v]=P>0?1:-1,S.push(oe.x,oe.y,oe.z),y.push(K/F),y.push(1-le/T),q+=1}}for(let le=0;le<T;le++)for(let N=0;N<F;N++){const K=g+N+Z*le,Ne=g+N+Z*(le+1),qe=g+(N+1)+Z*(le+1),ze=g+(N+1)+Z*le;p.push(K,Ne,ze),p.push(Ne,qe,ze),Y+=6}d.addGroup(M,Y,D),M+=Y,g+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Yl extends xi{constructor(e=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:o};const u=e/2,c=n/2,d=Math.floor(r),p=Math.floor(o),m=d+1,S=p+1,y=e/d,g=n/p,M=[],A=[],C=[],_=[];for(let v=0;v<S;v++){const O=v*g-c;for(let k=0;k<m;k++){const b=k*y-u;A.push(b,-O,0),C.push(0,0,1),_.push(k/d),_.push(1-v/p)}}for(let v=0;v<p;v++)for(let O=0;O<d;O++){const k=O+m*v,b=O+m*(v+1),U=O+1+m*(v+1),P=O+1+m*v;M.push(k,b,P),M.push(b,U,P)}this.setIndex(M),this.setAttribute("position",new Qi(A,3)),this.setAttribute("normal",new Qi(C,3)),this.setAttribute("uv",new Qi(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yl(e.width,e.height,e.widthSegments,e.heightSegments)}}function Js(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const o=s[n][r];if(xm(o))o.isRenderTargetTexture?(rt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=o.clone();else if(Array.isArray(o))if(xm(o[0])){const u=[];for(let c=0,d=o.length;c<d;c++)u[c]=o[c].clone();e[n][r]=u}else e[n][r]=o.slice();else e[n][r]=o}}return e}function Rn(s){const e={};for(let n=0;n<s.length;n++){const r=Js(s[n]);for(const o in r)e[o]=r[o]}return e}function xm(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function rx(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function T0(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:mt.workingColorSpace}const sx={clone:Js,merge:Rn};var ax=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ox=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ii extends Za{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ax,this.fragmentShader=ox,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Js(e.uniforms),this.uniformsGroups=rx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?n.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?n.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?n.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?n.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?n.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?n.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?n.uniforms[o]={type:"m4",value:c.toArray()}:n.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=n[o.value]||null;break;case"c":this.uniforms[r].value=new yt().setHex(o.value);break;case"v2":this.uniforms[r].value=new wt().fromArray(o.value);break;case"v3":this.uniforms[r].value=new ie().fromArray(o.value);break;case"v4":this.uniforms[r].value=new Kt().fromArray(o.value);break;case"m3":this.uniforms[r].value=new lt().fromArray(o.value);break;case"m4":this.uniforms[r].value=new Qt().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class lx extends Ii{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ux extends Za{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=S_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class cx extends Za{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const wl=new ie,Al=new ea,wi=new ie;class w0 extends Vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qt,this.projectionMatrix=new Qt,this.projectionMatrixInverse=new Qt,this.coordinateSystem=Ri,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(wl,Al,wi),wi.x===1&&wi.y===1&&wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wl,Al,wi.set(1,1,1)).invert()}updateWorldMatrix(e,n,r=!1){super.updateWorldMatrix(e,n,r),this.matrixWorld.decompose(wl,Al,wi),wi.x===1&&wi.y===1&&wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wl,Al,wi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ar=new ie,Sm=new wt,ym=new wt;class ii extends w0{constructor(e=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Jf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Nc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Jf*2*Math.atan(Math.tan(Nc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){Ar.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ar.x,Ar.y).multiplyScalar(-e/Ar.z),Ar.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ar.x,Ar.y).multiplyScalar(-e/Ar.z)}getViewSize(e,n){return this.getViewBounds(e,Sm,ym),n.subVectors(ym,Sm)}setViewOffset(e,n,r,o,u,c){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=u,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Nc*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,u=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const p=c.fullWidth,m=c.fullHeight;u+=c.offsetX*o/p,n-=c.offsetY*r/m,o*=c.width/p,r*=c.height/m}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+o,n,n-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class A0 extends w0{constructor(e=-1,n=1,r=1,o=-1,u=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=o,this.near=u,this.far=c,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,o,u,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=u,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let u=r-e,c=r+e,d=o+n,p=o-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,S=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,c=u+m*this.view.width,d-=S*this.view.offsetY,p=d-S*this.view.height}this.projectionMatrix.makeOrthographic(u,c,d,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ws=-90,Xs=1;class fx extends Vn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new ii(Ws,Xs,e,n);o.layers=this.layers,this.add(o);const u=new ii(Ws,Xs,e,n);u.layers=this.layers,this.add(u);const c=new ii(Ws,Xs,e,n);c.layers=this.layers,this.add(c);const d=new ii(Ws,Xs,e,n);d.layers=this.layers,this.add(d);const p=new ii(Ws,Xs,e,n);p.layers=this.layers,this.add(p);const m=new ii(Ws,Xs,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,o,u,c,d,p]=n;for(const m of n)this.remove(m);if(e===Ri)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Vl)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,c,d,p,m,S]=this.children,y=e.getRenderTarget(),g=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let _=!1;e.isWebGLRenderer===!0?_=e.state.buffers.depth.getReversed():_=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(r,1,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(r,2,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,d),e.setRenderTarget(r,3,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,p),e.setRenderTarget(r,4,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,m),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,S),e.setRenderTarget(y,g,M),e.xr.enabled=A,r.texture.needsPMREMUpdate=!0}}class dx extends ii{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class hx{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,rt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}const xd=class xd{constructor(e,n,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let r=0;r<4;r++)this.elements[r]=e[r+n];return this}set(e,n,r,o){const u=this.elements;return u[0]=e,u[2]=n,u[1]=r,u[3]=o,this}};xd.prototype.isMatrix2=!0;let Mm=xd;function Em(s,e,n,r){const o=px(r);switch(n){case u0:return s*e;case f0:return s*e/o.components*o.byteLength;case ud:return s*e/o.components*o.byteLength;case ss:return s*e*2/o.components*o.byteLength;case cd:return s*e*2/o.components*o.byteLength;case c0:return s*e*3/o.components*o.byteLength;case _i:return s*e*4/o.components*o.byteLength;case fd:return s*e*4/o.components*o.byteLength;case Pl:case Ll:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Dl:case Il:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Tf:case Af:return Math.max(s,16)*Math.max(e,8)/4;case Ef:case wf:return Math.max(s,8)*Math.max(e,8)/2;case bf:case Cf:case Pf:case Lf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Rf:case Ol:case Df:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case If:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Nf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Uf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Ff:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Of:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case kf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Bf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case zf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Vf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Hf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Gf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Wf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Xf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Yf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case jf:case qf:case $f:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Kf:case Zf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case kl:case Qf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function px(s){switch(s){case ri:case s0:return{byteLength:1,components:1};case ja:case a0:case Ji:return{byteLength:2,components:1};case od:case ld:return{byteLength:2,components:4};case Di:case ad:case Ci:return{byteLength:4,components:1};case o0:case l0:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sd}}));typeof window<"u"&&(window.__THREE__?rt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sd);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function b0(){let s=null,e=!1,n=null,r=null;function o(u,c){n(u,c),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&s!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){n=u},setContext:function(u){s=u}}}function mx(s){const e=new WeakMap;function n(d,p){const m=d.array,S=d.usage,y=m.byteLength,g=s.createBuffer();s.bindBuffer(p,g),s.bufferData(p,m,S),d.onUploadCallback();let M;if(m instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)M=s.HALF_FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=s.SHORT;else if(m instanceof Uint32Array)M=s.UNSIGNED_INT;else if(m instanceof Int32Array)M=s.INT;else if(m instanceof Int8Array)M=s.BYTE;else if(m instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:g,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:y}}function r(d,p,m){const S=p.array,y=p.updateRanges;if(s.bindBuffer(m,d),y.length===0)s.bufferSubData(m,0,S);else{y.sort((M,A)=>M.start-A.start);let g=0;for(let M=1;M<y.length;M++){const A=y[g],C=y[M];C.start<=A.start+A.count+1?A.count=Math.max(A.count,C.start+C.count-A.start):(++g,y[g]=C)}y.length=g+1;for(let M=0,A=y.length;M<A;M++){const C=y[M];s.bufferSubData(m,C.start*S.BYTES_PER_ELEMENT,S,C.start,C.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(s.deleteBuffer(p.buffer),e.delete(d))}function c(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const S=e.get(d);(!S||S.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,n(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:o,remove:u,update:c}}var gx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vx=`#ifdef USE_ALPHAHASH
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
#endif`,_x=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Mx=`#ifdef USE_AOMAP
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
#endif`,Ex=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Tx=`#ifdef USE_BATCHING
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
#endif`,wx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ax=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Rx=`#ifdef USE_IRIDESCENCE
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
#endif`,Px=`#ifdef USE_BUMPMAP
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
#endif`,Lx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Dx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ix=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Nx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ux=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Fx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ox=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,kx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Bx=`#define PI 3.141592653589793
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
} // validated`,zx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Vx=`vec3 transformedNormal = objectNormal;
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
#endif`,Hx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yx="gl_FragColor = linearToOutputTexel( gl_FragColor );",jx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qx=`#ifdef USE_ENVMAP
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
#endif`,$x=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Kx=`#ifdef USE_ENVMAP
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
#endif`,Zx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qx=`#ifdef USE_ENVMAP
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
#endif`,Jx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,e1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,t1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,n1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,i1=`#ifdef USE_GRADIENTMAP
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
}`,r1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,s1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,a1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,o1=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,l1=`#ifdef USE_ENVMAP
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
#endif`,u1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,c1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,f1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,d1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,h1=`PhysicalMaterial material;
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
#endif`,p1=`uniform sampler2D dfgLUT;
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
}`,m1=`
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
#endif`,g1=`#if defined( RE_IndirectDiffuse )
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
#endif`,v1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_1=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,x1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,S1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,y1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,M1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,E1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,T1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,w1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,A1=`#if defined( USE_POINTS_UV )
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
#endif`,b1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,C1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,R1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,P1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,L1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,D1=`#ifdef USE_MORPHTARGETS
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
#endif`,I1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,N1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,U1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,F1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,O1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,k1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,B1=`#ifdef USE_NORMALMAP
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
#endif`,z1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,V1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,H1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,G1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,W1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,X1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Y1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,j1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,q1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,K1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Z1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Q1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,J1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,eS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,tS=`float getShadowMask() {
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
}`,nS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,iS=`#ifdef USE_SKINNING
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
#endif`,rS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sS=`#ifdef USE_SKINNING
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
#endif`,aS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,oS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,cS=`#ifdef USE_TRANSMISSION
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
#endif`,fS=`#ifdef USE_TRANSMISSION
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
#endif`,dS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vS=`uniform sampler2D t2D;
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
}`,_S=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,SS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MS=`#include <common>
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
}`,ES=`#if DEPTH_PACKING == 3200
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
}`,TS=`#define DISTANCE
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
}`,wS=`#define DISTANCE
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
}`,AS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CS=`uniform float scale;
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
}`,RS=`uniform vec3 diffuse;
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
}`,PS=`#include <common>
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
}`,LS=`uniform vec3 diffuse;
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
}`,DS=`#define LAMBERT
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
}`,IS=`#define LAMBERT
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
}`,NS=`#define MATCAP
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
}`,US=`#define MATCAP
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
}`,FS=`#define NORMAL
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
}`,OS=`#define NORMAL
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
}`,kS=`#define PHONG
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
}`,BS=`#define PHONG
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
}`,zS=`#define STANDARD
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
}`,VS=`#define STANDARD
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
}`,HS=`#define TOON
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
}`,GS=`#define TOON
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
}`,WS=`uniform float size;
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
}`,XS=`uniform vec3 diffuse;
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
}`,YS=`#include <common>
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
}`,jS=`uniform vec3 color;
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
}`,qS=`uniform float rotation;
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
}`,$S=`uniform vec3 diffuse;
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
}`,ct={alphahash_fragment:gx,alphahash_pars_fragment:vx,alphamap_fragment:_x,alphamap_pars_fragment:xx,alphatest_fragment:Sx,alphatest_pars_fragment:yx,aomap_fragment:Mx,aomap_pars_fragment:Ex,batching_pars_vertex:Tx,batching_vertex:wx,begin_vertex:Ax,beginnormal_vertex:bx,bsdfs:Cx,iridescence_fragment:Rx,bumpmap_pars_fragment:Px,clipping_planes_fragment:Lx,clipping_planes_pars_fragment:Dx,clipping_planes_pars_vertex:Ix,clipping_planes_vertex:Nx,color_fragment:Ux,color_pars_fragment:Fx,color_pars_vertex:Ox,color_vertex:kx,common:Bx,cube_uv_reflection_fragment:zx,defaultnormal_vertex:Vx,displacementmap_pars_vertex:Hx,displacementmap_vertex:Gx,emissivemap_fragment:Wx,emissivemap_pars_fragment:Xx,colorspace_fragment:Yx,colorspace_pars_fragment:jx,envmap_fragment:qx,envmap_common_pars_fragment:$x,envmap_pars_fragment:Kx,envmap_pars_vertex:Zx,envmap_physical_pars_fragment:l1,envmap_vertex:Qx,fog_vertex:Jx,fog_pars_vertex:e1,fog_fragment:t1,fog_pars_fragment:n1,gradientmap_pars_fragment:i1,lightmap_pars_fragment:r1,lights_lambert_fragment:s1,lights_lambert_pars_fragment:a1,lights_pars_begin:o1,lights_toon_fragment:u1,lights_toon_pars_fragment:c1,lights_phong_fragment:f1,lights_phong_pars_fragment:d1,lights_physical_fragment:h1,lights_physical_pars_fragment:p1,lights_fragment_begin:m1,lights_fragment_maps:g1,lights_fragment_end:v1,lightprobes_pars_fragment:_1,logdepthbuf_fragment:x1,logdepthbuf_pars_fragment:S1,logdepthbuf_pars_vertex:y1,logdepthbuf_vertex:M1,map_fragment:E1,map_pars_fragment:T1,map_particle_fragment:w1,map_particle_pars_fragment:A1,metalnessmap_fragment:b1,metalnessmap_pars_fragment:C1,morphinstance_vertex:R1,morphcolor_vertex:P1,morphnormal_vertex:L1,morphtarget_pars_vertex:D1,morphtarget_vertex:I1,normal_fragment_begin:N1,normal_fragment_maps:U1,normal_pars_fragment:F1,normal_pars_vertex:O1,normal_vertex:k1,normalmap_pars_fragment:B1,clearcoat_normal_fragment_begin:z1,clearcoat_normal_fragment_maps:V1,clearcoat_pars_fragment:H1,iridescence_pars_fragment:G1,opaque_fragment:W1,packing:X1,premultiplied_alpha_fragment:Y1,project_vertex:j1,dithering_fragment:q1,dithering_pars_fragment:$1,roughnessmap_fragment:K1,roughnessmap_pars_fragment:Z1,shadowmap_pars_fragment:Q1,shadowmap_pars_vertex:J1,shadowmap_vertex:eS,shadowmask_pars_fragment:tS,skinbase_vertex:nS,skinning_pars_vertex:iS,skinning_vertex:rS,skinnormal_vertex:sS,specularmap_fragment:aS,specularmap_pars_fragment:oS,tonemapping_fragment:lS,tonemapping_pars_fragment:uS,transmission_fragment:cS,transmission_pars_fragment:fS,uv_pars_fragment:dS,uv_pars_vertex:hS,uv_vertex:pS,worldpos_vertex:mS,background_vert:gS,background_frag:vS,backgroundCube_vert:_S,backgroundCube_frag:xS,cube_vert:SS,cube_frag:yS,depth_vert:MS,depth_frag:ES,distance_vert:TS,distance_frag:wS,equirect_vert:AS,equirect_frag:bS,linedashed_vert:CS,linedashed_frag:RS,meshbasic_vert:PS,meshbasic_frag:LS,meshlambert_vert:DS,meshlambert_frag:IS,meshmatcap_vert:NS,meshmatcap_frag:US,meshnormal_vert:FS,meshnormal_frag:OS,meshphong_vert:kS,meshphong_frag:BS,meshphysical_vert:zS,meshphysical_frag:VS,meshtoon_vert:HS,meshtoon_frag:GS,points_vert:WS,points_frag:XS,shadow_vert:YS,shadow_frag:jS,sprite_vert:qS,sprite_frag:$S},Ie={common:{diffuse:{value:new yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ie},probesMax:{value:new ie},probesResolution:{value:new ie}},points:{diffuse:{value:new yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new yt(16777215)},opacity:{value:1},center:{value:new wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},bi={basic:{uniforms:Rn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:Rn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new yt(0)},envMapIntensity:{value:1}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:Rn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new yt(0)},specular:{value:new yt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:Rn([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:Rn([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new yt(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:Rn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:Rn([Ie.points,Ie.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:Rn([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:Rn([Ie.common,Ie.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:Rn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:Rn([Ie.sprite,Ie.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distance:{uniforms:Rn([Ie.common,Ie.displacementmap,{referencePosition:{value:new ie},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distance_vert,fragmentShader:ct.distance_frag},shadow:{uniforms:Rn([Ie.lights,Ie.fog,{color:{value:new yt(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};bi.physical={uniforms:Rn([bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new yt(0)},specularColor:{value:new yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};const bl={r:0,b:0,g:0},KS=new Qt,C0=new lt;C0.set(-1,0,0,0,1,0,0,0,1);function ZS(s,e,n,r,o,u){const c=new yt(0);let d=o===!0?0:1,p,m,S=null,y=0,g=null;function M(O){let k=O.isScene===!0?O.background:null;if(k&&k.isTexture){const b=O.backgroundBlurriness>0;k=e.get(k,b)}return k}function A(O){let k=!1;const b=M(O);b===null?_(c,d):b&&b.isColor&&(_(b,1),k=!0);const U=s.xr.getEnvironmentBlendMode();U==="additive"?n.buffers.color.setClear(0,0,0,1,u):U==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,u),(s.autoClear||k)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function C(O,k){const b=M(k);b&&(b.isCubeTexture||b.mapping===Wl)?(m===void 0&&(m=new tr(new Qa(1,1,1),new Ii({name:"BackgroundCubeMaterial",uniforms:Js(bi.backgroundCube.uniforms),vertexShader:bi.backgroundCube.vertexShader,fragmentShader:bi.backgroundCube.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(U,P,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),m.material.uniforms.envMap.value=b,m.material.uniforms.backgroundBlurriness.value=k.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(KS.makeRotationFromEuler(k.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(C0),m.material.toneMapped=mt.getTransfer(b.colorSpace)!==Lt,(S!==b||y!==b.version||g!==s.toneMapping)&&(m.material.needsUpdate=!0,S=b,y=b.version,g=s.toneMapping),m.layers.enableAll(),O.unshift(m,m.geometry,m.material,0,0,null)):b&&b.isTexture&&(p===void 0&&(p=new tr(new Yl(2,2),new Ii({name:"BackgroundMaterial",uniforms:Js(bi.background.uniforms),vertexShader:bi.background.vertexShader,fragmentShader:bi.background.fragmentShader,side:Pr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(p)),p.material.uniforms.t2D.value=b,p.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,p.material.toneMapped=mt.getTransfer(b.colorSpace)!==Lt,b.matrixAutoUpdate===!0&&b.updateMatrix(),p.material.uniforms.uvTransform.value.copy(b.matrix),(S!==b||y!==b.version||g!==s.toneMapping)&&(p.material.needsUpdate=!0,S=b,y=b.version,g=s.toneMapping),p.layers.enableAll(),O.unshift(p,p.geometry,p.material,0,0,null))}function _(O,k){O.getRGB(bl,T0(s)),n.buffers.color.setClear(bl.r,bl.g,bl.b,k,u)}function v(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return c},setClearColor:function(O,k=1){c.set(O),d=k,_(c,d)},getClearAlpha:function(){return d},setClearAlpha:function(O){d=O,_(c,d)},render:A,addToRenderList:C,dispose:v}}function QS(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=g(null);let u=o,c=!1;function d(V,$,ce,ge,Z){let fe=!1;const q=y(V,ge,ce,$);u!==q&&(u=q,m(u.object)),fe=M(V,ge,ce,Z),fe&&A(V,ge,ce,Z),Z!==null&&e.update(Z,s.ELEMENT_ARRAY_BUFFER),(fe||c)&&(c=!1,b(V,$,ce,ge),Z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function p(){return s.createVertexArray()}function m(V){return s.bindVertexArray(V)}function S(V){return s.deleteVertexArray(V)}function y(V,$,ce,ge){const Z=ge.wireframe===!0;let fe=r[$.id];fe===void 0&&(fe={},r[$.id]=fe);const q=V.isInstancedMesh===!0?V.id:0;let Y=fe[q];Y===void 0&&(Y={},fe[q]=Y);let oe=Y[ce.id];oe===void 0&&(oe={},Y[ce.id]=oe);let le=oe[Z];return le===void 0&&(le=g(p()),oe[Z]=le),le}function g(V){const $=[],ce=[],ge=[];for(let Z=0;Z<n;Z++)$[Z]=0,ce[Z]=0,ge[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:ce,attributeDivisors:ge,object:V,attributes:{},index:null}}function M(V,$,ce,ge){const Z=u.attributes,fe=$.attributes;let q=0;const Y=ce.getAttributes();for(const oe in Y)if(Y[oe].location>=0){const N=Z[oe];let K=fe[oe];if(K===void 0&&(oe==="instanceMatrix"&&V.instanceMatrix&&(K=V.instanceMatrix),oe==="instanceColor"&&V.instanceColor&&(K=V.instanceColor)),N===void 0||N.attribute!==K||K&&N.data!==K.data)return!0;q++}return u.attributesNum!==q||u.index!==ge}function A(V,$,ce,ge){const Z={},fe=$.attributes;let q=0;const Y=ce.getAttributes();for(const oe in Y)if(Y[oe].location>=0){let N=fe[oe];N===void 0&&(oe==="instanceMatrix"&&V.instanceMatrix&&(N=V.instanceMatrix),oe==="instanceColor"&&V.instanceColor&&(N=V.instanceColor));const K={};K.attribute=N,N&&N.data&&(K.data=N.data),Z[oe]=K,q++}u.attributes=Z,u.attributesNum=q,u.index=ge}function C(){const V=u.newAttributes;for(let $=0,ce=V.length;$<ce;$++)V[$]=0}function _(V){v(V,0)}function v(V,$){const ce=u.newAttributes,ge=u.enabledAttributes,Z=u.attributeDivisors;ce[V]=1,ge[V]===0&&(s.enableVertexAttribArray(V),ge[V]=1),Z[V]!==$&&(s.vertexAttribDivisor(V,$),Z[V]=$)}function O(){const V=u.newAttributes,$=u.enabledAttributes;for(let ce=0,ge=$.length;ce<ge;ce++)$[ce]!==V[ce]&&(s.disableVertexAttribArray(ce),$[ce]=0)}function k(V,$,ce,ge,Z,fe,q){q===!0?s.vertexAttribIPointer(V,$,ce,Z,fe):s.vertexAttribPointer(V,$,ce,ge,Z,fe)}function b(V,$,ce,ge){C();const Z=ge.attributes,fe=ce.getAttributes(),q=$.defaultAttributeValues;for(const Y in fe){const oe=fe[Y];if(oe.location>=0){let le=Z[Y];if(le===void 0&&(Y==="instanceMatrix"&&V.instanceMatrix&&(le=V.instanceMatrix),Y==="instanceColor"&&V.instanceColor&&(le=V.instanceColor)),le!==void 0){const N=le.normalized,K=le.itemSize,Ne=e.get(le);if(Ne===void 0)continue;const qe=Ne.buffer,ze=Ne.type,re=Ne.bytesPerElement,_e=ze===s.INT||ze===s.UNSIGNED_INT||le.gpuType===ad;if(le.isInterleavedBufferAttribute){const pe=le.data,Ue=pe.stride,Qe=le.offset;if(pe.isInstancedInterleavedBuffer){for(let Je=0;Je<oe.locationSize;Je++)v(oe.location+Je,pe.meshPerAttribute);V.isInstancedMesh!==!0&&ge._maxInstanceCount===void 0&&(ge._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Je=0;Je<oe.locationSize;Je++)_(oe.location+Je);s.bindBuffer(s.ARRAY_BUFFER,qe);for(let Je=0;Je<oe.locationSize;Je++)k(oe.location+Je,K/oe.locationSize,ze,N,Ue*re,(Qe+K/oe.locationSize*Je)*re,_e)}else{if(le.isInstancedBufferAttribute){for(let pe=0;pe<oe.locationSize;pe++)v(oe.location+pe,le.meshPerAttribute);V.isInstancedMesh!==!0&&ge._maxInstanceCount===void 0&&(ge._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let pe=0;pe<oe.locationSize;pe++)_(oe.location+pe);s.bindBuffer(s.ARRAY_BUFFER,qe);for(let pe=0;pe<oe.locationSize;pe++)k(oe.location+pe,K/oe.locationSize,ze,N,K*re,K/oe.locationSize*pe*re,_e)}}else if(q!==void 0){const N=q[Y];if(N!==void 0)switch(N.length){case 2:s.vertexAttrib2fv(oe.location,N);break;case 3:s.vertexAttrib3fv(oe.location,N);break;case 4:s.vertexAttrib4fv(oe.location,N);break;default:s.vertexAttrib1fv(oe.location,N)}}}}O()}function U(){D();for(const V in r){const $=r[V];for(const ce in $){const ge=$[ce];for(const Z in ge){const fe=ge[Z];for(const q in fe)S(fe[q].object),delete fe[q];delete ge[Z]}}delete r[V]}}function P(V){if(r[V.id]===void 0)return;const $=r[V.id];for(const ce in $){const ge=$[ce];for(const Z in ge){const fe=ge[Z];for(const q in fe)S(fe[q].object),delete fe[q];delete ge[Z]}}delete r[V.id]}function F(V){for(const $ in r){const ce=r[$];for(const ge in ce){const Z=ce[ge];if(Z[V.id]===void 0)continue;const fe=Z[V.id];for(const q in fe)S(fe[q].object),delete fe[q];delete Z[V.id]}}}function T(V){for(const $ in r){const ce=r[$],ge=V.isInstancedMesh===!0?V.id:0,Z=ce[ge];if(Z!==void 0){for(const fe in Z){const q=Z[fe];for(const Y in q)S(q[Y].object),delete q[Y];delete Z[fe]}delete ce[ge],Object.keys(ce).length===0&&delete r[$]}}}function D(){X(),c=!0,u!==o&&(u=o,m(u.object))}function X(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:D,resetDefaultState:X,dispose:U,releaseStatesOfGeometry:P,releaseStatesOfObject:T,releaseStatesOfProgram:F,initAttributes:C,enableAttribute:_,disableUnusedAttributes:O}}function JS(s,e,n){let r;function o(p){r=p}function u(p,m){s.drawArrays(r,p,m),n.update(m,r,1)}function c(p,m,S){S!==0&&(s.drawArraysInstanced(r,p,m,S),n.update(m,r,S))}function d(p,m,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,m,0,S);let g=0;for(let M=0;M<S;M++)g+=m[M];n.update(g,r,1)}this.setMode=o,this.render=u,this.renderInstances=c,this.renderMultiDraw=d}function ey(s,e,n,r){let o;function u(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(F){return!(F!==_i&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(F){const T=F===Ji&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==ri&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Ci&&!T)}function p(F){if(F==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const S=p(m);S!==m&&(rt("WebGLRenderer:",m,"not supported, using",S,"instead."),m=S);const y=n.logarithmicDepthBuffer===!0,g=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&g===!1&&rt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=s.getParameter(s.MAX_TEXTURE_SIZE),_=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),O=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),k=s.getParameter(s.MAX_VARYING_VECTORS),b=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),U=s.getParameter(s.MAX_SAMPLES),P=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:c,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:y,reversedDepthBuffer:g,maxTextures:M,maxVertexTextures:A,maxTextureSize:C,maxCubemapSize:_,maxAttributes:v,maxVertexUniforms:O,maxVaryings:k,maxFragmentUniforms:b,maxSamples:U,samples:P}}function ty(s){const e=this;let n=null,r=0,o=!1,u=!1;const c=new Jr,d=new lt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(y,g){const M=y.length!==0||g||r!==0||o;return o=g,r=y.length,M},this.beginShadows=function(){u=!0,S(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(y,g){n=S(y,g,0)},this.setState=function(y,g,M){const A=y.clippingPlanes,C=y.clipIntersection,_=y.clipShadows,v=s.get(y);if(!o||A===null||A.length===0||u&&!_)u?S(null):m();else{const O=u?0:r,k=O*4;let b=v.clippingState||null;p.value=b,b=S(A,g,k,M);for(let U=0;U!==k;++U)b[U]=n[U];v.clippingState=b,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=O}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function S(y,g,M,A){const C=y!==null?y.length:0;let _=null;if(C!==0){if(_=p.value,A!==!0||_===null){const v=M+C*4,O=g.matrixWorldInverse;d.getNormalMatrix(O),(_===null||_.length<v)&&(_=new Float32Array(v));for(let k=0,b=M;k!==C;++k,b+=4)c.copy(y[k]).applyMatrix4(O,d),c.normal.toArray(_,b),_[b+3]=c.constant}p.value=_,p.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,_}}const Cr=4,Tm=[.125,.215,.35,.446,.526,.582],ts=20,ny=256,Ga=new A0,wm=new yt;let sf=null,af=0,of=0,lf=!1;const iy=new ie;class Am{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,r=.1,o=100,u={}){const{size:c=256,position:d=iy}=u;sf=this._renderer.getRenderTarget(),af=this._renderer.getActiveCubeFace(),of=this._renderer.getActiveMipmapLevel(),lf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,o,p,d),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(sf,af,of),this._renderer.xr.enabled=lf,e.scissorTest=!1,Ys(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===rs||e.mapping===Zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sf=this._renderer.getRenderTarget(),af=this._renderer.getActiveCubeFace(),of=this._renderer.getActiveMipmapLevel(),lf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:wn,minFilter:wn,generateMipmaps:!1,type:Ji,format:_i,colorSpace:Bl,depthBuffer:!1},o=bm(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bm(e,n,r);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=ry(u)),this._blurMaterial=ay(u,e,n),this._ggxMaterial=sy(u,e,n)}return o}_compileMaterial(e){const n=new tr(new xi,e);this._renderer.compile(n,Ga)}_sceneToCubeUV(e,n,r,o,u){const p=new ii(90,1,n,r),m=[1,-1,1,1,1,1],S=[1,1,1,-1,-1,-1],y=this._renderer,g=y.autoClear,M=y.toneMapping;y.getClearColor(wm),y.toneMapping=Pi,y.autoClear=!1,y.state.buffers.depth.getReversed()&&(y.setRenderTarget(o),y.clearDepth(),y.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new tr(new Qa,new x0({name:"PMREM.Background",side:zn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,_=C.material;let v=!1;const O=e.background;O?O.isColor&&(_.color.copy(O),e.background=null,v=!0):(_.color.copy(wm),v=!0);for(let k=0;k<6;k++){const b=k%3;b===0?(p.up.set(0,m[k],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x+S[k],u.y,u.z)):b===1?(p.up.set(0,0,m[k]),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y+S[k],u.z)):(p.up.set(0,m[k],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y,u.z+S[k]));const U=this._cubeSize;Ys(o,b*U,k>2?U:0,U,U),y.setRenderTarget(o),v&&y.render(C,p),y.render(e,p)}y.toneMapping=M,y.autoClear=g,e.background=O}_textureToCubeUV(e,n){const r=this._renderer,o=e.mapping===rs||e.mapping===Zs;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cm());const u=o?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=u;const d=u.uniforms;d.envMap.value=e;const p=this._cubeSize;Ys(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(c,Ga)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let u=1;u<o;u++)this._applyGGXFilter(e,u-1,u);n.autoClear=r}_applyGGXFilter(e,n,r){const o=this._renderer,u=this._pingPongRenderTarget,c=this._ggxMaterial,d=this._lodMeshes[r];d.material=c;const p=c.uniforms,m=r/(this._lodMeshes.length-1),S=n/(this._lodMeshes.length-1),y=Math.sqrt(m*m-S*S),g=0+m*1.25,M=y*g,{_lodMax:A}=this,C=this._sizeLods[r],_=3*C*(r>A-Cr?r-A+Cr:0),v=4*(this._cubeSize-C);p.envMap.value=e.texture,p.roughness.value=M,p.mipInt.value=A-n,Ys(u,_,v,3*C,2*C),o.setRenderTarget(u),o.render(d,Ga),p.envMap.value=u.texture,p.roughness.value=0,p.mipInt.value=A-r,Ys(e,_,v,3*C,2*C),o.setRenderTarget(e),o.render(d,Ga)}_blur(e,n,r,o,u){const c=this._pingPongRenderTarget;this._halfBlur(e,c,n,r,o,"latitudinal",u),this._halfBlur(c,e,r,r,o,"longitudinal",u)}_halfBlur(e,n,r,o,u,c,d){const p=this._renderer,m=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&St("blur direction must be either latitudinal or longitudinal!");const S=3,y=this._lodMeshes[o];y.material=m;const g=m.uniforms,M=this._sizeLods[r]-1,A=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*ts-1),C=u/A,_=isFinite(u)?1+Math.floor(S*C):ts;_>ts&&rt(`sigmaRadians, ${u}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${ts}`);const v=[];let O=0;for(let F=0;F<ts;++F){const T=F/C,D=Math.exp(-T*T/2);v.push(D),F===0?O+=D:F<_&&(O+=2*D)}for(let F=0;F<v.length;F++)v[F]=v[F]/O;g.envMap.value=e.texture,g.samples.value=_,g.weights.value=v,g.latitudinal.value=c==="latitudinal",d&&(g.poleAxis.value=d);const{_lodMax:k}=this;g.dTheta.value=A,g.mipInt.value=k-r;const b=this._sizeLods[o],U=3*b*(o>k-Cr?o-k+Cr:0),P=4*(this._cubeSize-b);Ys(n,U,P,3*b,2*b),p.setRenderTarget(n),p.render(y,Ga)}}function ry(s){const e=[],n=[],r=[];let o=s;const u=s-Cr+1+Tm.length;for(let c=0;c<u;c++){const d=Math.pow(2,o);e.push(d);let p=1/d;c>s-Cr?p=Tm[c-s+Cr-1]:c===0&&(p=0),n.push(p);const m=1/(d-2),S=-m,y=1+m,g=[S,S,y,S,y,y,S,S,y,y,S,y],M=6,A=6,C=3,_=2,v=1,O=new Float32Array(C*A*M),k=new Float32Array(_*A*M),b=new Float32Array(v*A*M);for(let P=0;P<M;P++){const F=P%3*2/3-1,T=P>2?0:-1,D=[F,T,0,F+2/3,T,0,F+2/3,T+1,0,F,T,0,F+2/3,T+1,0,F,T+1,0];O.set(D,C*A*P),k.set(g,_*A*P);const X=[P,P,P,P,P,P];b.set(X,v*A*P)}const U=new xi;U.setAttribute("position",new si(O,C)),U.setAttribute("uv",new si(k,_)),U.setAttribute("faceIndex",new si(b,v)),r.push(new tr(U,null)),o>Cr&&o--}return{lodMeshes:r,sizeLods:e,sigmas:n}}function bm(s,e,n){const r=new Li(s,e,n);return r.texture.mapping=Wl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ys(s,e,n,r,o){s.viewport.set(e,n,r,o),s.scissor.set(e,n,r,o)}function sy(s,e,n){return new Ii({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ny,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:jl(),fragmentShader:`

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
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function ay(s,e,n){const r=new Float32Array(ts),o=new ie(0,1,0);return new Ii({name:"SphericalGaussianBlur",defines:{n:ts,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:jl(),fragmentShader:`

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
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function Cm(){return new Ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jl(),fragmentShader:`

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
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function Rm(){return new Ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function jl(){return`

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
	`}class R0 extends Li{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new M0(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Qa(5,5,5),u=new Ii({name:"CubemapFromEquirect",uniforms:Js(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:zn,blending:Ki});u.uniforms.tEquirect.value=n;const c=new tr(o,u),d=n.minFilter;return n.minFilter===ns&&(n.minFilter=wn),new fx(1,10,this).update(e,c),n.minFilter=d,c.geometry.dispose(),c.material.dispose(),this}clear(e,n=!0,r=!0,o=!0){const u=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(n,r,o);e.setRenderTarget(u)}}function oy(s){let e=new WeakMap,n=new WeakMap,r=null;function o(g,M=!1){return g==null?null:M?c(g):u(g)}function u(g){if(g&&g.isTexture){const M=g.mapping;if(M===Lc||M===Dc)if(e.has(g)){const A=e.get(g).texture;return d(A,g.mapping)}else{const A=g.image;if(A&&A.height>0){const C=new R0(A.height);return C.fromEquirectangularTexture(s,g),e.set(g,C),g.addEventListener("dispose",m),d(C.texture,g.mapping)}else return null}}return g}function c(g){if(g&&g.isTexture){const M=g.mapping,A=M===Lc||M===Dc,C=M===rs||M===Zs;if(A||C){let _=n.get(g);const v=_!==void 0?_.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==v)return r===null&&(r=new Am(s)),_=A?r.fromEquirectangular(g,_):r.fromCubemap(g,_),_.texture.pmremVersion=g.pmremVersion,n.set(g,_),_.texture;if(_!==void 0)return _.texture;{const O=g.image;return A&&O&&O.height>0||C&&O&&p(O)?(r===null&&(r=new Am(s)),_=A?r.fromEquirectangular(g):r.fromCubemap(g),_.texture.pmremVersion=g.pmremVersion,n.set(g,_),g.addEventListener("dispose",S),_.texture):null}}}return g}function d(g,M){return M===Lc?g.mapping=rs:M===Dc&&(g.mapping=Zs),g}function p(g){let M=0;const A=6;for(let C=0;C<A;C++)g[C]!==void 0&&M++;return M===A}function m(g){const M=g.target;M.removeEventListener("dispose",m);const A=e.get(M);A!==void 0&&(e.delete(M),A.dispose())}function S(g){const M=g.target;M.removeEventListener("dispose",S);const A=n.get(M);A!==void 0&&(n.delete(M),A.dispose())}function y(){e=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:y}}function ly(s){const e={};function n(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&qs("WebGLRenderer: "+r+" extension not supported."),o}}}function uy(s,e,n,r){const o={},u=new WeakMap;function c(y){const g=y.target;g.index!==null&&e.remove(g.index);for(const A in g.attributes)e.remove(g.attributes[A]);g.removeEventListener("dispose",c),delete o[g.id];const M=u.get(g);M&&(e.remove(M),u.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,n.memory.geometries--}function d(y,g){return o[g.id]===!0||(g.addEventListener("dispose",c),o[g.id]=!0,n.memory.geometries++),g}function p(y){const g=y.attributes;for(const M in g)e.update(g[M],s.ARRAY_BUFFER)}function m(y){const g=[],M=y.index,A=y.attributes.position;let C=0;if(A===void 0)return;if(M!==null){const O=M.array;C=M.version;for(let k=0,b=O.length;k<b;k+=3){const U=O[k+0],P=O[k+1],F=O[k+2];g.push(U,P,P,F,F,U)}}else{const O=A.array;C=A.version;for(let k=0,b=O.length/3-1;k<b;k+=3){const U=k+0,P=k+1,F=k+2;g.push(U,P,P,F,F,U)}}const _=new(A.count>=65535?v0:g0)(g,1);_.version=C;const v=u.get(y);v&&e.remove(v),u.set(y,_)}function S(y){const g=u.get(y);if(g){const M=y.index;M!==null&&g.version<M.version&&m(y)}else m(y);return u.get(y)}return{get:d,update:p,getWireframeAttribute:S}}function cy(s,e,n){let r;function o(y){r=y}let u,c;function d(y){u=y.type,c=y.bytesPerElement}function p(y,g){s.drawElements(r,g,u,y*c),n.update(g,r,1)}function m(y,g,M){M!==0&&(s.drawElementsInstanced(r,g,u,y*c,M),n.update(g,r,M))}function S(y,g,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,u,y,0,M);let C=0;for(let _=0;_<M;_++)C+=g[_];n.update(C,r,1)}this.setMode=o,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=S}function fy(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,c,d){switch(n.calls++,c){case s.TRIANGLES:n.triangles+=d*(u/3);break;case s.LINES:n.lines+=d*(u/2);break;case s.LINE_STRIP:n.lines+=d*(u-1);break;case s.LINE_LOOP:n.lines+=d*u;break;case s.POINTS:n.points+=d*u;break;default:St("WebGLInfo: Unknown draw mode:",c);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:r}}function dy(s,e,n){const r=new WeakMap,o=new Kt;function u(c,d,p){const m=c.morphTargetInfluences,S=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,y=S!==void 0?S.length:0;let g=r.get(d);if(g===void 0||g.count!==y){let X=function(){T.dispose(),r.delete(d),d.removeEventListener("dispose",X)};var M=X;g!==void 0&&g.texture.dispose();const A=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,_=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],O=d.morphAttributes.normal||[],k=d.morphAttributes.color||[];let b=0;A===!0&&(b=1),C===!0&&(b=2),_===!0&&(b=3);let U=d.attributes.position.count*b,P=1;U>e.maxTextureSize&&(P=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const F=new Float32Array(U*P*4*y),T=new h0(F,U,P,y);T.type=Ci,T.needsUpdate=!0;const D=b*4;for(let V=0;V<y;V++){const $=v[V],ce=O[V],ge=k[V],Z=U*P*4*V;for(let fe=0;fe<$.count;fe++){const q=fe*D;A===!0&&(o.fromBufferAttribute($,fe),F[Z+q+0]=o.x,F[Z+q+1]=o.y,F[Z+q+2]=o.z,F[Z+q+3]=0),C===!0&&(o.fromBufferAttribute(ce,fe),F[Z+q+4]=o.x,F[Z+q+5]=o.y,F[Z+q+6]=o.z,F[Z+q+7]=0),_===!0&&(o.fromBufferAttribute(ge,fe),F[Z+q+8]=o.x,F[Z+q+9]=o.y,F[Z+q+10]=o.z,F[Z+q+11]=ge.itemSize===4?o.w:1)}}g={count:y,texture:T,size:new wt(U,P)},r.set(d,g),d.addEventListener("dispose",X)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",c.morphTexture,n);else{let A=0;for(let _=0;_<m.length;_++)A+=m[_];const C=d.morphTargetsRelative?1:1-A;p.getUniforms().setValue(s,"morphTargetBaseInfluence",C),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",g.texture,n),p.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:u}}function hy(s,e,n,r,o){let u=new WeakMap;function c(m){const S=o.render.frame,y=m.geometry,g=e.get(m,y);if(u.get(g)!==S&&(e.update(g),u.set(g,S)),m.isInstancedMesh&&(m.hasEventListener("dispose",p)===!1&&m.addEventListener("dispose",p),u.get(m)!==S&&(n.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&n.update(m.instanceColor,s.ARRAY_BUFFER),u.set(m,S))),m.isSkinnedMesh){const M=m.skeleton;u.get(M)!==S&&(M.update(),u.set(M,S))}return g}function d(){u=new WeakMap}function p(m){const S=m.target;S.removeEventListener("dispose",p),r.releaseStatesOfObject(S),n.remove(S.instanceMatrix),S.instanceColor!==null&&n.remove(S.instanceColor)}return{update:c,dispose:d}}const py={[Zm]:"LINEAR_TONE_MAPPING",[Qm]:"REINHARD_TONE_MAPPING",[Jm]:"CINEON_TONE_MAPPING",[e0]:"ACES_FILMIC_TONE_MAPPING",[n0]:"AGX_TONE_MAPPING",[i0]:"NEUTRAL_TONE_MAPPING",[t0]:"CUSTOM_TONE_MAPPING"};function my(s,e,n,r,o,u){const c=new Li(e,n,{type:s,depthBuffer:o,stencilBuffer:u,samples:r?4:0,depthTexture:o?new Qs(e,n):void 0}),d=new Li(e,n,{type:Ji,depthBuffer:!1,stencilBuffer:!1}),p=new xi;p.setAttribute("position",new Qi([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new Qi([0,2,0,0,2,0],2));const m=new lx({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),S=new tr(p,m),y=new A0(-1,1,1,-1,0,1);let g=null,M=null,A=!1,C,_=null,v=[],O=!1;this.setSize=function(k,b){c.setSize(k,b),d.setSize(k,b);for(let U=0;U<v.length;U++){const P=v[U];P.setSize&&P.setSize(k,b)}},this.setEffects=function(k){v=k,O=v.length>0&&v[0].isRenderPass===!0;const b=c.width,U=c.height;for(let P=0;P<v.length;P++){const F=v[P];F.setSize&&F.setSize(b,U)}},this.begin=function(k,b){if(A||k.toneMapping===Pi&&v.length===0)return!1;if(_=b,b!==null){const U=b.width,P=b.height;(c.width!==U||c.height!==P)&&this.setSize(U,P)}return O===!1&&k.setRenderTarget(c),C=k.toneMapping,k.toneMapping=Pi,!0},this.hasRenderPass=function(){return O},this.end=function(k,b){k.toneMapping=C,A=!0;let U=c,P=d;for(let F=0;F<v.length;F++){const T=v[F];if(T.enabled!==!1&&(T.render(k,P,U,b),T.needsSwap!==!1)){const D=U;U=P,P=D}}if(g!==k.outputColorSpace||M!==k.toneMapping){g=k.outputColorSpace,M=k.toneMapping,m.defines={},mt.getTransfer(g)===Lt&&(m.defines.SRGB_TRANSFER="");const F=py[M];F&&(m.defines[F]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=U.texture,k.setRenderTarget(_),k.render(S,y),_=null,A=!1},this.isCompositing=function(){return A},this.dispose=function(){c.depthTexture&&c.depthTexture.dispose(),c.dispose(),d.dispose(),p.dispose(),m.dispose()}}const P0=new Pn,td=new Qs(1,1),L0=new h0,D0=new k_,I0=new M0,Pm=[],Lm=[],Dm=new Float32Array(16),Im=new Float32Array(9),Nm=new Float32Array(4);function ta(s,e,n){const r=s[0];if(r<=0||r>0)return s;const o=e*n;let u=Pm[o];if(u===void 0&&(u=new Float32Array(o),Pm[o]=u),e!==0){r.toArray(u,0);for(let c=1,d=0;c!==e;++c)d+=n,s[c].toArray(u,d)}return u}function sn(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function an(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function ql(s,e){let n=Lm[e];n===void 0&&(n=new Int32Array(e),Lm[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function gy(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function vy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(sn(n,e))return;s.uniform2fv(this.addr,e),an(n,e)}}function _y(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(sn(n,e))return;s.uniform3fv(this.addr,e),an(n,e)}}function xy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(sn(n,e))return;s.uniform4fv(this.addr,e),an(n,e)}}function Sy(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(sn(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),an(n,e)}else{if(sn(n,r))return;Nm.set(r),s.uniformMatrix2fv(this.addr,!1,Nm),an(n,r)}}function yy(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(sn(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),an(n,e)}else{if(sn(n,r))return;Im.set(r),s.uniformMatrix3fv(this.addr,!1,Im),an(n,r)}}function My(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(sn(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),an(n,e)}else{if(sn(n,r))return;Dm.set(r),s.uniformMatrix4fv(this.addr,!1,Dm),an(n,r)}}function Ey(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function Ty(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(sn(n,e))return;s.uniform2iv(this.addr,e),an(n,e)}}function wy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(sn(n,e))return;s.uniform3iv(this.addr,e),an(n,e)}}function Ay(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(sn(n,e))return;s.uniform4iv(this.addr,e),an(n,e)}}function by(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function Cy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(sn(n,e))return;s.uniform2uiv(this.addr,e),an(n,e)}}function Ry(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(sn(n,e))return;s.uniform3uiv(this.addr,e),an(n,e)}}function Py(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(sn(n,e))return;s.uniform4uiv(this.addr,e),an(n,e)}}function Ly(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let u;this.type===s.SAMPLER_2D_SHADOW?(td.compareFunction=n.isReversedDepthBuffer()?hd:dd,u=td):u=P0,n.setTexture2D(e||u,o)}function Dy(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(e||D0,o)}function Iy(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(e||I0,o)}function Ny(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(e||L0,o)}function Uy(s){switch(s){case 5126:return gy;case 35664:return vy;case 35665:return _y;case 35666:return xy;case 35674:return Sy;case 35675:return yy;case 35676:return My;case 5124:case 35670:return Ey;case 35667:case 35671:return Ty;case 35668:case 35672:return wy;case 35669:case 35673:return Ay;case 5125:return by;case 36294:return Cy;case 36295:return Ry;case 36296:return Py;case 35678:case 36198:case 36298:case 36306:case 35682:return Ly;case 35679:case 36299:case 36307:return Dy;case 35680:case 36300:case 36308:case 36293:return Iy;case 36289:case 36303:case 36311:case 36292:return Ny}}function Fy(s,e){s.uniform1fv(this.addr,e)}function Oy(s,e){const n=ta(e,this.size,2);s.uniform2fv(this.addr,n)}function ky(s,e){const n=ta(e,this.size,3);s.uniform3fv(this.addr,n)}function By(s,e){const n=ta(e,this.size,4);s.uniform4fv(this.addr,n)}function zy(s,e){const n=ta(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function Vy(s,e){const n=ta(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function Hy(s,e){const n=ta(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function Gy(s,e){s.uniform1iv(this.addr,e)}function Wy(s,e){s.uniform2iv(this.addr,e)}function Xy(s,e){s.uniform3iv(this.addr,e)}function Yy(s,e){s.uniform4iv(this.addr,e)}function jy(s,e){s.uniform1uiv(this.addr,e)}function qy(s,e){s.uniform2uiv(this.addr,e)}function $y(s,e){s.uniform3uiv(this.addr,e)}function Ky(s,e){s.uniform4uiv(this.addr,e)}function Zy(s,e,n){const r=this.cache,o=e.length,u=ql(n,o);sn(r,u)||(s.uniform1iv(this.addr,u),an(r,u));let c;this.type===s.SAMPLER_2D_SHADOW?c=td:c=P0;for(let d=0;d!==o;++d)n.setTexture2D(e[d]||c,u[d])}function Qy(s,e,n){const r=this.cache,o=e.length,u=ql(n,o);sn(r,u)||(s.uniform1iv(this.addr,u),an(r,u));for(let c=0;c!==o;++c)n.setTexture3D(e[c]||D0,u[c])}function Jy(s,e,n){const r=this.cache,o=e.length,u=ql(n,o);sn(r,u)||(s.uniform1iv(this.addr,u),an(r,u));for(let c=0;c!==o;++c)n.setTextureCube(e[c]||I0,u[c])}function eM(s,e,n){const r=this.cache,o=e.length,u=ql(n,o);sn(r,u)||(s.uniform1iv(this.addr,u),an(r,u));for(let c=0;c!==o;++c)n.setTexture2DArray(e[c]||L0,u[c])}function tM(s){switch(s){case 5126:return Fy;case 35664:return Oy;case 35665:return ky;case 35666:return By;case 35674:return zy;case 35675:return Vy;case 35676:return Hy;case 5124:case 35670:return Gy;case 35667:case 35671:return Wy;case 35668:case 35672:return Xy;case 35669:case 35673:return Yy;case 5125:return jy;case 36294:return qy;case 36295:return $y;case 36296:return Ky;case 35678:case 36198:case 36298:case 36306:case 35682:return Zy;case 35679:case 36299:case 36307:return Qy;case 35680:case 36300:case 36308:case 36293:return Jy;case 36289:case 36303:case 36311:case 36292:return eM}}class nM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=Uy(n.type)}}class iM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=tM(n.type)}}class rM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const o=this.seq;for(let u=0,c=o.length;u!==c;++u){const d=o[u];d.setValue(e,n[d.id],r)}}}const uf=/(\w+)(\])?(\[|\.)?/g;function Um(s,e){s.seq.push(e),s.map[e.id]=e}function sM(s,e,n){const r=s.name,o=r.length;for(uf.lastIndex=0;;){const u=uf.exec(r),c=uf.lastIndex;let d=u[1];const p=u[2]==="]",m=u[3];if(p&&(d=d|0),m===void 0||m==="["&&c+2===o){Um(n,m===void 0?new nM(d,s,e):new iM(d,s,e));break}else{let y=n.map[d];y===void 0&&(y=new rM(d),Um(n,y)),n=y}}}class Nl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let c=0;c<r;++c){const d=e.getActiveUniform(n,c),p=e.getUniformLocation(n,d.name);sM(d,p,this)}const o=[],u=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(c):u.push(c);o.length>0&&(this.seq=o.concat(u))}setValue(e,n,r,o){const u=this.map[n];u!==void 0&&u.setValue(e,r,o)}setOptional(e,n,r){const o=n[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,n,r,o){for(let u=0,c=n.length;u!==c;++u){const d=n[u],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,o)}}static seqWithValue(e,n){const r=[];for(let o=0,u=e.length;o!==u;++o){const c=e[o];c.id in n&&r.push(c)}return r}}function Fm(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const aM=37297;let oM=0;function lM(s,e){const n=s.split(`
`),r=[],o=Math.max(e-6,0),u=Math.min(e+6,n.length);for(let c=o;c<u;c++){const d=c+1;r.push(`${d===e?">":" "} ${d}: ${n[c]}`)}return r.join(`
`)}const Om=new lt;function uM(s){mt._getMatrix(Om,mt.workingColorSpace,s);const e=`mat3( ${Om.elements.map(n=>n.toFixed(4))} )`;switch(mt.getTransfer(s)){case zl:return[e,"LinearTransferOETF"];case Lt:return[e,"sRGBTransferOETF"];default:return rt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function km(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),u=(s.getShaderInfoLog(e)||"").trim();if(r&&u==="")return"";const c=/ERROR: 0:(\d+)/.exec(u);if(c){const d=parseInt(c[1]);return n.toUpperCase()+`

`+u+`

`+lM(s.getShaderSource(e),d)}else return u}function cM(s,e){const n=uM(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const fM={[Zm]:"Linear",[Qm]:"Reinhard",[Jm]:"Cineon",[e0]:"ACESFilmic",[n0]:"AgX",[i0]:"Neutral",[t0]:"Custom"};function dM(s,e){const n=fM[e];return n===void 0?(rt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Cl=new ie;function hM(){mt.getLuminanceCoefficients(Cl);const s=Cl.x.toFixed(4),e=Cl.y.toFixed(4),n=Cl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ya).join(`
`)}function mM(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function gM(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const u=s.getActiveAttrib(e,o),c=u.name;let d=1;u.type===s.FLOAT_MAT2&&(d=2),u.type===s.FLOAT_MAT3&&(d=3),u.type===s.FLOAT_MAT4&&(d=4),n[c]={type:u.type,location:s.getAttribLocation(e,c),locationSize:d}}return n}function Ya(s){return s!==""}function Bm(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const vM=/^[ \t]*#include +<([\w\d./]+)>/gm;function nd(s){return s.replace(vM,xM)}const _M=new Map;function xM(s,e){let n=ct[e];if(n===void 0){const r=_M.get(e);if(r!==void 0)n=ct[r],rt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return nd(n)}const SM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vm(s){return s.replace(SM,yM)}function yM(s,e,n,r){let o="";for(let u=parseInt(e);u<parseInt(n);u++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return o}function Hm(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const MM={[Rl]:"SHADOWMAP_TYPE_PCF",[Xa]:"SHADOWMAP_TYPE_VSM"};function EM(s){return MM[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const TM={[rs]:"ENVMAP_TYPE_CUBE",[Zs]:"ENVMAP_TYPE_CUBE",[Wl]:"ENVMAP_TYPE_CUBE_UV"};function wM(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":TM[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const AM={[Zs]:"ENVMAP_MODE_REFRACTION"};function bM(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":AM[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const CM={[Km]:"ENVMAP_BLENDING_MULTIPLY",[v_]:"ENVMAP_BLENDING_MIX",[__]:"ENVMAP_BLENDING_ADD"};function RM(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":CM[s.combine]||"ENVMAP_BLENDING_NONE"}function PM(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function LM(s,e,n,r){const o=s.getContext(),u=n.defines;let c=n.vertexShader,d=n.fragmentShader;const p=EM(n),m=wM(n),S=bM(n),y=RM(n),g=PM(n),M=pM(n),A=mM(u),C=o.createProgram();let _,v,O=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,A].filter(Ya).join(`
`),_.length>0&&(_+=`
`),v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,A].filter(Ya).join(`
`),v.length>0&&(v+=`
`)):(_=[Hm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,A,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+S:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ya).join(`
`),v=[Hm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,A,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+S:"",n.envMap?"#define "+y:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Pi?"#define TONE_MAPPING":"",n.toneMapping!==Pi?ct.tonemapping_pars_fragment:"",n.toneMapping!==Pi?dM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,cM("linearToOutputTexel",n.outputColorSpace),hM(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ya).join(`
`)),c=nd(c),c=Bm(c,n),c=zm(c,n),d=nd(d),d=Bm(d,n),d=zm(d,n),c=Vm(c),d=Vm(d),n.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,_=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,v=["#define varying in",n.glslVersion===em?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===em?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const k=O+_+c,b=O+v+d,U=Fm(o,o.VERTEX_SHADER,k),P=Fm(o,o.FRAGMENT_SHADER,b);o.attachShader(C,U),o.attachShader(C,P),n.index0AttributeName!==void 0?o.bindAttribLocation(C,0,n.index0AttributeName):n.hasPositionAttribute===!0&&o.bindAttribLocation(C,0,"position"),o.linkProgram(C);function F(V){if(s.debug.checkShaderErrors){const $=o.getProgramInfoLog(C)||"",ce=o.getShaderInfoLog(U)||"",ge=o.getShaderInfoLog(P)||"",Z=$.trim(),fe=ce.trim(),q=ge.trim();let Y=!0,oe=!0;if(o.getProgramParameter(C,o.LINK_STATUS)===!1)if(Y=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,C,U,P);else{const le=km(o,U,"vertex"),N=km(o,P,"fragment");St("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(C,o.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+Z+`
`+le+`
`+N)}else Z!==""?rt("WebGLProgram: Program Info Log:",Z):(fe===""||q==="")&&(oe=!1);oe&&(V.diagnostics={runnable:Y,programLog:Z,vertexShader:{log:fe,prefix:_},fragmentShader:{log:q,prefix:v}})}o.deleteShader(U),o.deleteShader(P),T=new Nl(o,C),D=gM(o,C)}let T;this.getUniforms=function(){return T===void 0&&F(this),T};let D;this.getAttributes=function(){return D===void 0&&F(this),D};let X=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return X===!1&&(X=o.getProgramParameter(C,aM)),X},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(C),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=oM++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=U,this.fragmentShader=P,this}let DM=0;class IM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,r){const o=this._getShaderCacheForMaterial(e);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new NM(e),n.set(e,r)),r}}class NM{constructor(e){this.id=DM++,this.code=e,this.usedTimes=0}}function UM(s){return s===ss||s===Ol||s===kl}function FM(s,e,n,r,o,u){const c=new p0,d=new IM,p=new Set,m=[],S=new Map,y=r.logarithmicDepthBuffer;let g=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(T){return p.add(T),T===0?"uv":`uv${T}`}function C(T,D,X,V,$,ce){const ge=V.fog,Z=$.geometry,fe=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?V.environment:null,q=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,Y=e.get(T.envMap||fe,q),oe=Y&&Y.mapping===Wl?Y.image.height:null,le=M[T.type];T.precision!==null&&(g=r.getMaxPrecision(T.precision),g!==T.precision&&rt("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const N=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,K=N!==void 0?N.length:0;let Ne=0;Z.morphAttributes.position!==void 0&&(Ne=1),Z.morphAttributes.normal!==void 0&&(Ne=2),Z.morphAttributes.color!==void 0&&(Ne=3);let qe,ze,re,_e;if(le){const Ve=bi[le];qe=Ve.vertexShader,ze=Ve.fragmentShader}else{qe=T.vertexShader,ze=T.fragmentShader;const Ve=d.getVertexShaderStage(T),Dt=d.getFragmentShaderStage(T);d.update(T,Ve,Dt),re=Ve.id,_e=Dt.id}const pe=s.getRenderTarget(),Ue=s.state.buffers.depth.getReversed(),Qe=$.isInstancedMesh===!0,Je=$.isBatchedMesh===!0,kt=!!T.map,ut=!!T.matcap,Tt=!!Y,vt=!!T.aoMap,pt=!!T.lightMap,Bt=!!T.bumpMap&&T.wireframe===!1,jt=!!T.normalMap,qt=!!T.displacementMap,Gt=!!T.emissiveMap,Ct=!!T.metalnessMap,zt=!!T.roughnessMap,G=T.anisotropy>0,dn=T.clearcoat>0,Mt=T.dispersion>0,R=T.iridescence>0,x=T.sheen>0,j=T.transmission>0,ne=G&&!!T.anisotropyMap,ue=dn&&!!T.clearcoatMap,Me=dn&&!!T.clearcoatNormalMap,Ce=dn&&!!T.clearcoatRoughnessMap,de=R&&!!T.iridescenceMap,me=R&&!!T.iridescenceThicknessMap,Pe=x&&!!T.sheenColorMap,Ye=x&&!!T.sheenRoughnessMap,Le=!!T.specularMap,be=!!T.specularColorMap,Ze=!!T.specularIntensityMap,et=j&&!!T.transmissionMap,it=j&&!!T.thicknessMap,z=!!T.gradientMap,Ae=!!T.alphaMap,he=T.alphaTest>0,Re=!!T.alphaHash,De=!!T.extensions;let ve=Pi;T.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(ve=s.toneMapping);const Ge={shaderID:le,shaderType:T.type,shaderName:T.name,vertexShader:qe,fragmentShader:ze,defines:T.defines,customVertexShaderID:re,customFragmentShaderID:_e,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:Je,batchingColor:Je&&$._colorsTexture!==null,instancing:Qe,instancingColor:Qe&&$.instanceColor!==null,instancingMorph:Qe&&$.morphTexture!==null,outputColorSpace:pe===null?s.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:mt.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:kt,matcap:ut,envMap:Tt,envMapMode:Tt&&Y.mapping,envMapCubeUVHeight:oe,aoMap:vt,lightMap:pt,bumpMap:Bt,normalMap:jt,displacementMap:qt,emissiveMap:Gt,normalMapObjectSpace:jt&&T.normalMapType===y_,normalMapTangentSpace:jt&&T.normalMapType===Zp,packedNormalMap:jt&&T.normalMapType===Zp&&UM(T.normalMap.format),metalnessMap:Ct,roughnessMap:zt,anisotropy:G,anisotropyMap:ne,clearcoat:dn,clearcoatMap:ue,clearcoatNormalMap:Me,clearcoatRoughnessMap:Ce,dispersion:Mt,iridescence:R,iridescenceMap:de,iridescenceThicknessMap:me,sheen:x,sheenColorMap:Pe,sheenRoughnessMap:Ye,specularMap:Le,specularColorMap:be,specularIntensityMap:Ze,transmission:j,transmissionMap:et,thicknessMap:it,gradientMap:z,opaque:T.transparent===!1&&T.blending===js&&T.alphaToCoverage===!1,alphaMap:Ae,alphaTest:he,alphaHash:Re,combine:T.combine,mapUv:kt&&A(T.map.channel),aoMapUv:vt&&A(T.aoMap.channel),lightMapUv:pt&&A(T.lightMap.channel),bumpMapUv:Bt&&A(T.bumpMap.channel),normalMapUv:jt&&A(T.normalMap.channel),displacementMapUv:qt&&A(T.displacementMap.channel),emissiveMapUv:Gt&&A(T.emissiveMap.channel),metalnessMapUv:Ct&&A(T.metalnessMap.channel),roughnessMapUv:zt&&A(T.roughnessMap.channel),anisotropyMapUv:ne&&A(T.anisotropyMap.channel),clearcoatMapUv:ue&&A(T.clearcoatMap.channel),clearcoatNormalMapUv:Me&&A(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&A(T.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&A(T.iridescenceMap.channel),iridescenceThicknessMapUv:me&&A(T.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&A(T.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&A(T.sheenRoughnessMap.channel),specularMapUv:Le&&A(T.specularMap.channel),specularColorMapUv:be&&A(T.specularColorMap.channel),specularIntensityMapUv:Ze&&A(T.specularIntensityMap.channel),transmissionMapUv:et&&A(T.transmissionMap.channel),thicknessMapUv:it&&A(T.thicknessMap.channel),alphaMapUv:Ae&&A(T.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(jt||G),vertexNormals:!!Z.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!Z.attributes.uv&&(kt||Ae),fog:!!ge,useFog:T.fog===!0,fogExp2:!!ge&&ge.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||Z.attributes.normal===void 0&&jt===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:y,reversedDepthBuffer:Ue,skinning:$.isSkinnedMesh===!0,hasPositionAttribute:Z.attributes.position!==void 0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:Ne,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numLightProbeGrids:ce.length,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&X.length>0,shadowMapType:s.shadowMap.type,toneMapping:ve,decodeVideoTexture:kt&&T.map.isVideoTexture===!0&&mt.getTransfer(T.map.colorSpace)===Lt,decodeVideoTextureEmissive:Gt&&T.emissiveMap.isVideoTexture===!0&&mt.getTransfer(T.emissiveMap.colorSpace)===Lt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===qi,flipSided:T.side===zn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:De&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(De&&T.extensions.multiDraw===!0||Je)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ge.vertexUv1s=p.has(1),Ge.vertexUv2s=p.has(2),Ge.vertexUv3s=p.has(3),p.clear(),Ge}function _(T){const D=[];if(T.shaderID?D.push(T.shaderID):(D.push(T.customVertexShaderID),D.push(T.customFragmentShaderID)),T.defines!==void 0)for(const X in T.defines)D.push(X),D.push(T.defines[X]);return T.isRawShaderMaterial===!1&&(v(D,T),O(D,T),D.push(s.outputColorSpace)),D.push(T.customProgramCacheKey),D.join()}function v(T,D){T.push(D.precision),T.push(D.outputColorSpace),T.push(D.envMapMode),T.push(D.envMapCubeUVHeight),T.push(D.mapUv),T.push(D.alphaMapUv),T.push(D.lightMapUv),T.push(D.aoMapUv),T.push(D.bumpMapUv),T.push(D.normalMapUv),T.push(D.displacementMapUv),T.push(D.emissiveMapUv),T.push(D.metalnessMapUv),T.push(D.roughnessMapUv),T.push(D.anisotropyMapUv),T.push(D.clearcoatMapUv),T.push(D.clearcoatNormalMapUv),T.push(D.clearcoatRoughnessMapUv),T.push(D.iridescenceMapUv),T.push(D.iridescenceThicknessMapUv),T.push(D.sheenColorMapUv),T.push(D.sheenRoughnessMapUv),T.push(D.specularMapUv),T.push(D.specularColorMapUv),T.push(D.specularIntensityMapUv),T.push(D.transmissionMapUv),T.push(D.thicknessMapUv),T.push(D.combine),T.push(D.fogExp2),T.push(D.sizeAttenuation),T.push(D.morphTargetsCount),T.push(D.morphAttributeCount),T.push(D.numDirLights),T.push(D.numPointLights),T.push(D.numSpotLights),T.push(D.numSpotLightMaps),T.push(D.numHemiLights),T.push(D.numRectAreaLights),T.push(D.numDirLightShadows),T.push(D.numPointLightShadows),T.push(D.numSpotLightShadows),T.push(D.numSpotLightShadowsWithMaps),T.push(D.numLightProbes),T.push(D.shadowMapType),T.push(D.toneMapping),T.push(D.numClippingPlanes),T.push(D.numClipIntersection),T.push(D.depthPacking)}function O(T,D){c.disableAll(),D.instancing&&c.enable(0),D.instancingColor&&c.enable(1),D.instancingMorph&&c.enable(2),D.matcap&&c.enable(3),D.envMap&&c.enable(4),D.normalMapObjectSpace&&c.enable(5),D.normalMapTangentSpace&&c.enable(6),D.clearcoat&&c.enable(7),D.iridescence&&c.enable(8),D.alphaTest&&c.enable(9),D.vertexColors&&c.enable(10),D.vertexAlphas&&c.enable(11),D.vertexUv1s&&c.enable(12),D.vertexUv2s&&c.enable(13),D.vertexUv3s&&c.enable(14),D.vertexTangents&&c.enable(15),D.anisotropy&&c.enable(16),D.alphaHash&&c.enable(17),D.batching&&c.enable(18),D.dispersion&&c.enable(19),D.batchingColor&&c.enable(20),D.gradientMap&&c.enable(21),D.packedNormalMap&&c.enable(22),D.vertexNormals&&c.enable(23),T.push(c.mask),c.disableAll(),D.fog&&c.enable(0),D.useFog&&c.enable(1),D.flatShading&&c.enable(2),D.logarithmicDepthBuffer&&c.enable(3),D.reversedDepthBuffer&&c.enable(4),D.skinning&&c.enable(5),D.morphTargets&&c.enable(6),D.morphNormals&&c.enable(7),D.morphColors&&c.enable(8),D.premultipliedAlpha&&c.enable(9),D.shadowMapEnabled&&c.enable(10),D.doubleSided&&c.enable(11),D.flipSided&&c.enable(12),D.useDepthPacking&&c.enable(13),D.dithering&&c.enable(14),D.transmission&&c.enable(15),D.sheen&&c.enable(16),D.opaque&&c.enable(17),D.pointsUvs&&c.enable(18),D.decodeVideoTexture&&c.enable(19),D.decodeVideoTextureEmissive&&c.enable(20),D.alphaToCoverage&&c.enable(21),D.numLightProbeGrids>0&&c.enable(22),D.hasPositionAttribute&&c.enable(23),T.push(c.mask)}function k(T){const D=M[T.type];let X;if(D){const V=bi[D];X=sx.clone(V.uniforms)}else X=T.uniforms;return X}function b(T,D){let X=S.get(D);return X!==void 0?++X.usedTimes:(X=new LM(s,D,T,o),m.push(X),S.set(D,X)),X}function U(T){if(--T.usedTimes===0){const D=m.indexOf(T);m[D]=m[m.length-1],m.pop(),S.delete(T.cacheKey),T.destroy()}}function P(T){d.remove(T)}function F(){d.dispose()}return{getParameters:C,getProgramCacheKey:_,getUniforms:k,acquireProgram:b,releaseProgram:U,releaseShaderCache:P,programs:m,dispose:F}}function OM(){let s=new WeakMap;function e(c){return s.has(c)}function n(c){let d=s.get(c);return d===void 0&&(d={},s.set(c,d)),d}function r(c){s.delete(c)}function o(c,d,p){s.get(c)[d]=p}function u(){s=new WeakMap}return{has:e,get:n,remove:r,update:o,dispose:u}}function kM(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Gm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Wm(){const s=[];let e=0;const n=[],r=[],o=[];function u(){e=0,n.length=0,r.length=0,o.length=0}function c(g){let M=0;return g.isInstancedMesh&&(M+=2),g.isSkinnedMesh&&(M+=1),M}function d(g,M,A,C,_,v){let O=s[e];return O===void 0?(O={id:g.id,object:g,geometry:M,material:A,materialVariant:c(g),groupOrder:C,renderOrder:g.renderOrder,z:_,group:v},s[e]=O):(O.id=g.id,O.object=g,O.geometry=M,O.material=A,O.materialVariant=c(g),O.groupOrder=C,O.renderOrder=g.renderOrder,O.z=_,O.group=v),e++,O}function p(g,M,A,C,_,v){const O=d(g,M,A,C,_,v);A.transmission>0?r.push(O):A.transparent===!0?o.push(O):n.push(O)}function m(g,M,A,C,_,v){const O=d(g,M,A,C,_,v);A.transmission>0?r.unshift(O):A.transparent===!0?o.unshift(O):n.unshift(O)}function S(g,M,A){n.length>1&&n.sort(g||kM),r.length>1&&r.sort(M||Gm),o.length>1&&o.sort(M||Gm),A&&(n.reverse(),r.reverse(),o.reverse())}function y(){for(let g=e,M=s.length;g<M;g++){const A=s[g];if(A.id===null)break;A.id=null,A.object=null,A.geometry=null,A.material=null,A.group=null}}return{opaque:n,transmissive:r,transparent:o,init:u,push:p,unshift:m,finish:y,sort:S}}function BM(){let s=new WeakMap;function e(r,o){const u=s.get(r);let c;return u===void 0?(c=new Wm,s.set(r,[c])):o>=u.length?(c=new Wm,u.push(c)):c=u[o],c}function n(){s=new WeakMap}return{get:e,dispose:n}}function zM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new ie,color:new yt};break;case"SpotLight":n={position:new ie,direction:new ie,color:new yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ie,color:new yt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ie,skyColor:new yt,groundColor:new yt};break;case"RectAreaLight":n={color:new yt,position:new ie,halfWidth:new ie,halfHeight:new ie};break}return s[e.id]=n,n}}}function VM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let HM=0;function GM(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function WM(s){const e=new zM,n=VM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new ie);const o=new ie,u=new Qt,c=new Qt;function d(m){let S=0,y=0,g=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let M=0,A=0,C=0,_=0,v=0,O=0,k=0,b=0,U=0,P=0,F=0;m.sort(GM);for(let D=0,X=m.length;D<X;D++){const V=m[D],$=V.color,ce=V.intensity,ge=V.distance;let Z=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===ss?Z=V.shadow.map.texture:Z=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)S+=$.r*ce,y+=$.g*ce,g+=$.b*ce;else if(V.isLightProbe){for(let fe=0;fe<9;fe++)r.probe[fe].addScaledVector(V.sh.coefficients[fe],ce);F++}else if(V.isDirectionalLight){const fe=e.get(V);if(fe.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const q=V.shadow,Y=n.get(V);Y.shadowIntensity=q.intensity,Y.shadowBias=q.bias,Y.shadowNormalBias=q.normalBias,Y.shadowRadius=q.radius,Y.shadowMapSize=q.mapSize,r.directionalShadow[M]=Y,r.directionalShadowMap[M]=Z,r.directionalShadowMatrix[M]=V.shadow.matrix,O++}r.directional[M]=fe,M++}else if(V.isSpotLight){const fe=e.get(V);fe.position.setFromMatrixPosition(V.matrixWorld),fe.color.copy($).multiplyScalar(ce),fe.distance=ge,fe.coneCos=Math.cos(V.angle),fe.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),fe.decay=V.decay,r.spot[C]=fe;const q=V.shadow;if(V.map&&(r.spotLightMap[U]=V.map,U++,q.updateMatrices(V),V.castShadow&&P++),r.spotLightMatrix[C]=q.matrix,V.castShadow){const Y=n.get(V);Y.shadowIntensity=q.intensity,Y.shadowBias=q.bias,Y.shadowNormalBias=q.normalBias,Y.shadowRadius=q.radius,Y.shadowMapSize=q.mapSize,r.spotShadow[C]=Y,r.spotShadowMap[C]=Z,b++}C++}else if(V.isRectAreaLight){const fe=e.get(V);fe.color.copy($).multiplyScalar(ce),fe.halfWidth.set(V.width*.5,0,0),fe.halfHeight.set(0,V.height*.5,0),r.rectArea[_]=fe,_++}else if(V.isPointLight){const fe=e.get(V);if(fe.color.copy(V.color).multiplyScalar(V.intensity),fe.distance=V.distance,fe.decay=V.decay,V.castShadow){const q=V.shadow,Y=n.get(V);Y.shadowIntensity=q.intensity,Y.shadowBias=q.bias,Y.shadowNormalBias=q.normalBias,Y.shadowRadius=q.radius,Y.shadowMapSize=q.mapSize,Y.shadowCameraNear=q.camera.near,Y.shadowCameraFar=q.camera.far,r.pointShadow[A]=Y,r.pointShadowMap[A]=Z,r.pointShadowMatrix[A]=V.shadow.matrix,k++}r.point[A]=fe,A++}else if(V.isHemisphereLight){const fe=e.get(V);fe.skyColor.copy(V.color).multiplyScalar(ce),fe.groundColor.copy(V.groundColor).multiplyScalar(ce),r.hemi[v]=fe,v++}}_>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ie.LTC_FLOAT_1,r.rectAreaLTC2=Ie.LTC_FLOAT_2):(r.rectAreaLTC1=Ie.LTC_HALF_1,r.rectAreaLTC2=Ie.LTC_HALF_2)),r.ambient[0]=S,r.ambient[1]=y,r.ambient[2]=g;const T=r.hash;(T.directionalLength!==M||T.pointLength!==A||T.spotLength!==C||T.rectAreaLength!==_||T.hemiLength!==v||T.numDirectionalShadows!==O||T.numPointShadows!==k||T.numSpotShadows!==b||T.numSpotMaps!==U||T.numLightProbes!==F)&&(r.directional.length=M,r.spot.length=C,r.rectArea.length=_,r.point.length=A,r.hemi.length=v,r.directionalShadow.length=O,r.directionalShadowMap.length=O,r.pointShadow.length=k,r.pointShadowMap.length=k,r.spotShadow.length=b,r.spotShadowMap.length=b,r.directionalShadowMatrix.length=O,r.pointShadowMatrix.length=k,r.spotLightMatrix.length=b+U-P,r.spotLightMap.length=U,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=F,T.directionalLength=M,T.pointLength=A,T.spotLength=C,T.rectAreaLength=_,T.hemiLength=v,T.numDirectionalShadows=O,T.numPointShadows=k,T.numSpotShadows=b,T.numSpotMaps=U,T.numLightProbes=F,r.version=HM++)}function p(m,S){let y=0,g=0,M=0,A=0,C=0;const _=S.matrixWorldInverse;for(let v=0,O=m.length;v<O;v++){const k=m[v];if(k.isDirectionalLight){const b=r.directional[y];b.direction.setFromMatrixPosition(k.matrixWorld),o.setFromMatrixPosition(k.target.matrixWorld),b.direction.sub(o),b.direction.transformDirection(_),y++}else if(k.isSpotLight){const b=r.spot[M];b.position.setFromMatrixPosition(k.matrixWorld),b.position.applyMatrix4(_),b.direction.setFromMatrixPosition(k.matrixWorld),o.setFromMatrixPosition(k.target.matrixWorld),b.direction.sub(o),b.direction.transformDirection(_),M++}else if(k.isRectAreaLight){const b=r.rectArea[A];b.position.setFromMatrixPosition(k.matrixWorld),b.position.applyMatrix4(_),c.identity(),u.copy(k.matrixWorld),u.premultiply(_),c.extractRotation(u),b.halfWidth.set(k.width*.5,0,0),b.halfHeight.set(0,k.height*.5,0),b.halfWidth.applyMatrix4(c),b.halfHeight.applyMatrix4(c),A++}else if(k.isPointLight){const b=r.point[g];b.position.setFromMatrixPosition(k.matrixWorld),b.position.applyMatrix4(_),g++}else if(k.isHemisphereLight){const b=r.hemi[C];b.direction.setFromMatrixPosition(k.matrixWorld),b.direction.transformDirection(_),C++}}}return{setup:d,setupView:p,state:r}}function Xm(s){const e=new WM(s),n=[],r=[],o=[];function u(g){y.camera=g,n.length=0,r.length=0,o.length=0}function c(g){n.push(g)}function d(g){r.push(g)}function p(g){o.push(g)}function m(){e.setup(n)}function S(g){e.setupView(n,g)}const y={lightsArray:n,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:u,state:y,setupLights:m,setupLightsView:S,pushLight:c,pushShadow:d,pushLightProbeGrid:p}}function XM(s){let e=new WeakMap;function n(o,u=0){const c=e.get(o);let d;return c===void 0?(d=new Xm(s),e.set(o,[d])):u>=c.length?(d=new Xm(s),c.push(d)):d=c[u],d}function r(){e=new WeakMap}return{get:n,dispose:r}}const YM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jM=`uniform sampler2D shadow_pass;
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
}`,qM=[new ie(1,0,0),new ie(-1,0,0),new ie(0,1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1)],$M=[new ie(0,-1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1),new ie(0,-1,0),new ie(0,-1,0)],Ym=new Qt,Wa=new ie,cf=new ie;function KM(s,e,n){let r=new S0;const o=new wt,u=new wt,c=new Kt,d=new ux,p=new cx,m={},S=n.maxTextureSize,y={[Pr]:zn,[zn]:Pr,[qi]:qi},g=new Ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new wt},radius:{value:4}},vertexShader:YM,fragmentShader:jM}),M=g.clone();M.defines.HORIZONTAL_PASS=1;const A=new xi;A.setAttribute("position",new si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new tr(A,g),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rl;let v=this.type;this.render=function(P,F,T){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||P.length===0)return;this.type===Qv&&(rt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Rl);const D=s.getRenderTarget(),X=s.getActiveCubeFace(),V=s.getActiveMipmapLevel(),$=s.state;$.setBlending(Ki),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const ce=v!==this.type;ce&&F.traverse(function(ge){ge.material&&(Array.isArray(ge.material)?ge.material.forEach(Z=>Z.needsUpdate=!0):ge.material.needsUpdate=!0)});for(let ge=0,Z=P.length;ge<Z;ge++){const fe=P[ge],q=fe.shadow;if(q===void 0){rt("WebGLShadowMap:",fe,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;o.copy(q.mapSize);const Y=q.getFrameExtents();o.multiply(Y),u.copy(q.mapSize),(o.x>S||o.y>S)&&(o.x>S&&(u.x=Math.floor(S/Y.x),o.x=u.x*Y.x,q.mapSize.x=u.x),o.y>S&&(u.y=Math.floor(S/Y.y),o.y=u.y*Y.y,q.mapSize.y=u.y));const oe=s.state.buffers.depth.getReversed();if(q.camera._reversedDepth=oe,q.map===null||ce===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===Xa){if(fe.isPointLight){rt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new Li(o.x,o.y,{format:ss,type:Ji,minFilter:wn,magFilter:wn,generateMipmaps:!1}),q.map.texture.name=fe.name+".shadowMap",q.map.depthTexture=new Qs(o.x,o.y,Ci),q.map.depthTexture.name=fe.name+".shadowMapDepth",q.map.depthTexture.format=er,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=vn,q.map.depthTexture.magFilter=vn}else fe.isPointLight?(q.map=new R0(o.x),q.map.depthTexture=new ix(o.x,Di)):(q.map=new Li(o.x,o.y),q.map.depthTexture=new Qs(o.x,o.y,Di)),q.map.depthTexture.name=fe.name+".shadowMap",q.map.depthTexture.format=er,this.type===Rl?(q.map.depthTexture.compareFunction=oe?hd:dd,q.map.depthTexture.minFilter=wn,q.map.depthTexture.magFilter=wn):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=vn,q.map.depthTexture.magFilter=vn);q.camera.updateProjectionMatrix()}const le=q.map.isWebGLCubeRenderTarget?6:1;for(let N=0;N<le;N++){if(q.map.isWebGLCubeRenderTarget)s.setRenderTarget(q.map,N),s.clear();else{N===0&&(s.setRenderTarget(q.map),s.clear());const K=q.getViewport(N);c.set(u.x*K.x,u.y*K.y,u.x*K.z,u.y*K.w),$.viewport(c)}if(fe.isPointLight){const K=q.camera,Ne=q.matrix,qe=fe.distance||K.far;qe!==K.far&&(K.far=qe,K.updateProjectionMatrix()),Wa.setFromMatrixPosition(fe.matrixWorld),K.position.copy(Wa),cf.copy(K.position),cf.add(qM[N]),K.up.copy($M[N]),K.lookAt(cf),K.updateMatrixWorld(),Ne.makeTranslation(-Wa.x,-Wa.y,-Wa.z),Ym.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),q._frustum.setFromProjectionMatrix(Ym,K.coordinateSystem,K.reversedDepth)}else q.updateMatrices(fe);r=q.getFrustum(),b(F,T,q.camera,fe,this.type)}q.isPointLightShadow!==!0&&this.type===Xa&&O(q,T),q.needsUpdate=!1}v=this.type,_.needsUpdate=!1,s.setRenderTarget(D,X,V)};function O(P,F){const T=e.update(C);g.defines.VSM_SAMPLES!==P.blurSamples&&(g.defines.VSM_SAMPLES=P.blurSamples,M.defines.VSM_SAMPLES=P.blurSamples,g.needsUpdate=!0,M.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Li(o.x,o.y,{format:ss,type:Ji})),g.uniforms.shadow_pass.value=P.map.depthTexture,g.uniforms.resolution.value=P.mapSize,g.uniforms.radius.value=P.radius,s.setRenderTarget(P.mapPass),s.clear(),s.renderBufferDirect(F,null,T,g,C,null),M.uniforms.shadow_pass.value=P.mapPass.texture,M.uniforms.resolution.value=P.mapSize,M.uniforms.radius.value=P.radius,s.setRenderTarget(P.map),s.clear(),s.renderBufferDirect(F,null,T,M,C,null)}function k(P,F,T,D){let X=null;const V=T.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(V!==void 0)X=V;else if(X=T.isPointLight===!0?p:d,s.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const $=X.uuid,ce=F.uuid;let ge=m[$];ge===void 0&&(ge={},m[$]=ge);let Z=ge[ce];Z===void 0&&(Z=X.clone(),ge[ce]=Z,F.addEventListener("dispose",U)),X=Z}if(X.visible=F.visible,X.wireframe=F.wireframe,D===Xa?X.side=F.shadowSide!==null?F.shadowSide:F.side:X.side=F.shadowSide!==null?F.shadowSide:y[F.side],X.alphaMap=F.alphaMap,X.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,X.map=F.map,X.clipShadows=F.clipShadows,X.clippingPlanes=F.clippingPlanes,X.clipIntersection=F.clipIntersection,X.displacementMap=F.displacementMap,X.displacementScale=F.displacementScale,X.displacementBias=F.displacementBias,X.wireframeLinewidth=F.wireframeLinewidth,X.linewidth=F.linewidth,T.isPointLight===!0&&X.isMeshDistanceMaterial===!0){const $=s.properties.get(X);$.light=T}return X}function b(P,F,T,D,X){if(P.visible===!1)return;if(P.layers.test(F.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&X===Xa)&&(!P.frustumCulled||r.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,P.matrixWorld);const ce=e.update(P),ge=P.material;if(Array.isArray(ge)){const Z=ce.groups;for(let fe=0,q=Z.length;fe<q;fe++){const Y=Z[fe],oe=ge[Y.materialIndex];if(oe&&oe.visible){const le=k(P,oe,D,X);P.onBeforeShadow(s,P,F,T,ce,le,Y),s.renderBufferDirect(T,null,ce,le,P,Y),P.onAfterShadow(s,P,F,T,ce,le,Y)}}}else if(ge.visible){const Z=k(P,ge,D,X);P.onBeforeShadow(s,P,F,T,ce,Z,null),s.renderBufferDirect(T,null,ce,Z,P,null),P.onAfterShadow(s,P,F,T,ce,Z,null)}}const $=P.children;for(let ce=0,ge=$.length;ce<ge;ce++)b($[ce],F,T,D,X)}function U(P){P.target.removeEventListener("dispose",U);for(const T in m){const D=m[T],X=P.target.uuid;X in D&&(D[X].dispose(),delete D[X])}}}function ZM(s,e){function n(){let z=!1;const Ae=new Kt;let he=null;const Re=new Kt(0,0,0,0);return{setMask:function(De){he!==De&&!z&&(s.colorMask(De,De,De,De),he=De)},setLocked:function(De){z=De},setClear:function(De,ve,Ge,Ve,Dt){Dt===!0&&(De*=Ve,ve*=Ve,Ge*=Ve),Ae.set(De,ve,Ge,Ve),Re.equals(Ae)===!1&&(s.clearColor(De,ve,Ge,Ve),Re.copy(Ae))},reset:function(){z=!1,he=null,Re.set(-1,0,0,0)}}}function r(){let z=!1,Ae=!1,he=null,Re=null,De=null;return{setReversed:function(ve){if(Ae!==ve){const Ge=e.get("EXT_clip_control");ve?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT),Ae=ve;const Ve=De;De=null,this.setClear(Ve)}},getReversed:function(){return Ae},setTest:function(ve){ve?pe(s.DEPTH_TEST):Ue(s.DEPTH_TEST)},setMask:function(ve){he!==ve&&!z&&(s.depthMask(ve),he=ve)},setFunc:function(ve){if(Ae&&(ve=L_[ve]),Re!==ve){switch(ve){case pf:s.depthFunc(s.NEVER);break;case mf:s.depthFunc(s.ALWAYS);break;case gf:s.depthFunc(s.LESS);break;case Ks:s.depthFunc(s.LEQUAL);break;case vf:s.depthFunc(s.EQUAL);break;case _f:s.depthFunc(s.GEQUAL);break;case xf:s.depthFunc(s.GREATER);break;case Sf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Re=ve}},setLocked:function(ve){z=ve},setClear:function(ve){De!==ve&&(De=ve,Ae&&(ve=1-ve),s.clearDepth(ve))},reset:function(){z=!1,he=null,Re=null,De=null,Ae=!1}}}function o(){let z=!1,Ae=null,he=null,Re=null,De=null,ve=null,Ge=null,Ve=null,Dt=null;return{setTest:function(At){z||(At?pe(s.STENCIL_TEST):Ue(s.STENCIL_TEST))},setMask:function(At){Ae!==At&&!z&&(s.stencilMask(At),Ae=At)},setFunc:function(At,_n,qn){(he!==At||Re!==_n||De!==qn)&&(s.stencilFunc(At,_n,qn),he=At,Re=_n,De=qn)},setOp:function(At,_n,qn){(ve!==At||Ge!==_n||Ve!==qn)&&(s.stencilOp(At,_n,qn),ve=At,Ge=_n,Ve=qn)},setLocked:function(At){z=At},setClear:function(At){Dt!==At&&(s.clearStencil(At),Dt=At)},reset:function(){z=!1,Ae=null,he=null,Re=null,De=null,ve=null,Ge=null,Ve=null,Dt=null}}}const u=new n,c=new r,d=new o,p=new WeakMap,m=new WeakMap;let S={},y={},g={},M=new WeakMap,A=[],C=null,_=!1,v=null,O=null,k=null,b=null,U=null,P=null,F=null,T=new yt(0,0,0),D=0,X=!1,V=null,$=null,ce=null,ge=null,Z=null;const fe=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,Y=0;const oe=s.getParameter(s.VERSION);oe.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(oe)[1]),q=Y>=1):oe.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(oe)[1]),q=Y>=2);let le=null,N={};const K=s.getParameter(s.SCISSOR_BOX),Ne=s.getParameter(s.VIEWPORT),qe=new Kt().fromArray(K),ze=new Kt().fromArray(Ne);function re(z,Ae,he,Re){const De=new Uint8Array(4),ve=s.createTexture();s.bindTexture(z,ve),s.texParameteri(z,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(z,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ge=0;Ge<he;Ge++)z===s.TEXTURE_3D||z===s.TEXTURE_2D_ARRAY?s.texImage3D(Ae,0,s.RGBA,1,1,Re,0,s.RGBA,s.UNSIGNED_BYTE,De):s.texImage2D(Ae+Ge,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,De);return ve}const _e={};_e[s.TEXTURE_2D]=re(s.TEXTURE_2D,s.TEXTURE_2D,1),_e[s.TEXTURE_CUBE_MAP]=re(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),_e[s.TEXTURE_2D_ARRAY]=re(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),_e[s.TEXTURE_3D]=re(s.TEXTURE_3D,s.TEXTURE_3D,1,1),u.setClear(0,0,0,1),c.setClear(1),d.setClear(0),pe(s.DEPTH_TEST),c.setFunc(Ks),Bt(!1),jt(qp),pe(s.CULL_FACE),vt(Ki);function pe(z){S[z]!==!0&&(s.enable(z),S[z]=!0)}function Ue(z){S[z]!==!1&&(s.disable(z),S[z]=!1)}function Qe(z,Ae){return g[z]!==Ae?(s.bindFramebuffer(z,Ae),g[z]=Ae,z===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Ae),z===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Ae),!0):!1}function Je(z,Ae){let he=A,Re=!1;if(z){he=M.get(Ae),he===void 0&&(he=[],M.set(Ae,he));const De=z.textures;if(he.length!==De.length||he[0]!==s.COLOR_ATTACHMENT0){for(let ve=0,Ge=De.length;ve<Ge;ve++)he[ve]=s.COLOR_ATTACHMENT0+ve;he.length=De.length,Re=!0}}else he[0]!==s.BACK&&(he[0]=s.BACK,Re=!0);Re&&s.drawBuffers(he)}function kt(z){return C!==z?(s.useProgram(z),C=z,!0):!1}const ut={[es]:s.FUNC_ADD,[e_]:s.FUNC_SUBTRACT,[t_]:s.FUNC_REVERSE_SUBTRACT};ut[n_]=s.MIN,ut[i_]=s.MAX;const Tt={[r_]:s.ZERO,[s_]:s.ONE,[a_]:s.SRC_COLOR,[df]:s.SRC_ALPHA,[d_]:s.SRC_ALPHA_SATURATE,[c_]:s.DST_COLOR,[l_]:s.DST_ALPHA,[o_]:s.ONE_MINUS_SRC_COLOR,[hf]:s.ONE_MINUS_SRC_ALPHA,[f_]:s.ONE_MINUS_DST_COLOR,[u_]:s.ONE_MINUS_DST_ALPHA,[h_]:s.CONSTANT_COLOR,[p_]:s.ONE_MINUS_CONSTANT_COLOR,[m_]:s.CONSTANT_ALPHA,[g_]:s.ONE_MINUS_CONSTANT_ALPHA};function vt(z,Ae,he,Re,De,ve,Ge,Ve,Dt,At){if(z===Ki){_===!0&&(Ue(s.BLEND),_=!1);return}if(_===!1&&(pe(s.BLEND),_=!0),z!==Jv){if(z!==v||At!==X){if((O!==es||U!==es)&&(s.blendEquation(s.FUNC_ADD),O=es,U=es),At)switch(z){case js:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ff:s.blendFunc(s.ONE,s.ONE);break;case $p:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Kp:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:St("WebGLState: Invalid blending: ",z);break}else switch(z){case js:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ff:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case $p:St("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Kp:St("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:St("WebGLState: Invalid blending: ",z);break}k=null,b=null,P=null,F=null,T.set(0,0,0),D=0,v=z,X=At}return}De=De||Ae,ve=ve||he,Ge=Ge||Re,(Ae!==O||De!==U)&&(s.blendEquationSeparate(ut[Ae],ut[De]),O=Ae,U=De),(he!==k||Re!==b||ve!==P||Ge!==F)&&(s.blendFuncSeparate(Tt[he],Tt[Re],Tt[ve],Tt[Ge]),k=he,b=Re,P=ve,F=Ge),(Ve.equals(T)===!1||Dt!==D)&&(s.blendColor(Ve.r,Ve.g,Ve.b,Dt),T.copy(Ve),D=Dt),v=z,X=!1}function pt(z,Ae){z.side===qi?Ue(s.CULL_FACE):pe(s.CULL_FACE);let he=z.side===zn;Ae&&(he=!he),Bt(he),z.blending===js&&z.transparent===!1?vt(Ki):vt(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),c.setFunc(z.depthFunc),c.setTest(z.depthTest),c.setMask(z.depthWrite),u.setMask(z.colorWrite);const Re=z.stencilWrite;d.setTest(Re),Re&&(d.setMask(z.stencilWriteMask),d.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),d.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Gt(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?pe(s.SAMPLE_ALPHA_TO_COVERAGE):Ue(s.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(z){V!==z&&(z?s.frontFace(s.CW):s.frontFace(s.CCW),V=z)}function jt(z){z!==Kv?(pe(s.CULL_FACE),z!==$&&(z===qp?s.cullFace(s.BACK):z===Zv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ue(s.CULL_FACE),$=z}function qt(z){z!==ce&&(q&&s.lineWidth(z),ce=z)}function Gt(z,Ae,he){z?(pe(s.POLYGON_OFFSET_FILL),(ge!==Ae||Z!==he)&&(ge=Ae,Z=he,c.getReversed()&&(Ae=-Ae),s.polygonOffset(Ae,he))):Ue(s.POLYGON_OFFSET_FILL)}function Ct(z){z?pe(s.SCISSOR_TEST):Ue(s.SCISSOR_TEST)}function zt(z){z===void 0&&(z=s.TEXTURE0+fe-1),le!==z&&(s.activeTexture(z),le=z)}function G(z,Ae,he){he===void 0&&(le===null?he=s.TEXTURE0+fe-1:he=le);let Re=N[he];Re===void 0&&(Re={type:void 0,texture:void 0},N[he]=Re),(Re.type!==z||Re.texture!==Ae)&&(le!==he&&(s.activeTexture(he),le=he),s.bindTexture(z,Ae||_e[z]),Re.type=z,Re.texture=Ae)}function dn(){const z=N[le];z!==void 0&&z.type!==void 0&&(s.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function Mt(){try{s.compressedTexImage2D(...arguments)}catch(z){St("WebGLState:",z)}}function R(){try{s.compressedTexImage3D(...arguments)}catch(z){St("WebGLState:",z)}}function x(){try{s.texSubImage2D(...arguments)}catch(z){St("WebGLState:",z)}}function j(){try{s.texSubImage3D(...arguments)}catch(z){St("WebGLState:",z)}}function ne(){try{s.compressedTexSubImage2D(...arguments)}catch(z){St("WebGLState:",z)}}function ue(){try{s.compressedTexSubImage3D(...arguments)}catch(z){St("WebGLState:",z)}}function Me(){try{s.texStorage2D(...arguments)}catch(z){St("WebGLState:",z)}}function Ce(){try{s.texStorage3D(...arguments)}catch(z){St("WebGLState:",z)}}function de(){try{s.texImage2D(...arguments)}catch(z){St("WebGLState:",z)}}function me(){try{s.texImage3D(...arguments)}catch(z){St("WebGLState:",z)}}function Pe(z){return y[z]!==void 0?y[z]:s.getParameter(z)}function Ye(z,Ae){y[z]!==Ae&&(s.pixelStorei(z,Ae),y[z]=Ae)}function Le(z){qe.equals(z)===!1&&(s.scissor(z.x,z.y,z.z,z.w),qe.copy(z))}function be(z){ze.equals(z)===!1&&(s.viewport(z.x,z.y,z.z,z.w),ze.copy(z))}function Ze(z,Ae){let he=m.get(Ae);he===void 0&&(he=new WeakMap,m.set(Ae,he));let Re=he.get(z);Re===void 0&&(Re=s.getUniformBlockIndex(Ae,z.name),he.set(z,Re))}function et(z,Ae){const Re=m.get(Ae).get(z);p.get(Ae)!==Re&&(s.uniformBlockBinding(Ae,Re,z.__bindingPointIndex),p.set(Ae,Re))}function it(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),S={},y={},le=null,N={},g={},M=new WeakMap,A=[],C=null,_=!1,v=null,O=null,k=null,b=null,U=null,P=null,F=null,T=new yt(0,0,0),D=0,X=!1,V=null,$=null,ce=null,ge=null,Z=null,qe.set(0,0,s.canvas.width,s.canvas.height),ze.set(0,0,s.canvas.width,s.canvas.height),u.reset(),c.reset(),d.reset()}return{buffers:{color:u,depth:c,stencil:d},enable:pe,disable:Ue,bindFramebuffer:Qe,drawBuffers:Je,useProgram:kt,setBlending:vt,setMaterial:pt,setFlipSided:Bt,setCullFace:jt,setLineWidth:qt,setPolygonOffset:Gt,setScissorTest:Ct,activeTexture:zt,bindTexture:G,unbindTexture:dn,compressedTexImage2D:Mt,compressedTexImage3D:R,texImage2D:de,texImage3D:me,pixelStorei:Ye,getParameter:Pe,updateUBOMapping:Ze,uniformBlockBinding:et,texStorage2D:Me,texStorage3D:Ce,texSubImage2D:x,texSubImage3D:j,compressedTexSubImage2D:ne,compressedTexSubImage3D:ue,scissor:Le,viewport:be,reset:it}}function QM(s,e,n,r,o,u,c){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new wt,S=new WeakMap,y=new Set;let g;const M=new WeakMap;let A=!1;try{A=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(R,x){return A?new OffscreenCanvas(R,x):Hl("canvas")}function _(R,x,j){let ne=1;const ue=Mt(R);if((ue.width>j||ue.height>j)&&(ne=j/Math.max(ue.width,ue.height)),ne<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Me=Math.floor(ne*ue.width),Ce=Math.floor(ne*ue.height);g===void 0&&(g=C(Me,Ce));const de=x?C(Me,Ce):g;return de.width=Me,de.height=Ce,de.getContext("2d").drawImage(R,0,0,Me,Ce),rt("WebGLRenderer: Texture has been resized from ("+ue.width+"x"+ue.height+") to ("+Me+"x"+Ce+")."),de}else return"data"in R&&rt("WebGLRenderer: Image in DataTexture is too big ("+ue.width+"x"+ue.height+")."),R;return R}function v(R){return R.generateMipmaps}function O(R){s.generateMipmap(R)}function k(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(R,x,j,ne,ue,Me=!1){if(R!==null){if(s[R]!==void 0)return s[R];rt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Ce;ne&&(Ce=e.get("EXT_texture_norm16"),Ce||rt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let de=x;if(x===s.RED&&(j===s.FLOAT&&(de=s.R32F),j===s.HALF_FLOAT&&(de=s.R16F),j===s.UNSIGNED_BYTE&&(de=s.R8),j===s.UNSIGNED_SHORT&&Ce&&(de=Ce.R16_EXT),j===s.SHORT&&Ce&&(de=Ce.R16_SNORM_EXT)),x===s.RED_INTEGER&&(j===s.UNSIGNED_BYTE&&(de=s.R8UI),j===s.UNSIGNED_SHORT&&(de=s.R16UI),j===s.UNSIGNED_INT&&(de=s.R32UI),j===s.BYTE&&(de=s.R8I),j===s.SHORT&&(de=s.R16I),j===s.INT&&(de=s.R32I)),x===s.RG&&(j===s.FLOAT&&(de=s.RG32F),j===s.HALF_FLOAT&&(de=s.RG16F),j===s.UNSIGNED_BYTE&&(de=s.RG8),j===s.UNSIGNED_SHORT&&Ce&&(de=Ce.RG16_EXT),j===s.SHORT&&Ce&&(de=Ce.RG16_SNORM_EXT)),x===s.RG_INTEGER&&(j===s.UNSIGNED_BYTE&&(de=s.RG8UI),j===s.UNSIGNED_SHORT&&(de=s.RG16UI),j===s.UNSIGNED_INT&&(de=s.RG32UI),j===s.BYTE&&(de=s.RG8I),j===s.SHORT&&(de=s.RG16I),j===s.INT&&(de=s.RG32I)),x===s.RGB_INTEGER&&(j===s.UNSIGNED_BYTE&&(de=s.RGB8UI),j===s.UNSIGNED_SHORT&&(de=s.RGB16UI),j===s.UNSIGNED_INT&&(de=s.RGB32UI),j===s.BYTE&&(de=s.RGB8I),j===s.SHORT&&(de=s.RGB16I),j===s.INT&&(de=s.RGB32I)),x===s.RGBA_INTEGER&&(j===s.UNSIGNED_BYTE&&(de=s.RGBA8UI),j===s.UNSIGNED_SHORT&&(de=s.RGBA16UI),j===s.UNSIGNED_INT&&(de=s.RGBA32UI),j===s.BYTE&&(de=s.RGBA8I),j===s.SHORT&&(de=s.RGBA16I),j===s.INT&&(de=s.RGBA32I)),x===s.RGB&&(j===s.UNSIGNED_SHORT&&Ce&&(de=Ce.RGB16_EXT),j===s.SHORT&&Ce&&(de=Ce.RGB16_SNORM_EXT),j===s.UNSIGNED_INT_5_9_9_9_REV&&(de=s.RGB9_E5),j===s.UNSIGNED_INT_10F_11F_11F_REV&&(de=s.R11F_G11F_B10F)),x===s.RGBA){const me=Me?zl:mt.getTransfer(ue);j===s.FLOAT&&(de=s.RGBA32F),j===s.HALF_FLOAT&&(de=s.RGBA16F),j===s.UNSIGNED_BYTE&&(de=me===Lt?s.SRGB8_ALPHA8:s.RGBA8),j===s.UNSIGNED_SHORT&&Ce&&(de=Ce.RGBA16_EXT),j===s.SHORT&&Ce&&(de=Ce.RGBA16_SNORM_EXT),j===s.UNSIGNED_SHORT_4_4_4_4&&(de=s.RGBA4),j===s.UNSIGNED_SHORT_5_5_5_1&&(de=s.RGB5_A1)}return(de===s.R16F||de===s.R32F||de===s.RG16F||de===s.RG32F||de===s.RGBA16F||de===s.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function U(R,x){let j;return R?x===null||x===Di||x===qa?j=s.DEPTH24_STENCIL8:x===Ci?j=s.DEPTH32F_STENCIL8:x===ja&&(j=s.DEPTH24_STENCIL8,rt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Di||x===qa?j=s.DEPTH_COMPONENT24:x===Ci?j=s.DEPTH_COMPONENT32F:x===ja&&(j=s.DEPTH_COMPONENT16),j}function P(R,x){return v(R)===!0||R.isFramebufferTexture&&R.minFilter!==vn&&R.minFilter!==wn?Math.log2(Math.max(x.width,x.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?x.mipmaps.length:1}function F(R){const x=R.target;x.removeEventListener("dispose",F),D(x),x.isVideoTexture&&S.delete(x),x.isHTMLTexture&&y.delete(x)}function T(R){const x=R.target;x.removeEventListener("dispose",T),V(x)}function D(R){const x=r.get(R);if(x.__webglInit===void 0)return;const j=R.source,ne=M.get(j);if(ne){const ue=ne[x.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&X(R),Object.keys(ne).length===0&&M.delete(j)}r.remove(R)}function X(R){const x=r.get(R);s.deleteTexture(x.__webglTexture);const j=R.source,ne=M.get(j);delete ne[x.__cacheKey],c.memory.textures--}function V(R){const x=r.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),r.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(x.__webglFramebuffer[ne]))for(let ue=0;ue<x.__webglFramebuffer[ne].length;ue++)s.deleteFramebuffer(x.__webglFramebuffer[ne][ue]);else s.deleteFramebuffer(x.__webglFramebuffer[ne]);x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer[ne])}else{if(Array.isArray(x.__webglFramebuffer))for(let ne=0;ne<x.__webglFramebuffer.length;ne++)s.deleteFramebuffer(x.__webglFramebuffer[ne]);else s.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&s.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let ne=0;ne<x.__webglColorRenderbuffer.length;ne++)x.__webglColorRenderbuffer[ne]&&s.deleteRenderbuffer(x.__webglColorRenderbuffer[ne]);x.__webglDepthRenderbuffer&&s.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const j=R.textures;for(let ne=0,ue=j.length;ne<ue;ne++){const Me=r.get(j[ne]);Me.__webglTexture&&(s.deleteTexture(Me.__webglTexture),c.memory.textures--),r.remove(j[ne])}r.remove(R)}let $=0;function ce(){$=0}function ge(){return $}function Z(R){$=R}function fe(){const R=$;return R>=o.maxTextures&&rt("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+o.maxTextures),$+=1,R}function q(R){const x=[];return x.push(R.wrapS),x.push(R.wrapT),x.push(R.wrapR||0),x.push(R.magFilter),x.push(R.minFilter),x.push(R.anisotropy),x.push(R.internalFormat),x.push(R.format),x.push(R.type),x.push(R.generateMipmaps),x.push(R.premultiplyAlpha),x.push(R.flipY),x.push(R.unpackAlignment),x.push(R.colorSpace),x.join()}function Y(R,x){const j=r.get(R);if(R.isVideoTexture&&G(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&j.__version!==R.version){const ne=R.image;if(ne===null)rt("WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)rt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ue(j,R,x);return}}else R.isExternalTexture&&(j.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(s.TEXTURE_2D,j.__webglTexture,s.TEXTURE0+x)}function oe(R,x){const j=r.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&j.__version!==R.version){Ue(j,R,x);return}else R.isExternalTexture&&(j.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(s.TEXTURE_2D_ARRAY,j.__webglTexture,s.TEXTURE0+x)}function le(R,x){const j=r.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&j.__version!==R.version){Ue(j,R,x);return}n.bindTexture(s.TEXTURE_3D,j.__webglTexture,s.TEXTURE0+x)}function N(R,x){const j=r.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&j.__version!==R.version){Qe(j,R,x);return}n.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture,s.TEXTURE0+x)}const K={[yf]:s.REPEAT,[$i]:s.CLAMP_TO_EDGE,[Mf]:s.MIRRORED_REPEAT},Ne={[vn]:s.NEAREST,[x_]:s.NEAREST_MIPMAP_NEAREST,[rl]:s.NEAREST_MIPMAP_LINEAR,[wn]:s.LINEAR,[Ic]:s.LINEAR_MIPMAP_NEAREST,[ns]:s.LINEAR_MIPMAP_LINEAR},qe={[M_]:s.NEVER,[b_]:s.ALWAYS,[E_]:s.LESS,[dd]:s.LEQUAL,[T_]:s.EQUAL,[hd]:s.GEQUAL,[w_]:s.GREATER,[A_]:s.NOTEQUAL};function ze(R,x){if(x.type===Ci&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===wn||x.magFilter===Ic||x.magFilter===rl||x.magFilter===ns||x.minFilter===wn||x.minFilter===Ic||x.minFilter===rl||x.minFilter===ns)&&rt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,K[x.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,K[x.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,K[x.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,Ne[x.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,Ne[x.minFilter]),x.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,qe[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===vn||x.minFilter!==rl&&x.minFilter!==ns||x.type===Ci&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||r.get(x).__currentAnisotropy){const j=e.get("EXT_texture_filter_anisotropic");s.texParameterf(R,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,o.getMaxAnisotropy())),r.get(x).__currentAnisotropy=x.anisotropy}}}function re(R,x){let j=!1;R.__webglInit===void 0&&(R.__webglInit=!0,x.addEventListener("dispose",F));const ne=x.source;let ue=M.get(ne);ue===void 0&&(ue={},M.set(ne,ue));const Me=q(x);if(Me!==R.__cacheKey){ue[Me]===void 0&&(ue[Me]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,j=!0),ue[Me].usedTimes++;const Ce=ue[R.__cacheKey];Ce!==void 0&&(ue[R.__cacheKey].usedTimes--,Ce.usedTimes===0&&X(x)),R.__cacheKey=Me,R.__webglTexture=ue[Me].texture}return j}function _e(R,x,j){return Math.floor(Math.floor(R/j)/x)}function pe(R,x,j,ne){const Me=R.updateRanges;if(Me.length===0)n.texSubImage2D(s.TEXTURE_2D,0,0,0,x.width,x.height,j,ne,x.data);else{Me.sort((Ye,Le)=>Ye.start-Le.start);let Ce=0;for(let Ye=1;Ye<Me.length;Ye++){const Le=Me[Ce],be=Me[Ye],Ze=Le.start+Le.count,et=_e(be.start,x.width,4),it=_e(Le.start,x.width,4);be.start<=Ze+1&&et===it&&_e(be.start+be.count-1,x.width,4)===et?Le.count=Math.max(Le.count,be.start+be.count-Le.start):(++Ce,Me[Ce]=be)}Me.length=Ce+1;const de=n.getParameter(s.UNPACK_ROW_LENGTH),me=n.getParameter(s.UNPACK_SKIP_PIXELS),Pe=n.getParameter(s.UNPACK_SKIP_ROWS);n.pixelStorei(s.UNPACK_ROW_LENGTH,x.width);for(let Ye=0,Le=Me.length;Ye<Le;Ye++){const be=Me[Ye],Ze=Math.floor(be.start/4),et=Math.ceil(be.count/4),it=Ze%x.width,z=Math.floor(Ze/x.width),Ae=et,he=1;n.pixelStorei(s.UNPACK_SKIP_PIXELS,it),n.pixelStorei(s.UNPACK_SKIP_ROWS,z),n.texSubImage2D(s.TEXTURE_2D,0,it,z,Ae,he,j,ne,x.data)}R.clearUpdateRanges(),n.pixelStorei(s.UNPACK_ROW_LENGTH,de),n.pixelStorei(s.UNPACK_SKIP_PIXELS,me),n.pixelStorei(s.UNPACK_SKIP_ROWS,Pe)}}function Ue(R,x,j){let ne=s.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(ne=s.TEXTURE_2D_ARRAY),x.isData3DTexture&&(ne=s.TEXTURE_3D);const ue=re(R,x),Me=x.source;n.bindTexture(ne,R.__webglTexture,s.TEXTURE0+j);const Ce=r.get(Me);if(Me.version!==Ce.__version||ue===!0){if(n.activeTexture(s.TEXTURE0+j),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){const he=mt.getPrimaries(mt.workingColorSpace),Re=x.colorSpace===br?null:mt.getPrimaries(x.colorSpace),De=x.colorSpace===br||he===Re?s.NONE:s.BROWSER_DEFAULT_WEBGL;n.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,De)}n.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment);let me=_(x.image,!1,o.maxTextureSize);me=dn(x,me);const Pe=u.convert(x.format,x.colorSpace),Ye=u.convert(x.type);let Le=b(x.internalFormat,Pe,Ye,x.normalized,x.colorSpace,x.isVideoTexture);ze(ne,x);let be;const Ze=x.mipmaps,et=x.isVideoTexture!==!0,it=Ce.__version===void 0||ue===!0,z=Me.dataReady,Ae=P(x,me);if(x.isDepthTexture)Le=U(x.format===is,x.type),it&&(et?n.texStorage2D(s.TEXTURE_2D,1,Le,me.width,me.height):n.texImage2D(s.TEXTURE_2D,0,Le,me.width,me.height,0,Pe,Ye,null));else if(x.isDataTexture)if(Ze.length>0){et&&it&&n.texStorage2D(s.TEXTURE_2D,Ae,Le,Ze[0].width,Ze[0].height);for(let he=0,Re=Ze.length;he<Re;he++)be=Ze[he],et?z&&n.texSubImage2D(s.TEXTURE_2D,he,0,0,be.width,be.height,Pe,Ye,be.data):n.texImage2D(s.TEXTURE_2D,he,Le,be.width,be.height,0,Pe,Ye,be.data);x.generateMipmaps=!1}else et?(it&&n.texStorage2D(s.TEXTURE_2D,Ae,Le,me.width,me.height),z&&pe(x,me,Pe,Ye)):n.texImage2D(s.TEXTURE_2D,0,Le,me.width,me.height,0,Pe,Ye,me.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){et&&it&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ae,Le,Ze[0].width,Ze[0].height,me.depth);for(let he=0,Re=Ze.length;he<Re;he++)if(be=Ze[he],x.format!==_i)if(Pe!==null)if(et){if(z)if(x.layerUpdates.size>0){const De=Em(be.width,be.height,x.format,x.type);for(const ve of x.layerUpdates){const Ge=be.data.subarray(ve*De/be.data.BYTES_PER_ELEMENT,(ve+1)*De/be.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,he,0,0,ve,be.width,be.height,1,Pe,Ge)}x.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,he,0,0,0,be.width,be.height,me.depth,Pe,be.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,he,Le,be.width,be.height,me.depth,0,be.data,0,0);else rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else et?z&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,he,0,0,0,be.width,be.height,me.depth,Pe,Ye,be.data):n.texImage3D(s.TEXTURE_2D_ARRAY,he,Le,be.width,be.height,me.depth,0,Pe,Ye,be.data)}else{et&&it&&n.texStorage2D(s.TEXTURE_2D,Ae,Le,Ze[0].width,Ze[0].height);for(let he=0,Re=Ze.length;he<Re;he++)be=Ze[he],x.format!==_i?Pe!==null?et?z&&n.compressedTexSubImage2D(s.TEXTURE_2D,he,0,0,be.width,be.height,Pe,be.data):n.compressedTexImage2D(s.TEXTURE_2D,he,Le,be.width,be.height,0,be.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?z&&n.texSubImage2D(s.TEXTURE_2D,he,0,0,be.width,be.height,Pe,Ye,be.data):n.texImage2D(s.TEXTURE_2D,he,Le,be.width,be.height,0,Pe,Ye,be.data)}else if(x.isDataArrayTexture)if(et){if(it&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ae,Le,me.width,me.height,me.depth),z)if(x.layerUpdates.size>0){const he=Em(me.width,me.height,x.format,x.type);for(const Re of x.layerUpdates){const De=me.data.subarray(Re*he/me.data.BYTES_PER_ELEMENT,(Re+1)*he/me.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Re,me.width,me.height,1,Pe,Ye,De)}x.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,Pe,Ye,me.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,Le,me.width,me.height,me.depth,0,Pe,Ye,me.data);else if(x.isData3DTexture)et?(it&&n.texStorage3D(s.TEXTURE_3D,Ae,Le,me.width,me.height,me.depth),z&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,Pe,Ye,me.data)):n.texImage3D(s.TEXTURE_3D,0,Le,me.width,me.height,me.depth,0,Pe,Ye,me.data);else if(x.isFramebufferTexture){if(it)if(et)n.texStorage2D(s.TEXTURE_2D,Ae,Le,me.width,me.height);else{let he=me.width,Re=me.height;for(let De=0;De<Ae;De++)n.texImage2D(s.TEXTURE_2D,De,Le,he,Re,0,Pe,Ye,null),he>>=1,Re>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in s){const he=s.canvas;if(he.hasAttribute("layoutsubtree")||he.setAttribute("layoutsubtree","true"),me.parentNode!==he){he.appendChild(me),y.add(x),he.onpaint=Re=>{const De=Re.changedElements;for(const ve of y)De.includes(ve.image)&&(ve.needsUpdate=!0)},he.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,me);else{const De=s.RGBA,ve=s.RGBA,Ge=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,De,ve,Ge,me)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Ze.length>0){if(et&&it){const he=Mt(Ze[0]);n.texStorage2D(s.TEXTURE_2D,Ae,Le,he.width,he.height)}for(let he=0,Re=Ze.length;he<Re;he++)be=Ze[he],et?z&&n.texSubImage2D(s.TEXTURE_2D,he,0,0,Pe,Ye,be):n.texImage2D(s.TEXTURE_2D,he,Le,Pe,Ye,be);x.generateMipmaps=!1}else if(et){if(it){const he=Mt(me);n.texStorage2D(s.TEXTURE_2D,Ae,Le,he.width,he.height)}z&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Pe,Ye,me)}else n.texImage2D(s.TEXTURE_2D,0,Le,Pe,Ye,me);v(x)&&O(ne),Ce.__version=Me.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function Qe(R,x,j){if(x.image.length!==6)return;const ne=re(R,x),ue=x.source;n.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+j);const Me=r.get(ue);if(ue.version!==Me.__version||ne===!0){n.activeTexture(s.TEXTURE0+j);const Ce=mt.getPrimaries(mt.workingColorSpace),de=x.colorSpace===br?null:mt.getPrimaries(x.colorSpace),me=x.colorSpace===br||Ce===de?s.NONE:s.BROWSER_DEFAULT_WEBGL;n.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Pe=x.isCompressedTexture||x.image[0].isCompressedTexture,Ye=x.image[0]&&x.image[0].isDataTexture,Le=[];for(let ve=0;ve<6;ve++)!Pe&&!Ye?Le[ve]=_(x.image[ve],!0,o.maxCubemapSize):Le[ve]=Ye?x.image[ve].image:x.image[ve],Le[ve]=dn(x,Le[ve]);const be=Le[0],Ze=u.convert(x.format,x.colorSpace),et=u.convert(x.type),it=b(x.internalFormat,Ze,et,x.normalized,x.colorSpace),z=x.isVideoTexture!==!0,Ae=Me.__version===void 0||ne===!0,he=ue.dataReady;let Re=P(x,be);ze(s.TEXTURE_CUBE_MAP,x);let De;if(Pe){z&&Ae&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Re,it,be.width,be.height);for(let ve=0;ve<6;ve++){De=Le[ve].mipmaps;for(let Ge=0;Ge<De.length;Ge++){const Ve=De[Ge];x.format!==_i?Ze!==null?z?he&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ge,0,0,Ve.width,Ve.height,Ze,Ve.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ge,it,Ve.width,Ve.height,0,Ve.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?he&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ge,0,0,Ve.width,Ve.height,Ze,et,Ve.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ge,it,Ve.width,Ve.height,0,Ze,et,Ve.data)}}}else{if(De=x.mipmaps,z&&Ae){De.length>0&&Re++;const ve=Mt(Le[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Re,it,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(Ye){z?he&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Le[ve].width,Le[ve].height,Ze,et,Le[ve].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,it,Le[ve].width,Le[ve].height,0,Ze,et,Le[ve].data);for(let Ge=0;Ge<De.length;Ge++){const Dt=De[Ge].image[ve].image;z?he&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ge+1,0,0,Dt.width,Dt.height,Ze,et,Dt.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ge+1,it,Dt.width,Dt.height,0,Ze,et,Dt.data)}}else{z?he&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Ze,et,Le[ve]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,it,Ze,et,Le[ve]);for(let Ge=0;Ge<De.length;Ge++){const Ve=De[Ge];z?he&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ge+1,0,0,Ze,et,Ve.image[ve]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ge+1,it,Ze,et,Ve.image[ve])}}}v(x)&&O(s.TEXTURE_CUBE_MAP),Me.__version=ue.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function Je(R,x,j,ne,ue,Me){const Ce=u.convert(j.format,j.colorSpace),de=u.convert(j.type),me=b(j.internalFormat,Ce,de,j.normalized,j.colorSpace),Pe=r.get(x),Ye=r.get(j);if(Ye.__renderTarget=x,!Pe.__hasExternalTextures){const Le=Math.max(1,x.width>>Me),be=Math.max(1,x.height>>Me);ue===s.TEXTURE_3D||ue===s.TEXTURE_2D_ARRAY?n.texImage3D(ue,Me,me,Le,be,x.depth,0,Ce,de,null):n.texImage2D(ue,Me,me,Le,be,0,Ce,de,null)}n.bindFramebuffer(s.FRAMEBUFFER,R),zt(x)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ne,ue,Ye.__webglTexture,0,Ct(x)):(ue===s.TEXTURE_2D||ue>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ne,ue,Ye.__webglTexture,Me),n.bindFramebuffer(s.FRAMEBUFFER,null)}function kt(R,x,j){if(s.bindRenderbuffer(s.RENDERBUFFER,R),x.depthBuffer){const ne=x.depthTexture,ue=ne&&ne.isDepthTexture?ne.type:null,Me=U(x.stencilBuffer,ue),Ce=x.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;zt(x)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ct(x),Me,x.width,x.height):j?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ct(x),Me,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,Me,x.width,x.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ce,s.RENDERBUFFER,R)}else{const ne=x.textures;for(let ue=0;ue<ne.length;ue++){const Me=ne[ue],Ce=u.convert(Me.format,Me.colorSpace),de=u.convert(Me.type),me=b(Me.internalFormat,Ce,de,Me.normalized,Me.colorSpace);zt(x)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ct(x),me,x.width,x.height):j?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ct(x),me,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,me,x.width,x.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ut(R,x,j){const ne=x.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(s.FRAMEBUFFER,R),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ue=r.get(x.depthTexture);if(ue.__renderTarget=x,(!ue.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),ne){if(ue.__webglInit===void 0&&(ue.__webglInit=!0,x.depthTexture.addEventListener("dispose",F)),ue.__webglTexture===void 0){ue.__webglTexture=s.createTexture(),n.bindTexture(s.TEXTURE_CUBE_MAP,ue.__webglTexture),ze(s.TEXTURE_CUBE_MAP,x.depthTexture);const Pe=u.convert(x.depthTexture.format),Ye=u.convert(x.depthTexture.type);let Le;x.depthTexture.format===er?Le=s.DEPTH_COMPONENT24:x.depthTexture.format===is&&(Le=s.DEPTH24_STENCIL8);for(let be=0;be<6;be++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,Le,x.width,x.height,0,Pe,Ye,null)}}else Y(x.depthTexture,0);const Me=ue.__webglTexture,Ce=Ct(x),de=ne?s.TEXTURE_CUBE_MAP_POSITIVE_X+j:s.TEXTURE_2D,me=x.depthTexture.format===is?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(x.depthTexture.format===er)zt(x)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,me,de,Me,0,Ce):s.framebufferTexture2D(s.FRAMEBUFFER,me,de,Me,0);else if(x.depthTexture.format===is)zt(x)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,me,de,Me,0,Ce):s.framebufferTexture2D(s.FRAMEBUFFER,me,de,Me,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Tt(R){const x=r.get(R),j=R.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==R.depthTexture){const ne=R.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),ne){const ue=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,ne.removeEventListener("dispose",ue)};ne.addEventListener("dispose",ue),x.__depthDisposeCallback=ue}x.__boundDepthTexture=ne}if(R.depthTexture&&!x.__autoAllocateDepthBuffer)if(j)for(let ne=0;ne<6;ne++)ut(x.__webglFramebuffer[ne],R,ne);else{const ne=R.texture.mipmaps;ne&&ne.length>0?ut(x.__webglFramebuffer[0],R,0):ut(x.__webglFramebuffer,R,0)}else if(j){x.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(n.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[ne]),x.__webglDepthbuffer[ne]===void 0)x.__webglDepthbuffer[ne]=s.createRenderbuffer(),kt(x.__webglDepthbuffer[ne],R,!1);else{const ue=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Me=x.__webglDepthbuffer[ne];s.bindRenderbuffer(s.RENDERBUFFER,Me),s.framebufferRenderbuffer(s.FRAMEBUFFER,ue,s.RENDERBUFFER,Me)}}else{const ne=R.texture.mipmaps;if(ne&&ne.length>0?n.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[0]):n.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=s.createRenderbuffer(),kt(x.__webglDepthbuffer,R,!1);else{const ue=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Me=x.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Me),s.framebufferRenderbuffer(s.FRAMEBUFFER,ue,s.RENDERBUFFER,Me)}}n.bindFramebuffer(s.FRAMEBUFFER,null)}function vt(R,x,j){const ne=r.get(R);x!==void 0&&Je(ne.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),j!==void 0&&Tt(R)}function pt(R){const x=R.texture,j=r.get(R),ne=r.get(x);R.addEventListener("dispose",T);const ue=R.textures,Me=R.isWebGLCubeRenderTarget===!0,Ce=ue.length>1;if(Ce||(ne.__webglTexture===void 0&&(ne.__webglTexture=s.createTexture()),ne.__version=x.version,c.memory.textures++),Me){j.__webglFramebuffer=[];for(let de=0;de<6;de++)if(x.mipmaps&&x.mipmaps.length>0){j.__webglFramebuffer[de]=[];for(let me=0;me<x.mipmaps.length;me++)j.__webglFramebuffer[de][me]=s.createFramebuffer()}else j.__webglFramebuffer[de]=s.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){j.__webglFramebuffer=[];for(let de=0;de<x.mipmaps.length;de++)j.__webglFramebuffer[de]=s.createFramebuffer()}else j.__webglFramebuffer=s.createFramebuffer();if(Ce)for(let de=0,me=ue.length;de<me;de++){const Pe=r.get(ue[de]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=s.createTexture(),c.memory.textures++)}if(R.samples>0&&zt(R)===!1){j.__webglMultisampledFramebuffer=s.createFramebuffer(),j.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let de=0;de<ue.length;de++){const me=ue[de];j.__webglColorRenderbuffer[de]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,j.__webglColorRenderbuffer[de]);const Pe=u.convert(me.format,me.colorSpace),Ye=u.convert(me.type),Le=b(me.internalFormat,Pe,Ye,me.normalized,me.colorSpace,R.isXRRenderTarget===!0),be=Ct(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,be,Le,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.RENDERBUFFER,j.__webglColorRenderbuffer[de])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(j.__webglDepthRenderbuffer=s.createRenderbuffer(),kt(j.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Me){n.bindTexture(s.TEXTURE_CUBE_MAP,ne.__webglTexture),ze(s.TEXTURE_CUBE_MAP,x);for(let de=0;de<6;de++)if(x.mipmaps&&x.mipmaps.length>0)for(let me=0;me<x.mipmaps.length;me++)Je(j.__webglFramebuffer[de][me],R,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+de,me);else Je(j.__webglFramebuffer[de],R,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);v(x)&&O(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ce){for(let de=0,me=ue.length;de<me;de++){const Pe=ue[de],Ye=r.get(Pe);let Le=s.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Le=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Le,Ye.__webglTexture),ze(Le,Pe),Je(j.__webglFramebuffer,R,Pe,s.COLOR_ATTACHMENT0+de,Le,0),v(Pe)&&O(Le)}n.unbindTexture()}else{let de=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(de=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(de,ne.__webglTexture),ze(de,x),x.mipmaps&&x.mipmaps.length>0)for(let me=0;me<x.mipmaps.length;me++)Je(j.__webglFramebuffer[me],R,x,s.COLOR_ATTACHMENT0,de,me);else Je(j.__webglFramebuffer,R,x,s.COLOR_ATTACHMENT0,de,0);v(x)&&O(de),n.unbindTexture()}R.depthBuffer&&Tt(R)}function Bt(R){const x=R.textures;for(let j=0,ne=x.length;j<ne;j++){const ue=x[j];if(v(ue)){const Me=k(R),Ce=r.get(ue).__webglTexture;n.bindTexture(Me,Ce),O(Me),n.unbindTexture()}}}const jt=[],qt=[];function Gt(R){if(R.samples>0){if(zt(R)===!1){const x=R.textures,j=R.width,ne=R.height;let ue=s.COLOR_BUFFER_BIT;const Me=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ce=r.get(R),de=x.length>1;if(de)for(let Pe=0;Pe<x.length;Pe++)n.bindFramebuffer(s.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,Ce.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer);const me=R.texture.mipmaps;me&&me.length>0?n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer[0]):n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let Pe=0;Pe<x.length;Pe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ue|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ue|=s.STENCIL_BUFFER_BIT)),de){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ce.__webglColorRenderbuffer[Pe]);const Ye=r.get(x[Pe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ye,0)}s.blitFramebuffer(0,0,j,ne,0,0,j,ne,ue,s.NEAREST),p===!0&&(jt.length=0,qt.length=0,jt.push(s.COLOR_ATTACHMENT0+Pe),R.depthBuffer&&R.resolveDepthBuffer===!1&&(jt.push(Me),qt.push(Me),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,qt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,jt))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),de)for(let Pe=0;Pe<x.length;Pe++){n.bindFramebuffer(s.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.RENDERBUFFER,Ce.__webglColorRenderbuffer[Pe]);const Ye=r.get(x[Pe]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,Ce.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.TEXTURE_2D,Ye,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&p){const x=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[x])}}}function Ct(R){return Math.min(o.maxSamples,R.samples)}function zt(R){const x=r.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function G(R){const x=c.render.frame;S.get(R)!==x&&(S.set(R,x),R.update())}function dn(R,x){const j=R.colorSpace,ne=R.format,ue=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||j!==Bl&&j!==br&&(mt.getTransfer(j)===Lt?(ne!==_i||ue!==ri)&&rt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):St("WebGLTextures: Unsupported texture color space:",j)),x}function Mt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(m.width=R.naturalWidth||R.width,m.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(m.width=R.displayWidth,m.height=R.displayHeight):(m.width=R.width,m.height=R.height),m}this.allocateTextureUnit=fe,this.resetTextureUnits=ce,this.getTextureUnits=ge,this.setTextureUnits=Z,this.setTexture2D=Y,this.setTexture2DArray=oe,this.setTexture3D=le,this.setTextureCube=N,this.rebindTextures=vt,this.setupRenderTarget=pt,this.updateRenderTargetMipmap=Bt,this.updateMultisampleRenderTarget=Gt,this.setupDepthRenderbuffer=Tt,this.setupFrameBufferTexture=Je,this.useMultisampledRTT=zt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function JM(s,e){function n(r,o=br){let u;const c=mt.getTransfer(o);if(r===ri)return s.UNSIGNED_BYTE;if(r===od)return s.UNSIGNED_SHORT_4_4_4_4;if(r===ld)return s.UNSIGNED_SHORT_5_5_5_1;if(r===o0)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===l0)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===s0)return s.BYTE;if(r===a0)return s.SHORT;if(r===ja)return s.UNSIGNED_SHORT;if(r===ad)return s.INT;if(r===Di)return s.UNSIGNED_INT;if(r===Ci)return s.FLOAT;if(r===Ji)return s.HALF_FLOAT;if(r===u0)return s.ALPHA;if(r===c0)return s.RGB;if(r===_i)return s.RGBA;if(r===er)return s.DEPTH_COMPONENT;if(r===is)return s.DEPTH_STENCIL;if(r===f0)return s.RED;if(r===ud)return s.RED_INTEGER;if(r===ss)return s.RG;if(r===cd)return s.RG_INTEGER;if(r===fd)return s.RGBA_INTEGER;if(r===Pl||r===Ll||r===Dl||r===Il)if(c===Lt)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Pl)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ll)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Dl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Il)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Pl)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ll)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Dl)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Il)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ef||r===Tf||r===wf||r===Af)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Ef)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Tf)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===wf)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Af)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===bf||r===Cf||r===Rf||r===Pf||r===Lf||r===Ol||r===Df)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===bf||r===Cf)return c===Lt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Rf)return c===Lt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(r===Pf)return u.COMPRESSED_R11_EAC;if(r===Lf)return u.COMPRESSED_SIGNED_R11_EAC;if(r===Ol)return u.COMPRESSED_RG11_EAC;if(r===Df)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===If||r===Nf||r===Uf||r===Ff||r===Of||r===kf||r===Bf||r===zf||r===Vf||r===Hf||r===Gf||r===Wf||r===Xf||r===Yf)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===If)return c===Lt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Nf)return c===Lt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Uf)return c===Lt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ff)return c===Lt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Of)return c===Lt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===kf)return c===Lt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Bf)return c===Lt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===zf)return c===Lt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Vf)return c===Lt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Hf)return c===Lt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Gf)return c===Lt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Wf)return c===Lt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Xf)return c===Lt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Yf)return c===Lt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===jf||r===qf||r===$f)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===jf)return c===Lt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===qf)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===$f)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Kf||r===Zf||r===kl||r===Qf)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===Kf)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Zf)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===kl)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Qf)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===qa?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}const e2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,t2=`
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

}`;class n2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const r=new E0(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new Ii({vertexShader:e2,fragmentShader:t2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new tr(new Yl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class i2 extends ls{constructor(e,n){super();const r=this;let o=null,u=1,c=null,d="local-floor",p=1,m=null,S=null,y=null,g=null,M=null,A=null;const C=typeof XRWebGLBinding<"u",_=new n2,v={},O=n.getContextAttributes();let k=null,b=null;const U=[],P=[],F=new wt;let T=null;const D=new ii;D.viewport=new Kt;const X=new ii;X.viewport=new Kt;const V=[D,X],$=new dx;let ce=null,ge=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let _e=U[re];return _e===void 0&&(_e=new Vc,U[re]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(re){let _e=U[re];return _e===void 0&&(_e=new Vc,U[re]=_e),_e.getGripSpace()},this.getHand=function(re){let _e=U[re];return _e===void 0&&(_e=new Vc,U[re]=_e),_e.getHandSpace()};function Z(re){const _e=P.indexOf(re.inputSource);if(_e===-1)return;const pe=U[_e];pe!==void 0&&(pe.update(re.inputSource,re.frame,m||c),pe.dispatchEvent({type:re.type,data:re.inputSource}))}function fe(){o.removeEventListener("select",Z),o.removeEventListener("selectstart",Z),o.removeEventListener("selectend",Z),o.removeEventListener("squeeze",Z),o.removeEventListener("squeezestart",Z),o.removeEventListener("squeezeend",Z),o.removeEventListener("end",fe),o.removeEventListener("inputsourceschange",q);for(let re=0;re<U.length;re++){const _e=P[re];_e!==null&&(P[re]=null,U[re].disconnect(_e))}ce=null,ge=null,_.reset();for(const re in v)delete v[re];e.setRenderTarget(k),M=null,g=null,y=null,o=null,b=null,ze.stop(),r.isPresenting=!1,e.setPixelRatio(T),e.setSize(F.width,F.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){u=re,r.isPresenting===!0&&rt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){d=re,r.isPresenting===!0&&rt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||c},this.setReferenceSpace=function(re){m=re},this.getBaseLayer=function(){return g!==null?g:M},this.getBinding=function(){return y===null&&C&&(y=new XRWebGLBinding(o,n)),y},this.getFrame=function(){return A},this.getSession=function(){return o},this.setSession=async function(re){if(o=re,o!==null){if(k=e.getRenderTarget(),o.addEventListener("select",Z),o.addEventListener("selectstart",Z),o.addEventListener("selectend",Z),o.addEventListener("squeeze",Z),o.addEventListener("squeezestart",Z),o.addEventListener("squeezeend",Z),o.addEventListener("end",fe),o.addEventListener("inputsourceschange",q),O.xrCompatible!==!0&&await n.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(F),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,Ue=null,Qe=null;O.depth&&(Qe=O.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,pe=O.stencil?is:er,Ue=O.stencil?qa:Di);const Je={colorFormat:n.RGBA8,depthFormat:Qe,scaleFactor:u};y=this.getBinding(),g=y.createProjectionLayer(Je),o.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),b=new Li(g.textureWidth,g.textureHeight,{format:_i,type:ri,depthTexture:new Qs(g.textureWidth,g.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:O.stencil,colorSpace:e.outputColorSpace,samples:O.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const pe={antialias:O.antialias,alpha:!0,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(o,n,pe),o.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),b=new Li(M.framebufferWidth,M.framebufferHeight,{format:_i,type:ri,colorSpace:e.outputColorSpace,stencilBuffer:O.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(p),m=null,c=await o.requestReferenceSpace(d),ze.setContext(o),ze.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function q(re){for(let _e=0;_e<re.removed.length;_e++){const pe=re.removed[_e],Ue=P.indexOf(pe);Ue>=0&&(P[Ue]=null,U[Ue].disconnect(pe))}for(let _e=0;_e<re.added.length;_e++){const pe=re.added[_e];let Ue=P.indexOf(pe);if(Ue===-1){for(let Je=0;Je<U.length;Je++)if(Je>=P.length){P.push(pe),Ue=Je;break}else if(P[Je]===null){P[Je]=pe,Ue=Je;break}if(Ue===-1)break}const Qe=U[Ue];Qe&&Qe.connect(pe)}}const Y=new ie,oe=new ie;function le(re,_e,pe){Y.setFromMatrixPosition(_e.matrixWorld),oe.setFromMatrixPosition(pe.matrixWorld);const Ue=Y.distanceTo(oe),Qe=_e.projectionMatrix.elements,Je=pe.projectionMatrix.elements,kt=Qe[14]/(Qe[10]-1),ut=Qe[14]/(Qe[10]+1),Tt=(Qe[9]+1)/Qe[5],vt=(Qe[9]-1)/Qe[5],pt=(Qe[8]-1)/Qe[0],Bt=(Je[8]+1)/Je[0],jt=kt*pt,qt=kt*Bt,Gt=Ue/(-pt+Bt),Ct=Gt*-pt;if(_e.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(Ct),re.translateZ(Gt),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),Qe[10]===-1)re.projectionMatrix.copy(_e.projectionMatrix),re.projectionMatrixInverse.copy(_e.projectionMatrixInverse);else{const zt=kt+Gt,G=ut+Gt,dn=jt-Ct,Mt=qt+(Ue-Ct),R=Tt*ut/G*zt,x=vt*ut/G*zt;re.projectionMatrix.makePerspective(dn,Mt,R,x,zt,G),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function N(re,_e){_e===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(_e.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(o===null)return;let _e=re.near,pe=re.far;_.texture!==null&&(_.depthNear>0&&(_e=_.depthNear),_.depthFar>0&&(pe=_.depthFar)),$.near=X.near=D.near=_e,$.far=X.far=D.far=pe,(ce!==$.near||ge!==$.far)&&(o.updateRenderState({depthNear:$.near,depthFar:$.far}),ce=$.near,ge=$.far),$.layers.mask=re.layers.mask|6,D.layers.mask=$.layers.mask&-5,X.layers.mask=$.layers.mask&-3;const Ue=re.parent,Qe=$.cameras;N($,Ue);for(let Je=0;Je<Qe.length;Je++)N(Qe[Je],Ue);Qe.length===2?le($,D,X):$.projectionMatrix.copy(D.projectionMatrix),K(re,$,Ue)};function K(re,_e,pe){pe===null?re.matrix.copy(_e.matrixWorld):(re.matrix.copy(pe.matrixWorld),re.matrix.invert(),re.matrix.multiply(_e.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(_e.projectionMatrix),re.projectionMatrixInverse.copy(_e.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=Jf*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(g===null&&M===null))return p},this.setFoveation=function(re){p=re,g!==null&&(g.fixedFoveation=re),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=re)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh($)},this.getCameraTexture=function(re){return v[re]};let Ne=null;function qe(re,_e){if(S=_e.getViewerPose(m||c),A=_e,S!==null){const pe=S.views;M!==null&&(e.setRenderTargetFramebuffer(b,M.framebuffer),e.setRenderTarget(b));let Ue=!1;pe.length!==$.cameras.length&&($.cameras.length=0,Ue=!0);for(let ut=0;ut<pe.length;ut++){const Tt=pe[ut];let vt=null;if(M!==null)vt=M.getViewport(Tt);else{const Bt=y.getViewSubImage(g,Tt);vt=Bt.viewport,ut===0&&(e.setRenderTargetTextures(b,Bt.colorTexture,Bt.depthStencilTexture),e.setRenderTarget(b))}let pt=V[ut];pt===void 0&&(pt=new ii,pt.layers.enable(ut),pt.viewport=new Kt,V[ut]=pt),pt.matrix.fromArray(Tt.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(Tt.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(vt.x,vt.y,vt.width,vt.height),ut===0&&($.matrix.copy(pt.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),Ue===!0&&$.cameras.push(pt)}const Qe=o.enabledFeatures;if(Qe&&Qe.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&C){y=r.getBinding();const ut=y.getDepthInformation(pe[0]);ut&&ut.isValid&&ut.texture&&_.init(ut,o.renderState)}if(Qe&&Qe.includes("camera-access")&&C){e.state.unbindTexture(),y=r.getBinding();for(let ut=0;ut<pe.length;ut++){const Tt=pe[ut].camera;if(Tt){let vt=v[Tt];vt||(vt=new E0,v[Tt]=vt);const pt=y.getCameraImage(Tt);vt.sourceTexture=pt}}}}for(let pe=0;pe<U.length;pe++){const Ue=P[pe],Qe=U[pe];Ue!==null&&Qe!==void 0&&Qe.update(Ue,_e,m||c)}Ne&&Ne(re,_e),_e.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:_e}),A=null}const ze=new b0;ze.setAnimationLoop(qe),this.setAnimationLoop=function(re){Ne=re},this.dispose=function(){}}}const r2=new Qt,N0=new lt;N0.set(-1,0,0,0,1,0,0,0,1);function s2(s,e){function n(_,v){_.matrixAutoUpdate===!0&&_.updateMatrix(),v.value.copy(_.matrix)}function r(_,v){v.color.getRGB(_.fogColor.value,T0(s)),v.isFog?(_.fogNear.value=v.near,_.fogFar.value=v.far):v.isFogExp2&&(_.fogDensity.value=v.density)}function o(_,v,O,k,b){v.isNodeMaterial?v.uniformsNeedUpdate=!1:v.isMeshBasicMaterial?u(_,v):v.isMeshLambertMaterial?(u(_,v),v.envMap&&(_.envMapIntensity.value=v.envMapIntensity)):v.isMeshToonMaterial?(u(_,v),y(_,v)):v.isMeshPhongMaterial?(u(_,v),S(_,v),v.envMap&&(_.envMapIntensity.value=v.envMapIntensity)):v.isMeshStandardMaterial?(u(_,v),g(_,v),v.isMeshPhysicalMaterial&&M(_,v,b)):v.isMeshMatcapMaterial?(u(_,v),A(_,v)):v.isMeshDepthMaterial?u(_,v):v.isMeshDistanceMaterial?(u(_,v),C(_,v)):v.isMeshNormalMaterial?u(_,v):v.isLineBasicMaterial?(c(_,v),v.isLineDashedMaterial&&d(_,v)):v.isPointsMaterial?p(_,v,O,k):v.isSpriteMaterial?m(_,v):v.isShadowMaterial?(_.color.value.copy(v.color),_.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function u(_,v){_.opacity.value=v.opacity,v.color&&_.diffuse.value.copy(v.color),v.emissive&&_.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(_.map.value=v.map,n(v.map,_.mapTransform)),v.alphaMap&&(_.alphaMap.value=v.alphaMap,n(v.alphaMap,_.alphaMapTransform)),v.bumpMap&&(_.bumpMap.value=v.bumpMap,n(v.bumpMap,_.bumpMapTransform),_.bumpScale.value=v.bumpScale,v.side===zn&&(_.bumpScale.value*=-1)),v.normalMap&&(_.normalMap.value=v.normalMap,n(v.normalMap,_.normalMapTransform),_.normalScale.value.copy(v.normalScale),v.side===zn&&_.normalScale.value.negate()),v.displacementMap&&(_.displacementMap.value=v.displacementMap,n(v.displacementMap,_.displacementMapTransform),_.displacementScale.value=v.displacementScale,_.displacementBias.value=v.displacementBias),v.emissiveMap&&(_.emissiveMap.value=v.emissiveMap,n(v.emissiveMap,_.emissiveMapTransform)),v.specularMap&&(_.specularMap.value=v.specularMap,n(v.specularMap,_.specularMapTransform)),v.alphaTest>0&&(_.alphaTest.value=v.alphaTest);const O=e.get(v),k=O.envMap,b=O.envMapRotation;k&&(_.envMap.value=k,_.envMapRotation.value.setFromMatrix4(r2.makeRotationFromEuler(b)).transpose(),k.isCubeTexture&&k.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(N0),_.reflectivity.value=v.reflectivity,_.ior.value=v.ior,_.refractionRatio.value=v.refractionRatio),v.lightMap&&(_.lightMap.value=v.lightMap,_.lightMapIntensity.value=v.lightMapIntensity,n(v.lightMap,_.lightMapTransform)),v.aoMap&&(_.aoMap.value=v.aoMap,_.aoMapIntensity.value=v.aoMapIntensity,n(v.aoMap,_.aoMapTransform))}function c(_,v){_.diffuse.value.copy(v.color),_.opacity.value=v.opacity,v.map&&(_.map.value=v.map,n(v.map,_.mapTransform))}function d(_,v){_.dashSize.value=v.dashSize,_.totalSize.value=v.dashSize+v.gapSize,_.scale.value=v.scale}function p(_,v,O,k){_.diffuse.value.copy(v.color),_.opacity.value=v.opacity,_.size.value=v.size*O,_.scale.value=k*.5,v.map&&(_.map.value=v.map,n(v.map,_.uvTransform)),v.alphaMap&&(_.alphaMap.value=v.alphaMap,n(v.alphaMap,_.alphaMapTransform)),v.alphaTest>0&&(_.alphaTest.value=v.alphaTest)}function m(_,v){_.diffuse.value.copy(v.color),_.opacity.value=v.opacity,_.rotation.value=v.rotation,v.map&&(_.map.value=v.map,n(v.map,_.mapTransform)),v.alphaMap&&(_.alphaMap.value=v.alphaMap,n(v.alphaMap,_.alphaMapTransform)),v.alphaTest>0&&(_.alphaTest.value=v.alphaTest)}function S(_,v){_.specular.value.copy(v.specular),_.shininess.value=Math.max(v.shininess,1e-4)}function y(_,v){v.gradientMap&&(_.gradientMap.value=v.gradientMap)}function g(_,v){_.metalness.value=v.metalness,v.metalnessMap&&(_.metalnessMap.value=v.metalnessMap,n(v.metalnessMap,_.metalnessMapTransform)),_.roughness.value=v.roughness,v.roughnessMap&&(_.roughnessMap.value=v.roughnessMap,n(v.roughnessMap,_.roughnessMapTransform)),v.envMap&&(_.envMapIntensity.value=v.envMapIntensity)}function M(_,v,O){_.ior.value=v.ior,v.sheen>0&&(_.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),_.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(_.sheenColorMap.value=v.sheenColorMap,n(v.sheenColorMap,_.sheenColorMapTransform)),v.sheenRoughnessMap&&(_.sheenRoughnessMap.value=v.sheenRoughnessMap,n(v.sheenRoughnessMap,_.sheenRoughnessMapTransform))),v.clearcoat>0&&(_.clearcoat.value=v.clearcoat,_.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(_.clearcoatMap.value=v.clearcoatMap,n(v.clearcoatMap,_.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,n(v.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(_.clearcoatNormalMap.value=v.clearcoatNormalMap,n(v.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===zn&&_.clearcoatNormalScale.value.negate())),v.dispersion>0&&(_.dispersion.value=v.dispersion),v.iridescence>0&&(_.iridescence.value=v.iridescence,_.iridescenceIOR.value=v.iridescenceIOR,_.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(_.iridescenceMap.value=v.iridescenceMap,n(v.iridescenceMap,_.iridescenceMapTransform)),v.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=v.iridescenceThicknessMap,n(v.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),v.transmission>0&&(_.transmission.value=v.transmission,_.transmissionSamplerMap.value=O.texture,_.transmissionSamplerSize.value.set(O.width,O.height),v.transmissionMap&&(_.transmissionMap.value=v.transmissionMap,n(v.transmissionMap,_.transmissionMapTransform)),_.thickness.value=v.thickness,v.thicknessMap&&(_.thicknessMap.value=v.thicknessMap,n(v.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=v.attenuationDistance,_.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(_.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(_.anisotropyMap.value=v.anisotropyMap,n(v.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=v.specularIntensity,_.specularColor.value.copy(v.specularColor),v.specularColorMap&&(_.specularColorMap.value=v.specularColorMap,n(v.specularColorMap,_.specularColorMapTransform)),v.specularIntensityMap&&(_.specularIntensityMap.value=v.specularIntensityMap,n(v.specularIntensityMap,_.specularIntensityMapTransform))}function A(_,v){v.matcap&&(_.matcap.value=v.matcap)}function C(_,v){const O=e.get(v).light;_.referencePosition.value.setFromMatrixPosition(O.matrixWorld),_.nearDistance.value=O.shadow.camera.near,_.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function a2(s,e,n,r){let o={},u={},c=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(b,U){const P=U.program;r.uniformBlockBinding(b,P)}function m(b,U){let P=o[b.id];P===void 0&&(_(b),P=S(b),o[b.id]=P,b.addEventListener("dispose",O));const F=U.program;r.updateUBOMapping(b,F);const T=e.render.frame;u[b.id]!==T&&(g(b),u[b.id]=T)}function S(b){const U=y();b.__bindingPointIndex=U;const P=s.createBuffer(),F=b.__size,T=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,P),s.bufferData(s.UNIFORM_BUFFER,F,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,U,P),P}function y(){for(let b=0;b<d;b++)if(c.indexOf(b)===-1)return c.push(b),b;return St("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(b){const U=o[b.id],P=b.uniforms,F=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,U);for(let T=0,D=P.length;T<D;T++){const X=P[T];if(Array.isArray(X))for(let V=0,$=X.length;V<$;V++)M(X[V],T,V,F);else M(X,T,0,F)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(b,U,P,F){if(C(b,U,P,F)===!0){const T=b.__offset,D=b.value;if(Array.isArray(D)){let X=0;for(let V=0;V<D.length;V++){const $=D[V],ce=v($);A($,b.__data,X),typeof $!="number"&&typeof $!="boolean"&&!$.isMatrix3&&!ArrayBuffer.isView($)&&(X+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}}else A(D,b.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,T,b.__data)}}function A(b,U,P){typeof b=="number"||typeof b=="boolean"?U[0]=b:b.isMatrix3?(U[0]=b.elements[0],U[1]=b.elements[1],U[2]=b.elements[2],U[3]=0,U[4]=b.elements[3],U[5]=b.elements[4],U[6]=b.elements[5],U[7]=0,U[8]=b.elements[6],U[9]=b.elements[7],U[10]=b.elements[8],U[11]=0):ArrayBuffer.isView(b)?U.set(new b.constructor(b.buffer,b.byteOffset,U.length)):b.toArray(U,P)}function C(b,U,P,F){const T=b.value,D=U+"_"+P;if(F[D]===void 0)return typeof T=="number"||typeof T=="boolean"?F[D]=T:ArrayBuffer.isView(T)?F[D]=T.slice():F[D]=T.clone(),!0;{const X=F[D];if(typeof T=="number"||typeof T=="boolean"){if(X!==T)return F[D]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(X.equals(T)===!1)return X.copy(T),!0}}return!1}function _(b){const U=b.uniforms;let P=0;const F=16;for(let D=0,X=U.length;D<X;D++){const V=Array.isArray(U[D])?U[D]:[U[D]];for(let $=0,ce=V.length;$<ce;$++){const ge=V[$],Z=Array.isArray(ge.value)?ge.value:[ge.value];for(let fe=0,q=Z.length;fe<q;fe++){const Y=Z[fe],oe=v(Y),le=P%F,N=le%oe.boundary,K=le+N;P+=N,K!==0&&F-K<oe.storage&&(P+=F-K),ge.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),ge.__offset=P,P+=oe.storage}}}const T=P%F;return T>0&&(P+=F-T),b.__size=P,b.__cache={},this}function v(b){const U={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(U.boundary=4,U.storage=4):b.isVector2?(U.boundary=8,U.storage=8):b.isVector3||b.isColor?(U.boundary=16,U.storage=12):b.isVector4?(U.boundary=16,U.storage=16):b.isMatrix3?(U.boundary=48,U.storage=48):b.isMatrix4?(U.boundary=64,U.storage=64):b.isTexture?rt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(U.boundary=16,U.storage=b.byteLength):rt("WebGLRenderer: Unsupported uniform value type.",b),U}function O(b){const U=b.target;U.removeEventListener("dispose",O);const P=c.indexOf(U.__bindingPointIndex);c.splice(P,1),s.deleteBuffer(o[U.id]),delete o[U.id],delete u[U.id]}function k(){for(const b in o)s.deleteBuffer(o[b]);c=[],o={},u={}}return{bind:p,update:m,dispose:k}}const o2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ai=null;function l2(){return Ai===null&&(Ai=new Q_(o2,16,16,ss,Ji),Ai.name="DFG_LUT",Ai.minFilter=wn,Ai.magFilter=wn,Ai.wrapS=$i,Ai.wrapT=$i,Ai.generateMipmaps=!1,Ai.needsUpdate=!0),Ai}class u2{constructor(e={}){const{canvas:n=R_(),context:r=null,depth:o=!0,stencil:u=!1,alpha:c=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:S="default",failIfMajorPerformanceCaveat:y=!1,reversedDepthBuffer:g=!1,outputBufferType:M=ri}=e;this.isWebGLRenderer=!0;let A;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");A=r.getContextAttributes().alpha}else A=c;const C=M,_=new Set([fd,cd,ud]),v=new Set([ri,Di,ja,qa,od,ld]),O=new Uint32Array(4),k=new Int32Array(4),b=new ie;let U=null,P=null;const F=[],T=[];let D=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Pi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const X=this;let V=!1,$=null,ce=null,ge=null,Z=null;this._outputColorSpace=ni;let fe=0,q=0,Y=null,oe=-1,le=null;const N=new Kt,K=new Kt;let Ne=null;const qe=new yt(0);let ze=0,re=n.width,_e=n.height,pe=1,Ue=null,Qe=null;const Je=new Kt(0,0,re,_e),kt=new Kt(0,0,re,_e);let ut=!1;const Tt=new S0;let vt=!1,pt=!1;const Bt=new Qt,jt=new ie,qt=new Kt,Gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ct=!1;function zt(){return Y===null?pe:1}let G=r;function dn(w,W){return n.getContext(w,W)}try{const w={alpha:!0,depth:o,stencil:u,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:S,failIfMajorPerformanceCaveat:y};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${sd}`),n.addEventListener("webglcontextlost",Dt,!1),n.addEventListener("webglcontextrestored",At,!1),n.addEventListener("webglcontextcreationerror",_n,!1),G===null){const W="webgl2";if(G=dn(W,w),G===null)throw dn(W)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(w){throw St("WebGLRenderer: "+w.message),w}let Mt,R,x,j,ne,ue,Me,Ce,de,me,Pe,Ye,Le,be,Ze,et,it,z,Ae,he,Re,De,ve;function Ge(){Mt=new ly(G),Mt.init(),Re=new JM(G,Mt),R=new ey(G,Mt,e,Re),x=new ZM(G,Mt),R.reversedDepthBuffer&&g&&x.buffers.depth.setReversed(!0),ce=G.createFramebuffer(),ge=G.createFramebuffer(),Z=G.createFramebuffer(),j=new fy(G),ne=new OM,ue=new QM(G,Mt,x,ne,R,Re,j),Me=new oy(X),Ce=new mx(G),De=new QS(G,Ce),de=new uy(G,Ce,j,De),me=new hy(G,de,Ce,De,j),z=new dy(G,R,ue),Ze=new ty(ne),Pe=new FM(X,Me,Mt,R,De,Ze),Ye=new s2(X,ne),Le=new BM,be=new XM(Mt),it=new ZS(X,Me,x,me,A,p),et=new KM(X,me,R),ve=new a2(G,j,R,x),Ae=new JS(G,Mt,j),he=new cy(G,Mt,j),j.programs=Pe.programs,X.capabilities=R,X.extensions=Mt,X.properties=ne,X.renderLists=Le,X.shadowMap=et,X.state=x,X.info=j}Ge(),C!==ri&&(D=new my(C,n.width,n.height,d,o,u));const Ve=new i2(X,G);this.xr=Ve,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const w=Mt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Mt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return pe},this.setPixelRatio=function(w){w!==void 0&&(pe=w,this.setSize(re,_e,!1))},this.getSize=function(w){return w.set(re,_e)},this.setSize=function(w,W,se=!0){if(Ve.isPresenting){rt("WebGLRenderer: Can't change size while VR device is presenting.");return}re=w,_e=W,n.width=Math.floor(w*pe),n.height=Math.floor(W*pe),se===!0&&(n.style.width=w+"px",n.style.height=W+"px"),D!==null&&D.setSize(n.width,n.height),this.setViewport(0,0,w,W)},this.getDrawingBufferSize=function(w){return w.set(re*pe,_e*pe).floor()},this.setDrawingBufferSize=function(w,W,se){re=w,_e=W,pe=se,n.width=Math.floor(w*se),n.height=Math.floor(W*se),this.setViewport(0,0,w,W)},this.setEffects=function(w){if(C===ri){St("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let W=0;W<w.length;W++)if(w[W].isOutputPass===!0){rt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(N)},this.getViewport=function(w){return w.copy(Je)},this.setViewport=function(w,W,se,ee){w.isVector4?Je.set(w.x,w.y,w.z,w.w):Je.set(w,W,se,ee),x.viewport(N.copy(Je).multiplyScalar(pe).round())},this.getScissor=function(w){return w.copy(kt)},this.setScissor=function(w,W,se,ee){w.isVector4?kt.set(w.x,w.y,w.z,w.w):kt.set(w,W,se,ee),x.scissor(K.copy(kt).multiplyScalar(pe).round())},this.getScissorTest=function(){return ut},this.setScissorTest=function(w){x.setScissorTest(ut=w)},this.setOpaqueSort=function(w){Ue=w},this.setTransparentSort=function(w){Qe=w},this.getClearColor=function(w){return w.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor(...arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha(...arguments)},this.clear=function(w=!0,W=!0,se=!0){let ee=0;if(w){let J=!1;if(Y!==null){const we=Y.texture.format;J=_.has(we)}if(J){const we=Y.texture.type,ke=v.has(we),Te=it.getClearColor(),We=it.getClearAlpha(),Ke=Te.r,at=Te.g,ot=Te.b;ke?(O[0]=Ke,O[1]=at,O[2]=ot,O[3]=We,G.clearBufferuiv(G.COLOR,0,O)):(k[0]=Ke,k[1]=at,k[2]=ot,k[3]=We,G.clearBufferiv(G.COLOR,0,k))}else ee|=G.COLOR_BUFFER_BIT}W&&(ee|=G.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),se&&(ee|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ee!==0&&G.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),$=w},this.dispose=function(){n.removeEventListener("webglcontextlost",Dt,!1),n.removeEventListener("webglcontextrestored",At,!1),n.removeEventListener("webglcontextcreationerror",_n,!1),it.dispose(),Le.dispose(),be.dispose(),ne.dispose(),Me.dispose(),me.dispose(),De.dispose(),ve.dispose(),Pe.dispose(),Ve.dispose(),Ve.removeEventListener("sessionstart",Ja),Ve.removeEventListener("sessionend",eo),An.stop()};function Dt(w){w.preventDefault(),nm("WebGLRenderer: Context Lost."),V=!0}function At(){nm("WebGLRenderer: Context Restored."),V=!1;const w=j.autoReset,W=et.enabled,se=et.autoUpdate,ee=et.needsUpdate,J=et.type;Ge(),j.autoReset=w,et.enabled=W,et.autoUpdate=se,et.needsUpdate=ee,et.type=J}function _n(w){St("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function qn(w){const W=w.target;W.removeEventListener("dispose",qn),Lr(W)}function Lr(w){us(w),ne.remove(w)}function us(w){const W=ne.get(w).programs;W!==void 0&&(W.forEach(function(se){Pe.releaseProgram(se)}),w.isShaderMaterial&&Pe.releaseShaderCache(w))}this.renderBufferDirect=function(w,W,se,ee,J,we){W===null&&(W=Gt);const ke=J.isMesh&&J.matrixWorld.determinantAffine()<0,Te=Wt(w,W,se,ee,J);x.setMaterial(ee,ke);let We=se.index,Ke=1;if(ee.wireframe===!0){if(We=de.getWireframeAttribute(se),We===void 0)return;Ke=2}const at=se.drawRange,ot=se.attributes.position;let je=at.start*Ke,_t=(at.start+at.count)*Ke;we!==null&&(je=Math.max(je,we.start*Ke),_t=Math.min(_t,(we.start+we.count)*Ke)),We!==null?(je=Math.max(je,0),_t=Math.min(_t,We.count)):ot!=null&&(je=Math.max(je,0),_t=Math.min(_t,ot.count));const It=_t-je;if(It<0||It===1/0)return;De.setup(J,ee,Te,se,We);let Vt,Rt=Ae;if(We!==null&&(Vt=Ce.get(We),Rt=he,Rt.setIndex(Vt)),J.isMesh)ee.wireframe===!0?(x.setLineWidth(ee.wireframeLinewidth*zt()),Rt.setMode(G.LINES)):Rt.setMode(G.TRIANGLES);else if(J.isLine){let Jt=ee.linewidth;Jt===void 0&&(Jt=1),x.setLineWidth(Jt*zt()),J.isLineSegments?Rt.setMode(G.LINES):J.isLineLoop?Rt.setMode(G.LINE_LOOP):Rt.setMode(G.LINE_STRIP)}else J.isPoints?Rt.setMode(G.POINTS):J.isSprite&&Rt.setMode(G.TRIANGLES);if(J.isBatchedMesh)if(Mt.get("WEBGL_multi_draw"))Rt.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const Jt=J._multiDrawStarts,Fe=J._multiDrawCounts,hn=J._multiDrawCount,ft=We?Ce.get(We).bytesPerElement:1,Ln=ne.get(ee).currentProgram.getUniforms();for(let Dn=0;Dn<hn;Dn++)Ln.setValue(G,"_gl_DrawID",Dn),Rt.render(Jt[Dn]/ft,Fe[Dn])}else if(J.isInstancedMesh)Rt.renderInstances(je,It,J.count);else if(se.isInstancedBufferGeometry){const Jt=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,Fe=Math.min(se.instanceCount,Jt);Rt.renderInstances(je,It,Fe)}else Rt.render(je,It)};function Dr(w,W,se){w.transparent===!0&&w.side===qi&&w.forceSinglePass===!1?(w.side=zn,w.needsUpdate=!0,Ur(w,W,se),w.side=Pr,w.needsUpdate=!0,Ur(w,W,se),w.side=qi):Ur(w,W,se)}this.compile=function(w,W,se=null){se===null&&(se=w),P=be.get(se),P.init(W),T.push(P),se.traverseVisible(function(J){J.isLight&&J.layers.test(W.layers)&&(P.pushLight(J),J.castShadow&&P.pushShadow(J))}),w!==se&&w.traverseVisible(function(J){J.isLight&&J.layers.test(W.layers)&&(P.pushLight(J),J.castShadow&&P.pushShadow(J))}),P.setupLights();const ee=new Set;return w.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const we=J.material;if(we)if(Array.isArray(we))for(let ke=0;ke<we.length;ke++){const Te=we[ke];Dr(Te,se,J),ee.add(Te)}else Dr(we,se,J),ee.add(we)}),P=T.pop(),ee},this.compileAsync=function(w,W,se=null){const ee=this.compile(w,W,se);return new Promise(J=>{function we(){if(ee.forEach(function(ke){ne.get(ke).currentProgram.isReady()&&ee.delete(ke)}),ee.size===0){J(w);return}setTimeout(we,10)}Mt.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let Ir=null;function $l(w){Ir&&Ir(w)}function Ja(){An.stop()}function eo(){An.start()}const An=new b0;An.setAnimationLoop($l),typeof self<"u"&&An.setContext(self),this.setAnimationLoop=function(w){Ir=w,Ve.setAnimationLoop(w),w===null?An.stop():An.start()},Ve.addEventListener("sessionstart",Ja),Ve.addEventListener("sessionend",eo),this.render=function(w,W){if(W!==void 0&&W.isCamera!==!0){St("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;$!==null&&$.renderStart(w,W);const se=Ve.enabled===!0&&Ve.isPresenting===!0,ee=D!==null&&(Y===null||se)&&D.begin(X,Y);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Ve.enabled===!0&&Ve.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(Ve.cameraAutoUpdate===!0&&Ve.updateCamera(W),W=Ve.getCamera()),w.isScene===!0&&w.onBeforeRender(X,w,W,Y),P=be.get(w,T.length),P.init(W),P.state.textureUnits=ue.getTextureUnits(),T.push(P),Bt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Tt.setFromProjectionMatrix(Bt,Ri,W.reversedDepth),pt=this.localClippingEnabled,vt=Ze.init(this.clippingPlanes,pt),U=Le.get(w,F.length),U.init(),F.push(U),Ve.enabled===!0&&Ve.isPresenting===!0){const ke=X.xr.getDepthSensingMesh();ke!==null&&cs(ke,W,-1/0,X.sortObjects)}cs(w,W,0,X.sortObjects),U.finish(),X.sortObjects===!0&&U.sort(Ue,Qe,W.reversedDepth),Ct=Ve.enabled===!1||Ve.isPresenting===!1||Ve.hasDepthSensing()===!1,Ct&&it.addToRenderList(U,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),vt===!0&&Ze.beginShadows();const J=P.state.shadowsArray;if(et.render(J,w,W),vt===!0&&Ze.endShadows(),(ee&&D.hasRenderPass())===!1){const ke=U.opaque,Te=U.transmissive;if(P.setupLights(),W.isArrayCamera){const We=W.cameras;if(Te.length>0)for(let Ke=0,at=We.length;Ke<at;Ke++){const ot=We[Ke];to(ke,Te,w,ot)}Ct&&it.render(w);for(let Ke=0,at=We.length;Ke<at;Ke++){const ot=We[Ke];na(U,w,ot,ot.viewport)}}else Te.length>0&&to(ke,Te,w,W),Ct&&it.render(w),na(U,w,W)}Y!==null&&q===0&&(ue.updateMultisampleRenderTarget(Y),ue.updateRenderTargetMipmap(Y)),ee&&D.end(X),w.isScene===!0&&w.onAfterRender(X,w,W),De.resetDefaultState(),oe=-1,le=null,T.pop(),T.length>0?(P=T[T.length-1],ue.setTextureUnits(P.state.textureUnits),vt===!0&&Ze.setGlobalState(X.clippingPlanes,P.state.camera)):P=null,F.pop(),F.length>0?U=F[F.length-1]:U=null,$!==null&&$.renderEnd()};function cs(w,W,se,ee){if(w.visible===!1)return;if(w.layers.test(W.layers)){if(w.isGroup)se=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(W);else if(w.isLightProbeGrid)P.pushLightProbeGrid(w);else if(w.isLight)P.pushLight(w),w.castShadow&&P.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Tt.intersectsSprite(w)){ee&&qt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Bt);const ke=me.update(w),Te=w.material;Te.visible&&U.push(w,ke,Te,se,qt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Tt.intersectsObject(w))){const ke=me.update(w),Te=w.material;if(ee&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),qt.copy(w.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),qt.copy(ke.boundingSphere.center)),qt.applyMatrix4(w.matrixWorld).applyMatrix4(Bt)),Array.isArray(Te)){const We=ke.groups;for(let Ke=0,at=We.length;Ke<at;Ke++){const ot=We[Ke],je=Te[ot.materialIndex];je&&je.visible&&U.push(w,ke,je,se,qt.z,ot)}}else Te.visible&&U.push(w,ke,Te,se,qt.z,null)}}const we=w.children;for(let ke=0,Te=we.length;ke<Te;ke++)cs(we[ke],W,se,ee)}function na(w,W,se,ee){const{opaque:J,transmissive:we,transparent:ke}=w;P.setupLightsView(se),vt===!0&&Ze.setGlobalState(X.clippingPlanes,se),ee&&x.viewport(N.copy(ee)),J.length>0&&Nr(J,W,se),we.length>0&&Nr(we,W,se),ke.length>0&&Nr(ke,W,se),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function to(w,W,se,ee){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[ee.id]===void 0){const je=Mt.has("EXT_color_buffer_half_float")||Mt.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[ee.id]=new Li(1,1,{generateMipmaps:!0,type:je?Ji:ri,minFilter:ns,samples:Math.max(4,R.samples),stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:mt.workingColorSpace})}const we=P.state.transmissionRenderTarget[ee.id],ke=ee.viewport||N;we.setSize(ke.z*X.transmissionResolutionScale,ke.w*X.transmissionResolutionScale);const Te=X.getRenderTarget(),We=X.getActiveCubeFace(),Ke=X.getActiveMipmapLevel();X.setRenderTarget(we),X.getClearColor(qe),ze=X.getClearAlpha(),ze<1&&X.setClearColor(16777215,.5),X.clear(),Ct&&it.render(se);const at=X.toneMapping;X.toneMapping=Pi;const ot=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),P.setupLightsView(ee),vt===!0&&Ze.setGlobalState(X.clippingPlanes,ee),Nr(w,se,ee),ue.updateMultisampleRenderTarget(we),ue.updateRenderTargetMipmap(we),Mt.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let _t=0,It=W.length;_t<It;_t++){const Vt=W[_t],{object:Rt,geometry:Jt,material:Fe,group:hn}=Vt;if(Fe.side===qi&&Rt.layers.test(ee.layers)){const ft=Fe.side;Fe.side=zn,Fe.needsUpdate=!0,ia(Rt,se,ee,Jt,Fe,hn),Fe.side=ft,Fe.needsUpdate=!0,je=!0}}je===!0&&(ue.updateMultisampleRenderTarget(we),ue.updateRenderTargetMipmap(we))}X.setRenderTarget(Te,We,Ke),X.setClearColor(qe,ze),ot!==void 0&&(ee.viewport=ot),X.toneMapping=at}function Nr(w,W,se){const ee=W.isScene===!0?W.overrideMaterial:null;for(let J=0,we=w.length;J<we;J++){const ke=w[J],{object:Te,geometry:We,group:Ke}=ke;let at=ke.material;at.allowOverride===!0&&ee!==null&&(at=ee),Te.layers.test(se.layers)&&ia(Te,W,se,We,at,Ke)}}function ia(w,W,se,ee,J,we){w.onBeforeRender(X,W,se,ee,J,we),w.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),J.onBeforeRender(X,W,se,ee,w,we),J.transparent===!0&&J.side===qi&&J.forceSinglePass===!1?(J.side=zn,J.needsUpdate=!0,X.renderBufferDirect(se,W,ee,J,w,we),J.side=Pr,J.needsUpdate=!0,X.renderBufferDirect(se,W,ee,J,w,we),J.side=qi):X.renderBufferDirect(se,W,ee,J,w,we),w.onAfterRender(X,W,se,ee,J,we)}function Ur(w,W,se){W.isScene!==!0&&(W=Gt);const ee=ne.get(w),J=P.state.lights,we=P.state.shadowsArray,ke=J.state.version,Te=Pe.getParameters(w,J.state,we,W,se,P.state.lightProbeGridArray),We=Pe.getProgramCacheKey(Te);let Ke=ee.programs;ee.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?W.environment:null,ee.fog=W.fog;const at=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;ee.envMap=Me.get(w.envMap||ee.environment,at),ee.envMapRotation=ee.environment!==null&&w.envMap===null?W.environmentRotation:w.envMapRotation,Ke===void 0&&(w.addEventListener("dispose",qn),Ke=new Map,ee.programs=Ke);let ot=Ke.get(We);if(ot!==void 0){if(ee.currentProgram===ot&&ee.lightsStateVersion===ke)return no(w,Te),ot}else Te.uniforms=Pe.getUniforms(w),$!==null&&w.isNodeMaterial&&$.build(w,se,Te),w.onBeforeCompile(Te,X),ot=Pe.acquireProgram(Te,We),Ke.set(We,ot),ee.uniforms=Te.uniforms;const je=ee.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(je.clippingPlanes=Ze.uniform),no(w,Te),ee.needsLights=sa(w),ee.lightsStateVersion=ke,ee.needsLights&&(je.ambientLightColor.value=J.state.ambient,je.lightProbe.value=J.state.probe,je.directionalLights.value=J.state.directional,je.directionalLightShadows.value=J.state.directionalShadow,je.spotLights.value=J.state.spot,je.spotLightShadows.value=J.state.spotShadow,je.rectAreaLights.value=J.state.rectArea,je.ltc_1.value=J.state.rectAreaLTC1,je.ltc_2.value=J.state.rectAreaLTC2,je.pointLights.value=J.state.point,je.pointLightShadows.value=J.state.pointShadow,je.hemisphereLights.value=J.state.hemi,je.directionalShadowMatrix.value=J.state.directionalShadowMatrix,je.spotLightMatrix.value=J.state.spotLightMatrix,je.spotLightMap.value=J.state.spotLightMap,je.pointShadowMatrix.value=J.state.pointShadowMatrix),ee.lightProbeGrid=P.state.lightProbeGridArray.length>0,ee.currentProgram=ot,ee.uniformsList=null,ot}function ra(w){if(w.uniformsList===null){const W=w.currentProgram.getUniforms();w.uniformsList=Nl.seqWithValue(W.seq,w.uniforms)}return w.uniformsList}function no(w,W){const se=ne.get(w);se.outputColorSpace=W.outputColorSpace,se.batching=W.batching,se.batchingColor=W.batchingColor,se.instancing=W.instancing,se.instancingColor=W.instancingColor,se.instancingMorph=W.instancingMorph,se.skinning=W.skinning,se.morphTargets=W.morphTargets,se.morphNormals=W.morphNormals,se.morphColors=W.morphColors,se.morphTargetsCount=W.morphTargetsCount,se.numClippingPlanes=W.numClippingPlanes,se.numIntersection=W.numClipIntersection,se.vertexAlphas=W.vertexAlphas,se.vertexTangents=W.vertexTangents,se.toneMapping=W.toneMapping}function Kl(w,W){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;b.setFromMatrixPosition(W.matrixWorld);for(let se=0,ee=w.length;se<ee;se++){const J=w[se];if(J.texture!==null&&J.boundingBox.containsPoint(b))return J}return null}function Wt(w,W,se,ee,J){W.isScene!==!0&&(W=Gt),ue.resetTextureUnits();const we=W.fog,ke=ee.isMeshStandardMaterial||ee.isMeshLambertMaterial||ee.isMeshPhongMaterial?W.environment:null,Te=Y===null?X.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:mt.workingColorSpace,We=ee.isMeshStandardMaterial||ee.isMeshLambertMaterial&&!ee.envMap||ee.isMeshPhongMaterial&&!ee.envMap,Ke=Me.get(ee.envMap||ke,We),at=ee.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,ot=!!se.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),je=!!se.morphAttributes.position,_t=!!se.morphAttributes.normal,It=!!se.morphAttributes.color;let Vt=Pi;ee.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Vt=X.toneMapping);const Rt=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,Jt=Rt!==void 0?Rt.length:0,Fe=ne.get(ee),hn=P.state.lights;if(vt===!0&&(pt===!0||w!==le)){const Pt=w===le&&ee.id===oe;Ze.setState(ee,w,Pt)}let ft=!1;ee.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==hn.state.version||Fe.outputColorSpace!==Te||J.isBatchedMesh&&Fe.batching===!1||!J.isBatchedMesh&&Fe.batching===!0||J.isBatchedMesh&&Fe.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&Fe.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&Fe.instancing===!1||!J.isInstancedMesh&&Fe.instancing===!0||J.isSkinnedMesh&&Fe.skinning===!1||!J.isSkinnedMesh&&Fe.skinning===!0||J.isInstancedMesh&&Fe.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Fe.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Fe.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Fe.instancingMorph===!1&&J.morphTexture!==null||Fe.envMap!==Ke||ee.fog===!0&&Fe.fog!==we||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==Ze.numPlanes||Fe.numIntersection!==Ze.numIntersection)||Fe.vertexAlphas!==at||Fe.vertexTangents!==ot||Fe.morphTargets!==je||Fe.morphNormals!==_t||Fe.morphColors!==It||Fe.toneMapping!==Vt||Fe.morphTargetsCount!==Jt||!!Fe.lightProbeGrid!=P.state.lightProbeGridArray.length>0)&&(ft=!0):(ft=!0,Fe.__version=ee.version);let Ln=Fe.currentProgram;ft===!0&&(Ln=Ur(ee,W,J),$&&ee.isNodeMaterial&&$.onUpdateProgram(ee,Ln,Fe));let Dn=!1,dt=!1,Ni=!1;const bt=Ln.getUniforms(),Ut=Fe.uniforms;if(x.useProgram(Ln.program)&&(Dn=!0,dt=!0,Ni=!0),ee.id!==oe&&(oe=ee.id,dt=!0),Fe.needsLights){const Pt=Kl(P.state.lightProbeGridArray,J);Fe.lightProbeGrid!==Pt&&(Fe.lightProbeGrid=Pt,dt=!0)}if(Dn||le!==w){x.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),bt.setValue(G,"projectionMatrix",w.projectionMatrix),bt.setValue(G,"viewMatrix",w.matrixWorldInverse);const oi=bt.map.cameraPosition;oi!==void 0&&oi.setValue(G,jt.setFromMatrixPosition(w.matrixWorld)),R.logarithmicDepthBuffer&&bt.setValue(G,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&bt.setValue(G,"isOrthographic",w.isOrthographicCamera===!0),le!==w&&(le=w,dt=!0,Ni=!0)}if(Fe.needsLights&&(hn.state.directionalShadowMap.length>0&&bt.setValue(G,"directionalShadowMap",hn.state.directionalShadowMap,ue),hn.state.spotShadowMap.length>0&&bt.setValue(G,"spotShadowMap",hn.state.spotShadowMap,ue),hn.state.pointShadowMap.length>0&&bt.setValue(G,"pointShadowMap",hn.state.pointShadowMap,ue)),J.isSkinnedMesh){bt.setOptional(G,J,"bindMatrix"),bt.setOptional(G,J,"bindMatrixInverse");const Pt=J.skeleton;Pt&&(Pt.boneTexture===null&&Pt.computeBoneTexture(),bt.setValue(G,"boneTexture",Pt.boneTexture,ue))}J.isBatchedMesh&&(bt.setOptional(G,J,"batchingTexture"),bt.setValue(G,"batchingTexture",J._matricesTexture,ue),bt.setOptional(G,J,"batchingIdTexture"),bt.setValue(G,"batchingIdTexture",J._indirectTexture,ue),bt.setOptional(G,J,"batchingColorTexture"),J._colorsTexture!==null&&bt.setValue(G,"batchingColorTexture",J._colorsTexture,ue));const ai=se.morphAttributes;if((ai.position!==void 0||ai.normal!==void 0||ai.color!==void 0)&&z.update(J,se,Ln),(dt||Fe.receiveShadow!==J.receiveShadow)&&(Fe.receiveShadow=J.receiveShadow,bt.setValue(G,"receiveShadow",J.receiveShadow)),(ee.isMeshStandardMaterial||ee.isMeshLambertMaterial||ee.isMeshPhongMaterial)&&ee.envMap===null&&W.environment!==null&&(Ut.envMapIntensity.value=W.environmentIntensity),Ut.dfgLUT!==void 0&&(Ut.dfgLUT.value=l2()),dt){if(bt.setValue(G,"toneMappingExposure",X.toneMappingExposure),Fe.needsLights&&Zl(Ut,Ni),we&&ee.fog===!0&&Ye.refreshFogUniforms(Ut,we),Ye.refreshMaterialUniforms(Ut,ee,pe,_e,P.state.transmissionRenderTarget[w.id]),Fe.needsLights&&Fe.lightProbeGrid){const Pt=Fe.lightProbeGrid;Ut.probesSH.value=Pt.texture,Ut.probesMin.value.copy(Pt.boundingBox.min),Ut.probesMax.value.copy(Pt.boundingBox.max),Ut.probesResolution.value.copy(Pt.resolution)}Nl.upload(G,ra(Fe),Ut,ue)}if(ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(Nl.upload(G,ra(Fe),Ut,ue),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&bt.setValue(G,"center",J.center),bt.setValue(G,"modelViewMatrix",J.modelViewMatrix),bt.setValue(G,"normalMatrix",J.normalMatrix),bt.setValue(G,"modelMatrix",J.matrixWorld),ee.uniformsGroups!==void 0){const Pt=ee.uniformsGroups;for(let oi=0,Si=Pt.length;oi<Si;oi++){const Fr=Pt[oi];ve.update(Fr,Ln),ve.bind(Fr,Ln)}}return Ln}function Zl(w,W){w.ambientLightColor.needsUpdate=W,w.lightProbe.needsUpdate=W,w.directionalLights.needsUpdate=W,w.directionalLightShadows.needsUpdate=W,w.pointLights.needsUpdate=W,w.pointLightShadows.needsUpdate=W,w.spotLights.needsUpdate=W,w.spotLightShadows.needsUpdate=W,w.rectAreaLights.needsUpdate=W,w.hemisphereLights.needsUpdate=W}function sa(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return fe},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(w,W,se){const ee=ne.get(w);ee.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,ee.__autoAllocateDepthBuffer===!1&&(ee.__useRenderToTexture=!1),ne.get(w.texture).__webglTexture=W,ne.get(w.depthTexture).__webglTexture=ee.__autoAllocateDepthBuffer?void 0:se,ee.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,W){const se=ne.get(w);se.__webglFramebuffer=W,se.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(w,W=0,se=0){Y=w,fe=W,q=se;let ee=null,J=!1,we=!1;if(w){const Te=ne.get(w);if(Te.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(G.FRAMEBUFFER,Te.__webglFramebuffer),N.copy(w.viewport),K.copy(w.scissor),Ne=w.scissorTest,x.viewport(N),x.scissor(K),x.setScissorTest(Ne),oe=-1;return}else if(Te.__webglFramebuffer===void 0)ue.setupRenderTarget(w);else if(Te.__hasExternalTextures)ue.rebindTextures(w,ne.get(w.texture).__webglTexture,ne.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const at=w.depthTexture;if(Te.__boundDepthTexture!==at){if(at!==null&&ne.has(at)&&(w.width!==at.image.width||w.height!==at.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ue.setupDepthRenderbuffer(w)}}const We=w.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(we=!0);const Ke=ne.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ke[W])?ee=Ke[W][se]:ee=Ke[W],J=!0):w.samples>0&&ue.useMultisampledRTT(w)===!1?ee=ne.get(w).__webglMultisampledFramebuffer:Array.isArray(Ke)?ee=Ke[se]:ee=Ke,N.copy(w.viewport),K.copy(w.scissor),Ne=w.scissorTest}else N.copy(Je).multiplyScalar(pe).floor(),K.copy(kt).multiplyScalar(pe).floor(),Ne=ut;if(se!==0&&(ee=ce),x.bindFramebuffer(G.FRAMEBUFFER,ee)&&x.drawBuffers(w,ee),x.viewport(N),x.scissor(K),x.setScissorTest(Ne),J){const Te=ne.get(w.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+W,Te.__webglTexture,se)}else if(we){const Te=W;for(let We=0;We<w.textures.length;We++){const Ke=ne.get(w.textures[We]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+We,Ke.__webglTexture,se,Te)}}else if(w!==null&&se!==0){const Te=ne.get(w.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Te.__webglTexture,se)}oe=-1},this.readRenderTargetPixels=function(w,W,se,ee,J,we,ke,Te=0){if(!(w&&w.isWebGLRenderTarget)){St("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=ne.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ke!==void 0&&(We=We[ke]),We){x.bindFramebuffer(G.FRAMEBUFFER,We);try{const Ke=w.textures[Te],at=Ke.format,ot=Ke.type;if(w.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Te),!R.textureFormatReadable(at)){St("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!R.textureTypeReadable(ot)){St("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=w.width-ee&&se>=0&&se<=w.height-J&&G.readPixels(W,se,ee,J,Re.convert(at),Re.convert(ot),we)}finally{const Ke=Y!==null?ne.get(Y).__webglFramebuffer:null;x.bindFramebuffer(G.FRAMEBUFFER,Ke)}}},this.readRenderTargetPixelsAsync=async function(w,W,se,ee,J,we,ke,Te=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=ne.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ke!==void 0&&(We=We[ke]),We)if(W>=0&&W<=w.width-ee&&se>=0&&se<=w.height-J){x.bindFramebuffer(G.FRAMEBUFFER,We);const Ke=w.textures[Te],at=Ke.format,ot=Ke.type;if(w.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Te),!R.textureFormatReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!R.textureTypeReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const je=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,je),G.bufferData(G.PIXEL_PACK_BUFFER,we.byteLength,G.STREAM_READ),G.readPixels(W,se,ee,J,Re.convert(at),Re.convert(ot),0);const _t=Y!==null?ne.get(Y).__webglFramebuffer:null;x.bindFramebuffer(G.FRAMEBUFFER,_t);const It=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await P_(G,It,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,je),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,we),G.deleteBuffer(je),G.deleteSync(It),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,W=null,se=0){const ee=Math.pow(2,-se),J=Math.floor(w.image.width*ee),we=Math.floor(w.image.height*ee),ke=W!==null?W.x:0,Te=W!==null?W.y:0;ue.setTexture2D(w,0),G.copyTexSubImage2D(G.TEXTURE_2D,se,0,0,ke,Te,J,we),x.unbindTexture()},this.copyTextureToTexture=function(w,W,se=null,ee=null,J=0,we=0){let ke,Te,We,Ke,at,ot,je,_t,It;const Vt=w.isCompressedTexture?w.mipmaps[we]:w.image;if(se!==null)ke=se.max.x-se.min.x,Te=se.max.y-se.min.y,We=se.isBox3?se.max.z-se.min.z:1,Ke=se.min.x,at=se.min.y,ot=se.isBox3?se.min.z:0;else{const Ut=Math.pow(2,-J);ke=Math.floor(Vt.width*Ut),Te=Math.floor(Vt.height*Ut),w.isDataArrayTexture?We=Vt.depth:w.isData3DTexture?We=Math.floor(Vt.depth*Ut):We=1,Ke=0,at=0,ot=0}ee!==null?(je=ee.x,_t=ee.y,It=ee.z):(je=0,_t=0,It=0);const Rt=Re.convert(W.format),Jt=Re.convert(W.type);let Fe;W.isData3DTexture?(ue.setTexture3D(W,0),Fe=G.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(ue.setTexture2DArray(W,0),Fe=G.TEXTURE_2D_ARRAY):(ue.setTexture2D(W,0),Fe=G.TEXTURE_2D),x.activeTexture(G.TEXTURE0),x.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,W.flipY),x.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),x.pixelStorei(G.UNPACK_ALIGNMENT,W.unpackAlignment);const hn=x.getParameter(G.UNPACK_ROW_LENGTH),ft=x.getParameter(G.UNPACK_IMAGE_HEIGHT),Ln=x.getParameter(G.UNPACK_SKIP_PIXELS),Dn=x.getParameter(G.UNPACK_SKIP_ROWS),dt=x.getParameter(G.UNPACK_SKIP_IMAGES);x.pixelStorei(G.UNPACK_ROW_LENGTH,Vt.width),x.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Vt.height),x.pixelStorei(G.UNPACK_SKIP_PIXELS,Ke),x.pixelStorei(G.UNPACK_SKIP_ROWS,at),x.pixelStorei(G.UNPACK_SKIP_IMAGES,ot);const Ni=w.isDataArrayTexture||w.isData3DTexture,bt=W.isDataArrayTexture||W.isData3DTexture;if(w.isDepthTexture){const Ut=ne.get(w),ai=ne.get(W),Pt=ne.get(Ut.__renderTarget),oi=ne.get(ai.__renderTarget);x.bindFramebuffer(G.READ_FRAMEBUFFER,Pt.__webglFramebuffer),x.bindFramebuffer(G.DRAW_FRAMEBUFFER,oi.__webglFramebuffer);for(let Si=0;Si<We;Si++)Ni&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,ne.get(w).__webglTexture,J,ot+Si),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,ne.get(W).__webglTexture,we,It+Si)),G.blitFramebuffer(Ke,at,ke,Te,je,_t,ke,Te,G.DEPTH_BUFFER_BIT,G.NEAREST);x.bindFramebuffer(G.READ_FRAMEBUFFER,null),x.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(J!==0||w.isRenderTargetTexture||ne.has(w)){const Ut=ne.get(w),ai=ne.get(W);x.bindFramebuffer(G.READ_FRAMEBUFFER,ge),x.bindFramebuffer(G.DRAW_FRAMEBUFFER,Z);for(let Pt=0;Pt<We;Pt++)Ni?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ut.__webglTexture,J,ot+Pt):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Ut.__webglTexture,J),bt?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,ai.__webglTexture,we,It+Pt):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,ai.__webglTexture,we),J!==0?G.blitFramebuffer(Ke,at,ke,Te,je,_t,ke,Te,G.COLOR_BUFFER_BIT,G.NEAREST):bt?G.copyTexSubImage3D(Fe,we,je,_t,It+Pt,Ke,at,ke,Te):G.copyTexSubImage2D(Fe,we,je,_t,Ke,at,ke,Te);x.bindFramebuffer(G.READ_FRAMEBUFFER,null),x.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else bt?w.isDataTexture||w.isData3DTexture?G.texSubImage3D(Fe,we,je,_t,It,ke,Te,We,Rt,Jt,Vt.data):W.isCompressedArrayTexture?G.compressedTexSubImage3D(Fe,we,je,_t,It,ke,Te,We,Rt,Vt.data):G.texSubImage3D(Fe,we,je,_t,It,ke,Te,We,Rt,Jt,Vt):w.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,we,je,_t,ke,Te,Rt,Jt,Vt.data):w.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,we,je,_t,Vt.width,Vt.height,Rt,Vt.data):G.texSubImage2D(G.TEXTURE_2D,we,je,_t,ke,Te,Rt,Jt,Vt);x.pixelStorei(G.UNPACK_ROW_LENGTH,hn),x.pixelStorei(G.UNPACK_IMAGE_HEIGHT,ft),x.pixelStorei(G.UNPACK_SKIP_PIXELS,Ln),x.pixelStorei(G.UNPACK_SKIP_ROWS,Dn),x.pixelStorei(G.UNPACK_SKIP_IMAGES,dt),we===0&&W.generateMipmaps&&G.generateMipmap(Fe),x.unbindTexture()},this.initRenderTarget=function(w){ne.get(w).__webglFramebuffer===void 0&&ue.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?ue.setTextureCube(w,0):w.isData3DTexture?ue.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?ue.setTexture2DArray(w,0):ue.setTexture2D(w,0),x.unbindTexture()},this.resetState=function(){fe=0,q=0,Y=null,x.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=mt._getDrawingBufferColorSpace(e),n.unpackColorSpace=mt._getUnpackColorSpace()}}function c2(){const s=fn.useRef(null);return fn.useEffect(()=>{const e=s.current;if(!e)return;const n=new Y_,r=new ii(60,window.innerWidth/window.innerHeight,.1,100);r.position.set(0,6,9),r.lookAt(0,0,0);const o=new u2({alpha:!0,antialias:!0});o.setSize(window.innerWidth,window.innerHeight),o.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.appendChild(o.domElement);const u=35e3,c=9,d=3,p=1.2,m=.6,S=3,y=new xi,g=new Float32Array(u*3),M=new Float32Array(u*3),A=new yt("#fd6e0a"),C=new yt("#00d2ff");for(let P=0;P<u;P++){const F=Math.pow(Math.random(),1.5)*c,T=P%d/d*Math.PI*2,D=F*p,X=Math.pow(Math.random(),S)*(Math.random()<.5?1:-1)*m*F,V=Math.pow(Math.random(),S)*(Math.random()<.5?1:-1)*m*F,$=Math.pow(Math.random(),S)*(Math.random()<.5?1:-1)*m*F;g[P*3]=Math.cos(T+D)*F+X,g[P*3+1]=V,g[P*3+2]=Math.sin(T+D)*F+$;const ce=A.clone().lerp(C,F/c);M[P*3]=ce.r,M[P*3+1]=ce.g,M[P*3+2]=ce.b}y.setAttribute("position",new si(g,3)),y.setAttribute("color",new si(M,3));const _=new y0({size:.025,sizeAttenuation:!0,depthWrite:!1,blending:ff,vertexColors:!0,transparent:!0,opacity:.45}),v=new nx(y,_);n.add(v);const O=()=>{const P=window.innerWidth,F=window.innerHeight;r.aspect=P/F,r.updateProjectionMatrix(),o.setSize(P,F)};window.addEventListener("resize",O);let k;const b=new hx,U=()=>{const P=b.getElapsedTime();v.rotation.y=P*.04,v.rotation.x=Math.sin(P*.1)*.08,o.render(n,r),k=requestAnimationFrame(U)};return U(),()=>{window.removeEventListener("resize",O),cancelAnimationFrame(k),e&&o.domElement&&e.removeChild(o.domElement),y.dispose(),_.dispose(),o.dispose()}},[]),L.jsx("div",{ref:s,style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",pointerEvents:"none",zIndex:0,overflow:"hidden"}})}function f2(){const[s,e]=fn.useState("About");return L.jsxs("div",{style:{background:"#050714",minHeight:"100vh",position:"relative"},children:[L.jsx(c2,{}),L.jsx(Ev,{active:s,setActive:e}),L.jsx(Tv,{}),L.jsx(Av,{}),L.jsx(bv,{}),L.jsx(Cv,{}),L.jsx(Hv,{}),L.jsx(Wv,{}),L.jsx(qv,{}),L.jsx($v,{}),L.jsx("footer",{style:{textAlign:"center",padding:"24px",borderTop:"1px solid rgba(255, 255, 255, 0.05)",color:"rgba(255, 255, 255, 0.22)",fontSize:13},children:"Built with React · Abhishek Yadav © 2025"})]})}Mv.createRoot(document.getElementById("root")).render(L.jsx(Rr.StrictMode,{children:L.jsx(f2,{})}));
