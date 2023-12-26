import { c as create_ssr_component, b as add_attribute, v as validate_component } from "../../../chunks/index3.js";
import { P as PostsList, a as Pagination } from "../../../chunks/Pagination.js";
import { a as siteDescription } from "../../../chunks/config.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-uzh1dv{border:1px solid #ddd;box-shadow:1px 1px, 2px 2px, 3px 3px, 4px 4px;background-color:#dddddd80}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1t9o4xr_START -->${$$result.title = `<title>Blog</title>`, ""}<meta data-key="description" name="description"${add_attribute("content", siteDescription, 0)}><!-- HEAD_svelte-1t9o4xr_END -->`, ""}

<h1 class="svelte-uzh1dv">Blog</h1>

${validate_component(PostsList, "PostsList").$$render($$result, { posts: data.posts }, {}, {})}

${validate_component(Pagination, "Pagination").$$render($$result, { currentPage: 1, totalPosts: data.total }, {}, {})}`;
});
export {
  Page as default
};
