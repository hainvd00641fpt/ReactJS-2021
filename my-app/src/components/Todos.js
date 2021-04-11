import React, {useState} from 'react'


const Todos = () => {
    const [todosState, setTodosState] = useState(['Viec 01', 'Viec 02', 'Viec 03'])

    // const allTodos = []

    // for (let todo of todosState) {
    //     allTodos.push(<p>{todo}</p>)
    // }

    return (
        <div>
            {todosState.map(todo => {
                return <p>{todo}</p>
            })}
        </div>
        // <div>
        //     {allTodos}
        // </div>
    )
}

export default Todos