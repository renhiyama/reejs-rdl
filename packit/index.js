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
let serve_057802js = await Deno.readFile("./.reejs/serve/057802.js");server.app.get("/__reejs/serve/057802.js", (c)=>{c.header('Content-type','text/javascript');return c.body(serve_057802js)});
let serve_166649js = await Deno.readFile("./.reejs/serve/166649.js");server.app.get("/__reejs/serve/166649.js", (c)=>{c.header('Content-type','text/javascript');return c.body(serve_166649js)});
let serve_1ddfcejs = await Deno.readFile("./.reejs/serve/1ddfce.js");server.app.get("/__reejs/serve/1ddfce.js", (c)=>{c.header('Content-type','text/javascript');return c.body(serve_1ddfcejs)});
let serve_28ea34js = await Deno.readFile("./.reejs/serve/28ea34.js");server.app.get("/__reejs/serve/28ea34.js", (c)=>{c.header('Content-type','text/javascript');return c.body(serve_28ea34js)});
let serve_3348bajs = await Deno.readFile("./.reejs/serve/3348ba.js");server.app.get("/__reejs/serve/3348ba.js", (c)=>{c.header('Content-type','text/javascript');return c.body(serve_3348bajs)});
let serve_387a65js = await Deno.readFile("./.reejs/serve/387a65.js");server.app.get("/__reejs/serve/387a65.js", (c)=>{c.header('Content-type','text/javascript');return c.body(serve_387a65js)});
let serve_3d460fjs = await Deno.readFile("./.reejs/serve/3d460f.js");server.app.get("/__reejs/serve/3d460f.js", (c)=>{c.header('Content-type','text/javascript');return c.body(serve_3d460fjs)});
let serve_4300dfjs = await Deno.readFile("./.reejs/serve/4300df.js");server.app.get("/__reejs/serve/4300df.js", (c)=>{c.header('Content-type','text/javascript');return c.body(serve_4300dfjs)});
let serve_46c8ecjs = await Deno.readFile("./.reejs/serve/46c8ec.js");server.app.get("/__reejs/serve/46c8ec.js", (c)=>{c.header('Content-type','text/javascript');return c.body(serve_46c8ecjs)});
let serve_4719e7js = await Deno.readFile("./.reejs/serve/4719e7.js");server.app.get("/__reejs/serve/4719e7.js", (c)=>{c.header('Content-type','text/javascript');return c.body(serve_4719e7js)});
let serve_4ef0cbjs = await Deno.readFile("./.reejs/serve/4ef0cb.js");server.app.get("/__reejs/serve/4ef0cb.js", (c)=>{c.header('Content-type','text/javascript');return c.body(serve_4ef0cbjs)});
let serve_5052c2js = await Deno.readFile("./.reejs/serve/5052c2.js");server.app.get("/__reejs/serve/5052c2.js", (c)=>{c.header('Content-type','text/javascript');return c.body(serve_5052c2js)});
let serve_5a72b2js = await Deno.readFile("./.reejs/serve/5a72b2.js");server.app.get("/__reejs/serve/5a72b2.js", (c)=>{c.header('Content-type','text/javascript');return c.body(serve_5a72b2js)});
let serve_5ec234js = await Deno.readFile("./.reejs/serve/5ec234.js");server.app.get("/__reejs/serve/5ec234.js", (c)=>{c.header('Content-type','text/javascript');return c.body(serve_5ec234js)});
let serve_5ed863js = await Deno.readFile("./.reejs/serve/5ed863.js");server.app.get("/__reejs/serve/5ed863.js", (c)=>{c.header('Content-type','text/javascript');return c.body(serve_5ed863js)});
let serve_68fe99js = await Deno.readFile("./.reejs/serve/68fe99.js");server.app.get("/__reejs/serve/68fe99.js", (c)=>{c.header('Content-type','text/javascript');return c.body(serve_68fe99js)});
let serve_693ad1js = await Deno.readFile("./.reejs/serve/693ad1.js");server.app.get("/__reejs/serve/693ad1.js", (c)=>{c.header('Content-type','text/javascript');return c.body(serve_693ad1js)});
let serve_6be6cdjs = await Deno.readFile("./.reejs/serve/6be6cd.js");server.app.get("/__reejs/serve/6be6cd.js", (c)=>{c.header('Content-type','text/javascript');return c.body(serve_6be6cdjs)});
let serve_712ab2js = await Deno.readFile("./.reejs/serve/712ab2.js");server.app.get("/__reejs/serve/712ab2.js", (c)=>{c.header('Content-type','text/javascript');return c.body(serve_712ab2js)});
let serve_7539bajs = await Deno.readFile("./.reejs/serve/7539ba.js");server.app.get("/__reejs/serve/7539ba.js", (c)=>{c.header('Content-type','text/javascript');return c.body(serve_7539bajs)});
let serve_790f31js = await Deno.readFile("./.reejs/serve/790f31.js");server.app.get("/__reejs/serve/790f31.js", (c)=>{c.header('Content-type','text/javascript');return c.body(serve_790f31js)});
let serve_7f8051js = await Deno.readFile("./.reejs/serve/7f8051.js");server.app.get("/__reejs/serve/7f8051.js", (c)=>{c.header('Content-type','text/javascript');return c.body(serve_7f8051js)});
let serve_7fbb77js = await Deno.readFile("./.reejs/serve/7fbb77.js");server.app.get("/__reejs/serve/7fbb77.js", (c)=>{c.header('Content-type','text/javascript');return c.body(serve_7fbb77js)});
let serve_809825js = await Deno.readFile("./.reejs/serve/809825.js");server.app.get("/__reejs/serve/809825.js", (c)=>{c.header('Content-type','text/javascript');return c.body(serve_809825js)});
let serve_8767e5js = await Deno.readFile("./.reejs/serve/8767e5.js");server.app.get("/__reejs/serve/8767e5.js", (c)=>{c.header('Content-type','text/javascript');return c.body(serve_8767e5js)});
let serve_8dd1fdjs = await Deno.readFile("./.reejs/serve/8dd1fd.js");server.app.get("/__reejs/serve/8dd1fd.js", (c)=>{c.header('Content-type','text/javascript');return c.body(serve_8dd1fdjs)});
let serve_a0795ajs = await Deno.readFile("./.reejs/serve/a0795a.js");server.app.get("/__reejs/serve/a0795a.js", (c)=>{c.header('Content-type','text/javascript');return c.body(serve_a0795ajs)});
let serve_a31cf9js = await Deno.readFile("./.reejs/serve/a31cf9.js");server.app.get("/__reejs/serve/a31cf9.js", (c)=>{c.header('Content-type','text/javascript');return c.body(serve_a31cf9js)});
let serve_a98e48js = await Deno.readFile("./.reejs/serve/a98e48.js");server.app.get("/__reejs/serve/a98e48.js", (c)=>{c.header('Content-type','text/javascript');return c.body(serve_a98e48js)});
let serve_b03eb1js = await Deno.readFile("./.reejs/serve/b03eb1.js");server.app.get("/__reejs/serve/b03eb1.js", (c)=>{c.header('Content-type','text/javascript');return c.body(serve_b03eb1js)});
let serve_b1786cjs = await Deno.readFile("./.reejs/serve/b1786c.js");server.app.get("/__reejs/serve/b1786c.js", (c)=>{c.header('Content-type','text/javascript');return c.body(serve_b1786cjs)});
let serve_b867dejs = await Deno.readFile("./.reejs/serve/b867de.js");server.app.get("/__reejs/serve/b867de.js", (c)=>{c.header('Content-type','text/javascript');return c.body(serve_b867dejs)});
let serve_b9124bjs = await Deno.readFile("./.reejs/serve/b9124b.js");server.app.get("/__reejs/serve/b9124b.js", (c)=>{c.header('Content-type','text/javascript');return c.body(serve_b9124bjs)});
let serve_bf9c39js = await Deno.readFile("./.reejs/serve/bf9c39.js");server.app.get("/__reejs/serve/bf9c39.js", (c)=>{c.header('Content-type','text/javascript');return c.body(serve_bf9c39js)});
let serve_c2d913js = await Deno.readFile("./.reejs/serve/c2d913.js");server.app.get("/__reejs/serve/c2d913.js", (c)=>{c.header('Content-type','text/javascript');return c.body(serve_c2d913js)});
let serve_d0be5djs = await Deno.readFile("./.reejs/serve/d0be5d.js");server.app.get("/__reejs/serve/d0be5d.js", (c)=>{c.header('Content-type','text/javascript');return c.body(serve_d0be5djs)});
let serve_d1066cjs = await Deno.readFile("./.reejs/serve/d1066c.js");server.app.get("/__reejs/serve/d1066c.js", (c)=>{c.header('Content-type','text/javascript');return c.body(serve_d1066cjs)});
let serve_dd79e4js = await Deno.readFile("./.reejs/serve/dd79e4.js");server.app.get("/__reejs/serve/dd79e4.js", (c)=>{c.header('Content-type','text/javascript');return c.body(serve_dd79e4js)});
let serve_eb6694js = await Deno.readFile("./.reejs/serve/eb6694.js");server.app.get("/__reejs/serve/eb6694.js", (c)=>{c.header('Content-type','text/javascript');return c.body(serve_eb6694js)});
let serve_f42132js = await Deno.readFile("./.reejs/serve/f42132.js");server.app.get("/__reejs/serve/f42132.js", (c)=>{c.header('Content-type','text/javascript');return c.body(serve_f42132js)});
let serve_f58f25js = await Deno.readFile("./.reejs/serve/f58f25.js");server.app.get("/__reejs/serve/f58f25.js", (c)=>{c.header('Content-type','text/javascript');return c.body(serve_f58f25js)});
let serve_f629bbjs = await Deno.readFile("./.reejs/serve/f629bb.js");server.app.get("/__reejs/serve/f629bb.js", (c)=>{c.header('Content-type','text/javascript');return c.body(serve_f629bbjs)});
let serve_fadc48js = await Deno.readFile("./.reejs/serve/fadc48.js");server.app.get("/__reejs/serve/fadc48.js", (c)=>{c.header('Content-type','text/javascript');return c.body(serve_fadc48js)});
let serve_fbc9a1js = await Deno.readFile("./.reejs/serve/fbc9a1.js");server.app.get("/__reejs/serve/fbc9a1.js", (c)=>{c.header('Content-type','text/javascript');return c.body(serve_fbc9a1js)});
	  
	
	serve(server.app.fetch)
			