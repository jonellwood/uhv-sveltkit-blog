import * as server from '../entries/pages/blog/category/_page.server.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/category/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/blog/category/+page.server.js";
export const imports = ["_app/immutable/nodes/6.04ef2456.js","_app/immutable/chunks/index.fec7332a.js"];
export const stylesheets = [];
export const fonts = [];
