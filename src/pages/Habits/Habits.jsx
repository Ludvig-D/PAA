import { useContext, useState } from 'react';
import HabitsForm from '../../components/HabitsForm/HabitsForm';
import { HabitContext } from '../../context/HabitContext';
import HabitItem from '../../components/HabitItem/HabitItem';

export default function Habits() {
  const { habits } = useContext(HabitContext);

  const [habitList, setHabitList] = useState(habits);

  const filterHabits = (filter) => {
    const list = [...habits];
    if (filter === 'all') return setHabitList(list);
    const newList = list.filter((habit) => habit.priority === filter);
    setHabitList(newList);
  };

  const sortHabits = (sort) => {
    if (sort === 'default') {
      setHabitList(habits);
    } else if (sort === 'repsfall') {
      setHabitList((habits) =>
        [...habits].sort((a, b) => a.repetisions - b.repetisions)
      );
    } else if (sort === 'repsrise') {
      setHabitList((habits) =>
        [...habits].sort((a, b) => b.repetisions - a.repetisions)
      );
    } else if (sort === 'priofall') {
    } else if (sort === 'priorise') {
    }
  };

  return (
    <>
      <p>Habits</p>
      <HabitsForm />

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

      <div>
        {habitList.map((habit) => (
          <HabitItem habit={habit} />
        ))}
      </div>
    </>
  );
}
