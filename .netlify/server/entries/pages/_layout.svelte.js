import { c as create_ssr_component, a as subscribe, b as add_attribute, d as add_classes, v as validate_component, e as each, f as escape } from "../../chunks/index3.js";
import { n as navItems, s as siteTitle, d as siteAuthor } from "../../chunks/config.js";
import { w as writable } from "../../chunks/index2.js";
const global = "";
const currentPage = writable("");
const isMenuOpen = writable(false);
const NavItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isCurrentPage;
  let $currentPage, $$unsubscribe_currentPage;
  $$unsubscribe_currentPage = subscribe(currentPage, (value) => $currentPage = value);
  let { href } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  isCurrentPage = $currentPage.startsWith(href);
  $$unsubscribe_currentPage();
  return `<li><a${add_attribute("href", href, 0)}${add_attribute("aria-current", isCurrentPage ? "page" : false, 0)}${add_classes((isCurrentPage ? "active" : "").trim())}>${slots.default ? slots.default({}) : ``}</a></li>`;
});
const HamburgerSVG = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg viewBox="0 0 128 128" version="1.1" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><g><rect x="0" y="12.48" width="128" height="18.688"></rect></g><g><rect x="0" y="96.832" width="128" height="18.688"></rect></g><g><rect x="0" y="54.656" width="128" height="18.688"></rect></g></svg>`;
});
const XSVG = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg viewBox="0 0 128 128" version="1.1" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><path d="M64,48.496l-48.496,-48.496l-15.504,15.504l48.496,48.496l-48.496,48.496l15.504,15.504l48.496,-48.496l48.496,48.496l15.504,-15.504l-48.496,-48.496l48.496,-48.496l-15.504,-15.504l-48.496,48.496Z"></path></svg>`;
});
const HamburgerMenuButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isMenuOpen, $$unsubscribe_isMenuOpen;
  $$unsubscribe_isMenuOpen = subscribe(isMenuOpen, (value) => $isMenuOpen = value);
  let { closeOnly = false } = $$props;
  if ($$props.closeOnly === void 0 && $$bindings.closeOnly && closeOnly !== void 0)
    $$bindings.closeOnly(closeOnly);
  $$unsubscribe_isMenuOpen();
  return `<button${add_attribute("aria-pressed", $isMenuOpen, 0)} class="menu-button"${add_attribute("tabindex", $isMenuOpen || !closeOnly ? "0" : "-1", 0)}><span class="sr-only">Toggle hamburger menu</span>
	${closeOnly ? `${validate_component(XSVG, "XSVG").$$render($$result, {}, {}, {})}` : `${validate_component(HamburgerSVG, "HamburgerSVG").$$render($$result, {}, {}, {})}`}</button>`;
});
const MainNav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isMenuOpen, $$unsubscribe_isMenuOpen;
  $$unsubscribe_isMenuOpen = subscribe(isMenuOpen, (value) => $isMenuOpen = value);
  $$unsubscribe_isMenuOpen();
  return `
<nav class="${["main-nav", $isMenuOpen ? "open" : ""].join(" ").trim()}"><ul>${each(navItems, (page) => {
    return `${validate_component(NavItem, "NavItem").$$render($$result, { href: page.route }, {}, {
      default: () => {
        return `${escape(page.title)}
		`;
      }
    })}`;
  })}</ul>
	${validate_component(HamburgerMenuButton, "HamburgerMenuButton").$$render($$result, { closeOnly: "true" }, {}, {})}</nav>`;
});
const Header_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "header.svelte-1290a7r{background-color:#ddd;width:90%;margin-left:5%;margin-right:5%;box-shadow:1px 1px, 2px 2px, 3px 3px, 4px 4px}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<header class="svelte-1290a7r"><a class="skip-to-content-link" href="#main">Skip to main content
	</a>

	<a href="/" class="site-title">${escape(siteTitle)}</a>

	${validate_component(HamburgerMenuButton, "HamburgerMenuButton").$$render($$result, {}, {}, {})}
	${validate_component(MainNav, "MainNav").$$render($$result, {}, {}, {})}
</header>`;
});
const Footer_svelte_svelte_type_style_lang = "";
const css = {
  code: "footer.svelte-19a6jwg{background-color:#ddd;color:var(--primaryColor);width:90%;margin-left:5%;margin-right:5%;box-shadow:1px 1px, 2px 2px, 3px 3px, 4px 4px}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<footer class="svelte-19a6jwg">${validate_component(MainNav, "MainNav").$$render($$result, {}, {}, {})}

	<nav><ul><li><a href="/api/rss.xml" data-sveltekit-reload>RSS</a></li>
			<li><a href="/">Home</a></li></ul></nav>

	<p>©${escape((/* @__PURE__ */ new Date()).getFullYear())} ${escape(siteAuthor)}</p>
</footer>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isMenuOpen, $$unsubscribe_isMenuOpen;
  $$unsubscribe_isMenuOpen = subscribe(isMenuOpen, (value) => $isMenuOpen = value);
  let { data } = $$props;
  const prerender = true;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.prerender === void 0 && $$bindings.prerender && prerender !== void 0)
    $$bindings.prerender(prerender);
  {
    currentPage.set(data.path);
  }
  $$unsubscribe_isMenuOpen();
  return `



<div class="${["layout", $isMenuOpen ? "open" : ""].join(" ").trim()}">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
	<main id="main" tabindex="-1">${slots.default ? slots.default({}) : ``}</main>
	${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Layout as default
};
