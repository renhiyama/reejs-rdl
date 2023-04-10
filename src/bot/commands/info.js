export default {
  name: "info",
  type: 1,
  description: "Get info about any bot on RDL",
  options:
      [
        {
          name : "bot",
          description : "The bot whose you want to get",
          type : 6,
          required : true,
        },
      ],
};
export async function run(c, msg) {
  let r = await fetch(
      `https://discord.rovelstars.com/api/bots/${msg.data.options[0].value}`);
  let data = await r.json();
  if (data.err) {
    return c.json({
      type : 4,
      data : {
        content : data.err.split("_")
                      .map((s) => s[0].toUpperCase() + s.slice(1))
                      .join(" "),
      },
    });
  }
  let embed = {
    title : data.username + "#" + data.discriminator,
    color : "#5865F2",
    thumbnail : {
      url : `https://cdn.discordapp.com/avatars/${data.id}/${data.avatar}.png`,
    },
    fields : [
      {
        name : "Prefix",
        value : data.prefix,
        inline : true,
      },
      {
        name : "Owner(s)",
        value : data.owners.map((o) => `<@!${o}>`).join(", "),
        inline : true,
      },
      {
        name : "Info",
        value : data.short,
        inline : true,
      },
      {
        name : "Servers",
        value : data.servers,
        inline : true,
      },
      {
        name : "Vote System Used",
        value : data.opted_coins ? "Uses R$" : "Based on cooldown",
        inline : true,
      },
    ],
  };
  return c.json({
    type : 4,
    data : {
      content : "Here's the info I got:",
      embeds : [ embed ],
    },
  });
}
