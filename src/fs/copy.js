import { ERRORMESSAGE } from "./constants.js";
import getPatchToFile from "../getPatchToFile.js";
import path from "node:path";
import { mkdir, readdir, copyFile } from "node:fs/promises";

const copy = async () => {
  // Write your code here
  const pathToFolder = getPatchToFile(import.meta.url, "files");
  const pathToCopyFolder = getPatchToFile(import.meta.url, "files_copy");

  try {
    const files = await readdir(pathToFolder);
    await mkdir(pathToCopyFolder);
    for (const file of files) {
      await copyFile(
        path.join(pathToFolder, file),
        path.join(pathToCopyFolder, file)
      );
    }
  } catch (e) {
    if (e.code === "ENOENT" || e.code === "EEXIST") {
      throw new Error(ERRORMESSAGE);
    }
    console.log(e.message);
  }
};

await copy();
