import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.4ac6eeaf.js","_app/immutable/chunks/index.93323930.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/chunks/index.fec7332a.js","_app/immutable/chunks/config.31af701d.js","_app/immutable/chunks/singletons.bf22db20.js"];
export const stylesheets = ["_app/immutable/assets/0.62d97aa6.css"];
export const fonts = [];
