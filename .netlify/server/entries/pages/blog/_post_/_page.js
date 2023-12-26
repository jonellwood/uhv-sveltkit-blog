import { e as error } from "../../../../chunks/index.js";
const __variableDynamicImportRuntimeHelper = (glob, path) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, new Error("Unknown variable dynamic import: " + path)));
  });
};
const load = async ({ params }) => {
  try {
    const post = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../../../lib/posts/even-my-wife-said.md": () => import("../../../../chunks/even-my-wife-said.js"), "../../../lib/posts/me-2.md": () => import("../../../../chunks/me-2.js"), "../../../lib/posts/my-poop-post.md": () => import("../../../../chunks/my-poop-post.js"), "../../../lib/posts/why-I-chose-codepen.md": () => import("../../../../chunks/why-I-chose-codepen.js"), "../../../lib/posts/why-should-I-apologize.md": () => import("../../../../chunks/why-should-I-apologize.js") }), `../../../lib/posts/${params.post}.md`);
    return {
      PostContent: post.default,
      meta: { ...post.metadata, slug: params.post }
    };
  } catch (err) {
    throw error(404, err);
  }
};
export {
  load
};
