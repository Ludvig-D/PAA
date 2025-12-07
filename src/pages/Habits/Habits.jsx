import { useContext, useEffect, useState } from 'react';
import HabitsForm from '../../components/HabitsForm/HabitsForm';
import { HabitContext } from '../../context/HabitContext';
import HabitItem from '../../components/HabitItem/HabitItem';

export default function Habits() {
  const { habits } = useContext(HabitContext);

  const [habitList, setHabitList] = useState(habits);
  const [sort, setSort] = useState('default');

  const addToHabitList = (newHabit) => {
    setHabitList((prev) => [...prev, newHabit]);
  };

  const filterHabits = (filter) => {
    const list = [...habits];
    if (filter === 'all') {
      setHabitList(list);
      sortHabits(sort);
      return;
    }
    const newList = list.filter((habit) => habit.priority === filter);
    setHabitList(newList);
    sortHabits(sort);
  };

  const sortHabits = (sort) => {
    setSort(sort);
    if (sort === 'default') {
      setHabitList((prev) =>
        [...prev].sort((a, b) => {
          return habits.indexOf(a) - habits.indexOf(b);
        })
      );
    } else if (sort === 'repsfall') {
      setHabitList((habits) =>
        [...habits].sort((a, b) => a.repetisions - b.repetisions)
      );
    } else if (sort === 'repsrise') {
      setHabitList((habits) =>
        [...habits].sort((a, b) => b.repetisions - a.repetisions)
      );
    } else if (sort === 'priorise') {
      const order = {
        high: 1,
        medium: 2,
        low: 3,
      };

      setHabitList((prev) =>
        [...prev].sort((a, b) => {
          const rankA = order[a.priority];
          const rankB = order[b.priority];

          return rankA - rankB;
        })
      );
    } else if (sort === 'priofall') {
      const order = {
        low: 1,
        medium: 2,
        high: 3,
      };

      setHabitList((prev) =>
        [...prev].sort((a, b) => {
          const rankA = order[a.priority];
          const rankB = order[b.priority];

          return rankA - rankB;
        })
      );
    }
  };

  return (
    <>
      <p>Habits</p>
      <HabitsForm addHabit={addToHabitList} />

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
