import { Transform } from "stream";
import { stdin, stdout } from "process";
import { pipeline } from "stream/promises";

const transform = async () => {
  // Write your code here
  const transformStream = new Transform({
    transform(chunk, encoding, callback) {
      callback(
        null,
        chunk.toString().trim().split("").reverse().join("") + "\n"
      );
    },
  });
  stdout.write("Print something: \n\n");

  await pipeline(stdin, transformStream, stdout);
};

await transform();
