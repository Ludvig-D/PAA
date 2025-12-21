import { useNavigate } from 'react-router-dom';
import Auth from '../components/Auth/Auth';
import { useContext } from 'react';
import { HabitContext } from '../context/HabitContext';
import HabitItem from '../components/HabitItem/HabitItem';
import style from './Home.module.css';

const Home = () => {
  const navigate = useNavigate();

  const {homePageHabits} = useContext(HabitContext);
  console.log ('Home page habits:', homePageHabits);

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
    <div className={style.page}>
      <div className={style.header}>
      <h1>Välkommen!</h1>
      <p>Här är olika funktionerna att välja ifrån</p>

      <div className={style.navButtons}>
      <button onClick={handleGoToTodos}>Gå till Todos & Activity</button>
      <button onClick={handleGoToEvents}>Gå till Event planer</button>
      <button onClick={handleGoToHabits}>Gå till Habits</button>
      </div>

      <div className={style.auth}>
      <Auth />
      </div>
      </div>

      <div className={style.content}>
        <div> {homePageHabits.map((habit) => 
        {habit != undefined && <HabitItem key={habit.id} habit={habit}/> }
        )}</div>
      <div></div>
      <div></div></div>
    </div>
    
  );
};

export default Home;
