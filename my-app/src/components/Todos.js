import React, {useState} from 'react'
import TodoItem from './todoItem'

const Todos = () => {
    const [todosState, setTodosState] = useState([
        {
            id: '1',
            title: 'Viec 1',
            status: false
        },
        {
            id: '2',
            title: 'Viec 2',
            status: false
        },
        {
            id: '3',
            title: 'Viec 3',
            status: false
        }
    ])

    const markStatus = id => {
        const newTodos = todosState.map( todo => {
            if(todo.id === id) todo.status = !todo.status
                return todo
        })

        setTodosState(newTodos)
    }
    // const allTodos = []

    // for (let todo of todosState) {
    //     allTodos.push(<p>{todo}</p>)
    // }

    return (
        <div>
            {todosState.map( todo => {
                return <TodoItem 
                key={todo.id}
                todoProps={todo} 
                markStatusFunc={markStatus} />
            })}
        </div>
        // <div>
        //     {allTodos}
        // </div>
    )
}

export default Todos