import * as universal from '../entries/pages/blog/_post_/_page.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_post_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/blog/[post]/+page.js";
export const imports = ["_app/immutable/nodes/5.e7bdbed6.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.93323930.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/chunks/index.fec7332a.js"];
export const stylesheets = [];
export const fonts = [];
