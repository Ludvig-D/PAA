import { createContext, useState, useEffect, useRef, useContext } from 'react';
import { AuthContext } from './AuthContext';

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const userDataLoaded = useRef(true);
  const { updateUserData } = useContext(AuthContext);

  useEffect(() => {
    const userData = JSON.parse(sessionStorage.getItem('userData'));
    if (userData) setTodos(userData.todos);
  }, []);

  useEffect(() => {
    if (userDataLoaded.current && todos.length == 0) {
      userDataLoaded.current = false;
      return;
    }
    updateUserData('todos', todos);
  }, [todos]);

  //Lagt till todo
  const addTodo = (todo) => {
    const newTodo = {
      ...todo,
      id: Date.now(),
      status: false,
    };
    setTodos([...todos, newTodo]);
  };

  //ta bort todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  //redigera todo
  const updateTodo = (id, updatedTodo) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, ...updatedTodo } : todo))
    );
  };

  //status
  const toggleStatus = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, status: !todo.status } : todo
      )
    );
  };

  const [homePageTodos, setHomePageTodos] = useState([]);

  useEffect(() => {
    setHomePageTodos([]);

    const todoItems = [...todos];

    let sortedTodos = todoItems.reverse();
    let filterdTodos = sortedTodos.filter((todo) => todo.status !== true);
    console.log(filterdTodos);

    if (filterdTodos.length < 3) {
      for (let i = 0; i < filterdTodos.length; i++) {
        setHomePageTodos((prev) => [...prev, filterdTodos[i]]);
      }
    } else {
      setHomePageTodos([filterdTodos[0], filterdTodos[1], filterdTodos[2]]);
    }
  }, [todos]);

  const value = {
    todos,
    homePageTodos,
    addTodo,
    deleteTodo,
    updateTodo,
    toggleStatus,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
