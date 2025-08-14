import { z } from 'zod';

export const IdScheme = z.string();

export const TodoScheme = z.object({
  completed: z.boolean(),
  id: IdScheme,
  title: z.string().min(1, 'Title must be at least 1 character'),
});

export const TodoListScheme = z.array(TodoScheme);
