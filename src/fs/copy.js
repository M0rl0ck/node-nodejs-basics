import { FS_ERROR } from "./constants.js";
import path from "path";
import { cp, mkdir } from "fs/promises";

const copy = async () => {
  // Write your code here
  const currentDirectory = import.meta.dirname;
  const sourcePath = path.join(currentDirectory, "files");
  const destinationPath = path.join(currentDirectory, "files_copy");
  try {
    await mkdir(destinationPath);
    await cp(sourcePath, destinationPath, {
      force: false,
      errorOnExist: true,
      recursive: true,
    });
  } catch {
    throw new Error(FS_ERROR);
  }
};

await copy();
