import{InteractionResponseType as e,InteractionType as o}from"https://esm.sh/discord-interactions@3.3.0?bundle";import{Buffer as t}from"https://deno.land/std@0.110.0/node/buffer.ts";import r from"https://esm.sh/tweetnacl@1.0.3?bundle";import{commands as n,runs as c}from"./3d460f.js";export default async function a(a){try{const i=await a.req.text(),s=JSON.parse(i);console.log(s);const l=a.req.header("x-signature-ed25519")||"",d=a.req.header("x-signature-timestamp")||"";if(!r.sign.detached.verify(t.from(d+i),t.from(l,"hex"),t.from(Deno.env.get("DISCORD_PUBLIC_KEY"),"hex")))return a.status(401),a.text("invalid request signature");if(s.type===o.PING)return console.log("%c[DISCORD] %cReceived %cPING","color: #5865f2","color: #fee75c","color: #fee75c;font-weight: bold"),a.json({type:e.PONG});if(s.type===o.APPLICATION_COMMAND){let e=n.find((e=>e.name.toLowerCase()===s.data.name.toLowerCase()));if(!e)return console.log("%c[DISCORD] %cCommand ran: %cUNKNOWN","color: #5865f2","color: #ed4245;","color: #ed4245; font-weight: bold;"),a.status(400),a.json({error:"Unknown type"});console.log("%c[DISCORD] %cReceived Command: %c"+e.name,"color: #5865f2","color: #57f287;","color: #57f287;font-weight: bold;");let o=n.indexOf(e),t=await c[o](a,s),r=t.clone();return console.log(await r.json()),t}return a.text("unknown interaction type")}catch(e){return console.log("invalid!!"),console.log(e),a.status(401),a.text("invalid request signature")}}export const method="POST";