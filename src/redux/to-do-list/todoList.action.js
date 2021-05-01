import todoListActionTypes from './todoList.types';


export const addTodoList = todoListItem => ({
    type: todoListActionTypes.ADD_TO_DO_LIST,
    payload: todoListItem,
})