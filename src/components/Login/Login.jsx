import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';

import style from './Login.module.css';

export default function Login({ handleHideSignUp, handleCancelBtn }) {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  async function handleSubmit(e) {
    e.preventDefault();

    login({ username, password });

    await fetch('https://officeapi.akashrajpurohit.com/quote/random')
      .then((res) => res.json())
      .then((quote) =>
        alert(`Welcome qoute by ${quote.character}: "${quote.quote}"`)
      );
  }
  return (
    <div id={style.background}>
      <div id={style.foreground}>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              required
              id="username"
              placeholder="username"
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
              placeholder="username"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className={style.btn} type="submit">
            Login
          </button>
        </form>
        <div>
          <p>Dont have a account?</p>
          <button className={style.btn} onClick={handleHideSignUp}>
            Sign Up
          </button>
        </div>
        <button className={style.btn} onClick={handleCancelBtn}>
          Cancel
        </button>
      </div>
    </div>
  );
}
