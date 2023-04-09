var a=(r=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(r,{get:(e,n)=>(typeof require<"u"?require:e)[n]}):r)(function(r){if(typeof require<"u")return require.apply(this,arguments);throw new Error('Dynamic require of "'+r+'" is not supported')});import D from"node:os";import E from"node:path";import S from"node:fs";var F=Object.create,m=Object.defineProperty,A=Object.getOwnPropertyDescriptor,B=Object.getOwnPropertyNames,M=Object.getPrototypeOf,N=Object.prototype.hasOwnProperty,I=(r=>typeof a<"u"?a:typeof Proxy<"u"?new Proxy(r,{get:(e,n)=>(typeof a<"u"?a:e)[n]}):r)(function(r){if(typeof a<"u")return a.apply(this,arguments);throw new Error('Dynamic require of "'+r+'" is not supported')}),b=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports),R=(r,e)=>{for(var n in e)m(r,n,{get:e[n],enumerable:!0})},v=(r,e,n,d)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of B(e))!N.call(r,i)&&i!==n&&m(r,i,{get:()=>e[i],enumerable:!(d=A(e,i))||d.enumerable});return r},C=(r,e,n)=>(v(r,e,"default"),n&&v(n,e,"default")),j=(r,e,n)=>(n=r!=null?F(M(r)):{},v(e||!r||!r.__esModule?m(n,"default",{value:r,enumerable:!0}):n,r)),G=b((r,e)=>{e.exports={name:"dotenv",version:"16.0.3",description:"Loads environment variables from .env file",main:"lib/main.js",types:"lib/main.d.ts",exports:{".":{require:"./lib/main.js",types:"./lib/main.d.ts",default:"./lib/main.js"},"./config":"./config.js","./config.js":"./config.js","./lib/env-options":"./lib/env-options.js","./lib/env-options.js":"./lib/env-options.js","./lib/cli-options":"./lib/cli-options.js","./lib/cli-options.js":"./lib/cli-options.js","./package.json":"./package.json"},scripts:{"dts-check":"tsc --project tests/types/tsconfig.json",lint:"standard","lint-readme":"standard-markdown",pretest:"npm run lint && npm run dts-check",test:"tap tests/*.js --100 -Rspec",prerelease:"npm test",release:"standard-version"},repository:{type:"git",url:"git://github.com/motdotla/dotenv.git"},keywords:["dotenv","env",".env","environment","variables","config","settings"],readmeFilename:"README.md",license:"BSD-2-Clause",devDependencies:{"@types/node":"^17.0.9",decache:"^4.6.1",dtslint:"^3.7.0",sinon:"^12.0.1",standard:"^16.0.4","standard-markdown":"^7.1.0","standard-version":"^9.3.2",tap:"^15.1.6",tar:"^6.1.11",typescript:"^4.5.4"},engines:{node:">=12"}}}),w=b((r,e)=>{var n=S,d=E,i=D,x=G(),$=x.version,k=/(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg;function q(o){let p={},l=o.toString();l=l.replace(/\r\n?/mg,`
`);let c;for(;(c=k.exec(l))!=null;){let f=c[1],t=c[2]||"";t=t.trim();let s=t[0];t=t.replace(/^(['"`])([\s\S]*)\1$/mg,"$2"),s==='"'&&(t=t.replace(/\\n/g,`
`),t=t.replace(/\\r/g,"\r")),p[f]=t}return p}function g(o){console.log(`[dotenv@${$}][DEBUG] ${o}`)}function _(o){return o[0]==="~"?d.join(i.homedir(),o.slice(1)):o}function P(o){let p=d.resolve(process.cwd(),".env"),l="utf8",c=!!(o&&o.debug),f=!!(o&&o.override);o&&(o.path!=null&&(p=_(o.path)),o.encoding!=null&&(l=o.encoding));try{let t=u.parse(n.readFileSync(p,{encoding:l}));return Object.keys(t).forEach(function(s){Object.prototype.hasOwnProperty.call(process.env,s)?(f===!0&&(process.env[s]=t[s]),c&&g(f===!0?`"${s}" is already defined in \`process.env\` and WAS overwritten`:`"${s}" is already defined in \`process.env\` and was NOT overwritten`)):process.env[s]=t[s]}),{parsed:t}}catch(t){return c&&g(`Failed to load ${p} ${t.message}`),{error:t}}}var u={config:P,parse:q};e.exports.config=u.config,e.exports.parse=u.parse,e.exports=u}),O={};R(O,{config:()=>L,default:()=>Q,parse:()=>H});var h=j(w());C(O,j(w()));var{config:L,parse:H}=h,{default:y,...J}=h,Q=y!==void 0?y:J;export{L as config,Q as default,H as parse};
//# sourceMappingURL=dotenv.bundle.mjs.map