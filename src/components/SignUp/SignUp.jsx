import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';

export default function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { createAccount } = useContext(AuthContext);

  const handleSubmit = (e) => {
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
  };

  return (
    <>
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
          <button type="submit">Sign Up</button>
        </div>
      </form>
      <div>
        <p>Already have a account? login</p>
      </div>
    </>
  );
}
