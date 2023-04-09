/**
 * Bundled by jsDelivr using Rollup v2.74.1 and Terser v5.15.1.
 * Original file: /npm/@twind/preset-autoprefix@1.0.7/preset-autoprefix.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
import{cssPropertyAlias as t,cssPropertyPrefixFlags as e,cssValuePrefixFlags as r}from"./d18365.js";let i=[["-webkit-",1],["-moz-",2],["-ms-",4]];function n(){return({stringify:n})=>({stringify(o,f,l){let m="",s=t(o);s&&(m+=n(s,f,l)+";");let u=e(o),p=r(o,f);for(let t of i)u&t[1]&&(m+=n(t[0]+o,f,l)+";"),p&t[1]&&(m+=n(o,t[0]+f,l)+";");return m+n(o,f,l)}})}export{n as default};
//# sourceMappingURL=/sm/57651b485637f756927120806fb5e37b52df7e187fc781252e989a950459aed6.map