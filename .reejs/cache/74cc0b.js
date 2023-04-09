/* esm.sh - esbuild bundle(discord-interactions@3.3.0) deno production */
import  { Buffer as __Buffer$ } from "./36b370.js";import * as _1$ from "./b24a18.js";const __1$ = _1$.default??_1$;var s=Object.create;var L=Object.defineProperty;var v=Object.getOwnPropertyDescriptor;var h=Object.getOwnPropertyNames;var H=Object.getPrototypeOf,g=Object.prototype.hasOwnProperty;var y=(r=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(r,{get:(t,i)=>(typeof require<"u"?require:t)[i]}):r)(function(r){if(typeof require<"u")return require.apply(this,arguments);throw new Error('Dynamic require of "'+r+'" is not supported')});var I=(r,t)=>()=>(t||r((t={exports:{}}).exports,t),t.exports),m=(r,t)=>{for(var i in t)L(r,i,{get:t[i],enumerable:!0})},S=(r,t,i,f)=>{if(t&&typeof t=="object"||typeof t=="function")for(let _ of h(t))!g.call(r,_)&&_!==i&&L(r,_,{get:()=>t[_],enumerable:!(f=v(t,_))||f.enumerable});return r},A=(r,t,i)=>(S(r,t,"default"),i&&S(i,t,"default")),G=(r,t,i)=>(i=r!=null?s(H(r)):{},S(t||!r||!r.__esModule?L(i,"default",{value:r,enumerable:!0}):i,r));var T=I(u=>{"use strict";Object.defineProperty(u,"__esModule",{value:!0});u.TextStyleTypes=u.ButtonStyleTypes=u.MessageComponentTypes=void 0;var U;(function(r){r[r.ACTION_ROW=1]="ACTION_ROW",r[r.BUTTON=2]="BUTTON",r[r.STRING_SELECT=3]="STRING_SELECT",r[r.INPUT_TEXT=4]="INPUT_TEXT",r[r.USER_SELECT=5]="USER_SELECT",r[r.ROLE_SELECT=6]="ROLE_SELECT",r[r.MENTIONABLE_SELECT=7]="MENTIONABLE_SELECT",r[r.CHANNEL_SELECT=8]="CHANNEL_SELECT"})(U||(U={}));u.MessageComponentTypes=U;var D;(function(r){r[r.PRIMARY=1]="PRIMARY",r[r.SECONDARY=2]="SECONDARY",r[r.SUCCESS=3]="SUCCESS",r[r.DANGER=4]="DANGER",r[r.LINK=5]="LINK"})(D||(D={}));u.ButtonStyleTypes=D;var C;(function(r){r[r.DM=1]="DM",r[r.GROUP_DM=3]="GROUP_DM",r[r.GUILD_TEXT=0]="GUILD_TEXT",r[r.GUILD_VOICE=2]="GUILD_VOICE",r[r.GUILD_CATEGORY=4]="GUILD_CATEGORY",r[r.GUILD_ANNOUNCEMENT=5]="GUILD_ANNOUNCEMENT",r[r.GUILD_STORE=6]="GUILD_STORE"})(C||(C={}));var M;(function(r){r[r.SHORT=1]="SHORT",r[r.PARAGRAPH=2]="PARAGRAPH"})(M||(M={}));u.TextStyleTypes=M});var R=I(E=>{"use strict";var B=E&&E.__createBinding||(Object.create?function(r,t,i,f){f===void 0&&(f=i),Object.defineProperty(r,f,{enumerable:!0,get:function(){return t[i]}})}:function(r,t,i,f){f===void 0&&(f=i),r[f]=t[i]}),K=E&&E.__exportStar||function(r,t){for(var i in r)i!=="default"&&!Object.prototype.hasOwnProperty.call(t,i)&&B(t,r,i)},x=E&&E.__importDefault||function(r){return r&&r.__esModule?r:{default:r}};Object.defineProperty(E,"__esModule",{value:!0});E.verifyKeyMiddleware=E.verifyKey=E.InteractionResponseFlags=E.InteractionResponseType=E.InteractionType=void 0;var F=x(__1$),c;(function(r){r[r.PING=1]="PING",r[r.APPLICATION_COMMAND=2]="APPLICATION_COMMAND",r[r.MESSAGE_COMPONENT=3]="MESSAGE_COMPONENT",r[r.APPLICATION_COMMAND_AUTOCOMPLETE=4]="APPLICATION_COMMAND_AUTOCOMPLETE",r[r.MODAL_SUBMIT=5]="MODAL_SUBMIT"})(c||(c={}));E.InteractionType=c;var a;(function(r){r[r.PONG=1]="PONG",r[r.CHANNEL_MESSAGE_WITH_SOURCE=4]="CHANNEL_MESSAGE_WITH_SOURCE",r[r.DEFERRED_CHANNEL_MESSAGE_WITH_SOURCE=5]="DEFERRED_CHANNEL_MESSAGE_WITH_SOURCE",r[r.DEFERRED_UPDATE_MESSAGE=6]="DEFERRED_UPDATE_MESSAGE",r[r.UPDATE_MESSAGE=7]="UPDATE_MESSAGE",r[r.APPLICATION_COMMAND_AUTOCOMPLETE_RESULT=8]="APPLICATION_COMMAND_AUTOCOMPLETE_RESULT",r[r.MODAL=9]="MODAL"})(a||(a={}));E.InteractionResponseType=a;var P;(function(r){r[r.EPHEMERAL=64]="EPHEMERAL"})(P||(P={}));E.InteractionResponseFlags=P;function O(r,t){if(r==null)return new Uint8Array;if(typeof r=="string")if(t==="hex"){let i=r.match(/.{1,2}/g);if(i==null)throw new Error("Value is not a valid hex string");let f=i.map(_=>parseInt(_,16));return new Uint8Array(f)}else return new TextEncoder().encode(r);try{if(__Buffer$.isBuffer(r))return new Uint8Array(r)}catch{}if(r instanceof ArrayBuffer)return new Uint8Array(r);if(r instanceof Uint8Array)return r;throw new Error("Unrecognized value type, must be one of: string, Buffer, ArrayBuffer, Uint8Array")}function W(r,t){let i=new Uint8Array(r.length+t.length);return i.set(r),i.set(t,r.length),i}function l(r,t,i,f){try{let _=O(i),N=O(r),o=W(_,N),d=O(t,"hex"),n=O(f,"hex");return F.default.sign.detached.verify(o,d,n)}catch(_){return console.error("[discord-interactions]: Invalid verifyKey parameters",_),!1}}E.verifyKey=l;function Y(r){if(!r)throw new Error("You must specify a Discord client public key");return function(t,i,f){let _=t.header("X-Signature-Timestamp")||"",N=t.header("X-Signature-Ed25519")||"";function o(d){if(!l(d,N,_,r)){i.statusCode=401,i.end("[discord-interactions] Invalid signature");return}let n=JSON.parse(d.toString("utf-8"))||{};if(n.type===c.PING){i.setHeader("Content-Type","application/json"),i.end(JSON.stringify({type:a.PONG}));return}t.body=n,f()}if(t.body)__Buffer$.isBuffer(t.body)?o(t.body):typeof t.body=="string"?o(__Buffer$.from(t.body,"utf-8")):(console.warn("[discord-interactions]: req.body was tampered with, probably by some other middleware. We recommend disabling middleware for interaction routes so that req.body is a raw buffer."),o(__Buffer$.from(JSON.stringify(t.body),"utf-8")));else{let d=[];t.on("data",n=>{d.push(n)}),t.on("end",()=>{let n=__Buffer$.concat(d);o(n)})}}}E.verifyKeyMiddleware=Y;K(T(),E)});var e={};m(e,{ButtonStyleTypes:()=>$,InteractionResponseFlags:()=>J,InteractionResponseType:()=>z,InteractionType:()=>Q,MessageComponentTypes:()=>k,TextStyleTypes:()=>Z,__esModule:()=>j,default:()=>p,verifyKey:()=>V,verifyKeyMiddleware:()=>X});var w=G(R());A(e,G(R()));var j=!0,{verifyKeyMiddleware:X,verifyKey:V,InteractionResponseFlags:J,InteractionResponseType:z,InteractionType:Q,TextStyleTypes:Z,ButtonStyleTypes:$,MessageComponentTypes:k}=w,{default:b,...q}=w,p=b!==void 0?b:q;export{$ as ButtonStyleTypes,J as InteractionResponseFlags,z as InteractionResponseType,Q as InteractionType,k as MessageComponentTypes,Z as TextStyleTypes,j as __esModule,p as default,V as verifyKey,X as verifyKeyMiddleware};
//# sourceMappingURL=discord-interactions.bundle.mjs.map