import { useQuery } from '@tanstack/react-query';
import { getAllTodos } from '@/api';

export const useTodos = () => {
  return useQuery({
    queryKey: ['todos'],
    queryFn: () => getAllTodos(),
  });
};
