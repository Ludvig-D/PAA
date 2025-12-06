import { useContext } from 'react';
import { HabitContext } from '../../context/HabitContext';

export default function HabitRep({ rep, id }) {
  const { handelHabitRep } = useContext(HabitContext);

  return (
    <div>
      <button onClick={() => handelHabitRep(id, 'incremnt')}>+</button>
      <p>{rep}</p>
      <button onClick={() => handelHabitRep(id, 'decremnt')}>-</button>
      <button>Reset</button>
    </div>
  );
}
