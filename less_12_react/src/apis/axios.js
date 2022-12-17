import axios from "axios";

export const callApi = axios.create({
  baseURL: "https://638b55067220b45d228d7abc.mockapi.io",
});
