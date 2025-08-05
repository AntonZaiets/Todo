import { unlink } from 'fs/promises'
import path from 'path';

export const deleteTodoFromFile = async (id: string) => {
    const filePath = path.join(__dirname, '..', '..', 'todos', `${id}.json`)
    await unlink(filePath);
}