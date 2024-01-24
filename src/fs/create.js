import { writeFile } from "node:fs/promises";
import { ERRORMESSAGE } from "./constants.js";
import getPatchToFile from "../getPatchToFile.js";

const create = async () => {
  const pathToFile = getPatchToFile(import.meta.url, "files", "fresh.txt");

  try {
    await writeFile(pathToFile, "I am fresh and young", { flag: "wx" });
  } catch {
    throw new Error(ERRORMESSAGE);
  }
};

await create();
