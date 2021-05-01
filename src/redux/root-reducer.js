import {combineReducers} from 'redux'
import todoListReducer from './to-do-list/todoList.reducer'

const rootReducer = combineReducers({
    todoList: todoListReducer,
})

export default rootReducer;