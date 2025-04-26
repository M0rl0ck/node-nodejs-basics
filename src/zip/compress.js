import { createReadStream, createWriteStream } from "fs";
import { pipeline } from "stream/promises";
import { createGzip } from "zlib";
import { join } from "path";

const compress = async () => {
  // Write your code here
  const pathToSource = join(import.meta.dirname, "files", "fileToCompress.txt");
  const pathToDestination = join(import.meta.dirname, "files", "archive.gz");

  const sourceStream = createReadStream(pathToSource);
  const destinationStream = createWriteStream(pathToDestination);
  const gzipStream = createGzip();

  await pipeline(sourceStream, gzipStream, destinationStream);
};

await compress();
