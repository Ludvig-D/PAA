import { useState } from 'react';
import style from './HabitsForm.module.css';

export default function HabitsForm() {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('low');

  const titleChange = (e) => {
    setTitle(e.target.value);
  };

  const priorityChange = (e) => {
    setPriority(e.target.value);
  };

  const createHabit = (e) => {
    e.preventDefault();

    const newHabit = {
      title: title,
      repetisions: 0,
      priority,
    };
    console.log(newHabit);

    setTitle('');
    setPriority('low');
  };

  return (
    <div id={style.background}>
      <div>
        <form onSubmit={(e) => createHabit(e)}>
          <div>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              required
              onChange={(e) => titleChange(e)}
              value={title}
            />
          </div>
          <div>
            <select
              name="priority"
              id="prioity"
              onChange={(e) => priorityChange(e)}
              value={priority}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          <button type="submit">Add Habit</button>
        </form>
      </div>
    </div>
  );
}
