export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","images/.DS_Store","images/Coldplay_Lifetime.jpg","images/Darude_Sandstorm.jpg","images/Fatboy_Slim_Right_Here_Right_Now.jpg","images/Imagine_Dragons_Thunder.jpg","images/Miley_Cyrus_Midnight_Sky.png","images/Moon_Taxi_Two_High.jpg","images/OneRepublic_Counting_Stars.png","images/Pink_So_What.jpg","images/Shake_it_Out.png","images/X_Ambassadors_Boom.jpeg","images/dev.svg","images/forrest-gump-quote.webp","images/introspection.jpg","images/jefferson-santos-fCEJGBzAkrU-unsplash.jpg","images/jerry-zhang-ePpaQC2c1xA-unsplash.jpg","images/linus-nylund-Q5QspluNZmM-unsplash.jpg","images/logo.png","images/logo.svg","images/nuke.svg","images/old.logo-2.png","images/old.logo.png","images/resume.png","images/tj-tacos-1.jpeg","images/tj-tacos-2.jpeg","images/uh-favicon.png","images/uh-favicon.svg","images/uhv-logos/.DS_Store","images/uhv-logos/pdf/logo-black.pdf","images/uhv-logos/pdf/logo-color.pdf","images/uhv-logos/pdf/logo-no-background.pdf","images/uhv-logos/pdf/logo-white.pdf","images/uhv-logos/png/logo-black.png","images/uhv-logos/png/logo-color.png","images/uhv-logos/png/logo-no-background.png","images/uhv-logos/png/logo-white.png","images/uhv-logos/svg/logo-black.svg","images/uhv-logos/svg/logo-color.svg","images/uhv-logos/svg/logo-no-background.svg","images/uhv-logos/svg/logo-white.svg","images/uhv-logos/the-unhealthy-vegan-high-resolution-logo 2.png","images/uhv-logos/the-unhealthy-vegan-high-resolution-logo-black 2.png","images/uhv-logos/the-unhealthy-vegan-high-resolution-logo-black-transparent 2.png","images/uhv-logos/the-unhealthy-vegan-high-resolution-logo-black-transparent.png","images/uhv-logos/the-unhealthy-vegan-high-resolution-logo-black.png","images/uhv-logos/the-unhealthy-vegan-high-resolution-logo-transparent 2.png","images/uhv-logos/the-unhealthy-vegan-high-resolution-logo-transparent.png","images/uhv-logos/the-unhealthy-vegan-high-resolution-logo-white 2.png","images/uhv-logos/the-unhealthy-vegan-high-resolution-logo-white-transparent 2.png","images/uhv-logos/the-unhealthy-vegan-high-resolution-logo-white-transparent.png","images/uhv-logos/the-unhealthy-vegan-high-resolution-logo-white.png","images/uhv-logos/the-unhealthy-vegan-high-resolution-logo.png","link.svg","svelte-favicon.png","uh-favicon.svg","uhv-logos/.DS_Store","uhv-logos/pdf/logo-black.pdf","uhv-logos/pdf/logo-color.pdf","uhv-logos/pdf/logo-no-background.pdf","uhv-logos/pdf/logo-white.pdf","uhv-logos/png/logo-black.png","uhv-logos/png/logo-color.png","uhv-logos/png/logo-no-background.png","uhv-logos/png/logo-white.png","uhv-logos/svg/logo-black.svg","uhv-logos/svg/logo-color.svg","uhv-logos/svg/logo-no-background.svg","uhv-logos/svg/logo-white.svg","uhv-logos/the-unhealthy-vegan-high-resolution-logo 2.png","uhv-logos/the-unhealthy-vegan-high-resolution-logo-black 2.png","uhv-logos/the-unhealthy-vegan-high-resolution-logo-black-transparent 2.png","uhv-logos/the-unhealthy-vegan-high-resolution-logo-black-transparent.png","uhv-logos/the-unhealthy-vegan-high-resolution-logo-black.png","uhv-logos/the-unhealthy-vegan-high-resolution-logo-transparent 2.png","uhv-logos/the-unhealthy-vegan-high-resolution-logo-transparent.png","uhv-logos/the-unhealthy-vegan-high-resolution-logo-white 2.png","uhv-logos/the-unhealthy-vegan-high-resolution-logo-white-transparent 2.png","uhv-logos/the-unhealthy-vegan-high-resolution-logo-white-transparent.png","uhv-logos/the-unhealthy-vegan-high-resolution-logo-white.png","uhv-logos/the-unhealthy-vegan-high-resolution-logo.png"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".jpeg":"image/jpeg",".svg":"image/svg+xml",".webp":"image/webp",".pdf":"application/pdf"},
	_: {
		client: {"start":"_app/immutable/entry/start.d883bda4.js","app":"_app/immutable/entry/app.eecc6228.js","imports":["_app/immutable/entry/start.d883bda4.js","_app/immutable/chunks/index.fec7332a.js","_app/immutable/chunks/singletons.bf22db20.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/entry/app.eecc6228.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.fec7332a.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js')),
			__memo(() => import('./nodes/12.js')),
			__memo(() => import('./nodes/13.js')),
			__memo(() => import('./nodes/14.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/api/posts.json",
				pattern: /^\/api\/posts\.json\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/posts.json/_server.js'))
			},
			{
				id: "/api/posts/count",
				pattern: /^\/api\/posts\/count\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/posts/count/_server.js'))
			},
			{
				id: "/api/posts/page/[page]",
				pattern: /^\/api\/posts\/page\/([^/]+?)\/?$/,
				params: [{"name":"page","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/posts/page/_page_/_server.js'))
			},
			{
				id: "/api/rss.xml",
				pattern: /^\/api\/rss\.xml\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/rss.xml/_server.js'))
			},
			{
				id: "/blog",
				pattern: /^\/blog\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/blog/category",
				pattern: /^\/blog\/category\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/blog/category/page/[page]",
				pattern: /^\/blog\/category\/page\/([^/]+?)\/?$/,
				params: [{"name":"page","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/blog/category/[category]",
				pattern: /^\/blog\/category\/([^/]+?)\/?$/,
				params: [{"name":"category","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/blog/category/[category]/page",
				pattern: /^\/blog\/category\/([^/]+?)\/page\/?$/,
				params: [{"name":"category","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/blog/category/[category]/page/[page]",
				pattern: /^\/blog\/category\/([^/]+?)\/page\/([^/]+?)\/?$/,
				params: [{"name":"category","optional":false,"rest":false,"chained":false},{"name":"page","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/blog/page",
				pattern: /^\/blog\/page\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/blog/page/[page]",
				pattern: /^\/blog\/page\/([^/]+?)\/?$/,
				params: [{"name":"page","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/blog/[post]",
				pattern: /^\/blog\/([^/]+?)\/?$/,
				params: [{"name":"post","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/library",
				pattern: /^\/library\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/playlists",
				pattern: /^\/playlists\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 14 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
