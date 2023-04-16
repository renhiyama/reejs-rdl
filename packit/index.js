import "https://esm.sh/preact@10.13.2/debug";
	  import inline from "https://cdn.jsdelivr.net/npm/@twind/with-react/inline/+esm";
import tw from "./.reejs/serve/f30b47.js";
	  
	  import ReeServer from "./node_modules/@reejs/server/index.js";
			import { serve } from 'https://deno.land/std/http/server.ts'
		import { Hono } from "https://esm.sh/hono@3.0.3?bundle";
		import render from "https://esm.sh/preact-render-to-string@6.0.2";
		import React from "https://esm.sh/preact@10.13.2/compat";
		import App from "./.reejs/serve/ecc2a5.js";
		const server = new ReeServer(Hono, {});
	
		import file_50533a from "./.reejs/serve/50533a.js";
							server.app.get("/",(c)=>{ let h = "<!DOCTYPE html>"+render(React.createElement(App,null,React.createElement(file_50533a,null))).replace('<script id="__reejs"></script>','<script type="importmap">{"imports":{"debug":"https://esm.sh/preact@10.13.2/debug","react":"https://esm.sh/preact@10.13.2/compat","@twind/core":"https://cdn.jsdelivr.net/npm/@twind/core/+esm","@twind/preset-autoprefix":"https://cdn.jsdelivr.net/npm/@twind/preset-autoprefix/+esm","@twind/preset-tailwind":"https://cdn.jsdelivr.net/npm/@twind/preset-tailwind/+esm","@twind/with-react":"https://cdn.jsdelivr.net/npm/@twind/with-react/+esm","@twind/with-react/inline":"https://cdn.jsdelivr.net/npm/@twind/with-react/inline/+esm"}}</script><script type="module">let i=(await import("/__reejs/serve/ebc480.js")).default;i("50533a.js",null);</script>');return c.html(inline(h,tw))});
							
			
		
		import * as file_1d1f96 from "./.reejs/serve/1d1f96.js";server.app[file_1d1f96?.method?.toLowerCase() || "get"]("/api/bot/",file_1d1f96.default);
import * as file_e9d733 from "./.reejs/serve/e9d733.js";server.app[file_e9d733?.method?.toLowerCase() || "get"]("/api/bot/manage",file_e9d733.default);
import * as file_9a7f67 from "./.reejs/serve/9a7f67.js";server.app[file_9a7f67?.method?.toLowerCase() || "get"]("/api/bots/:id",file_9a7f67.default);
import * as file_f5140a from "./.reejs/serve/f5140a.js";server.app[file_f5140a?.method?.toLowerCase() || "get"]("/api/bots/new",file_f5140a.default);

		
	  
	
	serve(server.app.fetch)
			