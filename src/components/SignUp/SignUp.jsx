import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';

import style from './SignUp.module.css';

export default function SignUp({ handleHideLogin, handleCancelBtn }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { createAccount } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newAccount = {
      username,
      password,
      id: crypto.randomUUID(),
      habits: [],
      todos: [],
      events: [],
    };

    createAccount(newAccount);

    await fetch('https://officeapi.akashrajpurohit.com/quote/random')
      .then((res) => res.json())
      .then((quote) =>
        alert(`Welcome qoute by ${quote.character}: "${quote.quote}"`)
      );
  };

  return (
    <div id={style.background}>
      <div id={style.foreground}>
        <h1>Sign Up</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              id="username"
              placeholder="Username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              required
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <button className={style.btn} type="submit">
              Sign Up
            </button>
          </div>
        </form>
        <div>
          <p>Already have a account?</p>
          <button className={style.btn} onClick={handleHideLogin}>
            Login
          </button>
        </div>
        <button className={style.btn} onClick={handleCancelBtn}>
          Cancel
        </button>
      </div>
    </div>
  );
}
