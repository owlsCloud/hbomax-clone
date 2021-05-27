import React, { useContext, useState } from "react";

export const StateContext = React.createContext();

export function useStateContext() {
  return useContext(StateContext);
}

export function HBOProvider({ children }) {
  return (
    <StateContext.Provider value={{ test: "Liz" }}>
      {children}
    </StateContext.Provider>
  );
}
