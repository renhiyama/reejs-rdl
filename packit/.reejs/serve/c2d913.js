import e from"https://deno.land/x/surrealdb/mod.ts";const n=new e(Deno.env.get("DB_URL"));await n.signin({user:Deno.env.get("DB_USER"),password:Deno.env.get("DB_PASSWORD")});export default n;