import { writeFile, readFile } from "fs/promises";
import path from 'path';

export const patchTodoCompleteFile = async (id: string) => {
    const filePath = path.join(__dirname, '..', '..', 'todos', `${id}.json`);
    const content = await readFile(filePath, 'utf-8');
    let parsedContent = JSON.parse(content);
    parsedContent.completed = !parsedContent.completed;
    await writeFile(filePath, JSON.stringify(parsedContent, null, 2), "utf-8");
}