import rest from "./util.js";
import {Routes} from "discord-api-types/v10";
//use Deno to read all the files in the commands folder

const commands = [];
const commandFns = [];
for await (const file of Deno.readDir("./commands")) {
  const command = (await import(`./commands/${file.name}`)).default;
  if ('data' in command && 'execute' in command) {
    commands.push(command.data.toJSON());
    commandFns.push(command.execute);
  } else {
    console.log(`%c[WARNING] %cThe command at ${filePath} is missing a required "data" or "execute" property.`,"color: #ED4245", "color: #FFFFFF");
  }
}

export default async function registerCommands() {
//register the commands
console.log("%cRegistering commands...", "color: #5865F2");
await rest.put(
  Routes.applicationCommands(Deno.env.get("DISCORD_CLIENT_ID")), {
    body: commands
  });
console.log("%cSuccessfully registered commands!", "color: #57F287");
}

export {commandFns as runs, commands};