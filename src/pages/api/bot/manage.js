import registerCommands from "../../../bot/register";
export default async function Route(c) {
  if (c.req.query("register")) {
    await registerCommands();
    return c.text("Registered Commands");
  }
  return c.text("No query provided");
}
