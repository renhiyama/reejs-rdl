import Surreal from "surrealdb.js";

console.log(Deno.env.get("DB_URL"), Deno.env.get("DB_USER"), Deno.env.get("DB_PASSWORD"));

const db = new Surreal(Deno.env.get("DB_URL"));

let user = Deno.env.get("DB_USER");
let password = Deno.env.get("DB_PASSWORD");

await db.signin({ user, password });

console.log("Connected to database");

await db.use("test", "test");

export default db;