import e from"./3d460f.js";export default async function r(r){return r.req.query("register")?(await e(),r.text("Registered Commands")):r.text("No query provided")}