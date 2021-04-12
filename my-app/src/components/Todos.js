import React, { useState, useEffect } from 'react'
import TodoItem from './TodoItem'
import AddTodo from './AddTodo'
import axios from 'axios'

import { v4 as uuidv4 } from 'uuid';

const stylesCenter = {
    textAlign: "-webkit-center"
}

const Todos = () => {
    const [todosState, setTodosState] = useState([])


    useEffect(() => {
        const getTodos = async () => {
            try {
                const res = await axios.get(
                    'https://jsonplaceholder.typicode.com/todos?_limit=10'
                )
                // console.log(res.data)
                setTodosState(res.data)
            } catch (error) {
                console.log(error.message)
            }
        }

        getTodos()
    }, [])

    const markStatus = id => {
        const newTodos = todosState.map(todo => {
            if (todo.id === id) todo.status = !todo.status
            return todo
        })

        setTodosState(newTodos)
    }

    const deleteTodo = async id => {
        try {
            await axios.delete('https://jsonplaceholder.typicode.com/todos/${id}')
            const newTodos = todosState.filter(todo => todo.id !== id)
            setTodosState(newTodos)
        } catch (error) {
            console.log(error.message)
        }
    }

    const addTodo = async title => {
        try {
            const res = await axios.post(
                'https://jsonplaceholder.typicode.com/todos',
                {
                    title,
                    status: false
                }
            )
            const newTodos = [...todosState, res.data]
            setTodosState(newTodos)
        } catch (error) {
            console.log(error.message)
        }
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