

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.d40f3a88.js","_app/immutable/chunks/scheduler.b0fd5642.js","_app/immutable/chunks/index.0f1d9fda.js"];
export const stylesheets = ["_app/immutable/assets/2.c7786ebf.css"];
export const fonts = [];
