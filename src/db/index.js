import mongoose from "npm:mongoose@7.0.3";

import Bots from "./models/bots";
import Servers from "./models/servers";
import Users from "./models/users";

await mongoose.connect(Deno.env.get("DB_URL"));
console.log("%c[DB] %cConnected to Database", "color: #eb4590", "color: white");

export default {Bots, Servers, Users};
