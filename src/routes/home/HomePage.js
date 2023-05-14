import React from 'react';
import { useTodos } from '../useTodos';
import { TodoList } from '../../ui/TodoList';
import { TodoItem } from '../../ui/TodoItem';
import { CreateTodoButton } from '../../ui/CreateTodoButton';
import { Modal } from '../../ui/Modal';
import { TodoForm } from '../../ui/TodoForm';
import { TodoHeader } from '../../ui/TodoHeader';
import { TodoCounter } from '../../ui/TodoCounter';
import { TodoSearch } from '../../ui/TodoSearch';
import { TodosError } from '../../ui/TodosError';
import { TodosLoading } from '../../ui/TodosLoading';
import { EmptyTodos } from '../../ui/EmptyTodos';
import { ChangeAlert } from '../../ui/ChangeAlert';



function HomePage() {

  const { 
    state,
    stateUpdaters
  } = useTodos();

  const {
    error,
    loading,
    searchedTodos,
    totalTodos,
    completedTodos,
    openModal,
    searchValue,
  } = state;

  const {
    completeTodo,
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
        onEdit={() => console.log('Editar todo')}
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

export { HomePage };
