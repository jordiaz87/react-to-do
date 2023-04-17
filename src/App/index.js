import React from 'react';
import { useTodos } from './useTodos';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { TodoHeader } from '../TodoHeader';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';


function App() {

  const { 
    error, 
    loading, 
    searchedTodos, 
    completeTodo, 
    openModal,
    setOpenModal,
    totalTodos, 
    completedTodos,
    deleteTodo, 
    searchValue, 
    setSearchValue,
    addTodo, 
  } = useTodos();

  return (
    <React.Fragment>

    <TodoHeader loading={loading}>
      <TodoCounter
        totalTodos={totalTodos}
        completedTodos={completedTodos}
      />

      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      
      /> 
    </TodoHeader> 

  <TodoList   
    error={error}
    loading={loading}
    searchedTodos={searchedTodos}
    totalTodos={totalTodos}
    searchText={searchValue}
    onError={ () => <TodosError /> }
    onLoading={ () => <TodosLoading /> }
    onEmptyTodos={ () => <EmptyTodos /> }
    onEmptySearchResults={(searchText) =>
          <p>No hay resultado para {searchText} </p>} 
  > 
  
  {/* // render={todo => (
  //     <TodoItem 
  //       key={todo.text} 
  //       text={todo.text}
  //       completed={todo.completed}
  //       onComplete={() => completeTodo(todo.text)}
  //       onDelete={() => deleteTodo(todo.text)}
  //     />
  // )} */}

  {todo => (
      <TodoItem 
        key={todo.text} 
        text={todo.text}
        completed={todo.completed}
        onComplete={() => completeTodo(todo.text)}
        onDelete={() => deleteTodo(todo.text)}
      />
  )}
  
  </TodoList>    
  
   
   {!!openModal && (
    <Modal>
      <TodoForm 
        addTodo={addTodo}
        setOpenModal={setOpenModal}

      />
   </Modal>
   )}

  <CreateTodoButton 
    setOpenModal={setOpenModal}
  />

</React.Fragment>
);
}

export default App;
