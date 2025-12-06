export default function HabitItem({ habit }) {
  return (
    <div>
      <div>
        <p>{habit.title}</p>
        <p>{habit.priority}</p>
      </div>
      <p>{habit.repetisions}</p>
    </div>
  );
}
