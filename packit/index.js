import "https://esm.sh/preact@10.13.2/debug";
	  import inline from "https://cdn.jsdelivr.net/npm/@twind/with-react/inline/+esm";
import tw from "./.reejs/serve/b9124b.js";
	  
	  import ReeServer from "./node_modules/@reejs/server/index.js";
			import { serve } from 'https://deno.land/std/http/server.ts'
		import { Hono } from "https://esm.sh/hono@3.0.3?bundle";
		import render from "https://esm.sh/preact-render-to-string@6.0.2";
		import React from "https://esm.sh/preact@10.13.2/compat";
		import App from "./.reejs/serve/693ad1.js";
		const server = new ReeServer(Hono, {});
	
		import file_6be6cd from "./.reejs/serve/6be6cd.js";
							server.app.get("/",(c)=>{ let h = "<!DOCTYPE html>"+render(React.createElement(App,null,React.createElement(file_6be6cd,null))).replace('<script id="__reejs"></script>','<script type="importmap">{"imports":{"debug":"https://esm.sh/preact@10.13.2/debug","react":"https://esm.sh/preact@10.13.2/compat","@twind/core":"https://cdn.jsdelivr.net/npm/@twind/core/+esm","@twind/preset-autoprefix":"https://cdn.jsdelivr.net/npm/@twind/preset-autoprefix/+esm","@twind/preset-tailwind":"https://cdn.jsdelivr.net/npm/@twind/preset-tailwind/+esm","@twind/with-react":"https://cdn.jsdelivr.net/npm/@twind/with-react/+esm","@twind/with-react/inline":"https://cdn.jsdelivr.net/npm/@twind/with-react/inline/+esm"}}</script><script type="module">let i=(await import("/__reejs/serve/790f31.js")).default;i("6be6cd.js",null);</script>');return c.html(inline(h,tw))});
							
			
		
		import * as file_a31cf9 from "./.reejs/serve/a31cf9.js";server.app[file_a31cf9?.method?.toLowerCase() || "get"]("/api/bot/",file_a31cf9.default);
import * as file_3348ba from "./.reejs/serve/3348ba.js";server.app[file_3348ba?.method?.toLowerCase() || "get"]("/api/bot/manage",file_3348ba.default);
import * as file_b867de from "./.reejs/serve/b867de.js";server.app[file_b867de?.method?.toLowerCase() || "get"]("/api/bots/:id",file_b867de.default);
import * as file_166649 from "./.reejs/serve/166649.js";server.app[file_166649?.method?.toLowerCase() || "get"]("/api/bots/new",file_166649.default);

		let serve_00dbcdjs = await Deno.readFile("./.reejs/serve/00dbcd.js");server.app.get("/__reejs/serve/00dbcd.js", (c)=>{c.header('Content-type','text/javascript');return c.body(serve_00dbcdjs)});
let serve_166649js = await Deno.readFile("./.reejs/serve/166649.js");server.app.get("/__reejs/serve/166649.js", (c)=>{c.header('Content-type','text/javascript');return c.body(serve_166649js)});
let serve_3348bajs = await Deno.readFile("./.reejs/serve/3348ba.js");server.app.get("/__reejs/serve/3348ba.js", (c)=>{c.header('Content-type','text/javascript');return c.body(serve_3348bajs)});
let serve_387a65js = await Deno.readFile("./.reejs/serve/387a65.js");server.app.get("/__reejs/serve/387a65.js", (c)=>{c.header('Content-type','text/javascript');return c.body(serve_387a65js)});
let serve_4ed9e2js = await Deno.readFile("./.reejs/serve/4ed9e2.js");server.app.get("/__reejs/serve/4ed9e2.js", (c)=>{c.header('Content-type','text/javascript');return c.body(serve_4ed9e2js)});
let serve_68fe99js = await Deno.readFile("./.reejs/serve/68fe99.js");server.app.get("/__reejs/serve/68fe99.js", (c)=>{c.header('Content-type','text/javascript');return c.body(serve_68fe99js)});
let serve_693ad1js = await Deno.readFile("./.reejs/serve/693ad1.js");server.app.get("/__reejs/serve/693ad1.js", (c)=>{c.header('Content-type','text/javascript');return c.body(serve_693ad1js)});
let serve_6be6cdjs = await Deno.readFile("./.reejs/serve/6be6cd.js");server.app.get("/__reejs/serve/6be6cd.js", (c)=>{c.header('Content-type','text/javascript');return c.body(serve_6be6cdjs)});
let serve_790f31js = await Deno.readFile("./.reejs/serve/790f31.js");server.app.get("/__reejs/serve/790f31.js", (c)=>{c.header('Content-type','text/javascript');return c.body(serve_790f31js)});
let serve_a31cf9js = await Deno.readFile("./.reejs/serve/a31cf9.js");server.app.get("/__reejs/serve/a31cf9.js", (c)=>{c.header('Content-type','text/javascript');return c.body(serve_a31cf9js)});
let serve_b867dejs = await Deno.readFile("./.reejs/serve/b867de.js");server.app.get("/__reejs/serve/b867de.js", (c)=>{c.header('Content-type','text/javascript');return c.body(serve_b867dejs)});
let serve_b9124bjs = await Deno.readFile("./.reejs/serve/b9124b.js");server.app.get("/__reejs/serve/b9124b.js", (c)=>{c.header('Content-type','text/javascript');return c.body(serve_b9124bjs)});
let serve_dd79e4js = await Deno.readFile("./.reejs/serve/dd79e4.js");server.app.get("/__reejs/serve/dd79e4.js", (c)=>{c.header('Content-type','text/javascript');return c.body(serve_dd79e4js)});
let serve_f58f25js = await Deno.readFile("./.reejs/serve/f58f25.js");server.app.get("/__reejs/serve/f58f25.js", (c)=>{c.header('Content-type','text/javascript');return c.body(serve_f58f25js)});
let serve_fadc48js = await Deno.readFile("./.reejs/serve/fadc48.js");server.app.get("/__reejs/serve/fadc48.js", (c)=>{c.header('Content-type','text/javascript');return c.body(serve_fadc48js)});
	  
	
	serve(server.app.fetch)
			