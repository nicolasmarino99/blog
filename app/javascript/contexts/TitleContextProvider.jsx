import React, { useState, useEffect, createContext } from "react";

export const TitleContext = createContext();

const TitleContextProvider = (props) => {
  const [title, setTitle] = useState("");

  return (
    <TitleContext.Provider
      value={{
        title,
        setTitle,
      }}
    >
      {props.children}
    </TitleContext.Provider>
  );
};
export default TitleContextProvider;
