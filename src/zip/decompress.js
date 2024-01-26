import { createReadStream, createWriteStream } from "node:fs";
import { pipeline } from "node:stream/promises";
import { createUnzip } from "node:zlib";
import { getPathToFile } from "../getPaths.js";

const decompress = async () => {
  const pathToSource = getPathToFile(import.meta.url, "files", "archive.gz");
  const pathToDestination = getPathToFile(
    import.meta.url,
    "files",
    "fileToCompress.txt"
  );

  const readStream = createReadStream(pathToSource);
  const writeStream = createWriteStream(pathToDestination);

  const deCompressStream = createUnzip();

  try {
    await pipeline(readStream, deCompressStream, writeStream);
  } catch (err) {
    console.log(err.message);
  }
};

await decompress();
