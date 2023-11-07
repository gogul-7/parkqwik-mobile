import React, { createContext, useState } from "react";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [headerNum, setHeaderNum] = useState(1);
  const [hideHeader, setHideHeader] = useState(false);
  const [challanHeader, setChallanHeader] = useState(1);

  return (
    <AppContext.Provider
      value={{
        headerNum,
        hideHeader,
        challanHeader,
        setChallanHeader,
        setHideHeader,
        setHeaderNum,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
