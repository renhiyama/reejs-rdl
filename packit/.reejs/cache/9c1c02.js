/* esm.sh - esbuild bundle(abort-controller@3.0.0) node production */
import * as _1$ from "./e7e546.js";const __1$ = _1$.default??_1$;var x=Object.create;var c=Object.defineProperty;var T=Object.getOwnPropertyDescriptor;var v=Object.getOwnPropertyNames;var E=Object.getPrototypeOf,j=Object.prototype.hasOwnProperty;var w=(t=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(t,{get:(e,o)=>(typeof require<"u"?require:e)[o]}):t)(function(t){if(typeof require<"u")return require.apply(this,arguments);throw new Error('Dynamic require of "'+t+'" is not supported')});var _=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),O=(t,e)=>{for(var o in e)c(t,o,{get:e[o],enumerable:!0})},p=(t,e,o,y)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of v(e))!j.call(t,i)&&i!==o&&c(t,i,{get:()=>e[i],enumerable:!(y=T(e,i))||y.enumerable});return t},l=(t,e,o)=>(p(t,e,"default"),o&&p(o,e,"default")),d=(t,e,o)=>(o=t!=null?x(E(t)):{},p(e||!t||!t.__esModule?c(o,"default",{value:t,enumerable:!0}):o,t));var g=_((b,s)=>{"use strict";Object.defineProperty(b,"__esModule",{value:!0});var f=__1$,r=class extends f.EventTarget{constructor(){throw super(),new TypeError("AbortSignal cannot be constructed directly")}get aborted(){let e=u.get(this);if(typeof e!="boolean")throw new TypeError(`Expected 'this' to be an 'AbortSignal' object, but got ${this===null?"null":typeof this}`);return e}};f.defineEventAttribute(r.prototype,"abort");function P(){let t=Object.create(r.prototype);return f.EventTarget.call(t),u.set(t,!1),t}function C(t){u.get(t)===!1&&(u.set(t,!0),t.dispatchEvent({type:"abort"}))}var u=new WeakMap;Object.defineProperties(r.prototype,{aborted:{enumerable:!0}});typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(r.prototype,Symbol.toStringTag,{configurable:!0,value:"AbortSignal"});var n=class{constructor(){m.set(this,P())}get signal(){return S(this)}abort(){C(S(this))}},m=new WeakMap;function S(t){let e=m.get(t);if(e==null)throw new TypeError(`Expected 'this' to be an 'AbortController' object, but got ${t===null?"null":typeof t}`);return e}Object.defineProperties(n.prototype,{signal:{enumerable:!0},abort:{enumerable:!0}});typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(n.prototype,Symbol.toStringTag,{configurable:!0,value:"AbortController"});b.AbortController=n;b.AbortSignal=r;b.default=n;s.exports=n;s.exports.AbortController=s.exports.default=n;s.exports.AbortSignal=r});var a={};O(a,{AbortController:()=>M,AbortSignal:()=>k,default:()=>$});var A=d(g());l(a,d(g()));var{AbortController:M,AbortSignal:k}=A,{default:h,...W}=A,$=h!==void 0?h:W;export{M as AbortController,k as AbortSignal,$ as default};
//# sourceMappingURL=abort-controller.mjs.map