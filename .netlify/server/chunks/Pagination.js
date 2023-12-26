import { c as create_ssr_component, e as each, f as escape, b as add_attribute } from "./index3.js";
import { p as postsPerPage } from "./config.js";
const PostsList_svelte_svelte_type_style_lang = "";
const css = {
  code: "ul.svelte-h47wtj{border:2px solid;background:#ddd;box-shadow:1px 1px, 2px 2px, 3px 3px, 4px 4px;margin-top:5%;padding:5%}a.svelte-h47wtj{text-decoration:none}a.svelte-h47wtj:hover{transform:scale(1.005);box-shadow:1px 1px, 2px 2px, 3px 3px, 4px 4px}",
  map: null
};
const PostsList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { posts = [] } = $$props;
  if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0)
    $$bindings.posts(posts);
  $$result.css.add(css);
  return `<ul class="posts-list svelte-h47wtj">${each(posts, (post) => {
    return `<li><article><a href="${"/blog/" + escape(post.slug, true)}" class="svelte-h47wtj"><img${add_attribute("src", post.coverImage, 0)} alt=""${add_attribute("width", post.coverWidth, 0)}${add_attribute("height", post.coverHeight, 0)} style="${"ratio: " + escape(post.coverWidth, true) + " / " + escape(post.coverHeight, true)}">
					<h2>${escape(post.title)}</h2>
				</a></article>

			<p>${escape(post.excerpt)}</p>
		</li>`;
  })}
</ul>`;
});
const Pagination = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { currentPage } = $$props;
  let { totalPosts } = $$props;
  let { path = "/blog/page" } = $$props;
  let pagesAvailable;
  const isCurrentPage = (page) => page == currentPage;
  if ($$props.currentPage === void 0 && $$bindings.currentPage && currentPage !== void 0)
    $$bindings.currentPage(currentPage);
  if ($$props.totalPosts === void 0 && $$bindings.totalPosts && totalPosts !== void 0)
    $$bindings.totalPosts(totalPosts);
  if ($$props.path === void 0 && $$bindings.path && path !== void 0)
    $$bindings.path(path);
  pagesAvailable = Math.ceil(totalPosts / postsPerPage);
  return `
${pagesAvailable > 1 ? `<nav aria-label="Pagination navigation" class="pagination"><ul>${each(Array.from({ length: pagesAvailable }, (_, i) => i + 1), (page) => {
    return `<li><a href="${escape(path, true) + "/" + escape(page, true)}"${add_attribute("aria-current", isCurrentPage(page), 0)}><span class="sr-only">${isCurrentPage(page) ? `Current page:` : `Go to page`}</span>
							${escape(page)}</a>
					</li>`;
  })}</ul></nav>` : ``}`;
});
export {
  PostsList as P,
  Pagination as a
};
