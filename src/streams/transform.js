import { stdin, stdout } from "node:process";
import { pipeline } from "node:stream/promises";
import { Transform } from "node:stream";

const transform = async () => {
  const reverseStream = new Transform({
    transform(data, encoding, callback) {
      const string = data.toString().trim();
      const reversedString = string.split("").reverse().join("");
      callback(null, `${reversedString}\n`);
    },
  });
  await pipeline(stdin, reverseStream, stdout);
};

await transform();
