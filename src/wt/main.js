import { Worker } from "node:worker_threads";
import { cpus } from "node:os";
import { getPathToFile } from "../getPaths.js";

const performCalculations = async () => {
  const pathToWorker = getPathToFile(import.meta.url, "worker.js");
  const cpuInfo = cpus();
  let sendValue = 10;

  const workersPromise = cpuInfo.map(
    () =>
      new Promise((resolve, reject) => {
        const worker = new Worker(pathToWorker, {
          workerData: sendValue++,
        });
        worker.on("message", (message) => resolve(message));
        worker.on("error", reject);
        worker.on("exit", (code) => {
          if (code !== 0)
            reject(new Error(`Worker stopped with exit code ${code}`));
        });
      })
  );

  const workers = Promise.allSettled(workersPromise);

  const result = (await workers).map(({ status, value }) =>
    status === "fulfilled"
      ? { status: "resolved", data: value }
      : { status: "error", data: null }
  );

  console.log(result);
};

await performCalculations();
