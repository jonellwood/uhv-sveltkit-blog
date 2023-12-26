import { c as create_ssr_component, f as escape, b as add_attribute, v as validate_component } from "../../../../../chunks/index3.js";
import { a as Pagination, P as PostsList } from "../../../../../chunks/Pagination.js";
import { a as siteDescription, p as postsPerPage } from "../../../../../chunks/config.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-uzh1dv{border:1px solid #ddd;box-shadow:1px 1px, 2px 2px, 3px 3px, 4px 4px;background-color:#dddddd80}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let lowerBound;
  let upperBound;
  let { data } = $$props;
  const { page, totalPosts, posts } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  lowerBound = page * postsPerPage - (postsPerPage - 1) || 1;
  upperBound = Math.min(page * postsPerPage, totalPosts);
  return `


${$$result.head += `<!-- HEAD_svelte-19tq2vo_START -->${$$result.title = `<title>Blog - page ${escape(page)}</title>`, ""}<meta data-key="description" name="description"${add_attribute("content", siteDescription, 0)}><!-- HEAD_svelte-19tq2vo_END -->`, ""}


${posts.length ? `<h1 class="svelte-uzh1dv">Posts ${escape(lowerBound)}–${escape(upperBound)} of ${escape(totalPosts)}</h1>
	${validate_component(Pagination, "Pagination").$$render($$result, { currentPage: page, totalPosts }, {}, {})}

	${validate_component(PostsList, "PostsList").$$render($$result, { posts }, {}, {})}

	${validate_component(Pagination, "Pagination").$$render($$result, { currentPage: page, totalPosts }, {}, {})}` : `<h1 class="svelte-uzh1dv">Oops!</h1>

	<p>Sorry, no posts to show here.</p>

	<a href="/blog">Back to blog</a>`}`;
});
export {
  Page as default
};
