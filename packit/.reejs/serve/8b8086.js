import o,{run as n}from"./bae5b4.js";import c,{run as e}from"./239481.js";export const commands=[c,o];export const runs=[e,n];export default async function t(){for(const o of commands){console.log(`%c[DISCORD] %cRegistering command %c${o.name}`,"color: #5865f2","color: #fee75c","color: #fee75c;font-weight: bold");let n=await fetch(`https://discord.com/api/v10/applications/${Deno.env.get("DISCORD_CLIENT_ID")}/commands`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bot ${Deno.env.get("DISCORD_TOKEN")}`},body:JSON.stringify(o)});console.log(`%c[DISCORD] %cSuccessfully registered command %c${o.name}`,"color: #5865f2","color: #57f287","color: #57f287;font-weight: bold"),console.log(JSON.stringify(await n.json()))}}