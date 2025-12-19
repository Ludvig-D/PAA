import SignUp from '../SignUp/SignUp';
import Login from '../Login/Login';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';

import style from './Auth.module.css';

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

  const handleCancelBtn = () => {
    setHideLogin(false);
    setHideSignup(false);
  };

  return (
    <div>
      {loggedin ? (
        <button className={style.btn} onClick={logout}>
          Log out
        </button>
      ) : (
        <>
          <button className={style.btn} onClick={handleHideSignUp}>
            SignUp
          </button>
          <button className={style.btn} onClick={handleHideLogin}>
            Login
          </button>
          {hideSignup && (
            <SignUp
              handleHideLogin={handleHideLogin}
              handleCancelBtn={handleCancelBtn}
            />
          )}
          {hideLogin && (
            <Login
              handleHideSignUp={handleHideSignUp}
              handleCancelBtn={handleCancelBtn}
            />
          )}
        </>
      )}
    </div>
  );
}
