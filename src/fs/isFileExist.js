import { access, constants } from "node:fs/promises";

const isFileExist = async (pathToFile) => {
  try {
    await access(pathToFile, constants.F_OK);
    return true;
  } catch {
    return false;
  }
};

export default isFileExist;
