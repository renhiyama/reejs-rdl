import "https://esm.sh/preact@10.13.2/debug";
	  import inline from "https://cdn.jsdelivr.net/npm/@twind/with-react/inline/+esm";
import tw from "./.reejs/serve/f42132.js";
	  
	  import ReeServer from "./node_modules/@reejs/server/index.js";
			import { serve } from 'https://deno.land/std/http/server.ts'
		import { Hono } from "https://esm.sh/hono@3.0.3?bundle";
		import render from "https://esm.sh/preact-render-to-string@6.0.2";
		import React from "https://esm.sh/preact@10.13.2/compat";
		import App from "./.reejs/serve/fbc9a1.js";
		const server = new ReeServer(Hono, {});
	
		import file_f629bb from "./.reejs/serve/f629bb.js";
							server.app.get("/",(c)=>{ let h = "<!DOCTYPE html>"+render(React.createElement(App,null,React.createElement(file_f629bb,null))).replace('<script id="__reejs"></script>','<script type="importmap">{"imports":{"debug":"https://esm.sh/preact@10.13.2/debug","react":"https://esm.sh/preact@10.13.2/compat","@twind/core":"https://cdn.jsdelivr.net/npm/@twind/core/+esm","@twind/preset-autoprefix":"https://cdn.jsdelivr.net/npm/@twind/preset-autoprefix/+esm","@twind/preset-tailwind":"https://cdn.jsdelivr.net/npm/@twind/preset-tailwind/+esm","@twind/with-react":"https://cdn.jsdelivr.net/npm/@twind/with-react/+esm","@twind/with-react/inline":"https://cdn.jsdelivr.net/npm/@twind/with-react/inline/+esm"}}</script><script type="module">let i=(await import("/__reejs/serve/4719e7.js")).default;i("f629bb.js",null);</script>');return c.html(inline(h,tw))});
							
			
		
		import "./.reejs/serve/4ef0cb.js";
import * as file_a0795a from "./.reejs/serve/a0795a.js";server.app[file_a0795a?.method?.toLowerCase() || "get"]("/api/bot/",file_a0795a.default);
import * as file_b03eb1 from "./.reejs/serve/b03eb1.js";server.app[file_b03eb1?.method?.toLowerCase() || "get"]("/api/bot/register",file_b03eb1.default);


		
	
	serve(server.app.fetch)
			