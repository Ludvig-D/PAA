import { createContext, useEffect, useState } from 'react';

export const HabitContext = createContext();

const HabitProvider = ({ children }) => {
  const [habits, setHabits] = useState([]);

  const addNewHabit = (newHabit) => {
    setHabits((prev) => [...prev, newHabit]);
  };

  // useEffect(() => {
  //   console.log(habits);
  // }, [habits]);

  return (
    <HabitContext value={{ habits, addNewHabit }}>{children}</HabitContext>
  );
};

export default HabitProvider;
