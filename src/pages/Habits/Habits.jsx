import { useContext, useState } from 'react';
import HabitsForm from '../../components/HabitsForm/HabitsForm';
import { HabitContext } from '../../context/HabitContext';
import HabitItem from '../../components/HabitItem/HabitItem';
import HabitSelects from '../../components/HabitSelects/HabitSelects';
import style from './Habits.module.css';
import { useNavigate } from 'react-router';

export default function Habits() {
  const { habitList } = useContext(HabitContext);

  const [hideCreate, setHideCreate] = useState(false);

  const toggleHide = () => {
    setHideCreate((prev) => !prev);
  };

  const nav = useNavigate();
  const handleNavBack = () => {
    nav('/');
  };

  return (
    <div id={style.mainContainer}>
      <h1>Habits</h1>
      <div className={style.backBtnDiv}>
        <button className={style.backBtn} onClick={handleNavBack}>
          {'<-- Back'}
        </button>
      </div>
      <div id={style.test}>
        <button id={style.hideBtn} onClick={() => toggleHide()}>
          Add habit
        </button>
        {hideCreate && <HabitsForm toggleHide={toggleHide} />}
        <HabitSelects />
      </div>
      <div id={style.habitContainer}>
        {habitList.map((habit) => (
          <HabitItem key={habit.id} habit={habit} />
        ))}
      </div>
    </div>
  );
}
