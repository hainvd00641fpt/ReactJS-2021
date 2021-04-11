import React from "react"

const TodoItem = props => {
    const todo = props.todoProps

    const todoItemStyle = {
        background: '#f4f4f4',
        padding: '10px',
        borderBottom: '1px #ccc dotted',
        textDecoration: todo.status ? 'line-through' : 'none',
        width: '50%'
    }
    
    const deleteButtonStyle = {
        background: '#ff0000',
        color: '#fff',
        border: 'none',
        padding: '5px 9px',
        cursor: 'pointer',
        float: 'right'
    }

    const checkboxStyle = {
        float: 'left'
    }

    return (<p style= {todoItemStyle}>
        <input style={checkboxStyle} type="checkbox" name="" id=""/>
        {todo.title}
        <button style={deleteButtonStyle} type="submit">Delete</button>
        </p>)
}

export default TodoItem