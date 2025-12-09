import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css';
import TodoForm from './components/ToDoForm';
import Home from './components/Home';


// To do list
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />;
          <Route path="/form" element={<TodoForm/>} />;
        
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
