import o from"./4ed9e2.js";import{Routes as e}from"https://deno.land/x/discord_api_types/v10.ts";const t=[],a=[];for await(const s of Deno.readDir("./commands")){const n=(await import(`./commands/${s.name}`)).default;"data"in n&&"execute"in n?(t.push(n.data.toJSON()),a.push(n.execute)):console.log(`%c[WARNING] %cThe command at ${filePath} is missing a required "data" or "execute" property.`,"color: #ED4245","color: #FFFFFF")}export default async function c(){console.log("%cRegistering commands...","color: #5865F2"),await o.put(e.applicationCommands(Deno.env.get("DISCORD_CLIENT_ID")),{body:t}),console.log("%cSuccessfully registered commands!","color: #57F287")}export{a as runs,t as commands};