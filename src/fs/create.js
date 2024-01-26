import { writeFile } from "node:fs/promises";
import { ERRORMESSAGE } from "./constants.js";
import { getPathToFile } from "../getPaths.js";

const create = async () => {
  const pathToFile = getPathToFile(import.meta.url, "files", "fresh.txt");

  try {
    await writeFile(pathToFile, "I am fresh and young", { flag: "wx" });
  } catch {
    throw new Error(ERRORMESSAGE);
  }
};

await create();
