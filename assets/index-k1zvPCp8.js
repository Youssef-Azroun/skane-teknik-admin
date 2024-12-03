(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&i(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();var md={exports:{}},Oa={},gd={exports:{}},ke={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vg;function ew(){if(vg)return ke;vg=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),h=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),T=Symbol.iterator;function R(V){return V===null||typeof V!="object"?null:(V=T&&V[T]||V["@@iterator"],typeof V=="function"?V:null)}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,z={};function L(V,q,fe){this.props=V,this.context=q,this.refs=z,this.updater=fe||O}L.prototype.isReactComponent={},L.prototype.setState=function(V,q){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,q,"setState")},L.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function W(){}W.prototype=L.prototype;function te(V,q,fe){this.props=V,this.context=q,this.refs=z,this.updater=fe||O}var ne=te.prototype=new W;ne.constructor=te,b(ne,L.prototype),ne.isPureReactComponent=!0;var se=Array.isArray,Ie=Object.prototype.hasOwnProperty,_e={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function I(V,q,fe){var Ce,Pe={},Ne=null,Ve=null;if(q!=null)for(Ce in q.ref!==void 0&&(Ve=q.ref),q.key!==void 0&&(Ne=""+q.key),q)Ie.call(q,Ce)&&!N.hasOwnProperty(Ce)&&(Pe[Ce]=q[Ce]);var Ue=arguments.length-2;if(Ue===1)Pe.children=fe;else if(1<Ue){for(var $e=Array(Ue),it=0;it<Ue;it++)$e[it]=arguments[it+2];Pe.children=$e}if(V&&V.defaultProps)for(Ce in Ue=V.defaultProps,Ue)Pe[Ce]===void 0&&(Pe[Ce]=Ue[Ce]);return{$$typeof:n,type:V,key:Ne,ref:Ve,props:Pe,_owner:_e.current}}function A(V,q){return{$$typeof:n,type:V.type,key:q,ref:V.ref,props:V.props,_owner:V._owner}}function k(V){return typeof V=="object"&&V!==null&&V.$$typeof===n}function D(V){var q={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(fe){return q[fe]})}var M=/\/+/g;function C(V,q){return typeof V=="object"&&V!==null&&V.key!=null?D(""+V.key):q.toString(36)}function et(V,q,fe,Ce,Pe){var Ne=typeof V;(Ne==="undefined"||Ne==="boolean")&&(V=null);var Ve=!1;if(V===null)Ve=!0;else switch(Ne){case"string":case"number":Ve=!0;break;case"object":switch(V.$$typeof){case n:case e:Ve=!0}}if(Ve)return Ve=V,Pe=Pe(Ve),V=Ce===""?"."+C(Ve,0):Ce,se(Pe)?(fe="",V!=null&&(fe=V.replace(M,"$&/")+"/"),et(Pe,q,fe,"",function(it){return it})):Pe!=null&&(k(Pe)&&(Pe=A(Pe,fe+(!Pe.key||Ve&&Ve.key===Pe.key?"":(""+Pe.key).replace(M,"$&/")+"/")+V)),q.push(Pe)),1;if(Ve=0,Ce=Ce===""?".":Ce+":",se(V))for(var Ue=0;Ue<V.length;Ue++){Ne=V[Ue];var $e=Ce+C(Ne,Ue);Ve+=et(Ne,q,fe,$e,Pe)}else if($e=R(V),typeof $e=="function")for(V=$e.call(V),Ue=0;!(Ne=V.next()).done;)Ne=Ne.value,$e=Ce+C(Ne,Ue++),Ve+=et(Ne,q,fe,$e,Pe);else if(Ne==="object")throw q=String(V),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.");return Ve}function Tt(V,q,fe){if(V==null)return V;var Ce=[],Pe=0;return et(V,Ce,"","",function(Ne){return q.call(fe,Ne,Pe++)}),Ce}function ve(V){if(V._status===-1){var q=V._result;q=q(),q.then(function(fe){(V._status===0||V._status===-1)&&(V._status=1,V._result=fe)},function(fe){(V._status===0||V._status===-1)&&(V._status=2,V._result=fe)}),V._status===-1&&(V._status=0,V._result=q)}if(V._status===1)return V._result.default;throw V._result}var Se={current:null},J={transition:null},ae={ReactCurrentDispatcher:Se,ReactCurrentBatchConfig:J,ReactCurrentOwner:_e};function re(){throw Error("act(...) is not supported in production builds of React.")}return ke.Children={map:Tt,forEach:function(V,q,fe){Tt(V,function(){q.apply(this,arguments)},fe)},count:function(V){var q=0;return Tt(V,function(){q++}),q},toArray:function(V){return Tt(V,function(q){return q})||[]},only:function(V){if(!k(V))throw Error("React.Children.only expected to receive a single React element child.");return V}},ke.Component=L,ke.Fragment=t,ke.Profiler=o,ke.PureComponent=te,ke.StrictMode=i,ke.Suspense=p,ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ae,ke.act=re,ke.cloneElement=function(V,q,fe){if(V==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+V+".");var Ce=b({},V.props),Pe=V.key,Ne=V.ref,Ve=V._owner;if(q!=null){if(q.ref!==void 0&&(Ne=q.ref,Ve=_e.current),q.key!==void 0&&(Pe=""+q.key),V.type&&V.type.defaultProps)var Ue=V.type.defaultProps;for($e in q)Ie.call(q,$e)&&!N.hasOwnProperty($e)&&(Ce[$e]=q[$e]===void 0&&Ue!==void 0?Ue[$e]:q[$e])}var $e=arguments.length-2;if($e===1)Ce.children=fe;else if(1<$e){Ue=Array($e);for(var it=0;it<$e;it++)Ue[it]=arguments[it+2];Ce.children=Ue}return{$$typeof:n,type:V.type,key:Pe,ref:Ne,props:Ce,_owner:Ve}},ke.createContext=function(V){return V={$$typeof:h,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},V.Provider={$$typeof:l,_context:V},V.Consumer=V},ke.createElement=I,ke.createFactory=function(V){var q=I.bind(null,V);return q.type=V,q},ke.createRef=function(){return{current:null}},ke.forwardRef=function(V){return{$$typeof:f,render:V}},ke.isValidElement=k,ke.lazy=function(V){return{$$typeof:E,_payload:{_status:-1,_result:V},_init:ve}},ke.memo=function(V,q){return{$$typeof:y,type:V,compare:q===void 0?null:q}},ke.startTransition=function(V){var q=J.transition;J.transition={};try{V()}finally{J.transition=q}},ke.unstable_act=re,ke.useCallback=function(V,q){return Se.current.useCallback(V,q)},ke.useContext=function(V){return Se.current.useContext(V)},ke.useDebugValue=function(){},ke.useDeferredValue=function(V){return Se.current.useDeferredValue(V)},ke.useEffect=function(V,q){return Se.current.useEffect(V,q)},ke.useId=function(){return Se.current.useId()},ke.useImperativeHandle=function(V,q,fe){return Se.current.useImperativeHandle(V,q,fe)},ke.useInsertionEffect=function(V,q){return Se.current.useInsertionEffect(V,q)},ke.useLayoutEffect=function(V,q){return Se.current.useLayoutEffect(V,q)},ke.useMemo=function(V,q){return Se.current.useMemo(V,q)},ke.useReducer=function(V,q,fe){return Se.current.useReducer(V,q,fe)},ke.useRef=function(V){return Se.current.useRef(V)},ke.useState=function(V){return Se.current.useState(V)},ke.useSyncExternalStore=function(V,q,fe){return Se.current.useSyncExternalStore(V,q,fe)},ke.useTransition=function(){return Se.current.useTransition()},ke.version="18.3.1",ke}var Eg;function cf(){return Eg||(Eg=1,gd.exports=ew()),gd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wg;function tw(){if(wg)return Oa;wg=1;var n=cf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(f,p,y){var E,T={},R=null,O=null;y!==void 0&&(R=""+y),p.key!==void 0&&(R=""+p.key),p.ref!==void 0&&(O=p.ref);for(E in p)i.call(p,E)&&!l.hasOwnProperty(E)&&(T[E]=p[E]);if(f&&f.defaultProps)for(E in p=f.defaultProps,p)T[E]===void 0&&(T[E]=p[E]);return{$$typeof:e,type:f,key:R,ref:O,props:T,_owner:o.current}}return Oa.Fragment=t,Oa.jsx=h,Oa.jsxs=h,Oa}var Tg;function nw(){return Tg||(Tg=1,md.exports=tw()),md.exports}var ee=nw(),H=cf(),Du={},yd={exports:{}},nn={},_d={exports:{}},vd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ig;function rw(){return Ig||(Ig=1,function(n){function e(J,ae){var re=J.length;J.push(ae);e:for(;0<re;){var V=re-1>>>1,q=J[V];if(0<o(q,ae))J[V]=ae,J[re]=q,re=V;else break e}}function t(J){return J.length===0?null:J[0]}function i(J){if(J.length===0)return null;var ae=J[0],re=J.pop();if(re!==ae){J[0]=re;e:for(var V=0,q=J.length,fe=q>>>1;V<fe;){var Ce=2*(V+1)-1,Pe=J[Ce],Ne=Ce+1,Ve=J[Ne];if(0>o(Pe,re))Ne<q&&0>o(Ve,Pe)?(J[V]=Ve,J[Ne]=re,V=Ne):(J[V]=Pe,J[Ce]=re,V=Ce);else if(Ne<q&&0>o(Ve,re))J[V]=Ve,J[Ne]=re,V=Ne;else break e}}return ae}function o(J,ae){var re=J.sortIndex-ae.sortIndex;return re!==0?re:J.id-ae.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var h=Date,f=h.now();n.unstable_now=function(){return h.now()-f}}var p=[],y=[],E=1,T=null,R=3,O=!1,b=!1,z=!1,L=typeof setTimeout=="function"?setTimeout:null,W=typeof clearTimeout=="function"?clearTimeout:null,te=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ne(J){for(var ae=t(y);ae!==null;){if(ae.callback===null)i(y);else if(ae.startTime<=J)i(y),ae.sortIndex=ae.expirationTime,e(p,ae);else break;ae=t(y)}}function se(J){if(z=!1,ne(J),!b)if(t(p)!==null)b=!0,ve(Ie);else{var ae=t(y);ae!==null&&Se(se,ae.startTime-J)}}function Ie(J,ae){b=!1,z&&(z=!1,W(I),I=-1),O=!0;var re=R;try{for(ne(ae),T=t(p);T!==null&&(!(T.expirationTime>ae)||J&&!D());){var V=T.callback;if(typeof V=="function"){T.callback=null,R=T.priorityLevel;var q=V(T.expirationTime<=ae);ae=n.unstable_now(),typeof q=="function"?T.callback=q:T===t(p)&&i(p),ne(ae)}else i(p);T=t(p)}if(T!==null)var fe=!0;else{var Ce=t(y);Ce!==null&&Se(se,Ce.startTime-ae),fe=!1}return fe}finally{T=null,R=re,O=!1}}var _e=!1,N=null,I=-1,A=5,k=-1;function D(){return!(n.unstable_now()-k<A)}function M(){if(N!==null){var J=n.unstable_now();k=J;var ae=!0;try{ae=N(!0,J)}finally{ae?C():(_e=!1,N=null)}}else _e=!1}var C;if(typeof te=="function")C=function(){te(M)};else if(typeof MessageChannel<"u"){var et=new MessageChannel,Tt=et.port2;et.port1.onmessage=M,C=function(){Tt.postMessage(null)}}else C=function(){L(M,0)};function ve(J){N=J,_e||(_e=!0,C())}function Se(J,ae){I=L(function(){J(n.unstable_now())},ae)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(J){J.callback=null},n.unstable_continueExecution=function(){b||O||(b=!0,ve(Ie))},n.unstable_forceFrameRate=function(J){0>J||125<J?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<J?Math.floor(1e3/J):5},n.unstable_getCurrentPriorityLevel=function(){return R},n.unstable_getFirstCallbackNode=function(){return t(p)},n.unstable_next=function(J){switch(R){case 1:case 2:case 3:var ae=3;break;default:ae=R}var re=R;R=ae;try{return J()}finally{R=re}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(J,ae){switch(J){case 1:case 2:case 3:case 4:case 5:break;default:J=3}var re=R;R=J;try{return ae()}finally{R=re}},n.unstable_scheduleCallback=function(J,ae,re){var V=n.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?V+re:V):re=V,J){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=re+q,J={id:E++,callback:ae,priorityLevel:J,startTime:re,expirationTime:q,sortIndex:-1},re>V?(J.sortIndex=re,e(y,J),t(p)===null&&J===t(y)&&(z?(W(I),I=-1):z=!0,Se(se,re-V))):(J.sortIndex=q,e(p,J),b||O||(b=!0,ve(Ie))),J},n.unstable_shouldYield=D,n.unstable_wrapCallback=function(J){var ae=R;return function(){var re=R;R=ae;try{return J.apply(this,arguments)}finally{R=re}}}}(vd)),vd}var Sg;function iw(){return Sg||(Sg=1,_d.exports=rw()),_d.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rg;function sw(){if(Rg)return nn;Rg=1;var n=cf(),e=iw();function t(r){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+r,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function l(r,s){h(r,s),h(r+"Capture",s)}function h(r,s){for(o[r]=s,r=0;r<s.length;r++)i.add(s[r])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,E={},T={};function R(r){return p.call(T,r)?!0:p.call(E,r)?!1:y.test(r)?T[r]=!0:(E[r]=!0,!1)}function O(r,s,a,c){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function b(r,s,a,c){if(s===null||typeof s>"u"||O(r,s,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function z(r,s,a,c,d,g,v){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=r,this.type=s,this.sanitizeURL=g,this.removeEmptyString=v}var L={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){L[r]=new z(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var s=r[0];L[s]=new z(s,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){L[r]=new z(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){L[r]=new z(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){L[r]=new z(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){L[r]=new z(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){L[r]=new z(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){L[r]=new z(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){L[r]=new z(r,5,!1,r.toLowerCase(),null,!1,!1)});var W=/[\-:]([a-z])/g;function te(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var s=r.replace(W,te);L[s]=new z(s,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var s=r.replace(W,te);L[s]=new z(s,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var s=r.replace(W,te);L[s]=new z(s,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){L[r]=new z(r,1,!1,r.toLowerCase(),null,!1,!1)}),L.xlinkHref=new z("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){L[r]=new z(r,1,!1,r.toLowerCase(),null,!0,!0)});function ne(r,s,a,c){var d=L.hasOwnProperty(s)?L[s]:null;(d!==null?d.type!==0:c||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(b(s,a,d,c)&&(a=null),c||d===null?R(s)&&(a===null?r.removeAttribute(s):r.setAttribute(s,""+a)):d.mustUseProperty?r[d.propertyName]=a===null?d.type===3?!1:"":a:(s=d.attributeName,c=d.attributeNamespace,a===null?r.removeAttribute(s):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?r.setAttributeNS(c,s,a):r.setAttribute(s,a))))}var se=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ie=Symbol.for("react.element"),_e=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),D=Symbol.for("react.context"),M=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),et=Symbol.for("react.suspense_list"),Tt=Symbol.for("react.memo"),ve=Symbol.for("react.lazy"),Se=Symbol.for("react.offscreen"),J=Symbol.iterator;function ae(r){return r===null||typeof r!="object"?null:(r=J&&r[J]||r["@@iterator"],typeof r=="function"?r:null)}var re=Object.assign,V;function q(r){if(V===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);V=s&&s[1]||""}return`
`+V+r}var fe=!1;function Ce(r,s){if(!r||fe)return"";fe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(B){var c=B}Reflect.construct(r,[],s)}else{try{s.call()}catch(B){c=B}r.call(s.prototype)}else{try{throw Error()}catch(B){c=B}r()}}catch(B){if(B&&c&&typeof B.stack=="string"){for(var d=B.stack.split(`
`),g=c.stack.split(`
`),v=d.length-1,S=g.length-1;1<=v&&0<=S&&d[v]!==g[S];)S--;for(;1<=v&&0<=S;v--,S--)if(d[v]!==g[S]){if(v!==1||S!==1)do if(v--,S--,0>S||d[v]!==g[S]){var P=`
`+d[v].replace(" at new "," at ");return r.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",r.displayName)),P}while(1<=v&&0<=S);break}}}finally{fe=!1,Error.prepareStackTrace=a}return(r=r?r.displayName||r.name:"")?q(r):""}function Pe(r){switch(r.tag){case 5:return q(r.type);case 16:return q("Lazy");case 13:return q("Suspense");case 19:return q("SuspenseList");case 0:case 2:case 15:return r=Ce(r.type,!1),r;case 11:return r=Ce(r.type.render,!1),r;case 1:return r=Ce(r.type,!0),r;default:return""}}function Ne(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case N:return"Fragment";case _e:return"Portal";case A:return"Profiler";case I:return"StrictMode";case C:return"Suspense";case et:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case D:return(r.displayName||"Context")+".Consumer";case k:return(r._context.displayName||"Context")+".Provider";case M:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case Tt:return s=r.displayName||null,s!==null?s:Ne(r.type)||"Memo";case ve:s=r._payload,r=r._init;try{return Ne(r(s))}catch{}}return null}function Ve(r){var s=r.type;switch(r.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=s.render,r=r.displayName||r.name||"",s.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ne(s);case 8:return s===I?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Ue(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function $e(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function it(r){var s=$e(r)?"checked":"value",a=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),c=""+r[s];if(!r.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,g=a.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return d.call(this)},set:function(v){c=""+v,g.call(this,v)}}),Object.defineProperty(r,s,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function fn(r){r._valueTracker||(r._valueTracker=it(r))}function dr(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var a=s.getValue(),c="";return r&&(c=$e(r)?r.checked?"true":"false":r.value),r=c,r!==a?(s.setValue(r),!0):!1}function We(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function Di(r,s){var a=s.checked;return re({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??r._wrapperState.initialChecked})}function Es(r,s){var a=s.defaultValue==null?"":s.defaultValue,c=s.checked!=null?s.checked:s.defaultChecked;a=Ue(s.value!=null?s.value:a),r._wrapperState={initialChecked:c,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function Fo(r,s){s=s.checked,s!=null&&ne(r,"checked",s,!1)}function jo(r,s){Fo(r,s);var a=Ue(s.value),c=s.type;if(a!=null)c==="number"?(a===0&&r.value===""||r.value!=a)&&(r.value=""+a):r.value!==""+a&&(r.value=""+a);else if(c==="submit"||c==="reset"){r.removeAttribute("value");return}s.hasOwnProperty("value")?ws(r,s.type,a):s.hasOwnProperty("defaultValue")&&ws(r,s.type,Ue(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(r.defaultChecked=!!s.defaultChecked)}function yl(r,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var c=s.type;if(!(c!=="submit"&&c!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+r._wrapperState.initialValue,a||s===r.value||(r.value=s),r.defaultValue=s}a=r.name,a!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,a!==""&&(r.name=a)}function ws(r,s,a){(s!=="number"||We(r.ownerDocument)!==r)&&(a==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+a&&(r.defaultValue=""+a))}var fr=Array.isArray;function pr(r,s,a,c){if(r=r.options,s){s={};for(var d=0;d<a.length;d++)s["$"+a[d]]=!0;for(a=0;a<r.length;a++)d=s.hasOwnProperty("$"+r[a].value),r[a].selected!==d&&(r[a].selected=d),d&&c&&(r[a].defaultSelected=!0)}else{for(a=""+Ue(a),s=null,d=0;d<r.length;d++){if(r[d].value===a){r[d].selected=!0,c&&(r[d].defaultSelected=!0);return}s!==null||r[d].disabled||(s=r[d])}s!==null&&(s.selected=!0)}}function Bo(r,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return re({},s,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function Ts(r,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(fr(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}r._wrapperState={initialValue:Ue(a)}}function Is(r,s){var a=Ue(s.value),c=Ue(s.defaultValue);a!=null&&(a=""+a,a!==r.value&&(r.value=a),s.defaultValue==null&&r.defaultValue!==a&&(r.defaultValue=a)),c!=null&&(r.defaultValue=""+c)}function zo(r){var s=r.textContent;s===r._wrapperState.initialValue&&s!==""&&s!==null&&(r.value=s)}function pt(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function mt(r,s){return r==null||r==="http://www.w3.org/1999/xhtml"?pt(s):r==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var mr,$o=function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,c,d){MSApp.execUnsafeLocalFunction(function(){return r(s,a,c,d)})}:r}(function(r,s){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=s;else{for(mr=mr||document.createElement("div"),mr.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=mr.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;s.firstChild;)r.appendChild(s.firstChild)}});function jr(r,s){if(s){var a=r.firstChild;if(a&&a===r.lastChild&&a.nodeType===3){a.nodeValue=s;return}}r.textContent=s}var Oi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Li=["Webkit","ms","Moz","O"];Object.keys(Oi).forEach(function(r){Li.forEach(function(s){s=s+r.charAt(0).toUpperCase()+r.substring(1),Oi[s]=Oi[r]})});function Ho(r,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||Oi.hasOwnProperty(r)&&Oi[r]?(""+s).trim():s+"px"}function Wo(r,s){r=r.style;for(var a in s)if(s.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=Ho(a,s[a],c);a==="float"&&(a="cssFloat"),c?r.setProperty(a,d):r[a]=d}}var qo=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ko(r,s){if(s){if(qo[r]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function Go(r,s){if(r.indexOf("-")===-1)return typeof s.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vi=null;function Ss(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var Rs=null,pn=null,Hn=null;function As(r){if(r=_a(r)){if(typeof Rs!="function")throw Error(t(280));var s=r.stateNode;s&&(s=Kl(s),Rs(r.stateNode,r.type,s))}}function Wn(r){pn?Hn?Hn.push(r):Hn=[r]:pn=r}function Qo(){if(pn){var r=pn,s=Hn;if(Hn=pn=null,As(r),s)for(r=0;r<s.length;r++)As(s[r])}}function bi(r,s){return r(s)}function Xo(){}var gr=!1;function Yo(r,s,a){if(gr)return r(s,a);gr=!0;try{return bi(r,s,a)}finally{gr=!1,(pn!==null||Hn!==null)&&(Xo(),Qo())}}function lt(r,s){var a=r.stateNode;if(a===null)return null;var c=Kl(a);if(c===null)return null;a=c[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(r=r.type,c=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!c;break e;default:r=!1}if(r)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var Cs=!1;if(f)try{var An={};Object.defineProperty(An,"passive",{get:function(){Cs=!0}}),window.addEventListener("test",An,An),window.removeEventListener("test",An,An)}catch{Cs=!1}function Mi(r,s,a,c,d,g,v,S,P){var B=Array.prototype.slice.call(arguments,3);try{s.apply(a,B)}catch(Q){this.onError(Q)}}var Ui=!1,Ps=null,Cn=!1,Jo=null,$c={onError:function(r){Ui=!0,Ps=r}};function ks(r,s,a,c,d,g,v,S,P){Ui=!1,Ps=null,Mi.apply($c,arguments)}function _l(r,s,a,c,d,g,v,S,P){if(ks.apply(this,arguments),Ui){if(Ui){var B=Ps;Ui=!1,Ps=null}else throw Error(t(198));Cn||(Cn=!0,Jo=B)}}function Pn(r){var s=r,a=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,s.flags&4098&&(a=s.return),r=s.return;while(r)}return s.tag===3?a:null}function Fi(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function kn(r){if(Pn(r)!==r)throw Error(t(188))}function vl(r){var s=r.alternate;if(!s){if(s=Pn(r),s===null)throw Error(t(188));return s!==r?null:r}for(var a=r,c=s;;){var d=a.return;if(d===null)break;var g=d.alternate;if(g===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===g.child){for(g=d.child;g;){if(g===a)return kn(d),r;if(g===c)return kn(d),s;g=g.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=g;else{for(var v=!1,S=d.child;S;){if(S===a){v=!0,a=d,c=g;break}if(S===c){v=!0,c=d,a=g;break}S=S.sibling}if(!v){for(S=g.child;S;){if(S===a){v=!0,a=g,c=d;break}if(S===c){v=!0,c=g,a=d;break}S=S.sibling}if(!v)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?r:s}function Zo(r){return r=vl(r),r!==null?Ns(r):null}function Ns(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var s=Ns(r);if(s!==null)return s;r=r.sibling}return null}var xs=e.unstable_scheduleCallback,ea=e.unstable_cancelCallback,El=e.unstable_shouldYield,Hc=e.unstable_requestPaint,qe=e.unstable_now,wl=e.unstable_getCurrentPriorityLevel,ji=e.unstable_ImmediatePriority,Br=e.unstable_UserBlockingPriority,mn=e.unstable_NormalPriority,ta=e.unstable_LowPriority,Tl=e.unstable_IdlePriority,Bi=null,sn=null;function Il(r){if(sn&&typeof sn.onCommitFiberRoot=="function")try{sn.onCommitFiberRoot(Bi,r,void 0,(r.current.flags&128)===128)}catch{}}var Ht=Math.clz32?Math.clz32:Rl,na=Math.log,Sl=Math.LN2;function Rl(r){return r>>>=0,r===0?32:31-(na(r)/Sl|0)|0}var Ds=64,Os=4194304;function zr(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function zi(r,s){var a=r.pendingLanes;if(a===0)return 0;var c=0,d=r.suspendedLanes,g=r.pingedLanes,v=a&268435455;if(v!==0){var S=v&~d;S!==0?c=zr(S):(g&=v,g!==0&&(c=zr(g)))}else v=a&~d,v!==0?c=zr(v):g!==0&&(c=zr(g));if(c===0)return 0;if(s!==0&&s!==c&&!(s&d)&&(d=c&-c,g=s&-s,d>=g||d===16&&(g&4194240)!==0))return s;if(c&4&&(c|=a&16),s=r.entangledLanes,s!==0)for(r=r.entanglements,s&=c;0<s;)a=31-Ht(s),d=1<<a,c|=r[a],s&=~d;return c}function Wc(r,s){switch(r){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yr(r,s){for(var a=r.suspendedLanes,c=r.pingedLanes,d=r.expirationTimes,g=r.pendingLanes;0<g;){var v=31-Ht(g),S=1<<v,P=d[v];P===-1?(!(S&a)||S&c)&&(d[v]=Wc(S,s)):P<=s&&(r.expiredLanes|=S),g&=~S}}function on(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function $i(){var r=Ds;return Ds<<=1,!(Ds&4194240)&&(Ds=64),r}function $r(r){for(var s=[],a=0;31>a;a++)s.push(r);return s}function Hr(r,s,a){r.pendingLanes|=s,s!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,s=31-Ht(s),r[s]=a}function He(r,s){var a=r.pendingLanes&~s;r.pendingLanes=s,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=s,r.mutableReadLanes&=s,r.entangledLanes&=s,s=r.entanglements;var c=r.eventTimes;for(r=r.expirationTimes;0<a;){var d=31-Ht(a),g=1<<d;s[d]=0,c[d]=-1,r[d]=-1,a&=~g}}function Wr(r,s){var a=r.entangledLanes|=s;for(r=r.entanglements;a;){var c=31-Ht(a),d=1<<c;d&s|r[c]&s&&(r[c]|=s),a&=~d}}var Oe=0;function qr(r){return r&=-r,1<r?4<r?r&268435455?16:536870912:4:1}var Al,Ls,Cl,Pl,kl,ra=!1,qn=[],kt=null,Nn=null,xn=null,Kr=new Map,gn=new Map,Kn=[],qc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Nl(r,s){switch(r){case"focusin":case"focusout":kt=null;break;case"dragenter":case"dragleave":Nn=null;break;case"mouseover":case"mouseout":xn=null;break;case"pointerover":case"pointerout":Kr.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":gn.delete(s.pointerId)}}function Qt(r,s,a,c,d,g){return r===null||r.nativeEvent!==g?(r={blockedOn:s,domEventName:a,eventSystemFlags:c,nativeEvent:g,targetContainers:[d]},s!==null&&(s=_a(s),s!==null&&Ls(s)),r):(r.eventSystemFlags|=c,s=r.targetContainers,d!==null&&s.indexOf(d)===-1&&s.push(d),r)}function Kc(r,s,a,c,d){switch(s){case"focusin":return kt=Qt(kt,r,s,a,c,d),!0;case"dragenter":return Nn=Qt(Nn,r,s,a,c,d),!0;case"mouseover":return xn=Qt(xn,r,s,a,c,d),!0;case"pointerover":var g=d.pointerId;return Kr.set(g,Qt(Kr.get(g)||null,r,s,a,c,d)),!0;case"gotpointercapture":return g=d.pointerId,gn.set(g,Qt(gn.get(g)||null,r,s,a,c,d)),!0}return!1}function xl(r){var s=Gi(r.target);if(s!==null){var a=Pn(s);if(a!==null){if(s=a.tag,s===13){if(s=Fi(a),s!==null){r.blockedOn=s,kl(r.priority,function(){Cl(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){r.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}r.blockedOn=null}function _r(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var a=Vs(r.domEventName,r.eventSystemFlags,s[0],r.nativeEvent);if(a===null){a=r.nativeEvent;var c=new a.constructor(a.type,a);Vi=c,a.target.dispatchEvent(c),Vi=null}else return s=_a(a),s!==null&&Ls(s),r.blockedOn=a,!1;s.shift()}return!0}function Hi(r,s,a){_r(r)&&a.delete(s)}function Dl(){ra=!1,kt!==null&&_r(kt)&&(kt=null),Nn!==null&&_r(Nn)&&(Nn=null),xn!==null&&_r(xn)&&(xn=null),Kr.forEach(Hi),gn.forEach(Hi)}function Dn(r,s){r.blockedOn===s&&(r.blockedOn=null,ra||(ra=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Dl)))}function On(r){function s(d){return Dn(d,r)}if(0<qn.length){Dn(qn[0],r);for(var a=1;a<qn.length;a++){var c=qn[a];c.blockedOn===r&&(c.blockedOn=null)}}for(kt!==null&&Dn(kt,r),Nn!==null&&Dn(Nn,r),xn!==null&&Dn(xn,r),Kr.forEach(s),gn.forEach(s),a=0;a<Kn.length;a++)c=Kn[a],c.blockedOn===r&&(c.blockedOn=null);for(;0<Kn.length&&(a=Kn[0],a.blockedOn===null);)xl(a),a.blockedOn===null&&Kn.shift()}var vr=se.ReactCurrentBatchConfig,Gr=!0;function Xe(r,s,a,c){var d=Oe,g=vr.transition;vr.transition=null;try{Oe=1,ia(r,s,a,c)}finally{Oe=d,vr.transition=g}}function Gc(r,s,a,c){var d=Oe,g=vr.transition;vr.transition=null;try{Oe=4,ia(r,s,a,c)}finally{Oe=d,vr.transition=g}}function ia(r,s,a,c){if(Gr){var d=Vs(r,s,a,c);if(d===null)sh(r,s,c,Wi,a),Nl(r,c);else if(Kc(d,r,s,a,c))c.stopPropagation();else if(Nl(r,c),s&4&&-1<qc.indexOf(r)){for(;d!==null;){var g=_a(d);if(g!==null&&Al(g),g=Vs(r,s,a,c),g===null&&sh(r,s,c,Wi,a),g===d)break;d=g}d!==null&&c.stopPropagation()}else sh(r,s,c,null,a)}}var Wi=null;function Vs(r,s,a,c){if(Wi=null,r=Ss(c),r=Gi(r),r!==null)if(s=Pn(r),s===null)r=null;else if(a=s.tag,a===13){if(r=Fi(s),r!==null)return r;r=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null);return Wi=r,null}function sa(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(wl()){case ji:return 1;case Br:return 4;case mn:case ta:return 16;case Tl:return 536870912;default:return 16}default:return 16}}var an=null,bs=null,Xt=null;function oa(){if(Xt)return Xt;var r,s=bs,a=s.length,c,d="value"in an?an.value:an.textContent,g=d.length;for(r=0;r<a&&s[r]===d[r];r++);var v=a-r;for(c=1;c<=v&&s[a-c]===d[g-c];c++);return Xt=d.slice(r,1<c?1-c:void 0)}function Ms(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function Gn(){return!0}function aa(){return!1}function Nt(r){function s(a,c,d,g,v){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=g,this.target=v,this.currentTarget=null;for(var S in r)r.hasOwnProperty(S)&&(a=r[S],this[S]=a?a(g):g[S]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Gn:aa,this.isPropagationStopped=aa,this}return re(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Gn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Gn)},persist:function(){},isPersistent:Gn}),s}var Ln={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Us=Nt(Ln),Qn=re({},Ln,{view:0,detail:0}),Qc=Nt(Qn),Fs,Er,Qr,qi=re({},Qn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xn,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==Qr&&(Qr&&r.type==="mousemove"?(Fs=r.screenX-Qr.screenX,Er=r.screenY-Qr.screenY):Er=Fs=0,Qr=r),Fs)},movementY:function(r){return"movementY"in r?r.movementY:Er}}),js=Nt(qi),la=re({},qi,{dataTransfer:0}),Ol=Nt(la),Bs=re({},Qn,{relatedTarget:0}),zs=Nt(Bs),Ll=re({},Ln,{animationName:0,elapsedTime:0,pseudoElement:0}),wr=Nt(Ll),Vl=re({},Ln,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),bl=Nt(Vl),Ml=re({},Ln,{data:0}),ua=Nt(Ml),$s={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Wt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ul={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Fl(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=Ul[r])?!!s[r]:!1}function Xn(){return Fl}var u=re({},Qn,{key:function(r){if(r.key){var s=$s[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=Ms(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?Wt[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xn,charCode:function(r){return r.type==="keypress"?Ms(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?Ms(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),m=Nt(u),_=re({},qi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),w=Nt(_),U=re({},Qn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xn}),$=Nt(U),ie=re({},Ln,{propertyName:0,elapsedTime:0,pseudoElement:0}),ze=Nt(ie),gt=re({},qi,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),be=Nt(gt),It=[9,13,27,32],ht=f&&"CompositionEvent"in window,yn=null;f&&"documentMode"in document&&(yn=document.documentMode);var ln=f&&"TextEvent"in window&&!yn,Ki=f&&(!ht||yn&&8<yn&&11>=yn),Hs=" ",fp=!1;function pp(r,s){switch(r){case"keyup":return It.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mp(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var Ws=!1;function Y0(r,s){switch(r){case"compositionend":return mp(s);case"keypress":return s.which!==32?null:(fp=!0,Hs);case"textInput":return r=s.data,r===Hs&&fp?null:r;default:return null}}function J0(r,s){if(Ws)return r==="compositionend"||!ht&&pp(r,s)?(r=oa(),Xt=bs=an=null,Ws=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Ki&&s.locale!=="ko"?null:s.data;default:return null}}var Z0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gp(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!Z0[r.type]:s==="textarea"}function yp(r,s,a,c){Wn(c),s=Hl(s,"onChange"),0<s.length&&(a=new Us("onChange","change",null,a,c),r.push({event:a,listeners:s}))}var ca=null,ha=null;function eE(r){Vp(r,0)}function jl(r){var s=Xs(r);if(dr(s))return r}function tE(r,s){if(r==="change")return s}var _p=!1;if(f){var Xc;if(f){var Yc="oninput"in document;if(!Yc){var vp=document.createElement("div");vp.setAttribute("oninput","return;"),Yc=typeof vp.oninput=="function"}Xc=Yc}else Xc=!1;_p=Xc&&(!document.documentMode||9<document.documentMode)}function Ep(){ca&&(ca.detachEvent("onpropertychange",wp),ha=ca=null)}function wp(r){if(r.propertyName==="value"&&jl(ha)){var s=[];yp(s,ha,r,Ss(r)),Yo(eE,s)}}function nE(r,s,a){r==="focusin"?(Ep(),ca=s,ha=a,ca.attachEvent("onpropertychange",wp)):r==="focusout"&&Ep()}function rE(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return jl(ha)}function iE(r,s){if(r==="click")return jl(s)}function sE(r,s){if(r==="input"||r==="change")return jl(s)}function oE(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var Vn=typeof Object.is=="function"?Object.is:oE;function da(r,s){if(Vn(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var a=Object.keys(r),c=Object.keys(s);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!p.call(s,d)||!Vn(r[d],s[d]))return!1}return!0}function Tp(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function Ip(r,s){var a=Tp(r);r=0;for(var c;a;){if(a.nodeType===3){if(c=r+a.textContent.length,r<=s&&c>=s)return{node:a,offset:s-r};r=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Tp(a)}}function Sp(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?Sp(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function Rp(){for(var r=window,s=We();s instanceof r.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)r=s.contentWindow;else break;s=We(r.document)}return s}function Jc(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}function aE(r){var s=Rp(),a=r.focusedElem,c=r.selectionRange;if(s!==a&&a&&a.ownerDocument&&Sp(a.ownerDocument.documentElement,a)){if(c!==null&&Jc(a)){if(s=c.start,r=c.end,r===void 0&&(r=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(r,a.value.length);else if(r=(s=a.ownerDocument||document)&&s.defaultView||window,r.getSelection){r=r.getSelection();var d=a.textContent.length,g=Math.min(c.start,d);c=c.end===void 0?g:Math.min(c.end,d),!r.extend&&g>c&&(d=c,c=g,g=d),d=Ip(a,g);var v=Ip(a,c);d&&v&&(r.rangeCount!==1||r.anchorNode!==d.node||r.anchorOffset!==d.offset||r.focusNode!==v.node||r.focusOffset!==v.offset)&&(s=s.createRange(),s.setStart(d.node,d.offset),r.removeAllRanges(),g>c?(r.addRange(s),r.extend(v.node,v.offset)):(s.setEnd(v.node,v.offset),r.addRange(s)))}}for(s=[],r=a;r=r.parentNode;)r.nodeType===1&&s.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)r=s[a],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var lE=f&&"documentMode"in document&&11>=document.documentMode,qs=null,Zc=null,fa=null,eh=!1;function Ap(r,s,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;eh||qs==null||qs!==We(c)||(c=qs,"selectionStart"in c&&Jc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),fa&&da(fa,c)||(fa=c,c=Hl(Zc,"onSelect"),0<c.length&&(s=new Us("onSelect","select",null,s,a),r.push({event:s,listeners:c}),s.target=qs)))}function Bl(r,s){var a={};return a[r.toLowerCase()]=s.toLowerCase(),a["Webkit"+r]="webkit"+s,a["Moz"+r]="moz"+s,a}var Ks={animationend:Bl("Animation","AnimationEnd"),animationiteration:Bl("Animation","AnimationIteration"),animationstart:Bl("Animation","AnimationStart"),transitionend:Bl("Transition","TransitionEnd")},th={},Cp={};f&&(Cp=document.createElement("div").style,"AnimationEvent"in window||(delete Ks.animationend.animation,delete Ks.animationiteration.animation,delete Ks.animationstart.animation),"TransitionEvent"in window||delete Ks.transitionend.transition);function zl(r){if(th[r])return th[r];if(!Ks[r])return r;var s=Ks[r],a;for(a in s)if(s.hasOwnProperty(a)&&a in Cp)return th[r]=s[a];return r}var Pp=zl("animationend"),kp=zl("animationiteration"),Np=zl("animationstart"),xp=zl("transitionend"),Dp=new Map,Op="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xr(r,s){Dp.set(r,s),l(s,[r])}for(var nh=0;nh<Op.length;nh++){var rh=Op[nh],uE=rh.toLowerCase(),cE=rh[0].toUpperCase()+rh.slice(1);Xr(uE,"on"+cE)}Xr(Pp,"onAnimationEnd"),Xr(kp,"onAnimationIteration"),Xr(Np,"onAnimationStart"),Xr("dblclick","onDoubleClick"),Xr("focusin","onFocus"),Xr("focusout","onBlur"),Xr(xp,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hE=new Set("cancel close invalid load scroll toggle".split(" ").concat(pa));function Lp(r,s,a){var c=r.type||"unknown-event";r.currentTarget=a,_l(c,s,void 0,r),r.currentTarget=null}function Vp(r,s){s=(s&4)!==0;for(var a=0;a<r.length;a++){var c=r[a],d=c.event;c=c.listeners;e:{var g=void 0;if(s)for(var v=c.length-1;0<=v;v--){var S=c[v],P=S.instance,B=S.currentTarget;if(S=S.listener,P!==g&&d.isPropagationStopped())break e;Lp(d,S,B),g=P}else for(v=0;v<c.length;v++){if(S=c[v],P=S.instance,B=S.currentTarget,S=S.listener,P!==g&&d.isPropagationStopped())break e;Lp(d,S,B),g=P}}}if(Cn)throw r=Jo,Cn=!1,Jo=null,r}function Ge(r,s){var a=s[hh];a===void 0&&(a=s[hh]=new Set);var c=r+"__bubble";a.has(c)||(bp(s,r,2,!1),a.add(c))}function ih(r,s,a){var c=0;s&&(c|=4),bp(a,r,c,s)}var $l="_reactListening"+Math.random().toString(36).slice(2);function ma(r){if(!r[$l]){r[$l]=!0,i.forEach(function(a){a!=="selectionchange"&&(hE.has(a)||ih(a,!1,r),ih(a,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[$l]||(s[$l]=!0,ih("selectionchange",!1,s))}}function bp(r,s,a,c){switch(sa(s)){case 1:var d=Xe;break;case 4:d=Gc;break;default:d=ia}a=d.bind(null,s,a,r),d=void 0,!Cs||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(d=!0),c?d!==void 0?r.addEventListener(s,a,{capture:!0,passive:d}):r.addEventListener(s,a,!0):d!==void 0?r.addEventListener(s,a,{passive:d}):r.addEventListener(s,a,!1)}function sh(r,s,a,c,d){var g=c;if(!(s&1)&&!(s&2)&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var S=c.stateNode.containerInfo;if(S===d||S.nodeType===8&&S.parentNode===d)break;if(v===4)for(v=c.return;v!==null;){var P=v.tag;if((P===3||P===4)&&(P=v.stateNode.containerInfo,P===d||P.nodeType===8&&P.parentNode===d))return;v=v.return}for(;S!==null;){if(v=Gi(S),v===null)return;if(P=v.tag,P===5||P===6){c=g=v;continue e}S=S.parentNode}}c=c.return}Yo(function(){var B=g,Q=Ss(a),Y=[];e:{var G=Dp.get(r);if(G!==void 0){var oe=Us,ce=r;switch(r){case"keypress":if(Ms(a)===0)break e;case"keydown":case"keyup":oe=m;break;case"focusin":ce="focus",oe=zs;break;case"focusout":ce="blur",oe=zs;break;case"beforeblur":case"afterblur":oe=zs;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":oe=js;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":oe=Ol;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":oe=$;break;case Pp:case kp:case Np:oe=wr;break;case xp:oe=ze;break;case"scroll":oe=Qc;break;case"wheel":oe=be;break;case"copy":case"cut":case"paste":oe=bl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":oe=w}var he=(s&4)!==0,ut=!he&&r==="scroll",F=he?G!==null?G+"Capture":null:G;he=[];for(var x=B,j;x!==null;){j=x;var Z=j.stateNode;if(j.tag===5&&Z!==null&&(j=Z,F!==null&&(Z=lt(x,F),Z!=null&&he.push(ga(x,Z,j)))),ut)break;x=x.return}0<he.length&&(G=new oe(G,ce,null,a,Q),Y.push({event:G,listeners:he}))}}if(!(s&7)){e:{if(G=r==="mouseover"||r==="pointerover",oe=r==="mouseout"||r==="pointerout",G&&a!==Vi&&(ce=a.relatedTarget||a.fromElement)&&(Gi(ce)||ce[Tr]))break e;if((oe||G)&&(G=Q.window===Q?Q:(G=Q.ownerDocument)?G.defaultView||G.parentWindow:window,oe?(ce=a.relatedTarget||a.toElement,oe=B,ce=ce?Gi(ce):null,ce!==null&&(ut=Pn(ce),ce!==ut||ce.tag!==5&&ce.tag!==6)&&(ce=null)):(oe=null,ce=B),oe!==ce)){if(he=js,Z="onMouseLeave",F="onMouseEnter",x="mouse",(r==="pointerout"||r==="pointerover")&&(he=w,Z="onPointerLeave",F="onPointerEnter",x="pointer"),ut=oe==null?G:Xs(oe),j=ce==null?G:Xs(ce),G=new he(Z,x+"leave",oe,a,Q),G.target=ut,G.relatedTarget=j,Z=null,Gi(Q)===B&&(he=new he(F,x+"enter",ce,a,Q),he.target=j,he.relatedTarget=ut,Z=he),ut=Z,oe&&ce)t:{for(he=oe,F=ce,x=0,j=he;j;j=Gs(j))x++;for(j=0,Z=F;Z;Z=Gs(Z))j++;for(;0<x-j;)he=Gs(he),x--;for(;0<j-x;)F=Gs(F),j--;for(;x--;){if(he===F||F!==null&&he===F.alternate)break t;he=Gs(he),F=Gs(F)}he=null}else he=null;oe!==null&&Mp(Y,G,oe,he,!1),ce!==null&&ut!==null&&Mp(Y,ut,ce,he,!0)}}e:{if(G=B?Xs(B):window,oe=G.nodeName&&G.nodeName.toLowerCase(),oe==="select"||oe==="input"&&G.type==="file")var de=tE;else if(gp(G))if(_p)de=sE;else{de=rE;var me=nE}else(oe=G.nodeName)&&oe.toLowerCase()==="input"&&(G.type==="checkbox"||G.type==="radio")&&(de=iE);if(de&&(de=de(r,B))){yp(Y,de,a,Q);break e}me&&me(r,G,B),r==="focusout"&&(me=G._wrapperState)&&me.controlled&&G.type==="number"&&ws(G,"number",G.value)}switch(me=B?Xs(B):window,r){case"focusin":(gp(me)||me.contentEditable==="true")&&(qs=me,Zc=B,fa=null);break;case"focusout":fa=Zc=qs=null;break;case"mousedown":eh=!0;break;case"contextmenu":case"mouseup":case"dragend":eh=!1,Ap(Y,a,Q);break;case"selectionchange":if(lE)break;case"keydown":case"keyup":Ap(Y,a,Q)}var ge;if(ht)e:{switch(r){case"compositionstart":var we="onCompositionStart";break e;case"compositionend":we="onCompositionEnd";break e;case"compositionupdate":we="onCompositionUpdate";break e}we=void 0}else Ws?pp(r,a)&&(we="onCompositionEnd"):r==="keydown"&&a.keyCode===229&&(we="onCompositionStart");we&&(Ki&&a.locale!=="ko"&&(Ws||we!=="onCompositionStart"?we==="onCompositionEnd"&&Ws&&(ge=oa()):(an=Q,bs="value"in an?an.value:an.textContent,Ws=!0)),me=Hl(B,we),0<me.length&&(we=new ua(we,r,null,a,Q),Y.push({event:we,listeners:me}),ge?we.data=ge:(ge=mp(a),ge!==null&&(we.data=ge)))),(ge=ln?Y0(r,a):J0(r,a))&&(B=Hl(B,"onBeforeInput"),0<B.length&&(Q=new ua("onBeforeInput","beforeinput",null,a,Q),Y.push({event:Q,listeners:B}),Q.data=ge))}Vp(Y,s)})}function ga(r,s,a){return{instance:r,listener:s,currentTarget:a}}function Hl(r,s){for(var a=s+"Capture",c=[];r!==null;){var d=r,g=d.stateNode;d.tag===5&&g!==null&&(d=g,g=lt(r,a),g!=null&&c.unshift(ga(r,g,d)),g=lt(r,s),g!=null&&c.push(ga(r,g,d))),r=r.return}return c}function Gs(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function Mp(r,s,a,c,d){for(var g=s._reactName,v=[];a!==null&&a!==c;){var S=a,P=S.alternate,B=S.stateNode;if(P!==null&&P===c)break;S.tag===5&&B!==null&&(S=B,d?(P=lt(a,g),P!=null&&v.unshift(ga(a,P,S))):d||(P=lt(a,g),P!=null&&v.push(ga(a,P,S)))),a=a.return}v.length!==0&&r.push({event:s,listeners:v})}var dE=/\r\n?/g,fE=/\u0000|\uFFFD/g;function Up(r){return(typeof r=="string"?r:""+r).replace(dE,`
`).replace(fE,"")}function Wl(r,s,a){if(s=Up(s),Up(r)!==s&&a)throw Error(t(425))}function ql(){}var oh=null,ah=null;function lh(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var uh=typeof setTimeout=="function"?setTimeout:void 0,pE=typeof clearTimeout=="function"?clearTimeout:void 0,Fp=typeof Promise=="function"?Promise:void 0,mE=typeof queueMicrotask=="function"?queueMicrotask:typeof Fp<"u"?function(r){return Fp.resolve(null).then(r).catch(gE)}:uh;function gE(r){setTimeout(function(){throw r})}function ch(r,s){var a=s,c=0;do{var d=a.nextSibling;if(r.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){r.removeChild(d),On(s);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);On(s)}function Yr(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return r}function jp(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return r;s--}else a==="/$"&&s++}r=r.previousSibling}return null}var Qs=Math.random().toString(36).slice(2),Yn="__reactFiber$"+Qs,ya="__reactProps$"+Qs,Tr="__reactContainer$"+Qs,hh="__reactEvents$"+Qs,yE="__reactListeners$"+Qs,_E="__reactHandles$"+Qs;function Gi(r){var s=r[Yn];if(s)return s;for(var a=r.parentNode;a;){if(s=a[Tr]||a[Yn]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(r=jp(r);r!==null;){if(a=r[Yn])return a;r=jp(r)}return s}r=a,a=r.parentNode}return null}function _a(r){return r=r[Yn]||r[Tr],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function Xs(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function Kl(r){return r[ya]||null}var dh=[],Ys=-1;function Jr(r){return{current:r}}function Qe(r){0>Ys||(r.current=dh[Ys],dh[Ys]=null,Ys--)}function Ke(r,s){Ys++,dh[Ys]=r.current,r.current=s}var Zr={},bt=Jr(Zr),Yt=Jr(!1),Qi=Zr;function Js(r,s){var a=r.type.contextTypes;if(!a)return Zr;var c=r.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===s)return c.__reactInternalMemoizedMaskedChildContext;var d={},g;for(g in a)d[g]=s[g];return c&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=s,r.__reactInternalMemoizedMaskedChildContext=d),d}function Jt(r){return r=r.childContextTypes,r!=null}function Gl(){Qe(Yt),Qe(bt)}function Bp(r,s,a){if(bt.current!==Zr)throw Error(t(168));Ke(bt,s),Ke(Yt,a)}function zp(r,s,a){var c=r.stateNode;if(s=s.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in s))throw Error(t(108,Ve(r)||"Unknown",d));return re({},a,c)}function Ql(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||Zr,Qi=bt.current,Ke(bt,r),Ke(Yt,Yt.current),!0}function $p(r,s,a){var c=r.stateNode;if(!c)throw Error(t(169));a?(r=zp(r,s,Qi),c.__reactInternalMemoizedMergedChildContext=r,Qe(Yt),Qe(bt),Ke(bt,r)):Qe(Yt),Ke(Yt,a)}var Ir=null,Xl=!1,fh=!1;function Hp(r){Ir===null?Ir=[r]:Ir.push(r)}function vE(r){Xl=!0,Hp(r)}function ei(){if(!fh&&Ir!==null){fh=!0;var r=0,s=Oe;try{var a=Ir;for(Oe=1;r<a.length;r++){var c=a[r];do c=c(!0);while(c!==null)}Ir=null,Xl=!1}catch(d){throw Ir!==null&&(Ir=Ir.slice(r+1)),xs(ji,ei),d}finally{Oe=s,fh=!1}}return null}var Zs=[],eo=0,Yl=null,Jl=0,_n=[],vn=0,Xi=null,Sr=1,Rr="";function Yi(r,s){Zs[eo++]=Jl,Zs[eo++]=Yl,Yl=r,Jl=s}function Wp(r,s,a){_n[vn++]=Sr,_n[vn++]=Rr,_n[vn++]=Xi,Xi=r;var c=Sr;r=Rr;var d=32-Ht(c)-1;c&=~(1<<d),a+=1;var g=32-Ht(s)+d;if(30<g){var v=d-d%5;g=(c&(1<<v)-1).toString(32),c>>=v,d-=v,Sr=1<<32-Ht(s)+d|a<<d|c,Rr=g+r}else Sr=1<<g|a<<d|c,Rr=r}function ph(r){r.return!==null&&(Yi(r,1),Wp(r,1,0))}function mh(r){for(;r===Yl;)Yl=Zs[--eo],Zs[eo]=null,Jl=Zs[--eo],Zs[eo]=null;for(;r===Xi;)Xi=_n[--vn],_n[vn]=null,Rr=_n[--vn],_n[vn]=null,Sr=_n[--vn],_n[vn]=null}var un=null,cn=null,Ye=!1,bn=null;function qp(r,s){var a=In(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=r,s=r.deletions,s===null?(r.deletions=[a],r.flags|=16):s.push(a)}function Kp(r,s){switch(r.tag){case 5:var a=r.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(r.stateNode=s,un=r,cn=Yr(s.firstChild),!0):!1;case 6:return s=r.pendingProps===""||s.nodeType!==3?null:s,s!==null?(r.stateNode=s,un=r,cn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=Xi!==null?{id:Sr,overflow:Rr}:null,r.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=In(18,null,null,0),a.stateNode=s,a.return=r,r.child=a,un=r,cn=null,!0):!1;default:return!1}}function gh(r){return(r.mode&1)!==0&&(r.flags&128)===0}function yh(r){if(Ye){var s=cn;if(s){var a=s;if(!Kp(r,s)){if(gh(r))throw Error(t(418));s=Yr(a.nextSibling);var c=un;s&&Kp(r,s)?qp(c,a):(r.flags=r.flags&-4097|2,Ye=!1,un=r)}}else{if(gh(r))throw Error(t(418));r.flags=r.flags&-4097|2,Ye=!1,un=r}}}function Gp(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;un=r}function Zl(r){if(r!==un)return!1;if(!Ye)return Gp(r),Ye=!0,!1;var s;if((s=r.tag!==3)&&!(s=r.tag!==5)&&(s=r.type,s=s!=="head"&&s!=="body"&&!lh(r.type,r.memoizedProps)),s&&(s=cn)){if(gh(r))throw Qp(),Error(t(418));for(;s;)qp(r,s),s=Yr(s.nextSibling)}if(Gp(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="/$"){if(s===0){cn=Yr(r.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}r=r.nextSibling}cn=null}}else cn=un?Yr(r.stateNode.nextSibling):null;return!0}function Qp(){for(var r=cn;r;)r=Yr(r.nextSibling)}function to(){cn=un=null,Ye=!1}function _h(r){bn===null?bn=[r]:bn.push(r)}var EE=se.ReactCurrentBatchConfig;function va(r,s,a){if(r=a.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,r));var d=c,g=""+r;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===g?s.ref:(s=function(v){var S=d.refs;v===null?delete S[g]:S[g]=v},s._stringRef=g,s)}if(typeof r!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,r))}return r}function eu(r,s){throw r=Object.prototype.toString.call(s),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r))}function Xp(r){var s=r._init;return s(r._payload)}function Yp(r){function s(F,x){if(r){var j=F.deletions;j===null?(F.deletions=[x],F.flags|=16):j.push(x)}}function a(F,x){if(!r)return null;for(;x!==null;)s(F,x),x=x.sibling;return null}function c(F,x){for(F=new Map;x!==null;)x.key!==null?F.set(x.key,x):F.set(x.index,x),x=x.sibling;return F}function d(F,x){return F=li(F,x),F.index=0,F.sibling=null,F}function g(F,x,j){return F.index=j,r?(j=F.alternate,j!==null?(j=j.index,j<x?(F.flags|=2,x):j):(F.flags|=2,x)):(F.flags|=1048576,x)}function v(F){return r&&F.alternate===null&&(F.flags|=2),F}function S(F,x,j,Z){return x===null||x.tag!==6?(x=ud(j,F.mode,Z),x.return=F,x):(x=d(x,j),x.return=F,x)}function P(F,x,j,Z){var de=j.type;return de===N?Q(F,x,j.props.children,Z,j.key):x!==null&&(x.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===ve&&Xp(de)===x.type)?(Z=d(x,j.props),Z.ref=va(F,x,j),Z.return=F,Z):(Z=Su(j.type,j.key,j.props,null,F.mode,Z),Z.ref=va(F,x,j),Z.return=F,Z)}function B(F,x,j,Z){return x===null||x.tag!==4||x.stateNode.containerInfo!==j.containerInfo||x.stateNode.implementation!==j.implementation?(x=cd(j,F.mode,Z),x.return=F,x):(x=d(x,j.children||[]),x.return=F,x)}function Q(F,x,j,Z,de){return x===null||x.tag!==7?(x=ss(j,F.mode,Z,de),x.return=F,x):(x=d(x,j),x.return=F,x)}function Y(F,x,j){if(typeof x=="string"&&x!==""||typeof x=="number")return x=ud(""+x,F.mode,j),x.return=F,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ie:return j=Su(x.type,x.key,x.props,null,F.mode,j),j.ref=va(F,null,x),j.return=F,j;case _e:return x=cd(x,F.mode,j),x.return=F,x;case ve:var Z=x._init;return Y(F,Z(x._payload),j)}if(fr(x)||ae(x))return x=ss(x,F.mode,j,null),x.return=F,x;eu(F,x)}return null}function G(F,x,j,Z){var de=x!==null?x.key:null;if(typeof j=="string"&&j!==""||typeof j=="number")return de!==null?null:S(F,x,""+j,Z);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Ie:return j.key===de?P(F,x,j,Z):null;case _e:return j.key===de?B(F,x,j,Z):null;case ve:return de=j._init,G(F,x,de(j._payload),Z)}if(fr(j)||ae(j))return de!==null?null:Q(F,x,j,Z,null);eu(F,j)}return null}function oe(F,x,j,Z,de){if(typeof Z=="string"&&Z!==""||typeof Z=="number")return F=F.get(j)||null,S(x,F,""+Z,de);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case Ie:return F=F.get(Z.key===null?j:Z.key)||null,P(x,F,Z,de);case _e:return F=F.get(Z.key===null?j:Z.key)||null,B(x,F,Z,de);case ve:var me=Z._init;return oe(F,x,j,me(Z._payload),de)}if(fr(Z)||ae(Z))return F=F.get(j)||null,Q(x,F,Z,de,null);eu(x,Z)}return null}function ce(F,x,j,Z){for(var de=null,me=null,ge=x,we=x=0,At=null;ge!==null&&we<j.length;we++){ge.index>we?(At=ge,ge=null):At=ge.sibling;var je=G(F,ge,j[we],Z);if(je===null){ge===null&&(ge=At);break}r&&ge&&je.alternate===null&&s(F,ge),x=g(je,x,we),me===null?de=je:me.sibling=je,me=je,ge=At}if(we===j.length)return a(F,ge),Ye&&Yi(F,we),de;if(ge===null){for(;we<j.length;we++)ge=Y(F,j[we],Z),ge!==null&&(x=g(ge,x,we),me===null?de=ge:me.sibling=ge,me=ge);return Ye&&Yi(F,we),de}for(ge=c(F,ge);we<j.length;we++)At=oe(ge,F,we,j[we],Z),At!==null&&(r&&At.alternate!==null&&ge.delete(At.key===null?we:At.key),x=g(At,x,we),me===null?de=At:me.sibling=At,me=At);return r&&ge.forEach(function(ui){return s(F,ui)}),Ye&&Yi(F,we),de}function he(F,x,j,Z){var de=ae(j);if(typeof de!="function")throw Error(t(150));if(j=de.call(j),j==null)throw Error(t(151));for(var me=de=null,ge=x,we=x=0,At=null,je=j.next();ge!==null&&!je.done;we++,je=j.next()){ge.index>we?(At=ge,ge=null):At=ge.sibling;var ui=G(F,ge,je.value,Z);if(ui===null){ge===null&&(ge=At);break}r&&ge&&ui.alternate===null&&s(F,ge),x=g(ui,x,we),me===null?de=ui:me.sibling=ui,me=ui,ge=At}if(je.done)return a(F,ge),Ye&&Yi(F,we),de;if(ge===null){for(;!je.done;we++,je=j.next())je=Y(F,je.value,Z),je!==null&&(x=g(je,x,we),me===null?de=je:me.sibling=je,me=je);return Ye&&Yi(F,we),de}for(ge=c(F,ge);!je.done;we++,je=j.next())je=oe(ge,F,we,je.value,Z),je!==null&&(r&&je.alternate!==null&&ge.delete(je.key===null?we:je.key),x=g(je,x,we),me===null?de=je:me.sibling=je,me=je);return r&&ge.forEach(function(ZE){return s(F,ZE)}),Ye&&Yi(F,we),de}function ut(F,x,j,Z){if(typeof j=="object"&&j!==null&&j.type===N&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case Ie:e:{for(var de=j.key,me=x;me!==null;){if(me.key===de){if(de=j.type,de===N){if(me.tag===7){a(F,me.sibling),x=d(me,j.props.children),x.return=F,F=x;break e}}else if(me.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===ve&&Xp(de)===me.type){a(F,me.sibling),x=d(me,j.props),x.ref=va(F,me,j),x.return=F,F=x;break e}a(F,me);break}else s(F,me);me=me.sibling}j.type===N?(x=ss(j.props.children,F.mode,Z,j.key),x.return=F,F=x):(Z=Su(j.type,j.key,j.props,null,F.mode,Z),Z.ref=va(F,x,j),Z.return=F,F=Z)}return v(F);case _e:e:{for(me=j.key;x!==null;){if(x.key===me)if(x.tag===4&&x.stateNode.containerInfo===j.containerInfo&&x.stateNode.implementation===j.implementation){a(F,x.sibling),x=d(x,j.children||[]),x.return=F,F=x;break e}else{a(F,x);break}else s(F,x);x=x.sibling}x=cd(j,F.mode,Z),x.return=F,F=x}return v(F);case ve:return me=j._init,ut(F,x,me(j._payload),Z)}if(fr(j))return ce(F,x,j,Z);if(ae(j))return he(F,x,j,Z);eu(F,j)}return typeof j=="string"&&j!==""||typeof j=="number"?(j=""+j,x!==null&&x.tag===6?(a(F,x.sibling),x=d(x,j),x.return=F,F=x):(a(F,x),x=ud(j,F.mode,Z),x.return=F,F=x),v(F)):a(F,x)}return ut}var no=Yp(!0),Jp=Yp(!1),tu=Jr(null),nu=null,ro=null,vh=null;function Eh(){vh=ro=nu=null}function wh(r){var s=tu.current;Qe(tu),r._currentValue=s}function Th(r,s,a){for(;r!==null;){var c=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,c!==null&&(c.childLanes|=s)):c!==null&&(c.childLanes&s)!==s&&(c.childLanes|=s),r===a)break;r=r.return}}function io(r,s){nu=r,vh=ro=null,r=r.dependencies,r!==null&&r.firstContext!==null&&(r.lanes&s&&(Zt=!0),r.firstContext=null)}function En(r){var s=r._currentValue;if(vh!==r)if(r={context:r,memoizedValue:s,next:null},ro===null){if(nu===null)throw Error(t(308));ro=r,nu.dependencies={lanes:0,firstContext:r}}else ro=ro.next=r;return s}var Ji=null;function Ih(r){Ji===null?Ji=[r]:Ji.push(r)}function Zp(r,s,a,c){var d=s.interleaved;return d===null?(a.next=a,Ih(s)):(a.next=d.next,d.next=a),s.interleaved=a,Ar(r,c)}function Ar(r,s){r.lanes|=s;var a=r.alternate;for(a!==null&&(a.lanes|=s),a=r,r=r.return;r!==null;)r.childLanes|=s,a=r.alternate,a!==null&&(a.childLanes|=s),a=r,r=r.return;return a.tag===3?a.stateNode:null}var ti=!1;function Sh(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function em(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function Cr(r,s){return{eventTime:r,lane:s,tag:0,payload:null,callback:null,next:null}}function ni(r,s,a){var c=r.updateQueue;if(c===null)return null;if(c=c.shared,Fe&2){var d=c.pending;return d===null?s.next=s:(s.next=d.next,d.next=s),c.pending=s,Ar(r,a)}return d=c.interleaved,d===null?(s.next=s,Ih(c)):(s.next=d.next,d.next=s),c.interleaved=s,Ar(r,a)}function ru(r,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var c=s.lanes;c&=r.pendingLanes,a|=c,s.lanes=a,Wr(r,a)}}function tm(r,s){var a=r.updateQueue,c=r.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?d=g=v:g=g.next=v,a=a.next}while(a!==null);g===null?d=g=s:g=g.next=s}else d=g=s;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:g,shared:c.shared,effects:c.effects},r.updateQueue=a;return}r=a.lastBaseUpdate,r===null?a.firstBaseUpdate=s:r.next=s,a.lastBaseUpdate=s}function iu(r,s,a,c){var d=r.updateQueue;ti=!1;var g=d.firstBaseUpdate,v=d.lastBaseUpdate,S=d.shared.pending;if(S!==null){d.shared.pending=null;var P=S,B=P.next;P.next=null,v===null?g=B:v.next=B,v=P;var Q=r.alternate;Q!==null&&(Q=Q.updateQueue,S=Q.lastBaseUpdate,S!==v&&(S===null?Q.firstBaseUpdate=B:S.next=B,Q.lastBaseUpdate=P))}if(g!==null){var Y=d.baseState;v=0,Q=B=P=null,S=g;do{var G=S.lane,oe=S.eventTime;if((c&G)===G){Q!==null&&(Q=Q.next={eventTime:oe,lane:0,tag:S.tag,payload:S.payload,callback:S.callback,next:null});e:{var ce=r,he=S;switch(G=s,oe=a,he.tag){case 1:if(ce=he.payload,typeof ce=="function"){Y=ce.call(oe,Y,G);break e}Y=ce;break e;case 3:ce.flags=ce.flags&-65537|128;case 0:if(ce=he.payload,G=typeof ce=="function"?ce.call(oe,Y,G):ce,G==null)break e;Y=re({},Y,G);break e;case 2:ti=!0}}S.callback!==null&&S.lane!==0&&(r.flags|=64,G=d.effects,G===null?d.effects=[S]:G.push(S))}else oe={eventTime:oe,lane:G,tag:S.tag,payload:S.payload,callback:S.callback,next:null},Q===null?(B=Q=oe,P=Y):Q=Q.next=oe,v|=G;if(S=S.next,S===null){if(S=d.shared.pending,S===null)break;G=S,S=G.next,G.next=null,d.lastBaseUpdate=G,d.shared.pending=null}}while(!0);if(Q===null&&(P=Y),d.baseState=P,d.firstBaseUpdate=B,d.lastBaseUpdate=Q,s=d.shared.interleaved,s!==null){d=s;do v|=d.lane,d=d.next;while(d!==s)}else g===null&&(d.shared.lanes=0);ts|=v,r.lanes=v,r.memoizedState=Y}}function nm(r,s,a){if(r=s.effects,s.effects=null,r!==null)for(s=0;s<r.length;s++){var c=r[s],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var Ea={},Jn=Jr(Ea),wa=Jr(Ea),Ta=Jr(Ea);function Zi(r){if(r===Ea)throw Error(t(174));return r}function Rh(r,s){switch(Ke(Ta,s),Ke(wa,r),Ke(Jn,Ea),r=s.nodeType,r){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:mt(null,"");break;default:r=r===8?s.parentNode:s,s=r.namespaceURI||null,r=r.tagName,s=mt(s,r)}Qe(Jn),Ke(Jn,s)}function so(){Qe(Jn),Qe(wa),Qe(Ta)}function rm(r){Zi(Ta.current);var s=Zi(Jn.current),a=mt(s,r.type);s!==a&&(Ke(wa,r),Ke(Jn,a))}function Ah(r){wa.current===r&&(Qe(Jn),Qe(wa))}var tt=Jr(0);function su(r){for(var s=r;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if(s.flags&128)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Ch=[];function Ph(){for(var r=0;r<Ch.length;r++)Ch[r]._workInProgressVersionPrimary=null;Ch.length=0}var ou=se.ReactCurrentDispatcher,kh=se.ReactCurrentBatchConfig,es=0,nt=null,yt=null,St=null,au=!1,Ia=!1,Sa=0,wE=0;function Mt(){throw Error(t(321))}function Nh(r,s){if(s===null)return!1;for(var a=0;a<s.length&&a<r.length;a++)if(!Vn(r[a],s[a]))return!1;return!0}function xh(r,s,a,c,d,g){if(es=g,nt=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,ou.current=r===null||r.memoizedState===null?RE:AE,r=a(c,d),Ia){g=0;do{if(Ia=!1,Sa=0,25<=g)throw Error(t(301));g+=1,St=yt=null,s.updateQueue=null,ou.current=CE,r=a(c,d)}while(Ia)}if(ou.current=cu,s=yt!==null&&yt.next!==null,es=0,St=yt=nt=null,au=!1,s)throw Error(t(300));return r}function Dh(){var r=Sa!==0;return Sa=0,r}function Zn(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return St===null?nt.memoizedState=St=r:St=St.next=r,St}function wn(){if(yt===null){var r=nt.alternate;r=r!==null?r.memoizedState:null}else r=yt.next;var s=St===null?nt.memoizedState:St.next;if(s!==null)St=s,yt=r;else{if(r===null)throw Error(t(310));yt=r,r={memoizedState:yt.memoizedState,baseState:yt.baseState,baseQueue:yt.baseQueue,queue:yt.queue,next:null},St===null?nt.memoizedState=St=r:St=St.next=r}return St}function Ra(r,s){return typeof s=="function"?s(r):s}function Oh(r){var s=wn(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var c=yt,d=c.baseQueue,g=a.pending;if(g!==null){if(d!==null){var v=d.next;d.next=g.next,g.next=v}c.baseQueue=d=g,a.pending=null}if(d!==null){g=d.next,c=c.baseState;var S=v=null,P=null,B=g;do{var Q=B.lane;if((es&Q)===Q)P!==null&&(P=P.next={lane:0,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null}),c=B.hasEagerState?B.eagerState:r(c,B.action);else{var Y={lane:Q,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null};P===null?(S=P=Y,v=c):P=P.next=Y,nt.lanes|=Q,ts|=Q}B=B.next}while(B!==null&&B!==g);P===null?v=c:P.next=S,Vn(c,s.memoizedState)||(Zt=!0),s.memoizedState=c,s.baseState=v,s.baseQueue=P,a.lastRenderedState=c}if(r=a.interleaved,r!==null){d=r;do g=d.lane,nt.lanes|=g,ts|=g,d=d.next;while(d!==r)}else d===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function Lh(r){var s=wn(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var c=a.dispatch,d=a.pending,g=s.memoizedState;if(d!==null){a.pending=null;var v=d=d.next;do g=r(g,v.action),v=v.next;while(v!==d);Vn(g,s.memoizedState)||(Zt=!0),s.memoizedState=g,s.baseQueue===null&&(s.baseState=g),a.lastRenderedState=g}return[g,c]}function im(){}function sm(r,s){var a=nt,c=wn(),d=s(),g=!Vn(c.memoizedState,d);if(g&&(c.memoizedState=d,Zt=!0),c=c.queue,Vh(lm.bind(null,a,c,r),[r]),c.getSnapshot!==s||g||St!==null&&St.memoizedState.tag&1){if(a.flags|=2048,Aa(9,am.bind(null,a,c,d,s),void 0,null),Rt===null)throw Error(t(349));es&30||om(a,s,d)}return d}function om(r,s,a){r.flags|=16384,r={getSnapshot:s,value:a},s=nt.updateQueue,s===null?(s={lastEffect:null,stores:null},nt.updateQueue=s,s.stores=[r]):(a=s.stores,a===null?s.stores=[r]:a.push(r))}function am(r,s,a,c){s.value=a,s.getSnapshot=c,um(s)&&cm(r)}function lm(r,s,a){return a(function(){um(s)&&cm(r)})}function um(r){var s=r.getSnapshot;r=r.value;try{var a=s();return!Vn(r,a)}catch{return!0}}function cm(r){var s=Ar(r,1);s!==null&&jn(s,r,1,-1)}function hm(r){var s=Zn();return typeof r=="function"&&(r=r()),s.memoizedState=s.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ra,lastRenderedState:r},s.queue=r,r=r.dispatch=SE.bind(null,nt,r),[s.memoizedState,r]}function Aa(r,s,a,c){return r={tag:r,create:s,destroy:a,deps:c,next:null},s=nt.updateQueue,s===null?(s={lastEffect:null,stores:null},nt.updateQueue=s,s.lastEffect=r.next=r):(a=s.lastEffect,a===null?s.lastEffect=r.next=r:(c=a.next,a.next=r,r.next=c,s.lastEffect=r)),r}function dm(){return wn().memoizedState}function lu(r,s,a,c){var d=Zn();nt.flags|=r,d.memoizedState=Aa(1|s,a,void 0,c===void 0?null:c)}function uu(r,s,a,c){var d=wn();c=c===void 0?null:c;var g=void 0;if(yt!==null){var v=yt.memoizedState;if(g=v.destroy,c!==null&&Nh(c,v.deps)){d.memoizedState=Aa(s,a,g,c);return}}nt.flags|=r,d.memoizedState=Aa(1|s,a,g,c)}function fm(r,s){return lu(8390656,8,r,s)}function Vh(r,s){return uu(2048,8,r,s)}function pm(r,s){return uu(4,2,r,s)}function mm(r,s){return uu(4,4,r,s)}function gm(r,s){if(typeof s=="function")return r=r(),s(r),function(){s(null)};if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function ym(r,s,a){return a=a!=null?a.concat([r]):null,uu(4,4,gm.bind(null,s,r),a)}function bh(){}function _m(r,s){var a=wn();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&Nh(s,c[1])?c[0]:(a.memoizedState=[r,s],r)}function vm(r,s){var a=wn();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&Nh(s,c[1])?c[0]:(r=r(),a.memoizedState=[r,s],r)}function Em(r,s,a){return es&21?(Vn(a,s)||(a=$i(),nt.lanes|=a,ts|=a,r.baseState=!0),s):(r.baseState&&(r.baseState=!1,Zt=!0),r.memoizedState=a)}function TE(r,s){var a=Oe;Oe=a!==0&&4>a?a:4,r(!0);var c=kh.transition;kh.transition={};try{r(!1),s()}finally{Oe=a,kh.transition=c}}function wm(){return wn().memoizedState}function IE(r,s,a){var c=oi(r);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Tm(r))Im(s,a);else if(a=Zp(r,s,a,c),a!==null){var d=Kt();jn(a,r,c,d),Sm(a,s,c)}}function SE(r,s,a){var c=oi(r),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Tm(r))Im(s,d);else{var g=r.alternate;if(r.lanes===0&&(g===null||g.lanes===0)&&(g=s.lastRenderedReducer,g!==null))try{var v=s.lastRenderedState,S=g(v,a);if(d.hasEagerState=!0,d.eagerState=S,Vn(S,v)){var P=s.interleaved;P===null?(d.next=d,Ih(s)):(d.next=P.next,P.next=d),s.interleaved=d;return}}catch{}finally{}a=Zp(r,s,d,c),a!==null&&(d=Kt(),jn(a,r,c,d),Sm(a,s,c))}}function Tm(r){var s=r.alternate;return r===nt||s!==null&&s===nt}function Im(r,s){Ia=au=!0;var a=r.pending;a===null?s.next=s:(s.next=a.next,a.next=s),r.pending=s}function Sm(r,s,a){if(a&4194240){var c=s.lanes;c&=r.pendingLanes,a|=c,s.lanes=a,Wr(r,a)}}var cu={readContext:En,useCallback:Mt,useContext:Mt,useEffect:Mt,useImperativeHandle:Mt,useInsertionEffect:Mt,useLayoutEffect:Mt,useMemo:Mt,useReducer:Mt,useRef:Mt,useState:Mt,useDebugValue:Mt,useDeferredValue:Mt,useTransition:Mt,useMutableSource:Mt,useSyncExternalStore:Mt,useId:Mt,unstable_isNewReconciler:!1},RE={readContext:En,useCallback:function(r,s){return Zn().memoizedState=[r,s===void 0?null:s],r},useContext:En,useEffect:fm,useImperativeHandle:function(r,s,a){return a=a!=null?a.concat([r]):null,lu(4194308,4,gm.bind(null,s,r),a)},useLayoutEffect:function(r,s){return lu(4194308,4,r,s)},useInsertionEffect:function(r,s){return lu(4,2,r,s)},useMemo:function(r,s){var a=Zn();return s=s===void 0?null:s,r=r(),a.memoizedState=[r,s],r},useReducer:function(r,s,a){var c=Zn();return s=a!==void 0?a(s):s,c.memoizedState=c.baseState=s,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:s},c.queue=r,r=r.dispatch=IE.bind(null,nt,r),[c.memoizedState,r]},useRef:function(r){var s=Zn();return r={current:r},s.memoizedState=r},useState:hm,useDebugValue:bh,useDeferredValue:function(r){return Zn().memoizedState=r},useTransition:function(){var r=hm(!1),s=r[0];return r=TE.bind(null,r[1]),Zn().memoizedState=r,[s,r]},useMutableSource:function(){},useSyncExternalStore:function(r,s,a){var c=nt,d=Zn();if(Ye){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),Rt===null)throw Error(t(349));es&30||om(c,s,a)}d.memoizedState=a;var g={value:a,getSnapshot:s};return d.queue=g,fm(lm.bind(null,c,g,r),[r]),c.flags|=2048,Aa(9,am.bind(null,c,g,a,s),void 0,null),a},useId:function(){var r=Zn(),s=Rt.identifierPrefix;if(Ye){var a=Rr,c=Sr;a=(c&~(1<<32-Ht(c)-1)).toString(32)+a,s=":"+s+"R"+a,a=Sa++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=wE++,s=":"+s+"r"+a.toString(32)+":";return r.memoizedState=s},unstable_isNewReconciler:!1},AE={readContext:En,useCallback:_m,useContext:En,useEffect:Vh,useImperativeHandle:ym,useInsertionEffect:pm,useLayoutEffect:mm,useMemo:vm,useReducer:Oh,useRef:dm,useState:function(){return Oh(Ra)},useDebugValue:bh,useDeferredValue:function(r){var s=wn();return Em(s,yt.memoizedState,r)},useTransition:function(){var r=Oh(Ra)[0],s=wn().memoizedState;return[r,s]},useMutableSource:im,useSyncExternalStore:sm,useId:wm,unstable_isNewReconciler:!1},CE={readContext:En,useCallback:_m,useContext:En,useEffect:Vh,useImperativeHandle:ym,useInsertionEffect:pm,useLayoutEffect:mm,useMemo:vm,useReducer:Lh,useRef:dm,useState:function(){return Lh(Ra)},useDebugValue:bh,useDeferredValue:function(r){var s=wn();return yt===null?s.memoizedState=r:Em(s,yt.memoizedState,r)},useTransition:function(){var r=Lh(Ra)[0],s=wn().memoizedState;return[r,s]},useMutableSource:im,useSyncExternalStore:sm,useId:wm,unstable_isNewReconciler:!1};function Mn(r,s){if(r&&r.defaultProps){s=re({},s),r=r.defaultProps;for(var a in r)s[a]===void 0&&(s[a]=r[a]);return s}return s}function Mh(r,s,a,c){s=r.memoizedState,a=a(c,s),a=a==null?s:re({},s,a),r.memoizedState=a,r.lanes===0&&(r.updateQueue.baseState=a)}var hu={isMounted:function(r){return(r=r._reactInternals)?Pn(r)===r:!1},enqueueSetState:function(r,s,a){r=r._reactInternals;var c=Kt(),d=oi(r),g=Cr(c,d);g.payload=s,a!=null&&(g.callback=a),s=ni(r,g,d),s!==null&&(jn(s,r,d,c),ru(s,r,d))},enqueueReplaceState:function(r,s,a){r=r._reactInternals;var c=Kt(),d=oi(r),g=Cr(c,d);g.tag=1,g.payload=s,a!=null&&(g.callback=a),s=ni(r,g,d),s!==null&&(jn(s,r,d,c),ru(s,r,d))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var a=Kt(),c=oi(r),d=Cr(a,c);d.tag=2,s!=null&&(d.callback=s),s=ni(r,d,c),s!==null&&(jn(s,r,c,a),ru(s,r,c))}};function Rm(r,s,a,c,d,g,v){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(c,g,v):s.prototype&&s.prototype.isPureReactComponent?!da(a,c)||!da(d,g):!0}function Am(r,s,a){var c=!1,d=Zr,g=s.contextType;return typeof g=="object"&&g!==null?g=En(g):(d=Jt(s)?Qi:bt.current,c=s.contextTypes,g=(c=c!=null)?Js(r,d):Zr),s=new s(a,g),r.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=hu,r.stateNode=s,s._reactInternals=r,c&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=d,r.__reactInternalMemoizedMaskedChildContext=g),s}function Cm(r,s,a,c){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,c),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,c),s.state!==r&&hu.enqueueReplaceState(s,s.state,null)}function Uh(r,s,a,c){var d=r.stateNode;d.props=a,d.state=r.memoizedState,d.refs={},Sh(r);var g=s.contextType;typeof g=="object"&&g!==null?d.context=En(g):(g=Jt(s)?Qi:bt.current,d.context=Js(r,g)),d.state=r.memoizedState,g=s.getDerivedStateFromProps,typeof g=="function"&&(Mh(r,s,g,a),d.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(s=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),s!==d.state&&hu.enqueueReplaceState(d,d.state,null),iu(r,a,d,c),d.state=r.memoizedState),typeof d.componentDidMount=="function"&&(r.flags|=4194308)}function oo(r,s){try{var a="",c=s;do a+=Pe(c),c=c.return;while(c);var d=a}catch(g){d=`
Error generating stack: `+g.message+`
`+g.stack}return{value:r,source:s,stack:d,digest:null}}function Fh(r,s,a){return{value:r,source:null,stack:a??null,digest:s??null}}function jh(r,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var PE=typeof WeakMap=="function"?WeakMap:Map;function Pm(r,s,a){a=Cr(-1,a),a.tag=3,a.payload={element:null};var c=s.value;return a.callback=function(){_u||(_u=!0,td=c),jh(r,s)},a}function km(r,s,a){a=Cr(-1,a),a.tag=3;var c=r.type.getDerivedStateFromError;if(typeof c=="function"){var d=s.value;a.payload=function(){return c(d)},a.callback=function(){jh(r,s)}}var g=r.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){jh(r,s),typeof c!="function"&&(ii===null?ii=new Set([this]):ii.add(this));var v=s.stack;this.componentDidCatch(s.value,{componentStack:v!==null?v:""})}),a}function Nm(r,s,a){var c=r.pingCache;if(c===null){c=r.pingCache=new PE;var d=new Set;c.set(s,d)}else d=c.get(s),d===void 0&&(d=new Set,c.set(s,d));d.has(a)||(d.add(a),r=zE.bind(null,r,s,a),s.then(r,r))}function xm(r){do{var s;if((s=r.tag===13)&&(s=r.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return r;r=r.return}while(r!==null);return null}function Dm(r,s,a,c,d){return r.mode&1?(r.flags|=65536,r.lanes=d,r):(r===s?r.flags|=65536:(r.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=Cr(-1,1),s.tag=2,ni(a,s,1))),a.lanes|=1),r)}var kE=se.ReactCurrentOwner,Zt=!1;function qt(r,s,a,c){s.child=r===null?Jp(s,null,a,c):no(s,r.child,a,c)}function Om(r,s,a,c,d){a=a.render;var g=s.ref;return io(s,d),c=xh(r,s,a,c,g,d),a=Dh(),r!==null&&!Zt?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~d,Pr(r,s,d)):(Ye&&a&&ph(s),s.flags|=1,qt(r,s,c,d),s.child)}function Lm(r,s,a,c,d){if(r===null){var g=a.type;return typeof g=="function"&&!ld(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=g,Vm(r,s,g,c,d)):(r=Su(a.type,null,c,s,s.mode,d),r.ref=s.ref,r.return=s,s.child=r)}if(g=r.child,!(r.lanes&d)){var v=g.memoizedProps;if(a=a.compare,a=a!==null?a:da,a(v,c)&&r.ref===s.ref)return Pr(r,s,d)}return s.flags|=1,r=li(g,c),r.ref=s.ref,r.return=s,s.child=r}function Vm(r,s,a,c,d){if(r!==null){var g=r.memoizedProps;if(da(g,c)&&r.ref===s.ref)if(Zt=!1,s.pendingProps=c=g,(r.lanes&d)!==0)r.flags&131072&&(Zt=!0);else return s.lanes=r.lanes,Pr(r,s,d)}return Bh(r,s,a,c,d)}function bm(r,s,a){var c=s.pendingProps,d=c.children,g=r!==null?r.memoizedState:null;if(c.mode==="hidden")if(!(s.mode&1))s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ke(lo,hn),hn|=a;else{if(!(a&1073741824))return r=g!==null?g.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:r,cachePool:null,transitions:null},s.updateQueue=null,Ke(lo,hn),hn|=r,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=g!==null?g.baseLanes:a,Ke(lo,hn),hn|=c}else g!==null?(c=g.baseLanes|a,s.memoizedState=null):c=a,Ke(lo,hn),hn|=c;return qt(r,s,d,a),s.child}function Mm(r,s){var a=s.ref;(r===null&&a!==null||r!==null&&r.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function Bh(r,s,a,c,d){var g=Jt(a)?Qi:bt.current;return g=Js(s,g),io(s,d),a=xh(r,s,a,c,g,d),c=Dh(),r!==null&&!Zt?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~d,Pr(r,s,d)):(Ye&&c&&ph(s),s.flags|=1,qt(r,s,a,d),s.child)}function Um(r,s,a,c,d){if(Jt(a)){var g=!0;Ql(s)}else g=!1;if(io(s,d),s.stateNode===null)fu(r,s),Am(s,a,c),Uh(s,a,c,d),c=!0;else if(r===null){var v=s.stateNode,S=s.memoizedProps;v.props=S;var P=v.context,B=a.contextType;typeof B=="object"&&B!==null?B=En(B):(B=Jt(a)?Qi:bt.current,B=Js(s,B));var Q=a.getDerivedStateFromProps,Y=typeof Q=="function"||typeof v.getSnapshotBeforeUpdate=="function";Y||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(S!==c||P!==B)&&Cm(s,v,c,B),ti=!1;var G=s.memoizedState;v.state=G,iu(s,c,v,d),P=s.memoizedState,S!==c||G!==P||Yt.current||ti?(typeof Q=="function"&&(Mh(s,a,Q,c),P=s.memoizedState),(S=ti||Rm(s,a,S,c,G,P,B))?(Y||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(s.flags|=4194308)):(typeof v.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=c,s.memoizedState=P),v.props=c,v.state=P,v.context=B,c=S):(typeof v.componentDidMount=="function"&&(s.flags|=4194308),c=!1)}else{v=s.stateNode,em(r,s),S=s.memoizedProps,B=s.type===s.elementType?S:Mn(s.type,S),v.props=B,Y=s.pendingProps,G=v.context,P=a.contextType,typeof P=="object"&&P!==null?P=En(P):(P=Jt(a)?Qi:bt.current,P=Js(s,P));var oe=a.getDerivedStateFromProps;(Q=typeof oe=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(S!==Y||G!==P)&&Cm(s,v,c,P),ti=!1,G=s.memoizedState,v.state=G,iu(s,c,v,d);var ce=s.memoizedState;S!==Y||G!==ce||Yt.current||ti?(typeof oe=="function"&&(Mh(s,a,oe,c),ce=s.memoizedState),(B=ti||Rm(s,a,B,c,G,ce,P)||!1)?(Q||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,ce,P),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,ce,P)),typeof v.componentDidUpdate=="function"&&(s.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof v.componentDidUpdate!="function"||S===r.memoizedProps&&G===r.memoizedState||(s.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||S===r.memoizedProps&&G===r.memoizedState||(s.flags|=1024),s.memoizedProps=c,s.memoizedState=ce),v.props=c,v.state=ce,v.context=P,c=B):(typeof v.componentDidUpdate!="function"||S===r.memoizedProps&&G===r.memoizedState||(s.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||S===r.memoizedProps&&G===r.memoizedState||(s.flags|=1024),c=!1)}return zh(r,s,a,c,g,d)}function zh(r,s,a,c,d,g){Mm(r,s);var v=(s.flags&128)!==0;if(!c&&!v)return d&&$p(s,a,!1),Pr(r,s,g);c=s.stateNode,kE.current=s;var S=v&&typeof a.getDerivedStateFromError!="function"?null:c.render();return s.flags|=1,r!==null&&v?(s.child=no(s,r.child,null,g),s.child=no(s,null,S,g)):qt(r,s,S,g),s.memoizedState=c.state,d&&$p(s,a,!0),s.child}function Fm(r){var s=r.stateNode;s.pendingContext?Bp(r,s.pendingContext,s.pendingContext!==s.context):s.context&&Bp(r,s.context,!1),Rh(r,s.containerInfo)}function jm(r,s,a,c,d){return to(),_h(d),s.flags|=256,qt(r,s,a,c),s.child}var $h={dehydrated:null,treeContext:null,retryLane:0};function Hh(r){return{baseLanes:r,cachePool:null,transitions:null}}function Bm(r,s,a){var c=s.pendingProps,d=tt.current,g=!1,v=(s.flags&128)!==0,S;if((S=v)||(S=r!==null&&r.memoizedState===null?!1:(d&2)!==0),S?(g=!0,s.flags&=-129):(r===null||r.memoizedState!==null)&&(d|=1),Ke(tt,d&1),r===null)return yh(s),r=s.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?(s.mode&1?r.data==="$!"?s.lanes=8:s.lanes=1073741824:s.lanes=1,null):(v=c.children,r=c.fallback,g?(c=s.mode,g=s.child,v={mode:"hidden",children:v},!(c&1)&&g!==null?(g.childLanes=0,g.pendingProps=v):g=Ru(v,c,0,null),r=ss(r,c,a,null),g.return=s,r.return=s,g.sibling=r,s.child=g,s.child.memoizedState=Hh(a),s.memoizedState=$h,r):Wh(s,v));if(d=r.memoizedState,d!==null&&(S=d.dehydrated,S!==null))return NE(r,s,v,c,S,d,a);if(g){g=c.fallback,v=s.mode,d=r.child,S=d.sibling;var P={mode:"hidden",children:c.children};return!(v&1)&&s.child!==d?(c=s.child,c.childLanes=0,c.pendingProps=P,s.deletions=null):(c=li(d,P),c.subtreeFlags=d.subtreeFlags&14680064),S!==null?g=li(S,g):(g=ss(g,v,a,null),g.flags|=2),g.return=s,c.return=s,c.sibling=g,s.child=c,c=g,g=s.child,v=r.child.memoizedState,v=v===null?Hh(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},g.memoizedState=v,g.childLanes=r.childLanes&~a,s.memoizedState=$h,c}return g=r.child,r=g.sibling,c=li(g,{mode:"visible",children:c.children}),!(s.mode&1)&&(c.lanes=a),c.return=s,c.sibling=null,r!==null&&(a=s.deletions,a===null?(s.deletions=[r],s.flags|=16):a.push(r)),s.child=c,s.memoizedState=null,c}function Wh(r,s){return s=Ru({mode:"visible",children:s},r.mode,0,null),s.return=r,r.child=s}function du(r,s,a,c){return c!==null&&_h(c),no(s,r.child,null,a),r=Wh(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function NE(r,s,a,c,d,g,v){if(a)return s.flags&256?(s.flags&=-257,c=Fh(Error(t(422))),du(r,s,v,c)):s.memoizedState!==null?(s.child=r.child,s.flags|=128,null):(g=c.fallback,d=s.mode,c=Ru({mode:"visible",children:c.children},d,0,null),g=ss(g,d,v,null),g.flags|=2,c.return=s,g.return=s,c.sibling=g,s.child=c,s.mode&1&&no(s,r.child,null,v),s.child.memoizedState=Hh(v),s.memoizedState=$h,g);if(!(s.mode&1))return du(r,s,v,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var S=c.dgst;return c=S,g=Error(t(419)),c=Fh(g,c,void 0),du(r,s,v,c)}if(S=(v&r.childLanes)!==0,Zt||S){if(c=Rt,c!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=d&(c.suspendedLanes|v)?0:d,d!==0&&d!==g.retryLane&&(g.retryLane=d,Ar(r,d),jn(c,r,d,-1))}return ad(),c=Fh(Error(t(421))),du(r,s,v,c)}return d.data==="$?"?(s.flags|=128,s.child=r.child,s=$E.bind(null,r),d._reactRetry=s,null):(r=g.treeContext,cn=Yr(d.nextSibling),un=s,Ye=!0,bn=null,r!==null&&(_n[vn++]=Sr,_n[vn++]=Rr,_n[vn++]=Xi,Sr=r.id,Rr=r.overflow,Xi=s),s=Wh(s,c.children),s.flags|=4096,s)}function zm(r,s,a){r.lanes|=s;var c=r.alternate;c!==null&&(c.lanes|=s),Th(r.return,s,a)}function qh(r,s,a,c,d){var g=r.memoizedState;g===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(g.isBackwards=s,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=a,g.tailMode=d)}function $m(r,s,a){var c=s.pendingProps,d=c.revealOrder,g=c.tail;if(qt(r,s,c.children,a),c=tt.current,c&2)c=c&1|2,s.flags|=128;else{if(r!==null&&r.flags&128)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&zm(r,a,s);else if(r.tag===19)zm(r,a,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}c&=1}if(Ke(tt,c),!(s.mode&1))s.memoizedState=null;else switch(d){case"forwards":for(a=s.child,d=null;a!==null;)r=a.alternate,r!==null&&su(r)===null&&(d=a),a=a.sibling;a=d,a===null?(d=s.child,s.child=null):(d=a.sibling,a.sibling=null),qh(s,!1,d,a,g);break;case"backwards":for(a=null,d=s.child,s.child=null;d!==null;){if(r=d.alternate,r!==null&&su(r)===null){s.child=d;break}r=d.sibling,d.sibling=a,a=d,d=r}qh(s,!0,a,null,g);break;case"together":qh(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function fu(r,s){!(s.mode&1)&&r!==null&&(r.alternate=null,s.alternate=null,s.flags|=2)}function Pr(r,s,a){if(r!==null&&(s.dependencies=r.dependencies),ts|=s.lanes,!(a&s.childLanes))return null;if(r!==null&&s.child!==r.child)throw Error(t(153));if(s.child!==null){for(r=s.child,a=li(r,r.pendingProps),s.child=a,a.return=s;r.sibling!==null;)r=r.sibling,a=a.sibling=li(r,r.pendingProps),a.return=s;a.sibling=null}return s.child}function xE(r,s,a){switch(s.tag){case 3:Fm(s),to();break;case 5:rm(s);break;case 1:Jt(s.type)&&Ql(s);break;case 4:Rh(s,s.stateNode.containerInfo);break;case 10:var c=s.type._context,d=s.memoizedProps.value;Ke(tu,c._currentValue),c._currentValue=d;break;case 13:if(c=s.memoizedState,c!==null)return c.dehydrated!==null?(Ke(tt,tt.current&1),s.flags|=128,null):a&s.child.childLanes?Bm(r,s,a):(Ke(tt,tt.current&1),r=Pr(r,s,a),r!==null?r.sibling:null);Ke(tt,tt.current&1);break;case 19:if(c=(a&s.childLanes)!==0,r.flags&128){if(c)return $m(r,s,a);s.flags|=128}if(d=s.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Ke(tt,tt.current),c)break;return null;case 22:case 23:return s.lanes=0,bm(r,s,a)}return Pr(r,s,a)}var Hm,Kh,Wm,qm;Hm=function(r,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)r.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Kh=function(){},Wm=function(r,s,a,c){var d=r.memoizedProps;if(d!==c){r=s.stateNode,Zi(Jn.current);var g=null;switch(a){case"input":d=Di(r,d),c=Di(r,c),g=[];break;case"select":d=re({},d,{value:void 0}),c=re({},c,{value:void 0}),g=[];break;case"textarea":d=Bo(r,d),c=Bo(r,c),g=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(r.onclick=ql)}Ko(a,c);var v;a=null;for(B in d)if(!c.hasOwnProperty(B)&&d.hasOwnProperty(B)&&d[B]!=null)if(B==="style"){var S=d[B];for(v in S)S.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else B!=="dangerouslySetInnerHTML"&&B!=="children"&&B!=="suppressContentEditableWarning"&&B!=="suppressHydrationWarning"&&B!=="autoFocus"&&(o.hasOwnProperty(B)?g||(g=[]):(g=g||[]).push(B,null));for(B in c){var P=c[B];if(S=d!=null?d[B]:void 0,c.hasOwnProperty(B)&&P!==S&&(P!=null||S!=null))if(B==="style")if(S){for(v in S)!S.hasOwnProperty(v)||P&&P.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in P)P.hasOwnProperty(v)&&S[v]!==P[v]&&(a||(a={}),a[v]=P[v])}else a||(g||(g=[]),g.push(B,a)),a=P;else B==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,S=S?S.__html:void 0,P!=null&&S!==P&&(g=g||[]).push(B,P)):B==="children"?typeof P!="string"&&typeof P!="number"||(g=g||[]).push(B,""+P):B!=="suppressContentEditableWarning"&&B!=="suppressHydrationWarning"&&(o.hasOwnProperty(B)?(P!=null&&B==="onScroll"&&Ge("scroll",r),g||S===P||(g=[])):(g=g||[]).push(B,P))}a&&(g=g||[]).push("style",a);var B=g;(s.updateQueue=B)&&(s.flags|=4)}},qm=function(r,s,a,c){a!==c&&(s.flags|=4)};function Ca(r,s){if(!Ye)switch(r.tailMode){case"hidden":s=r.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?r.tail=null:a.sibling=null;break;case"collapsed":a=r.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:c.sibling=null}}function Ut(r){var s=r.alternate!==null&&r.alternate.child===r.child,a=0,c=0;if(s)for(var d=r.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=r,d=d.sibling;else for(d=r.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=r,d=d.sibling;return r.subtreeFlags|=c,r.childLanes=a,s}function DE(r,s,a){var c=s.pendingProps;switch(mh(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ut(s),null;case 1:return Jt(s.type)&&Gl(),Ut(s),null;case 3:return c=s.stateNode,so(),Qe(Yt),Qe(bt),Ph(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(r===null||r.child===null)&&(Zl(s)?s.flags|=4:r===null||r.memoizedState.isDehydrated&&!(s.flags&256)||(s.flags|=1024,bn!==null&&(id(bn),bn=null))),Kh(r,s),Ut(s),null;case 5:Ah(s);var d=Zi(Ta.current);if(a=s.type,r!==null&&s.stateNode!=null)Wm(r,s,a,c,d),r.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!c){if(s.stateNode===null)throw Error(t(166));return Ut(s),null}if(r=Zi(Jn.current),Zl(s)){c=s.stateNode,a=s.type;var g=s.memoizedProps;switch(c[Yn]=s,c[ya]=g,r=(s.mode&1)!==0,a){case"dialog":Ge("cancel",c),Ge("close",c);break;case"iframe":case"object":case"embed":Ge("load",c);break;case"video":case"audio":for(d=0;d<pa.length;d++)Ge(pa[d],c);break;case"source":Ge("error",c);break;case"img":case"image":case"link":Ge("error",c),Ge("load",c);break;case"details":Ge("toggle",c);break;case"input":Es(c,g),Ge("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!g.multiple},Ge("invalid",c);break;case"textarea":Ts(c,g),Ge("invalid",c)}Ko(a,g),d=null;for(var v in g)if(g.hasOwnProperty(v)){var S=g[v];v==="children"?typeof S=="string"?c.textContent!==S&&(g.suppressHydrationWarning!==!0&&Wl(c.textContent,S,r),d=["children",S]):typeof S=="number"&&c.textContent!==""+S&&(g.suppressHydrationWarning!==!0&&Wl(c.textContent,S,r),d=["children",""+S]):o.hasOwnProperty(v)&&S!=null&&v==="onScroll"&&Ge("scroll",c)}switch(a){case"input":fn(c),yl(c,g,!0);break;case"textarea":fn(c),zo(c);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(c.onclick=ql)}c=d,s.updateQueue=c,c!==null&&(s.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=pt(a)),r==="http://www.w3.org/1999/xhtml"?a==="script"?(r=v.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof c.is=="string"?r=v.createElement(a,{is:c.is}):(r=v.createElement(a),a==="select"&&(v=r,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):r=v.createElementNS(r,a),r[Yn]=s,r[ya]=c,Hm(r,s,!1,!1),s.stateNode=r;e:{switch(v=Go(a,c),a){case"dialog":Ge("cancel",r),Ge("close",r),d=c;break;case"iframe":case"object":case"embed":Ge("load",r),d=c;break;case"video":case"audio":for(d=0;d<pa.length;d++)Ge(pa[d],r);d=c;break;case"source":Ge("error",r),d=c;break;case"img":case"image":case"link":Ge("error",r),Ge("load",r),d=c;break;case"details":Ge("toggle",r),d=c;break;case"input":Es(r,c),d=Di(r,c),Ge("invalid",r);break;case"option":d=c;break;case"select":r._wrapperState={wasMultiple:!!c.multiple},d=re({},c,{value:void 0}),Ge("invalid",r);break;case"textarea":Ts(r,c),d=Bo(r,c),Ge("invalid",r);break;default:d=c}Ko(a,d),S=d;for(g in S)if(S.hasOwnProperty(g)){var P=S[g];g==="style"?Wo(r,P):g==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,P!=null&&$o(r,P)):g==="children"?typeof P=="string"?(a!=="textarea"||P!=="")&&jr(r,P):typeof P=="number"&&jr(r,""+P):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?P!=null&&g==="onScroll"&&Ge("scroll",r):P!=null&&ne(r,g,P,v))}switch(a){case"input":fn(r),yl(r,c,!1);break;case"textarea":fn(r),zo(r);break;case"option":c.value!=null&&r.setAttribute("value",""+Ue(c.value));break;case"select":r.multiple=!!c.multiple,g=c.value,g!=null?pr(r,!!c.multiple,g,!1):c.defaultValue!=null&&pr(r,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(r.onclick=ql)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Ut(s),null;case 6:if(r&&s.stateNode!=null)qm(r,s,r.memoizedProps,c);else{if(typeof c!="string"&&s.stateNode===null)throw Error(t(166));if(a=Zi(Ta.current),Zi(Jn.current),Zl(s)){if(c=s.stateNode,a=s.memoizedProps,c[Yn]=s,(g=c.nodeValue!==a)&&(r=un,r!==null))switch(r.tag){case 3:Wl(c.nodeValue,a,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&Wl(c.nodeValue,a,(r.mode&1)!==0)}g&&(s.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Yn]=s,s.stateNode=c}return Ut(s),null;case 13:if(Qe(tt),c=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(Ye&&cn!==null&&s.mode&1&&!(s.flags&128))Qp(),to(),s.flags|=98560,g=!1;else if(g=Zl(s),c!==null&&c.dehydrated!==null){if(r===null){if(!g)throw Error(t(318));if(g=s.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[Yn]=s}else to(),!(s.flags&128)&&(s.memoizedState=null),s.flags|=4;Ut(s),g=!1}else bn!==null&&(id(bn),bn=null),g=!0;if(!g)return s.flags&65536?s:null}return s.flags&128?(s.lanes=a,s):(c=c!==null,c!==(r!==null&&r.memoizedState!==null)&&c&&(s.child.flags|=8192,s.mode&1&&(r===null||tt.current&1?_t===0&&(_t=3):ad())),s.updateQueue!==null&&(s.flags|=4),Ut(s),null);case 4:return so(),Kh(r,s),r===null&&ma(s.stateNode.containerInfo),Ut(s),null;case 10:return wh(s.type._context),Ut(s),null;case 17:return Jt(s.type)&&Gl(),Ut(s),null;case 19:if(Qe(tt),g=s.memoizedState,g===null)return Ut(s),null;if(c=(s.flags&128)!==0,v=g.rendering,v===null)if(c)Ca(g,!1);else{if(_t!==0||r!==null&&r.flags&128)for(r=s.child;r!==null;){if(v=su(r),v!==null){for(s.flags|=128,Ca(g,!1),c=v.updateQueue,c!==null&&(s.updateQueue=c,s.flags|=4),s.subtreeFlags=0,c=a,a=s.child;a!==null;)g=a,r=c,g.flags&=14680066,v=g.alternate,v===null?(g.childLanes=0,g.lanes=r,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=v.childLanes,g.lanes=v.lanes,g.child=v.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=v.memoizedProps,g.memoizedState=v.memoizedState,g.updateQueue=v.updateQueue,g.type=v.type,r=v.dependencies,g.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),a=a.sibling;return Ke(tt,tt.current&1|2),s.child}r=r.sibling}g.tail!==null&&qe()>uo&&(s.flags|=128,c=!0,Ca(g,!1),s.lanes=4194304)}else{if(!c)if(r=su(v),r!==null){if(s.flags|=128,c=!0,a=r.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),Ca(g,!0),g.tail===null&&g.tailMode==="hidden"&&!v.alternate&&!Ye)return Ut(s),null}else 2*qe()-g.renderingStartTime>uo&&a!==1073741824&&(s.flags|=128,c=!0,Ca(g,!1),s.lanes=4194304);g.isBackwards?(v.sibling=s.child,s.child=v):(a=g.last,a!==null?a.sibling=v:s.child=v,g.last=v)}return g.tail!==null?(s=g.tail,g.rendering=s,g.tail=s.sibling,g.renderingStartTime=qe(),s.sibling=null,a=tt.current,Ke(tt,c?a&1|2:a&1),s):(Ut(s),null);case 22:case 23:return od(),c=s.memoizedState!==null,r!==null&&r.memoizedState!==null!==c&&(s.flags|=8192),c&&s.mode&1?hn&1073741824&&(Ut(s),s.subtreeFlags&6&&(s.flags|=8192)):Ut(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function OE(r,s){switch(mh(s),s.tag){case 1:return Jt(s.type)&&Gl(),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return so(),Qe(Yt),Qe(bt),Ph(),r=s.flags,r&65536&&!(r&128)?(s.flags=r&-65537|128,s):null;case 5:return Ah(s),null;case 13:if(Qe(tt),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(t(340));to()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return Qe(tt),null;case 4:return so(),null;case 10:return wh(s.type._context),null;case 22:case 23:return od(),null;case 24:return null;default:return null}}var pu=!1,Ft=!1,LE=typeof WeakSet=="function"?WeakSet:Set,ue=null;function ao(r,s){var a=r.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){st(r,s,c)}else a.current=null}function Gh(r,s,a){try{a()}catch(c){st(r,s,c)}}var Km=!1;function VE(r,s){if(oh=Gr,r=Rp(),Jc(r)){if("selectionStart"in r)var a={start:r.selectionStart,end:r.selectionEnd};else e:{a=(a=r.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var v=0,S=-1,P=-1,B=0,Q=0,Y=r,G=null;t:for(;;){for(var oe;Y!==a||d!==0&&Y.nodeType!==3||(S=v+d),Y!==g||c!==0&&Y.nodeType!==3||(P=v+c),Y.nodeType===3&&(v+=Y.nodeValue.length),(oe=Y.firstChild)!==null;)G=Y,Y=oe;for(;;){if(Y===r)break t;if(G===a&&++B===d&&(S=v),G===g&&++Q===c&&(P=v),(oe=Y.nextSibling)!==null)break;Y=G,G=Y.parentNode}Y=oe}a=S===-1||P===-1?null:{start:S,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(ah={focusedElem:r,selectionRange:a},Gr=!1,ue=s;ue!==null;)if(s=ue,r=s.child,(s.subtreeFlags&1028)!==0&&r!==null)r.return=s,ue=r;else for(;ue!==null;){s=ue;try{var ce=s.alternate;if(s.flags&1024)switch(s.tag){case 0:case 11:case 15:break;case 1:if(ce!==null){var he=ce.memoizedProps,ut=ce.memoizedState,F=s.stateNode,x=F.getSnapshotBeforeUpdate(s.elementType===s.type?he:Mn(s.type,he),ut);F.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var j=s.stateNode.containerInfo;j.nodeType===1?j.textContent="":j.nodeType===9&&j.documentElement&&j.removeChild(j.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Z){st(s,s.return,Z)}if(r=s.sibling,r!==null){r.return=s.return,ue=r;break}ue=s.return}return ce=Km,Km=!1,ce}function Pa(r,s,a){var c=s.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&r)===r){var g=d.destroy;d.destroy=void 0,g!==void 0&&Gh(s,a,g)}d=d.next}while(d!==c)}}function mu(r,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&r)===r){var c=a.create;a.destroy=c()}a=a.next}while(a!==s)}}function Qh(r){var s=r.ref;if(s!==null){var a=r.stateNode;switch(r.tag){case 5:r=a;break;default:r=a}typeof s=="function"?s(r):s.current=r}}function Gm(r){var s=r.alternate;s!==null&&(r.alternate=null,Gm(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&(delete s[Yn],delete s[ya],delete s[hh],delete s[yE],delete s[_E])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function Qm(r){return r.tag===5||r.tag===3||r.tag===4}function Xm(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||Qm(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function Xh(r,s,a){var c=r.tag;if(c===5||c===6)r=r.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(r,s):a.insertBefore(r,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(r,a)):(s=a,s.appendChild(r)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=ql));else if(c!==4&&(r=r.child,r!==null))for(Xh(r,s,a),r=r.sibling;r!==null;)Xh(r,s,a),r=r.sibling}function Yh(r,s,a){var c=r.tag;if(c===5||c===6)r=r.stateNode,s?a.insertBefore(r,s):a.appendChild(r);else if(c!==4&&(r=r.child,r!==null))for(Yh(r,s,a),r=r.sibling;r!==null;)Yh(r,s,a),r=r.sibling}var xt=null,Un=!1;function ri(r,s,a){for(a=a.child;a!==null;)Ym(r,s,a),a=a.sibling}function Ym(r,s,a){if(sn&&typeof sn.onCommitFiberUnmount=="function")try{sn.onCommitFiberUnmount(Bi,a)}catch{}switch(a.tag){case 5:Ft||ao(a,s);case 6:var c=xt,d=Un;xt=null,ri(r,s,a),xt=c,Un=d,xt!==null&&(Un?(r=xt,a=a.stateNode,r.nodeType===8?r.parentNode.removeChild(a):r.removeChild(a)):xt.removeChild(a.stateNode));break;case 18:xt!==null&&(Un?(r=xt,a=a.stateNode,r.nodeType===8?ch(r.parentNode,a):r.nodeType===1&&ch(r,a),On(r)):ch(xt,a.stateNode));break;case 4:c=xt,d=Un,xt=a.stateNode.containerInfo,Un=!0,ri(r,s,a),xt=c,Un=d;break;case 0:case 11:case 14:case 15:if(!Ft&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var g=d,v=g.destroy;g=g.tag,v!==void 0&&(g&2||g&4)&&Gh(a,s,v),d=d.next}while(d!==c)}ri(r,s,a);break;case 1:if(!Ft&&(ao(a,s),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(S){st(a,s,S)}ri(r,s,a);break;case 21:ri(r,s,a);break;case 22:a.mode&1?(Ft=(c=Ft)||a.memoizedState!==null,ri(r,s,a),Ft=c):ri(r,s,a);break;default:ri(r,s,a)}}function Jm(r){var s=r.updateQueue;if(s!==null){r.updateQueue=null;var a=r.stateNode;a===null&&(a=r.stateNode=new LE),s.forEach(function(c){var d=HE.bind(null,r,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Fn(r,s){var a=s.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var g=r,v=s,S=v;e:for(;S!==null;){switch(S.tag){case 5:xt=S.stateNode,Un=!1;break e;case 3:xt=S.stateNode.containerInfo,Un=!0;break e;case 4:xt=S.stateNode.containerInfo,Un=!0;break e}S=S.return}if(xt===null)throw Error(t(160));Ym(g,v,d),xt=null,Un=!1;var P=d.alternate;P!==null&&(P.return=null),d.return=null}catch(B){st(d,s,B)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)Zm(s,r),s=s.sibling}function Zm(r,s){var a=r.alternate,c=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(Fn(s,r),er(r),c&4){try{Pa(3,r,r.return),mu(3,r)}catch(he){st(r,r.return,he)}try{Pa(5,r,r.return)}catch(he){st(r,r.return,he)}}break;case 1:Fn(s,r),er(r),c&512&&a!==null&&ao(a,a.return);break;case 5:if(Fn(s,r),er(r),c&512&&a!==null&&ao(a,a.return),r.flags&32){var d=r.stateNode;try{jr(d,"")}catch(he){st(r,r.return,he)}}if(c&4&&(d=r.stateNode,d!=null)){var g=r.memoizedProps,v=a!==null?a.memoizedProps:g,S=r.type,P=r.updateQueue;if(r.updateQueue=null,P!==null)try{S==="input"&&g.type==="radio"&&g.name!=null&&Fo(d,g),Go(S,v);var B=Go(S,g);for(v=0;v<P.length;v+=2){var Q=P[v],Y=P[v+1];Q==="style"?Wo(d,Y):Q==="dangerouslySetInnerHTML"?$o(d,Y):Q==="children"?jr(d,Y):ne(d,Q,Y,B)}switch(S){case"input":jo(d,g);break;case"textarea":Is(d,g);break;case"select":var G=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!g.multiple;var oe=g.value;oe!=null?pr(d,!!g.multiple,oe,!1):G!==!!g.multiple&&(g.defaultValue!=null?pr(d,!!g.multiple,g.defaultValue,!0):pr(d,!!g.multiple,g.multiple?[]:"",!1))}d[ya]=g}catch(he){st(r,r.return,he)}}break;case 6:if(Fn(s,r),er(r),c&4){if(r.stateNode===null)throw Error(t(162));d=r.stateNode,g=r.memoizedProps;try{d.nodeValue=g}catch(he){st(r,r.return,he)}}break;case 3:if(Fn(s,r),er(r),c&4&&a!==null&&a.memoizedState.isDehydrated)try{On(s.containerInfo)}catch(he){st(r,r.return,he)}break;case 4:Fn(s,r),er(r);break;case 13:Fn(s,r),er(r),d=r.child,d.flags&8192&&(g=d.memoizedState!==null,d.stateNode.isHidden=g,!g||d.alternate!==null&&d.alternate.memoizedState!==null||(ed=qe())),c&4&&Jm(r);break;case 22:if(Q=a!==null&&a.memoizedState!==null,r.mode&1?(Ft=(B=Ft)||Q,Fn(s,r),Ft=B):Fn(s,r),er(r),c&8192){if(B=r.memoizedState!==null,(r.stateNode.isHidden=B)&&!Q&&r.mode&1)for(ue=r,Q=r.child;Q!==null;){for(Y=ue=Q;ue!==null;){switch(G=ue,oe=G.child,G.tag){case 0:case 11:case 14:case 15:Pa(4,G,G.return);break;case 1:ao(G,G.return);var ce=G.stateNode;if(typeof ce.componentWillUnmount=="function"){c=G,a=G.return;try{s=c,ce.props=s.memoizedProps,ce.state=s.memoizedState,ce.componentWillUnmount()}catch(he){st(c,a,he)}}break;case 5:ao(G,G.return);break;case 22:if(G.memoizedState!==null){ng(Y);continue}}oe!==null?(oe.return=G,ue=oe):ng(Y)}Q=Q.sibling}e:for(Q=null,Y=r;;){if(Y.tag===5){if(Q===null){Q=Y;try{d=Y.stateNode,B?(g=d.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(S=Y.stateNode,P=Y.memoizedProps.style,v=P!=null&&P.hasOwnProperty("display")?P.display:null,S.style.display=Ho("display",v))}catch(he){st(r,r.return,he)}}}else if(Y.tag===6){if(Q===null)try{Y.stateNode.nodeValue=B?"":Y.memoizedProps}catch(he){st(r,r.return,he)}}else if((Y.tag!==22&&Y.tag!==23||Y.memoizedState===null||Y===r)&&Y.child!==null){Y.child.return=Y,Y=Y.child;continue}if(Y===r)break e;for(;Y.sibling===null;){if(Y.return===null||Y.return===r)break e;Q===Y&&(Q=null),Y=Y.return}Q===Y&&(Q=null),Y.sibling.return=Y.return,Y=Y.sibling}}break;case 19:Fn(s,r),er(r),c&4&&Jm(r);break;case 21:break;default:Fn(s,r),er(r)}}function er(r){var s=r.flags;if(s&2){try{e:{for(var a=r.return;a!==null;){if(Qm(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(jr(d,""),c.flags&=-33);var g=Xm(r);Yh(r,g,d);break;case 3:case 4:var v=c.stateNode.containerInfo,S=Xm(r);Xh(r,S,v);break;default:throw Error(t(161))}}catch(P){st(r,r.return,P)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function bE(r,s,a){ue=r,eg(r)}function eg(r,s,a){for(var c=(r.mode&1)!==0;ue!==null;){var d=ue,g=d.child;if(d.tag===22&&c){var v=d.memoizedState!==null||pu;if(!v){var S=d.alternate,P=S!==null&&S.memoizedState!==null||Ft;S=pu;var B=Ft;if(pu=v,(Ft=P)&&!B)for(ue=d;ue!==null;)v=ue,P=v.child,v.tag===22&&v.memoizedState!==null?rg(d):P!==null?(P.return=v,ue=P):rg(d);for(;g!==null;)ue=g,eg(g),g=g.sibling;ue=d,pu=S,Ft=B}tg(r)}else d.subtreeFlags&8772&&g!==null?(g.return=d,ue=g):tg(r)}}function tg(r){for(;ue!==null;){var s=ue;if(s.flags&8772){var a=s.alternate;try{if(s.flags&8772)switch(s.tag){case 0:case 11:case 15:Ft||mu(5,s);break;case 1:var c=s.stateNode;if(s.flags&4&&!Ft)if(a===null)c.componentDidMount();else{var d=s.elementType===s.type?a.memoizedProps:Mn(s.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var g=s.updateQueue;g!==null&&nm(s,g,c);break;case 3:var v=s.updateQueue;if(v!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}nm(s,v,a)}break;case 5:var S=s.stateNode;if(a===null&&s.flags&4){a=S;var P=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":P.autoFocus&&a.focus();break;case"img":P.src&&(a.src=P.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var B=s.alternate;if(B!==null){var Q=B.memoizedState;if(Q!==null){var Y=Q.dehydrated;Y!==null&&On(Y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Ft||s.flags&512&&Qh(s)}catch(G){st(s,s.return,G)}}if(s===r){ue=null;break}if(a=s.sibling,a!==null){a.return=s.return,ue=a;break}ue=s.return}}function ng(r){for(;ue!==null;){var s=ue;if(s===r){ue=null;break}var a=s.sibling;if(a!==null){a.return=s.return,ue=a;break}ue=s.return}}function rg(r){for(;ue!==null;){var s=ue;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{mu(4,s)}catch(P){st(s,a,P)}break;case 1:var c=s.stateNode;if(typeof c.componentDidMount=="function"){var d=s.return;try{c.componentDidMount()}catch(P){st(s,d,P)}}var g=s.return;try{Qh(s)}catch(P){st(s,g,P)}break;case 5:var v=s.return;try{Qh(s)}catch(P){st(s,v,P)}}}catch(P){st(s,s.return,P)}if(s===r){ue=null;break}var S=s.sibling;if(S!==null){S.return=s.return,ue=S;break}ue=s.return}}var ME=Math.ceil,gu=se.ReactCurrentDispatcher,Jh=se.ReactCurrentOwner,Tn=se.ReactCurrentBatchConfig,Fe=0,Rt=null,dt=null,Dt=0,hn=0,lo=Jr(0),_t=0,ka=null,ts=0,yu=0,Zh=0,Na=null,en=null,ed=0,uo=1/0,kr=null,_u=!1,td=null,ii=null,vu=!1,si=null,Eu=0,xa=0,nd=null,wu=-1,Tu=0;function Kt(){return Fe&6?qe():wu!==-1?wu:wu=qe()}function oi(r){return r.mode&1?Fe&2&&Dt!==0?Dt&-Dt:EE.transition!==null?(Tu===0&&(Tu=$i()),Tu):(r=Oe,r!==0||(r=window.event,r=r===void 0?16:sa(r.type)),r):1}function jn(r,s,a,c){if(50<xa)throw xa=0,nd=null,Error(t(185));Hr(r,a,c),(!(Fe&2)||r!==Rt)&&(r===Rt&&(!(Fe&2)&&(yu|=a),_t===4&&ai(r,Dt)),tn(r,c),a===1&&Fe===0&&!(s.mode&1)&&(uo=qe()+500,Xl&&ei()))}function tn(r,s){var a=r.callbackNode;yr(r,s);var c=zi(r,r===Rt?Dt:0);if(c===0)a!==null&&ea(a),r.callbackNode=null,r.callbackPriority=0;else if(s=c&-c,r.callbackPriority!==s){if(a!=null&&ea(a),s===1)r.tag===0?vE(sg.bind(null,r)):Hp(sg.bind(null,r)),mE(function(){!(Fe&6)&&ei()}),a=null;else{switch(qr(c)){case 1:a=ji;break;case 4:a=Br;break;case 16:a=mn;break;case 536870912:a=Tl;break;default:a=mn}a=fg(a,ig.bind(null,r))}r.callbackPriority=s,r.callbackNode=a}}function ig(r,s){if(wu=-1,Tu=0,Fe&6)throw Error(t(327));var a=r.callbackNode;if(co()&&r.callbackNode!==a)return null;var c=zi(r,r===Rt?Dt:0);if(c===0)return null;if(c&30||c&r.expiredLanes||s)s=Iu(r,c);else{s=c;var d=Fe;Fe|=2;var g=ag();(Rt!==r||Dt!==s)&&(kr=null,uo=qe()+500,rs(r,s));do try{jE();break}catch(S){og(r,S)}while(!0);Eh(),gu.current=g,Fe=d,dt!==null?s=0:(Rt=null,Dt=0,s=_t)}if(s!==0){if(s===2&&(d=on(r),d!==0&&(c=d,s=rd(r,d))),s===1)throw a=ka,rs(r,0),ai(r,c),tn(r,qe()),a;if(s===6)ai(r,c);else{if(d=r.current.alternate,!(c&30)&&!UE(d)&&(s=Iu(r,c),s===2&&(g=on(r),g!==0&&(c=g,s=rd(r,g))),s===1))throw a=ka,rs(r,0),ai(r,c),tn(r,qe()),a;switch(r.finishedWork=d,r.finishedLanes=c,s){case 0:case 1:throw Error(t(345));case 2:is(r,en,kr);break;case 3:if(ai(r,c),(c&130023424)===c&&(s=ed+500-qe(),10<s)){if(zi(r,0)!==0)break;if(d=r.suspendedLanes,(d&c)!==c){Kt(),r.pingedLanes|=r.suspendedLanes&d;break}r.timeoutHandle=uh(is.bind(null,r,en,kr),s);break}is(r,en,kr);break;case 4:if(ai(r,c),(c&4194240)===c)break;for(s=r.eventTimes,d=-1;0<c;){var v=31-Ht(c);g=1<<v,v=s[v],v>d&&(d=v),c&=~g}if(c=d,c=qe()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*ME(c/1960))-c,10<c){r.timeoutHandle=uh(is.bind(null,r,en,kr),c);break}is(r,en,kr);break;case 5:is(r,en,kr);break;default:throw Error(t(329))}}}return tn(r,qe()),r.callbackNode===a?ig.bind(null,r):null}function rd(r,s){var a=Na;return r.current.memoizedState.isDehydrated&&(rs(r,s).flags|=256),r=Iu(r,s),r!==2&&(s=en,en=a,s!==null&&id(s)),r}function id(r){en===null?en=r:en.push.apply(en,r)}function UE(r){for(var s=r;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],g=d.getSnapshot;d=d.value;try{if(!Vn(g(),d))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function ai(r,s){for(s&=~Zh,s&=~yu,r.suspendedLanes|=s,r.pingedLanes&=~s,r=r.expirationTimes;0<s;){var a=31-Ht(s),c=1<<a;r[a]=-1,s&=~c}}function sg(r){if(Fe&6)throw Error(t(327));co();var s=zi(r,0);if(!(s&1))return tn(r,qe()),null;var a=Iu(r,s);if(r.tag!==0&&a===2){var c=on(r);c!==0&&(s=c,a=rd(r,c))}if(a===1)throw a=ka,rs(r,0),ai(r,s),tn(r,qe()),a;if(a===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=s,is(r,en,kr),tn(r,qe()),null}function sd(r,s){var a=Fe;Fe|=1;try{return r(s)}finally{Fe=a,Fe===0&&(uo=qe()+500,Xl&&ei())}}function ns(r){si!==null&&si.tag===0&&!(Fe&6)&&co();var s=Fe;Fe|=1;var a=Tn.transition,c=Oe;try{if(Tn.transition=null,Oe=1,r)return r()}finally{Oe=c,Tn.transition=a,Fe=s,!(Fe&6)&&ei()}}function od(){hn=lo.current,Qe(lo)}function rs(r,s){r.finishedWork=null,r.finishedLanes=0;var a=r.timeoutHandle;if(a!==-1&&(r.timeoutHandle=-1,pE(a)),dt!==null)for(a=dt.return;a!==null;){var c=a;switch(mh(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Gl();break;case 3:so(),Qe(Yt),Qe(bt),Ph();break;case 5:Ah(c);break;case 4:so();break;case 13:Qe(tt);break;case 19:Qe(tt);break;case 10:wh(c.type._context);break;case 22:case 23:od()}a=a.return}if(Rt=r,dt=r=li(r.current,null),Dt=hn=s,_t=0,ka=null,Zh=yu=ts=0,en=Na=null,Ji!==null){for(s=0;s<Ji.length;s++)if(a=Ji[s],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,g=a.pending;if(g!==null){var v=g.next;g.next=d,c.next=v}a.pending=c}Ji=null}return r}function og(r,s){do{var a=dt;try{if(Eh(),ou.current=cu,au){for(var c=nt.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}au=!1}if(es=0,St=yt=nt=null,Ia=!1,Sa=0,Jh.current=null,a===null||a.return===null){_t=1,ka=s,dt=null;break}e:{var g=r,v=a.return,S=a,P=s;if(s=Dt,S.flags|=32768,P!==null&&typeof P=="object"&&typeof P.then=="function"){var B=P,Q=S,Y=Q.tag;if(!(Q.mode&1)&&(Y===0||Y===11||Y===15)){var G=Q.alternate;G?(Q.updateQueue=G.updateQueue,Q.memoizedState=G.memoizedState,Q.lanes=G.lanes):(Q.updateQueue=null,Q.memoizedState=null)}var oe=xm(v);if(oe!==null){oe.flags&=-257,Dm(oe,v,S,g,s),oe.mode&1&&Nm(g,B,s),s=oe,P=B;var ce=s.updateQueue;if(ce===null){var he=new Set;he.add(P),s.updateQueue=he}else ce.add(P);break e}else{if(!(s&1)){Nm(g,B,s),ad();break e}P=Error(t(426))}}else if(Ye&&S.mode&1){var ut=xm(v);if(ut!==null){!(ut.flags&65536)&&(ut.flags|=256),Dm(ut,v,S,g,s),_h(oo(P,S));break e}}g=P=oo(P,S),_t!==4&&(_t=2),Na===null?Na=[g]:Na.push(g),g=v;do{switch(g.tag){case 3:g.flags|=65536,s&=-s,g.lanes|=s;var F=Pm(g,P,s);tm(g,F);break e;case 1:S=P;var x=g.type,j=g.stateNode;if(!(g.flags&128)&&(typeof x.getDerivedStateFromError=="function"||j!==null&&typeof j.componentDidCatch=="function"&&(ii===null||!ii.has(j)))){g.flags|=65536,s&=-s,g.lanes|=s;var Z=km(g,S,s);tm(g,Z);break e}}g=g.return}while(g!==null)}ug(a)}catch(de){s=de,dt===a&&a!==null&&(dt=a=a.return);continue}break}while(!0)}function ag(){var r=gu.current;return gu.current=cu,r===null?cu:r}function ad(){(_t===0||_t===3||_t===2)&&(_t=4),Rt===null||!(ts&268435455)&&!(yu&268435455)||ai(Rt,Dt)}function Iu(r,s){var a=Fe;Fe|=2;var c=ag();(Rt!==r||Dt!==s)&&(kr=null,rs(r,s));do try{FE();break}catch(d){og(r,d)}while(!0);if(Eh(),Fe=a,gu.current=c,dt!==null)throw Error(t(261));return Rt=null,Dt=0,_t}function FE(){for(;dt!==null;)lg(dt)}function jE(){for(;dt!==null&&!El();)lg(dt)}function lg(r){var s=dg(r.alternate,r,hn);r.memoizedProps=r.pendingProps,s===null?ug(r):dt=s,Jh.current=null}function ug(r){var s=r;do{var a=s.alternate;if(r=s.return,s.flags&32768){if(a=OE(a,s),a!==null){a.flags&=32767,dt=a;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{_t=6,dt=null;return}}else if(a=DE(a,s,hn),a!==null){dt=a;return}if(s=s.sibling,s!==null){dt=s;return}dt=s=r}while(s!==null);_t===0&&(_t=5)}function is(r,s,a){var c=Oe,d=Tn.transition;try{Tn.transition=null,Oe=1,BE(r,s,a,c)}finally{Tn.transition=d,Oe=c}return null}function BE(r,s,a,c){do co();while(si!==null);if(Fe&6)throw Error(t(327));a=r.finishedWork;var d=r.finishedLanes;if(a===null)return null;if(r.finishedWork=null,r.finishedLanes=0,a===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var g=a.lanes|a.childLanes;if(He(r,g),r===Rt&&(dt=Rt=null,Dt=0),!(a.subtreeFlags&2064)&&!(a.flags&2064)||vu||(vu=!0,fg(mn,function(){return co(),null})),g=(a.flags&15990)!==0,a.subtreeFlags&15990||g){g=Tn.transition,Tn.transition=null;var v=Oe;Oe=1;var S=Fe;Fe|=4,Jh.current=null,VE(r,a),Zm(a,r),aE(ah),Gr=!!oh,ah=oh=null,r.current=a,bE(a),Hc(),Fe=S,Oe=v,Tn.transition=g}else r.current=a;if(vu&&(vu=!1,si=r,Eu=d),g=r.pendingLanes,g===0&&(ii=null),Il(a.stateNode),tn(r,qe()),s!==null)for(c=r.onRecoverableError,a=0;a<s.length;a++)d=s[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(_u)throw _u=!1,r=td,td=null,r;return Eu&1&&r.tag!==0&&co(),g=r.pendingLanes,g&1?r===nd?xa++:(xa=0,nd=r):xa=0,ei(),null}function co(){if(si!==null){var r=qr(Eu),s=Tn.transition,a=Oe;try{if(Tn.transition=null,Oe=16>r?16:r,si===null)var c=!1;else{if(r=si,si=null,Eu=0,Fe&6)throw Error(t(331));var d=Fe;for(Fe|=4,ue=r.current;ue!==null;){var g=ue,v=g.child;if(ue.flags&16){var S=g.deletions;if(S!==null){for(var P=0;P<S.length;P++){var B=S[P];for(ue=B;ue!==null;){var Q=ue;switch(Q.tag){case 0:case 11:case 15:Pa(8,Q,g)}var Y=Q.child;if(Y!==null)Y.return=Q,ue=Y;else for(;ue!==null;){Q=ue;var G=Q.sibling,oe=Q.return;if(Gm(Q),Q===B){ue=null;break}if(G!==null){G.return=oe,ue=G;break}ue=oe}}}var ce=g.alternate;if(ce!==null){var he=ce.child;if(he!==null){ce.child=null;do{var ut=he.sibling;he.sibling=null,he=ut}while(he!==null)}}ue=g}}if(g.subtreeFlags&2064&&v!==null)v.return=g,ue=v;else e:for(;ue!==null;){if(g=ue,g.flags&2048)switch(g.tag){case 0:case 11:case 15:Pa(9,g,g.return)}var F=g.sibling;if(F!==null){F.return=g.return,ue=F;break e}ue=g.return}}var x=r.current;for(ue=x;ue!==null;){v=ue;var j=v.child;if(v.subtreeFlags&2064&&j!==null)j.return=v,ue=j;else e:for(v=x;ue!==null;){if(S=ue,S.flags&2048)try{switch(S.tag){case 0:case 11:case 15:mu(9,S)}}catch(de){st(S,S.return,de)}if(S===v){ue=null;break e}var Z=S.sibling;if(Z!==null){Z.return=S.return,ue=Z;break e}ue=S.return}}if(Fe=d,ei(),sn&&typeof sn.onPostCommitFiberRoot=="function")try{sn.onPostCommitFiberRoot(Bi,r)}catch{}c=!0}return c}finally{Oe=a,Tn.transition=s}}return!1}function cg(r,s,a){s=oo(a,s),s=Pm(r,s,1),r=ni(r,s,1),s=Kt(),r!==null&&(Hr(r,1,s),tn(r,s))}function st(r,s,a){if(r.tag===3)cg(r,r,a);else for(;s!==null;){if(s.tag===3){cg(s,r,a);break}else if(s.tag===1){var c=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ii===null||!ii.has(c))){r=oo(a,r),r=km(s,r,1),s=ni(s,r,1),r=Kt(),s!==null&&(Hr(s,1,r),tn(s,r));break}}s=s.return}}function zE(r,s,a){var c=r.pingCache;c!==null&&c.delete(s),s=Kt(),r.pingedLanes|=r.suspendedLanes&a,Rt===r&&(Dt&a)===a&&(_t===4||_t===3&&(Dt&130023424)===Dt&&500>qe()-ed?rs(r,0):Zh|=a),tn(r,s)}function hg(r,s){s===0&&(r.mode&1?(s=Os,Os<<=1,!(Os&130023424)&&(Os=4194304)):s=1);var a=Kt();r=Ar(r,s),r!==null&&(Hr(r,s,a),tn(r,a))}function $E(r){var s=r.memoizedState,a=0;s!==null&&(a=s.retryLane),hg(r,a)}function HE(r,s){var a=0;switch(r.tag){case 13:var c=r.stateNode,d=r.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=r.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(s),hg(r,a)}var dg;dg=function(r,s,a){if(r!==null)if(r.memoizedProps!==s.pendingProps||Yt.current)Zt=!0;else{if(!(r.lanes&a)&&!(s.flags&128))return Zt=!1,xE(r,s,a);Zt=!!(r.flags&131072)}else Zt=!1,Ye&&s.flags&1048576&&Wp(s,Jl,s.index);switch(s.lanes=0,s.tag){case 2:var c=s.type;fu(r,s),r=s.pendingProps;var d=Js(s,bt.current);io(s,a),d=xh(null,s,c,r,d,a);var g=Dh();return s.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Jt(c)?(g=!0,Ql(s)):g=!1,s.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Sh(s),d.updater=hu,s.stateNode=d,d._reactInternals=s,Uh(s,c,r,a),s=zh(null,s,c,!0,g,a)):(s.tag=0,Ye&&g&&ph(s),qt(null,s,d,a),s=s.child),s;case 16:c=s.elementType;e:{switch(fu(r,s),r=s.pendingProps,d=c._init,c=d(c._payload),s.type=c,d=s.tag=qE(c),r=Mn(c,r),d){case 0:s=Bh(null,s,c,r,a);break e;case 1:s=Um(null,s,c,r,a);break e;case 11:s=Om(null,s,c,r,a);break e;case 14:s=Lm(null,s,c,Mn(c.type,r),a);break e}throw Error(t(306,c,""))}return s;case 0:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Mn(c,d),Bh(r,s,c,d,a);case 1:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Mn(c,d),Um(r,s,c,d,a);case 3:e:{if(Fm(s),r===null)throw Error(t(387));c=s.pendingProps,g=s.memoizedState,d=g.element,em(r,s),iu(s,c,null,a);var v=s.memoizedState;if(c=v.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},s.updateQueue.baseState=g,s.memoizedState=g,s.flags&256){d=oo(Error(t(423)),s),s=jm(r,s,c,a,d);break e}else if(c!==d){d=oo(Error(t(424)),s),s=jm(r,s,c,a,d);break e}else for(cn=Yr(s.stateNode.containerInfo.firstChild),un=s,Ye=!0,bn=null,a=Jp(s,null,c,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(to(),c===d){s=Pr(r,s,a);break e}qt(r,s,c,a)}s=s.child}return s;case 5:return rm(s),r===null&&yh(s),c=s.type,d=s.pendingProps,g=r!==null?r.memoizedProps:null,v=d.children,lh(c,d)?v=null:g!==null&&lh(c,g)&&(s.flags|=32),Mm(r,s),qt(r,s,v,a),s.child;case 6:return r===null&&yh(s),null;case 13:return Bm(r,s,a);case 4:return Rh(s,s.stateNode.containerInfo),c=s.pendingProps,r===null?s.child=no(s,null,c,a):qt(r,s,c,a),s.child;case 11:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Mn(c,d),Om(r,s,c,d,a);case 7:return qt(r,s,s.pendingProps,a),s.child;case 8:return qt(r,s,s.pendingProps.children,a),s.child;case 12:return qt(r,s,s.pendingProps.children,a),s.child;case 10:e:{if(c=s.type._context,d=s.pendingProps,g=s.memoizedProps,v=d.value,Ke(tu,c._currentValue),c._currentValue=v,g!==null)if(Vn(g.value,v)){if(g.children===d.children&&!Yt.current){s=Pr(r,s,a);break e}}else for(g=s.child,g!==null&&(g.return=s);g!==null;){var S=g.dependencies;if(S!==null){v=g.child;for(var P=S.firstContext;P!==null;){if(P.context===c){if(g.tag===1){P=Cr(-1,a&-a),P.tag=2;var B=g.updateQueue;if(B!==null){B=B.shared;var Q=B.pending;Q===null?P.next=P:(P.next=Q.next,Q.next=P),B.pending=P}}g.lanes|=a,P=g.alternate,P!==null&&(P.lanes|=a),Th(g.return,a,s),S.lanes|=a;break}P=P.next}}else if(g.tag===10)v=g.type===s.type?null:g.child;else if(g.tag===18){if(v=g.return,v===null)throw Error(t(341));v.lanes|=a,S=v.alternate,S!==null&&(S.lanes|=a),Th(v,a,s),v=g.sibling}else v=g.child;if(v!==null)v.return=g;else for(v=g;v!==null;){if(v===s){v=null;break}if(g=v.sibling,g!==null){g.return=v.return,v=g;break}v=v.return}g=v}qt(r,s,d.children,a),s=s.child}return s;case 9:return d=s.type,c=s.pendingProps.children,io(s,a),d=En(d),c=c(d),s.flags|=1,qt(r,s,c,a),s.child;case 14:return c=s.type,d=Mn(c,s.pendingProps),d=Mn(c.type,d),Lm(r,s,c,d,a);case 15:return Vm(r,s,s.type,s.pendingProps,a);case 17:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Mn(c,d),fu(r,s),s.tag=1,Jt(c)?(r=!0,Ql(s)):r=!1,io(s,a),Am(s,c,d),Uh(s,c,d,a),zh(null,s,c,!0,r,a);case 19:return $m(r,s,a);case 22:return bm(r,s,a)}throw Error(t(156,s.tag))};function fg(r,s){return xs(r,s)}function WE(r,s,a,c){this.tag=r,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function In(r,s,a,c){return new WE(r,s,a,c)}function ld(r){return r=r.prototype,!(!r||!r.isReactComponent)}function qE(r){if(typeof r=="function")return ld(r)?1:0;if(r!=null){if(r=r.$$typeof,r===M)return 11;if(r===Tt)return 14}return 2}function li(r,s){var a=r.alternate;return a===null?(a=In(r.tag,s,r.key,r.mode),a.elementType=r.elementType,a.type=r.type,a.stateNode=r.stateNode,a.alternate=r,r.alternate=a):(a.pendingProps=s,a.type=r.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=r.flags&14680064,a.childLanes=r.childLanes,a.lanes=r.lanes,a.child=r.child,a.memoizedProps=r.memoizedProps,a.memoizedState=r.memoizedState,a.updateQueue=r.updateQueue,s=r.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=r.sibling,a.index=r.index,a.ref=r.ref,a}function Su(r,s,a,c,d,g){var v=2;if(c=r,typeof r=="function")ld(r)&&(v=1);else if(typeof r=="string")v=5;else e:switch(r){case N:return ss(a.children,d,g,s);case I:v=8,d|=8;break;case A:return r=In(12,a,s,d|2),r.elementType=A,r.lanes=g,r;case C:return r=In(13,a,s,d),r.elementType=C,r.lanes=g,r;case et:return r=In(19,a,s,d),r.elementType=et,r.lanes=g,r;case Se:return Ru(a,d,g,s);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case k:v=10;break e;case D:v=9;break e;case M:v=11;break e;case Tt:v=14;break e;case ve:v=16,c=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return s=In(v,a,s,d),s.elementType=r,s.type=c,s.lanes=g,s}function ss(r,s,a,c){return r=In(7,r,c,s),r.lanes=a,r}function Ru(r,s,a,c){return r=In(22,r,c,s),r.elementType=Se,r.lanes=a,r.stateNode={isHidden:!1},r}function ud(r,s,a){return r=In(6,r,null,s),r.lanes=a,r}function cd(r,s,a){return s=In(4,r.children!==null?r.children:[],r.key,s),s.lanes=a,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}function KE(r,s,a,c,d){this.tag=s,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$r(0),this.expirationTimes=$r(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$r(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function hd(r,s,a,c,d,g,v,S,P){return r=new KE(r,s,a,S,P),s===1?(s=1,g===!0&&(s|=8)):s=0,g=In(3,null,null,s),r.current=g,g.stateNode=r,g.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Sh(g),r}function GE(r,s,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_e,key:c==null?null:""+c,children:r,containerInfo:s,implementation:a}}function pg(r){if(!r)return Zr;r=r._reactInternals;e:{if(Pn(r)!==r||r.tag!==1)throw Error(t(170));var s=r;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Jt(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(r.tag===1){var a=r.type;if(Jt(a))return zp(r,a,s)}return s}function mg(r,s,a,c,d,g,v,S,P){return r=hd(a,c,!0,r,d,g,v,S,P),r.context=pg(null),a=r.current,c=Kt(),d=oi(a),g=Cr(c,d),g.callback=s??null,ni(a,g,d),r.current.lanes=d,Hr(r,d,c),tn(r,c),r}function Au(r,s,a,c){var d=s.current,g=Kt(),v=oi(d);return a=pg(a),s.context===null?s.context=a:s.pendingContext=a,s=Cr(g,v),s.payload={element:r},c=c===void 0?null:c,c!==null&&(s.callback=c),r=ni(d,s,v),r!==null&&(jn(r,d,v,g),ru(r,d,v)),v}function Cu(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function gg(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var a=r.retryLane;r.retryLane=a!==0&&a<s?a:s}}function dd(r,s){gg(r,s),(r=r.alternate)&&gg(r,s)}function QE(){return null}var yg=typeof reportError=="function"?reportError:function(r){console.error(r)};function fd(r){this._internalRoot=r}Pu.prototype.render=fd.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(t(409));Au(r,s,null,null)},Pu.prototype.unmount=fd.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;ns(function(){Au(null,r,null,null)}),s[Tr]=null}};function Pu(r){this._internalRoot=r}Pu.prototype.unstable_scheduleHydration=function(r){if(r){var s=Pl();r={blockedOn:null,target:r,priority:s};for(var a=0;a<Kn.length&&s!==0&&s<Kn[a].priority;a++);Kn.splice(a,0,r),a===0&&xl(r)}};function pd(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function ku(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function _g(){}function XE(r,s,a,c,d){if(d){if(typeof c=="function"){var g=c;c=function(){var B=Cu(v);g.call(B)}}var v=mg(s,c,r,0,null,!1,!1,"",_g);return r._reactRootContainer=v,r[Tr]=v.current,ma(r.nodeType===8?r.parentNode:r),ns(),v}for(;d=r.lastChild;)r.removeChild(d);if(typeof c=="function"){var S=c;c=function(){var B=Cu(P);S.call(B)}}var P=hd(r,0,!1,null,null,!1,!1,"",_g);return r._reactRootContainer=P,r[Tr]=P.current,ma(r.nodeType===8?r.parentNode:r),ns(function(){Au(s,P,a,c)}),P}function Nu(r,s,a,c,d){var g=a._reactRootContainer;if(g){var v=g;if(typeof d=="function"){var S=d;d=function(){var P=Cu(v);S.call(P)}}Au(s,v,r,d)}else v=XE(a,s,r,d,c);return Cu(v)}Al=function(r){switch(r.tag){case 3:var s=r.stateNode;if(s.current.memoizedState.isDehydrated){var a=zr(s.pendingLanes);a!==0&&(Wr(s,a|1),tn(s,qe()),!(Fe&6)&&(uo=qe()+500,ei()))}break;case 13:ns(function(){var c=Ar(r,1);if(c!==null){var d=Kt();jn(c,r,1,d)}}),dd(r,1)}},Ls=function(r){if(r.tag===13){var s=Ar(r,134217728);if(s!==null){var a=Kt();jn(s,r,134217728,a)}dd(r,134217728)}},Cl=function(r){if(r.tag===13){var s=oi(r),a=Ar(r,s);if(a!==null){var c=Kt();jn(a,r,s,c)}dd(r,s)}},Pl=function(){return Oe},kl=function(r,s){var a=Oe;try{return Oe=r,s()}finally{Oe=a}},Rs=function(r,s,a){switch(s){case"input":if(jo(r,a),s=a.name,a.type==="radio"&&s!=null){for(a=r;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var c=a[s];if(c!==r&&c.form===r.form){var d=Kl(c);if(!d)throw Error(t(90));dr(c),jo(c,d)}}}break;case"textarea":Is(r,a);break;case"select":s=a.value,s!=null&&pr(r,!!a.multiple,s,!1)}},bi=sd,Xo=ns;var YE={usingClientEntryPoint:!1,Events:[_a,Xs,Kl,Wn,Qo,sd]},Da={findFiberByHostInstance:Gi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},JE={bundleType:Da.bundleType,version:Da.version,rendererPackageName:Da.rendererPackageName,rendererConfig:Da.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:se.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=Zo(r),r===null?null:r.stateNode},findFiberByHostInstance:Da.findFiberByHostInstance||QE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xu.isDisabled&&xu.supportsFiber)try{Bi=xu.inject(JE),sn=xu}catch{}}return nn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=YE,nn.createPortal=function(r,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!pd(s))throw Error(t(200));return GE(r,s,null,a)},nn.createRoot=function(r,s){if(!pd(r))throw Error(t(299));var a=!1,c="",d=yg;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onRecoverableError!==void 0&&(d=s.onRecoverableError)),s=hd(r,1,!1,null,null,a,!1,c,d),r[Tr]=s.current,ma(r.nodeType===8?r.parentNode:r),new fd(s)},nn.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=Zo(s),r=r===null?null:r.stateNode,r},nn.flushSync=function(r){return ns(r)},nn.hydrate=function(r,s,a){if(!ku(s))throw Error(t(200));return Nu(null,r,s,!0,a)},nn.hydrateRoot=function(r,s,a){if(!pd(r))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,g="",v=yg;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),s=mg(s,null,r,1,a??null,d,!1,g,v),r[Tr]=s.current,ma(r),c)for(r=0;r<c.length;r++)a=c[r],d=a._getVersion,d=d(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,d]:s.mutableSourceEagerHydrationData.push(a,d);return new Pu(s)},nn.render=function(r,s,a){if(!ku(s))throw Error(t(200));return Nu(null,r,s,!1,a)},nn.unmountComponentAtNode=function(r){if(!ku(r))throw Error(t(40));return r._reactRootContainer?(ns(function(){Nu(null,null,r,!1,function(){r._reactRootContainer=null,r[Tr]=null})}),!0):!1},nn.unstable_batchedUpdates=sd,nn.unstable_renderSubtreeIntoContainer=function(r,s,a,c){if(!ku(a))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return Nu(r,s,a,!1,c)},nn.version="18.3.1-next-f1338f8080-20240426",nn}var Ag;function ow(){if(Ag)return yd.exports;Ag=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),yd.exports=sw(),yd.exports}var Cg;function aw(){if(Cg)return Du;Cg=1;var n=ow();return Du.createRoot=n.createRoot,Du.hydrateRoot=n.hydrateRoot,Du}var lw=aw(),La={},Pg;function uw(){if(Pg)return La;Pg=1,Object.defineProperty(La,"__esModule",{value:!0}),La.parse=h,La.serialize=y;const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,i=/^[\u0020-\u003A\u003D-\u007E]*$/,o=Object.prototype.toString,l=(()=>{const R=function(){};return R.prototype=Object.create(null),R})();function h(R,O){const b=new l,z=R.length;if(z<2)return b;const L=(O==null?void 0:O.decode)||E;let W=0;do{const te=R.indexOf("=",W);if(te===-1)break;const ne=R.indexOf(";",W),se=ne===-1?z:ne;if(te>se){W=R.lastIndexOf(";",te-1)+1;continue}const Ie=f(R,W,te),_e=p(R,te,Ie),N=R.slice(Ie,_e);if(b[N]===void 0){let I=f(R,te+1,se),A=p(R,se,I);const k=L(R.slice(I,A));b[N]=k}W=se+1}while(W<z);return b}function f(R,O,b){do{const z=R.charCodeAt(O);if(z!==32&&z!==9)return O}while(++O<b);return b}function p(R,O,b){for(;O>b;){const z=R.charCodeAt(--O);if(z!==32&&z!==9)return O+1}return b}function y(R,O,b){const z=(b==null?void 0:b.encode)||encodeURIComponent;if(!n.test(R))throw new TypeError(`argument name is invalid: ${R}`);const L=z(O);if(!e.test(L))throw new TypeError(`argument val is invalid: ${O}`);let W=R+"="+L;if(!b)return W;if(b.maxAge!==void 0){if(!Number.isInteger(b.maxAge))throw new TypeError(`option maxAge is invalid: ${b.maxAge}`);W+="; Max-Age="+b.maxAge}if(b.domain){if(!t.test(b.domain))throw new TypeError(`option domain is invalid: ${b.domain}`);W+="; Domain="+b.domain}if(b.path){if(!i.test(b.path))throw new TypeError(`option path is invalid: ${b.path}`);W+="; Path="+b.path}if(b.expires){if(!T(b.expires)||!Number.isFinite(b.expires.valueOf()))throw new TypeError(`option expires is invalid: ${b.expires}`);W+="; Expires="+b.expires.toUTCString()}if(b.httpOnly&&(W+="; HttpOnly"),b.secure&&(W+="; Secure"),b.partitioned&&(W+="; Partitioned"),b.priority)switch(typeof b.priority=="string"?b.priority.toLowerCase():void 0){case"low":W+="; Priority=Low";break;case"medium":W+="; Priority=Medium";break;case"high":W+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${b.priority}`)}if(b.sameSite)switch(typeof b.sameSite=="string"?b.sameSite.toLowerCase():b.sameSite){case!0:case"strict":W+="; SameSite=Strict";break;case"lax":W+="; SameSite=Lax";break;case"none":W+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${b.sameSite}`)}return W}function E(R){if(R.indexOf("%")===-1)return R;try{return decodeURIComponent(R)}catch{return R}}function T(R){return o.call(R)==="[object Date]"}return La}uw();/**
 * react-router v7.0.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var kg="popstate";function cw(n={}){function e(i,o){let{pathname:l,search:h,hash:f}=i.location;return bd("",{pathname:l,search:h,hash:f},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(i,o){return typeof o=="string"?o:Qa(o)}return dw(e,t,null,n)}function Ze(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function Fr(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function hw(){return Math.random().toString(36).substring(2,10)}function Ng(n,e){return{usr:n.state,key:n.key,idx:e}}function bd(n,e,t=null,i){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?No(e):e,state:t,key:e&&e.key||i||hw()}}function Qa({pathname:n="/",search:e="",hash:t=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(n+=t.charAt(0)==="#"?t:"#"+t),n}function No(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substring(t),n=n.substring(0,t));let i=n.indexOf("?");i>=0&&(e.search=n.substring(i),n=n.substring(0,i)),n&&(e.pathname=n)}return e}function dw(n,e,t,i={}){let{window:o=document.defaultView,v5Compat:l=!1}=i,h=o.history,f="POP",p=null,y=E();y==null&&(y=0,h.replaceState({...h.state,idx:y},""));function E(){return(h.state||{idx:null}).idx}function T(){f="POP";let L=E(),W=L==null?null:L-y;y=L,p&&p({action:f,location:z.location,delta:W})}function R(L,W){f="PUSH";let te=bd(z.location,L,W);y=E()+1;let ne=Ng(te,y),se=z.createHref(te);try{h.pushState(ne,"",se)}catch(Ie){if(Ie instanceof DOMException&&Ie.name==="DataCloneError")throw Ie;o.location.assign(se)}l&&p&&p({action:f,location:z.location,delta:1})}function O(L,W){f="REPLACE";let te=bd(z.location,L,W);y=E();let ne=Ng(te,y),se=z.createHref(te);h.replaceState(ne,"",se),l&&p&&p({action:f,location:z.location,delta:0})}function b(L){let W=o.location.origin!=="null"?o.location.origin:o.location.href,te=typeof L=="string"?L:Qa(L);return te=te.replace(/ $/,"%20"),Ze(W,`No window.location.(origin|href) available to create URL for href: ${te}`),new URL(te,W)}let z={get action(){return f},get location(){return n(o,h)},listen(L){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(kg,T),p=L,()=>{o.removeEventListener(kg,T),p=null}},createHref(L){return e(o,L)},createURL:b,encodeLocation(L){let W=b(L);return{pathname:W.pathname,search:W.search,hash:W.hash}},push:R,replace:O,go(L){return h.go(L)}};return z}function r_(n,e,t="/"){return fw(n,e,t,!1)}function fw(n,e,t,i){let o=typeof e=="string"?No(e):e,l=Ii(o.pathname||"/",t);if(l==null)return null;let h=i_(n);pw(h);let f=null;for(let p=0;f==null&&p<h.length;++p){let y=Rw(l);f=Iw(h[p],y,i)}return f}function i_(n,e=[],t=[],i=""){let o=(l,h,f)=>{let p={relativePath:f===void 0?l.path||"":f,caseSensitive:l.caseSensitive===!0,childrenIndex:h,route:l};p.relativePath.startsWith("/")&&(Ze(p.relativePath.startsWith(i),`Absolute route path "${p.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(i.length));let y=Lr([i,p.relativePath]),E=t.concat(p);l.children&&l.children.length>0&&(Ze(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${y}".`),i_(l.children,e,E,y)),!(l.path==null&&!l.index)&&e.push({path:y,score:ww(y,l.index),routesMeta:E})};return n.forEach((l,h)=>{var f;if(l.path===""||!((f=l.path)!=null&&f.includes("?")))o(l,h);else for(let p of s_(l.path))o(l,h,p)}),e}function s_(n){let e=n.split("/");if(e.length===0)return[];let[t,...i]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(i.length===0)return o?[l,""]:[l];let h=s_(i.join("/")),f=[];return f.push(...h.map(p=>p===""?l:[l,p].join("/"))),o&&f.push(...h),f.map(p=>n.startsWith("/")&&p===""?"/":p)}function pw(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:Tw(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}var mw=/^:[\w-]+$/,gw=3,yw=2,_w=1,vw=10,Ew=-2,xg=n=>n==="*";function ww(n,e){let t=n.split("/"),i=t.length;return t.some(xg)&&(i+=Ew),e&&(i+=yw),t.filter(o=>!xg(o)).reduce((o,l)=>o+(mw.test(l)?gw:l===""?_w:vw),i)}function Tw(n,e){return n.length===e.length&&n.slice(0,-1).every((i,o)=>i===e[o])?n[n.length-1]-e[e.length-1]:0}function Iw(n,e,t=!1){let{routesMeta:i}=n,o={},l="/",h=[];for(let f=0;f<i.length;++f){let p=i[f],y=f===i.length-1,E=l==="/"?e:e.slice(l.length)||"/",T=tc({path:p.relativePath,caseSensitive:p.caseSensitive,end:y},E),R=p.route;if(!T&&y&&t&&!i[i.length-1].route.index&&(T=tc({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},E)),!T)return null;Object.assign(o,T.params),h.push({params:o,pathname:Lr([l,T.pathname]),pathnameBase:kw(Lr([l,T.pathnameBase])),route:R}),T.pathnameBase!=="/"&&(l=Lr([l,T.pathnameBase]))}return h}function tc(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,i]=Sw(n.path,n.caseSensitive,n.end),o=e.match(t);if(!o)return null;let l=o[0],h=l.replace(/(.)\/+$/,"$1"),f=o.slice(1);return{params:i.reduce((y,{paramName:E,isOptional:T},R)=>{if(E==="*"){let b=f[R]||"";h=l.slice(0,l.length-b.length).replace(/(.)\/+$/,"$1")}const O=f[R];return T&&!O?y[E]=void 0:y[E]=(O||"").replace(/%2F/g,"/"),y},{}),pathname:l,pathnameBase:h,pattern:n}}function Sw(n,e=!1,t=!0){Fr(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let i=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,f,p)=>(i.push({paramName:f,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(i.push({paramName:"*"}),o+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":n!==""&&n!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),i]}function Rw(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Fr(!1,`The URL path "${n}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function Ii(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=n.charAt(t);return i&&i!=="/"?null:n.slice(t)||"/"}function Aw(n,e="/"){let{pathname:t,search:i="",hash:o=""}=typeof n=="string"?No(n):n;return{pathname:t?t.startsWith("/")?t:Cw(t,e):e,search:Nw(i),hash:xw(o)}}function Cw(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function Ed(n,e,t,i){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Pw(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function hf(n){let e=Pw(n);return e.map((t,i)=>i===e.length-1?t.pathname:t.pathnameBase)}function df(n,e,t,i=!1){let o;typeof n=="string"?o=No(n):(o={...n},Ze(!o.pathname||!o.pathname.includes("?"),Ed("?","pathname","search",o)),Ze(!o.pathname||!o.pathname.includes("#"),Ed("#","pathname","hash",o)),Ze(!o.search||!o.search.includes("#"),Ed("#","search","hash",o)));let l=n===""||o.pathname==="",h=l?"/":o.pathname,f;if(h==null)f=t;else{let T=e.length-1;if(!i&&h.startsWith("..")){let R=h.split("/");for(;R[0]==="..";)R.shift(),T-=1;o.pathname=R.join("/")}f=T>=0?e[T]:"/"}let p=Aw(o,f),y=h&&h!=="/"&&h.endsWith("/"),E=(l||h===".")&&t.endsWith("/");return!p.pathname.endsWith("/")&&(y||E)&&(p.pathname+="/"),p}var Lr=n=>n.join("/").replace(/\/\/+/g,"/"),kw=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),Nw=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,xw=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function Dw(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var o_=["POST","PUT","PATCH","DELETE"];new Set(o_);var Ow=["GET",...o_];new Set(Ow);var xo=H.createContext(null);xo.displayName="DataRouter";var Ec=H.createContext(null);Ec.displayName="DataRouterState";var a_=H.createContext({isTransitioning:!1});a_.displayName="ViewTransition";var Lw=H.createContext(new Map);Lw.displayName="Fetchers";var Vw=H.createContext(null);Vw.displayName="Await";var $n=H.createContext(null);$n.displayName="Navigation";var sl=H.createContext(null);sl.displayName="Location";var cr=H.createContext({outlet:null,matches:[],isDataRoute:!1});cr.displayName="Route";var ff=H.createContext(null);ff.displayName="RouteError";function bw(n,{relative:e}={}){Ze(Do(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:i}=H.useContext($n),{hash:o,pathname:l,search:h}=ol(n,{relative:e}),f=l;return t!=="/"&&(f=l==="/"?t:Lr([t,l])),i.createHref({pathname:f,search:h,hash:o})}function Do(){return H.useContext(sl)!=null}function Ni(){return Ze(Do(),"useLocation() may be used only in the context of a <Router> component."),H.useContext(sl).location}var l_="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function u_(n){H.useContext($n).static||H.useLayoutEffect(n)}function wc(){let{isDataRoute:n}=H.useContext(cr);return n?Qw():Mw()}function Mw(){Ze(Do(),"useNavigate() may be used only in the context of a <Router> component.");let n=H.useContext(xo),{basename:e,navigator:t}=H.useContext($n),{matches:i}=H.useContext(cr),{pathname:o}=Ni(),l=JSON.stringify(hf(i)),h=H.useRef(!1);return u_(()=>{h.current=!0}),H.useCallback((p,y={})=>{if(Fr(h.current,l_),!h.current)return;if(typeof p=="number"){t.go(p);return}let E=df(p,JSON.parse(l),o,y.relative==="path");n==null&&e!=="/"&&(E.pathname=E.pathname==="/"?e:Lr([e,E.pathname])),(y.replace?t.replace:t.push)(E,y.state,y)},[e,t,l,o,n])}H.createContext(null);function ol(n,{relative:e}={}){let{matches:t}=H.useContext(cr),{pathname:i}=Ni(),o=JSON.stringify(hf(t));return H.useMemo(()=>df(n,JSON.parse(o),i,e==="path"),[n,o,i,e])}function Uw(n,e){return c_(n,e)}function c_(n,e,t,i){var z;Ze(Do(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=H.useContext($n),{matches:l}=H.useContext(cr),h=l[l.length-1],f=h?h.params:{};h&&h.pathname;let p=h?h.pathnameBase:"/";h&&h.route;let y=Ni(),E;if(e){let L=typeof e=="string"?No(e):e;Ze(p==="/"||((z=L.pathname)==null?void 0:z.startsWith(p)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${L.pathname}" was given in the \`location\` prop.`),E=L}else E=y;let T=E.pathname||"/",R=T;if(p!=="/"){let L=p.replace(/^\//,"").split("/");R="/"+T.replace(/^\//,"").split("/").slice(L.length).join("/")}let O=r_(n,{pathname:R}),b=$w(O&&O.map(L=>Object.assign({},L,{params:Object.assign({},f,L.params),pathname:Lr([p,o.encodeLocation?o.encodeLocation(L.pathname).pathname:L.pathname]),pathnameBase:L.pathnameBase==="/"?p:Lr([p,o.encodeLocation?o.encodeLocation(L.pathnameBase).pathname:L.pathnameBase])})),l,t,i);return e&&b?H.createElement(sl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...E},navigationType:"POP"}},b):b}function Fw(){let n=Gw(),e=Dw(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return H.createElement(H.Fragment,null,H.createElement("h2",null,"Unexpected Application Error!"),H.createElement("h3",{style:{fontStyle:"italic"}},e),t?H.createElement("pre",{style:o},t):null,null)}var jw=H.createElement(Fw,null),Bw=class extends H.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){console.error("React Router caught the following error during render",n,e)}render(){return this.state.error!==void 0?H.createElement(cr.Provider,{value:this.props.routeContext},H.createElement(ff.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function zw({routeContext:n,match:e,children:t}){let i=H.useContext(xo);return i&&i.static&&i.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=e.route.id),H.createElement(cr.Provider,{value:n},t)}function $w(n,e=[],t=null,i=null){if(n==null){if(!t)return null;if(t.errors)n=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let o=n,l=t==null?void 0:t.errors;if(l!=null){let p=o.findIndex(y=>y.route.id&&(l==null?void 0:l[y.route.id])!==void 0);Ze(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),o=o.slice(0,Math.min(o.length,p+1))}let h=!1,f=-1;if(t)for(let p=0;p<o.length;p++){let y=o[p];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(f=p),y.route.id){let{loaderData:E,errors:T}=t,R=y.route.loader&&!E.hasOwnProperty(y.route.id)&&(!T||T[y.route.id]===void 0);if(y.route.lazy||R){h=!0,f>=0?o=o.slice(0,f+1):o=[o[0]];break}}}return o.reduceRight((p,y,E)=>{let T,R=!1,O=null,b=null;t&&(T=l&&y.route.id?l[y.route.id]:void 0,O=y.route.errorElement||jw,h&&(f<0&&E===0?(Xw("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),R=!0,b=null):f===E&&(R=!0,b=y.route.hydrateFallbackElement||null)));let z=e.concat(o.slice(0,E+1)),L=()=>{let W;return T?W=O:R?W=b:y.route.Component?W=H.createElement(y.route.Component,null):y.route.element?W=y.route.element:W=p,H.createElement(zw,{match:y,routeContext:{outlet:p,matches:z,isDataRoute:t!=null},children:W})};return t&&(y.route.ErrorBoundary||y.route.errorElement||E===0)?H.createElement(Bw,{location:t.location,revalidation:t.revalidation,component:O,error:T,children:L(),routeContext:{outlet:null,matches:z,isDataRoute:!0}}):L()},null)}function pf(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Hw(n){let e=H.useContext(xo);return Ze(e,pf(n)),e}function Ww(n){let e=H.useContext(Ec);return Ze(e,pf(n)),e}function qw(n){let e=H.useContext(cr);return Ze(e,pf(n)),e}function mf(n){let e=qw(n),t=e.matches[e.matches.length-1];return Ze(t.route.id,`${n} can only be used on routes that contain a unique "id"`),t.route.id}function Kw(){return mf("useRouteId")}function Gw(){var i;let n=H.useContext(ff),e=Ww("useRouteError"),t=mf("useRouteError");return n!==void 0?n:(i=e.errors)==null?void 0:i[t]}function Qw(){let{router:n}=Hw("useNavigate"),e=mf("useNavigate"),t=H.useRef(!1);return u_(()=>{t.current=!0}),H.useCallback(async(o,l={})=>{Fr(t.current,l_),t.current&&(typeof o=="number"?n.navigate(o):await n.navigate(o,{fromRouteId:e,...l}))},[n,e])}var Dg={};function Xw(n,e,t){Dg[n]||(Dg[n]=!0,Fr(!1,t))}H.memo(Yw);function Yw({routes:n,future:e,state:t}){return c_(n,void 0,t,e)}function Jw({to:n,replace:e,state:t,relative:i}){Ze(Do(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=H.useContext($n);Fr(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:l}=H.useContext(cr),{pathname:h}=Ni(),f=wc(),p=df(n,hf(l),h,i==="path"),y=JSON.stringify(p);return H.useEffect(()=>{f(JSON.parse(y),{replace:e,state:t,relative:i})},[f,y,i,e,t]),null}function Md(n){Ze(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Zw({basename:n="/",children:e=null,location:t,navigationType:i="POP",navigator:o,static:l=!1}){Ze(!Do(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=n.replace(/^\/*/,"/"),f=H.useMemo(()=>({basename:h,navigator:o,static:l,future:{}}),[h,o,l]);typeof t=="string"&&(t=No(t));let{pathname:p="/",search:y="",hash:E="",state:T=null,key:R="default"}=t,O=H.useMemo(()=>{let b=Ii(p,h);return b==null?null:{location:{pathname:b,search:y,hash:E,state:T,key:R},navigationType:i}},[h,p,y,E,T,R,i]);return Fr(O!=null,`<Router basename="${h}"> is not able to match the URL "${p}${y}${E}" because it does not start with the basename, so the <Router> won't render anything.`),O==null?null:H.createElement($n.Provider,{value:f},H.createElement(sl.Provider,{children:e,value:O}))}function eT({children:n,location:e}){return Uw(Ud(n),e)}function Ud(n,e=[]){let t=[];return H.Children.forEach(n,(i,o)=>{if(!H.isValidElement(i))return;let l=[...e,o];if(i.type===H.Fragment){t.push.apply(t,Ud(i.props.children,l));return}Ze(i.type===Md,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ze(!i.props.index||!i.props.children,"An index route cannot have child routes.");let h={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(h.children=Ud(i.props.children,l)),t.push(h)}),t}var $u="get",Hu="application/x-www-form-urlencoded";function Tc(n){return n!=null&&typeof n.tagName=="string"}function tT(n){return Tc(n)&&n.tagName.toLowerCase()==="button"}function nT(n){return Tc(n)&&n.tagName.toLowerCase()==="form"}function rT(n){return Tc(n)&&n.tagName.toLowerCase()==="input"}function iT(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function sT(n,e){return n.button===0&&(!e||e==="_self")&&!iT(n)}var Ou=null;function oT(){if(Ou===null)try{new FormData(document.createElement("form"),0),Ou=!1}catch{Ou=!0}return Ou}var aT=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function wd(n){return n!=null&&!aT.has(n)?(Fr(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Hu}"`),null):n}function lT(n,e){let t,i,o,l,h;if(nT(n)){let f=n.getAttribute("action");i=f?Ii(f,e):null,t=n.getAttribute("method")||$u,o=wd(n.getAttribute("enctype"))||Hu,l=new FormData(n)}else if(tT(n)||rT(n)&&(n.type==="submit"||n.type==="image")){let f=n.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=n.getAttribute("formaction")||f.getAttribute("action");if(i=p?Ii(p,e):null,t=n.getAttribute("formmethod")||f.getAttribute("method")||$u,o=wd(n.getAttribute("formenctype"))||wd(f.getAttribute("enctype"))||Hu,l=new FormData(f,n),!oT()){let{name:y,type:E,value:T}=n;if(E==="image"){let R=y?`${y}.`:"";l.append(`${R}x`,"0"),l.append(`${R}y`,"0")}else y&&l.append(y,T)}}else{if(Tc(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=$u,i=null,o=Hu,h=n}return l&&o==="text/plain"&&(h=l,l=void 0),{action:i,method:t.toLowerCase(),encType:o,formData:l,body:h}}function gf(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}async function uT(n,e){if(n.id in e)return e[n.id];try{let t=await import(n.module);return e[n.id]=t,t}catch(t){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function cT(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function hT(n,e,t){let i=await Promise.all(n.map(async o=>{let l=e.routes[o.route.id];if(l){let h=await uT(l,t);return h.links?h.links():[]}return[]}));return mT(i.flat(1).filter(cT).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function Og(n,e,t,i,o,l){let h=(p,y)=>t[y]?p.route.id!==t[y].route.id:!0,f=(p,y)=>{var E;return t[y].pathname!==p.pathname||((E=t[y].route.path)==null?void 0:E.endsWith("*"))&&t[y].params["*"]!==p.params["*"]};return l==="assets"?e.filter((p,y)=>h(p,y)||f(p,y)):l==="data"?e.filter((p,y)=>{var T;let E=i.routes[p.route.id];if(!E||!E.hasLoader)return!1;if(h(p,y)||f(p,y))return!0;if(p.route.shouldRevalidate){let R=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((T=t[0])==null?void 0:T.params)||{},nextUrl:new URL(n,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof R=="boolean")return R}return!0}):[]}function dT(n,e){return fT(n.map(t=>{let i=e.routes[t.route.id];if(!i)return[];let o=[i.module];return i.imports&&(o=o.concat(i.imports)),o}).flat(1))}function fT(n){return[...new Set(n)]}function pT(n){let e={},t=Object.keys(n).sort();for(let i of t)e[i]=n[i];return e}function mT(n,e){let t=new Set;return new Set(e),n.reduce((i,o)=>{let l=JSON.stringify(pT(o));return t.has(l)||(t.add(l),i.push({key:l,link:o})),i},[])}function gT(n){let e=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return e.pathname==="/"?e.pathname="_root.data":e.pathname=`${e.pathname.replace(/\/$/,"")}.data`,e}function yT(){let n=H.useContext(xo);return gf(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function _T(){let n=H.useContext(Ec);return gf(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var yf=H.createContext(void 0);yf.displayName="FrameworkContext";function h_(){let n=H.useContext(yf);return gf(n,"You must render this element inside a <HydratedRouter> element"),n}function vT(n,e){let t=H.useContext(yf),[i,o]=H.useState(!1),[l,h]=H.useState(!1),{onFocus:f,onBlur:p,onMouseEnter:y,onMouseLeave:E,onTouchStart:T}=e,R=H.useRef(null);H.useEffect(()=>{if(n==="render"&&h(!0),n==="viewport"){let z=W=>{W.forEach(te=>{h(te.isIntersecting)})},L=new IntersectionObserver(z,{threshold:.5});return R.current&&L.observe(R.current),()=>{L.disconnect()}}},[n]),H.useEffect(()=>{if(i){let z=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(z)}}},[i]);let O=()=>{o(!0)},b=()=>{o(!1),h(!1)};return t?n!=="intent"?[l,R,{}]:[l,R,{onFocus:Va(f,O),onBlur:Va(p,b),onMouseEnter:Va(y,O),onMouseLeave:Va(E,b),onTouchStart:Va(T,O)}]:[!1,R,{}]}function Va(n,e){return t=>{n&&n(t),t.defaultPrevented||e(t)}}function ET({page:n,...e}){let{router:t}=yT(),i=H.useMemo(()=>r_(t.routes,n,t.basename),[t.routes,n,t.basename]);return i?H.createElement(TT,{page:n,matches:i,...e}):(console.warn(`Tried to prefetch ${n} but no routes matched.`),null)}function wT(n){let{manifest:e,routeModules:t}=h_(),[i,o]=H.useState([]);return H.useEffect(()=>{let l=!1;return hT(n,e,t).then(h=>{l||o(h)}),()=>{l=!0}},[n,e,t]),i}function TT({page:n,matches:e,...t}){let i=Ni(),{manifest:o,routeModules:l}=h_(),{loaderData:h,matches:f}=_T(),p=H.useMemo(()=>Og(n,e,f,o,i,"data"),[n,e,f,o,i]),y=H.useMemo(()=>Og(n,e,f,o,i,"assets"),[n,e,f,o,i]),E=H.useMemo(()=>{if(n===i.pathname+i.search+i.hash)return[];let O=new Set,b=!1;if(e.forEach(L=>{var te;let W=o.routes[L.route.id];!W||!W.hasLoader||(!p.some(ne=>ne.route.id===L.route.id)&&L.route.id in h&&((te=l[L.route.id])!=null&&te.shouldRevalidate)||W.hasClientLoader?b=!0:O.add(L.route.id))}),O.size===0)return[];let z=gT(n);return b&&O.size>0&&z.searchParams.set("_routes",e.filter(L=>O.has(L.route.id)).map(L=>L.route.id).join(",")),[z.pathname+z.search]},[h,i,o,p,e,n,l]),T=H.useMemo(()=>dT(y,o),[y,o]),R=wT(y);return H.createElement(H.Fragment,null,E.map(O=>H.createElement("link",{key:O,rel:"prefetch",as:"fetch",href:O,...t})),T.map(O=>H.createElement("link",{key:O,rel:"modulepreload",href:O,...t})),R.map(({key:O,link:b})=>H.createElement("link",{key:O,...b})))}function IT(...n){return e=>{n.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var d_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{d_&&(window.__reactRouterVersion="7.0.1")}catch{}function ST({basename:n,children:e,window:t}){let i=H.useRef();i.current==null&&(i.current=cw({window:t,v5Compat:!0}));let o=i.current,[l,h]=H.useState({action:o.action,location:o.location}),f=H.useCallback(p=>{H.startTransition(()=>h(p))},[h]);return H.useLayoutEffect(()=>o.listen(f),[o,f]),H.createElement(Zw,{basename:n,children:e,location:l.location,navigationType:l.action,navigator:o})}var f_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,p_=H.forwardRef(function({onClick:e,discover:t="render",prefetch:i="none",relative:o,reloadDocument:l,replace:h,state:f,target:p,to:y,preventScrollReset:E,viewTransition:T,...R},O){let{basename:b}=H.useContext($n),z=typeof y=="string"&&f_.test(y),L,W=!1;if(typeof y=="string"&&z&&(L=y,d_))try{let A=new URL(window.location.href),k=y.startsWith("//")?new URL(A.protocol+y):new URL(y),D=Ii(k.pathname,b);k.origin===A.origin&&D!=null?y=D+k.search+k.hash:W=!0}catch{Fr(!1,`<Link to="${y}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let te=bw(y,{relative:o}),[ne,se,Ie]=vT(i,R),_e=PT(y,{replace:h,state:f,target:p,preventScrollReset:E,relative:o,viewTransition:T});function N(A){e&&e(A),A.defaultPrevented||_e(A)}let I=H.createElement("a",{...R,...Ie,href:L||te,onClick:W||l?e:N,ref:IT(O,se),target:p,"data-discover":!z&&t==="render"?"true":void 0});return ne&&!z?H.createElement(H.Fragment,null,I,H.createElement(ET,{page:te})):I});p_.displayName="Link";var RT=H.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:i="",end:o=!1,style:l,to:h,viewTransition:f,children:p,...y},E){let T=ol(h,{relative:y.relative}),R=Ni(),O=H.useContext(Ec),{navigator:b,basename:z}=H.useContext($n),L=O!=null&&OT(T)&&f===!0,W=b.encodeLocation?b.encodeLocation(T).pathname:T.pathname,te=R.pathname,ne=O&&O.navigation&&O.navigation.location?O.navigation.location.pathname:null;t||(te=te.toLowerCase(),ne=ne?ne.toLowerCase():null,W=W.toLowerCase()),ne&&z&&(ne=Ii(ne,z)||ne);const se=W!=="/"&&W.endsWith("/")?W.length-1:W.length;let Ie=te===W||!o&&te.startsWith(W)&&te.charAt(se)==="/",_e=ne!=null&&(ne===W||!o&&ne.startsWith(W)&&ne.charAt(W.length)==="/"),N={isActive:Ie,isPending:_e,isTransitioning:L},I=Ie?e:void 0,A;typeof i=="function"?A=i(N):A=[i,Ie?"active":null,_e?"pending":null,L?"transitioning":null].filter(Boolean).join(" ");let k=typeof l=="function"?l(N):l;return H.createElement(p_,{...y,"aria-current":I,className:A,ref:E,style:k,to:h,viewTransition:f},typeof p=="function"?p(N):p)});RT.displayName="NavLink";var AT=H.forwardRef(({discover:n="render",fetcherKey:e,navigate:t,reloadDocument:i,replace:o,state:l,method:h=$u,action:f,onSubmit:p,relative:y,preventScrollReset:E,viewTransition:T,...R},O)=>{let b=xT(),z=DT(f,{relative:y}),L=h.toLowerCase()==="get"?"get":"post",W=typeof f=="string"&&f_.test(f),te=ne=>{if(p&&p(ne),ne.defaultPrevented)return;ne.preventDefault();let se=ne.nativeEvent.submitter,Ie=(se==null?void 0:se.getAttribute("formmethod"))||h;b(se||ne.currentTarget,{fetcherKey:e,method:Ie,navigate:t,replace:o,state:l,relative:y,preventScrollReset:E,viewTransition:T})};return H.createElement("form",{ref:O,method:L,action:z,onSubmit:i?p:te,...R,"data-discover":!W&&n==="render"?"true":void 0})});AT.displayName="Form";function CT(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function m_(n){let e=H.useContext(xo);return Ze(e,CT(n)),e}function PT(n,{target:e,replace:t,state:i,preventScrollReset:o,relative:l,viewTransition:h}={}){let f=wc(),p=Ni(),y=ol(n,{relative:l});return H.useCallback(E=>{if(sT(E,e)){E.preventDefault();let T=t!==void 0?t:Qa(p)===Qa(y);f(n,{replace:T,state:i,preventScrollReset:o,relative:l,viewTransition:h})}},[p,f,y,t,i,e,n,o,l,h])}var kT=0,NT=()=>`__${String(++kT)}__`;function xT(){let{router:n}=m_("useSubmit"),{basename:e}=H.useContext($n),t=Kw();return H.useCallback(async(i,o={})=>{let{action:l,method:h,encType:f,formData:p,body:y}=lT(i,e);if(o.navigate===!1){let E=o.fetcherKey||NT();await n.fetch(E,t,o.action||l,{preventScrollReset:o.preventScrollReset,formData:p,body:y,formMethod:o.method||h,formEncType:o.encType||f,flushSync:o.flushSync})}else await n.navigate(o.action||l,{preventScrollReset:o.preventScrollReset,formData:p,body:y,formMethod:o.method||h,formEncType:o.encType||f,replace:o.replace,state:o.state,fromRouteId:t,flushSync:o.flushSync,viewTransition:o.viewTransition})},[n,e,t])}function DT(n,{relative:e}={}){let{basename:t}=H.useContext($n),i=H.useContext(cr);Ze(i,"useFormAction must be used inside a RouteContext");let[o]=i.matches.slice(-1),l={...ol(n||".",{relative:e})},h=Ni();if(n==null){l.search=h.search;let f=new URLSearchParams(l.search),p=f.getAll("index");if(p.some(E=>E==="")){f.delete("index"),p.filter(T=>T).forEach(T=>f.append("index",T));let E=f.toString();l.search=E?`?${E}`:""}}return(!n||n===".")&&o.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(l.pathname=l.pathname==="/"?t:Lr([t,l.pathname])),Qa(l)}function OT(n,e={}){let t=H.useContext(a_);Ze(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=m_("useViewTransitionState"),o=ol(n,{relative:e.relative});if(!t.isTransitioning)return!1;let l=Ii(t.currentLocation.pathname,i)||t.currentLocation.pathname,h=Ii(t.nextLocation.pathname,i)||t.nextLocation.pathname;return tc(o.pathname,h)!=null||tc(o.pathname,l)!=null}new TextEncoder;var Lg={};/**
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
 */const g_=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let o=n.charCodeAt(i);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},LT=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const o=n[t++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const l=n[t++];e[i++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=n[t++],h=n[t++],f=n[t++],p=((o&7)<<18|(l&63)<<12|(h&63)<<6|f&63)-65536;e[i++]=String.fromCharCode(55296+(p>>10)),e[i++]=String.fromCharCode(56320+(p&1023))}else{const l=n[t++],h=n[t++];e[i++]=String.fromCharCode((o&15)<<12|(l&63)<<6|h&63)}}return e.join("")},y_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<n.length;o+=3){const l=n[o],h=o+1<n.length,f=h?n[o+1]:0,p=o+2<n.length,y=p?n[o+2]:0,E=l>>2,T=(l&3)<<4|f>>4;let R=(f&15)<<2|y>>6,O=y&63;p||(O=64,h||(R=64)),i.push(t[E],t[T],t[R],t[O])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(g_(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):LT(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<n.length;){const l=t[n.charAt(o++)],f=o<n.length?t[n.charAt(o)]:0;++o;const y=o<n.length?t[n.charAt(o)]:64;++o;const T=o<n.length?t[n.charAt(o)]:64;if(++o,l==null||f==null||y==null||T==null)throw new VT;const R=l<<2|f>>4;if(i.push(R),y!==64){const O=f<<4&240|y>>2;if(i.push(O),T!==64){const b=y<<6&192|T;i.push(b)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class VT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const bT=function(n){const e=g_(n);return y_.encodeByteArray(e,!0)},nc=function(n){return bT(n).replace(/\./g,"")},__=function(n){try{return y_.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function MT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const UT=()=>MT().__FIREBASE_DEFAULTS__,FT=()=>{if(typeof process>"u"||typeof Lg>"u")return;const n=Lg.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},jT=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&__(n[1]);return e&&JSON.parse(e)},Ic=()=>{try{return UT()||FT()||jT()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},v_=n=>{var e,t;return(t=(e=Ic())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},E_=n=>{const e=v_(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},w_=()=>{var n;return(n=Ic())===null||n===void 0?void 0:n.config},T_=n=>{var e;return(e=Ic())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class BT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function I_(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",o=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},n);return[nc(JSON.stringify(t)),nc(JSON.stringify(h)),""].join(".")}/**
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
 */function $t(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function zT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($t())}function $T(){var n;const e=(n=Ic())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function HT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function WT(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function qT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function KT(){const n=$t();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function GT(){return!$T()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function QT(){try{return typeof indexedDB=="object"}catch{return!1}}function XT(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}/**
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
 */const YT="FirebaseError";class hr extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=YT,Object.setPrototypeOf(this,hr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,al.prototype.create)}}class al{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],h=l?JT(l,i):"Error",f=`${this.serviceName}: ${h} (${o}).`;return new hr(o,f,i)}}function JT(n,e){return n.replace(ZT,(t,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const ZT=/\{\$([^}]+)}/g;function eI(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function rc(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const o of t){if(!i.includes(o))return!1;const l=n[o],h=e[o];if(Vg(l)&&Vg(h)){if(!rc(l,h))return!1}else if(l!==h)return!1}for(const o of i)if(!t.includes(o))return!1;return!0}function Vg(n){return n!==null&&typeof n=="object"}/**
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
 */function ll(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Ma(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[o,l]=i.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function Ua(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function tI(n,e){const t=new nI(n,e);return t.subscribe.bind(t)}class nI{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let o;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");rI(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:i},o.next===void 0&&(o.next=Td),o.error===void 0&&(o.error=Td),o.complete===void 0&&(o.complete=Td);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function rI(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Td(){}/**
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
 */function Pt(n){return n&&n._delegate?n._delegate:n}class Si{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const os="[DEFAULT]";/**
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
 */class iI{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new BT;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(oI(e))try{this.getOrInitializeService({instanceIdentifier:os})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});i.resolve(l)}catch{}}}}clearInstance(e=os){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=os){return this.instances.has(e)}getOptions(e=os){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[l,h]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(l);i===f&&h.resolve(o)}return o}onInit(e,t){var i;const o=this.normalizeInstanceIdentifier(t),l=(i=this.onInitCallbacks.get(o))!==null&&i!==void 0?i:new Set;l.add(e),this.onInitCallbacks.set(o,l);const h=this.instances.get(o);return h&&e(h,o),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const o of i)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:sI(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=os){return this.component?this.component.multipleInstances?e:os:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function sI(n){return n===os?void 0:n}function oI(n){return n.instantiationMode==="EAGER"}/**
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
 */class aI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new iI(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var xe;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(xe||(xe={}));const lI={debug:xe.DEBUG,verbose:xe.VERBOSE,info:xe.INFO,warn:xe.WARN,error:xe.ERROR,silent:xe.SILENT},uI=xe.INFO,cI={[xe.DEBUG]:"log",[xe.VERBOSE]:"log",[xe.INFO]:"info",[xe.WARN]:"warn",[xe.ERROR]:"error"},hI=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),o=cI[e];if(o)console[o](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class _f{constructor(e){this.name=e,this._logLevel=uI,this._logHandler=hI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in xe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?lI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,xe.DEBUG,...e),this._logHandler(this,xe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,xe.VERBOSE,...e),this._logHandler(this,xe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,xe.INFO,...e),this._logHandler(this,xe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,xe.WARN,...e),this._logHandler(this,xe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,xe.ERROR,...e),this._logHandler(this,xe.ERROR,...e)}}const dI=(n,e)=>e.some(t=>n instanceof t);let bg,Mg;function fI(){return bg||(bg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function pI(){return Mg||(Mg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const S_=new WeakMap,Fd=new WeakMap,R_=new WeakMap,Id=new WeakMap,vf=new WeakMap;function mI(n){const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("success",l),n.removeEventListener("error",h)},l=()=>{t(yi(n.result)),o()},h=()=>{i(n.error),o()};n.addEventListener("success",l),n.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&S_.set(t,n)}).catch(()=>{}),vf.set(e,n),e}function gI(n){if(Fd.has(n))return;const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",h),n.removeEventListener("abort",h)},l=()=>{t(),o()},h=()=>{i(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",l),n.addEventListener("error",h),n.addEventListener("abort",h)});Fd.set(n,e)}let jd={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Fd.get(n);if(e==="objectStoreNames")return n.objectStoreNames||R_.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return yi(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function yI(n){jd=n(jd)}function _I(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Sd(this),e,...t);return R_.set(i,e.sort?e.sort():[e]),yi(i)}:pI().includes(n)?function(...e){return n.apply(Sd(this),e),yi(S_.get(this))}:function(...e){return yi(n.apply(Sd(this),e))}}function vI(n){return typeof n=="function"?_I(n):(n instanceof IDBTransaction&&gI(n),dI(n,fI())?new Proxy(n,jd):n)}function yi(n){if(n instanceof IDBRequest)return mI(n);if(Id.has(n))return Id.get(n);const e=vI(n);return e!==n&&(Id.set(n,e),vf.set(e,n)),e}const Sd=n=>vf.get(n);function EI(n,e,{blocked:t,upgrade:i,blocking:o,terminated:l}={}){const h=indexedDB.open(n,e),f=yi(h);return i&&h.addEventListener("upgradeneeded",p=>{i(yi(h.result),p.oldVersion,p.newVersion,yi(h.transaction),p)}),t&&h.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),f.then(p=>{l&&p.addEventListener("close",()=>l()),o&&p.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),f}const wI=["get","getKey","getAll","getAllKeys","count"],TI=["put","add","delete","clear"],Rd=new Map;function Ug(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Rd.get(e))return Rd.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,o=TI.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(o||wI.includes(t)))return;const l=async function(h,...f){const p=this.transaction(h,o?"readwrite":"readonly");let y=p.store;return i&&(y=y.index(f.shift())),(await Promise.all([y[t](...f),o&&p.done]))[0]};return Rd.set(e,l),l}yI(n=>({...n,get:(e,t,i)=>Ug(e,t)||n.get(e,t,i),has:(e,t)=>!!Ug(e,t)||n.has(e,t)}));/**
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
 */class II{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(SI(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function SI(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Bd="@firebase/app",Fg="0.10.16";/**
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
 */const Vr=new _f("@firebase/app"),RI="@firebase/app-compat",AI="@firebase/analytics-compat",CI="@firebase/analytics",PI="@firebase/app-check-compat",kI="@firebase/app-check",NI="@firebase/auth",xI="@firebase/auth-compat",DI="@firebase/database",OI="@firebase/data-connect",LI="@firebase/database-compat",VI="@firebase/functions",bI="@firebase/functions-compat",MI="@firebase/installations",UI="@firebase/installations-compat",FI="@firebase/messaging",jI="@firebase/messaging-compat",BI="@firebase/performance",zI="@firebase/performance-compat",$I="@firebase/remote-config",HI="@firebase/remote-config-compat",WI="@firebase/storage",qI="@firebase/storage-compat",KI="@firebase/firestore",GI="@firebase/vertexai",QI="@firebase/firestore-compat",XI="firebase",YI="11.0.2";/**
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
 */const zd="[DEFAULT]",JI={[Bd]:"fire-core",[RI]:"fire-core-compat",[CI]:"fire-analytics",[AI]:"fire-analytics-compat",[kI]:"fire-app-check",[PI]:"fire-app-check-compat",[NI]:"fire-auth",[xI]:"fire-auth-compat",[DI]:"fire-rtdb",[OI]:"fire-data-connect",[LI]:"fire-rtdb-compat",[VI]:"fire-fn",[bI]:"fire-fn-compat",[MI]:"fire-iid",[UI]:"fire-iid-compat",[FI]:"fire-fcm",[jI]:"fire-fcm-compat",[BI]:"fire-perf",[zI]:"fire-perf-compat",[$I]:"fire-rc",[HI]:"fire-rc-compat",[WI]:"fire-gcs",[qI]:"fire-gcs-compat",[KI]:"fire-fst",[QI]:"fire-fst-compat",[GI]:"fire-vertex","fire-js":"fire-js",[XI]:"fire-js-all"};/**
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
 */const ic=new Map,ZI=new Map,$d=new Map;function jg(n,e){try{n.container.addComponent(e)}catch(t){Vr.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function cs(n){const e=n.name;if($d.has(e))return Vr.debug(`There were multiple attempts to register component ${e}.`),!1;$d.set(e,n);for(const t of ic.values())jg(t,n);for(const t of ZI.values())jg(t,n);return!0}function Sc(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Nr(n){return n.settings!==void 0}/**
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
 */const eS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},_i=new al("app","Firebase",eS);/**
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
 */class tS{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Si("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw _i.create("app-deleted",{appName:this._name})}}/**
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
 */const ps=YI;function A_(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:zd,automaticDataCollectionEnabled:!1},e),o=i.name;if(typeof o!="string"||!o)throw _i.create("bad-app-name",{appName:String(o)});if(t||(t=w_()),!t)throw _i.create("no-options");const l=ic.get(o);if(l){if(rc(t,l.options)&&rc(i,l.config))return l;throw _i.create("duplicate-app",{appName:o})}const h=new aI(o);for(const p of $d.values())h.addComponent(p);const f=new tS(t,i,h);return ic.set(o,f),f}function Ef(n=zd){const e=ic.get(n);if(!e&&n===zd&&w_())return A_();if(!e)throw _i.create("no-app",{appName:n});return e}function nr(n,e,t){var i;let o=(i=JI[n])!==null&&i!==void 0?i:n;t&&(o+=`-${t}`);const l=o.match(/\s|\//),h=e.match(/\s|\//);if(l||h){const f=[`Unable to register library "${o}" with version "${e}":`];l&&f.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&h&&f.push("and"),h&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Vr.warn(f.join(" "));return}cs(new Si(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const nS="firebase-heartbeat-database",rS=1,Xa="firebase-heartbeat-store";let Ad=null;function C_(){return Ad||(Ad=EI(nS,rS,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Xa)}catch(t){console.warn(t)}}}}).catch(n=>{throw _i.create("idb-open",{originalErrorMessage:n.message})})),Ad}async function iS(n){try{const t=(await C_()).transaction(Xa),i=await t.objectStore(Xa).get(P_(n));return await t.done,i}catch(e){if(e instanceof hr)Vr.warn(e.message);else{const t=_i.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Vr.warn(t.message)}}}async function Bg(n,e){try{const i=(await C_()).transaction(Xa,"readwrite");await i.objectStore(Xa).put(e,P_(n)),await i.done}catch(t){if(t instanceof hr)Vr.warn(t.message);else{const i=_i.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Vr.warn(i.message)}}}function P_(n){return`${n.name}!${n.options.appId}`}/**
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
 */const sS=1024,oS=30*24*60*60*1e3;class aS{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new uS(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=zg();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(h=>h.date===l)?void 0:(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(h=>{const f=new Date(h.date).valueOf();return Date.now()-f<=oS}),this._storage.overwrite(this._heartbeatsCache))}catch(i){Vr.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=zg(),{heartbeatsToSend:i,unsentEntries:o}=lS(this._heartbeatsCache.heartbeats),l=nc(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Vr.warn(t),""}}}function zg(){return new Date().toISOString().substring(0,10)}function lS(n,e=sS){const t=[];let i=n.slice();for(const o of n){const l=t.find(h=>h.agent===o.agent);if(l){if(l.dates.push(o.date),$g(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),$g(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class uS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return QT()?XT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await iS(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Bg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Bg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function $g(n){return nc(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function cS(n){cs(new Si("platform-logger",e=>new II(e),"PRIVATE")),cs(new Si("heartbeat",e=>new aS(e),"PRIVATE")),nr(Bd,Fg,n),nr(Bd,Fg,"esm2017"),nr("fire-js","")}cS("");function wf(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(n);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(n,i[o])&&(t[i[o]]=n[i[o]]);return t}function k_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const hS=k_,N_=new al("auth","Firebase",k_());/**
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
 */const sc=new _f("@firebase/auth");function dS(n,...e){sc.logLevel<=xe.WARN&&sc.warn(`Auth (${ps}): ${n}`,...e)}function Wu(n,...e){sc.logLevel<=xe.ERROR&&sc.error(`Auth (${ps}): ${n}`,...e)}/**
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
 */function zn(n,...e){throw Tf(n,...e)}function rr(n,...e){return Tf(n,...e)}function x_(n,e,t){const i=Object.assign(Object.assign({},hS()),{[e]:t});return new al("auth","Firebase",i).create(e,{appName:n.name})}function vi(n){return x_(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Tf(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return N_.create(n,...e)}function Ee(n,e,...t){if(!n)throw Tf(e,...t)}function xr(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Wu(e),new Error(e)}function br(n,e){n||xr(e)}/**
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
 */function Hd(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function fS(){return Hg()==="http:"||Hg()==="https:"}function Hg(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function pS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(fS()||WT()||"connection"in navigator)?navigator.onLine:!0}function mS(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class ul{constructor(e,t){this.shortDelay=e,this.longDelay=t,br(t>e,"Short delay should be less than long delay!"),this.isMobile=zT()||qT()}get(){return pS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function If(n,e){br(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class D_{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;xr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;xr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;xr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const gS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const yS=new ul(3e4,6e4);function ms(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function xi(n,e,t,i,o={}){return O_(n,o,async()=>{let l={},h={};i&&(e==="GET"?h=i:l={body:JSON.stringify(i)});const f=ll(Object.assign({key:n.config.apiKey},h)).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const y=Object.assign({method:e,headers:p},l);return HT()||(y.referrerPolicy="no-referrer"),D_.fetch()(L_(n,n.config.apiHost,t,f),y)})}async function O_(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},gS),e);try{const o=new vS(n),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await l.json();if("needConfirmation"in h)throw Lu(n,"account-exists-with-different-credential",h);if(l.ok&&!("errorMessage"in h))return h;{const f=l.ok?h.errorMessage:h.error.message,[p,y]=f.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw Lu(n,"credential-already-in-use",h);if(p==="EMAIL_EXISTS")throw Lu(n,"email-already-in-use",h);if(p==="USER_DISABLED")throw Lu(n,"user-disabled",h);const E=i[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw x_(n,E,y);zn(n,E)}}catch(o){if(o instanceof hr)throw o;zn(n,"network-request-failed",{message:String(o)})}}async function Rc(n,e,t,i,o={}){const l=await xi(n,e,t,i,o);return"mfaPendingCredential"in l&&zn(n,"multi-factor-auth-required",{_serverResponse:l}),l}function L_(n,e,t,i){const o=`${e}${t}?${i}`;return n.config.emulator?If(n.config,o):`${n.config.apiScheme}://${o}`}function _S(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class vS{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(rr(this.auth,"network-request-failed")),yS.get())})}}function Lu(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const o=rr(n,e,i);return o.customData._tokenResponse=t,o}function Wg(n){return n!==void 0&&n.enterprise!==void 0}class ES{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return _S(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function wS(n,e){return xi(n,"GET","/v2/recaptchaConfig",ms(n,e))}/**
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
 */async function TS(n,e){return xi(n,"POST","/v1/accounts:delete",e)}async function V_(n,e){return xi(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function $a(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function IS(n,e=!1){const t=Pt(n),i=await t.getIdToken(e),o=Sf(i);Ee(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,h=l==null?void 0:l.sign_in_provider;return{claims:o,token:i,authTime:$a(Cd(o.auth_time)),issuedAtTime:$a(Cd(o.iat)),expirationTime:$a(Cd(o.exp)),signInProvider:h||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function Cd(n){return Number(n)*1e3}function Sf(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return Wu("JWT malformed, contained fewer than 3 sections"),null;try{const o=__(t);return o?JSON.parse(o):(Wu("Failed to decode base64 JWT payload"),null)}catch(o){return Wu("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function qg(n){const e=Sf(n);return Ee(e,"internal-error"),Ee(typeof e.exp<"u","internal-error"),Ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ya(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof hr&&SS(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function SS({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class RS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Wd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=$a(this.lastLoginAt),this.creationTime=$a(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function oc(n){var e;const t=n.auth,i=await n.getIdToken(),o=await Ya(n,V_(t,{idToken:i}));Ee(o==null?void 0:o.users.length,t,"internal-error");const l=o.users[0];n._notifyReloadListener(l);const h=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?b_(l.providerUserInfo):[],f=CS(n.providerData,h),p=n.isAnonymous,y=!(n.email&&l.passwordHash)&&!(f!=null&&f.length),E=p?y:!1,T={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:f,metadata:new Wd(l.createdAt,l.lastLoginAt),isAnonymous:E};Object.assign(n,T)}async function AS(n){const e=Pt(n);await oc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function CS(n,e){return[...n.filter(i=>!e.some(o=>o.providerId===i.providerId)),...e]}function b_(n){return n.map(e=>{var{providerId:t}=e,i=wf(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function PS(n,e){const t=await O_(n,{},async()=>{const i=ll({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=n.config,h=L_(n,o,"/v1/token",`key=${l}`),f=await n._getAdditionalHeaders();return f["Content-Type"]="application/x-www-form-urlencoded",D_.fetch()(h,{method:"POST",headers:f,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function kS(n,e){return xi(n,"POST","/v2/accounts:revokeToken",ms(n,e))}/**
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
 */class yo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ee(e.idToken,"internal-error"),Ee(typeof e.idToken<"u","internal-error"),Ee(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):qg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Ee(e.length!==0,"internal-error");const t=qg(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:o,expiresIn:l}=await PS(e,t);this.updateTokensAndExpiration(i,o,Number(l))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:o,expirationTime:l}=t,h=new yo;return i&&(Ee(typeof i=="string","internal-error",{appName:e}),h.refreshToken=i),o&&(Ee(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),l&&(Ee(typeof l=="number","internal-error",{appName:e}),h.expirationTime=l),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new yo,this.toJSON())}_performRefresh(){return xr("not implemented")}}/**
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
 */function ci(n,e){Ee(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Dr{constructor(e){var{uid:t,auth:i,stsTokenManager:o}=e,l=wf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new RS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new Wd(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await Ya(this,this.stsTokenManager.getToken(this.auth,e));return Ee(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return IS(this,e)}reload(){return AS(this)}_assign(e){this!==e&&(Ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Dr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await oc(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Nr(this.auth.app))return Promise.reject(vi(this.auth));const e=await this.getIdToken();return await Ya(this,TS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,o,l,h,f,p,y,E;const T=(i=t.displayName)!==null&&i!==void 0?i:void 0,R=(o=t.email)!==null&&o!==void 0?o:void 0,O=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,b=(h=t.photoURL)!==null&&h!==void 0?h:void 0,z=(f=t.tenantId)!==null&&f!==void 0?f:void 0,L=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,W=(y=t.createdAt)!==null&&y!==void 0?y:void 0,te=(E=t.lastLoginAt)!==null&&E!==void 0?E:void 0,{uid:ne,emailVerified:se,isAnonymous:Ie,providerData:_e,stsTokenManager:N}=t;Ee(ne&&N,e,"internal-error");const I=yo.fromJSON(this.name,N);Ee(typeof ne=="string",e,"internal-error"),ci(T,e.name),ci(R,e.name),Ee(typeof se=="boolean",e,"internal-error"),Ee(typeof Ie=="boolean",e,"internal-error"),ci(O,e.name),ci(b,e.name),ci(z,e.name),ci(L,e.name),ci(W,e.name),ci(te,e.name);const A=new Dr({uid:ne,auth:e,email:R,emailVerified:se,displayName:T,isAnonymous:Ie,photoURL:b,phoneNumber:O,tenantId:z,stsTokenManager:I,createdAt:W,lastLoginAt:te});return _e&&Array.isArray(_e)&&(A.providerData=_e.map(k=>Object.assign({},k))),L&&(A._redirectEventId=L),A}static async _fromIdTokenResponse(e,t,i=!1){const o=new yo;o.updateFromServerResponse(t);const l=new Dr({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:i});return await oc(l),l}static async _fromGetAccountInfoResponse(e,t,i){const o=t.users[0];Ee(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?b_(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),f=new yo;f.updateFromIdToken(i);const p=new Dr({uid:o.localId,auth:e,stsTokenManager:f,isAnonymous:h}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new Wd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(p,y),p}}/**
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
 */const Kg=new Map;function Or(n){br(n instanceof Function,"Expected a class definition");let e=Kg.get(n);return e?(br(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Kg.set(n,e),e)}/**
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
 */class M_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}M_.type="NONE";const Gg=M_;/**
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
 */function qu(n,e,t){return`firebase:${n}:${e}:${t}`}class _o{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:o,name:l}=this.auth;this.fullUserKey=qu(this.userKey,o.apiKey,l),this.fullPersistenceKey=qu("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Dr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new _o(Or(Gg),e,i);const o=(await Promise.all(t.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let l=o[0]||Or(Gg);const h=qu(i,e.config.apiKey,e.name);let f=null;for(const y of t)try{const E=await y._get(h);if(E){const T=Dr._fromJSON(e,E);y!==l&&(f=T),l=y;break}}catch{}const p=o.filter(y=>y._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new _o(l,e,i):(l=p[0],f&&await l._set(h,f.toJSON()),await Promise.all(t.map(async y=>{if(y!==l)try{await y._remove(h)}catch{}})),new _o(l,e,i))}}/**
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
 */function Qg(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(B_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(U_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if($_(e))return"Blackberry";if(H_(e))return"Webos";if(F_(e))return"Safari";if((e.includes("chrome/")||j_(e))&&!e.includes("edge/"))return"Chrome";if(z_(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function U_(n=$t()){return/firefox\//i.test(n)}function F_(n=$t()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function j_(n=$t()){return/crios\//i.test(n)}function B_(n=$t()){return/iemobile/i.test(n)}function z_(n=$t()){return/android/i.test(n)}function $_(n=$t()){return/blackberry/i.test(n)}function H_(n=$t()){return/webos/i.test(n)}function Rf(n=$t()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function NS(n=$t()){var e;return Rf(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function xS(){return KT()&&document.documentMode===10}function W_(n=$t()){return Rf(n)||z_(n)||H_(n)||$_(n)||/windows phone/i.test(n)||B_(n)}/**
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
 */function q_(n,e=[]){let t;switch(n){case"Browser":t=Qg($t());break;case"Worker":t=`${Qg($t())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ps}/${i}`}/**
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
 */class DS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=l=>new Promise((h,f)=>{try{const p=e(l);h(p)}catch(p){f(p)}});i.onAbort=t,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function OS(n,e={}){return xi(n,"GET","/v2/passwordPolicy",ms(n,e))}/**
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
 */const LS=6;class VS{constructor(e){var t,i,o,l;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:LS,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,o,l,h,f;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(i=p.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),p.isValid&&(p.isValid=(o=p.containsLowercaseLetter)!==null&&o!==void 0?o:!0),p.isValid&&(p.isValid=(l=p.containsUppercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(h=p.containsNumericCharacter)!==null&&h!==void 0?h:!0),p.isValid&&(p.isValid=(f=p.containsNonAlphanumericCharacter)!==null&&f!==void 0?f:!0),p}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let o=0;o<e.length;o++)i=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
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
 */class bS{constructor(e,t,i,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Xg(this),this.idTokenSubscription=new Xg(this),this.beforeStateQueue=new DS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=N_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Or(t)),this._initializationPromise=this.queue(async()=>{var i,o;if(!this._deleted&&(this.persistenceManager=await _o.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await V_(this,{idToken:e}),i=await Dr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Nr(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(f,f))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let o=i,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,f=o==null?void 0:o._redirectEventId,p=await this.tryRedirectSignIn(e);(!h||h===f)&&(p!=null&&p.user)&&(o=p.user,l=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return Ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await oc(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=mS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Nr(this.app))return Promise.reject(vi(this));const t=e?Pt(e):null;return t&&Ee(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Nr(this.app)?Promise.reject(vi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Nr(this.app)?Promise.reject(vi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Or(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await OS(this),t=new VS(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new al("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await kS(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Or(e)||this._popupRedirectResolver;Ee(t,this,"argument-error"),this.redirectPersistenceManager=await _o.create(this,[Or(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let h=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ee(f,this,"internal-error"),f.then(()=>{h||l(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,i,o);return()=>{h=!0,p()}}else{const p=e.addObserver(t);return()=>{h=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=q_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&dS(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Oo(n){return Pt(n)}class Xg{constructor(e){this.auth=e,this.observer=null,this.addObserver=tI(t=>this.observer=t)}get next(){return Ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ac={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function MS(n){Ac=n}function K_(n){return Ac.loadJS(n)}function US(){return Ac.recaptchaEnterpriseScript}function FS(){return Ac.gapiScript}function jS(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class BS{constructor(){this.enterprise=new zS}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class zS{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const $S="recaptcha-enterprise",G_="NO_RECAPTCHA";class HS{constructor(e){this.type=$S,this.auth=Oo(e)}async verify(e="verify",t=!1){async function i(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(h,f)=>{wS(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const y=new ES(p);return l.tenantId==null?l._agentRecaptchaConfig=y:l._tenantRecaptchaConfigs[l.tenantId]=y,h(y.siteKey)}}).catch(p=>{f(p)})})}function o(l,h,f){const p=window.grecaptcha;Wg(p)?p.enterprise.ready(()=>{p.enterprise.execute(l,{action:e}).then(y=>{h(y)}).catch(()=>{h(G_)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new BS().execute("siteKey",{action:"verify"}):new Promise((l,h)=>{i(this.auth).then(f=>{if(!t&&Wg(window.grecaptcha))o(f,l,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let p=US();p.length!==0&&(p+=f),K_(p).then(()=>{o(f,l,h)}).catch(y=>{h(y)})}}).catch(f=>{h(f)})})}}async function Yg(n,e,t,i=!1,o=!1){const l=new HS(n);let h;if(o)h=G_;else try{h=await l.verify(t)}catch{h=await l.verify(t,!0)}const f=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in f){const p=f.phoneEnrollmentInfo.phoneNumber,y=f.phoneEnrollmentInfo.recaptchaToken;Object.assign(f,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:y,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in f){const p=f.phoneSignInInfo.recaptchaToken;Object.assign(f,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return f}return i?Object.assign(f,{captchaResp:h}):Object.assign(f,{captchaResponse:h}),Object.assign(f,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(f,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),f}async function Jg(n,e,t,i,o){var l;if(!((l=n._getRecaptchaConfig())===null||l===void 0)&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await Yg(n,e,t,t==="getOobCode");return i(n,h)}else return i(n,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const f=await Yg(n,e,t,t==="getOobCode");return i(n,f)}else return Promise.reject(h)})}/**
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
 */function WS(n,e){const t=Sc(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(rc(l,e??{}))return o;zn(o,"already-initialized")}return t.initialize({options:e})}function qS(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(Or);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function KS(n,e,t){const i=Oo(n);Ee(i._canInitEmulator,i,"emulator-config-failed"),Ee(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!1,l=Q_(e),{host:h,port:f}=GS(e),p=f===null?"":`:${f}`;i.config.emulator={url:`${l}//${h}${p}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:h,port:f,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})}),QS()}function Q_(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function GS(n){const e=Q_(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const l=o[1];return{host:l,port:Zg(i.substr(l.length+1))}}else{const[l,h]=i.split(":");return{host:l,port:Zg(h)}}}function Zg(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function QS(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Af{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return xr("not implemented")}_getIdTokenResponse(e){return xr("not implemented")}_linkToIdToken(e,t){return xr("not implemented")}_getReauthenticationResolver(e){return xr("not implemented")}}async function XS(n,e){return xi(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function YS(n,e){return Rc(n,"POST","/v1/accounts:signInWithPassword",ms(n,e))}/**
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
 */async function JS(n,e){return Rc(n,"POST","/v1/accounts:signInWithEmailLink",ms(n,e))}async function ZS(n,e){return Rc(n,"POST","/v1/accounts:signInWithEmailLink",ms(n,e))}/**
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
 */class Ja extends Af{constructor(e,t,i,o=null){super("password",i),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new Ja(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new Ja(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Jg(e,t,"signInWithPassword",YS);case"emailLink":return JS(e,{email:this._email,oobCode:this._password});default:zn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Jg(e,i,"signUpPassword",XS);case"emailLink":return ZS(e,{idToken:t,email:this._email,oobCode:this._password});default:zn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function vo(n,e){return Rc(n,"POST","/v1/accounts:signInWithIdp",ms(n,e))}/**
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
 */const eR="http://localhost";class hs extends Af{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new hs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):zn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:o}=t,l=wf(t,["providerId","signInMethod"]);if(!i||!o)return null;const h=new hs(i,o);return h.idToken=l.idToken||void 0,h.accessToken=l.accessToken||void 0,h.secret=l.secret,h.nonce=l.nonce,h.pendingToken=l.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return vo(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,vo(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,vo(e,t)}buildRequest(){const e={requestUri:eR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ll(t)}return e}}/**
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
 */function tR(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function nR(n){const e=Ma(Ua(n)).link,t=e?Ma(Ua(e)).deep_link_id:null,i=Ma(Ua(n)).deep_link_id;return(i?Ma(Ua(i)).link:null)||i||t||e||n}class Cf{constructor(e){var t,i,o,l,h,f;const p=Ma(Ua(e)),y=(t=p.apiKey)!==null&&t!==void 0?t:null,E=(i=p.oobCode)!==null&&i!==void 0?i:null,T=tR((o=p.mode)!==null&&o!==void 0?o:null);Ee(y&&E&&T,"argument-error"),this.apiKey=y,this.operation=T,this.code=E,this.continueUrl=(l=p.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(h=p.languageCode)!==null&&h!==void 0?h:null,this.tenantId=(f=p.tenantId)!==null&&f!==void 0?f:null}static parseLink(e){const t=nR(e);try{return new Cf(t)}catch{return null}}}/**
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
 */class Lo{constructor(){this.providerId=Lo.PROVIDER_ID}static credential(e,t){return Ja._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=Cf.parseLink(t);return Ee(i,"argument-error"),Ja._fromEmailAndCode(e,i.code,i.tenantId)}}Lo.PROVIDER_ID="password";Lo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Lo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class X_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class cl extends X_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class hi extends cl{constructor(){super("facebook.com")}static credential(e){return hs._fromParams({providerId:hi.PROVIDER_ID,signInMethod:hi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hi.credentialFromTaggedObject(e)}static credentialFromError(e){return hi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hi.credential(e.oauthAccessToken)}catch{return null}}}hi.FACEBOOK_SIGN_IN_METHOD="facebook.com";hi.PROVIDER_ID="facebook.com";/**
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
 */class di extends cl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return hs._fromParams({providerId:di.PROVIDER_ID,signInMethod:di.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return di.credentialFromTaggedObject(e)}static credentialFromError(e){return di.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return di.credential(t,i)}catch{return null}}}di.GOOGLE_SIGN_IN_METHOD="google.com";di.PROVIDER_ID="google.com";/**
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
 */class fi extends cl{constructor(){super("github.com")}static credential(e){return hs._fromParams({providerId:fi.PROVIDER_ID,signInMethod:fi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fi.credentialFromTaggedObject(e)}static credentialFromError(e){return fi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fi.credential(e.oauthAccessToken)}catch{return null}}}fi.GITHUB_SIGN_IN_METHOD="github.com";fi.PROVIDER_ID="github.com";/**
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
 */class pi extends cl{constructor(){super("twitter.com")}static credential(e,t){return hs._fromParams({providerId:pi.PROVIDER_ID,signInMethod:pi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return pi.credentialFromTaggedObject(e)}static credentialFromError(e){return pi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return pi.credential(t,i)}catch{return null}}}pi.TWITTER_SIGN_IN_METHOD="twitter.com";pi.PROVIDER_ID="twitter.com";/**
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
 */class wo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,o=!1){const l=await Dr._fromIdTokenResponse(e,i,o),h=ey(i);return new wo({user:l,providerId:h,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const o=ey(i);return new wo({user:e,providerId:o,_tokenResponse:i,operationType:t})}}function ey(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class ac extends hr{constructor(e,t,i,o){var l;super(t.code,t.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,ac.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,o){return new ac(e,t,i,o)}}function Y_(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?ac._fromErrorAndOperation(n,l,e,i):l})}async function rR(n,e,t=!1){const i=await Ya(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return wo._forOperation(n,"link",i)}/**
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
 */async function iR(n,e,t=!1){const{auth:i}=n;if(Nr(i.app))return Promise.reject(vi(i));const o="reauthenticate";try{const l=await Ya(n,Y_(i,o,e,n),t);Ee(l.idToken,i,"internal-error");const h=Sf(l.idToken);Ee(h,i,"internal-error");const{sub:f}=h;return Ee(n.uid===f,i,"user-mismatch"),wo._forOperation(n,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&zn(i,"user-mismatch"),l}}/**
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
 */async function J_(n,e,t=!1){if(Nr(n.app))return Promise.reject(vi(n));const i="signIn",o=await Y_(n,i,e),l=await wo._fromIdTokenResponse(n,i,o);return t||await n._updateCurrentUser(l.user),l}async function sR(n,e){return J_(Oo(n),e)}/**
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
 */async function oR(n){const e=Oo(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function aR(n,e,t){return Nr(n.app)?Promise.reject(vi(n)):sR(Pt(n),Lo.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&oR(n),i})}function lR(n,e,t,i){return Pt(n).onIdTokenChanged(e,t,i)}function uR(n,e,t){return Pt(n).beforeAuthStateChanged(e,t)}const lc="__sak";/**
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
 */class Z_{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(lc,"1"),this.storage.removeItem(lc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const cR=1e3,hR=10;class ev extends Z_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=W_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),o=this.localCache[t];i!==o&&e(t,o,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,f,p)=>{this.notifyListeners(h,p)});return}const i=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(i);!t&&this.localCache[i]===h||this.notifyListeners(i,h)},l=this.storage.getItem(i);xS()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,hR):o()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},cR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}ev.type="LOCAL";const dR=ev;/**
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
 */class tv extends Z_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}tv.type="SESSION";const nv=tv;/**
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
 */function fR(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Cc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const i=new Cc(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:o,data:l}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const f=Array.from(h).map(async y=>y(t.origin,l)),p=await fR(f);t.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Cc.receivers=[];/**
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
 */function Pf(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class pR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,h;return new Promise((f,p)=>{const y=Pf("",20);o.port1.start();const E=setTimeout(()=>{p(new Error("unsupported_event"))},i);h={messageChannel:o,onMessage(T){const R=T;if(R.data.eventId===y)switch(R.data.status){case"ack":clearTimeout(E),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),f(R.data.response);break;default:clearTimeout(E),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:y,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function ir(){return window}function mR(n){ir().location.href=n}/**
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
 */function rv(){return typeof ir().WorkerGlobalScope<"u"&&typeof ir().importScripts=="function"}async function gR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function yR(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function _R(){return rv()?self:null}/**
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
 */const iv="firebaseLocalStorageDb",vR=1,uc="firebaseLocalStorage",sv="fbase_key";class hl{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Pc(n,e){return n.transaction([uc],e?"readwrite":"readonly").objectStore(uc)}function ER(){const n=indexedDB.deleteDatabase(iv);return new hl(n).toPromise()}function qd(){const n=indexedDB.open(iv,vR);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(uc,{keyPath:sv})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(uc)?e(i):(i.close(),await ER(),e(await qd()))})})}async function ty(n,e,t){const i=Pc(n,!0).put({[sv]:e,value:t});return new hl(i).toPromise()}async function wR(n,e){const t=Pc(n,!1).get(e),i=await new hl(t).toPromise();return i===void 0?null:i.value}function ny(n,e){const t=Pc(n,!0).delete(e);return new hl(t).toPromise()}const TR=800,IR=3;class ov{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await qd(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>IR)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return rv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Cc._getInstance(_R()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await gR(),!this.activeServiceWorker)return;this.sender=new pR(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||yR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await qd();return await ty(e,lc,"1"),await ny(e,lc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>ty(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>wR(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ny(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=Pc(o,!1).getAll();return new hl(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),TR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ov.type="LOCAL";const SR=ov;new ul(3e4,6e4);/**
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
 */function RR(n,e){return e?Or(e):(Ee(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class kf extends Af{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return vo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return vo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return vo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function AR(n){return J_(n.auth,new kf(n),n.bypassAuthState)}function CR(n){const{auth:e,user:t}=n;return Ee(t,e,"internal-error"),iR(t,new kf(n),n.bypassAuthState)}async function PR(n){const{auth:e,user:t}=n;return Ee(t,e,"internal-error"),rR(t,new kf(n),n.bypassAuthState)}/**
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
 */class av{constructor(e,t,i,o,l=!1){this.auth=e,this.resolver=i,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:o,tenantId:l,error:h,type:f}=e;if(h){this.reject(h);return}const p={auth:this.auth,requestUri:t,sessionId:i,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(p))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return AR;case"linkViaPopup":case"linkViaRedirect":return PR;case"reauthViaPopup":case"reauthViaRedirect":return CR;default:zn(this.auth,"internal-error")}}resolve(e){br(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){br(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const kR=new ul(2e3,1e4);class go extends av{constructor(e,t,i,o,l){super(e,t,o,l),this.provider=i,this.authWindow=null,this.pollId=null,go.currentPopupAction&&go.currentPopupAction.cancel(),go.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ee(e,this.auth,"internal-error"),e}async onExecution(){br(this.filter.length===1,"Popup operations only handle one event");const e=Pf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(rr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(rr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,go.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(rr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,kR.get())};e()}}go.currentPopupAction=null;/**
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
 */const NR="pendingRedirect",Ku=new Map;class xR extends av{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Ku.get(this.auth._key());if(!e){try{const i=await DR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Ku.set(this.auth._key(),e)}return this.bypassAuthState||Ku.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function DR(n,e){const t=VR(e),i=LR(n);if(!await i._isAvailable())return!1;const o=await i._get(t)==="true";return await i._remove(t),o}function OR(n,e){Ku.set(n._key(),e)}function LR(n){return Or(n._redirectPersistence)}function VR(n){return qu(NR,n.config.apiKey,n.name)}async function bR(n,e,t=!1){if(Nr(n.app))return Promise.reject(vi(n));const i=Oo(n),o=RR(i,e),h=await new xR(i,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await i._persistUserIfCurrent(h.user),await i._setRedirectUser(null,e)),h}/**
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
 */const MR=10*60*1e3;class UR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!FR(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!lv(e)){const o=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(rr(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=MR&&this.cachedEventUids.clear(),this.cachedEventUids.has(ry(e))}saveEventToCache(e){this.cachedEventUids.add(ry(e)),this.lastProcessedEventTime=Date.now()}}function ry(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function lv({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function FR(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return lv(n);default:return!1}}/**
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
 */async function jR(n,e={}){return xi(n,"GET","/v1/projects",e)}/**
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
 */const BR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,zR=/^https?/;async function $R(n){if(n.config.emulator)return;const{authorizedDomains:e}=await jR(n);for(const t of e)try{if(HR(t))return}catch{}zn(n,"unauthorized-domain")}function HR(n){const e=Hd(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const h=new URL(n);return h.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===i}if(!zR.test(t))return!1;if(BR.test(n))return i===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
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
 */const WR=new ul(3e4,6e4);function iy(){const n=ir().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function qR(n){return new Promise((e,t)=>{var i,o,l;function h(){iy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{iy(),t(rr(n,"network-request-failed"))},timeout:WR.get()})}if(!((o=(i=ir().gapi)===null||i===void 0?void 0:i.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((l=ir().gapi)===null||l===void 0)&&l.load)h();else{const f=jS("iframefcb");return ir()[f]=()=>{gapi.load?h():t(rr(n,"network-request-failed"))},K_(`${FS()}?onload=${f}`).catch(p=>t(p))}}).catch(e=>{throw Gu=null,e})}let Gu=null;function KR(n){return Gu=Gu||qR(n),Gu}/**
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
 */const GR=new ul(5e3,15e3),QR="__/auth/iframe",XR="emulator/auth/iframe",YR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},JR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ZR(n){const e=n.config;Ee(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?If(e,XR):`https://${n.config.authDomain}/${QR}`,i={apiKey:e.apiKey,appName:n.name,v:ps},o=JR.get(n.config.apiHost);o&&(i.eid=o);const l=n._getFrameworks();return l.length&&(i.fw=l.join(",")),`${t}?${ll(i).slice(1)}`}async function e1(n){const e=await KR(n),t=ir().gapi;return Ee(t,n,"internal-error"),e.open({where:document.body,url:ZR(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:YR,dontclear:!0},i=>new Promise(async(o,l)=>{await i.restyle({setHideOnLeave:!1});const h=rr(n,"network-request-failed"),f=ir().setTimeout(()=>{l(h)},GR.get());function p(){ir().clearTimeout(f),o(i)}i.ping(p).then(p,()=>{l(h)})}))}/**
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
 */const t1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},n1=500,r1=600,i1="_blank",s1="http://localhost";class sy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function o1(n,e,t,i=n1,o=r1){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-i)/2,0).toString();let f="";const p=Object.assign(Object.assign({},t1),{width:i.toString(),height:o.toString(),top:l,left:h}),y=$t().toLowerCase();t&&(f=j_(y)?i1:t),U_(y)&&(e=e||s1,p.scrollbars="yes");const E=Object.entries(p).reduce((R,[O,b])=>`${R}${O}=${b},`,"");if(NS(y)&&f!=="_self")return a1(e||"",f),new sy(null);const T=window.open(e||"",f,E);Ee(T,n,"popup-blocked");try{T.focus()}catch{}return new sy(T)}function a1(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const l1="__/auth/handler",u1="emulator/auth/handler",c1=encodeURIComponent("fac");async function oy(n,e,t,i,o,l){Ee(n.config.authDomain,n,"auth-domain-config-required"),Ee(n.config.apiKey,n,"invalid-api-key");const h={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:ps,eventId:o};if(e instanceof X_){e.setDefaultLanguage(n.languageCode),h.providerId=e.providerId||"",eI(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,T]of Object.entries({}))h[E]=T}if(e instanceof cl){const E=e.getScopes().filter(T=>T!=="");E.length>0&&(h.scopes=E.join(","))}n.tenantId&&(h.tid=n.tenantId);const f=h;for(const E of Object.keys(f))f[E]===void 0&&delete f[E];const p=await n._getAppCheckToken(),y=p?`#${c1}=${encodeURIComponent(p)}`:"";return`${h1(n)}?${ll(f).slice(1)}${y}`}function h1({config:n}){return n.emulator?If(n,u1):`https://${n.authDomain}/${l1}`}/**
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
 */const Pd="webStorageSupport";class d1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=nv,this._completeRedirectFn=bR,this._overrideRedirectResult=OR}async _openPopup(e,t,i,o){var l;br((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const h=await oy(e,t,i,Hd(),o);return o1(e,h,Pf())}async _openRedirect(e,t,i,o){await this._originValidation(e);const l=await oy(e,t,i,Hd(),o);return mR(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(br(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await e1(e),i=new UR(e);return t.register("authEvent",o=>(Ee(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Pd,{type:Pd},o=>{var l;const h=(l=o==null?void 0:o[0])===null||l===void 0?void 0:l[Pd];h!==void 0&&t(!!h),zn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=$R(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return W_()||F_()||Rf()}}const f1=d1;var ay="@firebase/auth",ly="1.8.1";/**
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
 */class p1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function m1(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function g1(n){cs(new Si("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:h,authDomain:f}=i.options;Ee(h&&!h.includes(":"),"invalid-api-key",{appName:i.name});const p={apiKey:h,authDomain:f,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:q_(n)},y=new bS(i,o,l,p);return qS(y,t),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),cs(new Si("auth-internal",e=>{const t=Oo(e.getProvider("auth").getImmediate());return(i=>new p1(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),nr(ay,ly,m1(n)),nr(ay,ly,"esm2017")}/**
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
 */const y1=5*60,_1=T_("authIdTokenMaxAge")||y1;let uy=null;const v1=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>_1)return;const o=t==null?void 0:t.token;uy!==o&&(uy=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function E1(n=Ef()){const e=Sc(n,"auth");if(e.isInitialized())return e.getImmediate();const t=WS(n,{popupRedirectResolver:f1,persistence:[SR,dR,nv]}),i=T_("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const h=v1(l.toString());uR(t,h,()=>h(t.currentUser)),lR(t,f=>h(f))}}const o=v_("auth");return o&&KS(t,`http://${o}`),t}function w1(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}MS({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=o=>{const l=rr("internal-error");l.customData=o,t(l)},i.type="text/javascript",i.charset="UTF-8",w1().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});g1("Browser");var T1="firebase",I1="11.0.2";/**
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
 */nr(T1,I1,"app");var cy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ls,uv;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(N,I){function A(){}A.prototype=I.prototype,N.D=I.prototype,N.prototype=new A,N.prototype.constructor=N,N.C=function(k,D,M){for(var C=Array(arguments.length-2),et=2;et<arguments.length;et++)C[et-2]=arguments[et];return I.prototype[D].apply(k,C)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(N,I,A){A||(A=0);var k=Array(16);if(typeof I=="string")for(var D=0;16>D;++D)k[D]=I.charCodeAt(A++)|I.charCodeAt(A++)<<8|I.charCodeAt(A++)<<16|I.charCodeAt(A++)<<24;else for(D=0;16>D;++D)k[D]=I[A++]|I[A++]<<8|I[A++]<<16|I[A++]<<24;I=N.g[0],A=N.g[1],D=N.g[2];var M=N.g[3],C=I+(M^A&(D^M))+k[0]+3614090360&4294967295;I=A+(C<<7&4294967295|C>>>25),C=M+(D^I&(A^D))+k[1]+3905402710&4294967295,M=I+(C<<12&4294967295|C>>>20),C=D+(A^M&(I^A))+k[2]+606105819&4294967295,D=M+(C<<17&4294967295|C>>>15),C=A+(I^D&(M^I))+k[3]+3250441966&4294967295,A=D+(C<<22&4294967295|C>>>10),C=I+(M^A&(D^M))+k[4]+4118548399&4294967295,I=A+(C<<7&4294967295|C>>>25),C=M+(D^I&(A^D))+k[5]+1200080426&4294967295,M=I+(C<<12&4294967295|C>>>20),C=D+(A^M&(I^A))+k[6]+2821735955&4294967295,D=M+(C<<17&4294967295|C>>>15),C=A+(I^D&(M^I))+k[7]+4249261313&4294967295,A=D+(C<<22&4294967295|C>>>10),C=I+(M^A&(D^M))+k[8]+1770035416&4294967295,I=A+(C<<7&4294967295|C>>>25),C=M+(D^I&(A^D))+k[9]+2336552879&4294967295,M=I+(C<<12&4294967295|C>>>20),C=D+(A^M&(I^A))+k[10]+4294925233&4294967295,D=M+(C<<17&4294967295|C>>>15),C=A+(I^D&(M^I))+k[11]+2304563134&4294967295,A=D+(C<<22&4294967295|C>>>10),C=I+(M^A&(D^M))+k[12]+1804603682&4294967295,I=A+(C<<7&4294967295|C>>>25),C=M+(D^I&(A^D))+k[13]+4254626195&4294967295,M=I+(C<<12&4294967295|C>>>20),C=D+(A^M&(I^A))+k[14]+2792965006&4294967295,D=M+(C<<17&4294967295|C>>>15),C=A+(I^D&(M^I))+k[15]+1236535329&4294967295,A=D+(C<<22&4294967295|C>>>10),C=I+(D^M&(A^D))+k[1]+4129170786&4294967295,I=A+(C<<5&4294967295|C>>>27),C=M+(A^D&(I^A))+k[6]+3225465664&4294967295,M=I+(C<<9&4294967295|C>>>23),C=D+(I^A&(M^I))+k[11]+643717713&4294967295,D=M+(C<<14&4294967295|C>>>18),C=A+(M^I&(D^M))+k[0]+3921069994&4294967295,A=D+(C<<20&4294967295|C>>>12),C=I+(D^M&(A^D))+k[5]+3593408605&4294967295,I=A+(C<<5&4294967295|C>>>27),C=M+(A^D&(I^A))+k[10]+38016083&4294967295,M=I+(C<<9&4294967295|C>>>23),C=D+(I^A&(M^I))+k[15]+3634488961&4294967295,D=M+(C<<14&4294967295|C>>>18),C=A+(M^I&(D^M))+k[4]+3889429448&4294967295,A=D+(C<<20&4294967295|C>>>12),C=I+(D^M&(A^D))+k[9]+568446438&4294967295,I=A+(C<<5&4294967295|C>>>27),C=M+(A^D&(I^A))+k[14]+3275163606&4294967295,M=I+(C<<9&4294967295|C>>>23),C=D+(I^A&(M^I))+k[3]+4107603335&4294967295,D=M+(C<<14&4294967295|C>>>18),C=A+(M^I&(D^M))+k[8]+1163531501&4294967295,A=D+(C<<20&4294967295|C>>>12),C=I+(D^M&(A^D))+k[13]+2850285829&4294967295,I=A+(C<<5&4294967295|C>>>27),C=M+(A^D&(I^A))+k[2]+4243563512&4294967295,M=I+(C<<9&4294967295|C>>>23),C=D+(I^A&(M^I))+k[7]+1735328473&4294967295,D=M+(C<<14&4294967295|C>>>18),C=A+(M^I&(D^M))+k[12]+2368359562&4294967295,A=D+(C<<20&4294967295|C>>>12),C=I+(A^D^M)+k[5]+4294588738&4294967295,I=A+(C<<4&4294967295|C>>>28),C=M+(I^A^D)+k[8]+2272392833&4294967295,M=I+(C<<11&4294967295|C>>>21),C=D+(M^I^A)+k[11]+1839030562&4294967295,D=M+(C<<16&4294967295|C>>>16),C=A+(D^M^I)+k[14]+4259657740&4294967295,A=D+(C<<23&4294967295|C>>>9),C=I+(A^D^M)+k[1]+2763975236&4294967295,I=A+(C<<4&4294967295|C>>>28),C=M+(I^A^D)+k[4]+1272893353&4294967295,M=I+(C<<11&4294967295|C>>>21),C=D+(M^I^A)+k[7]+4139469664&4294967295,D=M+(C<<16&4294967295|C>>>16),C=A+(D^M^I)+k[10]+3200236656&4294967295,A=D+(C<<23&4294967295|C>>>9),C=I+(A^D^M)+k[13]+681279174&4294967295,I=A+(C<<4&4294967295|C>>>28),C=M+(I^A^D)+k[0]+3936430074&4294967295,M=I+(C<<11&4294967295|C>>>21),C=D+(M^I^A)+k[3]+3572445317&4294967295,D=M+(C<<16&4294967295|C>>>16),C=A+(D^M^I)+k[6]+76029189&4294967295,A=D+(C<<23&4294967295|C>>>9),C=I+(A^D^M)+k[9]+3654602809&4294967295,I=A+(C<<4&4294967295|C>>>28),C=M+(I^A^D)+k[12]+3873151461&4294967295,M=I+(C<<11&4294967295|C>>>21),C=D+(M^I^A)+k[15]+530742520&4294967295,D=M+(C<<16&4294967295|C>>>16),C=A+(D^M^I)+k[2]+3299628645&4294967295,A=D+(C<<23&4294967295|C>>>9),C=I+(D^(A|~M))+k[0]+4096336452&4294967295,I=A+(C<<6&4294967295|C>>>26),C=M+(A^(I|~D))+k[7]+1126891415&4294967295,M=I+(C<<10&4294967295|C>>>22),C=D+(I^(M|~A))+k[14]+2878612391&4294967295,D=M+(C<<15&4294967295|C>>>17),C=A+(M^(D|~I))+k[5]+4237533241&4294967295,A=D+(C<<21&4294967295|C>>>11),C=I+(D^(A|~M))+k[12]+1700485571&4294967295,I=A+(C<<6&4294967295|C>>>26),C=M+(A^(I|~D))+k[3]+2399980690&4294967295,M=I+(C<<10&4294967295|C>>>22),C=D+(I^(M|~A))+k[10]+4293915773&4294967295,D=M+(C<<15&4294967295|C>>>17),C=A+(M^(D|~I))+k[1]+2240044497&4294967295,A=D+(C<<21&4294967295|C>>>11),C=I+(D^(A|~M))+k[8]+1873313359&4294967295,I=A+(C<<6&4294967295|C>>>26),C=M+(A^(I|~D))+k[15]+4264355552&4294967295,M=I+(C<<10&4294967295|C>>>22),C=D+(I^(M|~A))+k[6]+2734768916&4294967295,D=M+(C<<15&4294967295|C>>>17),C=A+(M^(D|~I))+k[13]+1309151649&4294967295,A=D+(C<<21&4294967295|C>>>11),C=I+(D^(A|~M))+k[4]+4149444226&4294967295,I=A+(C<<6&4294967295|C>>>26),C=M+(A^(I|~D))+k[11]+3174756917&4294967295,M=I+(C<<10&4294967295|C>>>22),C=D+(I^(M|~A))+k[2]+718787259&4294967295,D=M+(C<<15&4294967295|C>>>17),C=A+(M^(D|~I))+k[9]+3951481745&4294967295,N.g[0]=N.g[0]+I&4294967295,N.g[1]=N.g[1]+(D+(C<<21&4294967295|C>>>11))&4294967295,N.g[2]=N.g[2]+D&4294967295,N.g[3]=N.g[3]+M&4294967295}i.prototype.u=function(N,I){I===void 0&&(I=N.length);for(var A=I-this.blockSize,k=this.B,D=this.h,M=0;M<I;){if(D==0)for(;M<=A;)o(this,N,M),M+=this.blockSize;if(typeof N=="string"){for(;M<I;)if(k[D++]=N.charCodeAt(M++),D==this.blockSize){o(this,k),D=0;break}}else for(;M<I;)if(k[D++]=N[M++],D==this.blockSize){o(this,k),D=0;break}}this.h=D,this.o+=I},i.prototype.v=function(){var N=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);N[0]=128;for(var I=1;I<N.length-8;++I)N[I]=0;var A=8*this.o;for(I=N.length-8;I<N.length;++I)N[I]=A&255,A/=256;for(this.u(N),N=Array(16),I=A=0;4>I;++I)for(var k=0;32>k;k+=8)N[A++]=this.g[I]>>>k&255;return N};function l(N,I){var A=f;return Object.prototype.hasOwnProperty.call(A,N)?A[N]:A[N]=I(N)}function h(N,I){this.h=I;for(var A=[],k=!0,D=N.length-1;0<=D;D--){var M=N[D]|0;k&&M==I||(A[D]=M,k=!1)}this.g=A}var f={};function p(N){return-128<=N&&128>N?l(N,function(I){return new h([I|0],0>I?-1:0)}):new h([N|0],0>N?-1:0)}function y(N){if(isNaN(N)||!isFinite(N))return T;if(0>N)return L(y(-N));for(var I=[],A=1,k=0;N>=A;k++)I[k]=N/A|0,A*=4294967296;return new h(I,0)}function E(N,I){if(N.length==0)throw Error("number format error: empty string");if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(N.charAt(0)=="-")return L(E(N.substring(1),I));if(0<=N.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=y(Math.pow(I,8)),k=T,D=0;D<N.length;D+=8){var M=Math.min(8,N.length-D),C=parseInt(N.substring(D,D+M),I);8>M?(M=y(Math.pow(I,M)),k=k.j(M).add(y(C))):(k=k.j(A),k=k.add(y(C)))}return k}var T=p(0),R=p(1),O=p(16777216);n=h.prototype,n.m=function(){if(z(this))return-L(this).m();for(var N=0,I=1,A=0;A<this.g.length;A++){var k=this.i(A);N+=(0<=k?k:4294967296+k)*I,I*=4294967296}return N},n.toString=function(N){if(N=N||10,2>N||36<N)throw Error("radix out of range: "+N);if(b(this))return"0";if(z(this))return"-"+L(this).toString(N);for(var I=y(Math.pow(N,6)),A=this,k="";;){var D=se(A,I).g;A=W(A,D.j(I));var M=((0<A.g.length?A.g[0]:A.h)>>>0).toString(N);if(A=D,b(A))return M+k;for(;6>M.length;)M="0"+M;k=M+k}},n.i=function(N){return 0>N?0:N<this.g.length?this.g[N]:this.h};function b(N){if(N.h!=0)return!1;for(var I=0;I<N.g.length;I++)if(N.g[I]!=0)return!1;return!0}function z(N){return N.h==-1}n.l=function(N){return N=W(this,N),z(N)?-1:b(N)?0:1};function L(N){for(var I=N.g.length,A=[],k=0;k<I;k++)A[k]=~N.g[k];return new h(A,~N.h).add(R)}n.abs=function(){return z(this)?L(this):this},n.add=function(N){for(var I=Math.max(this.g.length,N.g.length),A=[],k=0,D=0;D<=I;D++){var M=k+(this.i(D)&65535)+(N.i(D)&65535),C=(M>>>16)+(this.i(D)>>>16)+(N.i(D)>>>16);k=C>>>16,M&=65535,C&=65535,A[D]=C<<16|M}return new h(A,A[A.length-1]&-2147483648?-1:0)};function W(N,I){return N.add(L(I))}n.j=function(N){if(b(this)||b(N))return T;if(z(this))return z(N)?L(this).j(L(N)):L(L(this).j(N));if(z(N))return L(this.j(L(N)));if(0>this.l(O)&&0>N.l(O))return y(this.m()*N.m());for(var I=this.g.length+N.g.length,A=[],k=0;k<2*I;k++)A[k]=0;for(k=0;k<this.g.length;k++)for(var D=0;D<N.g.length;D++){var M=this.i(k)>>>16,C=this.i(k)&65535,et=N.i(D)>>>16,Tt=N.i(D)&65535;A[2*k+2*D]+=C*Tt,te(A,2*k+2*D),A[2*k+2*D+1]+=M*Tt,te(A,2*k+2*D+1),A[2*k+2*D+1]+=C*et,te(A,2*k+2*D+1),A[2*k+2*D+2]+=M*et,te(A,2*k+2*D+2)}for(k=0;k<I;k++)A[k]=A[2*k+1]<<16|A[2*k];for(k=I;k<2*I;k++)A[k]=0;return new h(A,0)};function te(N,I){for(;(N[I]&65535)!=N[I];)N[I+1]+=N[I]>>>16,N[I]&=65535,I++}function ne(N,I){this.g=N,this.h=I}function se(N,I){if(b(I))throw Error("division by zero");if(b(N))return new ne(T,T);if(z(N))return I=se(L(N),I),new ne(L(I.g),L(I.h));if(z(I))return I=se(N,L(I)),new ne(L(I.g),I.h);if(30<N.g.length){if(z(N)||z(I))throw Error("slowDivide_ only works with positive integers.");for(var A=R,k=I;0>=k.l(N);)A=Ie(A),k=Ie(k);var D=_e(A,1),M=_e(k,1);for(k=_e(k,2),A=_e(A,2);!b(k);){var C=M.add(k);0>=C.l(N)&&(D=D.add(A),M=C),k=_e(k,1),A=_e(A,1)}return I=W(N,D.j(I)),new ne(D,I)}for(D=T;0<=N.l(I);){for(A=Math.max(1,Math.floor(N.m()/I.m())),k=Math.ceil(Math.log(A)/Math.LN2),k=48>=k?1:Math.pow(2,k-48),M=y(A),C=M.j(I);z(C)||0<C.l(N);)A-=k,M=y(A),C=M.j(I);b(M)&&(M=R),D=D.add(M),N=W(N,C)}return new ne(D,N)}n.A=function(N){return se(this,N).h},n.and=function(N){for(var I=Math.max(this.g.length,N.g.length),A=[],k=0;k<I;k++)A[k]=this.i(k)&N.i(k);return new h(A,this.h&N.h)},n.or=function(N){for(var I=Math.max(this.g.length,N.g.length),A=[],k=0;k<I;k++)A[k]=this.i(k)|N.i(k);return new h(A,this.h|N.h)},n.xor=function(N){for(var I=Math.max(this.g.length,N.g.length),A=[],k=0;k<I;k++)A[k]=this.i(k)^N.i(k);return new h(A,this.h^N.h)};function Ie(N){for(var I=N.g.length+1,A=[],k=0;k<I;k++)A[k]=N.i(k)<<1|N.i(k-1)>>>31;return new h(A,N.h)}function _e(N,I){var A=I>>5;I%=32;for(var k=N.g.length-A,D=[],M=0;M<k;M++)D[M]=0<I?N.i(M+A)>>>I|N.i(M+A+1)<<32-I:N.i(M+A);return new h(D,N.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,uv=i,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=y,h.fromString=E,ls=h}).apply(typeof cy<"u"?cy:typeof self<"u"?self:typeof window<"u"?window:{});var Vu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var cv,Fa,hv,Qu,Kd,dv,fv,pv;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,m,_){return u==Array.prototype||u==Object.prototype||(u[m]=_.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Vu=="object"&&Vu];for(var m=0;m<u.length;++m){var _=u[m];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var i=t(this);function o(u,m){if(m)e:{var _=i;u=u.split(".");for(var w=0;w<u.length-1;w++){var U=u[w];if(!(U in _))break e;_=_[U]}u=u[u.length-1],w=_[u],m=m(w),m!=w&&m!=null&&e(_,u,{configurable:!0,writable:!0,value:m})}}function l(u,m){u instanceof String&&(u+="");var _=0,w=!1,U={next:function(){if(!w&&_<u.length){var $=_++;return{value:m($,u[$]),done:!1}}return w=!0,{done:!0,value:void 0}}};return U[Symbol.iterator]=function(){return U},U}o("Array.prototype.values",function(u){return u||function(){return l(this,function(m,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},f=this||self;function p(u){var m=typeof u;return m=m!="object"?m:u?Array.isArray(u)?"array":m:"null",m=="array"||m=="object"&&typeof u.length=="number"}function y(u){var m=typeof u;return m=="object"&&u!=null||m=="function"}function E(u,m,_){return u.call.apply(u.bind,arguments)}function T(u,m,_){if(!u)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var U=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(U,w),u.apply(m,U)}}return function(){return u.apply(m,arguments)}}function R(u,m,_){return R=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:T,R.apply(null,arguments)}function O(u,m){var _=Array.prototype.slice.call(arguments,1);return function(){var w=_.slice();return w.push.apply(w,arguments),u.apply(this,w)}}function b(u,m){function _(){}_.prototype=m.prototype,u.aa=m.prototype,u.prototype=new _,u.prototype.constructor=u,u.Qb=function(w,U,$){for(var ie=Array(arguments.length-2),ze=2;ze<arguments.length;ze++)ie[ze-2]=arguments[ze];return m.prototype[U].apply(w,ie)}}function z(u){const m=u.length;if(0<m){const _=Array(m);for(let w=0;w<m;w++)_[w]=u[w];return _}return[]}function L(u,m){for(let _=1;_<arguments.length;_++){const w=arguments[_];if(p(w)){const U=u.length||0,$=w.length||0;u.length=U+$;for(let ie=0;ie<$;ie++)u[U+ie]=w[ie]}else u.push(w)}}class W{constructor(m,_){this.i=m,this.j=_,this.h=0,this.g=null}get(){let m;return 0<this.h?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function te(u){return/^[\s\xa0]*$/.test(u)}function ne(){var u=f.navigator;return u&&(u=u.userAgent)?u:""}function se(u){return se[" "](u),u}se[" "]=function(){};var Ie=ne().indexOf("Gecko")!=-1&&!(ne().toLowerCase().indexOf("webkit")!=-1&&ne().indexOf("Edge")==-1)&&!(ne().indexOf("Trident")!=-1||ne().indexOf("MSIE")!=-1)&&ne().indexOf("Edge")==-1;function _e(u,m,_){for(const w in u)m.call(_,u[w],w,u)}function N(u,m){for(const _ in u)m.call(void 0,u[_],_,u)}function I(u){const m={};for(const _ in u)m[_]=u[_];return m}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function k(u,m){let _,w;for(let U=1;U<arguments.length;U++){w=arguments[U];for(_ in w)u[_]=w[_];for(let $=0;$<A.length;$++)_=A[$],Object.prototype.hasOwnProperty.call(w,_)&&(u[_]=w[_])}}function D(u){var m=1;u=u.split(":");const _=[];for(;0<m&&u.length;)_.push(u.shift()),m--;return u.length&&_.push(u.join(":")),_}function M(u){f.setTimeout(()=>{throw u},0)}function C(){var u=ae;let m=null;return u.g&&(m=u.g,u.g=u.g.next,u.g||(u.h=null),m.next=null),m}class et{constructor(){this.h=this.g=null}add(m,_){const w=Tt.get();w.set(m,_),this.h?this.h.next=w:this.g=w,this.h=w}}var Tt=new W(()=>new ve,u=>u.reset());class ve{constructor(){this.next=this.g=this.h=null}set(m,_){this.h=m,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let Se,J=!1,ae=new et,re=()=>{const u=f.Promise.resolve(void 0);Se=()=>{u.then(V)}};var V=()=>{for(var u;u=C();){try{u.h.call(u.g)}catch(_){M(_)}var m=Tt;m.j(u),100>m.h&&(m.h++,u.next=m.g,m.g=u)}J=!1};function q(){this.s=this.s,this.C=this.C}q.prototype.s=!1,q.prototype.ma=function(){this.s||(this.s=!0,this.N())},q.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function fe(u,m){this.type=u,this.g=this.target=m,this.defaultPrevented=!1}fe.prototype.h=function(){this.defaultPrevented=!0};var Ce=function(){if(!f.addEventListener||!Object.defineProperty)return!1;var u=!1,m=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const _=()=>{};f.addEventListener("test",_,m),f.removeEventListener("test",_,m)}catch{}return u}();function Pe(u,m){if(fe.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var _=this.type=u.type,w=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=m,m=u.relatedTarget){if(Ie){e:{try{se(m.nodeName);var U=!0;break e}catch{}U=!1}U||(m=null)}}else _=="mouseover"?m=u.fromElement:_=="mouseout"&&(m=u.toElement);this.relatedTarget=m,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:Ne[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Pe.aa.h.call(this)}}b(Pe,fe);var Ne={2:"touch",3:"pen",4:"mouse"};Pe.prototype.h=function(){Pe.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Ve="closure_listenable_"+(1e6*Math.random()|0),Ue=0;function $e(u,m,_,w,U){this.listener=u,this.proxy=null,this.src=m,this.type=_,this.capture=!!w,this.ha=U,this.key=++Ue,this.da=this.fa=!1}function it(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function fn(u){this.src=u,this.g={},this.h=0}fn.prototype.add=function(u,m,_,w,U){var $=u.toString();u=this.g[$],u||(u=this.g[$]=[],this.h++);var ie=We(u,m,w,U);return-1<ie?(m=u[ie],_||(m.fa=!1)):(m=new $e(m,this.src,$,!!w,U),m.fa=_,u.push(m)),m};function dr(u,m){var _=m.type;if(_ in u.g){var w=u.g[_],U=Array.prototype.indexOf.call(w,m,void 0),$;($=0<=U)&&Array.prototype.splice.call(w,U,1),$&&(it(m),u.g[_].length==0&&(delete u.g[_],u.h--))}}function We(u,m,_,w){for(var U=0;U<u.length;++U){var $=u[U];if(!$.da&&$.listener==m&&$.capture==!!_&&$.ha==w)return U}return-1}var Di="closure_lm_"+(1e6*Math.random()|0),Es={};function Fo(u,m,_,w,U){if(Array.isArray(m)){for(var $=0;$<m.length;$++)Fo(u,m[$],_,w,U);return null}return _=zo(_),u&&u[Ve]?u.K(m,_,y(w)?!!w.capture:!!w,U):jo(u,m,_,!1,w,U)}function jo(u,m,_,w,U,$){if(!m)throw Error("Invalid event type");var ie=y(U)?!!U.capture:!!U,ze=Ts(u);if(ze||(u[Di]=ze=new fn(u)),_=ze.add(m,_,w,ie,$),_.proxy)return _;if(w=yl(),_.proxy=w,w.src=u,w.listener=_,u.addEventListener)Ce||(U=ie),U===void 0&&(U=!1),u.addEventListener(m.toString(),w,U);else if(u.attachEvent)u.attachEvent(pr(m.toString()),w);else if(u.addListener&&u.removeListener)u.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return _}function yl(){function u(_){return m.call(u.src,u.listener,_)}const m=Bo;return u}function ws(u,m,_,w,U){if(Array.isArray(m))for(var $=0;$<m.length;$++)ws(u,m[$],_,w,U);else w=y(w)?!!w.capture:!!w,_=zo(_),u&&u[Ve]?(u=u.i,m=String(m).toString(),m in u.g&&($=u.g[m],_=We($,_,w,U),-1<_&&(it($[_]),Array.prototype.splice.call($,_,1),$.length==0&&(delete u.g[m],u.h--)))):u&&(u=Ts(u))&&(m=u.g[m.toString()],u=-1,m&&(u=We(m,_,w,U)),(_=-1<u?m[u]:null)&&fr(_))}function fr(u){if(typeof u!="number"&&u&&!u.da){var m=u.src;if(m&&m[Ve])dr(m.i,u);else{var _=u.type,w=u.proxy;m.removeEventListener?m.removeEventListener(_,w,u.capture):m.detachEvent?m.detachEvent(pr(_),w):m.addListener&&m.removeListener&&m.removeListener(w),(_=Ts(m))?(dr(_,u),_.h==0&&(_.src=null,m[Di]=null)):it(u)}}}function pr(u){return u in Es?Es[u]:Es[u]="on"+u}function Bo(u,m){if(u.da)u=!0;else{m=new Pe(m,this);var _=u.listener,w=u.ha||u.src;u.fa&&fr(u),u=_.call(w,m)}return u}function Ts(u){return u=u[Di],u instanceof fn?u:null}var Is="__closure_events_fn_"+(1e9*Math.random()>>>0);function zo(u){return typeof u=="function"?u:(u[Is]||(u[Is]=function(m){return u.handleEvent(m)}),u[Is])}function pt(){q.call(this),this.i=new fn(this),this.M=this,this.F=null}b(pt,q),pt.prototype[Ve]=!0,pt.prototype.removeEventListener=function(u,m,_,w){ws(this,u,m,_,w)};function mt(u,m){var _,w=u.F;if(w)for(_=[];w;w=w.F)_.push(w);if(u=u.M,w=m.type||m,typeof m=="string")m=new fe(m,u);else if(m instanceof fe)m.target=m.target||u;else{var U=m;m=new fe(w,u),k(m,U)}if(U=!0,_)for(var $=_.length-1;0<=$;$--){var ie=m.g=_[$];U=mr(ie,w,!0,m)&&U}if(ie=m.g=u,U=mr(ie,w,!0,m)&&U,U=mr(ie,w,!1,m)&&U,_)for($=0;$<_.length;$++)ie=m.g=_[$],U=mr(ie,w,!1,m)&&U}pt.prototype.N=function(){if(pt.aa.N.call(this),this.i){var u=this.i,m;for(m in u.g){for(var _=u.g[m],w=0;w<_.length;w++)it(_[w]);delete u.g[m],u.h--}}this.F=null},pt.prototype.K=function(u,m,_,w){return this.i.add(String(u),m,!1,_,w)},pt.prototype.L=function(u,m,_,w){return this.i.add(String(u),m,!0,_,w)};function mr(u,m,_,w){if(m=u.i.g[String(m)],!m)return!0;m=m.concat();for(var U=!0,$=0;$<m.length;++$){var ie=m[$];if(ie&&!ie.da&&ie.capture==_){var ze=ie.listener,gt=ie.ha||ie.src;ie.fa&&dr(u.i,ie),U=ze.call(gt,w)!==!1&&U}}return U&&!w.defaultPrevented}function $o(u,m,_){if(typeof u=="function")_&&(u=R(u,_));else if(u&&typeof u.handleEvent=="function")u=R(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(m)?-1:f.setTimeout(u,m||0)}function jr(u){u.g=$o(()=>{u.g=null,u.i&&(u.i=!1,jr(u))},u.l);const m=u.h;u.h=null,u.m.apply(null,m)}class Oi extends q{constructor(m,_){super(),this.m=m,this.l=_,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:jr(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Li(u){q.call(this),this.h=u,this.g={}}b(Li,q);var Ho=[];function Wo(u){_e(u.g,function(m,_){this.g.hasOwnProperty(_)&&fr(m)},u),u.g={}}Li.prototype.N=function(){Li.aa.N.call(this),Wo(this)},Li.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var qo=f.JSON.stringify,Ko=f.JSON.parse,Go=class{stringify(u){return f.JSON.stringify(u,void 0)}parse(u){return f.JSON.parse(u,void 0)}};function Vi(){}Vi.prototype.h=null;function Ss(u){return u.h||(u.h=u.i())}function Rs(){}var pn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Hn(){fe.call(this,"d")}b(Hn,fe);function As(){fe.call(this,"c")}b(As,fe);var Wn={},Qo=null;function bi(){return Qo=Qo||new pt}Wn.La="serverreachability";function Xo(u){fe.call(this,Wn.La,u)}b(Xo,fe);function gr(u){const m=bi();mt(m,new Xo(m))}Wn.STAT_EVENT="statevent";function Yo(u,m){fe.call(this,Wn.STAT_EVENT,u),this.stat=m}b(Yo,fe);function lt(u){const m=bi();mt(m,new Yo(m,u))}Wn.Ma="timingevent";function Cs(u,m){fe.call(this,Wn.Ma,u),this.size=m}b(Cs,fe);function An(u,m){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){u()},m)}function Mi(){this.g=!0}Mi.prototype.xa=function(){this.g=!1};function Ui(u,m,_,w,U,$){u.info(function(){if(u.g)if($)for(var ie="",ze=$.split("&"),gt=0;gt<ze.length;gt++){var be=ze[gt].split("=");if(1<be.length){var It=be[0];be=be[1];var ht=It.split("_");ie=2<=ht.length&&ht[1]=="type"?ie+(It+"="+be+"&"):ie+(It+"=redacted&")}}else ie=null;else ie=$;return"XMLHTTP REQ ("+w+") [attempt "+U+"]: "+m+`
`+_+`
`+ie})}function Ps(u,m,_,w,U,$,ie){u.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+U+"]: "+m+`
`+_+`
`+$+" "+ie})}function Cn(u,m,_,w){u.info(function(){return"XMLHTTP TEXT ("+m+"): "+$c(u,_)+(w?" "+w:"")})}function Jo(u,m){u.info(function(){return"TIMEOUT: "+m})}Mi.prototype.info=function(){};function $c(u,m){if(!u.g)return m;if(!m)return null;try{var _=JSON.parse(m);if(_){for(u=0;u<_.length;u++)if(Array.isArray(_[u])){var w=_[u];if(!(2>w.length)){var U=w[1];if(Array.isArray(U)&&!(1>U.length)){var $=U[0];if($!="noop"&&$!="stop"&&$!="close")for(var ie=1;ie<U.length;ie++)U[ie]=""}}}}return qo(_)}catch{return m}}var ks={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},_l={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Pn;function Fi(){}b(Fi,Vi),Fi.prototype.g=function(){return new XMLHttpRequest},Fi.prototype.i=function(){return{}},Pn=new Fi;function kn(u,m,_,w){this.j=u,this.i=m,this.l=_,this.R=w||1,this.U=new Li(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new vl}function vl(){this.i=null,this.g="",this.h=!1}var Zo={},Ns={};function xs(u,m,_){u.L=1,u.v=Wr(on(m)),u.m=_,u.P=!0,ea(u,null)}function ea(u,m){u.F=Date.now(),qe(u),u.A=on(u.v);var _=u.A,w=u.R;Array.isArray(w)||(w=[String(w)]),Kr(_.i,"t",w),u.C=0,_=u.j.J,u.h=new vl,u.g=Ml(u.j,_?m:null,!u.m),0<u.O&&(u.M=new Oi(R(u.Y,u,u.g),u.O)),m=u.U,_=u.g,w=u.ca;var U="readystatechange";Array.isArray(U)||(U&&(Ho[0]=U.toString()),U=Ho);for(var $=0;$<U.length;$++){var ie=Fo(_,U[$],w||m.handleEvent,!1,m.h||m);if(!ie)break;m.g[ie.key]=ie}m=u.H?I(u.H):{},u.m?(u.u||(u.u="POST"),m["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,m)):(u.u="GET",u.g.ea(u.A,u.u,null,m)),gr(),Ui(u.i,u.u,u.A,u.l,u.R,u.m)}kn.prototype.ca=function(u){u=u.target;const m=this.M;m&&Xt(u)==3?m.j():this.Y(u)},kn.prototype.Y=function(u){try{if(u==this.g)e:{const ht=Xt(this.g);var m=this.g.Ba();const yn=this.g.Z();if(!(3>ht)&&(ht!=3||this.g&&(this.h.h||this.g.oa()||oa(this.g)))){this.J||ht!=4||m==7||(m==8||0>=yn?gr(3):gr(2)),ji(this);var _=this.g.Z();this.X=_;t:if(El(this)){var w=oa(this.g);u="";var U=w.length,$=Xt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){mn(this),Br(this);var ie="";break t}this.h.i=new f.TextDecoder}for(m=0;m<U;m++)this.h.h=!0,u+=this.h.i.decode(w[m],{stream:!($&&m==U-1)});w.length=0,this.h.g+=u,this.C=0,ie=this.h.g}else ie=this.g.oa();if(this.o=_==200,Ps(this.i,this.u,this.A,this.l,this.R,ht,_),this.o){if(this.T&&!this.K){t:{if(this.g){var ze,gt=this.g;if((ze=gt.g?gt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!te(ze)){var be=ze;break t}}be=null}if(_=be)Cn(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ta(this,_);else{this.o=!1,this.s=3,lt(12),mn(this),Br(this);break e}}if(this.P){_=!0;let ln;for(;!this.J&&this.C<ie.length;)if(ln=Hc(this,ie),ln==Ns){ht==4&&(this.s=4,lt(14),_=!1),Cn(this.i,this.l,null,"[Incomplete Response]");break}else if(ln==Zo){this.s=4,lt(15),Cn(this.i,this.l,ie,"[Invalid Chunk]"),_=!1;break}else Cn(this.i,this.l,ln,null),ta(this,ln);if(El(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ht!=4||ie.length!=0||this.h.h||(this.s=1,lt(16),_=!1),this.o=this.o&&_,!_)Cn(this.i,this.l,ie,"[Invalid Chunked Response]"),mn(this),Br(this);else if(0<ie.length&&!this.W){this.W=!0;var It=this.j;It.g==this&&It.ba&&!It.M&&(It.j.info("Great, no buffering proxy detected. Bytes received: "+ie.length),la(It),It.M=!0,lt(11))}}else Cn(this.i,this.l,ie,null),ta(this,ie);ht==4&&mn(this),this.o&&!this.J&&(ht==4?zs(this.j,this):(this.o=!1,qe(this)))}else Ms(this.g),_==400&&0<ie.indexOf("Unknown SID")?(this.s=3,lt(12)):(this.s=0,lt(13)),mn(this),Br(this)}}}catch{}finally{}};function El(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function Hc(u,m){var _=u.C,w=m.indexOf(`
`,_);return w==-1?Ns:(_=Number(m.substring(_,w)),isNaN(_)?Zo:(w+=1,w+_>m.length?Ns:(m=m.slice(w,w+_),u.C=w+_,m)))}kn.prototype.cancel=function(){this.J=!0,mn(this)};function qe(u){u.S=Date.now()+u.I,wl(u,u.I)}function wl(u,m){if(u.B!=null)throw Error("WatchDog timer not null");u.B=An(R(u.ba,u),m)}function ji(u){u.B&&(f.clearTimeout(u.B),u.B=null)}kn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(Jo(this.i,this.A),this.L!=2&&(gr(),lt(17)),mn(this),this.s=2,Br(this)):wl(this,this.S-u)};function Br(u){u.j.G==0||u.J||zs(u.j,u)}function mn(u){ji(u);var m=u.M;m&&typeof m.ma=="function"&&m.ma(),u.M=null,Wo(u.U),u.g&&(m=u.g,u.g=null,m.abort(),m.ma())}function ta(u,m){try{var _=u.j;if(_.G!=0&&(_.g==u||Ht(_.h,u))){if(!u.K&&Ht(_.h,u)&&_.G==3){try{var w=_.Da.g.parse(m)}catch{w=null}if(Array.isArray(w)&&w.length==3){var U=w;if(U[0]==0){e:if(!_.u){if(_.g)if(_.g.F+3e3<u.F)Bs(_),Ln(_);else break e;js(_),lt(18)}}else _.za=U[1],0<_.za-_.T&&37500>U[2]&&_.F&&_.v==0&&!_.C&&(_.C=An(R(_.Za,_),6e3));if(1>=Il(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else wr(_,11)}else if((u.K||_.g==u)&&Bs(_),!te(m))for(U=_.Da.g.parse(m),m=0;m<U.length;m++){let be=U[m];if(_.T=be[0],be=be[1],_.G==2)if(be[0]=="c"){_.K=be[1],_.ia=be[2];const It=be[3];It!=null&&(_.la=It,_.j.info("VER="+_.la));const ht=be[4];ht!=null&&(_.Aa=ht,_.j.info("SVER="+_.Aa));const yn=be[5];yn!=null&&typeof yn=="number"&&0<yn&&(w=1.5*yn,_.L=w,_.j.info("backChannelRequestTimeoutMs_="+w)),w=_;const ln=u.g;if(ln){const Ki=ln.g?ln.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ki){var $=w.h;$.g||Ki.indexOf("spdy")==-1&&Ki.indexOf("quic")==-1&&Ki.indexOf("h2")==-1||($.j=$.l,$.g=new Set,$.h&&(na($,$.h),$.h=null))}if(w.D){const Hs=ln.g?ln.g.getResponseHeader("X-HTTP-Session-Id"):null;Hs&&(w.ya=Hs,He(w.I,w.D,Hs))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-u.F,_.j.info("Handshake RTT: "+_.R+"ms")),w=_;var ie=u;if(w.qa=bl(w,w.J?w.ia:null,w.W),ie.K){Sl(w.h,ie);var ze=ie,gt=w.L;gt&&(ze.I=gt),ze.B&&(ji(ze),qe(ze)),w.g=ie}else qi(w);0<_.i.length&&Qn(_)}else be[0]!="stop"&&be[0]!="close"||wr(_,7);else _.G==3&&(be[0]=="stop"||be[0]=="close"?be[0]=="stop"?wr(_,7):Nt(_):be[0]!="noop"&&_.l&&_.l.ta(be),_.v=0)}}gr(4)}catch{}}var Tl=class{constructor(u,m){this.g=u,this.map=m}};function Bi(u){this.l=u||10,f.PerformanceNavigationTiming?(u=f.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(f.chrome&&f.chrome.loadTimes&&f.chrome.loadTimes()&&f.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function sn(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Il(u){return u.h?1:u.g?u.g.size:0}function Ht(u,m){return u.h?u.h==m:u.g?u.g.has(m):!1}function na(u,m){u.g?u.g.add(m):u.h=m}function Sl(u,m){u.h&&u.h==m?u.h=null:u.g&&u.g.has(m)&&u.g.delete(m)}Bi.prototype.cancel=function(){if(this.i=Rl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function Rl(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let m=u.i;for(const _ of u.g.values())m=m.concat(_.D);return m}return z(u.i)}function Ds(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(p(u)){for(var m=[],_=u.length,w=0;w<_;w++)m.push(u[w]);return m}m=[],_=0;for(w in u)m[_++]=u[w];return m}function Os(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(p(u)||typeof u=="string"){var m=[];u=u.length;for(var _=0;_<u;_++)m.push(_);return m}m=[],_=0;for(const w in u)m[_++]=w;return m}}}function zr(u,m){if(u.forEach&&typeof u.forEach=="function")u.forEach(m,void 0);else if(p(u)||typeof u=="string")Array.prototype.forEach.call(u,m,void 0);else for(var _=Os(u),w=Ds(u),U=w.length,$=0;$<U;$++)m.call(void 0,w[$],_&&_[$],u)}var zi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Wc(u,m){if(u){u=u.split("&");for(var _=0;_<u.length;_++){var w=u[_].indexOf("="),U=null;if(0<=w){var $=u[_].substring(0,w);U=u[_].substring(w+1)}else $=u[_];m($,U?decodeURIComponent(U.replace(/\+/g," ")):"")}}}function yr(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof yr){this.h=u.h,$i(this,u.j),this.o=u.o,this.g=u.g,$r(this,u.s),this.l=u.l;var m=u.i,_=new qn;_.i=m.i,m.g&&(_.g=new Map(m.g),_.h=m.h),Hr(this,_),this.m=u.m}else u&&(m=String(u).match(zi))?(this.h=!1,$i(this,m[1]||"",!0),this.o=Oe(m[2]||""),this.g=Oe(m[3]||"",!0),$r(this,m[4]),this.l=Oe(m[5]||"",!0),Hr(this,m[6]||"",!0),this.m=Oe(m[7]||"")):(this.h=!1,this.i=new qn(null,this.h))}yr.prototype.toString=function(){var u=[],m=this.j;m&&u.push(qr(m,Ls,!0),":");var _=this.g;return(_||m=="file")&&(u.push("//"),(m=this.o)&&u.push(qr(m,Ls,!0),"@"),u.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&u.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&u.push("/"),u.push(qr(_,_.charAt(0)=="/"?Pl:Cl,!0))),(_=this.i.toString())&&u.push("?",_),(_=this.m)&&u.push("#",qr(_,ra)),u.join("")};function on(u){return new yr(u)}function $i(u,m,_){u.j=_?Oe(m,!0):m,u.j&&(u.j=u.j.replace(/:$/,""))}function $r(u,m){if(m){if(m=Number(m),isNaN(m)||0>m)throw Error("Bad port number "+m);u.s=m}else u.s=null}function Hr(u,m,_){m instanceof qn?(u.i=m,Kn(u.i,u.h)):(_||(m=qr(m,kl)),u.i=new qn(m,u.h))}function He(u,m,_){u.i.set(m,_)}function Wr(u){return He(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Oe(u,m){return u?m?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function qr(u,m,_){return typeof u=="string"?(u=encodeURI(u).replace(m,Al),_&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function Al(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Ls=/[#\/\?@]/g,Cl=/[#\?:]/g,Pl=/[#\?]/g,kl=/[#\?@]/g,ra=/#/g;function qn(u,m){this.h=this.g=null,this.i=u||null,this.j=!!m}function kt(u){u.g||(u.g=new Map,u.h=0,u.i&&Wc(u.i,function(m,_){u.add(decodeURIComponent(m.replace(/\+/g," ")),_)}))}n=qn.prototype,n.add=function(u,m){kt(this),this.i=null,u=gn(this,u);var _=this.g.get(u);return _||this.g.set(u,_=[]),_.push(m),this.h+=1,this};function Nn(u,m){kt(u),m=gn(u,m),u.g.has(m)&&(u.i=null,u.h-=u.g.get(m).length,u.g.delete(m))}function xn(u,m){return kt(u),m=gn(u,m),u.g.has(m)}n.forEach=function(u,m){kt(this),this.g.forEach(function(_,w){_.forEach(function(U){u.call(m,U,w,this)},this)},this)},n.na=function(){kt(this);const u=Array.from(this.g.values()),m=Array.from(this.g.keys()),_=[];for(let w=0;w<m.length;w++){const U=u[w];for(let $=0;$<U.length;$++)_.push(m[w])}return _},n.V=function(u){kt(this);let m=[];if(typeof u=="string")xn(this,u)&&(m=m.concat(this.g.get(gn(this,u))));else{u=Array.from(this.g.values());for(let _=0;_<u.length;_++)m=m.concat(u[_])}return m},n.set=function(u,m){return kt(this),this.i=null,u=gn(this,u),xn(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[m]),this.h+=1,this},n.get=function(u,m){return u?(u=this.V(u),0<u.length?String(u[0]):m):m};function Kr(u,m,_){Nn(u,m),0<_.length&&(u.i=null,u.g.set(gn(u,m),z(_)),u.h+=_.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],m=Array.from(this.g.keys());for(var _=0;_<m.length;_++){var w=m[_];const $=encodeURIComponent(String(w)),ie=this.V(w);for(w=0;w<ie.length;w++){var U=$;ie[w]!==""&&(U+="="+encodeURIComponent(String(ie[w]))),u.push(U)}}return this.i=u.join("&")};function gn(u,m){return m=String(m),u.j&&(m=m.toLowerCase()),m}function Kn(u,m){m&&!u.j&&(kt(u),u.i=null,u.g.forEach(function(_,w){var U=w.toLowerCase();w!=U&&(Nn(this,w),Kr(this,U,_))},u)),u.j=m}function qc(u,m){const _=new Mi;if(f.Image){const w=new Image;w.onload=O(Qt,_,"TestLoadImage: loaded",!0,m,w),w.onerror=O(Qt,_,"TestLoadImage: error",!1,m,w),w.onabort=O(Qt,_,"TestLoadImage: abort",!1,m,w),w.ontimeout=O(Qt,_,"TestLoadImage: timeout",!1,m,w),f.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=u}else m(!1)}function Nl(u,m){const _=new Mi,w=new AbortController,U=setTimeout(()=>{w.abort(),Qt(_,"TestPingServer: timeout",!1,m)},1e4);fetch(u,{signal:w.signal}).then($=>{clearTimeout(U),$.ok?Qt(_,"TestPingServer: ok",!0,m):Qt(_,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(U),Qt(_,"TestPingServer: error",!1,m)})}function Qt(u,m,_,w,U){try{U&&(U.onload=null,U.onerror=null,U.onabort=null,U.ontimeout=null),w(_)}catch{}}function Kc(){this.g=new Go}function xl(u,m,_){const w=_||"";try{zr(u,function(U,$){let ie=U;y(U)&&(ie=qo(U)),m.push(w+$+"="+encodeURIComponent(ie))})}catch(U){throw m.push(w+"type="+encodeURIComponent("_badmap")),U}}function _r(u){this.l=u.Ub||null,this.j=u.eb||!1}b(_r,Vi),_r.prototype.g=function(){return new Hi(this.l,this.j)},_r.prototype.i=function(u){return function(){return u}}({});function Hi(u,m){pt.call(this),this.D=u,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}b(Hi,pt),n=Hi.prototype,n.open=function(u,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=m,this.readyState=1,On(this)},n.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const m={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(m.body=u),(this.D||f).fetch(new Request(this.A,m)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Dn(this)),this.readyState=0},n.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,On(this)),this.g&&(this.readyState=3,On(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Dl(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Dl(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}n.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var m=u.value?u.value:new Uint8Array(0);(m=this.v.decode(m,{stream:!u.done}))&&(this.response=this.responseText+=m)}u.done?Dn(this):On(this),this.readyState==3&&Dl(this)}},n.Ra=function(u){this.g&&(this.response=this.responseText=u,Dn(this))},n.Qa=function(u){this.g&&(this.response=u,Dn(this))},n.ga=function(){this.g&&Dn(this)};function Dn(u){u.readyState=4,u.l=null,u.j=null,u.v=null,On(u)}n.setRequestHeader=function(u,m){this.u.append(u,m)},n.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],m=this.h.entries();for(var _=m.next();!_.done;)_=_.value,u.push(_[0]+": "+_[1]),_=m.next();return u.join(`\r
`)};function On(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Hi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function vr(u){let m="";return _e(u,function(_,w){m+=w,m+=":",m+=_,m+=`\r
`}),m}function Gr(u,m,_){e:{for(w in _){var w=!1;break e}w=!0}w||(_=vr(_),typeof u=="string"?_!=null&&encodeURIComponent(String(_)):He(u,m,_))}function Xe(u){pt.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}b(Xe,pt);var Gc=/^https?$/i,ia=["POST","PUT"];n=Xe.prototype,n.Ha=function(u){this.J=u},n.ea=function(u,m,_,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);m=m?m.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Pn.g(),this.v=this.o?Ss(this.o):Ss(Pn),this.g.onreadystatechange=R(this.Ea,this);try{this.B=!0,this.g.open(m,String(u),!0),this.B=!1}catch($){Wi(this,$);return}if(u=_||"",_=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var U in w)_.set(U,w[U]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const $ of w.keys())_.set($,w.get($));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(_.keys()).find($=>$.toLowerCase()=="content-type"),U=f.FormData&&u instanceof f.FormData,!(0<=Array.prototype.indexOf.call(ia,m,void 0))||w||U||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[$,ie]of _)this.g.setRequestHeader($,ie);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{bs(this),this.u=!0,this.g.send(u),this.u=!1}catch($){Wi(this,$)}};function Wi(u,m){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=m,u.m=5,Vs(u),an(u)}function Vs(u){u.A||(u.A=!0,mt(u,"complete"),mt(u,"error"))}n.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,mt(this,"complete"),mt(this,"abort"),an(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),an(this,!0)),Xe.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?sa(this):this.bb())},n.bb=function(){sa(this)};function sa(u){if(u.h&&typeof h<"u"&&(!u.v[1]||Xt(u)!=4||u.Z()!=2)){if(u.u&&Xt(u)==4)$o(u.Ea,0,u);else if(mt(u,"readystatechange"),Xt(u)==4){u.h=!1;try{const ie=u.Z();e:switch(ie){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break e;default:m=!1}var _;if(!(_=m)){var w;if(w=ie===0){var U=String(u.D).match(zi)[1]||null;!U&&f.self&&f.self.location&&(U=f.self.location.protocol.slice(0,-1)),w=!Gc.test(U?U.toLowerCase():"")}_=w}if(_)mt(u,"complete"),mt(u,"success");else{u.m=6;try{var $=2<Xt(u)?u.g.statusText:""}catch{$=""}u.l=$+" ["+u.Z()+"]",Vs(u)}}finally{an(u)}}}}function an(u,m){if(u.g){bs(u);const _=u.g,w=u.v[0]?()=>{}:null;u.g=null,u.v=null,m||mt(u,"ready");try{_.onreadystatechange=w}catch{}}}function bs(u){u.I&&(f.clearTimeout(u.I),u.I=null)}n.isActive=function(){return!!this.g};function Xt(u){return u.g?u.g.readyState:0}n.Z=function(){try{return 2<Xt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(u){if(this.g){var m=this.g.responseText;return u&&m.indexOf(u)==0&&(m=m.substring(u.length)),Ko(m)}};function oa(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function Ms(u){const m={};u=(u.g&&2<=Xt(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<u.length;w++){if(te(u[w]))continue;var _=D(u[w]);const U=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const $=m[U]||[];m[U]=$,$.push(_)}N(m,function(w){return w.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Gn(u,m,_){return _&&_.internalChannelParams&&_.internalChannelParams[u]||m}function aa(u){this.Aa=0,this.i=[],this.j=new Mi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Gn("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Gn("baseRetryDelayMs",5e3,u),this.cb=Gn("retryDelaySeedMs",1e4,u),this.Wa=Gn("forwardChannelMaxRetries",2,u),this.wa=Gn("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Bi(u&&u.concurrentRequestLimit),this.Da=new Kc,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=aa.prototype,n.la=8,n.G=1,n.connect=function(u,m,_,w){lt(0),this.W=u,this.H=m||{},_&&w!==void 0&&(this.H.OSID=_,this.H.OAID=w),this.F=this.X,this.I=bl(this,null,this.W),Qn(this)};function Nt(u){if(Us(u),u.G==3){var m=u.U++,_=on(u.I);if(He(_,"SID",u.K),He(_,"RID",m),He(_,"TYPE","terminate"),Er(u,_),m=new kn(u,u.j,m),m.L=2,m.v=Wr(on(_)),_=!1,f.navigator&&f.navigator.sendBeacon)try{_=f.navigator.sendBeacon(m.v.toString(),"")}catch{}!_&&f.Image&&(new Image().src=m.v,_=!0),_||(m.g=Ml(m.j,null),m.g.ea(m.v)),m.F=Date.now(),qe(m)}Vl(u)}function Ln(u){u.g&&(la(u),u.g.cancel(),u.g=null)}function Us(u){Ln(u),u.u&&(f.clearTimeout(u.u),u.u=null),Bs(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&f.clearTimeout(u.s),u.s=null)}function Qn(u){if(!sn(u.h)&&!u.s){u.s=!0;var m=u.Ga;Se||re(),J||(Se(),J=!0),ae.add(m,u),u.B=0}}function Qc(u,m){return Il(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=m.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=An(R(u.Ga,u,m),Ll(u,u.B)),u.B++,!0)}n.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const U=new kn(this,this.j,u);let $=this.o;if(this.S&&($?($=I($),k($,this.S)):$=this.S),this.m!==null||this.O||(U.H=$,$=null),this.P)e:{for(var m=0,_=0;_<this.i.length;_++){t:{var w=this.i[_];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(m+=w,4096<m){m=_;break e}if(m===4096||_===this.i.length-1){m=_+1;break e}}m=1e3}else m=1e3;m=Qr(this,U,m),_=on(this.I),He(_,"RID",u),He(_,"CVER",22),this.D&&He(_,"X-HTTP-Session-Id",this.D),Er(this,_),$&&(this.O?m="headers="+encodeURIComponent(String(vr($)))+"&"+m:this.m&&Gr(_,this.m,$)),na(this.h,U),this.Ua&&He(_,"TYPE","init"),this.P?(He(_,"$req",m),He(_,"SID","null"),U.T=!0,xs(U,_,null)):xs(U,_,m),this.G=2}}else this.G==3&&(u?Fs(this,u):this.i.length==0||sn(this.h)||Fs(this))};function Fs(u,m){var _;m?_=m.l:_=u.U++;const w=on(u.I);He(w,"SID",u.K),He(w,"RID",_),He(w,"AID",u.T),Er(u,w),u.m&&u.o&&Gr(w,u.m,u.o),_=new kn(u,u.j,_,u.B+1),u.m===null&&(_.H=u.o),m&&(u.i=m.D.concat(u.i)),m=Qr(u,_,1e3),_.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),na(u.h,_),xs(_,w,m)}function Er(u,m){u.H&&_e(u.H,function(_,w){He(m,w,_)}),u.l&&zr({},function(_,w){He(m,w,_)})}function Qr(u,m,_){_=Math.min(u.i.length,_);var w=u.l?R(u.l.Na,u.l,u):null;e:{var U=u.i;let $=-1;for(;;){const ie=["count="+_];$==-1?0<_?($=U[0].g,ie.push("ofs="+$)):$=0:ie.push("ofs="+$);let ze=!0;for(let gt=0;gt<_;gt++){let be=U[gt].g;const It=U[gt].map;if(be-=$,0>be)$=Math.max(0,U[gt].g-100),ze=!1;else try{xl(It,ie,"req"+be+"_")}catch{w&&w(It)}}if(ze){w=ie.join("&");break e}}}return u=u.i.splice(0,_),m.D=u,w}function qi(u){if(!u.g&&!u.u){u.Y=1;var m=u.Fa;Se||re(),J||(Se(),J=!0),ae.add(m,u),u.v=0}}function js(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=An(R(u.Fa,u),Ll(u,u.v)),u.v++,!0)}n.Fa=function(){if(this.u=null,Ol(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=An(R(this.ab,this),u)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,lt(10),Ln(this),Ol(this))};function la(u){u.A!=null&&(f.clearTimeout(u.A),u.A=null)}function Ol(u){u.g=new kn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var m=on(u.qa);He(m,"RID","rpc"),He(m,"SID",u.K),He(m,"AID",u.T),He(m,"CI",u.F?"0":"1"),!u.F&&u.ja&&He(m,"TO",u.ja),He(m,"TYPE","xmlhttp"),Er(u,m),u.m&&u.o&&Gr(m,u.m,u.o),u.L&&(u.g.I=u.L);var _=u.g;u=u.ia,_.L=1,_.v=Wr(on(m)),_.m=null,_.P=!0,ea(_,u)}n.Za=function(){this.C!=null&&(this.C=null,Ln(this),js(this),lt(19))};function Bs(u){u.C!=null&&(f.clearTimeout(u.C),u.C=null)}function zs(u,m){var _=null;if(u.g==m){Bs(u),la(u),u.g=null;var w=2}else if(Ht(u.h,m))_=m.D,Sl(u.h,m),w=1;else return;if(u.G!=0){if(m.o)if(w==1){_=m.m?m.m.length:0,m=Date.now()-m.F;var U=u.B;w=bi(),mt(w,new Cs(w,_)),Qn(u)}else qi(u);else if(U=m.s,U==3||U==0&&0<m.X||!(w==1&&Qc(u,m)||w==2&&js(u)))switch(_&&0<_.length&&(m=u.h,m.i=m.i.concat(_)),U){case 1:wr(u,5);break;case 4:wr(u,10);break;case 3:wr(u,6);break;default:wr(u,2)}}}function Ll(u,m){let _=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(_*=2),_*m}function wr(u,m){if(u.j.info("Error code "+m),m==2){var _=R(u.fb,u),w=u.Xa;const U=!w;w=new yr(w||"//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||$i(w,"https"),Wr(w),U?qc(w.toString(),_):Nl(w.toString(),_)}else lt(2);u.G=0,u.l&&u.l.sa(m),Vl(u),Us(u)}n.fb=function(u){u?(this.j.info("Successfully pinged google.com"),lt(2)):(this.j.info("Failed to ping google.com"),lt(1))};function Vl(u){if(u.G=0,u.ka=[],u.l){const m=Rl(u.h);(m.length!=0||u.i.length!=0)&&(L(u.ka,m),L(u.ka,u.i),u.h.i.length=0,z(u.i),u.i.length=0),u.l.ra()}}function bl(u,m,_){var w=_ instanceof yr?on(_):new yr(_);if(w.g!="")m&&(w.g=m+"."+w.g),$r(w,w.s);else{var U=f.location;w=U.protocol,m=m?m+"."+U.hostname:U.hostname,U=+U.port;var $=new yr(null);w&&$i($,w),m&&($.g=m),U&&$r($,U),_&&($.l=_),w=$}return _=u.D,m=u.ya,_&&m&&He(w,_,m),He(w,"VER",u.la),Er(u,w),w}function Ml(u,m,_){if(m&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return m=u.Ca&&!u.pa?new Xe(new _r({eb:_})):new Xe(u.pa),m.Ha(u.J),m}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function ua(){}n=ua.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function $s(){}$s.prototype.g=function(u,m){return new Wt(u,m)};function Wt(u,m){pt.call(this),this.g=new aa(m),this.l=u,this.h=m&&m.messageUrlParams||null,u=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(u?u["X-WebChannel-Content-Type"]=m.messageContentType:u={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.va&&(u?u["X-WebChannel-Client-Profile"]=m.va:u={"X-WebChannel-Client-Profile":m.va}),this.g.S=u,(u=m&&m.Sb)&&!te(u)&&(this.g.m=u),this.v=m&&m.supportsCrossDomainXhr||!1,this.u=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!te(m)&&(this.g.D=m,u=this.h,u!==null&&m in u&&(u=this.h,m in u&&delete u[m])),this.j=new Xn(this)}b(Wt,pt),Wt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Wt.prototype.close=function(){Nt(this.g)},Wt.prototype.o=function(u){var m=this.g;if(typeof u=="string"){var _={};_.__data__=u,u=_}else this.u&&(_={},_.__data__=qo(u),u=_);m.i.push(new Tl(m.Ya++,u)),m.G==3&&Qn(m)},Wt.prototype.N=function(){this.g.l=null,delete this.j,Nt(this.g),delete this.g,Wt.aa.N.call(this)};function Ul(u){Hn.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var m=u.__sm__;if(m){e:{for(const _ in m){u=_;break e}u=void 0}(this.i=u)&&(u=this.i,m=m!==null&&u in m?m[u]:void 0),this.data=m}else this.data=u}b(Ul,Hn);function Fl(){As.call(this),this.status=1}b(Fl,As);function Xn(u){this.g=u}b(Xn,ua),Xn.prototype.ua=function(){mt(this.g,"a")},Xn.prototype.ta=function(u){mt(this.g,new Ul(u))},Xn.prototype.sa=function(u){mt(this.g,new Fl)},Xn.prototype.ra=function(){mt(this.g,"b")},$s.prototype.createWebChannel=$s.prototype.g,Wt.prototype.send=Wt.prototype.o,Wt.prototype.open=Wt.prototype.m,Wt.prototype.close=Wt.prototype.close,pv=function(){return new $s},fv=function(){return bi()},dv=Wn,Kd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ks.NO_ERROR=0,ks.TIMEOUT=8,ks.HTTP_ERROR=6,Qu=ks,_l.COMPLETE="complete",hv=_l,Rs.EventType=pn,pn.OPEN="a",pn.CLOSE="b",pn.ERROR="c",pn.MESSAGE="d",pt.prototype.listen=pt.prototype.K,Fa=Rs,Xe.prototype.listenOnce=Xe.prototype.L,Xe.prototype.getLastError=Xe.prototype.Ka,Xe.prototype.getLastErrorCode=Xe.prototype.Ba,Xe.prototype.getStatus=Xe.prototype.Z,Xe.prototype.getResponseJson=Xe.prototype.Oa,Xe.prototype.getResponseText=Xe.prototype.oa,Xe.prototype.send=Xe.prototype.ea,Xe.prototype.setWithCredentials=Xe.prototype.Ha,cv=Xe}).apply(typeof Vu<"u"?Vu:typeof self<"u"?self:typeof window<"u"?window:{});const hy="@firebase/firestore";/**
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
 */class Bt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Bt.UNAUTHENTICATED=new Bt(null),Bt.GOOGLE_CREDENTIALS=new Bt("google-credentials-uid"),Bt.FIRST_PARTY=new Bt("first-party-uid"),Bt.MOCK_USER=new Bt("mock-user");/**
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
 */let Vo="11.0.2";/**
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
 */const ds=new _f("@firebase/firestore");function ho(){return ds.logLevel}function le(n,...e){if(ds.logLevel<=xe.DEBUG){const t=e.map(Nf);ds.debug(`Firestore (${Vo}): ${n}`,...t)}}function Mr(n,...e){if(ds.logLevel<=xe.ERROR){const t=e.map(Nf);ds.error(`Firestore (${Vo}): ${n}`,...t)}}function To(n,...e){if(ds.logLevel<=xe.WARN){const t=e.map(Nf);ds.warn(`Firestore (${Vo}): ${n}`,...t)}}function Nf(n){if(typeof n=="string")return n;try{/**
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
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function Te(n="Unexpected state"){const e=`FIRESTORE (${Vo}) INTERNAL ASSERTION FAILED: `+n;throw Mr(e),new Error(e)}function Be(n,e){n||Te()}function Ae(n,e){return n}/**
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
 */const X={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class pe extends hr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ei{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class mv{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class S1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Bt.UNAUTHENTICATED))}shutdown(){}}class R1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class A1{constructor(e){this.t=e,this.currentUser=Bt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Be(this.o===void 0);let i=this.i;const o=p=>this.i!==i?(i=this.i,t(p)):Promise.resolve();let l=new Ei;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new Ei,e.enqueueRetryable(()=>o(this.currentUser))};const h=()=>{const p=l;e.enqueueRetryable(async()=>{await p.promise,await o(this.currentUser)})},f=p=>{le("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(p=>f(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?f(p):(le("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new Ei)}},0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(i=>this.i!==e?(le("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Be(typeof i.accessToken=="string"),new mv(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Be(e===null||typeof e=="string"),new Bt(e)}}class C1{constructor(e,t,i){this.l=e,this.h=t,this.P=i,this.type="FirstParty",this.user=Bt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class P1{constructor(e,t,i){this.l=e,this.h=t,this.P=i}getToken(){return Promise.resolve(new C1(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Bt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class k1{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class N1{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){Be(this.o===void 0);const i=l=>{l.error!=null&&le("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const h=l.token!==this.R;return this.R=l.token,le("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>i(l))};const o=l=>{le("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(l=>o(l)),setTimeout(()=>{if(!this.appCheck){const l=this.A.getImmediate({optional:!0});l?o(l):le("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Be(typeof t.token=="string"),this.R=t.token,new k1(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function x1(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
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
 */class gv{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const o=x1(40);for(let l=0;l<o.length;++l)i.length<20&&o[l]<t&&(i+=e.charAt(o[l]%e.length))}return i}}function Le(n,e){return n<e?-1:n>e?1:0}function Io(n,e,t){return n.length===e.length&&n.every((i,o)=>t(i,e[o]))}/**
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
 */class Et{static now(){return Et.fromMillis(Date.now())}static fromDate(e){return Et.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*t));return new Et(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new pe(X.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new pe(X.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new pe(X.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new pe(X.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Le(this.nanoseconds,e.nanoseconds):Le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Re{static fromTimestamp(e){return new Re(e)}static min(){return new Re(new Et(0,0))}static max(){return new Re(new Et(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Za{constructor(e,t,i){t===void 0?t=0:t>e.length&&Te(),i===void 0?i=e.length-t:i>e.length-t&&Te(),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return Za.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Za?e.forEach(i=>{t.push(i)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let o=0;o<i;o++){const l=e.get(o),h=t.get(o);if(l<h)return-1;if(l>h)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Je extends Za{construct(e,t,i){return new Je(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new pe(X.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter(o=>o.length>0))}return new Je(t)}static emptyPath(){return new Je([])}}const D1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Lt extends Za{construct(e,t,i){return new Lt(e,t,i)}static isValidIdentifier(e){return D1.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Lt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Lt(["__name__"])}static fromServerFormat(e){const t=[];let i="",o=0;const l=()=>{if(i.length===0)throw new pe(X.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let h=!1;for(;o<e.length;){const f=e[o];if(f==="\\"){if(o+1===e.length)throw new pe(X.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new pe(X.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=p,o+=2}else f==="`"?(h=!h,o++):f!=="."||h?(i+=f,o++):(l(),o++)}if(l(),h)throw new pe(X.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Lt(t)}static emptyPath(){return new Lt([])}}/**
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
 */class ye{constructor(e){this.path=e}static fromPath(e){return new ye(Je.fromString(e))}static fromName(e){return new ye(Je.fromString(e).popFirst(5))}static empty(){return new ye(Je.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Je.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Je.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ye(new Je(e.slice()))}}function O1(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,o=Re.fromTimestamp(i===1e9?new Et(t+1,0):new Et(t,i));return new Ri(o,ye.empty(),e)}function L1(n){return new Ri(n.readTime,n.key,-1)}class Ri{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new Ri(Re.min(),ye.empty(),-1)}static max(){return new Ri(Re.max(),ye.empty(),-1)}}function V1(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ye.comparator(n.documentKey,e.documentKey),t!==0?t:Le(n.largestBatchId,e.largestBatchId))}/**
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
 */const b1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class M1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function bo(n){if(n.code!==X.FAILED_PRECONDITION||n.message!==b1)throw n;le("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class K{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Te(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new K((i,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(i,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(i,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof K?t:K.resolve(t)}catch(t){return K.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):K.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):K.reject(t)}static resolve(e){return new K((t,i)=>{t(e)})}static reject(e){return new K((t,i)=>{i(e)})}static waitFor(e){return new K((t,i)=>{let o=0,l=0,h=!1;e.forEach(f=>{++o,f.next(()=>{++l,h&&l===o&&t()},p=>i(p))}),h=!0,l===o&&t()})}static or(e){let t=K.resolve(!1);for(const i of e)t=t.next(o=>o?K.resolve(o):i());return t}static forEach(e,t){const i=[];return e.forEach((o,l)=>{i.push(t.call(this,o,l))}),this.waitFor(i)}static mapArray(e,t){return new K((i,o)=>{const l=e.length,h=new Array(l);let f=0;for(let p=0;p<l;p++){const y=p;t(e[y]).next(E=>{h[y]=E,++f,f===l&&i(h)},E=>o(E))}})}static doWhile(e,t){return new K((i,o)=>{const l=()=>{e()===!0?t().next(()=>{l()},o):i()};l()})}}function U1(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Mo(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class kc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ie(i),this.se=i=>t.writeSequenceNumber(i))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}kc.oe=-1;function Nc(n){return n==null}function cc(n){return n===0&&1/n==-1/0}function F1(n){return typeof n=="number"&&Number.isInteger(n)&&!cc(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function j1(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=dy(e)),e=B1(n.get(t),e);return dy(e)}function B1(n,e){let t=e;const i=n.length;for(let o=0;o<i;o++){const l=n.charAt(o);switch(l){case"\0":t+="";break;case"":t+="";break;default:t+=l}}return t}function dy(n){return n+""}/**
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
 */function fy(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function gs(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function yv(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class rt{constructor(e,t){this.comparator=e,this.root=t||Ot.EMPTY}insert(e,t){return new rt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ot.BLACK,null,null))}remove(e){return new rt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ot.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const o=this.comparator(e,i.key);if(o===0)return t+i.left.size;o<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,i)=>(e(t,i),!1))}toString(){const e=[];return this.inorderTraversal((t,i)=>(e.push(`${t}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new bu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new bu(this.root,e,this.comparator,!1)}getReverseIterator(){return new bu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new bu(this.root,e,this.comparator,!0)}}class bu{constructor(e,t,i,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?i(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ot{constructor(e,t,i,o,l){this.key=e,this.value=t,this.color=i??Ot.RED,this.left=o??Ot.EMPTY,this.right=l??Ot.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,o,l){return new Ot(e??this.key,t??this.value,i??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let o=this;const l=i(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,i),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,i)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Ot.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Ot.EMPTY;i=o.right.min(),o=o.copy(i.key,i.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ot.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ot.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Te();const e=this.left.check();if(e!==this.right.check())throw Te();return e+(this.isRed()?0:1)}}Ot.EMPTY=null,Ot.RED=!0,Ot.BLACK=!1;Ot.EMPTY=new class{constructor(){this.size=0}get key(){throw Te()}get value(){throw Te()}get color(){throw Te()}get left(){throw Te()}get right(){throw Te()}copy(e,t,i,o,l){return this}insert(e,t,i){return new Ot(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class wt{constructor(e){this.comparator=e,this.data=new rt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,i)=>(e(t),!1))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const o=i.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new py(this.data.getIterator())}getIteratorFrom(e){return new py(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(i=>{t=t.add(i)}),t}isEqual(e){if(!(e instanceof wt)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new wt(this.comparator);return t.data=e,t}}class py{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Bn{constructor(e){this.fields=e,e.sort(Lt.comparator)}static empty(){return new Bn([])}unionWith(e){let t=new wt(Lt.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new Bn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Io(this.fields,e.fields,(t,i)=>t.isEqual(i))}}/**
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
 */class _v extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Vt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new _v("Invalid base64 string: "+l):l}}(e);return new Vt(t)}static fromUint8Array(e){const t=function(o){let l="";for(let h=0;h<o.length;++h)l+=String.fromCharCode(o[h]);return l}(e);return new Vt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Vt.EMPTY_BYTE_STRING=new Vt("");const z1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ai(n){if(Be(!!n),typeof n=="string"){let e=0;const t=z1.exec(n);if(Be(!!t),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:ct(n.seconds),nanos:ct(n.nanos)}}function ct(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ci(n){return typeof n=="string"?Vt.fromBase64String(n):Vt.fromUint8Array(n)}/**
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
 */function xf(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function xc(n){const e=n.mapValue.fields.__previous_value__;return xf(e)?xc(e):e}function el(n){const e=Ai(n.mapValue.fields.__local_write_time__.timestampValue);return new Et(e.seconds,e.nanos)}/**
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
 */class $1{constructor(e,t,i,o,l,h,f,p,y){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=o,this.ssl=l,this.forceLongPolling=h,this.autoDetectLongPolling=f,this.longPollingOptions=p,this.useFetchStreams=y}}class tl{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new tl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof tl&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Mu={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Pi(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?xf(n)?4:W1(n)?9007199254740991:H1(n)?10:11:Te()}function lr(n,e){if(n===e)return!0;const t=Pi(n);if(t!==Pi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return el(n).isEqual(el(e));case 3:return function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const h=Ai(o.timestampValue),f=Ai(l.timestampValue);return h.seconds===f.seconds&&h.nanos===f.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(o,l){return Ci(o.bytesValue).isEqual(Ci(l.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(o,l){return ct(o.geoPointValue.latitude)===ct(l.geoPointValue.latitude)&&ct(o.geoPointValue.longitude)===ct(l.geoPointValue.longitude)}(n,e);case 2:return function(o,l){if("integerValue"in o&&"integerValue"in l)return ct(o.integerValue)===ct(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const h=ct(o.doubleValue),f=ct(l.doubleValue);return h===f?cc(h)===cc(f):isNaN(h)&&isNaN(f)}return!1}(n,e);case 9:return Io(n.arrayValue.values||[],e.arrayValue.values||[],lr);case 10:case 11:return function(o,l){const h=o.mapValue.fields||{},f=l.mapValue.fields||{};if(fy(h)!==fy(f))return!1;for(const p in h)if(h.hasOwnProperty(p)&&(f[p]===void 0||!lr(h[p],f[p])))return!1;return!0}(n,e);default:return Te()}}function nl(n,e){return(n.values||[]).find(t=>lr(t,e))!==void 0}function So(n,e){if(n===e)return 0;const t=Pi(n),i=Pi(e);if(t!==i)return Le(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return Le(n.booleanValue,e.booleanValue);case 2:return function(l,h){const f=ct(l.integerValue||l.doubleValue),p=ct(h.integerValue||h.doubleValue);return f<p?-1:f>p?1:f===p?0:isNaN(f)?isNaN(p)?0:-1:1}(n,e);case 3:return my(n.timestampValue,e.timestampValue);case 4:return my(el(n),el(e));case 5:return Le(n.stringValue,e.stringValue);case 6:return function(l,h){const f=Ci(l),p=Ci(h);return f.compareTo(p)}(n.bytesValue,e.bytesValue);case 7:return function(l,h){const f=l.split("/"),p=h.split("/");for(let y=0;y<f.length&&y<p.length;y++){const E=Le(f[y],p[y]);if(E!==0)return E}return Le(f.length,p.length)}(n.referenceValue,e.referenceValue);case 8:return function(l,h){const f=Le(ct(l.latitude),ct(h.latitude));return f!==0?f:Le(ct(l.longitude),ct(h.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return gy(n.arrayValue,e.arrayValue);case 10:return function(l,h){var f,p,y,E;const T=l.fields||{},R=h.fields||{},O=(f=T.value)===null||f===void 0?void 0:f.arrayValue,b=(p=R.value)===null||p===void 0?void 0:p.arrayValue,z=Le(((y=O==null?void 0:O.values)===null||y===void 0?void 0:y.length)||0,((E=b==null?void 0:b.values)===null||E===void 0?void 0:E.length)||0);return z!==0?z:gy(O,b)}(n.mapValue,e.mapValue);case 11:return function(l,h){if(l===Mu.mapValue&&h===Mu.mapValue)return 0;if(l===Mu.mapValue)return 1;if(h===Mu.mapValue)return-1;const f=l.fields||{},p=Object.keys(f),y=h.fields||{},E=Object.keys(y);p.sort(),E.sort();for(let T=0;T<p.length&&T<E.length;++T){const R=Le(p[T],E[T]);if(R!==0)return R;const O=So(f[p[T]],y[E[T]]);if(O!==0)return O}return Le(p.length,E.length)}(n.mapValue,e.mapValue);default:throw Te()}}function my(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Le(n,e);const t=Ai(n),i=Ai(e),o=Le(t.seconds,i.seconds);return o!==0?o:Le(t.nanos,i.nanos)}function gy(n,e){const t=n.values||[],i=e.values||[];for(let o=0;o<t.length&&o<i.length;++o){const l=So(t[o],i[o]);if(l)return l}return Le(t.length,i.length)}function Ro(n){return Gd(n)}function Gd(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const i=Ai(t);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Ci(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return ye.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let i="[",o=!0;for(const l of t.values||[])o?o=!1:i+=",",i+=Gd(l);return i+"]"}(n.arrayValue):"mapValue"in n?function(t){const i=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const h of i)l?l=!1:o+=",",o+=`${h}:${Gd(t.fields[h])}`;return o+"}"}(n.mapValue):Te()}function Xu(n){switch(Pi(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=xc(n);return e?16+Xu(e):16;case 5:return 2*n.stringValue.length;case 6:return Ci(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(i){return(i.values||[]).reduce((o,l)=>o+Xu(l),0)}(n.arrayValue);case 10:case 11:return function(i){let o=0;return gs(i.fields,(l,h)=>{o+=l.length+Xu(h)}),o}(n.mapValue);default:throw Te()}}function Qd(n){return!!n&&"integerValue"in n}function Df(n){return!!n&&"arrayValue"in n}function yy(n){return!!n&&"nullValue"in n}function _y(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Yu(n){return!!n&&"mapValue"in n}function H1(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Ha(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return gs(n.mapValue.fields,(t,i)=>e.mapValue.fields[t]=Ha(i)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ha(n.arrayValue.values[t]);return e}return Object.assign({},n)}function W1(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Sn{constructor(e){this.value=e}static empty(){return new Sn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!Yu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ha(t)}setAll(e){let t=Lt.emptyPath(),i={},o=[];e.forEach((h,f)=>{if(!t.isImmediateParentOf(f)){const p=this.getFieldsMap(t);this.applyChanges(p,i,o),i={},o=[],t=f.popLast()}h?i[f.lastSegment()]=Ha(h):o.push(f.lastSegment())});const l=this.getFieldsMap(t);this.applyChanges(l,i,o)}delete(e){const t=this.field(e.popLast());Yu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return lr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let o=t.mapValue.fields[e.get(i)];Yu(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,i){gs(t,(o,l)=>e[o]=l);for(const o of i)delete e[o]}clone(){return new Sn(Ha(this.value))}}function vv(n){const e=[];return gs(n.fields,(t,i)=>{const o=new Lt([t]);if(Yu(i)){const l=vv(i.mapValue).fields;if(l.length===0)e.push(o);else for(const h of l)e.push(o.child(h))}else e.push(o)}),new Bn(e)}/**
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
 */class zt{constructor(e,t,i,o,l,h,f){this.key=e,this.documentType=t,this.version=i,this.readTime=o,this.createTime=l,this.data=h,this.documentState=f}static newInvalidDocument(e){return new zt(e,0,Re.min(),Re.min(),Re.min(),Sn.empty(),0)}static newFoundDocument(e,t,i,o){return new zt(e,1,t,Re.min(),i,o,0)}static newNoDocument(e,t){return new zt(e,2,t,Re.min(),Re.min(),Sn.empty(),0)}static newUnknownDocument(e,t){return new zt(e,3,t,Re.min(),Re.min(),Sn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Re.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Sn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Sn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Re.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof zt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new zt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class hc{constructor(e,t){this.position=e,this.inclusive=t}}function vy(n,e,t){let i=0;for(let o=0;o<n.position.length;o++){const l=e[o],h=n.position[o];if(l.field.isKeyField()?i=ye.comparator(ye.fromName(h.referenceValue),t.key):i=So(h,t.data.field(l.field)),l.dir==="desc"&&(i*=-1),i!==0)break}return i}function Ey(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!lr(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class dc{constructor(e,t="asc"){this.field=e,this.dir=t}}function q1(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Ev{}class vt extends Ev{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new G1(e,t,i):t==="array-contains"?new Y1(e,i):t==="in"?new J1(e,i):t==="not-in"?new Z1(e,i):t==="array-contains-any"?new eA(e,i):new vt(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new Q1(e,i):new X1(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(So(t,this.value)):t!==null&&Pi(this.value)===Pi(t)&&this.matchesComparison(So(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Te()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ur extends Ev{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new ur(e,t)}matches(e){return wv(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function wv(n){return n.op==="and"}function Tv(n){return K1(n)&&wv(n)}function K1(n){for(const e of n.filters)if(e instanceof ur)return!1;return!0}function Xd(n){if(n instanceof vt)return n.field.canonicalString()+n.op.toString()+Ro(n.value);if(Tv(n))return n.filters.map(e=>Xd(e)).join(",");{const e=n.filters.map(t=>Xd(t)).join(",");return`${n.op}(${e})`}}function Iv(n,e){return n instanceof vt?function(i,o){return o instanceof vt&&i.op===o.op&&i.field.isEqual(o.field)&&lr(i.value,o.value)}(n,e):n instanceof ur?function(i,o){return o instanceof ur&&i.op===o.op&&i.filters.length===o.filters.length?i.filters.reduce((l,h,f)=>l&&Iv(h,o.filters[f]),!0):!1}(n,e):void Te()}function Sv(n){return n instanceof vt?function(t){return`${t.field.canonicalString()} ${t.op} ${Ro(t.value)}`}(n):n instanceof ur?function(t){return t.op.toString()+" {"+t.getFilters().map(Sv).join(" ,")+"}"}(n):"Filter"}class G1 extends vt{constructor(e,t,i){super(e,t,i),this.key=ye.fromName(i.referenceValue)}matches(e){const t=ye.comparator(e.key,this.key);return this.matchesComparison(t)}}class Q1 extends vt{constructor(e,t){super(e,"in",t),this.keys=Rv("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class X1 extends vt{constructor(e,t){super(e,"not-in",t),this.keys=Rv("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Rv(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(i=>ye.fromName(i.referenceValue))}class Y1 extends vt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Df(t)&&nl(t.arrayValue,this.value)}}class J1 extends vt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&nl(this.value.arrayValue,t)}}class Z1 extends vt{constructor(e,t){super(e,"not-in",t)}matches(e){if(nl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!nl(this.value.arrayValue,t)}}class eA extends vt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Df(t)||!t.arrayValue.values)&&t.arrayValue.values.some(i=>nl(this.value.arrayValue,i))}}/**
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
 */class tA{constructor(e,t=null,i=[],o=[],l=null,h=null,f=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=o,this.limit=l,this.startAt=h,this.endAt=f,this.ue=null}}function wy(n,e=null,t=[],i=[],o=null,l=null,h=null){return new tA(n,e,t,i,o,l,h)}function Of(n){const e=Ae(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(i=>Xd(i)).join(","),t+="|ob:",t+=e.orderBy.map(i=>function(l){return l.field.canonicalString()+l.dir}(i)).join(","),Nc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(i=>Ro(i)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(i=>Ro(i)).join(",")),e.ue=t}return e.ue}function Lf(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!q1(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Iv(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Ey(n.startAt,e.startAt)&&Ey(n.endAt,e.endAt)}function Yd(n){return ye.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Dc{constructor(e,t=null,i=[],o=[],l=null,h="F",f=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=o,this.limit=l,this.limitType=h,this.startAt=f,this.endAt=p,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function nA(n,e,t,i,o,l,h,f){return new Dc(n,e,t,i,o,l,h,f)}function Vf(n){return new Dc(n)}function Ty(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function rA(n){return n.collectionGroup!==null}function Wa(n){const e=Ae(n);if(e.ce===null){e.ce=[];const t=new Set;for(const l of e.explicitOrderBy)e.ce.push(l),t.add(l.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let f=new wt(Lt.comparator);return h.filters.forEach(p=>{p.getFlattenedFilters().forEach(y=>{y.isInequality()&&(f=f.add(y.field))})}),f})(e).forEach(l=>{t.has(l.canonicalString())||l.isKeyField()||e.ce.push(new dc(l,i))}),t.has(Lt.keyField().canonicalString())||e.ce.push(new dc(Lt.keyField(),i))}return e.ce}function sr(n){const e=Ae(n);return e.le||(e.le=iA(e,Wa(n))),e.le}function iA(n,e){if(n.limitType==="F")return wy(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(o=>{const l=o.dir==="desc"?"asc":"desc";return new dc(o.field,l)});const t=n.endAt?new hc(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new hc(n.startAt.position,n.startAt.inclusive):null;return wy(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function Jd(n,e,t){return new Dc(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Oc(n,e){return Lf(sr(n),sr(e))&&n.limitType===e.limitType}function Av(n){return`${Of(sr(n))}|lt:${n.limitType}`}function fo(n){return`Query(target=${function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map(o=>Sv(o)).join(", ")}]`),Nc(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map(o=>function(h){return`${h.field.canonicalString()} (${h.dir})`}(o)).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map(o=>Ro(o)).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map(o=>Ro(o)).join(",")),`Target(${i})`}(sr(n))}; limitType=${n.limitType})`}function Lc(n,e){return e.isFoundDocument()&&function(i,o){const l=o.key.path;return i.collectionGroup!==null?o.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(l):ye.isDocumentKey(i.path)?i.path.isEqual(l):i.path.isImmediateParentOf(l)}(n,e)&&function(i,o){for(const l of Wa(i))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0}(n,e)&&function(i,o){for(const l of i.filters)if(!l.matches(o))return!1;return!0}(n,e)&&function(i,o){return!(i.startAt&&!function(h,f,p){const y=vy(h,f,p);return h.inclusive?y<=0:y<0}(i.startAt,Wa(i),o)||i.endAt&&!function(h,f,p){const y=vy(h,f,p);return h.inclusive?y>=0:y>0}(i.endAt,Wa(i),o))}(n,e)}function sA(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Cv(n){return(e,t)=>{let i=!1;for(const o of Wa(n)){const l=oA(o,e,t);if(l!==0)return l;i=i||o.field.isKeyField()}return 0}}function oA(n,e,t){const i=n.field.isKeyField()?ye.comparator(e.key,t.key):function(l,h,f){const p=h.data.field(l),y=f.data.field(l);return p!==null&&y!==null?So(p,y):Te()}(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return Te()}}/**
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
 */class ys{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[o,l]of i)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),o=this.inner[i];if(o===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return i.length===1?delete this.inner[t]:i.splice(o,1),this.innerSize--,!0;return!1}forEach(e){gs(this.inner,(t,i)=>{for(const[o,l]of i)e(o,l)})}isEmpty(){return yv(this.inner)}size(){return this.innerSize}}/**
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
 */const aA=new rt(ye.comparator);function Ur(){return aA}const Pv=new rt(ye.comparator);function ja(...n){let e=Pv;for(const t of n)e=e.insert(t.key,t);return e}function kv(n){let e=Pv;return n.forEach((t,i)=>e=e.insert(t,i.overlayedDocument)),e}function as(){return qa()}function Nv(){return qa()}function qa(){return new ys(n=>n.toString(),(n,e)=>n.isEqual(e))}const lA=new rt(ye.comparator),uA=new wt(ye.comparator);function De(...n){let e=uA;for(const t of n)e=e.add(t);return e}const cA=new wt(Le);function hA(){return cA}/**
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
 */function bf(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:cc(e)?"-0":e}}function xv(n){return{integerValue:""+n}}function dA(n,e){return F1(e)?xv(e):bf(n,e)}/**
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
 */class Vc{constructor(){this._=void 0}}function fA(n,e,t){return n instanceof fc?function(o,l){const h={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&xf(l)&&(l=xc(l)),l&&(h.fields.__previous_value__=l),{mapValue:h}}(t,e):n instanceof rl?Ov(n,e):n instanceof il?Lv(n,e):function(o,l){const h=Dv(o,l),f=Iy(h)+Iy(o.Pe);return Qd(h)&&Qd(o.Pe)?xv(f):bf(o.serializer,f)}(n,e)}function pA(n,e,t){return n instanceof rl?Ov(n,e):n instanceof il?Lv(n,e):t}function Dv(n,e){return n instanceof pc?function(i){return Qd(i)||function(l){return!!l&&"doubleValue"in l}(i)}(e)?e:{integerValue:0}:null}class fc extends Vc{}class rl extends Vc{constructor(e){super(),this.elements=e}}function Ov(n,e){const t=Vv(e);for(const i of n.elements)t.some(o=>lr(o,i))||t.push(i);return{arrayValue:{values:t}}}class il extends Vc{constructor(e){super(),this.elements=e}}function Lv(n,e){let t=Vv(e);for(const i of n.elements)t=t.filter(o=>!lr(o,i));return{arrayValue:{values:t}}}class pc extends Vc{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Iy(n){return ct(n.integerValue||n.doubleValue)}function Vv(n){return Df(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function mA(n,e){return n.field.isEqual(e.field)&&function(i,o){return i instanceof rl&&o instanceof rl||i instanceof il&&o instanceof il?Io(i.elements,o.elements,lr):i instanceof pc&&o instanceof pc?lr(i.Pe,o.Pe):i instanceof fc&&o instanceof fc}(n.transform,e.transform)}class gA{constructor(e,t){this.version=e,this.transformResults=t}}class or{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new or}static exists(e){return new or(void 0,e)}static updateTime(e){return new or(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ju(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class bc{}function bv(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Mf(n.key,or.none()):new dl(n.key,n.data,or.none());{const t=n.data,i=Sn.empty();let o=new wt(Lt.comparator);for(let l of e.fields)if(!o.has(l)){let h=t.field(l);h===null&&l.length>1&&(l=l.popLast(),h=t.field(l)),h===null?i.delete(l):i.set(l,h),o=o.add(l)}return new _s(n.key,i,new Bn(o.toArray()),or.none())}}function yA(n,e,t){n instanceof dl?function(o,l,h){const f=o.value.clone(),p=Ry(o.fieldTransforms,l,h.transformResults);f.setAll(p),l.convertToFoundDocument(h.version,f).setHasCommittedMutations()}(n,e,t):n instanceof _s?function(o,l,h){if(!Ju(o.precondition,l))return void l.convertToUnknownDocument(h.version);const f=Ry(o.fieldTransforms,l,h.transformResults),p=l.data;p.setAll(Mv(o)),p.setAll(f),l.convertToFoundDocument(h.version,p).setHasCommittedMutations()}(n,e,t):function(o,l,h){l.convertToNoDocument(h.version).setHasCommittedMutations()}(0,e,t)}function Ka(n,e,t,i){return n instanceof dl?function(l,h,f,p){if(!Ju(l.precondition,h))return f;const y=l.value.clone(),E=Ay(l.fieldTransforms,p,h);return y.setAll(E),h.convertToFoundDocument(h.version,y).setHasLocalMutations(),null}(n,e,t,i):n instanceof _s?function(l,h,f,p){if(!Ju(l.precondition,h))return f;const y=Ay(l.fieldTransforms,p,h),E=h.data;return E.setAll(Mv(l)),E.setAll(y),h.convertToFoundDocument(h.version,E).setHasLocalMutations(),f===null?null:f.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map(T=>T.field))}(n,e,t,i):function(l,h,f){return Ju(l.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):f}(n,e,t)}function _A(n,e){let t=null;for(const i of n.fieldTransforms){const o=e.data.field(i.field),l=Dv(i.transform,o||null);l!=null&&(t===null&&(t=Sn.empty()),t.set(i.field,l))}return t||null}function Sy(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(i,o){return i===void 0&&o===void 0||!(!i||!o)&&Io(i,o,(l,h)=>mA(l,h))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class dl extends bc{constructor(e,t,i,o=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class _s extends bc{constructor(e,t,i,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function Mv(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}}),e}function Ry(n,e,t){const i=new Map;Be(n.length===t.length);for(let o=0;o<t.length;o++){const l=n[o],h=l.transform,f=e.data.field(l.field);i.set(l.field,pA(h,f,t[o]))}return i}function Ay(n,e,t){const i=new Map;for(const o of n){const l=o.transform,h=t.data.field(o.field);i.set(o.field,fA(l,h,e))}return i}class Mf extends bc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class vA extends bc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class EA{constructor(e,t,i,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=o}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&yA(l,e,i[o])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=Ka(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=Ka(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=Nv();return this.mutations.forEach(o=>{const l=e.get(o.key),h=l.overlayedDocument;let f=this.applyToLocalView(h,l.mutatedFields);f=t.has(o.key)?null:f;const p=bv(h,f);p!==null&&i.set(o.key,p),h.isValidDocument()||h.convertToNoDocument(Re.min())}),i}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),De())}isEqual(e){return this.batchId===e.batchId&&Io(this.mutations,e.mutations,(t,i)=>Sy(t,i))&&Io(this.baseMutations,e.baseMutations,(t,i)=>Sy(t,i))}}class Uf{constructor(e,t,i,o){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=o}static from(e,t,i){Be(e.mutations.length===i.length);let o=function(){return lA}();const l=e.mutations;for(let h=0;h<l.length;h++)o=o.insert(l[h].key,i[h].version);return new Uf(e,t,i,o)}}/**
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
 */class wA{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class TA{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var ft,Me;function IA(n){switch(n){default:return Te();case X.CANCELLED:case X.UNKNOWN:case X.DEADLINE_EXCEEDED:case X.RESOURCE_EXHAUSTED:case X.INTERNAL:case X.UNAVAILABLE:case X.UNAUTHENTICATED:return!1;case X.INVALID_ARGUMENT:case X.NOT_FOUND:case X.ALREADY_EXISTS:case X.PERMISSION_DENIED:case X.FAILED_PRECONDITION:case X.ABORTED:case X.OUT_OF_RANGE:case X.UNIMPLEMENTED:case X.DATA_LOSS:return!0}}function Uv(n){if(n===void 0)return Mr("GRPC error has no .code"),X.UNKNOWN;switch(n){case ft.OK:return X.OK;case ft.CANCELLED:return X.CANCELLED;case ft.UNKNOWN:return X.UNKNOWN;case ft.DEADLINE_EXCEEDED:return X.DEADLINE_EXCEEDED;case ft.RESOURCE_EXHAUSTED:return X.RESOURCE_EXHAUSTED;case ft.INTERNAL:return X.INTERNAL;case ft.UNAVAILABLE:return X.UNAVAILABLE;case ft.UNAUTHENTICATED:return X.UNAUTHENTICATED;case ft.INVALID_ARGUMENT:return X.INVALID_ARGUMENT;case ft.NOT_FOUND:return X.NOT_FOUND;case ft.ALREADY_EXISTS:return X.ALREADY_EXISTS;case ft.PERMISSION_DENIED:return X.PERMISSION_DENIED;case ft.FAILED_PRECONDITION:return X.FAILED_PRECONDITION;case ft.ABORTED:return X.ABORTED;case ft.OUT_OF_RANGE:return X.OUT_OF_RANGE;case ft.UNIMPLEMENTED:return X.UNIMPLEMENTED;case ft.DATA_LOSS:return X.DATA_LOSS;default:return Te()}}(Me=ft||(ft={}))[Me.OK=0]="OK",Me[Me.CANCELLED=1]="CANCELLED",Me[Me.UNKNOWN=2]="UNKNOWN",Me[Me.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Me[Me.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Me[Me.NOT_FOUND=5]="NOT_FOUND",Me[Me.ALREADY_EXISTS=6]="ALREADY_EXISTS",Me[Me.PERMISSION_DENIED=7]="PERMISSION_DENIED",Me[Me.UNAUTHENTICATED=16]="UNAUTHENTICATED",Me[Me.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Me[Me.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Me[Me.ABORTED=10]="ABORTED",Me[Me.OUT_OF_RANGE=11]="OUT_OF_RANGE",Me[Me.UNIMPLEMENTED=12]="UNIMPLEMENTED",Me[Me.INTERNAL=13]="INTERNAL",Me[Me.UNAVAILABLE=14]="UNAVAILABLE",Me[Me.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function SA(){return new TextEncoder}/**
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
 */const RA=new ls([4294967295,4294967295],0);function Cy(n){const e=SA().encode(n),t=new uv;return t.update(e),new Uint8Array(t.digest())}function Py(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new ls([t,i],0),new ls([o,l],0)]}class Ff{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new Ba(`Invalid padding: ${t}`);if(i<0)throw new Ba(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new Ba(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new Ba(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=ls.fromNumber(this.Te)}Ee(e,t,i){let o=e.add(t.multiply(ls.fromNumber(i)));return o.compare(RA)===1&&(o=new ls([o.getBits(0),o.getBits(1)],0)),o.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=Cy(e),[i,o]=Py(t);for(let l=0;l<this.hashCount;l++){const h=this.Ee(i,o,l);if(!this.de(h))return!1}return!0}static create(e,t,i){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),h=new Ff(l,o,t);return i.forEach(f=>h.insert(f)),h}insert(e){if(this.Te===0)return;const t=Cy(e),[i,o]=Py(t);for(let l=0;l<this.hashCount;l++){const h=this.Ee(i,o,l);this.Ae(h)}}Ae(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class Ba extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Mc{constructor(e,t,i,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const o=new Map;return o.set(e,fl.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new Mc(Re.min(),o,new rt(Le),Ur(),De())}}class fl{constructor(e,t,i,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new fl(i,t,De(),De(),De())}}/**
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
 */class Zu{constructor(e,t,i,o){this.Re=e,this.removedTargetIds=t,this.key=i,this.Ve=o}}class Fv{constructor(e,t){this.targetId=e,this.me=t}}class jv{constructor(e,t,i=Vt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=o}}class ky{constructor(){this.fe=0,this.ge=Ny(),this.pe=Vt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=De(),t=De(),i=De();return this.ge.forEach((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:i=i.add(o);break;default:Te()}}),new fl(this.pe,this.ye,e,t,i)}Ce(){this.we=!1,this.ge=Ny()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Be(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class AA{constructor(e){this.Le=e,this.Be=new Map,this.ke=Ur(),this.qe=Uu(),this.Qe=Uu(),this.Ke=new rt(Le)}$e(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,t=>{const i=this.ze(t);switch(e.state){case 0:this.je(t)&&i.De(e.resumeToken);break;case 1:i.Oe(),i.Se||i.Ce(),i.De(e.resumeToken);break;case 2:i.Oe(),i.Se||this.removeTarget(t);break;case 3:this.je(t)&&(i.Ne(),i.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),i.De(e.resumeToken));break;default:Te()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((i,o)=>{this.je(o)&&t(o)})}Je(e){const t=e.targetId,i=e.me.count,o=this.Ye(t);if(o){const l=o.target;if(Yd(l))if(i===0){const h=new ye(l.path);this.We(t,h,zt.newNoDocument(h,Re.min()))}else Be(i===1);else{const h=this.Ze(t);if(h!==i){const f=this.Xe(e),p=f?this.et(f,e,h):1;if(p!==0){this.He(t);const y=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,y)}}}}}Xe(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:o=0},hashCount:l=0}=t;let h,f;try{h=Ci(i).toUint8Array()}catch(p){if(p instanceof _v)return To("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{f=new Ff(h,o,l)}catch(p){return To(p instanceof Ba?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return f.Te===0?null:f}et(e,t,i){return t.me.count===i-this.rt(e,t.targetId)?0:2}rt(e,t){const i=this.Le.getRemoteKeysForTarget(t);let o=0;return i.forEach(l=>{const h=this.Le.nt(),f=`projects/${h.projectId}/databases/${h.database}/documents/${l.path.canonicalString()}`;e.mightContain(f)||(this.We(t,l,null),o++)}),o}it(e){const t=new Map;this.Be.forEach((l,h)=>{const f=this.Ye(h);if(f){if(l.current&&Yd(f.target)){const p=new ye(f.target.path);this.st(p).has(h)||this.ot(h,p)||this.We(h,p,zt.newNoDocument(p,e))}l.be&&(t.set(h,l.ve()),l.Ce())}});let i=De();this.Qe.forEach((l,h)=>{let f=!0;h.forEachWhile(p=>{const y=this.Ye(p);return!y||y.purpose==="TargetPurposeLimboResolution"||(f=!1,!1)}),f&&(i=i.add(l))}),this.ke.forEach((l,h)=>h.setReadTime(e));const o=new Mc(e,t,this.Ke,this.ke,i);return this.ke=Ur(),this.qe=Uu(),this.Qe=Uu(),this.Ke=new rt(Le),o}Ue(e,t){if(!this.je(e))return;const i=this.ot(e,t.key)?2:0;this.ze(e).Fe(t.key,i),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,i){if(!this.je(e))return;const o=this.ze(e);this.ot(e,t)?o.Fe(t,1):o.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),i&&(this.ke=this.ke.insert(t,i))}removeTarget(e){this.Be.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Be.get(e);return t||(t=new ky,this.Be.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new wt(Le),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new wt(Le),this.qe=this.qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||le("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new ky),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}ot(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Uu(){return new rt(ye.comparator)}function Ny(){return new rt(ye.comparator)}const CA={asc:"ASCENDING",desc:"DESCENDING"},PA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},kA={and:"AND",or:"OR"};class NA{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Zd(n,e){return n.useProto3Json||Nc(e)?e:{value:e}}function mc(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Bv(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function xA(n,e){return mc(n,e.toTimestamp())}function ar(n){return Be(!!n),Re.fromTimestamp(function(t){const i=Ai(t);return new Et(i.seconds,i.nanos)}(n))}function jf(n,e){return ef(n,e).canonicalString()}function ef(n,e){const t=function(o){return new Je(["projects",o.projectId,"databases",o.database])}(n).child("documents");return e===void 0?t:t.child(e)}function zv(n){const e=Je.fromString(n);return Be(Kv(e)),e}function tf(n,e){return jf(n.databaseId,e.path)}function kd(n,e){const t=zv(e);if(t.get(1)!==n.databaseId.projectId)throw new pe(X.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new pe(X.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ye(Hv(t))}function $v(n,e){return jf(n.databaseId,e)}function DA(n){const e=zv(n);return e.length===4?Je.emptyPath():Hv(e)}function nf(n){return new Je(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Hv(n){return Be(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function xy(n,e,t){return{name:tf(n,e),fields:t.value.mapValue.fields}}function OA(n,e){let t;if("targetChange"in e){e.targetChange;const i=function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:Te()}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=function(y,E){return y.useProto3Json?(Be(E===void 0||typeof E=="string"),Vt.fromBase64String(E||"")):(Be(E===void 0||E instanceof Buffer||E instanceof Uint8Array),Vt.fromUint8Array(E||new Uint8Array))}(n,e.targetChange.resumeToken),h=e.targetChange.cause,f=h&&function(y){const E=y.code===void 0?X.UNKNOWN:Uv(y.code);return new pe(E,y.message||"")}(h);t=new jv(i,o,l,f||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const o=kd(n,i.document.name),l=ar(i.document.updateTime),h=i.document.createTime?ar(i.document.createTime):Re.min(),f=new Sn({mapValue:{fields:i.document.fields}}),p=zt.newFoundDocument(o,l,h,f),y=i.targetIds||[],E=i.removedTargetIds||[];t=new Zu(y,E,p.key,p)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const o=kd(n,i.document),l=i.readTime?ar(i.readTime):Re.min(),h=zt.newNoDocument(o,l),f=i.removedTargetIds||[];t=new Zu([],f,h.key,h)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const o=kd(n,i.document),l=i.removedTargetIds||[];t=new Zu([],l,o,null)}else{if(!("filter"in e))return Te();{e.filter;const i=e.filter;i.targetId;const{count:o=0,unchangedNames:l}=i,h=new TA(o,l),f=i.targetId;t=new Fv(f,h)}}return t}function LA(n,e){let t;if(e instanceof dl)t={update:xy(n,e.key,e.value)};else if(e instanceof Mf)t={delete:tf(n,e.key)};else if(e instanceof _s)t={update:xy(n,e.key,e.data),updateMask:$A(e.fieldMask)};else{if(!(e instanceof vA))return Te();t={verify:tf(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(i=>function(l,h){const f=h.transform;if(f instanceof fc)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(f instanceof rl)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:f.elements}};if(f instanceof il)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:f.elements}};if(f instanceof pc)return{fieldPath:h.field.canonicalString(),increment:f.Pe};throw Te()}(0,i))),e.precondition.isNone||(t.currentDocument=function(o,l){return l.updateTime!==void 0?{updateTime:xA(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:Te()}(n,e.precondition)),t}function VA(n,e){return n&&n.length>0?(Be(e!==void 0),n.map(t=>function(o,l){let h=o.updateTime?ar(o.updateTime):ar(l);return h.isEqual(Re.min())&&(h=ar(l)),new gA(h,o.transformResults||[])}(t,e))):[]}function bA(n,e){return{documents:[$v(n,e.path)]}}function MA(n,e){const t={structuredQuery:{}},i=e.path;let o;e.collectionGroup!==null?(o=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=$v(n,o);const l=function(y){if(y.length!==0)return qv(ur.create(y,"and"))}(e.filters);l&&(t.structuredQuery.where=l);const h=function(y){if(y.length!==0)return y.map(E=>function(R){return{field:po(R.field),direction:jA(R.dir)}}(E))}(e.orderBy);h&&(t.structuredQuery.orderBy=h);const f=Zd(n,e.limit);return f!==null&&(t.structuredQuery.limit=f),e.startAt&&(t.structuredQuery.startAt=function(y){return{before:y.inclusive,values:y.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(y){return{before:!y.inclusive,values:y.position}}(e.endAt)),{ct:t,parent:o}}function UA(n){let e=DA(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let o=null;if(i>0){Be(i===1);const E=t.from[0];E.allDescendants?o=E.collectionId:e=e.child(E.collectionId)}let l=[];t.where&&(l=function(T){const R=Wv(T);return R instanceof ur&&Tv(R)?R.getFilters():[R]}(t.where));let h=[];t.orderBy&&(h=function(T){return T.map(R=>function(b){return new dc(mo(b.field),function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(b.direction))}(R))}(t.orderBy));let f=null;t.limit&&(f=function(T){let R;return R=typeof T=="object"?T.value:T,Nc(R)?null:R}(t.limit));let p=null;t.startAt&&(p=function(T){const R=!!T.before,O=T.values||[];return new hc(O,R)}(t.startAt));let y=null;return t.endAt&&(y=function(T){const R=!T.before,O=T.values||[];return new hc(O,R)}(t.endAt)),nA(e,o,h,l,f,"F",p,y)}function FA(n,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Te()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Wv(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=mo(t.unaryFilter.field);return vt.create(i,"==",{doubleValue:NaN});case"IS_NULL":const o=mo(t.unaryFilter.field);return vt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=mo(t.unaryFilter.field);return vt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=mo(t.unaryFilter.field);return vt.create(h,"!=",{nullValue:"NULL_VALUE"});default:return Te()}}(n):n.fieldFilter!==void 0?function(t){return vt.create(mo(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Te()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return ur.create(t.compositeFilter.filters.map(i=>Wv(i)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Te()}}(t.compositeFilter.op))}(n):Te()}function jA(n){return CA[n]}function BA(n){return PA[n]}function zA(n){return kA[n]}function po(n){return{fieldPath:n.canonicalString()}}function mo(n){return Lt.fromServerFormat(n.fieldPath)}function qv(n){return n instanceof vt?function(t){if(t.op==="=="){if(_y(t.value))return{unaryFilter:{field:po(t.field),op:"IS_NAN"}};if(yy(t.value))return{unaryFilter:{field:po(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(_y(t.value))return{unaryFilter:{field:po(t.field),op:"IS_NOT_NAN"}};if(yy(t.value))return{unaryFilter:{field:po(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:po(t.field),op:BA(t.op),value:t.value}}}(n):n instanceof ur?function(t){const i=t.getFilters().map(o=>qv(o));return i.length===1?i[0]:{compositeFilter:{op:zA(t.op),filters:i}}}(n):Te()}function $A(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Kv(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class gi{constructor(e,t,i,o,l=Re.min(),h=Re.min(),f=Vt.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=f,this.expectedCount=p}withSequenceNumber(e){return new gi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new gi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new gi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new gi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class HA{constructor(e){this.ht=e}}function WA(n){const e=UA({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Jd(e,e.limit,"L"):e}/**
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
 */class qA{constructor(){this.ln=new KA}addToCollectionParentIndex(e,t){return this.ln.add(t),K.resolve()}getCollectionParents(e,t){return K.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return K.resolve()}deleteFieldIndex(e,t){return K.resolve()}deleteAllFieldIndexes(e){return K.resolve()}createTargetIndexes(e,t){return K.resolve()}getDocumentsMatchingTarget(e,t){return K.resolve(null)}getIndexType(e,t){return K.resolve(0)}getFieldIndexes(e,t){return K.resolve([])}getNextCollectionGroupToUpdate(e){return K.resolve(null)}getMinOffset(e,t){return K.resolve(Ri.min())}getMinOffsetFromCollectionGroup(e,t){return K.resolve(Ri.min())}updateCollectionGroup(e,t,i){return K.resolve()}updateIndexEntries(e,t){return K.resolve()}}class KA{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t]||new wt(Je.comparator),l=!o.has(i);return this.index[t]=o.add(i),l}has(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t];return o&&o.has(i)}getEntries(e){return(this.index[e]||new wt(Je.comparator)).toArray()}}/**
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
 */const Dy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class rn{static withCacheSize(e){return new rn(e,rn.DEFAULT_COLLECTION_PERCENTILE,rn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
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
 */rn.DEFAULT_COLLECTION_PERCENTILE=10,rn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,rn.DEFAULT=new rn(41943040,rn.DEFAULT_COLLECTION_PERCENTILE,rn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),rn.DISABLED=new rn(-1,0,0);/**
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
 */class Ao{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new Ao(0)}static Qn(){return new Ao(-1)}}/**
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
 */function Oy([n,e],[t,i]){const o=Le(n,t);return o===0?Le(e,i):o}class GA{constructor(e){this.Gn=e,this.buffer=new wt(Oy),this.zn=0}jn(){return++this.zn}Hn(e){const t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();Oy(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class QA{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){le("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Mo(t)?le("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await bo(t)}await this.Yn(3e5)})}}class XA{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(i=>Math.floor(t/100*i))}nthSequenceNumber(e,t){if(t===0)return K.resolve(kc.oe);const i=new GA(t);return this.Zn.forEachTarget(e,o=>i.Hn(o.sequenceNumber)).next(()=>this.Zn.er(e,o=>i.Hn(o))).next(()=>i.maxValue)}removeTargets(e,t,i){return this.Zn.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(le("LruGarbageCollector","Garbage collection skipped; disabled"),K.resolve(Dy)):this.getCacheSize(e).next(i=>i<this.params.cacheSizeCollectionThreshold?(le("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Dy):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let i,o,l,h,f,p,y;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(T=>(T>this.params.maximumSequenceNumbersToCollect?(le("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),o=this.params.maximumSequenceNumbersToCollect):o=T,h=Date.now(),this.nthSequenceNumber(e,o))).next(T=>(i=T,f=Date.now(),this.removeTargets(e,i,t))).next(T=>(l=T,p=Date.now(),this.removeOrphanedDocuments(e,i))).next(T=>(y=Date.now(),ho()<=xe.DEBUG&&le("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-E}ms
	Determined least recently used ${o} in `+(f-h)+`ms
	Removed ${l} targets in `+(p-f)+`ms
	Removed ${T} documents in `+(y-p)+`ms
Total Duration: ${y-E}ms`),K.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:T})))}}function YA(n,e){return new XA(n,e)}/**
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
 */class JA{constructor(){this.changes=new ys(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,zt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?K.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class ZA{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class eC{constructor(e,t,i,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=o}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(i=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(i!==null&&Ka(i.mutation,o,Bn.empty(),Et.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.getLocalViewOfDocuments(e,i,De()).next(()=>i))}getLocalViewOfDocuments(e,t,i=De()){const o=as();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,i).next(l=>{let h=ja();return l.forEach((f,p)=>{h=h.insert(f,p.overlayedDocument)}),h}))}getOverlayedDocuments(e,t){const i=as();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,De()))}populateOverlays(e,t,i){const o=[];return i.forEach(l=>{t.has(l)||o.push(l)}),this.documentOverlayCache.getOverlays(e,o).next(l=>{l.forEach((h,f)=>{t.set(h,f)})})}computeViews(e,t,i,o){let l=Ur();const h=qa(),f=function(){return qa()}();return t.forEach((p,y)=>{const E=i.get(y.key);o.has(y.key)&&(E===void 0||E.mutation instanceof _s)?l=l.insert(y.key,y):E!==void 0?(h.set(y.key,E.mutation.getFieldMask()),Ka(E.mutation,y,E.mutation.getFieldMask(),Et.now())):h.set(y.key,Bn.empty())}),this.recalculateAndSaveOverlays(e,l).next(p=>(p.forEach((y,E)=>h.set(y,E)),t.forEach((y,E)=>{var T;return f.set(y,new ZA(E,(T=h.get(y))!==null&&T!==void 0?T:null))}),f))}recalculateAndSaveOverlays(e,t){const i=qa();let o=new rt((h,f)=>h-f),l=De();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(h=>{for(const f of h)f.keys().forEach(p=>{const y=t.get(p);if(y===null)return;let E=i.get(p)||Bn.empty();E=f.applyToLocalView(y,E),i.set(p,E);const T=(o.get(f.batchId)||De()).add(p);o=o.insert(f.batchId,T)})}).next(()=>{const h=[],f=o.getReverseIterator();for(;f.hasNext();){const p=f.getNext(),y=p.key,E=p.value,T=Nv();E.forEach(R=>{if(!l.has(R)){const O=bv(t.get(R),i.get(R));O!==null&&T.set(R,O),l=l.add(R)}}),h.push(this.documentOverlayCache.saveOverlays(e,y,T))}return K.waitFor(h)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,t,i,o){return function(h){return ye.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):rA(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,o):this.getDocumentsMatchingCollectionQuery(e,t,i,o)}getNextDocuments(e,t,i,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,o).next(l=>{const h=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,o-l.size):K.resolve(as());let f=-1,p=l;return h.next(y=>K.forEach(y,(E,T)=>(f<T.largestBatchId&&(f=T.largestBatchId),l.get(E)?K.resolve():this.remoteDocumentCache.getEntry(e,E).next(R=>{p=p.insert(E,R)}))).next(()=>this.populateOverlays(e,y,l)).next(()=>this.computeViews(e,p,y,De())).next(E=>({batchId:f,changes:kv(E)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ye(t)).next(i=>{let o=ja();return i.isFoundDocument()&&(o=o.insert(i.key,i)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,i,o){const l=t.collectionGroup;let h=ja();return this.indexManager.getCollectionParents(e,l).next(f=>K.forEach(f,p=>{const y=function(T,R){return new Dc(R,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(t,p.child(l));return this.getDocumentsMatchingCollectionQuery(e,y,i,o).next(E=>{E.forEach((T,R)=>{h=h.insert(T,R)})})}).next(()=>h))}getDocumentsMatchingCollectionQuery(e,t,i,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next(h=>(l=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,l,o))).next(h=>{l.forEach((p,y)=>{const E=y.getKey();h.get(E)===null&&(h=h.insert(E,zt.newInvalidDocument(E)))});let f=ja();return h.forEach((p,y)=>{const E=l.get(p);E!==void 0&&Ka(E.mutation,y,Bn.empty(),Et.now()),Lc(t,y)&&(f=f.insert(p,y))}),f})}}/**
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
 */class tC{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return K.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,function(o){return{id:o.id,version:o.version,createTime:ar(o.createTime)}}(t)),K.resolve()}getNamedQuery(e,t){return K.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,function(o){return{name:o.name,query:WA(o.bundledQuery),readTime:ar(o.readTime)}}(t)),K.resolve()}}/**
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
 */class nC{constructor(){this.overlays=new rt(ye.comparator),this.Er=new Map}getOverlay(e,t){return K.resolve(this.overlays.get(t))}getOverlays(e,t){const i=as();return K.forEach(t,o=>this.getOverlay(e,o).next(l=>{l!==null&&i.set(o,l)})).next(()=>i)}saveOverlays(e,t,i){return i.forEach((o,l)=>{this.Tt(e,t,l)}),K.resolve()}removeOverlaysForBatchId(e,t,i){const o=this.Er.get(i);return o!==void 0&&(o.forEach(l=>this.overlays=this.overlays.remove(l)),this.Er.delete(i)),K.resolve()}getOverlaysForCollection(e,t,i){const o=as(),l=t.length+1,h=new ye(t.child("")),f=this.overlays.getIteratorFrom(h);for(;f.hasNext();){const p=f.getNext().value,y=p.getKey();if(!t.isPrefixOf(y.path))break;y.path.length===l&&p.largestBatchId>i&&o.set(p.getKey(),p)}return K.resolve(o)}getOverlaysForCollectionGroup(e,t,i,o){let l=new rt((y,E)=>y-E);const h=this.overlays.getIterator();for(;h.hasNext();){const y=h.getNext().value;if(y.getKey().getCollectionGroup()===t&&y.largestBatchId>i){let E=l.get(y.largestBatchId);E===null&&(E=as(),l=l.insert(y.largestBatchId,E)),E.set(y.getKey(),y)}}const f=as(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((y,E)=>f.set(y,E)),!(f.size()>=o)););return K.resolve(f)}Tt(e,t,i){const o=this.overlays.get(i.key);if(o!==null){const h=this.Er.get(o.largestBatchId).delete(i.key);this.Er.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(i.key,new wA(t,i));let l=this.Er.get(t);l===void 0&&(l=De(),this.Er.set(t,l)),this.Er.set(t,l.add(i.key))}}/**
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
 */class rC{constructor(){this.sessionToken=Vt.EMPTY_BYTE_STRING}getSessionToken(e){return K.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,K.resolve()}}/**
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
 */class Bf{constructor(){this.dr=new wt(Ct.Ar),this.Rr=new wt(Ct.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,t){const i=new Ct(e,t);this.dr=this.dr.add(i),this.Rr=this.Rr.add(i)}mr(e,t){e.forEach(i=>this.addReference(i,t))}removeReference(e,t){this.gr(new Ct(e,t))}pr(e,t){e.forEach(i=>this.removeReference(i,t))}yr(e){const t=new ye(new Je([])),i=new Ct(t,e),o=new Ct(t,e+1),l=[];return this.Rr.forEachInRange([i,o],h=>{this.gr(h),l.push(h.key)}),l}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const t=new ye(new Je([])),i=new Ct(t,e),o=new Ct(t,e+1);let l=De();return this.Rr.forEachInRange([i,o],h=>{l=l.add(h.key)}),l}containsKey(e){const t=new Ct(e,0),i=this.dr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class Ct{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return ye.comparator(e.key,t.key)||Le(e.br,t.br)}static Vr(e,t){return Le(e.br,t.br)||ye.comparator(e.key,t.key)}}/**
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
 */class iC{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new wt(Ct.Ar)}checkEmpty(e){return K.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,o){const l=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new EA(l,t,i,o);this.mutationQueue.push(h);for(const f of o)this.vr=this.vr.add(new Ct(f.key,l)),this.indexManager.addToCollectionParentIndex(e,f.key.path.popLast());return K.resolve(h)}lookupMutationBatch(e,t){return K.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,o=this.Fr(i),l=o<0?0:o;return K.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return K.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return K.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new Ct(t,0),o=new Ct(t,Number.POSITIVE_INFINITY),l=[];return this.vr.forEachInRange([i,o],h=>{const f=this.Cr(h.br);l.push(f)}),K.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new wt(Le);return t.forEach(o=>{const l=new Ct(o,0),h=new Ct(o,Number.POSITIVE_INFINITY);this.vr.forEachInRange([l,h],f=>{i=i.add(f.br)})}),K.resolve(this.Mr(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,o=i.length+1;let l=i;ye.isDocumentKey(l)||(l=l.child(""));const h=new Ct(new ye(l),0);let f=new wt(Le);return this.vr.forEachWhile(p=>{const y=p.key.path;return!!i.isPrefixOf(y)&&(y.length===o&&(f=f.add(p.br)),!0)},h),K.resolve(this.Mr(f))}Mr(e){const t=[];return e.forEach(i=>{const o=this.Cr(i);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){Be(this.Or(t.batchId,"removed")===0),this.mutationQueue.shift();let i=this.vr;return K.forEach(t.mutations,o=>{const l=new Ct(o.key,t.batchId);return i=i.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.vr=i})}Ln(e){}containsKey(e,t){const i=new Ct(t,0),o=this.vr.firstAfterOrEqual(i);return K.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,K.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class sC{constructor(e){this.Nr=e,this.docs=function(){return new rt(ye.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,o=this.docs.get(i),l=o?o.size:0,h=this.Nr(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:h}),this.size+=h-l,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return K.resolve(i?i.document.mutableCopy():zt.newInvalidDocument(t))}getEntries(e,t){let i=Ur();return t.forEach(o=>{const l=this.docs.get(o);i=i.insert(o,l?l.document.mutableCopy():zt.newInvalidDocument(o))}),K.resolve(i)}getDocumentsMatchingQuery(e,t,i,o){let l=Ur();const h=t.path,f=new ye(h.child("")),p=this.docs.getIteratorFrom(f);for(;p.hasNext();){const{key:y,value:{document:E}}=p.getNext();if(!h.isPrefixOf(y.path))break;y.path.length>h.length+1||V1(L1(E),i)<=0||(o.has(E.key)||Lc(t,E))&&(l=l.insert(E.key,E.mutableCopy()))}return K.resolve(l)}getAllFromCollectionGroup(e,t,i,o){Te()}Lr(e,t){return K.forEach(this.docs,i=>t(i))}newChangeBuffer(e){return new oC(this)}getSize(e){return K.resolve(this.size)}}class oC extends JA{constructor(e){super(),this.hr=e}applyChanges(e){const t=[];return this.changes.forEach((i,o)=>{o.isValidDocument()?t.push(this.hr.addEntry(e,o)):this.hr.removeEntry(i)}),K.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}}/**
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
 */class aC{constructor(e){this.persistence=e,this.Br=new ys(t=>Of(t),Lf),this.lastRemoteSnapshotVersion=Re.min(),this.highestTargetId=0,this.kr=0,this.qr=new Bf,this.targetCount=0,this.Qr=Ao.qn()}forEachTarget(e,t){return this.Br.forEach((i,o)=>t(o)),K.resolve()}getLastRemoteSnapshotVersion(e){return K.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return K.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),K.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.kr&&(this.kr=t),K.resolve()}Un(e){this.Br.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Qr=new Ao(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,K.resolve()}updateTargetData(e,t){return this.Un(t),K.resolve()}removeTargetData(e,t){return this.Br.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,K.resolve()}removeTargets(e,t,i){let o=0;const l=[];return this.Br.forEach((h,f)=>{f.sequenceNumber<=t&&i.get(f.targetId)===null&&(this.Br.delete(h),l.push(this.removeMatchingKeysForTargetId(e,f.targetId)),o++)}),K.waitFor(l).next(()=>o)}getTargetCount(e){return K.resolve(this.targetCount)}getTargetData(e,t){const i=this.Br.get(t)||null;return K.resolve(i)}addMatchingKeys(e,t,i){return this.qr.mr(t,i),K.resolve()}removeMatchingKeys(e,t,i){this.qr.pr(t,i);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach(h=>{l.push(o.markPotentiallyOrphaned(e,h))}),K.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),K.resolve()}getMatchingKeysForTargetId(e,t){const i=this.qr.Sr(t);return K.resolve(i)}containsKey(e,t){return K.resolve(this.qr.containsKey(t))}}/**
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
 */class Gv{constructor(e,t){this.Kr={},this.overlays={},this.$r=new kc(0),this.Ur=!1,this.Ur=!0,this.Wr=new rC,this.referenceDelegate=e(this),this.Gr=new aC(this),this.indexManager=new qA,this.remoteDocumentCache=function(o){return new sC(o)}(i=>this.referenceDelegate.zr(i)),this.serializer=new HA(t),this.jr=new tC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new nC,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.Kr[e.toKey()];return i||(i=new iC(t,this.referenceDelegate),this.Kr[e.toKey()]=i),i}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,i){le("MemoryPersistence","Starting transaction:",e);const o=new lC(this.$r.next());return this.referenceDelegate.Hr(),i(o).next(l=>this.referenceDelegate.Jr(o).next(()=>l)).toPromise().then(l=>(o.raiseOnCommittedEvent(),l))}Yr(e,t){return K.or(Object.values(this.Kr).map(i=>()=>i.containsKey(e,t)))}}class lC extends M1{constructor(e){super(),this.currentSequenceNumber=e}}class zf{constructor(e){this.persistence=e,this.Zr=new Bf,this.Xr=null}static ei(e){return new zf(e)}get ti(){if(this.Xr)return this.Xr;throw Te()}addReference(e,t,i){return this.Zr.addReference(i,t),this.ti.delete(i.toString()),K.resolve()}removeReference(e,t,i){return this.Zr.removeReference(i,t),this.ti.add(i.toString()),K.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),K.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(o=>this.ti.add(o.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(l=>this.ti.add(l.toString()))}).next(()=>i.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return K.forEach(this.ti,i=>{const o=ye.fromPath(i);return this.ni(e,o).next(l=>{l||t.removeEntry(o,Re.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(i=>{i?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return K.or([()=>K.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}}class gc{constructor(e,t){this.persistence=e,this.ri=new ys(i=>j1(i.path),(i,o)=>i.isEqual(o)),this.garbageCollector=YA(this,t)}static ei(e,t){return new gc(e,t)}Hr(){}Jr(e){return K.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){const t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(i=>t.next(o=>i+o))}nr(e){let t=0;return this.er(e,i=>{t++}).next(()=>t)}er(e,t){return K.forEach(this.ri,(i,o)=>this.ir(e,i,o).next(l=>l?K.resolve():t(o)))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.Lr(e,h=>this.ir(e,h,t).next(f=>{f||(i++,l.removeEntry(h,Re.min()))})).next(()=>l.apply(e)).next(()=>i)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),K.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.ri.set(i,e.currentSequenceNumber),K.resolve()}removeReference(e,t,i){return this.ri.set(i,e.currentSequenceNumber),K.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),K.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Xu(e.data.value)),t}ir(e,t,i){return K.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.ri.get(t);return K.resolve(o!==void 0&&o>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class $f{constructor(e,t,i,o){this.targetId=e,this.fromCache=t,this.Wi=i,this.Gi=o}static zi(e,t){let i=De(),o=De();for(const l of t.docChanges)switch(l.type){case 0:i=i.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new $f(e,t.fromCache,i,o)}}/**
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
 */class uC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class cC{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return GT()?8:U1($t())>0?6:4}()}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,i,o){const l={result:null};return this.Xi(e,t).next(h=>{l.result=h}).next(()=>{if(!l.result)return this.es(e,t,o,i).next(h=>{l.result=h})}).next(()=>{if(l.result)return;const h=new uC;return this.ts(e,t,h).next(f=>{if(l.result=f,this.Hi)return this.ns(e,t,h,f.size)})}).next(()=>l.result)}ns(e,t,i,o){return i.documentReadCount<this.Ji?(ho()<=xe.DEBUG&&le("QueryEngine","SDK will not create cache indexes for query:",fo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),K.resolve()):(ho()<=xe.DEBUG&&le("QueryEngine","Query:",fo(t),"scans",i.documentReadCount,"local documents and returns",o,"documents as results."),i.documentReadCount>this.Yi*o?(ho()<=xe.DEBUG&&le("QueryEngine","The SDK decides to create cache indexes for query:",fo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,sr(t))):K.resolve())}Xi(e,t){if(Ty(t))return K.resolve(null);let i=sr(t);return this.indexManager.getIndexType(e,i).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=Jd(t,null,"F"),i=sr(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next(l=>{const h=De(...l);return this.Zi.getDocuments(e,h).next(f=>this.indexManager.getMinOffset(e,i).next(p=>{const y=this.rs(t,f);return this.ss(t,y,h,p.readTime)?this.Xi(e,Jd(t,null,"F")):this.os(e,y,t,p)}))})))}es(e,t,i,o){return Ty(t)||o.isEqual(Re.min())?K.resolve(null):this.Zi.getDocuments(e,i).next(l=>{const h=this.rs(t,l);return this.ss(t,h,i,o)?K.resolve(null):(ho()<=xe.DEBUG&&le("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),fo(t)),this.os(e,h,t,O1(o,-1)).next(f=>f))})}rs(e,t){let i=new wt(Cv(e));return t.forEach((o,l)=>{Lc(e,l)&&(i=i.add(l))}),i}ss(e,t,i,o){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}ts(e,t,i){return ho()<=xe.DEBUG&&le("QueryEngine","Using full collection scan to execute query:",fo(t)),this.Zi.getDocumentsMatchingQuery(e,t,Ri.min(),i)}os(e,t,i,o){return this.Zi.getDocumentsMatchingQuery(e,i,o).next(l=>(t.forEach(h=>{l=l.insert(h.key,h)}),l))}}/**
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
 */class hC{constructor(e,t,i,o){this.persistence=e,this._s=t,this.serializer=o,this.us=new rt(Le),this.cs=new ys(l=>Of(l),Lf),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(i)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new eC(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}}function dC(n,e,t,i){return new hC(n,e,t,i)}async function Qv(n,e){const t=Ae(n);return await t.persistence.runTransaction("Handle user change","readonly",i=>{let o;return t.mutationQueue.getAllMutationBatches(i).next(l=>(o=l,t.Ps(e),t.mutationQueue.getAllMutationBatches(i))).next(l=>{const h=[],f=[];let p=De();for(const y of o){h.push(y.batchId);for(const E of y.mutations)p=p.add(E.key)}for(const y of l){f.push(y.batchId);for(const E of y.mutations)p=p.add(E.key)}return t.localDocuments.getDocuments(i,p).next(y=>({Ts:y,removedBatchIds:h,addedBatchIds:f}))})})}function fC(n,e){const t=Ae(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const o=e.batch.keys(),l=t.hs.newChangeBuffer({trackRemovals:!0});return function(f,p,y,E){const T=y.batch,R=T.keys();let O=K.resolve();return R.forEach(b=>{O=O.next(()=>E.getEntry(p,b)).next(z=>{const L=y.docVersions.get(b);Be(L!==null),z.version.compareTo(L)<0&&(T.applyToRemoteDocument(z,y),z.isValidDocument()&&(z.setReadTime(y.commitVersion),E.addEntry(z)))})}),O.next(()=>f.mutationQueue.removeMutationBatch(p,T))}(t,i,e,l).next(()=>l.apply(i)).next(()=>t.mutationQueue.performConsistencyCheck(i)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(i,o,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(f){let p=De();for(let y=0;y<f.mutationResults.length;++y)f.mutationResults[y].transformResults.length>0&&(p=p.add(f.batch.mutations[y].key));return p}(e))).next(()=>t.localDocuments.getDocuments(i,o))})}function Xv(n){const e=Ae(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}function pC(n,e){const t=Ae(n),i=e.snapshotVersion;let o=t.us;return t.persistence.runTransaction("Apply remote event","readwrite-primary",l=>{const h=t.hs.newChangeBuffer({trackRemovals:!0});o=t.us;const f=[];e.targetChanges.forEach((E,T)=>{const R=o.get(T);if(!R)return;f.push(t.Gr.removeMatchingKeys(l,E.removedDocuments,T).next(()=>t.Gr.addMatchingKeys(l,E.addedDocuments,T)));let O=R.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(T)!==null?O=O.withResumeToken(Vt.EMPTY_BYTE_STRING,Re.min()).withLastLimboFreeSnapshotVersion(Re.min()):E.resumeToken.approximateByteSize()>0&&(O=O.withResumeToken(E.resumeToken,i)),o=o.insert(T,O),function(z,L,W){return z.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-z.snapshotVersion.toMicroseconds()>=3e8?!0:W.addedDocuments.size+W.modifiedDocuments.size+W.removedDocuments.size>0}(R,O,E)&&f.push(t.Gr.updateTargetData(l,O))});let p=Ur(),y=De();if(e.documentUpdates.forEach(E=>{e.resolvedLimboDocuments.has(E)&&f.push(t.persistence.referenceDelegate.updateLimboDocument(l,E))}),f.push(mC(l,h,e.documentUpdates).next(E=>{p=E.Is,y=E.Es})),!i.isEqual(Re.min())){const E=t.Gr.getLastRemoteSnapshotVersion(l).next(T=>t.Gr.setTargetsMetadata(l,l.currentSequenceNumber,i));f.push(E)}return K.waitFor(f).next(()=>h.apply(l)).next(()=>t.localDocuments.getLocalViewOfDocuments(l,p,y)).next(()=>p)}).then(l=>(t.us=o,l))}function mC(n,e,t){let i=De(),o=De();return t.forEach(l=>i=i.add(l)),e.getEntries(n,i).next(l=>{let h=Ur();return t.forEach((f,p)=>{const y=l.get(f);p.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(f)),p.isNoDocument()&&p.version.isEqual(Re.min())?(e.removeEntry(f,p.readTime),h=h.insert(f,p)):!y.isValidDocument()||p.version.compareTo(y.version)>0||p.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(p),h=h.insert(f,p)):le("LocalStore","Ignoring outdated watch update for ",f,". Current version:",y.version," Watch version:",p.version)}),{Is:h,Es:o}})}function gC(n,e){const t=Ae(n);return t.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function yC(n,e){const t=Ae(n);return t.persistence.runTransaction("Allocate target","readwrite",i=>{let o;return t.Gr.getTargetData(i,e).next(l=>l?(o=l,K.resolve(o)):t.Gr.allocateTargetId(i).next(h=>(o=new gi(e,h,"TargetPurposeListen",i.currentSequenceNumber),t.Gr.addTargetData(i,o).next(()=>o))))}).then(i=>{const o=t.us.get(i.targetId);return(o===null||i.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.us=t.us.insert(i.targetId,i),t.cs.set(e,i.targetId)),i})}async function rf(n,e,t){const i=Ae(n),o=i.us.get(e),l=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",l,h=>i.persistence.referenceDelegate.removeTarget(h,o))}catch(h){if(!Mo(h))throw h;le("LocalStore",`Failed to update sequence numbers for target ${e}: ${h}`)}i.us=i.us.remove(e),i.cs.delete(o.target)}function Ly(n,e,t){const i=Ae(n);let o=Re.min(),l=De();return i.persistence.runTransaction("Execute query","readwrite",h=>function(p,y,E){const T=Ae(p),R=T.cs.get(E);return R!==void 0?K.resolve(T.us.get(R)):T.Gr.getTargetData(y,E)}(i,h,sr(e)).next(f=>{if(f)return o=f.lastLimboFreeSnapshotVersion,i.Gr.getMatchingKeysForTargetId(h,f.targetId).next(p=>{l=p})}).next(()=>i._s.getDocumentsMatchingQuery(h,e,t?o:Re.min(),t?l:De())).next(f=>(_C(i,sA(e),f),{documents:f,ds:l})))}function _C(n,e,t){let i=n.ls.get(e)||Re.min();t.forEach((o,l)=>{l.readTime.compareTo(i)>0&&(i=l.readTime)}),n.ls.set(e,i)}class Vy{constructor(){this.activeTargetIds=hA()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class vC{constructor(){this._o=new Vy,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,i){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new Vy,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class EC{uo(e){}shutdown(){}}/**
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
 */class by{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){le("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){le("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Fu=null;function Nd(){return Fu===null?Fu=function(){return 268435456+Math.round(2147483648*Math.random())}():Fu++,"0x"+Fu.toString(16)}/**
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
 */const wC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class TC{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
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
 */const jt="WebChannelConnection";class IC extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const i=t.ssl?"https":"http",o=encodeURIComponent(this.databaseId.projectId),l=encodeURIComponent(this.databaseId.database);this.Fo=i+"://"+t.host,this.Mo=`projects/${o}/databases/${l}`,this.xo=this.databaseId.database==="(default)"?`project_id=${o}`:`project_id=${o}&database_id=${l}`}Oo(t,i,o,l,h){const f=Nd(),p=this.No(t,i.toUriEncodedString());le("RestConnection",`Sending RPC '${t}' ${f}:`,p,o);const y={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(y,l,h),this.Bo(t,p,y,o).then(E=>(le("RestConnection",`Received RPC '${t}' ${f}: `,E),E),E=>{throw To("RestConnection",`RPC '${t}' ${f} failed with error: `,E,"url: ",p,"request:",o),E})}ko(t,i,o,l,h,f){return this.Oo(t,i,o,l,h)}Lo(t,i,o){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Vo}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((l,h)=>t[h]=l),o&&o.headers.forEach((l,h)=>t[h]=l)}No(t,i){const o=wC[t];return`${this.Fo}/v1/${i}:${o}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,t,i,o){const l=Nd();return new Promise((h,f)=>{const p=new cv;p.setWithCredentials(!0),p.listenOnce(hv.COMPLETE,()=>{try{switch(p.getLastErrorCode()){case Qu.NO_ERROR:const E=p.getResponseJson();le(jt,`XHR for RPC '${e}' ${l} received:`,JSON.stringify(E)),h(E);break;case Qu.TIMEOUT:le(jt,`RPC '${e}' ${l} timed out`),f(new pe(X.DEADLINE_EXCEEDED,"Request time out"));break;case Qu.HTTP_ERROR:const T=p.getStatus();if(le(jt,`RPC '${e}' ${l} failed with status:`,T,"response text:",p.getResponseText()),T>0){let R=p.getResponseJson();Array.isArray(R)&&(R=R[0]);const O=R==null?void 0:R.error;if(O&&O.status&&O.message){const b=function(L){const W=L.toLowerCase().replace(/_/g,"-");return Object.values(X).indexOf(W)>=0?W:X.UNKNOWN}(O.status);f(new pe(b,O.message))}else f(new pe(X.UNKNOWN,"Server responded with status "+p.getStatus()))}else f(new pe(X.UNAVAILABLE,"Connection failed."));break;default:Te()}}finally{le(jt,`RPC '${e}' ${l} completed.`)}});const y=JSON.stringify(o);le(jt,`RPC '${e}' ${l} sending request:`,o),p.send(t,"POST",y,i,15)})}qo(e,t,i){const o=Nd(),l=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=pv(),f=fv(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(p.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Lo(p.initMessageHeaders,t,i),p.encodeInitMessageHeaders=!0;const E=l.join("");le(jt,`Creating RPC '${e}' stream ${o}: ${E}`,p);const T=h.createWebChannel(E,p);let R=!1,O=!1;const b=new TC({Eo:L=>{O?le(jt,`Not sending because RPC '${e}' stream ${o} is closed:`,L):(R||(le(jt,`Opening RPC '${e}' stream ${o} transport.`),T.open(),R=!0),le(jt,`RPC '${e}' stream ${o} sending:`,L),T.send(L))},Ao:()=>T.close()}),z=(L,W,te)=>{L.listen(W,ne=>{try{te(ne)}catch(se){setTimeout(()=>{throw se},0)}})};return z(T,Fa.EventType.OPEN,()=>{O||(le(jt,`RPC '${e}' stream ${o} transport opened.`),b.So())}),z(T,Fa.EventType.CLOSE,()=>{O||(O=!0,le(jt,`RPC '${e}' stream ${o} transport closed`),b.Do())}),z(T,Fa.EventType.ERROR,L=>{O||(O=!0,To(jt,`RPC '${e}' stream ${o} transport errored:`,L),b.Do(new pe(X.UNAVAILABLE,"The operation could not be completed")))}),z(T,Fa.EventType.MESSAGE,L=>{var W;if(!O){const te=L.data[0];Be(!!te);const ne=te,se=(ne==null?void 0:ne.error)||((W=ne[0])===null||W===void 0?void 0:W.error);if(se){le(jt,`RPC '${e}' stream ${o} received error:`,se);const Ie=se.status;let _e=function(A){const k=ft[A];if(k!==void 0)return Uv(k)}(Ie),N=se.message;_e===void 0&&(_e=X.INTERNAL,N="Unknown error status: "+Ie+" with message "+se.message),O=!0,b.Do(new pe(_e,N)),T.close()}else le(jt,`RPC '${e}' stream ${o} received:`,te),b.vo(te)}}),z(f,dv.STAT_EVENT,L=>{L.stat===Kd.PROXY?le(jt,`RPC '${e}' stream ${o} detected buffering proxy`):L.stat===Kd.NOPROXY&&le(jt,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{b.bo()},0),b}}function xd(){return typeof document<"u"?document:null}/**
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
 */function Uc(n){return new NA(n,!0)}/**
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
 */class Yv{constructor(e,t,i=1e3,o=1.5,l=6e4){this.li=e,this.timerId=t,this.Qo=i,this.Ko=o,this.$o=l,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const t=Math.floor(this.Uo+this.Ho()),i=Math.max(0,Date.now()-this.Go),o=Math.max(0,t-i);o>0&&le("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,o,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
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
 */class Jv{constructor(e,t,i,o,l,h,f,p){this.li=e,this.Yo=i,this.Zo=o,this.connection=l,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=f,this.listener=p,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new Yv(e,t)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():t&&t.code===X.RESOURCE_EXHAUSTED?(Mr(t.toString()),Mr("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===X.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,o])=>{this.Xo===t&&this.I_(i,o)},i=>{e(()=>{const o=new pe(X.UNKNOWN,"Fetching auth token failed: "+i.message);return this.E_(o)})})}I_(e,t){const i=this.T_(this.Xo);this.stream=this.d_(e,t),this.stream.Ro(()=>{i(()=>this.listener.Ro())}),this.stream.mo(()=>{i(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(o=>{i(()=>this.E_(o))}),this.stream.onMessage(o=>{i(()=>++this.n_==1?this.A_(o):this.onNext(o))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return le("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(le("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class SC extends Jv{constructor(e,t,i,o,l,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,o,h),this.serializer=l}d_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const t=OA(this.serializer,e),i=function(l){if(!("targetChange"in l))return Re.min();const h=l.targetChange;return h.targetIds&&h.targetIds.length?Re.min():h.readTime?ar(h.readTime):Re.min()}(e);return this.listener.R_(t,i)}V_(e){const t={};t.database=nf(this.serializer),t.addTarget=function(l,h){let f;const p=h.target;if(f=Yd(p)?{documents:bA(l,p)}:{query:MA(l,p).ct},f.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){f.resumeToken=Bv(l,h.resumeToken);const y=Zd(l,h.expectedCount);y!==null&&(f.expectedCount=y)}else if(h.snapshotVersion.compareTo(Re.min())>0){f.readTime=mc(l,h.snapshotVersion.toTimestamp());const y=Zd(l,h.expectedCount);y!==null&&(f.expectedCount=y)}return f}(this.serializer,e);const i=FA(this.serializer,e);i&&(t.labels=i),this.c_(t)}m_(e){const t={};t.database=nf(this.serializer),t.removeTarget=e,this.c_(t)}}class RC extends Jv{constructor(e,t,i,o,l,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,o,h),this.serializer=l}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,t){return this.connection.qo("Write",e,t)}A_(e){return Be(!!e.streamToken),this.lastStreamToken=e.streamToken,Be(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){Be(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const t=VA(e.writeResults,e.commitTime),i=ar(e.commitTime);return this.listener.y_(i,t)}w_(){const e={};e.database=nf(this.serializer),this.c_(e)}g_(e){const t={streamToken:this.lastStreamToken,writes:e.map(i=>LA(this.serializer,i))};this.c_(t)}}/**
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
 */class AC extends class{}{constructor(e,t,i,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=o,this.S_=!1}b_(){if(this.S_)throw new pe(X.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,i,o){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,h])=>this.connection.Oo(e,ef(t,i),o,l,h)).catch(l=>{throw l.name==="FirebaseError"?(l.code===X.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new pe(X.UNKNOWN,l.toString())})}ko(e,t,i,o,l){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([h,f])=>this.connection.ko(e,ef(t,i),o,h,f,l)).catch(h=>{throw h.name==="FirebaseError"?(h.code===X.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new pe(X.UNKNOWN,h.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class CC{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(Mr(t),this.C_=!1):le("OnlineStateTracker",t)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
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
 */class PC{constructor(e,t,i,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=l,this.Q_.uo(h=>{i.enqueueAndForget(async()=>{vs(this)&&(le("RemoteStore","Restarting streams for network reachability change."),await async function(p){const y=Ae(p);y.k_.add(4),await pl(y),y.K_.set("Unknown"),y.k_.delete(4),await Fc(y)}(this))})}),this.K_=new CC(i,o)}}async function Fc(n){if(vs(n))for(const e of n.q_)await e(!0)}async function pl(n){for(const e of n.q_)await e(!1)}function Zv(n,e){const t=Ae(n);t.B_.has(e.targetId)||(t.B_.set(e.targetId,e),Kf(t)?qf(t):Uo(t).s_()&&Wf(t,e))}function Hf(n,e){const t=Ae(n),i=Uo(t);t.B_.delete(e),i.s_()&&e0(t,e),t.B_.size===0&&(i.s_()?i.a_():vs(t)&&t.K_.set("Unknown"))}function Wf(n,e){if(n.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Re.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Uo(n).V_(e)}function e0(n,e){n.U_.xe(e),Uo(n).m_(e)}function qf(n){n.U_=new AA({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>n.B_.get(e)||null,nt:()=>n.datastore.serializer.databaseId}),Uo(n).start(),n.K_.F_()}function Kf(n){return vs(n)&&!Uo(n).i_()&&n.B_.size>0}function vs(n){return Ae(n).k_.size===0}function t0(n){n.U_=void 0}async function kC(n){n.K_.set("Online")}async function NC(n){n.B_.forEach((e,t)=>{Wf(n,e)})}async function xC(n,e){t0(n),Kf(n)?(n.K_.O_(e),qf(n)):n.K_.set("Unknown")}async function DC(n,e,t){if(n.K_.set("Online"),e instanceof jv&&e.state===2&&e.cause)try{await async function(o,l){const h=l.cause;for(const f of l.targetIds)o.B_.has(f)&&(await o.remoteSyncer.rejectListen(f,h),o.B_.delete(f),o.U_.removeTarget(f))}(n,e)}catch(i){le("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await yc(n,i)}else if(e instanceof Zu?n.U_.$e(e):e instanceof Fv?n.U_.Je(e):n.U_.Ge(e),!t.isEqual(Re.min()))try{const i=await Xv(n.localStore);t.compareTo(i)>=0&&await function(l,h){const f=l.U_.it(h);return f.targetChanges.forEach((p,y)=>{if(p.resumeToken.approximateByteSize()>0){const E=l.B_.get(y);E&&l.B_.set(y,E.withResumeToken(p.resumeToken,h))}}),f.targetMismatches.forEach((p,y)=>{const E=l.B_.get(p);if(!E)return;l.B_.set(p,E.withResumeToken(Vt.EMPTY_BYTE_STRING,E.snapshotVersion)),e0(l,p);const T=new gi(E.target,p,y,E.sequenceNumber);Wf(l,T)}),l.remoteSyncer.applyRemoteEvent(f)}(n,t)}catch(i){le("RemoteStore","Failed to raise snapshot:",i),await yc(n,i)}}async function yc(n,e,t){if(!Mo(e))throw e;n.k_.add(1),await pl(n),n.K_.set("Offline"),t||(t=()=>Xv(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{le("RemoteStore","Retrying IndexedDB access"),await t(),n.k_.delete(1),await Fc(n)})}function n0(n,e){return e().catch(t=>yc(n,t,e))}async function jc(n){const e=Ae(n),t=ki(e);let i=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;OC(e);)try{const o=await gC(e.localStore,i);if(o===null){e.L_.length===0&&t.a_();break}i=o.batchId,LC(e,o)}catch(o){await yc(e,o)}r0(e)&&i0(e)}function OC(n){return vs(n)&&n.L_.length<10}function LC(n,e){n.L_.push(e);const t=ki(n);t.s_()&&t.f_&&t.g_(e.mutations)}function r0(n){return vs(n)&&!ki(n).i_()&&n.L_.length>0}function i0(n){ki(n).start()}async function VC(n){ki(n).w_()}async function bC(n){const e=ki(n);for(const t of n.L_)e.g_(t.mutations)}async function MC(n,e,t){const i=n.L_.shift(),o=Uf.from(i,e,t);await n0(n,()=>n.remoteSyncer.applySuccessfulWrite(o)),await jc(n)}async function UC(n,e){e&&ki(n).f_&&await async function(i,o){if(function(h){return IA(h)&&h!==X.ABORTED}(o.code)){const l=i.L_.shift();ki(i).__(),await n0(i,()=>i.remoteSyncer.rejectFailedWrite(l.batchId,o)),await jc(i)}}(n,e),r0(n)&&i0(n)}async function My(n,e){const t=Ae(n);t.asyncQueue.verifyOperationInProgress(),le("RemoteStore","RemoteStore received new credentials");const i=vs(t);t.k_.add(3),await pl(t),i&&t.K_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.k_.delete(3),await Fc(t)}async function FC(n,e){const t=Ae(n);e?(t.k_.delete(2),await Fc(t)):e||(t.k_.add(2),await pl(t),t.K_.set("Unknown"))}function Uo(n){return n.W_||(n.W_=function(t,i,o){const l=Ae(t);return l.b_(),new SC(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)}(n.datastore,n.asyncQueue,{Ro:kC.bind(null,n),mo:NC.bind(null,n),po:xC.bind(null,n),R_:DC.bind(null,n)}),n.q_.push(async e=>{e?(n.W_.__(),Kf(n)?qf(n):n.K_.set("Unknown")):(await n.W_.stop(),t0(n))})),n.W_}function ki(n){return n.G_||(n.G_=function(t,i,o){const l=Ae(t);return l.b_(),new RC(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)}(n.datastore,n.asyncQueue,{Ro:()=>Promise.resolve(),mo:VC.bind(null,n),po:UC.bind(null,n),p_:bC.bind(null,n),y_:MC.bind(null,n)}),n.q_.push(async e=>{e?(n.G_.__(),await jc(n)):(await n.G_.stop(),n.L_.length>0&&(le("RemoteStore",`Stopping write stream with ${n.L_.length} pending writes`),n.L_=[]))})),n.G_}/**
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
 */class Gf{constructor(e,t,i,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=o,this.removalCallback=l,this.deferred=new Ei,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,o,l){const h=Date.now()+i,f=new Gf(e,t,h,o,l);return f.start(i),f}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new pe(X.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Qf(n,e){if(Mr("AsyncQueue",`${e}: ${n}`),Mo(n))return new pe(X.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Eo{static emptySet(e){return new Eo(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||ye.comparator(t.key,i.key):(t,i)=>ye.comparator(t.key,i.key),this.keyedMap=ja(),this.sortedSet=new rt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,i)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Eo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new Eo;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
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
 */class Uy{constructor(){this.z_=new rt(ye.comparator)}track(e){const t=e.doc.key,i=this.z_.get(t);i?e.type!==0&&i.type===3?this.z_=this.z_.insert(t,e):e.type===3&&i.type!==1?this.z_=this.z_.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.z_=this.z_.remove(t):e.type===1&&i.type===2?this.z_=this.z_.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):Te():this.z_=this.z_.insert(t,e)}j_(){const e=[];return this.z_.inorderTraversal((t,i)=>{e.push(i)}),e}}class Co{constructor(e,t,i,o,l,h,f,p,y){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=o,this.mutatedKeys=l,this.fromCache=h,this.syncStateChanged=f,this.excludesMetadataChanges=p,this.hasCachedResults=y}static fromInitialDocuments(e,t,i,o,l){const h=[];return t.forEach(f=>{h.push({type:0,doc:f})}),new Co(e,t,Eo.emptySet(t),h,i,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Oc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==i[o].type||!t[o].doc.isEqual(i[o].doc))return!1;return!0}}/**
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
 */class jC{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class BC{constructor(){this.queries=Fy(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(t,i){const o=Ae(t),l=o.queries;o.queries=Fy(),l.forEach((h,f)=>{for(const p of f.J_)p.onError(i)})})(this,new pe(X.ABORTED,"Firestore shutting down"))}}function Fy(){return new ys(n=>Av(n),Oc)}async function s0(n,e){const t=Ae(n);let i=3;const o=e.query;let l=t.queries.get(o);l?!l.Y_()&&e.Z_()&&(i=2):(l=new jC,i=e.Z_()?0:1);try{switch(i){case 0:l.H_=await t.onListen(o,!0);break;case 1:l.H_=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const f=Qf(h,`Initialization of query '${fo(e.query)}' failed`);return void e.onError(f)}t.queries.set(o,l),l.J_.push(e),e.ea(t.onlineState),l.H_&&e.ta(l.H_)&&Xf(t)}async function o0(n,e){const t=Ae(n),i=e.query;let o=3;const l=t.queries.get(i);if(l){const h=l.J_.indexOf(e);h>=0&&(l.J_.splice(h,1),l.J_.length===0?o=e.Z_()?0:1:!l.Y_()&&e.Z_()&&(o=2))}switch(o){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function zC(n,e){const t=Ae(n);let i=!1;for(const o of e){const l=o.query,h=t.queries.get(l);if(h){for(const f of h.J_)f.ta(o)&&(i=!0);h.H_=o}}i&&Xf(t)}function $C(n,e,t){const i=Ae(n),o=i.queries.get(e);if(o)for(const l of o.J_)l.onError(t);i.queries.delete(e)}function Xf(n){n.X_.forEach(e=>{e.next()})}var sf,jy;(jy=sf||(sf={})).na="default",jy.Cache="cache";class a0{constructor(e,t,i){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=i||{}}ta(e){if(!this.options.includeMetadataChanges){const i=[];for(const o of e.docChanges)o.type!==3&&i.push(o);e=new Co(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){if(!e.fromCache||!this.Z_())return!0;const i=t!=="Offline";return(!this.options.ua||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}aa(e){e=Co.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==sf.Cache}}/**
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
 */class l0{constructor(e){this.key=e}}class u0{constructor(e){this.key=e}}class HC{constructor(e,t){this.query=e,this.da=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=De(),this.mutatedKeys=De(),this.Va=Cv(e),this.ma=new Eo(this.Va)}get fa(){return this.da}ga(e,t){const i=t?t.pa:new Uy,o=t?t.ma:this.ma;let l=t?t.mutatedKeys:this.mutatedKeys,h=o,f=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((E,T)=>{const R=o.get(E),O=Lc(this.query,T)?T:null,b=!!R&&this.mutatedKeys.has(R.key),z=!!O&&(O.hasLocalMutations||this.mutatedKeys.has(O.key)&&O.hasCommittedMutations);let L=!1;R&&O?R.data.isEqual(O.data)?b!==z&&(i.track({type:3,doc:O}),L=!0):this.ya(R,O)||(i.track({type:2,doc:O}),L=!0,(p&&this.Va(O,p)>0||y&&this.Va(O,y)<0)&&(f=!0)):!R&&O?(i.track({type:0,doc:O}),L=!0):R&&!O&&(i.track({type:1,doc:R}),L=!0,(p||y)&&(f=!0)),L&&(O?(h=h.add(O),l=z?l.add(E):l.delete(E)):(h=h.delete(E),l=l.delete(E)))}),this.query.limit!==null)for(;h.size>this.query.limit;){const E=this.query.limitType==="F"?h.last():h.first();h=h.delete(E.key),l=l.delete(E.key),i.track({type:1,doc:E})}return{ma:h,pa:i,ss:f,mutatedKeys:l}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,o){const l=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const h=e.pa.j_();h.sort((E,T)=>function(O,b){const z=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Te()}};return z(O)-z(b)}(E.type,T.type)||this.Va(E.doc,T.doc)),this.wa(i),o=o!=null&&o;const f=t&&!o?this.Sa():[],p=this.Ra.size===0&&this.current&&!o?1:0,y=p!==this.Aa;return this.Aa=p,h.length!==0||y?{snapshot:new Co(this.query,e.ma,l,h,e.mutatedKeys,p===0,y,!1,!!i&&i.resumeToken.approximateByteSize()>0),ba:f}:{ba:f}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new Uy,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(t=>this.da=this.da.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.da=this.da.delete(t)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=De(),this.ma.forEach(i=>{this.Da(i.key)&&(this.Ra=this.Ra.add(i.key))});const t=[];return e.forEach(i=>{this.Ra.has(i)||t.push(new u0(i))}),this.Ra.forEach(i=>{e.has(i)||t.push(new l0(i))}),t}va(e){this.da=e.ds,this.Ra=De();const t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return Co.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class WC{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class qC{constructor(e){this.key=e,this.Fa=!1}}class KC{constructor(e,t,i,o,l,h){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=h,this.Ma={},this.xa=new ys(f=>Av(f),Oc),this.Oa=new Map,this.Na=new Set,this.La=new rt(ye.comparator),this.Ba=new Map,this.ka=new Bf,this.qa={},this.Qa=new Map,this.Ka=Ao.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function GC(n,e,t=!0){const i=m0(n);let o;const l=i.xa.get(e);return l?(i.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.Ca()):o=await c0(i,e,t,!0),o}async function QC(n,e){const t=m0(n);await c0(t,e,!0,!1)}async function c0(n,e,t,i){const o=await yC(n.localStore,sr(e)),l=o.targetId,h=n.sharedClientState.addLocalQueryTarget(l,t);let f;return i&&(f=await XC(n,e,l,h==="current",o.resumeToken)),n.isPrimaryClient&&t&&Zv(n.remoteStore,o),f}async function XC(n,e,t,i,o){n.Ua=(T,R,O)=>async function(z,L,W,te){let ne=L.view.ga(W);ne.ss&&(ne=await Ly(z.localStore,L.query,!1).then(({documents:N})=>L.view.ga(N,ne)));const se=te&&te.targetChanges.get(L.targetId),Ie=te&&te.targetMismatches.get(L.targetId)!=null,_e=L.view.applyChanges(ne,z.isPrimaryClient,se,Ie);return zy(z,L.targetId,_e.ba),_e.snapshot}(n,T,R,O);const l=await Ly(n.localStore,e,!0),h=new HC(e,l.ds),f=h.ga(l.documents),p=fl.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",o),y=h.applyChanges(f,n.isPrimaryClient,p);zy(n,t,y.ba);const E=new WC(e,t,h);return n.xa.set(e,E),n.Oa.has(t)?n.Oa.get(t).push(e):n.Oa.set(t,[e]),y.snapshot}async function YC(n,e,t){const i=Ae(n),o=i.xa.get(e),l=i.Oa.get(o.targetId);if(l.length>1)return i.Oa.set(o.targetId,l.filter(h=>!Oc(h,e))),void i.xa.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(o.targetId),i.sharedClientState.isActiveQueryTarget(o.targetId)||await rf(i.localStore,o.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(o.targetId),t&&Hf(i.remoteStore,o.targetId),of(i,o.targetId)}).catch(bo)):(of(i,o.targetId),await rf(i.localStore,o.targetId,!0))}async function JC(n,e){const t=Ae(n),i=t.xa.get(e),o=t.Oa.get(i.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),Hf(t.remoteStore,i.targetId))}async function ZC(n,e,t){const i=oP(n);try{const o=await function(h,f){const p=Ae(h),y=Et.now(),E=f.reduce((O,b)=>O.add(b.key),De());let T,R;return p.persistence.runTransaction("Locally write mutations","readwrite",O=>{let b=Ur(),z=De();return p.hs.getEntries(O,E).next(L=>{b=L,b.forEach((W,te)=>{te.isValidDocument()||(z=z.add(W))})}).next(()=>p.localDocuments.getOverlayedDocuments(O,b)).next(L=>{T=L;const W=[];for(const te of f){const ne=_A(te,T.get(te.key).overlayedDocument);ne!=null&&W.push(new _s(te.key,ne,vv(ne.value.mapValue),or.exists(!0)))}return p.mutationQueue.addMutationBatch(O,y,W,f)}).next(L=>{R=L;const W=L.applyToLocalDocumentSet(T,z);return p.documentOverlayCache.saveOverlays(O,L.batchId,W)})}).then(()=>({batchId:R.batchId,changes:kv(T)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(o.batchId),function(h,f,p){let y=h.qa[h.currentUser.toKey()];y||(y=new rt(Le)),y=y.insert(f,p),h.qa[h.currentUser.toKey()]=y}(i,o.batchId,t),await ml(i,o.changes),await jc(i.remoteStore)}catch(o){const l=Qf(o,"Failed to persist write");t.reject(l)}}async function h0(n,e){const t=Ae(n);try{const i=await pC(t.localStore,e);e.targetChanges.forEach((o,l)=>{const h=t.Ba.get(l);h&&(Be(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?h.Fa=!0:o.modifiedDocuments.size>0?Be(h.Fa):o.removedDocuments.size>0&&(Be(h.Fa),h.Fa=!1))}),await ml(t,i,e)}catch(i){await bo(i)}}function By(n,e,t){const i=Ae(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const o=[];i.xa.forEach((l,h)=>{const f=h.view.ea(e);f.snapshot&&o.push(f.snapshot)}),function(h,f){const p=Ae(h);p.onlineState=f;let y=!1;p.queries.forEach((E,T)=>{for(const R of T.J_)R.ea(f)&&(y=!0)}),y&&Xf(p)}(i.eventManager,e),o.length&&i.Ma.R_(o),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function eP(n,e,t){const i=Ae(n);i.sharedClientState.updateQueryState(e,"rejected",t);const o=i.Ba.get(e),l=o&&o.key;if(l){let h=new rt(ye.comparator);h=h.insert(l,zt.newNoDocument(l,Re.min()));const f=De().add(l),p=new Mc(Re.min(),new Map,new rt(Le),h,f);await h0(i,p),i.La=i.La.remove(l),i.Ba.delete(e),Yf(i)}else await rf(i.localStore,e,!1).then(()=>of(i,e,t)).catch(bo)}async function tP(n,e){const t=Ae(n),i=e.batch.batchId;try{const o=await fC(t.localStore,e);f0(t,i,null),d0(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await ml(t,o)}catch(o){await bo(o)}}async function nP(n,e,t){const i=Ae(n);try{const o=await function(h,f){const p=Ae(h);return p.persistence.runTransaction("Reject batch","readwrite-primary",y=>{let E;return p.mutationQueue.lookupMutationBatch(y,f).next(T=>(Be(T!==null),E=T.keys(),p.mutationQueue.removeMutationBatch(y,T))).next(()=>p.mutationQueue.performConsistencyCheck(y)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(y,E,f)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,E)).next(()=>p.localDocuments.getDocuments(y,E))})}(i.localStore,e);f0(i,e,t),d0(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await ml(i,o)}catch(o){await bo(o)}}function d0(n,e){(n.Qa.get(e)||[]).forEach(t=>{t.resolve()}),n.Qa.delete(e)}function f0(n,e,t){const i=Ae(n);let o=i.qa[i.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),i.qa[i.currentUser.toKey()]=o}}function of(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Oa.get(e))n.xa.delete(i),t&&n.Ma.Wa(i,t);n.Oa.delete(e),n.isPrimaryClient&&n.ka.yr(e).forEach(i=>{n.ka.containsKey(i)||p0(n,i)})}function p0(n,e){n.Na.delete(e.path.canonicalString());const t=n.La.get(e);t!==null&&(Hf(n.remoteStore,t),n.La=n.La.remove(e),n.Ba.delete(t),Yf(n))}function zy(n,e,t){for(const i of t)i instanceof l0?(n.ka.addReference(i.key,e),rP(n,i)):i instanceof u0?(le("SyncEngine","Document no longer in limbo: "+i.key),n.ka.removeReference(i.key,e),n.ka.containsKey(i.key)||p0(n,i.key)):Te()}function rP(n,e){const t=e.key,i=t.path.canonicalString();n.La.get(t)||n.Na.has(i)||(le("SyncEngine","New document in limbo: "+t),n.Na.add(i),Yf(n))}function Yf(n){for(;n.Na.size>0&&n.La.size<n.maxConcurrentLimboResolutions;){const e=n.Na.values().next().value;n.Na.delete(e);const t=new ye(Je.fromString(e)),i=n.Ka.next();n.Ba.set(i,new qC(t)),n.La=n.La.insert(t,i),Zv(n.remoteStore,new gi(sr(Vf(t.path)),i,"TargetPurposeLimboResolution",kc.oe))}}async function ml(n,e,t){const i=Ae(n),o=[],l=[],h=[];i.xa.isEmpty()||(i.xa.forEach((f,p)=>{h.push(i.Ua(p,e,t).then(y=>{var E;if((y||t)&&i.isPrimaryClient){const T=y?!y.fromCache:(E=t==null?void 0:t.targetChanges.get(p.targetId))===null||E===void 0?void 0:E.current;i.sharedClientState.updateQueryState(p.targetId,T?"current":"not-current")}if(y){o.push(y);const T=$f.zi(p.targetId,y);l.push(T)}}))}),await Promise.all(h),i.Ma.R_(o),await async function(p,y){const E=Ae(p);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>K.forEach(y,R=>K.forEach(R.Wi,O=>E.persistence.referenceDelegate.addReference(T,R.targetId,O)).next(()=>K.forEach(R.Gi,O=>E.persistence.referenceDelegate.removeReference(T,R.targetId,O)))))}catch(T){if(!Mo(T))throw T;le("LocalStore","Failed to update sequence numbers: "+T)}for(const T of y){const R=T.targetId;if(!T.fromCache){const O=E.us.get(R),b=O.snapshotVersion,z=O.withLastLimboFreeSnapshotVersion(b);E.us=E.us.insert(R,z)}}}(i.localStore,l))}async function iP(n,e){const t=Ae(n);if(!t.currentUser.isEqual(e)){le("SyncEngine","User change. New user:",e.toKey());const i=await Qv(t.localStore,e);t.currentUser=e,function(l,h){l.Qa.forEach(f=>{f.forEach(p=>{p.reject(new pe(X.CANCELLED,h))})}),l.Qa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await ml(t,i.Ts)}}function sP(n,e){const t=Ae(n),i=t.Ba.get(e);if(i&&i.Fa)return De().add(i.key);{let o=De();const l=t.Oa.get(e);if(!l)return o;for(const h of l){const f=t.xa.get(h);o=o.unionWith(f.view.fa)}return o}}function m0(n){const e=Ae(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=h0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=sP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=eP.bind(null,e),e.Ma.R_=zC.bind(null,e.eventManager),e.Ma.Wa=$C.bind(null,e.eventManager),e}function oP(n){const e=Ae(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=tP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=nP.bind(null,e),e}class _c{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Uc(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){return dC(this.persistence,new cC,e.initialUser,this.serializer)}ja(e){return new Gv(zf.ei,this.serializer)}za(e){return new vC}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}_c.provider={build:()=>new _c};class aP extends _c{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){Be(this.persistence.referenceDelegate instanceof gc);const i=this.persistence.referenceDelegate.garbageCollector;return new QA(i,e.asyncQueue,t)}ja(e){const t=this.cacheSizeBytes!==void 0?rn.withCacheSize(this.cacheSizeBytes):rn.DEFAULT;return new Gv(i=>gc.ei(i,t),this.serializer)}}class af{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>By(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=iP.bind(null,this.syncEngine),await FC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new BC}()}createDatastore(e){const t=Uc(e.databaseInfo.databaseId),i=function(l){return new IC(l)}(e.databaseInfo);return function(l,h,f,p){return new AC(l,h,f,p)}(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return function(i,o,l,h,f){return new PC(i,o,l,h,f)}(this.localStore,this.datastore,e.asyncQueue,t=>By(this.syncEngine,t,0),function(){return by.p()?new by:new EC}())}createSyncEngine(e,t){return function(o,l,h,f,p,y,E){const T=new KC(o,l,h,f,p,y);return E&&(T.$a=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const l=Ae(o);le("RemoteStore","RemoteStore shutting down."),l.k_.add(5),await pl(l),l.Q_.shutdown(),l.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}af.provider={build:()=>new af};/**
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
 */class g0{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):Mr("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class lP{constructor(e,t,i,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=o,this.user=Bt.UNAUTHENTICATED,this.clientId=gv.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(i,async h=>{le("FirestoreClient","Received user=",h.uid),await this.authCredentialListener(h),this.user=h}),this.appCheckCredentials.start(i,h=>(le("FirestoreClient","Received new app check token=",h),this.appCheckCredentialListener(h,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ei;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=Qf(t,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function Dd(n,e){n.asyncQueue.verifyOperationInProgress(),le("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener(async o=>{i.isEqual(o)||(await Qv(e.localStore,o),i=o)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function $y(n,e){n.asyncQueue.verifyOperationInProgress();const t=await uP(n);le("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(i=>My(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,o)=>My(e.remoteStore,o)),n._onlineComponents=e}async function uP(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){le("FirestoreClient","Using user provided OfflineComponentProvider");try{await Dd(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===X.FAILED_PRECONDITION||o.code===X.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;To("Error using user provided cache. Falling back to memory cache: "+t),await Dd(n,new _c)}}else le("FirestoreClient","Using default OfflineComponentProvider"),await Dd(n,new aP(void 0));return n._offlineComponents}async function y0(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(le("FirestoreClient","Using user provided OnlineComponentProvider"),await $y(n,n._uninitializedComponentsProvider._online)):(le("FirestoreClient","Using default OnlineComponentProvider"),await $y(n,new af))),n._onlineComponents}function cP(n){return y0(n).then(e=>e.syncEngine)}async function lf(n){const e=await y0(n),t=e.eventManager;return t.onListen=GC.bind(null,e.syncEngine),t.onUnlisten=YC.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=QC.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=JC.bind(null,e.syncEngine),t}function hP(n,e,t={}){const i=new Ei;return n.asyncQueue.enqueueAndForget(async()=>function(l,h,f,p,y){const E=new g0({next:R=>{E.eu(),h.enqueueAndForget(()=>o0(l,T)),R.fromCache&&p.source==="server"?y.reject(new pe(X.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):y.resolve(R)},error:R=>y.reject(R)}),T=new a0(f,E,{includeMetadataChanges:!0,ua:!0});return s0(l,T)}(await lf(n),n.asyncQueue,e,t,i)),i.promise}/**
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
 */function _0(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Hy=new Map;/**
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
 */function v0(n,e,t){if(!t)throw new pe(X.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function dP(n,e,t,i){if(e===!0&&i===!0)throw new pe(X.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Wy(n){if(!ye.isDocumentKey(n))throw new pe(X.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function qy(n){if(ye.isDocumentKey(n))throw new pe(X.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Jf(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Te()}function wi(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new pe(X.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Jf(n);throw new pe(X.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */class Ky{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new pe(X.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new pe(X.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}dP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=_0((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new pe(X.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new pe(X.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new pe(X.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,o){return i.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Bc{constructor(e,t,i,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ky({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new pe(X.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new pe(X.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ky(e),e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new S1;switch(i.type){case"firstParty":return new P1(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new pe(X.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const i=Hy.get(t);i&&(le("ComponentProvider","Removing Datastore"),Hy.delete(t),i.terminate())}(this),Promise.resolve()}}function fP(n,e,t,i={}){var o;const l=(n=wi(n,Bc))._getSettings(),h=`${e}:${t}`;if(l.host!=="firestore.googleapis.com"&&l.host!==h&&To("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},l),{host:h,ssl:!1})),i.mockUserToken){let f,p;if(typeof i.mockUserToken=="string")f=i.mockUserToken,p=Bt.MOCK_USER;else{f=I_(i.mockUserToken,(o=n._app)===null||o===void 0?void 0:o.options.projectId);const y=i.mockUserToken.sub||i.mockUserToken.user_id;if(!y)throw new pe(X.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Bt(y)}n._authCredentials=new R1(new mv(f,p))}}/**
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
 */class gl{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new gl(this.firestore,e,this._query)}}class Rn{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ti(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Rn(this.firestore,e,this._key)}}class Ti extends gl{constructor(e,t,i){super(e,t,Vf(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Rn(this.firestore,null,new ye(e))}withConverter(e){return new Ti(this.firestore,e,this._path)}}function Od(n,e,...t){if(n=Pt(n),v0("collection","path",e),n instanceof Bc){const i=Je.fromString(e,...t);return qy(i),new Ti(n,null,i)}{if(!(n instanceof Rn||n instanceof Ti))throw new pe(X.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Je.fromString(e,...t));return qy(i),new Ti(n.firestore,null,i)}}function E0(n,e,...t){if(n=Pt(n),arguments.length===1&&(e=gv.newId()),v0("doc","path",e),n instanceof Bc){const i=Je.fromString(e,...t);return Wy(i),new Rn(n,null,new ye(i))}{if(!(n instanceof Rn||n instanceof Ti))throw new pe(X.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Je.fromString(e,...t));return Wy(i),new Rn(n.firestore,n instanceof Ti?n.converter:null,new ye(i))}}/**
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
 */class Gy{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new Yv(this,"async_queue_retry"),this.fu=()=>{const i=xd();i&&le("AsyncQueue","Visibility state changed to "+i.visibilityState),this.r_.Jo()},this.gu=e;const t=xd();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const t=xd();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const t=new Ei;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!Mo(e))throw e;le("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const t=this.gu.then(()=>(this.Ru=!0,e().catch(i=>{this.Au=i,this.Ru=!1;const o=function(h){let f=h.message||"";return h.stack&&(f=h.stack.includes(h.message)?h.stack:h.message+`
`+h.stack),f}(i);throw Mr("INTERNAL UNHANDLED ERROR: ",o),i}).then(i=>(this.Ru=!1,i))));return this.gu=t,t}enqueueAfterDelay(e,t,i){this.pu(),this.mu.indexOf(e)>-1&&(t=0);const o=Gf.createAndSchedule(this,e,t,i,l=>this.Su(l));return this.du.push(o),o}pu(){this.Au&&Te()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const t of this.du)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((t,i)=>t.targetTimeMs-i.targetTimeMs);for(const t of this.du)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const t=this.du.indexOf(e);this.du.splice(t,1)}}function Qy(n){return function(t,i){if(typeof t!="object"||t===null)return!1;const o=t;for(const l of i)if(l in o&&typeof o[l]=="function")return!0;return!1}(n,["next","error","complete"])}class Po extends Bc{constructor(e,t,i,o){super(e,t,i,o),this.type="firestore",this._queue=new Gy,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Gy(e),this._firestoreClient=void 0,await e}}}function pP(n,e){const t=typeof n=="object"?n:Ef(),i=typeof n=="string"?n:"(default)",o=Sc(t,"firestore").getImmediate({identifier:i});if(!o._initialized){const l=E_("firestore");l&&fP(o,...l)}return o}function Zf(n){if(n._terminated)throw new pe(X.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||mP(n),n._firestoreClient}function mP(n){var e,t,i;const o=n._freezeSettings(),l=function(f,p,y,E){return new $1(f,p,y,E.host,E.ssl,E.experimentalForceLongPolling,E.experimentalAutoDetectLongPolling,_0(E.experimentalLongPollingOptions),E.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,o);n._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=o.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),n._firestoreClient=new lP(n._authCredentials,n._appCheckCredentials,n._queue,l,n._componentsProvider&&function(f){const p=f==null?void 0:f._online.build();return{_offline:f==null?void 0:f._offline.build(p),_online:p}}(n._componentsProvider))}/**
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
 */class ko{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ko(Vt.fromBase64String(e))}catch(t){throw new pe(X.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new ko(Vt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class ep{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new pe(X.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Lt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class w0{constructor(e){this._methodName=e}}/**
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
 */class tp{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new pe(X.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new pe(X.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Le(this._lat,e._lat)||Le(this._long,e._long)}}/**
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
 */class np{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(i,o){if(i.length!==o.length)return!1;for(let l=0;l<i.length;++l)if(i[l]!==o[l])return!1;return!0}(this._values,e._values)}}/**
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
 */const gP=/^__.*__$/;class yP{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new _s(e,this.data,this.fieldMask,t,this.fieldTransforms):new dl(e,this.data,t,this.fieldTransforms)}}function T0(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Te()}}class rp{constructor(e,t,i,o,l,h){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=o,l===void 0&&this.Fu(),this.fieldTransforms=l||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new rp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.xu({path:i,Nu:!1});return o.Lu(e),o}Bu(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.xu({path:i,Nu:!1});return o.Fu(),o}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return vc(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(T0(this.Mu)&&gP.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class _P{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||Uc(e)}$u(e,t,i,o=!1){return new rp({Mu:e,methodName:t,Ku:i,path:Lt.emptyPath(),Nu:!1,Qu:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function vP(n){const e=n._freezeSettings(),t=Uc(n._databaseId);return new _P(n._databaseId,!!e.ignoreUndefinedProperties,t)}function EP(n,e,t,i,o,l={}){const h=n.$u(l.merge||l.mergeFields?2:0,e,t,o);A0("Data must be an object, but it was:",h,i);const f=S0(i,h);let p,y;if(l.merge)p=new Bn(h.fieldMask),y=h.fieldTransforms;else if(l.mergeFields){const E=[];for(const T of l.mergeFields){const R=wP(e,T,t);if(!h.contains(R))throw new pe(X.INVALID_ARGUMENT,`Field '${R}' is specified in your field mask but missing from your input data.`);IP(E,R)||E.push(R)}p=new Bn(E),y=h.fieldTransforms.filter(T=>p.covers(T.field))}else p=null,y=h.fieldTransforms;return new yP(new Sn(f),p,y)}function I0(n,e){if(R0(n=Pt(n)))return A0("Unsupported field value:",e,n),S0(n,e);if(n instanceof w0)return function(i,o){if(!T0(o.Mu))throw o.qu(`${i._methodName}() can only be used with update() and set()`);if(!o.path)throw o.qu(`${i._methodName}() is not currently supported inside arrays`);const l=i._toFieldTransform(o);l&&o.fieldTransforms.push(l)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(i,o){const l=[];let h=0;for(const f of i){let p=I0(f,o.ku(h));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),h++}return{arrayValue:{values:l}}}(n,e)}return function(i,o){if((i=Pt(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return dA(o.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const l=Et.fromDate(i);return{timestampValue:mc(o.serializer,l)}}if(i instanceof Et){const l=new Et(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:mc(o.serializer,l)}}if(i instanceof tp)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof ko)return{bytesValue:Bv(o.serializer,i._byteString)};if(i instanceof Rn){const l=o.databaseId,h=i.firestore._databaseId;if(!h.isEqual(l))throw o.qu(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:jf(i.firestore._databaseId||o.databaseId,i._key.path)}}if(i instanceof np)return function(h,f){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:h.toArray().map(p=>{if(typeof p!="number")throw f.qu("VectorValues must only contain numeric values.");return bf(f.serializer,p)})}}}}}}(i,o);throw o.qu(`Unsupported field value: ${Jf(i)}`)}(n,e)}function S0(n,e){const t={};return yv(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):gs(n,(i,o)=>{const l=I0(o,e.Ou(i));l!=null&&(t[i]=l)}),{mapValue:{fields:t}}}function R0(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Et||n instanceof tp||n instanceof ko||n instanceof Rn||n instanceof w0||n instanceof np)}function A0(n,e,t){if(!R0(t)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(t)){const i=Jf(t);throw i==="an object"?e.qu(n+" a custom object"):e.qu(n+" "+i)}}function wP(n,e,t){if((e=Pt(e))instanceof ep)return e._internalPath;if(typeof e=="string")return C0(n,e);throw vc("Field path arguments must be of type string or ",n,!1,void 0,t)}const TP=new RegExp("[~\\*/\\[\\]]");function C0(n,e,t){if(e.search(TP)>=0)throw vc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new ep(...e.split("."))._internalPath}catch{throw vc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function vc(n,e,t,i,o){const l=i&&!i.isEmpty(),h=o!==void 0;let f=`Function ${e}() called with invalid data`;t&&(f+=" (via `toFirestore()`)"),f+=". ";let p="";return(l||h)&&(p+=" (found",l&&(p+=` in field ${i}`),h&&(p+=` in document ${o}`),p+=")"),new pe(X.INVALID_ARGUMENT,f+n+p)}function IP(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class P0{constructor(e,t,i,o,l){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new Rn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new SP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(k0("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class SP extends P0{data(){return super.data()}}function k0(n,e){return typeof e=="string"?C0(n,e):e instanceof ep?e._internalPath:e._delegate._internalPath}/**
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
 */function N0(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new pe(X.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class RP{convertValue(e,t="none"){switch(Pi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ct(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ci(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Te()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return gs(e,(o,l)=>{i[o]=this.convertValue(l,t)}),i}convertVectorValue(e){var t,i,o;const l=(o=(i=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||i===void 0?void 0:i.values)===null||o===void 0?void 0:o.map(h=>ct(h.doubleValue));return new np(l)}convertGeoPoint(e){return new tp(ct(e.latitude),ct(e.longitude))}convertArray(e,t){return(e.values||[]).map(i=>this.convertValue(i,t))}convertServerTimestamp(e,t){switch(t){case"previous":const i=xc(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(el(e));default:return null}}convertTimestamp(e){const t=Ai(e);return new Et(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=Je.fromString(e);Be(Kv(i));const o=new tl(i.get(1),i.get(3)),l=new ye(i.popFirst(5));return o.isEqual(t)||Mr(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
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
 */function AP(n,e,t){let i;return i=n?n.toFirestore(e):e,i}/**
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
 */class za{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class x0 extends P0{constructor(e,t,i,o,l,h){super(e,t,i,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ec(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(k0("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}}class ec extends x0{data(e={}){return super.data(e)}}class D0{constructor(e,t,i,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new za(o.hasPendingWrites,o.fromCache),this.query=i}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(i=>{e.call(t,new ec(this._firestore,this._userDataWriter,i.key,i,new za(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new pe(X.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(o,l){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map(f=>{const p=new ec(o._firestore,o._userDataWriter,f.doc.key,f.doc,new za(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);return f.doc,{type:"added",doc:p,oldIndex:-1,newIndex:h++}})}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(f=>l||f.type!==3).map(f=>{const p=new ec(o._firestore,o._userDataWriter,f.doc.key,f.doc,new za(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,E=-1;return f.type!==0&&(y=h.indexOf(f.doc.key),h=h.delete(f.doc.key)),f.type!==1&&(h=h.add(f.doc),E=h.indexOf(f.doc.key)),{type:CP(f.type),doc:p,oldIndex:y,newIndex:E}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function CP(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Te()}}class ip extends RP{constructor(e){super(),this.firestore=e}convertBytes(e){return new ko(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Rn(this.firestore,null,t)}}function PP(n){n=wi(n,gl);const e=wi(n.firestore,Po),t=Zf(e),i=new ip(e);return N0(n._query),hP(t,n._query).then(o=>new D0(e,i,n,o))}function kP(n){return O0(wi(n.firestore,Po),[new Mf(n._key,or.none())])}function NP(n,e){const t=wi(n.firestore,Po),i=E0(n),o=AP(n.converter,e);return O0(t,[EP(vP(n.firestore),"addDoc",i._key,o,n.converter!==null,{}).toMutation(i._key,or.exists(!1))]).then(()=>i)}function xP(n,...e){var t,i,o;n=Pt(n);let l={includeMetadataChanges:!1,source:"default"},h=0;typeof e[h]!="object"||Qy(e[h])||(l=e[h],h++);const f={includeMetadataChanges:l.includeMetadataChanges,source:l.source};if(Qy(e[h])){const T=e[h];e[h]=(t=T.next)===null||t===void 0?void 0:t.bind(T),e[h+1]=(i=T.error)===null||i===void 0?void 0:i.bind(T),e[h+2]=(o=T.complete)===null||o===void 0?void 0:o.bind(T)}let p,y,E;if(n instanceof Rn)y=wi(n.firestore,Po),E=Vf(n._key.path),p={next:T=>{e[h]&&e[h](DP(y,n,T))},error:e[h+1],complete:e[h+2]};else{const T=wi(n,gl);y=wi(T.firestore,Po),E=T._query;const R=new ip(y);p={next:O=>{e[h]&&e[h](new D0(y,R,T,O))},error:e[h+1],complete:e[h+2]},N0(n._query)}return function(R,O,b,z){const L=new g0(z),W=new a0(O,L,b);return R.asyncQueue.enqueueAndForget(async()=>s0(await lf(R),W)),()=>{L.eu(),R.asyncQueue.enqueueAndForget(async()=>o0(await lf(R),W))}}(Zf(y),E,f,p)}function O0(n,e){return function(i,o){const l=new Ei;return i.asyncQueue.enqueueAndForget(async()=>ZC(await cP(i),o,l)),l.promise}(Zf(n),e)}function DP(n,e,t){const i=t.docs.get(e._key),o=new ip(n);return new x0(n,o,e._key,i,new za(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(o){Vo=o})(ps),cs(new Si("firestore",(i,{instanceIdentifier:o,options:l})=>{const h=i.getProvider("app").getImmediate(),f=new Po(new A1(i.getProvider("auth-internal")),new N1(i.getProvider("app-check-internal")),function(y,E){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new pe(X.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new tl(y.options.projectId,E)}(h,o),h);return l=Object.assign({useFetchStreams:t},l),f._setSettings(l),f},"PUBLIC").setMultipleInstances(!0)),nr(hy,"4.7.5",e),nr(hy,"4.7.5","esm2017")})();/**
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
 */const L0="firebasestorage.googleapis.com",V0="storageBucket",OP=2*60*1e3,LP=10*60*1e3;/**
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
 */class at extends hr{constructor(e,t,i=0){super(Ld(e),`Firebase Storage: ${t} (${Ld(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,at.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ld(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ot;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ot||(ot={}));function Ld(n){return"storage/"+n}function sp(){const n="An unknown error occurred, please check the error payload for server response.";return new at(ot.UNKNOWN,n)}function VP(n){return new at(ot.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function bP(n){return new at(ot.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function MP(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new at(ot.UNAUTHENTICATED,n)}function UP(){return new at(ot.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function FP(n){return new at(ot.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function jP(){return new at(ot.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function BP(){return new at(ot.CANCELED,"User canceled the upload/download.")}function zP(n){return new at(ot.INVALID_URL,"Invalid URL '"+n+"'.")}function $P(n){return new at(ot.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function HP(){return new at(ot.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+V0+"' property when initializing the app?")}function WP(){return new at(ot.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function qP(){return new at(ot.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function KP(n){return new at(ot.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function uf(n){return new at(ot.INVALID_ARGUMENT,n)}function b0(){return new at(ot.APP_DELETED,"The Firebase app was deleted.")}function GP(n){return new at(ot.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ga(n,e){return new at(ot.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function ba(n){throw new at(ot.INTERNAL_ERROR,"Internal error: "+n)}/**
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
 */class dn{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let i;try{i=dn.makeFromUrl(e,t)}catch{return new dn(e,"")}if(i.path==="")return i;throw $P(e)}static makeFromUrl(e,t){let i=null;const o="([A-Za-z0-9.\\-_]+)";function l(se){se.path.charAt(se.path.length-1)==="/"&&(se.path_=se.path_.slice(0,-1))}const h="(/(.*))?$",f=new RegExp("^gs://"+o+h,"i"),p={bucket:1,path:3};function y(se){se.path_=decodeURIComponent(se.path)}const E="v[A-Za-z0-9_]+",T=t.replace(/[.]/g,"\\."),R="(/([^?#]*).*)?$",O=new RegExp(`^https?://${T}/${E}/b/${o}/o${R}`,"i"),b={bucket:1,path:3},z=t===L0?"(?:storage.googleapis.com|storage.cloud.google.com)":t,L="([^?#]*)",W=new RegExp(`^https?://${z}/${o}/${L}`,"i"),ne=[{regex:f,indices:p,postModify:l},{regex:O,indices:b,postModify:y},{regex:W,indices:{bucket:1,path:2},postModify:y}];for(let se=0;se<ne.length;se++){const Ie=ne[se],_e=Ie.regex.exec(e);if(_e){const N=_e[Ie.indices.bucket];let I=_e[Ie.indices.path];I||(I=""),i=new dn(N,I),Ie.postModify(i);break}}if(i==null)throw zP(e);return i}}class QP{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function XP(n,e,t){let i=1,o=null,l=null,h=!1,f=0;function p(){return f===2}let y=!1;function E(...L){y||(y=!0,e.apply(null,L))}function T(L){o=setTimeout(()=>{o=null,n(O,p())},L)}function R(){l&&clearTimeout(l)}function O(L,...W){if(y){R();return}if(L){R(),E.call(null,L,...W);return}if(p()||h){R(),E.call(null,L,...W);return}i<64&&(i*=2);let ne;f===1?(f=2,ne=0):ne=(i+Math.random())*1e3,T(ne)}let b=!1;function z(L){b||(b=!0,R(),!y&&(o!==null?(L||(f=2),clearTimeout(o),T(0)):L||(f=1)))}return T(0),l=setTimeout(()=>{h=!0,z(!0)},t),z}function YP(n){n(!1)}/**
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
 */function JP(n){return n!==void 0}function ZP(n){return typeof n=="object"&&!Array.isArray(n)}function op(n){return typeof n=="string"||n instanceof String}function Xy(n){return ap()&&n instanceof Blob}function ap(){return typeof Blob<"u"}function Yy(n,e,t,i){if(i<e)throw uf(`Invalid value for '${n}'. Expected ${e} or greater.`);if(i>t)throw uf(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
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
 */function zc(n,e,t){let i=e;return t==null&&(i=`https://${e}`),`${t}://${i}/v0${n}`}function M0(n){const e=encodeURIComponent;let t="?";for(const i in n)if(n.hasOwnProperty(i)){const o=e(i)+"="+e(n[i]);t=t+o+"&"}return t=t.slice(0,-1),t}var us;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(us||(us={}));/**
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
 */function ek(n,e){const t=n>=500&&n<600,o=[408,429].indexOf(n)!==-1,l=e.indexOf(n)!==-1;return t||o||l}/**
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
 */class tk{constructor(e,t,i,o,l,h,f,p,y,E,T,R=!0){this.url_=e,this.method_=t,this.headers_=i,this.body_=o,this.successCodes_=l,this.additionalRetryCodes_=h,this.callback_=f,this.errorCallback_=p,this.timeout_=y,this.progressCallback_=E,this.connectionFactory_=T,this.retry=R,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((O,b)=>{this.resolve_=O,this.reject_=b,this.start_()})}start_(){const e=(i,o)=>{if(o){i(!1,new ju(!1,null,!0));return}const l=this.connectionFactory_();this.pendingConnection_=l;const h=f=>{const p=f.loaded,y=f.lengthComputable?f.total:-1;this.progressCallback_!==null&&this.progressCallback_(p,y)};this.progressCallback_!==null&&l.addUploadProgressListener(h),l.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&l.removeUploadProgressListener(h),this.pendingConnection_=null;const f=l.getErrorCode()===us.NO_ERROR,p=l.getStatus();if(!f||ek(p,this.additionalRetryCodes_)&&this.retry){const E=l.getErrorCode()===us.ABORT;i(!1,new ju(!1,null,E));return}const y=this.successCodes_.indexOf(p)!==-1;i(!0,new ju(y,l))})},t=(i,o)=>{const l=this.resolve_,h=this.reject_,f=o.connection;if(o.wasSuccessCode)try{const p=this.callback_(f,f.getResponse());JP(p)?l(p):l()}catch(p){h(p)}else if(f!==null){const p=sp();p.serverResponse=f.getErrorText(),this.errorCallback_?h(this.errorCallback_(f,p)):h(p)}else if(o.canceled){const p=this.appDelete_?b0():BP();h(p)}else{const p=jP();h(p)}};this.canceled_?t(!1,new ju(!1,null,!0)):this.backoffId_=XP(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&YP(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ju{constructor(e,t,i){this.wasSuccessCode=e,this.connection=t,this.canceled=!!i}}function nk(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function rk(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function ik(n,e){e&&(n["X-Firebase-GMPID"]=e)}function sk(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function ok(n,e,t,i,o,l,h=!0){const f=M0(n.urlParams),p=n.url+f,y=Object.assign({},n.headers);return ik(y,e),nk(y,t),rk(y,l),sk(y,i),new tk(p,n.method,y,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,o,h)}/**
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
 */function ak(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function lk(...n){const e=ak();if(e!==void 0){const t=new e;for(let i=0;i<n.length;i++)t.append(n[i]);return t.getBlob()}else{if(ap())return new Blob(n);throw new at(ot.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function uk(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function ck(n){if(typeof atob>"u")throw KP("base-64");return atob(n)}/**
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
 */const tr={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Vd{constructor(e,t){this.data=e,this.contentType=t||null}}function hk(n,e){switch(n){case tr.RAW:return new Vd(U0(e));case tr.BASE64:case tr.BASE64URL:return new Vd(F0(n,e));case tr.DATA_URL:return new Vd(fk(e),pk(e))}throw sp()}function U0(n){const e=[];for(let t=0;t<n.length;t++){let i=n.charCodeAt(t);if(i<=127)e.push(i);else if(i<=2047)e.push(192|i>>6,128|i&63);else if((i&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const l=i,h=n.charCodeAt(++t);i=65536|(l&1023)<<10|h&1023,e.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|i&63)}else(i&64512)===56320?e.push(239,191,189):e.push(224|i>>12,128|i>>6&63,128|i&63)}return new Uint8Array(e)}function dk(n){let e;try{e=decodeURIComponent(n)}catch{throw Ga(tr.DATA_URL,"Malformed data URL.")}return U0(e)}function F0(n,e){switch(n){case tr.BASE64:{const o=e.indexOf("-")!==-1,l=e.indexOf("_")!==-1;if(o||l)throw Ga(n,"Invalid character '"+(o?"-":"_")+"' found: is it base64url encoded?");break}case tr.BASE64URL:{const o=e.indexOf("+")!==-1,l=e.indexOf("/")!==-1;if(o||l)throw Ga(n,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=ck(e)}catch(o){throw o.message.includes("polyfill")?o:Ga(n,"Invalid character found")}const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i}class j0{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw Ga(tr.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const i=t[1]||null;i!=null&&(this.base64=mk(i,";base64"),this.contentType=this.base64?i.substring(0,i.length-7):i),this.rest=e.substring(e.indexOf(",")+1)}}function fk(n){const e=new j0(n);return e.base64?F0(tr.BASE64,e.rest):dk(e.rest)}function pk(n){return new j0(n).contentType}function mk(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
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
 */class mi{constructor(e,t){let i=0,o="";Xy(e)?(this.data_=e,i=e.size,o=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),i=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),i=e.length),this.size_=i,this.type_=o}size(){return this.size_}type(){return this.type_}slice(e,t){if(Xy(this.data_)){const i=this.data_,o=uk(i,e,t);return o===null?null:new mi(o)}else{const i=new Uint8Array(this.data_.buffer,e,t-e);return new mi(i,!0)}}static getBlob(...e){if(ap()){const t=e.map(i=>i instanceof mi?i.data_:i);return new mi(lk.apply(null,t))}else{const t=e.map(h=>op(h)?hk(tr.RAW,h).data:h.data_);let i=0;t.forEach(h=>{i+=h.byteLength});const o=new Uint8Array(i);let l=0;return t.forEach(h=>{for(let f=0;f<h.length;f++)o[l++]=h[f]}),new mi(o,!0)}}uploadData(){return this.data_}}/**
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
 */function B0(n){let e;try{e=JSON.parse(n)}catch{return null}return ZP(e)?e:null}/**
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
 */function gk(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function yk(n,e){const t=e.split("/").filter(i=>i.length>0).join("/");return n.length===0?t:n+"/"+t}function z0(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
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
 */function _k(n,e){return e}class Gt{constructor(e,t,i,o){this.server=e,this.local=t||e,this.writable=!!i,this.xform=o||_k}}let Bu=null;function vk(n){return!op(n)||n.length<2?n:z0(n)}function $0(){if(Bu)return Bu;const n=[];n.push(new Gt("bucket")),n.push(new Gt("generation")),n.push(new Gt("metageneration")),n.push(new Gt("name","fullPath",!0));function e(l,h){return vk(h)}const t=new Gt("name");t.xform=e,n.push(t);function i(l,h){return h!==void 0?Number(h):h}const o=new Gt("size");return o.xform=i,n.push(o),n.push(new Gt("timeCreated")),n.push(new Gt("updated")),n.push(new Gt("md5Hash",null,!0)),n.push(new Gt("cacheControl",null,!0)),n.push(new Gt("contentDisposition",null,!0)),n.push(new Gt("contentEncoding",null,!0)),n.push(new Gt("contentLanguage",null,!0)),n.push(new Gt("contentType",null,!0)),n.push(new Gt("metadata","customMetadata",!0)),Bu=n,Bu}function Ek(n,e){function t(){const i=n.bucket,o=n.fullPath,l=new dn(i,o);return e._makeStorageReference(l)}Object.defineProperty(n,"ref",{get:t})}function wk(n,e,t){const i={};i.type="file";const o=t.length;for(let l=0;l<o;l++){const h=t[l];i[h.local]=h.xform(i,e[h.server])}return Ek(i,n),i}function H0(n,e,t){const i=B0(e);return i===null?null:wk(n,i,t)}function Tk(n,e,t,i){const o=B0(e);if(o===null||!op(o.downloadTokens))return null;const l=o.downloadTokens;if(l.length===0)return null;const h=encodeURIComponent;return l.split(",").map(y=>{const E=n.bucket,T=n.fullPath,R="/b/"+h(E)+"/o/"+h(T),O=zc(R,t,i),b=M0({alt:"media",token:y});return O+b})[0]}function Ik(n,e){const t={},i=e.length;for(let o=0;o<i;o++){const l=e[o];l.writable&&(t[l.server]=n[l.local])}return JSON.stringify(t)}class lp{constructor(e,t,i,o){this.url=e,this.method=t,this.handler=i,this.timeout=o,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function W0(n){if(!n)throw sp()}function Sk(n,e){function t(i,o){const l=H0(n,o,e);return W0(l!==null),l}return t}function Rk(n,e){function t(i,o){const l=H0(n,o,e);return W0(l!==null),Tk(l,o,n.host,n._protocol)}return t}function q0(n){function e(t,i){let o;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?o=UP():o=MP():t.getStatus()===402?o=bP(n.bucket):t.getStatus()===403?o=FP(n.path):o=i,o.status=t.getStatus(),o.serverResponse=i.serverResponse,o}return e}function K0(n){const e=q0(n);function t(i,o){let l=e(i,o);return i.getStatus()===404&&(l=VP(n.path)),l.serverResponse=o.serverResponse,l}return t}function Ak(n,e,t){const i=e.fullServerUrl(),o=zc(i,n.host,n._protocol),l="GET",h=n.maxOperationRetryTime,f=new lp(o,l,Rk(n,t),h);return f.errorHandler=K0(e),f}function Ck(n,e){const t=e.fullServerUrl(),i=zc(t,n.host,n._protocol),o="DELETE",l=n.maxOperationRetryTime;function h(p,y){}const f=new lp(i,o,h,l);return f.successCodes=[200,204],f.errorHandler=K0(e),f}function Pk(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function kk(n,e,t){const i=Object.assign({},t);return i.fullPath=n.path,i.size=e.size(),i.contentType||(i.contentType=Pk(null,e)),i}function Nk(n,e,t,i,o){const l=e.bucketOnlyServerUrl(),h={"X-Goog-Upload-Protocol":"multipart"};function f(){let ne="";for(let se=0;se<2;se++)ne=ne+Math.random().toString().slice(2);return ne}const p=f();h["Content-Type"]="multipart/related; boundary="+p;const y=kk(e,i,o),E=Ik(y,t),T="--"+p+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+E+`\r
--`+p+`\r
Content-Type: `+y.contentType+`\r
\r
`,R=`\r
--`+p+"--",O=mi.getBlob(T,i,R);if(O===null)throw WP();const b={name:y.fullPath},z=zc(l,n.host,n._protocol),L="POST",W=n.maxUploadRetryTime,te=new lp(z,L,Sk(n,t),W);return te.urlParams=b,te.headers=h,te.body=O.uploadData(),te.errorHandler=q0(e),te}class xk{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=us.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=us.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=us.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,i,o){if(this.sent_)throw ba("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),o!==void 0)for(const l in o)o.hasOwnProperty(l)&&this.xhr_.setRequestHeader(l,o[l].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ba("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ba("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ba("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ba("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Dk extends xk{initXhr(){this.xhr_.responseType="text"}}function up(){return new Dk}/**
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
 */class fs{constructor(e,t){this._service=e,t instanceof dn?this._location=t:this._location=dn.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new fs(e,t)}get root(){const e=new dn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return z0(this._location.path)}get storage(){return this._service}get parent(){const e=gk(this._location.path);if(e===null)return null;const t=new dn(this._location.bucket,e);return new fs(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw GP(e)}}function Ok(n,e,t){n._throwIfRoot("uploadBytes");const i=Nk(n.storage,n._location,$0(),new mi(e,!0),t);return n.storage.makeRequestWithTokens(i,up).then(o=>({metadata:o,ref:n}))}function Lk(n){n._throwIfRoot("getDownloadURL");const e=Ak(n.storage,n._location,$0());return n.storage.makeRequestWithTokens(e,up).then(t=>{if(t===null)throw qP();return t})}function Vk(n){n._throwIfRoot("deleteObject");const e=Ck(n.storage,n._location);return n.storage.makeRequestWithTokens(e,up)}function bk(n,e){const t=yk(n._location.path,e),i=new dn(n._location.bucket,t);return new fs(n.storage,i)}/**
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
 */function Mk(n){return/^[A-Za-z]+:\/\//.test(n)}function Uk(n,e){return new fs(n,e)}function G0(n,e){if(n instanceof cp){const t=n;if(t._bucket==null)throw HP();const i=new fs(t,t._bucket);return e!=null?G0(i,e):i}else return e!==void 0?bk(n,e):n}function Fk(n,e){if(e&&Mk(e)){if(n instanceof cp)return Uk(n,e);throw uf("To use ref(service, url), the first argument must be a Storage instance.")}else return G0(n,e)}function Jy(n,e){const t=e==null?void 0:e[V0];return t==null?null:dn.makeFromBucketSpec(t,n)}function jk(n,e,t,i={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:o}=i;o&&(n._overrideAuthToken=typeof o=="string"?o:I_(o,n.app.options.projectId))}class cp{constructor(e,t,i,o,l){this.app=e,this._authProvider=t,this._appCheckProvider=i,this._url=o,this._firebaseVersion=l,this._bucket=null,this._host=L0,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=OP,this._maxUploadRetryTime=LP,this._requests=new Set,o!=null?this._bucket=dn.makeFromBucketSpec(o,this._host):this._bucket=Jy(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=dn.makeFromBucketSpec(this._url,e):this._bucket=Jy(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Yy("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Yy("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new fs(this,e)}_makeRequest(e,t,i,o,l=!0){if(this._deleted)return new QP(b0());{const h=ok(e,this._appId,i,o,t,this._firebaseVersion,l);return this._requests.add(h),h.getPromise().then(()=>this._requests.delete(h),()=>this._requests.delete(h)),h}}async makeRequestWithTokens(e,t){const[i,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,i,o).getPromise()}}const Zy="@firebase/storage",e_="0.13.4";/**
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
 */const Q0="storage";function Bk(n,e,t){return n=Pt(n),Ok(n,e,t)}function zk(n){return n=Pt(n),Lk(n)}function $k(n){return n=Pt(n),Vk(n)}function t_(n,e){return n=Pt(n),Fk(n,e)}function Hk(n=Ef(),e){n=Pt(n);const i=Sc(n,Q0).getImmediate({identifier:e}),o=E_("storage");return o&&Wk(i,...o),i}function Wk(n,e,t,i={}){jk(n,e,t,i)}function qk(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),i=n.getProvider("auth-internal"),o=n.getProvider("app-check-internal");return new cp(t,i,o,e,ps)}function Kk(){cs(new Si(Q0,qk,"PUBLIC").setMultipleInstances(!0)),nr(Zy,e_,""),nr(Zy,e_,"esm2017")}Kk();const Gk={apiKey:"AIzaSyBN1oa34wCpYBOIUN4EvWohify6Zp5IW1A",authDomain:"skane-teknik.firebaseapp.com",projectId:"skane-teknik",storageBucket:"skane-teknik.firebasestorage.app",messagingSenderId:"178483778697",appId:"1:178483778697:web:65b0b51716f386957fa258"},hp=A_(Gk),Qk=E1(hp),zu=pP(hp),n_=Hk(hp),X0=H.createContext(null),Xk=({children:n})=>{const[e,t]=H.useState(!1),i=()=>t(!0),o=()=>t(!1);return ee.jsx(X0.Provider,{value:{isAuthenticated:e,login:i,logout:o},children:n})},dp=()=>H.useContext(X0);function Yk(){const[n,e]=H.useState(""),[t,i]=H.useState(""),o=wc(),{login:l}=dp(),h=async f=>{f.preventDefault();try{const p=await aR(Qk,n,t);console.log("User logged in:",p.user),l(),o("/add-delete")}catch(p){console.error("Error logging in:",p.message),alert("Inloggningen misslyckades. Kontrollera dina uppgifter.")}};return ee.jsx(ee.Fragment,{children:ee.jsxs("div",{className:"container",children:[ee.jsx("h1",{className:"admin-title",children:"SKÅNE TEKNIK ADMIN SIDA"}),ee.jsxs("div",{className:"card",children:[ee.jsx("h2",{children:"Logga in"}),ee.jsxs("form",{className:"login-form",onSubmit:h,children:[ee.jsx("div",{className:"form-group",children:ee.jsx("input",{type:"email",placeholder:"E-postadress",className:"login-input",value:n,onChange:f=>e(f.target.value)})}),ee.jsx("div",{className:"form-group",children:ee.jsx("input",{type:"password",placeholder:"Lösenord",className:"login-input",value:t,onChange:f=>i(f.target.value)})}),ee.jsx("button",{type:"submit",className:"submit-button",children:"Logga In"})]})]})]})})}function Jk(){const[n,e]=H.useState(""),[t,i]=H.useState(""),[o,l]=H.useState(""),[h,f]=H.useState(null),[p,y]=H.useState(null),[E,T]=H.useState(""),[R,O]=H.useState(!1),[b,z]=H.useState(null),[L,W]=H.useState([]),[te,ne]=H.useState("all"),{logout:se}=dp(),Ie=wc(),[_e,N]=H.useState(!0),I=ve=>{if(ve.target.files[0]){f(ve.target.files[0]);const Se=URL.createObjectURL(ve.target.files[0]);y(Se)}},A=async ve=>{ve.preventDefault(),O(!0);try{const Se=t_(n_,`products/${h.name+"_"+Date.now()}`),J=await Bk(Se,h),ae=await zk(J.ref),re={name:n,tag:t,price:Number(o),description:E,imageUrl:ae,createdAt:new Date};await NP(Od(zu,"Products"),re),e(""),i(""),l(""),T(""),f(null),y(null);const V=document.getElementById("image");V&&(V.value=""),alert("Produkt har lagts till framgångsrikt!")}catch(Se){console.error("Error adding product: ",Se),alert("Ett fel uppstod när produkten skulle läggas till.")}finally{O(!1)}};H.useEffect(()=>()=>{p&&URL.revokeObjectURL(p)},[p]);const k=()=>n.trim()!==""&&t!==""&&o!==""&&E.trim()!==""&&h!==null;H.useEffect(()=>{const ve=Od(zu,"Products"),Se=xP(ve,J=>{const ae=J.docs.map(re=>({id:re.id,...re.data()}));W(ae),N(!1)});return()=>Se()},[]);const D=({products:ve,setProducts:Se,selectedCategory:J,setSelectedCategory:ae})=>{var dr;const[re,V]=H.useState(!1),[q,fe]=H.useState(1),Ce=12,Pe=[{id:"all",label:"Alla Produkter"},{id:"surfplata",label:"Surfplatta"},{id:"mobil telefoner",label:"Mobil Telefoner"},{id:"mobil tillbehör",label:"Mobil Tillbehör"},{id:"smart klocka",label:"Smart Klocka"},{id:"övrig",label:"Övrig"}],Ne=ve.filter(We=>J==="all"?!0:We.tag===J),Ve=q*Ce,Ue=Ve-Ce,$e=Ne.slice(Ue,Ve),it=Math.ceil(Ne.length/Ce),fn=We=>{fe(We),window.scrollTo({top:0,behavior:"smooth"})};return ee.jsxs("div",{className:"products-container",children:[ee.jsx("div",{className:"products-header",children:ee.jsxs("div",{className:"category-dropdown",children:[ee.jsxs("button",{className:"dropdown-button",onClick:()=>V(!re),children:[(dr=Pe.find(We=>We.id===J))==null?void 0:dr.label,ee.jsx("span",{className:"dropdown-arrow",children:"▼"})]}),re&&ee.jsx("div",{className:"dropdown-menu",children:Pe.map(We=>ee.jsx("button",{className:`dropdown-item ${J===We.id?"active":""}`,onClick:()=>{ae(We.id),V(!1)},children:We.label},We.id))})]})}),ee.jsx("div",{className:"products-grid",children:$e.map(We=>ee.jsxs("div",{className:"product-item",onClick:()=>z(We),children:[ee.jsx(Tt,{src:We.imageUrl,alt:We.name,className:"product-item-image"}),ee.jsxs("div",{className:"product-item-details",children:[ee.jsx("h3",{children:We.name}),ee.jsxs("p",{className:"product-item-price",children:[We.price," kr"]})]})]},We.id))}),it>1&&ee.jsxs("div",{className:"pagination",children:[ee.jsx("button",{className:"pagination-button",onClick:()=>fn(q-1),disabled:q===1,children:"Föregående"}),ee.jsxs("span",{className:"page-info",children:["Sida ",q," av ",it]}),ee.jsx("button",{className:"pagination-button",onClick:()=>fn(q+1),disabled:q===it,children:"Nästa"})]})]})},M=({product:ve,onClose:Se,onDelete:J})=>{if(!ve)return null;const ae=re=>{re.stopPropagation(),Se()};return H.useEffect(()=>(document.body.classList.add("modal-open"),()=>{document.body.classList.remove("modal-open")}),[]),ee.jsx("div",{className:"modal-overlay",onClick:ae,children:ee.jsxs("div",{className:"modal-content",onClick:re=>re.stopPropagation(),children:[ee.jsx("button",{className:"modal-close",onClick:ae,children:"×"}),ee.jsx("div",{className:"modal-image-container",children:ee.jsx("img",{src:ve.imageUrl,alt:ve.name,className:"modal-image"})}),ee.jsxs("div",{className:"modal-details",children:[ee.jsx("h3",{children:ve.name}),ee.jsx("p",{className:"modal-tag",children:ve.tag}),ee.jsxs("p",{className:"modal-price",children:[ve.price," kr"]}),ee.jsx("p",{className:"modal-description",children:ve.description}),ee.jsxs("div",{className:"modal-actions",children:[ee.jsx("button",{className:"modal-button cancel",onClick:ae,children:"Avbryt"}),ee.jsx("button",{className:"modal-button delete",onClick:()=>J(ve),children:"Ta bort"})]})]})]})})},C=async ve=>{if(window.confirm("Är du säker på att du vill ta bort denna produkt?"))try{await kP(E0(zu,"Products",ve.id));const Se=t_(n_,ve.imageUrl);await $k(Se),z(null);const J=Od(zu,"Products"),re=(await PP(J)).docs.map(V=>({id:V.id,...V.data()}));W(re)}catch(Se){console.error("Error deleting product: ",Se),alert("Ett fel uppstod när produkten skulle tas bort.")}},et=()=>{se(),Ie("/")},Tt=({src:ve,alt:Se,className:J})=>{const[ae,re]=H.useState(!1);return ee.jsxs(ee.Fragment,{children:[!ae&&ee.jsx("div",{className:"skeleton"}),ee.jsx("img",{src:ve,alt:Se,className:`${J} ${ae?"loaded":""}`,onLoad:()=>re(!0),style:{display:ae?"block":"none"}})]})};return ee.jsxs("div",{className:`container ${R||_e?"loading":""}`,children:[ee.jsx("button",{onClick:et,className:"logout-button",children:"Logga ut"}),ee.jsxs("div",{className:"product-card",children:[ee.jsx("h2",{children:"Lägg till ny produkt"}),ee.jsxs("form",{className:"product-form",onSubmit:A,children:[ee.jsxs("div",{className:"form-group",children:[ee.jsxs("label",{htmlFor:"image",className:"file-input-label",children:["Ladda upp produkt bild",ee.jsx("input",{type:"file",id:"image",accept:"image/*",onChange:I,className:"file-input",required:!0})]}),p&&ee.jsx("div",{className:"image-preview",children:ee.jsx("img",{src:p,alt:"Product preview"})})]}),ee.jsx("div",{className:"form-group",children:ee.jsx("input",{type:"text",placeholder:"Produktnamn",value:n,onChange:ve=>e(ve.target.value),className:"product-input",required:!0})}),ee.jsx("div",{className:"form-group",children:ee.jsxs("select",{value:t,onChange:ve=>i(ve.target.value),className:"product-input",required:!0,children:[ee.jsx("option",{value:"",children:"Välj en kategori"}),ee.jsx("option",{value:"mobil telefoner",children:"Mobil Telefoner"}),ee.jsx("option",{value:"mobil tillbehör",children:"Mobil Tillbehör"}),ee.jsx("option",{value:"surfplata",children:"Surfplatta"}),ee.jsx("option",{value:"smart klocka",children:"Smart Klocka"}),ee.jsx("option",{value:"övrig",children:"Övrig"})]})}),ee.jsx("div",{className:"form-group",children:ee.jsx("textarea",{placeholder:"Produktbeskrivning",value:E,onChange:ve=>T(ve.target.value),className:"product-input product-textarea",required:!0})}),ee.jsx("div",{className:"form-group",children:ee.jsx("input",{type:"number",placeholder:"Produktpris",value:o,onChange:ve=>l(ve.target.value),className:"product-input",required:!0})}),ee.jsx("button",{type:"submit",className:"submit-button",disabled:!k(),children:"Lägg till produkt"})]})]}),R&&ee.jsx("div",{className:"loading-overlay",children:ee.jsxs("div",{className:"loading-spinner",children:[ee.jsx("p",{className:"loading-text",children:"Laddar upp produkt..."}),ee.jsx("div",{className:"progress-bar",children:ee.jsx("div",{className:"progress-bar-fill"})})]})}),ee.jsx(D,{products:L,setProducts:W,selectedCategory:te,setSelectedCategory:ne}),b&&ee.jsx(M,{product:b,onClose:()=>z(null),onDelete:C})]})}const Zk=({children:n})=>{const{isAuthenticated:e}=dp();return e?n:ee.jsx(Jw,{to:"/"})};lw.createRoot(document.getElementById("root")).render(ee.jsx(H.StrictMode,{children:ee.jsx(Xk,{children:ee.jsx(ST,{children:ee.jsxs(eT,{children:[ee.jsx(Md,{path:"/",element:ee.jsx(Yk,{})}),ee.jsx(Md,{path:"/add-delete",element:ee.jsx(Zk,{children:ee.jsx(Jk,{})})})]})})})}));
