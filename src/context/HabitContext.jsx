import { createContext, useEffect, useState } from 'react';

export const HabitContext = createContext();

const HabitProvider = ({ children }) => {
  const [allHabits, setAllHabits] = useState(
    JSON.parse(localStorage.getItem('habits')) || []
  );

  useEffect(() => {
    localStorage.setItem('habits', JSON.stringify(allHabits));
    setHabitList(allHabits);
    filterHabits(filter);
  }, [allHabits]);

  const [sort, setSort] = useState('default');
  const [filter, setFilter] = useState('all');
  const [habitList, setHabitList] = useState(allHabits);

  const addNewHabit = (newHabit) => {
    setAllHabits((prev) => [...prev, newHabit]);
  };

  const removeHabit = (id) => {
    setAllHabits((prev) =>
      prev.filter((habit) => {
        if (habit.id !== id) return habit;
      })
    );

    setHabitList((prev) =>
      prev.filter((habit) => {
        if (habit.id !== id) return habit;
      })
    );
  };

  const handelHabitRep = (id, action) => {
    const newHabits = [...allHabits];
    const rep = newHabits.find((habit) => habit.id === id);
    if (action === 'incremnt') {
      rep.repetisions++;
    } else if (action === 'decremnt' && rep.repetisions > 0) {
      rep.repetisions--;
    } else if (action === 'reset') {
      rep.repetisions = 0;
    } else {
      return;
    }
    setAllHabits(newHabits);
  };

  const filterHabits = (filter) => {
    setFilter(filter);
    const list = [...allHabits];
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
          return allHabits.indexOf(a) - allHabits.indexOf(b);
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
 //Home Page
  const [HomeHabits, setHphl] = useState([]);

  useEffect(() => {
    const habits = [...allHabits];

    const sortedHabits = habits.sort((a, b) => b.repetisions - a.repetisions);

    setHphl([sortedHabits[0], sortedHabits[1], sortedHabits[2]]);
  }, [allHabits]);

  return (
    <HabitContext
      value={{
        allHabits,
        habitList,
        HomeHabits,
        addNewHabit,
        removeHabit,
        handelHabitRep,
        filterHabits,
        sortHabits,
      }}
    >
      {children}
    </HabitContext>
  );
};

export default HabitProvider;
