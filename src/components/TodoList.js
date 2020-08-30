import React from 'react';
import Todo from './Todo';

const TodoList = ({todos, setTodos, filterTodos}) => {

    console.log(todos)
    return (
      <div className="todo-container">
        <ul className="todo-list">
        {filterTodos.map(todo => (
            <Todo todos={todos} setTodos={setTodos} todo={todo} text={todo.text} key={todo.id} />
        ))}
        </ul>
      </div>
    );
}

export default TodoList;
