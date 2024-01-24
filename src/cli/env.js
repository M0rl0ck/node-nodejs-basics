import { env } from "node:process";

const parseEnv = () => {
  console.log(
    Object.entries(env)
      .reduce(
        (accum, [key, value]) =>
          key.startsWith("RSS_") ? [...accum, `${key}=${value}`] : accum,
        []
      )
      .join("; ")
  );
};

parseEnv();
