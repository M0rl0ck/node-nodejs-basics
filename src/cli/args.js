import { argv } from "node:process";

const parseArgs = () => {
  // Write your code here
  console.log(
    argv
      .slice(2)
      .reduce(
        (acc, arg, index, args) =>
          arg.startsWith("--") &&
          args[index + 1] &&
          !args[index + 1].startsWith("--")
            ? [...acc, `${arg.slice(2)} is ${args[index + 1]}`]
            : acc,
        []
      )
      .join(", ")
  );
};

parseArgs();
