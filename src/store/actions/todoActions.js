import { TODO_TYPES } from "../types";

export const addTodo = (task = {}) => {
    return {
        type: TODO_TYPES.ADD_TODO,
        payload: task,
    };
};

export const removeTodo = (id) => {
    return {
        type: TODO_TYPES.REMOVE_TODO,
        payload: id,
    };
};
