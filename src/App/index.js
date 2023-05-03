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
import { ChangeAlert } from '../ChangeAlert';



function App() {

  const { 
    state,
    stateUpdaters
  } = useTodos();

  const {
    error,
    loading,
    searchedTodos,
    totalTodos,
    completeTodo,
    completedTodos,
    openModal,
    searchValue,
  } = state;

  const {
    setOpenModal,
    addTodo,
    deleteTodo,
    setSearchValue,
    sincronizeTodos,
  } = stateUpdaters;

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

  <ChangeAlert 
    sincronize={sincronizeTodos}
  />

</React.Fragment>
);
}

export default App;
