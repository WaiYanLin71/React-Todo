import axios from 'axios'

let url = process.env.REACT_APP_URL;
export const deleteMany = () => {

}

export const createTodo = (data = null) => {
    return axios.post(url + 'api/todos', data)
}

export const deleteTodo = (id) => {
    return axios.delete(url + 'api/todos/' + id)
}

export const editTodo = (id) => {
    return axios.get(url + 'api/todos/' + id)
}

export const updateTodo = (id, data) => {
    return axios.put(url + 'api/todos/' + id, data)
}

