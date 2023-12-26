import { e as error } from "../../chunks/index.js";
const load = async () => {
  try {
    const ReadMeFile = await import("../../chunks/README.js");
    const ReadMe = ReadMeFile.default;
    return {
      ReadMe
    };
  } catch (err) {
    throw error(500, err);
  }
};
export {
  load
};
