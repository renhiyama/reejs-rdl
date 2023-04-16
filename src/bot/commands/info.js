import db from "../../db/index";
export default {
  name: "info",
  description: "Get info from RDL",
  options:
      [
        {
          name : "bot",
          description : "Get info about bot",
          type : 1,
          options : [
            {
              name : "id",
              description : "The bot's ID",
              type : 6,
              required : true,
            },
          ],
        },
        {
          name : "user",
          description : "Get info about user",
          type : 1,
          options : [
            {
              name : "id",
              description : "The user's ID (default: you)",
              type : 6,
            },
          ],
        }
      ]
};
export async function run(c, msg) {
  let type = msg.data.options[0].name;
  let id = Object.keys(msg.data.resolved.members)[0] || msg.member.user.id;
  if (type == "bot") {
    let bots = await db.query(`SELECT * FROM bots WHERE botID = $id`, {id});
    let bot = bots[0].result[0];
    if (!bot) {
      return c.json({type : 4, data : {content : "Bot not found"}});
    }
    return c.json({
      type : 4,
      data : {
        embeds : [ {
          title : bot.tag,
          color : 0x5865f2,
          url : `https://dscrdly.com/b/${bot.slug}`,
          thumbnail : {url : bot.avatarURL},
          fields : [
            {
              name : "Prefix",
              value : bot.prefix || "<Not Disclosed>",
              inline : true
            },
            {
              name : "Servers",
              value : bot.servers || "<Not Disclosed>",
              inline : true
            },
            {
              name : "Owner",
              value : bot.owners.map(owner => `<@!${owner}>`).join(", "),
              inline : true
            },
            {
              name : "Library",
              value : bot.lib || "<Not Disclosed>",
              inline : true
            },
            {
              name : "Invite",
              value : `[Click Here for No-Perm Invite](https://discord.com/oauth2/authorize?client_id=${
                  bot.id}&scope=bot&permissions=0)\n[Click Here for Original Invite](${
                  bot.invite})`,
              inline : true
            },
            {
              name : "Support Server",
              value : bot.support ? `https://discord.gg/${bot.support}`
                                  : "<Not Disclosed>",
              inline : true
            },
            {
              name : "Vote",
              value : `[Click Here to Vote - ${
                  bot.opted_coins
                      ? "Uses R$"
                      : "Based on Cooldown"}](https://discord.rovelstars.com/bots/${
                  bot.id}/vote)`,
              inline : true
            }
          ]
        } ]
      }
    });
    // let res = await
    // fetch(`https://discord.com/api/v10/interactions/${msg.id}/${msg.token}/callback`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bot ${Deno.env.get("TOKEN")}`
    //   },
    //   body: JSON.stringify(data)
    // });
    // res = await res.json();
    // console.log(res);

  } else if (type == "user") {
    let type = msg.data.options[0].options[0].name;
    let id = Object.keys(msg.data.resolved.members)[0] || msg.member.user.id;
    let users = await db.query(`SELECT * FROM users WHERE userID = $id`, {id});
    let user = users[0].result[0];
    if (!user) {
      return c.json({type : 4, data : {content : "User not found"}});
    }
    return c.json({
      type : 4,
      data : {
        embeds : [ {
          title : user.tag,
          color : 0x5865f2,
          url : `https://dscrdly.com/u/${user.userID}`,
          thumbnail : {url : user.avatarURL},
          fields : [
            {
              name : "Bio",
              value : user.bio || "<Not Disclosed>",
              inline : true
            },
            {
              name : "Recent Voted Bots",
              value : user.votes.length > 0? user.votes.map(vote => `<@!${vote.bot}> at <t:${
                Math.round(new Date(vote.at).getTime()/1000)
              }>`).join(", ") : "<None>",
              inline : true
            },
            {
              name : "R$ Balance",
              value : `R$ ${user.bal}`,
              inline : true
            },
            {
              name : "Account Type",
              value : user.old ? "This user is requested to login again to move to V2" : "V2",
              inline : true
            },
            {
              name: "Last Seen",
              value: `<t:${Math.round(new Date(user.lastLogin).getTime()/1000)}:R>`,
            },
          ]
        } ]
      }
    });
  }
}
