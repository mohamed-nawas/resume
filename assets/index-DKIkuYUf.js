(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function t(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(a){if(a.ep)return;a.ep=!0;const i=t(a);fetch(a.href,i)}})();function Oa(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Pc={exports:{}},Ra={},Ic={exports:{}},O={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var js=Symbol.for("react.element"),kd=Symbol.for("react.portal"),bd=Symbol.for("react.fragment"),Ed=Symbol.for("react.strict_mode"),jd=Symbol.for("react.profiler"),Td=Symbol.for("react.provider"),Cd=Symbol.for("react.context"),zd=Symbol.for("react.forward_ref"),Nd=Symbol.for("react.suspense"),Md=Symbol.for("react.memo"),Pd=Symbol.for("react.lazy"),to=Symbol.iterator;function Id(e){return e===null||typeof e!="object"?null:(e=to&&e[to]||e["@@iterator"],typeof e=="function"?e:null)}var Lc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Hc=Object.assign,Vc={};function Vt(e,n,t){this.props=e,this.context=n,this.refs=Vc,this.updater=t||Lc}Vt.prototype.isReactComponent={};Vt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Vt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ac(){}Ac.prototype=Vt.prototype;function Qr(e,n,t){this.props=e,this.context=n,this.refs=Vc,this.updater=t||Lc}var Xr=Qr.prototype=new Ac;Xr.constructor=Qr;Hc(Xr,Vt.prototype);Xr.isPureReactComponent=!0;var so=Array.isArray,Oc=Object.prototype.hasOwnProperty,Jr={current:null},Rc={key:!0,ref:!0,__self:!0,__source:!0};function Dc(e,n,t){var s,a={},i=null,r=null;if(n!=null)for(s in n.ref!==void 0&&(r=n.ref),n.key!==void 0&&(i=""+n.key),n)Oc.call(n,s)&&!Rc.hasOwnProperty(s)&&(a[s]=n[s]);var l=arguments.length-2;if(l===1)a.children=t;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];a.children=c}if(e&&e.defaultProps)for(s in l=e.defaultProps,l)a[s]===void 0&&(a[s]=l[s]);return{$$typeof:js,type:e,key:i,ref:r,props:a,_owner:Jr.current}}function Ld(e,n){return{$$typeof:js,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Zr(e){return typeof e=="object"&&e!==null&&e.$$typeof===js}function Hd(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var ao=/\/+/g;function fi(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Hd(""+e.key):n.toString(36)}function Xs(e,n,t,s,a){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(i){case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case js:case kd:r=!0}}if(r)return r=e,a=a(r),e=s===""?"."+fi(r,0):s,so(a)?(t="",e!=null&&(t=e.replace(ao,"$&/")+"/"),Xs(a,n,t,"",function(u){return u})):a!=null&&(Zr(a)&&(a=Ld(a,t+(!a.key||r&&r.key===a.key?"":(""+a.key).replace(ao,"$&/")+"/")+e)),n.push(a)),1;if(r=0,s=s===""?".":s+":",so(e))for(var l=0;l<e.length;l++){i=e[l];var c=s+fi(i,l);r+=Xs(i,n,t,c,a)}else if(c=Id(e),typeof c=="function")for(e=c.call(e),l=0;!(i=e.next()).done;)i=i.value,c=s+fi(i,l++),r+=Xs(i,n,t,c,a);else if(i==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return r}function Ms(e,n,t){if(e==null)return e;var s=[],a=0;return Xs(e,s,"","",function(i){return n.call(t,i,a++)}),s}function Vd(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var Ee={current:null},Js={transition:null},Ad={ReactCurrentDispatcher:Ee,ReactCurrentBatchConfig:Js,ReactCurrentOwner:Jr};function Fc(){throw Error("act(...) is not supported in production builds of React.")}O.Children={map:Ms,forEach:function(e,n,t){Ms(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return Ms(e,function(){n++}),n},toArray:function(e){return Ms(e,function(n){return n})||[]},only:function(e){if(!Zr(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};O.Component=Vt;O.Fragment=bd;O.Profiler=jd;O.PureComponent=Qr;O.StrictMode=Ed;O.Suspense=Nd;O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ad;O.act=Fc;O.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var s=Hc({},e.props),a=e.key,i=e.ref,r=e._owner;if(n!=null){if(n.ref!==void 0&&(i=n.ref,r=Jr.current),n.key!==void 0&&(a=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in n)Oc.call(n,c)&&!Rc.hasOwnProperty(c)&&(s[c]=n[c]===void 0&&l!==void 0?l[c]:n[c])}var c=arguments.length-2;if(c===1)s.children=t;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];s.children=l}return{$$typeof:js,type:e.type,key:a,ref:i,props:s,_owner:r}};O.createContext=function(e){return e={$$typeof:Cd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Td,_context:e},e.Consumer=e};O.createElement=Dc;O.createFactory=function(e){var n=Dc.bind(null,e);return n.type=e,n};O.createRef=function(){return{current:null}};O.forwardRef=function(e){return{$$typeof:zd,render:e}};O.isValidElement=Zr;O.lazy=function(e){return{$$typeof:Pd,_payload:{_status:-1,_result:e},_init:Vd}};O.memo=function(e,n){return{$$typeof:Md,type:e,compare:n===void 0?null:n}};O.startTransition=function(e){var n=Js.transition;Js.transition={};try{e()}finally{Js.transition=n}};O.unstable_act=Fc;O.useCallback=function(e,n){return Ee.current.useCallback(e,n)};O.useContext=function(e){return Ee.current.useContext(e)};O.useDebugValue=function(){};O.useDeferredValue=function(e){return Ee.current.useDeferredValue(e)};O.useEffect=function(e,n){return Ee.current.useEffect(e,n)};O.useId=function(){return Ee.current.useId()};O.useImperativeHandle=function(e,n,t){return Ee.current.useImperativeHandle(e,n,t)};O.useInsertionEffect=function(e,n){return Ee.current.useInsertionEffect(e,n)};O.useLayoutEffect=function(e,n){return Ee.current.useLayoutEffect(e,n)};O.useMemo=function(e,n){return Ee.current.useMemo(e,n)};O.useReducer=function(e,n,t){return Ee.current.useReducer(e,n,t)};O.useRef=function(e){return Ee.current.useRef(e)};O.useState=function(e){return Ee.current.useState(e)};O.useSyncExternalStore=function(e,n,t){return Ee.current.useSyncExternalStore(e,n,t)};O.useTransition=function(){return Ee.current.useTransition()};O.version="18.3.1";Ic.exports=O;var B=Ic.exports;const F=Oa(B);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Od=B,Rd=Symbol.for("react.element"),Dd=Symbol.for("react.fragment"),Fd=Object.prototype.hasOwnProperty,$d=Od.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Bd={key:!0,ref:!0,__self:!0,__source:!0};function $c(e,n,t){var s,a={},i=null,r=null;t!==void 0&&(i=""+t),n.key!==void 0&&(i=""+n.key),n.ref!==void 0&&(r=n.ref);for(s in n)Fd.call(n,s)&&!Bd.hasOwnProperty(s)&&(a[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps,n)a[s]===void 0&&(a[s]=n[s]);return{$$typeof:Rd,type:e,key:i,ref:r,props:a,_owner:$d.current}}Ra.Fragment=Dd;Ra.jsx=$c;Ra.jsxs=$c;Pc.exports=Ra;var o=Pc.exports,Xi={},Bc={exports:{}},Re={},Uc={exports:{}},Wc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(b,C){var T=b.length;b.push(C);e:for(;0<T;){var I=T-1>>>1,L=b[I];if(0<a(L,C))b[I]=C,b[T]=L,T=I;else break e}}function t(b){return b.length===0?null:b[0]}function s(b){if(b.length===0)return null;var C=b[0],T=b.pop();if(T!==C){b[0]=T;e:for(var I=0,L=b.length,$=L>>>1;I<$;){var J=2*(I+1)-1,he=b[J],re=J+1,fe=b[re];if(0>a(he,T))re<L&&0>a(fe,he)?(b[I]=fe,b[re]=T,I=re):(b[I]=he,b[J]=T,I=J);else if(re<L&&0>a(fe,T))b[I]=fe,b[re]=T,I=re;else break e}}return C}function a(b,C){var T=b.sortIndex-C.sortIndex;return T!==0?T:b.id-C.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var r=Date,l=r.now();e.unstable_now=function(){return r.now()-l}}var c=[],u=[],p=1,d=null,h=3,v=!1,_=!1,w=!1,N=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(b){for(var C=t(u);C!==null;){if(C.callback===null)s(u);else if(C.startTime<=b)s(u),C.sortIndex=C.expirationTime,n(c,C);else break;C=t(u)}}function y(b){if(w=!1,g(b),!_)if(t(c)!==null)_=!0,A(x);else{var C=t(u);C!==null&&q(y,C.startTime-b)}}function x(b,C){_=!1,w&&(w=!1,m(k),k=-1),v=!0;var T=h;try{for(g(C),d=t(c);d!==null&&(!(d.expirationTime>C)||b&&!M());){var I=d.callback;if(typeof I=="function"){d.callback=null,h=d.priorityLevel;var L=I(d.expirationTime<=C);C=e.unstable_now(),typeof L=="function"?d.callback=L:d===t(c)&&s(c),g(C)}else s(c);d=t(c)}if(d!==null)var $=!0;else{var J=t(u);J!==null&&q(y,J.startTime-C),$=!1}return $}finally{d=null,h=T,v=!1}}var j=!1,S=null,k=-1,H=5,E=-1;function M(){return!(e.unstable_now()-E<H)}function V(){if(S!==null){var b=e.unstable_now();E=b;var C=!0;try{C=S(!0,b)}finally{C?R():(j=!1,S=null)}}else j=!1}var R;if(typeof f=="function")R=function(){f(V)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,G=Y.port2;Y.port1.onmessage=V,R=function(){G.postMessage(null)}}else R=function(){N(V,0)};function A(b){S=b,j||(j=!0,R())}function q(b,C){k=N(function(){b(e.unstable_now())},C)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(b){b.callback=null},e.unstable_continueExecution=function(){_||v||(_=!0,A(x))},e.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<b?Math.floor(1e3/b):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return t(c)},e.unstable_next=function(b){switch(h){case 1:case 2:case 3:var C=3;break;default:C=h}var T=h;h=C;try{return b()}finally{h=T}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(b,C){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var T=h;h=b;try{return C()}finally{h=T}},e.unstable_scheduleCallback=function(b,C,T){var I=e.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?I+T:I):T=I,b){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=T+L,b={id:p++,callback:C,priorityLevel:b,startTime:T,expirationTime:L,sortIndex:-1},T>I?(b.sortIndex=T,n(u,b),t(c)===null&&b===t(u)&&(w?(m(k),k=-1):w=!0,q(y,T-I))):(b.sortIndex=L,n(c,b),_||v||(_=!0,A(x))),b},e.unstable_shouldYield=M,e.unstable_wrapCallback=function(b){var C=h;return function(){var T=h;h=C;try{return b.apply(this,arguments)}finally{h=T}}}})(Wc);Uc.exports=Wc;var Ud=Uc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wd=B,Oe=Ud;function z(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Gc=new Set,cs={};function at(e,n){Ct(e,n),Ct(e+"Capture",n)}function Ct(e,n){for(cs[e]=n,e=0;e<n.length;e++)Gc.add(n[e])}var gn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ji=Object.prototype.hasOwnProperty,Gd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,io={},ro={};function Yd(e){return Ji.call(ro,e)?!0:Ji.call(io,e)?!1:Gd.test(e)?ro[e]=!0:(io[e]=!0,!1)}function qd(e,n,t,s){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return s?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Kd(e,n,t,s){if(n===null||typeof n>"u"||qd(e,n,t,s))return!0;if(s)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function je(e,n,t,s,a,i,r){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=s,this.attributeNamespace=a,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=r}var ve={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ve[e]=new je(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];ve[n]=new je(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ve[e]=new je(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ve[e]=new je(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ve[e]=new je(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ve[e]=new je(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ve[e]=new je(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ve[e]=new je(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ve[e]=new je(e,5,!1,e.toLowerCase(),null,!1,!1)});var el=/[\-:]([a-z])/g;function nl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(el,nl);ve[n]=new je(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(el,nl);ve[n]=new je(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(el,nl);ve[n]=new je(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ve[e]=new je(e,1,!1,e.toLowerCase(),null,!1,!1)});ve.xlinkHref=new je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ve[e]=new je(e,1,!1,e.toLowerCase(),null,!0,!0)});function tl(e,n,t,s){var a=ve.hasOwnProperty(n)?ve[n]:null;(a!==null?a.type!==0:s||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Kd(n,t,a,s)&&(t=null),s||a===null?Yd(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):a.mustUseProperty?e[a.propertyName]=t===null?a.type===3?!1:"":t:(n=a.attributeName,s=a.attributeNamespace,t===null?e.removeAttribute(n):(a=a.type,t=a===3||a===4&&t===!0?"":""+t,s?e.setAttributeNS(s,n,t):e.setAttribute(n,t))))}var yn=Wd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ps=Symbol.for("react.element"),ut=Symbol.for("react.portal"),pt=Symbol.for("react.fragment"),sl=Symbol.for("react.strict_mode"),Zi=Symbol.for("react.profiler"),Yc=Symbol.for("react.provider"),qc=Symbol.for("react.context"),al=Symbol.for("react.forward_ref"),er=Symbol.for("react.suspense"),nr=Symbol.for("react.suspense_list"),il=Symbol.for("react.memo"),kn=Symbol.for("react.lazy"),Kc=Symbol.for("react.offscreen"),lo=Symbol.iterator;function Dt(e){return e===null||typeof e!="object"?null:(e=lo&&e[lo]||e["@@iterator"],typeof e=="function"?e:null)}var te=Object.assign,mi;function Kt(e){if(mi===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);mi=n&&n[1]||""}return`
`+mi+e}var gi=!1;function vi(e,n){if(!e||gi)return"";gi=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(u){var s=u}Reflect.construct(e,[],n)}else{try{n.call()}catch(u){s=u}e.call(n.prototype)}else{try{throw Error()}catch(u){s=u}e()}}catch(u){if(u&&s&&typeof u.stack=="string"){for(var a=u.stack.split(`
`),i=s.stack.split(`
`),r=a.length-1,l=i.length-1;1<=r&&0<=l&&a[r]!==i[l];)l--;for(;1<=r&&0<=l;r--,l--)if(a[r]!==i[l]){if(r!==1||l!==1)do if(r--,l--,0>l||a[r]!==i[l]){var c=`
`+a[r].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=r&&0<=l);break}}}finally{gi=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Kt(e):""}function Qd(e){switch(e.tag){case 5:return Kt(e.type);case 16:return Kt("Lazy");case 13:return Kt("Suspense");case 19:return Kt("SuspenseList");case 0:case 2:case 15:return e=vi(e.type,!1),e;case 11:return e=vi(e.type.render,!1),e;case 1:return e=vi(e.type,!0),e;default:return""}}function tr(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case pt:return"Fragment";case ut:return"Portal";case Zi:return"Profiler";case sl:return"StrictMode";case er:return"Suspense";case nr:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case qc:return(e.displayName||"Context")+".Consumer";case Yc:return(e._context.displayName||"Context")+".Provider";case al:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case il:return n=e.displayName||null,n!==null?n:tr(e.type)||"Memo";case kn:n=e._payload,e=e._init;try{return tr(e(n))}catch{}}return null}function Xd(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return tr(n);case 8:return n===sl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function On(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Qc(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Jd(e){var n=Qc(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),s=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var a=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return a.call(this)},set:function(r){s=""+r,i.call(this,r)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return s},setValue:function(r){s=""+r},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Is(e){e._valueTracker||(e._valueTracker=Jd(e))}function Xc(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),s="";return e&&(s=Qc(e)?e.checked?"true":"false":e.value),e=s,e!==t?(n.setValue(e),!0):!1}function ua(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function sr(e,n){var t=n.checked;return te({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function oo(e,n){var t=n.defaultValue==null?"":n.defaultValue,s=n.checked!=null?n.checked:n.defaultChecked;t=On(n.value!=null?n.value:t),e._wrapperState={initialChecked:s,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Jc(e,n){n=n.checked,n!=null&&tl(e,"checked",n,!1)}function ar(e,n){Jc(e,n);var t=On(n.value),s=n.type;if(t!=null)s==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?ir(e,n.type,t):n.hasOwnProperty("defaultValue")&&ir(e,n.type,On(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function co(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var s=n.type;if(!(s!=="submit"&&s!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function ir(e,n,t){(n!=="number"||ua(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Qt=Array.isArray;function St(e,n,t,s){if(e=e.options,n){n={};for(var a=0;a<t.length;a++)n["$"+t[a]]=!0;for(t=0;t<e.length;t++)a=n.hasOwnProperty("$"+e[t].value),e[t].selected!==a&&(e[t].selected=a),a&&s&&(e[t].defaultSelected=!0)}else{for(t=""+On(t),n=null,a=0;a<e.length;a++){if(e[a].value===t){e[a].selected=!0,s&&(e[a].defaultSelected=!0);return}n!==null||e[a].disabled||(n=e[a])}n!==null&&(n.selected=!0)}}function rr(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(z(91));return te({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function uo(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(z(92));if(Qt(t)){if(1<t.length)throw Error(z(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:On(t)}}function Zc(e,n){var t=On(n.value),s=On(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),s!=null&&(e.defaultValue=""+s)}function po(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function eu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function lr(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?eu(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ls,nu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,s,a){MSApp.execUnsafeLocalFunction(function(){return e(n,t,s,a)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Ls=Ls||document.createElement("div"),Ls.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Ls.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function us(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Zt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Zd=["Webkit","ms","Moz","O"];Object.keys(Zt).forEach(function(e){Zd.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Zt[n]=Zt[e]})});function tu(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Zt.hasOwnProperty(e)&&Zt[e]?(""+n).trim():n+"px"}function su(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var s=t.indexOf("--")===0,a=tu(t,n[t],s);t==="float"&&(t="cssFloat"),s?e.setProperty(t,a):e[t]=a}}var eh=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function or(e,n){if(n){if(eh[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(z(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(z(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(z(61))}if(n.style!=null&&typeof n.style!="object")throw Error(z(62))}}function cr(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ur=null;function rl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var pr=null,kt=null,bt=null;function ho(e){if(e=zs(e)){if(typeof pr!="function")throw Error(z(280));var n=e.stateNode;n&&(n=Ua(n),pr(e.stateNode,e.type,n))}}function au(e){kt?bt?bt.push(e):bt=[e]:kt=e}function iu(){if(kt){var e=kt,n=bt;if(bt=kt=null,ho(e),n)for(e=0;e<n.length;e++)ho(n[e])}}function ru(e,n){return e(n)}function lu(){}var _i=!1;function ou(e,n,t){if(_i)return e(n,t);_i=!0;try{return ru(e,n,t)}finally{_i=!1,(kt!==null||bt!==null)&&(lu(),iu())}}function ps(e,n){var t=e.stateNode;if(t===null)return null;var s=Ua(t);if(s===null)return null;t=s[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(z(231,n,typeof t));return t}var dr=!1;if(gn)try{var Ft={};Object.defineProperty(Ft,"passive",{get:function(){dr=!0}}),window.addEventListener("test",Ft,Ft),window.removeEventListener("test",Ft,Ft)}catch{dr=!1}function nh(e,n,t,s,a,i,r,l,c){var u=Array.prototype.slice.call(arguments,3);try{n.apply(t,u)}catch(p){this.onError(p)}}var es=!1,pa=null,da=!1,hr=null,th={onError:function(e){es=!0,pa=e}};function sh(e,n,t,s,a,i,r,l,c){es=!1,pa=null,nh.apply(th,arguments)}function ah(e,n,t,s,a,i,r,l,c){if(sh.apply(this,arguments),es){if(es){var u=pa;es=!1,pa=null}else throw Error(z(198));da||(da=!0,hr=u)}}function it(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function cu(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function fo(e){if(it(e)!==e)throw Error(z(188))}function ih(e){var n=e.alternate;if(!n){if(n=it(e),n===null)throw Error(z(188));return n!==e?null:e}for(var t=e,s=n;;){var a=t.return;if(a===null)break;var i=a.alternate;if(i===null){if(s=a.return,s!==null){t=s;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===t)return fo(a),e;if(i===s)return fo(a),n;i=i.sibling}throw Error(z(188))}if(t.return!==s.return)t=a,s=i;else{for(var r=!1,l=a.child;l;){if(l===t){r=!0,t=a,s=i;break}if(l===s){r=!0,s=a,t=i;break}l=l.sibling}if(!r){for(l=i.child;l;){if(l===t){r=!0,t=i,s=a;break}if(l===s){r=!0,s=i,t=a;break}l=l.sibling}if(!r)throw Error(z(189))}}if(t.alternate!==s)throw Error(z(190))}if(t.tag!==3)throw Error(z(188));return t.stateNode.current===t?e:n}function uu(e){return e=ih(e),e!==null?pu(e):null}function pu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=pu(e);if(n!==null)return n;e=e.sibling}return null}var du=Oe.unstable_scheduleCallback,mo=Oe.unstable_cancelCallback,rh=Oe.unstable_shouldYield,lh=Oe.unstable_requestPaint,ae=Oe.unstable_now,oh=Oe.unstable_getCurrentPriorityLevel,ll=Oe.unstable_ImmediatePriority,hu=Oe.unstable_UserBlockingPriority,ha=Oe.unstable_NormalPriority,ch=Oe.unstable_LowPriority,fu=Oe.unstable_IdlePriority,Da=null,rn=null;function uh(e){if(rn&&typeof rn.onCommitFiberRoot=="function")try{rn.onCommitFiberRoot(Da,e,void 0,(e.current.flags&128)===128)}catch{}}var Ze=Math.clz32?Math.clz32:hh,ph=Math.log,dh=Math.LN2;function hh(e){return e>>>=0,e===0?32:31-(ph(e)/dh|0)|0}var Hs=64,Vs=4194304;function Xt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function fa(e,n){var t=e.pendingLanes;if(t===0)return 0;var s=0,a=e.suspendedLanes,i=e.pingedLanes,r=t&268435455;if(r!==0){var l=r&~a;l!==0?s=Xt(l):(i&=r,i!==0&&(s=Xt(i)))}else r=t&~a,r!==0?s=Xt(r):i!==0&&(s=Xt(i));if(s===0)return 0;if(n!==0&&n!==s&&!(n&a)&&(a=s&-s,i=n&-n,a>=i||a===16&&(i&4194240)!==0))return n;if(s&4&&(s|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=s;0<n;)t=31-Ze(n),a=1<<t,s|=e[t],n&=~a;return s}function fh(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function mh(e,n){for(var t=e.suspendedLanes,s=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes;0<i;){var r=31-Ze(i),l=1<<r,c=a[r];c===-1?(!(l&t)||l&s)&&(a[r]=fh(l,n)):c<=n&&(e.expiredLanes|=l),i&=~l}}function fr(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function mu(){var e=Hs;return Hs<<=1,!(Hs&4194240)&&(Hs=64),e}function wi(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Ts(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Ze(n),e[n]=t}function gh(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<t;){var a=31-Ze(t),i=1<<a;n[a]=0,s[a]=-1,e[a]=-1,t&=~i}}function ol(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var s=31-Ze(t),a=1<<s;a&n|e[s]&n&&(e[s]|=n),t&=~a}}var U=0;function gu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var vu,cl,_u,wu,yu,mr=!1,As=[],Nn=null,Mn=null,Pn=null,ds=new Map,hs=new Map,En=[],vh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function go(e,n){switch(e){case"focusin":case"focusout":Nn=null;break;case"dragenter":case"dragleave":Mn=null;break;case"mouseover":case"mouseout":Pn=null;break;case"pointerover":case"pointerout":ds.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":hs.delete(n.pointerId)}}function $t(e,n,t,s,a,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:s,nativeEvent:i,targetContainers:[a]},n!==null&&(n=zs(n),n!==null&&cl(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,a!==null&&n.indexOf(a)===-1&&n.push(a),e)}function _h(e,n,t,s,a){switch(n){case"focusin":return Nn=$t(Nn,e,n,t,s,a),!0;case"dragenter":return Mn=$t(Mn,e,n,t,s,a),!0;case"mouseover":return Pn=$t(Pn,e,n,t,s,a),!0;case"pointerover":var i=a.pointerId;return ds.set(i,$t(ds.get(i)||null,e,n,t,s,a)),!0;case"gotpointercapture":return i=a.pointerId,hs.set(i,$t(hs.get(i)||null,e,n,t,s,a)),!0}return!1}function xu(e){var n=Gn(e.target);if(n!==null){var t=it(n);if(t!==null){if(n=t.tag,n===13){if(n=cu(t),n!==null){e.blockedOn=n,yu(e.priority,function(){_u(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Zs(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=gr(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var s=new t.constructor(t.type,t);ur=s,t.target.dispatchEvent(s),ur=null}else return n=zs(t),n!==null&&cl(n),e.blockedOn=t,!1;n.shift()}return!0}function vo(e,n,t){Zs(e)&&t.delete(n)}function wh(){mr=!1,Nn!==null&&Zs(Nn)&&(Nn=null),Mn!==null&&Zs(Mn)&&(Mn=null),Pn!==null&&Zs(Pn)&&(Pn=null),ds.forEach(vo),hs.forEach(vo)}function Bt(e,n){e.blockedOn===n&&(e.blockedOn=null,mr||(mr=!0,Oe.unstable_scheduleCallback(Oe.unstable_NormalPriority,wh)))}function fs(e){function n(a){return Bt(a,e)}if(0<As.length){Bt(As[0],e);for(var t=1;t<As.length;t++){var s=As[t];s.blockedOn===e&&(s.blockedOn=null)}}for(Nn!==null&&Bt(Nn,e),Mn!==null&&Bt(Mn,e),Pn!==null&&Bt(Pn,e),ds.forEach(n),hs.forEach(n),t=0;t<En.length;t++)s=En[t],s.blockedOn===e&&(s.blockedOn=null);for(;0<En.length&&(t=En[0],t.blockedOn===null);)xu(t),t.blockedOn===null&&En.shift()}var Et=yn.ReactCurrentBatchConfig,ma=!0;function yh(e,n,t,s){var a=U,i=Et.transition;Et.transition=null;try{U=1,ul(e,n,t,s)}finally{U=a,Et.transition=i}}function xh(e,n,t,s){var a=U,i=Et.transition;Et.transition=null;try{U=4,ul(e,n,t,s)}finally{U=a,Et.transition=i}}function ul(e,n,t,s){if(ma){var a=gr(e,n,t,s);if(a===null)zi(e,n,s,ga,t),go(e,s);else if(_h(a,e,n,t,s))s.stopPropagation();else if(go(e,s),n&4&&-1<vh.indexOf(e)){for(;a!==null;){var i=zs(a);if(i!==null&&vu(i),i=gr(e,n,t,s),i===null&&zi(e,n,s,ga,t),i===a)break;a=i}a!==null&&s.stopPropagation()}else zi(e,n,s,null,t)}}var ga=null;function gr(e,n,t,s){if(ga=null,e=rl(s),e=Gn(e),e!==null)if(n=it(e),n===null)e=null;else if(t=n.tag,t===13){if(e=cu(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return ga=e,null}function Su(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(oh()){case ll:return 1;case hu:return 4;case ha:case ch:return 16;case fu:return 536870912;default:return 16}default:return 16}}var Tn=null,pl=null,ea=null;function ku(){if(ea)return ea;var e,n=pl,t=n.length,s,a="value"in Tn?Tn.value:Tn.textContent,i=a.length;for(e=0;e<t&&n[e]===a[e];e++);var r=t-e;for(s=1;s<=r&&n[t-s]===a[i-s];s++);return ea=a.slice(e,1<s?1-s:void 0)}function na(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Os(){return!0}function _o(){return!1}function De(e){function n(t,s,a,i,r){this._reactName=t,this._targetInst=a,this.type=s,this.nativeEvent=i,this.target=r,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(t=e[l],this[l]=t?t(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Os:_o,this.isPropagationStopped=_o,this}return te(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Os)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Os)},persist:function(){},isPersistent:Os}),n}var At={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},dl=De(At),Cs=te({},At,{view:0,detail:0}),Sh=De(Cs),yi,xi,Ut,Fa=te({},Cs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ut&&(Ut&&e.type==="mousemove"?(yi=e.screenX-Ut.screenX,xi=e.screenY-Ut.screenY):xi=yi=0,Ut=e),yi)},movementY:function(e){return"movementY"in e?e.movementY:xi}}),wo=De(Fa),kh=te({},Fa,{dataTransfer:0}),bh=De(kh),Eh=te({},Cs,{relatedTarget:0}),Si=De(Eh),jh=te({},At,{animationName:0,elapsedTime:0,pseudoElement:0}),Th=De(jh),Ch=te({},At,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),zh=De(Ch),Nh=te({},At,{data:0}),yo=De(Nh),Mh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ph={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ih={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Lh(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Ih[e])?!!n[e]:!1}function hl(){return Lh}var Hh=te({},Cs,{key:function(e){if(e.key){var n=Mh[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=na(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ph[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hl,charCode:function(e){return e.type==="keypress"?na(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?na(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Vh=De(Hh),Ah=te({},Fa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xo=De(Ah),Oh=te({},Cs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hl}),Rh=De(Oh),Dh=te({},At,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fh=De(Dh),$h=te({},Fa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Bh=De($h),Uh=[9,13,27,32],fl=gn&&"CompositionEvent"in window,ns=null;gn&&"documentMode"in document&&(ns=document.documentMode);var Wh=gn&&"TextEvent"in window&&!ns,bu=gn&&(!fl||ns&&8<ns&&11>=ns),So=" ",ko=!1;function Eu(e,n){switch(e){case"keyup":return Uh.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ju(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var dt=!1;function Gh(e,n){switch(e){case"compositionend":return ju(n);case"keypress":return n.which!==32?null:(ko=!0,So);case"textInput":return e=n.data,e===So&&ko?null:e;default:return null}}function Yh(e,n){if(dt)return e==="compositionend"||!fl&&Eu(e,n)?(e=ku(),ea=pl=Tn=null,dt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return bu&&n.locale!=="ko"?null:n.data;default:return null}}var qh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bo(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!qh[e.type]:n==="textarea"}function Tu(e,n,t,s){au(s),n=va(n,"onChange"),0<n.length&&(t=new dl("onChange","change",null,t,s),e.push({event:t,listeners:n}))}var ts=null,ms=null;function Kh(e){Ou(e,0)}function $a(e){var n=mt(e);if(Xc(n))return e}function Qh(e,n){if(e==="change")return n}var Cu=!1;if(gn){var ki;if(gn){var bi="oninput"in document;if(!bi){var Eo=document.createElement("div");Eo.setAttribute("oninput","return;"),bi=typeof Eo.oninput=="function"}ki=bi}else ki=!1;Cu=ki&&(!document.documentMode||9<document.documentMode)}function jo(){ts&&(ts.detachEvent("onpropertychange",zu),ms=ts=null)}function zu(e){if(e.propertyName==="value"&&$a(ms)){var n=[];Tu(n,ms,e,rl(e)),ou(Kh,n)}}function Xh(e,n,t){e==="focusin"?(jo(),ts=n,ms=t,ts.attachEvent("onpropertychange",zu)):e==="focusout"&&jo()}function Jh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return $a(ms)}function Zh(e,n){if(e==="click")return $a(n)}function ef(e,n){if(e==="input"||e==="change")return $a(n)}function nf(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var nn=typeof Object.is=="function"?Object.is:nf;function gs(e,n){if(nn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),s=Object.keys(n);if(t.length!==s.length)return!1;for(s=0;s<t.length;s++){var a=t[s];if(!Ji.call(n,a)||!nn(e[a],n[a]))return!1}return!0}function To(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Co(e,n){var t=To(e);e=0;for(var s;t;){if(t.nodeType===3){if(s=e+t.textContent.length,e<=n&&s>=n)return{node:t,offset:n-e};e=s}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=To(t)}}function Nu(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Nu(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Mu(){for(var e=window,n=ua();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=ua(e.document)}return n}function ml(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function tf(e){var n=Mu(),t=e.focusedElem,s=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Nu(t.ownerDocument.documentElement,t)){if(s!==null&&ml(t)){if(n=s.start,e=s.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var a=t.textContent.length,i=Math.min(s.start,a);s=s.end===void 0?i:Math.min(s.end,a),!e.extend&&i>s&&(a=s,s=i,i=a),a=Co(t,i);var r=Co(t,s);a&&r&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==r.node||e.focusOffset!==r.offset)&&(n=n.createRange(),n.setStart(a.node,a.offset),e.removeAllRanges(),i>s?(e.addRange(n),e.extend(r.node,r.offset)):(n.setEnd(r.node,r.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var sf=gn&&"documentMode"in document&&11>=document.documentMode,ht=null,vr=null,ss=null,_r=!1;function zo(e,n,t){var s=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;_r||ht==null||ht!==ua(s)||(s=ht,"selectionStart"in s&&ml(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),ss&&gs(ss,s)||(ss=s,s=va(vr,"onSelect"),0<s.length&&(n=new dl("onSelect","select",null,n,t),e.push({event:n,listeners:s}),n.target=ht)))}function Rs(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var ft={animationend:Rs("Animation","AnimationEnd"),animationiteration:Rs("Animation","AnimationIteration"),animationstart:Rs("Animation","AnimationStart"),transitionend:Rs("Transition","TransitionEnd")},Ei={},Pu={};gn&&(Pu=document.createElement("div").style,"AnimationEvent"in window||(delete ft.animationend.animation,delete ft.animationiteration.animation,delete ft.animationstart.animation),"TransitionEvent"in window||delete ft.transitionend.transition);function Ba(e){if(Ei[e])return Ei[e];if(!ft[e])return e;var n=ft[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Pu)return Ei[e]=n[t];return e}var Iu=Ba("animationend"),Lu=Ba("animationiteration"),Hu=Ba("animationstart"),Vu=Ba("transitionend"),Au=new Map,No="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Dn(e,n){Au.set(e,n),at(n,[e])}for(var ji=0;ji<No.length;ji++){var Ti=No[ji],af=Ti.toLowerCase(),rf=Ti[0].toUpperCase()+Ti.slice(1);Dn(af,"on"+rf)}Dn(Iu,"onAnimationEnd");Dn(Lu,"onAnimationIteration");Dn(Hu,"onAnimationStart");Dn("dblclick","onDoubleClick");Dn("focusin","onFocus");Dn("focusout","onBlur");Dn(Vu,"onTransitionEnd");Ct("onMouseEnter",["mouseout","mouseover"]);Ct("onMouseLeave",["mouseout","mouseover"]);Ct("onPointerEnter",["pointerout","pointerover"]);Ct("onPointerLeave",["pointerout","pointerover"]);at("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));at("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));at("onBeforeInput",["compositionend","keypress","textInput","paste"]);at("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));at("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));at("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Jt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Jt));function Mo(e,n,t){var s=e.type||"unknown-event";e.currentTarget=t,ah(s,n,void 0,e),e.currentTarget=null}function Ou(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var s=e[t],a=s.event;s=s.listeners;e:{var i=void 0;if(n)for(var r=s.length-1;0<=r;r--){var l=s[r],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==i&&a.isPropagationStopped())break e;Mo(a,l,u),i=c}else for(r=0;r<s.length;r++){if(l=s[r],c=l.instance,u=l.currentTarget,l=l.listener,c!==i&&a.isPropagationStopped())break e;Mo(a,l,u),i=c}}}if(da)throw e=hr,da=!1,hr=null,e}function Q(e,n){var t=n[kr];t===void 0&&(t=n[kr]=new Set);var s=e+"__bubble";t.has(s)||(Ru(n,e,2,!1),t.add(s))}function Ci(e,n,t){var s=0;n&&(s|=4),Ru(t,e,s,n)}var Ds="_reactListening"+Math.random().toString(36).slice(2);function vs(e){if(!e[Ds]){e[Ds]=!0,Gc.forEach(function(t){t!=="selectionchange"&&(lf.has(t)||Ci(t,!1,e),Ci(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Ds]||(n[Ds]=!0,Ci("selectionchange",!1,n))}}function Ru(e,n,t,s){switch(Su(n)){case 1:var a=yh;break;case 4:a=xh;break;default:a=ul}t=a.bind(null,n,t,e),a=void 0,!dr||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(a=!0),s?a!==void 0?e.addEventListener(n,t,{capture:!0,passive:a}):e.addEventListener(n,t,!0):a!==void 0?e.addEventListener(n,t,{passive:a}):e.addEventListener(n,t,!1)}function zi(e,n,t,s,a){var i=s;if(!(n&1)&&!(n&2)&&s!==null)e:for(;;){if(s===null)return;var r=s.tag;if(r===3||r===4){var l=s.stateNode.containerInfo;if(l===a||l.nodeType===8&&l.parentNode===a)break;if(r===4)for(r=s.return;r!==null;){var c=r.tag;if((c===3||c===4)&&(c=r.stateNode.containerInfo,c===a||c.nodeType===8&&c.parentNode===a))return;r=r.return}for(;l!==null;){if(r=Gn(l),r===null)return;if(c=r.tag,c===5||c===6){s=i=r;continue e}l=l.parentNode}}s=s.return}ou(function(){var u=i,p=rl(t),d=[];e:{var h=Au.get(e);if(h!==void 0){var v=dl,_=e;switch(e){case"keypress":if(na(t)===0)break e;case"keydown":case"keyup":v=Vh;break;case"focusin":_="focus",v=Si;break;case"focusout":_="blur",v=Si;break;case"beforeblur":case"afterblur":v=Si;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=wo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=bh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Rh;break;case Iu:case Lu:case Hu:v=Th;break;case Vu:v=Fh;break;case"scroll":v=Sh;break;case"wheel":v=Bh;break;case"copy":case"cut":case"paste":v=zh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=xo}var w=(n&4)!==0,N=!w&&e==="scroll",m=w?h!==null?h+"Capture":null:h;w=[];for(var f=u,g;f!==null;){g=f;var y=g.stateNode;if(g.tag===5&&y!==null&&(g=y,m!==null&&(y=ps(f,m),y!=null&&w.push(_s(f,y,g)))),N)break;f=f.return}0<w.length&&(h=new v(h,_,null,t,p),d.push({event:h,listeners:w}))}}if(!(n&7)){e:{if(h=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",h&&t!==ur&&(_=t.relatedTarget||t.fromElement)&&(Gn(_)||_[vn]))break e;if((v||h)&&(h=p.window===p?p:(h=p.ownerDocument)?h.defaultView||h.parentWindow:window,v?(_=t.relatedTarget||t.toElement,v=u,_=_?Gn(_):null,_!==null&&(N=it(_),_!==N||_.tag!==5&&_.tag!==6)&&(_=null)):(v=null,_=u),v!==_)){if(w=wo,y="onMouseLeave",m="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(w=xo,y="onPointerLeave",m="onPointerEnter",f="pointer"),N=v==null?h:mt(v),g=_==null?h:mt(_),h=new w(y,f+"leave",v,t,p),h.target=N,h.relatedTarget=g,y=null,Gn(p)===u&&(w=new w(m,f+"enter",_,t,p),w.target=g,w.relatedTarget=N,y=w),N=y,v&&_)n:{for(w=v,m=_,f=0,g=w;g;g=ct(g))f++;for(g=0,y=m;y;y=ct(y))g++;for(;0<f-g;)w=ct(w),f--;for(;0<g-f;)m=ct(m),g--;for(;f--;){if(w===m||m!==null&&w===m.alternate)break n;w=ct(w),m=ct(m)}w=null}else w=null;v!==null&&Po(d,h,v,w,!1),_!==null&&N!==null&&Po(d,N,_,w,!0)}}e:{if(h=u?mt(u):window,v=h.nodeName&&h.nodeName.toLowerCase(),v==="select"||v==="input"&&h.type==="file")var x=Qh;else if(bo(h))if(Cu)x=ef;else{x=Jh;var j=Xh}else(v=h.nodeName)&&v.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(x=Zh);if(x&&(x=x(e,u))){Tu(d,x,t,p);break e}j&&j(e,h,u),e==="focusout"&&(j=h._wrapperState)&&j.controlled&&h.type==="number"&&ir(h,"number",h.value)}switch(j=u?mt(u):window,e){case"focusin":(bo(j)||j.contentEditable==="true")&&(ht=j,vr=u,ss=null);break;case"focusout":ss=vr=ht=null;break;case"mousedown":_r=!0;break;case"contextmenu":case"mouseup":case"dragend":_r=!1,zo(d,t,p);break;case"selectionchange":if(sf)break;case"keydown":case"keyup":zo(d,t,p)}var S;if(fl)e:{switch(e){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else dt?Eu(e,t)&&(k="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(k="onCompositionStart");k&&(bu&&t.locale!=="ko"&&(dt||k!=="onCompositionStart"?k==="onCompositionEnd"&&dt&&(S=ku()):(Tn=p,pl="value"in Tn?Tn.value:Tn.textContent,dt=!0)),j=va(u,k),0<j.length&&(k=new yo(k,e,null,t,p),d.push({event:k,listeners:j}),S?k.data=S:(S=ju(t),S!==null&&(k.data=S)))),(S=Wh?Gh(e,t):Yh(e,t))&&(u=va(u,"onBeforeInput"),0<u.length&&(p=new yo("onBeforeInput","beforeinput",null,t,p),d.push({event:p,listeners:u}),p.data=S))}Ou(d,n)})}function _s(e,n,t){return{instance:e,listener:n,currentTarget:t}}function va(e,n){for(var t=n+"Capture",s=[];e!==null;){var a=e,i=a.stateNode;a.tag===5&&i!==null&&(a=i,i=ps(e,t),i!=null&&s.unshift(_s(e,i,a)),i=ps(e,n),i!=null&&s.push(_s(e,i,a))),e=e.return}return s}function ct(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Po(e,n,t,s,a){for(var i=n._reactName,r=[];t!==null&&t!==s;){var l=t,c=l.alternate,u=l.stateNode;if(c!==null&&c===s)break;l.tag===5&&u!==null&&(l=u,a?(c=ps(t,i),c!=null&&r.unshift(_s(t,c,l))):a||(c=ps(t,i),c!=null&&r.push(_s(t,c,l)))),t=t.return}r.length!==0&&e.push({event:n,listeners:r})}var of=/\r\n?/g,cf=/\u0000|\uFFFD/g;function Io(e){return(typeof e=="string"?e:""+e).replace(of,`
`).replace(cf,"")}function Fs(e,n,t){if(n=Io(n),Io(e)!==n&&t)throw Error(z(425))}function _a(){}var wr=null,yr=null;function xr(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Sr=typeof setTimeout=="function"?setTimeout:void 0,uf=typeof clearTimeout=="function"?clearTimeout:void 0,Lo=typeof Promise=="function"?Promise:void 0,pf=typeof queueMicrotask=="function"?queueMicrotask:typeof Lo<"u"?function(e){return Lo.resolve(null).then(e).catch(df)}:Sr;function df(e){setTimeout(function(){throw e})}function Ni(e,n){var t=n,s=0;do{var a=t.nextSibling;if(e.removeChild(t),a&&a.nodeType===8)if(t=a.data,t==="/$"){if(s===0){e.removeChild(a),fs(n);return}s--}else t!=="$"&&t!=="$?"&&t!=="$!"||s++;t=a}while(t);fs(n)}function In(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Ho(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Ot=Math.random().toString(36).slice(2),an="__reactFiber$"+Ot,ws="__reactProps$"+Ot,vn="__reactContainer$"+Ot,kr="__reactEvents$"+Ot,hf="__reactListeners$"+Ot,ff="__reactHandles$"+Ot;function Gn(e){var n=e[an];if(n)return n;for(var t=e.parentNode;t;){if(n=t[vn]||t[an]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Ho(e);e!==null;){if(t=e[an])return t;e=Ho(e)}return n}e=t,t=e.parentNode}return null}function zs(e){return e=e[an]||e[vn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function mt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(z(33))}function Ua(e){return e[ws]||null}var br=[],gt=-1;function Fn(e){return{current:e}}function X(e){0>gt||(e.current=br[gt],br[gt]=null,gt--)}function K(e,n){gt++,br[gt]=e.current,e.current=n}var Rn={},xe=Fn(Rn),Ne=Fn(!1),Jn=Rn;function zt(e,n){var t=e.type.contextTypes;if(!t)return Rn;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===n)return s.__reactInternalMemoizedMaskedChildContext;var a={},i;for(i in t)a[i]=n[i];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=a),a}function Me(e){return e=e.childContextTypes,e!=null}function wa(){X(Ne),X(xe)}function Vo(e,n,t){if(xe.current!==Rn)throw Error(z(168));K(xe,n),K(Ne,t)}function Du(e,n,t){var s=e.stateNode;if(n=n.childContextTypes,typeof s.getChildContext!="function")return t;s=s.getChildContext();for(var a in s)if(!(a in n))throw Error(z(108,Xd(e)||"Unknown",a));return te({},t,s)}function ya(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Rn,Jn=xe.current,K(xe,e),K(Ne,Ne.current),!0}function Ao(e,n,t){var s=e.stateNode;if(!s)throw Error(z(169));t?(e=Du(e,n,Jn),s.__reactInternalMemoizedMergedChildContext=e,X(Ne),X(xe),K(xe,e)):X(Ne),K(Ne,t)}var pn=null,Wa=!1,Mi=!1;function Fu(e){pn===null?pn=[e]:pn.push(e)}function mf(e){Wa=!0,Fu(e)}function $n(){if(!Mi&&pn!==null){Mi=!0;var e=0,n=U;try{var t=pn;for(U=1;e<t.length;e++){var s=t[e];do s=s(!0);while(s!==null)}pn=null,Wa=!1}catch(a){throw pn!==null&&(pn=pn.slice(e+1)),du(ll,$n),a}finally{U=n,Mi=!1}}return null}var vt=[],_t=0,xa=null,Sa=0,Be=[],Ue=0,Zn=null,dn=1,hn="";function Un(e,n){vt[_t++]=Sa,vt[_t++]=xa,xa=e,Sa=n}function $u(e,n,t){Be[Ue++]=dn,Be[Ue++]=hn,Be[Ue++]=Zn,Zn=e;var s=dn;e=hn;var a=32-Ze(s)-1;s&=~(1<<a),t+=1;var i=32-Ze(n)+a;if(30<i){var r=a-a%5;i=(s&(1<<r)-1).toString(32),s>>=r,a-=r,dn=1<<32-Ze(n)+a|t<<a|s,hn=i+e}else dn=1<<i|t<<a|s,hn=e}function gl(e){e.return!==null&&(Un(e,1),$u(e,1,0))}function vl(e){for(;e===xa;)xa=vt[--_t],vt[_t]=null,Sa=vt[--_t],vt[_t]=null;for(;e===Zn;)Zn=Be[--Ue],Be[Ue]=null,hn=Be[--Ue],Be[Ue]=null,dn=Be[--Ue],Be[Ue]=null}var Ae=null,He=null,Z=!1,Je=null;function Bu(e,n){var t=We(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Oo(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Ae=e,He=In(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Ae=e,He=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Zn!==null?{id:dn,overflow:hn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=We(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Ae=e,He=null,!0):!1;default:return!1}}function Er(e){return(e.mode&1)!==0&&(e.flags&128)===0}function jr(e){if(Z){var n=He;if(n){var t=n;if(!Oo(e,n)){if(Er(e))throw Error(z(418));n=In(t.nextSibling);var s=Ae;n&&Oo(e,n)?Bu(s,t):(e.flags=e.flags&-4097|2,Z=!1,Ae=e)}}else{if(Er(e))throw Error(z(418));e.flags=e.flags&-4097|2,Z=!1,Ae=e}}}function Ro(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ae=e}function $s(e){if(e!==Ae)return!1;if(!Z)return Ro(e),Z=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!xr(e.type,e.memoizedProps)),n&&(n=He)){if(Er(e))throw Uu(),Error(z(418));for(;n;)Bu(e,n),n=In(n.nextSibling)}if(Ro(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(z(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){He=In(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}He=null}}else He=Ae?In(e.stateNode.nextSibling):null;return!0}function Uu(){for(var e=He;e;)e=In(e.nextSibling)}function Nt(){He=Ae=null,Z=!1}function _l(e){Je===null?Je=[e]:Je.push(e)}var gf=yn.ReactCurrentBatchConfig;function Wt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(z(309));var s=t.stateNode}if(!s)throw Error(z(147,e));var a=s,i=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(r){var l=a.refs;r===null?delete l[i]:l[i]=r},n._stringRef=i,n)}if(typeof e!="string")throw Error(z(284));if(!t._owner)throw Error(z(290,e))}return e}function Bs(e,n){throw e=Object.prototype.toString.call(n),Error(z(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Do(e){var n=e._init;return n(e._payload)}function Wu(e){function n(m,f){if(e){var g=m.deletions;g===null?(m.deletions=[f],m.flags|=16):g.push(f)}}function t(m,f){if(!e)return null;for(;f!==null;)n(m,f),f=f.sibling;return null}function s(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function a(m,f){return m=An(m,f),m.index=0,m.sibling=null,m}function i(m,f,g){return m.index=g,e?(g=m.alternate,g!==null?(g=g.index,g<f?(m.flags|=2,f):g):(m.flags|=2,f)):(m.flags|=1048576,f)}function r(m){return e&&m.alternate===null&&(m.flags|=2),m}function l(m,f,g,y){return f===null||f.tag!==6?(f=Oi(g,m.mode,y),f.return=m,f):(f=a(f,g),f.return=m,f)}function c(m,f,g,y){var x=g.type;return x===pt?p(m,f,g.props.children,y,g.key):f!==null&&(f.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===kn&&Do(x)===f.type)?(y=a(f,g.props),y.ref=Wt(m,f,g),y.return=m,y):(y=oa(g.type,g.key,g.props,null,m.mode,y),y.ref=Wt(m,f,g),y.return=m,y)}function u(m,f,g,y){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=Ri(g,m.mode,y),f.return=m,f):(f=a(f,g.children||[]),f.return=m,f)}function p(m,f,g,y,x){return f===null||f.tag!==7?(f=Xn(g,m.mode,y,x),f.return=m,f):(f=a(f,g),f.return=m,f)}function d(m,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Oi(""+f,m.mode,g),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Ps:return g=oa(f.type,f.key,f.props,null,m.mode,g),g.ref=Wt(m,null,f),g.return=m,g;case ut:return f=Ri(f,m.mode,g),f.return=m,f;case kn:var y=f._init;return d(m,y(f._payload),g)}if(Qt(f)||Dt(f))return f=Xn(f,m.mode,g,null),f.return=m,f;Bs(m,f)}return null}function h(m,f,g,y){var x=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return x!==null?null:l(m,f,""+g,y);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ps:return g.key===x?c(m,f,g,y):null;case ut:return g.key===x?u(m,f,g,y):null;case kn:return x=g._init,h(m,f,x(g._payload),y)}if(Qt(g)||Dt(g))return x!==null?null:p(m,f,g,y,null);Bs(m,g)}return null}function v(m,f,g,y,x){if(typeof y=="string"&&y!==""||typeof y=="number")return m=m.get(g)||null,l(f,m,""+y,x);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ps:return m=m.get(y.key===null?g:y.key)||null,c(f,m,y,x);case ut:return m=m.get(y.key===null?g:y.key)||null,u(f,m,y,x);case kn:var j=y._init;return v(m,f,g,j(y._payload),x)}if(Qt(y)||Dt(y))return m=m.get(g)||null,p(f,m,y,x,null);Bs(f,y)}return null}function _(m,f,g,y){for(var x=null,j=null,S=f,k=f=0,H=null;S!==null&&k<g.length;k++){S.index>k?(H=S,S=null):H=S.sibling;var E=h(m,S,g[k],y);if(E===null){S===null&&(S=H);break}e&&S&&E.alternate===null&&n(m,S),f=i(E,f,k),j===null?x=E:j.sibling=E,j=E,S=H}if(k===g.length)return t(m,S),Z&&Un(m,k),x;if(S===null){for(;k<g.length;k++)S=d(m,g[k],y),S!==null&&(f=i(S,f,k),j===null?x=S:j.sibling=S,j=S);return Z&&Un(m,k),x}for(S=s(m,S);k<g.length;k++)H=v(S,m,k,g[k],y),H!==null&&(e&&H.alternate!==null&&S.delete(H.key===null?k:H.key),f=i(H,f,k),j===null?x=H:j.sibling=H,j=H);return e&&S.forEach(function(M){return n(m,M)}),Z&&Un(m,k),x}function w(m,f,g,y){var x=Dt(g);if(typeof x!="function")throw Error(z(150));if(g=x.call(g),g==null)throw Error(z(151));for(var j=x=null,S=f,k=f=0,H=null,E=g.next();S!==null&&!E.done;k++,E=g.next()){S.index>k?(H=S,S=null):H=S.sibling;var M=h(m,S,E.value,y);if(M===null){S===null&&(S=H);break}e&&S&&M.alternate===null&&n(m,S),f=i(M,f,k),j===null?x=M:j.sibling=M,j=M,S=H}if(E.done)return t(m,S),Z&&Un(m,k),x;if(S===null){for(;!E.done;k++,E=g.next())E=d(m,E.value,y),E!==null&&(f=i(E,f,k),j===null?x=E:j.sibling=E,j=E);return Z&&Un(m,k),x}for(S=s(m,S);!E.done;k++,E=g.next())E=v(S,m,k,E.value,y),E!==null&&(e&&E.alternate!==null&&S.delete(E.key===null?k:E.key),f=i(E,f,k),j===null?x=E:j.sibling=E,j=E);return e&&S.forEach(function(V){return n(m,V)}),Z&&Un(m,k),x}function N(m,f,g,y){if(typeof g=="object"&&g!==null&&g.type===pt&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Ps:e:{for(var x=g.key,j=f;j!==null;){if(j.key===x){if(x=g.type,x===pt){if(j.tag===7){t(m,j.sibling),f=a(j,g.props.children),f.return=m,m=f;break e}}else if(j.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===kn&&Do(x)===j.type){t(m,j.sibling),f=a(j,g.props),f.ref=Wt(m,j,g),f.return=m,m=f;break e}t(m,j);break}else n(m,j);j=j.sibling}g.type===pt?(f=Xn(g.props.children,m.mode,y,g.key),f.return=m,m=f):(y=oa(g.type,g.key,g.props,null,m.mode,y),y.ref=Wt(m,f,g),y.return=m,m=y)}return r(m);case ut:e:{for(j=g.key;f!==null;){if(f.key===j)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){t(m,f.sibling),f=a(f,g.children||[]),f.return=m,m=f;break e}else{t(m,f);break}else n(m,f);f=f.sibling}f=Ri(g,m.mode,y),f.return=m,m=f}return r(m);case kn:return j=g._init,N(m,f,j(g._payload),y)}if(Qt(g))return _(m,f,g,y);if(Dt(g))return w(m,f,g,y);Bs(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(t(m,f.sibling),f=a(f,g),f.return=m,m=f):(t(m,f),f=Oi(g,m.mode,y),f.return=m,m=f),r(m)):t(m,f)}return N}var Mt=Wu(!0),Gu=Wu(!1),ka=Fn(null),ba=null,wt=null,wl=null;function yl(){wl=wt=ba=null}function xl(e){var n=ka.current;X(ka),e._currentValue=n}function Tr(e,n,t){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===t)break;e=e.return}}function jt(e,n){ba=e,wl=wt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(ze=!0),e.firstContext=null)}function Ye(e){var n=e._currentValue;if(wl!==e)if(e={context:e,memoizedValue:n,next:null},wt===null){if(ba===null)throw Error(z(308));wt=e,ba.dependencies={lanes:0,firstContext:e}}else wt=wt.next=e;return n}var Yn=null;function Sl(e){Yn===null?Yn=[e]:Yn.push(e)}function Yu(e,n,t,s){var a=n.interleaved;return a===null?(t.next=t,Sl(n)):(t.next=a.next,a.next=t),n.interleaved=t,_n(e,s)}function _n(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var bn=!1;function kl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function qu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function mn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Ln(e,n,t){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,D&2){var a=s.pending;return a===null?n.next=n:(n.next=a.next,a.next=n),s.pending=n,_n(e,t)}return a=s.interleaved,a===null?(n.next=n,Sl(s)):(n.next=a.next,a.next=n),s.interleaved=n,_n(e,t)}function ta(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var s=n.lanes;s&=e.pendingLanes,t|=s,n.lanes=t,ol(e,t)}}function Fo(e,n){var t=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,t===s)){var a=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var r={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?a=i=r:i=i.next=r,t=t.next}while(t!==null);i===null?a=i=n:i=i.next=n}else a=i=n;t={baseState:s.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:s.shared,effects:s.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Ea(e,n,t,s){var a=e.updateQueue;bn=!1;var i=a.firstBaseUpdate,r=a.lastBaseUpdate,l=a.shared.pending;if(l!==null){a.shared.pending=null;var c=l,u=c.next;c.next=null,r===null?i=u:r.next=u,r=c;var p=e.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==r&&(l===null?p.firstBaseUpdate=u:l.next=u,p.lastBaseUpdate=c))}if(i!==null){var d=a.baseState;r=0,p=u=c=null,l=i;do{var h=l.lane,v=l.eventTime;if((s&h)===h){p!==null&&(p=p.next={eventTime:v,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var _=e,w=l;switch(h=n,v=t,w.tag){case 1:if(_=w.payload,typeof _=="function"){d=_.call(v,d,h);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=w.payload,h=typeof _=="function"?_.call(v,d,h):_,h==null)break e;d=te({},d,h);break e;case 2:bn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=a.effects,h===null?a.effects=[l]:h.push(l))}else v={eventTime:v,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(u=p=v,c=d):p=p.next=v,r|=h;if(l=l.next,l===null){if(l=a.shared.pending,l===null)break;h=l,l=h.next,h.next=null,a.lastBaseUpdate=h,a.shared.pending=null}}while(!0);if(p===null&&(c=d),a.baseState=c,a.firstBaseUpdate=u,a.lastBaseUpdate=p,n=a.shared.interleaved,n!==null){a=n;do r|=a.lane,a=a.next;while(a!==n)}else i===null&&(a.shared.lanes=0);nt|=r,e.lanes=r,e.memoizedState=d}}function $o(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var s=e[n],a=s.callback;if(a!==null){if(s.callback=null,s=t,typeof a!="function")throw Error(z(191,a));a.call(s)}}}var Ns={},ln=Fn(Ns),ys=Fn(Ns),xs=Fn(Ns);function qn(e){if(e===Ns)throw Error(z(174));return e}function bl(e,n){switch(K(xs,n),K(ys,e),K(ln,Ns),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:lr(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=lr(n,e)}X(ln),K(ln,n)}function Pt(){X(ln),X(ys),X(xs)}function Ku(e){qn(xs.current);var n=qn(ln.current),t=lr(n,e.type);n!==t&&(K(ys,e),K(ln,t))}function El(e){ys.current===e&&(X(ln),X(ys))}var ee=Fn(0);function ja(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Pi=[];function jl(){for(var e=0;e<Pi.length;e++)Pi[e]._workInProgressVersionPrimary=null;Pi.length=0}var sa=yn.ReactCurrentDispatcher,Ii=yn.ReactCurrentBatchConfig,et=0,ne=null,le=null,ue=null,Ta=!1,as=!1,Ss=0,vf=0;function _e(){throw Error(z(321))}function Tl(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!nn(e[t],n[t]))return!1;return!0}function Cl(e,n,t,s,a,i){if(et=i,ne=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,sa.current=e===null||e.memoizedState===null?xf:Sf,e=t(s,a),as){i=0;do{if(as=!1,Ss=0,25<=i)throw Error(z(301));i+=1,ue=le=null,n.updateQueue=null,sa.current=kf,e=t(s,a)}while(as)}if(sa.current=Ca,n=le!==null&&le.next!==null,et=0,ue=le=ne=null,Ta=!1,n)throw Error(z(300));return e}function zl(){var e=Ss!==0;return Ss=0,e}function sn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ue===null?ne.memoizedState=ue=e:ue=ue.next=e,ue}function qe(){if(le===null){var e=ne.alternate;e=e!==null?e.memoizedState:null}else e=le.next;var n=ue===null?ne.memoizedState:ue.next;if(n!==null)ue=n,le=e;else{if(e===null)throw Error(z(310));le=e,e={memoizedState:le.memoizedState,baseState:le.baseState,baseQueue:le.baseQueue,queue:le.queue,next:null},ue===null?ne.memoizedState=ue=e:ue=ue.next=e}return ue}function ks(e,n){return typeof n=="function"?n(e):n}function Li(e){var n=qe(),t=n.queue;if(t===null)throw Error(z(311));t.lastRenderedReducer=e;var s=le,a=s.baseQueue,i=t.pending;if(i!==null){if(a!==null){var r=a.next;a.next=i.next,i.next=r}s.baseQueue=a=i,t.pending=null}if(a!==null){i=a.next,s=s.baseState;var l=r=null,c=null,u=i;do{var p=u.lane;if((et&p)===p)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),s=u.hasEagerState?u.eagerState:e(s,u.action);else{var d={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=d,r=s):c=c.next=d,ne.lanes|=p,nt|=p}u=u.next}while(u!==null&&u!==i);c===null?r=s:c.next=l,nn(s,n.memoizedState)||(ze=!0),n.memoizedState=s,n.baseState=r,n.baseQueue=c,t.lastRenderedState=s}if(e=t.interleaved,e!==null){a=e;do i=a.lane,ne.lanes|=i,nt|=i,a=a.next;while(a!==e)}else a===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Hi(e){var n=qe(),t=n.queue;if(t===null)throw Error(z(311));t.lastRenderedReducer=e;var s=t.dispatch,a=t.pending,i=n.memoizedState;if(a!==null){t.pending=null;var r=a=a.next;do i=e(i,r.action),r=r.next;while(r!==a);nn(i,n.memoizedState)||(ze=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,s]}function Qu(){}function Xu(e,n){var t=ne,s=qe(),a=n(),i=!nn(s.memoizedState,a);if(i&&(s.memoizedState=a,ze=!0),s=s.queue,Nl(ep.bind(null,t,s,e),[e]),s.getSnapshot!==n||i||ue!==null&&ue.memoizedState.tag&1){if(t.flags|=2048,bs(9,Zu.bind(null,t,s,a,n),void 0,null),pe===null)throw Error(z(349));et&30||Ju(t,n,a)}return a}function Ju(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=ne.updateQueue,n===null?(n={lastEffect:null,stores:null},ne.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Zu(e,n,t,s){n.value=t,n.getSnapshot=s,np(n)&&tp(e)}function ep(e,n,t){return t(function(){np(n)&&tp(e)})}function np(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!nn(e,t)}catch{return!0}}function tp(e){var n=_n(e,1);n!==null&&en(n,e,1,-1)}function Bo(e){var n=sn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ks,lastRenderedState:e},n.queue=e,e=e.dispatch=yf.bind(null,ne,e),[n.memoizedState,e]}function bs(e,n,t,s){return e={tag:e,create:n,destroy:t,deps:s,next:null},n=ne.updateQueue,n===null?(n={lastEffect:null,stores:null},ne.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(s=t.next,t.next=e,e.next=s,n.lastEffect=e)),e}function sp(){return qe().memoizedState}function aa(e,n,t,s){var a=sn();ne.flags|=e,a.memoizedState=bs(1|n,t,void 0,s===void 0?null:s)}function Ga(e,n,t,s){var a=qe();s=s===void 0?null:s;var i=void 0;if(le!==null){var r=le.memoizedState;if(i=r.destroy,s!==null&&Tl(s,r.deps)){a.memoizedState=bs(n,t,i,s);return}}ne.flags|=e,a.memoizedState=bs(1|n,t,i,s)}function Uo(e,n){return aa(8390656,8,e,n)}function Nl(e,n){return Ga(2048,8,e,n)}function ap(e,n){return Ga(4,2,e,n)}function ip(e,n){return Ga(4,4,e,n)}function rp(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function lp(e,n,t){return t=t!=null?t.concat([e]):null,Ga(4,4,rp.bind(null,n,e),t)}function Ml(){}function op(e,n){var t=qe();n=n===void 0?null:n;var s=t.memoizedState;return s!==null&&n!==null&&Tl(n,s[1])?s[0]:(t.memoizedState=[e,n],e)}function cp(e,n){var t=qe();n=n===void 0?null:n;var s=t.memoizedState;return s!==null&&n!==null&&Tl(n,s[1])?s[0]:(e=e(),t.memoizedState=[e,n],e)}function up(e,n,t){return et&21?(nn(t,n)||(t=mu(),ne.lanes|=t,nt|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,ze=!0),e.memoizedState=t)}function _f(e,n){var t=U;U=t!==0&&4>t?t:4,e(!0);var s=Ii.transition;Ii.transition={};try{e(!1),n()}finally{U=t,Ii.transition=s}}function pp(){return qe().memoizedState}function wf(e,n,t){var s=Vn(e);if(t={lane:s,action:t,hasEagerState:!1,eagerState:null,next:null},dp(e))hp(n,t);else if(t=Yu(e,n,t,s),t!==null){var a=ke();en(t,e,s,a),fp(t,n,s)}}function yf(e,n,t){var s=Vn(e),a={lane:s,action:t,hasEagerState:!1,eagerState:null,next:null};if(dp(e))hp(n,a);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var r=n.lastRenderedState,l=i(r,t);if(a.hasEagerState=!0,a.eagerState=l,nn(l,r)){var c=n.interleaved;c===null?(a.next=a,Sl(n)):(a.next=c.next,c.next=a),n.interleaved=a;return}}catch{}finally{}t=Yu(e,n,a,s),t!==null&&(a=ke(),en(t,e,s,a),fp(t,n,s))}}function dp(e){var n=e.alternate;return e===ne||n!==null&&n===ne}function hp(e,n){as=Ta=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function fp(e,n,t){if(t&4194240){var s=n.lanes;s&=e.pendingLanes,t|=s,n.lanes=t,ol(e,t)}}var Ca={readContext:Ye,useCallback:_e,useContext:_e,useEffect:_e,useImperativeHandle:_e,useInsertionEffect:_e,useLayoutEffect:_e,useMemo:_e,useReducer:_e,useRef:_e,useState:_e,useDebugValue:_e,useDeferredValue:_e,useTransition:_e,useMutableSource:_e,useSyncExternalStore:_e,useId:_e,unstable_isNewReconciler:!1},xf={readContext:Ye,useCallback:function(e,n){return sn().memoizedState=[e,n===void 0?null:n],e},useContext:Ye,useEffect:Uo,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,aa(4194308,4,rp.bind(null,n,e),t)},useLayoutEffect:function(e,n){return aa(4194308,4,e,n)},useInsertionEffect:function(e,n){return aa(4,2,e,n)},useMemo:function(e,n){var t=sn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var s=sn();return n=t!==void 0?t(n):n,s.memoizedState=s.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},s.queue=e,e=e.dispatch=wf.bind(null,ne,e),[s.memoizedState,e]},useRef:function(e){var n=sn();return e={current:e},n.memoizedState=e},useState:Bo,useDebugValue:Ml,useDeferredValue:function(e){return sn().memoizedState=e},useTransition:function(){var e=Bo(!1),n=e[0];return e=_f.bind(null,e[1]),sn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var s=ne,a=sn();if(Z){if(t===void 0)throw Error(z(407));t=t()}else{if(t=n(),pe===null)throw Error(z(349));et&30||Ju(s,n,t)}a.memoizedState=t;var i={value:t,getSnapshot:n};return a.queue=i,Uo(ep.bind(null,s,i,e),[e]),s.flags|=2048,bs(9,Zu.bind(null,s,i,t,n),void 0,null),t},useId:function(){var e=sn(),n=pe.identifierPrefix;if(Z){var t=hn,s=dn;t=(s&~(1<<32-Ze(s)-1)).toString(32)+t,n=":"+n+"R"+t,t=Ss++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=vf++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Sf={readContext:Ye,useCallback:op,useContext:Ye,useEffect:Nl,useImperativeHandle:lp,useInsertionEffect:ap,useLayoutEffect:ip,useMemo:cp,useReducer:Li,useRef:sp,useState:function(){return Li(ks)},useDebugValue:Ml,useDeferredValue:function(e){var n=qe();return up(n,le.memoizedState,e)},useTransition:function(){var e=Li(ks)[0],n=qe().memoizedState;return[e,n]},useMutableSource:Qu,useSyncExternalStore:Xu,useId:pp,unstable_isNewReconciler:!1},kf={readContext:Ye,useCallback:op,useContext:Ye,useEffect:Nl,useImperativeHandle:lp,useInsertionEffect:ap,useLayoutEffect:ip,useMemo:cp,useReducer:Hi,useRef:sp,useState:function(){return Hi(ks)},useDebugValue:Ml,useDeferredValue:function(e){var n=qe();return le===null?n.memoizedState=e:up(n,le.memoizedState,e)},useTransition:function(){var e=Hi(ks)[0],n=qe().memoizedState;return[e,n]},useMutableSource:Qu,useSyncExternalStore:Xu,useId:pp,unstable_isNewReconciler:!1};function Qe(e,n){if(e&&e.defaultProps){n=te({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Cr(e,n,t,s){n=e.memoizedState,t=t(s,n),t=t==null?n:te({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Ya={isMounted:function(e){return(e=e._reactInternals)?it(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var s=ke(),a=Vn(e),i=mn(s,a);i.payload=n,t!=null&&(i.callback=t),n=Ln(e,i,a),n!==null&&(en(n,e,a,s),ta(n,e,a))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var s=ke(),a=Vn(e),i=mn(s,a);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=Ln(e,i,a),n!==null&&(en(n,e,a,s),ta(n,e,a))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=ke(),s=Vn(e),a=mn(t,s);a.tag=2,n!=null&&(a.callback=n),n=Ln(e,a,s),n!==null&&(en(n,e,s,t),ta(n,e,s))}};function Wo(e,n,t,s,a,i,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,i,r):n.prototype&&n.prototype.isPureReactComponent?!gs(t,s)||!gs(a,i):!0}function mp(e,n,t){var s=!1,a=Rn,i=n.contextType;return typeof i=="object"&&i!==null?i=Ye(i):(a=Me(n)?Jn:xe.current,s=n.contextTypes,i=(s=s!=null)?zt(e,a):Rn),n=new n(t,i),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Ya,e.stateNode=n,n._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=i),n}function Go(e,n,t,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,s),n.state!==e&&Ya.enqueueReplaceState(n,n.state,null)}function zr(e,n,t,s){var a=e.stateNode;a.props=t,a.state=e.memoizedState,a.refs={},kl(e);var i=n.contextType;typeof i=="object"&&i!==null?a.context=Ye(i):(i=Me(n)?Jn:xe.current,a.context=zt(e,i)),a.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(Cr(e,n,i,t),a.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(n=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),n!==a.state&&Ya.enqueueReplaceState(a,a.state,null),Ea(e,t,a,s),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function It(e,n){try{var t="",s=n;do t+=Qd(s),s=s.return;while(s);var a=t}catch(i){a=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:n,stack:a,digest:null}}function Vi(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Nr(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var bf=typeof WeakMap=="function"?WeakMap:Map;function gp(e,n,t){t=mn(-1,t),t.tag=3,t.payload={element:null};var s=n.value;return t.callback=function(){Na||(Na=!0,Dr=s),Nr(e,n)},t}function vp(e,n,t){t=mn(-1,t),t.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var a=n.value;t.payload=function(){return s(a)},t.callback=function(){Nr(e,n)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){Nr(e,n),typeof s!="function"&&(Hn===null?Hn=new Set([this]):Hn.add(this));var r=n.stack;this.componentDidCatch(n.value,{componentStack:r!==null?r:""})}),t}function Yo(e,n,t){var s=e.pingCache;if(s===null){s=e.pingCache=new bf;var a=new Set;s.set(n,a)}else a=s.get(n),a===void 0&&(a=new Set,s.set(n,a));a.has(t)||(a.add(t),e=Of.bind(null,e,n,t),n.then(e,e))}function qo(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Ko(e,n,t,s,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=mn(-1,1),n.tag=2,Ln(t,n,1))),t.lanes|=1),e)}var Ef=yn.ReactCurrentOwner,ze=!1;function Se(e,n,t,s){n.child=e===null?Gu(n,null,t,s):Mt(n,e.child,t,s)}function Qo(e,n,t,s,a){t=t.render;var i=n.ref;return jt(n,a),s=Cl(e,n,t,s,i,a),t=zl(),e!==null&&!ze?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a,wn(e,n,a)):(Z&&t&&gl(n),n.flags|=1,Se(e,n,s,a),n.child)}function Xo(e,n,t,s,a){if(e===null){var i=t.type;return typeof i=="function"&&!Rl(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=i,_p(e,n,i,s,a)):(e=oa(t.type,null,s,n,n.mode,a),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,!(e.lanes&a)){var r=i.memoizedProps;if(t=t.compare,t=t!==null?t:gs,t(r,s)&&e.ref===n.ref)return wn(e,n,a)}return n.flags|=1,e=An(i,s),e.ref=n.ref,e.return=n,n.child=e}function _p(e,n,t,s,a){if(e!==null){var i=e.memoizedProps;if(gs(i,s)&&e.ref===n.ref)if(ze=!1,n.pendingProps=s=i,(e.lanes&a)!==0)e.flags&131072&&(ze=!0);else return n.lanes=e.lanes,wn(e,n,a)}return Mr(e,n,t,s,a)}function wp(e,n,t){var s=n.pendingProps,a=s.children,i=e!==null?e.memoizedState:null;if(s.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},K(xt,Ie),Ie|=t;else{if(!(t&1073741824))return e=i!==null?i.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,K(xt,Ie),Ie|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=i!==null?i.baseLanes:t,K(xt,Ie),Ie|=s}else i!==null?(s=i.baseLanes|t,n.memoizedState=null):s=t,K(xt,Ie),Ie|=s;return Se(e,n,a,t),n.child}function yp(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Mr(e,n,t,s,a){var i=Me(t)?Jn:xe.current;return i=zt(n,i),jt(n,a),t=Cl(e,n,t,s,i,a),s=zl(),e!==null&&!ze?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a,wn(e,n,a)):(Z&&s&&gl(n),n.flags|=1,Se(e,n,t,a),n.child)}function Jo(e,n,t,s,a){if(Me(t)){var i=!0;ya(n)}else i=!1;if(jt(n,a),n.stateNode===null)ia(e,n),mp(n,t,s),zr(n,t,s,a),s=!0;else if(e===null){var r=n.stateNode,l=n.memoizedProps;r.props=l;var c=r.context,u=t.contextType;typeof u=="object"&&u!==null?u=Ye(u):(u=Me(t)?Jn:xe.current,u=zt(n,u));var p=t.getDerivedStateFromProps,d=typeof p=="function"||typeof r.getSnapshotBeforeUpdate=="function";d||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(l!==s||c!==u)&&Go(n,r,s,u),bn=!1;var h=n.memoizedState;r.state=h,Ea(n,s,r,a),c=n.memoizedState,l!==s||h!==c||Ne.current||bn?(typeof p=="function"&&(Cr(n,t,p,s),c=n.memoizedState),(l=bn||Wo(n,t,l,s,h,c,u))?(d||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(n.flags|=4194308)):(typeof r.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=c),r.props=s,r.state=c,r.context=u,s=l):(typeof r.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{r=n.stateNode,qu(e,n),l=n.memoizedProps,u=n.type===n.elementType?l:Qe(n.type,l),r.props=u,d=n.pendingProps,h=r.context,c=t.contextType,typeof c=="object"&&c!==null?c=Ye(c):(c=Me(t)?Jn:xe.current,c=zt(n,c));var v=t.getDerivedStateFromProps;(p=typeof v=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(l!==d||h!==c)&&Go(n,r,s,c),bn=!1,h=n.memoizedState,r.state=h,Ea(n,s,r,a);var _=n.memoizedState;l!==d||h!==_||Ne.current||bn?(typeof v=="function"&&(Cr(n,t,v,s),_=n.memoizedState),(u=bn||Wo(n,t,u,s,h,_,c)||!1)?(p||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(s,_,c),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(s,_,c)),typeof r.componentDidUpdate=="function"&&(n.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof r.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=_),r.props=s,r.state=_,r.context=c,s=u):(typeof r.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),s=!1)}return Pr(e,n,t,s,i,a)}function Pr(e,n,t,s,a,i){yp(e,n);var r=(n.flags&128)!==0;if(!s&&!r)return a&&Ao(n,t,!1),wn(e,n,i);s=n.stateNode,Ef.current=n;var l=r&&typeof t.getDerivedStateFromError!="function"?null:s.render();return n.flags|=1,e!==null&&r?(n.child=Mt(n,e.child,null,i),n.child=Mt(n,null,l,i)):Se(e,n,l,i),n.memoizedState=s.state,a&&Ao(n,t,!0),n.child}function xp(e){var n=e.stateNode;n.pendingContext?Vo(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Vo(e,n.context,!1),bl(e,n.containerInfo)}function Zo(e,n,t,s,a){return Nt(),_l(a),n.flags|=256,Se(e,n,t,s),n.child}var Ir={dehydrated:null,treeContext:null,retryLane:0};function Lr(e){return{baseLanes:e,cachePool:null,transitions:null}}function Sp(e,n,t){var s=n.pendingProps,a=ee.current,i=!1,r=(n.flags&128)!==0,l;if((l=r)||(l=e!==null&&e.memoizedState===null?!1:(a&2)!==0),l?(i=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),K(ee,a&1),e===null)return jr(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(r=s.children,e=s.fallback,i?(s=n.mode,i=n.child,r={mode:"hidden",children:r},!(s&1)&&i!==null?(i.childLanes=0,i.pendingProps=r):i=Qa(r,s,0,null),e=Xn(e,s,t,null),i.return=n,e.return=n,i.sibling=e,n.child=i,n.child.memoizedState=Lr(t),n.memoizedState=Ir,e):Pl(n,r));if(a=e.memoizedState,a!==null&&(l=a.dehydrated,l!==null))return jf(e,n,r,s,l,a,t);if(i){i=s.fallback,r=n.mode,a=e.child,l=a.sibling;var c={mode:"hidden",children:s.children};return!(r&1)&&n.child!==a?(s=n.child,s.childLanes=0,s.pendingProps=c,n.deletions=null):(s=An(a,c),s.subtreeFlags=a.subtreeFlags&14680064),l!==null?i=An(l,i):(i=Xn(i,r,t,null),i.flags|=2),i.return=n,s.return=n,s.sibling=i,n.child=s,s=i,i=n.child,r=e.child.memoizedState,r=r===null?Lr(t):{baseLanes:r.baseLanes|t,cachePool:null,transitions:r.transitions},i.memoizedState=r,i.childLanes=e.childLanes&~t,n.memoizedState=Ir,s}return i=e.child,e=i.sibling,s=An(i,{mode:"visible",children:s.children}),!(n.mode&1)&&(s.lanes=t),s.return=n,s.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=s,n.memoizedState=null,s}function Pl(e,n){return n=Qa({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Us(e,n,t,s){return s!==null&&_l(s),Mt(n,e.child,null,t),e=Pl(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function jf(e,n,t,s,a,i,r){if(t)return n.flags&256?(n.flags&=-257,s=Vi(Error(z(422))),Us(e,n,r,s)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(i=s.fallback,a=n.mode,s=Qa({mode:"visible",children:s.children},a,0,null),i=Xn(i,a,r,null),i.flags|=2,s.return=n,i.return=n,s.sibling=i,n.child=s,n.mode&1&&Mt(n,e.child,null,r),n.child.memoizedState=Lr(r),n.memoizedState=Ir,i);if(!(n.mode&1))return Us(e,n,r,null);if(a.data==="$!"){if(s=a.nextSibling&&a.nextSibling.dataset,s)var l=s.dgst;return s=l,i=Error(z(419)),s=Vi(i,s,void 0),Us(e,n,r,s)}if(l=(r&e.childLanes)!==0,ze||l){if(s=pe,s!==null){switch(r&-r){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(s.suspendedLanes|r)?0:a,a!==0&&a!==i.retryLane&&(i.retryLane=a,_n(e,a),en(s,e,a,-1))}return Ol(),s=Vi(Error(z(421))),Us(e,n,r,s)}return a.data==="$?"?(n.flags|=128,n.child=e.child,n=Rf.bind(null,e),a._reactRetry=n,null):(e=i.treeContext,He=In(a.nextSibling),Ae=n,Z=!0,Je=null,e!==null&&(Be[Ue++]=dn,Be[Ue++]=hn,Be[Ue++]=Zn,dn=e.id,hn=e.overflow,Zn=n),n=Pl(n,s.children),n.flags|=4096,n)}function ec(e,n,t){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),Tr(e.return,n,t)}function Ai(e,n,t,s,a){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:t,tailMode:a}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=s,i.tail=t,i.tailMode=a)}function kp(e,n,t){var s=n.pendingProps,a=s.revealOrder,i=s.tail;if(Se(e,n,s.children,t),s=ee.current,s&2)s=s&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ec(e,t,n);else if(e.tag===19)ec(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if(K(ee,s),!(n.mode&1))n.memoizedState=null;else switch(a){case"forwards":for(t=n.child,a=null;t!==null;)e=t.alternate,e!==null&&ja(e)===null&&(a=t),t=t.sibling;t=a,t===null?(a=n.child,n.child=null):(a=t.sibling,t.sibling=null),Ai(n,!1,a,t,i);break;case"backwards":for(t=null,a=n.child,n.child=null;a!==null;){if(e=a.alternate,e!==null&&ja(e)===null){n.child=a;break}e=a.sibling,a.sibling=t,t=a,a=e}Ai(n,!0,t,null,i);break;case"together":Ai(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function ia(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function wn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),nt|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(z(153));if(n.child!==null){for(e=n.child,t=An(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=An(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Tf(e,n,t){switch(n.tag){case 3:xp(n),Nt();break;case 5:Ku(n);break;case 1:Me(n.type)&&ya(n);break;case 4:bl(n,n.stateNode.containerInfo);break;case 10:var s=n.type._context,a=n.memoizedProps.value;K(ka,s._currentValue),s._currentValue=a;break;case 13:if(s=n.memoizedState,s!==null)return s.dehydrated!==null?(K(ee,ee.current&1),n.flags|=128,null):t&n.child.childLanes?Sp(e,n,t):(K(ee,ee.current&1),e=wn(e,n,t),e!==null?e.sibling:null);K(ee,ee.current&1);break;case 19:if(s=(t&n.childLanes)!==0,e.flags&128){if(s)return kp(e,n,t);n.flags|=128}if(a=n.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),K(ee,ee.current),s)break;return null;case 22:case 23:return n.lanes=0,wp(e,n,t)}return wn(e,n,t)}var bp,Hr,Ep,jp;bp=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Hr=function(){};Ep=function(e,n,t,s){var a=e.memoizedProps;if(a!==s){e=n.stateNode,qn(ln.current);var i=null;switch(t){case"input":a=sr(e,a),s=sr(e,s),i=[];break;case"select":a=te({},a,{value:void 0}),s=te({},s,{value:void 0}),i=[];break;case"textarea":a=rr(e,a),s=rr(e,s),i=[];break;default:typeof a.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=_a)}or(t,s);var r;t=null;for(u in a)if(!s.hasOwnProperty(u)&&a.hasOwnProperty(u)&&a[u]!=null)if(u==="style"){var l=a[u];for(r in l)l.hasOwnProperty(r)&&(t||(t={}),t[r]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(cs.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in s){var c=s[u];if(l=a!=null?a[u]:void 0,s.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(r in l)!l.hasOwnProperty(r)||c&&c.hasOwnProperty(r)||(t||(t={}),t[r]="");for(r in c)c.hasOwnProperty(r)&&l[r]!==c[r]&&(t||(t={}),t[r]=c[r])}else t||(i||(i=[]),i.push(u,t)),t=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(i=i||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(cs.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&Q("scroll",e),i||l===c||(i=[])):(i=i||[]).push(u,c))}t&&(i=i||[]).push("style",t);var u=i;(n.updateQueue=u)&&(n.flags|=4)}};jp=function(e,n,t,s){t!==s&&(n.flags|=4)};function Gt(e,n){if(!Z)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var s=null;t!==null;)t.alternate!==null&&(s=t),t=t.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function we(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,s=0;if(n)for(var a=e.child;a!==null;)t|=a.lanes|a.childLanes,s|=a.subtreeFlags&14680064,s|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)t|=a.lanes|a.childLanes,s|=a.subtreeFlags,s|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=s,e.childLanes=t,n}function Cf(e,n,t){var s=n.pendingProps;switch(vl(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return we(n),null;case 1:return Me(n.type)&&wa(),we(n),null;case 3:return s=n.stateNode,Pt(),X(Ne),X(xe),jl(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&($s(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Je!==null&&(Br(Je),Je=null))),Hr(e,n),we(n),null;case 5:El(n);var a=qn(xs.current);if(t=n.type,e!==null&&n.stateNode!=null)Ep(e,n,t,s,a),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!s){if(n.stateNode===null)throw Error(z(166));return we(n),null}if(e=qn(ln.current),$s(n)){s=n.stateNode,t=n.type;var i=n.memoizedProps;switch(s[an]=n,s[ws]=i,e=(n.mode&1)!==0,t){case"dialog":Q("cancel",s),Q("close",s);break;case"iframe":case"object":case"embed":Q("load",s);break;case"video":case"audio":for(a=0;a<Jt.length;a++)Q(Jt[a],s);break;case"source":Q("error",s);break;case"img":case"image":case"link":Q("error",s),Q("load",s);break;case"details":Q("toggle",s);break;case"input":oo(s,i),Q("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!i.multiple},Q("invalid",s);break;case"textarea":uo(s,i),Q("invalid",s)}or(t,i),a=null;for(var r in i)if(i.hasOwnProperty(r)){var l=i[r];r==="children"?typeof l=="string"?s.textContent!==l&&(i.suppressHydrationWarning!==!0&&Fs(s.textContent,l,e),a=["children",l]):typeof l=="number"&&s.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&Fs(s.textContent,l,e),a=["children",""+l]):cs.hasOwnProperty(r)&&l!=null&&r==="onScroll"&&Q("scroll",s)}switch(t){case"input":Is(s),co(s,i,!0);break;case"textarea":Is(s),po(s);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(s.onclick=_a)}s=a,n.updateQueue=s,s!==null&&(n.flags|=4)}else{r=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=eu(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=r.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=r.createElement(t,{is:s.is}):(e=r.createElement(t),t==="select"&&(r=e,s.multiple?r.multiple=!0:s.size&&(r.size=s.size))):e=r.createElementNS(e,t),e[an]=n,e[ws]=s,bp(e,n,!1,!1),n.stateNode=e;e:{switch(r=cr(t,s),t){case"dialog":Q("cancel",e),Q("close",e),a=s;break;case"iframe":case"object":case"embed":Q("load",e),a=s;break;case"video":case"audio":for(a=0;a<Jt.length;a++)Q(Jt[a],e);a=s;break;case"source":Q("error",e),a=s;break;case"img":case"image":case"link":Q("error",e),Q("load",e),a=s;break;case"details":Q("toggle",e),a=s;break;case"input":oo(e,s),a=sr(e,s),Q("invalid",e);break;case"option":a=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},a=te({},s,{value:void 0}),Q("invalid",e);break;case"textarea":uo(e,s),a=rr(e,s),Q("invalid",e);break;default:a=s}or(t,a),l=a;for(i in l)if(l.hasOwnProperty(i)){var c=l[i];i==="style"?su(e,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&nu(e,c)):i==="children"?typeof c=="string"?(t!=="textarea"||c!=="")&&us(e,c):typeof c=="number"&&us(e,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(cs.hasOwnProperty(i)?c!=null&&i==="onScroll"&&Q("scroll",e):c!=null&&tl(e,i,c,r))}switch(t){case"input":Is(e),co(e,s,!1);break;case"textarea":Is(e),po(e);break;case"option":s.value!=null&&e.setAttribute("value",""+On(s.value));break;case"select":e.multiple=!!s.multiple,i=s.value,i!=null?St(e,!!s.multiple,i,!1):s.defaultValue!=null&&St(e,!!s.multiple,s.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=_a)}switch(t){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return we(n),null;case 6:if(e&&n.stateNode!=null)jp(e,n,e.memoizedProps,s);else{if(typeof s!="string"&&n.stateNode===null)throw Error(z(166));if(t=qn(xs.current),qn(ln.current),$s(n)){if(s=n.stateNode,t=n.memoizedProps,s[an]=n,(i=s.nodeValue!==t)&&(e=Ae,e!==null))switch(e.tag){case 3:Fs(s.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Fs(s.nodeValue,t,(e.mode&1)!==0)}i&&(n.flags|=4)}else s=(t.nodeType===9?t:t.ownerDocument).createTextNode(s),s[an]=n,n.stateNode=s}return we(n),null;case 13:if(X(ee),s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Z&&He!==null&&n.mode&1&&!(n.flags&128))Uu(),Nt(),n.flags|=98560,i=!1;else if(i=$s(n),s!==null&&s.dehydrated!==null){if(e===null){if(!i)throw Error(z(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(z(317));i[an]=n}else Nt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;we(n),i=!1}else Je!==null&&(Br(Je),Je=null),i=!0;if(!i)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(n.child.flags|=8192,n.mode&1&&(e===null||ee.current&1?ce===0&&(ce=3):Ol())),n.updateQueue!==null&&(n.flags|=4),we(n),null);case 4:return Pt(),Hr(e,n),e===null&&vs(n.stateNode.containerInfo),we(n),null;case 10:return xl(n.type._context),we(n),null;case 17:return Me(n.type)&&wa(),we(n),null;case 19:if(X(ee),i=n.memoizedState,i===null)return we(n),null;if(s=(n.flags&128)!==0,r=i.rendering,r===null)if(s)Gt(i,!1);else{if(ce!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(r=ja(e),r!==null){for(n.flags|=128,Gt(i,!1),s=r.updateQueue,s!==null&&(n.updateQueue=s,n.flags|=4),n.subtreeFlags=0,s=t,t=n.child;t!==null;)i=t,e=s,i.flags&=14680066,r=i.alternate,r===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=r.childLanes,i.lanes=r.lanes,i.child=r.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=r.memoizedProps,i.memoizedState=r.memoizedState,i.updateQueue=r.updateQueue,i.type=r.type,e=r.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return K(ee,ee.current&1|2),n.child}e=e.sibling}i.tail!==null&&ae()>Lt&&(n.flags|=128,s=!0,Gt(i,!1),n.lanes=4194304)}else{if(!s)if(e=ja(r),e!==null){if(n.flags|=128,s=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Gt(i,!0),i.tail===null&&i.tailMode==="hidden"&&!r.alternate&&!Z)return we(n),null}else 2*ae()-i.renderingStartTime>Lt&&t!==1073741824&&(n.flags|=128,s=!0,Gt(i,!1),n.lanes=4194304);i.isBackwards?(r.sibling=n.child,n.child=r):(t=i.last,t!==null?t.sibling=r:n.child=r,i.last=r)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=ae(),n.sibling=null,t=ee.current,K(ee,s?t&1|2:t&1),n):(we(n),null);case 22:case 23:return Al(),s=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(n.flags|=8192),s&&n.mode&1?Ie&1073741824&&(we(n),n.subtreeFlags&6&&(n.flags|=8192)):we(n),null;case 24:return null;case 25:return null}throw Error(z(156,n.tag))}function zf(e,n){switch(vl(n),n.tag){case 1:return Me(n.type)&&wa(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Pt(),X(Ne),X(xe),jl(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return El(n),null;case 13:if(X(ee),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(z(340));Nt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return X(ee),null;case 4:return Pt(),null;case 10:return xl(n.type._context),null;case 22:case 23:return Al(),null;case 24:return null;default:return null}}var Ws=!1,ye=!1,Nf=typeof WeakSet=="function"?WeakSet:Set,P=null;function yt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(s){se(e,n,s)}else t.current=null}function Vr(e,n,t){try{t()}catch(s){se(e,n,s)}}var nc=!1;function Mf(e,n){if(wr=ma,e=Mu(),ml(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var s=t.getSelection&&t.getSelection();if(s&&s.rangeCount!==0){t=s.anchorNode;var a=s.anchorOffset,i=s.focusNode;s=s.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var r=0,l=-1,c=-1,u=0,p=0,d=e,h=null;n:for(;;){for(var v;d!==t||a!==0&&d.nodeType!==3||(l=r+a),d!==i||s!==0&&d.nodeType!==3||(c=r+s),d.nodeType===3&&(r+=d.nodeValue.length),(v=d.firstChild)!==null;)h=d,d=v;for(;;){if(d===e)break n;if(h===t&&++u===a&&(l=r),h===i&&++p===s&&(c=r),(v=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=v}t=l===-1||c===-1?null:{start:l,end:c}}else t=null}t=t||{start:0,end:0}}else t=null;for(yr={focusedElem:e,selectionRange:t},ma=!1,P=n;P!==null;)if(n=P,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,P=e;else for(;P!==null;){n=P;try{var _=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var w=_.memoizedProps,N=_.memoizedState,m=n.stateNode,f=m.getSnapshotBeforeUpdate(n.elementType===n.type?w:Qe(n.type,w),N);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=n.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(z(163))}}catch(y){se(n,n.return,y)}if(e=n.sibling,e!==null){e.return=n.return,P=e;break}P=n.return}return _=nc,nc=!1,_}function is(e,n,t){var s=n.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&e)===e){var i=a.destroy;a.destroy=void 0,i!==void 0&&Vr(n,t,i)}a=a.next}while(a!==s)}}function qa(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var s=t.create;t.destroy=s()}t=t.next}while(t!==n)}}function Ar(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Tp(e){var n=e.alternate;n!==null&&(e.alternate=null,Tp(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[an],delete n[ws],delete n[kr],delete n[hf],delete n[ff])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Cp(e){return e.tag===5||e.tag===3||e.tag===4}function tc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Cp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Or(e,n,t){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=_a));else if(s!==4&&(e=e.child,e!==null))for(Or(e,n,t),e=e.sibling;e!==null;)Or(e,n,t),e=e.sibling}function Rr(e,n,t){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for(Rr(e,n,t),e=e.sibling;e!==null;)Rr(e,n,t),e=e.sibling}var me=null,Xe=!1;function xn(e,n,t){for(t=t.child;t!==null;)zp(e,n,t),t=t.sibling}function zp(e,n,t){if(rn&&typeof rn.onCommitFiberUnmount=="function")try{rn.onCommitFiberUnmount(Da,t)}catch{}switch(t.tag){case 5:ye||yt(t,n);case 6:var s=me,a=Xe;me=null,xn(e,n,t),me=s,Xe=a,me!==null&&(Xe?(e=me,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):me.removeChild(t.stateNode));break;case 18:me!==null&&(Xe?(e=me,t=t.stateNode,e.nodeType===8?Ni(e.parentNode,t):e.nodeType===1&&Ni(e,t),fs(e)):Ni(me,t.stateNode));break;case 4:s=me,a=Xe,me=t.stateNode.containerInfo,Xe=!0,xn(e,n,t),me=s,Xe=a;break;case 0:case 11:case 14:case 15:if(!ye&&(s=t.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){a=s=s.next;do{var i=a,r=i.destroy;i=i.tag,r!==void 0&&(i&2||i&4)&&Vr(t,n,r),a=a.next}while(a!==s)}xn(e,n,t);break;case 1:if(!ye&&(yt(t,n),s=t.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=t.memoizedProps,s.state=t.memoizedState,s.componentWillUnmount()}catch(l){se(t,n,l)}xn(e,n,t);break;case 21:xn(e,n,t);break;case 22:t.mode&1?(ye=(s=ye)||t.memoizedState!==null,xn(e,n,t),ye=s):xn(e,n,t);break;default:xn(e,n,t)}}function sc(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Nf),n.forEach(function(s){var a=Df.bind(null,e,s);t.has(s)||(t.add(s),s.then(a,a))})}}function Ke(e,n){var t=n.deletions;if(t!==null)for(var s=0;s<t.length;s++){var a=t[s];try{var i=e,r=n,l=r;e:for(;l!==null;){switch(l.tag){case 5:me=l.stateNode,Xe=!1;break e;case 3:me=l.stateNode.containerInfo,Xe=!0;break e;case 4:me=l.stateNode.containerInfo,Xe=!0;break e}l=l.return}if(me===null)throw Error(z(160));zp(i,r,a),me=null,Xe=!1;var c=a.alternate;c!==null&&(c.return=null),a.return=null}catch(u){se(a,n,u)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Np(n,e),n=n.sibling}function Np(e,n){var t=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ke(n,e),tn(e),s&4){try{is(3,e,e.return),qa(3,e)}catch(w){se(e,e.return,w)}try{is(5,e,e.return)}catch(w){se(e,e.return,w)}}break;case 1:Ke(n,e),tn(e),s&512&&t!==null&&yt(t,t.return);break;case 5:if(Ke(n,e),tn(e),s&512&&t!==null&&yt(t,t.return),e.flags&32){var a=e.stateNode;try{us(a,"")}catch(w){se(e,e.return,w)}}if(s&4&&(a=e.stateNode,a!=null)){var i=e.memoizedProps,r=t!==null?t.memoizedProps:i,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&Jc(a,i),cr(l,r);var u=cr(l,i);for(r=0;r<c.length;r+=2){var p=c[r],d=c[r+1];p==="style"?su(a,d):p==="dangerouslySetInnerHTML"?nu(a,d):p==="children"?us(a,d):tl(a,p,d,u)}switch(l){case"input":ar(a,i);break;case"textarea":Zc(a,i);break;case"select":var h=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?St(a,!!i.multiple,v,!1):h!==!!i.multiple&&(i.defaultValue!=null?St(a,!!i.multiple,i.defaultValue,!0):St(a,!!i.multiple,i.multiple?[]:"",!1))}a[ws]=i}catch(w){se(e,e.return,w)}}break;case 6:if(Ke(n,e),tn(e),s&4){if(e.stateNode===null)throw Error(z(162));a=e.stateNode,i=e.memoizedProps;try{a.nodeValue=i}catch(w){se(e,e.return,w)}}break;case 3:if(Ke(n,e),tn(e),s&4&&t!==null&&t.memoizedState.isDehydrated)try{fs(n.containerInfo)}catch(w){se(e,e.return,w)}break;case 4:Ke(n,e),tn(e);break;case 13:Ke(n,e),tn(e),a=e.child,a.flags&8192&&(i=a.memoizedState!==null,a.stateNode.isHidden=i,!i||a.alternate!==null&&a.alternate.memoizedState!==null||(Hl=ae())),s&4&&sc(e);break;case 22:if(p=t!==null&&t.memoizedState!==null,e.mode&1?(ye=(u=ye)||p,Ke(n,e),ye=u):Ke(n,e),tn(e),s&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!p&&e.mode&1)for(P=e,p=e.child;p!==null;){for(d=P=p;P!==null;){switch(h=P,v=h.child,h.tag){case 0:case 11:case 14:case 15:is(4,h,h.return);break;case 1:yt(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){s=h,t=h.return;try{n=s,_.props=n.memoizedProps,_.state=n.memoizedState,_.componentWillUnmount()}catch(w){se(s,t,w)}}break;case 5:yt(h,h.return);break;case 22:if(h.memoizedState!==null){ic(d);continue}}v!==null?(v.return=h,P=v):ic(d)}p=p.sibling}e:for(p=null,d=e;;){if(d.tag===5){if(p===null){p=d;try{a=d.stateNode,u?(i=a.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=d.stateNode,c=d.memoizedProps.style,r=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=tu("display",r))}catch(w){se(e,e.return,w)}}}else if(d.tag===6){if(p===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(w){se(e,e.return,w)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;p===d&&(p=null),d=d.return}p===d&&(p=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Ke(n,e),tn(e),s&4&&sc(e);break;case 21:break;default:Ke(n,e),tn(e)}}function tn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Cp(t)){var s=t;break e}t=t.return}throw Error(z(160))}switch(s.tag){case 5:var a=s.stateNode;s.flags&32&&(us(a,""),s.flags&=-33);var i=tc(e);Rr(e,i,a);break;case 3:case 4:var r=s.stateNode.containerInfo,l=tc(e);Or(e,l,r);break;default:throw Error(z(161))}}catch(c){se(e,e.return,c)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Pf(e,n,t){P=e,Mp(e)}function Mp(e,n,t){for(var s=(e.mode&1)!==0;P!==null;){var a=P,i=a.child;if(a.tag===22&&s){var r=a.memoizedState!==null||Ws;if(!r){var l=a.alternate,c=l!==null&&l.memoizedState!==null||ye;l=Ws;var u=ye;if(Ws=r,(ye=c)&&!u)for(P=a;P!==null;)r=P,c=r.child,r.tag===22&&r.memoizedState!==null?rc(a):c!==null?(c.return=r,P=c):rc(a);for(;i!==null;)P=i,Mp(i),i=i.sibling;P=a,Ws=l,ye=u}ac(e)}else a.subtreeFlags&8772&&i!==null?(i.return=a,P=i):ac(e)}}function ac(e){for(;P!==null;){var n=P;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:ye||qa(5,n);break;case 1:var s=n.stateNode;if(n.flags&4&&!ye)if(t===null)s.componentDidMount();else{var a=n.elementType===n.type?t.memoizedProps:Qe(n.type,t.memoizedProps);s.componentDidUpdate(a,t.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;i!==null&&$o(n,i,s);break;case 3:var r=n.updateQueue;if(r!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}$o(n,r,t)}break;case 5:var l=n.stateNode;if(t===null&&n.flags&4){t=l;var c=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&t.focus();break;case"img":c.src&&(t.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var u=n.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var d=p.dehydrated;d!==null&&fs(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(z(163))}ye||n.flags&512&&Ar(n)}catch(h){se(n,n.return,h)}}if(n===e){P=null;break}if(t=n.sibling,t!==null){t.return=n.return,P=t;break}P=n.return}}function ic(e){for(;P!==null;){var n=P;if(n===e){P=null;break}var t=n.sibling;if(t!==null){t.return=n.return,P=t;break}P=n.return}}function rc(e){for(;P!==null;){var n=P;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{qa(4,n)}catch(c){se(n,t,c)}break;case 1:var s=n.stateNode;if(typeof s.componentDidMount=="function"){var a=n.return;try{s.componentDidMount()}catch(c){se(n,a,c)}}var i=n.return;try{Ar(n)}catch(c){se(n,i,c)}break;case 5:var r=n.return;try{Ar(n)}catch(c){se(n,r,c)}}}catch(c){se(n,n.return,c)}if(n===e){P=null;break}var l=n.sibling;if(l!==null){l.return=n.return,P=l;break}P=n.return}}var If=Math.ceil,za=yn.ReactCurrentDispatcher,Il=yn.ReactCurrentOwner,Ge=yn.ReactCurrentBatchConfig,D=0,pe=null,ie=null,ge=0,Ie=0,xt=Fn(0),ce=0,Es=null,nt=0,Ka=0,Ll=0,rs=null,Ce=null,Hl=0,Lt=1/0,un=null,Na=!1,Dr=null,Hn=null,Gs=!1,Cn=null,Ma=0,ls=0,Fr=null,ra=-1,la=0;function ke(){return D&6?ae():ra!==-1?ra:ra=ae()}function Vn(e){return e.mode&1?D&2&&ge!==0?ge&-ge:gf.transition!==null?(la===0&&(la=mu()),la):(e=U,e!==0||(e=window.event,e=e===void 0?16:Su(e.type)),e):1}function en(e,n,t,s){if(50<ls)throw ls=0,Fr=null,Error(z(185));Ts(e,t,s),(!(D&2)||e!==pe)&&(e===pe&&(!(D&2)&&(Ka|=t),ce===4&&jn(e,ge)),Pe(e,s),t===1&&D===0&&!(n.mode&1)&&(Lt=ae()+500,Wa&&$n()))}function Pe(e,n){var t=e.callbackNode;mh(e,n);var s=fa(e,e===pe?ge:0);if(s===0)t!==null&&mo(t),e.callbackNode=null,e.callbackPriority=0;else if(n=s&-s,e.callbackPriority!==n){if(t!=null&&mo(t),n===1)e.tag===0?mf(lc.bind(null,e)):Fu(lc.bind(null,e)),pf(function(){!(D&6)&&$n()}),t=null;else{switch(gu(s)){case 1:t=ll;break;case 4:t=hu;break;case 16:t=ha;break;case 536870912:t=fu;break;default:t=ha}t=Rp(t,Pp.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Pp(e,n){if(ra=-1,la=0,D&6)throw Error(z(327));var t=e.callbackNode;if(Tt()&&e.callbackNode!==t)return null;var s=fa(e,e===pe?ge:0);if(s===0)return null;if(s&30||s&e.expiredLanes||n)n=Pa(e,s);else{n=s;var a=D;D|=2;var i=Lp();(pe!==e||ge!==n)&&(un=null,Lt=ae()+500,Qn(e,n));do try{Vf();break}catch(l){Ip(e,l)}while(!0);yl(),za.current=i,D=a,ie!==null?n=0:(pe=null,ge=0,n=ce)}if(n!==0){if(n===2&&(a=fr(e),a!==0&&(s=a,n=$r(e,a))),n===1)throw t=Es,Qn(e,0),jn(e,s),Pe(e,ae()),t;if(n===6)jn(e,s);else{if(a=e.current.alternate,!(s&30)&&!Lf(a)&&(n=Pa(e,s),n===2&&(i=fr(e),i!==0&&(s=i,n=$r(e,i))),n===1))throw t=Es,Qn(e,0),jn(e,s),Pe(e,ae()),t;switch(e.finishedWork=a,e.finishedLanes=s,n){case 0:case 1:throw Error(z(345));case 2:Wn(e,Ce,un);break;case 3:if(jn(e,s),(s&130023424)===s&&(n=Hl+500-ae(),10<n)){if(fa(e,0)!==0)break;if(a=e.suspendedLanes,(a&s)!==s){ke(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Sr(Wn.bind(null,e,Ce,un),n);break}Wn(e,Ce,un);break;case 4:if(jn(e,s),(s&4194240)===s)break;for(n=e.eventTimes,a=-1;0<s;){var r=31-Ze(s);i=1<<r,r=n[r],r>a&&(a=r),s&=~i}if(s=a,s=ae()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*If(s/1960))-s,10<s){e.timeoutHandle=Sr(Wn.bind(null,e,Ce,un),s);break}Wn(e,Ce,un);break;case 5:Wn(e,Ce,un);break;default:throw Error(z(329))}}}return Pe(e,ae()),e.callbackNode===t?Pp.bind(null,e):null}function $r(e,n){var t=rs;return e.current.memoizedState.isDehydrated&&(Qn(e,n).flags|=256),e=Pa(e,n),e!==2&&(n=Ce,Ce=t,n!==null&&Br(n)),e}function Br(e){Ce===null?Ce=e:Ce.push.apply(Ce,e)}function Lf(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var s=0;s<t.length;s++){var a=t[s],i=a.getSnapshot;a=a.value;try{if(!nn(i(),a))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function jn(e,n){for(n&=~Ll,n&=~Ka,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Ze(n),s=1<<t;e[t]=-1,n&=~s}}function lc(e){if(D&6)throw Error(z(327));Tt();var n=fa(e,0);if(!(n&1))return Pe(e,ae()),null;var t=Pa(e,n);if(e.tag!==0&&t===2){var s=fr(e);s!==0&&(n=s,t=$r(e,s))}if(t===1)throw t=Es,Qn(e,0),jn(e,n),Pe(e,ae()),t;if(t===6)throw Error(z(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Wn(e,Ce,un),Pe(e,ae()),null}function Vl(e,n){var t=D;D|=1;try{return e(n)}finally{D=t,D===0&&(Lt=ae()+500,Wa&&$n())}}function tt(e){Cn!==null&&Cn.tag===0&&!(D&6)&&Tt();var n=D;D|=1;var t=Ge.transition,s=U;try{if(Ge.transition=null,U=1,e)return e()}finally{U=s,Ge.transition=t,D=n,!(D&6)&&$n()}}function Al(){Ie=xt.current,X(xt)}function Qn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,uf(t)),ie!==null)for(t=ie.return;t!==null;){var s=t;switch(vl(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&wa();break;case 3:Pt(),X(Ne),X(xe),jl();break;case 5:El(s);break;case 4:Pt();break;case 13:X(ee);break;case 19:X(ee);break;case 10:xl(s.type._context);break;case 22:case 23:Al()}t=t.return}if(pe=e,ie=e=An(e.current,null),ge=Ie=n,ce=0,Es=null,Ll=Ka=nt=0,Ce=rs=null,Yn!==null){for(n=0;n<Yn.length;n++)if(t=Yn[n],s=t.interleaved,s!==null){t.interleaved=null;var a=s.next,i=t.pending;if(i!==null){var r=i.next;i.next=a,s.next=r}t.pending=s}Yn=null}return e}function Ip(e,n){do{var t=ie;try{if(yl(),sa.current=Ca,Ta){for(var s=ne.memoizedState;s!==null;){var a=s.queue;a!==null&&(a.pending=null),s=s.next}Ta=!1}if(et=0,ue=le=ne=null,as=!1,Ss=0,Il.current=null,t===null||t.return===null){ce=1,Es=n,ie=null;break}e:{var i=e,r=t.return,l=t,c=n;if(n=ge,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,p=l,d=p.tag;if(!(p.mode&1)&&(d===0||d===11||d===15)){var h=p.alternate;h?(p.updateQueue=h.updateQueue,p.memoizedState=h.memoizedState,p.lanes=h.lanes):(p.updateQueue=null,p.memoizedState=null)}var v=qo(r);if(v!==null){v.flags&=-257,Ko(v,r,l,i,n),v.mode&1&&Yo(i,u,n),n=v,c=u;var _=n.updateQueue;if(_===null){var w=new Set;w.add(c),n.updateQueue=w}else _.add(c);break e}else{if(!(n&1)){Yo(i,u,n),Ol();break e}c=Error(z(426))}}else if(Z&&l.mode&1){var N=qo(r);if(N!==null){!(N.flags&65536)&&(N.flags|=256),Ko(N,r,l,i,n),_l(It(c,l));break e}}i=c=It(c,l),ce!==4&&(ce=2),rs===null?rs=[i]:rs.push(i),i=r;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n;var m=gp(i,c,n);Fo(i,m);break e;case 1:l=c;var f=i.type,g=i.stateNode;if(!(i.flags&128)&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Hn===null||!Hn.has(g)))){i.flags|=65536,n&=-n,i.lanes|=n;var y=vp(i,l,n);Fo(i,y);break e}}i=i.return}while(i!==null)}Vp(t)}catch(x){n=x,ie===t&&t!==null&&(ie=t=t.return);continue}break}while(!0)}function Lp(){var e=za.current;return za.current=Ca,e===null?Ca:e}function Ol(){(ce===0||ce===3||ce===2)&&(ce=4),pe===null||!(nt&268435455)&&!(Ka&268435455)||jn(pe,ge)}function Pa(e,n){var t=D;D|=2;var s=Lp();(pe!==e||ge!==n)&&(un=null,Qn(e,n));do try{Hf();break}catch(a){Ip(e,a)}while(!0);if(yl(),D=t,za.current=s,ie!==null)throw Error(z(261));return pe=null,ge=0,ce}function Hf(){for(;ie!==null;)Hp(ie)}function Vf(){for(;ie!==null&&!rh();)Hp(ie)}function Hp(e){var n=Op(e.alternate,e,Ie);e.memoizedProps=e.pendingProps,n===null?Vp(e):ie=n,Il.current=null}function Vp(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=zf(t,n),t!==null){t.flags&=32767,ie=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ce=6,ie=null;return}}else if(t=Cf(t,n,Ie),t!==null){ie=t;return}if(n=n.sibling,n!==null){ie=n;return}ie=n=e}while(n!==null);ce===0&&(ce=5)}function Wn(e,n,t){var s=U,a=Ge.transition;try{Ge.transition=null,U=1,Af(e,n,t,s)}finally{Ge.transition=a,U=s}return null}function Af(e,n,t,s){do Tt();while(Cn!==null);if(D&6)throw Error(z(327));t=e.finishedWork;var a=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(z(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if(gh(e,i),e===pe&&(ie=pe=null,ge=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Gs||(Gs=!0,Rp(ha,function(){return Tt(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=Ge.transition,Ge.transition=null;var r=U;U=1;var l=D;D|=4,Il.current=null,Mf(e,t),Np(t,e),tf(yr),ma=!!wr,yr=wr=null,e.current=t,Pf(t),lh(),D=l,U=r,Ge.transition=i}else e.current=t;if(Gs&&(Gs=!1,Cn=e,Ma=a),i=e.pendingLanes,i===0&&(Hn=null),uh(t.stateNode),Pe(e,ae()),n!==null)for(s=e.onRecoverableError,t=0;t<n.length;t++)a=n[t],s(a.value,{componentStack:a.stack,digest:a.digest});if(Na)throw Na=!1,e=Dr,Dr=null,e;return Ma&1&&e.tag!==0&&Tt(),i=e.pendingLanes,i&1?e===Fr?ls++:(ls=0,Fr=e):ls=0,$n(),null}function Tt(){if(Cn!==null){var e=gu(Ma),n=Ge.transition,t=U;try{if(Ge.transition=null,U=16>e?16:e,Cn===null)var s=!1;else{if(e=Cn,Cn=null,Ma=0,D&6)throw Error(z(331));var a=D;for(D|=4,P=e.current;P!==null;){var i=P,r=i.child;if(P.flags&16){var l=i.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(P=u;P!==null;){var p=P;switch(p.tag){case 0:case 11:case 15:is(8,p,i)}var d=p.child;if(d!==null)d.return=p,P=d;else for(;P!==null;){p=P;var h=p.sibling,v=p.return;if(Tp(p),p===u){P=null;break}if(h!==null){h.return=v,P=h;break}P=v}}}var _=i.alternate;if(_!==null){var w=_.child;if(w!==null){_.child=null;do{var N=w.sibling;w.sibling=null,w=N}while(w!==null)}}P=i}}if(i.subtreeFlags&2064&&r!==null)r.return=i,P=r;else e:for(;P!==null;){if(i=P,i.flags&2048)switch(i.tag){case 0:case 11:case 15:is(9,i,i.return)}var m=i.sibling;if(m!==null){m.return=i.return,P=m;break e}P=i.return}}var f=e.current;for(P=f;P!==null;){r=P;var g=r.child;if(r.subtreeFlags&2064&&g!==null)g.return=r,P=g;else e:for(r=f;P!==null;){if(l=P,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:qa(9,l)}}catch(x){se(l,l.return,x)}if(l===r){P=null;break e}var y=l.sibling;if(y!==null){y.return=l.return,P=y;break e}P=l.return}}if(D=a,$n(),rn&&typeof rn.onPostCommitFiberRoot=="function")try{rn.onPostCommitFiberRoot(Da,e)}catch{}s=!0}return s}finally{U=t,Ge.transition=n}}return!1}function oc(e,n,t){n=It(t,n),n=gp(e,n,1),e=Ln(e,n,1),n=ke(),e!==null&&(Ts(e,1,n),Pe(e,n))}function se(e,n,t){if(e.tag===3)oc(e,e,t);else for(;n!==null;){if(n.tag===3){oc(n,e,t);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Hn===null||!Hn.has(s))){e=It(t,e),e=vp(n,e,1),n=Ln(n,e,1),e=ke(),n!==null&&(Ts(n,1,e),Pe(n,e));break}}n=n.return}}function Of(e,n,t){var s=e.pingCache;s!==null&&s.delete(n),n=ke(),e.pingedLanes|=e.suspendedLanes&t,pe===e&&(ge&t)===t&&(ce===4||ce===3&&(ge&130023424)===ge&&500>ae()-Hl?Qn(e,0):Ll|=t),Pe(e,n)}function Ap(e,n){n===0&&(e.mode&1?(n=Vs,Vs<<=1,!(Vs&130023424)&&(Vs=4194304)):n=1);var t=ke();e=_n(e,n),e!==null&&(Ts(e,n,t),Pe(e,t))}function Rf(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Ap(e,t)}function Df(e,n){var t=0;switch(e.tag){case 13:var s=e.stateNode,a=e.memoizedState;a!==null&&(t=a.retryLane);break;case 19:s=e.stateNode;break;default:throw Error(z(314))}s!==null&&s.delete(n),Ap(e,t)}var Op;Op=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Ne.current)ze=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return ze=!1,Tf(e,n,t);ze=!!(e.flags&131072)}else ze=!1,Z&&n.flags&1048576&&$u(n,Sa,n.index);switch(n.lanes=0,n.tag){case 2:var s=n.type;ia(e,n),e=n.pendingProps;var a=zt(n,xe.current);jt(n,t),a=Cl(null,n,s,e,a,t);var i=zl();return n.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Me(s)?(i=!0,ya(n)):i=!1,n.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,kl(n),a.updater=Ya,n.stateNode=a,a._reactInternals=n,zr(n,s,e,t),n=Pr(null,n,s,!0,i,t)):(n.tag=0,Z&&i&&gl(n),Se(null,n,a,t),n=n.child),n;case 16:s=n.elementType;e:{switch(ia(e,n),e=n.pendingProps,a=s._init,s=a(s._payload),n.type=s,a=n.tag=$f(s),e=Qe(s,e),a){case 0:n=Mr(null,n,s,e,t);break e;case 1:n=Jo(null,n,s,e,t);break e;case 11:n=Qo(null,n,s,e,t);break e;case 14:n=Xo(null,n,s,Qe(s.type,e),t);break e}throw Error(z(306,s,""))}return n;case 0:return s=n.type,a=n.pendingProps,a=n.elementType===s?a:Qe(s,a),Mr(e,n,s,a,t);case 1:return s=n.type,a=n.pendingProps,a=n.elementType===s?a:Qe(s,a),Jo(e,n,s,a,t);case 3:e:{if(xp(n),e===null)throw Error(z(387));s=n.pendingProps,i=n.memoizedState,a=i.element,qu(e,n),Ea(n,s,null,t);var r=n.memoizedState;if(s=r.element,i.isDehydrated)if(i={element:s,isDehydrated:!1,cache:r.cache,pendingSuspenseBoundaries:r.pendingSuspenseBoundaries,transitions:r.transitions},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){a=It(Error(z(423)),n),n=Zo(e,n,s,t,a);break e}else if(s!==a){a=It(Error(z(424)),n),n=Zo(e,n,s,t,a);break e}else for(He=In(n.stateNode.containerInfo.firstChild),Ae=n,Z=!0,Je=null,t=Gu(n,null,s,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Nt(),s===a){n=wn(e,n,t);break e}Se(e,n,s,t)}n=n.child}return n;case 5:return Ku(n),e===null&&jr(n),s=n.type,a=n.pendingProps,i=e!==null?e.memoizedProps:null,r=a.children,xr(s,a)?r=null:i!==null&&xr(s,i)&&(n.flags|=32),yp(e,n),Se(e,n,r,t),n.child;case 6:return e===null&&jr(n),null;case 13:return Sp(e,n,t);case 4:return bl(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=Mt(n,null,s,t):Se(e,n,s,t),n.child;case 11:return s=n.type,a=n.pendingProps,a=n.elementType===s?a:Qe(s,a),Qo(e,n,s,a,t);case 7:return Se(e,n,n.pendingProps,t),n.child;case 8:return Se(e,n,n.pendingProps.children,t),n.child;case 12:return Se(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(s=n.type._context,a=n.pendingProps,i=n.memoizedProps,r=a.value,K(ka,s._currentValue),s._currentValue=r,i!==null)if(nn(i.value,r)){if(i.children===a.children&&!Ne.current){n=wn(e,n,t);break e}}else for(i=n.child,i!==null&&(i.return=n);i!==null;){var l=i.dependencies;if(l!==null){r=i.child;for(var c=l.firstContext;c!==null;){if(c.context===s){if(i.tag===1){c=mn(-1,t&-t),c.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?c.next=c:(c.next=p.next,p.next=c),u.pending=c}}i.lanes|=t,c=i.alternate,c!==null&&(c.lanes|=t),Tr(i.return,t,n),l.lanes|=t;break}c=c.next}}else if(i.tag===10)r=i.type===n.type?null:i.child;else if(i.tag===18){if(r=i.return,r===null)throw Error(z(341));r.lanes|=t,l=r.alternate,l!==null&&(l.lanes|=t),Tr(r,t,n),r=i.sibling}else r=i.child;if(r!==null)r.return=i;else for(r=i;r!==null;){if(r===n){r=null;break}if(i=r.sibling,i!==null){i.return=r.return,r=i;break}r=r.return}i=r}Se(e,n,a.children,t),n=n.child}return n;case 9:return a=n.type,s=n.pendingProps.children,jt(n,t),a=Ye(a),s=s(a),n.flags|=1,Se(e,n,s,t),n.child;case 14:return s=n.type,a=Qe(s,n.pendingProps),a=Qe(s.type,a),Xo(e,n,s,a,t);case 15:return _p(e,n,n.type,n.pendingProps,t);case 17:return s=n.type,a=n.pendingProps,a=n.elementType===s?a:Qe(s,a),ia(e,n),n.tag=1,Me(s)?(e=!0,ya(n)):e=!1,jt(n,t),mp(n,s,a),zr(n,s,a,t),Pr(null,n,s,!0,e,t);case 19:return kp(e,n,t);case 22:return wp(e,n,t)}throw Error(z(156,n.tag))};function Rp(e,n){return du(e,n)}function Ff(e,n,t,s){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function We(e,n,t,s){return new Ff(e,n,t,s)}function Rl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function $f(e){if(typeof e=="function")return Rl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===al)return 11;if(e===il)return 14}return 2}function An(e,n){var t=e.alternate;return t===null?(t=We(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function oa(e,n,t,s,a,i){var r=2;if(s=e,typeof e=="function")Rl(e)&&(r=1);else if(typeof e=="string")r=5;else e:switch(e){case pt:return Xn(t.children,a,i,n);case sl:r=8,a|=8;break;case Zi:return e=We(12,t,n,a|2),e.elementType=Zi,e.lanes=i,e;case er:return e=We(13,t,n,a),e.elementType=er,e.lanes=i,e;case nr:return e=We(19,t,n,a),e.elementType=nr,e.lanes=i,e;case Kc:return Qa(t,a,i,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Yc:r=10;break e;case qc:r=9;break e;case al:r=11;break e;case il:r=14;break e;case kn:r=16,s=null;break e}throw Error(z(130,e==null?e:typeof e,""))}return n=We(r,t,n,a),n.elementType=e,n.type=s,n.lanes=i,n}function Xn(e,n,t,s){return e=We(7,e,s,n),e.lanes=t,e}function Qa(e,n,t,s){return e=We(22,e,s,n),e.elementType=Kc,e.lanes=t,e.stateNode={isHidden:!1},e}function Oi(e,n,t){return e=We(6,e,null,n),e.lanes=t,e}function Ri(e,n,t){return n=We(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Bf(e,n,t,s,a){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=wi(0),this.expirationTimes=wi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wi(0),this.identifierPrefix=s,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Dl(e,n,t,s,a,i,r,l,c){return e=new Bf(e,n,t,l,c),n===1?(n=1,i===!0&&(n|=8)):n=0,i=We(3,null,null,n),e.current=i,i.stateNode=e,i.memoizedState={element:s,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},kl(i),e}function Uf(e,n,t){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ut,key:s==null?null:""+s,children:e,containerInfo:n,implementation:t}}function Dp(e){if(!e)return Rn;e=e._reactInternals;e:{if(it(e)!==e||e.tag!==1)throw Error(z(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Me(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(z(171))}if(e.tag===1){var t=e.type;if(Me(t))return Du(e,t,n)}return n}function Fp(e,n,t,s,a,i,r,l,c){return e=Dl(t,s,!0,e,a,i,r,l,c),e.context=Dp(null),t=e.current,s=ke(),a=Vn(t),i=mn(s,a),i.callback=n??null,Ln(t,i,a),e.current.lanes=a,Ts(e,a,s),Pe(e,s),e}function Xa(e,n,t,s){var a=n.current,i=ke(),r=Vn(a);return t=Dp(t),n.context===null?n.context=t:n.pendingContext=t,n=mn(i,r),n.payload={element:e},s=s===void 0?null:s,s!==null&&(n.callback=s),e=Ln(a,n,r),e!==null&&(en(e,a,r,i),ta(e,a,r)),r}function Ia(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function cc(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Fl(e,n){cc(e,n),(e=e.alternate)&&cc(e,n)}function Wf(){return null}var $p=typeof reportError=="function"?reportError:function(e){console.error(e)};function $l(e){this._internalRoot=e}Ja.prototype.render=$l.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(z(409));Xa(e,n,null,null)};Ja.prototype.unmount=$l.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;tt(function(){Xa(null,e,null,null)}),n[vn]=null}};function Ja(e){this._internalRoot=e}Ja.prototype.unstable_scheduleHydration=function(e){if(e){var n=wu();e={blockedOn:null,target:e,priority:n};for(var t=0;t<En.length&&n!==0&&n<En[t].priority;t++);En.splice(t,0,e),t===0&&xu(e)}};function Bl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Za(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function uc(){}function Gf(e,n,t,s,a){if(a){if(typeof s=="function"){var i=s;s=function(){var u=Ia(r);i.call(u)}}var r=Fp(n,s,e,0,null,!1,!1,"",uc);return e._reactRootContainer=r,e[vn]=r.current,vs(e.nodeType===8?e.parentNode:e),tt(),r}for(;a=e.lastChild;)e.removeChild(a);if(typeof s=="function"){var l=s;s=function(){var u=Ia(c);l.call(u)}}var c=Dl(e,0,!1,null,null,!1,!1,"",uc);return e._reactRootContainer=c,e[vn]=c.current,vs(e.nodeType===8?e.parentNode:e),tt(function(){Xa(n,c,t,s)}),c}function ei(e,n,t,s,a){var i=t._reactRootContainer;if(i){var r=i;if(typeof a=="function"){var l=a;a=function(){var c=Ia(r);l.call(c)}}Xa(n,r,e,a)}else r=Gf(t,n,e,a,s);return Ia(r)}vu=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Xt(n.pendingLanes);t!==0&&(ol(n,t|1),Pe(n,ae()),!(D&6)&&(Lt=ae()+500,$n()))}break;case 13:tt(function(){var s=_n(e,1);if(s!==null){var a=ke();en(s,e,1,a)}}),Fl(e,1)}};cl=function(e){if(e.tag===13){var n=_n(e,134217728);if(n!==null){var t=ke();en(n,e,134217728,t)}Fl(e,134217728)}};_u=function(e){if(e.tag===13){var n=Vn(e),t=_n(e,n);if(t!==null){var s=ke();en(t,e,n,s)}Fl(e,n)}};wu=function(){return U};yu=function(e,n){var t=U;try{return U=e,n()}finally{U=t}};pr=function(e,n,t){switch(n){case"input":if(ar(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var s=t[n];if(s!==e&&s.form===e.form){var a=Ua(s);if(!a)throw Error(z(90));Xc(s),ar(s,a)}}}break;case"textarea":Zc(e,t);break;case"select":n=t.value,n!=null&&St(e,!!t.multiple,n,!1)}};ru=Vl;lu=tt;var Yf={usingClientEntryPoint:!1,Events:[zs,mt,Ua,au,iu,Vl]},Yt={findFiberByHostInstance:Gn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},qf={bundleType:Yt.bundleType,version:Yt.version,rendererPackageName:Yt.rendererPackageName,rendererConfig:Yt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:yn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=uu(e),e===null?null:e.stateNode},findFiberByHostInstance:Yt.findFiberByHostInstance||Wf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ys=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ys.isDisabled&&Ys.supportsFiber)try{Da=Ys.inject(qf),rn=Ys}catch{}}Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yf;Re.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bl(n))throw Error(z(200));return Uf(e,n,null,t)};Re.createRoot=function(e,n){if(!Bl(e))throw Error(z(299));var t=!1,s="",a=$p;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),n=Dl(e,1,!1,null,null,t,!1,s,a),e[vn]=n.current,vs(e.nodeType===8?e.parentNode:e),new $l(n)};Re.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(z(188)):(e=Object.keys(e).join(","),Error(z(268,e)));return e=uu(n),e=e===null?null:e.stateNode,e};Re.flushSync=function(e){return tt(e)};Re.hydrate=function(e,n,t){if(!Za(n))throw Error(z(200));return ei(null,e,n,!0,t)};Re.hydrateRoot=function(e,n,t){if(!Bl(e))throw Error(z(405));var s=t!=null&&t.hydratedSources||null,a=!1,i="",r=$p;if(t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),n=Fp(n,null,e,1,t??null,a,!1,i,r),e[vn]=n.current,vs(e),s)for(e=0;e<s.length;e++)t=s[e],a=t._getVersion,a=a(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,a]:n.mutableSourceEagerHydrationData.push(t,a);return new Ja(n)};Re.render=function(e,n,t){if(!Za(n))throw Error(z(200));return ei(null,e,n,!1,t)};Re.unmountComponentAtNode=function(e){if(!Za(e))throw Error(z(40));return e._reactRootContainer?(tt(function(){ei(null,null,e,!1,function(){e._reactRootContainer=null,e[vn]=null})}),!0):!1};Re.unstable_batchedUpdates=Vl;Re.unstable_renderSubtreeIntoContainer=function(e,n,t,s){if(!Za(t))throw Error(z(200));if(e==null||e._reactInternals===void 0)throw Error(z(38));return ei(e,n,t,!1,s)};Re.version="18.3.1-next-f1338f8080-20240426";function Bp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Bp)}catch(e){console.error(e)}}Bp(),Bc.exports=Re;var Up=Bc.exports;const Kf=Oa(Up);var pc=Up;Xi.createRoot=pc.createRoot,Xi.hydrateRoot=pc.hydrateRoot;class Qf extends F.Component{constructor(n){super(n),this.state={hasError:!1}}static getDerivedStateFromError(n){return{hasError:!0}}render(){return this.state.hasError?o.jsx("h1",{children:"Something went wrong."}):this.props.children}}function Ur(e,n){return Ur=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,s){return t.__proto__=s,t},Ur(e,n)}function cn(e,n){e.prototype=Object.create(n.prototype),e.prototype.constructor=e,Ur(e,n)}var Wp={exports:{}},Xf="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Jf=Xf,Zf=Jf;function Gp(){}function Yp(){}Yp.resetWarningCache=Gp;var em=function(){function e(s,a,i,r,l,c){if(c!==Zf){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function n(){return e}var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:Yp,resetWarningCache:Gp};return t.PropTypes=t,t};Wp.exports=em();var nm=Wp.exports;const dc=Oa(nm);function be(){return be=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var s in t)({}).hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},be.apply(null,arguments)}function qs(e){return e.charAt(0)==="/"}function Di(e,n){for(var t=n,s=t+1,a=e.length;s<a;t+=1,s+=1)e[t]=e[s];e.pop()}function tm(e,n){n===void 0&&(n="");var t=e&&e.split("/")||[],s=n&&n.split("/")||[],a=e&&qs(e),i=n&&qs(n),r=a||i;if(e&&qs(e)?s=t:t.length&&(s.pop(),s=s.concat(t)),!s.length)return"/";var l;if(s.length){var c=s[s.length-1];l=c==="."||c===".."||c===""}else l=!1;for(var u=0,p=s.length;p>=0;p--){var d=s[p];d==="."?Di(s,p):d===".."?(Di(s,p),u++):u&&(Di(s,p),u--)}if(!r)for(;u--;u)s.unshift("..");r&&s[0]!==""&&(!s[0]||!qs(s[0]))&&s.unshift("");var h=s.join("/");return l&&h.substr(-1)!=="/"&&(h+="/"),h}var sm="Invariant failed";function rt(e,n){throw new Error(sm)}function os(e){return e.charAt(0)==="/"?e:"/"+e}function hc(e){return e.charAt(0)==="/"?e.substr(1):e}function am(e,n){return e.toLowerCase().indexOf(n.toLowerCase())===0&&"/?#".indexOf(e.charAt(n.length))!==-1}function qp(e,n){return am(e,n)?e.substr(n.length):e}function Kp(e){return e.charAt(e.length-1)==="/"?e.slice(0,-1):e}function im(e){var n=e||"/",t="",s="",a=n.indexOf("#");a!==-1&&(s=n.substr(a),n=n.substr(0,a));var i=n.indexOf("?");return i!==-1&&(t=n.substr(i),n=n.substr(0,i)),{pathname:n,search:t==="?"?"":t,hash:s==="#"?"":s}}function $e(e){var n=e.pathname,t=e.search,s=e.hash,a=n||"/";return t&&t!=="?"&&(a+=t.charAt(0)==="?"?t:"?"+t),s&&s!=="#"&&(a+=s.charAt(0)==="#"?s:"#"+s),a}function Ve(e,n,t,s){var a;typeof e=="string"?(a=im(e),a.state=n):(a=be({},e),a.pathname===void 0&&(a.pathname=""),a.search?a.search.charAt(0)!=="?"&&(a.search="?"+a.search):a.search="",a.hash?a.hash.charAt(0)!=="#"&&(a.hash="#"+a.hash):a.hash="",n!==void 0&&a.state===void 0&&(a.state=n));try{a.pathname=decodeURI(a.pathname)}catch(i){throw i instanceof URIError?new URIError('Pathname "'+a.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):i}return t&&(a.key=t),s?a.pathname?a.pathname.charAt(0)!=="/"&&(a.pathname=tm(a.pathname,s.pathname)):a.pathname=s.pathname:a.pathname||(a.pathname="/"),a}function Ul(){var e=null;function n(r){return e=r,function(){e===r&&(e=null)}}function t(r,l,c,u){if(e!=null){var p=typeof e=="function"?e(r,l):e;typeof p=="string"?typeof c=="function"?c(p,u):u(!0):u(p!==!1)}else u(!0)}var s=[];function a(r){var l=!0;function c(){l&&r.apply(void 0,arguments)}return s.push(c),function(){l=!1,s=s.filter(function(u){return u!==c})}}function i(){for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];s.forEach(function(u){return u.apply(void 0,l)})}return{setPrompt:n,confirmTransitionTo:t,appendListener:a,notifyListeners:i}}var Qp=!!(typeof window<"u"&&window.document&&window.document.createElement);function Xp(e,n){n(window.confirm(e))}function rm(){var e=window.navigator.userAgent;return(e.indexOf("Android 2.")!==-1||e.indexOf("Android 4.0")!==-1)&&e.indexOf("Mobile Safari")!==-1&&e.indexOf("Chrome")===-1&&e.indexOf("Windows Phone")===-1?!1:window.history&&"pushState"in window.history}function lm(){return window.navigator.userAgent.indexOf("Trident")===-1}function om(){return window.navigator.userAgent.indexOf("Firefox")===-1}function cm(e){return e.state===void 0&&navigator.userAgent.indexOf("CriOS")===-1}var fc="popstate",mc="hashchange";function gc(){try{return window.history.state||{}}catch{return{}}}function um(e){e===void 0&&(e={}),Qp||rt();var n=window.history,t=rm(),s=!lm(),a=e,i=a.forceRefresh,r=i===void 0?!1:i,l=a.getUserConfirmation,c=l===void 0?Xp:l,u=a.keyLength,p=u===void 0?6:u,d=e.basename?Kp(os(e.basename)):"";function h(C){var T=C||{},I=T.key,L=T.state,$=window.location,J=$.pathname,he=$.search,re=$.hash,fe=J+he+re;return d&&(fe=qp(fe,d)),Ve(fe,L,I)}function v(){return Math.random().toString(36).substr(2,p)}var _=Ul();function w(C){be(b,C),b.length=n.length,_.notifyListeners(b.location,b.action)}function N(C){cm(C)||g(h(C.state))}function m(){g(h(gc()))}var f=!1;function g(C){if(f)f=!1,w();else{var T="POP";_.confirmTransitionTo(C,T,c,function(I){I?w({action:T,location:C}):y(C)})}}function y(C){var T=b.location,I=j.indexOf(T.key);I===-1&&(I=0);var L=j.indexOf(C.key);L===-1&&(L=0);var $=I-L;$&&(f=!0,E($))}var x=h(gc()),j=[x.key];function S(C){return d+$e(C)}function k(C,T){var I="PUSH",L=Ve(C,T,v(),b.location);_.confirmTransitionTo(L,I,c,function($){if($){var J=S(L),he=L.key,re=L.state;if(t)if(n.pushState({key:he,state:re},null,J),r)window.location.href=J;else{var fe=j.indexOf(b.location.key),Bn=j.slice(0,fe+1);Bn.push(L.key),j=Bn,w({action:I,location:L})}else window.location.href=J}})}function H(C,T){var I="REPLACE",L=Ve(C,T,v(),b.location);_.confirmTransitionTo(L,I,c,function($){if($){var J=S(L),he=L.key,re=L.state;if(t)if(n.replaceState({key:he,state:re},null,J),r)window.location.replace(J);else{var fe=j.indexOf(b.location.key);fe!==-1&&(j[fe]=L.key),w({action:I,location:L})}else window.location.replace(J)}})}function E(C){n.go(C)}function M(){E(-1)}function V(){E(1)}var R=0;function Y(C){R+=C,R===1&&C===1?(window.addEventListener(fc,N),s&&window.addEventListener(mc,m)):R===0&&(window.removeEventListener(fc,N),s&&window.removeEventListener(mc,m))}var G=!1;function A(C){C===void 0&&(C=!1);var T=_.setPrompt(C);return G||(Y(1),G=!0),function(){return G&&(G=!1,Y(-1)),T()}}function q(C){var T=_.appendListener(C);return Y(1),function(){Y(-1),T()}}var b={length:n.length,action:"POP",location:x,createHref:S,push:k,replace:H,go:E,goBack:M,goForward:V,block:A,listen:q};return b}var vc="hashchange",pm={hashbang:{encodePath:function(n){return n.charAt(0)==="!"?n:"!/"+hc(n)},decodePath:function(n){return n.charAt(0)==="!"?n.substr(1):n}},noslash:{encodePath:hc,decodePath:os},slash:{encodePath:os,decodePath:os}};function Jp(e){var n=e.indexOf("#");return n===-1?e:e.slice(0,n)}function qt(){var e=window.location.href,n=e.indexOf("#");return n===-1?"":e.substring(n+1)}function dm(e){window.location.hash=e}function Fi(e){window.location.replace(Jp(window.location.href)+"#"+e)}function hm(e){e===void 0&&(e={}),Qp||rt();var n=window.history;om();var t=e,s=t.getUserConfirmation,a=s===void 0?Xp:s,i=t.hashType,r=i===void 0?"slash":i,l=e.basename?Kp(os(e.basename)):"",c=pm[r],u=c.encodePath,p=c.decodePath;function d(){var T=p(qt());return l&&(T=qp(T,l)),Ve(T)}var h=Ul();function v(T){be(C,T),C.length=n.length,h.notifyListeners(C.location,C.action)}var _=!1,w=null;function N(T,I){return T.pathname===I.pathname&&T.search===I.search&&T.hash===I.hash}function m(){var T=qt(),I=u(T);if(T!==I)Fi(I);else{var L=d(),$=C.location;if(!_&&N($,L)||w===$e(L))return;w=null,f(L)}}function f(T){if(_)_=!1,v();else{var I="POP";h.confirmTransitionTo(T,I,a,function(L){L?v({action:I,location:T}):g(T)})}}function g(T){var I=C.location,L=S.lastIndexOf($e(I));L===-1&&(L=0);var $=S.lastIndexOf($e(T));$===-1&&($=0);var J=L-$;J&&(_=!0,M(J))}var y=qt(),x=u(y);y!==x&&Fi(x);var j=d(),S=[$e(j)];function k(T){var I=document.querySelector("base"),L="";return I&&I.getAttribute("href")&&(L=Jp(window.location.href)),L+"#"+u(l+$e(T))}function H(T,I){var L="PUSH",$=Ve(T,void 0,void 0,C.location);h.confirmTransitionTo($,L,a,function(J){if(J){var he=$e($),re=u(l+he),fe=qt()!==re;if(fe){w=he,dm(re);var Bn=S.lastIndexOf($e(C.location)),no=S.slice(0,Bn+1);no.push(he),S=no,v({action:L,location:$})}else v()}})}function E(T,I){var L="REPLACE",$=Ve(T,void 0,void 0,C.location);h.confirmTransitionTo($,L,a,function(J){if(J){var he=$e($),re=u(l+he),fe=qt()!==re;fe&&(w=he,Fi(re));var Bn=S.indexOf($e(C.location));Bn!==-1&&(S[Bn]=he),v({action:L,location:$})}})}function M(T){n.go(T)}function V(){M(-1)}function R(){M(1)}var Y=0;function G(T){Y+=T,Y===1&&T===1?window.addEventListener(vc,m):Y===0&&window.removeEventListener(vc,m)}var A=!1;function q(T){T===void 0&&(T=!1);var I=h.setPrompt(T);return A||(G(1),A=!0),function(){return A&&(A=!1,G(-1)),I()}}function b(T){var I=h.appendListener(T);return G(1),function(){G(-1),I()}}var C={length:n.length,action:"POP",location:j,createHref:k,push:H,replace:E,go:M,goBack:V,goForward:R,block:q,listen:b};return C}function _c(e,n,t){return Math.min(Math.max(e,n),t)}function fm(e){e===void 0&&(e={});var n=e,t=n.getUserConfirmation,s=n.initialEntries,a=s===void 0?["/"]:s,i=n.initialIndex,r=i===void 0?0:i,l=n.keyLength,c=l===void 0?6:l,u=Ul();function p(k){be(S,k),S.length=S.entries.length,u.notifyListeners(S.location,S.action)}function d(){return Math.random().toString(36).substr(2,c)}var h=_c(r,0,a.length-1),v=a.map(function(k){return typeof k=="string"?Ve(k,void 0,d()):Ve(k,void 0,k.key||d())}),_=$e;function w(k,H){var E="PUSH",M=Ve(k,H,d(),S.location);u.confirmTransitionTo(M,E,t,function(V){if(V){var R=S.index,Y=R+1,G=S.entries.slice(0);G.length>Y?G.splice(Y,G.length-Y,M):G.push(M),p({action:E,location:M,index:Y,entries:G})}})}function N(k,H){var E="REPLACE",M=Ve(k,H,d(),S.location);u.confirmTransitionTo(M,E,t,function(V){V&&(S.entries[S.index]=M,p({action:E,location:M}))})}function m(k){var H=_c(S.index+k,0,S.entries.length-1),E="POP",M=S.entries[H];u.confirmTransitionTo(M,E,t,function(V){V?p({action:E,location:M,index:H}):p()})}function f(){m(-1)}function g(){m(1)}function y(k){var H=S.index+k;return H>=0&&H<S.entries.length}function x(k){return k===void 0&&(k=!1),u.setPrompt(k)}function j(k){return u.appendListener(k)}var S={length:v.length,action:"POP",location:v[h],index:h,entries:v,createHref:_,push:w,replace:N,go:m,goBack:f,goForward:g,canGo:y,block:x,listen:j};return S}var $i=1073741823,wc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:{};function mm(){var e="__global_unique_id__";return wc[e]=(wc[e]||0)+1}function gm(e,n){return e===n?e!==0||1/e===1/n:e!==e&&n!==n}function vm(e){var n=[];return{on:function(s){n.push(s)},off:function(s){n=n.filter(function(a){return a!==s})},get:function(){return e},set:function(s,a){e=s,n.forEach(function(i){return i(e,a)})}}}function _m(e){return Array.isArray(e)?e[0]:e}function wm(e,n){var t,s,a="__create-react-context-"+mm()+"__",i=function(l){cn(c,l);function c(){var p;return p=l.apply(this,arguments)||this,p.emitter=vm(p.props.value),p}var u=c.prototype;return u.getChildContext=function(){var d;return d={},d[a]=this.emitter,d},u.componentWillReceiveProps=function(d){if(this.props.value!==d.value){var h=this.props.value,v=d.value,_;gm(h,v)?_=0:(_=typeof n=="function"?n(h,v):$i,_|=0,_!==0&&this.emitter.set(d.value,_))}},u.render=function(){return this.props.children},c}(B.Component);i.childContextTypes=(t={},t[a]=dc.object.isRequired,t);var r=function(l){cn(c,l);function c(){var p;return p=l.apply(this,arguments)||this,p.state={value:p.getValue()},p.onUpdate=function(d,h){var v=p.observedBits|0;v&h&&p.setState({value:p.getValue()})},p}var u=c.prototype;return u.componentWillReceiveProps=function(d){var h=d.observedBits;this.observedBits=h??$i},u.componentDidMount=function(){this.context[a]&&this.context[a].on(this.onUpdate);var d=this.props.observedBits;this.observedBits=d??$i},u.componentWillUnmount=function(){this.context[a]&&this.context[a].off(this.onUpdate)},u.getValue=function(){return this.context[a]?this.context[a].get():e},u.render=function(){return _m(this.props.children)(this.state.value)},c}(B.Component);return r.contextTypes=(s={},s[a]=dc.object,s),{Provider:i,Consumer:r}}var Zp=F.createContext||wm,Rt={exports:{}},ym=Array.isArray||function(e){return Object.prototype.toString.call(e)=="[object Array]"},La=ym;Rt.exports=td;Rt.exports.parse=Wl;Rt.exports.compile=km;Rt.exports.tokensToFunction=ed;Rt.exports.tokensToRegExp=nd;var xm=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function Wl(e,n){for(var t=[],s=0,a=0,i="",r=n&&n.delimiter||"/",l;(l=xm.exec(e))!=null;){var c=l[0],u=l[1],p=l.index;if(i+=e.slice(a,p),a=p+c.length,u){i+=u[1];continue}var d=e[a],h=l[2],v=l[3],_=l[4],w=l[5],N=l[6],m=l[7];i&&(t.push(i),i="");var f=h!=null&&d!=null&&d!==h,g=N==="+"||N==="*",y=N==="?"||N==="*",x=h||r,j=_||w,S=h||(typeof t[t.length-1]=="string"?t[t.length-1]:"");t.push({name:v||s++,prefix:h||"",delimiter:x,optional:y,repeat:g,partial:f,asterisk:!!m,pattern:j?jm(j):m?".*":Sm(x,S)})}return a<e.length&&(i+=e.substr(a)),i&&t.push(i),t}function Sm(e,n){return!n||n.indexOf(e)>-1?"[^"+Kn(e)+"]+?":Kn(n)+"|(?:(?!"+Kn(n)+")[^"+Kn(e)+"])+?"}function km(e,n){return ed(Wl(e,n),n)}function bm(e){return encodeURI(e).replace(/[\/?#]/g,function(n){return"%"+n.charCodeAt(0).toString(16).toUpperCase()})}function Em(e){return encodeURI(e).replace(/[?#]/g,function(n){return"%"+n.charCodeAt(0).toString(16).toUpperCase()})}function ed(e,n){for(var t=new Array(e.length),s=0;s<e.length;s++)typeof e[s]=="object"&&(t[s]=new RegExp("^(?:"+e[s].pattern+")$",Yl(n)));return function(a,i){for(var r="",l=a||{},c=i||{},u=c.pretty?bm:encodeURIComponent,p=0;p<e.length;p++){var d=e[p];if(typeof d=="string"){r+=d;continue}var h=l[d.name],v;if(h==null)if(d.optional){d.partial&&(r+=d.prefix);continue}else throw new TypeError('Expected "'+d.name+'" to be defined');if(La(h)){if(!d.repeat)throw new TypeError('Expected "'+d.name+'" to not repeat, but received `'+JSON.stringify(h)+"`");if(h.length===0){if(d.optional)continue;throw new TypeError('Expected "'+d.name+'" to not be empty')}for(var _=0;_<h.length;_++){if(v=u(h[_]),!t[p].test(v))throw new TypeError('Expected all "'+d.name+'" to match "'+d.pattern+'", but received `'+JSON.stringify(v)+"`");r+=(_===0?d.prefix:d.delimiter)+v}continue}if(v=d.asterisk?Em(h):u(h),!t[p].test(v))throw new TypeError('Expected "'+d.name+'" to match "'+d.pattern+'", but received "'+v+'"');r+=d.prefix+v}return r}}function Kn(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function jm(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function Gl(e,n){return e.keys=n,e}function Yl(e){return e&&e.sensitive?"":"i"}function Tm(e,n){var t=e.source.match(/\((?!\?)/g);if(t)for(var s=0;s<t.length;s++)n.push({name:s,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return Gl(e,n)}function Cm(e,n,t){for(var s=[],a=0;a<e.length;a++)s.push(td(e[a],n,t).source);var i=new RegExp("(?:"+s.join("|")+")",Yl(t));return Gl(i,n)}function zm(e,n,t){return nd(Wl(e,t),n,t)}function nd(e,n,t){La(n)||(t=n||t,n=[]),t=t||{};for(var s=t.strict,a=t.end!==!1,i="",r=0;r<e.length;r++){var l=e[r];if(typeof l=="string")i+=Kn(l);else{var c=Kn(l.prefix),u="(?:"+l.pattern+")";n.push(l),l.repeat&&(u+="(?:"+c+u+")*"),l.optional?l.partial?u=c+"("+u+")?":u="(?:"+c+"("+u+"))?":u=c+"("+u+")",i+=u}}var p=Kn(t.delimiter||"/"),d=i.slice(-p.length)===p;return s||(i=(d?i.slice(0,-p.length):i)+"(?:"+p+"(?=$))?"),a?i+="$":i+=s&&d?"":"(?="+p+"|$)",Gl(new RegExp("^"+i,Yl(t)),n)}function td(e,n,t){return La(n)||(t=n||t,n=[]),t=t||{},e instanceof RegExp?Tm(e,n):La(e)?Cm(e,n,t):zm(e,n,t)}var Nm=Rt.exports;const Mm=Oa(Nm);var sd={exports:{}},W={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var de=typeof Symbol=="function"&&Symbol.for,ql=de?Symbol.for("react.element"):60103,Kl=de?Symbol.for("react.portal"):60106,ni=de?Symbol.for("react.fragment"):60107,ti=de?Symbol.for("react.strict_mode"):60108,si=de?Symbol.for("react.profiler"):60114,ai=de?Symbol.for("react.provider"):60109,ii=de?Symbol.for("react.context"):60110,Ql=de?Symbol.for("react.async_mode"):60111,ri=de?Symbol.for("react.concurrent_mode"):60111,li=de?Symbol.for("react.forward_ref"):60112,oi=de?Symbol.for("react.suspense"):60113,Pm=de?Symbol.for("react.suspense_list"):60120,ci=de?Symbol.for("react.memo"):60115,ui=de?Symbol.for("react.lazy"):60116,Im=de?Symbol.for("react.block"):60121,Lm=de?Symbol.for("react.fundamental"):60117,Hm=de?Symbol.for("react.responder"):60118,Vm=de?Symbol.for("react.scope"):60119;function Fe(e){if(typeof e=="object"&&e!==null){var n=e.$$typeof;switch(n){case ql:switch(e=e.type,e){case Ql:case ri:case ni:case si:case ti:case oi:return e;default:switch(e=e&&e.$$typeof,e){case ii:case li:case ui:case ci:case ai:return e;default:return n}}case Kl:return n}}}function ad(e){return Fe(e)===ri}W.AsyncMode=Ql;W.ConcurrentMode=ri;W.ContextConsumer=ii;W.ContextProvider=ai;W.Element=ql;W.ForwardRef=li;W.Fragment=ni;W.Lazy=ui;W.Memo=ci;W.Portal=Kl;W.Profiler=si;W.StrictMode=ti;W.Suspense=oi;W.isAsyncMode=function(e){return ad(e)||Fe(e)===Ql};W.isConcurrentMode=ad;W.isContextConsumer=function(e){return Fe(e)===ii};W.isContextProvider=function(e){return Fe(e)===ai};W.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===ql};W.isForwardRef=function(e){return Fe(e)===li};W.isFragment=function(e){return Fe(e)===ni};W.isLazy=function(e){return Fe(e)===ui};W.isMemo=function(e){return Fe(e)===ci};W.isPortal=function(e){return Fe(e)===Kl};W.isProfiler=function(e){return Fe(e)===si};W.isStrictMode=function(e){return Fe(e)===ti};W.isSuspense=function(e){return Fe(e)===oi};W.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ni||e===ri||e===si||e===ti||e===oi||e===Pm||typeof e=="object"&&e!==null&&(e.$$typeof===ui||e.$$typeof===ci||e.$$typeof===ai||e.$$typeof===ii||e.$$typeof===li||e.$$typeof===Lm||e.$$typeof===Hm||e.$$typeof===Vm||e.$$typeof===Im)};W.typeOf=Fe;sd.exports=W;var Am=sd.exports;function pi(e,n){if(e==null)return{};var t={};for(var s in e)if({}.hasOwnProperty.call(e,s)){if(n.indexOf(s)!==-1)continue;t[s]=e[s]}return t}var id=Am,Om={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Rm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},rd={};rd[id.ForwardRef]=Om;rd[id.Memo]=Rm;var Dm=function(n){var t=Zp();return t.displayName=n,t},Fm=Dm("Router-History"),$m=function(n){var t=Zp();return t.displayName=n,t},st=$m("Router"),di=function(e){cn(n,e),n.computeRootMatch=function(a){return{path:"/",url:"/",params:{},isExact:a==="/"}};function n(s){var a;return a=e.call(this,s)||this,a.state={location:s.history.location},a._isMounted=!1,a._pendingLocation=null,s.staticContext||(a.unlisten=s.history.listen(function(i){a._isMounted?a.setState({location:i}):a._pendingLocation=i})),a}var t=n.prototype;return t.componentDidMount=function(){this._isMounted=!0,this._pendingLocation&&this.setState({location:this._pendingLocation})},t.componentWillUnmount=function(){this.unlisten&&this.unlisten()},t.render=function(){return F.createElement(st.Provider,{value:{history:this.props.history,location:this.state.location,match:n.computeRootMatch(this.state.location.pathname),staticContext:this.props.staticContext}},F.createElement(Fm.Provider,{children:this.props.children||null,value:this.props.history}))},n}(F.Component);F.Component;F.Component;var yc={},Bm=1e4,xc=0;function Um(e,n){var t=""+n.end+n.strict+n.sensitive,s=yc[t]||(yc[t]={});if(s[e])return s[e];var a=[],i=Mm(e,a,n),r={regexp:i,keys:a};return xc<Bm&&(s[e]=r,xc++),r}function Xl(e,n){n===void 0&&(n={}),(typeof n=="string"||Array.isArray(n))&&(n={path:n});var t=n,s=t.path,a=t.exact,i=a===void 0?!1:a,r=t.strict,l=r===void 0?!1:r,c=t.sensitive,u=c===void 0?!1:c,p=[].concat(s);return p.reduce(function(d,h){if(!h&&h!=="")return null;if(d)return d;var v=Um(h,{end:i,strict:l,sensitive:u}),_=v.regexp,w=v.keys,N=_.exec(e);if(!N)return null;var m=N[0],f=N.slice(1),g=e===m;return i&&!g?null:{path:h,url:h==="/"&&m===""?"/":m,isExact:g,params:w.reduce(function(y,x,j){return y[x.name]=f[j],y},{})}},null)}var Sn=function(e){cn(n,e);function n(){return e.apply(this,arguments)||this}var t=n.prototype;return t.render=function(){var a=this;return F.createElement(st.Consumer,null,function(i){i||rt();var r=a.props.location||i.location,l=a.props.computedMatch?a.props.computedMatch:a.props.path?Xl(r.pathname,a.props):i.match,c=be({},i,{location:r,match:l}),u=a.props,p=u.children,d=u.component,h=u.render;return Array.isArray(p)&&p.length===0&&(p=null),F.createElement(st.Provider,{value:c},c.match?p?typeof p=="function"?p(c):p:d?F.createElement(d,c):h?h(c):null:typeof p=="function"?p(c):null)})},n}(F.Component);function Jl(e){return e.charAt(0)==="/"?e:"/"+e}function Wm(e,n){return e?be({},n,{pathname:Jl(e)+n.pathname}):n}function Gm(e,n){if(!e)return n;var t=Jl(e);return n.pathname.indexOf(t)!==0?n:be({},n,{pathname:n.pathname.substr(t.length)})}function Sc(e){return typeof e=="string"?e:$e(e)}function Bi(e){return function(){rt()}}function kc(){}F.Component;var Ym=function(e){cn(n,e);function n(){return e.apply(this,arguments)||this}var t=n.prototype;return t.render=function(){var a=this;return F.createElement(st.Consumer,null,function(i){i||rt();var r=a.props.location||i.location,l,c;return F.Children.forEach(a.props.children,function(u){if(c==null&&F.isValidElement(u)){l=u;var p=u.props.path||u.props.from;c=p?Xl(r.pathname,be({},u.props,{path:p})):i.match}}),c?F.cloneElement(l,{location:r,computedMatch:c}):null})},n}(F.Component),qm=F.useContext;function ld(){return qm(st).location}F.Component;var Km=function(e){cn(n,e);function n(){for(var s,a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return s=e.call.apply(e,[this].concat(i))||this,s.history=hm(s.props),s}var t=n.prototype;return t.render=function(){return F.createElement(di,{history:this.history,children:this.props.children})},n}(F.Component),Wr=function(n,t){return typeof n=="function"?n(t):n},od=function(n,t){return typeof n=="string"?Ve(n,null,null,t):n},Zl=function(n){return n},Ht=F.forwardRef;typeof Ht>"u"&&(Ht=Zl);function Qm(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}var Xm=Ht(function(e,n){var t=e.innerRef,s=e.navigate,a=e.onClick,i=pi(e,["innerRef","navigate","onClick"]),r=i.target,l=be({},i,{onClick:function(u){try{a&&a(u)}catch(p){throw u.preventDefault(),p}!u.defaultPrevented&&u.button===0&&(!r||r==="_self")&&!Qm(u)&&(u.preventDefault(),s())}});return Zl!==Ht?l.ref=n||t:l.ref=t,F.createElement("a",l)}),Jm=Ht(function(e,n){var t=e.component,s=t===void 0?Xm:t,a=e.replace,i=e.to,r=e.innerRef,l=pi(e,["component","replace","to","innerRef"]);return F.createElement(st.Consumer,null,function(c){c||rt();var u=c.history,p=od(Wr(i,c.location),c.location),d=p?u.createHref(p):"",h=be({},l,{href:d,navigate:function(){var _=Wr(i,c.location),w=a?u.replace:u.push;w(_)}});return Zl!==Ht?h.ref=n||r:h.innerRef=r,F.createElement(s,h)})}),cd=function(n){return n},Ha=F.forwardRef;typeof Ha>"u"&&(Ha=cd);function Zm(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.filter(function(s){return s}).join(" ")}Ha(function(e,n){var t=e["aria-current"],s=t===void 0?"page":t,a=e.activeClassName,i=a===void 0?"active":a,r=e.activeStyle,l=e.className,c=e.exact,u=e.isActive,p=e.location,d=e.sensitive,h=e.strict,v=e.style,_=e.to,w=e.innerRef,N=pi(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return F.createElement(st.Consumer,null,function(m){m||rt();var f=p||m.location,g=od(Wr(_,f),f),y=g.pathname,x=y&&y.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),j=x?Xl(f.pathname,{path:x,exact:c,sensitive:d,strict:h}):null,S=!!(u?u(j,f):j),k=S?Zm(l,i):l,H=S?be({},v,{},r):v,E=be({"aria-current":S&&s||null,className:k,style:H,to:g},N);return cd!==Ha?E.ref=n||w:E.innerRef=w,F.createElement(Jm,E)})});function eg({component:e,...n}){return o.jsx(Sn,{...n,render:t=>o.jsx(e,{...t})})}function lt(){return B.useEffect(()=>{const e=document.querySelector(".rss-header");if(e){const n=e.getBoundingClientRect().height;document.body.style.paddingTop=`${n}px`}},[]),o.jsx("header",{className:"rss-header",children:o.jsx("nav",{className:"navbar navbar-inverse",children:o.jsxs("div",{className:"container-fluid",children:[o.jsxs("div",{className:"navbar-header",children:[o.jsx("button",{className:"navbar-toggle",type:"button","data-toggle":"collapse","data-target":"#rss-navbar",children:o.jsx("img",{src:"/resume//icons/toggle-ico.png",alt:"menu-toggler"})}),o.jsx("a",{href:"/resume",className:"navbar-brand font-18-24",children:"Mohamed Nawaz"})]}),o.jsx("div",{className:"collapse navbar-collapse",id:"rss-navbar",children:o.jsxs("ul",{className:"nav navbar-nav",children:[o.jsx("li",{children:o.jsx("a",{href:"/resume",children:"Home"})}),o.jsx("li",{children:o.jsx("a",{href:"/resume/#/about",children:"About"})}),o.jsx("li",{children:o.jsx("a",{href:"/resume/#/projects",children:"Works"})}),o.jsx("li",{children:o.jsx("a",{href:"/resume/#/contact",children:"Contact"})}),o.jsx("li",{className:"rss-navbar__menu__call",children:o.jsx("a",{href:"#call",children:o.jsx("span",{className:"glyphicon glyphicon-earphone",children:o.jsx("p",{children:"Connect"})})})})]})})]})})})}function ot(){return o.jsxs("footer",{className:"rss-footer",children:[o.jsxs("div",{className:"rss-footer__brand-container",children:[o.jsx("h5",{className:"rss-footer__brand-container__title font-18-24",children:"Mohamed Nawaz"}),o.jsxs("div",{className:"rss-footer__brand-container__link-container",children:[o.jsx("a",{href:"/resume",children:o.jsx("p",{className:"rss-footer__brand-container__link-container__link font-14-18",children:"Home"})}),o.jsx("a",{href:"/resume/#/about",children:o.jsx("p",{className:"rss-footer__brand-container__link-container__link font-14-18",children:"About"})}),o.jsx("a",{href:"/resume/#/projects",children:o.jsx("p",{className:"rss-footer__brand-container__link-container__link font-14-18",children:"Works"})}),o.jsx("a",{href:"/resume/#/contact",children:o.jsx("p",{className:"rss-footer__brand-container__link-container__link font-14-18",children:"Contact"})})]}),o.jsxs("div",{className:"rss-footer__brand-container__icons-container",children:[o.jsx("div",{className:"rss-footer__brand-container__icons-container__ico-container",children:o.jsx("a",{href:"https://www.linkedin.com/in/mohamed-nawaz/",target:"_blank",children:o.jsx("img",{src:"/resume//icons/linkedin-ico.png",alt:"Linkedin Icon",className:"rss-footer__brand-container__icons-container__ico-container__icon"})})}),o.jsx("div",{className:"rss-footer__brand-container__icons-container__ico-container",children:o.jsx("a",{href:"https://www.twitter.com",target:"_blank",children:o.jsx("img",{src:"/resume//icons/twitter-ico.png",alt:"Linkedin Icon",className:"rss-footer__brand-container__icons-container__ico-container__icon"})})}),o.jsx("div",{className:"rss-footer__brand-container__icons-container__ico-container",children:o.jsx("a",{href:"https://github.com/mohamed-nawas/",target:"_blank",children:o.jsx("img",{src:"/resume//icons/web-ico.png",alt:"Linkedin Icon",className:"rss-footer__brand-container__icons-container__ico-container__icon"})})})]})]}),o.jsxs("div",{className:"rss-footer__info-container",children:[o.jsxs("div",{className:"rss-footer__info-container__item-container",children:[o.jsx("img",{src:"/resume//icons/envelope-ico.png",alt:"Envelope Icon",className:"rss-footer__info-container__item-container__icon"}),o.jsx("p",{className:"rss-footer__info-container__item-container__content font-16-18",children:"mgmnawas@gmail.com"})]}),o.jsx("div",{className:"rss-footer__info-container__vertical-ruler"}),o.jsxs("div",{className:"rss-footer__info-container__item-container",children:[o.jsx("img",{src:"/resume//icons/call-ico.png",alt:"Call Icon",className:"rss-footer__info-container__item-container__icon"}),o.jsx("p",{className:"rss-footer__info-container__item-container__content font-16-18",children:"+94 77 455 2663"})]}),o.jsx("div",{className:"rss-footer__info-container__vertical-ruler"}),o.jsxs("div",{className:"rss-footer__info-container__item-container",children:[o.jsx("img",{src:"/resume//icons/marker-ico.png",alt:"Marker Icon",className:"rss-footer__info-container__item-container__icon"}),o.jsx("p",{className:"rss-footer__info-container__item-container__content font-16-18",children:"Colombo, Sri Lanka"})]})]}),o.jsx("p",{className:"rss-footer__copyright font-12-16",children:"Copyright © 2024 Mohamed Nawaz. All rights reserved."}),o.jsx("div",{id:"rss-footer__back-to-top-container",children:o.jsx("button",{id:"rss-footer__back-to-top-container__button",onClick:()=>window.scrollTo({top:0,behavior:"smooth"})})})]})}const ng=[{title:"What is your availability and preferred mode of communication?",slug:"I am currently available for new projects and can effectively collaborate remotely using various communication channels such as email, video conferencing, and project management tools. I'm committed to clear and consistent communication throughout the development process",plusIconPath:"icons/plus-ico.png",plusIconAlt:"Plus Icon",crossIconPath:"icons/cross-ico.png",crossIconAlt:"Cross Icon"},{title:"What is your estimated timeline for a project completion?",slug:"Project timelines vary depending on the complexity and scope of the requirements. After a thorough understanding of your project, I will provide a detailed timeline outlining key milestones and deliverables. I prioritize efficient development while maintaining code quality",plusIconPath:"icons/plus-ico.png",plusIconAlt:"Plus Icon",crossIconPath:"icons/cross-ico.png",crossIconAlt:"Cross Icon"},{title:"What kind of support do you offer after project completion?",slug:"While my primary focus is on building and deploying web applications, I can offer post-launch support and maintenance packages depending on your needs. This can include bug fixes, updates, and minor enhancements to ensure the continued stability and functionality of your application",plusIconPath:"icons/plus-ico.png",plusIconAlt:"Plus Icon",crossIconPath:"icons/cross-ico.png",crossIconAlt:"Cross Icon"},{title:"Do you consider performance and scalability in your development process?",slug:"Yes, performance and scalability are integral to my development approach. I write efficient code, optimize database queries, and consider potential growth to build applications that are both fast and can handle increasing user loads",plusIconPath:"icons/plus-ico.png",plusIconAlt:"Plus Icon",crossIconPath:"icons/cross-ico.png",crossIconAlt:"Cross Icon"},{title:"Are you experienced in integrating with external APIs and services?",slug:"Yes, I have experience integrating with various third-party APIs and services, such as payment gateways, analytics platforms, and other external tools, to enhance the functionality and features of your web application",plusIconPath:"icons/plus-ico.png",plusIconAlt:"Plus Icon",crossIconPath:"icons/cross-ico.png",crossIconAlt:"Cross Icon"}],tg=({containerRef:e,title:n,slug:t,containerHelpIconPath:s,containerHelpIconAlt:a,containerHelpTextTitle:i,containerHelpTextSlug:r,containerHelpBtnValue:l})=>{const[c,u]=B.useState(0),p=d=>u(d);return o.jsxs("div",{ref:e,className:"rss-faq",children:[o.jsx("h2",{className:"rss-faq__title font-28-48",children:n}),o.jsx("p",{className:"rss-faq__slug font-14-18",children:t}),o.jsxs("div",{className:"rss-faq__container",children:[o.jsx("div",{className:"rss-faq__container__faq-container",children:ng.map((d,h)=>{const v=c===h,_=v?d.slug:"",w=v?d.crossIconPath:d.plusIconPath,N=v?d.crossIconAlt:d.plusIconAlt,m=`/resume//${w}`;return o.jsxs("div",{className:"rss-faq__container__faq-container__item",onClick:()=>p(h),style:{cursor:"pointer"},children:[o.jsxs("div",{className:"rss-faq__container__faq-container__item__text-container",children:[o.jsx("h4",{className:"rss-faq__container__faq-container__item__text-container__title font-16-20",children:d.title}),o.jsx("p",{className:"rss-faq__container__faq-container__item__text-container__slug font-14-18",children:_})]}),o.jsx("div",{className:"rss-faq__container__faq-container__item__icon-container",children:o.jsx("img",{src:m,alt:N,className:"rss-faq__container__faq-container__item__icon-container__icon"})})]},h)})}),o.jsxs("div",{className:"rss-faq__container__help-container",children:[o.jsx("div",{className:"rss-faq__container__help-container__ico-container",children:o.jsx("img",{src:`/resume//${s}`,alt:a,className:"rss-faq__container__help-container__ico-container__icon"})}),o.jsxs("div",{className:"rss-faq__container__help-container__text-container",children:[o.jsx("h4",{className:"rss-faq__container__help-container__text-container__title font-18-24",children:i}),o.jsx("p",{className:"rss-faq__container__help-container__text-container__slug font-14-18",children:r})]}),o.jsx("a",{href:"/resume/#/contact#form",children:o.jsx("input",{type:"button",value:l,className:"rss-faq__container__help-container__submit-btn"})})]})]})]})},ud=({title:e,slug:n,containerHelpIconPath:t,containerHelpIconAlt:s,containerHelpTextTitle:a,containerHelpTextSlug:i,containerHelpBtnValue:r})=>{const l=B.useRef(null);return o.jsx(tg,{containerRef:l,title:e,slug:n,containerHelpIconPath:t,containerHelpIconAlt:s,containerHelpTextTitle:a,containerHelpTextSlug:i,containerHelpBtnValue:r})},sg=[{name:"Sarah Thompson",company:"interfaithhousing.org",linkedin:"https://www.linkedin.com/in/sarah-thompson",facebook:"https://www.facebook.com/sarah.thompson",twitter:"https://twitter.com/sarah_thompson",review:"Mohamed brought a rare blend of technical proficiency and mission-driven mindset to our organization. His contributions helped us streamline internal systems and improve digital outreach strategies. He’s a team player with strong problem-solving skills—an asset to any organization, especially in the nonprofit space where resourcefulness is key."},{name:"Emily Roberts",company:"public-health.uiowa.edu",linkedin:"https://www.linkedin.com/in/emily-roberts",facebook:"https://www.facebook.com/emily.roberts",twitter:"https://twitter.com/emily_roberts",review:"Working with Mohamed was such a smooth and enjoyable experience. He really listened to what I needed and brought my ideas to life in a way that felt true to my vision. The website he created looks amazing, is easy to navigate, and really elevated our online presence. I'm so glad I chose him for the project."},{name:"Laura Adams",company:"regent.bank",linkedin:"https://www.linkedin.com/in/laura-adams",facebook:"https://www.facebook.com/laura.adams",twiter:"https://twitter.com/laura_adams",review:"It was a pleasure working with Mohamed on our web project. He brought fresh ideas, listened closely to our goals, and delivered a clean, engaging site that truly reflects our brand. His attention to detail and strong sense of user experience made a noticeable difference. I appreciated how responsive and professional he was throughout the entire process."}];function bc(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function eo(e,n){e===void 0&&(e={}),n===void 0&&(n={});const t=["__proto__","constructor","prototype"];Object.keys(n).filter(s=>t.indexOf(s)<0).forEach(s=>{typeof e[s]>"u"?e[s]=n[s]:bc(n[s])&&bc(e[s])&&Object.keys(n[s]).length>0&&eo(e[s],n[s])})}const pd={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function on(){const e=typeof document<"u"?document:{};return eo(e,pd),e}const ag={document:pd,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function Te(){const e=typeof window<"u"?window:{};return eo(e,ag),e}function ig(e){return e===void 0&&(e=""),e.trim().split(" ").filter(n=>!!n.trim())}function rg(e){const n=e;Object.keys(n).forEach(t=>{try{n[t]=null}catch{}try{delete n[t]}catch{}})}function Gr(e,n){return n===void 0&&(n=0),setTimeout(e,n)}function Va(){return Date.now()}function lg(e){const n=Te();let t;return n.getComputedStyle&&(t=n.getComputedStyle(e,null)),!t&&e.currentStyle&&(t=e.currentStyle),t||(t=e.style),t}function og(e,n){n===void 0&&(n="x");const t=Te();let s,a,i;const r=lg(e);return t.WebKitCSSMatrix?(a=r.transform||r.webkitTransform,a.split(",").length>6&&(a=a.split(", ").map(l=>l.replace(",",".")).join(", ")),i=new t.WebKitCSSMatrix(a==="none"?"":a)):(i=r.MozTransform||r.OTransform||r.MsTransform||r.msTransform||r.transform||r.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),s=i.toString().split(",")),n==="x"&&(t.WebKitCSSMatrix?a=i.m41:s.length===16?a=parseFloat(s[12]):a=parseFloat(s[4])),n==="y"&&(t.WebKitCSSMatrix?a=i.m42:s.length===16?a=parseFloat(s[13]):a=parseFloat(s[5])),a||0}function Ks(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function cg(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function Le(){const e=Object(arguments.length<=0?void 0:arguments[0]),n=["__proto__","constructor","prototype"];for(let t=1;t<arguments.length;t+=1){const s=t<0||arguments.length<=t?void 0:arguments[t];if(s!=null&&!cg(s)){const a=Object.keys(Object(s)).filter(i=>n.indexOf(i)<0);for(let i=0,r=a.length;i<r;i+=1){const l=a[i],c=Object.getOwnPropertyDescriptor(s,l);c!==void 0&&c.enumerable&&(Ks(e[l])&&Ks(s[l])?s[l].__swiper__?e[l]=s[l]:Le(e[l],s[l]):!Ks(e[l])&&Ks(s[l])?(e[l]={},s[l].__swiper__?e[l]=s[l]:Le(e[l],s[l])):e[l]=s[l])}}}return e}function Qs(e,n,t){e.style.setProperty(n,t)}function dd(e){let{swiper:n,targetPosition:t,side:s}=e;const a=Te(),i=-n.translate;let r=null,l;const c=n.params.speed;n.wrapperEl.style.scrollSnapType="none",a.cancelAnimationFrame(n.cssModeFrameID);const u=t>i?"next":"prev",p=(h,v)=>u==="next"&&h>=v||u==="prev"&&h<=v,d=()=>{l=new Date().getTime(),r===null&&(r=l);const h=Math.max(Math.min((l-r)/c,1),0),v=.5-Math.cos(h*Math.PI)/2;let _=i+v*(t-i);if(p(_,t)&&(_=t),n.wrapperEl.scrollTo({[s]:_}),p(_,t)){n.wrapperEl.style.overflow="hidden",n.wrapperEl.style.scrollSnapType="",setTimeout(()=>{n.wrapperEl.style.overflow="",n.wrapperEl.scrollTo({[s]:_})}),a.cancelAnimationFrame(n.cssModeFrameID);return}n.cssModeFrameID=a.requestAnimationFrame(d)};d()}function fn(e,n){n===void 0&&(n="");const t=Te(),s=[...e.children];return t.HTMLSlotElement&&e instanceof HTMLSlotElement&&s.push(...e.assignedElements()),n?s.filter(a=>a.matches(n)):s}function ug(e,n){const t=[n];for(;t.length>0;){const s=t.shift();if(e===s)return!0;t.push(...s.children,...s.shadowRoot?s.shadowRoot.children:[],...s.assignedElements?s.assignedElements():[])}}function pg(e,n){const t=Te();let s=n.contains(e);return!s&&t.HTMLSlotElement&&n instanceof HTMLSlotElement&&(s=[...n.assignedElements()].includes(e),s||(s=ug(e,n))),s}function Aa(e){try{console.warn(e);return}catch{}}function Yr(e,n){n===void 0&&(n=[]);const t=document.createElement(e);return t.classList.add(...Array.isArray(n)?n:ig(n)),t}function dg(e,n){const t=[];for(;e.previousElementSibling;){const s=e.previousElementSibling;n?s.matches(n)&&t.push(s):t.push(s),e=s}return t}function hg(e,n){const t=[];for(;e.nextElementSibling;){const s=e.nextElementSibling;n?s.matches(n)&&t.push(s):t.push(s),e=s}return t}function zn(e,n){return Te().getComputedStyle(e,null).getPropertyValue(n)}function Ec(e){let n=e,t;if(n){for(t=0;(n=n.previousSibling)!==null;)n.nodeType===1&&(t+=1);return t}}function fg(e,n){const t=[];let s=e.parentElement;for(;s;)t.push(s),s=s.parentElement;return t}function jc(e,n,t){const s=Te();return e[n==="width"?"offsetWidth":"offsetHeight"]+parseFloat(s.getComputedStyle(e,null).getPropertyValue(n==="width"?"margin-right":"margin-top"))+parseFloat(s.getComputedStyle(e,null).getPropertyValue(n==="width"?"margin-left":"margin-bottom"))}let Ui;function mg(){const e=Te(),n=on();return{smoothScroll:n.documentElement&&n.documentElement.style&&"scrollBehavior"in n.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&n instanceof e.DocumentTouch)}}function hd(){return Ui||(Ui=mg()),Ui}let Wi;function gg(e){let{userAgent:n}=e===void 0?{}:e;const t=hd(),s=Te(),a=s.navigator.platform,i=n||s.navigator.userAgent,r={ios:!1,android:!1},l=s.screen.width,c=s.screen.height,u=i.match(/(Android);?[\s\/]+([\d.]+)?/);let p=i.match(/(iPad).*OS\s([\d_]+)/);const d=i.match(/(iPod)(.*OS\s([\d_]+))?/),h=!p&&i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),v=a==="Win32";let _=a==="MacIntel";const w=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!p&&_&&t.touch&&w.indexOf(`${l}x${c}`)>=0&&(p=i.match(/(Version)\/([\d.]+)/),p||(p=[0,1,"13_0_0"]),_=!1),u&&!v&&(r.os="android",r.android=!0),(p||h||d)&&(r.os="ios",r.ios=!0),r}function fd(e){return e===void 0&&(e={}),Wi||(Wi=gg(e)),Wi}let Gi;function vg(){const e=Te(),n=fd();let t=!1;function s(){const l=e.navigator.userAgent.toLowerCase();return l.indexOf("safari")>=0&&l.indexOf("chrome")<0&&l.indexOf("android")<0}if(s()){const l=String(e.navigator.userAgent);if(l.includes("Version/")){const[c,u]=l.split("Version/")[1].split(" ")[0].split(".").map(p=>Number(p));t=c<16||c===16&&u<2}}const a=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),i=s(),r=i||a&&n.ios;return{isSafari:t||i,needPerspectiveFix:t,need3dFix:r,isWebView:a}}function md(){return Gi||(Gi=vg()),Gi}function _g(e){let{swiper:n,on:t,emit:s}=e;const a=Te();let i=null,r=null;const l=()=>{!n||n.destroyed||!n.initialized||(s("beforeResize"),s("resize"))},c=()=>{!n||n.destroyed||!n.initialized||(i=new ResizeObserver(d=>{r=a.requestAnimationFrame(()=>{const{width:h,height:v}=n;let _=h,w=v;d.forEach(N=>{let{contentBoxSize:m,contentRect:f,target:g}=N;g&&g!==n.el||(_=f?f.width:(m[0]||m).inlineSize,w=f?f.height:(m[0]||m).blockSize)}),(_!==h||w!==v)&&l()})}),i.observe(n.el))},u=()=>{r&&a.cancelAnimationFrame(r),i&&i.unobserve&&n.el&&(i.unobserve(n.el),i=null)},p=()=>{!n||n.destroyed||!n.initialized||s("orientationchange")};t("init",()=>{if(n.params.resizeObserver&&typeof a.ResizeObserver<"u"){c();return}a.addEventListener("resize",l),a.addEventListener("orientationchange",p)}),t("destroy",()=>{u(),a.removeEventListener("resize",l),a.removeEventListener("orientationchange",p)})}function wg(e){let{swiper:n,extendParams:t,on:s,emit:a}=e;const i=[],r=Te(),l=function(p,d){d===void 0&&(d={});const h=r.MutationObserver||r.WebkitMutationObserver,v=new h(_=>{if(n.__preventObserver__)return;if(_.length===1){a("observerUpdate",_[0]);return}const w=function(){a("observerUpdate",_[0])};r.requestAnimationFrame?r.requestAnimationFrame(w):r.setTimeout(w,0)});v.observe(p,{attributes:typeof d.attributes>"u"?!0:d.attributes,childList:n.isElement||(typeof d.childList>"u"?!0:d).childList,characterData:typeof d.characterData>"u"?!0:d.characterData}),i.push(v)},c=()=>{if(n.params.observer){if(n.params.observeParents){const p=fg(n.hostEl);for(let d=0;d<p.length;d+=1)l(p[d])}l(n.hostEl,{childList:n.params.observeSlideChildren}),l(n.wrapperEl,{attributes:!1})}},u=()=>{i.forEach(p=>{p.disconnect()}),i.splice(0,i.length)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),s("init",c),s("destroy",u)}var yg={on(e,n,t){const s=this;if(!s.eventsListeners||s.destroyed||typeof n!="function")return s;const a=t?"unshift":"push";return e.split(" ").forEach(i=>{s.eventsListeners[i]||(s.eventsListeners[i]=[]),s.eventsListeners[i][a](n)}),s},once(e,n,t){const s=this;if(!s.eventsListeners||s.destroyed||typeof n!="function")return s;function a(){s.off(e,a),a.__emitterProxy&&delete a.__emitterProxy;for(var i=arguments.length,r=new Array(i),l=0;l<i;l++)r[l]=arguments[l];n.apply(s,r)}return a.__emitterProxy=n,s.on(e,a,t)},onAny(e,n){const t=this;if(!t.eventsListeners||t.destroyed||typeof e!="function")return t;const s=n?"unshift":"push";return t.eventsAnyListeners.indexOf(e)<0&&t.eventsAnyListeners[s](e),t},offAny(e){const n=this;if(!n.eventsListeners||n.destroyed||!n.eventsAnyListeners)return n;const t=n.eventsAnyListeners.indexOf(e);return t>=0&&n.eventsAnyListeners.splice(t,1),n},off(e,n){const t=this;return!t.eventsListeners||t.destroyed||!t.eventsListeners||e.split(" ").forEach(s=>{typeof n>"u"?t.eventsListeners[s]=[]:t.eventsListeners[s]&&t.eventsListeners[s].forEach((a,i)=>{(a===n||a.__emitterProxy&&a.__emitterProxy===n)&&t.eventsListeners[s].splice(i,1)})}),t},emit(){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsListeners)return e;let n,t,s;for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return typeof i[0]=="string"||Array.isArray(i[0])?(n=i[0],t=i.slice(1,i.length),s=e):(n=i[0].events,t=i[0].data,s=i[0].context||e),t.unshift(s),(Array.isArray(n)?n:n.split(" ")).forEach(c=>{e.eventsAnyListeners&&e.eventsAnyListeners.length&&e.eventsAnyListeners.forEach(u=>{u.apply(s,[c,...t])}),e.eventsListeners&&e.eventsListeners[c]&&e.eventsListeners[c].forEach(u=>{u.apply(s,t)})}),e}};function xg(){const e=this;let n,t;const s=e.el;typeof e.params.width<"u"&&e.params.width!==null?n=e.params.width:n=s.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?t=e.params.height:t=s.clientHeight,!(n===0&&e.isHorizontal()||t===0&&e.isVertical())&&(n=n-parseInt(zn(s,"padding-left")||0,10)-parseInt(zn(s,"padding-right")||0,10),t=t-parseInt(zn(s,"padding-top")||0,10)-parseInt(zn(s,"padding-bottom")||0,10),Number.isNaN(n)&&(n=0),Number.isNaN(t)&&(t=0),Object.assign(e,{width:n,height:t,size:e.isHorizontal()?n:t}))}function Sg(){const e=this;function n(E,M){return parseFloat(E.getPropertyValue(e.getDirectionLabel(M))||0)}const t=e.params,{wrapperEl:s,slidesEl:a,size:i,rtlTranslate:r,wrongRTL:l}=e,c=e.virtual&&t.virtual.enabled,u=c?e.virtual.slides.length:e.slides.length,p=fn(a,`.${e.params.slideClass}, swiper-slide`),d=c?e.virtual.slides.length:p.length;let h=[];const v=[],_=[];let w=t.slidesOffsetBefore;typeof w=="function"&&(w=t.slidesOffsetBefore.call(e));let N=t.slidesOffsetAfter;typeof N=="function"&&(N=t.slidesOffsetAfter.call(e));const m=e.snapGrid.length,f=e.slidesGrid.length;let g=t.spaceBetween,y=-w,x=0,j=0;if(typeof i>"u")return;typeof g=="string"&&g.indexOf("%")>=0?g=parseFloat(g.replace("%",""))/100*i:typeof g=="string"&&(g=parseFloat(g)),e.virtualSize=-g,p.forEach(E=>{r?E.style.marginLeft="":E.style.marginRight="",E.style.marginBottom="",E.style.marginTop=""}),t.centeredSlides&&t.cssMode&&(Qs(s,"--swiper-centered-offset-before",""),Qs(s,"--swiper-centered-offset-after",""));const S=t.grid&&t.grid.rows>1&&e.grid;S?e.grid.initSlides(p):e.grid&&e.grid.unsetSlides();let k;const H=t.slidesPerView==="auto"&&t.breakpoints&&Object.keys(t.breakpoints).filter(E=>typeof t.breakpoints[E].slidesPerView<"u").length>0;for(let E=0;E<d;E+=1){k=0;let M;if(p[E]&&(M=p[E]),S&&e.grid.updateSlide(E,M,p),!(p[E]&&zn(M,"display")==="none")){if(t.slidesPerView==="auto"){H&&(p[E].style[e.getDirectionLabel("width")]="");const V=getComputedStyle(M),R=M.style.transform,Y=M.style.webkitTransform;if(R&&(M.style.transform="none"),Y&&(M.style.webkitTransform="none"),t.roundLengths)k=e.isHorizontal()?jc(M,"width"):jc(M,"height");else{const G=n(V,"width"),A=n(V,"padding-left"),q=n(V,"padding-right"),b=n(V,"margin-left"),C=n(V,"margin-right"),T=V.getPropertyValue("box-sizing");if(T&&T==="border-box")k=G+b+C;else{const{clientWidth:I,offsetWidth:L}=M;k=G+A+q+b+C+(L-I)}}R&&(M.style.transform=R),Y&&(M.style.webkitTransform=Y),t.roundLengths&&(k=Math.floor(k))}else k=(i-(t.slidesPerView-1)*g)/t.slidesPerView,t.roundLengths&&(k=Math.floor(k)),p[E]&&(p[E].style[e.getDirectionLabel("width")]=`${k}px`);p[E]&&(p[E].swiperSlideSize=k),_.push(k),t.centeredSlides?(y=y+k/2+x/2+g,x===0&&E!==0&&(y=y-i/2-g),E===0&&(y=y-i/2-g),Math.abs(y)<1/1e3&&(y=0),t.roundLengths&&(y=Math.floor(y)),j%t.slidesPerGroup===0&&h.push(y),v.push(y)):(t.roundLengths&&(y=Math.floor(y)),(j-Math.min(e.params.slidesPerGroupSkip,j))%e.params.slidesPerGroup===0&&h.push(y),v.push(y),y=y+k+g),e.virtualSize+=k+g,x=k,j+=1}}if(e.virtualSize=Math.max(e.virtualSize,i)+N,r&&l&&(t.effect==="slide"||t.effect==="coverflow")&&(s.style.width=`${e.virtualSize+g}px`),t.setWrapperSize&&(s.style[e.getDirectionLabel("width")]=`${e.virtualSize+g}px`),S&&e.grid.updateWrapperSize(k,h),!t.centeredSlides){const E=[];for(let M=0;M<h.length;M+=1){let V=h[M];t.roundLengths&&(V=Math.floor(V)),h[M]<=e.virtualSize-i&&E.push(V)}h=E,Math.floor(e.virtualSize-i)-Math.floor(h[h.length-1])>1&&h.push(e.virtualSize-i)}if(c&&t.loop){const E=_[0]+g;if(t.slidesPerGroup>1){const M=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/t.slidesPerGroup),V=E*t.slidesPerGroup;for(let R=0;R<M;R+=1)h.push(h[h.length-1]+V)}for(let M=0;M<e.virtual.slidesBefore+e.virtual.slidesAfter;M+=1)t.slidesPerGroup===1&&h.push(h[h.length-1]+E),v.push(v[v.length-1]+E),e.virtualSize+=E}if(h.length===0&&(h=[0]),g!==0){const E=e.isHorizontal()&&r?"marginLeft":e.getDirectionLabel("marginRight");p.filter((M,V)=>!t.cssMode||t.loop?!0:V!==p.length-1).forEach(M=>{M.style[E]=`${g}px`})}if(t.centeredSlides&&t.centeredSlidesBounds){let E=0;_.forEach(V=>{E+=V+(g||0)}),E-=g;const M=E>i?E-i:0;h=h.map(V=>V<=0?-w:V>M?M+N:V)}if(t.centerInsufficientSlides){let E=0;_.forEach(V=>{E+=V+(g||0)}),E-=g;const M=(t.slidesOffsetBefore||0)+(t.slidesOffsetAfter||0);if(E+M<i){const V=(i-E-M)/2;h.forEach((R,Y)=>{h[Y]=R-V}),v.forEach((R,Y)=>{v[Y]=R+V})}}if(Object.assign(e,{slides:p,snapGrid:h,slidesGrid:v,slidesSizesGrid:_}),t.centeredSlides&&t.cssMode&&!t.centeredSlidesBounds){Qs(s,"--swiper-centered-offset-before",`${-h[0]}px`),Qs(s,"--swiper-centered-offset-after",`${e.size/2-_[_.length-1]/2}px`);const E=-e.snapGrid[0],M=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(V=>V+E),e.slidesGrid=e.slidesGrid.map(V=>V+M)}if(d!==u&&e.emit("slidesLengthChange"),h.length!==m&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),v.length!==f&&e.emit("slidesGridLengthChange"),t.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!c&&!t.cssMode&&(t.effect==="slide"||t.effect==="fade")){const E=`${t.containerModifierClass}backface-hidden`,M=e.el.classList.contains(E);d<=t.maxBackfaceHiddenSlides?M||e.el.classList.add(E):M&&e.el.classList.remove(E)}}function kg(e){const n=this,t=[],s=n.virtual&&n.params.virtual.enabled;let a=0,i;typeof e=="number"?n.setTransition(e):e===!0&&n.setTransition(n.params.speed);const r=l=>s?n.slides[n.getSlideIndexByData(l)]:n.slides[l];if(n.params.slidesPerView!=="auto"&&n.params.slidesPerView>1)if(n.params.centeredSlides)(n.visibleSlides||[]).forEach(l=>{t.push(l)});else for(i=0;i<Math.ceil(n.params.slidesPerView);i+=1){const l=n.activeIndex+i;if(l>n.slides.length&&!s)break;t.push(r(l))}else t.push(r(n.activeIndex));for(i=0;i<t.length;i+=1)if(typeof t[i]<"u"){const l=t[i].offsetHeight;a=l>a?l:a}(a||a===0)&&(n.wrapperEl.style.height=`${a}px`)}function bg(){const e=this,n=e.slides,t=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let s=0;s<n.length;s+=1)n[s].swiperSlideOffset=(e.isHorizontal()?n[s].offsetLeft:n[s].offsetTop)-t-e.cssOverflowAdjustment()}const Tc=(e,n,t)=>{n&&!e.classList.contains(t)?e.classList.add(t):!n&&e.classList.contains(t)&&e.classList.remove(t)};function Eg(e){e===void 0&&(e=this&&this.translate||0);const n=this,t=n.params,{slides:s,rtlTranslate:a,snapGrid:i}=n;if(s.length===0)return;typeof s[0].swiperSlideOffset>"u"&&n.updateSlidesOffset();let r=-e;a&&(r=e),n.visibleSlidesIndexes=[],n.visibleSlides=[];let l=t.spaceBetween;typeof l=="string"&&l.indexOf("%")>=0?l=parseFloat(l.replace("%",""))/100*n.size:typeof l=="string"&&(l=parseFloat(l));for(let c=0;c<s.length;c+=1){const u=s[c];let p=u.swiperSlideOffset;t.cssMode&&t.centeredSlides&&(p-=s[0].swiperSlideOffset);const d=(r+(t.centeredSlides?n.minTranslate():0)-p)/(u.swiperSlideSize+l),h=(r-i[0]+(t.centeredSlides?n.minTranslate():0)-p)/(u.swiperSlideSize+l),v=-(r-p),_=v+n.slidesSizesGrid[c],w=v>=0&&v<=n.size-n.slidesSizesGrid[c],N=v>=0&&v<n.size-1||_>1&&_<=n.size||v<=0&&_>=n.size;N&&(n.visibleSlides.push(u),n.visibleSlidesIndexes.push(c)),Tc(u,N,t.slideVisibleClass),Tc(u,w,t.slideFullyVisibleClass),u.progress=a?-d:d,u.originalProgress=a?-h:h}}function jg(e){const n=this;if(typeof e>"u"){const p=n.rtlTranslate?-1:1;e=n&&n.translate&&n.translate*p||0}const t=n.params,s=n.maxTranslate()-n.minTranslate();let{progress:a,isBeginning:i,isEnd:r,progressLoop:l}=n;const c=i,u=r;if(s===0)a=0,i=!0,r=!0;else{a=(e-n.minTranslate())/s;const p=Math.abs(e-n.minTranslate())<1,d=Math.abs(e-n.maxTranslate())<1;i=p||a<=0,r=d||a>=1,p&&(a=0),d&&(a=1)}if(t.loop){const p=n.getSlideIndexByData(0),d=n.getSlideIndexByData(n.slides.length-1),h=n.slidesGrid[p],v=n.slidesGrid[d],_=n.slidesGrid[n.slidesGrid.length-1],w=Math.abs(e);w>=h?l=(w-h)/_:l=(w+_-v)/_,l>1&&(l-=1)}Object.assign(n,{progress:a,progressLoop:l,isBeginning:i,isEnd:r}),(t.watchSlidesProgress||t.centeredSlides&&t.autoHeight)&&n.updateSlidesProgress(e),i&&!c&&n.emit("reachBeginning toEdge"),r&&!u&&n.emit("reachEnd toEdge"),(c&&!i||u&&!r)&&n.emit("fromEdge"),n.emit("progress",a)}const Yi=(e,n,t)=>{n&&!e.classList.contains(t)?e.classList.add(t):!n&&e.classList.contains(t)&&e.classList.remove(t)};function Tg(){const e=this,{slides:n,params:t,slidesEl:s,activeIndex:a}=e,i=e.virtual&&t.virtual.enabled,r=e.grid&&t.grid&&t.grid.rows>1,l=d=>fn(s,`.${t.slideClass}${d}, swiper-slide${d}`)[0];let c,u,p;if(i)if(t.loop){let d=a-e.virtual.slidesBefore;d<0&&(d=e.virtual.slides.length+d),d>=e.virtual.slides.length&&(d-=e.virtual.slides.length),c=l(`[data-swiper-slide-index="${d}"]`)}else c=l(`[data-swiper-slide-index="${a}"]`);else r?(c=n.find(d=>d.column===a),p=n.find(d=>d.column===a+1),u=n.find(d=>d.column===a-1)):c=n[a];c&&(r||(p=hg(c,`.${t.slideClass}, swiper-slide`)[0],t.loop&&!p&&(p=n[0]),u=dg(c,`.${t.slideClass}, swiper-slide`)[0],t.loop&&!u===0&&(u=n[n.length-1]))),n.forEach(d=>{Yi(d,d===c,t.slideActiveClass),Yi(d,d===p,t.slideNextClass),Yi(d,d===u,t.slidePrevClass)}),e.emitSlidesClasses()}const ca=(e,n)=>{if(!e||e.destroyed||!e.params)return;const t=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,s=n.closest(t());if(s){let a=s.querySelector(`.${e.params.lazyPreloaderClass}`);!a&&e.isElement&&(s.shadowRoot?a=s.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{s.shadowRoot&&(a=s.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),a&&a.remove())})),a&&a.remove()}},qi=(e,n)=>{if(!e.slides[n])return;const t=e.slides[n].querySelector('[loading="lazy"]');t&&t.removeAttribute("loading")},qr=e=>{if(!e||e.destroyed||!e.params)return;let n=e.params.lazyPreloadPrevNext;const t=e.slides.length;if(!t||!n||n<0)return;n=Math.min(n,t);const s=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),a=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const r=a,l=[r-n];l.push(...Array.from({length:n}).map((c,u)=>r+s+u)),e.slides.forEach((c,u)=>{l.includes(c.column)&&qi(e,u)});return}const i=a+s-1;if(e.params.rewind||e.params.loop)for(let r=a-n;r<=i+n;r+=1){const l=(r%t+t)%t;(l<a||l>i)&&qi(e,l)}else for(let r=Math.max(a-n,0);r<=Math.min(i+n,t-1);r+=1)r!==a&&(r>i||r<a)&&qi(e,r)};function Cg(e){const{slidesGrid:n,params:t}=e,s=e.rtlTranslate?e.translate:-e.translate;let a;for(let i=0;i<n.length;i+=1)typeof n[i+1]<"u"?s>=n[i]&&s<n[i+1]-(n[i+1]-n[i])/2?a=i:s>=n[i]&&s<n[i+1]&&(a=i+1):s>=n[i]&&(a=i);return t.normalizeSlideIndex&&(a<0||typeof a>"u")&&(a=0),a}function zg(e){const n=this,t=n.rtlTranslate?n.translate:-n.translate,{snapGrid:s,params:a,activeIndex:i,realIndex:r,snapIndex:l}=n;let c=e,u;const p=v=>{let _=v-n.virtual.slidesBefore;return _<0&&(_=n.virtual.slides.length+_),_>=n.virtual.slides.length&&(_-=n.virtual.slides.length),_};if(typeof c>"u"&&(c=Cg(n)),s.indexOf(t)>=0)u=s.indexOf(t);else{const v=Math.min(a.slidesPerGroupSkip,c);u=v+Math.floor((c-v)/a.slidesPerGroup)}if(u>=s.length&&(u=s.length-1),c===i&&!n.params.loop){u!==l&&(n.snapIndex=u,n.emit("snapIndexChange"));return}if(c===i&&n.params.loop&&n.virtual&&n.params.virtual.enabled){n.realIndex=p(c);return}const d=n.grid&&a.grid&&a.grid.rows>1;let h;if(n.virtual&&a.virtual.enabled&&a.loop)h=p(c);else if(d){const v=n.slides.find(w=>w.column===c);let _=parseInt(v.getAttribute("data-swiper-slide-index"),10);Number.isNaN(_)&&(_=Math.max(n.slides.indexOf(v),0)),h=Math.floor(_/a.grid.rows)}else if(n.slides[c]){const v=n.slides[c].getAttribute("data-swiper-slide-index");v?h=parseInt(v,10):h=c}else h=c;Object.assign(n,{previousSnapIndex:l,snapIndex:u,previousRealIndex:r,realIndex:h,previousIndex:i,activeIndex:c}),n.initialized&&qr(n),n.emit("activeIndexChange"),n.emit("snapIndexChange"),(n.initialized||n.params.runCallbacksOnInit)&&(r!==h&&n.emit("realIndexChange"),n.emit("slideChange"))}function Ng(e,n){const t=this,s=t.params;let a=e.closest(`.${s.slideClass}, swiper-slide`);!a&&t.isElement&&n&&n.length>1&&n.includes(e)&&[...n.slice(n.indexOf(e)+1,n.length)].forEach(l=>{!a&&l.matches&&l.matches(`.${s.slideClass}, swiper-slide`)&&(a=l)});let i=!1,r;if(a){for(let l=0;l<t.slides.length;l+=1)if(t.slides[l]===a){i=!0,r=l;break}}if(a&&i)t.clickedSlide=a,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(a.getAttribute("data-swiper-slide-index"),10):t.clickedIndex=r;else{t.clickedSlide=void 0,t.clickedIndex=void 0;return}s.slideToClickedSlide&&t.clickedIndex!==void 0&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}var Mg={updateSize:xg,updateSlides:Sg,updateAutoHeight:kg,updateSlidesOffset:bg,updateSlidesProgress:Eg,updateProgress:jg,updateSlidesClasses:Tg,updateActiveIndex:zg,updateClickedSlide:Ng};function Pg(e){e===void 0&&(e=this.isHorizontal()?"x":"y");const n=this,{params:t,rtlTranslate:s,translate:a,wrapperEl:i}=n;if(t.virtualTranslate)return s?-a:a;if(t.cssMode)return a;let r=og(i,e);return r+=n.cssOverflowAdjustment(),s&&(r=-r),r||0}function Ig(e,n){const t=this,{rtlTranslate:s,params:a,wrapperEl:i,progress:r}=t;let l=0,c=0;const u=0;t.isHorizontal()?l=s?-e:e:c=e,a.roundLengths&&(l=Math.floor(l),c=Math.floor(c)),t.previousTranslate=t.translate,t.translate=t.isHorizontal()?l:c,a.cssMode?i[t.isHorizontal()?"scrollLeft":"scrollTop"]=t.isHorizontal()?-l:-c:a.virtualTranslate||(t.isHorizontal()?l-=t.cssOverflowAdjustment():c-=t.cssOverflowAdjustment(),i.style.transform=`translate3d(${l}px, ${c}px, ${u}px)`);let p;const d=t.maxTranslate()-t.minTranslate();d===0?p=0:p=(e-t.minTranslate())/d,p!==r&&t.updateProgress(e),t.emit("setTranslate",t.translate,n)}function Lg(){return-this.snapGrid[0]}function Hg(){return-this.snapGrid[this.snapGrid.length-1]}function Vg(e,n,t,s,a){e===void 0&&(e=0),n===void 0&&(n=this.params.speed),t===void 0&&(t=!0),s===void 0&&(s=!0);const i=this,{params:r,wrapperEl:l}=i;if(i.animating&&r.preventInteractionOnTransition)return!1;const c=i.minTranslate(),u=i.maxTranslate();let p;if(s&&e>c?p=c:s&&e<u?p=u:p=e,i.updateProgress(p),r.cssMode){const d=i.isHorizontal();if(n===0)l[d?"scrollLeft":"scrollTop"]=-p;else{if(!i.support.smoothScroll)return dd({swiper:i,targetPosition:-p,side:d?"left":"top"}),!0;l.scrollTo({[d?"left":"top"]:-p,behavior:"smooth"})}return!0}return n===0?(i.setTransition(0),i.setTranslate(p),t&&(i.emit("beforeTransitionStart",n,a),i.emit("transitionEnd"))):(i.setTransition(n),i.setTranslate(p),t&&(i.emit("beforeTransitionStart",n,a),i.emit("transitionStart")),i.animating||(i.animating=!0,i.onTranslateToWrapperTransitionEnd||(i.onTranslateToWrapperTransitionEnd=function(h){!i||i.destroyed||h.target===this&&(i.wrapperEl.removeEventListener("transitionend",i.onTranslateToWrapperTransitionEnd),i.onTranslateToWrapperTransitionEnd=null,delete i.onTranslateToWrapperTransitionEnd,i.animating=!1,t&&i.emit("transitionEnd"))}),i.wrapperEl.addEventListener("transitionend",i.onTranslateToWrapperTransitionEnd))),!0}var Ag={getTranslate:Pg,setTranslate:Ig,minTranslate:Lg,maxTranslate:Hg,translateTo:Vg};function Og(e,n){const t=this;t.params.cssMode||(t.wrapperEl.style.transitionDuration=`${e}ms`,t.wrapperEl.style.transitionDelay=e===0?"0ms":""),t.emit("setTransition",e,n)}function gd(e){let{swiper:n,runCallbacks:t,direction:s,step:a}=e;const{activeIndex:i,previousIndex:r}=n;let l=s;if(l||(i>r?l="next":i<r?l="prev":l="reset"),n.emit(`transition${a}`),t&&i!==r){if(l==="reset"){n.emit(`slideResetTransition${a}`);return}n.emit(`slideChangeTransition${a}`),l==="next"?n.emit(`slideNextTransition${a}`):n.emit(`slidePrevTransition${a}`)}}function Rg(e,n){e===void 0&&(e=!0);const t=this,{params:s}=t;s.cssMode||(s.autoHeight&&t.updateAutoHeight(),gd({swiper:t,runCallbacks:e,direction:n,step:"Start"}))}function Dg(e,n){e===void 0&&(e=!0);const t=this,{params:s}=t;t.animating=!1,!s.cssMode&&(t.setTransition(0),gd({swiper:t,runCallbacks:e,direction:n,step:"End"}))}var Fg={setTransition:Og,transitionStart:Rg,transitionEnd:Dg};function $g(e,n,t,s,a){e===void 0&&(e=0),t===void 0&&(t=!0),typeof e=="string"&&(e=parseInt(e,10));const i=this;let r=e;r<0&&(r=0);const{params:l,snapGrid:c,slidesGrid:u,previousIndex:p,activeIndex:d,rtlTranslate:h,wrapperEl:v,enabled:_}=i;if(!_&&!s&&!a||i.destroyed||i.animating&&l.preventInteractionOnTransition)return!1;typeof n>"u"&&(n=i.params.speed);const w=Math.min(i.params.slidesPerGroupSkip,r);let N=w+Math.floor((r-w)/i.params.slidesPerGroup);N>=c.length&&(N=c.length-1);const m=-c[N];if(l.normalizeSlideIndex)for(let S=0;S<u.length;S+=1){const k=-Math.floor(m*100),H=Math.floor(u[S]*100),E=Math.floor(u[S+1]*100);typeof u[S+1]<"u"?k>=H&&k<E-(E-H)/2?r=S:k>=H&&k<E&&(r=S+1):k>=H&&(r=S)}if(i.initialized&&r!==d&&(!i.allowSlideNext&&(h?m>i.translate&&m>i.minTranslate():m<i.translate&&m<i.minTranslate())||!i.allowSlidePrev&&m>i.translate&&m>i.maxTranslate()&&(d||0)!==r))return!1;r!==(p||0)&&t&&i.emit("beforeSlideChangeStart"),i.updateProgress(m);let f;r>d?f="next":r<d?f="prev":f="reset";const g=i.virtual&&i.params.virtual.enabled;if(!(g&&a)&&(h&&-m===i.translate||!h&&m===i.translate))return i.updateActiveIndex(r),l.autoHeight&&i.updateAutoHeight(),i.updateSlidesClasses(),l.effect!=="slide"&&i.setTranslate(m),f!=="reset"&&(i.transitionStart(t,f),i.transitionEnd(t,f)),!1;if(l.cssMode){const S=i.isHorizontal(),k=h?m:-m;if(n===0)g&&(i.wrapperEl.style.scrollSnapType="none",i._immediateVirtual=!0),g&&!i._cssModeVirtualInitialSet&&i.params.initialSlide>0?(i._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{v[S?"scrollLeft":"scrollTop"]=k})):v[S?"scrollLeft":"scrollTop"]=k,g&&requestAnimationFrame(()=>{i.wrapperEl.style.scrollSnapType="",i._immediateVirtual=!1});else{if(!i.support.smoothScroll)return dd({swiper:i,targetPosition:k,side:S?"left":"top"}),!0;v.scrollTo({[S?"left":"top"]:k,behavior:"smooth"})}return!0}const j=md().isSafari;return g&&!a&&j&&i.isElement&&i.virtual.update(!1,!1,r),i.setTransition(n),i.setTranslate(m),i.updateActiveIndex(r),i.updateSlidesClasses(),i.emit("beforeTransitionStart",n,s),i.transitionStart(t,f),n===0?i.transitionEnd(t,f):i.animating||(i.animating=!0,i.onSlideToWrapperTransitionEnd||(i.onSlideToWrapperTransitionEnd=function(k){!i||i.destroyed||k.target===this&&(i.wrapperEl.removeEventListener("transitionend",i.onSlideToWrapperTransitionEnd),i.onSlideToWrapperTransitionEnd=null,delete i.onSlideToWrapperTransitionEnd,i.transitionEnd(t,f))}),i.wrapperEl.addEventListener("transitionend",i.onSlideToWrapperTransitionEnd)),!0}function Bg(e,n,t,s){e===void 0&&(e=0),t===void 0&&(t=!0),typeof e=="string"&&(e=parseInt(e,10));const a=this;if(a.destroyed)return;typeof n>"u"&&(n=a.params.speed);const i=a.grid&&a.params.grid&&a.params.grid.rows>1;let r=e;if(a.params.loop)if(a.virtual&&a.params.virtual.enabled)r=r+a.virtual.slidesBefore;else{let l;if(i){const h=r*a.params.grid.rows;l=a.slides.find(v=>v.getAttribute("data-swiper-slide-index")*1===h).column}else l=a.getSlideIndexByData(r);const c=i?Math.ceil(a.slides.length/a.params.grid.rows):a.slides.length,{centeredSlides:u}=a.params;let p=a.params.slidesPerView;p==="auto"?p=a.slidesPerViewDynamic():(p=Math.ceil(parseFloat(a.params.slidesPerView,10)),u&&p%2===0&&(p=p+1));let d=c-l<p;if(u&&(d=d||l<Math.ceil(p/2)),s&&u&&a.params.slidesPerView!=="auto"&&!i&&(d=!1),d){const h=u?l<a.activeIndex?"prev":"next":l-a.activeIndex-1<a.params.slidesPerView?"next":"prev";a.loopFix({direction:h,slideTo:!0,activeSlideIndex:h==="next"?l+1:l-c+1,slideRealIndex:h==="next"?a.realIndex:void 0})}if(i){const h=r*a.params.grid.rows;r=a.slides.find(v=>v.getAttribute("data-swiper-slide-index")*1===h).column}else r=a.getSlideIndexByData(r)}return requestAnimationFrame(()=>{a.slideTo(r,n,t,s)}),a}function Ug(e,n,t){n===void 0&&(n=!0);const s=this,{enabled:a,params:i,animating:r}=s;if(!a||s.destroyed)return s;typeof e>"u"&&(e=s.params.speed);let l=i.slidesPerGroup;i.slidesPerView==="auto"&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(l=Math.max(s.slidesPerViewDynamic("current",!0),1));const c=s.activeIndex<i.slidesPerGroupSkip?1:l,u=s.virtual&&i.virtual.enabled;if(i.loop){if(r&&!u&&i.loopPreventsSliding)return!1;if(s.loopFix({direction:"next"}),s._clientLeft=s.wrapperEl.clientLeft,s.activeIndex===s.slides.length-1&&i.cssMode)return requestAnimationFrame(()=>{s.slideTo(s.activeIndex+c,e,n,t)}),!0}return i.rewind&&s.isEnd?s.slideTo(0,e,n,t):s.slideTo(s.activeIndex+c,e,n,t)}function Wg(e,n,t){n===void 0&&(n=!0);const s=this,{params:a,snapGrid:i,slidesGrid:r,rtlTranslate:l,enabled:c,animating:u}=s;if(!c||s.destroyed)return s;typeof e>"u"&&(e=s.params.speed);const p=s.virtual&&a.virtual.enabled;if(a.loop){if(u&&!p&&a.loopPreventsSliding)return!1;s.loopFix({direction:"prev"}),s._clientLeft=s.wrapperEl.clientLeft}const d=l?s.translate:-s.translate;function h(f){return f<0?-Math.floor(Math.abs(f)):Math.floor(f)}const v=h(d),_=i.map(f=>h(f)),w=a.freeMode&&a.freeMode.enabled;let N=i[_.indexOf(v)-1];if(typeof N>"u"&&(a.cssMode||w)){let f;i.forEach((g,y)=>{v>=g&&(f=y)}),typeof f<"u"&&(N=w?i[f]:i[f>0?f-1:f])}let m=0;if(typeof N<"u"&&(m=r.indexOf(N),m<0&&(m=s.activeIndex-1),a.slidesPerView==="auto"&&a.slidesPerGroup===1&&a.slidesPerGroupAuto&&(m=m-s.slidesPerViewDynamic("previous",!0)+1,m=Math.max(m,0))),a.rewind&&s.isBeginning){const f=s.params.virtual&&s.params.virtual.enabled&&s.virtual?s.virtual.slides.length-1:s.slides.length-1;return s.slideTo(f,e,n,t)}else if(a.loop&&s.activeIndex===0&&a.cssMode)return requestAnimationFrame(()=>{s.slideTo(m,e,n,t)}),!0;return s.slideTo(m,e,n,t)}function Gg(e,n,t){n===void 0&&(n=!0);const s=this;if(!s.destroyed)return typeof e>"u"&&(e=s.params.speed),s.slideTo(s.activeIndex,e,n,t)}function Yg(e,n,t,s){n===void 0&&(n=!0),s===void 0&&(s=.5);const a=this;if(a.destroyed)return;typeof e>"u"&&(e=a.params.speed);let i=a.activeIndex;const r=Math.min(a.params.slidesPerGroupSkip,i),l=r+Math.floor((i-r)/a.params.slidesPerGroup),c=a.rtlTranslate?a.translate:-a.translate;if(c>=a.snapGrid[l]){const u=a.snapGrid[l],p=a.snapGrid[l+1];c-u>(p-u)*s&&(i+=a.params.slidesPerGroup)}else{const u=a.snapGrid[l-1],p=a.snapGrid[l];c-u<=(p-u)*s&&(i-=a.params.slidesPerGroup)}return i=Math.max(i,0),i=Math.min(i,a.slidesGrid.length-1),a.slideTo(i,e,n,t)}function qg(){const e=this;if(e.destroyed)return;const{params:n,slidesEl:t}=e,s=n.slidesPerView==="auto"?e.slidesPerViewDynamic():n.slidesPerView;let a=e.clickedIndex,i;const r=e.isElement?"swiper-slide":`.${n.slideClass}`;if(n.loop){if(e.animating)return;i=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),n.centeredSlides?a<e.loopedSlides-s/2||a>e.slides.length-e.loopedSlides+s/2?(e.loopFix(),a=e.getSlideIndex(fn(t,`${r}[data-swiper-slide-index="${i}"]`)[0]),Gr(()=>{e.slideTo(a)})):e.slideTo(a):a>e.slides.length-s?(e.loopFix(),a=e.getSlideIndex(fn(t,`${r}[data-swiper-slide-index="${i}"]`)[0]),Gr(()=>{e.slideTo(a)})):e.slideTo(a)}else e.slideTo(a)}var Kg={slideTo:$g,slideToLoop:Bg,slideNext:Ug,slidePrev:Wg,slideReset:Gg,slideToClosest:Yg,slideToClickedSlide:qg};function Qg(e,n){const t=this,{params:s,slidesEl:a}=t;if(!s.loop||t.virtual&&t.params.virtual.enabled)return;const i=()=>{fn(a,`.${s.slideClass}, swiper-slide`).forEach((h,v)=>{h.setAttribute("data-swiper-slide-index",v)})},r=t.grid&&s.grid&&s.grid.rows>1,l=s.slidesPerGroup*(r?s.grid.rows:1),c=t.slides.length%l!==0,u=r&&t.slides.length%s.grid.rows!==0,p=d=>{for(let h=0;h<d;h+=1){const v=t.isElement?Yr("swiper-slide",[s.slideBlankClass]):Yr("div",[s.slideClass,s.slideBlankClass]);t.slidesEl.append(v)}};if(c){if(s.loopAddBlankSlides){const d=l-t.slides.length%l;p(d),t.recalcSlides(),t.updateSlides()}else Aa("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");i()}else if(u){if(s.loopAddBlankSlides){const d=s.grid.rows-t.slides.length%s.grid.rows;p(d),t.recalcSlides(),t.updateSlides()}else Aa("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");i()}else i();t.loopFix({slideRealIndex:e,direction:s.centeredSlides?void 0:"next",initial:n})}function Xg(e){let{slideRealIndex:n,slideTo:t=!0,direction:s,setTranslate:a,activeSlideIndex:i,initial:r,byController:l,byMousewheel:c}=e===void 0?{}:e;const u=this;if(!u.params.loop)return;u.emit("beforeLoopFix");const{slides:p,allowSlidePrev:d,allowSlideNext:h,slidesEl:v,params:_}=u,{centeredSlides:w,initialSlide:N}=_;if(u.allowSlidePrev=!0,u.allowSlideNext=!0,u.virtual&&_.virtual.enabled){t&&(!_.centeredSlides&&u.snapIndex===0?u.slideTo(u.virtual.slides.length,0,!1,!0):_.centeredSlides&&u.snapIndex<_.slidesPerView?u.slideTo(u.virtual.slides.length+u.snapIndex,0,!1,!0):u.snapIndex===u.snapGrid.length-1&&u.slideTo(u.virtual.slidesBefore,0,!1,!0)),u.allowSlidePrev=d,u.allowSlideNext=h,u.emit("loopFix");return}let m=_.slidesPerView;m==="auto"?m=u.slidesPerViewDynamic():(m=Math.ceil(parseFloat(_.slidesPerView,10)),w&&m%2===0&&(m=m+1));const f=_.slidesPerGroupAuto?m:_.slidesPerGroup;let g=f;g%f!==0&&(g+=f-g%f),g+=_.loopAdditionalSlides,u.loopedSlides=g;const y=u.grid&&_.grid&&_.grid.rows>1;p.length<m+g||u.params.effect==="cards"&&p.length<m+g*2?Aa("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):y&&_.grid.fill==="row"&&Aa("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const x=[],j=[],S=y?Math.ceil(p.length/_.grid.rows):p.length,k=r&&S-N<m&&!w;let H=k?N:u.activeIndex;typeof i>"u"?i=u.getSlideIndex(p.find(A=>A.classList.contains(_.slideActiveClass))):H=i;const E=s==="next"||!s,M=s==="prev"||!s;let V=0,R=0;const G=(y?p[i].column:i)+(w&&typeof a>"u"?-m/2+.5:0);if(G<g){V=Math.max(g-G,f);for(let A=0;A<g-G;A+=1){const q=A-Math.floor(A/S)*S;if(y){const b=S-q-1;for(let C=p.length-1;C>=0;C-=1)p[C].column===b&&x.push(C)}else x.push(S-q-1)}}else if(G+m>S-g){R=Math.max(G-(S-g*2),f),k&&(R=Math.max(R,m-S+N+1));for(let A=0;A<R;A+=1){const q=A-Math.floor(A/S)*S;y?p.forEach((b,C)=>{b.column===q&&j.push(C)}):j.push(q)}}if(u.__preventObserver__=!0,requestAnimationFrame(()=>{u.__preventObserver__=!1}),u.params.effect==="cards"&&p.length<m+g*2&&(j.includes(i)&&j.splice(j.indexOf(i),1),x.includes(i)&&x.splice(x.indexOf(i),1)),M&&x.forEach(A=>{p[A].swiperLoopMoveDOM=!0,v.prepend(p[A]),p[A].swiperLoopMoveDOM=!1}),E&&j.forEach(A=>{p[A].swiperLoopMoveDOM=!0,v.append(p[A]),p[A].swiperLoopMoveDOM=!1}),u.recalcSlides(),_.slidesPerView==="auto"?u.updateSlides():y&&(x.length>0&&M||j.length>0&&E)&&u.slides.forEach((A,q)=>{u.grid.updateSlide(q,A,u.slides)}),_.watchSlidesProgress&&u.updateSlidesOffset(),t){if(x.length>0&&M){if(typeof n>"u"){const A=u.slidesGrid[H],b=u.slidesGrid[H+V]-A;c?u.setTranslate(u.translate-b):(u.slideTo(H+Math.ceil(V),0,!1,!0),a&&(u.touchEventsData.startTranslate=u.touchEventsData.startTranslate-b,u.touchEventsData.currentTranslate=u.touchEventsData.currentTranslate-b))}else if(a){const A=y?x.length/_.grid.rows:x.length;u.slideTo(u.activeIndex+A,0,!1,!0),u.touchEventsData.currentTranslate=u.translate}}else if(j.length>0&&E)if(typeof n>"u"){const A=u.slidesGrid[H],b=u.slidesGrid[H-R]-A;c?u.setTranslate(u.translate-b):(u.slideTo(H-R,0,!1,!0),a&&(u.touchEventsData.startTranslate=u.touchEventsData.startTranslate-b,u.touchEventsData.currentTranslate=u.touchEventsData.currentTranslate-b))}else{const A=y?j.length/_.grid.rows:j.length;u.slideTo(u.activeIndex-A,0,!1,!0)}}if(u.allowSlidePrev=d,u.allowSlideNext=h,u.controller&&u.controller.control&&!l){const A={slideRealIndex:n,direction:s,setTranslate:a,activeSlideIndex:i,byController:!0};Array.isArray(u.controller.control)?u.controller.control.forEach(q=>{!q.destroyed&&q.params.loop&&q.loopFix({...A,slideTo:q.params.slidesPerView===_.slidesPerView?t:!1})}):u.controller.control instanceof u.constructor&&u.controller.control.params.loop&&u.controller.control.loopFix({...A,slideTo:u.controller.control.params.slidesPerView===_.slidesPerView?t:!1})}u.emit("loopFix")}function Jg(){const e=this,{params:n,slidesEl:t}=e;if(!n.loop||!t||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const s=[];e.slides.forEach(a=>{const i=typeof a.swiperSlideIndex>"u"?a.getAttribute("data-swiper-slide-index")*1:a.swiperSlideIndex;s[i]=a}),e.slides.forEach(a=>{a.removeAttribute("data-swiper-slide-index")}),s.forEach(a=>{t.append(a)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var Zg={loopCreate:Qg,loopFix:Xg,loopDestroy:Jg};function ev(e){const n=this;if(!n.params.simulateTouch||n.params.watchOverflow&&n.isLocked||n.params.cssMode)return;const t=n.params.touchEventsTarget==="container"?n.el:n.wrapperEl;n.isElement&&(n.__preventObserver__=!0),t.style.cursor="move",t.style.cursor=e?"grabbing":"grab",n.isElement&&requestAnimationFrame(()=>{n.__preventObserver__=!1})}function nv(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var tv={setGrabCursor:ev,unsetGrabCursor:nv};function sv(e,n){n===void 0&&(n=this);function t(s){if(!s||s===on()||s===Te())return null;s.assignedSlot&&(s=s.assignedSlot);const a=s.closest(e);return!a&&!s.getRootNode?null:a||t(s.getRootNode().host)}return t(n)}function Cc(e,n,t){const s=Te(),{params:a}=e,i=a.edgeSwipeDetection,r=a.edgeSwipeThreshold;return i&&(t<=r||t>=s.innerWidth-r)?i==="prevent"?(n.preventDefault(),!0):!1:!0}function av(e){const n=this,t=on();let s=e;s.originalEvent&&(s=s.originalEvent);const a=n.touchEventsData;if(s.type==="pointerdown"){if(a.pointerId!==null&&a.pointerId!==s.pointerId)return;a.pointerId=s.pointerId}else s.type==="touchstart"&&s.targetTouches.length===1&&(a.touchId=s.targetTouches[0].identifier);if(s.type==="touchstart"){Cc(n,s,s.targetTouches[0].pageX);return}const{params:i,touches:r,enabled:l}=n;if(!l||!i.simulateTouch&&s.pointerType==="mouse"||n.animating&&i.preventInteractionOnTransition)return;!n.animating&&i.cssMode&&i.loop&&n.loopFix();let c=s.target;if(i.touchEventsTarget==="wrapper"&&!pg(c,n.wrapperEl)||"which"in s&&s.which===3||"button"in s&&s.button>0||a.isTouched&&a.isMoved)return;const u=!!i.noSwipingClass&&i.noSwipingClass!=="",p=s.composedPath?s.composedPath():s.path;u&&s.target&&s.target.shadowRoot&&p&&(c=p[0]);const d=i.noSwipingSelector?i.noSwipingSelector:`.${i.noSwipingClass}`,h=!!(s.target&&s.target.shadowRoot);if(i.noSwiping&&(h?sv(d,c):c.closest(d))){n.allowClick=!0;return}if(i.swipeHandler&&!c.closest(i.swipeHandler))return;r.currentX=s.pageX,r.currentY=s.pageY;const v=r.currentX,_=r.currentY;if(!Cc(n,s,v))return;Object.assign(a,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),r.startX=v,r.startY=_,a.touchStartTime=Va(),n.allowClick=!0,n.updateSize(),n.swipeDirection=void 0,i.threshold>0&&(a.allowThresholdMove=!1);let w=!0;c.matches(a.focusableElements)&&(w=!1,c.nodeName==="SELECT"&&(a.isTouched=!1)),t.activeElement&&t.activeElement.matches(a.focusableElements)&&t.activeElement!==c&&(s.pointerType==="mouse"||s.pointerType!=="mouse"&&!c.matches(a.focusableElements))&&t.activeElement.blur();const N=w&&n.allowTouchMove&&i.touchStartPreventDefault;(i.touchStartForcePreventDefault||N)&&!c.isContentEditable&&s.preventDefault(),i.freeMode&&i.freeMode.enabled&&n.freeMode&&n.animating&&!i.cssMode&&n.freeMode.onTouchStart(),n.emit("touchStart",s)}function iv(e){const n=on(),t=this,s=t.touchEventsData,{params:a,touches:i,rtlTranslate:r,enabled:l}=t;if(!l||!a.simulateTouch&&e.pointerType==="mouse")return;let c=e;if(c.originalEvent&&(c=c.originalEvent),c.type==="pointermove"&&(s.touchId!==null||c.pointerId!==s.pointerId))return;let u;if(c.type==="touchmove"){if(u=[...c.changedTouches].find(x=>x.identifier===s.touchId),!u||u.identifier!==s.touchId)return}else u=c;if(!s.isTouched){s.startMoving&&s.isScrolling&&t.emit("touchMoveOpposite",c);return}const p=u.pageX,d=u.pageY;if(c.preventedByNestedSwiper){i.startX=p,i.startY=d;return}if(!t.allowTouchMove){c.target.matches(s.focusableElements)||(t.allowClick=!1),s.isTouched&&(Object.assign(i,{startX:p,startY:d,currentX:p,currentY:d}),s.touchStartTime=Va());return}if(a.touchReleaseOnEdges&&!a.loop)if(t.isVertical()){if(d<i.startY&&t.translate<=t.maxTranslate()||d>i.startY&&t.translate>=t.minTranslate()){s.isTouched=!1,s.isMoved=!1;return}}else{if(r&&(p>i.startX&&-t.translate<=t.maxTranslate()||p<i.startX&&-t.translate>=t.minTranslate()))return;if(!r&&(p<i.startX&&t.translate<=t.maxTranslate()||p>i.startX&&t.translate>=t.minTranslate()))return}if(n.activeElement&&n.activeElement.matches(s.focusableElements)&&n.activeElement!==c.target&&c.pointerType!=="mouse"&&n.activeElement.blur(),n.activeElement&&c.target===n.activeElement&&c.target.matches(s.focusableElements)){s.isMoved=!0,t.allowClick=!1;return}s.allowTouchCallbacks&&t.emit("touchMove",c),i.previousX=i.currentX,i.previousY=i.currentY,i.currentX=p,i.currentY=d;const h=i.currentX-i.startX,v=i.currentY-i.startY;if(t.params.threshold&&Math.sqrt(h**2+v**2)<t.params.threshold)return;if(typeof s.isScrolling>"u"){let x;t.isHorizontal()&&i.currentY===i.startY||t.isVertical()&&i.currentX===i.startX?s.isScrolling=!1:h*h+v*v>=25&&(x=Math.atan2(Math.abs(v),Math.abs(h))*180/Math.PI,s.isScrolling=t.isHorizontal()?x>a.touchAngle:90-x>a.touchAngle)}if(s.isScrolling&&t.emit("touchMoveOpposite",c),typeof s.startMoving>"u"&&(i.currentX!==i.startX||i.currentY!==i.startY)&&(s.startMoving=!0),s.isScrolling||c.type==="touchmove"&&s.preventTouchMoveFromPointerMove){s.isTouched=!1;return}if(!s.startMoving)return;t.allowClick=!1,!a.cssMode&&c.cancelable&&c.preventDefault(),a.touchMoveStopPropagation&&!a.nested&&c.stopPropagation();let _=t.isHorizontal()?h:v,w=t.isHorizontal()?i.currentX-i.previousX:i.currentY-i.previousY;a.oneWayMovement&&(_=Math.abs(_)*(r?1:-1),w=Math.abs(w)*(r?1:-1)),i.diff=_,_*=a.touchRatio,r&&(_=-_,w=-w);const N=t.touchesDirection;t.swipeDirection=_>0?"prev":"next",t.touchesDirection=w>0?"prev":"next";const m=t.params.loop&&!a.cssMode,f=t.touchesDirection==="next"&&t.allowSlideNext||t.touchesDirection==="prev"&&t.allowSlidePrev;if(!s.isMoved){if(m&&f&&t.loopFix({direction:t.swipeDirection}),s.startTranslate=t.getTranslate(),t.setTransition(0),t.animating){const x=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});t.wrapperEl.dispatchEvent(x)}s.allowMomentumBounce=!1,a.grabCursor&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!0),t.emit("sliderFirstMove",c)}if(new Date().getTime(),a._loopSwapReset!==!1&&s.isMoved&&s.allowThresholdMove&&N!==t.touchesDirection&&m&&f&&Math.abs(_)>=1){Object.assign(i,{startX:p,startY:d,currentX:p,currentY:d,startTranslate:s.currentTranslate}),s.loopSwapReset=!0,s.startTranslate=s.currentTranslate;return}t.emit("sliderMove",c),s.isMoved=!0,s.currentTranslate=_+s.startTranslate;let g=!0,y=a.resistanceRatio;if(a.touchReleaseOnEdges&&(y=0),_>0?(m&&f&&s.allowThresholdMove&&s.currentTranslate>(a.centeredSlides?t.minTranslate()-t.slidesSizesGrid[t.activeIndex+1]-(a.slidesPerView!=="auto"&&t.slides.length-a.slidesPerView>=2?t.slidesSizesGrid[t.activeIndex+1]+t.params.spaceBetween:0)-t.params.spaceBetween:t.minTranslate())&&t.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),s.currentTranslate>t.minTranslate()&&(g=!1,a.resistance&&(s.currentTranslate=t.minTranslate()-1+(-t.minTranslate()+s.startTranslate+_)**y))):_<0&&(m&&f&&s.allowThresholdMove&&s.currentTranslate<(a.centeredSlides?t.maxTranslate()+t.slidesSizesGrid[t.slidesSizesGrid.length-1]+t.params.spaceBetween+(a.slidesPerView!=="auto"&&t.slides.length-a.slidesPerView>=2?t.slidesSizesGrid[t.slidesSizesGrid.length-1]+t.params.spaceBetween:0):t.maxTranslate())&&t.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:t.slides.length-(a.slidesPerView==="auto"?t.slidesPerViewDynamic():Math.ceil(parseFloat(a.slidesPerView,10)))}),s.currentTranslate<t.maxTranslate()&&(g=!1,a.resistance&&(s.currentTranslate=t.maxTranslate()+1-(t.maxTranslate()-s.startTranslate-_)**y))),g&&(c.preventedByNestedSwiper=!0),!t.allowSlideNext&&t.swipeDirection==="next"&&s.currentTranslate<s.startTranslate&&(s.currentTranslate=s.startTranslate),!t.allowSlidePrev&&t.swipeDirection==="prev"&&s.currentTranslate>s.startTranslate&&(s.currentTranslate=s.startTranslate),!t.allowSlidePrev&&!t.allowSlideNext&&(s.currentTranslate=s.startTranslate),a.threshold>0)if(Math.abs(_)>a.threshold||s.allowThresholdMove){if(!s.allowThresholdMove){s.allowThresholdMove=!0,i.startX=i.currentX,i.startY=i.currentY,s.currentTranslate=s.startTranslate,i.diff=t.isHorizontal()?i.currentX-i.startX:i.currentY-i.startY;return}}else{s.currentTranslate=s.startTranslate;return}!a.followFinger||a.cssMode||((a.freeMode&&a.freeMode.enabled&&t.freeMode||a.watchSlidesProgress)&&(t.updateActiveIndex(),t.updateSlidesClasses()),a.freeMode&&a.freeMode.enabled&&t.freeMode&&t.freeMode.onTouchMove(),t.updateProgress(s.currentTranslate),t.setTranslate(s.currentTranslate))}function rv(e){const n=this,t=n.touchEventsData;let s=e;s.originalEvent&&(s=s.originalEvent);let a;if(s.type==="touchend"||s.type==="touchcancel"){if(a=[...s.changedTouches].find(x=>x.identifier===t.touchId),!a||a.identifier!==t.touchId)return}else{if(t.touchId!==null||s.pointerId!==t.pointerId)return;a=s}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(s.type)&&!(["pointercancel","contextmenu"].includes(s.type)&&(n.browser.isSafari||n.browser.isWebView)))return;t.pointerId=null,t.touchId=null;const{params:r,touches:l,rtlTranslate:c,slidesGrid:u,enabled:p}=n;if(!p||!r.simulateTouch&&s.pointerType==="mouse")return;if(t.allowTouchCallbacks&&n.emit("touchEnd",s),t.allowTouchCallbacks=!1,!t.isTouched){t.isMoved&&r.grabCursor&&n.setGrabCursor(!1),t.isMoved=!1,t.startMoving=!1;return}r.grabCursor&&t.isMoved&&t.isTouched&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!1);const d=Va(),h=d-t.touchStartTime;if(n.allowClick){const x=s.path||s.composedPath&&s.composedPath();n.updateClickedSlide(x&&x[0]||s.target,x),n.emit("tap click",s),h<300&&d-t.lastClickTime<300&&n.emit("doubleTap doubleClick",s)}if(t.lastClickTime=Va(),Gr(()=>{n.destroyed||(n.allowClick=!0)}),!t.isTouched||!t.isMoved||!n.swipeDirection||l.diff===0&&!t.loopSwapReset||t.currentTranslate===t.startTranslate&&!t.loopSwapReset){t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;return}t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;let v;if(r.followFinger?v=c?n.translate:-n.translate:v=-t.currentTranslate,r.cssMode)return;if(r.freeMode&&r.freeMode.enabled){n.freeMode.onTouchEnd({currentPos:v});return}const _=v>=-n.maxTranslate()&&!n.params.loop;let w=0,N=n.slidesSizesGrid[0];for(let x=0;x<u.length;x+=x<r.slidesPerGroupSkip?1:r.slidesPerGroup){const j=x<r.slidesPerGroupSkip-1?1:r.slidesPerGroup;typeof u[x+j]<"u"?(_||v>=u[x]&&v<u[x+j])&&(w=x,N=u[x+j]-u[x]):(_||v>=u[x])&&(w=x,N=u[u.length-1]-u[u.length-2])}let m=null,f=null;r.rewind&&(n.isBeginning?f=r.virtual&&r.virtual.enabled&&n.virtual?n.virtual.slides.length-1:n.slides.length-1:n.isEnd&&(m=0));const g=(v-u[w])/N,y=w<r.slidesPerGroupSkip-1?1:r.slidesPerGroup;if(h>r.longSwipesMs){if(!r.longSwipes){n.slideTo(n.activeIndex);return}n.swipeDirection==="next"&&(g>=r.longSwipesRatio?n.slideTo(r.rewind&&n.isEnd?m:w+y):n.slideTo(w)),n.swipeDirection==="prev"&&(g>1-r.longSwipesRatio?n.slideTo(w+y):f!==null&&g<0&&Math.abs(g)>r.longSwipesRatio?n.slideTo(f):n.slideTo(w))}else{if(!r.shortSwipes){n.slideTo(n.activeIndex);return}n.navigation&&(s.target===n.navigation.nextEl||s.target===n.navigation.prevEl)?s.target===n.navigation.nextEl?n.slideTo(w+y):n.slideTo(w):(n.swipeDirection==="next"&&n.slideTo(m!==null?m:w+y),n.swipeDirection==="prev"&&n.slideTo(f!==null?f:w))}}function zc(){const e=this,{params:n,el:t}=e;if(t&&t.offsetWidth===0)return;n.breakpoints&&e.setBreakpoint();const{allowSlideNext:s,allowSlidePrev:a,snapGrid:i}=e,r=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const l=r&&n.loop;(n.slidesPerView==="auto"||n.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!l?e.slideTo(e.slides.length-1,0,!1,!0):e.params.loop&&!r?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=a,e.allowSlideNext=s,e.params.watchOverflow&&i!==e.snapGrid&&e.checkOverflow()}function lv(e){const n=this;n.enabled&&(n.allowClick||(n.params.preventClicks&&e.preventDefault(),n.params.preventClicksPropagation&&n.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function ov(){const e=this,{wrapperEl:n,rtlTranslate:t,enabled:s}=e;if(!s)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-n.scrollLeft:e.translate=-n.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let a;const i=e.maxTranslate()-e.minTranslate();i===0?a=0:a=(e.translate-e.minTranslate())/i,a!==e.progress&&e.updateProgress(t?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function cv(e){const n=this;ca(n,e.target),!(n.params.cssMode||n.params.slidesPerView!=="auto"&&!n.params.autoHeight)&&n.update()}function uv(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const vd=(e,n)=>{const t=on(),{params:s,el:a,wrapperEl:i,device:r}=e,l=!!s.nested,c=n==="on"?"addEventListener":"removeEventListener",u=n;!a||typeof a=="string"||(t[c]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:l}),a[c]("touchstart",e.onTouchStart,{passive:!1}),a[c]("pointerdown",e.onTouchStart,{passive:!1}),t[c]("touchmove",e.onTouchMove,{passive:!1,capture:l}),t[c]("pointermove",e.onTouchMove,{passive:!1,capture:l}),t[c]("touchend",e.onTouchEnd,{passive:!0}),t[c]("pointerup",e.onTouchEnd,{passive:!0}),t[c]("pointercancel",e.onTouchEnd,{passive:!0}),t[c]("touchcancel",e.onTouchEnd,{passive:!0}),t[c]("pointerout",e.onTouchEnd,{passive:!0}),t[c]("pointerleave",e.onTouchEnd,{passive:!0}),t[c]("contextmenu",e.onTouchEnd,{passive:!0}),(s.preventClicks||s.preventClicksPropagation)&&a[c]("click",e.onClick,!0),s.cssMode&&i[c]("scroll",e.onScroll),s.updateOnWindowResize?e[u](r.ios||r.android?"resize orientationchange observerUpdate":"resize observerUpdate",zc,!0):e[u]("observerUpdate",zc,!0),a[c]("load",e.onLoad,{capture:!0}))};function pv(){const e=this,{params:n}=e;e.onTouchStart=av.bind(e),e.onTouchMove=iv.bind(e),e.onTouchEnd=rv.bind(e),e.onDocumentTouchStart=uv.bind(e),n.cssMode&&(e.onScroll=ov.bind(e)),e.onClick=lv.bind(e),e.onLoad=cv.bind(e),vd(e,"on")}function dv(){vd(this,"off")}var hv={attachEvents:pv,detachEvents:dv};const Nc=(e,n)=>e.grid&&n.grid&&n.grid.rows>1;function fv(){const e=this,{realIndex:n,initialized:t,params:s,el:a}=e,i=s.breakpoints;if(!i||i&&Object.keys(i).length===0)return;const r=on(),l=s.breakpointsBase==="window"||!s.breakpointsBase?s.breakpointsBase:"container",c=["window","container"].includes(s.breakpointsBase)||!s.breakpointsBase?e.el:r.querySelector(s.breakpointsBase),u=e.getBreakpoint(i,l,c);if(!u||e.currentBreakpoint===u)return;const d=(u in i?i[u]:void 0)||e.originalParams,h=Nc(e,s),v=Nc(e,d),_=e.params.grabCursor,w=d.grabCursor,N=s.enabled;h&&!v?(a.classList.remove(`${s.containerModifierClass}grid`,`${s.containerModifierClass}grid-column`),e.emitContainerClasses()):!h&&v&&(a.classList.add(`${s.containerModifierClass}grid`),(d.grid.fill&&d.grid.fill==="column"||!d.grid.fill&&s.grid.fill==="column")&&a.classList.add(`${s.containerModifierClass}grid-column`),e.emitContainerClasses()),_&&!w?e.unsetGrabCursor():!_&&w&&e.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(j=>{if(typeof d[j]>"u")return;const S=s[j]&&s[j].enabled,k=d[j]&&d[j].enabled;S&&!k&&e[j].disable(),!S&&k&&e[j].enable()});const m=d.direction&&d.direction!==s.direction,f=s.loop&&(d.slidesPerView!==s.slidesPerView||m),g=s.loop;m&&t&&e.changeDirection(),Le(e.params,d);const y=e.params.enabled,x=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),N&&!y?e.disable():!N&&y&&e.enable(),e.currentBreakpoint=u,e.emit("_beforeBreakpoint",d),t&&(f?(e.loopDestroy(),e.loopCreate(n),e.updateSlides()):!g&&x?(e.loopCreate(n),e.updateSlides()):g&&!x&&e.loopDestroy()),e.emit("breakpoint",d)}function mv(e,n,t){if(n===void 0&&(n="window"),!e||n==="container"&&!t)return;let s=!1;const a=Te(),i=n==="window"?a.innerHeight:t.clientHeight,r=Object.keys(e).map(l=>{if(typeof l=="string"&&l.indexOf("@")===0){const c=parseFloat(l.substr(1));return{value:i*c,point:l}}return{value:l,point:l}});r.sort((l,c)=>parseInt(l.value,10)-parseInt(c.value,10));for(let l=0;l<r.length;l+=1){const{point:c,value:u}=r[l];n==="window"?a.matchMedia(`(min-width: ${u}px)`).matches&&(s=c):u<=t.clientWidth&&(s=c)}return s||"max"}var gv={setBreakpoint:fv,getBreakpoint:mv};function vv(e,n){const t=[];return e.forEach(s=>{typeof s=="object"?Object.keys(s).forEach(a=>{s[a]&&t.push(n+a)}):typeof s=="string"&&t.push(n+s)}),t}function _v(){const e=this,{classNames:n,params:t,rtl:s,el:a,device:i}=e,r=vv(["initialized",t.direction,{"free-mode":e.params.freeMode&&t.freeMode.enabled},{autoheight:t.autoHeight},{rtl:s},{grid:t.grid&&t.grid.rows>1},{"grid-column":t.grid&&t.grid.rows>1&&t.grid.fill==="column"},{android:i.android},{ios:i.ios},{"css-mode":t.cssMode},{centered:t.cssMode&&t.centeredSlides},{"watch-progress":t.watchSlidesProgress}],t.containerModifierClass);n.push(...r),a.classList.add(...n),e.emitContainerClasses()}function wv(){const e=this,{el:n,classNames:t}=e;!n||typeof n=="string"||(n.classList.remove(...t),e.emitContainerClasses())}var yv={addClasses:_v,removeClasses:wv};function xv(){const e=this,{isLocked:n,params:t}=e,{slidesOffsetBefore:s}=t;if(s){const a=e.slides.length-1,i=e.slidesGrid[a]+e.slidesSizesGrid[a]+s*2;e.isLocked=e.size>i}else e.isLocked=e.snapGrid.length===1;t.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),t.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),n&&n!==e.isLocked&&(e.isEnd=!1),n!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var Sv={checkOverflow:xv},Mc={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function kv(e,n){return function(s){s===void 0&&(s={});const a=Object.keys(s)[0],i=s[a];if(typeof i!="object"||i===null){Le(n,s);return}if(e[a]===!0&&(e[a]={enabled:!0}),a==="navigation"&&e[a]&&e[a].enabled&&!e[a].prevEl&&!e[a].nextEl&&(e[a].auto=!0),["pagination","scrollbar"].indexOf(a)>=0&&e[a]&&e[a].enabled&&!e[a].el&&(e[a].auto=!0),!(a in e&&"enabled"in i)){Le(n,s);return}typeof e[a]=="object"&&!("enabled"in e[a])&&(e[a].enabled=!0),e[a]||(e[a]={enabled:!1}),Le(n,s)}}const Ki={eventsEmitter:yg,update:Mg,translate:Ag,transition:Fg,slide:Kg,loop:Zg,grabCursor:tv,events:hv,breakpoints:gv,checkOverflow:Sv,classes:yv},Qi={};class oe{constructor(){let n,t;for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];a.length===1&&a[0].constructor&&Object.prototype.toString.call(a[0]).slice(8,-1)==="Object"?t=a[0]:[n,t]=a,t||(t={}),t=Le({},t),n&&!t.el&&(t.el=n);const r=on();if(t.el&&typeof t.el=="string"&&r.querySelectorAll(t.el).length>1){const p=[];return r.querySelectorAll(t.el).forEach(d=>{const h=Le({},t,{el:d});p.push(new oe(h))}),p}const l=this;l.__swiper__=!0,l.support=hd(),l.device=fd({userAgent:t.userAgent}),l.browser=md(),l.eventsListeners={},l.eventsAnyListeners=[],l.modules=[...l.__modules__],t.modules&&Array.isArray(t.modules)&&l.modules.push(...t.modules);const c={};l.modules.forEach(p=>{p({params:t,swiper:l,extendParams:kv(t,c),on:l.on.bind(l),once:l.once.bind(l),off:l.off.bind(l),emit:l.emit.bind(l)})});const u=Le({},Mc,c);return l.params=Le({},u,Qi,t),l.originalParams=Le({},l.params),l.passedParams=Le({},t),l.params&&l.params.on&&Object.keys(l.params.on).forEach(p=>{l.on(p,l.params.on[p])}),l.params&&l.params.onAny&&l.onAny(l.params.onAny),Object.assign(l,{enabled:l.params.enabled,el:n,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return l.params.direction==="horizontal"},isVertical(){return l.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:l.params.allowSlideNext,allowSlidePrev:l.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:l.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:l.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),l.emit("_swiper"),l.params.init&&l.init(),l}getDirectionLabel(n){return this.isHorizontal()?n:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[n]}getSlideIndex(n){const{slidesEl:t,params:s}=this,a=fn(t,`.${s.slideClass}, swiper-slide`),i=Ec(a[0]);return Ec(n)-i}getSlideIndexByData(n){return this.getSlideIndex(this.slides.find(t=>t.getAttribute("data-swiper-slide-index")*1===n))}recalcSlides(){const n=this,{slidesEl:t,params:s}=n;n.slides=fn(t,`.${s.slideClass}, swiper-slide`)}enable(){const n=this;n.enabled||(n.enabled=!0,n.params.grabCursor&&n.setGrabCursor(),n.emit("enable"))}disable(){const n=this;n.enabled&&(n.enabled=!1,n.params.grabCursor&&n.unsetGrabCursor(),n.emit("disable"))}setProgress(n,t){const s=this;n=Math.min(Math.max(n,0),1);const a=s.minTranslate(),r=(s.maxTranslate()-a)*n+a;s.translateTo(r,typeof t>"u"?0:t),s.updateActiveIndex(),s.updateSlidesClasses()}emitContainerClasses(){const n=this;if(!n.params._emitClasses||!n.el)return;const t=n.el.className.split(" ").filter(s=>s.indexOf("swiper")===0||s.indexOf(n.params.containerModifierClass)===0);n.emit("_containerClasses",t.join(" "))}getSlideClasses(n){const t=this;return t.destroyed?"":n.className.split(" ").filter(s=>s.indexOf("swiper-slide")===0||s.indexOf(t.params.slideClass)===0).join(" ")}emitSlidesClasses(){const n=this;if(!n.params._emitClasses||!n.el)return;const t=[];n.slides.forEach(s=>{const a=n.getSlideClasses(s);t.push({slideEl:s,classNames:a}),n.emit("_slideClass",s,a)}),n.emit("_slideClasses",t)}slidesPerViewDynamic(n,t){n===void 0&&(n="current"),t===void 0&&(t=!1);const s=this,{params:a,slides:i,slidesGrid:r,slidesSizesGrid:l,size:c,activeIndex:u}=s;let p=1;if(typeof a.slidesPerView=="number")return a.slidesPerView;if(a.centeredSlides){let d=i[u]?Math.ceil(i[u].swiperSlideSize):0,h;for(let v=u+1;v<i.length;v+=1)i[v]&&!h&&(d+=Math.ceil(i[v].swiperSlideSize),p+=1,d>c&&(h=!0));for(let v=u-1;v>=0;v-=1)i[v]&&!h&&(d+=i[v].swiperSlideSize,p+=1,d>c&&(h=!0))}else if(n==="current")for(let d=u+1;d<i.length;d+=1)(t?r[d]+l[d]-r[u]<c:r[d]-r[u]<c)&&(p+=1);else for(let d=u-1;d>=0;d-=1)r[u]-r[d]<c&&(p+=1);return p}update(){const n=this;if(!n||n.destroyed)return;const{snapGrid:t,params:s}=n;s.breakpoints&&n.setBreakpoint(),[...n.el.querySelectorAll('[loading="lazy"]')].forEach(r=>{r.complete&&ca(n,r)}),n.updateSize(),n.updateSlides(),n.updateProgress(),n.updateSlidesClasses();function a(){const r=n.rtlTranslate?n.translate*-1:n.translate,l=Math.min(Math.max(r,n.maxTranslate()),n.minTranslate());n.setTranslate(l),n.updateActiveIndex(),n.updateSlidesClasses()}let i;if(s.freeMode&&s.freeMode.enabled&&!s.cssMode)a(),s.autoHeight&&n.updateAutoHeight();else{if((s.slidesPerView==="auto"||s.slidesPerView>1)&&n.isEnd&&!s.centeredSlides){const r=n.virtual&&s.virtual.enabled?n.virtual.slides:n.slides;i=n.slideTo(r.length-1,0,!1,!0)}else i=n.slideTo(n.activeIndex,0,!1,!0);i||a()}s.watchOverflow&&t!==n.snapGrid&&n.checkOverflow(),n.emit("update")}changeDirection(n,t){t===void 0&&(t=!0);const s=this,a=s.params.direction;return n||(n=a==="horizontal"?"vertical":"horizontal"),n===a||n!=="horizontal"&&n!=="vertical"||(s.el.classList.remove(`${s.params.containerModifierClass}${a}`),s.el.classList.add(`${s.params.containerModifierClass}${n}`),s.emitContainerClasses(),s.params.direction=n,s.slides.forEach(i=>{n==="vertical"?i.style.width="":i.style.height=""}),s.emit("changeDirection"),t&&s.update()),s}changeLanguageDirection(n){const t=this;t.rtl&&n==="rtl"||!t.rtl&&n==="ltr"||(t.rtl=n==="rtl",t.rtlTranslate=t.params.direction==="horizontal"&&t.rtl,t.rtl?(t.el.classList.add(`${t.params.containerModifierClass}rtl`),t.el.dir="rtl"):(t.el.classList.remove(`${t.params.containerModifierClass}rtl`),t.el.dir="ltr"),t.update())}mount(n){const t=this;if(t.mounted)return!0;let s=n||t.params.el;if(typeof s=="string"&&(s=document.querySelector(s)),!s)return!1;s.swiper=t,s.parentNode&&s.parentNode.host&&s.parentNode.host.nodeName===t.params.swiperElementNodeName.toUpperCase()&&(t.isElement=!0);const a=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;let r=s&&s.shadowRoot&&s.shadowRoot.querySelector?s.shadowRoot.querySelector(a()):fn(s,a())[0];return!r&&t.params.createElements&&(r=Yr("div",t.params.wrapperClass),s.append(r),fn(s,`.${t.params.slideClass}`).forEach(l=>{r.append(l)})),Object.assign(t,{el:s,wrapperEl:r,slidesEl:t.isElement&&!s.parentNode.host.slideSlots?s.parentNode.host:r,hostEl:t.isElement?s.parentNode.host:s,mounted:!0,rtl:s.dir.toLowerCase()==="rtl"||zn(s,"direction")==="rtl",rtlTranslate:t.params.direction==="horizontal"&&(s.dir.toLowerCase()==="rtl"||zn(s,"direction")==="rtl"),wrongRTL:zn(r,"display")==="-webkit-box"}),!0}init(n){const t=this;if(t.initialized||t.mount(n)===!1)return t;t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.loop&&t.virtual&&t.params.virtual.enabled?t.slideTo(t.params.initialSlide+t.virtual.slidesBefore,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.params.loop&&t.loopCreate(void 0,!0),t.attachEvents();const a=[...t.el.querySelectorAll('[loading="lazy"]')];return t.isElement&&a.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),a.forEach(i=>{i.complete?ca(t,i):i.addEventListener("load",r=>{ca(t,r.target)})}),qr(t),t.initialized=!0,qr(t),t.emit("init"),t.emit("afterInit"),t}destroy(n,t){n===void 0&&(n=!0),t===void 0&&(t=!0);const s=this,{params:a,el:i,wrapperEl:r,slides:l}=s;return typeof s.params>"u"||s.destroyed||(s.emit("beforeDestroy"),s.initialized=!1,s.detachEvents(),a.loop&&s.loopDestroy(),t&&(s.removeClasses(),i&&typeof i!="string"&&i.removeAttribute("style"),r&&r.removeAttribute("style"),l&&l.length&&l.forEach(c=>{c.classList.remove(a.slideVisibleClass,a.slideFullyVisibleClass,a.slideActiveClass,a.slideNextClass,a.slidePrevClass),c.removeAttribute("style"),c.removeAttribute("data-swiper-slide-index")})),s.emit("destroy"),Object.keys(s.eventsListeners).forEach(c=>{s.off(c)}),n!==!1&&(s.el&&typeof s.el!="string"&&(s.el.swiper=null),rg(s)),s.destroyed=!0),null}static extendDefaults(n){Le(Qi,n)}static get extendedDefaults(){return Qi}static get defaults(){return Mc}static installModule(n){oe.prototype.__modules__||(oe.prototype.__modules__=[]);const t=oe.prototype.__modules__;typeof n=="function"&&t.indexOf(n)<0&&t.push(n)}static use(n){return Array.isArray(n)?(n.forEach(t=>oe.installModule(t)),oe):(oe.installModule(n),oe)}}Object.keys(Ki).forEach(e=>{Object.keys(Ki[e]).forEach(n=>{oe.prototype[n]=Ki[e][n]})});oe.use([_g,wg]);function hi(e){let{swiper:n,extendParams:t,on:s,emit:a,params:i}=e;n.autoplay={running:!1,paused:!1,timeLeft:0},t({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let r,l,c=i&&i.autoplay?i.autoplay.delay:3e3,u=i&&i.autoplay?i.autoplay.delay:3e3,p,d=new Date().getTime(),h,v,_,w,N,m,f;function g(b){!n||n.destroyed||!n.wrapperEl||b.target===n.wrapperEl&&(n.wrapperEl.removeEventListener("transitionend",g),!(f||b.detail&&b.detail.bySwiperTouchMove)&&E())}const y=()=>{if(n.destroyed||!n.autoplay.running)return;n.autoplay.paused?h=!0:h&&(u=p,h=!1);const b=n.autoplay.paused?p:d+u-new Date().getTime();n.autoplay.timeLeft=b,a("autoplayTimeLeft",b,b/c),l=requestAnimationFrame(()=>{y()})},x=()=>{let b;return n.virtual&&n.params.virtual.enabled?b=n.slides.find(T=>T.classList.contains("swiper-slide-active")):b=n.slides[n.activeIndex],b?parseInt(b.getAttribute("data-swiper-autoplay"),10):void 0},j=b=>{if(n.destroyed||!n.autoplay.running)return;cancelAnimationFrame(l),y();let C=typeof b>"u"?n.params.autoplay.delay:b;c=n.params.autoplay.delay,u=n.params.autoplay.delay;const T=x();!Number.isNaN(T)&&T>0&&typeof b>"u"&&(C=T,c=T,u=T),p=C;const I=n.params.speed,L=()=>{!n||n.destroyed||(n.params.autoplay.reverseDirection?!n.isBeginning||n.params.loop||n.params.rewind?(n.slidePrev(I,!0,!0),a("autoplay")):n.params.autoplay.stopOnLastSlide||(n.slideTo(n.slides.length-1,I,!0,!0),a("autoplay")):!n.isEnd||n.params.loop||n.params.rewind?(n.slideNext(I,!0,!0),a("autoplay")):n.params.autoplay.stopOnLastSlide||(n.slideTo(0,I,!0,!0),a("autoplay")),n.params.cssMode&&(d=new Date().getTime(),requestAnimationFrame(()=>{j()})))};return C>0?(clearTimeout(r),r=setTimeout(()=>{L()},C)):requestAnimationFrame(()=>{L()}),C},S=()=>{d=new Date().getTime(),n.autoplay.running=!0,j(),a("autoplayStart")},k=()=>{n.autoplay.running=!1,clearTimeout(r),cancelAnimationFrame(l),a("autoplayStop")},H=(b,C)=>{if(n.destroyed||!n.autoplay.running)return;clearTimeout(r),b||(m=!0);const T=()=>{a("autoplayPause"),n.params.autoplay.waitForTransition?n.wrapperEl.addEventListener("transitionend",g):E()};if(n.autoplay.paused=!0,C){N&&(p=n.params.autoplay.delay),N=!1,T();return}p=(p||n.params.autoplay.delay)-(new Date().getTime()-d),!(n.isEnd&&p<0&&!n.params.loop)&&(p<0&&(p=0),T())},E=()=>{n.isEnd&&p<0&&!n.params.loop||n.destroyed||!n.autoplay.running||(d=new Date().getTime(),m?(m=!1,j(p)):j(),n.autoplay.paused=!1,a("autoplayResume"))},M=()=>{if(n.destroyed||!n.autoplay.running)return;const b=on();b.visibilityState==="hidden"&&(m=!0,H(!0)),b.visibilityState==="visible"&&E()},V=b=>{b.pointerType==="mouse"&&(m=!0,f=!0,!(n.animating||n.autoplay.paused)&&H(!0))},R=b=>{b.pointerType==="mouse"&&(f=!1,n.autoplay.paused&&E())},Y=()=>{n.params.autoplay.pauseOnMouseEnter&&(n.el.addEventListener("pointerenter",V),n.el.addEventListener("pointerleave",R))},G=()=>{n.el&&typeof n.el!="string"&&(n.el.removeEventListener("pointerenter",V),n.el.removeEventListener("pointerleave",R))},A=()=>{on().addEventListener("visibilitychange",M)},q=()=>{on().removeEventListener("visibilitychange",M)};s("init",()=>{n.params.autoplay.enabled&&(Y(),A(),S())}),s("destroy",()=>{G(),q(),n.autoplay.running&&k()}),s("_freeModeStaticRelease",()=>{(_||m)&&E()}),s("_freeModeNoMomentumRelease",()=>{n.params.autoplay.disableOnInteraction?k():H(!0,!0)}),s("beforeTransitionStart",(b,C,T)=>{n.destroyed||!n.autoplay.running||(T||!n.params.autoplay.disableOnInteraction?H(!0,!0):k())}),s("sliderFirstMove",()=>{if(!(n.destroyed||!n.autoplay.running)){if(n.params.autoplay.disableOnInteraction){k();return}v=!0,_=!1,m=!1,w=setTimeout(()=>{m=!0,_=!0,H(!0)},200)}}),s("touchEnd",()=>{if(!(n.destroyed||!n.autoplay.running||!v)){if(clearTimeout(w),clearTimeout(r),n.params.autoplay.disableOnInteraction){_=!1,v=!1;return}_&&n.params.cssMode&&E(),_=!1,v=!1}}),s("slideChange",()=>{n.destroyed||!n.autoplay.running||(N=!0)}),Object.assign(n.autoplay,{start:S,stop:k,pause:H,resume:E})}function bv({children:e}){const n=B.useRef(null);return B.useEffect(()=>{if(!n.current)return;const t=n.current.querySelector(".swiper-wrapper"),a=((t==null?void 0:t.querySelectorAll(".swiper-slide"))||[]).length,i=window.innerWidth;let r=!1,l=!1;(a>3||a===3&&i<1440||a===2&&i<768)&&(r=!0,l=!0),oe.use([hi]);const c=new oe(n.current,{loop:r,autoplay:l?{delay:15e3,disableOnInteraction:!0,reverseDirection:!0}:!1,slidesPerView:"auto",spaceBetween:10,pagination:{el:".review-swiper-pagination",clickable:!0},navigation:{nextEl:".review-swiper-button-next",prevEl:".review-swiper-button-prev"},scrollbar:{el:".review-swiper-scrollbar"}}),u=()=>c.update();return window.addEventListener("resize",u),()=>{window.removeEventListener("resize",u),c.destroy(!0,!0)}},[]),o.jsx("div",{className:"swiper review-swiper",ref:n,children:e})}const Ev=({containerRef:e,title:n,slug:t,count:s})=>o.jsxs("div",{ref:e,className:"rss-review",children:[o.jsx("h3",{className:"rss-review__title font-28-48",children:n}),o.jsx("p",{className:"rss-review__slug font-16-18",children:t}),o.jsxs("div",{className:"rss-review__total-container",children:[o.jsx("h6",{className:"font-16-20",children:s}),o.jsxs("div",{className:"rss-review__total-container__arrow-container",children:[o.jsx("div",{className:"rss-review__total-container__arrow-container__arrow rss-review__total-container__arrow-container__arrow-left review-swiper-button-prev swiper-button-prev"}),o.jsx("div",{className:"rss-review__total-container__arrow-container__arrow rss-review__total-container__arrow-container__arrow-right review-swiper-button-next swiper-button-next"})]})]}),o.jsx("div",{className:"rss-review__hr-line"}),o.jsx(bv,{children:o.jsx("div",{className:"swiper-wrapper rss-review__review-items-container",children:sg.map((a,i)=>o.jsxs("div",{className:"swiper-slide rss-review__review-items-container__item",children:[o.jsxs("div",{className:"rss-review__review-items-container__item__header-container",children:[o.jsxs("div",{className:"rss-review__review-items-container__item__header-container__info-container",children:[o.jsx("h6",{className:"rss-review__review-items-container__item__header-container__info-container__title font-16-20",children:a.name}),o.jsx("p",{className:"rss-review__review-items-container__item__header-container__info-container__slug font-14-18",children:a.company})]}),o.jsxs("div",{className:"rss-review__review-items-container__item__header-container__profile-container",children:[o.jsx("div",{className:"rss-review__review-items-container__item__header-container__profile-container__item-container",children:o.jsx("a",{href:a.linkedin,target:"_blank",children:o.jsx("img",{src:"/resume//icons/linkedin-filled-ico.png",alt:"Linkedin Icon",className:"rss-review__review-items-container__item__header-container__profile-container__item-container__item"})})}),o.jsx("div",{className:"rss-review__review-items-container__item__header-container__profile-container__item-container",children:o.jsx("a",{href:a.facebook,target:"_blank",children:o.jsx("img",{src:"/resume//icons/facebook-filled-ico.png",alt:"Facebook Icon",className:"rss-review__review-items-container__item__header-container__profile-container__item-container__item"})})}),o.jsx("div",{className:"rss-review__review-items-container__item__header-container__profile-container__item-container",children:o.jsx("a",{href:a.twiter,target:"_blank",children:o.jsx("img",{src:"/resume//icons/twitter-filled-ico.png",alt:"Twitter Icon",className:"rss-review__review-items-container__item__header-container__profile-container__item-container__item"})})})]})]}),o.jsx("p",{className:"rss-review__review-items-container__item__content font-16-18",children:a.review})]},i))})}),o.jsxs("div",{className:"rss-review__arrows-container",children:[o.jsx("div",{className:"rss-review__arrows-container__arrow rss-review__arrows-container__arrow-left review-swiper-button-prev swiper-button-prev"}),o.jsxs("div",{className:"rss-review__arrows-container__line-container",children:[o.jsx("div",{className:"rss-review__arrows-container__line-container__item"}),o.jsx("div",{className:"rss-review__arrows-container__line-container__item rss-review__arrows-container__line-container__item-active"}),o.jsx("div",{className:"rss-review__arrows-container__line-container__item"})]}),o.jsx("div",{className:"rss-review__arrows-container__arrow rss-review__arrows-container__arrow-right review-swiper-button-next swiper-button-next"})]})]}),jv=({title:e,slug:n,count:t})=>{const s=B.useRef(null);return o.jsx(Ev,{containerRef:s,title:e,slug:n,count:t})};function Tv({children:e}){const n=B.useRef(null);return B.useEffect(()=>{if(!n.current)return;const t=n.current.querySelector(".swiper-wrapper"),a=((t==null?void 0:t.querySelectorAll(".swiper-slide"))||[]).length,i=window.innerWidth;let r=!1,l=!1;(a>3||a===3&&i<1440||a===2&&i<768)&&(r=!0,l=!0),oe.use([hi]);const c=new oe(n.current,{loop:r,slidesPerView:"auto",autoplay:l?{delay:5e3,disableOnInteraction:!0,reverseDirection:!0}:!1,spaceBetween:10,pagination:{el:".works-swiper-pagination",clickable:!0},navigation:{nextEl:".works-swiper-button-next",prevEl:".works-swiper-button-prev"},scrollbar:{el:".works-swiper-scrollbar"}}),u=()=>c.update();return window.addEventListener("resize",u),()=>{window.removeEventListener("resize",u),c.destroy(!0,!0)}},[]),o.jsx("div",{className:"swiper works-swiper",ref:n,children:e})}function _d(e){const n=[...e];for(let t=n.length-1;t>0;t--){const s=Math.floor(Math.random()*(t+1));[n[t],n[s]]=[n[s],n[t]]}return n}function Cv({src:e,onClose:n}){return Kf.createPortal(o.jsx("div",{className:"image-popup-overlay",onClick:n,children:o.jsx("div",{className:"image-popup-container",onClick:t=>t.stopPropagation(),children:o.jsx("img",{src:e,alt:"Expanded"})})}),document.body)}const zv=({containerRef:e,title:n,slug:t,items:s})=>{const a=[...s.flat()],i=B.useMemo(()=>_d(a),[]),r="/resume/",[l,c]=B.useState(null),[u,p]=B.useState({});return o.jsxs("div",{ref:e,className:"rss-works",children:[l&&o.jsx(Cv,{src:l,onClose:()=>c(null)}),o.jsx("h3",{className:"rss-works__title font-28-48",children:n}),o.jsx("p",{className:"rss-works__slug font-14-18",children:t}),o.jsx(Tv,{children:o.jsx("div",{className:"swiper-wrapper rss-works__items-container",children:i.map(d=>{const h=u[d.id]||`${r}/${d.mainImgPath}`;return o.jsxs("div",{className:"swiper-slide rss-works__items-container__item",children:[o.jsx("a",{href:`/resume/#/detail?${d.title.trim().toLowerCase().replace(/\s+/g,"-")}`,children:o.jsx("h4",{className:"rss-works__items-container__item__title font-16-20",children:d.title})}),o.jsxs("div",{className:"rss-works__items-container__item__banner-image-container",children:[o.jsx("img",{className:"rss-works__items-container__item__banner-image-container__image",alt:d.imgAlt,src:h}),o.jsx("div",{className:"rss-works__items-container__item__banner-image-container__expand-container",onClick:()=>c(h),children:o.jsx("div",{className:"rss-works__items-container__item__banner-image-container__expand-container__arrow"})})]}),o.jsx("div",{className:"rss-works__items-container__item__image-list-container",children:d.subImgsPath.map((v,_)=>{const w=`${r}/${v}`,N=h===w;return o.jsx("div",{className:`rss-works__items-container__item__image-list-container__image${N?"":" rss-works__items-container__item__image-list-container__image-inactive"}`,onClick:()=>{p(m=>({...m,[d.id]:w}))},children:o.jsx("img",{src:w,alt:d.imgAlt})},_)})})]},d.id)})})}),o.jsxs("div",{className:"rss-works__arrows-container",children:[o.jsx("div",{className:"rss-works__arrows-container__arrow rss-works__arrows-container__arrow-left works-swiper-button-prev swiper-button-prev"}),o.jsxs("div",{className:"rss-works__arrows-container__line-container",children:[o.jsx("div",{className:"rss-works__arrows-container__line-container__item"}),o.jsx("div",{className:"rss-works__arrows-container__line-container__item rss-works__arrows-container__line-container__item-active"}),o.jsx("div",{className:"rss-works__arrows-container__line-container__item"})]}),o.jsx("div",{className:"rss-works__arrows-container__arrow rss-works__arrows-container__arrow-right works-swiper-button-next swiper-button-next"})]}),o.jsx("div",{className:"rss-works__view-btn",children:o.jsx("a",{href:"/resume/#/projects",children:o.jsx("input",{type:"button",value:"View All"})})})]})},Kr=({title:e,slug:n,items:t})=>{const s=B.useRef(null);return o.jsx(zv,{containerRef:s,title:e,slug:n,items:t})},wd=[{id:"project-001",title:"Swivel Tech",mainImgPath:"images/swivel-tech-image-1.png",subImgsPath:["images/swivel-tech-image-1.png","images/swivel-tech-image-2.png","images/swivel-tech-image-3.png","images/swivel-tech-image-4.png"],imgAlt:"Swivel Tech Image"},{id:"project-002",title:"Offshore Safety",mainImgPath:"images/offshore-safety-image-1.png",subImgsPath:["images/offshore-safety-image-1.png","images/offshore-safety-image-2.png","images/offshore-safety-image-3.png","images/offshore-safety-image-4.png"],imgAlt:"Offshore Safety Image"},{id:"project-003",title:"Swivel Group",mainImgPath:"images/swivel-group-image-1.png",subImgsPath:["images/swivel-group-image-1.png","images/swivel-group-image-2.png","images/swivel-group-image-3.png","images/swivel-group-image-4.png"],imgAlt:"Swivel Group Image"}],yd=[{id:"article-001",title:"Order UK",mainImgPath:"images/order-uk-image-1.png",subImgsPath:["images/order-uk-image-1.png","images/order-uk-image-2.png","images/order-uk-image-3.png","images/order-uk-image-4.png"],imgAlt:"Order UK Image"},{id:"article-002",title:"Fitness Care",mainImgPath:"images/fitness-care-image-1.png",subImgsPath:["images/fitness-care-image-1.png","images/fitness-care-image-2.png","images/fitness-care-image-1.png","images/fitness-care-image-2.png"],imgAlt:"Fitness Care Image"},{id:"article-003",title:"Personal Website",mainImgPath:"images/personal-web-image-1.png",subImgsPath:["images/personal-web-image-1.png","images/personal-web-image-2.png","images/personal-web-image-3.png","images/personal-web-image-4.png"],imgAlt:"Personal Website Image"}];function Nv(){const e=_d([...wd,...yd]);return o.jsxs(o.Fragment,{children:[o.jsx(lt,{}),o.jsx("section",{className:"rss-home",children:o.jsxs("div",{className:"container-fluid",children:[o.jsxs("div",{className:"rss-home__details-section",children:[o.jsx("div",{className:"rss-home__details-section__banner-image"}),o.jsxs("div",{className:"rss-home__details-section__content-container",children:[o.jsx("h4",{className:"rss-home__details-section__content-container__slug font-18-28",children:"Hello There 🤗"}),o.jsx("h2",{className:"rss-home__details-section__content-container__title font-38-58",children:"Nawaz - Full Stack Dev Here"}),o.jsx("p",{className:"rss-home__details-section__content-container__content font-14-18",children:"A dedicated full-stack developer experienced in building robust and user-friendly web solutions. My expertise spans from crafting engaging user interfaces to developing powerful server-side logic and managing databases and deployments. Browse my portfolio to see what I can do"}),o.jsxs("div",{className:"rss-home__details-section__content-container__contact-container",children:[o.jsx("div",{className:"rss-home__details-section__content-container__contact-container__btn",children:o.jsxs("a",{href:"/resume/#/contact#form",children:[o.jsx("span",{className:"glyphicon glyphicon-earphone"}),o.jsx("p",{className:"font-14-18",children:"Let's Connect"})]})}),o.jsx("a",{href:"/resume/#/projects",className:"rss-home__details-section__content-container__contact-container__link font-14-18",children:"View Portfolio"})]}),o.jsxs("div",{className:"rss-home__details-section__content-container__status-container",children:[o.jsxs("div",{className:"rss-home__details-section__content-container__status-container__item-container rss-home__details-section__content-container__status-container__item-container-full",children:[o.jsxs("h6",{className:"rss-home__details-section__content-container__status-container__item-container__count",children:["25",o.jsx("span",{className:"rss-home__details-section__content-container__status-container__item-container__count-sy",children:"+"})]}),o.jsx("p",{className:"rss-home__details-section__content-container__status-container__item-container__text font-14-18",children:"Completed Projects"})]}),o.jsxs("div",{className:"rss-home__details-section__content-container__status-container__item-container",children:[o.jsxs("h6",{className:"rss-home__details-section__content-container__status-container__item-container__count",children:["10",o.jsx("span",{className:"rss-home__details-section__content-container__status-container__item-container__count-sy",children:"+"})]}),o.jsx("p",{className:"rss-home__details-section__content-container__status-container__item-container__text font-14-18",children:"Happy Customers"})]}),o.jsxs("div",{className:"rss-home__details-section__content-container__status-container__item-container",children:[o.jsxs("h6",{className:"rss-home__details-section__content-container__status-container__item-container__count",children:["04",o.jsx("span",{className:"rss-home__details-section__content-container__status-container__item-container__count-sy",children:"+"})]}),o.jsx("p",{className:"rss-home__details-section__content-container__status-container__item-container__text font-14-18",children:"Years of Experience"})]})]})]})]}),o.jsxs("div",{className:"rss-home__skills-section",children:[o.jsxs("div",{className:"rss-home__skills-section__heading-container",children:[o.jsx("h3",{className:"rss-home__skills-section__heading-container__title font-28-48",children:"Technical Skills"}),o.jsx("p",{className:"rss-home__skills-section__heading-container__slug font-14-18",children:"As a web developer, I bring a comprehensive skillset encompassing front-end and back-end development, database management, and deployment strategies to build impactful web applications"})]}),o.jsxs("div",{className:"rss-home__skills-section__list-container",children:[o.jsxs("div",{className:"rss-home__skills-section__list-container__item",children:[o.jsx("div",{className:"rss-home__skills-section__list-container__item__icon-container",children:o.jsx("img",{src:"/resume//icons/web-design-ico.png",alt:"web-design"})}),o.jsx("h5",{className:"rss-home__skills-section__list-container__item__title font-18-24",children:"Client-Side Expertise"}),o.jsx("p",{className:"rss-home__skills-section__list-container__item__slug font-14-18",children:"Proficient in building interactive and responsive user interfaces using modern JavaScript frameworks like React, along with core web technologies such as HTML, CSS, and TypeScript. Experienced in state management, component-based architecture, and UI/UX best practices (leveraging Figma for design understanding)"})]}),o.jsxs("div",{className:"rss-home__skills-section__list-container__item",children:[o.jsx("div",{className:"rss-home__skills-section__list-container__item__icon-container",children:o.jsx("img",{src:"/resume//icons/ui-design-ico.png",alt:"ui-design"})}),o.jsx("h5",{className:"rss-home__skills-section__list-container__item__title font-18-24",children:"Server-Side Expertise"}),o.jsx("p",{className:"rss-home__skills-section__list-container__item__slug font-14-18",children:"Experienced in developing robust and scalable server-side applications using Java (Spring Boot), Node.js, and PHP. Proficient in designing and developing RESTful APIs and integrating with third-party services. Focused on creating efficient, secure, and well-documented back-end solutions to power web applications"})]}),o.jsxs("div",{className:"rss-home__skills-section__list-container__item",children:[o.jsx("div",{className:"rss-home__skills-section__list-container__item__icon-container",children:o.jsx("img",{src:"/resume//icons/ux-design-ico.png",alt:"ux-design"})}),o.jsx("h5",{className:"rss-home__skills-section__list-container__item__title font-18-24",children:"Database Management"}),o.jsx("p",{className:"rss-home__skills-section__list-container__item__slug font-14-18",children:"Skilled in designing, implementing, and managing relational (MySQL, PostgreSQL) and NoSQL (MongoDB) databases. Experienced in data modeling, query optimization, and ensuring data integrity"})]}),o.jsxs("div",{className:"rss-home__skills-section__list-container__item",children:[o.jsx("div",{className:"rss-home__skills-section__list-container__item__icon-container",children:o.jsx("img",{src:"/resume//icons/responsive-design-ico.png",alt:"responsive-design"})}),o.jsx("h5",{className:"rss-home__skills-section__list-container__item__title font-18-24",children:"Cloud & DevOps"}),o.jsx("p",{className:"rss-home__skills-section__list-container__item__slug font-14-18",children:"Experienced in deploying web applications to various environments, including cloud platforms like AWS. Familiar with setting up and managing CI/CD pipelines using tools such as Jenkins, GitHub Actions, or Bitbucket Pipelines for automated building, testing, and deployment and containerizations using Docker"})]}),o.jsxs("div",{className:"rss-home__skills-section__list-container__item",children:[o.jsx("div",{className:"rss-home__skills-section__list-container__item__icon-container",children:o.jsx("img",{src:"/resume//icons/wireframing-ico.png",alt:"wireframing"})}),o.jsx("h5",{className:"rss-home__skills-section__list-container__item__title font-18-24",children:"Quality Assurance"}),o.jsx("p",{className:"rss-home__skills-section__list-container__item__slug font-14-18",children:"Committed to delivering high-quality software through thorough testing and quality analysis. Experienced with tools like SonarQube for code quality checks and various testing methodologies"})]}),o.jsxs("div",{className:"rss-home__skills-section__list-container__item",children:[o.jsx("div",{className:"rss-home__skills-section__list-container__item__icon-container",children:o.jsx("img",{src:"/resume//icons/optimization-ico.png",alt:"optimization"})}),o.jsx("h5",{className:"rss-home__skills-section__list-container__item__title font-18-24",children:"Version Control & Collaboration"}),o.jsx("p",{className:"rss-home__skills-section__list-container__item__slug font-14-18",children:"Experienced in using Git for version control and collaborating effectively with teams through platforms like GitHub and Bitbucket. Familiar with branching strategies, pull requests, and code reviews to ensure code quality and efficient teamwork"})]})]})]}),o.jsxs("div",{className:"rss-home__benefits-section",children:[o.jsxs("div",{className:"rss-home__benefits-section__heading-container",children:[o.jsx("h3",{className:"rss-home__benefits-section__heading-container__title font-28-48",children:"Why Choose Me?"}),o.jsx("p",{className:"rss-home__benefits-section__heading-container__slug font-14-18",children:"By choosing my services, you'll enjoy the following benefits"})]}),o.jsxs("div",{className:"rss-home__benefits-section__list-container",children:[o.jsxs("div",{className:"rss-home__benefits-section__list-container__item",children:[o.jsx("h5",{className:"rss-home__benefits-section__list-container__item__title font-18-24",children:"Scalable and Robust Solutions"}),o.jsx("p",{className:"rss-home__benefits-section__list-container__item__slug font-14-18",children:"I understand the importance of building applications that can grow with your needs. I focus on creating scalable architectures and robust back-end systems that are tailored to your specific business requirements and long-term goals"})]}),o.jsxs("div",{className:"rss-home__benefits-section__list-container__item",children:[o.jsx("h5",{className:"rss-home__benefits-section__list-container__item__title font-18-24",children:"High-Performance and Efficient Solutions"}),o.jsx("p",{className:"rss-home__benefits-section__list-container__item__slug font-14-18",children:"With a strong focus on writing clean, efficient, and well-documented code, I ensure optimal performance and maintainability of your web applications. This leads to faster loading times, improved user experience, and easier future updates and enhancements"})]}),o.jsxs("div",{className:"rss-home__benefits-section__list-container__item",children:[o.jsx("h5",{className:"rss-home__benefits-section__list-container__item__title font-18-24",children:"Intuitive and Engaging Applications"}),o.jsx("p",{className:"rss-home__benefits-section__list-container__item__slug font-14-18",children:"I prioritize the end-user experience by building intuitive and functional web applications. By focusing on clear navigation, efficient workflows, and responsive design, I ensure your users have a seamless and engaging interaction with your platform"})]}),o.jsxs("div",{className:"rss-home__benefits-section__list-container__item",children:[o.jsx("h5",{className:"rss-home__benefits-section__list-container__item__title font-18-24",children:"Accessible Across Devices"}),o.jsx("p",{className:"rss-home__benefits-section__list-container__item__slug font-14-18",children:"In today's multi-device landscape, ensuring your web application works flawlessly across all screen sizes and devices is crucial. I specialize in building responsive and adaptive applications that provide a consistent and optimal experience for all users, whether they are on desktop, tablet, or mobile"})]}),o.jsxs("div",{className:"rss-home__benefits-section__list-container__item",children:[o.jsx("h5",{className:"rss-home__benefits-section__list-container__item__title font-18-24",children:"Skills & Technologies"}),o.jsx("p",{className:"rss-home__benefits-section__list-container__item__slug font-14-18",children:"I possess a strong command of core web technologies including JavaScript, TypeScript, HTML, and CSS, and expertise in modern front-end frameworks like React. My skills extend to back-end development using Java (Spring Boot), Node.js, and PHP, along with database management (MySQL, PostgreSQL, MongoDB) and cloud technologies (AWS). I focus on building scalable, efficient, and high-performing web applications"})]})]})]}),o.jsx(Kr,{title:"Featured Works",slug:"Here's are some of my featured works",items:[e]}),o.jsx(jv,{title:"Recommendations",slug:"Here's what some of my satisfied clients have to say about my work",count:"3 Total Reviews"}),o.jsx(ud,{title:"Frequently Asked Questions",slug:"Here are answers to some common questions",containerHelpBtnValue:"Contact Me",containerHelpIconPath:"icons/star-ico.png",containerHelpIconAlt:"Star Icon",containerHelpTextTitle:"Let's Discuss Your Project",containerHelpTextSlug:"Have a web development project in mind? I'm eager to learn more and discuss how my skills can contribute to your success. Reach out to start the conversation!"})]})}),o.jsx(ot,{})]})}function Mv(){return o.jsx(eg,{component:Nv})}const Pv=({containerRef:e,children:n,iconPath:t,iconAlt:s,contentTitle:a,contentSlug:i})=>o.jsxs("div",{ref:e,className:"rss-banner",children:[o.jsx("img",{src:`/resume//${t}`,alt:s,className:"rss-banner__ico"}),o.jsxs("div",{className:"rss-banner__content",children:[o.jsx("h2",{className:"rss-banner__content__title font-28-48",children:a}),o.jsx("p",{className:"rss-banner__content__slug font-14-20",children:i})]}),n]}),xd=({children:e,iconPath:n,iconAlt:t,contentTitle:s,contentSlug:a})=>{const i=B.useRef(null);return o.jsx(Pv,{containerRef:i,iconPath:n,iconAlt:t,contentTitle:s,contentSlug:a,children:e})},Iv=(e,n,t)=>{const s=()=>{const a=e.current;if(!a)return;const i=Array.from(a.children);let r=[],l=null,c=[];i.forEach(u=>u.style.width=""),i.forEach(u=>{const p=u.offsetTop;p!==l?(c.length>0&&r.push(c),c=[u],l=p):c.push(u)}),c.length>0&&r.push(c),r.forEach(u=>{const p=a.clientWidth,d=t*(u.length-1),h=(p-d)/u.length;u.forEach(v=>{v.style.width=`${h}px`})})};B.useEffect(()=>(s(),window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)),[n])},Lv=({children:e,containerRef:n,gap:t,className:s=""})=>o.jsx("div",{ref:n,className:s,style:{display:"flex",flexWrap:"wrap",gap:`${t}px`},children:e}),Sd=({children:e,gap:n=14,className:t=""})=>{const s=B.useRef(null);return Iv(s,e,n),o.jsx(Lv,{containerRef:s,className:t,children:e})},Hv=[{icon:"/resume//icons/clock-ico.png",alt:"Icon",text:"24/7 Assistance"},{icon:"/resume//icons/lightning-ico.png",alt:"Icon",text:"Quick Change Resolutions"},{icon:"/resume//icons/stars-ico.png",alt:"Icon",text:"Flexible Working Hours"}];function Vv(){return o.jsxs(o.Fragment,{children:[o.jsx(lt,{}),o.jsx("section",{className:"rss-contact",children:o.jsxs("div",{className:"container-fluid",children:[o.jsx(xd,{iconPath:"icons/chat-ico.png",iconAlt:"Chat Icon",contentTitle:"We'd love to here from you",contentSlug:"Reach out — I’m excited to hear what you’re working on",children:o.jsx(Sd,{className:"rss-banner__list-container",gap:14,children:Hv.map((e,n)=>o.jsxs("div",{className:"rss-banner__list-container__item",children:[o.jsx("img",{src:e.icon,alt:e.alt,className:"rss-banner__list-container__item__ico"}),o.jsx("p",{className:"rss-banner__list-container__item__content font-14-18",children:e.text})]},n))})}),o.jsxs("div",{className:"rss-contact__form-container",children:[o.jsxs("div",{className:"rss-contact__form-container__form",id:"form",children:[o.jsx("input",{type:"text",className:"rss-contact__form-container__form__input font-14-18",placeholder:"First Name"}),o.jsx("input",{type:"text",className:"rss-contact__form-container__form__input font-14-18",placeholder:"Last Name"}),o.jsx("input",{type:"email",className:"rss-contact__form-container__form__input font-14-18",placeholder:"Email"}),o.jsx("input",{type:"tel",className:"rss-contact__form-container__form__input font-14-18",placeholder:"Phone Number"}),o.jsxs("div",{className:"rss-contact__form-container__form__checkbox-container",children:[o.jsx("h4",{className:"rss-contact__form-container__form__checkbox-container__title font-16-18",children:"Why are you contacting us?"}),o.jsxs("label",{htmlFor:"web-design",className:"rss-contact__form-container__form__checkbox-container__item",children:[o.jsx("input",{type:"checkbox",className:"rss-contact__form-container__form__checkbox-container__item-input",id:"web-design",name:"Web Design"}),o.jsx("span",{className:"rss-contact__form-container__form__checkbox-container__item-label font-14-18",children:"Web Design"})]}),o.jsxs("label",{htmlFor:"collab",className:"rss-contact__form-container__form__checkbox-container__item",children:[o.jsx("input",{type:"checkbox",className:"rss-contact__form-container__form__checkbox-container__item-input",id:"collab",name:"Collaboration"}),o.jsx("span",{className:"rss-contact__form-container__form__checkbox-container__item-label font-14-18",children:"Collaboration"})]}),o.jsxs("label",{htmlFor:"mobile-design",className:"rss-contact__form-container__form__checkbox-container__item",children:[o.jsx("input",{type:"checkbox",className:"rss-contact__form-container__form__checkbox-container__item-input",id:"mobile-design",name:"Mobile App Design"}),o.jsx("span",{className:"rss-contact__form-container__form__checkbox-container__item-label font-14-18",children:"Mobile App Design"})]}),o.jsxs("label",{htmlFor:"other",className:"rss-contact__form-container__form__checkbox-container__item",children:[o.jsx("input",{type:"checkbox",className:"rss-contact__form-container__form__checkbox-container__item-input",id:"other",name:"Others"}),o.jsx("span",{className:"rss-contact__form-container__form__checkbox-container__item-label font-14-18",children:"Others"})]})]}),o.jsx("textarea",{name:"message",className:"rss-contact__form-container__form__text-area font-14-18",placeholder:"Your Message here..."}),o.jsx("input",{type:"button",value:"Send",className:"rss-contact__form-container__form__submit-btn font-14-18"})]}),o.jsxs("div",{className:"rss-contact__form-container__content-container",children:[o.jsxs("div",{className:"rss-contact__form-container__content-container__contents",children:[o.jsxs("div",{className:"rss-contact__form-container__content-container__contents__item",children:[o.jsxs("div",{className:"rss-contact__form-container__content-container__contents__item__text-container",children:[o.jsx("h5",{className:"rss-contact__form-container__content-container__contents__item__text-container__title font-14-18",children:"You can Email Me Here"}),o.jsx("p",{className:"rss-contact__form-container__content-container__contents__item__text-container__slug font-16-20",children:"mgmnawas@gmail.com"})]}),o.jsx("div",{className:"rss-contact__form-container__content-container__contents__item__arrow-container",children:o.jsx("img",{src:"/resume//icons/arrow-ico.png",alt:"Arrow Icon",className:"rss-contact__form-container__content-container__contents__item__arrow-container__arrow"})})]}),o.jsxs("div",{className:"rss-contact__form-container__content-container__contents__item",children:[o.jsxs("div",{className:"rss-contact__form-container__content-container__contents__item__text-container",children:[o.jsx("h5",{className:"rss-contact__form-container__content-container__contents__item__text-container__title font-14-18",children:"Give Me a Call on"}),o.jsx("p",{className:"rss-contact__form-container__content-container__contents__item__text-container__slug font-16-20",children:"+94 77 455 2663"})]}),o.jsx("div",{className:"rss-contact__form-container__content-container__contents__item__arrow-container",children:o.jsx("img",{src:"/resume//icons/arrow-ico.png",alt:"Arrow Icon",className:"rss-contact__form-container__content-container__contents__item__arrow-container__arrow"})})]}),o.jsxs("div",{className:"rss-contact__form-container__content-container__contents__item",children:[o.jsxs("div",{className:"rss-contact__form-container__content-container__contents__item__text-container",children:[o.jsx("h5",{className:"rss-contact__form-container__content-container__contents__item__text-container__title font-14-18",children:"Location"}),o.jsx("p",{className:"rss-contact__form-container__content-container__contents__item__text-container__slug font-16-20",children:"Colombo, Sri Lanka"})]}),o.jsx("div",{className:"rss-contact__form-container__content-container__contents__item__arrow-container",children:o.jsx("img",{src:"/resume//icons/arrow-ico.png",alt:"Arrow Icon",className:"rss-contact__form-container__content-container__contents__item__arrow-container__arrow"})})]})]}),o.jsxs("div",{className:"rss-contact__form-container__content-container__profiles",children:[o.jsx("h5",{className:"rss-contact__form-container__content-container__profiles__title font-16-20",children:"My Social Profiles"}),o.jsxs("div",{className:"rss-contact__form-container__content-container__profiles__icons-container",children:[o.jsx("div",{className:"rss-contact__form-container__content-container__profiles__icons-container__item",children:o.jsx("a",{href:"https://www.linkedin.com/in/mohamed-nawaz/",target:"_blank",children:o.jsx("img",{src:"/resume//icons/linkedin-ico.png",alt:"Linkedin Icon",className:"rss-contact__form-container__content-container__profiles__icons-container__item__img"})})}),o.jsx("div",{className:"rss-contact__form-container__content-container__profiles__icons-container__item",children:o.jsx("a",{href:"https://www.twitter.com/",target:"_blank",children:o.jsx("img",{src:"/resume//icons/twitter-ico.png",alt:"Twitter Icon",className:"rss-contact__form-container__content-container__profiles__icons-container__item__img"})})}),o.jsx("div",{className:"rss-contact__form-container__content-container__profiles__icons-container__item",children:o.jsx("a",{href:"https://github.com/mohamed-nawas/",target:"_blank",children:o.jsx("img",{src:"/resume//icons/web-ico.png",alt:"Web Icon",className:"rss-contact__form-container__content-container__profiles__icons-container__item__img"})})})]})]})]})]}),o.jsx(ud,{title:"Frequently Asked Questions",slug:"Here are answers to some common questions",containerHelpIconPath:"icons/star-ico.png",containerHelpIconAlt:"Star Icon",containerHelpTextTitle:"Still have any Questions ?",containerHelpTextSlug:"Let's collaborate to create an exceptional website that sets you apart from the competition. Contact me today to discuss your web design needs and bring your digital vision to life!",containerHelpBtnValue:"Contact Me"})]})}),o.jsx(ot,{})]})}function Av(){return o.jsxs(o.Fragment,{children:[o.jsx(lt,{}),o.jsx("section",{className:"rss-about",children:o.jsxs("div",{className:"container-fluid",children:[o.jsxs("div",{className:"rss-about__details-section",children:[o.jsx("div",{className:"rss-about__details-section__banner-image"}),o.jsxs("div",{className:"rss-about__details-section__content-container",children:[o.jsx("h4",{className:"rss-about__details-section__content-container__slug font-14-24",children:"Crafting Robust and Scalable Web Solutions"}),o.jsx("h2",{className:"rss-about__details-section__content-container__title font-38-58",children:"Mohamed Nawaz"}),o.jsx("p",{className:"rss-about__details-section__content-container__content font-14-18",children:"A versatile web developer passionate about building efficient, scalable, and high-quality web applications. With a strong foundation in both front-end and back-end technologies, I am committed to delivering robust solutions tailored to meet specific needs. I thrive on solving complex challenges and collaborating effectively to bring digital visions to life"}),o.jsxs("div",{className:"rss-about__details-section__content-container__status-container",children:[o.jsxs("div",{className:"rss-about__details-section__content-container__status-container__item-container",children:[o.jsxs("h6",{className:"rss-about__details-section__content-container__status-container__item-container__count",children:["25",o.jsx("span",{className:"rss-about__details-section__content-container__status-container__item-container__count-sy",children:"+"})]}),o.jsx("p",{className:"rss-about__details-section__content-container__status-container__item-container__text font-14-18",children:"Completed Projects"})]}),o.jsx("div",{className:"rss-about__details-section__content-container__status-container__hr-line"}),o.jsxs("div",{className:"rss-about__details-section__content-container__status-container__item-container",children:[o.jsxs("h6",{className:"rss-about__details-section__content-container__status-container__item-container__count",children:["10",o.jsx("span",{className:"rss-about__details-section__content-container__status-container__item-container__count-sy",children:"+"})]}),o.jsx("p",{className:"rss-about__details-section__content-container__status-container__item-container__text font-14-18",children:"Happy Customers"})]}),o.jsx("div",{className:"rss-about__details-section__content-container__status-container__hr-line"}),o.jsxs("div",{className:"rss-about__details-section__content-container__status-container__item-container",children:[o.jsxs("h6",{className:"rss-about__details-section__content-container__status-container__item-container__count",children:["04",o.jsx("span",{className:"rss-about__details-section__content-container__status-container__item-container__count-sy",children:"+"})]}),o.jsx("p",{className:"rss-about__details-section__content-container__status-container__item-container__text font-14-18",children:"Years of Experience"})]})]})]})]}),o.jsxs("div",{className:"rss-about__timeline-section",children:[o.jsxs("div",{className:"rss-about__timeline-section__heading-container",children:[o.jsx("h2",{className:"rss-about__timeline-section__heading-container__title font-28-48",children:"Key Milestones"}),o.jsx("p",{className:"rss-about__timeline-section__heading-container__content font-14-18",children:"The journey to becoming a well-rounded developer has been marked by continuous learning and diverse experiences. Here are some key milestones that have shaped my skills and expertise"})]}),o.jsxs("div",{className:"rss-about__timeline-section__content-container",children:[o.jsx("p",{className:"rss-about__timeline-section__content-container__time font-16-20",children:"Now"}),o.jsx("div",{className:"rss-about__timeline-section__content-container__line"}),o.jsx("h6",{className:"rss-about__timeline-section__content-container__title rss-about__timeline-section__content-container__title-1 font-16-20",children:"Continued Growth and Specialization"}),o.jsx("div",{className:"rss-about__timeline-section__content-container__line-styled"}),o.jsxs("div",{className:"rss-about__timeline-section__content-container__details-container-right rss-about__timeline-section__content-container__details-container-right-1",children:[o.jsxs("p",{className:"rss-about__timeline-section__content-container__details-container__content font-14-18",children:["Continuing on my path of growth and exploration, I've expanded my skill set by delving into cloud technologies (AWS), advanced front-end frameworks (TypeScript). I'm focused on building scalable microservices, performant single-page applications and expanding my knowledge in the area of ",o.jsx("span",{className:"rss-about__timeline-section__content-container__details-container__content-strong",children:"Software Engineering"})]}),o.jsx("img",{src:"/resume//icons/timeline_purple-ico.png",alt:"Timeline Purple",className:"rss-about__timeline-section__content-container__details-container__ico"})]}),o.jsx("div",{className:"rss-about__timeline-section__content-container__line rss-about__timeline-section__content-container__line-green"}),o.jsx("p",{className:"rss-about__timeline-section__content-container__time font-16-20",children:"2024"}),o.jsx("div",{className:"rss-about__timeline-section__content-container__line rss-about__timeline-section__content-container__line-green"}),o.jsx("h6",{className:"rss-about__timeline-section__content-container__title rss-about__timeline-section__content-container__title-2 font-16-20",children:"Maytech Technologies Pvt Ltd"}),o.jsx("div",{className:"rss-about__timeline-section__content-container__line-styled rss-about__timeline-section__content-container__line-styled-green"}),o.jsxs("div",{className:"rss-about__timeline-section__content-container__details-container-left rss-about__timeline-section__content-container__details-container-left-1",children:[o.jsxs("p",{className:"rss-about__timeline-section__content-container__details-container__content font-14-18",children:["At ",o.jsx("span",{className:"rss-about__timeline-section__content-container__details-container__content-strong",children:"Maytech"}),", I was involved in building and maintaing front-end and CMS based web applications with React for their clients while also gaining experience on handling projects fully from planning to delivery"]}),o.jsx("img",{src:"/resume//icons/timeline_green-ico.png",alt:"Timeline Green",className:"rss-about__timeline-section__content-container__details-container__ico"})]}),o.jsx("div",{className:"rss-about__timeline-section__content-container__line rss-about__timeline-section__content-container__line-yellow"}),o.jsx("p",{className:"rss-about__timeline-section__content-container__time font-16-20",children:"2022"}),o.jsx("div",{className:"rss-about__timeline-section__content-container__line rss-about__timeline-section__content-container__line-yellow"}),o.jsx("h6",{className:"rss-about__timeline-section__content-container__title rss-about__timeline-section__content-container__title-3 font-16-20",children:"Swivel Tech Pvt Ltd"}),o.jsx("div",{className:"rss-about__timeline-section__content-container__line-styled rss-about__timeline-section__content-container__line-styled-yellow"}),o.jsxs("div",{className:"rss-about__timeline-section__content-container__details-container-right rss-about__timeline-section__content-container__details-container-right-2",children:[o.jsxs("p",{className:"rss-about__timeline-section__content-container__details-container__content font-14-18",children:["During my time at ",o.jsx("span",{className:"rss-about__timeline-section__content-container__details-container__content-strong",children:"Swivel Tech"}),", I focused on building Restful APIs using Java and Spring Boot with microservice architectures, was able to gain hands on experience on industry best practices, tools and processes to building robust and scalable applications"]}),o.jsx("img",{src:"/resume//icons/timeline_yellow-ico.png",alt:"Timeline Yellow",className:"rss-about__timeline-section__content-container__details-container__ico"})]}),o.jsx("div",{className:"rss-about__timeline-section__content-container__line rss-about__timeline-section__content-container__line-orange"}),o.jsx("p",{className:"rss-about__timeline-section__content-container__time font-16-20",children:"2022"}),o.jsx("div",{className:"rss-about__timeline-section__content-container__line rss-about__timeline-section__content-container__line-orange"}),o.jsx("h6",{className:"rss-about__timeline-section__content-container__title rss-about__timeline-section__content-container__title-4 font-16-20",children:"Graduation"}),o.jsx("div",{className:"rss-about__timeline-section__content-container__line-styled rss-about__timeline-section__content-container__line-styled-orange"}),o.jsxs("div",{className:"rss-about__timeline-section__content-container__details-container-left rss-about__timeline-section__content-container__details-container-left-2",children:[o.jsxs("p",{className:"rss-about__timeline-section__content-container__details-container__content font-14-18",children:["Graduated in ",o.jsx("span",{className:"rss-about__timeline-section__content-container__details-container__content-strong",children:"Information and Communication Engineering"})," from ",o.jsx("span",{className:"rss-about__timeline-section__content-container__details-container__content-strong",children:"SLTC Research University"}),", This academic foundation provided me with a strong understanding of skills like determination, persistence, data structures and algorithms, etc"]}),o.jsx("img",{src:"/resume//icons/timeline_orange-ico.png",alt:"Timeline Orange",className:"rss-about__timeline-section__content-container__details-container__ico"})]}),o.jsx("div",{className:"rss-about__timeline-section__content-container__line rss-about__timeline-section__content-container__line-pink"}),o.jsx("p",{className:"rss-about__timeline-section__content-container__time font-16-20",children:"2017"}),o.jsx("div",{className:"rss-about__timeline-section__content-container__line rss-about__timeline-section__content-container__line-pink"}),o.jsx("h6",{className:"rss-about__timeline-section__content-container__title rss-about__timeline-section__content-container__title-5 font-16-20",children:"Freelancing"}),o.jsx("div",{className:"rss-about__timeline-section__content-container__line-styled rss-about__timeline-section__content-container__line-styled-pink"}),o.jsxs("div",{className:"rss-about__timeline-section__content-container__details-container-right rss-about__timeline-section__content-container__details-container-right-3",children:[o.jsxs("p",{className:"rss-about__timeline-section__content-container__details-container__content font-14-18",children:["As a freelanceer, I undertook various projects involving graphic design, data entry, digital marketing, social media handling, as well as some small development tasks, These experiences honed my skills in these areas as well as things like client communication, project management, and independent problem solving",o.jsx("span",{className:"rss-about__timeline-section__content-container__details-container__content-strong"})]}),o.jsx("img",{src:"/resume//icons/timeline_pink-ico.png",alt:"Timeline Pink",className:"rss-about__timeline-section__content-container__details-container__ico"})]}),o.jsx("div",{className:"rss-about__timeline-section__content-container__line rss-about__timeline-section__content-container__line-blue"}),o.jsx("p",{className:"rss-about__timeline-section__content-container__time font-16-20",children:"2016"}),o.jsx("div",{className:"rss-about__timeline-section__content-container__line rss-about__timeline-section__content-container__line-blue"}),o.jsx("h6",{className:"rss-about__timeline-section__content-container__title rss-about__timeline-section__content-container__title-last font-16-20",children:"Foundations"}),o.jsx("div",{className:"rss-about__timeline-section__content-container__line-styled rss-about__timeline-section__content-container__line-styled-blue"}),o.jsxs("div",{className:"rss-about__timeline-section__content-container__details-container-top",children:[o.jsxs("div",{children:[o.jsx("h6",{className:"rss-about__timeline-section__content-container__details-container-top__title font-16-20",children:"Foundations"}),o.jsxs("p",{className:"rss-about__timeline-section__content-container__details-container__content font-14-18",children:["My intial journey into development involved building a strong foundation in the core technologies like HTML, CSS, and JS. This stage was crucial for understanding key foundations of digitalization and development",o.jsx("span",{className:"rss-about__timeline-section__content-container__details-container__content-strong"})]})]}),o.jsx("img",{src:"/resume//icons/timeline_blue-ico.png",alt:"Timeline Blue",className:"rss-about__timeline-section__content-container__details-container__ico"})]})]})]})]})}),o.jsx(ot,{})]})}const Ov=[{icon:"/resume//icons/tick-ico.png",alt:"Icon",text:"25+ Completed Projects"},{icon:"/resume//icons/peoples-ico.png",alt:"Icon",text:"10+ Happy Customers"},{icon:"/resume//icons/chart-ico.png",alt:"Icon",text:"04+ Years of Experience"}],Rv=[{id:2464126,title:"Docker Advance: Mastering Containerization",description:"As an experienced developer, you're beyond the basics of docker run and docker build. You need to...",cover_image:"https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fvsdghellsvrluw6pjqg6.png"},{id:2492409,title:"Kubernetes at Home: Set Up Your Own Cluster Using Vagrant & Ansible",description:"TL;DR: Learn how to build a lightweight Kubernetes cluster on your local machine using Vagrant,...",cover_image:"https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fflva26aw2y9yrce6bds4.png"},{id:2469183,title:"How to Self-Host Coolify on Your VPS: A Complete Guide",description:"Deploying applications can be a complex process, especially if you're managing multiple projects....",cover_image:"https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fg5hh8uh0pl1lmhgrx508.png"},{id:1406955,title:"Supercharge Your UI Development with Storybook",description:'"Storybook for Component-Driven Development: A Comprehensive Guide" - Learn how Storybook simplifies...',cover_image:"https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F4xoz500ldeh74izz9tom.png"}];function Dv({children:e}){const n=B.useRef(null);return B.useEffect(()=>{if(!n.current)return;const t=n.current.querySelector(".swiper-wrapper"),a=((t==null?void 0:t.querySelectorAll(".swiper-slide"))||[]).length,i=window.innerWidth;let r=!1,l=!1;(a>3||a===3&&i<1440||a===2&&i<768)&&(r=!0,l=!0),oe.use([hi]);const c=new oe(n.current,{loop:r,autoplay:l?{delay:5e3,disableOnInteraction:!0,reverseDirection:!0}:!1,slidesPerView:"auto",spaceBetween:10}),u=()=>c.update();return window.addEventListener("resize",u),()=>{window.removeEventListener("resize",u),c.destroy(!0,!0)}},[]),o.jsx("div",{className:"swiper blogs-swiper",ref:n,children:e})}const Fv=({containerRef:e,blogs:n})=>o.jsxs("div",{ref:e,className:"rss-blogs",children:[o.jsx("h3",{className:"rss-blogs__title font-28-48",children:"Blogs"}),o.jsx(Dv,{children:o.jsx("div",{className:"swiper-wrapper rss-blogs__items-container",children:n.map(t=>o.jsxs("a",{href:`/resume/#/blog-detail?${t.id}`,className:"swiper-slide rss-blogs__items-container__item",children:[o.jsx("div",{className:"rss-blogs__items-container__item__img-container",children:o.jsx("img",{src:t.cover_image?t.cover_image:"images/order-uk-1.png",alt:t.title,className:"rss-blogs__items-container__item__img-container__img"})}),o.jsxs("div",{className:"rss-blogs__items-container__item__content",children:[o.jsx("h4",{className:"rss-blogs__items-container__item__content__title font-16-20",children:t.title}),o.jsx("p",{className:"rss-blogs__items-container__item__content__description font-14-18",children:t.description})]})]},t.id))})})]}),$v=e=>{const n=B.useRef(null);return o.jsx(Fv,{containerRef:n,blogs:e.blogs})};function Bv(){return o.jsxs(o.Fragment,{children:[o.jsx(lt,{}),o.jsx("section",{className:"rss-portfolio",children:o.jsxs("div",{className:"container-fluid",children:[o.jsx(xd,{iconPath:"icons/starrs-ico.png",iconAlt:"Stars Icon",contentTitle:"My Works",contentSlug:"Some of my best works and technical blogs",children:o.jsx(Sd,{className:"rss-banner__list-container",gap:14,children:Ov.map((e,n)=>o.jsxs("div",{className:"rss-banner__list-container__item",children:[o.jsx("img",{src:e.icon,alt:e.alt,className:"rss-banner__list-container__item__ico"}),o.jsx("p",{className:"rss-banner__list-container__item__content font-14-18",children:e.text})]},n))})}),o.jsxs("div",{className:"rss-portfolio__contents-container",children:[o.jsx(Kr,{title:"Professional Projects",slug:"",items:[wd]}),o.jsx(Kr,{title:"Personal Projects",slug:"",items:[yd]}),o.jsx($v,{blogs:Rv})]})]})}),o.jsx(ot,{})]})}function Uv({children:e}){const n=B.useRef(null);return B.useEffect(()=>{if(!n.current)return;const t=n.current.querySelector(".swiper-wrapper"),a=((t==null?void 0:t.querySelectorAll(".swiper-slide"))||[]).length,i=window.innerWidth;let r=!1,l=!1;(a>3||a===3&&i<1440||a===2&&i<768)&&(r=!0,l=!0),oe.use([hi]);const c=new oe(n.current,{loop:r,autoplay:l?{delay:5e3,disableOnInteraction:!0,reverseDirection:!0}:!1,slidesPerView:"auto",spaceBetween:10}),u=()=>c.update();return window.addEventListener("resize",u),()=>{window.removeEventListener("resize",u),c.destroy(!0,!0)}},[]),o.jsx("div",{className:"swiper img-swiper",ref:n,children:e})}const Wv=({containerRef:e,data:n})=>{const t="/resume/";return o.jsx("div",{ref:e,className:"rss-slider",children:o.jsx(Uv,{children:o.jsx("div",{className:"swiper-wrapper rss-slider__items-container",children:n.map((s,a)=>o.jsx("div",{className:"swiper-slide rss-slider__items-container__item",children:o.jsx("img",{className:"rss-slider__items-container__item__image",alt:s.alt,src:`${t}/${s.src}`})},a))})})})},Gv=({data:e})=>{const n=B.useRef(null);return o.jsx(Wv,{containerRef:n,data:e})},Yv={"order-uk":{mainImg:"images/order-uk-image-3.png",title:"Order UK",slug:"E-Commerce | Fullstack",role:"Fullstack Engineer",teamSize:"Solo Project",tools:["React","TypeScript","Nodejs","Figma","AWS","Docker"],description:"Order UK is a convenient online service that helps customers in Sri Lanka order products directly from the United Kingdom. It simplifies the process of shopping for UK goods by allowing users to place orders through the website, after which the items are sourced, shipped, and delivered locally. The service is designed to make UK brands and products more accessible to Sri Lankan customers, saving them time and effort while offering trusted delivery. It’s ideal for those seeking international quality without the hassle of international logistics",images:[{src:"images/order-uk-1.png",alt:"Order UK"},{src:"images/order-uk-2.png",alt:"Order UK"},{src:"images/order-uk-3.png",alt:"Order UK"},{src:"images/order-uk-4.png",alt:"Order UK"},{src:"images/order-uk-5.png",alt:"Order UK"},{src:"images/order-uk-6.png",alt:"Order UK"}],problems:["Simplified the grocery ordering process","Improved accessibility for mobile users"],decisions:["Focused on a clean layout and prominent call to actions"],challenges:["Optimizing the UI for both desktop and mobile devices","Created responsive layouts and conducted usability testing"],outcomes:["Decreased drop off rate","Increased conversion rate by 20%"],demo:"https://mohamed-nawas.github.io/order-uk",repo:"https://github.com/mohamed-nawas/order-uk"},"swivel-tech":{mainImg:"images/swivel-tech-image-1.png",title:"Swivel Tech",slug:"Software Consultancy | Backend",role:"Backend Engineer",teamSize:"5+ Developers",tools:["React","TypeScript","Spring Boot","AWS","Docker","Figma","Jira"],description:"Swivel Tech is an Australian-based software consultancy that specializes in building innovative, world-class products for a global clientele. The company offers services including enterprise software development, mobile application development, UX/UI design, and staff augmentation. With a team of dynamic professionals, Swivel Tech collaborates with clients across various industries to deliver scalable and efficient digital solutions",images:[{src:"images/swivel-tech-1.png",alt:"Swivel Tech"},{src:"images/swivel-tech-2.png",alt:"Swivel Tech"},{src:"images/swivel-tech-3.png",alt:"Swivel Tech"},{src:"images/swivel-tech-4.png",alt:"Swivel Tech"},{src:"images/swivel-tech-5.png",alt:"Swivel Tech"},{src:"images/swivel-tech-6.png",alt:"Swivel Tech"},{src:"images/swivel-tech-7.png",alt:"Swivel Tech"},{src:"images/swivel-tech-8.png",alt:"Swivel Tech"},{src:"images/swivel-tech-9.png",alt:"Swivel Tech"},{src:"images/swivel-tech-10.png",alt:"Swivel Tech"},{src:"images/swivel-tech-11.png",alt:"Swivel Tech"}],problems:["Integrating diverse technologies to create seamless solutions","Ensuring scalability and performance across global deployments"],decisions:["Adopted a microservices architecture to enhance modularity","Utilized AWS cloud services for reliable and scalable infrastructure"],challenges:["Coordinating development efforts across multiple time zones","Maintaining consistent code quality and performance standards"],outcomes:["Successfully delivered multiple enterprise-level applications","Enhanced client satisfaction through timely and efficient project execution"],demo:"https://www.swiveltech.io",repo:""},"offshore-safety":{mainImg:"images/offshore-safety-image-1.png",title:"Offshore Safety Services",slug:"PPE Solutions | Frontend",role:"Lead Developer",teamSize:"3 Developers",tools:["React","TypeScript","Wordpress","Bitbucket","Docker","Adobe XD","Jira"],description:"Offshore Safety Services is a leading provider of Personal Protective Equipment (PPE) tailored for the oil, gas, petrochemical, and mining industries. Established in 1977 in the UAE and 2009 in Kuwait, the company offers a comprehensive range of safety solutions, including fire-resistant clothing, marine safety equipment, medical emergency supplies, and custom-made gear. Their products are designed to meet the rigorous demands of offshore environments, ensuring the safety and well-being of workers in high-risk sectors.",images:[{src:"images/offshore-safety-1.png",alt:"Offshore Safety"},{src:"images/offshore-safety-2.png",alt:"Offshore Safety"},{src:"images/offshore-safety-3.png",alt:"Offshore Safety"},{src:"images/offshore-safety-4.png",alt:"Offshore Safety"},{src:"images/offshore-safety-5.png",alt:"Offshore Safety"},{src:"images/offshore-safety-6.png",alt:"Offshore Safety"}],problems:["Developing a user-friendly platform to showcase a diverse range of safety products","Ensuring seamless integration of custom manufacturing options for clients"],decisions:["Implemented a modular product catalog with filtering options for easy navigation","Integrated a custom order system to facilitate bespoke PPE requests from clients"],challenges:["Designing an intuitive interface to accommodate a wide variety of products and services","Ensuring the platform's scalability to handle increasing product listings and client orders"],outcomes:["Enhanced user experience leading to a 30% increase in online inquiries","Streamlined custom order process, reducing client onboarding time by 25%"],demo:"https://offshoresafetyservices.com.au",repo:""},"personal-website":{mainImg:"images/personal-web-image-1.png",title:"Personal Website",slug:"Portfolio | Fullstack",role:"Fullstack Engineer",teamSize:"Solo Project",tools:["HTML","CSS","JavaScript","GitHub Pages","Figma"],description:"This personal website serves as a digital portfolio showcasing my skills, projects, and experiences as a Fullstack Developer. Built using HTML, CSS, and JavaScript, the site is hosted on GitHub Pages, providing a seamless and accessible platform for potential employers and collaborators to explore my work. The design emphasizes simplicity and user experience, reflecting my commitment to clean and effective web development practices.",images:[{src:"images/personal-web-1.png",alt:"Personal Website"},{src:"images/personal-web-2.png",alt:"Personal Website"},{src:"images/personal-web-3.png",alt:"Personal Website"},{src:"images/personal-web-4.png",alt:"Personal Website"},{src:"images/personal-web-5.png",alt:"Personal Website"},{src:"images/personal-web-6.png",alt:"Personal Website"},{src:"images/personal-web-7.png",alt:"Personal Website"},{src:"images/personal-web-8.png",alt:"Personal Website"}],problems:["Creating a responsive design that adapts to various screen sizes","Ensuring fast load times and smooth navigation"],decisions:["Utilized GitHub Pages for free and reliable hosting","Employed Figma for wireframing and design prototyping"],challenges:["Optimizing images and assets for quicker loading","Implementing smooth scroll and interactive elements without external libraries"],outcomes:["Achieved a fully responsive design compatible with desktop, tablet, and mobile devices","Enhanced user engagement through intuitive navigation and interactive features"],demo:"https://mohamed-nawas.github.io/resume",repo:"https://github.com/mohamed-nawas/resume"},"swivel-group":{mainImg:"images/swivel-group-image-1.png",title:"Swivel Group",slug:"Global Software Consultancy | Frontend",role:"Frontend Engineer",teamSize:"5+ Developers",tools:["React","Strapi","AWS","Docker","Figma","Jira","MySQL"],description:"Swivel Group is an Australian-based global software consultancy specializing in building and implementing custom solutions for businesses to innovate, scale, and compete at a global standard. Established in 2019, Swivel Group has rapidly expanded with over 160 employees across multiple offices in Australia, Sri Lanka, and Vietnam. The company offers services in software development, digital strategy, and finance management, operating globally across industries",images:[{src:"images/swivel-group-1.png",alt:"Swivel Group"},{src:"images/swivel-group-2.png",alt:"Swivel Group"},{src:"images/swivel-group-3.png",alt:"Swivel Group"},{src:"images/swivel-group-4.png",alt:"Swivel Group"},{src:"images/swivel-group-5.png",alt:"Swivel Group"},{src:"images/swivel-group-6.png",alt:"Swivel Group"},{src:"images/swivel-group-7.png",alt:"Swivel Group"},{src:"images/swivel-group-8.png",alt:"Swivel Group"},{src:"images/swivel-group-9.png",alt:"Swivel Group"},{src:"images/swivel-group-10.png",alt:"Swivel Group"}],problems:["Developing scalable solutions for diverse industries","Integrating cross-functional teams across multiple regions"],decisions:["Adopted a microservices architecture to enhance modularity","Utilized AWS cloud services for reliable and scalable infrastructure"],challenges:["Coordinating development efforts across multiple time zones","Maintaining consistent code quality and performance standards"],outcomes:["Successfully delivered multiple enterprise-level applications","Enhanced client satisfaction through timely and efficient project execution"],demo:"https://swivelgroup.com.au",repo:""},"fitness-care":{mainImg:"images/fitness-care-image-1.png",title:"Fitness Care",slug:"Health & Wellness | Fullstack",role:"Fullstack Engineer",teamSize:"Solo Project",tools:["React","TypeScript","Node.js","Express","MongoDB","Figma","Jira"],description:"Fitness Care is a comprehensive web application designed to assist users in managing their health and fitness goals. The platform offers features such as workout tracking, nutrition planning, progress monitoring, and personalized recommendations. Built with a modern tech stack, Fitness Care aims to provide an intuitive and engaging experience for users seeking to improve their physical well-being.",images:[{src:"images/fitness-care-1.png",alt:"Fitness Care"},{src:"images/fitness-care-2.png",alt:"Fitness Care"},{src:"images/fitness-care-3.png",alt:"Fitness Care"}],problems:["Designing a user-friendly interface for diverse user demographics","Integrating personalized workout and nutrition plans effectively"],decisions:["Utilized a modular component-based architecture for scalability","Implemented a RESTful API with Node.js and Express for backend services"],challenges:["Ensuring data synchronization between frontend and backend","Optimizing performance for real-time data updates and notifications"],outcomes:["Achieved a responsive design compatible with various devices","Enhanced user engagement through personalized features and notifications"],demo:"https://mohamed-nawas.github.io/fitness-care/",repo:"https://github.com/mohamed-nawas/fitness-care"}};function qv(){const e=ld(),n=e.search.startsWith("?")?e.search.slice(1):e.search,t="/resume/",s=Yv[n];return o.jsxs(o.Fragment,{children:[o.jsx(lt,{}),o.jsx("section",{className:"rss-works-detail",children:o.jsxs("div",{className:"container-fluid",children:[o.jsxs("div",{className:"rss-works-detail__hero-section",style:{"--bg-detail-hero":`url('${t+s.mainImg}')`},children:[o.jsx("h2",{className:"rss-works-detail__hero-section__title font-38-58",children:s.title}),o.jsx("p",{className:"rss-works-detail__hero-section__slug font-28-48",children:s.slug})]}),o.jsxs("div",{className:"rss-works-detail__overview-section",children:[o.jsx("h3",{className:"rss-works-detail__overview-section__title font-18-24",children:"Overview"}),o.jsxs("ul",{className:"rss-works-detail__overview-section__about",children:[o.jsxs("li",{className:"rss-works-detail__overview-section__about__role font-12-16",children:[o.jsx("strong",{children:"ROLE"})," ",o.jsx("span",{className:"font-12-16",children:s.role})]}),o.jsxs("li",{className:"rss-works-detail__overview-section__about__team-size font-12-16",children:[o.jsx("strong",{children:"TEAM SIZE"})," ",o.jsx("span",{className:"font-12-16",children:s.teamSize})]}),o.jsxs("li",{className:"rss-works-detail__overview-section__about__tools font-12-16",children:[o.jsx("strong",{children:"TOOLS"}),o.jsx("ul",{className:"rss-works-detail__overview-section__about__tools__list",children:s.tools.map((a,i)=>o.jsx("li",{className:"rss-works-detail__overview-section__about__tools__list__item font-12-16",children:a},i))})]})]}),o.jsx("p",{className:"rss-works-detail__overview-section__description font-14-18",children:s.description})]}),o.jsxs("div",{className:"rss-works-detail__gallery-section",children:[o.jsx("h3",{className:"rss-works-detail__gallery-section__title font-18-24",children:"Gallery"}),o.jsx(Gv,{data:s.images})]}),o.jsxs("div",{className:"rss-works-detail__details-section",children:[o.jsx("h3",{className:"rss-works-detail__details-section__title font-18-24",children:"Details"}),o.jsxs("div",{className:"rss-works-detail__details-section__container",children:[o.jsxs("div",{className:"rss-works-detail__details-section__container__problems-section",children:[o.jsx("h5",{className:"rss-works-detail__details-section__container__problems-section__title font-14-18",children:o.jsx("strong",{children:"Problems Solved"})}),o.jsx("ul",{className:"rss-works-detail__details-section__container__problems-section__list",children:s.problems.map((a,i)=>o.jsx("li",{className:"rss-works-detail__details-section__container__problems-section__list__item font-12-16",children:a},i))})]}),o.jsxs("div",{className:"rss-works-detail__details-section__container__decisions-section",children:[o.jsx("h5",{className:"rss-works-detail__details-section__container__decisions-section__title font-14-18",children:o.jsx("strong",{children:"Design Decisions"})}),o.jsx("ul",{className:"rss-works-detail__details-section__container__decisions-section__list",children:s.decisions.map((a,i)=>o.jsx("li",{className:"rss-works-detail__details-section__container__decisions-section__list__item font-12-16",children:a},i))})]}),o.jsxs("div",{className:"rss-works-detail__details-section__container__challenges-section",children:[o.jsx("h5",{className:"rss-works-detail__details-section__container__challenges-section__title font-14-18",children:o.jsx("strong",{children:"Challenges"})}),o.jsx("ul",{className:"rss-works-detail__details-section__container__challenges-section__list",children:s.challenges.map((a,i)=>o.jsx("li",{className:"rss-works-detail__details-section__container__challenges-section__list__item font-12-16",children:a},i))})]}),o.jsxs("div",{className:"rss-works-detail__details-section__container__outcomes-section",children:[o.jsx("h5",{className:"rss-works-detail__details-section__container__outcomes-section__title font-14-18",children:o.jsx("strong",{children:"Outcomes"})}),o.jsx("ul",{className:"rss-works-detail__details-section__container__outcomes-section__list",children:s.outcomes.map((a,i)=>o.jsx("li",{className:"rss-works-detail__details-section__container__outcomes-section__list__item font-12-16",children:a},i))})]})]})]}),o.jsxs("div",{className:"rss-works-detail__cta-section",children:[o.jsx("div",{className:"rss-works-detail__cta-section__btn-container",children:o.jsx("a",{target:"_blank",href:s.demo,className:"rss-works-detail__cta-section__btn-container__btn font-14-18",children:"Live Demo"})}),o.jsx("div",{className:"rss-works-detail__cta-section__btn-container rss-works-detail__cta-section__btn-container-shallow",title:s.repo?"":"Repository is not publicly available",children:o.jsxs("a",{target:"_blank",href:s.repo||"#",className:"rss-works-detail__cta-section__btn-container-shallow__btn font-14-18",children:["Repository",!s.repo&&o.jsx("span",{style:{marginLeft:"5px"},children:"🚫"})]})})]})]})}),o.jsx(ot,{})]})}function Kv(){const e=B.useRef(null);return B.useEffect(()=>{function n(){const t=document.querySelector("header"),s=document.querySelector("footer"),a=e.current;if(!t||!s||!a)return;const i=window.innerHeight-t.offsetHeight-s.offsetHeight;a.style.minHeight=`${i}px`}return n(),window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]),o.jsxs(o.Fragment,{children:[o.jsx(lt,{}),o.jsx("section",{className:"rss-notfound",ref:e,children:o.jsxs("div",{className:"container-fluid",children:[o.jsx("h2",{className:"rss-notfound__title font-38-58",children:"404"}),o.jsx("p",{className:"rss-notfound__slug font-28-48",children:"Page Not Found"}),o.jsx("p",{className:"rss-notfound__description font-14-18",children:"The page you are looking for might have been removed, had its name changed or is temporarily unavailable."})]})}),o.jsx(ot,{})]})}const Qv={2464126:{id:2464126,title:"Docker Advance: Mastering Containerization",tag_list:["docker","webdev","cloud","cloudskills"],cover_image:"https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fvsdghellsvrluw6pjqg6.png",url:"https://dev.to/jaskarandeogan/docker-advance-mastering-containerization-59bm",published_at:"2025-05-08T07:00:00Z",body_html:`<p>As an experienced developer, you're beyond the basics of <code>docker run</code> and <code>docker build</code>. You need to orchestrate complex, production-ready environments with precision. This guide dives deep into creating robust Docker deployments through YAML configurations, advanced networking, and container health management.</p>

<h2>
  <a name="the-power-of-docker-compose-yaml" href="#the-power-of-docker-compose-yaml">
  </a>
  The Power of Docker Compose YAML
</h2>

<p>Docker Compose YAML files are the cornerstone of sophisticated multi-container applications. They provide a declarative way to define your entire infrastructure stack.</p>

<h3>
  <a name="anatomy-of-a-production-docker-compose-file" href="#anatomy-of-a-production-docker-compose-file">
  </a>
  Anatomy of a Production Docker Compose File
</h3>



<div class="highlight js-code-highlight">
<pre class="highlight yaml"><code>
<span class="na">services</span><span class="pi">:</span>
  <span class="na">api</span><span class="pi">:</span>
    <span class="na">build</span><span class="pi">:</span>
      <span class="na">context</span><span class="pi">:</span> <span class="s">./backend</span>
      <span class="na">dockerfile</span><span class="pi">:</span> <span class="s">Dockerfile.production</span>
      <span class="na">args</span><span class="pi">:</span>
        <span class="pi">-</span> <span class="s">BUILD_ENV=production</span>
    <span class="na">image</span><span class="pi">:</span> <span class="s">\${REGISTRY_URL}/myapp/api:\${TAG:-latest}</span>
    <span class="na">deploy</span><span class="pi">:</span>
      <span class="na">replicas</span><span class="pi">:</span> <span class="m">3</span>
      <span class="na">resources</span><span class="pi">:</span>
        <span class="na">limits</span><span class="pi">:</span>
          <span class="na">cpus</span><span class="pi">:</span> <span class="s1">'</span><span class="s">0.50'</span>
          <span class="na">memory</span><span class="pi">:</span> <span class="s">512M</span>
      <span class="na">restart_policy</span><span class="pi">:</span>
        <span class="na">condition</span><span class="pi">:</span> <span class="s">on-failure</span>
        <span class="na">max_attempts</span><span class="pi">:</span> <span class="m">3</span>
    <span class="na">healthcheck</span><span class="pi">:</span>
      <span class="na">test</span><span class="pi">:</span> <span class="pi">[</span><span class="s2">"</span><span class="s">CMD"</span><span class="pi">,</span> <span class="s2">"</span><span class="s">curl"</span><span class="pi">,</span> <span class="s2">"</span><span class="s">-f"</span><span class="pi">,</span> <span class="s2">"</span><span class="s">http://localhost:8000/health"</span><span class="pi">]</span>
      <span class="na">interval</span><span class="pi">:</span> <span class="s">30s</span>
      <span class="na">timeout</span><span class="pi">:</span> <span class="s">10s</span>
      <span class="na">retries</span><span class="pi">:</span> <span class="m">3</span>
      <span class="na">start_period</span><span class="pi">:</span> <span class="s">40s</span>
    <span class="na">environment</span><span class="pi">:</span>
      <span class="pi">-</span> <span class="s">NODE_ENV=production</span>
      <span class="pi">-</span> <span class="s">DATABASE_URL=postgres://user:pass@db:5432/app</span>
    <span class="na">secrets</span><span class="pi">:</span>
      <span class="pi">-</span> <span class="s">api_key</span>
    <span class="na">networks</span><span class="pi">:</span>
      <span class="pi">-</span> <span class="s">backend</span>
      <span class="pi">-</span> <span class="s">frontend</span>
    <span class="na">depends_on</span><span class="pi">:</span>
      <span class="na">db</span><span class="pi">:</span>
        <span class="na">condition</span><span class="pi">:</span> <span class="s">service_healthy</span>
      <span class="na">redis</span><span class="pi">:</span>
        <span class="na">condition</span><span class="pi">:</span> <span class="s">service_healthy</span>

  <span class="na">db</span><span class="pi">:</span>
    <span class="na">image</span><span class="pi">:</span> <span class="s">postgres:14-alpine</span>
    <span class="na">volumes</span><span class="pi">:</span>
      <span class="pi">-</span> <span class="s">db-data:/var/lib/postgresql/data</span>
      <span class="pi">-</span> <span class="s">./init-scripts:/docker-entrypoint-initdb.d</span>
    <span class="na">healthcheck</span><span class="pi">:</span>
      <span class="na">test</span><span class="pi">:</span> <span class="pi">[</span><span class="s2">"</span><span class="s">CMD-SHELL"</span><span class="pi">,</span> <span class="s2">"</span><span class="s">pg_isready</span><span class="nv"> </span><span class="s">-U</span><span class="nv"> </span><span class="s">postgres"</span><span class="pi">]</span>
      <span class="na">interval</span><span class="pi">:</span> <span class="s">10s</span>
      <span class="na">timeout</span><span class="pi">:</span> <span class="s">5s</span>
      <span class="na">retries</span><span class="pi">:</span> <span class="m">5</span>
    <span class="na">environment</span><span class="pi">:</span>
      <span class="pi">-</span> <span class="s">POSTGRES_PASSWORD_FILE=/run/secrets/db_password</span>
    <span class="na">secrets</span><span class="pi">:</span>
      <span class="pi">-</span> <span class="s">db_password</span>
    <span class="na">networks</span><span class="pi">:</span>
      <span class="pi">-</span> <span class="s">backend</span>

  <span class="na">redis</span><span class="pi">:</span>
    <span class="na">image</span><span class="pi">:</span> <span class="s">redis:alpine</span>
    <span class="na">command</span><span class="pi">:</span> <span class="pi">[</span><span class="s2">"</span><span class="s">redis-server"</span><span class="pi">,</span> <span class="s2">"</span><span class="s">--appendonly"</span><span class="pi">,</span> <span class="s2">"</span><span class="s">yes"</span><span class="pi">]</span>
    <span class="na">healthcheck</span><span class="pi">:</span>
      <span class="na">test</span><span class="pi">:</span> <span class="pi">[</span><span class="s2">"</span><span class="s">CMD"</span><span class="pi">,</span> <span class="s2">"</span><span class="s">redis-cli"</span><span class="pi">,</span> <span class="s2">"</span><span class="s">ping"</span><span class="pi">]</span>
      <span class="na">interval</span><span class="pi">:</span> <span class="s">10s</span>
      <span class="na">timeout</span><span class="pi">:</span> <span class="s">5s</span>
      <span class="na">retries</span><span class="pi">:</span> <span class="m">5</span>
    <span class="na">volumes</span><span class="pi">:</span>
      <span class="pi">-</span> <span class="s">redis-data:/data</span>
    <span class="na">networks</span><span class="pi">:</span>
      <span class="pi">-</span> <span class="s">backend</span>

  <span class="na">nginx</span><span class="pi">:</span>
    <span class="na">image</span><span class="pi">:</span> <span class="s">nginx:alpine</span>
    <span class="na">volumes</span><span class="pi">:</span>
      <span class="pi">-</span> <span class="s">./nginx/nginx.conf:/etc/nginx/nginx.conf:ro</span>
      <span class="pi">-</span> <span class="s">./certbot/conf:/etc/letsencrypt</span>
      <span class="pi">-</span> <span class="s">./certbot/www:/var/www/certbot</span>
    <span class="na">ports</span><span class="pi">:</span>
      <span class="pi">-</span> <span class="s2">"</span><span class="s">80:80"</span>
      <span class="pi">-</span> <span class="s2">"</span><span class="s">443:443"</span>
    <span class="na">depends_on</span><span class="pi">:</span>
      <span class="pi">-</span> <span class="s">api</span>
    <span class="na">networks</span><span class="pi">:</span>
      <span class="pi">-</span> <span class="s">frontend</span>

<span class="na">volumes</span><span class="pi">:</span>
  <span class="na">db-data</span><span class="pi">:</span>
    <span class="na">driver</span><span class="pi">:</span> <span class="s">local</span>
    <span class="na">driver_opts</span><span class="pi">:</span>
      <span class="na">type</span><span class="pi">:</span> <span class="s1">'</span><span class="s">none'</span>
      <span class="na">o</span><span class="pi">:</span> <span class="s1">'</span><span class="s">bind'</span>
      <span class="na">device</span><span class="pi">:</span> <span class="s1">'</span><span class="s">/mnt/data/postgres'</span>
  <span class="na">redis-data</span><span class="pi">:</span>
    <span class="na">driver</span><span class="pi">:</span> <span class="s">local</span>

<span class="na">networks</span><span class="pi">:</span>
  <span class="na">frontend</span><span class="pi">:</span>
    <span class="na">driver</span><span class="pi">:</span> <span class="s">bridge</span>
    <span class="na">ipam</span><span class="pi">:</span>
      <span class="na">config</span><span class="pi">:</span>
        <span class="pi">-</span> <span class="na">subnet</span><span class="pi">:</span> <span class="s">172.16.238.0/24</span>
  <span class="na">backend</span><span class="pi">:</span>
    <span class="na">driver</span><span class="pi">:</span> <span class="s">bridge</span>
    <span class="na">internal</span><span class="pi">:</span> <span class="kc">true</span>
    <span class="na">ipam</span><span class="pi">:</span>
      <span class="na">config</span><span class="pi">:</span>
        <span class="pi">-</span> <span class="na">subnet</span><span class="pi">:</span> <span class="s">172.16.239.0/24</span>

<span class="na">secrets</span><span class="pi">:</span>
  <span class="na">api_key</span><span class="pi">:</span>
    <span class="na">file</span><span class="pi">:</span> <span class="s">./secrets/api_key.txt</span>
  <span class="na">db_password</span><span class="pi">:</span>
    <span class="na">file</span><span class="pi">:</span> <span class="s">./secrets/db_password.txt</span>
</code></pre>
<div class="highlight__panel js-actions-panel">
<div class="highlight__panel-action js-fullscreen-code-action">
    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewbox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title>
    <path d="M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"></path>
</svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewbox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title>
    <path d="M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"></path>
</svg>

</div>
</div>
</div>



<h3>
  <a name="key-configuration-components" href="#key-configuration-components">
  </a>
  Key Configuration Components
</h3>

<h4>
  <a name="service-configuration" href="#service-configuration">
  </a>
  Service Configuration
</h4>

<ol>
<li>
<strong>Build Context and Arguments</strong>
</li>
</ol>

<div class="highlight js-code-highlight">
<pre class="highlight yaml"><code>   <span class="na">build</span><span class="pi">:</span>
     <span class="na">context</span><span class="pi">:</span> <span class="s">./backend</span>
     <span class="na">dockerfile</span><span class="pi">:</span> <span class="s">Dockerfile.production</span>
     <span class="na">args</span><span class="pi">:</span>
       <span class="pi">-</span> <span class="s">BUILD_ENV=production</span>
</code></pre>
<div class="highlight__panel js-actions-panel">
<div class="highlight__panel-action js-fullscreen-code-action">
    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewbox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title>
    <path d="M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"></path>
</svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewbox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title>
    <path d="M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"></path>
</svg>

</div>
</div>
</div>



<p>This separates your build context from your Dockerfile location, allowing for complex build setups and parameterized builds.</p>

<ol>
<li>
<strong>Resource Limits</strong>
</li>
</ol>

<div class="highlight js-code-highlight">
<pre class="highlight yaml"><code>   <span class="na">deploy</span><span class="pi">:</span>
     <span class="na">resources</span><span class="pi">:</span>
       <span class="na">limits</span><span class="pi">:</span>
         <span class="na">cpus</span><span class="pi">:</span> <span class="s1">'</span><span class="s">0.50'</span>
         <span class="na">memory</span><span class="pi">:</span> <span class="s">512M</span>
</code></pre>
<div class="highlight__panel js-actions-panel">
<div class="highlight__panel-action js-fullscreen-code-action">
    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewbox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title>
    <path d="M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"></path>
</svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewbox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title>
    <path d="M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"></path>
</svg>

</div>
</div>
</div>



<p>Setting hard limits prevents container resource contention and protects your host system.</p>

<h4>
  <a name="health-checks-the-reliability-guardian" href="#health-checks-the-reliability-guardian">
  </a>
  Health Checks - The Reliability Guardian
</h4>

<p>Health checks are critical for production readiness:<br>
</p>

<div class="highlight js-code-highlight">
<pre class="highlight yaml"><code><span class="na">healthcheck</span><span class="pi">:</span>
  <span class="na">test</span><span class="pi">:</span> <span class="pi">[</span><span class="s2">"</span><span class="s">CMD"</span><span class="pi">,</span> <span class="s2">"</span><span class="s">curl"</span><span class="pi">,</span> <span class="s2">"</span><span class="s">-f"</span><span class="pi">,</span> <span class="s2">"</span><span class="s">http://localhost:8000/health"</span><span class="pi">]</span>
  <span class="na">interval</span><span class="pi">:</span> <span class="s">30s</span>
  <span class="na">timeout</span><span class="pi">:</span> <span class="s">10s</span>
  <span class="na">retries</span><span class="pi">:</span> <span class="m">3</span>
  <span class="na">start_period</span><span class="pi">:</span> <span class="s">40s</span>
</code></pre>
<div class="highlight__panel js-actions-panel">
<div class="highlight__panel-action js-fullscreen-code-action">
    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewbox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title>
    <path d="M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"></path>
</svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewbox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title>
    <path d="M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"></path>
</svg>

</div>
</div>
</div>



<p>This configuration:</p>

<ul>
<li>Polls your service's health endpoint every 30 seconds</li>
<li>Allows 10 seconds for a response</li>
<li>Retries 3 times before marking unhealthy</li>
<li>Provides a 40-second grace period during startup</li>
</ul>

<p>Health checks enable:</p>

<ul>
<li>Self-healing containers that restart when services fail</li>
<li>Dependency ordering based on actual service readiness</li>
<li>Orchestration-level service discovery</li>
</ul>

<h4>
  <a name="networking-isolated-and-secure" href="#networking-isolated-and-secure">
  </a>
  Networking - Isolated and Secure
</h4>



<div class="highlight js-code-highlight">
<pre class="highlight yaml"><code><span class="na">networks</span><span class="pi">:</span>
  <span class="na">frontend</span><span class="pi">:</span>
    <span class="na">driver</span><span class="pi">:</span> <span class="s">bridge</span>
    <span class="na">ipam</span><span class="pi">:</span>
      <span class="na">config</span><span class="pi">:</span>
        <span class="pi">-</span> <span class="na">subnet</span><span class="pi">:</span> <span class="s">172.16.238.0/24</span>
  <span class="na">backend</span><span class="pi">:</span>
    <span class="na">driver</span><span class="pi">:</span> <span class="s">bridge</span>
    <span class="na">internal</span><span class="pi">:</span> <span class="kc">true</span>
    <span class="na">ipam</span><span class="pi">:</span>
      <span class="na">config</span><span class="pi">:</span>
        <span class="pi">-</span> <span class="na">subnet</span><span class="pi">:</span> <span class="s">172.16.239.0/24</span>
</code></pre>
<div class="highlight__panel js-actions-panel">
<div class="highlight__panel-action js-fullscreen-code-action">
    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewbox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title>
    <path d="M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"></path>
</svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewbox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title>
    <path d="M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"></path>
</svg>

</div>
</div>
</div>



<p>The <code>internal: true</code> flag for the backend network is crucial - it prevents any container in this network from establishing outbound connections to the internet, creating a security boundary.</p>

<h2>
  <a name="advanced-docker-image-configuration" href="#advanced-docker-image-configuration">
  </a>
  Advanced Docker Image Configuration
</h2>

<h3>
  <a name="multistage-builds-for-production-efficiency" href="#multistage-builds-for-production-efficiency">
  </a>
  Multi-stage Builds for Production Efficiency
</h3>



<div class="highlight js-code-highlight">
<pre class="highlight docker"><code><span class="c"># Build stage</span>
<span class="k">FROM</span><span class="w"> </span><span class="s">node:18-alpine</span><span class="w"> </span><span class="k">AS</span><span class="w"> </span><span class="s">builder</span>
<span class="k">WORKDIR</span><span class="s"> /app</span>
<span class="k">COPY</span><span class="s"> package*.json ./</span>
<span class="k">RUN </span>npm ci
<span class="k">COPY</span><span class="s"> . .</span>
<span class="k">RUN </span>npm run build

<span class="c"># Production stage</span>
<span class="k">FROM</span><span class="s"> node:18-alpine</span>
<span class="k">WORKDIR</span><span class="s"> /app</span>
<span class="k">ENV</span><span class="s"> NODE_ENV production</span>
<span class="k">COPY</span><span class="s"> --from=builder /app/node_modules ./node_modules</span>
<span class="k">COPY</span><span class="s"> --from=builder /app/dist ./dist</span>
<span class="k">COPY</span><span class="s"> --from=builder /app/package.json ./</span>

<span class="c"># Use non-root user for security</span>
<span class="k">RUN </span>addgroup <span class="nt">-g</span> 1001 <span class="nt">-S</span> nodejs <span class="o">&amp;&amp;</span> <span class="se">\\
</span>    adduser <span class="nt">-S</span> nodejs <span class="nt">-u</span> 1001 <span class="o">&amp;&amp;</span> <span class="se">\\
</span>    <span class="nb">chown</span> <span class="nt">-R</span> nodejs:nodejs /app
<span class="k">USER</span><span class="s"> nodejs</span>

<span class="c"># Health check</span>
<span class="k">HEALTHCHECK</span><span class="s"> --interval=30s --timeout=10s --start-period=40s --retries=3 \\</span>
    CMD wget -q -O - http://localhost:3000/health || exit 1

<span class="c"># Runtime configuration</span>
<span class="k">EXPOSE</span><span class="s"> 3000</span>
<span class="k">CMD</span><span class="s"> ["node", "dist/main.js"]</span>
</code></pre>
<div class="highlight__panel js-actions-panel">
<div class="highlight__panel-action js-fullscreen-code-action">
    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewbox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title>
    <path d="M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"></path>
</svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewbox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title>
    <path d="M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"></path>
</svg>

</div>
</div>
</div>



<h3>
  <a name="the-importance-of-base-image-selection" href="#the-importance-of-base-image-selection">
  </a>
  The Importance of Base Image Selection
</h3>

<p>Base image selection dramatically impacts security, size, and performance:</p>

<ul>
<li>
<strong>Distroless Images</strong>: Contain only your application and its runtime dependencies</li>
<li>
<strong>Alpine Variants</strong>: Minimal footprint but include package managers for flexibility</li>
<li>
<strong>Scratch Images</strong>: Empty images for compiled languages, offering the smallest attack surface</li>
</ul>

<p>Compare the image size differences:</p>

<ul>
<li>Node on Debian: ~900MB</li>
<li>Node on Alpine: ~170MB</li>
<li>Go compiled binary on scratch: ~10MB</li>
</ul>

<h2>
  <a name="volume-management-data-persistence-done-right" href="#volume-management-data-persistence-done-right">
  </a>
  Volume Management - Data Persistence Done Right
</h2>



<div class="highlight js-code-highlight">
<pre class="highlight yaml"><code><span class="na">volumes</span><span class="pi">:</span>
  <span class="na">db-data</span><span class="pi">:</span>
    <span class="na">driver</span><span class="pi">:</span> <span class="s">local</span>
    <span class="na">driver_opts</span><span class="pi">:</span>
      <span class="na">type</span><span class="pi">:</span> <span class="s1">'</span><span class="s">none'</span>
      <span class="na">o</span><span class="pi">:</span> <span class="s1">'</span><span class="s">bind'</span>
      <span class="na">device</span><span class="pi">:</span> <span class="s1">'</span><span class="s">/mnt/data/postgres'</span>
</code></pre>
<div class="highlight__panel js-actions-panel">
<div class="highlight__panel-action js-fullscreen-code-action">
    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewbox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title>
    <path d="M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"></path>
</svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewbox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title>
    <path d="M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"></path>
</svg>

</div>
</div>
</div>



<p>This configuration maps container data to specific host locations with precise mounting options, ensuring data integrity across container lifecycles.</p>

<h2>
  <a name="secrets-management-the-secure-way" href="#secrets-management-the-secure-way">
  </a>
  Secrets Management - The Secure Way
</h2>



<div class="highlight js-code-highlight">
<pre class="highlight yaml"><code><span class="na">secrets</span><span class="pi">:</span>
  <span class="na">api_key</span><span class="pi">:</span>
    <span class="na">file</span><span class="pi">:</span> <span class="s">./secrets/api_key.txt</span>
</code></pre>
<div class="highlight__panel js-actions-panel">
<div class="highlight__panel-action js-fullscreen-code-action">
    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewbox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title>
    <path d="M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"></path>
</svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewbox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title>
    <path d="M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"></path>
</svg>

</div>
</div>
</div>



<p>Secrets in Docker Compose are mounted as files, not environment variables, preventing credential leakage in process lists or error logs.</p>

<h2>
  <a name="network-design-principles" href="#network-design-principles">
  </a>
  Network Design Principles
</h2>

<h3>
  <a name="creating-defenseindepth" href="#creating-defenseindepth">
  </a>
  Creating Defense-in-Depth
</h3>

<ol>
<li>
<p><strong>Least Privilege Networking</strong>:</p>

<ul>
<li>Frontend-facing services in one network</li>
<li>Backend services in an internal network</li>
<li>Database in its own isolated network</li>
</ul>
</li>
<li>
<p><strong>Network Segmentation Benefits</strong>:</p>

<ul>
<li>Limits attack vectors if perimeter is breached</li>
<li>Provides clear traffic flow visibility</li>
<li>Enables granular firewall rules</li>
</ul>
</li>
</ol>

<h3>
  <a name="custom-bridge-networks-with-static-ips" href="#custom-bridge-networks-with-static-ips">
  </a>
  Custom Bridge Networks with Static IPs
</h3>



<div class="highlight js-code-highlight">
<pre class="highlight yaml"><code><span class="na">networks</span><span class="pi">:</span>
  <span class="na">app_net</span><span class="pi">:</span>
    <span class="na">driver</span><span class="pi">:</span> <span class="s">bridge</span>
    <span class="na">ipam</span><span class="pi">:</span>
      <span class="na">driver</span><span class="pi">:</span> <span class="s">default</span>
      <span class="na">config</span><span class="pi">:</span>
        <span class="pi">-</span> <span class="na">subnet</span><span class="pi">:</span> <span class="s">172.28.0.0/16</span>
          <span class="na">ip_range</span><span class="pi">:</span> <span class="s">172.28.5.0/24</span>
          <span class="na">gateway</span><span class="pi">:</span> <span class="s">172.28.5.254</span>
</code></pre>
<div class="highlight__panel js-actions-panel">
<div class="highlight__panel-action js-fullscreen-code-action">
    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewbox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title>
    <path d="M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"></path>
</svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewbox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title>
    <path d="M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"></path>
</svg>

</div>
</div>
</div>



<p>Static IP assignments allow for deterministic network configurations, especially useful when integrating with legacy systems or configuring static firewall rules.</p>

<h2>
  <a name="container-dependency-management" href="#container-dependency-management">
  </a>
  Container Dependency Management
</h2>



<div class="highlight js-code-highlight">
<pre class="highlight yaml"><code><span class="na">depends_on</span><span class="pi">:</span>
  <span class="na">db</span><span class="pi">:</span>
    <span class="na">condition</span><span class="pi">:</span> <span class="s">service_healthy</span>
  <span class="na">redis</span><span class="pi">:</span>
    <span class="na">condition</span><span class="pi">:</span> <span class="s">service_healthy</span>
</code></pre>
<div class="highlight__panel js-actions-panel">
<div class="highlight__panel-action js-fullscreen-code-action">
    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewbox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title>
    <path d="M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"></path>
</svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewbox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title>
    <path d="M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"></path>
</svg>

</div>
</div>
</div>



<p>This ensures your application only starts when its dependencies are truly ready to accept connections, not just when their containers have started.</p>

<h2>
  <a name="why-this-advanced-approach-matters" href="#why-this-advanced-approach-matters">
  </a>
  Why This Advanced Approach Matters
</h2>

<ol>
<li>
<strong>Infrastructure as Code</strong>: Your entire environment is versioned, reproducible, and testable</li>
<li>
<strong>Consistency Across Environments</strong>: Dev, staging, and production use identical configurations</li>
<li>
<strong>Security by Design</strong>: Network isolation, minimal base images, and proper secret management</li>
<li>
<strong>Simplified Disaster Recovery</strong>: Rebuild your entire stack with a single command</li>
<li>
<strong>Efficient Resource Utilization</strong>: Precise resource limits prevent waste and contention</li>
</ol>

<h2>
  <a name="moving-beyond-basic-docker" href="#moving-beyond-basic-docker">
  </a>
  Moving Beyond Basic Docker
</h2>

<p>When working at scale, consider these advanced patterns:</p>

<h3>
  <a name="configuration-management-with-docker-configs" href="#configuration-management-with-docker-configs">
  </a>
  Configuration Management with Docker Configs
</h3>



<div class="highlight js-code-highlight">
<pre class="highlight yaml"><code><span class="na">configs</span><span class="pi">:</span>
  <span class="na">nginx_config</span><span class="pi">:</span>
    <span class="na">file</span><span class="pi">:</span> <span class="s">./nginx.conf</span>
</code></pre>
<div class="highlight__panel js-actions-panel">
<div class="highlight__panel-action js-fullscreen-code-action">
    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewbox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title>
    <path d="M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"></path>
</svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewbox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title>
    <path d="M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"></path>
</svg>

</div>
</div>
</div>



<p>Unlike volumes, configs are immutable and better represent configuration as code.</p>

<h3>
  <a name="custom-health-check-implementations" href="#custom-health-check-implementations">
  </a>
  Custom Health Check Implementations
</h3>

<p>For complex applications, implement sophisticated health checks that verify:</p>

<ul>
<li>Database connections</li>
<li>External API availability</li>
<li>Cache system functionality</li>
<li>Queue processor status</li>
</ul>

<h3>
  <a name="init-systems-and-zombie-process-prevention" href="#init-systems-and-zombie-process-prevention">
  </a>
  Init Systems and Zombie Process Prevention
</h3>



<div class="highlight js-code-highlight">
<pre class="highlight yaml"><code><span class="na">services</span><span class="pi">:</span>
  <span class="na">app</span><span class="pi">:</span>
    <span class="na">init</span><span class="pi">:</span> <span class="kc">true</span>
</code></pre>
<div class="highlight__panel js-actions-panel">
<div class="highlight__panel-action js-fullscreen-code-action">
    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewbox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title>
    <path d="M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"></path>
</svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewbox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title>
    <path d="M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"></path>
</svg>

</div>
</div>
</div>



<p>The <code>init: true</code> flag adds a lightweight init system to your container, preventing zombie processes and ensuring proper signal handling.</p>

<h2>
  <a name="the-path-to-orchestration" href="#the-path-to-orchestration">
  </a>
  The Path to Orchestration
</h2>

<p>This advanced Docker Compose setup forms the foundation for moving to orchestration platforms like Kubernetes. The principles remain the same:</p>

<ul>
<li>Declarative configuration</li>
<li>Health monitoring</li>
<li>Resource management</li>
<li>Network segmentation</li>
<li>Secret handling</li>
</ul>

<p>By mastering these Docker concepts, you're not just containerizing applications—you're building production-ready, scalable, and secure systems that embody DevOps best practices.</p>

<p>The true power of Docker isn't in simplifying development; it's in enabling consistent, repeatable infrastructure that bridges the gap between development and operations, turning the art of deployment into a precise science.</p>

<h2>
  <a name="upcoming" href="#upcoming">
  </a>
  Upcoming
</h2>

<ul>
<li>How to self-host Coolify - an open source alternative to Netlify or Heroku. </li>
<li>self-host services like analytics, email-server, interactive-forms, databases and much more!</li>
</ul>

`},2492409:{id:2492409,title:"Kubernetes at Home: Set Up Your Own Cluster Using Vagrant & Ansible",tag_list:["devops","kubernetes","vagrant","ansible"],cover_image:"https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fflva26aw2y9yrce6bds4.png",url:"https://dev.to/houssambourkane/kubernetes-at-home-set-up-your-own-cluster-using-vagrant-ansible-4c8a",published_at:"2025-05-15T23:30:03Z",body_html:`<blockquote>
<p><strong>TL;DR:</strong> Learn how to build a lightweight Kubernetes cluster on your local machine using Vagrant, Ansible, and VMware Fusion. Perfect for ARM-based Mac users looking to experiment with Kubernetes in a reproducible environment.</p>
</blockquote>


<hr>

<h2>
  <a name="why-this-guide" href="#why-this-guide">
  </a>
  Why This Guide?
</h2>

<p>Setting up a Kubernetes cluster manually can be complex and time-consuming. But with the power of <strong>Vagrant</strong> for managing virtual machines and <strong>Ansible</strong> for automating setup tasks, you can spin up a local cluster with minimal effort and maximum reproducibility. This tutorial walks you through building a two-node cluster on macOS with ARM chips (e.g., M1/M2), but it's adaptable to other setups.</p>


<hr>

<h2>
  <a name="table-of-contents" href="#table-of-contents">
  </a>
  Table of Contents
</h2>

<ul>
<li><a href="#prerequisites">Prerequisites</a></li>
<li><a href="#project-structure">Project Structure</a></li>
<li><a href="#step-1-configure-vagrant">Step 1: Configure Vagrant</a></li>
<li>
<a href="#step-2-configure-ansible">Step 2: Configure Ansible</a> </li>
<li>
<a href="#step-3-ansible-playbook-for-kubernetes-setup">Step 3: Ansible Playbook for Kubernetes Setup</a> </li>
<li><a href="#step-4-test-and-deploy-the-cluster">Step 4: Test and Deploy the Cluster</a></li>
<li><a href="#whats-next">What's Next?</a></li>
<li><a href="#useful-links">Useful links</a></li>
</ul>


<hr>

<h2>
  <a name="prerequisites" href="#prerequisites">
  </a>
  Prerequisites
</h2>

<p>Before we start, ensure you have the following installed:</p>

<ul>
<li><a href="https://developer.hashicorp.com/vagrant/install" target="_blank" rel="noopener noreferrer">Vagrant</a></li>
<li><a href="https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html" target="_blank" rel="noopener noreferrer">Ansible</a></li>
<li><a href="https://knowledge.broadcom.com/external/article/315638/download-and-install-vmware-fusion.html" target="_blank" rel="noopener noreferrer">VMware Fusion Tech Preview</a></li>
</ul>

<blockquote>
<p>For macOS ARM users, refer to this special setup guide: <a href="https://dev.to/houssambourkane/run-vagrant-vms-in-a-m1m2m3-macos-chip-2p3l">Run Vagrant VMs in a M1/M2/M3 Apple Sillicon Chip</a></p>
</blockquote>


<hr>

<h2>
  <a name="project-structure" href="#project-structure">
  </a>
  Project Structure
</h2>

<p>Create a project directory and replicate the following structure:<br>
</p>

<div class="highlight js-code-highlight">
<pre class="highlight shell"><code><span class="nb">.</span>
├── ansible
│   ├── ansible.cfg
│   ├── inventory.ini
│   └── k8s-cluster-setup.yml
└── Vagrantfile
</code></pre>
<div class="highlight__panel js-actions-panel">
<div class="highlight__panel-action js-fullscreen-code-action">
    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewbox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title>
    <path d="M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"></path>
</svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewbox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title>
    <path d="M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"></path>
</svg>

</div>
</div>
</div>




<hr>

<h2>
  <a name="step-1-configure-vagrant" href="#step-1-configure-vagrant">
  </a>
  Step 1: Configure Vagrant
</h2>

<p>Install the VMware Desktop plugin:<br>
</p>

<div class="highlight js-code-highlight">
<pre class="highlight shell"><code>vagrant plugin <span class="nb">install </span>vagrant-vmware-desktop
</code></pre>
<div class="highlight__panel js-actions-panel">
<div class="highlight__panel-action js-fullscreen-code-action">
    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewbox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title>
    <path d="M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"></path>
</svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewbox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title>
    <path d="M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"></path>
</svg>

</div>
</div>
</div>



<p>Next, reserve <strong>two static private IPs</strong> from your LAN. Scan your local network using:<br>
</p>

<div class="highlight js-code-highlight">
<pre class="highlight shell"><code>nmap <span class="nt">-sn</span> 192.168.1.0/24
</code></pre>
<div class="highlight__panel js-actions-panel">
<div class="highlight__panel-action js-fullscreen-code-action">
    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewbox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title>
    <path d="M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"></path>
</svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewbox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title>
    <path d="M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"></path>
</svg>

</div>
</div>
</div>



<blockquote>
<p>Replace <code>192.168.1.0</code> with you LAN network IP</p>
</blockquote>

<p>Update your <code>Vagrantfile</code> with something like this:<br>
</p>

<div class="highlight js-code-highlight">
<pre class="highlight ruby"><code><span class="no">Vagrant</span><span class="p">.</span><span class="nf">configure</span><span class="p">(</span><span class="s2">"2"</span><span class="p">)</span> <span class="k">do</span> <span class="o">|</span><span class="n">config</span><span class="o">|</span>
  <span class="n">config</span><span class="p">.</span><span class="nf">vm</span><span class="p">.</span><span class="nf">define</span> <span class="s2">"kubmaster"</span> <span class="k">do</span> <span class="o">|</span><span class="n">kub</span><span class="o">|</span>
    <span class="n">kub</span><span class="p">.</span><span class="nf">vm</span><span class="p">.</span><span class="nf">box</span> <span class="o">=</span> <span class="s2">"spox/ubuntu-arm"</span>
    <span class="n">kub</span><span class="p">.</span><span class="nf">vm</span><span class="p">.</span><span class="nf">box_version</span> <span class="o">=</span> <span class="s2">"1.0.0"</span>
    <span class="n">kub</span><span class="p">.</span><span class="nf">vm</span><span class="p">.</span><span class="nf">hostname</span> <span class="o">=</span> <span class="s1">'kubmaster'</span>
    <span class="n">kub</span><span class="p">.</span><span class="nf">vm</span><span class="p">.</span><span class="nf">provision</span> <span class="s2">"docker"</span>
    <span class="n">kub</span><span class="p">.</span><span class="nf">vm</span><span class="p">.</span><span class="nf">network</span> <span class="s2">"public_network"</span><span class="p">,</span> <span class="ss">ip: </span><span class="s2">"192.168.1.101"</span><span class="p">,</span> <span class="ss">bridge: </span><span class="s2">"en0: Wifi"</span>
    <span class="n">kub</span><span class="p">.</span><span class="nf">vm</span><span class="p">.</span><span class="nf">provider</span> <span class="s2">"vmware_desktop"</span> <span class="k">do</span> <span class="o">|</span><span class="n">v</span><span class="o">|</span>
      <span class="n">v</span><span class="p">.</span><span class="nf">allowlist_verified</span> <span class="o">=</span> <span class="kp">true</span>
      <span class="n">v</span><span class="p">.</span><span class="nf">gui</span> <span class="o">=</span> <span class="kp">false</span>
      <span class="n">v</span><span class="p">.</span><span class="nf">vmx</span><span class="p">[</span><span class="s2">"memsize"</span><span class="p">]</span> <span class="o">=</span> <span class="s2">"4096"</span>
      <span class="n">v</span><span class="p">.</span><span class="nf">vmx</span><span class="p">[</span><span class="s2">"numvcpus"</span><span class="p">]</span> <span class="o">=</span> <span class="s2">"2"</span>
    <span class="k">end</span>
  <span class="k">end</span>

  <span class="n">config</span><span class="p">.</span><span class="nf">vm</span><span class="p">.</span><span class="nf">define</span> <span class="s2">"kubnode1"</span> <span class="k">do</span> <span class="o">|</span><span class="n">kubnode</span><span class="o">|</span>
    <span class="n">kubnode</span><span class="p">.</span><span class="nf">vm</span><span class="p">.</span><span class="nf">box</span> <span class="o">=</span> <span class="s2">"spox/ubuntu-arm"</span>
    <span class="n">kubnode</span><span class="p">.</span><span class="nf">vm</span><span class="p">.</span><span class="nf">box_version</span> <span class="o">=</span> <span class="s2">"1.0.0"</span>
    <span class="n">kubnode</span><span class="p">.</span><span class="nf">vm</span><span class="p">.</span><span class="nf">hostname</span> <span class="o">=</span> <span class="s1">'kubnode1'</span>
    <span class="n">kubnode</span><span class="p">.</span><span class="nf">vm</span><span class="p">.</span><span class="nf">provision</span> <span class="s2">"docker"</span>
    <span class="n">kubnode</span><span class="p">.</span><span class="nf">vm</span><span class="p">.</span><span class="nf">network</span> <span class="s2">"public_network"</span><span class="p">,</span> <span class="ss">ip: </span><span class="s2">"192.168.1.102"</span><span class="p">,</span> <span class="ss">bridge: </span><span class="s2">"en0: Wifi"</span>
    <span class="n">kubnode</span><span class="p">.</span><span class="nf">vm</span><span class="p">.</span><span class="nf">provider</span> <span class="s2">"vmware_desktop"</span> <span class="k">do</span> <span class="o">|</span><span class="n">v</span><span class="o">|</span>
      <span class="n">v</span><span class="p">.</span><span class="nf">allowlist_verified</span> <span class="o">=</span> <span class="kp">true</span>
      <span class="n">v</span><span class="p">.</span><span class="nf">gui</span> <span class="o">=</span> <span class="kp">false</span>
      <span class="n">v</span><span class="p">.</span><span class="nf">vmx</span><span class="p">[</span><span class="s2">"memsize"</span><span class="p">]</span> <span class="o">=</span> <span class="s2">"4096"</span>
      <span class="n">v</span><span class="p">.</span><span class="nf">vmx</span><span class="p">[</span><span class="s2">"numvcpus"</span><span class="p">]</span> <span class="o">=</span> <span class="s2">"2"</span>
    <span class="k">end</span>
  <span class="k">end</span>
<span class="k">end</span>
</code></pre>
<div class="highlight__panel js-actions-panel">
<div class="highlight__panel-action js-fullscreen-code-action">
    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewbox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title>
    <path d="M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"></path>
</svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewbox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title>
    <path d="M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"></path>
</svg>

</div>
</div>
</div>



<blockquote>
<p>Replace the IPs with ones that match your LAN.</p>
</blockquote>

<p>Now bring up the VMs:<br>
</p>

<div class="highlight js-code-highlight">
<pre class="highlight shell"><code>vagrant up
</code></pre>
<div class="highlight__panel js-actions-panel">
<div class="highlight__panel-action js-fullscreen-code-action">
    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewbox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title>
    <path d="M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"></path>
</svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewbox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title>
    <path d="M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"></path>
</svg>

</div>
</div>
</div>




<hr>

<h2>
  <a name="step-2-configure-ansible" href="#step-2-configure-ansible">
  </a>
  Step 2: Configure Ansible
</h2>

<h3>
  <a name="-raw-ansibleinventoryini-endraw-" href="#-raw-ansibleinventoryini-endraw-">
  </a>
  <code>ansible/inventory.ini</code>
</h3>



<div class="highlight js-code-highlight">
<pre class="highlight ini"><code><span class="nn">[master]</span>
<span class="err">kubmaster</span> <span class="py">ansible_host</span><span class="p">=</span><span class="s">192.168.1.101 ansible_ssh_private_key_file=.vagrant/machines/kubmaster/vmware_desktop/private_key</span>

<span class="nn">[workers]</span>
<span class="err">kubnode1</span> <span class="py">ansible_host</span><span class="p">=</span><span class="s">192.168.1.102 ansible_ssh_private_key_file=.vagrant/machines/kubnode1/vmware_desktop/private_key</span>

<span class="nn">[all:vars]</span>
<span class="py">ansible_user</span><span class="p">=</span><span class="s">vagrant</span>
</code></pre>
<div class="highlight__panel js-actions-panel">
<div class="highlight__panel-action js-fullscreen-code-action">
    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewbox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title>
    <path d="M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"></path>
</svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewbox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title>
    <path d="M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"></path>
</svg>

</div>
</div>
</div>



<blockquote>
<p>Make sure to replace the IP addresses</p>
</blockquote>

<h3>
  <a name="-raw-ansibleansiblecfg-endraw-" href="#-raw-ansibleansiblecfg-endraw-">
  </a>
  <code>ansible/ansible.cfg</code>
</h3>



<div class="highlight js-code-highlight">
<pre class="highlight ini"><code><span class="nn">[defaults]</span>
<span class="py">inventory</span> <span class="p">=</span> <span class="s">inventory.ini</span>
<span class="py">host_key_checking</span> <span class="p">=</span> <span class="s">False</span>
</code></pre>
<div class="highlight__panel js-actions-panel">
<div class="highlight__panel-action js-fullscreen-code-action">
    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewbox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title>
    <path d="M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"></path>
</svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewbox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title>
    <path d="M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"></path>
</svg>

</div>
</div>
</div>




<hr>

<h2>
  <a name="step-3-ansible-playbook-for-kubernetes-setup" href="#step-3-ansible-playbook-for-kubernetes-setup">
  </a>
  Step 3: Ansible Playbook for Kubernetes Setup
</h2>

<h3>
  <a name="-raw-ansiblek8sclustersetupyml-endraw-" href="#-raw-ansiblek8sclustersetupyml-endraw-">
  </a>
  <code>ansible/k8s-cluster-setup.yml</code>
</h3>

<p>This playbook performs the following:</p>

<ul>
<li>Prepares all nodes: disables swap, installs required packages, configures kernel modules, adds K8s repositories, installs <code>kubeadm</code>, <code>kubelet</code>, and <code>kubectl</code>.</li>
<li>Initializes the master node and stores the cluster join command.</li>
<li>Sets up Flannel CNI for networking.</li>
<li>Joins worker nodes using the generated join command.
</li>
</ul>

<div class="highlight js-code-highlight">
<pre class="highlight yaml"><code><span class="nn">---</span>
<span class="pi">-</span> <span class="na">name</span><span class="pi">:</span> <span class="s">Prepare Kubernetes Nodes</span>
  <span class="na">hosts</span><span class="pi">:</span> <span class="s">all</span>
  <span class="na">become</span><span class="pi">:</span> <span class="s">yes</span>

  <span class="na">tasks</span><span class="pi">:</span>  

    <span class="pi">-</span> <span class="na">name</span><span class="pi">:</span> <span class="s">Disable swap (runtime)</span>
      <span class="na">command</span><span class="pi">:</span> <span class="s">swapoff -a</span>
      <span class="na">when</span><span class="pi">:</span> <span class="s">ansible_swaptotal_mb &gt; </span><span class="m">0</span>

    <span class="pi">-</span> <span class="na">name</span><span class="pi">:</span> <span class="s">Comment out swap line in /etc/fstab</span>
      <span class="na">lineinfile</span><span class="pi">:</span>
        <span class="na">path</span><span class="pi">:</span> <span class="s">/etc/fstab</span>
        <span class="na">regexp</span><span class="pi">:</span> <span class="s1">'</span><span class="s">^\\s*([^#]\\S*\\s+\\S+\\s+swap\\s+\\S+)\\s*$'</span>
        <span class="na">line</span><span class="pi">:</span> <span class="s1">'</span><span class="s">#</span><span class="nv"> </span><span class="s">\\1'</span>
        <span class="na">backrefs</span><span class="pi">:</span> <span class="s">yes</span>

    <span class="pi">-</span> <span class="na">name</span><span class="pi">:</span> <span class="s">Apply mount changes</span>
      <span class="na">command</span><span class="pi">:</span> <span class="s">mount -a</span>

    <span class="pi">-</span> <span class="na">name</span><span class="pi">:</span> <span class="s">Stop AppArmor</span>
      <span class="na">systemd</span><span class="pi">:</span>
        <span class="na">name</span><span class="pi">:</span> <span class="s">apparmor</span>
        <span class="na">state</span><span class="pi">:</span> <span class="s">stopped</span>
        <span class="na">enabled</span><span class="pi">:</span> <span class="s">no</span>

    <span class="pi">-</span> <span class="na">name</span><span class="pi">:</span> <span class="s">Restart containerd</span>
      <span class="na">systemd</span><span class="pi">:</span>
        <span class="na">name</span><span class="pi">:</span> <span class="s">containerd</span>
        <span class="na">state</span><span class="pi">:</span> <span class="s">restarted</span>

    <span class="pi">-</span> <span class="na">name</span><span class="pi">:</span> <span class="s">Configure sysctl for Kubernetes</span>
      <span class="na">copy</span><span class="pi">:</span>
        <span class="na">dest</span><span class="pi">:</span> <span class="s">/etc/sysctl.d/kubernetes.conf</span>
        <span class="na">content</span><span class="pi">:</span> <span class="pi">|</span>
          <span class="s">net.bridge.bridge-nf-call-ip6tables = 1</span>
          <span class="s">net.bridge.bridge-nf-call-iptables = 1</span>

    <span class="pi">-</span> <span class="na">name</span><span class="pi">:</span> <span class="s">Apply sysctl settings</span>
      <span class="na">command</span><span class="pi">:</span> <span class="s">sysctl --system</span>

    <span class="pi">-</span> <span class="na">name</span><span class="pi">:</span> <span class="s">Install transport and curl</span>
      <span class="na">apt</span><span class="pi">:</span>
        <span class="na">name</span><span class="pi">:</span>
          <span class="pi">-</span> <span class="s">apt-transport-https</span>
          <span class="pi">-</span> <span class="s">curl</span>
        <span class="na">update_cache</span><span class="pi">:</span> <span class="s">yes</span>
        <span class="na">state</span><span class="pi">:</span> <span class="s">present</span>

    <span class="pi">-</span> <span class="na">name</span><span class="pi">:</span> <span class="s">Add Kubernetes APT key</span>
      <span class="na">shell</span><span class="pi">:</span> <span class="pi">|</span>
        <span class="s">curl -fsSL https://pkgs.k8s.io/core:/stable:/v1.33/deb/Release.key | sudo gpg --dearmor -o /etc/apt/keyrings/kubernetes-apt-keyring.gpg</span>
      <span class="na">args</span><span class="pi">:</span>
        <span class="na">creates</span><span class="pi">:</span> <span class="s">/etc/apt/keyrings/kubernetes-apt-keyring.gpg</span>

    <span class="pi">-</span> <span class="na">name</span><span class="pi">:</span> <span class="s">Add Kubernetes APT repository</span>
      <span class="na">apt_repository</span><span class="pi">:</span>
        <span class="na">repo</span><span class="pi">:</span> <span class="s2">"</span><span class="s">deb</span><span class="nv"> </span><span class="s">[signed-by=/etc/apt/keyrings/kubernetes-apt-keyring.gpg]</span><span class="nv"> </span><span class="s">https://pkgs.k8s.io/core:/stable:/v1.33/deb/</span><span class="nv"> </span><span class="s">/"</span>
        <span class="na">filename</span><span class="pi">:</span> <span class="s2">"</span><span class="s">kubernetes"</span>
        <span class="na">state</span><span class="pi">:</span> <span class="s">present</span>

    <span class="pi">-</span> <span class="na">name</span><span class="pi">:</span> <span class="s">Install Kubernetes components</span>
      <span class="na">apt</span><span class="pi">:</span>
        <span class="na">name</span><span class="pi">:</span>
          <span class="pi">-</span> <span class="s">kubelet</span>
          <span class="pi">-</span> <span class="s">kubeadm</span>
          <span class="pi">-</span> <span class="s">kubectl</span>
          <span class="pi">-</span> <span class="s">kubernetes-cni</span>
        <span class="na">update_cache</span><span class="pi">:</span> <span class="s">yes</span>
        <span class="na">state</span><span class="pi">:</span> <span class="s">present</span>

    <span class="pi">-</span> <span class="na">name</span><span class="pi">:</span> <span class="s">Enable kubelet service</span>
      <span class="na">systemd</span><span class="pi">:</span>
        <span class="na">name</span><span class="pi">:</span> <span class="s">kubelet</span>
        <span class="na">enabled</span><span class="pi">:</span> <span class="s">yes</span>

<span class="pi">-</span> <span class="na">name</span><span class="pi">:</span> <span class="s">Initialize Kubernetes Master</span>
  <span class="na">hosts</span><span class="pi">:</span> <span class="s">master</span>
  <span class="na">become</span><span class="pi">:</span> <span class="s">yes</span>
  <span class="na">vars</span><span class="pi">:</span>
    <span class="na">pod_cidr</span><span class="pi">:</span> <span class="s2">"</span><span class="s">10.244.0.0/16"</span>

  <span class="na">tasks</span><span class="pi">:</span>

    <span class="pi">-</span> <span class="na">name</span><span class="pi">:</span> <span class="s">Remove default containerd config</span>
      <span class="na">file</span><span class="pi">:</span>
        <span class="na">path</span><span class="pi">:</span> <span class="s">/etc/containerd/config.toml</span>
        <span class="na">state</span><span class="pi">:</span> <span class="s">absent</span>

    <span class="pi">-</span> <span class="na">name</span><span class="pi">:</span> <span class="s">Restart containerd</span>
      <span class="na">systemd</span><span class="pi">:</span>
        <span class="na">name</span><span class="pi">:</span> <span class="s">containerd</span>
        <span class="na">state</span><span class="pi">:</span> <span class="s">restarted</span>
        <span class="na">enabled</span><span class="pi">:</span> <span class="s">yes</span>

    <span class="pi">-</span> <span class="na">name</span><span class="pi">:</span> <span class="s">Wait for containerd socket to be available</span>
      <span class="na">wait_for</span><span class="pi">:</span>
        <span class="na">path</span><span class="pi">:</span> <span class="s">/run/containerd/containerd.sock</span>
        <span class="na">state</span><span class="pi">:</span> <span class="s">present</span>
        <span class="na">timeout</span><span class="pi">:</span> <span class="m">20</span>

    <span class="pi">-</span> <span class="na">name</span><span class="pi">:</span> <span class="s">Initialize Kubernetes control plane</span>
      <span class="na">command</span><span class="pi">:</span> <span class="s">kubeadm init --apiserver-advertise-address={{ ansible_host }} --node-name {{ inventory_hostname }} --pod-network-cidr={{ pod_cidr }}</span>
      <span class="na">register</span><span class="pi">:</span> <span class="s">kubeadm_output</span>
      <span class="na">args</span><span class="pi">:</span>
        <span class="na">creates</span><span class="pi">:</span> <span class="s">/etc/kubernetes/admin.conf</span>

    <span class="pi">-</span> <span class="na">name</span><span class="pi">:</span> <span class="s">Extract join command</span>
      <span class="na">shell</span><span class="pi">:</span> <span class="pi">|</span>
        <span class="s">kubeadm token create --print-join-command</span>
      <span class="na">register</span><span class="pi">:</span> <span class="s">join_command</span>
      <span class="na">changed_when</span><span class="pi">:</span> <span class="kc">false</span>

    <span class="pi">-</span> <span class="na">name</span><span class="pi">:</span> <span class="s">Set join command fact</span>
      <span class="na">set_fact</span><span class="pi">:</span>
        <span class="na">kube_join_command</span><span class="pi">:</span> <span class="s2">"</span><span class="s">{{</span><span class="nv"> </span><span class="s">join_command.stdout</span><span class="nv"> </span><span class="s">}}"</span>

    <span class="pi">-</span> <span class="na">name</span><span class="pi">:</span> <span class="s">Create .kube directory for vagrant user</span>
      <span class="na">become_user</span><span class="pi">:</span> <span class="s">vagrant</span>
      <span class="na">file</span><span class="pi">:</span>
        <span class="na">path</span><span class="pi">:</span> <span class="s">/home/vagrant/.kube</span>
        <span class="na">state</span><span class="pi">:</span> <span class="s">directory</span>
        <span class="na">mode</span><span class="pi">:</span> <span class="m">0755</span>

    <span class="pi">-</span> <span class="na">name</span><span class="pi">:</span> <span class="s">Copy Kubernetes admin config to vagrant user</span>
      <span class="na">copy</span><span class="pi">:</span>
        <span class="na">src</span><span class="pi">:</span> <span class="s">/etc/kubernetes/admin.conf</span>
        <span class="na">dest</span><span class="pi">:</span> <span class="s">/home/vagrant/.kube/config</span>
        <span class="na">remote_src</span><span class="pi">:</span> <span class="s">yes</span>
        <span class="na">owner</span><span class="pi">:</span> <span class="s">vagrant</span>
        <span class="na">group</span><span class="pi">:</span> <span class="s">vagrant</span>
        <span class="na">mode</span><span class="pi">:</span> <span class="m">0644</span>

<span class="pi">-</span> <span class="na">name</span><span class="pi">:</span> <span class="s">Configure networking</span>
  <span class="na">hosts</span><span class="pi">:</span> <span class="s">all</span>
  <span class="na">become</span><span class="pi">:</span> <span class="s">yes</span>

  <span class="na">tasks</span><span class="pi">:</span>

    <span class="pi">-</span> <span class="na">name</span><span class="pi">:</span> <span class="s">Ensure br_netfilter loads at boot</span>
      <span class="na">copy</span><span class="pi">:</span>
        <span class="na">dest</span><span class="pi">:</span> <span class="s">/etc/modules-load.d/k8s.conf</span>
        <span class="na">content</span><span class="pi">:</span> <span class="pi">|</span>
          <span class="s">br_netfilter</span>

    <span class="pi">-</span> <span class="na">name</span><span class="pi">:</span> <span class="s">Load br_netfilter kernel module now</span>
      <span class="na">command</span><span class="pi">:</span> <span class="s">modprobe br_netfilter</span>

    <span class="pi">-</span> <span class="na">name</span><span class="pi">:</span> <span class="s">Configure sysctl for Kubernetes networking</span>
      <span class="na">copy</span><span class="pi">:</span>
        <span class="na">dest</span><span class="pi">:</span> <span class="s">/etc/sysctl.d/k8s.conf</span>
        <span class="na">content</span><span class="pi">:</span> <span class="pi">|</span>
          <span class="s">net.bridge.bridge-nf-call-iptables = 1</span>
          <span class="s">net.bridge.bridge-nf-call-ip6tables = 1</span>

    <span class="pi">-</span> <span class="na">name</span><span class="pi">:</span> <span class="s">Apply sysctl settings</span>
      <span class="na">command</span><span class="pi">:</span> <span class="s">sysctl --system</span>

<span class="pi">-</span> <span class="na">name</span><span class="pi">:</span> <span class="s">Configure flannel</span>
  <span class="na">hosts</span><span class="pi">:</span> <span class="s">master</span>
  <span class="na">become</span><span class="pi">:</span> <span class="s">yes</span>

  <span class="na">tasks</span><span class="pi">:</span>

    <span class="pi">-</span> <span class="na">name</span><span class="pi">:</span> <span class="s">Apply Flannel CNI plugin</span>
      <span class="na">become_user</span><span class="pi">:</span> <span class="s">vagrant</span>
      <span class="na">command</span><span class="pi">:</span> <span class="s">kubectl apply -f https://raw.githubusercontent.com/flannel-io/flannel/master/Documentation/kube-flannel.yml</span>
      <span class="na">environment</span><span class="pi">:</span>
        <span class="na">KUBECONFIG</span><span class="pi">:</span> <span class="s">/home/vagrant/.kube/config</span>


<span class="pi">-</span> <span class="na">name</span><span class="pi">:</span> <span class="s">Join worker nodes to cluster</span>
  <span class="na">hosts</span><span class="pi">:</span> <span class="s">workers</span>
  <span class="na">become</span><span class="pi">:</span> <span class="s">yes</span>
  <span class="na">vars</span><span class="pi">:</span>
    <span class="na">kube_join_command</span><span class="pi">:</span> <span class="s2">"</span><span class="s">{{</span><span class="nv"> </span><span class="s">hostvars['kubmaster']['kube_join_command']</span><span class="nv"> </span><span class="s">}}"</span>

  <span class="na">tasks</span><span class="pi">:</span>
    <span class="pi">-</span> <span class="na">name</span><span class="pi">:</span> <span class="s">Remove default containerd config</span>
      <span class="na">file</span><span class="pi">:</span>
        <span class="na">path</span><span class="pi">:</span> <span class="s">/etc/containerd/config.toml</span>
        <span class="na">state</span><span class="pi">:</span> <span class="s">absent</span>

    <span class="pi">-</span> <span class="na">name</span><span class="pi">:</span> <span class="s">Restart containerd</span>
      <span class="na">systemd</span><span class="pi">:</span>
        <span class="na">name</span><span class="pi">:</span> <span class="s">containerd</span>
        <span class="na">state</span><span class="pi">:</span> <span class="s">restarted</span>
        <span class="na">enabled</span><span class="pi">:</span> <span class="s">yes</span>
    <span class="pi">-</span> <span class="na">name</span><span class="pi">:</span> <span class="s">Wait until the Kubernetes API server is reachable</span>
      <span class="na">wait_for</span><span class="pi">:</span>
        <span class="na">host</span><span class="pi">:</span> <span class="s2">"</span><span class="s">{{</span><span class="nv"> </span><span class="s">hostvars['kubmaster']['ansible_host']</span><span class="nv"> </span><span class="s">}}"</span>
        <span class="na">port</span><span class="pi">:</span> <span class="m">6443</span>
        <span class="na">delay</span><span class="pi">:</span> <span class="m">10</span>
        <span class="na">timeout</span><span class="pi">:</span> <span class="m">120</span>
        <span class="na">state</span><span class="pi">:</span> <span class="s">started</span>

    <span class="pi">-</span> <span class="na">name</span><span class="pi">:</span> <span class="s">Join the node to Kubernetes cluster</span>
      <span class="na">command</span><span class="pi">:</span> <span class="s2">"</span><span class="s">{{</span><span class="nv"> </span><span class="s">kube_join_command</span><span class="nv"> </span><span class="s">}}"</span>
      <span class="na">args</span><span class="pi">:</span>
        <span class="na">creates</span><span class="pi">:</span> <span class="s">/etc/kubernetes/kubelet.conf</span>
</code></pre>
<div class="highlight__panel js-actions-panel">
<div class="highlight__panel-action js-fullscreen-code-action">
    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewbox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title>
    <path d="M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"></path>
</svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewbox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title>
    <path d="M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"></path>
</svg>

</div>
</div>
</div>




<hr>

<h2>
  <a name="step-4-test-and-deploy-the-cluster" href="#step-4-test-and-deploy-the-cluster">
  </a>
  Step 4: Test and Deploy the Cluster
</h2>

<h3>
  <a name="test-ansible-ssh-connectivity" href="#test-ansible-ssh-connectivity">
  </a>
  Test Ansible SSH connectivity:
</h3>



<div class="highlight js-code-highlight">
<pre class="highlight shell"><code>ansible all <span class="nt">-m</span> ping <span class="nt">-i</span> ansible/inventory.ini
</code></pre>
<div class="highlight__panel js-actions-panel">
<div class="highlight__panel-action js-fullscreen-code-action">
    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewbox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title>
    <path d="M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"></path>
</svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewbox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title>
    <path d="M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"></path>
</svg>

</div>
</div>
</div>



<h3>
  <a name="run-the-full-cluster-setup" href="#run-the-full-cluster-setup">
  </a>
  Run the full cluster setup:
</h3>



<div class="highlight js-code-highlight">
<pre class="highlight shell"><code>ansible-playbook <span class="nt">-i</span> ansible/inventory.ini ansible/k8s-cluster-setup.yml
</code></pre>
<div class="highlight__panel js-actions-panel">
<div class="highlight__panel-action js-fullscreen-code-action">
    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewbox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title>
    <path d="M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"></path>
</svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewbox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title>
    <path d="M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"></path>
</svg>

</div>
</div>
</div>



<h3>
  <a name="retrieve-the-kubeconfig-file-locally" href="#retrieve-the-kubeconfig-file-locally">
  </a>
  Retrieve the kubeconfig file locally:
</h3>



<div class="highlight js-code-highlight">
<pre class="highlight shell"><code>vagrant ssh kubmaster <span class="nt">-c</span> <span class="s2">"sudo cat /etc/kubernetes/admin.conf"</span> <span class="o">&gt;</span> ~/kubeconfig-vagrant.yaml
</code></pre>
<div class="highlight__panel js-actions-panel">
<div class="highlight__panel-action js-fullscreen-code-action">
    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewbox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title>
    <path d="M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"></path>
</svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewbox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title>
    <path d="M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"></path>
</svg>

</div>
</div>
</div>



<h3>
  <a name="test-your-cluster" href="#test-your-cluster">
  </a>
  Test your cluster:
</h3>



<div class="highlight js-code-highlight">
<pre class="highlight shell"><code><span class="nv">KUBECONFIG</span><span class="o">=</span>~/kubeconfig-vagrant.yaml kubectl get nodes
</code></pre>
<div class="highlight__panel js-actions-panel">
<div class="highlight__panel-action js-fullscreen-code-action">
    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewbox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title>
    <path d="M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"></path>
</svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewbox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title>
    <path d="M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"></path>
</svg>

</div>
</div>
</div>



<p>You should see both the master and worker nodes in <code>Ready</code> status.</p>


<hr>

<h2>
  <a name="whats-next" href="#whats-next">
  </a>
  What's Next?
</h2>

<p>You now have a fully functioning local Kubernetes cluster on ARM-based hardware, with everything automated and reproducible. You can now:</p>

<ul>
<li>Experiment with Helm charts</li>
<li>Try GitOps with ArgoCD</li>
<li>Deploy sample apps</li>
</ul>

<p>Stay tuned for the next part of this series!</p>


<hr>

<h2>
  <a name="useful-links" href="#useful-links">
  </a>
  Useful Links
</h2>

<ul>
<li>Vagrant: <a href="https://developer.hashicorp.com/vagrant/install" target="_blank" rel="noopener noreferrer">https://developer.hashicorp.com/vagrant/install</a>
</li>
<li>Ansible: <a href="https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html" target="_blank" rel="noopener noreferrer">https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html</a>
</li>
<li>VMware Fusion Tech Preview: <a href="https://knowledge.broadcom.com/external/article/315638/download-and-install-vmware-fusion.html" target="_blank" rel="noopener noreferrer">https://knowledge.broadcom.com/external/article/315638/download-and-install-vmware-fusion.html</a>
</li>
<li>ARM-specific setup guide: <a href="https://dev.to/houssambourkane/run-vagrant-vms-in-a-m1m2m3-macos-chip-2p3l">https://dev.to/houssambourkane/run-vagrant-vms-in-a-m1m2m3-macos-chip-2p3l</a>
</li>
<li>Vagrant VMware utility: <a href="https://developer.hashicorp.com/vagrant/docs/providers/vmware/vagrant-vmware-utility" target="_blank" rel="noopener noreferrer">https://developer.hashicorp.com/vagrant/docs/providers/vmware/vagrant-vmware-utility</a>
</li>
</ul>

`},2469183:{id:2469183,title:"How to Self-Host Coolify on Your VPS: A Complete Guide",tag_list:["coolify","docker","learning","community"],cover_image:"https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fg5hh8uh0pl1lmhgrx508.png",url:"https://dev.to/jaskarandeogan/how-to-self-host-coolify-on-your-vps-a-complete-guide-4jfh",published_at:"2025-05-12T12:00:00Z",body_html:`<p>Deploying applications can be a complex process, especially if you're managing multiple projects. Coolify offers a streamlined solution for developers who want control without the complexity. In this guide, I'll walk you through what Coolify is and how to set it up on your own VPS.</p>

<h2>
  <a name="what-is-coolify" href="#what-is-coolify">
  </a>
  What is Coolify?
</h2>

<p>Coolify is an open-source, self-hostable alternative to platforms like Heroku and Netlify. It's designed to simplify the deployment and management of applications, websites, and databases on your own infrastructure. With Coolify, you can deploy applications directly from Git repositories with just a few clicks.</p>

<h2>
  <a name="why-use-coolify" href="#why-use-coolify">
  </a>
  Why Use Coolify?
</h2>

<ol>
<li>Complete Control: You own your infrastructure and data</li>
<li>Cost-Effective: Eliminate ongoing SaaS subscription fees</li>
<li>Privacy: Your code and data stay on your servers</li>
<li>Customization: Configure everything to your exact needs</li>
<li>One-Click Deployments: Deploy applications straight from your Git repositories</li>
<li>Multiple Application Support: Host various applications, websites, and databases in one place</li>
</ol>

<h2>
  <a name="prerequisites" href="#prerequisites">
  </a>
  Prerequisites
</h2>

<p>Before installing Coolify, ensure your VPS meets these requirements:</p>

<ul>
<li>At least 2 CPU cores</li>
<li>Minimum 4 GB RAM</li>
<li>40 GB storage</li>
<li>Ubuntu 20.04 or newer (Ubuntu 24.04 recommended)</li>
<li>Root or sudo access</li>
<li>SSH access</li>
<li>Internet connection</li>
<li>Basic understanding of Docker</li>
</ul>

<h3>
  <a name="stepbystep-installation-guide" href="#stepbystep-installation-guide">
  </a>
  Step-by-Step Installation Guide
</h3>

<h4>
  <a name="step-1-connect-to-your-vps" href="#step-1-connect-to-your-vps">
  </a>
  Step 1: Connect to Your VPS
</h4>

<p>Connect to your server via SSH:<br>
</p>

<div class="highlight js-code-highlight">
<pre class="highlight plaintext"><code>ssh root@your_server_ip
</code></pre>
<div class="highlight__panel js-actions-panel">
<div class="highlight__panel-action js-fullscreen-code-action">
    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewbox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title>
    <path d="M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"></path>
</svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewbox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title>
    <path d="M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"></path>
</svg>

</div>
</div>
</div>



<h4>
  <a name="step-2-update-your-system" href="#step-2-update-your-system">
  </a>
  Step 2: Update Your System
</h4>

<p>Always start with a fully updated system:<br>
</p>

<div class="highlight js-code-highlight">
<pre class="highlight plaintext"><code>apt update &amp;&amp; apt upgrade -y
</code></pre>
<div class="highlight__panel js-actions-panel">
<div class="highlight__panel-action js-fullscreen-code-action">
    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewbox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title>
    <path d="M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"></path>
</svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewbox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title>
    <path d="M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"></path>
</svg>

</div>
</div>
</div>



<h4>
  <a name="step-3-verify-docker-installation" href="#step-3-verify-docker-installation">
  </a>
  Step 3: Verify Docker Installation
</h4>

<p>Coolify requires Docker and Docker Compose. Check if Docker is already installed:<br>
</p>

<div class="highlight js-code-highlight">
<pre class="highlight plaintext"><code>docker --version
</code></pre>
<div class="highlight__panel js-actions-panel">
<div class="highlight__panel-action js-fullscreen-code-action">
    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewbox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title>
    <path d="M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"></path>
</svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewbox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title>
    <path d="M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"></path>
</svg>

</div>
</div>
</div>



<p>If Docker isn't installed, follow the official Docker installation guide for your Ubuntu version from the Docker documentation.</p>

<h4>
  <a name="step-4-install-coolify" href="#step-4-install-coolify">
  </a>
  Step 4: Install Coolify
</h4>

<p>The simplest way to install Coolify is using the official installation script:<br>
</p>

<div class="highlight js-code-highlight">
<pre class="highlight plaintext"><code>curl -fsSL https://cdn.coollabs.io/coolify/install.sh | sudo bash
</code></pre>
<div class="highlight__panel js-actions-panel">
<div class="highlight__panel-action js-fullscreen-code-action">
    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewbox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title>
    <path d="M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"></path>
</svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewbox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title>
    <path d="M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"></path>
</svg>

</div>
</div>
</div>



<h4>
  <a name="step-5-access-coolify-dashboard" href="#step-5-access-coolify-dashboard">
  </a>
  Step 5: Access Coolify Dashboard
</h4>

<p><a href="https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fuf14eke6bzd9q4mk9elm.png" class="article-body-image-wrapper"><img src="https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fuf14eke6bzd9q4mk9elm.png" alt="successful installation" loading="lazy" width="800" height="233"></a></p>

<p>After installation completes successfully, the script will display your Coolify URL (typically <code>http://your_server_ip:8000</code>).<br>
To access your dashboard:</p>

<ul>
<li>Visit this URL in your web browser</li>
<li>You'll be redirected to a registration page</li>
<li>Create your first admin account immediately</li>
</ul>
<h3>
  <a name="making-coolify-publicly-accessible" href="#making-coolify-publicly-accessible">
  </a>
  Making Coolify Publicly Accessible
</h3>

<p>By default, Coolify might only be accessible locally. Let's configure it for public access.</p>
<h4>
  <a name="step-1-configure-firewall-rules" href="#step-1-configure-firewall-rules">
  </a>
  Step 1: Configure Firewall Rules
</h4>

<p>First, check your firewall status:<br>
</p>

<div class="highlight js-code-highlight">
<pre class="highlight plaintext"><code>sudo ufw status
</code></pre>
<div class="highlight__panel js-actions-panel">
<div class="highlight__panel-action js-fullscreen-code-action">
    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewbox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title>
    <path d="M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"></path>
</svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewbox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title>
    <path d="M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"></path>
</svg>

</div>
</div>
</div>



<p>If UFW isn't installed:<br>
</p>

<div class="highlight js-code-highlight">
<pre class="highlight plaintext"><code>sudo apt install ufw
</code></pre>
<div class="highlight__panel js-actions-panel">
<div class="highlight__panel-action js-fullscreen-code-action">
    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewbox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title>
    <path d="M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"></path>
</svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewbox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title>
    <path d="M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"></path>
</svg>

</div>
</div>
</div>





<div class="highlight js-code-highlight">
<pre class="highlight plaintext"><code># Allow SSH
sudo ufw allow ssh

# Allow Coolify main port
sudo ufw allow 8000/tcp

# Allow HTTP and HTTPS for deployed applications
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp

# Enable the firewall
sudo ufw enable
</code></pre>
<div class="highlight__panel js-actions-panel">
<div class="highlight__panel-action js-fullscreen-code-action">
    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewbox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title>
    <path d="M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"></path>
</svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewbox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title>
    <path d="M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"></path>
</svg>

</div>
</div>
</div>



<h4>
  <a name="step-2-verify-port-binding" href="#step-2-verify-port-binding">
  </a>
  Step 2: Verify Port Binding
</h4>

<p>Ensure Coolify is listening on all interfaces:<br>
</p>

<div class="highlight js-code-highlight">
<pre class="highlight plaintext"><code>sudo netstat -tulpn | grep 8000
</code></pre>
<div class="highlight__panel js-actions-panel">
<div class="highlight__panel-action js-fullscreen-code-action">
    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewbox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title>
    <path d="M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"></path>
</svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewbox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title>
    <path d="M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"></path>
</svg>

</div>
</div>
</div>



<p>You should see it bound to 0.0.0.0:8000 rather than just 127.0.0.1:8000.</p>

<h4>
  <a name="step-3-restart-coolify" href="#step-3-restart-coolify">
  </a>
  Step 3: Restart Coolify
</h4>

<p>After making changes, restart Coolify:<br>
</p>

<div class="highlight js-code-highlight">
<pre class="highlight plaintext"><code>cd /data/coolify/source
docker compose down
docker compose up -d
</code></pre>
<div class="highlight__panel js-actions-panel">
<div class="highlight__panel-action js-fullscreen-code-action">
    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewbox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title>
    <path d="M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"></path>
</svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewbox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title>
    <path d="M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"></path>
</svg>

</div>
</div>
</div>



<h4>
  <a name="step-4-test-external-access" href="#step-4-test-external-access">
  </a>
  Step 4: Test External Access
</h4>

<p>Now try accessing Coolify from outside your server:<br>
</p>

<div class="highlight js-code-highlight">
<pre class="highlight plaintext"><code>http://your-server-ip:8000
</code></pre>
<div class="highlight__panel js-actions-panel">
<div class="highlight__panel-action js-fullscreen-code-action">
    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewbox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title>
    <path d="M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"></path>
</svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewbox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title>
    <path d="M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"></path>
</svg>

</div>
</div>
</div>



<p><a href="https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F09gta3omguj79ie5xbrg.png" class="article-body-image-wrapper"><img src="https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F09gta3omguj79ie5xbrg.png" alt="Coolify Dashboard" loading="lazy" width="800" height="667"></a></p>

<p>If you don't know your server's public IP address, use:<br>
</p>

<div class="highlight js-code-highlight">
<pre class="highlight plaintext"><code>curl -4 icanhazip.com
</code></pre>
<div class="highlight__panel js-actions-panel">
<div class="highlight__panel-action js-fullscreen-code-action">
    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewbox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title>
    <path d="M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"></path>
</svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewbox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title>
    <path d="M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"></path>
</svg>

</div>
</div>
</div>



<h3>
  <a name="setting-up-a-custom-domain-for-your-coolify-dashboard" href="#setting-up-a-custom-domain-for-your-coolify-dashboard">
  </a>
  Setting Up a Custom Domain for Your Coolify Dashboard
</h3>

<p>For a more professional setup, you can configure Coolify to use your own domain.</p>

<h4>
  <a name="step-1-add-dns-record" href="#step-1-add-dns-record">
  </a>
  Step 1: Add DNS Record
</h4>

<p>First, add an A record at your domain registrar:</p>

<ul>
<li>Type: A</li>
<li>Name: coolify (or subdomain of your choice, or @ for root domain)</li>
<li>Value: Your server's IP address</li>
</ul>

<p>Step 2: Update Coolify Configuration<br>
Modify Coolify's environment variables:<br>
</p>

<div class="highlight js-code-highlight">
<pre class="highlight plaintext"><code>cd /data/coolify/source

# Backup existing environment file
cp .env .env.backup

# Edit the .env file
nano .env
</code></pre>
<div class="highlight__panel js-actions-panel">
<div class="highlight__panel-action js-fullscreen-code-action">
    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewbox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title>
    <path d="M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"></path>
</svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewbox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title>
    <path d="M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"></path>
</svg>

</div>
</div>
</div>



<p>Add or update these variables:<br>
</p>

<div class="highlight js-code-highlight">
<pre class="highlight plaintext"><code>APP_URL=https://yourdomain.com
COOLIFY_FQDN=yourdomain.com
</code></pre>
<div class="highlight__panel js-actions-panel">
<div class="highlight__panel-action js-fullscreen-code-action">
    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewbox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title>
    <path d="M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"></path>
</svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewbox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title>
    <path d="M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"></path>
</svg>

</div>
</div>
</div>



<p>Step 3: Restart Coolify with New Configuration<br>
</p>

<div class="highlight js-code-highlight">
<pre class="highlight plaintext"><code>cd /data/coolify/source

# Stop everything
docker compose --env-file .env -f docker-compose.yml -f docker-compose.prod.yml stop

# Start everything fresh
docker compose --env-file .env -f docker-compose.yml -f docker-compose.prod.yml up -d

</code></pre>
<div class="highlight__panel js-actions-panel">
<div class="highlight__panel-action js-fullscreen-code-action">
    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewbox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title>
    <path d="M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"></path>
</svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewbox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title>
    <path d="M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"></path>
</svg>

</div>
</div>
</div>



<p>Coolify should now be accessible via your custom domain!</p>

<h3>
  <a name="verifying-your-installation" href="#verifying-your-installation">
  </a>
  Verifying Your Installation
</h3>

<p>To ensure everything is running properly:</p>

<h4>
  <a name="1-check-container-status" href="#1-check-container-status">
  </a>
  1. Check Container Status:
</h4>



<div class="highlight js-code-highlight">
<pre class="highlight plaintext"><code>docker ps
</code></pre>
<div class="highlight__panel js-actions-panel">
<div class="highlight__panel-action js-fullscreen-code-action">
    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewbox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title>
    <path d="M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"></path>
</svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewbox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title>
    <path d="M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"></path>
</svg>

</div>
</div>
</div>



<p>Look for Coolify-related containers running without errors.</p>

<h4>
  <a name="2-check-logs" href="#2-check-logs">
  </a>
  2. Check Logs:
</h4>



<div class="highlight js-code-highlight">
<pre class="highlight plaintext"><code>cd /data/coolify/source
docker compose logs
</code></pre>
<div class="highlight__panel js-actions-panel">
<div class="highlight__panel-action js-fullscreen-code-action">
    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewbox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title>
    <path d="M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"></path>
</svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewbox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title>
    <path d="M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"></path>
</svg>

</div>
</div>
</div>



<h4>
  <a name="3-test-dashboard-access" href="#3-test-dashboard-access">
  </a>
  3. Test Dashboard Access:
</h4>

<p>Visit your dashboard URL (either IP:8000 or your custom domain) in a browser.</p>

<h2>
  <a name="conclusion" href="#conclusion">
  </a>
  Conclusion
</h2>

<p>Coolify provides a powerful, self-hosted platform for managing your applications. By following this guide, you've successfully set up your own deployment platform that gives you complete control over your infrastructure.</p>

<p>With Coolify up and running, you can now deploy websites, applications, and databases with ease—all from a clean, user-friendly dashboard that you control.</p>

<h2>
  <a name="upcoming" href="#upcoming">
  </a>
  Upcoming
</h2>

<p>explore more open-source technologies while solving real life problems.</p>

<p>Stay tuned and happy deploying!</p>

`},1406955:{id:1406955,title:"Supercharge Your UI Development with Storybook",tag_list:["storybook","frontend","nextjs","documentation"],cover_image:"https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F4xoz500ldeh74izz9tom.png",url:"https://dev.to/jaskarandeogan/supercharge-your-ui-development-with-storybook-1nhb",published_at:"2023-03-19T20:06:57Z",body_html:`<p>"Storybook for Component-Driven Development: A Comprehensive Guide" - Learn how Storybook simplifies UI component development by allowing developers to view and interact with components in isolation. Discover the benefits of using Storybook to document component-driven development and get started with it today.</p>

<p><strong>Why Storybook is Useful for Documenting Component-Driven Development</strong><br>
Storybook is valuable for documenting components in a clear and accessible way. It's especially helpful for large-scale projects with multiple developers. Teams can create their own stories to review each other's work and catch errors early on. It also helps improve code quality by isolating and testing components in various states. This reduces debugging time and enhances the overall stability of the application.</p>

<p><strong>How to Get Started with Storybook</strong><br>
Getting started with Storybook is relatively easy. Here are the basic steps:</p>

<p>Install Storybook using your preferred package manager. For example, you can use the following command with npm:</p>

<p><code>npm install -D @storybook/react</code></p>

<p>Create a configuration file for Storybook. You can use the following command to create a basic configuration file:</p>

<p><code>npx sb init</code></p>

<p>Note: depending upon your styling, you may have to configure this further. check official <a href="https://storybook.js.org/docs/react/get-started/why-storybook" target="_blank" rel="noopener noreferrer">documentation </a></p>

<p>Create your first story. You can create a new file in your project's src directory. Here is a small demo how I created a story of one of my component.</p>

<p>src/components/ProgressBar/ProgressBar.stories.js. Here's an example of what the file might look like:<br>
</p>

<div class="highlight js-code-highlight">
<pre class="highlight plaintext"><code>import React from "react";
import { Meta, Story } from "@storybook/react";
import CircularProgressBar from "../components/CircularProgressBar";
import { CircularProgressBarProps } from "@/types/components";

export default {
  title: "Components/CircularProgressBar",
  component: CircularProgressBar,
  layout: "fullscreen",
} as Meta;

const Template: Story&lt;CircularProgressBarProps&gt; = (args) =&gt; (
  &lt;CircularProgressBar {...args} /&gt;
);

export const Default = Template.bind({});
Default.args = {
  children: (
    &lt;div className="flex items-center justify-center text-lg font-bold text-gray-700 rounded-full bg-white h-20 w-20 "&gt;
      75%
    &lt;/div&gt;
  ),
};

export const CustomColors = Template.bind({});
CustomColors.args = {
  progressStart: 50,
  progressEnd: 100,
  barColor: "#10B981",
  className: "bg-gray-200",
  children: (
    &lt;div className="flex items-center justify-center text-lg font-bold text-gray-700 rounded-full bg-slate-400 h-20 w-20"&gt;
      75%
    &lt;/div&gt;
  ),
};

export const SlowSpeed = Template.bind({});
SlowSpeed.args = {
  progressStart: 0,
  progressEnd: 90,
  speed: 50,
  barColor: "#F59E0B",
  children: (
    &lt;div className="flex items-center justify-center text-lg font-bold text-gray-700 rounded-full bg-slate-400 h-20 w-20"&gt;
      {}
    &lt;/div&gt;
  ),
};
</code></pre>
<div class="highlight__panel js-actions-panel">
<div class="highlight__panel-action js-fullscreen-code-action">
    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewbox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title>
    <path d="M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"></path>
</svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewbox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title>
    <path d="M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"></path>
</svg>

</div>
</div>
</div>



<p>This example creates a story for a ProgressBar that wraps a child and show a progress. component has been shown three different states default, custom color and custom speed. </p>

<p>Start the Storybook server. You can use the following command:</p>

<p><code>npm run storybook</code></p>

<p>This will start the Storybook</p>

<p>A screenshot of storybook dashboard, and how you can customise component with props.</p>

<p><a href="https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fdbqd4m2tz859zl5orcmz.png" class="article-body-image-wrapper"><img src="https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fdbqd4m2tz859zl5orcmz.png" alt="A demo of how it looks like on storybook dashboard." loading="lazy" width="800" height="628"></a></p>

`}};function Xv(){const e=ld(),n=e.search.startsWith("?")?e.search.slice(1):e.search,t=n?Number(n):null,s=t!==null&&!isNaN(t)?Qv[t]:null;return o.jsxs(o.Fragment,{children:[o.jsx(lt,{}),o.jsx("section",{className:"rss-blog-detail",children:o.jsxs("div",{className:"container-fluid",children:[o.jsxs("div",{className:"rss-blog-detail__container",children:[o.jsx("div",{className:"rss-blog-detail__container__tags-container",children:s?s.tag_list.map((a,i)=>o.jsx("div",{className:"rss-blog-detail__container__tags-container__item",children:o.jsx("p",{className:"rss-blog-detail__container__tags-container__item__tag font-12-16",children:a})},i)):null}),o.jsx("h6",{className:"rss-blog-detail__container__date font-12-16",children:s?new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"numeric"}).format(new Date(s.published_at)):null})]}),o.jsx("h2",{className:"rss-blog-detail__title font-28-48",children:s?s.title:"Blog not found."}),o.jsx("img",{src:(s==null?void 0:s.cover_image)??void 0,alt:"Banner Image",className:"rss-blog-detail__img"}),s?o.jsx("div",{className:"rss-blog-detail__body",dangerouslySetInnerHTML:{__html:s.body_html}}):o.jsx("div",{className:"rss-blog-detail__body",children:"Blog not found."})]})}),o.jsx(ot,{})]})}const Jv=Km;function Zv(){return B.createElement(Jv,{},o.jsxs(Ym,{children:[o.jsx(Sn,{exact:!0,path:"/",component:Mv}),o.jsx(Sn,{exact:!0,path:"/about",component:Av}),o.jsx(Sn,{exact:!0,path:"/projects",component:Bv}),o.jsx(Sn,{exact:!0,path:"/contact",component:Vv}),o.jsx(Sn,{exact:!0,path:"/detail",component:qv}),o.jsx(Sn,{exact:!0,path:"/blog-detail",component:Xv}),o.jsx(Sn,{path:"*",component:Kv})]}))}Xi.createRoot(document.getElementById("root")).render(o.jsx(F.StrictMode,{children:o.jsx(Qf,{children:o.jsx(Zv,{})})}));
