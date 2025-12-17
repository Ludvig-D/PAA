import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [allData, setAllData] = useState(
    JSON.parse(localStorage.getItem('allData')) || []
  );
  const [userData, setUserData] = useState(
    JSON.parse(sessionStorage.getItem('userData')) || ''
  );

  useEffect(() => {
    localStorage.setItem('allData', JSON.stringify(allData));
  }, [allData]);

  useEffect(() => {
    sessionStorage.setItem('userData', JSON.stringify(userData));
  }, [userData]);

  function login(loginData) {
    const { username, password } = loginData;
    let userExist = allData.find((data) => data.username === username);
    if (!userExist || userExist.password !== password) return false;

    setUserData(userExist);

    return userExist;
  }

  function createAccount(newAccount) {
    let userExist = allData.find(
      (data) => data.username === newAccount.username
    );
    if (userExist != undefined) return false;

    setAllData((prev) => [...prev, newAccount]);
    setUserData(newAccount);
  }

  function logout() {
    setUserData('');
    sessionStorage.removeItem('userData');
  }

  return (
    <AuthContext value={{ createAccount, login, logout }}>
      {children}
    </AuthContext>
  );
};

export default AuthProvider;
