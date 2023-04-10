import registerCommands from "../../../bot/register";
import unregisterCommands from "../../../bot/unregister";
export default async function Route(c) {
  if (c.req.query("register")) {
    await registerCommands();
    return c.text("Registered Commands");
  } else if (c.req.query("unregister")) {
    await unregisterCommands();
    return c.text("Unregistered Commands");
  }
  return c.text("No query provided");
}
