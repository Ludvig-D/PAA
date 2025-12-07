import { useContext } from 'react';
import HabitsForm from '../../components/HabitsForm/HabitsForm';
import { HabitContext } from '../../context/HabitContext';
import HabitItem from '../../components/HabitItem/HabitItem';
import HabitSelects from '../../components/HabitSelects/HabitSelects';

export default function Habits() {
  const { habitList } = useContext(HabitContext);

  return (
    <>
      <h1>Habits</h1>
      <HabitsForm />
      <HabitSelects />
      <div>
        {habitList.map((habit) => (
          <HabitItem key={habit.id} habit={habit} />
        ))}
      </div>
    </>
  );
}
