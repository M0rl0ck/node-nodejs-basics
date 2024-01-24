import getPatchToFile from "../getPatchToFile.js";
import isFileExist from "./isFileExist.js";
import { ERRORMESSAGE } from "./constants.js";
import { rename as renameFile } from "node:fs/promises";

const rename = async () => {
  const pathToFile = getPatchToFile(
    import.meta.url,
    "files",
    "wrongFilename.txt"
  );
  const pathToNewFile = getPatchToFile(
    import.meta.url,
    "files",
    "properFilename.md"
  );

  const isExist = await isFileExist(pathToNewFile);

  if (isExist) {
    throw new Error(ERRORMESSAGE);
  }

  try {
    await renameFile(pathToFile, pathToNewFile);
  } catch (e) {
    if (e.code === "ENOENT") {
      throw new Error(ERRORMESSAGE);
    }
    console.log(e.message);
  }
};

await rename();
