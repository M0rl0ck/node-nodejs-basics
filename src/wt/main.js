import { Worker } from "worker_threads";
import { join } from "path";
import { cpus } from "os";

const performCalculations = async () => {
  // Write your code here
  const pathToWorker = join(import.meta.dirname, "worker.js");
  const cpusCount = cpus();
  let value = 10;

  const workersPromises = cpusCount.map(() => {
    return new Promise((resolve, reject) => {
      const worker = new Worker(pathToWorker, {
        workerData: value++,
      });
      worker.on("message", resolve);
      worker.on("error", reject);
      worker.on("exit", (code) => {
        if (code !== 0) {
          reject(new Error(`Worker stopped with exit code ${code}`));
        }
      });
    });
  });

  const workers = await Promise.allSettled(workersPromises);

  const results = workers.map(({ status, value }) => {
    return status === "fulfilled"
      ? { status: "resolved", data: value }
      : { status: "error", data: null };
  });

  console.log(results);
};

await performCalculations();
