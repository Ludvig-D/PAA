import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css';
import TodoForm from './pages/TodoForm';
import Home from './pages/Home';
import TodoListPage from './pages/TodoListPage';
import {TodoProvider} from './context/TodoContext';



function App() {
  return (
    <>
      <BrowserRouter>
      <TodoProvider>
        <Routes>
          <Route path="/" element={<Home/>} />;
          <Route path="todos" element={<TodoListPage/>}/>;
          <Route path="/form" element={<TodoForm/>} />;
        
        </Routes>
        </TodoProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
