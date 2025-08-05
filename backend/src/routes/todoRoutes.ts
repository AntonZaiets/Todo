import { Router } from "express";
import { saveTodoToFile } from "../utils/saveTodoToFile";
import { getTodoFromFile } from "../utils/getTodoFromFile";
import { deleteTodoFromFile } from "../utils/deleteTodoFromFile";
import {patchTodoCompleteFile} from "../utils/patchTodoCompleteFile";

const router = Router();
router.get("/", async (_req, res) => {
  try {
    const todos = await getTodoFromFile();
    res.json(todos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Could not load todos" });
  }
});

router.post("/", async (req, res) => {
  const id = crypto.randomUUID();
  const title = req.body.title.trim();
  const todo = {
    id: id,
    title: title,
    completed: false,
  };
  await saveTodoToFile(todo);
  res.status(201).json(todo);
});

router.delete("/:id", async (req, res) => {
  try{
    const id = req.params.id;
    const todo = await deleteTodoFromFile(id)
    res.status(201).json(todo);
  } catch(err){
    console.error(err);
    res.status(404).json({ message: 'Todo not found' });
  }
});
router.patch("/:id", async (req, res) => {
  try{
    const id = req.params.id;
    const todo = await patchTodoCompleteFile(id)
    res.status(201).json(todo);
  } catch(err){
    console.error(err);
    res.status(404).json({ message: 'Todo not found' });
  }
});

export default router;
