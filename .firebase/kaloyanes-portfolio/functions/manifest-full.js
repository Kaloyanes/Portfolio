export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".gitkeep","burgasblues.webp","dark-favicon.png","erasmus.webp","light-favicon.png","logos/facebook.svg","logos/github.svg","logos/instagram.svg","logos/linkedin.svg","logos/x.svg","noit.png","pfp2.webp","pgee.webp","projects/CharGO/1.webp","projects/CharGO/2.webp","projects/CharGO/3.webp","projects/CharGO/4.webp","projects/CharGO/5.webp","projects/CharGO/6.webp","projects/EducateIO/1.webp","projects/EducateIO/10.webp","projects/EducateIO/11.webp","projects/EducateIO/12.webp","projects/EducateIO/13.webp","projects/EducateIO/14.webp","projects/EducateIO/2.webp","projects/EducateIO/3.webp","projects/EducateIO/4.webp","projects/EducateIO/5.webp","projects/EducateIO/6.webp","projects/EducateIO/7.webp","projects/EducateIO/8.webp","projects/EducateIO/9.webp","projects/ReportR/1.webp","projects/ReportR/10.webp","projects/ReportR/11.webp","projects/ReportR/2.webp","projects/ReportR/3.webp","projects/ReportR/4.webp","projects/ReportR/5.webp","projects/ReportR/6.webp","projects/ReportR/7.webp","projects/ReportR/8.webp","projects/ReportR/9.webp","projects/School/1.webp","projects/School/2.webp","projects/School/3.webp","projects/School/4.webp","projects/School/5.webp","projects/School/6.webp","projects/School/7.webp","projects/School/8.webp","robodays.webp","vyarnataposoka.webp"]),
	mimeTypes: {".webp":"image/webp",".png":"image/png",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.10e8bf1a.js","app":"_app/immutable/entry/app.cb6c4d63.js","imports":["_app/immutable/entry/start.10e8bf1a.js","_app/immutable/chunks/scheduler.b0fd5642.js","_app/immutable/chunks/singletons.a2168cba.js","_app/immutable/entry/app.cb6c4d63.js","_app/immutable/chunks/scheduler.b0fd5642.js","_app/immutable/chunks/index.0f1d9fda.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
