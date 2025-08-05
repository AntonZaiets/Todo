import { type TFilter, useStore } from "@/store/useTaskStore";
import type { ChangeEvent } from "react";

export const Filter = () => {
  const setFilter = useStore((store) => store.setFilter);

  const handleFilterChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newFilter = event.target.value as TFilter;
    setFilter(newFilter);
  };
  return (
    <div>
      <select onChange={handleFilterChange}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="incomplete">Incomplete</option>
      </select>
    </div>
  );
};
