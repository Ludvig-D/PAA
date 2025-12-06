import { useContext, useState } from 'react';
import HabitsForm from '../../components/HabitsForm/HabitsForm';
import { HabitContext } from '../../context/HabitContext';
import HabitItem from '../../components/HabitItem/HabitItem';

export default function Habits() {
  const { habits } = useContext(HabitContext);

  const [habitList, setHabitList] = useState(habits);

  const filterHabits = (filter) => {
    const list = [...habits];
    const newList = list.filter((habit) => habit.priority === filter);
    setHabitList(newList);
  };

  return (
    <>
      <p>Habits</p>
      <HabitsForm />

      <select
        name="filter"
        id="filter"
        onChange={(e) => filterHabits(e.target.value)}
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <div>
        {habitList.map((habit) => (
          <HabitItem habit={habit} />
        ))}
      </div>
    </>
  );
}
