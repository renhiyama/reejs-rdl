/* esm.sh - esbuild bundle(discord-oauth2@2.11.0) deno production */
import __1$ from "./9ad484.js";import __2$ from "./1afae1.js";import __3$ from "./34fc99.js";var re=Object.create;var C=Object.defineProperty;var ae=Object.getOwnPropertyDescriptor;var ne=Object.getOwnPropertyNames;var le=Object.getPrototypeOf,ce=Object.prototype.hasOwnProperty;var j=(n=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(n,{get:(e,t)=>(typeof require<"u"?require:e)[t]}):n)(function(n){if(typeof require<"u")return require.apply(this,arguments);throw new Error('Dynamic require of "'+n+'" is not supported')});var y=(n,e)=>()=>(e||n((e={exports:{}}).exports,e),e.exports),oe=(n,e)=>{for(var t in e)C(n,t,{get:e[t],enumerable:!0})},v=(n,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of ne(e))!ce.call(n,r)&&r!==t&&C(n,r,{get:()=>e[r],enumerable:!(i=ae(e,r))||i.enumerable});return n},$=(n,e,t)=>(v(n,e,"default"),t&&v(t,e,"default")),N=(n,e,t)=>(t=n!=null?re(le(n)):{},v(e||!n||!n.__esModule?C(t,"default",{value:n,enumerable:!0}):t,n));var U=y((we,Q)=>{"use strict";var T=class extends Error{constructor(e,t,i,r){super(),Object.defineProperty(this,"req",{enumerable:!1,value:e,writable:!1}),Object.defineProperty(this,"res",{enumerable:!1,value:t,writable:!1}),Object.defineProperty(this,"response",{enumerable:!1,value:i,writable:!1}),Object.defineProperty(this,"code",{value:t.statusCode,writable:!1});let l=`${this.name}: ${t.statusCode} ${t.statusMessage} on ${e.method} ${e.path}`,g=this.flattenErrors(i);g.length>0&&(l+=`
  `+g.join(`
  `)),Object.defineProperty(this,"message",{value:l,writable:!1}),r?Object.defineProperty(this,"stack",{value:this.message+`
`+r,writable:!1}):Error.captureStackTrace(this,T)}get name(){return this.constructor.name}flattenErrors(e,t=""){let i=[];for(let r in e)!e.hasOwnProperty(r)||r==="message"||r==="code"||Array.isArray(e[r])&&(i=i.concat(e[r].map(l=>`${t+r}: ${l}`)));return i}};Q.exports=T});var P=y((qe,J)=>{"use strict";var k=class extends Error{constructor(e,t,i,r){super(),Object.defineProperty(this,"req",{enumerable:!1,value:e,writable:!1}),Object.defineProperty(this,"res",{enumerable:!1,value:t,writable:!1}),Object.defineProperty(this,"response",{enumerable:!1,value:i,writable:!1}),Object.defineProperty(this,"code",{value:+i.code||-1,writable:!1});let l=this.name+": "+(i.message||"Unknown error");if(i.errors)l+=`
  `+this.flattenErrors(i.errors).join(`
  `);else{let g=this.flattenErrors(i);g.length>0&&(l+=`
  `+g.join(`
  `))}Object.defineProperty(this,"message",{value:l,writable:!1}),r?Object.defineProperty(this,"stack",{value:this.message+`
`+r,writable:!1}):Error.captureStackTrace(this,k)}get name(){return`${this.constructor.name} [${this.code}]`}flattenErrors(e,t=""){let i=[];for(let r in e)!e.hasOwnProperty(r)||r==="message"||r==="code"||(e[r]._errors?i=i.concat(e[r]._errors.map(l=>`${t+r}: ${l.message}`)):Array.isArray(e[r])?i=i.concat(e[r].map(l=>`${t+r}: ${l}`)):typeof e[r]=="object"&&(i=i.concat(this.flattenErrors(e[r],t+r+"."))));return i}};J.exports=k});var F=y((Te,H)=>{"use strict";var A=class{constructor(e,t={latency:0}){this.limit=this.remaining=e,this.resetInterval=0,this.reset=0,this.processing=!1,this.latencyRef=t,this._queue=[]}queue(e,t){t?this._queue.unshift(e):this._queue.push(e),this.check()}check(e){if(this._queue.length===0){this.processing&&(clearTimeout(this.processing),this.processing=!1);return}if(this.processing&&!e)return;let t=Date.now(),i=this.latencyRef.latency+(this.latencyRef.offset||0);if(this.reset?this.reset<t-i&&(this.reset=t-i+(this.resetInterval||0),this.remaining=this.limit):(this.reset=t-i,this.remaining=this.limit),this.last=t,this.remaining<=0){this.processing=setTimeout(()=>{this.processing=!1,this.check(!0)},Math.max(0,(this.reset||0)-t)+i);return}--this.remaining,this.processing=!0,this._queue.shift()(()=>{this._queue.length>0?this.check(!0):this.processing=!1})}};H.exports=A});var W=y((ke,he)=>{he.exports={name:"discord-oauth2",version:"2.11.0",description:"Easily interact with discord's oauth2 API",main:"index.js",scripts:{lint:"prettier-eslint ./**/*.js --list-different",fix:"prettier-eslint ./**/*.js --write"},repository:{type:"git",url:"git+https://github.com/reboxer/discord-oauth2.git"},keywords:["api","discord","discordapp","oauth2"],author:"reboxer",license:"MIT",bugs:{url:"https://github.com/reboxer/discord-oauth2/issues"},homepage:"https://github.com/reboxer/discord-oauth2#readme",devDependencies:{eslint:"^8.30.0","prettier-eslint-cli":"^7.1.0"}}});var V=y((xe,K)=>{"use strict";var ue=U(),de=P(),fe=__1$,Y=F(),Z=__3$,me=__2$,I=class extends me{constructor(e){super(),this.options=e=Object.assign({agent:null,baseURL:"/api/v9",domain:"discord.com",disableLatencyCompensation:!1,latencyThreshold:3e4,ratelimiterOffset:0,requestTimeout:15e3},e),this.userAgent=`Discord-OAuth2 (https://github.com/reboxer/discord-oauth2, ${W().version})`,this.ratelimits={},this.latencyRef={latency:this.options.ratelimiterOffset,raw:new Array(10).fill(this.options.ratelimiterOffset),timeOffset:0,timeOffsets:new Array(10).fill(0),lastTimeOffsetCheck:0},this.globalBlock=!1,this.readyQueue=[]}globalUnblock(){for(this.globalBlock=!1;this.readyQueue.length>0;)this.readyQueue.shift()()}routefy(e){return e.replace(/\/([a-z-]+)\/(?:[0-9]{17,19})/g,function(t,i){return i==="guilds"?t:`/${i}/:id`})}request(e,t,i,{auth:r,contentType:l,attempts:g=0},se,G){let a=se||this.routefy(t,e),M={};return Error.captureStackTrace(M),new Promise((x,f)=>{let z=m=>{let L={"User-Agent":this.userAgent,"Accept-Encoding":"gzip,deflate",...l?{"Content-Type":l}:{}},O;try{r&&(L.Authorization=`${r.type} ${r.creds}`),l==="application/json"?O=JSON.stringify(i,(s,w)=>typeof w=="bigint"?w.toString():w):O=i}catch(s){m(),f(s);return}let o;try{o=fe.request({method:e,host:this.options.domain,path:this.options.baseURL+t,headers:L,agent:this.options.agent})}catch(s){m(),f(s);return}let u;o.once("abort",()=>{m(),u=u||new Error(`Request aborted by client on ${e} ${t}`),u.req=o,f(u)}).once("error",s=>{u=s,o.abort()});let p=Date.now();o.once("response",s=>{p=Date.now()-p,this.options.disableLatencyCompensation||(this.latencyRef.raw.push(p),this.latencyRef.latency=this.latencyRef.latency-~~(this.latencyRef.raw.shift()/10)+~~(p/10));let w=Date.parse(s.headers.date);if(this.latencyRef.lastTimeOffsetCheck<Date.now()-5e3){let c=w+500-(this.latencyRef.lastTimeOffsetCheck=Date.now());this.latencyRef.timeOffset-this.latencyRef.latency>=this.options.latencyThreshold&&c-this.latencyRef.latency>=this.options.latencyThreshold&&this.emit("warn",new Error(`Your clock is ${this.latencyRef.timeOffset}ms behind Discord's server clock. Please check your connection and system time.`)),this.latencyRef.timeOffset=this.latencyRef.timeOffset-~~(this.latencyRef.timeOffsets.shift()/10)+~~(c/10),this.latencyRef.timeOffsets.push(c)}s.once("aborted",()=>{m(),u=u||new Error(`Request aborted by server on ${e} ${t}`),u.req=o,f(u)});let h="",_=s;s.headers["content-encoding"]&&(s.headers["content-encoding"].includes("gzip")?_=s.pipe(Z.createGunzip()):s.headers["content-encoding"].includes("deflate")&&(_=s.pipe(Z.createInflate()))),_.on("data",c=>{h+=c}).on("error",c=>{u=c,o.abort()}).once("end",()=>{let c=Date.now();s.headers["x-ratelimit-limit"]&&(this.ratelimits[a].limit=+s.headers["x-ratelimit-limit"]),e!=="GET"&&(s.headers["x-ratelimit-remaining"]===void 0||s.headers["x-ratelimit-limit"]===void 0)&&this.ratelimits[a].limit!==1&&this.emit("debug",`Missing ratelimit headers for SequentialBucket(${this.ratelimits[a].remaining}/${this.ratelimits[a].limit}) with non-default limit
${s.statusCode} ${s.headers["content-type"]}: ${e} ${a} | ${s.headers["cf-ray"]}
content-type = 
x-ratelimit-remaining = `+s.headers["x-ratelimit-remaining"]+`
x-ratelimit-limit = `+s.headers["x-ratelimit-limit"]+`
x-ratelimit-reset = `+s.headers["x-ratelimit-reset"]+`
x-ratelimit-global = `+s.headers["x-ratelimit-global"]),this.ratelimits[a].remaining=s.headers["x-ratelimit-remaining"]===void 0?1:+s.headers["x-ratelimit-remaining"]||0;let q=parseInt(s.headers["x-ratelimit-reset-after"]||s.headers["retry-after"])*1e3;if(q>=0)s.headers["x-ratelimit-global"]?(this.globalBlock=!0,setTimeout(()=>this.globalUnblock(),q||1)):this.ratelimits[a].reset=(q||1)+c;else if(s.headers["x-ratelimit-reset"]){let d=+s.headers["x-ratelimit-reset"]*1e3;this.ratelimits[a].reset=Math.max(d-this.latencyRef.latency,c)}else this.ratelimits[a].reset=c;if(s.statusCode!==429){let d=typeof i=="object"?`${i.content} `:"";this.emit("debug",`${d}${c} ${a} ${s.statusCode}: ${p}ms (${this.latencyRef.latency}ms avg) | ${this.ratelimits[a].remaining}/${this.ratelimits[a].limit} left | Reset ${this.ratelimits[a].reset} (${this.ratelimits[a].reset-c}ms left)`)}if(s.statusCode>=300){if(s.statusCode===429){let E=typeof i=="object"?`${i.content} `:"";if(this.emit("debug",`${s.headers["x-ratelimit-global"]?"Global":"Unexpected"} 429 (\u256F\xB0\u25A1\xB0\uFF09\u256F\uFE35 \u253B\u2501\u253B: ${h}
${E} ${c} ${a} ${s.statusCode}: ${p}ms (${this.latencyRef.latency}ms avg) | ${this.ratelimits[a].remaining}/${this.ratelimits[a].limit} left | Reset ${this.ratelimits[a].reset} (${this.ratelimits[a].reset-c}ms left)`),q){setTimeout(()=>{m(),this.request(e,t,i,{auth:r,contentType:l},a,!0).then(x).catch(f)},q);return}else{m(),this.request(e,t,i,{auth:r,contentType:l},a,!0).then(x).catch(f);return}}else if(s.statusCode===502&&++g<4)return this.emit("debug","A wild 502 appeared! Thanks CloudFlare!"),setTimeout(()=>{this.request(e,t,i,{auth:r,contentType:l,attempts:g},a,!0).then(x).catch(f)},Math.floor(Math.random()*1900+100)),m();if(m(),h.length>0&&s.headers["content-type"]==="application/json")try{h=JSON.parse(h)}catch(E){f(E);return}let{stack:d}=M;d.startsWith(`Error
`)&&(d=d.substring(6));let R;h.code?R=new de(o,s,h,d):R=new ue(o,s,h,d),f(R);return}if(h.length>0&&s.headers["content-type"]==="application/json")try{h=JSON.parse(h)}catch(d){m(),f(d);return}m(),x(h)})}),o.setTimeout(this.options.requestTimeout,()=>{u=new Error(`Request timed out (>${this.options.requestTimeout}ms) on ${e} ${t}`),o.abort()}),o.end(O)};this.globalBlock&&r?this.readyQueue.push(()=>{this.ratelimits[a]||(this.ratelimits[a]=new Y(1,this.latencyRef)),this.ratelimits[a].queue(z,G)}):(this.ratelimits[a]||(this.ratelimits[a]=new Y(1,this.latencyRef)),this.ratelimits[a].queue(z,G))})}};K.exports=I});var ee=y((Oe,X)=>{"use strict";var ge=V(),S=class extends ge{constructor(e={}){super({...e.agent?{agent:e.agent}:{},...e.requestTimeout?{requestTimeout:e.requestTimeout}:{},...e.latencyThreshold?{latencyThreshold:e.latencyThreshold}:{},...e.ratelimiterOffset?{ratelimiterOffset:e.ratelimiterOffset}:{},...e.disableLatencyCompensation?{disableLatencyCompensation:e.disableLatencyCompensation}:{}}),this.clientId=e.clientId,this.clientSecret=e.clientSecret,this.redirectUri=e.redirectUri,this.credentials=e.credentials}_encode(e){let t="";for(let[i,r]of Object.entries(e))r&&(t+=`&${encodeURIComponent(i)}=${encodeURIComponent(r)}`);return t.substring(1)}tokenRequest(e={}){let t={client_id:e.clientId||this.clientId,client_secret:e.clientSecret||this.clientSecret,grant_type:void 0,code:void 0,refresh_token:void 0,redirect_uri:e.redirectUri||this.redirectUri,scope:e.scope instanceof Array?e.scope.join(" "):e.scope};if(e.grantType==="authorization_code")t.code=e.code,t.grant_type=e.grantType;else if(e.grantType==="refresh_token")t.refresh_token=e.refreshToken,t.grant_type=e.grantType;else throw new Error("Invalid grant_type provided, it must be either authorization_code or refresh_token");let i=this._encode(t);return this.request("POST","/oauth2/token",i,{contentType:"application/x-www-form-urlencoded"})}revokeToken(e,t){if(!t&&!this.credentials)throw new Error("Missing credentials for revokeToken method");return this.request("POST","/oauth2/token/revoke",`token=${e}`,{auth:{type:"Basic",creds:t||this.credentials},contentType:"application/x-www-form-urlencoded"})}getUser(e){return this.request("GET","/users/@me",void 0,{auth:{type:"Bearer",creds:e}})}getUserGuilds(e){return this.request("GET","/users/@me/guilds",void 0,{auth:{type:"Bearer",creds:e}})}getUserConnections(e){return this.request("GET","/users/@me/connections",void 0,{auth:{type:"Bearer",creds:e}})}addMember(e){return this.request("PUT",`/guilds/${e.guildId}/members/${e.userId}`,{deaf:e.deaf,mute:e.mute,nick:e.nickname,roles:e.roles,access_token:e.accessToken},{auth:{type:"Bot",creds:e.botToken},contentType:"application/json"})}getGuildMember(e,t){return this.request("GET",`/users/@me/guilds/${t}/member`,void 0,{auth:{type:"Bearer",creds:e}})}generateAuthUrl(e={}){let t={client_id:e.clientId||this.clientId,prompt:e.prompt,redirect_uri:e.redirectUri||this.redirectUri,response_type:e.responseType||"code",scope:e.scope instanceof Array?e.scope.join(" "):e.scope,permissions:e.permissions,guild_id:e.guildId,disable_guild_select:e.disableGuildSelect,state:e.state};return`https://discord.com/oauth2/authorize?${this._encode(t)}`}};X.exports=S});var D=y((_e,te)=>{"use strict";var B=ee();B.DiscordHTTPError=U();B.DiscordRESTError=P();te.exports=B});var b={};oe(b,{default:()=>pe});var ye=N(D());$(b,N(D()));var{default:ie,...be}=ye,pe=ie!==void 0?ie:be;export{pe as default};
//# sourceMappingURL=discord-oauth2.bundle.mjs.map