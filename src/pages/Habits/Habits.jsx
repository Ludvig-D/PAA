import { useContext, useState } from 'react';
import HabitsForm from '../../components/HabitsForm/HabitsForm';
import { HabitContext } from '../../context/HabitContext';
import HabitItem from '../../components/HabitItem/HabitItem';
import HabitSelects from '../../components/HabitSelects/HabitSelects';
import style from './Habits.module.css';

export default function Habits() {
  const { habitList } = useContext(HabitContext);

  const [hideCreate, setHideCreate] = useState(false);

  const toggleHide = () => {
    setHideCreate((prev) => !prev);
  };

  return (
    <div id={style.mainContainer}>
      <h1>Habits</h1>
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
