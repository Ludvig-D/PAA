const { createContext } = require('react');

export const HabitContext = createContext();

const HabitProvider = ({ children }) => {
  return <HabitContext>{children}</HabitContext>;
};
