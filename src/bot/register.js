import eureka, {run as eureka_run} from "./commands/eureka.js";
import ping, {run as ping_run} from "./commands/ping.js";

export const commands = [ ping, eureka ];
export const runs = [ ping_run, eureka_run ];
export default async function registerCommands() {
  for (const command of commands) {
    console.log(`%c[DISCORD] %cRegistering command %c${command.name}`,
                "color: #5865f2", "color: #fee75c",
                "color: #fee75c;font-weight: bold");
    let res =
        await fetch(`https://discord.com/api/v10/applications/${
                        process.env.DISCORD_CLIENT_ID}/commands`,
                    {
                      method : "POST",
                      headers : {
                        "Content-Type" : "application/json",
                        Authorization : `Bot ${process.env.DISCORD_TOKEN}`,
                      },
                      body : JSON.stringify(command),
                    });
    console.log(
        `%c[DISCORD] %cSuccessfully registered command %c${command.name}`,
        "color: #5865f2", "color: #57f287", "color: #57f287;font-weight: bold");
  }
}
