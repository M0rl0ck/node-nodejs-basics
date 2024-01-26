import { ERRORMESSAGE } from "./constants.js";
import { getPathToFile } from "../getPaths.js";
import { readdir } from "node:fs/promises";

const list = async () => {
  const pathToFolder = getPathToFile(import.meta.url, "files");
  try {
    console.log(...(await readdir(pathToFolder)));
  } catch {
    throw new Error(ERRORMESSAGE);
  }
};

await list();
