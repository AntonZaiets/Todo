import { z } from 'zod';
import { TodoListScheme, TodoScheme } from '@/shared/schemes';

export type TTask = z.infer<typeof TodoScheme>;
export type TTasksList = z.infer<typeof TodoListScheme>;
