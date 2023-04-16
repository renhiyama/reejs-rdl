import db from "../../db/index";
export default {
  name: "info",
  description: "Get info from RDL",
  options:
    [
      {
        name: "bot",
        description: "Get info about bot",
        type: 1,
        options: [
          {
            name: "id",
            description: "The bot's ID",
            type: 6,
            required: true,
          },
        ],
      },
      {
        name: "user",
        description: "Get info about user",
        type: 1,
        options: [
          {
            name: "id",
            description: "The user's ID (default: you)",
            type: 6,
          },
        ],
      }
    ]
};
export async function run(c, msg) {
  let type = msg.data.options[0].name;
  let id = Object.keys(msg.data.resolved.members)[0] || msg.member.user.id;
  if (type == "bot") {
    let bots = await db.query(`SELECT * FROM bots WHERE botID = $id`, { id });
    let bot = bots[0].result[0];
    if (!bot) {
      return c.json({ type: 4, data: { content: "Bot not found" } });
    }
    let data = {
      type: 4,
      data: {
        embeds: [{
          title: bot.tag,
          description: bot.desc,
          color: 0x5865f2,
          thumbnail: { url: bot.avatarURL },
          fields: [
            { name: "Prefix", value: bot.prefix || "<Not Disclosed>", inline: true },
            { name: "Servers", value: bot.servers || "<Not Disclosed>", inline: true },
            {
              name: "Owner", value: bot.owners.map(owner => `<@!${owner}>`).join(", "), inline: true
            }, {
              name: "Library",
              value: bot.library || "<Not Disclosed>", inline: true
            },
            {
              name: "Invite",
              value: `[Click Here for No-Perm Invite](https://discord.com/oauth2/authorize?client_id=${bot.id}&scope=bot&permissions=0)\n[Click Here for Original Invite](${bot.invite})`, inline: true
            },
            {
              name: "Support Server",
              value: bot.support || "<Not Disclosed>", inline: true
            },
            {
              name: "Vote",
              value: `[Click Here to Vote - ${bot.opted_coins
                  ? "Uses R$"
                  : "Based on Cooldown"}](https://discord.rovelstars.com/bots/${bot.id}/vote)`, inline: true
            }
          ]
        }]
      }
    };
    let res = await fetch(`https://discord.com/api/v10/interactions/${msg.id}/${msg.token}/callback`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bot ${Deno.env.get("TOKEN")}`
      },
      body: JSON.stringify(data)
    });
    res = await res.json();
    console.log(res);

  } else if (type == "user") {
    console.log(Users);
    let user = await Users.findOne({ id });
    let ownedBots = await Bots.find({ owners: { $in: [id] } });
    let ownedBotsString =
      ownedBots.length ? ownedBots.map(bot => bot.tag).join(", ") : "No Bots";
    console.log(user);
    console.log(ownedBots);
    if (!user) {
      return c.json(
        { type: 4, data: { content: "User not found", flags: 64 } });
    }
    return c.json({
      type: 4,
      data: {
        embeds: [{
          title: user.tag,
          description: user.bio,
          color: 0x5865f2,
          thumbnail: { url: user.avatarURL },
          fields: [
            { name: "Bots", value: ownedBotsString, inline: true },
            { name: "Balance", value: `R$ ${user.coins}`, inline: true }, {
              name: "Recently Voted Bots",
              value: user.votes.length
                ? user.votes.map(bot => `<@!${bot}>`).join(", ")
                : "No Bots Voted Recently",
              inline: true
            }
          ]
        }]
      }
    });
  }
}
