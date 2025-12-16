import { useState } from 'react';
export default function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <>
      <form>
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
