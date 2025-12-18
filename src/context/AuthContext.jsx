import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [allData, setAllData] = useState(
    JSON.parse(localStorage.getItem('allData')) || []
  );
  const [userData, setUserData] = useState(
    JSON.parse(sessionStorage.getItem('userData')) || false
  );

  useEffect(() => {
    localStorage.setItem('allData', JSON.stringify(allData));
  }, [allData]);

  useEffect(() => {
    if (userData != null) {
      sessionStorage.setItem('userData', JSON.stringify(userData));
      setAllData((prev) =>
        prev.map((user) => {
          if (userData.id === user.id) return (user = userData);
          return user;
        })
      );
    }
  }, [userData]);

  function login(loginData) {
    const { username, password } = loginData;
    let userExist = allData.find((data) => data.username === username);
    if (!userExist || userExist.password !== password) return false;

    setUserData(userExist);

    return true;
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
    setUserData(false);
    sessionStorage.removeItem('userData');
  }

  function updateUserData(thing, data) {
    if (userData == false) return;
    let updated = Object.assign({}, userData);
    updated[thing] = [...data];
    setUserData(updated);
  }

  return (
    <AuthContext value={{ createAccount, login, logout, updateUserData }}>
      {children}
    </AuthContext>
  );
};

export default AuthProvider;
