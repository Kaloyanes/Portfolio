

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.80311ea7.js","_app/immutable/chunks/scheduler.b0fd5642.js","_app/immutable/chunks/index.0f1d9fda.js"];
export const stylesheets = ["_app/immutable/assets/0.764ad280.css"];
export const fonts = [];
