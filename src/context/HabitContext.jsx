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

  useEffect(() => {
    localStorage.setItem('habits', JSON.stringify(habits));
  }, [habits]);

  return (
    <HabitContext value={{ habits, addNewHabit, removeHabit }}>
      {children}
    </HabitContext>
  );
};

export default HabitProvider;
