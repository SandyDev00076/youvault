import React, { useState } from "react";

import { createContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [dir, setDir] = useState([
    {
      id: "someid",
      name: "Test Video",
      created: new Date().toUTCString(),
      link: "https://www.youtube.com/watch?v=NFnb3PnoEgw",
      parent: "/"
    }
  ]);
  const config = {
    // getters
    dir,
    //setters
    setDir
  };
  return <AppContext.Provider value={config}>{children}</AppContext.Provider>;
};

export default AppContext;
