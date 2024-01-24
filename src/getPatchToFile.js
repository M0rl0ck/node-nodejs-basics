import { fileURLToPath } from "node:url";
import path, { dirname } from "node:path";

const getPathToFile = (url, ...files) => {
  const __dirname = dirname(fileURLToPath(url));
  const pathToFile = path.join(__dirname, ...files);
  return pathToFile;
};
export default getPathToFile;
