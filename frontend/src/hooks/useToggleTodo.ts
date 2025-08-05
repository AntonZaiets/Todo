import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toggleTodo } from "@/api";

export const useToggleTodo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: toggleTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
};
