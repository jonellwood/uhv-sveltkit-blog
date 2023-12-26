import { c as create_ssr_component, f as escape, b as add_attribute, v as validate_component, e as each, m as missing_component } from "../../../../chunks/index3.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { title, excerpt, date, updated, coverImage, coverWidth, coverHeight, categories } = data.meta;
  const { PostContent } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `



${$$result.head += `<!-- HEAD_svelte-c16x48_START -->${$$result.title = `<title>${escape(title)}</title>`, ""}<meta data-key="description" name="description"${add_attribute("content", excerpt, 0)}><meta property="og:type" content="article"><meta property="og:title"${add_attribute("content", title, 0)}><meta name="twitter:title"${add_attribute("content", title, 0)}><meta property="og:description"${add_attribute("content", excerpt, 0)}><meta name="twitter:description"${add_attribute("content", excerpt, 0)}><meta property="og:image:width"${add_attribute("content", coverWidth, 0)}><meta property="og:image:height"${add_attribute("content", coverHeight, 0)}><!-- HEAD_svelte-c16x48_END -->`, ""}


<article class="post">
	<img class="cover-image"${add_attribute("src", coverImage, 0)} alt="" style="${"aspect-ratio: " + escape(coverWidth, true) + " / " + escape(coverHeight, true) + ";"}"${add_attribute("width", coverWidth, 0)}${add_attribute("height", coverHeight, 0)}>

	<h1>${escape(title)}</h1>
	
	<div class="meta"><b>Published:</b> ${escape(date)}
		<br>
		<b>Updated:</b> ${escape(updated)}</div>

	${validate_component(PostContent || missing_component, "svelte:component").$$render($$result, {}, {}, {})}

	${categories ? `<aside class="post-footer"><h2>Posted in: </h2>
			<ul>${each(categories, (category) => {
    return `<li><a href="${"/blog/category/" + escape(category, true) + "/"}">${escape(category)}</a>
					</li>`;
  })}</ul></aside>` : ``}</article>`;
});
export {
  Page as default
};
