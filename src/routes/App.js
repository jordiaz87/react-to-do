import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './home/HomePage';
import { NewTodoPage } from './new/NewTodoPage';
import { EditTodoPage } from './edit/EditTodoPage';



function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new" element={<NewTodoPage />} />
        <Route path="/edit/:id" element={<EditTodoPage />} />
        <Route path="*" element={<p>Not Found</p>} />
      </Routes>
    </HashRouter>
  )

  // const { 
  //   state,
  //   stateUpdaters
  // } = useTodos();

  // const {
  //   error,
  //   loading,
  //   searchedTodos,
  //   totalTodos,
  //   completedTodos,
  //   openModal,
  //   searchValue,
  // } = state;

  // const {
  //   completeTodo,
  //   setOpenModal,
  //   addTodo,
  //   deleteTodo,
  //   setSearchValue,
  //   sincronizeTodos,
  // } = stateUpdaters;

  // return (


//     <React.Fragment>

//     <TodoHeader loading={loading}>
//       <TodoCounter
//         totalTodos={totalTodos}
//         completedTodos={completedTodos}
//       />

//       <TodoSearch 
//         searchValue={searchValue}
//         setSearchValue={setSearchValue}
      
//       /> 
//     </TodoHeader> 

//   <TodoList   
//     error={error}
//     loading={loading}
//     searchedTodos={searchedTodos}
//     totalTodos={totalTodos}
//     searchText={searchValue}
//     onError={ () => <TodosError /> }
//     onLoading={ () => <TodosLoading /> }
//     onEmptyTodos={ () => <EmptyTodos /> }
//     onEmptySearchResults={(searchText) =>
//           <p>No hay resultado para {searchText} </p>} 
//   > 
  
//   {todo => (
//       <TodoItem 
//         key={todo.text} 
//         text={todo.text}
//         completed={todo.completed}
//         onComplete={() => completeTodo(todo.text)}
//         onDelete={() => deleteTodo(todo.text)}
//       />
//   )}
  
//   </TodoList>    
  
   
//    {!!openModal && (
//     <Modal>
//       <TodoForm 
//         addTodo={addTodo}
//         setOpenModal={setOpenModal}

//       />
//    </Modal>
//    )}

//   <CreateTodoButton 
//     setOpenModal={setOpenModal}
//   />

//   <ChangeAlert 
//     sincronize={sincronizeTodos}
//   />

// </React.Fragment>
// );
}

export { App };
