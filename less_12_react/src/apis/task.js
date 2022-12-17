import { callApi } from "./axios";

export const get = async () => {
  const res = await callApi.get("/task");
  return res;
};

export const create = async ({ name, status }) => {
  const res = await callApi.post("/task", { name, status });
  return res;
};

export const remove = async (id) => {
  const res = await callApi.delete(`/task/${id}`);
  return res;
};

export const update = async (id, { name, status }) => {
  const res = await callApi.put(`/task/${id}`, { name, status });
  return res;
};
