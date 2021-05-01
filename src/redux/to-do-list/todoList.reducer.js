
import todoListActionTypes from './todoList.types'

const INITIAL_STATE = {
    toDoList: [],
}

const addToDolist = (todoList , todoListToBeAdded) => {
    let id;
    if(todoList == null) {
        id = 0;

    } else {
        id = todoList.length + 1;
    }
    console.log(todoListToBeAdded);
    return [...todoList , { id , "name": todoListToBeAdded}]
}

const todoListReducer = (state = INITIAL_STATE , action) => {
    switch(action.type) {
        case todoListActionTypes.ADD_TO_DO_LIST:
            return {
                ...state,
                toDoList: addToDolist(state.toDoList , action.payload),
            }

        default:
            return state;
    } 
}

export default todoListReducer;