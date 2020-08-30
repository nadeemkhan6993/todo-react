import React, {useState, useEffect} from 'react';
import './App.css';

import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {


    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState('all');
    const [filterTodos, setFilterTodos] = useState([]);

    useEffect(() => {
      getLocalTodos();
    }, []);

    useEffect(()=>{
      filterHandler();
      saveLocalTodos();
    }, [todos, status]);


    const filterHandler = () =>{
      switch(status){
        case 'completed':
          setFilterTodos(todos.filter(todo => todo.completed === true));
          break;
        case 'uncompleted':
          setFilterTodos(todos.filter(todo => todo.completed === false));
          break;
        default: 
          setFilterTodos(todos);
      }
    }


    const saveLocalTodos = () => {
        localStorage.setItem('todos', JSON.stringify(todos));
    };

    const getLocalTodos = () => {
      if (localStorage.getItem("todos") === null) {
        localStorage.setItem("todos", JSON.stringify([]));
      } else {
        let todoLocal = JSON.parse(localStorage.getItem('todos'));
        setTodos(todoLocal);
      }
    };
    


  return (
    <div className="App">
      <header>
        <h1>ToDo</h1>
      </header>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
      />
      <TodoList filterTodos={filterTodos} todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
