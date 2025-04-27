import { createHash } from "crypto";
import { createReadStream } from "fs";
import { pipeline } from "stream/promises";
import { join } from "path";
import { stdout } from "process";

const calculateHash = async () => {
  // Write your code here
  const pathToFile = join(
    import.meta.dirname,
    "files",
    "fileToCalculateHashFor.txt"
  );

  const hash = createHash("sha256");
  const stream = createReadStream(pathToFile, "utf-8");
  hash.setEncoding("hex");

  hash.on("end", () => {
    stdout.write("\n");
  });

  await pipeline(stream, hash, stdout);
};

await calculateHash();
