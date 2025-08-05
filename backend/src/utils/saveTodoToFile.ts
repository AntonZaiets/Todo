import { writeFile } from "fs/promises";
import path from "path";

type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

export const saveTodoToFile = async (todo: Todo) => {
  const filePath = path.join(__dirname, "..", "..", "todos", `${todo.id}.json`);
  await writeFile(filePath, JSON.stringify(todo, null, 2), "utf-8");
};
