import { useContext } from 'react';
import HabitsForm from '../../components/HabitsForm/HabitsForm';
import { HabitContext } from '../../context/HabitContext';
import HabitItem from '../../components/HabitItem/HabitItem';

export default function Habits() {
  const { habits } = useContext(HabitContext);

  console.log(habits);
  return (
    <>
      <p>Habits</p>
      <HabitsForm />

      <div>
        {habits.map((habit) => (
          <HabitItem habit={habit} />
        ))}
      </div>
    </>
  );
}
