import React, {useState} from 'react'
import TodoItem from './todoItem'

const Todos = () => {
    const [todosState, setTodosState] = useState([
        {
            title: 'Viec 1',
            status: false
        },
        {
            title: 'Viec 2',
            status: false
        },
        {
            title: 'Viec 3',
            status: true
        }
    ])

    // const allTodos = []

    // for (let todo of todosState) {
    //     allTodos.push(<p>{todo}</p>)
    // }

    return (
        <div>
            {todosState.map(todo => {
                return <TodoItem todoProps={todo}/>
            })}
        </div>
        // <div>
        //     {allTodos}
        // </div>
    )
}

export default Todos