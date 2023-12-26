import * as server from '../entries/pages/blog/page/_page_/_page.server.js';

export const index = 12;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/page/_page_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/blog/page/[page]/+page.server.js";
export const imports = ["_app/immutable/nodes/12.2dbd6cea.js","_app/immutable/chunks/index.fec7332a.js","_app/immutable/chunks/Pagination.d99b8dad.js","_app/immutable/chunks/config.31af701d.js"];
export const stylesheets = ["_app/immutable/assets/3.e67044ec.css","_app/immutable/assets/Pagination.ea949928.css"];
export const fonts = [];
