
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
							server.app.get("/",(c)=>{ let h = "<!DOCTYPE html>"+render(React.createElement(App,null,React.createElement(file_6be6cd,null))).replace('<script id="__reejs"></script>','<script type="importmap">{"imports":{"https://esm.sh/preact@10.13.2/debug":"https://esm.sh/preact@10.13.2/debug","https://esm.sh/preact@10.13.2/compat":"https://esm.sh/preact@10.13.2/compat","https://cdn.jsdelivr.net/npm/@twind/core/+esm":"https://cdn.jsdelivr.net/npm/@twind/core/+esm","https://cdn.jsdelivr.net/npm/@twind/preset-autoprefix/+esm":"https://cdn.jsdelivr.net/npm/@twind/preset-autoprefix/+esm","https://cdn.jsdelivr.net/npm/@twind/preset-tailwind/+esm":"https://cdn.jsdelivr.net/npm/@twind/preset-tailwind/+esm","https://cdn.jsdelivr.net/npm/@twind/with-react/+esm":"https://cdn.jsdelivr.net/npm/@twind/with-react/+esm","https://cdn.jsdelivr.net/npm/@twind/with-react/inline/+esm":"https://cdn.jsdelivr.net/npm/@twind/with-react/inline/+esm","debug":"https://esm.sh/preact@10.13.2/debug","react":"https://esm.sh/preact@10.13.2/compat","preact":"https://esm.sh/preact@10.13.2/compat","@twind/core":"https://cdn.jsdelivr.net/npm/@twind/core/+esm","@twind/preset-autoprefix":"https://cdn.jsdelivr.net/npm/@twind/preset-autoprefix/+esm","@twind/preset-tailwind":"https://cdn.jsdelivr.net/npm/@twind/preset-tailwind/+esm","@twind/with-react":"https://cdn.jsdelivr.net/npm/@twind/with-react/+esm","@twind/with-react/inline":"https://cdn.jsdelivr.net/npm/@twind/with-react/inline/+esm"}}</script><script type="module">let i=(await import("/__reejs/serve/790f31.js")).default;i("6be6cd.js",null);</script>');return c.html(inline(h,tw).replaceAll('{background-clip:text}','{-webkit-background-clip:text;background-clip:text}'))});
							
			
		
		import * as file_a31cf9 from "./.reejs/serve/a31cf9.js";server.app[file_a31cf9?.method?.toLowerCase() || "get"]("/api/bot/",file_a31cf9.default);
import * as file_3348ba from "./.reejs/serve/3348ba.js";server.app[file_3348ba?.method?.toLowerCase() || "get"]("/api/bot/manage",file_3348ba.default);
import * as file_b867de from "./.reejs/serve/b867de.js";server.app[file_b867de?.method?.toLowerCase() || "get"]("/api/bots/:id",file_b867de.default);
import * as file_166649 from "./.reejs/serve/166649.js";server.app[file_166649?.method?.toLowerCase() || "get"]("/api/bots/new",file_166649.default);

		server.app.get('/__reejs/**',serveStatic({root:'./__reejs/',rewriteRequestPath:(p)=>p.replace('/__reejs','')}));server.app.get('/**',serveStatic({root:'./public',rewriteRequestPath:(p)=>p.replace('/public','')}));
	  
	
	serve(server.app.fetch)
			