import { FS_ERROR } from "./constants.js";
import path from "path";
import { rename as renameFile, access } from "fs/promises";

const isFileExists = async (filePath) => {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
};

const rename = async () => {
  // Write your code here
  const pathToOldFile = path.join(
    import.meta.dirname,
    "files",
    "wrongFilename.txt"
  );
  const pathToNewFile = path.join(
    import.meta.dirname,
    "files",
    "properFilename.md"
  );

  const isExists = await isFileExists(pathToNewFile);
  if (isExists) {
    throw new Error(FS_ERROR);
  }

  try {
    await renameFile(pathToOldFile, pathToNewFile);
  } catch {
    throw new Error(FS_ERROR);
  }
};

await rename();
