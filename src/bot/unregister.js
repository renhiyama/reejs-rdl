export default async function unregisterCommands() {
  // get all commands both global and guild
  let res =
      await fetch(`https://discord.com/api/v10/applications/${
                      Deno.env.get("DISCORD_CLIENT_ID")}/commands`,
                  {
                    headers : {
                      Authorization : `Bot ${Deno.env.get("DISCORD_TOKEN")}`,
                    },
                  });
  let data = await res.json();
  // delete all commands
  for (const command of data) {
    let res = await fetch(
        `https://discord.com/api/v10/applications/${
            Deno.env.get("DISCORD_CLIENT_ID")}/commands/${command.id}`,
        {
          headers : {
            Authorization : `Bot ${Deno.env.get("DISCORD_TOKEN")}`,
          },
          method : "DELETE",
        });
    console.log("%c[DISCORD] %cSuccessfully unregistered command %c" +
                    command.name,
                "color: #5865f2", "color: #ed4245;",
                "color: #ed4245; font-weight: bold;");
    console.log(await res.json());
  }
  let res2 =
      await fetch(`https://discord.com/api/v10/applications/${
                      Deno.env.get("DISCORD_CLIENT_ID")}/guilds/${
                      Deno.env.get("DISCORD_MAIN_GUILD_ID")}/commands`,
                  {
                    headers : {
                      Authorization : `Bot ${Deno.env.get("DISCORD_TOKEN")}`,
                    },
                  });
  let data2 = await res2.json();
  // delete all commands
  for (const command of data2) {
    let res = await fetch(
        `https://discord.com/api/v10/applications/${
            Deno.env.get("DISCORD_CLIENT_ID")}/guilds/${
            Deno.env.get("DISCORD_MAIN_GUILD_ID")}/commands/${command.id}`,
        {
          headers : {
            Authorization : `Bot ${Deno.env.get("DISCORD_TOKEN")}`,
          },
          method : "DELETE",
        });
    console.log("%c[DISCORD] %cSuccessfully unregistered command %c" +
                    command.name,
                "color: #5865f2", "color: #ed4245;",
                "color: #ed4245; font-weight: bold;");
    console.log(await res.json());
  }
}
