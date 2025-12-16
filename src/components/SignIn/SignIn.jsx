import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
export default function SignIn() {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  function handleSubmit(e) {
    e.preventDefault();

    let use = login({ username, password });
    console.log(use);
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
    </>
  );
}
