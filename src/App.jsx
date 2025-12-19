import { BrowserRouter, Routes, Route } from 'react-router';

import Home from './pages/Home';
import EventPage from './pages/Events/EventPage.jsx';
import Habits from './pages/Habits/Habits';
import TodoListPage from './pages/TodoListPage';
import TodoForm from './pages/TodoForm';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />;
          <Route path="/habits" element={<Habits />} />
          <Route path="todos" element={<TodoListPage />} />;
          <Route path="/form" element={<TodoForm />} />;
          <Route path="/event" element={<EventPage />} />;
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
