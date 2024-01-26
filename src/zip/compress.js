import { createReadStream, createWriteStream } from "node:fs";
import { pipeline } from "node:stream/promises";
import { createGzip } from "node:zlib";
import { getPathToFile } from "../getPaths.js";

const compress = async () => {
  const pathToSource = getPathToFile(
    import.meta.url,
    "files",
    "fileToCompress.txt"
  );
  const pathToDestination = getPathToFile(
    import.meta.url,
    "files",
    "archive.gz"
  );

  const readStream = createReadStream(pathToSource);
  const writeStream = createWriteStream(pathToDestination);

  const compressStream = createGzip();

  await pipeline(readStream, compressStream, writeStream);
};

await compress();
