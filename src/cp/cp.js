import { getPathToFile } from "../getPaths.js";
import { fork } from "node:child_process";

const spawnChildProcess = async (args) => {
  const pathToModule = getPathToFile(import.meta.url, "files", "script.js");
  fork(pathToModule, args);
};

// Put your arguments in function call to test this functionality
spawnChildProcess([1, 2, 3]);
