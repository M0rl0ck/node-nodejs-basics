import { fork } from "child_process";
import { join } from "path";
import { stdin, stdout } from "process";

const spawnChildProcess = async (args) => {
  // Write your code here
  const scriptPath = join(import.meta.dirname, "files", "script.js");
  const childProcess = fork(scriptPath, args, {
    stdio: ["pipe", "pipe", "inherit", "ipc"],
  });
  childProcess.stdout.pipe(stdout);
  stdin.pipe(childProcess.stdin);
};

// Put your arguments in function call to test this functionality
spawnChildProcess([1, 3, 6, 10]);
