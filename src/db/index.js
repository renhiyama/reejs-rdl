import Surreal from "surrealdb.js";

const db = new Surreal(Deno.env.get("DB_URL"));

await db.signin({
  user: Deno.env.get("DB_USER"),
  password: Deno.env.get("DB_PASSWORD"),
});

await db.use("test","test");

export default db;