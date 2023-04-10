export default {
  name: "ping",
  type: 4,
  description: "Ping the bot",
};
export async function run(c, msg) {
  let data = {
    type : 4,
    data : {
      content : "Pong!",
    },
  };
  let r =
      await fetch(`https://discord.com/api/v10/interactions/${msg.id}/${
                      msg.token}/callback`,
                  {
                    method : "POST",
                    headers : {
                      "Content-Type" : "application/json",
                      "Authorization" : `Bot ${Deno.env.get("DISCORD_TOKEN")}`,
                    },
                    body : JSON.stringify(data),
                  });
  console.log(await r.text());
  return c.json(data);
}
