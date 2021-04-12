import React, { useState } from 'react'
import TodoItem from './TodoItem'
import AddTodo from './AddTodo'

import { v4 as uuidv4 } from 'uuid';

const stylesCenter = {
    textAlign: "-webkit-center"
}

const Todos = () => {
    const [todosState, setTodosState] = useState([
        {
            id: uuidv4(),
            title: 'Viec 1',
            status: false
        },
        {
            id: uuidv4(),
            title: 'Viec 2',
            status: false
        },
        {
            id: uuidv4(),
            title: 'Viec 3',
            status: false
        }
    ])

    const markStatus = id => {
        const newTodos = todosState.map(todo => {
            if (todo.id === id) todo.status = !todo.status
            return todo
        })

        setTodosState(newTodos)
    }

    const deleteTodo = id => {
        const newTodos = todosState.filter(todo => todo.id !== id)
        setTodosState(newTodos)
    }

    const addTodo = title => {
        const newTodos = [...todosState, {
            id: uuidv4(), 
            title,
            status: false
        }] 

        setTodosState(newTodos)
    }


    // const allTodos = []

    // for (let todo of todosState) {
    //     allTodos.push(<p>{todo}</p>)
    // }

    return (
        <div style={stylesCenter}>
            <AddTodo addTodoFunc={addTodo} />
            {todosState.map(todo => {
                return <TodoItem
                    key={todo.id}
                    todoProps={todo}
                    markStatusFunc={markStatus}
                    deleteTodoFunc={deleteTodo} />
            })}
        </div>
        // <div>
        //     {allTodos}
        // </div>
    )
}

export default Todos