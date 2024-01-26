import { createReadStream } from "node:fs";
import { stdout } from "node:process";
import { createHash } from "node:crypto";
import { getPathToFile } from "../getPaths.js";

const calculateHash = async () => {
  const pathToFile = getPathToFile(
    import.meta.url,
    "files",
    "fileToCalculateHashFor.txt"
  );
  const hash = createHash("sha256");
  const input = createReadStream(pathToFile);
  input.pipe(hash).setEncoding("hex").pipe(stdout);
};

await calculateHash();
