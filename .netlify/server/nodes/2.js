import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.1a2e2c12.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.93323930.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/chunks/index.fec7332a.js","_app/immutable/chunks/config.31af701d.js"];
export const stylesheets = [];
export const fonts = [];
