import mongoose from "mongoose";

import Bots from "./models/bots.js";
import Servers from "./models/servers.js";
import Users from "./models/users.js";

console.log("uwu", mongoose);
await mongoose.connect(Deno.env.get("DB_URL"));
console.log("%c[DB] Connected to Database: " + mongoose.connection.readyState,
            "color: #eb4590");

export {Bots, Servers, Users};
