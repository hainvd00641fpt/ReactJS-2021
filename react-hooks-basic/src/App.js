import './App.scss';
import React, {useState} from 'react'
import ColorBox from './component/ColorBox';
import TodoList from './component/TodoList';
import TodoForm from './component/TodoForm';

function App() {
  const [todoList, setTodolist] = useState([
    { id: 1, title: 'I love Easy Frontend! 😍 ' },
    { id: 2, title: 'We love Easy Frontend! 🥰 ' },
    { id: 3, title: 'They love Easy Frontend! 🚀 ' },
  ]);

  function handleTodoClick(todo ) {
    console.log(todo);
    const index = todoList.findIndex( x => x.id === todo.id);
    if (index < 0) return;

    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodolist(newTodoList);
    }

  function handleTodoFormSubmit(formValues) {
    console.log('form submit ', formValues);

    const newTodo = {
      id: todoList.length +1,
      ...formValues,
    };
    const newTodoList = [...todoList];
    newTodoList.push(newTodo);

    setTodolist(newTodoList);
  }

  return (
    <div className="app">
      <TodoForm onSubmit={handleTodoFormSubmit}/>
      <TodoList todos={todoList} onTodoClick= {handleTodoClick}  />
      <ColorBox />

    </div>
  );
}

export default App;
