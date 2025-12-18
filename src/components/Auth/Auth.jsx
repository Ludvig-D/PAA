import SignUp from '../SignUp/SignUp';
import SignIn from '../SignIn/SignIn';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

export default function Auth() {
  const { logout } = useContext(AuthContext);
  return (
    <div>
      <SignUp />
      <SignIn />
      <button onClick={() => logout()}>Log out</button>
    </div>
  );
}
