import { stdout } from "process";
import { createReadStream } from "fs";
import { join } from "path";

const read = async () => {
  // Write your code here
  const pathToFile = join(import.meta.dirname, "files", "fileToRead.txt");
  const stream = createReadStream(pathToFile, "utf-8");

  stream.on("close", () => {
    stdout.write("\n");
  });
  stream.pipe(stdout);
};

await read();
