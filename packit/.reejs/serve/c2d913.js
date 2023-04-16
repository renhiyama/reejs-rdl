import e from "https://deno.land/x/surrealdb/mod.ts";
const t = new e(Deno.env.get("DB_URL"));
await t.signin(
    {user : Deno.env.get("DB_USER"), pass : Deno.env.get("DB_PASSWORD")});
await t.use("test", "test");
export default t;
