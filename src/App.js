import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoSearch } from './TodoSearch';
// import './App.css';

const todos = [
  { text: 'Estudiar ingles', completed: false },
  { text: 'Estudiar Programacion', completed: false },
  { text: 'lavar', completed: false },
  
]

function App(props) {
  return (

    <React.Fragment>
      <TodoCounter />
      
      <TodoSearch />
      
      <TodoList>
        {todos.map(todo => (
          <TodoItem key={todo.text} text={todo.text}/>
        ))}
      </TodoList>
      <CreateTodoButton />
    
    </React.Fragment>
    
    
  );
}

export default App;
