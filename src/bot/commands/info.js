import Bots from "../../db/models/bots";
import Users from "../../db/models/users";

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
  let id = msg.data.options[0]?.options[0]?.value || msg.member.user.id;
  if (type == "bot") {
    let bot = await Bots.findOne({id});
    console.log(bot);
    if (!bot) {
      return c.json({type : 4, data : {content : "Bot not found", flags : 64}});
    }
    return c.json({
      type : 4,
      data : {
        embeds : [ {
          title : bot.tag,
          description : bot.description,
          color : 0x5865f2,
          thumbnail : {url : bot.avatarURL},
          fields : [
            {name : "Prefix", value : bot.prefix, inline : true},
            {name : "Servers", value : bot.servers, inline : true},
            {name : "Owner", value : `<@!${bot.owner}>`, inline : true}, {
              name : "Library",
              value : bot.library || "<Not Disclosed>",
              inline : true
            },
            {
              name : "Invite",
              value : `[Click Here for No-Perm Invite](https://discord.com/oauth2/authorize?client_id=${
                  bot.id}&scope=bot&permissions=0)\n[Click Here for Original Invite](${
                  bot.invite})`,
              inline : false
            },
            {
              name : "Support Server",
              value : bot.support || "<Not Disclosed>",
              inline : true
            },
            {
              name : "Vote",
              value : `[Click Here to Vote - ${
                  bot.opted_coins
                      ? "Uses R$"
                      : "Based on Cooldown"}](https://discord.rovelstars.com/bots/${
                  bot.id}/vote)`,
              inline : false
            }
          ]
        } ]
      }
    });

  } else if (type == "user") {
    console.log(Users);
    let user = await Users.findOne({id});
    let ownedBots = await Bots.find({owners : {$in : [ id ]}});
    let ownedBotsString =
        ownedBots.length ? ownedBots.map(bot => bot.tag).join(", ") : "No Bots";
    console.log(user);
    console.log(ownedBots);
    if (!user) {
      return c.json(
          {type : 4, data : {content : "User not found", flags : 64}});
    }
    return c.json({
      type : 4,
      data : {
        embeds : [ {
          title : user.tag,
          description : user.bio,
          color : 0x5865f2,
          thumbnail : {url : user.avatarURL},
          fields : [
            {name : "Bots", value : ownedBotsString, inline : true},
            {name : "Balance", value : `R$ ${user.coins}`, inline : true}, {
              name : "Recently Voted Bots",
              value : user.votes.length
                          ? user.votes.map(bot => `<@!${bot}>`).join(", ")
                          : "No Bots Voted Recently",
              inline : true
            }
          ]
        } ]
      }
    });
  }
}
