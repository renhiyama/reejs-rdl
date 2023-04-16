import {REST} from "@discordjs/rest";

const rest = new REST({version: "10"}).setToken(Deno.env.get("DISCORD_TOKEN"));

export default rest;