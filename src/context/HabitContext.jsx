const { createContext, useState } = require('react');

export const HabitContext = createContext();

const HabitProvider = ({ children }) => {
  const [habits, setHabits] = useState([]);

  const addHabits = (newHabit) => {
    setHabits((prev) => [...prev, newHabit]);
  };

  return <HabitContext value={{ addHabits }}>{children}</HabitContext>;
};

export default HabitProvider;
