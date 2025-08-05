import { useState } from "react";
import { useAddTodo } from "@/hooks/useAddTodo";

export const AddTask = () => {
  const addTask = useAddTodo();
  const [inputValue, setInputValue] = useState<string>("");

  const handleAddTask = () => {
    if (inputValue.trim() === "") return;
    addTask.mutate(inputValue);
    setInputValue("");
  };
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};
