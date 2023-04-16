import rest from "./util.js";
import {Routes} from "discord-api-types/v10";

const commands = [];

export default async function unregisterCommands() {
  console.log("%cUnregistering commands...", "color: #5865F2");
  //get all the commands
  const registeredCommands = await rest.get(Routes.applicationCommands(Deno.env.get("DISCORD_CLIENT_ID")));
  //unregister the commands
  for (const command of registeredCommands) {
    console.log(`%cUnregistered command ${command.name}`, "color: #5865F2");
    await rest.delete(Routes.applicationCommand(Deno.env.get("DISCORD_CLIENT_ID"), command.id));
  }
}