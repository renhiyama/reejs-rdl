import o from"./4ed9e2.js";import{Routes as e}from"https://esm.sh/discord-api-types/v10?bundle";export default async function n(){console.log("%cUnregistering commands...","color: #5865F2");const n=await o.get(e.applicationCommands(Deno.env.get("DISCORD_CLIENT_ID")));for(const t of n)console.log(`%cUnregistered command ${t.name}`,"color: #5865F2"),await o.delete(e.applicationCommand(Deno.env.get("DISCORD_CLIENT_ID"),t.id))}