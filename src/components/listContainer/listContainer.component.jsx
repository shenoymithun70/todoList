import React from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components'


const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
`;


const ListPage = ({todoList}) => {


    return (
        <ListContainer>
            {todoList.length === 0 ? "To do List empty": todoList.map((item , index) => {
               return <div>
                    {item.name}
                </div>
            })}
        </ListContainer>
    )
}

const mapStateToProps = state => ({
    todoList: state.todoList.toDoList
})

export default connect(mapStateToProps, null)(ListPage);