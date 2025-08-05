import {readdir, readFile} from "fs/promises";
import path from "path";

export const getTodoFromFile = async () => {
  const dirPath = path.join(__dirname, "..", "..", "todos");
  const files = await readdir(dirPath);

  return await Promise.all(
      files.map(async (file) => {
          const filePath = path.join(dirPath, file);
          const content = await readFile(filePath, "utf-8");
          return JSON.parse(content);
      }),
  );
};
