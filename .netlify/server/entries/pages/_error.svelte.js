import { h as getContext, c as create_ssr_component, a as subscribe, f as escape } from "../../chunks/index3.js";
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const Error$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `


<h2>${escape($page.status)}</h2>
<p class="subhead">${escape($page.error.message)}</p>

<p><strong>Sorry!</strong> Maybe try one of these links?</p>
<ul><li><a href="/">Home</a></li></ul>`;
});
export {
  Error$1 as default
};
