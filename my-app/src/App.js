import logo from './logo.svg';
import Header from './components/Header'
import Todos from './components/Todos'
import './App.css';

function App() {
  return (
    <div className="App">
        <Header></Header>
        <Todos></Todos>
    </div>
  );
}

export default App;
