import db from "../../db/index";

import {SlashCommandBuilder} from '@discordjs/builders';
import {Routes} from 'discord-api-types/v10';
import rest from '../util';


export default {
  data: new SlashCommandBuilder()
    .setName("info")
    .setDescription("Get info from RDL")
    .addSubcommand(subcommand =>
      subcommand
        .setName("bot")
        .setDescription("Get info about bot")
        .addUserOption(option =>
          option
            .setName("id")
            .setDescription("The bot's ID")
            .setRequired(true)
        )
    )
    .addSubcommand(subcommand =>
      subcommand
        .setName("user")
        .setDescription("Get info about user")
        .addUserOption(option =>
          option
            .setName("id")
            .setDescription("The user's ID (default: you)")
        )
    ),

  async run(msg){
    let type = msg.data.options[0].name;
    let id = Object.keys(msg.data.resolved.members)[0] || msg.member.user.id;
    if (type == "bot"){
      //first post a msg for deferred response
      await rest.post(Routes.interactionCallback(msg.id, msg.token), {
        body: {
          type: 4,
          data: {
            content: "Searching..."
          }
        }
      });
      let bots = await db.query(`SELECT * FROM bots WHERE botID = $id`, { id });
      let bot = bots[0].result[0];
      if (!bot) {
        return await rest.patch(Routes.interactionFollowup(msg.id, msg.token), {
          body: {
            type: 4,
            data:{
              content: "This bot is not on RDL. Please ask the owner to add it."
            }
          }
        });
      }
      return await rest.patch(Routes.interactionFollowup(msg.id, msg.token), {
        body: {
          type: 4,
          data: {
            embeds: [{
              title: bot.tag,
              color: 0x5865f2,
              url: `https://dscrdly.com/b/${bot.slug}`,
              thumbnail: { url: bot.avatarURL },
              fields: [
                {
                  name: "Prefix",
                  value: bot.prefix || "<Not Disclosed>",
                  inline: true
                },
                {
                  name: "Servers",
                  value: bot.servers || "<Not Disclosed>",
                  inline: true
                },
                {
                  name: "Owner",
                  value: bot.owners.map(owner => `<@!${owner}>`).join(", "),
                  inline: true
                },
                {
                  name: "Library",
                  value: bot.lib || "<Not Disclosed>",
                  inline: true
                },
                {
                  name: "Invite",
                  value: `[Click Here for No-Perm Invite](https://discord.com/oauth2/authorize?client_id=${bot.id}&scope=bot&permissions=0)\n[Click Here for Original Invite](${bot.invite})`,
                  inline: true
                },
                {
                  name: "Support Server",
                  value: bot.support ? `https://discord.gg/${bot.support}`
                    : "<Not Disclosed>",
                  inline: true
                },
                {
                  name: "Vote",
                  value: `[Click Here to Vote - ${bot.opted_coins
                      ? "Uses R$"
                      : "Based on Cooldown"}](https://discord.rovelstars.com/bots/${bot.id}/vote)`,
                  inline: true
                }
              ]
            }]
          }
        }
      });

    } else if (type == "user") {
      await rest.post(Routes.interactionCallback(msg.id, msg.token), {
        body: {
          type: 4,
          data: {
            content: "Searching..."
          }
        }
      });
      let users = await db.query(`SELECT * FROM users WHERE userID = $id`, { id });
      let user = users[0].result[0];
      if (!user) {
        return await rest.patch(Routes.interactionFollowup(msg.id, msg.token), {
          body: {
            type: 4,
            data: {
              content: "User didn't create an account on RDL."
            }
          }
        });
      }
      return await rest.patch(Routes.interactionFollowup(msg.id, msg.token), {
        body: {
          type: 4,
          data: {
            embeds: [{
              title: user.tag,
              color: 0x5865f2,
              url: `https://dscrdly.com/u/${user.userID}`,
              thumbnail: { url: user.avatarURL },
              fields: [
                {
                  name: "Bio",
                  value: user.bio || "<Not Disclosed>",
                  inline: true
                },
                {
                  name: "Recent Voted Bots",
                  value: user.votes.length > 0 ? user.votes.map(vote => `<@!${vote.bot}> at <t:${Math.round(new Date(vote.at).getTime() / 1000)
                    }>`).join(", ") : "<None>",
                  inline: true
                },
                {
                  name: "R$ Balance",
                  value: `R$ ${user.bal}`,
                  inline: true
                },
                {
                  name: "Account Type",
                  value: user.old ? "This user is requested to login again to move to V2" : "V2",
               inline: true
             },
             {
               name: "Last Seen",
               value: `<t:${Math.round(new Date(user.lastLogin).getTime() / 1000)}:R>`,
             },
           ]
         }]
       }
     }
    });
  }
  }
}