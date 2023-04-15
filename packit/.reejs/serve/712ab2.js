import e from"./c2d913.js";export default{name:"info",description:"Get info from RDL",options:[{name:"bot",description:"Get info about bot",type:1,options:[{name:"id",description:"The bot's ID",type:6,required:!0}]},{name:"user",description:"Get info about user",type:1,options:[{name:"id",description:"The user's ID (default: you)",type:6}]}]};export async function run(o,t){let n=t.data.options[0].name,i=Object.keys(t.data.resolved.members)[0]||t.member.user.id;if("bot"==n){let t=await e.query("SELECT * FROM bots WHERE botid = $id",{id:i}),n=t[0].result[0];return console.log(t),n?o.json({type:4,data:{embeds:[{title:n.tag,description:n.description,color:5793266,thumbnail:{url:n.avatarURL},fields:[{name:"Prefix",value:n.prefix,inline:!0},{name:"Servers",value:n.servers,inline:!0},{name:"Owner",value:`<@!${n.owner}>`,inline:!0},{name:"Library",value:n.library||"<Not Disclosed>",inline:!0},{name:"Invite",value:`[Click Here for No-Perm Invite](https://discord.com/oauth2/authorize?client_id=${n.id}&scope=bot&permissions=0)\n[Click Here for Original Invite](${n.invite})`,inline:!1},{name:"Support Server",value:n.support||"<Not Disclosed>",inline:!0},{name:"Vote",value:`[Click Here to Vote - ${n.opted_coins?"Uses R$":"Based on Cooldown"}](https://discord.rovelstars.com/bots/${n.id}/vote)`,inline:!1}]}]}}):o.json({type:4,data:{content:"Bot not found",flags:64}})}if("user"==n){console.log(Users);let e=await Users.findOne({id:i}),t=await Bots.find({owners:{$in:[i]}}),n=t.length?t.map((e=>e.tag)).join(", "):"No Bots";return console.log(e),console.log(t),e?o.json({type:4,data:{embeds:[{title:e.tag,description:e.bio,color:5793266,thumbnail:{url:e.avatarURL},fields:[{name:"Bots",value:n,inline:!0},{name:"Balance",value:`R$ ${e.coins}`,inline:!0},{name:"Recently Voted Bots",value:e.votes.length?e.votes.map((e=>`<@!${e}>`)).join(", "):"No Bots Voted Recently",inline:!0}]}]}}):o.json({type:4,data:{content:"User not found",flags:64}})}}