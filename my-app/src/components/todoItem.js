import React from "react"
import PropTypes from 'prop-types'

const TodoItem = props => {
    const todo = props.todoProps
    const markStatus = props.markStatusFunc
    const delTodo = props.deleteTodoFunc

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

    return (<p style={todoItemStyle}>
        <input style={checkboxStyle} type="checkbox"
            onChange={markStatus.bind(this, todo.id)}
            checked={todo.status}
        />
        {todo.title}
        <button
            style={deleteButtonStyle}
            onClick={delTodo.bind(this, todo.id)}
            type="submit"
        >Delete</button>
    </p>)
}

//PropTypes
TodoItem.propTypes = {
    todoProps: PropTypes.object.isRequired,
    markStatusFunc: PropTypes.func.isRequired,
    deleteTodoFunc: PropTypes.func.isRequired
}
export default TodoItem