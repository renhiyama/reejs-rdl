/* esm.sh - esbuild bundle(hono@3.1.5/utils/filepath) deno production */
var r=a=>{let e=a.filename,t=a.root||"",c=a.defaultDocument||"index.html";e.endsWith("/")?e=e.concat(c):e.match(/\.[a-zA-Z0-9]+$/)||(e=e.concat("/"+c)),e=e.replace(/^\.?\//,""),t=t.replace(/\/$/,"");let l=t?t+"/"+e:e;return l=l.replace(/^\.?\//,""),l};export{r as getFilePath};
//# sourceMappingURL=filepath.js.map