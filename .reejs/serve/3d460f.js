import"reejs/src/utils/log.js";import o,{run as c}from"./7fbb77.js";import e,{run as s}from"./8767e5.js";export const commands=[e,o];export const runs=[s,c];export default async function n(){for(const o of commands){console.log(`%c[DISCORD] %cRegistering command %c${o.name}`,"color: #5865f2","color: #fee75c","color: #fee75c;font-weight: bold");await fetch(`https://discord.com/api/v10/applications/${process.env.DISCORD_CLIENT_ID}/commands`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bot ${process.env.DISCORD_TOKEN}`},body:JSON.stringify(o)});console.log(`%c[DISCORD] %cSuccessfully registered command %c${o.name}`,"color: #5865f2","color: #57f287","color: #57f287;font-weight: bold")}}