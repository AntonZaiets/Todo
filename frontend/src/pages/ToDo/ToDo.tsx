import { AddTask } from "@/components/AddTask/AddTask";
import { TaskList } from "@/components/TaskList/TaskList";
import { Filter } from "@/components/Filter/Filter";

export const ToDo = () => {
  return (
    <div>
      <AddTask />
      <Filter />
      <TaskList />
    </div>
  );
};
