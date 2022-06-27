import axios from "axios";

let url ='http://localhost:8000/';
export const deleteMany = () => {};

export const createTodo = (data = null) => {
	return axios.post(url + "api/todos", data);
};

export const deleteTodo = (id) => {
	return axios.delete(url + "api/todos/" + id);
};

export const editTodo = (id) => {
	return axios.get(url + "api/todos/" + id);
};

export const updateTodo = (id, data) => {
	return axios.put(url + "api/todos/" + id, data);
};

export const getTodo = (query = "") => {
	return axios.get(url + "api/todos" + query);
};
