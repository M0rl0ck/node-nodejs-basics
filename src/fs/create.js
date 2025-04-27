import { FS_ERROR } from "./constants.js";
import path from "path";
import { writeFile } from "fs/promises";

const create = async () => {
  // Write your code here
  const filePath = path.join(import.meta.dirname, "files", "fresh.txt");
  try {
    await writeFile(filePath, "I am fresh and young", { flag: "wx" });
  } catch {
    throw new Error(FS_ERROR);
  }
};

await create();
