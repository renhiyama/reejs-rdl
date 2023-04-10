import {
  InteractionResponseType,
  InteractionType,
} from 'discord-interactions';
import nacl from "tweetnacl";

import {commands, runs} from '../../../bot/register.js';

export default async function Route(c) {
  try {
    const body = await c.req.text();
    const message = JSON.parse(body);
    const signature = c.req.header('x-signature-ed25519') || '';
    const timestamp = c.req.header('x-signature-timestamp') || '';
    let valid = nacl.sign.detached.verify(
        Buffer.from(timestamp + body), Buffer.from(signature, 'hex'),
        Buffer.from(process.env.DISCORD_PUBLIC_KEY, 'hex'));
    if (!valid) {
      c.status(401);
      return c.text('invalid request signature');
    }
    if (message.type === InteractionType.PING) {
      console.log("%c[DISCORD] %cReceived %cPING", "color: #5865f2",
                  "color: #fee75c", "color: #fee75c;font-weight: bold");
      return c.json({type : InteractionResponseType.PONG});
    } else if (message.type === InteractionType.APPLICATION_COMMAND) {
      let cmd = commands.find(c => c.name.toLowerCase() ===
                                   message.data.name.toLowerCase());
      if (!cmd) {
        console.log("%c[DISCORD] %cCommand ran: %cUNKNOWN", "color: #5865f2",
                    "color: #ed4245;", "color: #ed4245; font-weight: bold;");
        c.status(400);
        return c.json({error : "Unknown type"})
      }
      console.log("%c[DISCORD] %cReceived Command: %c" + cmd.name,
                  "color: #5865f2", "color: #57f287;",
                  "color: #57f287;font-weight: bold;");
      // get index of command
      let index = commands.indexOf(cmd);
      let res = await runs[index](c, message);
      let r = res.clone();
      console.log(await r.json());
      return res;
    } else {
      return c.json({msg : "Hello World!"});
    }
  } catch (e) {
    c.status(401);
    return c.text('invalid request signature');
  }
}

export const method = "POST";
