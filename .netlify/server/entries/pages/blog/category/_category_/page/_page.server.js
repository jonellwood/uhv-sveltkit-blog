import { r as redirect } from "../../../../../../chunks/index.js";
const load = async () => {
  throw redirect(301, `/blog/category`);
};
export {
  load
};
