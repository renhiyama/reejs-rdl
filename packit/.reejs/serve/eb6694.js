import e from"./3d460f.js";import r from"./5ed863.js";export default async function t(t){return t.req.query("register")?(await e(),t.text("Registered Commands")):t.req.query("unregister")?(await r(),t.text("Unregistered Commands")):t.text("No query provided")}