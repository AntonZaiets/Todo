import { IdScheme, TodoListScheme, TodoScheme } from '../../../shared/schemes';
import { requestForm } from '@/api/utils/requestForm';
import { TTask, TTasksList } from '../../../shared/types';

export const getAllTodos = async () => {
  return requestForm<TTasksList>({
    method: 'get',
    url: '/todos',
    zod: TodoListScheme,
  });
};

export const addTodo = async (title: string) => {
  return requestForm<TTask>({
    method: 'post',
    url: '/todos',
    params: { title },
    zod: TodoScheme.pick({ title: true }),
  });
};

export const deleteTodo = async (id: string) => {
  return requestForm<string>({
    method: 'delete',
    url: `/todos/${id}`,
    zod: IdScheme,
  });
};

export const toggleTodo = async (id: string) => {
  return requestForm<string>({
    method: 'patch',
    url: `/todos/${id}`,
    zod: IdScheme,
  });
};
