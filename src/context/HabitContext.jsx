import { createContext, useEffect, useState } from 'react';

export const HabitContext = createContext();

const HabitProvider = ({ children }) => {
  const [allHabits, setAllHabits] = useState(
    JSON.parse(localStorage.getItem('habits')) || []
  );

  const addNewHabit = (newHabit) => {
    setAllHabits((prev) => [...prev, newHabit]);
  };

  const removeHabit = (id) => {
    setAllHabits((prev) =>
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

  useEffect(() => {
    localStorage.setItem('habits', JSON.stringify(allHabits));
  }, [allHabits]);

  return (
    <HabitContext
      value={{
        allHabits,
        addNewHabit,
        removeHabit,
        handelHabitRep,
      }}
    >
      {children}
    </HabitContext>
  );
};

export default HabitProvider;
