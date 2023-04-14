import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { TodoHeader } from '../TodoHeader';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
 
function AppUI(){


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
    } = React.useContext(TodoContext );
    return (
        <React.Fragment>

        <TodoHeader>
          <TodoCounter
            totalTodos={totalTodos}
            completedTodos={completedTodos}
          />

          <TodoSearch 
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          /> 
        </TodoHeader> 
            
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
       
       {!!openModal && (
        <Modal>
          <TodoForm />
       </Modal>
       )}

      <CreateTodoButton 
        setOpenModal={setOpenModal}
      />
    
    </React.Fragment>
    );
}

export { AppUI };