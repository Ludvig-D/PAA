import { useContext } from 'react';
import { HabitContext } from '../../context/HabitContext';

export default function HabitSelect() {
  const { sortHabits, filterHabits } = useContext(HabitContext);

  return (
    <div>
      <select
        name="filter"
        id="filter"
        onChange={(e) => filterHabits(e.target.value)}
      >
        <option value="all">All</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <select
        name="sort"
        id="sort"
        onChange={(e) => sortHabits(e.target.value)}
      >
        <option value="default">Default</option>
        <option value="repsfall">Reps Fall</option>
        <option value="repsrise">Reps Rise</option>
        <option value="priofall">Prio Fall</option>
        <option value="priorise">Prio Rise</option>
      </select>
    </div>
  );
}
