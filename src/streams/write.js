import { createWriteStream } from "node:fs";
import { stdin, stdout } from "node:process";
import { getPathToFile } from "../getPaths.js";

const write = async () => {
  const pathToFile = getPathToFile(import.meta.url, "files", "fileToWrite.txt");
  const output = createWriteStream(pathToFile);
  stdin.pipe(output);
};

await write();
