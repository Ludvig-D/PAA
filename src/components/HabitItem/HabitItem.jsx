import { useContext } from 'react';
import style from './HabitItem.module.css';
import { HabitContext } from '../../context/HabitContext';

export default function HabitItem({ habit }) {
  const { removeHabit } = useContext(HabitContext);

  return (
    <div id={style.item}>
      <div id={style.firstRow}>
        <p id={style.title}>{habit.title}</p>
        <p id={style.priority}>{habit.priority}</p>
      </div>
      <p id={style.rep}>{habit.repetisions}</p>
      <button onClick={() => removeHabit(habit.id)}>Remove Habit</button>
    </div>
  );
}
