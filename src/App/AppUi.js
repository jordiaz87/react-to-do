import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoSearch } from '../TodoSearch';

function AppUI({
        loading,
        error,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        deleteTodo,
}){
    return (
        <React.Fragment>
      <TodoCounter 
        total={totalTodos}
        completed={completedTodos}
      />
      
      <TodoSearch 

        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      
      <TodoList>
        {loading && <p>Estamos cargando no desesperes</p>}
        {error && <p>hay un error</p>}
        {(!loading && !searchedTodos.length) && <p>crea tu primer todo</p>}
        

        {searchedTodos.map(todo => (
          <TodoItem 
          key={todo.text} 
          text={todo.text}
          completed={todo.completed}
          onComplete={() => completeTodo(todo.text)}
          onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    
    </React.Fragment>
    );
}

export { AppUI };