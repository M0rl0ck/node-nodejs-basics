import { ERRORMESSAGE } from "./constants.js";
import getPatchToFile from "../getPatchToFile.js";
import { readFile } from "node:fs/promises";

const read = async () => {
  const pathToFolder = getPatchToFile(
    import.meta.url,
    "files",
    "fileToRead.txt"
  );
  try {
    const fileText = await readFile(pathToFolder, "utf-8");
    console.log(fileText);
  } catch (e) {
    if (e.code === "ENOENT") {
      throw new Error(ERRORMESSAGE);
    }
    console.log(e.message);
  }
};

await read();
