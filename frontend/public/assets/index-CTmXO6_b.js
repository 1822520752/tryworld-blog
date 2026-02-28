var p1=Object.defineProperty;var m1=(e,t,n)=>t in e?p1(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var U=(e,t,n)=>m1(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Bp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function g1(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var Up={exports:{}},V={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vo=Symbol.for("react.element"),v1=Symbol.for("react.portal"),y1=Symbol.for("react.fragment"),x1=Symbol.for("react.strict_mode"),b1=Symbol.for("react.profiler"),w1=Symbol.for("react.provider"),_1=Symbol.for("react.context"),k1=Symbol.for("react.forward_ref"),S1=Symbol.for("react.suspense"),C1=Symbol.for("react.memo"),P1=Symbol.for("react.lazy"),Ef=Symbol.iterator;function E1(e){return e===null||typeof e!="object"?null:(e=Ef&&e[Ef]||e["@@iterator"],typeof e=="function"?e:null)}var Vp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Yp=Object.assign,Xp={};function Zr(e,t,n){this.props=e,this.context=t,this.refs=Xp,this.updater=n||Vp}Zr.prototype.isReactComponent={};Zr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Zr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Kp(){}Kp.prototype=Zr.prototype;function iu(e,t,n){this.props=e,this.context=t,this.refs=Xp,this.updater=n||Vp}var ou=iu.prototype=new Kp;ou.constructor=iu;Yp(ou,Zr.prototype);ou.isPureReactComponent=!0;var Mf=Array.isArray,Gp=Object.prototype.hasOwnProperty,su={current:null},Qp={key:!0,ref:!0,__self:!0,__source:!0};function qp(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)Gp.call(t,r)&&!Qp.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:vo,type:e,key:o,ref:s,props:i,_owner:su.current}}function M1(e,t){return{$$typeof:vo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function au(e){return typeof e=="object"&&e!==null&&e.$$typeof===vo}function N1(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Nf=/\/+/g;function Ua(e,t){return typeof e=="object"&&e!==null&&e.key!=null?N1(""+e.key):t.toString(36)}function cs(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case vo:case v1:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Ua(s,0):r,Mf(i)?(n="",e!=null&&(n=e.replace(Nf,"$&/")+"/"),cs(i,t,n,"",function(c){return c})):i!=null&&(au(i)&&(i=M1(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Nf,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",Mf(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+Ua(o,a);s+=cs(o,t,n,l,i)}else if(l=E1(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+Ua(o,a++),s+=cs(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function No(e,t,n){if(e==null)return e;var r=[],i=0;return cs(e,r,"","",function(o){return t.call(n,o,i++)}),r}function O1(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Re={current:null},us={transition:null},j1={ReactCurrentDispatcher:Re,ReactCurrentBatchConfig:us,ReactCurrentOwner:su};function Jp(){throw Error("act(...) is not supported in production builds of React.")}V.Children={map:No,forEach:function(e,t,n){No(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return No(e,function(){t++}),t},toArray:function(e){return No(e,function(t){return t})||[]},only:function(e){if(!au(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};V.Component=Zr;V.Fragment=y1;V.Profiler=b1;V.PureComponent=iu;V.StrictMode=x1;V.Suspense=S1;V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=j1;V.act=Jp;V.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Yp({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=su.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Gp.call(t,l)&&!Qp.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:vo,type:e.type,key:i,ref:o,props:r,_owner:s}};V.createContext=function(e){return e={$$typeof:_1,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:w1,_context:e},e.Consumer=e};V.createElement=qp;V.createFactory=function(e){var t=qp.bind(null,e);return t.type=e,t};V.createRef=function(){return{current:null}};V.forwardRef=function(e){return{$$typeof:k1,render:e}};V.isValidElement=au;V.lazy=function(e){return{$$typeof:P1,_payload:{_status:-1,_result:e},_init:O1}};V.memo=function(e,t){return{$$typeof:C1,type:e,compare:t===void 0?null:t}};V.startTransition=function(e){var t=us.transition;us.transition={};try{e()}finally{us.transition=t}};V.unstable_act=Jp;V.useCallback=function(e,t){return Re.current.useCallback(e,t)};V.useContext=function(e){return Re.current.useContext(e)};V.useDebugValue=function(){};V.useDeferredValue=function(e){return Re.current.useDeferredValue(e)};V.useEffect=function(e,t){return Re.current.useEffect(e,t)};V.useId=function(){return Re.current.useId()};V.useImperativeHandle=function(e,t,n){return Re.current.useImperativeHandle(e,t,n)};V.useInsertionEffect=function(e,t){return Re.current.useInsertionEffect(e,t)};V.useLayoutEffect=function(e,t){return Re.current.useLayoutEffect(e,t)};V.useMemo=function(e,t){return Re.current.useMemo(e,t)};V.useReducer=function(e,t,n){return Re.current.useReducer(e,t,n)};V.useRef=function(e){return Re.current.useRef(e)};V.useState=function(e){return Re.current.useState(e)};V.useSyncExternalStore=function(e,t,n){return Re.current.useSyncExternalStore(e,t,n)};V.useTransition=function(){return Re.current.useTransition()};V.version="18.3.1";Up.exports=V;var T=Up.exports;const lr=Bp(T);var Zp={exports:{}},tt={},em={exports:{}},tm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(M,I){var D=M.length;M.push(I);e:for(;0<D;){var W=D-1>>>1,G=M[W];if(0<i(G,I))M[W]=I,M[D]=G,D=W;else break e}}function n(M){return M.length===0?null:M[0]}function r(M){if(M.length===0)return null;var I=M[0],D=M.pop();if(D!==I){M[0]=D;e:for(var W=0,G=M.length,xe=G>>>1;W<xe;){var me=2*(W+1)-1,dt=M[me],ke=me+1,fr=M[ke];if(0>i(dt,D))ke<G&&0>i(fr,dt)?(M[W]=fr,M[ke]=D,W=ke):(M[W]=dt,M[me]=D,W=me);else if(ke<G&&0>i(fr,D))M[W]=fr,M[ke]=D,W=ke;else break e}}return I}function i(M,I){var D=M.sortIndex-I.sortIndex;return D!==0?D:M.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],c=[],u=1,f=null,d=3,h=!1,g=!1,p=!1,b=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(M){for(var I=n(c);I!==null;){if(I.callback===null)r(c);else if(I.startTime<=M)r(c),I.sortIndex=I.expirationTime,t(l,I);else break;I=n(c)}}function _(M){if(p=!1,x(M),!g)if(n(l)!==null)g=!0,B(w);else{var I=n(c);I!==null&&k(_,I.startTime-M)}}function w(M,I){g=!1,p&&(p=!1,y(C),C=-1),h=!0;var D=d;try{for(x(I),f=n(l);f!==null&&(!(f.expirationTime>I)||M&&!L());){var W=f.callback;if(typeof W=="function"){f.callback=null,d=f.priorityLevel;var G=W(f.expirationTime<=I);I=e.unstable_now(),typeof G=="function"?f.callback=G:f===n(l)&&r(l),x(I)}else r(l);f=n(l)}if(f!==null)var xe=!0;else{var me=n(c);me!==null&&k(_,me.startTime-I),xe=!1}return xe}finally{f=null,d=D,h=!1}}var S=!1,E=null,C=-1,P=5,N=-1;function L(){return!(e.unstable_now()-N<P)}function $(){if(E!==null){var M=e.unstable_now();N=M;var I=!0;try{I=E(!0,M)}finally{I?se():(S=!1,E=null)}}else S=!1}var se;if(typeof v=="function")se=function(){v($)};else if(typeof MessageChannel<"u"){var F=new MessageChannel,A=F.port2;F.port1.onmessage=$,se=function(){A.postMessage(null)}}else se=function(){b($,0)};function B(M){E=M,S||(S=!0,se())}function k(M,I){C=b(function(){M(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(M){M.callback=null},e.unstable_continueExecution=function(){g||h||(g=!0,B(w))},e.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<M?Math.floor(1e3/M):5},e.unstable_getCurrentPriorityLevel=function(){return d},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(M){switch(d){case 1:case 2:case 3:var I=3;break;default:I=d}var D=d;d=I;try{return M()}finally{d=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(M,I){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var D=d;d=M;try{return I()}finally{d=D}},e.unstable_scheduleCallback=function(M,I,D){var W=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?W+D:W):D=W,M){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=D+G,M={id:u++,callback:I,priorityLevel:M,startTime:D,expirationTime:G,sortIndex:-1},D>W?(M.sortIndex=D,t(c,M),n(l)===null&&M===n(c)&&(p?(y(C),C=-1):p=!0,k(_,D-W))):(M.sortIndex=G,t(l,M),g||h||(g=!0,B(w))),M},e.unstable_shouldYield=L,e.unstable_wrapCallback=function(M){var I=d;return function(){var D=d;d=I;try{return M.apply(this,arguments)}finally{d=D}}}})(tm);em.exports=tm;var T1=em.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A1=T,et=T1;function O(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var nm=new Set,Vi={};function cr(e,t){$r(e,t),$r(e+"Capture",t)}function $r(e,t){for(Vi[e]=t,e=0;e<t.length;e++)nm.add(t[e])}var Kt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zl=Object.prototype.hasOwnProperty,z1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Of={},jf={};function L1(e){return zl.call(jf,e)?!0:zl.call(Of,e)?!1:z1.test(e)?jf[e]=!0:(Of[e]=!0,!1)}function I1(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function D1(e,t,n,r){if(t===null||typeof t>"u"||I1(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Fe(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var Ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ee[e]=new Fe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ee[t]=new Fe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ee[e]=new Fe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ee[e]=new Fe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ee[e]=new Fe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ee[e]=new Fe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ee[e]=new Fe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ee[e]=new Fe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ee[e]=new Fe(e,5,!1,e.toLowerCase(),null,!1,!1)});var lu=/[\-:]([a-z])/g;function cu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(lu,cu);Ee[t]=new Fe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(lu,cu);Ee[t]=new Fe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(lu,cu);Ee[t]=new Fe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ee[e]=new Fe(e,1,!1,e.toLowerCase(),null,!1,!1)});Ee.xlinkHref=new Fe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ee[e]=new Fe(e,1,!1,e.toLowerCase(),null,!0,!0)});function uu(e,t,n,r){var i=Ee.hasOwnProperty(t)?Ee[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(D1(t,n,i,r)&&(n=null),r||i===null?L1(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var en=A1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Oo=Symbol.for("react.element"),gr=Symbol.for("react.portal"),vr=Symbol.for("react.fragment"),fu=Symbol.for("react.strict_mode"),Ll=Symbol.for("react.profiler"),rm=Symbol.for("react.provider"),im=Symbol.for("react.context"),du=Symbol.for("react.forward_ref"),Il=Symbol.for("react.suspense"),Dl=Symbol.for("react.suspense_list"),hu=Symbol.for("react.memo"),on=Symbol.for("react.lazy"),om=Symbol.for("react.offscreen"),Tf=Symbol.iterator;function oi(e){return e===null||typeof e!="object"?null:(e=Tf&&e[Tf]||e["@@iterator"],typeof e=="function"?e:null)}var ue=Object.assign,Va;function yi(e){if(Va===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Va=t&&t[1]||""}return`
`+Va+e}var Ya=!1;function Xa(e,t){if(!e||Ya)return"";Ya=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{Ya=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?yi(e):""}function R1(e){switch(e.tag){case 5:return yi(e.type);case 16:return yi("Lazy");case 13:return yi("Suspense");case 19:return yi("SuspenseList");case 0:case 2:case 15:return e=Xa(e.type,!1),e;case 11:return e=Xa(e.type.render,!1),e;case 1:return e=Xa(e.type,!0),e;default:return""}}function Rl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case vr:return"Fragment";case gr:return"Portal";case Ll:return"Profiler";case fu:return"StrictMode";case Il:return"Suspense";case Dl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case im:return(e.displayName||"Context")+".Consumer";case rm:return(e._context.displayName||"Context")+".Provider";case du:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case hu:return t=e.displayName||null,t!==null?t:Rl(e.type)||"Memo";case on:t=e._payload,e=e._init;try{return Rl(e(t))}catch{}}return null}function F1(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Rl(t);case 8:return t===fu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Sn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function sm(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function $1(e){var t=sm(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function jo(e){e._valueTracker||(e._valueTracker=$1(e))}function am(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=sm(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ms(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Fl(e,t){var n=t.checked;return ue({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Af(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Sn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function lm(e,t){t=t.checked,t!=null&&uu(e,"checked",t,!1)}function $l(e,t){lm(e,t);var n=Sn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Wl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Wl(e,t.type,Sn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function zf(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Wl(e,t,n){(t!=="number"||Ms(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var xi=Array.isArray;function jr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Sn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Hl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(O(91));return ue({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Lf(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(O(92));if(xi(n)){if(1<n.length)throw Error(O(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Sn(n)}}function cm(e,t){var n=Sn(t.value),r=Sn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function If(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function um(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Bl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?um(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var To,fm=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(To=To||document.createElement("div"),To.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=To.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Yi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ei={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},W1=["Webkit","ms","Moz","O"];Object.keys(Ei).forEach(function(e){W1.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ei[t]=Ei[e]})});function dm(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ei.hasOwnProperty(e)&&Ei[e]?(""+t).trim():t+"px"}function hm(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=dm(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var H1=ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ul(e,t){if(t){if(H1[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(O(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(O(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(O(61))}if(t.style!=null&&typeof t.style!="object")throw Error(O(62))}}function Vl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yl=null;function pu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Xl=null,Tr=null,Ar=null;function Df(e){if(e=bo(e)){if(typeof Xl!="function")throw Error(O(280));var t=e.stateNode;t&&(t=ya(t),Xl(e.stateNode,e.type,t))}}function pm(e){Tr?Ar?Ar.push(e):Ar=[e]:Tr=e}function mm(){if(Tr){var e=Tr,t=Ar;if(Ar=Tr=null,Df(e),t)for(e=0;e<t.length;e++)Df(t[e])}}function gm(e,t){return e(t)}function vm(){}var Ka=!1;function ym(e,t,n){if(Ka)return e(t,n);Ka=!0;try{return gm(e,t,n)}finally{Ka=!1,(Tr!==null||Ar!==null)&&(vm(),mm())}}function Xi(e,t){var n=e.stateNode;if(n===null)return null;var r=ya(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(O(231,t,typeof n));return n}var Kl=!1;if(Kt)try{var si={};Object.defineProperty(si,"passive",{get:function(){Kl=!0}}),window.addEventListener("test",si,si),window.removeEventListener("test",si,si)}catch{Kl=!1}function B1(e,t,n,r,i,o,s,a,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(u){this.onError(u)}}var Mi=!1,Ns=null,Os=!1,Gl=null,U1={onError:function(e){Mi=!0,Ns=e}};function V1(e,t,n,r,i,o,s,a,l){Mi=!1,Ns=null,B1.apply(U1,arguments)}function Y1(e,t,n,r,i,o,s,a,l){if(V1.apply(this,arguments),Mi){if(Mi){var c=Ns;Mi=!1,Ns=null}else throw Error(O(198));Os||(Os=!0,Gl=c)}}function ur(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function xm(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Rf(e){if(ur(e)!==e)throw Error(O(188))}function X1(e){var t=e.alternate;if(!t){if(t=ur(e),t===null)throw Error(O(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Rf(i),e;if(o===r)return Rf(i),t;o=o.sibling}throw Error(O(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(O(189))}}if(n.alternate!==r)throw Error(O(190))}if(n.tag!==3)throw Error(O(188));return n.stateNode.current===n?e:t}function bm(e){return e=X1(e),e!==null?wm(e):null}function wm(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=wm(e);if(t!==null)return t;e=e.sibling}return null}var _m=et.unstable_scheduleCallback,Ff=et.unstable_cancelCallback,K1=et.unstable_shouldYield,G1=et.unstable_requestPaint,pe=et.unstable_now,Q1=et.unstable_getCurrentPriorityLevel,mu=et.unstable_ImmediatePriority,km=et.unstable_UserBlockingPriority,js=et.unstable_NormalPriority,q1=et.unstable_LowPriority,Sm=et.unstable_IdlePriority,pa=null,At=null;function J1(e){if(At&&typeof At.onCommitFiberRoot=="function")try{At.onCommitFiberRoot(pa,e,void 0,(e.current.flags&128)===128)}catch{}}var xt=Math.clz32?Math.clz32:ty,Z1=Math.log,ey=Math.LN2;function ty(e){return e>>>=0,e===0?32:31-(Z1(e)/ey|0)|0}var Ao=64,zo=4194304;function bi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ts(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=bi(a):(o&=s,o!==0&&(r=bi(o)))}else s=n&~i,s!==0?r=bi(s):o!==0&&(r=bi(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-xt(t),i=1<<n,r|=e[n],t&=~i;return r}function ny(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ry(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-xt(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=ny(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function Ql(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Cm(){var e=Ao;return Ao<<=1,!(Ao&4194240)&&(Ao=64),e}function Ga(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function yo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-xt(t),e[t]=n}function iy(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-xt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function gu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-xt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var Z=0;function Pm(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Em,vu,Mm,Nm,Om,ql=!1,Lo=[],mn=null,gn=null,vn=null,Ki=new Map,Gi=new Map,an=[],oy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $f(e,t){switch(e){case"focusin":case"focusout":mn=null;break;case"dragenter":case"dragleave":gn=null;break;case"mouseover":case"mouseout":vn=null;break;case"pointerover":case"pointerout":Ki.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gi.delete(t.pointerId)}}function ai(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=bo(t),t!==null&&vu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function sy(e,t,n,r,i){switch(t){case"focusin":return mn=ai(mn,e,t,n,r,i),!0;case"dragenter":return gn=ai(gn,e,t,n,r,i),!0;case"mouseover":return vn=ai(vn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Ki.set(o,ai(Ki.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Gi.set(o,ai(Gi.get(o)||null,e,t,n,r,i)),!0}return!1}function jm(e){var t=Bn(e.target);if(t!==null){var n=ur(t);if(n!==null){if(t=n.tag,t===13){if(t=xm(n),t!==null){e.blockedOn=t,Om(e.priority,function(){Mm(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function fs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Jl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Yl=r,n.target.dispatchEvent(r),Yl=null}else return t=bo(n),t!==null&&vu(t),e.blockedOn=n,!1;t.shift()}return!0}function Wf(e,t,n){fs(e)&&n.delete(t)}function ay(){ql=!1,mn!==null&&fs(mn)&&(mn=null),gn!==null&&fs(gn)&&(gn=null),vn!==null&&fs(vn)&&(vn=null),Ki.forEach(Wf),Gi.forEach(Wf)}function li(e,t){e.blockedOn===t&&(e.blockedOn=null,ql||(ql=!0,et.unstable_scheduleCallback(et.unstable_NormalPriority,ay)))}function Qi(e){function t(i){return li(i,e)}if(0<Lo.length){li(Lo[0],e);for(var n=1;n<Lo.length;n++){var r=Lo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(mn!==null&&li(mn,e),gn!==null&&li(gn,e),vn!==null&&li(vn,e),Ki.forEach(t),Gi.forEach(t),n=0;n<an.length;n++)r=an[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<an.length&&(n=an[0],n.blockedOn===null);)jm(n),n.blockedOn===null&&an.shift()}var zr=en.ReactCurrentBatchConfig,As=!0;function ly(e,t,n,r){var i=Z,o=zr.transition;zr.transition=null;try{Z=1,yu(e,t,n,r)}finally{Z=i,zr.transition=o}}function cy(e,t,n,r){var i=Z,o=zr.transition;zr.transition=null;try{Z=4,yu(e,t,n,r)}finally{Z=i,zr.transition=o}}function yu(e,t,n,r){if(As){var i=Jl(e,t,n,r);if(i===null)ol(e,t,r,zs,n),$f(e,r);else if(sy(i,e,t,n,r))r.stopPropagation();else if($f(e,r),t&4&&-1<oy.indexOf(e)){for(;i!==null;){var o=bo(i);if(o!==null&&Em(o),o=Jl(e,t,n,r),o===null&&ol(e,t,r,zs,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else ol(e,t,r,null,n)}}var zs=null;function Jl(e,t,n,r){if(zs=null,e=pu(r),e=Bn(e),e!==null)if(t=ur(e),t===null)e=null;else if(n=t.tag,n===13){if(e=xm(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return zs=e,null}function Tm(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Q1()){case mu:return 1;case km:return 4;case js:case q1:return 16;case Sm:return 536870912;default:return 16}default:return 16}}var cn=null,xu=null,ds=null;function Am(){if(ds)return ds;var e,t=xu,n=t.length,r,i="value"in cn?cn.value:cn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return ds=i.slice(e,1<r?1-r:void 0)}function hs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Io(){return!0}function Hf(){return!1}function nt(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Io:Hf,this.isPropagationStopped=Hf,this}return ue(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Io)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Io)},persist:function(){},isPersistent:Io}),t}var ei={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bu=nt(ei),xo=ue({},ei,{view:0,detail:0}),uy=nt(xo),Qa,qa,ci,ma=ue({},xo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ci&&(ci&&e.type==="mousemove"?(Qa=e.screenX-ci.screenX,qa=e.screenY-ci.screenY):qa=Qa=0,ci=e),Qa)},movementY:function(e){return"movementY"in e?e.movementY:qa}}),Bf=nt(ma),fy=ue({},ma,{dataTransfer:0}),dy=nt(fy),hy=ue({},xo,{relatedTarget:0}),Ja=nt(hy),py=ue({},ei,{animationName:0,elapsedTime:0,pseudoElement:0}),my=nt(py),gy=ue({},ei,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),vy=nt(gy),yy=ue({},ei,{data:0}),Uf=nt(yy),xy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},by={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _y(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=wy[e])?!!t[e]:!1}function wu(){return _y}var ky=ue({},xo,{key:function(e){if(e.key){var t=xy[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=hs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?by[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wu,charCode:function(e){return e.type==="keypress"?hs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?hs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Sy=nt(ky),Cy=ue({},ma,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vf=nt(Cy),Py=ue({},xo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wu}),Ey=nt(Py),My=ue({},ei,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ny=nt(My),Oy=ue({},ma,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),jy=nt(Oy),Ty=[9,13,27,32],_u=Kt&&"CompositionEvent"in window,Ni=null;Kt&&"documentMode"in document&&(Ni=document.documentMode);var Ay=Kt&&"TextEvent"in window&&!Ni,zm=Kt&&(!_u||Ni&&8<Ni&&11>=Ni),Yf=" ",Xf=!1;function Lm(e,t){switch(e){case"keyup":return Ty.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Im(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var yr=!1;function zy(e,t){switch(e){case"compositionend":return Im(t);case"keypress":return t.which!==32?null:(Xf=!0,Yf);case"textInput":return e=t.data,e===Yf&&Xf?null:e;default:return null}}function Ly(e,t){if(yr)return e==="compositionend"||!_u&&Lm(e,t)?(e=Am(),ds=xu=cn=null,yr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return zm&&t.locale!=="ko"?null:t.data;default:return null}}var Iy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Iy[e.type]:t==="textarea"}function Dm(e,t,n,r){pm(r),t=Ls(t,"onChange"),0<t.length&&(n=new bu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Oi=null,qi=null;function Dy(e){Km(e,0)}function ga(e){var t=wr(e);if(am(t))return e}function Ry(e,t){if(e==="change")return t}var Rm=!1;if(Kt){var Za;if(Kt){var el="oninput"in document;if(!el){var Gf=document.createElement("div");Gf.setAttribute("oninput","return;"),el=typeof Gf.oninput=="function"}Za=el}else Za=!1;Rm=Za&&(!document.documentMode||9<document.documentMode)}function Qf(){Oi&&(Oi.detachEvent("onpropertychange",Fm),qi=Oi=null)}function Fm(e){if(e.propertyName==="value"&&ga(qi)){var t=[];Dm(t,qi,e,pu(e)),ym(Dy,t)}}function Fy(e,t,n){e==="focusin"?(Qf(),Oi=t,qi=n,Oi.attachEvent("onpropertychange",Fm)):e==="focusout"&&Qf()}function $y(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ga(qi)}function Wy(e,t){if(e==="click")return ga(t)}function Hy(e,t){if(e==="input"||e==="change")return ga(t)}function By(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var _t=typeof Object.is=="function"?Object.is:By;function Ji(e,t){if(_t(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!zl.call(t,i)||!_t(e[i],t[i]))return!1}return!0}function qf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Jf(e,t){var n=qf(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=qf(n)}}function $m(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?$m(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Wm(){for(var e=window,t=Ms();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ms(e.document)}return t}function ku(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Uy(e){var t=Wm(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&$m(n.ownerDocument.documentElement,n)){if(r!==null&&ku(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Jf(n,o);var s=Jf(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Vy=Kt&&"documentMode"in document&&11>=document.documentMode,xr=null,Zl=null,ji=null,ec=!1;function Zf(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ec||xr==null||xr!==Ms(r)||(r=xr,"selectionStart"in r&&ku(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ji&&Ji(ji,r)||(ji=r,r=Ls(Zl,"onSelect"),0<r.length&&(t=new bu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=xr)))}function Do(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var br={animationend:Do("Animation","AnimationEnd"),animationiteration:Do("Animation","AnimationIteration"),animationstart:Do("Animation","AnimationStart"),transitionend:Do("Transition","TransitionEnd")},tl={},Hm={};Kt&&(Hm=document.createElement("div").style,"AnimationEvent"in window||(delete br.animationend.animation,delete br.animationiteration.animation,delete br.animationstart.animation),"TransitionEvent"in window||delete br.transitionend.transition);function va(e){if(tl[e])return tl[e];if(!br[e])return e;var t=br[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Hm)return tl[e]=t[n];return e}var Bm=va("animationend"),Um=va("animationiteration"),Vm=va("animationstart"),Ym=va("transitionend"),Xm=new Map,ed="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function jn(e,t){Xm.set(e,t),cr(t,[e])}for(var nl=0;nl<ed.length;nl++){var rl=ed[nl],Yy=rl.toLowerCase(),Xy=rl[0].toUpperCase()+rl.slice(1);jn(Yy,"on"+Xy)}jn(Bm,"onAnimationEnd");jn(Um,"onAnimationIteration");jn(Vm,"onAnimationStart");jn("dblclick","onDoubleClick");jn("focusin","onFocus");jn("focusout","onBlur");jn(Ym,"onTransitionEnd");$r("onMouseEnter",["mouseout","mouseover"]);$r("onMouseLeave",["mouseout","mouseover"]);$r("onPointerEnter",["pointerout","pointerover"]);$r("onPointerLeave",["pointerout","pointerover"]);cr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));cr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));cr("onBeforeInput",["compositionend","keypress","textInput","paste"]);cr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));cr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));cr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ky=new Set("cancel close invalid load scroll toggle".split(" ").concat(wi));function td(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Y1(r,t,void 0,e),e.currentTarget=null}function Km(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;td(i,a,c),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,c=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;td(i,a,c),o=l}}}if(Os)throw e=Gl,Os=!1,Gl=null,e}function ne(e,t){var n=t[oc];n===void 0&&(n=t[oc]=new Set);var r=e+"__bubble";n.has(r)||(Gm(t,e,2,!1),n.add(r))}function il(e,t,n){var r=0;t&&(r|=4),Gm(n,e,r,t)}var Ro="_reactListening"+Math.random().toString(36).slice(2);function Zi(e){if(!e[Ro]){e[Ro]=!0,nm.forEach(function(n){n!=="selectionchange"&&(Ky.has(n)||il(n,!1,e),il(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ro]||(t[Ro]=!0,il("selectionchange",!1,t))}}function Gm(e,t,n,r){switch(Tm(t)){case 1:var i=ly;break;case 4:i=cy;break;default:i=yu}n=i.bind(null,t,n,e),i=void 0,!Kl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ol(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Bn(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}ym(function(){var c=o,u=pu(n),f=[];e:{var d=Xm.get(e);if(d!==void 0){var h=bu,g=e;switch(e){case"keypress":if(hs(n)===0)break e;case"keydown":case"keyup":h=Sy;break;case"focusin":g="focus",h=Ja;break;case"focusout":g="blur",h=Ja;break;case"beforeblur":case"afterblur":h=Ja;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Bf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=dy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=Ey;break;case Bm:case Um:case Vm:h=my;break;case Ym:h=Ny;break;case"scroll":h=uy;break;case"wheel":h=jy;break;case"copy":case"cut":case"paste":h=vy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Vf}var p=(t&4)!==0,b=!p&&e==="scroll",y=p?d!==null?d+"Capture":null:d;p=[];for(var v=c,x;v!==null;){x=v;var _=x.stateNode;if(x.tag===5&&_!==null&&(x=_,y!==null&&(_=Xi(v,y),_!=null&&p.push(eo(v,_,x)))),b)break;v=v.return}0<p.length&&(d=new h(d,g,null,n,u),f.push({event:d,listeners:p}))}}if(!(t&7)){e:{if(d=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",d&&n!==Yl&&(g=n.relatedTarget||n.fromElement)&&(Bn(g)||g[Gt]))break e;if((h||d)&&(d=u.window===u?u:(d=u.ownerDocument)?d.defaultView||d.parentWindow:window,h?(g=n.relatedTarget||n.toElement,h=c,g=g?Bn(g):null,g!==null&&(b=ur(g),g!==b||g.tag!==5&&g.tag!==6)&&(g=null)):(h=null,g=c),h!==g)){if(p=Bf,_="onMouseLeave",y="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(p=Vf,_="onPointerLeave",y="onPointerEnter",v="pointer"),b=h==null?d:wr(h),x=g==null?d:wr(g),d=new p(_,v+"leave",h,n,u),d.target=b,d.relatedTarget=x,_=null,Bn(u)===c&&(p=new p(y,v+"enter",g,n,u),p.target=x,p.relatedTarget=b,_=p),b=_,h&&g)t:{for(p=h,y=g,v=0,x=p;x;x=dr(x))v++;for(x=0,_=y;_;_=dr(_))x++;for(;0<v-x;)p=dr(p),v--;for(;0<x-v;)y=dr(y),x--;for(;v--;){if(p===y||y!==null&&p===y.alternate)break t;p=dr(p),y=dr(y)}p=null}else p=null;h!==null&&nd(f,d,h,p,!1),g!==null&&b!==null&&nd(f,b,g,p,!0)}}e:{if(d=c?wr(c):window,h=d.nodeName&&d.nodeName.toLowerCase(),h==="select"||h==="input"&&d.type==="file")var w=Ry;else if(Kf(d))if(Rm)w=Hy;else{w=$y;var S=Fy}else(h=d.nodeName)&&h.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(w=Wy);if(w&&(w=w(e,c))){Dm(f,w,n,u);break e}S&&S(e,d,c),e==="focusout"&&(S=d._wrapperState)&&S.controlled&&d.type==="number"&&Wl(d,"number",d.value)}switch(S=c?wr(c):window,e){case"focusin":(Kf(S)||S.contentEditable==="true")&&(xr=S,Zl=c,ji=null);break;case"focusout":ji=Zl=xr=null;break;case"mousedown":ec=!0;break;case"contextmenu":case"mouseup":case"dragend":ec=!1,Zf(f,n,u);break;case"selectionchange":if(Vy)break;case"keydown":case"keyup":Zf(f,n,u)}var E;if(_u)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else yr?Lm(e,n)&&(C="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(zm&&n.locale!=="ko"&&(yr||C!=="onCompositionStart"?C==="onCompositionEnd"&&yr&&(E=Am()):(cn=u,xu="value"in cn?cn.value:cn.textContent,yr=!0)),S=Ls(c,C),0<S.length&&(C=new Uf(C,e,null,n,u),f.push({event:C,listeners:S}),E?C.data=E:(E=Im(n),E!==null&&(C.data=E)))),(E=Ay?zy(e,n):Ly(e,n))&&(c=Ls(c,"onBeforeInput"),0<c.length&&(u=new Uf("onBeforeInput","beforeinput",null,n,u),f.push({event:u,listeners:c}),u.data=E))}Km(f,t)})}function eo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ls(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Xi(e,n),o!=null&&r.unshift(eo(e,o,i)),o=Xi(e,t),o!=null&&r.push(eo(e,o,i))),e=e.return}return r}function dr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function nd(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=Xi(n,o),l!=null&&s.unshift(eo(n,l,a))):i||(l=Xi(n,o),l!=null&&s.push(eo(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Gy=/\r\n?/g,Qy=/\u0000|\uFFFD/g;function rd(e){return(typeof e=="string"?e:""+e).replace(Gy,`
`).replace(Qy,"")}function Fo(e,t,n){if(t=rd(t),rd(e)!==t&&n)throw Error(O(425))}function Is(){}var tc=null,nc=null;function rc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ic=typeof setTimeout=="function"?setTimeout:void 0,qy=typeof clearTimeout=="function"?clearTimeout:void 0,id=typeof Promise=="function"?Promise:void 0,Jy=typeof queueMicrotask=="function"?queueMicrotask:typeof id<"u"?function(e){return id.resolve(null).then(e).catch(Zy)}:ic;function Zy(e){setTimeout(function(){throw e})}function sl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Qi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Qi(t)}function yn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function od(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ti=Math.random().toString(36).slice(2),jt="__reactFiber$"+ti,to="__reactProps$"+ti,Gt="__reactContainer$"+ti,oc="__reactEvents$"+ti,e2="__reactListeners$"+ti,t2="__reactHandles$"+ti;function Bn(e){var t=e[jt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Gt]||n[jt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=od(e);e!==null;){if(n=e[jt])return n;e=od(e)}return t}e=n,n=e.parentNode}return null}function bo(e){return e=e[jt]||e[Gt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function wr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(O(33))}function ya(e){return e[to]||null}var sc=[],_r=-1;function Tn(e){return{current:e}}function ie(e){0>_r||(e.current=sc[_r],sc[_r]=null,_r--)}function te(e,t){_r++,sc[_r]=e.current,e.current=t}var Cn={},Ae=Tn(Cn),Ue=Tn(!1),Zn=Cn;function Wr(e,t){var n=e.type.contextTypes;if(!n)return Cn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ve(e){return e=e.childContextTypes,e!=null}function Ds(){ie(Ue),ie(Ae)}function sd(e,t,n){if(Ae.current!==Cn)throw Error(O(168));te(Ae,t),te(Ue,n)}function Qm(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(O(108,F1(e)||"Unknown",i));return ue({},n,r)}function Rs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Cn,Zn=Ae.current,te(Ae,e),te(Ue,Ue.current),!0}function ad(e,t,n){var r=e.stateNode;if(!r)throw Error(O(169));n?(e=Qm(e,t,Zn),r.__reactInternalMemoizedMergedChildContext=e,ie(Ue),ie(Ae),te(Ae,e)):ie(Ue),te(Ue,n)}var Wt=null,xa=!1,al=!1;function qm(e){Wt===null?Wt=[e]:Wt.push(e)}function n2(e){xa=!0,qm(e)}function An(){if(!al&&Wt!==null){al=!0;var e=0,t=Z;try{var n=Wt;for(Z=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Wt=null,xa=!1}catch(i){throw Wt!==null&&(Wt=Wt.slice(e+1)),_m(mu,An),i}finally{Z=t,al=!1}}return null}var kr=[],Sr=0,Fs=null,$s=0,st=[],at=0,er=null,Bt=1,Ut="";function Rn(e,t){kr[Sr++]=$s,kr[Sr++]=Fs,Fs=e,$s=t}function Jm(e,t,n){st[at++]=Bt,st[at++]=Ut,st[at++]=er,er=e;var r=Bt;e=Ut;var i=32-xt(r)-1;r&=~(1<<i),n+=1;var o=32-xt(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Bt=1<<32-xt(t)+i|n<<i|r,Ut=o+e}else Bt=1<<o|n<<i|r,Ut=e}function Su(e){e.return!==null&&(Rn(e,1),Jm(e,1,0))}function Cu(e){for(;e===Fs;)Fs=kr[--Sr],kr[Sr]=null,$s=kr[--Sr],kr[Sr]=null;for(;e===er;)er=st[--at],st[at]=null,Ut=st[--at],st[at]=null,Bt=st[--at],st[at]=null}var Je=null,Qe=null,ae=!1,vt=null;function Zm(e,t){var n=lt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ld(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Je=e,Qe=yn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Je=e,Qe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=er!==null?{id:Bt,overflow:Ut}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=lt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Je=e,Qe=null,!0):!1;default:return!1}}function ac(e){return(e.mode&1)!==0&&(e.flags&128)===0}function lc(e){if(ae){var t=Qe;if(t){var n=t;if(!ld(e,t)){if(ac(e))throw Error(O(418));t=yn(n.nextSibling);var r=Je;t&&ld(e,t)?Zm(r,n):(e.flags=e.flags&-4097|2,ae=!1,Je=e)}}else{if(ac(e))throw Error(O(418));e.flags=e.flags&-4097|2,ae=!1,Je=e}}}function cd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Je=e}function $o(e){if(e!==Je)return!1;if(!ae)return cd(e),ae=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!rc(e.type,e.memoizedProps)),t&&(t=Qe)){if(ac(e))throw eg(),Error(O(418));for(;t;)Zm(e,t),t=yn(t.nextSibling)}if(cd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(O(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Qe=yn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Qe=null}}else Qe=Je?yn(e.stateNode.nextSibling):null;return!0}function eg(){for(var e=Qe;e;)e=yn(e.nextSibling)}function Hr(){Qe=Je=null,ae=!1}function Pu(e){vt===null?vt=[e]:vt.push(e)}var r2=en.ReactCurrentBatchConfig;function ui(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(O(309));var r=n.stateNode}if(!r)throw Error(O(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(O(284));if(!n._owner)throw Error(O(290,e))}return e}function Wo(e,t){throw e=Object.prototype.toString.call(t),Error(O(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ud(e){var t=e._init;return t(e._payload)}function tg(e){function t(y,v){if(e){var x=y.deletions;x===null?(y.deletions=[v],y.flags|=16):x.push(v)}}function n(y,v){if(!e)return null;for(;v!==null;)t(y,v),v=v.sibling;return null}function r(y,v){for(y=new Map;v!==null;)v.key!==null?y.set(v.key,v):y.set(v.index,v),v=v.sibling;return y}function i(y,v){return y=_n(y,v),y.index=0,y.sibling=null,y}function o(y,v,x){return y.index=x,e?(x=y.alternate,x!==null?(x=x.index,x<v?(y.flags|=2,v):x):(y.flags|=2,v)):(y.flags|=1048576,v)}function s(y){return e&&y.alternate===null&&(y.flags|=2),y}function a(y,v,x,_){return v===null||v.tag!==6?(v=pl(x,y.mode,_),v.return=y,v):(v=i(v,x),v.return=y,v)}function l(y,v,x,_){var w=x.type;return w===vr?u(y,v,x.props.children,_,x.key):v!==null&&(v.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===on&&ud(w)===v.type)?(_=i(v,x.props),_.ref=ui(y,v,x),_.return=y,_):(_=bs(x.type,x.key,x.props,null,y.mode,_),_.ref=ui(y,v,x),_.return=y,_)}function c(y,v,x,_){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=ml(x,y.mode,_),v.return=y,v):(v=i(v,x.children||[]),v.return=y,v)}function u(y,v,x,_,w){return v===null||v.tag!==7?(v=Gn(x,y.mode,_,w),v.return=y,v):(v=i(v,x),v.return=y,v)}function f(y,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=pl(""+v,y.mode,x),v.return=y,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Oo:return x=bs(v.type,v.key,v.props,null,y.mode,x),x.ref=ui(y,null,v),x.return=y,x;case gr:return v=ml(v,y.mode,x),v.return=y,v;case on:var _=v._init;return f(y,_(v._payload),x)}if(xi(v)||oi(v))return v=Gn(v,y.mode,x,null),v.return=y,v;Wo(y,v)}return null}function d(y,v,x,_){var w=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return w!==null?null:a(y,v,""+x,_);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Oo:return x.key===w?l(y,v,x,_):null;case gr:return x.key===w?c(y,v,x,_):null;case on:return w=x._init,d(y,v,w(x._payload),_)}if(xi(x)||oi(x))return w!==null?null:u(y,v,x,_,null);Wo(y,x)}return null}function h(y,v,x,_,w){if(typeof _=="string"&&_!==""||typeof _=="number")return y=y.get(x)||null,a(v,y,""+_,w);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Oo:return y=y.get(_.key===null?x:_.key)||null,l(v,y,_,w);case gr:return y=y.get(_.key===null?x:_.key)||null,c(v,y,_,w);case on:var S=_._init;return h(y,v,x,S(_._payload),w)}if(xi(_)||oi(_))return y=y.get(x)||null,u(v,y,_,w,null);Wo(v,_)}return null}function g(y,v,x,_){for(var w=null,S=null,E=v,C=v=0,P=null;E!==null&&C<x.length;C++){E.index>C?(P=E,E=null):P=E.sibling;var N=d(y,E,x[C],_);if(N===null){E===null&&(E=P);break}e&&E&&N.alternate===null&&t(y,E),v=o(N,v,C),S===null?w=N:S.sibling=N,S=N,E=P}if(C===x.length)return n(y,E),ae&&Rn(y,C),w;if(E===null){for(;C<x.length;C++)E=f(y,x[C],_),E!==null&&(v=o(E,v,C),S===null?w=E:S.sibling=E,S=E);return ae&&Rn(y,C),w}for(E=r(y,E);C<x.length;C++)P=h(E,y,C,x[C],_),P!==null&&(e&&P.alternate!==null&&E.delete(P.key===null?C:P.key),v=o(P,v,C),S===null?w=P:S.sibling=P,S=P);return e&&E.forEach(function(L){return t(y,L)}),ae&&Rn(y,C),w}function p(y,v,x,_){var w=oi(x);if(typeof w!="function")throw Error(O(150));if(x=w.call(x),x==null)throw Error(O(151));for(var S=w=null,E=v,C=v=0,P=null,N=x.next();E!==null&&!N.done;C++,N=x.next()){E.index>C?(P=E,E=null):P=E.sibling;var L=d(y,E,N.value,_);if(L===null){E===null&&(E=P);break}e&&E&&L.alternate===null&&t(y,E),v=o(L,v,C),S===null?w=L:S.sibling=L,S=L,E=P}if(N.done)return n(y,E),ae&&Rn(y,C),w;if(E===null){for(;!N.done;C++,N=x.next())N=f(y,N.value,_),N!==null&&(v=o(N,v,C),S===null?w=N:S.sibling=N,S=N);return ae&&Rn(y,C),w}for(E=r(y,E);!N.done;C++,N=x.next())N=h(E,y,C,N.value,_),N!==null&&(e&&N.alternate!==null&&E.delete(N.key===null?C:N.key),v=o(N,v,C),S===null?w=N:S.sibling=N,S=N);return e&&E.forEach(function($){return t(y,$)}),ae&&Rn(y,C),w}function b(y,v,x,_){if(typeof x=="object"&&x!==null&&x.type===vr&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Oo:e:{for(var w=x.key,S=v;S!==null;){if(S.key===w){if(w=x.type,w===vr){if(S.tag===7){n(y,S.sibling),v=i(S,x.props.children),v.return=y,y=v;break e}}else if(S.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===on&&ud(w)===S.type){n(y,S.sibling),v=i(S,x.props),v.ref=ui(y,S,x),v.return=y,y=v;break e}n(y,S);break}else t(y,S);S=S.sibling}x.type===vr?(v=Gn(x.props.children,y.mode,_,x.key),v.return=y,y=v):(_=bs(x.type,x.key,x.props,null,y.mode,_),_.ref=ui(y,v,x),_.return=y,y=_)}return s(y);case gr:e:{for(S=x.key;v!==null;){if(v.key===S)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){n(y,v.sibling),v=i(v,x.children||[]),v.return=y,y=v;break e}else{n(y,v);break}else t(y,v);v=v.sibling}v=ml(x,y.mode,_),v.return=y,y=v}return s(y);case on:return S=x._init,b(y,v,S(x._payload),_)}if(xi(x))return g(y,v,x,_);if(oi(x))return p(y,v,x,_);Wo(y,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(n(y,v.sibling),v=i(v,x),v.return=y,y=v):(n(y,v),v=pl(x,y.mode,_),v.return=y,y=v),s(y)):n(y,v)}return b}var Br=tg(!0),ng=tg(!1),Ws=Tn(null),Hs=null,Cr=null,Eu=null;function Mu(){Eu=Cr=Hs=null}function Nu(e){var t=Ws.current;ie(Ws),e._currentValue=t}function cc(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Lr(e,t){Hs=e,Eu=Cr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Be=!0),e.firstContext=null)}function ut(e){var t=e._currentValue;if(Eu!==e)if(e={context:e,memoizedValue:t,next:null},Cr===null){if(Hs===null)throw Error(O(308));Cr=e,Hs.dependencies={lanes:0,firstContext:e}}else Cr=Cr.next=e;return t}var Un=null;function Ou(e){Un===null?Un=[e]:Un.push(e)}function rg(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Ou(t)):(n.next=i.next,i.next=n),t.interleaved=n,Qt(e,r)}function Qt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var sn=!1;function ju(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ig(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Xt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function xn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Q&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Qt(e,n)}return i=r.interleaved,i===null?(t.next=t,Ou(r)):(t.next=i.next,i.next=t),r.interleaved=t,Qt(e,n)}function ps(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,gu(e,n)}}function fd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Bs(e,t,n,r){var i=e.updateQueue;sn=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,s===null?o=c:s.next=c,s=l;var u=e.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==s&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(o!==null){var f=i.baseState;s=0,u=c=l=null,a=o;do{var d=a.lane,h=a.eventTime;if((r&d)===d){u!==null&&(u=u.next={eventTime:h,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=e,p=a;switch(d=t,h=n,p.tag){case 1:if(g=p.payload,typeof g=="function"){f=g.call(h,f,d);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=p.payload,d=typeof g=="function"?g.call(h,f,d):g,d==null)break e;f=ue({},f,d);break e;case 2:sn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else h={eventTime:h,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=h,l=f):u=u.next=h,s|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(!0);if(u===null&&(l=f),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=u,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);nr|=s,e.lanes=s,e.memoizedState=f}}function dd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(O(191,i));i.call(r)}}}var wo={},zt=Tn(wo),no=Tn(wo),ro=Tn(wo);function Vn(e){if(e===wo)throw Error(O(174));return e}function Tu(e,t){switch(te(ro,t),te(no,e),te(zt,wo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Bl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Bl(t,e)}ie(zt),te(zt,t)}function Ur(){ie(zt),ie(no),ie(ro)}function og(e){Vn(ro.current);var t=Vn(zt.current),n=Bl(t,e.type);t!==n&&(te(no,e),te(zt,n))}function Au(e){no.current===e&&(ie(zt),ie(no))}var le=Tn(0);function Us(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ll=[];function zu(){for(var e=0;e<ll.length;e++)ll[e]._workInProgressVersionPrimary=null;ll.length=0}var ms=en.ReactCurrentDispatcher,cl=en.ReactCurrentBatchConfig,tr=0,ce=null,ve=null,be=null,Vs=!1,Ti=!1,io=0,i2=0;function Ne(){throw Error(O(321))}function Lu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!_t(e[n],t[n]))return!1;return!0}function Iu(e,t,n,r,i,o){if(tr=o,ce=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ms.current=e===null||e.memoizedState===null?l2:c2,e=n(r,i),Ti){o=0;do{if(Ti=!1,io=0,25<=o)throw Error(O(301));o+=1,be=ve=null,t.updateQueue=null,ms.current=u2,e=n(r,i)}while(Ti)}if(ms.current=Ys,t=ve!==null&&ve.next!==null,tr=0,be=ve=ce=null,Vs=!1,t)throw Error(O(300));return e}function Du(){var e=io!==0;return io=0,e}function Nt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return be===null?ce.memoizedState=be=e:be=be.next=e,be}function ft(){if(ve===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=ve.next;var t=be===null?ce.memoizedState:be.next;if(t!==null)be=t,ve=e;else{if(e===null)throw Error(O(310));ve=e,e={memoizedState:ve.memoizedState,baseState:ve.baseState,baseQueue:ve.baseQueue,queue:ve.queue,next:null},be===null?ce.memoizedState=be=e:be=be.next=e}return be}function oo(e,t){return typeof t=="function"?t(e):t}function ul(e){var t=ft(),n=t.queue;if(n===null)throw Error(O(311));n.lastRenderedReducer=e;var r=ve,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,c=o;do{var u=c.lane;if((tr&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,s=r):l=l.next=f,ce.lanes|=u,nr|=u}c=c.next}while(c!==null&&c!==o);l===null?s=r:l.next=a,_t(r,t.memoizedState)||(Be=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ce.lanes|=o,nr|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function fl(e){var t=ft(),n=t.queue;if(n===null)throw Error(O(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);_t(o,t.memoizedState)||(Be=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function sg(){}function ag(e,t){var n=ce,r=ft(),i=t(),o=!_t(r.memoizedState,i);if(o&&(r.memoizedState=i,Be=!0),r=r.queue,Ru(ug.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||be!==null&&be.memoizedState.tag&1){if(n.flags|=2048,so(9,cg.bind(null,n,r,i,t),void 0,null),we===null)throw Error(O(349));tr&30||lg(n,t,i)}return i}function lg(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ce.updateQueue,t===null?(t={lastEffect:null,stores:null},ce.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function cg(e,t,n,r){t.value=n,t.getSnapshot=r,fg(t)&&dg(e)}function ug(e,t,n){return n(function(){fg(t)&&dg(e)})}function fg(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!_t(e,n)}catch{return!0}}function dg(e){var t=Qt(e,1);t!==null&&bt(t,e,1,-1)}function hd(e){var t=Nt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:oo,lastRenderedState:e},t.queue=e,e=e.dispatch=a2.bind(null,ce,e),[t.memoizedState,e]}function so(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ce.updateQueue,t===null?(t={lastEffect:null,stores:null},ce.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function hg(){return ft().memoizedState}function gs(e,t,n,r){var i=Nt();ce.flags|=e,i.memoizedState=so(1|t,n,void 0,r===void 0?null:r)}function ba(e,t,n,r){var i=ft();r=r===void 0?null:r;var o=void 0;if(ve!==null){var s=ve.memoizedState;if(o=s.destroy,r!==null&&Lu(r,s.deps)){i.memoizedState=so(t,n,o,r);return}}ce.flags|=e,i.memoizedState=so(1|t,n,o,r)}function pd(e,t){return gs(8390656,8,e,t)}function Ru(e,t){return ba(2048,8,e,t)}function pg(e,t){return ba(4,2,e,t)}function mg(e,t){return ba(4,4,e,t)}function gg(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function vg(e,t,n){return n=n!=null?n.concat([e]):null,ba(4,4,gg.bind(null,t,e),n)}function Fu(){}function yg(e,t){var n=ft();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Lu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function xg(e,t){var n=ft();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Lu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function bg(e,t,n){return tr&21?(_t(n,t)||(n=Cm(),ce.lanes|=n,nr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Be=!0),e.memoizedState=n)}function o2(e,t){var n=Z;Z=n!==0&&4>n?n:4,e(!0);var r=cl.transition;cl.transition={};try{e(!1),t()}finally{Z=n,cl.transition=r}}function wg(){return ft().memoizedState}function s2(e,t,n){var r=wn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},_g(e))kg(t,n);else if(n=rg(e,t,n,r),n!==null){var i=Ie();bt(n,e,r,i),Sg(n,t,r)}}function a2(e,t,n){var r=wn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(_g(e))kg(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,_t(a,s)){var l=t.interleaved;l===null?(i.next=i,Ou(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=rg(e,t,i,r),n!==null&&(i=Ie(),bt(n,e,r,i),Sg(n,t,r))}}function _g(e){var t=e.alternate;return e===ce||t!==null&&t===ce}function kg(e,t){Ti=Vs=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Sg(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,gu(e,n)}}var Ys={readContext:ut,useCallback:Ne,useContext:Ne,useEffect:Ne,useImperativeHandle:Ne,useInsertionEffect:Ne,useLayoutEffect:Ne,useMemo:Ne,useReducer:Ne,useRef:Ne,useState:Ne,useDebugValue:Ne,useDeferredValue:Ne,useTransition:Ne,useMutableSource:Ne,useSyncExternalStore:Ne,useId:Ne,unstable_isNewReconciler:!1},l2={readContext:ut,useCallback:function(e,t){return Nt().memoizedState=[e,t===void 0?null:t],e},useContext:ut,useEffect:pd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,gs(4194308,4,gg.bind(null,t,e),n)},useLayoutEffect:function(e,t){return gs(4194308,4,e,t)},useInsertionEffect:function(e,t){return gs(4,2,e,t)},useMemo:function(e,t){var n=Nt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Nt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=s2.bind(null,ce,e),[r.memoizedState,e]},useRef:function(e){var t=Nt();return e={current:e},t.memoizedState=e},useState:hd,useDebugValue:Fu,useDeferredValue:function(e){return Nt().memoizedState=e},useTransition:function(){var e=hd(!1),t=e[0];return e=o2.bind(null,e[1]),Nt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ce,i=Nt();if(ae){if(n===void 0)throw Error(O(407));n=n()}else{if(n=t(),we===null)throw Error(O(349));tr&30||lg(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,pd(ug.bind(null,r,o,e),[e]),r.flags|=2048,so(9,cg.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Nt(),t=we.identifierPrefix;if(ae){var n=Ut,r=Bt;n=(r&~(1<<32-xt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=io++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=i2++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},c2={readContext:ut,useCallback:yg,useContext:ut,useEffect:Ru,useImperativeHandle:vg,useInsertionEffect:pg,useLayoutEffect:mg,useMemo:xg,useReducer:ul,useRef:hg,useState:function(){return ul(oo)},useDebugValue:Fu,useDeferredValue:function(e){var t=ft();return bg(t,ve.memoizedState,e)},useTransition:function(){var e=ul(oo)[0],t=ft().memoizedState;return[e,t]},useMutableSource:sg,useSyncExternalStore:ag,useId:wg,unstable_isNewReconciler:!1},u2={readContext:ut,useCallback:yg,useContext:ut,useEffect:Ru,useImperativeHandle:vg,useInsertionEffect:pg,useLayoutEffect:mg,useMemo:xg,useReducer:fl,useRef:hg,useState:function(){return fl(oo)},useDebugValue:Fu,useDeferredValue:function(e){var t=ft();return ve===null?t.memoizedState=e:bg(t,ve.memoizedState,e)},useTransition:function(){var e=fl(oo)[0],t=ft().memoizedState;return[e,t]},useMutableSource:sg,useSyncExternalStore:ag,useId:wg,unstable_isNewReconciler:!1};function pt(e,t){if(e&&e.defaultProps){t=ue({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function uc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ue({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var wa={isMounted:function(e){return(e=e._reactInternals)?ur(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ie(),i=wn(e),o=Xt(r,i);o.payload=t,n!=null&&(o.callback=n),t=xn(e,o,i),t!==null&&(bt(t,e,i,r),ps(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ie(),i=wn(e),o=Xt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=xn(e,o,i),t!==null&&(bt(t,e,i,r),ps(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ie(),r=wn(e),i=Xt(n,r);i.tag=2,t!=null&&(i.callback=t),t=xn(e,i,r),t!==null&&(bt(t,e,r,n),ps(t,e,r))}};function md(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Ji(n,r)||!Ji(i,o):!0}function Cg(e,t,n){var r=!1,i=Cn,o=t.contextType;return typeof o=="object"&&o!==null?o=ut(o):(i=Ve(t)?Zn:Ae.current,r=t.contextTypes,o=(r=r!=null)?Wr(e,i):Cn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=wa,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function gd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&wa.enqueueReplaceState(t,t.state,null)}function fc(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},ju(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=ut(o):(o=Ve(t)?Zn:Ae.current,i.context=Wr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(uc(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&wa.enqueueReplaceState(i,i.state,null),Bs(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Vr(e,t){try{var n="",r=t;do n+=R1(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function dl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function dc(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var f2=typeof WeakMap=="function"?WeakMap:Map;function Pg(e,t,n){n=Xt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ks||(Ks=!0,_c=r),dc(e,t)},n}function Eg(e,t,n){n=Xt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){dc(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){dc(e,t),typeof r!="function"&&(bn===null?bn=new Set([this]):bn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function vd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new f2;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=C2.bind(null,e,t,n),t.then(e,e))}function yd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function xd(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Xt(-1,1),t.tag=2,xn(n,t,1))),n.lanes|=1),e)}var d2=en.ReactCurrentOwner,Be=!1;function Le(e,t,n,r){t.child=e===null?ng(t,null,n,r):Br(t,e.child,n,r)}function bd(e,t,n,r,i){n=n.render;var o=t.ref;return Lr(t,i),r=Iu(e,t,n,r,o,i),n=Du(),e!==null&&!Be?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,qt(e,t,i)):(ae&&n&&Su(t),t.flags|=1,Le(e,t,r,i),t.child)}function wd(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Xu(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Mg(e,t,o,r,i)):(e=bs(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ji,n(s,r)&&e.ref===t.ref)return qt(e,t,i)}return t.flags|=1,e=_n(o,r),e.ref=t.ref,e.return=t,t.child=e}function Mg(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Ji(o,r)&&e.ref===t.ref)if(Be=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Be=!0);else return t.lanes=e.lanes,qt(e,t,i)}return hc(e,t,n,r,i)}function Ng(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},te(Er,Ke),Ke|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,te(Er,Ke),Ke|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,te(Er,Ke),Ke|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,te(Er,Ke),Ke|=r;return Le(e,t,i,n),t.child}function Og(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function hc(e,t,n,r,i){var o=Ve(n)?Zn:Ae.current;return o=Wr(t,o),Lr(t,i),n=Iu(e,t,n,r,o,i),r=Du(),e!==null&&!Be?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,qt(e,t,i)):(ae&&r&&Su(t),t.flags|=1,Le(e,t,n,i),t.child)}function _d(e,t,n,r,i){if(Ve(n)){var o=!0;Rs(t)}else o=!1;if(Lr(t,i),t.stateNode===null)vs(e,t),Cg(t,n,r),fc(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=ut(c):(c=Ve(n)?Zn:Ae.current,c=Wr(t,c));var u=n.getDerivedStateFromProps,f=typeof u=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==c)&&gd(t,s,r,c),sn=!1;var d=t.memoizedState;s.state=d,Bs(t,r,s,i),l=t.memoizedState,a!==r||d!==l||Ue.current||sn?(typeof u=="function"&&(uc(t,n,u,r),l=t.memoizedState),(a=sn||md(t,n,a,r,d,l,c))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=c,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,ig(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:pt(t.type,a),s.props=c,f=t.pendingProps,d=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=ut(l):(l=Ve(n)?Zn:Ae.current,l=Wr(t,l));var h=n.getDerivedStateFromProps;(u=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==f||d!==l)&&gd(t,s,r,l),sn=!1,d=t.memoizedState,s.state=d,Bs(t,r,s,i);var g=t.memoizedState;a!==f||d!==g||Ue.current||sn?(typeof h=="function"&&(uc(t,n,h,r),g=t.memoizedState),(c=sn||md(t,n,c,r,d,g,l)||!1)?(u||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,g,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,g,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),s.props=r,s.state=g,s.context=l,r=c):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),r=!1)}return pc(e,t,n,r,o,i)}function pc(e,t,n,r,i,o){Og(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&ad(t,n,!1),qt(e,t,o);r=t.stateNode,d2.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Br(t,e.child,null,o),t.child=Br(t,null,a,o)):Le(e,t,a,o),t.memoizedState=r.state,i&&ad(t,n,!0),t.child}function jg(e){var t=e.stateNode;t.pendingContext?sd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&sd(e,t.context,!1),Tu(e,t.containerInfo)}function kd(e,t,n,r,i){return Hr(),Pu(i),t.flags|=256,Le(e,t,n,r),t.child}var mc={dehydrated:null,treeContext:null,retryLane:0};function gc(e){return{baseLanes:e,cachePool:null,transitions:null}}function Tg(e,t,n){var r=t.pendingProps,i=le.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),te(le,i&1),e===null)return lc(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Sa(s,r,0,null),e=Gn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=gc(n),t.memoizedState=mc,e):$u(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return h2(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=_n(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=_n(a,o):(o=Gn(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?gc(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=mc,r}return o=e.child,e=o.sibling,r=_n(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function $u(e,t){return t=Sa({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ho(e,t,n,r){return r!==null&&Pu(r),Br(t,e.child,null,n),e=$u(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function h2(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=dl(Error(O(422))),Ho(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Sa({mode:"visible",children:r.children},i,0,null),o=Gn(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Br(t,e.child,null,s),t.child.memoizedState=gc(s),t.memoizedState=mc,o);if(!(t.mode&1))return Ho(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(O(419)),r=dl(o,r,void 0),Ho(e,t,s,r)}if(a=(s&e.childLanes)!==0,Be||a){if(r=we,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Qt(e,i),bt(r,e,i,-1))}return Yu(),r=dl(Error(O(421))),Ho(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=P2.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Qe=yn(i.nextSibling),Je=t,ae=!0,vt=null,e!==null&&(st[at++]=Bt,st[at++]=Ut,st[at++]=er,Bt=e.id,Ut=e.overflow,er=t),t=$u(t,r.children),t.flags|=4096,t)}function Sd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),cc(e.return,t,n)}function hl(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Ag(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Le(e,t,r.children,n),r=le.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Sd(e,n,t);else if(e.tag===19)Sd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(te(le,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Us(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),hl(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Us(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}hl(t,!0,n,null,o);break;case"together":hl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function vs(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function qt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),nr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(O(153));if(t.child!==null){for(e=t.child,n=_n(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=_n(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function p2(e,t,n){switch(t.tag){case 3:jg(t),Hr();break;case 5:og(t);break;case 1:Ve(t.type)&&Rs(t);break;case 4:Tu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;te(Ws,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(te(le,le.current&1),t.flags|=128,null):n&t.child.childLanes?Tg(e,t,n):(te(le,le.current&1),e=qt(e,t,n),e!==null?e.sibling:null);te(le,le.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Ag(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),te(le,le.current),r)break;return null;case 22:case 23:return t.lanes=0,Ng(e,t,n)}return qt(e,t,n)}var zg,vc,Lg,Ig;zg=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};vc=function(){};Lg=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Vn(zt.current);var o=null;switch(n){case"input":i=Fl(e,i),r=Fl(e,r),o=[];break;case"select":i=ue({},i,{value:void 0}),r=ue({},r,{value:void 0}),o=[];break;case"textarea":i=Hl(e,i),r=Hl(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Is)}Ul(n,r);var s;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Vi.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Vi.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ne("scroll",e),o||a===l||(o=[])):(o=o||[]).push(c,l))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};Ig=function(e,t,n,r){n!==r&&(t.flags|=4)};function fi(e,t){if(!ae)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function m2(e,t,n){var r=t.pendingProps;switch(Cu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Oe(t),null;case 1:return Ve(t.type)&&Ds(),Oe(t),null;case 3:return r=t.stateNode,Ur(),ie(Ue),ie(Ae),zu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&($o(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,vt!==null&&(Cc(vt),vt=null))),vc(e,t),Oe(t),null;case 5:Au(t);var i=Vn(ro.current);if(n=t.type,e!==null&&t.stateNode!=null)Lg(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(O(166));return Oe(t),null}if(e=Vn(zt.current),$o(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[jt]=t,r[to]=o,e=(t.mode&1)!==0,n){case"dialog":ne("cancel",r),ne("close",r);break;case"iframe":case"object":case"embed":ne("load",r);break;case"video":case"audio":for(i=0;i<wi.length;i++)ne(wi[i],r);break;case"source":ne("error",r);break;case"img":case"image":case"link":ne("error",r),ne("load",r);break;case"details":ne("toggle",r);break;case"input":Af(r,o),ne("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ne("invalid",r);break;case"textarea":Lf(r,o),ne("invalid",r)}Ul(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Fo(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Fo(r.textContent,a,e),i=["children",""+a]):Vi.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&ne("scroll",r)}switch(n){case"input":jo(r),zf(r,o,!0);break;case"textarea":jo(r),If(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Is)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=um(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[jt]=t,e[to]=r,zg(e,t,!1,!1),t.stateNode=e;e:{switch(s=Vl(n,r),n){case"dialog":ne("cancel",e),ne("close",e),i=r;break;case"iframe":case"object":case"embed":ne("load",e),i=r;break;case"video":case"audio":for(i=0;i<wi.length;i++)ne(wi[i],e);i=r;break;case"source":ne("error",e),i=r;break;case"img":case"image":case"link":ne("error",e),ne("load",e),i=r;break;case"details":ne("toggle",e),i=r;break;case"input":Af(e,r),i=Fl(e,r),ne("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ue({},r,{value:void 0}),ne("invalid",e);break;case"textarea":Lf(e,r),i=Hl(e,r),ne("invalid",e);break;default:i=r}Ul(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?hm(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&fm(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Yi(e,l):typeof l=="number"&&Yi(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Vi.hasOwnProperty(o)?l!=null&&o==="onScroll"&&ne("scroll",e):l!=null&&uu(e,o,l,s))}switch(n){case"input":jo(e),zf(e,r,!1);break;case"textarea":jo(e),If(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Sn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?jr(e,!!r.multiple,o,!1):r.defaultValue!=null&&jr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Is)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Oe(t),null;case 6:if(e&&t.stateNode!=null)Ig(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(O(166));if(n=Vn(ro.current),Vn(zt.current),$o(t)){if(r=t.stateNode,n=t.memoizedProps,r[jt]=t,(o=r.nodeValue!==n)&&(e=Je,e!==null))switch(e.tag){case 3:Fo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Fo(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[jt]=t,t.stateNode=r}return Oe(t),null;case 13:if(ie(le),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ae&&Qe!==null&&t.mode&1&&!(t.flags&128))eg(),Hr(),t.flags|=98560,o=!1;else if(o=$o(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(O(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(O(317));o[jt]=t}else Hr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Oe(t),o=!1}else vt!==null&&(Cc(vt),vt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||le.current&1?ye===0&&(ye=3):Yu())),t.updateQueue!==null&&(t.flags|=4),Oe(t),null);case 4:return Ur(),vc(e,t),e===null&&Zi(t.stateNode.containerInfo),Oe(t),null;case 10:return Nu(t.type._context),Oe(t),null;case 17:return Ve(t.type)&&Ds(),Oe(t),null;case 19:if(ie(le),o=t.memoizedState,o===null)return Oe(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)fi(o,!1);else{if(ye!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Us(e),s!==null){for(t.flags|=128,fi(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return te(le,le.current&1|2),t.child}e=e.sibling}o.tail!==null&&pe()>Yr&&(t.flags|=128,r=!0,fi(o,!1),t.lanes=4194304)}else{if(!r)if(e=Us(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),fi(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!ae)return Oe(t),null}else 2*pe()-o.renderingStartTime>Yr&&n!==1073741824&&(t.flags|=128,r=!0,fi(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=pe(),t.sibling=null,n=le.current,te(le,r?n&1|2:n&1),t):(Oe(t),null);case 22:case 23:return Vu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ke&1073741824&&(Oe(t),t.subtreeFlags&6&&(t.flags|=8192)):Oe(t),null;case 24:return null;case 25:return null}throw Error(O(156,t.tag))}function g2(e,t){switch(Cu(t),t.tag){case 1:return Ve(t.type)&&Ds(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ur(),ie(Ue),ie(Ae),zu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Au(t),null;case 13:if(ie(le),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(O(340));Hr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ie(le),null;case 4:return Ur(),null;case 10:return Nu(t.type._context),null;case 22:case 23:return Vu(),null;case 24:return null;default:return null}}var Bo=!1,Te=!1,v2=typeof WeakSet=="function"?WeakSet:Set,z=null;function Pr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){fe(e,t,r)}else n.current=null}function yc(e,t,n){try{n()}catch(r){fe(e,t,r)}}var Cd=!1;function y2(e,t){if(tc=As,e=Wm(),ku(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,c=0,u=0,f=e,d=null;t:for(;;){for(var h;f!==n||i!==0&&f.nodeType!==3||(a=s+i),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(h=f.firstChild)!==null;)d=f,f=h;for(;;){if(f===e)break t;if(d===n&&++c===i&&(a=s),d===o&&++u===r&&(l=s),(h=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=h}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(nc={focusedElem:e,selectionRange:n},As=!1,z=t;z!==null;)if(t=z,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,z=e;else for(;z!==null;){t=z;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var p=g.memoizedProps,b=g.memoizedState,y=t.stateNode,v=y.getSnapshotBeforeUpdate(t.elementType===t.type?p:pt(t.type,p),b);y.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(O(163))}}catch(_){fe(t,t.return,_)}if(e=t.sibling,e!==null){e.return=t.return,z=e;break}z=t.return}return g=Cd,Cd=!1,g}function Ai(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&yc(t,n,o)}i=i.next}while(i!==r)}}function _a(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function xc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Dg(e){var t=e.alternate;t!==null&&(e.alternate=null,Dg(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[jt],delete t[to],delete t[oc],delete t[e2],delete t[t2])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Rg(e){return e.tag===5||e.tag===3||e.tag===4}function Pd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Rg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function bc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Is));else if(r!==4&&(e=e.child,e!==null))for(bc(e,t,n),e=e.sibling;e!==null;)bc(e,t,n),e=e.sibling}function wc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(wc(e,t,n),e=e.sibling;e!==null;)wc(e,t,n),e=e.sibling}var Se=null,gt=!1;function nn(e,t,n){for(n=n.child;n!==null;)Fg(e,t,n),n=n.sibling}function Fg(e,t,n){if(At&&typeof At.onCommitFiberUnmount=="function")try{At.onCommitFiberUnmount(pa,n)}catch{}switch(n.tag){case 5:Te||Pr(n,t);case 6:var r=Se,i=gt;Se=null,nn(e,t,n),Se=r,gt=i,Se!==null&&(gt?(e=Se,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Se.removeChild(n.stateNode));break;case 18:Se!==null&&(gt?(e=Se,n=n.stateNode,e.nodeType===8?sl(e.parentNode,n):e.nodeType===1&&sl(e,n),Qi(e)):sl(Se,n.stateNode));break;case 4:r=Se,i=gt,Se=n.stateNode.containerInfo,gt=!0,nn(e,t,n),Se=r,gt=i;break;case 0:case 11:case 14:case 15:if(!Te&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&yc(n,t,s),i=i.next}while(i!==r)}nn(e,t,n);break;case 1:if(!Te&&(Pr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){fe(n,t,a)}nn(e,t,n);break;case 21:nn(e,t,n);break;case 22:n.mode&1?(Te=(r=Te)||n.memoizedState!==null,nn(e,t,n),Te=r):nn(e,t,n);break;default:nn(e,t,n)}}function Ed(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new v2),t.forEach(function(r){var i=E2.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ht(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:Se=a.stateNode,gt=!1;break e;case 3:Se=a.stateNode.containerInfo,gt=!0;break e;case 4:Se=a.stateNode.containerInfo,gt=!0;break e}a=a.return}if(Se===null)throw Error(O(160));Fg(o,s,i),Se=null,gt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){fe(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)$g(t,e),t=t.sibling}function $g(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ht(t,e),Pt(e),r&4){try{Ai(3,e,e.return),_a(3,e)}catch(p){fe(e,e.return,p)}try{Ai(5,e,e.return)}catch(p){fe(e,e.return,p)}}break;case 1:ht(t,e),Pt(e),r&512&&n!==null&&Pr(n,n.return);break;case 5:if(ht(t,e),Pt(e),r&512&&n!==null&&Pr(n,n.return),e.flags&32){var i=e.stateNode;try{Yi(i,"")}catch(p){fe(e,e.return,p)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&lm(i,o),Vl(a,s);var c=Vl(a,o);for(s=0;s<l.length;s+=2){var u=l[s],f=l[s+1];u==="style"?hm(i,f):u==="dangerouslySetInnerHTML"?fm(i,f):u==="children"?Yi(i,f):uu(i,u,f,c)}switch(a){case"input":$l(i,o);break;case"textarea":cm(i,o);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var h=o.value;h!=null?jr(i,!!o.multiple,h,!1):d!==!!o.multiple&&(o.defaultValue!=null?jr(i,!!o.multiple,o.defaultValue,!0):jr(i,!!o.multiple,o.multiple?[]:"",!1))}i[to]=o}catch(p){fe(e,e.return,p)}}break;case 6:if(ht(t,e),Pt(e),r&4){if(e.stateNode===null)throw Error(O(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(p){fe(e,e.return,p)}}break;case 3:if(ht(t,e),Pt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Qi(t.containerInfo)}catch(p){fe(e,e.return,p)}break;case 4:ht(t,e),Pt(e);break;case 13:ht(t,e),Pt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Bu=pe())),r&4&&Ed(e);break;case 22:if(u=n!==null&&n.memoizedState!==null,e.mode&1?(Te=(c=Te)||u,ht(t,e),Te=c):ht(t,e),Pt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!u&&e.mode&1)for(z=e,u=e.child;u!==null;){for(f=z=u;z!==null;){switch(d=z,h=d.child,d.tag){case 0:case 11:case 14:case 15:Ai(4,d,d.return);break;case 1:Pr(d,d.return);var g=d.stateNode;if(typeof g.componentWillUnmount=="function"){r=d,n=d.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(p){fe(r,n,p)}}break;case 5:Pr(d,d.return);break;case 22:if(d.memoizedState!==null){Nd(f);continue}}h!==null?(h.return=d,z=h):Nd(f)}u=u.sibling}e:for(u=null,f=e;;){if(f.tag===5){if(u===null){u=f;try{i=f.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=dm("display",s))}catch(p){fe(e,e.return,p)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(p){fe(e,e.return,p)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:ht(t,e),Pt(e),r&4&&Ed(e);break;case 21:break;default:ht(t,e),Pt(e)}}function Pt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Rg(n)){var r=n;break e}n=n.return}throw Error(O(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Yi(i,""),r.flags&=-33);var o=Pd(e);wc(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Pd(e);bc(e,a,s);break;default:throw Error(O(161))}}catch(l){fe(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function x2(e,t,n){z=e,Wg(e)}function Wg(e,t,n){for(var r=(e.mode&1)!==0;z!==null;){var i=z,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Bo;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Te;a=Bo;var c=Te;if(Bo=s,(Te=l)&&!c)for(z=i;z!==null;)s=z,l=s.child,s.tag===22&&s.memoizedState!==null?Od(i):l!==null?(l.return=s,z=l):Od(i);for(;o!==null;)z=o,Wg(o),o=o.sibling;z=i,Bo=a,Te=c}Md(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,z=o):Md(e)}}function Md(e){for(;z!==null;){var t=z;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Te||_a(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Te)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:pt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&dd(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}dd(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&Qi(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(O(163))}Te||t.flags&512&&xc(t)}catch(d){fe(t,t.return,d)}}if(t===e){z=null;break}if(n=t.sibling,n!==null){n.return=t.return,z=n;break}z=t.return}}function Nd(e){for(;z!==null;){var t=z;if(t===e){z=null;break}var n=t.sibling;if(n!==null){n.return=t.return,z=n;break}z=t.return}}function Od(e){for(;z!==null;){var t=z;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{_a(4,t)}catch(l){fe(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){fe(t,i,l)}}var o=t.return;try{xc(t)}catch(l){fe(t,o,l)}break;case 5:var s=t.return;try{xc(t)}catch(l){fe(t,s,l)}}}catch(l){fe(t,t.return,l)}if(t===e){z=null;break}var a=t.sibling;if(a!==null){a.return=t.return,z=a;break}z=t.return}}var b2=Math.ceil,Xs=en.ReactCurrentDispatcher,Wu=en.ReactCurrentOwner,ct=en.ReactCurrentBatchConfig,Q=0,we=null,ge=null,Pe=0,Ke=0,Er=Tn(0),ye=0,ao=null,nr=0,ka=0,Hu=0,zi=null,We=null,Bu=0,Yr=1/0,$t=null,Ks=!1,_c=null,bn=null,Uo=!1,un=null,Gs=0,Li=0,kc=null,ys=-1,xs=0;function Ie(){return Q&6?pe():ys!==-1?ys:ys=pe()}function wn(e){return e.mode&1?Q&2&&Pe!==0?Pe&-Pe:r2.transition!==null?(xs===0&&(xs=Cm()),xs):(e=Z,e!==0||(e=window.event,e=e===void 0?16:Tm(e.type)),e):1}function bt(e,t,n,r){if(50<Li)throw Li=0,kc=null,Error(O(185));yo(e,n,r),(!(Q&2)||e!==we)&&(e===we&&(!(Q&2)&&(ka|=n),ye===4&&ln(e,Pe)),Ye(e,r),n===1&&Q===0&&!(t.mode&1)&&(Yr=pe()+500,xa&&An()))}function Ye(e,t){var n=e.callbackNode;ry(e,t);var r=Ts(e,e===we?Pe:0);if(r===0)n!==null&&Ff(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ff(n),t===1)e.tag===0?n2(jd.bind(null,e)):qm(jd.bind(null,e)),Jy(function(){!(Q&6)&&An()}),n=null;else{switch(Pm(r)){case 1:n=mu;break;case 4:n=km;break;case 16:n=js;break;case 536870912:n=Sm;break;default:n=js}n=Gg(n,Hg.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Hg(e,t){if(ys=-1,xs=0,Q&6)throw Error(O(327));var n=e.callbackNode;if(Ir()&&e.callbackNode!==n)return null;var r=Ts(e,e===we?Pe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Qs(e,r);else{t=r;var i=Q;Q|=2;var o=Ug();(we!==e||Pe!==t)&&($t=null,Yr=pe()+500,Kn(e,t));do try{k2();break}catch(a){Bg(e,a)}while(!0);Mu(),Xs.current=o,Q=i,ge!==null?t=0:(we=null,Pe=0,t=ye)}if(t!==0){if(t===2&&(i=Ql(e),i!==0&&(r=i,t=Sc(e,i))),t===1)throw n=ao,Kn(e,0),ln(e,r),Ye(e,pe()),n;if(t===6)ln(e,r);else{if(i=e.current.alternate,!(r&30)&&!w2(i)&&(t=Qs(e,r),t===2&&(o=Ql(e),o!==0&&(r=o,t=Sc(e,o))),t===1))throw n=ao,Kn(e,0),ln(e,r),Ye(e,pe()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(O(345));case 2:Fn(e,We,$t);break;case 3:if(ln(e,r),(r&130023424)===r&&(t=Bu+500-pe(),10<t)){if(Ts(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ie(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ic(Fn.bind(null,e,We,$t),t);break}Fn(e,We,$t);break;case 4:if(ln(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-xt(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=pe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*b2(r/1960))-r,10<r){e.timeoutHandle=ic(Fn.bind(null,e,We,$t),r);break}Fn(e,We,$t);break;case 5:Fn(e,We,$t);break;default:throw Error(O(329))}}}return Ye(e,pe()),e.callbackNode===n?Hg.bind(null,e):null}function Sc(e,t){var n=zi;return e.current.memoizedState.isDehydrated&&(Kn(e,t).flags|=256),e=Qs(e,t),e!==2&&(t=We,We=n,t!==null&&Cc(t)),e}function Cc(e){We===null?We=e:We.push.apply(We,e)}function w2(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!_t(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ln(e,t){for(t&=~Hu,t&=~ka,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-xt(t),r=1<<n;e[n]=-1,t&=~r}}function jd(e){if(Q&6)throw Error(O(327));Ir();var t=Ts(e,0);if(!(t&1))return Ye(e,pe()),null;var n=Qs(e,t);if(e.tag!==0&&n===2){var r=Ql(e);r!==0&&(t=r,n=Sc(e,r))}if(n===1)throw n=ao,Kn(e,0),ln(e,t),Ye(e,pe()),n;if(n===6)throw Error(O(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Fn(e,We,$t),Ye(e,pe()),null}function Uu(e,t){var n=Q;Q|=1;try{return e(t)}finally{Q=n,Q===0&&(Yr=pe()+500,xa&&An())}}function rr(e){un!==null&&un.tag===0&&!(Q&6)&&Ir();var t=Q;Q|=1;var n=ct.transition,r=Z;try{if(ct.transition=null,Z=1,e)return e()}finally{Z=r,ct.transition=n,Q=t,!(Q&6)&&An()}}function Vu(){Ke=Er.current,ie(Er)}function Kn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,qy(n)),ge!==null)for(n=ge.return;n!==null;){var r=n;switch(Cu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ds();break;case 3:Ur(),ie(Ue),ie(Ae),zu();break;case 5:Au(r);break;case 4:Ur();break;case 13:ie(le);break;case 19:ie(le);break;case 10:Nu(r.type._context);break;case 22:case 23:Vu()}n=n.return}if(we=e,ge=e=_n(e.current,null),Pe=Ke=t,ye=0,ao=null,Hu=ka=nr=0,We=zi=null,Un!==null){for(t=0;t<Un.length;t++)if(n=Un[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Un=null}return e}function Bg(e,t){do{var n=ge;try{if(Mu(),ms.current=Ys,Vs){for(var r=ce.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Vs=!1}if(tr=0,be=ve=ce=null,Ti=!1,io=0,Wu.current=null,n===null||n.return===null){ye=1,ao=t,ge=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=Pe,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,f=u.tag;if(!(u.mode&1)&&(f===0||f===11||f===15)){var d=u.alternate;d?(u.updateQueue=d.updateQueue,u.memoizedState=d.memoizedState,u.lanes=d.lanes):(u.updateQueue=null,u.memoizedState=null)}var h=yd(s);if(h!==null){h.flags&=-257,xd(h,s,a,o,t),h.mode&1&&vd(o,c,t),t=h,l=c;var g=t.updateQueue;if(g===null){var p=new Set;p.add(l),t.updateQueue=p}else g.add(l);break e}else{if(!(t&1)){vd(o,c,t),Yu();break e}l=Error(O(426))}}else if(ae&&a.mode&1){var b=yd(s);if(b!==null){!(b.flags&65536)&&(b.flags|=256),xd(b,s,a,o,t),Pu(Vr(l,a));break e}}o=l=Vr(l,a),ye!==4&&(ye=2),zi===null?zi=[o]:zi.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var y=Pg(o,l,t);fd(o,y);break e;case 1:a=l;var v=o.type,x=o.stateNode;if(!(o.flags&128)&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(bn===null||!bn.has(x)))){o.flags|=65536,t&=-t,o.lanes|=t;var _=Eg(o,a,t);fd(o,_);break e}}o=o.return}while(o!==null)}Yg(n)}catch(w){t=w,ge===n&&n!==null&&(ge=n=n.return);continue}break}while(!0)}function Ug(){var e=Xs.current;return Xs.current=Ys,e===null?Ys:e}function Yu(){(ye===0||ye===3||ye===2)&&(ye=4),we===null||!(nr&268435455)&&!(ka&268435455)||ln(we,Pe)}function Qs(e,t){var n=Q;Q|=2;var r=Ug();(we!==e||Pe!==t)&&($t=null,Kn(e,t));do try{_2();break}catch(i){Bg(e,i)}while(!0);if(Mu(),Q=n,Xs.current=r,ge!==null)throw Error(O(261));return we=null,Pe=0,ye}function _2(){for(;ge!==null;)Vg(ge)}function k2(){for(;ge!==null&&!K1();)Vg(ge)}function Vg(e){var t=Kg(e.alternate,e,Ke);e.memoizedProps=e.pendingProps,t===null?Yg(e):ge=t,Wu.current=null}function Yg(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=g2(n,t),n!==null){n.flags&=32767,ge=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ye=6,ge=null;return}}else if(n=m2(n,t,Ke),n!==null){ge=n;return}if(t=t.sibling,t!==null){ge=t;return}ge=t=e}while(t!==null);ye===0&&(ye=5)}function Fn(e,t,n){var r=Z,i=ct.transition;try{ct.transition=null,Z=1,S2(e,t,n,r)}finally{ct.transition=i,Z=r}return null}function S2(e,t,n,r){do Ir();while(un!==null);if(Q&6)throw Error(O(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(O(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(iy(e,o),e===we&&(ge=we=null,Pe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Uo||(Uo=!0,Gg(js,function(){return Ir(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=ct.transition,ct.transition=null;var s=Z;Z=1;var a=Q;Q|=4,Wu.current=null,y2(e,n),$g(n,e),Uy(nc),As=!!tc,nc=tc=null,e.current=n,x2(n),G1(),Q=a,Z=s,ct.transition=o}else e.current=n;if(Uo&&(Uo=!1,un=e,Gs=i),o=e.pendingLanes,o===0&&(bn=null),J1(n.stateNode),Ye(e,pe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ks)throw Ks=!1,e=_c,_c=null,e;return Gs&1&&e.tag!==0&&Ir(),o=e.pendingLanes,o&1?e===kc?Li++:(Li=0,kc=e):Li=0,An(),null}function Ir(){if(un!==null){var e=Pm(Gs),t=ct.transition,n=Z;try{if(ct.transition=null,Z=16>e?16:e,un===null)var r=!1;else{if(e=un,un=null,Gs=0,Q&6)throw Error(O(331));var i=Q;for(Q|=4,z=e.current;z!==null;){var o=z,s=o.child;if(z.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(z=c;z!==null;){var u=z;switch(u.tag){case 0:case 11:case 15:Ai(8,u,o)}var f=u.child;if(f!==null)f.return=u,z=f;else for(;z!==null;){u=z;var d=u.sibling,h=u.return;if(Dg(u),u===c){z=null;break}if(d!==null){d.return=h,z=d;break}z=h}}}var g=o.alternate;if(g!==null){var p=g.child;if(p!==null){g.child=null;do{var b=p.sibling;p.sibling=null,p=b}while(p!==null)}}z=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,z=s;else e:for(;z!==null;){if(o=z,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Ai(9,o,o.return)}var y=o.sibling;if(y!==null){y.return=o.return,z=y;break e}z=o.return}}var v=e.current;for(z=v;z!==null;){s=z;var x=s.child;if(s.subtreeFlags&2064&&x!==null)x.return=s,z=x;else e:for(s=v;z!==null;){if(a=z,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:_a(9,a)}}catch(w){fe(a,a.return,w)}if(a===s){z=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,z=_;break e}z=a.return}}if(Q=i,An(),At&&typeof At.onPostCommitFiberRoot=="function")try{At.onPostCommitFiberRoot(pa,e)}catch{}r=!0}return r}finally{Z=n,ct.transition=t}}return!1}function Td(e,t,n){t=Vr(n,t),t=Pg(e,t,1),e=xn(e,t,1),t=Ie(),e!==null&&(yo(e,1,t),Ye(e,t))}function fe(e,t,n){if(e.tag===3)Td(e,e,n);else for(;t!==null;){if(t.tag===3){Td(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(bn===null||!bn.has(r))){e=Vr(n,e),e=Eg(t,e,1),t=xn(t,e,1),e=Ie(),t!==null&&(yo(t,1,e),Ye(t,e));break}}t=t.return}}function C2(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ie(),e.pingedLanes|=e.suspendedLanes&n,we===e&&(Pe&n)===n&&(ye===4||ye===3&&(Pe&130023424)===Pe&&500>pe()-Bu?Kn(e,0):Hu|=n),Ye(e,t)}function Xg(e,t){t===0&&(e.mode&1?(t=zo,zo<<=1,!(zo&130023424)&&(zo=4194304)):t=1);var n=Ie();e=Qt(e,t),e!==null&&(yo(e,t,n),Ye(e,n))}function P2(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Xg(e,n)}function E2(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(O(314))}r!==null&&r.delete(t),Xg(e,n)}var Kg;Kg=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ue.current)Be=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Be=!1,p2(e,t,n);Be=!!(e.flags&131072)}else Be=!1,ae&&t.flags&1048576&&Jm(t,$s,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;vs(e,t),e=t.pendingProps;var i=Wr(t,Ae.current);Lr(t,n),i=Iu(null,t,r,e,i,n);var o=Du();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ve(r)?(o=!0,Rs(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ju(t),i.updater=wa,t.stateNode=i,i._reactInternals=t,fc(t,r,e,n),t=pc(null,t,r,!0,o,n)):(t.tag=0,ae&&o&&Su(t),Le(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(vs(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=N2(r),e=pt(r,e),i){case 0:t=hc(null,t,r,e,n);break e;case 1:t=_d(null,t,r,e,n);break e;case 11:t=bd(null,t,r,e,n);break e;case 14:t=wd(null,t,r,pt(r.type,e),n);break e}throw Error(O(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:pt(r,i),hc(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:pt(r,i),_d(e,t,r,i,n);case 3:e:{if(jg(t),e===null)throw Error(O(387));r=t.pendingProps,o=t.memoizedState,i=o.element,ig(e,t),Bs(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Vr(Error(O(423)),t),t=kd(e,t,r,n,i);break e}else if(r!==i){i=Vr(Error(O(424)),t),t=kd(e,t,r,n,i);break e}else for(Qe=yn(t.stateNode.containerInfo.firstChild),Je=t,ae=!0,vt=null,n=ng(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Hr(),r===i){t=qt(e,t,n);break e}Le(e,t,r,n)}t=t.child}return t;case 5:return og(t),e===null&&lc(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,rc(r,i)?s=null:o!==null&&rc(r,o)&&(t.flags|=32),Og(e,t),Le(e,t,s,n),t.child;case 6:return e===null&&lc(t),null;case 13:return Tg(e,t,n);case 4:return Tu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Br(t,null,r,n):Le(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:pt(r,i),bd(e,t,r,i,n);case 7:return Le(e,t,t.pendingProps,n),t.child;case 8:return Le(e,t,t.pendingProps.children,n),t.child;case 12:return Le(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,te(Ws,r._currentValue),r._currentValue=s,o!==null)if(_t(o.value,s)){if(o.children===i.children&&!Ue.current){t=qt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Xt(-1,n&-n),l.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),cc(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(O(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),cc(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Le(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Lr(t,n),i=ut(i),r=r(i),t.flags|=1,Le(e,t,r,n),t.child;case 14:return r=t.type,i=pt(r,t.pendingProps),i=pt(r.type,i),wd(e,t,r,i,n);case 15:return Mg(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:pt(r,i),vs(e,t),t.tag=1,Ve(r)?(e=!0,Rs(t)):e=!1,Lr(t,n),Cg(t,r,i),fc(t,r,i,n),pc(null,t,r,!0,e,n);case 19:return Ag(e,t,n);case 22:return Ng(e,t,n)}throw Error(O(156,t.tag))};function Gg(e,t){return _m(e,t)}function M2(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function lt(e,t,n,r){return new M2(e,t,n,r)}function Xu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function N2(e){if(typeof e=="function")return Xu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===du)return 11;if(e===hu)return 14}return 2}function _n(e,t){var n=e.alternate;return n===null?(n=lt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function bs(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")Xu(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case vr:return Gn(n.children,i,o,t);case fu:s=8,i|=8;break;case Ll:return e=lt(12,n,t,i|2),e.elementType=Ll,e.lanes=o,e;case Il:return e=lt(13,n,t,i),e.elementType=Il,e.lanes=o,e;case Dl:return e=lt(19,n,t,i),e.elementType=Dl,e.lanes=o,e;case om:return Sa(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case rm:s=10;break e;case im:s=9;break e;case du:s=11;break e;case hu:s=14;break e;case on:s=16,r=null;break e}throw Error(O(130,e==null?e:typeof e,""))}return t=lt(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Gn(e,t,n,r){return e=lt(7,e,r,t),e.lanes=n,e}function Sa(e,t,n,r){return e=lt(22,e,r,t),e.elementType=om,e.lanes=n,e.stateNode={isHidden:!1},e}function pl(e,t,n){return e=lt(6,e,null,t),e.lanes=n,e}function ml(e,t,n){return t=lt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function O2(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ga(0),this.expirationTimes=Ga(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ga(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ku(e,t,n,r,i,o,s,a,l){return e=new O2(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=lt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ju(o),e}function j2(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:gr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Qg(e){if(!e)return Cn;e=e._reactInternals;e:{if(ur(e)!==e||e.tag!==1)throw Error(O(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ve(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(O(171))}if(e.tag===1){var n=e.type;if(Ve(n))return Qm(e,n,t)}return t}function qg(e,t,n,r,i,o,s,a,l){return e=Ku(n,r,!0,e,i,o,s,a,l),e.context=Qg(null),n=e.current,r=Ie(),i=wn(n),o=Xt(r,i),o.callback=t??null,xn(n,o,i),e.current.lanes=i,yo(e,i,r),Ye(e,r),e}function Ca(e,t,n,r){var i=t.current,o=Ie(),s=wn(i);return n=Qg(n),t.context===null?t.context=n:t.pendingContext=n,t=Xt(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=xn(i,t,s),e!==null&&(bt(e,i,s,o),ps(e,i,s)),s}function qs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ad(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Gu(e,t){Ad(e,t),(e=e.alternate)&&Ad(e,t)}function T2(){return null}var Jg=typeof reportError=="function"?reportError:function(e){console.error(e)};function Qu(e){this._internalRoot=e}Pa.prototype.render=Qu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(O(409));Ca(e,t,null,null)};Pa.prototype.unmount=Qu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;rr(function(){Ca(null,e,null,null)}),t[Gt]=null}};function Pa(e){this._internalRoot=e}Pa.prototype.unstable_scheduleHydration=function(e){if(e){var t=Nm();e={blockedOn:null,target:e,priority:t};for(var n=0;n<an.length&&t!==0&&t<an[n].priority;n++);an.splice(n,0,e),n===0&&jm(e)}};function qu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ea(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function zd(){}function A2(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=qs(s);o.call(c)}}var s=qg(t,r,e,0,null,!1,!1,"",zd);return e._reactRootContainer=s,e[Gt]=s.current,Zi(e.nodeType===8?e.parentNode:e),rr(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=qs(l);a.call(c)}}var l=Ku(e,0,!1,null,null,!1,!1,"",zd);return e._reactRootContainer=l,e[Gt]=l.current,Zi(e.nodeType===8?e.parentNode:e),rr(function(){Ca(t,l,n,r)}),l}function Ma(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=qs(s);a.call(l)}}Ca(t,s,e,i)}else s=A2(n,t,e,i,r);return qs(s)}Em=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=bi(t.pendingLanes);n!==0&&(gu(t,n|1),Ye(t,pe()),!(Q&6)&&(Yr=pe()+500,An()))}break;case 13:rr(function(){var r=Qt(e,1);if(r!==null){var i=Ie();bt(r,e,1,i)}}),Gu(e,1)}};vu=function(e){if(e.tag===13){var t=Qt(e,134217728);if(t!==null){var n=Ie();bt(t,e,134217728,n)}Gu(e,134217728)}};Mm=function(e){if(e.tag===13){var t=wn(e),n=Qt(e,t);if(n!==null){var r=Ie();bt(n,e,t,r)}Gu(e,t)}};Nm=function(){return Z};Om=function(e,t){var n=Z;try{return Z=e,t()}finally{Z=n}};Xl=function(e,t,n){switch(t){case"input":if($l(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ya(r);if(!i)throw Error(O(90));am(r),$l(r,i)}}}break;case"textarea":cm(e,n);break;case"select":t=n.value,t!=null&&jr(e,!!n.multiple,t,!1)}};gm=Uu;vm=rr;var z2={usingClientEntryPoint:!1,Events:[bo,wr,ya,pm,mm,Uu]},di={findFiberByHostInstance:Bn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},L2={bundleType:di.bundleType,version:di.version,rendererPackageName:di.rendererPackageName,rendererConfig:di.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:en.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=bm(e),e===null?null:e.stateNode},findFiberByHostInstance:di.findFiberByHostInstance||T2,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vo.isDisabled&&Vo.supportsFiber)try{pa=Vo.inject(L2),At=Vo}catch{}}tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=z2;tt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!qu(t))throw Error(O(200));return j2(e,t,null,n)};tt.createRoot=function(e,t){if(!qu(e))throw Error(O(299));var n=!1,r="",i=Jg;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Ku(e,1,!1,null,null,n,!1,r,i),e[Gt]=t.current,Zi(e.nodeType===8?e.parentNode:e),new Qu(t)};tt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(O(188)):(e=Object.keys(e).join(","),Error(O(268,e)));return e=bm(t),e=e===null?null:e.stateNode,e};tt.flushSync=function(e){return rr(e)};tt.hydrate=function(e,t,n){if(!Ea(t))throw Error(O(200));return Ma(null,e,t,!0,n)};tt.hydrateRoot=function(e,t,n){if(!qu(e))throw Error(O(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=Jg;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=qg(t,null,e,1,n??null,i,!1,o,s),e[Gt]=t.current,Zi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Pa(t)};tt.render=function(e,t,n){if(!Ea(t))throw Error(O(200));return Ma(null,e,t,!1,n)};tt.unmountComponentAtNode=function(e){if(!Ea(e))throw Error(O(40));return e._reactRootContainer?(rr(function(){Ma(null,null,e,!1,function(){e._reactRootContainer=null,e[Gt]=null})}),!0):!1};tt.unstable_batchedUpdates=Uu;tt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ea(n))throw Error(O(200));if(e==null||e._reactInternals===void 0)throw Error(O(38));return Ma(e,t,n,!1,r)};tt.version="18.3.1-next-f1338f8080-20240426";function Zg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Zg)}catch(e){console.error(e)}}Zg(),Zp.exports=tt;var e0=Zp.exports,t0,Ld=e0;t0=Ld.createRoot,Ld.hydrateRoot;var n0={exports:{}},Na={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I2=T,D2=Symbol.for("react.element"),R2=Symbol.for("react.fragment"),F2=Object.prototype.hasOwnProperty,$2=I2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,W2={key:!0,ref:!0,__self:!0,__source:!0};function r0(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)F2.call(t,r)&&!W2.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:D2,type:e,key:o,ref:s,props:i,_owner:$2.current}}Na.Fragment=R2;Na.jsx=r0;Na.jsxs=r0;n0.exports=Na;var m=n0.exports;const H2=()=>{const e=T.useRef(null),t=T.useRef(null),n=T.useRef([]),r=T.useRef({x:0,y:0}),[i,o]=T.useState(!1);class s{constructor(p,b,y,v,x=!1){this.x=p,this.y=b,this.targetX=y,this.targetY=v,this.originalX=y,this.originalY=v,this.vx=0,this.vy=0,this.size=Math.random()*2+1,this.opacity=Math.random()*.8+.2,this.isText=x,this.hue=Math.random()*60+120,this.life=1,this.maxLife=1,this.speed=.02,this.force=0,this.angle=Math.random()*Math.PI*2,this.drift=Math.random()*.01-.005}update(){const p=r.current.x-this.x,b=r.current.y-this.y,y=Math.sqrt(p*p+b*b);if(y<100){const v=(100-y)/100;this.force=v*.3;const x=Math.atan2(b,p);this.vx-=Math.cos(x)*this.force,this.vy-=Math.sin(x)*this.force}this.vx+=(this.originalX-this.x)*this.speed,this.vy+=(this.originalY-this.y)*this.speed,this.vx*=.98,this.vy*=.98,this.x+=this.vx,this.y+=this.vy,this.angle+=this.drift,this.y+=Math.sin(this.angle)*.2,this.life=Math.min(this.life+.01,this.maxLife)}draw(p){const b=this.opacity*this.life;this.isText?(p.save(),p.globalAlpha=b,p.beginPath(),p.arc(this.x,this.y,this.size*3,0,Math.PI*2),p.fillStyle=`hsla(${this.hue}, 100%, 50%, 0.1)`,p.fill(),p.beginPath(),p.arc(this.x,this.y,this.size*1.5,0,Math.PI*2),p.fillStyle=`hsla(${this.hue}, 100%, 60%, 0.3)`,p.fill(),p.beginPath(),p.arc(this.x,this.y,this.size,0,Math.PI*2),p.fillStyle=`hsla(${this.hue}, 100%, 70%, 1)`,p.fill(),p.restore()):(p.save(),p.globalAlpha=b*.6,p.beginPath(),p.arc(this.x,this.y,this.size,0,Math.PI*2),p.fillStyle=`hsla(${this.hue}, 80%, 50%, 1)`,p.fill(),Math.random()<.01&&(p.beginPath(),p.arc(this.x,this.y,this.size*2,0,Math.PI*2),p.fillStyle=`hsla(${this.hue}, 100%, 80%, 0.5)`,p.fill()),p.restore())}}const a=(g,p,b,y=48)=>{const v=document.createElement("canvas"),x=v.getContext("2d"),_=window.devicePixelRatio||1;v.width=400*_,v.height=100*_,x.scale(_,_),x.font=`bold ${y}px 'Arial', sans-serif`,x.fillStyle="#ffffff",x.textAlign="center",x.textBaseline="middle",x.fillText(g,200,50);const w=x.getImageData(0,0,v.width,v.height),S=[];for(let E=0;E<w.width;E+=4)for(let C=0;C<w.height;C+=4){const P=(C*w.width+E)*4;if(w.data[P+3]>128){const L=p+(E/_-200),$=b+(C/_-50);S.push(new s(L+(Math.random()-.5)*200,$+(Math.random()-.5)*200,L,$,!0))}}return S},l=(g,p,b=150)=>{const y=[];for(let v=0;v<b;v++){const x=Math.random()*g,_=Math.random()*p;y.push(new s(x,_,x,_,!1))}return y},c=()=>{const g=e.current;if(!g)return;const{width:p,height:b}=g;n.current=[];const y=a("AI",p*.3,b*.4,72),v=a("CODE",p*.7,b*.6,48),x=l(p,b);n.current=[...x,...y,...v]},u=g=>{const p=e.current;if(!p)return;const b=p.getBoundingClientRect();r.current={x:(g.clientX-b.left)*(p.width/b.width),y:(g.clientY-b.top)*(p.height/b.height)}},f=()=>{const g=e.current;if(!g)return;const p=g.getBoundingClientRect(),b=window.devicePixelRatio||1;g.width=p.width*b,g.height=p.height*b,g.getContext("2d").scale(b,b),c()},d=g=>{const p=n.current;for(let b=0;b<p.length;b++)for(let y=b+1;y<p.length;y++){const v=p[b].x-p[y].x,x=p[b].y-p[y].y,_=Math.sqrt(v*v+x*x);if(_<120&&p[b].isText&&p[y].isText){const w=(120-_)/120*.3;g.save(),g.globalAlpha=w,g.strokeStyle="#00ff88",g.lineWidth=1,g.beginPath(),g.moveTo(p[b].x,p[y].y),g.lineTo(p[y].x,p[y].y),g.stroke(),g.restore()}}},h=()=>{const g=e.current;if(!g)return;const p=g.getContext("2d"),{width:b,height:y}=g;if(p.fillStyle="rgba(10, 10, 10, 0.05)",p.fillRect(0,0,b/(window.devicePixelRatio||1),y/(window.devicePixelRatio||1)),n.current.forEach(v=>{v.update(),v.draw(p)}),d(p),r.current.x&&r.current.y){const v=p.createRadialGradient(r.current.x,r.current.y,0,r.current.x,r.current.y,100);v.addColorStop(0,"rgba(0, 255, 136, 0.1)"),v.addColorStop(1,"transparent"),p.fillStyle=v,p.fillRect(0,0,b/(window.devicePixelRatio||1),y/(window.devicePixelRatio||1))}t.current=requestAnimationFrame(h)};return T.useEffect(()=>{const g=e.current;if(!g)return;f();const p=setTimeout(()=>{o(!0),c(),h()},500);return window.addEventListener("resize",f),g.addEventListener("mousemove",u),()=>{clearTimeout(p),t.current&&cancelAnimationFrame(t.current),window.removeEventListener("resize",f),g==null||g.removeEventListener("mousemove",u)}},[]),m.jsxs("div",{className:"particle-background",children:[m.jsx("canvas",{ref:e,className:`particle-canvas ${i?"visible":""}`,style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:-1,pointerEvents:"none",background:"radial-gradient(ellipse at center, #1a1a2e 0%, #0a0a0a 100%)"}}),m.jsx("style",{jsx:!0,children:`
        .particle-background {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          overflow: hidden;
        }

        .particle-canvas {
          opacity: 0;
          transition: opacity 2s ease-in-out;
        }

        .particle-canvas.visible {
          opacity: 1;
        }

        /* 性能优化 */
        @media (max-width: 768px) {
          .particle-canvas {
            filter: blur(1px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .particle-canvas {
            display: none;
          }
        }

        /* 低端设备优化 */
        @media (max-width: 480px) {
          .particle-canvas {
            opacity: 0.7;
          }
        }
      `})]})};/*!
 * Font Awesome Free 7.0.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */function Pc(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function B2(e){if(Array.isArray(e))return e}function U2(e){if(Array.isArray(e))return Pc(e)}function V2(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Y2(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,i0(r.key),r)}}function X2(e,t,n){return t&&Y2(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function ws(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=Ju(e))||t){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(l){throw l},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o,s=!0,a=!1;return{s:function(){n=n.call(e)},n:function(){var l=n.next();return s=l.done,l},e:function(l){a=!0,o=l},f:function(){try{s||n.return==null||n.return()}finally{if(a)throw o}}}}function Y(e,t,n){return(t=i0(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function K2(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function G2(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,o,s,a=[],l=!0,c=!1;try{if(o=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=o.call(n)).done)&&(a.push(r.value),a.length!==t);l=!0);}catch(u){c=!0,i=u}finally{try{if(!l&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(c)throw i}}return a}}function Q2(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function q2(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Id(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Id(Object(n),!0).forEach(function(r){Y(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Id(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Oa(e,t){return B2(e)||G2(e,t)||Ju(e,t)||Q2()}function kt(e){return U2(e)||K2(e)||Ju(e)||q2()}function J2(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function i0(e){var t=J2(e,"string");return typeof t=="symbol"?t:t+""}function Js(e){"@babel/helpers - typeof";return Js=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Js(e)}function Ju(e,t){if(e){if(typeof e=="string")return Pc(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Pc(e,t):void 0}}var Dd=function(){},Zu={},o0={},s0=null,a0={mark:Dd,measure:Dd};try{typeof window<"u"&&(Zu=window),typeof document<"u"&&(o0=document),typeof MutationObserver<"u"&&(s0=MutationObserver),typeof performance<"u"&&(a0=performance)}catch{}var Z2=Zu.navigator||{},Rd=Z2.userAgent,Fd=Rd===void 0?"":Rd,Pn=Zu,oe=o0,$d=s0,Yo=a0;Pn.document;var tn=!!oe.documentElement&&!!oe.head&&typeof oe.addEventListener=="function"&&typeof oe.createElement=="function",l0=~Fd.indexOf("MSIE")||~Fd.indexOf("Trident/"),gl,ex=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,tx=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Slab Press|Slab|Whiteboard)?.*/i,c0={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"}},nx={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},u0=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press"],Me="classic",_o="duotone",f0="sharp",d0="sharp-duotone",h0="chisel",p0="etch",m0="jelly",g0="jelly-duo",v0="jelly-fill",y0="notdog",x0="notdog-duo",b0="slab",w0="slab-press",_0="thumbprint",k0="whiteboard",rx="Classic",ix="Duotone",ox="Sharp",sx="Sharp Duotone",ax="Chisel",lx="Etch",cx="Jelly",ux="Jelly Duo",fx="Jelly Fill",dx="Notdog",hx="Notdog Duo",px="Slab",mx="Slab Press",gx="Thumbprint",vx="Whiteboard",S0=[Me,_o,f0,d0,h0,p0,m0,g0,v0,y0,x0,b0,w0,_0,k0];gl={},Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(gl,Me,rx),_o,ix),f0,ox),d0,sx),h0,ax),p0,lx),m0,cx),g0,ux),v0,fx),y0,dx),Y(Y(Y(Y(Y(gl,x0,hx),b0,px),w0,mx),_0,gx),k0,vx);var yx={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"}},xx={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"}},bx=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),wx={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},whiteboard:{semibold:"fawsb"}},C0=["fak","fa-kit","fakd","fa-kit-duotone"],Wd={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},_x=["kit"],kx="kit",Sx="kit-duotone",Cx="Kit",Px="Kit Duotone";Y(Y({},kx,Cx),Sx,Px);var Ex={kit:{"fa-kit":"fak"}},Mx={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Nx={kit:{fak:"fa-kit"}},Hd={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},vl,Xo={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ox=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press"],jx="classic",Tx="duotone",Ax="sharp",zx="sharp-duotone",Lx="chisel",Ix="etch",Dx="jelly",Rx="jelly-duo",Fx="jelly-fill",$x="notdog",Wx="notdog-duo",Hx="slab",Bx="slab-press",Ux="thumbprint",Vx="whiteboard",Yx="Classic",Xx="Duotone",Kx="Sharp",Gx="Sharp Duotone",Qx="Chisel",qx="Etch",Jx="Jelly",Zx="Jelly Duo",eb="Jelly Fill",tb="Notdog",nb="Notdog Duo",rb="Slab",ib="Slab Press",ob="Thumbprint",sb="Whiteboard";vl={},Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(vl,jx,Yx),Tx,Xx),Ax,Kx),zx,Gx),Lx,Qx),Ix,qx),Dx,Jx),Rx,Zx),Fx,eb),$x,tb),Y(Y(Y(Y(Y(vl,Wx,nb),Hx,rb),Bx,ib),Ux,ob),Vx,sb);var ab="kit",lb="kit-duotone",cb="Kit",ub="Kit Duotone";Y(Y({},ab,cb),lb,ub);var fb={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"}},db={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"]},Ec={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"}},hb=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],P0=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fajr","fajfr","fajdr","facr"].concat(Ox,hb),pb=["solid","regular","light","thin","duotone","brands","semibold"],E0=[1,2,3,4,5,6,7,8,9,10],mb=E0.concat([11,12,13,14,15,16,17,18,19,20]),gb=["aw","fw","pull-left","pull-right"],vb=[].concat(kt(Object.keys(db)),pb,gb,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",Xo.GROUP,Xo.SWAP_OPACITY,Xo.PRIMARY,Xo.SECONDARY]).concat(E0.map(function(e){return"".concat(e,"x")})).concat(mb.map(function(e){return"w-".concat(e)})),yb={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},Jt="___FONT_AWESOME___",Mc=16,M0="fa",N0="svg-inline--fa",ir="data-fa-i2svg",Nc="data-fa-pseudo-element",xb="data-fa-pseudo-element-pending",ef="data-prefix",tf="data-icon",Bd="fontawesome-i2svg",bb="async",wb=["HTML","HEAD","STYLE","SCRIPT"],O0=["::before","::after",":before",":after"],j0=function(){try{return!0}catch{return!1}}();function ko(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[Me]}})}var T0=j({},c0);T0[Me]=j(j(j(j({},{"fa-duotone":"duotone"}),c0[Me]),Wd.kit),Wd["kit-duotone"]);var _b=ko(T0),Oc=j({},wx);Oc[Me]=j(j(j(j({},{duotone:"fad"}),Oc[Me]),Hd.kit),Hd["kit-duotone"]);var Ud=ko(Oc),jc=j({},Ec);jc[Me]=j(j({},jc[Me]),Nx.kit);var nf=ko(jc),Tc=j({},fb);Tc[Me]=j(j({},Tc[Me]),Ex.kit);ko(Tc);var kb=ex,A0="fa-layers-text",Sb=tx,Cb=j({},yx);ko(Cb);var Pb=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],yl=nx,Eb=[].concat(kt(_x),kt(vb)),Ii=Pn.FontAwesomeConfig||{};function Mb(e){var t=oe.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Nb(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(oe&&typeof oe.querySelector=="function"){var Ob=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Ob.forEach(function(e){var t=Oa(e,2),n=t[0],r=t[1],i=Nb(Mb(n));i!=null&&(Ii[r]=i)})}var z0={styleDefault:"solid",familyDefault:Me,cssPrefix:M0,replacementClass:N0,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ii.familyPrefix&&(Ii.cssPrefix=Ii.familyPrefix);var Xr=j(j({},z0),Ii);Xr.autoReplaceSvg||(Xr.observeMutations=!1);var R={};Object.keys(z0).forEach(function(e){Object.defineProperty(R,e,{enumerable:!0,set:function(n){Xr[e]=n,Di.forEach(function(r){return r(R)})},get:function(){return Xr[e]}})});Object.defineProperty(R,"familyPrefix",{enumerable:!0,set:function(t){Xr.cssPrefix=t,Di.forEach(function(n){return n(R)})},get:function(){return Xr.cssPrefix}});Pn.FontAwesomeConfig=R;var Di=[];function jb(e){return Di.push(e),function(){Di.splice(Di.indexOf(e),1)}}var hr=Mc,Tt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Tb(e){if(!(!e||!tn)){var t=oe.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=oe.head.childNodes,r=null,i=n.length-1;i>-1;i--){var o=n[i],s=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=o)}return oe.head.insertBefore(t,r),e}}var Ab="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Vd(){for(var e=12,t="";e-- >0;)t+=Ab[Math.random()*62|0];return t}function ni(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function rf(e){return e.classList?ni(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function L0(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function zb(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(L0(e[n]),'" ')},"").trim()}function ja(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function of(e){return e.size!==Tt.size||e.x!==Tt.x||e.y!==Tt.y||e.rotate!==Tt.rotate||e.flipX||e.flipY}function Lb(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),s="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),a="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(o," ").concat(s," ").concat(a)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:c}}function Ib(e){var t=e.transform,n=e.width,r=n===void 0?Mc:n,i=e.height,o=i===void 0?Mc:i,s="";return l0?s+="translate(".concat(t.x/hr-r/2,"em, ").concat(t.y/hr-o/2,"em) "):s+="translate(calc(-50% + ".concat(t.x/hr,"em), calc(-50% + ").concat(t.y/hr,"em)) "),s+="scale(".concat(t.size/hr*(t.flipX?-1:1),", ").concat(t.size/hr*(t.flipY?-1:1),") "),s+="rotate(".concat(t.rotate,"deg) "),s}var Db=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 7 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 7 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 7 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 7 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 7 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 7 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-slab-regular: normal 400 1em/1 "Font Awesome 7 Slab";
  --fa-font-slab-press-regular: normal 400 1em/1 "Font Awesome 7 Slab Press";
  --fa-font-whiteboard-semibold: normal 600 1em/1 "Font Awesome 7 Whiteboard";
  --fa-font-thumbprint-light: normal 300 1em/1 "Font Awesome 7 Thumbprint";
  --fa-font-notdog-solid: normal 900 1em/1 "Font Awesome 7 Notdog";
  --fa-font-notdog-duo-solid: normal 900 1em/1 "Font Awesome 7 Notdog Duo";
  --fa-font-etch-solid: normal 900 1em/1 "Font Awesome 7 Etch";
  --fa-font-jelly-regular: normal 400 1em/1 "Font Awesome 7 Jelly";
  --fa-font-jelly-fill-regular: normal 400 1em/1 "Font Awesome 7 Jelly Fill";
  --fa-font-jelly-duo-regular: normal 400 1em/1 "Font Awesome 7 Jelly Duo";
  --fa-font-chisel-regular: normal 400 1em/1 "Font Awesome 7 Chisel";
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function I0(){var e=M0,t=N0,n=R.cssPrefix,r=R.replacementClass,i=Db;if(n!==e||r!==t){var o=new RegExp("\\.".concat(e,"\\-"),"g"),s=new RegExp("\\--".concat(e,"\\-"),"g"),a=new RegExp("\\.".concat(t),"g");i=i.replace(o,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var Yd=!1;function xl(){R.autoAddCss&&!Yd&&(Tb(I0()),Yd=!0)}var Rb={mixout:function(){return{dom:{css:I0,insertCss:xl}}},hooks:function(){return{beforeDOMElementCreation:function(){xl()},beforeI2svg:function(){xl()}}}},Zt=Pn||{};Zt[Jt]||(Zt[Jt]={});Zt[Jt].styles||(Zt[Jt].styles={});Zt[Jt].hooks||(Zt[Jt].hooks={});Zt[Jt].shims||(Zt[Jt].shims=[]);var yt=Zt[Jt],D0=[],R0=function(){oe.removeEventListener("DOMContentLoaded",R0),Zs=1,D0.map(function(t){return t()})},Zs=!1;tn&&(Zs=(oe.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(oe.readyState),Zs||oe.addEventListener("DOMContentLoaded",R0));function Fb(e){tn&&(Zs?setTimeout(e,0):D0.push(e))}function So(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,o=i===void 0?[]:i;return typeof e=="string"?L0(e):"<".concat(t," ").concat(zb(r),">").concat(o.map(So).join(""),"</").concat(t,">")}function Xd(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var bl=function(t,n,r,i){var o=Object.keys(t),s=o.length,a=n,l,c,u;for(r===void 0?(l=1,u=t[o[0]]):(l=0,u=r);l<s;l++)c=o[l],u=a(u,t[c],c,t);return u};function F0(e){return kt(e).length!==1?null:e.codePointAt(0).toString(16)}function Kd(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function Ac(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,o=Kd(t);typeof yt.hooks.addPack=="function"&&!i?yt.hooks.addPack(e,Kd(t)):yt.styles[e]=j(j({},yt.styles[e]||{}),o),e==="fas"&&Ac("fa",t)}var lo=yt.styles,$b=yt.shims,$0=Object.keys(nf),Wb=$0.reduce(function(e,t){return e[t]=Object.keys(nf[t]),e},{}),sf=null,W0={},H0={},B0={},U0={},V0={};function Hb(e){return~Eb.indexOf(e)}function Bb(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!Hb(i)?i:null}var Y0=function(){var t=function(o){return bl(lo,function(s,a,l){return s[l]=bl(a,o,{}),s},{})};W0=t(function(i,o,s){if(o[3]&&(i[o[3]]=s),o[2]){var a=o[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=s})}return i}),H0=t(function(i,o,s){if(i[s]=s,o[2]){var a=o[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=s})}return i}),V0=t(function(i,o,s){var a=o[2];return i[s]=s,a.forEach(function(l){i[l]=s}),i});var n="far"in lo||R.autoFetchSvg,r=bl($b,function(i,o){var s=o[0],a=o[1],l=o[2];return a==="far"&&!n&&(a="fas"),typeof s=="string"&&(i.names[s]={prefix:a,iconName:l}),typeof s=="number"&&(i.unicodes[s.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});B0=r.names,U0=r.unicodes,sf=Ta(R.styleDefault,{family:R.familyDefault})};jb(function(e){sf=Ta(e.styleDefault,{family:R.familyDefault})});Y0();function af(e,t){return(W0[e]||{})[t]}function Ub(e,t){return(H0[e]||{})[t]}function Yn(e,t){return(V0[e]||{})[t]}function X0(e){return B0[e]||{prefix:null,iconName:null}}function Vb(e){var t=U0[e],n=af("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function En(){return sf}var K0=function(){return{prefix:null,iconName:null,rest:[]}};function Yb(e){var t=Me,n=$0.reduce(function(r,i){return r[i]="".concat(R.cssPrefix,"-").concat(i),r},{});return S0.forEach(function(r){(e.includes(n[r])||e.some(function(i){return Wb[r].includes(i)}))&&(t=r)}),t}function Ta(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?Me:n,i=_b[r][e];if(r===_o&&!e)return"fad";var o=Ud[r][e]||Ud[r][i],s=e in yt.styles?e:null,a=o||s||null;return a}function Xb(e){var t=[],n=null;return e.forEach(function(r){var i=Bb(R.cssPrefix,r);i?n=i:r&&t.push(r)}),{iconName:n,rest:t}}function Gd(e){return e.sort().filter(function(t,n,r){return r.indexOf(t)===n})}var Qd=P0.concat(C0);function Aa(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.skipLookups,r=n===void 0?!1:n,i=null,o=Gd(e.filter(function(h){return Qd.includes(h)})),s=Gd(e.filter(function(h){return!Qd.includes(h)})),a=o.filter(function(h){return i=h,!u0.includes(h)}),l=Oa(a,1),c=l[0],u=c===void 0?null:c,f=Yb(o),d=j(j({},Xb(s)),{},{prefix:Ta(u,{family:f})});return j(j(j({},d),qb({values:e,family:f,styles:lo,config:R,canonical:d,givenPrefix:i})),Kb(r,i,d))}function Kb(e,t,n){var r=n.prefix,i=n.iconName;if(e||!r||!i)return{prefix:r,iconName:i};var o=t==="fa"?X0(i):{},s=Yn(r,i);return i=o.iconName||s||i,r=o.prefix||r,r==="far"&&!lo.far&&lo.fas&&!R.autoFetchSvg&&(r="fas"),{prefix:r,iconName:i}}var Gb=S0.filter(function(e){return e!==Me||e!==_o}),Qb=Object.keys(Ec).filter(function(e){return e!==Me}).map(function(e){return Object.keys(Ec[e])}).flat();function qb(e){var t=e.values,n=e.family,r=e.canonical,i=e.givenPrefix,o=i===void 0?"":i,s=e.styles,a=s===void 0?{}:s,l=e.config,c=l===void 0?{}:l,u=n===_o,f=t.includes("fa-duotone")||t.includes("fad"),d=c.familyDefault==="duotone",h=r.prefix==="fad"||r.prefix==="fa-duotone";if(!u&&(f||d||h)&&(r.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(r.prefix="fab"),!r.prefix&&Gb.includes(n)){var g=Object.keys(a).find(function(b){return Qb.includes(b)});if(g||c.autoFetchSvg){var p=bx.get(n).defaultShortPrefixId;r.prefix=p,r.iconName=Yn(r.prefix,r.iconName)||r.iconName}}return(r.prefix==="fa"||o==="fa")&&(r.prefix=En()||"fas"),r}var Jb=function(){function e(){V2(this,e),this.definitions={}}return X2(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];var s=i.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(a){n.definitions[a]=j(j({},n.definitions[a]||{}),s[a]),Ac(a,s[a]);var l=nf[Me][a];l&&Ac(l,s[a]),Y0()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(o){var s=i[o],a=s.prefix,l=s.iconName,c=s.icon,u=c[2];n[a]||(n[a]={}),u.length>0&&u.forEach(function(f){typeof f=="string"&&(n[a][f]=c)}),n[a][l]=c}),n}}])}(),qd=[],Mr={},Dr={},Zb=Object.keys(Dr);function e5(e,t){var n=t.mixoutsTo;return qd=e,Mr={},Object.keys(Dr).forEach(function(r){Zb.indexOf(r)===-1&&delete Dr[r]}),qd.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(s){typeof i[s]=="function"&&(n[s]=i[s]),Js(i[s])==="object"&&Object.keys(i[s]).forEach(function(a){n[s]||(n[s]={}),n[s][a]=i[s][a]})}),r.hooks){var o=r.hooks();Object.keys(o).forEach(function(s){Mr[s]||(Mr[s]=[]),Mr[s].push(o[s])})}r.provides&&r.provides(Dr)}),n}function zc(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=Mr[e]||[];return o.forEach(function(s){t=s.apply(null,[t].concat(r))}),t}function or(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Mr[e]||[];i.forEach(function(o){o.apply(null,n)})}function Mn(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Dr[e]?Dr[e].apply(null,t):void 0}function Lc(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||En();if(t)return t=Yn(n,t)||t,Xd(G0.definitions,n,t)||Xd(yt.styles,n,t)}var G0=new Jb,t5=function(){R.autoReplaceSvg=!1,R.observeMutations=!1,or("noAuto")},n5={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return tn?(or("beforeI2svg",t),Mn("pseudoElements2svg",t),Mn("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;R.autoReplaceSvg===!1&&(R.autoReplaceSvg=!0),R.observeMutations=!0,Fb(function(){i5({autoReplaceSvgRoot:n}),or("watch",t)})}},r5={icon:function(t){if(t===null)return null;if(Js(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Yn(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Ta(t[0]);return{prefix:r,iconName:Yn(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(R.cssPrefix,"-"))>-1||t.match(kb))){var i=Aa(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||En(),iconName:Yn(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var o=En();return{prefix:o,iconName:Yn(o,t)||t}}}},rt={noAuto:t5,config:R,dom:n5,parse:r5,library:G0,findIconDefinition:Lc,toHtml:So},i5=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?oe:n;(Object.keys(yt.styles).length>0||R.autoFetchSvg)&&tn&&R.autoReplaceSvg&&rt.dom.i2svg({node:r})};function za(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return So(r)})}}),Object.defineProperty(e,"node",{get:function(){if(tn){var r=oe.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function o5(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,o=e.styles,s=e.transform;if(of(s)&&n.found&&!r.found){var a=n.width,l=n.height,c={x:a/l/2,y:.5};i.style=ja(j(j({},o),{},{"transform-origin":"".concat(c.x+s.x/16,"em ").concat(c.y+s.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function s5(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,o=e.symbol,s=o===!0?"".concat(t,"-").concat(R.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:j(j({},i),{},{id:s}),children:r}]}]}function a5(e){var t=["aria-label","aria-labelledby","title","role"];return t.some(function(n){return n in e})}function lf(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,o=e.iconName,s=e.transform,a=e.symbol,l=e.maskId,c=e.extra,u=e.watchable,f=u===void 0?!1:u,d=r.found?r:n,h=d.width,g=d.height,p=[R.replacementClass,o?"".concat(R.cssPrefix,"-").concat(o):""].filter(function(w){return c.classes.indexOf(w)===-1}).filter(function(w){return w!==""||!!w}).concat(c.classes).join(" "),b={children:[],attributes:j(j({},c.attributes),{},{"data-prefix":i,"data-icon":o,class:p,role:c.attributes.role||"img",viewBox:"0 0 ".concat(h," ").concat(g)})};!a5(c.attributes)&&!c.attributes["aria-hidden"]&&(b.attributes["aria-hidden"]="true"),f&&(b.attributes[ir]="");var y=j(j({},b),{},{prefix:i,iconName:o,main:n,mask:r,maskId:l,transform:s,symbol:a,styles:j({},c.styles)}),v=r.found&&n.found?Mn("generateAbstractMask",y)||{children:[],attributes:{}}:Mn("generateAbstractIcon",y)||{children:[],attributes:{}},x=v.children,_=v.attributes;return y.children=x,y.attributes=_,a?s5(y):o5(y)}function Jd(e){var t=e.content,n=e.width,r=e.height,i=e.transform,o=e.extra,s=e.watchable,a=s===void 0?!1:s,l=j(j({},o.attributes),{},{class:o.classes.join(" ")});a&&(l[ir]="");var c=j({},o.styles);of(i)&&(c.transform=Ib({transform:i,width:n,height:r}),c["-webkit-transform"]=c.transform);var u=ja(c);u.length>0&&(l.style=u);var f=[];return f.push({tag:"span",attributes:l,children:[t]}),f}function l5(e){var t=e.content,n=e.extra,r=j(j({},n.attributes),{},{class:n.classes.join(" ")}),i=ja(n.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[t]}),o}var wl=yt.styles;function Ic(e){var t=e[0],n=e[1],r=e.slice(4),i=Oa(r,1),o=i[0],s=null;return Array.isArray(o)?s={tag:"g",attributes:{class:"".concat(R.cssPrefix,"-").concat(yl.GROUP)},children:[{tag:"path",attributes:{class:"".concat(R.cssPrefix,"-").concat(yl.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(R.cssPrefix,"-").concat(yl.PRIMARY),fill:"currentColor",d:o[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:t,height:n,icon:s}}var c5={found:!1,width:512,height:512};function u5(e,t){!j0&&!R.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Dc(e,t){var n=t;return t==="fa"&&R.styleDefault!==null&&(t=En()),new Promise(function(r,i){if(n==="fa"){var o=X0(e)||{};e=o.iconName||e,t=o.prefix||t}if(e&&t&&wl[t]&&wl[t][e]){var s=wl[t][e];return r(Ic(s))}u5(e,t),r(j(j({},c5),{},{icon:R.showMissingIcons&&e?Mn("missingIconAbstract")||{}:{}}))})}var Zd=function(){},Rc=R.measurePerformance&&Yo&&Yo.mark&&Yo.measure?Yo:{mark:Zd,measure:Zd},_i='FA "7.0.1"',f5=function(t){return Rc.mark("".concat(_i," ").concat(t," begins")),function(){return Q0(t)}},Q0=function(t){Rc.mark("".concat(_i," ").concat(t," ends")),Rc.measure("".concat(_i," ").concat(t),"".concat(_i," ").concat(t," begins"),"".concat(_i," ").concat(t," ends"))},cf={begin:f5,end:Q0},_s=function(){};function eh(e){var t=e.getAttribute?e.getAttribute(ir):null;return typeof t=="string"}function d5(e){var t=e.getAttribute?e.getAttribute(ef):null,n=e.getAttribute?e.getAttribute(tf):null;return t&&n}function h5(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(R.replacementClass)}function p5(){if(R.autoReplaceSvg===!0)return ks.replace;var e=ks[R.autoReplaceSvg];return e||ks.replace}function m5(e){return oe.createElementNS("http://www.w3.org/2000/svg",e)}function g5(e){return oe.createElement(e)}function q0(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?m5:g5:n;if(typeof e=="string")return oe.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(s){i.setAttribute(s,e.attributes[s])});var o=e.children||[];return o.forEach(function(s){i.appendChild(q0(s,{ceFn:r}))}),i}function v5(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var ks={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(q0(i),n)}),n.getAttribute(ir)===null&&R.keepOriginalSource){var r=oe.createComment(v5(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~rf(n).indexOf(R.replacementClass))return ks.replace(t);var i=new RegExp("".concat(R.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var o=r[0].attributes.class.split(" ").reduce(function(a,l){return l===R.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",o.toNode.join(" "))}var s=r.map(function(a){return So(a)}).join(`
`);n.setAttribute(ir,""),n.innerHTML=s}};function th(e){e()}function J0(e,t){var n=typeof t=="function"?t:_s;if(e.length===0)n();else{var r=th;R.mutateApproach===bb&&(r=Pn.requestAnimationFrame||th),r(function(){var i=p5(),o=cf.begin("mutate");e.map(i),o(),n()})}}var uf=!1;function Z0(){uf=!0}function Fc(){uf=!1}var ea=null;function nh(e){if($d&&R.observeMutations){var t=e.treeCallback,n=t===void 0?_s:t,r=e.nodeCallback,i=r===void 0?_s:r,o=e.pseudoElementsCallback,s=o===void 0?_s:o,a=e.observeMutationsRoot,l=a===void 0?oe:a;ea=new $d(function(c){if(!uf){var u=En();ni(c).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!eh(f.addedNodes[0])&&(R.searchPseudoElements&&s(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&R.searchPseudoElements&&s([f.target],!0),f.type==="attributes"&&eh(f.target)&&~Pb.indexOf(f.attributeName))if(f.attributeName==="class"&&d5(f.target)){var d=Aa(rf(f.target)),h=d.prefix,g=d.iconName;f.target.setAttribute(ef,h||u),g&&f.target.setAttribute(tf,g)}else h5(f.target)&&i(f.target)})}}),tn&&ea.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function y5(){ea&&ea.disconnect()}function x5(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var o=i.split(":"),s=o[0],a=o.slice(1);return s&&a.length>0&&(r[s]=a.join(":").trim()),r},{})),n}function b5(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=Aa(rf(e));return i.prefix||(i.prefix=En()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=Ub(i.prefix,e.innerText)||af(i.prefix,F0(e.innerText))),!i.iconName&&R.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function w5(e){var t=ni(e.attributes).reduce(function(n,r){return n.name!=="class"&&n.name!=="style"&&(n[r.name]=r.value),n},{});return t}function _5(){return{iconName:null,prefix:null,transform:Tt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function rh(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=b5(e),r=n.iconName,i=n.prefix,o=n.rest,s=w5(e),a=zc("parseNodeAttributes",{},e),l=t.styleParser?x5(e):[];return j({iconName:r,prefix:i,transform:Tt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:l,attributes:s}},a)}var k5=yt.styles;function ev(e){var t=R.autoReplaceSvg==="nest"?rh(e,{styleParser:!1}):rh(e);return~t.extra.classes.indexOf(A0)?Mn("generateLayersText",e,t):Mn("generateSvgReplacementMutation",e,t)}function S5(){return[].concat(kt(C0),kt(P0))}function ih(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!tn)return Promise.resolve();var n=oe.documentElement.classList,r=function(f){return n.add("".concat(Bd,"-").concat(f))},i=function(f){return n.remove("".concat(Bd,"-").concat(f))},o=R.autoFetchSvg?S5():u0.concat(Object.keys(k5));o.includes("fa")||o.push("fa");var s=[".".concat(A0,":not([").concat(ir,"])")].concat(o.map(function(u){return".".concat(u,":not([").concat(ir,"])")})).join(", ");if(s.length===0)return Promise.resolve();var a=[];try{a=ni(e.querySelectorAll(s))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=cf.begin("onTree"),c=a.reduce(function(u,f){try{var d=ev(f);d&&u.push(d)}catch(h){j0||h.name==="MissingIcon"&&console.error(h)}return u},[]);return new Promise(function(u,f){Promise.all(c).then(function(d){J0(d,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),l(),u()})}).catch(function(d){l(),f(d)})})}function C5(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ev(e).then(function(n){n&&J0([n],t)})}function P5(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Lc(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Lc(i||{})),e(r,j(j({},n),{},{mask:i}))}}var E5=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Tt:r,o=n.symbol,s=o===void 0?!1:o,a=n.mask,l=a===void 0?null:a,c=n.maskId,u=c===void 0?null:c,f=n.classes,d=f===void 0?[]:f,h=n.attributes,g=h===void 0?{}:h,p=n.styles,b=p===void 0?{}:p;if(t){var y=t.prefix,v=t.iconName,x=t.icon;return za(j({type:"icon"},t),function(){return or("beforeDOMElementCreation",{iconDefinition:t,params:n}),lf({icons:{main:Ic(x),mask:l?Ic(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:y,iconName:v,transform:j(j({},Tt),i),symbol:s,maskId:u,extra:{attributes:g,styles:b,classes:d}})})}},M5={mixout:function(){return{icon:P5(E5)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=ih,n.nodeCallback=C5,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?oe:r,o=n.callback,s=o===void 0?function(){}:o;return ih(i,s)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,o=r.prefix,s=r.transform,a=r.symbol,l=r.mask,c=r.maskId,u=r.extra;return new Promise(function(f,d){Promise.all([Dc(i,o),l.iconName?Dc(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(h){var g=Oa(h,2),p=g[0],b=g[1];f([n,lf({icons:{main:p,mask:b},prefix:o,iconName:i,transform:s,symbol:a,maskId:c,extra:u,watchable:!0})])}).catch(d)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,o=n.main,s=n.transform,a=n.styles,l=ja(a);l.length>0&&(i.style=l);var c;return of(s)&&(c=Mn("generateAbstractTransformGrouping",{main:o,transform:s,containerWidth:o.width,iconWidth:o.width})),r.push(c||o.icon),{children:r,attributes:i}}}},N5={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,o=i===void 0?[]:i;return za({type:"layer"},function(){or("beforeDOMElementCreation",{assembler:n,params:r});var s=[];return n(function(a){Array.isArray(a)?a.map(function(l){s=s.concat(l.abstract)}):s=s.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(R.cssPrefix,"-layers")].concat(kt(o)).join(" ")},children:s}]})}}}},O5={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};r.title;var i=r.classes,o=i===void 0?[]:i,s=r.attributes,a=s===void 0?{}:s,l=r.styles,c=l===void 0?{}:l;return za({type:"counter",content:n},function(){return or("beforeDOMElementCreation",{content:n,params:r}),l5({content:n.toString(),extra:{attributes:a,styles:c,classes:["".concat(R.cssPrefix,"-layers-counter")].concat(kt(o))}})})}}}},j5={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,o=i===void 0?Tt:i,s=r.classes,a=s===void 0?[]:s,l=r.attributes,c=l===void 0?{}:l,u=r.styles,f=u===void 0?{}:u;return za({type:"text",content:n},function(){return or("beforeDOMElementCreation",{content:n,params:r}),Jd({content:n,transform:j(j({},Tt),o),extra:{attributes:c,styles:f,classes:["".concat(R.cssPrefix,"-layers-text")].concat(kt(a))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.transform,o=r.extra,s=null,a=null;if(l0){var l=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/l,a=c.height/l}return Promise.resolve([n,Jd({content:n.innerHTML,width:s,height:a,transform:i,extra:o,watchable:!0})])}}},tv=new RegExp('"',"ug"),oh=[1105920,1112319],sh=j(j(j(j({},{FontAwesome:{normal:"fas",400:"fas"}}),xx),yb),Mx),$c=Object.keys(sh).reduce(function(e,t){return e[t.toLowerCase()]=sh[t],e},{}),T5=Object.keys($c).reduce(function(e,t){var n=$c[t];return e[t]=n[900]||kt(Object.entries(n))[0][1],e},{});function A5(e){var t=e.replace(tv,"");return F0(kt(t)[0]||"")}function z5(e){var t=e.getPropertyValue("font-feature-settings").includes("ss01"),n=e.getPropertyValue("content"),r=n.replace(tv,""),i=r.codePointAt(0),o=i>=oh[0]&&i<=oh[1],s=r.length===2?r[0]===r[1]:!1;return o||s||t}function L5(e,t){var n=e.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(t),i=isNaN(r)?"normal":r;return($c[n]||{})[i]||T5[n]}function ah(e,t){var n="".concat(xb).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var o=ni(e.children),s=o.filter(function(S){return S.getAttribute(Nc)===t})[0],a=Pn.getComputedStyle(e,t),l=a.getPropertyValue("font-family"),c=l.match(Sb),u=a.getPropertyValue("font-weight"),f=a.getPropertyValue("content");if(s&&!c)return e.removeChild(s),r();if(c&&f!=="none"&&f!==""){var d=a.getPropertyValue("content"),h=L5(l,u),g=A5(d),p=c[0].startsWith("FontAwesome"),b=z5(a),y=af(h,g),v=y;if(p){var x=Vb(g);x.iconName&&x.prefix&&(y=x.iconName,h=x.prefix)}if(y&&!b&&(!s||s.getAttribute(ef)!==h||s.getAttribute(tf)!==v)){e.setAttribute(n,v),s&&e.removeChild(s);var _=_5(),w=_.extra;w.attributes[Nc]=t,Dc(y,h).then(function(S){var E=lf(j(j({},_),{},{icons:{main:S,mask:K0()},prefix:h,iconName:v,extra:w,watchable:!0})),C=oe.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(C,e.firstChild):e.appendChild(C),C.outerHTML=E.map(function(P){return So(P)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function I5(e){return Promise.all([ah(e,"::before"),ah(e,"::after")])}function D5(e){return e.parentNode!==document.head&&!~wb.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Nc)&&(!e.parentNode||e.parentNode.tagName!=="svg")}var R5=function(t){return!!t&&O0.some(function(n){return t.includes(n)})},F5=function(t){if(!t)return[];var n=new Set,r=t.split(/,(?![^()]*\))/).map(function(l){return l.trim()});r=r.flatMap(function(l){return l.includes("(")?l:l.split(",").map(function(c){return c.trim()})});var i=ws(r),o;try{for(i.s();!(o=i.n()).done;){var s=o.value;if(R5(s)){var a=O0.reduce(function(l,c){return l.replace(c,"")},s);a!==""&&a!=="*"&&n.add(a)}}}catch(l){i.e(l)}finally{i.f()}return n};function lh(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(tn){var n;if(t)n=e;else if(R.searchPseudoElementsFullScan)n=e.querySelectorAll("*");else{var r=new Set,i=ws(document.styleSheets),o;try{for(i.s();!(o=i.n()).done;){var s=o.value;try{var a=ws(s.cssRules),l;try{for(a.s();!(l=a.n()).done;){var c=l.value,u=F5(c.selectorText),f=ws(u),d;try{for(f.s();!(d=f.n()).done;){var h=d.value;r.add(h)}}catch(p){f.e(p)}finally{f.f()}}}catch(p){a.e(p)}finally{a.f()}}catch(p){R.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(s.href," (").concat(p.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(p){i.e(p)}finally{i.f()}if(!r.size)return;var g=Array.from(r).join(", ");try{n=e.querySelectorAll(g)}catch{}}return new Promise(function(p,b){var y=ni(n).filter(D5).map(I5),v=cf.begin("searchPseudoElements");Z0(),Promise.all(y).then(function(){v(),Fc(),p()}).catch(function(){v(),Fc(),b()})})}}var $5={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=lh,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?oe:r;R.searchPseudoElements&&lh(i)}}},ch=!1,W5={mixout:function(){return{dom:{unwatch:function(){Z0(),ch=!0}}}},hooks:function(){return{bootstrap:function(){nh(zc("mutationObserverCallbacks",{}))},noAuto:function(){y5()},watch:function(n){var r=n.observeMutationsRoot;ch?Fc():nh(zc("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},uh=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var o=i.toLowerCase().split("-"),s=o[0],a=o.slice(1).join("-");if(s&&a==="h")return r.flipX=!0,r;if(s&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(s){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},H5={mixout:function(){return{parse:{transform:function(n){return uh(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=uh(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,o=n.containerWidth,s=n.iconWidth,a={transform:"translate(".concat(o/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),c="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),u="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(l," ").concat(c," ").concat(u)},d={transform:"translate(".concat(s/2*-1," -256)")},h={outer:a,inner:f,path:d};return{tag:"g",attributes:j({},h.outer),children:[{tag:"g",attributes:j({},h.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:j(j({},r.icon.attributes),h.path)}]}]}}}},_l={x:0,y:0,width:"100%",height:"100%"};function fh(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function B5(e){return e.tag==="g"?e.children:[e]}var U5={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),o=i?Aa(i.split(" ").map(function(s){return s.trim()})):K0();return o.prefix||(o.prefix=En()),n.mask=o,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,o=n.main,s=n.mask,a=n.maskId,l=n.transform,c=o.width,u=o.icon,f=s.width,d=s.icon,h=Lb({transform:l,containerWidth:f,iconWidth:c}),g={tag:"rect",attributes:j(j({},_l),{},{fill:"white"})},p=u.children?{children:u.children.map(fh)}:{},b={tag:"g",attributes:j({},h.inner),children:[fh(j({tag:u.tag,attributes:j(j({},u.attributes),h.path)},p))]},y={tag:"g",attributes:j({},h.outer),children:[b]},v="mask-".concat(a||Vd()),x="clip-".concat(a||Vd()),_={tag:"mask",attributes:j(j({},_l),{},{id:v,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[g,y]},w={tag:"defs",children:[{tag:"clipPath",attributes:{id:x},children:B5(d)},_]};return r.push(w,{tag:"rect",attributes:j({fill:"currentColor","clip-path":"url(#".concat(x,")"),mask:"url(#".concat(v,")")},_l)}),{children:r,attributes:i}}}},V5={provides:function(t){var n=!1;Pn.matchMedia&&(n=Pn.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:j(j({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=j(j({},o),{},{attributeName:"opacity"}),a={tag:"circle",attributes:j(j({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:j(j({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:j(j({},s),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:j(j({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:j(j({},s),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:j(j({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:j(j({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Y5={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),o=i===null?!1:i===""?!0:i;return n.symbol=o,n}}}},X5=[Rb,M5,N5,O5,j5,$5,W5,H5,U5,V5,Y5];e5(X5,{mixoutsTo:rt});rt.noAuto;var K5=rt.config;rt.library;rt.dom;var nv=rt.parse;rt.findIconDefinition;rt.toHtml;var G5=rt.icon;rt.layer;rt.text;rt.counter;function Q5(e){return e=e-0,e===e}function rv(e){return Q5(e)?e:(e=e.replaceAll(/[_-]+(.)?/g,(t,n)=>n?n.toUpperCase():""),e.charAt(0).toLowerCase()+e.slice(1))}function q5(e){return e.charAt(0).toUpperCase()+e.slice(1)}var pr=new Map,J5=1e3;function Z5(e){if(pr.has(e))return pr.get(e);const t={};let n=0;const r=e.length;for(;n<r;){const i=e.indexOf(";",n),o=i===-1?r:i,s=e.slice(n,o).trim();if(s){const a=s.indexOf(":");if(a>0){const l=s.slice(0,a).trim(),c=s.slice(a+1).trim();if(l&&c){const u=rv(l);t[u.startsWith("webkit")?q5(u):u]=c}}}n=o+1}if(pr.size===J5){const i=pr.keys().next().value;i&&pr.delete(i)}return pr.set(e,t),t}function iv(e,t,n={}){if(typeof t=="string")return t;const r=(t.children||[]).map(c=>iv(e,c)),i=t.attributes||{},o={};for(const[c,u]of Object.entries(i))switch(!0){case c==="class":{o.className=u,delete i.class;break}case c==="style":{o.style=Z5(String(u));break}case c.startsWith("aria-"):case c.startsWith("data-"):{o[c.toLowerCase()]=u;break}default:o[rv(c)]=u}const{style:s,"aria-label":a,...l}=n;return s&&(o.style=o.style?{...o.style,...s}:s),a&&(o["aria-label"]=a,o["aria-hidden"]="false"),e(t.tag,{...l,...o},...r)}var dh=(e,t)=>{const n=T.useId();return e||(t?n:void 0)},ew=class{constructor(e="react-fontawesome"){this.enabled=!1;let t=!1;try{t=typeof process<"u"&&!1}catch{}this.scope=e,this.enabled=t}log(...e){this.enabled&&console.log(`[${this.scope}]`,...e)}warn(...e){this.enabled&&console.warn(`[${this.scope}]`,...e)}error(...e){this.enabled&&console.error(`[${this.scope}]`,...e)}},tw="searchPseudoElementsFullScan"in K5?"7.0.0":"6.0.0",nw=Number.parseInt(tw)>=7,Lt={beat:"fa-beat",fade:"fa-fade",beatFade:"fa-beat-fade",bounce:"fa-bounce",shake:"fa-shake",spin:"fa-spin",spinPulse:"fa-spin-pulse",spinReverse:"fa-spin-reverse",pulse:"fa-pulse"},rw={left:"fa-pull-left",right:"fa-pull-right"},iw={90:"fa-rotate-90",180:"fa-rotate-180",270:"fa-rotate-270"},ow={"2xs":"fa-2xs",xs:"fa-xs",sm:"fa-sm",lg:"fa-lg",xl:"fa-xl","2xl":"fa-2xl","1x":"fa-1x","2x":"fa-2x","3x":"fa-3x","4x":"fa-4x","5x":"fa-5x","6x":"fa-6x","7x":"fa-7x","8x":"fa-8x","9x":"fa-9x","10x":"fa-10x"},It={border:"fa-border",fixedWidth:"fa-fw",flip:"fa-flip",flipHorizontal:"fa-flip-horizontal",flipVertical:"fa-flip-vertical",inverse:"fa-inverse",rotateBy:"fa-rotate-by",swapOpacity:"fa-swap-opacity",widthAuto:"fa-width-auto"};function sw(e){const{beat:t,fade:n,beatFade:r,bounce:i,shake:o,spin:s,spinPulse:a,spinReverse:l,pulse:c,fixedWidth:u,inverse:f,border:d,flip:h,size:g,rotation:p,pull:b,swapOpacity:y,rotateBy:v,widthAuto:x,className:_}=e,w=[];return _&&w.push(..._.split(" ")),t&&w.push(Lt.beat),n&&w.push(Lt.fade),r&&w.push(Lt.beatFade),i&&w.push(Lt.bounce),o&&w.push(Lt.shake),s&&w.push(Lt.spin),l&&w.push(Lt.spinReverse),a&&w.push(Lt.spinPulse),c&&w.push(Lt.pulse),u&&w.push(It.fixedWidth),f&&w.push(It.inverse),d&&w.push(It.border),h===!0&&w.push(It.flip),(h==="horizontal"||h==="both")&&w.push(It.flipHorizontal),(h==="vertical"||h==="both")&&w.push(It.flipVertical),g!=null&&w.push(ow[g]),p!=null&&p!==0&&w.push(iw[p]),b!=null&&w.push(rw[b]),y&&w.push(It.swapOpacity),nw&&(v&&w.push(It.rotateBy),x&&w.push(It.widthAuto)),w}var aw=e=>typeof e=="object"&&"icon"in e&&!!e.icon;function hh(e){if(e)return aw(e)?e:nv.icon(e)}function lw(e){return Object.keys(e)}var ph=new ew("FontAwesomeIcon"),ov={border:!1,className:"",mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1},cw=new Set(Object.keys(ov)),q=lr.forwardRef((e,t)=>{const n={...ov,...e},{icon:r,mask:i,symbol:o,title:s,titleId:a,maskId:l,transform:c}=n,u=dh(l,!!i),f=dh(a,!!s),d=hh(r);if(!d)return ph.error("Icon lookup is undefined",r),null;const h=sw(n),g=typeof c=="string"?nv.transform(c):c,p=hh(i),b=G5(d,{...h.length>0&&{classes:h},...g&&{transform:g},...p&&{mask:p},symbol:o,title:s,titleId:f,maskId:u});if(!b)return ph.error("Could not find icon",d),null;const{abstract:y}=b,v={ref:t};for(const x of lw(n))cw.has(x)||(v[x]=n[x]);return uw(y[0],v)});q.displayName="FontAwesomeIcon";var uw=iv.bind(null,lr.createElement);/*!
 * Font Awesome Free 7.0.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */var ff={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64c-26.5 0-48 21.5-48 48 0 15.1 7.1 29.3 19.2 38.4l208 156c17.1 12.8 40.5 12.8 57.6 0l208-156c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48L48 64zM0 196L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-188-198.4 148.8c-34.1 25.6-81.1 25.6-115.2 0L0 196z"]},fw={prefix:"fas",iconName:"message",icon:[512,512,["comment-alt"],"f27a","M0 352L0 128C0 75 43 32 96 32l320 0c53 0 96 43 96 96l0 224c0 53-43 96-96 96l-120 0c-5.2 0-10.2 1.7-14.4 4.8L166.4 539.2c-4.2 3.1-9.2 4.8-14.4 4.8-13.3 0-24-10.7-24-24l0-72-32 0c-53 0-96-43-96-96z"]},La={prefix:"fas",iconName:"trophy",icon:[512,512,[127942],"f091","M144.3 0l224 0c26.5 0 48.1 21.8 47.1 48.2-.2 5.3-.4 10.6-.7 15.8l49.6 0c26.1 0 49.1 21.6 47.1 49.8-7.5 103.7-60.5 160.7-118 190.5-15.8 8.2-31.9 14.3-47.2 18.8-20.2 28.6-41.2 43.7-57.9 51.8l0 73.1 64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-192 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0 0-73.1c-16-7.7-35.9-22-55.3-48.3-18.4-4.8-38.4-12.1-57.9-23.1-54.1-30.3-102.9-87.4-109.9-189.9-1.9-28.1 21-49.7 47.1-49.7l49.6 0c-.3-5.2-.5-10.4-.7-15.8-1-26.5 20.6-48.2 47.1-48.2zM101.5 112l-52.4 0c6.2 84.7 45.1 127.1 85.2 149.6-14.4-37.3-26.3-86-32.8-149.6zM380 256.8c40.5-23.8 77.1-66.1 83.3-144.8L411 112c-6.2 60.9-17.4 108.2-31 144.8z"]},dw={prefix:"fas",iconName:"up-right-from-square",icon:[512,512,["external-link-alt"],"f35d","M290.4 19.8C295.4 7.8 307.1 0 320 0L480 0c17.7 0 32 14.3 32 32l0 160c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9L400 157.3 246.6 310.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L354.7 112 297.4 54.6c-9.2-9.2-11.9-22.9-6.9-34.9zM0 176c0-44.2 35.8-80 80-80l80 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-80 0c-8.8 0-16 7.2-16 16l0 256c0 8.8 7.2 16 16 16l256 0c8.8 0 16-7.2 16-16l0-80c0-17.7 14.3-32 32-32s32 14.3 32 32l0 80c0 44.2-35.8 80-80 80L80 512c-44.2 0-80-35.8-80-80L0 176z"]},hw=dw,co={prefix:"fas",iconName:"rocket",icon:[512,512,[],"f135","M128 320L24.5 320c-24.9 0-40.2-27.1-27.4-48.5L50 183.3C58.7 168.8 74.3 160 91.2 160l95 0c76.1-128.9 189.6-135.4 265.5-124.3 12.8 1.9 22.8 11.9 24.6 24.6 11.1 75.9 4.6 189.4-124.3 265.5l0 95c0 16.9-8.8 32.5-23.3 41.2l-88.2 52.9c-21.3 12.8-48.5-2.6-48.5-27.4L192 384c0-35.3-28.7-64-64-64l-.1 0zM400 160a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"]},pw={prefix:"fas",iconName:"paper-plane",icon:[576,512,[61913],"f1d8","M536.4-26.3c9.8-3.5 20.6-1 28 6.3s9.8 18.2 6.3 28l-178 496.9c-5 13.9-18.1 23.1-32.8 23.1-14.2 0-27-8.6-32.3-21.7l-64.2-158c-4.5-11-2.5-23.6 5.2-32.6l94.5-112.4c5.1-6.1 4.7-15-.9-20.6s-14.6-6-20.6-.9L229.2 276.1c-9.1 7.6-21.6 9.6-32.6 5.2L38.1 216.8c-13.1-5.3-21.7-18.1-21.7-32.3 0-14.7 9.2-27.8 23.1-32.8l496.9-178z"]},mw={prefix:"fas",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,9829,10084,61578],"f004","M241 87.1l15 20.7 15-20.7C296 52.5 336.2 32 378.9 32 452.4 32 512 91.6 512 165.1l0 2.6c0 112.2-139.9 242.5-212.9 298.2-12.4 9.4-27.6 14.1-43.1 14.1s-30.8-4.6-43.1-14.1C139.9 410.2 0 279.9 0 167.7l0-2.6C0 91.6 59.6 32 133.1 32 175.8 32 216 52.5 241 87.1z"]},gw={prefix:"fas",iconName:"users",icon:[640,512,[],"f0c0","M320 16a104 104 0 1 1 0 208 104 104 0 1 1 0-208zM96 88a72 72 0 1 1 0 144 72 72 0 1 1 0-144zM0 416c0-70.7 57.3-128 128-128 12.8 0 25.2 1.9 36.9 5.4-32.9 36.8-52.9 85.4-52.9 138.6l0 16c0 11.4 2.4 22.2 6.7 32L32 480c-17.7 0-32-14.3-32-32l0-32zm521.3 64c4.3-9.8 6.7-20.6 6.7-32l0-16c0-53.2-20-101.8-52.9-138.6 11.7-3.5 24.1-5.4 36.9-5.4 70.7 0 128 57.3 128 128l0 32c0 17.7-14.3 32-32 32l-86.7 0zM472 160a72 72 0 1 1 144 0 72 72 0 1 1 -144 0zM160 432c0-88.4 71.6-160 160-160s160 71.6 160 160l0 16c0 17.7-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32l0-16z"]},vw={prefix:"fas",iconName:"database",icon:[448,512,[],"f1c0","M448 205.8c-14.8 9.8-31.8 17.7-49.5 24-47 16.8-108.7 26.2-174.5 26.2S96.4 246.5 49.5 229.8c-17.6-6.3-34.7-14.2-49.5-24L0 288c0 44.2 100.3 80 224 80s224-35.8 224-80l0-82.2zm0-77.8l0-48C448 35.8 347.7 0 224 0S0 35.8 0 80l0 48c0 44.2 100.3 80 224 80s224-35.8 224-80zM398.5 389.8C351.6 406.5 289.9 416 224 416S96.4 406.5 49.5 389.8c-17.6-6.3-34.7-14.2-49.5-24L0 432c0 44.2 100.3 80 224 80s224-35.8 224-80l0-66.2c-14.8 9.8-31.8 17.7-49.5 24z"]},mh={prefix:"fas",iconName:"sun",icon:[576,512,[9728],"f185","M178.2-10.1c7.4-3.1 15.8-2.2 22.5 2.2l87.8 58.2 87.8-58.2c6.7-4.4 15.1-5.2 22.5-2.2S411.4-.5 413 7.3l20.9 103.2 103.2 20.9c7.8 1.6 14.4 7 17.4 14.3s2.2 15.8-2.2 22.5l-58.2 87.8 58.2 87.8c4.4 6.7 5.2 15.1 2.2 22.5s-9.6 12.8-17.4 14.3L433.8 401.4 413 504.7c-1.6 7.8-7 14.4-14.3 17.4s-15.8 2.2-22.5-2.2l-87.8-58.2-87.8 58.2c-6.7 4.4-15.1 5.2-22.5 2.2s-12.8-9.6-14.3-17.4L143 401.4 39.7 380.5c-7.8-1.6-14.4-7-17.4-14.3s-2.2-15.8 2.2-22.5L82.7 256 24.5 168.2c-4.4-6.7-5.2-15.1-2.2-22.5s9.6-12.8 17.4-14.3L143 110.6 163.9 7.3c1.6-7.8 7-14.4 14.3-17.4zM207.6 256a80.4 80.4 0 1 1 160.8 0 80.4 80.4 0 1 1 -160.8 0zm208.8 0a128.4 128.4 0 1 0 -256.8 0 128.4 128.4 0 1 0 256.8 0z"]},yw={prefix:"fas",iconName:"timeline",icon:[576,512,[],"e29c","M160 169.3c28.3-12.3 48-40.5 48-73.3 0-44.2-35.8-80-80-80S48 51.8 48 96c0 32.8 19.7 61 48 73.3l0 54.7-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l224 0 0 54.7c-28.3 12.3-48 40.5-48 73.3 0 44.2 35.8 80 80 80s80-35.8 80-80c0-32.8-19.7-61-48-73.3l0-54.7 224 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-54.7c28.3-12.3 48-40.5 48-73.3 0-44.2-35.8-80-80-80s-80 35.8-80 80c0 32.8 19.7 61 48 73.3l0 54.7-256 0 0-54.7z"]},gh={prefix:"fas",iconName:"lightbulb",icon:[384,512,[128161],"f0eb","M292.9 384c7.3-22.3 21.9-42.5 38.4-59.9 32.7-34.4 52.7-80.9 52.7-132.1 0-106-86-192-192-192S0 86 0 192c0 51.2 20 97.7 52.7 132.1 16.5 17.4 31.2 37.6 38.4 59.9l201.7 0zM288 432l-192 0 0 16c0 44.2 35.8 80 80 80l32 0c44.2 0 80-35.8 80-80l0-16zM184 112c-39.8 0-72 32.2-72 72 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-66.3 53.7-120 120-120 13.3 0 24 10.7 24 24s-10.7 24-24 24z"]},Qn={prefix:"fas",iconName:"code",icon:[576,512,[],"f121","M360.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm64.6 136.1c-12.5 12.5-12.5 32.8 0 45.3l73.4 73.4-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0zm-274.7 0c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 150.6 182.6c12.5-12.5 12.5-32.8 0-45.3z"]},xw={prefix:"fas",iconName:"diagram-project",icon:[512,512,["project-diagram"],"f542","M0 80C0 53.5 21.5 32 48 32l96 0c26.5 0 48 21.5 48 48l0 16 128 0 0-16c0-26.5 21.5-48 48-48l96 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-96 0c-26.5 0-48-21.5-48-48l0-16-128 0 0 16c0 7.3-1.7 14.3-4.6 20.5l68.6 91.5 80 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-96 0c-26.5 0-48-21.5-48-48l0-96c0-7.3 1.7-14.3 4.6-20.5L128 224 48 224c-26.5 0-48-21.5-48-48L0 80z"]},bw=xw,sv={prefix:"fas",iconName:"cloud",icon:[576,512,[9729],"f0c2","M0 336c0 79.5 64.5 144 144 144l304 0c70.7 0 128-57.3 128-128 0-51.6-30.5-96.1-74.5-116.3 6.7-13.1 10.5-28 10.5-43.7 0-53-43-96-96-96-17.7 0-34.2 4.8-48.4 13.1-24.1-45.8-72.2-77.1-127.6-77.1-79.5 0-144 64.5-144 144 0 8 .7 15.9 1.9 23.5-56.9 19.2-97.9 73.1-97.9 136.5z"]},ww={prefix:"fas",iconName:"house",icon:[512,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M277.8 8.6c-12.3-11.4-31.3-11.4-43.5 0l-224 208c-9.6 9-12.8 22.9-8 35.1S18.8 272 32 272l16 0 0 176c0 35.3 28.7 64 64 64l288 0c35.3 0 64-28.7 64-64l0-176 16 0c13.2 0 25-8.1 29.8-20.3s1.6-26.2-8-35.1l-224-208zM240 320l32 0c26.5 0 48 21.5 48 48l0 96-128 0 0-96c0-26.5 21.5-48 48-48z"]},_w=ww,av={prefix:"fas",iconName:"brain",icon:[512,512,[129504],"f5dc","M120 56c0-30.9 25.1-56 56-56l24 0c17.7 0 32 14.3 32 32l0 448c0 17.7-14.3 32-32 32l-32 0c-29.8 0-54.9-20.4-62-48-.7 0-1.3 0-2 0-44.2 0-80-35.8-80-80 0-18 6-34.6 16-48-19.4-14.6-32-37.8-32-64 0-30.9 17.6-57.8 43.2-71.1-7.1-12-11.2-26-11.2-40.9 0-44.2 35.8-80 80-80l0-24zm272 0l0 24c44.2 0 80 35.8 80 80 0 15-4.1 29-11.2 40.9 25.7 13.3 43.2 40.1 43.2 71.1 0 26.2-12.6 49.4-32 64 10 13.4 16 30 16 48 0 44.2-35.8 80-80 80-.7 0-1.3 0-2 0-7.1 27.6-32.2 48-62 48l-32 0c-17.7 0-32-14.3-32-32l0-448c0-17.7 14.3-32 32-32l24 0c30.9 0 56 25.1 56 56z"]},kw={prefix:"fas",iconName:"laptop-code",icon:[640,512,[],"f5fc","M64 96c0-35.3 28.7-64 64-64l384 0c35.3 0 64 28.7 64 64l0 240-64 0 0-240-384 0 0 240-64 0 0-240zM0 403.2C0 392.6 8.6 384 19.2 384l601.6 0c10.6 0 19.2 8.6 19.2 19.2 0 42.4-34.4 76.8-76.8 76.8L76.8 480C34.4 480 0 445.6 0 403.2zM281 209l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM393 175l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"]},Sw={prefix:"fas",iconName:"server",icon:[448,512,[],"f233","M64 32C28.7 32 0 60.7 0 96l0 64c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-64c0-35.3-28.7-64-64-64L64 32zm216 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm56 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM64 288c-35.3 0-64 28.7-64 64l0 64c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-64c0-35.3-28.7-64-64-64L64 288zm216 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm56 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"]},Wc={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144,62470,"user-alt","user-large"],"f007","M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"]},Cw={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"]},Pw=Cw,vh={prefix:"fas",iconName:"moon",icon:[512,512,[127769,9214],"f186","M256 0C114.6 0 0 114.6 0 256S114.6 512 256 512c68.8 0 131.3-27.2 177.3-71.4 7.3-7 9.4-17.9 5.3-27.1s-13.7-14.9-23.8-14.1c-4.9 .4-9.8 .6-14.8 .6-101.6 0-184-82.4-184-184 0-72.1 41.5-134.6 102.1-164.8 9.1-4.5 14.3-14.3 13.1-24.4S322.6 8.5 312.7 6.3C294.4 2.2 275.4 0 256 0z"]},Ew={prefix:"fas",iconName:"chart-pie",icon:[576,512,["pie-chart"],"f200","M512.4 240l-176 0c-17.7 0-32-14.3-32-32l0-176c0-17.7 14.4-32.2 31.9-29.9 107 14.2 191.8 99 206 206 2.3 17.5-12.2 31.9-29.9 31.9zM222.6 37.2c18.1-3.8 33.8 11 33.8 29.5l0 197.3c0 5.6 2 11 5.5 15.3L394 438.7c11.7 14.1 9.2 35.4-6.9 44.1-34.1 18.6-73.2 29.2-114.7 29.2-132.5 0-240-107.5-240-240 0-115.5 81.5-211.9 190.2-234.8zM477.8 288l64 0c18.5 0 33.3 15.7 29.5 33.8-10.2 48.4-35 91.4-69.6 124.2-12.3 11.7-31.6 9.2-42.4-3.9L374.9 340.4c-17.3-20.9-2.4-52.4 24.6-52.4l78.2 0z"]},lv={prefix:"fas",iconName:"graduation-cap",icon:[576,512,[127891,"mortar-board"],"f19d","M48 195.8l209.2 86.1c9.8 4 20.2 6.1 30.8 6.1s21-2.1 30.8-6.1l242.4-99.8c9-3.7 14.8-12.4 14.8-22.1s-5.8-18.4-14.8-22.1L318.8 38.1C309 34.1 298.6 32 288 32s-21 2.1-30.8 6.1L14.8 137.9C5.8 141.6 0 150.3 0 160L0 456c0 13.3 10.7 24 24 24s24-10.7 24-24l0-260.2zm48 71.7L96 384c0 53 86 96 192 96s192-43 192-96l0-116.6-142.9 58.9c-15.6 6.4-32.2 9.7-49.1 9.7s-33.5-3.3-49.1-9.7L96 267.4z"]},Mw={prefix:"fas",iconName:"award",icon:[448,512,[],"f559","M245.9-25.9c-13.4-8.2-30.3-8.2-43.7 0-24.4 14.9-39.5 18.9-68.1 18.3-15.7-.4-30.3 8.1-37.9 21.9-13.7 25.1-24.8 36.2-49.9 49.9-13.8 7.5-22.2 22.2-21.9 37.9 .7 28.6-3.4 43.7-18.3 68.1-8.2 13.4-8.2 30.3 0 43.7 14.9 24.4 18.9 39.5 18.3 68.1-.4 15.7 8.1 30.3 21.9 37.9 22.1 12.1 33.3 22.1 45.1 41.5L42.7 458.5c-5.9 11.9-1.1 26.3 10.7 32.2l86 43c11.5 5.7 25.5 1.4 31.7-9.8l52.8-95.1 52.8 95.1c6.2 11.2 20.2 15.6 31.7 9.8l86-43c11.9-5.9 16.7-20.3 10.7-32.2l-48.6-97.2c11.7-19.4 23-29.4 45.1-41.5 13.8-7.5 22.2-22.2 21.9-37.9-.7-28.6 3.4-43.7 18.3-68.1 8.2-13.4 8.2-30.3 0-43.7-14.9-24.4-18.9-39.5-18.3-68.1 .4-15.7-8.1-30.3-21.9-37.9-25.1-13.7-36.2-24.8-49.9-49.9-7.5-13.8-22.2-22.2-37.9-21.9-28.6 .7-43.7-3.4-68.1-18.3zM224 96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"]},Nw={prefix:"fas",iconName:"robot",icon:[640,512,[129302],"f544","M352 0c0-17.7-14.3-32-32-32S288-17.7 288 0l0 64-96 0c-53 0-96 43-96 96l0 224c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-224c0-53-43-96-96-96l-96 0 0-64zM160 368c0-13.3 10.7-24 24-24l32 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-32 0c-13.3 0-24-10.7-24-24zm120 0c0-13.3 10.7-24 24-24l32 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-32 0c-13.3 0-24-10.7-24-24zm120 0c0-13.3 10.7-24 24-24l32 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-32 0c-13.3 0-24-10.7-24-24zM224 176a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm144 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM64 224c0-17.7-14.3-32-32-32S0 206.3 0 224l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96zm544-32c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32z"]},Ow={prefix:"fas",iconName:"location-dot",icon:[384,512,["map-marker-alt"],"f3c5","M0 188.6C0 84.4 86 0 192 0S384 84.4 384 188.6c0 119.3-120.2 262.3-170.4 316.8-11.8 12.8-31.5 12.8-43.3 0-50.2-54.5-170.4-197.5-170.4-316.8zM192 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128z"]},jw=Ow,Tw={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]};const Aw=({onThemeChange:e,currentTheme:t,onNavigate:n})=>{const[r,i]=T.useState(!1),[o,s]=T.useState("home"),[a,l]=T.useState(!1),[c,u]=T.useState(t||"dark"),[f,d]=T.useState(!1),h=T.useRef(null),g=[{id:"home",label:"首页",icon:_w},{id:"profile",label:"关于",icon:Wc},{id:"honors",label:"荣誉",icon:La},{id:"projects",label:"项目",icon:bw},{id:"skills",label:"技能",icon:Ew},{id:"timeline",label:"历程",icon:yw},{id:"contact",label:"联系",icon:ff}];T.useEffect(()=>{const v=()=>{const x=window.pageYOffset;l(x>50);const w=g.map(S=>document.getElementById(S.id)).filter(Boolean).find(S=>{const E=S.getBoundingClientRect(),C=80;return E.top<=C+50&&E.bottom>=C});w&&(s(w.id),window.location.hash!==`#${w.id}`&&window.history.replaceState(null,null,`#${w.id}`))};return window.addEventListener("scroll",v,{passive:!0}),()=>window.removeEventListener("scroll",v)},[g]),T.useEffect(()=>{t&&t!==c&&u(t)},[t,c]);const p=(v,x)=>{x&&(x.preventDefault(),x.stopPropagation()),console.log(`导航点击: ${v}`),s(v),i(!1);const _=`#${v}`;window.location.hash!==_&&window.history.replaceState(null,null,_);let w=document.getElementById(v);w||(w=document.querySelector(`[data-section="${v}"]`)||document.querySelector(`.${v}-section`)||document.querySelector(`section[id*="${v}"]`)),v==="profile"&&!w&&(w=document.querySelector(".hero-section")||document.querySelector(".profile-card")||document.querySelector('[class*="profile"]')),w?(console.log("找到目标元素:",w),w.style.display="block",w.style.visibility="visible",w.style.opacity="1"):console.warn(`目标区域 "${v}" 未找到`),n&&n(v),"vibrate"in navigator&&navigator.vibrate(10)},b=()=>{if(f)return;d(!0);const v=c==="dark"?"purple":"dark";u(v),e&&e(v);const x=document.documentElement;v==="purple"?(x.style.setProperty("--primary-color","#ff00ff"),x.style.setProperty("--secondary-color","#00ffff")):(x.style.setProperty("--primary-color","#00ff88"),x.style.setProperty("--secondary-color","#ff00ff")),setTimeout(()=>{d(!1)},500)},y=()=>{i(!r)};return m.jsxs(m.Fragment,{children:[m.jsxs("nav",{className:`navbar ${a?"scrolled":""}`,ref:h,children:[m.jsxs("div",{className:"nav-container",children:[m.jsxs("div",{className:"nav-logo",children:[m.jsx("div",{className:"logo-icon",children:m.jsx(q,{icon:co})}),m.jsx("span",{className:"logo-text",children:"Gen Z实验室"}),m.jsx("div",{className:"logo-glow"})]}),m.jsx("div",{className:"desktop-menu",children:m.jsx("div",{className:"nav-menu",children:g.map((v,x)=>m.jsxs("a",{href:`#${v.id}`,className:`nav-item ${o===v.id?"active":""}`,onClick:_=>p(v.id,_),onMouseDown:_=>_.preventDefault(),style:{"--delay":`${x*.1}s`},children:[m.jsx(q,{icon:v.icon,className:"nav-icon"}),m.jsx("span",{className:"nav-label",children:v.label}),m.jsx("div",{className:"nav-glow"})]},v.id))})}),m.jsxs("div",{className:"nav-controls",children:[m.jsxs("button",{className:`theme-toggle ${f?"animating":""}`,onClick:b,children:[m.jsx(q,{icon:c==="dark"?vh:mh,className:"theme-icon"}),m.jsx("div",{className:"theme-glow"})]}),m.jsx("button",{className:"mobile-menu-toggle",onClick:y,children:m.jsx(q,{icon:Tw,className:"menu-icon"})})]})]}),m.jsx("div",{className:"nav-border"})]}),m.jsxs("div",{className:`mobile-menu ${r?"open":""}`,children:[m.jsx("div",{className:"mobile-menu-overlay",onClick:y}),m.jsxs("div",{className:"mobile-menu-content",children:[m.jsxs("div",{className:"mobile-menu-header",children:[m.jsxs("div",{className:"mobile-logo",children:[m.jsx(q,{icon:co}),m.jsx("span",{children:"Gen Z实验室"})]}),m.jsx("button",{className:"mobile-menu-close",onClick:y,children:m.jsx(q,{icon:Pw})})]}),m.jsx("div",{className:"mobile-menu-items",children:g.map((v,x)=>m.jsxs("div",{className:`mobile-nav-item ${o===v.id?"active":""}`,onClick:_=>p(v.id,_),onMouseDown:_=>_.preventDefault(),style:{"--delay":`${x*.1}s`,cursor:"pointer"},children:[m.jsx(q,{icon:v.icon,className:"mobile-nav-icon"}),m.jsx("span",{className:"mobile-nav-label",children:v.label}),m.jsx("div",{className:"mobile-nav-glow"})]},v.id))}),m.jsx("div",{className:"mobile-menu-footer",children:m.jsxs("button",{className:"mobile-theme-toggle",onClick:b,children:[m.jsx(q,{icon:c==="dark"?vh:mh}),m.jsx("span",{children:c==="dark"?"夜间模式":"紫色主题"})]})})]})]}),m.jsx("style",{jsx:!0,children:`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(26, 26, 46, 0.8);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(0, 255, 136, 0.2);
          transition: all 0.3s ease;
          height: 80px;
        }

        .navbar.scrolled {
          background: rgba(10, 10, 10, 0.95);
          backdrop-filter: blur(30px);
          border-bottom-color: rgba(0, 255, 136, 0.4);
          box-shadow: 0 4px 30px rgba(0, 255, 136, 0.1);
        }

        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 var(--space-lg);
          height: 100%;
        }

        .nav-logo {
          display: flex;
          align-items: center;
          gap: var(--space-sm);
          position: relative;
          cursor: pointer;
        }

        .logo-icon {
          width: 40px;
          height: 40px;
          background: var(--gradient-primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--dark-blue);
          font-size: 1.2rem;
          font-weight: bold;
          box-shadow: 0 0 20px rgba(0, 255, 136, 0.5);
          transition: all 0.3s ease;
        }

        .logo-icon:hover {
          transform: rotate(360deg) scale(1.1);
          box-shadow: 0 0 30px rgba(0, 255, 136, 0.8);
        }

        .logo-text {
          font-size: 1.5rem;
          font-weight: 900;
          color: var(--primary-green);
          text-shadow: 0 0 20px rgba(0, 255, 136, 0.6);
          font-family: var(--font-primary);
        }

        .logo-glow {
          position: absolute;
          top: -5px;
          left: -5px;
          right: -5px;
          bottom: -5px;
          background: radial-gradient(circle, rgba(0, 255, 136, 0.2), transparent);
          border-radius: 50px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .nav-logo:hover .logo-glow {
          opacity: 1;
        }

        .nav-menu {
          display: flex;
          align-items: center;
          gap: var(--space-md);
        }

        .nav-item {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--space-xs);
          padding: var(--space-sm) var(--space-md);
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          border-radius: var(--radius-md);
          transition: all 0.3s ease;
          font-size: 0.9rem;
          font-weight: 600;
          border: 1px solid transparent;
          overflow: hidden;
          cursor: pointer;
          min-width: 80px;
          min-height: 48px;
          justify-content: center;
        }

        .nav-item:hover {
          color: var(--primary-green);
          border-color: rgba(0, 255, 136, 0.3);
          background: rgba(0, 255, 136, 0.05);
          transform: translateY(-2px);
        }

        .nav-item.active {
          color: var(--primary-green);
          background: rgba(0, 255, 136, 0.1);
          border-color: var(--primary-green);
          box-shadow: 
            0 0 20px rgba(0, 255, 136, 0.3),
            inset 0 0 20px rgba(0, 255, 136, 0.1);
        }

        .nav-item.active .nav-glow {
          opacity: 1;
        }

        .nav-icon {
          font-size: 1rem;
          transition: transform 0.3s ease;
        }

        .nav-item:hover .nav-icon {
          transform: scale(1.2);
        }

        .nav-label {
          font-size: 0.8rem;
          white-space: nowrap;
        }

        .nav-glow {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            45deg,
            transparent,
            rgba(0, 255, 136, 0.1),
            transparent
          );
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .nav-item:hover .nav-glow {
          opacity: 1;
          animation: glow-sweep 1s ease-in-out;
        }

        @keyframes glow-sweep {
          0% { transform: translateX(-100%) skewX(-15deg); }
          100% { transform: translateX(100%) skewX(-15deg); }
        }

        .nav-controls {
          display: flex;
          align-items: center;
          gap: var(--space-md);
        }

        .theme-toggle {
          width: 44px;
          height: 44px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(0, 255, 136, 0.3);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary-green);
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .theme-toggle:hover {
          background: rgba(0, 255, 136, 0.1);
          border-color: var(--primary-green);
          box-shadow: 0 0 20px rgba(0, 255, 136, 0.4);
        }

        .theme-toggle.animating {
          animation: theme-pulse 0.5s ease;
        }

        @keyframes theme-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }

        .theme-icon {
          font-size: 1.1rem;
          transition: transform 0.3s ease;
        }

        .theme-toggle:hover .theme-icon {
          transform: rotate(180deg);
        }

        .theme-glow {
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: conic-gradient(
            from 0deg,
            var(--primary-green),
            var(--neon-cyan),
            var(--neon-purple),
            var(--primary-green)
          );
          border-radius: 50%;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -1;
          animation: rotate 3s linear infinite;
        }

        .theme-toggle:hover .theme-glow {
          opacity: 0.6;
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .mobile-menu-toggle {
          display: none;
          width: 44px;
          height: 44px;
          background: transparent;
          border: 1px solid rgba(0, 255, 136, 0.3);
          border-radius: var(--radius-md);
          color: var(--primary-green);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .mobile-menu-toggle:hover {
          background: rgba(0, 255, 136, 0.1);
          border-color: var(--primary-green);
        }

        .menu-icon {
          font-size: 1.2rem;
          transition: transform 0.3s ease;
        }

        .nav-border {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            var(--primary-green),
            transparent
          );
          opacity: 0.5;
        }

        /* 移动端菜单样式 */
        .mobile-menu {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 2000;
          visibility: hidden;
          opacity: 0;
          transition: all 0.3s ease;
        }

        .mobile-menu.open {
          visibility: visible;
          opacity: 1;
        }

        .mobile-menu-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(5px);
        }

        .mobile-menu-content {
          position: absolute;
          top: 0;
          right: 0;
          width: 320px;
          height: 100vh;
          background: rgba(26, 26, 46, 0.95);
          backdrop-filter: blur(20px);
          border-left: 1px solid rgba(0, 255, 136, 0.3);
          transform: translateX(100%);
          transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          display: flex;
          flex-direction: column;
        }

        .mobile-menu.open .mobile-menu-content {
          transform: translateX(0);
        }

        .mobile-menu-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: var(--space-lg);
          border-bottom: 1px solid rgba(0, 255, 136, 0.2);
        }

        .mobile-logo {
          display: flex;
          align-items: center;
          gap: var(--space-sm);
          color: var(--primary-green);
          font-size: 1.2rem;
          font-weight: bold;
        }

        .mobile-menu-close {
          width: 40px;
          height: 40px;
          background: transparent;
          border: 1px solid rgba(0, 255, 136, 0.3);
          border-radius: 50%;
          color: var(--primary-green);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .mobile-menu-close:hover {
          background: rgba(0, 255, 136, 0.1);
          border-color: var(--primary-green);
        }

        .mobile-menu-items {
          flex: 1;
          padding: var(--space-lg);
          display: flex;
          flex-direction: column;
          gap: var(--space-sm);
        }

        .mobile-nav-item {
          position: relative;
          display: flex;
          align-items: center;
          gap: var(--space-md);
          padding: var(--space-md);
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          border-radius: var(--radius-md);
          border: 1px solid transparent;
          transition: all 0.3s ease;
          transform: translateX(50px);
          opacity: 0;
          animation: slideInMobile 0.5s ease forwards;
          animation-delay: var(--delay);
          overflow: hidden;
          cursor: pointer;
        }

        .mobile-nav-item:hover,
        .mobile-nav-item.active {
          color: var(--primary-green);
          background: rgba(0, 255, 136, 0.1);
          border-color: rgba(0, 255, 136, 0.3);
          transform: translateX(0);
        }

        @keyframes slideInMobile {
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .mobile-nav-icon {
          font-size: 1.2rem;
          width: 24px;
          text-align: center;
        }

        .mobile-nav-label {
          font-size: 1rem;
          font-weight: 600;
        }

        .mobile-nav-glow {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(0, 255, 136, 0.2),
            transparent
          );
          transition: left 0.5s ease;
        }

        .mobile-nav-item:hover .mobile-nav-glow {
          left: 100%;
        }

        .mobile-menu-footer {
          padding: var(--space-lg);
          border-top: 1px solid rgba(0, 255, 136, 0.2);
        }

        .mobile-theme-toggle {
          width: 100%;
          display: flex;
          align-items: center;
          gap: var(--space-md);
          padding: var(--space-md);
          background: rgba(0, 255, 136, 0.05);
          border: 1px solid rgba(0, 255, 136, 0.3);
          border-radius: var(--radius-md);
          color: var(--primary-green);
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 1rem;
          font-weight: 600;
        }

        .mobile-theme-toggle:hover {
          background: rgba(0, 255, 136, 0.1);
          border-color: var(--primary-green);
        }

        /* 响应式设计 */
        @media (max-width: 768px) {
          .nav-container {
            padding: 0 var(--space-md);
          }

          .desktop-menu {
            display: none;
          }

          .mobile-menu-toggle {
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .logo-text {
            font-size: 1.3rem;
          }

          .logo-icon {
            width: 35px;
            height: 35px;
            font-size: 1rem;
          }

          .theme-toggle {
            width: 40px;
            height: 40px;
          }

          .mobile-menu-content {
            width: 280px;
          }
        }

        @media (max-width: 480px) {
          .navbar {
            height: 70px;
          }

          .nav-container {
            padding: 0 var(--space-sm);
          }

          .logo-text {
            font-size: 1.2rem;
          }

          .logo-icon {
            width: 32px;
            height: 32px;
            font-size: 0.9rem;
          }

          .theme-toggle,
          .mobile-menu-toggle {
            width: 36px;
            height: 36px;
          }

          .mobile-menu-content {
            width: 100vw;
          }
        }

        /* 禁用平滑滚动行为，防止自动定位 */
        html {
          scroll-behavior: auto;
        }
      `})]})};/*!
 * Font Awesome Free 7.0.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */var zw={prefix:"fab",iconName:"weixin",icon:[576,512,[],"f1d7","M385.2 167.6c6.4 0 12.6 .3 18.8 1.1-16.6-78.4-100.7-136.7-196.3-136.7-107.2 0-194.7 72.8-194.7 165.4 0 53.4 29.3 97.5 77.9 131.6l-19.3 58.6 68-34.1c24.4 4.8 43.8 9.7 68.2 9.7 6.2 0 12.1-.3 18.3-.8-4-12.9-6.2-26.6-6.2-40.8-.1-84.9 72.9-154 165.3-154zM280.7 114.7c14.5 0 24.2 9.7 24.2 24.4 0 14.5-9.7 24.2-24.2 24.2-14.8 0-29.3-9.7-29.3-24.2 .1-14.7 14.6-24.4 29.3-24.4zM144.3 163.3c-14.5 0-29.3-9.7-29.3-24.2 0-14.8 14.8-24.4 29.3-24.4 14.8 0 24.4 9.7 24.4 24.4 0 14.6-9.6 24.2-24.4 24.2zM563 319.4c0-77.9-77.9-141.3-165.4-141.3-92.7 0-165.4 63.4-165.4 141.3S305 460.7 397.6 460.7c19.3 0 38.9-5.1 58.6-9.9l53.4 29.3-14.8-48.6C534 402.1 563 363.2 563 319.4zM343.9 294.9c-9.7 0-19.3-9.7-19.3-19.6 0-9.7 9.7-19.3 19.3-19.3 14.8 0 24.4 9.7 24.4 19.3 0 10-9.7 19.6-24.4 19.6zm107.1 0c-9.7 0-19.3-9.7-19.3-19.6 0-9.7 9.7-19.3 19.3-19.3 14.5 0 24.4 9.7 24.4 19.3 .1 10-9.9 19.6-24.4 19.6z"]},Lw={prefix:"fab",iconName:"github",icon:[512,512,[],"f09b","M173.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM252.8 8c-138.7 0-244.8 105.3-244.8 244 0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1 100-33.2 167.8-128.1 167.8-239 0-138.7-112.5-244-251.2-244zM105.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9s4.3 3.3 5.6 2.3c1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},Iw={prefix:"fab",iconName:"tiktok",icon:[448,512,[],"e07b","M448.5 209.9c-44 .1-87-13.6-122.8-39.2l0 178.7c0 33.1-10.1 65.4-29 92.6s-45.6 48-76.6 59.6-64.8 13.5-96.9 5.3-60.9-25.9-82.7-50.8-35.3-56-39-88.9 2.9-66.1 18.6-95.2 40-52.7 69.6-67.7 62.9-20.5 95.7-16l0 89.9c-15-4.7-31.1-4.6-46 .4s-27.9 14.6-37 27.3-14 28.1-13.9 43.9 5.2 31 14.5 43.7 22.4 22.1 37.4 26.9 31.1 4.8 46-.1 28-14.4 37.2-27.1 14.2-28.1 14.2-43.8l0-349.4 88 0c-.1 7.4 .6 14.9 1.9 22.2 3.1 16.3 9.4 31.9 18.7 45.7s21.3 25.6 35.2 34.6c19.9 13.1 43.2 20.1 67 20.1l0 87.4z"]},Hc={exports:{}},sr={},cv={exports:{}},Dw="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Rw=Dw,Fw=Rw;function uv(){}function fv(){}fv.resetWarningCache=uv;var $w=function(){function e(r,i,o,s,a,l){if(l!==Fw){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:fv,resetWarningCache:uv};return n.PropTypes=n,n};cv.exports=$w();var dv=cv.exports,Bc={exports:{}},St={},Uc={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=u;/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */var n="none",r="contents",i=/^(input|select|textarea|button|object|iframe)$/;function o(f,d){return d.getPropertyValue("overflow")!=="visible"||f.scrollWidth<=0&&f.scrollHeight<=0}function s(f){var d=f.offsetWidth<=0&&f.offsetHeight<=0;if(d&&!f.innerHTML)return!0;try{var h=window.getComputedStyle(f),g=h.getPropertyValue("display");return d?g!==r&&o(f,h):g===n}catch{return console.warn("Failed to inspect element style"),!1}}function a(f){for(var d=f,h=f.getRootNode&&f.getRootNode();d&&d!==document.body;){if(h&&d===h&&(d=h.host.parentNode),s(d))return!1;d=d.parentNode}return!0}function l(f,d){var h=f.nodeName.toLowerCase(),g=i.test(h)&&!f.disabled||h==="a"&&f.href||d;return g&&a(f)}function c(f){var d=f.getAttribute("tabindex");d===null&&(d=void 0);var h=isNaN(d);return(h||d>=0)&&l(f,!h)}function u(f){var d=[].slice.call(f.querySelectorAll("*"),0).reduce(function(h,g){return h.concat(g.shadowRoot?u(g.shadowRoot):[g])},[]);return d.filter(c)}e.exports=t.default})(Uc,Uc.exports);var hv=Uc.exports;Object.defineProperty(St,"__esModule",{value:!0});St.resetState=Uw;St.log=Vw;St.handleBlur=uo;St.handleFocus=fo;St.markForFocusLater=Yw;St.returnFocus=Xw;St.popWithoutFocus=Kw;St.setupScopedFocus=Gw;St.teardownScopedFocus=Qw;var Ww=hv,Hw=Bw(Ww);function Bw(e){return e&&e.__esModule?e:{default:e}}var Kr=[],Nr=null,Vc=!1;function Uw(){Kr=[]}function Vw(){}function uo(){Vc=!0}function fo(){if(Vc){if(Vc=!1,!Nr)return;setTimeout(function(){if(!Nr.contains(document.activeElement)){var e=(0,Hw.default)(Nr)[0]||Nr;e.focus()}},0)}}function Yw(){Kr.push(document.activeElement)}function Xw(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,t=null;try{Kr.length!==0&&(t=Kr.pop(),t.focus({preventScroll:e}));return}catch{console.warn(["You tried to return focus to",t,"but it is not in the DOM anymore"].join(" "))}}function Kw(){Kr.length>0&&Kr.pop()}function Gw(e){Nr=e,window.addEventListener?(window.addEventListener("blur",uo,!1),document.addEventListener("focus",fo,!0)):(window.attachEvent("onBlur",uo),document.attachEvent("onFocus",fo))}function Qw(){Nr=null,window.addEventListener?(window.removeEventListener("blur",uo),document.removeEventListener("focus",fo)):(window.detachEvent("onBlur",uo),document.detachEvent("onFocus",fo))}var Yc={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=s;var n=hv,r=i(n);function i(a){return a&&a.__esModule?a:{default:a}}function o(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return a.activeElement.shadowRoot?o(a.activeElement.shadowRoot):a.activeElement}function s(a,l){var c=(0,r.default)(a);if(!c.length){l.preventDefault();return}var u=void 0,f=l.shiftKey,d=c[0],h=c[c.length-1],g=o();if(a===g){if(!f)return;u=h}if(h===g&&!f&&(u=d),d===g&&f&&(u=h),u){l.preventDefault(),u.focus();return}var p=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent),b=p!=null&&p[1]!="Chrome"&&/\biPod\b|\biPad\b/g.exec(navigator.userAgent)==null;if(b){var y=c.indexOf(g);if(y>-1&&(y+=f?-1:1),u=c[y],typeof u>"u"){l.preventDefault(),u=f?h:d,u.focus();return}l.preventDefault(),u.focus()}}e.exports=t.default})(Yc,Yc.exports);var qw=Yc.exports,Ct={},Jw=function(){},Zw=Jw,wt={},pv={exports:{}};/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/(function(e){(function(){var t=!!(typeof window<"u"&&window.document&&window.document.createElement),n={canUseDOM:t,canUseWorkers:typeof Worker<"u",canUseEventListeners:t&&!!(window.addEventListener||window.attachEvent),canUseViewport:t&&!!window.screen};e.exports?e.exports=n:window.ExecutionEnvironment=n})()})(pv);var e4=pv.exports;Object.defineProperty(wt,"__esModule",{value:!0});wt.canUseDOM=wt.SafeNodeList=wt.SafeHTMLCollection=void 0;var t4=e4,n4=r4(t4);function r4(e){return e&&e.__esModule?e:{default:e}}var Ia=n4.default,i4=Ia.canUseDOM?window.HTMLElement:{};wt.SafeHTMLCollection=Ia.canUseDOM?window.HTMLCollection:{};wt.SafeNodeList=Ia.canUseDOM?window.NodeList:{};wt.canUseDOM=Ia.canUseDOM;wt.default=i4;Object.defineProperty(Ct,"__esModule",{value:!0});Ct.resetState=c4;Ct.log=u4;Ct.assertNodeList=mv;Ct.setElement=f4;Ct.validateElement=df;Ct.hide=d4;Ct.show=h4;Ct.documentNotReadyOrSSRTesting=p4;var o4=Zw,s4=l4(o4),a4=wt;function l4(e){return e&&e.__esModule?e:{default:e}}var ot=null;function c4(){ot&&(ot.removeAttribute?ot.removeAttribute("aria-hidden"):ot.length!=null?ot.forEach(function(e){return e.removeAttribute("aria-hidden")}):document.querySelectorAll(ot).forEach(function(e){return e.removeAttribute("aria-hidden")})),ot=null}function u4(){}function mv(e,t){if(!e||!e.length)throw new Error("react-modal: No elements were found for selector "+t+".")}function f4(e){var t=e;if(typeof t=="string"&&a4.canUseDOM){var n=document.querySelectorAll(t);mv(n,t),t=n}return ot=t||ot,ot}function df(e){var t=e||ot;return t?Array.isArray(t)||t instanceof HTMLCollection||t instanceof NodeList?t:[t]:((0,s4.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}function d4(e){var t=!0,n=!1,r=void 0;try{for(var i=df(e)[Symbol.iterator](),o;!(t=(o=i.next()).done);t=!0){var s=o.value;s.setAttribute("aria-hidden","true")}}catch(a){n=!0,r=a}finally{try{!t&&i.return&&i.return()}finally{if(n)throw r}}}function h4(e){var t=!0,n=!1,r=void 0;try{for(var i=df(e)[Symbol.iterator](),o;!(t=(o=i.next()).done);t=!0){var s=o.value;s.removeAttribute("aria-hidden")}}catch(a){n=!0,r=a}finally{try{!t&&i.return&&i.return()}finally{if(n)throw r}}}function p4(){ot=null}var ri={};Object.defineProperty(ri,"__esModule",{value:!0});ri.resetState=m4;ri.log=g4;var Ri={},Fi={};function yh(e,t){e.classList.remove(t)}function m4(){var e=document.getElementsByTagName("html")[0];for(var t in Ri)yh(e,Ri[t]);var n=document.body;for(var r in Fi)yh(n,Fi[r]);Ri={},Fi={}}function g4(){}var v4=function(t,n){return t[n]||(t[n]=0),t[n]+=1,n},y4=function(t,n){return t[n]&&(t[n]-=1),n},x4=function(t,n,r){r.forEach(function(i){v4(n,i),t.add(i)})},b4=function(t,n,r){r.forEach(function(i){y4(n,i),n[i]===0&&t.remove(i)})};ri.add=function(t,n){return x4(t.classList,t.nodeName.toLowerCase()=="html"?Ri:Fi,n.split(" "))};ri.remove=function(t,n){return b4(t.classList,t.nodeName.toLowerCase()=="html"?Ri:Fi,n.split(" "))};var ii={};Object.defineProperty(ii,"__esModule",{value:!0});ii.log=_4;ii.resetState=k4;function w4(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var gv=function e(){var t=this;w4(this,e),this.register=function(n){t.openInstances.indexOf(n)===-1&&(t.openInstances.push(n),t.emit("register"))},this.deregister=function(n){var r=t.openInstances.indexOf(n);r!==-1&&(t.openInstances.splice(r,1),t.emit("deregister"))},this.subscribe=function(n){t.subscribers.push(n)},this.emit=function(n){t.subscribers.forEach(function(r){return r(n,t.openInstances.slice())})},this.openInstances=[],this.subscribers=[]},ta=new gv;function _4(){console.log("portalOpenInstances ----------"),console.log(ta.openInstances.length),ta.openInstances.forEach(function(e){return console.log(e)}),console.log("end portalOpenInstances ----------")}function k4(){ta=new gv}ii.default=ta;var hf={};Object.defineProperty(hf,"__esModule",{value:!0});hf.resetState=E4;hf.log=M4;var S4=ii,C4=P4(S4);function P4(e){return e&&e.__esModule?e:{default:e}}var je=void 0,mt=void 0,qn=[];function E4(){for(var e=[je,mt],t=0;t<e.length;t++){var n=e[t];n&&n.parentNode&&n.parentNode.removeChild(n)}je=mt=null,qn=[]}function M4(){console.log("bodyTrap ----------"),console.log(qn.length);for(var e=[je,mt],t=0;t<e.length;t++){var n=e[t],r=n||{};console.log(r.nodeName,r.className,r.id)}console.log("edn bodyTrap ----------")}function xh(){qn.length!==0&&qn[qn.length-1].focusContent()}function N4(e,t){!je&&!mt&&(je=document.createElement("div"),je.setAttribute("data-react-modal-body-trap",""),je.style.position="absolute",je.style.opacity="0",je.setAttribute("tabindex","0"),je.addEventListener("focus",xh),mt=je.cloneNode(),mt.addEventListener("focus",xh)),qn=t,qn.length>0?(document.body.firstChild!==je&&document.body.insertBefore(je,document.body.firstChild),document.body.lastChild!==mt&&document.body.appendChild(mt)):(je.parentElement&&je.parentElement.removeChild(je),mt.parentElement&&mt.parentElement.removeChild(mt))}C4.default.subscribe(N4);(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(F){for(var A=1;A<arguments.length;A++){var B=arguments[A];for(var k in B)Object.prototype.hasOwnProperty.call(B,k)&&(F[k]=B[k])}return F},r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(F){return typeof F}:function(F){return F&&typeof Symbol=="function"&&F.constructor===Symbol&&F!==Symbol.prototype?"symbol":typeof F},i=function(){function F(A,B){for(var k=0;k<B.length;k++){var M=B[k];M.enumerable=M.enumerable||!1,M.configurable=!0,"value"in M&&(M.writable=!0),Object.defineProperty(A,M.key,M)}}return function(A,B,k){return B&&F(A.prototype,B),k&&F(A,k),A}}(),o=T,s=dv,a=w(s),l=St,c=_(l),u=qw,f=w(u),d=Ct,h=_(d),g=ri,p=_(g),b=wt,y=w(b),v=ii,x=w(v);function _(F){if(F&&F.__esModule)return F;var A={};if(F!=null)for(var B in F)Object.prototype.hasOwnProperty.call(F,B)&&(A[B]=F[B]);return A.default=F,A}function w(F){return F&&F.__esModule?F:{default:F}}function S(F,A){if(!(F instanceof A))throw new TypeError("Cannot call a class as a function")}function E(F,A){if(!F)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return A&&(typeof A=="object"||typeof A=="function")?A:F}function C(F,A){if(typeof A!="function"&&A!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof A);F.prototype=Object.create(A&&A.prototype,{constructor:{value:F,enumerable:!1,writable:!0,configurable:!0}}),A&&(Object.setPrototypeOf?Object.setPrototypeOf(F,A):F.__proto__=A)}var P={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},N=function(A){return A.code==="Tab"||A.keyCode===9},L=function(A){return A.code==="Escape"||A.keyCode===27},$=0,se=function(F){C(A,F);function A(B){S(this,A);var k=E(this,(A.__proto__||Object.getPrototypeOf(A)).call(this,B));return k.setOverlayRef=function(M){k.overlay=M,k.props.overlayRef&&k.props.overlayRef(M)},k.setContentRef=function(M){k.content=M,k.props.contentRef&&k.props.contentRef(M)},k.afterClose=function(){var M=k.props,I=M.appElement,D=M.ariaHideApp,W=M.htmlOpenClassName,G=M.bodyOpenClassName,xe=M.parentSelector,me=xe&&xe().ownerDocument||document;G&&p.remove(me.body,G),W&&p.remove(me.getElementsByTagName("html")[0],W),D&&$>0&&($-=1,$===0&&h.show(I)),k.props.shouldFocusAfterRender&&(k.props.shouldReturnFocusAfterClose?(c.returnFocus(k.props.preventScroll),c.teardownScopedFocus()):c.popWithoutFocus()),k.props.onAfterClose&&k.props.onAfterClose(),x.default.deregister(k)},k.open=function(){k.beforeOpen(),k.state.afterOpen&&k.state.beforeClose?(clearTimeout(k.closeTimer),k.setState({beforeClose:!1})):(k.props.shouldFocusAfterRender&&(c.setupScopedFocus(k.node),c.markForFocusLater()),k.setState({isOpen:!0},function(){k.openAnimationFrame=requestAnimationFrame(function(){k.setState({afterOpen:!0}),k.props.isOpen&&k.props.onAfterOpen&&k.props.onAfterOpen({overlayEl:k.overlay,contentEl:k.content})})}))},k.close=function(){k.props.closeTimeoutMS>0?k.closeWithTimeout():k.closeWithoutTimeout()},k.focusContent=function(){return k.content&&!k.contentHasFocus()&&k.content.focus({preventScroll:!0})},k.closeWithTimeout=function(){var M=Date.now()+k.props.closeTimeoutMS;k.setState({beforeClose:!0,closesAt:M},function(){k.closeTimer=setTimeout(k.closeWithoutTimeout,k.state.closesAt-Date.now())})},k.closeWithoutTimeout=function(){k.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},k.afterClose)},k.handleKeyDown=function(M){N(M)&&(0,f.default)(k.content,M),k.props.shouldCloseOnEsc&&L(M)&&(M.stopPropagation(),k.requestClose(M))},k.handleOverlayOnClick=function(M){k.shouldClose===null&&(k.shouldClose=!0),k.shouldClose&&k.props.shouldCloseOnOverlayClick&&(k.ownerHandlesClose()?k.requestClose(M):k.focusContent()),k.shouldClose=null},k.handleContentOnMouseUp=function(){k.shouldClose=!1},k.handleOverlayOnMouseDown=function(M){!k.props.shouldCloseOnOverlayClick&&M.target==k.overlay&&M.preventDefault()},k.handleContentOnClick=function(){k.shouldClose=!1},k.handleContentOnMouseDown=function(){k.shouldClose=!1},k.requestClose=function(M){return k.ownerHandlesClose()&&k.props.onRequestClose(M)},k.ownerHandlesClose=function(){return k.props.onRequestClose},k.shouldBeClosed=function(){return!k.state.isOpen&&!k.state.beforeClose},k.contentHasFocus=function(){return document.activeElement===k.content||k.content.contains(document.activeElement)},k.buildClassName=function(M,I){var D=(typeof I>"u"?"undefined":r(I))==="object"?I:{base:P[M],afterOpen:P[M]+"--after-open",beforeClose:P[M]+"--before-close"},W=D.base;return k.state.afterOpen&&(W=W+" "+D.afterOpen),k.state.beforeClose&&(W=W+" "+D.beforeClose),typeof I=="string"&&I?W+" "+I:W},k.attributesFromObject=function(M,I){return Object.keys(I).reduce(function(D,W){return D[M+"-"+W]=I[W],D},{})},k.state={afterOpen:!1,beforeClose:!1},k.shouldClose=null,k.moveFromContentToOverlay=null,k}return i(A,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(k,M){this.props.isOpen&&!k.isOpen?this.open():!this.props.isOpen&&k.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!M.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var k=this.props,M=k.appElement,I=k.ariaHideApp,D=k.htmlOpenClassName,W=k.bodyOpenClassName,G=k.parentSelector,xe=G&&G().ownerDocument||document;W&&p.add(xe.body,W),D&&p.add(xe.getElementsByTagName("html")[0],D),I&&($+=1,h.hide(M)),x.default.register(this)}},{key:"render",value:function(){var k=this.props,M=k.id,I=k.className,D=k.overlayClassName,W=k.defaultStyles,G=k.children,xe=I?{}:W.content,me=D?{}:W.overlay;if(this.shouldBeClosed())return null;var dt={ref:this.setOverlayRef,className:this.buildClassName("overlay",D),style:n({},me,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},ke=n({id:M,ref:this.setContentRef,style:n({},xe,this.props.style.content),className:this.buildClassName("content",I),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",n({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),fr=this.props.contentElement(ke,G);return this.props.overlayElement(dt,fr)}}]),A}(o.Component);se.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},se.propTypes={isOpen:a.default.bool.isRequired,defaultStyles:a.default.shape({content:a.default.object,overlay:a.default.object}),style:a.default.shape({content:a.default.object,overlay:a.default.object}),className:a.default.oneOfType([a.default.string,a.default.object]),overlayClassName:a.default.oneOfType([a.default.string,a.default.object]),parentSelector:a.default.func,bodyOpenClassName:a.default.string,htmlOpenClassName:a.default.string,ariaHideApp:a.default.bool,appElement:a.default.oneOfType([a.default.instanceOf(y.default),a.default.instanceOf(b.SafeHTMLCollection),a.default.instanceOf(b.SafeNodeList),a.default.arrayOf(a.default.instanceOf(y.default))]),onAfterOpen:a.default.func,onAfterClose:a.default.func,onRequestClose:a.default.func,closeTimeoutMS:a.default.number,shouldFocusAfterRender:a.default.bool,shouldCloseOnOverlayClick:a.default.bool,shouldReturnFocusAfterClose:a.default.bool,preventScroll:a.default.bool,role:a.default.string,contentLabel:a.default.string,aria:a.default.object,data:a.default.object,children:a.default.node,shouldCloseOnEsc:a.default.bool,overlayRef:a.default.func,contentRef:a.default.func,id:a.default.string,overlayElement:a.default.func,contentElement:a.default.func,testId:a.default.string},t.default=se,e.exports=t.default})(Bc,Bc.exports);var O4=Bc.exports;function vv(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);e!=null&&this.setState(e)}function yv(e){function t(n){var r=this.constructor.getDerivedStateFromProps(e,n);return r??null}this.setState(t.bind(this))}function xv(e,t){try{var n=this.props,r=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,r)}finally{this.props=n,this.state=r}}vv.__suppressDeprecationWarning=!0;yv.__suppressDeprecationWarning=!0;xv.__suppressDeprecationWarning=!0;function j4(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if(typeof e.getDerivedStateFromProps!="function"&&typeof t.getSnapshotBeforeUpdate!="function")return e;var n=null,r=null,i=null;if(typeof t.componentWillMount=="function"?n="componentWillMount":typeof t.UNSAFE_componentWillMount=="function"&&(n="UNSAFE_componentWillMount"),typeof t.componentWillReceiveProps=="function"?r="componentWillReceiveProps":typeof t.UNSAFE_componentWillReceiveProps=="function"&&(r="UNSAFE_componentWillReceiveProps"),typeof t.componentWillUpdate=="function"?i="componentWillUpdate":typeof t.UNSAFE_componentWillUpdate=="function"&&(i="UNSAFE_componentWillUpdate"),n!==null||r!==null||i!==null){var o=e.displayName||e.name,s=typeof e.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+o+" uses "+s+" but also contains the following legacy lifecycles:"+(n!==null?`
  `+n:"")+(r!==null?`
  `+r:"")+(i!==null?`
  `+i:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof e.getDerivedStateFromProps=="function"&&(t.componentWillMount=vv,t.componentWillReceiveProps=yv),typeof t.getSnapshotBeforeUpdate=="function"){if(typeof t.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=xv;var a=t.componentDidUpdate;t.componentDidUpdate=function(c,u,f){var d=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:f;a.call(this,c,u,d)}}return e}const T4=Object.freeze(Object.defineProperty({__proto__:null,polyfill:j4},Symbol.toStringTag,{value:"Module"})),A4=g1(T4);Object.defineProperty(sr,"__esModule",{value:!0});sr.bodyOpenClassName=sr.portalClassName=void 0;var bh=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},z4=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),bv=T,na=Co(bv),L4=e0,ra=Co(L4),I4=dv,H=Co(I4),D4=O4,wh=Co(D4),R4=Ct,F4=W4(R4),fn=wt,_h=Co(fn),$4=A4;function W4(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function Co(e){return e&&e.__esModule?e:{default:e}}function H4(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function kh(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function B4(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var U4=sr.portalClassName="ReactModalPortal",V4=sr.bodyOpenClassName="ReactModal__Body--open",$n=fn.canUseDOM&&ra.default.createPortal!==void 0,Sh=function(t){return document.createElement(t)},Ch=function(){return $n?ra.default.createPortal:ra.default.unstable_renderSubtreeIntoContainer};function Ko(e){return e()}var Po=function(e){B4(t,e);function t(){var n,r,i,o;H4(this,t);for(var s=arguments.length,a=Array(s),l=0;l<s;l++)a[l]=arguments[l];return o=(r=(i=kh(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this].concat(a))),i),i.removePortal=function(){!$n&&ra.default.unmountComponentAtNode(i.node);var c=Ko(i.props.parentSelector);c&&c.contains(i.node)?c.removeChild(i.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},i.portalRef=function(c){i.portal=c},i.renderPortal=function(c){var u=Ch(),f=u(i,na.default.createElement(wh.default,bh({defaultStyles:t.defaultStyles},c)),i.node);i.portalRef(f)},r),kh(i,o)}return z4(t,[{key:"componentDidMount",value:function(){if(fn.canUseDOM){$n||(this.node=Sh("div")),this.node.className=this.props.portalClassName;var r=Ko(this.props.parentSelector);r.appendChild(this.node),!$n&&this.renderPortal(this.props)}}},{key:"getSnapshotBeforeUpdate",value:function(r){var i=Ko(r.parentSelector),o=Ko(this.props.parentSelector);return{prevParent:i,nextParent:o}}},{key:"componentDidUpdate",value:function(r,i,o){if(fn.canUseDOM){var s=this.props,a=s.isOpen,l=s.portalClassName;r.portalClassName!==l&&(this.node.className=l);var c=o.prevParent,u=o.nextParent;u!==c&&(c.removeChild(this.node),u.appendChild(this.node)),!(!r.isOpen&&!a)&&!$n&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(!(!fn.canUseDOM||!this.node||!this.portal)){var r=this.portal.state,i=Date.now(),o=r.isOpen&&this.props.closeTimeoutMS&&(r.closesAt||i+this.props.closeTimeoutMS);o?(r.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,o-i)):this.removePortal()}}},{key:"render",value:function(){if(!fn.canUseDOM||!$n)return null;!this.node&&$n&&(this.node=Sh("div"));var r=Ch();return r(na.default.createElement(wh.default,bh({ref:this.portalRef,defaultStyles:t.defaultStyles},this.props)),this.node)}}],[{key:"setAppElement",value:function(r){F4.setElement(r)}}]),t}(bv.Component);Po.propTypes={isOpen:H.default.bool.isRequired,style:H.default.shape({content:H.default.object,overlay:H.default.object}),portalClassName:H.default.string,bodyOpenClassName:H.default.string,htmlOpenClassName:H.default.string,className:H.default.oneOfType([H.default.string,H.default.shape({base:H.default.string.isRequired,afterOpen:H.default.string.isRequired,beforeClose:H.default.string.isRequired})]),overlayClassName:H.default.oneOfType([H.default.string,H.default.shape({base:H.default.string.isRequired,afterOpen:H.default.string.isRequired,beforeClose:H.default.string.isRequired})]),appElement:H.default.oneOfType([H.default.instanceOf(_h.default),H.default.instanceOf(fn.SafeHTMLCollection),H.default.instanceOf(fn.SafeNodeList),H.default.arrayOf(H.default.instanceOf(_h.default))]),onAfterOpen:H.default.func,onRequestClose:H.default.func,closeTimeoutMS:H.default.number,ariaHideApp:H.default.bool,shouldFocusAfterRender:H.default.bool,shouldCloseOnOverlayClick:H.default.bool,shouldReturnFocusAfterClose:H.default.bool,preventScroll:H.default.bool,parentSelector:H.default.func,aria:H.default.object,data:H.default.object,role:H.default.string,contentLabel:H.default.string,shouldCloseOnEsc:H.default.bool,overlayRef:H.default.func,contentRef:H.default.func,id:H.default.string,overlayElement:H.default.func,contentElement:H.default.func};Po.defaultProps={isOpen:!1,portalClassName:U4,bodyOpenClassName:V4,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(t,n){return na.default.createElement("div",t,n)},contentElement:function(t,n){return na.default.createElement("div",t,n)}};Po.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}};(0,$4.polyfill)(Po);sr.default=Po;(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=sr,r=i(n);function i(o){return o&&o.__esModule?o:{default:o}}t.default=r.default,e.exports=t.default})(Hc,Hc.exports);var Y4=Hc.exports;const wv=Bp(Y4);typeof document<"u"&&wv.setAppElement("#root");const X4=()=>{const[e,t]=T.useState(""),[n,r]=T.useState(0),[i,o]=T.useState(!0),[s,a]=T.useState(!0),[l,c]=T.useState(!1),[u,f]=T.useState({x:0,y:0}),[d,h]=T.useState({stars:"500+",loading:!0}),[g,p]=T.useState(!1),[b,y]=T.useState(!1),v=T.useRef(null),x=T.useRef(null),_='我不确定是否有一天会"成功"，但我知道：机遇是偶然的，但保持好奇与热爱、不断尝试、永远不放弃的执着，是能自己把握的。',w=[{icon:Lw,url:"https://github.com/yishan",label:"GitHub",color:"#333"},{icon:Iw,url:"https://v.douyin.com/-l57aoiAx3U/",label:"抖音",color:"#ff0050",douyinId:"v.douyin.com/-l57aoiAx3U"},{icon:zw,url:"javascript:void(0);",label:"CJ-5201215",color:"#07c160",isWeChat:!0,wechatId:"CJ-5201215"},{icon:ff,url:"mailto:yishan@example.com",label:"Email",color:"#ea4335"}],S=[{icon:co,label:"项目数量",value:"6+",color:"#00ff88"},{icon:La,label:"获奖次数",value:"7次",color:"#ffd700"},{icon:Qn,label:"代码行数",value:"50K+",color:"#00ffff"},{icon:mw,label:"技术热情",value:"100%",color:"#ff00ff"}],E=async P=>{try{if(navigator.clipboard)await navigator.clipboard.writeText(P);else{const N=document.createElement("input");N.value=P,document.body.appendChild(N),N.select(),document.execCommand("copy"),document.body.removeChild(N)}p(!0),setTimeout(()=>p(!1),2e3)}catch(N){console.error("复制失败:",N),alert(`微信号: ${P}`)}};T.useEffect(()=>{(async()=>{try{const L=await(await fetch("/api/github/stats")).json();if(L.success&&L.data)h({stars:L.data.totalStars||"500+",loading:!1});else throw new Error("API返回数据格式错误")}catch(N){console.error("获取GitHub统计失败:",N),h({stars:"500+",loading:!1})}})()},[]),T.useEffect(()=>{const P=new IntersectionObserver(N=>{N.forEach(L=>{L.isIntersecting&&c(!0)})},{threshold:.3});return v.current&&P.observe(v.current),()=>P.disconnect()},[]),T.useEffect(()=>{if(!l)return;let P=0,N;const L=()=>{P<=_.length?(t(_.slice(0,P)),P++,N=setTimeout(L,80)):(o(!1),a(!0))};return L(),()=>{N&&clearTimeout(N)}},[l]),T.useEffect(()=>{const P=setInterval(()=>{a(N=>!N)},530);return()=>clearInterval(P)},[]);const C=P=>{if(x.current){const N=x.current.getBoundingClientRect(),L=N.left+N.width/2,$=N.top+N.height/2;f({x:(P.clientX-L)/20,y:(P.clientY-$)/20})}};return m.jsxs("section",{id:"profile",className:"section",ref:v,children:[m.jsx("div",{className:"container",children:m.jsx("div",{className:"profile-wrapper",onMouseMove:C,children:m.jsxs("div",{className:`profile-content ${l?"visible":""}`,children:[m.jsxs("div",{className:"avatar-section",children:[m.jsxs("div",{className:"avatar-container",ref:x,children:[m.jsx("div",{className:"avatar-glow"}),m.jsxs("div",{className:"avatar-image",style:{transform:`rotateX(${u.y}deg) rotateY(${u.x}deg)`},children:[m.jsx("img",{src:"https://haisnap.tos-cn-beijing.volces.com/image/32d2c526-df0a-4200-a5eb-f909ef1eed8d_1757225657737.jpg",alt:"亍幵 - 高中生AI开发者",loading:"lazy",onError:P=>{P.target.style.backgroundColor="#1a1a2e",P.target.style.border="2px solid var(--primary-green)",console.warn("头像加载失败，使用默认样式")},onLoad:()=>{console.log("头像加载成功")}}),m.jsx("div",{className:"avatar-border"})]}),m.jsx("div",{className:"particle-orbit",children:[...Array(8)].map((P,N)=>m.jsx("div",{className:"orbit-particle",style:{"--delay":`${N*.5}s`},children:m.jsx(q,{icon:Qn})},N))})]}),m.jsxs("div",{className:"achievements-grid",children:[S.map((P,N)=>m.jsxs("div",{className:"achievement-item",style:{"--achievement-color":P.color},children:[m.jsx("div",{className:"achievement-icon",children:m.jsx(q,{icon:P.icon})}),m.jsxs("div",{className:"achievement-info",children:[m.jsx("span",{className:"achievement-value",children:P.value}),m.jsx("span",{className:"achievement-label",children:P.label})]})]},N)),m.jsxs("div",{className:"mentor-section",children:[m.jsx("h3",{className:"mentor-title",children:"我的导师"}),m.jsxs("div",{className:"mentor-list",children:[m.jsxs("div",{className:"mentor-card",children:[m.jsxs("div",{className:"mentor-avatar",children:[m.jsx("img",{src:"https://haisnap.tos-cn-beijing.volces.com/image/6faf098d-3b48-4e13-9763-bd593cf0ebb6_1757308261509.jpg",alt:"郭靖老师",onError:P=>P.target.src="https://via.placeholder.com/80x80/00ff88/ffffff?text=郭"}),m.jsx("div",{className:"mentor-glow"})]}),m.jsxs("div",{className:"mentor-info",children:[m.jsxs("h4",{className:"mentor-name",children:["郭靖老师",m.jsx("span",{className:"mentor-nickname",children:"（白鹿第一帅）"})]}),m.jsx("p",{className:"mentor-position",children:"大数据与大模型开发工程师"}),m.jsxs("div",{className:"mentor-badges",children:[m.jsx("span",{className:"badge csdn",children:"CSDN博客专家"}),m.jsx("span",{className:"badge ali",children:"阿里云社区专家"}),m.jsx("span",{className:"badge aws",children:"AWS UG Leader"})]}),m.jsx("p",{className:"mentor-desc",children:"深耕企业级应用开发与前沿技术研究，拥有5年JavaEE企业级开发运营经验及多项国家工信部高级专项技术证书。 中国开发者影响力年度榜单人物，坚信技术的力量，乐于分享与创造。"}),m.jsxs("a",{href:"https://blog.csdn.net/qq_22695001?spm=1018.2118.3001.5148",target:"_blank",rel:"noopener noreferrer",className:"mentor-link csdn-link",title:"访问郭靖老师的CSDN博客主页",children:[m.jsx(q,{icon:hw,className:"link-icon"}),"访问CSDN主页"]})]})]}),m.jsxs("div",{className:"mentor-card",children:[m.jsxs("div",{className:"mentor-avatar",children:[m.jsx("img",{src:"https://haisnap.tos-cn-beijing.volces.com/image/a94fbb5d-f314-40bf-ac21-76e27a324200_1757308474696.jpg",alt:"梓渊老师",onError:P=>P.target.src="https://via.placeholder.com/80x80/00ffff/ffffff?text=梓"}),m.jsx("div",{className:"mentor-glow"})]}),m.jsxs("div",{className:"mentor-info",children:[m.jsx("h4",{className:"mentor-name",children:"梓渊老师"}),m.jsx("p",{className:"mentor-position",children:"数智教育专家"}),m.jsxs("div",{className:"mentor-badges",children:[m.jsx("span",{className:"badge education",children:"儿童数智素养专家"}),m.jsx("span",{className:"badge ethics",children:"技术伦理研究者"})]}),m.jsx("p",{className:"mentor-desc",children:"国内首家儿童数智素养的核心成员，专注于技术伦理与社会创新领域的青年实践者。 致力于探索数智技术教育的普惠性与伦理性，培养下一代数字公民。"})]})]})]})]})]})]}),m.jsxs("div",{className:"info-section",children:[m.jsx("div",{className:"neon-title-container",children:m.jsxs("h1",{className:"neon-title",children:[m.jsx("span",{className:"name-text",children:"Gen Z实验室"}),m.jsx("span",{className:"separator",children:"|"}),m.jsx("span",{className:"role-text",children:"高中生AI开发者"})]})}),m.jsxs("div",{className:"basic-info",children:[m.jsxs("div",{className:"info-item",children:[m.jsx(q,{icon:lv}),m.jsx("span",{children:"高中三年级"})]}),m.jsxs("div",{className:"info-item",children:[m.jsx(q,{icon:jw}),m.jsx("span",{children:"中国"})]}),m.jsxs("div",{className:"info-item",children:[m.jsx(q,{icon:Qn}),m.jsx("span",{children:"全栈开发 · AI研究"})]})]}),m.jsx("div",{className:"typewriter-container",children:m.jsxs("div",{className:"typewriter-text",children:[e||_,m.jsx("span",{className:`cursor ${s?"visible":""}`,children:"|"})]})}),m.jsx("div",{className:"bio-section",children:m.jsx("p",{children:"热爱技术的高中生，专注于人工智能和Web开发领域。 通过自主学习掌握了前端技术， 并将AI技术应用于实际项目中，追求技术与创意的完美结合。"})}),m.jsxs("div",{className:"tech-tags",children:[m.jsxs("div",{className:"tag-category",children:[m.jsx("h4",{children:"前端技术"}),m.jsxs("div",{className:"tags",children:[m.jsx("span",{className:"tech-tag frontend",children:"React"}),m.jsx("span",{className:"tech-tag frontend",children:"JavaScript"}),m.jsx("span",{className:"tech-tag frontend",children:"HTML/CSS"})]})]}),m.jsxs("div",{className:"tag-category",children:[m.jsx("h4",{children:"后端技术"}),m.jsxs("div",{className:"tags",children:[m.jsx("span",{className:"tech-tag backend",children:"Python"}),m.jsx("span",{className:"tech-tag backend",children:"Node.js"}),m.jsx("span",{className:"tech-tag backend",children:"Express"})]})]}),m.jsxs("div",{className:"tag-category",children:[m.jsx("h4",{children:"AI/学习"}),m.jsxs("div",{className:"tags",children:[m.jsx("span",{className:"tech-tag ai",children:"机器学习基础"}),m.jsx("span",{className:"tech-tag ai",children:"OpenAI API"}),m.jsx("span",{className:"tech-tag ai",children:"数据分析"})]})]})]}),m.jsxs("div",{className:"social-links",children:[m.jsx("h4",{children:"联系方式"}),m.jsx("div",{className:"social-grid",children:w.map((P,N)=>m.jsxs("a",{href:P.isWeChat?"#":P.url,className:"social-link",target:P.isWeChat?void 0:"_blank",rel:P.isWeChat?void 0:"noopener noreferrer",onClick:L=>{P.isWeChat&&(L.preventDefault(),E(P.wechatId))},style:{"--social-color":P.color},title:P.isWeChat?`点击复制微信号: ${P.wechatId}`:P.douyinId?"抖音主页":P.label,children:[m.jsx(q,{icon:P.icon}),m.jsx("span",{children:P.label})]},N))})]}),m.jsxs("div",{className:"group-photo-section",children:[m.jsx("h4",{children:"师生团队"}),m.jsxs("div",{className:"photo-container",children:[m.jsx("img",{src:"https://haisnap.tos-cn-beijing.volces.com/image/b72c34ee-f205-48c9-abc2-324072fc6f35_1757309086015.jpg",alt:"师生合照 - 与导师共同探讨技术前沿",className:"group-photo",loading:"lazy",onError:P=>{P.target.style.backgroundColor="#1a1a2e",P.target.style.minHeight="200px",P.target.style.display="flex",P.target.style.alignItems="center",P.target.style.justifyContent="center",P.target.style.color="rgba(255,255,255,0.5)",P.target.style.fontSize="0.9rem",P.target.alt="图片加载中...",console.warn("师生合照加载失败，使用占位样式")},onLoad:()=>{console.log("师生合照加载成功")}}),m.jsx("p",{className:"photo-caption",children:"与导师共同探讨技术前沿"})]})]})]})]})})}),g&&m.jsx("div",{className:"copy-notification",children:"微信号已复制到剪贴板"}),m.jsxs(wv,{isOpen:b,onRequestClose:()=>y(!1),className:"douyin-qr-modal",overlayClassName:"ReactModal__Overlay",closeTimeoutMS:200,children:[m.jsx("h3",{className:"douyin-title",children:"扫码关注我的抖音"}),m.jsx("img",{src:"https://haisnap.tos-cn-beijing.volces.com/image/fadb39f0-3b14-4162-b1a4-5514b6508801_1757255693651.jpg",alt:"抖音二维码",className:"douyin-qr-image",loading:"lazy"}),m.jsx("p",{className:"douyin-subtitle",children:"一起分享有趣的技术内容"}),m.jsx("button",{className:"modal-close-btn",onClick:()=>y(!1),children:"关闭"})]}),m.jsx("style",{jsx:!0,children:`
        .profile-wrapper {
          position: relative;
          max-width: 1200px;
          margin: 0 auto;
          padding: var(--space-xxl) 0;
        }

        .profile-content {
          display: grid;
          grid-template-columns: 400px 1fr;
          gap: var(--space-xxl);
          align-items: start;
          opacity: 0;
          transform: translateY(50px);
          transition: all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .profile-content.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* 左侧头像区域 */
        .avatar-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--space-xl);
        }

        .avatar-container {
          position: relative;
          width: 250px;
          height: 250px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .avatar-glow {
          position: absolute;
          top: -20px;
          left: -20px;
          right: -20px;
          bottom: -20px;
          background: radial-gradient(
            circle,
            rgba(0, 255, 136, 0.3) 0%,
            rgba(0, 255, 136, 0.1) 50%,
            transparent 100%
          );
          border-radius: 50%;
          animation: glow-pulse 3s ease-in-out infinite;
        }

        @keyframes glow-pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.1);
            opacity: 1;
          }
        }

        .avatar-image {
          position: relative;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          overflow: hidden;
          transform-style: preserve-3d;
          transition: transform 0.1s ease;
          z-index: 2;
        }

        .avatar-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
        }

        .avatar-border {
          position: absolute;
          top: -3px;
          left: -3px;
          right: -3px;
          bottom: -3px;
          border-radius: 50%;
          background: conic-gradient(
            from 0deg,
            var(--primary-green),
            var(--neon-cyan),
            var(--neon-purple),
            var(--primary-green)
          );
          animation: border-rotate 4s linear infinite;
          z-index: -1;
        }

        @keyframes border-rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .particle-orbit {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 300px;
          height: 300px;
          transform: translate(-50%, -50%);
          border-radius: 50%;
        }

        .orbit-particle {
          position: absolute;
          width: 30px;
          height: 30px;
          background: var(--primary-green);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--dark-blue);
          font-size: 0.8rem;
          animation: orbit 8s linear infinite;
          animation-delay: var(--delay);
          transform-origin: 150px 150px;
          box-shadow: 0 0 15px var(--primary-green);
        }

        @keyframes orbit {
          from { transform: rotate(0deg) translateX(150px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(150px) rotate(-360deg); }
        }

        .achievements-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-md);
          width: 100%;
        }

        /* 导师介绍样式 */
        .mentor-section {
          grid-column: span 2;
          margin-top: var(--space-xl);
          padding: var(--space-lg);
          background: rgba(26, 26, 46, 0.6);
          border-radius: var(--radius-lg);
          border: 1px solid rgba(0, 255, 136, 0.2);
          position: relative;
          overflow: hidden;
        }

        .mentor-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(0, 255, 136, 0.05), transparent);
          transition: left 0.8s ease;
        }

        .mentor-section:hover::before {
          left: 100%;
        }

        .mentor-title {
          color: var(--primary-green);
          font-size: 1.3rem;
          font-weight: 700;
          text-align: center;
          margin-bottom: var(--space-lg);
          text-shadow: 0 0 10px rgba(0, 255, 136, 0.5);
          position: relative;
        }

        .mentor-title::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--primary-green), transparent);
        }

        .mentor-list {
          display: flex;
          flex-direction: column;
          gap: var(--space-lg);
        }

        .mentor-card {
          display: flex;
          gap: var(--space-md);
          align-items: flex-start;
          padding: var(--space-md);
          background: rgba(255, 255, 255, 0.03);
          border-radius: var(--radius-md);
          border: 1px solid rgba(255, 255, 255, 0.08);
          transition: all 0.3s ease;
          position: relative;
        }

        .mentor-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
          border-color: rgba(0, 255, 136, 0.3);
        }

        .mentor-avatar {
          position: relative;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          overflow: hidden;
          flex-shrink: 0;
          border: 2px solid var(--primary-green);
          box-shadow: 0 0 15px rgba(0, 255, 136, 0.3);
        }

        .mentor-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .mentor-card:hover .mentor-avatar img {
          transform: scale(1.05);
        }

        .mentor-glow {
          position: absolute;
          top: -5px;
          left: -5px;
          right: -5px;
          bottom: -5px;
          border-radius: 50%;
          background: conic-gradient(
            from 0deg,
            var(--primary-green),
            var(--neon-cyan),
            var(--primary-green)
          );
          animation: mentor-glow 3s linear infinite;
          z-index: -1;
          opacity: 0.6;
        }

        @keyframes mentor-glow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .mentor-info {
          flex: 1;
          min-width: 0;
        }

        .mentor-name {
          color: #ffffff;
          font-size: 1.1rem;
          font-weight: 700;
          margin: 0 0 var(--space-xs) 0;
          line-height: 1.3;
        }

        .mentor-nickname {
          color: var(--neon-cyan);
          font-size: 0.9rem;
          font-weight: 500;
          margin-left: var(--space-xs);
        }

        .mentor-position {
          color: var(--neon-cyan);
          font-size: 0.95rem;
          font-weight: 600;
          margin: 0 0 var(--space-sm) 0;
          opacity: 0.9;
        }

        .mentor-badges {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-xs);
          margin-bottom: var(--space-sm);
        }

        .badge {
          padding: 0.25rem 0.6rem;
          border-radius: 12px;
          font-size: 0.75rem;
          font-weight: 600;
          transition: all 0.3s ease;
          border: 1px solid;
        }

        .badge.csdn {
          background: rgba(252, 107, 3, 0.15);
          color: #fc6b03;
          border-color: #fc6b03;
        }

        .badge.ali {
          background: rgba(255, 106, 0, 0.15);
          color: #ff6a00;
          border-color: #ff6a00;
        }

        .badge.aws {
          background: rgba(255, 153, 0, 0.15);
          color: #ff9900;
          border-color: #ff9900;
        }

        .badge.education {
          background: rgba(0, 188, 212, 0.15);
          color: #00bcd4;
          border-color: #00bcd4;
        }

        .badge.ethics {
          background: rgba(156, 39, 176, 0.15);
          color: #9c27b0;
          border-color: #9c27b0;
        }

        .badge:hover {
          transform: scale(1.05);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        }

        .mentor-desc {
          color: rgba(255, 255, 255, 0.85);
          font-size: 0.9rem;
          line-height: 1.6;
          margin: 0 0 var(--space-sm) 0;
          text-align: justify;
        }

        .mentor-link {
          display: inline-flex;
          align-items: center;
          gap: var(--space-xs);
          padding: 0.4rem 0.8rem;
          font-size: 0.8rem;
          font-weight: 600;
          text-decoration: none;
          border-radius: var(--radius-sm);
          transition: all 0.3s ease;
          margin-top: var(--space-xs);
          border: 1px solid;
        }

        .mentor-link.csdn-link {
          background: rgba(252, 107, 3, 0.1);
          color: #fc6b03;
          border-color: rgba(252, 107, 3, 0.3);
        }

        .mentor-link.csdn-link:hover {
          background: rgba(252, 107, 3, 0.2);
          border-color: #fc6b03;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(252, 107, 3, 0.3);
        }

        .mentor-link.csdn-link:active {
          transform: translateY(0);
        }

        .link-icon {
          font-size: 0.75rem;
        }

        .achievement-item {
          display: flex;
          align-items: center;
          gap: var(--space-sm);
          background: rgba(26, 26, 46, 0.8);
          padding: var(--space-md);
          border-radius: var(--radius-md);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .achievement-item:hover {
          border-color: var(--achievement-color);
          box-shadow: 0 0 20px var(--achievement-color);
          transform: translateY(-2px);
        }

        .achievement-icon {
          width: 35px;
          height: 35px;
          background: var(--achievement-color);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--dark-blue);
          font-size: 1rem;
          font-weight: bold;
          box-shadow: 0 0 10px var(--achievement-color);
        }

        .achievement-info {
          display: flex;
          flex-direction: column;
        }

        .achievement-value {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--achievement-color);
          line-height: 1;
        }

        .achievement-label {
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.2;
        }

        /* 右侧信息区域 */
        .info-section {
          display: flex;
          flex-direction: column;
          gap: var(--space-xl);
        }

        .neon-title-container {
          text-align: center;
          padding: 1.5rem;
          background: rgba(10, 10, 26, 0.8);
          border-radius: 12px;
          border: 1px solid rgba(0, 255, 136, 0.2);
        }

        .neon-title {
          font-family: 'Arial Black', 'Inter', sans-serif;
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 700;
          color: #00ff88;
          text-shadow: 
            0 0 5px rgba(0, 255, 136, 0.8),
            0 0 10px rgba(0, 255, 136, 0.4);
          letter-spacing: 1px;
          margin: 0;
          line-height: 1.2;
          will-change: transform;
          backface-visibility: hidden;
          -webkit-font-smoothing: antialiased;
          text-rendering: geometricPrecision;
        }

        .name-text {
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .separator {
          margin: 0 0.8rem;
          color: #00ffff;
          font-weight: 400;
          text-shadow: 0 0 3px rgba(0, 255, 255, 0.6);
        }

        .role-text {
          font-weight: 600;
          opacity: 0.9;
          letter-spacing: 0.5px;
        }

        .basic-info {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-md);
        }

        .info-item {
          display: flex;
          align-items: center;
          gap: var(--space-xs);
          color: rgba(255, 255, 255, 0.9);
          font-size: 1rem;
          padding: var(--space-xs) var(--space-sm);
          background: rgba(255, 255, 255, 0.05);
          border-radius: var(--radius-sm);
          border: 1px solid rgba(0, 255, 136, 0.2);
        }

        .info-item svg {
          color: var(--primary-green);
        }

        .typewriter-container {
          background: rgba(26, 26, 46, 0.9);
          padding: var(--space-lg);
          border-radius: var(--radius-md);
          border: 1px solid rgba(0, 255, 136, 0.3);
          min-height: 60px;
          display: flex;
          align-items: center;
          width: 100%;
          box-sizing: border-box;
        }

        .typewriter-text {
          font-size: 1.1rem;
          color: var(--primary-green);
          font-family: var(--font-code);
          line-height: 1.6;
          display: block !important;
          visibility: visible !important;
          opacity: 1 !important;
          width: 100%;
          word-wrap: break-word;
          overflow-wrap: break-word;
        }

        .cursor {
          color: var(--primary-green);
          font-weight: bold;
          margin-left: 2px;
          opacity: 0;
          transition: opacity 0.1s;
          animation: none;
        }

        .cursor.visible {
          opacity: 1;
          animation: cursor-blink 1s infinite;
        }

        @keyframes cursor-blink {
          0%, 50% {
            opacity: 1;
          }
          51%, 100% {
            opacity: 0;
          }
        }

        .bio-section p {
          color: rgba(255, 255, 255, 0.9);
          font-size: 1rem;
          line-height: 1.7;
          margin: 0;
        }

        .tech-tags {
          display: flex;
          flex-direction: column;
          gap: var(--space-md);
        }

        .tag-category h4 {
          color: var(--neon-cyan);
          font-size: 1rem;
          margin-bottom: var(--space-sm);
          border-bottom: 1px solid rgba(0, 255, 255, 0.3);
          padding-bottom: var(--space-xs);
        }

        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-xs);
        }

        .tech-tag {
          padding: var(--space-xs) var(--space-sm);
          border-radius: var(--radius-sm);
          font-size: 0.85rem;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .tech-tag.frontend {
          background: rgba(97, 218, 251, 0.2);
          color: #61dafb;
          border: 1px solid #61dafb;
        }

        .tech-tag.backend {
          background: rgba(55, 153, 51, 0.2);
          color: #379933;
          border: 1px solid #379933;
        }

        .tech-tag.ai {
          background: rgba(255, 111, 0, 0.2);
          color: #ff6f00;
          border: 1px solid #ff6f00;
        }

        .tech-tag:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        }

        .social-links h4 {
          color: var(--primary-green);
          font-size: 1.1rem;
          margin-bottom: var(--space-md);
          border-bottom: 1px solid rgba(0, 255, 136, 0.3);
          padding-bottom: var(--space-xs);
        }

        .social-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--space-sm);
        }

        .social-link {
          display: flex;
          align-items: center;
          gap: var(--space-sm);
          padding: var(--space-sm) var(--space-md);
          background: rgba(26, 26, 46, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: var(--radius-md);
          color: rgba(255, 255, 255, 0.9);
          text-decoration: none;
          transition: all 0.3s ease;
          font-size: 0.9rem;
          cursor: pointer;
          position: relative;
        }

        .social-link:hover {
          border-color: var(--social-color);
          color: var(--social-color);
          box-shadow: 0 0 15px var(--social-color);
          transform: translateY(-2px);
        }

        .social-link:active {
          transform: scale(0.95);
        }

        .social-link svg {
          font-size: 1.1rem;
        }

        .group-photo-section {
          margin-top: 0;
        }

        .group-photo-section h4 {
          color: var(--primary-green);
          font-size: 1.1rem;
          margin-bottom: var(--space-md);
          border-bottom: 1px solid rgba(0, 255, 136, 0.3);
          padding-bottom: var(--space-xs);
        }

        .photo-container {
          background: rgba(26, 26, 46, 0.8);
          border: 1px solid rgba(0, 255, 136, 0.2);
          border-radius: var(--radius-md);
          padding: var(--space-md);
          transition: all 0.3s ease;
        }

        .photo-container:hover {
          border-color: var(--primary-green);
          box-shadow: 0 0 20px rgba(0, 255, 136, 0.3);
          transform: translateY(-2px);
        }

        .group-photo {
          width: 100%;
          height: auto;
          border-radius: var(--radius-sm);
          display: block;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
          transition: transform 0.3s ease;
        }

        .group-photo:hover {
          transform: scale(1.02);
        }

        .photo-caption {
          margin: var(--space-sm) 0 0 0;
          color: var(--neon-cyan);
          font-size: 0.9rem;
          font-style: italic;
          text-align: center;
          opacity: 0.9;
        }

        .copy-notification {
          position: fixed;
          top: 20px;
          right: 20px;
          background: var(--primary-green);
          color: var(--dark-blue);
          padding: var(--space-sm) var(--space-lg);
          border-radius: var(--radius-md);
          font-weight: 600;
          z-index: 1000;
          animation: slideInRight 0.3s ease-out;
        }

        @keyframes slideInRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        /* 响应式设计 */
        @media (max-width: 992px) {
          .profile-content {
            grid-template-columns: 1fr;
            gap: var(--space-xl);
            text-align: center;
          }

          .avatar-container {
            width: 200px;
            height: 200px;
          }

          .avatar-image {
            width: 160px;
            height: 160px;
          }

          .particle-orbit {
            width: 240px;
            height: 240px;
          }

          .orbit-particle {
            transform-origin: 120px 120px;
          }

          @keyframes orbit {
            from { transform: rotate(0deg) translateX(120px) rotate(0deg); }
            to { transform: rotate(360deg) translateX(120px) rotate(-360deg); }
          }

          .neon-title {
            font-size: 2rem;
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
          }

          .separator {
            display: none;
          }
        }

        /* 移动端专属优化 - 修复黑屏问题和容器布局 */
        @media (max-width: 768px) {
          html {
            -webkit-text-size-adjust: 100%;
            font-size: 14px; /* 移动端字体优化 */
          }
          
          body {
            background: #0a0a0a !important;
            overflow-x: hidden;
            min-height: 100vh;
            position: relative;
          }
          
          .container {
            max-width: 100vw !important;
            width: 100% !important;
            padding: 0 1rem !important;
            margin: 0 auto !important;
            overflow-x: hidden !important;
            /* 移动端容器强制显示优化 */
            background: transparent !important;
            position: relative !important;
            z-index: 1 !important;
            display: block !important;
            visibility: visible !important;
            opacity: 1 !important;
            box-sizing: border-box !important;
          }
          
          .profile-wrapper {
            padding: var(--space-lg) 0 !important;
            background: #0a0a0a !important;
            min-height: 100vh !important;
            width: 100% !important;
            overflow-x: hidden !important;
            position: relative !important;
          }
          
          /* 修复profile-content移动端黑屏问题 */
          .profile-content {
            display: flex !important;
            flex-direction: column !important;
            gap: var(--space-lg) !important;
            padding: 1rem !important;
            min-height: calc(100vh - 2rem) !important;
            background: #0a0a0a !important;
            opacity: 1 !important;
            transform: none !important;
            visibility: visible !important;
            width: 100% !important;
            overflow-x: hidden !important;
            box-sizing: border-box !important;
          }
          
          /* 强制显示所有子元素 */
          .profile-content > * {
            opacity: 1 !important;
            transform: none !important;
            visibility: visible !important;
            display: block !important;
            width: 100% !important;
            max-width: 100% !important;
            overflow-x: hidden !important;
            box-sizing: border-box !important;
          }
          
          .profile-content.visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
          }

          .achievements-grid {
            grid-template-columns: 1fr;
          }

          .basic-info {
            justify-content: center;
          }

          .neon-title {
            font-size: 1.8rem;
          }

          .name-text,
          .role-text {
            display: block;
            margin: 0.3rem 0;
          }

          .name-text {
            font-weight: 900;
          }

          .role-text {
            font-weight: 600;
          }

          .social-grid {
            grid-template-columns: 1fr;
          }

          .tech-tags {
            text-align: left;
          }

          /* 移动端打字机效果优化 - 确保动画正常显示 */
          .typewriter-container {
            padding: 1.5rem 1rem !important;
            min-height: 120px !important;
            width: 100% !important;
            box-sizing: border-box !important;
            display: flex !important;
            align-items: flex-start !important;
            background: rgba(26, 26, 46, 0.9) !important;
            border: 1px solid rgba(0, 255, 136, 0.3) !important;
            border-radius: 8px !important;
          }

          .typewriter-text {
            font-size: 0.95rem !important;
            line-height: 1.6 !important;
            text-align: left !important;
            word-break: break-word !important;
            word-wrap: break-word !important;
            overflow-wrap: break-word !important;
            hyphens: auto !important;
            display: inline-block !important;
            visibility: visible !important;
            opacity: 1 !important;
            color: #00ff88 !important;
            font-family: 'Courier New', monospace !important;
            width: 100% !important;
            max-width: 100% !important;
            white-space: pre-wrap !important;
            position: relative !important;
            z-index: 1 !important;
            margin: 0 !important;
            padding: 0 !important;
            transform: none !important;
            filter: none !important;
            text-shadow: 0 0 3px rgba(0, 255, 136, 0.5) !important;
            /* 强制启用动画 */
            animation: none !important;
            transition: none !important;
          }

          .typewriter-text::before {
            content: '' !important;
            display: none !important;
          }

          .typewriter-text::after {
            content: '' !important;
            display: none !important;
          }

          .cursor {
            display: inline !important;
            font-size: 0.95rem !important;
            color: #00ff88 !important;
            opacity: 1 !important;
            margin-left: 2px !important;
            vertical-align: baseline !important;
          }

          .cursor.visible {
            opacity: 1 !important;
            animation: cursor-blink 1s infinite !important;
          }
          
          /* 确保光标闪烁动画在移动端正常工作 */
          @keyframes cursor-blink {
            0%, 50% {
              opacity: 1;
            }
            51%, 100% {
              opacity: 0;
            }
          }

          /* 导师模块响应式 */
          .mentor-section {
            grid-column: span 1;
            padding: var(--space-md);
          }

          .mentor-card {
            flex-direction: column;
            text-align: center;
            gap: var(--space-sm);
          }

          .mentor-avatar {
            width: 60px;
            height: 60px;
            align-self: center;
          }

          .mentor-badges {
            justify-content: center;
          }

          .mentor-desc {
            text-align: center;
            font-size: 0.85rem;
          }
          
          /* 移动端图片优化和加载失败处理 */
          .avatar-image {
            width: 120px !important;
            height: 120px !important;
            max-height: 50vh;
            object-fit: cover !important;
            background: #1a1a2e !important;
            border: 2px solid var(--primary-green) !important;
          }
          
          .avatar-image img {
            width: 100% !important;
            height: 100% !important;
            object-fit: cover !important;
            display: block !important;
          }
          
          .group-photo {
            max-height: 40vh !important;
            width: 100% !important;
            object-fit: contain !important;
            background: #1a1a2e !important;
            border-radius: var(--radius-sm) !important;
          }
          
          /* 移动端容器强制显示优化 */
          .avatar-section,
          .info-section,
          .achievements-grid,
          .mentor-section {
            display: block !important;
            opacity: 1 !important;
            visibility: visible !important;
            width: 100% !important;
            max-width: 100% !important;
            overflow-x: hidden !important;
            box-sizing: border-box !important;
            margin: 0 !important;
            padding: var(--space-sm) 0 !important;
          }
        }

        @media (max-width: 480px) {
          .avatar-container {
            width: 150px;
            height: 150px;
          }

          .avatar-image {
            width: 120px;
            height: 120px;
          }

          .neon-title {
            font-size: 1.6rem;
          }

          .typewriter-container {
            padding: var(--space-sm) !important;
            min-height: 100px !important;
          }

          .typewriter-text {
            font-size: 0.9rem !important;
            line-height: 1.4 !important;
            padding: 0 0.5rem !important;
            display: block !important;
            visibility: visible !important;
            opacity: 1 !important;
            word-break: break-word !important;
            white-space: normal !important;
          }

          .cursor {
            font-size: 0.9rem !important;
          }

          .achievement-item {
            padding: var(--space-sm);
          }

          .achievement-icon {
            width: 30px;
            height: 30px;
            font-size: 0.9rem;
          }

          .achievement-value {
            font-size: 1rem;
          }
        }
      `})]})},K4=()=>{const[e,t]=T.useState(new Set),[n,r]=T.useState(null),[i,o]=T.useState(null),s=T.useRef(null),a=T.useRef(null),l=[{id:1,title:"AI在未来公益项目",subtitle:"亚马逊云科技公益项目参与者",description:'作为学校学生代表参与亚马逊云科技"AI在未来"公益项目，将人工智能技术应用于教育场景',icon:sv,date:"2024年3月",category:"公益项目",achievements:["获得项目参与认证证书","提升AI技术在教育领域的理解","掌握AWS云服务实际应用","增强团队协作和项目管理能力"],highlights:["作为学校学生代表参加2024.8活动","作为学校学生代表参加2025.8活动","项目成果获得导师高度认可","建立了技术社交网络"],color:"#ff6b35",gradient:"linear-gradient(135deg, #ff6b35, #f7931e)"},{id:2,title:"优秀青年开发者",subtitle:"自主学习成就认定",description:"通过自学独立完成并部署多个小型项目网站，展现出优秀的自主学习和实践能力",icon:Qn,date:"2024年6月",category:"技术成就",achievements:["独立完成6个全栈项目","掌握前后端开发技术栈","持续学习和技术实践","建立个人项目作品集"],highlights:["零基础到全栈的完整学习路径","项目代码质量获得社区认可","建立个人技术品牌"],color:"#00ff88",gradient:"linear-gradient(135deg, #00ff88, #00ffff)"},{id:3,title:"创新学习标兵",subtitle:"高中阶段学习成就",description:"在高中阶段展现出卓越的学习能力和创新思维，在信息技术领域取得突出成绩",icon:lv,date:"2024年7月",category:"学术荣誉",achievements:["信息技术课程成绩优异","多次获得学科竞赛奖项","担任编程社团技术顾问","指导同学完成编程项目"],highlights:["年级信息技术成绩第一","获得老师和同学一致认可","为学校编程教育做出贡献"],color:"#ff00ff",gradient:"linear-gradient(135deg, #ff00ff, #8a2be2)"},{id:4,title:"技术创新实践者",subtitle:"持续学习与实践",description:"保持对新技术的敏锐嗅觉，通过实践项目不断提升技能，在技术道路上稳步前进",icon:gh,date:"2024年持续",category:"技能成长",achievements:["掌握多种前后端技术栈","完成个人技术博客建设","持续学习AI相关技术","建立个人技术知识体系"],highlights:["从零基础到独立开发的成长历程","保持每日编程的良好习惯","注重代码质量和最佳实践"],color:"#ffd700",gradient:"linear-gradient(135deg, #ffd700, #ffed4a)"}];T.useEffect(()=>{var f;a.current=new IntersectionObserver(d=>{d.forEach(h=>{if(h.isIntersecting){const g=parseInt(h.target.dataset.honorId);t(p=>new Set([...p,g]))}})},{threshold:.3,rootMargin:"-50px 0px"});const u=(f=s.current)==null?void 0:f.querySelectorAll(".honor-card");return u==null||u.forEach(d=>{a.current.observe(d)}),()=>{var d;(d=a.current)==null||d.disconnect()}},[]);const c=u=>{o(i===u?null:u)};return m.jsxs("section",{id:"honors",className:"section",ref:s,children:[m.jsxs("div",{className:"container",children:[m.jsxs("div",{className:"honors-header text-center mb-lg",children:[m.jsx("h2",{className:"neon-glow",children:"荣誉成就"}),m.jsx("p",{children:"成长路上的重要里程碑，每个荣誉都是努力的见证"})]}),m.jsx("div",{className:"honors-grid",children:l.map((u,f)=>m.jsxs("div",{className:`honor-card ${e.has(u.id)?"visible":""} ${n===u.id?"hovered":""} ${i===u.id?"expanded":""}`,"data-honor-id":u.id,onMouseEnter:()=>r(u.id),onMouseLeave:()=>r(null),onClick:()=>c(u.id),style:{"--delay":`${f*.2}s`,"--honor-color":u.color,"--honor-gradient":u.gradient},children:[m.jsx("div",{className:"card-glow"}),m.jsxs("div",{className:"honor-main",children:[m.jsxs("div",{className:"trophy-container",children:[m.jsx("div",{className:"trophy-icon",children:m.jsx(q,{icon:u.icon})}),m.jsx("div",{className:"trophy-glow"}),m.jsx("div",{className:"trophy-particles",children:[...Array(6)].map((d,h)=>m.jsx("div",{className:"particle"},h))})]}),m.jsxs("div",{className:"honor-content",children:[m.jsx("div",{className:"honor-badge",children:m.jsx("span",{children:u.category})}),m.jsx("h3",{className:"honor-title",children:u.title}),m.jsx("h4",{className:"honor-subtitle",children:u.subtitle}),m.jsxs("div",{className:"honor-date",children:[m.jsx(q,{icon:La}),u.date]}),m.jsx("p",{className:"honor-description",children:u.description}),m.jsxs("div",{className:"expand-hint",children:[m.jsx("span",{children:"点击查看详情"}),m.jsx(q,{icon:co})]})]})]}),m.jsx("div",{className:`honor-details ${i===u.id?"visible":""}`,children:m.jsxs("div",{className:"details-content",children:[m.jsxs("div",{className:"achievements-section",children:[m.jsxs("h4",{children:[m.jsx(q,{icon:Mw}),"主要成就"]}),m.jsx("ul",{className:"achievements-list",children:u.achievements.map((d,h)=>m.jsx("li",{children:d},h))})]}),m.jsxs("div",{className:"highlights-section",children:[m.jsxs("h4",{children:[m.jsx(q,{icon:gh}),"亮点展示"]}),m.jsx("ul",{className:"highlights-list",children:u.highlights.map((d,h)=>m.jsx("li",{children:d},h))})]}),m.jsx("div",{className:"close-details",onClick:d=>{d.stopPropagation(),o(null)},children:m.jsx("span",{children:"收起详情"})})]})}),m.jsx("div",{className:"honor-border"})]},u.id))})]}),m.jsx("style",{jsx:!0,children:`
        .honors-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: var(--space-xl);
          max-width: 1200px;
          margin: 0 auto;
        }

        .honor-card {
          position: relative;
          background: rgba(26, 26, 46, 0.9);
          border-radius: var(--radius-xl);
          overflow: hidden;
          cursor: pointer;
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          transform: translateY(50px);
          opacity: 0;
          border: 2px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
        }

        .honor-card.visible {
          transform: translateY(0);
          opacity: 1;
          transition-delay: var(--delay);
        }

        .honor-card.expanded {
          grid-column: 1 / -1;
          max-width: 100%;
        }

        .card-glow {
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: var(--honor-gradient);
          border-radius: var(--radius-xl);
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -1;
          filter: blur(8px);
        }

        .honor-card:hover .card-glow,
        .honor-card.hovered .card-glow {
          opacity: 0.6;
          animation: glow-pulse 2s ease-in-out infinite;
        }

        @keyframes glow-pulse {
          0%, 100% {
            opacity: 0.6;
            transform: scale(1);
          }
          50% {
            opacity: 0.9;
            transform: scale(1.02);
          }
        }

        .honor-main {
          display: flex;
          gap: var(--space-lg);
          padding: var(--space-xl);
          position: relative;
        }

        .trophy-container {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 120px;
          height: 120px;
          flex-shrink: 0;
        }

        .trophy-icon {
          width: 80px;
          height: 80px;
          background: var(--honor-gradient);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          color: var(--dark-blue);
          box-shadow: 
            0 0 30px var(--honor-color),
            inset 0 0 20px rgba(0, 0, 0, 0.3);
          position: relative;
          z-index: 2;
          transition: all 0.3s ease;
        }

        .honor-card:hover .trophy-icon {
          transform: scale(1.1) rotateY(180deg);
        }

        .trophy-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100px;
          height: 100px;
          background: radial-gradient(circle, var(--honor-color), transparent);
          border-radius: 50%;
          opacity: 0.3;
          animation: trophy-glow 3s ease-in-out infinite;
        }

        @keyframes trophy-glow {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.3;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.3);
            opacity: 0.6;
          }
        }

        .trophy-particles {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 120px;
          height: 120px;
        }

        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: var(--honor-color);
          border-radius: 50%;
          opacity: 0;
        }

        .particle:nth-child(1) {
          top: 10%;
          left: 50%;
          animation: particle-float 4s ease-in-out infinite;
        }

        .particle:nth-child(2) {
          top: 20%;
          right: 20%;
          animation: particle-float 4s ease-in-out infinite 0.5s;
        }

        .particle:nth-child(3) {
          bottom: 20%;
          right: 10%;
          animation: particle-float 4s ease-in-out infinite 1s;
        }

        .particle:nth-child(4) {
          bottom: 10%;
          left: 50%;
          animation: particle-float 4s ease-in-out infinite 1.5s;
        }

        .particle:nth-child(5) {
          bottom: 20%;
          left: 20%;
          animation: particle-float 4s ease-in-out infinite 2s;
        }

        .particle:nth-child(6) {
          top: 20%;
          left: 10%;
          animation: particle-float 4s ease-in-out infinite 2.5s;
        }

        @keyframes particle-float {
          0%, 100% {
            opacity: 0;
            transform: translateY(0) scale(0.5);
          }
          50% {
            opacity: 1;
            transform: translateY(-20px) scale(1);
          }
        }

        .honor-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: var(--space-sm);
        }

        .honor-badge {
          align-self: flex-start;
        }

        .honor-badge span {
          background: var(--honor-color);
          color: var(--dark-blue);
          padding: var(--space-xs) var(--space-sm);
          border-radius: var(--radius-sm);
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          box-shadow: 0 0 15px var(--honor-color);
        }

        .honor-title {
          color: var(--honor-color);
          font-size: 1.6rem;
          font-weight: 700;
          margin: 0;
          text-shadow: 0 0 20px var(--honor-color);
          line-height: 1.2;
        }

        .honor-subtitle {
          color: rgba(255, 255, 255, 0.9);
          font-size: 1.1rem;
          font-weight: 500;
          margin: 0;
          opacity: 0.8;
        }

        .honor-date {
          display: flex;
          align-items: center;
          gap: var(--space-xs);
          color: var(--neon-cyan);
          font-size: 0.9rem;
          font-weight: 600;
        }

        .honor-description {
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
          margin: var(--space-sm) 0;
          font-size: 0.95rem;
        }

        .expand-hint {
          display: flex;
          align-items: center;
          gap: var(--space-xs);
          color: var(--primary-green);
          font-size: 0.9rem;
          font-weight: 600;
          margin-top: auto;
          opacity: 0.7;
          transition: opacity 0.3s ease;
        }

        .honor-card:hover .expand-hint {
          opacity: 1;
        }

        .honor-details {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          background: rgba(0, 0, 0, 0.3);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .honor-details.visible {
          max-height: 500px;
        }

        .details-content {
          padding: var(--space-xl);
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-xl);
        }

        .achievements-section,
        .highlights-section {
          position: relative;
        }

        .achievements-section h4,
        .highlights-section h4 {
          display: flex;
          align-items: center;
          gap: var(--space-sm);
          color: var(--primary-green);
          font-size: 1.1rem;
          margin-bottom: var(--space-md);
          border-bottom: 1px solid rgba(0, 255, 136, 0.3);
          padding-bottom: var(--space-xs);
        }

        .achievements-list,
        .highlights-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .achievements-list li,
        .highlights-list li {
          position: relative;
          padding-left: var(--space-md);
          margin-bottom: var(--space-sm);
          color: rgba(255, 255, 255, 0.9);
          font-size: 0.9rem;
          line-height: 1.5;
        }

        .achievements-list li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--primary-green);
          font-weight: bold;
        }

        .highlights-list li::before {
          content: '★';
          position: absolute;
          left: 0;
          color: var(--neon-purple);
          font-weight: bold;
        }

        .close-details {
          grid-column: 1 / -1;
          text-align: center;
          margin-top: var(--space-md);
          padding: var(--space-sm);
          color: var(--neon-cyan);
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          border-radius: var(--radius-sm);
          transition: all 0.3s ease;
          border: 1px solid rgba(0, 255, 255, 0.3);
        }

        .close-details:hover {
          background: rgba(0, 255, 255, 0.1);
          border-color: var(--neon-cyan);
        }

        .honor-border {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: var(--radius-xl);
          background: conic-gradient(
            from 0deg,
            transparent,
            var(--honor-color),
            transparent,
            var(--honor-color),
            transparent
          );
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -2;
          animation: border-rotate 8s linear infinite;
        }

        .honor-card:hover .honor-border {
          opacity: 0.3;
        }

        @keyframes border-rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* 响应式设计 */
        @media (max-width: 992px) {
          .honors-grid {
            grid-template-columns: 1fr;
            gap: var(--space-lg);
          }

          .honor-main {
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: var(--space-md);
          }

          .trophy-container {
            width: 100px;
            height: 100px;
          }

          .trophy-icon {
            width: 70px;
            height: 70px;
            font-size: 2rem;
          }
        }

        @media (max-width: 768px) {
          .honors-grid {
            grid-template-columns: 1fr;
            gap: var(--space-md);
            padding: 0 var(--space-sm);
          }

          .honor-main {
            padding: var(--space-lg);
          }

          .details-content {
            grid-template-columns: 1fr;
            gap: var(--space-lg);
            padding: var(--space-lg);
          }

          .honor-title {
            font-size: 1.4rem;
          }

          .honor-subtitle {
            font-size: 1rem;
          }

          .trophy-container {
            width: 80px;
            height: 80px;
          }

          .trophy-icon {
            width: 60px;
            height: 60px;
            font-size: 1.8rem;
          }
        }

        @media (max-width: 480px) {
          .honor-main {
            padding: var(--space-md);
          }

          .details-content {
            padding: var(--space-md);
          }

          .honor-title {
            font-size: 1.2rem;
          }

          .honor-description {
            font-size: 0.9rem;
          }

          .achievements-list li,
          .highlights-list li {
            font-size: 0.85rem;
          }
        }
      `})]})},G4=()=>{const[e,t]=T.useState(new Set),[n,r]=T.useState(!1),i=T.useRef(null),o=T.useRef(null),s=[{id:1,title:"羽毛球快速计分板",description:"专为羽毛球比赛设计的实时计分工具，提供直观的比分显示和快速计分功能，让比赛更加专业。",shortDescription:"羽毛球实时计分工具",image:"https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=400&h=240&fit=crop&q=80",link:"https://577840261.github.io/badmintonrapidscoreboard/",github:"https://github.com/577840261/badmintonrapidscoreboard",tags:["HTML5","CSS3","JavaScript","Web API"],category:"体育工具",status:"已部署"},{id:2,title:"羽毛球拍线张力计算器",description:"专业的羽毛球拍穿线张力计算工具，根据球员水平和打法风格推荐最适合的线张力配置。",shortDescription:"球拍张力智能计算",image:"https://images.unsplash.com/photo-1544937684-d73b2a6f44de?w=400&h=240&fit=crop&q=80",link:"https://577840261.github.io/badminton-racket-tension-calculator/",github:"https://github.com/577840261/badminton-racket-tension-calculator",tags:["JavaScript","CSS3","HTML5","算法"],category:"计算工具",status:"已部署"},{id:3,title:"冷笑话生成器",description:"智能冷笑话生成工具，收录大量经典冷笑话并支持随机生成，为生活增添欢声笑语。",shortDescription:"智能冷笑话生成",image:"https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=240&fit=crop&q=80",link:"https://577840261.github.io/Dad-Joke-Engine/",github:"https://github.com/577840261/Dad-Joke-Engine",tags:["JavaScript","JSON","CSS3","响应式设计"],category:"娱乐工具",status:"已部署"},{id:4,title:"情话生成器",description:"浪漫情话智能生成工具，精选各类情话模板，帮助表达爱意，让感情更加甜蜜。",shortDescription:"浪漫情话生成工具",image:"https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=240&fit=crop&q=80",link:"https://577840261.github.io/LoveWords/",github:"https://github.com/577840261/LoveWords",tags:["JavaScript","CSS3","HTML5","动画效果"],category:"生活工具",status:"已部署"},{id:5,title:"AI辩论竞赛",description:"模拟AI辩论比赛的互动平台，支持多种辩论主题，展示人工智能的逻辑思维和语言能力。",shortDescription:"AI智能辩论平台",image:"https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=240&fit=crop&q=80",link:"https://577840261.github.io/AI-Debate-Competition/",github:"https://github.com/577840261/AI-Debate-Competition",tags:["JavaScript","AI算法","CSS3","交互设计"],category:"AI应用",status:"已部署"},{id:6,title:"人生时钟",description:"以独特的时钟形式展示人生时光流逝，帮助用户珍惜时间，思考人生意义的哲理工具。",shortDescription:"人生哲理时钟工具",image:"https://images.unsplash.com/photo-1501139083538-0139583c060f?w=400&h=240&fit=crop&q=80",link:"https://577840261.github.io/-LifeClock/",github:"https://github.com/577840261/-LifeClock",tags:["JavaScript","Canvas","时间算法","动画"],category:"哲理工具",status:"已部署"}];T.useEffect(()=>{const f=()=>{r(window.innerWidth<=768)};return f(),window.addEventListener("resize",f),()=>window.removeEventListener("resize",f)},[]),T.useEffect(()=>{var d;o.current=new IntersectionObserver(h=>{h.forEach(g=>{if(g.isIntersecting){const p=parseInt(g.target.dataset.projectId);t(b=>new Set([...b,p]))}})},{threshold:.1,rootMargin:"50px 0px"});const f=(d=i.current)==null?void 0:d.querySelectorAll(".project-card");return f==null||f.forEach(h=>{o.current.observe(h)}),()=>{var h;(h=o.current)==null||h.disconnect()}},[s]);const a=f=>({React:"#61dafb","Vue.js":"#4fc08d",Python:"#3776ab",JavaScript:"#f7df1e","Node.js":"#339933",HTML5:"#e34f26",CSS3:"#1572b6",AI算法:"#ff6b6b",Canvas:"#ff9f43","Web API":"#00d2d3"})[f]||"#00ff88",l=f=>({已部署:"#00ff88",已完成:"#00ffff",开发中:"#ffff00",测试中:"#ff6600"})[f]||"#00ff88",c=f=>{f&&window.open(f,"_blank","noopener,noreferrer")},u=(f,d)=>{f.stopPropagation(),d&&window.open(d,"_blank","noopener,noreferrer")};return m.jsxs("section",{id:"projects",className:"section",ref:i,children:[m.jsxs("div",{className:"container mobile-container",children:[m.jsxs("div",{className:"projects-header",children:[m.jsx("h2",{className:"neon-glow",children:"项目展示"}),m.jsx("p",{className:"section-subtitle",children:"从想法到实现，每个项目都是成长的足迹"})]}),m.jsx("div",{className:"projects-grid",children:s.map((f,d)=>m.jsxs("div",{className:`project-card ${e.has(f.id)?"visible":""}`,"data-project-id":f.id,onClick:()=>c(f.link),style:{"--delay":`${d*.1}s`,"--status-color":l(f.status)},children:[m.jsxs("div",{className:"project-image",children:[m.jsx("img",{src:f.image,alt:f.title,loading:"lazy"}),m.jsxs("div",{className:"image-overlay",children:[m.jsx("div",{className:"project-category",children:f.category}),m.jsx("div",{className:"project-status",children:f.status})]})]}),m.jsxs("div",{className:"project-content",children:[m.jsx("h3",{className:"project-title",children:f.title}),m.jsx("p",{className:"project-description",children:n?f.shortDescription:f.description}),m.jsxs("div",{className:"tech-tags",children:[(n?f.tags.slice(0,3):f.tags).map((h,g)=>m.jsx("span",{className:"tech-tag",style:{"--tech-color":a(h)},children:h},g)),n&&f.tags.length>3&&m.jsxs("span",{className:"tech-more",children:["+",f.tags.length-3]})]}),m.jsxs("div",{className:"project-actions",children:[m.jsxs("button",{className:"action-btn primary-btn",onClick:()=>c(f.link),"aria-label":`查看${f.title}项目`,children:[m.jsx("i",{className:"fas fa-external-link-alt"}),"查看项目"]}),m.jsxs("button",{className:"action-btn secondary-btn",onClick:h=>u(h,f.github),"aria-label":`查看${f.title}源码`,children:[m.jsx("i",{className:"fab fa-github"}),n?"源码":"查看源码"]})]})]}),m.jsx("div",{className:"card-glow"})]},f.id))})]}),m.jsx("style",{jsx:!0,children:`
        /* 基础布局样式 */
        .container.mobile-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
          box-sizing: border-box;
        }

        .projects-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .projects-header h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-subtitle {
          color: rgba(255, 255, 255, 0.8);
          font-size: 1.1rem;
          margin: 0;
        }

        /* 响应式网格布局 */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
          width: 100%;
        }

        /* 项目卡片样式 */
        .project-card {
          position: relative;
          background: rgba(26, 26, 46, 0.9);
          border-radius: var(--radius-lg);
          border: 1px solid rgba(0, 255, 136, 0.2);
          overflow: hidden;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          transform: translateY(50px);
          opacity: 0;
          animation-delay: var(--delay);
          backdrop-filter: blur(10px);
          min-height: 400px;
          display: flex;
          flex-direction: column;
        }

        .project-card.visible {
          transform: translateY(0);
          opacity: 1;
          animation: slideInUp 0.6s ease-out forwards;
        }

        .project-card:hover {
          transform: translateY(-8px);
          border-color: var(--primary-green);
          box-shadow: 
            0 20px 40px rgba(0, 255, 136, 0.2),
            0 0 60px rgba(0, 255, 136, 0.1);
        }

        /* 项目图片区域 */
        .project-image {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .project-card:hover .project-image img {
          transform: scale(1.1);
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            135deg,
            rgba(0, 0, 0, 0.3) 0%,
            rgba(0, 0, 0, 0.7) 100%
          );
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding: 1rem;
        }

        .project-category {
          background: var(--gradient-primary);
          color: var(--dark-blue);
          padding: 0.5rem 1rem;
          border-radius: var(--radius-sm);
          font-size: 0.8rem;
          font-weight: 700;
          box-shadow: 0 0 20px rgba(0, 255, 136, 0.4);
        }

        .project-status {
          background: var(--status-color);
          color: var(--dark-blue);
          padding: 0.5rem 1rem;
          border-radius: var(--radius-sm);
          font-size: 0.8rem;
          font-weight: 700;
          box-shadow: 0 0 15px var(--status-color);
        }

        /* 项目内容区域 */
        .project-content {
          padding: 1.5rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .project-title {
          color: var(--primary-green);
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 1rem;
          line-height: 1.3;
          text-shadow: 0 0 10px rgba(0, 255, 136, 0.3);
        }

        .project-description {
          color: rgba(255, 255, 255, 0.9);
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
          flex: 1;
        }

        /* 技术标签 */
        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .tech-tag {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--tech-color);
          color: var(--tech-color);
          padding: 0.4rem 0.8rem;
          border-radius: var(--radius-sm);
          font-size: 0.8rem;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .tech-tag:hover {
          background: var(--tech-color);
          color: var(--dark-blue);
          box-shadow: 0 0 15px var(--tech-color);
        }

        .tech-more {
          background: rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.7);
          padding: 0.4rem 0.8rem;
          border-radius: var(--radius-sm);
          font-size: 0.8rem;
          font-weight: 600;
        }

        /* 操作按钮 */
        .project-actions {
          display: flex;
          gap: 1rem;
        }

        .action-btn {
          flex: 1;
          padding: 0.8rem 1.2rem;
          border: none;
          border-radius: var(--radius-md);
          font-family: var(--font-primary);
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          text-decoration: none;
          min-height: 48px;
          touch-action: manipulation;
        }

        .primary-btn {
          background: var(--gradient-primary);
          color: var(--dark-blue);
          box-shadow: 0 0 20px rgba(0, 255, 136, 0.3);
        }

        .primary-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 30px rgba(0, 255, 136, 0.5);
        }

        .primary-btn:active {
          transform: translateY(0);
        }

        .secondary-btn {
          background: rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .secondary-btn:hover {
          background: rgba(255, 255, 255, 0.2);
          color: #ffffff;
          border-color: rgba(255, 255, 255, 0.4);
        }

        /* 光效 */
        .card-glow {
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          border-radius: var(--radius-lg);
          background: conic-gradient(
            from 0deg,
            transparent,
            var(--primary-green),
            transparent,
            var(--neon-purple),
            transparent
          );
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -1;
          animation: rotate 4s linear infinite;
        }

        .project-card:hover .card-glow {
          opacity: 0.3;
        }

        /* 动画定义 */
        @keyframes slideInUp {
          from {
            transform: translateY(50px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* 移动端响应式设计 */
        @media (max-width: 768px) {
          .container.mobile-container {
            padding: 1rem;
          }

          .projects-header {
            margin-bottom: 2rem;
          }

          .projects-header h2 {
            font-size: 2rem;
          }

          .section-subtitle {
            font-size: 1rem;
          }

          .projects-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .project-card {
            min-height: 350px;
          }

          .project-image {
            height: 160px;
          }

          .project-content {
            padding: 1rem;
          }

          .project-title {
            font-size: 1.2rem;
          }

          .project-description {
            font-size: 0.9rem;
            line-height: 1.5;
          }

          .tech-tags {
            gap: 0.4rem;
            margin-bottom: 1rem;
          }

          .tech-tag {
            font-size: 0.75rem;
            padding: 0.3rem 0.6rem;
          }

          .project-actions {
            flex-direction: column;
            gap: 0.8rem;
          }

          .action-btn {
            padding: 0.8rem 1rem;
            font-size: 0.9rem;
          }
        }

        @media (max-width: 480px) {
          .container.mobile-container {
            padding: 0.8rem;
          }

          .projects-header h2 {
            font-size: 1.8rem;
          }

          .projects-grid {
            gap: 1rem;
          }

          .project-card {
            min-height: 320px;
          }

          .project-image {
            height: 140px;
          }

          .project-content {
            padding: 0.8rem;
          }

          .project-title {
            font-size: 1.1rem;
            margin-bottom: 0.8rem;
          }

          .project-description {
            font-size: 0.85rem;
            margin-bottom: 1rem;
          }

          .tech-tag {
            font-size: 0.7rem;
            padding: 0.25rem 0.5rem;
          }

          .action-btn {
            padding: 0.7rem 0.8rem;
            font-size: 0.85rem;
            min-height: 44px;
          }
        }

        /* 高分辨率屏幕优化 */
        @media (min-width: 1200px) {
          .projects-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        /* 性能优化 */
        @media (prefers-reduced-motion: reduce) {
          .project-card,
          .project-image img,
          .action-btn {
            transition: none;
          }
          
          .card-glow {
            animation: none;
          }
        }

        /* 高对比度模式支持 */
        @media (prefers-contrast: high) {
          .project-card {
            border-width: 2px;
            border-color: var(--primary-green);
          }
          
          .tech-tag {
            border-width: 2px;
          }
        }
      `})]})};/*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */function Eo(e){return e+.5|0}const dn=(e,t,n)=>Math.max(Math.min(e,n),t);function ki(e){return dn(Eo(e*2.55),0,255)}function kn(e){return dn(Eo(e*255),0,255)}function Ht(e){return dn(Eo(e/2.55)/100,0,1)}function Ph(e){return dn(Eo(e*100),0,100)}const it={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},Xc=[..."0123456789ABCDEF"],Q4=e=>Xc[e&15],q4=e=>Xc[(e&240)>>4]+Xc[e&15],Go=e=>(e&240)>>4===(e&15),J4=e=>Go(e.r)&&Go(e.g)&&Go(e.b)&&Go(e.a);function Z4(e){var t=e.length,n;return e[0]==="#"&&(t===4||t===5?n={r:255&it[e[1]]*17,g:255&it[e[2]]*17,b:255&it[e[3]]*17,a:t===5?it[e[4]]*17:255}:(t===7||t===9)&&(n={r:it[e[1]]<<4|it[e[2]],g:it[e[3]]<<4|it[e[4]],b:it[e[5]]<<4|it[e[6]],a:t===9?it[e[7]]<<4|it[e[8]]:255})),n}const e3=(e,t)=>e<255?t(e):"";function t3(e){var t=J4(e)?Q4:q4;return e?"#"+t(e.r)+t(e.g)+t(e.b)+e3(e.a,t):void 0}const n3=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function _v(e,t,n){const r=t*Math.min(n,1-n),i=(o,s=(o+e/30)%12)=>n-r*Math.max(Math.min(s-3,9-s,1),-1);return[i(0),i(8),i(4)]}function r3(e,t,n){const r=(i,o=(i+e/60)%6)=>n-n*t*Math.max(Math.min(o,4-o,1),0);return[r(5),r(3),r(1)]}function i3(e,t,n){const r=_v(e,1,.5);let i;for(t+n>1&&(i=1/(t+n),t*=i,n*=i),i=0;i<3;i++)r[i]*=1-t-n,r[i]+=t;return r}function o3(e,t,n,r,i){return e===i?(t-n)/r+(t<n?6:0):t===i?(n-e)/r+2:(e-t)/r+4}function pf(e){const n=e.r/255,r=e.g/255,i=e.b/255,o=Math.max(n,r,i),s=Math.min(n,r,i),a=(o+s)/2;let l,c,u;return o!==s&&(u=o-s,c=a>.5?u/(2-o-s):u/(o+s),l=o3(n,r,i,u,o),l=l*60+.5),[l|0,c||0,a]}function mf(e,t,n,r){return(Array.isArray(t)?e(t[0],t[1],t[2]):e(t,n,r)).map(kn)}function gf(e,t,n){return mf(_v,e,t,n)}function s3(e,t,n){return mf(i3,e,t,n)}function a3(e,t,n){return mf(r3,e,t,n)}function kv(e){return(e%360+360)%360}function l3(e){const t=n3.exec(e);let n=255,r;if(!t)return;t[5]!==r&&(n=t[6]?ki(+t[5]):kn(+t[5]));const i=kv(+t[2]),o=+t[3]/100,s=+t[4]/100;return t[1]==="hwb"?r=s3(i,o,s):t[1]==="hsv"?r=a3(i,o,s):r=gf(i,o,s),{r:r[0],g:r[1],b:r[2],a:n}}function c3(e,t){var n=pf(e);n[0]=kv(n[0]+t),n=gf(n),e.r=n[0],e.g=n[1],e.b=n[2]}function u3(e){if(!e)return;const t=pf(e),n=t[0],r=Ph(t[1]),i=Ph(t[2]);return e.a<255?`hsla(${n}, ${r}%, ${i}%, ${Ht(e.a)})`:`hsl(${n}, ${r}%, ${i}%)`}const Eh={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},Mh={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function f3(){const e={},t=Object.keys(Mh),n=Object.keys(Eh);let r,i,o,s,a;for(r=0;r<t.length;r++){for(s=a=t[r],i=0;i<n.length;i++)o=n[i],a=a.replace(o,Eh[o]);o=parseInt(Mh[s],16),e[a]=[o>>16&255,o>>8&255,o&255]}return e}let Qo;function d3(e){Qo||(Qo=f3(),Qo.transparent=[0,0,0,0]);const t=Qo[e.toLowerCase()];return t&&{r:t[0],g:t[1],b:t[2],a:t.length===4?t[3]:255}}const h3=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function p3(e){const t=h3.exec(e);let n=255,r,i,o;if(t){if(t[7]!==r){const s=+t[7];n=t[8]?ki(s):dn(s*255,0,255)}return r=+t[1],i=+t[3],o=+t[5],r=255&(t[2]?ki(r):dn(r,0,255)),i=255&(t[4]?ki(i):dn(i,0,255)),o=255&(t[6]?ki(o):dn(o,0,255)),{r,g:i,b:o,a:n}}}function m3(e){return e&&(e.a<255?`rgba(${e.r}, ${e.g}, ${e.b}, ${Ht(e.a)})`:`rgb(${e.r}, ${e.g}, ${e.b})`)}const kl=e=>e<=.0031308?e*12.92:Math.pow(e,1/2.4)*1.055-.055,mr=e=>e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4);function g3(e,t,n){const r=mr(Ht(e.r)),i=mr(Ht(e.g)),o=mr(Ht(e.b));return{r:kn(kl(r+n*(mr(Ht(t.r))-r))),g:kn(kl(i+n*(mr(Ht(t.g))-i))),b:kn(kl(o+n*(mr(Ht(t.b))-o))),a:e.a+n*(t.a-e.a)}}function qo(e,t,n){if(e){let r=pf(e);r[t]=Math.max(0,Math.min(r[t]+r[t]*n,t===0?360:1)),r=gf(r),e.r=r[0],e.g=r[1],e.b=r[2]}}function Sv(e,t){return e&&Object.assign(t||{},e)}function Nh(e){var t={r:0,g:0,b:0,a:255};return Array.isArray(e)?e.length>=3&&(t={r:e[0],g:e[1],b:e[2],a:255},e.length>3&&(t.a=kn(e[3]))):(t=Sv(e,{r:0,g:0,b:0,a:1}),t.a=kn(t.a)),t}function v3(e){return e.charAt(0)==="r"?p3(e):l3(e)}class ho{constructor(t){if(t instanceof ho)return t;const n=typeof t;let r;n==="object"?r=Nh(t):n==="string"&&(r=Z4(t)||d3(t)||v3(t)),this._rgb=r,this._valid=!!r}get valid(){return this._valid}get rgb(){var t=Sv(this._rgb);return t&&(t.a=Ht(t.a)),t}set rgb(t){this._rgb=Nh(t)}rgbString(){return this._valid?m3(this._rgb):void 0}hexString(){return this._valid?t3(this._rgb):void 0}hslString(){return this._valid?u3(this._rgb):void 0}mix(t,n){if(t){const r=this.rgb,i=t.rgb;let o;const s=n===o?.5:n,a=2*s-1,l=r.a-i.a,c=((a*l===-1?a:(a+l)/(1+a*l))+1)/2;o=1-c,r.r=255&c*r.r+o*i.r+.5,r.g=255&c*r.g+o*i.g+.5,r.b=255&c*r.b+o*i.b+.5,r.a=s*r.a+(1-s)*i.a,this.rgb=r}return this}interpolate(t,n){return t&&(this._rgb=g3(this._rgb,t._rgb,n)),this}clone(){return new ho(this.rgb)}alpha(t){return this._rgb.a=kn(t),this}clearer(t){const n=this._rgb;return n.a*=1-t,this}greyscale(){const t=this._rgb,n=Eo(t.r*.3+t.g*.59+t.b*.11);return t.r=t.g=t.b=n,this}opaquer(t){const n=this._rgb;return n.a*=1+t,this}negate(){const t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return qo(this._rgb,2,t),this}darken(t){return qo(this._rgb,2,-t),this}saturate(t){return qo(this._rgb,1,t),this}desaturate(t){return qo(this._rgb,1,-t),this}rotate(t){return c3(this._rgb,t),this}}/*!
 * Chart.js v4.5.0
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */function Dt(){}const y3=(()=>{let e=0;return()=>e++})();function re(e){return e==null}function de(e){if(Array.isArray&&Array.isArray(e))return!0;const t=Object.prototype.toString.call(e);return t.slice(0,7)==="[object"&&t.slice(-6)==="Array]"}function K(e){return e!==null&&Object.prototype.toString.call(e)==="[object Object]"}function ze(e){return(typeof e=="number"||e instanceof Number)&&isFinite(+e)}function Et(e,t){return ze(e)?e:t}function X(e,t){return typeof e>"u"?t:e}const x3=(e,t)=>typeof e=="string"&&e.endsWith("%")?parseFloat(e)/100*t:+e;function ee(e,t,n){if(e&&typeof e.call=="function")return e.apply(n,t)}function J(e,t,n,r){let i,o,s;if(de(e))for(o=e.length,i=0;i<o;i++)t.call(n,e[i],i);else if(K(e))for(s=Object.keys(e),o=s.length,i=0;i<o;i++)t.call(n,e[s[i]],s[i])}function ia(e,t){let n,r,i,o;if(!e||!t||e.length!==t.length)return!1;for(n=0,r=e.length;n<r;++n)if(i=e[n],o=t[n],i.datasetIndex!==o.datasetIndex||i.index!==o.index)return!1;return!0}function oa(e){if(de(e))return e.map(oa);if(K(e)){const t=Object.create(null),n=Object.keys(e),r=n.length;let i=0;for(;i<r;++i)t[n[i]]=oa(e[n[i]]);return t}return e}function Cv(e){return["__proto__","prototype","constructor"].indexOf(e)===-1}function b3(e,t,n,r){if(!Cv(e))return;const i=t[e],o=n[e];K(i)&&K(o)?po(i,o,r):t[e]=oa(o)}function po(e,t,n){const r=de(t)?t:[t],i=r.length;if(!K(e))return e;n=n||{};const o=n.merger||b3;let s;for(let a=0;a<i;++a){if(s=r[a],!K(s))continue;const l=Object.keys(s);for(let c=0,u=l.length;c<u;++c)o(l[c],e,s,n)}return e}function $i(e,t){return po(e,t,{merger:w3})}function w3(e,t,n){if(!Cv(e))return;const r=t[e],i=n[e];K(r)&&K(i)?$i(r,i):Object.prototype.hasOwnProperty.call(t,e)||(t[e]=oa(i))}const Oh={"":e=>e,x:e=>e.x,y:e=>e.y};function _3(e){const t=e.split("."),n=[];let r="";for(const i of t)r+=i,r.endsWith("\\")?r=r.slice(0,-1)+".":(n.push(r),r="");return n}function k3(e){const t=_3(e);return n=>{for(const r of t){if(r==="")break;n=n&&n[r]}return n}}function mo(e,t){return(Oh[t]||(Oh[t]=k3(t)))(e)}function vf(e){return e.charAt(0).toUpperCase()+e.slice(1)}const sa=e=>typeof e<"u",Nn=e=>typeof e=="function",jh=(e,t)=>{if(e.size!==t.size)return!1;for(const n of e)if(!t.has(n))return!1;return!0};function S3(e){return e.type==="mouseup"||e.type==="click"||e.type==="contextmenu"}const _e=Math.PI,Ze=2*_e,C3=Ze+_e,aa=Number.POSITIVE_INFINITY,P3=_e/180,qe=_e/2,Ln=_e/4,Th=_e*2/3,Pv=Math.log10,Gr=Math.sign;function Wi(e,t,n){return Math.abs(e-t)<n}function Ah(e){const t=Math.round(e);e=Wi(e,t,e/1e3)?t:e;const n=Math.pow(10,Math.floor(Pv(e))),r=e/n;return(r<=1?1:r<=2?2:r<=5?5:10)*n}function E3(e){const t=[],n=Math.sqrt(e);let r;for(r=1;r<n;r++)e%r===0&&(t.push(r),t.push(e/r));return n===(n|0)&&t.push(n),t.sort((i,o)=>i-o).pop(),t}function M3(e){return typeof e=="symbol"||typeof e=="object"&&e!==null&&!(Symbol.toPrimitive in e||"toString"in e||"valueOf"in e)}function la(e){return!M3(e)&&!isNaN(parseFloat(e))&&isFinite(e)}function N3(e,t){const n=Math.round(e);return n-t<=e&&n+t>=e}function O3(e,t,n){let r,i,o;for(r=0,i=e.length;r<i;r++)o=e[r][n],isNaN(o)||(t.min=Math.min(t.min,o),t.max=Math.max(t.max,o))}function Xn(e){return e*(_e/180)}function yf(e){return e*(180/_e)}function zh(e){if(!ze(e))return;let t=1,n=0;for(;Math.round(e*t)/t!==e;)t*=10,n++;return n}function j3(e,t){const n=t.x-e.x,r=t.y-e.y,i=Math.sqrt(n*n+r*r);let o=Math.atan2(r,n);return o<-.5*_e&&(o+=Ze),{angle:o,distance:i}}function Kc(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function T3(e,t){return(e-t+C3)%Ze-_e}function Ge(e){return(e%Ze+Ze)%Ze}function Ev(e,t,n,r){const i=Ge(e),o=Ge(t),s=Ge(n),a=Ge(o-i),l=Ge(s-i),c=Ge(i-o),u=Ge(i-s);return i===o||i===s||r&&o===s||a>l&&c<u}function Vt(e,t,n){return Math.max(t,Math.min(n,e))}function A3(e){return Vt(e,-32768,32767)}function Or(e,t,n,r=1e-6){return e>=Math.min(t,n)-r&&e<=Math.max(t,n)+r}function xf(e,t,n){n=n||(s=>e[s]<t);let r=e.length-1,i=0,o;for(;r-i>1;)o=i+r>>1,n(o)?i=o:r=o;return{lo:i,hi:r}}const Gc=(e,t,n,r)=>xf(e,n,r?i=>{const o=e[i][t];return o<n||o===n&&e[i+1][t]===n}:i=>e[i][t]<n),z3=(e,t,n)=>xf(e,n,r=>e[r][t]>=n);function L3(e,t,n){let r=0,i=e.length;for(;r<i&&e[r]<t;)r++;for(;i>r&&e[i-1]>n;)i--;return r>0||i<e.length?e.slice(r,i):e}const Mv=["push","pop","shift","splice","unshift"];function I3(e,t){if(e._chartjs){e._chartjs.listeners.push(t);return}Object.defineProperty(e,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[t]}}),Mv.forEach(n=>{const r="_onData"+vf(n),i=e[n];Object.defineProperty(e,n,{configurable:!0,enumerable:!1,value(...o){const s=i.apply(this,o);return e._chartjs.listeners.forEach(a=>{typeof a[r]=="function"&&a[r](...o)}),s}})})}function Lh(e,t){const n=e._chartjs;if(!n)return;const r=n.listeners,i=r.indexOf(t);i!==-1&&r.splice(i,1),!(r.length>0)&&(Mv.forEach(o=>{delete e[o]}),delete e._chartjs)}function D3(e){const t=new Set(e);return t.size===e.length?e:Array.from(t)}const Nv=function(){return typeof window>"u"?function(e){return e()}:window.requestAnimationFrame}();function Ov(e,t){let n=[],r=!1;return function(...i){n=i,r||(r=!0,Nv.call(window,()=>{r=!1,e.apply(t,n)}))}}function R3(e,t){let n;return function(...r){return t?(clearTimeout(n),n=setTimeout(e,t,r)):e.apply(this,r),t}}const jv=e=>e==="start"?"left":e==="end"?"right":"center",Xe=(e,t,n)=>e==="start"?t:e==="end"?n:(t+n)/2,F3=(e,t,n,r)=>e===(r?"left":"right")?n:e==="center"?(t+n)/2:t,Jo=e=>e===0||e===1,Ih=(e,t,n)=>-(Math.pow(2,10*(e-=1))*Math.sin((e-t)*Ze/n)),Dh=(e,t,n)=>Math.pow(2,-10*e)*Math.sin((e-t)*Ze/n)+1,Hi={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>-e*(e-2),easeInOutQuad:e=>(e/=.5)<1?.5*e*e:-.5*(--e*(e-2)-1),easeInCubic:e=>e*e*e,easeOutCubic:e=>(e-=1)*e*e+1,easeInOutCubic:e=>(e/=.5)<1?.5*e*e*e:.5*((e-=2)*e*e+2),easeInQuart:e=>e*e*e*e,easeOutQuart:e=>-((e-=1)*e*e*e-1),easeInOutQuart:e=>(e/=.5)<1?.5*e*e*e*e:-.5*((e-=2)*e*e*e-2),easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>(e-=1)*e*e*e*e+1,easeInOutQuint:e=>(e/=.5)<1?.5*e*e*e*e*e:.5*((e-=2)*e*e*e*e+2),easeInSine:e=>-Math.cos(e*qe)+1,easeOutSine:e=>Math.sin(e*qe),easeInOutSine:e=>-.5*(Math.cos(_e*e)-1),easeInExpo:e=>e===0?0:Math.pow(2,10*(e-1)),easeOutExpo:e=>e===1?1:-Math.pow(2,-10*e)+1,easeInOutExpo:e=>Jo(e)?e:e<.5?.5*Math.pow(2,10*(e*2-1)):.5*(-Math.pow(2,-10*(e*2-1))+2),easeInCirc:e=>e>=1?e:-(Math.sqrt(1-e*e)-1),easeOutCirc:e=>Math.sqrt(1-(e-=1)*e),easeInOutCirc:e=>(e/=.5)<1?-.5*(Math.sqrt(1-e*e)-1):.5*(Math.sqrt(1-(e-=2)*e)+1),easeInElastic:e=>Jo(e)?e:Ih(e,.075,.3),easeOutElastic:e=>Jo(e)?e:Dh(e,.075,.3),easeInOutElastic(e){return Jo(e)?e:e<.5?.5*Ih(e*2,.1125,.45):.5+.5*Dh(e*2-1,.1125,.45)},easeInBack(e){return e*e*((1.70158+1)*e-1.70158)},easeOutBack(e){return(e-=1)*e*((1.70158+1)*e+1.70158)+1},easeInOutBack(e){let t=1.70158;return(e/=.5)<1?.5*(e*e*(((t*=1.525)+1)*e-t)):.5*((e-=2)*e*(((t*=1.525)+1)*e+t)+2)},easeInBounce:e=>1-Hi.easeOutBounce(1-e),easeOutBounce(e){return e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375},easeInOutBounce:e=>e<.5?Hi.easeInBounce(e*2)*.5:Hi.easeOutBounce(e*2-1)*.5+.5};function bf(e){if(e&&typeof e=="object"){const t=e.toString();return t==="[object CanvasPattern]"||t==="[object CanvasGradient]"}return!1}function Rh(e){return bf(e)?e:new ho(e)}function Sl(e){return bf(e)?e:new ho(e).saturate(.5).darken(.1).hexString()}const $3=["x","y","borderWidth","radius","tension"],W3=["color","borderColor","backgroundColor"];function H3(e){e.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),e.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:t=>t!=="onProgress"&&t!=="onComplete"&&t!=="fn"}),e.set("animations",{colors:{type:"color",properties:W3},numbers:{type:"number",properties:$3}}),e.describe("animations",{_fallback:"animation"}),e.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>t|0}}}})}function B3(e){e.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const Fh=new Map;function U3(e,t){t=t||{};const n=e+JSON.stringify(t);let r=Fh.get(n);return r||(r=new Intl.NumberFormat(e,t),Fh.set(n,r)),r}function Tv(e,t,n){return U3(t,n).format(e)}const V3={values(e){return de(e)?e:""+e},numeric(e,t,n){if(e===0)return"0";const r=this.chart.options.locale;let i,o=e;if(n.length>1){const c=Math.max(Math.abs(n[0].value),Math.abs(n[n.length-1].value));(c<1e-4||c>1e15)&&(i="scientific"),o=Y3(e,n)}const s=Pv(Math.abs(o)),a=isNaN(s)?1:Math.max(Math.min(-1*Math.floor(s),20),0),l={notation:i,minimumFractionDigits:a,maximumFractionDigits:a};return Object.assign(l,this.options.ticks.format),Tv(e,r,l)}};function Y3(e,t){let n=t.length>3?t[2].value-t[1].value:t[1].value-t[0].value;return Math.abs(n)>=1&&e!==Math.floor(e)&&(n=e-Math.floor(e)),n}var Av={formatters:V3};function X3(e){e.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(t,n)=>n.lineWidth,tickColor:(t,n)=>n.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:Av.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),e.route("scale.ticks","color","","color"),e.route("scale.grid","color","","borderColor"),e.route("scale.border","color","","borderColor"),e.route("scale.title","color","","color"),e.describe("scale",{_fallback:!1,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&t!=="callback"&&t!=="parser",_indexable:t=>t!=="borderDash"&&t!=="tickBorderDash"&&t!=="dash"}),e.describe("scales",{_fallback:"scale"}),e.describe("scale.ticks",{_scriptable:t=>t!=="backdropPadding"&&t!=="callback",_indexable:t=>t!=="backdropPadding"})}const ar=Object.create(null),Qc=Object.create(null);function Bi(e,t){if(!t)return e;const n=t.split(".");for(let r=0,i=n.length;r<i;++r){const o=n[r];e=e[o]||(e[o]=Object.create(null))}return e}function Cl(e,t,n){return typeof t=="string"?po(Bi(e,t),n):po(Bi(e,""),t)}class K3{constructor(t,n){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=r=>r.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(r,i)=>Sl(i.backgroundColor),this.hoverBorderColor=(r,i)=>Sl(i.borderColor),this.hoverColor=(r,i)=>Sl(i.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t),this.apply(n)}set(t,n){return Cl(this,t,n)}get(t){return Bi(this,t)}describe(t,n){return Cl(Qc,t,n)}override(t,n){return Cl(ar,t,n)}route(t,n,r,i){const o=Bi(this,t),s=Bi(this,r),a="_"+n;Object.defineProperties(o,{[a]:{value:o[n],writable:!0},[n]:{enumerable:!0,get(){const l=this[a],c=s[i];return K(l)?Object.assign({},c,l):X(l,c)},set(l){this[a]=l}}})}apply(t){t.forEach(n=>n(this))}}var he=new K3({_scriptable:e=>!e.startsWith("on"),_indexable:e=>e!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[H3,B3,X3]);function G3(e){return!e||re(e.size)||re(e.family)?null:(e.style?e.style+" ":"")+(e.weight?e.weight+" ":"")+e.size+"px "+e.family}function ca(e,t,n,r,i){let o=t[i];return o||(o=t[i]=e.measureText(i).width,n.push(i)),o>r&&(r=o),r}function Q3(e,t,n,r){r=r||{};let i=r.data=r.data||{},o=r.garbageCollect=r.garbageCollect||[];r.font!==t&&(i=r.data={},o=r.garbageCollect=[],r.font=t),e.save(),e.font=t;let s=0;const a=n.length;let l,c,u,f,d;for(l=0;l<a;l++)if(f=n[l],f!=null&&!de(f))s=ca(e,i,o,s,f);else if(de(f))for(c=0,u=f.length;c<u;c++)d=f[c],d!=null&&!de(d)&&(s=ca(e,i,o,s,d));e.restore();const h=o.length/2;if(h>n.length){for(l=0;l<h;l++)delete i[o[l]];o.splice(0,h)}return s}function In(e,t,n){const r=e.currentDevicePixelRatio,i=n!==0?Math.max(n/2,.5):0;return Math.round((t-i)*r)/r+i}function $h(e,t){!t&&!e||(t=t||e.getContext("2d"),t.save(),t.resetTransform(),t.clearRect(0,0,e.width,e.height),t.restore())}function qc(e,t,n,r){zv(e,t,n,r,null)}function zv(e,t,n,r,i){let o,s,a,l,c,u,f,d;const h=t.pointStyle,g=t.rotation,p=t.radius;let b=(g||0)*P3;if(h&&typeof h=="object"&&(o=h.toString(),o==="[object HTMLImageElement]"||o==="[object HTMLCanvasElement]")){e.save(),e.translate(n,r),e.rotate(b),e.drawImage(h,-h.width/2,-h.height/2,h.width,h.height),e.restore();return}if(!(isNaN(p)||p<=0)){switch(e.beginPath(),h){default:i?e.ellipse(n,r,i/2,p,0,0,Ze):e.arc(n,r,p,0,Ze),e.closePath();break;case"triangle":u=i?i/2:p,e.moveTo(n+Math.sin(b)*u,r-Math.cos(b)*p),b+=Th,e.lineTo(n+Math.sin(b)*u,r-Math.cos(b)*p),b+=Th,e.lineTo(n+Math.sin(b)*u,r-Math.cos(b)*p),e.closePath();break;case"rectRounded":c=p*.516,l=p-c,s=Math.cos(b+Ln)*l,f=Math.cos(b+Ln)*(i?i/2-c:l),a=Math.sin(b+Ln)*l,d=Math.sin(b+Ln)*(i?i/2-c:l),e.arc(n-f,r-a,c,b-_e,b-qe),e.arc(n+d,r-s,c,b-qe,b),e.arc(n+f,r+a,c,b,b+qe),e.arc(n-d,r+s,c,b+qe,b+_e),e.closePath();break;case"rect":if(!g){l=Math.SQRT1_2*p,u=i?i/2:l,e.rect(n-u,r-l,2*u,2*l);break}b+=Ln;case"rectRot":f=Math.cos(b)*(i?i/2:p),s=Math.cos(b)*p,a=Math.sin(b)*p,d=Math.sin(b)*(i?i/2:p),e.moveTo(n-f,r-a),e.lineTo(n+d,r-s),e.lineTo(n+f,r+a),e.lineTo(n-d,r+s),e.closePath();break;case"crossRot":b+=Ln;case"cross":f=Math.cos(b)*(i?i/2:p),s=Math.cos(b)*p,a=Math.sin(b)*p,d=Math.sin(b)*(i?i/2:p),e.moveTo(n-f,r-a),e.lineTo(n+f,r+a),e.moveTo(n+d,r-s),e.lineTo(n-d,r+s);break;case"star":f=Math.cos(b)*(i?i/2:p),s=Math.cos(b)*p,a=Math.sin(b)*p,d=Math.sin(b)*(i?i/2:p),e.moveTo(n-f,r-a),e.lineTo(n+f,r+a),e.moveTo(n+d,r-s),e.lineTo(n-d,r+s),b+=Ln,f=Math.cos(b)*(i?i/2:p),s=Math.cos(b)*p,a=Math.sin(b)*p,d=Math.sin(b)*(i?i/2:p),e.moveTo(n-f,r-a),e.lineTo(n+f,r+a),e.moveTo(n+d,r-s),e.lineTo(n-d,r+s);break;case"line":s=i?i/2:Math.cos(b)*p,a=Math.sin(b)*p,e.moveTo(n-s,r-a),e.lineTo(n+s,r+a);break;case"dash":e.moveTo(n,r),e.lineTo(n+Math.cos(b)*(i?i/2:p),r+Math.sin(b)*p);break;case!1:e.closePath();break}e.fill(),t.borderWidth>0&&e.stroke()}}function Yt(e,t,n){return n=n||.5,!t||e&&e.x>t.left-n&&e.x<t.right+n&&e.y>t.top-n&&e.y<t.bottom+n}function Da(e,t){e.save(),e.beginPath(),e.rect(t.left,t.top,t.right-t.left,t.bottom-t.top),e.clip()}function Ra(e){e.restore()}function q3(e,t,n,r,i){if(!t)return e.lineTo(n.x,n.y);if(i==="middle"){const o=(t.x+n.x)/2;e.lineTo(o,t.y),e.lineTo(o,n.y)}else i==="after"!=!!r?e.lineTo(t.x,n.y):e.lineTo(n.x,t.y);e.lineTo(n.x,n.y)}function J3(e,t,n,r){if(!t)return e.lineTo(n.x,n.y);e.bezierCurveTo(r?t.cp1x:t.cp2x,r?t.cp1y:t.cp2y,r?n.cp2x:n.cp1x,r?n.cp2y:n.cp1y,n.x,n.y)}function Z3(e,t){t.translation&&e.translate(t.translation[0],t.translation[1]),re(t.rotation)||e.rotate(t.rotation),t.color&&(e.fillStyle=t.color),t.textAlign&&(e.textAlign=t.textAlign),t.textBaseline&&(e.textBaseline=t.textBaseline)}function e_(e,t,n,r,i){if(i.strikethrough||i.underline){const o=e.measureText(r),s=t-o.actualBoundingBoxLeft,a=t+o.actualBoundingBoxRight,l=n-o.actualBoundingBoxAscent,c=n+o.actualBoundingBoxDescent,u=i.strikethrough?(l+c)/2:c;e.strokeStyle=e.fillStyle,e.beginPath(),e.lineWidth=i.decorationWidth||2,e.moveTo(s,u),e.lineTo(a,u),e.stroke()}}function t_(e,t){const n=e.fillStyle;e.fillStyle=t.color,e.fillRect(t.left,t.top,t.width,t.height),e.fillStyle=n}function Qr(e,t,n,r,i,o={}){const s=de(t)?t:[t],a=o.strokeWidth>0&&o.strokeColor!=="";let l,c;for(e.save(),e.font=i.string,Z3(e,o),l=0;l<s.length;++l)c=s[l],o.backdrop&&t_(e,o.backdrop),a&&(o.strokeColor&&(e.strokeStyle=o.strokeColor),re(o.strokeWidth)||(e.lineWidth=o.strokeWidth),e.strokeText(c,n,r,o.maxWidth)),e.fillText(c,n,r,o.maxWidth),e_(e,n,r,c,o),r+=Number(i.lineHeight);e.restore()}function ua(e,t){const{x:n,y:r,w:i,h:o,radius:s}=t;e.arc(n+s.topLeft,r+s.topLeft,s.topLeft,1.5*_e,_e,!0),e.lineTo(n,r+o-s.bottomLeft),e.arc(n+s.bottomLeft,r+o-s.bottomLeft,s.bottomLeft,_e,qe,!0),e.lineTo(n+i-s.bottomRight,r+o),e.arc(n+i-s.bottomRight,r+o-s.bottomRight,s.bottomRight,qe,0,!0),e.lineTo(n+i,r+s.topRight),e.arc(n+i-s.topRight,r+s.topRight,s.topRight,0,-qe,!0),e.lineTo(n+s.topLeft,r)}const n_=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,r_=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function i_(e,t){const n=(""+e).match(n_);if(!n||n[1]==="normal")return t*1.2;switch(e=+n[2],n[3]){case"px":return e;case"%":e/=100;break}return t*e}const o_=e=>+e||0;function Lv(e,t){const n={},r=K(t),i=r?Object.keys(t):t,o=K(e)?r?s=>X(e[s],e[t[s]]):s=>e[s]:()=>e;for(const s of i)n[s]=o_(o(s));return n}function s_(e){return Lv(e,{top:"y",right:"x",bottom:"y",left:"x"})}function Rr(e){return Lv(e,["topLeft","topRight","bottomLeft","bottomRight"])}function De(e){const t=s_(e);return t.width=t.left+t.right,t.height=t.top+t.bottom,t}function Ce(e,t){e=e||{},t=t||he.font;let n=X(e.size,t.size);typeof n=="string"&&(n=parseInt(n,10));let r=X(e.style,t.style);r&&!(""+r).match(r_)&&(console.warn('Invalid font style specified: "'+r+'"'),r=void 0);const i={family:X(e.family,t.family),lineHeight:i_(X(e.lineHeight,t.lineHeight),n),size:n,style:r,weight:X(e.weight,t.weight),string:""};return i.string=G3(i),i}function Zo(e,t,n,r){let i,o,s;for(i=0,o=e.length;i<o;++i)if(s=e[i],s!==void 0&&s!==void 0)return s}function a_(e,t,n){const{min:r,max:i}=e,o=x3(t,(i-r)/2),s=(a,l)=>n&&a===0?0:a+l;return{min:s(r,-Math.abs(o)),max:s(i,o)}}function zn(e,t){return Object.assign(Object.create(e),t)}function wf(e,t=[""],n,r,i=()=>e[0]){const o=n||e;typeof r>"u"&&(r=Fv("_fallback",e));const s={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:e,_rootScopes:o,_fallback:r,_getTarget:i,override:a=>wf([a,...e],t,o,r)};return new Proxy(s,{deleteProperty(a,l){return delete a[l],delete a._keys,delete e[0][l],!0},get(a,l){return Dv(a,l,()=>m_(l,t,e,a))},getOwnPropertyDescriptor(a,l){return Reflect.getOwnPropertyDescriptor(a._scopes[0],l)},getPrototypeOf(){return Reflect.getPrototypeOf(e[0])},has(a,l){return Hh(a).includes(l)},ownKeys(a){return Hh(a)},set(a,l,c){const u=a._storage||(a._storage=i());return a[l]=u[l]=c,delete a._keys,!0}})}function qr(e,t,n,r){const i={_cacheable:!1,_proxy:e,_context:t,_subProxy:n,_stack:new Set,_descriptors:Iv(e,r),setContext:o=>qr(e,o,n,r),override:o=>qr(e.override(o),t,n,r)};return new Proxy(i,{deleteProperty(o,s){return delete o[s],delete e[s],!0},get(o,s,a){return Dv(o,s,()=>c_(o,s,a))},getOwnPropertyDescriptor(o,s){return o._descriptors.allKeys?Reflect.has(e,s)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(e,s)},getPrototypeOf(){return Reflect.getPrototypeOf(e)},has(o,s){return Reflect.has(e,s)},ownKeys(){return Reflect.ownKeys(e)},set(o,s,a){return e[s]=a,delete o[s],!0}})}function Iv(e,t={scriptable:!0,indexable:!0}){const{_scriptable:n=t.scriptable,_indexable:r=t.indexable,_allKeys:i=t.allKeys}=e;return{allKeys:i,scriptable:n,indexable:r,isScriptable:Nn(n)?n:()=>n,isIndexable:Nn(r)?r:()=>r}}const l_=(e,t)=>e?e+vf(t):t,_f=(e,t)=>K(t)&&e!=="adapters"&&(Object.getPrototypeOf(t)===null||t.constructor===Object);function Dv(e,t,n){if(Object.prototype.hasOwnProperty.call(e,t)||t==="constructor")return e[t];const r=n();return e[t]=r,r}function c_(e,t,n){const{_proxy:r,_context:i,_subProxy:o,_descriptors:s}=e;let a=r[t];return Nn(a)&&s.isScriptable(t)&&(a=u_(t,a,e,n)),de(a)&&a.length&&(a=f_(t,a,e,s.isIndexable)),_f(t,a)&&(a=qr(a,i,o&&o[t],s)),a}function u_(e,t,n,r){const{_proxy:i,_context:o,_subProxy:s,_stack:a}=n;if(a.has(e))throw new Error("Recursion detected: "+Array.from(a).join("->")+"->"+e);a.add(e);let l=t(o,s||r);return a.delete(e),_f(e,l)&&(l=kf(i._scopes,i,e,l)),l}function f_(e,t,n,r){const{_proxy:i,_context:o,_subProxy:s,_descriptors:a}=n;if(typeof o.index<"u"&&r(e))return t[o.index%t.length];if(K(t[0])){const l=t,c=i._scopes.filter(u=>u!==l);t=[];for(const u of l){const f=kf(c,i,e,u);t.push(qr(f,o,s&&s[e],a))}}return t}function Rv(e,t,n){return Nn(e)?e(t,n):e}const d_=(e,t)=>e===!0?t:typeof e=="string"?mo(t,e):void 0;function h_(e,t,n,r,i){for(const o of t){const s=d_(n,o);if(s){e.add(s);const a=Rv(s._fallback,n,i);if(typeof a<"u"&&a!==n&&a!==r)return a}else if(s===!1&&typeof r<"u"&&n!==r)return null}return!1}function kf(e,t,n,r){const i=t._rootScopes,o=Rv(t._fallback,n,r),s=[...e,...i],a=new Set;a.add(r);let l=Wh(a,s,n,o||n,r);return l===null||typeof o<"u"&&o!==n&&(l=Wh(a,s,o,l,r),l===null)?!1:wf(Array.from(a),[""],i,o,()=>p_(t,n,r))}function Wh(e,t,n,r,i){for(;n;)n=h_(e,t,n,r,i);return n}function p_(e,t,n){const r=e._getTarget();t in r||(r[t]={});const i=r[t];return de(i)&&K(n)?n:i||{}}function m_(e,t,n,r){let i;for(const o of t)if(i=Fv(l_(o,e),n),typeof i<"u")return _f(e,i)?kf(n,r,e,i):i}function Fv(e,t){for(const n of t){if(!n)continue;const r=n[e];if(typeof r<"u")return r}}function Hh(e){let t=e._keys;return t||(t=e._keys=g_(e._scopes)),t}function g_(e){const t=new Set;for(const n of e)for(const r of Object.keys(n).filter(i=>!i.startsWith("_")))t.add(r);return Array.from(t)}function v_(e,t,n,r){const{iScale:i}=e,{key:o="r"}=this._parsing,s=new Array(r);let a,l,c,u;for(a=0,l=r;a<l;++a)c=a+n,u=t[c],s[a]={r:i.parse(mo(u,o),c)};return s}const y_=Number.EPSILON||1e-14,Jr=(e,t)=>t<e.length&&!e[t].skip&&e[t],$v=e=>e==="x"?"y":"x";function x_(e,t,n,r){const i=e.skip?t:e,o=t,s=n.skip?t:n,a=Kc(o,i),l=Kc(s,o);let c=a/(a+l),u=l/(a+l);c=isNaN(c)?0:c,u=isNaN(u)?0:u;const f=r*c,d=r*u;return{previous:{x:o.x-f*(s.x-i.x),y:o.y-f*(s.y-i.y)},next:{x:o.x+d*(s.x-i.x),y:o.y+d*(s.y-i.y)}}}function b_(e,t,n){const r=e.length;let i,o,s,a,l,c=Jr(e,0);for(let u=0;u<r-1;++u)if(l=c,c=Jr(e,u+1),!(!l||!c)){if(Wi(t[u],0,y_)){n[u]=n[u+1]=0;continue}i=n[u]/t[u],o=n[u+1]/t[u],a=Math.pow(i,2)+Math.pow(o,2),!(a<=9)&&(s=3/Math.sqrt(a),n[u]=i*s*t[u],n[u+1]=o*s*t[u])}}function w_(e,t,n="x"){const r=$v(n),i=e.length;let o,s,a,l=Jr(e,0);for(let c=0;c<i;++c){if(s=a,a=l,l=Jr(e,c+1),!a)continue;const u=a[n],f=a[r];s&&(o=(u-s[n])/3,a[`cp1${n}`]=u-o,a[`cp1${r}`]=f-o*t[c]),l&&(o=(l[n]-u)/3,a[`cp2${n}`]=u+o,a[`cp2${r}`]=f+o*t[c])}}function __(e,t="x"){const n=$v(t),r=e.length,i=Array(r).fill(0),o=Array(r);let s,a,l,c=Jr(e,0);for(s=0;s<r;++s)if(a=l,l=c,c=Jr(e,s+1),!!l){if(c){const u=c[t]-l[t];i[s]=u!==0?(c[n]-l[n])/u:0}o[s]=a?c?Gr(i[s-1])!==Gr(i[s])?0:(i[s-1]+i[s])/2:i[s-1]:i[s]}b_(e,i,o),w_(e,o,t)}function es(e,t,n){return Math.max(Math.min(e,n),t)}function k_(e,t){let n,r,i,o,s,a=Yt(e[0],t);for(n=0,r=e.length;n<r;++n)s=o,o=a,a=n<r-1&&Yt(e[n+1],t),o&&(i=e[n],s&&(i.cp1x=es(i.cp1x,t.left,t.right),i.cp1y=es(i.cp1y,t.top,t.bottom)),a&&(i.cp2x=es(i.cp2x,t.left,t.right),i.cp2y=es(i.cp2y,t.top,t.bottom)))}function S_(e,t,n,r,i){let o,s,a,l;if(t.spanGaps&&(e=e.filter(c=>!c.skip)),t.cubicInterpolationMode==="monotone")__(e,i);else{let c=r?e[e.length-1]:e[0];for(o=0,s=e.length;o<s;++o)a=e[o],l=x_(c,a,e[Math.min(o+1,s-(r?0:1))%s],t.tension),a.cp1x=l.previous.x,a.cp1y=l.previous.y,a.cp2x=l.next.x,a.cp2y=l.next.y,c=a}t.capBezierPoints&&k_(e,n)}function Sf(){return typeof window<"u"&&typeof document<"u"}function Cf(e){let t=e.parentNode;return t&&t.toString()==="[object ShadowRoot]"&&(t=t.host),t}function fa(e,t,n){let r;return typeof e=="string"?(r=parseInt(e,10),e.indexOf("%")!==-1&&(r=r/100*t.parentNode[n])):r=e,r}const Fa=e=>e.ownerDocument.defaultView.getComputedStyle(e,null);function C_(e,t){return Fa(e).getPropertyValue(t)}const P_=["top","right","bottom","left"];function Jn(e,t,n){const r={};n=n?"-"+n:"";for(let i=0;i<4;i++){const o=P_[i];r[o]=parseFloat(e[t+"-"+o+n])||0}return r.width=r.left+r.right,r.height=r.top+r.bottom,r}const E_=(e,t,n)=>(e>0||t>0)&&(!n||!n.shadowRoot);function M_(e,t){const n=e.touches,r=n&&n.length?n[0]:e,{offsetX:i,offsetY:o}=r;let s=!1,a,l;if(E_(i,o,e.target))a=i,l=o;else{const c=t.getBoundingClientRect();a=r.clientX-c.left,l=r.clientY-c.top,s=!0}return{x:a,y:l,box:s}}function Wn(e,t){if("native"in e)return e;const{canvas:n,currentDevicePixelRatio:r}=t,i=Fa(n),o=i.boxSizing==="border-box",s=Jn(i,"padding"),a=Jn(i,"border","width"),{x:l,y:c,box:u}=M_(e,n),f=s.left+(u&&a.left),d=s.top+(u&&a.top);let{width:h,height:g}=t;return o&&(h-=s.width+a.width,g-=s.height+a.height),{x:Math.round((l-f)/h*n.width/r),y:Math.round((c-d)/g*n.height/r)}}function N_(e,t,n){let r,i;if(t===void 0||n===void 0){const o=e&&Cf(e);if(!o)t=e.clientWidth,n=e.clientHeight;else{const s=o.getBoundingClientRect(),a=Fa(o),l=Jn(a,"border","width"),c=Jn(a,"padding");t=s.width-c.width-l.width,n=s.height-c.height-l.height,r=fa(a.maxWidth,o,"clientWidth"),i=fa(a.maxHeight,o,"clientHeight")}}return{width:t,height:n,maxWidth:r||aa,maxHeight:i||aa}}const ts=e=>Math.round(e*10)/10;function O_(e,t,n,r){const i=Fa(e),o=Jn(i,"margin"),s=fa(i.maxWidth,e,"clientWidth")||aa,a=fa(i.maxHeight,e,"clientHeight")||aa,l=N_(e,t,n);let{width:c,height:u}=l;if(i.boxSizing==="content-box"){const d=Jn(i,"border","width"),h=Jn(i,"padding");c-=h.width+d.width,u-=h.height+d.height}return c=Math.max(0,c-o.width),u=Math.max(0,r?c/r:u-o.height),c=ts(Math.min(c,s,l.maxWidth)),u=ts(Math.min(u,a,l.maxHeight)),c&&!u&&(u=ts(c/2)),(t!==void 0||n!==void 0)&&r&&l.height&&u>l.height&&(u=l.height,c=ts(Math.floor(u*r))),{width:c,height:u}}function Bh(e,t,n){const r=t||1,i=Math.floor(e.height*r),o=Math.floor(e.width*r);e.height=Math.floor(e.height),e.width=Math.floor(e.width);const s=e.canvas;return s.style&&(n||!s.style.height&&!s.style.width)&&(s.style.height=`${e.height}px`,s.style.width=`${e.width}px`),e.currentDevicePixelRatio!==r||s.height!==i||s.width!==o?(e.currentDevicePixelRatio=r,s.height=i,s.width=o,e.ctx.setTransform(r,0,0,r,0,0),!0):!1}const j_=function(){let e=!1;try{const t={get passive(){return e=!0,!1}};Sf()&&(window.addEventListener("test",null,t),window.removeEventListener("test",null,t))}catch{}return e}();function Uh(e,t){const n=C_(e,t),r=n&&n.match(/^(\d+)(\.\d+)?px$/);return r?+r[1]:void 0}function Hn(e,t,n,r){return{x:e.x+n*(t.x-e.x),y:e.y+n*(t.y-e.y)}}function T_(e,t,n,r){return{x:e.x+n*(t.x-e.x),y:r==="middle"?n<.5?e.y:t.y:r==="after"?n<1?e.y:t.y:n>0?t.y:e.y}}function A_(e,t,n,r){const i={x:e.cp2x,y:e.cp2y},o={x:t.cp1x,y:t.cp1y},s=Hn(e,i,n),a=Hn(i,o,n),l=Hn(o,t,n),c=Hn(s,a,n),u=Hn(a,l,n);return Hn(c,u,n)}const z_=function(e,t){return{x(n){return e+e+t-n},setWidth(n){t=n},textAlign(n){return n==="center"?n:n==="right"?"left":"right"},xPlus(n,r){return n-r},leftForLtr(n,r){return n-r}}},L_=function(){return{x(e){return e},setWidth(e){},textAlign(e){return e},xPlus(e,t){return e+t},leftForLtr(e,t){return e}}};function Fr(e,t,n){return e?z_(t,n):L_()}function Wv(e,t){let n,r;(t==="ltr"||t==="rtl")&&(n=e.canvas.style,r=[n.getPropertyValue("direction"),n.getPropertyPriority("direction")],n.setProperty("direction",t,"important"),e.prevTextDirection=r)}function Hv(e,t){t!==void 0&&(delete e.prevTextDirection,e.canvas.style.setProperty("direction",t[0],t[1]))}function Bv(e){return e==="angle"?{between:Ev,compare:T3,normalize:Ge}:{between:Or,compare:(t,n)=>t-n,normalize:t=>t}}function Vh({start:e,end:t,count:n,loop:r,style:i}){return{start:e%n,end:t%n,loop:r&&(t-e+1)%n===0,style:i}}function I_(e,t,n){const{property:r,start:i,end:o}=n,{between:s,normalize:a}=Bv(r),l=t.length;let{start:c,end:u,loop:f}=e,d,h;if(f){for(c+=l,u+=l,d=0,h=l;d<h&&s(a(t[c%l][r]),i,o);++d)c--,u--;c%=l,u%=l}return u<c&&(u+=l),{start:c,end:u,loop:f,style:e.style}}function Uv(e,t,n){if(!n)return[e];const{property:r,start:i,end:o}=n,s=t.length,{compare:a,between:l,normalize:c}=Bv(r),{start:u,end:f,loop:d,style:h}=I_(e,t,n),g=[];let p=!1,b=null,y,v,x;const _=()=>l(i,x,y)&&a(i,x)!==0,w=()=>a(o,y)===0||l(o,x,y),S=()=>p||_(),E=()=>!p||w();for(let C=u,P=u;C<=f;++C)v=t[C%s],!v.skip&&(y=c(v[r]),y!==x&&(p=l(y,i,o),b===null&&S()&&(b=a(y,i)===0?C:P),b!==null&&E()&&(g.push(Vh({start:b,end:C,loop:d,count:s,style:h})),b=null),P=C,x=y));return b!==null&&g.push(Vh({start:b,end:f,loop:d,count:s,style:h})),g}function Vv(e,t){const n=[],r=e.segments;for(let i=0;i<r.length;i++){const o=Uv(r[i],e.points,t);o.length&&n.push(...o)}return n}function D_(e,t,n,r){let i=0,o=t-1;if(n&&!r)for(;i<t&&!e[i].skip;)i++;for(;i<t&&e[i].skip;)i++;for(i%=t,n&&(o+=i);o>i&&e[o%t].skip;)o--;return o%=t,{start:i,end:o}}function R_(e,t,n,r){const i=e.length,o=[];let s=t,a=e[t],l;for(l=t+1;l<=n;++l){const c=e[l%i];c.skip||c.stop?a.skip||(r=!1,o.push({start:t%i,end:(l-1)%i,loop:r}),t=s=c.stop?l:null):(s=l,a.skip&&(t=l)),a=c}return s!==null&&o.push({start:t%i,end:s%i,loop:r}),o}function F_(e,t){const n=e.points,r=e.options.spanGaps,i=n.length;if(!i)return[];const o=!!e._loop,{start:s,end:a}=D_(n,i,o,r);if(r===!0)return Yh(e,[{start:s,end:a,loop:o}],n,t);const l=a<s?a+i:a,c=!!e._fullLoop&&s===0&&a===i-1;return Yh(e,R_(n,s,l,c),n,t)}function Yh(e,t,n,r){return!r||!r.setContext||!n?t:$_(e,t,n,r)}function $_(e,t,n,r){const i=e._chart.getContext(),o=Xh(e.options),{_datasetIndex:s,options:{spanGaps:a}}=e,l=n.length,c=[];let u=o,f=t[0].start,d=f;function h(g,p,b,y){const v=a?-1:1;if(g!==p){for(g+=l;n[g%l].skip;)g-=v;for(;n[p%l].skip;)p+=v;g%l!==p%l&&(c.push({start:g%l,end:p%l,loop:b,style:y}),u=y,f=p%l)}}for(const g of t){f=a?f:g.start;let p=n[f%l],b;for(d=f+1;d<=g.end;d++){const y=n[d%l];b=Xh(r.setContext(zn(i,{type:"segment",p0:p,p1:y,p0DataIndex:(d-1)%l,p1DataIndex:d%l,datasetIndex:s}))),W_(b,u)&&h(f,d-1,g.loop,u),p=y,u=b}f<d-1&&h(f,d-1,g.loop,u)}return c}function Xh(e){return{backgroundColor:e.backgroundColor,borderCapStyle:e.borderCapStyle,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderJoinStyle:e.borderJoinStyle,borderWidth:e.borderWidth,borderColor:e.borderColor}}function W_(e,t){if(!t)return!1;const n=[],r=function(i,o){return bf(o)?(n.includes(o)||n.push(o),n.indexOf(o)):o};return JSON.stringify(e,r)!==JSON.stringify(t,r)}function ns(e,t,n){return e.options.clip?e[n]:t[n]}function H_(e,t){const{xScale:n,yScale:r}=e;return n&&r?{left:ns(n,t,"left"),right:ns(n,t,"right"),top:ns(r,t,"top"),bottom:ns(r,t,"bottom")}:t}function Yv(e,t){const n=t._clip;if(n.disabled)return!1;const r=H_(t,e.chartArea);return{left:n.left===!1?0:r.left-(n.left===!0?0:n.left),right:n.right===!1?e.width:r.right+(n.right===!0?0:n.right),top:n.top===!1?0:r.top-(n.top===!0?0:n.top),bottom:n.bottom===!1?e.height:r.bottom+(n.bottom===!0?0:n.bottom)}}/*!
 * Chart.js v4.5.0
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */class B_{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,n,r,i){const o=n.listeners[i],s=n.duration;o.forEach(a=>a({chart:t,initial:n.initial,numSteps:s,currentStep:Math.min(r-n.start,s)}))}_refresh(){this._request||(this._running=!0,this._request=Nv.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(t=Date.now()){let n=0;this._charts.forEach((r,i)=>{if(!r.running||!r.items.length)return;const o=r.items;let s=o.length-1,a=!1,l;for(;s>=0;--s)l=o[s],l._active?(l._total>r.duration&&(r.duration=l._total),l.tick(t),a=!0):(o[s]=o[o.length-1],o.pop());a&&(i.draw(),this._notify(i,r,t,"progress")),o.length||(r.running=!1,this._notify(i,r,t,"complete"),r.initial=!1),n+=o.length}),this._lastDate=t,n===0&&(this._running=!1)}_getAnims(t){const n=this._charts;let r=n.get(t);return r||(r={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},n.set(t,r)),r}listen(t,n,r){this._getAnims(t).listeners[n].push(r)}add(t,n){!n||!n.length||this._getAnims(t).items.push(...n)}has(t){return this._getAnims(t).items.length>0}start(t){const n=this._charts.get(t);n&&(n.running=!0,n.start=Date.now(),n.duration=n.items.reduce((r,i)=>Math.max(r,i._duration),0),this._refresh())}running(t){if(!this._running)return!1;const n=this._charts.get(t);return!(!n||!n.running||!n.items.length)}stop(t){const n=this._charts.get(t);if(!n||!n.items.length)return;const r=n.items;let i=r.length-1;for(;i>=0;--i)r[i].cancel();n.items=[],this._notify(t,n,Date.now(),"complete")}remove(t){return this._charts.delete(t)}}var Rt=new B_;const Kh="transparent",U_={boolean(e,t,n){return n>.5?t:e},color(e,t,n){const r=Rh(e||Kh),i=r.valid&&Rh(t||Kh);return i&&i.valid?i.mix(r,n).hexString():t},number(e,t,n){return e+(t-e)*n}};class V_{constructor(t,n,r,i){const o=n[r];i=Zo([t.to,i,o,t.from]);const s=Zo([t.from,o,i]);this._active=!0,this._fn=t.fn||U_[t.type||typeof s],this._easing=Hi[t.easing]||Hi.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=n,this._prop=r,this._from=s,this._to=i,this._promises=void 0}active(){return this._active}update(t,n,r){if(this._active){this._notify(!1);const i=this._target[this._prop],o=r-this._start,s=this._duration-o;this._start=r,this._duration=Math.floor(Math.max(s,t.duration)),this._total+=o,this._loop=!!t.loop,this._to=Zo([t.to,n,i,t.from]),this._from=Zo([t.from,i,n])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){const n=t-this._start,r=this._duration,i=this._prop,o=this._from,s=this._loop,a=this._to;let l;if(this._active=o!==a&&(s||n<r),!this._active){this._target[i]=a,this._notify(!0);return}if(n<0){this._target[i]=o;return}l=n/r%2,l=s&&l>1?2-l:l,l=this._easing(Math.min(1,Math.max(0,l))),this._target[i]=this._fn(o,a,l)}wait(){const t=this._promises||(this._promises=[]);return new Promise((n,r)=>{t.push({res:n,rej:r})})}_notify(t){const n=t?"res":"rej",r=this._promises||[];for(let i=0;i<r.length;i++)r[i][n]()}}class Xv{constructor(t,n){this._chart=t,this._properties=new Map,this.configure(n)}configure(t){if(!K(t))return;const n=Object.keys(he.animation),r=this._properties;Object.getOwnPropertyNames(t).forEach(i=>{const o=t[i];if(!K(o))return;const s={};for(const a of n)s[a]=o[a];(de(o.properties)&&o.properties||[i]).forEach(a=>{(a===i||!r.has(a))&&r.set(a,s)})})}_animateOptions(t,n){const r=n.options,i=X_(t,r);if(!i)return[];const o=this._createAnimations(i,r);return r.$shared&&Y_(t.options.$animations,r).then(()=>{t.options=r},()=>{}),o}_createAnimations(t,n){const r=this._properties,i=[],o=t.$animations||(t.$animations={}),s=Object.keys(n),a=Date.now();let l;for(l=s.length-1;l>=0;--l){const c=s[l];if(c.charAt(0)==="$")continue;if(c==="options"){i.push(...this._animateOptions(t,n));continue}const u=n[c];let f=o[c];const d=r.get(c);if(f)if(d&&f.active()){f.update(d,u,a);continue}else f.cancel();if(!d||!d.duration){t[c]=u;continue}o[c]=f=new V_(d,t,c,u),i.push(f)}return i}update(t,n){if(this._properties.size===0){Object.assign(t,n);return}const r=this._createAnimations(t,n);if(r.length)return Rt.add(this._chart,r),!0}}function Y_(e,t){const n=[],r=Object.keys(t);for(let i=0;i<r.length;i++){const o=e[r[i]];o&&o.active()&&n.push(o.wait())}return Promise.all(n)}function X_(e,t){if(!t)return;let n=e.options;if(!n){e.options=t;return}return n.$shared&&(e.options=n=Object.assign({},n,{$shared:!1,$animations:{}})),n}function Gh(e,t){const n=e&&e.options||{},r=n.reverse,i=n.min===void 0?t:0,o=n.max===void 0?t:0;return{start:r?o:i,end:r?i:o}}function K_(e,t,n){if(n===!1)return!1;const r=Gh(e,n),i=Gh(t,n);return{top:i.end,right:r.end,bottom:i.start,left:r.start}}function G_(e){let t,n,r,i;return K(e)?(t=e.top,n=e.right,r=e.bottom,i=e.left):t=n=r=i=e,{top:t,right:n,bottom:r,left:i,disabled:e===!1}}function Kv(e,t){const n=[],r=e._getSortedDatasetMetas(t);let i,o;for(i=0,o=r.length;i<o;++i)n.push(r[i].index);return n}function Qh(e,t,n,r={}){const i=e.keys,o=r.mode==="single";let s,a,l,c;if(t===null)return;let u=!1;for(s=0,a=i.length;s<a;++s){if(l=+i[s],l===n){if(u=!0,r.all)continue;break}c=e.values[l],ze(c)&&(o||t===0||Gr(t)===Gr(c))&&(t+=c)}return!u&&!r.all?0:t}function Q_(e,t){const{iScale:n,vScale:r}=t,i=n.axis==="x"?"x":"y",o=r.axis==="x"?"x":"y",s=Object.keys(e),a=new Array(s.length);let l,c,u;for(l=0,c=s.length;l<c;++l)u=s[l],a[l]={[i]:u,[o]:e[u]};return a}function Pl(e,t){const n=e&&e.options.stacked;return n||n===void 0&&t.stack!==void 0}function q_(e,t,n){return`${e.id}.${t.id}.${n.stack||n.type}`}function J_(e){const{min:t,max:n,minDefined:r,maxDefined:i}=e.getUserBounds();return{min:r?t:Number.NEGATIVE_INFINITY,max:i?n:Number.POSITIVE_INFINITY}}function Z_(e,t,n){const r=e[t]||(e[t]={});return r[n]||(r[n]={})}function qh(e,t,n,r){for(const i of t.getMatchingVisibleMetas(r).reverse()){const o=e[i.index];if(n&&o>0||!n&&o<0)return i.index}return null}function Jh(e,t){const{chart:n,_cachedMeta:r}=e,i=n._stacks||(n._stacks={}),{iScale:o,vScale:s,index:a}=r,l=o.axis,c=s.axis,u=q_(o,s,r),f=t.length;let d;for(let h=0;h<f;++h){const g=t[h],{[l]:p,[c]:b}=g,y=g._stacks||(g._stacks={});d=y[c]=Z_(i,u,p),d[a]=b,d._top=qh(d,s,!0,r.type),d._bottom=qh(d,s,!1,r.type);const v=d._visualValues||(d._visualValues={});v[a]=b}}function El(e,t){const n=e.scales;return Object.keys(n).filter(r=>n[r].axis===t).shift()}function ek(e,t){return zn(e,{active:!1,dataset:void 0,datasetIndex:t,index:t,mode:"default",type:"dataset"})}function tk(e,t,n){return zn(e,{active:!1,dataIndex:t,parsed:void 0,raw:void 0,element:n,index:t,mode:"default",type:"data"})}function hi(e,t){const n=e.controller.index,r=e.vScale&&e.vScale.axis;if(r){t=t||e._parsed;for(const i of t){const o=i._stacks;if(!o||o[r]===void 0||o[r][n]===void 0)return;delete o[r][n],o[r]._visualValues!==void 0&&o[r]._visualValues[n]!==void 0&&delete o[r]._visualValues[n]}}}const Ml=e=>e==="reset"||e==="none",Zh=(e,t)=>t?e:Object.assign({},e),nk=(e,t,n)=>e&&!t.hidden&&t._stacked&&{keys:Kv(n,!0),values:null};class Ui{constructor(t,n){this.chart=t,this._ctx=t.ctx,this.index=n,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=Pl(t.vScale,t),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(t){this.index!==t&&hi(this._cachedMeta),this.index=t}linkScales(){const t=this.chart,n=this._cachedMeta,r=this.getDataset(),i=(f,d,h,g)=>f==="x"?d:f==="r"?g:h,o=n.xAxisID=X(r.xAxisID,El(t,"x")),s=n.yAxisID=X(r.yAxisID,El(t,"y")),a=n.rAxisID=X(r.rAxisID,El(t,"r")),l=n.indexAxis,c=n.iAxisID=i(l,o,s,a),u=n.vAxisID=i(l,s,o,a);n.xScale=this.getScaleForId(o),n.yScale=this.getScaleForId(s),n.rScale=this.getScaleForId(a),n.iScale=this.getScaleForId(c),n.vScale=this.getScaleForId(u)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){const n=this._cachedMeta;return t===n.iScale?n.vScale:n.iScale}reset(){this._update("reset")}_destroy(){const t=this._cachedMeta;this._data&&Lh(this._data,this),t._stacked&&hi(t)}_dataCheck(){const t=this.getDataset(),n=t.data||(t.data=[]),r=this._data;if(K(n)){const i=this._cachedMeta;this._data=Q_(n,i)}else if(r!==n){if(r){Lh(r,this);const i=this._cachedMeta;hi(i),i._parsed=[]}n&&Object.isExtensible(n)&&I3(n,this),this._syncList=[],this._data=n}}addElements(){const t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){const n=this._cachedMeta,r=this.getDataset();let i=!1;this._dataCheck();const o=n._stacked;n._stacked=Pl(n.vScale,n),n.stack!==r.stack&&(i=!0,hi(n),n.stack=r.stack),this._resyncElements(t),(i||o!==n._stacked)&&(Jh(this,n._parsed),n._stacked=Pl(n.vScale,n))}configure(){const t=this.chart.config,n=t.datasetScopeKeys(this._type),r=t.getOptionScopes(this.getDataset(),n,!0);this.options=t.createResolver(r,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,n){const{_cachedMeta:r,_data:i}=this,{iScale:o,_stacked:s}=r,a=o.axis;let l=t===0&&n===i.length?!0:r._sorted,c=t>0&&r._parsed[t-1],u,f,d;if(this._parsing===!1)r._parsed=i,r._sorted=!0,d=i;else{de(i[t])?d=this.parseArrayData(r,i,t,n):K(i[t])?d=this.parseObjectData(r,i,t,n):d=this.parsePrimitiveData(r,i,t,n);const h=()=>f[a]===null||c&&f[a]<c[a];for(u=0;u<n;++u)r._parsed[u+t]=f=d[u],l&&(h()&&(l=!1),c=f);r._sorted=l}s&&Jh(this,d)}parsePrimitiveData(t,n,r,i){const{iScale:o,vScale:s}=t,a=o.axis,l=s.axis,c=o.getLabels(),u=o===s,f=new Array(i);let d,h,g;for(d=0,h=i;d<h;++d)g=d+r,f[d]={[a]:u||o.parse(c[g],g),[l]:s.parse(n[g],g)};return f}parseArrayData(t,n,r,i){const{xScale:o,yScale:s}=t,a=new Array(i);let l,c,u,f;for(l=0,c=i;l<c;++l)u=l+r,f=n[u],a[l]={x:o.parse(f[0],u),y:s.parse(f[1],u)};return a}parseObjectData(t,n,r,i){const{xScale:o,yScale:s}=t,{xAxisKey:a="x",yAxisKey:l="y"}=this._parsing,c=new Array(i);let u,f,d,h;for(u=0,f=i;u<f;++u)d=u+r,h=n[d],c[u]={x:o.parse(mo(h,a),d),y:s.parse(mo(h,l),d)};return c}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,n,r){const i=this.chart,o=this._cachedMeta,s=n[t.axis],a={keys:Kv(i,!0),values:n._stacks[t.axis]._visualValues};return Qh(a,s,o.index,{mode:r})}updateRangeFromParsed(t,n,r,i){const o=r[n.axis];let s=o===null?NaN:o;const a=i&&r._stacks[n.axis];i&&a&&(i.values=a,s=Qh(i,o,this._cachedMeta.index)),t.min=Math.min(t.min,s),t.max=Math.max(t.max,s)}getMinMax(t,n){const r=this._cachedMeta,i=r._parsed,o=r._sorted&&t===r.iScale,s=i.length,a=this._getOtherScale(t),l=nk(n,r,this.chart),c={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:u,max:f}=J_(a);let d,h;function g(){h=i[d];const p=h[a.axis];return!ze(h[t.axis])||u>p||f<p}for(d=0;d<s&&!(!g()&&(this.updateRangeFromParsed(c,t,h,l),o));++d);if(o){for(d=s-1;d>=0;--d)if(!g()){this.updateRangeFromParsed(c,t,h,l);break}}return c}getAllParsedValues(t){const n=this._cachedMeta._parsed,r=[];let i,o,s;for(i=0,o=n.length;i<o;++i)s=n[i][t.axis],ze(s)&&r.push(s);return r}getMaxOverflow(){return!1}getLabelAndValue(t){const n=this._cachedMeta,r=n.iScale,i=n.vScale,o=this.getParsed(t);return{label:r?""+r.getLabelForValue(o[r.axis]):"",value:i?""+i.getLabelForValue(o[i.axis]):""}}_update(t){const n=this._cachedMeta;this.update(t||"default"),n._clip=G_(X(this.options.clip,K_(n.xScale,n.yScale,this.getMaxOverflow())))}update(t){}draw(){const t=this._ctx,n=this.chart,r=this._cachedMeta,i=r.data||[],o=n.chartArea,s=[],a=this._drawStart||0,l=this._drawCount||i.length-a,c=this.options.drawActiveElementsOnTop;let u;for(r.dataset&&r.dataset.draw(t,o,a,l),u=a;u<a+l;++u){const f=i[u];f.hidden||(f.active&&c?s.push(f):f.draw(t,o))}for(u=0;u<s.length;++u)s[u].draw(t,o)}getStyle(t,n){const r=n?"active":"default";return t===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(r):this.resolveDataElementOptions(t||0,r)}getContext(t,n,r){const i=this.getDataset();let o;if(t>=0&&t<this._cachedMeta.data.length){const s=this._cachedMeta.data[t];o=s.$context||(s.$context=tk(this.getContext(),t,s)),o.parsed=this.getParsed(t),o.raw=i.data[t],o.index=o.dataIndex=t}else o=this.$context||(this.$context=ek(this.chart.getContext(),this.index)),o.dataset=i,o.index=o.datasetIndex=this.index;return o.active=!!n,o.mode=r,o}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,n){return this._resolveElementOptions(this.dataElementType.id,n,t)}_resolveElementOptions(t,n="default",r){const i=n==="active",o=this._cachedDataOpts,s=t+"-"+n,a=o[s],l=this.enableOptionSharing&&sa(r);if(a)return Zh(a,l);const c=this.chart.config,u=c.datasetElementScopeKeys(this._type,t),f=i?[`${t}Hover`,"hover",t,""]:[t,""],d=c.getOptionScopes(this.getDataset(),u),h=Object.keys(he.elements[t]),g=()=>this.getContext(r,i,n),p=c.resolveNamedOptions(d,h,g,f);return p.$shared&&(p.$shared=l,o[s]=Object.freeze(Zh(p,l))),p}_resolveAnimations(t,n,r){const i=this.chart,o=this._cachedDataOpts,s=`animation-${n}`,a=o[s];if(a)return a;let l;if(i.options.animation!==!1){const u=this.chart.config,f=u.datasetAnimationScopeKeys(this._type,n),d=u.getOptionScopes(this.getDataset(),f);l=u.createResolver(d,this.getContext(t,r,n))}const c=new Xv(i,l&&l.animations);return l&&l._cacheable&&(o[s]=Object.freeze(c)),c}getSharedOptions(t){if(t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,n){return!n||Ml(t)||this.chart._animationsDisabled}_getSharedOptions(t,n){const r=this.resolveDataElementOptions(t,n),i=this._sharedOptions,o=this.getSharedOptions(r),s=this.includeOptions(n,o)||o!==i;return this.updateSharedOptions(o,n,r),{sharedOptions:o,includeOptions:s}}updateElement(t,n,r,i){Ml(i)?Object.assign(t,r):this._resolveAnimations(n,i).update(t,r)}updateSharedOptions(t,n,r){t&&!Ml(n)&&this._resolveAnimations(void 0,n).update(t,r)}_setStyle(t,n,r,i){t.active=i;const o=this.getStyle(n,i);this._resolveAnimations(n,r,i).update(t,{options:!i&&this.getSharedOptions(o)||o})}removeHoverStyle(t,n,r){this._setStyle(t,r,"active",!1)}setHoverStyle(t,n,r){this._setStyle(t,r,"active",!0)}_removeDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){const n=this._data,r=this._cachedMeta.data;for(const[a,l,c]of this._syncList)this[a](l,c);this._syncList=[];const i=r.length,o=n.length,s=Math.min(o,i);s&&this.parse(0,s),o>i?this._insertElements(i,o-i,t):o<i&&this._removeElements(o,i-o)}_insertElements(t,n,r=!0){const i=this._cachedMeta,o=i.data,s=t+n;let a;const l=c=>{for(c.length+=n,a=c.length-1;a>=s;a--)c[a]=c[a-n]};for(l(o),a=t;a<s;++a)o[a]=new this.dataElementType;this._parsing&&l(i._parsed),this.parse(t,n),r&&this.updateElements(o,t,n,"reset")}updateElements(t,n,r,i){}_removeElements(t,n){const r=this._cachedMeta;if(this._parsing){const i=r._parsed.splice(t,n);r._stacked&&hi(r,i)}r.data.splice(t,n)}_sync(t){if(this._parsing)this._syncList.push(t);else{const[n,r,i]=t;this[n](r,i)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){const t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,n){n&&this._sync(["_removeElements",t,n]);const r=arguments.length-2;r&&this._sync(["_insertElements",t,r])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}U(Ui,"defaults",{}),U(Ui,"datasetElementType",null),U(Ui,"dataElementType",null);class Ss extends Ui{getLabelAndValue(t){const n=this._cachedMeta.vScale,r=this.getParsed(t);return{label:n.getLabels()[t],value:""+n.getLabelForValue(r[n.axis])}}parseObjectData(t,n,r,i){return v_.bind(this)(t,n,r,i)}update(t){const n=this._cachedMeta,r=n.dataset,i=n.data||[],o=n.iScale.getLabels();if(r.points=i,t!=="resize"){const s=this.resolveDatasetElementOptions(t);this.options.showLine||(s.borderWidth=0);const a={_loop:!0,_fullLoop:o.length===i.length,options:s};this.updateElement(r,void 0,a,t)}this.updateElements(i,0,i.length,t)}updateElements(t,n,r,i){const o=this._cachedMeta.rScale,s=i==="reset";for(let a=n;a<n+r;a++){const l=t[a],c=this.resolveDataElementOptions(a,l.active?"active":i),u=o.getPointPositionForValue(a,this.getParsed(a).r),f=s?o.xCenter:u.x,d=s?o.yCenter:u.y,h={x:f,y:d,angle:u.angle,skip:isNaN(f)||isNaN(d),options:c};this.updateElement(l,a,h,i)}}}U(Ss,"id","radar"),U(Ss,"defaults",{datasetElementType:"line",dataElementType:"point",indexAxis:"r",showLine:!0,elements:{line:{fill:"start"}}}),U(Ss,"overrides",{aspectRatio:1,scales:{r:{type:"radialLinear"}}});function Dn(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class Pf{constructor(t){U(this,"options");this.options=t||{}}static override(t){Object.assign(Pf.prototype,t)}init(){}formats(){return Dn()}parse(){return Dn()}format(){return Dn()}add(){return Dn()}diff(){return Dn()}startOf(){return Dn()}endOf(){return Dn()}}var rk={_date:Pf};function ik(e,t,n,r){const{controller:i,data:o,_sorted:s}=e,a=i._cachedMeta.iScale,l=e.dataset&&e.dataset.options?e.dataset.options.spanGaps:null;if(a&&t===a.axis&&t!=="r"&&s&&o.length){const c=a._reversePixels?z3:Gc;if(r){if(i._sharedOptions){const u=o[0],f=typeof u.getRange=="function"&&u.getRange(t);if(f){const d=c(o,t,n-f),h=c(o,t,n+f);return{lo:d.lo,hi:h.hi}}}}else{const u=c(o,t,n);if(l){const{vScale:f}=i._cachedMeta,{_parsed:d}=e,h=d.slice(0,u.lo+1).reverse().findIndex(p=>!re(p[f.axis]));u.lo-=Math.max(0,h);const g=d.slice(u.hi).findIndex(p=>!re(p[f.axis]));u.hi+=Math.max(0,g)}return u}}return{lo:0,hi:o.length-1}}function $a(e,t,n,r,i){const o=e.getSortedVisibleDatasetMetas(),s=n[t];for(let a=0,l=o.length;a<l;++a){const{index:c,data:u}=o[a],{lo:f,hi:d}=ik(o[a],t,s,i);for(let h=f;h<=d;++h){const g=u[h];g.skip||r(g,c,h)}}}function ok(e){const t=e.indexOf("x")!==-1,n=e.indexOf("y")!==-1;return function(r,i){const o=t?Math.abs(r.x-i.x):0,s=n?Math.abs(r.y-i.y):0;return Math.sqrt(Math.pow(o,2)+Math.pow(s,2))}}function Nl(e,t,n,r,i){const o=[];return!i&&!e.isPointInArea(t)||$a(e,n,t,function(a,l,c){!i&&!Yt(a,e.chartArea,0)||a.inRange(t.x,t.y,r)&&o.push({element:a,datasetIndex:l,index:c})},!0),o}function sk(e,t,n,r){let i=[];function o(s,a,l){const{startAngle:c,endAngle:u}=s.getProps(["startAngle","endAngle"],r),{angle:f}=j3(s,{x:t.x,y:t.y});Ev(f,c,u)&&i.push({element:s,datasetIndex:a,index:l})}return $a(e,n,t,o),i}function ak(e,t,n,r,i,o){let s=[];const a=ok(n);let l=Number.POSITIVE_INFINITY;function c(u,f,d){const h=u.inRange(t.x,t.y,i);if(r&&!h)return;const g=u.getCenterPoint(i);if(!(!!o||e.isPointInArea(g))&&!h)return;const b=a(t,g);b<l?(s=[{element:u,datasetIndex:f,index:d}],l=b):b===l&&s.push({element:u,datasetIndex:f,index:d})}return $a(e,n,t,c),s}function Ol(e,t,n,r,i,o){return!o&&!e.isPointInArea(t)?[]:n==="r"&&!r?sk(e,t,n,i):ak(e,t,n,r,i,o)}function ep(e,t,n,r,i){const o=[],s=n==="x"?"inXRange":"inYRange";let a=!1;return $a(e,n,t,(l,c,u)=>{l[s]&&l[s](t[n],i)&&(o.push({element:l,datasetIndex:c,index:u}),a=a||l.inRange(t.x,t.y,i))}),r&&!a?[]:o}var lk={modes:{index(e,t,n,r){const i=Wn(t,e),o=n.axis||"x",s=n.includeInvisible||!1,a=n.intersect?Nl(e,i,o,r,s):Ol(e,i,o,!1,r,s),l=[];return a.length?(e.getSortedVisibleDatasetMetas().forEach(c=>{const u=a[0].index,f=c.data[u];f&&!f.skip&&l.push({element:f,datasetIndex:c.index,index:u})}),l):[]},dataset(e,t,n,r){const i=Wn(t,e),o=n.axis||"xy",s=n.includeInvisible||!1;let a=n.intersect?Nl(e,i,o,r,s):Ol(e,i,o,!1,r,s);if(a.length>0){const l=a[0].datasetIndex,c=e.getDatasetMeta(l).data;a=[];for(let u=0;u<c.length;++u)a.push({element:c[u],datasetIndex:l,index:u})}return a},point(e,t,n,r){const i=Wn(t,e),o=n.axis||"xy",s=n.includeInvisible||!1;return Nl(e,i,o,r,s)},nearest(e,t,n,r){const i=Wn(t,e),o=n.axis||"xy",s=n.includeInvisible||!1;return Ol(e,i,o,n.intersect,r,s)},x(e,t,n,r){const i=Wn(t,e);return ep(e,i,"x",n.intersect,r)},y(e,t,n,r){const i=Wn(t,e);return ep(e,i,"y",n.intersect,r)}}};const Gv=["left","top","right","bottom"];function pi(e,t){return e.filter(n=>n.pos===t)}function tp(e,t){return e.filter(n=>Gv.indexOf(n.pos)===-1&&n.box.axis===t)}function mi(e,t){return e.sort((n,r)=>{const i=t?r:n,o=t?n:r;return i.weight===o.weight?i.index-o.index:i.weight-o.weight})}function ck(e){const t=[];let n,r,i,o,s,a;for(n=0,r=(e||[]).length;n<r;++n)i=e[n],{position:o,options:{stack:s,stackWeight:a=1}}=i,t.push({index:n,box:i,pos:o,horizontal:i.isHorizontal(),weight:i.weight,stack:s&&o+s,stackWeight:a});return t}function uk(e){const t={};for(const n of e){const{stack:r,pos:i,stackWeight:o}=n;if(!r||!Gv.includes(i))continue;const s=t[r]||(t[r]={count:0,placed:0,weight:0,size:0});s.count++,s.weight+=o}return t}function fk(e,t){const n=uk(e),{vBoxMaxWidth:r,hBoxMaxHeight:i}=t;let o,s,a;for(o=0,s=e.length;o<s;++o){a=e[o];const{fullSize:l}=a.box,c=n[a.stack],u=c&&a.stackWeight/c.weight;a.horizontal?(a.width=u?u*r:l&&t.availableWidth,a.height=i):(a.width=r,a.height=u?u*i:l&&t.availableHeight)}return n}function dk(e){const t=ck(e),n=mi(t.filter(c=>c.box.fullSize),!0),r=mi(pi(t,"left"),!0),i=mi(pi(t,"right")),o=mi(pi(t,"top"),!0),s=mi(pi(t,"bottom")),a=tp(t,"x"),l=tp(t,"y");return{fullSize:n,leftAndTop:r.concat(o),rightAndBottom:i.concat(l).concat(s).concat(a),chartArea:pi(t,"chartArea"),vertical:r.concat(i).concat(l),horizontal:o.concat(s).concat(a)}}function np(e,t,n,r){return Math.max(e[n],t[n])+Math.max(e[r],t[r])}function Qv(e,t){e.top=Math.max(e.top,t.top),e.left=Math.max(e.left,t.left),e.bottom=Math.max(e.bottom,t.bottom),e.right=Math.max(e.right,t.right)}function hk(e,t,n,r){const{pos:i,box:o}=n,s=e.maxPadding;if(!K(i)){n.size&&(e[i]-=n.size);const f=r[n.stack]||{size:0,count:1};f.size=Math.max(f.size,n.horizontal?o.height:o.width),n.size=f.size/f.count,e[i]+=n.size}o.getPadding&&Qv(s,o.getPadding());const a=Math.max(0,t.outerWidth-np(s,e,"left","right")),l=Math.max(0,t.outerHeight-np(s,e,"top","bottom")),c=a!==e.w,u=l!==e.h;return e.w=a,e.h=l,n.horizontal?{same:c,other:u}:{same:u,other:c}}function pk(e){const t=e.maxPadding;function n(r){const i=Math.max(t[r]-e[r],0);return e[r]+=i,i}e.y+=n("top"),e.x+=n("left"),n("right"),n("bottom")}function mk(e,t){const n=t.maxPadding;function r(i){const o={left:0,top:0,right:0,bottom:0};return i.forEach(s=>{o[s]=Math.max(t[s],n[s])}),o}return r(e?["left","right"]:["top","bottom"])}function Si(e,t,n,r){const i=[];let o,s,a,l,c,u;for(o=0,s=e.length,c=0;o<s;++o){a=e[o],l=a.box,l.update(a.width||t.w,a.height||t.h,mk(a.horizontal,t));const{same:f,other:d}=hk(t,n,a,r);c|=f&&i.length,u=u||d,l.fullSize||i.push(a)}return c&&Si(i,t,n,r)||u}function rs(e,t,n,r,i){e.top=n,e.left=t,e.right=t+r,e.bottom=n+i,e.width=r,e.height=i}function rp(e,t,n,r){const i=n.padding;let{x:o,y:s}=t;for(const a of e){const l=a.box,c=r[a.stack]||{placed:0,weight:1},u=a.stackWeight/c.weight||1;if(a.horizontal){const f=t.w*u,d=c.size||l.height;sa(c.start)&&(s=c.start),l.fullSize?rs(l,i.left,s,n.outerWidth-i.right-i.left,d):rs(l,t.left+c.placed,s,f,d),c.start=s,c.placed+=f,s=l.bottom}else{const f=t.h*u,d=c.size||l.width;sa(c.start)&&(o=c.start),l.fullSize?rs(l,o,i.top,d,n.outerHeight-i.bottom-i.top):rs(l,o,t.top+c.placed,d,f),c.start=o,c.placed+=f,o=l.right}}t.x=o,t.y=s}var hn={addBox(e,t){e.boxes||(e.boxes=[]),t.fullSize=t.fullSize||!1,t.position=t.position||"top",t.weight=t.weight||0,t._layers=t._layers||function(){return[{z:0,draw(n){t.draw(n)}}]},e.boxes.push(t)},removeBox(e,t){const n=e.boxes?e.boxes.indexOf(t):-1;n!==-1&&e.boxes.splice(n,1)},configure(e,t,n){t.fullSize=n.fullSize,t.position=n.position,t.weight=n.weight},update(e,t,n,r){if(!e)return;const i=De(e.options.layout.padding),o=Math.max(t-i.width,0),s=Math.max(n-i.height,0),a=dk(e.boxes),l=a.vertical,c=a.horizontal;J(e.boxes,p=>{typeof p.beforeLayout=="function"&&p.beforeLayout()});const u=l.reduce((p,b)=>b.box.options&&b.box.options.display===!1?p:p+1,0)||1,f=Object.freeze({outerWidth:t,outerHeight:n,padding:i,availableWidth:o,availableHeight:s,vBoxMaxWidth:o/2/u,hBoxMaxHeight:s/2}),d=Object.assign({},i);Qv(d,De(r));const h=Object.assign({maxPadding:d,w:o,h:s,x:i.left,y:i.top},i),g=fk(l.concat(c),f);Si(a.fullSize,h,f,g),Si(l,h,f,g),Si(c,h,f,g)&&Si(l,h,f,g),pk(h),rp(a.leftAndTop,h,f,g),h.x+=h.w,h.y+=h.h,rp(a.rightAndBottom,h,f,g),e.chartArea={left:h.left,top:h.top,right:h.left+h.w,bottom:h.top+h.h,height:h.h,width:h.w},J(a.chartArea,p=>{const b=p.box;Object.assign(b,e.chartArea),b.update(h.w,h.h,{left:0,top:0,right:0,bottom:0})})}};class qv{acquireContext(t,n){}releaseContext(t){return!1}addEventListener(t,n,r){}removeEventListener(t,n,r){}getDevicePixelRatio(){return 1}getMaximumSize(t,n,r,i){return n=Math.max(0,n||t.width),r=r||t.height,{width:n,height:Math.max(0,i?Math.floor(n/i):r)}}isAttached(t){return!0}updateConfig(t){}}class gk extends qv{acquireContext(t){return t&&t.getContext&&t.getContext("2d")||null}updateConfig(t){t.options.animation=!1}}const Cs="$chartjs",vk={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},ip=e=>e===null||e==="";function yk(e,t){const n=e.style,r=e.getAttribute("height"),i=e.getAttribute("width");if(e[Cs]={initial:{height:r,width:i,style:{display:n.display,height:n.height,width:n.width}}},n.display=n.display||"block",n.boxSizing=n.boxSizing||"border-box",ip(i)){const o=Uh(e,"width");o!==void 0&&(e.width=o)}if(ip(r))if(e.style.height==="")e.height=e.width/(t||2);else{const o=Uh(e,"height");o!==void 0&&(e.height=o)}return e}const Jv=j_?{passive:!0}:!1;function xk(e,t,n){e&&e.addEventListener(t,n,Jv)}function bk(e,t,n){e&&e.canvas&&e.canvas.removeEventListener(t,n,Jv)}function wk(e,t){const n=vk[e.type]||e.type,{x:r,y:i}=Wn(e,t);return{type:n,chart:t,native:e,x:r!==void 0?r:null,y:i!==void 0?i:null}}function da(e,t){for(const n of e)if(n===t||n.contains(t))return!0}function _k(e,t,n){const r=e.canvas,i=new MutationObserver(o=>{let s=!1;for(const a of o)s=s||da(a.addedNodes,r),s=s&&!da(a.removedNodes,r);s&&n()});return i.observe(document,{childList:!0,subtree:!0}),i}function kk(e,t,n){const r=e.canvas,i=new MutationObserver(o=>{let s=!1;for(const a of o)s=s||da(a.removedNodes,r),s=s&&!da(a.addedNodes,r);s&&n()});return i.observe(document,{childList:!0,subtree:!0}),i}const go=new Map;let op=0;function Zv(){const e=window.devicePixelRatio;e!==op&&(op=e,go.forEach((t,n)=>{n.currentDevicePixelRatio!==e&&t()}))}function Sk(e,t){go.size||window.addEventListener("resize",Zv),go.set(e,t)}function Ck(e){go.delete(e),go.size||window.removeEventListener("resize",Zv)}function Pk(e,t,n){const r=e.canvas,i=r&&Cf(r);if(!i)return;const o=Ov((a,l)=>{const c=i.clientWidth;n(a,l),c<i.clientWidth&&n()},window),s=new ResizeObserver(a=>{const l=a[0],c=l.contentRect.width,u=l.contentRect.height;c===0&&u===0||o(c,u)});return s.observe(i),Sk(e,o),s}function jl(e,t,n){n&&n.disconnect(),t==="resize"&&Ck(e)}function Ek(e,t,n){const r=e.canvas,i=Ov(o=>{e.ctx!==null&&n(wk(o,e))},e);return xk(r,t,i),i}class Mk extends qv{acquireContext(t,n){const r=t&&t.getContext&&t.getContext("2d");return r&&r.canvas===t?(yk(t,n),r):null}releaseContext(t){const n=t.canvas;if(!n[Cs])return!1;const r=n[Cs].initial;["height","width"].forEach(o=>{const s=r[o];re(s)?n.removeAttribute(o):n.setAttribute(o,s)});const i=r.style||{};return Object.keys(i).forEach(o=>{n.style[o]=i[o]}),n.width=n.width,delete n[Cs],!0}addEventListener(t,n,r){this.removeEventListener(t,n);const i=t.$proxies||(t.$proxies={}),s={attach:_k,detach:kk,resize:Pk}[n]||Ek;i[n]=s(t,n,r)}removeEventListener(t,n){const r=t.$proxies||(t.$proxies={}),i=r[n];if(!i)return;({attach:jl,detach:jl,resize:jl}[n]||bk)(t,n,i),r[n]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,n,r,i){return O_(t,n,r,i)}isAttached(t){const n=t&&Cf(t);return!!(n&&n.isConnected)}}function Nk(e){return!Sf()||typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas?gk:Mk}class On{constructor(){U(this,"x");U(this,"y");U(this,"active",!1);U(this,"options");U(this,"$animations")}tooltipPosition(t){const{x:n,y:r}=this.getProps(["x","y"],t);return{x:n,y:r}}hasValue(){return la(this.x)&&la(this.y)}getProps(t,n){const r=this.$animations;if(!n||!r)return this;const i={};return t.forEach(o=>{i[o]=r[o]&&r[o].active()?r[o]._to:this[o]}),i}}U(On,"defaults",{}),U(On,"defaultRoutes");function Ok(e,t){const n=e.options.ticks,r=jk(e),i=Math.min(n.maxTicksLimit||r,r),o=n.major.enabled?Ak(t):[],s=o.length,a=o[0],l=o[s-1],c=[];if(s>i)return zk(t,c,o,s/i),c;const u=Tk(o,t,i);if(s>0){let f,d;const h=s>1?Math.round((l-a)/(s-1)):null;for(is(t,c,u,re(h)?0:a-h,a),f=0,d=s-1;f<d;f++)is(t,c,u,o[f],o[f+1]);return is(t,c,u,l,re(h)?t.length:l+h),c}return is(t,c,u),c}function jk(e){const t=e.options.offset,n=e._tickSize(),r=e._length/n+(t?0:1),i=e._maxLength/n;return Math.floor(Math.min(r,i))}function Tk(e,t,n){const r=Lk(e),i=t.length/n;if(!r)return Math.max(i,1);const o=E3(r);for(let s=0,a=o.length-1;s<a;s++){const l=o[s];if(l>i)return l}return Math.max(i,1)}function Ak(e){const t=[];let n,r;for(n=0,r=e.length;n<r;n++)e[n].major&&t.push(n);return t}function zk(e,t,n,r){let i=0,o=n[0],s;for(r=Math.ceil(r),s=0;s<e.length;s++)s===o&&(t.push(e[s]),i++,o=n[i*r])}function is(e,t,n,r,i){const o=X(r,0),s=Math.min(X(i,e.length),e.length);let a=0,l,c,u;for(n=Math.ceil(n),i&&(l=i-r,n=l/Math.floor(l/n)),u=o;u<0;)a++,u=Math.round(o+a*n);for(c=Math.max(o,0);c<s;c++)c===u&&(t.push(e[c]),a++,u=Math.round(o+a*n))}function Lk(e){const t=e.length;let n,r;if(t<2)return!1;for(r=e[0],n=1;n<t;++n)if(e[n]-e[n-1]!==r)return!1;return r}const Ik=e=>e==="left"?"right":e==="right"?"left":e,sp=(e,t,n)=>t==="top"||t==="left"?e[t]+n:e[t]-n,ap=(e,t)=>Math.min(t||e,e);function lp(e,t){const n=[],r=e.length/t,i=e.length;let o=0;for(;o<i;o+=r)n.push(e[Math.floor(o)]);return n}function Dk(e,t,n){const r=e.ticks.length,i=Math.min(t,r-1),o=e._startPixel,s=e._endPixel,a=1e-6;let l=e.getPixelForTick(i),c;if(!(n&&(r===1?c=Math.max(l-o,s-l):t===0?c=(e.getPixelForTick(1)-l)/2:c=(l-e.getPixelForTick(i-1))/2,l+=i<t?c:-c,l<o-a||l>s+a)))return l}function Rk(e,t){J(e,n=>{const r=n.gc,i=r.length/2;let o;if(i>t){for(o=0;o<i;++o)delete n.data[r[o]];r.splice(0,i)}})}function gi(e){return e.drawTicks?e.tickLength:0}function cp(e,t){if(!e.display)return 0;const n=Ce(e.font,t),r=De(e.padding);return(de(e.text)?e.text.length:1)*n.lineHeight+r.height}function Fk(e,t){return zn(e,{scale:t,type:"scale"})}function $k(e,t,n){return zn(e,{tick:n,index:t,type:"tick"})}function Wk(e,t,n){let r=jv(e);return(n&&t!=="right"||!n&&t==="right")&&(r=Ik(r)),r}function Hk(e,t,n,r){const{top:i,left:o,bottom:s,right:a,chart:l}=e,{chartArea:c,scales:u}=l;let f=0,d,h,g;const p=s-i,b=a-o;if(e.isHorizontal()){if(h=Xe(r,o,a),K(n)){const y=Object.keys(n)[0],v=n[y];g=u[y].getPixelForValue(v)+p-t}else n==="center"?g=(c.bottom+c.top)/2+p-t:g=sp(e,n,t);d=a-o}else{if(K(n)){const y=Object.keys(n)[0],v=n[y];h=u[y].getPixelForValue(v)-b+t}else n==="center"?h=(c.left+c.right)/2-b+t:h=sp(e,n,t);g=Xe(r,s,i),f=n==="left"?-qe:qe}return{titleX:h,titleY:g,maxWidth:d,rotation:f}}class Mo extends On{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax)}parse(t,n){return t}getUserBounds(){let{_userMin:t,_userMax:n,_suggestedMin:r,_suggestedMax:i}=this;return t=Et(t,Number.POSITIVE_INFINITY),n=Et(n,Number.NEGATIVE_INFINITY),r=Et(r,Number.POSITIVE_INFINITY),i=Et(i,Number.NEGATIVE_INFINITY),{min:Et(t,r),max:Et(n,i),minDefined:ze(t),maxDefined:ze(n)}}getMinMax(t){let{min:n,max:r,minDefined:i,maxDefined:o}=this.getUserBounds(),s;if(i&&o)return{min:n,max:r};const a=this.getMatchingVisibleMetas();for(let l=0,c=a.length;l<c;++l)s=a[l].controller.getMinMax(this,t),i||(n=Math.min(n,s.min)),o||(r=Math.max(r,s.max));return n=o&&n>r?r:n,r=i&&n>r?n:r,{min:Et(n,Et(r,n)),max:Et(r,Et(n,r))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}getLabelItems(t=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(t))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){ee(this.options.beforeUpdate,[this])}update(t,n,r){const{beginAtZero:i,grace:o,ticks:s}=this.options,a=s.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=n,this._margins=r=Object.assign({left:0,right:0,top:0,bottom:0},r),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+r.left+r.right:this.height+r.top+r.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=a_(this,o,i),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const l=a<this.ticks.length;this._convertTicksToLabels(l?lp(this.ticks,a):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),s.display&&(s.autoSkip||s.source==="auto")&&(this.ticks=Ok(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),l&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let t=this.options.reverse,n,r;this.isHorizontal()?(n=this.left,r=this.right):(n=this.top,r=this.bottom,t=!t),this._startPixel=n,this._endPixel=r,this._reversePixels=t,this._length=r-n,this._alignToPixels=this.options.alignToPixels}afterUpdate(){ee(this.options.afterUpdate,[this])}beforeSetDimensions(){ee(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){ee(this.options.afterSetDimensions,[this])}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),ee(this.options[t],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){ee(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){const n=this.options.ticks;let r,i,o;for(r=0,i=t.length;r<i;r++)o=t[r],o.label=ee(n.callback,[o.value,r,t],this)}afterTickToLabelConversion(){ee(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){ee(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const t=this.options,n=t.ticks,r=ap(this.ticks.length,t.ticks.maxTicksLimit),i=n.minRotation||0,o=n.maxRotation;let s=i,a,l,c;if(!this._isVisible()||!n.display||i>=o||r<=1||!this.isHorizontal()){this.labelRotation=i;return}const u=this._getLabelSizes(),f=u.widest.width,d=u.highest.height,h=Vt(this.chart.width-f,0,this.maxWidth);a=t.offset?this.maxWidth/r:h/(r-1),f+6>a&&(a=h/(r-(t.offset?.5:1)),l=this.maxHeight-gi(t.grid)-n.padding-cp(t.title,this.chart.options.font),c=Math.sqrt(f*f+d*d),s=yf(Math.min(Math.asin(Vt((u.highest.height+6)/a,-1,1)),Math.asin(Vt(l/c,-1,1))-Math.asin(Vt(d/c,-1,1)))),s=Math.max(i,Math.min(o,s))),this.labelRotation=s}afterCalculateLabelRotation(){ee(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){ee(this.options.beforeFit,[this])}fit(){const t={width:0,height:0},{chart:n,options:{ticks:r,title:i,grid:o}}=this,s=this._isVisible(),a=this.isHorizontal();if(s){const l=cp(i,n.options.font);if(a?(t.width=this.maxWidth,t.height=gi(o)+l):(t.height=this.maxHeight,t.width=gi(o)+l),r.display&&this.ticks.length){const{first:c,last:u,widest:f,highest:d}=this._getLabelSizes(),h=r.padding*2,g=Xn(this.labelRotation),p=Math.cos(g),b=Math.sin(g);if(a){const y=r.mirror?0:b*f.width+p*d.height;t.height=Math.min(this.maxHeight,t.height+y+h)}else{const y=r.mirror?0:p*f.width+b*d.height;t.width=Math.min(this.maxWidth,t.width+y+h)}this._calculatePadding(c,u,b,p)}}this._handleMargins(),a?(this.width=this._length=n.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=n.height-this._margins.top-this._margins.bottom)}_calculatePadding(t,n,r,i){const{ticks:{align:o,padding:s},position:a}=this.options,l=this.labelRotation!==0,c=a!=="top"&&this.axis==="x";if(this.isHorizontal()){const u=this.getPixelForTick(0)-this.left,f=this.right-this.getPixelForTick(this.ticks.length-1);let d=0,h=0;l?c?(d=i*t.width,h=r*n.height):(d=r*t.height,h=i*n.width):o==="start"?h=n.width:o==="end"?d=t.width:o!=="inner"&&(d=t.width/2,h=n.width/2),this.paddingLeft=Math.max((d-u+s)*this.width/(this.width-u),0),this.paddingRight=Math.max((h-f+s)*this.width/(this.width-f),0)}else{let u=n.height/2,f=t.height/2;o==="start"?(u=0,f=t.height):o==="end"&&(u=n.height,f=0),this.paddingTop=u+s,this.paddingBottom=f+s}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){ee(this.options.afterFit,[this])}isHorizontal(){const{axis:t,position:n}=this.options;return n==="top"||n==="bottom"||t==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){this.beforeTickToLabelConversion(),this.generateTickLabels(t);let n,r;for(n=0,r=t.length;n<r;n++)re(t[n].label)&&(t.splice(n,1),r--,n--);this.afterTickToLabelConversion()}_getLabelSizes(){let t=this._labelSizes;if(!t){const n=this.options.ticks.sampleSize;let r=this.ticks;n<r.length&&(r=lp(r,n)),this._labelSizes=t=this._computeLabelSizes(r,r.length,this.options.ticks.maxTicksLimit)}return t}_computeLabelSizes(t,n,r){const{ctx:i,_longestTextCache:o}=this,s=[],a=[],l=Math.floor(n/ap(n,r));let c=0,u=0,f,d,h,g,p,b,y,v,x,_,w;for(f=0;f<n;f+=l){if(g=t[f].label,p=this._resolveTickFontOptions(f),i.font=b=p.string,y=o[b]=o[b]||{data:{},gc:[]},v=p.lineHeight,x=_=0,!re(g)&&!de(g))x=ca(i,y.data,y.gc,x,g),_=v;else if(de(g))for(d=0,h=g.length;d<h;++d)w=g[d],!re(w)&&!de(w)&&(x=ca(i,y.data,y.gc,x,w),_+=v);s.push(x),a.push(_),c=Math.max(x,c),u=Math.max(_,u)}Rk(o,n);const S=s.indexOf(c),E=a.indexOf(u),C=P=>({width:s[P]||0,height:a[P]||0});return{first:C(0),last:C(n-1),widest:C(S),highest:C(E),widths:s,heights:a}}getLabelForValue(t){return t}getPixelForValue(t,n){return NaN}getValueForPixel(t){}getPixelForTick(t){const n=this.ticks;return t<0||t>n.length-1?null:this.getPixelForValue(n[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);const n=this._startPixel+t*this._length;return A3(this._alignToPixels?In(this.chart,n,0):n)}getDecimalForPixel(t){const n=(t-this._startPixel)/this._length;return this._reversePixels?1-n:n}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:t,max:n}=this;return t<0&&n<0?n:t>0&&n>0?t:0}getContext(t){const n=this.ticks||[];if(t>=0&&t<n.length){const r=n[t];return r.$context||(r.$context=$k(this.getContext(),t,r))}return this.$context||(this.$context=Fk(this.chart.getContext(),this))}_tickSize(){const t=this.options.ticks,n=Xn(this.labelRotation),r=Math.abs(Math.cos(n)),i=Math.abs(Math.sin(n)),o=this._getLabelSizes(),s=t.autoSkipPadding||0,a=o?o.widest.width+s:0,l=o?o.highest.height+s:0;return this.isHorizontal()?l*r>a*i?a/r:l/i:l*i<a*r?l/r:a/i}_isVisible(){const t=this.options.display;return t!=="auto"?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){const n=this.axis,r=this.chart,i=this.options,{grid:o,position:s,border:a}=i,l=o.offset,c=this.isHorizontal(),f=this.ticks.length+(l?1:0),d=gi(o),h=[],g=a.setContext(this.getContext()),p=g.display?g.width:0,b=p/2,y=function(B){return In(r,B,p)};let v,x,_,w,S,E,C,P,N,L,$,se;if(s==="top")v=y(this.bottom),E=this.bottom-d,P=v-b,L=y(t.top)+b,se=t.bottom;else if(s==="bottom")v=y(this.top),L=t.top,se=y(t.bottom)-b,E=v+b,P=this.top+d;else if(s==="left")v=y(this.right),S=this.right-d,C=v-b,N=y(t.left)+b,$=t.right;else if(s==="right")v=y(this.left),N=t.left,$=y(t.right)-b,S=v+b,C=this.left+d;else if(n==="x"){if(s==="center")v=y((t.top+t.bottom)/2+.5);else if(K(s)){const B=Object.keys(s)[0],k=s[B];v=y(this.chart.scales[B].getPixelForValue(k))}L=t.top,se=t.bottom,E=v+b,P=E+d}else if(n==="y"){if(s==="center")v=y((t.left+t.right)/2);else if(K(s)){const B=Object.keys(s)[0],k=s[B];v=y(this.chart.scales[B].getPixelForValue(k))}S=v-b,C=S-d,N=t.left,$=t.right}const F=X(i.ticks.maxTicksLimit,f),A=Math.max(1,Math.ceil(f/F));for(x=0;x<f;x+=A){const B=this.getContext(x),k=o.setContext(B),M=a.setContext(B),I=k.lineWidth,D=k.color,W=M.dash||[],G=M.dashOffset,xe=k.tickWidth,me=k.tickColor,dt=k.tickBorderDash||[],ke=k.tickBorderDashOffset;_=Dk(this,x,l),_!==void 0&&(w=In(r,_,I),c?S=C=N=$=w:E=P=L=se=w,h.push({tx1:S,ty1:E,tx2:C,ty2:P,x1:N,y1:L,x2:$,y2:se,width:I,color:D,borderDash:W,borderDashOffset:G,tickWidth:xe,tickColor:me,tickBorderDash:dt,tickBorderDashOffset:ke}))}return this._ticksLength=f,this._borderValue=v,h}_computeLabelItems(t){const n=this.axis,r=this.options,{position:i,ticks:o}=r,s=this.isHorizontal(),a=this.ticks,{align:l,crossAlign:c,padding:u,mirror:f}=o,d=gi(r.grid),h=d+u,g=f?-u:h,p=-Xn(this.labelRotation),b=[];let y,v,x,_,w,S,E,C,P,N,L,$,se="middle";if(i==="top")S=this.bottom-g,E=this._getXAxisLabelAlignment();else if(i==="bottom")S=this.top+g,E=this._getXAxisLabelAlignment();else if(i==="left"){const A=this._getYAxisLabelAlignment(d);E=A.textAlign,w=A.x}else if(i==="right"){const A=this._getYAxisLabelAlignment(d);E=A.textAlign,w=A.x}else if(n==="x"){if(i==="center")S=(t.top+t.bottom)/2+h;else if(K(i)){const A=Object.keys(i)[0],B=i[A];S=this.chart.scales[A].getPixelForValue(B)+h}E=this._getXAxisLabelAlignment()}else if(n==="y"){if(i==="center")w=(t.left+t.right)/2-h;else if(K(i)){const A=Object.keys(i)[0],B=i[A];w=this.chart.scales[A].getPixelForValue(B)}E=this._getYAxisLabelAlignment(d).textAlign}n==="y"&&(l==="start"?se="top":l==="end"&&(se="bottom"));const F=this._getLabelSizes();for(y=0,v=a.length;y<v;++y){x=a[y],_=x.label;const A=o.setContext(this.getContext(y));C=this.getPixelForTick(y)+o.labelOffset,P=this._resolveTickFontOptions(y),N=P.lineHeight,L=de(_)?_.length:1;const B=L/2,k=A.color,M=A.textStrokeColor,I=A.textStrokeWidth;let D=E;s?(w=C,E==="inner"&&(y===v-1?D=this.options.reverse?"left":"right":y===0?D=this.options.reverse?"right":"left":D="center"),i==="top"?c==="near"||p!==0?$=-L*N+N/2:c==="center"?$=-F.highest.height/2-B*N+N:$=-F.highest.height+N/2:c==="near"||p!==0?$=N/2:c==="center"?$=F.highest.height/2-B*N:$=F.highest.height-L*N,f&&($*=-1),p!==0&&!A.showLabelBackdrop&&(w+=N/2*Math.sin(p))):(S=C,$=(1-L)*N/2);let W;if(A.showLabelBackdrop){const G=De(A.backdropPadding),xe=F.heights[y],me=F.widths[y];let dt=$-G.top,ke=0-G.left;switch(se){case"middle":dt-=xe/2;break;case"bottom":dt-=xe;break}switch(E){case"center":ke-=me/2;break;case"right":ke-=me;break;case"inner":y===v-1?ke-=me:y>0&&(ke-=me/2);break}W={left:ke,top:dt,width:me+G.width,height:xe+G.height,color:A.backdropColor}}b.push({label:_,font:P,textOffset:$,options:{rotation:p,color:k,strokeColor:M,strokeWidth:I,textAlign:D,textBaseline:se,translation:[w,S],backdrop:W}})}return b}_getXAxisLabelAlignment(){const{position:t,ticks:n}=this.options;if(-Xn(this.labelRotation))return t==="top"?"left":"right";let i="center";return n.align==="start"?i="left":n.align==="end"?i="right":n.align==="inner"&&(i="inner"),i}_getYAxisLabelAlignment(t){const{position:n,ticks:{crossAlign:r,mirror:i,padding:o}}=this.options,s=this._getLabelSizes(),a=t+o,l=s.widest.width;let c,u;return n==="left"?i?(u=this.right+o,r==="near"?c="left":r==="center"?(c="center",u+=l/2):(c="right",u+=l)):(u=this.right-a,r==="near"?c="right":r==="center"?(c="center",u-=l/2):(c="left",u=this.left)):n==="right"?i?(u=this.left+o,r==="near"?c="right":r==="center"?(c="center",u-=l/2):(c="left",u-=l)):(u=this.left+a,r==="near"?c="left":r==="center"?(c="center",u+=l/2):(c="right",u=this.right)):c="right",{textAlign:c,x:u}}_computeLabelArea(){if(this.options.ticks.mirror)return;const t=this.chart,n=this.options.position;if(n==="left"||n==="right")return{top:0,left:this.left,bottom:t.height,right:this.right};if(n==="top"||n==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:t.width}}drawBackground(){const{ctx:t,options:{backgroundColor:n},left:r,top:i,width:o,height:s}=this;n&&(t.save(),t.fillStyle=n,t.fillRect(r,i,o,s),t.restore())}getLineWidthForValue(t){const n=this.options.grid;if(!this._isVisible()||!n.display)return 0;const i=this.ticks.findIndex(o=>o.value===t);return i>=0?n.setContext(this.getContext(i)).lineWidth:0}drawGrid(t){const n=this.options.grid,r=this.ctx,i=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t));let o,s;const a=(l,c,u)=>{!u.width||!u.color||(r.save(),r.lineWidth=u.width,r.strokeStyle=u.color,r.setLineDash(u.borderDash||[]),r.lineDashOffset=u.borderDashOffset,r.beginPath(),r.moveTo(l.x,l.y),r.lineTo(c.x,c.y),r.stroke(),r.restore())};if(n.display)for(o=0,s=i.length;o<s;++o){const l=i[o];n.drawOnChartArea&&a({x:l.x1,y:l.y1},{x:l.x2,y:l.y2},l),n.drawTicks&&a({x:l.tx1,y:l.ty1},{x:l.tx2,y:l.ty2},{color:l.tickColor,width:l.tickWidth,borderDash:l.tickBorderDash,borderDashOffset:l.tickBorderDashOffset})}}drawBorder(){const{chart:t,ctx:n,options:{border:r,grid:i}}=this,o=r.setContext(this.getContext()),s=r.display?o.width:0;if(!s)return;const a=i.setContext(this.getContext(0)).lineWidth,l=this._borderValue;let c,u,f,d;this.isHorizontal()?(c=In(t,this.left,s)-s/2,u=In(t,this.right,a)+a/2,f=d=l):(f=In(t,this.top,s)-s/2,d=In(t,this.bottom,a)+a/2,c=u=l),n.save(),n.lineWidth=o.width,n.strokeStyle=o.color,n.beginPath(),n.moveTo(c,f),n.lineTo(u,d),n.stroke(),n.restore()}drawLabels(t){if(!this.options.ticks.display)return;const r=this.ctx,i=this._computeLabelArea();i&&Da(r,i);const o=this.getLabelItems(t);for(const s of o){const a=s.options,l=s.font,c=s.label,u=s.textOffset;Qr(r,c,0,u,l,a)}i&&Ra(r)}drawTitle(){const{ctx:t,options:{position:n,title:r,reverse:i}}=this;if(!r.display)return;const o=Ce(r.font),s=De(r.padding),a=r.align;let l=o.lineHeight/2;n==="bottom"||n==="center"||K(n)?(l+=s.bottom,de(r.text)&&(l+=o.lineHeight*(r.text.length-1))):l+=s.top;const{titleX:c,titleY:u,maxWidth:f,rotation:d}=Hk(this,l,n,a);Qr(t,r.text,0,0,o,{color:r.color,maxWidth:f,rotation:d,textAlign:Wk(a,n,i),textBaseline:"middle",translation:[c,u]})}draw(t){this._isVisible()&&(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t))}_layers(){const t=this.options,n=t.ticks&&t.ticks.z||0,r=X(t.grid&&t.grid.z,-1),i=X(t.border&&t.border.z,0);return!this._isVisible()||this.draw!==Mo.prototype.draw?[{z:n,draw:o=>{this.draw(o)}}]:[{z:r,draw:o=>{this.drawBackground(),this.drawGrid(o),this.drawTitle()}},{z:i,draw:()=>{this.drawBorder()}},{z:n,draw:o=>{this.drawLabels(o)}}]}getMatchingVisibleMetas(t){const n=this.chart.getSortedVisibleDatasetMetas(),r=this.axis+"AxisID",i=[];let o,s;for(o=0,s=n.length;o<s;++o){const a=n[o];a[r]===this.id&&(!t||a.type===t)&&i.push(a)}return i}_resolveTickFontOptions(t){const n=this.options.ticks.setContext(this.getContext(t));return Ce(n.font)}_maxDigits(){const t=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/t}}class os{constructor(t,n,r){this.type=t,this.scope=n,this.override=r,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){const n=Object.getPrototypeOf(t);let r;Vk(n)&&(r=this.register(n));const i=this.items,o=t.id,s=this.scope+"."+o;if(!o)throw new Error("class does not have id: "+t);return o in i||(i[o]=t,Bk(t,s,r),this.override&&he.override(t.id,t.overrides)),s}get(t){return this.items[t]}unregister(t){const n=this.items,r=t.id,i=this.scope;r in n&&delete n[r],i&&r in he[i]&&(delete he[i][r],this.override&&delete ar[r])}}function Bk(e,t,n){const r=po(Object.create(null),[n?he.get(n):{},he.get(t),e.defaults]);he.set(t,r),e.defaultRoutes&&Uk(t,e.defaultRoutes),e.descriptors&&he.describe(t,e.descriptors)}function Uk(e,t){Object.keys(t).forEach(n=>{const r=n.split("."),i=r.pop(),o=[e].concat(r).join("."),s=t[n].split("."),a=s.pop(),l=s.join(".");he.route(o,i,l,a)})}function Vk(e){return"id"in e&&"defaults"in e}class Yk{constructor(){this.controllers=new os(Ui,"datasets",!0),this.elements=new os(On,"elements"),this.plugins=new os(Object,"plugins"),this.scales=new os(Mo,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t){this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t){this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t){this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t){this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t){this._each("unregister",t,this.scales)}_each(t,n,r){[...n].forEach(i=>{const o=r||this._getRegistryForType(i);r||o.isForType(i)||o===this.plugins&&i.id?this._exec(t,o,i):J(i,s=>{const a=r||this._getRegistryForType(s);this._exec(t,a,s)})})}_exec(t,n,r){const i=vf(t);ee(r["before"+i],[],r),n[t](r),ee(r["after"+i],[],r)}_getRegistryForType(t){for(let n=0;n<this._typedRegistries.length;n++){const r=this._typedRegistries[n];if(r.isForType(t))return r}return this.plugins}_get(t,n,r){const i=n.get(t);if(i===void 0)throw new Error('"'+t+'" is not a registered '+r+".");return i}}var Ot=new Yk;class Xk{constructor(){this._init=[]}notify(t,n,r,i){n==="beforeInit"&&(this._init=this._createDescriptors(t,!0),this._notify(this._init,t,"install"));const o=i?this._descriptors(t).filter(i):this._descriptors(t),s=this._notify(o,t,n,r);return n==="afterDestroy"&&(this._notify(o,t,"stop"),this._notify(this._init,t,"uninstall")),s}_notify(t,n,r,i){i=i||{};for(const o of t){const s=o.plugin,a=s[r],l=[n,i,o.options];if(ee(a,l,s)===!1&&i.cancelable)return!1}return!0}invalidate(){re(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(t){if(this._cache)return this._cache;const n=this._cache=this._createDescriptors(t);return this._notifyStateChanges(t),n}_createDescriptors(t,n){const r=t&&t.config,i=X(r.options&&r.options.plugins,{}),o=Kk(r);return i===!1&&!n?[]:Qk(t,o,i,n)}_notifyStateChanges(t){const n=this._oldCache||[],r=this._cache,i=(o,s)=>o.filter(a=>!s.some(l=>a.plugin.id===l.plugin.id));this._notify(i(n,r),t,"stop"),this._notify(i(r,n),t,"start")}}function Kk(e){const t={},n=[],r=Object.keys(Ot.plugins.items);for(let o=0;o<r.length;o++)n.push(Ot.getPlugin(r[o]));const i=e.plugins||[];for(let o=0;o<i.length;o++){const s=i[o];n.indexOf(s)===-1&&(n.push(s),t[s.id]=!0)}return{plugins:n,localIds:t}}function Gk(e,t){return!t&&e===!1?null:e===!0?{}:e}function Qk(e,{plugins:t,localIds:n},r,i){const o=[],s=e.getContext();for(const a of t){const l=a.id,c=Gk(r[l],i);c!==null&&o.push({plugin:a,options:qk(e.config,{plugin:a,local:n[l]},c,s)})}return o}function qk(e,{plugin:t,local:n},r,i){const o=e.pluginScopeKeys(t),s=e.getOptionScopes(r,o);return n&&t.defaults&&s.push(t.defaults),e.createResolver(s,i,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function Jc(e,t){const n=he.datasets[e]||{};return((t.datasets||{})[e]||{}).indexAxis||t.indexAxis||n.indexAxis||"x"}function Jk(e,t){let n=e;return e==="_index_"?n=t:e==="_value_"&&(n=t==="x"?"y":"x"),n}function Zk(e,t){return e===t?"_index_":"_value_"}function up(e){if(e==="x"||e==="y"||e==="r")return e}function eS(e){if(e==="top"||e==="bottom")return"x";if(e==="left"||e==="right")return"y"}function Zc(e,...t){if(up(e))return e;for(const n of t){const r=n.axis||eS(n.position)||e.length>1&&up(e[0].toLowerCase());if(r)return r}throw new Error(`Cannot determine type of '${e}' axis. Please provide 'axis' or 'position' option.`)}function fp(e,t,n){if(n[t+"AxisID"]===e)return{axis:t}}function tS(e,t){if(t.data&&t.data.datasets){const n=t.data.datasets.filter(r=>r.xAxisID===e||r.yAxisID===e);if(n.length)return fp(e,"x",n[0])||fp(e,"y",n[0])}return{}}function nS(e,t){const n=ar[e.type]||{scales:{}},r=t.scales||{},i=Jc(e.type,t),o=Object.create(null);return Object.keys(r).forEach(s=>{const a=r[s];if(!K(a))return console.error(`Invalid scale configuration for scale: ${s}`);if(a._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${s}`);const l=Zc(s,a,tS(s,e),he.scales[a.type]),c=Zk(l,i),u=n.scales||{};o[s]=$i(Object.create(null),[{axis:l},a,u[l],u[c]])}),e.data.datasets.forEach(s=>{const a=s.type||e.type,l=s.indexAxis||Jc(a,t),u=(ar[a]||{}).scales||{};Object.keys(u).forEach(f=>{const d=Jk(f,l),h=s[d+"AxisID"]||d;o[h]=o[h]||Object.create(null),$i(o[h],[{axis:d},r[h],u[f]])})}),Object.keys(o).forEach(s=>{const a=o[s];$i(a,[he.scales[a.type],he.scale])}),o}function e1(e){const t=e.options||(e.options={});t.plugins=X(t.plugins,{}),t.scales=nS(e,t)}function t1(e){return e=e||{},e.datasets=e.datasets||[],e.labels=e.labels||[],e}function rS(e){return e=e||{},e.data=t1(e.data),e1(e),e}const dp=new Map,n1=new Set;function ss(e,t){let n=dp.get(e);return n||(n=t(),dp.set(e,n),n1.add(n)),n}const vi=(e,t,n)=>{const r=mo(t,n);r!==void 0&&e.add(r)};class iS{constructor(t){this._config=rS(t),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(t){this._config.type=t}get data(){return this._config.data}set data(t){this._config.data=t1(t)}get options(){return this._config.options}set options(t){this._config.options=t}get plugins(){return this._config.plugins}update(){const t=this._config;this.clearCache(),e1(t)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(t){return ss(t,()=>[[`datasets.${t}`,""]])}datasetAnimationScopeKeys(t,n){return ss(`${t}.transition.${n}`,()=>[[`datasets.${t}.transitions.${n}`,`transitions.${n}`],[`datasets.${t}`,""]])}datasetElementScopeKeys(t,n){return ss(`${t}-${n}`,()=>[[`datasets.${t}.elements.${n}`,`datasets.${t}`,`elements.${n}`,""]])}pluginScopeKeys(t){const n=t.id,r=this.type;return ss(`${r}-plugin-${n}`,()=>[[`plugins.${n}`,...t.additionalOptionScopes||[]]])}_cachedScopes(t,n){const r=this._scopeCache;let i=r.get(t);return(!i||n)&&(i=new Map,r.set(t,i)),i}getOptionScopes(t,n,r){const{options:i,type:o}=this,s=this._cachedScopes(t,r),a=s.get(n);if(a)return a;const l=new Set;n.forEach(u=>{t&&(l.add(t),u.forEach(f=>vi(l,t,f))),u.forEach(f=>vi(l,i,f)),u.forEach(f=>vi(l,ar[o]||{},f)),u.forEach(f=>vi(l,he,f)),u.forEach(f=>vi(l,Qc,f))});const c=Array.from(l);return c.length===0&&c.push(Object.create(null)),n1.has(n)&&s.set(n,c),c}chartOptionScopes(){const{options:t,type:n}=this;return[t,ar[n]||{},he.datasets[n]||{},{type:n},he,Qc]}resolveNamedOptions(t,n,r,i=[""]){const o={$shared:!0},{resolver:s,subPrefixes:a}=hp(this._resolverCache,t,i);let l=s;if(sS(s,n)){o.$shared=!1,r=Nn(r)?r():r;const c=this.createResolver(t,r,a);l=qr(s,r,c)}for(const c of n)o[c]=l[c];return o}createResolver(t,n,r=[""],i){const{resolver:o}=hp(this._resolverCache,t,r);return K(n)?qr(o,n,void 0,i):o}}function hp(e,t,n){let r=e.get(t);r||(r=new Map,e.set(t,r));const i=n.join();let o=r.get(i);return o||(o={resolver:wf(t,n),subPrefixes:n.filter(a=>!a.toLowerCase().includes("hover"))},r.set(i,o)),o}const oS=e=>K(e)&&Object.getOwnPropertyNames(e).some(t=>Nn(e[t]));function sS(e,t){const{isScriptable:n,isIndexable:r}=Iv(e);for(const i of t){const o=n(i),s=r(i),a=(s||o)&&e[i];if(o&&(Nn(a)||oS(a))||s&&de(a))return!0}return!1}var aS="4.5.0";const lS=["top","bottom","left","right","chartArea"];function pp(e,t){return e==="top"||e==="bottom"||lS.indexOf(e)===-1&&t==="x"}function mp(e,t){return function(n,r){return n[e]===r[e]?n[t]-r[t]:n[e]-r[e]}}function gp(e){const t=e.chart,n=t.options.animation;t.notifyPlugins("afterRender"),ee(n&&n.onComplete,[e],t)}function cS(e){const t=e.chart,n=t.options.animation;ee(n&&n.onProgress,[e],t)}function r1(e){return Sf()&&typeof e=="string"?e=document.getElementById(e):e&&e.length&&(e=e[0]),e&&e.canvas&&(e=e.canvas),e}const Ps={},vp=e=>{const t=r1(e);return Object.values(Ps).filter(n=>n.canvas===t).pop()};function uS(e,t,n){const r=Object.keys(e);for(const i of r){const o=+i;if(o>=t){const s=e[i];delete e[i],(n>0||o>t)&&(e[o+n]=s)}}}function fS(e,t,n,r){return!n||e.type==="mouseout"?null:r?t:e}var rn;let Wa=(rn=class{static register(...t){Ot.add(...t),yp()}static unregister(...t){Ot.remove(...t),yp()}constructor(t,n){const r=this.config=new iS(n),i=r1(t),o=vp(i);if(o)throw new Error("Canvas is already in use. Chart with ID '"+o.id+"' must be destroyed before the canvas with ID '"+o.canvas.id+"' can be reused.");const s=r.createResolver(r.chartOptionScopes(),this.getContext());this.platform=new(r.platform||Nk(i)),this.platform.updateConfig(r);const a=this.platform.acquireContext(i,s.aspectRatio),l=a&&a.canvas,c=l&&l.height,u=l&&l.width;if(this.id=y3(),this.ctx=a,this.canvas=l,this.width=u,this.height=c,this._options=s,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new Xk,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=R3(f=>this.update(f),s.resizeDelay||0),this._dataChanges=[],Ps[this.id]=this,!a||!l){console.error("Failed to create chart: can't acquire context from the given item");return}Rt.listen(this,"complete",gp),Rt.listen(this,"progress",cS),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:t,maintainAspectRatio:n},width:r,height:i,_aspectRatio:o}=this;return re(t)?n&&o?o:i?r/i:null:t}get data(){return this.config.data}set data(t){this.config.data=t}get options(){return this._options}set options(t){this.config.options=t}get registry(){return Ot}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():Bh(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return $h(this.canvas,this.ctx),this}stop(){return Rt.stop(this),this}resize(t,n){Rt.running(this)?this._resizeBeforeDraw={width:t,height:n}:this._resize(t,n)}_resize(t,n){const r=this.options,i=this.canvas,o=r.maintainAspectRatio&&this.aspectRatio,s=this.platform.getMaximumSize(i,t,n,o),a=r.devicePixelRatio||this.platform.getDevicePixelRatio(),l=this.width?"resize":"attach";this.width=s.width,this.height=s.height,this._aspectRatio=this.aspectRatio,Bh(this,a,!0)&&(this.notifyPlugins("resize",{size:s}),ee(r.onResize,[this,s],this),this.attached&&this._doResize(l)&&this.render())}ensureScalesHaveIDs(){const n=this.options.scales||{};J(n,(r,i)=>{r.id=i})}buildOrUpdateScales(){const t=this.options,n=t.scales,r=this.scales,i=Object.keys(r).reduce((s,a)=>(s[a]=!1,s),{});let o=[];n&&(o=o.concat(Object.keys(n).map(s=>{const a=n[s],l=Zc(s,a),c=l==="r",u=l==="x";return{options:a,dposition:c?"chartArea":u?"bottom":"left",dtype:c?"radialLinear":u?"category":"linear"}}))),J(o,s=>{const a=s.options,l=a.id,c=Zc(l,a),u=X(a.type,s.dtype);(a.position===void 0||pp(a.position,c)!==pp(s.dposition))&&(a.position=s.dposition),i[l]=!0;let f=null;if(l in r&&r[l].type===u)f=r[l];else{const d=Ot.getScale(u);f=new d({id:l,type:u,ctx:this.ctx,chart:this}),r[f.id]=f}f.init(a,t)}),J(i,(s,a)=>{s||delete r[a]}),J(r,s=>{hn.configure(this,s,s.options),hn.addBox(this,s)})}_updateMetasets(){const t=this._metasets,n=this.data.datasets.length,r=t.length;if(t.sort((i,o)=>i.index-o.index),r>n){for(let i=n;i<r;++i)this._destroyDatasetMeta(i);t.splice(n,r-n)}this._sortedMetasets=t.slice(0).sort(mp("order","index"))}_removeUnreferencedMetasets(){const{_metasets:t,data:{datasets:n}}=this;t.length>n.length&&delete this._stacks,t.forEach((r,i)=>{n.filter(o=>o===r._dataset).length===0&&this._destroyDatasetMeta(i)})}buildOrUpdateControllers(){const t=[],n=this.data.datasets;let r,i;for(this._removeUnreferencedMetasets(),r=0,i=n.length;r<i;r++){const o=n[r];let s=this.getDatasetMeta(r);const a=o.type||this.config.type;if(s.type&&s.type!==a&&(this._destroyDatasetMeta(r),s=this.getDatasetMeta(r)),s.type=a,s.indexAxis=o.indexAxis||Jc(a,this.options),s.order=o.order||0,s.index=r,s.label=""+o.label,s.visible=this.isDatasetVisible(r),s.controller)s.controller.updateIndex(r),s.controller.linkScales();else{const l=Ot.getController(a),{datasetElementType:c,dataElementType:u}=he.datasets[a];Object.assign(l,{dataElementType:Ot.getElement(u),datasetElementType:c&&Ot.getElement(c)}),s.controller=new l(this,r),t.push(s.controller)}}return this._updateMetasets(),t}_resetElements(){J(this.data.datasets,(t,n)=>{this.getDatasetMeta(n).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(t){const n=this.config;n.update();const r=this._options=n.createResolver(n.chartOptionScopes(),this.getContext()),i=this._animationsDisabled=!r.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:t,cancelable:!0})===!1)return;const o=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let s=0;for(let c=0,u=this.data.datasets.length;c<u;c++){const{controller:f}=this.getDatasetMeta(c),d=!i&&o.indexOf(f)===-1;f.buildOrUpdateElements(d),s=Math.max(+f.getMaxOverflow(),s)}s=this._minPadding=r.layout.autoPadding?s:0,this._updateLayout(s),i||J(o,c=>{c.reset()}),this._updateDatasets(t),this.notifyPlugins("afterUpdate",{mode:t}),this._layers.sort(mp("z","_idx"));const{_active:a,_lastEvent:l}=this;l?this._eventHandler(l,!0):a.length&&this._updateHoverStyles(a,a,!0),this.render()}_updateScales(){J(this.scales,t=>{hn.removeBox(this,t)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const t=this.options,n=new Set(Object.keys(this._listeners)),r=new Set(t.events);(!jh(n,r)||!!this._responsiveListeners!==t.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:t}=this,n=this._getUniformDataChanges()||[];for(const{method:r,start:i,count:o}of n){const s=r==="_removeElements"?-o:o;uS(t,i,s)}}_getUniformDataChanges(){const t=this._dataChanges;if(!t||!t.length)return;this._dataChanges=[];const n=this.data.datasets.length,r=o=>new Set(t.filter(s=>s[0]===o).map((s,a)=>a+","+s.splice(1).join(","))),i=r(0);for(let o=1;o<n;o++)if(!jh(i,r(o)))return;return Array.from(i).map(o=>o.split(",")).map(o=>({method:o[1],start:+o[2],count:+o[3]}))}_updateLayout(t){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;hn.update(this,this.width,this.height,t);const n=this.chartArea,r=n.width<=0||n.height<=0;this._layers=[],J(this.boxes,i=>{r&&i.position==="chartArea"||(i.configure&&i.configure(),this._layers.push(...i._layers()))},this),this._layers.forEach((i,o)=>{i._idx=o}),this.notifyPlugins("afterLayout")}_updateDatasets(t){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:!0})!==!1){for(let n=0,r=this.data.datasets.length;n<r;++n)this.getDatasetMeta(n).controller.configure();for(let n=0,r=this.data.datasets.length;n<r;++n)this._updateDataset(n,Nn(t)?t({datasetIndex:n}):t);this.notifyPlugins("afterDatasetsUpdate",{mode:t})}}_updateDataset(t,n){const r=this.getDatasetMeta(t),i={meta:r,index:t,mode:n,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",i)!==!1&&(r.controller._update(n),i.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",i))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(Rt.has(this)?this.attached&&!Rt.running(this)&&Rt.start(this):(this.draw(),gp({chart:this})))}draw(){let t;if(this._resizeBeforeDraw){const{width:r,height:i}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(r,i)}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const n=this._layers;for(t=0;t<n.length&&n[t].z<=0;++t)n[t].draw(this.chartArea);for(this._drawDatasets();t<n.length;++t)n[t].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(t){const n=this._sortedMetasets,r=[];let i,o;for(i=0,o=n.length;i<o;++i){const s=n[i];(!t||s.visible)&&r.push(s)}return r}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const t=this.getSortedVisibleDatasetMetas();for(let n=t.length-1;n>=0;--n)this._drawDataset(t[n]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(t){const n=this.ctx,r={meta:t,index:t.index,cancelable:!0},i=Yv(this,t);this.notifyPlugins("beforeDatasetDraw",r)!==!1&&(i&&Da(n,i),t.controller.draw(),i&&Ra(n),r.cancelable=!1,this.notifyPlugins("afterDatasetDraw",r))}isPointInArea(t){return Yt(t,this.chartArea,this._minPadding)}getElementsAtEventForMode(t,n,r,i){const o=lk.modes[n];return typeof o=="function"?o(this,t,r,i):[]}getDatasetMeta(t){const n=this.data.datasets[t],r=this._metasets;let i=r.filter(o=>o&&o._dataset===n).pop();return i||(i={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:n&&n.order||0,index:t,_dataset:n,_parsed:[],_sorted:!1},r.push(i)),i}getContext(){return this.$context||(this.$context=zn(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){const n=this.data.datasets[t];if(!n)return!1;const r=this.getDatasetMeta(t);return typeof r.hidden=="boolean"?!r.hidden:!n.hidden}setDatasetVisibility(t,n){const r=this.getDatasetMeta(t);r.hidden=!n}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}getDataVisibility(t){return!this._hiddenIndices[t]}_updateVisibility(t,n,r){const i=r?"show":"hide",o=this.getDatasetMeta(t),s=o.controller._resolveAnimations(void 0,i);sa(n)?(o.data[n].hidden=!r,this.update()):(this.setDatasetVisibility(t,r),s.update(o,{visible:r}),this.update(a=>a.datasetIndex===t?i:void 0))}hide(t,n){this._updateVisibility(t,n,!1)}show(t,n){this._updateVisibility(t,n,!0)}_destroyDatasetMeta(t){const n=this._metasets[t];n&&n.controller&&n.controller._destroy(),delete this._metasets[t]}_stop(){let t,n;for(this.stop(),Rt.remove(this),t=0,n=this.data.datasets.length;t<n;++t)this._destroyDatasetMeta(t)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:t,ctx:n}=this;this._stop(),this.config.clearCache(),t&&(this.unbindEvents(),$h(t,n),this.platform.releaseContext(n),this.canvas=null,this.ctx=null),delete Ps[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...t){return this.canvas.toDataURL(...t)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const t=this._listeners,n=this.platform,r=(o,s)=>{n.addEventListener(this,o,s),t[o]=s},i=(o,s,a)=>{o.offsetX=s,o.offsetY=a,this._eventHandler(o)};J(this.options.events,o=>r(o,i))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const t=this._responsiveListeners,n=this.platform,r=(l,c)=>{n.addEventListener(this,l,c),t[l]=c},i=(l,c)=>{t[l]&&(n.removeEventListener(this,l,c),delete t[l])},o=(l,c)=>{this.canvas&&this.resize(l,c)};let s;const a=()=>{i("attach",a),this.attached=!0,this.resize(),r("resize",o),r("detach",s)};s=()=>{this.attached=!1,i("resize",o),this._stop(),this._resize(0,0),r("attach",a)},n.isAttached(this.canvas)?a():s()}unbindEvents(){J(this._listeners,(t,n)=>{this.platform.removeEventListener(this,n,t)}),this._listeners={},J(this._responsiveListeners,(t,n)=>{this.platform.removeEventListener(this,n,t)}),this._responsiveListeners=void 0}updateHoverStyle(t,n,r){const i=r?"set":"remove";let o,s,a,l;for(n==="dataset"&&(o=this.getDatasetMeta(t[0].datasetIndex),o.controller["_"+i+"DatasetHoverStyle"]()),a=0,l=t.length;a<l;++a){s=t[a];const c=s&&this.getDatasetMeta(s.datasetIndex).controller;c&&c[i+"HoverStyle"](s.element,s.datasetIndex,s.index)}}getActiveElements(){return this._active||[]}setActiveElements(t){const n=this._active||[],r=t.map(({datasetIndex:o,index:s})=>{const a=this.getDatasetMeta(o);if(!a)throw new Error("No dataset found at index "+o);return{datasetIndex:o,element:a.data[s],index:s}});!ia(r,n)&&(this._active=r,this._lastEvent=null,this._updateHoverStyles(r,n))}notifyPlugins(t,n,r){return this._plugins.notify(this,t,n,r)}isPluginEnabled(t){return this._plugins._cache.filter(n=>n.plugin.id===t).length===1}_updateHoverStyles(t,n,r){const i=this.options.hover,o=(l,c)=>l.filter(u=>!c.some(f=>u.datasetIndex===f.datasetIndex&&u.index===f.index)),s=o(n,t),a=r?t:o(t,n);s.length&&this.updateHoverStyle(s,i.mode,!1),a.length&&i.mode&&this.updateHoverStyle(a,i.mode,!0)}_eventHandler(t,n){const r={event:t,replay:n,cancelable:!0,inChartArea:this.isPointInArea(t)},i=s=>(s.options.events||this.options.events).includes(t.native.type);if(this.notifyPlugins("beforeEvent",r,i)===!1)return;const o=this._handleEvent(t,n,r.inChartArea);return r.cancelable=!1,this.notifyPlugins("afterEvent",r,i),(o||r.changed)&&this.render(),this}_handleEvent(t,n,r){const{_active:i=[],options:o}=this,s=n,a=this._getActiveElements(t,i,r,s),l=S3(t),c=fS(t,this._lastEvent,r,l);r&&(this._lastEvent=null,ee(o.onHover,[t,a,this],this),l&&ee(o.onClick,[t,a,this],this));const u=!ia(a,i);return(u||n)&&(this._active=a,this._updateHoverStyles(a,i,n)),this._lastEvent=c,u}_getActiveElements(t,n,r,i){if(t.type==="mouseout")return[];if(!r)return n;const o=this.options.hover;return this.getElementsAtEventForMode(t,o.mode,o,i)}},U(rn,"defaults",he),U(rn,"instances",Ps),U(rn,"overrides",ar),U(rn,"registry",Ot),U(rn,"version",aS),U(rn,"getChart",vp),rn);function yp(){return J(Wa.instances,e=>e._plugins.invalidate())}function i1(e,t,n=t){e.lineCap=X(n.borderCapStyle,t.borderCapStyle),e.setLineDash(X(n.borderDash,t.borderDash)),e.lineDashOffset=X(n.borderDashOffset,t.borderDashOffset),e.lineJoin=X(n.borderJoinStyle,t.borderJoinStyle),e.lineWidth=X(n.borderWidth,t.borderWidth),e.strokeStyle=X(n.borderColor,t.borderColor)}function dS(e,t,n){e.lineTo(n.x,n.y)}function hS(e){return e.stepped?q3:e.tension||e.cubicInterpolationMode==="monotone"?J3:dS}function o1(e,t,n={}){const r=e.length,{start:i=0,end:o=r-1}=n,{start:s,end:a}=t,l=Math.max(i,s),c=Math.min(o,a),u=i<s&&o<s||i>a&&o>a;return{count:r,start:l,loop:t.loop,ilen:c<l&&!u?r+c-l:c-l}}function pS(e,t,n,r){const{points:i,options:o}=t,{count:s,start:a,loop:l,ilen:c}=o1(i,n,r),u=hS(o);let{move:f=!0,reverse:d}=r||{},h,g,p;for(h=0;h<=c;++h)g=i[(a+(d?c-h:h))%s],!g.skip&&(f?(e.moveTo(g.x,g.y),f=!1):u(e,p,g,d,o.stepped),p=g);return l&&(g=i[(a+(d?c:0))%s],u(e,p,g,d,o.stepped)),!!l}function mS(e,t,n,r){const i=t.points,{count:o,start:s,ilen:a}=o1(i,n,r),{move:l=!0,reverse:c}=r||{};let u=0,f=0,d,h,g,p,b,y;const v=_=>(s+(c?a-_:_))%o,x=()=>{p!==b&&(e.lineTo(u,b),e.lineTo(u,p),e.lineTo(u,y))};for(l&&(h=i[v(0)],e.moveTo(h.x,h.y)),d=0;d<=a;++d){if(h=i[v(d)],h.skip)continue;const _=h.x,w=h.y,S=_|0;S===g?(w<p?p=w:w>b&&(b=w),u=(f*u+_)/++f):(x(),e.lineTo(_,w),g=S,f=0,p=b=w),y=w}x()}function eu(e){const t=e.options,n=t.borderDash&&t.borderDash.length;return!e._decimated&&!e._loop&&!t.tension&&t.cubicInterpolationMode!=="monotone"&&!t.stepped&&!n?mS:pS}function gS(e){return e.stepped?T_:e.tension||e.cubicInterpolationMode==="monotone"?A_:Hn}function vS(e,t,n,r){let i=t._path;i||(i=t._path=new Path2D,t.path(i,n,r)&&i.closePath()),i1(e,t.options),e.stroke(i)}function yS(e,t,n,r){const{segments:i,options:o}=t,s=eu(t);for(const a of i)i1(e,o,a.style),e.beginPath(),s(e,t,a,{start:n,end:n+r-1})&&e.closePath(),e.stroke()}const xS=typeof Path2D=="function";function bS(e,t,n,r){xS&&!t.options.segment?vS(e,t,n,r):yS(e,t,n,r)}class pn extends On{constructor(t){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,t&&Object.assign(this,t)}updateControlPoints(t,n){const r=this.options;if((r.tension||r.cubicInterpolationMode==="monotone")&&!r.stepped&&!this._pointsUpdated){const i=r.spanGaps?this._loop:this._fullLoop;S_(this._points,r,t,i,n),this._pointsUpdated=!0}}set points(t){this._points=t,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=F_(this,this.options.segment))}first(){const t=this.segments,n=this.points;return t.length&&n[t[0].start]}last(){const t=this.segments,n=this.points,r=t.length;return r&&n[t[r-1].end]}interpolate(t,n){const r=this.options,i=t[n],o=this.points,s=Vv(this,{property:n,start:i,end:i});if(!s.length)return;const a=[],l=gS(r);let c,u;for(c=0,u=s.length;c<u;++c){const{start:f,end:d}=s[c],h=o[f],g=o[d];if(h===g){a.push(h);continue}const p=Math.abs((i-h[n])/(g[n]-h[n])),b=l(h,g,p,r.stepped);b[n]=t[n],a.push(b)}return a.length===1?a[0]:a}pathSegment(t,n,r){return eu(this)(t,this,n,r)}path(t,n,r){const i=this.segments,o=eu(this);let s=this._loop;n=n||0,r=r||this.points.length-n;for(const a of i)s&=o(t,this,a,{start:n,end:n+r-1});return!!s}draw(t,n,r,i){const o=this.options||{};(this.points||[]).length&&o.borderWidth&&(t.save(),bS(t,this,r,i),t.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}U(pn,"id","line"),U(pn,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),U(pn,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),U(pn,"descriptors",{_scriptable:!0,_indexable:t=>t!=="borderDash"&&t!=="fill"});function xp(e,t,n,r){const i=e.options,{[n]:o}=e.getProps([n],r);return Math.abs(t-o)<i.radius+i.hitRadius}class Es extends On{constructor(n){super();U(this,"parsed");U(this,"skip");U(this,"stop");this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,n&&Object.assign(this,n)}inRange(n,r,i){const o=this.options,{x:s,y:a}=this.getProps(["x","y"],i);return Math.pow(n-s,2)+Math.pow(r-a,2)<Math.pow(o.hitRadius+o.radius,2)}inXRange(n,r){return xp(this,n,"x",r)}inYRange(n,r){return xp(this,n,"y",r)}getCenterPoint(n){const{x:r,y:i}=this.getProps(["x","y"],n);return{x:r,y:i}}size(n){n=n||this.options||{};let r=n.radius||0;r=Math.max(r,r&&n.hoverRadius||0);const i=r&&n.borderWidth||0;return(r+i)*2}draw(n,r){const i=this.options;this.skip||i.radius<.1||!Yt(this,r,this.size(i)/2)||(n.strokeStyle=i.borderColor,n.lineWidth=i.borderWidth,n.fillStyle=i.backgroundColor,qc(n,i,this.x,this.y))}getRange(){const n=this.options||{};return n.radius+n.hitRadius}}U(Es,"id","point"),U(Es,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),U(Es,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function wS(e,t,n){const r=e.segments,i=e.points,o=t.points,s=[];for(const a of r){let{start:l,end:c}=a;c=Ha(l,c,i);const u=tu(n,i[l],i[c],a.loop);if(!t.segments){s.push({source:a,target:u,start:i[l],end:i[c]});continue}const f=Vv(t,u);for(const d of f){const h=tu(n,o[d.start],o[d.end],d.loop),g=Uv(a,i,h);for(const p of g)s.push({source:p,target:d,start:{[n]:bp(u,h,"start",Math.max)},end:{[n]:bp(u,h,"end",Math.min)}})}}return s}function tu(e,t,n,r){if(r)return;let i=t[e],o=n[e];return e==="angle"&&(i=Ge(i),o=Ge(o)),{property:e,start:i,end:o}}function _S(e,t){const{x:n=null,y:r=null}=e||{},i=t.points,o=[];return t.segments.forEach(({start:s,end:a})=>{a=Ha(s,a,i);const l=i[s],c=i[a];r!==null?(o.push({x:l.x,y:r}),o.push({x:c.x,y:r})):n!==null&&(o.push({x:n,y:l.y}),o.push({x:n,y:c.y}))}),o}function Ha(e,t,n){for(;t>e;t--){const r=n[t];if(!isNaN(r.x)&&!isNaN(r.y))break}return t}function bp(e,t,n,r){return e&&t?r(e[n],t[n]):e?e[n]:t?t[n]:0}function s1(e,t){let n=[],r=!1;return de(e)?(r=!0,n=e):n=_S(e,t),n.length?new pn({points:n,options:{tension:0},_loop:r,_fullLoop:r}):null}function wp(e){return e&&e.fill!==!1}function kS(e,t,n){let i=e[t].fill;const o=[t];let s;if(!n)return i;for(;i!==!1&&o.indexOf(i)===-1;){if(!ze(i))return i;if(s=e[i],!s)return!1;if(s.visible)return i;o.push(i),i=s.fill}return!1}function SS(e,t,n){const r=MS(e);if(K(r))return isNaN(r.value)?!1:r;let i=parseFloat(r);return ze(i)&&Math.floor(i)===i?CS(r[0],t,i,n):["origin","start","end","stack","shape"].indexOf(r)>=0&&r}function CS(e,t,n,r){return(e==="-"||e==="+")&&(n=t+n),n===t||n<0||n>=r?!1:n}function PS(e,t){let n=null;return e==="start"?n=t.bottom:e==="end"?n=t.top:K(e)?n=t.getPixelForValue(e.value):t.getBasePixel&&(n=t.getBasePixel()),n}function ES(e,t,n){let r;return e==="start"?r=n:e==="end"?r=t.options.reverse?t.min:t.max:K(e)?r=e.value:r=t.getBaseValue(),r}function MS(e){const t=e.options,n=t.fill;let r=X(n&&n.target,n);return r===void 0&&(r=!!t.backgroundColor),r===!1||r===null?!1:r===!0?"origin":r}function NS(e){const{scale:t,index:n,line:r}=e,i=[],o=r.segments,s=r.points,a=OS(t,n);a.push(s1({x:null,y:t.bottom},r));for(let l=0;l<o.length;l++){const c=o[l];for(let u=c.start;u<=c.end;u++)jS(i,s[u],a)}return new pn({points:i,options:{}})}function OS(e,t){const n=[],r=e.getMatchingVisibleMetas("line");for(let i=0;i<r.length;i++){const o=r[i];if(o.index===t)break;o.hidden||n.unshift(o.dataset)}return n}function jS(e,t,n){const r=[];for(let i=0;i<n.length;i++){const o=n[i],{first:s,last:a,point:l}=TS(o,t,"x");if(!(!l||s&&a)){if(s)r.unshift(l);else if(e.push(l),!a)break}}e.push(...r)}function TS(e,t,n){const r=e.interpolate(t,n);if(!r)return{};const i=r[n],o=e.segments,s=e.points;let a=!1,l=!1;for(let c=0;c<o.length;c++){const u=o[c],f=s[u.start][n],d=s[u.end][n];if(Or(i,f,d)){a=i===f,l=i===d;break}}return{first:a,last:l,point:r}}class a1{constructor(t){this.x=t.x,this.y=t.y,this.radius=t.radius}pathSegment(t,n,r){const{x:i,y:o,radius:s}=this;return n=n||{start:0,end:Ze},t.arc(i,o,s,n.end,n.start,!0),!r.bounds}interpolate(t){const{x:n,y:r,radius:i}=this,o=t.angle;return{x:n+Math.cos(o)*i,y:r+Math.sin(o)*i,angle:o}}}function AS(e){const{chart:t,fill:n,line:r}=e;if(ze(n))return zS(t,n);if(n==="stack")return NS(e);if(n==="shape")return!0;const i=LS(e);return i instanceof a1?i:s1(i,r)}function zS(e,t){const n=e.getDatasetMeta(t);return n&&e.isDatasetVisible(t)?n.dataset:null}function LS(e){return(e.scale||{}).getPointPositionForValue?DS(e):IS(e)}function IS(e){const{scale:t={},fill:n}=e,r=PS(n,t);if(ze(r)){const i=t.isHorizontal();return{x:i?r:null,y:i?null:r}}return null}function DS(e){const{scale:t,fill:n}=e,r=t.options,i=t.getLabels().length,o=r.reverse?t.max:t.min,s=ES(n,t,o),a=[];if(r.grid.circular){const l=t.getPointPositionForValue(0,o);return new a1({x:l.x,y:l.y,radius:t.getDistanceFromCenterForValue(s)})}for(let l=0;l<i;++l)a.push(t.getPointPositionForValue(l,s));return a}function Tl(e,t,n){const r=AS(t),{chart:i,index:o,line:s,scale:a,axis:l}=t,c=s.options,u=c.fill,f=c.backgroundColor,{above:d=f,below:h=f}=u||{},g=i.getDatasetMeta(o),p=Yv(i,g);r&&s.points.length&&(Da(e,n),RS(e,{line:s,target:r,above:d,below:h,area:n,scale:a,axis:l,clip:p}),Ra(e))}function RS(e,t){const{line:n,target:r,above:i,below:o,area:s,scale:a,clip:l}=t,c=n._loop?"angle":t.axis;e.save();let u=o;o!==i&&(c==="x"?(_p(e,r,s.top),Al(e,{line:n,target:r,color:i,scale:a,property:c,clip:l}),e.restore(),e.save(),_p(e,r,s.bottom)):c==="y"&&(kp(e,r,s.left),Al(e,{line:n,target:r,color:o,scale:a,property:c,clip:l}),e.restore(),e.save(),kp(e,r,s.right),u=i)),Al(e,{line:n,target:r,color:u,scale:a,property:c,clip:l}),e.restore()}function _p(e,t,n){const{segments:r,points:i}=t;let o=!0,s=!1;e.beginPath();for(const a of r){const{start:l,end:c}=a,u=i[l],f=i[Ha(l,c,i)];o?(e.moveTo(u.x,u.y),o=!1):(e.lineTo(u.x,n),e.lineTo(u.x,u.y)),s=!!t.pathSegment(e,a,{move:s}),s?e.closePath():e.lineTo(f.x,n)}e.lineTo(t.first().x,n),e.closePath(),e.clip()}function kp(e,t,n){const{segments:r,points:i}=t;let o=!0,s=!1;e.beginPath();for(const a of r){const{start:l,end:c}=a,u=i[l],f=i[Ha(l,c,i)];o?(e.moveTo(u.x,u.y),o=!1):(e.lineTo(n,u.y),e.lineTo(u.x,u.y)),s=!!t.pathSegment(e,a,{move:s}),s?e.closePath():e.lineTo(n,f.y)}e.lineTo(n,t.first().y),e.closePath(),e.clip()}function Al(e,t){const{line:n,target:r,property:i,color:o,scale:s,clip:a}=t,l=wS(n,r,i);for(const{source:c,target:u,start:f,end:d}of l){const{style:{backgroundColor:h=o}={}}=c,g=r!==!0;e.save(),e.fillStyle=h,FS(e,s,a,g&&tu(i,f,d)),e.beginPath();const p=!!n.pathSegment(e,c);let b;if(g){p?e.closePath():Sp(e,r,d,i);const y=!!r.pathSegment(e,u,{move:p,reverse:!0});b=p&&y,b||Sp(e,r,f,i)}e.closePath(),e.fill(b?"evenodd":"nonzero"),e.restore()}}function FS(e,t,n,r){const i=t.chart.chartArea,{property:o,start:s,end:a}=r||{};if(o==="x"||o==="y"){let l,c,u,f;o==="x"?(l=s,c=i.top,u=a,f=i.bottom):(l=i.left,c=s,u=i.right,f=a),e.beginPath(),n&&(l=Math.max(l,n.left),u=Math.min(u,n.right),c=Math.max(c,n.top),f=Math.min(f,n.bottom)),e.rect(l,c,u-l,f-c),e.clip()}}function Sp(e,t,n,r){const i=t.interpolate(n,r);i&&e.lineTo(i.x,i.y)}var $S={id:"filler",afterDatasetsUpdate(e,t,n){const r=(e.data.datasets||[]).length,i=[];let o,s,a,l;for(s=0;s<r;++s)o=e.getDatasetMeta(s),a=o.dataset,l=null,a&&a.options&&a instanceof pn&&(l={visible:e.isDatasetVisible(s),index:s,fill:SS(a,s,r),chart:e,axis:o.controller.options.indexAxis,scale:o.vScale,line:a}),o.$filler=l,i.push(l);for(s=0;s<r;++s)l=i[s],!(!l||l.fill===!1)&&(l.fill=kS(i,s,n.propagate))},beforeDraw(e,t,n){const r=n.drawTime==="beforeDraw",i=e.getSortedVisibleDatasetMetas(),o=e.chartArea;for(let s=i.length-1;s>=0;--s){const a=i[s].$filler;a&&(a.line.updateControlPoints(o,a.axis),r&&a.fill&&Tl(e.ctx,a,o))}},beforeDatasetsDraw(e,t,n){if(n.drawTime!=="beforeDatasetsDraw")return;const r=e.getSortedVisibleDatasetMetas();for(let i=r.length-1;i>=0;--i){const o=r[i].$filler;wp(o)&&Tl(e.ctx,o,e.chartArea)}},beforeDatasetDraw(e,t,n){const r=t.meta.$filler;!wp(r)||n.drawTime!=="beforeDatasetDraw"||Tl(e.ctx,r,e.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};const Cp=(e,t)=>{let{boxHeight:n=t,boxWidth:r=t}=e;return e.usePointStyle&&(n=Math.min(n,t),r=e.pointStyleWidth||Math.min(r,t)),{boxWidth:r,boxHeight:n,itemHeight:Math.max(t,n)}},WS=(e,t)=>e!==null&&t!==null&&e.datasetIndex===t.datasetIndex&&e.index===t.index;class Pp extends On{constructor(t){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,n,r){this.maxWidth=t,this.maxHeight=n,this._margins=r,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const t=this.options.labels||{};let n=ee(t.generateLabels,[this.chart],this)||[];t.filter&&(n=n.filter(r=>t.filter(r,this.chart.data))),t.sort&&(n=n.sort((r,i)=>t.sort(r,i,this.chart.data))),this.options.reverse&&n.reverse(),this.legendItems=n}fit(){const{options:t,ctx:n}=this;if(!t.display){this.width=this.height=0;return}const r=t.labels,i=Ce(r.font),o=i.size,s=this._computeTitleHeight(),{boxWidth:a,itemHeight:l}=Cp(r,o);let c,u;n.font=i.string,this.isHorizontal()?(c=this.maxWidth,u=this._fitRows(s,o,a,l)+10):(u=this.maxHeight,c=this._fitCols(s,i,a,l)+10),this.width=Math.min(c,t.maxWidth||this.maxWidth),this.height=Math.min(u,t.maxHeight||this.maxHeight)}_fitRows(t,n,r,i){const{ctx:o,maxWidth:s,options:{labels:{padding:a}}}=this,l=this.legendHitBoxes=[],c=this.lineWidths=[0],u=i+a;let f=t;o.textAlign="left",o.textBaseline="middle";let d=-1,h=-u;return this.legendItems.forEach((g,p)=>{const b=r+n/2+o.measureText(g.text).width;(p===0||c[c.length-1]+b+2*a>s)&&(f+=u,c[c.length-(p>0?0:1)]=0,h+=u,d++),l[p]={left:0,top:h,row:d,width:b,height:i},c[c.length-1]+=b+a}),f}_fitCols(t,n,r,i){const{ctx:o,maxHeight:s,options:{labels:{padding:a}}}=this,l=this.legendHitBoxes=[],c=this.columnSizes=[],u=s-t;let f=a,d=0,h=0,g=0,p=0;return this.legendItems.forEach((b,y)=>{const{itemWidth:v,itemHeight:x}=HS(r,n,o,b,i);y>0&&h+x+2*a>u&&(f+=d+a,c.push({width:d,height:h}),g+=d+a,p++,d=h=0),l[y]={left:g,top:h,col:p,width:v,height:x},d=Math.max(d,v),h+=x+a}),f+=d,c.push({width:d,height:h}),f}adjustHitBoxes(){if(!this.options.display)return;const t=this._computeTitleHeight(),{legendHitBoxes:n,options:{align:r,labels:{padding:i},rtl:o}}=this,s=Fr(o,this.left,this.width);if(this.isHorizontal()){let a=0,l=Xe(r,this.left+i,this.right-this.lineWidths[a]);for(const c of n)a!==c.row&&(a=c.row,l=Xe(r,this.left+i,this.right-this.lineWidths[a])),c.top+=this.top+t+i,c.left=s.leftForLtr(s.x(l),c.width),l+=c.width+i}else{let a=0,l=Xe(r,this.top+t+i,this.bottom-this.columnSizes[a].height);for(const c of n)c.col!==a&&(a=c.col,l=Xe(r,this.top+t+i,this.bottom-this.columnSizes[a].height)),c.top=l,c.left+=this.left+i,c.left=s.leftForLtr(s.x(c.left),c.width),l+=c.height+i}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const t=this.ctx;Da(t,this),this._draw(),Ra(t)}}_draw(){const{options:t,columnSizes:n,lineWidths:r,ctx:i}=this,{align:o,labels:s}=t,a=he.color,l=Fr(t.rtl,this.left,this.width),c=Ce(s.font),{padding:u}=s,f=c.size,d=f/2;let h;this.drawTitle(),i.textAlign=l.textAlign("left"),i.textBaseline="middle",i.lineWidth=.5,i.font=c.string;const{boxWidth:g,boxHeight:p,itemHeight:b}=Cp(s,f),y=function(S,E,C){if(isNaN(g)||g<=0||isNaN(p)||p<0)return;i.save();const P=X(C.lineWidth,1);if(i.fillStyle=X(C.fillStyle,a),i.lineCap=X(C.lineCap,"butt"),i.lineDashOffset=X(C.lineDashOffset,0),i.lineJoin=X(C.lineJoin,"miter"),i.lineWidth=P,i.strokeStyle=X(C.strokeStyle,a),i.setLineDash(X(C.lineDash,[])),s.usePointStyle){const N={radius:p*Math.SQRT2/2,pointStyle:C.pointStyle,rotation:C.rotation,borderWidth:P},L=l.xPlus(S,g/2),$=E+d;zv(i,N,L,$,s.pointStyleWidth&&g)}else{const N=E+Math.max((f-p)/2,0),L=l.leftForLtr(S,g),$=Rr(C.borderRadius);i.beginPath(),Object.values($).some(se=>se!==0)?ua(i,{x:L,y:N,w:g,h:p,radius:$}):i.rect(L,N,g,p),i.fill(),P!==0&&i.stroke()}i.restore()},v=function(S,E,C){Qr(i,C.text,S,E+b/2,c,{strikethrough:C.hidden,textAlign:l.textAlign(C.textAlign)})},x=this.isHorizontal(),_=this._computeTitleHeight();x?h={x:Xe(o,this.left+u,this.right-r[0]),y:this.top+u+_,line:0}:h={x:this.left+u,y:Xe(o,this.top+_+u,this.bottom-n[0].height),line:0},Wv(this.ctx,t.textDirection);const w=b+u;this.legendItems.forEach((S,E)=>{i.strokeStyle=S.fontColor,i.fillStyle=S.fontColor;const C=i.measureText(S.text).width,P=l.textAlign(S.textAlign||(S.textAlign=s.textAlign)),N=g+d+C;let L=h.x,$=h.y;l.setWidth(this.width),x?E>0&&L+N+u>this.right&&($=h.y+=w,h.line++,L=h.x=Xe(o,this.left+u,this.right-r[h.line])):E>0&&$+w>this.bottom&&(L=h.x=L+n[h.line].width+u,h.line++,$=h.y=Xe(o,this.top+_+u,this.bottom-n[h.line].height));const se=l.x(L);if(y(se,$,S),L=F3(P,L+g+d,x?L+N:this.right,t.rtl),v(l.x(L),$,S),x)h.x+=N+u;else if(typeof S.text!="string"){const F=c.lineHeight;h.y+=l1(S,F)+u}else h.y+=w}),Hv(this.ctx,t.textDirection)}drawTitle(){const t=this.options,n=t.title,r=Ce(n.font),i=De(n.padding);if(!n.display)return;const o=Fr(t.rtl,this.left,this.width),s=this.ctx,a=n.position,l=r.size/2,c=i.top+l;let u,f=this.left,d=this.width;if(this.isHorizontal())d=Math.max(...this.lineWidths),u=this.top+c,f=Xe(t.align,f,this.right-d);else{const g=this.columnSizes.reduce((p,b)=>Math.max(p,b.height),0);u=c+Xe(t.align,this.top,this.bottom-g-t.labels.padding-this._computeTitleHeight())}const h=Xe(a,f,f+d);s.textAlign=o.textAlign(jv(a)),s.textBaseline="middle",s.strokeStyle=n.color,s.fillStyle=n.color,s.font=r.string,Qr(s,n.text,h,u,r)}_computeTitleHeight(){const t=this.options.title,n=Ce(t.font),r=De(t.padding);return t.display?n.lineHeight+r.height:0}_getLegendItemAt(t,n){let r,i,o;if(Or(t,this.left,this.right)&&Or(n,this.top,this.bottom)){for(o=this.legendHitBoxes,r=0;r<o.length;++r)if(i=o[r],Or(t,i.left,i.left+i.width)&&Or(n,i.top,i.top+i.height))return this.legendItems[r]}return null}handleEvent(t){const n=this.options;if(!VS(t.type,n))return;const r=this._getLegendItemAt(t.x,t.y);if(t.type==="mousemove"||t.type==="mouseout"){const i=this._hoveredItem,o=WS(i,r);i&&!o&&ee(n.onLeave,[t,i,this],this),this._hoveredItem=r,r&&!o&&ee(n.onHover,[t,r,this],this)}else r&&ee(n.onClick,[t,r,this],this)}}function HS(e,t,n,r,i){const o=BS(r,e,t,n),s=US(i,r,t.lineHeight);return{itemWidth:o,itemHeight:s}}function BS(e,t,n,r){let i=e.text;return i&&typeof i!="string"&&(i=i.reduce((o,s)=>o.length>s.length?o:s)),t+n.size/2+r.measureText(i).width}function US(e,t,n){let r=e;return typeof t.text!="string"&&(r=l1(t,n)),r}function l1(e,t){const n=e.text?e.text.length:0;return t*n}function VS(e,t){return!!((e==="mousemove"||e==="mouseout")&&(t.onHover||t.onLeave)||t.onClick&&(e==="click"||e==="mouseup"))}var YS={id:"legend",_element:Pp,start(e,t,n){const r=e.legend=new Pp({ctx:e.ctx,options:n,chart:e});hn.configure(e,r,n),hn.addBox(e,r)},stop(e){hn.removeBox(e,e.legend),delete e.legend},beforeUpdate(e,t,n){const r=e.legend;hn.configure(e,r,n),r.options=n},afterUpdate(e){const t=e.legend;t.buildLabels(),t.adjustHitBoxes()},afterEvent(e,t){t.replay||e.legend.handleEvent(t.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(e,t,n){const r=t.datasetIndex,i=n.chart;i.isDatasetVisible(r)?(i.hide(r),t.hidden=!0):(i.show(r),t.hidden=!1)},onHover:null,onLeave:null,labels:{color:e=>e.chart.options.color,boxWidth:40,padding:10,generateLabels(e){const t=e.data.datasets,{labels:{usePointStyle:n,pointStyle:r,textAlign:i,color:o,useBorderRadius:s,borderRadius:a}}=e.legend.options;return e._getSortedDatasetMetas().map(l=>{const c=l.controller.getStyle(n?0:void 0),u=De(c.borderWidth);return{text:t[l.index].label,fillStyle:c.backgroundColor,fontColor:o,hidden:!l.visible,lineCap:c.borderCapStyle,lineDash:c.borderDash,lineDashOffset:c.borderDashOffset,lineJoin:c.borderJoinStyle,lineWidth:(u.width+u.height)/4,strokeStyle:c.borderColor,pointStyle:r||c.pointStyle,rotation:c.rotation,textAlign:i||c.textAlign,borderRadius:s&&(a||c.borderRadius),datasetIndex:l.index}},this)}},title:{color:e=>e.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:e=>!e.startsWith("on"),labels:{_scriptable:e=>!["generateLabels","filter","sort"].includes(e)}}};const Ci={average(e){if(!e.length)return!1;let t,n,r=new Set,i=0,o=0;for(t=0,n=e.length;t<n;++t){const a=e[t].element;if(a&&a.hasValue()){const l=a.tooltipPosition();r.add(l.x),i+=l.y,++o}}return o===0||r.size===0?!1:{x:[...r].reduce((a,l)=>a+l)/r.size,y:i/o}},nearest(e,t){if(!e.length)return!1;let n=t.x,r=t.y,i=Number.POSITIVE_INFINITY,o,s,a;for(o=0,s=e.length;o<s;++o){const l=e[o].element;if(l&&l.hasValue()){const c=l.getCenterPoint(),u=Kc(t,c);u<i&&(i=u,a=l)}}if(a){const l=a.tooltipPosition();n=l.x,r=l.y}return{x:n,y:r}}};function Mt(e,t){return t&&(de(t)?Array.prototype.push.apply(e,t):e.push(t)),e}function Ft(e){return(typeof e=="string"||e instanceof String)&&e.indexOf(`
`)>-1?e.split(`
`):e}function XS(e,t){const{element:n,datasetIndex:r,index:i}=t,o=e.getDatasetMeta(r).controller,{label:s,value:a}=o.getLabelAndValue(i);return{chart:e,label:s,parsed:o.getParsed(i),raw:e.data.datasets[r].data[i],formattedValue:a,dataset:o.getDataset(),dataIndex:i,datasetIndex:r,element:n}}function Ep(e,t){const n=e.chart.ctx,{body:r,footer:i,title:o}=e,{boxWidth:s,boxHeight:a}=t,l=Ce(t.bodyFont),c=Ce(t.titleFont),u=Ce(t.footerFont),f=o.length,d=i.length,h=r.length,g=De(t.padding);let p=g.height,b=0,y=r.reduce((_,w)=>_+w.before.length+w.lines.length+w.after.length,0);if(y+=e.beforeBody.length+e.afterBody.length,f&&(p+=f*c.lineHeight+(f-1)*t.titleSpacing+t.titleMarginBottom),y){const _=t.displayColors?Math.max(a,l.lineHeight):l.lineHeight;p+=h*_+(y-h)*l.lineHeight+(y-1)*t.bodySpacing}d&&(p+=t.footerMarginTop+d*u.lineHeight+(d-1)*t.footerSpacing);let v=0;const x=function(_){b=Math.max(b,n.measureText(_).width+v)};return n.save(),n.font=c.string,J(e.title,x),n.font=l.string,J(e.beforeBody.concat(e.afterBody),x),v=t.displayColors?s+2+t.boxPadding:0,J(r,_=>{J(_.before,x),J(_.lines,x),J(_.after,x)}),v=0,n.font=u.string,J(e.footer,x),n.restore(),b+=g.width,{width:b,height:p}}function KS(e,t){const{y:n,height:r}=t;return n<r/2?"top":n>e.height-r/2?"bottom":"center"}function GS(e,t,n,r){const{x:i,width:o}=r,s=n.caretSize+n.caretPadding;if(e==="left"&&i+o+s>t.width||e==="right"&&i-o-s<0)return!0}function QS(e,t,n,r){const{x:i,width:o}=n,{width:s,chartArea:{left:a,right:l}}=e;let c="center";return r==="center"?c=i<=(a+l)/2?"left":"right":i<=o/2?c="left":i>=s-o/2&&(c="right"),GS(c,e,t,n)&&(c="center"),c}function Mp(e,t,n){const r=n.yAlign||t.yAlign||KS(e,n);return{xAlign:n.xAlign||t.xAlign||QS(e,t,n,r),yAlign:r}}function qS(e,t){let{x:n,width:r}=e;return t==="right"?n-=r:t==="center"&&(n-=r/2),n}function JS(e,t,n){let{y:r,height:i}=e;return t==="top"?r+=n:t==="bottom"?r-=i+n:r-=i/2,r}function Np(e,t,n,r){const{caretSize:i,caretPadding:o,cornerRadius:s}=e,{xAlign:a,yAlign:l}=n,c=i+o,{topLeft:u,topRight:f,bottomLeft:d,bottomRight:h}=Rr(s);let g=qS(t,a);const p=JS(t,l,c);return l==="center"?a==="left"?g+=c:a==="right"&&(g-=c):a==="left"?g-=Math.max(u,d)+i:a==="right"&&(g+=Math.max(f,h)+i),{x:Vt(g,0,r.width-t.width),y:Vt(p,0,r.height-t.height)}}function as(e,t,n){const r=De(n.padding);return t==="center"?e.x+e.width/2:t==="right"?e.x+e.width-r.right:e.x+r.left}function Op(e){return Mt([],Ft(e))}function ZS(e,t,n){return zn(e,{tooltip:t,tooltipItems:n,type:"tooltip"})}function jp(e,t){const n=t&&t.dataset&&t.dataset.tooltip&&t.dataset.tooltip.callbacks;return n?e.override(n):e}const c1={beforeTitle:Dt,title(e){if(e.length>0){const t=e[0],n=t.chart.data.labels,r=n?n.length:0;if(this&&this.options&&this.options.mode==="dataset")return t.dataset.label||"";if(t.label)return t.label;if(r>0&&t.dataIndex<r)return n[t.dataIndex]}return""},afterTitle:Dt,beforeBody:Dt,beforeLabel:Dt,label(e){if(this&&this.options&&this.options.mode==="dataset")return e.label+": "+e.formattedValue||e.formattedValue;let t=e.dataset.label||"";t&&(t+=": ");const n=e.formattedValue;return re(n)||(t+=n),t},labelColor(e){const n=e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex);return{borderColor:n.borderColor,backgroundColor:n.backgroundColor,borderWidth:n.borderWidth,borderDash:n.borderDash,borderDashOffset:n.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(e){const n=e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex);return{pointStyle:n.pointStyle,rotation:n.rotation}},afterLabel:Dt,afterBody:Dt,beforeFooter:Dt,footer:Dt,afterFooter:Dt};function $e(e,t,n,r){const i=e[t].call(n,r);return typeof i>"u"?c1[t].call(n,r):i}class nu extends On{constructor(t){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const t=this._cachedAnimations;if(t)return t;const n=this.chart,r=this.options.setContext(this.getContext()),i=r.enabled&&n.options.animation&&r.animations,o=new Xv(this.chart,i);return i._cacheable&&(this._cachedAnimations=Object.freeze(o)),o}getContext(){return this.$context||(this.$context=ZS(this.chart.getContext(),this,this._tooltipItems))}getTitle(t,n){const{callbacks:r}=n,i=$e(r,"beforeTitle",this,t),o=$e(r,"title",this,t),s=$e(r,"afterTitle",this,t);let a=[];return a=Mt(a,Ft(i)),a=Mt(a,Ft(o)),a=Mt(a,Ft(s)),a}getBeforeBody(t,n){return Op($e(n.callbacks,"beforeBody",this,t))}getBody(t,n){const{callbacks:r}=n,i=[];return J(t,o=>{const s={before:[],lines:[],after:[]},a=jp(r,o);Mt(s.before,Ft($e(a,"beforeLabel",this,o))),Mt(s.lines,$e(a,"label",this,o)),Mt(s.after,Ft($e(a,"afterLabel",this,o))),i.push(s)}),i}getAfterBody(t,n){return Op($e(n.callbacks,"afterBody",this,t))}getFooter(t,n){const{callbacks:r}=n,i=$e(r,"beforeFooter",this,t),o=$e(r,"footer",this,t),s=$e(r,"afterFooter",this,t);let a=[];return a=Mt(a,Ft(i)),a=Mt(a,Ft(o)),a=Mt(a,Ft(s)),a}_createItems(t){const n=this._active,r=this.chart.data,i=[],o=[],s=[];let a=[],l,c;for(l=0,c=n.length;l<c;++l)a.push(XS(this.chart,n[l]));return t.filter&&(a=a.filter((u,f,d)=>t.filter(u,f,d,r))),t.itemSort&&(a=a.sort((u,f)=>t.itemSort(u,f,r))),J(a,u=>{const f=jp(t.callbacks,u);i.push($e(f,"labelColor",this,u)),o.push($e(f,"labelPointStyle",this,u)),s.push($e(f,"labelTextColor",this,u))}),this.labelColors=i,this.labelPointStyles=o,this.labelTextColors=s,this.dataPoints=a,a}update(t,n){const r=this.options.setContext(this.getContext()),i=this._active;let o,s=[];if(!i.length)this.opacity!==0&&(o={opacity:0});else{const a=Ci[r.position].call(this,i,this._eventPosition);s=this._createItems(r),this.title=this.getTitle(s,r),this.beforeBody=this.getBeforeBody(s,r),this.body=this.getBody(s,r),this.afterBody=this.getAfterBody(s,r),this.footer=this.getFooter(s,r);const l=this._size=Ep(this,r),c=Object.assign({},a,l),u=Mp(this.chart,r,c),f=Np(r,c,u,this.chart);this.xAlign=u.xAlign,this.yAlign=u.yAlign,o={opacity:1,x:f.x,y:f.y,width:l.width,height:l.height,caretX:a.x,caretY:a.y}}this._tooltipItems=s,this.$context=void 0,o&&this._resolveAnimations().update(this,o),t&&r.external&&r.external.call(this,{chart:this.chart,tooltip:this,replay:n})}drawCaret(t,n,r,i){const o=this.getCaretPosition(t,r,i);n.lineTo(o.x1,o.y1),n.lineTo(o.x2,o.y2),n.lineTo(o.x3,o.y3)}getCaretPosition(t,n,r){const{xAlign:i,yAlign:o}=this,{caretSize:s,cornerRadius:a}=r,{topLeft:l,topRight:c,bottomLeft:u,bottomRight:f}=Rr(a),{x:d,y:h}=t,{width:g,height:p}=n;let b,y,v,x,_,w;return o==="center"?(_=h+p/2,i==="left"?(b=d,y=b-s,x=_+s,w=_-s):(b=d+g,y=b+s,x=_-s,w=_+s),v=b):(i==="left"?y=d+Math.max(l,u)+s:i==="right"?y=d+g-Math.max(c,f)-s:y=this.caretX,o==="top"?(x=h,_=x-s,b=y-s,v=y+s):(x=h+p,_=x+s,b=y+s,v=y-s),w=x),{x1:b,x2:y,x3:v,y1:x,y2:_,y3:w}}drawTitle(t,n,r){const i=this.title,o=i.length;let s,a,l;if(o){const c=Fr(r.rtl,this.x,this.width);for(t.x=as(this,r.titleAlign,r),n.textAlign=c.textAlign(r.titleAlign),n.textBaseline="middle",s=Ce(r.titleFont),a=r.titleSpacing,n.fillStyle=r.titleColor,n.font=s.string,l=0;l<o;++l)n.fillText(i[l],c.x(t.x),t.y+s.lineHeight/2),t.y+=s.lineHeight+a,l+1===o&&(t.y+=r.titleMarginBottom-a)}}_drawColorBox(t,n,r,i,o){const s=this.labelColors[r],a=this.labelPointStyles[r],{boxHeight:l,boxWidth:c}=o,u=Ce(o.bodyFont),f=as(this,"left",o),d=i.x(f),h=l<u.lineHeight?(u.lineHeight-l)/2:0,g=n.y+h;if(o.usePointStyle){const p={radius:Math.min(c,l)/2,pointStyle:a.pointStyle,rotation:a.rotation,borderWidth:1},b=i.leftForLtr(d,c)+c/2,y=g+l/2;t.strokeStyle=o.multiKeyBackground,t.fillStyle=o.multiKeyBackground,qc(t,p,b,y),t.strokeStyle=s.borderColor,t.fillStyle=s.backgroundColor,qc(t,p,b,y)}else{t.lineWidth=K(s.borderWidth)?Math.max(...Object.values(s.borderWidth)):s.borderWidth||1,t.strokeStyle=s.borderColor,t.setLineDash(s.borderDash||[]),t.lineDashOffset=s.borderDashOffset||0;const p=i.leftForLtr(d,c),b=i.leftForLtr(i.xPlus(d,1),c-2),y=Rr(s.borderRadius);Object.values(y).some(v=>v!==0)?(t.beginPath(),t.fillStyle=o.multiKeyBackground,ua(t,{x:p,y:g,w:c,h:l,radius:y}),t.fill(),t.stroke(),t.fillStyle=s.backgroundColor,t.beginPath(),ua(t,{x:b,y:g+1,w:c-2,h:l-2,radius:y}),t.fill()):(t.fillStyle=o.multiKeyBackground,t.fillRect(p,g,c,l),t.strokeRect(p,g,c,l),t.fillStyle=s.backgroundColor,t.fillRect(b,g+1,c-2,l-2))}t.fillStyle=this.labelTextColors[r]}drawBody(t,n,r){const{body:i}=this,{bodySpacing:o,bodyAlign:s,displayColors:a,boxHeight:l,boxWidth:c,boxPadding:u}=r,f=Ce(r.bodyFont);let d=f.lineHeight,h=0;const g=Fr(r.rtl,this.x,this.width),p=function(C){n.fillText(C,g.x(t.x+h),t.y+d/2),t.y+=d+o},b=g.textAlign(s);let y,v,x,_,w,S,E;for(n.textAlign=s,n.textBaseline="middle",n.font=f.string,t.x=as(this,b,r),n.fillStyle=r.bodyColor,J(this.beforeBody,p),h=a&&b!=="right"?s==="center"?c/2+u:c+2+u:0,_=0,S=i.length;_<S;++_){for(y=i[_],v=this.labelTextColors[_],n.fillStyle=v,J(y.before,p),x=y.lines,a&&x.length&&(this._drawColorBox(n,t,_,g,r),d=Math.max(f.lineHeight,l)),w=0,E=x.length;w<E;++w)p(x[w]),d=f.lineHeight;J(y.after,p)}h=0,d=f.lineHeight,J(this.afterBody,p),t.y-=o}drawFooter(t,n,r){const i=this.footer,o=i.length;let s,a;if(o){const l=Fr(r.rtl,this.x,this.width);for(t.x=as(this,r.footerAlign,r),t.y+=r.footerMarginTop,n.textAlign=l.textAlign(r.footerAlign),n.textBaseline="middle",s=Ce(r.footerFont),n.fillStyle=r.footerColor,n.font=s.string,a=0;a<o;++a)n.fillText(i[a],l.x(t.x),t.y+s.lineHeight/2),t.y+=s.lineHeight+r.footerSpacing}}drawBackground(t,n,r,i){const{xAlign:o,yAlign:s}=this,{x:a,y:l}=t,{width:c,height:u}=r,{topLeft:f,topRight:d,bottomLeft:h,bottomRight:g}=Rr(i.cornerRadius);n.fillStyle=i.backgroundColor,n.strokeStyle=i.borderColor,n.lineWidth=i.borderWidth,n.beginPath(),n.moveTo(a+f,l),s==="top"&&this.drawCaret(t,n,r,i),n.lineTo(a+c-d,l),n.quadraticCurveTo(a+c,l,a+c,l+d),s==="center"&&o==="right"&&this.drawCaret(t,n,r,i),n.lineTo(a+c,l+u-g),n.quadraticCurveTo(a+c,l+u,a+c-g,l+u),s==="bottom"&&this.drawCaret(t,n,r,i),n.lineTo(a+h,l+u),n.quadraticCurveTo(a,l+u,a,l+u-h),s==="center"&&o==="left"&&this.drawCaret(t,n,r,i),n.lineTo(a,l+f),n.quadraticCurveTo(a,l,a+f,l),n.closePath(),n.fill(),i.borderWidth>0&&n.stroke()}_updateAnimationTarget(t){const n=this.chart,r=this.$animations,i=r&&r.x,o=r&&r.y;if(i||o){const s=Ci[t.position].call(this,this._active,this._eventPosition);if(!s)return;const a=this._size=Ep(this,t),l=Object.assign({},s,this._size),c=Mp(n,t,l),u=Np(t,l,c,n);(i._to!==u.x||o._to!==u.y)&&(this.xAlign=c.xAlign,this.yAlign=c.yAlign,this.width=a.width,this.height=a.height,this.caretX=s.x,this.caretY=s.y,this._resolveAnimations().update(this,u))}}_willRender(){return!!this.opacity}draw(t){const n=this.options.setContext(this.getContext());let r=this.opacity;if(!r)return;this._updateAnimationTarget(n);const i={width:this.width,height:this.height},o={x:this.x,y:this.y};r=Math.abs(r)<.001?0:r;const s=De(n.padding),a=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;n.enabled&&a&&(t.save(),t.globalAlpha=r,this.drawBackground(o,t,i,n),Wv(t,n.textDirection),o.y+=s.top,this.drawTitle(o,t,n),this.drawBody(o,t,n),this.drawFooter(o,t,n),Hv(t,n.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,n){const r=this._active,i=t.map(({datasetIndex:a,index:l})=>{const c=this.chart.getDatasetMeta(a);if(!c)throw new Error("Cannot find a dataset at index "+a);return{datasetIndex:a,element:c.data[l],index:l}}),o=!ia(r,i),s=this._positionChanged(i,n);(o||s)&&(this._active=i,this._eventPosition=n,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,n,r=!0){if(n&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const i=this.options,o=this._active||[],s=this._getActiveElements(t,o,n,r),a=this._positionChanged(s,t),l=n||!ia(s,o)||a;return l&&(this._active=s,(i.enabled||i.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(!0,n))),l}_getActiveElements(t,n,r,i){const o=this.options;if(t.type==="mouseout")return[];if(!i)return n.filter(a=>this.chart.data.datasets[a.datasetIndex]&&this.chart.getDatasetMeta(a.datasetIndex).controller.getParsed(a.index)!==void 0);const s=this.chart.getElementsAtEventForMode(t,o.mode,o,r);return o.reverse&&s.reverse(),s}_positionChanged(t,n){const{caretX:r,caretY:i,options:o}=this,s=Ci[o.position].call(this,t,n);return s!==!1&&(r!==s.x||i!==s.y)}}U(nu,"positioners",Ci);var e6={id:"tooltip",_element:nu,positioners:Ci,afterInit(e,t,n){n&&(e.tooltip=new nu({chart:e,options:n}))},beforeUpdate(e,t,n){e.tooltip&&e.tooltip.initialize(n)},reset(e,t,n){e.tooltip&&e.tooltip.initialize(n)},afterDraw(e){const t=e.tooltip;if(t&&t._willRender()){const n={tooltip:t};if(e.notifyPlugins("beforeTooltipDraw",{...n,cancelable:!0})===!1)return;t.draw(e.ctx),e.notifyPlugins("afterTooltipDraw",n)}},afterEvent(e,t){if(e.tooltip){const n=t.replay;e.tooltip.handleEvent(t.event,n,t.inChartArea)&&(t.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(e,t)=>t.bodyFont.size,boxWidth:(e,t)=>t.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:c1},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:e=>e!=="filter"&&e!=="itemSort"&&e!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]};function t6(e,t){const n=[],{bounds:i,step:o,min:s,max:a,precision:l,count:c,maxTicks:u,maxDigits:f,includeBounds:d}=e,h=o||1,g=u-1,{min:p,max:b}=t,y=!re(s),v=!re(a),x=!re(c),_=(b-p)/(f+1);let w=Ah((b-p)/g/h)*h,S,E,C,P;if(w<1e-14&&!y&&!v)return[{value:p},{value:b}];P=Math.ceil(b/w)-Math.floor(p/w),P>g&&(w=Ah(P*w/g/h)*h),re(l)||(S=Math.pow(10,l),w=Math.ceil(w*S)/S),i==="ticks"?(E=Math.floor(p/w)*w,C=Math.ceil(b/w)*w):(E=p,C=b),y&&v&&o&&N3((a-s)/o,w/1e3)?(P=Math.round(Math.min((a-s)/w,u)),w=(a-s)/P,E=s,C=a):x?(E=y?s:E,C=v?a:C,P=c-1,w=(C-E)/P):(P=(C-E)/w,Wi(P,Math.round(P),w/1e3)?P=Math.round(P):P=Math.ceil(P));const N=Math.max(zh(w),zh(E));S=Math.pow(10,re(l)?N:l),E=Math.round(E*S)/S,C=Math.round(C*S)/S;let L=0;for(y&&(d&&E!==s?(n.push({value:s}),E<s&&L++,Wi(Math.round((E+L*w)*S)/S,s,Tp(s,_,e))&&L++):E<s&&L++);L<P;++L){const $=Math.round((E+L*w)*S)/S;if(v&&$>a)break;n.push({value:$})}return v&&d&&C!==a?n.length&&Wi(n[n.length-1].value,a,Tp(a,_,e))?n[n.length-1].value=a:n.push({value:a}):(!v||C===a)&&n.push({value:C}),n}function Tp(e,t,{horizontal:n,minRotation:r}){const i=Xn(r),o=(n?Math.sin(i):Math.cos(i))||.001,s=.75*t*(""+e).length;return Math.min(t/o,s)}class Ap extends Mo{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,n){return re(t)||(typeof t=="number"||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){const{beginAtZero:t}=this.options,{minDefined:n,maxDefined:r}=this.getUserBounds();let{min:i,max:o}=this;const s=l=>i=n?i:l,a=l=>o=r?o:l;if(t){const l=Gr(i),c=Gr(o);l<0&&c<0?a(0):l>0&&c>0&&s(0)}if(i===o){let l=o===0?1:Math.abs(o*.05);a(o+l),t||s(i-l)}this.min=i,this.max=o}getTickLimit(){const t=this.options.ticks;let{maxTicksLimit:n,stepSize:r}=t,i;return r?(i=Math.ceil(this.max/r)-Math.floor(this.min/r)+1,i>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${r} would result generating up to ${i} ticks. Limiting to 1000.`),i=1e3)):(i=this.computeTickLimit(),n=n||11),n&&(i=Math.min(n,i)),i}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const t=this.options,n=t.ticks;let r=this.getTickLimit();r=Math.max(2,r);const i={maxTicks:r,bounds:t.bounds,min:t.min,max:t.max,precision:n.precision,step:n.stepSize,count:n.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:n.minRotation||0,includeBounds:n.includeBounds!==!1},o=this._range||this,s=t6(i,o);return t.bounds==="ticks"&&O3(s,this,"value"),t.reverse?(s.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),s}configure(){const t=this.ticks;let n=this.min,r=this.max;if(super.configure(),this.options.offset&&t.length){const i=(r-n)/Math.max(t.length-1,1)/2;n-=i,r+=i}this._startValue=n,this._endValue=r,this._valueRange=r-n}getLabelForValue(t){return Tv(t,this.chart.options.locale,this.options.ticks.format)}}function ru(e){const t=e.ticks;if(t.display&&e.display){const n=De(t.backdropPadding);return X(t.font&&t.font.size,he.font.size)+n.height}return 0}function n6(e,t,n){return n=de(n)?n:[n],{w:Q3(e,t.string,n),h:n.length*t.lineHeight}}function zp(e,t,n,r,i){return e===r||e===i?{start:t-n/2,end:t+n/2}:e<r||e>i?{start:t-n,end:t}:{start:t,end:t+n}}function r6(e){const t={l:e.left+e._padding.left,r:e.right-e._padding.right,t:e.top+e._padding.top,b:e.bottom-e._padding.bottom},n=Object.assign({},t),r=[],i=[],o=e._pointLabels.length,s=e.options.pointLabels,a=s.centerPointLabels?_e/o:0;for(let l=0;l<o;l++){const c=s.setContext(e.getPointLabelContext(l));i[l]=c.padding;const u=e.getPointPosition(l,e.drawingArea+i[l],a),f=Ce(c.font),d=n6(e.ctx,f,e._pointLabels[l]);r[l]=d;const h=Ge(e.getIndexAngle(l)+a),g=Math.round(yf(h)),p=zp(g,u.x,d.w,0,180),b=zp(g,u.y,d.h,90,270);i6(n,t,h,p,b)}e.setCenterPoint(t.l-n.l,n.r-t.r,t.t-n.t,n.b-t.b),e._pointLabelItems=a6(e,r,i)}function i6(e,t,n,r,i){const o=Math.abs(Math.sin(n)),s=Math.abs(Math.cos(n));let a=0,l=0;r.start<t.l?(a=(t.l-r.start)/o,e.l=Math.min(e.l,t.l-a)):r.end>t.r&&(a=(r.end-t.r)/o,e.r=Math.max(e.r,t.r+a)),i.start<t.t?(l=(t.t-i.start)/s,e.t=Math.min(e.t,t.t-l)):i.end>t.b&&(l=(i.end-t.b)/s,e.b=Math.max(e.b,t.b+l))}function o6(e,t,n){const r=e.drawingArea,{extra:i,additionalAngle:o,padding:s,size:a}=n,l=e.getPointPosition(t,r+i+s,o),c=Math.round(yf(Ge(l.angle+qe))),u=u6(l.y,a.h,c),f=l6(c),d=c6(l.x,a.w,f);return{visible:!0,x:l.x,y:u,textAlign:f,left:d,top:u,right:d+a.w,bottom:u+a.h}}function s6(e,t){if(!t)return!0;const{left:n,top:r,right:i,bottom:o}=e;return!(Yt({x:n,y:r},t)||Yt({x:n,y:o},t)||Yt({x:i,y:r},t)||Yt({x:i,y:o},t))}function a6(e,t,n){const r=[],i=e._pointLabels.length,o=e.options,{centerPointLabels:s,display:a}=o.pointLabels,l={extra:ru(o)/2,additionalAngle:s?_e/i:0};let c;for(let u=0;u<i;u++){l.padding=n[u],l.size=t[u];const f=o6(e,u,l);r.push(f),a==="auto"&&(f.visible=s6(f,c),f.visible&&(c=f))}return r}function l6(e){return e===0||e===180?"center":e<180?"left":"right"}function c6(e,t,n){return n==="right"?e-=t:n==="center"&&(e-=t/2),e}function u6(e,t,n){return n===90||n===270?e-=t/2:(n>270||n<90)&&(e-=t),e}function f6(e,t,n){const{left:r,top:i,right:o,bottom:s}=n,{backdropColor:a}=t;if(!re(a)){const l=Rr(t.borderRadius),c=De(t.backdropPadding);e.fillStyle=a;const u=r-c.left,f=i-c.top,d=o-r+c.width,h=s-i+c.height;Object.values(l).some(g=>g!==0)?(e.beginPath(),ua(e,{x:u,y:f,w:d,h,radius:l}),e.fill()):e.fillRect(u,f,d,h)}}function d6(e,t){const{ctx:n,options:{pointLabels:r}}=e;for(let i=t-1;i>=0;i--){const o=e._pointLabelItems[i];if(!o.visible)continue;const s=r.setContext(e.getPointLabelContext(i));f6(n,s,o);const a=Ce(s.font),{x:l,y:c,textAlign:u}=o;Qr(n,e._pointLabels[i],l,c+a.lineHeight/2,a,{color:s.color,textAlign:u,textBaseline:"middle"})}}function u1(e,t,n,r){const{ctx:i}=e;if(n)i.arc(e.xCenter,e.yCenter,t,0,Ze);else{let o=e.getPointPosition(0,t);i.moveTo(o.x,o.y);for(let s=1;s<r;s++)o=e.getPointPosition(s,t),i.lineTo(o.x,o.y)}}function h6(e,t,n,r,i){const o=e.ctx,s=t.circular,{color:a,lineWidth:l}=t;!s&&!r||!a||!l||n<0||(o.save(),o.strokeStyle=a,o.lineWidth=l,o.setLineDash(i.dash||[]),o.lineDashOffset=i.dashOffset,o.beginPath(),u1(e,n,s,r),o.closePath(),o.stroke(),o.restore())}function p6(e,t,n){return zn(e,{label:n,index:t,type:"pointLabel"})}class Pi extends Ap{constructor(t){super(t),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){const t=this._padding=De(ru(this.options)/2),n=this.width=this.maxWidth-t.width,r=this.height=this.maxHeight-t.height;this.xCenter=Math.floor(this.left+n/2+t.left),this.yCenter=Math.floor(this.top+r/2+t.top),this.drawingArea=Math.floor(Math.min(n,r)/2)}determineDataLimits(){const{min:t,max:n}=this.getMinMax(!1);this.min=ze(t)&&!isNaN(t)?t:0,this.max=ze(n)&&!isNaN(n)?n:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/ru(this.options))}generateTickLabels(t){Ap.prototype.generateTickLabels.call(this,t),this._pointLabels=this.getLabels().map((n,r)=>{const i=ee(this.options.pointLabels.callback,[n,r],this);return i||i===0?i:""}).filter((n,r)=>this.chart.getDataVisibility(r))}fit(){const t=this.options;t.display&&t.pointLabels.display?r6(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(t,n,r,i){this.xCenter+=Math.floor((t-n)/2),this.yCenter+=Math.floor((r-i)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(t,n,r,i))}getIndexAngle(t){const n=Ze/(this._pointLabels.length||1),r=this.options.startAngle||0;return Ge(t*n+Xn(r))}getDistanceFromCenterForValue(t){if(re(t))return NaN;const n=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-t)*n:(t-this.min)*n}getValueForDistanceFromCenter(t){if(re(t))return NaN;const n=t/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-n:this.min+n}getPointLabelContext(t){const n=this._pointLabels||[];if(t>=0&&t<n.length){const r=n[t];return p6(this.getContext(),t,r)}}getPointPosition(t,n,r=0){const i=this.getIndexAngle(t)-qe+r;return{x:Math.cos(i)*n+this.xCenter,y:Math.sin(i)*n+this.yCenter,angle:i}}getPointPositionForValue(t,n){return this.getPointPosition(t,this.getDistanceFromCenterForValue(n))}getBasePosition(t){return this.getPointPositionForValue(t||0,this.getBaseValue())}getPointLabelPosition(t){const{left:n,top:r,right:i,bottom:o}=this._pointLabelItems[t];return{left:n,top:r,right:i,bottom:o}}drawBackground(){const{backgroundColor:t,grid:{circular:n}}=this.options;if(t){const r=this.ctx;r.save(),r.beginPath(),u1(this,this.getDistanceFromCenterForValue(this._endValue),n,this._pointLabels.length),r.closePath(),r.fillStyle=t,r.fill(),r.restore()}}drawGrid(){const t=this.ctx,n=this.options,{angleLines:r,grid:i,border:o}=n,s=this._pointLabels.length;let a,l,c;if(n.pointLabels.display&&d6(this,s),i.display&&this.ticks.forEach((u,f)=>{if(f!==0||f===0&&this.min<0){l=this.getDistanceFromCenterForValue(u.value);const d=this.getContext(f),h=i.setContext(d),g=o.setContext(d);h6(this,h,l,s,g)}}),r.display){for(t.save(),a=s-1;a>=0;a--){const u=r.setContext(this.getPointLabelContext(a)),{color:f,lineWidth:d}=u;!d||!f||(t.lineWidth=d,t.strokeStyle=f,t.setLineDash(u.borderDash),t.lineDashOffset=u.borderDashOffset,l=this.getDistanceFromCenterForValue(n.reverse?this.min:this.max),c=this.getPointPosition(a,l),t.beginPath(),t.moveTo(this.xCenter,this.yCenter),t.lineTo(c.x,c.y),t.stroke())}t.restore()}}drawBorder(){}drawLabels(){const t=this.ctx,n=this.options,r=n.ticks;if(!r.display)return;const i=this.getIndexAngle(0);let o,s;t.save(),t.translate(this.xCenter,this.yCenter),t.rotate(i),t.textAlign="center",t.textBaseline="middle",this.ticks.forEach((a,l)=>{if(l===0&&this.min>=0&&!n.reverse)return;const c=r.setContext(this.getContext(l)),u=Ce(c.font);if(o=this.getDistanceFromCenterForValue(this.ticks[l].value),c.showLabelBackdrop){t.font=u.string,s=t.measureText(a.label).width,t.fillStyle=c.backdropColor;const f=De(c.backdropPadding);t.fillRect(-s/2-f.left,-o-u.size/2-f.top,s+f.width,u.size+f.height)}Qr(t,a.label,0,-o,u,{color:c.color,strokeColor:c.textStrokeColor,strokeWidth:c.textStrokeWidth})}),t.restore()}drawTitle(){}}U(Pi,"id","radialLinear"),U(Pi,"defaults",{display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:Av.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(t){return t},padding:5,centerPointLabels:!1}}),U(Pi,"defaultRoutes",{"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"}),U(Pi,"descriptors",{angleLines:{_fallback:"grid"}});const Ba={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},He=Object.keys(Ba);function Lp(e,t){return e-t}function Ip(e,t){if(re(t))return null;const n=e._adapter,{parser:r,round:i,isoWeekday:o}=e._parseOpts;let s=t;return typeof r=="function"&&(s=r(s)),ze(s)||(s=typeof r=="string"?n.parse(s,r):n.parse(s)),s===null?null:(i&&(s=i==="week"&&(la(o)||o===!0)?n.startOf(s,"isoWeek",o):n.startOf(s,i)),+s)}function Dp(e,t,n,r){const i=He.length;for(let o=He.indexOf(e);o<i-1;++o){const s=Ba[He[o]],a=s.steps?s.steps:Number.MAX_SAFE_INTEGER;if(s.common&&Math.ceil((n-t)/(a*s.size))<=r)return He[o]}return He[i-1]}function m6(e,t,n,r,i){for(let o=He.length-1;o>=He.indexOf(n);o--){const s=He[o];if(Ba[s].common&&e._adapter.diff(i,r,s)>=t-1)return s}return He[n?He.indexOf(n):0]}function g6(e){for(let t=He.indexOf(e)+1,n=He.length;t<n;++t)if(Ba[He[t]].common)return He[t]}function Rp(e,t,n){if(!n)e[t]=!0;else if(n.length){const{lo:r,hi:i}=xf(n,t),o=n[r]>=t?n[r]:n[i];e[o]=!0}}function v6(e,t,n,r){const i=e._adapter,o=+i.startOf(t[0].value,r),s=t[t.length-1].value;let a,l;for(a=o;a<=s;a=+i.add(a,1,r))l=n[a],l>=0&&(t[l].major=!0);return t}function Fp(e,t,n){const r=[],i={},o=t.length;let s,a;for(s=0;s<o;++s)a=t[s],i[a]=s,r.push({value:a,major:!1});return o===0||!n?r:v6(e,r,i,n)}class ha extends Mo{constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,n={}){const r=t.time||(t.time={}),i=this._adapter=new rk._date(t.adapters.date);i.init(n),$i(r.displayFormats,i.formats()),this._parseOpts={parser:r.parser,round:r.round,isoWeekday:r.isoWeekday},super.init(t),this._normalized=n.normalized}parse(t,n){return t===void 0?null:Ip(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const t=this.options,n=this._adapter,r=t.time.unit||"day";let{min:i,max:o,minDefined:s,maxDefined:a}=this.getUserBounds();function l(c){!s&&!isNaN(c.min)&&(i=Math.min(i,c.min)),!a&&!isNaN(c.max)&&(o=Math.max(o,c.max))}(!s||!a)&&(l(this._getLabelBounds()),(t.bounds!=="ticks"||t.ticks.source!=="labels")&&l(this.getMinMax(!1))),i=ze(i)&&!isNaN(i)?i:+n.startOf(Date.now(),r),o=ze(o)&&!isNaN(o)?o:+n.endOf(Date.now(),r)+1,this.min=Math.min(i,o-1),this.max=Math.max(i+1,o)}_getLabelBounds(){const t=this.getLabelTimestamps();let n=Number.POSITIVE_INFINITY,r=Number.NEGATIVE_INFINITY;return t.length&&(n=t[0],r=t[t.length-1]),{min:n,max:r}}buildTicks(){const t=this.options,n=t.time,r=t.ticks,i=r.source==="labels"?this.getLabelTimestamps():this._generate();t.bounds==="ticks"&&i.length&&(this.min=this._userMin||i[0],this.max=this._userMax||i[i.length-1]);const o=this.min,s=this.max,a=L3(i,o,s);return this._unit=n.unit||(r.autoSkip?Dp(n.minUnit,this.min,this.max,this._getLabelCapacity(o)):m6(this,a.length,n.minUnit,this.min,this.max)),this._majorUnit=!r.major.enabled||this._unit==="year"?void 0:g6(this._unit),this.initOffsets(i),t.reverse&&a.reverse(),Fp(this,a,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(t=>+t.value))}initOffsets(t=[]){let n=0,r=0,i,o;this.options.offset&&t.length&&(i=this.getDecimalForValue(t[0]),t.length===1?n=1-i:n=(this.getDecimalForValue(t[1])-i)/2,o=this.getDecimalForValue(t[t.length-1]),t.length===1?r=o:r=(o-this.getDecimalForValue(t[t.length-2]))/2);const s=t.length<3?.5:.25;n=Vt(n,0,s),r=Vt(r,0,s),this._offsets={start:n,end:r,factor:1/(n+1+r)}}_generate(){const t=this._adapter,n=this.min,r=this.max,i=this.options,o=i.time,s=o.unit||Dp(o.minUnit,n,r,this._getLabelCapacity(n)),a=X(i.ticks.stepSize,1),l=s==="week"?o.isoWeekday:!1,c=la(l)||l===!0,u={};let f=n,d,h;if(c&&(f=+t.startOf(f,"isoWeek",l)),f=+t.startOf(f,c?"day":s),t.diff(r,n,s)>1e5*a)throw new Error(n+" and "+r+" are too far apart with stepSize of "+a+" "+s);const g=i.ticks.source==="data"&&this.getDataTimestamps();for(d=f,h=0;d<r;d=+t.add(d,a,s),h++)Rp(u,d,g);return(d===r||i.bounds==="ticks"||h===1)&&Rp(u,d,g),Object.keys(u).sort(Lp).map(p=>+p)}getLabelForValue(t){const n=this._adapter,r=this.options.time;return r.tooltipFormat?n.format(t,r.tooltipFormat):n.format(t,r.displayFormats.datetime)}format(t,n){const i=this.options.time.displayFormats,o=this._unit,s=n||i[o];return this._adapter.format(t,s)}_tickFormatFunction(t,n,r,i){const o=this.options,s=o.ticks.callback;if(s)return ee(s,[t,n,r],this);const a=o.time.displayFormats,l=this._unit,c=this._majorUnit,u=l&&a[l],f=c&&a[c],d=r[n],h=c&&f&&d&&d.major;return this._adapter.format(t,i||(h?f:u))}generateTickLabels(t){let n,r,i;for(n=0,r=t.length;n<r;++n)i=t[n],i.label=this._tickFormatFunction(i.value,n,t)}getDecimalForValue(t){return t===null?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){const n=this._offsets,r=this.getDecimalForValue(t);return this.getPixelForDecimal((n.start+r)*n.factor)}getValueForPixel(t){const n=this._offsets,r=this.getDecimalForPixel(t)/n.factor-n.end;return this.min+r*(this.max-this.min)}_getLabelSize(t){const n=this.options.ticks,r=this.ctx.measureText(t).width,i=Xn(this.isHorizontal()?n.maxRotation:n.minRotation),o=Math.cos(i),s=Math.sin(i),a=this._resolveTickFontOptions(0).size;return{w:r*o+a*s,h:r*s+a*o}}_getLabelCapacity(t){const n=this.options.time,r=n.displayFormats,i=r[n.unit]||r.millisecond,o=this._tickFormatFunction(t,0,Fp(this,[t],this._majorUnit),i),s=this._getLabelSize(o),a=Math.floor(this.isHorizontal()?this.width/s.w:this.height/s.h)-1;return a>0?a:1}getDataTimestamps(){let t=this._cache.data||[],n,r;if(t.length)return t;const i=this.getMatchingVisibleMetas();if(this._normalized&&i.length)return this._cache.data=i[0].controller.getAllParsedValues(this);for(n=0,r=i.length;n<r;++n)t=t.concat(i[n].controller.getAllParsedValues(this));return this._cache.data=this.normalize(t)}getLabelTimestamps(){const t=this._cache.labels||[];let n,r;if(t.length)return t;const i=this.getLabels();for(n=0,r=i.length;n<r;++n)t.push(Ip(this,i[n]));return this._cache.labels=this._normalized?t:this.normalize(t)}normalize(t){return D3(t.sort(Lp))}}U(ha,"id","time"),U(ha,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function ls(e,t,n){let r=0,i=e.length-1,o,s,a,l;n?(t>=e[r].pos&&t<=e[i].pos&&({lo:r,hi:i}=Gc(e,"pos",t)),{pos:o,time:a}=e[r],{pos:s,time:l}=e[i]):(t>=e[r].time&&t<=e[i].time&&({lo:r,hi:i}=Gc(e,"time",t)),{time:o,pos:a}=e[r],{time:s,pos:l}=e[i]);const c=s-o;return c?a+(l-a)*(t-o)/c:a}class $p extends ha{constructor(t){super(t),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const t=this._getTimestampsForTable(),n=this._table=this.buildLookupTable(t);this._minPos=ls(n,this.min),this._tableRange=ls(n,this.max)-this._minPos,super.initOffsets(t)}buildLookupTable(t){const{min:n,max:r}=this,i=[],o=[];let s,a,l,c,u;for(s=0,a=t.length;s<a;++s)c=t[s],c>=n&&c<=r&&i.push(c);if(i.length<2)return[{time:n,pos:0},{time:r,pos:1}];for(s=0,a=i.length;s<a;++s)u=i[s+1],l=i[s-1],c=i[s],Math.round((u+l)/2)!==c&&o.push({time:c,pos:s/(a-1)});return o}_generate(){const t=this.min,n=this.max;let r=super.getDataTimestamps();return(!r.includes(t)||!r.length)&&r.splice(0,0,t),(!r.includes(n)||r.length===1)&&r.push(n),r.sort((i,o)=>i-o)}_getTimestampsForTable(){let t=this._cache.all||[];if(t.length)return t;const n=this.getDataTimestamps(),r=this.getLabelTimestamps();return n.length&&r.length?t=this.normalize(n.concat(r)):t=n.length?n:r,t=this._cache.all=t,t}getDecimalForValue(t){return(ls(this._table,t)-this._minPos)/this._tableRange}getValueForPixel(t){const n=this._offsets,r=this.getDecimalForPixel(t)/n.factor-n.end;return ls(this._table,r*this._tableRange+this._minPos,!0)}}U($p,"id","timeseries"),U($p,"defaults",ha.defaults);const f1="label";function Wp(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function y6(e,t){const n=e.options;n&&t&&Object.assign(n,t)}function d1(e,t){e.labels=t}function h1(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:f1;const r=[];e.datasets=t.map(i=>{const o=e.datasets.find(s=>s[n]===i[n]);return!o||!i.data||r.includes(o)?{...i}:(r.push(o),Object.assign(o,i),o)})}function x6(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:f1;const n={labels:[],datasets:[]};return d1(n,e.labels),h1(n,e.datasets,t),n}function b6(e,t){const{height:n=150,width:r=300,redraw:i=!1,datasetIdKey:o,type:s,data:a,options:l,plugins:c=[],fallbackContent:u,updateMode:f,...d}=e,h=T.useRef(null),g=T.useRef(null),p=()=>{h.current&&(g.current=new Wa(h.current,{type:s,data:x6(a,o),options:l&&{...l},plugins:c}),Wp(t,g.current))},b=()=>{Wp(t,null),g.current&&(g.current.destroy(),g.current=null)};return T.useEffect(()=>{!i&&g.current&&l&&y6(g.current,l)},[i,l]),T.useEffect(()=>{!i&&g.current&&d1(g.current.config.data,a.labels)},[i,a.labels]),T.useEffect(()=>{!i&&g.current&&a.datasets&&h1(g.current.config.data,a.datasets,o)},[i,a.datasets]),T.useEffect(()=>{g.current&&(i?(b(),setTimeout(p)):g.current.update(f))},[i,l,a.labels,a.datasets,f]),T.useEffect(()=>{g.current&&(b(),setTimeout(p))},[s]),T.useEffect(()=>(p(),()=>b()),[]),lr.createElement("canvas",{ref:h,role:"img",height:n,width:r,...d},u)}const w6=T.forwardRef(b6);function _6(e,t){return Wa.register(t),T.forwardRef((n,r)=>lr.createElement(w6,{...n,ref:r,type:e}))}const k6=_6("radar",Ss);Wa.register(Pi,Es,pn,$S,e6,YS);const S6=()=>{const[e,t]=T.useState(!1),[n,r]=T.useState([0,0,0,0,0,0]),[i,o]=T.useState(null),s=T.useRef(null),a=T.useRef(null),l={labels:["Python","JavaScript","Machine Learning","Web Development","Database","Cloud Computing"],datasets:[{label:"技能水平",data:[90,85,80,88,75,70],backgroundColor:"rgba(0, 255, 136, 0.15)",borderColor:"#00ff88",borderWidth:3,pointBackgroundColor:"#00ff88",pointBorderColor:"#ffffff",pointBorderWidth:2,pointRadius:6,pointHoverRadius:10,pointHoverBackgroundColor:"#ff00ff",pointHoverBorderColor:"#00ff88",pointHoverBorderWidth:3}]},c=[Qn,Qn,av,Sw,vw,sv],u=["Python开发经验丰富，熟练使用各种框架和库","JavaScript全栈开发，React/Node.js项目经验","机器学习算法实现，深度学习模型训练","全栈Web开发，响应式设计和现代化框架","数据库设计优化，SQL/NoSQL数据库使用","云服务部署，AWS/阿里云平台项目经验"],f={responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{enabled:!1}},scales:{r:{min:0,max:100,beginAtZero:!0,grid:{color:"rgba(0, 255, 136, 0.2)",lineWidth:1},angleLines:{color:"rgba(0, 255, 136, 0.3)",lineWidth:1},pointLabels:{color:"#ffffff",font:{size:14,weight:"600"},padding:20},ticks:{display:!1}}},onHover:(g,p)=>{if(p.length>0){const b=p[0].index;o(b)}else o(null)},animation:{duration:800,easing:"easeOutQuart"}};T.useEffect(()=>{const g=new IntersectionObserver(p=>{p.forEach(b=>{b.isIntersecting&&!e&&(t(!0),d())})},{threshold:.5});return a.current&&g.observe(a.current),()=>g.disconnect()},[e]);const d=()=>{const g=l.datasets[0].data,p=30;let b=0;const y=()=>{b++;const v=b/p,x=1-Math.pow(1-v,2),_=g.map(w=>Math.round(w*x));r(_),b<p&&requestAnimationFrame(y)};y()},h={...l,datasets:[{...l.datasets[0],data:e?n:[0,0,0,0,0,0]}]};return m.jsxs("section",{id:"skills",className:"section",ref:a,children:[m.jsxs("div",{className:"container",children:[m.jsxs("div",{className:"skills-header text-center mb-lg",children:[m.jsx("h2",{className:"neon-glow",children:"技能雷达"}),m.jsx("p",{children:"技术栈全景展示，持续学习进步中"})]}),m.jsxs("div",{className:"skills-content",children:[m.jsx("div",{className:"radar-container",children:m.jsxs("div",{className:"radar-wrapper",children:[m.jsx("div",{className:"radar-chart",children:m.jsx(k6,{ref:s,data:h,options:f})}),i!==null&&m.jsx("div",{className:"skill-tooltip",children:m.jsxs("div",{className:"tooltip-content glass-effect",children:[m.jsxs("div",{className:"tooltip-header",children:[m.jsx(q,{icon:c[i],className:"tooltip-icon"}),m.jsx("h4",{children:l.labels[i]})]}),m.jsxs("div",{className:"tooltip-body",children:[m.jsxs("div",{className:"skill-level",children:[m.jsx("span",{className:"level-text",children:"熟练度："}),m.jsxs("span",{className:"level-value",children:[l.datasets[0].data[i],"%"]})]}),m.jsx("p",{className:"skill-description",children:u[i]})]})]})})]})}),m.jsx("div",{className:"skills-list",children:m.jsx("div",{className:"skills-grid",children:l.labels.map((g,p)=>m.jsxs("div",{className:`skill-item ${i===p?"active":""}`,onMouseEnter:()=>o(p),onMouseLeave:()=>o(null),children:[m.jsx("div",{className:"skill-icon",children:m.jsx(q,{icon:c[p]})}),m.jsxs("div",{className:"skill-info",children:[m.jsx("h4",{children:g}),m.jsxs("div",{className:"skill-bar",children:[m.jsx("div",{className:"skill-progress",style:{width:e?`${n[p]}%`:"0%"}}),m.jsx("span",{className:"skill-percentage",children:e?`${n[p]}%`:"0%"})]})]})]},g))})})]})]}),m.jsx("style",{jsx:!0,children:`
        .skills-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-xxl);
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
        }

        .radar-container {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .radar-wrapper {
          position: relative;
          width: 450px;
          height: 450px;
          background: radial-gradient(
            circle,
            rgba(0, 255, 136, 0.05) 0%,
            transparent 70%
          );
          border-radius: 50%;
          padding: var(--space-lg);
          border: 2px solid rgba(0, 255, 136, 0.2);
        }

        .radar-wrapper::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          border-radius: 50%;
          background: conic-gradient(
            from 0deg,
            var(--primary-green),
            var(--neon-cyan),
            var(--neon-purple),
            var(--primary-green)
          );
          z-index: -1;
          animation: rotate 10s linear infinite;
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .radar-chart {
          width: 100%;
          height: 100%;
          position: relative;
        }

        .skill-tooltip {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 10;
          pointer-events: none;
          animation: fadeInScale 0.3s ease;
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.8);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
        }

        .tooltip-content {
          background: rgba(26, 26, 46, 0.95);
          border: 1px solid var(--primary-green);
          border-radius: var(--radius-md);
          padding: var(--space-md);
          min-width: 200px;
          backdrop-filter: blur(10px);
          box-shadow: 0 0 20px rgba(0, 255, 136, 0.3);
        }

        .tooltip-header {
          display: flex;
          align-items: center;
          gap: var(--space-sm);
          margin-bottom: var(--space-sm);
        }

        .tooltip-icon {
          color: var(--primary-green);
          font-size: 1.2rem;
        }

        .tooltip-header h4 {
          color: #ffffff;
          font-size: 1rem;
          margin: 0;
        }

        .skill-level {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--space-xs);
        }

        .level-text {
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.9rem;
        }

        .level-value {
          color: var(--primary-green);
          font-weight: 700;
          font-size: 1.1rem;
          text-shadow: 0 0 10px rgba(0, 255, 136, 0.5);
        }

        .skill-description {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.85rem;
          line-height: 1.4;
          margin: 0;
        }

        .skills-list {
          padding: var(--space-lg);
        }

        .skills-grid {
          display: flex;
          flex-direction: column;
          gap: var(--space-lg);
        }

        .skill-item {
          display: flex;
          align-items: center;
          gap: var(--space-md);
          padding: var(--space-md);
          background: rgba(26, 26, 46, 0.6);
          border: 1px solid rgba(0, 255, 136, 0.2);
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .skill-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(0, 255, 136, 0.1),
            transparent
          );
          transition: left 0.5s ease;
        }

        .skill-item:hover::before,
        .skill-item.active::before {
          left: 100%;
        }

        .skill-item:hover,
        .skill-item.active {
          border-color: var(--primary-green);
          transform: translateX(8px);
          box-shadow: 0 0 20px rgba(0, 255, 136, 0.3);
        }

        .skill-icon {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--primary-green);
          color: var(--dark-blue);
          border-radius: 50%;
          font-size: 1.2rem;
          font-weight: 600;
          box-shadow: 0 0 15px rgba(0, 255, 136, 0.4);
          flex-shrink: 0;
        }

        .skill-info {
          flex: 1;
        }

        .skill-info h4 {
          color: #ffffff;
          font-size: 1.1rem;
          margin-bottom: var(--space-xs);
          font-weight: 600;
        }

        .skill-bar {
          position: relative;
          width: 100%;
          height: 8px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
          overflow: hidden;
        }

        .skill-progress {
          height: 100%;
          background: linear-gradient(
            90deg,
            var(--primary-green),
            var(--neon-cyan)
          );
          border-radius: 4px;
          transition: width 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          box-shadow: 0 0 10px rgba(0, 255, 136, 0.5);
          position: relative;
        }

        .skill-progress::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.3),
            transparent
          );
          animation: shimmer 2s ease-in-out infinite;
        }

        @keyframes shimmer {
          0%, 100% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
        }

        .skill-percentage {
          position: absolute;
          right: 0;
          top: -25px;
          color: var(--primary-green);
          font-size: 0.9rem;
          font-weight: 700;
        }

        /* 移动端优化 - 确保动画在移动端正常显示 */
        @media (max-width: 992px) {
          .skills-content {
            grid-template-columns: 1fr;
            gap: var(--space-xl);
          }

          .radar-wrapper {
            width: 350px;
            height: 350px;
          }

          .skills-grid {
            gap: var(--space-md);
          }
        }

        @media (max-width: 768px) {
          .radar-wrapper {
            width: 300px;
            height: 300px;
            padding: var(--space-md);
          }

          .skill-item {
            padding: var(--space-sm) var(--space-md);
            gap: var(--space-sm);
          }

          .skill-icon {
            width: 35px;
            height: 35px;
            font-size: 1rem;
          }

          .skill-info h4 {
            font-size: 1rem;
          }

          .tooltip-content {
            min-width: 180px;
            padding: var(--space-sm);
          }
          
          /* 移动端动画优化 - 确保动画启用 */
          .skill-item {
            transition: all 0.2s ease;
            transform: translateZ(0);
            will-change: transform, opacity;
          }
          
          .skill-progress {
            transition: width 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }
          
          .radar-wrapper::before {
            animation-duration: 8s;
          }
        }

        @media (max-width: 480px) {
          .radar-wrapper {
            width: 250px;
            height: 250px;
          }

          .skill-item {
            flex-direction: column;
            text-align: center;
            gap: var(--space-sm);
          }

          .skill-info {
            width: 100%;
          }

          .skill-percentage {
            position: static;
            margin-top: var(--space-xs);
          }
          
          /* 移动端降级方案 - 保持基本动画 */
          @media (prefers-reduced-motion: reduce) {
            .skill-item,
            .skill-progress {
              transition: none;
            }
            
            .radar-wrapper::before {
              animation: none;
            }
          }
        }
        
        /* 硬件加速优化 */
        .skill-item,
        .skill-progress,
        .radar-wrapper {
          transform: translateZ(0);
          backface-visibility: hidden;
        }
        
        /* 移动端触摸优化 */
        @media (hover: none) and (pointer: coarse) {
          .skill-item:hover {
            transform: translateX(4px);
          }
          
          .skill-item:active {
            transform: translateX(8px);
          }
        }
      `})]})},C6=()=>{const[e,t]=T.useState(new Set),n=T.useRef(null),r=T.useRef(null),i=[{id:1,date:"2022年",title:"编程启蒙时光",description:"初二第一次接触编程，由于学校没有专业老师，通过自学踏上编程之路。凭借不懈努力参加比赛并获得市级一等奖。",icon:Qn,type:"start",achievements:["自学编程基础","市级编程竞赛一等奖","培养独立学习能力"]},{id:2,date:"2024年",title:"邂逅AI世界",description:'高中时期接触到了"AI在未来"公益项目，开启AI技术学习之旅，深入学习机器强化学习理论与Python编程实践。',icon:Nw,type:"learning",achievements:["学习机器强化学习","掌握Python编程","参与AI公益项目","建立AI技术基础"]},{id:3,date:"2024年8月",title:"全国联赛初体验",description:'有幸参加"AI在未来"项目的全国联赛总决赛，与全国优秀的AI学习者同台竞技，开拓了视野。',icon:La,type:"milestone",achievements:["参加全国总决赛","与全国选手交流","提升竞技水平","增强自信心"]},{id:4,date:"2025年",title:"AI技术深度探索",description:"随着世界AI技术的飞速发展，我对AI产生了浓厚兴趣，开始独立研究学习，尝试开发小项目并成功部署上线。",icon:kw,type:"growth",achievements:["独立开发AI项目","项目成功部署","掌握全栈开发","技术实践能力提升"]},{id:5,date:"2025年8月",title:"师者相遇，前路更明",description:"在第二次全国联赛总决赛中有幸结识了几位优秀的指导老师，他们为我的未来发展方向提供了宝贵的指导和帮助。",icon:gw,type:"collaboration",achievements:["结识优秀导师","获得专业指导","明确发展方向","建立师生关系"]},{id:6,date:"2025年至今",title:"持续成长中",description:"在导师们的指导下继续深入AI技术研究，不断学习新知识，开发更多有意义的项目，为未来的技术道路积蓄力量。",icon:av,type:"current",achievements:["深度学习AI技术","开发多个实用项目","技术能力持续提升","为未来发展做准备"]}],o=s=>({start:"#00ff88",learning:"#00ffff",milestone:"#ffd700",growth:"#ff6600",collaboration:"#ff00ff",current:"#00ff88"})[s]||"#00ff88";return T.useEffect(()=>{var a;r.current=new IntersectionObserver(l=>{l.forEach(c=>{if(c.isIntersecting){const u=parseInt(c.target.dataset.itemId);t(f=>new Set([...f,u]))}})},{threshold:.1,rootMargin:"0px"});const s=(a=n.current)==null?void 0:a.querySelectorAll(".timeline-item");return s==null||s.forEach(l=>{r.current.observe(l)}),()=>{var l;(l=r.current)==null||l.disconnect()}},[]),m.jsxs("section",{id:"timeline",className:"section",children:[m.jsxs("div",{className:"container",children:[m.jsxs("div",{className:"timeline-header text-center mb-lg",children:[m.jsx("h2",{className:"neon-glow",children:"学习历程"}),m.jsx("p",{children:"从编程小白到AI开发者的成长足迹"})]}),m.jsxs("div",{className:"timeline-wrapper",ref:n,children:[m.jsx("div",{className:"timeline-line"}),i.map((s,a)=>m.jsxs("div",{className:`timeline-item ${e.has(s.id)?"visible":""} ${a%2===0?"left":"right"}`,"data-item-id":s.id,children:[m.jsx("div",{className:"timeline-content",children:m.jsxs("div",{className:"timeline-card glass-effect",children:[m.jsxs("div",{className:"card-header",children:[m.jsx("div",{className:"date-badge",children:s.date}),m.jsx("h3",{children:s.title})]}),m.jsxs("div",{className:"card-body",children:[m.jsx("p",{children:s.description}),m.jsxs("div",{className:"achievements",children:[m.jsx("h4",{children:"关键成果："}),m.jsx("ul",{children:s.achievements.map((l,c)=>m.jsx("li",{children:l},c))})]})]}),m.jsx("div",{className:"card-connector"})]})}),m.jsxs("div",{className:"timeline-node",style:{"--node-color":o(s.type)},children:[m.jsx("div",{className:"node-icon",children:m.jsx(q,{icon:s.icon})}),m.jsx("div",{className:"node-pulse"}),m.jsx("div",{className:"node-ring"})]})]},s.id))]})]}),m.jsx("style",{jsx:!0,children:`
        .timeline-wrapper {
          position: relative;
          max-width: 1000px;
          margin: 0 auto;
          padding: var(--space-xl) 0;
          scroll-snap-type: none !important;
          overflow-anchor: none !important;
        }

        .timeline-line {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 4px;
          background: linear-gradient(
            to bottom,
            transparent,
            var(--primary-green) 10%,
            var(--primary-green) 90%,
            transparent
          );
          transform: translateX(-50%);
          box-shadow: 0 0 20px rgba(0, 255, 136, 0.5);
        }

        .timeline-item {
          position: relative;
          margin-bottom: 4rem;
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          scroll-snap-type: none !important;
          scroll-snap-align: none !important;
          overflow-anchor: none !important;
        }

        .timeline-item.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .timeline-item.left {
          padding-right: calc(50% + 50px);
        }

        .timeline-item.right {
          padding-left: calc(50% + 50px);
        }

        .timeline-item.left .timeline-content {
          text-align: right;
        }

        .timeline-item.right .timeline-content {
          text-align: left;
        }

        .timeline-card {
          position: relative;
          padding: var(--space-lg);
          border-radius: var(--radius-lg);
          background: rgba(26, 26, 46, 0.9);
          border: 1px solid rgba(0, 255, 136, 0.3);
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
          overflow: hidden;
        }

        .timeline-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(0, 255, 136, 0.1),
            transparent
          );
          transition: left 0.6s ease;
        }

        .timeline-card:hover::before {
          left: 100%;
        }

        .timeline-card:hover {
          transform: translateY(-8px);
          border-color: var(--primary-green);
          box-shadow: 
            0 15px 50px rgba(0, 255, 136, 0.2),
            0 0 30px rgba(0, 255, 136, 0.4);
        }

        .card-header {
          margin-bottom: var(--space-md);
        }

        .date-badge {
          display: inline-block;
          background: var(--gradient-primary);
          color: var(--dark-blue);
          padding: var(--space-xs) var(--space-md);
          border-radius: var(--radius-sm);
          font-size: 0.9rem;
          font-weight: 700;
          margin-bottom: var(--space-sm);
          box-shadow: 0 0 15px rgba(0, 255, 136, 0.4);
          letter-spacing: 1px;
        }

        .card-header h3 {
          color: var(--primary-green);
          font-size: 1.5rem;
          margin-bottom: 0;
          text-shadow: 0 0 15px rgba(0, 255, 136, 0.5);
          font-weight: 700;
        }

        .card-body p {
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.7;
          margin-bottom: var(--space-md);
          font-size: 1rem;
        }

        .achievements h4 {
          color: var(--neon-cyan);
          font-size: 1.1rem;
          margin-bottom: var(--space-sm);
          text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
        }

        .achievements ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .achievements li {
          position: relative;
          padding-left: var(--space-md);
          margin-bottom: var(--space-xs);
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.95rem;
          line-height: 1.5;
        }

        .achievements li::before {
          content: '▶';
          position: absolute;
          left: 0;
          color: var(--primary-green);
          font-size: 0.8rem;
        }

        .timeline-node {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 70px;
          height: 70px;
          z-index: 10;
        }

        .node-icon {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 45px;
          height: 45px;
          background: var(--node-color);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--dark-blue);
          font-size: 1.3rem;
          font-weight: bold;
          box-shadow: 
            0 0 25px var(--node-color),
            inset 0 0 15px rgba(0, 0, 0, 0.3);
          z-index: 3;
        }

        .node-pulse {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 45px;
          height: 45px;
          background: var(--node-color);
          border-radius: 50%;
          opacity: 0.6;
          animation: pulse-node 2.5s ease-in-out infinite;
          z-index: 1;
        }

        .node-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 70px;
          height: 70px;
          border: 3px solid var(--node-color);
          border-radius: 50%;
          opacity: 0.4;
          animation: ring-expand 3.5s ease-in-out infinite;
          z-index: 2;
        }

        @keyframes pulse-node {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.6;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.4);
            opacity: 0.2;
          }
        }

        @keyframes ring-expand {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.4;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.2);
            opacity: 0.1;
          }
        }

        .card-connector {
          position: absolute;
          top: 50%;
          width: 35px;
          height: 3px;
          background: linear-gradient(
            90deg,
            var(--primary-green),
            transparent
          );
          transform: translateY(-50%);
        }

        .timeline-item.left .card-connector {
          right: -35px;
        }

        .timeline-item.right .card-connector {
          left: -35px;
          background: linear-gradient(
            90deg,
            transparent,
            var(--primary-green)
          );
        }

        /* 响应式设计 */
        @media (max-width: 768px) {
          .timeline-line {
            left: 35px;
          }

          .timeline-item {
            padding-left: 80px !important;
            padding-right: 0 !important;
            margin-bottom: 3rem;
          }

          .timeline-item .timeline-content {
            text-align: left !important;
          }

          .timeline-node {
            left: 35px;
            transform: translate(-50%, -50%);
          }

          .card-connector {
            display: none;
          }

          .timeline-card {
            padding: var(--space-md);
          }

          .card-header h3 {
            font-size: 1.3rem;
          }

          .achievements li {
            font-size: 0.9rem;
          }
        }

        @media (max-width: 480px) {
          .timeline-wrapper {
            padding: var(--space-lg) 0;
          }

          .timeline-item {
            margin-bottom: 2.5rem;
            padding-left: 60px !important;
          }

          .timeline-line {
            left: 25px;
          }

          .timeline-node {
            left: 25px;
            width: 50px;
            height: 50px;
          }

          .node-icon {
            width: 35px;
            height: 35px;
            font-size: 1.1rem;
          }

          .node-pulse {
            width: 35px;
            height: 35px;
          }

          .node-ring {
            width: 50px;
            height: 50px;
          }

          .timeline-card {
            padding: var(--space-sm);
          }

          .date-badge {
            font-size: 0.8rem;
            padding: var(--space-xs) var(--space-sm);
          }

          .card-header h3 {
            font-size: 1.1rem;
          }

          .card-body p {
            font-size: 0.9rem;
          }
        }
      `})]})},P6=()=>{const[e,t]=T.useState({name:"",email:"",message:""}),[n,r]=T.useState(!1),[i,o]=T.useState(""),[s,a]=T.useState(""),l=u=>{const{name:f,value:d}=u.target;t(h=>({...h,[f]:d}))},c=async u=>{if(u.preventDefault(),!e.name||!e.email||!e.message){o("请填写所有必填字段");return}r(!0);try{const f=await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),d=await f.json();f.ok?(o(d.message||"消息发送成功！"),t({name:"",email:"",message:""})):o(d.error||"发送失败，请稍后重试")}catch(f){console.error("提交表单时出错:",f),o("网络错误，请检查连接后重试")}finally{r(!1),setTimeout(()=>o(""),5e3)}};return m.jsxs("section",{id:"contact",className:"section",children:[m.jsx("div",{className:"container",children:m.jsxs("div",{className:"contact-form-wrapper",children:[m.jsxs("div",{className:"contact-header text-center mb-lg",children:[m.jsx("h2",{className:"neon-glow",children:"联系我"}),m.jsx("p",{children:"有任何想法或合作机会？欢迎与我交流！"})]}),m.jsxs("div",{className:"contact-content",children:[m.jsx("div",{className:"contact-info",children:m.jsxs("div",{className:"info-card glass-effect",children:[m.jsxs("div",{className:"info-item",children:[m.jsx(q,{icon:co,className:"info-icon"}),m.jsxs("div",{children:[m.jsx("h4",{children:"快速响应"}),m.jsx("p",{children:"通常在24小时内回复"})]})]}),m.jsxs("div",{className:"info-item",children:[m.jsx(q,{icon:Wc,className:"info-icon"}),m.jsxs("div",{children:[m.jsx("h4",{children:"开放合作"}),m.jsx("p",{children:"欢迎技术交流与项目合作"})]})]})]})}),m.jsxs("form",{className:"contact-form",onSubmit:c,children:[m.jsxs("div",{className:"form-group",children:[m.jsxs("label",{htmlFor:"name",className:"form-label",children:[m.jsx(q,{icon:Wc}),"姓名"]}),m.jsx("input",{type:"text",id:"name",name:"name",className:`form-input ${s==="name"?"focused":""}`,placeholder:"请输入您的姓名",value:e.name,onChange:l,onFocus:()=>a("name"),onBlur:()=>a(""),required:!0}),m.jsx("div",{className:"input-glow"})]}),m.jsxs("div",{className:"form-group",children:[m.jsxs("label",{htmlFor:"email",className:"form-label",children:[m.jsx(q,{icon:ff}),"邮箱"]}),m.jsx("input",{type:"email",id:"email",name:"email",className:`form-input ${s==="email"?"focused":""}`,placeholder:"请输入您的邮箱地址",value:e.email,onChange:l,onFocus:()=>a("email"),onBlur:()=>a(""),required:!0}),m.jsx("div",{className:"input-glow"})]}),m.jsxs("div",{className:"form-group",children:[m.jsxs("label",{htmlFor:"message",className:"form-label",children:[m.jsx(q,{icon:fw}),"消息"]}),m.jsx("textarea",{id:"message",name:"message",className:`form-input form-textarea ${s==="message"?"focused":""}`,placeholder:"请输入您想说的话...",rows:"6",value:e.message,onChange:l,onFocus:()=>a("message"),onBlur:()=>a(""),required:!0}),m.jsx("div",{className:"input-glow"})]}),m.jsx("div",{className:"form-submit",children:m.jsxs("button",{type:"submit",className:`submit-btn ${n?"submitting":""}`,disabled:n,children:[m.jsxs("span",{className:"btn-content",children:[m.jsx(q,{icon:pw,className:n?"spinning":""}),n?"发送中...":"发送消息"]}),m.jsx("div",{className:"btn-glow"})]})}),i&&m.jsx("div",{className:`submit-message ${i.includes("成功")?"success":"error"}`,children:i})]})]})]})}),m.jsx("style",{jsx:!0,children:`
        .contact-form-wrapper {
          position: relative;
          max-width: 1000px;
          margin: 0 auto;
        }

        .contact-content {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: var(--space-xl);
          align-items: start;
        }

        .contact-info {
          position: sticky;
          top: 100px;
        }

        .info-card {
          padding: var(--space-lg);
          border-radius: var(--radius-lg);
        }

        .info-item {
          display: flex;
          align-items: center;
          gap: var(--space-md);
          margin-bottom: var(--space-lg);
        }

        .info-item:last-child {
          margin-bottom: 0;
        }

        .info-icon {
          font-size: 1.5rem;
          color: var(--primary-green);
          min-width: 24px;
        }

        .contact-form {
          background: rgba(26, 26, 46, 0.8);
          border-radius: var(--radius-xl);
          padding: var(--space-xl);
          border: 1px solid rgba(0, 255, 136, 0.2);
          position: relative;
          overflow: hidden;
        }

        .contact-form::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(0, 255, 136, 0.05), transparent);
          transition: left 0.6s ease;
        }

        .contact-form:hover::before {
          left: 100%;
        }

        .form-group {
          position: relative;
          margin-bottom: var(--space-lg);
        }

        .form-label {
          display: flex;
          align-items: center;
          gap: var(--space-xs);
          color: var(--primary-green);
          font-weight: 600;
          margin-bottom: var(--space-sm);
          font-size: 0.9rem;
        }

        .form-input {
          width: 100%;
          padding: var(--space-md);
          background: rgba(255, 255, 255, 0.03);
          border: 2px solid rgba(0, 255, 136, 0.2);
          border-radius: var(--radius-md);
          color: #ffffff;
          font-family: var(--font-primary);
          font-size: 1rem;
          transition: all 0.3s ease;
          position: relative;
          z-index: 2;
          outline: none;
        }

        .form-textarea {
          resize: vertical;
          min-height: 120px;
        }

        .form-input:focus,
        .form-input.focused {
          border-color: var(--primary-green);
          background: rgba(255, 255, 255, 0.08);
          transform: translateY(-2px);
        }

        .form-input::placeholder {
          color: rgba(255, 255, 255, 0.4);
        }

        .input-glow {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: var(--radius-md);
          background: radial-gradient(circle, rgba(0, 255, 136, 0.1), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .form-input:focus + .input-glow,
        .form-input.focused + .input-glow {
          opacity: 1;
        }

        .form-submit {
          text-align: center;
          margin-top: var(--space-xl);
        }

        .submit-btn {
          position: relative;
          background: linear-gradient(135deg, var(--primary-green), var(--neon-cyan));
          color: var(--dark-blue);
          border: none;
          padding: var(--space-md) var(--space-xl);
          border-radius: var(--radius-md);
          font-family: var(--font-primary);
          font-weight: 700;
          font-size: 1.1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          overflow: hidden;
          min-width: 180px;
          box-shadow: 0 0 20px rgba(0, 255, 136, 0.3);
        }

        .submit-btn:hover:not(:disabled) {
          transform: translateY(-3px);
          box-shadow: 0 0 40px rgba(0, 255, 136, 0.6);
        }

        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .btn-content {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--space-sm);
        }

        .spinning {
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .btn-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.3), transparent);
          transform: translate(-50%, -50%);
          transition: width 0.3s ease, height 0.3s ease;
          border-radius: 50%;
        }

        .submit-btn:hover .btn-glow {
          width: 200px;
          height: 200px;
        }

        .submit-message {
          margin-top: var(--space-md);
          padding: var(--space-sm) var(--space-md);
          border-radius: var(--radius-md);
          text-align: center;
          font-weight: 600;
          animation: fadeInUp 0.3s ease;
        }

        .submit-message.success {
          background: rgba(0, 255, 136, 0.1);
          border: 1px solid var(--primary-green);
          color: var(--primary-green);
        }

        .submit-message.error {
          background: rgba(255, 0, 255, 0.1);
          border: 1px solid var(--neon-purple);
          color: var(--neon-purple);
        }

        @media (max-width: 768px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: var(--space-lg);
          }

          .contact-info {
            position: static;
            order: 2;
          }

          .contact-form {
            padding: var(--space-lg);
          }

          .form-input {
            padding: var(--space-sm) var(--space-md);
          }

          .submit-btn {
            width: 100%;
            padding: var(--space-md);
          }
        }
      `})]})},E6=()=>{const[e,t]=T.useState(!0),[n,r]=T.useState(!0),[i,o]=T.useState("dark"),[s,a]=T.useState(null);T.useEffect(()=>{const u=()=>{const h=document.createElement("link");h.rel="stylesheet",h.href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css",document.head.appendChild(h);const g=document.createElement("link");g.rel="stylesheet",g.href="https://hpi-hub.tos-cn-beijing.volces.com/haisnap/cdn/tailwind.min.css",document.head.appendChild(g);const p=document.createElement("link");p.rel="stylesheet",p.href="https://fonts.loli.net/css2?family=Inter:wght@300;400;500;600;700;900&family=Fira+Code:wght@300;400;500&display=swap",document.head.appendChild(p)},f=async()=>{try{const g=await(await fetch("/api/github/stats")).json();g.success?a(g.data):console.warn("GitHub统计数据获取失败:",g.error)}catch(h){console.error("GitHub API调用失败:",h)}};u(),f();const d=setTimeout(()=>{r(!1),t(!1)},3e3);return()=>clearTimeout(d)},[]);const l=u=>{o(u);const f=document.documentElement;u==="purple"?(f.style.setProperty("--primary-color","#ff00ff"),f.style.setProperty("--secondary-color","#00ffff"),f.style.setProperty("--gradient-primary","linear-gradient(135deg, #ff00ff, #8a2be2)")):(f.style.setProperty("--primary-color","#00ff88"),f.style.setProperty("--secondary-color","#ff00ff"),f.style.setProperty("--gradient-primary","linear-gradient(135deg, #00ff88, #00ffff)"))},c=u=>{const f=document.getElementById(u);if(f){const d=f.offsetTop-80;window.scrollTo({top:d,behavior:"smooth"})}};return e?m.jsx(M6,{digitalRain:n}):m.jsxs("div",{className:`app ${i}`,children:[m.jsx(H2,{}),m.jsx(Aw,{onThemeChange:l,currentTheme:i,onNavigate:c}),m.jsxs("main",{className:"main-content",children:[m.jsx("section",{id:"home",className:"hero-section",children:m.jsx(X4,{githubStats:s})}),m.jsx(K4,{}),m.jsx(G4,{}),m.jsx(S6,{}),m.jsx(C6,{}),m.jsx(P6,{})]}),m.jsx(O6,{}),m.jsx("style",{jsx:!0,children:`
        .app {
          min-height: 100vh;
          background: var(--dark-blue);
          color: #ffffff;
          font-family: var(--font-primary);
          overflow-x: hidden;
          position: relative;
        }

        .main-content {
          position: relative;
          z-index: 1;
        }

        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
        }

        /* 视差滚动效果 */
        .parallax-element {
          transform: translateZ(0);
          will-change: transform;
        }

        /* 主题切换动画 */
        .app.purple {
          --primary-green: #ff00ff;
          --neon-cyan: #00ffff;
          --neon-purple: #8a2be2;
        }

        .app.dark {
          --primary-green: #00ff88;
          --neon-cyan: #00ffff;
          --neon-purple: #ff00ff;
        }

        /* 响应式设计 */
        @media (max-width: 768px) {
          .hero-section {
            min-height: 80vh;
            padding-top: 80px;
          }
        }

        /* 性能优化 */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `})]})},M6=({digitalRain:e})=>{const[t,n]=T.useState(3);return T.useEffect(()=>{const r=setInterval(()=>{n(i=>i<=1?(clearInterval(r),0):i-1)},1e3);return()=>clearInterval(r)},[]),m.jsxs("div",{className:"loading-screen",children:[m.jsxs("div",{className:"loading-content",children:[m.jsxs("div",{className:"cyber-logo",children:[m.jsx("div",{className:"logo-text",children:"亍幵"}),m.jsx("div",{className:"logo-subtitle",children:"AI Developer"})]}),m.jsxs("div",{className:"loading-progress",children:[m.jsx("div",{className:"progress-bar",children:m.jsx("div",{className:"progress-fill"})}),m.jsx("div",{className:"countdown",children:t})]}),m.jsx("div",{className:"loading-text",children:"初始化量子计算矩阵..."})]}),e&&m.jsx(N6,{}),m.jsx("style",{jsx:!0,children:`
        .loading-screen {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: #0a0a0a;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          overflow: hidden;
        }

        .loading-content {
          text-align: center;
          z-index: 2;
          position: relative;
        }

        .cyber-logo {
          margin-bottom: 3rem;
        }

        .logo-text {
          font-size: 4rem;
          font-weight: 900;
          color: #00ff88;
          text-shadow: 
            0 0 10px #00ff88,
            0 0 20px #00ff88,
            0 0 40px #00ff88;
          animation: logoGlow 2s ease-in-out infinite alternate;
        }

        .logo-subtitle {
          font-size: 1.2rem;
          color: #00ffff;
          margin-top: 0.5rem;
          letter-spacing: 3px;
          text-transform: uppercase;
        }

        .loading-progress {
          margin-bottom: 2rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          justify-content: center;
        }

        .progress-bar {
          width: 200px;
          height: 4px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #00ff88, #00ffff);
          width: 0%;
          animation: progressFill 3s ease-out forwards;
          box-shadow: 0 0 10px #00ff88;
        }

        .countdown {
          font-size: 2rem;
          font-weight: bold;
          color: #ff00ff;
          text-shadow: 0 0 20px #ff00ff;
          min-width: 40px;
        }

        .loading-text {
          color: rgba(255, 255, 255, 0.7);
          font-family: 'Fira Code', monospace;
          font-size: 0.9rem;
          animation: textBlink 1.5s ease-in-out infinite;
        }

        @keyframes logoGlow {
          0% {
            text-shadow: 
              0 0 10px #00ff88,
              0 0 20px #00ff88,
              0 0 40px #00ff88;
          }
          100% {
            text-shadow: 
              0 0 20px #00ff88,
              0 0 30px #00ff88,
              0 0 60px #00ff88;
          }
        }

        @keyframes progressFill {
          to {
            width: 100%;
          }
        }

        @keyframes textBlink {
          0%, 50% {
            opacity: 1;
          }
          51%, 100% {
            opacity: 0.3;
          }
        }

        @media (max-width: 768px) {
          .logo-text {
            font-size: 3rem;
          }
          
          .progress-bar {
            width: 150px;
          }
        }
      `})]})},N6=()=>{const e=lr.useRef(null);return T.useEffect(()=>{const t=e.current,n=t.getContext("2d");t.width=window.innerWidth,t.height=window.innerHeight;const r="01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン",i=14,o=t.width/i,s=Array(Math.floor(o)).fill(1),l=setInterval(()=>{n.fillStyle="rgba(10, 10, 10, 0.05)",n.fillRect(0,0,t.width,t.height),n.fillStyle="#00ff88",n.font=i+"px monospace";for(let c=0;c<s.length;c++){const u=r[Math.floor(Math.random()*r.length)];n.fillText(u,c*i,s[c]*i),s[c]*i>t.height&&Math.random()>.975&&(s[c]=0),s[c]++}},33);return()=>clearInterval(l)},[]),m.jsx("canvas",{ref:e,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",zIndex:1}})},O6=()=>{const[e,t]=T.useState(0);return T.useEffect(()=>{const n=()=>{const r=document.documentElement.scrollHeight-window.innerHeight,i=window.pageYOffset/r*100;t(i)};return window.addEventListener("scroll",n),()=>window.removeEventListener("scroll",n)},[]),m.jsxs("div",{className:"scroll-indicator",children:[m.jsx("div",{className:"scroll-line",children:m.jsx("div",{className:"scroll-progress",style:{height:`${e}%`}})}),m.jsx("style",{jsx:!0,children:`
        .scroll-indicator {
          position: fixed;
          right: 20px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 100;
          display: none;
        }

        .scroll-line {
          width: 2px;
          height: 100px;
          background: rgba(0, 255, 136, 0.2);
          border-radius: 1px;
          overflow: hidden;
        }

        .scroll-progress {
          width: 100%;
          background: linear-gradient(to bottom, #00ff88, #00ffff);
          border-radius: 1px;
          transition: height 0.1s ease;
          box-shadow: 0 0 10px rgba(0, 255, 136, 0.5);
        }

        @media (min-width: 768px) {
          .scroll-indicator {
            display: block;
          }
        }
      `})]})};class j6 extends lr.Component{constructor(t){super(t),this.state={hasError:!1,error:null}}static getDerivedStateFromError(t){return{hasError:!0,error:t}}componentDidCatch(t,n){console.error("React错误边界捕获:",t,n)}render(){return this.state.hasError?m.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:"100vh",background:"#0a0a0a",color:"#ffffff",fontFamily:"Inter, sans-serif",textAlign:"center",padding:"20px"},children:[m.jsx("h1",{style:{color:"#00ff88",marginBottom:"20px"},children:"⚠️ 页面加载失败"}),m.jsx("p",{style:{marginBottom:"20px",opacity:.8},children:"抱歉，页面遇到了一些问题"}),m.jsx("button",{onClick:()=>window.location.reload(),style:{padding:"12px 24px",background:"#00ff88",color:"#0a0a0a",border:"none",borderRadius:"8px",cursor:"pointer",fontSize:"16px",fontWeight:"600"},children:"🔄 重新加载页面"}),m.jsxs("details",{style:{marginTop:"30px",maxWidth:"600px"},children:[m.jsx("summary",{style:{cursor:"pointer",color:"#00ffff"},children:"查看技术详情"}),m.jsx("pre",{style:{textAlign:"left",background:"rgba(255,255,255,0.1)",padding:"10px",borderRadius:"4px",fontSize:"12px",overflow:"auto",marginTop:"10px"},children:this.state.error&&this.state.error.toString()})]})]}):this.props.children}}function Hp(){try{const e=document.getElementById("root");if(!e)throw new Error("找不到根元素 #root，请检查HTML文件");console.log("✅ 根元素已找到，开始初始化React应用..."),t0(e).render(m.jsx(lr.StrictMode,{children:m.jsx(j6,{children:m.jsx(E6,{})})})),console.log("✅ React应用已成功挂载")}catch(e){console.error("❌ React应用初始化失败:",e);const t=document.getElementById("root")||document.body;t.innerHTML=`
      <div style="
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        background: #0a0a0a;
        color: #ffffff;
        font-family: Inter, sans-serif;
        text-align: center;
        padding: 20px;
      ">
        <h1 style="color: #ff6b6b; margin-bottom: 20px;">⚠️ 应用启动失败</h1>
        <p style="margin-bottom: 20px; opacity: 0.8;">React应用无法正常启动</p>
        <p style="margin-bottom: 30px; font-size: 14px; color: #00ffff;">
          错误信息: ${e.message}
        </p>
        <button 
          onclick="window.location.reload()"
          style="
            padding: 12px 24px;
            background: #00ff88;
            color: #0a0a0a;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-size: 16px;
            font-weight: 600;
          "
        >
          🔄 重新加载
        </button>
        <div style="margin-top: 30px; font-size: 12px; opacity: 0.6;">
          <p>🔧 故障排除建议:</p>
          <p>1. 检查浏览器控制台错误信息</p>
          <p>2. 确认所有依赖包已正确安装</p>
          <p>3. 尝试清除浏览器缓存后刷新</p>
        </div>
      </div>
    `}}window.addEventListener("error",e=>{console.error("🚨 全局JavaScript错误:",e.error),console.error("📍 错误位置:",e.filename,"行号:",e.lineno)});window.addEventListener("unhandledrejection",e=>{console.error("🚨 未处理的Promise拒绝:",e.reason),e.preventDefault()});document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Hp):Hp();
