import{InteractionResponseType as e,InteractionType as o}from"https://esm.sh/discord-interactions@3.3.0?bundle";import r from"https://esm.sh/tweetnacl@1.0.3?bundle";import{commands as t,runs as n}from"../../src/bot/register.js";export default async function c(c){try{const s=await c.req.text(),a=JSON.parse(s),i=c.req.header("x-signature-ed25519")||"",f=c.req.header("x-signature-timestamp")||"";if(!r.sign.detached.verify(Buffer.from(f+s),Buffer.from(i,"hex"),Buffer.from(process.env.DISCORD_PUBLIC_KEY,"hex")))return c.status(401),c.send("invalid request signature");if(a.type===o.PING)return console.log("%c[DISCORD] %cReceived %cPING","color: #5865f2","color: #fee75c","color: #fee75c;font-weight: bold"),c.json({type:e.PONG});if(a.type===o.APPLICATION_COMMAND){let e=t.find((e=>e.name.toLowerCase()===a.data.name.toLowerCase()));if(!e)return console.log("%c[DISCORD] %cCommand ran: %cUNKNOWN","color: #5865f2","color: #ed4245;","color: #ed4245; font-weight: bold;"),c.status(400),c.json({error:"Unknown type"});console.log("%c[DISCORD] %cReceived Command: %c"+e.name,"color: #5865f2","color: #57f287;","color: #57f287;font-weight: bold;");let o=t.indexOf(e),r=await n[o](c,a),s=r.clone();return console.log(await s.json()),r}return c.json({msg:"Hello World!"})}catch(e){return c.status(401),c.send("invalid request signature")}}export const method="POST";