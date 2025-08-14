import { useStore } from '@/store/useTaskStore';
import { useDeleteTodo } from '@/hooks/useDeleteTodo';
import { useToggleTodo } from '@/hooks/useToggleTodo';
import { useTodos } from '@/hooks/useTodos';
import { TTask } from '../../../../shared/types';
import { useCallback } from 'react';

export const TaskList = () => {
  const { data: tasks, isLoading } = useTodos();
  const deleteTask = useDeleteTodo();
  const toggleTask = useToggleTodo();
  const filterValue = useStore((store) => store.filter);

  const shouldDisplayTask = useCallback(
    (task: TTask) => {
      if (filterValue === 'all') return true;
      if (filterValue === 'completed' && task.completed) return true;
      return filterValue === 'incomplete' && !task.completed;
    },
    [filterValue],
  );
  console.log(tasks);

  if (isLoading) return <p>Loading...</p>;
  if (tasks?.length === 0) return <p>No todos yet</p>;

  return (
    <div>
      <h1>Task List</h1>
      <ul>
        {tasks
          ?.filter((task: TTask) => shouldDisplayTask(task))
          .map((task: TTask) => (
            <li key={task.id}>
              {task.title}
              {task.completed ? <p>Done</p> : <p>In progress</p>}
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask.mutate(task.id)}
              />
              <button onClick={() => deleteTask.mutate(task.id)}>Delete</button>
            </li>
          ))}
      </ul>
    </div>
  );
};
