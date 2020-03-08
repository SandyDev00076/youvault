import React, { useState } from "react";

import { createContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [dir, setDir] = useState([
    // {
    //   id: "someid",
    //   name: "Test Video",
    //   created: new Date().toUTCString(),
    //   link: "https://www.youtube.com/watch?v=NFnb3PnoEgw",
    //   parent: "/"
    // },
    // {
    //   id: "someid1",
    //   name: "Jis Din Tum",
    //   created: new Date().toUTCString(),
    //   link: "https://www.youtube.com/watch?v=zD2sQ8f6BMc",
    //   parent: "/"
    // },
    // {
    //   id: "someid2",
    //   name: "Sections",
    //   created: new Date().toUTCString(),
    //   videos: 3,
    //   parent: "/"
    // }
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
