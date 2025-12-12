import { useContext } from 'react';
import { HabitContext } from '../../context/HabitContext';
import style from './HabitRep.module.css';

export default function HabitRep({ rep, id }) {
  const { handelHabitRep } = useContext(HabitContext);

  return (
    <div className={style.repContainer}>
      <button
        className={style.btn}
        onClick={() => handelHabitRep(id, 'incremnt')}
      >
        +
      </button>
      <p>{rep}</p>
      <button
        className={style.btn}
        onClick={() => handelHabitRep(id, 'decremnt')}
      >
        -
      </button>
      <button
        className={style.resetBtn}
        onClick={() => handelHabitRep(id, 'reset')}
      >
        Reset
      </button>
    </div>
  );
}
