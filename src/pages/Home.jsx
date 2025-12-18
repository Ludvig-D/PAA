import { useNavigate } from 'react-router-dom';
import Auth from '../components/Auth/Auth';

const Home = () => {
  const navigate = useNavigate();

  const handleGoToTodos = () => {
    navigate('/todos');
  };

  const handleGoToEvents = () => {
    navigate('/event');
  };

  const handleGoToHabits = () => {
    navigate('/habits');
  };

  return (
    <div>
      <h1>Välkommen!</h1>
      <p>Här är olika funktionerna att välja ifrån</p>
      <button onClick={handleGoToTodos}>Gå till Todos & Activity</button>
      <button onClick={handleGoToEvents}>Gå till Event planer</button>
      <button onClick={handleGoToHabits}>Gå till Habits</button>
    </div>
  );
};

export default Home;
