import { BrowserRouter, Routes, Route } from 'react-router';

import Home from './pages/Home';
import EventPage from './pages/Events/EventPage.jsx';
import Habits from './pages/Habits/Habits';
import TodoListPage from './pages/TodoListPage';

import TodoForm from './pages/TodoForm';
import Auth from './components/Auth/Auth.jsx';

function App() {
  return (
    <>
      <h1>hej</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />;
          <Route path="/habits" element={<Habits />} />
          <Route path="todos" element={<TodoListPage />} />;
          <Route path="/form" element={<TodoForm />} />;
          <Route path="/event" element={<EventPage />} />;
          <Route path="/auth" element={<Auth />} />;
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
