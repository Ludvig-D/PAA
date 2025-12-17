import { createContext, useState } from 'react';

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  //Lagt till todo
  const addTodo = (todo) => {
    const newTodo = {
      ...todo,
      id: Date.now(),
      status: false
    };
    setTodos([...todos, newTodo]);
  };

  //ta bort todo
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  
  //redigera todo
  const updateTodo = (id, updatedTodo) => {
    setTodos(todos.map(todo =>
      todo.id === id? {...todo, ...updatedTodo}:todo
    ));
  };

  const value = {
    todos,
    addTodo,
    deleteTodo,
    updateTodo
  };




  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  );
};