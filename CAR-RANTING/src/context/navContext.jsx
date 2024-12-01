import React, { createContext, useState, useContext } from "react";

// Create Nav Context
const NavContext = createContext();

// Create a Provider for Nav Context
export const NavProvider = ({ children }) => {
  const [user, setDataAction] = useState(null);

  return (
    <NavContext.Provider value={{ user, setDataAction }}>
      {children}
    </NavContext.Provider>
  );
};

// Custom Hook to Access Nav Context
export const useNav = () => useContext(NavContext);
