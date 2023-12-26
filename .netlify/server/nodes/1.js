

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.a52dd0aa.js","_app/immutable/chunks/index.fec7332a.js","_app/immutable/chunks/singletons.bf22db20.js"];
export const stylesheets = [];
export const fonts = [];
