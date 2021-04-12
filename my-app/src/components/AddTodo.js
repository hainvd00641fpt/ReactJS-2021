import React, {useState} from 'react'
import PropTypes from 'prop-types'

const AddTodo = props => {
    const [title, setTitle] = useState('')

    const addTodo = props.addTodoFunc

    const formStyle = {
        display: 'flex',
        width: "50%"
    }

    const inputStyle = {
        width: '95%',
        padding: '10px',
        margin: '5px',
    }

    const submitStyle = {
        margin: '5px'
    }

    const changeTitle = event => {
        setTitle(event.target.value)
    }

    const addSingleTodo = event => {
        event.preventDefault()
        if (title !== '') {
            addTodo(title)
            setTitle('')
        }
    }

    return (
        <form style={formStyle} onSubmit={addSingleTodo}>
            <input type="text" name="title"
                placeholder='them viec'
                onChange={changeTitle}
                value={title}
                style={inputStyle} />
            <input type="submit" value='them' style={submitStyle} />
        </form>
    )
}

AddTodo.propTypes = {
    addTodoFunc: PropTypes.func.isRequired
}

export default AddTodo