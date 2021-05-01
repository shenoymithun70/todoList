import React, { useState } from 'react'
import { connect } from 'react-redux'
import {addTodoList} from '../../redux/to-do-list/todoList.action.js'


const InputPage = ({ addTodoList }) => {

    const [todoItem , settoDoItem] = useState()

    const onInputChange = event => {
        // console.log(event.target.value);
        settoDoItem(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        addTodoList(todoItem);
        settoDoItem("")
    }


    return (
        <div>
            <input value={todoItem} onChange={onInputChange} placeholder="To do items" type="text"/>
            <button onClick={handleSubmit} type="submit">Submit</button>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addTodoList: todoItem => dispatch(addTodoList(todoItem))
})

export default connect(null , mapDispatchToProps)(InputPage);