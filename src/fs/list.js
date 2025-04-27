import { FS_ERROR } from "./constants.js";
import path from "path";
import { readdir } from "fs/promises";

const list = async () => {
  // Write your code here
  const pathToDirectory = path.join(import.meta.dirname, "files");
  try {
    const files = await readdir(pathToDirectory);
    console.log(files);
  } catch {
    throw new Error(FS_ERROR);
  }
};

await list();
