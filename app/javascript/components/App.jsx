import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { TitleContext } from "../contexts/TitleContextProvider";

const App = () => {
  const { title } = useContext(TitleContext);
  return (
    <>
      <h1>
        {title === ""
          ? "Please enter the dimension of your bag"
          : `you need a: ${title}`}
      </h1>
      <Link to="/form">Launch calculator</Link>
    </>
  );
};

export default App;
