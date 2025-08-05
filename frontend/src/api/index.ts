import axios from "axios";

const API_URL = "http://localhost:3001";

export const getAllTodos = async () => {
  return await axios.get(`${API_URL}/todos`);
};

export const addTodo = async (title: string) => {
  return await axios.post(`${API_URL}/todos`, { title });
};

export const deleteTodo = async (id: string) => {
  return await axios.delete(`${API_URL}/todos/${id}`);
};

export const toggleTodo = async (id: string) => {
  return await axios.patch(`${API_URL}/todos/${id}`);
};
