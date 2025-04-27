import { join } from "path";
import { stdin } from "process";
import { createWriteStream } from "fs";

const write = async () => {
  // Write your code here
  const pathToFile = join(import.meta.dirname, "files", "fileToWrite.txt");
  const stream = createWriteStream(pathToFile, "utf-8");

  stdin.on("data", (chunk) => {
    stream.write(chunk);
  });
};

await write();
