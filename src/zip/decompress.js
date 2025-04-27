import { createReadStream, createWriteStream } from "fs";
import { pipeline } from "stream/promises";
import { createGunzip } from "zlib";
import { join } from "path";
const decompress = async () => {
  // Write your code here
  const pathToSource = join(import.meta.dirname, "files", "archive.gz");
  const pathToDestination = join(
    import.meta.dirname,
    "files",
    "fileToCompress.txt"
  );

  const sourceStream = createReadStream(pathToSource);
  const destinationStream = createWriteStream(pathToDestination);
  const unzipStream = createGunzip();

  await pipeline(sourceStream, unzipStream, destinationStream);
};

await decompress();
