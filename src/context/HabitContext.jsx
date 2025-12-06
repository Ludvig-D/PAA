import { createContext, useEffect, useState } from 'react';

export const HabitContext = createContext();

const HabitProvider = ({ children }) => {
  const [habits, setHabits] = useState(
    JSON.parse(localStorage.getItem('habits')) || []
  );

  const addNewHabit = (newHabit) => {
    setHabits((prev) => [...prev, newHabit]);
  };

  const removeHabit = (id) => {
    setHabits((prev) =>
      prev.filter((habit) => {
        if (habit.id !== id) return habit;
      })
    );
  };

  const handelHabitRep = (id, action) => {
    const newHabits = [...habits];
    const rep = newHabits.find((habit) => habit.id === id);
    if (action === 'incremnt') {
      rep.repetisions++;
    } else if (action === 'decremnt' && rep.repetisions > 0) {
      rep.repetisions--;
    }
    setHabits(newHabits);
  };

  useEffect(() => {
    localStorage.setItem('habits', JSON.stringify(habits));
  }, [habits]);

  return (
    <HabitContext
      value={{
        habits,
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
