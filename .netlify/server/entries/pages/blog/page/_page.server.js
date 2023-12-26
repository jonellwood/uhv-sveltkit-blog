import { r as redirect } from "../../../../chunks/index.js";
const load = () => {
  throw redirect(301, "/blog");
};
export {
  load
};
