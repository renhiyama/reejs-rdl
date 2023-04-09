import registerCommands from "../../../bot/register";

export default function Route(c) {
  if (c.req.query("register")) {
    registerCommands();
  }
}
