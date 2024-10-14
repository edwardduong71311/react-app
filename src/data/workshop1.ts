import axios from "axios";
import {Todo} from "../components/workshop1/TodoContext";

const host: string = "http://localhost:3001"
export const getTodos = (signal: AbortSignal): Promise<Todo[]> => {
    return new Promise<Todo[]>(resolve => {
        axios.get(`${host}/todos`, {
            signal: signal
        }).then(function (response) {
            resolve(response.data.data);
        }).catch(function (error) {
            console.log(error);
        });
    })
}

export const addTodo = (todo: Todo): Promise<Todo[]> => {
    return new Promise<Todo[]>(resolve => {
        axios.post(`${host}/todo`, {...todo}).then(function (response) {
            resolve(response.data.data);
        }).catch(function (error) {
            console.log(error);
        });
    })
}

export const toggleFinishTodo = (todoId: string): Promise<Todo[]> => {
    return new Promise<Todo[]>(resolve => {
        axios.put(`${host}/todo/${todoId}/finish`).then(function (response) {
            resolve(response.data.data);
        }).catch(function (error) {
            console.log(error);
        });
    })
}

export const removeTodo = (todoId: string): Promise<Todo[]> => {
    return new Promise<Todo[]>(resolve => {
        axios.delete(`${host}/todo/${todoId}`).then(function (response) {
            resolve(response.data.data);
        }).catch(function (error) {
            console.log(error);
        });
    })
}

export const changeFinishStatusAll = (value: boolean): Promise<Todo[]> => {
    return new Promise<Todo[]>(resolve => {
        axios.put(`${host}/todos`, {
            finished: value
        }).then(function (response) {
            resolve(response.data.data);
        }).catch(function (error) {
            console.log(error);
        });
    })
}

export const deleteFinishedTodo = (): Promise<Todo[]> => {
    return new Promise<Todo[]>(resolve => {
        axios.delete(`${host}/todos`).then(function (response) {
            resolve(response.data.data);
        }).catch(function (error) {
            console.log(error);
        });
    })
}