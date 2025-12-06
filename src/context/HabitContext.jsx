import { createContext, useState } from 'react';

export const HabitContext = createContext();

const HabitProvider = ({ children }) => {
  const [habits, setHabits] = useState([]);

  const addNewHabit = (newHabit) => {
    setHabits((prev) => [...prev, newHabit]);
  };

  return (
    <HabitContext value={{ habits, addNewHabit }}>{children}</HabitContext>
  );
};

export default HabitProvider;
