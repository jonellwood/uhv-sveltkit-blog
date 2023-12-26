import { c as create_ssr_component, f as escape } from "../../chunks/index3.js";
import { s as siteTitle } from "../../chunks/config.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-cnbvpd_START -->${$$result.title = `<title>${escape(siteTitle)}</title>`, ""}<!-- HEAD_svelte-cnbvpd_END -->`, ""}



<h2>The Unhealthy Vegan</h2>
<div>This blog started as a way to document my journey from flesh eater to vegan. Turns out that isn&#39;t
	super exciting to write about ... so there will be other stuff on here too. 😃
</div>`;
});
export {
  Page as default
};
