/* esm.sh - esbuild bundle(data-uri-to-buffer@3.0.1) node production */
var y=Object.create;var d=Object.defineProperty;var I=Object.getOwnPropertyDescriptor;var _=Object.getOwnPropertyNames;var w=Object.getPrototypeOf,U=Object.prototype.hasOwnProperty;var S=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),C=(e,t)=>{for(var a in t)d(e,a,{get:t[a],enumerable:!0})},c=(e,t,a,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of _(t))!U.call(e,s)&&s!==a&&d(e,s,{get:()=>t[s],enumerable:!(r=I(t,s))||r.enumerable});return e},f=(e,t,a)=>(c(e,t,"default"),a&&c(a,t,"default")),m=(e,t,a)=>(a=e!=null?y(w(e)):{},c(t||!e||!e.__esModule?d(a,"default",{value:e,enumerable:!0}):a,e));var p=S((O,b)=>{"use strict";function T(e){if(!/^data:/i.test(e))throw new TypeError('`uri` does not appear to be a Data URI (must begin with "data:")');e=e.replace(/\r?\n/g,"");let t=e.indexOf(",");if(t===-1||t<=4)throw new TypeError("malformed data: URI");let a=e.substring(5,t).split(";"),r="",s=!1,u=a[0]||"text/plain",l=u;for(let o=1;o<a.length;o++)a[o]==="base64"?s=!0:(l+=`;${a[o]}`,a[o].indexOf("charset=")===0&&(r=a[o].substring(8)));!a[0]&&!r.length&&(l+=";charset=US-ASCII",r="US-ASCII");let g=s?"base64":"ascii",x=unescape(e.substring(t+1)),i=Buffer.from(x,g);return i.type=u,i.typeFull=l,i.charset=r,i}b.exports=T});var n={};C(n,{default:()=>E});var A=m(p());f(n,m(p()));var{default:h,...B}=A,E=h!==void 0?h:B;export{E as default};
//# sourceMappingURL=data-uri-to-buffer.mjs.map