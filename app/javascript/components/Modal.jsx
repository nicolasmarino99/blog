import React, { useContext } from "react";
import { TitleContext } from "../contexts/TitleContextProvider";

const Modal = () => {
  const { title } = useContext(TitleContext);
  return (
    <div>
      {title === ""
        ? "Please enter the dimension of your bag"
        : `Use this ${title}`}
    </div>
  );
};

export default Modal;

//getProducts({ length: 48, width: 14, height: 12, weight: 42 });
//length: 56, width: 18, height: 16, weight: 70>
