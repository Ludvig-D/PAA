import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
export default function Login({ handleHideSignUp }) {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [quote, setQuote] = useState('');
  function handleSubmit(e) {
    e.preventDefault();

    let successFulLogin = login({ username, password });
    if (successFulLogin) {
      fetch('https://api.kanye.rest/')
        .then((res) => res.json())
        .then((data) => setQuote(data));
      alert(quote);
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
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
          <label htmlFor="password">Password</label>
          <input
            type="password"
            required
            id="password"
            placeholder="username"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <div>
        <p>Dont have a account?</p>
        <button onClick={handleHideSignUp}>Sign Up</button>
      </div>
    </>
  );
}
