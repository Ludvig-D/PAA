import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css';
import Habits from './pages/Habits/Habits';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" />
          <Route path="/habits" element={<Habits />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
