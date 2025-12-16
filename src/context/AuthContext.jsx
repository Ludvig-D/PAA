import { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [allData, setAllData] = useState([]);

  function createAccount(newAccount) {
    setAllData((prev) => [...prev, newAccount]);
    console.log(allData);
  }

  return <AuthContext value={{ createAccount }}>{children}</AuthContext>;
};

export default AuthProvider;
