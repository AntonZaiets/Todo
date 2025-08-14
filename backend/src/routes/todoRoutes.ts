import { Router } from 'express';
import { saveTodoToFile } from '../utils/saveTodoToFile';
import { getTodoFromFile } from '../utils/getTodoFromFile';
import { deleteTodoFromFile } from '../utils/deleteTodoFromFile';
import { patchTodoCompleteFile } from '../utils/patchTodoCompleteFile';
import { IdScheme, TodoListScheme, TodoScheme } from '../../../shared/schemes';

const router = Router();
router.get('/', async (_req, res) => {
  try {
    const todos = await getTodoFromFile();
    const parsedTodos = TodoListScheme.parse(todos);
    res.json(parsedTodos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Could not load todos' });
  }
});

router.post('/', async (req, res) => {
  try {
    const id = crypto.randomUUID();
    const title = req.body.title.trim();
    const todo = {
      id: id,
      title: title,
      completed: false,
    };
    await saveTodoToFile(todo);
    const parsedTodo = TodoScheme.parse(todo);
    res.status(201).json(parsedTodo);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: 'Invalid title' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const id = IdScheme.parse(req.params.id);
    await deleteTodoFromFile(id);
    res.status(204).send();
  } catch (err) {
    console.error(err);
    res.status(404).json({ message: 'Todo not found' });
  }
});
router.patch('/:id', async (req, res) => {
  try {
    const id = IdScheme.parse(req.params.id);
    await patchTodoCompleteFile(id);
    res.status(200).send();
  } catch (err) {
    console.error(err);
    res.status(404).json({ message: 'Todo not found' });
  }
});

export default router;
