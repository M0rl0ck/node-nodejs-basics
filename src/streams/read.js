import { createReadStream } from "node:fs";
import { stdout } from "node:process";
import { getPathToFile } from "../getPaths.js";

const read = async () => {
  const pathToFile = getPathToFile(import.meta.url, "files", "fileToRead.txt");
  const input = createReadStream(pathToFile, "utf-8");
  input.on("error", (err) => {
    stdout.write(err.message);
  });
  input.pipe(stdout);
};

await read();
