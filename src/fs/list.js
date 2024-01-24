import { ERRORMESSAGE } from "./constants.js";
import getPatchToFile from "../getPatchToFile.js";
import { readdir } from "node:fs/promises";

const list = async () => {
  const pathToFolder = getPatchToFile(import.meta.url, "files");
  try {
    console.log(...(await readdir(pathToFolder)));
  } catch {
    throw new Error(ERRORMESSAGE);
  }
};

await list();
