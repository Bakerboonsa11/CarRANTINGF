import React, { createContext, useState, useContext } from "react";

// Create Nav Context
const NavContext = createContext();

// Create a Provider for Nav Context
export const NavProvider = ({ children }) => {
  const [dataAction, setDataAction] = useState(null);

  return (
    <NavContext.Provider value={{ dataAction, setDataAction }}>
      {children}
    </NavContext.Provider>
  );
};

// Custom Hook to Access Nav Context
export const useNav = () => useContext(NavContext);
