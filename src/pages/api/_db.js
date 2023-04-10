import {CookieDB} from "https://deno.land/x/cookie_driver/mod.ts";
const cookieDB = new CookieDB(
    "https://cookiedb.com/api/db",
    Deno.env.get("COOKIE_DB_TOKEN"),
);

export default cookieDB;
