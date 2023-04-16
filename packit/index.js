import "https://esm.sh/preact@10.13.2/debug";
	  import inline from "https://cdn.jsdelivr.net/npm/@twind/with-react/inline/+esm";
import tw from "./.reejs/serve/901c8c.js";
	  
	  import ReeServer from "./node_modules/@reejs/server/index.js";
			import { serve } from 'https://deno.land/std/http/server.ts'
		import { Hono } from "https://esm.sh/hono@3.0.3?bundle";
		import render from "https://esm.sh/preact-render-to-string@6.0.2";
		import React from "https://esm.sh/preact@10.13.2/compat";
		import App from "./.reejs/serve/1fa4b6.js";
		const server = new ReeServer(Hono, {});
	
		import file_9873f2 from "./.reejs/serve/9873f2.js";
							server.app.get("/",(c)=>{ let h = "<!DOCTYPE html>"+render(React.createElement(App,null,React.createElement(file_9873f2,null))).replace('<script id="__reejs"></script>','<script type="importmap">{"imports":{"debug":"https://esm.sh/preact@10.13.2/debug","react":"https://esm.sh/preact@10.13.2/compat","@twind/core":"https://cdn.jsdelivr.net/npm/@twind/core/+esm","@twind/preset-autoprefix":"https://cdn.jsdelivr.net/npm/@twind/preset-autoprefix/+esm","@twind/preset-tailwind":"https://cdn.jsdelivr.net/npm/@twind/preset-tailwind/+esm","@twind/with-react":"https://cdn.jsdelivr.net/npm/@twind/with-react/+esm","@twind/with-react/inline":"https://cdn.jsdelivr.net/npm/@twind/with-react/inline/+esm"}}</script><script type="module">let i=(await import("/__reejs/serve/ce57a6.js")).default;i("9873f2.js",null);</script>');return c.html(inline(h,tw))});
							
			
		
		import * as file_7bada2 from "./.reejs/serve/7bada2.js";server.app[file_7bada2?.method?.toLowerCase() || "get"]("/api/bot/",file_7bada2.default);
import * as file_a251b3 from "./.reejs/serve/a251b3.js";server.app[file_a251b3?.method?.toLowerCase() || "get"]("/api/bot/manage",file_a251b3.default);
import * as file_25a4d5 from "./.reejs/serve/25a4d5.js";server.app[file_25a4d5?.method?.toLowerCase() || "get"]("/api/bots/:id",file_25a4d5.default);
import * as file_21666d from "./.reejs/serve/21666d.js";server.app[file_21666d?.method?.toLowerCase() || "get"]("/api/bots/new",file_21666d.default);

		
	  
	
	serve(server.app.fetch)
			