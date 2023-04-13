import mongoose from "mongoose";

import Bots from "./models/bots";
import Servers from "./models/servers";
import Users from "./models/users";

console.log("Connecting to MongoDB...");
await mongoose.connect(Deno.env.get("DB_URL"));
console.log("%c[DB] Connected to Database: " + mongoose.connection.readyState,
            "color: #eb4590");

export default {Bots, Servers, Users};
