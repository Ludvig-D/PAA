import SignUp from '../SignUp/SignUp';
import Login from '../Login/Login';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';

export default function Auth() {
  const [hideLogin, setHideLogin] = useState(false);
  const [hideSignup, setHideSignup] = useState(false);

  const { logout } = useContext(AuthContext);

  let loggedin = JSON.parse(sessionStorage.getItem('userData'));

  const handleHideLogin = () => {
    setHideLogin((prev) => !prev);
    if (hideSignup) setHideSignup(false);
  };

  const handleHideSignUp = () => {
    setHideSignup((prev) => !prev);
    if (hideLogin) setHideLogin(false);
  };

  return (
    <div>
      {loggedin ? (
        <button onClick={logout}>Log out</button>
      ) : (
        <>
          <button onClick={handleHideSignUp}>SignUp</button>
          <button onClick={handleHideLogin}>Login</button>
          {hideSignup && <SignUp handleHideLogin={handleHideLogin} />}
          {hideLogin && <Login handleHideSignUp={handleHideSignUp} />}
        </>
      )}
    </div>
  );
}
