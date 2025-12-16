import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import HabitProvider from './context/HabitContext.jsx';
import { EventProvider } from './context/EventContext';
import { TodoProvider } from './context/TodoContext';
import AuthProrivder from './context/AuthContext.jsx';

import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HabitProvider>
      <EventProvider>
        <TodoProvider>
          <AuthProrivder>
            <App />
          </AuthProrivder>
        </TodoProvider>
      </EventProvider>
    </HabitProvider>
  </StrictMode>
);
