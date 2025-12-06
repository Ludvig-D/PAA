import style from './HabitItem.module.css';

export default function HabitItem({ habit }) {
  return (
    <div id={style.item}>
      <div id={style.firstRow}>
        <p id={style.title}>{habit.title}</p>
        <p id={style.priority}>{habit.priority}</p>
      </div>
      <p id={style.rep}>{habit.repetisions}</p>
    </div>
  );
}
