

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.9fba62a4.js","_app/immutable/chunks/index.fec7332a.js"];
export const stylesheets = ["_app/immutable/assets/3.e67044ec.css"];
export const fonts = [];
