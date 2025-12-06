import { createContext, useEffect, useState } from 'react';

export const HabitContext = createContext();

const HabitProvider = ({ children }) => {
  const [habits, setHabits] = useState([]);

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
    console.log(habits);
  }, [habits]);

  return (
    <HabitContext value={{ habits, addNewHabit, removeHabit }}>
      {children}
    </HabitContext>
  );
};

export default HabitProvider;
