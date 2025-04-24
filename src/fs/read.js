import { FS_ERROR } from "./constants.js";
import { join } from "path";
import { readFile } from "fs/promises";

const read = async () => {
  // Write your code here
  const pathToFile = join(import.meta.dirname, "files", "fileToRead.txt");
  try {
    const data = await readFile(pathToFile, "utf-8");
    console.log(data);
  } catch {
    throw new Error(FS_ERROR);
  }
};

await read();
