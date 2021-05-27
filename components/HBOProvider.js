import React, { useContext, useState } from "react";

export const StateContext = React.createContext();

export function useStateContext() {
  return useContext(StateContext);
}

export function HBOProvider({ children }) {
  const [user, setUser] = useState("");
  const defaultUserImg =
    "https://images-na.ssl-images-amazon.com/images/M/MV5BMjEzMjA0ODk1OF5BMl5BanBnXkFtZTcwMTA4ODM3OQ@@._V1_UY256_CR5,0,172,256_AL_.jpg";
  const createUserAction = (e) => {
    setUser(e.target.value);
  };
  return (
    <StateContext.Provider value={{ user, createUserAction, defaultUserImg }}>
      {children}
    </StateContext.Provider>
  );
}
