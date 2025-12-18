import { useState, useContext } from 'react';
import style from './HabitsForm.module.css';
import { HabitContext } from '../../context/HabitContext.jsx';

export default function HabitsForm({ toggleHide }) {
  const { addNewHabit } = useContext(HabitContext);
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
      title,
      repetisions: 0,
      priority,
      id: crypto.randomUUID(),
    };

    addNewHabit(newHabit);
    close();
  };

  const close = () => {
    toggleHide();

    setTitle('');
    setPriority('low');
  };

  return (
    <div id={style.background}>
      <div id={style.forground}>
        <h1>New Habit</h1>
        <form onSubmit={(e) => createHabit(e)}>
          <div className={style.inputDiv}>
            <label htmlFor="title">Title </label>
            <input
              type="text"
              id="title"
              name="title"
              required
              onChange={(e) => titleChange(e)}
              value={title}
              placeholder="Title"
            />
          </div>
          <div className={style.inputDiv}>
            <label htmlFor="prioity">Prioity </label>
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
          <div id={style.btnDiv}>
            <button className={style.btn} type="submit">
              Add Habit
            </button>
            <button
              className={style.btn}
              id={style.closeBtn}
              type="button"
              onClick={() => close()}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
