(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))t(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&t(r)}).observe(document,{childList:!0,subtree:!0});function s(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(a){if(a.ep)return;a.ep=!0;const i=s(a);fetch(a.href,i)}})();function Oa(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Hc={exports:{}},Da={},Vc={exports:{}},F={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Et=Symbol.for("react.element"),jd=Symbol.for("react.portal"),Td=Symbol.for("react.fragment"),Ed=Symbol.for("react.strict_mode"),zd=Symbol.for("react.profiler"),Cd=Symbol.for("react.provider"),Md=Symbol.for("react.context"),Pd=Symbol.for("react.forward_ref"),Nd=Symbol.for("react.suspense"),Id=Symbol.for("react.memo"),Ad=Symbol.for("react.lazy"),rl=Symbol.iterator;function Ld(e){return e===null||typeof e!="object"?null:(e=rl&&e[rl]||e["@@iterator"],typeof e=="function"?e:null)}var Fc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Oc=Object.assign,Dc={};function Vs(e,n,s){this.props=e,this.context=n,this.refs=Dc,this.updater=s||Fc}Vs.prototype.isReactComponent={};Vs.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Vs.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Rc(){}Rc.prototype=Vs.prototype;function Xr(e,n,s){this.props=e,this.context=n,this.refs=Dc,this.updater=s||Fc}var Zr=Xr.prototype=new Rc;Zr.constructor=Xr;Oc(Zr,Vs.prototype);Zr.isPureReactComponent=!0;var ol=Array.isArray,Bc=Object.prototype.hasOwnProperty,Jr={current:null},$c={key:!0,ref:!0,__self:!0,__source:!0};function Uc(e,n,s){var t,a={},i=null,r=null;if(n!=null)for(t in n.ref!==void 0&&(r=n.ref),n.key!==void 0&&(i=""+n.key),n)Bc.call(n,t)&&!$c.hasOwnProperty(t)&&(a[t]=n[t]);var o=arguments.length-2;if(o===1)a.children=s;else if(1<o){for(var c=Array(o),p=0;p<o;p++)c[p]=arguments[p+2];a.children=c}if(e&&e.defaultProps)for(t in o=e.defaultProps,o)a[t]===void 0&&(a[t]=o[t]);return{$$typeof:Et,type:e,key:i,ref:r,props:a,_owner:Jr.current}}function Hd(e,n){return{$$typeof:Et,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function eo(e){return typeof e=="object"&&e!==null&&e.$$typeof===Et}function Vd(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(s){return n[s]})}var ll=/\/+/g;function mi(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Vd(""+e.key):n.toString(36)}function Zt(e,n,s,t,a){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(i){case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case Et:case jd:r=!0}}if(r)return r=e,a=a(r),e=t===""?"."+mi(r,0):t,ol(a)?(s="",e!=null&&(s=e.replace(ll,"$&/")+"/"),Zt(a,n,s,"",function(p){return p})):a!=null&&(eo(a)&&(a=Hd(a,s+(!a.key||r&&r.key===a.key?"":(""+a.key).replace(ll,"$&/")+"/")+e)),n.push(a)),1;if(r=0,t=t===""?".":t+":",ol(e))for(var o=0;o<e.length;o++){i=e[o];var c=t+mi(i,o);r+=Zt(i,n,s,c,a)}else if(c=Ld(e),typeof c=="function")for(e=c.call(e),o=0;!(i=e.next()).done;)i=i.value,c=t+mi(i,o++),r+=Zt(i,n,s,c,a);else if(i==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return r}function Nt(e,n,s){if(e==null)return e;var t=[],a=0;return Zt(e,t,"","",function(i){return n.call(s,i,a++)}),t}function Fd(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(s){(e._status===0||e._status===-1)&&(e._status=1,e._result=s)},function(s){(e._status===0||e._status===-1)&&(e._status=2,e._result=s)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var je={current:null},Jt={transition:null},Od={ReactCurrentDispatcher:je,ReactCurrentBatchConfig:Jt,ReactCurrentOwner:Jr};function Wc(){throw Error("act(...) is not supported in production builds of React.")}F.Children={map:Nt,forEach:function(e,n,s){Nt(e,function(){n.apply(this,arguments)},s)},count:function(e){var n=0;return Nt(e,function(){n++}),n},toArray:function(e){return Nt(e,function(n){return n})||[]},only:function(e){if(!eo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};F.Component=Vs;F.Fragment=Td;F.Profiler=zd;F.PureComponent=Xr;F.StrictMode=Ed;F.Suspense=Nd;F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Od;F.act=Wc;F.cloneElement=function(e,n,s){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var t=Oc({},e.props),a=e.key,i=e.ref,r=e._owner;if(n!=null){if(n.ref!==void 0&&(i=n.ref,r=Jr.current),n.key!==void 0&&(a=""+n.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(c in n)Bc.call(n,c)&&!$c.hasOwnProperty(c)&&(t[c]=n[c]===void 0&&o!==void 0?o[c]:n[c])}var c=arguments.length-2;if(c===1)t.children=s;else if(1<c){o=Array(c);for(var p=0;p<c;p++)o[p]=arguments[p+2];t.children=o}return{$$typeof:Et,type:e.type,key:a,ref:i,props:t,_owner:r}};F.createContext=function(e){return e={$$typeof:Md,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Cd,_context:e},e.Consumer=e};F.createElement=Uc;F.createFactory=function(e){var n=Uc.bind(null,e);return n.type=e,n};F.createRef=function(){return{current:null}};F.forwardRef=function(e){return{$$typeof:Pd,render:e}};F.isValidElement=eo;F.lazy=function(e){return{$$typeof:Ad,_payload:{_status:-1,_result:e},_init:Fd}};F.memo=function(e,n){return{$$typeof:Id,type:e,compare:n===void 0?null:n}};F.startTransition=function(e){var n=Jt.transition;Jt.transition={};try{e()}finally{Jt.transition=n}};F.unstable_act=Wc;F.useCallback=function(e,n){return je.current.useCallback(e,n)};F.useContext=function(e){return je.current.useContext(e)};F.useDebugValue=function(){};F.useDeferredValue=function(e){return je.current.useDeferredValue(e)};F.useEffect=function(e,n){return je.current.useEffect(e,n)};F.useId=function(){return je.current.useId()};F.useImperativeHandle=function(e,n,s){return je.current.useImperativeHandle(e,n,s)};F.useInsertionEffect=function(e,n){return je.current.useInsertionEffect(e,n)};F.useLayoutEffect=function(e,n){return je.current.useLayoutEffect(e,n)};F.useMemo=function(e,n){return je.current.useMemo(e,n)};F.useReducer=function(e,n,s){return je.current.useReducer(e,n,s)};F.useRef=function(e){return je.current.useRef(e)};F.useState=function(e){return je.current.useState(e)};F.useSyncExternalStore=function(e,n,s){return je.current.useSyncExternalStore(e,n,s)};F.useTransition=function(){return je.current.useTransition()};F.version="18.3.1";Vc.exports=F;var O=Vc.exports;const B=Oa(O);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dd=O,Rd=Symbol.for("react.element"),Bd=Symbol.for("react.fragment"),$d=Object.prototype.hasOwnProperty,Ud=Dd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Wd={key:!0,ref:!0,__self:!0,__source:!0};function Gc(e,n,s){var t,a={},i=null,r=null;s!==void 0&&(i=""+s),n.key!==void 0&&(i=""+n.key),n.ref!==void 0&&(r=n.ref);for(t in n)$d.call(n,t)&&!Wd.hasOwnProperty(t)&&(a[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps,n)a[t]===void 0&&(a[t]=n[t]);return{$$typeof:Rd,type:e,key:i,ref:r,props:a,_owner:Ud.current}}Da.Fragment=Bd;Da.jsx=Gc;Da.jsxs=Gc;Hc.exports=Da;var l=Hc.exports,Zi={},qc={exports:{}},Oe={},Qc={exports:{}},Yc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(b,z){var E=b.length;b.push(z);e:for(;0<E;){var I=E-1>>>1,A=b[I];if(0<a(A,z))b[I]=z,b[E]=A,E=I;else break e}}function s(b){return b.length===0?null:b[0]}function t(b){if(b.length===0)return null;var z=b[0],E=b.pop();if(E!==z){b[0]=E;e:for(var I=0,A=b.length,$=A>>>1;I<$;){var Z=2*(I+1)-1,he=b[Z],re=Z+1,fe=b[re];if(0>a(he,E))re<A&&0>a(fe,he)?(b[I]=fe,b[re]=E,I=re):(b[I]=he,b[Z]=E,I=Z);else if(re<A&&0>a(fe,E))b[I]=fe,b[re]=E,I=re;else break e}}return z}function a(b,z){var E=b.sortIndex-z.sortIndex;return E!==0?E:b.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var r=Date,o=r.now();e.unstable_now=function(){return r.now()-o}}var c=[],p=[],u=1,d=null,h=3,v=!1,_=!1,y=!1,M=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(b){for(var z=s(p);z!==null;){if(z.callback===null)t(p);else if(z.startTime<=b)t(p),z.sortIndex=z.expirationTime,n(c,z);else break;z=s(p)}}function w(b){if(y=!1,g(b),!_)if(s(c)!==null)_=!0,V(x);else{var z=s(p);z!==null&&Q(w,z.startTime-b)}}function x(b,z){_=!1,y&&(y=!1,m(k),k=-1),v=!0;var E=h;try{for(g(z),d=s(c);d!==null&&(!(d.expirationTime>z)||b&&!P());){var I=d.callback;if(typeof I=="function"){d.callback=null,h=d.priorityLevel;var A=I(d.expirationTime<=z);z=e.unstable_now(),typeof A=="function"?d.callback=A:d===s(c)&&t(c),g(z)}else t(c);d=s(c)}if(d!==null)var $=!0;else{var Z=s(p);Z!==null&&Q(w,Z.startTime-z),$=!1}return $}finally{d=null,h=E,v=!1}}var T=!1,S=null,k=-1,L=5,j=-1;function P(){return!(e.unstable_now()-j<L)}function H(){if(S!==null){var b=e.unstable_now();j=b;var z=!0;try{z=S(!0,b)}finally{z?D():(T=!1,S=null)}}else T=!1}var D;if(typeof f=="function")D=function(){f(H)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,G=q.port2;q.port1.onmessage=H,D=function(){G.postMessage(null)}}else D=function(){M(H,0)};function V(b){S=b,T||(T=!0,D())}function Q(b,z){k=M(function(){b(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(b){b.callback=null},e.unstable_continueExecution=function(){_||v||(_=!0,V(x))},e.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<b?Math.floor(1e3/b):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return s(c)},e.unstable_next=function(b){switch(h){case 1:case 2:case 3:var z=3;break;default:z=h}var E=h;h=z;try{return b()}finally{h=E}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(b,z){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var E=h;h=b;try{return z()}finally{h=E}},e.unstable_scheduleCallback=function(b,z,E){var I=e.unstable_now();switch(typeof E=="object"&&E!==null?(E=E.delay,E=typeof E=="number"&&0<E?I+E:I):E=I,b){case 1:var A=-1;break;case 2:A=250;break;case 5:A=1073741823;break;case 4:A=1e4;break;default:A=5e3}return A=E+A,b={id:u++,callback:z,priorityLevel:b,startTime:E,expirationTime:A,sortIndex:-1},E>I?(b.sortIndex=E,n(p,b),s(c)===null&&b===s(p)&&(y?(m(k),k=-1):y=!0,Q(w,E-I))):(b.sortIndex=A,n(c,b),_||v||(_=!0,V(x))),b},e.unstable_shouldYield=P,e.unstable_wrapCallback=function(b){var z=h;return function(){var E=h;h=z;try{return b.apply(this,arguments)}finally{h=E}}}})(Yc);Qc.exports=Yc;var Gd=Qc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qd=O,Fe=Gd;function C(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,s=1;s<arguments.length;s++)n+="&args[]="+encodeURIComponent(arguments[s]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Kc=new Set,pt={};function as(e,n){Cs(e,n),Cs(e+"Capture",n)}function Cs(e,n){for(pt[e]=n,e=0;e<n.length;e++)Kc.add(n[e])}var gn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ji=Object.prototype.hasOwnProperty,Qd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,cl={},pl={};function Yd(e){return Ji.call(pl,e)?!0:Ji.call(cl,e)?!1:Qd.test(e)?pl[e]=!0:(cl[e]=!0,!1)}function Kd(e,n,s,t){if(s!==null&&s.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return t?!1:s!==null?!s.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Xd(e,n,s,t){if(n===null||typeof n>"u"||Kd(e,n,s,t))return!0;if(t)return!1;if(s!==null)switch(s.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function Te(e,n,s,t,a,i,r){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=t,this.attributeNamespace=a,this.mustUseProperty=s,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=r}var ve={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ve[e]=new Te(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];ve[n]=new Te(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ve[e]=new Te(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ve[e]=new Te(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ve[e]=new Te(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ve[e]=new Te(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ve[e]=new Te(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ve[e]=new Te(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ve[e]=new Te(e,5,!1,e.toLowerCase(),null,!1,!1)});var no=/[\-:]([a-z])/g;function so(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(no,so);ve[n]=new Te(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(no,so);ve[n]=new Te(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(no,so);ve[n]=new Te(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ve[e]=new Te(e,1,!1,e.toLowerCase(),null,!1,!1)});ve.xlinkHref=new Te("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ve[e]=new Te(e,1,!1,e.toLowerCase(),null,!0,!0)});function to(e,n,s,t){var a=ve.hasOwnProperty(n)?ve[n]:null;(a!==null?a.type!==0:t||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Xd(n,s,a,t)&&(s=null),t||a===null?Yd(n)&&(s===null?e.removeAttribute(n):e.setAttribute(n,""+s)):a.mustUseProperty?e[a.propertyName]=s===null?a.type===3?!1:"":s:(n=a.attributeName,t=a.attributeNamespace,s===null?e.removeAttribute(n):(a=a.type,s=a===3||a===4&&s===!0?"":""+s,t?e.setAttributeNS(t,n,s):e.setAttribute(n,s))))}var yn=qd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,It=Symbol.for("react.element"),ps=Symbol.for("react.portal"),us=Symbol.for("react.fragment"),ao=Symbol.for("react.strict_mode"),er=Symbol.for("react.profiler"),Xc=Symbol.for("react.provider"),Zc=Symbol.for("react.context"),io=Symbol.for("react.forward_ref"),nr=Symbol.for("react.suspense"),sr=Symbol.for("react.suspense_list"),ro=Symbol.for("react.memo"),kn=Symbol.for("react.lazy"),Jc=Symbol.for("react.offscreen"),ul=Symbol.iterator;function Rs(e){return e===null||typeof e!="object"?null:(e=ul&&e[ul]||e["@@iterator"],typeof e=="function"?e:null)}var se=Object.assign,gi;function Ks(e){if(gi===void 0)try{throw Error()}catch(s){var n=s.stack.trim().match(/\n( *(at )?)/);gi=n&&n[1]||""}return`
`+gi+e}var vi=!1;function _i(e,n){if(!e||vi)return"";vi=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(p){var t=p}Reflect.construct(e,[],n)}else{try{n.call()}catch(p){t=p}e.call(n.prototype)}else{try{throw Error()}catch(p){t=p}e()}}catch(p){if(p&&t&&typeof p.stack=="string"){for(var a=p.stack.split(`
`),i=t.stack.split(`
`),r=a.length-1,o=i.length-1;1<=r&&0<=o&&a[r]!==i[o];)o--;for(;1<=r&&0<=o;r--,o--)if(a[r]!==i[o]){if(r!==1||o!==1)do if(r--,o--,0>o||a[r]!==i[o]){var c=`
`+a[r].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=r&&0<=o);break}}}finally{vi=!1,Error.prepareStackTrace=s}return(e=e?e.displayName||e.name:"")?Ks(e):""}function Zd(e){switch(e.tag){case 5:return Ks(e.type);case 16:return Ks("Lazy");case 13:return Ks("Suspense");case 19:return Ks("SuspenseList");case 0:case 2:case 15:return e=_i(e.type,!1),e;case 11:return e=_i(e.type.render,!1),e;case 1:return e=_i(e.type,!0),e;default:return""}}function tr(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case us:return"Fragment";case ps:return"Portal";case er:return"Profiler";case ao:return"StrictMode";case nr:return"Suspense";case sr:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Zc:return(e.displayName||"Context")+".Consumer";case Xc:return(e._context.displayName||"Context")+".Provider";case io:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ro:return n=e.displayName||null,n!==null?n:tr(e.type)||"Memo";case kn:n=e._payload,e=e._init;try{return tr(e(n))}catch{}}return null}function Jd(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return tr(n);case 8:return n===ao?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Fn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ep(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function eh(e){var n=ep(e)?"checked":"value",s=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),t=""+e[n];if(!e.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var a=s.get,i=s.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return a.call(this)},set:function(r){t=""+r,i.call(this,r)}}),Object.defineProperty(e,n,{enumerable:s.enumerable}),{getValue:function(){return t},setValue:function(r){t=""+r},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function At(e){e._valueTracker||(e._valueTracker=eh(e))}function np(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var s=n.getValue(),t="";return e&&(t=ep(e)?e.checked?"true":"false":e.value),e=t,e!==s?(n.setValue(e),!0):!1}function ua(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ar(e,n){var s=n.checked;return se({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:s??e._wrapperState.initialChecked})}function dl(e,n){var s=n.defaultValue==null?"":n.defaultValue,t=n.checked!=null?n.checked:n.defaultChecked;s=Fn(n.value!=null?n.value:s),e._wrapperState={initialChecked:t,initialValue:s,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function sp(e,n){n=n.checked,n!=null&&to(e,"checked",n,!1)}function ir(e,n){sp(e,n);var s=Fn(n.value),t=n.type;if(s!=null)t==="number"?(s===0&&e.value===""||e.value!=s)&&(e.value=""+s):e.value!==""+s&&(e.value=""+s);else if(t==="submit"||t==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?rr(e,n.type,s):n.hasOwnProperty("defaultValue")&&rr(e,n.type,Fn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function hl(e,n,s){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var t=n.type;if(!(t!=="submit"&&t!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,s||n===e.value||(e.value=n),e.defaultValue=n}s=e.name,s!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,s!==""&&(e.name=s)}function rr(e,n,s){(n!=="number"||ua(e.ownerDocument)!==e)&&(s==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+s&&(e.defaultValue=""+s))}var Xs=Array.isArray;function Ss(e,n,s,t){if(e=e.options,n){n={};for(var a=0;a<s.length;a++)n["$"+s[a]]=!0;for(s=0;s<e.length;s++)a=n.hasOwnProperty("$"+e[s].value),e[s].selected!==a&&(e[s].selected=a),a&&t&&(e[s].defaultSelected=!0)}else{for(s=""+Fn(s),n=null,a=0;a<e.length;a++){if(e[a].value===s){e[a].selected=!0,t&&(e[a].defaultSelected=!0);return}n!==null||e[a].disabled||(n=e[a])}n!==null&&(n.selected=!0)}}function or(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(C(91));return se({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function fl(e,n){var s=n.value;if(s==null){if(s=n.children,n=n.defaultValue,s!=null){if(n!=null)throw Error(C(92));if(Xs(s)){if(1<s.length)throw Error(C(93));s=s[0]}n=s}n==null&&(n=""),s=n}e._wrapperState={initialValue:Fn(s)}}function tp(e,n){var s=Fn(n.value),t=Fn(n.defaultValue);s!=null&&(s=""+s,s!==e.value&&(e.value=s),n.defaultValue==null&&e.defaultValue!==s&&(e.defaultValue=s)),t!=null&&(e.defaultValue=""+t)}function ml(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function ap(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function lr(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?ap(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Lt,ip=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,s,t,a){MSApp.execUnsafeLocalFunction(function(){return e(n,s,t,a)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Lt=Lt||document.createElement("div"),Lt.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Lt.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function ut(e,n){if(n){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=n;return}}e.textContent=n}var et={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},nh=["Webkit","ms","Moz","O"];Object.keys(et).forEach(function(e){nh.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),et[n]=et[e]})});function rp(e,n,s){return n==null||typeof n=="boolean"||n===""?"":s||typeof n!="number"||n===0||et.hasOwnProperty(e)&&et[e]?(""+n).trim():n+"px"}function op(e,n){e=e.style;for(var s in n)if(n.hasOwnProperty(s)){var t=s.indexOf("--")===0,a=rp(s,n[s],t);s==="float"&&(s="cssFloat"),t?e.setProperty(s,a):e[s]=a}}var sh=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function cr(e,n){if(n){if(sh[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(C(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(C(61))}if(n.style!=null&&typeof n.style!="object")throw Error(C(62))}}function pr(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ur=null;function oo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var dr=null,ks=null,bs=null;function gl(e){if(e=Mt(e)){if(typeof dr!="function")throw Error(C(280));var n=e.stateNode;n&&(n=Wa(n),dr(e.stateNode,e.type,n))}}function lp(e){ks?bs?bs.push(e):bs=[e]:ks=e}function cp(){if(ks){var e=ks,n=bs;if(bs=ks=null,gl(e),n)for(e=0;e<n.length;e++)gl(n[e])}}function pp(e,n){return e(n)}function up(){}var wi=!1;function dp(e,n,s){if(wi)return e(n,s);wi=!0;try{return pp(e,n,s)}finally{wi=!1,(ks!==null||bs!==null)&&(up(),cp())}}function dt(e,n){var s=e.stateNode;if(s===null)return null;var t=Wa(s);if(t===null)return null;s=t[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(t=!t.disabled)||(e=e.type,t=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!t;break e;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(C(231,n,typeof s));return s}var hr=!1;if(gn)try{var Bs={};Object.defineProperty(Bs,"passive",{get:function(){hr=!0}}),window.addEventListener("test",Bs,Bs),window.removeEventListener("test",Bs,Bs)}catch{hr=!1}function th(e,n,s,t,a,i,r,o,c){var p=Array.prototype.slice.call(arguments,3);try{n.apply(s,p)}catch(u){this.onError(u)}}var nt=!1,da=null,ha=!1,fr=null,ah={onError:function(e){nt=!0,da=e}};function ih(e,n,s,t,a,i,r,o,c){nt=!1,da=null,th.apply(ah,arguments)}function rh(e,n,s,t,a,i,r,o,c){if(ih.apply(this,arguments),nt){if(nt){var p=da;nt=!1,da=null}else throw Error(C(198));ha||(ha=!0,fr=p)}}function is(e){var n=e,s=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(s=n.return),e=n.return;while(e)}return n.tag===3?s:null}function hp(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function vl(e){if(is(e)!==e)throw Error(C(188))}function oh(e){var n=e.alternate;if(!n){if(n=is(e),n===null)throw Error(C(188));return n!==e?null:e}for(var s=e,t=n;;){var a=s.return;if(a===null)break;var i=a.alternate;if(i===null){if(t=a.return,t!==null){s=t;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===s)return vl(a),e;if(i===t)return vl(a),n;i=i.sibling}throw Error(C(188))}if(s.return!==t.return)s=a,t=i;else{for(var r=!1,o=a.child;o;){if(o===s){r=!0,s=a,t=i;break}if(o===t){r=!0,t=a,s=i;break}o=o.sibling}if(!r){for(o=i.child;o;){if(o===s){r=!0,s=i,t=a;break}if(o===t){r=!0,t=i,s=a;break}o=o.sibling}if(!r)throw Error(C(189))}}if(s.alternate!==t)throw Error(C(190))}if(s.tag!==3)throw Error(C(188));return s.stateNode.current===s?e:n}function fp(e){return e=oh(e),e!==null?mp(e):null}function mp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=mp(e);if(n!==null)return n;e=e.sibling}return null}var gp=Fe.unstable_scheduleCallback,_l=Fe.unstable_cancelCallback,lh=Fe.unstable_shouldYield,ch=Fe.unstable_requestPaint,ae=Fe.unstable_now,ph=Fe.unstable_getCurrentPriorityLevel,lo=Fe.unstable_ImmediatePriority,vp=Fe.unstable_UserBlockingPriority,fa=Fe.unstable_NormalPriority,uh=Fe.unstable_LowPriority,_p=Fe.unstable_IdlePriority,Ra=null,rn=null;function dh(e){if(rn&&typeof rn.onCommitFiberRoot=="function")try{rn.onCommitFiberRoot(Ra,e,void 0,(e.current.flags&128)===128)}catch{}}var Je=Math.clz32?Math.clz32:mh,hh=Math.log,fh=Math.LN2;function mh(e){return e>>>=0,e===0?32:31-(hh(e)/fh|0)|0}var Ht=64,Vt=4194304;function Zs(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ma(e,n){var s=e.pendingLanes;if(s===0)return 0;var t=0,a=e.suspendedLanes,i=e.pingedLanes,r=s&268435455;if(r!==0){var o=r&~a;o!==0?t=Zs(o):(i&=r,i!==0&&(t=Zs(i)))}else r=s&~a,r!==0?t=Zs(r):i!==0&&(t=Zs(i));if(t===0)return 0;if(n!==0&&n!==t&&!(n&a)&&(a=t&-t,i=n&-n,a>=i||a===16&&(i&4194240)!==0))return n;if(t&4&&(t|=s&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=t;0<n;)s=31-Je(n),a=1<<s,t|=e[s],n&=~a;return t}function gh(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vh(e,n){for(var s=e.suspendedLanes,t=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes;0<i;){var r=31-Je(i),o=1<<r,c=a[r];c===-1?(!(o&s)||o&t)&&(a[r]=gh(o,n)):c<=n&&(e.expiredLanes|=o),i&=~o}}function mr(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function wp(){var e=Ht;return Ht<<=1,!(Ht&4194240)&&(Ht=64),e}function yi(e){for(var n=[],s=0;31>s;s++)n.push(e);return n}function zt(e,n,s){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Je(n),e[n]=s}function _h(e,n){var s=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var t=e.eventTimes;for(e=e.expirationTimes;0<s;){var a=31-Je(s),i=1<<a;n[a]=0,t[a]=-1,e[a]=-1,s&=~i}}function co(e,n){var s=e.entangledLanes|=n;for(e=e.entanglements;s;){var t=31-Je(s),a=1<<t;a&n|e[t]&n&&(e[t]|=n),s&=~a}}var U=0;function yp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var xp,po,Sp,kp,bp,gr=!1,Ft=[],Mn=null,Pn=null,Nn=null,ht=new Map,ft=new Map,jn=[],wh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wl(e,n){switch(e){case"focusin":case"focusout":Mn=null;break;case"dragenter":case"dragleave":Pn=null;break;case"mouseover":case"mouseout":Nn=null;break;case"pointerover":case"pointerout":ht.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ft.delete(n.pointerId)}}function $s(e,n,s,t,a,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:s,eventSystemFlags:t,nativeEvent:i,targetContainers:[a]},n!==null&&(n=Mt(n),n!==null&&po(n)),e):(e.eventSystemFlags|=t,n=e.targetContainers,a!==null&&n.indexOf(a)===-1&&n.push(a),e)}function yh(e,n,s,t,a){switch(n){case"focusin":return Mn=$s(Mn,e,n,s,t,a),!0;case"dragenter":return Pn=$s(Pn,e,n,s,t,a),!0;case"mouseover":return Nn=$s(Nn,e,n,s,t,a),!0;case"pointerover":var i=a.pointerId;return ht.set(i,$s(ht.get(i)||null,e,n,s,t,a)),!0;case"gotpointercapture":return i=a.pointerId,ft.set(i,$s(ft.get(i)||null,e,n,s,t,a)),!0}return!1}function jp(e){var n=Gn(e.target);if(n!==null){var s=is(n);if(s!==null){if(n=s.tag,n===13){if(n=hp(s),n!==null){e.blockedOn=n,bp(e.priority,function(){Sp(s)});return}}else if(n===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ea(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var s=vr(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(s===null){s=e.nativeEvent;var t=new s.constructor(s.type,s);ur=t,s.target.dispatchEvent(t),ur=null}else return n=Mt(s),n!==null&&po(n),e.blockedOn=s,!1;n.shift()}return!0}function yl(e,n,s){ea(e)&&s.delete(n)}function xh(){gr=!1,Mn!==null&&ea(Mn)&&(Mn=null),Pn!==null&&ea(Pn)&&(Pn=null),Nn!==null&&ea(Nn)&&(Nn=null),ht.forEach(yl),ft.forEach(yl)}function Us(e,n){e.blockedOn===n&&(e.blockedOn=null,gr||(gr=!0,Fe.unstable_scheduleCallback(Fe.unstable_NormalPriority,xh)))}function mt(e){function n(a){return Us(a,e)}if(0<Ft.length){Us(Ft[0],e);for(var s=1;s<Ft.length;s++){var t=Ft[s];t.blockedOn===e&&(t.blockedOn=null)}}for(Mn!==null&&Us(Mn,e),Pn!==null&&Us(Pn,e),Nn!==null&&Us(Nn,e),ht.forEach(n),ft.forEach(n),s=0;s<jn.length;s++)t=jn[s],t.blockedOn===e&&(t.blockedOn=null);for(;0<jn.length&&(s=jn[0],s.blockedOn===null);)jp(s),s.blockedOn===null&&jn.shift()}var js=yn.ReactCurrentBatchConfig,ga=!0;function Sh(e,n,s,t){var a=U,i=js.transition;js.transition=null;try{U=1,uo(e,n,s,t)}finally{U=a,js.transition=i}}function kh(e,n,s,t){var a=U,i=js.transition;js.transition=null;try{U=4,uo(e,n,s,t)}finally{U=a,js.transition=i}}function uo(e,n,s,t){if(ga){var a=vr(e,n,s,t);if(a===null)Mi(e,n,t,va,s),wl(e,t);else if(yh(a,e,n,s,t))t.stopPropagation();else if(wl(e,t),n&4&&-1<wh.indexOf(e)){for(;a!==null;){var i=Mt(a);if(i!==null&&xp(i),i=vr(e,n,s,t),i===null&&Mi(e,n,t,va,s),i===a)break;a=i}a!==null&&t.stopPropagation()}else Mi(e,n,t,null,s)}}var va=null;function vr(e,n,s,t){if(va=null,e=oo(t),e=Gn(e),e!==null)if(n=is(e),n===null)e=null;else if(s=n.tag,s===13){if(e=hp(n),e!==null)return e;e=null}else if(s===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return va=e,null}function Tp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ph()){case lo:return 1;case vp:return 4;case fa:case uh:return 16;case _p:return 536870912;default:return 16}default:return 16}}var En=null,ho=null,na=null;function Ep(){if(na)return na;var e,n=ho,s=n.length,t,a="value"in En?En.value:En.textContent,i=a.length;for(e=0;e<s&&n[e]===a[e];e++);var r=s-e;for(t=1;t<=r&&n[s-t]===a[i-t];t++);return na=a.slice(e,1<t?1-t:void 0)}function sa(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Ot(){return!0}function xl(){return!1}function De(e){function n(s,t,a,i,r){this._reactName=s,this._targetInst=a,this.type=t,this.nativeEvent=i,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(s=e[o],this[o]=s?s(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ot:xl,this.isPropagationStopped=xl,this}return se(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Ot)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Ot)},persist:function(){},isPersistent:Ot}),n}var Fs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fo=De(Fs),Ct=se({},Fs,{view:0,detail:0}),bh=De(Ct),xi,Si,Ws,Ba=se({},Ct,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ws&&(Ws&&e.type==="mousemove"?(xi=e.screenX-Ws.screenX,Si=e.screenY-Ws.screenY):Si=xi=0,Ws=e),xi)},movementY:function(e){return"movementY"in e?e.movementY:Si}}),Sl=De(Ba),jh=se({},Ba,{dataTransfer:0}),Th=De(jh),Eh=se({},Ct,{relatedTarget:0}),ki=De(Eh),zh=se({},Fs,{animationName:0,elapsedTime:0,pseudoElement:0}),Ch=De(zh),Mh=se({},Fs,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ph=De(Mh),Nh=se({},Fs,{data:0}),kl=De(Nh),Ih={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ah={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Lh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Hh(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Lh[e])?!!n[e]:!1}function mo(){return Hh}var Vh=se({},Ct,{key:function(e){if(e.key){var n=Ih[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=sa(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ah[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mo,charCode:function(e){return e.type==="keypress"?sa(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?sa(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Fh=De(Vh),Oh=se({},Ba,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bl=De(Oh),Dh=se({},Ct,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mo}),Rh=De(Dh),Bh=se({},Fs,{propertyName:0,elapsedTime:0,pseudoElement:0}),$h=De(Bh),Uh=se({},Ba,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Wh=De(Uh),Gh=[9,13,27,32],go=gn&&"CompositionEvent"in window,st=null;gn&&"documentMode"in document&&(st=document.documentMode);var qh=gn&&"TextEvent"in window&&!st,zp=gn&&(!go||st&&8<st&&11>=st),jl=" ",Tl=!1;function Cp(e,n){switch(e){case"keyup":return Gh.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ds=!1;function Qh(e,n){switch(e){case"compositionend":return Mp(n);case"keypress":return n.which!==32?null:(Tl=!0,jl);case"textInput":return e=n.data,e===jl&&Tl?null:e;default:return null}}function Yh(e,n){if(ds)return e==="compositionend"||!go&&Cp(e,n)?(e=Ep(),na=ho=En=null,ds=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return zp&&n.locale!=="ko"?null:n.data;default:return null}}var Kh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function El(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Kh[e.type]:n==="textarea"}function Pp(e,n,s,t){lp(t),n=_a(n,"onChange"),0<n.length&&(s=new fo("onChange","change",null,s,t),e.push({event:s,listeners:n}))}var tt=null,gt=null;function Xh(e){Bp(e,0)}function $a(e){var n=ms(e);if(np(n))return e}function Zh(e,n){if(e==="change")return n}var Np=!1;if(gn){var bi;if(gn){var ji="oninput"in document;if(!ji){var zl=document.createElement("div");zl.setAttribute("oninput","return;"),ji=typeof zl.oninput=="function"}bi=ji}else bi=!1;Np=bi&&(!document.documentMode||9<document.documentMode)}function Cl(){tt&&(tt.detachEvent("onpropertychange",Ip),gt=tt=null)}function Ip(e){if(e.propertyName==="value"&&$a(gt)){var n=[];Pp(n,gt,e,oo(e)),dp(Xh,n)}}function Jh(e,n,s){e==="focusin"?(Cl(),tt=n,gt=s,tt.attachEvent("onpropertychange",Ip)):e==="focusout"&&Cl()}function ef(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return $a(gt)}function nf(e,n){if(e==="click")return $a(n)}function sf(e,n){if(e==="input"||e==="change")return $a(n)}function tf(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var nn=typeof Object.is=="function"?Object.is:tf;function vt(e,n){if(nn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var s=Object.keys(e),t=Object.keys(n);if(s.length!==t.length)return!1;for(t=0;t<s.length;t++){var a=s[t];if(!Ji.call(n,a)||!nn(e[a],n[a]))return!1}return!0}function Ml(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Pl(e,n){var s=Ml(e);e=0;for(var t;s;){if(s.nodeType===3){if(t=e+s.textContent.length,e<=n&&t>=n)return{node:s,offset:n-e};e=t}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=Ml(s)}}function Ap(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Ap(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Lp(){for(var e=window,n=ua();n instanceof e.HTMLIFrameElement;){try{var s=typeof n.contentWindow.location.href=="string"}catch{s=!1}if(s)e=n.contentWindow;else break;n=ua(e.document)}return n}function vo(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function af(e){var n=Lp(),s=e.focusedElem,t=e.selectionRange;if(n!==s&&s&&s.ownerDocument&&Ap(s.ownerDocument.documentElement,s)){if(t!==null&&vo(s)){if(n=t.start,e=t.end,e===void 0&&(e=n),"selectionStart"in s)s.selectionStart=n,s.selectionEnd=Math.min(e,s.value.length);else if(e=(n=s.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var a=s.textContent.length,i=Math.min(t.start,a);t=t.end===void 0?i:Math.min(t.end,a),!e.extend&&i>t&&(a=t,t=i,i=a),a=Pl(s,i);var r=Pl(s,t);a&&r&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==r.node||e.focusOffset!==r.offset)&&(n=n.createRange(),n.setStart(a.node,a.offset),e.removeAllRanges(),i>t?(e.addRange(n),e.extend(r.node,r.offset)):(n.setEnd(r.node,r.offset),e.addRange(n)))}}for(n=[],e=s;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<n.length;s++)e=n[s],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var rf=gn&&"documentMode"in document&&11>=document.documentMode,hs=null,_r=null,at=null,wr=!1;function Nl(e,n,s){var t=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;wr||hs==null||hs!==ua(t)||(t=hs,"selectionStart"in t&&vo(t)?t={start:t.selectionStart,end:t.selectionEnd}:(t=(t.ownerDocument&&t.ownerDocument.defaultView||window).getSelection(),t={anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}),at&&vt(at,t)||(at=t,t=_a(_r,"onSelect"),0<t.length&&(n=new fo("onSelect","select",null,n,s),e.push({event:n,listeners:t}),n.target=hs)))}function Dt(e,n){var s={};return s[e.toLowerCase()]=n.toLowerCase(),s["Webkit"+e]="webkit"+n,s["Moz"+e]="moz"+n,s}var fs={animationend:Dt("Animation","AnimationEnd"),animationiteration:Dt("Animation","AnimationIteration"),animationstart:Dt("Animation","AnimationStart"),transitionend:Dt("Transition","TransitionEnd")},Ti={},Hp={};gn&&(Hp=document.createElement("div").style,"AnimationEvent"in window||(delete fs.animationend.animation,delete fs.animationiteration.animation,delete fs.animationstart.animation),"TransitionEvent"in window||delete fs.transitionend.transition);function Ua(e){if(Ti[e])return Ti[e];if(!fs[e])return e;var n=fs[e],s;for(s in n)if(n.hasOwnProperty(s)&&s in Hp)return Ti[e]=n[s];return e}var Vp=Ua("animationend"),Fp=Ua("animationiteration"),Op=Ua("animationstart"),Dp=Ua("transitionend"),Rp=new Map,Il="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Dn(e,n){Rp.set(e,n),as(n,[e])}for(var Ei=0;Ei<Il.length;Ei++){var zi=Il[Ei],of=zi.toLowerCase(),lf=zi[0].toUpperCase()+zi.slice(1);Dn(of,"on"+lf)}Dn(Vp,"onAnimationEnd");Dn(Fp,"onAnimationIteration");Dn(Op,"onAnimationStart");Dn("dblclick","onDoubleClick");Dn("focusin","onFocus");Dn("focusout","onBlur");Dn(Dp,"onTransitionEnd");Cs("onMouseEnter",["mouseout","mouseover"]);Cs("onMouseLeave",["mouseout","mouseover"]);Cs("onPointerEnter",["pointerout","pointerover"]);Cs("onPointerLeave",["pointerout","pointerover"]);as("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));as("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));as("onBeforeInput",["compositionend","keypress","textInput","paste"]);as("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));as("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));as("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Js="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Js));function Al(e,n,s){var t=e.type||"unknown-event";e.currentTarget=s,rh(t,n,void 0,e),e.currentTarget=null}function Bp(e,n){n=(n&4)!==0;for(var s=0;s<e.length;s++){var t=e[s],a=t.event;t=t.listeners;e:{var i=void 0;if(n)for(var r=t.length-1;0<=r;r--){var o=t[r],c=o.instance,p=o.currentTarget;if(o=o.listener,c!==i&&a.isPropagationStopped())break e;Al(a,o,p),i=c}else for(r=0;r<t.length;r++){if(o=t[r],c=o.instance,p=o.currentTarget,o=o.listener,c!==i&&a.isPropagationStopped())break e;Al(a,o,p),i=c}}}if(ha)throw e=fr,ha=!1,fr=null,e}function K(e,n){var s=n[br];s===void 0&&(s=n[br]=new Set);var t=e+"__bubble";s.has(t)||($p(n,e,2,!1),s.add(t))}function Ci(e,n,s){var t=0;n&&(t|=4),$p(s,e,t,n)}var Rt="_reactListening"+Math.random().toString(36).slice(2);function _t(e){if(!e[Rt]){e[Rt]=!0,Kc.forEach(function(s){s!=="selectionchange"&&(cf.has(s)||Ci(s,!1,e),Ci(s,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Rt]||(n[Rt]=!0,Ci("selectionchange",!1,n))}}function $p(e,n,s,t){switch(Tp(n)){case 1:var a=Sh;break;case 4:a=kh;break;default:a=uo}s=a.bind(null,n,s,e),a=void 0,!hr||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(a=!0),t?a!==void 0?e.addEventListener(n,s,{capture:!0,passive:a}):e.addEventListener(n,s,!0):a!==void 0?e.addEventListener(n,s,{passive:a}):e.addEventListener(n,s,!1)}function Mi(e,n,s,t,a){var i=t;if(!(n&1)&&!(n&2)&&t!==null)e:for(;;){if(t===null)return;var r=t.tag;if(r===3||r===4){var o=t.stateNode.containerInfo;if(o===a||o.nodeType===8&&o.parentNode===a)break;if(r===4)for(r=t.return;r!==null;){var c=r.tag;if((c===3||c===4)&&(c=r.stateNode.containerInfo,c===a||c.nodeType===8&&c.parentNode===a))return;r=r.return}for(;o!==null;){if(r=Gn(o),r===null)return;if(c=r.tag,c===5||c===6){t=i=r;continue e}o=o.parentNode}}t=t.return}dp(function(){var p=i,u=oo(s),d=[];e:{var h=Rp.get(e);if(h!==void 0){var v=fo,_=e;switch(e){case"keypress":if(sa(s)===0)break e;case"keydown":case"keyup":v=Fh;break;case"focusin":_="focus",v=ki;break;case"focusout":_="blur",v=ki;break;case"beforeblur":case"afterblur":v=ki;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Sl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Th;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Rh;break;case Vp:case Fp:case Op:v=Ch;break;case Dp:v=$h;break;case"scroll":v=bh;break;case"wheel":v=Wh;break;case"copy":case"cut":case"paste":v=Ph;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=bl}var y=(n&4)!==0,M=!y&&e==="scroll",m=y?h!==null?h+"Capture":null:h;y=[];for(var f=p,g;f!==null;){g=f;var w=g.stateNode;if(g.tag===5&&w!==null&&(g=w,m!==null&&(w=dt(f,m),w!=null&&y.push(wt(f,w,g)))),M)break;f=f.return}0<y.length&&(h=new v(h,_,null,s,u),d.push({event:h,listeners:y}))}}if(!(n&7)){e:{if(h=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",h&&s!==ur&&(_=s.relatedTarget||s.fromElement)&&(Gn(_)||_[vn]))break e;if((v||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,v?(_=s.relatedTarget||s.toElement,v=p,_=_?Gn(_):null,_!==null&&(M=is(_),_!==M||_.tag!==5&&_.tag!==6)&&(_=null)):(v=null,_=p),v!==_)){if(y=Sl,w="onMouseLeave",m="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(y=bl,w="onPointerLeave",m="onPointerEnter",f="pointer"),M=v==null?h:ms(v),g=_==null?h:ms(_),h=new y(w,f+"leave",v,s,u),h.target=M,h.relatedTarget=g,w=null,Gn(u)===p&&(y=new y(m,f+"enter",_,s,u),y.target=g,y.relatedTarget=M,w=y),M=w,v&&_)n:{for(y=v,m=_,f=0,g=y;g;g=cs(g))f++;for(g=0,w=m;w;w=cs(w))g++;for(;0<f-g;)y=cs(y),f--;for(;0<g-f;)m=cs(m),g--;for(;f--;){if(y===m||m!==null&&y===m.alternate)break n;y=cs(y),m=cs(m)}y=null}else y=null;v!==null&&Ll(d,h,v,y,!1),_!==null&&M!==null&&Ll(d,M,_,y,!0)}}e:{if(h=p?ms(p):window,v=h.nodeName&&h.nodeName.toLowerCase(),v==="select"||v==="input"&&h.type==="file")var x=Zh;else if(El(h))if(Np)x=sf;else{x=ef;var T=Jh}else(v=h.nodeName)&&v.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(x=nf);if(x&&(x=x(e,p))){Pp(d,x,s,u);break e}T&&T(e,h,p),e==="focusout"&&(T=h._wrapperState)&&T.controlled&&h.type==="number"&&rr(h,"number",h.value)}switch(T=p?ms(p):window,e){case"focusin":(El(T)||T.contentEditable==="true")&&(hs=T,_r=p,at=null);break;case"focusout":at=_r=hs=null;break;case"mousedown":wr=!0;break;case"contextmenu":case"mouseup":case"dragend":wr=!1,Nl(d,s,u);break;case"selectionchange":if(rf)break;case"keydown":case"keyup":Nl(d,s,u)}var S;if(go)e:{switch(e){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else ds?Cp(e,s)&&(k="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(k="onCompositionStart");k&&(zp&&s.locale!=="ko"&&(ds||k!=="onCompositionStart"?k==="onCompositionEnd"&&ds&&(S=Ep()):(En=u,ho="value"in En?En.value:En.textContent,ds=!0)),T=_a(p,k),0<T.length&&(k=new kl(k,e,null,s,u),d.push({event:k,listeners:T}),S?k.data=S:(S=Mp(s),S!==null&&(k.data=S)))),(S=qh?Qh(e,s):Yh(e,s))&&(p=_a(p,"onBeforeInput"),0<p.length&&(u=new kl("onBeforeInput","beforeinput",null,s,u),d.push({event:u,listeners:p}),u.data=S))}Bp(d,n)})}function wt(e,n,s){return{instance:e,listener:n,currentTarget:s}}function _a(e,n){for(var s=n+"Capture",t=[];e!==null;){var a=e,i=a.stateNode;a.tag===5&&i!==null&&(a=i,i=dt(e,s),i!=null&&t.unshift(wt(e,i,a)),i=dt(e,n),i!=null&&t.push(wt(e,i,a))),e=e.return}return t}function cs(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ll(e,n,s,t,a){for(var i=n._reactName,r=[];s!==null&&s!==t;){var o=s,c=o.alternate,p=o.stateNode;if(c!==null&&c===t)break;o.tag===5&&p!==null&&(o=p,a?(c=dt(s,i),c!=null&&r.unshift(wt(s,c,o))):a||(c=dt(s,i),c!=null&&r.push(wt(s,c,o)))),s=s.return}r.length!==0&&e.push({event:n,listeners:r})}var pf=/\r\n?/g,uf=/\u0000|\uFFFD/g;function Hl(e){return(typeof e=="string"?e:""+e).replace(pf,`
`).replace(uf,"")}function Bt(e,n,s){if(n=Hl(n),Hl(e)!==n&&s)throw Error(C(425))}function wa(){}var yr=null,xr=null;function Sr(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var kr=typeof setTimeout=="function"?setTimeout:void 0,df=typeof clearTimeout=="function"?clearTimeout:void 0,Vl=typeof Promise=="function"?Promise:void 0,hf=typeof queueMicrotask=="function"?queueMicrotask:typeof Vl<"u"?function(e){return Vl.resolve(null).then(e).catch(ff)}:kr;function ff(e){setTimeout(function(){throw e})}function Pi(e,n){var s=n,t=0;do{var a=s.nextSibling;if(e.removeChild(s),a&&a.nodeType===8)if(s=a.data,s==="/$"){if(t===0){e.removeChild(a),mt(n);return}t--}else s!=="$"&&s!=="$?"&&s!=="$!"||t++;s=a}while(s);mt(n)}function In(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Fl(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"){if(n===0)return e;n--}else s==="/$"&&n++}e=e.previousSibling}return null}var Os=Math.random().toString(36).slice(2),an="__reactFiber$"+Os,yt="__reactProps$"+Os,vn="__reactContainer$"+Os,br="__reactEvents$"+Os,mf="__reactListeners$"+Os,gf="__reactHandles$"+Os;function Gn(e){var n=e[an];if(n)return n;for(var s=e.parentNode;s;){if(n=s[vn]||s[an]){if(s=n.alternate,n.child!==null||s!==null&&s.child!==null)for(e=Fl(e);e!==null;){if(s=e[an])return s;e=Fl(e)}return n}e=s,s=e.parentNode}return null}function Mt(e){return e=e[an]||e[vn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ms(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function Wa(e){return e[yt]||null}var jr=[],gs=-1;function Rn(e){return{current:e}}function X(e){0>gs||(e.current=jr[gs],jr[gs]=null,gs--)}function Y(e,n){gs++,jr[gs]=e.current,e.current=n}var On={},xe=Rn(On),Me=Rn(!1),Zn=On;function Ms(e,n){var s=e.type.contextTypes;if(!s)return On;var t=e.stateNode;if(t&&t.__reactInternalMemoizedUnmaskedChildContext===n)return t.__reactInternalMemoizedMaskedChildContext;var a={},i;for(i in s)a[i]=n[i];return t&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=a),a}function Pe(e){return e=e.childContextTypes,e!=null}function ya(){X(Me),X(xe)}function Ol(e,n,s){if(xe.current!==On)throw Error(C(168));Y(xe,n),Y(Me,s)}function Up(e,n,s){var t=e.stateNode;if(n=n.childContextTypes,typeof t.getChildContext!="function")return s;t=t.getChildContext();for(var a in t)if(!(a in n))throw Error(C(108,Jd(e)||"Unknown",a));return se({},s,t)}function xa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||On,Zn=xe.current,Y(xe,e),Y(Me,Me.current),!0}function Dl(e,n,s){var t=e.stateNode;if(!t)throw Error(C(169));s?(e=Up(e,n,Zn),t.__reactInternalMemoizedMergedChildContext=e,X(Me),X(xe),Y(xe,e)):X(Me),Y(Me,s)}var un=null,Ga=!1,Ni=!1;function Wp(e){un===null?un=[e]:un.push(e)}function vf(e){Ga=!0,Wp(e)}function Bn(){if(!Ni&&un!==null){Ni=!0;var e=0,n=U;try{var s=un;for(U=1;e<s.length;e++){var t=s[e];do t=t(!0);while(t!==null)}un=null,Ga=!1}catch(a){throw un!==null&&(un=un.slice(e+1)),gp(lo,Bn),a}finally{U=n,Ni=!1}}return null}var vs=[],_s=0,Sa=null,ka=0,$e=[],Ue=0,Jn=null,dn=1,hn="";function Un(e,n){vs[_s++]=ka,vs[_s++]=Sa,Sa=e,ka=n}function Gp(e,n,s){$e[Ue++]=dn,$e[Ue++]=hn,$e[Ue++]=Jn,Jn=e;var t=dn;e=hn;var a=32-Je(t)-1;t&=~(1<<a),s+=1;var i=32-Je(n)+a;if(30<i){var r=a-a%5;i=(t&(1<<r)-1).toString(32),t>>=r,a-=r,dn=1<<32-Je(n)+a|s<<a|t,hn=i+e}else dn=1<<i|s<<a|t,hn=e}function _o(e){e.return!==null&&(Un(e,1),Gp(e,1,0))}function wo(e){for(;e===Sa;)Sa=vs[--_s],vs[_s]=null,ka=vs[--_s],vs[_s]=null;for(;e===Jn;)Jn=$e[--Ue],$e[Ue]=null,hn=$e[--Ue],$e[Ue]=null,dn=$e[--Ue],$e[Ue]=null}var Ve=null,Le=null,J=!1,Ze=null;function qp(e,n){var s=We(5,null,null,0);s.elementType="DELETED",s.stateNode=n,s.return=e,n=e.deletions,n===null?(e.deletions=[s],e.flags|=16):n.push(s)}function Rl(e,n){switch(e.tag){case 5:var s=e.type;return n=n.nodeType!==1||s.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Ve=e,Le=In(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Ve=e,Le=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(s=Jn!==null?{id:dn,overflow:hn}:null,e.memoizedState={dehydrated:n,treeContext:s,retryLane:1073741824},s=We(18,null,null,0),s.stateNode=n,s.return=e,e.child=s,Ve=e,Le=null,!0):!1;default:return!1}}function Tr(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Er(e){if(J){var n=Le;if(n){var s=n;if(!Rl(e,n)){if(Tr(e))throw Error(C(418));n=In(s.nextSibling);var t=Ve;n&&Rl(e,n)?qp(t,s):(e.flags=e.flags&-4097|2,J=!1,Ve=e)}}else{if(Tr(e))throw Error(C(418));e.flags=e.flags&-4097|2,J=!1,Ve=e}}}function Bl(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ve=e}function $t(e){if(e!==Ve)return!1;if(!J)return Bl(e),J=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Sr(e.type,e.memoizedProps)),n&&(n=Le)){if(Tr(e))throw Qp(),Error(C(418));for(;n;)qp(e,n),n=In(n.nextSibling)}if(Bl(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var s=e.data;if(s==="/$"){if(n===0){Le=In(e.nextSibling);break e}n--}else s!=="$"&&s!=="$!"&&s!=="$?"||n++}e=e.nextSibling}Le=null}}else Le=Ve?In(e.stateNode.nextSibling):null;return!0}function Qp(){for(var e=Le;e;)e=In(e.nextSibling)}function Ps(){Le=Ve=null,J=!1}function yo(e){Ze===null?Ze=[e]:Ze.push(e)}var _f=yn.ReactCurrentBatchConfig;function Gs(e,n,s){if(e=s.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(s._owner){if(s=s._owner,s){if(s.tag!==1)throw Error(C(309));var t=s.stateNode}if(!t)throw Error(C(147,e));var a=t,i=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(r){var o=a.refs;r===null?delete o[i]:o[i]=r},n._stringRef=i,n)}if(typeof e!="string")throw Error(C(284));if(!s._owner)throw Error(C(290,e))}return e}function Ut(e,n){throw e=Object.prototype.toString.call(n),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function $l(e){var n=e._init;return n(e._payload)}function Yp(e){function n(m,f){if(e){var g=m.deletions;g===null?(m.deletions=[f],m.flags|=16):g.push(f)}}function s(m,f){if(!e)return null;for(;f!==null;)n(m,f),f=f.sibling;return null}function t(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function a(m,f){return m=Vn(m,f),m.index=0,m.sibling=null,m}function i(m,f,g){return m.index=g,e?(g=m.alternate,g!==null?(g=g.index,g<f?(m.flags|=2,f):g):(m.flags|=2,f)):(m.flags|=1048576,f)}function r(m){return e&&m.alternate===null&&(m.flags|=2),m}function o(m,f,g,w){return f===null||f.tag!==6?(f=Oi(g,m.mode,w),f.return=m,f):(f=a(f,g),f.return=m,f)}function c(m,f,g,w){var x=g.type;return x===us?u(m,f,g.props.children,w,g.key):f!==null&&(f.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===kn&&$l(x)===f.type)?(w=a(f,g.props),w.ref=Gs(m,f,g),w.return=m,w):(w=ca(g.type,g.key,g.props,null,m.mode,w),w.ref=Gs(m,f,g),w.return=m,w)}function p(m,f,g,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=Di(g,m.mode,w),f.return=m,f):(f=a(f,g.children||[]),f.return=m,f)}function u(m,f,g,w,x){return f===null||f.tag!==7?(f=Xn(g,m.mode,w,x),f.return=m,f):(f=a(f,g),f.return=m,f)}function d(m,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Oi(""+f,m.mode,g),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case It:return g=ca(f.type,f.key,f.props,null,m.mode,g),g.ref=Gs(m,null,f),g.return=m,g;case ps:return f=Di(f,m.mode,g),f.return=m,f;case kn:var w=f._init;return d(m,w(f._payload),g)}if(Xs(f)||Rs(f))return f=Xn(f,m.mode,g,null),f.return=m,f;Ut(m,f)}return null}function h(m,f,g,w){var x=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return x!==null?null:o(m,f,""+g,w);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case It:return g.key===x?c(m,f,g,w):null;case ps:return g.key===x?p(m,f,g,w):null;case kn:return x=g._init,h(m,f,x(g._payload),w)}if(Xs(g)||Rs(g))return x!==null?null:u(m,f,g,w,null);Ut(m,g)}return null}function v(m,f,g,w,x){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(g)||null,o(f,m,""+w,x);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case It:return m=m.get(w.key===null?g:w.key)||null,c(f,m,w,x);case ps:return m=m.get(w.key===null?g:w.key)||null,p(f,m,w,x);case kn:var T=w._init;return v(m,f,g,T(w._payload),x)}if(Xs(w)||Rs(w))return m=m.get(g)||null,u(f,m,w,x,null);Ut(f,w)}return null}function _(m,f,g,w){for(var x=null,T=null,S=f,k=f=0,L=null;S!==null&&k<g.length;k++){S.index>k?(L=S,S=null):L=S.sibling;var j=h(m,S,g[k],w);if(j===null){S===null&&(S=L);break}e&&S&&j.alternate===null&&n(m,S),f=i(j,f,k),T===null?x=j:T.sibling=j,T=j,S=L}if(k===g.length)return s(m,S),J&&Un(m,k),x;if(S===null){for(;k<g.length;k++)S=d(m,g[k],w),S!==null&&(f=i(S,f,k),T===null?x=S:T.sibling=S,T=S);return J&&Un(m,k),x}for(S=t(m,S);k<g.length;k++)L=v(S,m,k,g[k],w),L!==null&&(e&&L.alternate!==null&&S.delete(L.key===null?k:L.key),f=i(L,f,k),T===null?x=L:T.sibling=L,T=L);return e&&S.forEach(function(P){return n(m,P)}),J&&Un(m,k),x}function y(m,f,g,w){var x=Rs(g);if(typeof x!="function")throw Error(C(150));if(g=x.call(g),g==null)throw Error(C(151));for(var T=x=null,S=f,k=f=0,L=null,j=g.next();S!==null&&!j.done;k++,j=g.next()){S.index>k?(L=S,S=null):L=S.sibling;var P=h(m,S,j.value,w);if(P===null){S===null&&(S=L);break}e&&S&&P.alternate===null&&n(m,S),f=i(P,f,k),T===null?x=P:T.sibling=P,T=P,S=L}if(j.done)return s(m,S),J&&Un(m,k),x;if(S===null){for(;!j.done;k++,j=g.next())j=d(m,j.value,w),j!==null&&(f=i(j,f,k),T===null?x=j:T.sibling=j,T=j);return J&&Un(m,k),x}for(S=t(m,S);!j.done;k++,j=g.next())j=v(S,m,k,j.value,w),j!==null&&(e&&j.alternate!==null&&S.delete(j.key===null?k:j.key),f=i(j,f,k),T===null?x=j:T.sibling=j,T=j);return e&&S.forEach(function(H){return n(m,H)}),J&&Un(m,k),x}function M(m,f,g,w){if(typeof g=="object"&&g!==null&&g.type===us&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case It:e:{for(var x=g.key,T=f;T!==null;){if(T.key===x){if(x=g.type,x===us){if(T.tag===7){s(m,T.sibling),f=a(T,g.props.children),f.return=m,m=f;break e}}else if(T.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===kn&&$l(x)===T.type){s(m,T.sibling),f=a(T,g.props),f.ref=Gs(m,T,g),f.return=m,m=f;break e}s(m,T);break}else n(m,T);T=T.sibling}g.type===us?(f=Xn(g.props.children,m.mode,w,g.key),f.return=m,m=f):(w=ca(g.type,g.key,g.props,null,m.mode,w),w.ref=Gs(m,f,g),w.return=m,m=w)}return r(m);case ps:e:{for(T=g.key;f!==null;){if(f.key===T)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){s(m,f.sibling),f=a(f,g.children||[]),f.return=m,m=f;break e}else{s(m,f);break}else n(m,f);f=f.sibling}f=Di(g,m.mode,w),f.return=m,m=f}return r(m);case kn:return T=g._init,M(m,f,T(g._payload),w)}if(Xs(g))return _(m,f,g,w);if(Rs(g))return y(m,f,g,w);Ut(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(s(m,f.sibling),f=a(f,g),f.return=m,m=f):(s(m,f),f=Oi(g,m.mode,w),f.return=m,m=f),r(m)):s(m,f)}return M}var Ns=Yp(!0),Kp=Yp(!1),ba=Rn(null),ja=null,ws=null,xo=null;function So(){xo=ws=ja=null}function ko(e){var n=ba.current;X(ba),e._currentValue=n}function zr(e,n,s){for(;e!==null;){var t=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,t!==null&&(t.childLanes|=n)):t!==null&&(t.childLanes&n)!==n&&(t.childLanes|=n),e===s)break;e=e.return}}function Ts(e,n){ja=e,xo=ws=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(Ce=!0),e.firstContext=null)}function qe(e){var n=e._currentValue;if(xo!==e)if(e={context:e,memoizedValue:n,next:null},ws===null){if(ja===null)throw Error(C(308));ws=e,ja.dependencies={lanes:0,firstContext:e}}else ws=ws.next=e;return n}var qn=null;function bo(e){qn===null?qn=[e]:qn.push(e)}function Xp(e,n,s,t){var a=n.interleaved;return a===null?(s.next=s,bo(n)):(s.next=a.next,a.next=s),n.interleaved=s,_n(e,t)}function _n(e,n){e.lanes|=n;var s=e.alternate;for(s!==null&&(s.lanes|=n),s=e,e=e.return;e!==null;)e.childLanes|=n,s=e.alternate,s!==null&&(s.childLanes|=n),s=e,e=e.return;return s.tag===3?s.stateNode:null}var bn=!1;function jo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Zp(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function mn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function An(e,n,s){var t=e.updateQueue;if(t===null)return null;if(t=t.shared,R&2){var a=t.pending;return a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n,_n(e,s)}return a=t.interleaved,a===null?(n.next=n,bo(t)):(n.next=a.next,a.next=n),t.interleaved=n,_n(e,s)}function ta(e,n,s){if(n=n.updateQueue,n!==null&&(n=n.shared,(s&4194240)!==0)){var t=n.lanes;t&=e.pendingLanes,s|=t,n.lanes=s,co(e,s)}}function Ul(e,n){var s=e.updateQueue,t=e.alternate;if(t!==null&&(t=t.updateQueue,s===t)){var a=null,i=null;if(s=s.firstBaseUpdate,s!==null){do{var r={eventTime:s.eventTime,lane:s.lane,tag:s.tag,payload:s.payload,callback:s.callback,next:null};i===null?a=i=r:i=i.next=r,s=s.next}while(s!==null);i===null?a=i=n:i=i.next=n}else a=i=n;s={baseState:t.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:t.shared,effects:t.effects},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=n:e.next=n,s.lastBaseUpdate=n}function Ta(e,n,s,t){var a=e.updateQueue;bn=!1;var i=a.firstBaseUpdate,r=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var c=o,p=c.next;c.next=null,r===null?i=p:r.next=p,r=c;var u=e.alternate;u!==null&&(u=u.updateQueue,o=u.lastBaseUpdate,o!==r&&(o===null?u.firstBaseUpdate=p:o.next=p,u.lastBaseUpdate=c))}if(i!==null){var d=a.baseState;r=0,u=p=c=null,o=i;do{var h=o.lane,v=o.eventTime;if((t&h)===h){u!==null&&(u=u.next={eventTime:v,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var _=e,y=o;switch(h=n,v=s,y.tag){case 1:if(_=y.payload,typeof _=="function"){d=_.call(v,d,h);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,h=typeof _=="function"?_.call(v,d,h):_,h==null)break e;d=se({},d,h);break e;case 2:bn=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,h=a.effects,h===null?a.effects=[o]:h.push(o))}else v={eventTime:v,lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},u===null?(p=u=v,c=d):u=u.next=v,r|=h;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;h=o,o=h.next,h.next=null,a.lastBaseUpdate=h,a.shared.pending=null}}while(!0);if(u===null&&(c=d),a.baseState=c,a.firstBaseUpdate=p,a.lastBaseUpdate=u,n=a.shared.interleaved,n!==null){a=n;do r|=a.lane,a=a.next;while(a!==n)}else i===null&&(a.shared.lanes=0);ns|=r,e.lanes=r,e.memoizedState=d}}function Wl(e,n,s){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var t=e[n],a=t.callback;if(a!==null){if(t.callback=null,t=s,typeof a!="function")throw Error(C(191,a));a.call(t)}}}var Pt={},on=Rn(Pt),xt=Rn(Pt),St=Rn(Pt);function Qn(e){if(e===Pt)throw Error(C(174));return e}function To(e,n){switch(Y(St,n),Y(xt,e),Y(on,Pt),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:lr(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=lr(n,e)}X(on),Y(on,n)}function Is(){X(on),X(xt),X(St)}function Jp(e){Qn(St.current);var n=Qn(on.current),s=lr(n,e.type);n!==s&&(Y(xt,e),Y(on,s))}function Eo(e){xt.current===e&&(X(on),X(xt))}var ee=Rn(0);function Ea(e){for(var n=e;n!==null;){if(n.tag===13){var s=n.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ii=[];function zo(){for(var e=0;e<Ii.length;e++)Ii[e]._workInProgressVersionPrimary=null;Ii.length=0}var aa=yn.ReactCurrentDispatcher,Ai=yn.ReactCurrentBatchConfig,es=0,ne=null,oe=null,pe=null,za=!1,it=!1,kt=0,wf=0;function _e(){throw Error(C(321))}function Co(e,n){if(n===null)return!1;for(var s=0;s<n.length&&s<e.length;s++)if(!nn(e[s],n[s]))return!1;return!0}function Mo(e,n,s,t,a,i){if(es=i,ne=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,aa.current=e===null||e.memoizedState===null?kf:bf,e=s(t,a),it){i=0;do{if(it=!1,kt=0,25<=i)throw Error(C(301));i+=1,pe=oe=null,n.updateQueue=null,aa.current=jf,e=s(t,a)}while(it)}if(aa.current=Ca,n=oe!==null&&oe.next!==null,es=0,pe=oe=ne=null,za=!1,n)throw Error(C(300));return e}function Po(){var e=kt!==0;return kt=0,e}function tn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pe===null?ne.memoizedState=pe=e:pe=pe.next=e,pe}function Qe(){if(oe===null){var e=ne.alternate;e=e!==null?e.memoizedState:null}else e=oe.next;var n=pe===null?ne.memoizedState:pe.next;if(n!==null)pe=n,oe=e;else{if(e===null)throw Error(C(310));oe=e,e={memoizedState:oe.memoizedState,baseState:oe.baseState,baseQueue:oe.baseQueue,queue:oe.queue,next:null},pe===null?ne.memoizedState=pe=e:pe=pe.next=e}return pe}function bt(e,n){return typeof n=="function"?n(e):n}function Li(e){var n=Qe(),s=n.queue;if(s===null)throw Error(C(311));s.lastRenderedReducer=e;var t=oe,a=t.baseQueue,i=s.pending;if(i!==null){if(a!==null){var r=a.next;a.next=i.next,i.next=r}t.baseQueue=a=i,s.pending=null}if(a!==null){i=a.next,t=t.baseState;var o=r=null,c=null,p=i;do{var u=p.lane;if((es&u)===u)c!==null&&(c=c.next={lane:0,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),t=p.hasEagerState?p.eagerState:e(t,p.action);else{var d={lane:u,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null};c===null?(o=c=d,r=t):c=c.next=d,ne.lanes|=u,ns|=u}p=p.next}while(p!==null&&p!==i);c===null?r=t:c.next=o,nn(t,n.memoizedState)||(Ce=!0),n.memoizedState=t,n.baseState=r,n.baseQueue=c,s.lastRenderedState=t}if(e=s.interleaved,e!==null){a=e;do i=a.lane,ne.lanes|=i,ns|=i,a=a.next;while(a!==e)}else a===null&&(s.lanes=0);return[n.memoizedState,s.dispatch]}function Hi(e){var n=Qe(),s=n.queue;if(s===null)throw Error(C(311));s.lastRenderedReducer=e;var t=s.dispatch,a=s.pending,i=n.memoizedState;if(a!==null){s.pending=null;var r=a=a.next;do i=e(i,r.action),r=r.next;while(r!==a);nn(i,n.memoizedState)||(Ce=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),s.lastRenderedState=i}return[i,t]}function eu(){}function nu(e,n){var s=ne,t=Qe(),a=n(),i=!nn(t.memoizedState,a);if(i&&(t.memoizedState=a,Ce=!0),t=t.queue,No(au.bind(null,s,t,e),[e]),t.getSnapshot!==n||i||pe!==null&&pe.memoizedState.tag&1){if(s.flags|=2048,jt(9,tu.bind(null,s,t,a,n),void 0,null),ue===null)throw Error(C(349));es&30||su(s,n,a)}return a}function su(e,n,s){e.flags|=16384,e={getSnapshot:n,value:s},n=ne.updateQueue,n===null?(n={lastEffect:null,stores:null},ne.updateQueue=n,n.stores=[e]):(s=n.stores,s===null?n.stores=[e]:s.push(e))}function tu(e,n,s,t){n.value=s,n.getSnapshot=t,iu(n)&&ru(e)}function au(e,n,s){return s(function(){iu(n)&&ru(e)})}function iu(e){var n=e.getSnapshot;e=e.value;try{var s=n();return!nn(e,s)}catch{return!0}}function ru(e){var n=_n(e,1);n!==null&&en(n,e,1,-1)}function Gl(e){var n=tn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:bt,lastRenderedState:e},n.queue=e,e=e.dispatch=Sf.bind(null,ne,e),[n.memoizedState,e]}function jt(e,n,s,t){return e={tag:e,create:n,destroy:s,deps:t,next:null},n=ne.updateQueue,n===null?(n={lastEffect:null,stores:null},ne.updateQueue=n,n.lastEffect=e.next=e):(s=n.lastEffect,s===null?n.lastEffect=e.next=e:(t=s.next,s.next=e,e.next=t,n.lastEffect=e)),e}function ou(){return Qe().memoizedState}function ia(e,n,s,t){var a=tn();ne.flags|=e,a.memoizedState=jt(1|n,s,void 0,t===void 0?null:t)}function qa(e,n,s,t){var a=Qe();t=t===void 0?null:t;var i=void 0;if(oe!==null){var r=oe.memoizedState;if(i=r.destroy,t!==null&&Co(t,r.deps)){a.memoizedState=jt(n,s,i,t);return}}ne.flags|=e,a.memoizedState=jt(1|n,s,i,t)}function ql(e,n){return ia(8390656,8,e,n)}function No(e,n){return qa(2048,8,e,n)}function lu(e,n){return qa(4,2,e,n)}function cu(e,n){return qa(4,4,e,n)}function pu(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function uu(e,n,s){return s=s!=null?s.concat([e]):null,qa(4,4,pu.bind(null,n,e),s)}function Io(){}function du(e,n){var s=Qe();n=n===void 0?null:n;var t=s.memoizedState;return t!==null&&n!==null&&Co(n,t[1])?t[0]:(s.memoizedState=[e,n],e)}function hu(e,n){var s=Qe();n=n===void 0?null:n;var t=s.memoizedState;return t!==null&&n!==null&&Co(n,t[1])?t[0]:(e=e(),s.memoizedState=[e,n],e)}function fu(e,n,s){return es&21?(nn(s,n)||(s=wp(),ne.lanes|=s,ns|=s,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,Ce=!0),e.memoizedState=s)}function yf(e,n){var s=U;U=s!==0&&4>s?s:4,e(!0);var t=Ai.transition;Ai.transition={};try{e(!1),n()}finally{U=s,Ai.transition=t}}function mu(){return Qe().memoizedState}function xf(e,n,s){var t=Hn(e);if(s={lane:t,action:s,hasEagerState:!1,eagerState:null,next:null},gu(e))vu(n,s);else if(s=Xp(e,n,s,t),s!==null){var a=ke();en(s,e,t,a),_u(s,n,t)}}function Sf(e,n,s){var t=Hn(e),a={lane:t,action:s,hasEagerState:!1,eagerState:null,next:null};if(gu(e))vu(n,a);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var r=n.lastRenderedState,o=i(r,s);if(a.hasEagerState=!0,a.eagerState=o,nn(o,r)){var c=n.interleaved;c===null?(a.next=a,bo(n)):(a.next=c.next,c.next=a),n.interleaved=a;return}}catch{}finally{}s=Xp(e,n,a,t),s!==null&&(a=ke(),en(s,e,t,a),_u(s,n,t))}}function gu(e){var n=e.alternate;return e===ne||n!==null&&n===ne}function vu(e,n){it=za=!0;var s=e.pending;s===null?n.next=n:(n.next=s.next,s.next=n),e.pending=n}function _u(e,n,s){if(s&4194240){var t=n.lanes;t&=e.pendingLanes,s|=t,n.lanes=s,co(e,s)}}var Ca={readContext:qe,useCallback:_e,useContext:_e,useEffect:_e,useImperativeHandle:_e,useInsertionEffect:_e,useLayoutEffect:_e,useMemo:_e,useReducer:_e,useRef:_e,useState:_e,useDebugValue:_e,useDeferredValue:_e,useTransition:_e,useMutableSource:_e,useSyncExternalStore:_e,useId:_e,unstable_isNewReconciler:!1},kf={readContext:qe,useCallback:function(e,n){return tn().memoizedState=[e,n===void 0?null:n],e},useContext:qe,useEffect:ql,useImperativeHandle:function(e,n,s){return s=s!=null?s.concat([e]):null,ia(4194308,4,pu.bind(null,n,e),s)},useLayoutEffect:function(e,n){return ia(4194308,4,e,n)},useInsertionEffect:function(e,n){return ia(4,2,e,n)},useMemo:function(e,n){var s=tn();return n=n===void 0?null:n,e=e(),s.memoizedState=[e,n],e},useReducer:function(e,n,s){var t=tn();return n=s!==void 0?s(n):n,t.memoizedState=t.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},t.queue=e,e=e.dispatch=xf.bind(null,ne,e),[t.memoizedState,e]},useRef:function(e){var n=tn();return e={current:e},n.memoizedState=e},useState:Gl,useDebugValue:Io,useDeferredValue:function(e){return tn().memoizedState=e},useTransition:function(){var e=Gl(!1),n=e[0];return e=yf.bind(null,e[1]),tn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,s){var t=ne,a=tn();if(J){if(s===void 0)throw Error(C(407));s=s()}else{if(s=n(),ue===null)throw Error(C(349));es&30||su(t,n,s)}a.memoizedState=s;var i={value:s,getSnapshot:n};return a.queue=i,ql(au.bind(null,t,i,e),[e]),t.flags|=2048,jt(9,tu.bind(null,t,i,s,n),void 0,null),s},useId:function(){var e=tn(),n=ue.identifierPrefix;if(J){var s=hn,t=dn;s=(t&~(1<<32-Je(t)-1)).toString(32)+s,n=":"+n+"R"+s,s=kt++,0<s&&(n+="H"+s.toString(32)),n+=":"}else s=wf++,n=":"+n+"r"+s.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},bf={readContext:qe,useCallback:du,useContext:qe,useEffect:No,useImperativeHandle:uu,useInsertionEffect:lu,useLayoutEffect:cu,useMemo:hu,useReducer:Li,useRef:ou,useState:function(){return Li(bt)},useDebugValue:Io,useDeferredValue:function(e){var n=Qe();return fu(n,oe.memoizedState,e)},useTransition:function(){var e=Li(bt)[0],n=Qe().memoizedState;return[e,n]},useMutableSource:eu,useSyncExternalStore:nu,useId:mu,unstable_isNewReconciler:!1},jf={readContext:qe,useCallback:du,useContext:qe,useEffect:No,useImperativeHandle:uu,useInsertionEffect:lu,useLayoutEffect:cu,useMemo:hu,useReducer:Hi,useRef:ou,useState:function(){return Hi(bt)},useDebugValue:Io,useDeferredValue:function(e){var n=Qe();return oe===null?n.memoizedState=e:fu(n,oe.memoizedState,e)},useTransition:function(){var e=Hi(bt)[0],n=Qe().memoizedState;return[e,n]},useMutableSource:eu,useSyncExternalStore:nu,useId:mu,unstable_isNewReconciler:!1};function Ke(e,n){if(e&&e.defaultProps){n=se({},n),e=e.defaultProps;for(var s in e)n[s]===void 0&&(n[s]=e[s]);return n}return n}function Cr(e,n,s,t){n=e.memoizedState,s=s(t,n),s=s==null?n:se({},n,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var Qa={isMounted:function(e){return(e=e._reactInternals)?is(e)===e:!1},enqueueSetState:function(e,n,s){e=e._reactInternals;var t=ke(),a=Hn(e),i=mn(t,a);i.payload=n,s!=null&&(i.callback=s),n=An(e,i,a),n!==null&&(en(n,e,a,t),ta(n,e,a))},enqueueReplaceState:function(e,n,s){e=e._reactInternals;var t=ke(),a=Hn(e),i=mn(t,a);i.tag=1,i.payload=n,s!=null&&(i.callback=s),n=An(e,i,a),n!==null&&(en(n,e,a,t),ta(n,e,a))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var s=ke(),t=Hn(e),a=mn(s,t);a.tag=2,n!=null&&(a.callback=n),n=An(e,a,t),n!==null&&(en(n,e,t,s),ta(n,e,t))}};function Ql(e,n,s,t,a,i,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(t,i,r):n.prototype&&n.prototype.isPureReactComponent?!vt(s,t)||!vt(a,i):!0}function wu(e,n,s){var t=!1,a=On,i=n.contextType;return typeof i=="object"&&i!==null?i=qe(i):(a=Pe(n)?Zn:xe.current,t=n.contextTypes,i=(t=t!=null)?Ms(e,a):On),n=new n(s,i),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Qa,e.stateNode=n,n._reactInternals=e,t&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=i),n}function Yl(e,n,s,t){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(s,t),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(s,t),n.state!==e&&Qa.enqueueReplaceState(n,n.state,null)}function Mr(e,n,s,t){var a=e.stateNode;a.props=s,a.state=e.memoizedState,a.refs={},jo(e);var i=n.contextType;typeof i=="object"&&i!==null?a.context=qe(i):(i=Pe(n)?Zn:xe.current,a.context=Ms(e,i)),a.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(Cr(e,n,i,s),a.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(n=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),n!==a.state&&Qa.enqueueReplaceState(a,a.state,null),Ta(e,s,a,t),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function As(e,n){try{var s="",t=n;do s+=Zd(t),t=t.return;while(t);var a=s}catch(i){a=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:n,stack:a,digest:null}}function Vi(e,n,s){return{value:e,source:null,stack:s??null,digest:n??null}}function Pr(e,n){try{console.error(n.value)}catch(s){setTimeout(function(){throw s})}}var Tf=typeof WeakMap=="function"?WeakMap:Map;function yu(e,n,s){s=mn(-1,s),s.tag=3,s.payload={element:null};var t=n.value;return s.callback=function(){Pa||(Pa=!0,Rr=t),Pr(e,n)},s}function xu(e,n,s){s=mn(-1,s),s.tag=3;var t=e.type.getDerivedStateFromError;if(typeof t=="function"){var a=n.value;s.payload=function(){return t(a)},s.callback=function(){Pr(e,n)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(s.callback=function(){Pr(e,n),typeof t!="function"&&(Ln===null?Ln=new Set([this]):Ln.add(this));var r=n.stack;this.componentDidCatch(n.value,{componentStack:r!==null?r:""})}),s}function Kl(e,n,s){var t=e.pingCache;if(t===null){t=e.pingCache=new Tf;var a=new Set;t.set(n,a)}else a=t.get(n),a===void 0&&(a=new Set,t.set(n,a));a.has(s)||(a.add(s),e=Df.bind(null,e,n,s),n.then(e,e))}function Xl(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Zl(e,n,s,t,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===n?e.flags|=65536:(e.flags|=128,s.flags|=131072,s.flags&=-52805,s.tag===1&&(s.alternate===null?s.tag=17:(n=mn(-1,1),n.tag=2,An(s,n,1))),s.lanes|=1),e)}var Ef=yn.ReactCurrentOwner,Ce=!1;function Se(e,n,s,t){n.child=e===null?Kp(n,null,s,t):Ns(n,e.child,s,t)}function Jl(e,n,s,t,a){s=s.render;var i=n.ref;return Ts(n,a),t=Mo(e,n,s,t,i,a),s=Po(),e!==null&&!Ce?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a,wn(e,n,a)):(J&&s&&_o(n),n.flags|=1,Se(e,n,t,a),n.child)}function ec(e,n,s,t,a){if(e===null){var i=s.type;return typeof i=="function"&&!Ro(i)&&i.defaultProps===void 0&&s.compare===null&&s.defaultProps===void 0?(n.tag=15,n.type=i,Su(e,n,i,t,a)):(e=ca(s.type,null,t,n,n.mode,a),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,!(e.lanes&a)){var r=i.memoizedProps;if(s=s.compare,s=s!==null?s:vt,s(r,t)&&e.ref===n.ref)return wn(e,n,a)}return n.flags|=1,e=Vn(i,t),e.ref=n.ref,e.return=n,n.child=e}function Su(e,n,s,t,a){if(e!==null){var i=e.memoizedProps;if(vt(i,t)&&e.ref===n.ref)if(Ce=!1,n.pendingProps=t=i,(e.lanes&a)!==0)e.flags&131072&&(Ce=!0);else return n.lanes=e.lanes,wn(e,n,a)}return Nr(e,n,s,t,a)}function ku(e,n,s){var t=n.pendingProps,a=t.children,i=e!==null?e.memoizedState:null;if(t.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},Y(xs,Ie),Ie|=s;else{if(!(s&1073741824))return e=i!==null?i.baseLanes|s:s,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,Y(xs,Ie),Ie|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},t=i!==null?i.baseLanes:s,Y(xs,Ie),Ie|=t}else i!==null?(t=i.baseLanes|s,n.memoizedState=null):t=s,Y(xs,Ie),Ie|=t;return Se(e,n,a,s),n.child}function bu(e,n){var s=n.ref;(e===null&&s!==null||e!==null&&e.ref!==s)&&(n.flags|=512,n.flags|=2097152)}function Nr(e,n,s,t,a){var i=Pe(s)?Zn:xe.current;return i=Ms(n,i),Ts(n,a),s=Mo(e,n,s,t,i,a),t=Po(),e!==null&&!Ce?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a,wn(e,n,a)):(J&&t&&_o(n),n.flags|=1,Se(e,n,s,a),n.child)}function nc(e,n,s,t,a){if(Pe(s)){var i=!0;xa(n)}else i=!1;if(Ts(n,a),n.stateNode===null)ra(e,n),wu(n,s,t),Mr(n,s,t,a),t=!0;else if(e===null){var r=n.stateNode,o=n.memoizedProps;r.props=o;var c=r.context,p=s.contextType;typeof p=="object"&&p!==null?p=qe(p):(p=Pe(s)?Zn:xe.current,p=Ms(n,p));var u=s.getDerivedStateFromProps,d=typeof u=="function"||typeof r.getSnapshotBeforeUpdate=="function";d||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(o!==t||c!==p)&&Yl(n,r,t,p),bn=!1;var h=n.memoizedState;r.state=h,Ta(n,t,r,a),c=n.memoizedState,o!==t||h!==c||Me.current||bn?(typeof u=="function"&&(Cr(n,s,u,t),c=n.memoizedState),(o=bn||Ql(n,s,o,t,h,c,p))?(d||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(n.flags|=4194308)):(typeof r.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=t,n.memoizedState=c),r.props=t,r.state=c,r.context=p,t=o):(typeof r.componentDidMount=="function"&&(n.flags|=4194308),t=!1)}else{r=n.stateNode,Zp(e,n),o=n.memoizedProps,p=n.type===n.elementType?o:Ke(n.type,o),r.props=p,d=n.pendingProps,h=r.context,c=s.contextType,typeof c=="object"&&c!==null?c=qe(c):(c=Pe(s)?Zn:xe.current,c=Ms(n,c));var v=s.getDerivedStateFromProps;(u=typeof v=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(o!==d||h!==c)&&Yl(n,r,t,c),bn=!1,h=n.memoizedState,r.state=h,Ta(n,t,r,a);var _=n.memoizedState;o!==d||h!==_||Me.current||bn?(typeof v=="function"&&(Cr(n,s,v,t),_=n.memoizedState),(p=bn||Ql(n,s,p,t,h,_,c)||!1)?(u||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(t,_,c),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(t,_,c)),typeof r.componentDidUpdate=="function"&&(n.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof r.componentDidUpdate!="function"||o===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),n.memoizedProps=t,n.memoizedState=_),r.props=t,r.state=_,r.context=c,t=p):(typeof r.componentDidUpdate!="function"||o===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),t=!1)}return Ir(e,n,s,t,i,a)}function Ir(e,n,s,t,a,i){bu(e,n);var r=(n.flags&128)!==0;if(!t&&!r)return a&&Dl(n,s,!1),wn(e,n,i);t=n.stateNode,Ef.current=n;var o=r&&typeof s.getDerivedStateFromError!="function"?null:t.render();return n.flags|=1,e!==null&&r?(n.child=Ns(n,e.child,null,i),n.child=Ns(n,null,o,i)):Se(e,n,o,i),n.memoizedState=t.state,a&&Dl(n,s,!0),n.child}function ju(e){var n=e.stateNode;n.pendingContext?Ol(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Ol(e,n.context,!1),To(e,n.containerInfo)}function sc(e,n,s,t,a){return Ps(),yo(a),n.flags|=256,Se(e,n,s,t),n.child}var Ar={dehydrated:null,treeContext:null,retryLane:0};function Lr(e){return{baseLanes:e,cachePool:null,transitions:null}}function Tu(e,n,s){var t=n.pendingProps,a=ee.current,i=!1,r=(n.flags&128)!==0,o;if((o=r)||(o=e!==null&&e.memoizedState===null?!1:(a&2)!==0),o?(i=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),Y(ee,a&1),e===null)return Er(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(r=t.children,e=t.fallback,i?(t=n.mode,i=n.child,r={mode:"hidden",children:r},!(t&1)&&i!==null?(i.childLanes=0,i.pendingProps=r):i=Xa(r,t,0,null),e=Xn(e,t,s,null),i.return=n,e.return=n,i.sibling=e,n.child=i,n.child.memoizedState=Lr(s),n.memoizedState=Ar,e):Ao(n,r));if(a=e.memoizedState,a!==null&&(o=a.dehydrated,o!==null))return zf(e,n,r,t,o,a,s);if(i){i=t.fallback,r=n.mode,a=e.child,o=a.sibling;var c={mode:"hidden",children:t.children};return!(r&1)&&n.child!==a?(t=n.child,t.childLanes=0,t.pendingProps=c,n.deletions=null):(t=Vn(a,c),t.subtreeFlags=a.subtreeFlags&14680064),o!==null?i=Vn(o,i):(i=Xn(i,r,s,null),i.flags|=2),i.return=n,t.return=n,t.sibling=i,n.child=t,t=i,i=n.child,r=e.child.memoizedState,r=r===null?Lr(s):{baseLanes:r.baseLanes|s,cachePool:null,transitions:r.transitions},i.memoizedState=r,i.childLanes=e.childLanes&~s,n.memoizedState=Ar,t}return i=e.child,e=i.sibling,t=Vn(i,{mode:"visible",children:t.children}),!(n.mode&1)&&(t.lanes=s),t.return=n,t.sibling=null,e!==null&&(s=n.deletions,s===null?(n.deletions=[e],n.flags|=16):s.push(e)),n.child=t,n.memoizedState=null,t}function Ao(e,n){return n=Xa({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Wt(e,n,s,t){return t!==null&&yo(t),Ns(n,e.child,null,s),e=Ao(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function zf(e,n,s,t,a,i,r){if(s)return n.flags&256?(n.flags&=-257,t=Vi(Error(C(422))),Wt(e,n,r,t)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(i=t.fallback,a=n.mode,t=Xa({mode:"visible",children:t.children},a,0,null),i=Xn(i,a,r,null),i.flags|=2,t.return=n,i.return=n,t.sibling=i,n.child=t,n.mode&1&&Ns(n,e.child,null,r),n.child.memoizedState=Lr(r),n.memoizedState=Ar,i);if(!(n.mode&1))return Wt(e,n,r,null);if(a.data==="$!"){if(t=a.nextSibling&&a.nextSibling.dataset,t)var o=t.dgst;return t=o,i=Error(C(419)),t=Vi(i,t,void 0),Wt(e,n,r,t)}if(o=(r&e.childLanes)!==0,Ce||o){if(t=ue,t!==null){switch(r&-r){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(t.suspendedLanes|r)?0:a,a!==0&&a!==i.retryLane&&(i.retryLane=a,_n(e,a),en(t,e,a,-1))}return Do(),t=Vi(Error(C(421))),Wt(e,n,r,t)}return a.data==="$?"?(n.flags|=128,n.child=e.child,n=Rf.bind(null,e),a._reactRetry=n,null):(e=i.treeContext,Le=In(a.nextSibling),Ve=n,J=!0,Ze=null,e!==null&&($e[Ue++]=dn,$e[Ue++]=hn,$e[Ue++]=Jn,dn=e.id,hn=e.overflow,Jn=n),n=Ao(n,t.children),n.flags|=4096,n)}function tc(e,n,s){e.lanes|=n;var t=e.alternate;t!==null&&(t.lanes|=n),zr(e.return,n,s)}function Fi(e,n,s,t,a){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:t,tail:s,tailMode:a}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=t,i.tail=s,i.tailMode=a)}function Eu(e,n,s){var t=n.pendingProps,a=t.revealOrder,i=t.tail;if(Se(e,n,t.children,s),t=ee.current,t&2)t=t&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&tc(e,s,n);else if(e.tag===19)tc(e,s,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}t&=1}if(Y(ee,t),!(n.mode&1))n.memoizedState=null;else switch(a){case"forwards":for(s=n.child,a=null;s!==null;)e=s.alternate,e!==null&&Ea(e)===null&&(a=s),s=s.sibling;s=a,s===null?(a=n.child,n.child=null):(a=s.sibling,s.sibling=null),Fi(n,!1,a,s,i);break;case"backwards":for(s=null,a=n.child,n.child=null;a!==null;){if(e=a.alternate,e!==null&&Ea(e)===null){n.child=a;break}e=a.sibling,a.sibling=s,s=a,a=e}Fi(n,!0,s,null,i);break;case"together":Fi(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function ra(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function wn(e,n,s){if(e!==null&&(n.dependencies=e.dependencies),ns|=n.lanes,!(s&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(C(153));if(n.child!==null){for(e=n.child,s=Vn(e,e.pendingProps),n.child=s,s.return=n;e.sibling!==null;)e=e.sibling,s=s.sibling=Vn(e,e.pendingProps),s.return=n;s.sibling=null}return n.child}function Cf(e,n,s){switch(n.tag){case 3:ju(n),Ps();break;case 5:Jp(n);break;case 1:Pe(n.type)&&xa(n);break;case 4:To(n,n.stateNode.containerInfo);break;case 10:var t=n.type._context,a=n.memoizedProps.value;Y(ba,t._currentValue),t._currentValue=a;break;case 13:if(t=n.memoizedState,t!==null)return t.dehydrated!==null?(Y(ee,ee.current&1),n.flags|=128,null):s&n.child.childLanes?Tu(e,n,s):(Y(ee,ee.current&1),e=wn(e,n,s),e!==null?e.sibling:null);Y(ee,ee.current&1);break;case 19:if(t=(s&n.childLanes)!==0,e.flags&128){if(t)return Eu(e,n,s);n.flags|=128}if(a=n.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),Y(ee,ee.current),t)break;return null;case 22:case 23:return n.lanes=0,ku(e,n,s)}return wn(e,n,s)}var zu,Hr,Cu,Mu;zu=function(e,n){for(var s=n.child;s!==null;){if(s.tag===5||s.tag===6)e.appendChild(s.stateNode);else if(s.tag!==4&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return;s=s.return}s.sibling.return=s.return,s=s.sibling}};Hr=function(){};Cu=function(e,n,s,t){var a=e.memoizedProps;if(a!==t){e=n.stateNode,Qn(on.current);var i=null;switch(s){case"input":a=ar(e,a),t=ar(e,t),i=[];break;case"select":a=se({},a,{value:void 0}),t=se({},t,{value:void 0}),i=[];break;case"textarea":a=or(e,a),t=or(e,t),i=[];break;default:typeof a.onClick!="function"&&typeof t.onClick=="function"&&(e.onclick=wa)}cr(s,t);var r;s=null;for(p in a)if(!t.hasOwnProperty(p)&&a.hasOwnProperty(p)&&a[p]!=null)if(p==="style"){var o=a[p];for(r in o)o.hasOwnProperty(r)&&(s||(s={}),s[r]="")}else p!=="dangerouslySetInnerHTML"&&p!=="children"&&p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(pt.hasOwnProperty(p)?i||(i=[]):(i=i||[]).push(p,null));for(p in t){var c=t[p];if(o=a!=null?a[p]:void 0,t.hasOwnProperty(p)&&c!==o&&(c!=null||o!=null))if(p==="style")if(o){for(r in o)!o.hasOwnProperty(r)||c&&c.hasOwnProperty(r)||(s||(s={}),s[r]="");for(r in c)c.hasOwnProperty(r)&&o[r]!==c[r]&&(s||(s={}),s[r]=c[r])}else s||(i||(i=[]),i.push(p,s)),s=c;else p==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,o=o?o.__html:void 0,c!=null&&o!==c&&(i=i||[]).push(p,c)):p==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(p,""+c):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&(pt.hasOwnProperty(p)?(c!=null&&p==="onScroll"&&K("scroll",e),i||o===c||(i=[])):(i=i||[]).push(p,c))}s&&(i=i||[]).push("style",s);var p=i;(n.updateQueue=p)&&(n.flags|=4)}};Mu=function(e,n,s,t){s!==t&&(n.flags|=4)};function qs(e,n){if(!J)switch(e.tailMode){case"hidden":n=e.tail;for(var s=null;n!==null;)n.alternate!==null&&(s=n),n=n.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var t=null;s!==null;)s.alternate!==null&&(t=s),s=s.sibling;t===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:t.sibling=null}}function we(e){var n=e.alternate!==null&&e.alternate.child===e.child,s=0,t=0;if(n)for(var a=e.child;a!==null;)s|=a.lanes|a.childLanes,t|=a.subtreeFlags&14680064,t|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)s|=a.lanes|a.childLanes,t|=a.subtreeFlags,t|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=t,e.childLanes=s,n}function Mf(e,n,s){var t=n.pendingProps;switch(wo(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return we(n),null;case 1:return Pe(n.type)&&ya(),we(n),null;case 3:return t=n.stateNode,Is(),X(Me),X(xe),zo(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&($t(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Ze!==null&&(Ur(Ze),Ze=null))),Hr(e,n),we(n),null;case 5:Eo(n);var a=Qn(St.current);if(s=n.type,e!==null&&n.stateNode!=null)Cu(e,n,s,t,a),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!t){if(n.stateNode===null)throw Error(C(166));return we(n),null}if(e=Qn(on.current),$t(n)){t=n.stateNode,s=n.type;var i=n.memoizedProps;switch(t[an]=n,t[yt]=i,e=(n.mode&1)!==0,s){case"dialog":K("cancel",t),K("close",t);break;case"iframe":case"object":case"embed":K("load",t);break;case"video":case"audio":for(a=0;a<Js.length;a++)K(Js[a],t);break;case"source":K("error",t);break;case"img":case"image":case"link":K("error",t),K("load",t);break;case"details":K("toggle",t);break;case"input":dl(t,i),K("invalid",t);break;case"select":t._wrapperState={wasMultiple:!!i.multiple},K("invalid",t);break;case"textarea":fl(t,i),K("invalid",t)}cr(s,i),a=null;for(var r in i)if(i.hasOwnProperty(r)){var o=i[r];r==="children"?typeof o=="string"?t.textContent!==o&&(i.suppressHydrationWarning!==!0&&Bt(t.textContent,o,e),a=["children",o]):typeof o=="number"&&t.textContent!==""+o&&(i.suppressHydrationWarning!==!0&&Bt(t.textContent,o,e),a=["children",""+o]):pt.hasOwnProperty(r)&&o!=null&&r==="onScroll"&&K("scroll",t)}switch(s){case"input":At(t),hl(t,i,!0);break;case"textarea":At(t),ml(t);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(t.onclick=wa)}t=a,n.updateQueue=t,t!==null&&(n.flags|=4)}else{r=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ap(s)),e==="http://www.w3.org/1999/xhtml"?s==="script"?(e=r.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof t.is=="string"?e=r.createElement(s,{is:t.is}):(e=r.createElement(s),s==="select"&&(r=e,t.multiple?r.multiple=!0:t.size&&(r.size=t.size))):e=r.createElementNS(e,s),e[an]=n,e[yt]=t,zu(e,n,!1,!1),n.stateNode=e;e:{switch(r=pr(s,t),s){case"dialog":K("cancel",e),K("close",e),a=t;break;case"iframe":case"object":case"embed":K("load",e),a=t;break;case"video":case"audio":for(a=0;a<Js.length;a++)K(Js[a],e);a=t;break;case"source":K("error",e),a=t;break;case"img":case"image":case"link":K("error",e),K("load",e),a=t;break;case"details":K("toggle",e),a=t;break;case"input":dl(e,t),a=ar(e,t),K("invalid",e);break;case"option":a=t;break;case"select":e._wrapperState={wasMultiple:!!t.multiple},a=se({},t,{value:void 0}),K("invalid",e);break;case"textarea":fl(e,t),a=or(e,t),K("invalid",e);break;default:a=t}cr(s,a),o=a;for(i in o)if(o.hasOwnProperty(i)){var c=o[i];i==="style"?op(e,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&ip(e,c)):i==="children"?typeof c=="string"?(s!=="textarea"||c!=="")&&ut(e,c):typeof c=="number"&&ut(e,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(pt.hasOwnProperty(i)?c!=null&&i==="onScroll"&&K("scroll",e):c!=null&&to(e,i,c,r))}switch(s){case"input":At(e),hl(e,t,!1);break;case"textarea":At(e),ml(e);break;case"option":t.value!=null&&e.setAttribute("value",""+Fn(t.value));break;case"select":e.multiple=!!t.multiple,i=t.value,i!=null?Ss(e,!!t.multiple,i,!1):t.defaultValue!=null&&Ss(e,!!t.multiple,t.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=wa)}switch(s){case"button":case"input":case"select":case"textarea":t=!!t.autoFocus;break e;case"img":t=!0;break e;default:t=!1}}t&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return we(n),null;case 6:if(e&&n.stateNode!=null)Mu(e,n,e.memoizedProps,t);else{if(typeof t!="string"&&n.stateNode===null)throw Error(C(166));if(s=Qn(St.current),Qn(on.current),$t(n)){if(t=n.stateNode,s=n.memoizedProps,t[an]=n,(i=t.nodeValue!==s)&&(e=Ve,e!==null))switch(e.tag){case 3:Bt(t.nodeValue,s,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Bt(t.nodeValue,s,(e.mode&1)!==0)}i&&(n.flags|=4)}else t=(s.nodeType===9?s:s.ownerDocument).createTextNode(t),t[an]=n,n.stateNode=t}return we(n),null;case 13:if(X(ee),t=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(J&&Le!==null&&n.mode&1&&!(n.flags&128))Qp(),Ps(),n.flags|=98560,i=!1;else if(i=$t(n),t!==null&&t.dehydrated!==null){if(e===null){if(!i)throw Error(C(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(C(317));i[an]=n}else Ps(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;we(n),i=!1}else Ze!==null&&(Ur(Ze),Ze=null),i=!0;if(!i)return n.flags&65536?n:null}return n.flags&128?(n.lanes=s,n):(t=t!==null,t!==(e!==null&&e.memoizedState!==null)&&t&&(n.child.flags|=8192,n.mode&1&&(e===null||ee.current&1?ce===0&&(ce=3):Do())),n.updateQueue!==null&&(n.flags|=4),we(n),null);case 4:return Is(),Hr(e,n),e===null&&_t(n.stateNode.containerInfo),we(n),null;case 10:return ko(n.type._context),we(n),null;case 17:return Pe(n.type)&&ya(),we(n),null;case 19:if(X(ee),i=n.memoizedState,i===null)return we(n),null;if(t=(n.flags&128)!==0,r=i.rendering,r===null)if(t)qs(i,!1);else{if(ce!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(r=Ea(e),r!==null){for(n.flags|=128,qs(i,!1),t=r.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),n.subtreeFlags=0,t=s,s=n.child;s!==null;)i=s,e=t,i.flags&=14680066,r=i.alternate,r===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=r.childLanes,i.lanes=r.lanes,i.child=r.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=r.memoizedProps,i.memoizedState=r.memoizedState,i.updateQueue=r.updateQueue,i.type=r.type,e=r.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),s=s.sibling;return Y(ee,ee.current&1|2),n.child}e=e.sibling}i.tail!==null&&ae()>Ls&&(n.flags|=128,t=!0,qs(i,!1),n.lanes=4194304)}else{if(!t)if(e=Ea(r),e!==null){if(n.flags|=128,t=!0,s=e.updateQueue,s!==null&&(n.updateQueue=s,n.flags|=4),qs(i,!0),i.tail===null&&i.tailMode==="hidden"&&!r.alternate&&!J)return we(n),null}else 2*ae()-i.renderingStartTime>Ls&&s!==1073741824&&(n.flags|=128,t=!0,qs(i,!1),n.lanes=4194304);i.isBackwards?(r.sibling=n.child,n.child=r):(s=i.last,s!==null?s.sibling=r:n.child=r,i.last=r)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=ae(),n.sibling=null,s=ee.current,Y(ee,t?s&1|2:s&1),n):(we(n),null);case 22:case 23:return Oo(),t=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==t&&(n.flags|=8192),t&&n.mode&1?Ie&1073741824&&(we(n),n.subtreeFlags&6&&(n.flags|=8192)):we(n),null;case 24:return null;case 25:return null}throw Error(C(156,n.tag))}function Pf(e,n){switch(wo(n),n.tag){case 1:return Pe(n.type)&&ya(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Is(),X(Me),X(xe),zo(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Eo(n),null;case 13:if(X(ee),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(C(340));Ps()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return X(ee),null;case 4:return Is(),null;case 10:return ko(n.type._context),null;case 22:case 23:return Oo(),null;case 24:return null;default:return null}}var Gt=!1,ye=!1,Nf=typeof WeakSet=="function"?WeakSet:Set,N=null;function ys(e,n){var s=e.ref;if(s!==null)if(typeof s=="function")try{s(null)}catch(t){te(e,n,t)}else s.current=null}function Vr(e,n,s){try{s()}catch(t){te(e,n,t)}}var ac=!1;function If(e,n){if(yr=ga,e=Lp(),vo(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else e:{s=(s=e.ownerDocument)&&s.defaultView||window;var t=s.getSelection&&s.getSelection();if(t&&t.rangeCount!==0){s=t.anchorNode;var a=t.anchorOffset,i=t.focusNode;t=t.focusOffset;try{s.nodeType,i.nodeType}catch{s=null;break e}var r=0,o=-1,c=-1,p=0,u=0,d=e,h=null;n:for(;;){for(var v;d!==s||a!==0&&d.nodeType!==3||(o=r+a),d!==i||t!==0&&d.nodeType!==3||(c=r+t),d.nodeType===3&&(r+=d.nodeValue.length),(v=d.firstChild)!==null;)h=d,d=v;for(;;){if(d===e)break n;if(h===s&&++p===a&&(o=r),h===i&&++u===t&&(c=r),(v=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=v}s=o===-1||c===-1?null:{start:o,end:c}}else s=null}s=s||{start:0,end:0}}else s=null;for(xr={focusedElem:e,selectionRange:s},ga=!1,N=n;N!==null;)if(n=N,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,N=e;else for(;N!==null;){n=N;try{var _=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,M=_.memoizedState,m=n.stateNode,f=m.getSnapshotBeforeUpdate(n.elementType===n.type?y:Ke(n.type,y),M);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=n.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(w){te(n,n.return,w)}if(e=n.sibling,e!==null){e.return=n.return,N=e;break}N=n.return}return _=ac,ac=!1,_}function rt(e,n,s){var t=n.updateQueue;if(t=t!==null?t.lastEffect:null,t!==null){var a=t=t.next;do{if((a.tag&e)===e){var i=a.destroy;a.destroy=void 0,i!==void 0&&Vr(n,s,i)}a=a.next}while(a!==t)}}function Ya(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var s=n=n.next;do{if((s.tag&e)===e){var t=s.create;s.destroy=t()}s=s.next}while(s!==n)}}function Fr(e){var n=e.ref;if(n!==null){var s=e.stateNode;switch(e.tag){case 5:e=s;break;default:e=s}typeof n=="function"?n(e):n.current=e}}function Pu(e){var n=e.alternate;n!==null&&(e.alternate=null,Pu(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[an],delete n[yt],delete n[br],delete n[mf],delete n[gf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Nu(e){return e.tag===5||e.tag===3||e.tag===4}function ic(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Nu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Or(e,n,s){var t=e.tag;if(t===5||t===6)e=e.stateNode,n?s.nodeType===8?s.parentNode.insertBefore(e,n):s.insertBefore(e,n):(s.nodeType===8?(n=s.parentNode,n.insertBefore(e,s)):(n=s,n.appendChild(e)),s=s._reactRootContainer,s!=null||n.onclick!==null||(n.onclick=wa));else if(t!==4&&(e=e.child,e!==null))for(Or(e,n,s),e=e.sibling;e!==null;)Or(e,n,s),e=e.sibling}function Dr(e,n,s){var t=e.tag;if(t===5||t===6)e=e.stateNode,n?s.insertBefore(e,n):s.appendChild(e);else if(t!==4&&(e=e.child,e!==null))for(Dr(e,n,s),e=e.sibling;e!==null;)Dr(e,n,s),e=e.sibling}var me=null,Xe=!1;function xn(e,n,s){for(s=s.child;s!==null;)Iu(e,n,s),s=s.sibling}function Iu(e,n,s){if(rn&&typeof rn.onCommitFiberUnmount=="function")try{rn.onCommitFiberUnmount(Ra,s)}catch{}switch(s.tag){case 5:ye||ys(s,n);case 6:var t=me,a=Xe;me=null,xn(e,n,s),me=t,Xe=a,me!==null&&(Xe?(e=me,s=s.stateNode,e.nodeType===8?e.parentNode.removeChild(s):e.removeChild(s)):me.removeChild(s.stateNode));break;case 18:me!==null&&(Xe?(e=me,s=s.stateNode,e.nodeType===8?Pi(e.parentNode,s):e.nodeType===1&&Pi(e,s),mt(e)):Pi(me,s.stateNode));break;case 4:t=me,a=Xe,me=s.stateNode.containerInfo,Xe=!0,xn(e,n,s),me=t,Xe=a;break;case 0:case 11:case 14:case 15:if(!ye&&(t=s.updateQueue,t!==null&&(t=t.lastEffect,t!==null))){a=t=t.next;do{var i=a,r=i.destroy;i=i.tag,r!==void 0&&(i&2||i&4)&&Vr(s,n,r),a=a.next}while(a!==t)}xn(e,n,s);break;case 1:if(!ye&&(ys(s,n),t=s.stateNode,typeof t.componentWillUnmount=="function"))try{t.props=s.memoizedProps,t.state=s.memoizedState,t.componentWillUnmount()}catch(o){te(s,n,o)}xn(e,n,s);break;case 21:xn(e,n,s);break;case 22:s.mode&1?(ye=(t=ye)||s.memoizedState!==null,xn(e,n,s),ye=t):xn(e,n,s);break;default:xn(e,n,s)}}function rc(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var s=e.stateNode;s===null&&(s=e.stateNode=new Nf),n.forEach(function(t){var a=Bf.bind(null,e,t);s.has(t)||(s.add(t),t.then(a,a))})}}function Ye(e,n){var s=n.deletions;if(s!==null)for(var t=0;t<s.length;t++){var a=s[t];try{var i=e,r=n,o=r;e:for(;o!==null;){switch(o.tag){case 5:me=o.stateNode,Xe=!1;break e;case 3:me=o.stateNode.containerInfo,Xe=!0;break e;case 4:me=o.stateNode.containerInfo,Xe=!0;break e}o=o.return}if(me===null)throw Error(C(160));Iu(i,r,a),me=null,Xe=!1;var c=a.alternate;c!==null&&(c.return=null),a.return=null}catch(p){te(a,n,p)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Au(n,e),n=n.sibling}function Au(e,n){var s=e.alternate,t=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ye(n,e),sn(e),t&4){try{rt(3,e,e.return),Ya(3,e)}catch(y){te(e,e.return,y)}try{rt(5,e,e.return)}catch(y){te(e,e.return,y)}}break;case 1:Ye(n,e),sn(e),t&512&&s!==null&&ys(s,s.return);break;case 5:if(Ye(n,e),sn(e),t&512&&s!==null&&ys(s,s.return),e.flags&32){var a=e.stateNode;try{ut(a,"")}catch(y){te(e,e.return,y)}}if(t&4&&(a=e.stateNode,a!=null)){var i=e.memoizedProps,r=s!==null?s.memoizedProps:i,o=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{o==="input"&&i.type==="radio"&&i.name!=null&&sp(a,i),pr(o,r);var p=pr(o,i);for(r=0;r<c.length;r+=2){var u=c[r],d=c[r+1];u==="style"?op(a,d):u==="dangerouslySetInnerHTML"?ip(a,d):u==="children"?ut(a,d):to(a,u,d,p)}switch(o){case"input":ir(a,i);break;case"textarea":tp(a,i);break;case"select":var h=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?Ss(a,!!i.multiple,v,!1):h!==!!i.multiple&&(i.defaultValue!=null?Ss(a,!!i.multiple,i.defaultValue,!0):Ss(a,!!i.multiple,i.multiple?[]:"",!1))}a[yt]=i}catch(y){te(e,e.return,y)}}break;case 6:if(Ye(n,e),sn(e),t&4){if(e.stateNode===null)throw Error(C(162));a=e.stateNode,i=e.memoizedProps;try{a.nodeValue=i}catch(y){te(e,e.return,y)}}break;case 3:if(Ye(n,e),sn(e),t&4&&s!==null&&s.memoizedState.isDehydrated)try{mt(n.containerInfo)}catch(y){te(e,e.return,y)}break;case 4:Ye(n,e),sn(e);break;case 13:Ye(n,e),sn(e),a=e.child,a.flags&8192&&(i=a.memoizedState!==null,a.stateNode.isHidden=i,!i||a.alternate!==null&&a.alternate.memoizedState!==null||(Vo=ae())),t&4&&rc(e);break;case 22:if(u=s!==null&&s.memoizedState!==null,e.mode&1?(ye=(p=ye)||u,Ye(n,e),ye=p):Ye(n,e),sn(e),t&8192){if(p=e.memoizedState!==null,(e.stateNode.isHidden=p)&&!u&&e.mode&1)for(N=e,u=e.child;u!==null;){for(d=N=u;N!==null;){switch(h=N,v=h.child,h.tag){case 0:case 11:case 14:case 15:rt(4,h,h.return);break;case 1:ys(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){t=h,s=h.return;try{n=t,_.props=n.memoizedProps,_.state=n.memoizedState,_.componentWillUnmount()}catch(y){te(t,s,y)}}break;case 5:ys(h,h.return);break;case 22:if(h.memoizedState!==null){lc(d);continue}}v!==null?(v.return=h,N=v):lc(d)}u=u.sibling}e:for(u=null,d=e;;){if(d.tag===5){if(u===null){u=d;try{a=d.stateNode,p?(i=a.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(o=d.stateNode,c=d.memoizedProps.style,r=c!=null&&c.hasOwnProperty("display")?c.display:null,o.style.display=rp("display",r))}catch(y){te(e,e.return,y)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=p?"":d.memoizedProps}catch(y){te(e,e.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Ye(n,e),sn(e),t&4&&rc(e);break;case 21:break;default:Ye(n,e),sn(e)}}function sn(e){var n=e.flags;if(n&2){try{e:{for(var s=e.return;s!==null;){if(Nu(s)){var t=s;break e}s=s.return}throw Error(C(160))}switch(t.tag){case 5:var a=t.stateNode;t.flags&32&&(ut(a,""),t.flags&=-33);var i=ic(e);Dr(e,i,a);break;case 3:case 4:var r=t.stateNode.containerInfo,o=ic(e);Or(e,o,r);break;default:throw Error(C(161))}}catch(c){te(e,e.return,c)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Af(e,n,s){N=e,Lu(e)}function Lu(e,n,s){for(var t=(e.mode&1)!==0;N!==null;){var a=N,i=a.child;if(a.tag===22&&t){var r=a.memoizedState!==null||Gt;if(!r){var o=a.alternate,c=o!==null&&o.memoizedState!==null||ye;o=Gt;var p=ye;if(Gt=r,(ye=c)&&!p)for(N=a;N!==null;)r=N,c=r.child,r.tag===22&&r.memoizedState!==null?cc(a):c!==null?(c.return=r,N=c):cc(a);for(;i!==null;)N=i,Lu(i),i=i.sibling;N=a,Gt=o,ye=p}oc(e)}else a.subtreeFlags&8772&&i!==null?(i.return=a,N=i):oc(e)}}function oc(e){for(;N!==null;){var n=N;if(n.flags&8772){var s=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:ye||Ya(5,n);break;case 1:var t=n.stateNode;if(n.flags&4&&!ye)if(s===null)t.componentDidMount();else{var a=n.elementType===n.type?s.memoizedProps:Ke(n.type,s.memoizedProps);t.componentDidUpdate(a,s.memoizedState,t.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;i!==null&&Wl(n,i,t);break;case 3:var r=n.updateQueue;if(r!==null){if(s=null,n.child!==null)switch(n.child.tag){case 5:s=n.child.stateNode;break;case 1:s=n.child.stateNode}Wl(n,r,s)}break;case 5:var o=n.stateNode;if(s===null&&n.flags&4){s=o;var c=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&s.focus();break;case"img":c.src&&(s.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var p=n.alternate;if(p!==null){var u=p.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&mt(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}ye||n.flags&512&&Fr(n)}catch(h){te(n,n.return,h)}}if(n===e){N=null;break}if(s=n.sibling,s!==null){s.return=n.return,N=s;break}N=n.return}}function lc(e){for(;N!==null;){var n=N;if(n===e){N=null;break}var s=n.sibling;if(s!==null){s.return=n.return,N=s;break}N=n.return}}function cc(e){for(;N!==null;){var n=N;try{switch(n.tag){case 0:case 11:case 15:var s=n.return;try{Ya(4,n)}catch(c){te(n,s,c)}break;case 1:var t=n.stateNode;if(typeof t.componentDidMount=="function"){var a=n.return;try{t.componentDidMount()}catch(c){te(n,a,c)}}var i=n.return;try{Fr(n)}catch(c){te(n,i,c)}break;case 5:var r=n.return;try{Fr(n)}catch(c){te(n,r,c)}}}catch(c){te(n,n.return,c)}if(n===e){N=null;break}var o=n.sibling;if(o!==null){o.return=n.return,N=o;break}N=n.return}}var Lf=Math.ceil,Ma=yn.ReactCurrentDispatcher,Lo=yn.ReactCurrentOwner,Ge=yn.ReactCurrentBatchConfig,R=0,ue=null,ie=null,ge=0,Ie=0,xs=Rn(0),ce=0,Tt=null,ns=0,Ka=0,Ho=0,ot=null,ze=null,Vo=0,Ls=1/0,pn=null,Pa=!1,Rr=null,Ln=null,qt=!1,zn=null,Na=0,lt=0,Br=null,oa=-1,la=0;function ke(){return R&6?ae():oa!==-1?oa:oa=ae()}function Hn(e){return e.mode&1?R&2&&ge!==0?ge&-ge:_f.transition!==null?(la===0&&(la=wp()),la):(e=U,e!==0||(e=window.event,e=e===void 0?16:Tp(e.type)),e):1}function en(e,n,s,t){if(50<lt)throw lt=0,Br=null,Error(C(185));zt(e,s,t),(!(R&2)||e!==ue)&&(e===ue&&(!(R&2)&&(Ka|=s),ce===4&&Tn(e,ge)),Ne(e,t),s===1&&R===0&&!(n.mode&1)&&(Ls=ae()+500,Ga&&Bn()))}function Ne(e,n){var s=e.callbackNode;vh(e,n);var t=ma(e,e===ue?ge:0);if(t===0)s!==null&&_l(s),e.callbackNode=null,e.callbackPriority=0;else if(n=t&-t,e.callbackPriority!==n){if(s!=null&&_l(s),n===1)e.tag===0?vf(pc.bind(null,e)):Wp(pc.bind(null,e)),hf(function(){!(R&6)&&Bn()}),s=null;else{switch(yp(t)){case 1:s=lo;break;case 4:s=vp;break;case 16:s=fa;break;case 536870912:s=_p;break;default:s=fa}s=$u(s,Hu.bind(null,e))}e.callbackPriority=n,e.callbackNode=s}}function Hu(e,n){if(oa=-1,la=0,R&6)throw Error(C(327));var s=e.callbackNode;if(Es()&&e.callbackNode!==s)return null;var t=ma(e,e===ue?ge:0);if(t===0)return null;if(t&30||t&e.expiredLanes||n)n=Ia(e,t);else{n=t;var a=R;R|=2;var i=Fu();(ue!==e||ge!==n)&&(pn=null,Ls=ae()+500,Kn(e,n));do try{Ff();break}catch(o){Vu(e,o)}while(!0);So(),Ma.current=i,R=a,ie!==null?n=0:(ue=null,ge=0,n=ce)}if(n!==0){if(n===2&&(a=mr(e),a!==0&&(t=a,n=$r(e,a))),n===1)throw s=Tt,Kn(e,0),Tn(e,t),Ne(e,ae()),s;if(n===6)Tn(e,t);else{if(a=e.current.alternate,!(t&30)&&!Hf(a)&&(n=Ia(e,t),n===2&&(i=mr(e),i!==0&&(t=i,n=$r(e,i))),n===1))throw s=Tt,Kn(e,0),Tn(e,t),Ne(e,ae()),s;switch(e.finishedWork=a,e.finishedLanes=t,n){case 0:case 1:throw Error(C(345));case 2:Wn(e,ze,pn);break;case 3:if(Tn(e,t),(t&130023424)===t&&(n=Vo+500-ae(),10<n)){if(ma(e,0)!==0)break;if(a=e.suspendedLanes,(a&t)!==t){ke(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=kr(Wn.bind(null,e,ze,pn),n);break}Wn(e,ze,pn);break;case 4:if(Tn(e,t),(t&4194240)===t)break;for(n=e.eventTimes,a=-1;0<t;){var r=31-Je(t);i=1<<r,r=n[r],r>a&&(a=r),t&=~i}if(t=a,t=ae()-t,t=(120>t?120:480>t?480:1080>t?1080:1920>t?1920:3e3>t?3e3:4320>t?4320:1960*Lf(t/1960))-t,10<t){e.timeoutHandle=kr(Wn.bind(null,e,ze,pn),t);break}Wn(e,ze,pn);break;case 5:Wn(e,ze,pn);break;default:throw Error(C(329))}}}return Ne(e,ae()),e.callbackNode===s?Hu.bind(null,e):null}function $r(e,n){var s=ot;return e.current.memoizedState.isDehydrated&&(Kn(e,n).flags|=256),e=Ia(e,n),e!==2&&(n=ze,ze=s,n!==null&&Ur(n)),e}function Ur(e){ze===null?ze=e:ze.push.apply(ze,e)}function Hf(e){for(var n=e;;){if(n.flags&16384){var s=n.updateQueue;if(s!==null&&(s=s.stores,s!==null))for(var t=0;t<s.length;t++){var a=s[t],i=a.getSnapshot;a=a.value;try{if(!nn(i(),a))return!1}catch{return!1}}}if(s=n.child,n.subtreeFlags&16384&&s!==null)s.return=n,n=s;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Tn(e,n){for(n&=~Ho,n&=~Ka,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var s=31-Je(n),t=1<<s;e[s]=-1,n&=~t}}function pc(e){if(R&6)throw Error(C(327));Es();var n=ma(e,0);if(!(n&1))return Ne(e,ae()),null;var s=Ia(e,n);if(e.tag!==0&&s===2){var t=mr(e);t!==0&&(n=t,s=$r(e,t))}if(s===1)throw s=Tt,Kn(e,0),Tn(e,n),Ne(e,ae()),s;if(s===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Wn(e,ze,pn),Ne(e,ae()),null}function Fo(e,n){var s=R;R|=1;try{return e(n)}finally{R=s,R===0&&(Ls=ae()+500,Ga&&Bn())}}function ss(e){zn!==null&&zn.tag===0&&!(R&6)&&Es();var n=R;R|=1;var s=Ge.transition,t=U;try{if(Ge.transition=null,U=1,e)return e()}finally{U=t,Ge.transition=s,R=n,!(R&6)&&Bn()}}function Oo(){Ie=xs.current,X(xs)}function Kn(e,n){e.finishedWork=null,e.finishedLanes=0;var s=e.timeoutHandle;if(s!==-1&&(e.timeoutHandle=-1,df(s)),ie!==null)for(s=ie.return;s!==null;){var t=s;switch(wo(t),t.tag){case 1:t=t.type.childContextTypes,t!=null&&ya();break;case 3:Is(),X(Me),X(xe),zo();break;case 5:Eo(t);break;case 4:Is();break;case 13:X(ee);break;case 19:X(ee);break;case 10:ko(t.type._context);break;case 22:case 23:Oo()}s=s.return}if(ue=e,ie=e=Vn(e.current,null),ge=Ie=n,ce=0,Tt=null,Ho=Ka=ns=0,ze=ot=null,qn!==null){for(n=0;n<qn.length;n++)if(s=qn[n],t=s.interleaved,t!==null){s.interleaved=null;var a=t.next,i=s.pending;if(i!==null){var r=i.next;i.next=a,t.next=r}s.pending=t}qn=null}return e}function Vu(e,n){do{var s=ie;try{if(So(),aa.current=Ca,za){for(var t=ne.memoizedState;t!==null;){var a=t.queue;a!==null&&(a.pending=null),t=t.next}za=!1}if(es=0,pe=oe=ne=null,it=!1,kt=0,Lo.current=null,s===null||s.return===null){ce=1,Tt=n,ie=null;break}e:{var i=e,r=s.return,o=s,c=n;if(n=ge,o.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var p=c,u=o,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var v=Xl(r);if(v!==null){v.flags&=-257,Zl(v,r,o,i,n),v.mode&1&&Kl(i,p,n),n=v,c=p;var _=n.updateQueue;if(_===null){var y=new Set;y.add(c),n.updateQueue=y}else _.add(c);break e}else{if(!(n&1)){Kl(i,p,n),Do();break e}c=Error(C(426))}}else if(J&&o.mode&1){var M=Xl(r);if(M!==null){!(M.flags&65536)&&(M.flags|=256),Zl(M,r,o,i,n),yo(As(c,o));break e}}i=c=As(c,o),ce!==4&&(ce=2),ot===null?ot=[i]:ot.push(i),i=r;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n;var m=yu(i,c,n);Ul(i,m);break e;case 1:o=c;var f=i.type,g=i.stateNode;if(!(i.flags&128)&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Ln===null||!Ln.has(g)))){i.flags|=65536,n&=-n,i.lanes|=n;var w=xu(i,o,n);Ul(i,w);break e}}i=i.return}while(i!==null)}Du(s)}catch(x){n=x,ie===s&&s!==null&&(ie=s=s.return);continue}break}while(!0)}function Fu(){var e=Ma.current;return Ma.current=Ca,e===null?Ca:e}function Do(){(ce===0||ce===3||ce===2)&&(ce=4),ue===null||!(ns&268435455)&&!(Ka&268435455)||Tn(ue,ge)}function Ia(e,n){var s=R;R|=2;var t=Fu();(ue!==e||ge!==n)&&(pn=null,Kn(e,n));do try{Vf();break}catch(a){Vu(e,a)}while(!0);if(So(),R=s,Ma.current=t,ie!==null)throw Error(C(261));return ue=null,ge=0,ce}function Vf(){for(;ie!==null;)Ou(ie)}function Ff(){for(;ie!==null&&!lh();)Ou(ie)}function Ou(e){var n=Bu(e.alternate,e,Ie);e.memoizedProps=e.pendingProps,n===null?Du(e):ie=n,Lo.current=null}function Du(e){var n=e;do{var s=n.alternate;if(e=n.return,n.flags&32768){if(s=Pf(s,n),s!==null){s.flags&=32767,ie=s;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ce=6,ie=null;return}}else if(s=Mf(s,n,Ie),s!==null){ie=s;return}if(n=n.sibling,n!==null){ie=n;return}ie=n=e}while(n!==null);ce===0&&(ce=5)}function Wn(e,n,s){var t=U,a=Ge.transition;try{Ge.transition=null,U=1,Of(e,n,s,t)}finally{Ge.transition=a,U=t}return null}function Of(e,n,s,t){do Es();while(zn!==null);if(R&6)throw Error(C(327));s=e.finishedWork;var a=e.finishedLanes;if(s===null)return null;if(e.finishedWork=null,e.finishedLanes=0,s===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var i=s.lanes|s.childLanes;if(_h(e,i),e===ue&&(ie=ue=null,ge=0),!(s.subtreeFlags&2064)&&!(s.flags&2064)||qt||(qt=!0,$u(fa,function(){return Es(),null})),i=(s.flags&15990)!==0,s.subtreeFlags&15990||i){i=Ge.transition,Ge.transition=null;var r=U;U=1;var o=R;R|=4,Lo.current=null,If(e,s),Au(s,e),af(xr),ga=!!yr,xr=yr=null,e.current=s,Af(s),ch(),R=o,U=r,Ge.transition=i}else e.current=s;if(qt&&(qt=!1,zn=e,Na=a),i=e.pendingLanes,i===0&&(Ln=null),dh(s.stateNode),Ne(e,ae()),n!==null)for(t=e.onRecoverableError,s=0;s<n.length;s++)a=n[s],t(a.value,{componentStack:a.stack,digest:a.digest});if(Pa)throw Pa=!1,e=Rr,Rr=null,e;return Na&1&&e.tag!==0&&Es(),i=e.pendingLanes,i&1?e===Br?lt++:(lt=0,Br=e):lt=0,Bn(),null}function Es(){if(zn!==null){var e=yp(Na),n=Ge.transition,s=U;try{if(Ge.transition=null,U=16>e?16:e,zn===null)var t=!1;else{if(e=zn,zn=null,Na=0,R&6)throw Error(C(331));var a=R;for(R|=4,N=e.current;N!==null;){var i=N,r=i.child;if(N.flags&16){var o=i.deletions;if(o!==null){for(var c=0;c<o.length;c++){var p=o[c];for(N=p;N!==null;){var u=N;switch(u.tag){case 0:case 11:case 15:rt(8,u,i)}var d=u.child;if(d!==null)d.return=u,N=d;else for(;N!==null;){u=N;var h=u.sibling,v=u.return;if(Pu(u),u===p){N=null;break}if(h!==null){h.return=v,N=h;break}N=v}}}var _=i.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var M=y.sibling;y.sibling=null,y=M}while(y!==null)}}N=i}}if(i.subtreeFlags&2064&&r!==null)r.return=i,N=r;else e:for(;N!==null;){if(i=N,i.flags&2048)switch(i.tag){case 0:case 11:case 15:rt(9,i,i.return)}var m=i.sibling;if(m!==null){m.return=i.return,N=m;break e}N=i.return}}var f=e.current;for(N=f;N!==null;){r=N;var g=r.child;if(r.subtreeFlags&2064&&g!==null)g.return=r,N=g;else e:for(r=f;N!==null;){if(o=N,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Ya(9,o)}}catch(x){te(o,o.return,x)}if(o===r){N=null;break e}var w=o.sibling;if(w!==null){w.return=o.return,N=w;break e}N=o.return}}if(R=a,Bn(),rn&&typeof rn.onPostCommitFiberRoot=="function")try{rn.onPostCommitFiberRoot(Ra,e)}catch{}t=!0}return t}finally{U=s,Ge.transition=n}}return!1}function uc(e,n,s){n=As(s,n),n=yu(e,n,1),e=An(e,n,1),n=ke(),e!==null&&(zt(e,1,n),Ne(e,n))}function te(e,n,s){if(e.tag===3)uc(e,e,s);else for(;n!==null;){if(n.tag===3){uc(n,e,s);break}else if(n.tag===1){var t=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof t.componentDidCatch=="function"&&(Ln===null||!Ln.has(t))){e=As(s,e),e=xu(n,e,1),n=An(n,e,1),e=ke(),n!==null&&(zt(n,1,e),Ne(n,e));break}}n=n.return}}function Df(e,n,s){var t=e.pingCache;t!==null&&t.delete(n),n=ke(),e.pingedLanes|=e.suspendedLanes&s,ue===e&&(ge&s)===s&&(ce===4||ce===3&&(ge&130023424)===ge&&500>ae()-Vo?Kn(e,0):Ho|=s),Ne(e,n)}function Ru(e,n){n===0&&(e.mode&1?(n=Vt,Vt<<=1,!(Vt&130023424)&&(Vt=4194304)):n=1);var s=ke();e=_n(e,n),e!==null&&(zt(e,n,s),Ne(e,s))}function Rf(e){var n=e.memoizedState,s=0;n!==null&&(s=n.retryLane),Ru(e,s)}function Bf(e,n){var s=0;switch(e.tag){case 13:var t=e.stateNode,a=e.memoizedState;a!==null&&(s=a.retryLane);break;case 19:t=e.stateNode;break;default:throw Error(C(314))}t!==null&&t.delete(n),Ru(e,s)}var Bu;Bu=function(e,n,s){if(e!==null)if(e.memoizedProps!==n.pendingProps||Me.current)Ce=!0;else{if(!(e.lanes&s)&&!(n.flags&128))return Ce=!1,Cf(e,n,s);Ce=!!(e.flags&131072)}else Ce=!1,J&&n.flags&1048576&&Gp(n,ka,n.index);switch(n.lanes=0,n.tag){case 2:var t=n.type;ra(e,n),e=n.pendingProps;var a=Ms(n,xe.current);Ts(n,s),a=Mo(null,n,t,e,a,s);var i=Po();return n.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Pe(t)?(i=!0,xa(n)):i=!1,n.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,jo(n),a.updater=Qa,n.stateNode=a,a._reactInternals=n,Mr(n,t,e,s),n=Ir(null,n,t,!0,i,s)):(n.tag=0,J&&i&&_o(n),Se(null,n,a,s),n=n.child),n;case 16:t=n.elementType;e:{switch(ra(e,n),e=n.pendingProps,a=t._init,t=a(t._payload),n.type=t,a=n.tag=Uf(t),e=Ke(t,e),a){case 0:n=Nr(null,n,t,e,s);break e;case 1:n=nc(null,n,t,e,s);break e;case 11:n=Jl(null,n,t,e,s);break e;case 14:n=ec(null,n,t,Ke(t.type,e),s);break e}throw Error(C(306,t,""))}return n;case 0:return t=n.type,a=n.pendingProps,a=n.elementType===t?a:Ke(t,a),Nr(e,n,t,a,s);case 1:return t=n.type,a=n.pendingProps,a=n.elementType===t?a:Ke(t,a),nc(e,n,t,a,s);case 3:e:{if(ju(n),e===null)throw Error(C(387));t=n.pendingProps,i=n.memoizedState,a=i.element,Zp(e,n),Ta(n,t,null,s);var r=n.memoizedState;if(t=r.element,i.isDehydrated)if(i={element:t,isDehydrated:!1,cache:r.cache,pendingSuspenseBoundaries:r.pendingSuspenseBoundaries,transitions:r.transitions},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){a=As(Error(C(423)),n),n=sc(e,n,t,s,a);break e}else if(t!==a){a=As(Error(C(424)),n),n=sc(e,n,t,s,a);break e}else for(Le=In(n.stateNode.containerInfo.firstChild),Ve=n,J=!0,Ze=null,s=Kp(n,null,t,s),n.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(Ps(),t===a){n=wn(e,n,s);break e}Se(e,n,t,s)}n=n.child}return n;case 5:return Jp(n),e===null&&Er(n),t=n.type,a=n.pendingProps,i=e!==null?e.memoizedProps:null,r=a.children,Sr(t,a)?r=null:i!==null&&Sr(t,i)&&(n.flags|=32),bu(e,n),Se(e,n,r,s),n.child;case 6:return e===null&&Er(n),null;case 13:return Tu(e,n,s);case 4:return To(n,n.stateNode.containerInfo),t=n.pendingProps,e===null?n.child=Ns(n,null,t,s):Se(e,n,t,s),n.child;case 11:return t=n.type,a=n.pendingProps,a=n.elementType===t?a:Ke(t,a),Jl(e,n,t,a,s);case 7:return Se(e,n,n.pendingProps,s),n.child;case 8:return Se(e,n,n.pendingProps.children,s),n.child;case 12:return Se(e,n,n.pendingProps.children,s),n.child;case 10:e:{if(t=n.type._context,a=n.pendingProps,i=n.memoizedProps,r=a.value,Y(ba,t._currentValue),t._currentValue=r,i!==null)if(nn(i.value,r)){if(i.children===a.children&&!Me.current){n=wn(e,n,s);break e}}else for(i=n.child,i!==null&&(i.return=n);i!==null;){var o=i.dependencies;if(o!==null){r=i.child;for(var c=o.firstContext;c!==null;){if(c.context===t){if(i.tag===1){c=mn(-1,s&-s),c.tag=2;var p=i.updateQueue;if(p!==null){p=p.shared;var u=p.pending;u===null?c.next=c:(c.next=u.next,u.next=c),p.pending=c}}i.lanes|=s,c=i.alternate,c!==null&&(c.lanes|=s),zr(i.return,s,n),o.lanes|=s;break}c=c.next}}else if(i.tag===10)r=i.type===n.type?null:i.child;else if(i.tag===18){if(r=i.return,r===null)throw Error(C(341));r.lanes|=s,o=r.alternate,o!==null&&(o.lanes|=s),zr(r,s,n),r=i.sibling}else r=i.child;if(r!==null)r.return=i;else for(r=i;r!==null;){if(r===n){r=null;break}if(i=r.sibling,i!==null){i.return=r.return,r=i;break}r=r.return}i=r}Se(e,n,a.children,s),n=n.child}return n;case 9:return a=n.type,t=n.pendingProps.children,Ts(n,s),a=qe(a),t=t(a),n.flags|=1,Se(e,n,t,s),n.child;case 14:return t=n.type,a=Ke(t,n.pendingProps),a=Ke(t.type,a),ec(e,n,t,a,s);case 15:return Su(e,n,n.type,n.pendingProps,s);case 17:return t=n.type,a=n.pendingProps,a=n.elementType===t?a:Ke(t,a),ra(e,n),n.tag=1,Pe(t)?(e=!0,xa(n)):e=!1,Ts(n,s),wu(n,t,a),Mr(n,t,a,s),Ir(null,n,t,!0,e,s);case 19:return Eu(e,n,s);case 22:return ku(e,n,s)}throw Error(C(156,n.tag))};function $u(e,n){return gp(e,n)}function $f(e,n,s,t){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=t,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function We(e,n,s,t){return new $f(e,n,s,t)}function Ro(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Uf(e){if(typeof e=="function")return Ro(e)?1:0;if(e!=null){if(e=e.$$typeof,e===io)return 11;if(e===ro)return 14}return 2}function Vn(e,n){var s=e.alternate;return s===null?(s=We(e.tag,n,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=n,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&14680064,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,n=e.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s}function ca(e,n,s,t,a,i){var r=2;if(t=e,typeof e=="function")Ro(e)&&(r=1);else if(typeof e=="string")r=5;else e:switch(e){case us:return Xn(s.children,a,i,n);case ao:r=8,a|=8;break;case er:return e=We(12,s,n,a|2),e.elementType=er,e.lanes=i,e;case nr:return e=We(13,s,n,a),e.elementType=nr,e.lanes=i,e;case sr:return e=We(19,s,n,a),e.elementType=sr,e.lanes=i,e;case Jc:return Xa(s,a,i,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Xc:r=10;break e;case Zc:r=9;break e;case io:r=11;break e;case ro:r=14;break e;case kn:r=16,t=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return n=We(r,s,n,a),n.elementType=e,n.type=t,n.lanes=i,n}function Xn(e,n,s,t){return e=We(7,e,t,n),e.lanes=s,e}function Xa(e,n,s,t){return e=We(22,e,t,n),e.elementType=Jc,e.lanes=s,e.stateNode={isHidden:!1},e}function Oi(e,n,s){return e=We(6,e,null,n),e.lanes=s,e}function Di(e,n,s){return n=We(4,e.children!==null?e.children:[],e.key,n),n.lanes=s,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Wf(e,n,s,t,a){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=yi(0),this.expirationTimes=yi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yi(0),this.identifierPrefix=t,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Bo(e,n,s,t,a,i,r,o,c){return e=new Wf(e,n,s,o,c),n===1?(n=1,i===!0&&(n|=8)):n=0,i=We(3,null,null,n),e.current=i,i.stateNode=e,i.memoizedState={element:t,isDehydrated:s,cache:null,transitions:null,pendingSuspenseBoundaries:null},jo(i),e}function Gf(e,n,s){var t=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ps,key:t==null?null:""+t,children:e,containerInfo:n,implementation:s}}function Uu(e){if(!e)return On;e=e._reactInternals;e:{if(is(e)!==e||e.tag!==1)throw Error(C(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Pe(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(C(171))}if(e.tag===1){var s=e.type;if(Pe(s))return Up(e,s,n)}return n}function Wu(e,n,s,t,a,i,r,o,c){return e=Bo(s,t,!0,e,a,i,r,o,c),e.context=Uu(null),s=e.current,t=ke(),a=Hn(s),i=mn(t,a),i.callback=n??null,An(s,i,a),e.current.lanes=a,zt(e,a,t),Ne(e,t),e}function Za(e,n,s,t){var a=n.current,i=ke(),r=Hn(a);return s=Uu(s),n.context===null?n.context=s:n.pendingContext=s,n=mn(i,r),n.payload={element:e},t=t===void 0?null:t,t!==null&&(n.callback=t),e=An(a,n,r),e!==null&&(en(e,a,r,i),ta(e,a,r)),r}function Aa(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function dc(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<n?s:n}}function $o(e,n){dc(e,n),(e=e.alternate)&&dc(e,n)}function qf(){return null}var Gu=typeof reportError=="function"?reportError:function(e){console.error(e)};function Uo(e){this._internalRoot=e}Ja.prototype.render=Uo.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(C(409));Za(e,n,null,null)};Ja.prototype.unmount=Uo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;ss(function(){Za(null,e,null,null)}),n[vn]=null}};function Ja(e){this._internalRoot=e}Ja.prototype.unstable_scheduleHydration=function(e){if(e){var n=kp();e={blockedOn:null,target:e,priority:n};for(var s=0;s<jn.length&&n!==0&&n<jn[s].priority;s++);jn.splice(s,0,e),s===0&&jp(e)}};function Wo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ei(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function hc(){}function Qf(e,n,s,t,a){if(a){if(typeof t=="function"){var i=t;t=function(){var p=Aa(r);i.call(p)}}var r=Wu(n,t,e,0,null,!1,!1,"",hc);return e._reactRootContainer=r,e[vn]=r.current,_t(e.nodeType===8?e.parentNode:e),ss(),r}for(;a=e.lastChild;)e.removeChild(a);if(typeof t=="function"){var o=t;t=function(){var p=Aa(c);o.call(p)}}var c=Bo(e,0,!1,null,null,!1,!1,"",hc);return e._reactRootContainer=c,e[vn]=c.current,_t(e.nodeType===8?e.parentNode:e),ss(function(){Za(n,c,s,t)}),c}function ni(e,n,s,t,a){var i=s._reactRootContainer;if(i){var r=i;if(typeof a=="function"){var o=a;a=function(){var c=Aa(r);o.call(c)}}Za(n,r,e,a)}else r=Qf(s,n,e,a,t);return Aa(r)}xp=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var s=Zs(n.pendingLanes);s!==0&&(co(n,s|1),Ne(n,ae()),!(R&6)&&(Ls=ae()+500,Bn()))}break;case 13:ss(function(){var t=_n(e,1);if(t!==null){var a=ke();en(t,e,1,a)}}),$o(e,1)}};po=function(e){if(e.tag===13){var n=_n(e,134217728);if(n!==null){var s=ke();en(n,e,134217728,s)}$o(e,134217728)}};Sp=function(e){if(e.tag===13){var n=Hn(e),s=_n(e,n);if(s!==null){var t=ke();en(s,e,n,t)}$o(e,n)}};kp=function(){return U};bp=function(e,n){var s=U;try{return U=e,n()}finally{U=s}};dr=function(e,n,s){switch(n){case"input":if(ir(e,s),n=s.name,s.type==="radio"&&n!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<s.length;n++){var t=s[n];if(t!==e&&t.form===e.form){var a=Wa(t);if(!a)throw Error(C(90));np(t),ir(t,a)}}}break;case"textarea":tp(e,s);break;case"select":n=s.value,n!=null&&Ss(e,!!s.multiple,n,!1)}};pp=Fo;up=ss;var Yf={usingClientEntryPoint:!1,Events:[Mt,ms,Wa,lp,cp,Fo]},Qs={findFiberByHostInstance:Gn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Kf={bundleType:Qs.bundleType,version:Qs.version,rendererPackageName:Qs.rendererPackageName,rendererConfig:Qs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:yn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=fp(e),e===null?null:e.stateNode},findFiberByHostInstance:Qs.findFiberByHostInstance||qf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qt=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qt.isDisabled&&Qt.supportsFiber)try{Ra=Qt.inject(Kf),rn=Qt}catch{}}Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yf;Oe.createPortal=function(e,n){var s=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wo(n))throw Error(C(200));return Gf(e,n,null,s)};Oe.createRoot=function(e,n){if(!Wo(e))throw Error(C(299));var s=!1,t="",a=Gu;return n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(t=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),n=Bo(e,1,!1,null,null,s,!1,t,a),e[vn]=n.current,_t(e.nodeType===8?e.parentNode:e),new Uo(n)};Oe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=fp(n),e=e===null?null:e.stateNode,e};Oe.flushSync=function(e){return ss(e)};Oe.hydrate=function(e,n,s){if(!ei(n))throw Error(C(200));return ni(null,e,n,!0,s)};Oe.hydrateRoot=function(e,n,s){if(!Wo(e))throw Error(C(405));var t=s!=null&&s.hydratedSources||null,a=!1,i="",r=Gu;if(s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(i=s.identifierPrefix),s.onRecoverableError!==void 0&&(r=s.onRecoverableError)),n=Wu(n,null,e,1,s??null,a,!1,i,r),e[vn]=n.current,_t(e),t)for(e=0;e<t.length;e++)s=t[e],a=s._getVersion,a=a(s._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[s,a]:n.mutableSourceEagerHydrationData.push(s,a);return new Ja(n)};Oe.render=function(e,n,s){if(!ei(n))throw Error(C(200));return ni(null,e,n,!1,s)};Oe.unmountComponentAtNode=function(e){if(!ei(e))throw Error(C(40));return e._reactRootContainer?(ss(function(){ni(null,null,e,!1,function(){e._reactRootContainer=null,e[vn]=null})}),!0):!1};Oe.unstable_batchedUpdates=Fo;Oe.unstable_renderSubtreeIntoContainer=function(e,n,s,t){if(!ei(s))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return ni(e,n,s,!1,t)};Oe.version="18.3.1-next-f1338f8080-20240426";function qu(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qu)}catch(e){console.error(e)}}qu(),qc.exports=Oe;var Qu=qc.exports;const Xf=Oa(Qu);var fc=Qu;Zi.createRoot=fc.createRoot,Zi.hydrateRoot=fc.hydrateRoot;class Zf extends B.Component{constructor(n){super(n),this.state={hasError:!1}}static getDerivedStateFromError(n){return{hasError:!0}}render(){return this.state.hasError?l.jsx("h1",{children:"Something went wrong."}):this.props.children}}function Wr(e,n){return Wr=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(s,t){return s.__proto__=t,s},Wr(e,n)}function cn(e,n){e.prototype=Object.create(n.prototype),e.prototype.constructor=e,Wr(e,n)}var Yu={exports:{}},Jf="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",em=Jf,nm=em;function Ku(){}function Xu(){}Xu.resetWarningCache=Ku;var sm=function(){function e(t,a,i,r,o,c){if(c!==nm){var p=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw p.name="Invariant Violation",p}}e.isRequired=e;function n(){return e}var s={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:Xu,resetWarningCache:Ku};return s.PropTypes=s,s};Yu.exports=sm();var tm=Yu.exports;const mc=Oa(tm);function be(){return be=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var s=arguments[n];for(var t in s)({}).hasOwnProperty.call(s,t)&&(e[t]=s[t])}return e},be.apply(null,arguments)}function Yt(e){return e.charAt(0)==="/"}function Ri(e,n){for(var s=n,t=s+1,a=e.length;t<a;s+=1,t+=1)e[s]=e[t];e.pop()}function am(e,n){n===void 0&&(n="");var s=e&&e.split("/")||[],t=n&&n.split("/")||[],a=e&&Yt(e),i=n&&Yt(n),r=a||i;if(e&&Yt(e)?t=s:s.length&&(t.pop(),t=t.concat(s)),!t.length)return"/";var o;if(t.length){var c=t[t.length-1];o=c==="."||c===".."||c===""}else o=!1;for(var p=0,u=t.length;u>=0;u--){var d=t[u];d==="."?Ri(t,u):d===".."?(Ri(t,u),p++):p&&(Ri(t,u),p--)}if(!r)for(;p--;p)t.unshift("..");r&&t[0]!==""&&(!t[0]||!Yt(t[0]))&&t.unshift("");var h=t.join("/");return o&&h.substr(-1)!=="/"&&(h+="/"),h}var im="Invariant failed";function rs(e,n){throw new Error(im)}function ct(e){return e.charAt(0)==="/"?e:"/"+e}function gc(e){return e.charAt(0)==="/"?e.substr(1):e}function rm(e,n){return e.toLowerCase().indexOf(n.toLowerCase())===0&&"/?#".indexOf(e.charAt(n.length))!==-1}function Zu(e,n){return rm(e,n)?e.substr(n.length):e}function Ju(e){return e.charAt(e.length-1)==="/"?e.slice(0,-1):e}function om(e){var n=e||"/",s="",t="",a=n.indexOf("#");a!==-1&&(t=n.substr(a),n=n.substr(0,a));var i=n.indexOf("?");return i!==-1&&(s=n.substr(i),n=n.substr(0,i)),{pathname:n,search:s==="?"?"":s,hash:t==="#"?"":t}}function Be(e){var n=e.pathname,s=e.search,t=e.hash,a=n||"/";return s&&s!=="?"&&(a+=s.charAt(0)==="?"?s:"?"+s),t&&t!=="#"&&(a+=t.charAt(0)==="#"?t:"#"+t),a}function He(e,n,s,t){var a;typeof e=="string"?(a=om(e),a.state=n):(a=be({},e),a.pathname===void 0&&(a.pathname=""),a.search?a.search.charAt(0)!=="?"&&(a.search="?"+a.search):a.search="",a.hash?a.hash.charAt(0)!=="#"&&(a.hash="#"+a.hash):a.hash="",n!==void 0&&a.state===void 0&&(a.state=n));try{a.pathname=decodeURI(a.pathname)}catch(i){throw i instanceof URIError?new URIError('Pathname "'+a.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):i}return s&&(a.key=s),t?a.pathname?a.pathname.charAt(0)!=="/"&&(a.pathname=am(a.pathname,t.pathname)):a.pathname=t.pathname:a.pathname||(a.pathname="/"),a}function Go(){var e=null;function n(r){return e=r,function(){e===r&&(e=null)}}function s(r,o,c,p){if(e!=null){var u=typeof e=="function"?e(r,o):e;typeof u=="string"?typeof c=="function"?c(u,p):p(!0):p(u!==!1)}else p(!0)}var t=[];function a(r){var o=!0;function c(){o&&r.apply(void 0,arguments)}return t.push(c),function(){o=!1,t=t.filter(function(p){return p!==c})}}function i(){for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];t.forEach(function(p){return p.apply(void 0,o)})}return{setPrompt:n,confirmTransitionTo:s,appendListener:a,notifyListeners:i}}var ed=!!(typeof window<"u"&&window.document&&window.document.createElement);function nd(e,n){n(window.confirm(e))}function lm(){var e=window.navigator.userAgent;return(e.indexOf("Android 2.")!==-1||e.indexOf("Android 4.0")!==-1)&&e.indexOf("Mobile Safari")!==-1&&e.indexOf("Chrome")===-1&&e.indexOf("Windows Phone")===-1?!1:window.history&&"pushState"in window.history}function cm(){return window.navigator.userAgent.indexOf("Trident")===-1}function pm(){return window.navigator.userAgent.indexOf("Firefox")===-1}function um(e){return e.state===void 0&&navigator.userAgent.indexOf("CriOS")===-1}var vc="popstate",_c="hashchange";function wc(){try{return window.history.state||{}}catch{return{}}}function dm(e){e===void 0&&(e={}),ed||rs();var n=window.history,s=lm(),t=!cm(),a=e,i=a.forceRefresh,r=i===void 0?!1:i,o=a.getUserConfirmation,c=o===void 0?nd:o,p=a.keyLength,u=p===void 0?6:p,d=e.basename?Ju(ct(e.basename)):"";function h(z){var E=z||{},I=E.key,A=E.state,$=window.location,Z=$.pathname,he=$.search,re=$.hash,fe=Z+he+re;return d&&(fe=Zu(fe,d)),He(fe,A,I)}function v(){return Math.random().toString(36).substr(2,u)}var _=Go();function y(z){be(b,z),b.length=n.length,_.notifyListeners(b.location,b.action)}function M(z){um(z)||g(h(z.state))}function m(){g(h(wc()))}var f=!1;function g(z){if(f)f=!1,y();else{var E="POP";_.confirmTransitionTo(z,E,c,function(I){I?y({action:E,location:z}):w(z)})}}function w(z){var E=b.location,I=T.indexOf(E.key);I===-1&&(I=0);var A=T.indexOf(z.key);A===-1&&(A=0);var $=I-A;$&&(f=!0,j($))}var x=h(wc()),T=[x.key];function S(z){return d+Be(z)}function k(z,E){var I="PUSH",A=He(z,E,v(),b.location);_.confirmTransitionTo(A,I,c,function($){if($){var Z=S(A),he=A.key,re=A.state;if(s)if(n.pushState({key:he,state:re},null,Z),r)window.location.href=Z;else{var fe=T.indexOf(b.location.key),$n=T.slice(0,fe+1);$n.push(A.key),T=$n,y({action:I,location:A})}else window.location.href=Z}})}function L(z,E){var I="REPLACE",A=He(z,E,v(),b.location);_.confirmTransitionTo(A,I,c,function($){if($){var Z=S(A),he=A.key,re=A.state;if(s)if(n.replaceState({key:he,state:re},null,Z),r)window.location.replace(Z);else{var fe=T.indexOf(b.location.key);fe!==-1&&(T[fe]=A.key),y({action:I,location:A})}else window.location.replace(Z)}})}function j(z){n.go(z)}function P(){j(-1)}function H(){j(1)}var D=0;function q(z){D+=z,D===1&&z===1?(window.addEventListener(vc,M),t&&window.addEventListener(_c,m)):D===0&&(window.removeEventListener(vc,M),t&&window.removeEventListener(_c,m))}var G=!1;function V(z){z===void 0&&(z=!1);var E=_.setPrompt(z);return G||(q(1),G=!0),function(){return G&&(G=!1,q(-1)),E()}}function Q(z){var E=_.appendListener(z);return q(1),function(){q(-1),E()}}var b={length:n.length,action:"POP",location:x,createHref:S,push:k,replace:L,go:j,goBack:P,goForward:H,block:V,listen:Q};return b}var yc="hashchange",hm={hashbang:{encodePath:function(n){return n.charAt(0)==="!"?n:"!/"+gc(n)},decodePath:function(n){return n.charAt(0)==="!"?n.substr(1):n}},noslash:{encodePath:gc,decodePath:ct},slash:{encodePath:ct,decodePath:ct}};function sd(e){var n=e.indexOf("#");return n===-1?e:e.slice(0,n)}function Ys(){var e=window.location.href,n=e.indexOf("#");return n===-1?"":e.substring(n+1)}function fm(e){window.location.hash=e}function Bi(e){window.location.replace(sd(window.location.href)+"#"+e)}function mm(e){e===void 0&&(e={}),ed||rs();var n=window.history;pm();var s=e,t=s.getUserConfirmation,a=t===void 0?nd:t,i=s.hashType,r=i===void 0?"slash":i,o=e.basename?Ju(ct(e.basename)):"",c=hm[r],p=c.encodePath,u=c.decodePath;function d(){var E=u(Ys());return o&&(E=Zu(E,o)),He(E)}var h=Go();function v(E){be(z,E),z.length=n.length,h.notifyListeners(z.location,z.action)}var _=!1,y=null;function M(E,I){return E.pathname===I.pathname&&E.search===I.search&&E.hash===I.hash}function m(){var E=Ys(),I=p(E);if(E!==I)Bi(I);else{var A=d(),$=z.location;if(!_&&M($,A)||y===Be(A))return;y=null,f(A)}}function f(E){if(_)_=!1,v();else{var I="POP";h.confirmTransitionTo(E,I,a,function(A){A?v({action:I,location:E}):g(E)})}}function g(E){var I=z.location,A=S.lastIndexOf(Be(I));A===-1&&(A=0);var $=S.lastIndexOf(Be(E));$===-1&&($=0);var Z=A-$;Z&&(_=!0,P(Z))}var w=Ys(),x=p(w);w!==x&&Bi(x);var T=d(),S=[Be(T)];function k(E){var I=document.querySelector("base"),A="";return I&&I.getAttribute("href")&&(A=sd(window.location.href)),A+"#"+p(o+Be(E))}function L(E,I){var A="PUSH",$=He(E,void 0,void 0,z.location);h.confirmTransitionTo($,A,a,function(Z){if(Z){var he=Be($),re=p(o+he),fe=Ys()!==re;if(fe){y=he,fm(re);var $n=S.lastIndexOf(Be(z.location)),il=S.slice(0,$n+1);il.push(he),S=il,v({action:A,location:$})}else v()}})}function j(E,I){var A="REPLACE",$=He(E,void 0,void 0,z.location);h.confirmTransitionTo($,A,a,function(Z){if(Z){var he=Be($),re=p(o+he),fe=Ys()!==re;fe&&(y=he,Bi(re));var $n=S.indexOf(Be(z.location));$n!==-1&&(S[$n]=he),v({action:A,location:$})}})}function P(E){n.go(E)}function H(){P(-1)}function D(){P(1)}var q=0;function G(E){q+=E,q===1&&E===1?window.addEventListener(yc,m):q===0&&window.removeEventListener(yc,m)}var V=!1;function Q(E){E===void 0&&(E=!1);var I=h.setPrompt(E);return V||(G(1),V=!0),function(){return V&&(V=!1,G(-1)),I()}}function b(E){var I=h.appendListener(E);return G(1),function(){G(-1),I()}}var z={length:n.length,action:"POP",location:T,createHref:k,push:L,replace:j,go:P,goBack:H,goForward:D,block:Q,listen:b};return z}function xc(e,n,s){return Math.min(Math.max(e,n),s)}function gm(e){e===void 0&&(e={});var n=e,s=n.getUserConfirmation,t=n.initialEntries,a=t===void 0?["/"]:t,i=n.initialIndex,r=i===void 0?0:i,o=n.keyLength,c=o===void 0?6:o,p=Go();function u(k){be(S,k),S.length=S.entries.length,p.notifyListeners(S.location,S.action)}function d(){return Math.random().toString(36).substr(2,c)}var h=xc(r,0,a.length-1),v=a.map(function(k){return typeof k=="string"?He(k,void 0,d()):He(k,void 0,k.key||d())}),_=Be;function y(k,L){var j="PUSH",P=He(k,L,d(),S.location);p.confirmTransitionTo(P,j,s,function(H){if(H){var D=S.index,q=D+1,G=S.entries.slice(0);G.length>q?G.splice(q,G.length-q,P):G.push(P),u({action:j,location:P,index:q,entries:G})}})}function M(k,L){var j="REPLACE",P=He(k,L,d(),S.location);p.confirmTransitionTo(P,j,s,function(H){H&&(S.entries[S.index]=P,u({action:j,location:P}))})}function m(k){var L=xc(S.index+k,0,S.entries.length-1),j="POP",P=S.entries[L];p.confirmTransitionTo(P,j,s,function(H){H?u({action:j,location:P,index:L}):u()})}function f(){m(-1)}function g(){m(1)}function w(k){var L=S.index+k;return L>=0&&L<S.entries.length}function x(k){return k===void 0&&(k=!1),p.setPrompt(k)}function T(k){return p.appendListener(k)}var S={length:v.length,action:"POP",location:v[h],index:h,entries:v,createHref:_,push:y,replace:M,go:m,goBack:f,goForward:g,canGo:w,block:x,listen:T};return S}var $i=1073741823,Sc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:{};function vm(){var e="__global_unique_id__";return Sc[e]=(Sc[e]||0)+1}function _m(e,n){return e===n?e!==0||1/e===1/n:e!==e&&n!==n}function wm(e){var n=[];return{on:function(t){n.push(t)},off:function(t){n=n.filter(function(a){return a!==t})},get:function(){return e},set:function(t,a){e=t,n.forEach(function(i){return i(e,a)})}}}function ym(e){return Array.isArray(e)?e[0]:e}function xm(e,n){var s,t,a="__create-react-context-"+vm()+"__",i=function(o){cn(c,o);function c(){var u;return u=o.apply(this,arguments)||this,u.emitter=wm(u.props.value),u}var p=c.prototype;return p.getChildContext=function(){var d;return d={},d[a]=this.emitter,d},p.componentWillReceiveProps=function(d){if(this.props.value!==d.value){var h=this.props.value,v=d.value,_;_m(h,v)?_=0:(_=typeof n=="function"?n(h,v):$i,_|=0,_!==0&&this.emitter.set(d.value,_))}},p.render=function(){return this.props.children},c}(O.Component);i.childContextTypes=(s={},s[a]=mc.object.isRequired,s);var r=function(o){cn(c,o);function c(){var u;return u=o.apply(this,arguments)||this,u.state={value:u.getValue()},u.onUpdate=function(d,h){var v=u.observedBits|0;v&h&&u.setState({value:u.getValue()})},u}var p=c.prototype;return p.componentWillReceiveProps=function(d){var h=d.observedBits;this.observedBits=h??$i},p.componentDidMount=function(){this.context[a]&&this.context[a].on(this.onUpdate);var d=this.props.observedBits;this.observedBits=d??$i},p.componentWillUnmount=function(){this.context[a]&&this.context[a].off(this.onUpdate)},p.getValue=function(){return this.context[a]?this.context[a].get():e},p.render=function(){return ym(this.props.children)(this.state.value)},c}(O.Component);return r.contextTypes=(t={},t[a]=mc.object,t),{Provider:i,Consumer:r}}var td=B.createContext||xm,Ds={exports:{}},Sm=Array.isArray||function(e){return Object.prototype.toString.call(e)=="[object Array]"},La=Sm;Ds.exports=rd;Ds.exports.parse=qo;Ds.exports.compile=jm;Ds.exports.tokensToFunction=ad;Ds.exports.tokensToRegExp=id;var km=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function qo(e,n){for(var s=[],t=0,a=0,i="",r=n&&n.delimiter||"/",o;(o=km.exec(e))!=null;){var c=o[0],p=o[1],u=o.index;if(i+=e.slice(a,u),a=u+c.length,p){i+=p[1];continue}var d=e[a],h=o[2],v=o[3],_=o[4],y=o[5],M=o[6],m=o[7];i&&(s.push(i),i="");var f=h!=null&&d!=null&&d!==h,g=M==="+"||M==="*",w=M==="?"||M==="*",x=h||r,T=_||y,S=h||(typeof s[s.length-1]=="string"?s[s.length-1]:"");s.push({name:v||t++,prefix:h||"",delimiter:x,optional:w,repeat:g,partial:f,asterisk:!!m,pattern:T?zm(T):m?".*":bm(x,S)})}return a<e.length&&(i+=e.substr(a)),i&&s.push(i),s}function bm(e,n){return!n||n.indexOf(e)>-1?"[^"+Yn(e)+"]+?":Yn(n)+"|(?:(?!"+Yn(n)+")[^"+Yn(e)+"])+?"}function jm(e,n){return ad(qo(e,n),n)}function Tm(e){return encodeURI(e).replace(/[\/?#]/g,function(n){return"%"+n.charCodeAt(0).toString(16).toUpperCase()})}function Em(e){return encodeURI(e).replace(/[?#]/g,function(n){return"%"+n.charCodeAt(0).toString(16).toUpperCase()})}function ad(e,n){for(var s=new Array(e.length),t=0;t<e.length;t++)typeof e[t]=="object"&&(s[t]=new RegExp("^(?:"+e[t].pattern+")$",Yo(n)));return function(a,i){for(var r="",o=a||{},c=i||{},p=c.pretty?Tm:encodeURIComponent,u=0;u<e.length;u++){var d=e[u];if(typeof d=="string"){r+=d;continue}var h=o[d.name],v;if(h==null)if(d.optional){d.partial&&(r+=d.prefix);continue}else throw new TypeError('Expected "'+d.name+'" to be defined');if(La(h)){if(!d.repeat)throw new TypeError('Expected "'+d.name+'" to not repeat, but received `'+JSON.stringify(h)+"`");if(h.length===0){if(d.optional)continue;throw new TypeError('Expected "'+d.name+'" to not be empty')}for(var _=0;_<h.length;_++){if(v=p(h[_]),!s[u].test(v))throw new TypeError('Expected all "'+d.name+'" to match "'+d.pattern+'", but received `'+JSON.stringify(v)+"`");r+=(_===0?d.prefix:d.delimiter)+v}continue}if(v=d.asterisk?Em(h):p(h),!s[u].test(v))throw new TypeError('Expected "'+d.name+'" to match "'+d.pattern+'", but received "'+v+'"');r+=d.prefix+v}return r}}function Yn(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function zm(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function Qo(e,n){return e.keys=n,e}function Yo(e){return e&&e.sensitive?"":"i"}function Cm(e,n){var s=e.source.match(/\((?!\?)/g);if(s)for(var t=0;t<s.length;t++)n.push({name:t,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return Qo(e,n)}function Mm(e,n,s){for(var t=[],a=0;a<e.length;a++)t.push(rd(e[a],n,s).source);var i=new RegExp("(?:"+t.join("|")+")",Yo(s));return Qo(i,n)}function Pm(e,n,s){return id(qo(e,s),n,s)}function id(e,n,s){La(n)||(s=n||s,n=[]),s=s||{};for(var t=s.strict,a=s.end!==!1,i="",r=0;r<e.length;r++){var o=e[r];if(typeof o=="string")i+=Yn(o);else{var c=Yn(o.prefix),p="(?:"+o.pattern+")";n.push(o),o.repeat&&(p+="(?:"+c+p+")*"),o.optional?o.partial?p=c+"("+p+")?":p="(?:"+c+"("+p+"))?":p=c+"("+p+")",i+=p}}var u=Yn(s.delimiter||"/"),d=i.slice(-u.length)===u;return t||(i=(d?i.slice(0,-u.length):i)+"(?:"+u+"(?=$))?"),a?i+="$":i+=t&&d?"":"(?="+u+"|$)",Qo(new RegExp("^"+i,Yo(s)),n)}function rd(e,n,s){return La(n)||(s=n||s,n=[]),s=s||{},e instanceof RegExp?Cm(e,n):La(e)?Mm(e,n,s):Pm(e,n,s)}var Nm=Ds.exports;const Im=Oa(Nm);var od={exports:{}},W={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var de=typeof Symbol=="function"&&Symbol.for,Ko=de?Symbol.for("react.element"):60103,Xo=de?Symbol.for("react.portal"):60106,si=de?Symbol.for("react.fragment"):60107,ti=de?Symbol.for("react.strict_mode"):60108,ai=de?Symbol.for("react.profiler"):60114,ii=de?Symbol.for("react.provider"):60109,ri=de?Symbol.for("react.context"):60110,Zo=de?Symbol.for("react.async_mode"):60111,oi=de?Symbol.for("react.concurrent_mode"):60111,li=de?Symbol.for("react.forward_ref"):60112,ci=de?Symbol.for("react.suspense"):60113,Am=de?Symbol.for("react.suspense_list"):60120,pi=de?Symbol.for("react.memo"):60115,ui=de?Symbol.for("react.lazy"):60116,Lm=de?Symbol.for("react.block"):60121,Hm=de?Symbol.for("react.fundamental"):60117,Vm=de?Symbol.for("react.responder"):60118,Fm=de?Symbol.for("react.scope"):60119;function Re(e){if(typeof e=="object"&&e!==null){var n=e.$$typeof;switch(n){case Ko:switch(e=e.type,e){case Zo:case oi:case si:case ai:case ti:case ci:return e;default:switch(e=e&&e.$$typeof,e){case ri:case li:case ui:case pi:case ii:return e;default:return n}}case Xo:return n}}}function ld(e){return Re(e)===oi}W.AsyncMode=Zo;W.ConcurrentMode=oi;W.ContextConsumer=ri;W.ContextProvider=ii;W.Element=Ko;W.ForwardRef=li;W.Fragment=si;W.Lazy=ui;W.Memo=pi;W.Portal=Xo;W.Profiler=ai;W.StrictMode=ti;W.Suspense=ci;W.isAsyncMode=function(e){return ld(e)||Re(e)===Zo};W.isConcurrentMode=ld;W.isContextConsumer=function(e){return Re(e)===ri};W.isContextProvider=function(e){return Re(e)===ii};W.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ko};W.isForwardRef=function(e){return Re(e)===li};W.isFragment=function(e){return Re(e)===si};W.isLazy=function(e){return Re(e)===ui};W.isMemo=function(e){return Re(e)===pi};W.isPortal=function(e){return Re(e)===Xo};W.isProfiler=function(e){return Re(e)===ai};W.isStrictMode=function(e){return Re(e)===ti};W.isSuspense=function(e){return Re(e)===ci};W.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===si||e===oi||e===ai||e===ti||e===ci||e===Am||typeof e=="object"&&e!==null&&(e.$$typeof===ui||e.$$typeof===pi||e.$$typeof===ii||e.$$typeof===ri||e.$$typeof===li||e.$$typeof===Hm||e.$$typeof===Vm||e.$$typeof===Fm||e.$$typeof===Lm)};W.typeOf=Re;od.exports=W;var Om=od.exports;function di(e,n){if(e==null)return{};var s={};for(var t in e)if({}.hasOwnProperty.call(e,t)){if(n.indexOf(t)!==-1)continue;s[t]=e[t]}return s}var cd=Om,Dm={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Rm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},pd={};pd[cd.ForwardRef]=Dm;pd[cd.Memo]=Rm;var Bm=function(n){var s=td();return s.displayName=n,s},$m=Bm("Router-History"),Um=function(n){var s=td();return s.displayName=n,s},ts=Um("Router"),hi=function(e){cn(n,e),n.computeRootMatch=function(a){return{path:"/",url:"/",params:{},isExact:a==="/"}};function n(t){var a;return a=e.call(this,t)||this,a.state={location:t.history.location},a._isMounted=!1,a._pendingLocation=null,t.staticContext||(a.unlisten=t.history.listen(function(i){a._isMounted?a.setState({location:i}):a._pendingLocation=i})),a}var s=n.prototype;return s.componentDidMount=function(){this._isMounted=!0,this._pendingLocation&&this.setState({location:this._pendingLocation})},s.componentWillUnmount=function(){this.unlisten&&this.unlisten()},s.render=function(){return B.createElement(ts.Provider,{value:{history:this.props.history,location:this.state.location,match:n.computeRootMatch(this.state.location.pathname),staticContext:this.props.staticContext}},B.createElement($m.Provider,{children:this.props.children||null,value:this.props.history}))},n}(B.Component);B.Component;B.Component;var kc={},Wm=1e4,bc=0;function Gm(e,n){var s=""+n.end+n.strict+n.sensitive,t=kc[s]||(kc[s]={});if(t[e])return t[e];var a=[],i=Im(e,a,n),r={regexp:i,keys:a};return bc<Wm&&(t[e]=r,bc++),r}function Jo(e,n){n===void 0&&(n={}),(typeof n=="string"||Array.isArray(n))&&(n={path:n});var s=n,t=s.path,a=s.exact,i=a===void 0?!1:a,r=s.strict,o=r===void 0?!1:r,c=s.sensitive,p=c===void 0?!1:c,u=[].concat(t);return u.reduce(function(d,h){if(!h&&h!=="")return null;if(d)return d;var v=Gm(h,{end:i,strict:o,sensitive:p}),_=v.regexp,y=v.keys,M=_.exec(e);if(!M)return null;var m=M[0],f=M.slice(1),g=e===m;return i&&!g?null:{path:h,url:h==="/"&&m===""?"/":m,isExact:g,params:y.reduce(function(w,x,T){return w[x.name]=f[T],w},{})}},null)}var Sn=function(e){cn(n,e);function n(){return e.apply(this,arguments)||this}var s=n.prototype;return s.render=function(){var a=this;return B.createElement(ts.Consumer,null,function(i){i||rs();var r=a.props.location||i.location,o=a.props.computedMatch?a.props.computedMatch:a.props.path?Jo(r.pathname,a.props):i.match,c=be({},i,{location:r,match:o}),p=a.props,u=p.children,d=p.component,h=p.render;return Array.isArray(u)&&u.length===0&&(u=null),B.createElement(ts.Provider,{value:c},c.match?u?typeof u=="function"?u(c):u:d?B.createElement(d,c):h?h(c):null:typeof u=="function"?u(c):null)})},n}(B.Component);function el(e){return e.charAt(0)==="/"?e:"/"+e}function qm(e,n){return e?be({},n,{pathname:el(e)+n.pathname}):n}function Qm(e,n){if(!e)return n;var s=el(e);return n.pathname.indexOf(s)!==0?n:be({},n,{pathname:n.pathname.substr(s.length)})}function jc(e){return typeof e=="string"?e:Be(e)}function Ui(e){return function(){rs()}}function Tc(){}B.Component;var Ym=function(e){cn(n,e);function n(){return e.apply(this,arguments)||this}var s=n.prototype;return s.render=function(){var a=this;return B.createElement(ts.Consumer,null,function(i){i||rs();var r=a.props.location||i.location,o,c;return B.Children.forEach(a.props.children,function(p){if(c==null&&B.isValidElement(p)){o=p;var u=p.props.path||p.props.from;c=u?Jo(r.pathname,be({},p.props,{path:u})):i.match}}),c?B.cloneElement(o,{location:r,computedMatch:c}):null})},n}(B.Component),Km=B.useContext;function nl(){return Km(ts).location}var Xm=function(e){cn(n,e);function n(){for(var t,a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return t=e.call.apply(e,[this].concat(i))||this,t.history=dm(t.props),t}var s=n.prototype;return s.render=function(){return B.createElement(hi,{history:this.history,children:this.props.children})},n}(B.Component);B.Component;var Gr=function(n,s){return typeof n=="function"?n(s):n},ud=function(n,s){return typeof n=="string"?He(n,null,null,s):n},sl=function(n){return n},Hs=B.forwardRef;typeof Hs>"u"&&(Hs=sl);function Zm(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}var Jm=Hs(function(e,n){var s=e.innerRef,t=e.navigate,a=e.onClick,i=di(e,["innerRef","navigate","onClick"]),r=i.target,o=be({},i,{onClick:function(p){try{a&&a(p)}catch(u){throw p.preventDefault(),u}!p.defaultPrevented&&p.button===0&&(!r||r==="_self")&&!Zm(p)&&(p.preventDefault(),t())}});return sl!==Hs?o.ref=n||s:o.ref=s,B.createElement("a",o)}),eg=Hs(function(e,n){var s=e.component,t=s===void 0?Jm:s,a=e.replace,i=e.to,r=e.innerRef,o=di(e,["component","replace","to","innerRef"]);return B.createElement(ts.Consumer,null,function(c){c||rs();var p=c.history,u=ud(Gr(i,c.location),c.location),d=u?p.createHref(u):"",h=be({},o,{href:d,navigate:function(){var _=Gr(i,c.location),y=a?p.replace:p.push;y(_)}});return sl!==Hs?h.ref=n||r:h.innerRef=r,B.createElement(t,h)})}),dd=function(n){return n},Ha=B.forwardRef;typeof Ha>"u"&&(Ha=dd);function ng(){for(var e=arguments.length,n=new Array(e),s=0;s<e;s++)n[s]=arguments[s];return n.filter(function(t){return t}).join(" ")}Ha(function(e,n){var s=e["aria-current"],t=s===void 0?"page":s,a=e.activeClassName,i=a===void 0?"active":a,r=e.activeStyle,o=e.className,c=e.exact,p=e.isActive,u=e.location,d=e.sensitive,h=e.strict,v=e.style,_=e.to,y=e.innerRef,M=di(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return B.createElement(ts.Consumer,null,function(m){m||rs();var f=u||m.location,g=ud(Gr(_,f),f),w=g.pathname,x=w&&w.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),T=x?Jo(f.pathname,{path:x,exact:c,sensitive:d,strict:h}):null,S=!!(p?p(T,f):T),k=S?ng(o,i):o,L=S?be({},v,{},r):v,j=be({"aria-current":S&&t||null,className:k,style:L,to:g},M);return dd!==Ha?j.ref=n||y:j.innerRef=y,B.createElement(eg,j)})});function sg(){const{pathname:e}=nl();return O.useEffect(()=>{window.scrollTo(0,0)},[e]),null}function tg({component:e,...n}){return l.jsx(Sn,{...n,render:s=>l.jsx(e,{...s})})}function os(){return O.useEffect(()=>{const e=document.querySelector(".rss-header");if(e){const n=e.getBoundingClientRect().height;document.body.style.paddingTop=`${n}px`}},[]),l.jsx("header",{className:"rss-header",children:l.jsx("nav",{className:"navbar navbar-inverse",children:l.jsxs("div",{className:"container-fluid",children:[l.jsxs("div",{className:"navbar-header",children:[l.jsx("button",{className:"navbar-toggle",type:"button","data-toggle":"collapse","data-target":"#rss-navbar",children:l.jsx("img",{src:"//icons/toggle-ico.png",alt:"menu-toggler"})}),l.jsx("a",{href:"/",className:"navbar-brand font-18-24",children:"Mohamed Nawaz"})]}),l.jsx("div",{className:"collapse navbar-collapse",id:"rss-navbar",children:l.jsxs("ul",{className:"nav navbar-nav",children:[l.jsx("li",{children:l.jsx("a",{href:"/",children:"Home"})}),l.jsx("li",{children:l.jsx("a",{href:"/about",children:"About"})}),l.jsx("li",{children:l.jsx("a",{href:"/projects",children:"Works"})}),l.jsx("li",{children:l.jsx("a",{href:"/contact",children:"Contact"})}),l.jsx("li",{className:"rss-navbar__menu__call",children:l.jsx("a",{href:"#call",children:l.jsx("span",{className:"glyphicon glyphicon-earphone",children:l.jsx("p",{children:"Connect"})})})})]})})]})})})}function ls(){return l.jsxs("footer",{className:"rss-footer",children:[l.jsxs("div",{className:"rss-footer__brand-container",children:[l.jsx("h5",{className:"rss-footer__brand-container__title font-18-24",children:"Mohamed Nawaz"}),l.jsxs("div",{className:"rss-footer__brand-container__link-container",children:[l.jsx("a",{href:"/",children:l.jsx("p",{className:"rss-footer__brand-container__link-container__link font-14-18",children:"Home"})}),l.jsx("a",{href:"/about",children:l.jsx("p",{className:"rss-footer__brand-container__link-container__link font-14-18",children:"About"})}),l.jsx("a",{href:"/projects",children:l.jsx("p",{className:"rss-footer__brand-container__link-container__link font-14-18",children:"Works"})}),l.jsx("a",{href:"/contact",children:l.jsx("p",{className:"rss-footer__brand-container__link-container__link font-14-18",children:"Contact"})})]}),l.jsxs("div",{className:"rss-footer__brand-container__icons-container",children:[l.jsx("div",{className:"rss-footer__brand-container__icons-container__ico-container",children:l.jsx("a",{href:"https://www.linkedin.com/in/mohamed-nawaz/",target:"_blank",children:l.jsx("img",{src:"//icons/linkedin-ico.png",alt:"Linkedin Icon",className:"rss-footer__brand-container__icons-container__ico-container__icon"})})}),l.jsx("div",{className:"rss-footer__brand-container__icons-container__ico-container",children:l.jsx("a",{href:"https://www.twitter.com",target:"_blank",children:l.jsx("img",{src:"//icons/twitter-ico.png",alt:"Linkedin Icon",className:"rss-footer__brand-container__icons-container__ico-container__icon"})})}),l.jsx("div",{className:"rss-footer__brand-container__icons-container__ico-container",children:l.jsx("a",{href:"https://github.com/mohamed-nawas/",target:"_blank",children:l.jsx("img",{src:"//icons/web-ico.png",alt:"Linkedin Icon",className:"rss-footer__brand-container__icons-container__ico-container__icon"})})})]})]}),l.jsxs("div",{className:"rss-footer__info-container",children:[l.jsxs("div",{className:"rss-footer__info-container__item-container",children:[l.jsx("img",{src:"//icons/envelope-ico.png",alt:"Envelope Icon",className:"rss-footer__info-container__item-container__icon"}),l.jsx("p",{className:"rss-footer__info-container__item-container__content font-16-18",children:"mgmnawas@gmail.com"})]}),l.jsx("div",{className:"rss-footer__info-container__vertical-ruler"}),l.jsxs("div",{className:"rss-footer__info-container__item-container",children:[l.jsx("img",{src:"//icons/call-ico.png",alt:"Call Icon",className:"rss-footer__info-container__item-container__icon"}),l.jsx("p",{className:"rss-footer__info-container__item-container__content font-16-18",children:"+94 77 455 2663"})]}),l.jsx("div",{className:"rss-footer__info-container__vertical-ruler"}),l.jsxs("div",{className:"rss-footer__info-container__item-container",children:[l.jsx("img",{src:"//icons/marker-ico.png",alt:"Marker Icon",className:"rss-footer__info-container__item-container__icon"}),l.jsx("p",{className:"rss-footer__info-container__item-container__content font-16-18",children:"Colombo, Sri Lanka"})]})]}),l.jsx("p",{className:"rss-footer__copyright font-12-16",children:"Copyright © 2024 Mohamed Nawaz. All rights reserved."}),l.jsx("div",{id:"rss-footer__back-to-top-container",children:l.jsx("button",{id:"rss-footer__back-to-top-container__button",onClick:()=>window.scrollTo({top:0,behavior:"smooth"})})})]})}const ag=[{title:"What is your availability and preferred mode of communication?",slug:"I am currently available for new projects and can effectively collaborate remotely using various communication channels such as email, video conferencing, and project management tools. I'm committed to clear and consistent communication throughout the development process",plusIconPath:"icons/plus-ico.png",plusIconAlt:"Plus Icon",crossIconPath:"icons/cross-ico.png",crossIconAlt:"Cross Icon"},{title:"What is your estimated timeline for a project completion?",slug:"Project timelines vary depending on the complexity and scope of the requirements. After a thorough understanding of your project, I will provide a detailed timeline outlining key milestones and deliverables. I prioritize efficient development while maintaining code quality",plusIconPath:"icons/plus-ico.png",plusIconAlt:"Plus Icon",crossIconPath:"icons/cross-ico.png",crossIconAlt:"Cross Icon"},{title:"What kind of support do you offer after project completion?",slug:"While my primary focus is on building and deploying web applications, I can offer post-launch support and maintenance packages depending on your needs. This can include bug fixes, updates, and minor enhancements to ensure the continued stability and functionality of your application",plusIconPath:"icons/plus-ico.png",plusIconAlt:"Plus Icon",crossIconPath:"icons/cross-ico.png",crossIconAlt:"Cross Icon"},{title:"Do you consider performance and scalability in your development process?",slug:"Yes, performance and scalability are integral to my development approach. I write efficient code, optimize database queries, and consider potential growth to build applications that are both fast and can handle increasing user loads",plusIconPath:"icons/plus-ico.png",plusIconAlt:"Plus Icon",crossIconPath:"icons/cross-ico.png",crossIconAlt:"Cross Icon"},{title:"Are you experienced in integrating with external APIs and services?",slug:"Yes, I have experience integrating with various third-party APIs and services, such as payment gateways, analytics platforms, and other external tools, to enhance the functionality and features of your web application",plusIconPath:"icons/plus-ico.png",plusIconAlt:"Plus Icon",crossIconPath:"icons/cross-ico.png",crossIconAlt:"Cross Icon"}],ig=({containerRef:e,baseClassName:n,title:s,slug:t,containerHelpIconPath:a,containerHelpIconAlt:i,containerHelpTextTitle:r,containerHelpTextSlug:o,containerHelpBtnValue:c})=>{const[p,u]=O.useState(0),d=h=>u(h);return l.jsxs("div",{ref:e,className:`rss-faq ${n}`,children:[l.jsx("h2",{className:`rss-faq__title ${n}__title font-28-48`,children:s}),l.jsx("p",{className:`rss-faq__slug ${n}__slug font-14-18`,children:t}),l.jsxs("div",{className:`rss-faq__container ${n}__container`,children:[l.jsx("div",{className:`rss-faq__container__faq-container ${n}__container__faq-container`,children:ag.map((h,v)=>{const _=p===v,y=_?h.slug:"",M=_?h.crossIconPath:h.plusIconPath,m=_?h.crossIconAlt:h.plusIconAlt,f="/"+M;return l.jsxs("div",{className:`rss-faq__container__faq-container__item ${n}__container__faq-container__item`,onClick:()=>d(v),style:{cursor:"pointer"},children:[l.jsxs("div",{className:`rss-faq__container__faq-container__item__text-container ${n}__container__faq-container__item__text-container`,children:[l.jsx("h4",{className:`rss-faq__container__faq-container__item__text-container__title ${n}__container__faq-container__item__text-container__title font-16-20`,children:h.title}),l.jsx("p",{className:`rss-faq__container__faq-container__item__text-container__slug ${n}__container__faq-container__item__text-container__slug font-14-18`,children:y})]}),l.jsx("div",{className:`rss-faq__container__faq-container__item__icon-container ${n}__container__faq-container__item__icon-container`,children:l.jsx("img",{src:f,alt:m,className:`rss-faq__container__faq-container__item__icon-container__icon ${n}__container__faq-container__item__icon-container__icon`})})]},v)})}),l.jsxs("div",{className:`rss-faq__container__help-container ${n}__container__help-container`,children:[l.jsx("div",{className:`rss-faq__container__help-container__ico-container ${n}__container__help-container__ico-container`,children:l.jsx("img",{src:"/"+a,alt:i,className:`rss-faq__container__help-container__ico-container__icon ${n}__container__help-container__ico-container__icon`})}),l.jsxs("div",{className:`rss-faq__container__help-container__text-container ${n}__container__help-container__text-container`,children:[l.jsx("h4",{className:`rss-faq__container__help-container__text-container__title ${n}__container__help-container__text-container__title font-18-24`,children:r}),l.jsx("p",{className:`rss-faq__container__help-container__text-container__slug ${n}__container__help-container__text-container__slug font-14-18`,children:o})]}),l.jsx("a",{href:"/contact#form",children:l.jsx("input",{type:"button",value:c,className:`rss-faq__container__help-container__submit-btn ${n}__container__help-container__submit-btn`})})]})]})]})},hd=({baseClassName:e,title:n,slug:s,containerHelpIconPath:t,containerHelpIconAlt:a,containerHelpTextTitle:i,containerHelpTextSlug:r,containerHelpBtnValue:o})=>{const c=O.useRef(null);return l.jsx(ig,{containerRef:c,baseClassName:e,title:n,slug:s,containerHelpIconPath:t,containerHelpIconAlt:a,containerHelpTextTitle:i,containerHelpTextSlug:r,containerHelpBtnValue:o})},rg=[{name:"Sarah Thompson",company:"interfaithhousing.org",linkedin:"https://www.linkedin.com/in/sarah-thompson",facebook:"https://www.facebook.com/sarah.thompson",twitter:"https://twitter.com/sarah_thompson",review:"Mohamed brought a rare blend of technical proficiency and mission-driven mindset to our organization. His contributions helped us streamline internal systems and improve digital outreach strategies. He’s a team player with strong problem-solving skills—an asset to any organization, especially in the nonprofit space where resourcefulness is key."},{name:"Emily Roberts",company:"public-health.uiowa.edu",linkedin:"https://www.linkedin.com/in/emily-roberts",facebook:"https://www.facebook.com/emily.roberts",twitter:"https://twitter.com/emily_roberts",review:"Working with Mohamed was such a smooth and enjoyable experience. He really listened to what I needed and brought my ideas to life in a way that felt true to my vision. The website he created looks amazing, is easy to navigate, and really elevated our online presence. I'm so glad I chose him for the project."},{name:"Laura Adams",company:"regent.bank",linkedin:"https://www.linkedin.com/in/laura-adams",facebook:"https://www.facebook.com/laura.adams",twiter:"https://twitter.com/laura_adams",review:"It was a pleasure working with Mohamed on our web project. He brought fresh ideas, listened closely to our goals, and delivered a clean, engaging site that truly reflects our brand. His attention to detail and strong sense of user experience made a noticeable difference. I appreciated how responsive and professional he was throughout the entire process."}];function Ec(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function tl(e,n){e===void 0&&(e={}),n===void 0&&(n={});const s=["__proto__","constructor","prototype"];Object.keys(n).filter(t=>s.indexOf(t)<0).forEach(t=>{typeof e[t]>"u"?e[t]=n[t]:Ec(n[t])&&Ec(e[t])&&Object.keys(n[t]).length>0&&tl(e[t],n[t])})}const fd={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function ln(){const e=typeof document<"u"?document:{};return tl(e,fd),e}const og={document:fd,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function Ee(){const e=typeof window<"u"?window:{};return tl(e,og),e}function lg(e){return e===void 0&&(e=""),e.trim().split(" ").filter(n=>!!n.trim())}function cg(e){const n=e;Object.keys(n).forEach(s=>{try{n[s]=null}catch{}try{delete n[s]}catch{}})}function qr(e,n){return n===void 0&&(n=0),setTimeout(e,n)}function Va(){return Date.now()}function pg(e){const n=Ee();let s;return n.getComputedStyle&&(s=n.getComputedStyle(e,null)),!s&&e.currentStyle&&(s=e.currentStyle),s||(s=e.style),s}function ug(e,n){n===void 0&&(n="x");const s=Ee();let t,a,i;const r=pg(e);return s.WebKitCSSMatrix?(a=r.transform||r.webkitTransform,a.split(",").length>6&&(a=a.split(", ").map(o=>o.replace(",",".")).join(", ")),i=new s.WebKitCSSMatrix(a==="none"?"":a)):(i=r.MozTransform||r.OTransform||r.MsTransform||r.msTransform||r.transform||r.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),t=i.toString().split(",")),n==="x"&&(s.WebKitCSSMatrix?a=i.m41:t.length===16?a=parseFloat(t[12]):a=parseFloat(t[4])),n==="y"&&(s.WebKitCSSMatrix?a=i.m42:t.length===16?a=parseFloat(t[13]):a=parseFloat(t[5])),a||0}function Kt(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function dg(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function Ae(){const e=Object(arguments.length<=0?void 0:arguments[0]),n=["__proto__","constructor","prototype"];for(let s=1;s<arguments.length;s+=1){const t=s<0||arguments.length<=s?void 0:arguments[s];if(t!=null&&!dg(t)){const a=Object.keys(Object(t)).filter(i=>n.indexOf(i)<0);for(let i=0,r=a.length;i<r;i+=1){const o=a[i],c=Object.getOwnPropertyDescriptor(t,o);c!==void 0&&c.enumerable&&(Kt(e[o])&&Kt(t[o])?t[o].__swiper__?e[o]=t[o]:Ae(e[o],t[o]):!Kt(e[o])&&Kt(t[o])?(e[o]={},t[o].__swiper__?e[o]=t[o]:Ae(e[o],t[o])):e[o]=t[o])}}}return e}function Xt(e,n,s){e.style.setProperty(n,s)}function md(e){let{swiper:n,targetPosition:s,side:t}=e;const a=Ee(),i=-n.translate;let r=null,o;const c=n.params.speed;n.wrapperEl.style.scrollSnapType="none",a.cancelAnimationFrame(n.cssModeFrameID);const p=s>i?"next":"prev",u=(h,v)=>p==="next"&&h>=v||p==="prev"&&h<=v,d=()=>{o=new Date().getTime(),r===null&&(r=o);const h=Math.max(Math.min((o-r)/c,1),0),v=.5-Math.cos(h*Math.PI)/2;let _=i+v*(s-i);if(u(_,s)&&(_=s),n.wrapperEl.scrollTo({[t]:_}),u(_,s)){n.wrapperEl.style.overflow="hidden",n.wrapperEl.style.scrollSnapType="",setTimeout(()=>{n.wrapperEl.style.overflow="",n.wrapperEl.scrollTo({[t]:_})}),a.cancelAnimationFrame(n.cssModeFrameID);return}n.cssModeFrameID=a.requestAnimationFrame(d)};d()}function fn(e,n){n===void 0&&(n="");const s=Ee(),t=[...e.children];return s.HTMLSlotElement&&e instanceof HTMLSlotElement&&t.push(...e.assignedElements()),n?t.filter(a=>a.matches(n)):t}function hg(e,n){const s=[n];for(;s.length>0;){const t=s.shift();if(e===t)return!0;s.push(...t.children,...t.shadowRoot?t.shadowRoot.children:[],...t.assignedElements?t.assignedElements():[])}}function fg(e,n){const s=Ee();let t=n.contains(e);return!t&&s.HTMLSlotElement&&n instanceof HTMLSlotElement&&(t=[...n.assignedElements()].includes(e),t||(t=hg(e,n))),t}function Fa(e){try{console.warn(e);return}catch{}}function Qr(e,n){n===void 0&&(n=[]);const s=document.createElement(e);return s.classList.add(...Array.isArray(n)?n:lg(n)),s}function mg(e,n){const s=[];for(;e.previousElementSibling;){const t=e.previousElementSibling;n?t.matches(n)&&s.push(t):s.push(t),e=t}return s}function gg(e,n){const s=[];for(;e.nextElementSibling;){const t=e.nextElementSibling;n?t.matches(n)&&s.push(t):s.push(t),e=t}return s}function Cn(e,n){return Ee().getComputedStyle(e,null).getPropertyValue(n)}function zc(e){let n=e,s;if(n){for(s=0;(n=n.previousSibling)!==null;)n.nodeType===1&&(s+=1);return s}}function vg(e,n){const s=[];let t=e.parentElement;for(;t;)s.push(t),t=t.parentElement;return s}function Cc(e,n,s){const t=Ee();return e[n==="width"?"offsetWidth":"offsetHeight"]+parseFloat(t.getComputedStyle(e,null).getPropertyValue(n==="width"?"margin-right":"margin-top"))+parseFloat(t.getComputedStyle(e,null).getPropertyValue(n==="width"?"margin-left":"margin-bottom"))}let Wi;function _g(){const e=Ee(),n=ln();return{smoothScroll:n.documentElement&&n.documentElement.style&&"scrollBehavior"in n.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&n instanceof e.DocumentTouch)}}function gd(){return Wi||(Wi=_g()),Wi}let Gi;function wg(e){let{userAgent:n}=e===void 0?{}:e;const s=gd(),t=Ee(),a=t.navigator.platform,i=n||t.navigator.userAgent,r={ios:!1,android:!1},o=t.screen.width,c=t.screen.height,p=i.match(/(Android);?[\s\/]+([\d.]+)?/);let u=i.match(/(iPad).*OS\s([\d_]+)/);const d=i.match(/(iPod)(.*OS\s([\d_]+))?/),h=!u&&i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),v=a==="Win32";let _=a==="MacIntel";const y=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!u&&_&&s.touch&&y.indexOf(`${o}x${c}`)>=0&&(u=i.match(/(Version)\/([\d.]+)/),u||(u=[0,1,"13_0_0"]),_=!1),p&&!v&&(r.os="android",r.android=!0),(u||h||d)&&(r.os="ios",r.ios=!0),r}function vd(e){return e===void 0&&(e={}),Gi||(Gi=wg(e)),Gi}let qi;function yg(){const e=Ee(),n=vd();let s=!1;function t(){const o=e.navigator.userAgent.toLowerCase();return o.indexOf("safari")>=0&&o.indexOf("chrome")<0&&o.indexOf("android")<0}if(t()){const o=String(e.navigator.userAgent);if(o.includes("Version/")){const[c,p]=o.split("Version/")[1].split(" ")[0].split(".").map(u=>Number(u));s=c<16||c===16&&p<2}}const a=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),i=t(),r=i||a&&n.ios;return{isSafari:s||i,needPerspectiveFix:s,need3dFix:r,isWebView:a}}function _d(){return qi||(qi=yg()),qi}function xg(e){let{swiper:n,on:s,emit:t}=e;const a=Ee();let i=null,r=null;const o=()=>{!n||n.destroyed||!n.initialized||(t("beforeResize"),t("resize"))},c=()=>{!n||n.destroyed||!n.initialized||(i=new ResizeObserver(d=>{r=a.requestAnimationFrame(()=>{const{width:h,height:v}=n;let _=h,y=v;d.forEach(M=>{let{contentBoxSize:m,contentRect:f,target:g}=M;g&&g!==n.el||(_=f?f.width:(m[0]||m).inlineSize,y=f?f.height:(m[0]||m).blockSize)}),(_!==h||y!==v)&&o()})}),i.observe(n.el))},p=()=>{r&&a.cancelAnimationFrame(r),i&&i.unobserve&&n.el&&(i.unobserve(n.el),i=null)},u=()=>{!n||n.destroyed||!n.initialized||t("orientationchange")};s("init",()=>{if(n.params.resizeObserver&&typeof a.ResizeObserver<"u"){c();return}a.addEventListener("resize",o),a.addEventListener("orientationchange",u)}),s("destroy",()=>{p(),a.removeEventListener("resize",o),a.removeEventListener("orientationchange",u)})}function Sg(e){let{swiper:n,extendParams:s,on:t,emit:a}=e;const i=[],r=Ee(),o=function(u,d){d===void 0&&(d={});const h=r.MutationObserver||r.WebkitMutationObserver,v=new h(_=>{if(n.__preventObserver__)return;if(_.length===1){a("observerUpdate",_[0]);return}const y=function(){a("observerUpdate",_[0])};r.requestAnimationFrame?r.requestAnimationFrame(y):r.setTimeout(y,0)});v.observe(u,{attributes:typeof d.attributes>"u"?!0:d.attributes,childList:n.isElement||(typeof d.childList>"u"?!0:d).childList,characterData:typeof d.characterData>"u"?!0:d.characterData}),i.push(v)},c=()=>{if(n.params.observer){if(n.params.observeParents){const u=vg(n.hostEl);for(let d=0;d<u.length;d+=1)o(u[d])}o(n.hostEl,{childList:n.params.observeSlideChildren}),o(n.wrapperEl,{attributes:!1})}},p=()=>{i.forEach(u=>{u.disconnect()}),i.splice(0,i.length)};s({observer:!1,observeParents:!1,observeSlideChildren:!1}),t("init",c),t("destroy",p)}var kg={on(e,n,s){const t=this;if(!t.eventsListeners||t.destroyed||typeof n!="function")return t;const a=s?"unshift":"push";return e.split(" ").forEach(i=>{t.eventsListeners[i]||(t.eventsListeners[i]=[]),t.eventsListeners[i][a](n)}),t},once(e,n,s){const t=this;if(!t.eventsListeners||t.destroyed||typeof n!="function")return t;function a(){t.off(e,a),a.__emitterProxy&&delete a.__emitterProxy;for(var i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];n.apply(t,r)}return a.__emitterProxy=n,t.on(e,a,s)},onAny(e,n){const s=this;if(!s.eventsListeners||s.destroyed||typeof e!="function")return s;const t=n?"unshift":"push";return s.eventsAnyListeners.indexOf(e)<0&&s.eventsAnyListeners[t](e),s},offAny(e){const n=this;if(!n.eventsListeners||n.destroyed||!n.eventsAnyListeners)return n;const s=n.eventsAnyListeners.indexOf(e);return s>=0&&n.eventsAnyListeners.splice(s,1),n},off(e,n){const s=this;return!s.eventsListeners||s.destroyed||!s.eventsListeners||e.split(" ").forEach(t=>{typeof n>"u"?s.eventsListeners[t]=[]:s.eventsListeners[t]&&s.eventsListeners[t].forEach((a,i)=>{(a===n||a.__emitterProxy&&a.__emitterProxy===n)&&s.eventsListeners[t].splice(i,1)})}),s},emit(){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsListeners)return e;let n,s,t;for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return typeof i[0]=="string"||Array.isArray(i[0])?(n=i[0],s=i.slice(1,i.length),t=e):(n=i[0].events,s=i[0].data,t=i[0].context||e),s.unshift(t),(Array.isArray(n)?n:n.split(" ")).forEach(c=>{e.eventsAnyListeners&&e.eventsAnyListeners.length&&e.eventsAnyListeners.forEach(p=>{p.apply(t,[c,...s])}),e.eventsListeners&&e.eventsListeners[c]&&e.eventsListeners[c].forEach(p=>{p.apply(t,s)})}),e}};function bg(){const e=this;let n,s;const t=e.el;typeof e.params.width<"u"&&e.params.width!==null?n=e.params.width:n=t.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?s=e.params.height:s=t.clientHeight,!(n===0&&e.isHorizontal()||s===0&&e.isVertical())&&(n=n-parseInt(Cn(t,"padding-left")||0,10)-parseInt(Cn(t,"padding-right")||0,10),s=s-parseInt(Cn(t,"padding-top")||0,10)-parseInt(Cn(t,"padding-bottom")||0,10),Number.isNaN(n)&&(n=0),Number.isNaN(s)&&(s=0),Object.assign(e,{width:n,height:s,size:e.isHorizontal()?n:s}))}function jg(){const e=this;function n(j,P){return parseFloat(j.getPropertyValue(e.getDirectionLabel(P))||0)}const s=e.params,{wrapperEl:t,slidesEl:a,size:i,rtlTranslate:r,wrongRTL:o}=e,c=e.virtual&&s.virtual.enabled,p=c?e.virtual.slides.length:e.slides.length,u=fn(a,`.${e.params.slideClass}, swiper-slide`),d=c?e.virtual.slides.length:u.length;let h=[];const v=[],_=[];let y=s.slidesOffsetBefore;typeof y=="function"&&(y=s.slidesOffsetBefore.call(e));let M=s.slidesOffsetAfter;typeof M=="function"&&(M=s.slidesOffsetAfter.call(e));const m=e.snapGrid.length,f=e.slidesGrid.length;let g=s.spaceBetween,w=-y,x=0,T=0;if(typeof i>"u")return;typeof g=="string"&&g.indexOf("%")>=0?g=parseFloat(g.replace("%",""))/100*i:typeof g=="string"&&(g=parseFloat(g)),e.virtualSize=-g,u.forEach(j=>{r?j.style.marginLeft="":j.style.marginRight="",j.style.marginBottom="",j.style.marginTop=""}),s.centeredSlides&&s.cssMode&&(Xt(t,"--swiper-centered-offset-before",""),Xt(t,"--swiper-centered-offset-after",""));const S=s.grid&&s.grid.rows>1&&e.grid;S?e.grid.initSlides(u):e.grid&&e.grid.unsetSlides();let k;const L=s.slidesPerView==="auto"&&s.breakpoints&&Object.keys(s.breakpoints).filter(j=>typeof s.breakpoints[j].slidesPerView<"u").length>0;for(let j=0;j<d;j+=1){k=0;let P;if(u[j]&&(P=u[j]),S&&e.grid.updateSlide(j,P,u),!(u[j]&&Cn(P,"display")==="none")){if(s.slidesPerView==="auto"){L&&(u[j].style[e.getDirectionLabel("width")]="");const H=getComputedStyle(P),D=P.style.transform,q=P.style.webkitTransform;if(D&&(P.style.transform="none"),q&&(P.style.webkitTransform="none"),s.roundLengths)k=e.isHorizontal()?Cc(P,"width"):Cc(P,"height");else{const G=n(H,"width"),V=n(H,"padding-left"),Q=n(H,"padding-right"),b=n(H,"margin-left"),z=n(H,"margin-right"),E=H.getPropertyValue("box-sizing");if(E&&E==="border-box")k=G+b+z;else{const{clientWidth:I,offsetWidth:A}=P;k=G+V+Q+b+z+(A-I)}}D&&(P.style.transform=D),q&&(P.style.webkitTransform=q),s.roundLengths&&(k=Math.floor(k))}else k=(i-(s.slidesPerView-1)*g)/s.slidesPerView,s.roundLengths&&(k=Math.floor(k)),u[j]&&(u[j].style[e.getDirectionLabel("width")]=`${k}px`);u[j]&&(u[j].swiperSlideSize=k),_.push(k),s.centeredSlides?(w=w+k/2+x/2+g,x===0&&j!==0&&(w=w-i/2-g),j===0&&(w=w-i/2-g),Math.abs(w)<1/1e3&&(w=0),s.roundLengths&&(w=Math.floor(w)),T%s.slidesPerGroup===0&&h.push(w),v.push(w)):(s.roundLengths&&(w=Math.floor(w)),(T-Math.min(e.params.slidesPerGroupSkip,T))%e.params.slidesPerGroup===0&&h.push(w),v.push(w),w=w+k+g),e.virtualSize+=k+g,x=k,T+=1}}if(e.virtualSize=Math.max(e.virtualSize,i)+M,r&&o&&(s.effect==="slide"||s.effect==="coverflow")&&(t.style.width=`${e.virtualSize+g}px`),s.setWrapperSize&&(t.style[e.getDirectionLabel("width")]=`${e.virtualSize+g}px`),S&&e.grid.updateWrapperSize(k,h),!s.centeredSlides){const j=[];for(let P=0;P<h.length;P+=1){let H=h[P];s.roundLengths&&(H=Math.floor(H)),h[P]<=e.virtualSize-i&&j.push(H)}h=j,Math.floor(e.virtualSize-i)-Math.floor(h[h.length-1])>1&&h.push(e.virtualSize-i)}if(c&&s.loop){const j=_[0]+g;if(s.slidesPerGroup>1){const P=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/s.slidesPerGroup),H=j*s.slidesPerGroup;for(let D=0;D<P;D+=1)h.push(h[h.length-1]+H)}for(let P=0;P<e.virtual.slidesBefore+e.virtual.slidesAfter;P+=1)s.slidesPerGroup===1&&h.push(h[h.length-1]+j),v.push(v[v.length-1]+j),e.virtualSize+=j}if(h.length===0&&(h=[0]),g!==0){const j=e.isHorizontal()&&r?"marginLeft":e.getDirectionLabel("marginRight");u.filter((P,H)=>!s.cssMode||s.loop?!0:H!==u.length-1).forEach(P=>{P.style[j]=`${g}px`})}if(s.centeredSlides&&s.centeredSlidesBounds){let j=0;_.forEach(H=>{j+=H+(g||0)}),j-=g;const P=j>i?j-i:0;h=h.map(H=>H<=0?-y:H>P?P+M:H)}if(s.centerInsufficientSlides){let j=0;_.forEach(H=>{j+=H+(g||0)}),j-=g;const P=(s.slidesOffsetBefore||0)+(s.slidesOffsetAfter||0);if(j+P<i){const H=(i-j-P)/2;h.forEach((D,q)=>{h[q]=D-H}),v.forEach((D,q)=>{v[q]=D+H})}}if(Object.assign(e,{slides:u,snapGrid:h,slidesGrid:v,slidesSizesGrid:_}),s.centeredSlides&&s.cssMode&&!s.centeredSlidesBounds){Xt(t,"--swiper-centered-offset-before",`${-h[0]}px`),Xt(t,"--swiper-centered-offset-after",`${e.size/2-_[_.length-1]/2}px`);const j=-e.snapGrid[0],P=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(H=>H+j),e.slidesGrid=e.slidesGrid.map(H=>H+P)}if(d!==p&&e.emit("slidesLengthChange"),h.length!==m&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),v.length!==f&&e.emit("slidesGridLengthChange"),s.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!c&&!s.cssMode&&(s.effect==="slide"||s.effect==="fade")){const j=`${s.containerModifierClass}backface-hidden`,P=e.el.classList.contains(j);d<=s.maxBackfaceHiddenSlides?P||e.el.classList.add(j):P&&e.el.classList.remove(j)}}function Tg(e){const n=this,s=[],t=n.virtual&&n.params.virtual.enabled;let a=0,i;typeof e=="number"?n.setTransition(e):e===!0&&n.setTransition(n.params.speed);const r=o=>t?n.slides[n.getSlideIndexByData(o)]:n.slides[o];if(n.params.slidesPerView!=="auto"&&n.params.slidesPerView>1)if(n.params.centeredSlides)(n.visibleSlides||[]).forEach(o=>{s.push(o)});else for(i=0;i<Math.ceil(n.params.slidesPerView);i+=1){const o=n.activeIndex+i;if(o>n.slides.length&&!t)break;s.push(r(o))}else s.push(r(n.activeIndex));for(i=0;i<s.length;i+=1)if(typeof s[i]<"u"){const o=s[i].offsetHeight;a=o>a?o:a}(a||a===0)&&(n.wrapperEl.style.height=`${a}px`)}function Eg(){const e=this,n=e.slides,s=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let t=0;t<n.length;t+=1)n[t].swiperSlideOffset=(e.isHorizontal()?n[t].offsetLeft:n[t].offsetTop)-s-e.cssOverflowAdjustment()}const Mc=(e,n,s)=>{n&&!e.classList.contains(s)?e.classList.add(s):!n&&e.classList.contains(s)&&e.classList.remove(s)};function zg(e){e===void 0&&(e=this&&this.translate||0);const n=this,s=n.params,{slides:t,rtlTranslate:a,snapGrid:i}=n;if(t.length===0)return;typeof t[0].swiperSlideOffset>"u"&&n.updateSlidesOffset();let r=-e;a&&(r=e),n.visibleSlidesIndexes=[],n.visibleSlides=[];let o=s.spaceBetween;typeof o=="string"&&o.indexOf("%")>=0?o=parseFloat(o.replace("%",""))/100*n.size:typeof o=="string"&&(o=parseFloat(o));for(let c=0;c<t.length;c+=1){const p=t[c];let u=p.swiperSlideOffset;s.cssMode&&s.centeredSlides&&(u-=t[0].swiperSlideOffset);const d=(r+(s.centeredSlides?n.minTranslate():0)-u)/(p.swiperSlideSize+o),h=(r-i[0]+(s.centeredSlides?n.minTranslate():0)-u)/(p.swiperSlideSize+o),v=-(r-u),_=v+n.slidesSizesGrid[c],y=v>=0&&v<=n.size-n.slidesSizesGrid[c],M=v>=0&&v<n.size-1||_>1&&_<=n.size||v<=0&&_>=n.size;M&&(n.visibleSlides.push(p),n.visibleSlidesIndexes.push(c)),Mc(p,M,s.slideVisibleClass),Mc(p,y,s.slideFullyVisibleClass),p.progress=a?-d:d,p.originalProgress=a?-h:h}}function Cg(e){const n=this;if(typeof e>"u"){const u=n.rtlTranslate?-1:1;e=n&&n.translate&&n.translate*u||0}const s=n.params,t=n.maxTranslate()-n.minTranslate();let{progress:a,isBeginning:i,isEnd:r,progressLoop:o}=n;const c=i,p=r;if(t===0)a=0,i=!0,r=!0;else{a=(e-n.minTranslate())/t;const u=Math.abs(e-n.minTranslate())<1,d=Math.abs(e-n.maxTranslate())<1;i=u||a<=0,r=d||a>=1,u&&(a=0),d&&(a=1)}if(s.loop){const u=n.getSlideIndexByData(0),d=n.getSlideIndexByData(n.slides.length-1),h=n.slidesGrid[u],v=n.slidesGrid[d],_=n.slidesGrid[n.slidesGrid.length-1],y=Math.abs(e);y>=h?o=(y-h)/_:o=(y+_-v)/_,o>1&&(o-=1)}Object.assign(n,{progress:a,progressLoop:o,isBeginning:i,isEnd:r}),(s.watchSlidesProgress||s.centeredSlides&&s.autoHeight)&&n.updateSlidesProgress(e),i&&!c&&n.emit("reachBeginning toEdge"),r&&!p&&n.emit("reachEnd toEdge"),(c&&!i||p&&!r)&&n.emit("fromEdge"),n.emit("progress",a)}const Qi=(e,n,s)=>{n&&!e.classList.contains(s)?e.classList.add(s):!n&&e.classList.contains(s)&&e.classList.remove(s)};function Mg(){const e=this,{slides:n,params:s,slidesEl:t,activeIndex:a}=e,i=e.virtual&&s.virtual.enabled,r=e.grid&&s.grid&&s.grid.rows>1,o=d=>fn(t,`.${s.slideClass}${d}, swiper-slide${d}`)[0];let c,p,u;if(i)if(s.loop){let d=a-e.virtual.slidesBefore;d<0&&(d=e.virtual.slides.length+d),d>=e.virtual.slides.length&&(d-=e.virtual.slides.length),c=o(`[data-swiper-slide-index="${d}"]`)}else c=o(`[data-swiper-slide-index="${a}"]`);else r?(c=n.find(d=>d.column===a),u=n.find(d=>d.column===a+1),p=n.find(d=>d.column===a-1)):c=n[a];c&&(r||(u=gg(c,`.${s.slideClass}, swiper-slide`)[0],s.loop&&!u&&(u=n[0]),p=mg(c,`.${s.slideClass}, swiper-slide`)[0],s.loop&&!p===0&&(p=n[n.length-1]))),n.forEach(d=>{Qi(d,d===c,s.slideActiveClass),Qi(d,d===u,s.slideNextClass),Qi(d,d===p,s.slidePrevClass)}),e.emitSlidesClasses()}const pa=(e,n)=>{if(!e||e.destroyed||!e.params)return;const s=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,t=n.closest(s());if(t){let a=t.querySelector(`.${e.params.lazyPreloaderClass}`);!a&&e.isElement&&(t.shadowRoot?a=t.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{t.shadowRoot&&(a=t.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),a&&a.remove())})),a&&a.remove()}},Yi=(e,n)=>{if(!e.slides[n])return;const s=e.slides[n].querySelector('[loading="lazy"]');s&&s.removeAttribute("loading")},Yr=e=>{if(!e||e.destroyed||!e.params)return;let n=e.params.lazyPreloadPrevNext;const s=e.slides.length;if(!s||!n||n<0)return;n=Math.min(n,s);const t=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),a=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const r=a,o=[r-n];o.push(...Array.from({length:n}).map((c,p)=>r+t+p)),e.slides.forEach((c,p)=>{o.includes(c.column)&&Yi(e,p)});return}const i=a+t-1;if(e.params.rewind||e.params.loop)for(let r=a-n;r<=i+n;r+=1){const o=(r%s+s)%s;(o<a||o>i)&&Yi(e,o)}else for(let r=Math.max(a-n,0);r<=Math.min(i+n,s-1);r+=1)r!==a&&(r>i||r<a)&&Yi(e,r)};function Pg(e){const{slidesGrid:n,params:s}=e,t=e.rtlTranslate?e.translate:-e.translate;let a;for(let i=0;i<n.length;i+=1)typeof n[i+1]<"u"?t>=n[i]&&t<n[i+1]-(n[i+1]-n[i])/2?a=i:t>=n[i]&&t<n[i+1]&&(a=i+1):t>=n[i]&&(a=i);return s.normalizeSlideIndex&&(a<0||typeof a>"u")&&(a=0),a}function Ng(e){const n=this,s=n.rtlTranslate?n.translate:-n.translate,{snapGrid:t,params:a,activeIndex:i,realIndex:r,snapIndex:o}=n;let c=e,p;const u=v=>{let _=v-n.virtual.slidesBefore;return _<0&&(_=n.virtual.slides.length+_),_>=n.virtual.slides.length&&(_-=n.virtual.slides.length),_};if(typeof c>"u"&&(c=Pg(n)),t.indexOf(s)>=0)p=t.indexOf(s);else{const v=Math.min(a.slidesPerGroupSkip,c);p=v+Math.floor((c-v)/a.slidesPerGroup)}if(p>=t.length&&(p=t.length-1),c===i&&!n.params.loop){p!==o&&(n.snapIndex=p,n.emit("snapIndexChange"));return}if(c===i&&n.params.loop&&n.virtual&&n.params.virtual.enabled){n.realIndex=u(c);return}const d=n.grid&&a.grid&&a.grid.rows>1;let h;if(n.virtual&&a.virtual.enabled&&a.loop)h=u(c);else if(d){const v=n.slides.find(y=>y.column===c);let _=parseInt(v.getAttribute("data-swiper-slide-index"),10);Number.isNaN(_)&&(_=Math.max(n.slides.indexOf(v),0)),h=Math.floor(_/a.grid.rows)}else if(n.slides[c]){const v=n.slides[c].getAttribute("data-swiper-slide-index");v?h=parseInt(v,10):h=c}else h=c;Object.assign(n,{previousSnapIndex:o,snapIndex:p,previousRealIndex:r,realIndex:h,previousIndex:i,activeIndex:c}),n.initialized&&Yr(n),n.emit("activeIndexChange"),n.emit("snapIndexChange"),(n.initialized||n.params.runCallbacksOnInit)&&(r!==h&&n.emit("realIndexChange"),n.emit("slideChange"))}function Ig(e,n){const s=this,t=s.params;let a=e.closest(`.${t.slideClass}, swiper-slide`);!a&&s.isElement&&n&&n.length>1&&n.includes(e)&&[...n.slice(n.indexOf(e)+1,n.length)].forEach(o=>{!a&&o.matches&&o.matches(`.${t.slideClass}, swiper-slide`)&&(a=o)});let i=!1,r;if(a){for(let o=0;o<s.slides.length;o+=1)if(s.slides[o]===a){i=!0,r=o;break}}if(a&&i)s.clickedSlide=a,s.virtual&&s.params.virtual.enabled?s.clickedIndex=parseInt(a.getAttribute("data-swiper-slide-index"),10):s.clickedIndex=r;else{s.clickedSlide=void 0,s.clickedIndex=void 0;return}t.slideToClickedSlide&&s.clickedIndex!==void 0&&s.clickedIndex!==s.activeIndex&&s.slideToClickedSlide()}var Ag={updateSize:bg,updateSlides:jg,updateAutoHeight:Tg,updateSlidesOffset:Eg,updateSlidesProgress:zg,updateProgress:Cg,updateSlidesClasses:Mg,updateActiveIndex:Ng,updateClickedSlide:Ig};function Lg(e){e===void 0&&(e=this.isHorizontal()?"x":"y");const n=this,{params:s,rtlTranslate:t,translate:a,wrapperEl:i}=n;if(s.virtualTranslate)return t?-a:a;if(s.cssMode)return a;let r=ug(i,e);return r+=n.cssOverflowAdjustment(),t&&(r=-r),r||0}function Hg(e,n){const s=this,{rtlTranslate:t,params:a,wrapperEl:i,progress:r}=s;let o=0,c=0;const p=0;s.isHorizontal()?o=t?-e:e:c=e,a.roundLengths&&(o=Math.floor(o),c=Math.floor(c)),s.previousTranslate=s.translate,s.translate=s.isHorizontal()?o:c,a.cssMode?i[s.isHorizontal()?"scrollLeft":"scrollTop"]=s.isHorizontal()?-o:-c:a.virtualTranslate||(s.isHorizontal()?o-=s.cssOverflowAdjustment():c-=s.cssOverflowAdjustment(),i.style.transform=`translate3d(${o}px, ${c}px, ${p}px)`);let u;const d=s.maxTranslate()-s.minTranslate();d===0?u=0:u=(e-s.minTranslate())/d,u!==r&&s.updateProgress(e),s.emit("setTranslate",s.translate,n)}function Vg(){return-this.snapGrid[0]}function Fg(){return-this.snapGrid[this.snapGrid.length-1]}function Og(e,n,s,t,a){e===void 0&&(e=0),n===void 0&&(n=this.params.speed),s===void 0&&(s=!0),t===void 0&&(t=!0);const i=this,{params:r,wrapperEl:o}=i;if(i.animating&&r.preventInteractionOnTransition)return!1;const c=i.minTranslate(),p=i.maxTranslate();let u;if(t&&e>c?u=c:t&&e<p?u=p:u=e,i.updateProgress(u),r.cssMode){const d=i.isHorizontal();if(n===0)o[d?"scrollLeft":"scrollTop"]=-u;else{if(!i.support.smoothScroll)return md({swiper:i,targetPosition:-u,side:d?"left":"top"}),!0;o.scrollTo({[d?"left":"top"]:-u,behavior:"smooth"})}return!0}return n===0?(i.setTransition(0),i.setTranslate(u),s&&(i.emit("beforeTransitionStart",n,a),i.emit("transitionEnd"))):(i.setTransition(n),i.setTranslate(u),s&&(i.emit("beforeTransitionStart",n,a),i.emit("transitionStart")),i.animating||(i.animating=!0,i.onTranslateToWrapperTransitionEnd||(i.onTranslateToWrapperTransitionEnd=function(h){!i||i.destroyed||h.target===this&&(i.wrapperEl.removeEventListener("transitionend",i.onTranslateToWrapperTransitionEnd),i.onTranslateToWrapperTransitionEnd=null,delete i.onTranslateToWrapperTransitionEnd,i.animating=!1,s&&i.emit("transitionEnd"))}),i.wrapperEl.addEventListener("transitionend",i.onTranslateToWrapperTransitionEnd))),!0}var Dg={getTranslate:Lg,setTranslate:Hg,minTranslate:Vg,maxTranslate:Fg,translateTo:Og};function Rg(e,n){const s=this;s.params.cssMode||(s.wrapperEl.style.transitionDuration=`${e}ms`,s.wrapperEl.style.transitionDelay=e===0?"0ms":""),s.emit("setTransition",e,n)}function wd(e){let{swiper:n,runCallbacks:s,direction:t,step:a}=e;const{activeIndex:i,previousIndex:r}=n;let o=t;if(o||(i>r?o="next":i<r?o="prev":o="reset"),n.emit(`transition${a}`),s&&i!==r){if(o==="reset"){n.emit(`slideResetTransition${a}`);return}n.emit(`slideChangeTransition${a}`),o==="next"?n.emit(`slideNextTransition${a}`):n.emit(`slidePrevTransition${a}`)}}function Bg(e,n){e===void 0&&(e=!0);const s=this,{params:t}=s;t.cssMode||(t.autoHeight&&s.updateAutoHeight(),wd({swiper:s,runCallbacks:e,direction:n,step:"Start"}))}function $g(e,n){e===void 0&&(e=!0);const s=this,{params:t}=s;s.animating=!1,!t.cssMode&&(s.setTransition(0),wd({swiper:s,runCallbacks:e,direction:n,step:"End"}))}var Ug={setTransition:Rg,transitionStart:Bg,transitionEnd:$g};function Wg(e,n,s,t,a){e===void 0&&(e=0),s===void 0&&(s=!0),typeof e=="string"&&(e=parseInt(e,10));const i=this;let r=e;r<0&&(r=0);const{params:o,snapGrid:c,slidesGrid:p,previousIndex:u,activeIndex:d,rtlTranslate:h,wrapperEl:v,enabled:_}=i;if(!_&&!t&&!a||i.destroyed||i.animating&&o.preventInteractionOnTransition)return!1;typeof n>"u"&&(n=i.params.speed);const y=Math.min(i.params.slidesPerGroupSkip,r);let M=y+Math.floor((r-y)/i.params.slidesPerGroup);M>=c.length&&(M=c.length-1);const m=-c[M];if(o.normalizeSlideIndex)for(let S=0;S<p.length;S+=1){const k=-Math.floor(m*100),L=Math.floor(p[S]*100),j=Math.floor(p[S+1]*100);typeof p[S+1]<"u"?k>=L&&k<j-(j-L)/2?r=S:k>=L&&k<j&&(r=S+1):k>=L&&(r=S)}if(i.initialized&&r!==d&&(!i.allowSlideNext&&(h?m>i.translate&&m>i.minTranslate():m<i.translate&&m<i.minTranslate())||!i.allowSlidePrev&&m>i.translate&&m>i.maxTranslate()&&(d||0)!==r))return!1;r!==(u||0)&&s&&i.emit("beforeSlideChangeStart"),i.updateProgress(m);let f;r>d?f="next":r<d?f="prev":f="reset";const g=i.virtual&&i.params.virtual.enabled;if(!(g&&a)&&(h&&-m===i.translate||!h&&m===i.translate))return i.updateActiveIndex(r),o.autoHeight&&i.updateAutoHeight(),i.updateSlidesClasses(),o.effect!=="slide"&&i.setTranslate(m),f!=="reset"&&(i.transitionStart(s,f),i.transitionEnd(s,f)),!1;if(o.cssMode){const S=i.isHorizontal(),k=h?m:-m;if(n===0)g&&(i.wrapperEl.style.scrollSnapType="none",i._immediateVirtual=!0),g&&!i._cssModeVirtualInitialSet&&i.params.initialSlide>0?(i._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{v[S?"scrollLeft":"scrollTop"]=k})):v[S?"scrollLeft":"scrollTop"]=k,g&&requestAnimationFrame(()=>{i.wrapperEl.style.scrollSnapType="",i._immediateVirtual=!1});else{if(!i.support.smoothScroll)return md({swiper:i,targetPosition:k,side:S?"left":"top"}),!0;v.scrollTo({[S?"left":"top"]:k,behavior:"smooth"})}return!0}const T=_d().isSafari;return g&&!a&&T&&i.isElement&&i.virtual.update(!1,!1,r),i.setTransition(n),i.setTranslate(m),i.updateActiveIndex(r),i.updateSlidesClasses(),i.emit("beforeTransitionStart",n,t),i.transitionStart(s,f),n===0?i.transitionEnd(s,f):i.animating||(i.animating=!0,i.onSlideToWrapperTransitionEnd||(i.onSlideToWrapperTransitionEnd=function(k){!i||i.destroyed||k.target===this&&(i.wrapperEl.removeEventListener("transitionend",i.onSlideToWrapperTransitionEnd),i.onSlideToWrapperTransitionEnd=null,delete i.onSlideToWrapperTransitionEnd,i.transitionEnd(s,f))}),i.wrapperEl.addEventListener("transitionend",i.onSlideToWrapperTransitionEnd)),!0}function Gg(e,n,s,t){e===void 0&&(e=0),s===void 0&&(s=!0),typeof e=="string"&&(e=parseInt(e,10));const a=this;if(a.destroyed)return;typeof n>"u"&&(n=a.params.speed);const i=a.grid&&a.params.grid&&a.params.grid.rows>1;let r=e;if(a.params.loop)if(a.virtual&&a.params.virtual.enabled)r=r+a.virtual.slidesBefore;else{let o;if(i){const h=r*a.params.grid.rows;o=a.slides.find(v=>v.getAttribute("data-swiper-slide-index")*1===h).column}else o=a.getSlideIndexByData(r);const c=i?Math.ceil(a.slides.length/a.params.grid.rows):a.slides.length,{centeredSlides:p}=a.params;let u=a.params.slidesPerView;u==="auto"?u=a.slidesPerViewDynamic():(u=Math.ceil(parseFloat(a.params.slidesPerView,10)),p&&u%2===0&&(u=u+1));let d=c-o<u;if(p&&(d=d||o<Math.ceil(u/2)),t&&p&&a.params.slidesPerView!=="auto"&&!i&&(d=!1),d){const h=p?o<a.activeIndex?"prev":"next":o-a.activeIndex-1<a.params.slidesPerView?"next":"prev";a.loopFix({direction:h,slideTo:!0,activeSlideIndex:h==="next"?o+1:o-c+1,slideRealIndex:h==="next"?a.realIndex:void 0})}if(i){const h=r*a.params.grid.rows;r=a.slides.find(v=>v.getAttribute("data-swiper-slide-index")*1===h).column}else r=a.getSlideIndexByData(r)}return requestAnimationFrame(()=>{a.slideTo(r,n,s,t)}),a}function qg(e,n,s){n===void 0&&(n=!0);const t=this,{enabled:a,params:i,animating:r}=t;if(!a||t.destroyed)return t;typeof e>"u"&&(e=t.params.speed);let o=i.slidesPerGroup;i.slidesPerView==="auto"&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(o=Math.max(t.slidesPerViewDynamic("current",!0),1));const c=t.activeIndex<i.slidesPerGroupSkip?1:o,p=t.virtual&&i.virtual.enabled;if(i.loop){if(r&&!p&&i.loopPreventsSliding)return!1;if(t.loopFix({direction:"next"}),t._clientLeft=t.wrapperEl.clientLeft,t.activeIndex===t.slides.length-1&&i.cssMode)return requestAnimationFrame(()=>{t.slideTo(t.activeIndex+c,e,n,s)}),!0}return i.rewind&&t.isEnd?t.slideTo(0,e,n,s):t.slideTo(t.activeIndex+c,e,n,s)}function Qg(e,n,s){n===void 0&&(n=!0);const t=this,{params:a,snapGrid:i,slidesGrid:r,rtlTranslate:o,enabled:c,animating:p}=t;if(!c||t.destroyed)return t;typeof e>"u"&&(e=t.params.speed);const u=t.virtual&&a.virtual.enabled;if(a.loop){if(p&&!u&&a.loopPreventsSliding)return!1;t.loopFix({direction:"prev"}),t._clientLeft=t.wrapperEl.clientLeft}const d=o?t.translate:-t.translate;function h(f){return f<0?-Math.floor(Math.abs(f)):Math.floor(f)}const v=h(d),_=i.map(f=>h(f)),y=a.freeMode&&a.freeMode.enabled;let M=i[_.indexOf(v)-1];if(typeof M>"u"&&(a.cssMode||y)){let f;i.forEach((g,w)=>{v>=g&&(f=w)}),typeof f<"u"&&(M=y?i[f]:i[f>0?f-1:f])}let m=0;if(typeof M<"u"&&(m=r.indexOf(M),m<0&&(m=t.activeIndex-1),a.slidesPerView==="auto"&&a.slidesPerGroup===1&&a.slidesPerGroupAuto&&(m=m-t.slidesPerViewDynamic("previous",!0)+1,m=Math.max(m,0))),a.rewind&&t.isBeginning){const f=t.params.virtual&&t.params.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1;return t.slideTo(f,e,n,s)}else if(a.loop&&t.activeIndex===0&&a.cssMode)return requestAnimationFrame(()=>{t.slideTo(m,e,n,s)}),!0;return t.slideTo(m,e,n,s)}function Yg(e,n,s){n===void 0&&(n=!0);const t=this;if(!t.destroyed)return typeof e>"u"&&(e=t.params.speed),t.slideTo(t.activeIndex,e,n,s)}function Kg(e,n,s,t){n===void 0&&(n=!0),t===void 0&&(t=.5);const a=this;if(a.destroyed)return;typeof e>"u"&&(e=a.params.speed);let i=a.activeIndex;const r=Math.min(a.params.slidesPerGroupSkip,i),o=r+Math.floor((i-r)/a.params.slidesPerGroup),c=a.rtlTranslate?a.translate:-a.translate;if(c>=a.snapGrid[o]){const p=a.snapGrid[o],u=a.snapGrid[o+1];c-p>(u-p)*t&&(i+=a.params.slidesPerGroup)}else{const p=a.snapGrid[o-1],u=a.snapGrid[o];c-p<=(u-p)*t&&(i-=a.params.slidesPerGroup)}return i=Math.max(i,0),i=Math.min(i,a.slidesGrid.length-1),a.slideTo(i,e,n,s)}function Xg(){const e=this;if(e.destroyed)return;const{params:n,slidesEl:s}=e,t=n.slidesPerView==="auto"?e.slidesPerViewDynamic():n.slidesPerView;let a=e.clickedIndex,i;const r=e.isElement?"swiper-slide":`.${n.slideClass}`;if(n.loop){if(e.animating)return;i=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),n.centeredSlides?a<e.loopedSlides-t/2||a>e.slides.length-e.loopedSlides+t/2?(e.loopFix(),a=e.getSlideIndex(fn(s,`${r}[data-swiper-slide-index="${i}"]`)[0]),qr(()=>{e.slideTo(a)})):e.slideTo(a):a>e.slides.length-t?(e.loopFix(),a=e.getSlideIndex(fn(s,`${r}[data-swiper-slide-index="${i}"]`)[0]),qr(()=>{e.slideTo(a)})):e.slideTo(a)}else e.slideTo(a)}var Zg={slideTo:Wg,slideToLoop:Gg,slideNext:qg,slidePrev:Qg,slideReset:Yg,slideToClosest:Kg,slideToClickedSlide:Xg};function Jg(e,n){const s=this,{params:t,slidesEl:a}=s;if(!t.loop||s.virtual&&s.params.virtual.enabled)return;const i=()=>{fn(a,`.${t.slideClass}, swiper-slide`).forEach((h,v)=>{h.setAttribute("data-swiper-slide-index",v)})},r=s.grid&&t.grid&&t.grid.rows>1,o=t.slidesPerGroup*(r?t.grid.rows:1),c=s.slides.length%o!==0,p=r&&s.slides.length%t.grid.rows!==0,u=d=>{for(let h=0;h<d;h+=1){const v=s.isElement?Qr("swiper-slide",[t.slideBlankClass]):Qr("div",[t.slideClass,t.slideBlankClass]);s.slidesEl.append(v)}};if(c){if(t.loopAddBlankSlides){const d=o-s.slides.length%o;u(d),s.recalcSlides(),s.updateSlides()}else Fa("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");i()}else if(p){if(t.loopAddBlankSlides){const d=t.grid.rows-s.slides.length%t.grid.rows;u(d),s.recalcSlides(),s.updateSlides()}else Fa("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");i()}else i();s.loopFix({slideRealIndex:e,direction:t.centeredSlides?void 0:"next",initial:n})}function ev(e){let{slideRealIndex:n,slideTo:s=!0,direction:t,setTranslate:a,activeSlideIndex:i,initial:r,byController:o,byMousewheel:c}=e===void 0?{}:e;const p=this;if(!p.params.loop)return;p.emit("beforeLoopFix");const{slides:u,allowSlidePrev:d,allowSlideNext:h,slidesEl:v,params:_}=p,{centeredSlides:y,initialSlide:M}=_;if(p.allowSlidePrev=!0,p.allowSlideNext=!0,p.virtual&&_.virtual.enabled){s&&(!_.centeredSlides&&p.snapIndex===0?p.slideTo(p.virtual.slides.length,0,!1,!0):_.centeredSlides&&p.snapIndex<_.slidesPerView?p.slideTo(p.virtual.slides.length+p.snapIndex,0,!1,!0):p.snapIndex===p.snapGrid.length-1&&p.slideTo(p.virtual.slidesBefore,0,!1,!0)),p.allowSlidePrev=d,p.allowSlideNext=h,p.emit("loopFix");return}let m=_.slidesPerView;m==="auto"?m=p.slidesPerViewDynamic():(m=Math.ceil(parseFloat(_.slidesPerView,10)),y&&m%2===0&&(m=m+1));const f=_.slidesPerGroupAuto?m:_.slidesPerGroup;let g=f;g%f!==0&&(g+=f-g%f),g+=_.loopAdditionalSlides,p.loopedSlides=g;const w=p.grid&&_.grid&&_.grid.rows>1;u.length<m+g||p.params.effect==="cards"&&u.length<m+g*2?Fa("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):w&&_.grid.fill==="row"&&Fa("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const x=[],T=[],S=w?Math.ceil(u.length/_.grid.rows):u.length,k=r&&S-M<m&&!y;let L=k?M:p.activeIndex;typeof i>"u"?i=p.getSlideIndex(u.find(V=>V.classList.contains(_.slideActiveClass))):L=i;const j=t==="next"||!t,P=t==="prev"||!t;let H=0,D=0;const G=(w?u[i].column:i)+(y&&typeof a>"u"?-m/2+.5:0);if(G<g){H=Math.max(g-G,f);for(let V=0;V<g-G;V+=1){const Q=V-Math.floor(V/S)*S;if(w){const b=S-Q-1;for(let z=u.length-1;z>=0;z-=1)u[z].column===b&&x.push(z)}else x.push(S-Q-1)}}else if(G+m>S-g){D=Math.max(G-(S-g*2),f),k&&(D=Math.max(D,m-S+M+1));for(let V=0;V<D;V+=1){const Q=V-Math.floor(V/S)*S;w?u.forEach((b,z)=>{b.column===Q&&T.push(z)}):T.push(Q)}}if(p.__preventObserver__=!0,requestAnimationFrame(()=>{p.__preventObserver__=!1}),p.params.effect==="cards"&&u.length<m+g*2&&(T.includes(i)&&T.splice(T.indexOf(i),1),x.includes(i)&&x.splice(x.indexOf(i),1)),P&&x.forEach(V=>{u[V].swiperLoopMoveDOM=!0,v.prepend(u[V]),u[V].swiperLoopMoveDOM=!1}),j&&T.forEach(V=>{u[V].swiperLoopMoveDOM=!0,v.append(u[V]),u[V].swiperLoopMoveDOM=!1}),p.recalcSlides(),_.slidesPerView==="auto"?p.updateSlides():w&&(x.length>0&&P||T.length>0&&j)&&p.slides.forEach((V,Q)=>{p.grid.updateSlide(Q,V,p.slides)}),_.watchSlidesProgress&&p.updateSlidesOffset(),s){if(x.length>0&&P){if(typeof n>"u"){const V=p.slidesGrid[L],b=p.slidesGrid[L+H]-V;c?p.setTranslate(p.translate-b):(p.slideTo(L+Math.ceil(H),0,!1,!0),a&&(p.touchEventsData.startTranslate=p.touchEventsData.startTranslate-b,p.touchEventsData.currentTranslate=p.touchEventsData.currentTranslate-b))}else if(a){const V=w?x.length/_.grid.rows:x.length;p.slideTo(p.activeIndex+V,0,!1,!0),p.touchEventsData.currentTranslate=p.translate}}else if(T.length>0&&j)if(typeof n>"u"){const V=p.slidesGrid[L],b=p.slidesGrid[L-D]-V;c?p.setTranslate(p.translate-b):(p.slideTo(L-D,0,!1,!0),a&&(p.touchEventsData.startTranslate=p.touchEventsData.startTranslate-b,p.touchEventsData.currentTranslate=p.touchEventsData.currentTranslate-b))}else{const V=w?T.length/_.grid.rows:T.length;p.slideTo(p.activeIndex-V,0,!1,!0)}}if(p.allowSlidePrev=d,p.allowSlideNext=h,p.controller&&p.controller.control&&!o){const V={slideRealIndex:n,direction:t,setTranslate:a,activeSlideIndex:i,byController:!0};Array.isArray(p.controller.control)?p.controller.control.forEach(Q=>{!Q.destroyed&&Q.params.loop&&Q.loopFix({...V,slideTo:Q.params.slidesPerView===_.slidesPerView?s:!1})}):p.controller.control instanceof p.constructor&&p.controller.control.params.loop&&p.controller.control.loopFix({...V,slideTo:p.controller.control.params.slidesPerView===_.slidesPerView?s:!1})}p.emit("loopFix")}function nv(){const e=this,{params:n,slidesEl:s}=e;if(!n.loop||!s||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const t=[];e.slides.forEach(a=>{const i=typeof a.swiperSlideIndex>"u"?a.getAttribute("data-swiper-slide-index")*1:a.swiperSlideIndex;t[i]=a}),e.slides.forEach(a=>{a.removeAttribute("data-swiper-slide-index")}),t.forEach(a=>{s.append(a)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var sv={loopCreate:Jg,loopFix:ev,loopDestroy:nv};function tv(e){const n=this;if(!n.params.simulateTouch||n.params.watchOverflow&&n.isLocked||n.params.cssMode)return;const s=n.params.touchEventsTarget==="container"?n.el:n.wrapperEl;n.isElement&&(n.__preventObserver__=!0),s.style.cursor="move",s.style.cursor=e?"grabbing":"grab",n.isElement&&requestAnimationFrame(()=>{n.__preventObserver__=!1})}function av(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var iv={setGrabCursor:tv,unsetGrabCursor:av};function rv(e,n){n===void 0&&(n=this);function s(t){if(!t||t===ln()||t===Ee())return null;t.assignedSlot&&(t=t.assignedSlot);const a=t.closest(e);return!a&&!t.getRootNode?null:a||s(t.getRootNode().host)}return s(n)}function Pc(e,n,s){const t=Ee(),{params:a}=e,i=a.edgeSwipeDetection,r=a.edgeSwipeThreshold;return i&&(s<=r||s>=t.innerWidth-r)?i==="prevent"?(n.preventDefault(),!0):!1:!0}function ov(e){const n=this,s=ln();let t=e;t.originalEvent&&(t=t.originalEvent);const a=n.touchEventsData;if(t.type==="pointerdown"){if(a.pointerId!==null&&a.pointerId!==t.pointerId)return;a.pointerId=t.pointerId}else t.type==="touchstart"&&t.targetTouches.length===1&&(a.touchId=t.targetTouches[0].identifier);if(t.type==="touchstart"){Pc(n,t,t.targetTouches[0].pageX);return}const{params:i,touches:r,enabled:o}=n;if(!o||!i.simulateTouch&&t.pointerType==="mouse"||n.animating&&i.preventInteractionOnTransition)return;!n.animating&&i.cssMode&&i.loop&&n.loopFix();let c=t.target;if(i.touchEventsTarget==="wrapper"&&!fg(c,n.wrapperEl)||"which"in t&&t.which===3||"button"in t&&t.button>0||a.isTouched&&a.isMoved)return;const p=!!i.noSwipingClass&&i.noSwipingClass!=="",u=t.composedPath?t.composedPath():t.path;p&&t.target&&t.target.shadowRoot&&u&&(c=u[0]);const d=i.noSwipingSelector?i.noSwipingSelector:`.${i.noSwipingClass}`,h=!!(t.target&&t.target.shadowRoot);if(i.noSwiping&&(h?rv(d,c):c.closest(d))){n.allowClick=!0;return}if(i.swipeHandler&&!c.closest(i.swipeHandler))return;r.currentX=t.pageX,r.currentY=t.pageY;const v=r.currentX,_=r.currentY;if(!Pc(n,t,v))return;Object.assign(a,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),r.startX=v,r.startY=_,a.touchStartTime=Va(),n.allowClick=!0,n.updateSize(),n.swipeDirection=void 0,i.threshold>0&&(a.allowThresholdMove=!1);let y=!0;c.matches(a.focusableElements)&&(y=!1,c.nodeName==="SELECT"&&(a.isTouched=!1)),s.activeElement&&s.activeElement.matches(a.focusableElements)&&s.activeElement!==c&&(t.pointerType==="mouse"||t.pointerType!=="mouse"&&!c.matches(a.focusableElements))&&s.activeElement.blur();const M=y&&n.allowTouchMove&&i.touchStartPreventDefault;(i.touchStartForcePreventDefault||M)&&!c.isContentEditable&&t.preventDefault(),i.freeMode&&i.freeMode.enabled&&n.freeMode&&n.animating&&!i.cssMode&&n.freeMode.onTouchStart(),n.emit("touchStart",t)}function lv(e){const n=ln(),s=this,t=s.touchEventsData,{params:a,touches:i,rtlTranslate:r,enabled:o}=s;if(!o||!a.simulateTouch&&e.pointerType==="mouse")return;let c=e;if(c.originalEvent&&(c=c.originalEvent),c.type==="pointermove"&&(t.touchId!==null||c.pointerId!==t.pointerId))return;let p;if(c.type==="touchmove"){if(p=[...c.changedTouches].find(x=>x.identifier===t.touchId),!p||p.identifier!==t.touchId)return}else p=c;if(!t.isTouched){t.startMoving&&t.isScrolling&&s.emit("touchMoveOpposite",c);return}const u=p.pageX,d=p.pageY;if(c.preventedByNestedSwiper){i.startX=u,i.startY=d;return}if(!s.allowTouchMove){c.target.matches(t.focusableElements)||(s.allowClick=!1),t.isTouched&&(Object.assign(i,{startX:u,startY:d,currentX:u,currentY:d}),t.touchStartTime=Va());return}if(a.touchReleaseOnEdges&&!a.loop)if(s.isVertical()){if(d<i.startY&&s.translate<=s.maxTranslate()||d>i.startY&&s.translate>=s.minTranslate()){t.isTouched=!1,t.isMoved=!1;return}}else{if(r&&(u>i.startX&&-s.translate<=s.maxTranslate()||u<i.startX&&-s.translate>=s.minTranslate()))return;if(!r&&(u<i.startX&&s.translate<=s.maxTranslate()||u>i.startX&&s.translate>=s.minTranslate()))return}if(n.activeElement&&n.activeElement.matches(t.focusableElements)&&n.activeElement!==c.target&&c.pointerType!=="mouse"&&n.activeElement.blur(),n.activeElement&&c.target===n.activeElement&&c.target.matches(t.focusableElements)){t.isMoved=!0,s.allowClick=!1;return}t.allowTouchCallbacks&&s.emit("touchMove",c),i.previousX=i.currentX,i.previousY=i.currentY,i.currentX=u,i.currentY=d;const h=i.currentX-i.startX,v=i.currentY-i.startY;if(s.params.threshold&&Math.sqrt(h**2+v**2)<s.params.threshold)return;if(typeof t.isScrolling>"u"){let x;s.isHorizontal()&&i.currentY===i.startY||s.isVertical()&&i.currentX===i.startX?t.isScrolling=!1:h*h+v*v>=25&&(x=Math.atan2(Math.abs(v),Math.abs(h))*180/Math.PI,t.isScrolling=s.isHorizontal()?x>a.touchAngle:90-x>a.touchAngle)}if(t.isScrolling&&s.emit("touchMoveOpposite",c),typeof t.startMoving>"u"&&(i.currentX!==i.startX||i.currentY!==i.startY)&&(t.startMoving=!0),t.isScrolling||c.type==="touchmove"&&t.preventTouchMoveFromPointerMove){t.isTouched=!1;return}if(!t.startMoving)return;s.allowClick=!1,!a.cssMode&&c.cancelable&&c.preventDefault(),a.touchMoveStopPropagation&&!a.nested&&c.stopPropagation();let _=s.isHorizontal()?h:v,y=s.isHorizontal()?i.currentX-i.previousX:i.currentY-i.previousY;a.oneWayMovement&&(_=Math.abs(_)*(r?1:-1),y=Math.abs(y)*(r?1:-1)),i.diff=_,_*=a.touchRatio,r&&(_=-_,y=-y);const M=s.touchesDirection;s.swipeDirection=_>0?"prev":"next",s.touchesDirection=y>0?"prev":"next";const m=s.params.loop&&!a.cssMode,f=s.touchesDirection==="next"&&s.allowSlideNext||s.touchesDirection==="prev"&&s.allowSlidePrev;if(!t.isMoved){if(m&&f&&s.loopFix({direction:s.swipeDirection}),t.startTranslate=s.getTranslate(),s.setTransition(0),s.animating){const x=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});s.wrapperEl.dispatchEvent(x)}t.allowMomentumBounce=!1,a.grabCursor&&(s.allowSlideNext===!0||s.allowSlidePrev===!0)&&s.setGrabCursor(!0),s.emit("sliderFirstMove",c)}if(new Date().getTime(),a._loopSwapReset!==!1&&t.isMoved&&t.allowThresholdMove&&M!==s.touchesDirection&&m&&f&&Math.abs(_)>=1){Object.assign(i,{startX:u,startY:d,currentX:u,currentY:d,startTranslate:t.currentTranslate}),t.loopSwapReset=!0,t.startTranslate=t.currentTranslate;return}s.emit("sliderMove",c),t.isMoved=!0,t.currentTranslate=_+t.startTranslate;let g=!0,w=a.resistanceRatio;if(a.touchReleaseOnEdges&&(w=0),_>0?(m&&f&&t.allowThresholdMove&&t.currentTranslate>(a.centeredSlides?s.minTranslate()-s.slidesSizesGrid[s.activeIndex+1]-(a.slidesPerView!=="auto"&&s.slides.length-a.slidesPerView>=2?s.slidesSizesGrid[s.activeIndex+1]+s.params.spaceBetween:0)-s.params.spaceBetween:s.minTranslate())&&s.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),t.currentTranslate>s.minTranslate()&&(g=!1,a.resistance&&(t.currentTranslate=s.minTranslate()-1+(-s.minTranslate()+t.startTranslate+_)**w))):_<0&&(m&&f&&t.allowThresholdMove&&t.currentTranslate<(a.centeredSlides?s.maxTranslate()+s.slidesSizesGrid[s.slidesSizesGrid.length-1]+s.params.spaceBetween+(a.slidesPerView!=="auto"&&s.slides.length-a.slidesPerView>=2?s.slidesSizesGrid[s.slidesSizesGrid.length-1]+s.params.spaceBetween:0):s.maxTranslate())&&s.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:s.slides.length-(a.slidesPerView==="auto"?s.slidesPerViewDynamic():Math.ceil(parseFloat(a.slidesPerView,10)))}),t.currentTranslate<s.maxTranslate()&&(g=!1,a.resistance&&(t.currentTranslate=s.maxTranslate()+1-(s.maxTranslate()-t.startTranslate-_)**w))),g&&(c.preventedByNestedSwiper=!0),!s.allowSlideNext&&s.swipeDirection==="next"&&t.currentTranslate<t.startTranslate&&(t.currentTranslate=t.startTranslate),!s.allowSlidePrev&&s.swipeDirection==="prev"&&t.currentTranslate>t.startTranslate&&(t.currentTranslate=t.startTranslate),!s.allowSlidePrev&&!s.allowSlideNext&&(t.currentTranslate=t.startTranslate),a.threshold>0)if(Math.abs(_)>a.threshold||t.allowThresholdMove){if(!t.allowThresholdMove){t.allowThresholdMove=!0,i.startX=i.currentX,i.startY=i.currentY,t.currentTranslate=t.startTranslate,i.diff=s.isHorizontal()?i.currentX-i.startX:i.currentY-i.startY;return}}else{t.currentTranslate=t.startTranslate;return}!a.followFinger||a.cssMode||((a.freeMode&&a.freeMode.enabled&&s.freeMode||a.watchSlidesProgress)&&(s.updateActiveIndex(),s.updateSlidesClasses()),a.freeMode&&a.freeMode.enabled&&s.freeMode&&s.freeMode.onTouchMove(),s.updateProgress(t.currentTranslate),s.setTranslate(t.currentTranslate))}function cv(e){const n=this,s=n.touchEventsData;let t=e;t.originalEvent&&(t=t.originalEvent);let a;if(t.type==="touchend"||t.type==="touchcancel"){if(a=[...t.changedTouches].find(x=>x.identifier===s.touchId),!a||a.identifier!==s.touchId)return}else{if(s.touchId!==null||t.pointerId!==s.pointerId)return;a=t}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(t.type)&&!(["pointercancel","contextmenu"].includes(t.type)&&(n.browser.isSafari||n.browser.isWebView)))return;s.pointerId=null,s.touchId=null;const{params:r,touches:o,rtlTranslate:c,slidesGrid:p,enabled:u}=n;if(!u||!r.simulateTouch&&t.pointerType==="mouse")return;if(s.allowTouchCallbacks&&n.emit("touchEnd",t),s.allowTouchCallbacks=!1,!s.isTouched){s.isMoved&&r.grabCursor&&n.setGrabCursor(!1),s.isMoved=!1,s.startMoving=!1;return}r.grabCursor&&s.isMoved&&s.isTouched&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!1);const d=Va(),h=d-s.touchStartTime;if(n.allowClick){const x=t.path||t.composedPath&&t.composedPath();n.updateClickedSlide(x&&x[0]||t.target,x),n.emit("tap click",t),h<300&&d-s.lastClickTime<300&&n.emit("doubleTap doubleClick",t)}if(s.lastClickTime=Va(),qr(()=>{n.destroyed||(n.allowClick=!0)}),!s.isTouched||!s.isMoved||!n.swipeDirection||o.diff===0&&!s.loopSwapReset||s.currentTranslate===s.startTranslate&&!s.loopSwapReset){s.isTouched=!1,s.isMoved=!1,s.startMoving=!1;return}s.isTouched=!1,s.isMoved=!1,s.startMoving=!1;let v;if(r.followFinger?v=c?n.translate:-n.translate:v=-s.currentTranslate,r.cssMode)return;if(r.freeMode&&r.freeMode.enabled){n.freeMode.onTouchEnd({currentPos:v});return}const _=v>=-n.maxTranslate()&&!n.params.loop;let y=0,M=n.slidesSizesGrid[0];for(let x=0;x<p.length;x+=x<r.slidesPerGroupSkip?1:r.slidesPerGroup){const T=x<r.slidesPerGroupSkip-1?1:r.slidesPerGroup;typeof p[x+T]<"u"?(_||v>=p[x]&&v<p[x+T])&&(y=x,M=p[x+T]-p[x]):(_||v>=p[x])&&(y=x,M=p[p.length-1]-p[p.length-2])}let m=null,f=null;r.rewind&&(n.isBeginning?f=r.virtual&&r.virtual.enabled&&n.virtual?n.virtual.slides.length-1:n.slides.length-1:n.isEnd&&(m=0));const g=(v-p[y])/M,w=y<r.slidesPerGroupSkip-1?1:r.slidesPerGroup;if(h>r.longSwipesMs){if(!r.longSwipes){n.slideTo(n.activeIndex);return}n.swipeDirection==="next"&&(g>=r.longSwipesRatio?n.slideTo(r.rewind&&n.isEnd?m:y+w):n.slideTo(y)),n.swipeDirection==="prev"&&(g>1-r.longSwipesRatio?n.slideTo(y+w):f!==null&&g<0&&Math.abs(g)>r.longSwipesRatio?n.slideTo(f):n.slideTo(y))}else{if(!r.shortSwipes){n.slideTo(n.activeIndex);return}n.navigation&&(t.target===n.navigation.nextEl||t.target===n.navigation.prevEl)?t.target===n.navigation.nextEl?n.slideTo(y+w):n.slideTo(y):(n.swipeDirection==="next"&&n.slideTo(m!==null?m:y+w),n.swipeDirection==="prev"&&n.slideTo(f!==null?f:y))}}function Nc(){const e=this,{params:n,el:s}=e;if(s&&s.offsetWidth===0)return;n.breakpoints&&e.setBreakpoint();const{allowSlideNext:t,allowSlidePrev:a,snapGrid:i}=e,r=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const o=r&&n.loop;(n.slidesPerView==="auto"||n.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!o?e.slideTo(e.slides.length-1,0,!1,!0):e.params.loop&&!r?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=a,e.allowSlideNext=t,e.params.watchOverflow&&i!==e.snapGrid&&e.checkOverflow()}function pv(e){const n=this;n.enabled&&(n.allowClick||(n.params.preventClicks&&e.preventDefault(),n.params.preventClicksPropagation&&n.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function uv(){const e=this,{wrapperEl:n,rtlTranslate:s,enabled:t}=e;if(!t)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-n.scrollLeft:e.translate=-n.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let a;const i=e.maxTranslate()-e.minTranslate();i===0?a=0:a=(e.translate-e.minTranslate())/i,a!==e.progress&&e.updateProgress(s?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function dv(e){const n=this;pa(n,e.target),!(n.params.cssMode||n.params.slidesPerView!=="auto"&&!n.params.autoHeight)&&n.update()}function hv(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const yd=(e,n)=>{const s=ln(),{params:t,el:a,wrapperEl:i,device:r}=e,o=!!t.nested,c=n==="on"?"addEventListener":"removeEventListener",p=n;!a||typeof a=="string"||(s[c]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:o}),a[c]("touchstart",e.onTouchStart,{passive:!1}),a[c]("pointerdown",e.onTouchStart,{passive:!1}),s[c]("touchmove",e.onTouchMove,{passive:!1,capture:o}),s[c]("pointermove",e.onTouchMove,{passive:!1,capture:o}),s[c]("touchend",e.onTouchEnd,{passive:!0}),s[c]("pointerup",e.onTouchEnd,{passive:!0}),s[c]("pointercancel",e.onTouchEnd,{passive:!0}),s[c]("touchcancel",e.onTouchEnd,{passive:!0}),s[c]("pointerout",e.onTouchEnd,{passive:!0}),s[c]("pointerleave",e.onTouchEnd,{passive:!0}),s[c]("contextmenu",e.onTouchEnd,{passive:!0}),(t.preventClicks||t.preventClicksPropagation)&&a[c]("click",e.onClick,!0),t.cssMode&&i[c]("scroll",e.onScroll),t.updateOnWindowResize?e[p](r.ios||r.android?"resize orientationchange observerUpdate":"resize observerUpdate",Nc,!0):e[p]("observerUpdate",Nc,!0),a[c]("load",e.onLoad,{capture:!0}))};function fv(){const e=this,{params:n}=e;e.onTouchStart=ov.bind(e),e.onTouchMove=lv.bind(e),e.onTouchEnd=cv.bind(e),e.onDocumentTouchStart=hv.bind(e),n.cssMode&&(e.onScroll=uv.bind(e)),e.onClick=pv.bind(e),e.onLoad=dv.bind(e),yd(e,"on")}function mv(){yd(this,"off")}var gv={attachEvents:fv,detachEvents:mv};const Ic=(e,n)=>e.grid&&n.grid&&n.grid.rows>1;function vv(){const e=this,{realIndex:n,initialized:s,params:t,el:a}=e,i=t.breakpoints;if(!i||i&&Object.keys(i).length===0)return;const r=ln(),o=t.breakpointsBase==="window"||!t.breakpointsBase?t.breakpointsBase:"container",c=["window","container"].includes(t.breakpointsBase)||!t.breakpointsBase?e.el:r.querySelector(t.breakpointsBase),p=e.getBreakpoint(i,o,c);if(!p||e.currentBreakpoint===p)return;const d=(p in i?i[p]:void 0)||e.originalParams,h=Ic(e,t),v=Ic(e,d),_=e.params.grabCursor,y=d.grabCursor,M=t.enabled;h&&!v?(a.classList.remove(`${t.containerModifierClass}grid`,`${t.containerModifierClass}grid-column`),e.emitContainerClasses()):!h&&v&&(a.classList.add(`${t.containerModifierClass}grid`),(d.grid.fill&&d.grid.fill==="column"||!d.grid.fill&&t.grid.fill==="column")&&a.classList.add(`${t.containerModifierClass}grid-column`),e.emitContainerClasses()),_&&!y?e.unsetGrabCursor():!_&&y&&e.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(T=>{if(typeof d[T]>"u")return;const S=t[T]&&t[T].enabled,k=d[T]&&d[T].enabled;S&&!k&&e[T].disable(),!S&&k&&e[T].enable()});const m=d.direction&&d.direction!==t.direction,f=t.loop&&(d.slidesPerView!==t.slidesPerView||m),g=t.loop;m&&s&&e.changeDirection(),Ae(e.params,d);const w=e.params.enabled,x=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),M&&!w?e.disable():!M&&w&&e.enable(),e.currentBreakpoint=p,e.emit("_beforeBreakpoint",d),s&&(f?(e.loopDestroy(),e.loopCreate(n),e.updateSlides()):!g&&x?(e.loopCreate(n),e.updateSlides()):g&&!x&&e.loopDestroy()),e.emit("breakpoint",d)}function _v(e,n,s){if(n===void 0&&(n="window"),!e||n==="container"&&!s)return;let t=!1;const a=Ee(),i=n==="window"?a.innerHeight:s.clientHeight,r=Object.keys(e).map(o=>{if(typeof o=="string"&&o.indexOf("@")===0){const c=parseFloat(o.substr(1));return{value:i*c,point:o}}return{value:o,point:o}});r.sort((o,c)=>parseInt(o.value,10)-parseInt(c.value,10));for(let o=0;o<r.length;o+=1){const{point:c,value:p}=r[o];n==="window"?a.matchMedia(`(min-width: ${p}px)`).matches&&(t=c):p<=s.clientWidth&&(t=c)}return t||"max"}var wv={setBreakpoint:vv,getBreakpoint:_v};function yv(e,n){const s=[];return e.forEach(t=>{typeof t=="object"?Object.keys(t).forEach(a=>{t[a]&&s.push(n+a)}):typeof t=="string"&&s.push(n+t)}),s}function xv(){const e=this,{classNames:n,params:s,rtl:t,el:a,device:i}=e,r=yv(["initialized",s.direction,{"free-mode":e.params.freeMode&&s.freeMode.enabled},{autoheight:s.autoHeight},{rtl:t},{grid:s.grid&&s.grid.rows>1},{"grid-column":s.grid&&s.grid.rows>1&&s.grid.fill==="column"},{android:i.android},{ios:i.ios},{"css-mode":s.cssMode},{centered:s.cssMode&&s.centeredSlides},{"watch-progress":s.watchSlidesProgress}],s.containerModifierClass);n.push(...r),a.classList.add(...n),e.emitContainerClasses()}function Sv(){const e=this,{el:n,classNames:s}=e;!n||typeof n=="string"||(n.classList.remove(...s),e.emitContainerClasses())}var kv={addClasses:xv,removeClasses:Sv};function bv(){const e=this,{isLocked:n,params:s}=e,{slidesOffsetBefore:t}=s;if(t){const a=e.slides.length-1,i=e.slidesGrid[a]+e.slidesSizesGrid[a]+t*2;e.isLocked=e.size>i}else e.isLocked=e.snapGrid.length===1;s.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),s.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),n&&n!==e.isLocked&&(e.isEnd=!1),n!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var jv={checkOverflow:bv},Ac={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function Tv(e,n){return function(t){t===void 0&&(t={});const a=Object.keys(t)[0],i=t[a];if(typeof i!="object"||i===null){Ae(n,t);return}if(e[a]===!0&&(e[a]={enabled:!0}),a==="navigation"&&e[a]&&e[a].enabled&&!e[a].prevEl&&!e[a].nextEl&&(e[a].auto=!0),["pagination","scrollbar"].indexOf(a)>=0&&e[a]&&e[a].enabled&&!e[a].el&&(e[a].auto=!0),!(a in e&&"enabled"in i)){Ae(n,t);return}typeof e[a]=="object"&&!("enabled"in e[a])&&(e[a].enabled=!0),e[a]||(e[a]={enabled:!1}),Ae(n,t)}}const Ki={eventsEmitter:kg,update:Ag,translate:Dg,transition:Ug,slide:Zg,loop:sv,grabCursor:iv,events:gv,breakpoints:wv,checkOverflow:jv,classes:kv},Xi={};class le{constructor(){let n,s;for(var t=arguments.length,a=new Array(t),i=0;i<t;i++)a[i]=arguments[i];a.length===1&&a[0].constructor&&Object.prototype.toString.call(a[0]).slice(8,-1)==="Object"?s=a[0]:[n,s]=a,s||(s={}),s=Ae({},s),n&&!s.el&&(s.el=n);const r=ln();if(s.el&&typeof s.el=="string"&&r.querySelectorAll(s.el).length>1){const u=[];return r.querySelectorAll(s.el).forEach(d=>{const h=Ae({},s,{el:d});u.push(new le(h))}),u}const o=this;o.__swiper__=!0,o.support=gd(),o.device=vd({userAgent:s.userAgent}),o.browser=_d(),o.eventsListeners={},o.eventsAnyListeners=[],o.modules=[...o.__modules__],s.modules&&Array.isArray(s.modules)&&o.modules.push(...s.modules);const c={};o.modules.forEach(u=>{u({params:s,swiper:o,extendParams:Tv(s,c),on:o.on.bind(o),once:o.once.bind(o),off:o.off.bind(o),emit:o.emit.bind(o)})});const p=Ae({},Ac,c);return o.params=Ae({},p,Xi,s),o.originalParams=Ae({},o.params),o.passedParams=Ae({},s),o.params&&o.params.on&&Object.keys(o.params.on).forEach(u=>{o.on(u,o.params.on[u])}),o.params&&o.params.onAny&&o.onAny(o.params.onAny),Object.assign(o,{enabled:o.params.enabled,el:n,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return o.params.direction==="horizontal"},isVertical(){return o.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:o.params.allowSlideNext,allowSlidePrev:o.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:o.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:o.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),o.emit("_swiper"),o.params.init&&o.init(),o}getDirectionLabel(n){return this.isHorizontal()?n:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[n]}getSlideIndex(n){const{slidesEl:s,params:t}=this,a=fn(s,`.${t.slideClass}, swiper-slide`),i=zc(a[0]);return zc(n)-i}getSlideIndexByData(n){return this.getSlideIndex(this.slides.find(s=>s.getAttribute("data-swiper-slide-index")*1===n))}recalcSlides(){const n=this,{slidesEl:s,params:t}=n;n.slides=fn(s,`.${t.slideClass}, swiper-slide`)}enable(){const n=this;n.enabled||(n.enabled=!0,n.params.grabCursor&&n.setGrabCursor(),n.emit("enable"))}disable(){const n=this;n.enabled&&(n.enabled=!1,n.params.grabCursor&&n.unsetGrabCursor(),n.emit("disable"))}setProgress(n,s){const t=this;n=Math.min(Math.max(n,0),1);const a=t.minTranslate(),r=(t.maxTranslate()-a)*n+a;t.translateTo(r,typeof s>"u"?0:s),t.updateActiveIndex(),t.updateSlidesClasses()}emitContainerClasses(){const n=this;if(!n.params._emitClasses||!n.el)return;const s=n.el.className.split(" ").filter(t=>t.indexOf("swiper")===0||t.indexOf(n.params.containerModifierClass)===0);n.emit("_containerClasses",s.join(" "))}getSlideClasses(n){const s=this;return s.destroyed?"":n.className.split(" ").filter(t=>t.indexOf("swiper-slide")===0||t.indexOf(s.params.slideClass)===0).join(" ")}emitSlidesClasses(){const n=this;if(!n.params._emitClasses||!n.el)return;const s=[];n.slides.forEach(t=>{const a=n.getSlideClasses(t);s.push({slideEl:t,classNames:a}),n.emit("_slideClass",t,a)}),n.emit("_slideClasses",s)}slidesPerViewDynamic(n,s){n===void 0&&(n="current"),s===void 0&&(s=!1);const t=this,{params:a,slides:i,slidesGrid:r,slidesSizesGrid:o,size:c,activeIndex:p}=t;let u=1;if(typeof a.slidesPerView=="number")return a.slidesPerView;if(a.centeredSlides){let d=i[p]?Math.ceil(i[p].swiperSlideSize):0,h;for(let v=p+1;v<i.length;v+=1)i[v]&&!h&&(d+=Math.ceil(i[v].swiperSlideSize),u+=1,d>c&&(h=!0));for(let v=p-1;v>=0;v-=1)i[v]&&!h&&(d+=i[v].swiperSlideSize,u+=1,d>c&&(h=!0))}else if(n==="current")for(let d=p+1;d<i.length;d+=1)(s?r[d]+o[d]-r[p]<c:r[d]-r[p]<c)&&(u+=1);else for(let d=p-1;d>=0;d-=1)r[p]-r[d]<c&&(u+=1);return u}update(){const n=this;if(!n||n.destroyed)return;const{snapGrid:s,params:t}=n;t.breakpoints&&n.setBreakpoint(),[...n.el.querySelectorAll('[loading="lazy"]')].forEach(r=>{r.complete&&pa(n,r)}),n.updateSize(),n.updateSlides(),n.updateProgress(),n.updateSlidesClasses();function a(){const r=n.rtlTranslate?n.translate*-1:n.translate,o=Math.min(Math.max(r,n.maxTranslate()),n.minTranslate());n.setTranslate(o),n.updateActiveIndex(),n.updateSlidesClasses()}let i;if(t.freeMode&&t.freeMode.enabled&&!t.cssMode)a(),t.autoHeight&&n.updateAutoHeight();else{if((t.slidesPerView==="auto"||t.slidesPerView>1)&&n.isEnd&&!t.centeredSlides){const r=n.virtual&&t.virtual.enabled?n.virtual.slides:n.slides;i=n.slideTo(r.length-1,0,!1,!0)}else i=n.slideTo(n.activeIndex,0,!1,!0);i||a()}t.watchOverflow&&s!==n.snapGrid&&n.checkOverflow(),n.emit("update")}changeDirection(n,s){s===void 0&&(s=!0);const t=this,a=t.params.direction;return n||(n=a==="horizontal"?"vertical":"horizontal"),n===a||n!=="horizontal"&&n!=="vertical"||(t.el.classList.remove(`${t.params.containerModifierClass}${a}`),t.el.classList.add(`${t.params.containerModifierClass}${n}`),t.emitContainerClasses(),t.params.direction=n,t.slides.forEach(i=>{n==="vertical"?i.style.width="":i.style.height=""}),t.emit("changeDirection"),s&&t.update()),t}changeLanguageDirection(n){const s=this;s.rtl&&n==="rtl"||!s.rtl&&n==="ltr"||(s.rtl=n==="rtl",s.rtlTranslate=s.params.direction==="horizontal"&&s.rtl,s.rtl?(s.el.classList.add(`${s.params.containerModifierClass}rtl`),s.el.dir="rtl"):(s.el.classList.remove(`${s.params.containerModifierClass}rtl`),s.el.dir="ltr"),s.update())}mount(n){const s=this;if(s.mounted)return!0;let t=n||s.params.el;if(typeof t=="string"&&(t=document.querySelector(t)),!t)return!1;t.swiper=s,t.parentNode&&t.parentNode.host&&t.parentNode.host.nodeName===s.params.swiperElementNodeName.toUpperCase()&&(s.isElement=!0);const a=()=>`.${(s.params.wrapperClass||"").trim().split(" ").join(".")}`;let r=t&&t.shadowRoot&&t.shadowRoot.querySelector?t.shadowRoot.querySelector(a()):fn(t,a())[0];return!r&&s.params.createElements&&(r=Qr("div",s.params.wrapperClass),t.append(r),fn(t,`.${s.params.slideClass}`).forEach(o=>{r.append(o)})),Object.assign(s,{el:t,wrapperEl:r,slidesEl:s.isElement&&!t.parentNode.host.slideSlots?t.parentNode.host:r,hostEl:s.isElement?t.parentNode.host:t,mounted:!0,rtl:t.dir.toLowerCase()==="rtl"||Cn(t,"direction")==="rtl",rtlTranslate:s.params.direction==="horizontal"&&(t.dir.toLowerCase()==="rtl"||Cn(t,"direction")==="rtl"),wrongRTL:Cn(r,"display")==="-webkit-box"}),!0}init(n){const s=this;if(s.initialized||s.mount(n)===!1)return s;s.emit("beforeInit"),s.params.breakpoints&&s.setBreakpoint(),s.addClasses(),s.updateSize(),s.updateSlides(),s.params.watchOverflow&&s.checkOverflow(),s.params.grabCursor&&s.enabled&&s.setGrabCursor(),s.params.loop&&s.virtual&&s.params.virtual.enabled?s.slideTo(s.params.initialSlide+s.virtual.slidesBefore,0,s.params.runCallbacksOnInit,!1,!0):s.slideTo(s.params.initialSlide,0,s.params.runCallbacksOnInit,!1,!0),s.params.loop&&s.loopCreate(void 0,!0),s.attachEvents();const a=[...s.el.querySelectorAll('[loading="lazy"]')];return s.isElement&&a.push(...s.hostEl.querySelectorAll('[loading="lazy"]')),a.forEach(i=>{i.complete?pa(s,i):i.addEventListener("load",r=>{pa(s,r.target)})}),Yr(s),s.initialized=!0,Yr(s),s.emit("init"),s.emit("afterInit"),s}destroy(n,s){n===void 0&&(n=!0),s===void 0&&(s=!0);const t=this,{params:a,el:i,wrapperEl:r,slides:o}=t;return typeof t.params>"u"||t.destroyed||(t.emit("beforeDestroy"),t.initialized=!1,t.detachEvents(),a.loop&&t.loopDestroy(),s&&(t.removeClasses(),i&&typeof i!="string"&&i.removeAttribute("style"),r&&r.removeAttribute("style"),o&&o.length&&o.forEach(c=>{c.classList.remove(a.slideVisibleClass,a.slideFullyVisibleClass,a.slideActiveClass,a.slideNextClass,a.slidePrevClass),c.removeAttribute("style"),c.removeAttribute("data-swiper-slide-index")})),t.emit("destroy"),Object.keys(t.eventsListeners).forEach(c=>{t.off(c)}),n!==!1&&(t.el&&typeof t.el!="string"&&(t.el.swiper=null),cg(t)),t.destroyed=!0),null}static extendDefaults(n){Ae(Xi,n)}static get extendedDefaults(){return Xi}static get defaults(){return Ac}static installModule(n){le.prototype.__modules__||(le.prototype.__modules__=[]);const s=le.prototype.__modules__;typeof n=="function"&&s.indexOf(n)<0&&s.push(n)}static use(n){return Array.isArray(n)?(n.forEach(s=>le.installModule(s)),le):(le.installModule(n),le)}}Object.keys(Ki).forEach(e=>{Object.keys(Ki[e]).forEach(n=>{le.prototype[n]=Ki[e][n]})});le.use([xg,Sg]);function fi(e){let{swiper:n,extendParams:s,on:t,emit:a,params:i}=e;n.autoplay={running:!1,paused:!1,timeLeft:0},s({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let r,o,c=i&&i.autoplay?i.autoplay.delay:3e3,p=i&&i.autoplay?i.autoplay.delay:3e3,u,d=new Date().getTime(),h,v,_,y,M,m,f;function g(b){!n||n.destroyed||!n.wrapperEl||b.target===n.wrapperEl&&(n.wrapperEl.removeEventListener("transitionend",g),!(f||b.detail&&b.detail.bySwiperTouchMove)&&j())}const w=()=>{if(n.destroyed||!n.autoplay.running)return;n.autoplay.paused?h=!0:h&&(p=u,h=!1);const b=n.autoplay.paused?u:d+p-new Date().getTime();n.autoplay.timeLeft=b,a("autoplayTimeLeft",b,b/c),o=requestAnimationFrame(()=>{w()})},x=()=>{let b;return n.virtual&&n.params.virtual.enabled?b=n.slides.find(E=>E.classList.contains("swiper-slide-active")):b=n.slides[n.activeIndex],b?parseInt(b.getAttribute("data-swiper-autoplay"),10):void 0},T=b=>{if(n.destroyed||!n.autoplay.running)return;cancelAnimationFrame(o),w();let z=typeof b>"u"?n.params.autoplay.delay:b;c=n.params.autoplay.delay,p=n.params.autoplay.delay;const E=x();!Number.isNaN(E)&&E>0&&typeof b>"u"&&(z=E,c=E,p=E),u=z;const I=n.params.speed,A=()=>{!n||n.destroyed||(n.params.autoplay.reverseDirection?!n.isBeginning||n.params.loop||n.params.rewind?(n.slidePrev(I,!0,!0),a("autoplay")):n.params.autoplay.stopOnLastSlide||(n.slideTo(n.slides.length-1,I,!0,!0),a("autoplay")):!n.isEnd||n.params.loop||n.params.rewind?(n.slideNext(I,!0,!0),a("autoplay")):n.params.autoplay.stopOnLastSlide||(n.slideTo(0,I,!0,!0),a("autoplay")),n.params.cssMode&&(d=new Date().getTime(),requestAnimationFrame(()=>{T()})))};return z>0?(clearTimeout(r),r=setTimeout(()=>{A()},z)):requestAnimationFrame(()=>{A()}),z},S=()=>{d=new Date().getTime(),n.autoplay.running=!0,T(),a("autoplayStart")},k=()=>{n.autoplay.running=!1,clearTimeout(r),cancelAnimationFrame(o),a("autoplayStop")},L=(b,z)=>{if(n.destroyed||!n.autoplay.running)return;clearTimeout(r),b||(m=!0);const E=()=>{a("autoplayPause"),n.params.autoplay.waitForTransition?n.wrapperEl.addEventListener("transitionend",g):j()};if(n.autoplay.paused=!0,z){M&&(u=n.params.autoplay.delay),M=!1,E();return}u=(u||n.params.autoplay.delay)-(new Date().getTime()-d),!(n.isEnd&&u<0&&!n.params.loop)&&(u<0&&(u=0),E())},j=()=>{n.isEnd&&u<0&&!n.params.loop||n.destroyed||!n.autoplay.running||(d=new Date().getTime(),m?(m=!1,T(u)):T(),n.autoplay.paused=!1,a("autoplayResume"))},P=()=>{if(n.destroyed||!n.autoplay.running)return;const b=ln();b.visibilityState==="hidden"&&(m=!0,L(!0)),b.visibilityState==="visible"&&j()},H=b=>{b.pointerType==="mouse"&&(m=!0,f=!0,!(n.animating||n.autoplay.paused)&&L(!0))},D=b=>{b.pointerType==="mouse"&&(f=!1,n.autoplay.paused&&j())},q=()=>{n.params.autoplay.pauseOnMouseEnter&&(n.el.addEventListener("pointerenter",H),n.el.addEventListener("pointerleave",D))},G=()=>{n.el&&typeof n.el!="string"&&(n.el.removeEventListener("pointerenter",H),n.el.removeEventListener("pointerleave",D))},V=()=>{ln().addEventListener("visibilitychange",P)},Q=()=>{ln().removeEventListener("visibilitychange",P)};t("init",()=>{n.params.autoplay.enabled&&(q(),V(),S())}),t("destroy",()=>{G(),Q(),n.autoplay.running&&k()}),t("_freeModeStaticRelease",()=>{(_||m)&&j()}),t("_freeModeNoMomentumRelease",()=>{n.params.autoplay.disableOnInteraction?k():L(!0,!0)}),t("beforeTransitionStart",(b,z,E)=>{n.destroyed||!n.autoplay.running||(E||!n.params.autoplay.disableOnInteraction?L(!0,!0):k())}),t("sliderFirstMove",()=>{if(!(n.destroyed||!n.autoplay.running)){if(n.params.autoplay.disableOnInteraction){k();return}v=!0,_=!1,m=!1,y=setTimeout(()=>{m=!0,_=!0,L(!0)},200)}}),t("touchEnd",()=>{if(!(n.destroyed||!n.autoplay.running||!v)){if(clearTimeout(y),clearTimeout(r),n.params.autoplay.disableOnInteraction){_=!1,v=!1;return}_&&n.params.cssMode&&j(),_=!1,v=!1}}),t("slideChange",()=>{n.destroyed||!n.autoplay.running||(M=!0)}),Object.assign(n.autoplay,{start:S,stop:k,pause:L,resume:j})}const Ev={320:{spaceBetween:"auto"},375:{spaceBetween:"auto"},414:{spaceBetween:"auto"},425:{spaceBetween:"auto"},480:{spaceBetween:"auto"},600:{spaceBetween:"auto"},768:{spaceBetween:"auto"},840:{spaceBetween:"auto"},900:{spaceBetween:"auto"},960:{spaceBetween:13},1024:{spaceBetween:13},1280:{spaceBetween:17},1366:{spaceBetween:17},1440:{spaceBetween:18.5},1600:{spaceBetween:21},1680:{spaceBetween:22},1920:{spaceBetween:25},2048:{spaceBetween:26},2160:{spaceBetween:28.5},2560:{spaceBetween:33},2880:{spaceBetween:38},3072:{spaceBetween:40},3200:{spaceBetween:41},3440:{spaceBetween:44},3840:{spaceBetween:48},4096:{spaceBetween:52},5120:{spaceBetween:60},6016:{spaceBetween:68},7680:{spaceBetween:80}},zv={320:{spaceBetween:"auto"},375:{spaceBetween:"auto"},414:{spaceBetween:"auto"},425:{spaceBetween:"auto"},480:{spaceBetween:"auto"},600:{spaceBetween:"auto"},768:{spaceBetween:10},840:{spaceBetween:11},900:{spaceBetween:12},960:{spaceBetween:13},1024:{spaceBetween:13},1280:{spaceBetween:17},1366:{spaceBetween:17},1440:{spaceBetween:18.5},1600:{spaceBetween:21},1680:{spaceBetween:22},1920:{spaceBetween:25},2048:{spaceBetween:26},2160:{spaceBetween:28.5},2560:{spaceBetween:33},2880:{spaceBetween:38},3072:{spaceBetween:40},3200:{spaceBetween:41},3440:{spaceBetween:44}},Cv={320:{spaceBetween:"auto"},375:{spaceBetween:"auto"},414:{spaceBetween:"auto"},425:{spaceBetween:"auto"},480:{spaceBetween:"auto"},600:{spaceBetween:"auto"},768:{spaceBetween:10},840:{spaceBetween:10},900:{spaceBetween:12},960:{spaceBetween:13},1024:{spaceBetween:14},1280:{spaceBetween:17},1366:{spaceBetween:18},1440:{spaceBetween:18.5},1600:{spaceBetween:21},1680:{spaceBetween:22},1920:{spaceBetween:25},2048:{spaceBetween:26.5},2160:{spaceBetween:28.5},2560:{spaceBetween:33},2880:{spaceBetween:37.5},3072:{spaceBetween:39.5},3200:{spaceBetween:41},3440:{spaceBetween:44}},Mv={320:{spaceBetween:"auto"},375:{spaceBetween:"auto"},414:{spaceBetween:"auto"},425:{spaceBetween:"auto"},480:{spaceBetween:"auto"},600:{spaceBetween:"auto"},768:{spaceBetween:10},840:{spaceBetween:11},900:{spaceBetween:12},960:{spaceBetween:13},1024:{spaceBetween:13.5},1280:{spaceBetween:17},1366:{spaceBetween:17},1440:{spaceBetween:18.5},1600:{spaceBetween:21},1680:{spaceBetween:22},1920:{spaceBetween:25},2048:{spaceBetween:26.5},2160:{spaceBetween:28.5},2560:{spaceBetween:33},2880:{spaceBetween:37.5},3072:{spaceBetween:39.5},3200:{spaceBetween:41},3440:{spaceBetween:44}};function Pv({children:e}){const n=O.useRef(null);return O.useEffect(()=>{if(!n.current)return;const s=n.current.querySelector(".swiper-wrapper"),a=((s==null?void 0:s.querySelectorAll(".swiper-slide"))||[]).length,i=window.innerWidth;let r=!1,o=!1;(a>3||a===3&&i<1440||a===2&&i<768)&&(r=!0,o=!0),le.use([fi]);const c=new le(n.current,{loop:r,autoplay:o?{delay:15e3,disableOnInteraction:!0,reverseDirection:!0}:!1,slidesPerView:"auto",breakpoints:Ev,pagination:{el:".review-swiper-pagination",clickable:!0},navigation:{nextEl:".review-swiper-button-next",prevEl:".review-swiper-button-prev"},scrollbar:{el:".review-swiper-scrollbar"}}),p=()=>c.update();window.addEventListener("resize",p);const u=n.current,d=new IntersectionObserver(h=>{h.forEach(v=>{v.isIntersecting&&(v.target.classList.add("is-visible"),d.unobserve(v.target))})},{root:null,rootMargin:"0px",threshold:.5});return d.observe(u),()=>{window.removeEventListener("resize",p),c.destroy(!0,!0),u&&d.unobserve(u)}},[]),l.jsx("div",{className:"swiper review-swiper",ref:n,children:e})}const Nv=({containerRef:e,title:n,slug:s,count:t})=>l.jsxs("div",{ref:e,className:"rss-review",children:[l.jsx("h3",{className:"rss-review__title font-28-48",children:n}),l.jsx("p",{className:"rss-review__slug font-16-18",children:s}),l.jsxs("div",{className:"rss-review__total-container",children:[l.jsx("h6",{className:"font-16-20",children:t}),l.jsxs("div",{className:"rss-review__total-container__arrow-container",children:[l.jsx("div",{className:"rss-review__total-container__arrow-container__arrow rss-review__total-container__arrow-container__arrow-left review-swiper-button-prev swiper-button-prev"}),l.jsx("div",{className:"rss-review__total-container__arrow-container__arrow rss-review__total-container__arrow-container__arrow-right review-swiper-button-next swiper-button-next"})]})]}),l.jsx("div",{className:"rss-review__hr-line"}),l.jsx(Pv,{children:l.jsx("div",{className:"swiper-wrapper rss-review__review-items-container",children:rg.map((a,i)=>l.jsxs("div",{className:"swiper-slide rss-review__review-items-container__item",children:[l.jsxs("div",{className:"rss-review__review-items-container__item__header-container",children:[l.jsxs("div",{className:"rss-review__review-items-container__item__header-container__info-container",children:[l.jsx("h6",{className:"rss-review__review-items-container__item__header-container__info-container__title font-16-20",children:a.name}),l.jsx("p",{className:"rss-review__review-items-container__item__header-container__info-container__slug font-14-18",children:a.company})]}),l.jsxs("div",{className:"rss-review__review-items-container__item__header-container__profile-container",children:[l.jsx("div",{className:"rss-review__review-items-container__item__header-container__profile-container__item-container",children:l.jsx("a",{href:a.linkedin,target:"_blank",children:l.jsx("img",{src:"/icons/linkedin-filled-ico.png",alt:"Linkedin Icon",className:"rss-review__review-items-container__item__header-container__profile-container__item-container__item"})})}),l.jsx("div",{className:"rss-review__review-items-container__item__header-container__profile-container__item-container",children:l.jsx("a",{href:a.facebook,target:"_blank",children:l.jsx("img",{src:"/icons/facebook-filled-ico.png",alt:"Facebook Icon",className:"rss-review__review-items-container__item__header-container__profile-container__item-container__item"})})}),l.jsx("div",{className:"rss-review__review-items-container__item__header-container__profile-container__item-container",children:l.jsx("a",{href:a.twiter,target:"_blank",children:l.jsx("img",{src:"/icons/twitter-filled-ico.png",alt:"Twitter Icon",className:"rss-review__review-items-container__item__header-container__profile-container__item-container__item"})})})]})]}),l.jsx("p",{className:"rss-review__review-items-container__item__content font-16-18",children:a.review})]},i))})}),l.jsxs("div",{className:"rss-review__arrows-container",children:[l.jsx("div",{className:"rss-review__arrows-container__arrow rss-review__arrows-container__arrow-left review-swiper-button-prev swiper-button-prev"}),l.jsxs("div",{className:"rss-review__arrows-container__line-container",children:[l.jsx("div",{className:"rss-review__arrows-container__line-container__item"}),l.jsx("div",{className:"rss-review__arrows-container__line-container__item rss-review__arrows-container__line-container__item-active"}),l.jsx("div",{className:"rss-review__arrows-container__line-container__item"})]}),l.jsx("div",{className:"rss-review__arrows-container__arrow rss-review__arrows-container__arrow-right review-swiper-button-next swiper-button-next"})]})]}),Iv=({title:e,slug:n,count:s})=>{const t=O.useRef(null);return l.jsx(Nv,{containerRef:t,title:e,slug:n,count:s})};function Av({children:e,baseClassName:n}){const s=O.useRef(null);return O.useEffect(()=>{if(!s.current)return;const t=s.current.querySelector(".swiper-wrapper"),i=((t==null?void 0:t.querySelectorAll(".swiper-slide"))||[]).length,r=window.innerWidth;let o=!1,c=!1;(i>3||i===3&&r<1440||i===2&&r<768)&&(o=!0,c=!0),le.use([fi]);const p=new le(s.current,{loop:o,slidesPerView:"auto",autoplay:c?{delay:5e3,disableOnInteraction:!0,reverseDirection:!0}:!1,breakpoints:zv,pagination:{el:".works-swiper-pagination",clickable:!0},navigation:{nextEl:".works-swiper-button-next",prevEl:".works-swiper-button-prev"},scrollbar:{el:".works-swiper-scrollbar"}}),u=()=>p.update();window.addEventListener("resize",u);const d=s.current,h=new IntersectionObserver(v=>{v.forEach(_=>{_.isIntersecting&&(_.target.classList.add("is-visible"),h.unobserve(_.target))})},{root:null,rootMargin:"0px",threshold:.5});return h.observe(d),()=>{window.removeEventListener("resize",u),p.destroy(!0,!0),d&&h.unobserve(d)}},[]),l.jsx("div",{className:`swiper works-swiper ${n}`,ref:s,children:e})}function al(e){const n=[...e];for(let s=n.length-1;s>0;s--){const t=Math.floor(Math.random()*(s+1));[n[s],n[t]]=[n[t],n[s]]}return n}function Lv({src:e,onClose:n}){return Xf.createPortal(l.jsx("div",{className:"image-popup-overlay",onClick:n,children:l.jsx("div",{className:"image-popup-container",onClick:s=>s.stopPropagation(),children:l.jsx("img",{src:e,alt:"Expanded"})})}),document.body)}const Hv=({containerRef:e,baseClassName:n,swiperBaseClassName:s,title:t,slug:a,items:i})=>{const r=[...i.flat()],o=O.useMemo(()=>al(r),[]),c="/",[p,u]=O.useState(null),[d,h]=O.useState({});return l.jsxs("div",{ref:e,className:`rss-works ${n}`,children:[p&&l.jsx(Lv,{src:p,onClose:()=>u(null)}),l.jsx("h3",{className:`rss-works__title ${n}__title font-28-48`,children:t}),l.jsx("p",{className:`rss-works__slug ${n}__slug font-14-18`,children:a}),l.jsx(Av,{baseClassName:s,children:l.jsx("div",{className:"swiper-wrapper rss-works__items-container",children:o.map(v=>{const _=d[v.id]||`${c}${v.mainImgPath}`;return l.jsxs("a",{href:`/detail?${v.title.trim().toLowerCase().replace(/\s+/g,"-")}`,className:"swiper-slide rss-works__items-container__item",children:[l.jsx("h4",{className:"rss-works__items-container__item__title font-16-20",children:v.title}),l.jsxs("div",{className:"rss-works__items-container__item__banner-image-container",children:[l.jsx("img",{className:"rss-works__items-container__item__banner-image-container__image",alt:v.imgAlt,src:_}),l.jsx("div",{className:"rss-works__items-container__item__banner-image-container__expand-container",onClick:y=>{y.stopPropagation(),y.preventDefault(),u(_)},children:l.jsx("div",{className:"rss-works__items-container__item__banner-image-container__expand-container__arrow"})})]}),l.jsx("div",{className:"rss-works__items-container__item__image-list-container",children:v.subImgsPath.map((y,M)=>{const m=c+y,f=_===m;return l.jsx("div",{className:`rss-works__items-container__item__image-list-container__image${f?"":" rss-works__items-container__item__image-list-container__image-inactive"}`,onClick:g=>{g.stopPropagation(),g.preventDefault(),h(w=>({...w,[v.id]:m}))},children:l.jsx("img",{src:m,alt:v.imgAlt})},M)})})]},v.id)})})}),l.jsxs("div",{className:`rss-works__arrows-container ${n}__arrows-container`,children:[l.jsx("div",{className:"rss-works__arrows-container__arrow rss-works__arrows-container__arrow-left works-swiper-button-prev swiper-button-prev"}),l.jsxs("div",{className:"rss-works__arrows-container__line-container",children:[l.jsx("div",{className:"rss-works__arrows-container__line-container__item"}),l.jsx("div",{className:"rss-works__arrows-container__line-container__item rss-works__arrows-container__line-container__item-active"}),l.jsx("div",{className:"rss-works__arrows-container__line-container__item"})]}),l.jsx("div",{className:"rss-works__arrows-container__arrow rss-works__arrows-container__arrow-right works-swiper-button-next swiper-button-next"})]}),l.jsx("div",{className:`rss-works__view-btn ${n}__view-btn`,children:l.jsx("a",{href:"/projects",children:l.jsx("input",{type:"button",value:"View All"})})})]})},Kr=({baseClassName:e,swiperBaseClassName:n,title:s,slug:t,items:a})=>{const i=O.useRef(null);return l.jsx(Hv,{containerRef:i,baseClassName:e,swiperBaseClassName:n,title:s,slug:t,items:a})},xd=[{id:"project-001",title:"Swivel Tech",mainImgPath:"images/swivel-tech-image-1.png",subImgsPath:["images/swivel-tech-image-1.png","images/swivel-tech-image-2.png","images/swivel-tech-image-3.png","images/swivel-tech-image-4.png"],imgAlt:"Swivel Tech Image"},{id:"project-002",title:"Offshore Safety",mainImgPath:"images/offshore-safety-image-1.png",subImgsPath:["images/offshore-safety-image-1.png","images/offshore-safety-image-2.png","images/offshore-safety-image-3.png","images/offshore-safety-image-4.png"],imgAlt:"Offshore Safety Image"},{id:"project-003",title:"Swivel Group",mainImgPath:"images/swivel-group-image-1.png",subImgsPath:["images/swivel-group-image-1.png","images/swivel-group-image-2.png","images/swivel-group-image-3.png","images/swivel-group-image-4.png"],imgAlt:"Swivel Group Image"},{id:"project-004",title:"Fitness Care",mainImgPath:"images/fitness-care-image-1.png",subImgsPath:["images/fitness-care-image-1.png","images/fitness-care-image-2.png","images/fitness-care-image-1.png","images/fitness-care-image-2.png"],imgAlt:"Fitness Care Image"},{id:"project-005",title:"Personal Website",mainImgPath:"images/personal-web-image-1.png",subImgsPath:["images/personal-web-image-1.png","images/personal-web-image-2.png","images/personal-web-image-3.png","images/personal-web-image-4.png"],imgAlt:"Personal Website Image"}],Sd=[{id:"project-006",title:"Order UK",mainImgPath:"images/order-uk-image-1.png",subImgsPath:["images/order-uk-image-1.png","images/order-uk-image-2.png","images/order-uk-image-3.png","images/order-uk-image-4.png"],imgAlt:"Order UK Image"},{id:"project-007",title:"Zentry",mainImgPath:"images/zentry-image-1.png",subImgsPath:["images/zentry-image-1.png","images/zentry-image-1.png","images/zentry-image-1.png","images/zentry-image-1.png"],imgAlt:"Zentry Image"},{id:"project-008",title:"Computic Solutions",mainImgPath:"images/computic-solutions-image-1.png",subImgsPath:["images/computic-solutions-image-1.png","images/computic-solutions-image-1.png","images/computic-solutions-image-1.png","images/computic-solutions-image-1.png"],imgAlt:"Computic Solutions Image"}];function zs(e,n,s=1e3,t=60){const[a,i]=O.useState(0),r=O.useRef(0),o=O.useRef(null);return O.useEffect(()=>{const c=e/t;let p=0;const u=()=>{p+=c,p<e?(i(Math.floor(p)),r.current=requestAnimationFrame(u)):(i(e),cancelAnimationFrame(r.current))};return o.current=setTimeout(()=>{r.current=requestAnimationFrame(u)},n),()=>{o.current&&clearTimeout(o.current),cancelAnimationFrame(r.current)}},[e,s,t,n]),a}function Vv(){const e=al([...xd,...Sd]);return l.jsxs(l.Fragment,{children:[l.jsx(os,{}),l.jsx("section",{className:"rss-home",children:l.jsxs("div",{className:"container-fluid",children:[l.jsxs("div",{className:"rss-home__details-section",children:[l.jsx("div",{className:"rss-home__details-section__banner-image"}),l.jsxs("div",{className:"rss-home__details-section__content-container",children:[l.jsx("h4",{className:"rss-home__details-section__content-container__slug font-18-28",children:"Hello There 🤗"}),l.jsx("h2",{className:"rss-home__details-section__content-container__title font-38-58",children:"Nawaz - Full Stack Dev Here"}),l.jsx("p",{className:"rss-home__details-section__content-container__content font-14-18",children:"A dedicated full-stack developer experienced in building robust and user-friendly web solutions. My expertise spans from crafting engaging user interfaces to developing powerful server-side logic and managing databases and deployments. Browse my portfolio to see what I can do"}),l.jsxs("div",{className:"rss-home__details-section__content-container__contact-container",children:[l.jsx("div",{className:"rss-home__details-section__content-container__contact-container__btn",children:l.jsxs("a",{href:"/contact#form",children:[l.jsx("span",{className:"glyphicon glyphicon-earphone"}),l.jsx("p",{className:"font-14-18",children:"Let's Connect"})]})}),l.jsx("a",{href:"/projects",className:"rss-home__details-section__content-container__contact-container__link font-14-18",children:"View Portfolio"})]}),l.jsxs("div",{className:"rss-home__details-section__content-container__status-container",children:[l.jsxs("div",{className:"rss-home__details-section__content-container__status-container__item-container rss-home__details-section__content-container__status-container__item-container-full",children:[l.jsxs("h6",{className:"rss-home__details-section__content-container__status-container__item-container__count",children:[zs(25,2100),l.jsx("span",{className:"rss-home__details-section__content-container__status-container__item-container__count-sy",children:"+"})]}),l.jsx("p",{className:"rss-home__details-section__content-container__status-container__item-container__text font-14-18",children:"Completed Projects"})]}),l.jsxs("div",{className:"rss-home__details-section__content-container__status-container__item-container",children:[l.jsxs("h6",{className:"rss-home__details-section__content-container__status-container__item-container__count",children:[zs(10,2150),l.jsx("span",{className:"rss-home__details-section__content-container__status-container__item-container__count-sy",children:"+"})]}),l.jsx("p",{className:"rss-home__details-section__content-container__status-container__item-container__text font-14-18",children:"Happy Customers"})]}),l.jsxs("div",{className:"rss-home__details-section__content-container__status-container__item-container",children:[l.jsxs("h6",{className:"rss-home__details-section__content-container__status-container__item-container__count",children:[zs(4,2200),l.jsx("span",{className:"rss-home__details-section__content-container__status-container__item-container__count-sy",children:"+"})]}),l.jsx("p",{className:"rss-home__details-section__content-container__status-container__item-container__text font-14-18",children:"Years of Experience"})]})]})]})]}),l.jsxs("div",{className:"rss-home__skills-section",children:[l.jsxs("div",{className:"rss-home__skills-section__heading-container",children:[l.jsx("h3",{className:"rss-home__skills-section__heading-container__title font-28-48",children:"Technical Skills"}),l.jsx("p",{className:"rss-home__skills-section__heading-container__slug font-14-18",children:"As a web developer, I bring a comprehensive skillset encompassing front-end and back-end development, database management, and deployment strategies to build impactful web applications"})]}),l.jsxs("div",{className:"rss-home__skills-section__list-container",children:[l.jsxs("div",{className:"rss-home__skills-section__list-container__item",children:[l.jsx("div",{className:"rss-home__skills-section__list-container__item__icon-container",children:l.jsx("img",{src:"//icons/web-design-ico.png",alt:"web-design"})}),l.jsx("h5",{className:"rss-home__skills-section__list-container__item__title font-18-24",children:"Client-Side Expertise"}),l.jsx("p",{className:"rss-home__skills-section__list-container__item__slug font-14-18",children:"Proficient in building interactive and responsive user interfaces using modern JavaScript frameworks like React, along with core web technologies such as HTML, CSS, and TypeScript. Experienced in state management, component-based architecture, and UI/UX best practices (leveraging Figma for design understanding)"})]}),l.jsxs("div",{className:"rss-home__skills-section__list-container__item",children:[l.jsx("div",{className:"rss-home__skills-section__list-container__item__icon-container",children:l.jsx("img",{src:"//icons/ui-design-ico.png",alt:"ui-design"})}),l.jsx("h5",{className:"rss-home__skills-section__list-container__item__title font-18-24",children:"Server-Side Expertise"}),l.jsx("p",{className:"rss-home__skills-section__list-container__item__slug font-14-18",children:"Experienced in developing robust and scalable server-side applications using Java (Spring Boot), Node.js, and PHP. Proficient in designing and developing RESTful APIs and integrating with third-party services. Focused on creating efficient, secure, and well-documented back-end solutions to power web applications"})]}),l.jsxs("div",{className:"rss-home__skills-section__list-container__item",children:[l.jsx("div",{className:"rss-home__skills-section__list-container__item__icon-container",children:l.jsx("img",{src:"//icons/ux-design-ico.png",alt:"ux-design"})}),l.jsx("h5",{className:"rss-home__skills-section__list-container__item__title font-18-24",children:"Database Management"}),l.jsx("p",{className:"rss-home__skills-section__list-container__item__slug font-14-18",children:"Skilled in designing, implementing, and managing relational (MySQL, PostgreSQL) and NoSQL (MongoDB) databases. Experienced in data modeling, query optimization, and ensuring data integrity"})]}),l.jsxs("div",{className:"rss-home__skills-section__list-container__item",children:[l.jsx("div",{className:"rss-home__skills-section__list-container__item__icon-container",children:l.jsx("img",{src:"//icons/responsive-design-ico.png",alt:"responsive-design"})}),l.jsx("h5",{className:"rss-home__skills-section__list-container__item__title font-18-24",children:"Cloud & DevOps"}),l.jsx("p",{className:"rss-home__skills-section__list-container__item__slug font-14-18",children:"Experienced in deploying web applications to various environments, including cloud platforms like AWS. Familiar with setting up and managing CI/CD pipelines using tools such as Jenkins, GitHub Actions, or Bitbucket Pipelines for automated building, testing, and deployment and containerizations using Docker"})]}),l.jsxs("div",{className:"rss-home__skills-section__list-container__item",children:[l.jsx("div",{className:"rss-home__skills-section__list-container__item__icon-container",children:l.jsx("img",{src:"//icons/wireframing-ico.png",alt:"wireframing"})}),l.jsx("h5",{className:"rss-home__skills-section__list-container__item__title font-18-24",children:"Quality Assurance"}),l.jsx("p",{className:"rss-home__skills-section__list-container__item__slug font-14-18",children:"Committed to delivering high-quality software through thorough testing and quality analysis. Experienced with tools like SonarQube for code quality checks and various testing methodologies"})]}),l.jsxs("div",{className:"rss-home__skills-section__list-container__item",children:[l.jsx("div",{className:"rss-home__skills-section__list-container__item__icon-container",children:l.jsx("img",{src:"//icons/optimization-ico.png",alt:"optimization"})}),l.jsx("h5",{className:"rss-home__skills-section__list-container__item__title font-18-24",children:"Version Control & Collaboration"}),l.jsx("p",{className:"rss-home__skills-section__list-container__item__slug font-14-18",children:"Experienced in using Git for version control and collaborating effectively with teams through platforms like GitHub and Bitbucket. Familiar with branching strategies, pull requests, and code reviews to ensure code quality and efficient teamwork"})]})]})]}),l.jsxs("div",{className:"rss-home__benefits-section",children:[l.jsxs("div",{className:"rss-home__benefits-section__heading-container",children:[l.jsx("h3",{className:"rss-home__benefits-section__heading-container__title font-28-48",children:"Why Choose Me?"}),l.jsx("p",{className:"rss-home__benefits-section__heading-container__slug font-14-18",children:"By choosing my services, you'll enjoy the following benefits"})]}),l.jsxs("div",{className:"rss-home__benefits-section__list-container",children:[l.jsxs("div",{className:"rss-home__benefits-section__list-container__item",children:[l.jsx("h5",{className:"rss-home__benefits-section__list-container__item__title font-18-24",children:"Scalable and Robust Solutions"}),l.jsx("p",{className:"rss-home__benefits-section__list-container__item__slug font-14-18",children:"I understand the importance of building applications that can grow with your needs. I focus on creating scalable architectures and robust back-end systems that are tailored to your specific business requirements and long-term goals"})]}),l.jsxs("div",{className:"rss-home__benefits-section__list-container__item",children:[l.jsx("h5",{className:"rss-home__benefits-section__list-container__item__title font-18-24",children:"High-Performance and Efficient Solutions"}),l.jsx("p",{className:"rss-home__benefits-section__list-container__item__slug font-14-18",children:"With a strong focus on writing clean, efficient, and well-documented code, I ensure optimal performance and maintainability of your web applications. This leads to faster loading times, improved user experience, and easier future updates and enhancements"})]}),l.jsxs("div",{className:"rss-home__benefits-section__list-container__item",children:[l.jsx("h5",{className:"rss-home__benefits-section__list-container__item__title font-18-24",children:"Intuitive and Engaging Applications"}),l.jsx("p",{className:"rss-home__benefits-section__list-container__item__slug font-14-18",children:"I prioritize the end-user experience by building intuitive and functional web applications. By focusing on clear navigation, efficient workflows, and responsive design, I ensure your users have a seamless and engaging interaction with your platform"})]}),l.jsxs("div",{className:"rss-home__benefits-section__list-container__item",children:[l.jsx("h5",{className:"rss-home__benefits-section__list-container__item__title font-18-24",children:"Accessible Across Devices"}),l.jsx("p",{className:"rss-home__benefits-section__list-container__item__slug font-14-18",children:"In today's multi-device landscape, ensuring your web application works flawlessly across all screen sizes and devices is crucial. I specialize in building responsive and adaptive applications that provide a consistent and optimal experience for all users, whether they are on desktop, tablet, or mobile"})]}),l.jsxs("div",{className:"rss-home__benefits-section__list-container__item",children:[l.jsx("h5",{className:"rss-home__benefits-section__list-container__item__title font-18-24",children:"Skills & Technologies"}),l.jsx("p",{className:"rss-home__benefits-section__list-container__item__slug font-14-18",children:"I possess a strong command of core web technologies including JavaScript, TypeScript, HTML, and CSS, and expertise in modern front-end frameworks like React. My skills extend to back-end development using Java (Spring Boot), Node.js, and PHP, along with database management (MySQL, PostgreSQL, MongoDB) and cloud technologies (AWS). I focus on building scalable, efficient, and high-performing web applications"})]})]})]}),l.jsx(Kr,{baseClassName:"rss-works__home",swiperBaseClassName:"rss-works__home__swiper",title:"Featured Works",slug:"Here's are some of my featured works",items:[e]}),l.jsx(Iv,{title:"Recommendations",slug:"Here's what some of my satisfied clients have to say about my work",count:"3 Total Reviews"}),l.jsx(hd,{baseClassName:"rss-faq__home",title:"Frequently Asked Questions",slug:"Here are answers to some common questions",containerHelpBtnValue:"Contact Me",containerHelpIconPath:"icons/star-ico.png",containerHelpIconAlt:"Star Icon",containerHelpTextTitle:"Let's Discuss Your Project",containerHelpTextSlug:"Have a web development project in mind? I'm eager to learn more and discuss how my skills can contribute to your success. Reach out to start the conversation!"})]})}),l.jsx(ls,{})]})}function Fv(){return l.jsx(tg,{component:Vv})}function Ov(){return l.jsxs(l.Fragment,{children:[l.jsx(os,{}),l.jsx("section",{className:"rss-about",children:l.jsxs("div",{className:"container-fluid",children:[l.jsxs("div",{className:"rss-about__details-section",children:[l.jsx("div",{className:"rss-about__details-section__banner-image"}),l.jsxs("div",{className:"rss-about__details-section__content-container",children:[l.jsx("h4",{className:"rss-about__details-section__content-container__slug font-14-24",children:"Crafting Robust and Scalable Web Solutions"}),l.jsx("h2",{className:"rss-about__details-section__content-container__title font-38-58",children:"Mohamed Nawaz"}),l.jsx("p",{className:"rss-about__details-section__content-container__content font-14-18",children:"A versatile web developer passionate about building efficient, scalable, and high-quality web applications. With a strong foundation in both front-end and back-end technologies, I am committed to delivering robust solutions tailored to meet specific needs. I thrive on solving complex challenges and collaborating effectively to bring digital visions to life"}),l.jsxs("div",{className:"rss-about__details-section__content-container__status-container",children:[l.jsxs("div",{className:"rss-about__details-section__content-container__status-container__item-container",children:[l.jsxs("h6",{className:"rss-about__details-section__content-container__status-container__item-container__count",children:[zs(25,2e3),l.jsx("span",{className:"rss-about__details-section__content-container__status-container__item-container__count-sy",children:"+"})]}),l.jsx("p",{className:"rss-about__details-section__content-container__status-container__item-container__text font-14-18",children:"Completed Projects"})]}),l.jsx("div",{className:"rss-about__details-section__content-container__status-container__hr-line"}),l.jsxs("div",{className:"rss-about__details-section__content-container__status-container__item-container",children:[l.jsxs("h6",{className:"rss-about__details-section__content-container__status-container__item-container__count",children:[zs(10,2150),l.jsx("span",{className:"rss-about__details-section__content-container__status-container__item-container__count-sy",children:"+"})]}),l.jsx("p",{className:"rss-about__details-section__content-container__status-container__item-container__text font-14-18",children:"Happy Customers"})]}),l.jsx("div",{className:"rss-about__details-section__content-container__status-container__hr-line"}),l.jsxs("div",{className:"rss-about__details-section__content-container__status-container__item-container",children:[l.jsxs("h6",{className:"rss-about__details-section__content-container__status-container__item-container__count",children:[zs(4,2300),l.jsx("span",{className:"rss-about__details-section__content-container__status-container__item-container__count-sy",children:"+"})]}),l.jsx("p",{className:"rss-about__details-section__content-container__status-container__item-container__text font-14-18",children:"Years of Experience"})]})]})]})]}),l.jsxs("div",{className:"rss-about__timeline-section",children:[l.jsxs("div",{className:"rss-about__timeline-section__heading-container",children:[l.jsx("h2",{className:"rss-about__timeline-section__heading-container__title font-28-48",children:"Key Milestones"}),l.jsx("p",{className:"rss-about__timeline-section__heading-container__content font-14-18",children:"The journey to becoming a well-rounded developer has been marked by continuous learning and diverse experiences. Here are some key milestones that have shaped my skills and expertise"})]}),l.jsxs("div",{className:"rss-about__timeline-section__content-container",children:[l.jsx("p",{className:"rss-about__timeline-section__content-container__time font-16-20",children:"Now"}),l.jsx("div",{className:"rss-about__timeline-section__content-container__line"}),l.jsx("h6",{className:"rss-about__timeline-section__content-container__title rss-about__timeline-section__content-container__title-1 font-16-20",children:"Continued Growth and Specialization"}),l.jsx("div",{className:"rss-about__timeline-section__content-container__line-styled"}),l.jsxs("div",{className:"rss-about__timeline-section__content-container__details-container-right rss-about__timeline-section__content-container__details-container-right-1",children:[l.jsxs("p",{className:"rss-about__timeline-section__content-container__details-container__content font-14-18",children:["Continuing on my path of growth and exploration, I've expanded my skill set by delving into cloud technologies (AWS), advanced front-end frameworks (TypeScript). I'm focused on building scalable microservices, performant single-page applications and expanding my knowledge in the area of ",l.jsx("span",{className:"rss-about__timeline-section__content-container__details-container__content-strong",children:"Software Engineering"})]}),l.jsx("img",{src:"/icons/timeline_purple-ico.png",alt:"Timeline Purple",className:"rss-about__timeline-section__content-container__details-container__ico"})]}),l.jsx("div",{className:"rss-about__timeline-section__content-container__line rss-about__timeline-section__content-container__line-green"}),l.jsx("p",{className:"rss-about__timeline-section__content-container__time font-16-20",children:"2024"}),l.jsx("div",{className:"rss-about__timeline-section__content-container__line rss-about__timeline-section__content-container__line-green"}),l.jsx("h6",{className:"rss-about__timeline-section__content-container__title rss-about__timeline-section__content-container__title-2 font-16-20",children:"Maytech Technologies Pvt Ltd"}),l.jsx("div",{className:"rss-about__timeline-section__content-container__line-styled rss-about__timeline-section__content-container__line-styled-green"}),l.jsxs("div",{className:"rss-about__timeline-section__content-container__details-container-left rss-about__timeline-section__content-container__details-container-left-1",children:[l.jsxs("p",{className:"rss-about__timeline-section__content-container__details-container__content font-14-18",children:["At ",l.jsx("span",{className:"rss-about__timeline-section__content-container__details-container__content-strong",children:"Maytech"}),", I was involved in building and maintaing front-end and CMS based web applications with React for their clients while also gaining experience on handling projects fully from planning to delivery"]}),l.jsx("img",{src:"/icons/timeline_green-ico.png",alt:"Timeline Green",className:"rss-about__timeline-section__content-container__details-container__ico"})]}),l.jsx("div",{className:"rss-about__timeline-section__content-container__line rss-about__timeline-section__content-container__line-yellow"}),l.jsx("p",{className:"rss-about__timeline-section__content-container__time font-16-20",children:"2022"}),l.jsx("div",{className:"rss-about__timeline-section__content-container__line rss-about__timeline-section__content-container__line-yellow"}),l.jsx("h6",{className:"rss-about__timeline-section__content-container__title rss-about__timeline-section__content-container__title-3 font-16-20",children:"Swivel Tech Pvt Ltd"}),l.jsx("div",{className:"rss-about__timeline-section__content-container__line-styled rss-about__timeline-section__content-container__line-styled-yellow"}),l.jsxs("div",{className:"rss-about__timeline-section__content-container__details-container-right rss-about__timeline-section__content-container__details-container-right-2",children:[l.jsxs("p",{className:"rss-about__timeline-section__content-container__details-container__content font-14-18",children:["During my time at ",l.jsx("span",{className:"rss-about__timeline-section__content-container__details-container__content-strong",children:"Swivel Tech"}),", I focused on building Restful APIs using Java and Spring Boot with microservice architectures, was able to gain hands on experience on industry best practices, tools and processes to building robust and scalable applications"]}),l.jsx("img",{src:"/icons/timeline_yellow-ico.png",alt:"Timeline Yellow",className:"rss-about__timeline-section__content-container__details-container__ico"})]}),l.jsx("div",{className:"rss-about__timeline-section__content-container__line rss-about__timeline-section__content-container__line-orange"}),l.jsx("p",{className:"rss-about__timeline-section__content-container__time font-16-20",children:"2022"}),l.jsx("div",{className:"rss-about__timeline-section__content-container__line rss-about__timeline-section__content-container__line-orange"}),l.jsx("h6",{className:"rss-about__timeline-section__content-container__title rss-about__timeline-section__content-container__title-4 font-16-20",children:"Graduation"}),l.jsx("div",{className:"rss-about__timeline-section__content-container__line-styled rss-about__timeline-section__content-container__line-styled-orange"}),l.jsxs("div",{className:"rss-about__timeline-section__content-container__details-container-left rss-about__timeline-section__content-container__details-container-left-2",children:[l.jsxs("p",{className:"rss-about__timeline-section__content-container__details-container__content font-14-18",children:["Graduated in ",l.jsx("span",{className:"rss-about__timeline-section__content-container__details-container__content-strong",children:"Information and Communication Engineering"})," from ",l.jsx("span",{className:"rss-about__timeline-section__content-container__details-container__content-strong",children:"SLTC Research University"}),", This academic foundation provided me with a strong understanding of skills like determination, persistence, data structures and algorithms, etc"]}),l.jsx("img",{src:"/icons/timeline_orange-ico.png",alt:"Timeline Orange",className:"rss-about__timeline-section__content-container__details-container__ico"})]}),l.jsx("div",{className:"rss-about__timeline-section__content-container__line rss-about__timeline-section__content-container__line-pink"}),l.jsx("p",{className:"rss-about__timeline-section__content-container__time font-16-20",children:"2017"}),l.jsx("div",{className:"rss-about__timeline-section__content-container__line rss-about__timeline-section__content-container__line-pink"}),l.jsx("h6",{className:"rss-about__timeline-section__content-container__title rss-about__timeline-section__content-container__title-5 font-16-20",children:"Freelancing"}),l.jsx("div",{className:"rss-about__timeline-section__content-container__line-styled rss-about__timeline-section__content-container__line-styled-pink"}),l.jsxs("div",{className:"rss-about__timeline-section__content-container__details-container-right rss-about__timeline-section__content-container__details-container-right-3",children:[l.jsxs("p",{className:"rss-about__timeline-section__content-container__details-container__content font-14-18",children:["As a freelanceer, I undertook various projects involving graphic design, data entry, digital marketing, social media handling, as well as some small development tasks, These experiences honed my skills in these areas as well as things like client communication, project management, and independent problem solving",l.jsx("span",{className:"rss-about__timeline-section__content-container__details-container__content-strong"})]}),l.jsx("img",{src:"/icons/timeline_pink-ico.png",alt:"Timeline Pink",className:"rss-about__timeline-section__content-container__details-container__ico"})]}),l.jsx("div",{className:"rss-about__timeline-section__content-container__line rss-about__timeline-section__content-container__line-blue"}),l.jsx("p",{className:"rss-about__timeline-section__content-container__time font-16-20",children:"2016"}),l.jsx("div",{className:"rss-about__timeline-section__content-container__line rss-about__timeline-section__content-container__line-blue"}),l.jsx("h6",{className:"rss-about__timeline-section__content-container__title rss-about__timeline-section__content-container__title-last font-16-20",children:"Foundations"}),l.jsx("div",{className:"rss-about__timeline-section__content-container__line-styled rss-about__timeline-section__content-container__line-styled-blue"}),l.jsxs("div",{className:"rss-about__timeline-section__content-container__details-container-top",children:[l.jsxs("div",{children:[l.jsx("h6",{className:"rss-about__timeline-section__content-container__details-container-top__title font-16-20",children:"Foundations"}),l.jsxs("p",{className:"rss-about__timeline-section__content-container__details-container__content font-14-18",children:["My intial journey into development involved building a strong foundation in the core technologies like HTML, CSS, and JS. This stage was crucial for understanding key foundations of digitalization and development",l.jsx("span",{className:"rss-about__timeline-section__content-container__details-container__content-strong"})]})]}),l.jsx("img",{src:"/icons/timeline_blue-ico.png",alt:"Timeline Blue",className:"rss-about__timeline-section__content-container__details-container__ico"})]})]})]})]})}),l.jsx(ls,{})]})}const Dv={2147856:{id:2147856,title:"Building local LLM AI-Powered Applications with Quarkus, Ollama and Testcontainers",tag_list:["java","ai","test","programming"],cover_image:"https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fdefv9j6s88xk87tot29t.png",url:"https://dev.to/jonathanvila/building-local-llm-ai-powered-applications-with-quarkus-ollama-and-testcontainers-10ed",published_at:"2024-12-10T15:39:54Z",body_html:`<p>Traditionally, many AI-powered applications rely on cloud-based APIs or centralized services for model hosting and execution. While this approach has its advantages, such as scalability and ease of use, it also introduces challenges around latency, data privacy, and dependency on third-party providers.</p>

<p>This is where local AI models shine. By running models directly within your application's infrastructure, you gain greater control over performance, data security, and deployment flexibility. However, building such systems requires the right tools and frameworks to bridge the gap between traditional software development and AI model integration.</p>

<p>In this article, we explore how to combine Quarkus, a modern Java framework optimized for cloud-native applications, with Ollama, a platform for running AI models locally. We’ll also demonstrate how tools like Testcontainers and Quarkus Dev Services simplify development and testing workflows. Using the PingPong-AI project as a practical example, you'll learn how to build and test AI-driven applications that harness the power of local models.</p>

<p>The PingPong-AI project demonstrates a simple implementation of AI-powered functionality using Quarkus as the backend framework and Ollama for handling AI models. Let’s break down the architecture and walk through key components of the code.</p>


<hr>

<h2>
  <a name="project-overview" href="#project-overview">
  </a>
  Project Overview
</h2>

<p>In PingPong-AI, Ollama is used to simulate a simple conversation model where a curious service generates questions around a topic and a wise service responds with informated answers, that will generate more questions on the curious service.</p>

<p>The project integrates Quarkus with Ollama to create an AI model-driven application. It leverages Quarkus's lightweight and fast development model to serve as a backend for invoking and managing AI interactions. Here's an overview of what we'll cover:</p>

<ol>
<li>Integrating Quarkus with Ollama</li>
<li>Using Testcontainers for Integration Testing</li>
<li>Leveraging Quarkus Dev Services for Simplified Development</li>
</ol>


<hr>

<h2>
  <a name="1-integrating-quarkus-with-ollama" href="#1-integrating-quarkus-with-ollama">
  </a>
  1. Integrating Quarkus with Ollama
</h2>

<h3>
  <a name="why-ollama" href="#why-ollama">
  </a>
  Why Ollama?
</h3>

<p>Ollama simplifies the deployment and use of AI models in applications. It provides a runtime for AI model execution and can be easily integrated into existing applications. </p>

<h3>
  <a name="quarkus-and-ollama-integration" href="#quarkus-and-ollama-integration">
  </a>
  Quarkus and Ollama Integration
</h3>

<p>The integration with Quarkus is handled using REST endpoints to interact with Ollama. The Quarkus application serves as the middleware to process client requests and communicate with the Ollama runtime.</p>

<p>Here’s a snippet from <code>PingPongResource.java</code>, which defines the REST endpoint for the PingPong interaction:<br>
</p>

<div class="highlight js-code-highlight">
<pre class="highlight java"><code><span class="nd">@Path</span><span class="o">(</span><span class="s">"/chat"</span><span class="o">)</span>
<span class="kd">public</span> <span class="kd">class</span> <span class="nc">CuriousChatResource</span> <span class="o">{</span>
    <span class="nd">@Inject</span>
    <span class="nc">CuriousService</span> <span class="n">curiousService</span><span class="o">;</span>

    <span class="nd">@Inject</span>
    <span class="nc">WiseService</span> <span class="n">wiseService</span><span class="o">;</span>

   <span class="nd">@POST</span>
    <span class="nd">@Produces</span><span class="o">(</span><span class="nc">MediaType</span><span class="o">.</span><span class="na">TEXT_PLAIN</span><span class="o">)</span>
    <span class="nd">@Consumes</span><span class="o">(</span><span class="nc">MediaType</span><span class="o">.</span><span class="na">TEXT_PLAIN</span><span class="o">)</span>
    <span class="nd">@Path</span><span class="o">(</span><span class="s">"/{numberOfQuestions}"</span><span class="o">)</span>
    <span class="kd">public</span> <span class="nc">String</span> <span class="nf">chat</span><span class="o">(</span><span class="nd">@PathParam</span><span class="o">(</span><span class="s">"numberOfQuestions"</span><span class="o">)</span> <span class="nc">Integer</span> <span class="n">numberOfQuestions</span><span class="o">,</span> <span class="nc">String</span> <span class="n">topic</span><span class="o">)</span> <span class="o">{</span>
        <span class="nc">StringBuilder</span> <span class="n">sb</span> <span class="o">=</span> <span class="k">new</span> <span class="nc">StringBuilder</span><span class="o">();</span>
        <span class="n">sb</span><span class="o">.</span><span class="na">append</span><span class="o">(</span><span class="s">"&gt; Topic: "</span><span class="o">).</span><span class="na">append</span><span class="o">(</span><span class="n">topic</span><span class="o">).</span><span class="na">append</span><span class="o">(</span><span class="s">"\\n"</span><span class="o">);</span>
        <span class="k">while</span> <span class="o">(</span><span class="n">numberOfQuestions</span><span class="o">--</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="o">)</span> <span class="o">{</span>
            <span class="nc">String</span> <span class="n">question</span> <span class="o">=</span> <span class="n">curiousService</span><span class="o">.</span><span class="na">chat</span><span class="o">(</span><span class="n">topic</span><span class="o">);</span>
            <span class="n">sb</span><span class="o">.</span><span class="na">append</span><span class="o">(</span><span class="s">"&gt; Question: "</span><span class="o">).</span><span class="na">append</span><span class="o">(</span><span class="n">question</span><span class="o">).</span><span class="na">append</span><span class="o">(</span><span class="s">"\\n"</span><span class="o">);</span>
            <span class="n">topic</span> <span class="o">=</span> <span class="n">wiseService</span><span class="o">.</span><span class="na">chat</span><span class="o">(</span><span class="n">question</span><span class="o">);</span>
            <span class="n">sb</span><span class="o">.</span><span class="na">append</span><span class="o">(</span><span class="s">"&gt; Answer: "</span><span class="o">).</span><span class="na">append</span><span class="o">(</span><span class="n">topic</span><span class="o">).</span><span class="na">append</span><span class="o">(</span><span class="s">"\\n"</span><span class="o">);</span>
        <span class="o">}</span>

        <span class="k">return</span> <span class="n">sb</span><span class="o">.</span><span class="na">toString</span><span class="o">();</span>
    <span class="o">}</span>
<span class="o">}</span>
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



<p>In this code:</p>

<ul>
<li>The <code>CuriousChatResource</code> handles client POST requests.</li>
<li>The injected <code>CuriousService</code> and <code>WiseService</code> interface with the Ollama runtime to process the message.</li>
</ul>

<p>These Ollama services are responsible for calling the Ollama runtime. Here's a snippet from <code>CuriousService.java</code>:<br>
</p>

<div class="highlight js-code-highlight">
<pre class="highlight java"><code><span class="nd">@RegisterAiService</span>
<span class="nd">@SystemMessage</span><span class="o">(</span><span class="s">"You are a curious person that creates a short question for every message you receive."</span><span class="o">)</span>
<span class="kd">public</span> <span class="kd">interface</span> <span class="nc">CuriousService</span> <span class="o">{</span>
    <span class="kd">public</span> <span class="nc">String</span> <span class="nf">chat</span><span class="o">(</span><span class="nd">@UserMessage</span> <span class="nc">String</span> <span class="n">message</span><span class="o">);</span>
<span class="o">}</span>
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



<p>We can even use different models for each service, specifying the configuration property that identifies the model. This example comes from <code>CuriousService.java</code>:<br>
</p>

<div class="highlight js-code-highlight">
<pre class="highlight java"><code><span class="nd">@RegisterAiService</span><span class="o">(</span><span class="n">modelName</span> <span class="o">=</span> <span class="s">"curiousModel"</span><span class="o">)</span>
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



<p>And we identify the model in <code>application.properties</code> :<br>
</p>

<div class="highlight js-code-highlight">
<pre class="highlight java"><code><span class="n">quarkus</span><span class="o">.</span><span class="na">langchain4j</span><span class="o">.</span><span class="na">ollama</span><span class="o">.</span><span class="na">wiseModel</span><span class="o">.</span><span class="na">chat</span><span class="o">-</span><span class="n">model</span><span class="o">.</span><span class="na">model</span><span class="o">-</span><span class="n">id</span><span class="o">=</span><span class="n">tinydolphin</span>
<span class="n">quarkus</span><span class="o">.</span><span class="na">langchain4j</span><span class="o">.</span><span class="na">ollama</span><span class="o">.</span><span class="na">curiousModel</span><span class="o">.</span><span class="na">chat</span><span class="o">-</span><span class="n">model</span><span class="o">.</span><span class="na">model</span><span class="o">-</span><span class="n">id</span><span class="o">=</span><span class="n">tinyllama</span>
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
  <a name="2-using-testcontainers-for-integration-testing" href="#2-using-testcontainers-for-integration-testing">
  </a>
  2. Using Testcontainers for Integration Testing
</h2>

<h3>
  <a name="why-testcontainers" href="#why-testcontainers">
  </a>
  Why Testcontainers?
</h3>

<p><strong>Testcontainers</strong> is a Java library for running lightweight, disposable containers during tests. In PingPong-AI, Testcontainers are used to set up an environment with an Ollama runtime for integration testing.</p>

<h3>
  <a name="example-setting-up-a-testcontainer-for-ollama" href="#example-setting-up-a-testcontainer-for-ollama">
  </a>
  Example: Setting up a Testcontainer for Ollama
</h3>

<p>The test class demonstrates how to configure and use Testcontainers:<br>
</p>

<div class="highlight js-code-highlight">
<pre class="highlight java"><code><span class="nd">@QuarkusTest</span>
<span class="kd">class</span> <span class="nc">CuriousChatResourceTest</span> <span class="o">{</span>
    <span class="nd">@Inject</span>
    <span class="nc">CuriousService</span> <span class="n">curiousService</span><span class="o">;</span>

    <span class="nd">@Inject</span>
    <span class="nc">WiseService</span> <span class="n">wiseService</span><span class="o">;</span>

    <span class="nd">@Test</span>
    <span class="nd">@ActivateRequestContext</span>
    <span class="kt">void</span> <span class="nf">testFXMainControllerInteraction</span><span class="o">()</span> <span class="o">{</span>

        <span class="c1">// Perform interaction and assertions</span>
        <span class="kt">var</span> <span class="n">curiousAnswer</span> <span class="o">=</span> <span class="n">curiousService</span><span class="o">.</span><span class="na">chat</span><span class="o">(</span><span class="s">"Barcelona"</span><span class="o">);</span>
        <span class="kt">var</span> <span class="n">response</span> <span class="o">=</span> <span class="n">wiseService</span><span class="o">.</span><span class="na">chat</span><span class="o">(</span><span class="n">curiousAnswer</span><span class="o">);</span>

        <span class="nc">Log</span><span class="o">.</span><span class="na">infof</span><span class="o">(</span><span class="s">"Wise service response: %s"</span><span class="o">,</span> <span class="n">response</span><span class="o">);</span>
        <span class="c1">// Using llama2 model we can check if the response contains 'Barcelona', but not</span>
        <span class="c1">// with tinyllama</span>
        <span class="n">assertFalse</span><span class="o">(</span><span class="n">response</span><span class="o">.</span><span class="na">isEmpty</span><span class="o">(),</span> <span class="s">"Response should not be empty"</span><span class="o">);</span>
    <span class="o">}</span>
    <span class="nd">@Test</span>
    <span class="nd">@ActivateRequestContext</span>
    <span class="kt">void</span> <span class="nf">testChatEndpoint</span><span class="o">()</span> <span class="o">{</span>
        <span class="n">given</span><span class="o">()</span>
            <span class="o">.</span><span class="na">when</span><span class="o">()</span>
                <span class="o">.</span><span class="na">body</span><span class="o">(</span><span class="s">"Barcelona"</span><span class="o">)</span>
                <span class="o">.</span><span class="na">contentType</span><span class="o">(</span><span class="nc">ContentType</span><span class="o">.</span><span class="na">TEXT</span><span class="o">)</span>
                <span class="o">.</span><span class="na">post</span><span class="o">(</span><span class="s">"/chat/3"</span><span class="o">)</span>
            <span class="o">.</span><span class="na">then</span><span class="o">()</span>
                <span class="o">.</span><span class="na">statusCode</span><span class="o">(</span><span class="mi">200</span><span class="o">)</span>
                <span class="o">.</span><span class="na">contentType</span><span class="o">(</span><span class="nc">ContentType</span><span class="o">.</span><span class="na">TEXT</span><span class="o">)</span>
                <span class="o">.</span><span class="na">body</span><span class="o">(</span><span class="n">not</span><span class="o">(</span><span class="n">empty</span><span class="o">()))</span>
                <span class="o">.</span><span class="na">body</span><span class="o">(</span><span class="n">org</span><span class="o">.</span><span class="na">hamcrest</span><span class="o">.</span><span class="na">Matchers</span><span class="o">.</span><span class="na">stringContainsInOrder</span><span class="o">(</span><span class="s">"Question:"</span><span class="o">,</span> <span class="s">"Answer:"</span><span class="o">,</span> <span class="s">"Question:"</span><span class="o">,</span> <span class="s">"Answer:"</span><span class="o">,</span> <span class="s">"Question:"</span><span class="o">,</span> <span class="s">"Answer:"</span><span class="o">));</span>

    <span class="o">}</span>
<span class="o">}</span>
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
  <a name="key-points" href="#key-points">
  </a>
  Key Points:
</h3>

<ul>
<li>The <code>@QuarkusTest</code> annotation allows Quarkus to run the application in a test-friendly mode.</li>
<li>Quarkus finds a service (Ollama) for which it needs an instance and it will spin up a container for that.</li>
</ul>


<hr>

<h2>
  <a name="3-leveraging-quarkus-dev-services-for-ollama" href="#3-leveraging-quarkus-dev-services-for-ollama">
  </a>
  3. Leveraging Quarkus Dev Services for Ollama
</h2>

<h3>
  <a name="what-are-quarkus-dev-services" href="#what-are-quarkus-dev-services">
  </a>
  What Are Quarkus Dev Services?
</h3>

<p>Quarkus Dev Services simplifies the setup of required services during development. For this project, Quarkus Dev Services can spin up an Ollama runtime container automatically.</p>

<h3>
  <a name="configuring-dev-services" href="#configuring-dev-services">
  </a>
  Configuring Dev Services
</h3>

<p>The <code>application.properties</code> file includes configurations for enabling Dev Services:<br>
</p>

<div class="highlight js-code-highlight">
<pre class="highlight properties"><code><span class="py">quarkus.langchain4j.ollama.chat-model.model-id</span><span class="p">=</span><span class="s">tinyllama</span>
<span class="py">quarkus.langchain4j.ollama.devservices.model</span><span class="p">=</span><span class="s">tinyllama</span>
<span class="py">quarkus.langchain4j.log-requests</span><span class="p">=</span><span class="s">true</span>
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



<p>With these configurations, Quarkus Dev Services automatically starts an Ollama container when the application is run in development mode or in test, removing the need for manual setup.</p>

<h3>
  <a name="development-workflow" href="#development-workflow">
  </a>
  Development Workflow
</h3>

<p>You can launch the application in development mode using the following command:<br>
</p>

<div class="highlight js-code-highlight">
<pre class="highlight shell"><code>./mvnw quarkus:dev
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



<p>This command:</p>

<ul>
<li>Starts the Quarkus application.</li>
<li>Automatically sets up an Ollama runtime container.</li>
<li>Enables hot-reloading for rapid development.</li>
</ul>


<hr>

<h2>
  <a name="conclusion" href="#conclusion">
  </a>
  Conclusion
</h2>

<p>The PingPong-AI project demonstrates a seamless integration of Quarkus with Ollama, making it easy to build AI-powered applications. By leveraging Testcontainers and Quarkus Dev Services, developers can efficiently test and develop their applications in a containerized and automated environment.</p>

<h3>
  <a name="key-takeaways" href="#key-takeaways">
  </a>
  Key Takeaways:
</h3>

<ul>
<li>Quarkus provides a lightweight framework for building and deploying Java applications.</li>
<li>Ollama simplifies AI model integration with backend systems.</li>
<li>Testcontainers and Dev Services streamline the testing and development workflows.</li>
</ul>

<p>To explore this project further, check out the <a href="https://github.com/jonathanvila/pingpong-ai" target="_blank" rel="noopener noreferrer">PingPong-AI GitHub repository</a>.</p>

`},2464126:{id:2464126,title:"Docker Advance: Mastering Containerization",tag_list:["docker","webdev","cloud","cloudskills"],cover_image:"https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fvsdghellsvrluw6pjqg6.png",url:"https://dev.to/jaskarandeogan/docker-advance-mastering-containerization-59bm",published_at:"2025-05-08T07:00:00Z",body_html:`<p>As an experienced developer, you're beyond the basics of <code>docker run</code> and <code>docker build</code>. You need to orchestrate complex, production-ready environments with precision. This guide dives deep into creating robust Docker deployments through YAML configurations, advanced networking, and container health management.</p>

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

`},2427984:{id:2427984,title:"Building a Simple AI Agent with n8n",tag_list:["ai","aiagent","nocode","n8n"],cover_image:"https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Foi6fcxggr217qki55g0e.png",url:"https://dev.to/jesulayomi/building-a-simple-ai-agent-with-n8n-17nb",published_at:"2025-04-24T07:34:23Z",body_html:`<h2>
  <a name="introduction" href="#introduction">
  </a>
  Introduction
</h2>

<p>I've been playing around with AI Agents for a while now, and in a bit, I'll show you how I built a cool automation agent with n8n that pulls new and recent emails from my Gmail inbox and sends the results to me via Telegram.</p>

<p>It's amazing and simple to use, especially since you won't always need to constantly check your inbox every 10 minutes for new emails. If you've never used n8n, it's a workflow automation tool (drag and drop) that is very powerful, flexible and builder-friendly. You can plug in many APIs, tools, apps, and bots to build literally almost anything.</p>

<p>Let me show you how I did it. I've also made a quick YouTube video walking through the entire build - <a href="https://youtu.be/ib8EcwcDicU?si=PRIMwuIRPWBmmRLi" target="_blank" rel="noopener noreferrer">Build Gmail-to-Telegram AI Agent with n8n</a></p>

<h3>
  <a name="what-were-building" href="#what-were-building">
  </a>
  What We're Building:
</h3>

<ul>
<li><p>Trigger a flow when a Telegram message is sent.</p></li>
<li><p>Pull the latest email(s) from your Gmail account</p></li>
<li><p>Send the email content straight to your Telegram inbox</p></li>
</ul>

<h3>
  <a name="tools-i-used" href="#tools-i-used">
  </a>
  Tools I Used:
</h3>

<ul>
<li><p><a href="//n8n.io">n8n</a>: a tool for building the AI Agent workflow</p></li>
<li><p>Gmail account: the inbox I wanted to track</p></li>
<li><p>Telegram Bot: where I wanted to receive messages</p></li>
<li><p>Google OAuth2: to connect securely to my Gmail</p></li>
<li><p>Telegram credentials: to set up Telegram and send messages from my bot</p></li>
</ul>


<hr>

<p>To create this workflow, you'd need to create an n8n account, and once you're all set up, on the homepage, create a new workflow.</p>

<p><a href="https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fgu5qoblwqckzewstoe2f.png" class="article-body-image-wrapper"><img src="https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fgu5qoblwqckzewstoe2f.png" alt="Create Account" loading="lazy" width="800" height="367"></a></p>

<h2>
  <a name="step-1-create-the-telegram-trigger" href="#step-1-create-the-telegram-trigger">
  </a>
  Step 1: Create the Telegram Trigger
</h2>

<ol>
<li><p>On your n8n canvas, click "Add step" and select Telegram on the pop-up, click "On Message"</p></li>
<li><p>Set up the Telegram Trigger node by creating new credentials. Go to Telegram BotFather</p></li>
<li><p>Create a bot (you’ll get a token - copy that)</p></li>
<li><p>In the Telegram Trigger node, paste your Bot Token in there</p></li>
<li><p>Once it's done, select your bot, and it’ll be linked. Test the step by sending a message to the Telegram prompt, and it should appear on the Output page.</p></li>
</ol>

<p><a href="https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fnf68xt9ligfoxvs6lq16.png" class="article-body-image-wrapper"><img src="https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fnf68xt9ligfoxvs6lq16.png" alt="Telegram Trigger" loading="lazy" width="800" height="367"></a></p>

<h2>
  <a name="step-2-create-switch-node" href="#step-2-create-switch-node">
  </a>
  Step 2: Create Switch Node
</h2>

<p>This is where it's decided what to do based on what you typed. The Switch looks at the message you sent in Telegram and checks if it matches the condition (or rules) you've set. If it matches, it routes to the next action. Otherwise, it presents an error.</p>

<ol>
<li><p>Click the "+" button on the far right and search for "Switch"</p></li>
<li><p>Under "Mode", select "Rules" and under "Routing Rules", drag and drop the file ID of your previous test (the test message you sent previously) so it recognizes texts</p></li>
<li><p>Lastly, rename output as "text" and test again (always best to delete previous workflow and test anew)</p></li>
</ol>

<p><a href="https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fji49toxv3ttbb3fptv82.png" class="article-body-image-wrapper"><img src="https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fji49toxv3ttbb3fptv82.png" alt="Create Switch Node" loading="lazy" width="800" height="364"></a></p>

<h2>
  <a name="step-3-edit-fields-set-node" href="#step-3-edit-fields-set-node">
  </a>
  Step 3: Edit Fields (Set Node)
</h2>

<p>This Set node allows you to format what data goes into the next steps. It can set new data as well as overwrite data that already exists.  Here, I created a clean format that includes the message from Telegram and gives the AI a simple prompt.</p>

<ol>
<li><p>Set "Node" to "Manual Mapping"</p></li>
<li><p>In "Fields to Set", drag and drop the file ID of your previous test and set it to a "String"</p></li>
</ol>

<p><a href="https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fpxaytcanuew762w63izf.png" class="article-body-image-wrapper"><img src="https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fpxaytcanuew762w63izf.png" alt="Edit Fields" loading="lazy" width="800" height="367"></a></p>

<h2>
  <a name="step-4-setting-up-ai-agent-node" href="#step-4-setting-up-ai-agent-node">
  </a>
  Step 4: Setting up AI Agent Node
</h2>

<p>This is where the magic begins. This AI Agent is basically the heart; it's what connects with the actual AI model. I passed in a prompt that’s structured with the message from Telegram and a bit of instruction, telling it what kind of output I expect.</p>

<p>You can connect this with Anthropic, OpenAI, or other LLM tools, depending on what you want.</p>

<ol>
<li><p>Under "Source for Prompt (User Message)", select "Define Below" and under "Prompt(User Message), drag and drop the file ID of a previous test</p></li>
<li><p>Under "System Message", give it a prompt that can read and get emails from your Gmail account tool</p></li>
</ol>

<p><a href="https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fxzaxqon4mkxudzs33bl1.png" class="article-body-image-wrapper"><img src="https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fxzaxqon4mkxudzs33bl1.png" alt="AI Agent Node" loading="lazy" width="800" height="367"></a></p>

<h2>
  <a name="step-5-set-up-anthropic-chat-model" href="#step-5-set-up-anthropic-chat-model">
  </a>
  Step 5: Set up Anthropic Chat Model
</h2>

<p>This is the actual chat model doing the heavy lifting. I used the Anthropic Claude model here because it’s great at clean responses and structured outputs.</p>

<p>It takes the Telegram message (processed earlier) and returns a response, which could be a reply, a summary, an insight, or a decision. This lets the agent reply like a real assistant.</p>

<p>You can swap this out for any other LLM — Claude, GPT-4, etc.</p>

<ol>
<li><p>Connect Anthropic Chat Model to AI Agent</p></li>
<li><p>Set up necessary credentials using the API key from your Anthropic account, as seen below</p></li>
</ol>

<p><a href="https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fmgilukh9w4ls8g0j4kcd.png" class="article-body-image-wrapper"><img src="https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fmgilukh9w4ls8g0j4kcd.png" alt="Anthropic Chat Model" loading="lazy" width="800" height="366"></a></p>

<h2>
  <a name="step-6-gmail-get-message-gmail-node" href="#step-6-gmail-get-message-gmail-node">
  </a>
  Step 6: Gmail Get Message (Gmail Node)
</h2>

<p>Now it’s time to fetch the data. This node connects to Gmail using the credentials you set by connecting your account (OAuth-based).</p>

<p>It pulls recent unread messages from the inbox. Here, you can control how many it fetches or apply filters (from a specific sender, subject, etc.)</p>

<ol>
<li><p>Once you set up the credential linking your account, set "Tool Description" to "Set Automatically"</p></li>
<li><p>"Resource" as "Message" and "Operation" as "Get Many"</p></li>
<li><p>You can choose to set a limit and add filter(s) based on your preference</p></li>
</ol>

<p><a href="https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F91l8dl148v1wd873w4av.png" class="article-body-image-wrapper"><img src="https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F91l8dl148v1wd873w4av.png" alt="Gmail Node" loading="lazy" width="800" height="362"></a></p>

<h2>
  <a name="step-7-set-up-telegram-send-message-as-output" href="#step-7-set-up-telegram-send-message-as-output">
  </a>
  Step 7: Set up Telegram (Send Message) as output
</h2>

<p>This is the final step, the response delivery. This node sends a Telegram message back to the bot. It feels like chatting with a real assistant on Telegram, and it's instantly responsive.</p>

<ol>
<li><p>Select existing credentials linking your Telegram account, choose "Message" for "Resource", and “Send Message” as the operation</p></li>
<li><p>Drag the previous chat ID and Text</p></li>
</ol>

<p><a href="https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F3wsd96bx9n70c3tcuycy.png" class="article-body-image-wrapper"><img src="https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F3wsd96bx9n70c3tcuycy.png" alt="Telegram Node" loading="lazy" width="800" height="362"></a></p>

<ol>
<li>Test the workflow, go to your Telegram, and type a prompt. And just like that, you’ve built your own AI email-checking Telegram agent.</li>
</ol>

<p><a href="https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fd78zeieoifssgv4pjswl.png" class="article-body-image-wrapper"><img src="https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fd78zeieoifssgv4pjswl.png" alt="AI Agent Workflow" loading="lazy" width="800" height="367"></a></p>


<hr>

<p>This might seem like a simple automation, but it’s actually one of those use cases that proves how powerful AI agents and tools like n8n can be. Plus, you didn’t need to write a single line of code to do it. Imagine combining this with OpenAI or adding voice triggers next...</p>

<p>I made a quick YouTube video walking through the entire build - <a href="https://youtu.be/ib8EcwcDicU?si=PRIMwuIRPWBmmRLi" target="_blank" rel="noopener noreferrer">Build Gmail-to-Telegram AI Agent with n8n</a>. If you try this, tag me on <a href="https://x.com/l_ayomi" target="_blank" rel="noopener noreferrer">X</a> or <a href="https://www.linkedin.com/in/adetola-jesulayomi-7146a2162/" target="_blank" rel="noopener noreferrer">LinkedIn</a> — I want to see what you’re building too.</p>

<p>Happy building 🧩</p>

`}};function Rv(){const e=nl(),n=e.search.startsWith("?")?e.search.slice(1):e.search,s=n?Number(n):null,t=s!==null&&!isNaN(s)?Dv[s]:null;return l.jsxs(l.Fragment,{children:[l.jsx(os,{}),l.jsx("section",{className:"rss-blog-detail",children:l.jsxs("div",{className:"container-fluid",children:[l.jsxs("div",{className:"rss-blog-detail__container",children:[l.jsx("div",{className:"rss-blog-detail__container__tags-container",children:t?t.tag_list.map((a,i)=>l.jsx("div",{className:"rss-blog-detail__container__tags-container__item",children:l.jsx("p",{className:"rss-blog-detail__container__tags-container__item__tag font-12-16",children:a})},i)):null}),l.jsx("h6",{className:"rss-blog-detail__container__date font-12-16",children:t?new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"numeric"}).format(new Date(t.published_at)):null})]}),l.jsx("h2",{className:"rss-blog-detail__title font-28-48",children:t?t.title:"Blog not found."}),l.jsx("img",{src:(t==null?void 0:t.cover_image)??void 0,alt:"Banner Image",className:"rss-blog-detail__img"}),t?l.jsx("div",{className:"rss-blog-detail__body",dangerouslySetInnerHTML:{__html:t.body_html}}):l.jsx("div",{className:"rss-blog-detail__body",children:"Blog not found."})]})}),l.jsx(ls,{})]})}const Bv=({containerRef:e,children:n,iconPath:s,iconAlt:t,contentTitle:a,contentSlug:i})=>l.jsxs("div",{ref:e,className:"rss-banner",children:[l.jsx("img",{src:s,alt:t,className:"rss-banner__ico"}),l.jsxs("div",{className:"rss-banner__content",children:[l.jsx("h2",{className:"rss-banner__content__title font-28-48",children:a}),l.jsx("p",{className:"rss-banner__content__slug font-14-20",children:i})]}),n]}),kd=({children:e,iconPath:n,iconAlt:s,contentTitle:t,contentSlug:a})=>{const i=O.useRef(null);return l.jsx(Bv,{containerRef:i,iconPath:n,iconAlt:s,contentTitle:t,contentSlug:a,children:e})},$v=(e,n,s)=>{const t=()=>{const a=e.current;if(!a)return;const i=Array.from(a.children);let r=[],o=null,c=[];i.forEach(p=>p.style.width=""),i.forEach(p=>{const u=p.offsetTop;u!==o?(c.length>0&&r.push(c),c=[p],o=u):c.push(p)}),c.length>0&&r.push(c),r.forEach(p=>{const u=a.clientWidth,d=s*(p.length-1),h=(u-d)/p.length;p.forEach(v=>{v.style.width=`${h}px`})})};O.useEffect(()=>(t(),window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)),[n])},Uv=({children:e,containerRef:n,gap:s,className:t=""})=>l.jsx("div",{ref:n,className:t,style:{display:"flex",flexWrap:"wrap",gap:`${s}px`},children:e}),bd=({children:e,gap:n=14,className:s=""})=>{const t=O.useRef(null);return $v(t,e,n),l.jsx(Uv,{containerRef:t,className:s,children:e})},Wv=[{icon:"/icons/clock-ico.png",alt:"Icon",text:"24/7 Assistance"},{icon:"/icons/lightning-ico.png",alt:"Icon",text:"Quick Change Resolutions"},{icon:"/icons/stars-ico.png",alt:"Icon",text:"Flexible Working Hours"}];function Gv(){return l.jsxs(l.Fragment,{children:[l.jsx(os,{}),l.jsx("section",{className:"rss-contact",children:l.jsxs("div",{className:"container-fluid",children:[l.jsx(kd,{iconPath:"/icons/chat-ico.png",iconAlt:"Chat Icon",contentTitle:"We'd love to here from you",contentSlug:"Reach out — I’m excited to hear what you’re working on",children:l.jsx(bd,{className:"rss-banner__list-container",gap:14,children:Wv.map((e,n)=>l.jsxs("div",{className:"rss-banner__list-container__item",children:[l.jsx("img",{src:e.icon,alt:e.alt,className:"rss-banner__list-container__item__ico"}),l.jsx("p",{className:"rss-banner__list-container__item__content font-14-18",children:e.text})]},n))})}),l.jsxs("div",{className:"rss-contact__form-container",children:[l.jsxs("div",{className:"rss-contact__form-container__form",id:"form",children:[l.jsx("input",{type:"text",className:"rss-contact__form-container__form__input font-14-18",placeholder:"First Name"}),l.jsx("input",{type:"text",className:"rss-contact__form-container__form__input font-14-18",placeholder:"Last Name"}),l.jsx("input",{type:"email",className:"rss-contact__form-container__form__input font-14-18",placeholder:"Email"}),l.jsx("input",{type:"tel",className:"rss-contact__form-container__form__input font-14-18",placeholder:"Phone Number"}),l.jsxs("div",{className:"rss-contact__form-container__form__checkbox-container",children:[l.jsx("h4",{className:"rss-contact__form-container__form__checkbox-container__title font-16-18",children:"Why are you contacting us?"}),l.jsxs("label",{htmlFor:"web-design",className:"rss-contact__form-container__form__checkbox-container__item",children:[l.jsx("input",{type:"checkbox",className:"rss-contact__form-container__form__checkbox-container__item-input",id:"web-design",name:"Web Design"}),l.jsx("span",{className:"rss-contact__form-container__form__checkbox-container__item-label font-14-18",children:"Web Design"})]}),l.jsxs("label",{htmlFor:"collab",className:"rss-contact__form-container__form__checkbox-container__item",children:[l.jsx("input",{type:"checkbox",className:"rss-contact__form-container__form__checkbox-container__item-input",id:"collab",name:"Collaboration"}),l.jsx("span",{className:"rss-contact__form-container__form__checkbox-container__item-label font-14-18",children:"Collaboration"})]}),l.jsxs("label",{htmlFor:"mobile-design",className:"rss-contact__form-container__form__checkbox-container__item",children:[l.jsx("input",{type:"checkbox",className:"rss-contact__form-container__form__checkbox-container__item-input",id:"mobile-design",name:"Mobile App Design"}),l.jsx("span",{className:"rss-contact__form-container__form__checkbox-container__item-label font-14-18",children:"Mobile App Design"})]}),l.jsxs("label",{htmlFor:"other",className:"rss-contact__form-container__form__checkbox-container__item",children:[l.jsx("input",{type:"checkbox",className:"rss-contact__form-container__form__checkbox-container__item-input",id:"other",name:"Others"}),l.jsx("span",{className:"rss-contact__form-container__form__checkbox-container__item-label font-14-18",children:"Others"})]})]}),l.jsx("textarea",{name:"message",className:"rss-contact__form-container__form__text-area font-14-18",placeholder:"Your Message here..."}),l.jsx("input",{type:"button",value:"Send",className:"rss-contact__form-container__form__submit-btn font-14-18"})]}),l.jsxs("div",{className:"rss-contact__form-container__content-container",children:[l.jsxs("div",{className:"rss-contact__form-container__content-container__contents",children:[l.jsxs("div",{className:"rss-contact__form-container__content-container__contents__item",children:[l.jsxs("div",{className:"rss-contact__form-container__content-container__contents__item__text-container",children:[l.jsx("h5",{className:"rss-contact__form-container__content-container__contents__item__text-container__title font-14-18",children:"You can Email Me Here"}),l.jsx("p",{className:"rss-contact__form-container__content-container__contents__item__text-container__slug font-16-20",children:"mgmnawas@gmail.com"})]}),l.jsx("div",{className:"rss-contact__form-container__content-container__contents__item__arrow-container",children:l.jsx("img",{src:"/icons/arrow-ico.png",alt:"Arrow Icon",className:"rss-contact__form-container__content-container__contents__item__arrow-container__arrow"})})]}),l.jsxs("div",{className:"rss-contact__form-container__content-container__contents__item",children:[l.jsxs("div",{className:"rss-contact__form-container__content-container__contents__item__text-container",children:[l.jsx("h5",{className:"rss-contact__form-container__content-container__contents__item__text-container__title font-14-18",children:"Give Me a Call on"}),l.jsx("p",{className:"rss-contact__form-container__content-container__contents__item__text-container__slug font-16-20",children:"+94 77 455 2663"})]}),l.jsx("div",{className:"rss-contact__form-container__content-container__contents__item__arrow-container",children:l.jsx("img",{src:"/icons/arrow-ico.png",alt:"Arrow Icon",className:"rss-contact__form-container__content-container__contents__item__arrow-container__arrow"})})]}),l.jsxs("div",{className:"rss-contact__form-container__content-container__contents__item",children:[l.jsxs("div",{className:"rss-contact__form-container__content-container__contents__item__text-container",children:[l.jsx("h5",{className:"rss-contact__form-container__content-container__contents__item__text-container__title font-14-18",children:"Location"}),l.jsx("p",{className:"rss-contact__form-container__content-container__contents__item__text-container__slug font-16-20",children:"Colombo, Sri Lanka"})]}),l.jsx("div",{className:"rss-contact__form-container__content-container__contents__item__arrow-container",children:l.jsx("img",{src:"/icons/arrow-ico.png",alt:"Arrow Icon",className:"rss-contact__form-container__content-container__contents__item__arrow-container__arrow"})})]})]}),l.jsxs("div",{className:"rss-contact__form-container__content-container__profiles",children:[l.jsx("h5",{className:"rss-contact__form-container__content-container__profiles__title font-16-20",children:"My Social Profiles"}),l.jsxs("div",{className:"rss-contact__form-container__content-container__profiles__icons-container",children:[l.jsx("div",{className:"rss-contact__form-container__content-container__profiles__icons-container__item",children:l.jsx("a",{href:"https://www.linkedin.com/in/mohamed-nawaz/",target:"_blank",children:l.jsx("img",{src:"/icons/linkedin-ico.png",alt:"Linkedin Icon",className:"rss-contact__form-container__content-container__profiles__icons-container__item__img"})})}),l.jsx("div",{className:"rss-contact__form-container__content-container__profiles__icons-container__item",children:l.jsx("a",{href:"https://www.twitter.com/",target:"_blank",children:l.jsx("img",{src:"/icons/twitter-ico.png",alt:"Twitter Icon",className:"rss-contact__form-container__content-container__profiles__icons-container__item__img"})})}),l.jsx("div",{className:"rss-contact__form-container__content-container__profiles__icons-container__item",children:l.jsx("a",{href:"https://github.com/mohamed-nawas/",target:"_blank",children:l.jsx("img",{src:"/icons/web-ico.png",alt:"Web Icon",className:"rss-contact__form-container__content-container__profiles__icons-container__item__img"})})})]})]})]})]}),l.jsx(hd,{baseClassName:"rss-faq__contact",title:"Frequently Asked Questions",slug:"Here are answers to some common questions",containerHelpIconPath:"icons/star-ico.png",containerHelpIconAlt:"Star Icon",containerHelpTextTitle:"Still have any Questions ?",containerHelpTextSlug:"Let's collaborate to create an exceptional website that sets you apart from the competition. Contact me today to discuss your web design needs and bring your digital vision to life!",containerHelpBtnValue:"Contact Me"})]})}),l.jsx(ls,{})]})}function qv({children:e}){const n=O.useRef(null);return O.useEffect(()=>{if(!n.current)return;const s=n.current.querySelector(".swiper-wrapper"),a=((s==null?void 0:s.querySelectorAll(".swiper-slide"))||[]).length,i=window.innerWidth;let r=!1,o=!1;(a>3||a===3&&i<1440||a===2&&i<768)&&(r=!0,o=!0),le.use([fi]);const c=new le(n.current,{loop:r,autoplay:o?{delay:5e3,disableOnInteraction:!0,reverseDirection:!0}:!1,slidesPerView:"auto",breakpoints:Mv}),p=()=>c.update();return window.addEventListener("resize",p),()=>{window.removeEventListener("resize",p),c.destroy(!0,!0)}},[]),l.jsx("div",{className:"swiper img-swiper",ref:n,children:e})}const Qv=({containerRef:e,data:n})=>{const s="/";return l.jsx("div",{ref:e,className:"rss-slider",children:l.jsx(qv,{children:l.jsx("div",{className:"swiper-wrapper rss-slider__items-container",children:n.map((t,a)=>l.jsx("div",{className:"swiper-slide rss-slider__items-container__item",children:l.jsx("img",{className:"rss-slider__items-container__item__image",alt:t.alt,src:s+t.src})},a))})})})},Yv=({data:e})=>{const n=O.useRef(null);return l.jsx(Qv,{containerRef:n,data:e})},Kv={"order-uk":{mainImg:"images/order-uk-image-3.png",title:"Order UK",slug:"E-Commerce | Fullstack",role:"Fullstack Engineer",teamSize:"Solo Project",tools:["React","TypeScript","Nodejs","Figma","AWS","Docker"],description:"Order UK is a convenient online service that helps customers in Sri Lanka order products directly from the United Kingdom. It simplifies the process of shopping for UK goods by allowing users to place orders through the website, after which the items are sourced, shipped, and delivered locally. The service is designed to make UK brands and products more accessible to Sri Lankan customers, saving them time and effort while offering trusted delivery. It’s ideal for those seeking international quality without the hassle of international logistics",images:[{src:"images/order-uk-1.png",alt:"Order UK"},{src:"images/order-uk-2.png",alt:"Order UK"},{src:"images/order-uk-3.png",alt:"Order UK"},{src:"images/order-uk-4.png",alt:"Order UK"},{src:"images/order-uk-5.png",alt:"Order UK"},{src:"images/order-uk-6.png",alt:"Order UK"}],problems:["Simplified the grocery ordering process","Improved accessibility for mobile users"],decisions:["Focused on a clean layout and prominent call to actions"],challenges:["Optimizing the UI for both desktop and mobile devices","Created responsive layouts and conducted usability testing"],outcomes:["Decreased drop off rate","Increased conversion rate by 20%"],demo:"https://mohamed-nawas.github.io/order-uk",repo:"https://github.com/mohamed-nawas/order-uk"},"swivel-tech":{mainImg:"images/swivel-tech-image-1.png",title:"Swivel Tech",slug:"Software Consultancy | Backend",role:"Backend Engineer",teamSize:"5+ Developers",tools:["React","TypeScript","Spring Boot","AWS","Docker","Figma","Jira"],description:"Swivel Tech is an Australian-based software consultancy that specializes in building innovative, world-class products for a global clientele. The company offers services including enterprise software development, mobile application development, UX/UI design, and staff augmentation. With a team of dynamic professionals, Swivel Tech collaborates with clients across various industries to deliver scalable and efficient digital solutions",images:[{src:"images/swivel-tech-1.png",alt:"Swivel Tech"},{src:"images/swivel-tech-2.png",alt:"Swivel Tech"},{src:"images/swivel-tech-3.png",alt:"Swivel Tech"},{src:"images/swivel-tech-4.png",alt:"Swivel Tech"},{src:"images/swivel-tech-5.png",alt:"Swivel Tech"},{src:"images/swivel-tech-6.png",alt:"Swivel Tech"},{src:"images/swivel-tech-7.png",alt:"Swivel Tech"},{src:"images/swivel-tech-8.png",alt:"Swivel Tech"},{src:"images/swivel-tech-9.png",alt:"Swivel Tech"},{src:"images/swivel-tech-10.png",alt:"Swivel Tech"},{src:"images/swivel-tech-11.png",alt:"Swivel Tech"}],problems:["Integrating diverse technologies to create seamless solutions","Ensuring scalability and performance across global deployments"],decisions:["Adopted a microservices architecture to enhance modularity","Utilized AWS cloud services for reliable and scalable infrastructure"],challenges:["Coordinating development efforts across multiple time zones","Maintaining consistent code quality and performance standards"],outcomes:["Successfully delivered multiple enterprise-level applications","Enhanced client satisfaction through timely and efficient project execution"],demo:"https://www.swiveltech.io",repo:""},"offshore-safety":{mainImg:"images/offshore-safety-image-1.png",title:"Offshore Safety Services",slug:"PPE Solutions | Frontend",role:"Lead Developer",teamSize:"3 Developers",tools:["React","TypeScript","Wordpress","Bitbucket","Docker","Adobe XD","Jira"],description:"Offshore Safety Services is a leading provider of Personal Protective Equipment (PPE) tailored for the oil, gas, petrochemical, and mining industries. Established in 1977 in the UAE and 2009 in Kuwait, the company offers a comprehensive range of safety solutions, including fire-resistant clothing, marine safety equipment, medical emergency supplies, and custom-made gear. Their products are designed to meet the rigorous demands of offshore environments, ensuring the safety and well-being of workers in high-risk sectors.",images:[{src:"images/offshore-safety-1.png",alt:"Offshore Safety"},{src:"images/offshore-safety-2.png",alt:"Offshore Safety"},{src:"images/offshore-safety-3.png",alt:"Offshore Safety"},{src:"images/offshore-safety-4.png",alt:"Offshore Safety"},{src:"images/offshore-safety-5.png",alt:"Offshore Safety"},{src:"images/offshore-safety-6.png",alt:"Offshore Safety"}],problems:["Developing a user-friendly platform to showcase a diverse range of safety products","Ensuring seamless integration of custom manufacturing options for clients"],decisions:["Implemented a modular product catalog with filtering options for easy navigation","Integrated a custom order system to facilitate bespoke PPE requests from clients"],challenges:["Designing an intuitive interface to accommodate a wide variety of products and services","Ensuring the platform's scalability to handle increasing product listings and client orders"],outcomes:["Enhanced user experience leading to a 30% increase in online inquiries","Streamlined custom order process, reducing client onboarding time by 25%"],demo:"https://offshoresafetyservices.com.au",repo:""},"personal-website":{mainImg:"images/personal-web-image-1.png",title:"Personal Website",slug:"Portfolio | Fullstack",role:"Fullstack Engineer",teamSize:"Solo Project",tools:["HTML","CSS","JavaScript","GitHub Pages","Figma"],description:"This personal website serves as a digital portfolio showcasing my skills, projects, and experiences as a Fullstack Developer. Built using HTML, CSS, and JavaScript, the site is hosted on GitHub Pages, providing a seamless and accessible platform for potential employers and collaborators to explore my work. The design emphasizes simplicity and user experience, reflecting my commitment to clean and effective web development practices.",images:[{src:"images/personal-web-1.png",alt:"Personal Website"},{src:"images/personal-web-2.png",alt:"Personal Website"},{src:"images/personal-web-3.png",alt:"Personal Website"},{src:"images/personal-web-4.png",alt:"Personal Website"},{src:"images/personal-web-5.png",alt:"Personal Website"},{src:"images/personal-web-6.png",alt:"Personal Website"},{src:"images/personal-web-7.png",alt:"Personal Website"},{src:"images/personal-web-8.png",alt:"Personal Website"}],problems:["Creating a responsive design that adapts to various screen sizes","Ensuring fast load times and smooth navigation"],decisions:["Utilized GitHub Pages for free and reliable hosting","Employed Figma for wireframing and design prototyping"],challenges:["Optimizing images and assets for quicker loading","Implementing smooth scroll and interactive elements without external libraries"],outcomes:["Achieved a fully responsive design compatible with desktop, tablet, and mobile devices","Enhanced user engagement through intuitive navigation and interactive features"],demo:"https://mohamed-nawas.github.io/resume",repo:"https://github.com/mohamed-nawas/resume"},"swivel-group":{mainImg:"images/swivel-group-image-1.png",title:"Swivel Group",slug:"Global Software Consultancy | Frontend",role:"Frontend Engineer",teamSize:"5+ Developers",tools:["React","Strapi","AWS","Docker","Figma","Jira","MySQL"],description:"Swivel Group is an Australian-based global software consultancy specializing in building and implementing custom solutions for businesses to innovate, scale, and compete at a global standard. Established in 2019, Swivel Group has rapidly expanded with over 160 employees across multiple offices in Australia, Sri Lanka, and Vietnam. The company offers services in software development, digital strategy, and finance management, operating globally across industries",images:[{src:"images/swivel-group-1.png",alt:"Swivel Group"},{src:"images/swivel-group-2.png",alt:"Swivel Group"},{src:"images/swivel-group-3.png",alt:"Swivel Group"},{src:"images/swivel-group-4.png",alt:"Swivel Group"},{src:"images/swivel-group-5.png",alt:"Swivel Group"},{src:"images/swivel-group-6.png",alt:"Swivel Group"},{src:"images/swivel-group-7.png",alt:"Swivel Group"},{src:"images/swivel-group-8.png",alt:"Swivel Group"},{src:"images/swivel-group-9.png",alt:"Swivel Group"},{src:"images/swivel-group-10.png",alt:"Swivel Group"}],problems:["Developing scalable solutions for diverse industries","Integrating cross-functional teams across multiple regions"],decisions:["Adopted a microservices architecture to enhance modularity","Utilized AWS cloud services for reliable and scalable infrastructure"],challenges:["Coordinating development efforts across multiple time zones","Maintaining consistent code quality and performance standards"],outcomes:["Successfully delivered multiple enterprise-level applications","Enhanced client satisfaction through timely and efficient project execution"],demo:"https://swivelgroup.com.au",repo:""},"fitness-care":{mainImg:"images/fitness-care-image-1.png",title:"Fitness Care",slug:"Health & Wellness | Fullstack",role:"Fullstack Engineer",teamSize:"Solo Project",tools:["React","TypeScript","Node.js","Express","MongoDB","Figma","Jira"],description:"Fitness Care is a comprehensive web application designed to assist users in managing their health and fitness goals. The platform offers features such as workout tracking, nutrition planning, progress monitoring, and personalized recommendations. Built with a modern tech stack, Fitness Care aims to provide an intuitive and engaging experience for users seeking to improve their physical well-being.",images:[{src:"images/fitness-care-1.png",alt:"Fitness Care"},{src:"images/fitness-care-2.png",alt:"Fitness Care"},{src:"images/fitness-care-3.png",alt:"Fitness Care"}],problems:["Designing a user-friendly interface for diverse user demographics","Integrating personalized workout and nutrition plans effectively"],decisions:["Utilized a modular component-based architecture for scalability","Implemented a RESTful API with Node.js and Express for backend services"],challenges:["Ensuring data synchronization between frontend and backend","Optimizing performance for real-time data updates and notifications"],outcomes:["Achieved a responsive design compatible with various devices","Enhanced user engagement through personalized features and notifications"],demo:"https://mohamed-nawas.github.io/fitness-care/",repo:"https://github.com/mohamed-nawas/fitness-care"},zentry:{mainImg:"images/zentry-image-1.png",title:"Zentry",slug:"Social Media Management Platform",role:"Frontend Engineer",teamSize:"Solo Project",tools:["React","Tailwind CSS","Framer Motion","Vercel","JavaScript"],description:"Zentry is a sleek and modern social media management platform designed to streamline how individuals and businesses handle their digital presence. From scheduling posts across multiple platforms to tracking engagement metrics, Zentry centralizes the entire social media workflow into one intuitive dashboard.",images:[{src:"images/zentry-1.png",alt:"Zentry Dashboard"},{src:"images/zentry-2.png",alt:"Zentry Dashboard"}],problems:["Difficulty managing multiple social media platforms simultaneously","Lack of centralized analytics and scheduling tools for small businesses"],decisions:["Built a unified dashboard for managing all social accounts in one place","Used React for fast rendering and component-driven UI","Implemented Framer Motion for smooth transitions and interactivity"],challenges:["Designing a scalable layout that supports various platform APIs","Ensuring a responsive and accessible experience on all device types"],outcomes:["Delivered a visually appealing and user-friendly social management tool","Enabled users to significantly cut down the time spent on post scheduling","Helped users understand their performance with clean, actionable analytics"],demo:"https://zentry-git-main-mohamed-nawas-projects.vercel.app/",repo:"https://github.com/mohamed-nawas/zentry"},"computic-solutions":{mainImg:"images/computic-solutions-image-1.png",title:"Computic Solutions",slug:"IT Solutions Provider",role:"Fullstack Engineer",teamSize:"Solo Project",tools:["React","SCSS","Figma","Vercel","Typescript"],description:"Computic Solutions is a professional IT solutions provider specializing in delivering tailored technology services to meet the unique needs of businesses. The platform showcases a range of services, including software development, IT consulting, and system integration, aimed at helping organizations optimize their operations and achieve their technological goals.",images:[{src:"images/computic-solutions-1.png",alt:"Computic Solutions Dashboard"},{src:"images/computic-solutions-2.png",alt:"Computic Solutions Dashboard"}],problems:["Businesses struggling to find reliable and customized IT solutions","Lack of a centralized platform to explore and access diverse IT services"],decisions:["Developed a clean and responsive website to present services effectively","Utilized React for dynamic content rendering and seamless user experience","Employed Tailwind CSS for efficient styling and consistent design"],challenges:["Ensuring the website is informative yet concise to engage potential clients","Maintaining a professional design that reflects the company's expertise"],outcomes:["Launched a user-friendly platform that effectively communicates the company's services","Enhanced online presence, leading to increased client inquiries and engagement"],demo:"https://computic-solutions-git-main-mohamed-nawas-projects.vercel.app/",repo:""}};function Xv(){const e=nl(),n=e.search.startsWith("?")?e.search.slice(1):e.search,s="/",t=Kv[n];return l.jsxs(l.Fragment,{children:[l.jsx(os,{}),l.jsx("section",{className:"rss-works-detail",children:l.jsxs("div",{className:"container-fluid",children:[l.jsxs("div",{className:"rss-works-detail__hero-section",style:{"--bg-detail-hero":`url('${s+t.mainImg}')`},children:[l.jsx("h2",{className:"rss-works-detail__hero-section__title font-38-58",children:t.title}),l.jsx("p",{className:"rss-works-detail__hero-section__slug font-28-48",children:t.slug})]}),l.jsxs("div",{className:"rss-works-detail__overview-section",children:[l.jsx("h3",{className:"rss-works-detail__overview-section__title font-18-24",children:"Overview"}),l.jsxs("ul",{className:"rss-works-detail__overview-section__about",children:[l.jsxs("li",{className:"rss-works-detail__overview-section__about__role font-12-16",children:[l.jsx("strong",{children:"ROLE"})," ",l.jsx("span",{className:"font-12-16",children:t.role})]}),l.jsxs("li",{className:"rss-works-detail__overview-section__about__team-size font-12-16",children:[l.jsx("strong",{children:"TEAM SIZE"})," ",l.jsx("span",{className:"font-12-16",children:t.teamSize})]}),l.jsxs("li",{className:"rss-works-detail__overview-section__about__tools font-12-16",children:[l.jsx("strong",{children:"TOOLS"}),l.jsx("ul",{className:"rss-works-detail__overview-section__about__tools__list",children:t.tools.map((a,i)=>l.jsx("li",{className:"rss-works-detail__overview-section__about__tools__list__item font-12-16",children:a},i))})]})]}),l.jsx("p",{className:"rss-works-detail__overview-section__description font-14-18",children:t.description})]}),l.jsxs("div",{className:"rss-works-detail__gallery-section",children:[l.jsx("h3",{className:"rss-works-detail__gallery-section__title font-18-24",children:"Gallery"}),l.jsx(Yv,{data:t.images})]}),l.jsxs("div",{className:"rss-works-detail__details-section",children:[l.jsx("h3",{className:"rss-works-detail__details-section__title font-18-24",children:"Details"}),l.jsxs("div",{className:"rss-works-detail__details-section__container",children:[l.jsxs("div",{className:"rss-works-detail__details-section__container__problems-section",children:[l.jsx("h5",{className:"rss-works-detail__details-section__container__problems-section__title font-14-18",children:l.jsx("strong",{children:"Problems Solved"})}),l.jsx("ul",{className:"rss-works-detail__details-section__container__problems-section__list",children:t.problems.map((a,i)=>l.jsx("li",{className:"rss-works-detail__details-section__container__problems-section__list__item font-12-16",children:a},i))})]}),l.jsxs("div",{className:"rss-works-detail__details-section__container__decisions-section",children:[l.jsx("h5",{className:"rss-works-detail__details-section__container__decisions-section__title font-14-18",children:l.jsx("strong",{children:"Design Decisions"})}),l.jsx("ul",{className:"rss-works-detail__details-section__container__decisions-section__list",children:t.decisions.map((a,i)=>l.jsx("li",{className:"rss-works-detail__details-section__container__decisions-section__list__item font-12-16",children:a},i))})]}),l.jsxs("div",{className:"rss-works-detail__details-section__container__challenges-section",children:[l.jsx("h5",{className:"rss-works-detail__details-section__container__challenges-section__title font-14-18",children:l.jsx("strong",{children:"Challenges"})}),l.jsx("ul",{className:"rss-works-detail__details-section__container__challenges-section__list",children:t.challenges.map((a,i)=>l.jsx("li",{className:"rss-works-detail__details-section__container__challenges-section__list__item font-12-16",children:a},i))})]}),l.jsxs("div",{className:"rss-works-detail__details-section__container__outcomes-section",children:[l.jsx("h5",{className:"rss-works-detail__details-section__container__outcomes-section__title font-14-18",children:l.jsx("strong",{children:"Outcomes"})}),l.jsx("ul",{className:"rss-works-detail__details-section__container__outcomes-section__list",children:t.outcomes.map((a,i)=>l.jsx("li",{className:"rss-works-detail__details-section__container__outcomes-section__list__item font-12-16",children:a},i))})]})]})]}),l.jsxs("div",{className:"rss-works-detail__cta-section",children:[l.jsx("div",{className:"rss-works-detail__cta-section__btn-container",children:l.jsx("a",{target:"_blank",href:t.demo,className:"rss-works-detail__cta-section__btn-container__btn font-14-18",children:"Live Demo"})}),l.jsx("div",{className:"rss-works-detail__cta-section__btn-container rss-works-detail__cta-section__btn-container-shallow",title:t.repo?"":"Repository is not publicly available",children:l.jsxs("a",{target:"_blank",href:t.repo||"#",className:"rss-works-detail__cta-section__btn-container-shallow__btn font-14-18",children:["Repository",!t.repo&&l.jsx("span",{style:{marginLeft:"5px"},children:"🚫"})]})})]})]})}),l.jsx(ls,{})]})}function Zv(){const e=O.useRef(null);return O.useEffect(()=>{function n(){const s=document.querySelector("header"),t=document.querySelector("footer"),a=e.current;if(!s||!t||!a)return;const i=window.innerHeight-s.offsetHeight-t.offsetHeight;a.style.minHeight=`${i}px`}return n(),window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]),l.jsxs(l.Fragment,{children:[l.jsx(os,{}),l.jsx("section",{className:"rss-notfound",ref:e,children:l.jsxs("div",{className:"container-fluid",children:[l.jsx("h2",{className:"rss-notfound__title font-38-58",children:"404"}),l.jsx("p",{className:"rss-notfound__slug font-28-48",children:"Page Not Found"}),l.jsx("p",{className:"rss-notfound__description font-14-18",children:"The page you are looking for might have been removed, had its name changed or is temporarily unavailable."})]})}),l.jsx(ls,{})]})}const Jv=[{icon:"/icons/tick-ico.png",alt:"Icon",text:"25+ Completed Projects"},{icon:"/icons/peoples-ico.png",alt:"Icon",text:"10+ Happy Customers"},{icon:"/icons/chart-ico.png",alt:"Icon",text:"04+ Years of Experience"}],e_=[{id:2147856,title:"Building local LLM AI-Powered Applications with Quarkus, Ollama and Testcontainers",description:"Traditionally, many AI-powered applications rely on cloud-based APIs or centralized services for...",cover_image:"https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fdefv9j6s88xk87tot29t.png"},{id:2427984,title:"Building a Simple AI Agent with n8n",description:"Introduction   I've been playing around with AI Agents for a while now, and in a bit, I'll...",cover_image:"https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Foi6fcxggr217qki55g0e.png"},{id:2464126,title:"Docker Advance: Mastering Containerization",description:"As an experienced developer, you're beyond the basics of docker run and docker build. You need to...",cover_image:"https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fvsdghellsvrluw6pjqg6.png"},{id:2492409,title:"Kubernetes at Home: Set Up Your Own Cluster Using Vagrant & Ansible",description:"TL;DR: Learn how to build a lightweight Kubernetes cluster on your local machine using Vagrant,...",cover_image:"https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fflva26aw2y9yrce6bds4.png"},{id:2469183,title:"How to Self-Host Coolify on Your VPS: A Complete Guide",description:"Deploying applications can be a complex process, especially if you're managing multiple projects....",cover_image:"https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fg5hh8uh0pl1lmhgrx508.png"},{id:1406955,title:"Supercharge Your UI Development with Storybook",description:'"Storybook for Component-Driven Development: A Comprehensive Guide" - Learn how Storybook simplifies...',cover_image:"https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F4xoz500ldeh74izz9tom.png"}];function n_({children:e}){const n=O.useRef(null);return O.useEffect(()=>{if(!n.current)return;const s=n.current.querySelector(".swiper-wrapper"),a=((s==null?void 0:s.querySelectorAll(".swiper-slide"))||[]).length,i=window.innerWidth;let r=!1,o=!1;(a>3||a===3&&i<1440||a===2&&i<768)&&(r=!0,o=!0),le.use([fi]);const c=new le(n.current,{loop:r,autoplay:o?{delay:5e3,disableOnInteraction:!0,reverseDirection:!0}:!1,slidesPerView:"auto",breakpoints:Cv}),p=()=>c.update();return window.addEventListener("resize",p),()=>{window.removeEventListener("resize",p),c.destroy(!0,!0)}},[]),l.jsx("div",{className:"swiper blogs-swiper",ref:n,children:e})}const s_=({containerRef:e,blogs:n})=>{const s=O.useMemo(()=>al(n),[]);return l.jsxs("div",{ref:e,className:"rss-blogs",children:[l.jsx("h3",{className:"rss-blogs__title font-28-48",children:"Blogs"}),l.jsx(n_,{children:l.jsx("div",{className:"swiper-wrapper rss-blogs__items-container",children:s.map(t=>l.jsxs("a",{href:`/blog-detail?${t.id}`,className:"swiper-slide rss-blogs__items-container__item",children:[l.jsx("div",{className:"rss-blogs__items-container__item__img-container",children:l.jsx("img",{src:t.cover_image?t.cover_image:"images/order-uk-1.png",alt:t.title,className:"rss-blogs__items-container__item__img-container__img"})}),l.jsxs("div",{className:"rss-blogs__items-container__item__content",children:[l.jsx("h4",{className:"rss-blogs__items-container__item__content__title font-16-20",children:t.title}),l.jsx("p",{className:"rss-blogs__items-container__item__content__description font-14-18",children:t.description})]})]},t.id))})})]})},t_=e=>{const n=O.useRef(null);return l.jsx(s_,{containerRef:n,blogs:e.blogs})};function a_(){return l.jsxs(l.Fragment,{children:[l.jsx(os,{}),l.jsx("section",{className:"rss-portfolio",children:l.jsxs("div",{className:"container-fluid",children:[l.jsx(kd,{iconPath:"icons/starrs-ico.png",iconAlt:"Stars Icon",contentTitle:"My Works",contentSlug:"Some of my best works and technical blogs",children:l.jsx(bd,{className:"rss-banner__list-container",gap:14,children:Jv.map((e,n)=>l.jsxs("div",{className:"rss-banner__list-container__item",children:[l.jsx("img",{src:e.icon,alt:e.alt,className:"rss-banner__list-container__item__ico"}),l.jsx("p",{className:"rss-banner__list-container__item__content font-14-18",children:e.text})]},n))})}),l.jsxs("div",{className:"rss-portfolio__contents-container",children:[l.jsx(Kr,{baseClassName:"",swiperBaseClassName:"",title:"Completed Projects",slug:"",items:[xd]}),l.jsx(Kr,{baseClassName:"",swiperBaseClassName:"",title:"Ongoing Projects",slug:"",items:[Sd]}),l.jsx(t_,{blogs:e_})]})]})}),l.jsx(ls,{})]})}function i_(){return l.jsxs(Xm,{children:[l.jsx(sg,{}),l.jsxs(Ym,{children:[l.jsx(Sn,{exact:!0,path:"/",component:Fv}),l.jsx(Sn,{exact:!0,path:"/about",component:Ov}),l.jsx(Sn,{exact:!0,path:"/projects",component:a_}),l.jsx(Sn,{exact:!0,path:"/contact",component:Gv}),l.jsx(Sn,{exact:!0,path:"/detail",component:Xv}),l.jsx(Sn,{exact:!0,path:"/blog-detail",component:Rv}),l.jsx(Sn,{path:"*",component:Zv})]})]})}const r_=()=>{const[e,n]=O.useState(!1);O.useEffect(()=>{if(!sessionStorage.getItem("cvModalDismissed")){const i=setTimeout(()=>{n(!0)},7e3);return()=>clearTimeout(i)}},[]);const s=()=>{n(!1),sessionStorage.setItem("cvModalDismissed","true")},t=a=>{a.preventDefault();const r=a.currentTarget.elements.namedItem("message");r.value.trim()?(alert(`Message sent: ${r.value}`),s()):alert("Please enter a message.")};return e?l.jsx("div",{className:"rss-modal",children:l.jsxs("div",{className:"rss-modal__content",children:[l.jsx("span",{className:"rss-modal__content__close-btn",onClick:s,children:"×"}),l.jsx("h2",{className:"rss-modal__content__title font-18-28",children:"Considering a Project?"}),l.jsx("h4",{className:"rss-modal__content__slug font-16-20",children:"See how my experience aligns with your needs."}),l.jsxs("form",{onSubmit:t,children:[l.jsx("textarea",{name:"message",placeholder:"Leave a Quick Message...",required:!0}),l.jsxs("div",{className:"rss-modal__content__btn-container",children:[l.jsx("a",{href:"//docs/Resume_Final.pdf",download:!0,className:"rss-modal__content__btn-container__download-btn font-14-18",children:"Download CV ⤓"}),l.jsx("button",{type:"submit",className:"rss-modal__content__btn-container__submit-btn font-14-18",children:"Send Message"})]})]})]})}):null},Lc=new URLSearchParams(window.location.search).get("redirect");Lc&&window.history.replaceState(null,"",Lc);Zi.createRoot(document.getElementById("root")).render(l.jsx(B.StrictMode,{children:l.jsxs(Zf,{children:[l.jsx(r_,{}),l.jsx(i_,{})]})}));
