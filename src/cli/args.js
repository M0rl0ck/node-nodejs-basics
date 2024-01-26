import { argv } from "node:process";

const parseArgs = () => {
  console.log(
    argv
      .slice(2)
      .reduce(
        (accum, arg, index, args) =>
          arg.startsWith("--") &&
          args[index + 1] &&
          !args[index + 1].startsWith("--")
            ? [...accum, `${arg.slice(2)} is ${args[index + 1]}`]
            : accum,
        []
      )
      .join(", ")
  );
};

parseArgs();
