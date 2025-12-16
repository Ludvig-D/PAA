import { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [allData, setAllData] = useState([]);

  function createAccount(newAccount) {
    let userExist = allData.find(
      (data) => data.username === newAccount.username
    );
    if (userExist) return false;

    setAllData((prev) => [...prev, newAccount]);
  }

  function login(loginData) {
    const { username, password } = loginData;
    let userExist = allData.find((data) => data.username === username);
    if (!userExist || userExist.password !== password) return false;

    return userExist;
  }

  return <AuthContext value={{ createAccount, login }}>{children}</AuthContext>;
};

export default AuthProvider;
