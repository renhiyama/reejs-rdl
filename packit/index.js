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
let serve_0f3514js = await Deno.readFile("./.reejs/serve/0f3514.js");server.app.get("/__reejs/serve/0f3514.js", (c)=>{c.header('Content-type','text/javascript');return c.body(serve_0f3514js)});
let serve_1304b6js = await Deno.readFile("./.reejs/serve/1304b6.js");server.app.get("/__reejs/serve/1304b6.js", (c)=>{c.header('Content-type','text/javascript');return c.body(serve_1304b6js)});
let serve_166649js = await Deno.readFile("./.reejs/serve/166649.js");server.app.get("/__reejs/serve/166649.js", (c)=>{c.header('Content-type','text/javascript');return c.body(serve_166649js)});
let serve_1d1f96js = await Deno.readFile("./.reejs/serve/1d1f96.js");server.app.get("/__reejs/serve/1d1f96.js", (c)=>{c.header('Content-type','text/javascript');return c.body(serve_1d1f96js)});
let serve_239481js = await Deno.readFile("./.reejs/serve/239481.js");server.app.get("/__reejs/serve/239481.js", (c)=>{c.header('Content-type','text/javascript');return c.body(serve_239481js)});
let serve_3348bajs = await Deno.readFile("./.reejs/serve/3348ba.js");server.app.get("/__reejs/serve/3348ba.js", (c)=>{c.header('Content-type','text/javascript');return c.body(serve_3348bajs)});
let serve_387a65js = await Deno.readFile("./.reejs/serve/387a65.js");server.app.get("/__reejs/serve/387a65.js", (c)=>{c.header('Content-type','text/javascript');return c.body(serve_387a65js)});
let serve_46c8ecjs = await Deno.readFile("./.reejs/serve/46c8ec.js");server.app.get("/__reejs/serve/46c8ec.js", (c)=>{c.header('Content-type','text/javascript');return c.body(serve_46c8ecjs)});
let serve_50533ajs = await Deno.readFile("./.reejs/serve/50533a.js");server.app.get("/__reejs/serve/50533a.js", (c)=>{c.header('Content-type','text/javascript');return c.body(serve_50533ajs)});
let serve_68fe99js = await Deno.readFile("./.reejs/serve/68fe99.js");server.app.get("/__reejs/serve/68fe99.js", (c)=>{c.header('Content-type','text/javascript');return c.body(serve_68fe99js)});
let serve_693ad1js = await Deno.readFile("./.reejs/serve/693ad1.js");server.app.get("/__reejs/serve/693ad1.js", (c)=>{c.header('Content-type','text/javascript');return c.body(serve_693ad1js)});
let serve_6be6cdjs = await Deno.readFile("./.reejs/serve/6be6cd.js");server.app.get("/__reejs/serve/6be6cd.js", (c)=>{c.header('Content-type','text/javascript');return c.body(serve_6be6cdjs)});
let serve_712ab2js = await Deno.readFile("./.reejs/serve/712ab2.js");server.app.get("/__reejs/serve/712ab2.js", (c)=>{c.header('Content-type','text/javascript');return c.body(serve_712ab2js)});
let serve_790f31js = await Deno.readFile("./.reejs/serve/790f31.js");server.app.get("/__reejs/serve/790f31.js", (c)=>{c.header('Content-type','text/javascript');return c.body(serve_790f31js)});
let serve_7a2854js = await Deno.readFile("./.reejs/serve/7a2854.js");server.app.get("/__reejs/serve/7a2854.js", (c)=>{c.header('Content-type','text/javascript');return c.body(serve_7a2854js)});
let serve_8b8086js = await Deno.readFile("./.reejs/serve/8b8086.js");server.app.get("/__reejs/serve/8b8086.js", (c)=>{c.header('Content-type','text/javascript');return c.body(serve_8b8086js)});
let serve_8e913ajs = await Deno.readFile("./.reejs/serve/8e913a.js");server.app.get("/__reejs/serve/8e913a.js", (c)=>{c.header('Content-type','text/javascript');return c.body(serve_8e913ajs)});
let serve_9a7f67js = await Deno.readFile("./.reejs/serve/9a7f67.js");server.app.get("/__reejs/serve/9a7f67.js", (c)=>{c.header('Content-type','text/javascript');return c.body(serve_9a7f67js)});
let serve_a31cf9js = await Deno.readFile("./.reejs/serve/a31cf9.js");server.app.get("/__reejs/serve/a31cf9.js", (c)=>{c.header('Content-type','text/javascript');return c.body(serve_a31cf9js)});
let serve_a9a248js = await Deno.readFile("./.reejs/serve/a9a248.js");server.app.get("/__reejs/serve/a9a248.js", (c)=>{c.header('Content-type','text/javascript');return c.body(serve_a9a248js)});
let serve_b867dejs = await Deno.readFile("./.reejs/serve/b867de.js");server.app.get("/__reejs/serve/b867de.js", (c)=>{c.header('Content-type','text/javascript');return c.body(serve_b867dejs)});
let serve_b9124bjs = await Deno.readFile("./.reejs/serve/b9124b.js");server.app.get("/__reejs/serve/b9124b.js", (c)=>{c.header('Content-type','text/javascript');return c.body(serve_b9124bjs)});
let serve_bae5b4js = await Deno.readFile("./.reejs/serve/bae5b4.js");server.app.get("/__reejs/serve/bae5b4.js", (c)=>{c.header('Content-type','text/javascript');return c.body(serve_bae5b4js)});
let serve_c2d913js = await Deno.readFile("./.reejs/serve/c2d913.js");server.app.get("/__reejs/serve/c2d913.js", (c)=>{c.header('Content-type','text/javascript');return c.body(serve_c2d913js)});
let serve_c8b00cjs = await Deno.readFile("./.reejs/serve/c8b00c.js");server.app.get("/__reejs/serve/c8b00c.js", (c)=>{c.header('Content-type','text/javascript');return c.body(serve_c8b00cjs)});
let serve_dd79e4js = await Deno.readFile("./.reejs/serve/dd79e4.js");server.app.get("/__reejs/serve/dd79e4.js", (c)=>{c.header('Content-type','text/javascript');return c.body(serve_dd79e4js)});
let serve_e9d733js = await Deno.readFile("./.reejs/serve/e9d733.js");server.app.get("/__reejs/serve/e9d733.js", (c)=>{c.header('Content-type','text/javascript');return c.body(serve_e9d733js)});
let serve_ebc480js = await Deno.readFile("./.reejs/serve/ebc480.js");server.app.get("/__reejs/serve/ebc480.js", (c)=>{c.header('Content-type','text/javascript');return c.body(serve_ebc480js)});
let serve_ecc2a5js = await Deno.readFile("./.reejs/serve/ecc2a5.js");server.app.get("/__reejs/serve/ecc2a5.js", (c)=>{c.header('Content-type','text/javascript');return c.body(serve_ecc2a5js)});
let serve_f30b47js = await Deno.readFile("./.reejs/serve/f30b47.js");server.app.get("/__reejs/serve/f30b47.js", (c)=>{c.header('Content-type','text/javascript');return c.body(serve_f30b47js)});
let serve_f5140ajs = await Deno.readFile("./.reejs/serve/f5140a.js");server.app.get("/__reejs/serve/f5140a.js", (c)=>{c.header('Content-type','text/javascript');return c.body(serve_f5140ajs)});
let serve_f58f25js = await Deno.readFile("./.reejs/serve/f58f25.js");server.app.get("/__reejs/serve/f58f25.js", (c)=>{c.header('Content-type','text/javascript');return c.body(serve_f58f25js)});
let serve_fadc48js = await Deno.readFile("./.reejs/serve/fadc48.js");server.app.get("/__reejs/serve/fadc48.js", (c)=>{c.header('Content-type','text/javascript');return c.body(serve_fadc48js)});
	  
	
	serve(server.app.fetch)
			