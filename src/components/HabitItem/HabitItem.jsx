import { useContext } from 'react';
import style from './HabitItem.module.css';
import { HabitContext } from '../../context/HabitContext';
import HabitRep from '../HabitRep/HabitRep';

export default function HabitItem({ habit }) {
  const { removeHabit } = useContext(HabitContext);

  return (
    <div className={style.item}>
      <div>
        <p className={style.title}>{habit.title}</p>
        <p className={`${style.tag} ${style[habit.priority]}`}>
          {habit.priority}
        </p>
        <HabitRep rep={habit.repetisions} id={habit.id} />
      </div>
      <div className={style.removeBtnDiv}>
        <button
          className={style.removeBtn}
          onClick={() => removeHabit(habit.id)}
        >
          Remove Habit
        </button>
      </div>
    </div>
  );
}
