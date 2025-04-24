import { FS_ERROR } from "./constants.js";
import path from "path";
import { rm } from "fs/promises";

const remove = async () => {
  // Write your code here
  const filePath = path.join(import.meta.dirname, "files", "fileToRemove.txt");
  try {
    await rm(filePath);
  } catch {
    throw new Error(FS_ERROR);
  }
};

await remove();
