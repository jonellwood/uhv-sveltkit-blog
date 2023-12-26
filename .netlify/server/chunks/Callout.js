import { c as create_ssr_component } from "./index3.js";
const Callout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="callout">${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  Callout as C
};
