import { ERRORMESSAGE } from "./constants.js";
import getPatchToFile from "../getPatchToFile.js";
import { rm } from "node:fs/promises";

const remove = async () => {
  const pathToFile = getPatchToFile(
    import.meta.url,
    "files",
    "fileToRemove.txt"
  );
  try {
    await rm(pathToFile);
  } catch (e) {
    if (e.code === "ENOENT") {
      throw new Error(ERRORMESSAGE);
    }
    console.log(e.message);
  }
};

await remove();
