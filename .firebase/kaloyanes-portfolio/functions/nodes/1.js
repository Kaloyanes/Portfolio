

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.85ec320f.js","_app/immutable/chunks/scheduler.b0fd5642.js","_app/immutable/chunks/index.0f1d9fda.js","_app/immutable/chunks/singletons.a2168cba.js"];
export const stylesheets = [];
export const fonts = [];
