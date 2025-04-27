import { env } from "process";

const parseEnv = () => {
  // Write your code here
  const envRes = Object.entries(env)
    .reduce((acc, [key, value]) => {
      return key.startsWith("RSS_") ? [...acc, `${key}=${value}`] : acc;
    }, [])
    .join("; ");

  console.log(envRes);
};

parseEnv();
