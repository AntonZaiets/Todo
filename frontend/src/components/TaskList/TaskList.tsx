import { type Task, useStore } from "@/store/useTaskStore";
import { useDeleteTodo } from "@/hooks/useDeleteTodo";
import { useToggleTodo } from "@/hooks/useToggleTodo";
import { useTodos } from "@/hooks/useTodos";

export const TaskList = () => {
  const { data: tasks, isLoading } = useTodos();
  const deleteTask = useDeleteTodo();
  const toggleTask = useToggleTodo();
  const filterValue = useStore((store) => store.filter);

  const shouldDisplayTask = (task: Task) => {
    if (filterValue === "all") return true;
    if (filterValue === "completed" && task.completed) return true;
    return filterValue === "incomplete" && !task.completed;
  };

  if (isLoading) return <p>Loading...</p>;
  if (Object.keys(tasks).length === 0) return <p>No todos yet</p>;

  return (
    <div>
      <h1>Task List</h1>
      <ul>
        {tasks
          ?.filter((task: Task) => shouldDisplayTask(task))
          .map((task: Task) => (
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
