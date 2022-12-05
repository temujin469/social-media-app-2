import api from "../utils/axios";
export const register = async (inputs: UserBody) => {
  const response = await api.post("/auth/register", inputs);
  return response.data.data;
};

export const signin = async (inputs: UserBody) => {
  const response = await api.post("/auth/login", inputs);
  return response.data.data;
};

// export const addTodo = async (todo: Todo) => {
//   return await userApi.post("/todos", todo);
// };

// export const updateTodo = async (newTodo: Todo) => {
//   return await userApi.put(`/todos/${newTodo.id}`, newTodo);
// };

// export const deleteTodo = async (id: number) => {
//   return await userApi.delete(`/todos/${id}`);
// };

// export default todosApi;
