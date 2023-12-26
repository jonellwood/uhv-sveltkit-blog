import { j as json } from "../../../../../chunks/index.js";
const prerender = true;
const GET = () => {
  const posts = /* @__PURE__ */ Object.assign({ "/src/lib/posts/even-my-wife-said.md": () => import("../../../../../chunks/even-my-wife-said.js"), "/src/lib/posts/me-2.md": () => import("../../../../../chunks/me-2.js"), "/src/lib/posts/my-poop-post.md": () => import("../../../../../chunks/my-poop-post.js"), "/src/lib/posts/why-I-chose-codepen.md": () => import("../../../../../chunks/why-I-chose-codepen.js"), "/src/lib/posts/why-should-I-apologize.md": () => import("../../../../../chunks/why-should-I-apologize.js") });
  return json(Object.keys(posts).length);
};
export {
  GET,
  prerender
};
