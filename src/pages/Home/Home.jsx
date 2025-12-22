import { useNavigate } from 'react-router-dom';
import Auth from '../../components/Auth/Auth';
import { useContext } from 'react';
import { HabitContext } from '../../context/HabitContext';
import HabitItem from '../../components/HabitItem/HabitItem';
import EventItem from '../../components/EventItem/EventItem';
import style from './Home.module.css';
import { EventContext } from '../../context/EventContext';
import { TodoContext } from '../../context/TodoContext';
import TodosItem from '../../components/TodosItem/TodosItem';

const Home = () => {
  const navigate = useNavigate();

  const { homePageHabits } = useContext(HabitContext);
  const { homePageEvents } = useContext(EventContext);
  const { homePageTodos } = useContext(TodoContext);
  console.log('Home page habits:', homePageTodos);

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
        <div className={style.auth}>
          <Auth />
        </div>
        <h1 className={style.headerH1}>Välkommen!</h1>
        <p className={style.headerText}>
          Här är olika funktionerna att välja ifrån
        </p>

        <div className={style.navButtons}>
          <button onClick={handleGoToTodos}>Gå till Todos & Activity</button>
          <button onClick={handleGoToEvents}>Gå till Event planer</button>
          <button onClick={handleGoToHabits}>Gå till Habits</button>
        </div>
      </div>

      <div className={style.contentContainer}>
        <div className={style.content}>
          {homePageTodos.map((todo) => (
          <TodosItem key={todo.id} todo={todo}/>
          ))}
        </div>
        <div className={style.content}>
          {homePageEvents.map((event) => (
            <EventItem key={event.id} event={event} />
          ))}
        </div>
        <div className={style.content}>
          {homePageHabits.map((habit) => (
            <HabitItem key={habit.id} habit={habit} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
